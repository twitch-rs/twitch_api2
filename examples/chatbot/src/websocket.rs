use std::sync::Arc;

use tokio::sync::Mutex;

use eyre::WrapErr;
use tokio_tungstenite::tungstenite;
use tracing::Instrument;
use twitch_api::{
    eventsub::{
        self,
        event::websocket::{EventsubWebsocketData, ReconnectPayload, SessionData, WelcomePayload},
        Event,
    },
    types::{self},
    HelixClient,
};
use twitch_oauth2::{TwitchToken, UserToken};

pub struct ChatWebsocketClient {
    /// The session id of the websocket connection
    pub session_id: Option<String>,
    /// The token used to authenticate with the Twitch API
    pub token: Arc<Mutex<UserToken>>,
    /// The client used to make requests to the Twitch API
    pub client: HelixClient<'static, reqwest::Client>,
    /// The url to use for websocket
    pub connect_url: url::Url,
    /// Chats to connect to.
    pub chats: Vec<twitch_api::types::UserId>,
}

impl ChatWebsocketClient {
    /// Connect to the websocket and return the stream
    pub async fn connect(
        &self,
    ) -> Result<
        tokio_tungstenite::WebSocketStream<
            tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>,
        >,
        eyre::Error,
    > {
        tracing::info!("connecting to twitch");
        let config = tungstenite::protocol::WebSocketConfig::default();
        let (socket, _) =
            tokio_tungstenite::connect_async_with_config(&self.connect_url, Some(config), false)
                .await
                .wrap_err("Can't connect")?;

        Ok(socket)
    }

    /// Run the websocket subscriber
    #[tracing::instrument(name = "subscriber", skip_all, fields())]
    pub async fn run<Fut>(
        mut self,
        mut event_fn: impl FnMut(Event, types::Timestamp) -> Fut,
    ) -> Result<(), eyre::Error>
    where
        Fut: std::future::Future<Output = ()>,
    {
        // Establish the stream
        let mut s = self
            .connect()
            .await
            .context("when establishing connection")?;
        // Loop over the stream, processing messages as they come in.
        loop {
            tokio::select!(
            Some(msg) = futures::StreamExt::next(&mut s) => {
                let span = tracing::debug_span!("message received", raw_message = ?msg);
                let msg = match msg {
                    Err(tungstenite::Error::Protocol(
                        tungstenite::error::ProtocolError::ResetWithoutClosingHandshake,
                    )) => {
                        tracing::warn!(
                            "connection was sent an unexpected frame or was reset, reestablishing it"
                        );
                        s = self
                            .connect().instrument(span)
                            .await
                            .context("when reestablishing connection")?;
                        continue
                    }
                    _ => msg.context("when getting message")?,
                };
                self.process_message(msg, &mut event_fn).instrument(span).await?
            })
        }
    }

    /// Process a message from the websocket
    pub async fn process_message<Fut>(
        &mut self,
        msg: tungstenite::Message,
        event_fn: &mut impl FnMut(Event, types::Timestamp) -> Fut,
    ) -> Result<(), eyre::Report>
    where
        Fut: std::future::Future<Output = ()>,
    {
        match msg {
            tungstenite::Message::Text(s) => {
                tracing::trace!("{s}");
                // Parse the message into a [twitch_api::eventsub::EventsubWebsocketData]
                match Event::parse_websocket(&s)? {
                    EventsubWebsocketData::Welcome {
                        payload: WelcomePayload { session },
                        ..
                    }
                    | EventsubWebsocketData::Reconnect {
                        payload: ReconnectPayload { session },
                        ..
                    } => {
                        self.process_welcome_message(session).await?;
                        Ok(())
                    }
                    EventsubWebsocketData::Notification { metadata, payload } => {
                        event_fn(payload, metadata.message_timestamp.into_owned()).await;
                        Ok(())
                    }
                    EventsubWebsocketData::Revocation {
                        metadata,
                        payload: _,
                    } => eyre::bail!("got revocation event: {metadata:?}"),
                    EventsubWebsocketData::Keepalive {
                        metadata: _,
                        payload: _,
                    } => Ok(()),
                    _ => Ok(()),
                }
            }
            tungstenite::Message::Close(_) => todo!(),
            _ => Ok(()),
        }
    }

    pub async fn process_welcome_message(
        &mut self,
        data: SessionData<'_>,
    ) -> Result<(), eyre::Report> {
        tracing::info!("connected to twitch chat");
        self.session_id = Some(data.id.to_string());
        if let Some(url) = data.reconnect_url {
            self.connect_url = url.parse()?;
        }
        let mut token = self.token.lock().await;
        // check if the token is expired, if it is, request a new token. This only works if using a oauth service for getting a token
        if token.is_elapsed() {
            token.refresh_token(&self.client).await?;
        }
        let transport = eventsub::Transport::websocket(data.id.clone());
        for id in &self.chats {
            self.client
                .create_eventsub_subscription(
                    eventsub::channel::chat::ChannelChatMessageV1::new(
                        id.clone(),
                        token.user_id().unwrap().to_owned(),
                    ),
                    eventsub::Transport::websocket(self.session_id.clone().unwrap()),
                    &*token,
                )
                .await?;
            self.client
                .create_eventsub_subscription(
                    eventsub::channel::chat::ChannelChatNotificationV1::new(
                        id.clone(),
                        token.user_id().unwrap().to_owned(),
                    ),
                    eventsub::Transport::websocket(self.session_id.clone().unwrap()),
                    &*token,
                )
                .await?;
        }
        Ok(())
    }
}

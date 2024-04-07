//! Get the conduits for your Client.
//! [`get-conduits`](https://dev.twitch.tv/docs/api/reference/#get-conduits)

use super::*;
use crate::eventsub;
use helix::RequestGet;

/// Query Parameters for [Get Conduits](super::create_conduit)
///
/// [`get-conduits`](https://dev.twitch.tv/docs/api/reference/#get-conduits)
#[derive(PartialEq, Eq, Serialize, Clone, Debug, Default)]
#[cfg_attr(feature = "typed-builder", derive(typed_builder::TypedBuilder))]
#[must_use]
#[non_exhaustive]
pub struct GetConduitsRequest {}

impl Request for GetConduitsRequest {
    type Response = Vec<eventsub::Conduit>;

    const PATH: &'static str = "eventsub/conduits";
    #[cfg(feature = "twitch_oauth2")]
    const SCOPE: twitch_oauth2::Validator = twitch_oauth2::validator![];
}

impl RequestGet for GetConduitsRequest {
    fn parse_inner_response(
        request: Option<Self>,
        uri: &http::Uri,
        response: &str,
        status: http::StatusCode,
    ) -> Result<helix::Response<Self, Self::Response>, helix::HelixRequestGetError>
    where
        Self: Sized,
    {
        #[derive(PartialEq, Deserialize, Debug)]
        #[cfg_attr(feature = "deny_unknown_fields", serde(deny_unknown_fields))]
        struct InnerResponse {
            data: Vec<eventsub::Conduit>,
        }

        let response: InnerResponse = helix::parse_json(response, true).map_err(|e| {
            helix::HelixRequestGetError::DeserializeError(
                response.to_string(),
                e,
                uri.clone(),
                status,
            )
        })?;
        Ok(helix::Response::new(
            response.data,
            None,
            request,
            None,
            None,
        ))
    }
}

#[cfg(test)]
#[test]
fn test_uri() {
    use helix::*;
    let req: GetConduitsRequest = GetConduitsRequest::default();

    let uri = req.get_uri().unwrap();
    assert_eq!(
        uri.to_string(),
        "https://api.twitch.tv/helix/eventsub/conduits?"
    );
}

#[cfg(test)]
#[test]
fn test_request() {
    use helix::*;
    let req: GetConduitsRequest = GetConduitsRequest::default();

    let data = br#"{
      "data": [
        {
          "id": "26b1c993-bfcf-44d9-b876-379dacafe75a",
          "shard_count": 15
        },
        {
          "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
          "shard_count": 5
        }
      ]
    }
    "#
    .to_vec();
    let http_response = http::Response::builder().status(200).body(data).unwrap();

    let uri = req.get_uri().unwrap();
    let response = GetConduitsRequest::parse_response(Some(req), &uri, http_response).unwrap();

    assert_eq!(
        response.data,
        vec![
            crate::eventsub::Conduit {
                id: "26b1c993-bfcf-44d9-b876-379dacafe75a".to_string(),
                shard_count: 15,
            },
            crate::eventsub::Conduit {
                id: "bfcfc993-26b1-b876-44d9-afe75a379dac".to_string(),
                shard_count: 5,
            },
        ]
    );

    dbg!("{:#?}", response);
}

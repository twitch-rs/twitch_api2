searchState.loadedDescShard("twitch_api", 3, "Returns the argument unchanged.\nReturns the argument unchanged.\nID of the game the video is of.\nID of the game the video is of.\nGets video information by video ID (one or more), user ID …\nID of the video being queried. Limit: 100. If this is …\nID of the video.\nIDs of the videos being queried.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLanguage of the video being queried. Limit: 1.\nLanguage of the video.\nMuted segments in the video.\nPeriod during which the video was created. Valid values: …\nDate when the video was published.\nSort order of the videos. Valid values: “time”, “…\nID of the stream that the video originated from if the …\nTemplate URL for the thumbnail of the video.\nTitle of the video.\nType of video. Valid values: “all”, “upload”, “…\nType of video. Valid values: “upload”, “archive”, …\nURL of the video.\nID of the user who owns the video.\nID of the user who owns the video.\nID of the user who owns the video.\nLogin of the user who owns the video.\nDisplay name corresponding to user_id.\nNumber of times the video has been viewed.\nIndicates whether the video is publicly viewable. Valid …\nReturn Values for Delete Videos <code>delete-videos</code>\nQuery Parameters for Delete Videos\nVideo(s) deleted.\nCreate a builder for building <code>DeleteVideosRequest</code>. On the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of the video(s) to be deleted. Limit: 5.\nID of the videos to be deleted\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nQuery Parameters for Get Videos\nmuted segment in a video.\nReturn Values for Get Videos\nCursor for forward pagination: tells the server where to …\nCursor for backward pagination: tells the server where to …\nDate when the video was created.\nDescription of the video.\nLength of the video.\nDuration of the muted segment.\nNumber of values to be returned when getting videos by …\nReturns the argument unchanged.\nID of the game the video is of.\nID of the video being queried. Limit: 100. If this is …\nID of the video.\nCalls <code>U::from(self)</code>.\nLanguage of the video being queried. Limit: 1.\nLanguage of the video.\nMuted segments in the video.\nOffset in the video at which the muted segment begins.\nPeriod during which the video was created. Valid values: …\nDate when the video was published.\nSort order of the videos. Valid values: “time”, “…\nID of the stream that the video originated from if the …\nTemplate URL for the thumbnail of the video.\nTitle of the video.\nType of video. Valid values: “all”, “upload”, “…\nType of video. Valid values: “upload”, “archive”, …\nURL of the video.\nID of the user who owns the video.\nID of the user who owns the video.\nLogin of the user who owns the video.\nDisplay name corresponding to user_id.\nNumber of times the video has been viewed.\nIndicates whether the video is publicly viewable. Valid …\nBody Parameters for Send Whisper\nQuery Parameters for Send Whisper\nReturn Values for Send Whisper\nSuccessfully sent the whisper message or the message was …\nCreate a builder for building <code>SendWhisperRequest</code>. On the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe ID of the user sending the whisper. This user must …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe whisper message to send. The message must not be empty.\nCreate a new <code>SendWhisperRequest</code>\nCreate a new message\nSends a whisper message to the specified user. <code>send-whisper</code>\nThe ID of the user to receive the whisper.\nBody Parameters for Send Whisper\nQuery Parameters for Send Whisper\nReturn Values for Send Whisper\nSuccessfully sent the whisper message or the message was …\nThe ID of the user sending the whisper. This user must …\nThe whisper message to send. The message must not be empty.\nThe ID of the user to receive the whisper.\nAutoMod flags a message as potentially inappropriate, and …\nResponse from the automod_queue::AutoModQueue topic.\nAnyone shares a bit badge in a specified channel.\nResponse from the …\nAnyone cheers in a specified channel.\nResponse from the channel_bits::ChannelBitsEventsV2 topic.\nA user redeems a cheer with shared rewards.\nResponse from the channel_cheer::ChannelCheerEventsPublicV1…\nA user redeems an reward using channel points.\nResponse from the channel_points::ChannelPointsChannelV1 …\nA user gifts subs.\nResponse from the channel_sub_gifts::ChannelSubGiftsV1 …\nA subscription event happens in channel\nResponse from the …\nA moderator performs an action in the channel.\nResponse from the moderation::ChatModeratorActions topic.\nA user redeems an reward using channel points.\nResponse from the …\nA user follows the channel\nResponse from the following::Following topic.\nA user redeems an reward using channel points.\nResponse from the hypetrain::HypeTrainEventsV1 topic.\nA user redeems an reward using channel points.\nResponse from the hypetrain::HypeTrainEventsV1Rewards …\nMessage received containing all applicable data\nResponse from a ping\nA user raids the channel\nResponse from the raid::Raid topic.\nRequest for the client to reconnect\nResponse from twitchs PubSub server. Either a response …\nResponse from a subscription/unsubscription\nScopes needed by this topic\nA logical partition of messages that clients may subscribe …\nMessage response from twitch PubSub.\nAll possible topics\nResponse from twitch PubSub\nA user’s message held by AutoMod has been approved or …\nA user’s message held by AutoMod has been approved or …\nStatistics about stream\nResponse from the video_playback::VideoPlayback topic.\nStatistics about stream\nResponse from the video_playback::VideoPlaybackById topic.\nPubSub messages for when AutoMod flags a message as …\nPubSub messages for bits\nPubSub messages for bits\nPubSub messages for cheer events\nPubSub messages for channel points\nPubSub messages for sub gifts\nPubSub messages for subscriptions\nPubSub messages for community points.\nThe error message associated with the request, or an empty …\nPubSub messages for follows\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nPubSub messages for hype-trains\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this into a <code>Topics</code>\nWhether response indicates success or not\nCreate a listen command.\nPubSub messages for moderator actions\nThe nonce that was passed in the request, if one was …\nParse string slice as a response.\nPubSub messages for raids\nCreate a unlisten command.\nPubSub messages for user moderation notifications\nPubSub messages for (live) stream playback information\nData corresponding to topic message\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nMessage reply from topic subscription\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nTopic message\nMessage held by automod\nMessage held by automod\nA user follows the channel\nReply from AutoModQueue\nSpecific AutoMod classification\nFragment that is classified under a AutoMod category which …\nThe contents of a AutoMod message\nClassification for content according to AutoMod\nA fragment of a AutoModded message\nA mentioned user in a fragment\nMessage that was caught by AutoMod\nA user according to Automod\nA users badges in the chat\nFragment that is not classified under a AutoMod category\nA text fragment that mentions another user\nSenders badges\nCategory for classification\nThe channel_id to watch. Can be fetched with the Get Users …\nColor of the user\nThe content of the message\nClassification of caught message\nDisplay name of user\nDisplay name of the user\nThe message split up in fragments.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nChat ID of the message\nId or type of the badge\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLevel of classification, eg. how strongly related the …\nLogin name of the user, not capitalized\nUsername of the user\nThe message that was sent\nThe currently authenticated moderator\nLanguage of the part of the message that was caught\nCode for reason\nUser ID of who resolved the message in the queue\nUsername of who resolved the message in the queue\nUser that sent the message\nTime at which the message was sent\nStatus of the message in the queue\nThe full message that was sent\nThe different topics and their level for the automod …\nID of the user\nUser ID of the user\nVersion of the badge\nAutoMod classification of the fragment\nText associated with this fragment\nText associated with this fragment\nText associated with this fragment\nUser mentioned\n<code>ChannelBitsEventsV2Reply::BitsEvent</code> event unlocked new …\nContext that triggered pubsub message\nBits event\nData for bits event\nAnyone cheers in a specified channel.\nReply from ChannelBitsEventsV2\nCheer\nIf set, describes new unlocked badge for user\nThe number of bits that were sent.\nThe channel_id to watch. Can be fetched with the Get Users …\nID of channel where message was sent\nUsername of channel where message was sent\nThe full message that was sent with the bits.\nContext of <code>bits_event</code>, seems to only be <code>cheer</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the cheer was anonymous.\nTime when pubsub message was sent\nThe total number of bits that were ever sent by the user …\nID of user that sent message\nName of user that sent message\nData associated with reply\nMessage ID of message associated with this <code>bits_event</code>\nVersion of <code>channel-bits-events-v2</code> reply\nAnyone shares a bit badge in a specified channel.\nReply from ChannelBitsBadgeUnlocks\nValue of Bits badge tier that was earned (1000, 10000, …\nThe channel_id to watch. Can be fetched with the Get Users …\nID of channel where user earned the new Bits badge\nLogin of channel where user earned the new Bits badge\nCustom message included with share\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTime when the new Bits badge was earned.\nID of user who earned the new Bits badge\nLogin of user who earned the new Bits badge\nA user redeems a cheer with shared rewards.\nReply from ChannelCheerEventsPublicV1\nCheer\nA cheer bomb happened\nSubscription gift\nSubscription\nTrigger for cheer event/cheer bomb\nThe channel_id to watch. Can be fetched with the Get Users …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDisplay name of user\nDomain of cheer reward. Name of active twitch event\nSelected count for cheer. e.g How many that will receive …\nUnknown\nUnknown\nType of cheerbomb.\nId of the user\nLogin name of the user, not capitalized\nRedemption was updated. Rejected or completed\nA user redeems an reward using channel points.\nReply from ChannelPointsChannelV1\nA custom reward was updated\nRedemption was fullfilled, e.g it skipped reward queue\n`update-redemption-statuses-finished``progress\nA redemption users can “buy” with channel points to …\nStatus for redemption\nStatus of a redemption was changed\nReward data\nA reward was redeemed\nRedemption is not fullfilled, e.g is in reward queue.\nStatus of multiple redemptions were changed\nStatus of multiple redemptions were changed\nColor of background in rewards &amp; challenges screen on …\nThe channel_id to watch. Can be fetched with the Get Users …\nID of channel where the redemption was triggered\nID of channel where the redemption was triggered\nID of channel user\nCooldown will expire after this timestamp\nCost of reward.\nA cursor for something\nDefault image of reward in rewards &amp; challenges screen on …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInformation about global cooldown\nID of the redemption. Also returned in twitch IRC\nID of reward.\nBASE64 representation of reward\nSet image of reward in rewards &amp; challenges screen on …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReward is enabled or not.\nReward is in stock\nReward is paused\nReward is sub only\nReward requires input from user on rewards &amp; challenges …\nMaximum redemptions per stream\nMaximum redemptions per user per stream\nMethod by which redemptions were set to new status\nNew status of redemptions\nTotal amount of redemptions changed\nPrompt shown when clicking reward on rewards &amp; challenges …\nTimestamp in which a reward was redeemed\nAmount of times this has been redeemed this stream.\nData about the reward that was redeemed\nDoes redemption skip queue?\nreward redemption status, will be FULFILLED if a user …\nTemplate ID\nTitle or Name of reward\nTotal redemptions\nUnknown\nUser that triggered the reward\nA string that the user entered if the reward requires input\nData about the reward that had status updated\nData about the reward that had status updated\nData about the redemption, includes unique id and user …\nData about the reward that had status updated\nTime the pubsub message was sent\nTime the pubsub message was sent\nTime the pubsub message was sent\nTime the pubsub message was sent\nTime the pubsub message was sent\nData about the reward that was updated\nA user gifts subs.\nReply from ChannelSubGiftsV1\nMystery gift\nMystery gift\nThe channel_id to watch. Can be fetched with the Get Users …\nChannel where mystery gifts were distributed\nAmount of mystery gifts\nDisplay name of user that purchased mystery gifts\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTier of mystery gifts\nUser ID of user that purchased mystery gifts\nUser name of user that purchased mystery gifts\nUnknown\nA subscription event happens in channel\nReply from ChannelSubscribeEventsV1\nDescribed where in a message an emote is\nUser extends a (gifted) sub\nUser extends sub through the month.\nA resubscription\nA resubscription\nGifted resubscription with optional message\nGifted resubscription with optional message\nA subscription\nA subscription\nA gifted subscription happened\nA gifted subscription happened\nMessage sent with subscription\nUnknown\nUnknown\nUnknown\nUnknown\nUnknown\nThe channel_id to watch. Can be fetched with the Get Users …\nID of the channel that has been subscribed or subgifted\nID of the channel that has been subscribed or subgifted\nID of the channel that has been subscribed or subgifted\nID of the channel that has been subscribed or subgifted\nID of the channel that has been subscribed or subgifted\nName of the channel that has been subscribed or subgifted\nName of the channel that has been subscribed or subgifted\nName of the channel that has been subscribed or subgifted\nName of the channel that has been subscribed or subgifted\nName of the channel that has been subscribed or subgifted\nCumulative months that user has been subscribed\nCumulative months that user has been subscribed\nCumulative months that user has been subscribed\nCumulative months that user has been subscribed\nDisplay name of user that subscribed\nDisplay name of user that subscribed\nDisplay name of user that purchased gifted subscription\nDisplay name of user that purchased gifted subscription\nDisplay name of user that purchased gifted subscription\nEmotes in subscription message\nEnd index of emote in message\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of emote\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nResubscription is a gift\nResubscription is a gift\nMessage in subscription\nMonths\nMonths\nMonths\nDuration of subscription, e.g 1, 3 or 6\nDuration of subscription, e.g 1, 3 or 6\nDuration of subscription, e.g 1, 3 or 6\nDuration of subscription, e.g 1, 3 or 6\nDuration of subscription, e.g 1, 3 or 6\nDisplay name of user that received gifted subscription\nDisplay name of user that received gifted subscription\nUsername of user that received gifted subscription\nUsername of user that received gifted subscription\nUsername of user that received gifted subscription\nStart index of emote in message\nMonths the user has been subscribed for in a row.\nMonths the recipient has been subscribed for in a row.\nMessage sent with this subscription\nMessage sent with this subscription\nMessage sent with this subscription\nMessage sent with this subscription\nSubscription plan\nSubscription plan\nSubscription plan\nSubscription plan\nSubscription plan\nName of subscription plan\nName of subscription plan\nName of subscription plan\nName of subscription plan\nName of subscription plan\nTime when pubsub message was sent\nTime when pubsub message was sent\nTime when pubsub message was sent\nTime when pubsub message was sent\nTime when pubsub message was sent\nID of user that subscribed\nID of user that subscribed\nID of user that purchased gifted subscription\nID of user that purchased gifted subscription\nID of user that purchased gifted subscription\nUsername of user that subscribed\nUsername of user that subscribed\nUsername of user that purchased gifted subscription\nUsername of user that purchased gifted subscription\nUsername of user that purchased gifted subscription\nA user redeems an reward using channel points.\nThe channel_id to watch. Can be fetched with the Get Users …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA user follows the channel\nReply from Following\nThe channel_id to watch. Can be fetched with the Get Users …\nDisplay name of user that followed\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nID of the user that followed\nName of the user that followed\nThe specific action that was used\nReward is a badge\nBits\nRewards\nA cheer\nHype train was completed\nReward given to conductors\nUnknown\nConfiguration of hype train\nEasy difficulty\nReward is a emote\nReason hype-train ended\nHype train ended\nHard difficulty\nHype train is approaching\nHype train is approaching\nHype train conductor updated\nHype train conductor updated\nHype train cooldown expired\nHype train cooldown expired\nDifficulty of Hype Train\nHype train ended\nHype train ended\nA user redeems an reward using channel points.\nReply from HypeTrainEventsV1 or HypeTrainEventsV1Rewards\nA user redeems an reward using channel points.\nHype train leveled up\nHype train leveled up\nProgress of hype train\nHype train progression. Akin to Participations\nHype train progression. Akin to Participations\nHype train rewards\nHype train rewards\nHype train started in channel\nHype train started in channel\nInsane difficulty\nHow many support events needed to start Hype Train\nDescription of a hype-train level\nMedium difficulty\nThresholds for notifications\nConversion table of event to participation points\nParticipations in hype train\nA reward\nSource type, same as helix hype-train events type\nSubs\nRewards\nSuper Hard difficulty\nTier 1 sub\nTier 1 gifted sub\nTier 2 sub\nTier 2 gifted sub\nTier 3 sub\nTier 3 gifted sub\nAction done to progress\nID of the approaching hype train\nReward to conductor of bits\nBits\nBits\nBits\nBits by extension\nBits by extension\nBits by extension\nBits by poll\nBits by poll\nBits by poll\nHype train public callout emote ID\nHype train public callout emote token\nThe channel_id to watch. Can be fetched with the Get Users …\nThe channel_id to watch. Can be fetched with the Get Users …\nID of channel where hype-train was initiated\nID of channel where hype-train was initiated\nID of channel where hype-train was initiated\nID of channel\nLevel of hype-train that was initiated\nRewards for conductors\nConfig of this hype-train\nCooldown duration in nanoseconds for hype train\nCreator color\nRewards to bits conductor\nRewards to subscriptions conductor\nDifficulty of hype train\nDifficulty settings\nPeriod in nanoseconds that events must occur\nServer time epoch in milliseconds when hype train ended\nReason why hype train ended\nremaining events\nServer time epoch in milliseconds when hype train ends\nRewards to former bits conductor\nRewards to former subscriptions conductor\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParticipation points needed for this level\nParticipation points needed in this level\nParticipation points needed for this level\nID of hype train\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether or not Hype Train is enabled in channel\nSupport events that must occur within a duration of time …\nCurrent level\nDuration in nanoseconds of each level\nPossible rewards for level one\nMinimum participation points needed to kickoff hypetrain\nThresholds for notifications\nNumber of events needed to kickoff hypetrain\nParticipators\nConversion rates for participations\nParticipations in hype train\nParticipations in hype train\nPrimary color of hex\nProgress of hype train\nProgress of hype train\nProgress of hype train\nAmount of actions done. i.e 500 (five-hundred) bits or 1 …\nTime left\nRewards\nDescription of level rewards\nUnknown\nConductor source\nSource type of progression\nServer time epoch in milliseconds when hype train started\nReward to conductor of subscriptions\nTier 1 gifted subs\nTier 1 gifted subs\nTier 1 gifted subs\nTier 1 sub\nTier 1 sub\nTier 1 sub\nTier 2 gifted subs\nTier 2 gifted subs\nTier 2 gifted subs\nTier 2 sub\nTier 2 sub\nTier 2 sub\nTier 3 gifted subs\nTier 3 gifted subs\nTier 3 gifted subs\nTier 3 sub\nTier 3 sub\nTier 3 sub\nTheme color of channel\nServer time epoch in milliseconds when hype train expires\nCurrent amassed participation points in this level\nServer time epoch in milliseconds when hype train was …\nUse creator color or not\nUses personalized settings\nUse theme color or not\nUser information of conductor\nDisplay name of user\nId of the user\nLogin name of the user, not capitalized\nProfile picture of user\nCurrent total amassed participation points in all levels\nInteger value of reward. 1-5\nID of badge\nGroup ID of emote\nGroup ID of badge\nID of emote\nID of badge in this object\nURL to image of badge\nLevel that this emote is from\nLevel that this badge is from\nID of emote set\nToken for this emote\nAutomod blocked term added\nAutomod permitted term added\nAutomod message approved\nUnban request approved\nUnban Request Approved\nAutomod message rejected\nBan\nA command\nChannel Term actions\nA channel term was modified, added or removed\nChannel moderated\nChat moderated\nA moderator performs an action in the channel.\nReply from ChatModeratorActions\nChat targeted login moderation\nChat cleared for all viewers\nDelete\nAutomod blocked term removed\nUsers own message was deleted.\nAutomod permitted term removed\nAutomod message denied\nUnban request denied\nUnban Request Denied\nEmote-only chat enabled\nEmote-only chat disabled\nFollowers-only chat enabled\nFollowers-only chat disabled\nChannel host started\nMod\nA moderation action. <code>moderation_action</code>\nA moderation action. <code>moderation_action</code>\nA command\nModeration type\nA moderator was added. <code>moderator_added</code>\nA moderator was added. <code>moderator_added</code>\nA moderator was removed. <code>moderator_removed</code>\nA moderator was removed. <code>moderator_removed</code>\nModified automod properties\nUnique chat enabled\nUnique chat disabled\nRaid\nSlow-mode chat enabled\nSlow-mode chat disabled\nSubscriber-only chat enabled\nSubscriber-only chat disabled\nTimeout\nUnban\nUnban request\nChannel host removed\nUnmod\nUnraid\nUntimeout\nUser removed as VIP\nUser added as VIP\nUser added as VIP\nVIP Added\nArguments for moderation_action\nThe channel_id to listen to. Can be fetched with the Get …\nID of channel where moderator was added\nID of channel where moderator was added\nID of channel where channel terms were changed\nId of channel where VIP was added\nUser that did moderation action\nUsername of user that added moderator\nUsername of user that added moderator\nUser who made target VIP (usually broadcaster)\nUnban response created by user with id\nUnban response created by user with login\nID of user that did moderation action\nID of user that added moderator\nID of user that added moderator\nUser ID of who made target VIP (usually broadcaster)\nIf the term added is temporary or not and if not, when it …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nModeration action is triggered from automod\nIf the term was permitted/denied because of a previous …\nId of term\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nType of action\nModeration action. Should be <code>mod</code>\nModeration action. Should be <code>unmod</code>\nAction taken, should be …\nMessage attached to unban request response\nID of message associated with moderation action\nUser ID that caused the term\nUser name that caused the term\nTarget of moderation action\nID of added moderator\nID of added moderator\nUser ID of who was made VIP\nTarget user ID of unban request, e.g the user that was …\nUsername of added moderator\nUsername of added moderator\nUser who was made VIP\nTarget login of unban request, e.g the user that was banned\nTerm definition\nType of moderation\nType of action done\nDefined if the term was updated, None if new.\nThe user_id to listen as. Can be fetched with the Get Users…\nA user raids the channel\nRaid canceled\nRaid canceled\nRaid go\nRaid go\nReply from Raid\nRaid update\nRaid update\nThe channel_id to watch. Can be fetched with the Get Users …\nID of user would be raided\nID of user would be raided\nID of user would be raided\nRaid will be force started in this many seconds\nRaid will be force started in this many seconds\nRaid would have be force started in this many seconds\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of raid\nID of raid\nID of raid\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nID of broadcaster doing raid\nID of broadcaster doing raid\nID of broadcaster doing raid\nDisplay name of targeted broadcaster/user\nDisplay name of targeted broadcaster/user\nDisplay name of targeted broadcaster/user\nID of targeted broadcaster/user\nID of targeted broadcaster/user\nID of targeted broadcaster/user\nUsername of targeted broadcaster/user\nUsername of targeted broadcaster/user\nUsername of targeted broadcaster/user\nProfile picture of targeted broadcaster/user\nProfile picture of targeted broadcaster/user\nProfile picture of targeted broadcaster/user\nJitter amount\nJitter amount\nJitter amount\nAmount of viewers that will join raid\nAmount of viewers that will join raid\nAmount of viewers that would join raid\nMessage held by automod\nA user follows the channel\nReply from UserModerationNotifications\nThe channel_id to watch. Can be fetched with the Get Users …\nThe currently authenticated user for whose automod …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIdentifier of the message\nCurrent status of the message\nArchive\nType of broadcast\nCommercial started\nA premiere, i.e a uploaded video\nA rerun, i.e a highlight or saved broadcast\nStream ended\nStream started\nChannel hit by TOS strike, meaning it will end\nStatistics about stream\nStatistics about stream\nReply from VideoPlayback and VideoPlaybackById\nCurrent viewcount on playback\nVideo on Demand\nVOD Watchparty.\nWatch party type\nType of broadcast\nThe channel_login to watch.\nThe channel_login to watch.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUrl increment picture. Unknown usage\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTitle of VOD\nAvailability of VOD\nID of current VOD\nID of current watch party\nType of current watch party\nLength of commercial\nDelay as set in broadcaster settings.\nEpoch Server time when commercial started\nEpoch Server time\nEpoch Server time\nEpoch Server time\nEpoch Server time\nCurrent viewers\ninformation about VOD.")
(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl StructuralPartialEq for TwitchCategory","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SubscriptionTier","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BroadcasterType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UserType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPeriod","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPrivacy","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CommercialLength","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for User","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Image","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GlobalCooldown","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Max","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for EventSubSubscription","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetBitsLeaderboardRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BitsLeaderboard","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DateRange","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for LeaderboardUser","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetCheermotesRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Cheermote","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheermoteType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Tiers","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheermoteImages","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheermoteImage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheermoteImageArray","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Level","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelInformation","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModifyChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModifyChannelInformationBody","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModifyChannelInformation","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StartCommercialRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StartCommercialBody","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StartCommercial","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetClipsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Clip","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; StructuralPartialEq for CreateEventSubSubscriptionRequest&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; StructuralPartialEq for CreateEventSubSubscriptionBody&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; StructuralPartialEq for CreateEventSubSubscription&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DeleteEventSubSubscriptionRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DeleteEventSubSubscription","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetEventSubSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetGamesRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetTopGamesRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheckAutoModStatusRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheckAutoModStatusBody","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CheckAutoModStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetBannedEventsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BannedEvent","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetBannedUsersRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BannedUser","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetModeratorEventsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModeratorEvent","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetModeratorsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Moderator","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetCustomRewardRedemptionRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CustomRewardRedemption","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Reward","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UpdateRedemptionStatusRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UpdateRedemptionStatusBody","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UpdateRedemptionStatusInformation","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CustomRewardRedemptionStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SearchCategoriesRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SearchChannelsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Channel","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetStreamsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Stream","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StreamType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetBroadcasterSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BroadcasterSubscription","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetAllStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for AutoGenerated","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TwitchTag","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CreateUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CreateUserFollowsBody","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CreateUserFollows","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DeleteUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DeleteUserFollow","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetUsersRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for User","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetUsersFollowsRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UsersFollow","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GetVideosRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Video","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Sort","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPeriod","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoTypeFilter","synthetic":false,"types":[]},{"text":"impl&lt;R, D&gt; StructuralPartialEq for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Request&lt;Response = D&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: DeserializeOwned + PartialEq,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBitsEventsV2","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBitsEventsV2Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BitsEventData","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BadgeEntitlement","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BitsContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBitsBadgeUnlocks","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBitsBadgeUnlocksReply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelCheerEventsPublicV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelCheerEventsPublicV1Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TriggerType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsChannelV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Redemption","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Reward","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Progress","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsChannelV1Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubGiftsV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MysteryGiftPurchase","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubGiftsV1Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubscribeEventsV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Sub","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ReSub","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SubGift","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ResubGift","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubscribeEventsV1Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Emote","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SubMessage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CommunityPointsChannelV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Following","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for FollowingReply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainEventsV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainEventsV1Rewards","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainRewards","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainStart","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainEnd","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainConductorUpdate","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainProgression","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainLevelUp","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainEventsV1Reply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Config","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainDifficulty","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Kickoff","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ParticipationConversionRates","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for NotificationThresholds","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ConductorRewards","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BitsRewards","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SubsRewards","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Participations","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Conductors","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HypeTrainProgress","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Level","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Reward","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SourceType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ActionType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for EndingReason","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChatModeratorActions","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModerationAction","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModeratorAdded","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChatModeratorActionsReply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UnbanRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModerationActionCommand","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ModerationType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Raid","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RaidGoV2","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RaidUpdateV2","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RaidCancelV2","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RaidReply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPlayback","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPlaybackById","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VideoPlaybackReply","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Vod","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for WatchpartyType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BroadcastType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TwitchResponse","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TopicData","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Response","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBanV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelBanV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardAddV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardAddV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRemoveV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRemoveV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardUpdateV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRedemptionAddV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRedemptionAddV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRedemptionUpdateV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelPointsCustomRewardRedemptionUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Reward","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelCheerV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelCheerV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelFollowV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelFollowV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainBeginV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainBeginV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainEndV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainEndV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainProgressV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelHypeTrainProgressV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ContributionType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Contribution","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubscribeV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelSubscribeV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelUnbanV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelUnbanV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelUpdateV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ChannelUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StreamOfflineV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StreamOfflineV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StreamOnlineV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for StreamOnlineV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UserAuthorizationRevokeV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UserAuthorizationRevokeV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UserUpdateV1","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UserUpdateV1Payload","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for VerificationRequest","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Payload","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; StructuralPartialEq for NotificationPayload&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;EventSubscription&gt; StructuralPartialEq for EventSubscriptionInformation&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Transport","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TransportResponse","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TransportMethod","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for EventType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Status","synthetic":false,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl StructuralPartialEq for Scope","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
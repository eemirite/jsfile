														}, t.getDocumentPropWithPrefix = function(e) {
															if (e in document) return e;
															for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0, r = ["webkit", "moz", "ms", "o"]; n < r.length; n++) {
																var i = r[n];
																if (i + t in document) return i + t
															}
														}, t.isVideoInFullscreen = function() {
															var e = t.getDocumentPropWithPrefix("fullscreenElement");
															return void 0 !== e && document[e] && "VIDEO" === document[e].nodeName
														}, t.getHiddenProp = function() {
															return t.getDocumentPropWithPrefix("hidden")
														}, t.getPageLoadType = function() {
															var e = t.getHiddenProp();
															return null != e && !0 === document[e] ? r.PAGE_LOAD_TYPE.BACKGROUND : r.PAGE_LOAD_TYPE.FOREGROUND
														}, t.getHostnameAndPathFromUrl = function(e) {
															var t = document.createElement("a");
															return t.href = e, {
																hostname: t.hostname,
																path: t.pathname
															}
														}, t.calculatePercentage = function(e, t) {
															if (void 0 !== t && 0 !== t) return Math.round((e || 0) / t * 100)
														}, t.getBrowserInfo = function() {
															var e, t = navigator.userAgent,
																n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
															return /trident/i.test(n[1]) ? {
																name: "IE",
																version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
															} : "Chrome" === n[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? {
																name: e[1].replace("OPR", "Opera"),
																version: e[2]
															} : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
																name: n[0],
																version: n[1]
															})
														}, t.getURLResourceName = function(e) {
															return 0 === e.length ? "" : e.split("/").pop() || ""
														}, t.joinUrls = function() {
															for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
															return e.reduce((function(e, n) {
																return (t.endsWith(e, "/") && void 0 !== n ? e.substr(0, e.length - 1) : e) + "/" + (t.startsWith(n, "/") ? n.substr(1) : n)
															}))
														}, t.endsWith = function(e, t) {
															return null != String.prototype.endsWith ? e.endsWith(t) : e.substring(e.length - t.length) === t
														}, t.startsWith = function(e, t) {
															return null != String.prototype.startsWith ? e.startsWith(t) : e.substring(0, t.length) === t
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.Event = void 0,
															function(e) {
																e.SETUP = "setup", e.READY = "ready", e.SOURCE_LOADED = "sourceLoaded", e.PLAY = "play", e.PLAYING = "playing", e.PAUSE = "pause", e.TIMECHANGED = "timechanged", e.SEEK = "seek", e.SEEKED = "seeked", e.START_CAST = "startCasting", e.END_CAST = "endCasting", e.START_BUFFERING = "startBuffering", e.END_BUFFERING = "endBuffering", e.AUDIOTRACK_CHANGED = "audioTrackChanged", e.AUDIO_CHANGE = "audioChange", e.VIDEO_CHANGE = "videoChange", e.START_FULLSCREEN = "startFullscreen", e.END_FULLSCREEN = "endFullscreen", e.START_AD = "adStart", e.SUBTITLE_CHANGE = "subtitleChange", e.END_AD = "adEnd", e.MUTE = "mute", e.UN_MUTE = "unMute", e.ERROR = "playerError", e.PLAYBACK_FINISHED = "end", e.SCREEN_RESIZE = "resize", e.UNLOAD = "unload", e.END = "end", e.SOURCE_UNLOADED = "sourceUnloaded", e.MANUAL_SOURCE_CHANGE = "manualSourceChangeInitiated", e.VIDEOSTART_TIMEOUT = "VIDEOSTART_TIMEOUT", e.CUSTOM_DATA_CHANGE = "customDataChange", e.PLAYLIST_TRANSITION = "playlistTransition"
															}(t.Event || (t.Event = {}))
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.Player = void 0,
															function(e) {
																e.BITMOVIN = "bitmovin", e.JW = "jw", e.RADIANT = "radiant", e.VIDEOJS = "videojs", e.HLSJS = "hlsjs", e.SHAKA = "shaka", e.DASHJS = "dashjs", e.HTML5 = "html5", e.CHROMECAST_SHAKA = "chromecast-shaka"
															}(t.Player || (t.Player = {}))
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
															return (r = Object.assign || function(e) {
																for (var t, n = 1, r = arguments.length; n < r; n++)
																	for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																return e
															}).apply(this, arguments)
														};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Analytics = void 0;
														var i = n(12),
															a = n(10),
															o = n(30),
															s = n(21),
															u = n(31),
															c = n(0),
															l = n(6),
															f = n(1),
															d = n(16),
															h = n(33),
															p = n(38),
															_ = n(19),
															m = n(18),
															b = n(48),
															g = function() {
																function e(e, t, n) {
																	var i = this;
																	void 0 === n && (n = new p.BackendFactory), this.pageLoadTime = 0, this.playerStartupTime = 0, this.videoStartupTime = 0, this.autoplay = void 0, this.droppedSampleFrames = 0, this.startupTime = 0, this.featureManager = new o.FeatureManager, this.onErrorDetailEventDispatcher = new _.EventDispatcher, this.authenticationCallback = {
																		authenticationCompleted: function(e, t) {
																			i.featureManager.configureFeatures(e, t)
																		}
																	}, this.guardAgainstMissingVideoTitle = function(e, t) {
																		e && t && e.title && !t.title && c.logger.error("The new analytics configuration does not contain the field title")
																	}, this.guardAgainstMissingIsLive = function(e, t) {
																		null != e && null != t && e.isLive && null == t.isLive && c.logger.error("The new analytics configuration does not contain the field `isLive`. It will default to `false` which might be unintended? Once stream playback information is available the type will be populated.")
																	}, this.sourceChange = function(e) {
																		c.logger.log("Processing Source Change for Analytics", e), i.guardAgainstMissingVideoTitle(i.config, e), i.guardAgainstMissingIsLive(i.config, e);
																		var t = i.getMergedAnalyticsConfig(e);
																		i.adapter.sourceChange(t, f.getCurrentTimestamp())
																	}, this.setCustomDataOnce = function(e) {
																		var t = r({}, i.config);
																		i.setState("customdatachange"), i.changeCustomData(e), i.sendAnalyticsRequestAndClearValues(), i.config = r({}, t), i.setConfigParameters()
																	}, this.setCustomData = function(e) {
																		i.adapter.setCustomData(e)
																	}, this.getCurrentImpressionId = function() {
																		return i.sample.impressionId
																	}, this.getUserId = function() {
																		return i.sessionHandler.userId
																	}, this.changeCustomData = function(e) {
																		var t, n;
																		i.config = r(r({}, i.config), (t = e, n = {}, s.customDataValuesKeys.forEach((function(e) {
																			t[e] && (n[e] = t[e])
																		})), n)), i.setConfigParameters()
																	};
																	var a = this;
																	this.config = this.buildDefaultAnalyticsConfigValues(e), this.errorDetailTrackingSettingsProvider = {
																		get domain() {
																			return a.getDomain(a.config)
																		},
																		get licenseKey() {
																			var e;
																			return null !== (e = a.config.key) && void 0 !== e ? e : ""
																		},
																		get impressionId() {
																			var e;
																			return null !== (e = a.getCurrentImpressionId()) && void 0 !== e ? e : ""
																		},
																		get collectorConfig() {
																			return a.config.config
																		}
																	}, this.adapter = t, this.backendFactory = n, this.sessionHandler = new b.SessionPersistenceHandler(e);
																	var u = this.adapter.onLicenseKeyReceived.subscribe((function(e) {
																		i.config.key || (i.config.key = e.licenseKey), u()
																	}));
																	this.sample = this.setupSample(), this.init(), this.setupStateMachineCallbacks();
																	var l = this.adapter.initialize(this);
																	this.featureManager.registerFeatures(l), this.adapter.adModule && (this.adAnalytics = new h.AdAnalytics(this, this.adapter.adModule)), this.checkForErrorsInConfig(e)
																}
																return Object.defineProperty(e.prototype, "version", {
																	get: function() {
																		return d.VERSION
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "errorDetailSubscribable", {
																	get: function() {
																		return this.onErrorDetailEventDispatcher
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.prototype.getPlayerInformationFromAdapter = function() {
																	var e = this.config.player || this.adapter.getPlayerName();
																	return {
																		player: e,
																		version: e + "-" + this.adapter.getPlayerVersion(),
																		playerTech: this.adapter.getPlayerTech()
																	}
																}, e.prototype.updateSamplesToCastClientConfig = function(e, t) {
																	for (var n = 0, r = e; n < r.length; n++) {
																		var i = r[n];
																		this.updateSampleToCastClientConfig(i, t)
																	}
																}, e.prototype.updateSampleToCastClientConfig = function(e, t) {
																	var n = t.config,
																		r = t.userId,
																		i = t.impressionId,
																		a = t.domain,
																		o = t.path,
																		s = t.language,
																		u = t.userAgent;
																	e.impressionId = i, e.userId = r, e.userAgent = u, e.domain = a, e.path = o, e.language = s, this.setConfigParameters(e, n)
																}, e.prototype.init = function() {
																	!0 === this.adapter.supportsDeferredLicenseLoading || "" !== this.config.key && f.validString(this.config.key) ? (c.logger.setLogging(this.config.debug || !1), this.featureManager.resetFeatures(), this.backend = this.createBackend(this.config), this.videoStartupTime = 0, this.setConfigParameters(), this.generateNewImpressionId(), this.setUserId(), this.adapter.videoCompletionTracker && this.adapter.videoCompletionTracker.reset(), this.clearResetQualityChangeInterval(), this.adapter.resetQualityChangeCount()) : c.logger.error("Invalid analytics license key provided")
																}, e.prototype.release = function() {
																	var e;
																	this.backend = new m.NoOpBackend, null === (e = this.adAnalytics) || void 0 === e || e.release(), this.clearResetQualityChangeInterval()
																}, e.prototype.setConfigParameters = function(e, t) {
																	void 0 === e && (e = this.sample), void 0 === t && (t = this.config), e.key = t.key, e.playerKey = t.playerKey, t.player && (e.player = t.player), e.domain = this.getDomainFromConfig(t) || f.sanitizePath(window.location.hostname), e.cdnProvider = t.cdnProvider, e.videoId = t.videoId, e.videoTitle = t.title, e.customUserId = null != t.userId ? t.userId : t.customUserId, f.transferCustomDataFields(t, e), e.experimentName = t.experimentName
																}, e.prototype.generateNewImpressionId = function() {
																	this.sample.impressionId = f.generateUUID()
																}, e.prototype.setUserId = function() {
																	this.sample.userId = this.sessionHandler.userId
																}, e.prototype.setupStateMachineCallbacks = function() {
																	var e = this;
																	this.adapter.stateMachineCallbacks.setup = function(t, n) {
																		if (c.logger.log("Setup bitmovin analytics " + e.sample.analyticsVersion + " with impressionId: " + e.sample.impressionId), e.setDuration(t), e.setState(n), e.playerStartupTime = e.sample.playerStartupTime = t, window.performance && window.performance.timing) {
																			var r = f.getCurrentTimestamp() - window.performance.timing.navigationStart;
																			e.pageLoadTime = e.sample.pageLoadTime = r
																		}
																		e.startupTime = t, e.sendAnalyticsRequestAndClearValues(), e.sample.pageLoadTime = 0
																	}, this.adapter.stateMachineCallbacks.startup = function(t, n) {
																		e.setDuration(t), e.videoStartupTime = e.sample.videoStartupTime = t, e.sample.supportedVideoCodecs = u.CodecHelper.supportedVideoFormats, e.setState(n), e.startupTime > 0 && (e.startupTime += t), e.sample.startupTime = e.startupTime, e.autoplay = e.sample.autoplay = e.adapter.getAutoPlay();
																		var r = e.adapter.getDrmPerformanceInfo();
																		null != r && (e.sample.drmType = r.drmType, e.sample.drmLoadTime = r.drmLoadTime), e.sendAnalyticsRequestAndClearValues(), e.sample.autoplay = void 0
																	}, this.adapter.stateMachineCallbacks.playing = function(t, n) {
																		e.setDuration(t), e.setState(n), e.sample.played = t, e.setCompletionValues(), e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.unload = function(t, n) {
																		var r = e.sample.videoTimeStart;
																		"playing" === n && (e.setDuration(t), e.setState(n), e.sample.played = t, e.setCompletionValues(), e.sendUnloadRequest(), f.validNumber(e.sample.videoTimeEnd) && (r = e.sample.videoTimeEnd)), e.videoStartupTime > 0 && (e.setVideoTimeStart(r), e.setVideoTimeEnd(r), e.clearValues(), e.setState("closed"), e.sendUnloadRequest())
																	}, this.adapter.stateMachineCallbacks.heartbeat = function(t, n, i) {
																		e.setState(n), e.setDuration(t), e.sample = r(r({}, e.sample), i), "playing" === n && e.setCompletionValues(), e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.qualitychange = function(t, n) {
																		e.sendQualityChange(n, t)
																	}, this.adapter.stateMachineCallbacks.qualitychange_pause = function(t, n) {
																		e.sendQualityChange(n, t)
																	}, this.adapter.stateMachineCallbacks.qualitychange_rebuffering = function(t, n) {
																		e.sendQualityChange(n, t)
																	}, this.adapter.stateMachineCallbacks.videoChange = function(t) {
																		e.adapter.stateMachineCallbacks.setVideoTimeEndFromEvent(t), e.adapter.stateMachineCallbacks.setVideoTimeStartFromEvent(t), e.setPlaybackVideoPropertiesFromEvent(t)
																	}, this.adapter.stateMachineCallbacks.audioChange = function(t) {
																		e.adapter.stateMachineCallbacks.setVideoTimeEndFromEvent(t), e.adapter.stateMachineCallbacks.setVideoTimeStartFromEvent(t), e.setPlaybackAudioPropertiesFromEvent(t)
																	}, this.adapter.stateMachineCallbacks.audiotrack_changing = function() {
																		e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.pause = function(t, n) {
																		e.setDuration(t), e.setState(n), e.sample.paused = t, e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.paused_seeking = function(t, n) {
																		e.setDuration(t), e.setState(n), e.sample.seeked = t, e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.end_play_seeking = function(t, n) {
																		e.setState(n), e.setDuration(t), e.sample.seeked = t, e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.rebuffering = function(t, n) {
																		e.setDuration(t), e.setState(n), e.sample.buffered = t, e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.videoStartFailed = function(t, n) {
																		void 0 === n && (n = !0), e.sample.videoStartFailed = !0, e.sample.videoStartFailedReason = t.reason.reason, null != t.reason.errorCode && (e.sample.errorCode = t.reason.errorCode.code, e.sample.errorMessage = t.reason.errorCode.message, n && e.onErrorDetailEventDispatcher.dispatch(r({}, t.reason.errorCode))), n && e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.error = function(t) {
																		e.adapter.stateMachineCallbacks.setVideoTimeEndFromEvent(t), e.adapter.stateMachineCallbacks.setVideoTimeStartFromEvent(t), e.setState("error"), e.sample.errorCode = t.code, e.sample.errorMessage = t.message, e.sample.errorData = JSON.stringify(t.legacyData);
																		var n = e.adapter.segments.map((function(e) {
																			return e.name
																		}));
																		e.sample.errorSegments = n, e.adapter.onError && e.adapter.onError(), e.onErrorDetailEventDispatcher.dispatch({
																			code: t.code,
																			message: t.message,
																			errorData: t.data
																		}), e.sendAnalyticsRequestAndClearValues(), delete e.sample.errorCode, delete e.sample.errorMessage, delete e.sample.errorData
																	}, this.adapter.stateMachineCallbacks.ad = function(t, n) {
																		e.setDuration(t), e.setState(n), e.sample.ad = t, e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.mute = function() {
																		e.sample.isMuted = !0
																	}, this.adapter.stateMachineCallbacks.unMute = function() {
																		e.sample.isMuted = !1
																	}, this.adapter.stateMachineCallbacks.subtitle_changing = function() {
																		e.sendAnalyticsRequestAndClearValues()
																	}, this.adapter.stateMachineCallbacks.setVideoTimeEndFromEvent = function(t) {
																		f.validNumber(t.currentTime) && e.setVideoTimeEnd(f.calculateTime(t.currentTime))
																	}, this.adapter.stateMachineCallbacks.setVideoTimeStartFromEvent = function(t) {
																		f.validNumber(t.currentTime) && e.setVideoTimeStart(f.calculateTime(t.currentTime))
																	}, this.adapter.stateMachineCallbacks.manualSourceChange = function(t) {
																		e.adapter.resetSourceRelatedState(), e.sample = e.setupSample(), e.startupTime = 0, e.config = t.config ? t.config : e.config, e.init()
																	}, this.adapter.stateMachineCallbacks.playlistTransition = function(t) {
																		e.sample = e.setupSample(), e.startupTime = 0, e.init()
																	}, this.adapter.stateMachineCallbacks.initialSourceChange = function(t) {
																		e.config = t.config, e.setConfigParameters()
																	}, this.adapter.stateMachineCallbacks.end = function() {
																		e.sample = e.setupSample(), e.startupTime = 0, e.init()
																	}, this.adapter.stateMachineCallbacks.release = function() {
																		e.release()
																	}, this.adapter.stateMachineCallbacks.customdatachange = function(t, n, r) {
																		r && r.values && e.changeCustomData(r.values)
																	}
																}, e.prototype.setDuration = function(e) {
																	this.sample.duration = e
																}, e.prototype.setState = function(e) {
																	this.sample.state = e
																}, e.prototype.setPlaybackVideoPropertiesFromEvent = function(e) {
																	f.validNumber(e.width) && (this.sample.videoPlaybackWidth = e.width), f.validNumber(e.height) && (this.sample.videoPlaybackHeight = e.height), f.validNumber(e.bitrate) && (this.sample.videoBitrate = e.bitrate), f.validString(e.codec) && (this.sample.videoCodec = e.codec)
																}, e.prototype.setPlaybackAudioPropertiesFromEvent = function(e) {
																	f.validNumber(e.bitrate) && (this.sample.audioBitrate = e.bitrate), f.validString(e.codec) && (this.sample.audioCodec = e.codec)
																}, e.prototype.setPlaybackInfoFromAdapter = function() {
																	var e = this.adapter.getCurrentPlaybackInfo();
																	e && (this.sample.isLive = this.getIsLiveFromConfigOrPlaybackInfo(this.config, e.isLive), f.validString(e.size) && (this.sample.size = e.size), f.validString(e.playerTech) && (this.sample.playerTech = e.playerTech), f.validNumber(e.videoDuration) && (this.sample.videoDuration = f.calculateTime(e.videoDuration || 0)), f.validString(e.streamFormat) && (this.sample.streamFormat = e.streamFormat), f.validString(e.mpdUrl) && (this.sample.mpdUrl = e.mpdUrl), f.validString(e.m3u8Url) && (this.sample.m3u8Url = e.m3u8Url), f.validString(e.progUrl) && (this.sample.progUrl = e.progUrl), f.validNumber(e.videoWindowWidth) && (this.sample.videoWindowWidth = e.videoWindowWidth), f.validNumber(e.videoWindowHeight) && (this.sample.videoWindowHeight = e.videoWindowHeight), f.validNumber(e.screenHeight) && (this.sample.screenHeight = e.screenHeight), f.validNumber(e.screenWidth) && (this.sample.screenWidth = e.screenWidth), f.validNumber(e.videoPlaybackHeight) && (this.sample.videoPlaybackHeight = e.videoPlaybackHeight), f.validNumber(e.videoPlaybackWidth) && (this.sample.videoPlaybackWidth = e.videoPlaybackWidth), f.validNumber(e.videoBitrate) && (this.sample.videoBitrate = e.videoBitrate), f.validNumber(e.audioBitrate) && (this.sample.audioBitrate = e.audioBitrate), f.validBoolean(e.isMuted) && (this.sample.isMuted = e.isMuted), f.validBoolean(e.isCasting) && (this.sample.isCasting = e.isCasting), f.validString(e.castTech) && (this.sample.castTech = e.castTech), f.validString(e.videoTitle) && !this.config.title && (this.sample.videoTitle = e.videoTitle), f.validString(e.audioCodec) && (this.sample.audioCodec = e.audioCodec), f.validString(e.videoCodec) && (this.sample.videoCodec = e.videoCodec), f.validString(e.audioLanguage) && (this.sample.audioLanguage = e.audioLanguage), f.validBoolean(e.subtitleEnabled) && (this.sample.subtitleEnabled = e.subtitleEnabled), f.validString(e.subtitleLanguage) ? this.sample.subtitleLanguage = e.subtitleLanguage : this.sample.subtitleLanguage = void 0, f.validNumber(e.droppedFrames) && (this.sample.droppedFrames = Math.max(e.droppedFrames - this.droppedSampleFrames, 0), this.droppedSampleFrames = e.droppedFrames))
																}, e.prototype.setupSample = function() {
																	return this.droppedSampleFrames = 0, r({
																		platform: "web",
																		playerStartupTime: 0,
																		pageLoadType: f.getPageLoadType(),
																		path: f.sanitizePath(window.location.pathname),
																		language: navigator.language || navigator.userLanguage,
																		userAgent: navigator.userAgent,
																		screenWidth: screen.width,
																		screenHeight: screen.height,
																		isLive: !1,
																		videoDuration: 0,
																		size: a.PlayerSize.Window,
																		time: 0,
																		videoWindowWidth: 0,
																		videoWindowHeight: 0,
																		droppedFrames: 0,
																		played: 0,
																		buffered: 0,
																		paused: 0,
																		ad: 0,
																		seeked: 0,
																		videoPlaybackWidth: 0,
																		videoPlaybackHeight: 0,
																		videoBitrate: 0,
																		audioBitrate: 0,
																		videoTimeStart: 0,
																		videoTimeEnd: 0,
																		videoStartupTime: 0,
																		duration: 0,
																		startupTime: 0,
																		analyticsVersion: d.VERSION,
																		pageLoadTime: 0,
																		completedTotal: 0
																	}, this.getPlayerInformationFromAdapter())
																}, e.prototype.sendAnalyticsRequest = function() {
																	this.setPlaybackInfoFromAdapter(), this.sample.time = f.getCurrentTimestamp(), this.sample.downloadSpeedInfo = this.adapter.downloadSpeedInfo;
																	var e = r({}, this.sample);
																	this.backend.sendRequest(e)
																}, e.prototype.sendAnalyticsRequestAndClearValues = function() {
																	this.sendAnalyticsRequest(), this.clearValues()
																}, e.prototype.sendUnloadRequest = function() {
																	this.backend.sendUnloadRequest(this.sample)
																}, e.prototype.sendAnalyticsRequestSynchronous = function() {
																	this.backend.sendRequestSynchronous(this.sample)
																}, e.prototype.clearValues = function() {
																	this.sample.ad = 0, this.sample.paused = 0, this.sample.played = 0, this.sample.seeked = 0, this.sample.buffered = 0, this.sample.playerStartupTime = 0, this.sample.videoStartupTime = 0, this.sample.startupTime = 0, this.sample.castTech = void 0, this.sample.duration = 0, this.sample.droppedFrames = 0, this.sample.drmLoadTime = void 0, this.sample.videoStartFailed = void 0, this.sample.videoStartFailedReason = void 0, this.sample.completed = void 0, this.adapter.clearValues()
																}, e.prototype.getIsLiveFromConfigOrPlaybackInfo = function(e, t) {
																	return null == t ? e.isLive || !1 : !!f.validBoolean(t) && t
																}, e.prototype.getMergedCollectorConfig = function(e, t) {
																	void 0 === t && (t = this.config);
																	var n = (t || {}).config;
																	return null != e && (n = r(r(r({}, n), {
																		enabled: !0
																	}), e.config)), n
																}, e.prototype.getMergedAnalyticsConfig = function(e, t) {
																	void 0 === t && (t = this.config);
																	var n = this.getMergedCollectorConfig(e, t);
																	return r(r(r({}, t), e), {
																		config: n
																	})
																}, e.prototype.buildDefaultAnalyticsConfigValues = function(e) {
																	return f.validBoolean(e.isLive) || (e.isLive = !1), e
																}, e.prototype.checkForErrorsInConfig = function(e) {
																	null != e.customUserId && null != e.userId && c.logger.warning("Configuration Warning: \nCustomUserId and UserId are set in the config \nValue of UserId will be used in sample \nPlease only use one configuartion field to set your userId")
																}, e.prototype.getDomainFromConfig = function(e) {
																	var t = e.config;
																	return null != t && null != t.origin ? t.origin : void 0
																}, e.prototype.createBackend = function(e) {
																	var t = this.getDomain(e);
																	return this.backendFactory.createBackend(e, {
																		key: e.key,
																		domain: t,
																		version: d.VERSION
																	}, this.adapter, this.authenticationCallback)
																}, e.prototype.getDomain = function(e) {
																	return this.getDomainFromConfig(e) || f.sanitizePath(window.location.hostname)
																}, e.prototype.setCompletionValues = function() {
																	if (this.adapter.videoCompletionTracker) {
																		var e = this.adapter.videoCompletionTracker.addWatched({
																				start: this.sample.videoTimeStart,
																				end: this.sample.videoTimeEnd
																			}),
																			t = this.adapter.videoCompletionTracker.getCompletionPercentage();
																		Number.isNaN(e) || Number.isNaN(t) || (this.sample.completed = e, this.sample.completedTotal = t)
																	}
																}, e.prototype.setVideoTimeStart = function(e) {
																	this.sample.videoTimeStart = e
																}, e.prototype.setVideoTimeEnd = function(e) {
																	this.sample.videoTimeEnd = e
																}, e.prototype.sendQualityChange = function(e, t) {
																	var n = this;
																	null == this.resetQualityChangeCountIntervalId && (this.resetQualityChangeCountIntervalId = window.setInterval((function() {
																		n.adapter.resetQualityChangeCount()
																	}), l.ANALYTICS_QUALITY_CHANGE_COUNT_RESET_INTERVAL)), this.adapter.increaseQualityChangeCount(), this.adapter.isQualityChangeEventEnabled() ? (this.setDuration(t), this.setState(e), this.sendAnalyticsRequestAndClearValues()) : (this.setDuration(t), this.adapter.stateMachineCallbacks.error(r(r({}, i.ErrorCode.QUALITY_CHANGE_THRESHOLD_EXCEEDED), {
																		legacyData: void 0,
																		currentTime: void 0,
																		data: {}
																	})))
																}, e.prototype.clearResetQualityChangeInterval = function() {
																	null != this.resetQualityChangeCountIntervalId && (window.clearInterval(this.resetQualityChangeCountIntervalId), delete this.resetQualityChangeCountIntervalId)
																}, e.version = d.VERSION, e.LICENSE_CALL_PENDING_TIMEOUT = 200, e.PAGE_LOAD_TYPE_TIMEOUT = 200, e.CAST_RECEIVER_CONFIG_MESSAGE = "CAST_RECEIVER_CONFIG_MESSAGE", e
															}();
														t.Analytics = g
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Adapter = void 0;
														var r = n(0),
															i = function() {
																function e() {}
																return e.prototype.getCurrentImpressionId = function() {
																	if (this.guardAgainstNotInitializedAnalytics()) return this.analytics.getCurrentImpressionId()
																}, e.prototype.getUserId = function() {
																	if (this.guardAgainstNotInitializedAnalytics()) return this.analytics.getUserId()
																}, e.prototype.setCustomData = function(e) {
																	this.guardAgainstNotInitializedAnalytics() && this.internalAdapter.setCustomData(e)
																}, e.prototype.setCustomDataOnce = function(e) {
																	this.guardAgainstNotInitializedAnalytics() && this.analytics.setCustomDataOnce(e)
																}, e.prototype.sourceChange = function(e) {
																	this.guardAgainstNotInitializedAnalytics() && this.analytics.sourceChange(e)
																}, e.prototype.hasPlayerAlreadyBeenAugmented = function(e) {
																	return e.__bitmovinAnalyticsHasBeenSetup
																}, e.prototype.markPlayerInstanceAsAugmented = function(e) {
																	e.__bitmovinAnalyticsHasBeenSetup = !0
																}, e.prototype.guardAgainstNotInitializedAnalytics = function() {
																	return !!this.analytics || (r.logger.log("Bitmovin Analytics: Adapter hasn't been initialized yet"), !1)
																}, e
															}();
														t.Adapter = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.ANALYTICS_MIN_SEEK_DIFFERENCE_THRESHOLD = t.ANALYTICS_REBUFFER_TIMEOUT = t.ANALYTICS_QUALITY_CHANGE_COUNT_RESET_INTERVAL = t.ANALYTICS_QUALITY_CHANGE_COUNT_THRESHOLD = t.ANALYTICS_VIDEOSTART_TIMEOUT = t.ANALYTICS_LICENSECALL_TIMEOUT = t.ANALYTICS_BACKEND_BASE_URL = t.MESSAGE_NAMESPACE = void 0, t.MESSAGE_NAMESPACE = "urn:x-cast:com.bitmovin.analytics.cast", t.ANALYTICS_BACKEND_BASE_URL = "https://analytics-ingress-global.bitmovin.com", t.ANALYTICS_LICENSECALL_TIMEOUT = 6e4, t.ANALYTICS_VIDEOSTART_TIMEOUT = 6e4, t.ANALYTICS_QUALITY_CHANGE_COUNT_THRESHOLD = 50, t.ANALYTICS_QUALITY_CHANGE_COUNT_RESET_INTERVAL = 36e5, t.ANALYTICS_REBUFFER_TIMEOUT = 12e4, t.ANALYTICS_MIN_SEEK_DIFFERENCE_THRESHOLD = 3
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
																return (r = Object.assign || function(e) {
																	for (var t, n = 1, r = arguments.length; n < r; n++)
																		for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																	return e
																}).apply(this, arguments)
															},
															i = this && this.__spreadArrays || function() {
																for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
																var r = Array(e),
																	i = 0;
																for (t = 0; t < n; t++)
																	for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
																return r
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.ErrorDetailBackend = void 0;
														var a = n(17),
															o = n(6),
															s = n(1),
															u = function() {
																function e(e) {
																	var t;
																	this._queue = [], this._enabled = !1, this.backendUrl = s.joinUrls(null !== (t = null == e ? void 0 : e.backendUrl) && void 0 !== t ? t : o.ANALYTICS_BACKEND_BASE_URL, "/analytics/error")
																}
																return Object.defineProperty(e.prototype, "queue", {
																	get: function() {
																		return this._queue
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "enabled", {
																	get: function() {
																		return this._enabled
																	},
																	set: function(e) {
																		this._enabled = e
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.copyErrorDetailTruncateStringsAndUrls = function(e, t, n) {
																	var i, a, o = this;
																	return r(r({}, e), {
																		message: null === (i = e.message) || void 0 === i ? void 0 : i.substr(0, t),
																		data: this.copyErrorDataTruncateStrings(e.data, t),
																		httpRequests: null === (a = e.httpRequests) || void 0 === a ? void 0 : a.map((function(e) {
																			return o.copyHttpRequestTruncateUrls(e, n)
																		}))
																	})
																}, e.copyHttpRequestTruncateUrls = function(e, t) {
																	var n, i;
																	return r(r({}, e), {
																		url: null === (n = e.url) || void 0 === n ? void 0 : n.substr(0, t),
																		lastRedirectLocation: null === (i = e.lastRedirectLocation) || void 0 === i ? void 0 : i.substr(0, t)
																	})
																}, e.copyErrorDataTruncateStrings = function(e, t) {
																	var n, i;
																	return r(r({}, e), {
																		exceptionMessage: null === (n = e.exceptionMessage) || void 0 === n ? void 0 : n.substr(0, t),
																		additionalData: null === (i = e.additionalData) || void 0 === i ? void 0 : i.substr(0, t)
																	})
																}, e.copyErrorDetailTruncateHttpRequests = function(e, t) {
																	var n;
																	return r(r({}, e), {
																		httpRequests: null === (n = e.httpRequests) || void 0 === n ? void 0 : n.slice(-t)
																	})
																}, e.prototype.limitHttpRequestsOfQueuedErrorDetails = function(t) {
																	var n = this;
																	this._queue.forEach((function(r, i) {
																		n._queue[i] = e.copyErrorDetailTruncateHttpRequests(r, t)
																	}))
																}, e.prototype.send = function(t) {
																	var n = e.copyErrorDetailTruncateStringsAndUrls(t, e.MAX_STRING_LENGTH, e.MAX_URL_LENGTH);
																	this.enabled ? a.post(this.backendUrl, n, (function() {})) : this._queue.push(n)
																}, e.prototype.flush = function() {
																	for (var e = i(this._queue), t = e.shift(); null != t;) this.removeFromQueue(t), this.send(t), t = e.shift()
																}, e.prototype.clear = function() {
																	this._queue.splice(0, this._queue.length)
																}, e.prototype.removeFromQueue = function(e) {
																	var t = this._queue.findIndex((function(t) {
																		return t === e
																	}));
																	t >= 0 && this._queue.splice(t, 1)
																}, e.MAX_URL_LENGTH = 200, e.MAX_STRING_LENGTH = 400, e
															}();
														t.ErrorDetailBackend = u
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__spreadArrays || function() {
																for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
																var r = Array(e),
																	i = 0;
																for (t = 0; t < n; t++)
																	for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
																return r
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.ErrorDetailTracking = void 0;
														var o = n(0),
															s = n(1),
															u = n(16),
															c = function(e) {
																function t(t, n, r, i) {
																	var c = e.call(this) || this;
																	return c.settingsProvider = t, c.backend = n, c.subscribables = r, c.httpRequestTracking = i, c.errorIndex = 0, c.onErrorHandler = function(e) {
																		var t, n;
																		try {
																			if (!c.isEnabled) return;
																			var r = null === (t = c.httpRequestTracking) || void 0 === t ? void 0 : t.httpRequests,
																				i = null == r ? void 0 : a(r),
																				l = c.errorIndex;
																			c.errorIndex++;
																			var f = {
																				platform: "web",
																				licenseKey: c.settingsProvider.licenseKey,
																				domain: c.settingsProvider.domain,
																				impressionId: c.settingsProvider.impressionId,
																				analyticsVersion: u.VERSION,
																				errorId: l,
																				timestamp: s.getCurrentTimestamp(),
																				code: e.code,
																				message: e.message,
																				data: null !== (n = e.errorData) && void 0 !== n ? n : {
																					additionalData: void 0,
																					exceptionMessage: void 0,
																					exceptionStacktrace: void 0
																				},
																				httpRequests: i
																			};
																			o.logger.log("ErrorDetailTracking.onError: " + JSON.stringify(f)), c.backend.send(f)
																		} catch (e) {
																			o.logger.error("ErrorDetailTracking.onError: Error in handler", e)
																		}
																	}, r.forEach((function(e) {
																		return e.subscribe(c.onErrorHandler)
																	})), c
																}
																return i(t, e), t.prototype.reset = function() {
																	var e;
																	null === (e = this.httpRequestTracking) || void 0 === e || e.reset(), this.errorIndex = 0
																}, t.prototype.enabled = function() {
																	this.backend.enabled = !0, this.backend.flush()
																}, t.prototype.disabled = function() {
																	var e, t = this;
																	this.errorIndex = 0, null === (e = this.httpRequestTracking) || void 0 === e || e.disable(), this.backend.clear(), this.subscribables.forEach((function(e) {
																		return e.unsubscribe(t.onErrorHandler)
																	}))
																}, t.prototype.configured = function(e, t) {
																	var n, r, i = Math.max(null !== (n = null == t ? void 0 : t.numberOfHttpRequests) && void 0 !== n ? n : 0, 0);
																	null === (r = this.httpRequestTracking) || void 0 === r || r.configure(i), this.backend.limitHttpRequestsOfQueuedErrorDetails(i)
																}, t.prototype.extractConfig = function(e) {
																	return e.errorDetails
																}, t
															}(n(52).Feature);
														t.ErrorDetailTracking = c
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.getMIMETypeFromFileExtension = t.MIMETypes = void 0;
														var r = n(1),
															i = "video/mp4",
															a = "video/webm",
															o = "application/x-mpegURL",
															s = "application/dash+xml";
														t.MIMETypes = {
															MP4: i,
															WEBM: a,
															HLS: o,
															DASH: s
														}, t.getMIMETypeFromFileExtension = function(e) {
															return e = e.split(/[?#]/)[0].toLowerCase(), r.endsWith(e, ".m3u8") ? o : r.endsWith(e, ".mp4") || r.endsWith(e, ".m4v") || r.endsWith(e, ".m4a") ? i : r.endsWith(e, ".webm") ? a : r.endsWith(e, ".mpd") ? s : void 0
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.PlayerSize = void 0,
															function(e) {
																e.Window = "WINDOW", e.Fullscreen = "FULLSCREEN"
															}(t.PlayerSize || (t.PlayerSize = {}))
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
															return (r = Object.assign || function(e) {
																for (var t, n = 1, r = arguments.length; n < r; n++)
																	for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																return e
															}).apply(this, arguments)
														};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.InternalAdapter = void 0;
														var i = n(19),
															a = n(2),
															o = n(53),
															s = n(0),
															u = n(6),
															c = n(1),
															l = n(54),
															f = function() {
																function e(e) {
																	var t = this;
																	this.stateMachineCallbacks = r({}, o.defaultStateMachineCallbacks), this._onLicenseKeyReceived = new i.EventDispatcher, this._onLicenseCallFailed = new i.EventDispatcher, this.drmPerformanceInfo = void 0, this.previousVideoBitrate = 0, this.previousAudioBitrate = 0, this.qualityChangeCount = 0, this._windowEventTracker = new l.WindowEventTracker, this.eventCallback = function(e, n) {
																		n = n || {}, t.stateMachine ? t.stateMachine.callEvent(e, n, c.getCurrentTimestamp()) : s.logger.log("Bitmovin Analytics: StateMachine isn't ready yet")
																	}, e || (e = {
																		starttime: void 0
																	}), e.starttime || (e.starttime = c.getCurrentTimestamp()), this.opts = e
																}
																return Object.defineProperty(e.prototype, "windowEventTracker", {
																	get: function() {
																		return this._windowEventTracker
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "onLicenseKeyReceived", {
																	get: function() {
																		return this._onLicenseKeyReceived
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "onLicenseCallFailed", {
																	get: function() {
																		return this._onLicenseCallFailed
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "downloadSpeedInfo", {
																	get: function() {
																		return {
																			segmentsDownloadCount: 0,
																			segmentsDownloadSize: 0,
																			segmentsDownloadTime: 0,
																			avgDownloadSpeed: 0,
																			minDownloadSpeed: 0,
																			maxDownloadSpeed: 0,
																			avgTimeToFirstByte: 0
																		}
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "segments", {
																	get: function() {
																		return []
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.prototype.release = function() {
																	this.stateMachine.resetIntervals(), this.stateMachineCallbacks.release(), this.resetSourceRelatedState(), this._windowEventTracker.release()
																}, e.prototype.getCommonPlaybackInfo = function() {
																	return {
																		screenHeight: screen.height,
																		screenWidth: screen.width
																	}
																}, e.prototype.clearValues = function() {}, e.prototype.clearSegments = function() {}, e.prototype.increaseQualityChangeCount = function() {
																	this.qualityChangeCount++
																}, e.prototype.resetQualityChangeCount = function() {
																	this.qualityChangeCount = 0
																}, e.prototype.resetSourceRelatedState = function() {
																	this.drmPerformanceInfo = void 0
																}, e.prototype.isQualityChangeEventEnabled = function() {
																	return this.qualityChangeCount <= u.ANALYTICS_QUALITY_CHANGE_COUNT_THRESHOLD
																}, e.prototype.setCustomData = function(e) {
																	var t = this.stateMachine.currentState;
																	!this.stateMachine.currentState || "PAUSE" !== this.stateMachine.currentState && "PLAYING" !== this.stateMachine.currentState ? this.stateMachineCallbacks.customdatachange(void 0, void 0, {
																		values: e
																	}) : (this.eventCallback(a.Event.CUSTOM_DATA_CHANGE, {
																		currentTime: this.currentTime
																	}), this.eventCallback(a.Event[t], {
																		values: e,
																		currentTime: this.currentTime
																	}))
																}, e.prototype.shouldAllowVideoQualityChange = function(e) {
																	return null != e && !isNaN(e) && this.previousVideoBitrate !== e && this.isQualityChangeEventEnabled()
																}, e.prototype.setPreviousVideoBitrate = function(e) {
																	this.previousVideoBitrate = e
																}, e.prototype.shouldAllowAudioQualityChange = function(e) {
																	return null != e && !isNaN(e) && this.previousAudioBitrate !== e && this.isQualityChangeEventEnabled()
																}, e.prototype.setPreviousAudioBitrate = function(e) {
																	this.previousAudioBitrate = e
																}, e.prototype.isAudioMuted = function(e, t) {
																	return e || t < .01
																}, e
															}();
														t.InternalAdapter = f
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.ErrorCode = void 0;
														var r = function() {
															function e(e, t) {
																this.code = e, this.message = t
															}
															return e.BITMOVIN_PLAYER_LICENSING_ERROR = new e(1103, ""), e.SETUP_MISSING_LICENSE_WHITELIST = new e(1105, ""), e.QUALITY_CHANGE_THRESHOLD_EXCEEDED = new e(1e4, "ANALYTICS_QUALITY_CHANGE_THRESHOLD_EXCEEDED"), e.BUFFERING_TIMEOUT_REACHED = new e(10001, "ANALYTICS_BUFFERING_TIMEOUT_REACHED"), e.VIDEO_STARTUP_TIMEOUT_REACHED = new e(10002, "ANALYTICS_VIDEOSTART_TIMEOUT_REACHED"), e
														}();
														t.ErrorCode = r
													}, function(e, t, n) {
														var r;
														r = {
															VERSION: "2.4.0",
															Result: {
																SUCCEEDED: 1,
																NOTRANSITION: 2,
																CANCELLED: 3,
																PENDING: 4
															},
															Error: {
																INVALID_TRANSITION: 100,
																PENDING_TRANSITION: 200,
																INVALID_CALLBACK: 300
															},
															WILDCARD: "*",
															ASYNC: "async",
															create: function(e, t) {
																var n = "string" == typeof e.initial ? {
																		state: e.initial
																	} : e.initial,
																	i = e.terminal || e.final,
																	a = t || e.target || {},
																	o = e.events || [],
																	s = e.callbacks || {},
																	u = {},
																	c = {},
																	l = function(e) {
																		var t = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [r.WILDCARD];
																		u[e.name] = u[e.name] || {};
																		for (var n = 0; n < t.length; n++) c[t[n]] = c[t[n]] || [], c[t[n]].push(e.name), u[e.name][t[n]] = e.to || t[n];
																		e.to && (c[e.to] = c[e.to] || [])
																	};
																n && (n.event = n.event || "startup", l({
																	name: n.event,
																	from: "none",
																	to: n.state
																}));
																for (var f = 0; f < o.length; f++) l(o[f]);
																for (var d in u) u.hasOwnProperty(d) && (a[d] = r.buildEvent(d, u[d]));
																for (var d in s) s.hasOwnProperty(d) && (a[d] = s[d]);
																return a.current = "none", a.is = function(e) {
																	return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
																}, a.can = function(e) {
																	return !this.transition && void 0 !== u[e] && (u[e].hasOwnProperty(this.current) || u[e].hasOwnProperty(r.WILDCARD))
																}, a.cannot = function(e) {
																	return !this.can(e)
																}, a.transitions = function() {
																	return (c[this.current] || []).concat(c[r.WILDCARD] || [])
																}, a.isFinished = function() {
																	return this.is(i)
																}, a.error = e.error || function(e, t, n, r, i, a, o) {
																	throw o || a
																}, a.states = function() {
																	return Object.keys(c).sort()
																}, n && !n.defer && a[n.event](), a
															},
															doCallback: function(e, t, n, i, a, o) {
																if (t) try {
																	return t.apply(e, [n, i, a].concat(o))
																} catch (t) {
																	return e.error(n, i, a, o, r.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", t)
																}
															},
															beforeAnyEvent: function(e, t, n, i, a) {
																return r.doCallback(e, e.onbeforeevent, t, n, i, a)
															},
															afterAnyEvent: function(e, t, n, i, a) {
																return r.doCallback(e, e.onafterevent || e.onevent, t, n, i, a)
															},
															leaveAnyState: function(e, t, n, i, a) {
																return r.doCallback(e, e.onleavestate, t, n, i, a)
															},
															enterAnyState: function(e, t, n, i, a) {
																return r.doCallback(e, e.onenterstate || e.onstate, t, n, i, a)
															},
															changeState: function(e, t, n, i, a) {
																return r.doCallback(e, e.onchangestate, t, n, i, a)
															},
															beforeThisEvent: function(e, t, n, i, a) {
																return r.doCallback(e, e["onbefore" + t], t, n, i, a)
															},
															afterThisEvent: function(e, t, n, i, a) {
																return r.doCallback(e, e["onafter" + t] || e["on" + t], t, n, i, a)
															},
															leaveThisState: function(e, t, n, i, a) {
																return r.doCallback(e, e["onleave" + n], t, n, i, a)
															},
															enterThisState: function(e, t, n, i, a) {
																return r.doCallback(e, e["onenter" + i] || e["on" + i], t, n, i, a)
															},
															beforeEvent: function(e, t, n, i, a) {
																if (!1 === r.beforeThisEvent(e, t, n, i, a) || !1 === r.beforeAnyEvent(e, t, n, i, a)) return !1
															},
															afterEvent: function(e, t, n, i, a) {
																r.afterThisEvent(e, t, n, i, a), r.afterAnyEvent(e, t, n, i, a)
															},
															leaveState: function(e, t, n, i, a) {
																var o = r.leaveThisState(e, t, n, i, a),
																	s = r.leaveAnyState(e, t, n, i, a);
																return !1 !== o && !1 !== s && (r.ASYNC === o || r.ASYNC === s ? r.ASYNC : void 0)
															},
															enterState: function(e, t, n, i, a) {
																r.enterThisState(e, t, n, i, a), r.enterAnyState(e, t, n, i, a)
															},
															buildEvent: function(e, t) {
																return function() {
																	var n = this.current,
																		i = t[n] || (t[r.WILDCARD] != r.WILDCARD ? t[r.WILDCARD] : n) || n,
																		a = Array.prototype.slice.call(arguments);
																	if (this.transition) return this.error(e, n, i, a, r.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
																	if (this.cannot(e)) return this.error(e, n, i, a, r.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
																	if (!1 === r.beforeEvent(this, e, n, i, a)) return r.Result.CANCELLED;
																	if (n === i) return r.afterEvent(this, e, n, i, a), r.Result.NOTRANSITION;
																	var o = this;
																	this.transition = function() {
																		return o.transition = null, o.current = i, r.enterState(o, e, n, i, a), r.changeState(o, e, n, i, a), r.afterEvent(o, e, n, i, a), r.Result.SUCCEEDED
																	}, this.transition.cancel = function() {
																		o.transition = null, r.afterEvent(o, e, n, i, a)
																	};
																	var s = r.leaveState(this, e, n, i, a);
																	return !1 === s ? (this.transition = null, r.Result.CANCELLED) : r.ASYNC === s ? r.Result.PENDING : this.transition ? this.transition() : void 0
																}
															}
														}, e.exports && (t = e.exports = r), t.StateMachine = r
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
															return (r = Object.assign || function(e) {
																for (var t, n = 1, r = arguments.length; n < r; n++)
																	for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																return e
															}).apply(this, arguments)
														};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AnalyticsStateMachine = void 0;
														var i = n(12),
															a = n(2),
															o = n(51),
															s = n(6),
															u = n(1),
															c = [3e3, 5e3, 1e4, 3e4, 59700],
															l = function() {
																function e(e, t) {
																	this.stateMachineCallbacks = e, this.onEnterStateTimestamp = 0, this.videoStartupTimeoutMs = s.ANALYTICS_VIDEOSTART_TIMEOUT, this.rebufferTimeoutMs = s.ANALYTICS_REBUFFER_TIMEOUT, this.currentRebufferingIntervalIndex = 0, this.stateMachine = this.createStateMachine(t)
																}
																return Object.defineProperty(e.prototype, "currentState", {
																	get: function() {
																		return this.stateMachine.current
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.prototype.resetIntervals = function() {
																	this.clearVideoStartTimeout(), this.clearRebufferingTimeoutHandle(!0), this.clearRebufferingHeartbeatHandle()
																}, e.prototype.startRebufferingHeartbeatInterval = function(e) {
																	var t = this;
																	void 0 === e && (e = !0), this.resetRebufferingHelpers(e), this.startRebufferingTimeoutHandle(), this.rebufferingHeartbeatIntervalHandle = window.setInterval((function() {
																		if ("rebuffering" === t.stateMachine.current.toLowerCase()) {
																			var e = (new Date).getTime(),
																				n = e - t.onEnterStateTimestamp;
																			t.stateMachineCallbacks.heartbeat(n, t.stateMachine.current.toLowerCase(), {
																				buffered: n
																			}), t.onEnterStateTimestamp = e, t.currentRebufferingIntervalIndex = Math.min(t.currentRebufferingIntervalIndex + 1, c.length - 1), t.startRebufferingHeartbeatInterval(!1)
																		} else t.resetRebufferingHelpers()
																	}), c[this.currentRebufferingIntervalIndex])
																}, e.prototype.resetRebufferingHelpers = function(e) {
																	void 0 === e && (e = !0), e && (this.currentRebufferingIntervalIndex = 0), this.clearRebufferingHeartbeatHandle(), this.clearRebufferingTimeoutHandle(e)
																}, e.prototype.clearRebufferingHeartbeatHandle = function() {
																	null != this.rebufferingHeartbeatIntervalHandle && (window.clearInterval(this.rebufferingHeartbeatIntervalHandle), this.rebufferingHeartbeatIntervalHandle = void 0)
																}, e.prototype.startRebufferingTimeoutHandle = function() {
																	var e = this;
																	this.currentRebufferingIntervalIndex > 0 || (this.rebufferingTimeoutHandle = window.setTimeout((function() {
																		e.callEvent(a.Event.ERROR, r(r({}, i.ErrorCode.BUFFERING_TIMEOUT_REACHED), {
																			data: {
																				additionalData: "StateMachine timed out after " + e.rebufferTimeoutMs + " ms of consecutive buffering."
																			}
																		}), u.getCurrentTimestamp()), e.stateMachineCallbacks.release()
																	}), this.rebufferTimeoutMs))
																}, e.prototype.clearRebufferingTimeoutHandle = function(e) {
																	e && null != this.rebufferingTimeoutHandle && (window.clearTimeout(this.rebufferingTimeoutHandle), this.rebufferingTimeoutHandle = void 0)
																}, e.prototype.getVideoStartupFailedEventData = function(e, t, n) {
																	return {
																		currentTime: e,
																		reason: this.getReasonForVideoStartFailure(t)
																	}
																}, e.prototype.getReasonForVideoStartFailure = function(e) {
																	switch (e) {
																		case a.Event.ERROR:
																			return o.VideoStartFailedReason.PLAYER_ERROR;
																		case a.Event.UNLOAD:
																			return o.VideoStartFailedReason.PAGE_CLOSED;
																		case a.Event.VIDEOSTART_TIMEOUT:
																			return o.VideoStartFailedReason.TIMEOUT;
																		default:
																			return o.VideoStartFailedReason.UNKNOWN
																	}
																}, e.prototype.setVideoStartTimeout = function() {
																	var e = this;
																	null != this.videoStartTimeout && this.clearVideoStartTimeout(), this.videoStartTimeout = window.setTimeout((function() {
																		e.callEvent(a.Event.VIDEOSTART_TIMEOUT, {}, u.getCurrentTimestamp()), e.stateMachineCallbacks.release()
																	}), this.videoStartupTimeoutMs)
																}, e.prototype.clearVideoStartTimeout = function() {
																	window.clearTimeout(this.videoStartTimeout), this.videoStartTimeout = void 0
																}, e
															}();
														t.AnalyticsStateMachine = l
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__assign || function() {
																return (a = Object.assign || function(e) {
																	for (var t, n = 1, r = arguments.length; n < r; n++)
																		for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																	return e
																}).apply(this, arguments)
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.HTML5InternalAdapter = void 0;
														var o = n(26),
															s = n(20),
															u = n(2),
															c = n(9),
															l = n(3),
															f = n(10),
															d = n(27),
															h = n(1),
															p = n(1),
															_ = function(e) {
																function t(t, n) {
																	var r = e.call(this, n) || this;
																	return r.mediaElement = t, r.onBeforeUnLoadEvent = !1, r.previousMutedValue = !1, r.getPlayerName = function() {
																		return l.Player.HTML5
																	}, r.getPlayerTech = function() {
																		return "html5"
																	}, r.getAutoPlay = function() {
																		return !!r.mediaElement && r.mediaElement.autoplay
																	}, r.getDrmPerformanceInfo = function() {
																		return r.drmPerformanceInfo
																	}, r.isLive = function() {
																		return !!r.mediaElement && r.mediaElement.duration === 1 / 0
																	}, r.initializeStateMachine(), r.mediaElEventHandlers = [], r.bufferingTimeout = void 0, r.isBuffering = !1, r.lastIsLiveStatus = !1, r.isPaused = !1, r.isSeeking = !1, r.previousMediaTime = 0, r.previousClientTime = 0, r.needsReadyEvent = !0, r.needsFirstPlayIntent = !0, r.mediaElementSet = !1, r.videoCompletionTracker = new s.default, r
																}
																return i(t, e), Object.defineProperty(t.prototype, "segments", {
																	get: function() {
																		return []
																	},
																	enumerable: !1,
																	configurable: !0
																}), t.prototype.initialize = function(e) {
																	return this.mediaElement && this.setMediaElement(), this.registerWindowEvents(), []
																}, t.prototype.getStreamSources = function(e) {
																	if (!e) return {};
																	switch (this.getStreamType()) {
																		case "hls":
																			return {
																				m3u8Url: e
																			};
																		case "dash":
																			return {
																				mpdUrl: e
																			};
																		default:
																			return {
																				progUrl: e
																			}
																	}
																}, t.prototype.getCurrentPlaybackInfo = function() {
																	var e = a(a(a({}, this.getCommonPlaybackInfo()), this.getStreamSources(this.getStreamURL())), {
																		streamFormat: this.getStreamType(),
																		isLive: this.isLive(),
																		size: p.isVideoInFullscreen() ? f.PlayerSize.Fullscreen : f.PlayerSize.Window,
																		playerTech: this.getPlayerTech(),
																		droppedFrames: 0
																	});
																	this.mediaElement && (e = a(a({}, e), {
																		videoDuration: this.mediaElement.duration,
																		isMuted: this.mediaElement.muted,
																		videoWindowHeight: this.mediaElement.height,
																		videoWindowWidth: this.mediaElement.width
																	}));
																	var t = this.getCurrentQualityLevelInfo();
																	return t && (e = a(a({}, e), {
																		videoPlaybackHeight: t.height,
																		videoPlaybackWidth: t.width,
																		videoBitrate: t.bitrate
																	})), e
																}, Object.defineProperty(t.prototype, "currentTime", {
																	get: function() {
																		if (!this.mediaElement) throw new Error("No media attached");
																		return this.mediaElement.currentTime
																	},
																	enumerable: !1,
																	configurable: !0
																}), t.prototype.setMediaElement = function(e) {
																	if (void 0 === e && (e = null), e && this.mediaElement && (this.unregisterMediaElement(), this.mediaElementSet = !1), e && (this.mediaElement = e), !this.mediaElement) throw new Error("No media element owned");
																	if (this.mediaElementSet) throw new Error("Media element already set (only call this once)");
																	this.mediaElementSet = !0, this.registerMediaElement(), this.onMaybeReady()
																}, t.prototype.getMIMEType = function() {
																	var e = this.getStreamURL();
																	if (e && void 0 !== e) return c.getMIMETypeFromFileExtension(e)
																}, t.prototype.getStreamType = function() {
																	var e = this.getMIMEType();
																	if (e) return d.getStreamTypeFromMIMEType(e)
																}, t.prototype.getStreamURL = function() {
																	var e = this.mediaElement;
																	if (e) return e.src
																}, t.prototype.resetMedia = function() {
																	this.mediaElement = null, this.mediaElEventHandlers = [], window.clearTimeout(this.bufferingTimeout)
																}, t.prototype.registerMediaElement = function() {
																	var e = this,
																		t = this.mediaElement;
																	t && (this.listenToMediaElementEvent("loadstart", (function() {
																		e.eventCallback(u.Event.READY, {})
																	})), this.listenToMediaElementEvent("loadedmetadata", (function() {
																		1 === t.readyState && (e.checkQualityLevelAttributes(!0), null != e.mediaElement && (e.videoCompletionTracker.reset(), e.videoCompletionTracker.setVideoDuration(e.mediaElement.duration), e.previousMutedValue = e.mediaElement.muted))
																	})), this.listenToMediaElementEvent("play", (function() {
																		var n = t.currentTime;
																		e.needsFirstPlayIntent = !1, e.eventCallback(u.Event.PLAY, {
																			currentTime: n
																		})
																	})), this.listenToMediaElementEvent("pause", (function() {
																		e.onPaused()
																	})), this.listenToMediaElementEvent("playing", (function() {
																		e.isPaused = !1
																	})), this.listenToMediaElementEvent("error", (function() {
																		var n, r, i = t.currentTime,
																			a = t.error;
																		e.eventCallback(u.Event.ERROR, {
																			currentTime: i,
																			code: null !== (n = null == a ? void 0 : a.code) && void 0 !== n ? n : void 0,
																			message: null !== (r = null == a ? void 0 : a.message) && void 0 !== r ? r : void 0,
																			data: {}
																		})
																	})), this.listenToMediaElementEvent("volumechange", (function() {
																		var n = t.muted,
																			r = t.currentTime,
																			i = t.volume,
																			a = e.isAudioMuted(n, i);
																		e.previousMutedValue !== a && (a ? e.eventCallback(u.Event.MUTE, {
																			currentTime: r
																		}) : e.eventCallback(u.Event.UN_MUTE, {
																			currentTime: r
																		}), e.previousMutedValue = a)
																	})), this.listenToMediaElementEvent("seeking", (function() {
																		var n = t.currentTime;
																		e.eventCallback(u.Event.SEEK, {
																			currentTime: n
																		})
																	})), this.listenToMediaElementEvent("seeked", (function() {
																		var n = t.currentTime;
																		clearTimeout(e.bufferingTimeout), e.eventCallback(u.Event.SEEKED, {
																			currentTime: n
																		})
																	})), this.listenToMediaElementEvent("timeupdate", (function() {
																		var n = t.currentTime;
																		e.isBuffering = !1, e.isSeeking = !1, e.needsFirstPlayIntent || (e.isPaused || e.eventCallback(u.Event.TIMECHANGED, {
																			currentTime: n
																		}), e.checkQualityLevelAttributes(), e.checkSeeking(), e.checkPlayheadProgress(), e.previousMediaTime = n)
																	})), this.listenToMediaElementEvent("stalled", (function() {})), this.listenToMediaElementEvent("waiting", (function() {
																		e.checkSeeking(), e.onBuffering()
																	})))
																}, t.prototype.listenToMediaElementEvent = function(e, t) {
																	if (!this.mediaElement) throw new Error("No media attached");
																	var n = t.bind(this);
																	this.mediaElEventHandlers.push({
																		event: e,
																		handler: n
																	}), this.mediaElement.addEventListener(e, n, !1)
																}, t.prototype.onMaybeReady = function() {
																	this.needsReadyEvent && this.mediaElement && (this.needsReadyEvent = !1, this.getCurrentPlaybackInfo(), this.videoCompletionTracker.reset(), this.videoCompletionTracker.setVideoDuration(this.mediaElement.duration), this.eventCallback(u.Event.READY, {
																		currentTime: this.currentTime
																	}))
																}, t.prototype.unregisterMediaElement = function() {
																	if (!this.mediaElement) throw new Error("No media attached");
																	var e = this.mediaElement;
																	this.mediaElEventHandlers.forEach((function(t) {
																		e.removeEventListener(t.event, t.handler)
																	})), this.resetMedia()
																}, t.prototype.onBuffering = function() {
																	if (!this.mediaElement) throw new Error("No media attached");
																	var e = this.mediaElement.currentTime;
																	this.isBuffering || this.isPaused && !this.isSeeking || (this.isSeeking ? this.eventCallback(u.Event.SEEK, {
																		currentTime: e
																	}) : this.eventCallback(u.Event.START_BUFFERING, {
																		currentTime: e
																	}), this.isBuffering = !0)
																}, t.prototype.onPaused = function(e) {
																	if (!this.isPaused) {
																		if (!this.mediaElement) throw new Error("No media attached");
																		e || (e = this.mediaElement.currentTime), this.eventCallback(u.Event.PAUSE, {
																			currentTime: e
																		}), this.isPaused = !0
																	}
																}, t.prototype.registerWindowEvents = function() {
																	this.windowEventTracker.addEventListener("beforeunload", this.onPageClose.bind(this)), this.windowEventTracker.addEventListener("unload", this.onPageClose.bind(this))
																}, t.prototype.onPageClose = function() {
																	if (!this.onBeforeUnLoadEvent) {
																		this.onBeforeUnLoadEvent = !0;
																		var e = this.mediaElement,
																			t = void 0;
																		null != e && (t = e.currentTime), this.eventCallback(u.Event.UNLOAD, {
																			currentTime: t
																		})
																	}
																	this.release()
																}, t.prototype.checkPlayheadProgress = function() {
																	var e = this;
																	if (!this.mediaElement) throw new Error("No media attached");
																	var n = this.mediaElement;
																	n.paused && this.onPaused(), clearTimeout(this.bufferingTimeout), this.bufferingTimeout = window.setTimeout((function() {
																		n.paused || n.ended && !e.isBuffering || n.currentTime - e.previousMediaTime < t.BUFFERING_TIMECHANGED_TIMEOUT && e.onBuffering()
																	}), t.BUFFERING_TIMECHANGED_TIMEOUT)
																}, t.prototype.checkQualityLevelAttributes = function(e) {
																	if (void 0 === e && (e = !1), !this.mediaElement) throw new Error("No media attached");
																	var t = this.mediaElement,
																		n = this.getCurrentQualityLevelInfo();
																	if (n) {
																		var r = n.bitrate,
																			i = n.width,
																			a = n.height,
																			o = this.isLive();
																		if (o !== this.lastIsLiveStatus && (this.lastIsLiveStatus = o), null != r && this.shouldAllowVideoQualityChange(r)) {
																			this.setPreviousVideoBitrate(r);
																			var s = {
																				width: i,
																				height: a,
																				bitrate: r,
																				currentTime: t.currentTime
																			};
																			e || this.eventCallback(u.Event.VIDEO_CHANGE, s)
																		}
																	}
																}, t.prototype.sourceChange = function(e, t) {
																	this.stateMachine.sourceChange(e, t, this.mediaElement ? this.mediaElement.currentTime : void 0)
																}, t.prototype.getSelectedSubtitleFromMediaElement = function(e) {
																	if (null != e.textTracks) {
																		for (var t = 0, n = e.textTracks; t < n.length; t++) {
																			var r = n[t];
																			if (null != r.mode && "showing" === r.mode) {
																				var i = null != r.language && r.language.length > 0;
																				return {
																					enabled: i,
																					language: i ? r.language : void 0
																				}
																			}
																		}
																		return {
																			enabled: !1
																		}
																	}
																}, t.prototype.initializeStateMachine = function() {
																	this.stateMachine = new o.HTML5AnalyticsStateMachine(this.stateMachineCallbacks, this.opts), this.stateMachine.callEvent(u.Event.SETUP, {}, 0)
																}, t.prototype.checkSeeking = function() {
																	if (!this.mediaElement) throw new Error("No media attached");
																	var e = this.mediaElement.currentTime,
																		t = Math.abs(e - this.previousMediaTime),
																		n = (h.getCurrentTimestamp() - this.previousClientTime) / 1e3;
																	t > 2 * n && (this.isSeeking = !0, this.onPaused(this.previousMediaTime + n)), this.previousClientTime = h.getCurrentTimestamp()
																}, t.BUFFERING_TIMECHANGED_TIMEOUT = 1e3, t
															}(n(11).InternalAdapter);
														t.HTML5InternalAdapter = _
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.VERSION = void 0, t.VERSION = "v2.27.2"
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.post = void 0;
														var r = n(0);
														t.post = function(e, t, n, i) {
															var a;
															void 0 === i && (i = !0);
															var o = !1;
															window.XDomainRequest && (o = !0), a = o ? new window.XDomainRequest : new XMLHttpRequest;
															var s = function() {
																if (a.readyState == XMLHttpRequest.DONE) {
																	if (a.responseText <= 0) return;
																	var e = JSON.parse(a.responseText);
																	n(e)
																}
															};
															o ? a.onload = s : a.onreadystatechange = s;
															try {
																a.open("POST", e, i), o || a.setRequestHeader("Content-Type", "text/plain"), a.send(JSON.stringify(t))
															} catch (e) {
																r.logger.error("Failed to send POST request.", e)
															}
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.NoOpBackend = void 0;
														var r = function() {
															function e() {}
															return e.prototype.sendRequest = function(e) {}, e.prototype.sendUnloadRequest = function(e) {}, e.prototype.sendRequestSynchronous = function(e) {}, e.prototype.sendAdRequest = function(e) {}, e
														}();
														t.NoOpBackend = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.EventDispatcher = void 0;
														var r = function() {
															function e() {
																this.callbacks = []
															}
															return e.prototype.subscribe = function(e) {
																var t = this;
																return this.callbacks.push(e),
																	function() {
																		return t.unsubscribe(e)
																	}
															}, e.prototype.dispatch = function(e) {
																this.callbacks.slice(0).forEach((function(t) {
																	t(e)
																}))
															}, e.prototype.unsubscribe = function(e) {
																var t = this.callbacks.indexOf(e);
																t > -1 && this.callbacks.splice(t, 1)
															}, Object.defineProperty(e.prototype, "subscriberCount", {
																get: function() {
																	return this.callbacks.length
																},
																enumerable: !1,
																configurable: !0
															}), e
														}();
														t.EventDispatcher = r
													}, function(e, t, n) {
														"use strict";
														var r;
														Object.defineProperty(t, "__esModule", {
																value: !0
															}),
															function(e) {
																e[e.None = 0] = "None", e[e.Overlapping = 1] = "Overlapping", e[e.FirstContainedInSecond = 2] = "FirstContainedInSecond", e[e.SecondContainedInFirst = 3] = "SecondContainedInFirst"
															}(r || (r = {}));
														var i = function() {
															function e() {
																this.watched = [], this.videoDuration = null
															}
															return e.prototype.reset = function() {
																this.watched = []
															}, e.prototype.setVideoDuration = function(e) {
																this.videoDuration = 1e3 * e
															}, e.prototype.addWatched = function(e) {
																if (null == this.videoDuration) throw new Error("no video duration set for completion tracker");
																this.watched.push(e);
																var t = this.mergeWatched(this.watched);
																return (this.getDuration(e) - t) / this.videoDuration
															}, e.prototype.getCompletionPercentage = function() {
																if (null == this.videoDuration) throw new Error("no video duration set for completion tracker");
																for (var e = 0, t = 0, n = this.watched; t < n.length; t++) {
																	var r = n[t];
																	e += this.getDuration(r)
																}
																return e / this.videoDuration
															}, e.prototype.mergeWatched = function(e) {
																for (var t = 0; t < e.length; t++)
																	for (var n = e[t], i = t + 1; i < e.length; i++) {
																		var a = e[i],
																			o = 0,
																			s = this.getOverlappingType(n, a);
																		if (s === r.Overlapping ? (this.mergeAndReplace(n, t, a, i), o = this.getOverlappingTimespan(n, a)) : s === r.FirstContainedInSecond ? (this.watched.splice(t, 1), o = this.getDuration(n)) : s === r.SecondContainedInFirst && (this.watched.splice(i, 1), o = this.getDuration(a)), s !== r.None) return o + this.mergeWatched(this.watched)
																	}
																return 0
															}, e.prototype.getOverlappingType = function(e, t) {
																return this.isMomentInTimespan(e.end, t) && e.start < t.start || this.isMomentInTimespan(e.start, t) && e.end > t.end ? r.Overlapping : this.isMomentInTimespan(e.start, t) && this.isMomentInTimespan(e.end, t) ? r.FirstContainedInSecond : this.isMomentInTimespan(t.start, e) && this.isMomentInTimespan(t.end, e) ? r.SecondContainedInFirst : r.None
															}, e.prototype.isMomentInTimespan = function(e, t) {
																return e >= t.start && e < t.end
															}, e.prototype.mergeAndReplace = function(e, t, n, r) {
																var i = e.end > n.end ? e.end : n.end,
																	a = {
																		start: e.start < n.start ? e.start : n.start,
																		end: i
																	};
																this.watched.splice(t, 1, a), this.watched.splice(r, 1)
															}, e.prototype.getOverlappingTimespan = function(e, t) {
																return (e.end < t.end ? e.end : t.end) - (e.start >= t.start ? e.start : t.start)
															}, e.prototype.getDuration = function(e) {
																return Math.abs(e.end - e.start)
															}, e
														}();
														t.default = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.customDataFieldCount = t.customDataValuesKeys = void 0, t.customDataValuesKeys = ["customData1", "customData2", "customData3", "customData4", "customData5", "customData6", "customData7", "customData8", "customData9", "customData10", "customData11", "customData12", "customData13", "customData14", "customData15", "customData16", "customData17", "customData18", "customData19", "customData20", "customData21", "customData22", "customData23", "customData24", "customData25", "customData26", "customData27", "customData28", "customData29", "customData30", "experimentName"], t.customDataFieldCount = t.customDataValuesKeys.filter((function(e) {
															return e.match("customData\\d+")
														})).length
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.EventDebugging = void 0, t.EventDebugging = function(e, t, n, r, i) {
															this.event = e, this.from = t, this.to = n, this.timestamp = r, this.eventObject = i
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.CastTech = void 0,
															function(e) {
																e.AirPlay = "AirPlay", e.WebSocket = "WebSocket", e.GoogleCast = "GoogleCast"
															}(t.CastTech || (t.CastTech = {}))
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.getSourceInfoFromBitmovinSourceConfig = void 0, t.getSourceInfoFromBitmovinSourceConfig = function(e, t) {
															if (!e) return {
																progBitrate: void 0,
																progUrl: void 0
															};
															if ("string" == typeof e) return {
																progBitrate: 0,
																progUrl: e
															};
															if (Array.isArray(e) && e.length > 0) {
																var n = t.getPlaybackVideoData(),
																	r = 0;
																return null == n || isNaN(+n.id) || (r = +n.id), {
																	progBitrate: e[r].bitrate || 0,
																	progUrl: e[r].url
																}
															}
															return "object" != typeof e || Array.isArray(e) ? {
																progBitrate: void 0,
																progUrl: void 0
															} : {
																progBitrate: e.bitrate || 0,
																progUrl: e.url
															}
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.DownloadSpeedMeter = void 0;
														var r = n(58),
															i = n(59),
															a = function() {
																function e() {
																	this.measures = []
																}
																return e.prototype.reset = function() {
																	this.measures = []
																}, e.prototype.addMeasurement = function(e) {
																	if (!(e.httpStatus >= 400)) {
																		var t = new i.Measure(e),
																			n = r.Converter.bitsToBytes(3e8);
																		t.speed >= n || this.measures.push(t)
																	}
																}, e.prototype.getInfo = function() {
																	return {
																		segmentsDownloadCount: this.measures.length,
																		segmentsDownloadSize: this.measures.map((function(e) {
																			return e.size
																		})).reduce(this.add, 0),
																		segmentsDownloadTime: Math.ceil(1e3 * this.totalTime()),
																		avgDownloadSpeed: this.avgSpeed(),
																		minDownloadSpeed: this.minSpeed(),
																		maxDownloadSpeed: this.maxSpeed(),
																		avgTimeToFirstByte: this.avgTimeToFirstByte()
																	}
																}, e.prototype.add = function(e, t) {
																	return e + t
																}, e.prototype.avgSpeed = function() {
																	if (0 === this.measures.length) return 0;
																	var e = this.speeds().reduce((function(e, t) {
																			return e + t
																		}), 0),
																		t = this.measures.length;
																	return this.bytePerSecondToBitPerSecond(e / t)
																}, e.prototype.bytePerSecondToBitPerSecond = function(e) {
																	return r.Converter.bytesToBits(e)
																}, e.prototype.minSpeed = function() {
																	return 0 === this.measures.length ? 0 : this.bytePerSecondToBitPerSecond(Math.min.apply(Math, this.speeds()))
																}, e.prototype.speeds = function() {
																	return this.measures.map((function(e) {
																		return e.speed
																	}))
																}, e.prototype.maxSpeed = function() {
																	return 0 === this.measures.length ? 0 : this.bytePerSecondToBitPerSecond(Math.max.apply(Math, this.speeds()))
																}, e.prototype.totalTime = function() {
																	return 0 === this.measures.length ? 0 : this.measures.reduce((function(e, t) {
																		return e + t.duration
																	}), 0)
																}, e.prototype.avgTimeToFirstByte = function() {
																	if (0 === this.measures.length) return 0;
																	var e = this.measures.reduce((function(e, t) {
																		return e + 1e3 * t.timeToFirstByte
																	}), 0) / this.measures.length;
																	return Math.ceil(e)
																}, e
															}();
														t.DownloadSpeedMeter = a
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__spreadArrays || function() {
																for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
																var r = Array(e),
																	i = 0;
																for (t = 0; t < n; t++)
																	for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
																return r
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.HTML5AnalyticsStateMachine = void 0;
														var o, s = n(13),
															u = n(2),
															c = n(0),
															l = n(1),
															f = n(14);
														! function(e) {
															e.INITIALIZED = "INITIALIZED", e.SETUP = "SETUP", e.STARTUP = "STARTUP", e.READY = "READY", e.PLAYING = "PLAYING", e.REBUFFERING = "REBUFFERING", e.PAUSE = "PAUSE", e.QUALITYCHANGE = "QUALITYCHANGE", e.PAUSED_SEEKING = "PAUSED_SEEKING", e.QUALITYCHANGE_PAUSE = "QUALITYCHANGE_PAUSE", e.QUALITYCHANGE_REBUFFERING = "QUALITYCHANGE_REBUFFERING", e.END = "END", e.ERROR = "ERROR", e.AD = "AD", e.SOURCE_CHANGING = "SOURCE_CHANGING", e.MUTING_READY = "MUTING_READY", e.MUTING_PLAY = "MUTING_PLAY", e.MUTING_PAUSE = "MUTING_PAUSE", e.CASTING = "CASTING", e.SUBTITLE_CHANGING = "SUBTITLE_CHANGING", e.AUDIOTRACK_CHANGING = "AUDIOTRACK_CHANGING", e.EXIT_BEFORE_VIDEOSTART = "EXIT_BEFORE_VIDEOSTART", e.CUSTOMDATACHANGE = "CUSTOMDATACHANGE"
														}(o || (o = {}));
														var d = function(e) {
															function t(t, n) {
																var r = e.call(this, t, n) || this;
																return r.sourceChange = function(e, t, n) {
																	r.callEvent(u.Event.MANUAL_SOURCE_CHANGE, {
																		config: e,
																		currentTime: n
																	}, t)
																}, r.seekStartedAt = null, r.createStateMachine(n), r
															}
															return i(t, e), t.prototype.getAllStates = function() {
																return a(Object.keys(o).map((function(e) {
																	return o[e]
																})), ["FINISH_QUALITYCHANGE_PAUSE", "FINISH_QUALITYCHANGE", "FINISH_QUALITYCHANGE_REBUFFERING"])
															}, t.prototype.getAllStatesBut = function(e) {
																return this.getAllStates().filter((function(t) {
																	return e.indexOf(t) < 0
																}))
															}, t.prototype.createStateMachine = function(e) {
																var t = this;
																return s.create({
																	initial: o.INITIALIZED,
																	error: function(e, t, n, r, i, a) {
																		c.logger.error("Error in statemachine: " + a)
																	},
																	events: [{
																		name: u.Event.SETUP,
																		from: o.INITIALIZED,
																		to: o.SETUP
																	}, {
																		name: u.Event.SETUP,
																		from: o.SETUP,
																		to: o.SETUP
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.SETUP,
																		to: o.SETUP
																	}, {
																		name: u.Event.READY,
																		from: [o.SETUP, o.ERROR, o.END, o.SOURCE_CHANGING],
																		to: o.READY
																	}, {
																		name: u.Event.READY,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.READY,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.PLAY,
																		from: o.READY,
																		to: o.STARTUP
																	}, {
																		name: u.Event.ERROR,
																		from: o.STARTUP,
																		to: o.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: u.Event.UNLOAD,
																		from: o.STARTUP,
																		to: o.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: u.Event.VIDEOSTART_TIMEOUT,
																		from: o.STARTUP,
																		to: o.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.READY,
																		to: o.STARTUP
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.STARTUP,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.SEEKED,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.PLAYING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.PLAY,
																		from: o.REBUFFERING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.REBUFFERING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.SEEK,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.PLAY,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.PLAYING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PAUSE,
																		from: o.REBUFFERING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PLAY,
																		from: o.PAUSE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PAUSE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PLAYING,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PLAYING,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE,
																		to: o.QUALITYCHANGE
																	}, {
																		name: "FINISH_QUALITYCHANGE",
																		from: o.QUALITYCHANGE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: "FINISH_QUALITYCHANGE_PAUSE",
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.SEEK,
																		from: o.PAUSE,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.SEEK,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PAUSED_SEEKING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.END,
																		from: o.PAUSED_SEEKING,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.PLAYING,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.PAUSE,
																		to: o.END
																	}, {
																		name: u.Event.PAUSE,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.SEEK,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.SEEKED,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.SEEKED,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.SEEK,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.PLAY,
																		from: o.END,
																		to: o.PLAYING
																	}, {
																		name: u.Event.ERROR,
																		from: this.getAllStatesBut([o.STARTUP]),
																		to: o.ERROR
																	}, {
																		name: u.Event.PAUSE,
																		from: o.ERROR,
																		to: o.ERROR
																	}, {
																		name: u.Event.UNLOAD,
																		from: this.getAllStatesBut([o.STARTUP]),
																		to: o.END
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.PLAYING,
																		to: o.SUBTITLE_CHANGING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.SUBTITLE_CHANGING,
																		to: o.SUBTITLE_CHANGING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.SUBTITLE_CHANGING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.PLAYING,
																		to: o.AUDIOTRACK_CHANGING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.AUDIOTRACK_CHANGING,
																		to: o.AUDIOTRACK_CHANGING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.AUDIOTRACK_CHANGING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.START_AD,
																		from: o.PLAYING,
																		to: o.AD
																	}, {
																		name: u.Event.END_AD,
																		from: o.AD,
																		to: o.PLAYING
																	}, {
																		name: u.Event.MUTE,
																		from: o.READY,
																		to: o.MUTING_READY
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.READY,
																		to: o.MUTING_READY
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_READY,
																		to: o.READY
																	}, {
																		name: u.Event.MUTE,
																		from: o.PLAYING,
																		to: o.MUTING_PLAY
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.PLAYING,
																		to: o.MUTING_PLAY
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_PLAY,
																		to: o.PLAYING
																	}, {
																		name: u.Event.MUTE,
																		from: o.PAUSE,
																		to: o.MUTING_PAUSE
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.PAUSE,
																		to: o.MUTING_PAUSE
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.START_CAST,
																		from: [o.READY, o.PAUSE],
																		to: o.CASTING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.PLAY,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.MUTE,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.SEEK,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.END_CAST,
																		from: o.CASTING,
																		to: o.READY
																	}, {
																		name: u.Event.SEEK,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.SEEKED,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.SEEKED,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.SOURCE_LOADED,
																		from: this.getAllStates(),
																		to: o.SETUP
																	}, {
																		name: u.Event.MANUAL_SOURCE_CHANGE,
																		from: this.getAllStates(),
																		to: o.SOURCE_CHANGING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.SOURCE_CHANGING,
																		to: o.SOURCE_CHANGING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.SOURCE_CHANGING,
																		to: o.SOURCE_CHANGING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: "FINISH_QUALITYCHANGE_REBUFFERING",
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.CUSTOM_DATA_CHANGE,
																		from: [o.PLAYING, o.PAUSE],
																		to: o.CUSTOMDATACHANGE
																	}, {
																		name: u.Event.PLAYING,
																		from: o.CUSTOMDATACHANGE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.CUSTOMDATACHANGE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PLAYLIST_TRANSITION,
																		from: this.getAllStates(),
																		to: o.READY
																	}],
																	callbacks: {
																		onenterstate: function(n, r, i, a, s) {
																			"none" === r && e.starttime ? t.onEnterStateTimestamp = e.starttime : t.onEnterStateTimestamp = a || l.getCurrentTimestamp(), c.logger.log("[ENTER " + a + "] " + c.padRight(i, 20) + " EVENT: " + c.padRight(n, 20) + " from: " + c.padRight(r, 14)), s && i !== o.PAUSED_SEEKING && t.stateMachineCallbacks.setVideoTimeStartFromEvent(s), n === u.Event.START_CAST && i === o.CASTING && t.stateMachineCallbacks.startCasting(a, s), i === o.REBUFFERING && t.startRebufferingHeartbeatInterval()
																		},
																		onafterevent: function(e, n, r, i, a) {
																			e === u.Event.MANUAL_SOURCE_CHANGE && t.stateMachineCallbacks.manualSourceChange(a), e === u.Event.PLAYLIST_TRANSITION && t.stateMachineCallbacks.playlistTransition(a), r === o.QUALITYCHANGE_PAUSE && t.stateMachine.FINISH_QUALITYCHANGE_PAUSE(i), r === o.QUALITYCHANGE && t.stateMachine.FINISH_QUALITYCHANGE(i), r === o.QUALITYCHANGE_REBUFFERING && t.stateMachine.FINISH_QUALITYCHANGE_REBUFFERING(i), r !== o.MUTING_READY && r !== o.MUTING_PLAY && r !== o.MUTING_PAUSE || t.stateMachine.FINISH_MUTING(i)
																		},
																		onleavestate: function(e, n, r, i, a) {
																			if (n === o.REBUFFERING && t.resetRebufferingHelpers(), i) {
																				c.logger.log("[LEAVE " + i + "] " + c.padRight(n, 20) + " EVENT: " + c.padRight(e, 20) + " to: " + c.padRight(r, 20));
																				var s = i - t.onEnterStateTimestamp;
																				a && r !== o.PAUSED_SEEKING && t.stateMachineCallbacks.setVideoTimeEndFromEvent(a), n === o.READY && r === o.STARTUP ? t.setVideoStartTimeout() : n === o.STARTUP && r === o.PLAYING && t.clearVideoStartTimeout();
																				var l = String(n).toLowerCase();
																				if (r === o.EXIT_BEFORE_VIDEOSTART) {
																					t.clearVideoStartTimeout();
																					var f = t.getVideoStartupFailedEventData(i, e, a),
																						d = e !== u.Event.ERROR;
																					t.stateMachineCallbacks.videoStartFailed(f, d)
																				} else if (n === o.PAUSED_SEEKING) {
																					var h = i - t.seekStartedAt;
																					t.seekStartedAt = null, t.stateMachineCallbacks[l](h, l, a)
																				} else if (e === u.Event.UNLOAD) t.stateMachineCallbacks.unload(s, l);
																				else if (n === o.PAUSE && r !== o.PAUSED_SEEKING) t.stateMachineCallbacks.setVideoTimeStartFromEvent(e), t.stateMachineCallbacks.pause(s, l);
																				else {
																					var p = t.stateMachineCallbacks[l];
																					"function" == typeof p ? p(s, l, a) : c.logger.error("Could not find callback function for " + l)
																				}
																				a && r !== o.PAUSED_SEEKING && t.stateMachineCallbacks.setVideoTimeStartFromEvent(a), e === u.Event.VIDEO_CHANGE ? t.stateMachineCallbacks.videoChange(a) : e === u.Event.AUDIO_CHANGE ? t.stateMachineCallbacks.audioChange(a) : e === u.Event.MUTE ? t.stateMachineCallbacks.mute() : e === u.Event.UN_MUTE && t.stateMachineCallbacks.unMute()
																			}
																		},
																		onseek: function(e, n, r, i) {
																			t.seekStartedAt = t.seekStartedAt || i
																		},
																		ontimechanged: function(e, n, r, i, a) {
																			var o = i - t.onEnterStateTimestamp;
																			o > 59700 && (t.stateMachineCallbacks.setVideoTimeEndFromEvent(a), t.stateMachineCallbacks.heartbeat(o, String(n).toLowerCase(), {
																				played: o
																			}), t.onEnterStateTimestamp = i, t.stateMachineCallbacks.setVideoTimeStartFromEvent(a))
																		},
																		onplayerError: function(e, n, r, i, a) {
																			t.stateMachineCallbacks.error(a)
																		}
																	}
																})
															}, t.prototype.callEvent = function(e, t, n) {
																var r = this.stateMachine[e];
																r ? r.call(this.stateMachine, n, t) : c.logger.log("Ignored Event: " + e)
															}, t
														}(f.AnalyticsStateMachine);
														t.HTML5AnalyticsStateMachine = d
													}, function(e, t, n) {
														"use strict";
														var r;
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.getStreamTypeFromMIMEType = void 0;
														var i = n(9),
															a = i.MIMETypes.MP4,
															o = i.MIMETypes.WEBM,
															s = i.MIMETypes.HLS,
															u = i.MIMETypes.DASH,
															c = ((r = {})[a] = "progressive", r[o] = "progressive", r[s] = "hls", r[u] = "dash", r);
														t.getStreamTypeFromMIMEType = function(e) {
															return c[e]
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.adapters = t.HTMLVideoElementAdapter = t.DashjsAdapter = t.ShakaAdapter = t.CAFv3Adapter = t.VideojsAdapter = t.Bitmovin7Adapter = t.Bitmovin8Adapter = t.HlsAdapter = t.version = t.PlayerModule = t.CdnProviders = t.Players = void 0;
														var r = n(29);
														Object.defineProperty(t, "Bitmovin7Adapter", {
															enumerable: !0,
															get: function() {
																return r.Bitmovin7Adapter
															}
														});
														var i = n(55);
														Object.defineProperty(t, "Bitmovin8Adapter", {
															enumerable: !0,
															get: function() {
																return i.Bitmovin8Adapter
															}
														});
														var a = n(69);
														Object.defineProperty(t, "CAFv3Adapter", {
															enumerable: !0,
															get: function() {
																return a.CAFv3Adapter
															}
														});
														var o = n(71);
														Object.defineProperty(t, "DashjsAdapter", {
															enumerable: !0,
															get: function() {
																return o.DashjsAdapter
															}
														});
														var s = n(73);
														Object.defineProperty(t, "HlsAdapter", {
															enumerable: !0,
															get: function() {
																return s.HlsAdapter
															}
														});
														var u = n(76);
														Object.defineProperty(t, "HTMLVideoElementAdapter", {
															enumerable: !0,
															get: function() {
																return u.HTMLVideoElementAdapter
															}
														});
														var c = n(78);
														Object.defineProperty(t, "ShakaAdapter", {
															enumerable: !0,
															get: function() {
																return c.ShakaAdapter
															}
														});
														var l = n(80);
														Object.defineProperty(t, "VideojsAdapter", {
															enumerable: !0,
															get: function() {
																return l.VideojsAdapter
															}
														});
														var f = n(85);
														Object.defineProperty(t, "CdnProviders", {
															enumerable: !0,
															get: function() {
																return f.CdnProvider
															}
														});
														var d = n(3);
														Object.defineProperty(t, "Players", {
															enumerable: !0,
															get: function() {
																return d.Player
															}
														});
														var h = n(16);
														Object.defineProperty(t, "version", {
															enumerable: !0,
															get: function() {
																return h.VERSION
															}
														});
														var p = {
															name: "analytics",
															module: {
																Analytics: i.Bitmovin8Adapter
															},
															hooks: {
																setup: function(e, t) {
																	var n = t.getConfig();
																	if (!n || !1 === n.analytics) return Promise.resolve();
																	var r = new(0, e.Analytics)(t);
																	return Promise.resolve(r)
																}
															}
														};
														t.PlayerModule = p;
														var _ = {
															HlsAdapter: s.HlsAdapter,
															Bitmovin8Adapter: i.Bitmovin8Adapter,
															Bitmovin7Adapter: r.Bitmovin7Adapter,
															VideojsAdapter: l.VideojsAdapter,
															ShakaAdapter: c.ShakaAdapter,
															DashjsAdapter: o.DashjsAdapter,
															CAFv3Adapter: a.CAFv3Adapter,
															HTMLVideoElementAdapter: u.HTMLVideoElementAdapter
														};
														t.adapters = _, t.default = {
															PlayerModule: p
														}
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
															return (r = Object.setPrototypeOf || {
																	__proto__: []
																}
																instanceof Array && function(e, t) {
																	e.__proto__ = t
																} || function(e, t) {
																	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																})(e, t)
														}, function(e, t) {
															function n() {
																this.constructor = e
															}
															r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
														});
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin7Adapter = void 0;
														var a = n(4),
															o = n(0),
															s = n(5),
															u = n(49),
															c = function(e) {
																function t(t, n) {
																	var r = e.call(this) || this;
																	return r.augment(t, n), r
																}
																return i(t, e), t.prototype.augment = function(e, t) {
																	if (this.hasPlayerAlreadyBeenAugmented(e)) o.logger.errorMessageToUser("Bitmovin Analytics is already hooked up to this player instance");
																	else {
																		this.markPlayerInstanceAsAugmented(e);
																		var n = this,
																			r = e.setup;
																		e.setup = function() {
																			var i = r.apply(e, arguments);
																			if (0 === arguments.length) return i;
																			var s = arguments[0].analytics;
																			return s ? (n.internalAdapter = new u.Bitmovin7InternalAdapter(e, t), n.analytics = new a.Analytics(s, n.internalAdapter), e.analytics = n.analytics, n.wrapPlayerLoad(e, n.analytics), i) : (o.logger.error("Bitmovin Analytics: No analytics config provided!"), i)
																		}
																	}
																}, t.prototype.wrapPlayerLoad = function(e, t) {
																	var n = e.load;
																	e.load = function() {
																		if (arguments.length > 0) {
																			var r = arguments[0].analytics;
																			t.sourceChange(r)
																		}
																		return n.apply(e, arguments)
																	}
																}, t
															}(s.Adapter);
														t.Bitmovin7Adapter = c
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.FeatureManager = void 0;
														var r = n(0),
															i = function() {
																function e() {
																	this.features = []
																}
																return e.prototype.registerFeatures = function(e) {
																	this.features = e
																}, e.prototype.unregisterFeatures = function() {
																	this.features.forEach((function(e) {
																		return e.disable()
																	})), this.features = []
																}, e.prototype.resetFeatures = function() {
																	this.features.forEach((function(e) {
																		return e.reset()
																	}))
																}, e.prototype.configureFeatures = function(e, t) {
																	this.features = this.features.filter((function(n) {
																		var i = n.configure(e, t);
																		return !(!e || !0 !== (null == i ? void 0 : i.enabled)) || (r.logger.log("Disabling feature " + n.constructor.name + " as it isn't enabled according to license callback."), n.disable(), !1)
																	})), this.features.forEach((function(e) {
																		return e.enabled()
																	}))
																}, e
															}();
														t.FeatureManager = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.CodecHelper = void 0;
														var r = {
																avc: ['video/mp4; codecs="avc1.42000a"'],
																vp9: ['video/mp4; codecs="vp09.00.50.08"'],
																av1: ['video/mp4; codecs="av01.0.08M.08"'],
																hevc: ['video/mp4; codecs="hev1.1.6.L93.B0"']
															},
															i = function() {
																function e() {}
																return Object.defineProperty(e, "supportedVideoFormats", {
																	get: function() {
																		var e = this;
																		if ("MediaSource" in window) return Object.getOwnPropertyNames(r).filter((function(t) {
																			return r[t].some((function(t) {
																				return e.isCodecSupported(t)
																			}))
																		}))
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.isCodecSupported = function(e) {
																	return "MediaSource" in window && MediaSource.isTypeSupported(e)
																}, e
															}();
														t.CodecHelper = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.PAGE_LOAD_TYPE = void 0,
															function(e) {
																e[e.FOREGROUND = 1] = "FOREGROUND", e[e.BACKGROUND = 2] = "BACKGROUND"
															}(t.PAGE_LOAD_TYPE || (t.PAGE_LOAD_TYPE = {}))
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
															return (r = Object.assign || function(e) {
																for (var t, n = 1, r = arguments.length; n < r; n++)
																	for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																return e
															}).apply(this, arguments)
														};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AdAnalytics = void 0;
														var i, a = n(34),
															o = n(35),
															s = n(36),
															u = n(0),
															c = n(1),
															l = n(37);
														! function(e) {
															e.FIRST_QUARTILE = "firstQuartile", e.MIDPOINT = "midpoint", e.THIRD_QUARTILE = "thirdQuartile"
														}(i || (i = {}));
														var f = function() {
															function e(e, t) {
																var n = this;
																this.onBeforeUnLoadEvent = !1, this.adManifestLoadedEvents = [], this.isPlaying = !1, this.adPodPosition = 0, this.analytics = e, this.adapter = t, this.adapter.adCallbacks.onAdStarted = function(e) {
																	return n.onAdStarted(e)
																}, this.adapter.adCallbacks.onAdFinished = function(e) {
																	return n.onAdFinished(e)
																}, this.adapter.adCallbacks.onAdBreakStarted = function(e) {
																	return n.onAdBreakStarted(e)
																}, this.adapter.adCallbacks.onAdBreakFinished = function(e) {
																	return n.onAdBreakFinished(e)
																}, this.adapter.adCallbacks.onAdClicked = function(e) {
																	return n.onAdClicked(e)
																}, this.adapter.adCallbacks.onAdError = function(e) {
																	return n.onAdError(e)
																}, this.adapter.adCallbacks.onAdManifestLoaded = function(e) {
																	return n.onAdManifestLoaded(e)
																}, this.adapter.adCallbacks.onPlay = function() {
																	return n.onPlay()
																}, this.adapter.adCallbacks.onPause = function() {
																	return n.onPause()
																}, this.adapter.adCallbacks.onBeforeUnload = function() {
																	return n.onBeforeUnload()
																}, this.adapter.adCallbacks.onAdSkipped = function(e) {
																	return n.onAdSkipped(e)
																}, this.adapter.adCallbacks.onAdQuartile = function(e) {
																	return n.onAdQuartile(e)
																}, this.viewportTracker = new l.ViewportTracker(this.adapter.getContainer(), (function() {
																	return n.onIntersectionChanged()
																}), .5)
															}
															return e.prototype.release = function() {
																this.clearCurrentTimeInterval(), this.viewportTracker.dispose()
															}, e.prototype.onIntersectionChanged = function() {
																this.activeAdSample && (this.isContainerInViewport() ? this.enterViewportTimestamp = c.getCurrentTimestamp() : this.enterViewportTimestamp && (this.activeAdSample.timeInViewport = (this.activeAdSample.timeInViewport || 0) + c.getCurrentTimestamp() - this.enterViewportTimestamp))
															}, e.prototype.isContainerInViewport = function() {
																return !this.viewportTracker || this.viewportTracker.isInViewport()
															}, e.prototype.onPlay = function() {
																if (this.adapter && this.adapter.isLinearAdActive() && this.activeAdSample) {
																	var e = c.getCurrentTimestamp();
																	this.beginPlayingTimestamp = e, this.enterViewportTimestamp = e, this.isPlaying = !0
																}
															}, e.prototype.onPause = function() {
																this.adapter && this.adapter.isLinearAdActive() && this.activeAdSample && (this.updatePlayingTime(this.activeAdSample), this.isPlaying = !1)
															}, e.prototype.onAdManifestLoaded = function(e) {
																var t = e.adConfig;
																t && t.tag && "vmap" === t.tag.type ? this.sendAnalyticsRequest(new o.AdBreakSample(e.adConfig, e)) : e.adBreak && this.adManifestLoadedEvents.push(e)
															}, e.prototype.onAdBreakStarted = function(e) {
																this.adPodPosition = 0, this.activeAdBreakSample = new o.AdBreakSample(e.adBreak, this.getAdManifestLoadedEvent(e.adBreak)), this.adStartupTimestamp = c.getCurrentTimestamp()
															}, e.prototype.onAdBreakFinished = function(e) {
																this.resetActiveAd(), this.activeAdBreakSample = void 0
															}, e.prototype.onAdStarted = function(e) {
																e.ad.isLinear && (this.resetActiveAd(), this.activeAdSample = new s.AdSample(e.ad), this.currentTime = void 0, this.activeAdSample.adStartupTime = this.adStartupTimestamp ? c.getCurrentTimestamp() - this.adStartupTimestamp : void 0, this.startAd(this.activeAdSample))
															}, e.prototype.onAdFinished = function(e) {
																if (this.activeAdBreakSample && this.activeAdSample) {
																	var t = r({}, this.activeAdSample);
																	t.completed = 1, this.resetActiveAd(), this.completeAd(this.activeAdBreakSample, t, t.adDuration)
																}
															}, e.prototype.onAdSkipped = function(e) {
																if (this.activeAdBreakSample && this.activeAdSample) {
																	var t = r({}, this.activeAdSample);
																	t.skipped = 1, t.skipPosition = this.currentTime, t.skipPercentage = c.calculatePercentage(this.activeAdSample.skipPosition, this.activeAdSample.adDuration), this.resetActiveAd(), this.completeAd(this.activeAdBreakSample, t, t.skipPosition)
																}
															}, e.prototype.onAdError = function(e) {
																var t, n, r = this,
																	i = e.data || {
																		adBreak: void 0,
																		adConfig: void 0,
																		code: void 0,
																		message: void 0
																	},
																	a = i.adConfig,
																	s = i.adBreak,
																	u = i.code,
																	l = i.message,
																	f = new o.AdBreakSample(s || a, s ? this.getAdManifestLoadedEvent(s) : void 0);
																f.errorCode = u || e.code, f.errorData = JSON.stringify(e.data), f.errorMessage = l || e.name, this.activeAdSample && s && s.ads && s.ads.includes((function(e) {
																	return e.id === r.activeAdSample.adId
																})) && (n = (t = this.activeAdSample).errorPosition = this.currentTime, t.errorPercentage = c.calculatePercentage(t.errorPosition, t.adDuration)), this.completeAd(f, t, n)
															}, e.prototype.onAdLinearityChanged = function(e) {}, e.prototype.onAdClicked = function(e) {
																this.activeAdSample && (this.activeAdSample.adClickthroughUrl = e.clickThroughUrl, this.activeAdSample.clicked = 1, this.activeAdSample.clickPosition = this.currentTime, this.activeAdSample.clickPercentage = c.calculatePercentage(this.activeAdSample.clickPosition, this.activeAdSample.adDuration))
															}, e.prototype.onAdQuartile = function(e) {
																this.activeAdSample && (e.quartile === i.FIRST_QUARTILE ? this.activeAdSample.quartile1 = 1 : e.quartile === i.MIDPOINT ? this.activeAdSample.midpoint = 1 : e.quartile === i.THIRD_QUARTILE && (this.activeAdSample.quartile3 = 1))
															}, e.prototype.onBeforeUnload = function() {
																if (!this.onBeforeUnLoadEvent && (this.onBeforeUnLoadEvent = !0, this.activeAdSample && this.activeAdBreakSample)) {
																	var e = r({}, this.activeAdSample);
																	e.closed = 1, e.closePosition = this.currentTime, e.closePercentage = c.calculatePercentage(e.closePosition, e.adDuration), this.resetActiveAd(), this.completeAd(this.activeAdBreakSample, e, e.closePosition)
																}
															}, e.prototype.createNewAdAnalyticsSample = function(e) {
																var t = this.adapter.getAdModuleInfo();
																return r(r({}, new a.AdAnalyticsSample(e)), {
																	analyticsVersion: "v2.27.2",
																	adModule: t.name,
																	adModuleVersion: t.version,
																	playerStartupTime: this.analytics.playerStartupTime,
																	pageLoadTime: this.analytics.pageLoadTime,
																	autoplay: this.analytics.autoplay,
																	pageLoadType: c.getPageLoadType()
																})
															}, e.prototype.getAdManifestLoadedEvent = function(e) {
																if (e) return this.adManifestLoadedEvents.find((function(t) {
																	return t.adBreak && t.adBreak.id === e.id
																}))
															}, e.prototype.sendAnalyticsRequest = function(e, t) {
																var n = r(r(r({}, this.createNewAdAnalyticsSample(this.analytics.sample)), e), t || new s.AdSample);
																n.time = c.getCurrentTimestamp(), n.adImpressionId = c.generateUUID(), n.percentageInViewport = c.calculatePercentage(n.timeInViewport, n.timePlayed), this.analytics.backend.sendAdRequest(n)
															}, e.prototype.updatePlayingTime = function(e) {
																var t = c.getCurrentTimestamp();
																this.beginPlayingTimestamp && this.isPlaying && (void 0 !== e.timePlayed && (e.timePlayed += t - this.beginPlayingTimestamp), this.isContainerInViewport() && this.enterViewportTimestamp && void 0 !== e.timeInViewport && (e.timeInViewport += t - this.enterViewportTimestamp))
															}, e.prototype.startAd = function(t) {
																var n = this;
																t.started = 1, t.timePlayed = 0, t.timeInViewport = 0, t.adPodPosition = this.adPodPosition;
																var r = c.getCurrentTimestamp();
																this.beginPlayingTimestamp = r, this.enterViewportTimestamp = this.isContainerInViewport() ? r : void 0, this.isPlaying = !0, this.currentTime = 0, this.adPodPosition++, this.currentTimeInterval = window.setInterval((function() {
																	try {
																		t && void 0 !== t.adDuration && t.adDuration > 0 && n.adapter.isLinearAdActive() && (n.currentTime = c.calculateTime(Math.max(n.adapter.currentTime(), 0)))
																	} catch (e) {
																		u.logger.log("AdStarted monitoring interval failed and got cleared", e), n.resetActiveAd()
																	}
																}), e.TIMEOUT_CURRENT_TIME_INTERVAL)
															}, e.prototype.completeAd = function(e, t, n) {
																void 0 === t && (t = new s.AdSample), t.exitPosition = n, t.playPercentage = c.calculatePercentage(t.exitPosition, t.adDuration), this.adStartupTimestamp = c.getCurrentTimestamp(), this.updatePlayingTime(t), this.isPlaying = !1, this.sendAnalyticsRequest(e, t)
															}, e.prototype.resetActiveAd = function() {
																this.clearCurrentTimeInterval(), this.activeAdSample = void 0
															}, e.prototype.clearCurrentTimeInterval = function() {
																window.clearInterval(this.currentTimeInterval), delete this.currentTime
															}, e.MODULE_NAME = "ads", e.TIMEOUT_CURRENT_TIME_INTERVAL = 100, e
														}();
														t.AdAnalytics = f
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AdAnalyticsSample = void 0;
														var r = n(1);
														t.AdAnalyticsSample = function(e) {
															this.platform = "web", e && (this.videoImpressionId = e.impressionId, this.userAgent = e.userAgent, this.language = e.language, this.cdnProvider = e.cdnProvider, r.transferCustomDataFields(e, this), this.customUserId = e.customUserId, this.domain = e.domain, this.experimentName = e.experimentName, this.key = e.key, this.path = e.path, this.player = e.player, this.playerKey = e.playerKey, this.playerTech = e.playerTech, this.screenHeight = e.screenHeight, this.screenWidth = e.screenWidth, this.version = e.version, this.size = e.size, this.userId = e.userId, this.videoId = e.videoId, this.videoTitle = e.videoTitle, this.videoWindowHeight = e.videoWindowHeight, this.videoWindowWidth = e.videoWindowWidth, this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec)
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AdBreakSample = void 0;
														var r = n(1);
														t.AdBreakSample = function(e, t) {
															this.adFallbackIndex = 0, t && (this.manifestDownloadTime = r.calculateTime(t.downloadTiming.downloadTime)), e && (this.adReplaceContentDuration = r.calculateTimeWithUndefined(e.replaceContentDuration), this.adFallbackIndex = (e.currentFallbackIndex || -1) + 1);
															var n = e;
															n && ("pre" === n.position || "post" === n.position ? this.adPosition = n.position : (this.adPosition = "mid", this.adOffset = n.position), this.adPreloadOffset = r.calculateTimeWithUndefined(n.preloadOffset));
															var i = e;
															if (i) {
																this.adIsPersistent = i.persistent;
																var a = i.tag;
																if (this.adFallbackIndex > 0 && i.fallbackTags && i.fallbackTags.length >= this.adFallbackIndex && (a = i.fallbackTags[this.adFallbackIndex - 1]), a && (this.adTagType = a.type, this.adTagUrl = a.url), this.adTagUrl) {
																	var o = r.getHostnameAndPathFromUrl(this.adTagUrl);
																	this.adTagServer = o.hostname, this.adTagPath = o.path
																}
															}
															var s = e;
															s && (this.adScheduleTime = r.calculateTimeWithUndefined(s.scheduleTime), this.adIdPlayer = s.id)
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AdSample = void 0;
														var r = n(1),
															i = function() {
																function e(t) {
																	if (this.clicked = 0, this.closed = 0, this.completed = 0, this.midpoint = 0, this.quartile1 = 0, this.quartile3 = 0, this.skipped = 0, this.started = 0, t) {
																		this.adClickthroughUrl = t.clickThroughUrl, this.adId = t.id, this.mediaUrl = t.mediaFileUrl;
																		var n = r.getHostnameAndPathFromUrl(this.mediaUrl || "");
																		this.mediaPath = n.path, this.mediaServer = n.hostname, this.isLinear = t.isLinear, this.adPlaybackHeight = t.height, this.adPlaybackWidth = t.width, t.data && (this.videoBitrate = void 0 === t.data.bitrate ? void 0 : 1e3 * t.data.bitrate, this.streamFormat = t.data.mimeType);
																		var i = t.data;
																		i && (i.adSystem && (this.adSystem = i.adSystem.name), i.advertiser && (this.advertiserName = i.advertiser.name), this.apiFramework = i.apiFramework, i.creative && (this.creativeAdId = i.creative.adId, this.creativeId = i.creative.id, i.creative.universalAdId && (this.universalAdIdRegistry = i.creative.universalAdId.idRegistry, this.universalAdIdValue = i.creative.universalAdId.value)), this.adDescription = i.adDescription, this.minSuggestedDuration = r.calculateTimeWithUndefined(i.minSuggestedDuration), i.survey && (this.surveyUrl = i.survey.uri), this.adTitle = i.adTitle, this.wrapperAdsCount = i.wrapperAdIds ? i.wrapperAdIds.length : 0)
																	}
																	var a = t;
																	a && (this.adSkippableAfter = e.parseSkipAfter(a.skippableAfter), this.adSkippable = a.skippable || (void 0 === this.adSkippableAfter ? void 0 : this.adSkippableAfter >= 0), this.adDuration = r.calculateTime(a.duration))
																}
																return e.parseSkipAfter = function(e) {
																	if (void 0 !== e) return -1 === e ? e : r.calculateTime(e)
																}, e
															}();
														t.AdSample = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.ViewportTracker = void 0;
														var r = n(0),
															i = n(1),
															a = function() {
																function e(e, t, n) {
																	var a = this;
																	void 0 === n && (n = 1), this.inViewport = void 0, this.threshold = n, this.onIntersectionChanged = t, this.element = e;
																	try {
																		var o = {
																			root: null,
																			rootMargin: "0px",
																			threshold: n
																		};
																		this.observer = new IntersectionObserver((function(e, t) {
																			return a.handleIntersect(e, t)
																		}), o), this.observer.observe(e)
																	} catch (e) {
																		r.logger.log("Couldn't create instance of IntersectionObserver. timeInViewport will always be reported as 100%.")
																	}
																	this.hidden = i.getHiddenProp(), this.hidden && (this.visibilityChange = this.hidden.replace("hidden", "") + "visibilitychange", document.addEventListener(this.visibilityChange, this.handleVisibilityChange = this.handleVisibilityChange.bind(this), !1))
																}
																return e.prototype.isHidden = function() {
																	return this.hidden && document[this.hidden]
																}, e.prototype.isInViewport = function() {
																	return !this.isHidden() && (null == this.inViewport || this.inViewport)
																}, e.prototype.dispose = function() {
																	this.observer && (this.observer.unobserve(this.element), this.observer.disconnect()), this.visibilityChange && document.removeEventListener(this.visibilityChange, this.handleVisibilityChange, !1)
																}, e.prototype.handleVisibilityChange = function() {
																	this.onIntersectionChanged()
																}, e.prototype.handleIntersect = function(e, t) {
																	var n = this;
																	e.forEach((function(e) {
																		e.target === n.element && (n.inViewport = !(e.intersectionRatio < n.threshold))
																	})), this.onIntersectionChanged()
																}, e
															}();
														t.ViewportTracker = a
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.BackendFactory = void 0;
														var r = n(39),
															i = n(6),
															a = n(40),
															o = n(41),
															s = n(46),
															u = n(18),
															c = n(47),
															l = function() {
																function e() {}
																return e.prototype.createBackend = function(e, t, n, r) {
																	if (!this.isEnabled(e)) return new u.NoOpBackend;
																	var i = this.createInnerBackend(e, t, n, r);
																	return this.decorateWithDebuggingBackend(e, i)
																}, e.prototype.decorateWithDebuggingBackend = function(e, t) {
																	return e.debug ? new a.DebuggingBackend(e, t) : t
																}, e.prototype.decorateWithBackendFromConfigIfAvailable = function(e, t) {
																	return void 0 !== e && void 0 !== e.config && void 0 !== e.config.wrapBackend ? e.config.wrapBackend(t) : t
																}, e.prototype.isEnabled = function(e) {
																	return void 0 === e.config || !1 !== e.config.enabled
																}, e.prototype.createInnerBackend = function(e, t, n, a) {
																	var u = e.config && e.config.backendUrl || i.ANALYTICS_BACKEND_BASE_URL,
																		l = new o.LicenseCheckingBackend(t, r.LicenseCall, u, n, a);
																	l = this.decorateWithBackendFromConfigIfAvailable(e, l);
																	var f = new c.SequenceNumberBackend(l);
																	return new s.LongPlaytimeFilteringBackend(f)
																}, e
															}();
														t.BackendFactory = l
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.LicenseCall = void 0;
														var r = n(17),
															i = n(1);
														t.LicenseCall = function(e, t, n, a) {
															var o = i.joinUrls(a, "/licensing"),
																s = {
																	analyticsVersion: n,
																	domain: t,
																	key: e
																};
															return new Promise((function(e) {
																r.post(o, s, (function(t) {
																	e(t)
																}))
															}))
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.DebuggingBackend = void 0;
														var r = n(0),
															i = function() {
																function e(e, t) {
																	this.underlying = t, e.debug && e.debug.fields && (this.debugFields = e.debug.fields)
																}
																return e.prototype.sendRequest = function(e) {
																	this.printFields(e), this.underlying.sendRequest(e)
																}, e.prototype.sendUnloadRequest = function(e) {
																	this.printFields(e), this.underlying.sendUnloadRequest(e)
																}, e.prototype.sendRequestSynchronous = function(e) {
																	this.printFields(e), this.underlying.sendRequestSynchronous(e)
																}, e.prototype.sendAdRequest = function(e) {
																	this.underlying.sendAdRequest(e)
																}, e.prototype.printFields = function(e) {
																	if (this.debugFields && this.debugFields.length) {
																		var t = {};
																		this.debugFields.forEach((function(n) {
																			return t[n] = e[n]
																		})), r.logger.logTable([t])
																	}
																}, e
															}();
														t.DebuggingBackend = i
													}, function(e, t, n) {
														"use strict";
														var r = this && this.__assign || function() {
															return (r = Object.assign || function(e) {
																for (var t, n = 1, r = arguments.length; n < r; n++)
																	for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																return e
															}).apply(this, arguments)
														};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.LicenseCheckingBackend = void 0;
														var i = n(42),
															a = n(0),
															o = n(6),
															s = n(18),
															u = n(43),
															c = n(44),
															l = function() {
																function e(e, t, n, i, a) {
																	var c = this;
																	this.licenseCall = t, this.backendBaseUrl = n, this.adapter = i, this.authenticationCallback = a, this.licenseKeyReceived = function(e) {
																		clearTimeout(c.licenseLazyLoadingTimeoutHandle), c.unsubscribeFromAdapter(), c.info.key = e.licenseKey, c.promise = c.wrapLicenseCheckPromiseWithCallback(c.performLicenseCheck(), c.authenticationCallback)
																	}, this.licenseCallFailed = function() {
																		clearTimeout(c.licenseLazyLoadingTimeoutHandle), c.unsubscribeFromAdapter(), c.backend = new s.NoOpBackend, c.authenticationCallback.authenticationCompleted(!1, void 0)
																	}, this.licenseLazyLoadingTimeout = function() {
																		c.unsubscribeFromAdapter(), c.backend = new s.NoOpBackend, c.authenticationCallback.authenticationCompleted(!1, void 0)
																	}, this.info = r({}, e), this.backend = new u.QueueBackend, this.licenseCall = t, void 0 !== e.key && "" !== e.key ? this.promise = this.wrapLicenseCheckPromiseWithCallback(this.performLicenseCheck(), this.authenticationCallback) : !0 === i.supportsDeferredLicenseLoading ? (i.onLicenseKeyReceived.subscribe(this.licenseKeyReceived), i.onLicenseCallFailed.subscribe(this.licenseCallFailed), this.licenseLazyLoadingTimeoutHandle = window.setTimeout(this.licenseLazyLoadingTimeout, o.ANALYTICS_LICENSECALL_TIMEOUT)) : (a.authenticationCompleted(!1, void 0), this.backend = new s.NoOpBackend)
																}
																return e.prototype.performLicenseCheck = function() {
																	var e = this,
																		t = this.info,
																		n = t.key,
																		r = t.domain,
																		o = t.version;
																	if (!n || "" === n) {
																		var u = {
																			status: i.LicensingResult.Denied,
																			message: "No license key provided"
																		};
																		return this.backend = new s.NoOpBackend, Promise.resolve(u)
																	}
																	return this.licenseCall(n, r, o, this.backendBaseUrl).then((function(t) {
																		if (t.status !== i.LicensingResult.Granted) throw new Error(t.message);
																		var r = new c.RemoteBackend(!0, e.backendBaseUrl, n);
																		return e.backend.flushTo(r), e.backend = r, t
																	})).catch((function(t) {
																		return "Ignoring Impression due to DNT Header being set" === t.message ? a.logger.error("License Check for Bitmovin Analytics failed because of", t) : a.logger.errorMessageToUser("License Check for Bitmovin Analytics failed because of", t), e.backend = new s.NoOpBackend, {
																			status: i.LicensingResult.Denied,
																			message: t.message
																		}
																	}))
																}, e.prototype.sendRequest = function(e) {
																	this.backend.sendRequest(e)
																}, e.prototype.sendUnloadRequest = function(e) {
																	this.backend.sendUnloadRequest(e)
																}, e.prototype.sendRequestSynchronous = function(e) {
																	this.backend.sendRequestSynchronous(e)
																}, e.prototype.sendAdRequest = function(e) {
																	this.backend.sendAdRequest(e)
																}, e.prototype.unsubscribeFromAdapter = function() {
																	this.adapter.onLicenseKeyReceived.unsubscribe(this.licenseKeyReceived), this.adapter.onLicenseCallFailed.unsubscribe(this.licenseCallFailed)
																}, e.prototype.wrapLicenseCheckPromiseWithCallback = function(e, t) {
																	return e.then((function(e) {
																		return t.authenticationCompleted(e.status === i.LicensingResult.Granted, e.features), e
																	}))
																}, e
															}();
														t.LicenseCheckingBackend = l
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
																value: !0
															}), t.LicensingResult = void 0,
															function(e) {
																e.Granted = "granted", e.Denied = "denied", e.Skip = "skip"
															}(t.LicensingResult || (t.LicensingResult = {}))
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.QueueBackend = void 0;
														var r = function() {
															function e() {
																this.queue = [], this.unloadQueue = [], this.syncQueue = [], this.adQueue = []
															}
															return e.prototype.sendRequest = function(e) {
																this.queue.push(e)
															}, e.prototype.sendUnloadRequest = function(e) {
																this.unloadQueue.push(e)
															}, e.prototype.sendRequestSynchronous = function(e) {
																this.syncQueue.push(e)
															}, e.prototype.sendAdRequest = function(e) {
																this.adQueue.push(e)
															}, e.prototype.flushTo = function(e) {
																this.queue.forEach((function(t) {
																	e.sendRequest(t)
																})), this.unloadQueue.forEach((function(t) {
																	e.sendUnloadRequest(t)
																})), this.syncQueue.forEach((function(t) {
																	e.sendRequestSynchronous(t)
																})), this.adQueue.forEach((function(t) {
																	e.sendAdRequest(t)
																}))
															}, e
														}();
														t.QueueBackend = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.RemoteBackend = void 0;
														var r = n(45),
															i = n(1),
															a = function() {
																function e(e, t, n) {
																	this.licenseKey = n, this.hasAdModule = e, this.analyticsCall = new r.AnalyticsCall(t)
																}
																return e.prototype.sendRequest = function(e) {
																	e.key = this.licenseKey, this.analyticsCall.sendRequest(e, i.noOp)
																}, e.prototype.sendUnloadRequest = function(e) {
																	e.key = this.licenseKey, this.analyticsCall.sendUnloadRequest(e)
																}, e.prototype.sendRequestSynchronous = function(e) {
																	e.key = this.licenseKey, this.analyticsCall.sendRequestSynchronous(e, i.noOp)
																}, e.prototype.sendAdRequest = function(e) {
																	e.key = this.licenseKey, this.hasAdModule && this.analyticsCall.sendAdRequest(e)
																}, e
															}();
														t.RemoteBackend = a
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AnalyticsCall = void 0;
														var r = n(1),
															i = n(17),
															a = n(1),
															o = function() {
																function e(e) {
																	this.analyticsServerUrl = a.joinUrls(e, "analytics"), this.adAnalyticsServerUrl = a.joinUrls(e, "analytics/a")
																}
																return e.prototype.sendRequest = function(e, t) {
																	i.post(this.analyticsServerUrl, e, t)
																}, e.prototype.sendUnloadRequest = function(e) {
																	var t = this;
																	this.trySendBeacon((function(e) {
																		return t.sendRequestSynchronous(e, r.noOp)
																	}), this.getAnalyticsServerUrl(), e)
																}, e.prototype.trySendBeacon = function(e, t, n) {
																	void 0 === navigator.sendBeacon ? e(n) : navigator.sendBeacon(t, JSON.stringify(n)) || e(n)
																}, e.prototype.sendRequestSynchronous = function(e, t) {
																	i.post(this.analyticsServerUrl, e, t, !1)
																}, e.prototype.sendAdRequest = function(e) {
																	var t = this;
																	this.trySendBeacon((function(e) {
																		return i.post(t.getAdAnalyticsServerUrl(), e, r.noOp)
																	}), this.getAdAnalyticsServerUrl(), e)
																}, e.prototype.getAnalyticsServerUrl = function() {
																	return this.analyticsServerUrl
																}, e.prototype.getAdAnalyticsServerUrl = function() {
																	return this.adAnalyticsServerUrl
																}, e
															}();
														t.AnalyticsCall = o
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.LongPlaytimeFilteringBackend = void 0;
														var r = function() {
															function e(e) {
																this.backend = e
															}
															return e.prototype.sendRequest = function(e) {
																this.isPlayedAboveThreshold(e) || this.backend.sendRequest(e)
															}, e.prototype.sendUnloadRequest = function(e) {
																this.isPlayedAboveThreshold(e) || this.backend.sendUnloadRequest(e)
															}, e.prototype.sendRequestSynchronous = function(e) {
																this.isPlayedAboveThreshold(e) || this.backend.sendRequestSynchronous(e)
															}, e.prototype.sendAdRequest = function(e) {
																this.backend.sendAdRequest(e)
															}, e.prototype.isPlayedAboveThreshold = function(e) {
																return (null == e.played ? 0 : e.played) >= 9e4
															}, e
														}();
														t.LongPlaytimeFilteringBackend = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.SequenceNumberBackend = void 0;
														var r = function() {
															function e(e) {
																this.sequenceNumber = 0, this.underlying = e
															}
															return e.prototype.sendRequest = function(e) {
																this.updateSampleBeforeSending(e), this.underlying.sendRequest(e)
															}, e.prototype.sendUnloadRequest = function(e) {
																this.updateSampleBeforeSending(e), this.underlying.sendUnloadRequest(e)
															}, e.prototype.sendRequestSynchronous = function(e) {
																this.updateSampleBeforeSending(e), this.underlying.sendRequestSynchronous(e)
															}, e.prototype.sendAdRequest = function(e) {
																this.underlying.sendAdRequest(e)
															}, e.prototype.updateSampleBeforeSending = function(e) {
																e.sequenceNumber = this.sequenceNumber++
															}, e
														}();
														t.SequenceNumberBackend = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.SessionPersistenceHandler = t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME = void 0;
														var r = n(1);
														t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME = "bitmovin_analytics_uuid";
														var i = function() {
															function e(e) {
																var t = e.config;
																this.cookiesEnabled = null == t || !1 !== t.cookiesEnabled, null != t && null != t.cookiesDomain ? this.cookiesDomain = t.cookiesDomain : this.cookiesDomain = null, this.cookiesEnabled || this.ensureNoCookiePresent(), this.userId = this.setupUserId()
															}
															return e.prototype.setupUserId = function() {
																var e = r.getCookie(t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME);
																return r.isNullOrEmptyString(e) && (e = this.createAndSetNewUserId()), e
															}, e.prototype.createAndSetNewUserId = function() {
																var e = r.generateUUID();
																return this.writeCookie(e), e
															}, e.prototype.ensureNoCookiePresent = function() {
																var e = r.getCookie(t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME);
																if (!r.isNullOrEmptyString(e)) {
																	var n = t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
																	document.cookie = n
																}
															}, e.prototype.writeCookie = function(e) {
																if (this.cookiesEnabled) {
																	var n = t.BITMOVIN_ANALYTICS_UUID_COOKIE_NAME + "=" + e + '; path=/; expires="Mon, 31 Dec 2029 23:00:00 GMT"; max-age=315400000';
																	null != this.cookiesDomain && (n += "; domain=" + this.cookiesDomain), document.cookie = n
																}
															}, e
														}();
														t.SessionPersistenceHandler = i
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__assign || function() {
																return (a = Object.assign || function(e) {
																	for (var t, n = 1, r = arguments.length; n < r; n++)
																		for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																	return e
																}).apply(this, arguments)
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin7InternalAdapter = void 0;
														var o = n(50),
															s = n(23),
															u = n(2),
															c = n(3),
															l = n(10),
															f = n(7),
															d = n(8),
															h = n(24),
															p = function(e) {
																function t(t, n) {
																	var r = e.call(this, n) || this;
																	return r.player = t, r.onBeforeUnLoadEvent = !1, r.getPlayerVersion = function() {
																		return r.player.version
																	}, r.getPlayerName = function() {
																		return c.Player.BITMOVIN
																	}, r.getPlayerTech = function() {
																		return r.player.getPlayerType()
																	}, r.getDrmPerformanceInfo = function() {
																		return r.drmPerformanceInfo
																	}, r.stateMachine = new o.Bitmovin7AnalyticsStateMachine(r.stateMachineCallbacks, r.opts), r
																}
																return i(t, e), t.prototype.initialize = function(e) {
																	return this.register(), [new d.ErrorDetailTracking(e.errorDetailTrackingSettingsProvider, new f.ErrorDetailBackend(e.errorDetailTrackingSettingsProvider.collectorConfig), [e.errorDetailSubscribable], void 0)]
																}, t.prototype.getAutoPlay = function() {
																	return this.player.getConfig().playback && this.player.getConfig().playback.autoplay || !1
																}, t.prototype.getCurrentPlaybackInfo = function() {
																	var t = a(a({}, e.prototype.getCommonPlaybackInfo.call(this)), {
																		size: this.player.isFullscreen() ? l.PlayerSize.Fullscreen : l.PlayerSize.Window,
																		playerTech: this.getPlayerTech(),
																		isLive: this.player.isLive(),
																		videoDuration: this.player.getDuration(),
																		streamFormat: this.player.getStreamType(),
																		videoWindowWidth: this.player.getFigure().offsetWidth,
																		videoWindowHeight: this.player.getFigure().offsetHeight,
																		isMuted: this.player.isMuted(),
																		isCasting: this.player.isCasting(),
																		audioLanguage: null != this.player.getAudio() ? this.player.getAudio().lang : null,
																		subtitleEnabled: !1,
																		droppedFrames: this.player.isReady() ? this.player.getDroppedFrames() : 0
																	});
																	return this.applySubtitleProperties(t), this.applyPlaybackQualityProperties(t), this.applySourceProperties(t), this.applyCastingProperties(t), t
																}, t.prototype.register = function() {
																	var e = this;
																	this.player.addEventHandler(this.player.EVENT.ON_SOURCE_UNLOADED, (function(t) {
																		e.eventCallback(u.Event.SOURCE_UNLOADED, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_SOURCE_LOADED, (function(t) {
																		e.resetSourceRelatedState(), e.eventCallback(u.Event.SOURCE_LOADED, {})
																	})), this.player.addEventHandler(this.player.EVENT.ON_READY, (function() {
																		e.eventCallback(u.Event.READY, {})
																	})), this.player.addEventHandler(this.player.EVENT.ON_CAST_STARTED, (function(t) {
																		e.eventCallback(u.Event.START_CAST, t)
																	})), this.player.addEventHandler(this.player.EVENT.ON_CAST_STOPPED, (function() {
																		e.eventCallback(u.Event.END_CAST, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_PLAY, (function() {
																		e.eventCallback(u.Event.PLAY, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_PAUSED, (function() {
																		e.eventCallback(u.Event.PAUSE, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_TIME_CHANGED, (function() {
																		e.eventCallback(u.Event.TIMECHANGED, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_SEEK, (function() {
																		e.eventCallback(u.Event.SEEK, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_SEEKED, (function() {
																		e.eventCallback(u.Event.SEEKED, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_STALL_STARTED, (function() {
																		e.eventCallback(u.Event.START_BUFFERING, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_STALL_ENDED, (function() {
																		e.eventCallback(u.Event.END_BUFFERING, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_AUDIO_PLAYBACK_QUALITY_CHANGED, (function() {
																		var t = e.player.getPlaybackAudioData();
																		e.shouldAllowAudioQualityChange(t.bitrate) && (e.setPreviousAudioBitrate(t.bitrate), e.eventCallback(u.Event.AUDIO_CHANGE, {
																			bitrate: t.bitrate,
																			currentTime: e.player.getCurrentTime()
																		}))
																	})), this.player.addEventHandler(this.player.EVENT.ON_VIDEO_PLAYBACK_QUALITY_CHANGED, (function() {
																		var t = e.player.getPlaybackVideoData();
																		e.shouldAllowVideoQualityChange(t.bitrate) && (e.setPreviousVideoBitrate(t.bitrate), e.eventCallback(u.Event.VIDEO_CHANGE, {
																			width: t.width,
																			height: t.height,
																			bitrate: t.bitrate,
																			currentTime: e.player.getCurrentTime()
																		}))
																	})), this.player.addEventHandler(this.player.EVENT.ON_FULLSCREEN_ENTER, (function() {
																		e.eventCallback(u.Event.START_FULLSCREEN, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_FULLSCREEN_EXIT, (function() {
																		e.eventCallback(u.Event.END_FULLSCREEN, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_AD_STARTED, (function() {
																		e.eventCallback(u.Event.START_AD, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_AD_FINISHED, (function() {
																		e.eventCallback(u.Event.END_AD, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_MUTED, (function() {
																		e.eventCallback(u.Event.MUTE, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_UNMUTED, (function() {
																		e.eventCallback(u.Event.UN_MUTE, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_ERROR, (function(t) {
																		e.eventCallback(u.Event.ERROR, {
																			code: t.code,
																			message: t.message,
																			currentTime: e.player.getCurrentTime(),
																			data: {}
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_PLAYBACK_FINISHED, (function() {
																		e.eventCallback(u.Event.PLAYBACK_FINISHED, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_DOWNLOAD_FINISHED, (function(t) {
																		0 === t.downloadType.indexOf("drm/license/") && (e.drmPerformanceInfo = {
																			drmType: t.downloadType.replace("drm/license/", ""),
																			drmLoadTime: 1e3 * t.downloadTime
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_AUDIO_CHANGED, (function(t) {
																		e.eventCallback(u.Event.AUDIOTRACK_CHANGED, {
																			currentTime: e.player.getCurrentTime()
																		})
																	})), this.player.addEventHandler(this.player.EVENT.ON_SUBTITLE_CHANGED, (function(t) {
																		e.eventCallback(u.Event.SUBTITLE_CHANGE, {
																			currentTime: e.player.getCurrentTime()
																		})
																	}));
																	var t = function() {
																		if (!e.onBeforeUnLoadEvent) {
																			e.onBeforeUnLoadEvent = !0;
																			var t = void 0;
																			null != e.player && (t = e.player.getCurrentTime()), e.eventCallback(u.Event.UNLOAD, {
																				currentTime: t
																			})
																		}
																		e.release()
																	};
																	t = t.bind(!0), this.player.on(this.player.EVENT.ON_DESTROY, t), this.windowEventTracker.addEventListener("beforeunload", t), this.windowEventTracker.addEventListener("unload", t)
																}, t.prototype.sourceChange = function(e, t) {
																	this.stateMachine.sourceChange(e, t, this.player.getCurrentTime())
																}, Object.defineProperty(t.prototype, "currentTime", {
																	get: function() {
																		return this.player.getCurrentTime()
																	},
																	enumerable: !1,
																	configurable: !0
																}), t.prototype.applySourceProperties = function(e) {
																	var t = this.player.getConfig().source;
																	if (null != t) {
																		e.videoTitle = t.title, e.mpdUrl = t.dash, e.m3u8Url = t.hls;
																		var n = h.getSourceInfoFromBitmovinSourceConfig(t.progressive, this.player);
																		e.progUrl = n.progUrl, "progressive" === this.player.getStreamType() && (e.videoBitrate = n.progBitrate)
																	}
																}, t.prototype.applySubtitleProperties = function(e) {
																	var t = this.player.getSubtitle() || {};
																	e.subtitleEnabled = null != t.id, e.subtitleLanguage = t.lang
																}, t.prototype.applyPlaybackQualityProperties = function(e) {
																	var t = this.player.getPlaybackVideoData();
																	null !== t && (e.videoBitrate = t.bitrate, e.videoPlaybackHeight = t.height, e.videoPlaybackWidth = t.width);
																	var n = this.player.getPlaybackAudioData();
																	null !== n && (e.audioBitrate = n.bitrate)
																}, t.prototype.applyCastingProperties = function(e) {
																	var t = this.player.isCasting() || this.player.isAirplayActive() || !1;
																	if (e.isCasting = t, t)
																		if (this.player.isAirplayActive()) e.castTech = s.CastTech.AirPlay;
																		else {
																			var n = this.player.getConfig().remotecontrol;
																			if (null != n) switch (n.type) {
																				case "googlecast":
																					e.castTech = s.CastTech.GoogleCast;
																					break;
																				case "websocket":
																					e.castTech = s.CastTech.WebSocket
																			}
																		}
																}, t
															}(n(11).InternalAdapter);
														t.Bitmovin7InternalAdapter = p
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__spreadArrays || function() {
																for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
																var r = Array(e),
																	i = 0;
																for (t = 0; t < n; t++)
																	for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
																return r
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin7AnalyticsStateMachine = void 0;
														var o, s = n(13),
															u = n(2),
															c = n(22),
															l = n(0),
															f = n(14);
														! function(e) {
															e.SETUP = "SETUP", e.STARTUP = "STARTUP", e.READY = "READY", e.PLAYING = "PLAYING", e.REBUFFERING = "REBUFFERING", e.PAUSE = "PAUSE", e.QUALITYCHANGE = "QUALITYCHANGE", e.PAUSED_SEEKING = "PAUSED_SEEKING", e.PLAY_SEEKING = "PLAY_SEEKING", e.END_PLAY_SEEKING = "END_PLAY_SEEKING", e.QUALITYCHANGE_PAUSE = "QUALITYCHANGE_PAUSE", e.QUALITYCHANGE_REBUFFERING = "QUALITYCHANGE_REBUFFERING", e.END = "END", e.ERROR = "ERROR", e.AD = "AD", e.MUTING_READY = "MUTING_READY", e.MUTING_PLAY = "MUTING_PLAY", e.MUTING_PAUSE = "MUTING_PAUSE", e.CASTING = "CASTING", e.SOURCE_CHANGING = "SOURCE_CHANGING", e.SUBTITLE_CHANGING = "SUBTITLE_CHANGING", e.AUDIOTRACK_CHANGING = "AUDIOTRACK_CHANGING", e.CUSTOMDATACHANGE = "CUSTOMDATACHANGE"
														}(o || (o = {}));
														var d = function(e) {
															function t(t, n) {
																var r = e.call(this, t, n) || this;
																return r.debuggingStates = [], r.enabledDebugging = !1, r.sourceChange = function(e, t, n) {
																	r.callEvent(u.Event.MANUAL_SOURCE_CHANGE, {
																		config: e,
																		currentTime: n
																	}, t)
																}, r.pausedTimestamp = null, r.seekTimestamp = 0, r.seekedTimestamp = 0, r.seekedTimeout = 0, r.seekStarted = !1, r.seekEnded = !1, r
															}
															return i(t, e), t.prototype.getAllStates = function() {
																return a(Object.keys(o).map((function(e) {
																	return o[e]
																})), ["FINISH_PLAY_SEEKING", "PLAY_SEEK", "FINISH_QUALITYCHANGE_PAUSE", "FINISH_QUALITYCHANGE", "FINISH_QUALITYCHANGE_REBUFFERING"])
															}, t.prototype.createStateMachine = function(e) {
																var n = this;
																return s.create({
																	initial: o.SETUP,
																	error: function(e, t, n, r, i, a) {
																		l.logger.error("Error in statemachine: " + a)
																	},
																	events: [{
																		name: u.Event.READY,
																		from: [o.SETUP, o.ERROR],
																		to: o.READY
																	}, {
																		name: u.Event.PLAY,
																		from: o.READY,
																		to: o.STARTUP
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.STARTUP,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.PLAYING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.PLAYING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.REBUFFERING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.PLAYING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PAUSE,
																		from: o.REBUFFERING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PLAY,
																		from: o.PAUSE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PLAYING,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PLAYING,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE,
																		to: o.QUALITYCHANGE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE,
																		to: o.QUALITYCHANGE
																	}, {
																		name: "FINISH_QUALITYCHANGE",
																		from: o.QUALITYCHANGE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.QUALITYCHANGE_PAUSE
																	}, {
																		name: "FINISH_QUALITYCHANGE_PAUSE",
																		from: o.QUALITYCHANGE_PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.SEEK,
																		from: o.PAUSE,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.SEEK,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSED_SEEKING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSE
																	}, {
																		name: u.Event.PLAY,
																		from: o.PAUSED_SEEKING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.PAUSED_SEEKING,
																		to: o.PAUSE
																	}, {
																		name: "PLAY_SEEK",
																		from: o.PAUSE,
																		to: o.PLAY_SEEKING
																	}, {
																		name: "PLAY_SEEK",
																		from: o.PAUSED_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: "PLAY_SEEK",
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.SEEK,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: u.Event.PLAY,
																		from: o.PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.END_PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.END_PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.END_PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.END_PLAY_SEEKING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.END,
																		from: o.PLAY_SEEKING,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.PAUSED_SEEKING,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.PLAYING,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.PAUSE,
																		to: o.END
																	}, {
																		name: u.Event.SEEK,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.SEEKED,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.END_BUFFERING,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.START_BUFFERING,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.END,
																		from: o.END,
																		to: o.END
																	}, {
																		name: u.Event.PLAY,
																		from: o.END,
																		to: o.STARTUP
																	}, {
																		name: u.Event.ERROR,
																		from: this.getAllStates(),
																		to: o.ERROR
																	}, {
																		name: u.Event.SEEK,
																		from: o.END_PLAY_SEEKING,
																		to: o.PLAY_SEEKING
																	}, {
																		name: "FINISH_PLAY_SEEKING",
																		from: o.END_PLAY_SEEKING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.UNLOAD,
																		from: this.getAllStates(),
																		to: o.END
																	}, {
																		name: u.Event.START_AD,
																		from: o.PLAYING,
																		to: o.AD
																	}, {
																		name: u.Event.END_AD,
																		from: o.AD,
																		to: o.PLAYING
																	}, {
																		name: u.Event.MUTE,
																		from: o.READY,
																		to: o.MUTING_READY
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.READY,
																		to: o.MUTING_READY
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_READY,
																		to: o.READY
																	}, {
																		name: u.Event.MUTE,
																		from: o.PLAYING,
																		to: o.MUTING_PLAY
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.PLAYING,
																		to: o.MUTING_PLAY
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_PLAY,
																		to: o.PLAYING
																	}, {
																		name: u.Event.MUTE,
																		from: o.PAUSE,
																		to: o.MUTING_PAUSE
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.PAUSE,
																		to: o.MUTING_PAUSE
																	}, {
																		name: "FINISH_MUTING",
																		from: o.MUTING_PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.START_CAST,
																		from: [o.READY, o.PAUSE, o.PLAYING],
																		to: o.CASTING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.PLAY,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.PLAYING,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.MUTE,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.UN_MUTE,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.SEEK,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.SEEKED,
																		from: o.CASTING,
																		to: o.CASTING
																	}, {
																		name: u.Event.END_CAST,
																		from: o.CASTING,
																		to: o.READY
																	}, {
																		name: u.Event.SEEK,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.SEEKED,
																		from: o.READY,
																		to: o.READY
																	}, {
																		name: u.Event.SEEKED,
																		from: o.STARTUP,
																		to: o.STARTUP
																	}, {
																		name: u.Event.MANUAL_SOURCE_CHANGE,
																		from: this.getAllStates(),
																		to: o.SOURCE_CHANGING
																	}, {
																		name: u.Event.SOURCE_UNLOADED,
																		from: this.getAllStates(),
																		to: o.SOURCE_CHANGING
																	}, {
																		name: u.Event.READY,
																		from: o.SOURCE_CHANGING,
																		to: o.READY
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.VIDEO_CHANGE,
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: u.Event.AUDIO_CHANGE,
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: "FINISH_QUALITYCHANGE_REBUFFERING",
																		from: o.QUALITYCHANGE_REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.PLAYING,
																		to: o.AUDIOTRACK_CHANGING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.END_PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.AUDIOTRACK_CHANGED,
																		from: o.AUDIOTRACK_CHANGING,
																		to: o.AUDIOTRACK_CHANGING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.AUDIOTRACK_CHANGING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.PLAYING,
																		to: o.SUBTITLE_CHANGING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.PAUSE,
																		to: o.PAUSE
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.REBUFFERING,
																		to: o.REBUFFERING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.END_PLAY_SEEKING,
																		to: o.END_PLAY_SEEKING
																	}, {
																		name: u.Event.SUBTITLE_CHANGE,
																		from: o.SUBTITLE_CHANGING,
																		to: o.SUBTITLE_CHANGING
																	}, {
																		name: u.Event.TIMECHANGED,
																		from: o.SUBTITLE_CHANGING,
																		to: o.PLAYING
																	}, {
																		name: u.Event.CUSTOM_DATA_CHANGE,
																		from: [o.PLAYING, o.PAUSE],
																		to: o.CUSTOMDATACHANGE
																	}, {
																		name: u.Event.PLAYING,
																		from: o.CUSTOMDATACHANGE,
																		to: o.PLAYING
																	}, {
																		name: u.Event.PAUSE,
																		from: o.CUSTOMDATACHANGE,
																		to: o.PAUSE
																	}],
																	callbacks: {
																		onpause: function(e, t, r, i) {
																			t === o.PLAYING && (n.pausedTimestamp = i)
																		},
																		onbeforeevent: function(e, r, i, a, s) {
																			if (e === u.Event.SEEK && r === o.PAUSE) {
																				n.seekStarted || (n.seekTimestamp = a, n.seekStarted = !0);
																				var c = a - n.pausedTimestamp;
																				if (c < t.PAUSE_SEEK_DELAY && c > 0) return n.stateMachine.PLAY_SEEK(a), !1
																			}
																			return e === u.Event.SEEK && window.clearTimeout(n.seekedTimeout), e === u.Event.SEEKED && r === o.PAUSED_SEEKING ? (n.seekedTimestamp = a, n.seekEnded = !0, n.seekedTimeout = window.setTimeout((function() {
																				n.stateMachine.pause(a, s)
																			}), t.SEEKED_PAUSE_DELAY), !1) : (r !== o.REBUFFERING || i !== o.QUALITYCHANGE_REBUFFERING) && void 0
																		},
																		onafterevent: function(e, t, r, i) {
																			r === o.QUALITYCHANGE_PAUSE && n.stateMachine.FINISH_QUALITYCHANGE_PAUSE(i), r === o.QUALITYCHANGE && n.stateMachine.FINISH_QUALITYCHANGE(i), r === o.QUALITYCHANGE_REBUFFERING && n.stateMachine.FINISH_QUALITYCHANGE_REBUFFERING(i), r !== o.MUTING_READY && r !== o.MUTING_PLAY && r !== o.MUTING_PAUSE || n.stateMachine.FINISH_MUTING(i)
																		},
																		onenterstate: function(t, r, i, a, s) {
																			"none" === r && e.starttime ? n.onEnterStateTimestamp = e.starttime : n.onEnterStateTimestamp = a || (new Date).getTime(), l.logger.log("[ENTER] " + l.padRight(i, 20) + "EVENT: " + l.padRight(t, 20) + " from " + l.padRight(r, 14)), s && i !== o.PAUSED_SEEKING && i !== o.PLAY_SEEKING && i !== o.END_PLAY_SEEKING && n.stateMachineCallbacks.setVideoTimeStartFromEvent(s), t === u.Event.START_CAST && i === o.CASTING && n.stateMachineCallbacks.startCasting(a, s), i === o.REBUFFERING && n.startRebufferingHeartbeatInterval()
																		},
																		onleavestate: function(e, t, r, i, a) {
																			if (t === o.REBUFFERING && n.resetRebufferingHelpers(), i) {
																				n.addStatesToLog(e, t, r, i, a);
																				var s = i - n.onEnterStateTimestamp;
																				if (a && r !== o.PAUSED_SEEKING && r !== o.PLAY_SEEKING && r !== o.END_PLAY_SEEKING && n.stateMachineCallbacks.setVideoTimeEndFromEvent(a), "PLAY_SEEK" === e && t === o.PAUSE) return !0;
																				var c = String(t).toLowerCase();
																				if (t === o.END_PLAY_SEEKING || t === o.PAUSED_SEEKING) {
																					var f = n.seekedTimestamp - n.seekTimestamp;
																					n.seekStarted && n.seekEnded && r !== o.PLAY_SEEKING && (n.seekEnded = n.seekStarted = !1, n.stateMachineCallbacks[c](f, c, a))
																				} else if (e === u.Event.UNLOAD) n.stateMachineCallbacks.unload(s, c);
																				else if (t === o.PAUSE && r !== o.PAUSED_SEEKING) n.stateMachineCallbacks.setVideoTimeStartFromEvent(e), n.stateMachineCallbacks.pause(s, c);
																				else {
																					var d = n.stateMachineCallbacks[c];
																					"function" == typeof d ? d(s, c, a) : l.logger.error("Could not find callback function for " + c)
																				}
																				a && r !== o.PAUSED_SEEKING && r !== o.PLAY_SEEKING && r !== o.END_PLAY_SEEKING && n.stateMachineCallbacks.setVideoTimeStartFromEvent(a), e === u.Event.VIDEO_CHANGE ? n.stateMachineCallbacks.videoChange(a) : e === u.Event.AUDIO_CHANGE ? n.stateMachineCallbacks.audioChange(a) : e === u.Event.MUTE ? n.stateMachineCallbacks.mute() : e === u.Event.UN_MUTE ? n.stateMachineCallbacks.unMute() : e === u.Event.MANUAL_SOURCE_CHANGE && n.stateMachineCallbacks.manualSourceChange(a)
																			}
																		},
																		onseek: function(e, t, r, i) {
																			n.seekStarted || (n.seekTimestamp = i, n.seekStarted = !0)
																		},
																		onseeked: function(e, t, r, i) {
																			n.seekedTimestamp = i, n.seekEnded = !0
																		},
																		ontimechanged: function(e, t, r, i, a) {
																			var o = i - n.onEnterStateTimestamp;
																			o > 59700 && (n.stateMachineCallbacks.setVideoTimeEndFromEvent(a), n.stateMachineCallbacks.heartbeat(o, String(t).toLowerCase(), {
																				played: o
																			}), n.onEnterStateTimestamp = i, n.stateMachineCallbacks.setVideoTimeStartFromEvent(a))
																		},
																		onplayerError: function(e, t, r, i, a) {
																			n.stateMachineCallbacks.error(a)
																		}
																	}
																})
															}, t.prototype.callEvent = function(e, t, n) {
																var r = this.stateMachine[e];
																if (r) try {
																	r.call(this.stateMachine, n, t)
																} catch (n) {
																	l.logger.error("Exception occured in State Machine callback " + e, r, t, n)
																} else l.logger.log("Ignored Event: " + e)
															}, t.prototype.addStatesToLog = function(e, t, n, r, i) {
																this.enabledDebugging && this.debuggingStates.push(new c.EventDebugging(e, t, n, r, i))
															}, t.prototype.getStates = function() {
																return this.debuggingStates
															}, t.prototype.setEnabledDebugging = function(e) {
																this.enabledDebugging = e
															}, t.PAUSE_SEEK_DELAY = 200, t.SEEKED_PAUSE_DELAY = 300, t
														}(f.AnalyticsStateMachine);
														t.Bitmovin7AnalyticsStateMachine = d
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.VideoStartFailedReason = void 0;
														var r = n(12),
															i = function() {
																function e(e, t) {
																	this.reason = e, this.errorCode = t
																}
																return e.PAGE_CLOSED = new e("PAGE_CLOSED", null), e.PLAYER_ERROR = new e("PLAYER_ERROR", null), e.TIMEOUT = new e("TIMEOUT", r.ErrorCode.VIDEO_STARTUP_TIMEOUT_REACHED), e.UNKNOWN = new e("UNKNOWN", null), e
															}();
														t.VideoStartFailedReason = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Feature = void 0;
														var r = function() {
															function e() {
																this._config = void 0, this._isEnabled = !0
															}
															return Object.defineProperty(e.prototype, "config", {
																get: function() {
																	return this._config
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "isEnabled", {
																get: function() {
																	return this._isEnabled
																},
																enumerable: !1,
																configurable: !0
															}), e.prototype.disable = function() {
																this._isEnabled = !1, this.disabled()
															}, e.prototype.configure = function(e, t) {
																return null != t && (this._config = this.extractConfig(t)), this.configured(e, this._config), this._config
															}, e
														}();
														t.Feature = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.defaultStateMachineCallbacks = void 0, t.defaultStateMachineCallbacks = {
															setup: function(e, t) {},
															startup: function(e, t) {},
															playing: function(e, t) {},
															heartbeat: function(e, t, n) {},
															qualitychange: function(e, t) {},
															qualitychange_pause: function(e, t) {},
															qualitychange_rebuffering: function(e, t) {},
															videoChange: function(e) {},
															audioChange: function(e) {},
															audiotrack_changing: function() {},
															pause: function(e, t) {},
															paused_seeking: function(e, t) {},
															end_play_seeking: function(e, t) {},
															rebuffering: function(e, t) {},
															error: function(e) {},
															end: function(e, t) {},
															unload: function(e, t) {},
															ad: function(e, t) {},
															mute: function() {},
															unMute: function() {},
															subtitle_changing: function() {},
															setVideoTimeEndFromEvent: function(e) {},
															setVideoTimeStartFromEvent: function(e) {},
															videoStartFailed: function(e, t) {},
															source_changing: function(e, t, n) {},
															ready: function(e, t, n) {},
															startCasting: function(e, t) {},
															casting: function(e, t) {},
															manualSourceChange: function(e) {},
															initialSourceChange: function(e) {},
															muting_ready: function(e, t, n) {},
															customdatachange: function(e, t, n) {},
															release: function() {},
															playlistTransition: function(e) {}
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.WindowEventTracker = void 0;
														var r = function() {
															function e() {
																this.trackedObjects = []
															}
															return e.prototype.addEventListener = function(e, t) {
																this.trackedObjects.push({
																	eventName: e,
																	func: t
																}), window.addEventListener(e, t)
															}, e.prototype.release = function() {
																for (; 0 !== this.trackedObjects.length;) {
																	var e = this.trackedObjects.pop();
																	void 0 !== e && window.removeEventListener(e.eventName, e.func)
																}
															}, e
														}();
														t.WindowEventTracker = r
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
															return (r = Object.setPrototypeOf || {
																	__proto__: []
																}
																instanceof Array && function(e, t) {
																	e.__proto__ = t
																} || function(e, t) {
																	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																})(e, t)
														}, function(e, t) {
															function n() {
																this.constructor = e
															}
															r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
														});
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin8Adapter = void 0;
														var a = n(4),
															o = n(0),
															s = n(5),
															u = n(56),
															c = function(e) {
																function t(t, n) {
																	var r = e.call(this) || this;
																	if (r.hasPlayerAlreadyBeenAugmented(t)) return o.logger.errorMessageToUser("Bitmovin Analytics is already hooked up to this player instance"), r;
																	r.markPlayerInstanceAsAugmented(t);
																	var i = t.getConfig(),
																		s = i.analytics;
																	return void 0 === s && (s = {}), s.playerKey = s.playerKey || i.key, r.internalAdapter = new u.Bitmovin8InternalAdapter(t, n), r.analytics = new a.Analytics(s, r.internalAdapter), t.analytics = r.analytics, r.wrapPlayerLoad(t, r.analytics), r
																}
																return i(t, e), t.prototype.wrapPlayerLoad = function(e, t) {
																	var n = e.load;
																	e.load = function() {
																		for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
																		if (r.length > 0) {
																			var a = r[0].analytics;
																			t.sourceChange(a)
																		}
																		return n.apply(e, r)
																	}
																}, t
															}(s.Adapter);
														t.Bitmovin8Adapter = c
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
																return (r = Object.setPrototypeOf || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e.__proto__ = t
																	} || function(e, t) {
																		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																	})(e, t)
															}, function(e, t) {
																function n() {
																	this.constructor = e
																}
																r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
															}),
															a = this && this.__assign || function() {
																return (a = Object.assign || function(e) {
																	for (var t, n = 1, r = arguments.length; n < r; n++)
																		for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
																	return e
																}).apply(this, arguments)
															};
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin8InternalAdapter = void 0;
														var o, s = n(57),
															u = n(25),
															c = n(60),
															l = n(20),
															f = n(23),
															d = n(12),
															h = n(2),
															p = n(3),
															_ = n(10),
															m = n(7),
															b = n(8),
															g = n(61),
															v = n(24),
															y = n(0),
															A = n(6),
															S = n(63),
															w = n(65),
															E = n(67),
															T = n(68),
															C = n(11);
														! function(e) {
															e.Inline = "inline", e.Fullscreen = "fullscreen", e.PictureInPicture = "pictureinpicture"
														}(o || (o = {}));
														var $ = function(e) {
															function t(t, n) {
																var r = e.call(this, n) || this;
																return r.player = t, r.onBeforeUnLoadEvent = !1, r.getPlayerVersion = function() {
																	return r.player.version
																}, r.getPlayerName = function() {
																	return p.Player.BITMOVIN
																}, r.getPlayerTech = function() {
																	return r.player.getPlayerType()
																}, r.getDrmPerformanceInfo = function() {
																	return r.drmPerformanceInfo
																}, r.stateMachine = new s.Bitmovin8AnalyticsStateMachine(r.stateMachineCallbacks, r.opts), r.speedMeter = new T.Bitmovin8SpeedMeterAdapter(t, new u.DownloadSpeedMeter).getDownloadSpeedMeter(), r.segmentTracker = new E.Bitmovin8SegmentTrackerAdapter(t, new c.SegmentTracker).getSegmentTracker(), r.httpRequestTrackingAdapter = new w.Bitmovin8HttpRequestTrackingAdapter(t), r.videoCompletionTracker = new l.default, r
															}
															return i(t, e), Object.defineProperty(t.prototype, "downloadSpeedInfo", {
																get: function() {
																	return this.speedMeter.getInfo()
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(t.prototype, "segments", {
																get: function() {
																	return this.segmentTracker.getSegments()
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(t.prototype, "adModule", {
																get: function() {
																	return this._adModule
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(t.prototype, "supportsDeferredLicenseLoading", {
																get: function() {
																	return !0
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(t.prototype, "currentTime", {
																get: function() {
																	try {
																		if (null !== this.player && null !== this.player.getCurrentTime && !this.isAdPlaying) return this.player.getCurrentTime()
																	} catch (e) {
																		y.logger.warning("Analytics Collector attempted to access player, but player is not available anymore")
																	}
																	return this.lastTrackedCurrentTime ? this.lastTrackedCurrentTime : 0
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(t.prototype, "isAdPlaying", {
																get: function() {
																	return null != (this.player.ads && this.player.ads.getActiveAd())
																},
																enumerable: !1,
																configurable: !0
															}), t.prototype.initialize = function(e) {
																this.registerPlayerEventListeners(), this.registerUnloadEventListeners(), this._adModule = new S.Bitmovin8AdModule(this.player, this.windowEventTracker);
																var t = new g.HttpRequestTracking([this.httpRequestTrackingAdapter]);
																return [new b.ErrorDetailTracking(e.errorDetailTrackingSettingsProvider, new m.ErrorDetailBackend(e.errorDetailTrackingSettingsProvider.collectorConfig), [e.errorDetailSubscribable], t)]
															}, t.prototype.clearValues = function() {
																this.speedMeter.reset()
															}, t.prototype.clearSegments = function() {
																this.segmentTracker.reset()
															}, t.prototype.getAutoPlay = function() {
																return this.player.getConfig().playback && this.player.getConfig().playback.autoplay || !1
															}, t.prototype.getCurrentPlaybackInfo = function() {
																var t = a(a({}, e.prototype.getCommonPlaybackInfo.call(this)), {
																	size: this.player.getViewMode() === o.Fullscreen ? _.PlayerSize.Fullscreen : _.PlayerSize.Window,
																	playerTech: this.getPlayerTech(),
																	isLive: this.player.isLive(),
																	videoDuration: this.videoDuration ? this.videoDuration : 0,
																	streamFormat: this.player.getStreamType(),
																	videoWindowWidth: this.player.getContainer().offsetWidth,
																	videoWindowHeight: this.player.getContainer().offsetHeight,
																	isMuted: this.player.isMuted(),
																	isCasting: this.player.isCasting(),
																	audioLanguage: null != this.player.getAudio() ? this.player.getAudio().lang : void 0,
																	subtitleEnabled: !1,
																	droppedFrames: null != this.player.getSource() ? this.player.getDroppedVideoFrames() : 0
																});
																return this.applySubtitleProperties(t), this.applyPlaybackQualityProperties(t), this.applyCastingProperties(t), this.applySourceProperties(t), t
															}, t.prototype.sourceChange = function(e, t) {
																this.stateMachine.sourceChange(e, t, this.currentTime)
															}, t.prototype.onError = function() {
																this.clearSegments()
															}, t.prototype.registerPlayerEventListeners = function() {
																var e = this;
																this.player.on(this.player.exports.PlayerEvent.SourceUnloaded, (function(t) {
																	e.segmentTracker.reset(), e.eventCallback(h.Event.SOURCE_UNLOADED, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.SourceLoaded, (function(t) {
																	e.videoCompletionTracker.reset(), e.resetSourceRelatedState(), e.videoDuration = e.player.getDuration(), e.videoCompletionTracker.setVideoDuration(e.player.getDuration()), e.eventCallback(h.Event.SOURCE_LOADED, {})
																})), this.player.on(this.player.exports.PlayerEvent.CastStarted, (function(t) {
																	e.eventCallback(h.Event.START_CAST, t)
																})), this.player.on(this.player.exports.PlayerEvent.CastStopped, (function() {
																	e.eventCallback(h.Event.END_CAST, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Play, (function(t) {
																	"ui-seek" !== t.issuer && e.eventCallback(h.Event.PLAY, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Playing, (function(t) {
																	"advertising-api" !== t.issuer && e.eventCallback(h.Event.PLAYING, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Paused, (function(t) {
																	"ui-seek" !== t.issuer && e.eventCallback(h.Event.PAUSE, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.TimeChanged, (function(t) {
																	e.isAdPlaying || (e.lastTrackedCurrentTime = e.player.getCurrentTime()), e.eventCallback(h.Event.TIMECHANGED, {
																		currentTime: e.lastTrackedCurrentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Seek, (function(t) {
																	e.allowSeeking(t) && e.eventCallback(h.Event.SEEK, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Seeked, (function() {
																	e.eventCallback(h.Event.SEEKED, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.StallStarted, (function() {
																	e.eventCallback(h.Event.START_BUFFERING, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.StallEnded, (function() {
																	e.eventCallback(h.Event.END_BUFFERING, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AudioPlaybackQualityChanged, (function() {
																	var t = e.player.getPlaybackAudioData();
																	e.shouldAllowAudioQualityChange(t.bitrate) && (e.setPreviousAudioBitrate(t.bitrate), e.eventCallback(h.Event.AUDIO_CHANGE, {
																		bitrate: t.bitrate,
																		currentTime: e.currentTime,
																		codec: t.codec
																	}))
																})), this.player.on(this.player.exports.PlayerEvent.VideoPlaybackQualityChanged, (function() {
																	var t = e.player.getPlaybackVideoData();
																	e.shouldAllowVideoQualityChange(t.bitrate) && (e.setPreviousVideoBitrate(t.bitrate), e.eventCallback(h.Event.VIDEO_CHANGE, {
																		width: t.width,
																		height: t.height,
																		bitrate: t.bitrate,
																		currentTime: e.currentTime,
																		codec: t.codec
																	}))
																})), this.player.on(this.player.exports.PlayerEvent.ViewModeChanged, (function(t) {
																	"fullscreen" === t.to ? e.eventCallback(h.Event.START_FULLSCREEN, {
																		currentTime: e.currentTime
																	}) : "fullscreen" === t.from && e.eventCallback(h.Event.END_FULLSCREEN, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AdStarted, (function(t) {
																	e.eventCallback(h.Event.START_AD, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AdFinished, (function(t) {
																	e.eventCallback(h.Event.END_AD, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AdSkipped, (function(t) {
																	e.eventCallback(h.Event.END_AD, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AdError, (function(t) {
																	e.eventCallback(h.Event.END_AD, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Muted, (function() {
																	e.eventCallback(h.Event.MUTE, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Unmuted, (function() {
																	e.eventCallback(h.Event.UN_MUTE, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.Error, (function(t) {
																	e.eventCallback(h.Event.ERROR, {
																		code: t.code,
																		message: t.name,
																		legacyData: t.data,
																		currentTime: e.currentTime,
																		data: {
																			additionalData: JSON.stringify(t.data)
																		}
																	}), t.code !== d.ErrorCode.BITMOVIN_PLAYER_LICENSING_ERROR.code && t.code !== d.ErrorCode.SETUP_MISSING_LICENSE_WHITELIST.code || e._onLicenseCallFailed.dispatch({})
																})), this.player.on(this.player.exports.PlayerEvent.PlaybackFinished, (function() {
																	e.eventCallback(h.Event.PLAYBACK_FINISHED, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.DownloadFinished, (function(t) {
																	0 === t.downloadType.indexOf("drm/license/") && (e.drmPerformanceInfo = {
																		drmType: t.downloadType.replace("drm/license/", ""),
																		drmLoadTime: 1e3 * t.downloadTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.AudioChanged, (function(t) {
																	e.eventCallback(h.Event.AUDIOTRACK_CHANGED, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.SubtitleEnabled, (function(t) {
																	e.eventCallback(h.Event.SUBTITLE_CHANGE, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.SubtitleDisabled, (function(t) {
																	e.eventCallback(h.Event.SUBTITLE_CHANGE, {
																		currentTime: e.currentTime
																	})
																})), this.player.on(this.player.exports.PlayerEvent.LicenseValidated, (function(t) {
																	t.data.analytics && void 0 !== t.data.analytics.key ? e._onLicenseKeyReceived.dispatch({
																		licenseKey: t.data.analytics.key
																	}) : e._onLicenseCallFailed.dispatch({})
																}))
															}, t.prototype.registerUnloadEventListeners = function() {
																var e = this,
																	t = function() {
																		if (!e.onBeforeUnLoadEvent) {
																			e.onBeforeUnLoadEvent = !0;
																			var t = e.lastTrackedCurrentTime;
																			e.eventCallback(h.Event.UNLOAD, {
																				currentTime: t
																			})
																		}
																		e.release()
																	};
																t = t.bind(!0), this.player.on(this.player.exports.PlayerEvent.Destroy, t), this.windowEventTracker.addEventListener("beforeunload", t), this.windowEventTracker.addEventListener("unload", t)
															}, t.prototype.applySourceProperties = function(e) {
																var t = this.player.getSource();
																if (null != t) {
																	e.videoTitle = t.title, e.mpdUrl = t.dash, e.m3u8Url = t.hls;
																	var n = v.getSourceInfoFromBitmovinSourceConfig(t.progressive, this.player);
																	e.progUrl = n.progUrl, "progressive" === this.player.getStreamType() && (e.videoBitrate = n.progBitrate)
																}
															}, t.prototype.applySubtitleProperties = function(e) {
																var t;
																this.player.subtitles && (t = this.player.subtitles.list().find((function(e) {
																	return !0 === e.enabled
																}))), e.subtitleEnabled = null != t, e.subtitleLanguage = null != t ? t.lang : null
															}, t.prototype.applyPlaybackQualityProperties = function(e) {
																var t = this.player.getPlaybackVideoData();
																null !== t && (e.videoBitrate = t.bitrate, e.videoPlaybackHeight = t.height, e.videoPlaybackWidth = t.width, e.videoCodec = t.codec);
																var n = this.player.getPlaybackAudioData();
																null !== n && (e.audioBitrate = n.bitrate, e.audioCodec = n.codec)
															}, t.prototype.applyCastingProperties = function(e) {
																var t = this.player.isCasting() || this.player.isAirplayActive() || !1;
																if (e.isCasting = t, t)
																	if (this.player.isAirplayActive()) e.castTech = f.CastTech.AirPlay;
																	else {
																		var n = this.player.getConfig().remotecontrol;
																		if (null != n) switch (n.type) {
																			case "googlecast":
																				e.castTech = f.CastTech.GoogleCast;
																				break;
																			case "websocket":
																				e.castTech = f.CastTech.WebSocket
																		}
																	}
															}, t.prototype.allowSeeking = function(e) {
																var t = e;
																return Math.abs(t.position - t.seekTarget) > A.ANALYTICS_MIN_SEEK_DIFFERENCE_THRESHOLD
															}, t
														}(C.InternalAdapter);
														t.Bitmovin8InternalAdapter = $
													}, function(e, t, n) {
														"use strict";
														var r, i = this && this.__extends || (r = function(e, t) {
															return (r = Object.setPrototypeOf || {
																	__proto__: []
																}
																instanceof Array && function(e, t) {
																	e.__proto__ = t
																} || function(e, t) {
																	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
																})(e, t)
														}, function(e, t) {
															function n() {
																this.constructor = e
															}
															r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
														});
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin8AnalyticsStateMachine = void 0;
														var a, o = n(13),
															s = n(2),
															u = n(22),
															c = n(0),
															l = n(1),
															f = n(14);
														! function(e) {
															e.SETUP = "SETUP", e.STARTUP = "STARTUP", e.READY = "READY", e.PLAYING = "PLAYING", e.REBUFFERING = "REBUFFERING", e.PAUSE = "PAUSE", e.QUALITYCHANGE = "QUALITYCHANGE", e.PLAY_SEEKING = "PLAY_SEEKING", e.END_PLAY_SEEKING = "END_PLAY_SEEKING", e.QUALITYCHANGE_PAUSE = "QUALITYCHANGE_PAUSE", e.QUALITYCHANGE_REBUFFERING = "QUALITYCHANGE_REBUFFERING", e.END = "END", e.ERROR = "ERROR", e.AD_STARTUP = "AD_STARTUP", e.AD_READY = "AD_READY", e.AD_PAUSE = "AD_PAUSE", e.AD_PLAYING = "AD_PLAYING", e.MUTING_READY = "MUTING_READY", e.MUTING_PLAY = "MUTING_PLAY", e.MUTING_PAUSE = "MUTING_PAUSE", e.CASTING = "CASTING", e.SOURCE_CHANGING = "SOURCE_CHANGING", e.INITIAL_SOURCE_CHANGE = "INITIAL_SOURCE_CHANGE", e.SOURCE_LOADED = "SOURCE_LOADED", e.SUBTITLE_CHANGING = "SUBTITLE_CHANGING", e.AUDIOTRACK_CHANGING = "AUDIOTRACK_CHANGING", e.EXIT_BEFORE_VIDEOSTART = "EXIT_BEFORE_VIDEOSTART", e.CUSTOMDATACHANGE = "CUSTOMDATACHANGE"
														}(a || (a = {}));
														var d = function(e) {
															function t(t, n) {
																var r = e.call(this, t, n) || this;
																return r.debuggingStates = [], r.enabledDebugging = !1, r.sourceChange = function(e, t, n) {
																	r.callEvent(s.Event.MANUAL_SOURCE_CHANGE, {
																		config: e,
																		currentTime: n
																	}, t)
																}, r.seekTimestamp = 0, r.seekedTimestamp = 0, r.seekStarted = !1, r.seekEnded = !1, r
															}
															return i(t, e), t.prototype.getAllStatesBut = function(e) {
																return this.getAllStates().filter((function(t) {
																	return e.indexOf(t) < 0
																}))
															}, t.prototype.getAllStates = function() {
																return Object.keys(a).map((function(e) {
																	return a[e]
																}))
															}, t.prototype.createStateMachine = function(e) {
																var t = this;
																return o.create({
																	initial: a.SETUP,
																	error: function(e, t, n, r, i, a) {
																		c.logger.error("Error in statemachine: " + a)
																	},
																	events: [{
																		name: s.Event.SOURCE_LOADED,
																		from: [a.SETUP, a.ERROR, a.SOURCE_CHANGING, a.INITIAL_SOURCE_CHANGE],
																		to: a.READY
																	}, {
																		name: s.Event.PLAY,
																		from: a.READY,
																		to: a.STARTUP
																	}, {
																		name: s.Event.PLAYING,
																		from: a.READY,
																		to: a.PLAYING
																	}, {
																		name: s.Event.READY,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.ERROR,
																		from: [a.STARTUP, a.AD_STARTUP],
																		to: a.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: s.Event.UNLOAD,
																		from: [a.STARTUP, a.AD_STARTUP],
																		to: a.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: s.Event.VIDEOSTART_TIMEOUT,
																		from: a.STARTUP,
																		to: a.EXIT_BEFORE_VIDEOSTART
																	}, {
																		name: s.Event.PLAY,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.PLAYING,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.STARTUP,
																		to: a.PLAYING
																	}, {
																		name: s.Event.START_BUFFERING,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.READY,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.PLAYING,
																		from: a.PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.START_BUFFERING,
																		from: a.PLAYING,
																		to: a.REBUFFERING
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.REBUFFERING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.REBUFFERING,
																		to: a.REBUFFERING
																	}, {
																		name: s.Event.PAUSE,
																		from: a.PLAYING,
																		to: a.PAUSE
																	}, {
																		name: s.Event.PAUSE,
																		from: a.REBUFFERING,
																		to: a.PAUSE
																	}, {
																		name: s.Event.PLAY,
																		from: a.PAUSE,
																		to: a.PLAYING
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.PLAYING,
																		to: a.QUALITYCHANGE
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.PLAYING,
																		to: a.QUALITYCHANGE
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.QUALITYCHANGE,
																		to: a.QUALITYCHANGE
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.QUALITYCHANGE,
																		to: a.QUALITYCHANGE
																	}, {
																		name: "FINISH_QUALITYCHANGE",
																		from: a.QUALITYCHANGE,
																		to: a.PLAYING
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.PAUSE,
																		to: a.QUALITYCHANGE_PAUSE
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.PAUSE,
																		to: a.QUALITYCHANGE_PAUSE
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.QUALITYCHANGE_PAUSE,
																		to: a.QUALITYCHANGE_PAUSE
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.QUALITYCHANGE_PAUSE,
																		to: a.QUALITYCHANGE_PAUSE
																	}, {
																		name: "FINISH_QUALITYCHANGE_PAUSE",
																		from: a.QUALITYCHANGE_PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.SEEK,
																		from: a.PLAYING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.PLAY,
																		from: a.PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.PLAYING,
																		from: a.PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.SEEKED,
																		from: a.PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.SEEK,
																		from: a.END_PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.PLAYING,
																		from: a.END_PLAY_SEEKING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.END_PLAY_SEEKING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.SEEK,
																		from: a.PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.START_BUFFERING,
																		from: a.PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.PLAY_SEEKING,
																		to: a.PLAY_SEEKING
																	}, {
																		name: s.Event.START_BUFFERING,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.SEEKED,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.PLAY,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.SEEK,
																		from: a.PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.SEEKED,
																		from: a.PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.SEEKED,
																		from: a.PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.END,
																		from: a.PLAY_SEEKING,
																		to: a.END
																	}, {
																		name: s.Event.END,
																		from: a.PLAYING,
																		to: a.END
																	}, {
																		name: s.Event.END,
																		from: a.PAUSE,
																		to: a.END
																	}, {
																		name: s.Event.SEEK,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.SEEKED,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.END_BUFFERING,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.START_BUFFERING,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.END,
																		from: a.END,
																		to: a.END
																	}, {
																		name: s.Event.PLAY,
																		from: a.END,
																		to: a.STARTUP
																	}, {
																		name: s.Event.ERROR,
																		from: this.getAllStatesBut([a.STARTUP]),
																		to: a.ERROR
																	}, {
																		name: s.Event.UNLOAD,
																		from: this.getAllStatesBut([a.STARTUP, a.AD_STARTUP]),
																		to: a.END
																	}, {
																		name: s.Event.CUSTOM_DATA_CHANGE,
																		from: [a.PLAYING, a.PAUSE],
																		to: a.CUSTOMDATACHANGE
																	}, {
																		name: s.Event.PLAYING,
																		from: a.CUSTOMDATACHANGE,
																		to: a.PLAYING
																	}, {
																		name: s.Event.PAUSE,
																		from: a.CUSTOMDATACHANGE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.SUBTITLE_CHANGE,
																		from: a.PLAYING,
																		to: a.SUBTITLE_CHANGING
																	}, {
																		name: s.Event.SUBTITLE_CHANGE,
																		from: a.PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.SUBTITLE_CHANGE,
																		from: a.REBUFFERING,
																		to: a.REBUFFERING
																	}, {
																		name: s.Event.SUBTITLE_CHANGE,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.SUBTITLE_CHANGE,
																		from: a.SUBTITLE_CHANGING,
																		to: a.SUBTITLE_CHANGING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.SUBTITLE_CHANGING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.AUDIOTRACK_CHANGED,
																		from: a.PLAYING,
																		to: a.AUDIOTRACK_CHANGING
																	}, {
																		name: s.Event.AUDIOTRACK_CHANGED,
																		from: a.PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.AUDIOTRACK_CHANGED,
																		from: a.REBUFFERING,
																		to: a.REBUFFERING
																	}, {
																		name: s.Event.AUDIOTRACK_CHANGED,
																		from: a.END_PLAY_SEEKING,
																		to: a.END_PLAY_SEEKING
																	}, {
																		name: s.Event.AUDIOTRACK_CHANGED,
																		from: a.AUDIOTRACK_CHANGING,
																		to: a.AUDIOTRACK_CHANGING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.AUDIOTRACK_CHANGING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.START_AD,
																		from: a.STARTUP,
																		to: a.AD_STARTUP
																	}, {
																		name: s.Event.END_AD,
																		from: a.AD_STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.PLAY,
																		from: a.AD_STARTUP,
																		to: a.AD_STARTUP
																	}, {
																		name: s.Event.PAUSE,
																		from: a.AD_STARTUP,
																		to: a.AD_STARTUP
																	}, {
																		name: s.Event.START_AD,
																		from: a.READY,
																		to: a.AD_READY
																	}, {
																		name: s.Event.END_AD,
																		from: a.AD_READY,
																		to: a.STARTUP
																	}, {
																		name: s.Event.PLAY,
																		from: a.AD_READY,
																		to: a.AD_READY
																	}, {
																		name: s.Event.PAUSE,
																		from: a.AD_READY,
																		to: a.AD_READY
																	}, {
																		name: s.Event.START_AD,
																		from: a.PAUSE,
																		to: a.AD_PAUSE
																	}, {
																		name: s.Event.END_AD,
																		from: a.AD_PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.PLAY,
																		from: a.AD_PAUSE,
																		to: a.AD_PAUSE
																	}, {
																		name: s.Event.PAUSE,
																		from: a.AD_PAUSE,
																		to: a.AD_PAUSE
																	}, {
																		name: s.Event.START_AD,
																		from: a.PLAYING,
																		to: a.AD_PLAYING
																	}, {
																		name: s.Event.END_AD,
																		from: a.AD_PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.PLAY,
																		from: a.AD_PLAYING,
																		to: a.AD_PLAYING
																	}, {
																		name: s.Event.PAUSE,
																		from: a.AD_PLAYING,
																		to: a.AD_PLAYING
																	}, {
																		name: s.Event.END,
																		from: a.AD_PLAYING,
																		to: a.END
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.AD_STARTUP,
																		to: a.AD_STARTUP
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.AD_READY,
																		to: a.AD_READY
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.AD_PAUSE,
																		to: a.AD_PAUSE
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.AD_PLAYING,
																		to: a.AD_PLAYING
																	}, {
																		name: s.Event.END_AD,
																		from: a.PLAYING,
																		to: a.PLAYING
																	}, {
																		name: s.Event.END_AD,
																		from: a.PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.END_AD,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.END_AD,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.MUTE,
																		from: a.READY,
																		to: a.MUTING_READY
																	}, {
																		name: s.Event.UN_MUTE,
																		from: a.READY,
																		to: a.MUTING_READY
																	}, {
																		name: "FINISH_MUTING",
																		from: a.MUTING_READY,
																		to: a.READY
																	}, {
																		name: s.Event.MUTE,
																		from: a.PLAYING,
																		to: a.MUTING_PLAY
																	}, {
																		name: s.Event.UN_MUTE,
																		from: a.PLAYING,
																		to: a.MUTING_PLAY
																	}, {
																		name: "FINISH_MUTING",
																		from: a.MUTING_PLAY,
																		to: a.PLAYING
																	}, {
																		name: s.Event.MUTE,
																		from: a.PAUSE,
																		to: a.MUTING_PAUSE
																	}, {
																		name: s.Event.UN_MUTE,
																		from: a.PAUSE,
																		to: a.MUTING_PAUSE
																	}, {
																		name: "FINISH_MUTING",
																		from: a.MUTING_PAUSE,
																		to: a.PAUSE
																	}, {
																		name: s.Event.START_CAST,
																		from: [a.READY, a.PAUSE, a.PLAYING],
																		to: a.CASTING
																	}, {
																		name: s.Event.PAUSE,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.PLAY,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.PLAYING,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.TIMECHANGED,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.MUTE,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.UN_MUTE,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.SEEK,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.SEEKED,
																		from: a.CASTING,
																		to: a.CASTING
																	}, {
																		name: s.Event.END_CAST,
																		from: a.CASTING,
																		to: a.READY
																	}, {
																		name: s.Event.SEEK,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.SEEKED,
																		from: a.READY,
																		to: a.READY
																	}, {
																		name: s.Event.SEEKED,
																		from: a.STARTUP,
																		to: a.STARTUP
																	}, {
																		name: s.Event.MANUAL_SOURCE_CHANGE,
																		from: this.getAllStatesBut([a.SETUP]),
																		to: a.SOURCE_CHANGING
																	}, {
																		name: s.Event.MANUAL_SOURCE_CHANGE,
																		from: a.SETUP,
																		to: a.INITIAL_SOURCE_CHANGE
																	}, {
																		name: s.Event.SOURCE_UNLOADED,
																		from: this.getAllStates(),
																		to: a.SOURCE_CHANGING
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.REBUFFERING,
																		to: a.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.REBUFFERING,
																		to: a.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: s.Event.VIDEO_CHANGE,
																		from: a.QUALITYCHANGE_REBUFFERING,
																		to: a.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: s.Event.AUDIO_CHANGE,
																		from: a.QUALITYCHANGE_REBUFFERING,
																		to: a.QUALITYCHANGE_REBUFFERING
																	}, {
																		name: "FINISH_QUALITYCHANGE_REBUFFERING",
																		from: a.QUALITYCHANGE_REBUFFERING,
																		to: a.REBUFFERING
																	}],
																	callbacks: {
																		onbeforeevent: function(e, t, n, r, i) {
																			if (t === a.REBUFFERING && n === a.QUALITYCHANGE_REBUFFERING) return !1
																		},
																		onafterevent: function(e, n, r, i, o) {
																			e === s.Event.MANUAL_SOURCE_CHANGE && n === a.SETUP ? t.stateMachineCallbacks.initialSourceChange(o) : e === s.Event.MANUAL_SOURCE_CHANGE && t.stateMachineCallbacks.manualSourceChange(o), r === a.QUALITYCHANGE_PAUSE && t.stateMachine.FINISH_QUALITYCHANGE_PAUSE(i), r === a.QUALITYCHANGE && t.stateMachine.FINISH_QUALITYCHANGE(i), r === a.QUALITYCHANGE_REBUFFERING && t.stateMachine.FINISH_QUALITYCHANGE_REBUFFERING(i), r !== a.MUTING_READY && r !== a.MUTING_PLAY && r !== a.MUTING_PAUSE || t.stateMachine.FINISH_MUTING(i)
																		},
																		onenterstate: function(n, r, i, o, u) {
																			"none" === r && e.starttime ? t.onEnterStateTimestamp = e.starttime : t.onEnterStateTimestamp = o || (new Date).getTime(), c.logger.log("[ENTER " + o + "] " + c.padRight(i, 20) + " EVENT: " + c.padRight(n, 20) + " from: " + c.padRight(r, 14)), !u || i === a.END_PLAY_SEEKING || r === a.PLAY_SEEKING || r === a.AD_STARTUP || r === a.AD_READY || r === a.AD_PLAYING || r === a.AD_PAUSE || n === s.Event.SEEK && r === a.END_PLAY_SEEKING || t.stateMachineCallbacks.setVideoTimeStartFromEvent(u), n === s.Event.START_CAST && i === a.CASTING && t.stateMachineCallbacks.startCasting(o, u), i === a.REBUFFERING && t.startRebufferingHeartbeatInterval()
																		},
																		onleavestate: function(e, n, r, i, o) {
																			if (n === a.REBUFFERING && t.resetRebufferingHelpers(), i) {
																				c.logger.log("[LEAVE " + i + "] " + c.padRight(n, 20) + " EVENT: " + c.padRight(e, 20) + " to: " + c.padRight(r, 20)), t.addStatesToLog(e, n, r, i, o);
																				var u = i - t.onEnterStateTimestamp;
																				o && r !== a.END_PLAY_SEEKING && t.stateMachineCallbacks.setVideoTimeEndFromEvent(o), o && e !== s.Event.END_AD && (t.lastTrackedVideoEndObject = o), n !== a.READY && n !== a.AD_STARTUP || r !== a.STARTUP ? n !== a.STARTUP || r !== a.PLAYING && r !== a.AD_STARTUP || t.clearVideoStartTimeout() : t.setVideoStartTimeout();
																				var f = String(n).toLowerCase();
																				if (r === a.EXIT_BEFORE_VIDEOSTART) {
																					t.clearVideoStartTimeout();
																					var d = t.getVideoStartupFailedEventData(i, e, o),
																						h = e !== s.Event.ERROR;
																					t.stateMachineCallbacks.videoStartFailed(d, h)
																				} else if (n === a.END_PLAY_SEEKING) {
																					var p = t.seekedTimestamp - t.seekTimestamp;
																					t.seekStarted && t.seekEnded && e !== s.Event.SEEK && (t.seekStarted = t.seekEnded = !1, t.stateMachineCallbacks.end_play_seeking(p, f))
																				} else if (e === s.Event.UNLOAD) t.stateMachineCallbacks.unload(u, f);
																				else if (n === a.AD_PAUSE || n === a.AD_READY || n === a.AD_PLAYING || n === a.AD_STARTUP) t.stateMachineCallbacks.setVideoTimeStartFromEvent(t.lastTrackedVideoEndObject), t.stateMachineCallbacks.setVideoTimeEndFromEvent(t.lastTrackedVideoEndObject), t.stateMachineCallbacks.ad(u, "ad");
																				else if (e === s.Event.START_AD && n === a.STARTUP) l.noOp();
																				else if (e === s.Event.SOURCE_LOADED && n === a.INITIAL_SOURCE_CHANGE) l.noOp();
																				else if (n !== a.ERROR) {
																					var _ = t.stateMachineCallbacks[f];
																					if ("function" == typeof _) try {
																						_(u, f, o)
																					} catch (e) {
																						c.logger.error("Exception occured in State Machine callback " + f, o, e)
																					} else c.logger.error("Could not find callback function for " + f)
																				}
																				o && r !== a.END_PLAY_SEEKING && n !== a.PLAY_SEEKING && r !== a.PLAY_SEEKING && n !== a.AD_STARTUP && n !== a.AD_READY && n !== a.AD_PLAYING && n !== a.AD_PAUSE && t.stateMachineCallbacks.setVideoTimeStartFromEvent(o), e === s.Event.VIDEO_CHANGE ? t.stateMachineCallbacks.videoChange(o) : e === s.Event.AUDIO_CHANGE ? t.stateMachineCallbacks.audioChange(o) : e === s.Event.MUTE ? t.stateMachineCallbacks.mute() : e === s.Event.UN_MUTE && t.stateMachineCallbacks.unMute()
																			}
																		},
																		onseek: function(e, n, r, i) {
																			t.seekStarted || (t.seekTimestamp = i, t.seekStarted = !0)
																		},
																		onseeked: function(e, n, r, i) {
																			t.seekedTimestamp = i, t.seekEnded = !0
																		},
																		ontimechanged: function(e, n, r, i, a) {
																			if ("PLAYING" === t.stateMachine.current) {
																				var o = i - t.onEnterStateTimestamp;
																				o > 59700 && (t.stateMachineCallbacks.setVideoTimeEndFromEvent(a), t.stateMachineCallbacks.heartbeat(o, String(n).toLowerCase(), {
																					played: o
																				}), t.onEnterStateTimestamp = i, t.stateMachineCallbacks.setVideoTimeStartFromEvent(a))
																			}
																		},
																		onplayerError: function(e, n, r, i, a) {
																			t.stateMachineCallbacks.error(a)
																		}
																	}
																})
															}, t.prototype.callEvent = function(e, t, n) {
																var r = this.stateMachine[e];
																if (r) try {
																	r.call(this.stateMachine, n, t)
																} catch (n) {
																	c.logger.error("Exception occured in State Machine callback " + e, r, t, n)
																} else c.logger.log("Ignored Event: " + e)
															}, t.prototype.addStatesToLog = function(e, t, n, r, i) {
																this.enabledDebugging && this.debuggingStates.push(new u.EventDebugging(e, t, n, r, i))
															}, t.prototype.getStates = function() {
																return this.debuggingStates
															}, t.prototype.setEnabledDebugging = function(e) {
																this.enabledDebugging = e
															}, t
														}(f.AnalyticsStateMachine);
														t.Bitmovin8AnalyticsStateMachine = d
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Converter = void 0;
														var r = n(1),
															i = function() {
																function e() {}
																return e.bytesToBits = function(e) {
																	return 8 * e
																}, e.bitsToBytes = function(e) {
																	return Math.round(e / 8)
																}, e.bytesToKiloBytes = function(e) {
																	return r.calculateTime(1e3 * e)
																}, e.kiloBytesToMegaBytes = function(e) {
																	return 1e3 * e
																}, e
															}();
														t.Converter = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Measure = void 0;
														var r = function() {
															function e(e) {
																this.download = e
															}
															return Object.defineProperty(e.prototype, "speed", {
																get: function() {
																	return this.download.size / this.download.duration
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "duration", {
																get: function() {
																	return this.download.duration
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "size", {
																get: function() {
																	return this.download.size
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "timeToFirstByte", {
																get: function() {
																	return this.download.timeToFirstByte
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "timestamp", {
																get: function() {
																	return this.download.timestamp
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "httpStatus", {
																get: function() {
																	return this.download.httpStatus
																},
																enumerable: !1,
																configurable: !0
															}), e
														}();
														t.Measure = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.SegmentTracker = void 0;
														var r = function() {
															function e() {
																this.segments = []
															}
															return e.prototype.reset = function() {
																this.segments = []
															}, e.prototype.addSegment = function(e) {
																this.segments.push(e)
															}, e.prototype.removeSegment = function(e) {
																this.segments = this.segments.filter((function(t) {
																	return t.url !== e
																}))
															}, e.prototype.getSegments = function() {
																return this.segments
															}, e
														}();
														t.SegmentTracker = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.HttpRequestTracking = void 0;
														var r = n(0),
															i = n(62),
															a = function() {
																function e(t) {
																	var n = this;
																	this.subscribables = t, this._maxRequests = e.DEFAULT_MAX_REQUESTS, this._httpRequestQueue = new i.Queue, this.onDownloadFinishedHandler = function(e) {
																		try {
																			r.logger.log("HttpRequestTracking.onDownloadFinished: " + JSON.stringify(e.httpRequest)), n.addRequest(e.httpRequest)
																		} catch (e) {
																			r.logger.error("HttpRequestTracking.onDownloadFinished: Error in handler", e)
																		}
																	}, t.forEach((function(e) {
																		return e.subscribe(n.onDownloadFinishedHandler)
																	}))
																}
																return Object.defineProperty(e.prototype, "maxRequests", {
																	get: function() {
																		return this._maxRequests
																	},
																	enumerable: !1,
																	configurable: !0
																}), Object.defineProperty(e.prototype, "httpRequests", {
																	get: function() {
																		return this._httpRequestQueue.items
																	},
																	enumerable: !1,
																	configurable: !0
																}), e.prototype.configure = function(e) {
																	this._maxRequests = e, this._httpRequestQueue.limit(e)
																}, e.prototype.disable = function() {
																	var e = this;
																	this.subscribables.forEach((function(t) {
																		return t.unsubscribe(e.onDownloadFinishedHandler)
																	})), this._httpRequestQueue.clear()
																}, e.prototype.reset = function() {
																	this._httpRequestQueue.clear()
																}, e.prototype.addRequest = function(e) {
																	this._httpRequestQueue.offer(e), this._httpRequestQueue.limit(this._maxRequests)
																}, e.DEFAULT_MAX_REQUESTS = 10, e
															}();
														t.HttpRequestTracking = a
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Queue = void 0;
														var r = function() {
															function e() {
																this._items = []
															}
															return Object.defineProperty(e.prototype, "items", {
																get: function() {
																	return this._items
																},
																enumerable: !1,
																configurable: !0
															}), Object.defineProperty(e.prototype, "length", {
																get: function() {
																	return this._items.length
																},
																enumerable: !1,
																configurable: !0
															}), e.prototype.offer = function(e) {
																this._items.push(e)
															}, e.prototype.poll = function() {
																return this._items.shift()
															}, e.prototype.clear = function() {
																this._items.splice(0)
															}, e.prototype.limit = function(e) {
																for (; this._items.length > e;) this.poll()
															}, e
														}();
														t.Queue = r
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin8AdModule = void 0;
														var r = n(64),
															i = function() {
																function e(e, t) {
																	var n = this;
																	this.player = e, this.windowEventTracker = t, this.adCallbacks = new r.AdCallbacks, this.isLinearAdActive = function() {
																		return n.player.ads && n.player.ads.isLinearAdActive() || !1
																	}, this.getContainer = function() {
																		return n.player.getContainer()
																	}, this.getAdModuleInfo = function() {
																		return n.player.ads ? n.player.ads.getModuleInfo() : {
																			name: void 0,
																			version: void 0
																		}
																	}, this.currentTime = function() {
																		return n.player.getCurrentTime()
																	}, this.register()
																}
																return e.prototype.register = function() {
																	var e = this;
																	this.player.on(this.player.exports.PlayerEvent.Play, (function(t) {
																		"advertising-api" === t.issuer && e.adCallbacks.onPlay(t.issuer)
																	})), this.player.on(this.player.exports.PlayerEvent.Paused, (function(t) {
																		"advertising-api" === t.issuer && e.adCallbacks.onPause(t.issuer)
																	})), this.player.on(this.player.exports.PlayerEvent.AdStarted, (function(t) {
																		e.adCallbacks.onAdStarted(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdFinished, (function(t) {
																		e.adCallbacks.onAdFinished(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdBreakStarted, (function(t) {
																		e.adCallbacks.onAdBreakStarted(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdBreakFinished, (function(t) {
																		e.adCallbacks.onAdBreakFinished(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdClicked, (function(t) {
																		e.adCallbacks.onAdClicked(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdQuartile, (function(t) {
																		e.adCallbacks.onAdQuartile(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdSkipped, (function(t) {
																		e.adCallbacks.onAdSkipped(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdError, (function(t) {
																		e.adCallbacks.onAdError(t)
																	})), this.player.on(this.player.exports.PlayerEvent.AdManifestLoaded, (function(t) {
																		e.adCallbacks.onAdManifestLoaded(t)
																	}));
																	var t = function() {
																		e.adCallbacks.onBeforeUnload()
																	};
																	this.windowEventTracker.addEventListener("beforeunload", t), this.windowEventTracker.addEventListener("unload", t)
																}, e
															}();
														t.Bitmovin8AdModule = i
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.AdCallbacks = void 0, t.AdCallbacks = function() {
															this.onAdStarted = function(e) {}, this.onAdFinished = function(e) {}, this.onAdBreakStarted = function(e) {}, this.onAdBreakFinished = function(e) {}, this.onAdClicked = function(e) {}, this.onAdError = function(e) {}, this.onAdManifestLoaded = function(e) {}, this.onAdQuartile = function(e) {}, this.onAdSkipped = function(e) {}, this.onPlay = function(e) {}, this.onPause = function(e) {}, this.onBeforeUnload = function() {}
														}
													}, function(e, t, n) {
														"use strict";
														Object.defineProperty(t, "__esModule", {
															value: !0
														}), t.Bitmovin8HttpRequestTrackingAdapter = void 0;
														var r = n(19),
															i = n(66),
															a = n(1),
															o = function() {
																function e(e) {
																	var t = this;

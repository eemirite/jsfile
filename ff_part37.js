																this.fpsHandler = new i(this.context, this.video, t.config.drm.fairplay)
															}
															var a = e.createSourceElement(n, null);
															this.appendAndSetVideoStream(a, "0", t), this.trackLoading(a);
															var s = {
																element: a,
																handler: function(e) {
																	return r.handleStreamErrorEvent(o.ErrorCode.SOURCE_HLS_STREAM_ERROR, a.src, e)
																}
															};
															this.sourceElementEventListeners.push(s), s.element.addEventListener(x.MediaElementEvent.error, s.handler)
														}, e.prototype.setSourceAndLoadVideoElement = function(e, t) {
															this.setupVideoElement(e, t), this.loadVideoElement()
														}, e.prototype.setVideoForServiceWorker = function(e, t) {
															var n = this,
																i = $.URLHelper.appendQueryParametersToUrl(t, r(r({}, this.context.config.tweaks.query_parameters), {
																	"bitmovin-player-id": this.context.internalPlayerID
																}));
															return this.setSourceAndLoadVideoElement(e, i), this.hlsManifestController.resolveMasterManifest(e.url).then((function() {})).catch((function(e) {
																n.logger.debug("Couldn't access master playlist with ServiceWorker: ".concat(e))
															}))
														}, e.prototype.setVideoForNativeHLSParsing = function(e, t) {
															var n = this;
															return D.createHlsManifestController(this.context).then((function(r) {
																return n.hlsManifestController = r, n.settings.NATIVE_HLS_DOWNLOAD_ERROR_HANDLING && (n.downloadErrorHandler = new I.HlsDownloadErrorHandler(n.context, r)), D.shouldUseServiceWorker(n.context) ? n.setVideoForServiceWorker(e, t) : n.hlsManifestController.resolveMasterManifest(e.url).then((function(t) {
																	0 !== t.indexOf("data") && 0 !== t.indexOf("blob") || n.setSourceAndLoadVideoElement(e, t)
																})).catch((function(e) {
																	n.logger.debug("Couldn't access master playlist for native HLS parsing: ".concat(e))
																}))
															}))
														}, e.prototype.loadHls = function(e) {
															"string" != typeof e.url && this.eventHandler.fireError(new s.PlayerError(o.ErrorCode.SOURCE_INVALID, {
																given: e.url
															}, "Cannot load the HLS playlist: the source URL should be a string."));
															var t = this.adjustUrlForQueryParams(e.url);
															return this.settings.NATIVE_HLS_PARSING ? this.setVideoForNativeHLSParsing(e, t) : (this.setSourceAndLoadVideoElement(e, t), Promise.resolve())
														}, e.prototype.loadProgressive = function(e, t) {
															var n, r = this,
																i = !1;
															Array.isArray(e.url) ? n = e.url : (n = [{
																url: e.url,
																bitrate: 0
															}], i = !0), t = t || function(e) {
																var t = e.findIndex((function(e) {
																	return !0 === e.preferred
																}));
																return t > -1 ? String(t) : "0"
															}(n), this.availableVideoStreams = [];
															var a = this.loadAllSupportedProgressiveSources(n, t, !i);
															if (a) {
																var s = {
																	element: a,
																	handler: function(e) {
																		return r.handleStreamErrorEvent(o.ErrorCode.SOURCE_PROGRESSIVE_STREAM_ERROR, a.src, e)
																	}
																};
																this.sourceElementEventListeners.push(s), s.element.addEventListener(x.MediaElementEvent.error, s.handler), this.restrictedInlinePlayback && this.audio && this.audio.load(), this.trackLoading(a)
															}
															return Promise.resolve()
														}, e.prototype.handleStreamErrorEvent = function(e, t, n) {
															var r = this;
															clearTimeout(this.loadTimeoutID), this.loaded = !0, this.logger.debug("Caught a stream error event (".concat(e, ", ").concat(t, ")"), n), this.loadingDeferred.reject(), new _.DefaultContentLoader(this.context).load(t).then((function(e) {
																return {
																	status: e.status,
																	statusText: e.statusText,
																	error: void 0
																}
															})).catch((function(e) {
																return {
																	error: e,
																	status: (null == e ? void 0 : e.status) || 0,
																	statusText: (null == e ? void 0 : e.statusText) || ""
																}
															})).then((function(i) {
																var a, o, u = i.error,
																	c = i.status,
																	l = i.statusText,
																	f = (null == n ? void 0 : n.message) || n;
																200 !== c ? (o = {
																	event: n,
																	error: u,
																	status: c,
																	statusText: l,
																	src: t,
																	extraMessage: f
																}, r.logger.debug("last/only source has thrown an error ".concat(c, " - ").concat(l), o)) : (o = {
																	event: n,
																	error: u,
																	src: t,
																	extraMessage: f
																}, r.logger.debug("last/only source has thrown an error, but we are able to download the asset during the error handling.", o)), null === (a = r.eventHandler) || void 0 === a || a.fireError(new s.PlayerError(e, o, "The video element has thrown an error while loading the stream."))
															}))
														}, e.prototype.loadAllSupportedProgressiveSources = function(t, n, r) {
															for (var i, a = [], o = -1, s = null, u = null, c = 0; c < t.length; c++) {
																var l = t[c];
																if (!this.shouldIgnoreSourceObject(l, u, r)) {
																	if (i = e.createSourceElement(this.adjustUrlForQueryParams(l.url), l.type), u = u || l.type, this.addStreamToAvailableOnes(String(c), l), r) {
																		if (a.indexOf(l.type) > -1) {
																			this.logger.debug("Stream of mime type ".concat(l.type, " already added.. continuing"));
																			continue
																		}
																		n === String(c) ? (s = i, o = l.bitrate, this.appendAndSetVideoStream(i, String(c), l), a.push(l.type)) : o === l.bitrate && (s = i, this.appendVideoStream(i), a.push(l.type))
																	} else s = i, this.appendAndSetVideoStream(i, String(c), l);
																	this.restrictedInlinePlayback && this.audio && (this.audio.innerHTML = this.video.innerHTML)
																}
															}
															return s
														}, e.prototype.shouldIgnoreSourceObject = function(t, n, r) {
															return !e.isValidProgressiveSourceObject(t) || !!r && (!this.isMimeTypeSupported(t.type) || !!n && n !== t.type)
														}, e.isValidProgressiveSourceObject = function(e) {
															return "object" == typeof e && e && e.url && "" !== e.url
														}, e.prototype.appendAndSetVideoStream = function(e, t, n) {
															this.video.appendChild(e), this.setCurrentVideoStream(t, n)
														}, e.prototype.appendVideoStream = function(e) {
															this.video.appendChild(e)
														}, e.prototype.addStreamToAvailableOnes = function(e, t) {
															var n = {
																id: e
															};
															t.bitrate && (n.bitrate = t.bitrate), n.label = String(t.label || t.bitrate || "unknown"), this.availableVideoStreams.push(n)
														}, e.prototype.setCurrentVideoStream = function(e, t) {
															this.currentVideoStream = {
																id: e
															}, t.bitrate && (this.currentVideoStream.bitrate = t.bitrate), this.currentVideoStream.label = "" + (t.label || t.bitrate || "unknown")
														}, e.prototype.isMimeTypeSupported = function(e) {
															return !(this.video.canPlayType(e).length <= 0 && (this.logger.debug("Mime type" + e + " not supported.. continuing"), 1))
														}, e.createSourceElement = function(e, t) {
															var n = document.createElement("source");
															return n.src = e, t && (t.indexOf("/") < 0 && (t = "video/" + t), n.type = t), n
														}, e.prototype.unload = function(e, t) {
															var n;
															return void 0 === e && (e = "api"), void 0 === t && (t = !1), this.hlsLiveTimeTracker.onUnload(e), this.clearDelayedSeekHandlers(), this.loadingDeferred && !t && this.loadingDeferred.reject(), clearTimeout(this.loadedDataFallbackTimeoutID), clearTimeout(this.loadTimeoutID), this.ended = !1, this.fpsHandler = (0, f.dispose)(this.fpsHandler), this.downloadErrorHandler = (0, f.dispose)(this.downloadErrorHandler), this.hlsManifestController = (0, f.dispose)(this.hlsManifestController), this.hlsSeekingGlitchEventHandlers.forEach((function(e) {
																return e.el.removeEventListener(e.ev, e.fn)
															})), this.hlsSeekingGlitchEventHandlers = [], this.isProgressiveQualityChange || (null === (n = this.textTrackController) || void 0 === n || n.signalSourceChange(), this.textTrackController = (0, f.dispose)(this.textTrackController)), this.clearVideoElement(), this.clearAudioElement(), this.pause(), this.ignoreNextVideoError = !0, this.clearEventListeners(), this.unsubscribeFromStoreStoppedListener && this.unsubscribeFromStoreStoppedListener(), this.allowedToThrowEvents && (this.currentVideoStream = null), this.loaded && (this.loaded = !1, t || (this.eventCallback(d.PlayerEvent.SourceUnloaded, {
																oldSource: this.currentSource
															}), this.lastDuration = null)), Promise.resolve()
														}, e.prototype.clearAudioElement = function() {
															if (this.restrictedInlinePlayback && this.audio) {
																for (this.audio.removeAttribute("src"); this.audio.firstChild;) this.audio.removeChild(this.audio.firstChild);
																this.audio.load()
															}
														}, e.prototype.clearEventListeners = function() {
															this.restrictedInlinePlayback ? this.audio && this.removeEventListeners(this.audio) : this.removeEventListeners(this.video), this.clearDelayedSeekHandlers(), this.eventHandler.off(d.PlayerEvent.TimeChanged, this.onTimeChanged), this.eventHandler.off(d.PlayerEvent.TimeChanged, this.delayedSeek), this.sourceElementEventListeners.forEach((function(e) {
																try {
																	e.element.removeEventListener(x.MediaElementEvent.error, e.handler)
																} catch (e) {}
															}))
														}, e.prototype.clearVideoElement = function() {
															O.VideoElementUtil.removeSource(this.video), null != this.originalCrossOriginAttributeValue ? this.video.setAttribute("crossOrigin", this.originalCrossOriginAttributeValue) : this.video.removeAttribute("crossOrigin"), this.video.load()
														}, e.prototype.isReady = function() {
															return this.restrictedInlinePlayback && this.audio && "readyState" in this.audio ? this.audio.readyState !== HTMLMediaElement.HAVE_NOTHING : !("readyState" in this.video) || this.video.readyState !== HTMLMediaElement.HAVE_NOTHING
														}, e.prototype.isLive = function() {
															return this.getElement().duration === 1 / 0
														}, e.prototype.isPlaying = function() {
															return this.stateManager.isPlaying()
														}, e.prototype.isPaused = function() {
															return this.stateManager.isPaused()
														}, e.prototype.hasEnded = function() {
															return this.ended
														}, e.prototype.isMuted = function() {
															return this.getElement().muted
														}, e.prototype.isStalled = function() {
															return this.stateManager.isStalled
														}, e.prototype.getVolume = function() {
															return 100 * this.getElement().volume
														}, e.prototype.getDuration = function() {
															return this.getElement().duration
														}, e.prototype.convertAudioTrackNativeToApi = function(e) {
															var t = {
																	id: e.id || String(S.ArrayHelper.toArray(this.video.audioTracks).indexOf(e)),
																	label: e.label,
																	lang: e.language,
																	getQualities: null
																},
																n = this.getLabelForAudio(t);
															return n && "string" == typeof n && (t.label = n), t
														}, e.prototype.getAudio = function() {
															var e = S.ArrayHelper.toArray(this.video.audioTracks).find((function(e) {
																return e.enabled
															}));
															return e ? this.convertAudioTrackNativeToApi(e) : null
														}, e.prototype.getAvailableAudio = function() {
															var e = this;
															return S.ArrayHelper.toArray(this.video.audioTracks).map((function(t) {
																return e.convertAudioTrackNativeToApi(t)
															}))
														}, e.prototype.getLabelForAudio = function(e) {
															var t = {
																id: e.id,
																lang: e.lang
															};
															return this.getLabelingFunctionForAudio()(t)
														}, e.prototype.getLabelingFunctionForAudio = function() {
															var t = this.context.sourceContext,
																n = t && t.source && t.source.labeling;
															return n && n[this.type] && n[this.type].tracks ? "function" != typeof n[this.type].tracks ? e.getDefaultLabelForAudio : n[this.type].tracks : e.getDefaultLabelForAudio
														}, e.getDefaultLabelForAudio = function() {
															return null
														}, e.prototype.getDownloadedVideoData = function() {
															return this.type === b.StreamType.Progressive ? this.currentVideoStream : this.hlsManifestController ? this.hlsManifestController.getDownloadedVideoData() : {
																id: N,
																bitrate: 0,
																height: 0,
																width: 0,
																isAuto: !0
															}
														}, e.prototype.getDownloadedAudioData = function() {
															return {
																id: N,
																bitrate: 0,
																isAuto: this.type === b.StreamType.Progressive
															}
														}, e.prototype.createVideoQualityObject = function(e) {
															var t = {};
															return t.id = e.id, t.label = e.label, e.width > 1 ? t.width = e.width : this.currentVideoStream && this.currentVideoStream.id === e.id && (this.currentVideoStream.width > 1 ? t.width = this.currentVideoStream.width : !isNaN(this.video.videoWidth) && this.video.videoWidth > 1 && (t.width = this.video.videoWidth)), e.height > 1 ? t.height = e.height : this.currentVideoStream && this.currentVideoStream.id === e.id && (this.currentVideoStream.height > 1 ? t.height = this.currentVideoStream.height : !isNaN(this.video.videoHeight) && this.video.videoHeight > 1 && (t.height = this.video.videoHeight)), void 0 !== e.bitrate && "unknown" !== e.bitrate && (t.bitrate = e.bitrate), t
														}, e.prototype.getPlaybackVideoData = function() {
															if (this.hlsManifestController) {
																var e = this.hlsManifestController.getPlayingVideoData();
																if (e) return e
															}
															if (this.currentVideoStream) {
																var t = this.createVideoQualityObject(this.currentVideoStream);
																return "progressive" !== this.type && (t.id = N), t
															}
															return {
																id: N,
																bitrate: 0,
																height: this.video.videoHeight,
																width: this.video.videoWidth
															}
														}, e.prototype.getPlaybackAudioData = function() {
															return {
																id: N,
																bitrate: 0
															}
														}, e.prototype.getMaxTimeShift = function() {
															var e = this.getSeekableRangeInternal();
															return this.isLive() && e.start >= 0 ? e.start - e.end : 0
														}, e.prototype.timeShift = function(e, t) {
															if (this.isTimeShiftingAllowed() && this.isTimeShiftNecessary(e, t))
																if (0 === e) {
																	var n = this.getSeekableRangeInternal();
																	n.end >= 0 && this.seekForLive(n.end)
																} else this.seekForLive(e, t)
														}, e.prototype.isTimeShiftNecessary = function(e, t) {
															if (t === p.STARTUP_ISSUER_NAME && ! function(e) {
																	return null != (null == e ? void 0 : e.startTime) || null != (null == e ? void 0 : e.startOffset)
																}(this.context.sourceContext.source.options)) return !1;
															var n = Math.abs(Math.abs(e) - Math.abs(this.getTimeShift())),
																r = this.isOffsetConsideredAsLiveEdge(e);
															return n > .25 && !(this.isAtLiveEdge && r)
														}, e.prototype.getTimeShift = function() {
															if (this.shouldReturnDefaultTimeshiftValue()) return 0;
															var e = this.getSeekableRangeInternal();
															if (e.start >= 0 && this.needToUpdateTimeshiftValue()) {
																var t = U(this.getElement().currentTime - e.end, this.getTimeshiftRange());
																this.isAtLiveEdge = this.isOffsetConsideredAsLiveEdge(t) && !this.isStalledOrPaused(), this.currentTimeShift = this.isAtLiveEdge ? 0 : t
															}
															return isFinite(this.currentTimeShift) ? this.currentTimeShift : 0
														}, e.prototype.shouldReturnDefaultTimeshiftValue = function() {
															return !this.isLive() || !this.stateManager.hasBeenPlaying && !this.stateManager.seekedOrTimeshifted || this.isAtLiveEdge
														}, e.prototype.isStalledOrPaused = function() {
															return this.isStalled() || this.isPaused()
														}, e.prototype.needToUpdateTimeshiftValue = function() {
															return !isFinite(this.currentTimeShift) || this.isStalledOrPaused()
														}, e.prototype.getManifest = function() {
															return this.hlsManifestController ? this.hlsManifestController.getManifest() : null
														}, e.prototype.getSnapshot = function(e, t) {
															if (this.isPlaying() || this.isPaused()) {
																var n = this.video.videoWidth,
																	r = this.video.videoHeight;
																if (this.snapshotCanvas || (this.snapshotCanvas = document.createElement("canvas"), this.snapshotCanvas.id = "snapshotHiddenCanvas"), !this.snapshotCanvas || !this.snapshotCanvas.getContext || !this.snapshotCanvas.getContext("2d")) return;
																this.snapshotCanvas.height = r, this.snapshotCanvas.width = n, this.snapshotCanvasContext = this.snapshotCanvas.getContext("2d"), this.snapshotCanvasContext.drawImage(this.video.getWrappedElement(), 0, 0, n, r);
																var i = void 0;
																try {
																	"image/jpeg" === e || "image/webp" === e ? (Number(t) === t ? (t < 0 || t > 1) && (t = 1) : t = 1, i = this.snapshotCanvas.toDataURL(e, t)) : i = this.snapshotCanvas.toDataURL(e, t)
																} catch (e) {
																	return void(e && e.message ? this.logger.debug("Snapshot acquisition failed: " + e.message) : this.logger.debug("Snapshot acquisition failed"))
																}
																return {
																	height: r,
																	width: n,
																	data: i
																}
															}
														}, e.prototype.setPlaybackSpeed = function(e) {
															this.getElement().playbackRate = e
														}, e.prototype.getPlaybackSpeed = function() {
															return this.getElement().playbackRate
														}, e.prototype.permitControl = function(e) {
															this.controlPermitted = e
														}, e.prototype.resetTimeShift = function() {
															this.currentTimeShift = -1 / 0, this.isTimeShiftingAllowed() && (this.isAtLiveEdge = !1)
														}, e.prototype.isOffsetConsideredAsLiveEdge = function(e) {
															return Math.abs(e) < 2 * this.settings.SEEK_TO_END_OFFSET
														}, e.prototype.isSeekTargetChangedDuringStartup = function() {
															return this.seekTargetTime !== this.lastVerifiedPlaybackPosition && this.lastSeekIssuer === p.STARTUP_ISSUER_NAME
														}, e.prototype.maybeHandleSeekTargetChangeDuringStartup = function() {
															this.isSeekTargetChangedDuringStartup() && (this.context.logger.debug("Seek target changed during startup..."), this.triggerSeekEvent(this.seekTargetTime), this.lastSeekIssuer = "api", this.seekTargetTime = -1)
														}, e.prototype.finishedSeekedTransitionState = function() {
															this.stateManager.isSeeking() && (this.stateManager.transitionToSeekedState(this.lastSeekIssuer !== p.STARTUP_ISSUER_NAME), this.lastSeekIssuer = "api"), this.stateManager.isTimeShifting() && this.stateManager.transitionToTimeShiftedState(this.lastSeekIssuer !== p.STARTUP_ISSUER_NAME)
														}, e.prototype.addEventListeners = function(e) {
															for (var t = 0; t < this.elementEvents.length; t++) {
																var n = this.elementEvents[t].elementSelector ? this.elementEvents[t].elementSelector(e) : e;
																n && n.addEventListener(this.elementEvents[t].event, this.elementEvents[t].handler)
															}
														}, e.prototype.removeEventListeners = function(e) {
															for (var t = 0; t < this.elementEvents.length; t++) {
																var n = this.elementEvents[t].elementSelector ? this.elementEvents[t].elementSelector(e) : e;
																n && n.removeEventListener && n.removeEventListener(this.elementEvents[t].event, this.elementEvents[t].handler)
															}
														}, e.prototype.getBufferLevel = function(e) {
															var t = {
																	level: null,
																	targetLevel: null,
																	type: e,
																	media: b.MediaType.Video
																},
																n = this.getElement(),
																r = n.currentTime;
															if (n.buffered && n.buffered.length > 0)
																for (var i = 0; i < n.buffered.length; i++) {
																	var a = n.buffered.start(i),
																		o = n.buffered.end(i);
																	a > r || o <= r || (t.level = o - r, e === b.BufferType.BackwardDuration && (t.level = r - a))
																}
															return t
														}, e.prototype.createTextTrackController = function() {
															if (P.ModuleManager.has(M.ModuleName.SubtitlesNative)) return new(0, P.ModuleManager.get(M.ModuleName.SubtitlesNative).TextTrackController)(this.context, this.video, this.config, this.type);
															this.logger.log("Unable to create native SubtitleController because the ".concat(M.ModuleName.SubtitlesNative, " module is missing"))
														}, e.prototype.removeSubtitle = function(e) {
															e && this.textTrackController && this.textTrackController.removeSubtitle(e)
														}, e.prototype.addSubtitle = function(e) {
															return this.textTrackController ? (this.removeSubtitle(e.id), e.kind = "subtitles", this.textTrackController.addSubtitle(e)) : Promise.reject()
														}, e.prototype.listSubtitles = function() {
															return this.textTrackController ? this.textTrackController.getAvailableSubtitles() : []
														}, e.prototype.enableSubtitle = function(e) {
															return this.textTrackController ? this.textTrackController.enableSubtitle(e) : Promise.resolve(!1)
														}, e.prototype.disableSubtitle = function(e) {
															return this.textTrackController ? Promise.resolve(this.textTrackController.disableSubtitle(e)) : Promise.resolve(!1)
														}, e.prototype.init = function() {
															this.initAirplay()
														}, e.prototype.adjustUrlForQueryParams = function(e) {
															return $.URLHelper.appendQueryParametersToUrl(e, this.settings.QUERY_PARAMETERS)
														}, e.prototype.onFullscreenEnter = function(e) {
															this.textTrackController && (0, y.getCapabilities)().isIOS && !e.legacy && this.textTrackController.enableNative()
														}, e.prototype.onFullscreenExit = function() {
															this.textTrackController && (0, y.getCapabilities)().isIOS && this.textTrackController.disableNative()
														}, e.prototype.getAvailableVideoQualities = function() {
															var e = this;
															return "progressive" !== this.type ? [] : this.availableVideoStreams.map((function(t) {
																return e.createVideoQualityObject(t)
															}))
														}, e.prototype.getBufferedRanges = function() {
															return (0, a.getBufferedRanges)(this.getElement())
														}, e.prototype.setVideoQuality = function(e) {
															var t = this,
																n = this.getPlaybackSpeed(),
																i = this.availableVideoStreams.find((function(t) {
																	return t.id === e
																}));
															if ("progressive" === this.type && i && (!this.currentVideoStream || this.currentVideoStream.id !== e)) {
																this.isProgressiveQualityChange = !0, this.currentTimeWas = this.getCurrentTime(), this.availableVideoStreams = [], this.allowedToThrowEvents = !1;
																var a = this.stateManager.isPlaying() || this.stateManager.isPlay();
																this.stateManager.stallEnter(), this.unload("api", !0).catch((function() {}));
																var o = this.createVideoQualityObject(i),
																	s = {
																		sourceQuality: this.currentVideoStream,
																		sourceQualityId: this.currentVideoStream ? this.currentVideoStream.id : null,
																		targetQuality: o,
																		targetQualityId: o.id
																	};
																this.eventHandler.one(d.PlayerEvent.StallEnded, (function() {
																	t.allowedToThrowEvents = !0, (0, y.getCapabilities)().isIOS || (0, y.getCapabilities)().isSafari ? (t.numTimeChanged = 0, t.eventHandler.on(d.PlayerEvent.TimeChanged, t.delayedSeek)) : (t.numTimeChanged = 1 / 0, t.delayedSeek()), a && (t.play(p.INTERNAL_ISSUER_NAME).catch((function() {
																		t.eventCallback(d.PlayerEvent.Warning, new u.PlayerWarning(c.WarningCode.PLAYBACK_COULD_NOT_BE_STARTED))
																	})), t.stateManager.transitionToPlayingState(p.INTERNAL_ISSUER_NAME, !1))
																})), this.eventCallback(d.PlayerEvent.VideoQualityChanged, r({}, s), !0), this.init(), this.load(this.sourceConfig, "", this.settings.GLOBAL_DISABLE_SEEKING, e).then((function() {
																	t.setPlaybackSpeed(n), t.eventCallback(d.PlayerEvent.VideoDownloadQualityChange, r({}, s), !0), t.eventCallback(d.PlayerEvent.VideoDownloadQualityChanged, r({}, s), !0), t.eventCallback(d.PlayerEvent.VideoPlaybackQualityChanged, {
																		sourceQuality: s.sourceQuality,
																		targetQuality: s.targetQuality
																	}, !0)
																}))
															}
														}, e.prototype.initAirplay = function() {
															this.video.setAttribute("x-webkit-airplay", "allow"), window.WebKitPlaybackTargetAvailabilityEvent && (this.video.addEventListener(x.MediaElementEvent.webkitplaybacktargetavailabilitychanged, this.onWebkitPlaybackTargetAvailabilityChanged), this.video.addEventListener(x.MediaElementEvent.webkitcurrentplaybacktargetiswirelesschanged, this.onWebkitPlaybackTargetIsWirelessChanged))
														}, e.prototype.isAirplayAvailable = function() {
															return this.airplayAvailable
														}, e.prototype.isAirplayActive = function() {
															return this.video.isAirplayActive()
														}, e.prototype.showAirplayTargetPicker = function() {
															this.isAirplayAvailable() && (this.video.webkitShowPlaybackTargetPicker(), this.eventCallback(d.PlayerEvent.ShowAirplayTargetPicker))
														}, e.prototype.getTimeshiftRange = function() {
															return this.isLive() ? {
																start: this.getMaxTimeShift(),
																end: 0
															} : {
																start: -1,
																end: -1
															}
														}, e.prototype.getSeekableRangeInternal = function() {
															var e = this.video.seekable;
															if (e.length > 0) {
																var t = {
																	start: e.start(0),
																	end: e.end(0)
																};
																return t.start = Math.max(0, t.start), t
															}
															return {
																start: -1,
																end: -1
															}
														}, e.prototype.getSeekableRange = function() {
															return !this.isLive() || this.settings.ENABLE_SEEK_FOR_LIVE ? this.getSeekableRangeInternal() : {
																start: -1,
																end: -1
															}
														}, e.prototype.createManifestApi = function() {
															return this.hlsManifestController ? B.NativePlayerManifestApiFactory.create(this.hlsManifestController) : null
														}, e.prototype.release = function() {
															var e = this,
																t = this.unload("api").catch((function() {}));
															return clearTimeout(this.loadTimeoutID), this.video.removeEventListener(x.MediaElementEvent.webkitplaybacktargetavailabilitychanged, this.onWebkitPlaybackTargetAvailabilityChanged), this.video.removeEventListener(x.MediaElementEvent.webkitcurrentplaybacktargetiswirelesschanged, this.onWebkitPlaybackTargetIsWirelessChanged), t = t.then((function() {
																e.type = null, e.config = null, e.eventHandler = null, e.settings = null, e.currentTimeWas = null, e.snapshotCanvas = null, e.snapshotCanvasContext = null, e.audio = null, e.video = null, e.lastPlayIssuer = null, e.lastPauseIssuer = null, e.lastSeekIssuer = null, e.currentSource = null, e.sourceConfig = null, e.currentVideoStream = null, e.availableVideoStreams = null, e.sourceElementEventListeners = null
															})), this.textTrackController && this.textTrackController.dispose(), this.textTrackController = null, this.fpsHandler && this.fpsHandler.dispose(), this.fpsHandler = null, this.downloadErrorHandler && this.downloadErrorHandler.dispose(), this.downloadErrorHandler = null, this.hlsManifestController && this.hlsManifestController.dispose(), this.hlsManifestController = null, t
														}, e.prototype.setQueryParameters = function(e) {
															this.settings.QUERY_PARAMETERS = e
														}, e.prototype.clearQueryParameters = function() {
															this.settings.QUERY_PARAMETERS = void 0
														}, e.prototype.setAudioQuality = function(e) {}, e.prototype.setTargetBufferLevel = function() {}, e.prototype.getAvailableAudioQualities = function() {
															return []
														}, e.prototype.getDroppedVideoFrames = function() {
															return 0
														}, e.prototype.getTotalStalledTime = function() {
															return 0
														}, e.prototype.updateCallback = function(e) {}, e.prototype.getAvailableSegments = function() {
															return {}
														}, e.prototype.getLatency = function() {
															return null
														}, e.prototype.setTargetLatency = function(e) {}, e.prototype.getTargetLatency = function() {
															return null
														}, e.prototype.setCatchupConfig = function(e) {}, e.prototype.getCatchupConfig = function() {
															return null
														}, e.prototype.setFallbackConfig = function(e) {}, e.prototype.getFallbackConfig = function() {
															return null
														}, i([(0, m.trackPerformance)("NativePlayer.load", !0)], e.prototype, "load", null), e
													}();

												function U(e, t) {
													return (e < t.start || e > t.end) && (e = Math.max(e, t.start), e = Math.min(e, t.end)), e
												}
												t.NativePlayer = F
											},
											16958: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.NativePlayerManifestApiFactory = void 0;
												var r = n(46381),
													i = function() {
														function e() {}
														return e.create = function(t) {
															var n = t.getParsedManifest();
															return t.isValidMasterPlaylist(n) ? new function() {
																this.hls = e.createHlsApi(t)
															} : null
														}, e.createHlsApi = function(t) {
															var n = t.getParsedManifest(),
																r = n.media.filter((function(e) {
																	return "AUDIO" === e.attributes.TYPE
																})),
																i = n.media.filter((function(e) {
																	return "SUBTITLES" === e.attributes.TYPE || "CLOSED-CAPTIONS" === e.attributes.TYPE
																}));
															return new(function() {
																function a() {
																	this.properties = t.getParsedManifest().tags
																}
																return a.prototype.getVideoTracks = function() {
																	return e.getVideoTracks(n.playlists)
																}, a.prototype.getAudioTracks = function() {
																	return e.getAudioTracks(r, n.playlists)
																}, a.prototype.getTextTracks = function() {
																	return e.getTextTracks(i)
																}, a
															}())
														}, e.getAudioTracks = function(e, t) {
															var n = e.reduce((function(e, t) {
																	return e[t.attributes.LANGUAGE] || (e[t.attributes.LANGUAGE] = t.attributes.NAME), e
																}), {}),
																i = Object.keys(n).map((function(t, r) {
																	return {
																		id: "audio-".concat(r),
																		label: n[t],
																		lang: t,
																		getQualities: function() {
																			return e.filter((function(e) {
																				return e.attributes.LANGUAGE === t
																			})).map((function(e, t) {
																				return {
																					id: t + "",
																					bitrate: 0,
																					label: e.attributes.NAME
																				}
																			}))
																		}
																	}
																})),
																a = function(e) {
																	return e.attributes.CODECS && r.CodecStringHelper.getMimeTypeForCodecString(e.attributes.CODECS).includes("audio")
																};
															return t.some(a) && i.push({
																id: "audio-".concat(i.length),
																label: "und",
																lang: "",
																getQualities: function() {
																	return t.filter(a).map((function(e, t) {
																		return {
																			id: t + "",
																			bitrate: e.attributes.BANDWIDTH,
																			codec: r.CodecStringHelper.extractCodecStrings(e.attributes.CODECS).audio
																		}
																	}))
																}
															}), i
														}, e.getVideoTracks = function(t) {
															var n = t.filter((function(e) {
																return !e.attributes.CODECS || r.CodecStringHelper.getMimeTypeForCodecString(e.attributes.CODECS).includes("video")
															}));
															return [{
																id: "video-0",
																label: "und",
																getQualities: function() {
																	return e.getVideoQualities(n)
																}
															}]
														}, e.getTextTracks = function(e) {
															return e.map((function(e, t) {
																return {
																	id: "text-".concat(t),
																	label: e.attributes.NAME,
																	lang: e.attributes.LANGUAGE,
																	isFragmented: !0,
																	kind: "CLOSED-CAPTIONS" === e.attributes.TYPE ? "caption" : "subtitle",
																	url: e.attributes.URI
																}
															}))
														}, e.getVideoQualities = function(e) {
															return e.map((function(e) {
																var t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
																	n = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
																	i = {
																		id: n ? "".concat(n, "_").concat(e.attributes.BANDWIDTH) : "".concat(e.attributes.BANDWIDTH),
																		bitrate: e.attributes.BANDWIDTH,
																		width: t || 0,
																		height: n || 0
																	};
																if (e.attributes.CODECS) {
																	var a = r.CodecStringHelper.extractCodecStrings(e.attributes.CODECS);
																	a.video && (i.codec = a.video)
																}
																return i
															}))
														}, e
													}();
												t.NativePlayerManifestApiFactory = i
											},
											31488: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TechnologyChecker = void 0;
												var r = n(8833),
													i = function() {
														function e() {}
														return e.prototype.getSupportedTechnologies = function() {
															return [{
																player: r.PlayerType.Native,
																streaming: r.StreamType.Progressive
															}, {
																player: r.PlayerType.Native,
																streaming: r.StreamType.Hls
															}, {
																player: r.PlayerType.Native,
																streaming: r.StreamType.Dash
															}]
														}, e
													}();
												t.TechnologyChecker = i
											}
										},
										function(e) {
											return e(e.s = 36709)
										}
									])
								},
								791: function(e) {
									"use strict";
									self, e.exports = (self.webpackChunkbitmovin_player_name_ = self.webpackChunkbitmovin_player_name_ || []).push([
										[817], {
											18873: function(e, t, n) {
												var r = this && this.__extends || function() {
													var e = function(t, n) {
														return (e = Object.setPrototypeOf || {
																__proto__: []
															}
															instanceof Array && function(e, t) {
																e.__proto__ = t
															} || function(e, t) {
																for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
															})(t, n)
													};
													return function(t, n) {
														if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

														function r() {
															this.constructor = t
														}
														e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
													}
												}();
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsUtils = void 0;
												var i = n(59574),
													a = n(81349),
													o = n(3988),
													s = function() {
														var e = this;
														this.on = function(t, n) {
															e.listeners.hasOwnProperty(t) || (e.listeners[t] = []), e.listeners[t].push(n)
														}, this.off = function(t, n) {
															if (!e.listeners.hasOwnProperty(t)) return !1;
															var r = e.listeners[t].indexOf(n);
															return r > -1 && (e.listeners[t].splice(r, 1), !0)
														}, this.trigger = function(t) {
															for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
															e.listeners.hasOwnProperty(t) && e.listeners[t].forEach((function(e) {
																return e.apply(null, n)
															}))
														}, this.pipe = function(t) {
															e.on("data", (function(e) {
																t.push(e)
															}))
														}, this.dispose = function() {
															e.listeners = {}
														}, this.listeners = {}
													},
													u = function(e) {
														function t() {
															var t = e.call(this) || this;
															return t.buffer = "", t
														}
														return r(t, e), t.prototype.push = function(e) {
															this.buffer += e;
															for (var t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
														}, t
													}(s),
													c = function(e) {
														function t() {
															return e.call(this) || this
														}
														return r(t, e), t.parseAttributes = function(e) {
															for (var n = e.split(t.attributeSeparator), r = n.length, i = {}; r--;)
																if ("" !== n[r]) {
																	var a = /([^=]*)=(.*)/.exec(n[r]).slice(1);
																	a[0] = a[0].replace(/^\s+|\s+$/g, ""), a[1] = a[1].replace(/^\s+|\s+$/g, ""), a[1] = a[1].replace(/^['"](.*)['"]$/g, "$1"), i[a[0]] = a[1]
																} return i
														}, t.prototype.push = function(e) {
															var n, r;
															if (0 !== (e = e.replace(/^[\u0000\s]+|[\u0000\s]+$/g, "")).length)
																if ("#" === e[0])
																	if (e = e.replace("\r", ""), n = /^#EXTM3U/.exec(e)) this.trigger("data", {
																		type: "tag",
																		tagType: "m3u"
																	});
																	else if (n = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(e)) this.trigger("data", {
																type: "tag",
																tagType: "independent-segments"
															});
															else {
																if (n = /^#EXT-X-MEDIA:(.*)$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "media"
																}, n[1] && (r.attributes = t.parseAttributes(n[1])), void this.trigger("data", r);
																if (n = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "inf"
																}, n[1] && (r.duration = parseFloat(n[1])), n[2] && (r.title = n[2]), void this.trigger("data", r);
																if (n = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "targetduration"
																}, n[1] && (r.duration = parseInt(n[1], 10)), void this.trigger("data", r);
																if (n = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "version"
																}, n[1] && (r.version = parseInt(n[1], 10)), void this.trigger("data", r);
																if (n = /^#EXT-X-START:(.*)$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "start"
																}, n[1] && (r.attributes = t.parseAttributes(n[1])), void this.trigger("data", r);
																if (n = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "media-sequence"
																}, n[1] && (r.number = parseInt(n[1], 10)), void this.trigger("data", r);
																if (n = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "discontinuity-sequence"
																}, n[1] && (r.number = parseInt(n[1], 10)), void this.trigger("data", r);
																if (n = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "playlist-type"
																}, n[1] && (r.playlistType = n[1]), void this.trigger("data", r);
																if (n = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "byterange"
																}, n[1] && (r.length = parseInt(n[1], 10)), n[2] && (r.offset = parseInt(n[2], 10)), void this.trigger("data", r);
																if (n = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return r = {
																	type: "tag",
																	tagType: "allow-cache"
																}, n[1] && (r.allowed = !/NO/.test(n[1])), void this.trigger("data", r);
																if (n = /^#EXT-X-SESSION-DATA:?(.*)$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "session-data"
																}, n[1] && (r.attributes = t.parseAttributes(n[1])), void this.trigger("data", r);
																if (n = /^#EXT-X-SESSION-KEY:?(.*)$/.exec(e)) return r = {
																	type: "tag",
																	tagType: "session-key"
																}, n[1] && (r.attributes = t.parseAttributes(n[1]), r.attributes.IV && (r.attributes.IV = r.attributes.IV.toLowerCase(), "0x" === r.attributes.IV.substring(0, 2) && (r.attributes.IV = r.attributes.IV.substring(2)), r.attributes.IV = new Uint8Array(o.FormatHelper.hexToBytes(r.attributes.IV)).buffer)), void this.trigger("data", r);
																if (n = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
																	if (r = {
																			type: "tag",
																			tagType: "stream-inf"
																		}, n[1]) {
																		if (r.attributes = t.parseAttributes(n[1]), r.attributes.RESOLUTION) {
																			var i = {};
																			(a = r.attributes.RESOLUTION.split("x"))[0] && (i.width = parseInt(a[0], 10)), a[1] && (i.height = parseInt(a[1], 10)), r.attributes.RESOLUTION = i
																		}
																		r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = parseInt(r.attributes.BANDWIDTH, 10)), r.attributes["AVERAGE-BANDWIDTH"] && (r.attributes["AVERAGE-BANDWIDTH"] = parseInt(r.attributes["AVERAGE-BANDWIDTH"], 10)), r.attributes["PROGRAM-ID"] && (r.attributes["PROGRAM-ID"] = parseInt(r.attributes["PROGRAM-ID"], 10))
																	}
																	this.trigger("data", r)
																} else if (n = /^#EXT-X-I-FRAME-STREAM-INF:?(.*)$/.exec(e)) {
																	var a;
																	r = {
																		type: "tag",
																		tagType: "i-frame-stream-inf"
																	}, n[1] && (r.attributes = t.parseAttributes(n[1]), r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = parseInt(r.attributes.BANDWIDTH, 10)), r.attributes["AVERAGE-BANDWIDTH"] && (r.attributes["AVERAGE-BANDWIDTH"] = parseInt(r.attributes["AVERAGE-BANDWIDTH"], 10)), r.attributes.RESOLUTION) && (i = {}, (a = r.attributes.RESOLUTION.split("x"))[0] && (i.width = parseInt(a[0], 10)), a[1] && (i.height = parseInt(a[1], 10)), r.attributes.RESOLUTION = i), this.trigger("data", r)
																} else if (n = /^#EXT-X-ENDLIST/.exec(e)) this.trigger("data", {
																	type: "tag",
																	tagType: "endlist"
																});
																else if (n = /^#EXT-X-DISCONTINUITY/.exec(e)) this.trigger("data", {
																	type: "tag",
																	tagType: "discontinuity"
																});
																else {
																	if (n = /^#EXT-X-KEY:?(.*)$/.exec(e)) return r = {
																		type: "tag",
																		tagType: "key"
																	}, n[1] && (r.attributes = t.parseAttributes(n[1]), r.attributes.IV && (r.attributes.IV = r.attributes.IV.toLowerCase(), "0x" === r.attributes.IV.substring(0, 2) && (r.attributes.IV = r.attributes.IV.substring(2)), r.attributes.IV = new Uint8Array(o.FormatHelper.hexToBytes(r.attributes.IV)).buffer)), void this.trigger("data", r);
																	if (n = /^#EXT-X-MAP:?(.*)$/.exec(e)) return r = {
																		type: "tag",
																		tagType: "map"
																	}, n[1] && (r.attributes = t.parseAttributes(n[1])), void this.trigger("data", r);
																	if (n = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return r = {
																		type: "tag",
																		tagType: "date-time"
																	}, n[1] && (r.dateTime = new Date(n[1])), void this.trigger("data", r);
																	(n = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) ? this.trigger("data", {
																		type: "tag",
																		tagType: "cue-out-cont",
																		data: n[1] || ""
																	}): (n = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) ? this.trigger("data", {
																		type: "tag",
																		tagType: "cue-out",
																		data: n[1] || ""
																	}) : (n = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) ? this.trigger("data", {
																		type: "tag",
																		tagType: "cue-in",
																		data: n[1] || ""
																	}) : (n = /^#EXT-X-SCTE35:?(.*)?$/.exec(e)) ? this.trigger("data", {
																		type: "tag",
																		tagType: "scte35",
																		data: n[1] || ""
																	}) : (n = /^#EXT-X-DATERANGE:?(.*)?$/.exec(e)) ? this.trigger("data", {
																		type: "tag",
																		tagType: "daterange",
																		data: n[1] || ""
																	}) : this.trigger("data", {
																		type: "tag",
																		tagType: "unknown",
																		data: e.slice(0, e.length)
																	})
																}
															} else this.trigger("data", {
																type: "uri",
																uri: e
															})
														}, t.attributeSeparator = new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'), t
													}(s),
													l = function(e) {
														function t(n) {
															var r = e.call(this) || this;
															return r.onData = function(e) {
																({
																	tag: function() {
																		({
																			"allow-cache": function() {
																				r.manifestObj.allowCache = e.allowed, "allowed" in e || (r.trigger("info", {
																					message: "defaulting allowCache to YES"
																				}), r.manifestObj.allowCache = !0)
																			},
																			byterange: function() {
																				var t = {};
																				"length" in e && (r.currentUri.byterange = t, t.length = e.length, "offset" in e || (r.trigger("info", {
																					message: "defaulting offset to zero"
																				}), e.offset = 0)), "offset" in e && (r.currentUri.byterange = t, t.offset = e.offset)
																			},
																			endlist: function() {
																				r.manifestObj.endList = !0
																			},
																			inf: function() {
																				"mediaSequence" in r.manifest || (r.manifestObj.mediaSequence = 0, r.trigger("info", {
																					message: "defaulting media sequence to zero"
																				})), e.duration >= 0 && (r.currentUri.duration = e.duration), r.manifestObj.segments = r.uris
																			},
																			key: function() {
																				if (e.attributes)
																					if ("NONE" !== e.attributes.METHOD)
																						if (e.attributes.URI) {
																							e.attributes.METHOD || r.trigger("warn", {
																								message: "defaulting key method to AES-128"
																							}), r.keysInUse && (r.keys = [], r.keysInUse = !1);
																							var t = {
																								method: (0, a.forceReallocation)(e.attributes.METHOD) || "AES-128",
																								uri: d(e.attributes.URI) ? (0, a.forceReallocation)(e.attributes.URI) : e.attributes.URI
																							};
																							void 0 !== e.attributes.IV && (t.iv = e.attributes.IV), e.attributes.KEYFORMAT && (t.keyformat = (0, a.forceReallocation)(e.attributes.KEYFORMAT)), e.attributes.KEYFORMATVERSIONS && (t.keyformatversions = (0, a.forceReallocation)(e.attributes.KEYFORMATVERSIONS)), e.attributes.KEYID && (t.keyid = (0, a.forceReallocation)(e.attributes.KEYID)), r.keys.push(t)
																						} else r.trigger("warn", {
																							message: "ignoring key declaration without URI"
																						});
																				else r.keys = [];
																				else r.trigger("warn", {
																					message: "ignoring key declaration without attribute list"
																				})
																			},
																			"media-sequence": function() {
																				isFinite(e.number) ? r.manifestObj.mediaSequence = e.number : r.trigger("warn", {
																					message: "ignoring invalid media sequence: " + e.number
																				})
																			},
																			"discontinuity-sequence": function() {
																				isFinite(e.number) ? r.manifestObj.discontinuitySequence = e.number : r.trigger("warn", {
																					message: "ignoring invalid discontinuity sequence: " + e.number
																				})
																			},
																			"playlist-type": function() {
																				/VOD|EVENT/.test(e.playlistType) ? r.manifestObj.playlistType = e.playlistType : r.trigger("warn", {
																					message: "ignoring unknown playlist type: " + e.playlist
																				})
																			},
																			"stream-inf": function() {
																				r.manifestObj.playlists = r.uris, e.attributes ? (r.currentUri.attributes || (r.currentUri.attributes = {}), r.currentUri.id = function(e) {
																					var t = "";
																					return e.RESOLUTION && (t += e.RESOLUTION.height + "_"), t + e.BANDWIDTH
																				}(e.attributes), r.currentUri.attributes = t.mergeFn(e.attributes, r.currentUri.attributes)) : r.trigger("warn", {
																					message: "ignoring empty stream-inf attributes"
																				})
																			},
																			"i-frame-stream-inf": function() {
																				var t = {
																					name: "i-frame-stream-inf"
																				};
																				e.attributes && (t.attributes = e.attributes), r.manifestObj.tags.push(t)
																			},
																			media: function() {
																				r.manifestObj.media.push({
																					attributes: e.attributes
																				});
																				var t = {
																					name: "media"
																				};
																				e.attributes && (t.attributes = e.attributes), r.manifestObj.tags.push(t)
																			},
																			start: function() {
																				var t = {};
																				e.attributes.hasOwnProperty("TIME-OFFSET") && (t.timeOffset = Number(e.attributes["TIME-OFFSET"]), t.precise = "YES" === e.attributes.PRECISE, r.manifestObj.start = t);
																				var n = {
																					name: "start"
																				};
																				t.hasOwnProperty("timeOffset") && (n.attributes = {
																					"TIME-OFFSET": t.timeOffset,
																					PRECISE: t.precise
																				}), r.manifestObj.tags.push(n)
																			},
																			discontinuity: function() {
																				r.currentUri.discontinuity = !0, r.manifestObj.discontinuityStarts.push(r.uris.length)
																			},
																			"date-time": function() {
																				r.manifestObj.dateTime = e.dateTime
																			},
																			targetduration: function() {
																				!isFinite(e.duration) || e.duration < 0 ? r.trigger("warn", {
																					message: "ignoring invalid target duration: " + e.duration
																				}) : r.manifestObj.targetDuration = e.duration
																			},
																			map: function() {
																				if (e.attributes && e.attributes.URI && (r.init = {
																						url: d(e.attributes.URI) ? (0, a.forceReallocation)(e.attributes.URI) : e.attributes.URI
																					}, e.attributes.BYTERANGE)) {
																					var t = e.attributes.BYTERANGE.split("@"),
																						n = t[0],
																						i = t[1];
																					r.init.byteRange = {
																						start: parseInt(i),
																						end: parseInt(i) + parseInt(n) - 1
																					}
																				}
																			},
																			"independent-segments": function() {
																				r.manifestObj.independentSegments = !0, r.manifestObj.tags.push({
																					name: "independent-segments"
																				})
																			},
																			"session-data": function() {
																				var t = {
																					name: "session-data"
																				};
																				e.attributes && (t.attributes = e.attributes), r.manifestObj.tags.push(t)
																			},
																			"session-key": function() {
																				var t = {
																					name: "session-key"
																				};
																				e.attributes && (t.attributes = e.attributes), r.manifestObj.tags.push(t)
																			},
																			"cue-out": function() {
																				r.cueTag = t.getCueTag(e)
																			},
																			"cue-out-cont": function() {
																				r.cueTag = t.getCueTag(e)
																			},
																			"cue-in": function() {
																				r.cueTag = t.getCueTag(e)
																			},
																			scte35: function() {
																				r.scte35.push({
																					type: i.MetadataType.SCTE,
																					attributes: c.parseAttributes(e.data)
																				})
																			},
																			daterange: function() {
																				r.dateRange.push(t.getDateRange(e))
																			},
																			version: function() {
																				r.manifestObj.version = void 0 !== e.version ? e.version : 1
																			},
																			unknown: function() {
																				r.customTags.push({
																					type: i.MetadataType.CUSTOM,
																					attributes: e.data
																				});
																				var t = r.getCustomTag(e.data);
																				t && r.manifestObj.tags.push(t)
																			}
																		} [e.tagType] || function() {})()
																	},
																	uri: function() {
																		r.currentUri.uri = d(e.uri) ? (0, a.forceReallocation)(e.uri) : e.uri, r.manifestObj.targetDuration && !("duration" in r.currentUri) && (r.trigger("warn", {
																			message: "defaulting segment duration to the target duration"
																		}), r.currentUri.duration = r.manifestObj.targetDuration), r.keys.length > 0 && (r.currentUri.keys = r.keys, r.keysInUse = !0), r.init && (r.currentUri.init = r.init), r.cueTag && (r.currentUri.cueTag = r.cueTag, r.cueTag = null), r.scte35.length > 0 && (r.currentUri.scte35 = r.scte35, r.scte35 = []), r.dateRange.length > 0 && (r.currentUri.dateRange = r.dateRange, r.dateRange = []), r.customTags.length > 0 && (r.currentUri.customTags = r.customTags, r.customTags = []), r.manifestObj.dateTime && (r.currentUri.dateTime = r.manifestObj.dateTime, delete r.manifestObj.dateTime), r.uris.push(r.currentUri), r.currentUri.duration && (r.manifestObj.totalDuration += r.currentUri.duration), r.currentUri = {}
																	},
																	comment: function() {}
																})[e.type]()
															}, r.end = function() {
																r.lineStream.push("\n")
															}, r.logger = n, r.uris = [], r.currentUri = {}, r.keys = [], r.keysInUse = !1, r.cueTag = null, r.scte35 = [], r.customTags = [], r.dateRange = [], r.lineStream = new u, r.parseStream = new c, r.lineStream.pipe(r.parseStream), r.manifestObj = {
																allowCache: !0,
																discontinuityStarts: [],
																endList: !1,
																media: [],
																segments: [],
																totalDuration: 0,
																tags: [],
																version: 1
															}, r.parseStream.on("data", r.onData), r
														}
														return r(t, e), Object.defineProperty(t.prototype, "manifest", {
															get: function() {
																return this.manifestObj
															},
															enumerable: !1,
															configurable: !0
														}), t.getCueTag = function(e) {
															var t = {
																type: e.tagType.toUpperCase()
															};
															if (e.data) {
																var n = (0, a.forceReallocation)(e.data);
																t.attributes = n.split(",").map((function(e) {
																	return e.trim()
																}))
															}
															return t
														}, t.getDateRange = function(e) {
															var t = {
																type: i.MetadataType.DATERANGE
															};
															if (e.data) {
																var n = c.parseAttributes(e.data);
																for (var r in t.clientAttributes = {}, n) n.hasOwnProperty(r) && (0 === r.indexOf("X-") ? t.clientAttributes[(0, a.kebabCaseToCamelCase)(r.substr(2))] = n[r] : t[(0, a.kebabCaseToCamelCase)(r)] = n[r])
															}
															return t.duration && (t.duration = Number(t.duration)), t.plannedDuration && (t.plannedDuration = Number(t.plannedDuration)), t.endOnNext && (t.endOnNext = !0), t
														}, t.prototype.getCustomTag = function(e) {
															try {
																e = (0, a.forceReallocation)(e);
																var t = /^#([^:=]*)(:|=)?(.*)$/.exec(e);
																if (t[1]) {
																	var n = {
																			name: t[1]
																		},
																		r = "";
																	if ("=" === t[2] && t[3]) r = t[3];
																	else if (":" === t[2] && t[3]) {
																		var i = /^([^:="]*)(:|=)?(.*)$/.exec(t[3]);
																		"=" === i[2] && i[3] ? n.attributes = c.parseAttributes(t[3]) : r = t[3]
																	}
																	return r && (n.value = r.replace(/^['"](.*)['"]$/g, "$1")), n
																}
															} catch (t) {
																return this.logger && this.logger.debug("Error occurred while parsing custom HLS tag: ".concat(e)), null
															}
														}, t.prototype.push = function(e) {
															this.lineStream.push(e)
														}, t.mergeFn = function(e, n) {
															if ("object" != typeof e || "object" != typeof n) return e;
															if (Array.isArray(e) && Array.isArray(e)) return e;
															for (var r in e) n.hasOwnProperty(r) ? n[r] = t.mergeFn(e[r], n[r]) : n[r] = e[r];
															return n
														}, t
													}(s),
													f = function() {
														function e() {}
														return e.parsePlaylist = function(e, t) {
															var n = new l(t);
															if (n.push(e), n.end(), "playlists" in n.manifest) {
																var r = n.manifest.playlists.map((function(e) {
																	return {
																		name: "stream-inf",
																		value: e.uri,
																		attributes: e.attributes
																	}
																}));
																n.manifest.tags = n.manifest.tags.concat(r)
															}
															return n.manifest
														}, e
													}();

												function d(e) {
													return (0, a.startsWith)(e, "http://") || (0, a.startsWith)(e, "https://") || (0, a.startsWith)(e, "data:")
												}
												t.HlsUtils = f
											},
											42572: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.isFmp4Segment = t.mergeSegmentCodecs = t.extractCodecFromMp4Segment = t.extractCodecFromTsSegment = t.CodecDetector = void 0;
												var r = n(85739),
													i = n(83123),
													a = n(12391),
													o = n(43068),
													s = n(83024),
													u = n(76469),
													c = function() {
														function e(e) {
															this.context = e, this.loader = new i.DefaultContentLoader(this.context)
														}
														return e.prototype.fetchSegment = function(e) {
															return this.context.segmentPrefetchingService && (this.context.segmentPrefetchingService.hasPrefetchedSegment(e) ? this.context.segmentPrefetchingService.getPrefetchedSegment(e) : this.context.segmentPrefetchingService.fetch(e)) || Promise.reject()
														}, e.prototype.probeCodecs = function(e, t) {
															var n = this,
																i = e.slice();
															if (0 === i.length) throw "could not load any segment";
															var a = t ? i.pop() : i.shift(),
																o = function(e, t) {
																	var n = t && t._byteRange ? t._byteRange : void 0;
																	return {
																		url: e,
																		key: t && t._key ? t._key : void 0,
																		byteRange: n,
																		downloaded: !1,
																		mimeType: "unknown/mp4",
																		internalRepresentationId: null,
																		isInitSegment: Boolean(t._init),
																		preventDownloadCanceling: !0
																	}
																}(a._init ? a._init.url : a._media, a);
															return this.fetchSegment(o).then((function(e) {
																return n.extractCodecsFromSegment(e)
															})).catch((function(e) {
																if (e instanceof r.PlayerError) throw e;
																return n.context.logger.debug("Codec probing from segment failed", e), n.probeCodecs(i, t)
															})).then((function(e) {
																return n.context.logger.debug("Probed codec is", e), e
															}))
														}, e.prototype.extractCodecsFromSegment = function(e) {
															return h(e) ? f(e) : l(e, this.context)
														}, e
													}();

												function l(e, t) {
													if (!o.ModuleManager.has(s.ModuleName.ContainerTS)) return Promise.reject(new u.PlayerModuleMissingError(s.ModuleName.ContainerTS));
													var n = function(e) {
														return new(o.ModuleManager.get(s.ModuleName.ContainerTS).WebWorkerTransmuxer)(e, !1)
													}(t);
													return n.transmuxSegment(e).then((function(t) {
														var n = d(t.transmuxedSegments);
														if (!n) throw "couldn't detect codec for ".concat(e.getMimeType());
														return n
													})).finally((function() {
														n.dispose()
													}))
												}

												function f(e) {
													if (!o.ModuleManager.has(s.ModuleName.ContainerMP4)) return Promise.reject(new u.PlayerModuleMissingError(s.ModuleName.ContainerMP4));
													var t = o.ModuleManager.get(s.ModuleName.ContainerMP4).getCodecFromSegment(e);
													return t ? Promise.resolve(t) : Promise.reject("couldn't detect codec for ".concat(e.getMimeType()))
												}

												function d(e) {
													for (var t = "", n = 0, r = e; n < r.length; n++) {
														var i = r[n];
														if (!i.getCodec()) return null;
														t += ("" === t ? "" : ",") + i.getCodec()
													}
													return t
												}

												function h(e) {
													for (var t = e.getData(), n = new DataView(t, 0, t.byteLength), r = [], i = 0; i + 8 < n.byteLength;) {
														var o = n.getUint32(i);
														if (0 === o) break;
														var s = a.ArrayHelper.extractAsciiString(n, i + 4, 4);
														r.push(s), i += o
													}
													return e.isInit() ? ["ftyp", "moov"].every((function(e) {
														return r.includes(e)
													})) : ["moof", "mdat"].every((function(e) {
														return r.includes(e)
													}))
												}
												t.CodecDetector = c, t.extractCodecFromTsSegment = l, t.extractCodecFromMp4Segment = f, t.mergeSegmentCodecs = d, t.isFmp4Segment = h
											},
											31334: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.handleDateRangeMetadata = t.getDateRangeEvent = void 0;
												var r = n(80815),
													i = n(79712);

												function a(e, t) {
													var n = t.findIndex((function(t) {
														return t.id === e.id
													}));
													t.splice(n, 1, e)
												}

												function o(e, t) {
													return t.some((function(t) {
														return t.id === e.id
													}))
												}

												function s(e, t) {
													var n = {};
													return n.startTime = (0, r.toSeconds)(Date.parse(e.startDate)), e.endDate ? n.endTime = (0, r.toSeconds)(Date.parse(e.endDate)) : isNaN(e.duration) ? e.endOnNext && t && (n.endTime = (0, r.toSeconds)(Date.parse(t.startDate))) : n.endTime = (0, r.toSeconds)(Date.parse(e.startDate)) + e.duration, n.data = e, n
												}
												t.getDateRangeEvent = s, t.handleDateRangeMetadata = function(e, t, n) {
													for (var r = 0; r < e.segments.length; r++) {
														var u = e.segments[r].dateRange;
														u && u.forEach((function(e) {
															o(e, t) ? a(e, t) : t.push(e)
														}))
													}
													return t.map((function(e, t, n) {
														return s(e, n[t + 1])
													})).forEach((function(e) {
														return n.processDateRangeEvent(e, i.HLS_PERIOD_ID)
													}))
												}
											},
											30410: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.DiscontinuitySequenceNumberTracker = void 0;
												var n = function() {
													function e(e) {
														this.mimeTypeFilter = e, this.discoSequenceNumberChangedListeners = [], this.reset()
													}
													return e.prototype.notifyListeners = function(e) {
														var t = this;
														this.discoSequenceNumberChangedListeners.forEach((function(n) {
															return n(t.currentDiscontinuitySequenceNumber, e)
														}))
													}, e.prototype.trackSegment = function(e) {
														if (this.mimeTypeFilter(e.getMimeType()) && !e.isInit()) {
															var t = e.getSegmentInfo(),
																n = null == t ? void 0 : t.discontinuitySequenceNumber,
																r = isFinite(this.currentDiscontinuitySequenceNumber),
																i = this.currentDiscontinuitySequenceNumber !== n;
															r && i && this.notifyListeners(n), this.currentDiscontinuitySequenceNumber = n
														}
													}, e.prototype.subscribe = function(e) {
														this.discoSequenceNumberChangedListeners.push(e)
													}, e.prototype.unsubscribe = function(e) {
														var t = this.discoSequenceNumberChangedListeners.indexOf(e);
														t < 0 || this.discoSequenceNumberChangedListeners.splice(t, 1)
													}, e.prototype.reset = function() {
														this.currentDiscontinuitySequenceNumber = -1 / 0
													}, e.prototype.dispose = function() {
														this.reset(), this.discoSequenceNumberChangedListeners = []
													}, e
												}();
												t.DiscontinuitySequenceNumberTracker = n
											},
											25935: function(e, t, n) {
												var r = this && this.__spreadArray || function(e, t, n) {
													if (n || 2 === arguments.length)
														for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
													return e.concat(r || Array.prototype.slice.call(t))
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.findAllOrMatchingVariants = t.getRepresentation = t.updateMissingCodecsForPlaylists = t.getAdaptationSetsWithUnknownCodecs = t.createDiscontinuitySequences = t.ensureMasterPlaylist = t.parseHlsManifest = t.getPeriod = t.isM3u8Error = t.isValidHlsPlaylist = void 0;
												var i = n(18873),
													a = n(66996),
													o = n(46381),
													s = n(50163),
													u = n(5793),
													c = n(43233),
													l = n(96400),
													f = n(76379);

												function d(e, t) {
													var n = i.HlsUtils.parsePlaylist(t, e.logger);
													if ("playlists" in n) {
														var r = n.playlists.filter((function(t) {
															return t.attributes.BANDWIDTH >= e.settings.HLS_AUDIO_ONLY_THRESHOLD_BITRATE
														}));
														n.playlists = r.length ? r : n.playlists
													}
													return n
												}

												function h(e, t) {
													var n, r = function(e) {
															return e.playlists || []
														}(e),
														i = r.some((function(e) {
															return u.URLHelper.isSubUrl(t, e.uri)
														})),
														a = function(e, t) {
															return function(e) {
																return e.media || []
															}(e).find((function(e) {
																var n;
																return u.URLHelper.isSubUrl(t, null === (n = e.attributes) || void 0 === n ? void 0 : n.URI)
															}))
														}(e, t);
													if (!i && a) {
														var o = null === (n = a.attributes) || void 0 === n ? void 0 : n["GROUP-ID"];
														if (o) return r.filter((function(e) {
															var t, n;
															return (null === (t = e.attributes) || void 0 === t ? void 0 : t.AUDIO) === o || (null === (n = e.attributes) || void 0 === n ? void 0 : n.VIDEO) === o
														}))
													}
													return r
												}
												t.isValidHlsPlaylist = function(e) {
													return (0, f.isMasterPlaylist)(e) && function(e) {
														return e.playlists.length > 0
													}(e) || (0, f.isMediaPlaylist)(e) && function(e) {
														return e.segments.length > 0
													}(e)
												}, t.isM3u8Error = function(e) {
													return e in a.M3u8Error
												}, t.getPeriod = function(e) {
													return (0, l.getManifest)(e.getState()).Period[0]
												}, t.parseHlsManifest = d, t.ensureMasterPlaylist = function(e, t, n) {
													if ((0, f.isMasterPlaylist)(t)) return t;
													e.logger.debug("HLS manifest is not a master playlist but a variant. Using master playlist template!");
													var r = d(e, ["#EXTM3U", "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=0", n].join("\n"));
													if (!(0, f.isMasterPlaylist)(r)) throw new Error("Template is not of type HLS MasterPlaylist");
													return r
												}, t.createDiscontinuitySequences = function(e, t) {
													var n = f.PlaylistUtils.createDiscontinuitySequences(e, t);
													return n.forEach((function(e, t) {
														f.PlaylistUtils.extrapolateProgramDateTime(e.segments), e.indexOfFirstSegment = 0 === t ? 0 : n[t - 1].indexOfLastSegment + 1, e.indexOfLastSegment = e.indexOfFirstSegment + e.segments.length - 1
													})), n
												}, t.getAdaptationSetsWithUnknownCodecs = function(e) {
													var t = e.Period.flatMap((function(e) {
															return e.AdaptationSet.filter((function(e) {
																return !((0, c.getCodecsFromAdaptationSet)(e).length > 0)
															}))
														})),
														n = t.filter((function(e) {
															var t = e._mimeType;
															return !s.MimeTypeHelper.isUnknown(t)
														})),
														i = t.filter((function(e) {
															var t = e._mimeType;
															return s.MimeTypeHelper.isUnknown(t)
														})),
														a = r([], n, !0),
														o = i.shift();
													return o && (o.Representation = r(r([], null == o ? void 0 : o.Representation, !0), i.flatMap((function(e) {
														return e.Representation
													})), !0), a.push(o)), a
												}, t.updateMissingCodecsForPlaylists = function(e, t, n) {
													! function(e, t) {
														t.forEach((function(t) {
															return t.attributes.CODECS = function(e, t) {
																var n = Object.keys(o.CodecStringHelper.extractCodecStrings(e)),
																	r = o.CodecStringHelper.extractCodecStrings(t),
																	i = Object.keys(r).filter((function(e) {
																		return !n.includes(e)
																	})).map((function(e) {
																		return r[e]
																	})).join(",");
																return i && 0 !== i.length ? function(e, t, n) {
																	return "string" != typeof e || 0 === e.length ? t : e + "," + t
																}(e, i) : e
															}(t.attributes.CODECS, e)
														}))
													}(e, h(t, n))
												}, t.getRepresentation = function(e, t) {
													var n = function(e, t) {
														return t.AdaptationSet.find((function(t) {
															return t._internalId.equals(e)
														}))
													}(e, t);
													return n ? n.Representation.find((function(t) {
														return t._internalId.equals(e)
													})) : null
												}, t.findAllOrMatchingVariants = h
											},
											67122: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsTimelineTracker = void 0;
												var r = n(59534),
													i = n(59536),
													a = n(28803),
													o = n(93638),
													s = function() {
														function e(e, t) {
															var n = this;
															this.context = e, this.playbackTimeNextSegment = -1, this.allowedGapSizeSec = t, this.playerStateService = this.context.serviceManager.get(r.ServiceName.PlayerStateService), this.unsubscribeFromTargetPlaybackTimeChange = (0, a.subscribe)(this.context.store)((function(e) {
																return (0, i.getTargetPlaybackTime)((0, i.getPlayerState)(e))
															}), (function() {
																return n.seekVerificationOnNextSegment = !0
															}), (function(e) {
																return -1 !== e
															}))
														}
														return e.prototype.reset = function() {
															this.playbackTimeNextSegment = -1
														}, e.prototype.trackPlaybackTime = function(e) {
															this.playbackTimeNextSegment = e.getPlaybackTime() + e.getDuration()
														}, e.prototype.checkForTimelineGap = function(e, t, n) {
															var r;
															if (this.playbackTimeNextSegment >= 0) return this.checkGapForConsecutiveSegments(e, t, n);
															var i = (null === (r = this.playerStateService) || void 0 === r ? void 0 : r.seekingOrTimeshifting) ? this.playerStateService.targetPlaybackTime : -1;
															return this.seekVerificationOnNextSegment && i > -1 ? (this.seekVerificationOnNextSegment = !1, this.checkSeekAccuracy(i, e, t, n)) : {
																hasGap: !1
															}
														}, e.prototype.checkGapForConsecutiveSegments = function(e, t, n) {
															if (function(e, t, n) {
																	return e >= t && e <= n
																}(this.playbackTimeNextSegment, e.getPlaybackTime() - this.allowedGapSizeSec, e.getPlaybackTime() + e.getDuration())) return {
																hasGap: !1
															};
															var r = {
																	hasGap: !1
																},
																i = e.getPlaybackTime() - this.playbackTimeNextSegment,
																a = t.SegmentList ? t.SegmentList[0].SegmentURL : [],
																s = a.some((function(e) {
																	return e.downloaded
																})),
																d = (0, o.findSegmentUrlIndexWithinSegmentList)(e, a),
																h = d >= 0 ? d : n,
																p = h;
															if (i > 0 && s) {
																for (; a[p] && !a[p].downloaded && p >= 0;) p--;
																r = u(!0, i, !1, p + 1)
															} else if (i > 0)(_ = c(p = l(i, a, h))) || (this.context.logger.debug("Could not handle gap on playlist switch, reached lower boundary of segment list"), p = 0), r = u(!0, i, _, p);
															else if (i < 0) {
																var _;
																(_ = c(p = f(i, a, h))) || (this.context.logger.debug("Could not handle gap on playlist switch, reached upper boundary of segment list"), p = a.length), r = u(!0, i, _, p)
															}
															return p === h && r.hasGap && (this.context.logger.debug("Ignoring gap as calculated new segment index did not change"), r.hasGap = !1), r
														}, e.prototype.checkSeekAccuracy = function(e, t, n, r) {
															var i = n.SegmentList ? n.SegmentList[0].SegmentURL : [],
																a = t.getPlaybackTime(),
																s = t.getPlaybackTime() + t.getDuration();
															this.context.logger.debug("HLS seek target verification", {
																seekTarget: e,
																segmentStartTime: a,
																segmentEndTime: s
															});
															var d, h, p, _ = (0, o.findSegmentUrlIndexWithinSegmentList)(t, i);
															return _ = _ >= 0 ? _ : r, e < a ? ((p = c(d = l(h = a - e, i, _))) || (d = 0), this.context.logger.debug("Target segment starts too late, corrected segment index from ".concat(_, " to ").concat(d)), u(!0, h, p, d)) : e > s ? ((p = c(d = f(h = s - e, i, _))) || (d = i.length), this.context.logger.debug("Target segment ends too early, corrected segment index from ".concat(_, " to ").concat(d)), u(!0, h, p, d)) : {
																hasGap: !1
															}
														}, e.prototype.dispose = function() {
															this.unsubscribeFromTargetPlaybackTimeChange(), this.seekVerificationOnNextSegment = !1, this.playbackTimeNextSegment = -1
														}, e
													}();

												function u(e, t, n, r) {
													return {
														hasGap: e,
														gapSizeSec: t,
														couldHandle: n,
														correctedIndex: r
													}
												}

												function c(e) {
													return e >= 0 && isFinite(e)
												}

												function l(e, t, n) {
													for (; e > .001;) {
														if (n <= 0) return -1;
														e -= t[n - 1]._duration, n--
													}
													return n
												}

												function f(e, t, n) {
													for (; e < -.001;)
														if (e += t[n]._duration, ++n >= t.length) return 1 / 0;
													return n
												}
												t.HlsTimelineTracker = s
											},
											79712: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.M3u8DashManifest = t.HLS_PERIOD_ID = void 0;
												var i = n(4529),
													a = n(43587),
													o = n(80815),
													s = n(5793),
													u = n(88269),
													c = n(10559),
													l = n(96400),
													f = n(44699),
													d = n(59534),
													h = n(50163),
													p = n(31334),
													_ = n(19648),
													m = n(47581),
													b = n(76379),
													g = n(80405),
													v = n(87510),
													y = n(24965);
												t.HLS_PERIOD_ID = "0";
												var A = function() {
													function e(e, t) {
														this.lastStartOffset = -1 / 0, this.context = e, this.sourceContext = t, this.m3u8Translator = new m.M3u8Translator(e, t), this.totalDurationSec = 1 / 0, this.dateRanges = [], this.sourceStore = e.serviceManager.get(d.ServiceName.SourceStoreService, t.sourceIdentifier)
													}
													return e.prototype.getCurrentHlsState = function() {
														return (0, y.getHlsState)(this.sourceStore.getState())
													}, e.prototype.findAdaptationSet = function(e) {
														return this.getManifest().Period[0].AdaptationSet.find((function(t) {
															var n;
															return t._internalId.adaptationSetId === e || (null === (n = t.ContentComponent) || void 0 === n ? void 0 : n.some((function(t) {
																return t._id === e
															})))
														}))
													}, e.prototype.onMasterPlaylistAvailable = function(e, t) {
														this.m3u8Translator = new m.M3u8Translator(this.context, this.sourceContext);
														var n = this.m3u8Translator.createDashManifestSkeleton(t, e);
														n = (0, u.initializeInternalIds)(n), this.sourceStore.dispatch((0, c.setManifestAction)(n)), this.sourceStore.dispatch((0, v.setDefaultLanguages)(e)), this.sourceStore.dispatch((0, v.setCustomTags)(e)), this.sourceStore.dispatch((0, v.setMasterPlaylistString)(e.rawString))
													}, e.prototype.getManifest = function() {
														return (0, l.getManifest)(this.sourceStore.getState())
													}, e.prototype.getAllVariantRepresentions = function() {
														return this.getManifest().Period[0].AdaptationSet.filter((function(e) {
															return h.MimeTypeHelper.isAV(e._mimeType) || h.MimeTypeHelper.isSubtitle(e._mimeType) || h.MimeTypeHelper.isImage(e._mimeType)
														})).flatMap((function(e) {
															return e.Representation
														}))
													}, e.prototype.onMediaLoaded = function(e, t, n, r) {
														var i = this;
														this.sourceStore.dispatch((0, v.setMasterPlaylistString)(e)), this.sourceStore.dispatch((0, v.setEndlist)(Boolean(n.endList))), n.playlistType && !(0, y.getPlaylistType)(this.getCurrentHlsState()) && this.sourceStore.dispatch((0, v.setPlaylistType)(n.playlistType)), h.MimeTypeHelper.isAV(t._mimeType) && (this.trackPlaylistDuration(n), this.updateDashManifestProperties(n)), this.calculatePlaylistStartTime(n);
														var a = this.getManifest().Period[0],
															o = this.getRepresentationsFromUrl(t.Uri, a).map((function(e) {
																return i.updateRepresentation(e, n, r)
															}));
														return o.forEach((function(e) {
															i.sourceStore.dispatch((0, v.updatePlaylist)(n, e)), h.MimeTypeHelper.isAV(t._mimeType) && (i.sourceStore.dispatch((0, v.removeDroppedOutDiscontinuity)(r, e)), i.sourceStore.dispatch((0, v.updateDiscontinuityStartAndEndTimes)(r, e)));
															var o = e._id,
																s = (0, y.getPlaylistSegments)(i.getCurrentHlsState(), o),
																u = i.determineFirstDiscoStartTime(s, n);
															i.updatePeriodStartAndDuration(a, u, r), s.length > 0 && null == s[0].startTime && i.initSegmentStartTimesFromDiscoSequenceStartTime(o, r), i.context.settings.ENABLE_SEGMENT_INFO_PROVIDER_FROM_STORE && i.updateSegmentInfoMap(n, e)
														})), (0, p.handleDateRangeMetadata)(n, this.dateRanges, this.context.serviceManager.get(d.ServiceName.TimedMetadataService)), o.find((function(e) {
															return e._id === t._id
														}))
													}, e.prototype.updateSegmentInfoMap = function(e, t) {
														var n, r, i = t._internalId.key(),
															a = null === (n = this.sourceStore.getState()) || void 0 === n ? void 0 : n.segmentInfoMap[i];
														a && (r = (0, _.updateMapEntry)(a, e, t)) || (r = (0, _.createNewMapEntry)(e, t), this.initializeStartTimesOnSegmentMapEntry(r, e)), this.sourceStore.dispatch((0, f.setSegmentInfos)(i, r))
													}, e.prototype.initializeStartTimesOnSegmentMapEntry = function(e, t) {
														var n = this.sourceStore.getState();
														if (n) {
															var r = (0, g.getStartTimeExtrapolationReferencePoint)(e, t, n);
															(0, g.extrapolateStartTime)(e.segmentInfos, r)
														}
													}, e.prototype.determineFirstDiscoStartTime = function(e, t) {
														return e.length > 0 && null != e[0].startTime ? (0, y.getFirstDiscoSequenceTiming)(this.getCurrentHlsState()).startTime : t.startTime
													}, e.prototype.updatePeriodStartAndDuration = function(e, n, r) {
														var i = r.reduce((function(e, t) {
																return e + t.duration
															}), 0),
															a = 0 === e.duration ? i : Math.min(e.duration, i),
															o = this.isLive() ? 1 / 0 : a,
															s = {
																start: n,
																_start: "PT".concat(n, "S"),
																duration: o,
																_duration: "PT".concat(a, "S")
															};
														this.sourceStore.dispatch((0, c.updatePeriodTimingAction)(t.HLS_PERIOD_ID, s))
													}, e.prototype.trackPlaylistDuration = function(e) {
														this.totalDurationSec = e.endList ? Math.min(this.totalDurationSec, e.totalDuration) : e.totalDuration
													}, e.prototype.updateDashManifestProperties = function(e) {
														var t, n = !e.endList,
															r = (0, l.getManifest)(this.sourceStore.getState()),
															i = {
																_requestTimestamp: e.requestTimestamp,
																_type: n ? "dynamic" : "static",
																_mediaPresentationDuration: n ? 1 / 0 : "PT".concat(this.totalDurationSec, "S"),
																_maxSegmentDuration: "PT".concat(e.targetDuration, "S"),
																_hasIndependentSegments: r._hasIndependentSegments || e.independentSegments
															};
														e.start && (e.start.timeOffset = b.PlaylistUtils.getStartOffsetCloseToPlaylistEnd(e, this.lastStartOffset), this.lastStartOffset = e.start.timeOffset, i._startOffset = b.PlaylistUtils.getStartOffset(e)), n && (i._minimumUpdatePeriod = "PT".concat(e.targetDuration, "S"), i._timeShiftBufferDepth = -this.totalDurationSec, i._availabilityStartTime = null !== (t = r._availabilityStartTime) && void 0 !== t ? t : new Date(e.requestTimestamp - (0, o.toMilliSeconds)(this.totalDurationSec)).toISOString()), this.sourceStore.dispatch((0, c.updateManifestAction)(i))
													}, e.prototype.getRepresentationsFromUrl = function(e, t) {
														return t.AdaptationSet.flatMap((function(t) {
															return t.Representation.filter((function(t) {
																return s.URLHelper.isSubUrl(e, t.Uri)
															}))
														}))
													}, e.prototype.updateRepresentation = function(e, t, n) {
														var i = r({}, e);
														return i._requestTimestamp = t.requestTimestamp, i._updateInterval = (0, b.calculateUpdateIntervalInSeconds)(this.context.settings, t), i._hls = r(r({}, i._hls), {
															requestTimestamp: t.requestTimestamp,
															mediaSequence: t.mediaSequence
														}), i.SegmentList = [{
															SegmentURL: []
														}], this.updateSegmentList(i, t, n), this.sourceStore.dispatch((0, c.updateRepresentationAction)(i)), i
													}, e.prototype.updateSegmentList = function(t, n, r) {
														var i = r.flatMap((function(e) {
															return e.segments
														}));
														if (0 !== i.length) {
															if (t.SegmentList) {
																this.context.logger.debug("Updating segment list for playlist ".concat(t._id));
																var a = this.getTranslatedSegmentList(t, i);
																a.contentProtectionInfos.length > 0 && (t.ContentProtection = e.contentProtectionToXmlJson(a.contentProtectionInfos)), t.SegmentList[0].SegmentURL = a.entries, t.SegmentList[0]._duration = n.targetDuration, t.SegmentList[0]._timescale = 1
															}
														} else this.context.logger.debug("No segments for representation ".concat(t._id, " in loaded playlist"))
													}, e.prototype.getTranslatedSegmentList = function(e, t) {
														if (!this.isLive()) {
															var n = this.context.serviceManager.maybeCall(d.ServiceName.ManifestCachingService, (function(t) {
																return t.getSegmentList(e.Uri)
															}), null, this.sourceContext.sourceIdentifier);
															return n || (n = this.m3u8Translator.translateSegmentList(e, t), this.context.serviceManager.maybeCall(d.ServiceName.ManifestCachingService, (function(t) {
																return t.cacheSegmentList(n, e.Uri)
															}), null, this.sourceContext.sourceIdentifier)), n
														}
														return this.m3u8Translator.translateSegmentList(e, t)
													}, e.prototype.initSegmentStartTimesFromDiscoSequenceStartTime = function(e, t) {
														var n = this.getCurrentHlsState().discontinuitySequenceTiming,
															r = Object.keys(n).reverse().find((function(e) {
																return 0 !== n[e].startTime
															}));
														if (null != r) {
															var i = t.find((function(e) {
																return String(e.id) === r
															}));
															i && i.segments[0].discontinuity && this.sourceStore.dispatch((0, v.initSegmentStartTimes)(e, i.indexOfFirstSegment, n[r].startTime))
														} else this.context.logger.debug("Could not find any discontinuity start times to initialize expected segment playback times")
													}, e.prototype.calculatePlaylistStartTime = function(e) {
														var t = e.segments[0];
														e.endList ? (e.startTime = (0, a.getStartTimeOffset)(this.sourceStore.getState()), e.segments[0].startTime = e.startTime) : t && t.dateTime ? (e.startTime = (0, o.toSeconds)(t.dateTime.getTime()), e.segments[0].startTime = e.startTime) : e.startTime = (0, o.toSeconds)(e.requestTimestamp) - e.totalDuration
													}, e.prototype.isLive = function() {
														return "dynamic" === this.getManifest()._type
													}, e.contentProtectionToXmlJson = function(e) {
														return e.map((function(e) {
															var t = {
																_schemeIdUri: e.schemeIdUri
															};
															return e.defaultKid && (t["_cenc:default_KID"] = e.defaultKid), e.pssh && (t.pssh = [{
																__text: e.pssh
															}]), t
														}))
													}, e.prototype.dispose = function() {
														this.m3u8Translator = (0, i.dispose)(this.m3u8Translator)
													}, e
												}();
												t.M3u8DashManifest = A
											},
											62340: function(e, t, n) {
												var r = this && this.__assign || function() {
														return (r = Object.assign || function(e) {
															for (var t, n = 1, r = arguments.length; n < r; n++)
																for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
															return e
														}).apply(this, arguments)
													},
													i = this && this.__spreadArray || function(e, t, n) {
														if (n || 2 === arguments.length)
															for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
														return e.concat(r || Array.prototype.slice.call(t))
													};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.M3u8Loader = t.getParsedManifest = t.BackupStreamErrors = void 0;
												var a, o = n(36166),
													s = n(85739),
													u = n(59534),
													c = n(4529),
													l = n(59574),
													f = n(66996),
													d = n(83123),
													h = n(79446),
													p = n(41609),
													_ = n(22221),
													m = n(11917),
													b = n(50163),
													g = n(80815),
													v = n(29079),
													y = n(53001),
													A = n(88269),
													S = n(31998),
													w = n(10559),
													E = n(96400),
													T = n(42572),
													C = n(25935),
													$ = n(79712),
													k = n(47581),
													O = n(94946),
													x = n(76379);

												function P(e, t, n) {
													var r = n.url,
														i = n.manifestText;
													return e.serviceManager.maybeCall(u.ServiceName.ManifestCachingService, (function(e) {
														return e.getParsedManifest(r)
													}), null, t.sourceIdentifier) || (0, C.parseHlsManifest)(e, i)
												}! function(e) {
													e[e.NoBackupStreams = 0] = "NoBackupStreams", e[e.LoadingFailed = 1] = "LoadingFailed"
												}(a = t.BackupStreamErrors || (t.BackupStreamErrors = {})), t.getParsedManifest = P;
												var M = function() {
													function e(e, t) {
														var n = this;
														this.variantUpdateLoaders = {}, this.onMasterLoaded = function(e) {
															if (n.isCancelled) return Promise.reject();
															var t = e.url,
																r = e.body,
																i = {
																	url: t,
																	manifestText: r
																},
																a = P(n.context, n.sourceContext, i);
															return n.context.serviceManager.maybeCall(u.ServiceName.ManifestCachingService, (function(n) {
																n.cacheHttpResponse(e, t), n.cacheParsedManifest(a, t)
															}), null, n.sourceContext.sourceIdentifier), n.verifyMissingCodecs(a, r, t).then((function(e) {
																return n.handleMasterPlaylist(e, t), n.loadFirstVariants().then((function() {
																	return n.translatedManifest.getManifest()
																})).catch((function(e) {
																	return Promise.reject(new s.PlayerError(o.ErrorCode.SOURCE_HLS_STREAM_ERROR, {
																		error: e
																	}, "There was an error while retrieving the variant playlists."))
																}))
															})).catch((function(e) {
																var t = e instanceof s.PlayerError ? e : new s.PlayerError(o.ErrorCode.SOURCE_MANIFEST_INVALID);
																return n.context.logger.debug("codec verification failed", e), Promise.reject(t)
															}))
														}, this.context = e, this.sourceContext = t, this.registeredOnPlayEventHandlers = [], this.registeredOnPausedEventHandlers = [], this.discontinuitySequences = [], this.isCancelled = !1, this.translatedManifest = new $.M3u8DashManifest(e, t), this.masterPlaylistLoader = this.createLoader(p.HttpRequestType.MANIFEST_HLS_MASTER), this.sourceStore = e.serviceManager.get(u.ServiceName.SourceStoreService, t.sourceIdentifier), this.manifestService = e.serviceManager.get(u.ServiceName.ManifestService, t.sourceIdentifier)
													}
													return e.prototype.loadFirstVariants = function() {
														var e = this.sourceStore.getState(),
															t = this.translatedManifest.getManifest().Period[0],
															n = (0, y.findAdaptationSetOfMimeType)(b.MimeType.VideoMp4, t, {
																sourceState: e
															}),
															r = (0, y.findAdaptationSetOfMimeType)(b.MimeType.AudioMp4, t, {
																sourceState: e,
																playbackConfig: this.context.config.playback
															}),
															i = [];
														return n && i.push(this.loadFirstPlaylist(n)), r && i.push(this.loadFirstPlaylist(r)), Promise.all(i)
													}, e.prototype.loadFirstPlaylist = function(e) {
														var t = this,
															n = this.getStartRepresentation(e.Representation, e._mimeType, e);
														return n ? this.updateRepresentation(n).then((function(e) {
															return t.sourceStore.dispatch((0, S.setRepresentationIdAction)(n._internalId)), e
														})).catch((function() {
															return t.context.logger.debug("Representation failed to load, dropping it", n._id), e.Representation = e.Representation.filter((function(e) {
																return e !== n
															})), t.loadFirstPlaylist(e)
														})) : (this.context.logger.warn("All ".concat(e._mimeType, " variants/rendition failed to load")), Promise.reject("all failed"))
													}, e.prototype.getStartRepresentation = function(e, t, n) {
														return this.context.serviceManager.maybeCall(u.ServiceName.AdaptationService, (function(r) {
															r.setAdaptationSetId(n._mimeType, n._internalId);
															var i = r.selectRepresentation(t, {}, e);
															return e.find((function(e) {
																return e._internalId.equals(i)
															}))
														}))
													}, e.prototype.updateAdaptationSet = function(e) {
														var t = this,
															n = this.translatedManifest.findAdaptationSet(e);
														return n ? Promise.all(n.Representation.map((function(e) {
															var n = t.createLoader(p.HttpRequestType.MANIFEST_HLS_VARIANT);
															return t.loadPlaylist(n, e.Uri).then((function(n) {
																var r = t.onMediaLoaded(n, e);
																(0, C.isM3u8Error)(r) || t.sourceStore.dispatch((0, w.updateRepresentationAction)(r))
															}))
														}))) : Promise.reject("Could not find data")
													}, e.prototype.verifyMissingCodecs = function(e, t, n) {
														if (!(0, C.isValidHlsPlaylist)(e)) return Promise.reject("invalid playlist");
														var i = r(r({}, (0, C.ensureMasterPlaylist)(this.context, e, n)), {
																rawString: t
															}),
															a = new k.M3u8Translator(this.context, this.sourceContext),
															o = a.createDashManifestSkeleton(n, i);
														o = (0, A.initializeInternalIds)(o), this.backupStreamsMap = a.getBackupStreams();
														var s = (0, C.getAdaptationSetsWithUnknownCodecs)(o);
														return 0 === s.length ? Promise.resolve(i) : (this.context.logger.debug("Codecs are missing in master playlist - probing them from segments now"), this.parseMissingCodecs(i, s, a))
													}, e.prototype.parseMissingCodecsFromPlaylistResponse = function(e, t, n) {
														var r = e.url,
															i = e.body,
															a = {
																url: t.Uri,
																manifestText: i
															},
															o = P(this.context, this.sourceContext, a);
														t._hls = {
															mediaSequence: o.mediaSequence
														};
														var s = n.translateSegmentList(t, o.segments),
															c = !o.endList,
															l = c ? t._updateInterval : 1 / 0,
															f = Date.now() + (0, g.toMilliSeconds)(l);
														return this.context.serviceManager.maybeCall(u.ServiceName.ManifestCachingService, (function(t) {
															t.cacheHttpResponse(e, r, f), t.cacheParsedManifest(o, r, f)
														}), null, this.sourceContext.sourceIdentifier), new T.CodecDetector(this.context).probeCodecs(s.entries, c)
													}, e.prototype.getRepresentationForCodecDetection = function(e) {
														var t = e.Representation;
														return this.getStartRepresentation(t, "video", e)
													}, e.prototype.parseMissingCodecsForAdaptationSet = function(e, t, n) {
														var r = this,
															i = this.getRepresentationForCodecDetection(e);
														if (!i) return this.context.logger.warn("All video variants/rendition failed to load"), Promise.reject("all failed");
														e.Representation.splice(e.Representation.indexOf(i), 1);
														var a = new d.DefaultContentLoader(this.context, {
															requestType: p.HttpRequestType.MANIFEST_HLS_VARIANT
														});
														return this.loadPlaylist(a, i.Uri).then((function(e) {
															return r.parseMissingCodecsFromPlaylistResponse(e, i, t)
														})).then((function(e) {
															return (0, C.updateMissingCodecsForPlaylists)(e, n, i.Uri)
														})).catch((function(e) {
															var t;
															throw r.context.logger.debug("Problem while loading playlist for parsing missing codecs ".concat(null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : e), e), e
														}))
													}, e.prototype.parseMissingCodecs = function(e, t, n) {
														var r = this;
														return 0 === t.length ? Promise.resolve(e) : this.parseMissingCodecsForAdaptationSet(t.shift(), n, e).then((function() {
															return r.parseMissingCodecs(e, t, n)
														}))
													}, e.prototype.handleMasterPlaylist = function(e, t) {
														var n = this;
														void 0 === this.masterPlaylist && (this.masterPlaylist = e), this.translatedManifest.onMasterPlaylistAvailable(e, t), this.translatedManifest.getAllVariantRepresentions().forEach((function(e) {
															n.variantUpdateLoaders[e._id] = n.createLoader(p.HttpRequestType.MANIFEST_HLS_VARIANT)
														}))
													}, e.prototype.onMediaLoaded = function(e, t, n) {
														var r;
														if (void 0 === n && (n = Date.now()), this.isCancelled) return t;
														var i = e.url,
															a = e.body,
															o = {
																url: i,
																manifestText: a
															};
														if (!a) return f.M3u8Error.INAVLID;
														var s = P(this.context, this.sourceContext, o);
														if (s.requestTimestamp = n, O.M3u8Validator.checkForError(s)) return f.M3u8Error.INAVLID;
														s.mediaSequence = s.mediaSequence || 0, s.start = null !== (r = s.start) && void 0 !== r ? r : this.masterPlaylist.start, this.discontinuitySequences = (0, C.createDiscontinuitySequences)(s, this.discontinuitySequences);
														var c = this.filterTooSmallPeriods(this.discontinuitySequences, Boolean(s.endList)),
															l = this.translatedManifest.onMediaLoaded(a, t, s, c);
														return this.translatedManifest.isLive() || this.context.serviceManager.maybeCall(u.ServiceName.ManifestCachingService, (function(t) {
															t.cacheHttpResponse(e, i), t.cacheParsedManifest(s, i)
														}), null, this.sourceContext.sourceIdentifier), l
													}, e.prototype.filterTooSmallPeriods = function(e, t) {
														return e.filter((function(n, r) {
															var i = !t && r === e.length - 1,
																a = n.segments.reduce((function(e, t) {
																	return e + t.duration
																}), 0);
															return !!(0 === r && a > 0 || i) || a > 0
														}))
													}, e.prototype.stop = function() {
														var e = this;
														this.registeredOnPlayEventHandlers.forEach((function(t) {
															return e.context.eventHandler.off(l.PlayerEvent.Play, t)
														})), this.registeredOnPausedEventHandlers.forEach((function(t) {
															return e.context.eventHandler.off(l.PlayerEvent.Paused, t)
														})), this.registeredOnPlayEventHandlers = [], this.registeredOnPausedEventHandlers = [], this.stopLoaders(), this.isCancelled = !0
													}, e.prototype.stopLoaders = function() {
														var e = this;
														this.masterPlaylistLoader.cancel(), Object.keys(this.variantUpdateLoaders).forEach((function(t) {
															e.variantUpdateLoaders[t].dispose(), delete e.variantUpdateLoaders[t]
														}))
													}, e.prototype.load = function(e) {
														var t = this;
														return this.isCancelled = !1, this.loadPlaylist(this.masterPlaylistLoader, e).then(this.onMasterLoaded).catch((function(e) {
															if (e && !t.isCancelled) {
																var n = e instanceof s.PlayerError ? e : t.getErrorFromResponse(e);
																t.context.eventHandler.fireError(n)
															}
															return Promise.reject(null)
														}))
													}, e.prototype.updateRepresentation = function(e) {
														var t = this;
														this.context.logger.debug("M3u8Loader: updateRepresentation (" + e.Uri + ")");
														var n = this.variantUpdateLoaders[e._id];
														return this.loadPlaylist(n, e.Uri).then((function(n) {
															var r = t.onMediaLoaded(n, e);
															if ((0, C.isM3u8Error)(r)) throw r;
															return r
														})).catch((function() {
															return t.handleRepresentationUpdateFailure(e)
														}))
													}, e.prototype.handleRepresentationUpdateFailure = function(e) {
														var t = this;
														return this.context.logger.debug("M3u8Loader: updateRepresentation failed (" + e.Uri + ")"), this.switchToBackupStream(e).then((function(e) {
															var t = e[0],
																n = e[1];
															return !t || Object.values(a).includes(t) ? Promise.reject(t || f.M3u8Error.COULD_NOT_LOAD) : [t, n]
														})).then((function(e) {
															var n = e[0],
																r = e[1];
															return r && t.context.serviceManager.get(u.ServiceName.ManifestUpdateSchedulingService, t.sourceContext.sourceIdentifier).updateLinkedRepresentation(r), Promise.resolve(n)
														}))
													}, e.prototype.loadPlaylist = function(e, t) {
														var n;
														if (!t) return this.context.eventHandler.fireError(new s.PlayerError(o.ErrorCode.SOURCE_INVALID, void 0, "Cannot load the playlist: no URL was provided.")), Promise.reject(o.ErrorCode[o.ErrorCode.SOURCE_INVALID]);
														var r = this.context.serviceManager.maybeCall(u.ServiceName.ManifestCachingService, (function(e) {
															return e.getHttpResponse(t)
														}), null, this.sourceContext.sourceIdentifier);
														if (r) return Promise.resolve(r);
														var i = null === (n = this.sourceContext.source.options) || void 0 === n ? void 0 : n.manifestWithCredentials;
														return e.load(t, p.HttpRequestMethod.GET, null, null, null, i)
													}, e.prototype.createLoader = function(e) {
														var t = this;
														return new d.DefaultContentLoader(this.context, {
															onSuccess: function(e, n) {
																(0, h.isDownloadTimeInformationValid)(e) && t.context.store.dispatch((0, _.addMetricsValue)("default", m.MetricType.DownloadInformation, {
																	bytes: e.length,
																	time: e.elapsedTime,
																	timeToFirstByte: e.timeToFirstByte
																}))
															},
															maxRetries: this.context.settings.MAX_MPD_RETRIES,
															requestType: e,
															resetRetriesWhenOffline: !0
														})
													}, e.prototype.getErrorFromResponse = function(e) {
														var t = new s.PlayerError(o.ErrorCode.SOURCE_COULD_NOT_LOAD_MANIFEST, {
															sourceUrl: e.url,
															statusCode: e.status
														}, "Failed to load the playlist: ".concat(e.status, " ").concat(e.statusText, "."), this.sourceContext.sourceIdentifier);
														return e.status === XMLHttpRequest.UNSENT && (t = new s.PlayerError(o.ErrorCode.NETWORK_ERROR, {
															url: e.url,
															statusCode: e.status,
															statusText: e.statusText
														}, "Failed to load hls playlist, statusCode: ".concat(e.status, ", statusText: ").concat(e.statusText), this.sourceContext.sourceIdentifier)), t
													}, e.prototype.hasBackupStreams = function(e) {
														return e.backupUris && e.backupUris.length > 0
													}, e.prototype.findBackupStreamByUri = function(e) {
														var t;
														return null !== (t = this.backupStreamsMap.find((function(t) {
															return Object.keys(t).includes(e)
														}))) && void 0 !== t ? t : {}
													}, e.prototype.getLinkedVideoBackupUri = function(e) {
														var t = this.context.serviceManager.get(u.ServiceName.AdaptationService).getCurrentRepresentationId(b.MimeType.VideoMp4),
															n = this.manifestService.getRepresentationById(t),
															r = this.findBackupStreamByUri(null == n ? void 0 : n.Uri);
														return Object.keys(r).find((function(t) {
															return r[t] === e
														}))
													}, e.prototype.getLinkedAudioBackupUri = function(e) {
														return this.findBackupStreamByUri(e)[e]
													}, e.prototype.getLinkedRepToRotate = function(e) {
														var t = e._mimeType === b.MimeType.AudioMp4 ? this.getLinkedVideoBackupUri(e.backupUris[0]) : this.getLinkedAudioBackupUri(e.backupUris[0]);
														if (t) {
															var n = this.manifestService.getAllRepresentations().find((function(e) {
																return -1 !== e.backupUris.indexOf(t)
															}));
															if (n) {
																var r = n.backupUris.findIndex((function(e) {
																	return e === t
																}));
																return r > 0 && (n.backupUris = v.Util.arrayMove(n.backupUris, r, 0)), n
															}
														}
													}, e.prototype.switchToBackupStream = function(e) {
														if (!this.hasBackupStreams(e)) return Promise.reject(a.NoBackupStreams);
														var t = [];
														t.push(this.rotatePlaylistUrl(e));
														var n = this.getLinkedRepToRotate(e);
														return n && t.push(this.rotatePlaylistUrl(n)), Promise.all(t).then((function(e) {
															return Promise.resolve(e)
														})).catch((function() {
															return Promise.reject(a.LoadingFailed)
														}))
													}, e.prototype.rotatePlaylistUrl = function(e, t) {
														var n = this;
														if (void 0 === t && (t = []), !this.hasBackupStreams(e)) return Promise.reject(a.NoBackupStreams);
														var o = e._internalId,
															s = e.Uri,
															u = e.backupUris[0];
														t.push(s), this.context.logger.debug("Rotating URL for rep ".concat(e._id, " from ").concat(s, " to ").concat(u));
														var c = r(r({}, e), {
															Uri: u,
															backupUris: e.backupUris.slice(1),
															BaseURL: [{
																url: I(u, this.sourceStore.getState())
															}]
														});
														return this.sourceStore.dispatch((0, w.updateRepresentationAction)(c)), this.updateRepresentation(c).catch((function() {
															return n.rotatePlaylistUrl((0, C.getRepresentation)(o, (0, C.getPeriod)(n.sourceStore)), t).catch((function(e) {
																var a = (0, C.getRepresentation)(o, (0, C.getPeriod)(n.sourceStore));
																throw n.sourceStore.dispatch((0, w.updateRepresentationAction)(r(r({}, a), {
																	backupUris: i(i([], a.backupUris, !0), [t.shift()], !1)
																}))), e
															}))
														})).then((function() {
															var e = (0, C.getRepresentation)(o, (0, C.getPeriod)(n.sourceStore)),
																a = r(r({}, e), {
																	backupUris: i(i([], e.backupUris, !0), [t.shift()], !1)
																}),
																s = (0, w.updateRepresentationAction)(a);
															return n.sourceStore.dispatch(s), e
														}))
													}, e.prototype.dispose = function() {
														var e = this;
														this.stop(), this.translatedManifest = (0, c.dispose)(this.translatedManifest), this.masterPlaylist = null, this.masterPlaylistLoader.dispose(), Object.keys(this.variantUpdateLoaders).forEach((function(t) {
															return e.variantUpdateLoaders[t].dispose()
														})), this.variantUpdateLoaders = null
													}, e
												}();

												function I(e, t) {
													var n = (0, E.getManifest)(t).BaseURL[0].url;
													return x.PlaylistUtils.getBaseUrl(n, e)
												}
												t.M3u8Loader = M
											},
											88622: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.uniqueRenditions = void 0;
												var r = n(93842);
												t.uniqueRenditions = function(e) {
													var t = [];
													return e.forEach((function(e) {
														var n = t.findIndex((function(t) {
															return (0, r.compareValues)(e, t, ["GROUP-ID", "NAME", "TYPE"])
														}));
														if (-1 !== n) {
															var i = t[n];
															"YES" === e.DEFAULT && "YES" !== i.DEFAULT && (t[n] = e)
														} else t.push(e)
													})), t
												}
											},
											78750: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.M3u8RepresentationFactory = void 0;
												var r = n(14809),
													i = n(8833),
													a = n(46381),
													o = n(18432),
													s = n(5793),
													u = n(76379),
													c = function() {
														function e(e, t) {
															this.context = e, this.sourceContext = t
														}
														return e.prototype.create = function(e, t, n, i, a) {
															if (void 0 === a && (a = !0), !e) return null;
															var o = this.createBaseRepresentation(e, i);
															if (t === r.RepresentationType.AUDIO) o = this.extendToAudioRepresentation(e, o, n, i);
															else if (t === r.RepresentationType.VIDEO) o = this.extendToVideoRepresentation(e, o, n, i, a);
															else {
																if (t !== r.RepresentationType.SUBTITLE) return null;
																o = this.extendToSubtitleRepresentation(e, o, n, i)
															}
															var s = this.getLabelForRepresentation(o);
															return s && (o._label = s), o
														}, e.prototype.createBaseRepresentation = function(e, t) {
															var n = e.uri || e.URI;
															n && !s.URLHelper.isUrlAbsolute(n) && (n = s.URLHelper.concatBaseUrlWithPartial(t, n));
															var r = {
																_id: "",
																_mimeType: "",
																_bandwidth: 0,
																_codecs: "",
																_hls: {
																	requestTimestamp: 0
																},
																BaseURL: null,
																SegmentList: [{
																	SegmentURL: []
																}],
																Uri: n,
																backupUris: []
															};
															return e.backupStreamUris && e.backupStreamUris.forEach((function(e) {
																s.URLHelper.isUrlAbsolute(e) ? r.backupUris.push(e) : r.backupUris.push(s.URLHelper.concatBaseUrlWithPartial(t, e))
															})), e.NAME && (r._label = e.NAME), r
														}, e.prototype.extendToVideoRepresentation = function(e, t, n, r, i) {
															var o = t;
															if (o._mimeType = "video/" + n, o._width = 0, o._height = 0, o.BaseURL = [{
																	url: u.PlaylistUtils.getBaseUrl(r, e.uri)
																}], o._bandwidth = e.attributes["AVERAGE-BANDWIDTH"] || e.attributes.BANDWIDTH, o._bandwidth || (o._bandwidth = this.context.settings.MIN_SELECTABLE_VIDEO_BITRATE), o._bandwidth = Number(o._bandwidth), e.attributes.CODECS) {
																var s = a.CodecStringHelper.extractCodecStrings(e.attributes.CODECS);
																a.CodecStringHelper.hasOldAvc1CodecFormat(s.video) && (s.video = a.CodecStringHelper.convertAvc1ToAvcotiCodecFormat(s.video)), i ? s.video && s.audio ? o._codecs = s.video + "," + s.audio : s.video && !s.audio ? o._codecs = s.video : !s.video && s.audio && (o._codecs = s.audio) : o._codecs = s.video
															}
															return e.attributes["FRAME-RATE"] && (o._frameRate = parseFloat(e.attributes["FRAME-RATE"])), e.attributes.RESOLUTION && (o._width = e.attributes.RESOLUTION.width, o._height = e.attributes.RESOLUTION.height, o._id += e.attributes.RESOLUTION.height + "_"), o._id += e.attributes.BANDWIDTH, o
														}, e.prototype.extendToAudioRepresentation = function(e, t, n, r) {
															var i = t;
															return i._id = e.NAME + " " + e["GROUP-ID"] || "", i._mimeType = "audio/" + n, i._codecs = e.CODECS, i._name = e.NAME || "", i._groupId = e["GROUP-ID"] || "", i._label = i._name + " " + i._groupId, i.BaseURL = [{
																url: u.PlaylistUtils.getBaseUrl(r, e.URI || e.uri)
															}], i
														}, e.prototype.extendToSubtitleRepresentation = function(e, t, n, r) {
															var i = t;
															return i._id = e.NAME, i._mimeType = "application/" + n, i._codecs = "wvtt", i._name = e.NAME || "", i.BaseURL = [{
																url: u.PlaylistUtils.getBaseUrl(r, e.URI)
															}], i._hls.isForced = "YES" === e.FORCED, i
														}, e.prototype.getLabelForRepresentation = function(e) {
															var t = {
																id: e._id,
																mimeType: e._mimeType,
																width: e._width,
																height: e._height,
																bitrate: e._bandwidth
															};
															return (0, o.applyLabeling)({
																source: this.sourceContext.source,
																logger: this.context.logger,
																streamType: i.StreamType.Hls,
																labelingType: o.LabelingType.Qualities
															}, t)
														}, e
													}();
												t.M3u8RepresentationFactory = c
											},
											19648: function(e, t, n) {
												var r = this && this.__assign || function() {
														return (r = Object.assign || function(e) {
															for (var t, n = 1, r = arguments.length; n < r; n++)
																for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
															return e
														}).apply(this, arguments)
													},
													i = this && this.__spreadArray || function(e, t, n) {
														if (n || 2 === arguments.length)
															for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
														return e.concat(r || Array.prototype.slice.call(t))
													};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.updateMapEntry = t.createNewMapEntry = void 0;
												var a = n(89199),
													o = n(70121),
													s = n(80405);

												function u(e, t) {
													var n = e.segments.map((function(e) {
														return c(e, t)
													}));
													return {
														qualityInfo: {
															lastUpdateTimestamp: Date.now()
														},
														segmentInfos: n
													}
												}

												function c(e, t) {
													var n, r = {
														url: e.uri,
														isInitSegment: !1,
														downloaded: !1,
														internalRepresentationId: t._internalId,
														isDiscontinuityStart: e.discontinuity,
														discontinuitySequenceNumber: e.discontinuitySequenceNumber,
														duration: e.duration,
														startTime: e.startTime,
														periodId: t._internalId.periodId,
														key: e.key,
														metadata: null !== (n = e.metadata) && void 0 !== n ? n : [],
														mimeType: t._mimeType,
														bitrate: t._bandwidth,
														codecs: t._codecs
													};
													return e.byterange && (r.byteRange = {
														start: e.byterange.offset,
														end: e.byterange.offset + e.byterange.length
													}), e.init && (r.init = e.init), e.dateTime && (r.dateTime = e.dateTime), (0, a.isVideoRepresentation)(t) && (r.height = t._height, r.width = t._width, r.frameRate = t._frameRate), r.segmentId = (0, o.generateSegmentId)(r), r
												}
												t.createNewMapEntry = u, t.updateMapEntry = function(e, t, n) {
													var a = e.segmentInfos,
														o = a.findIndex((function(e) {
															return function(e, t) {
																var n = e.url === t.uri,
																	r = e.discontinuitySequenceNumber === t.discontinuitySequenceNumber,
																	i = !e.byteRange && !t.byterange,
																	a = e.byteRange && t.byterange && e.byteRange.start === t.byterange.offset && e.byteRange.end === t.byterange.offset + t.byterange.length;
																return n && r && (a || i)
															}(e, t.segments[0])
														}));
													if (-1 === o) return u(t, n);
													var l = a.length - o,
														f = t.segments.length - l;
													if (0 !== o || 0 !== f) {
														var d = t.segments.slice(-f).map((function(e) {
																return c(e, n)
															})),
															h = function(e) {
																var t = e[e.length - 1];
																if (void 0 !== t.startTime && void 0 !== t.duration) return t.startTime + t.duration
															}(a);
														return null != h && (0, s.forwardExtrapolateSegmentStartTime)(d, {
															index: 0,
															startTime: h
														}), {
															qualityInfo: r(r({}, e.qualityInfo), {
																lastUpdateTimestamp: Date.now()
															}),
															segmentInfos: i(i([], a.slice(o), !0), d, !0)
														}
													}
													return e
												}
											},
											47581: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsParsing = t.M3u8Translator = void 0;
												var i, a = n(14809),
													o = n(46381),
													s = n(5793),
													u = n(43068),
													c = n(83024),
													l = n(8073),
													f = n(71278),
													d = n(43233),
													h = n(88269),
													p = n(88622),
													_ = n(78750),
													m = n(76379),
													b = function() {
														function e(e, t) {
															this.adaptationsetId = 0, this.backupStreams = [], this.context = e, this.sourceContext = t, this.representationFactory = new _.M3u8RepresentationFactory(e, t)
														}
														return e.prototype.createCeaCaptionObjects = function(e, t) {
															for (var n = {}, r = {
																	_schemeIdUri: "urn:scte:dash:cc:cea-" + t + ":2015",
																	_value: ""
																}, i = 0; i < e.length; i++) {
																var a = e[i]["INSTREAM-ID"];
																n[a] = {
																	lang: e[i].LANGUAGE || e[i].NAME || a,
																	label: e[i].NAME || e[i].LANGUAGE || a
																}, r._value.length > 0 && (r._value += ";"), r._value += "708" === t ? a.substr(7) + "=lang:" : a + "=", r._value += e[i].LANGUAGE
															}
															return {
																closedCaptionLabel: n,
																accessibility: r
															}
														}, e.prototype.createCaptionElements = function(e) {
															if (!e) return {
																closedCaptionLabel: null,
																accessibility: []
															};
															var t = this.createCeaCaptionObjects(e.cea608, "608"),
																n = this.createCeaCaptionObjects(e.cea708, "708"),
																r = [],
																i = null;
															return t.accessibility._value && (r.push(t.accessibility), i = t.closedCaptionLabel), n.accessibility._value && r.push(n.accessibility), {
																closedCaptionLabel: i,
																accessibility: r
															}
														}, e.prototype.createAdaptationSetWithUnknownCodecs = function(e, t) {
															var n = this.adaptationsetId.toString(),
																r = {
																	_id: n,
																	_mimeType: "unknown",
																	_internalId: new f.AdaptationSetId(t, n),
																	Representation: [{
																		Uri: s.URLHelper.concatBaseUrlWithPartial(this.baseURL, e.uri),
																		BaseURL: [{
																			url: m.PlaylistUtils.getBaseUrl(this.baseURL, e.uri)
																		}],
																		_bandwidth: Number(e.attributes["AVERAGE-BANDWIDTH"] || e.attributes.BANDWIDTH),
																		_id: n
																	}],
																	isTransmuxingRequired: !0
																};
															return this.adaptationsetId++, r
														}, e.prototype.createVideoAdaptationSet = function(e, t, n, r, i) {
															for (var o = [], s = 1 / 0, u = 0, c = 1 / 0, l = 0, d = 1 / 0, h = 0, p = "video/" + r, _ = 0, m = e; _ < m.length; _++) {
																var b = m[_];
																if (b.uri) {
																	var g = this.representationFactory.create(b, a.RepresentationType.VIDEO, r, this.baseURL, this.assumeAudioMuxedIntoVideoTs);
																	o.push(g), s = Math.min(s, g._height), u = Math.max(u, g._height), c = Math.min(c, g._width), l = Math.max(l, g._width), d = Math.min(d, g._bandwidth), h = Math.max(h, g._bandwidth)
																}
															}
															o.sort((function(e, t) {
																return e._bandwidth - t._bandwidth
															}));
															var v = {
																Representation: o,
																ContentComponent: [{
																	_id: "video",
																	_contentType: "video"
																}],
																_id: String(this.adaptationsetId),
																_group: null,
																_mimeType: p,
																_internalId: new f.AdaptationSetId(n, String(this.adaptationsetId++)),
																_minBandwidth: d,
																_maxBandwidth: h,
																_minHeight: s,
																_maxHeight: u,
																_minWidth: c,
																_maxWidth: l,
																isTransmuxingRequired: !0
															};
															i && Object.keys(i).forEach((function(e) {
																i[e].entries.filter((function(e) {
																	return !e.URI
																})).forEach((function(e) {
																	v.ContentComponent.push({
																		_id: e.NAME,
																		_contentType: "audio",
																		_lang: e.LANGUAGE
																	})
																}))
															}));
															var y = this.createCaptionElements(t);
															y.closedCaptionLabel && (v.ClosedCaptionLabels = y.closedCaptionLabel), y.accessibility.length > 0 && (v.Accessibility = y.accessibility);
															var A = this.getLabelForAdaptationSet(v);
															return A && "string" == typeof A && (v._label = A), v
														}, e.prototype.createAudioAdaptationSet = function(e, t, n, r) {
															for (var i = [], o = 0, s = e; o < s.length; o++) {
																var u = s[o];
																if (u.uri) {
																	var c = this.representationFactory.create(u, a.RepresentationType.AUDIO, r, this.baseURL, this.assumeAudioMuxedIntoVideoTs);
																	i.push(c)
																}
															}
															i.sort((function(e, t) {
																return e._bandwidth - t._bandwidth
															}));
															var l = {
																	Representation: i,
																	_id: String(this.adaptationsetId),
																	_group: null,
																	_mimeType: "audio/" + r,
																	_internalId: new f.AdaptationSetId(n, String(this.adaptationsetId++)),
																	_minBandwidth: 1 / 0,
																	_maxBandwidth: 0,
																	isTransmuxingRequired: !0
																},
																d = this.createCaptionElements(t);
															d.closedCaptionLabel && (l.ClosedCaptionLabels = d.closedCaptionLabel), d.accessibility.length > 0 && (l.Accessibility = d.accessibility);
															var h = this.getLabelForAdaptationSet(l);
															return h && "string" == typeof h && (l._label = h), l
														}, e.prototype.createAudioAdaptationSets = function(e, t, n, r) {
															var i = this,
																o = this.context.settings.IGNORE_HLS_AUDIO_GROUPS,
																s = 0,
																u = [],
																c = function(t) {
																	return {
																		Representation: [],
																		_id: String(i.adaptationsetId),
																		_internalId: new f.AdaptationSetId(e, String(i.adaptationsetId++)),
																		_mimeType: "audio/" + n,
																		_minBandwidth: 1 / 0,
																		_maxBandwidth: -1,
																		_lang: t,
																		_group: String(s++),
																		isTransmuxingRequired: !0
																	}
																};
															return Object.keys(t).forEach((function(e) {
																var s, l, f = t[e],
																	d = f.entries.find((function(e) {
																		return e.LANGUAGE && "und" !== e.LANGUAGE
																	}));
																d && (s = d.LANGUAGE), o || (l = c(s));
																for (var h = 0, _ = (0, p.uniqueRenditions)(f.entries.filter((function(e) {
																		return e.URI
																	}))); h < _.length; h++) {
																	var m = _[h];
																	o && (l = c(s));
																	var b = i.representationFactory.create(m, a.RepresentationType.AUDIO, n, i.baseURL, i.assumeAudioMuxedIntoVideoTs);
																	y(r, b, s), l.Representation.push(b), l._minBandwidth = Math.min(l._minBandwidth, b._bandwidth), l._maxBandwidth = Math.max(l._maxBandwidth, b._bandwidth);
																	var g = m.CHARACTERISTICS;
																	if (g && 0 === g.indexOf(i.context.settings.HLS_VR_CHARACTERISTICS_UTI) && (l.Role = [{
																			_schemeIdUri: i.context.settings.VR_SCHEME_ID_URI,
																			_value: g.substring(i.context.settings.HLS_VR_CHARACTERISTICS_UTI.length)
																		}]), !l._label) {
																		var v = i.getLabelForAdaptationSet(l);
																		v && "string" == typeof v ? l._label = v : b._name ? l._label = b._name : l._label = e
																	}
																	o && l.Representation.length > 0 && u.push(l), l.Representation.sort((function(e, t) {
																		return e._bandwidth - t._bandwidth
																	}))
																}!o && l.Representation.length > 0 && u.push(l)
															})), u
														}, e.prototype.createSubtitleAdaptationSets = function(e, t, n) {
															var r = this,
																i = 0;
															return Object.values(t).filter((function(e) {
																return e.URI
															})).map((function(t) {
																var o = {
																		Representation: [],
																		_id: String(r.adaptationsetId),
																		_internalId: new f.AdaptationSetId(e, String(r.adaptationsetId++)),
																		_mimeType: "application/mp4",
																		_lang: t.LANGUAGE,
																		_group: "" + i++,
																		_isFragmented: !0
																	},
																	s = r.representationFactory.create(t, a.RepresentationType.SUBTITLE, n, r.baseURL, r.assumeAudioMuxedIntoVideoTs);
																o.Representation.push(s);
																var u = r.getLabelForAdaptationSet(o);
																return u && "string" == typeof u ? o._label = u : s._name ? o._label = s._name : o._label = t.LANGUAGE, o
															}))
														}, e.prototype.getLabelForAdaptationSet = function(e) {
															var t = {
																mimeType: e._mimeType,
																lang: e._lang
															};
															return e._label && (t.label = e._label), this.getLabelingFunctionForAdaptationSet()(t)
														}, e.prototype.getLabelingFunctionForAdaptationSet = function() {
															var e = this.context.sourceContext,
																t = e && e.source && e.source.labeling;
															return t && t.hls && t.hls.tracks ? "function" != typeof t.hls.tracks ? this.getDefaultLabelForAdaptationSet : t.hls.tracks : this.getDefaultLabelForAdaptationSet
														}, e.prototype.getDefaultLabelForAdaptationSet = function() {
															return null
														}, e.prototype.handleBackupStreams = function(e) {
															this.backupStreams = [];
															for (var t = e.playlists, n = 0; n < t.length; n++) {
																var r = t[n],
																	i = s.URLHelper.getAbsoluteUrl(r.uri, this.baseURL);
																r.backupStreamUris = r.backupStreamUris || [];
																var a = {};
																a[i] = A(e, r.attributes.AUDIO, this.baseURL);
																for (var o = n + 1; o < t.length; o++) {
																	var u = t[o],
																		c = r.attributes.BANDWIDTH === u.attributes.BANDWIDTH,
																		l = r.attributes.RESOLUTION && u.attributes.RESOLUTION,
																		f = !l || l && r.attributes.RESOLUTION.height === u.attributes.RESOLUTION.height && r.attributes.RESOLUTION.width === u.attributes.RESOLUTION.width;
																	if (c && f) {
																		if (!this.context.settings.DISABLE_HLS_BACKUP_STREAM_FAILOVER) {
																			r.backupStreamUris.push(u.uri);
																			var d = A(e, u.attributes.AUDIO, this.baseURL);
																			d && (a[s.URLHelper.getAbsoluteUrl(u.uri, this.baseURL)] = d)
																		}
																		t.splice(o, 1), o--
																	}
																}
																this.backupStreams.push(a)
															}
														}, e.prototype.getBackupStreams = function() {
															return this.backupStreams
														}, e.prototype.createDashManifestSkeleton = function(e, t) {
															var n = t;
															return this.baseURL = s.URLHelper.removeLastPathPart(e), this.handleBackupStreams(n), this.extractCodecInformation(n), this.playlistPreprocessing(n), this.assumeAudioMuxedIntoVideoTs = this.canAssumeAudioMuxedIntoVideo(n), (0, d.orderAdaptationSetsByCodec)({
																BaseURL: [{
																	url: this.baseURL
																}],
																Period: [this.createPeriod(n, "0")],
																_hasIndependentSegments: t.independentSegments,
																_isHls: !0,
																isInitialized: !1
															}, (0, h.getCodecPriorities)(this.context.config, this.sourceContext.source))
														}, e.prototype.extractCodecInformation = function(e) {
															var t = this;
															e.playlists.forEach((function(e) {
																if (e.attributes.CODECS) {
																	var n = o.CodecStringHelper.extractCodecStrings(e.attributes.CODECS);
																	if (!n.video && n.unknown && (e.attributes.RESOLUTION || e.attributes["FRAME-RATE"])) {
																		var r = o.CodecStringHelper.extractCodec(n.unknown);
																		t.context.logger.debug("Assuming unknown codec ".concat(r, " is video")), o.CodecStringHelper.addCodec("video", r)
																	}
																}
															}))
														}, e.prototype.isVariantOfMimeType = function(e, t) {
															return o.CodecStringHelper.getMimeTypeForCodecString(e.attributes.CODECS) === t
														}, e.prototype.removeUnsupportedAudioOnlyVariants = function(e) {
															var t = this,
																n = e.playlists.some((function(e) {
																	return t.isVariantOfMimeType(e, "video")
																})),
																r = e.playlists.some((function(e) {
																	return t.isVariantOfMimeType(e, "audio")
																}));
															n && r && (e.playlists = e.playlists.filter((function(e) {
																return t.isVariantOfMimeType(e, "video")
															})))
														}, e.prototype.playlistPreprocessing = function(e) {
															this.removeUnsupportedAudioOnlyVariants(e)
														}, e.prototype.getVideoCodecForPlaylist = function(e, t) {
															void 0 === t && (t = !1);
															var n = o.CodecStringHelper.extractCodecStrings(e.attributes.CODECS);
															return n.video ? (o.CodecStringHelper.hasOldAvc1CodecFormat(n.video) && (n.video = o.CodecStringHelper.convertAvc1ToAvcotiCodecFormat(n.video)), t ? n.video : n.video.split(".")[0]) : null
														}, e.prototype.getAudioCodecForPlaylist = function(e, t) {
															void 0 === t && (t = !1);
															var n = o.CodecStringHelper.extractCodecStrings(e.attributes.CODECS);
															return n.audio ? t ? n.audio : n.audio.split(".")[0] : null
														}, e.prototype.getAllVideoCodecs = function(e) {
															var t = this;
															return e.map((function(e) {
																return t.getVideoCodecForPlaylist(e)
															})).filter((function(e, t, n) {
																return e && n.indexOf(e) === t
															}))
														}, e.prototype.getAllAudioCodecs = function(e) {
															var t = this;
															return e.map((function(e) {
																return t.getAudioCodecForPlaylist(e)
															})).filter((function(e, t, n) {
																return e && n.indexOf(e) === t
															}))
														}, e.prototype.groupPlaylistsByCodec = function(e) {
															var t = this.getAllVideoCodecs(e),
																n = this.getAllAudioCodecs(e);
															if (0 === t.length && 0 === n.length) return {
																unknown: e
															};
															if (0 === t.length) {
																var r = {};
																return n.forEach((function(t) {
																	r[t] = e.filter((function(e) {
																		return e.attributes.CODECS && e.attributes.CODECS.includes(t)
																	}))
																})), r
															}
															var i = {};
															return t.forEach((function(t) {
																i[t] = e.filter((function(e) {
																	return e.attributes.CODECS && e.attributes.CODECS.includes(t)
																}))
															})), i
														}, e.prototype.createPeriod = function(t, n) {
															var r = this,
																a = {
																	_id: n,
																	_duration: "PT0S",
																	duration: 0,
																	AdaptationSet: []
																},
																s = i.extractMediaRenditions(t, this.context.settings.IGNORE_HLS_AUDIO_GROUPS, (function(e) {
																	if (null != e.attributes.CODECS) {
																		var t = function(e) {
																			return e.split(",").map((function(e) {
																				return o.CodecStringHelper.hasOldAvc1CodecFormat(e) ? o.CodecStringHelper.convertAvc1ToAvcotiCodecFormat(e) : e
																			})).join(",")
																		}(e.attributes.CODECS);
																		return r.context.renderer.isMediaTypeSupported("video/mp4", o.CodecStringHelper.extractCodecStrings(t).video)
																	}
																	return !0
																})),
																f = this.groupPlaylistsByCodec(t.playlists),
																d = Object.keys(f),
																h = d.filter((function(e) {
																	return o.CodecStringHelper.isVideoCodec(e)
																})).map((function(e) {
																	return r.createVideoAdaptationSet(f[e], s.captions, a._id, l.ContainerFormat.MP4, s.audio)
																})).filter((function(t) {
																	return t.Representation = t.Representation.reduce((function(t, n) {
																		var i = e.isRepresentationSupported(n, r.context.renderer),
																			a = Boolean(t.find((function(e) {
																				return e.Uri === n.Uri
																			})));
																		return i && !a && t.push(n), t
																	}), []), t.Representation.length > 0
																})),
																p = d.filter((function(e) {
																	return "unknown" === e
																})).flatMap((function(e) {
																	return f[e]
																})).map((function(e) {
																	return r.createAdaptationSetWithUnknownCodecs(e, a._id)
																})),
																_ = this.createAudioAdaptationSets(a._id, s.audio, l.ContainerFormat.MP4, t).filter((function(t) {
																	return t.Representation = t.Representation.filter((function(t) {
																		return e.isRepresentationSupported(t, r.context.renderer)
																	})), t.Representation.length > 0
																})).concat(d.filter((function(e) {
																	return o.CodecStringHelper.isAudioCodec(e)
																})).map((function(e) {
																	return r.createAudioAdaptationSet(f[e], s.captions, a._id, l.ContainerFormat.MP4)
																}))),
																m = this.createSubtitleAdaptationSets(a._id, s.subtitles, l.ContainerFormat.MP4);
															return a.AdaptationSet = [].concat(h, _, m, p), u.ModuleManager.has(c.ModuleName.Thumbnail) && (a.AdaptationSet = u.ModuleManager.get(c.ModuleName.Thumbnail).extendAdaptationSets(a.AdaptationSet, t, this.baseURL)), a
														}, e.isRepresentationSupported = function(e, t) {
															var n = !e._mimeType.includes("audio") && !e._mimeType.includes("video");
															if (!e._codecs || n) return !0;
															var r = o.CodecStringHelper.extractCodecStrings(e._codecs);
															return Object.keys(r).every((function(e) {
																return o.CodecStringHelper.isSupportedByRenderer(t, e + "/mp4", r[e])
															}))
														}, e.prototype.canAssumeAudioMuxedIntoVideo = function(e) {
															var t = e.media.filter((function(e) {
																return S(e.attributes)
															}));
															return !t.length || t.some((function(e) {
																return !e.attributes.URI
															}))
														}, e.prototype.translateSegmentList = function(e, t) {
															var n = [],
																i = s.URLHelper.getDomainUrl(e.BaseURL[0].url),
																a = [];
															return t.forEach((function(t, o) {
																t.uri = s.URLHelper.buildAbsoluteUrl(e.BaseURL[0].url, i, t.uri);
																var u = null;
																(t.keys || []).forEach((function(t) {
																	if (null !== v(t.uri)) void 0 !== a.find((function(e) {
																		return !Object.keys(t).some((function(n) {
																			return t[n] !== e[n]
																		}))
																	})) || a.push(t), a.length > 0 && (u = null);
																	else {
																		var n = new ArrayBuffer(16);
																		new DataView(n).setInt32(12, e._hls.mediaSequence + o), u = r(r({
																			iv: n
																		}, t), {
																			uri: s.URLHelper.buildAbsoluteUrl(e.BaseURL[0].url, i, t.uri)
																		})
																	}
																})), t.init && (t.init.url = s.URLHelper.buildAbsoluteUrl(e.BaseURL[0].url, i, t.init.url), u && (t.init.key = u));
																var c = {
																	_media: t.uri,
																	_duration: t.duration,
																	_key: u,
																	_metadata: [],
																	_init: t.init,
																	_discontinuitySequenceNumber: t.discontinuitySequenceNumber
																};
																["cueTag", "scte35", "customTags"].filter((function(e) {
																	return t.hasOwnProperty(e)
																})).forEach((function(e) {
																	return c._metadata = c._metadata.concat(t[e])
																})), t.dateTime && (c._dateTime = t.dateTime), t.byterange && (c._byteRange = {
																	start: t.byterange.offset,
																	end: t.byterange.offset + t.byterange.length - 1
																}), n.push(c)
															})), {
																entries: n,
																contentProtectionInfos: this.parseAllContentProtection(a)
															}
														}, e.prototype.parseAllContentProtection = function(e) {
															var t = this,
																n = [];
															return e.forEach((function(e) {
																var r = function(e, t) {
																	return u.ModuleManager.has(c.ModuleName.DRM) ? u.ModuleManager.get(c.ModuleName.DRM).ContentProtectionHelper.parseContentProtection(e, t) : null
																}(e, v(e.uri));
																r ? n.push(r) : t.context.logger.debug("Encountered unknown/unsupported DRM scheme:", e.keyformat)
															})), n
														}, e.prototype.dispose = function() {
															this.baseURL = null
														}, e
													}();
												t.M3u8Translator = b,
													function(e) {
														function t(e, t) {
															var n = {};
															return e.forEach((function(e) {
																var r = t[e["GROUP-ID"]] || t[Object.keys(t)[0]];
																e.BANDWIDTH = r[0].BANDWIDTH, e.CODECS = r[0].CODECS;
																var i = e["AVERAGE-BANDWIDTH"] || e.BANDWIDTH,
																	a = n[e.NAME];
																void 0 !== a ? (a.entries.push(e), a.MIN_BANDWIDTH = Math.min(a.MIN_BANDWIDTH, i), a.MAX_BANDWIDTH = Math.max(a.MAX_BANDWIDTH, i)) : n[e.NAME] = {
																	entries: [e],
																	MIN_BANDWIDTH: i,
																	MAX_BANDWIDTH: i
																}
															})), n
														}

														function n(e) {
															var t = {};
															return e.forEach((function(e) {
																return t[e.NAME] = e
															})), t
														}

														function r(e) {
															var t = {
																cea608: [],
																cea708: []
															};
															return e.forEach((function(e) {
																e["INSTREAM-ID"] && 0 === e["INSTREAM-ID"].indexOf("CC") ? t.cea608.push(e) : e["INSTREAM-ID"] && 0 === e["INSTREAM-ID"].indexOf("SERVICE") && t.cea708.push(e)
															})), t
														}

														function i(e) {
															var t = function(e) {
																var t = {};
																return e.forEach((function(e) {
																	var n = e.attributes.AUDIO;
																	t[n] || (t[n] = []);
																	var r = {
																		BANDWIDTH: e.attributes.BANDWIDTH,
																		CODECS: void 0
																	};
																	e.attributes.CODECS && e.attributes.CODECS.indexOf(",") > -1 && (r.CODECS = function(e) {
																		return e.attributes.CODECS.split(",").find((function(e) {
																			return o.CodecStringHelper.isAudioCodec(e)
																		}))
																	}(e)), t[n].push(r)
																})), t
															}(e);
															return function(e) {
																Object.values(e).forEach((function(e) {
																	e.sort((function(e, t) {
																		return e.BANDWIDTH - t.BANDWIDTH
																	}))
																}))
															}(t), t
														}
														e.extractMediaRenditions = function(e, a, o) {
															var s = e.playlists.filter(o),
																u = e.media.map((function(e) {
																	return e.attributes
																})),
																c = i(s),
																l = u.filter((function(e) {
																	var t = c[e["GROUP-ID"]];
																	return S(e) && (a || t)
																})),
																f = u.filter((function(e) {
																	return "SUBTITLES" === e.TYPE
																})),
																d = u.filter((function(e) {
																	return "CLOSED-CAPTIONS" === e.TYPE
																}));
															return {
																audio: t(l, c),
																subtitles: n(f),
																captions: r(d)
															}
														}, e.getPropertiesForAudioGroups = i
													}(i = t.HlsParsing || (t.HlsParsing = {}));
												var g = new RegExp(/^data:text\/plain.*;base64.*,(.+)/);

												function v(e) {
													var t = g.exec(e);
													return null !== t && 2 === t.length ? t[1] : null
												}

												function y(e, t, n) {
													var r, i;
													void 0 === n && (n = "und"), (null !== (i = null === (r = null == e ? void 0 : e.media) || void 0 === r ? void 0 : r.filter((function(e) {
														return S(e.attributes)
													}))) && void 0 !== i ? i : []).forEach((function(r) {
														var i = e.playlists.find((function(e) {
															return e.attributes.AUDIO === t._groupId
														}));
														if (i) {
															var a = function(e, t, n) {
																	var r;
																	return !!(null === (r = n.tags) || void 0 === r ? void 0 : r.filter((function(e) {
																		return "stream-inf" === e.name
																	})).find((function(n) {
																		var r;
																		return e.backupStreamUris.includes(n.value) && (null === (r = n.attributes) || void 0 === r ? void 0 : r.AUDIO) === t
																	})))
																}(i, r.attributes["GROUP-ID"], e),
																o = s.URLHelper.getAbsoluteUrl(r.attributes.URI, t.BaseURL[0].url);
															r.attributes.NAME === t._name && r.attributes.LANGUAGE === n && o !== t.Uri && a && t.backupUris.push(o)
														}
													}))
												}

												function A(e, t, n) {
													var r, i, a = null === (r = e.media) || void 0 === r ? void 0 : r.find((function(e) {
															return S(e.attributes) && e.attributes["GROUP-ID"] === t
														})),
														o = null === (i = null == a ? void 0 : a.attributes) || void 0 === i ? void 0 : i.URI;
													return o ? s.URLHelper.getAbsoluteUrl(o, n) : void 0
												}

												function S(e) {
													return "AUDIO" === e.TYPE
												}
											},
											94946: function(e, t) {
												var n;
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.M3u8Validator = t.M3u8ValidatorError = void 0,
													function(e) {
														e[e.EmptyPlaylist = 1] = "EmptyPlaylist"
													}(n = t.M3u8ValidatorError || (t.M3u8ValidatorError = {}));
												var r = function() {
													function e() {}
													return e.checkForError = function(t) {
														for (var n = 0, r = e.mediaPlaylistRules; n < r.length; n++) {
															var i = r[n];
															if (!i.fn(t)) return i.err
														}
														return null
													}, e.mediaPlaylistRules = [{
														fn: function(e) {
															return e.segments.length > 0
														},
														err: n.EmptyPlaylist
													}], e
												}();
												t.M3u8Validator = r
											},
											60918: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HLSModuleDefinition = void 0;
												var r = n(18873),
													i = n(83024),
													a = n(30410),
													o = n(67122),
													s = n(62340),
													u = n(76379),
													c = n(87510),
													l = n(95715),
													f = n(24965),
													d = {
														initSegmentStartTimes: c.initSegmentStartTimes,
														initSegmentStartTimesFromReferenceSegment: c.initSegmentStartTimesFromReferenceSegment,
														setPresentationTimeOffset: c.setPresentationTimeOffset,
														dropSegmentStartTimes: c.dropSegmentStartTimes,
														setTimestampRolloverPositions: c.setTimestampRolloverPositions
													},
													h = {
														getPresentationTimeOffset: f.getPresentationTimeOffset,
														getHlsState: f.getHlsState,
														getPlaylistType: f.getPlaylistType,
														getEndlist: f.getEndlist,
														getDefaultLanguages: f.getDefaultLanguages,
														getCustomTags: f.getCustomTags,
														hasPlaylist: f.hasPlaylist,
														getPlaylistStartTime: f.getPlaylistStartTime,
														getPlaylistSegments: f.getPlaylistSegments,
														getDiscoSequenceTiming: f.getDiscoSequenceTiming,
														getDiscoSequenceTimings: f.getDiscoSequenceTimings,
														getFirstDiscoSequenceTiming: f.getFirstDiscoSequenceTiming,
														hasSegmentStartTimesForPlaylist: f.hasSegmentStartTimesForPlaylist,
														getStartTimeForSegment: f.getStartTimeForSegment,
														hasInitializedSegmentStartTimes: f.hasInitializedSegmentStartTimes
													};
												t.HLSModuleDefinition = {
													name: i.ModuleName.HLS,
													module: function() {
														return {
															HlsTimelineTracker: o.HlsTimelineTracker,
															M3u8Loader: s.M3u8Loader,
															HlsUtils: r.HlsUtils,
															PlaylistUtils: u.PlaylistUtils,
															DiscontinuitySequenceNumberTracker: a.DiscontinuitySequenceNumberTracker,
															HlsReducer: l.HlsReducer,
															actions: d,
															selectors: h
														}
													},
													dependencies: [i.ModuleName.EngineBitmovin]
												}, t.default = t.HLSModuleDefinition
											},
											76379: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.calculateUpdateIntervalInSeconds = t.isSameSegmentEntry = t.PlaylistUtils = t.isMediaPlaylist = t.isMasterPlaylist = void 0;
												var i = n(80815),
													a = n(5793),
													o = n(93842);
												t.isMasterPlaylist = function(e) {
													return "playlists" in e
												}, t.isMediaPlaylist = function(e) {
													return !(0, t.isMasterPlaylist)(e)
												};
												var s = function() {
													function e() {}
													return e.createDiscontinuitySequences = function(t, n) {
														var r = t.discontinuitySequence;
														return null == r && (r = 0 !== n.length && e.isLive(t) ? this.findCurrentDiscontinuitySequenceNumber(t, n) : 0), t.segments.reduce((function(e, t, n) {
															return void 0 !== t.discontinuity && (r++, 0 === n ? e[e.length - 1].id = r : e.push({
																id: r,
																segments: [],
																duration: 0
															})), t.discontinuitySequenceNumber = r, t.duration > 0 && (e[e.length - 1].segments.push(t), e[e.length - 1].duration += t.duration), e
														}), [{
															id: r,
															segments: [],
															duration: 0
														}])
													}, e.findCurrentDiscontinuitySequenceNumber = function(e, t) {
														for (var n = [], r = 0, i = 0; i < t.length - 1; i++) r += t[i].segments.length, n.push(r);
														var a = [];
														return e.segments.forEach((function(e, t) {
															void 0 !== e.discontinuity && a.push(t)
														})), 0 === n.length ? t[0] ? t[0].id : 0 : 0 === a.length ? t[t.length - 1].id : a.length !== n.length ? a.length > n.length ? t[0].id : t[1].id : this.findFirstPeriodByIndexTracking(n, a, t)
													}, e.findFirstPeriodByIndexTracking = function(e, t, n) {
														if (e[0] > t[0]) return n[0].id;
														if (e[0] < t[0]) {
															for (var r = e[0] - t[0], i = 0, a = 0; a < e.length; a++) e[a] + r < t[0] && i++;
															return n[i].id
														}
														var o = function() {
															return e.every((function(e, n) {
																return e === t[n]
															}))
														};
														if (o()) return n[0].id;
														for (var s = 1; e.length > 0;) {
															for (e.shift(), a = 0; a < e.length; a++) e[a]--;
															if (o()) break;
															s++
														}
														return n[s].id
													}, e.extrapolateProgramDateTime = function(e) {
														var t = null;
														if (e.find((function(e, n) {
																return e.dateTime && (t = n), void 0 !== e.dateTime
															})), null !== t) {
															var n;
															for (n = t - 1; n >= 0; n--) {
																var r = e[n + 1].dateTime,
																	a = Math.ceil((0, i.toMilliSeconds)(e[n].duration));
																e[n].dateTime = new Date(r.getTime() - a)
															}
															for (n = t + 1; n < e.length; n++) {
																var o = e[n - 1].dateTime,
																	s = Math.ceil((0, i.toMilliSeconds)(e[n - 1].duration));
																e[n].dateTime = new Date(o.getTime() + s)
															}
														}
													}, e.isLive = function(e) {
														return !0 !== e.endList
													}, e.getProgramDateTimeFromSegmentUrl = function(e, t) {
														if (e.indexOf("akamaihd.net") > -1) {
															var n = e.match(/segment(\d{9})/);
															if (n && 2 === n.length) {
																var r = parseInt(n[1]) * Math.round((0, i.toMilliSeconds)(t));
																return new Date(r)
															}
														}
														return null
													}, e.correctStartOffsetToBounds = function(e, t) {
														return e > 0 && e > t ? t : e < 0 && Math.abs(e) > t ? -t : e
													}, e.getImpreciseStartOffsetFromStartOfPlaylist = function(e) {
														for (var t = e.start.timeOffset, n = 0, r = 0; r < e.segments.length && t - e.segments[r + 1].duration > 0; r++) {
															var i = e.segments[r].duration;
															t -= i, n += i
														}
														return n
													}, e.getImpreciseStartOffsetFromEndOfPlaylist = function(e) {
														for (var t = Math.abs(e.start.timeOffset), n = 0, r = e.segments.length - 1; r >= 0 && c(t, 1) > 0; r--) t -= e.segments[r].duration, n += c(e.segments[r].duration, 2);
														return e.totalDuration - n
													}, e.getImpreciseStartOffset = function(t) {
														return t.start.timeOffset >= 0 ? e.getImpreciseStartOffsetFromStartOfPlaylist(t) : e.getImpreciseStartOffsetFromEndOfPlaylist(t)
													}, e.getStartOffsetCloseToPlaylistEnd = function(t, n) {
														var r = t.start.timeOffset;
														return r = (r = e.correctStartOffsetToBounds(r, t.totalDuration)) < 0 ? -c(Math.abs(r), 2) : c(r, 2), Math.max(n, r)
													}, e.getStartOffset = function(t) {
														var n = t.start.timeOffset;
														return (n = e.correctStartOffsetToBounds(n, t.totalDuration)) < 0 && (n += t.totalDuration), t.start.precise || (n = e.getImpreciseStartOffset(t)), Number(n.toFixed(2))
													}, e.addNewSegments = function(e, t, n) {
														var r, i, o = n.BaseURL ? n.BaseURL[0].url : "",
															s = a.URLHelper.getDomainUrl(o);
														if (e.length < 1 && (null === (i = null === (r = n.SegmentList) || void 0 === r ? void 0 : r[0]) || void 0 === i ? void 0 : i.SegmentURL)) {
															var u = n.SegmentList[0].SegmentURL;
															t.forEach((function(t, n) {
																var r = u[n];
																r && (r._key && (t.key = r._key), r._dateTime && (t.dateTime = r._dateTime), r._metadata && (t.metadata = r._metadata), t.uri = a.URLHelper.buildAbsoluteUrl(o, s, t.uri), e.push(t))
															}))
														} else this.getSegmentsToAdd(e, t, o, s).forEach((function(t) {
															return e.push(t)
														}))
													}, e.getSegmentsToAdd = function(e, t, n, i) {
														for (var o, s = e[e.length - 1], c = [], l = t.length - 1; l >= 0 && ((o = r({}, t[l])).uri = a.URLHelper.buildAbsoluteUrl(n, i, o.uri), !u(o, s)); l--) c.unshift(o);
														return c
													}, e.removeDroppedOutSegments = function(e, t, n) {
														var i = a.URLHelper.getDomainUrl(n),
															o = r({}, t[0]);
														o.uri = o.uri = a.URLHelper.buildAbsoluteUrl(n, i, o.uri);
														for (var s = 0; s < e.length && !u(o, e[s]); s++) e.splice(s, 1), s--
													}, e.getBaseUrl = function(e, t) {
														var n = e;
														return n = a.URLHelper.removeUrlParameters(n), !(t = a.URLHelper.removeLastPathPart(t)) || t.indexOf("/") < 0 ? e : a.URLHelper.concatUrlParts(n, t)
													}, e
												}();

												function u(e, t) {
													var n = (0, o.compareValues)(e.byterange, t.byterange);
													return (0, o.compareValues)(e, t, ["uri", "discontinuitySequenceNumber"]) && n
												}

												function c(e, t) {
													return Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)
												}
												t.PlaylistUtils = s, t.isSameSegmentEntry = u, t.calculateUpdateIntervalInSeconds = function(e, t) {
													if (!s.isLive(t)) return 1 / 0;
													var n = t.segments[t.segments.length - 1];
													return void 0 !== n ? Math.max(e.MINIMUM_ALLOWED_UPDATE_PERIOD, n.duration) : e.MINIMUM_ALLOWED_UPDATE_PERIOD
												}
											},
											80405: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.hasDiscontinuityBoundary = t.findDiscontinuityBoundary = t.getStartTimeViaDiscontinuityBoundaries = t.getStartTimeExtrapolationReferencePoint = t.backwardExtrapolateSegmentStartTime = t.forwardExtrapolateSegmentStartTime = t.extrapolateStartTime = t.StartTimeExtrapolationDirection = void 0;
												var r, i = n(43587),
													a = n(12391),
													o = n(80815),
													s = n(26147);

												function u(e, t) {
													var n = t.index,
														r = t.startTime;
													e[n].startTime = r;
													for (var i = n + 1; i < e.length; i++) e[i].startTime = e[i - 1].startTime + e[i - 1].duration
												}

												function c(e, t) {
													var n = t.index,
														r = t.startTime;
													e[n].startTime = r;
													for (var i = n - 1; i >= 0; i--) e[i].startTime = e[i + 1].startTime - e[i].duration
												}

												function l(e, t) {
													if (d(e.segmentInfos) && d(t.segmentInfos)) {
														var n = t.segmentInfos[t.segmentInfos.length - 1],
															r = f(t.segmentInfos, n.discontinuitySequenceNumber),
															i = t.segmentInfos[r],
															a = f(e.segmentInfos, i.discontinuitySequenceNumber);
														if (null != a) return {
															index: a,
															startTime: i.startTime
														}
													}
												}

												function f(e, t) {
													return d(e) ? (0, a.findIndexFromEnd)(e, (function(e) {
														return Boolean(e.isDiscontinuityStart) && e.discontinuitySequenceNumber === t
													})) : -1
												}

												function d(e) {
													if (!e.length) return !1;
													if (e[0].isDiscontinuityStart) return !0;
													var t = e[0],
														n = e[e.length - 1];
													return t.discontinuitySequenceNumber !== n.discontinuitySequenceNumber
												}! function(e) {
													e.Backward = "backward", e.Forward = "forward", e.Bidirectional = "Bidirectional"
												}(r = t.StartTimeExtrapolationDirection || (t.StartTimeExtrapolationDirection = {})), t.extrapolateStartTime = function(e, t, n) {
													void 0 === n && (n = r.Bidirectional), n === r.Backward ? c(e, t) : (n === r.Forward || c(e, t), u(e, t))
												}, t.forwardExtrapolateSegmentStartTime = u, t.backwardExtrapolateSegmentStartTime = c, t.getStartTimeExtrapolationReferencePoint = function(e, t, n) {
													var r, a;
													if (t.endList) return {
														index: 0,
														startTime: (0, i.getStartTimeOffset)(n)
													};
													var u = e.segmentInfos[0];
													if (null == u ? void 0 : u.dateTime) return {
														index: 0,
														startTime: (0, o.toSeconds)(u.dateTime.getTime())
													};
													var c = (0, s.getMostRecentlyRefreshedQuality)(n);
													if (c) {
														var f = l(e, c);
														if (f) return f
													}
													return {
														index: 0,
														startTime: null !== (a = null === (r = null == c ? void 0 : c.segmentInfos[0]) || void 0 === r ? void 0 : r.startTime) && void 0 !== a ? a : (0, o.toSeconds)(t.requestTimestamp) - t.totalDuration
													}
												}, t.getStartTimeViaDiscontinuityBoundaries = l, t.findDiscontinuityBoundary = f, t.hasDiscontinuityBoundary = d
											},
											87510: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.setTimestampRolloverPositions = t.setPresentationTimeOffset = t.initSegmentStartTimesFromReferenceSegment = t.dropSegmentStartTimes = t.initSegmentStartTimes = t.updateDiscontinuityStartAndEndTimes = t.removeDroppedOutDiscontinuity = t.updatePlaylist = t.setCustomTags = t.setDefaultLanguages = t.setEndlist = t.setPlaylistType = t.setMasterPlaylistString = void 0;
												var r = n(32696),
													i = n(94388);
												t.setMasterPlaylistString = function(e) {
													return (0, r.createAction)(i.HlsActionType.SetMasterPlaylistString, e)
												}, t.setPlaylistType = function(e) {
													return (0, r.createAction)(i.HlsActionType.SetPlaylistType, e)
												}, t.setEndlist = function(e) {
													return (0, r.createAction)(i.HlsActionType.SetEndlist, e)
												}, t.setDefaultLanguages = function(e) {
													return (0, r.createAction)(i.HlsActionType.SetDefaultLanguages, e)
												}, t.setCustomTags = function(e) {
													return (0, r.createAction)(i.HlsActionType.SetCustomTags, e)
												}, t.updatePlaylist = function(e, t) {
													return (0, r.createAction)(i.HlsActionType.UpdatePlaylist, {
														playlist: e,
														representation: t
													})
												}, t.removeDroppedOutDiscontinuity = function(e, t) {
													return (0, r.createAction)(i.HlsActionType.RemoveDroppedOutDiscontinuity, {
														discoSequences: e,
														representation: t
													})
												}, t.updateDiscontinuityStartAndEndTimes = function(e, t) {
													return (0, r.createAction)(i.HlsActionType.UpdateDiscontinuityStartAndEndTimes, {
														discoSequences: e,
														representation: t
													})
												}, t.initSegmentStartTimes = function(e, t, n) {
													return (0, r.createAction)(i.HlsActionType.InitSegmentStartTimes, {
														playlistId: e,
														segmentIndex: t,
														startTime: n
													})
												}, t.dropSegmentStartTimes = function() {
													return (0, r.createAction)(i.HlsActionType.DropSegmentStartTimes)
												}, t.initSegmentStartTimesFromReferenceSegment = function(e) {
													return (0, r.createAction)(i.HlsActionType.InitSegmentStartTimesFromReferenceSegment, {
														playlistId: e.getRepresentationId().representationId,
														segmentUrl: e.getUrl(),
														segmentPlaybackTime: e.getPlaybackTime(),
														discontinuitySequenceNumber: e.getSegmentInfo().discontinuitySequenceNumber
													})
												}, t.setPresentationTimeOffset = function(e, t) {
													return (0, r.createAction)(i.HlsActionType.SetPresentationTimeOffset, {
														discoSequenceNumber: e,
														presentationTimeOffset: t
													})
												}, t.setTimestampRolloverPositions = function(e, t) {
													return (0, r.createAction)(i.HlsActionType.SetTimestampRolloverPositions, {
														next: e,
														previous: t
													})
												}
											},
											95715: function(e, t, n) {
												var r, i = this && this.__assign || function() {
														return (i = Object.assign || function(e) {
															for (var t, n = 1, r = arguments.length; n < r; n++)
																for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
															return e
														}).apply(this, arguments)
													},
													a = this && this.__spreadArray || function(e, t, n) {
														if (n || 2 === arguments.length)
															for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
														return e.concat(r || Array.prototype.slice.call(t))
													};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.extrapolateSegmentStartTime = t.HlsReducer = void 0;
												var o = n(89464),
													s = n(76379),
													u = n(24965),
													c = n(94388);

												function l(e, t) {
													return {
														startTime: e,
														endTime: e + t
													}
												}

												function f(e, t, n) {
													var r = a([], e, !0);
													return r[t] = i({}, r[t]), r[t].startTime = n,
														function(e, t) {
															for (var n = t - 1; n >= 0; n--) e[n] = i({}, e[n]), e[n].startTime = e[n + 1].startTime - e[n].duration
														}(r, t), d(r, t), r
												}

												function d(e, t) {
													for (var n = t + 1; n < e.length; n++) e[n] = i({}, e[n]), e[n].startTime = e[n - 1].startTime + e[n - 1].duration
												}
												t.HlsReducer = (0, o.default)({
													masterPlaylist: {
														string: ""
													},
													playlists: {},
													defaultLanguages: {},
													discontinuitySequenceTiming: {},
													presentationTimeOffsets: {},
													timestampRolloverPositions: {
														previous: -1,
														next: -1
													}
												}, ((r = {})[c.HlsActionType.SetMasterPlaylistString] = function(e, t) {
													return function(e, t) {
														return e.masterPlaylist.string ? e : i(i({}, e), {
															masterPlaylist: {
																string: t
															}
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetPlaylistType] = function(e, t) {
													return function(e, t) {
														return i(i({}, e), {
															playlistType: t
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetEndlist] = function(e, t) {
													return function(e, t) {
														return i(i({}, e), {
															endlist: t
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetDefaultLanguages] = function(e, t) {
													return function(e, t) {
														var n = {},
															r = {};
														return t.media.forEach((function(e) {
															var t = Boolean(e.attributes);
															if (t) {
																var i = e.attributes,
																	a = i.TYPE,
																	o = i.LANGUAGE;
																Boolean(o) && null != o && (t && "YES" === e.attributes.DEFAULT && !n[a] && (n[a] = {
																	name: e.attributes.NAME,
																	language: o
																}), "YES" === e.attributes.AUTOSELECT && !r[a] && (r[a] = {
																	name: e.attributes.NAME,
																	language: o
																}))
															}
														})), i(i({}, e), {
															defaultLanguages: i(i({}, r), n)
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetCustomTags] = function(e, t) {
													return function(e, t) {
														var n = t;
														return i(i({}, e), {
															customTags: n.tags
														})
													}(e, t.payload)
												}, r[c.HlsActionType.UpdatePlaylist] = function(e, t) {
													return function(e, t) {
														var n, r = t.playlist,
															o = t.representation,
															u = o._id,
															c = r.startTime,
															l = r.totalDuration,
															f = e.playlists[u] ? a([], e.playlists[u].segments, !0) : [];
														s.PlaylistUtils.removeDroppedOutSegments(f, r.segments, o.BaseURL[0].url), s.PlaylistUtils.addNewSegments(f, r.segments, o),
															function(e) {
																if (!(e.length < 1 || null == e[0].startTime)) {
																	for (var t, n = e.length - 1; n >= 0; n--)
																		if (null != e[n].startTime) {
																			t = n;
																			break
																		} d(e, t)
																}
															}(f);
														var h = e.playlists[u] ? i(i({}, e.playlists[u]), {
															segments: f,
															startTime: c,
															duration: l
														}) : {
															segments: f,
															startTime: c,
															duration: l
														};
														return i(i({}, e), {
															playlists: i(i({}, e.playlists), (n = {}, n[u] = h, n))
														})
													}(e, t.payload)
												}, r[c.HlsActionType.RemoveDroppedOutDiscontinuity] = function(e, t) {
													return function(e, t) {
														var n = t.discoSequences,
															r = t.representation,
															a = (0, u.getPlaylistSegments)(e, r._id);
														if (!a || !a.length) return e;
														var o = a[0].startTime,
															s = {};
														return n.forEach((function(t) {
															var n = String(t.id),
																r = (0, u.getDiscoSequenceTiming)(e, n);
															null === r ? s[n] = null : (o < r.endTime || null == o) && (s[n] = i({}, r))
														})), i(i({}, e), {
															discontinuitySequenceTiming: s
														})
													}(e, t.payload)
												}, r[c.HlsActionType.UpdateDiscontinuityStartAndEndTimes] = function(e, t) {
													return function(e, t) {
														var n = t.discoSequences,
															r = t.representation,
															a = (0, u.getPlaylistSegments)(e, r._id),
															o = !e.endlist,
															s = {},
															c = null == e ? void 0 : e.playlists[r._id];
														return a && a.length ? (n.forEach((function(t, n) {
															var r, i, f = (0, u.getDiscoSequenceTiming)(e, String(t.id)),
																d = function(e, t, n, r) {
																	if (e.filter((function(e) {
																			return e.discontinuitySequenceNumber === t.id
																		})).every((function(e) {
																			return null != e.startTime
																		}))) return {
																		startTime: e[t.indexOfFirstSegment].startTime,
																		endTime: e[t.indexOfLastSegment].startTime + e[t.indexOfLastSegment].duration
																	};
																	var i = t.segments.reduce((function(e, t) {
																			return e + t.duration
																		}), 0),
																		a = e[t.indexOfFirstSegment - 1];
																	if (a && null != a.startTime) return l(a.startTime + a.duration, i);
																	var o = r[t.id - 1];
																	return l(null != o ? o.endTime : null != (null == n ? void 0 : n.startTime) ? n.startTime : 0, i)
																}(a, t, c, s);
															f && 0 !== (null == f ? void 0 : f.startTime) && 0 !== n && (d.startTime = f.startTime), d.endTime = o ? Math.max(null !== (r = null == f ? void 0 : f.endTime) && void 0 !== r ? r : 0, d.endTime) : Math.min(null !== (i = null == f ? void 0 : f.endTime) && void 0 !== i ? i : 1 / 0, d.endTime), s[String(t.id)] = d
														})), i(i({}, e), {
															discontinuitySequenceTiming: i(i({}, e.discontinuitySequenceTiming), s)
														})) : e
													}(e, t.payload)
												}, r[c.HlsActionType.InitSegmentStartTimes] = function(e, t) {
													return function(e, t) {
														var n, r = t.playlistId,
															a = t.segmentIndex,
															o = t.startTime,
															s = e.playlists[r];
														if (!s) return e;
														var u = i(i({}, s), {
															segments: f(s.segments, a, o)
														});
														return i(i({}, e), {
															playlists: i(i({}, e.playlists), (n = {}, n[r] = u, n))
														})
													}(e, t.payload)
												}, r[c.HlsActionType.DropSegmentStartTimes] = function(e, t) {
													return i(i({}, e), {
														playlists: function(e) {
															var t = {};
															return Object.keys(e).forEach((function(n) {
																t[n] = i(i({}, e[n]), {
																	segments: e[n].segments.map((function(e) {
																		return i(i({}, e), {
																			startTime: void 0
																		})
																	}))
																})
															})), t
														}(e.playlists)
													})
												}, r[c.HlsActionType.InitSegmentStartTimesFromReferenceSegment] = function(e, t) {
													return function(e, t) {
														var n, r = t.playlistId,
															a = t.segmentUrl,
															o = t.segmentPlaybackTime,
															s = t.discontinuitySequenceNumber,
															u = e.playlists[r];
														if (!u || u.segments.length < 1) return e;
														if (null != u.segments[0].startTime) return e;
														var c = u.segments.findIndex((function(e) {
															return a.includes(e.uri) && s === e.discontinuitySequenceNumber
														}));
														if (c < 0) return e;
														var l = i(i({}, u), {
															segments: f(u.segments, c, o)
														});
														return i(i({}, e), {
															playlists: i(i({}, e.playlists), (n = {}, n[r] = l, n))
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetPresentationTimeOffset] = function(e, t) {
													return function(e, t) {
														var n, r = t.discoSequenceNumber,
															a = t.presentationTimeOffset;
														return i(i({}, e), {
															presentationTimeOffsets: i(i({}, e.presentationTimeOffsets), (n = {}, n[r] = a, n))
														})
													}(e, t.payload)
												}, r[c.HlsActionType.SetTimestampRolloverPositions] = function(e, t) {
													return function(e, t) {
														return i(i({}, e), {
															timestampRolloverPositions: t
														})
													}(e, t.payload)
												}, r)), t.extrapolateSegmentStartTime = f
											},
											24965: function(e, t) {
												var n = this && this.__assign || function() {
													return (n = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};

												function r(e) {
													var t;
													return null != (null === (t = e.segments[0]) || void 0 === t ? void 0 : t.startTime) || !1
												}
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.hasInitializedSegmentStartTimes = t.getPresentationTimeOffset = t.hasSegmentStartTimesForPlaylist = t.getStartTimeForSegment = t.getFirstDiscoSequenceTiming = t.getDiscoSequenceTimings = t.getDiscoSequenceTiming = t.getPlaylistStartTime = t.getPlaylistSegments = t.getPlaylist = t.hasPlaylist = t.getCustomTags = t.getDefaultLanguages = t.getEndlist = t.getPlaylistType = t.getHlsState = void 0, t.getHlsState = function(e) {
													return e.hls
												}, t.getPlaylistType = function(e) {
													return e.playlistType
												}, t.getEndlist = function(e) {
													return e.endlist
												}, t.getDefaultLanguages = function(e) {
													return e.defaultLanguages
												}, t.getCustomTags = function(e) {
													return e.customTags
												}, t.hasPlaylist = function(e, t) {
													return Object.keys(e.playlists).includes(t)
												}, t.getPlaylist = function(e, t) {
													return e.playlists[t]
												}, t.getPlaylistSegments = function(e, t) {
													return e.playlists[t] ? e.playlists[t].segments : []
												}, t.getPlaylistStartTime = function(e, t) {
													return e.playlists[t] ? e.playlists[t].startTime : 0
												}, t.getDiscoSequenceTiming = function(e, t) {
													return e.discontinuitySequenceTiming[t] ? n({}, e.discontinuitySequenceTiming[t]) : null
												}, t.getDiscoSequenceTimings = function(e) {
													return e.discontinuitySequenceTiming
												}, t.getFirstDiscoSequenceTiming = function(e) {
													var t = Object.keys(e.discontinuitySequenceTiming)[0];
													return null != t ? e.discontinuitySequenceTiming[t] : {
														startTime: 0,
														endTime: 0
													}
												}, t.getStartTimeForSegment = function(e, t, n) {
													var r = e.playlists[t];
													if (!r) return null;
													var i = r.segments.find((function(e) {
														return n.url.includes(e.uri) && e.discontinuitySequenceNumber === n.discontinuitySequenceNumber
													}));
													return i && null != i.startTime ? i.startTime : r.startTime
												}, t.hasSegmentStartTimesForPlaylist = function(e, t) {
													var n = e.playlists[t];
													return Boolean(n) && n.segments.length > 0 && null != n.segments[0].startTime
												}, t.getPresentationTimeOffset = function(e, t) {
													return Object.keys(e.presentationTimeOffsets).includes(t) ? e.presentationTimeOffsets[t] : null
												}, t.hasInitializedSegmentStartTimes = function(e) {
													return Object.values(e.playlists).some(r)
												}
											},
											94388: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.HlsActionType = void 0,
													function(e) {
														e.SetMasterPlaylistString = "@instance/hls/setmasterplayliststring", e.SetPlaylistType = "@instance/hls/setplaylisttype", e.SetEndlist = "@instance/hls/setendlist", e.SetDefaultLanguages = "@instance/hls/setsefaultlanguages", e.SetCustomTags = "@instance/hls/setsustomtags", e.UpdatePlaylist = "@instance/hls/updatePlaylist", e.RemoveDroppedOutDiscontinuity = "@instance/hls/removedroppedoutdiscontinuity", e.UpdateDiscontinuityStartAndEndTimes = "@instance/hls/updatediscontinuitystartandendtimes", e.InitSegmentStartTimes = "@instance/hls/initsegmentstarttimes", e.DropSegmentStartTimes = "@instance/hls/dropsegmentstarttimes", e.InitSegmentStartTimesFromReferenceSegment = "@instance/hls/initsegmentstarttimesfromreferencesegment", e.SetPresentationTimeOffset = "@instance/hls/setpresentationtimeoffset", e.SetTimestampRolloverPositions = "@instance/hls/settimestamprolloverpositions"
													}(t.HlsActionType || (t.HlsActionType = {}))
											},
											44699: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.updateSegmentInfos = t.setSegmentInfos = void 0;
												var r = n(32696),
													i = n(13561);
												t.setSegmentInfos = function(e, t) {
													return (0, r.createAction)(i.SegmentInfoMapActionType.SetSegmentInfos, {
														qualityPath: e,
														updatedEntry: t
													})
												}, t.updateSegmentInfos = function(e, t) {
													return (0, r.createAction)(i.SegmentInfoMapActionType.UpdateSegmentInfos, {
														qualityPath: e,
														updatedEntry: t
													})
												}
											}
										},
										function(e) {
											return e(e.s = 60918)
										}
									])
								},
								912: function(e, t, n) {
									var r, i, a, o, s, u;
									e = n.nmd(e), (u = function(e, t) {
										for (var n = e.length, r = [], i = 0; i < n; i++) r[i] = e.charAt(i);
										for (i = 0; i < n; i++) {
											var a = t * (i + 98) + t % 27845,
												o = t * (i + 530) + t % 22957,
												s = a % n,
												u = o % n,
												c = r[s];
											r[s] = r[u], r[u] = c, t = (a + o) % 2275530
										}
										var l = String.fromCharCode(127);
										return r.join("").split("%").join(l).split("#1").join("%").split("#0").join("#").split(l)
									}("AsSAlfnsFtnC_LeclcndyYrLcytcedLn%htd%LtvcTCASenacHrwiypnttu%e%NctpooLhFoaBtcaMisp%bs%eDx_lelEoPsOLgrtbsbT%htch%l%naprwnihoceLy%oecCttetlPta%cEbliLv%euaYn%r%RoeCisoaAeTru%tuyaIdbpTLrl%ocWCoLrseounengulgRyucK%lUuCer%oaeAYLdis%yrr%skTcogikterGaisEuLgr_tonaNeaL%UtEeptGUlRT%AefceneATLsraFehyddldelkt%%afvtbOzCrdfUsglcEzFbesiyifLcBttayaSt%sbuKn%teEsPttokeoCitfculoocoy%%sOiStkrelTir_LF_TAgg%peGenR_P%katuCeponTttwlaccr%rieieieaom%i%%afmg%ectnC%EegeetTg_otoCa_To%aREetLFTAtueckteAoru%%dACgeeDafceCaocyArhDwLf_loevkuotaAooiiyrageteltogwEecytnaig%MAteaErCuApnoaCaspenePiorcdnbk%naafeiCaSPfc_wC%efS%n%lsOi oo%it_lafrrapnC%oCitedettaBlCeNkaromsknMaM__il%RceCbnciaoera_Tg_rLvvTnng%_odrdL%nteotilef%ekmdol_Menycd%%blctansLchuelntino%nCekgmD%ohWto%LsciecyisaTrAaothht%e%Oab_nlctd%WiyflceeaoahecuvclTnnWgwtedDTlait%fntRnk%ftyageSATAeSl%goYnYeesiinW%wrypind%auyegolmoPlaLYocterflfeeadk%digsAtdgossyeeetcAlbleerSidelfesttlptcCeiCWameFfLumpclpocEemtc%aniner%Sionu%t%aedaypevwtgTLteenaNC%tfscea%opaeaceoYee_nLpnsCinauyLETiC%tkinTScalegeconedBscevvtelEhLOUov%ftNsei%raueadIneettfledosauAUL%lFlaitlneptamvsLrgulyrreCucesanLnldig%i%%rnepPinLeeFknFncmmmpDc%K%tyCiSFFnCiAmplealTTaoyaecohix%rnoTi%ri%P%ohNytiucrt_esklrg%cCeyntebvAl%ncalgST%iegtc%emeuencfCa%ncTeNtmk_re%nb_ef%LpRattlpeencxCh%%tN%eTf%esk_masereuonoCa%gjHl_LyaeSymreDbpcasan%asfeirvcaTekebeadrerli%%%lpnnt", 76796))[0], o = self, s = function() {
										return (self[u[92]] = self[u[92]] || [])[u[91]]([
											[267], {
												21188: function(e, t) {
													Object[u[2]](t, u[1], {
															value: !0
														}), t[u[3]] = void 0,
														function(e) {
															e[e[u[4]] = 0] = u[4], e[e[u[5]] = 1] = u[5], e[e[u[6]] = 2] = u[6]
														}(t[u[3]] || (t[u[3]] = {}))
												},
												54428: function(e, t, n) {
													var r = this && this[u[7]] || function() {
														function e(e) {
															for (var t, n = 1, r = arguments[u[9]]; n < r; n++)
																for (var i in t = arguments[n]) Object[u[12]][u[11]][u[10]](t, i) && (e[i] = t[i]);
															return e
														}
														return (r = Object[u[8]] || e)[u[13]](this, arguments)
													};
													Object[u[2]](t, u[1], {
														value: !0
													}), t[u[14]] = void 0;
													var i = n(59574),
														a = n(21188),
														o = n(42673),
														s = function() {
															function e(e) {
																this[u[15]] = {
																	mode: i[u[17]][u[16]],
																	requiredAction: a[u[3]][u[5]],
																	actionParam: 1
																}, this[u[18]] = e, this[u[19]] = new o[u[20]](e), this[u[21]] = e[u[23]][u[22]], this[u[24]] = {
																	playbackRate: e[u[23]][u[25]],
																	playbackRateThreshold: 1 / 0,
																	seekThreshold: 1 / 0
																}, this[u[26]] = {
																	playbackRate: e[u[23]][u[27]],
																	playbackRateThreshold: 1 / 0,
																	seekThreshold: 1 / 0
																}, this[u[29]](e[u[28]])
															}
															return e[u[12]][u[29]] = function(e) {
																if (e[u[30]] && e[u[30]][u[31]]) {
																	var t = e[u[30]][u[31]];
																	t[u[32]] = null != t[u[32]] ? t[u[32]] : this[u[18]][u[23]][u[33]], t[u[34]] = r(r({}, this[u[26]]), t[u[34]]), t[u[35]] = r(r({}, this[u[24]]), t[u[35]]), this[u[36]] = t
																}
															}, e[u[12]][u[37]] = function() {
																var e = {};
																return e[u[32]] = this[u[18]][u[23]][u[33]], e[u[34]] = r({}, this[u[26]]), e[u[35]] = r({}, this[u[24]]), e
															}, e[u[12]][u[38]] = function() {
																return this[u[19]][u[38]]()
															}, e[u[12]][u[39]] = function() {
																if (this[u[36]]) return this[u[36]][u[32]]
															}, e[u[12]][u[40]] = function(e) {
																this[u[36]] = this[u[36]] || this[u[37]](), this[u[36]][u[32]] = e
															}, e[u[12]][u[41]] = function(e) {
																this[u[36]] = this[u[36]] || this[u[37]](), this[u[36]][u[34]] = r(r({}, this[u[26]]), e)
															}, e[u[12]][u[42]] = function() {
																if (this[u[36]]) return this[u[36]][u[34]]
															}, e[u[12]][u[43]] = function(e) {
																this[u[36]] = this[u[36]] || this[u[37]](), this[u[36]][u[35]] = r(r({}, this[u[24]]), e)
															}, e[u[12]][u[44]] = function() {
																if (this[u[36]]) return this[u[36]][u[35]]
															}, e[u[12]][u[45]] = function(e, t) {
																var n = this[u[19]][u[38]]();
																return this[u[46]] || !this[u[36]] || n === 1 / 0 ? {
																	mode: i[u[17]][u[47]],
																	requiredAction: a[u[3]][u[4]]
																} : n < this[u[36]][u[32]] ? this[u[48]](e, n) : n > this[u[36]][u[32]] ? this[u[49]](e, n, t) : this[u[15]]
															}, e[u[12]][u[48]] = function(e, t) {
																var n = this[u[36]][u[32]],
																	r = this[u[36]][u[35]],
																	o = t < n - r[u[50]],
																	s = t < n - r[u[51]];
																return o ? {
																	mode: i[u[17]][u[52]],
																	requiredAction: a[u[3]][u[6]],
																	actionParam: n
																} : e === i[u[17]][u[52]] || s ? {
																	mode: i[u[17]][u[52]],
																	requiredAction: a[u[3]][u[5]],
																	actionParam: r[u[53]]
																} : this[u[15]]
															}, e[u[12]][u[49]] = function(e, t, n) {
																var r = this[u[36]][u[32]],
																	o = this[u[36]][u[34]],
																	s = t > r + o[u[50]],
																	c = t > r + o[u[51]],
																	l = n > this[u[21]];
																return s ? {
																	mode: i[u[17]][u[54]],
																	requiredAction: a[u[3]][u[6]],
																	actionParam: r
																} : l && (e === i[u[17]][u[54]] || c) ? {
																	mode: i[u[17]][u[54]],
																	requiredAction: a[u[3]][u[5]],
																	actionParam: o[u[53]]
																} : this[u[15]]
															}, e[u[12]][u[55]] = function() {
																this[u[19]][u[55]](), this[u[46]] = !1
															}, e[u[12]][u[56]] = function() {
																this[u[46]] = !0
															}, e[u[12]][u[57]] = function() {
																this[u[46]] = !1
															}, e[u[12]][u[58]] = function() {
																return Boolean(this[u[36]])
															}, e[u[12]][u[59]] = function() {
																this[u[55]](), this[u[19]][u[59]]()
															}, e
														}();
													t[u[14]] = s
												},
												42673: function(e, t, n) {
													Object[u[2]](t, u[1], {
														value: !0
													}), t[u[20]] = void 0;
													var r = n(59534),
														i = n(59574),
														a = n(80815),
														o = function() {
															function e(e) {
																var t = this;
																this[u[60]] = function(e) {
																	e[u[61]] && t[u[62]] === 1 / 0 && (t[u[62]] = e[u[61]] - (0, a[u[64]])(e[u[63]]))
																}, this[u[18]] = e, this[u[65]] = e[u[65]], this[u[66]] = e[u[66]], this[u[62]] = 1 / 0, this[u[66]][u[69]](i[u[68]][u[67]], this[u[60]]), this[u[70]] = e[u[76]][u[75]](r[u[72]][u[71]], this[u[18]][u[74]][u[73]])
															}
															return e[u[12]][u[77]] = function() {
																return Date[u[78]]() + this[u[70]][u[79]]()
															}, e[u[12]][u[38]] = function() {
																if (this[u[62]] === 1 / 0) return 1 / 0;
																var e = this[u[65]][u[80]](),
																	t = (0, a[u[64]])(e) + this[u[62]],
																	n = this[u[77]]();
																return (0, a[u[82]])(Math[u[81]](n - t))
															}, e[u[12]][u[55]] = function() {
																this[u[62]] = 1 / 0
															}, e[u[12]][u[59]] = function() {
																this[u[66]][u[83]](i[u[68]][u[67]], this[u[60]]), this[u[55]]()
															}, e
														}();
													t[u[20]] = o
												},
												59963: function(e, t) {
													Object[u[2]](t, u[1], {
														value: !0
													}), t[u[84]] = void 0;
													var n = function() {
														function e() {}
														return e[u[85]] = function(e) {
															return new(function() {
																function t() {}
																return t[u[12]][u[38]] = function() {
																	return e[u[38]]()
																}, t[u[12]][u[40]] = function(t) {
																	e[u[40]](t)
																}, t[u[12]][u[39]] = function() {
																	return e[u[39]]()
																}, t[u[12]][u[41]] = function(t) {
																	e[u[41]](t)
																}, t[u[12]][u[42]] = function() {
																	return e[u[42]]()
																}, t[u[12]][u[43]] = function(t) {
																	e[u[43]](t)
																}, t[u[12]][u[44]] = function() {
																	return e[u[44]]()
																}, t
															}())
														}, e
													}();
													t[u[84]] = n
												},
												98897: function(e, t, n) {
													Object[u[2]](t, u[1], {
														value: !0
													}), t[u[86]] = void 0;
													var r = n(83024),
														i = n(21188),
														a = n(54428),
														o = n(59963);
													t[u[86]] = {
														name: r[u[88]][u[87]],
														module: function() {
															return {
																LowLatencyApiFactory: o[u[84]],
																LiveLatencyService: a[u[14]],
																LiveLatencyControlAction: i[u[3]]
															}
														}
													}, t[u[89]] = t[u[86]]
												}
											},
											function(e) {
												return e(e[u[90]] = 98897)
											}
										])
									}, u[93] == typeof t && "object" == u[93] ? e[u[94]] = s() : "function" == u[95] && n.amdD[u[96]] ? (i = [], void 0 === (a = "function" == typeof(r = s) ? r.apply(t, i) : r) || (e.exports = a)) : u[93] == typeof t ? t[u[97]] = s() : (o[u[98]] = o[u[98]] || {}, o[u[98]][u[99]] = o[u[98]][u[99]] || {}, o[u[98]][u[99]][u[97]] = s())
								},
								703: function(e) {
									"use strict";
									self, e.exports = (self.webpackChunkbitmovin_player_name_ = self.webpackChunkbitmovin_player_name_ || []).push([
										[766], {
											92024: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.BufferMimeCodecMap = void 0;
												var r = n(82556),
													i = n(22221),
													a = n(45366),
													o = n(11917),
													s = n(82072),
													u = n(50163),
													c = function() {
														function e(e, t) {
															this.mimeCodeMap = {}, this.store = e, this.settings = t
														}
														return e.prototype.ensureMetricsForMimeType = function(e) {
															var t, n, o = null === (t = this.store) || void 0 === t ? void 0 : t.getState();
															(0, r.isInstanceState)(o) && l(this.settings) && ((0, a.getMetricsState)(o)[e] || null === (n = this.store) || void 0 === n || n.dispatch((0, i.initializeMetricsForMimeType)(e, this.settings)))
														}, e.prototype.removeMetrics = function(e) {
															var t;
															null === (t = this.store) || void 0 === t || t.dispatch((0, i.removeMetricsForMimeType)(e))
														}, e.prototype.add = function(e, t) {
															var n;
															this.mimeCodeMap[e] = t, this.ensureMetricsForMimeType(e), null === (n = this.store) || void 0 === n || n.dispatch((0, i.addMetricsValue)(e, o.MetricType.StalledSeconds, 0))
														}, e.prototype.remove = function(e) {
															var t = this,
																n = u.MimeTypeHelper.getMediaType(e);
															Object.keys(this.mimeCodeMap).forEach((function(e) {
																u.MimeTypeHelper.getMediaType(e) === n && (t.removeMetrics(e), delete t.mimeCodeMap[e])
															}))
														}, e.prototype.has = function(e, t) {
															var n = this,
																r = u.MimeTypeHelper.getMediaType(e),
																i = u.MimeTypeHelper.extractContainerType(e);
															return Object.keys(this.mimeCodeMap).some((function(a) {
																var o = u.MimeTypeHelper.getMediaType(a),
																	s = u.MimeTypeHelper.extractContainerType(a);
																return o === r && s === i && t === n.mimeCodeMap[e]
															}))
														}, e.prototype.update = function(e, t) {
															this.remove(e), this.add(e, t)
														}, e.prototype.forEach = function(e) {
															var t = this;
															Object.keys(this.entries()).forEach((function(n) {
																return e(n, t.entries()[n])
															}))
														}, e.prototype.entries = function() {
															return this.mimeCodeMap
														}, e.prototype.dispose = function() {
															this.mimeCodeMap = {}, this.store = void 0, this.settings = void 0
														}, e
													}();
												t.BufferMimeCodecMap = c;
												var l = function(e) {
													return (0, s.isObject)(e)
												}
											},
											86943: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.GapHandler = void 0;
												var r = n(59574),
													i = n(82556),
													a = n(59536),
													o = n(15949),
													s = n(89543),
													u = n(30111),
													c = n(91689),
													l = [s.MediaElementEvent.seeking, s.MediaElementEvent.seeked, s.MediaElementEvent.pause, s.MediaElementEvent.playing, s.MediaElementEvent.error],
													f = function() {
														function e(e) {
															var t, n, o, u, f = this;
															this.checkIfWaiting = function() {
																f.context.isDisposed || !f.video || f.video.paused || f.video.seeking && !f.isAtEndOfBufferedRange(f.video.currentTime) || f.lastTimeupdate && !(Date.now() - f.lastTimeupdate > 1e3) || (f.consecutiveWaiting++, f.waiting())
															}, this.waiting = function() {
																var e, t = f.context.store.getState();
																if ((0, i.isInstanceState)(t) && f.video) {
																	var n = (0, a.getPlayerState)(t);
																	((0, a.getIsSeeking)(n) || (null === (e = f.video) || void 0 === e ? void 0 : e.seeking)) && !f.isAtEndOfBufferedRange(f.video.currentTime) || f.setTimer()
																}
															}, this.stalled = function() {
																f.setTimer()
															}, this.onSeek = function() {
																f.gapAhead = void 0
															}, this.timeupdate = function() {
																if (f.lastTimeupdate = Date.now(), f.video && !f.video.paused && !f.video.seeking) {
																	f.hasPlayedAnythingYet = !0;
																	var e = f.video.currentTime;
																	if (f.shouldSkipGap(e)) return f.skipGap(), void(f.gapAhead = void 0);
																	var t = f.video.buffered;
																	t.length > 1 && !f.gapAhead ? f.gapAhead = function(e, t) {
																		for (var n = 0; n < e.length - 1; n++)
																			if (e.end(n) > t) return {
																				start: e.end(n),
																				end: e.start(n + 1)
																			}
																	}(t, e) : f.shouldTriggerWaitingEvent(e) ? (f.consecutiveUpdates++, f.waiting()) : e === f.lastRecordedTime ? f.consecutiveUpdates++ : (f.consecutiveUpdates = 0, f.consecutiveWaiting = 0, f.lastRecordedTime = e)
																}
															}, this.cancelTimer = function() {
																f.consecutiveUpdates = 0, f.consecutiveWaiting = 0, clearTimeout(f.timer), f.timer = -1
															}, this.skipTheGap = function(e) {
																if (f.video) {
																	var t = f.video.buffered,
																		n = f.video.currentTime,
																		r = c.Ranges.findNextRange(t, n);
																	f.consecutiveUpdates = 0, f.consecutiveWaiting = 0, f.timer = -1, 0 !== r.length && n === e && (f.context.logger.debug("skipTheGap: currentTime: " + n + " scheduled currentTime: " + e + " nextRange start: " + r.start(0)), f.setCurrentTime(r.start(0) + c.Ranges.TIME_FUDGE_FACTOR))
																}
															}, this.onPlaying = function() {
																f.hasPlayedAnythingYet = !0, f.context.eventHandler.off(r.PlayerEvent.Playing, f.onPlaying)
															}, this.context = e, this.video = e.videoElement, this.consecutiveUpdates = 0, this.consecutiveWaiting = 0, this.hasPlayedAnythingYet = !1, this.gapAhead = void 0, null === (t = this.video) || void 0 === t || t.addEventListener(s.MediaElementEvent.waiting, this.waiting), null === (n = this.video) || void 0 === n || n.addEventListener(s.MediaElementEvent.stalled, this.stalled), null === (o = this.video) || void 0 === o || o.addEventListener(s.MediaElementEvent.timeupdate, this.timeupdate), this.context.eventHandler.on(r.PlayerEvent.Playing, this.onPlaying), this.context.eventHandler.on(r.PlayerEvent.Seek, this.onSeek);
															for (var d = 0, h = l; d < h.length; d++) {
																var p = h[d];
																null === (u = this.video) || void 0 === u || u.addEventListener(p, this.cancelTimer)
															}
															this.timeupdateIntervalId = window.setInterval(this.checkIfWaiting, 250)
														}
														return e.prototype.shouldSkipGap = function(e) {
															return !!this.gapAhead && (function(e, t) {
																return e > t.start
															}(e, this.gapAhead) || function(e, t, n) {
																return !(e <= 0) && n.start > t && n.start - e < t
															}(this.context.settings.PROACTIVE_GAP_SKIP_DISTANCE_SECONDS, e, this.gapAhead))
														}, e.prototype.shouldTriggerWaitingEvent = function(e) {
															return 5 === this.consecutiveUpdates && e === this.lastRecordedTime
														}, e.prototype.skipGap = function() {
															if (this.video && this.gapAhead) {
																var e = this.video.currentTime,
																	t = Math.max(e + .01, this.gapAhead.end);
																this.setCurrentTime(t), this.context.logger.debug("jumped buffer gap from ".concat(e, " to ").concat(t))
															}
														}, e.prototype.gapFromVideoUnderflow = function(e, t) {
															for (var n = c.Ranges.findGaps(e), r = 0; r < n.length; r++) {
																var i = n.start(r),
																	a = n.end(r);
																if (t - i < 4 && t - i > 2) return {
																	start: i,
																	end: a
																}
															}
														}, e.prototype.setTimer = function() {
															if (!(this.timer > -1) && this.hasPlayedAnythingYet && this.video) {
																var e = this.video.buffered,
																	t = this.video.currentTime,
																	n = c.Ranges.findNextRange(e, t);
																if (0 === n.length) {
																	var r = this.gapFromVideoUnderflow(e, t);
																	if (r) return this.context.logger.debug("Encountered a gap in video from ".concat(r.start, " to ").concat(r.end, ". Seeking to ").concat(t, "...")), this.consecutiveWaiting = 0, void this.setCurrentTime(t);
																	var i = (0, u.findNextRangeForGap)(t, this.video.buffered),
																		a = i.isNearEndOfBufferedRange,
																		o = i.nextRangeStart;
																	return a && isFinite(o) ? (this.context.logger.debug("Playback stalled because of a very small gap. Seeking to ".concat(o, "...")), this.consecutiveWaiting = 0, void this.setCurrentTime(o)) : void(this.consecutiveWaiting > 10 && (this.consecutiveWaiting = 0, this.triggerCurrentTimeNotAdvancing(t, this.video)))
																}
																var s = n.start(0) - t;
																this.context.logger.debug("setTimer: stopped at: " + t + ", setting timer for:" + s + ", seeking to:" + n.start(0)), this.timer = window.setTimeout(this.skipTheGap.bind(this), s, t)
															}
														}, e.prototype.triggerCurrentTimeNotAdvancing = function(e, t) {
															this.context.logger.debug("currentTime not advancing from ".concat(e, " although the video element is neither paused nor seeking")), this.maybePokeVideoElement(e, t), t.eventHandler.triggerEvent(s.MediaElementEvent.currenttimenotadvancing)
														}, e.prototype.maybePokeVideoElement = function(e, t) {
															e > t.duration && !(0, o.getCapabilities)().isSafari ? this.setCurrentTime(t.duration) : this.context.settings.QJY_BROWSER_WORKAROUND || (0, o.getCapabilities)().isTizen ? this.setCurrentTime(e + .01) : this.setCurrentTime(e)
														}, e.prototype.isAtEndOfBufferedRange = function(e) {
															if (!this.video) return !1;
															for (var t = this.video.buffered, n = 0; n < t.length; n++)
																if (t.end(n) === e) return !0;
															return !1
														}, e.prototype.shutdown = function() {
															var e, t, n, i;
															null === (e = this.video) || void 0 === e || e.removeEventListener(s.MediaElementEvent.waiting, this.waiting), null === (t = this.video) || void 0 === t || t.removeEventListener(s.MediaElementEvent.stalled, this.stalled), null === (n = this.video) || void 0 === n || n.removeEventListener(s.MediaElementEvent.timeupdate, this.timeupdate), this.context.eventHandler.off(r.PlayerEvent.Playing, this.onPlaying), this.context.eventHandler.off(r.PlayerEvent.Seek, this.onSeek);
															for (var a = 0, o = l; a < o.length; a++) {
																var u = o[a];
																null === (i = this.video) || void 0 === i || i.removeEventListener(u, this.cancelTimer)
															}
															clearInterval(this.timeupdateIntervalId), this.cancelTimer()
														}, e.prototype.setCurrentTime = function(e) {
															if (this.video && this.video.currentTime !== e) try {
																this.video.currentTime = e
															} catch (t) {
																this.context.logger.debug("GapHandler failed to set currentTime on video element to " + e, t)
															}
														}, e
													}();
												t.GapHandler = f
											},
											30111: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.findNextRangeForGap = void 0;
												var r = n(91689);
												t.findNextRangeForGap = function(e, t) {
													for (var n = !1, i = 1 / 0, a = 0; a < t.length; a++) {
														var o = t.start(a),
															s = t.end(a),
															u = e + 2 * r.Ranges.TIME_FUDGE_FACTOR;
														if (n && !isFinite(i)) {
															i = o;
															break
														}
														o < e && s > e && u > s && (n = !0)
													}
													return {
														isNearEndOfBufferedRange: n,
														nextRangeStart: i
													}
												}
											},
											5526: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MSERenderer = void 0;
												var r = n(45659),
													i = n(14809),
													a = n(36166),
													o = n(85739),
													s = n(59534),
													u = n(59574),
													c = n(8833),
													l = n(73882),
													f = n(38106),
													d = n(15949),
													h = n(82072),
													p = n(81028),
													_ = n(50163),
													m = n(80815),
													b = n(89543),
													g = n(1520),
													v = n(86705),
													y = n(92024),
													A = n(86943),
													S = n(50022),
													w = n(88074),
													E = function() {
														function e(e) {
															var t = this;
															this.context = e, this.consecutiveErrorCount = 0, this.waitingForSeekedPromise = null, this.onSeek = function(e) {
																t.setCurrentTimeDelayedContext && t.setCurrentTimeDelayedContext.time !== e.seekTarget && Math.abs(t.setCurrentTimeDelayedContext.time - e.seekTarget) >= t.context.settings.GAP_TOLERANCE && t.cancelSetCurrentTimeDelayed(e.seekTarget)
															}, this.onPeriodSwitch = function() {
																t.periodSwitchOngoing = !0
															}, this.onPeriodSwitched = function() {
																t.periodSwitchOngoing = !1
															}, this.reOpenMse = function() {
																var e = t.segmentQueueMimeTypes;
																if (e.length < 1) return Promise.resolve();
																var n = e.find((function(e) {
																	return t.timestampOffset.hasOwnProperty(e)
																}));
																return n ? t.setTimestampOffset(n, t.timestampOffset[n]) : t.setTimestampOffset(e[0], 0)
															}, this.firePictureInPictureEvent = function() {
																if (t.video) {
																	var e = t.video.isPictureInPicture() ? c.ViewMode.PictureInPicture : c.ViewMode.Inline;
																	t.context.store.dispatch((0, f.setPlayerViewMode)(e))
																}
															}, this.resetConsecutiveErrorCountCallback = function(e) {
																e.time && e.time > 0 && (t.consecutiveErrorCount = 0)
															}, this.logger = e.logger, this.video = e.videoElement, this.settings = e.settings, this.readyPromise = Promise.resolve(), this.eventHandler = void 0, this.timestampOffset = {}, this.sourceBufferMimeCodecMap = new y.BufferMimeCodecMap(e.store, e.settings), this.savedCurrentTime = 0, this.playerEventHandler = e.eventHandler, this.periodSwitchOngoing = !1, this.init(!0)
														}
														return e.prototype.getSourceStore = function() {
															var e;
															return null === (e = this.context.serviceManager) || void 0 === e ? void 0 : e.get(s.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.createMSEWrapper = function() {
															return new S.MSEWrapper(this.context)
														}, e.prototype.createMse = function(e) {
															return e ? this.createMseSynchronously() : this.createMseAsynchronously()
														}, e.prototype.createMseAsynchronously = function() {
															var e = this;
															return function() {
																var t;
																return null === (t = e.mse) || void 0 === t ? void 0 : t.createNewMSE()
															}
														}, e.prototype.createMseSynchronously = function() {
															var e, t = null === (e = this.mse) || void 0 === e ? void 0 : e.createNewMSE();
															return function() {
																return t
															}
														}, e.prototype.init = function(e) {
															var t = this;
															this.segmentQueueProcessingPromise = Promise.resolve(), this.mse = this.createMSEWrapper(), this.readyPromise = this.readyPromise.catch((function(e) {
																return t.context.logger.debug("Caught error during MSE recreation", e)
															})).then(this.createMse(e)).then((function() {
																t.isShutdownForPeriodSwitch = !1
															})), this.needsInitialSeek = !0, this.segmentQueues = {}, this.setCurrentTimeContext = void 0, this.setCurrentTimeDelayedContext = void 0, this.quotaExceededMap = new Map, this.quotaExceededDeferredMap = new Map, this.gapHandler = new A.GapHandler(this.context), null == this.eventHandler && this.video && (this.eventHandler = new w.VideoEventHandler(this.video), this.eventHandler.on(b.MediaElementEvent.timeupdate, this.resetConsecutiveErrorCountCallback)), this.on(b.MediaElementEvent.webkitpresentationmodechanged, this.firePictureInPictureEvent), this.playerEventHandler.on(u.PlayerEvent.PeriodSwitch, this.onPeriodSwitch), this.playerEventHandler.on(u.PlayerEvent.Seek, this.onSeek), this.playerEventHandler.on(u.PlayerEvent.PeriodSwitched, this.onPeriodSwitched)
														}, e.prototype.trackRendererError = function(e) {
															this.consecutiveErrorCount++, this.consecutiveErrorCount >= this.settings.MAX_CONSECUTIVE_RENDERER_ERRORS && this.context.eventHandler.fireError(new o.PlayerError(a.ErrorCode.PLAYBACK_VIDEO_DECODING_ERROR, {
																codec: e.getCodec(),
																mimeType: e.getMimeType(),
																segmentUrl: e.getUrl()
															}, "Failed to append the segment to the buffer. The MSE has thrown an error."))
														}, e.prototype.hasSourceBuffers = function() {
															return this.segmentQueueMimeTypes.length > 0
														}, e.prototype.hasDataInSourceBuffers = function() {
															var e = this.mse;
															return !(!e || !this.hasSourceBuffers()) && this.segmentQueueMimeTypes.every((function(t) {
																return e.getBufferedRanges(t).length > 0
															}))
														}, e.prototype.addBuffer = function(e, t) {
															var n, r = this;
															if (!this.mse) return !1;
															this.sourceBufferMimeCodecMap.add(e, t);
															var i = Boolean(this.mse.addBuffer(e, t));
															return i && (this.mse.addUpdateEndCallback(e, (function() {
																return r.quotaExceededMap.set(e, !1)
															})), this.addUpdateEndListenerToUpdateRendererRanges(e), this.segmentQueues[e] = [], null === (n = this.getSourceStore()) || void 0 === n || n.dispatch((0, g.setRendererRanges)(e, []))), i
														}, e.prototype.addDrmInitData = function(e) {
															if (null == e ? void 0 : e.length) {
																var t = this.drmService;
																t ? e.forEach((function(e) {
																	return t.addInitData(e)
																})) : this.context.logger.debug("PSSH data found but DRM is not configured")
															}
														}, e.prototype.storeDrmInitDataFromManifest = function(e) {
															var t = this;
															e && this.context.serviceManager.maybeCall(s.ServiceName.ManifestService, (function(n) {
																var r = n.getContentProtectionForAdaptationSet(e).flatMap((function(e) {
																	var n = l.KeySystemKind[e.name.toUpperCase()],
																		r = e.schemeIdUri.replace("urn:uuid:", "").replace(/-/g, "");
																	return (e.pssh || []).map((function(i, a) {
																		return t.logger.insane("adding pssh for ".concat(e.name, " : ").concat(i)), {
																			initData: e.psshData[a],
																			initDataStr: i,
																			systemID: e.schemeIdUri,
																			systemIDraw: r,
																			systemName: n,
																			kid: []
																		}
																	}))
																}));
																t.addDrmInitData(r)
															}), void 0, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.appendData = function(e) {
															var t = this;
															return this.addDrmInitData(e.getDrmInitData()), this.addSegmentToSegmentQueue(e), this.segmentQueueProcessingPromise = this.segmentQueueProcessingPromise.catch((function() {})).then((function() {
																return t.processSegmentQueues()
															})), this.segmentQueueProcessingPromise
														}, e.prototype.addSegmentToSegmentQueue = function(e) {
															var t, n = e.getMimeType();
															this.segmentQueues[n] ? (this.segmentQueues[n].push(e), null === (t = this.getSourceStore()) || void 0 === t || t.dispatch((0, g.setRendererRanges)(n, this.getOverallBufferedRanges(n)))) : this.logger.debug("Renderer missing segment queue for mimeType(".concat(n, ") but trying to push segment.(url=").concat(e.getUrl(), ")"))
														}, e.prototype.getMSEBufferedRanges = function(e) {
															var t, n;
															return null !== (n = null === (t = this.mse) || void 0 === t ? void 0 : t.getBufferedRanges(e)) && void 0 !== n ? n : []
														}, e.prototype.getOverallBufferedRanges = function(e) {
															if (!this.mse || !this.segmentQueues.hasOwnProperty(e)) return [];
															var t = r.BufferRangeHelper.getRangesFromQueue(this.segmentQueues[e], this.settings.GAP_TOLERANCE);
															return t = t.concat(this.getMSEBufferedRanges(e)), r.BufferRangeHelper.mergeRanges(t, this.settings.GAP_TOLERANCE)
														}, e.prototype.isDataBeingAppended = function(e) {
															return !!this.mse && (this.segmentQueues && this.segmentQueues[e] && this.segmentQueues[e].length > 0 || this.mse.isAnyBufferUpdating())
														}, e.prototype.getRangesFromStore = function(e) {
															var t, n = null === (t = this.getSourceStore()) || void 0 === t ? void 0 : t.getState();
															if (!n) return [];
															var r = (0, v.getBufferState)(n);
															return r ? (0, v.getRendererBufferedRanges)(r, e) : []
														}, e.prototype.getEndOfBufferTime = function() {
															var e = this,
																t = [];
															if (this.segmentQueueMimeTypes.forEach((function(n) {
																	var r = e.getRangesFromStore(n);
																	if (r.length > 0) {
																		var i = r[r.length - 1].end;
																		t.push(i)
																	}
																})), 0 !== t.length) return Math.min.apply(Math, t)
														}, e.prototype.removeDataFromSegmentQueues = function(e, t, n) {
															var r, i = this;
															void 0 === t && (t = -1 / 0), void 0 === n && (n = 1 / 0), this.segmentQueues.hasOwnProperty(e) && (this.segmentQueues[e] = this.segmentQueues[e].filter((function(e) {
																var r = e.getDuration(),
																	a = e.getPlaybackTime(),
																	o = e.getRepresentationId().representationId,
																	s = e.isInit() || a < t || a + r > n;
																return i.logger.debug("[MSERenderer][".concat(o, "] Removing segment from queue [").concat(!s, "]. ") + "Clearing from ".concat(t, " to ").concat(n, ". Segment: [playbackTime=").concat(e.getPlaybackTime(), ", ") + "duration=".concat(e.getDuration(), ", url=").concat(e.getUrl(), "]")), s
															})), null === (r = this.getSourceStore()) || void 0 === r || r.dispatch((0, g.setRendererRanges)(e, this.getOverallBufferedRanges(e))))
														}, e.prototype.removeData = function(e, t, n) {
															return this.mse ? (void 0 === t && void 0 === n && this.saveCurrentTime(), this.removeDataFromSegmentQueues(e, t, n), this.mse.removeFromBuffer(e, t, n)) : Promise.reject()
														}, e.prototype.getDroppedVideoFrames = function() {
															var e, t;
															return null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.droppedVideoFrames) && void 0 !== t ? t : 0
														}, e.prototype.setPlaybackSpeed = function(e) {
															this.video && !isNaN(e) && e > 0 && e !== this.video.playbackRate && (this.video.playbackRate = e)
														}, e.prototype.getPlaybackSpeed = function() {
															var e, t;
															return null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.playbackRate) && void 0 !== t ? t : 1
														}, e.prototype.setVolume = function(e) {
															this.video && !isNaN(e) && (this.video.volume = Math.min(e / 100, 1))
														}, e.prototype.getVolume = function() {
															var e, t;
															return 100 * (null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.volume) && void 0 !== t ? t : 1)
														}, e.prototype.mute = function() {
															this.video && (this.video.muted = !0)
														}, e.prototype.unmute = function() {
															this.video && (this.video.muted = !1)
														}, e.prototype.isMuted = function() {
															var e, t;
															return null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.muted) && void 0 !== t && t
														}, e.prototype.play = function() {
															var e = this;
															return this.video ? this.video.play().catch((function(t) {
																if (e.isShutdownForPeriodSwitch) return e.ready();
																throw t
															})) : Promise.resolve()
														}, e.prototype.pause = function() {
															this.video && this.video.pause()
														}, e.prototype.end = function() {
															this.pause(), this.cancelSetCurrentTimeDelayed()
														}, e.prototype.isPaused = function() {
															var e, t;
															return null === (t = null === (e = this.video) || void 0 === e ? void 0 : e.paused) || void 0 === t || t
														}, e.prototype.setDuration = function(e) {
															this.mse && (e = Math.floor(1e4 * e) / 1e4, this.duration = e, this.mse.setDuration(e))
														}, e.prototype.getDuration = function() {
															var e, t;
															return null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : NaN
														}, e.prototype.setCurrentTime = function(e) {
															var t = this;
															if (!this.mse) return Promise.reject("MSE is not open");
															if (e = Math.ceil(100 * e) / 100, this.setCurrentTimeContext) {
																if (this.setCurrentTimeContext.time === e) return this.setCurrentTimeContext.promise;
																this.cancelSetCurrentTimeDelayed()
															}
															var n = Promise.resolve();
															this.isMSEOpen() || this.isTimeInBuffer(e) || (this.logger.debug("reopen MSE on setCurrentTime"), n = this.reOpenMse());
															var r = n.then((function() {
																return t.setCurrentTimeInternal(e).catch((function(n) {
																	return t.logger.debug("could not set time ".concat(e, " on video element"), n), t.getCurrentTime()
																})).finally((function() {
																	return t.needsInitialSeek = !1
																}))
															}));
															return this.setCurrentTimeContext = {
																time: e,
																isInitialSeek: this.needsInitialSeek,
																promise: r
															}, r
														}, e.prototype.getCurrentVideoTime = function() {
															var e, t;
															return null !== (t = null === (e = this.video) || void 0 === e ? void 0 : e.currentTime) && void 0 !== t ? t : 0
														}, e.prototype.getCurrentFallbackTime = function() {
															var e = this.setCurrentTimeContext;
															return e && e.isInitialSeek && -1 !== e.time ? e.time : this.isVideoCurrentTimeUnreliable() ? this.savedCurrentTime : (this.savedCurrentTime = 0, this.getCurrentVideoTime())
														}, e.prototype.isVideoCurrentTimeUnreliable = function() {
															var e;
															return !this.hasDataInSourceBuffers() && !(null === (e = this.mse) || void 0 === e ? void 0 : e.isBufferRemovalPending()) || !(!this.savedCurrentTime || !this.periodSwitchOngoing && this.isTimeInBuffer(this.getCurrentVideoTime()))
														}, e.prototype.getCurrentTime = function(e) {
															return e ? this.getCurrentVideoTime() : this.getCurrentFallbackTime()
														}, e.prototype.getSnapshotData = function(e, t) {
															void 0 === t && (t = 1);
															try {
																if (!this.video) return;
																var n = this.video.videoWidth,
																	r = this.video.videoHeight;
																this.snapshotCanvas || (this.snapshotCanvas = document.createElement("canvas"), this.snapshotCanvas.id = "snapshotHiddenCanvas"), this.snapshotCanvas.width = n, this.snapshotCanvas.height = r;
																var i = this.snapshotCanvas.getContext("2d");
																null == i || i.drawImage(this.video.getWrappedElement(), 0, 0, n, r);
																var a = void 0;
																return "image/jpeg" === e || "image/webp" === e ? (t = Math.max(t, 0), t = Math.min(t, 1), a = this.snapshotCanvas.toDataURL(e, t)) : a = this.snapshotCanvas.toDataURL(e, t), {
																	height: r,
																	width: n,
																	data: a
																}
															} catch (e) {
																return void(e && e.message ? this.logger.debug("Snapshot acquisition failed: " + e.message) : this.logger.debug("Snapshot acquisition failed"))
															}
														}, e.prototype.getDrmShutdownPromise = function() {
															return this.drmService ? this.drmService.shutdownPromise : Promise.resolve()
														}, e.prototype.ready = function() {
															var e = this;
															return this.getDrmShutdownPromise().then((function() {
																var t;
																return null === (t = e.video) || void 0 === t || t.eventHandler.clearEventSuppression(b.MediaElementEvent.error), e.mse || e.init(!1), e.readyPromise
															}))
														}, e.prototype.setTimestampOffset = function(e, t) {
															var n = this;
															return this.mse ? this.mse.setTimestampOffset(e, t).then((function() {
																n.timestampOffset[e] = t
															})) : Promise.resolve()
														}, e.prototype.shutdown = function(e) {
															var t, n = this;
															if (void 0 === e && (e = !1), !this.mse) return this.readyPromise;
															for (var r in this.isShutdownForPeriodSwitch = e, this.waitingForSeekedPromise = null, this.saveCurrentTime(), this.segmentQueues) this.segmentQueues.hasOwnProperty(r) && (delete this.segmentQueues[r], null === (t = this.getSourceStore()) || void 0 === t || t.dispatch((0, g.setRendererRanges)(r, [])));
															var i = this.mse.tearDownMediaSource().catch((function(e) {
																n.logger.debug("Could not tear down media source", {
																	err: e,
																	message: e.message
																})
															}));
															return this.mse = void 0, this.cancelSetCurrentTimeDelayed(), this.gapHandler && (this.gapHandler.shutdown(), this.gapHandler = void 0), this.eventHandler && !e && (this.eventHandler.dispose(), this.eventHandler = void 0), this.quotaExceededMap.clear(), this.quotaExceededDeferredMap.clear(), e ? this.readyPromise : this.readyPromise.then((function() {
																return i
															}))
														}, e.prototype.release = function() {
															var e;
															for (var t in this.segmentQueues) this.segmentQueues.hasOwnProperty(t) && null !== this.mse && (delete this.segmentQueues[t], null === (e = this.getSourceStore()) || void 0 === e || e.dispatch((0, g.setRendererRanges)(t, [])));
															return this.sourceBufferMimeCodecMap.dispose(), this.mse && this.mse.dispose(), this.readyPromise = Promise.resolve(), this.timestampOffset = {}, this.cancelSetCurrentTimeDelayed(), this.gapHandler && (this.gapHandler.shutdown(), this.gapHandler = void 0), this.off(b.MediaElementEvent.webkitpresentationmodechanged, this.firePictureInPictureEvent), this.eventHandler && (this.eventHandler.off(b.MediaElementEvent.timeupdate, this.resetConsecutiveErrorCountCallback), this.eventHandler.dispose(), this.eventHandler = void 0), this.waitingForSeekedPromise = null, this.playerEventHandler.off(u.PlayerEvent.PeriodSwitch, this.onPeriodSwitch), this.playerEventHandler.off(u.PlayerEvent.PeriodSwitched, this.onPeriodSwitched), this.playerEventHandler.off(u.PlayerEvent.Seek, this.onSeek), this.getDrmShutdownPromise()
														}, e.prototype.on = function(e, t) {
															var n;
															null === (n = this.eventHandler) || void 0 === n || n.on(e, t)
														}, e.prototype.off = function(e, t) {
															this.eventHandler && this.eventHandler.off(e, t)
														}, Object.defineProperty(e.prototype, "drmService", {
															get: function() {
																var e;
																return null === (e = this.context.serviceManager) || void 0 === e ? void 0 : e.get(s.ServiceName.DrmService)
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "segmentQueueMimeTypes", {
															get: function() {
																return Object.keys(this.segmentQueues)
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.setDrmConfig = function(e, t) {
															return this.drmService ? this.drmService.updateDrmConfig(e, t) : Promise.reject("DRM is not configured")
														}, e.prototype.isMediaTypeSupported = function(e, t) {
															return "MediaSource" in window && MediaSource.isTypeSupported(e + '; codecs="' + t + '"')
														}, e.prototype.cancelPendingEndOfStream = function() {
															this.setEndOfStreamDeferred && (this.setEndOfStreamDeferred.reject(new Error("Cancelled pending end of stream.")), this.setEndOfStreamDeferred = void 0)
														}, e.prototype.deferSetEndOfStream = function() {
															var e = this;
															return this.setEndOfStreamDeferred = this.setEndOfStreamDeferred || new p.Deferred, this.setEndOfStreamDeferred.promise.then((function() {
																var t;
																return null === (t = e.mse) || void 0 === t ? void 0 : t.endOfStream()
															})).catch((function(t) {
																(0, h.isContextAvailable)(e.context) && e.context.logger.debug(t)
															}))
														}, e.prototype.setEndOfStream = function(e) {
															if (void 0 === e && (e = !0), !e) return this.cancelPendingEndOfStream(), this.isMSEOpen() ? Promise.resolve() : this.reOpenMse();
															if (!this.hasSourceBuffers() || !this.mse) return this.logger.debug("Cannot signal EOS as no buffers have been added yet"), Promise.resolve();
															var t = this.getEndOfBufferTime();
															return this.setCurrentTimeDelayedContext && this.setCurrentTimeDelayedContext.time >= this.duration && t && !isNaN(t) && this.cancelSetCurrentTimeDelayed(this.setCurrentTimeInternal(t)), this.setCurrentTimeDelayedContext ? this.deferSetEndOfStream() : this.mse.endOfStream()
														}, e.prototype.isTimeInRangePendingRemoval = function(e) {
															var t = this.getRangesPendingRemoval();
															for (var n in t) {
																var r = t[n];
																if (r.start <= e && r.end >= e) return !0
															}
															return !1
														}, e.prototype.isTimeInBuffer = function(e, t) {
															if (void 0 === t && (t = 0), this.isTimeInRangePendingRemoval(e)) return !1;
															var n = this.getRangesInSourceBuffers();
															return !!n && Object.keys(n).every((function(i) {
																return (0, r.isInTimeRanges)(n[i], e, t)
															}))
														}, e.prototype.ensureSafeDistanceToEndOfBuffer = function(e, t) {
															var n = this.getRangesInSourceBuffers();
															if (!n) return NaN;
															var r = Object.keys(n),
																i = function(t) {
																	return t.start <= e && t.end >= e
																},
																a = r.map((function(e) {
																	return n[e].find(i)
																})).filter(Boolean);
															if (a.length < r.length) return NaN;
															var o = Math.min.apply(Math, a.map((function(e) {
																var t;
																return null !== (t = null == e ? void 0 : e.end) && void 0 !== t ? t : 1 / 0
															}))) - e;
															return o >= t ? e : e - (t - o)
														}, e.prototype.adjustTimeToNextCommonBufferStart = function(e) {
															var t = function(e) {
																var t, n = (0, d.getCapabilities)(),
																	r = n.isChromium,
																	i = n.isChrome,
																	a = n.isWebOS;
																return r && !i && (null === (t = e.drm) || void 0 === t ? void 0 : t.playready) || a ? 1.25 : .25
															}(this.context.sourceContext.source);
															if (this.isTimeInBuffer(e, t)) return e;
															var n = this.isTimeInBuffer(e),
																r = this.getFutureBufferStarts(e).filter((function(t) {
																	return t >= e
																})),
																i = 0 === r.length;
															if (n && i) {
																var a = this.ensureSafeDistanceToEndOfBuffer(e, t);
																return !isNaN(a) && this.isTimeInBuffer(a) ? (this.logger.debug("Adjusting current time away from end of buffer: ".concat(a)), a) : e
															}
															return !n && i ? NaN : (e = Math.min.apply(null, r), this.logger.debug("Adjusting current time to next buffer start: ".concat(e)), e)
														}, e.prototype.getFutureBufferStarts = function(e) {
															var t, n = this.getRangesInSourceBuffers();
															if (!n) return [];
															if (this.mse) {
																var i = this.getRangesPendingRemoval();
																t = Object.keys(i).map((function(e) {
																	return i[e]
																}))
															} else t = [];
															return r.BufferRangeHelper.getCommonBufferedRanges(n).filter((function(t) {
																return t.getEnd() >= e && !isNaN(t.getStart())
															})).filter((function(e) {
																return t.every((function(t) {
																	return (0, r.areDisjoint)(t, {
																		start: e.getStart(),
																		end: e.getEnd()
																	})
																}))
															})).map((function(e) {
																return e.getStart()
															}))
														}, e.prototype.getRangesInSourceBuffers = function() {
															if (!this.mse) return null;
															var e = {};
															for (var t in this.segmentQueues)
																if (this.segmentQueues.hasOwnProperty(t) && (e[t] = this.mse.getBufferedRanges(t), e[t].length < 1)) return null;
															return Object.keys(e).length ? e : null
														}, e.prototype.getRangesPendingRemoval = function() {
															if (!this.mse || !this.mse.isBufferRemovalPending()) return {};
															var e = {};
															for (var t in this.segmentQueues) {
																var n = this.mse.getRangePendingRemoval(t);
																this.segmentQueues.hasOwnProperty(t) && n && (e[t] = n)
															}
															return e
														}, e.prototype.processSegmentQueues = function() {
															var e = this,
																t = this.segmentQueueMimeTypes.filter((function(t) {
																	return e.segmentQueues[t].length > 0
																})).map((function(t) {
																	return e.addSegmentFromQueueToMse(t)
																}));
															return 0 === t.length ? Promise.resolve() : Promise.all(t).then((function() {
																return e.processSegmentQueues()
															})).catch((function(e) {
																if (e !== i.SOURCE_BUFFER_APPEND_STATUS.SUSPENDED) throw e
															}))
														}, e.prototype.getHeadOfQueue = function(e) {
															return this.segmentQueues[e][0]
														}, e.prototype.isMSEOpen = function() {
															var e;
															return (null === (e = this.mse) || void 0 === e ? void 0 : e.readyState) === S.MediaSourceReadyState.open
														}, e.prototype.maybeWaitForDrmLicense = function(e) {
															var t, n, r = null === (n = null === (t = this.getSourceStore()) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.drm;
															return this.context.serviceManager.maybeCall(s.ServiceName.DrmService, (function(t) {
																return t.maybeWaitForDrmLicense(e, r)
															}), Promise.resolve())
														}, e.prototype.addSegmentFromQueueToMse = function(e) {
															var t = this;
															if (!this.mse) return Promise.resolve();
															var n = Promise.resolve();
															this.isMSEOpen() || (n = this.reOpenMse());
															var r = this.getHeadOfQueue(e);
															if (!r) return Promise.resolve();
															var a = r.getRepresentationId().representationId,
																o = r.getUrl();
															return this.context.logger.debug("[MSERenderer][".concat(a, "] Scheduling appendage to buffer [url=").concat(o, "],") + " drm key ID(".concat(r.getDrmKid(), ")")), n.then((function() {
																return t.maybeWaitForDrmLicense(r)
															})).then((function() {
																return t.mse ? t.segmentQueues[e].includes(r) ? t.mse.addToBuffer(r).then((function() {
																	var n = t.getHeadOfQueue(e) !== r;
																	if (t.logger.debug("[MSERenderer][".concat(a, "] Appended segment to buffer [url=").concat(o, "]")), n) {
																		var i = t.segmentQueues[e][0],
																			s = i ? i.getUrl() : "none";
																		t.logger.debug("[MSERenderer][".concat(a, "] Skipping removal of [url=").concat(o, "] ") + "from segment queue as the queue head has unexpectedly changed to [url=".concat(s, "]"))
																	} else t.segmentQueues[e].shift();
																	t.drmService && t.hasDataInSourceBuffers() && !t.periodSwitchOngoing && t.drmService.signalInitDataShouldBeAvailable()
																})) : (t.logger.debug("[MSERenderer] Segment ".concat(r.getUrl(), " no longer part of the queue - skipping appendage")), Promise.resolve()) : Promise.reject(i.SOURCE_BUFFER_APPEND_STATUS.FAILURE)
															})).catch((function(n) {
																if (t.logger.debug("[MSERenderer] Adding segment from queue to buffer failed (".concat(e, ")"), n), n === i.SOURCE_BUFFER_APPEND_STATUS.FAILURE && t.trackRendererError(r), t.mse && n === i.SOURCE_BUFFER_APPEND_STATUS.QUOTA_EXCEEDED) {
																	t.quotaExceededMap.set(e, !0);
																	var a = t.quotaExceededDeferredMap.get(e);
																	return a || (a = new p.Deferred, t.quotaExceededDeferredMap.set(e, a)), t.mse.addOneUpdateEndCallback(e, a.resolve).then((function() {
																		t.quotaExceededDeferredMap.delete(e), t.context.logger.debug("Appending segment after quota has been exceeded...")
																	})), a.promise.then((function() {
																		return t.processSegmentQueues()
																	}))
																}
																return t.mse ? t.mse.queueActionOnBuffer(e, (function() {
																	return t.processSegmentQueues()
																})) : Promise.reject(n)
															}))
														}, e.prototype.cancelSetCurrentTimeDelayed = function(e) {
															void 0 === e && (e = this.getCurrentTime()), this.setCurrentTimeDelayedContext && (clearTimeout(this.setCurrentTimeDelayedContext.timeoutId), this.setCurrentTimeDelayedContext.promiseResolve(e), this.setCurrentTimeDelayedContext = void 0)
														}, e.prototype.recoverFromExceededQuota = function(e) {
															var t = this;
															this.segmentQueueMimeTypes.forEach((function(n) {
																var r;
																t.segmentQueues[n] = t.segmentQueues[n].filter((function(t) {
																	return t.getPlaybackTime() + t.getDuration() >= e
																})), null === (r = t.getSourceStore()) || void 0 === r || r.dispatch((0, g.setRendererRanges)(n, t.getOverallBufferedRanges(n))), t.quotaExceededMap.set(n, !1)
															})), this.quotaExceededDeferredMap.forEach((function(e) {
																return e.reject()
															})), this.quotaExceededDeferredMap.clear()
														}, e.prototype.setCurrentTimeDelayed = function(e) {
															var t, n, r = this;
															this.logger.debug("delayed set time ".concat(e, " on video element"));
															var i = null !== (n = null === (t = this.setCurrentTimeDelayedContext) || void 0 === t ? void 0 : t.promiseResolve) && void 0 !== n ? n : Promise.resolve;
															return this.setCurrentTimeDelayedContext && clearTimeout(this.setCurrentTimeDelayedContext.timeoutId), this.setCurrentTimeDelayedContext = void 0, new Promise((function(t, n) {
																r.setCurrentTimeDelayedContext = {
																	time: e,
																	promiseReject: n,
																	promiseResolve: t,
																	timeoutId: setTimeout((function() {
																		t(r.setCurrentTimeInternal(e).then((function(e) {
																			return i.call(Promise, e), e
																		})))
																	}), (0, m.toMilliSeconds)(r.settings.SYNC_ON_SEEK_TIMEOUT))
																}
															}))
														}, e.prototype.resolvePendingEndOfStream = function() {
															this.setEndOfStreamDeferred && (this.setEndOfStreamDeferred.resolve(), this.setEndOfStreamDeferred = void 0)
														}, e.prototype.setCurrentTimeInternal = function(e) {
															var t = this;
															if (!this.mse) return Promise.reject("Couldn't set current time, MSE is not open");
															(function(e, t) {
																var n = !1;
																return e.forEach((function(e) {
																	return n = n || e
																})), n
															})(this.quotaExceededMap) && this.recoverFromExceededQuota(e);
															var n = this.mse.waitForBuffers().then((function() {
																return t.waitingForSeekedPromise
															})).then((function() {
																if (t.setCurrentTimeContext) {
																	if (t.setCurrentTimeContext.time !== e) return Promise.reject("A newer setting of change time has been scheduled.")
																} else t.setCurrentTimeContext = {
																	time: e,
																	isInitialSeek: !1,
																	promise: n
																};
																var r = t.adjustTimeToNextCommonBufferStart(e);
																return isNaN(r) ? t.setCurrentTimeDelayed(e) : (t.logger.debug("set time on video element to ".concat(r)), t.seekOnVideoElement(r).then((function(e) {
																	return t.cancelSetCurrentTimeDelayed(), t.resolvePendingEndOfStream(), e
																})).catch((function(e) {
																	return t.handleVideoSetCurrentTimeError(r, e)
																})).finally((function() {
																	t.waitingForSeekedPromise = null, t.setCurrentTimeContext = void 0, t.savedCurrentTime = 0
																})))
															}));
															return n
														}, e.prototype.handleVideoSetCurrentTimeError = function(e, t) {
															return this.logger.debug("failed to set current time", t), this.waitingForSeekedPromise = null, this.setCurrentTimeDelayed(e)
														}, e.prototype.seekOnVideoElement = function(e) {
															var t = this;
															return this.waitingForSeekedPromise = new Promise((function(n, r) {
																t.video ? (t.video.currentTime = e, n(t.video.currentTime)) : r("No video reference")
															})), this.waitingForSeekedPromise
														}, e.prototype.saveCurrentTime = function() {
															this.setCurrentTimeContext ? this.savedCurrentTime = this.setCurrentTimeContext.time : this.savedCurrentTime = this.getCurrentVideoTime()
														}, e.prototype.recreateSourceBuffers = function(e) {
															var t = this;
															return void 0 === e && (e = this.getCurrentTime()), this.shutdown().then((function() {
																return t.ready()
															})).then((function() {
																t.sourceBufferMimeCodecMap.forEach((function(e, n) {
																	t.addBuffer(e, n) || (t.context.logger.debug("Failed to create source buffer ".concat(e)), t.sourceBufferMimeCodecMap.remove(e))
																}))
															})).then((function() {
																t.setCurrentTime(e).then((function() {
																	var e, n;
																	return (null === (n = null === (e = t.context.serviceManager) || void 0 === e ? void 0 : e.get(s.ServiceName.PlayerStateService)) || void 0 === n ? void 0 : n.isPlaying()) ? t.play() : Promise.resolve()
																}))
															}))
														}, e.prototype.updateSegmentQueueMimeType = function(e) {
															var t, n = this,
																r = _.MimeTypeHelper.getMediaType(e);
															this.segmentQueueMimeTypes.forEach((function(e) {
																var t;
																_.MimeTypeHelper.getMediaType(e) === r && (delete n.segmentQueues[e], null === (t = n.getSourceStore()) || void 0 === t || t.dispatch((0, g.setRendererRanges)(e, [])))
															})), this.segmentQueues[e] = [], null === (t = this.getSourceStore()) || void 0 === t || t.dispatch((0, g.setRendererRanges)(e, []))
														}, e.prototype.addUpdateEndListenerToUpdateRendererRanges = function(e) {
															var t, n = this;
															null === (t = this.mse) || void 0 === t || t.addUpdateEndCallback(e, (function() {
																var t;
																return null === (t = n.getSourceStore()) || void 0 === t ? void 0 : t.dispatch((0, g.setRendererRanges)(e, n.getOverallBufferedRanges(e)))
															}))
														}, e.prototype.changeBufferType = function(e, t) {
															var n = this;
															return this.sourceBufferMimeCodecMap.update(e, t), this.updateSegmentQueueMimeType(e), this.mse && this.mse.isChangeTypeSupported() ? this.mse.changeBufferType(e, t).then((function() {
																return n.addUpdateEndListenerToUpdateRendererRanges(e)
															})).then((function() {
																var n;
																return (n = {})[e] = t, n
															})) : this.recreateSourceBuffers().then((function() {
																return n.sourceBufferMimeCodecMap.entries()
															}))
														}, e
													}();
												t.MSERenderer = E
											},
											50022: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MSEWrapper = t.MediaSourceReadyState = void 0;
												var i, a = n(14809),
													o = n(36166),
													s = n(85739),
													u = n(99538),
													c = n(55579),
													l = n(59574),
													f = n(1520),
													d = n(15949),
													h = n(74294),
													p = n(81028),
													_ = n(50163),
													m = n(89199),
													b = n(20586),
													g = n(11165);
												! function(e) {
													e.closed = "closed", e.open = "open", e.ended = "ended"
												}(i = t.MediaSourceReadyState || (t.MediaSourceReadyState = {}));
												var v = function() {
													function e(e) {
														var t = this;
														this.teardownInProgressPromise = Promise.resolve(), this.waitForBuffer = function(e) {
															return t.sourceBuffers.hasOwnProperty(e) ? t.mseReady().then((function() {
																return t.sourceBuffers[e].ready()
															})) : Promise.reject("No SourceBuffer for '".concat(e, "' available"))
														}, e.videoElement && (this.context = e, this.logger = e.logger, this.video = e.videoElement, this.sourceBuffers = {}, this.isInit = !1, this.updateEndListeners = new h.ArrayMap)
													}
													return e.prototype.getBufferedRanges = function(e) {
														return this.sourceBuffers.hasOwnProperty(e) ? this.sourceBuffers[e].bufferedRanges : []
													}, e.prototype.printDetailedBufferRange = function(e, t) {
														var n;
														try {
															n = e.buffered
														} catch (e) {
															return
														}
														for (var r = 0; r < n.length; r++) this.logger.debug(t + " buffer range [" + r + "]: " + n.start(r) + " - " + n.end(r))
													}, e.prototype.getBufferStartTime = function() {
														var e = this,
															t = Object.keys(this.sourceBuffers).map((function(t) {
																return 0 === e.sourceBuffers[t].bufferedRanges.length ? 0 : e.sourceBuffers[t].bufferedRanges[0].start
															}));
														return Math.max.apply(null, t)
													}, e.prototype.onBufferChanged = function(e, t) {
														if (t && "target" in t && t.target) {
															var n = t.target;
															this.printDetailedBufferRange(n, e)
														}
													}, e.prototype.addBuffer = function(e, t) {
														if (this.mediaSource) {
															if (this.isInit && !this.sourceBuffers.hasOwnProperty(e)) try {
																var n = this.mediaSource.addSourceBuffer(e + "; codecs=" + t);
																this.sourceBuffers[e] = new g.SourceBufferWrapper(n), this.addBufferChangedUpdateEndCallback(e)
															} catch (n) {
																return this.logger.debug("Could not add SourceBuffer for " + e + " with codecs " + t + ":" + n), void this.context.eventHandler.dispatchEvent(l.PlayerEvent.Warning, new u.PlayerWarning(c.WarningCode.SOURCE_CODEC_OR_FILE_FORMAT_NOT_SUPPORTED))
															}
															return this.logger.debug("Added SourceBuffer for " + e + " with codecs " + t), isNaN(this.mediaSource.duration) || (this.sourceBuffers[e].appendWindowEnd = this.mediaSource.duration), this.sourceBuffers[e].buffer
														}
													}, e.prototype.updateTimestampOffset = function(e, t) {
														var n = this.sourceBuffers[e];
														n && (this.logger.debug("setting new source buffer [".concat(e, "] offset from ").concat(n.buffer.timestampOffset, " to ").concat(t)), n.buffer.timestampOffset = t)
													}, e.prototype.setTimestampOffset = function(e, t) {
														return this.sourceBuffers.hasOwnProperty(e) ? (t && !isNaN(t) || (this.logger.debug("source buffer [".concat(e, "] offset is ").concat(t, ", setting it to 0")), t = 0), this.queueTimestampOffsetUpdate(e, t)) : (this.logger.debug("no such source buffer found (mime type=".concat(e, ")")), Promise.resolve())
													}, e.prototype.queueTimestampOffsetUpdate = function(e, t) {
														var n = this;
														return this.queueActionOnBuffer(e, (function() {
															return n.updateTimestampOffset(e, t)
														})).catch((function(t) {
															n.logger.debug("Failed to set timestamp offset for", e, ":", t)
														}))
													}, e.prototype.getBufferRangeStart = function(e, t) {
														return t || e.buffered.start(0)
													}, e.prototype.getBufferRangeEnd = function(e, t) {
														return t || e.buffered.end(e.buffered.length - 1)
													}, e.prototype.getBufferRemovalRange = function(e, t, n) {
														var r = this.sourceBuffers[e].buffer;
														return {
															start: this.getBufferRangeStart(r, t),
															end: this.getBufferRangeEnd(r, n)
														}
													}, e.prototype.postBufferRemoval = function(e, t, n) {
														this.logger.debug("successfully removed buffer for ".concat(e, " (from  ").concat(t, " to ").concat(n, ")"))
													}, e.prototype.preBufferRemoval = function(e, t, n) {
														this.logger.debug("removing buffer for ".concat(e, " (from ").concat(t, " to ").concat(n, ")"))
													}, e.prototype.removeBufferRange = function(e, t, n) {
														this.preBufferRemoval(e, t, n), this.sourceBuffers[e].buffer.remove(t, n)
													}, e.prototype.removeFromBuffer = function(e, t, n) {
														var r = this;
														return this.queueActionOnBuffer(e, (function() {
															var a, o, s;
															try {
																if (r.video && r.video.currentTime >= 0 && (null === (s = null === (o = null === (a = r.sourceBuffers[e]) || void 0 === a ? void 0 : a.buffer) || void 0 === o ? void 0 : o.buffered) || void 0 === s ? void 0 : s.length) > 0) {
																	var f = r.getBufferRemovalRange(e, t, n),
																		d = f.start,
																		h = f.end;
																	if (d >= 0 && h > d) {
																		if (r.sourceBuffers[e].removalPending = !0, r.sourceBuffers[e].rangePendingRemoval = {
																				start: d,
																				end: h
																			}, !r.mediaSource || r.mediaSource.readyState === i.open) {
																			var p = r.sourceBuffers[e].onUpdateEnded().then((function() {
																				r.sourceBuffers[e] && (r.sourceBuffers[e].rangePendingRemoval = null, r.sourceBuffers[e].removalPending = !1, r.postBufferRemoval(e, d, h))
																			}));
																			return r.removeBufferRange(e, d, h), p
																		}
																		r.logger.debug("cannot remove buffer for " + e + " (from " + d + " to " + h + "): MediaSource is not open"), r.addOneSourceOpenCallback((function() {
																			r.removeFromBuffer(e, d, h).catch((function(t) {
																				r.logger.debug("Couldn't remove buffer from ".concat(d, " to ").concat(h, " for ").concat(e), t)
																			}))
																		}))
																	}
																}
															} catch (e) {
																var _ = "".concat(c.WarningCode[c.WarningCode.PLAYBACK_WARNING], ". Exception: ").concat(JSON.stringify(e));
																r.context.eventHandler.dispatchEvent(l.PlayerEvent.Warning, new u.PlayerWarning(c.WarningCode.PLAYBACK_WARNING, _))
															}
															return Promise.resolve()
														}))
													}, e.prototype.removeBuffer = function(e) {
														var t = this,
															n = Promise.resolve(),
															i = this.sourceBuffers[e];
														if (!i || !this.mediaSource) return n;
														if (this.isMediaSourceOpen()) try {
															null == i || i.buffer.abort()
														} catch (e) {
															return this.logger.debug("Could not abort last action on buffer", r({}, e)), Promise.resolve()
														}
														if (_.MimeTypeHelper.isSubtitle(e)) n = n.then((function() {
															return t.removeFromBuffer(e).catch((function(e) {
																t.logger.debug("Error removing buffer data", e)
															}))
														}));
														else try {
															(this.updateEndListeners.get(e) || []).slice().forEach((function(n) {
																t.removeUpdateEndCallback(e, n)
															})), this.mediaSource && this.mediaSource.removeSourceBuffer(i.buffer)
														} catch (e) {
															this.logger.debug("Error while trying to remove source buffer.", e)
														}
														return this.deleteSourceBuffer(e), n
													}, e.prototype.deleteSourceBuffer = function(e) {
														this.sourceBuffers[e] ? (this.sourceBuffers[e].dispose(), delete this.sourceBuffers[e], this.logger.debug("Removed SourceBuffer for ".concat(e))) : this.logger.debug("No source buffer to remove for mimeType=".concat(e))
													}, e.prototype.isMediaSourceOpen = function() {
														var e;
														return (null === (e = this.mediaSource) || void 0 === e ? void 0 : e.readyState) === i.open
													}, e.prototype.resetAllBuffers = function() {
														var e = this;
														if (!this.mediaSource) return this.logger.debug("Media source is removed. Can not reset buffers."), Promise.resolve();
														var t = [];
														for (var n in this.sourceBuffers) this.sourceBuffers.hasOwnProperty(n) && t.push(this.removeBuffer(n));
														return Promise.all(t).then((function() {
															e.sourceBuffers = {}, e.logger.debug("Removed all SourceBuffers")
														}))
													}, e.prototype.tearDownMediaSource = function() {
														var e = this;
														return this.mediaSource ? (this.logger.debug("Tearing down media source."), this.teardownInProgressPromise = this.teardownInProgressPromise.then((function() {
															return e.resetAllBuffers().then((function() {
																e.detachVideoElementAndMSE()
															}))
														})), this.teardownInProgressPromise) : (this.logger.debug("Media source has already been removed."), this.teardownInProgressPromise.then((function() {
															return e.resetAllBuffers()
														})))
													}, e.prototype.detachVideoElementAndMSE = function() {
														if (this.video)
															if (null !== this.video.getWrappedElement()) {
																if (window && window.URL && "function" == typeof window.URL.revokeObjectURL && "" !== this.video.src) try {
																	window.URL.revokeObjectURL(this.video.src)
																} catch (e) {}
																this.mediaSourceReadyDeferred && this.mediaSourceReadyDeferred.reject("MediaSource is being destroyed."), this.mediaSourceReadyDeferred = void 0, this.mediaSourceReadyPromise = void 0, b.VideoElementUtil.removeSource(this.video), this.video.load(), this.mediaSource = void 0, this.isInit = !1, this.updateEndListeners.clear(), this.logger.debug("Detached video element and MSE")
															} else this.logger.debug("No video element to teardown.");
														else this.logger.debug("No video wrapper to teardown.")
													}, e.prototype.removeUpdateEndCallback = function(e, t) {
														this.sourceBuffers.hasOwnProperty(e) && this.sourceBuffers[e].buffer.removeEventListener("updateend", t)
													}, e.prototype.addUpdateEndCallback = function(e, t) {
														this.sourceBuffers.hasOwnProperty(e) && this.sourceBuffers[e].buffer.addEventListener("updateend", t)
													}, e.prototype.addOneUpdateEndCallback = function(e, t) {
														return this.sourceBuffers[e].onUpdateEnded().catch((function() {})).then(t)
													}, e.prototype.addSourceOpenCallback = function(e) {
														this.mediaSource && this.mediaSource.addEventListener("sourceopen", e)
													}, e.prototype.removeSourceOpenCallback = function(e) {
														this.mediaSource && this.mediaSource.removeEventListener("sourceopen", e)
													}, e.prototype.addOneSourceOpenCallback = function(e) {
														var t = this,
															n = function(r) {
																t.removeSourceOpenCallback(n), e(r)
															};
														this.addSourceOpenCallback(n)
													}, e.prototype.isAnyBufferUpdating = function() {
														var e = this;
														return 0 !== Object.keys(this.sourceBuffers).filter((function(t) {
															return e.sourceBuffers[t].buffer.updating
														})).length
													}, e.prototype.setDuration = function(e) {
														var t = this;
														this.queueActionOnBuffers((function() {
															if (t.mediaSource) {
																var n = (0, m.isNumber)(e) && e > 0 ? e : 1 / 0;
																t.mediaSource.duration !== n && (t.isMediaSourceOpen() ? (t.logger.debug("Setting video duration on MSE: ".concat(t.mediaSource.duration, " -> ").concat(n)), t.mediaSource.duration = n) : t.logger.debug("Skipping setDuration (".concat(t.mediaSource.duration, " -> ").concat(n, "), MSE is not open")))
															} else t.logger.debug("Skipping setDuration (".concat(e, "), MSE is gone"))
														})).catch((function(e) {
															t.logger.debug("Could not set the duration of the MSE!", e)
														}))
													}, e.prototype.getDuration = function() {
														return this.mediaSource && !isNaN(this.mediaSource.duration) ? this.mediaSource.duration : 0
													}, e.prototype.isInitialized = function() {
														return this.isInit
													}, Object.defineProperty(e.prototype, "readyState", {
														get: function() {
															return this.mediaSource ? this.mediaSource.readyState : void 0
														},
														enumerable: !1,
														configurable: !0
													}), e.prototype.isBufferRemovalPending = function() {
														var e = this;
														return Object.keys(this.sourceBuffers).some((function(t) {
															return e.sourceBuffers[t].removalPending
														}))
													}, e.prototype.getRangePendingRemoval = function(e) {
														var t, n, r;
														return null !== (r = null === (n = null === (t = this.sourceBuffers) || void 0 === t ? void 0 : t[e]) || void 0 === n ? void 0 : n.rangePendingRemoval) && void 0 !== r ? r : void 0
													}, e.prototype.getBufferSizeInSeconds = function(e) {
														return this.getBufferedRanges(e).reduce((function(e, t) {
															return e + (t.end - t.start)
														}), 0)
													}, e.prototype.addToBuffer = function(e) {
														var t = this,
															n = e.getMimeType();
														return this.queueActionOnBuffer(n, (function() {
															if (!t.mediaSource) return t.logger.debug("Could not queue action on SourceBuffer: MediaSource has been destroyed"), Promise.reject(a.SOURCE_BUFFER_APPEND_STATUS.FAILURE);
															if (t.mediaSource.readyState !== i.open) return t.logger.warn("MediaSource is not open (readyState=" + t.mediaSource.readyState + ")"), Promise.reject(a.SOURCE_BUFFER_APPEND_STATUS.FAILURE);
															if (!t.sourceBuffers.hasOwnProperty(n)) return t.logger.log("sourceBuffers has no entry for " + n), Promise.reject(a.SOURCE_BUFFER_APPEND_STATUS.FAILURE);
															var r = e.getRepresentationId().representationId;
															try {
																return t.logger.debug("[MSEWrapper][".concat(n, "][").concat(r, "] Adding segment to SourceBuffer [").concat(e.getUrl(), "]")), t.sourceBuffers[n].buffer.appendBuffer(e.getData()), Promise.resolve()
															} catch (i) {
																return t.logger.debug("[MSEWrapper][".concat(n, "][").concat(r, "] appendBuffer() failed"), i), i.name && "QuotaExceededError" === i.name ? (t.logger.debug("QuotaExceededError, trying to remove old data from buffers..."), t.context.store.dispatch((0, f.setBufferMaxSize)(n, t.getBufferSizeInSeconds(n))), Promise.reject(a.SOURCE_BUFFER_APPEND_STATUS.QUOTA_EXCEEDED)) : (t.video && t.video.error || t.context.eventHandler.fireError(new s.PlayerError(o.ErrorCode.UNKNOWN, {
																	exception: i,
																	codec: e.getCodec(),
																	mimeType: n,
																	segmentUrl: e.getUrl()
																}, "Unexpected error while attempting to append a segment to the SourceBuffer.")), t.logger.debug("[MSEWrapper][".concat(n, "][").concat(r, "] Failed appending segment to SourceBuffer"), i), Promise.reject(a.SOURCE_BUFFER_APPEND_STATUS.FAILURE))
															}
														}))
													}, e.prototype.endOfStream = function() {
														var e = this;
														return this.queueActionOnBuffers((function() {
															var t;
															e.isMediaSourceOpen() ? (e.logger.debug("Signaled mse end of stream"), null === (t = e.mediaSource) || void 0 === t || t.endOfStream()) : e.logger.debug("Skipped signaling EOS as the mse is not open")
														})).catch((function(t) {
															e.logger.debug("Unable to signal EOS on media source", t)
														}))
													}, e.prototype.waitForBuffers = function() {
														var e = Object.keys(this.sourceBuffers).map(this.waitForBuffer);
														return this.mseReady().then((function() {
															return Promise.all(e).then((function() {}))
														}))
													}, e.prototype.queueActionOnBuffers = function(e) {
														var t = this,
															n = new Promise((function(e, r) {
																var i = Object.keys(t.sourceBuffers).map((function(e) {
																	var r = t.queueActionOnBuffer(e, (function() {}));
																	return t.queueActionOnBuffer(e, (function() {
																		return n
																	})).then().catch(), r
																}));
																Promise.all(i).then((function() {
																	return e()
																}), r)
															})).then((function() {
																return e()
															})).then((function() {
																return Promise.all(Object.keys(t.sourceBuffers).map((function(e) {
																	return t.sourceBuffers[e].ready()
																}))).then((function() {}))
															}));
														return n
													}, e.prototype.queueActionOnBuffer = function(e, t) {
														return this.sourceBuffers.hasOwnProperty(e) ? this.sourceBuffers[e].queueAction(t) : Promise.reject("No SourceBuffer for '".concat(e, "' available"))
													}, e.prototype.rejectMediaSourceReady = function(e) {
														var t, n = this;
														return null === (t = this.mediaSourceReadyDeferred) || void 0 === t || t.reject(e), this.mediaSourceReadyPromise ? this.mediaSourceReadyPromise.then((function() {
															n.mediaSourceReadyDeferred = void 0
														})) : Promise.reject(e)
													}, e.prototype.mseReady = function() {
														var e = this;
														if (this.mediaSourceReadyPromise) return this.mediaSourceReadyPromise;
														this.mediaSourceReadyDeferred = new p.Deferred, this.mediaSourceReadyPromise = this.mediaSourceReadyDeferred.promise;
														var t = function(t) {
																var n;
																r(), null === (n = e.mediaSourceReadyDeferred) || void 0 === n || n.reject(t)
															},
															n = function() {
																var t;
																r(), e.isInit = !0, null === (t = e.mediaSourceReadyDeferred) || void 0 === t || t.resolve()
															},
															r = function() {
																e.mediaSource && (e.mediaSource.removeEventListener("error", t), e.mediaSource.removeEventListener("sourceopen", n), e.mediaSource.removeEventListener("webkitsourceopen", n))
															};
														return this.video ? this.mediaSource ? (this.mediaSource.addEventListener("error", t), this.mediaSource.addEventListener("sourceopen", n, !1), this.mediaSource.addEventListener("webkitsourceopen", n, !1), window && window.URL && "function" == typeof window.URL.createObjectURL ? this.video.src = window.URL.createObjectURL(this.mediaSource) : (this.logger.debug("Could not use window.URL.createObjectURL(mediaSource) as the browser claims the function does not exist."), this.mediaSourceReadyDeferred.reject("Could not create Object URL")), this.mediaSourceReadyPromise.then((function() {
															e.mediaSourceReadyDeferred = void 0
														}))) : this.rejectMediaSourceReady("mediaSource must not be null or undefined") : this.rejectMediaSourceReady("Could not set source to video element")
													}, e.prototype.createNewMSE = function() {
														var e = this;
														return this.mediaSource ? this.tearDownMediaSource().then((function() {
															return e.setNewMediaSource()
														})) : this.setNewMediaSource()
													}, e.prototype.setNewMediaSource = function() {
														return this.mediaSource = new window.MediaSource, this.mseReady()
													}, e.prototype.isChangeTypeSupported = function() {
														var e, t;
														return !!(null === (t = null === (e = window.SourceBuffer) || void 0 === e ? void 0 : e.prototype) || void 0 === t ? void 0 : t.changeType) && !(0, d.getCapabilities)().isTizen
													}, e.prototype.addBufferChangedUpdateEndCallback = function(e) {
														var t = this,
															n = function(n) {
																return t.onBufferChanged(e, n)
															};
														this.addUpdateEndCallback(e, n), this.updateEndListeners.add(e, n)
													}, e.prototype.updateSourceBufferKey = function(e) {
														var t = this,
															n = _.MimeTypeHelper.getMediaType(e),
															r = Object.keys(this.sourceBuffers).find((function(r) {
																var i = _.MimeTypeHelper.getMediaType(r);
																return t.sourceBuffers.hasOwnProperty(r) && i === n && r !== e
															}));
														r && (this.removeAllUpdateEndCallbacks(r), this.sourceBuffers[e] = this.sourceBuffers[r], delete this.sourceBuffers[r], this.addBufferChangedUpdateEndCallback(e))
													}, e.prototype.removeAllUpdateEndCallbacks = function(e) {
														var t = this;
														this.updateEndListeners.get(e).forEach((function(n) {
															t.removeUpdateEndCallback(e, n)
														})), this.updateEndListeners.delete(e)
													}, e.prototype.changeBufferType = function(e, t) {
														var n = this;
														return this.updateSourceBufferKey(e), this.queueActionOnBuffer(e, (function() {
															n.sourceBuffers[e].changeType("".concat(e, "; codecs=").concat(t)), n.context.logger.debug("Changed ".concat(e, " SourceBuffer type with codec=").concat(t))
														}))
													}, e.prototype.dispose = function() {
														var e = this;
														this.tearDownMediaSource().then((function() {
															e.video = void 0
														}))
													}, e
												}();
												t.MSEWrapper = v
											},
											26463: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MSERendererModuleDefinition = void 0;
												var r = n(83024),
													i = n(5526),
													a = n(50022),
													o = n(91689),
													s = n(73729);
												t.MSERendererModuleDefinition = {
													name: r.ModuleName.RendererMse,
													module: {
														MSEWrapper: a.MSEWrapper,
														MSERenderer: i.MSERenderer,
														Ranges: o.Ranges,
														technologyChecker: new s.TechnologyChecker
													}
												}, t.default = t.MSERendererModuleDefinition
											},
											86906: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.LinkedListQueue = void 0;
												var n = function(e) {
														this.value = e
													},
													r = function() {
														function e() {
															this.count = 0
														}
														return Object.defineProperty(e.prototype, "length", {
															get: function() {
																return this.count
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.dequeue = function() {
															if (0 !== this.count) {
																var e = this.last;
																return this.last = null == e ? void 0 : e.previous, e && (e.previous = void 0, e.next = void 0), this.count--, null == e ? void 0 : e.value
															}
														}, e.prototype.enqueue = function(e) {
															if (0 === this.count) {
																var t = new n(e);
																this.first = t, this.last = t
															} else {
																var r = this.first;
																this.first = new n(e), this.first.next = r, r && (r.previous = this.first)
															}
															this.count++
														}, e.prototype.isEmpty = function() {
															return 0 === this.length
														}, e
													}();
												t.LinkedListQueue = r
											},
											91689: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.Ranges = void 0;
												var n = function() {
													function e() {}
													return e.filterRanges = function(t, n) {
														var r = [];
														if (t && t.length)
															for (var i = 0; i < t.length; i++) n(t.start(i), t.end(i)) && r.push([t.start(i), t.end(i)]);
														return e.createTimeRanges(r)
													}, e.createTimeRangesObj = function(e) {
														return void 0 === e || 0 === e.length ? {
															length: 0,
															start: function() {
																return 0
															},
															end: function() {
																return 0
															}
														} : {
															length: e.length,
															start: function(t) {
																return e[t][0]
															},
															end: function(t) {
																return e[t][1]
															}
														}
													}, e.createTimeRanges = function(t, n) {
														return Array.isArray(t) ? e.createTimeRangesObj(t) : void 0 === t || void 0 === n ? e.createTimeRangesObj() : e.createTimeRangesObj([
															[t, n]
														])
													}, e.findNextRange = function(t, n) {
														return e.filterRanges(t, (function(t, r) {
															return t - e.TIME_FUDGE_FACTOR >= n && r - t > e.MIN_RANGE_DURATION
														}))
													}, e.findGaps = function(t) {
														if (t.length < 2) return e.createTimeRanges();
														for (var n = [], r = 1; r < t.length; r++) {
															var i = t.end(r - 1),
																a = t.start(r);
															a - i > 0 && n.push([i, a])
														}
														return e.createTimeRanges(n)
													}, e.TIME_FUDGE_FACTOR = 1 / 30, e.MIN_RANGE_DURATION = .2, e
												}();
												t.Ranges = n
											},
											11165: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SourceBufferWrapper = void 0;
												var r = n(81028),
													i = n(86906),
													a = function() {
														function e(e) {
															var t = this;
															this.onUpdateSuccess = function() {
																t.updateExposedBufferRanges(), t.cleanUpPendingUpdateEndedPromises((function(e) {
																	return e.resolve()
																}))
															}, this.onUpdateError = function(e) {
																t.cleanUpPendingUpdateEndedPromises((function(t) {
																	return t.reject(e)
																}))
															}, this.ready = function() {
																return t.buffer.updating ? t.onUpdateEnded() : Promise.resolve()
															}, this.buffer = e, this.bufferedRanges = [], this.queuePromise = Promise.resolve(), this.pendingUpdateEndedPromises = new i.LinkedListQueue, ["error", "abort", "sourceended", "sourceclose"].forEach((function(e) {
																t.buffer.addEventListener(e, t.onUpdateError)
															})), this.buffer.addEventListener("updateend", this.onUpdateSuccess)
														}
														return e.prototype.cleanUpPendingUpdateEndedPromises = function(e) {
															for (var t; null != (t = this.pendingUpdateEndedPromises.dequeue());) e(t)
														}, e.prototype.updateExposedBufferRanges = function() {
															try {
																this.bufferedRanges = function(e) {
																	for (var t = [], n = 0; n < e.length; n++) t.push({
																		start: e.start(n),
																		end: e.end(n)
																	});
																	return t
																}(this.buffer.buffered)
															} catch (e) {}
														}, e.prototype.onUpdateEnded = function() {
															var e = new r.Deferred;
															return this.pendingUpdateEndedPromises.enqueue(e), e.promise
														}, e.prototype.queueAction = function(e) {
															var t = this,
																n = this.queuePromise.then((function() {
																	return t.ready()
																})).then((function() {
																	return Promise.resolve(e()).then((function() {
																		return t.ready()
																	}))
																}));
															return this.queuePromise = n.catch((function() {})), n
														}, e.prototype.changeType = function(e) {
															this.buffer.changeType(e)
														}, e.prototype.dispose = function() {
															var e = this;
															["error", "abort", "sourceended", "sourceclose"].forEach((function(t) {
																e.buffer.removeEventListener(t, e.onUpdateError)
															})), this.cleanUpPendingUpdateEndedPromises((function(e) {
																return e.reject("disposing source buffer")
															})), this.buffer.removeEventListener("updateend", this.onUpdateSuccess)
														}, e
													}();
												t.SourceBufferWrapper = a
											},
											73729: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TechnologyChecker = void 0;
												var r = n(8833),
													i = function() {
														function e() {}
														return e.prototype.getSupportedTechnologies = function() {
															return [{
																player: r.PlayerType.Html5,
																streaming: r.StreamType.Dash
															}, {
																player: r.PlayerType.Html5,
																streaming: r.StreamType.Hls
															}, {
																player: r.PlayerType.Html5,
																streaming: r.StreamType.Smooth
															}]
														}, e
													}();
												t.TechnologyChecker = i
											},
											88074: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.VideoEventHandler = void 0;
												var n = function() {
													function e(e) {
														var t = this;
														this.addTimeToEvent = function(e) {
															return e.time = t.video && t.video.currentTime || 0, e
														}, this.video = e
													}
													return e.prototype.on = function(e, t) {
														this.video && this.video.addEventListener(e, t, this.addTimeToEvent)
													}, e.prototype.off = function(e, t) {
														this.video && this.video.removeEventListener(e, t)
													}, e.prototype.fire = function(e, t) {
														this.video && this.video.eventHandler.triggerEvent(e, t)
													}, e.prototype.dispose = function() {}, e
												}();
												t.VideoEventHandler = n
											}
										},
										function(e) {
											return e(e.s = 26463)
										}
									])
								},
								796: function(e) {
									"use strict";
									self, e.exports = (self.webpackChunkbitmovin_player_name_ = self.webpackChunkbitmovin_player_name_ || []).push([
										[907], {
											51631: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.DeviceDetector = void 0;
												var n = function() {
													function e() {}
													return e.isGoogleCast = function() {

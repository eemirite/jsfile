																isAuto: t
															} : {
																id: "",
																bitrate: 0,
																height: 0,
																width: 0,
																isAuto: !0
															}
														}, e.prototype.getDownloadedAudioData = function() {
															var e = this.getDownloadedData(d.MediaType.Audio),
																t = !0;
															return e.hasOwnProperty("isAuto") && (t = e.isAuto), e && (e.bitrate || e.id) ? {
																id: e.id,
																bitrate: e.bitrate,
																isAuto: t
															} : {
																id: "",
																bitrate: 0,
																isAuto: !0
															}
														}, e.prototype.getPlaybackVideoData = function() {
															var e = this.playerController.getPlaybackRepresentation(d.MediaType.Video) || {},
																t = isNaN(e._height) ? 0 : Number(e._height),
																n = isNaN(e._width) ? 0 : Number(e._width),
																r = {
																	id: e._id + "",
																	bitrate: Number(e._bandwidth) || 0,
																	height: t,
																	width: n,
																	uid: e.uid
																};
															return e._codecs && (r.codec = v.CodecStringHelper.extractCodecStrings(e._codecs).video), r
														}, e.prototype.getPlaybackAudioData = function() {
															var e = this.playerController.getPlaybackRepresentation(d.MediaType.Audio) || {},
																t = {
																	id: e._id + "",
																	bitrate: Number(e._bandwidth)
																};
															return e._codecs && (t.codec = v.CodecStringHelper.extractCodecStrings(e._codecs).audio), t
														}, e.prototype.setQueryParameters = function(e) {
															this.settings.QUERY_PARAMETERS = e
														}, e.prototype.clearQueryParameters = function() {
															this.settings.QUERY_PARAMETERS = void 0
														}, e.prototype.restoreAfterTimeShift = function(e) {
															this.playerStateService && (this.playerStateService.isTimeShifting() && (this.playerStateService.transitionToTimeShiftedState(e), this.timeShiftEstimatedLiveEdge = -1, this.timeShiftJumpStart = -1), this.isLive() && (this.canResumeLatencyControl() ? this.resumeLatencyControl() : this.suspendLatencyControl()))
														}, e.prototype.onTimeShiftFailed = function() {
															this.restoreAfterTimeShift(!1)
														}, e.prototype.onTimeShifted = function(e) {
															this.restoreAfterTimeShift(e !== f.STARTUP_ISSUER_NAME)
														}, e.prototype.getMaxTimeShift = function() {
															if (this.isLive() && this.isReady()) return this.config.playback && !1 === this.config.playback.timeShift ? 0 : this.playerController.getMaxTimeShift()
														}, e.prototype.timeShift = function(e, t) {
															var n = this;
															this.isReady() && this.getMaxTimeShift() <= 0 && (-1 === this.timeShiftJumpStart && (this.timeShiftJumpStart = this.getCurrentTime(), 0 === this.timeShiftJumpStart && (this.timeShiftJumpStart = this.playerController.getTimeShiftLiveEdge())), this.playerController.timeShift(e, (function() {
																return n.onTimeShifted(t)
															})).catch((function() {
																return n.onTimeShiftFailed()
															})), -1 === this.timeShiftEstimatedLiveEdge && (this.timeShiftEstimatedLiveEdge = this.playerController.getTimeShiftLiveEdge()), this.playerStateService.transitionToTimeShiftingState(this.timeShiftJumpStart, this.timeShiftEstimatedLiveEdge + e, t || "api", t !== f.STARTUP_ISSUER_NAME))
														}, e.prototype.getTimeShift = function() {
															return this.isReady() ? this.playerController.getTimeShift() : 0
														}, e.prototype.addSubtitle = function(e) {
															var t = this;
															return this.isReady() && this.subtitleService ? Promise.resolve(void 0).then((function() {
																t.subtitleService.addExternalSubtitle(e)
															})) : Promise.reject(void 0)
														}, e.prototype.removeSubtitle = function(e) {
															this.isReady() && this.subtitleService && this.subtitleService.removeSubtitle(e)
														}, e.prototype.enableSubtitle = function(e) {
															return this.isReady() && this.subtitleService ? this.subtitleService.enableSubtitle(e) : Promise.resolve(!1)
														}, e.prototype.disableSubtitle = function(e) {
															return this.isReady() && this.subtitleService ? this.subtitleService.disableSubtitle(e) : Promise.resolve(!1)
														}, e.prototype.listSubtitles = function() {
															return this.isReady() && this.subtitleService && this.playerController ? this.subtitleService.getAvailableSubtitles(this.getCurrentPlayingPeriodId()) : []
														}, e.prototype.setAudio = function(e) {
															var t = this;
															if (this.isReady() && this.playerController && "string" == typeof e) {
																var n = this.getAudio();
																if (n && n.id === String(e)) return;
																this.playerController.setAudio(e).then((function() {
																	var e = t.getAudio();
																	e && n && e.id !== n.id && t.context.eventHandler.dispatchEvent(c.PlayerEvent.AudioChanged, {
																		targetAudio: e,
																		sourceAudio: n,
																		time: t.renderer.getCurrentTime()
																	})
																})).catch((function(e) {
																	t.logger.debug("setAudio failed for lang ", e)
																}))
															}
														}, e.prototype.getAvailableAudio = function() {
															return this.isReady() && this.playerController ? this.playerController.getAvailableAudio(this.getCurrentPlayingPeriodId()).map(this.mapLangObjectToAudioTrack) : []
														}, e.prototype.getAudio = function() {
															if (this.isReady() && this.playerController) {
																var e = this.playerController.getAudio();
																if (e) return this.mapLangObjectToAudioTrack(e)
															}
															return null
														}, e.prototype.getManifest = function() {
															var e = this.manifestService.getManifest();
															if (e) return e._isHls ? this.getHlsManifest() : e.originalDashManifest
														}, e.prototype.getHlsManifest = function() {
															return w.ModuleManager.get(E.ModuleName.HLS).selectors.getHlsState(this.getSourceStoreService().getState()).masterPlaylist.string
														}, e.prototype.getBufferedRanges = function() {
															var e = this.playerController.getBufferedRanges(!0);
															return a.BufferRangeHelper.getCommonBufferedRanges(e).map((function(e) {
																return {
																	start: e.getStart(),
																	end: e.getEnd()
																}
															}))
														}, e.prototype.getSnapshot = function(e, t) {
															if (this.isPlaying() || this.isPaused()) return this.renderer.getSnapshotData(e, t)
														}, e.prototype.setPlaybackSpeed = function(e, t, n) {
															void 0 === t && (t = 1), void 0 === n && (n = !0), this.renderer.setPlaybackSpeed(e * t), this.playerStateService.playbackSpeed !== this.renderer.getPlaybackSpeed() && this.playerStateService.setPlaybackSpeed(e, t, n)
														}, e.prototype.getPlaybackSpeed = function() {
															return this.playerStateService.playbackSpeed
														}, e.prototype.permitControl = function(e) {
															this.controlPermitted = e
														}, e.prototype.getSeekableRange = function() {
															return this.isLive() && !this.settings.ENABLE_SEEK_FOR_LIVE || !this.playerController ? {
																start: -1,
																end: -1
															} : this.playerController.getSeekableRange()
														}, e.prototype.createManifestApi = function() {
															return O.MediaPlayerManifestApiFactory.create(this, this.context)
														}, e.prototype.handleDvrWindowExceeded = function() {
															var e = this.playerController.getTimeShiftHandler(),
																t = this.getMaxTimeShift() + e.getMinSegmentDuration(),
																n = e.calculatePlaybackTimeForTimeShiftOffset(t),
																r = e.isTimeInBufferedRange(n);
															this.context.logger.debug("Handling DVRWindowExceeded - TimeShifting to ".concat(r ? t : "live edge")), this.timeShift(r ? t : 0)
														}, e.prototype.getLatency = function() {
															return this.liveLatencyService.getLatency()
														}, e.prototype.setTargetLatency = function(e) {
															var t = Math.abs(this.manifestService.getTimeShiftBufferDepthSeconds());
															e > t && (e = t, this.logger.debug("Tried to set target latency outside DVR window, corrected to lower bound", t)), this.context.eventHandler.dispatchEvent(c.PlayerEvent.TargetLatencyChanged, {
																from: this.liveLatencyService.getTargetLatency(),
																to: e
															}), this.liveLatencyService.setTargetLatency(e)
														}, e.prototype.getTargetLatency = function() {
															return this.liveLatencyService.getTargetLatency()
														}, e.prototype.setCatchupConfig = function(e) {
															this.liveLatencyService.setCatchupConfig(e)
														}, e.prototype.getCatchupConfig = function() {
															return this.liveLatencyService.getCatchupConfig()
														}, e.prototype.setFallbackConfig = function(e) {
															this.liveLatencyService.setFallbackConfig(e)
														}, e.prototype.getFallbackConfig = function() {
															return this.liveLatencyService.getFallbackConfig()
														}, e.prototype.release = function(e) {
															var t = this;
															return this.eventHandler.off(c.PlayerEvent.PeriodSwitch, this.onPeriodSwitch), this.eventHandler.off(c.PlayerEvent.PeriodSwitched, this.fireAudioTracksAdded), this.eventHandler.off(c.PlayerEvent.PlaybackSpeedChanged, this.onPlaybackSpeedChanged), this.unsubscribeStorePlayingListener(), this.unload(e).then((function() {
																return t.playerStateService = null, t.playerController = (0, u.dispose)(t.playerController), t.disposeServices(e), t.renderer.release().then((function() {
																	return t.renderer = null
																}))
															}))
														}, e.prototype.clearStallEndedSubscription = function() {
															this.unsubscribeFromStallEnded && (this.unsubscribeFromStallEnded(), this.unsubscribeFromStallEnded = void 0)
														}, e.prototype.getCurrentPlayingPeriodId = function() {
															return (0, D.getPlayingPeriodId)(this.getSourceStoreService().getState())
														}, e.prototype.updateCallback = function(e) {}, e.prototype.onFullscreenEnter = function() {}, e.prototype.onFullscreenExit = function() {}, e.prototype.isAirplayAvailable = function() {
															return !1
														}, e.prototype.isAirplayActive = function() {
															return !1
														}, e.prototype.showAirplayTargetPicker = function() {}, e
													}();

												function U(e) {
													return e === f.ADVERTISING_ISSUER_NAME || e === f.ADVERTISING_RESTORE_ISSUER_NAME
												}

												function j(e, t) {
													if (!w.ModuleManager.has(E.ModuleName.RendererMse)) return !1;
													for (var n = w.ModuleManager.get(E.ModuleName.RendererMse).Ranges, r = n.findGaps(e.videoElement.buffered), i = !1, a = 0; a < r.length; a++) {
														var o = r.end(a) + n.TIME_FUDGE_FACTOR;
														Math.abs(o - t) <= .1 && (i = !0)
													}
													return i
												}
												t.MediaPlayer = F, t.checkIfGapSkip = j
											},
											76725: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.isBufferChangeRequired = t.MediaPlayerController = void 0;
												var r = n(59534),
													i = n(4529),
													a = n(59574),
													o = n(39409),
													s = n(8833),
													u = n(22221),
													c = n(38106),
													l = n(59536),
													f = n(49916),
													d = n(43587),
													h = n(28803),
													p = n(46381),
													_ = n(50163),
													m = n(89543),
													b = n(43068),
													g = n(83024),
													v = n(58400),
													y = n(47886),
													A = n(53001),
													S = n(43233),
													w = n(94112),
													E = n(97383),
													T = n(92977),
													C = n(84493),
													$ = n(31998),
													k = n(96400),
													O = n(53088),
													x = n(45110),
													P = n(76060),
													M = n(5258),
													I = n(45933),
													L = function() {
														function e(e, t) {
															var n = this;
															this.segmentControllerMap = {}, this.onSegmentAvailable = function(e) {
																if (n.clearBuffersPromise) B(e, n.getSourceStore());
																else {
																	if (n.drmKidErrorHandler.trackSegment(e), n.shouldDropSegment(e)) return n.context.logger.debug("Dropping segment ".concat(e.getUrl())), void B(e, n.getSourceStore());
																	if (!e.isInit()) {
																		var t = e.getMimeType(),
																			r = n.getTimestampOffset(t),
																			i = n.segmentControllerMap[t];
																		i && n.isAVMultiplexed(i) && n.addRequiredMediaTypesForMuxedContent(e.getPeriodId()), n.bufferController.updateMediaType(e.getPeriodId(), {
																			mimeType: t,
																			timestampOffset: r,
																			codec: e.getCodec()
																		})
																	}
																	n.bufferController.addSegment(e).then((function() {
																		n.heartbeatService && n.heartbeatService.beat()
																	})).catch((function(e) {
																		n.logger && n.logger.debug(e)
																	})), n.segmentAvailableCallback(e)
																}
															}, this.endStallAtGap = function() {
																var e = n.bufferController.getBufferedRangesMap(n.periodSwitchTracker.getCurrentPlayingPeriodId()),
																	t = Math.max.apply(Math, Object.values(e).filter((function(e) {
																		return e.length > 0
																	})).map((function(e) {
																		return e[e.length - 1].start
																	})));
																n.seek(t, !1, !0)
															}, this.mpdAvailableHandler = function() {
																var e;
																n.applyManifestTimings(), n.initialized && n.updatePeriodInformation(), n.handleDroppedOutPeriods(), n.initializeThumbnails(), n.initialized ? n.getAllSegmentControllers().forEach((function(e) {
																	return e.updateMpd()
																})) : n.finishInit(), null === (e = n.timeshiftHandler) || void 0 === e || e.onManifestUpdate(), n.context.serviceManager.get(r.ServiceName.TimedMetadataService).parseEventStream()
															}, this.onPeriodSwitched = function() {
																(n.hasStreamEnded() || n.isInitialized() && !n.playerStateService.isPlaying()) && n.start()
															}, this.onSegmentRequestFinished = function(e) {
																if (e) {
																	if (e.success || 408 === e.httpStatus) {
																		var t = n.segmentControllerMap[e.mimeType];
																		t && n.updateAdaptationLogicData(e, t)
																	}
																	e.success || n.heartbeatService.beat()
																}
															}, this.firePlaybackFinishedEvent = function() {
																n.getAllSegmentControllers().every((function(e) {
																	var t = n.streamTimeService.getTimeForNextSegment(e.getMimeType());
																	return e.hasNext(t)
																})) ? n.logger.debug("ignoring ended event in firePlaybackFinishedEvent as there are more segments available") : n.manifestService.isLastPeriod(n.periodSwitchTracker.getCurrentPlayingPeriodId()) ? n.bufferController.hasFutureBufferBlockData() || (n.stop(), n.logger.debug("Stopping buffer controller"), n.bufferController.stop(!0), n.playerStateService.transitionToStoppedState()) : n.logger.debug("ignoring ended event in firePlaybackFinishedEvent as there is a future period")
															}, this.context = e, this.logger = e.logger, this.settings = e.settings, this.bufferSettings = e.bufferSettings, this.eventHandler = e.eventHandler, this.renderer = e.renderer, this.segmentAvailableCallback = t, this.initialized = !1, this.initPromise = null, this.mimeTypes = {}, this.seekCounter = 0, this.eosSignaled = !1, this.isSwitchingAudioTrack = !1
														}
														return e.prototype.addRequiredMediaTypesForMuxedContent = function(e) {
															this.bufferController.addRequiredMediaType(e, "video/mp4"), this.bufferController.addRequiredMediaType(e, "audio/mp4")
														}, e.prototype.getTimestampOffset = function(e) {
															var t, n = this,
																r = this.segmentControllerMap[e];
															return !r && _.MimeTypeHelper.isAV(e) && (r = Object.keys(this.segmentControllerMap).filter((function(e) {
																return _.MimeTypeHelper.isAV(e)
															})).map((function(e) {
																return n.segmentControllerMap[e]
															})).filter((function(e) {
																return n.isAVMultiplexed(e)
															})).shift()), null !== (t = null == r ? void 0 : r.getMPDHandler().getTimestampOffset()) && void 0 !== t ? t : 0
														}, e.prototype.restorePlaybackPositionAfterDownloadedRepresentationWasExcluded = function() {
															var e = this,
																t = this.manifestService.isLive(),
																n = t ? this.getTimeShift() : this.renderer.getCurrentTime();
															t ? this.timeShift(n, (function() {}), !0).catch((function(t) {
																return e.context.logger.debug("TimeShift failed", t)
															})) : this.seek(n, !1, !1, !0)
														}, e.prototype.onDownloadedRepresentationExcluded = function() {
															this.restorePlaybackPositionAfterDownloadedRepresentationWasExcluded(), this.context.logger.debug("manifest update interrupted by DRM key status change")
														}, e.prototype.shouldDropSegment = function(e) {
															var t = _.MimeTypeHelper.isSubtitle(e.getMimeType()),
																n = this.context.sourceContext.technology.streaming === s.StreamType.Hls,
																r = (0, d.getStartTimeOffset)(this.getSourceStore().getState()) + this.manifestService.getDuration(),
																i = this.isVod() && e.getPlaybackTime() >= r,
																a = this.eosSignaled || i,
																o = this.manifestService.isRepresentationExcluded(e.getRepresentationId());
															return !t && !n && a || o
														}, e.prototype.getSourceStore = function() {
															return this.context.serviceManager.get(r.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.isAVMultiplexed = function(e) {
															var t = p.CodecStringHelper.extractCodecStrings(e.getCodecs());
															return Boolean(t.video && t.audio)
														}, e.prototype.getMaxTimeShift = function() {
															return this.getTimeShiftHandler().getMaxTimeShift()
														}, e.prototype.removeEventHandlers = function() {
															this.eventHandler.off(a.PlayerEvent.SegmentRequestFinished, this.onSegmentRequestFinished)
														}, e.prototype.subscribeToSeekProcess = function() {
															var e = this,
																t = this.context.store;
															!this.unsubscribeFromSeekProcess && t && (this.unsubscribeFromSeekProcess = (0, h.subscribe)(t)((function(e) {
																if (e) return (0, l.getPlayerState)(e).seekingProcess
															}), (function(t, n) {
																return t && n && e.onSeekProcessChange(t, n)
															})))
														}, e.prototype.subscribeToManifestChanges = function() {
															var e = this.getSourceStore();
															!this.unsubscribeFromManifestStore && e && (this.unsubscribeFromManifestStore = (0, h.subscribe)(e)(k.getManifest, this.mpdAvailableHandler, (function(e, t) {
																return e.isInitialized && !t.isInitialized
															})))
														}, e.prototype.unsubscribeFromManifestChanges = function() {
															this.unsubscribeFromManifestStore && (this.unsubscribeFromManifestStore(), this.unsubscribeFromManifestStore = null)
														}, e.prototype.subscribeToPlayingTracksChanges = function() {
															var e = this.getSourceStore();
															!this.unsubscribeFromPlayingTracksStore && e && (this.unsubscribeFromPlayingTracksStore = (0, h.subscribe)(e)(O.getPlayingTracksState, this.onPeriodSwitched, O.wasSwitchingToPeriodIdReset))
														}, e.prototype.unsubscribeFromPlayingTracksChanges = function() {
															this.unsubscribeFromPlayingTracksStore && (this.unsubscribeFromPlayingTracksStore(), this.unsubscribeFromPlayingTracksStore = void 0)
														}, e.prototype.setupControllerForAdaptationSet = function(e) {
															var t, n, r = (0, S.getMimeTypeForAdaptationSet)(e);
															if (_.MimeTypeHelper.isAV(r)) {
																this.context.store.dispatch((0, u.initializeMetricsForMimeType)(r, this.context.settings)), this.getSourceStore().dispatch((0, $.setMediaTypeAction)(e._internalId, (0, E.resolveMediaTypes)(e))), this.mimeTypes[r] = (0, S.getCodecsFromAdaptationSet)(e);
																var i = this.periodSwitchTracker.getCurrentPlayingPeriodId();
																this.segmentControllerMap[r] = new T.SegmentController(this.context, this.onSegmentAvailable, r, this.mimeTypes[r], e.isTransmuxingRequired, this.manifestLoader, null !== (t = e._periodId) && void 0 !== t ? t : i, this.getSourceStore()), null === (n = this.timeshiftHandler) || void 0 === n || n.updateSegmentControllers(this.segmentControllerMap), this.transmuxer && this.segmentControllerMap[r].setTransmuxer(this.transmuxer), i && this.renderer.storeDrmInitDataFromManifest(e), this.context.segmentInfoService && this.context.segmentInfoService.setSegmentControllers(Object.values(this.segmentControllerMap))
															}
														}, e.prototype.updatePeriodForTimeshift = function(e, t) {
															var n = this.periodSwitchTracker.getCurrentPlayingPeriodId();
															n || (this.periodSwitchTracker.setCurrentPlayingPeriodId(e), this.bufferController.setInitialPeriod(e)), this.periodSwitchTracker.getCurrentLoadingPeriodId() !== e && this.switchLoadingPeriodForAllMedia(e), t && n !== e && (this.context.logger.debug("Updating current playing period to ".concat(e)), this.periodSwitchTracker.setCurrentPlayingPeriodId(e))
														}, e.prototype.updateVideoAndAudioMediaTypes = function(e) {
															var t = e.AdaptationSet.find((function(e) {
																return _.MimeTypeHelper.isVideo(e._mimeType)
															}));
															t && this.bufferController.addRequiredMediaType(e._id, t._mimeType);
															var n = e.AdaptationSet.find((function(e) {
																return _.MimeTypeHelper.isAudio(e._mimeType)
															}));
															n && this.bufferController.addRequiredMediaType(e._id, n._mimeType)
														}, e.prototype.updateSubtitleMediaTypes = function(e) {
															var t = this;
															e.AdaptationSet.filter((function(e) {
																return _.MimeTypeHelper.isSubtitle(e._mimeType)
															})).forEach((function(n) {
																t.bufferController.addRequiredMediaType(e._id, n._mimeType)
															}))
														}, e.prototype.updateMediaTypes = function(e) {
															this.updateVideoAndAudioMediaTypes(e), this.updateSubtitleMediaTypes(e)
														}, e.prototype.updatePeriodInformation = function() {
															var e = this;
															this.manifestService.getAllPeriods().forEach((function(t) {
																e.updateMediaTypes(t), e.bufferController.checkIfEndOfBufferReached(e.settings.END_OF_BUFFER_TOLERANCE)
															}))
														}, e.prototype.finishInit = function() {
															var e = this;
															return this.initPromise ? this.initPromise : !0 === this.initialized || null === this.manifestService.getManifest() ? this.initPromise = Promise.resolve() : (this.disposeSegmentControllers(), this.mimeTypes = {}, this.initPromise = this.renderer.ready().then((function() {
																return e.initializeDependents()
															})))
														}, e.prototype.disposeSegmentControllers = function() {
															var e = this;
															this.segmentControllerMap && (Object.keys(this.segmentControllerMap).forEach((function(t) {
																return e.segmentControllerMap[t].dispose()
															})), this.segmentControllerMap = {})
														}, e.prototype.createTransmuxer = function() {
															var e = this;
															if (b.ModuleManager.has(g.ModuleName.ContainerTS)) {
																var t = b.ModuleManager.get(g.ModuleName.ContainerTS);
																this.getAllSegmentControllers().filter((function(e) {
																	return e.isTransmuxerRequired()
																})).forEach((function(n) {
																	e.transmuxer = e.transmuxer || new t.WebWorkerTransmuxer(e.context, e.hasSeparateAudioPlaylist()), n.setTransmuxer(e.transmuxer)
																})), this.subtitleService && this.subtitleService.setTransmuxer(this.transmuxer)
															}
														}, e.prototype.hasSeparateAudioPlaylist = function() {
															return this.getAllSegmentControllers().some((function(e) {
																return _.MimeTypeHelper.isAudio(e.getMimeType())
															}))
														}, e.prototype.initializeDependents = function() {
															this.periodSwitchTracker.setInitialPeriod(), this.initializeBufferController(), this.updatePeriodInformation();
															var e = this.periodSwitchTracker.getCurrentPlayingPeriod() || this.manifestService.getFirstPeriod();
															e && this.initializeSegmentControllers(e), this.enableForcedSubtitles(), this.createTransmuxer(), this.initialized = !0
														}, e.prototype.enableForcedSubtitles = function() {
															var e = this.getAudioSegmentController();
															if (this.subtitleService && e) {
																var t = e.getCurrentLangObj().lang;
																this.subtitleService.enableForcedSubtitle(t)
															}
														}, e.prototype.initializeSegmentControllers = function(e) {
															var t, n = this;
															this.maybeConsiderOnlyMuxedAVSet(null !== (t = null == e ? void 0 : e.AdaptationSet) && void 0 !== t ? t : []).forEach((function(e) {
																return n.createSegmentControllerIfMediaTypeIsMissing(e)
															}))
														}, e.prototype.maybeConsiderOnlyMuxedAVSet = function(e) {
															var t, n, r, i = e.find((function(e) {
																	return _.MimeTypeHelper.isAudio(e._mimeType)
																})),
																a = e.find((function(e) {
																	return _.MimeTypeHelper.isVideo(e._mimeType)
																})),
																o = (null !== (n = null === (t = null == a ? void 0 : a.ContentComponent) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 1;
															if (!i || !a || !o) return e;
															var s = (0, A.getHlsDefaultLanguage)(i._mimeType, this.getSourceStore().getState()),
																u = null === (r = a.ContentComponent) || void 0 === r ? void 0 : r.find((function(e) {
																	return e._lang === (null == s ? void 0 : s.language) && e._id === (null == s ? void 0 : s.name)
																}));
															return s && u ? [a] : e
														}, e.prototype.createSegmentControllerIfMediaTypeIsMissing = function(e) {
															var t = (0, S.getMimeTypeForAdaptationSet)(e);
															(0, _.isMediaTypeContained)(this.mimeTypes, t) || this.setupControllerForAdaptationSet(e)
														}, e.prototype.initializeBufferController = function() {
															this.bufferController = new v.BufferController(this.context, this.endStallAtGap, this.manifestService.getTotalDuration(), this.periodSwitchTracker.getCurrentPlayingPeriodId())
														}, e.prototype.getBufferLevel = function(e, t, n, r) {
															return void 0 === r && (r = !0), this.bufferController ? this.bufferController.getOverallBufferLevel(e, t, n, r) : 0
														}, e.prototype.handleDroppedOutPeriods = function() {
															var e = this;
															this.periodSwitchTracker.shouldHandleDroppedOutPeriod() && (this.periodSwitchTracker.isPlayingPeriodDroppedOut() ? (this.logger.debug("Playing period dropped out of the manifest, timeshifting to current position"), this.switchLoadingPeriodForAllMedia(this.manifestService.getPeriodIdForTime(this.getCurrentTime())), this.timeShift(this.getTimeShift()).catch((function(t) {
																return e.context.logger.debug("TimeShift failed", t)
															}))) : this.periodSwitchTracker.isLoadingPeriodDroppedOut() && (this.logger.debug("Current loading period (".concat(this.periodSwitchTracker.getCurrentLoadingPeriodId(), ") ") + "dropped out of the manifest, switching to first available one"), this.getAllSegmentControllers().forEach((function(e) {
																return e.invalidateOngoingRequests()
															})), this.switchLoadingPeriodForAllMedia(this.manifestService.getFirstPeriod()._id)))
														}, e.prototype.initializeThumbnails = function() {
															var e = this;
															this.context.serviceManager.maybeCall(r.ServiceName.ThumbnailService, (function(t) {
																e.context.sourceContext.source && e.context.sourceContext.source.thumbnailTrack || t.addThumbnails(e.manifestService.getAllDashThumbnailSources())
															}))
														}, e.prototype.applyManifestTimings = function() {
															var e = this.manifestService.isLive(),
																t = this.context.serviceManager.get(r.ServiceName.StartOffsetService),
																n = this.manifestService.hasSuggestedStartPosition();
															if (e) {
																var i = this.manifestService.getTimeShiftBufferDepthSeconds();
																0 !== i && (this.metadataParsedService.expirationTimeInSeconds = i), n && (t.manifestStartOffset = this.manifestService.getLiveStartOffset(), this.adjustMaximumBufferLevel())
															} else n && (t.manifestStartOffset = this.manifestService.getVodStartOffset())
														}, e.prototype.adjustMaximumBufferLevel = function() {
															var e = Math.abs(this.manifestService.getLiveStartOffset(!1));
															e = e > 0 ? e : this.manifestService.getMaxSegmentDuration();
															var t = Math.min(e, this.bufferSettings.getForwardTargetLevel(s.MediaType.Video)),
																n = Math.min(e, this.bufferSettings.getForwardTargetLevel(s.MediaType.Audio));
															this.bufferSettings.setMaximumBufferLevel(s.BufferType.ForwardDuration, t, s.MediaType.Video), this.bufferSettings.setMaximumBufferLevel(s.BufferType.ForwardDuration, n, s.MediaType.Audio)
														}, e.prototype.terminate = function() {
															var e = this;
															this.logger.debug("stopping playback"), this.stop(), this.getAllSegmentControllers().forEach((function(e) {
																return e.stop()
															})), this.bufferController && this.bufferController.stop(!0), this.transmuxer = (0, i.dispose)(this.transmuxer), this.timeshiftHandler = (0, i.dispose)(this.timeshiftHandler), this.drmKidErrorHandler = (0, i.dispose)(this.drmKidErrorHandler), (0, i.dispose)(this.periodSwitchTracker), this.cachedSeekableRange = null, this.renderer.off(m.MediaElementEvent.ended, this.firePlaybackFinishedEvent);
															var t = this.renderer.shutdown().catch((function(t) {
																return e.logger.debug("Got an error on shutdown", {
																	message: t.message
																}), Promise.resolve()
															}));
															return this.removeEventHandlers(), this.unsubscribeFromPlayingTracksChanges(), this.initialized = !1, this.periodSwitchTracker.setCurrentPlayingPeriodId(null), this.mimeTypes = null, this.context.store.dispatch((0, f.resetDrmKidErrors)()), this.manifestService.resetExcludedRepresentations(), this.disposeSegmentControllers(), t
														}, e.prototype.dispose = function() {
															this.timeshiftHandler = (0, i.dispose)(this.timeshiftHandler), this.bufferController = (0, i.dispose)(this.bufferController), (0, i.dispose)(this.periodSwitchTracker);
															try {
																this.removeEventHandlers()
															} catch (e) {}
															this.unsubscribeFromManifestChanges(), this.unsubscribeFromPlayingTracksChanges(), this.disposeSegmentControllers(), this.unsubscribeFromSeekProcess && this.unsubscribeFromSeekProcess(), this.subtitleService = null, this.heartbeatService = null, this.streamTimeService = null, this.segmentControllerMap = null, this.settings = null, this.bufferSettings = null, this.eventHandler = null, this.renderer = null, this.mimeTypes = null, this.sourceType = null
														}, e.prototype.acquireServices = function() {
															var e = this.context.sourceContext.sourceIdentifier;
															this.manifestService = this.context.serviceManager.get(r.ServiceName.ManifestService, e), this.playerStateService = this.context.serviceManager.get(r.ServiceName.PlayerStateService), this.subtitleService = this.context.serviceManager.get(r.ServiceName.SubtitleService), this.metadataParsedService = this.context.serviceManager.get(r.ServiceName.MetadataParsedService), this.manifestLoader = this.context.serviceManager.get(r.ServiceName.ManifestLoadingService, e), this.heartbeatService = this.context.serviceManager.get(r.ServiceName.HeartbeatService, e), this.streamTimeService = this.context.serviceManager.get(r.ServiceName.StreamTimeService), this.manifestUpdateScheduler = this.context.serviceManager.get(r.ServiceName.ManifestUpdateSchedulingService, e)
														}, e.prototype.init = function(e) {
															var t = this,
																n = this.getSourceStore();
															return this.periodSwitchTracker = new C.PeriodSwitchTracker(this.context), this.subscribeToPlayingTracksChanges(), this.subscribeToSeekProcess(), this.isAudioCatchingUp = !1, this.context.store.dispatch((0, f.resetDrmKidErrors)()), this.acquireServices(), n && !this.drmKidErrorHandler && (this.drmKidErrorHandler = new y.DrmKidErrorHandler(this.context, (function() {
																return t.onDownloadedRepresentationExcluded()
															}))), this.sourceType = e.type, this.renderer.on(m.MediaElementEvent.ended, this.firePlaybackFinishedEvent), this.manifestUpdateScheduler.isInitiated() ? (this.subscribeToManifestChanges(), this.mpdAvailableHandler(), Promise.resolve()) : this.manifestUpdateScheduler.init(e.url.toString()).then((function() {
																t.subscribeToManifestChanges(), t.mpdAvailableHandler()
															}))
														}, e.prototype.stop = function() {
															this.logger.debug("Stopping main timer"), this.heartbeatService.stop(), this.initPromise = null, this.eventHandler.off(a.PlayerEvent.SegmentRequestFinished, this.onSegmentRequestFinished), this.unsubscribeFromManifestChanges()
														}, e.prototype.isOneLoaderReady = function() {
															return this.getAllSegmentControllers().some((function(e) {
																return e.canLoad()
															}))
														}, e.prototype.areAllLoadersReady = function() {
															return this.getAllSegmentControllers().every((function(e) {
																return e.canLoad()
															}))
														}, e.prototype.isVod = function() {
															return !this.manifestService.isLive()
														}, e.prototype.shouldStopDownloadWhenPaused = function() {
															return this.playerStateService.isPaused() && this.settings.STOP_DOWNLOAD_ON_PAUSE && this.manifestService.isLive()
														}, e.prototype.shouldWaitForOtherMimeTypeDownload = function(e) {
															var t = Object.keys(this.segmentControllerMap).find((function(t) {
																return _.MimeTypeHelper.isAV(t) && e !== t
															}));
															if (!t) return !1;
															if (this.isAudioCatchingUp) return _.MimeTypeHelper.isAudio(t);
															var n = this.segmentControllerMap[t],
																r = this.streamTimeService.getTimeForNextSegment(t);
															if (t && !n.hasDownloadError && n.hasNext(r)) {
																var i = this.getBufferRelevantTime(),
																	a = this.getCurrentForwardBuffer(e, i),
																	o = this.getCurrentForwardBuffer(t, i),
																	s = this.hasReachedTargetBufferLevel(t, o);
																return a > o && !s
															}
															return n.getCurrentPeriodId() !== this.segmentControllerMap[e].getCurrentPeriodId()
														}, e.prototype.hasReachedTargetBufferLevel = function(e, t) {
															var n = _.MimeTypeHelper.getMediaType(e);
															return t >= this.bufferSettings.getForwardTargetLevel(n)
														}, e.prototype.shouldEndOfStreamBeSignaled = function() {
															var e = this,
																t = this.getAllSegmentControllers(),
																n = this.bufferController.hasPendingSegments(),
																r = t.map((function(e) {
																	return e.getMimeType()
																})),
																i = t.some((function(e) {
																	return e.hasPendingSegments()
																})),
																a = r.some((function(t) {
																	return e.renderer.isDataBeingAppended(t)
																}));
															return !i && !n && !a
														}, e.prototype.shouldSuspendHeartbeat = function() {
															return !this.isOneLoaderReady() || this.shouldStopDownloadWhenPaused() || Boolean(this.clearBuffersPromise) || this.isSwitchingAudioTrack
														}, e.prototype.getActiveSegmentControllers = function() {
															var e = this;
															return this.getAllSegmentControllers().filter((function(t) {
																return e.isSegmentControllerActive(t)
															}))
														}, e.prototype.isSegmentControllerActive = function(e) {
															var t = this.periodSwitchTracker.getCurrentLoadingPeriodId(),
																n = this.streamTimeService.getTimeForNextSegment(e.getMimeType());
															return e.canLoad() && (e.hasNext(n) || e.hasPendingSegments(t)) && !this.shouldWaitForOtherMimeTypeDownload(e.getMimeType())
														}, e.prototype.getActiveMimeTypes = function() {
															return this.getActiveSegmentControllers().map((function(e) {
																return e.getMimeType()
															}))
														}, e.prototype.getSegmentControllersForMimeType = function(e) {
															return this.getAllSegmentControllers().filter((function(t) {
																return e === t.getMimeType()
															}))
														}, e.prototype.requestSegmentsForMimeType = function(e, t) {
															var n = this;
															this.getSegmentControllersForMimeType(e).forEach((function(e) {
																return n.getNextSegment(e, t)
															}))
														}, e.prototype.shouldClearSubtitleServiceBuffers = function() {
															return Boolean(this.subtitleService && !this.playerStateService.seekingOrTimeshifting)
														}, e.prototype.clearSubtitleServiceBuffers = function() {
															this.subtitleService.clearBuffersUntil(this.renderer.getCurrentTime() - 10)
														}, e.prototype.areMediaTypesFinalForPlayingPeriod = function() {
															return this.bufferController.areBufferBlockMediaTypesFinal(this.periodSwitchTracker.getCurrentPlayingPeriodId())
														}, e.prototype.maybeStop = function() {
															var e = this.manifestService.isManifestFinalized(),
																t = this.manifestService.isLastPeriod(this.periodSwitchTracker.getCurrentLoadingPeriodId());
															e && t && (this.bufferController.stop(!1), this.shouldEndOfStreamBeSignaled() && (this.signalEndOfStream(), this.stop()))
														}, e.prototype.getNextSegment = function(e, t) {
															if (e.canLoad()) {
																var n = _.MimeTypeHelper.getMediaType(e.getMimeType()),
																	i = this.bufferSettings.getForwardTargetLevel(n),
																	a = this.getCurrentForwardBuffer(e.getMimeType(), this.getBufferRelevantTime());
																a >= i || (this.context.serviceManager.get(r.ServiceName.AdaptationService).addSample(e.getMimeType(), {
																	bufferTargetLevel: i,
																	bufferLevel: a
																}), e.hasNext(t) && e.getNext(t))
															}
														}, e.prototype.getBufferRelevantTime = function() {
															return this.playerStateService.seekingOrTimeshifting ? this.playerStateService.targetPlaybackTime : this.renderer.getCurrentTime()
														}, e.prototype.getCurrentForwardBuffer = function(e, t) {
															return this.getBufferLevel(e, t, s.BufferType.ForwardDuration)
														}, e.prototype.isLoadingLastPeriod = function() {
															return this.periodSwitchTracker.isLoadingLastPeriod()
														}, e.prototype.switchLoadingPeriod = function() {
															if (this.isAudioCatchingUp) {
																var e = this.getAudioSegmentController(),
																	t = e.getCurrentPeriodId(),
																	n = this.manifestService.getNextPeriod(t)._id;
																this.switchLoadingPeriodForAudio(n), e.getCurrentPeriodId() === this.periodSwitchTracker.getCurrentLoadingPeriodId() && (e.isTransmuxerRequired() && e.getTransmuxer() && (e.getTransmuxer().dispose(), e.setTransmuxer(this.transmuxer)), this.isAudioCatchingUp = !1, this.logger.debug("The audio SegmentController caught up to the overall loading period again."))
															} else {
																var r = this.manifestService.getNextPeriod(this.periodSwitchTracker.getCurrentLoadingPeriodId());
																r && this.switchLoadingPeriodForAllMedia(r._id)
															}
														}, e.prototype.switchLoadingPeriodForAllMedia = function(e) {
															var t = this;
															e !== this.periodSwitchTracker.getCurrentLoadingPeriodId() && (this.isAudioCatchingUp = !1, this.prepareLoadingPeriodSwitch(e), this.getAllSegmentControllers().filter((function(t) {
																return t.getCurrentPeriodId() !== e
															})).forEach((function(n) {
																n.switchPeriod(e), t.renderer.storeDrmInitDataFromManifest(n.getAdaptationSetForPeriodId(e))
															})), this.periodSwitchTracker.setCurrentLoadingPeriodId(e))
														}, e.prototype.prepareLoadingPeriodSwitch = function(e) {
															var t, n, r = this;
															(null !== (n = null === (t = this.manifestService.getPeriod(new w.PeriodId(e))) || void 0 === t ? void 0 : t.AdaptationSet) && void 0 !== n ? n : []).forEach((function(e) {
																return r.createSegmentControllerIfMediaTypeIsMissing(e)
															})), this.resetTransmuxer()
														}, e.prototype.switchLoadingPeriodForAudio = function(e) {
															var t = this.getAudioSegmentController(),
																n = t.getCurrentPeriodId();
															t.resetTransmuxer(), t.switchPeriod(e), this.logger.debug("Switched audio loading period from ".concat(n, " to ").concat(e))
														}, e.prototype.isAVCompletelyLoaded = function() {
															var e = this.getAllSegmentControllers().some((function(e) {
																return e.hasPendingSegments()
															})) || this.bufferController.hasPendingSegments();
															return this.manifestService.isManifestFinalized() && !e
														}, e.prototype.getBufferedRanges = function(e) {
															return void 0 === e && (e = !1), this.bufferController.getBufferedRangesMap(this.periodSwitchTracker.getCurrentPlayingPeriodId(), e)
														}, e.prototype.resetTransmuxer = function() {
															this.transmuxer && (this.transmuxer.dispose(), this.transmuxer = null), this.createTransmuxer()
														}, e.prototype.restartBufferController = function() {
															this.bufferController.hasStopped() && this.bufferController.restart()
														}, e.prototype.shouldBuffersBeCleared = function(e, t, n) {
															var r = e < this.renderer.getCurrentTime() && this.context.settings.CLEAR_BUFFERS_ON_SEEKING_BACKWARDS;
															return !t && (!this.bufferController.isInBufferedRange(e) || r) || n
														}, e.prototype.onSeekProcessChange = function(e, t) {
															var n;
															if (-1 === e.targetTime && t.targetTime >= 0) null === (n = this.playerStateService) || void 0 === n || n.transitionToSeekedState(t.issuer !== o.STARTUP_ISSUER_NAME);
															else {
																var r = e.targetTime !== t.targetTime,
																	i = e.targetTime >= 0;
																r && i && this.seek(e.targetTime, e.issuer === o.STARTUP_ISSUER_NAME)
															}
														}, e.prototype.seek = function(e, t, n, r) {
															var i = this;
															if (void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), this.bufferController) {
																this.restartBufferController(), this.seekCounter++;
																var a, o, s = this.seekCounter,
																	u = this.manifestService.getPeriodIdForTime(e);
																this.ensureInitialPeriod(u), this.logger.debug("seek from current period (".concat(this.periodSwitchTracker.getCurrentPlayingPeriodId(), ") to target period ") + "(".concat(u, ") - seek time in period is: ").concat(e)), this.bufferController.readyToSeek().then((function() {
																	if (o = i.shouldBuffersBeCleared(e, n, r), a = i.periodSwitchTracker.getCurrentLoadingPeriodId() !== u && o, o && i.bufferController.isBufferAvailable()) return i.clearBuffersPromise = i.clearBuffersOnSeek(), i.clearBuffersPromise
																})).then((function() {
																	return i.clearBuffersPromise = null, i.initialized ? (i.getAllSegmentControllers().forEach((function(e) {
																		return e.setAdaptionLogicStartupPhase()
																	})), a && i.switchLoadingPeriodForAllMedia(u), o && i.getAllSegmentControllers().forEach((function(t) {
																		return t.seekTo(e)
																	})), (t ? Promise.resolve() : i.start()).then((function() {
																		i.bufferController.setCurrentTime(e).then((function(t) {
																			i.seekCounter === s ? (i.logger.debug("Successfully seeked to ".concat(t)), i.context.store.dispatch((0, c.updateSeekingProcess)({
																				targetTime: -1,
																				issuer: "",
																				isInitial: !1
																			}))) : N(i.context.store) && i.context.logger.debug("Seek to ".concat(e, " has finished but a newer operation has been started"))
																		})).catch((function(e) {
																			i.logger.debug("Failed to set currentTime on seek", e)
																		}))
																	}))) : (i.logger.debug("Aborting seek as MediaPlayerController has been terminated!"), Promise.resolve())
																}))
															}
														}, e.prototype.ensureInitialPeriod = function(e) {
															var t = this;
															void 0 === this.periodSwitchTracker.getCurrentPlayingPeriodId() && (this.logger.debug("current period is undefined, using seek target period " + e), this.periodSwitchTracker.setCurrentPlayingPeriodId(e), this.resetTransmuxer(), this.getAllSegmentControllers().forEach((function(e) {
																e.switchPeriod(t.periodSwitchTracker.getCurrentPlayingPeriodId()), _.MimeTypeHelper.isAV(e.getMimeType()) && t.renderer.storeDrmInitDataFromManifest(e.getCurrentAdaptationSet())
															})), this.periodSwitchTracker.setCurrentLoadingPeriodId(this.periodSwitchTracker.getCurrentPlayingPeriodId()), this.bufferController.setInitialPeriod(e))
														}, e.prototype.clearBuffersOnSeek = function() {
															var e = this;
															return this.eosSignaled = !1, this.getAllSegmentControllers().forEach((function(e) {
																return e.cancelLoading()
															})), this.bufferController.setEndOfStream(!1).then((function() {
																return e.bufferController.clearBuffers()
															})).catch((function() {
																e.logger.debug("Failed to clear buffers on seek, carrying on regardless")
															}))
														}, e.prototype.getAllSegmentControllers = function() {
															return Object.values(this.segmentControllerMap || {})
														}, e.prototype.getAudioSegmentController = function() {
															return this.getAllSegmentControllers().find((function(e) {
																return _.MimeTypeHelper.isAudio(e.getMimeType())
															}))
														}, e.prototype.updateAdaptationLogicData = function(e, t) {
															var n = _.MimeTypeHelper.getMediaType(t.getMimeType()),
																i = this.getBufferLevel(t.getMimeType(), this.renderer.getCurrentTime(), s.BufferType.ForwardDuration),
																a = this.bufferSettings.getForwardTargetLevel(n),
																o = e.duration / e.downloadTime;
															e.isInit || this.context.serviceManager.get(r.ServiceName.AdaptationService).addSample(t.getMimeType(), {
																bufferTargetLevel: a,
																bufferLevel: i,
																downloadRate: o
															})
														}, e.prototype.signalEndOfStream = function(e) {
															void 0 === e && (e = !0), this.isVod() && (this.eosSignaled || (this.eosSignaled = !0, this.bufferController.setEndOfStream(!0), e && this.stop()), this.bufferController.isStarted() && this.bufferController.stop())
														}, e.prototype.start = function() {
															var e = this;
															return this.hasStarted() ? Promise.resolve() : this.finishInit().then((function() {
																e.bufferController.hasStreamEnded() && (e.seek((0, d.getStartTimeOffset)(e.getSourceStore().getState())), e.getAllSegmentControllers().forEach((function(e) {
																	return e.resetTransmuxer()
																}))), e.bufferController.isStarted() || e.bufferController.restart(), e.getAllSegmentControllers().filter((function(e) {
																	return _.MimeTypeHelper.isAV(e.getMimeType())
																})).forEach((function(t) {
																	return e.renderer.storeDrmInitDataFromManifest(t.getCurrentAdaptationSet())
																})), e.logger.debug("Starting main timer"), e.eosSignaled = !1, e.heartbeatService.start(), e.subscribeToManifestChanges(), e.eventHandler.on(a.PlayerEvent.SegmentRequestFinished, e.onSegmentRequestFinished)
															}))
														}, e.prototype.maybeTransitionToPausedState = function(e) {
															this.bufferController.isBufferBlockSwitchOngoing() ? this.context.logger.debug("Ignoring transition to Paused because buffer block switch is ongoing") : this.playerStateService.transitionToPausedState(!0, e, !0)
														}, e.prototype.clearBuffers = function(e) {
															var t = this;
															return Promise.all(e.map((function(e) {
																return t.bufferController.clearCacheForMimeType(e), t.bufferController.clearBuffer(e)
															}))).then((function() {}))
														}, e.prototype.recoverFromImpreciseTimeShiftAfterAudioTrackSwitch = function(e) {
															var t = this;
															this.manifestService.isLive() && !this.settings.ENABLE_SEEK_FOR_LIVE && this.renderer.setCurrentTime(e).catch((function() {
																return t.logger.debug("Could not set currentTime")
															}))
														}, e.prototype.restorePlaybackPositionAfterAudioTrackSwitch = function(e, t) {
															var n = this;
															return this.bufferController.setEndOfStream(!1).then((function() {
																var r = n.clearBuffers(e.getSourceBufferTypes());
																return e.getCurrentPeriodId() !== n.periodSwitchTracker.getCurrentPlayingPeriodId() ? n.prepareControllerForAudioTrackChange(e) : e.getCurrentPeriodId() !== n.periodSwitchTracker.getCurrentLoadingPeriodId() && n.periodSwitchTracker.setCurrentLoadingPeriodId(e.getCurrentPeriodId()), e.setAdaptionLogicStartupPhase(), e.seekTo(t), n.start().catch((function() {
																	return n.logger.debug("Could not restart stopped MPC after audio track switch")
																})), r.then((function() {
																	return n.recoverFromImpreciseTimeShiftAfterAudioTrackSwitch(t)
																})).catch((function(e) {
																	return n.logger.debug("Failed to set currentTime on audio track switch", e)
																}))
															}))
														}, e.prototype.isHlsManifestLoader = function(e) {
															return "hls" === this.sourceType
														}, e.prototype.setAudio = function(e) {
															var t = this.getAvailableAudio(this.periodSwitchTracker.getCurrentPlayingPeriodId()).find((function(t) {
																	return t.id === e
																})),
																n = this.getAudio();
															return this.initialized && t ? n && n.id === e ? Promise.reject(n) : this.switchAudioTrack(t) : Promise.reject(null)
														}, e.prototype.updateAdaptationSet = function(e, t, n) {
															var r = this;
															return _.MimeTypeHelper.isAudio(t) && this.isHlsManifestLoader(this.manifestLoader) ? this.manifestLoader.updateAdaptationSet(n).then((function() {
																return r.getAllSegmentControllers().forEach((function(e) {
																	return e.updateMpd()
																}))
															})).then((function() {
																return e
															})) : Promise.resolve(e)
														}, e.prototype.switchAudioTrack = function(e) {
															var t = this;
															this.isSwitchingAudioTrack = !0;
															var n = Object.keys(this.segmentControllerMap),
																r = n.find(_.MimeTypeHelper.isAudio) || n.find(_.MimeTypeHelper.isVideo),
																i = this.segmentControllerMap[r].getCurrentAdaptationSet(),
																a = this.manifestService.getAdaptationSet(e.adaptationSetId);
															return i && a && r ? this.maybeChangeAudioBufferType(i, a, r).then((function(n) {
																return t.maybeHandleMuxedAudioTransition(i, a, e, n)
															})).then((function(n) {
																return t.updateAdaptationSet(n, r, e.id)
															})).then((function(n) {
																return t.updateRelevantSegmentControllers(n, e)
															})).finally((function() {
																return t.isSwitchingAudioTrack = !1
															})) : Promise.reject("Did not find matching adaptation set")
														}, e.prototype.maybeChangeAudioBufferType = function(e, t, n) {
															var r, i = this,
																a = D(t, e),
																o = _.MimeTypeHelper.isVideo(t._mimeType) || _.MimeTypeHelper.isVideo(e._mimeType),
																s = !(0, I.hasContentProtection)(e.ContentProtection, t.ContentProtection);
															if (o || !a && !s) return Promise.resolve(((r = {})[t._mimeType] = "", r));
															var u = Object.keys(this.segmentControllerMap).find(_.MimeTypeHelper.isVideo);
															return this.recreateCurrentSegmentController(n, t).then((function() {
																return s && u ? i.clearBuffersAndSeek(u) : Promise.resolve()
															})).then((function() {
																return i.bufferController.changeBufferType(t._mimeType, i.mimeTypes[t._mimeType])
															}))
														}, e.prototype.maybeHandleMuxedAudioTransition = function(e, t, n, r) {
															var i = this;
															return _.MimeTypeHelper.isVideo(t._mimeType) || _.MimeTypeHelper.isVideo(e._mimeType) ? this.clearBuffers([e._mimeType, t._mimeType]).then((function() {
																var r = _.MimeTypeHelper.isVideo(t._mimeType);
																return i.transmuxer.setShouldDiscardAudio(!r), r ? (i.disposeSegmentController(e), Promise.resolve()) : (i.createSegmentControllerIfMediaTypeIsMissing(t), i.updateSegmentController(n, e._mimeType))
															})).then((function() {
																return r
															})) : Promise.resolve(r)
														}, e.prototype.clearBuffersAndSeek = function(e) {
															var t = this;
															return this.clearBuffers([e]).then((function() {
																var n;
																t.segmentControllerMap[e].seekTo(t.renderer.getCurrentTime()), null === (n = t.timeshiftHandler) || void 0 === n || n.updateSegmentControllers(t.segmentControllerMap)
															}))
														}, e.prototype.disposeSegmentController = function(e) {
															var t;
															if (e) {
																var n = e._mimeType,
																	r = this.segmentControllerMap[n];
																r.cancelLoading(), r.dispose(), delete this.segmentControllerMap[n], delete this.mimeTypes[n], null === (t = this.timeshiftHandler) || void 0 === t || t.updateSegmentControllers(this.segmentControllerMap), this.getSourceStore().dispatch((0, $.removeActiveTrackAction)(e._internalId)), this.context.segmentInfoService && this.context.segmentInfoService.setSegmentControllers(Object.values(this.segmentControllerMap))
															}
														}, e.prototype.recreateCurrentSegmentController = function(e, t) {
															var n = this,
																r = this.segmentControllerMap[e];
															return this.disposeSegmentController(r.getCurrentAdaptationSet()), this.clearBuffers([e]).then((function() {
																return n.setupControllerForAdaptationSet(t), t._mimeType
															}))
														}, e.prototype.updateRelevantSegmentControllers = function(e, t) {
															var n = this;
															return Promise.all(Object.keys(e).map((function(e) {
																return n.updateSegmentController(t, e)
															}))).then((function() {}))
														}, e.prototype.updateSegmentController = function(e, t) {
															if (this.subtitleService && this.subtitleService.enableForcedSubtitle(e.lang), this.segmentControllerMap[t].setCurrentLangObj(e), this.segmentControllerMap[t].cancelLoading(), this.hasStarted() || this.eosSignaled) {
																var n = this.getBufferRelevantTime();
																return this.restorePlaybackPositionAfterAudioTrackSwitch(this.segmentControllerMap[t], n)
															}
															return Promise.resolve()
														}, e.prototype.getAudio = function() {
															if (this.initialized) {
																var e = void 0,
																	t = Object.keys(this.segmentControllerMap).find((function(e) {
																		return _.MimeTypeHelper.isAudio(e)
																	}));
																if (t && (e = this.segmentControllerMap[t].getCurrentLangObj()), !e) {
																	var n = Object.keys(this.segmentControllerMap).find((function(e) {
																		return _.MimeTypeHelper.isVideo(e)
																	}));
																	if (n && this.segmentControllerMap[n].getSourceBufferTypes()) {
																		var r = this.segmentControllerMap[n];
																		if (r.getSourceBufferTypes().some((function(e) {
																				return _.MimeTypeHelper.isAudio(e)
																			}))) {
																			var i = r.getCurrentAdaptationSet()._internalId;
																			e = this.getAvailableAudio(this.periodSwitchTracker.getCurrentPlayingPeriodId()).find((function(e) {
																				return e.adaptationSetId === i
																			})) || r.getCurrentLangObj()
																		}
																	}
																}
																return e || null
															}
															return null
														}, e.prototype.prepareControllerForAudioTrackChange = function(e) {
															if (this.isAVMultiplexed(e)) this.switchLoadingPeriodForAllMedia(this.periodSwitchTracker.getCurrentPlayingPeriodId());
															else {
																if (this.logger.debug("audio needs to load previous period(s) and catch up to the overall loading period"), e.isTransmuxerRequired()) {
																	var t = b.ModuleManager.get(g.ModuleName.ContainerTS);
																	e.setTransmuxer(new t.WebWorkerTransmuxer(this.context, this.hasSeparateAudioPlaylist()))
																}
																this.isAudioCatchingUp = !0, this.switchLoadingPeriodForAudio(this.periodSwitchTracker.getCurrentPlayingPeriodId())
															}
														}, e.prototype.getPlaybackRepresentation = function(e) {
															for (var t in this.segmentControllerMap)
																if (this.segmentControllerMap[t] && t.includes(e)) return this.context.serviceManager.get(r.ServiceName.TimedMetadataService).getPlaybackRepresentation(t);
															return null
														}, e.prototype.getTimeShift = function() {
															return this.getTimeShiftHandler().getTimeShift()
														}, e.prototype.getTimeShiftLiveEdge = function() {
															return this.manifestService.isLive() ? this.getTimeShiftHandler().getTimeShiftLiveEdge() : 0
														}, e.prototype.getTimeShiftHandler = function() {
															return this.timeshiftHandler || (this.timeshiftHandler = new M.TimeShiftHandler(this.context, this, this.bufferController, this.segmentControllerMap)), this.timeshiftHandler
														}, e.prototype.timeShift = function(e, t, n) {
															return void 0 === n && (n = !1), this.getTimeShiftHandler().timeShift(e, t, n)
														}, e.prototype.getAvailableAudio = function(e) {
															return this.manifestService.getAvailableAudio(e)
														}, e.prototype.hasStreamEnded = function() {
															return !!this.bufferController && this.bufferController.hasStreamEnded()
														}, e.prototype.getCurrentTime = function() {
															return this.renderer.getCurrentTime()
														}, e.prototype.getSeekableRange = function() {
															if (this.manifestService.isLive()) {
																if (this.playerStateService.seekingOrTimeshifting && this.cachedSeekableRange) return this.cachedSeekableRange;
																var e = this.getTimeShiftLiveEdge(),
																	t = e + this.getMaxTimeShift();
																return this.cachedSeekableRange = {
																	start: t,
																	end: e
																}
															}
															var n = this.getAllSegmentControllers().find((function(e) {
																return _.MimeTypeHelper.isAV(e.getMimeType())
															}));
															return n ? n.getMPDHandler().getSeekableRange() : {
																start: -1,
																end: -1
															}
														}, e.prototype.getAvailableSegments = function() {
															var e = this,
																t = {};
															return Object.keys(this.segmentControllerMap).forEach((function(n) {
																t[n] = e.segmentControllerMap[n].getSegmentInfos()
															})), t
														}, e.prototype.isInitialized = function() {
															return this.initialized
														}, e.prototype.hasStarted = function() {
															var e, t;
															return null !== (t = null === (e = this.heartbeatService) || void 0 === e ? void 0 : e.started) && void 0 !== t && t
														}, e
													}();

												function D(e, t) {
													return !(0, I.areAudioMimeCodecsCompatible)({
														mimeType: e._mimeType,
														codec: (0, S.getCodecsFromAdaptationSet)(e)
													}, {
														mimeType: t._mimeType,
														codec: (0, S.getCodecsFromAdaptationSet)(t)
													})
												}

												function B(e, t) {
													var n = e.getPlaybackTimeRange();
													n && t.dispatch((0, x.removeStreamTimeRange)((0, P.getTrackIdentifier)(e.getSegmentInfo()), n, P.StreamTimeRangeType.Loading))
												}

												function N(e) {
													var t = e.getState();
													if (!t) return !1;
													var n = (0, l.getPlayerState)(t).seekingProcess.issuer;
													return n !== o.STARTUP_ISSUER_NAME && "" !== n
												}
												t.MediaPlayerController = L, t.isBufferChangeRequired = D
											},
											97383: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.resolveMediaTypes = void 0;
												var r = n(46381),
													i = n(43233);
												t.resolveMediaTypes = function(e) {
													return (0, i.getCodecsFromAdaptationSet)(e).split(",").map((function(e) {
														return (0, r.getMediaTypeFromCodec)(e)
													}))
												}
											},
											81201: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MseModuleDefinition = void 0;
												var r = n(1520),
													i = n(86705),
													a = n(83024),
													o = n(8073),
													s = n(71278),
													u = n(51186),
													c = n(43233),
													l = n(63080),
													f = n(49835),
													d = n(30828),
													h = n(27999),
													p = n(92977),
													_ = n(88784),
													m = n(59266),
													b = n(87384),
													g = n(27005),
													v = n(31998),
													y = n(51017),
													A = n(53088),
													S = n(26147),
													w = n(45110),
													E = n(76060),
													T = n(72766),
													C = {
														removeStreamTimeRange: w.removeStreamTimeRange,
														removeLoadedRange: r.removeLoadedRange,
														addLoadedRange: r.addLoadedRange,
														resetLoadedRanges: r.resetLoadedRanges,
														resetStreamTimeline: w.resetStreamTimeline,
														removeActiveTrackAction: v.removeActiveTrackAction,
														setRepresentationIdAction: v.setRepresentationIdAction,
														setMediaTypeAction: v.setMediaTypeAction
													},
													$ = {
														getBufferState: i.getBufferState,
														getPlayingPeriodId: A.getPlayingPeriodId,
														getContainerFormat: y.getContainerFormat,
														getLoadedRangesForMimeType: i.getLoadedRangesForMimeType,
														getSegmentInfos: S.getSegmentInfos
													},
													k = {
														containerFormat: o.ContainerFormat,
														streamTimeRangeType: E.StreamTimeRangeType
													};
												t.MseModuleDefinition = {
													name: a.ModuleName.EngineBitmovin,
													module: {
														MediaPlayer: f.MediaPlayer,
														SegmentController: p.SegmentController,
														technologyChecker: new T.TechnologyChecker,
														Stream: g.Stream,
														FetchController: h.FetchController,
														SegmentInfoService: _.SegmentInfoService,
														SegmentPrefetchingService: b.SegmentPrefetchingService,
														AdRestorationOptimizationService: d.AdRestorationOptimizationService,
														ManifestCachingService: u.ManifestCachingService,
														SegmentListMPDHandler: m.SegmentListMPDHandler,
														actions: C,
														selectors: $,
														mseModuleTypes: k,
														AdaptationSetId: s.AdaptationSetId,
														RepresentationId: l.RepresentationId,
														getTrackIdentifier: E.getTrackIdentifier,
														getCodecsFromAdaptationSet: c.getCodecsFromAdaptationSet,
														getMimeTypeForAdaptationSet: c.getMimeTypeForAdaptationSet
													}
												}, t.default = t.MseModuleDefinition
											},
											84493: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.PeriodSwitchTracker = void 0;
												var r = n(59534),
													i = n(59574),
													a = n(28803),
													o = n(80815),
													s = n(52038),
													u = n(53088),
													c = function() {
														function e(e) {
															var t = this;
															this.finishPeriodSwitch = function(e, n) {
																var r = n.switchingToPeriodId,
																	a = t.getCurrentPlayingPeriodId();
																t.setCurrentPlayingPeriodId(r);
																var o = t.getCurrentPlayingPeriod();
																o && o.AdaptationSet.forEach((function(e) {
																	return t.context.renderer.storeDrmInitDataFromManifest(e)
																})), t.logger.debug("Successfully switched from Period ".concat(a, " to Period ").concat(r)), t.context.eventHandler.dispatchEvent(i.PlayerEvent.PeriodSwitched, {
																	sourcePeriod: {
																		periodId: a
																	},
																	targetPeriod: {
																		periodId: r
																	}
																})
															}, this.context = e, this.logger = e.logger, this.eventHandler = e.eventHandler, this.subscribeToPlayingTracksChanges()
														}
														return e.prototype.getManifestService = function() {
															return this.context.serviceManager.get(r.ServiceName.ManifestService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.getCurrentPlayingPeriod = function() {
															return this.getManifestService().findPeriod(this.getCurrentPlayingPeriodId())
														}, e.prototype.subscribeToPlayingTracksChanges = function() {
															var e = this.getSourceStore();
															!this.unsubscribeFromPlayingTracksStore && e && (this.unsubscribeFromPlayingTracksStore = (0, a.subscribe)(e)(u.getPlayingTracksState, this.finishPeriodSwitch, u.wasSwitchingToPeriodIdReset))
														}, e.prototype.unsubscribeFromPlayingTracksChanges = function() {
															this.unsubscribeFromPlayingTracksStore && (this.unsubscribeFromPlayingTracksStore(), this.unsubscribeFromPlayingTracksStore = void 0)
														}, e.prototype.getSourceStore = function() {
															return this.context.serviceManager.get(r.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.getCurrentLoadingPeriodId = function() {
															return this.currentLoadingPeriodId
														}, e.prototype.setCurrentLoadingPeriodId = function(e) {
															this.currentLoadingPeriodId = e
														}, e.prototype.getCurrentPlayingPeriodId = function() {
															return (0, u.getPlayingPeriodId)(this.getSourceStore().getState())
														}, e.prototype.setCurrentPlayingPeriodId = function(e) {
															this.getSourceStore().dispatch((0, s.setPlayingPeriodId)(e))
														}, e.prototype.resetPeriodIds = function() {
															this.setCurrentPlayingPeriodId(null), this.setCurrentLoadingPeriodId(void 0)
														}, e.prototype.shouldHandleDroppedOutPeriod = function() {
															return !(null == this.getCurrentPlayingPeriodId() && null == this.currentLoadingPeriodId)
														}, e.prototype.isPeriodDroppedOut = function(e) {
															return !this.getManifestService().getAllPeriods().map((function(e) {
																return e._id
															})).includes(e)
														}, e.prototype.isPlayingPeriodDroppedOut = function() {
															return this.isPeriodDroppedOut(this.getCurrentPlayingPeriodId())
														}, e.prototype.isLoadingPeriodDroppedOut = function() {
															return this.isPeriodDroppedOut(this.currentLoadingPeriodId)
														}, e.prototype.isLoadingLastPeriod = function() {
															return this.getManifestService().isLastPeriod(this.currentLoadingPeriodId)
														}, e.prototype.setInitialPeriod = function() {
															var e = this.getManifestService().isLive() ? this.getInitialPeriodForLive() : this.getInitialPeriodForVod();
															this.currentLoadingPeriodId = e, this.setCurrentPlayingPeriodId(this.currentLoadingPeriodId), this.logger.debug("setting initial period to ".concat(this.currentLoadingPeriodId))
														}, e.prototype.getInitialPeriodForLive = function() {
															var e = (0, o.toSeconds)(Date.now()) - this.getManifestService().getDesiredDistanceToLiveEdge();
															return this.getManifestService().getPeriodIdForTime(e)
														}, e.prototype.getInitialPeriodForVod = function() {
															var e = this.context.serviceManager.get(r.ServiceName.StartOffsetService).getStartOffset(this.context.sourceContext.source);
															return this.getManifestService().getPeriodIdForTime(e)
														}, e.prototype.dispose = function() {
															this.unsubscribeFromPlayingTracksChanges()
														}, e
													}();
												t.PeriodSwitchTracker = c
											},
											27752: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.createSegmentParser = void 0;
												var r = n(43068),
													i = n(83024),
													a = n(8073);
												t.createSegmentParser = function(e, t) {
													if (t === a.ContainerFormat.MP4 && r.ModuleManager.has(i.ModuleName.ContainerMP4)) {
														var n = r.ModuleManager.get(i.ModuleName.ContainerMP4);
														return new n.MP4Parser(e, new n.MP4EncryptionParser(e))
													}
													if (t === a.ContainerFormat.WEBM && r.ModuleManager.has(i.ModuleName.ContainerWebM)) return new(0, r.ModuleManager.get(i.ModuleName.ContainerWebM).WebMParser)
												}
											},
											8144: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.StreamTimeService = void 0;
												var r = n(59534),
													i = n(12391),
													a = n(76060),
													o = function() {
														function e(e, t) {
															this.serviceManager = e, this.sourceIdentifier = t
														}
														return Object.defineProperty(e.prototype, "sourceState", {
															get: function() {
																return this.serviceManager.get(r.ServiceName.SourceStoreService, this.sourceIdentifier).getState()
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "streamTimelineState", {
															get: function() {
																var e;
																return null === (e = this.sourceState) || void 0 === e ? void 0 : e.streamTimeline
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "bufferState", {
															get: function() {
																var e;
																return null === (e = this.sourceState) || void 0 === e ? void 0 : e.buffer
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "playerStateService", {
															get: function() {
																return this.serviceManager.get(r.ServiceName.PlayerStateService)
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.getTimeForNextSegment = function(e) {
															var t, n, r, a = (0, i.findFromEnd)(this.streamTimelineState[e] || [], s),
																o = this.bufferState[e],
																u = [a, (null === (t = null == o ? void 0 : o.loadedRanges) || void 0 === t ? void 0 : t[o.loadedRanges.length - 1]) || (null === (n = null == o ? void 0 : o.rendererRanges) || void 0 === n ? void 0 : n[o.rendererRanges.length - 1])].filter((function(e) {
																	return e
																})).map((function(e) {
																	return e.end
																})),
																c = Math.max.apply(Math, u);
															return isFinite(c) ? c : (null === (r = this.playerStateService) || void 0 === r ? void 0 : r.seekingOrTimeshifting) ? this.playerStateService.targetPlaybackTime : 0
														}, e.prototype.dispose = function() {}, e
													}();

												function s(e) {
													return [a.StreamTimeRangeType.Loading, a.StreamTimeRangeType.Failed].includes(e.type)
												}
												t.StreamTimeService = o
											},
											72766: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TechnologyChecker = void 0;
												var r = n(43068),
													i = n(83024),
													a = function() {
														function e() {}
														return e.prototype.getSupportedTechnologies = function() {
															return r.ModuleManager.has(i.ModuleName.RendererMse) ? r.ModuleManager.get(i.ModuleName.RendererMse).technologyChecker.getSupportedTechnologies() : []
														}, e
													}();
												t.TechnologyChecker = a
											},
											5258: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TimeShiftHandler = void 0;
												var r = n(59534),
													i = n(59574),
													a = n(80815),
													o = n(43068),
													s = n(83024),
													u = n(59266),
													c = n(45110),
													l = n(76060),
													f = function() {
														function e(e, t, n, i) {
															var a = this;
															this.onSeek = function() {
																a.updateInitialTimeShiftContext(!0)
															}, this.onSeeked = function() {
																var e = a.context.renderer.getCurrentTime(!0),
																	t = e - a.getTimeShiftLiveEdge();
																a.updateTimeShiftStateAfterSeek(t, e)
															}, this.context = e, this.mediaPlayerController = t, this.bufferController = n, this.segmentControllers = Object.keys(i).map((function(e) {
																return i[e]
															})), this.manifestService = e.serviceManager.get(r.ServiceName.ManifestService, e.sourceContext.sourceIdentifier), this.logger = e.logger, this.eventHandler = e.eventHandler, this.timeShiftCounter = 0, this.sourceIdentifier = e.sourceContext.sourceIdentifier, this.setupEventHandlers()
														}
														return e.prototype.calculateLiveEdgeInVideoTime = function() {
															var e;
															if (this.initialTimeShiftContext && !this.initialTimeShiftContext.isOngoing) {
																var t = (0, a.toSeconds)(Date.now() - this.initialTimeShiftContext.timestamp);
																e = this.initialTimeShiftContext.liveEdge + t
															} else e = this.calculateMpdHandlerLiveEdge();
															return isFinite(e) || (e = (0, a.toSeconds)(Date.now() - this.manifestService.getAvailabilityStartTime())), e
														}, e.prototype.calculateMpdHandlerLiveEdge = function() {
															return this.segmentControllers.map((function(e) {
																return e.getLiveEdgeTime()
															})).reduce((function(e, t) {
																return t < e && t >= 0 ? t : e
															}), 1 / 0)
														}, e.prototype.updateSegmentControllers = function(e) {
															this.segmentControllers = Object.values(e)
														}, e.prototype.getMaxTimeShift = function() {
															if (this.manifestService.getManifest()) {
																var e = this.manifestService.getTimeShiftBufferDepthSeconds();
																return Math.min(e + this.manifestService.getDesiredDistanceToLiveEdge(), 0)
															}
															return 0
														}, e.prototype.getTimeShiftLiveEdge = function() {
															return this.calculateLiveEdgeInVideoTime() - this.manifestService.getDesiredDistanceToLiveEdge()
														}, e.prototype.getTimeShift = function() {
															var e = this.getActualTimeShift();
															if (this.lastTimeShiftStatus) {
																var t = (0, a.toSeconds)(Date.now() - this.lastTimeShiftStatus.completionDate) - (this.mediaPlayerController.getCurrentTime() - this.lastTimeShiftStatus.reachedTime);
																if (Math.abs(t) < this.context.settings.ACCEPTABLE_TIMESHIFT_INACCURACY) return this.lastTimeShiftStatus.offset
															}
															var n = this.getMaxTimeShift();
															return e < n && (e = n), e > 0 && (e = 0), e
														}, e.prototype.getActualTimeShift = function(e) {
															return void 0 === e && (e = !1), !this.initialTimeShiftContext || this.initialTimeShiftContext.isOngoing ? 0 : (e ? this.mediaPlayerController.getBufferRelevantTime() : this.mediaPlayerController.getCurrentTime()) - this.getTimeShiftLiveEdge()
														}, e.prototype.adjustTargetTime = function(e) {
															var t = this.manifestService.getPeriodIdForTime(e),
																n = !this.manifestService.isLastPeriod(t),
																r = this.manifestService.isTimeNearPeriodEnd(e, this.context.settings.END_OF_BUFFER_TOLERANCE);
															if (n && r) {
																var i = this.manifestService.getNextPeriod(t);
																this.logger.debug("Timeshift target too close to end of period ".concat(t, ", adjusting target from ").concat(e) + " to ".concat(i.start, ", i.e. next period's start.")), e = i.start
															}
															return e
														}, e.prototype.timeShift = function(e, t, n) {
															var r = this;
															void 0 === n && (n = !1), this.initialTimeShiftContext || this.adjustTargetBufferLevel(this.calculateAvailableBufferLength()), e = Math.max(this.getMaxTimeShift(), e);
															var i = this.mediaPlayerController.getCurrentTime(),
																a = this.calculatePlaybackTimeForTimeShiftOffset(e),
																o = this.manifestService.getPeriodIdForTime(a);
															this.timeShiftCounter++;
															var s = this.timeShiftCounter,
																u = n || this.bufferController.shouldBuffersBeCleared(a);
															return this.logger.debug("Performing timeShift to offset ".concat(e, ", time: ").concat(i, " -> ").concat(a, ", period: ").concat(o)), this.bufferController.setTimeshiftCancelState(!1), this.mediaPlayerController.updatePeriodForTimeshift(o, !this.initialTimeShiftContext), this.initialTimeShiftContext && this.maybeResetTransmuxerForPtsRollover(a), u && this.segmentControllers.forEach((function(e) {
																return e.seekTo(a)
															})), this.updateInitialTimeShiftContext(!0), this.bufferController.setCurrentTime(a, o, !0, n).then((function(n) {
																r.logger.debug("Successful timeShift to ".concat(n, ", hit target time with a diff of ").concat(n - a)), r.updateInitialTimeShiftContext(!1), r.lastTimeShiftStatus = {
																	offset: e,
																	completionDate: Date.now(),
																	reachedTime: n
																}, r.timeShiftCounter === s && t ? t() : t && r.context.logger.debug("Timeshift to ".concat(e, " has finished but a newer operation has been started"))
															})).catch((function(e) {
																r.logger.debug("Failed to set currentTime on timeShift", e)
															})).finally((function() {
																return r.bufferController.setTimeshiftCancelState(!1)
															}))
														}, e.prototype.maybeResetTransmuxerForPtsRollover = function(e) {
															var t;
															if (this.manifestService.isHlsManifest()) {
																var n = this.context.serviceManager.get(r.ServiceName.SourceStoreService, this.sourceIdentifier);
																(function(e, t) {
																	var n, r, i = null !== (r = null === (n = null == e ? void 0 : e.timestampRolloverPositions) || void 0 === n ? void 0 : n.next) && void 0 !== r ? r : -1;
																	return -1 !== i && (t >= i || t <= e.timestampRolloverPositions.previous)
																})(null === (t = o.ModuleManager.get(s.ModuleName.HLS)) || void 0 === t ? void 0 : t.selectors.getHlsState(null == n ? void 0 : n.getState()), e) && (this.context.logger.debug("Resetting transmuxer because target is beyond a timestamp rollover"), this.mediaPlayerController.resetTransmuxer())
															}
														}, e.prototype.cancel = function() {
															this.context.logger.debug("Cancelling ongoing time shift operation..."), this.bufferController.setTimeshiftCancelState(!0)
														}, e.prototype.calculatePlaybackTimeForTimeShiftOffset = function(e) {
															var t = this.manifestService.getDesiredDistanceToLiveEdge(),
																n = this.calculateLiveEdgeInVideoTime() + (e - t);
															return this.manifestService.hasMultiplePeriods() && (n = this.adjustTargetTime(n)), n
														}, e.prototype.onManifestUpdate = function() {
															if (this.manifestService.isLive()) {
																var e = this.getActualTimeShift(!0),
																	t = this.calculateAvailableBufferLength(),
																	n = this.getMaxTimeShift() - t.minSegmentDuration;
																this.adjustTargetBufferLevel(t), e < n && this.context.eventHandler.dispatchEvent(i.PlayerEvent.DVRWindowExceeded), this.removeDroppedOutFailedBufferRanges()
															}
														}, e.prototype.removeDroppedOutFailedBufferRanges = function() {
															var e = this;
															this.context.serviceManager.maybeCall(r.ServiceName.SourceStoreService, (function(t) {
																var n, r = e.manifestService.getTimeShiftBufferDepthSeconds(),
																	i = e.calculateLiveEdgeInVideoTime() + r,
																	a = null === (n = t.getState()) || void 0 === n ? void 0 : n.streamTimeline;
																void 0 !== a && Object.keys(a).forEach((function(e) {
																	t.dispatch((0, c.removeStreamTimeRange)(e, {
																		start: 0,
																		end: i
																	}, l.StreamTimeRangeType.Failed))
																}))
															}))
														}, e.prototype.isTimeInBufferedRange = function(e) {
															return this.bufferController.isTimeInBufferedRange(e)
														}, e.prototype.getMinSegmentDuration = function() {
															return this.segmentControllers.reduce((function(e, t) {
																return Math.min(e, t.getMPDHandler().getSegmentDuration())
															}), 1 / 0)
														}, e.prototype.calculateAvailableBufferLength = function() {
															var e = this,
																t = this.segmentControllers.map((function(e) {
																	return e.getMPDHandler()
																})),
																n = this.getMinSegmentDuration(),
																r = Math.max.apply(Math, t.map((function(t) {
																	return t instanceof u.SegmentListMPDHandler ? t.getSegmentDuration() * e.context.settings.LIVE_SEGMENT_LIST_START_INDEX_OFFSET : 0
																})));
															return {
																minSegmentDuration: n,
																bufferDepth: Math.min.apply(Math, t.map((function(e) {
																	return Math.abs(e.getActualTimeShiftBufferDepth())
																}))) - r
															}
														}, e.prototype.adjustTargetBufferLevel = function(e) {
															this.context.bufferSettings.setStreamBoundary({
																minimumBufferLength: e.minSegmentDuration,
																streamDuration: e.bufferDepth
															})
														}, e.prototype.updateTimeShiftStateAfterSeek = function(e, t) {
															this.lastTimeShiftStatus = {
																completionDate: Date.now(),
																reachedTime: t,
																offset: e
															}, this.updateInitialTimeShiftContext(!1)
														}, e.prototype.updateInitialTimeShiftContext = function(e) {
															(!this.initialTimeShiftContext || !e && this.initialTimeShiftContext.isOngoing) && (this.initialTimeShiftContext = {
																timestamp: Date.now(),
																liveEdge: this.calculateLiveEdgeInVideoTime(),
																isOngoing: e
															})
														}, e.prototype.setupEventHandlers = function() {
															this.eventHandler.on(i.PlayerEvent.Seek, this.onSeek, !0), this.eventHandler.on(i.PlayerEvent.Seeked, this.onSeeked, !0)
														}, e.prototype.removeEventHandlers = function() {
															this.eventHandler.off(i.PlayerEvent.Seek, this.onSeek), this.eventHandler.off(i.PlayerEvent.Seeked, this.onSeeked)
														}, e.prototype.dispose = function() {
															this.removeEventHandlers(), this.bufferController.setTimeshiftCancelState(!0)
														}, e
													}();
												t.TimeShiftHandler = f
											},
											8470: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.BufferBlock = t.EncryptionState = void 0;
												var r = n(50163),
													i = n(11629);
												! function(e) {
													e.Encrypted = "encrypted", e.Clear = "clear"
												}(t.EncryptionState || (t.EncryptionState = {}));
												var a = function() {
													function e(e) {
														this.id = e, this.cachedSegments = [], this.blockStateMap = new Map
													}
													return e.prototype.addSegment = function(e) {
														var t = e.getMimeType();
														e.isInit() && this.removeLastInitSegment(t), void 0 === this.periodId && (this.periodId = e.getPeriodId());
														var n = e.isInit() ? 0 : e.getDuration();
														this.cachedSegments.push({
															segment: e
														}), e.isInit() || (this.setMaxSegmentDuration(t, Math.max(n, this.getMaxSegmentDuration(t))), this.updatePlaybackTimeRange(e, t)), e.setBufferBlockId(this.id), this.updateMediaTypes(e)
													}, e.prototype.setSegregationCriteria = function(e, t) {
														this.blockStateMap.has(t) || this.initializeBlockStateMapForMimeType(t), this.getBlockState(t).segregationCriteria = e
													}, e.prototype.initializeBlockStateMapForMimeType = function(e) {
														var t = {};
														return this.blockStateMap.set(e, t), t
													}, e.prototype.updateMediaTypeForMimeType = function(e) {
														var t = this.getBlockState(e.mimeType) || this.initializeBlockStateMapForMimeType(e.mimeType);
														t.mediaType ? (o(e, "codec", (function(e) {
															t.mediaType.codec = e
														})), o(e, "timestampOffset", (function(e) {
															t.mediaType.timestampOffset = e
														})), o(e, "timescale", (function(e) {
															t.mediaType.timescale = e
														}))) : t.mediaType = e
													}, e.prototype.getSegregationCriteria = function(e) {
														var t;
														return null === (t = this.getBlockState(e)) || void 0 === t ? void 0 : t.segregationCriteria
													}, e.prototype.updateMediaTypes = function(e) {
														var t = e.getMimeType(),
															n = this.getMediaType(t);
														n ? (null === n.codec && (n.codec = e.getCodec()), null == n.timescale && (n.timescale = e.getTimescale())) : (this.blockStateMap.has(t) || this.blockStateMap.set(t, {}), this.getBlockState(t).mediaType = {
															mimeType: t,
															codec: e.getCodec(),
															timestampOffset: 0,
															timescale: e.getTimescale()
														})
													}, e.prototype.getMediaType = function(e) {
														var t, n;
														return null !== (n = null === (t = this.getBlockState(e)) || void 0 === t ? void 0 : t.mediaType) && void 0 !== n ? n : null
													}, e.prototype.addMediaType = function(e) {
														r.MimeTypeHelper.isAV(e.mimeType) && !this.getMediaType(e.mimeType) && (this.blockStateMap.has(e.mimeType) || this.initializeBlockStateMapForMimeType(e.mimeType), this.getBlockState(e.mimeType).mediaType = e)
													}, e.prototype.removeMediaType = function(e) {
														this.clearSegments(e), this.blockStateMap.delete(e)
													}, e.prototype.hasMediaType = function(e) {
														var t, n;
														return null !== (n = null === (t = this.blockStateMap) || void 0 === t ? void 0 : t.has(e)) && void 0 !== n && n
													}, e.prototype.getMediaTypes = function() {
														return (0, i.getValues)(this.blockStateMap).map((function(e) {
															return e.mediaType
														}))
													}, e.prototype.getMediaTypesWithoutSubs = function() {
														return this.getMediaTypes().filter((function(e) {
															return r.MimeTypeHelper.isAV(e.mimeType)
														}))
													}, e.prototype.removeSegment = function(e) {
														var t = this.cachedSegments.findIndex((function(t) {
															return t.segment === e
														}));
														t > -1 && this.cachedSegments.splice(t, 1)
													}, e.prototype.clearSegments = function(e) {
														this.cachedSegments = this.cachedSegments.filter((function(t) {
															return t.segment.getMimeType() !== e
														}))
													}, e.prototype.getPrecedingSegments = function(e, t) {
														var n = [];
														return this.cachedSegments.forEach((function(r) {
															var i = r.segment,
																a = i.isInit(),
																o = i.getMimeType() !== e;
															!a && !o && i.getPlaybackTime() + i.getDuration() < t && n.push(i)
														})), n
													}, e.prototype.updatePlaybackTimeRange = function(e, t) {
														var n = this.getPlaybackTimeRange(t),
															r = e.getPlaybackTime(),
															i = r + e.getDuration();
														n ? (r < n.start && (n.start = r), i > n.end && (n.end = i)) : this.getBlockState(t).playbackTimeRange = {
															start: r,
															end: i
														}
													}, e.prototype.getPlaybackTimeRange = function(e) {
														var t, n;
														return null !== (n = null === (t = this.getBlockState(e)) || void 0 === t ? void 0 : t.playbackTimeRange) && void 0 !== n ? n : null
													}, e.prototype.getId = function() {
														return this.id
													}, e.prototype.getPeriodId = function() {
														return this.periodId
													}, e.prototype.getMinCommonStartTime = function() {
														return (0, i.getValues)(this.blockStateMap).filter((function(e) {
															return e.playbackTimeRange
														})).map((function(e) {
															return e.playbackTimeRange
														})).reduce((function(e, t) {
															return Math.max(t.start, e)
														}), -1 / 0)
													}, e.prototype.getCommonPlaybackTimeRanges = function() {
														return (0, i.getValues)(this.blockStateMap).filter((function(e) {
															return e.playbackTimeRange
														})).map((function(e) {
															return e.playbackTimeRange
														})).reduce((function(e, t) {
															return {
																start: Math.max(t.start, e.start),
																end: Math.min(t.end, e.end)
															}
														}), {
															start: -1 / 0,
															end: 1 / 0
														})
													}, e.prototype.setMaxSegmentDuration = function(e, t) {
														this.blockStateMap.has(e) || this.initializeBlockStateMapForMimeType(e), this.getBlockState(e).maxSegmentDuration = t
													}, e.prototype.getMaxSegmentDuration = function(e) {
														var t;
														return (null === (t = this.getBlockState(e)) || void 0 === t ? void 0 : t.maxSegmentDuration) || 0
													}, e.prototype.hasMaxSegmentDuration = function(e) {
														var t;
														return null != (null === (t = this.getBlockState(e)) || void 0 === t ? void 0 : t.maxSegmentDuration)
													}, e.prototype.hasMaxSegmentDurations = function() {
														return Boolean((0, i.getValues)(this.blockStateMap).map((function(e) {
															return e.maxSegmentDuration
														})).find((function(e) {
															return e >= 0
														})))
													}, e.prototype.getMinMaxSegmentDuration = function() {
														var e = Number.MAX_VALUE;
														return (0, i.getValues)(this.blockStateMap).map((function(e) {
															return e.maxSegmentDuration
														})).forEach((function(t) {
															return e = t < e ? t : e
														})), e
													}, e.prototype.getAllSegmentsForMimeType = function(e) {
														return this.getAllSegments().filter((function(t) {
															return t.getMimeType() === e
														}))
													}, e.prototype.getAllSegments = function() {
														return this.cachedSegments.map((function(e) {
															return e.segment
														}))
													}, e.prototype.hasDataSegments = function(e) {
														return this.cachedSegments.some((function(t) {
															return !t.segment.isInit() && t.segment.getMimeType() === e
														}))
													}, e.prototype.hasSegments = function() {
														return this.getAllSegments().length > 0
													}, e.prototype.getNextSegment = function() {
														var e = this.cachedSegments.filter((function(e) {
															return !e.pendingRemoval
														}));
														if (0 === e.length) return null;
														var t = e.find((function(t) {
															return e.filter((function(e) {
																return t.segment.getMimeType() === e.segment.getMimeType()
															})).some((function(e) {
																return !e.segment.isInit()
															}))
														}));
														return t ? (t.pendingRemoval = !0, t.segment) : null
													}, e.prototype.removeLastInitSegment = function(e) {
														var t = this.getAllSegmentsForMimeType(e);
														if (t.length > 0) {
															var n = t[t.length - 1];
															n.isInit() && this.removeSegment(n)
														}
													}, e.prototype.getBlockState = function(e) {
														return this.blockStateMap.get(e)
													}, Object.defineProperty(e.prototype, "mediaTypes", {
														get: function() {
															var e = {};
															return this.blockStateMap.forEach((function(t, n) {
																e[n] = t.mediaType
															})), e
														},
														enumerable: !1,
														configurable: !0
													}), e
												}();

												function o(e, t, n) {
													e.hasOwnProperty(t) && n(e[t])
												}
												t.BufferBlock = a
											},
											76812: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.areBufferBlocksEqual = void 0, t.areBufferBlocksEqual = function(e, t) {
													return !(!e || !t) && e === t
												}
											},
											58400: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.BufferController = void 0;
												var i = n(45659),
													a = n(36166),
													o = n(85739),
													s = n(59534),
													u = n(4529),
													c = n(59574),
													l = n(8833),
													f = n(73882),
													d = n(22221),
													h = n(45366),
													p = n(11917),
													_ = n(59536),
													m = n(1520),
													b = n(86705),
													g = n(99999),
													v = n(28803),
													y = n(38827),
													A = n(81028),
													S = n(50163),
													w = n(80815),
													E = n(89199),
													T = n(89543),
													C = n(43068),
													$ = n(83024),
													k = n(76469),
													O = n(96400),
													x = n(52038),
													P = n(53088),
													M = n(94800),
													I = n(4157),
													L = n(45110),
													D = n(81040),
													B = n(76060),
													N = n(99538),
													R = n(55579),
													F = n(8470),
													U = n(11199),
													j = n(96733),
													H = n(6862),
													Y = n(39972),
													V = n(56727),
													z = function() {
														function e(e, t, n, r) {
															var i = this;
															this.currentRendererMediaTypes = [], this.currentBufferBlockSwitchPromise = null, this.startupPlaybackTime = null, this.isAlreadyStarted = !1, this.isStartup = !0, this.isClearingBuffers = !1, this.finishPlayback = !1, this.hasStreamEndedInternal = !1, this.activeInitSegments = {}, this.bufferMaxSizeChangedSubscriptionMap = {}, this.isTimeshiftCancelled = !1, this.updateTotalDuration = function() {
																i.totalDuration = i.manifestService.getTotalDuration(), i.totalDuration > (i.renderer.getDuration() || 0) && i.setDurationOnRenderer()
															}, this.setDurationOnRenderer = function() {
																i.finishPlayback || i.renderer.setDuration(i.totalDuration)
															}, this.onRendererSetupFailed = function(e) {
																i.context.logger.debug("Renderer setup failed with", e)
															}, this.onBufferChanged = function(e) {
																var t = i.getRendererRangesFromStore(e)[0];
																t && i.bufferStartTimes.set(e, t.start)
															}, this.onVideoElementTimeUpdate = function() {
																var e, t = i.context.serviceManager.get(s.ServiceName.PlayerStateService),
																	n = Date.now() - i.lastBufferClearingTimestamp > i.minimalBackwardBufferClearingInterval,
																	r = null !== (e = null == t ? void 0 : t.seekingOrTimeshifting) && void 0 !== e && e;
																!(n && !r) && t.isPlaying() || i.checkBackwardBufferLevel(), i.checkIfEndOfBufferReached(i.settings.END_OF_BUFFER_TOLERANCE)
															}, this.onTimeNotAdvancing = function() {
																var e = i.settings.END_OF_BUFFER_RECOVERY_TOLERANCE,
																	t = i.segmentStore.getBufferBlock(i.currentPlayingBufferBlockId);
																i.isAtEndOfBufferBlock() && t && (e = i.segmentStore.getSmallestMaxSegmentDuration(t)), i.checkIfEndOfBufferReached(e)
															}, this.onVideoElementEnded = function() {
																var e;
																if (!i.isSwitchingBufferBlock) {
																	var t = null === (e = i.segmentStore) || void 0 === e ? void 0 : e.getNextBufferBlock(i.currentPlayingBufferBlockId);
																	if (t) {
																		var n = i.renderer.getCurrentTime(!0);
																		i.tryToSwitchBufferBlock(n, t)
																	}
																}
															}, this.onVideoElementStalled = function() {
																i.checkIfEndOfBufferReached(i.settings.END_OF_BUFFER_RECOVERY_TOLERANCE)
															}, this.context = e, this.logger = e.logger, this.settings = e.settings, this.bufferSettings = e.bufferSettings, this.eventHandler = e.eventHandler, this.renderer = e.renderer, this.manifestService = e.serviceManager.get(s.ServiceName.ManifestService, e.sourceContext.sourceIdentifier), this.segmentStore = new Y.SegmentStore(this.settings), this.endStallAtGapCallback = t, this.bufferStallingService = new j.BufferStallingService(this.getPlayerStateService(), this.logger, this.context.renderer), this.currentPlayingPeriodId = r, this.lastPlayingPeriodId = null, this.totalDuration = n, this.seekTarget = null, this.delayedBufferBlockSwitchContext = null, this.currentPlayingBufferBlockId = Y.INITIAL_BUFFER_BLOCK_ID, this.isSwitchingBufferBlock = !1, this.bufferStartTimes = new Map, this.dataSegmentsPushedMap = new Map, this.isEndOfStreamReached = !1, this.lastBufferClearingTimestamp = 0, this.minimalBackwardBufferClearingInterval = (0, w.toMilliSeconds)(this.context.settings.MINIMAL_BACKWARD_BUFFER_CLEARING_INTERVAL), this.discontinuitySequenceNumbers = new Map, this.currentBufferBlockDeferredReject = new H.DeferredReject, this.drmConfigValidPromise = Promise.resolve(null), this.bufferRangesCache = new U.BufferRangesCache(this.context, this.segmentStore), this.susbscribeToPlaybackStoppedStateChange(), this.renderer.ready().then((function() {
																i.setDurationOnRenderer(), i.shouldSendLicenseRequestsImmediately() && i.setupDRM()
															})).catch(this.onRendererSetupFailed)
														}
														return e.prototype.susbscribeToPlaybackStoppedStateChange = function() {
															var e = this,
																t = this.context.store;
															void 0 !== t && (this.unsubscribeFromStoreStoppedListener = (0, v.subscribe)(t)((function(e) {
																return e && (0, _.getIsStopped)((0, _.getPlayerState)(e))
															}), (function() {
																return e.hasStreamEndedInternal = !0
															}), (function(e) {
																return !0 === e
															})))
														}, Object.defineProperty(e.prototype, "isCurrentlyStalled", {
															get: function() {
																return this.bufferStallingService.isRendererStalling()
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.shouldSendLicenseRequestsImmediately = function() {
															var e, t;
															return Boolean(null === (t = (0, I.getDrmState)(null === (e = this.getSourceStore()) || void 0 === e ? void 0 : e.getState())) || void 0 === t ? void 0 : t.immediateLicenseRequest)
														}, e.prototype.createSourceBuffers = function(e) {
															var t = this,
																n = Promise.resolve();
															return this.bufferCreationDeferred = new A.Deferred, this.isStartup || (n = this.renderer.shutdown(!0)), this.activeInitSegments = {}, this.bufferCreationDeferred.resolve(n.then((function() {
																return t.renderer.ready()
															})).then((function() {
																return t.setDurationOnRenderer(), t.clearBufferMaxSizeChangedSubscription(), e.forEach((function(e) {
																	var n = e.mimeType;
																	t.addMimeTypeAndCodec(n, e.codec) || (t.logger.debug("Could not create source buffer for ".concat(n)), t.context.store.dispatch((0, d.removeMetricsForMimeType)(n))), t.subscribeToBufferMaxSizeChanged(n)
																})), t.currentRendererMediaTypes = e.filter((function(e) {
																	return S.MimeTypeHelper.isAV(e.mimeType)
																})), t.setupDRM(), Promise.resolve(t.currentRendererMediaTypes.length)
															}))), this.bufferCreationDeferred.promise.catch((function(e) {
																return t.logger.warn(e)
															})).then((function() {
																t.bufferCreationDeferred = null
															})), this.bufferCreationDeferred.promise
														}, e.prototype.subscribeToBufferMaxSizeChanged = function(e) {
															var t = this,
																n = this.getSourceStore();
															n && (this.bufferMaxSizeChangedSubscriptionMap[e] = n.subscribe((function() {
																return t.adjustMaxBufferLevels(e)
															}), (0, b.hasBufferMaxSizeChanged)(e)))
														}, e.prototype.unsubscribeFromBufferMaxSizeChanged = function(e) {
															var t = this.bufferMaxSizeChangedSubscriptionMap[e];
															t && (t(), delete this.bufferMaxSizeChangedSubscriptionMap[e])
														}, e.prototype.setupDRM = function() {
															var e, t = this,
																n = (0, I.getDrmState)(null === (e = this.getSourceStore()) || void 0 === e ? void 0 : e.getState());
															if (void 0 !== n && Object.keys(n).length > 0) {
																var i = r(r({}, this.context.sourceContext.source), {
																		drm: n
																	}),
																	a = this.manifestService.getDRMCapabilitiesForPeriod(this.currentPlayingPeriodId);
																Object.keys(f.KeySystemMap).some((function(e) {
																	return i.drm.hasOwnProperty(e)
																})) && (this.drmConfigValidPromise = this.renderer.setDrmConfig(n, a), this.drmConfigValidPromise.catch((function() {
																	t.logger.warn("Could not initialize renderer with given DRM config")
																})))
															}
														}, e.prototype.getSourceStore = function() {
															var e;
															return null === (e = this.context.serviceManager) || void 0 === e ? void 0 : e.get(s.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.tryToSwitchBufferBlockAfterBufferClear = function() {
															var e = this;
															return this.timeshiftBufferClearingPromise ? this.timeshiftBufferClearingPromise.catch((function() {
																return e.timeshiftBufferClearingPromise = void 0, e.isTimeshiftCancelled = !0, Promise.reject("Failed to clear buffer on timeshift, stopping segment cache processing")
															})).then((function(t) {
																if (e.timeshiftBufferClearingPromise = void 0, e.isTimeshiftCancelled) return e.isTimeshiftCancelled = !1, Promise.reject("Timeshift cancelled, stopping segment cache processing");
																var n = e.findBufferBlockForTime(t);
																return e.tryToSwitchBufferBlock(t, n)
															})) : Promise.resolve()
														}, e.prototype.addSegment = function(e) {
															var t = this;
															if (!this.segmentStore) return Promise.reject("Skipping segment processing, segment store is already disposed");
															this.logger.insane("adding segment to cache for period ".concat(e.getPeriodId(), " with playback time ").concat(e.getPlaybackTime(), "\n      and mime type ").concat(e.getMimeType())), this.segmentStore.addSegment(e), this.subscribeToManifestChange();
															var n = (0, B.getTrackIdentifier)(e.getSegmentInfo()),
																r = this.getSourceStore(),
																i = e.getPlaybackTimeRange();
															i && (null == r || r.dispatch((0, L.removeStreamTimeRange)(n, i, B.StreamTimeRangeType.Loading))), null == r || r.dispatch((0, m.addLoadedRange)(n, (0, M.segmentToBufferBlockTimeRange)(e)));
															var a = this.segmentStore.getBufferBlockForSegment(e);
															if (this.areBufferBlockMediaTypesFinal(e.getPeriodId())) {
																if (this.delayedBufferBlockSwitchContext && !this.segmentStore.canSwitchToBufferBlock(this.delayedBufferBlockSwitchContext.time, a)) return Promise.resolve();
																var o = Promise.resolve();
																if (this.timeshiftBufferClearingPromise) o = this.tryToSwitchBufferBlockAfterBufferClear();
																else if (this.delayedBufferBlockSwitchContext) o = this.tryToSwitchBufferBlock(this.delayedBufferBlockSwitchContext.time, a);
																else if (this.isSwitchingBufferBlock || this.isBufferAvailable() || this.bufferCreationDeferred) this.bufferCreationDeferred && (o = this.bufferCreationDeferred.promise);
																else {
																	var s = a.getMediaTypes();
																	o = this.createSourceBuffers(s)
																}
																return o.then((function() {
																	return t.renderer ? t.renderer.ready() : Promise.reject("Stopping queue processing, renderer is not available")
																})).then((function() {
																	return t.processSegmentCache()
																}))
															}
															return Promise.resolve()
														}, e.prototype.removePrecedingSegmentsFromStore = function(e, t) {
															var n = this;
															this.segmentStore && this.segmentStore.getPrecedingSegments(e, t).forEach((function(e) {
																var t;
																n.segmentStore.removeSegment(e), null === (t = n.getSourceStore()) || void 0 === t || t.dispatch((0, m.removeLoadedRange)(e.getMimeType(), (0, M.segmentToBufferBlockTimeRange)(e)))
															}))
														}, e.prototype.clearBackwardBuffer = function(e, t) {
															var n = this,
																r = S.MimeTypeHelper.isAudio(e) ? l.MediaType.Audio : l.MediaType.Video,
																i = this.bufferSettings.getBackwardTargetLevel(r),
																a = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId);
															if (this.removePrecedingSegmentsFromStore(e, t - i), !a || !a.hasMaxSegmentDuration(e)) return Promise.resolve();
															var o = a.getMaxSegmentDuration(e) + 1,
																s = t - Math.max(o, i);
															return s < this.bufferStartTimes.get(e) ? Promise.resolve() : (this.lastBufferClearingTimestamp = Date.now(), this.renderer.removeData(e, 0, s).catch((function(t) {
																return n.logger.debug("Error clearing ".concat(e, " backward buffer:"), t)
															})))
														}, e.prototype.getRendererRangesFromStore = function(e) {
															var t, n = (0, b.getBufferState)(null === (t = this.getSourceStore()) || void 0 === t ? void 0 : t.getState());
															return void 0 === n ? [] : (0, b.getRendererBufferedRanges)(n, e)
														}, e.prototype.checkBackwardBufferLevel = function() {
															var e = this;
															if (!this.isEndOfStreamReached && !this.isSwitchingBufferBlock) {
																var t = this.renderer.getCurrentTime(),
																	n = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId),
																	r = this.segmentStore.getSmallestMaxSegmentDuration(n);
																r > 0 && (this.minimalBackwardBufferClearingInterval = (0, w.toMilliSeconds)(r / 2)), this.bufferStartTimes.forEach((function(n, r) {
																	var i = S.MimeTypeHelper.isAudio(r) ? l.MediaType.Audio : l.MediaType.Video,
																		a = e.bufferSettings.getBackwardTargetLevel(i);
																	t - a > n && e.clearBackwardBuffer(r, t).catch((function(t) {
																		e.context.logger.debug("Could not clear backward buffer", t)
																	}))
																}))
															}
														}, e.prototype.setEndOfStream = function(e) {
															return e && this.suspendEosSignalling || !this.renderer ? (this.logger.debug("Skipping setting EOS"), Promise.resolve()) : (this.isEndOfStreamReached = e, this.renderer.setEndOfStream(e))
														}, e.prototype.adjustMaxBufferLevels = function(e) {
															var t, n = (0, b.getBufferState)(null === (t = this.getSourceStore()) || void 0 === t ? void 0 : t.getState()),
																r = void 0 !== n ? (0, b.getBufferMaxSize)(n, e) : b.DefaultBufferMaxSize;
															if (this.logger.debug("Exceeded quota for ".concat(e, " with ").concat(r, " seconds of data in the buffers")), !this.context.settings.NO_QUOTA_EXCEEDED_ADJUSTMENT) {
																var i = this.renderer.getCurrentTime(),
																	a = this.segmentStore.getSmallestSafeBufferSize(i, e);
																this.bufferSettings.adjustMaxBufferLevels(a, e, r)
															}
														}, e.prototype.getLowestPlaybackTimeForAllSegments = function(e) {
															return e.filter((function(e) {
																return !e.isInit()
															})).map((function(e) {
																return e.getPlaybackTime()
															})).reduce((function(e, t) {
																return Math.min(t, e)
															}), 0)
														}, e.prototype.updateTimestampOffsetForNegativePlaybackTime = function() {
															var e = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId),
																t = this.segmentStore.getAllSegmentsFromBufferBlock(e).toArray(),
																n = this.getLowestPlaybackTimeForAllSegments(t);
															n < 0 && (this.eventHandler.dispatchEvent(c.PlayerEvent.Warning, new N.PlayerWarning(R.WarningCode.PLAYBACK_NEGATIVE_DECODING_TIMESTAMP_ENCOUNTERED)), this.logger.debug("Encountered negative DTS ".concat(n, ", attempting to correct PTO...")), this.currentRendererMediaTypes.forEach((function(e) {
																null != e.timestampOffset && (e.timestampOffset += n, t.filter((function(t) {
																	return t.getMimeType() === e.mimeType
																})).forEach((function(t) {
																	return t.setPresentationTimeOffset(e.timestampOffset)
																})))
															})))
														}, e.prototype.processSegmentCache = function() {
															var e = this;
															return this.isStartup ? this.isStartupThresholdReached() ? (this.updateTimestampOffsetForNegativePlaybackTime(), this.updateTimestampOffsets(), this.pushSegmentsToRenderer(1 / 0).then((function() {
																return e.endStartupPhase()
															}))) : Promise.resolve() : this.pushSegmentsToRenderer(1 / 0)
														}, e.prototype.getBufferedRangesMap = function(e, t) {
															var n;
															void 0 === e && (e = this.currentPlayingPeriodId), void 0 === t && (t = !0);
															var r = (0, b.getBufferState)(null === (n = this.getSourceStore()) || void 0 === n ? void 0 : n.getState());
															return e && void 0 !== r ? t ? this.bufferRangesCache.getRanges(r) : (0, b.getRendererBufferRangesMap)(this.segmentStore, r)(e, this.currentPlayingBufferBlockId) : {}
														}, e.prototype.addSegmentsFromCacheToRenderer = function(e, t) {
															var n = this;
															if (!this.segmentStore) return Promise.resolve();
															var r = this.segmentStore.getAllSegmentsFromBufferBlock(e),
																a = r.hasNext() && r.next();
															return a ? (this.segmentStore.removeSegment(a), a.getPeriodId() !== this.currentPlayingPeriodId && (this.context.store.dispatch((0, x.periodSwitchStarted)(a.getPeriodId())), this.eventHandler.dispatchEvent(c.PlayerEvent.PeriodSwitch, {
																sourcePeriod: {
																	periodId: this.currentPlayingPeriodId
																},
																targetPeriod: {
																	periodId: a.getPeriodId()
																}
															})), this.addDataSegmentToRenderer(a).catch((function(e) {
																n.logger.warn("Could not add segment to renderer mimeType: ".concat(a.getMimeType(), ",\n        playbackTime: ").concat(a.getPlaybackTime()), e)
															})).then((function() {
																var r;
																a.isInit() || null === (r = n.getSourceStore()) || void 0 === r || r.dispatch((0, m.removeLoadedRange)(a.getMimeType(), (0, M.segmentToBufferBlockTimeRange)(a))), n.dataSegmentsPushedMap.set(a.getMimeType(), !a.isInit());
																var o = i.BufferRangeHelper.getTotalCommonBufferLength(n.getBufferedRangesMap(n.currentPlayingPeriodId));
																return n.currentPlayingPeriodId = a.getPeriodId(), !n.isSwitchingBufferBlock || o < t ? n.addSegmentsFromCacheToRenderer(e, t) : Promise.resolve()
															}))) : Promise.resolve()
														}, e.prototype.dispatchFinishPeriodSwitch = function() {
															var e;
															this.currentPlayingPeriodId !== this.lastPlayingPeriodId && (this.lastPlayingPeriodId && (null === (e = this.context.store) || void 0 === e || e.dispatch((0, x.periodSwitchFinished)(this.currentPlayingPeriodId))), this.lastPlayingPeriodId = this.currentPlayingPeriodId)
														}, e.prototype.hasFinishedLoadingPeriod = function(e) {
															var t, n, r = this.hasStopped(),
																i = null === (t = this.segmentStore) || void 0 === t ? void 0 : t.isLoadingNextBufferBlock(this.currentPlayingBufferBlockId),
																a = null === (n = this.segmentStore) || void 0 === n ? void 0 : n.hasSegmentsForBufferBlock(e);
															return (i || r) && !a
														}, e.prototype.pushSegmentsToRenderer = function(e) {
															var t = this,
																n = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId);
															return this.suspendEosSignalling = !0, this.addSegmentsFromCacheToRenderer(n, e).then((function() {
																t.suspendEosSignalling = !1, t.isRestartThresholdReached() && !t.isClearingBuffers && t.endStalling(), t.hasFinishedLoadingPeriod(n) ? (t.logger.debug("Finished loading Period: ".concat(t.currentPlayingPeriodId, ", signaling EOS")), t.hasTemporarilyReopenedMsePriorToBufferBlockSwitch ? t.logger.debug("Skipped EOS signaling as a BufferBlock switch is just being executed") : t.currentBufferBlockSwitchPromise && t.isSwitchingBufferBlock ? (t.logger.debug("delaying EOS signal until ongoing period switch is completed"), t.currentBufferBlockSwitchPromise.then((function() {
																	t.setEndOfStream(!0).then((function() {
																		return t.dispatchFinishPeriodSwitch()
																	}))
																}))) : t.setEndOfStream(!0).then((function() {
																	return t.dispatchFinishPeriodSwitch()
																}))) : t.dispatchFinishPeriodSwitch()
															}))
														}, e.prototype.updateTimestampOffsets = function() {
															var e = this;
															this.currentRendererMediaTypes.forEach((function(t) {
																e.renderer.setTimestampOffset(t.mimeType, -t.timestampOffset)
															}))
														}, e.prototype.checkIfEndOfBufferReached = function(e) {
															var t = this.renderer.getEndOfBufferTime();
															if (void 0 === t) this.renderer.isPaused() || this.startStalling();
															else {
																var n = t - e,
																	r = this.renderer.getCurrentTime(!0);
																this.shouldHandleEndOfBuffer(r, n) && this.handleEndOfBuffer(r)
															}
														}, e.prototype.shouldHandleEndOfBuffer = function(e, t) {
															return !this.isSwitchingBufferBlock && (t <= e || this.manifestService.isLive() && 0 === e)
														}, e.prototype.resetCurrentTimeOnSegment = function() {
															var e, t = !0;
															this.dataSegmentsPushedMap.forEach((function(n, r) {
																S.MimeTypeHelper.isVideo(r) && (t = n, e = r)
															})), t || (this.context.videoElement.currentTime = this.context.videoElement.currentTime, this.dataSegmentsPushedMap.set(e, !0))
														}, e.prototype.handleEndOfBuffer = function(e) {
															var t = this.isAtEndOfBufferBlock(),
																n = this.segmentStore.getNextBufferBlock(this.currentPlayingBufferBlockId),
																r = Boolean(n);
															if (t && r && this.areBufferBlockMediaTypesFinal(n.getPeriodId())) {
																var i = n.getMinCommonStartTime(),
																	a = isFinite(i) && i >= e ? i : e;
																this.tryToSwitchBufferBlock(a, n)
															} else this.getRemainingTime() > 0 && !this.finishPlayback && (this.startStalling(), this.resetCurrentTimeOnSegment())
														}, e.prototype.isBufferBlockSwitchOngoing = function() {
															return this.isSwitchingBufferBlock
														}, e.prototype.isAtEndOfBufferBlock = function() {
															var e = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId);
															return !e.getNextSegment() || !!this.segmentStore && this.segmentStore.isLoadingNextBufferBlock(e.getId())
														}, e.prototype.readyToSeek = function() {
															return this.currentBufferBlockSwitchPromise ? (this.logger.debug("Awaiting ongoing buffer block switch before seek"), this.currentBufferBlockSwitchPromise.then((function() {})).catch((function() {}))) : Promise.resolve()
														}, e.prototype.shouldBuffersBeCleared = function(e) {
															var t = this.renderer.getCurrentTime();
															return !this.isTimeInBufferedRange(e) || e < t
														}, e.prototype.isTimeInBufferedRange = function(e) {
															var t, n = null === (t = this.getSourceStore()) || void 0 === t ? void 0 : t.getState();
															if (!n) return !1;
															var r = this.getBufferedRangesMap((0, P.getPlayingPeriodId)(n), !0);
															return i.BufferRangeHelper.isInBufferedRange(r, e)
														}, e.prototype.maybeClearBuffers = function(e, t) {
															return void 0 === t && (t = !1), t || this.shouldBuffersBeCleared(e) ? this.clearBuffersOnTimeshift() : Promise.resolve()
														}, e.prototype.setTimeshiftCancelState = function(e) {
															this.isTimeshiftCancelled = e
														}, e.prototype.clearBuffersOnTimeshift = function() {
															var e = this;
															return this.context.logger.debug("Clearing buffer on timeshift"), this.setEndOfStream(!1).then((function() {
																return e.clearBuffers()
															})).then((function() {
																return e.isTimeshiftCancelled ? (e.isTimeshiftCancelled = !1, Promise.reject("cancelled timeshift")) : Promise.resolve()
															}))
														}, e.prototype.setCurrentTime = function(e, t, n, r) {
															var i = this;
															void 0 === n && (n = !1), void 0 === r && (r = !1);
															var a = t || this.manifestService.getPeriodIdForTime(e),
																o = this.segmentStore.getBufferBlockForPlaybackTime(e),
																s = this.segmentStore.getBufferBlock(this.currentPlayingBufferBlockId),
																u = Boolean(!o || o.getId() !== s.getId());
															if (this.isStartup && (this.currentPlayingPeriodId = a), this.seekTarget = e, this.isStartup || this.isInBufferedRange(e, a) || this.startStalling(), n && this.isBufferAvailable()) {
																var c = this.timeshiftBufferClearingPromise || Promise.resolve();
																this.timeshiftBufferClearingPromise = c.then((function() {
																	return i.maybeClearBuffers(e, r)
																})).then((function() {
																	return e
																}))
															}
															return u ? o ? this.tryToSwitchBufferBlock(e, o) : this.delayBufferBlockSwitch(e) : (this.delayedBufferBlockSwitchContext = null, this.renderer.setCurrentTime(e).then((function(e) {
																return i.endStallingAfterSeek(e)
															})))
														}, e.prototype.endStallingAfterSeek = function(e) {
															return this.seekTarget = null, this.isRestartThresholdReached() ? (this.logger.debug("End stalling after seek to ".concat(e)), this.endStalling()) : this.logger.debug("Delay ending stall as the restart threshold is not yet reached"), Promise.resolve(e)
														}, e.prototype.bufferBlockSwitchErrorHandler = function(e, t) {
															var n, r, i, a, o = null !== (r = null === (n = this.delayedBufferBlockSwitchContext) || void 0 === n ? void 0 : n.time) && void 0 !== r ? r : t,
																s = (0, E.isNumber)(null === (i = this.delayedBufferBlockSwitchContext) || void 0 === i ? void 0 : i.time) && (null === (a = this.segmentStore) || void 0 === a ? void 0 : a.canSwitchToBufferBlockForTime(o));
															if (this.logger.debug("Buffer block switch failed", e), this.currentBufferBlockDeferredReject = new H.DeferredReject, s) {
																this.logger.debug("Trying to continue delayed BufferBlock switch to ".concat(o, "..."));
																var u = this.findBufferBlockForTime(o);
																return this.tryToSwitchBufferBlock(o, u)
															}
															return this.isSwitchingBufferBlock = !1, Promise.resolve(t)
														}, e.prototype.findBufferBlockForTime = function(e) {
															var t, n = this.manifestService.getPeriodIdForTime(e);
															return null === (t = this.segmentStore) || void 0 === t ? void 0 : t.getTargetBufferBlock(e, n)
														}, e.prototype.tryToSwitchBufferBlock = function(e, t) {
															var n, r = this,
																i = function() {};
															if (this.currentBufferBlockDeferredReject && this.currentBufferBlockDeferredReject.reject("BufferBlock switch interrupted by newest one"), this.currentBufferBlockDeferredReject = new H.DeferredReject, this.isSwitchingBufferBlock = !0, null !== this.delayedBufferBlockSwitchContext && (i = this.delayedBufferBlockSwitchContext.deferred.resolve), !(null === (n = this.segmentStore) || void 0 === n ? void 0 : n.canSwitchToBufferBlock(e, t))) return this.delayBufferBlockSwitch(e);
															this.hasTemporarilyReopenedMsePriorToBufferBlockSwitch = !0;
															var a = this.timeshiftBufferClearingPromise || Promise.resolve();
															return this.currentBufferBlockSwitchPromise = a.then((function() {
																return r.setEndOfStream(!1)
															})).then((function() {
																return r.delayedBufferBlockSwitchContext = null
															})).then((function() {
																return r.currentBufferBlockDeferredReject.next((function() {
																	return r.clearRendererBuffers()
																}))
															})).then((function() {
																return r.currentBufferBlockDeferredReject.next((function() {
																	return r.switchOrRestoreBufferBlock(t, e)
																}))
															})).then((function(e) {
																return r.hasTemporarilyReopenedMsePriorToBufferBlockSwitch = !1, r.currentBufferBlockDeferredReject = new H.DeferredReject, i(e), e
															})).catch((function(t) {
																return r.bufferBlockSwitchErrorHandler(t, e)
															})).finally((function() {
																return r.currentBufferBlockSwitchPromise = null
															}))
														}, e.prototype.switchOrRestoreBufferBlock = function(e, t) {
															var n;
															return (0, y.isTizen2017)() || (null === (n = this.segmentStore) || void 0 === n ? void 0 : n.shouldSwitchBufferBlock(e, this.currentPlayingBufferBlockId)) ? this.switchBufferBlock(t, e) : this.restorePlayback(t, e)
														}, e.prototype.delayBufferBlockSwitch = function(e) {
															this.isSwitchingBufferBlock && this.currentBufferBlockDeferredReject && this.currentBufferBlockDeferredReject.reject("BufferBlock switch interrupted by newest one");
															var t = this.segmentStore.getAvailablePositionForTime(e, this.renderer.getCurrentTime());
															return this.delayedBufferBlockSwitchContext && this.delayedBufferBlockSwitchContext.time === e || (this.delayedBufferBlockSwitchContext && this.delayedBufferBlockSwitchContext.time !== e && this.delayedBufferBlockSwitchContext.deferred.reject(), this.delayedBufferBlockSwitchContext = {
																time: t,
																deferred: new A.Deferred
															}), this.delayedBufferBlockSwitchContext.deferred.promise
														}, e.prototype.restorePlayback = function(e, t) {
															var n = this;
															return this.updateTimestampOffsets(), this.isEndOfStreamReached = !1, this.currentPlayingBufferBlockId = t.getId(), this.segmentStore.deleteOldBufferBlocks(t.getId()), this.hasTemporarilyReopenedMsePriorToBufferBlockSwitch = !1, this.segmentStore.getBufferBlock(t.getId()) ? this.currentBufferBlockDeferredReject.next((function() {
																return n.pushSegmentsToRenderer(1 / 0)
															})).then((function() {
																return n.currentBufferBlockDeferredReject.next((function() {
																	return n.setCurrentTimeOnRenderer(e)
																}))
															})).then((function(e) {
																return n.isSwitchingBufferBlock = !1, n.resumePlaybackIfNotStalledOrPaused(), n.endStallingAfterSeek(e)
															})) : (this.logger.debug("Target BufferBlock is no longer available, cancelling BufferBlock switch..."), Promise.reject("The targeted buffer BufferBlock is no longer available"))
														}, e.prototype.resumePlaybackIfNotStalledOrPaused = function() {
															var e = this,
																t = this.getPlayerStateService().isPaused();
															this.isCurrentlyStalled || t || this.renderer.play().catch((function(t) {
																e.logger.debug("play call failed with reason: ".concat(t))
															}))
														}, e.prototype.shouldRecreateSourceBuffers = function(e, t) {
															var n, r = null === (n = this.segmentStore) || void 0 === n ? void 0 : n.getBufferBlock(this.currentPlayingBufferBlockId);
															if (!r) return !0;
															var i = r.getPeriodId() === e.getPeriodId(),
																a = this.currentRendererMediaTypes.length === t.length,
																o = !(i || a) || !(0, V.canReuseSourceBuffer)(r, e, t);
															return this.allowUserToOverwriteBufferRecreationDecision(o, r, e)
														}, e.prototype.allowUserToOverwriteBufferRecreationDecision = function(e, t, n) {
															var r, i, a = null === (r = this.context) || void 0 === r ? void 0 : r.sourceContext.source,
																o = null === (i = null == a ? void 0 : a.options) || void 0 === i ? void 0 : i.shouldRecreateSourceBuffersOnPeriodSwitch;
															if (!o) return e;
															var s = Q(t),
																u = Q(n),
																c = o(s, u, e);
															return "boolean" == typeof c ? (this.logger.debug("User overwrote default SourceBuffer recreation strategy from ".concat(e, " to ").concat(c) + " for the switch from ".concat(s.periodId, " to ").concat(u.periodId, ".")), c) : e
														}, e.prototype.switchBufferBlock = function(e, t) {
															var n = this;
															this.logger.debug("Switching buffer block for time ".concat(e));
															var r = t.getMediaTypesWithoutSubs(),
																i = this.maybeRecreateSourceBuffers(t, r);
															return this.currentRendererMediaTypes = r, this.currentBufferBlockDeferredReject.next((function() {
																return i
															})).then((function() {
																return n.currentBufferBlockDeferredReject.next((function() {
																	return n.restorePlayback(e, t)
																}))
															})).then((function(e) {
																return n.currentBufferBlockDeferredReject.next((function() {
																	return n.pushSegmentsToRenderer(1 / 0).catch((function() {
																		return n.context.logger.debug("Could not push segment into renderer")
																	}))
																})).then((function() {
																	return e
																}))
															}))
														}, e.prototype.maybeRecreateSourceBuffers = function(e, t) {
															return this.shouldRecreateSourceBuffers(e, t) ? (this.logger.debug("recreating the buffers with types", t), this.createSourceBuffers(t)) : Promise.resolve(0)
														}, e.prototype.setCurrentTimeOnRenderer = function(e) {
															var t = this,
																n = this.delayedBufferBlockSwitchContext;
															return this.delayedBufferBlockSwitchContext = null, this.currentBufferBlockDeferredReject.next((function() {
																return t.renderer.setCurrentTime(e)
															})).then((function(e) {
																return n && n.deferred && n.deferred.resolve(e), e
															}))
														}, e.prototype.addMimeTypeAndCodec = function(e, t, n) {
															if (void 0 === n && (n = !1), !S.MimeTypeHelper.isAV(e)) return !0;
															var r = this.renderer.addBuffer(e, t);
															if (r) {
																var i = (0, h.getMetricsState)(this.context.store.getState());
																this.subscribeToBufferChanges(), i[e] || this.context.store.dispatch((0, d.initializeMetricsForMimeType)(e, this.context.settings)), n || this.context.store.dispatch((0, d.addMetricsValue)(e, p.MetricType.StalledSeconds, 0))
															}
															return r
														}, e.prototype.setInitialPeriod = function(e) {
															this.currentPlayingPeriodId = e
														}, e.prototype.getLowestBufferLevel = function(e, t) {
															var n = this;
															if (!this.isBufferAvailable()) return 0;
															var r = this.currentRendererMediaTypes.map((function(e) {
																return e.mimeType
															})).map((function(r) {
																return n.getOverallBufferLevel(r, e, l.BufferType.ForwardDuration, t)
															}));
															return r.length > 0 ? Math.min.apply(Math, r) : 0
														}, e.prototype.isStartupThresholdReached = function() {
															var e = Math.abs(this.manifestService.getTimeShiftBufferDepthSeconds()),
																t = this.bufferSettings.getForwardTargetLevel();
															0 !== e && (t = Math.min(t, e));
															var n = Math.min(this.settings.STARTUP_THRESHOLD, t - this.settings.STARTUP_THRESHOLD_DELTA),
																r = this.getLowestBufferLevel();
															return r >= n || r >= this.getRemainingTime()
														}, e.prototype.getInitialPlaybackTime = function() {
															if (this.startupPlaybackTime) return this.startupPlaybackTime;
															var e = this.getCurrentTimeRespectingTarget();
															if (!this.isBufferAvailable()) return e;
															if (this.isInBufferedRange(e)) return this.startupPlaybackTime = e;
															var t = this.currentRendererMediaTypes.map((function(e) {
																	return e.mimeType
																})),
																n = this.segmentStore.getPlaybackTimesForBufferBlock(this.currentPlayingBufferBlockId, t);
															return n.some((function(e) {
																return !isFinite(e)
															})) ? e : this.startupPlaybackTime = Math.max.apply(Math, n)
														}, e.prototype.getRemainingTime = function() {
															return this.manifestService.isLive() ? 1 / 0 : this.renderer.getDuration() - this.getCurrentTimeRespectingTarget()
														}, e.prototype.endStartupPhase = function() {
															if (this.isStartup) {
																var e = Date.now(),
																	t = (0, h.getMetricsState)(this.context.store.getState()),
																	n = (0, h.getMetricsLastEntry)(t, "default", p.MetricType.StartTime).value,
																	r = (0, w.toSeconds)(e - n);
																this.context.store.dispatch((0, d.addMetricsValue)("default", p.MetricType.StartupTimeSeconds, r)), isNaN(r) || this.logger.debug("start up time: ".concat(r)), this.isStartup = !1, this.endStalling()
															}
														}, e.prototype.resetCurrentTimeInBufferedRange = function(e) {
															var t = this.renderer.getCurrentTime(!0);
															e.isInit() && S.MimeTypeHelper.isVideo(e.getMimeType()) && this.isCurrentlyStalled && i.BufferRangeHelper.isInBufferedRange(this.getBufferedRangesMap(this.manifestService.getPeriodIdForTime(t)), t) && (this.context.videoElement.currentTime = this.context.videoElement.currentTime)
														}, e.prototype.processDrmInitData = function(e) {
															var t = this;
															e.getDrmInitData().filter((function(e) {
																var t;
																return (null === (t = e.kid) || void 0 === t ? void 0 : t.length) > 0
															})).forEach((function(n) {
																return t.manifestService.setRepresentationDrmKid(e.getRepresentationId(), n.kid[0])
															}))
														}, e.prototype.addDataSegmentToRenderer = function(e) {
															var t = this,
																n = S.MimeTypeHelper.extractContentType(e.getMimeType());
															if (this.activeInitSegments[n] !== e.getInitSegment()) {
																var r = e.getInitSegment();
																return this.activeInitSegments[n] = r, Promise.all([r, e].map((function(e) {
																	return t.addSegmentToRenderer(e)
																}))).then()
															}
															return this.addSegmentToRenderer(e)
														}, e.prototype.addSegmentToRenderer = function(e) {
															var t = this;
															return e.hasDrmInitData() && this.processDrmInitData(e), this.drmConfigValidPromise.catch((function(n) {
																if (e.isEncrypted()) throw t.context.eventHandler.fireError(function(e) {
																	return C.ModuleManager.has($.ModuleName.DRM) ? new o.PlayerError(a.ErrorCode.DRM_NO_KEY_SYSTEM, {
																		reason: e
																	}) : new k.PlayerModuleMissingError($.ModuleName.DRM)
																}(n)), "DRMConfig failure";
																t.logger.debug("Problem ensuring segment, error:", n)
															})).then((function() {
																return t.resetCurrentTimeInBufferedRange(e), t.maybeSetTimestampOffsetOnDiscontinuity(e), t.renderer.appendData(e).catch((function(e) {
																	t.logger.debug("could not append data to renderer", e)
																}))
															}))
														}, e.prototype.maybeSetTimestampOffsetOnDiscontinuity = function(e) {
															if (!e.isInit()) {
																var t = e.getSegmentInfo().discontinuitySequenceNumber,
																	n = e.getMimeType();
																if (t !== this.discontinuitySequenceNumbers.get(n)) {
																	var r = e.getPresentationTimeOffset();
																	if (isFinite(r)) {
																		this.renderer.setTimestampOffset(n, -r);
																		var i = this.currentRendererMediaTypes.find((function(e) {
																			return e.mimeType === n
																		}));
																		i && (i.timestampOffset = r, this.updateMediaType(e.getPeriodId(), i))
																	}
																	this.discontinuitySequenceNumbers.set(n, t)
																}
															}
														}, e.prototype.isRestartThresholdReached = function() {
															if (!this.bufferSettings) return !1;
															var e = this.settings.RESTART_THRESHOLD;
															(0, y.isWebOS)() && (e = Math.max(e, 1.5));
															var t = this.bufferSettings.getForwardTargetLevel(),
																n = Math.min(e, t - this.settings.RESTART_THRESHOLD_DELTA, this.getRemainingTime());
															return this.getLowestBufferLevel() >= n
														}, e.prototype.isAllowedToStall = function() {
															return !this.isStartup && !this.isSwitchingBufferBlock
														}, e.prototype.startStalling = function() {
															this.isAllowedToStall() && this.bufferStallingService.startStalling()
														}, e.prototype.getPlayerStateService = function() {
															return this.context.serviceManager.get(s.ServiceName.PlayerStateService)
														}, e.prototype.isEndingStallAtGap = function() {
															var e = this.getCurrentTimeRespectingTarget(),
																t = this.getLowestBufferLevel(e, !1),
																n = this.getLowestBufferLevel(e, !0),
																r = t >= this.settings.RESTART_THRESHOLD,
																i = t >= this.getRemainingTime() || this.finishPlayback,
																a = n > t,
																o = this.getPlayerStateService().seekingOrTimeshifting;
															return !r && !i && !o && a && this.bufferStallingService.isRendererStalling()
														}, e.prototype.endStalling = function() {
															if (!this.isSwitchingBufferBlock) return this.isEndingStallAtGap() ? (this.logger.debug("Ending stall at the gap"), void this.endStallAtGapCallback()) : void this.bufferStallingService.endStalling();
															this.logger.debug("Ending stall was aborted due to buffer block switching")
														}, e.prototype.getCurrentTimeRespectingTarget = function() {
															return null != this.seekTarget ? this.seekTarget : this.renderer.getCurrentTime()
														}, e.prototype.getCurrentPlayingBufferBlockId = function() {
															return this.segmentStore.getCurrentBufferBlockId()
														}, e.prototype.hasPendingSegments = function(e) {
															return e = e || this.getCurrentPlayingBufferBlockId(), this.segmentStore.getFutureBufferBlocks(e).some((function(e) {
																return e.hasSegments()
															}))
														}, e.prototype.getOverallBufferLevel = function(e, t, n, r) {
															void 0 === t && (t = this.renderer.getCurrentTime()), void 0 === n && (n = l.BufferType.ForwardDuration), void 0 === r && (r = !0), this.isStartup && (t = this.getInitialPlaybackTime());
															var a = this.getBufferedRangesMap(this.currentPlayingPeriodId)[e];
															return a && 0 !== a.length ? (a = r ? i.BufferRangeHelper.mergeRanges(a.concat(i.BufferRangeHelper.findGapsInRanges(a)), this.settings.GAP_TOLERANCE) : a.filter((function(e) {
																return e.start <= t && t <= e.end
															})), i.BufferRangeHelper.getBufferLevel(a, t, n)) : 0
														}, e.prototype.hasFutureCommonBuffer = function(e) {
															return void 0 === e && (e = this.renderer.getCurrentTime()), i.BufferRangeHelper.getCommonBufferedRanges(this.getBufferedRangesMap(this.currentPlayingPeriodId)).some((function(t) {
																return t.getEnd() > e
															}))
														}, e.prototype.hasFutureBufferBlockData = function() {
															return Boolean(this.segmentStore.getNextBufferBlock(this.currentPlayingBufferBlockId)) || this.isSwitchingBufferBlock
														}, e.prototype.isInBufferedRange = function(e, t) {
															var n = t || this.manifestService.getPeriodIdForTime(e);
															return i.BufferRangeHelper.isInBufferedRange(this.getBufferedRangesMap(n), e)
														}, e.prototype.isStarted = function() {
															return this.isAlreadyStarted
														}, e.prototype.hasStreamEnded = function() {
															return this.hasStreamEndedInternal
														}, e.prototype.unsubscribeFromBufferChanges = function() {
															void 0 !== this.unsubscribeFromRendererBufferChanges && (this.unsubscribeFromRendererBufferChanges(), this.unsubscribeFromRendererBufferChanges = void 0)
														}, e.prototype.subscribeToBufferChanges = function() {
															var e = this;
															this.unsubscribeFromBufferChanges();
															var t = this.getSourceStore();
															void 0 !== t && (this.unsubscribeFromRendererBufferChanges = (0, g.subscribeToRendererBufferChanges)(t, (function(t) {
																return e.onBufferChanged(t)
															})))
														}, e.prototype.subscribeToManifestChange = function() {
															var e;
															if (!this.unsubscribeFromManifestChange) {
																var t = this.getSourceStore();
																void 0 !== t && void 0 !== (null === (e = t.getState()) || void 0 === e ? void 0 : e.manifest) && (this.unsubscribeFromManifestChange = (0, v.subscribe)(t)(O.getManifest, this.updateTotalDuration))
															}
														}, e.prototype.stop = function(e) {
															void 0 === e && (e = !1), this.finishPlayback = !0, this.isAlreadyStarted = !1, this.isStartup = !1, e ? (this.renderer.end(), this.hasStreamEndedInternal = !0, this.logger.debug("stopped playback"), this.renderer.off(T.MediaElementEvent.stalled, this.onVideoElementStalled), this.renderer.off(T.MediaElementEvent.waiting, this.onVideoElementStalled), this.renderer.off(T.MediaElementEvent.ended, this.onVideoElementEnded), this.renderer.off(T.MediaElementEvent.timeupdate, this.onVideoElementTimeUpdate), this.renderer.off(T.MediaElementEvent.currenttimenotadvancing, this.onTimeNotAdvancing), this.unsubscribeFromBufferChanges(), this.unsubscribeFromManifestChange && (this.unsubscribeFromManifestChange(), this.unsubscribeFromManifestChange = void 0), void 0 !== this.unsubscribeFromStoreStoppedListener && (this.unsubscribeFromStoreStoppedListener(), this.unsubscribeFromStoreStoppedListener = void 0), this.clearBufferMaxSizeChangedSubscription(), this.dataSegmentsPushedMap.clear()) : this.endStalling()
														}, e.prototype.hasStopped = function() {
															return this.finishPlayback
														}, e.prototype.clearBufferMaxSizeChangedSubscription = function() {
															var e = this;
															Object.keys(this.bufferMaxSizeChangedSubscriptionMap).forEach((function(t) {
																return e.unsubscribeFromBufferMaxSizeChanged(t)
															}))
														}, e.prototype.restart = function() {
															this.finishPlayback = !1, this.isAlreadyStarted || (this.isAlreadyStarted = !0, this.renderer.on(T.MediaElementEvent.stalled, this.onVideoElementStalled), this.renderer.on(T.MediaElementEvent.waiting, this.onVideoElementStalled), this.renderer.on(T.MediaElementEvent.ended, this.onVideoElementEnded), this.renderer.on(T.MediaElementEvent.timeupdate, this.onVideoElementTimeUpdate), this.renderer.on(T.MediaElementEvent.currenttimenotadvancing, this.onTimeNotAdvancing), this.subscribeToBufferChanges()), this.hasStreamEndedInternal = !1
														}, e.prototype.dispose = function() {
															var e;
															this.stop(!0), this.renderer = null, this.eventHandler = null, this.settings = null, this.bufferSettings = null, this.eventHandler = null, this.segmentStore = void 0, this.activeInitSegments = null, null === (e = this.getSourceStore()) || void 0 === e || e.dispatch((0, m.resetLoadedRanges)()), this.bufferRangesCache.dispose(), this.currentRendererMediaTypes = [], this.clearBufferMaxSizeChangedSubscription(), this.drmConfigValidPromise = null, this.bufferStallingService = (0, u.dispose)(this.bufferStallingService)
														}, e.prototype.changeBufferType = function(e, t) {
															var n, r, i = this,
																a = this.currentRendererMediaTypes.find((function(t) {
																	return S.MimeTypeHelper.getMediaType(t.mimeType) === S.MimeTypeHelper.getMediaType(e)
																}));
															return a && (this.currentRendererMediaTypes.splice(this.currentRendererMediaTypes.indexOf(a), 1), this.currentRendererMediaTypes.push({
																mimeType: e,
																codec: t,
																timestampOffset: 0
															}), this.unsubscribeFromBufferMaxSizeChanged(a.mimeType), null === (r = this.getSourceStore()) || void 0 === r || r.dispatch((0, m.resetLoadedRanges)(a.mimeType))), this.subscribeToBufferMaxSizeChanged(e), this.segmentStore.changeMediaType(e, null == a ? void 0 : a.mimeType), this.bufferStartTimes.delete(null == a ? void 0 : a.mimeType), this.activeInitSegments = {}, a ? this.renderer.changeBufferType(e, t).finally((function() {
																return i.subscribeToBufferChanges()
															})) : Promise.resolve(((n = {})[e] = t, n))
														}, e.prototype.addRequiredMediaType = function(e, t) {
															this.segmentStore.addRequiredMediaType(e, t)
														}, e.prototype.updateMediaType = function(e, t) {
															this.segmentStore.updateMediaType(e, t)
														}, e.prototype.areBufferBlockMediaTypesFinal = function(e) {
															var t, n;
															return null !== (n = null === (t = this.segmentStore) || void 0 === t ? void 0 : t.areBufferBlockMediaTypesFinal(e)) && void 0 !== n && n
														}, e.prototype.clearCacheForMimeType = function(e) {
															var t;
															null === (t = this.getSourceStore()) || void 0 === t || t.dispatch((0, m.resetLoadedRanges)(e)), this.segmentStore.clearSegments(e)
														}, e.prototype.clearCache = function() {
															var e, t = this;
															Object.keys((0, D.getStreamTimeline)(null === (e = this.getSourceStore()) || void 0 === e ? void 0 : e.getState())).filter((function(e) {
																return S.MimeTypeHelper.isAV(e)
															})).forEach((function(e) {
																return t.clearCacheForMimeType(e)
															}))
														}, e.prototype.clearBuffers = function() {
															var e = this;
															this.isClearingBuffers = !0, this.startStalling(), this.clearCache();
															var t = this.clearRendererBuffers();
															return t.finally((function() {
																return e.isClearingBuffers = !1
															})), t
														}, e.prototype.clearRendererBuffers = function() {
															var e = this;
															if (!this.isBufferAvailable()) return Promise.resolve();
															var t = this.currentRendererMediaTypes.map((function(t) {
																return e.clearBuffer(t.mimeType)
															}));
															return Promise.all(t).then((function() {}))
														}, e.prototype.clearBuffer = function(e) {
															var t = this;
															return this.renderer.removeData(e).catch((function(n) {
																return t.logger.debug("Error clearing ".concat(e, " buffer:"), n)
															}))
														}, e.prototype.isBufferAvailable = function() {
															return this.currentRendererMediaTypes.length > 0
														}, e
													}();

												function Q(e) {
													return {
														periodId: e.getPeriodId(),
														contentInformation: e.getMediaTypes().map((function(t) {
															return {
																codec: t.codec,
																mimeType: t.mimeType,
																isDrmProtected: e.getSegregationCriteria(t.mimeType).encryption === F.EncryptionState.Encrypted
															}
														}))
													}
												}
												t.BufferController = z
											},
											11199: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.BufferRangesCache = void 0;
												var r = n(59534),
													i = n(86705),
													a = n(28803),
													o = n(71705),
													s = function() {
														function e(e, t) {
															var n = this;
															this.context = e, this.segmentStore = t, this.sourceStore = this.getSourceStore(), this.unsubscribeToStoreChange = (0, a.subscribe)(e.store)(o.sourceIdentifiersSelector, (function() {
																return n.onSourceIdentifierChanged()
															}), (function(e, t) {
																return !!e.includes(n.context.sourceContext.sourceIdentifier) && (0, o.hasASourceStoreIdentifierChanged)(e, t)
															})), this.subscribeToBufferChange(), this.setNewCache((0, i.getBufferState)(this.sourceStore.getState()))
														}
														return e.prototype.onSourceIdentifierChanged = function() {
															this.sourceStore = this.getSourceStore(), this.sourceStore ? (this.subscribeToBufferChange(), this.setNewCache((0, i.getBufferState)(this.sourceStore.getState()))) : this.unsubscribeToBufferChange()
														}, e.prototype.getSourceStore = function() {
															return this.context.serviceManager.get(r.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.unsubscribeToBufferChange = function() {
															this.unsubscribeToBufferRangeChange && this.unsubscribeToBufferRangeChange(), this.unsubscribeToBufferRangeChange = void 0, this.unsubscribeToStoreChange = void 0
														}, e.prototype.subscribeToBufferChange = function() {
															var e = this;
															this.unsubscribeToBufferChange(), this.unsubscribeToBufferRangeChange = (0, a.subscribe)(this.sourceStore)((function(e) {
																return (0, i.getBufferState)(e)
															}), (function(t) {
																return e.setNewCache(t)
															}), i.hasBufferRangesChanged)
														}, e.prototype.setNewCache = function(e) {
															this.cachedBufferRanges = {
																overallBufferRanges: (0, i.getBufferRangesMap)(this.segmentStore, e, this.context.settings.GAP_TOLERANCE)
															}
														}, e.prototype.getRanges = function(e) {
															return void 0 !== this.unsubscribeToBufferRangeChange && void 0 !== this.cachedBufferRanges && 0 !== Object.keys(this.cachedBufferRanges.overallBufferRanges).length || this.setNewCache(e), this.cachedBufferRanges.overallBufferRanges
														}, e.prototype.dispose = function() {
															this.unsubscribeToBufferChange(), this.unsubscribeToStoreChange && (this.unsubscribeToStoreChange(), this.unsubscribeToStoreChange = void 0), this.cachedBufferRanges = void 0
														}, e
													}();
												t.BufferRangesCache = s
											},
											96733: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.BufferStallingService = void 0;
												var r = n(95212),
													i = n(15949),
													a = function() {
														function e(e, t, n) {
															this.playerStateService = e, this.logger = t, this.renderer = n
														}
														return e.prototype.startStalling = function() {
															this.isRendererStalling() || (this.logger.debug("Stalling playback"), this.logger.insane("Video element stall started in state: ".concat(this.playerStateService.playbackState)), this.playerStateService.setIsRendererStalling(!0), this.playerStateService.isPlaying() && (this.logger.insane("Call pause on renderer"), this.renderer.pause()))
														}, e.prototype.endStalling = function() {
															var e = this;
															this.isRendererStalling() && (this.logger.debug("Unstalling playback"), this.playerStateService.setIsRendererStalling(!1), [r.PlaybackState.Play, r.PlaybackState.Playing].includes(this.playerStateService.playbackState) && (!this.playerStateService.seekingOrTimeshifting && (0, i.getCapabilities)().isChromium && (this.logger.insane("Resetting current time before unstalling"), this.renderer.setCurrentTime(this.renderer.getCurrentTime())), this.logger.insane("Call play on renderer"), this.renderer.play().catch((function(t) {
																e.logger && e.logger.insane("Play failed with reason: ".concat(t))
															}))))
														}, e.prototype.isRendererStalling = function() {
															return this.playerStateService.getIsRendererStalling()
														}, e.prototype.dispose = function() {
															this.logger = null, this.playerStateService = null, this.renderer = null
														}, e
													}();
												t.BufferStallingService = a
											},
											6862: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.DeferredReject = void 0;
												var n = function() {
													function e() {
														this.rejected = !1
													}
													return e.prototype.reject = function(e) {
														this.rejected = !0, this.rejectMessage = e
													}, e.prototype.next = function(e) {
														return this.rejected ? Promise.reject(this.rejectMessage) : e()
													}, e
												}();
												t.DeferredReject = n
											},
											39972: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentStore = t.INITIAL_BUFFER_BLOCK_ID = void 0;
												var i = n(86502),
													a = n(50163),
													o = n(8470),
													s = n(76812),
													u = n(56727);
												t.INITIAL_BUFFER_BLOCK_ID = 0;
												var c = function() {
													function e(e) {
														this.requiredMediaTypes = {}, this.delayedMediaTypeToUpdate = {}, this.delayedMediaTypeToSet = {};
														var n = new o.BufferBlock(t.INITIAL_BUFFER_BLOCK_ID);
														this.requiredMediaTypes = {}, this.segregation = new u.Segregation(this.requiredMediaTypes, e), this.bufferBlocks = [n]
													}
													return e.prototype.getBufferBlockByPeriodId = function(e) {
														return this.bufferBlocks.find((function(t) {
															return t.getPeriodId() === e
														}))
													}, e.prototype.hasSegmentsForBufferBlock = function(e) {
														return this.getAllSegmentsFromBufferBlock(e).hasNext()
													}, e.prototype.hasDataSegmentsForBufferBlock = function(e) {
														return Object.keys(e.mediaTypes).filter((function(e) {
															return a.MimeTypeHelper.isAV(e)
														})).every((function(t) {
															return e.hasDataSegments(t)
														}))
													}, e.prototype.getTargetBufferBlock = function(e, t) {
														return this.getBufferBlockForPlaybackTime(e) || this.getClosestFutureBufferBlock(e) || this.getBufferBlockByPeriodId(t)
													}, e.prototype.canSwitchToBufferBlock = function(e, t) {
														if (!t) return !1;
														var n = this.areBufferBlockMediaTypesFinal(t.getPeriodId(), e);
														return this.hasDataSegmentsForBufferBlock(t) && n
													}, e.prototype.canSwitchToBufferBlockForTime = function(e) {
														var t = this.getBufferBlockForPlaybackTime(e);
														return this.canSwitchToBufferBlock(e, t)
													}, e.prototype.areBufferBlockMediaTypesFinal = function(e, t) {
														var n, r = this;
														if (void 0 !== t && (n = this.getBufferBlockForPlaybackTime(t)), n || (n = this.getBufferBlockByPeriodId(e)), !n || !n.mediaTypes || 0 === Object.keys(n.mediaTypes).length) return !1;
														if (void 0 === this.requiredMediaTypes[e]) return !1;
														var i = Object.keys(n.mediaTypes);
														return Object.keys(this.requiredMediaTypes[e]).filter((function(e) {
															return a.MimeTypeHelper.isAV(e)
														})).every((function(t) {
															var n;
															return i.includes(t) && (null === (n = r.requiredMediaTypes[e][t]) || void 0 === n ? void 0 : n.codec)
														}))
													}, e.prototype.addRequiredMediaType = function(e, t) {
														var n = this.getBufferBlockByPeriodId(e);
														this.requiredMediaTypes[e] || (this.requiredMediaTypes[e] = {}), this.requiredMediaTypes[e][t] || (this.requiredMediaTypes[e][t] = {
															mimeType: t,
															codec: null,
															timestampOffset: 0
														}), n ? n.mediaTypes[t] || n.addMediaType({
															mimeType: t,
															codec: null,
															timestampOffset: 0
														}) : (this.delayedMediaTypeToSet[e] || (this.delayedMediaTypeToSet[e] = {}), this.delayedMediaTypeToSet[e][t] = {
															mimeType: t,
															codec: null,
															timestampOffset: 0
														})
													}, e.prototype.changeMediaType = function(e, t) {
														var n = this,
															r = Object.keys(this.requiredMediaTypes),
															i = t;
														r.forEach((function(r) {
															t || (i = Object.keys(n.requiredMediaTypes[r]).find((function(t) {
																return a.MimeTypeHelper.getMediaType(t) === a.MimeTypeHelper.getMediaType(e)
															}))), n.removeRequiredMediaType(r, i), n.addRequiredMediaType(r, e)
														}))
													}, e.prototype.removeRequiredMediaType = function(e, t) {
														if (this.requiredMediaTypes[e]) {
															delete this.requiredMediaTypes[e][t];
															var n = this.getBufferBlockByPeriodId(e);
															n && n.removeMediaType(t)
														}
														this.delayedMediaTypeToSet[e] && delete this.delayedMediaTypeToSet[e][t], this.clearSegments(t)
													}, e.prototype.updateRequiredMediaTypes = function(e, t) {
														var n;
														if (this.requiredMediaTypes[e]) {
															var i = this.requiredMediaTypes[e][t.mimeType];
															this.requiredMediaTypes[e][t.mimeType] = r(r({}, i), t)
														} else this.requiredMediaTypes[e] = ((n = {})[t.mimeType] = t, n)
													}, e.prototype.updateMediaType = function(e, t) {
														var n;
														this.updateRequiredMediaTypes(e, t);
														var i = this.getBufferBlockByPeriodId(e);
														(null == i ? void 0 : i.hasMediaType(t.mimeType)) ? i.updateMediaTypeForMimeType(t): this.delayedMediaTypeToUpdate[e] = r(r({}, this.delayedMediaTypeToUpdate[e] || {}), ((n = {})[t.mimeType] = t, n))
													}, e.prototype.findBestMatchingBufferBlockForSegment = function(e, t) {
														var n = this;
														if (1 === this.bufferBlocks.length && this.segregation.canAddSegmentToBufferBlock(e, this.bufferBlocks[0], t)) return this.bufferBlocks[0];
														var r = [],
															i = [];
														this.bufferBlocks.forEach((function(a) {
															n.segregation.canAddSegmentToBufferBlock(e, a, t) ? r.push(a) : i.push(a)
														}));
														var a = l(r),
															o = l(i),
															s = e.getPlaybackTime(),
															u = a.find((function(e) {
																var t = function(e, t) {
																		return t.reduce((function(t, n) {
																			return n.range.end <= e ? Math.max(n.range.start, t) : t
																		}), -1 / 0)
																	}(e.range.start, o),
																	n = function(e, t) {
																		return t.reduce((function(t, n) {
																			return n.range.start >= e ? Math.min(n.range.start, t) : t
																		}), 1 / 0)
																	}(e.range.end, o);
																return t <= s && s <= n
															}));
														return null == u ? void 0 : u.block
													}, e.prototype.addSegment = function(e) {
														var t = this.segregation.getSegregationCriteria(e),
															n = this.findBestMatchingBufferBlockForSegment(e, t);
														n || (n = this.createNewBufferBlock(), this.bufferBlocks.push(n)), n.addSegment(e), n.getSegregationCriteria(e.getMimeType()) || n.setSegregationCriteria(t, e.getMimeType());
														var r = e.getPeriodId(),
															i = e.getMimeType();
														this.delayedMediaTypeToSet[r] && this.delayedMediaTypeToSet[r][i] && (this.addRequiredMediaType(r, i), delete this.delayedMediaTypeToSet[r][i]), this.delayedMediaTypeToUpdate[r] && this.delayedMediaTypeToUpdate[r][i] && (this.updateMediaType(r, this.delayedMediaTypeToUpdate[r][i]), delete this.delayedMediaTypeToUpdate[r][i])
													}, e.prototype.getNewBufferBlockId = function() {
														var e = this.bufferBlocks[this.bufferBlocks.length - 1];
														return e ? e.getId() + 1 : t.INITIAL_BUFFER_BLOCK_ID
													}, e.prototype.createNewBufferBlock = function() {
														var e = this.getNewBufferBlockId();
														return new o.BufferBlock(e)
													}, e.prototype.getMediaTypes = function(e) {
														var t = this;
														return e && this.requiredMediaTypes[e] ? Object.keys(this.requiredMediaTypes[e]).map((function(n) {
															return t.requiredMediaTypes[e][n]
														})) : []
													}, e.prototype.getAllBufferBlocks = function() {
														return this.bufferBlocks
													}, e.prototype.getCurrentBufferBlockId = function() {
														var e, n = this.bufferBlocks[0];
														return null !== (e = null == n ? void 0 : n.getId()) && void 0 !== e ? e : t.INITIAL_BUFFER_BLOCK_ID
													}, e.prototype.deleteOldBufferBlocks = function(e) {
														this.bufferBlocks = this.bufferBlocks.filter((function(t) {
															return t.getId() >= e && t.getAllSegments().length > 0
														}))
													}, e.prototype.getActiveBufferBlock = function() {
														var e;
														return null !== (e = this.getBufferBlock(this.getCurrentBufferBlockId())) && void 0 !== e ? e : null
													}, e.prototype.getBufferBlock = function(e) {
														return this.bufferBlocks.find((function(t) {
															return t.getId() === e
														}))
													}, e.prototype.getBufferBlockForSegment = function(e) {
														return this.getBufferBlock(e.getBufferBlockId())
													}, e.prototype.getBufferBlockForPlaybackTime = function(e) {
														var t = this,
															n = this.bufferBlocks.filter((function(n) {
																var r = 0 === e ? t.getSmallestMaxSegmentDuration(n) - .01 : .01;
																return Object.keys(n.mediaTypes).filter((function(e) {
																	return a.MimeTypeHelper.isAV(e)
																})).every((function(t) {
																	var i, a;
																	return (null === (i = n.getPlaybackTimeRange(t)) || void 0 === i ? void 0 : i.start) <= e + r && (null === (a = n.getPlaybackTimeRange(t)) || void 0 === a ? void 0 : a.end) >= e
																}))
															}));
														return n[n.length - 1]
													}, e.prototype.getClosestFutureBufferBlock = function(e) {
														return this.bufferBlocks.filter((function(t) {
															return t.getMinCommonStartTime() >= e
														})).sort((function(e, t) {
															return e.getMinCommonStartTime() - t.getMinCommonStartTime()
														}))[0]
													}, e.prototype.getNextSegment = function() {
														var e, t;
														return null !== (t = null === (e = this.getActiveBufferBlock()) || void 0 === e ? void 0 : e.getNextSegment()) && void 0 !== t ? t : null
													}, e.prototype.removeSegment = function(e) {
														var t = this.getBufferBlockForSegment(e);
														t && t.removeSegment(e)
													}, e.prototype.getAllSegmentsFromBufferBlock = function(e, t) {
														if (!e) return i.EmptyIterator.getInstance();
														var n = e.getAllSegments();
														return t ? new i.FilterIterator(new i.ArrayIterator(n), (function(e) {
															return e.getMimeType() === t
														})) : new i.ArrayIterator(n)
													}, e.prototype.getNextBufferBlock = function(e) {
														return this.bufferBlocks.find((function(t) {
															return t.getId() > e
														}))
													}, e.prototype.getFutureBufferBlocks = function(e) {
														return this.bufferBlocks.filter((function(t) {
															return t.getId() >= e
														}))
													}, e.prototype.getPrecedingSegments = function(e, t) {
														return this.bufferBlocks.flatMap((function(n) {
															return n.getPrecedingSegments(e, t)
														}))
													}, e.prototype.clearSegments = function(e) {
														this.bufferBlocks.forEach((function(t) {
															return t.clearSegments(e)
														}))
													}, e.prototype.getSmallestMaxSegmentDuration = function(e) {
														return Boolean(e) && e.hasMaxSegmentDurations() ? e.getMinMaxSegmentDuration() : -1
													}, e.prototype.getSmallestSafeBufferSize = function(e, t) {
														var n = this.getBufferBlockForPlaybackTime(e);
														return (null == n ? void 0 : n.hasMaxSegmentDuration(t)) ? n.getMaxSegmentDuration(t) + 1 : 1
													}, e.prototype.getAvailablePositionForTime = function(e, t) {
														var n = e;
														if (t && e > t) {
															var r = this.getBufferBlockForPlaybackTime(e);
															r || (r = this.getClosestFutureBufferBlock(e)) && (n = r.getMinCommonStartTime())
														}
														return n
													}, e.prototype.getPlaybackTimesForBufferBlock = function(e, t) {
														var n = this,
															r = this.getBufferBlock(e);
														return t.map((function(e) {
															var t = new i.FilterIterator(n.getAllSegmentsFromBufferBlock(r, e), (function(e) {
																return !e.isInit()
															}));
															return t.hasNext() ? t.next().getPlaybackTime() : -1 / 0
														}))
													}, e.prototype.isLoadingNextBufferBlock = function(e) {
														var t = this.getNextBufferBlock(e);
														return !!t && this.hasDataSegmentsForBufferBlock(t)
													}, e.prototype.shouldSwitchBufferBlock = function(e, t) {
														return !(0, s.areBufferBlocksEqual)(e, this.getBufferBlock(t))
													}, e
												}();

												function l(e) {
													return e.map((function(e) {
														return {
															range: e.getCommonPlaybackTimeRanges(),
															block: e
														}
													})).sort((function(e, t) {
														return e.range.start - t.range.start
													}))
												}
												t.SegmentStore = c
											},
											56727: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.canReuseSourceBuffer = t.areSegregationCriteriaEqual = t.Segregation = void 0;
												var r = n(94725),
													i = n(15949),
													a = n(38827),
													o = n(46381),
													s = n(8470),
													u = function() {
														function e(e, t) {
															this.requiredMediaTypes = e, this.settings = t, this.requiredMediaTypes = e
														}
														return e.prototype.isRequiredMimeType = function(e, t) {
															return void 0 === t.getPeriodId() || Boolean(this.requiredMediaTypes[t.getPeriodId()] && this.requiredMediaTypes[t.getPeriodId()][e.getMimeType()])
														}, e.prototype.getSegregationCriteria = function(e) {
															var t, n = {
																encryption: l(e),
																codec: o.CodecStringHelper.extractCodec(e.getCodec()),
																periodId: e.getPeriodId()
															};
															if (((0, a.isTizen2016)() || (0, a.isWebOS)()) && this.settings.HLS_CLEAR_BUFFERS_ON_DISCONTINUITY_SWITCHES) {
																var r = null === (t = e.getSegmentInfo()) || void 0 === t ? void 0 : t.discontinuitySequenceNumber;
																null != r && (n.discontinuityNumber = r)
															}
															return n
														}, e.prototype.canAddSegmentToBufferBlock = function(e, t, n) {
															var r = e.getMimeType(),
																i = t.getSegregationCriteria(r),
																a = this.isRequiredMimeType(e, t);
															return i ? c(n, i) : !(i || !a || t.getPeriodId() && e.getPeriodId() !== t.getPeriodId())
														}, e
													}();

												function c(e, t) {
													return Object.keys(e).every((function(n) {
														return t && t[n] === e[n]
													}))
												}

												function l(e) {
													return e.isEncrypted() ? s.EncryptionState.Encrypted : s.EncryptionState.Clear
												}

												function f(e, t) {
													var n = e.getMediaTypes().find((function(e) {
														return e.mimeType === t
													}));
													return n ? n.timescale : 0
												}

												function d() {
													return (0, i.getCapabilities)().isTizen ? m : (0, i.getCapabilities)().isLegacyEdge ? v : (0, i.getCapabilities)()[r.CapabilityKey.isEdge] ? b : (0, i.getCapabilities)()[r.CapabilityKey.isFirefox] ? _ : (0, i.getCapabilities)()[r.CapabilityKey.isWebOS] ? g : p
												}

												function h(e, t, n) {
													return {
														currentCriteria: e.getSegregationCriteria(n),
														nextCriteria: t.getSegregationCriteria(n)
													}
												}
												t.Segregation = u, t.areSegregationCriteriaEqual = c, t.canReuseSourceBuffer = function(e, t, n) {
													var r = d();
													return n.every((function(n) {
														var i = n.mimeType;
														return r.canReuseSourceBuffers(e, t, i)
													}))
												};
												var p = {
														canReuseSourceBuffers: function(e, t, n) {
															var r = h(e, t, n),
																i = r.currentCriteria,
																a = r.nextCriteria;
															return y(i, a) && A(i, a)
														}
													},
													_ = {
														canReuseSourceBuffers: function(e, t, n) {
															var r = h(e, t, n);
															return y(r.currentCriteria, r.nextCriteria)
														}
													},
													m = {
														canReuseSourceBuffers: function(e, t, n) {
															var r = h(e, t, n),
																i = r.currentCriteria,
																o = r.nextCriteria,
																s = y(i, o) && A(i, o) && S(i, o),
																u = (0, a.isTizen2016)() && !w(e, t, n);
															return !((0, a.isTizen2017)() || !s || u)
														}
													},
													b = {
														canReuseSourceBuffers: function(e, t, n) {
															var r = h(e, t, n),
																i = r.currentCriteria,
																a = r.nextCriteria,
																o = (null == i ? void 0 : i.encryption) === s.EncryptionState.Clear,
																u = (null == a ? void 0 : a.encryption) === s.EncryptionState.Clear;
															return y(i, a) && o && u
														}
													},
													g = {
														canReuseSourceBuffers: function(e, t, n) {
															var r = h(e, t, n),
																i = r.currentCriteria,
																a = r.nextCriteria;
															return y(i, a) && A(i, a) && S(i, a) && w(e, t, n) && ! function(e, t) {
																return (null == e ? void 0 : e.discontinuityNumber) === (null == t ? void 0 : t.discontinuityNumber)
															}(i, a)
														}
													},
													v = {
														canReuseSourceBuffers: function(e, t, n) {
															return !1
														}
													};

												function y(e, t) {
													return (null == e ? void 0 : e.codec) === (null == t ? void 0 : t.codec)
												}

												function A(e, t) {
													return (null == e ? void 0 : e.encryption) === (null == t ? void 0 : t.encryption)
												}

												function S(e, t) {
													return (null == e ? void 0 : e.periodId) === (null == t ? void 0 : t.periodId)
												}

												function w(e, t, n) {
													return f(e, n) === f(t, n)
												}
											},
											38426: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.calculateUpdateDelayInMillis = t.AbstractUpdater = t.REPRESENTATION_UPDATE_CANCEL = void 0;
												var r = n(81028),
													i = n(80815);
												t.REPRESENTATION_UPDATE_CANCEL = "CANCEL";
												var a = function() {
													function e(e) {
														var t = this;
														this.updateCallbacks = e, this.handlePayloadUpdateError = function(e) {
															t.publishErrorResponse(e), t.clearTimeout()
														}, this.processPayload = function(e) {
															t.success(e), t.clearTimeout(), t._isStopped || t.scheduleUpdate()
														}, this._isStopped = !1
													}
													return e.prototype.cancel = function() {
														this._updateDeferred && (this._updateDeferred.reject(t.REPRESENTATION_UPDATE_CANCEL), this.updateCallbacks.error(t.REPRESENTATION_UPDATE_CANCEL)), this.clearTimeout()
													}, e.prototype.clearTimeout = function() {
														window.clearTimeout(this.updateTimeoutId), this.updateTimeoutId = null
													}, e.prototype.stop = function() {
														null !== this.updateTimeoutId && (this._isStopped = !0, this.cancel())
													}, e.prototype.start = function() {
														this._isStopped = !1, this.scheduleUpdate()
													}, e.prototype.scheduleUpdate = function() {
														this.updateTimeoutId || this._isStopped || this.initializeUpdate()
													}, e.prototype.initializeUpdate = function() {
														var e = this,
															t = o(this.getLastReloadTimestamp(), this.getReloadIntervalInSeconds());
														if (!(t > 2147483647)) {
															var n = new r.Deferred,
																i = {
																	wasInvalidated: function() {
																		return n !== e._updateDeferred
																	}
																};
															n.promise.catch((function() {})), this._updateDeferred = n, this.updateTimeoutId = window.setTimeout((function() {
																return e.payloadUpdate(i)
															}), t)
														}
													}, e.prototype.payloadUpdate = function(e) {
														var t = this;
														this.update().then(this.processPayload).catch((function(n) {
															e.wasInvalidated() || t.handlePayloadUpdateError(n)
														}))
													}, e.prototype.publishErrorResponse = function(e) {
														this._updateDeferred.reject(e), this.updateCallbacks.error(e)
													}, e.prototype.success = function(e) {
														this._updateDeferred.resolve(e), this.updateCallbacks.success(e)
													}, Object.defineProperty(e.prototype, "isStopped", {
														get: function() {
															return this._isStopped
														},
														enumerable: !1,
														configurable: !0
													}), e.prototype.getPayload = function() {
														return this._updateDeferred.promise
													}, e
												}();

												function o(e, t) {
													if (isNaN(t)) return 0;
													var n = (0, i.toSeconds)(Date.now() - e);
													return n >= t ? 0 : (0, i.toMilliSeconds)(t - n)
												}
												t.AbstractUpdater = a, t.calculateUpdateDelayInMillis = o
											},
											53001: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.findAdaptationSetsForMimeType = t.getPreferredLanguage = t.getHlsDefaultLanguage = t.findAdaptationSetOfMimeType = void 0;
												var r = n(50163),
													i = n(43068),
													a = n(83024);

												function o(e, t) {
													var n;
													if (i.ModuleManager.has(a.ModuleName.HLS)) {
														var o = i.ModuleManager.get(a.ModuleName.HLS).selectors,
															s = o.getHlsState,
															u = o.getDefaultLanguages,
															c = s(t),
															l = c ? u(c) : void 0;
														if (l) {
															var f = null === (n = r.MimeTypeHelper.getMediaType(e)) || void 0 === n ? void 0 : n.toUpperCase();
															return f ? l[f] : void 0
														}
													}
												}

												function s(e, t) {
													var n = t && o(e, t),
														r = {
															language: navigator.language || navigator.userLanguage || (null == n ? void 0 : n.language) || void 0
														};
													return r.language && n && c(r.language, n.language) && (r.name = n.name), r
												}

												function u(e, t, n, r) {
													if (void 0 === r && (r = !1), 0 !== e.length) {
														var i = void 0;
														if (n && (i = function(e, t, n) {
																var r = e.find((function(e) {
																		return e._lang && t.lang && e._lang === t.lang
																	})),
																	i = e.find((function(e) {
																		return t.adaptationSetId && e._internalId.equals(t.adaptationSetId)
																	}));
																return i = i || e.find((function(e) {
																	return t.id === e._internalId.adaptationSetId
																})), n ? r || i : i || r
															}(e, n, r)), i) return i;
														if (t && t.language) {
															var a = e.filter((function(e) {
																return !(!Boolean(e._lang) || null == e._lang) && c(e._lang, t.language)
															}));
															return a.find((function(e) {
																return e.Representation.find((function(e) {
																	return e._name === t.name
																}))
															})) || a[0]
														}
													}
												}

												function c(e, t) {
													return Boolean((null == e ? void 0 : e.includes(t)) || (null == t ? void 0 : t.includes(e)))
												}

												function l(e, t) {
													return e.AdaptationSet.filter((function(e) {
														return e._mimeType === t || e.Representation.find((function(e) {
															return e._mimeType === t
														}))
													}))
												}
												t.findAdaptationSetOfMimeType = function(e, t, n) {
													void 0 === n && (n = {});
													var r, i = n.sourceState,
														a = n.langObj,
														c = n.periodSwitched,
														f = s(e, i),
														d = l(t, e);
													return f && (r = u(d, f, a, c)), !r && i && (r = u(d, o(e, i), a, c)), r || d[0]
												}, t.getHlsDefaultLanguage = o, t.getPreferredLanguage = s, t.findAdaptationSetsForMimeType = l
											},
											71278: function(e, t, n) {
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
												}), t.createAdaptationSetIdFromMimeTypeAndIndex = t.AdaptationSetId = void 0;
												var i = function(e) {
													function t(t, n) {
														var r = e.call(this, t) || this;
														return r._adaptationSetId = n, r
													}
													return r(t, e), Object.defineProperty(t.prototype, "adaptationSetId", {
														get: function() {
															return this._adaptationSetId
														},
														enumerable: !1,
														configurable: !0
													}), t.prototype.equals = function(t) {
														return e.prototype.equals.call(this, t) && this.adaptationSetId === (null == t ? void 0 : t.adaptationSetId)
													}, t.prototype.key = function() {
														return e.prototype.key.call(this) + "-" + this.adaptationSetId
													}, t
												}(n(94112).PeriodId);
												t.AdaptationSetId = i, t.createAdaptationSetIdFromMimeTypeAndIndex = function(e, t, n) {
													return new i(e, "".concat(t, "-").concat(n))
												}
											},
											83576: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getContentTypeFromMimeTypeAndCodecs = t.getMinimumUpdatePeriodInSeconds = t.representationToQuality = t.applyProperties = t.stripUnderscorePrefix = t.MPDExtractor = void 0;
												var r = n(59534),
													i = n(8833),
													a = n(43587),
													o = n(46381),
													s = n(22758),
													u = n(50163),
													c = n(80815),
													l = n(29079),
													f = n(43068),
													d = n(83024),
													h = n(10559),
													p = n(96400),
													_ = function() {
														function e(e, t) {
															var n = this;
															this.isLive = function() {
																return "dynamic" === n.getMpd()._type
															}, this.context = e, this.sourceContext = t, this.settings = e.settings, this.adjustedPeriodStartTimes = !1, this.synchronizedTimeService = e.serviceManager.get(r.ServiceName.SynchronizedTimeService, this.sourceContext.sourceIdentifier), this.sourceStore = e.serviceManager.get(r.ServiceName.SourceStoreService, this.sourceContext.sourceIdentifier)
														}
														return e.prototype.getMpd = function() {
															return (0, p.getManifest)(this.sourceStore.getState())
														}, e.prototype.getPeriods = function() {
															return this.getMpd().Period
														}, e.prototype.getAdaptationSets = function(e) {
															var t = this.getPeriods().find((function(t) {
																return t._id === e
															}));
															return t ? t.AdaptationSet : []
														}, e.prototype.adjustPeriodStartTimes = function() {
															if (!this.adjustedPeriodStartTimes && !this.getMpd()._isHls) {
																var e = this.isLive() ? (0, c.toSeconds)(this.getAvailabilityStartTime()) : (0, a.getStartTimeOffset)(this.sourceStore.getState());
																this.sourceStore.dispatch((0, h.adjustPeriodStartTimes)(e)), this.adjustedPeriodStartTimes = !0
															}
														}, e.prototype.getAvailabilityStartTime = function() {
															return this.isLive() && this.getMpd()._availabilityStartTime ? l.Util.getUtcDate(this.getMpd()._availabilityStartTime).getTime() - this.getTimeDifference() : 0
														}, e.prototype.getAvailabilityEndTime = function() {
															if (this.getMpd().hasOwnProperty("_availabilityEndTime")) {
																var e = l.Util.getUtcDate(this.getMpd()._availabilityEndTime).getTime();
																return new Date(e - this.getTimeDifference())
															}
															return null
														}, e.prototype.getTimeDifference = function() {
															return this.synchronizedTimeService ? this.synchronizedTimeService.getTimeDifference() : 0
														}, e.prototype.getType = function() {
															return this.getMpd()._type
														}, e.prototype.getDuration = function() {
															return this.getMpd()._mediaPresentationDuration
														}, e.prototype.getRequestTimestamp = function() {
															return this.getMpd()._requestTimestamp
														}, e.isValueWithinBounds = function(e, t, n) {
															return !e || e >= t && e <= n
														}, e.prototype.isAllowedVideoQuality = function(t) {
															var n = e.isValueWithinBounds(t.width, this.settings.MIN_SELECTABLE_VIDEO_WIDTH, this.settings.MAX_SELECTABLE_VIDEO_WIDTH),
																r = e.isValueWithinBounds(t.height, this.settings.MIN_SELECTABLE_VIDEO_HEIGHT, this.settings.MAX_SELECTABLE_VIDEO_HEIGHT),
																i = e.isValueWithinBounds(t.bitrate, this.settings.MIN_SELECTABLE_VIDEO_BITRATE, this.settings.MAX_SELECTABLE_VIDEO_BITRATE);
															return n && r && i
														}, e.prototype.isAllowedAudioQuality = function(t) {
															return e.isValueWithinBounds(t.bitrate, this.settings.MIN_SELECTABLE_AUDIO_BITRATE, this.settings.MAX_SELECTABLE_AUDIO_BITRATE)
														}, e.prototype.getAllowedQualities = function(e, t) {
															var n = this;
															if (!e) return [];
															var r = t.filter((function(t) {
																return u.MimeTypeHelper.isVideo(e) && n.isAllowedVideoQuality(t) || u.MimeTypeHelper.isAudio(e) && n.isAllowedAudioQuality(t)
															}));
															return r.length < 1 && t.length > 0 ? t : r
														}, e.prototype.getQualityForAdaptationSet = function(e) {
															if (!e) return [];
															var t = e.Representation.map((function(t) {
																return g(t, e._mimeType, e._codecs)
															}));
															return this.settings.EXCLUDE_DISALLOWED_REPRESENTATIONS && (t = this.getAllowedQualities(e._mimeType, t)), t
														}, e.prototype.getAudioQualities = function(e) {
															var t = this,
																n = this.getValidPeriodId(e);
															return this.getAdaptationSets(n).reduce((function(e, n) {
																return n._mimeType && u.MimeTypeHelper.isAudio(n._mimeType) && (e[n._internalId.adaptationSetId] = t.getQualityForAdaptationSet(n)), e
															}), {})
														}, e.prototype.getVideoQualities = function(e) {
															var t = this.getValidPeriodId(e),
																n = this.getAdaptationSets(t).find((function(e) {
																	return e._mimeType && u.MimeTypeHelper.isVideo(e._mimeType)
																}));
															return n ? this.getQualityForAdaptationSet(n) : []
														}, e.prototype.getLangObjectFromAdaptationSet = function(e, t, n) {
															var r = {
																	id: null,
																	lang: null,
																	adaptationSetId: null,
																	kind: null,
																	label: "off",
																	url: null
																},
																i = e._mimeType && e._mimeType.indexOf(t) > -1,
																a = n && e._mimeType.indexOf(n) > -1;
															return u.MimeTypeHelper.isSubtitle(t) && (r.kind = "subtitle"), e.Role && e.Role.length > 0 && (r.role = e.Role.map((function(e) {
																return b(e, {})
															}))), (i || a) && (b(e, r, ["_lang", "_isFragmented"]), r.lang = r.lang || "und", r.label = e._label || r.lang, r.adaptationSetId = e._internalId, r.id = e._internalId.adaptationSetId), r
														}, e.prototype.toSubtitleTrack = function(e, t, n) {
															var r = this.getLangObjectFromAdaptationSet(e, t, n),
																i = {
																	id: r.id,
																	lang: r.lang,
																	kind: r.kind,
																	isFragmented: r.isFragmented,
																	enabled: !1,
																	label: r.label
																};
															return null != r.role && (i.role = r.role), i.forced = function(e, t) {
																return Boolean(e.role && e.role.some((function(e) {
																	return ["forced_subtitle"].includes(e.value)
																}))) || Boolean(t._hls && t._hls.isForced)
															}(i, e.Representation[0]), i
														}, e.prototype.getAvailableSubtitles = function(e) {
															var t = this,
																n = 0;
															return e = this.getValidPeriodId(e), this.getAdaptationSets(e).filter((function(e) {
																return u.MimeTypeHelper.isSubtitle(e._mimeType)
															})).map((function(e) {
																var r = t.toSubtitleTrack(e, "application", "text");
																return r.id || (n++, r.id = "sub_".concat(n)), r
															}))
														}, e.prototype.getClosedCaptionLabels = function(e) {
															return e = this.getValidPeriodId(e), this.getAdaptationSets(e).filter((function(e) {
																return e.ClosedCaptionLabels
															})).flatMap((function(e) {
																return Object.keys(e.ClosedCaptionLabels).map((function(t) {
																	var n = e.ClosedCaptionLabels[t];
																	return {
																		id: t,
																		kind: "captions",
																		lang: n.lang || "unknown",
																		label: n.label || "Captions (".concat(t, ")")
																	}
																}))
															}))
														}, e.prototype.getAvailableAudio = function(e, t) {
															var n = this;
															void 0 === t && (t = !0);
															var r = this.getValidPeriodId(e),
																a = this.getAdaptationSets(r),
																o = 0,
																s = a.filter((function(e) {
																	return u.MimeTypeHelper.isAudio(e._mimeType)
																})).map((function(e) {
																	var t = n.getLangObjectFromAdaptationSet(e, i.MediaType.Audio);
																	return t && "off" !== t.label ? (t.id || (t.id = "audio_" + o, o++), t) : null
																}));
															if (t) {
																var c = a.find((function(e) {
																	return u.MimeTypeHelper.isVideo(e._mimeType)
																}));
																if (c && c.ContentComponent) {
																	var l = c.ContentComponent.filter((function(e) {
																		return e._contentType === i.MediaType.Audio
																	})).map((function(e) {
																		return {
																			id: e._id,
																			lang: e._lang,
																			label: e._id,
																			adaptationSetId: c._internalId
																		}
																	}));
																	s = s.concat(l)
																}
															}
															return s.filter((function(e) {
																return e
															}))
														}, e.prototype.getAvailableVideo = function(e) {
															var t = this.getValidPeriodId(e),
																n = this.getAdaptationSets(t).find((function(e) {
																	return u.MimeTypeHelper.isVideo(e._mimeType)
																}));
															return n ? [this.getLangObjectFromAdaptationSet(n, i.MediaType.Video)] : []
														}, e.getContentProtectionForManifestElement = function(e) {
															var t;
															return (null === (t = null == e ? void 0 : e.ContentProtection) || void 0 === t ? void 0 : t.length) && f.ModuleManager.has(d.ModuleName.DRM) ? f.ModuleManager.get(d.ModuleName.DRM).ContentProtectionHelper.parseContentProtectionDescriptors(e.ContentProtection) : []
														}, e.getContentProtectionForAdaptationSet = function(t) {
															for (var n = [], r = 0; r < t.Representation.length; r++) n = n.concat(e.getContentProtectionForManifestElement(t.Representation[r]));
															return n.concat(e.getContentProtectionForManifestElement(t))
														}, e.prototype.getTimeShiftBufferDepthSeconds = function() {
															if (this.isLive()) {
																var e = this.getMpd()._timeShiftBufferDepth,
																	t = (0, c.toSeconds)(Date.now() - this.getAvailabilityStartTime());
																return e === Number.NEGATIVE_INFINITY ? -t : Math.max(e, -t)
															}
															return 0
														}, e.getCurrentAndSuccessorPeriod = function(e, t) {
															for (var n = [null, 0, null], r = n[0], i = n[1], a = n[2]; i < e.length; i++)
																if (e[i]._id === t) {
																	r = e[i], a = e[i + 1] || null;
																	break
																} return [r, a]
														}, e.prototype.getPeriodDuration = function(t, n) {
															n = n || this.getMpd().Period;
															var r = e.getCurrentAndSuccessorPeriod(n, t),
																i = r[0],
																a = r[1];
															if (i && i._duration) return s.DurationConverter.getDurationInSec(i._duration);
															if (i && i.start && a && a.start) return a.start - i.start;
															if (this.getMpd()._mediaPresentationDuration) {
																var o = s.DurationConverter.getDurationInSec(this.getMpd()._mediaPresentationDuration);
																if (!isNaN(o)) return o
															}
															return Number.POSITIVE_INFINITY
														}, e.prototype.getDRMCapabilitiesForPeriod = function(e) {
															e = this.getValidPeriodId(e);
															var t = this.getMpd().Period.find((function(t) {
																return t._id === e
															}));
															return this.getDRMCapabilitiesFromPeriod(t)
														}, e.prototype.getDRMCapabilitiesFromPeriod = function(t) {
															for (var n = [], r = [], i = 0, a = t.AdaptationSet; i < a.length; i++) {
																var o = a[i],
																	s = o._mimeType,
																	c = e.getMimeTypeCodecStringForAdaptationSet(o);
																u.MimeTypeHelper.isVideo(s) ? r = r.concat(c) : u.MimeTypeHelper.isAudio(s) && (n = n.concat(c))
															}
															return [n, r]
														}, e.prototype.dispose = function() {
															this.settings = null
														}, e.getMimeTypeCodecStringForAdaptationSet = function(t) {
															for (var n = [], r = 0, i = t.Representation; r < i.length; r++) {
																var a = i[r],
																	o = e.getAttributeFromRepresentationOrAdaptationSet("_codecs", a, t),
																	s = t._mimeType;
																if (t._mimeType && o) {
																	var u = y(s, o);
																	n.push({
																		contentType: u
																	})
																}
															}
															return n
														}, e.getAttributeFromRepresentationOrAdaptationSet = function(e, t, n) {
															return t.hasOwnProperty(e) && t[e] ? t[e] : n.hasOwnProperty(e) && n[e] ? n[e] : null
														}, e.prototype.getValidPeriodId = function(e) {
															var t = this.getPeriods();
															if (t.find((function(t) {
																	return t._id === e
																}))) return e;
															var n = t[t.length - 1]._id;
															return this.context.logger.debug("Period " + e + " not available - return last period (" + n + ")"), n
														}, e.prototype.getEventStreamEvents = function(e) {
															var t = this;
															return e && e.EventStream ? e.EventStream.filter((function(e) {
																return e.Event
															})).flatMap((function(n) {
																var r, i = Number(null !== (r = n._timescale) && void 0 !== r ? r : 1);
																return t.mapToEventStreamEvent(e.start, n, i)
															})) : []
														}, e.prototype.mapToEventStreamEvent = function(e, t, n) {
															var r = this;
															return t.Event.map((function(t) {
																var i = {},
																	a = t._presentationTime || 0;
																if (i.startTime = a / n + e, t._duration) {
																	var o = t._duration / n;
																	i.endTime = i.startTime + o
																} else i.endTime = i.startTime;
																return i.data = r.getEventData(t), i
															}))
														}, e.prototype.getEventData = function(e) {
															var t, n = /<event[^>]*>(.*)(<\/event>|\/>)/g.exec(e.rawXmlRepresentation);
															n && n.length > 1 && (t = n[1]);
															var r = {};
															return Object.getOwnPropertyNames(e).filter((function(e) {
																return !["_presentationTime", "_duration", "__text"].some((function(t) {
																	return t === e
																})) && 0 === e.lastIndexOf("_", 0)
															})).forEach((function(t) {
																r[t.substring(1, t.length)] = e[t]
															})), {
																properties: r,
																content: t
															}
														}, e
													}();

												function m(e) {
													return 0 === e.indexOf("_") ? e.substring(1) : e
												}

												function b(e, t, n) {
													return void 0 === n && (n = []), Object.keys(e).filter((function(e) {
														return 0 === n.length || n.indexOf(e) > -1
													})).forEach((function(n) {
														t[m(n)] = e[n]
													})), t
												}

												function g(e, t, n) {
													if (!e) return null;
													var r = {
															id: e._id ? String(e._id) : null,
															bitrate: e._bandwidth || 0
														},
														i = o.CodecStringHelper.extractCodecStrings(e._codecs || n);
													return function(e, t) {
														return u.MimeTypeHelper.isAudio(t)
													}(0, t) ? function(e, t, n) {
														return n.audio && (e.codec = n.audio), e.label = t._label || v(e.bitrate), e
													}(r, e, i) : function(e, t) {
														return u.MimeTypeHelper.isVideo(t)
													}(0, t) ? function(e, t, n) {
														e.width = t._width || 0, e.height = t._height || 0, n.video && (e.codec = n.video), t.hasOwnProperty("_frameRate") && (e.frameRate = t._frameRate);
														var r = v(e.bitrate);
														return e.width && e.height && (r = "".concat(e.width, "x").concat(e.height, ", ").concat(r)), e.label = t._label || r, e
													}(r, e, i) : (r.label = e._label || v(r.bitrate), r)
												}

												function v(e) {
													return "".concat(Math.round(e / 1e3), "kbps")
												}

												function y(e, t) {
													return "".concat(e, '; codecs="').concat(t, '"')
												}
												t.MPDExtractor = _, t.stripUnderscorePrefix = m, t.applyProperties = b, t.representationToQuality = g, t.getMinimumUpdatePeriodInSeconds = function(e) {
													return null == e._minimumUpdatePeriod ? 1 / 0 : s.DurationConverter.getDurationInSec(e._minimumUpdatePeriod)
												}, t.getContentTypeFromMimeTypeAndCodecs = y
											},
											51186: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.ManifestCachingService = void 0;
												var r = n(5793),
													i = function() {
														function e() {
															this.cache = {}
														}
														return e.prototype.set = function(e, t, n) {
															var i = r.URLHelper.toFullUrl(e);
															a(i, this.cache), this.cache[i][t] = n
														}, e.prototype.setExpire = function(e, t) {
															var n = r.URLHelper.toFullUrl(e);
															a(n, this.cache), this.cache[n].expire = t
														}, e.prototype.get = function(e, t) {
															var n = r.URLHelper.toFullUrl(t),
																i = this.cache[n];
															if (i && function(e) {
																	return e >= Date.now()
																}(i.expire)) return i[e];
															delete this.cache[n]
														}, e.prototype.cacheHttpResponse = function(e, t, n) {
															void 0 === n && (n = 1 / 0), this.set(t, "httpResponse", e), this.setExpire(t, n)
														}, e.prototype.cacheParsedManifest = function(e, t, n) {
															void 0 === n && (n = 1 / 0), this.set(t, "parsedManifest", e), this.setExpire(t, n)
														}, e.prototype.cacheSegmentList = function(e, t, n) {
															void 0 === n && (n = 1 / 0), this.set(t, "segmentList", e), this.setExpire(t, n)
														}, e.prototype.getHttpResponse = function(e) {
															return this.get("httpResponse", e)
														}, e.prototype.getParsedManifest = function(e) {
															return this.get("parsedManifest", e)
														}, e.prototype.getSegmentList = function(e) {
															return this.get("segmentList", e)
														}, e.prototype.clear = function() {
															this.cache = {}
														}, e.prototype.dispose = function() {
															this.cache = null
														}, e
													}();

												function a(e, t) {
													t[e] || (t[e] = {})
												}
												t.ManifestCachingService = i
											},
											6124: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.createManifestLoadingService = void 0;
												var r = n(36166),
													i = n(85739),
													a = n(8833),
													o = n(43068),
													s = n(83024);
												t.createManifestLoadingService = function(e, t, n) {
													switch (e.type) {
														case a.StreamType.Dash:
															return new(0, o.ModuleManager.get(s.ModuleName.DASH).MPDLoader)(t, n);
														case a.StreamType.Hls:
															return new(0, o.ModuleManager.get(s.ModuleName.HLS).M3u8Loader)(t, n);
														case a.StreamType.Smooth:
															return new(0, o.ModuleManager.get(s.ModuleName.Smooth).SmoothStreamingLoader)(t, n);
														default:
															throw new i.PlayerError(r.ErrorCode.SOURCE_INVALID, {
																given: e.type,
																supported: "dash, hls, smooth"
															}, "The provided stream type is not supported by the player.")
													}
												}
											},
											43233: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.removeRepresentations = t.getMimeTypeForAdaptationSet = t.getCodecsFromAdaptationSet = t.sortAdaptationSetsByBestCodec = t.orderAdaptationSetsByCodec = void 0;
												var i = n(50163),
													a = n(63080);

												function o(e) {
													return e.reduce((function(e, t) {
														var n = c(t);
														return i.MimeTypeHelper.isVideo(n) ? e.videoSets.push(t) : i.MimeTypeHelper.isAudio(n) ? e.audioSets.push(t) : e.otherSets.push(t), e
													}), {
														videoSets: [],
														audioSets: [],
														otherSets: []
													})
												}

												function s(e, t) {
													var n = function(e) {
														for (var n = 0; n < t.length; n++)
															if (0 === e.indexOf(t[n])) return n;
														return t.length + 1
													};
													return e.sort((function(e, t) {
														return n(u(e)) - n(u(t))
													}))
												}

												function u(e) {
													var t;
													if ((null === (t = null == e ? void 0 : e._codecs) || void 0 === t ? void 0 : t.length) > 0) return e._codecs;
													if (e.Representation && e.Representation.length > 0) {
														var n = e.Representation[e.Representation.length - 1];
														if (n._codecs) return n._codecs
													}
													return ""
												}

												function c(e) {
													if (e._mimeType) return e._mimeType;
													if (Array.isArray(e.Representation)) {
														var t = e.Representation.find((function(e) {
															return e._mimeType
														}));
														if (t) return t._mimeType
													}
													return ""
												}
												t.orderAdaptationSetsByCodec = function(e, t) {
													return (e = r({}, e)).Period = e.Period.map((function(e) {
														if (!e.AdaptationSet) return r({}, e);
														var n = o(e.AdaptationSet),
															i = n.videoSets,
															a = n.audioSets,
															u = n.otherSets,
															c = s(i, t.video),
															l = {};
														return a.forEach((function(e) {
															var t = e._lang || "none";
															l[t] = l[t] || [], l[t].push(e)
														})), Object.keys(l).forEach((function(e) {
															c = c.concat(s(l[e], t.audio))
														})), r(r({}, e), {
															AdaptationSet: c.concat(u)
														})
													})), e
												}, t.sortAdaptationSetsByBestCodec = s, t.getCodecsFromAdaptationSet = u, t.getMimeTypeForAdaptationSet = c, t.removeRepresentations = function(e, t) {
													if (!(e.Period && e.Period.length > 0) || 0 === t.length) return e;
													var n = e.Period.map((function(e) {
														return function(e, t) {
															var n = e.AdaptationSet.map((function(e) {
																return function(e, t, n) {
																	var i = t.Representation.filter((function(t) {
																		return !n.some((function(n) {
																			return n.equals(new a.RepresentationId(e, t._id))
																		}))
																	}));
																	return r(r({}, t), {
																		Representation: i
																	})
																}(e._internalId, e, t)
															})).filter((function(e) {
																return e.Representation.length > 0
															}));
															return r(r({}, e), {
																AdaptationSet: n
															})
														}(e, t)
													})).filter((function(e) {
														return e.AdaptationSet.length > 0
													}));
													return r(r({}, e), {
														Period: n
													})
												}
											},
											88269: function(e, t, n) {
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
													}(),
													i = this && this.__assign || function() {
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
												}), t.getCodecOfAdaptationSetMimeType = t.getCodecPriorities = t.getRepresentationById = t.getMatchingRepresentationByBandwidth = t.findLowestPossibleBandwidthFromRepresentations = t.getNearestPeriodForTime = t.iterateAdaptationSets = t.addDrmKidsToRepresentations = t.initializeInternalIds = t.ManifestService = void 0;
												var o = n(36166),
													s = n(85739),
													u = n(59534),
													c = n(4529),
													l = n(59574),
													f = n(49863),
													d = n(86750),
													h = n(33240),
													p = n(49916),
													_ = n(90884),
													m = n(81349),
													b = n(96036),
													g = n(82072),
													v = n(12391),
													y = n(46381),
													A = n(22758),
													S = n(50163),
													w = n(80815),
													E = n(43068),
													T = n(83024),
													C = n(10559),
													$ = n(96400),
													k = n(53001),
													O = n(71278),
													x = n(43233),
													P = n(83576),
													M = n(94112),
													I = n(63080),
													L = "Outdated",
													D = function(e) {
														function t(t, n) {
															var r = e.call(this, {
																onRestore: function() {
																	return r.onRestore()
																}
															}) || this;
															r.context = t, r.lastManifestUpdateId = 0, r.dispatchQualityRemovedEvent = function(e) {
																var t = r.getAdaptationSet(e._internalId);
																if (t) {
																	var n = function(t) {
																		r.context.eventHandler.dispatchEvent(t, {
																			quality: {
																				id: e._id,
																				bitrate: e._bandwidth
																			}
																		})
																	};
																	S.MimeTypeHelper.isAudio(t._mimeType) ? n(l.PlayerEvent.AudioQualityRemoved) : S.MimeTypeHelper.isVideo(t._mimeType) && n(l.PlayerEvent.VideoQualityRemoved)
																}
															}, r.copyRequiredPropertiesToRepresentations = function(e) {
																(e.Representation || []).forEach((function(t) {
																	e._codecs && !t._codecs && (t._codecs = e._codecs), e._width && !t._width && (t._width = e._width), e._height && !t._height && (t._height = e._height)
																})), delete e.SegmentTemplate
															}, r.sourceContext = n, r.settings = t.settings, r.excludedRepresentations = [];
															var i = r.sourceContext.sourceIdentifier;
															return r.synchronizedTimeService = t.serviceManager.get(u.ServiceName.SynchronizedTimeService, i), r.sourceStore = t.serviceManager.get(u.ServiceName.SourceStoreService, i), r
														}
														return r(t, e), Object.defineProperty(t.prototype, "mpdExtractor", {
															get: function() {
																return this._mpdExtractor || (this._mpdExtractor = new P.MPDExtractor(this.context, this.sourceContext)), this._mpdExtractor
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(t.prototype, "manifest", {
															get: function() {
																var e;
																return (0, $.getManifest)(null === (e = this.sourceStore) || void 0 === e ? void 0 : e.getState())
															},
															enumerable: !1,
															configurable: !0
														}), t.prototype.setManifest = function(e) {
															this.sourceStore.dispatch((0, C.setManifestAction)(this.preProcessManifest(e)))
														}, t.prototype.updateManifest = function(e) {
															var t = this;
															this.lastManifestUpdateId++;
															var n = this.lastManifestUpdateId;
															return this.synchronizeWithTimeserver(e).then((function() {
																return t.ensureStillSameOperation(n), t.adjustManifestToKeySystemSupport(e)
															})).then((function() {
																t.ensureStillSameOperation(n), t.reinitializeAndUpdateManifest(e)
															})).catch((function(e) {
																if (e !== L) throw e;
																t.context.logger.debug("Skipping manifest update, since a newer manifest is available")
															}))
														}, t.prototype.ensureStillSameOperation = function(e) {
															if (e !== this.lastManifestUpdateId) throw L
														}, t.prototype.adjustManifestToKeySystemSupport = function(e) {
															var t, n, r, i, a = this,
																o = null !== (r = null === (n = null === (t = this.context.serviceManager) || void 0 === t ? void 0 : t.get(u.ServiceName.DrmService)) || void 0 === n ? void 0 : n.getUsedOrEarlyResolvedKeySystemUid()) && void 0 !== r ? r : null;
															if (!o || !e.Period || !(null === (i = this.context.serviceManager) || void 0 === i ? void 0 : i.has(u.ServiceName.DrmDetectorService))) return Promise.resolve();
															var s = this.context.serviceManager.get(u.ServiceName.DrmDetectorService),
																c = function(e, t) {
																	var n = [],
																		r = [];
																	return e.Period.forEach((function(e) {
																		var i = t.getDRMCapabilitiesFromPeriod(e);
																		n = n.concat(i[0]), r = r.concat(i[1])
																	})), {
																		audioCapabilities: n,
																		videoCapabilities: r
																	}
																}(e, this.mpdExtractor),
																l = c.audioCapabilities,
																f = c.videoCapabilities;
															return s.getSupportedCapabilities(o, l, f).then((function(t) {
																return function(e, t, n) {
																	var r = function(e) {
																			return e.contentType
																		},
																		i = t.audioCapabilities.map(r),
																		a = t.videoCapabilities.map(r);
																	e.Period.forEach((function(e) {
																		e.AdaptationSet = e.AdaptationSet.filter((function(t) {
																			return t.Representation = t.Representation.filter((function(r) {
																				var o = e.ContentProtection || t.ContentProtection,
																					s = (null == o ? void 0 : o.length) > 0,
																					u = function(e, t, n) {
																						var r = e._mimeType,
																							i = e._codecs,
																							a = (0, P.getContentTypeFromMimeTypeAndCodecs)(r, i);
																						return S.MimeTypeHelper.isAudio(r) ? t.includes(a) : !S.MimeTypeHelper.isVideo(r) || n.includes(a)
																					}(r, i, a);
																				if (s && !u) {
																					var c = (0, P.getContentTypeFromMimeTypeAndCodecs)(r._mimeType, r._codecs);
																					n.debug("Representation not supported by MediaKeySystem (".concat(c))
																				}
																				return !s || u
																			})), !S.MimeTypeHelper.isAV(t._mimeType) || t.Representation.length > 0
																		}))
																	}))
																}(e, t, a.context.logger)
															}))
														}, t.prototype.reinitializeAndUpdateManifest = function(e) {
															if ((0, g.isContextAvailable)(this.context) && this.context.serviceManager) {
																if (this.disposeMpdExtractor(), e.isInitialized = !1, this.setManifest(e), this.isLive()) {
																	var t = this.getFirstPeriod(),
																		n = this.isHlsManifest() && t ? t.start : (0, w.toSeconds)(this.getAvailabilityStartTime());
																	this.sourceStore.dispatch((0, _.setStartTimeOffset)(n))
																}
																this.mpdExtractor.adjustPeriodStartTimes();
																var r = this.parseStreamDuration();
																(0, f.maybeFireDurationChangedEvent)(this.parsedDuration, r, this.context.eventHandler), this.parsedDuration = r, this.setManifestInitialized(!0)
															}
														}, t.prototype.excludeRepresentations = function(e) {
															var t = this,
																n = e.map((function(e) {
																	return t.getRepresentationById(e)
																})).filter((function(e) {
																	return Boolean(e)
																}));
															this.setManifestInitialized(!1), this.excludedRepresentations = v.ArrayHelper.union(this.excludedRepresentations, e), this.sourceStore.dispatch((0, C.removeRepresentationsAction)(this.excludedRepresentations)), this.manifest.Period.length ? (this.disposeMpdExtractor(), n.forEach(this.dispatchQualityRemovedEvent), this.setManifestInitialized(!0)) : this.context.eventHandler.fireError(new s.PlayerError(o.ErrorCode.SOURCE_ERROR, void 0, "No playable track left"))
														}, t.prototype.isRepresentationExcluded = function(e) {
															return this.excludedRepresentations.some((function(t) {
																return t.equals(e)
															}))
														}, t.prototype.resetExcludedRepresentations = function() {
															this.excludedRepresentations = []
														}, t.prototype.onRestore = function() {
															this.setPlayerDRM(this.getManifest()), this.sourceStore.dispatch((0, C.setManifestAction)(B(this.getManifest())))
														}, t.getSupplementalProperties = function(e, t) {
															return !e.SupplementalProperty || e.SupplementalProperty.length <= 0 ? null : e.SupplementalProperty.filter((function(e) {
																return e._schemeIdUri === t
															}))
														}, t.prototype.findMatchingSwitchableAdaptationSets = function(e, t, n) {
															var r = n && n.length > 0;
															if (!r && !this.settings.ADAPTATION_SET_SWITCHING_WITHOUT_SUPPLEMENTAL_PROPERTY) return null;
															var i = [],
																a = e._group,
																o = G(e);
															return r && n.forEach((function(e) {
																return i.push(e._value)
															})), this.settings.ADAPTATION_SET_SWITCHING_WITHOUT_SUPPLEMENTAL_PROPERTY && t.forEach((function(e) {
																i.includes(e._id) || i.push(e._id)
															})), t.filter((function(t) {
																if (!i.includes(t._id) || t._id === e._id) return !1;
																var n = t._group === a,
																	r = t._mimeType === e._mimeType,
																	s = G(t) === o,
																	u = t._lang === e._lang;
																return r && s && n && u
															}))
														}, t.prototype.getSwitchableAdaptationSets = function(e) {
															var n = this;
															return e.AdaptationSet ? e.AdaptationSet.reduce((function(r, i) {
																var o = t.getSupplementalProperties(i, "urn:mpeg:dash:adaptation-set-switching:2016"),
																	s = n.findMatchingSwitchableAdaptationSets(i, e.AdaptationSet, o);
																return s && 0 !== s.length ? v.ArrayHelper.addAndMergeIntersects(r, a([i], s, !0)) : r
															}), []) : []
														}, t.mergeAdaptationSetProperties = function(e, t, n) {
															var r = e.hasOwnProperty(n),
																i = t.hasOwnProperty(n);
															(r || i) && (r ? i || (t[n] = []) : e[n] = [], e[n] = e[n].concat(t[n]))
														}, t.prototype.getAdaptationSetPropertyValues = function(e, t) {
															return e.filter((function(e) {
																return e.hasOwnProperty(t)
															})).map((function(e) {
																return e[t]
															}))
														}, t.prototype.updateAdaptationSetMinMaxValues = function(e, t) {
															var n = [e].concat(t),
																r = this.getAdaptationSetPropertyValues(n, "_minWidth"),
																i = this.getAdaptationSetPropertyValues(n, "_maxWidth"),
																a = this.getAdaptationSetPropertyValues(n, "_minHeight"),
																o = this.getAdaptationSetPropertyValues(n, "_maxHeight"),
																s = this.getAdaptationSetPropertyValues(n, "_minBandwidth"),
																u = this.getAdaptationSetPropertyValues(n, "_maxBandwidth");
															r.length > 0 && (e._minWidth = Math.min.apply(null, r)), i.length > 0 && (e._maxWidth = Math.max.apply(null, i)), a.length > 0 && (e._minHeight = Math.min.apply(null, a)), o.length > 0 && (e._maxHeight = Math.max.apply(null, o)), s.length > 0 && (e._minBandwidth = Math.min.apply(null, s)), u.length > 0 && (e._maxBandwidth = Math.max.apply(null, u))
														}, t.prototype.mergeAdaptationSets = function(e, n) {
															n.forEach(this.copyRequiredPropertiesToRepresentations);
															var r = n.shift();
															n.forEach((function(e) {
																["Representation", "ContentComponent", "ContentProtection", "SupplementalProperty"].forEach((function(n) {
																	return t.mergeAdaptationSetProperties(r, e, n)
																}))
															})), this.updateAdaptationSetMinMaxValues(r, n), e.AdaptationSet = e.AdaptationSet.filter((function(e) {
																return !n.includes(e)
															}))
														}, t.prototype.mergeSwitchableAdaptationSets = function(e) {
															var t = this;
															return e.Period.forEach((function(e) {
																t.getSwitchableAdaptationSets(e).forEach((function(n) {
																	t.mergeAdaptationSets(e, n)
																}))
															})), e
														}, t.getFirstKeyId = function(e) {
															if (!e || 0 === e.length) return null;
															var t = e.find((function(e) {
																return "cenc" === e.name
															}));
															if (t && t.defaultKid) return t.defaultKid;
															var n = e.find((function(e) {
																return e.kids && e.kids.length > 0
															}));
															return n ? n.kids[0] : null
														}, t.prototype.setRepresentationDrmKid = function(e, t) {
															this.sourceStore.dispatch((0, C.setRepresentationDrmKidAction)(e, t))
														}, t.prototype.getRepresentationDrmKid = function(e) {
															var t;
															return null === (t = this.getRepresentationById(e)) || void 0 === t ? void 0 : t.associatedKid
														}, t.prototype.setManifestInitialized = function(e) {
															this.sourceStore.dispatch((0, C.setManifestInitializedAction)(e))
														}, t.prototype.setPlayerDRM = function(e) {
															var t = this.sourceContext.source.drm,
																n = function(e) {
																	return null == e.Period ? [] : e.Period.filter((function(e) {
																		return e.AdaptationSet && e.AdaptationSet.length > 0
																	})).reduce((function(e, t) {
																		return e.concat(t.AdaptationSet)
																	}), []).filter((function(e) {
																		return e.ContentProtection && e.ContentProtection.length > 0
																	})).flatMap((function(e) {
																		return e.ContentProtection
																	})).filter((function(e) {
																		return null != e.laurl && e.laurl.length > 0
																	})).flatMap((function(e) {
																		return e.laurl.map((function(t) {
																			return i(i({}, t), {
																				drmType: h.DRMSchemeIDURIs[e._schemeIdUri]
																			})
																		}))
																	})).filter((function(e) {
																		return null != e.drmType
																	})).map((function(e) {
																		var t;
																		return (t = {})[e.drmType] = {
																			LA_URL: e._licenseUrl
																		}, t
																	}))
																}(e),
																r = {};
															n.length > 0 && (r = i({}, n[0])), null != t && Object.keys(t).length > 0 && Object.keys(t).forEach((function(e) {
																r[e] = null != r[e] ? i(i({}, r[e]), t[e]) : t[e]
															})), this.addDrmServiceAndSetDrmConfig(r);
															var a = Object.keys(r).length > 0 ? (0, p.setManifestDrm)(r) : (0, p.resetManifestDrm)();
															this.sourceStore.dispatch(a)
														}, t.prototype.addDrmServiceAndSetDrmConfig = function(e) {
															if (E.ModuleManager.has(T.ModuleName.DRM) && Object.keys(e).length > 0 && !this.context.serviceManager.has(u.ServiceName.DrmService)) {
																var t = E.ModuleManager.get(T.ModuleName.DRM).DrmService;
																this.context.serviceManager.set(u.ServiceName.DrmService, new t(this.context))
															}
															this.context.serviceManager.maybeCall(u.ServiceName.DrmService, (function(t) {
																t.isDrmConfigSet() || t.setDrmConfig(e)
															}))
														}, t.prototype.getPreviousRepDrmKidAssociation = function() {
															var e = new Map;
															return this.getAllRepresentations().filter((function(e) {
																return e._internalId && e.associatedKid
															})).forEach((function(t) {
																return e.set(t._internalId.key(), t.associatedKid)
															})), e
														}, t.prototype.preProcessManifest = function(e) {
															var t = this.getPreviousRepDrmKidAssociation();
															return e.Period && e.Period.length > 0 ? (N(e = (0, x.orderAdaptationSetsByCodec)(e, V(this.context.config, this.sourceContext.source))), e = this.mergeSwitchableAdaptationSets(e), E.ModuleManager.has(T.ModuleName.Envivio) && (e = E.ModuleManager.get(T.ModuleName.Envivio).fixSegmentTimelineLiveStream(e)), this.isSuspended() || this.setPlayerDRM(e), e = B(e), function(e, t) {
																e.Period.flatMap((function(e) {
																	var t;
																	return null !== (t = null == e ? void 0 : e.AdaptationSet) && void 0 !== t ? t : []
																})).flatMap((function(e) {
																	var t;
																	return null !== (t = null == e ? void 0 : e.Representation) && void 0 !== t ? t : []
																})).forEach((function(e) {
																	t.has(e._internalId.key()) && (e.associatedKid = t.get(e._internalId.key()))
																}))
															}(e = (0, x.removeRepresentations)(e, this.excludedRepresentations), t), e) : (this.context.eventHandler.fireError(new s.PlayerError(o.ErrorCode.SOURCE_ERROR, void 0, "No playable track left")), null)
														}, t.prototype.parseStreamDuration = function() {
															if (this.mpdExtractor) {
																var e = NaN,
																	t = this.mpdExtractor.getDuration();
																return t && (this.cachedDurationString && this.cachedDurationString === t ? e = this.cachedDuration : (e = A.DurationConverter.getDurationInSec(t), this.cachedDurationString = t, this.cachedDuration = e)), isNaN(e) && this.isLive() ? 1 / 0 : e
															}
															return 0
														}, t.prototype.getDuration = function() {
															return this.parsedDuration
														}, t.prototype.isLive = function() {
															return !!this.manifest && this.mpdExtractor.isLive()
														}, t.prototype.getAvailabilityStartTime = function() {
															return this.mpdExtractor.getAvailabilityStartTime()
														}, t.prototype.getAvailabilityEndTime = function() {
															return this.mpdExtractor.getAvailabilityEndTime()
														}, t.prototype.isAvailabilityEndTimeExceeded = function() {
															var e = this.getAvailabilityEndTime();
															return e && Date.now() > e.getTime()
														}, t.prototype.findPeriod = function(e) {
															return z(this.manifest, e)
														}, t.prototype.getAllPeriods = function() {
															return this.manifest && this.manifest.Period ? this.manifest.Period : []
														}, t.prototype.getPeriod = function(e) {
															return e ? this.findPeriod(e.periodId) : null
														}, t.prototype.isSmoothManifest = function() {
															return this.manifest.originalFormat && "smooth" === this.manifest.originalFormat.format
														}, t.prototype.isLanguageAvailable = function(e, t, n) {
															var r = z(this.manifest, e) || Q(this.manifest);
															return (0, k.findAdaptationSetsForMimeType)(r, t).some((function(e) {
																var t = e._lang && n.lang && e._lang === n.lang,
																	r = n.adaptationSetId && e._internalId.equals(n.adaptationSetId);
																return t || r
															}))
														}, t.prototype.findAdaptationSet = function(e, t, n, r) {
															void 0 === r && (r = !1);
															var i = z(this.manifest, e) || Q(this.manifest);
															if (void 0 !== i) {
																var a = this.sourceStore.getState(),
																	o = (0, k.findAdaptationSetOfMimeType)(t, i, {
																		sourceState: a,
																		langObj: n,
																		periodSwitched: r,
																		playbackConfig: this.context.config.playback
																	});
																return o || this.context.logger.debug("No AdaptationSet found to match mime type " + t), o
															}
														}, t.prototype.getManifest = function() {
															return this.manifest
														}, t.prototype.getAvailableAudio = function(e, t) {
															return this.mpdExtractor.getAvailableAudio(e, t)
														}, t.prototype.getAvailableVideo = function(e) {
															return this.mpdExtractor.getAvailableVideo(e)
														}, t.prototype.getAvailableSubtitles = function(e) {
															return this.mpdExtractor.getAvailableSubtitles(e)
														}, t.prototype.getClosedCaptionLabels = function(e) {
															return this.mpdExtractor.getClosedCaptionLabels(e)
														}, t.prototype.getVideoRepresentations = function(e) {
															return this.mpdExtractor.getVideoQualities(e)
														}, t.prototype.getAudioRepresentations = function(e) {
															return this.mpdExtractor.getAudioQualities(e)
														}, t.prototype.getPeriodDuration = function(e, t) {
															return this.mpdExtractor.getPeriodDuration(e, t || this.getManifest().Period)
														}, t.prototype.hasMultiplePeriods = function() {
															return this.manifest && this.manifest.Period && this.manifest.Period.length > 1
														}, t.prototype.hasSinglePeriod = function() {
															return this.manifest && this.manifest.Period && 1 === this.manifest.Period.length
														}, t.prototype.getTimeShiftBufferDepthSeconds = function() {
															return this.mpdExtractor.getTimeShiftBufferDepthSeconds()
														}, t.prototype.getRequestTimestamp = function() {
															return this.mpdExtractor.getRequestTimestamp()
														}, t.prototype.getMediaPresentationDuration = function() {
															var e = A.DurationConverter.getDurationInSec(this.manifest._mediaPresentationDuration);
															return isNaN(e) ? 0 : e
														}, t.prototype.calculateCumulativePeriodDuration = function(e) {
															for (var t = 0, n = 0, r = this.manifest.Period; n < r.length; n++) {
																var i = r[n];
																if (i._id === e) break;
																t += this.getPeriodDuration(i._id)
															}
															return this.isLive() ? (0, w.toSeconds)(Date.now() - this.getAvailabilityStartTime()) - t : t
														}, t.prototype.getMinimumUpdatePeriod = function() {
															return (0, P.getMinimumUpdatePeriodInSeconds)(this.manifest)
														}, t.prototype.getContentProtectionForAdaptationSet = function(e) {
															return P.MPDExtractor.getContentProtectionForAdaptationSet(e)
														}, t.prototype.getLangObjectFromAdaptationSet = function(e, t) {
															return this.mpdExtractor.getLangObjectFromAdaptationSet(e, t)
														}, t.prototype.toSubtitleTrack = function(e, t) {
															return this.mpdExtractor.toSubtitleTrack(e, t)
														}, t.prototype.getDRMCapabilitiesForPeriod = function(e) {
															return this.mpdExtractor.getDRMCapabilitiesForPeriod(e)
														}, t.prototype.hasManifestTypeChanged = function(e) {
															return !(!this.manifest || this.manifest._type === e || (this.context.logger.log("Manifest has just changed from " + this.manifest._type + " to " + e), 0))
														}, t.prototype.getPeriodIdForTime = function(e) {
															var t = this.manifest.Period;
															return 1 === t.length ? t[0]._id : F(t, e)._id
														}, t.prototype.dispose = function() {
															this.disposeMpdExtractor(), e.prototype.dispose.call(this)
														}, t.prototype.disposeMpdExtractor = function() {
															this._mpdExtractor = (0, c.dispose)(this._mpdExtractor)
														}, t.prototype.getTotalDurationFromManifest = function() {
															var e = this.getFirstPeriod();
															if (this.cachedDuration && e && e.start) return e.start + this.cachedDuration
														}, t.prototype.getTotalDuration = function() {
															if (this.isLive()) return this.getTotalDurationFromManifest() || 1 / 0;
															var e = this.getLastPeriod();
															return e ? (e.start || e._start && A.DurationConverter.getDurationInSec(e._start) || 0) + this.mpdExtractor.getPeriodDuration(e._id) : 0
														}, t.prototype.getFirstPeriod = function() {
															return Q(this.manifest)
														}, t.prototype.getLastPeriod = function() {
															if (this.manifest.Period && this.manifest.Period.length > 0) return this.manifest.Period[this.manifest.Period.length - 1]
														}, t.prototype.isLastPeriod = function(e) {
															var t = this.getLastPeriod();
															return !!t && e === t._id
														}, t.prototype.isManifestFinalized = function() {
															return !this.isLive()
														}, t.prototype.isFirstPeriod = function(e) {
															var t = this.getFirstPeriod();
															return !!t && t._id === e
														}, t.prototype.isHlsManifest = function() {
															return this.getManifest()._isHls
														}, t.prototype.getHlsTags = function() {
															if (!this.isHlsManifest()) return null;
															var e = E.ModuleManager.get(T.ModuleName.HLS).selectors,
																t = e.getHlsState;
															return (0, e.getCustomTags)(t(this.sourceStore.getState()))
														}, t.prototype.isMimeTypePartOfPeriod = function(e, t) {
															var n = this.getPeriod(new M.PeriodId(t));
															return (n ? n.AdaptationSet : []).some((function(t) {
																return t._mimeType === e
															}))
														}, t.prototype.getNextPeriod = function(e) {
															if (this.manifest)
																for (var t = this.findPeriod(e), n = this.manifest.Period.indexOf(t) + 1; n < this.manifest.Period.length; n++) {
																	var r = this.manifest.Period[n];
																	if (r && !r.droppedOut) return r
																}
															return null
														}, t.prototype.getEventStreamEvents = function(e) {
															return this.mpdExtractor.getEventStreamEvents(e)
														}, t.prototype.hasAdaptationSets = function(e) {
															var t = this.manifest;
															if (t && t.Period) {
																var n = t.Period.find((function(t) {
																	return t._id === e
																}));
																return Boolean(n && n.AdaptationSet)
															}
															return !1
														}, t.prototype.synchronizeWithTimeserver = function(e) {
															var t = this,
																n = [],
																r = 0;
															if (this.synchronizedTimeService) {
																var i = this.context.config && this.context.config.live;
																return i && i.synchronization && i.synchronization.length > 0 ? n = i.synchronization.map((function(e) {
																	switch (e.method) {
																		case d.LiveSynchronizationMethod.HttpHead:
																			return {
																				schemeIdUri: "urn:mpeg:dash:utc:http-head:2014", value: e.serverUrl
																			};
																		case d.LiveSynchronizationMethod.HttpXsDate:
																			return {
																				schemeIdUri: "urn:mpeg:dash:utc:http-xsdate:2014", value: e.serverUrl
																			};
																		case d.LiveSynchronizationMethod.HttpIso:
																			return {
																				schemeIdUri: "urn:mpeg:dash:utc:http-iso:2014", value: e.serverUrl
																			};
																		default:
																			return t.context.logger.debug("No valid time synchronization configuration entry provided"), null
																	}
																})).filter((function(e) {
																	return null !== e
																})) : e && e.UTCTiming && e.UTCTiming.length > 0 && (n = n.concat(e.UTCTiming), r = e._downloadTime), this.synchronizedTimeService.synchronizeWithServer(n, r).then((function(e) {
																	t.context.logger.debug("successfully synchronized to server time - drift: ".concat((0, w.toSeconds)(e), "s"))
																})).catch((function() {
																	t.context.logger.debug("Player clock synchronization failed")
																}))
															}
															return Promise.resolve()
														}, t.prototype.getAdaptationSet = function(e) {
															if (!e) return null;
															var t = this.getPeriod(e);
															return t && t.AdaptationSet ? t.AdaptationSet.find((function(t) {
																return t._internalId.equals(e)
															})) : null
														}, t.prototype.getRepresentationById = function(e) {
															var t = this.getAdaptationSet(e);
															return t ? H(t.Representation, e) : null
														}, t.prototype.representationExists = function(e) {
															return Boolean(this.getRepresentationById(e))
														}, t.prototype.getLowestBandwidthOfAdaptationSet = function(e) {
															return this.findLowestPossibleBandwidth(e, -1 / 0)
														}, t.prototype.findLowestPossibleBandwidth = function(e, t) {
															void 0 === t && (t = -1 / 0);
															var n = this.getAdaptationSet(e);
															return n ? U(n.Representation, t) : 1 / 0
														}, t.prototype.getMatchingRepresentationByBandwidth = function(e, t, n) {
															void 0 === n && (n = function() {
																return !0
															});
															var r = this.getAdaptationSet(e);
															return r ? j(r.Representation, t, n) : null
														}, t.prototype.getAllRepresentations = function() {
															return this.getAllPeriods().flatMap((function(e) {
																var t;
																return (null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.flatMap((function(e) {
																	return e.Representation
																}))) || []
															}))
														}, t.prototype.getRepresentation = function(e, t) {
															return this.getRepresentationById(new I.RepresentationId(e, t))
														}, t.prototype.getAllAdaptationSets = function() {
															return this.getAllPeriods().flatMap((function(e) {
																return e.AdaptationSet
															}))
														}, t.prototype.getAllImageAdaptationSets = function() {
															return this.getAllAdaptationSets().filter((function(e) {
																return e._mimeType.includes("image") && "image" === e._contentType
															}))
														}, t.prototype.getAllDashThumbnailSources = function() {
															var e = this;
															return this.getAllImageAdaptationSets().map((function(t) {
																var n = e.findPeriod(t._internalId.periodId);
																return {
																	adaptationSet: t,
																	timing: {
																		startTime: n.start,
																		duration: n.duration
																	}
																}
															}))
														}, t.prototype.getAdaptationSetIndex = function(e) {
															var t = this.findPeriod(e.periodId);
															return t && t.AdaptationSet && 0 !== t.AdaptationSet.length ? t.AdaptationSet.findIndex((function(t) {
																return t._internalId.equals(e)
															})) : -1
														}, t.prototype.markSegmentAsDownloaded = function(e, t) {
															this.sourceStore.dispatch((0, C.markSegmentAsDownloadedAction)(e, t))
														}, t.prototype.getAvailableBaseURLsForRepresentation = function(e) {
															var t = this.getAdaptationSet(e);
															if (void 0 === e || !t) return [];
															for (var n = [], r = t.Representation, i = 0; i < r.length; i++)
																if (r[i]._internalId.equals(e) && r[i].BaseURL && r[i].BaseURL.length > 0) {
																	n = r[i].BaseURL;
																	break
																} var a = [];
															for (i = 0; i < n.length; i++) a.push((0, m.forceReallocation)(n[i].url));
															return a
														}, t.prototype.findDownloadedHlsRepresentation = function(e) {
															var t = this.getAdaptationSet(e);
															return t ? t.Representation.find((function(e) {
																return e._hls && Boolean(e._hls.requestTimestamp)
															})) : null
														}, t.prototype.isManifestFetchRequired = function(e) {
															if (!this.isHlsManifest()) return !1;
															var t = Date.now(),
																n = this.getRepresentationById(e),
																r = Boolean(n.SegmentList) && n.SegmentList.length > 0 && Boolean(n.SegmentList[0].SegmentURL),
																i = r ? n.SegmentList[0].SegmentURL.length : 0,
																a = !r || i > 0,
																o = t - (n._requestTimestamp || t),
																s = this.isLive() && o >= this.getMinimumUpdatePeriod();
															return !a || s
														}, t.prototype.hasSelfInitialisingSegments = function() {
															return this.manifest.Period.map((function(e) {
																return e.AdaptationSet
															})).reduce((function(e, t) {
																return e.concat(t)
															}), []).map((function(e) {
																return e.Representation
															})).reduce((function(e, t) {
																return e.concat(t)
															}), []).some((function(e) {
																var t = Boolean(e.SegmentList) && e.SegmentList.length > 0 ? e.SegmentList : [],
																	n = Boolean(e.SegmentBase) && e.SegmentBase.length > 0,
																	r = Boolean(e.SegmentTemplate) && e.SegmentTemplate.length > 0 ? e.SegmentTemplate : [];
																return !(e.init || n || t.some((function(e) {
																	return Boolean(e.init)
																})) || r.some((function(e) {
																	return Boolean(e._initialization)
																})))
															}))
														}, t.prototype.getAvailabilityTimeComplete = function(e) {
															var t = this.getRepresentationById(e),
																n = t.SegmentList || t.SegmentBase || t.SegmentTemplate;
															return !(n && n[0] && n[0]._availabilityTimeComplete) || JSON.parse(n[0]._availabilityTimeComplete)
														}, t.prototype.isSegmentInfoLoaded = function(e) {
															var t = this.getRepresentationById(e);
															return !(!t || !t.segmentIndex && !t.segmentIndexParsingError)
														}, t.prototype.isPrecedingPeriod = function(e, t) {
															if (!(e && t && this.manifest && this.manifest.Period)) return !1;
															var n = this.manifest.Period.findIndex((function(t) {
																	return t._id === e
																})),
																r = this.manifest.Period.findIndex((function(e) {
																	return e._id === t
																}));
															return n >= 0 && r >= 0 && r < n
														}, t.prototype.getMaxSegmentDuration = function() {
															var e = A.DurationConverter.getDurationInSec(this.manifest._maxSegmentDuration);
															return isNaN(e) ? 0 : e
														}, t.prototype.getDesiredDistanceToLiveEdge = function() {
															return Boolean(this.context.config.live && this.context.config.live.lowLatency) ? this.context.config.live.lowLatency.targetLatency : this.context.bufferSettings.getForwardTargetLevel() + this.settings.LIVE_EDGE_DISTANCE
														}, t.prototype.hasSuggestedStartPosition = function() {
															return this.manifest.hasOwnProperty("_startOffset")
														}, t.prototype.getVodStartOffset = function() {
															return Math.max(0, Math.min(this.manifest._startOffset, this.getDuration() - this.settings.SEEK_TO_END_OFFSET))
														}, t.prototype.getLiveStartOffset = function(e) {
															void 0 === e && (e = !0);
															var t = this.manifest._startOffset;
															return t -= Math.abs(this.getTimeShiftBufferDepthSeconds()), e && (t += this.getDesiredDistanceToLiveEdge(), t = Math.min(0, t)), t
														}, t.prototype.getPublishTime = function() {
															return this.manifest._publishTime
														}, t.prototype.initSegmentStartTimesFromReferenceSegment = function(e) {
															var t = E.ModuleManager.get(T.ModuleName.HLS);
															this.sourceStore.dispatch(t.actions.initSegmentStartTimesFromReferenceSegment(e))
														}, t.prototype.initializeSegmentStartTimesFromStart = function(e) {
															var t = E.ModuleManager.get(T.ModuleName.HLS),
																n = t.selectors,
																r = n.getHlsState,
																i = n.getPlaylistStartTime,
																a = n.hasPlaylist,
																o = r(this.sourceStore.getState());
															if (a(o, e)) {
																var s = i(o, e);
																this.sourceStore.dispatch(t.actions.initSegmentStartTimes(e, 0, s))
															}
														}, t.prototype.hasSegmentStartTimeForHlsRepresentation = function(e) {
															var t = E.ModuleManager.get(T.ModuleName.HLS).selectors,
																n = t.getHlsState;
															return (0, t.hasSegmentStartTimesForPlaylist)(n(this.sourceStore.getState()), e)
														}, t.prototype.getStartTimeForHlsSegment = function(e, t) {
															var n = E.ModuleManager.get(T.ModuleName.HLS).selectors,
																r = n.getHlsState;
															return (0, n.getStartTimeForSegment)(r(this.sourceStore.getState()), e, t)
														}, t.prototype.isTimeNearPeriodEnd = function(e, t) {
															for (var n = this.getAllPeriods(), r = 0, i = n; r < i.length; r++) {
																var a = i[r],
																	o = a.start,
																	s = o + this.getPeriodDuration(a._id, n);
																if (e >= o && e <= s) return s - e <= t
															}
															return !1
														}, t
													}(b.Suspendable);

												function B(e) {
													var t;
													return (e = i({}, e)).Period = null === (t = e.Period) || void 0 === t ? void 0 : t.map((function(e) {
														var t;
														return i(i({}, e), {
															AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(t, n) {
																var r, a = (0, O.createAdaptationSetIdFromMimeTypeAndIndex)(e._id, t._mimeType, n);
																return i(i({}, t), {
																	_internalId: a,
																	_periodId: e._id,
																	Representation: null === (r = t.Representation) || void 0 === r ? void 0 : r.map((function(e) {
																		return i(i({}, e), {
																			_internalId: new I.RepresentationId(a, e._id)
																		})
																	}))
																})
															}))
														})
													})), e
												}

												function N(e) {
													if (E.ModuleManager.has(T.ModuleName.DRM)) {
														var t = E.ModuleManager.get(T.ModuleName.DRM).ContentProtectionHelper.getFirstKeyId;
														R(e, (function(e) {
															for (var n = t(e.ContentProtection), r = 0; e.Representation && r < e.Representation.length; r++) {
																var i = e.Representation[r];
																(n || i.ContentProtection) && (i.associatedKid = i.ContentProtection && t(i.ContentProtection) || n)
															}
														}))
													}
												}

												function R(e, t) {
													for (var n = 0; e.Period && n < e.Period.length; n++)
														for (var r = e.Period[n], i = 0; r.AdaptationSet && i < r.AdaptationSet.length; i++) t(r.AdaptationSet[i])
												}

												function F(e, t) {
													if (!e || !e.length) return null;
													if (t < e[0].start) return e[0];
													var n = e[e.length - 1];
													return t >= n.start ? n : function(e, t) {
														for (var n = 0; n < e.length - 1; n++) {
															var r = e[n].start + e[n].duration;
															if (t >= e[n].start && t < r) return e[n];
															if (t >= r && t < e[n + 1].start) return e[n + 1]
														}
													}(e, t) || n
												}

												function U(e, t) {
													return void 0 === t && (t = -1 / 0), e.reduce((function(e, n) {
														return n._bandwidth >= t ? Math.min(e, n._bandwidth) : e
													}), 1 / 0)
												}

												function j(e, t, n) {
													void 0 === e && (e = []), void 0 === n && (n = function() {
														return !0
													});
													var r = e.filter(n),
														i = null,
														a = -1 / 0;
													return r.forEach((function(e) {
														e._bandwidth > a && e._bandwidth <= t && (a = e._bandwidth, i = e)
													})), i || r[0]
												}

												function H(e, t) {
													return void 0 === e && (e = []), e.find((function(e) {
														return e._internalId.equals(t)
													}))
												}

												function Y(e, t, n) {
													var r = n ? "videoCodecPriority" : "audioCodecPriority";
													return (null == t ? void 0 : t.options) && t.options[r] ? t.options[r] : e.playback && e.playback[r] ? e.playback && e.playback[r] : []
												}

												function V(e, t) {
													return {
														video: Y(e, t, !0),
														audio: Y(e, t, !1)
													}
												}

												function z(e, t) {
													return e && t && e.Period ? e.Period.find((function(e) {
														return e._id === t
													})) : null
												}

												function Q(e) {
													return null == e ? void 0 : e.Period[0]
												}

												function G(e) {
													var t = (0, x.getCodecsFromAdaptationSet)(e);
													if (!t || 0 === t.length) return null;
													var n = y.CodecStringHelper.extractCodecStrings(t),
														r = e._mimeType.split("/")[0];
													return n[r] ? y.CodecStringHelper.extractCodec(n[r]) : null
												}
												t.ManifestService = D, t.initializeInternalIds = B, t.addDrmKidsToRepresentations = N, t.iterateAdaptationSets = R, t.getNearestPeriodForTime = F, t.findLowestPossibleBandwidthFromRepresentations = U, t.getMatchingRepresentationByBandwidth = j, t.getRepresentationById = H, t.getCodecPriorities = V, t.getCodecOfAdaptationSetMimeType = G
											},
											64324: function(e, t, n) {
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
													}(),
													i = this && this.__decorate || function(e, t, n, r) {
														var i, a = arguments.length,
															o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
														if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
														else
															for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
														return a > 3 && o && Object.defineProperty(t, n, o), o
													};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.ManifestUpdateScheduler = void 0;
												var a = n(59534),
													o = n(52228),
													s = n(95212),
													u = n(28803),
													c = n(96036),
													l = n(80815),
													f = n(10559),
													d = n(46724),
													h = n(33704),
													p = function(e) {
														function t(t, n) {
															var r = e.call(this, {
																onSuspend: function() {
																	return r.onSuspend()
																},
																onRestore: function() {
																	return r.onRestore()
																}
															}) || this;
															r.initiated = !1, r.trackUpdaters = {}, r.selectActiveTracks = function(e) {
																return null == e ? void 0 : e.activeTracks
															}, r.handleActiveTracksChange = function(e) {
																e && r.manifestService.isHlsManifest() && r.updateTracks(e)
															}, r.selectPlaybackState = function(e) {
																return e.player && e.player.playbackState
															}, r.handlePlaybackStateChange = function(e) {
																e && (e === s.PlaybackState.Paused ? r.stop() : e === s.PlaybackState.Playing && r.start())
															}, r.updatedRepresentation = function(e) {
																r.updateAdaptationSetInManifest(e), r.manifestService.updateManifest(r.manifestService.getManifest()).catch((function() {
																	r.logger.debug("Updating the manifest failed")
																}))
															}, r.representationUpdateError = function(e) {
																r.logger.debug("Rejection while updating the representation", e)
															}, r.manifestDownloadError = function() {
																r.logger.debug("Error while loading manifest")
															}, r.context = t, r.sourceContext = n;
															var i = r.sourceContext.sourceIdentifier;
															return r.manifestService = t.serviceManager.get(a.ServiceName.ManifestService, i), r.manifestLoader = t.serviceManager.get(a.ServiceName.ManifestLoadingService, i), r.store = t.store, r.sourceStore = t.serviceManager.get(a.ServiceName.SourceStoreService, i), r.eventHandler = t.eventHandler, r.logger = t.logger, r.unsubscribeFromActiveTrackChanges = r.subscribeToActiveTrackChanges(), r.unsubscribeFromPausePlayingChanges = r.subscribeToPausePlayingChanges(t), r
														}
														return r(t, e), t.prototype.subscribeToActiveTrackChanges = function() {
															var e = this;
															return (0, u.subscribe)(this.sourceStore)((function(t) {
																return e.selectActiveTracks(t)
															}), this.handleActiveTracksChange)
														}, t.prototype.updateTracks = function(e) {
															this.processNewActiveTrack(e), this.removeDeactivatedTrackUpdaters(e)
														}, t.prototype.processNewActiveTrack = function(e) {
															var t = this;
															Object.keys(e).filter((function(t) {
																return e[t].selectedRepresentationId
															})).forEach((function(n) {
																t.updateTrackUpdater(e[n].selectedRepresentationId)
															}))
														}, t.prototype.removeDeactivatedTrackUpdaters = function(e) {
															var t = this;
															Object.keys(this.trackUpdaters).filter((function(t) {
																return !Object.keys(e).includes(t)
															})).forEach((function(e) {
																t.trackUpdaters[e].stop(), delete t.trackUpdaters[e]
															}))
														}, t.prototype.subscribeToPausePlayingChanges = function(e) {
															return (0, u.subscribe)(this.store)(this.selectPlaybackState, this.handlePlaybackStateChange, (function() {
																return e.settings.STOP_DOWNLOAD_ON_PAUSE
															}))
														}, t.prototype.updateTrackUpdater = function(e) {
															var t = this.manifestService.getRepresentationById(e),
																n = e.adaptationSetId;
															this.trackUpdaters[n] ? this.trackUpdaters[n].getRepresentation()._internalId.equals(e) || this.trackUpdaters[n].setRepresentation(t) : this.trackUpdaters[t._internalId.adaptationSetId] = this.initializeTrackUpdater(t)
														}, t.prototype.updateLinkedRepresentation = function(e) {
															var t = this.trackUpdaters[e._internalId.adaptationSetId];
															null == t || t.setRepresentation(e)
														}, t.prototype.initializeTrackUpdater = function(e) {
															var t = new h.RepresentationUpdater(e, this.manifestLoader, {
																success: this.updatedRepresentation,
																error: this.representationUpdateError
															});
															return t.start(), t
														}, t.prototype.updateAdaptationSetInManifest = function(e) {
															this.sourceStore.dispatch((0, f.updateRepresentationAction)(e))
														}, t.prototype.init = function(e) {
															var t = this;
															return this.manifestLoader.load(e).then((function(e) {
																return t.manifestService.updateManifest(e).then((function() {
																	t.initiated = !0, t.manifestService.isLive() && !t.manifestService.isHlsManifest() && t.scheduleManifestReloading(e)
																}))
															})).catch((function() {
																return Promise.reject("Could not load manifest")
															}))
														}, t.prototype.scheduleManifestReloading = function(e) {
															var t = this;
															this.manifestUpdater = new d.ManifestUpdater(this.manifestLoader, e, {
																success: function(e) {
																	return t.manifestService.updateManifest(e)
																},
																error: this.manifestDownloadError
															}), this.manifestUpdater.start()
														}, t.prototype.waitForRepUpdate = function(e) {
															return 0 === Object.keys(this.trackUpdaters).length || function(e) {
																var t;
																return e._requestTimestamp + (0, l.toMilliSeconds)(null !== (t = e._updateInterval) && void 0 !== t ? t : 1 / 0) > Date.now()
															}(this.manifestService.getRepresentationById(e)) ? Promise.resolve() : this.trackUpdaters[e.adaptationSetId].updateRepresentation().then((function() {}))
														}, t.prototype.stop = function() {
															Object.values(this.trackUpdaters).forEach((function(e) {
																return e.stop()
															})), this.manifestUpdater && this.manifestUpdater.stop()
														}, t.prototype.start = function() {
															Object.values(this.trackUpdaters).filter((function(e) {
																return e.isStopped
															})).forEach((function(e) {
																e.start()
															})), this.manifestUpdater && this.manifestUpdater.isStopped && this.manifestUpdater.start()
														}, t.prototype.onSuspend = function() {
															this.unsubscribeFromPausePlayingChanges()
														}, t.prototype.onRestore = function() {
															this.unsubscribeFromPausePlayingChanges = this.subscribeToPausePlayingChanges(this.context)
														}, t.prototype.isInitiated = function() {
															return this.initiated
														}, t.prototype.dispose = function() {
															this.unsubscribeFromActiveTrackChanges(), this.unsubscribeFromPausePlayingChanges(), this.stop(), this.manifestUpdater = null, this.trackUpdaters = null, e.prototype.dispose.call(this)
														}, i([(0, o.trackPerformance)("ManifestUpdateScheduler.init", !0)], t.prototype, "init", null), t
													}(c.Suspendable);
												t.ManifestUpdateScheduler = p
											},
											46724: function(e, t, n) {
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
												}), t.ManifestUpdater = void 0;
												var i = n(38426),
													a = n(83576),
													o = function(e) {
														function t(t, n, r) {
															var i = e.call(this, r) || this;
															return i.manifestLoader = t, i.manifest = n, i
														}
														return r(t, e), t.prototype.getUpdatedManifest = function() {
															return this.getPayload()
														}, t.prototype.update = function() {
															var e = this;
															return this.manifestLoader.load(this.manifest._currentLoadingUrl).then((function(t) {
																return e.manifest = t, t
															}))
														}, t.prototype.getReloadIntervalInSeconds = function() {
															return (0, a.getMinimumUpdatePeriodInSeconds)(this.manifest)
														}, t.prototype.getLastReloadTimestamp = function() {
															return this.manifest._requestTimestamp
														}, t
													}(i.AbstractUpdater);
												t.ManifestUpdater = o
											},
											32765: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MediaPlayerManifestApiFactory = void 0;
												var r = n(59534),
													i = n(59574),
													a = n(94112),
													o = function() {
														function e() {}
														return e.create = function(t, n) {
															var i = n.serviceManager.get(r.ServiceName.ManifestService, n.sourceContext.sourceIdentifier);
															return new function() {
																i.isHlsManifest() ? this.hls = e.createHlsApi(i) : i.isSmoothManifest() || (this.dash = e.createDashApi(t, i))
															}
														}, e.createDashApi = function(t, n) {
															return new(function() {
																function r() {}
																return r.prototype.getPeriod = function() {
																	var r = n.getPeriodIdForTime(t.getCurrentTime()),
																		i = n.getPeriod(new a.PeriodId(r));
																	return i ? e.createPeriodApi(n, i) : null
																}, r.prototype.listPeriods = function() {
																	return n.getAllPeriods().map((function(t) {
																		return e.createPeriodApi(n, t)
																	}))
																}, r
															}())
														}, e.createHlsApi = function(t) {
															return new(function() {
																function n() {
																	this.properties = t.getHlsTags()
																}
																return n.prototype.getVideoTracks = function() {
																	return e.getVideoTracks(t, t.getFirstPeriod()._id)
																}, n.prototype.getAudioTracks = function() {
																	return e.getAudioTracks(t, t.getFirstPeriod()._id)
																}, n.prototype.getTextTracks = function() {
																	return e.getTextTracks(t, t.getFirstPeriod()._id)
																}, n
															}())
														}, e.createPeriodApi = function(t, n) {
															return new(function() {
																function r() {
																	this.id = n._id, this.properties = {}, n._id && (this.properties.id = n._id), n._start && (this.properties.start = n._start), n._duration && (this.properties.duration = n._duration)
																}
																return r.prototype.getVideoTracks = function() {
																	return e.getVideoTracks(t, this.id)
																}, r.prototype.getAudioTracks = function() {
																	return e.getAudioTracks(t, this.id)
																}, r.prototype.getTextTracks = function() {
																	return e.getTextTracks(t, this.id)
																}, r.prototype.getMetadata = function() {
																	return e.getMetadata(t, this.id)
																}, r
															}())
														}, e.getAudioTracks = function(t, n) {
															return t.getAvailableAudio(n, !1).map((function(r) {
																var i = {
																	id: r.id,
																	label: r.label,
																	lang: r.lang,
																	getQualities: function() {
																		return e.getAudioQualities(t, n, r.id)
																	}
																};
																return r.role && (i.role = r.role), i
															}))
														}, e.getVideoTracks = function(t, n) {
															return t.getAvailableVideo(n).map((function(r) {
																var i = {
																	id: r.id,
																	label: r.label,
																	getQualities: function() {
																		return e.getVideoQualities(t, n)
																	}
																};
																return r.role && (i.role = r.role), i
															}))
														}, e.getTextTracks = function(e, t) {
															return e.getAvailableSubtitles(t)
														}, e.getMetadata = function(e, t) {
															return e.getEventStreamEvents(e.findPeriod(t)).map((function(e) {
																return {
																	type: i.MetadataType.EVENT_STREAM,
																	payload: e.data,
																	start: e.startTime,
																	end: e.endTime
																}
															}))
														}, e.getAudioQualities = function(e, t, n) {
															return e.getAudioRepresentations(t)[n] || []
														}, e.getVideoQualities = function(e, t) {
															return e.getVideoRepresentations(t)
														}, e
													}();
												t.MediaPlayerManifestApiFactory = o
											},
											94112: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.PeriodId = void 0;
												var n = function() {
													function e(e) {
														this._periodId = e
													}
													return Object.defineProperty(e.prototype, "periodId", {
														get: function() {
															return this._periodId
														},
														enumerable: !1,
														configurable: !0
													}), e.prototype.equals = function(e) {
														return null != e && this.periodId === e.periodId
													}, e.prototype.key = function() {
														return this.periodId
													}, e
												}();
												t.PeriodId = n
											},
											63080: function(e, t, n) {
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
												}), t.RepresentationId = void 0;
												var i = n(71278),
													a = function(e) {
														function t(t, n) {
															var r = e.call(this, t.periodId, t.adaptationSetId) || this;
															return r._representationId = n, r
														}
														return r(t, e), Object.defineProperty(t.prototype, "representationId", {
															get: function() {
																return this._representationId
															},
															enumerable: !1,
															configurable: !0
														}), t.prototype.equals = function(t) {
															return e.prototype.equals.call(this, t) && this.representationId === (null == t ? void 0 : t.representationId)
														}, t.prototype.key = function() {
															return e.prototype.key.call(this) + "-" + this.representationId
														}, t.from = function(e) {
															return e._representationId && e._adaptationSetId && e._periodId ? new t(new i.AdaptationSetId(e._periodId, e._adaptationSetId), e._representationId) : null
														}, t
													}(i.AdaptationSetId);
												t.RepresentationId = a
											},
											33704: function(e, t, n) {
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
												}), t.RepresentationUpdater = void 0;
												var i = n(38426),
													a = function(e) {
														function t(t, n, r) {
															var i = e.call(this, r) || this;
															return i.representation = t, i.manifestLoader = n, i
														}
														return r(t, e), t.prototype.getRepresentation = function() {
															return this.representation
														}, t.prototype.setRepresentation = function(e) {
															this.representation._internalId.equals(e._internalId) || this.cancel(), this.representation = e, this.scheduleUpdate()
														}, t.prototype.updateRepresentation = function() {
															return this.getPayload()
														}, t.prototype.update = function() {
															var e = this;
															return this.manifestLoader.updateRepresentation(this.representation).then((function(t) {
																if (e.representation._id !== t._id) throw i.REPRESENTATION_UPDATE_CANCEL;
																return e.representation = t, t
															}))
														}, t.prototype.getReloadIntervalInSeconds = function() {
															var e;
															return this.representation._requestTimestamp ? null !== (e = this.representation._updateInterval) && void 0 !== e ? e : 1 / 0 : 0
														}, t.prototype.getLastReloadTimestamp = function() {
															return this.representation._requestTimestamp ? this.representation._requestTimestamp : 0
														}, t
													}(i.AbstractUpdater);
												t.RepresentationUpdater = a
											},
											30828: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.AdRestorationOptimizationService = void 0;
												var r = n(59574),
													i = n(22221),
													a = n(45366),
													o = n(82072),
													s = n(43233),
													u = n(59534),
													c = n(17394),
													l = function() {
														function e() {
															var e = this;
															this.startOptimization = function() {
																(0, o.isContextAvailable)(e.context) && e.context.eventHandler.off(r.PlayerEvent.AdStarted, e.startOptimization), e.prefetchContentSegments(e.segmentInfosToPrefetch), e.segmentInfosToPrefetch = []
															}
														}
														return e.prototype.updatePlayerContext = function(e) {
															this.mimeTypes = [], this.context = e, this.segmentInfoService = e.segmentInfoService, this.segmentPrefetchingService = e.segmentPrefetchingService
														}, e.prototype.optimizeRestorationAfterUpcomingAdBreak = function() {
															var e, t, n = this,
																i = null === (t = null === (e = this.getSourceState()) || void 0 === e ? void 0 : e.getState()) || void 0 === t ? void 0 : t.playback;
															if (!(0, o.isContextAvailable)(this.context) || !this.segmentInfoService || !i) return Promise.reject("Could not get playback state and/or SegmentInfoService");
															var a = (0, c.getPlaybackPosition)(i);
															return isNaN(a) ? Promise.reject("Could not get playback position") : this.segmentInfoService.getSegmentInfos(a, this.context.settings.AD_RESTORATION_SEGMENT_PREFETCHING_DURATION).then((function(e) {
																n.addCodecInfo(e), n.segmentInfosToPrefetch = e, (0, o.isContextAvailable)(n.context) && n.context.eventHandler && n.context.eventHandler.on(r.PlayerEvent.AdStarted, n.startOptimization)
															}))
														}, e.prototype.getSourceState = function() {
															return (0, o.isContextAvailable)(this.context) ? this.context.serviceManager.get(u.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier) : void 0
														}, e.prototype.addCodecInfo = function(e) {
															var t = (0, o.isContextAvailable)(this.context) ? this.context.sourceContext.sourceIdentifier : void 0,
																n = t ? this.context.serviceManager.get(u.ServiceName.ManifestService, t) : void 0;
															n && e.forEach((function(e) {
																var t = n.getAdaptationSet(e.internalRepresentationId);
																t && (e.codecs = (0, s.getCodecsFromAdaptationSet)(t))
															}))
														}, e.prototype.prefetchContentSegments = function(e) {
															var t;
															this.mimeTypes = e.reduce((function(e, t) {
																return t.mimeType && !e.includes(t.mimeType) && e.push(t.mimeType), e
															}), []), this.maybeCreateMetrics(), null === (t = this.segmentPrefetchingService) || void 0 === t || t.fetchAll(e)
														}, e.prototype.findMatchingSegmentInfo = function(e, t) {
															var n, r = null === (n = this.segmentPrefetchingService) || void 0 === n ? void 0 : n.getPrefetchedSegments().get(e);
															if (r) return f(r, (function(e) {
																return e.segmentInfo
															})).find((function(e) {
																if (!t || null == t.segmentNumber || null == t.startTime || null == t.duration) return !0;
																var n = t.segmentNumber + 1,
																	r = Math.round(t.startTime + t.duration),
																	i = e.segmentNumber === n,
																	a = null != e.startTime && Math.round(e.startTime) === r;
																return i || a
															}))
														}, e.prototype.hasPrefetchedSegment = function(e, t) {
															var n;
															if ((0, o.isContextAvailable)(this.context) && this.context.sourceContext.isAd) return !1;
															var r = e;
															return "string" == typeof e && (r = this.findMatchingSegmentInfo(e, t)), !(!r || "string" == typeof r) && Boolean(null === (n = this.segmentPrefetchingService) || void 0 === n ? void 0 : n.getPrefetchedSegment(r))
														}, e.prototype.getPrefetchedSegment = function(e, t) {
															var n = this;
															if (!this.segmentPrefetchingService || !e.mimeType) return null;
															var r = this.segmentPrefetchingService.getPrefetchedSegment(e);
															return this.segmentPrefetchingService.clearPrefetchingQueue(e.mimeType), r && (this.segmentPrefetchingService.removePrefetchedSegment(e), this.segmentPrefetchingService.setShouldDownloadBeCancelledCallback(e.mimeType, t), r.finally((function() {
																n.segmentPrefetchingService && e.mimeType && n.segmentPrefetchingService.removeShouldDownloadBeCancelledCallback(e.mimeType)
															}))), r
														}, e.prototype.getRepresentationForPrefetchedSegment = function(e) {
															var t, n = null === (t = this.segmentPrefetchingService) || void 0 === t ? void 0 : t.getPrefetchedSegments().get(e);
															if (n) return f(n, (function(e) {
																return e.segmentInfo.internalRepresentationId
															})).find(Boolean)
														}, e.prototype.maybeCreateMetrics = function() {
															var e = this;
															if ((0, o.isContextAvailable)(this.context)) {
																var t = this.context.store.getState();
																if (0 !== this.mimeTypes.length && t) {
																	var n = (0, a.getMetricsState)(t);
																	this.mimeTypes.forEach((function(t) {
																		n[t] || e.context.store.dispatch((0, i.initializeMetricsForMimeType)(t, e.context.settings))
																	}))
																}
															}
														}, e.prototype.dispose = function() {
															(0, o.isContextAvailable)(this.context) && this.context.eventHandler.off(r.PlayerEvent.AdStarted, this.startOptimization), this.segmentInfosToPrefetch = [], this.segmentInfoService = void 0, this.segmentPrefetchingService = void 0
														}, e
													}();

												function f(e, t) {
													var n = [];
													return e.forEach((function(e) {
														return n.push(t(e))
													})), n
												}
												t.AdRestorationOptimizationService = l
											},
											3072: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.resolveContainerFormat = void 0;
												var r = n(50163),
													i = n(43068),
													a = n(83024),
													o = n(8073),
													s = n(92977);

												function u(e) {
													var t = (0, s.extractContainerFormat)(e);
													return t ? {
														source: t,
														target: t
													} : void 0
												}
												t.resolveContainerFormat = function(e, t, n) {
													return n ? function(e, t) {
														var n, s = i.ModuleManager.has(a.ModuleName.ContainerMP4),
															c = null === (n = i.ModuleManager.get(a.ModuleName.ContainerMP4, !1)) || void 0 === n ? void 0 : n.isValidMp4;
														return s && c(t) ? {
															source: o.ContainerFormat.MP4,
															target: o.ContainerFormat.MP4
														} : r.MimeTypeHelper.isSubtitle(e) ? u(e) : {
															source: o.ContainerFormat.TS,
															target: o.ContainerFormat.MP4
														}
													}(e, t) : u(e)
												}
											},
											27999: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.FetchController = void 0;
												var i, a = n(49520),
													o = n(40237),
													s = n(41609),
													u = n(81028),
													c = n(27005);
												! function(e) {
													e.User = "user", e.Timeout = "timeout"
												}(i || (i = {}));
												var l = function() {
													function e(e, t, n) {
														var i = this;
														this.setProgressListener = function(e) {
															i.progressListener = e
														}, this.onProgress = function(e, t) {
															i.progressListener && (i.timing.progressTimestamp = o.TimingUtil.getHiResTimestamp(), i.progress.loadedBytes = t, i.progress.totalBytes = e, i.progressListener(r({}, i.progress)))
														}, this.onSuccess = function() {
															clearTimeout(i.cancelTimeout)
														}, this.logger = e.logger, this.timeout = n, this.request = t, this.fetching = new u.Deferred, this.bytesReceivedCount = 0, this.timing = {
															sendTimestamp: -1,
															openedTimestamp: -1,
															headersReceivedTimestamp: -1,
															progressTimestamp: -1,
															doneTimestamp: -1
														}, this.abortController = new AbortController, this.progress = {
															totalBytes: -1,
															loadedBytes: -1,
															url: t.url,
															responseTiming: this.timing
														}
													}
													return e.prototype.getResponse = function() {
														return this.load(this.request), this.fetching.promise
													}, e.prototype.cancel = function(e) {
														void 0 === e && (e = i.User), clearTimeout(this.cancelTimeout), this.cancellationReason = e, this.abortController.abort()
													}, e.prototype.load = function(e) {
														var t = this,
															n = {
																method: e.method,
																headers: new Headers(e.headers),
																credentials: e.credentials,
																signal: this.abortController ? this.abortController.signal : void 0
															};
														this.timing.sendTimestamp = o.TimingUtil.getHiResTimestamp(), fetch(e.url, n).then((function(e) {
															if (t.timing.headersReceivedTimestamp = o.TimingUtil.getHiResTimestamp(), t.progressListener(r({}, t.progress)), e.ok) {
																var n = t.createHttpResponse(e);
																n.body = t.readResponse(e), t.fetching.resolve(n)
															} else t.onError({
																error: a.RequestError.Failed,
																response: t.createHttpResponse(e)
															})
														})).catch((function(e) {
															t.onError({
																error: t.getRequestError(e)
															})
														})), this.timing.openedTimestamp = o.TimingUtil.getHiResTimestamp(), this.progressListener(r({}, this.progress)), this.cancelTimeout = setTimeout((function() {
															return t.cancel(i.Timeout)
														}), this.timeout)
													}, e.prototype.getResponseHeaders = function(e) {
														var t = {};
														return e.headers.forEach((function(e, n) {
															return t[n] = e
														})), t
													}, e.prototype.createHttpResponse = function(e) {
														return {
															request: this.request,
															url: e.url,
															headers: this.getResponseHeaders(e),
															status: e.status,
															statusText: e.statusText
														}
													}, e.prototype.getRequestError = function(e) {
														return e instanceof DOMException && e.code === e.ABORT_ERR ? this.cancellationReason === i.User ? a.RequestError.Canceled : a.RequestError.TimedOut : a.RequestError.Failed
													}, e.prototype.readResponse = function(e) {
														var t = this,
															n = new c.Stream;
														if (e.body) {
															var r = e.body.getReader(),
																i = function() {
																	return r.read().then((function(e) {
																		var r, a = e.done,
																			s = e.value;
																		return a ? (t.timing.doneTimestamp = o.TimingUtil.getHiResTimestamp(), void t.onProgress(t.bytesReceivedCount, 0)) : s ? (t.bytesReceivedCount += s.length, t.onProgress(t.bytesReceivedCount, s.length), r = s instanceof Uint8Array ? s.buffer : s, n.add(r), i()) : void 0
																	}))
																};
															i().then((function() {
																n.end(), t.onSuccess()
															})).catch((function(e) {
																t.logger.debug("Error reading ReadableStream of fetch request:", e), n.abort(t.getRequestError(e))
															}))
														} else this.request.responseType === s.HttpResponseType.ARRAYBUFFER && e.arrayBuffer().then((function(e) {
															n.add(e), n.end(), t.onSuccess()
														}));
														return n
													}, e.prototype.onError = function(e) {
														clearTimeout(this.cancelTimeout), this.logger.debug("Error performing fetch:", e.error), this.fetching.reject(e)
													}, e
												}();
												t.FetchController = l
											},
											7977: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.createInitSegmentProvider = void 0;
												var r = n(64061);
												t.createInitSegmentProvider = function(e, t) {
													return new r.UrlInitSegmentProvider(e, t)
												}
											},
											66173: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.InitSegmentService = void 0;
												var r = n(4529),
													i = n(7977),
													a = function() {
														function e(e, t) {
															this.context = e, this.provider = (0, i.createInitSegmentProvider)(e, t)
														}
														return e.prototype.getSegment = function(e) {
															return this.provider.getSegment(e)
														}, e.prototype.hasCachedSegment = function(e) {
															return Boolean(this.getCachedSegment(e))
														}, e.prototype.getCachedSegment = function(e) {
															return this.provider.getCachedSegment(e)
														}, e.prototype.removeCachedSegments = function(e) {
															this.provider.removeCachedSegments(e)
														}, e.prototype.dispose = function() {
															(0, r.dispose)(this.provider)
														}, e
													}();
												t.InitSegmentService = a
											},
											48287: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.InitSegmentStore = void 0;
												var n = function() {
													function e() {
														this.storedInitSegments = new Map
													}
													return e.prototype.handleSegment = function(e) {
														e.isInit() ? this.storeInitSegment(e) : this.setStoredInitSegment(e)
													}, e.prototype.storeInitSegment = function(e) {
														this.storedInitSegments.set(e.getRepresentationId().key(), e)
													}, e.prototype.setStoredInitSegment = function(e) {
														if (!e.getInitSegment()) {
															var t = this.storedInitSegments.get(e.getRepresentationId().key());
															null != t && e.setInitSegment(t)
														}
													}, e.prototype.clear = function() {
														this.storedInitSegments.clear()
													}, e.prototype.dispose = function() {
														this.clear()
													}, e
												}();
												t.InitSegmentStore = n
											},
											53140: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.KeyLoader = void 0;
												var r = n(36166),
													i = n(85739),
													a = n(83123),
													o = n(41609),
													s = function() {
														function e(e) {
															this.context = e, this.settings = e.settings, this.sourceIdentifier = e.sourceContext.sourceIdentifier, this.loader = new a.DefaultContentLoader(this.context, {
																maxRetries: this.settings.MAX_RETRIES,
																retryDelay: this.settings.RETRY_DELAY,
																requestType: o.HttpRequestType.KEY_HLS_AES
															})
														}
														return e.prototype.hasWithCredentials = function() {
															var e = this.context.sourceContext.source && this.context.sourceContext.source.hasOwnProperty("options") && this.context.sourceContext.source.options,
																t = e && e.hasOwnProperty("withCredentials") && e.withCredentials,
																n = e && e.hasOwnProperty("hlsWithCredentials") && e.hlsWithCredentials;
															return Boolean(t) || Boolean(n)
														}, e.prototype.load = function(e) {
															var t = this;
															return this.loader ? this.loader.load(e, o.HttpRequestMethod.GET, o.HttpResponseType.ARRAYBUFFER, void 0, void 0, this.hasWithCredentials()).then((function(e) {
																return e.body
															})).catch((function(n) {
																return t.context.eventHandler.fireError(new i.PlayerError(r.ErrorCode.DRM_FAILED_LICENSE_REQUEST, {
																	statusCode: n.status,
																	statusText: n.statusText,
																	keyUrl: e
																}, "Failed to load the DRM key: ".concat(n.status, " ").concat(n.statusText, "."), t.sourceIdentifier)), Promise.reject(n)
															})) : Promise.reject("Could not load: No loader.")
														}, e.prototype.isLoading = function() {
															return !!this.loader && this.loader.isLoading()
														}, e.prototype.dispose = function() {
															this.loader && "function" == typeof this.loader.dispose && this.loader.dispose(), this.loader = void 0, this.settings = void 0
														}, e
													}();
												t.KeyLoader = s
											},
											49100: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.KeyStore = void 0;
												var n = function() {
													function e(e) {
														void 0 === e && (e = 20), this.CAPACITY = e, this.keys = []
													}
													return e.prototype.get = function(e) {
														var t, n = null === (t = this.keys) || void 0 === t ? void 0 : t.find((function(t) {
															return t.uri === e
														}));
														return n ? n.buffer : null
													}, e.prototype.put = function(e, t) {
														this.keys && (this.keys.push({
															uri: e,
															buffer: t
														}), this.keys.length > this.CAPACITY && this.keys.shift())
													}, e.prototype.dispose = function() {
														this.keys = void 0
													}, e
												}();
												t.KeyStore = n
											},
											30733: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getLoader = t.getLoaderConfig = void 0;
												var r = n(83123),
													i = n(41609),
													a = n(50163);

												function o(e) {
													return a.MimeTypeHelper.isVideo(e) ? i.HttpRequestType.MEDIA_VIDEO : a.MimeTypeHelper.isAudio(e) ? i.HttpRequestType.MEDIA_AUDIO : a.MimeTypeHelper.isSubtitle(e) ? i.HttpRequestType.MEDIA_SUBTITLES : a.MimeTypeHelper.isUnknown(e) ? i.HttpRequestType.INTERNAL : i.HttpRequestType.UNKNOWN
												}
												t.getLoaderConfig = function(e, t) {
													var n;
													return (null === (n = e.config.tweaks) || void 0 === n ? void 0 : n.segmentLoaderArgs) ? e.config.tweaks.segmentLoaderArgs : {
														maxRetries: e.settings.MAX_CDN_RETRIES,
														requestType: o(t),
														disableDownloadTimeout: !0,
														resetRetriesWhenOffline: !0
													}
												}, t.getLoader = function(e, t) {
													var n, i = null === (n = e.config.tweaks) || void 0 === n ? void 0 : n.segmentLoader;
													return i && "function" == typeof i ? new i(t) : new r.DefaultContentLoader(e, t)
												}
											},
											35675: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentInfoErrors = void 0;
												var n = function() {
													function e() {}
													return e.PERIOD_COMPLETE = {
														code: "PERIOD_COMPLETE"
													}, e.PERIOD_DROPPED_OUT = {

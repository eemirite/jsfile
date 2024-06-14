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
														code: "PERIOD_DROPPED_OUT"
													}, e
												}();
												t.SegmentInfoErrors = n
											},
											46101: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.MPDHandlerFactory = void 0;
												var r = n(59534),
													i = n(43068),
													a = n(83024),
													o = n(59266),
													s = function() {
														function e() {}
														return e.createInstance = function(e, t, n, i, a) {
															void 0 === i && (i = "0");
															var o = e.serviceManager.get(r.ServiceName.ManifestService, e.sourceContext.sourceIdentifier);
															if (!(null == o ? void 0 : o.hasAdaptationSets(i))) return null;
															var s = o.findAdaptationSet(i, t, a);
															if (!s) return e.logger.debug("Did not find adaptation set for mime type [".concat(t, "] in period ").concat(i)), null;
															var f = s.Representation && s.Representation[0],
																d = f && f.SegmentTemplate ? f.SegmentTemplate : s.SegmentTemplate;
															return o.isSmoothManifest() ? u(e, t, n, d) : o.isHlsManifest() ? c(e, f) : l(e, d, f)
														}, e
													}();

												function u(e, t, n, r) {
													return r ? new(i.ModuleManager.get(a.ModuleName.Smooth).createSmoothSegmentTemplateMPDHandler())(e, t, n) : null
												}

												function c(e, t) {
													return t.SegmentList ? new o.SegmentListMPDHandler(e) : null
												}

												function l(e, t, n) {
													var r = i.ModuleManager.get(a.ModuleName.DASH);
													return t && t[0].SegmentTimeline ? new r.SegmentTimelineMPDHandler(e) : t ? new r.SegmentTemplateMPDHandler(e) : n.SegmentList ? new o.SegmentListMPDHandler(e) : n.SegmentBase ? new r.SegmentBaseMPDHandler(e) : null
												}
												t.MPDHandlerFactory = s
											},
											30790: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.areSegmentsIdentical = t.SegmentCache = void 0;
												var r = n(12391),
													i = n(93842),
													a = function() {
														function e(e) {
															this.maxSize = Math.max(0, e), this.cache = []
														}
														return e.prototype.contains = function(e) {
															return this.cache.some((function(t) {
																return o(e.getSegmentInfo(), t.getSegmentInfo())
															}))
														}, e.prototype.maintainCacheSize = function(e) {
															this.cache = 0 !== e ? this.cache.slice(-e) : []
														}, e.prototype.add = function(e) {
															this.contains(e) || (this.cache.push(e), this.maintainCacheSize(this.maxSize))
														}, e.prototype.get = function(e) {
															return this.cache.find((function(t) {
																return o(e, t.getSegmentInfo())
															}))
														}, e.prototype.clear = function() {
															this.maintainCacheSize(0)
														}, e.prototype.remove = function(e) {
															this.cache = this.cache.filter((0, r.invert)(e))
														}, e.prototype.getCapacity = function() {
															return this.maxSize
														}, e.prototype.getCachedCount = function() {
															return this.cache.length
														}, e.prototype.getCachedSegments = function() {
															return this.cache.slice(0)
														}, e
													}();

												function o(e, t) {
													return (e.isInitSegment ? ["url", "periodId", "byteRange"] : ["url", "periodId", "byteRange", "discontinuitySequenceNumber"]).every((function(n) {
														return "object" == typeof e[n] ? (0, i.compareValues)(e[n], t[n]) : e[n] === t[n]
													}))
												}
												t.SegmentCache = a, t.areSegmentsIdentical = o
											},
											92977: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.extractContainerFormat = t.getSegmentManager = t.isSegmentOfMainStream = t.SegmentController = void 0;
												var i = n(36166),
													a = n(85739),
													o = n(99538),
													s = n(55579),
													u = n(59534),
													c = n(4529),
													l = n(59574),
													f = n(66996),
													d = n(47049),
													h = n(22221),
													p = n(45366),
													_ = n(11917),
													m = n(82072),
													b = n(50163),
													g = n(89199),
													v = n(5793),
													y = n(43068),
													A = n(83024),
													S = n(76469),
													w = n(8073),
													E = n(43233),
													T = n(83576),
													C = n(97383),
													$ = n(27752),
													k = n(67013),
													O = n(31998),
													x = n(51017),
													P = n(10559),
													M = n(53088),
													I = n(45110),
													L = n(76060),
													D = n(3072),
													B = n(12434),
													N = n(48287),
													R = n(46101),
													F = n(30790),
													U = n(79568),
													j = n(28910),
													H = n(70121),
													Y = n(89617),
													V = n(26495),
													z = n(20931),
													Q = "SegmentController",
													G = function() {
														function e(e, t, n, r, i, a, c, f) {
															var d = this;
															this.context = e, this.onDataAvailableCallback = t, this.mimeType = n, this.manifestLoader = a, this.HLSModule = y.ModuleManager.get(A.ModuleName.HLS, !1), this.loadedAdaptationSetIds = {}, this.loadingDataSegmentInfos = [], this.periodSwitch = !1, this.isBackupStreamSwitchOngoing = !1, this.hasDownloadError = !1, this.invalidateOngoingSegmentInfoRequest = !1, this.disableDownloadCancelingForNextSegment = !1, this.onSegmentInfoError = function(e) {
																var t;
																if ((0, m.isContextAvailable)(d.context)) {
																	var n = "Error obtaining ".concat(d.mimeType, " segment info");
																	(null === (t = d.lastSegmentInfoError) || void 0 === t ? void 0 : t.code) === e.code ? d.logger.insane(n, e) : d.logger.debug(n, e), d.lastSegmentInfoError = e
																}
															}, this.handleCancelLoadingError = function(e) {
																d.logger.debug("Error in cancelLoading of segmentLoaderPool ", e)
															}, this.getNext = function(e) {
																var t, n, r = !(null === (t = d.segmentManager) || void 0 === t ? void 0 : t.canLoad()) || d.pendingSegmentInfoRequest || d.hasActiveTransmuxingJobs() || d.isBackupStreamSwitchOngoing;
																d.currentAdaptationSetId && !r && (null === (n = d.logger) || void 0 === n || n.debug("Getting next ".concat(d.mimeType, " segment for time ").concat(e)), d.hasValidSeekTarget ? (d.hasJustSwitched = !1, d.hasValidSeekTarget = !1, d.getNextSegmentOfType({
																	type: U.SegmentType.Init,
																	periodId: d.currentPeriodId
																})) : d.periodSwitch ? (d.getNextSegmentOfType({
																	type: U.SegmentType.Init,
																	periodId: d.currentPeriodId
																}), d.periodSwitch = !1) : d.getNextSegmentOfType({
																	type: U.SegmentType.Any,
																	periodId: d.currentPeriodId,
																	time: e
																}))
															}, this.onSegmentLoaded = function(e) {
																var t, n;
																if (d.isSegmentEmpty(e)) return q(e, d.sourceStore), d.logger.debug("Warning: Loaded segment has size 0 bytes, skipping further processing! May cause gap!", e.getUrl()), void(!(null === (t = e.getData()) || void 0 === t ? void 0 : t.byteLength) && d.hlsTimelineTracker && d.hlsTimelineTracker.reset());
																if (d.maybeUpdateContainerFormat(e), d.isTransmuxerRequired()) {
																	if (!y.ModuleManager.has(A.ModuleName.ContainerTS)) return q(e, d.sourceStore), void d.context.eventHandler.fireError(new S.PlayerModuleMissingError(A.ModuleName.ContainerTS));
																	(i = e.getSegmentInfo()).presentationTimeOffset && isNaN(i.presentationTimeOffset) && (d.mpdHandler.setTimestampOffset(0), i.presentationTimeOffset = 0);
																	var r = i.discontinuitySequenceNumber;
																	void 0 !== d.lastDiscoNumber && r !== d.lastDiscoNumber && d.resetTransmuxer(), d.lastDiscoNumber = r, d.transmux(e)
																} else {
																	if (!d.maybeIsSmoothManifest() && d.isInvalidMp4Segment(e)) return q(e, d.sourceStore), void d.eventHandler.dispatchEvent(l.PlayerEvent.Warning, new o.PlayerWarning(s.WarningCode.PLAYBACK_INVALID_DATA_SEGMENT_ENCOUNTERED, "The loaded MP4 segment is invalid, skipping further processing! May cause gap!", {
																		mimeType: e.getMimeType(),
																		segmentUrl: e.getUrl()
																	}));
																	if (d.maybeIsHlsManifest() && !e.isInit() && !e.isSelfInit() && e.getSegmentInfo().init) {
																		var i = e.getSegmentInfo(),
																			a = null === (n = d.segmentManager) || void 0 === n ? void 0 : n.getCachedSegment(i.init);
																		a && e.setInitSegment(a)
																	}
																	var u = !1;
																	d.currentAdaptationSetId && d.segmentManager && (u = d.segmentPreProcessor.onSegmentAvailable(e, {
																		id3: [],
																		closedCaptions: []
																	}, d.currentAdaptationSetId, d.segmentManager, d.hasJustSwitched, (function(e) {
																		return d.hasJustSwitched = e
																	}))), u || q(e, d.sourceStore), e.getMimeType().indexOf("mp4") > -1 && !d.maybeIsHlsManifest() && (d.isLastSegment = e.isLastSegment())
																}
															}, this.onShouldDownloadBeCancelled = function(e, t) {
																var n, r = Boolean(null === (n = d.adaptationService) || void 0 === n ? void 0 : n.shouldDownloadBeCancelled(d.mimeType, e, t));
																return d.maybeIsHlsManifest() && d.hls.possiblyDependentSegments && r ? (d.logger.debug("Download should be cancelled, but this is disabled for segments not starting with key frames"), !1) : r
															};
															var h = e.sourceContext.sourceIdentifier;
															if (this.currentPeriodId = c, this.sourceStore = f, this.manifestUpdateScheduler = e.serviceManager.get(u.ServiceName.ManifestUpdateSchedulingService, h), this.segmentUnavailabilityHandler = new k.SegmentUnavailabilityHandler(this.context), this.adaptationService = this.context.serviceManager.get(u.ServiceName.AdaptationService), this.streamTimeService = this.context.serviceManager.get(u.ServiceName.StreamTimeService), this.initSegmentStore = new N.InitSegmentStore, this.hls = {
																	isTransmuxingRequired: i && !this.isSubtitleSegmentController,
																	transmuxer: void 0,
																	possiblyDependentSegments: !1,
																	isAvMuxedTogether: !!r && r.indexOf(",") > -1,
																	discardNextSegment: !1,
																	muxedAudioTrackIndex: 0
																}, this.isContainerFormatKnown()) {
																var p = this.getContainerFormat();
																this.hls.isTransmuxingRequired = p.source !== p.target
															}
															this.init()
														}
														return Object.defineProperty(e.prototype, "logger", {
															get: function() {
																return this.context.logger
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "settings", {
															get: function() {
																return this.context.settings
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "config", {
															get: function() {
																return this.context.config
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "eventHandler", {
															get: function() {
																return this.context.eventHandler
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "segmentManager", {
															get: function() {
																return W(this.context, this.mimeType, this.segmentParser, this.hls, this.currentLangObj)
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "isSubtitleSegmentController", {
															get: function() {
																return b.MimeTypeHelper.isSubtitle(this.mimeType)
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.getUserFeedbackForAdaptation = function(e) {
															var t = this,
																n = this.getAdaptationEventType();
															if (!n) return null;
															var r = this.getUserSelectedRepresentation(e.representationId),
																i = r ? this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return t.currentAdaptationSetId && e.getRepresentation(t.currentAdaptationSetId, r)
																}), null, this.context.sourceContext.sourceIdentifier) : null;
															return i ? (this.logger.debug("user has overridden adaptation suggestion! suggested: ".concat(e.representationId, ", user: ") + "".concat(r)), this.eventHandler.dispatchEvent(n, {
																representationID: i._internalId.representationId
															}), i._internalId) : (this.eventHandler.dispatchEvent(n, {
																representationID: e.representationId
															}), null)
														}, e.prototype.getUserSelectedRepresentation = function(e) {
															var t, n = this.getAdaptationCallbackFn();
															if (!n) return null;
															var r = this.maybeGetAdaptationSet(this.currentAdaptationSetId),
																i = null !== (t = null == r ? void 0 : r.Representation.map((function(e) {
																	return {
																		bandwidth: e._bandwidth,
																		id: e._id
																	}
																}))) && void 0 !== t ? t : [];
															return n({
																suggested: e,
																isAd: this.context.sourceContext.isAd,
																representations: i
															})
														}, e.prototype.getAdaptationEventType = function() {
															return b.MimeTypeHelper.isAudio(this.mimeType) ? l.PlayerEvent.AudioAdaptation : b.MimeTypeHelper.isVideo(this.mimeType) ? l.PlayerEvent.VideoAdaptation : null
														}, e.prototype.getAdaptationCallbackFn = function() {
															var e, t;
															return b.MimeTypeHelper.isAudio(this.mimeType) ? null === (e = this.config.adaptation) || void 0 === e ? void 0 : e.onAudioAdaptation : b.MimeTypeHelper.isVideo(this.mimeType) ? null === (t = this.config.adaptation) || void 0 === t ? void 0 : t.onVideoAdaptation : void 0
														}, e.prototype.getPrefetchedRepresentationId = function() {
															var e;
															if (null === (e = this.context.adRestorationOptimizationService) || void 0 === e ? void 0 : e.hasPrefetchedSegment(this.mimeType, this.lastSegmentInfo)) return this.context.adRestorationOptimizationService.getRepresentationForPrefetchedSegment(this.mimeType)
														}, e.prototype.selectRepresentation = function(e, t) {
															var n = this.getPrefetchedRepresentationId();
															if (n) return n;
															var r = !1,
																i = this.sourceStore.getState();
															i && (r = Boolean((0, d.getPreferredBitrate)((0, d.getAdaptationState)(i), this.mimeType)));
															var a = this.getSuggestedRepresentationId(e, r, t);
															return this.chooseRepresentationId(a)
														}, e.prototype.chooseRepresentationId = function(e) {
															var t, n, r = e ? this.getUserFeedbackForAdaptation(e) : void 0;
															if (r) return this.disableDownloadCancelingForNextSegment = !0, r;
															var i = null === (n = null === (t = this.getCurrentAdaptationSet()) || void 0 === t ? void 0 : t.Representation[0]) || void 0 === n ? void 0 : n._internalId;
															return e || i || this.currentRepresentationId
														}, e.prototype.getSuggestedRepresentationId = function(e, t, n) {
															var r, i, a;
															if (this.periodSwitch || !this.hasJustSwitched || void 0 === this.currentRepresentationId) {
																var o = {
																	hlsDependentSegments: this.hls.possiblyDependentSegments,
																	segmentDuration: this.mpdHandler.getSegmentDuration(),
																	segmentNumber: e
																};
																a = null === (r = this.adaptationService) || void 0 === r ? void 0 : r.selectRepresentation(this.mimeType, o, null === (i = this.getCurrentAdaptationSet()) || void 0 === i ? void 0 : i.Representation)
															} else a = this.currentRepresentationId;
															return (null == n ? void 0 : n.periodId) === this.getCurrentPeriodId() && !t && (a = n), a
														}, e.prototype.switchRepresentation = function(e) {
															var t = this.currentRepresentationId ? this.currentRepresentationId.representationId : null;
															this.logger.debug("switching representation from ".concat(t, " to ").concat(e.representationId, " (").concat(this.mimeType, ")")), this.mpdHandler.setRepresentationId(e), this.currentRepresentationId = e, this.hasJustSwitched = !0
														}, e.prototype.hasRequestedInitSegment = function(e) {
															var t = this.context.store.getState();
															return !!t && (0, p.getMetricsHistoryFromInstanceState)(t, this.mimeType, _.MetricType.CachedInitSegments).map((function(e) {
																var t;
																return null === (t = null == e ? void 0 : e.value) || void 0 === t ? void 0 : t.internalRepId
															})).filter(Boolean).some((function(t) {
																return t.equals(e)
															}))
														}, e.prototype.isInitSegmentNeeded = function(e, t, n) {
															return e.type === U.SegmentType.Init || t || this.maybeIsHlsManifest() || !this.hasRequestedInitSegment(n)
														}, e.prototype.invalidateOngoingRequests = function() {
															this.invalidateOngoingSegmentInfoRequest = !0
														}, e.prototype.fireQualityChangeEvent = function(e, t) {
															var n, r = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(t) {
																	return t.getRepresentationById(e)
																}), null, this.context.sourceContext.sourceIdentifier),
																i = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getRepresentationById(t)
																}), null, this.context.sourceContext.sourceIdentifier),
																a = r ? (0, T.representationToQuality)(r, this.mimeType) : void 0,
																o = i ? (0, T.representationToQuality)(i, this.mimeType) : void 0;
															if (o) {
																var s = {
																	targetQuality: o,
																	targetQualityId: o.id,
																	sourceQuality: a,
																	sourceQualityId: null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null
																};
																b.MimeTypeHelper.isVideo(this.mimeType) ? this.context.eventHandler.dispatchEvent(l.PlayerEvent.VideoDownloadQualityChange, s) : b.MimeTypeHelper.isAudio(this.mimeType) && this.context.eventHandler.dispatchEvent(l.PlayerEvent.AudioDownloadQualityChange, s)
															}
														}, e.prototype.getSegmentInfo = function(e) {
															var t, n = this,
																i = void 0 !== (null === (t = this.lastSegmentInfo) || void 0 === t ? void 0 : t.segmentNumber) ? this.lastSegmentInfo.segmentNumber + 1 : 0,
																a = this.selectRepresentation(i, e.recommendedRepresentationId),
																o = !a.equals(this.currentRepresentationId);
															return o && (this.sourceStore.dispatch((0, O.setRepresentationIdAction)(a)), b.MimeTypeHelper.isAV(this.mimeType) && this.fireQualityChangeEvent(this.currentRepresentationId, a)), this.invalidateOngoingSegmentInfoRequest = !1, this.pendingSegmentInfoRequest = this.loadRepresentationInfo(a).then((function() {
																return n.currentAdaptationSetId && n.mpdHandler.setAdaptationSetId(n.currentAdaptationSetId, a), o && n.switchRepresentation(a), n.findNextSegmentInfo(e, o, a)
															})).then((function(e) {
																var t = n.currentRepresentationId || a;
																if (n.shouldInvalidateSegmentInfo(e)) throw (0, m.isContextAvailable)(n.context) && n.context.logger.debug("[SegmentController][".concat(n.mimeType, "] invalidating ongoing SegmentInfo request for"), r({}, e)), "ongoing segment info request was invalidated";
																return n.addSegmentInfos(e, i, t), n.lastSegmentInfo = e, e
															})).catch((function(t) {
																n.pendingSegmentInfoRequest = void 0;
																var i = n.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getRepresentationById(a)
																}), null, n.context.sourceContext.sourceIdentifier);
																if (i && n.sourceStore.dispatch((0, P.setRepresentationFailedDownloadAction)(i._internalId)), t === f.M3u8Error.COULD_NOT_LOAD) {
																	n.logger.debug("HLS playlist loading failed for representation ".concat(a.representationId, " (").concat(t, ")"));
																	var o = n.maybeGetAdaptationSet(n.currentAdaptationSetId),
																		s = null == o ? void 0 : o.Representation.find((function(e) {
																			return !e.hasFailedToLoad
																		}));
																	if (s) return n.getSegmentInfo(r(r({}, e), {
																		recommendedRepresentationId: s._internalId
																	}))
																}
																throw t
															})).finally((function() {
																n.expectedTargetTimeAfterSeek = void 0
															})), this.pendingSegmentInfoRequest
														}, e.prototype.shouldInvalidateSegmentInfo = function(e) {
															return this.invalidateOngoingSegmentInfoRequest && e && !e.isInitSegment && !this.isSegmentInfoInExpectedTimeRange(e)
														}, e.prototype.isSegmentInfoInExpectedTimeRange = function(e) {
															return void 0 !== this.expectedTargetTimeAfterSeek && (0, g.isNumber)(e.startTime) && (0, g.isNumber)(e.duration) && this.expectedTargetTimeAfterSeek >= e.startTime && this.expectedTargetTimeAfterSeek <= e.startTime + e.duration
														}, e.prototype.getInitSegmentInfo = function() {
															var e = {
																type: U.SegmentType.Init,
																periodId: this.currentPeriodId
															};
															return this.currentRepresentationId && this.currentRepresentationId.periodId === this.getCurrentPeriodId() ? this.getSegmentInfo(r(r({}, e), {
																recommendedRepresentationId: this.currentRepresentationId
															})) : this.getSegmentInfo(e)
														}, e.prototype.getDataSegmentInfo = function(e) {
															var t = {
																type: U.SegmentType.Data,
																periodId: this.currentPeriodId,
																time: e
															};
															return this.currentRepresentationId && this.currentRepresentationId.periodId === this.getCurrentPeriodId() ? this.getSegmentInfo(r(r({}, t), {
																recommendedRepresentationId: this.currentRepresentationId
															})) : this.getSegmentInfo(t)
														}, e.prototype.needToLoadInitSegment = function(e, t, n, r) {
															var i = !this.isTransmuxerRequired() && !this.maybeIsSmoothManifest() && !this.isSubtitleSegmentController;
															return e && (i = this.isInitSegmentNeeded(t, n, r)) && this.maybeIsHlsManifest() && (i = Boolean(this.segmentManager && !this.segmentManager.hasCachedSegment(e))), i && t.type !== U.SegmentType.Data
														}, e.prototype.findNextSegmentInfo = function(e, t, n) {
															var i = this,
																a = this.mpdHandler.getInitSegmentInfo(n),
																o = this.needToLoadInitSegment(a, e, t, n);
															return o && a ? Promise.resolve(a) : this.mpdHandler.getNextSegmentInfo(e.time).then((function(s) {
																return a = s.init && r(r({}, s.init), {
																	isInitSegment: !0
																}), (o = i.needToLoadInitSegment(a, e, t, n)) && a ? (i.mpdHandler.rewindOneSegment(), a) : s
															}))
														}, e.prototype.addSegmentInfos = function(e, t, n) {
															var r = this;
															if (e) {
																var i = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getRepresentationById(n)
																}), null, this.context.sourceContext.sourceIdentifier);
																if (i)
																	if (e.representationId = n.representationId, e.internalRepresentationId = n, e.mimeType = this.mimeType, e.bitrate = i._bandwidth, e.periodId = n.periodId, e.codecs = this.getCodecs(), b.MimeTypeHelper.isAudio(this.mimeType)) e.sampleRate = i._audioSamplingRate, e.width = void 0, e.height = void 0;
																	else if (b.MimeTypeHelper.isVideo(this.mimeType) && (e.width = i._width, e.height = i._height, e.frameRate = i._frameRate, !e.dateTime && this.settings.AKAMAI_DATETIME_PARSING && this.HLSModule)) {
																	var a = null != e.duration ? this.HLSModule.PlaylistUtils.getProgramDateTimeFromSegmentUrl(e.url, e.duration) : void 0;
																	a && (e.dateTime = a)
																}
																var o = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return r.currentAdaptationSetId && e.getLowestBandwidthOfAdaptationSet(r.currentAdaptationSetId)
																}), null, this.context.sourceContext.sourceIdentifier);
																null != e.bitrate && isFinite(e.bitrate) && e.bitrate === o && (e.preventDownloadCanceling = !0);
																var s = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getAvailableBaseURLsForRepresentation(n)
																}), void 0, this.context.sourceContext.sourceIdentifier);
																e.availableBaseURLs = s, e.firstUsedBaseURLIndex = 0, this.lastSegmentInfo && this.lastSegmentInfo.lastUsedBaseURLIndex && (e.firstUsedBaseURLIndex = this.lastSegmentInfo.lastUsedBaseURLIndex), e.lastUsedBaseURLIndex = e.firstUsedBaseURLIndex, e.duration || e.isInitSegment || (e.duration = this.mpdHandler.getSegmentDuration()), (void 0 === e.segmentNumber || isNaN(e.segmentNumber)) && (e.segmentNumber = t), this.maybeIsHlsManifest() ? (e.baseURL = "", e.mediaURL || (e.mediaURL = e.url)) : (e.baseURL = s[e.firstUsedBaseURLIndex], e.mediaURL = e.mediaURL || e.url, delete e.url), e.url = v.URLHelper.concatBaseUrlWithPartial(e.baseURL, e.mediaURL), e.discardData = this.hls.discardNextSegment, this.hls.discardNextSegment = !1, this.disableDownloadCancelingForNextSegment && (e.preventDownloadCanceling = !0, this.disableDownloadCancelingForNextSegment = !1), e.isTransmuxingRequired = this.isTransmuxerRequired()
															}
														}, e.prototype.loadRepresentationInfo = function(e) {
															var t = this;
															return this.manifestUpdateScheduler ? this.manifestUpdateScheduler.waitForRepUpdate(e).then((function() {
																return t.mpdHandler.updateRepresentation(e)
															})) : Promise.reject("ManifestUpdateScheduler does not exist.")
														}, e.prototype.isTransmuxing = function() {
															var e;
															return this.isTransmuxerRequired() && Boolean(null === (e = this.hls.transmuxer) || void 0 === e ? void 0 : e.isTransmuxing())
														}, e.prototype.hasActiveTransmuxingJobs = function() {
															var e;
															return this.isTransmuxerRequired() && Boolean(null === (e = this.hls.transmuxer) || void 0 === e ? void 0 : e.hasActiveJobs())
														}, e.prototype.cancelTransmuxing = function() {
															var e = this;
															this.hls.transmuxer && this.isTransmuxing() && this.hls.transmuxer.discardCurrentJobs().forEach((function(t) {
																return q(t.mp2tsSegment, e.sourceStore)
															}))
														}, e.prototype.cancelLoading = function() {
															var e;
															this.invalidateOngoingSegmentInfoRequest = !0, null === (e = this.segmentManager) || void 0 === e || e.cancel().catch(this.handleCancelLoadingError)
														}, e.prototype.seekTo = function(e) {
															var t = this;
															null !== e && this.currentAdaptationSetId && (this.cancelLoading(), this.cancelTransmuxing(), this.loadingDataSegmentInfos = [], this.hasDownloadError = !1, this.isLastSegment = !1, this.hlsTimelineTracker && this.hlsTimelineTracker.reset(), this.isTransmuxerRequired() && this.hls.transmuxer && this.hls.transmuxer.resetCaptionParser(), e >= 0 && (this.hasValidSeekTarget = !0, this.expectedTargetTimeAfterSeek = e, this.mpdHandler.seekTo(e))), this.pendingSegmentInfoRequest && (0, g.isNumber)(e) && this.pendingSegmentInfoRequest.catch((function(e) {
																return t.logger.debug("Error during getting a segment info", e)
															})).then((function() {
																return t.seekTo(e)
															}))
														}, e.prototype.getNextSegmentOfType = function(e) {
															var t = this;
															this.getSegmentInfo(e).then((function(e) {
																return t.loadFromSegmentInfo(e)
															})).catch(this.onSegmentInfoError)
														}, e.prototype.hasNextVod = function(e) {
															var t, n, r = this;
															if (this.hasDownloadError) return this.currentRepresentationId !== (null === (t = this.adaptationService) || void 0 === t ? void 0 : t.selectRepresentation(this.mimeType)) && (this.mpdHandler.rewindOneSegment(), this.hasDownloadError = !1, this.hasJustSwitched = !1, !0);
															var i = this.maybeFindPeriod(this.currentPeriodId),
																a = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getMediaPresentationDuration()
																}), 0, this.context.sourceContext.sourceIdentifier);
															if (i && i.hasOwnProperty("_duration")) n = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.getPeriodDuration(r.currentPeriodId)
															}), void 0, this.context.sourceContext.sourceIdentifier);
															else {
																if (0 === a) return !1;
																n = a
															}
															return this.mpdHandler.hasNext(n)
														}, e.prototype.hasNextLive = function(e) {
															var t, n = this;
															if (this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.isAvailabilityEndTimeExceeded()
																}), !1, this.context.sourceContext.sourceIdentifier)) return this.logger.log("Stream (".concat(this.mimeType, ") availability end time reached, stopping download of further segments.")), this.isLastSegment = !0, !1;
															this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.isLastPeriod(n.currentPeriodId)
															}), !1, this.context.sourceContext.sourceIdentifier) && this.mpdHandler.resolvePendingSegmentInfoRequests(), this.hasDownloadError && this.currentRepresentationId !== (null === (t = this.adaptationService) || void 0 === t ? void 0 : t.selectRepresentation(this.mimeType)) && (this.mpdHandler.rewindOneSegment(), this.hasDownloadError = !1, this.hasJustSwitched = !1);
															var r = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.getPeriodDuration(n.currentPeriodId)
															}), void 0, this.context.sourceContext.sourceIdentifier);
															return this.mpdHandler.hasNext(r)
														}, e.prototype.hasNext = function(e) {
															var t = this,
																n = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.isLastPeriod(t.currentPeriodId)
																}), !1, this.context.sourceContext.sourceIdentifier);
															return !(this.isLastSegment && n || !this.currentAdaptationSetId || !this.mpdHandler) && (this.maybeIsLive() ? this.hasNextLive(e) : this.hasNextVod(e))
														}, e.prototype.onTransmuxed = function(e) {
															var t = this;
															if (e.transmuxedSegments.every((function(e) {
																	return null !== e.getCodec()
																}))) {
																!this.hls.possiblyDependentSegments && function(e) {
																	return e.transmuxedSegments.some((function(e) {
																		return b.MimeTypeHelper.isAV(e.getMimeType()) && !e.isIndependentlyDecodable()
																	}))
																}(e) && (this.logger.debug("Encountered HLS segment not starting with a key frame"), this.hls.possiblyDependentSegments = !0);
																var n = e.transmuxedSegments.find((function(e) {
																		return "video/mp4" === e.getMimeType()
																	})),
																	r = e.transmuxedSegments.filter((function(e) {
																		return "audio/mp4" === e.getMimeType()
																	})),
																	i = [n, r[this.hls.muxedAudioTrackIndex] || r[0]].filter((function(e) {
																		return Boolean(e)
																	}));
																i.forEach((function(e) {
																	return t.timestampOffsetService.maybeAdjustTimestampOffsetAtDiscontinuityChange(e, t.mpdHandler)
																})), this.segmentManager && this.currentAdaptationSetId && this.segmentPreProcessor.cacheOrCallOnSegmentAvailable(e, i, this.currentAdaptationSetId, this.segmentManager, this.hasJustSwitched, (function(e) {
																	return t.hasJustSwitched = e
																}));
																var a = i[i.length - 1];
																a && a.getMimeType().indexOf("mp4") > -1 && (this.isLastSegment = a.isLastSegment()), this.logger.debug("Transmuxing done", e.originalSegment.getUrl())
															} else {
																var o = e.originalSegment.getUrl();
																this.logger.debug("Discarding muxing because codecs were not available in the segment: ".concat(o))
															}
														}, e.prototype.hasPendingSegments = function(e) {
															var t, n;
															return e ? (t = this.isTransmuxerRequired() && this.hls.transmuxer && this.hls.transmuxer.isTransmuxingSegmentsForPeriod(e), n = this.segmentManager.isLoading(e)) : (t = this.isTransmuxing(), n = this.segmentManager.isLoading()), n || t || Boolean(this.pendingSegmentInfoRequest)
														}, e.prototype.transmux = function(e) {
															var t = this;
															if (this.hls.transmuxer) {
																if (!this.hls.transmuxer.isInitialBaseMediaDecodeTimeSet()) {
																	void 0 === e.getSegmentInfo().startTime && this.sourceStore.dispatch(this.HLSModule.actions.dropSegmentStartTimes()), (0, B.initializeHlsSegmentStartTimes)(e, this.context, this.mpdHandler);
																	var n = e.getSegmentInfo();
																	if (null != n.startTime) {
																		var r = Math.round(9e4 * n.startTime);
																		this.logger.debug("Setting initial BaseMediaDecodeTime at transmuxer to ".concat(r / 9e4) + " (".concat(r, ")")), this.hls.transmuxer.setBaseMediaDecodeTime(r)
																	}
																}
																this.hls.transmuxer.transmuxSegment(e).then((function(e) {
																	return t.onTransmuxed(e)
																})).catch((function(n) {
																	q(e, t.sourceStore), t.eventHandler.dispatchEvent(l.PlayerEvent.Warning, new o.PlayerWarning(s.WarningCode.PLAYBACK_INVALID_DATA_SEGMENT_ENCOUNTERED, "Transmuxing failed: ".concat(n), {
																		mimeType: e.getMimeType(),
																		segmentUrl: e.getUrl()
																	}))
																}))
															}
														}, e.prototype.maybeUpdateContainerFormat = function(e) {
															var t;
															if (!this.isContainerFormatKnown()) {
																var n = (0, D.resolveContainerFormat)(this.mimeType, e, this.maybeIsHlsManifest());
																this.logger.debug("Container format for ".concat(this.mimeType, " is ").concat(null == n ? void 0 : n.source)), n && this.sourceStore.dispatch((0, O.setContainerFormatAction)(e.getRepresentationId(), n)), this.hls.isTransmuxingRequired = Boolean(n && n.source !== n.target), !this.hls.isTransmuxingRequired && b.MimeTypeHelper.isAV(this.mimeType) && (null === (t = this.hls.transmuxer) || void 0 === t || t.dispose(), this.context.serviceManager.maybeCall(u.ServiceName.SubtitleService, (function(e) {
																	e.setTransmuxer(void 0)
																})))
															}
														}, e.prototype.isSegmentEmpty = function(e) {
															var t = e.getData();
															return !!(t && t.byteLength < 1)
														}, e.prototype.isInvalidMp4Segment = function(e) {
															if (!y.ModuleManager.has(A.ModuleName.ContainerMP4)) return !1;
															var t = y.ModuleManager.get(A.ModuleName.ContainerMP4, !1),
																n = t.isValidMp4,
																r = t.MP4Parser,
																i = this.segmentParser instanceof r;
															return this.context.settings.DROP_INVALID_SEGMENTS && i && !n(e)
														}, e.prototype.getContainerFormat = function() {
															var e = this.sourceStore.getState();
															return e && (0, x.getContainerFormat)(e, b.MimeTypeHelper.getMediaType(this.mimeType))
														}, e.prototype.isContainerFormatKnown = function() {
															return Boolean(this.getContainerFormat())
														}, e.prototype.loadFromSegmentInfo = function(e) {
															return this.pendingSegmentInfoRequest = void 0, e ? (e.isInitSegment || this.loadingDataSegmentInfos.push(e), this.lastSegmentInfoError = void 0, this.logger.debug("Loading ".concat(JSON.stringify(e))), this.loadSegment(e)) : Promise.resolve()
														}, e.prototype.loadSegment = function(e) {
															var t = this;
															return this.segmentManager ? this.segmentManager.getSegment(e).then((function(e) {
																return t.extractSegmentFromStream(e)
															})).catch((function(n) {
																return t.handleSegmentLoadingError(n, e)
															})) : Promise.reject()
														}, e.prototype.extractSegmentFromStream = function(e) {
															var t = this;
															e.transform((function(e) {
																(function(e, t) {
																	var n = t.findIndex((function(t) {
																		return (0, F.areSegmentsIdentical)(t, e)
																	}));
																	n > -1 && t.splice(n, 1)
																})(e.getSegmentInfo(), t.loadingDataSegmentInfos), t.onSegmentLoaded(e)
															}), (function() {}), (function(e) {
																return t.logger.debug("Error loading segment", e), e.message
															}))
														}, e.prototype.handleSegmentLoadingError = function(e, t) {
															if (e.reason === Y.SegmentLoadingErrorReason.CANCEL) this.onDownloadCancelled(t);
															else if (e.reason === Y.SegmentLoadingErrorReason.ERROR_LOADING) {
																var n = e.info ? e.info.response.status : 0;
																this.handleDownloadError(n, t)
															} else e.reason === Y.SegmentLoadingErrorReason.ERROR_DECRYPTING ? (this.logger.debug("Could not decrypt segment", t.url), this.eventHandler.dispatchEvent(l.PlayerEvent.Warning, new o.PlayerWarning(s.WarningCode.DRM_COULD_NOT_DECRYPT_SEGMENT))) : this.logger.debug("Unexpected ERROR occurred when loading segment!", t.url)
														}, e.prototype.switchToHlsBackupStream = function(e) {
															var t = this;
															return this.HLSModule && this.manifestLoader instanceof this.HLSModule.M3u8Loader && this.manifestLoader.hasBackupStreams(e) ? this.manifestLoader.switchToBackupStream(e).then((function() {
																return !0
															})).catch((function(e) {
																return t.logger.debug("Switching to HLS backup stream failed", e), Promise.resolve(!1)
															})) : Promise.resolve(!1)
														}, e.prototype.getFailedSegmentIndex = function() {
															var e = this.settings.CHUNKED_CMAF_STREAMING ? 1 : this.loadingDataSegmentInfos.length;
															return this.mpdHandler.getIndex() - e
														}, e.prototype.handleDownloadError = function(e, t) {
															this.segmentUnavailabilityHandler.shouldTryAlternatives(e) ? this.tryToFindAValidSegment(t, e) : (this.storeFailedDownloadRange(t), this.hasDownloadError = !0)
														}, e.prototype.tryToFindAValidSegment = function(e, t) {
															var n = this;
															if (this.currentRepresentationId && this.currentRepresentationId.equals(e.internalRepresentationId)) {
																var r = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return n.currentAdaptationSetId && e.getRepresentation(n.currentAdaptationSetId, n.currentRepresentationId.representationId)
																}), null, this.context.sourceContext.sourceIdentifier);
																if (r) {
																	var i = !1;
																	this.isBackupStreamSwitchOngoing = !0, this.switchToHlsBackupStream(r).then((function(e) {
																		return i = e
																	})).finally((function() {
																		return n.isBackupStreamSwitchOngoing = !1
																	})).then((function() {
																		var e;
																		return null === (e = n.segmentManager) || void 0 === e ? void 0 : e.cancel()
																	})).then((function() {
																		return n.tryToRecoverWithValidSegment(i, e, t)
																	}))
																}
															} else this.logger.debug("Ignoring download error of previous representation.")
														}, e.prototype.tryToRecoverWithValidSegment = function(e, t, n) {
															var r, i, a, o = this,
																s = this.getFailedSegmentIndex();
															if (this.loadingDataSegmentInfos = [], e) this.mpdHandler.setIndex(Math.max(0, s));
															else if (a = this.segmentUnavailabilityHandler.switchBaseURL(t)) this.loadFromSegmentInfo(a);
															else {
																var u = null;
																if (null === (r = this.adaptationService) || void 0 === r ? void 0 : r.isAuto(this.mimeType)) {
																	var c = null === (i = this.maybeGetAdaptationSet(this.currentAdaptationSetId)) || void 0 === i ? void 0 : i.Representation;
																	u = this.segmentUnavailabilityHandler.switchQuality(null != c ? c : [], this.currentRepresentationId)
																}
																if (u) {
																	if (this.streamTimeService) {
																		var l = this.streamTimeService.getTimeForNextSegment((0, L.getTrackIdentifier)(t));
																		this.getSegmentInfo({
																			type: U.SegmentType.Any,
																			recommendedRepresentationId: u,
																			time: l
																		}).then((function(e) {
																			return o.loadFromSegmentInfo(e)
																		}))
																	}
																} else this.hasDownloadError = !0, this.handleFailedSegmentDownload(t, n)
															}
														}, e.prototype.handleFailedSegmentDownload = function(e, t) {
															this.storeFailedDownloadRange(e), this.maybeIsLive() ? (this.logger.debug("Could not load current segment of any quality from any CDN (all retries failed), skipping it..."), this.continueWithNextSegment(e)) : (0, j.throwDownloadError)(this.context, "Segment not available at any quality or location", t, e)
														}, e.prototype.storeFailedDownloadRange = function(e) {
															var t = (0, H.getSegmentInfoTimeRange)(e);
															t && (0, m.isContextAvailable)(this.context) && e.mimeType && this.context.store.dispatch((0, I.addStreamTimeRange)((0, L.getTrackIdentifier)(e), t, L.StreamTimeRangeType.Failed))
														}, e.prototype.continueWithNextSegment = function(e) {
															this.segmentUnavailabilityHandler.downloadSuccess(!1), e.hasDownloadFailed = !0, null != e.startTime && null != e.duration && this.getNext(e.startTime + e.duration)
														}, e.prototype.onDownloadCancelled = function(e) {
															var t, n = this;
															(0, m.isContextAvailable)(this.context) && (this.logger.debug("Download took too long, cancelled it."), this.hasJustSwitched = !1, !e.isInitSegment && this.mpdHandler && (null === (t = this.segmentManager) || void 0 === t || t.cancel().then((function() {
																if (n.mpdHandler) {
																	var e = n.getFailedSegmentIndex();
																	n.loadingDataSegmentInfos = [], n.logger.debug("Trying to get the same segment with a lower bitrate."), n.mpdHandler.setIndex(Math.max(0, e))
																}
															}))))
														}, e.prototype.findAdaptationSetId = function(e, t, n) {
															var r = this;
															if (void 0 === n && (n = !1), this.isSubtitleSegmentController && !(null == t ? void 0 : t.id)) return this.currentLangObj = t, void(this.segmentManager && this.cancelLoading());
															var i = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(i) {
																return i.findAdaptationSet(e, r.mimeType, t, n)
															}), null, this.context.sourceContext.sourceIdentifier);
															return i ? (this.currentLangObj = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.getLangObjectFromAdaptationSet(i, r.mimeType)
															}), void 0, this.context.sourceContext.sourceIdentifier), i._internalId) : void 0
														}, e.prototype.getCurrentAdaptationSet = function() {
															return this.maybeGetAdaptationSet(this.currentAdaptationSetId)
														}, e.prototype.getAdaptationSetForPeriodId = function(e) {
															return this.maybeGetAdaptationSet(this.loadedAdaptationSetIds[e]) || this.getCurrentAdaptationSet()
														}, e.prototype.updateMpd = function() {
															var e;
															this.logger.debug("Caught a MPD update event");
															var t = !this.maybeFindPeriod(this.currentPeriodId);
															for (var n in this.currentAdaptationSetId = this.findAdaptationSetId(this.currentPeriodId, this.currentLangObj, !1), !t && this.currentAdaptationSetId && (this.loadedAdaptationSetIds[this.currentPeriodId] = this.currentAdaptationSetId, null === (e = this.adaptationService) || void 0 === e || e.setAdaptationSetId(this.mimeType, this.currentAdaptationSetId), this.mpdHandler.setAdaptationSetId(this.currentAdaptationSetId, this.currentRepresentationId, {
																	isPeriodSwitch: !1,
																	isManifestUpdate: !0
																})), this.loadedAdaptationSetIds) this.maybeFindPeriod(n) || delete this.loadedAdaptationSetIds[n]
														}, e.prototype.activateSubtitleSegmentController = function(e) {
															var t;
															this.isSubtitleSegmentController && (this.currentAdaptationSetId && (this.mpdHandler.setAdaptationSetId(this.currentAdaptationSetId), null === (t = this.adaptationService) || void 0 === t || t.setAdaptationSetId(this.mimeType, this.currentAdaptationSetId)), isNaN(this.mpdHandler.getTimestampOffset()) && this.mpdHandler.setTimestampOffset(0), this.seekTo(e))
														}, e.prototype.setCurrentLangObj = function(e) {
															var t;
															if (this.hls.isAvMuxedTogether && b.MimeTypeHelper.isVideo(this.mimeType)) {
																var n = this.maybeGetAdaptationSet(this.currentAdaptationSetId);
																if (null == n ? void 0 : n.ContentComponent) {
																	var r = n.ContentComponent.find((function(t) {
																		return "audio" === t._contentType && t._id === e.id
																	}));
																	if (r) return this.hls.muxedAudioTrackIndex = n.ContentComponent.filter((function(e) {
																		return "audio" === e._contentType
																	})).indexOf(r), void(this.currentLangObj = e)
																}
															}
															e.id !== (null === (t = this.currentLangObj) || void 0 === t ? void 0 : t.id) && this.switchAdaptationSetId(e)
														}, e.prototype.switchAdaptationSetId = function(e) {
															var t = this.currentAdaptationSetId;
															if (this.currentAdaptationSetId && this.sourceStore.dispatch((0, O.removeActiveTrackAction)(this.currentAdaptationSetId)), this.currentAdaptationSetId = this.findAdaptationSetId(this.currentPeriodId, e), this.currentAdaptationSetId) {
																var n = this.maybeGetAdaptationSet(this.currentAdaptationSetId);
																n && this.sourceStore.dispatch((0, O.setMediaTypeAction)(n._internalId, (0, C.resolveMediaTypes)(n))), this.loadedAdaptationSetIds[this.currentPeriodId] = this.currentAdaptationSetId, t && !this.currentAdaptationSetId.equals(t) && this.switchDependentToNewLanguageObject(e)
															}
														}, e.prototype.switchDependentToNewLanguageObject = function(e) {
															var t;
															this.currentLangObj = e, this.previousExplicitlySetLangObj = e, this.logger.debug("".concat(Q, "[").concat(this.mimeType, "]: Trying to set language to ID ").concat(this.currentLangObj.id) + " (lang: ".concat(this.currentLangObj.lang, ") for mpd handler and adaption handler")), this.currentAdaptationSetId && (this.mpdHandler.setAdaptationSetId(this.currentAdaptationSetId), null === (t = this.adaptationService) || void 0 === t || t.setAdaptationSetId(this.mimeType, this.currentAdaptationSetId))
														}, e.prototype.getCurrentLangObj = function() {
															return this.currentLangObj
														}, e.prototype.stop = function() {
															var e, t;
															this.cancelLoading(), null === (e = this.segmentManager) || void 0 === e || e.clearCache(), null === (t = this.adaptationService) || void 0 === t || t.shutdown(this.mimeType)
														}, e.prototype.init = function() {
															var e, t = this,
																n = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getFirstPeriod()
																}), void 0, this.context.sourceContext.sourceIdentifier);
															!this.currentPeriodId && n && (this.currentPeriodId = n._id);
															var r = R.MPDHandlerFactory.createInstance(this.context, this.mimeType, this.manifestLoader, this.currentPeriodId);
															if (r) {
																this.mpdHandler = r;
																var o, s = K(this.mimeType);
																s && (o = (0, $.createSegmentParser)(this.context, s)), o ? this.segmentParser = o : this.logger.debug("Could not create segment parser for mime type ".concat(this.mimeType)), this.timestampOffsetService = new z.TimestampOffsetService(this.context, this.mimeType), this.segmentPreProcessor = new V.SegmentPreProcessor(this.context, this.mimeType, this.onDataAvailableCallback, this.hls, this.initSegmentStore, this.segmentUnavailabilityHandler, this.timestampOffsetService, this.segmentParser), this.segmentPreProcessor.setMpdHandler(this.mpdHandler), this.hasDownloadError = !1, this.currentAdaptationSetId = this.findAdaptationSetId(this.currentPeriodId, this.currentLangObj), this.currentAdaptationSetId && (this.loadedAdaptationSetIds[this.currentPeriodId] = this.currentAdaptationSetId), this.context.serviceManager.maybeCall(u.ServiceName.SegmentService, (function(e) {
																	return e.add({
																		mimeType: t.mimeType,
																		shouldDownloadBeCancelledCallback: t.onShouldDownloadBeCancelled
																	}, t.segmentParser, t.currentLangObj)
																})), this.maybeIsHlsManifest() && (this.hlsTimelineTracker = new this.HLSModule.HlsTimelineTracker(this.context, this.settings.GAP_TOLERANCE), this.segmentPreProcessor.setHlsTimelineTracker(this.hlsTimelineTracker)), b.MimeTypeHelper.isMP4(this.mimeType) && this.context.serviceManager.maybeCall(u.ServiceName.SubtitleService, (function(e) {
																	e.setupCea608CaptionExtractor(t.context.logger)
																})), this.hasJustSwitched = !1, this.currentAdaptationSetId && (null === (e = this.adaptationService) || void 0 === e || e.setAdaptationSetId(this.mimeType, this.currentAdaptationSetId), this.mpdHandler.setAdaptationSetId(this.currentAdaptationSetId, void 0, {
																	isPeriodSwitch: !0
																}), this.maybeIsLive() && !this.settings.ENABLE_SEEK_FOR_LIVE && this.mpdHandler.timeShift(0, this.currentPeriodId)), this.hasValidSeekTarget = !1, this.isLastSegment = !1
															} else this.eventHandler.fireError(new a.PlayerError(i.ErrorCode.SOURCE_MANIFEST_INVALID))
														}, e.prototype.getSegmentInfos = function() {
															var e, t = this,
																n = null === (e = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return e.getAvailableBaseURLsForRepresentation(t.currentRepresentationId)
																}), null, this.context.sourceContext.sourceIdentifier)) || void 0 === e ? void 0 : e[0];
															return this.mpdHandler.getSegmentInfos(n)
														}, e.prototype.getCurrentPeriodId = function() {
															return this.currentPeriodId
														}, e.prototype.getTargetLanguageObject = function(e) {
															var t = this;
															return this.previousExplicitlySetLangObj && this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(n) {
																return n.isLanguageAvailable(e, t.mimeType, t.previousExplicitlySetLangObj)
															}), !1, this.context.sourceContext.sourceIdentifier) ? this.previousExplicitlySetLangObj : this.currentLangObj
														}, e.prototype.switchPeriod = function(e) {
															var t, n, r = this,
																o = this.getTargetLanguageObject(e);
															if (this.logger.debug("".concat(Q, "[").concat(this.mimeType, "]: switching period from ").concat(this.currentPeriodId, " to ").concat(e)), this.initSegmentStore.clear(), this.removeCachedSegmentsOfPrecedingPeriods(), this.currentPeriodId = e, this.currentAdaptationSetId = this.findAdaptationSetId(e, o, !0), this.currentAdaptationSetId && (this.loadedAdaptationSetIds[e] = this.currentAdaptationSetId), this.currentAdaptationSetId) {
																null === (t = this.adaptationService) || void 0 === t || t.setAdaptationSetId(this.mimeType, this.currentAdaptationSetId);
																var s = this.mpdHandler.getPendingSegmentInfoRequest(),
																	c = R.MPDHandlerFactory.createInstance(this.context, this.mimeType, this.manifestLoader, e, o);
																c ? (this.mpdHandler.dispose(), this.mpdHandler = c) : this.eventHandler.fireError(new a.PlayerError(i.ErrorCode.SOURCE_MANIFEST_INVALID)), this.segmentPreProcessor.setMpdHandler(this.mpdHandler), this.mpdHandler.setPendingSegmentInfoRequest(s), this.mpdHandler.setAdaptationSetId(this.currentAdaptationSetId, void 0, {
																	isPeriodSwitch: !0
																})
															}
															if (this.isTransmuxerRequired()) {
																var l = this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																	return r.currentAdaptationSetId && e.findDownloadedHlsRepresentation(r.currentAdaptationSetId)
																}), null, this.context.sourceContext.sourceIdentifier);
																l && this.mpdHandler.setRepresentationId(l._internalId), this.hlsTimelineTracker && this.hlsTimelineTracker.reset(), null === (n = this.segmentManager) || void 0 === n || n.clearCache(!1)
															}
															this.hasDownloadError = !1, this.isLastSegment = !1, this.periodSwitch = !0
														}, e.prototype.getMPDHandler = function() {
															return this.mpdHandler
														}, e.prototype.getIndex = function() {
															return this.mpdHandler && this.mpdHandler.getIndex() || 0
														}, e.prototype.getSourceBufferTypes = function() {
															var e = [];
															return this.isTransmuxerRequired() && this.hls.isAvMuxedTogether ? (e.push("video/mp4"), e.push("audio/mp4")) : e.push(this.mimeType), e
														}, e.prototype.getCodecs = function() {
															var e, t = this.getCurrentAdaptationSet();
															return null !== (e = t && (0, E.getCodecsFromAdaptationSet)(t)) && void 0 !== e ? e : void 0
														}, e.prototype.getLiveEdgeTime = function() {
															return this.maybeIsLive() ? this.mpdHandler.getLiveEdgeTime() : -1
														}, e.prototype.setAdaptionLogicStartupPhase = function() {
															var e;
															null === (e = this.adaptationService) || void 0 === e || e.setStartupPhase(this.mimeType)
														}, e.prototype.getMimeType = function() {
															return this.mimeType
														}, e.prototype.removeCachedSegmentsOfPrecedingPeriods = function() {
															var e = this,
																t = this.context.store.getState(),
																n = t ? (0, p.getMetricsState)(t) : void 0;
															if (this.segmentManager && n) {
																var r = this.sourceStore.getState(),
																	i = r ? (0, M.getPlayingPeriodId)(r) : void 0;
																this.segmentManager.removeCachedInitSegments((function(t) {
																	return e.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																		return e.isPrecedingPeriod(i, t.getPeriodId())
																	}), !1, e.context.sourceContext.sourceIdentifier)
																})), ((0, p.getMetricsHistory)(n, this.mimeType, _.MetricType.CachedInitSegments) || []).filter((function(t) {
																	var n = t.value.internalRepId.periodId;
																	return e.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																		return e.isPrecedingPeriod(i, n)
																	}), !1, e.context.sourceContext.sourceIdentifier)
																})).forEach((function(t) {
																	return e.context.store.dispatch((0, h.removeMetricsValue)(e.mimeType, _.MetricType.CachedInitSegments, t))
																}))
															}
														}, e.prototype.canLoad = function() {
															var e;
															return Boolean(null === (e = this.segmentManager) || void 0 === e ? void 0 : e.canLoad())
														}, e.prototype.isTransmuxerRequired = function() {
															return this.hls.isTransmuxingRequired
														}, e.prototype.setTransmuxer = function(e) {
															this.hls.transmuxer = e
														}, e.prototype.getTransmuxer = function() {
															return this.hls.transmuxer
														}, e.prototype.resetTransmuxer = function() {
															this.hls.transmuxer && this.hls.transmuxer.reset()
														}, e.prototype.maybeIsHlsManifest = function() {
															return this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.isHlsManifest()
															}), !1, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.maybeIsSmoothManifest = function() {
															return this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.isSmoothManifest()
															}), !1, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.maybeIsLive = function() {
															return this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(e) {
																return e.isLive()
															}), !1, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.maybeFindPeriod = function(e) {
															return this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(t) {
																return t.findPeriod(e)
															}), null, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.maybeGetAdaptationSet = function(e) {
															return this.context.serviceManager.maybeCall(u.ServiceName.ManifestService, (function(t) {
																return t.getAdaptationSet(e)
															}), null, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.dispose = function() {
															var e, t;
															(0, c.dispose)(this.mpdHandler), (0, c.dispose)(this.timestampOffsetService), (0, c.dispose)(this.segmentPreProcessor), (0, c.dispose)(this.initSegmentStore), null === (e = this.adaptationService) || void 0 === e || e.release(this.mimeType), this.hlsTimelineTracker && this.hlsTimelineTracker.dispose(), (0, m.isContextAvailable)(this.context) && (null === (t = this.context.serviceManager.get(u.ServiceName.SegmentService)) || void 0 === t || t.disposeOfType(this.mimeType, this.currentLangObj))
														}, e
													}();

												function q(e, t) {
													var n = (0, H.getSegmentInfoTimeRange)(e.getSegmentInfo());
													n && t.dispatch((0, I.removeStreamTimeRange)((0, L.getTrackIdentifier)(e.getSegmentInfo()), n, L.StreamTimeRangeType.Loading))
												}

												function W(e, t, n, r, i) {
													var a = e.serviceManager.get(u.ServiceName.AdaptationService),
														o = e.serviceManager.get(u.ServiceName.ManifestService, e.sourceContext.sourceIdentifier),
														s = function(n, i) {
															var s = Boolean(null == a ? void 0 : a.shouldDownloadBeCancelled(t, n, i));
															return (null == o ? void 0 : o.isHlsManifest()) && r.possiblyDependentSegments && s ? (e.logger.debug("Download should be cancelled, but this is disabled for segments not starting with key frames"), !1) : s
														};
													return e.serviceManager.maybeCall(u.ServiceName.SegmentService, (function(e) {
														return e.add({
															mimeType: t,
															shouldDownloadBeCancelledCallback: s
														}, n, i)
													}))
												}

												function K(e) {
													var t = e.split("/")[1].toLowerCase();
													return Object.values(w.ContainerFormat).find((function(e) {
														return e === t
													}))
												}
												t.SegmentController = G, t.isSegmentOfMainStream = function(e, t) {
													return !t.isAvMuxedTogether || b.MimeTypeHelper.isVideo(e.getMimeType())
												}, t.getSegmentManager = W, t.extractContainerFormat = K
											},
											79568: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.SegmentType = void 0,
													function(e) {
														e.Init = "init", e.Data = "data", e.Any = "any"
													}(t.SegmentType || (t.SegmentType = {}))
											},
											28910: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.throwDownloadError = void 0;
												var r = n(36166),
													i = n(85739),
													a = n(99538),
													o = n(55579),
													s = n(59574),
													u = n(49520);

												function c(e, t, n, a) {
													if (0 === n) return t && t === u.RequestError.TimedOut ? new i.PlayerError(r.ErrorCode.NETWORK_SEGMENT_DOWNLOAD_TIMEOUT, {
														segmentUrl: a.url,
														mimeType: a.mimeType
													}, "Failed to load the segment: the request timed out.") : new i.PlayerError(r.ErrorCode.NETWORK_ERROR, {
														url: a.url,
														statusCode: n
													}, t);
													e.logger.debug(t);
													var o = {
														message: t
													};
													return a.url && (o.segment = function(e) {
														return {
															url: e.url,
															mimeType: e.mimeType,
															codecs: e.codecs
														}
													}(a)), new i.PlayerError(r.ErrorCode.NETWORK_ERROR, o, t)
												}
												t.throwDownloadError = function(e, t, n, r) {
													e.eventHandler.dispatchEvent(s.PlayerEvent.Warning, new a.PlayerWarning(o.WarningCode.PLAYBACK_DECODE_RETRIES_EXCEEDED)), e.eventHandler.fireError(c(e, t, n, r))
												}
											},
											18967: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentInfoProvider = void 0;
												var r = n(5793),
													i = function() {
														function e() {}
														return e.findSegmentInfoOfRepresentation = function(t, n) {
															if (n.SegmentList) {
																var r = n.SegmentList[0].SegmentURL,
																	i = t.getUrl(),
																	a = r.find((function(t) {
																		return e.getSegmentInfoUrl(t, n) === i
																	}));
																if (a) return a
															}
															return null
														}, e.findHlsRepresentationForSegment = function(t, n) {
															for (var r = !1, i = 0; i < n.Representation.length; i++) {
																var a = n.Representation[i],
																	o = a.SegmentList[0].SegmentURL,
																	s = void 0;
																for (s = 0; s < o.length; s++) {
																	var u = o[s];
																	if (e.getSegmentInfoUrl(u, a) === t.getUrl()) {
																		r = !0;
																		break
																	}
																}
																if (r) return {
																	representation: a,
																	index: s
																}
															}
															return null
														}, e.getSegmentInfoUrl = function(e, t) {
															var n = e._media;
															return r.URLHelper.isUrlAbsolute(n) || (n = r.URLHelper.concatUrlParts(t.BaseURL[0], n)), n
														}, e
													}();
												t.SegmentInfoProvider = i
											},
											88784: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getSegmentInfoId = t.SegmentInfoService = void 0;
												var r = n(59534),
													i = n(82072),
													a = function() {
														function e() {
															this.segmentControllers = []
														}
														return e.prototype.updatePlayerContext = function(e) {
															this.context = e
														}, e.prototype.setSegmentControllers = function(e) {
															this.segmentControllers = e
														}, e.prototype.getSegmentControllerMimeTypes = function() {
															return this.segmentControllers.map((function(e) {
																return e.getMimeType()
															}))
														}, e.prototype.getSegmentInfos = function(e, t) {
															if (!(0, i.isContextAvailable)(this.context)) return Promise.resolve([]);
															var n = this.context.serviceManager.get(r.ServiceName.ManifestService, this.context.sourceContext.sourceIdentifier).getPeriodIdForTime(e),
																a = this.segmentControllers.map((function(r) {
																	return function(e, t) {
																		return e.getCurrentPeriodId() !== t.targetPeriodId && e.switchPeriod(t.targetPeriodId), e.seekTo(t.startTime), e.getCurrentAdaptationSet() ? function(e, t) {
																			return e.getInitSegmentInfo().then((function(n) {
																				return n.isInitSegment || (t.duration -= n.duration),
																					function e(t, n, r) {
																						void 0 === r && (r = []);
																						var i = r[r.length - 1],
																							a = i ? i.startTime + i.duration : 0;
																						return n <= 0 || !t.hasNext(a) ? Promise.resolve(r) : t.getDataSegmentInfo(a).then((function(i) {
																							return n -= i.duration, r.push(i), e(t, n, r)
																						}))
																					}(e, t.duration).then((function(e) {
																						return [n].concat(e)
																					}))
																			}))
																		}(e, t) : Promise.resolve([])
																	}(r, {
																		startTime: e,
																		duration: t,
																		targetPeriodId: n
																	})
																}));
															return Promise.all(a).then((function(e) {
																return e.flatMap((function(e) {
																	return e
																}))
															}))
														}, e.prototype.dispose = function() {
															this.segmentControllers = []
														}, e
													}();
												t.SegmentInfoService = a, t.getSegmentInfoId = function(e) {
													return e.url + (e.byteRange ? "," + JSON.stringify(e.byteRange) : "")
												}
											},
											70121: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.generateSegmentId = t.getSegmentInfoTimeRange = t.createInitSegmentInfoBase = t.findSegmentIndexForTime = t.findSegmentForTime = void 0;
												var r = n(89199),
													i = n(29079);

												function a(e, t, n) {
													var r = !e || !e.length,
														i = t < e[0].startTime + e[0].duration;
													if (r || i) return 0;
													var a = e.length - 1;
													if (t >= e[a].startTime) return a;
													var s = Math.max(t - e[0].startTime, 0),
														u = Math.min(Math.floor(s / n), e.length - 1);
													return o(e[0]) && o(e[u]) ? function(e, t, n) {
														for (var r = e.length - 1; e[n].startTime > t || t >= e[n].startTime + e[n].duration;) {
															if (t < e[n].startTime ? n-- : n++, n <= 0) return 0;
															if (n >= r) return r;
															if (!o(e[n])) return null
														}
														return n
													}(e, t, u) : null
												}

												function o(e) {
													return e && (0, r.isNumber)(e.startTime)
												}
												t.findSegmentForTime = function(e, t, n) {
													return e[a(e, t, n)]
												}, t.findSegmentIndexForTime = a, t.createInitSegmentInfoBase = function(e) {
													var t = e._internalId;
													return {
														internalRepresentationId: t,
														representationId: t.representationId,
														periodId: t.periodId,
														mimeType: e._mimeType,
														isInitSegment: !0,
														downloaded: !1
													}
												}, t.getSegmentInfoTimeRange = function(e) {
													if ((null == e ? void 0 : e.duration) && void 0 !== (null == e ? void 0 : e.startTime)) return {
														start: e.startTime,
														end: e.startTime + e.duration
													}
												}, t.generateSegmentId = function(e) {
													var t, n, r = null !== (n = null === (t = e.discontinuitySequenceNumber) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : e.periodId,
														a = e.byteRange ? "-".concat(e.byteRange.start, ":").concat(e.byteRange.end) : "";
													return i.Util.hashCode("".concat(r, ":").concat(e.url).concat(a))
												}
											},
											59266: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.assignSegmentStartTimesFromHlsPlaylist = t.SegmentListMPDHandler = void 0;
												var i = n(59534),
													a = n(43587),
													o = n(12391),
													s = n(22758),
													u = n(80815),
													c = n(89199),
													l = n(5793),
													f = n(43068),
													d = n(83024),
													h = n(44578),
													p = n(26147),
													_ = n(35675),
													m = n(70121),
													b = function() {
														function e(e) {
															this.context = e, this.sourceContext = e.sourceContext, this.settings = e.settings, this.logger = e.logger, this.manifestService = e.serviceManager.get(i.ServiceName.ManifestService, this.sourceContext.sourceIdentifier), this.distanceToListStartSeconds = 0, this.segmentListMap = {}, this.timestampOffset = NaN
														}
														return e.prototype.createSegmentListEntry = function(e, t) {
															if (!e) return null;
															var n = {
																isInitSegment: !1,
																url: e._media,
																downloaded: !1,
																startTime: e._expectedPlaybackTime,
																periodId: t
															};
															return ["_key", "_duration", "_dateTime", "_metadata", "_byteRange", "_init", "_discontinuitySequenceNumber"].filter((function(t) {
																return e.hasOwnProperty(t)
															})).forEach((function(t) {
																return n[t.substr(1)] = e[t]
															})), n.segmentId = (0, m.generateSegmentId)(n), n
														}, e.prototype.removeDroppedOutSegmentsFromList = function(e, t, n) {
															if (t.SegmentURL.length < 1) return e.entries = [], void(e.totalDuration = 0);
															for (var r = this.createSegmentListEntry(t.SegmentURL[0], n.periodId), i = 0, a = 0; a < e.entries.length; a++) {
																var o = e.entries[a];
																if ((0, h.isIdenticalSegmentInfo)(o, r)) break;
																i += o.duration, e.entries.splice(a, 1), a--, this.manifestService.isLive() && this.currentRepresentationId.equals(n) && this.rewindOneSegment()
															}
															e.totalDuration -= i
														}, e.prototype.addNewSegmentsToList = function(e, t, n) {
															for (var r = [], i = e.entries[e.entries.length - 1], a = 0, o = t.SegmentURL.length - 1; o >= 0; o--) {
																var s = this.createSegmentListEntry(t.SegmentURL[o], n);
																if (i && (0, h.isIdenticalSegmentInfo)(i, s)) break;
																isNaN(s.duration) && (s.duration = e.maximumSegmentDuration), s.duration /= e.timescale, a += s.duration, r.unshift(s)
															}
															e.totalDuration += a, e.entries = e.entries.concat(r)
														}, e.prototype.updateSegmentList = function(e, t) {
															var n, r, i = t.SegmentList,
																a = t._internalId.representationId;
															e.timescale = 1, e.maximumSegmentDuration = 1, e.startNumber = 1;
															for (var o = function(o) {
																	var u = i[o];
																	u.hasOwnProperty("_duration") && (e.maximumSegmentDuration = Number(u._duration)), ["_timescale", "_startNumber", "_presentationTimeOffset"].filter((function(e) {
																		return u.hasOwnProperty(e)
																	})).forEach((function(t) {
																		return e[t.substr(1)] = u[t]
																	})), (null !== (r = null === (n = f.ModuleManager.get(d.ModuleName.DASH, !1)) || void 0 === n ? void 0 : n.initSegmentInfoSourceDetectors.isInitializationNode) && void 0 !== r ? r : v)(u) ? e.init = f.ModuleManager.get(d.ModuleName.DASH, !1).initSegmentInfoProviders.provideSegmentInfoFromInitializationNodeProperty(u, t) : delete e.init, u.hasOwnProperty("SegmentURL") && (s.removeDroppedOutSegmentsFromList(e, u, t._internalId), s.addNewSegmentsToList(e, u, t._internalId.periodId), s.manifestService.isHlsManifest() ? y(e.entries, a, s.manifestService) : s.assignSegmentStartTimesForDash(e, t._internalId))
																}, s = this, u = 0; u < i.length; u++) o(u)
														}, e.prototype.assignSegmentStartTimesForDash = function(e, t) {
															var n = this.getMinStartTime(t),
																r = 0;
															e.entries.forEach((function(e) {
																var t;
																e.startTime = n + r, r += null !== (t = e.duration) && void 0 !== t ? t : 0
															}))
														}, e.prototype.extrapolateStartTimesFromDiscontinuityStarts = function(e) {
															var t = this.getSegmentListEntries(this.currentRepresentationId),
																n = f.ModuleManager.get(d.ModuleName.HLS).selectors,
																r = n.getHlsState,
																i = n.getDiscoSequenceTimings,
																a = n.getPlaylistStartTime,
																o = function(e, t) {
																	for (var n = e[0].discontinuitySequenceNumber, r = 1; r < e.length; r++) {
																		var i = e[r].discontinuitySequenceNumber;
																		if (i !== n) {
																			var a = g(t, i);
																			if (null != a) return {
																				index: r,
																				discontinuityStartTime: a
																			}
																		}
																	}
																	return null
																}(t, i(r(this.getSourceStateService().getState())));
															if (!o) {
																var s = a(r(this.getSourceStateService().getState()), e.getRepresentationId().representationId);
																o = {
																	index: 0,
																	discontinuityStartTime: s
																}, this.logger.debug("Could not find matching discontinuity start times for " + "".concat(e.getSegmentInfo().discontinuitySequenceNumber, " using playlist startTime: ").concat(s))
															}
															this.logger.debug("Aligning segments of ".concat(e.getRepresentationId().representationId, " to discontinuity start ") + "".concat(o.discontinuityStartTime, " of ").concat(e.getSegmentInfo().discontinuitySequenceNumber)), t[o.index].startTime = o.discontinuityStartTime;
															for (var u = o.index - 1; u >= 0; u--) t[u].startTime = t[u + 1].startTime - t[u + 1].duration;
															for (u = o.index + 1; u < t.length; u++) t[u].startTime = t[u - 1].startTime + t[u - 1].duration
														}, e.prototype.getSourceStateService = function() {
															return this.context.serviceManager.get(i.ServiceName.SourceStoreService, this.context.sourceContext.sourceIdentifier)
														}, e.prototype.getListIndexForSegmentByUrl = function(e, t) {
															for (var n = -1, r = this.getSegmentListEntries(t), i = 0; i < r.length; i++)
																if ((0, h.isIdenticalSegmentInfo)(r[i], e)) {
																	n = i;
																	break
																} return n
														}, e.prototype.populateSegmentListMap = function(e) {
															var t = this;
															this.manifestService.getAdaptationSet(e).Representation.forEach((function(e) {
																var n = t.segmentListMap[e._internalId.key()];
																if (n || (n = t.initializeSegmentList(e._internalId.key())), e.hasOwnProperty("SegmentList") && (t.updateSegmentList(n, e), f.ModuleManager.has(d.ModuleName.DASH))) {
																	var r = f.ModuleManager.get(d.ModuleName.DASH).initSegmentInfoSourceDetectors.isInitializationNode;
																	if (!n.hasOwnProperty("init") && e.hasOwnProperty("SegmentBase") && e.SegmentBase && r(e.SegmentBase[0])) {
																		var i = f.ModuleManager.get(d.ModuleName.DASH).initSegmentInfoProviders.provideSegmentInfoFromInitializationNodeProperty;
																		n.init = i(e.SegmentBase[0], e)
																	}
																}
															}))
														}, e.prototype.selectNewRepresentationId = function() {
															var e, t, n = this,
																r = null === (e = this.context.serviceManager.get(i.ServiceName.SourceStoreService, this.sourceContext.sourceIdentifier).getState().activeTracks) || void 0 === e ? void 0 : e[this.adaptationSetId.adaptationSetId];
															if ((null === (t = null == r ? void 0 : r.selectedRepresentationId) || void 0 === t ? void 0 : t.periodId) === this.adaptationSetId.periodId) return r.selectedRepresentationId;
															if (this.currentRepresentationId) {
																var a = this.manifestService.getRepresentation(this.adaptationSetId, this.currentRepresentationId.representationId);
																if (a) return a._internalId
															}
															return (this.getMatchingRepresentationByBandwidth((function(e) {
																return n.isSegmentInfoLoaded(e._internalId)
															})) || this.getMatchingRepresentationByBandwidth())._internalId
														}, e.prototype.getMatchingRepresentationByBandwidth = function(e) {
															return this.manifestService.getMatchingRepresentationByBandwidth(this.adaptationSetId, this.getCurrentBandwidth(), e)
														}, e.prototype.shouldUpdateRepresentation = function() {
															var e = this.adaptationSetId.equals(this.currentRepresentationId),
																t = !this.currentRepresentationId || Boolean(this.manifestService.getRepresentationById(this.currentRepresentationId));
															return !this.currentRepresentationId || !e || !t
														}, e.prototype.setAdaptationSetId = function(e) {
															this.adaptationSetId = e, this.populateSegmentListMap(this.adaptationSetId);
															var t, n = this.manifestService.isLive(),
																r = 0;
															this.shouldUpdateRepresentation() && (this.currentRepresentationId = this.selectNewRepresentationId());
															var i = this.segmentListMap[this.currentRepresentationId.key()];
															if (i || (i = this.initializeSegmentList(this.currentRepresentationId.key())), i && n && i.entries && i.entries.length > 0) {
																var a = i.entries.length - 1;
																this.listIndex > a && (r = this.listIndex - a), this.listIndex = Math.min(a, this.listIndex || 0), this.listIndex = Math.max(0, this.listIndex), t = i.entries[this.listIndex]
															}
															if (this.listIndex = this.listIndex || 0, n && (this.distanceToListStartSeconds = this.getSegmentDuration() * this.settings.LIVE_SEGMENT_LIST_START_INDEX_OFFSET), n) {
																if (t && i) {
																	var o = this.getListIndexForSegmentByUrl(t, this.currentRepresentationId);
																	o >= 0 ? this.listIndex = o + r : this.reset()
																} else this.reset();
																var s = this.checkForSegmentInfoError();
																s ? this.rejectPendingSegmentInfoRequest(s) : this.resolvePendingSegmentInfoRequests()
															} else this.resolvePendingSegmentInfoRequests()
														}, e.prototype.initializeSegmentList = function(e) {
															var t = {
																totalDuration: 0,
																entries: [],
																startNumber: 0,
																init: null,
																maximumSegmentDuration: 1,
																timescale: 1
															};
															return this.segmentListMap[e] = t, t
														}, e.prototype.getCurrentBandwidth = function() {
															var e = 0,
																t = this.getCurrentRepresentation();
															return t && (e = t._bandwidth), e
														}, e.prototype.checkForSegmentInfoError = function() {
															var e = this.manifestService.getPeriod(this.currentRepresentationId);
															if (Boolean(e) && !this.hasNext()) {
																if (e.droppedOut) return _.SegmentInfoErrors.PERIOD_DROPPED_OUT;
																if (!this.manifestService.isLastPeriod(this.currentRepresentationId.periodId)) return _.SegmentInfoErrors.PERIOD_COMPLETE
															}
															return null
														}, e.prototype.reset = function() {
															this.settings.ENABLE_SEEK_FOR_LIVE ? this.listIndex = 0 : this.timeShift(0)
														}, e.prototype.syncSegmentStartTimeUsingMediaSequenceNumber = function(e, t) {
															var n, r, i, a, s = this.manifestService.getRepresentationById(e),
																u = this.manifestService.getRepresentationById(t),
																l = (0, c.isNumber)(null === (n = null == u ? void 0 : u._hls) || void 0 === n ? void 0 : n.mediaSequence) && (0, c.isNumber)(null === (r = null == s ? void 0 : s._hls) || void 0 === r ? void 0 : r.mediaSequence);
															if (s && u && l) {
																var f = (null === (i = null == u ? void 0 : u._hls) || void 0 === i ? void 0 : i.mediaSequence) - (null === (a = null == s ? void 0 : s._hls) || void 0 === a ? void 0 : a.mediaSequence),
																	d = this.getSegmentListEntries(e),
																	h = this.getSegmentListEntries(t);
																f >= d.length || (h[0].startTime = d[f].startTime, (0, o.forEachFromIndex)(h, 1, (function(e, t) {
																	(0, c.isNumber)(e.startTime) && (0, c.isNumber)(e.duration) && (t.startTime = e.startTime + e.duration)
																})))
															}
														}, e.prototype.setRepresentationId = function(e) {
															var t = this.manifestService.getRepresentationById(e),
																n = this.getSegmentListEntries(this.currentRepresentationId)[this.listIndex];
															if (t) {
																var r = void 0 === this.currentRepresentationId,
																	i = this.currentRepresentationId;
																if (this.currentRepresentationId = e, this.manifestService.isLive() && t._hls)
																	if (this.settings.HLS_SYNC_SEGMENT_PLAYBACK_TIME_VIA_MEDIA_SEQUENCE && this.syncSegmentStartTimeUsingMediaSequenceNumber(i, this.currentRepresentationId), r) this.reset();
																	else if (this.settings.HLS_SYNC_VIA_MEDIA_SEQUENCE) {
																	var a = this.manifestService.getRepresentationById(i)._hls.mediaSequence + this.listIndex;
																	this.listIndex = a - t._hls.mediaSequence, this.listIndex = Math.max(this.listIndex, 0)
																} else if (null != (null == n ? void 0 : n.startTime) && !isNaN(n.startTime)) {
																	var o = this.getIndexForTime(n.startTime);
																	null === o || isNaN(o) || (this.listIndex = this.adaptListIndexToCorrectIndex(o, n.startTime))
																}
																return !0
															}
															return !1
														}, e.prototype.adaptListIndexToCorrectIndex = function(e, t) {
															var n = this.getSegmentListEntries(this.currentRepresentationId),
																r = [n[e], n[e + 1]];
															if (e === n.length - 1 || r.some((function(e) {
																	return !e.startTime
																}))) return e;
															var i = r.map((function(e) {
																	return Math.abs(e.startTime - t)
																})),
																a = Math.min.apply(this, i);
															return e + i.indexOf(a)
														}, e.prototype.getInitSegmentInfo = function() {
															var e = this.getSegmentList(this.currentRepresentationId);
															if (null == e ? void 0 : e.init) return e.init.presentationTimeOffset = this.getTimestampOffset(), e.init;
															var t = this.getSegmentListEntries(this.currentRepresentationId);
															if (this.listIndex < t.length && this.listIndex > -1) {
																var n = r({}, t[this.listIndex]);
																if (n.init) {
																	var i = n.init;
																	return i.isInitSegment = !0, i
																}
															}
															return null
														}, e.prototype.getNextSegmentInfo_ = function() {
															var e = this.getSegmentListEntries(this.currentRepresentationId);
															if (e.length && this.listIndex < e.length && this.listIndex > -1) {
																var t = e[this.listIndex];
																return t.isInitSegment = !1, t.presentationTimeOffset = this.getTimestampOffset(), this.listIndex++, t
															}
															return null
														}, e.prototype.getNextSegmentInfo = function(e) {
															var t = this.getNextSegmentInfo_();
															return t ? Promise.resolve(t) : this.queueSegmentInfoRequest()
														}, e.prototype.getSegmentInfos = function() {
															var e = this,
																t = this.listIndex,
																n = this.manifestService.getTotalDuration(),
																r = {},
																i = this.manifestService.getAdaptationSet(this.adaptationSetId);
															if (i) {
																var a = this.getSeekableRange().end - this.getSeekableRange().start,
																	o = i.Representation[0].BaseURL[0].url;
																i.Representation.forEach((function(i) {
																	var s, c, f = e.getSegmentListEntries(i._internalId),
																		d = e.manifestService.isLive();
																	d ? (s = t - a / e.getSegmentDuration(), c = t) : (s = 0, c = parseInt(s + a / e.getSegmentDuration()) - 1);
																	for (var h = 0, p = [], _ = s; _ <= c; _++) {
																		var m = p.length;
																		p[m] = {};
																		var b = void 0;
																		if (f.length && (b = f[m].url), "string" == typeof b) {
																			var g = l.URLHelper.concatBaseUrlWithPartial(o, b);
																			p[m].url = l.URLHelper.appendQueryParametersToUrl(g, e.settings.QUERY_PARAMETERS)
																		}
																		p[m].duration = e.getSegmentDuration(), d ? (h = e.settings.ENABLE_SEEK_FOR_LIVE ? e.getExpectedPresentationTime(_) : (0, u.toSeconds)(Date.now() - e.manifestService.getAvailabilityStartTime()) - n, t++) : (p[m].startTime = h, h += p[m].duration), r[i._id] = p
																	}
																}))
															}
															return r
														}, e.prototype.getSubtitleUrl = function() {
															return this.manifestService.getAvailableSubtitles(this.adaptationSetId.periodId)[0].url
														}, e.prototype.getStartNumber = function() {
															var e = this.getSegmentList(this.currentRepresentationId);
															return e ? e.startNumber : 1
														}, e.prototype.getSegmentDuration = function() {
															var e = this,
																t = this.getSegmentList(this.currentRepresentationId),
																n = this.getSegmentListEntries(this.currentRepresentationId);
															if (t) return n.length > 0 && (0, c.isNumber)(t.totalDuration) ? t.totalDuration / n.length : t.maximumSegmentDuration;
															if (this.manifestService.getAdaptationSet(this.adaptationSetId)) {
																var r = Object.keys(this.segmentListMap).map((function(t) {
																	return e.segmentListMap[t]
																})).find((function(e) {
																	return null !== e
																}));
																if (r) return r.maximumSegmentDuration
															}
															return 1
														}, e.prototype.seekTo = function(e) {
															e > -1 && (this.listIndex = this.getIndexForTime(e))
														}, e.prototype.isSegmentInfoLoadable = function() {
															return !this.getCurrentPeriod().droppedOut
														}, e.prototype.hasNext = function() {
															if (!this.isSegmentInfoLoaded(this.currentRepresentationId)) return this.isSegmentInfoLoadable();
															if (this.currentRepresentationId) {
																var e = this.listIndex < this.getSegmentListEntries(this.currentRepresentationId).length;
																if (this.manifestService.isHlsManifest()) {
																	if (this.manifestService.isLastPeriod(this.currentRepresentationId.periodId)) {
																		var t = f.ModuleManager.get(d.ModuleName.HLS).selectors,
																			n = t.getHlsState,
																			r = (0, t.getEndlist)(n(this.getSourceStateService().getState()));
																		return !r || e && r
																	}
																	return e
																}
																return e
															}
															return !0
														}, e.prototype.setTimestampOffset = function(e, t) {
															void 0 === t && (t = 1), this.timestampOffset = e / t
														}, e.prototype.getTimestampOffset = function() {
															if (!isNaN(this.timestampOffset)) return this.timestampOffset;
															var e = this.getCurrentPeriod(),
																t = 0;
															if (this.currentRepresentationId) {
																var n = this.getSegmentList(this.currentRepresentationId);
																n && !isNaN(n.presentationTimeOffset) && (t = n.presentationTimeOffset / n.timescale)
															}
															return e && !this.manifestService.isHlsManifest() && (t -= e.start), t
														}, e.prototype.getIndex = function() {
															return this.listIndex
														}, e.prototype.setIndex = function(e) {
															if ("number" == typeof e) return e < 0 ? (this.logger.debug("Tried to set index at MPDHandler to value smaller 0. Setting to 0."), void(this.listIndex = 0)) : void(this.listIndex = e);
															this.logger.debug("Tried to set index at MPDHandler with parameter not being a number!")
														}, e.prototype.queueSegmentInfoRequest = function() {
															var e = this;
															return this.pendingSegmentInfoRequest ? Promise.reject("fail") : new Promise((function(t, n) {
																e.pendingSegmentInfoRequest = {
																	resolve: t,
																	reject: n
																}
															}))
														}, e.prototype.resolvePendingSegmentInfoRequests = function() {
															if (this.pendingSegmentInfoRequest) {
																var e = this.getNextSegmentInfo_();
																e ? (this.pendingSegmentInfoRequest.resolve(e), this.pendingSegmentInfoRequest = null) : this.manifestService.isLive() || this.hasNext() || this.pendingSegmentInfoRequest.reject("eos")
															}
														}, e.prototype.rejectPendingSegmentInfoRequest = function(e) {
															this.pendingSegmentInfoRequest && (this.pendingSegmentInfoRequest.reject(e), this.pendingSegmentInfoRequest = null)
														}, e.prototype.getLiveEdgeIndex = function() {
															var e = this.getSegmentListEntries(this.currentRepresentationId);
															return e.length > 0 ? e.length - 1 : 0
														}, e.prototype.getIndexForOffset = function(e) {
															for (var t, n = Math.abs(e), r = this.getSegmentDuration(), i = this.getSegmentListEntries(this.currentRepresentationId), a = this.getLiveEdgeIndex(), o = 0, s = i.length - 1; s >= 0 && !((o += null !== (t = i[s].duration) && void 0 !== t ? t : r) >= n); s--) a--;
															return Math.max(0, a)
														}, e.prototype.timeShift = function(e, t, n) {
															if (this.manifestService.isLive()) {
																var r = this.listIndex;
																this.listIndex = n && this.hasStartTimes() ? this.getIndexForTime(n) : this.getIndexForOffset(e), this.logger.debug("timeShift changes index from ".concat(r, " to ").concat(this.listIndex, ", based on") + " offset ".concat(e, " and target time ").concat(n))
															}
														}, e.prototype.hasStartTimes = function() {
															var e, t = null === (e = this.getSegmentListEntries(this.currentRepresentationId)[0]) || void 0 === e ? void 0 : e.startTime;
															return (0, c.isNumber)(t) && t >= 0
														}, e.prototype.updateRepresentation = function(e) {
															return Promise.resolve(e)
														}, e.prototype.isSegmentInfoLoaded = function(e) {
															if (void 0 === e && (e = this.currentRepresentationId), !e) return !1;
															var t = this.getSegmentListEntries(e),
																n = this.manifestService.getRepresentationById(e);
															return !(!t.length || !n)
														}, e.prototype.rewindOneSegment = function() {
															return this.listIndex--, !(this.listIndex < 0 && (this.logger.debug("List array index is smaller than 0, probably a discontinuity. Using 0."), this.listIndex = 0, 1))
														}, e.prototype.getCurrentPeriod = function() {
															return this.manifestService.getPeriod(this.currentRepresentationId)
														}, e.prototype.getExpectedPresentationTime = function(e) {
															var t = this.getCurrentPeriod().start;
															return (this.manifestService.hasSinglePeriod() ? this.getSeekableRange().start : t) + this.getSegmentListEntries(this.currentRepresentationId).slice(0, e).reduce((function(e, t) {
																return e + t.duration
															}), 0)
														}, e.prototype.getCurrentRepresentation = function() {
															return this.manifestService.getRepresentationById(this.currentRepresentationId)
														}, e.prototype.getSegmentList = function(e) {
															if (e) return this.segmentListMap[e.key()]
														}, e.prototype.getSegmentListEntries = function(e) {
															var t, n;
															return e ? this.settings.ENABLE_SEGMENT_INFO_PROVIDER_FROM_STORE && this.manifestService.isHlsManifest() ? this.getStoreSegmentInfos(e) : null !== (n = null === (t = this.getSegmentList(e)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [] : []
														}, e.prototype.getStoreSegmentInfos = function(e) {
															var t, n = null === (t = this.getSourceStateService()) || void 0 === t ? void 0 : t.getState();
															return (0, p.getSegmentInfos)(n, e.key())
														}, e.prototype.findListIndexWithoutSegmentStartTimes = function(e, t) {
															var n, r;
															if (!this.adaptationSetId) return 0;
															for (var i = this.manifestService.getPeriod(this.adaptationSetId), a = null !== (n = null == i ? void 0 : i.start) && void 0 !== n ? n : 0, o = this.getSegmentListEntries(this.currentRepresentationId), s = 0, u = a; u <= t && s < o.length; s++) u += null !== (r = o[s].duration) && void 0 !== r ? r : 0;
															return Math.max(s - 1, 0)
														}, e.prototype.getIndexForTime = function(e) {
															var t = this.getSegmentList(this.currentRepresentationId),
																n = this.getSegmentListEntries(this.currentRepresentationId);
															if (!t || 0 === n.length || !(0, c.isNumber)(t.totalDuration)) return 0;
															var r = this.getMinStartTime(),
																i = Math.max(r, e),
																a = t.totalDuration / n.length,
																o = (0, m.findSegmentIndexForTime)(n, i, a);
															return null !== o ? o : this.findListIndexWithoutSegmentStartTimes(t, i)
														}, e.prototype.getMinStartTime = function(e) {
															void 0 === e && (e = this.currentRepresentationId);
															var t = this.manifestService.hasSinglePeriod() ? this.getSeekableRange().start : this.manifestService.getPeriod(e).start;
															return this.manifestService.isFirstPeriod(e.periodId) && (t += this.distanceToListStartSeconds), t
														}, e.prototype.getLiveEdgeTime = function() {
															var e = this.manifestService.getLastPeriod();
															return e ? e.start + s.DurationConverter.getDurationInSec(e._duration) : 1 / 0
														}, e.prototype.getActualTimeShiftBufferDepth = function() {
															return this.manifestService.getTimeShiftBufferDepthSeconds()
														}, e.prototype.getSeekableRange = function() {
															var e = {
																	start: 0,
																	end: 0
																},
																t = this.manifestService.getTotalDuration();
															if (!this.manifestService.isLive()) return e.start = (0, a.getStartTimeOffset)(this.getSourceStateService().getState()), e.end = t, e;
															var n = this.manifestService.getTimeShiftBufferDepthSeconds(),
																r = (0, u.toSeconds)(this.manifestService.getRequestTimestamp() - this.manifestService.getAvailabilityStartTime());
															if (e.start = Math.max(r + n, 0), e.end = Math.max(r, 0), f.ModuleManager.has(d.ModuleName.HLS) && this.manifestService.isHlsManifest()) {
																var i = f.ModuleManager.get(d.ModuleName.HLS).selectors,
																	o = i.getHlsState;
																"EVENT" === (0, i.getPlaylistType)(o(this.getSourceStateService().getState())) ? (e.start = 0, e.end = t) : e.start += this.distanceToListStartSeconds
															}
															return e.end -= this.manifestService.getDesiredDistanceToLiveEdge(), e
														}, e.prototype.getPendingSegmentInfoRequest = function() {
															return this.pendingSegmentInfoRequest
														}, e.prototype.setPendingSegmentInfoRequest = function(e) {
															this.pendingSegmentInfoRequest = e
														}, e.prototype.preProcessAvailableSegment = function(e, t, n) {
															return null
														}, e.prototype.dispose = function() {
															this.settings = null, this.manifestService = null, this.adaptationSetId = null, this.currentRepresentationId = null, this.manifestService = null, this.pendingSegmentInfoRequest = null, this.segmentListMap = null
														}, e
													}();

												function g(e, t) {
													var n = e[String(t)];
													return n && n.startTime > 0 ? n.startTime : (n = e[String(t - 1)]) && n.endTime > 0 ? n.endTime : null
												}
												t.SegmentListMPDHandler = b;
												var v = function() {
													return !1
												};

												function y(e, t, n) {
													var r;
													e.length && n.hasSegmentStartTimeForHlsRepresentation(t) && (null != e[0].startTime ? r = (0, o.findIndexFromEnd)(e, (function(e) {
														return null != e.startTime
													})) + 1 : (e[0].startTime = n.getStartTimeForHlsSegment(t, e[0]), r = 1), (0, o.forEachFromIndex)(e, r, (function(e, t) {

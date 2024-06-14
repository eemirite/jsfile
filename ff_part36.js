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
														return t.startTime = e.startTime + e.duration
													})))
												}
												t.assignSegmentStartTimesFromHlsPlaylist = y
											},
											89617: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentLoader = t.SegmentLoadingErrorReason = void 0;
												var i, a, o = n(14809),
													s = n(36166),
													u = n(85739),
													c = n(59574),
													l = n(49520),
													f = n(40237),
													d = n(79446),
													h = n(41609),
													p = n(22221),
													_ = n(45366),
													m = n(11917),
													b = n(3988),
													g = n(50163),
													v = n(80815),
													y = n(43068),
													A = n(83024),
													S = n(46022),
													w = n(53140),
													E = n(49100),
													T = n(30733),
													C = n(27005);
												! function(e) {
													e.CANCEL = "CANCEL", e.ERROR_LOADING = "ERROR_LOADING", e.ERROR_DECRYPTING = "ERROR_DECRYPTING", e.BUSY = "BUSY", e.UNKNOWN = "UNKNOWN"
												}(i = t.SegmentLoadingErrorReason || (t.SegmentLoadingErrorReason = {})),
												function(e) {
													e[e.IDLE = 1] = "IDLE", e[e.LOADING = 2] = "LOADING", e[e.CANCELLING = 3] = "CANCELLING", e[e.TERMINATED = 4] = "TERMINATED"
												}(a || (a = {}));
												var $ = function() {
													function e(e, t, n, i) {
														var o = this;
														if (void 0 === i && (i = !1), this.context = e, this.cancelLoading = function() {
																var e, t, n, r, i, s;
																if (clearTimeout(o.loadTimeoutID), clearInterval(o.progressCheckIntervalId), o.loadTimeoutID = null, o.isLoading()) {
																	if (delete o.currentSegmentInfo[o.loadingUrl], o.state = a.CANCELLING, o.loader.cancel(), void 0 !== o.currentRequestProgress) {
																		var u = null !== (t = null === (e = o.currentRequestProgress.responseTiming) || void 0 === e ? void 0 : e.headersReceivedTimestamp) && void 0 !== t ? t : -1,
																			c = null !== (r = null === (n = o.currentRequestProgress.responseTiming) || void 0 === n ? void 0 : n.openedTimestamp) && void 0 !== r ? r : -1,
																			l = null !== (i = o.currentRequestProgress.elapsedTime) && void 0 !== i ? i : -1,
																			f = u - c;
																		l >= 0 && f >= 0 && l > f && o.context.store.dispatch((0, p.addMetricsValue)(o.mimeType, m.MetricType.DownloadInformation, {
																			bytes: o.currentRequestProgress.loadedBytes,
																			time: l,
																			timeToFirstByte: f
																		})), o.canceledSegmentRequestFinishedEvent = {
																			success: !1,
																			httpStatus: 408,
																			downloadTime: l,
																			size: o.currentRequestProgress.loadedBytes,
																			duration: null !== (s = o.segmentDuration) && void 0 !== s ? s : 0,
																			isInit: o.isInit,
																			mimeType: o.mimeType,
																			uid: void 0
																		}
																	}
																	o.currentRequestProgress = void 0
																}
															}, this.checkLoadingProgress = function() {
																var e, t, n, i = null !== (n = null === (t = null === (e = o.currentRequestProgress) || void 0 === e ? void 0 : e.responseTiming) || void 0 === t ? void 0 : t.sendTimestamp) && void 0 !== n ? n : -1;
																void 0 === o.currentRequestProgress || i < 0 || o.onProgress(r(r({}, o.currentRequestProgress), {
																	elapsedTime: f.TimingUtil.getHiResTimestamp() - i
																}))
															}, this.onProgress = function(e) {
																var t, n = null !== (t = e.elapsedTime) && void 0 !== t ? t : -1;
																if (o.currentRequestProgress = e, o.currentRequestProgress.segmentDuration = o.segmentDuration, o.currentRequestProgress.url = o.loadingUrl, !(o.isInit || n <= .5 || o.state !== a.LOADING) && o.onDownloadShouldBeCancelledCallback(e)) {
																	var r = (8 * e.loadedBytes / 1e3 / n).toFixed(2);
																	o.logger.debug("cancel download ".concat(o.currentRequestProgress.url, " (measured bandwidth: ").concat(r, " kbps)")), o.cancelLoading()
																}
															}, this.logger = e.logger, this.eventHandler = e.eventHandler, this.customLoaderArgs = e.config.tweaks.segmentLoaderArgs || null, this.customLoader = e.config.tweaks.segmentLoader || null, this.segmentDuration = 1, this.segmentNumber = 0, this.state = a.IDLE, this.mimeType = t, this.keyStore = new E.KeyStore, this.keyLoader = new w.KeyLoader(this.context), this.onDownloadShouldBeCancelledCallback = n, this.currentLoadPromise = null, this.currentSegmentInfo = {}, this.canceledSegmentRequestFinishedEvent = null, this.isFetchSupported = "function" == typeof window.fetch, this.isPrefetchingLoader = i, y.ModuleManager.has(A.ModuleName.ContainerMP4)) {
															var s = y.ModuleManager.get(A.ModuleName.ContainerMP4);
															this.cmafChunkParser = new s.CmafChunkParser(this.context)
														}
														this.setupContentLoader()
													}
													return e.prototype.isLoading = function() {
														var e = Boolean(this.keyLoader && this.keyLoader.isLoading());
														return this.state === a.LOADING || this.state === a.CANCELLING || this.loader && this.loader.isLoading() || e
													}, e.prototype.isRetrying = function() {
														return this.loader && this.loader.isRetrying()
													}, e.prototype.load = function(e) {
														var t = this;
														if (this.isLoading()) return this.logger.debug("Error loading segment, loader is busy!" + this.loadingUrl), Promise.reject({
															reason: i.BUSY
														});
														this.loader && this.loader.dispose(), this.canceledSegmentRequestFinishedEvent = null, this.loader = (0, T.getLoader)(this.context, this.defaultLoaderArgs), this.state = a.LOADING, this.currentSegmentInfo[e.url] = e, this.encryptionInfo = e.key;
														var n = Promise.resolve();
														if (this.encryptionInfo && !this.encryptionInfo.buffer)
															if (this.encryptionInfo.method === o.HlsEncryptionMethod.AES_128) n = this.getKey(e).then((function(e) {
																return t.encryptionInfo.buffer = e
															}));
															else if (this.encryptionInfo.method === o.HlsEncryptionMethod.SAMPLE_AES) return this.eventHandler.fireError(new u.PlayerError(s.ErrorCode.SOURCE_ENCRYPTION_METHOD_NOT_SUPPORTED, {
															"encryption-method": this.encryptionInfo.method,
															supported: "AES_128"
														}, "The SAMPLE_AES encryption method is not supported.")), this.state = a.IDLE, Promise.reject({
															reason: i.ERROR_DECRYPTING
														});
														return this.currentLoadPromise = n.then((function() {
															return t.loadSegment(e).catch((function(e) {
																throw t.state = a.IDLE, t.currentLoadPromise = null, e
															}))
														})), this.currentLoadPromise
													}, e.prototype.getCurrentLoadPromise = function() {
														return this.currentLoadPromise
													}, e.prototype.getKey = function(e) {
														var t = this,
															n = e.key.uri,
															r = this.keyStore.get(n);
														return r ? Promise.resolve(r) : this.keyLoader.load(n).then((function(e) {
															return t.keyStore.put(n, e), e
														})).catch((function() {
															throw {
																reason: i.ERROR_DECRYPTING
															}
														}))
													}, e.prototype.getPreFetchedSegment = function(e, t) {
														return this.isPrefetchingLoader || !this.context.adRestorationOptimizationService.hasPrefetchedSegment(t) ? null : (this.currentSegmentInfo[e] && (this.currentSegmentInfo[e].wasPrefetched = !0), this.context.adRestorationOptimizationService.getPrefetchedSegment(t, this.onDownloadShouldBeCancelledCallback))
													}, e.prototype.setupLoadingProgressCheckInterval = function() {
														clearInterval(this.progressCheckIntervalId);
														var e = (0, v.toMilliSeconds)(this.context.settings.SEGMENT_LOADING_PROGRESS_CHECK_INTERVAL);
														e <= 0 || (this.progressCheckIntervalId = window.setInterval(this.checkLoadingProgress, e))
													}, e.prototype.loadSegment = function(e) {
														var t, n = this,
															r = {};
														this.isInit = null !== (t = e.isInitSegment) && void 0 !== t && t, this.segmentDuration = e.duration, this.segmentNumber = e.segmentNumber, this.loadingUrl = e.url, this.loadingUid = btoa(this.loadingUrl), this.currentRequestProgress = void 0, e.byteRange && (r.Range = ["bytes=", e.byteRange.start, "-", e.byteRange.end].join(""));
														var i = this.context.sourceContext.source && this.context.sourceContext.source.hasOwnProperty("options") && Boolean(this.context.sourceContext.source.options.withCredentials);
														clearTimeout(this.loadTimeoutID), clearInterval(this.progressCheckIntervalId), this.loadTimeoutID = void 0, this.isInit || e.preventDownloadCanceling || (this.loadTimeoutID = setTimeout(this.cancelLoading, (0, v.toMilliSeconds)(this.context.settings.XHR_TIMEOUT - 1)));
														var a = this.getPreFetchedSegment(this.loadingUrl, e);
														if (a) return this.context.logger.debug("return prefetched segment for", this.loadingUrl), a.then((function(e) {
															var t = new C.Stream;
															return n.loadingFinished(), t.add(e), e.getSegmentInfo().wasPrefetched = !0, t
														})).catch((function(e) {
															throw e
														}));
														var o = Boolean(this.encryptionInfo) || Boolean(this.decrypter),
															s = e.mimeType.includes("mp4") && g.MimeTypeHelper.isAV(e.mimeType) && !e.isTransmuxingRequired,
															u = this.context.settings.CHUNKED_CMAF_STREAMING && this.cmafChunkParser && this.isFetchSupported && s && !e.isInitSegment && !o;
														return this.setupLoadingProgressCheckInterval(), this.loader.load(this.loadingUrl, h.HttpRequestMethod.GET, h.HttpResponseType.ARRAYBUFFER, null, r, i, this.mimeType, u).then((function(e) {
															return n.handleResponse(e.body)
														})).catch((function(e) {
															throw n.createLoadingError(e)
														}))
													}, e.prototype.createLoadingError = function(e) {
														var t, n;
														return this.state === a.CANCELLING ? (this.logger.debug("Cancelled " + this.mimeType + " download [" + this.loadingUrl + "]"), this.canceledSegmentRequestFinishedEvent && (null === (t = this.eventHandler) || void 0 === t || t.dispatchEvent(c.PlayerEvent.SegmentRequestFinished, this.canceledSegmentRequestFinishedEvent)), n = {
															reason: i.CANCEL
														}) : this.state === a.LOADING && (n = {
															reason: i.ERROR_LOADING,
															info: {
																response: e,
																isInit: this.isInit
															}
														}), n
													}, e.prototype.getAllLoadingPeriodIds = function() {
														var e = this;
														return Object.keys(this.currentSegmentInfo).map((function(t) {
															return e.currentSegmentInfo[t].periodId
														}))
													}, e.prototype.getCurrentLoadingSegmentInfo = function() {
														return this.isLoading() && this.currentSegmentInfo && this.currentSegmentInfo[this.loadingUrl] ? this.currentSegmentInfo[this.loadingUrl] : null
													}, e.prototype.attachDecrypter = function(e) {
														this.decrypter = this.decrypter || e
													}, e.prototype.attachClearKeyLoader = function(e) {
														this.clearKeyLoader = this.clearKeyLoader || e
													}, e.prototype.terminate = function() {
														var e, t = this;
														this.isLoading() ? (null === (e = this.currentLoadPromise) || void 0 === e || e.catch((function() {
															t.state = a.TERMINATED
														})), this.cancelLoading()) : this.state = a.TERMINATED
													}, e.prototype.createSegment = function(e) {
														var t, n;
														n = this.isInit ? S.SegmentInitType.INIT : S.SegmentInitType.NONE;
														var r = this.currentSegmentInfo[this.loadingUrl],
															i = new S.Segment(e, this.mimeType, null !== (t = r.codecs) && void 0 !== t ? t : null, r.periodId, this.segmentDuration, n, !0, e.byteLength, r.internalRepresentationId, r.startTime);
														return i.setUrl(this.loadingUrl), i.setSegmentInfo(r), i
													}, e.prototype.maybeDecryptResponseData = function(e, t) {
														return this.encryptionInfo && this.encryptionInfo.method === o.HlsEncryptionMethod.AES_128 && !t ? this.decryptAes128(e) : this.decrypter ? this.decryptClearKey(e) : Promise.resolve(e)
													}, e.prototype.decryptAes128 = function(e) {
														return this.logger.debug("Decrypting AES-128-encryped segment " + this.loadingUrl + ", KEY: 0x" + b.FormatHelper.bytesToHex(this.encryptionInfo.buffer) + ", IV: 0x" + b.FormatHelper.bytesToHex(this.encryptionInfo.iv)), new(0, y.ModuleManager.get(A.ModuleName.Crypto).CryptoApi)(this.context, "AES-CBC", this.encryptionInfo.buffer, this.encryptionInfo.iv, this.mimeType).decrypt(e).then((function(e) {
															if (!e || 0 === e.byteLength) throw {
																reason: i.ERROR_DECRYPTING
															};
															return e
														})).catch((function() {
															throw {
																reason: i.ERROR_DECRYPTING
															}
														}))
													}, e.prototype.decryptClearKey = function(e) {
														var t = this,
															n = Promise.resolve(e);
														if (this.isInit) n = this.decrypter.parseInitSegment(e), this.clearKeyLoader && (n = n.then((function(e) {
															return t.clearKeyLoader.load(t.decrypter.getKeyIds()).then((function(n) {
																return t.decrypter.addKeys(n), Promise.resolve(e)
															}))
														})));
														else if (this.decrypter.isEncrypted()) {
															var r = b.FormatHelper.bytesToHex(this.decrypter.getKey());
															this.logger.debug("Decrypting SAMPLE-AES-encrypted segment ".concat(this.loadingUrl, ", KEY: 0x").concat(r)), n = this.decrypter.decryptDataSegment(e)
														}
														return n.catch((function() {
															throw {
																reason: i.ERROR_DECRYPTING
															}
														}))
													}, e.prototype.handleResponse = function(e, t) {
														var n = this;
														return void 0 === t && (t = !1), e instanceof ArrayBuffer ? (this.segmentStream = new C.Stream, this.maybeDecryptResponseData(e, t).then((function(e) {
															n.state === a.TERMINATED || n.state === a.CANCELLING ? n.segmentStream.abort(i.CANCEL) : (n.segmentStream.add(n.createSegment(e)), n.segmentStream.end()), n.loadingFinished()
														}))) : this.segmentStream = e.transform((function(e) {
															return n.cmafChunkParser.appendData(e), n.cmafChunkParser.getCompleteChunks()
														})).transform((function(e) {
															return n.createSegment(e)
														}), (function() {
															return n.loadingFinished()
														}), (function(e) {
															return n.logger.debug("Error handling fetch segment request", e), n.loadingFinished(), e.message === l.RequestError.Canceled ? i.CANCEL : i.ERROR_LOADING
														})), Promise.resolve(this.segmentStream)
													}, e.prototype.loadingFinished = function() {
														this.state = a.IDLE, this.currentLoadPromise = null, this.cmafChunkParser && this.cmafChunkParser.reset(), this.currentSegmentInfo && delete this.currentSegmentInfo[this.loadingUrl]
													}, e.prototype.dispose = function() {
														this.terminate(), clearTimeout(this.loadTimeoutID), clearInterval(this.progressCheckIntervalId), this.loader && this.loader.dispose && this.loader.dispose(), this.keyLoader && this.keyLoader.dispose(), this.keyStore && this.keyStore.dispose(), y.ModuleManager.has(A.ModuleName.Crypto) && y.ModuleManager.get(A.ModuleName.Crypto).WebWorkerCrypto.dispose(), this.loader = null, this.customLoader = null, this.customLoaderArgs = null, this.keyLoader = null, this.loadingUrl = null, this.loadingUid = null, this.encryptionInfo = null, this.currentSegmentInfo = null, this.currentRequestProgress = void 0, this.decrypter = null, this.keyStore = null, this.eventHandler = null
													}, e.prototype.setupContentLoader = function() {
														var e = this;
														this.defaultLoaderArgs = r(r({}, (0, T.getLoaderConfig)(this.context, this.mimeType)), {
															onSuccess: function(t, n) {
																var r = (0, _.getMetricsState)(e.context.store.getState());
																!e.isInit && e.mimeType in r && (e.context.store.dispatch((0, p.addMetricsValue)(e.mimeType, m.MetricType.DownloadTime, n)), e.context.store.dispatch((0, p.addMetricsValue)(e.mimeType, m.MetricType.DownloadSuccess, !0)), (0, d.isDownloadTimeInformationValid)(t) && e.context.store.dispatch((0, p.addMetricsValue)(e.mimeType, m.MetricType.DownloadInformation, {
																	bytes: t.length,
																	time: t.elapsedTime,
																	timeToFirstByte: t.timeToFirstByte
																}))), clearTimeout(e.loadTimeoutID), clearInterval(e.progressCheckIntervalId), e.loadTimeoutID = void 0;
																var i = {
																	success: !0,
																	httpStatus: t.status,
																	downloadTime: t.elapsedTime,
																	size: t.length,
																	duration: e.segmentDuration,
																	isInit: e.isInit,
																	mimeType: e.mimeType,
																	uid: e.loadingUid
																};
																e.eventHandler.dispatchEvent(c.PlayerEvent.SegmentRequestFinished, i)
															},
															onProgress: this.onProgress,
															onFailure: function(t, n) {
																e.context.store.dispatch((0, p.addMetricsValue)(e.mimeType, m.MetricType.DownloadSuccess, !1)), clearTimeout(e.loadTimeoutID), clearInterval(e.progressCheckIntervalId), e.loadTimeoutID = void 0, delete e.currentSegmentInfo[e.loadingUrl], e.eventHandler.dispatchEvent(c.PlayerEvent.SegmentRequestFinished, {
																	success: !1,
																	httpStatus: t && t.status || 0,
																	downloadTime: -1,
																	size: -1,
																	duration: e.segmentDuration,
																	isInit: e.isInit,
																	mimeType: e.mimeType,
																	uid: void 0
																})
															}
														})
													}, e
												}();
												t.SegmentLoader = $
											},
											75182: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getLoaderPoolSize = t.SegmentLoaderPool = void 0;
												var r = n(22221),
													i = n(45366),
													a = n(11917),
													o = n(82072),
													s = n(50163),
													u = n(89199),
													c = n(43068),
													l = n(83024),
													f = n(45110),
													d = n(76060),
													h = n(70121),
													p = n(89617),
													_ = function() {
														function e(e, t) {
															this.context = e, this.mimeType = t.mimeType, this.loaders = [], this.shouldDownloadBeCancelledCallback = t.shouldDownloadBeCancelledCallback, this.createLoaders(m(this.mimeType, e.settings.SEGMENT_LOADER_POOL_SIZE)), this.attachDecrypter()
														}
														return e.prototype.createLoaders = function(e) {
															for (var t = 0; t < e; t++) this.loaders.push(new p.SegmentLoader(this.context, this.mimeType, this.shouldDownloadBeCancelledCallback))
														}, e.prototype.getDecrypter = function(e) {
															if (this.context.segmentPrefetchingService && this.context.segmentPrefetchingService.hasMp4Decrypter(this.mimeType)) return this.context.segmentPrefetchingService.getDecrypter(this.mimeType);
															var t = c.ModuleManager.get(l.ModuleName.Crypto).createDecrypter,
																n = g(e.drm.clearkey) ? e.drm.clearkey : [];
															return t(this.context, this.mimeType, n)
														}, e.prototype.getClearKeyLoader = function(e) {
															return new(0, c.ModuleManager.get(l.ModuleName.Crypto).ClearKeyLoader)(this.context, e)
														}, e.prototype.attachDecrypter = function() {
															var e = this.context.sourceContext.source,
																t = function(e) {
																	var t, n;
																	return g(null === (t = null == e ? void 0 : e.drm) || void 0 === t ? void 0 : t.clearkey) || b(null === (n = null == e ? void 0 : e.drm) || void 0 === n ? void 0 : n.clearkey)
																}(e) ? this.getDecrypter(e) : null;
															if (t && (this.loaders.forEach((function(e) {
																	return e.attachDecrypter(t)
																})), this.context.segmentPrefetchingService && this.context.segmentPrefetchingService.setDecrypter(t, this.mimeType), b(e.drm.clearkey))) {
																var n = this.getClearKeyLoader(e.drm.clearkey);
																this.loaders.forEach((function(e) {
																	return e.attachClearKeyLoader(n)
																}))
															}
														}, e.prototype.isLoading = function() {
															return this.loaders.some((function(e) {
																return e.isLoading()
															}))
														}, e.prototype.isFreeLoaderAvailable = function() {
															return this.loaders.some((function(e) {
																return !e.isLoading()
															}))
														}, e.prototype.updateRequestedRepresentationMetric = function(e) {
															var t = (0, i.getMetricsHistoryFromInstanceState)(this.context.store.getState(), "default", a.MetricType.RequestedRepresentations);
															(t ? t.map((function(e) {
																return e.value
															})) : []).includes(e) || this.context.store.dispatch((0, r.addMetricsValue)("default", a.MetricType.RequestedRepresentations, e))
														}, e.prototype.load = function(e) {
															var t = this,
																n = this.loaders.find((function(e) {
																	return !e.isLoading()
																}));
															if (!n) return this.context.logger.debug("Failed to load segment. No free loader!", e.url), Promise.reject(null);
															this.updateRequestedRepresentationMetric(e.internalRepresentationId), this.context.logger.debug("[SegmentLoader][".concat(this.loaders.indexOf(n), "] Loading ").concat(e.url));
															var r = (0, h.getSegmentInfoTimeRange)(e);
															return r && this.context.store.dispatch((0, f.addStreamTimeRange)((0, d.getTrackIdentifier)(e), r, d.StreamTimeRangeType.Loading)), n.load(e).catch((function(n) {
																throw r && t.context.store.dispatch((0, f.removeStreamTimeRange)((0, d.getTrackIdentifier)(e), r, d.StreamTimeRangeType.Loading)), n
															}))
														}, e.prototype.cancelLoading = function() {
															var e = this;
															return Promise.all(this.loaders.map((function(e) {
																return e.isLoading() && e.cancelLoading(), Promise.resolve(e.getCurrentLoadPromise())
															}))).then((function() {})).catch((function(t) {
																(0, o.isContextAvailable)(e.context) && e.context.logger.debug("Error while loading a segment ", t)
															}))
														}, e.prototype.getLoadingPeriodIds = function() {
															return this.loaders.flatMap((function(e) {
																return e.getAllLoadingPeriodIds()
															}))
														}, e.prototype.dispose = function() {
															this.cancelLoading(), this.loaders.forEach((function(e) {
																return e.dispose()
															})), this.loaders = null
														}, e
													}();

												function m(e, t) {
													var n = s.MimeTypeHelper.extractContentType(e);
													return t && (0, u.isNumber)(t[n]) ? Math.max(1, t[n]) : 1
												}

												function b(e) {
													var t;
													return Boolean(null === (t = e) || void 0 === t ? void 0 : t.LA_URL)
												}

												function g(e) {
													var t;
													return (null === (t = e) || void 0 === t ? void 0 : t.length) > 0
												}
												t.SegmentLoaderPool = _, t.getLoaderPoolSize = m
											},
											26495: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentPreProcessor = void 0;
												var r = n(59534),
													i = n(59574),
													a = n(22221),
													o = n(11917),
													s = n(50163),
													u = n(47273),
													c = n(43233),
													l = n(83576),
													f = n(45110),
													d = n(76060),
													h = n(12434),
													p = n(30790),
													_ = n(92977),
													m = n(18967),
													b = n(70121),
													g = n(59266),
													v = function() {
														function e(e, t, n, i, a, o, s, u) {
															this.context = e, this.mimeType = t, this.onDataAvailableCallback = n, this.hls = i, this.initSegmentStore = a, this.segmentUnavailabilityHandler = o, this.timestampOffsetService = s, this.segmentParser = u, this.isKeyframeRecoveryOngoing = !1, this.downloadRepresentationId = null;
															var c = e.sourceContext.sourceIdentifier;
															this.manifestService = this.context.serviceManager.get(r.ServiceName.ManifestService, c), this.playerStateService = this.context.serviceManager.get(r.ServiceName.PlayerStateService)
														}
														return Object.defineProperty(e.prototype, "logger", {
															get: function() {
																return this.context.logger
															},
															enumerable: !1,
															configurable: !0
														}), Object.defineProperty(e.prototype, "eventHandler", {
															get: function() {
																return this.context.eventHandler
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.isSubtitleSegment = function(e) {
															return s.MimeTypeHelper.isSubtitle(e.getMimeType())
														}, e.prototype.setHlsTimelineTracker = function(e) {
															this.hlsTimelineTracker = e
														}, e.prototype.setMpdHandler = function(e) {
															this.mpdHandler = e
														}, e.prototype.cacheOrCallOnSegmentAvailable = function(e, t, n, i, a, o) {
															var s, u = this,
																c = this.hasHlsTimelineGap(t.find((function(e) {
																	return (0, _.isSegmentOfMainStream)(e, u.hls)
																})), n);
															c.hasGap ? c.couldHandle ? s = !1 : c.couldHandle || (s = !0, this.hlsTimelineTracker.reset()) : s = !0;
															var l = function(e) {
																a = e, o(e)
															};
															if (s) t.forEach((function(t) {
																var r = e.metadata[e.transmuxedSegments.indexOf(t)];
																u.onSegmentAvailable(t, r, n, i, a, l) || i.cacheSegment(e.originalSegment)
															}));
															else if (c.hasGap) {
																c.gapSizeSec > 0 && i.cacheSegment(e.originalSegment);
																var h = e.originalSegment.getSegmentInfo(),
																	p = (0, b.getSegmentInfoTimeRange)(h);
																p && this.context.serviceManager.maybeCall(r.ServiceName.SourceStoreService, (function(e) {
																	e.dispatch((0, f.removeStreamTimeRange)((0, d.getTrackIdentifier)(h), p, d.StreamTimeRangeType.Loading))
																}), void 0, this.context.sourceContext.sourceIdentifier)
															}
														}, e.prototype.onSegmentAvailable = function(e, t, n, i, a, o) {
															var s = this,
																l = this.hls.isTransmuxingRequired,
																f = this.manifestService.getAdaptationSet(n),
																d = (0, c.getCodecsFromAdaptationSet)(f),
																p = this.mpdHandler.preProcessAvailableSegment(e, t, {
																	codec: d,
																	periodId: e.getPeriodId()
																});
															p && p.additionalSegment && this.onSegmentAvailable(p.additionalSegment, null, n, i, a, o), this.initSegmentStore.handleSegment(e);
															var m = !0,
																b = "onSegmentAvailable " + e.getMimeType();
															if (this.segmentUnavailabilityHandler.downloadSuccess(e.isInit()), e.isInit() && (b += " init"), this.logger.debug(b + " segment [" + e.getUrl() + "]"), this.segmentParser && !l && !u.TextSegmentAnalyzer.isPlainTextPayload(e.getData())) {
																var g = isNaN(this.mpdHandler.getTimestampOffset()) || 0 === this.mpdHandler.getTimestampOffset();
																if (this.manifestService.isHlsManifest() && !e.isInit() && g && (0, h.initializeHlsSegmentStartTimes)(e, this.context, this.mpdHandler), this.timestampOffsetService.maybeAdjustTimestampOffsetAtDiscontinuityChange(e, this.mpdHandler), this.segmentParser.parseSegment(e), this.manifestService.isHlsManifest() && !this.isCorrectSegment(e, n, i)) return !1
															}
															if (this.isSubtitleSegment(e) && this.manifestService.isHlsManifest() && this.timestampOffsetService.maybeAdjustTimestampOffsetAtDiscontinuityChange(e, this.mpdHandler), this.manifestService.isHlsManifest() && !e.isInit() && this.manifestService.initSegmentStartTimesFromReferenceSegment(e), this.manifestService.isHlsManifest() && this.manifestService.markSegmentAsDownloaded(n, e), l && this.hls.possiblyDependentSegments && a && (0, _.isSegmentOfMainStream)(e, this.hls) && !this.isKeyframeRecoveryOngoing && (this.logger.debug("Just switched playlists, isIndependentlyDecodable? ".concat(e.isIndependentlyDecodable(), " ") + "(".concat(e.getMimeType(), ", ").concat(e.getUrl(), ")")), !e.isIndependentlyDecodable() && this.mpdHandler.getIndex() > 0 && (this.logger.debug("Started keyframe recovery"), this.mpdHandler.setIndex(this.mpdHandler.getIndex() - 2), m = !1, this.hls.discardNextSegment = !0, this.isKeyframeRecoveryOngoing = !0)), !m) return !1;
															y(e, this.context.store), this.context.serviceManager.get(r.ServiceName.TimedMetadataService).onSegmentAvailable({
																segment: e,
																extractedMetadata: t,
																isSegmentOfMainStream: (0, _.isSegmentOfMainStream)(e, this.hls),
																presentationTimeOffset: this.mpdHandler.getTimestampOffset()
															}), this.context.serviceManager.maybeCall(r.ServiceName.SubtitleService, (function(n) {
																n.handleClosedCaptions(s.mpdHandler, e, null == t ? void 0 : t.closedCaptions, l, d)
															})), e.isInit() ? o(!0) : (a && (0, _.isSegmentOfMainStream)(e, this.hls) && o(!1), this.logger.debug("[".concat("SegmentPreProcessor", "][").concat(this.mimeType, "]: playbackTimeForSegment=").concat(e.getPlaybackTime(), " ").concat(e.getUrl())));
															var v = e.getSegmentInfo(),
																A = v && !v.internalRepresentationId.equals(this.downloadRepresentationId);
															return (0, _.isSegmentOfMainStream)(e, this.hls) && A && (this.triggerOnDownloadQualityChanged(this.mimeType, this.downloadRepresentationId, v.internalRepresentationId), this.updateDownloadedRepresentation(e), this.downloadRepresentationId = v.internalRepresentationId), (0, _.isSegmentOfMainStream)(e, this.hls) && (this.hlsTimelineTracker && !e.isInit() && this.hlsTimelineTracker.trackPlaybackTime(e), this.isKeyframeRecoveryOngoing && (this.isKeyframeRecoveryOngoing = !1)), e.isInit() || this.onDataAvailableCallback(e), m
														}, e.prototype.updateDownloadedRepresentation = function(e) {
															var t = e.getSegmentInfo(),
																n = {
																	id: t.representationId,
																	bitrate: t.bitrate,
																	width: t.width,
																	height: t.height
																};
															this.context.store.dispatch((0, a.addMetricsValue)(this.mimeType, o.MetricType.DownloadedRepresentation, n))
														}, e.prototype.triggerOnDownloadQualityChanged = function(e, t, n) {
															var r;
															if (s.MimeTypeHelper.isVideo(e)) r = i.PlayerEvent.VideoDownloadQualityChanged;
															else {
																if (!s.MimeTypeHelper.isAudio(e)) return;
																r = i.PlayerEvent.AudioDownloadQualityChanged
															}
															var a = (0, l.representationToQuality)(this.manifestService.getRepresentationById(t), e),
																o = (0, l.representationToQuality)(this.manifestService.getRepresentationById(n), e);
															this.eventHandler.dispatchEvent(r, {
																targetQuality: o,
																targetQualityId: o.id,
																sourceQuality: a,
																sourceQualityId: a ? a.id : null
															})
														}, e.prototype.hasHlsTimelineGap = function(e, t) {
															var n = {
																hasGap: !1
															};
															if (e && this.manifestService.isHlsManifest() && !this.isSubtitleSegment(e) && (0, _.isSegmentOfMainStream)(e, this.hls) && this.hlsTimelineTracker) {
																var r = m.SegmentInfoProvider.findHlsRepresentationForSegment(e, this.manifestService.getAdaptationSet(t));
																if (r && (n = this.hlsTimelineTracker.checkForTimelineGap(e, r.representation, r.index)).hasGap && void 0 !== n.correctedIndex) {
																	this.logger.debug("Encountered timeline gap (" + n.gapSizeSec + "), just loaded " + e.getUrl());
																	var i = r.representation._internalId,
																		a = this.mpdHandler instanceof g.SegmentListMPDHandler && this.mpdHandler.getSegmentListEntries(i) && this.mpdHandler.getSegmentListEntries(i)[n.correctedIndex];
																	if (a && (0, p.areSegmentsIdentical)(e.getSegmentInfo(), a)) return n.hasGap = !1, n;
																	a && a.hasDownloadFailed ? n.couldHandle = !1 : this.mpdHandler.setIndex(n.correctedIndex)
																}
															}
															return n
														}, e.prototype.isCorrectSegment = function(e, t, n) {
															var r = this.hasHlsTimelineGap(e, t);
															return !r.hasGap || (r.couldHandle ? (this.isSegmentInTheFuture(r) && n.cacheSegment(e), !1) : (this.hlsTimelineTracker.reset(), !0))
														}, e.prototype.isSegmentInTheFuture = function(e) {
															return e.gapSizeSec > 0
														}, e.prototype.dispose = function() {
															this.downloadRepresentationId = null, this.hlsTimelineTracker = null, this.manifestService = null, this.playerStateService = null, this.onDataAvailableCallback = null, this.hls = null, this.initSegmentStore = null, this.segmentUnavailabilityHandler = null, this.timestampOffsetService = null, this.segmentParser = null, this.mpdHandler = null
														}, e
													}();

												function y(e, t) {
													var n = e.getSegmentInfo(),
														r = (0, b.getSegmentInfoTimeRange)(n),
														i = e.getPlaybackTimeRange();
													r && i && (t.dispatch((0, f.removeStreamTimeRange)((0, d.getTrackIdentifier)(n), r, d.StreamTimeRangeType.Loading)), t.dispatch((0, f.addStreamTimeRange)((0, d.getTrackIdentifier)(n), i, d.StreamTimeRangeType.Loading)))
												}
												t.SegmentPreProcessor = v
											},
											90770: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentPrefetcher = void 0;
												var r = n(82072),
													i = n(74294),
													a = n(89617),
													o = function() {
														function e(e) {
															var t = this;
															this.processSegmentInfoQueue = function(e) {
																var n = t.segmentInfoQueue.get(e);
																n && 0 !== n.length && t.chainSegmentPrefetch(n.shift()).then((function() {
																	return t.processSegmentInfoQueue(e)
																}))
															}, this.segmentInfoQueue = new i.ArrayMap, this.prefetchPromiseChainMap = new Map, this.decrypterMap = new Map, this.segmentLoaderMap = new Map, this.segmentPrefetchHandler = e, this.shouldDownloadBeCancelledCallbackMap = new Map
														}
														return e.prototype.updateContext = function(e) {
															this.context = e
														}, e.prototype.setShouldDownloadBeCancelledCallback = function(e, t) {
															this.shouldDownloadBeCancelledCallbackMap.set(e, t)
														}, e.prototype.removeShouldDownloadBeCancelledCallback = function(e) {
															this.shouldDownloadBeCancelledCallbackMap.delete(e)
														}, e.prototype.setDecrypter = function(e, t) {
															this.decrypterMap.set(t, e), this.segmentLoaderMap.has(t) && this.segmentLoaderMap.get(t).attachDecrypter(e)
														}, e.prototype.removeDecrypter = function(e) {
															this.decrypterMap.delete(e)
														}, e.prototype.getDecrypter = function(e) {
															return this.decrypterMap.get(e)
														}, e.prototype.prefetchSegment = function(e) {
															return this.chainSegmentPrefetch(e)
														}, e.prototype.prefetchSegments = function(e) {
															var t = this;
															e.forEach((function(e) {
																return t.segmentInfoQueue.add(e.mimeType, e)
															})), this.segmentInfoQueue.keys.forEach((function(e) {
																return t.processSegmentInfoQueue(e)
															}))
														}, e.prototype.chainSegmentPrefetch = function(e) {
															var t = this,
																n = this.getPrefetchPromiseChain(e.mimeType).then((function() {
																	return t.fetchSegment(e)
																})).then((function() {})).catch((function() {}));
															return this.prefetchPromiseChainMap.set(e.mimeType, n), n
														}, e.prototype.fetchSegment = function(e) {
															var t = this;
															if (!(0, r.isContextAvailable)(this.context)) return Promise.reject("PlayerContext not available");
															var n = this.getLoader(e).load(e).then((function(e) {
																return e.read()
															})).then((function(e) {
																return e.value
															}));
															return this.segmentPrefetchHandler.onPrefetch({
																segmentInfo: e,
																loadingPromise: n
															}), n.catch((function(n) {
																(0, r.isContextAvailable)(t.context) && t.context.logger.debug("segment prefetching failed for", e, "with", n)
															})), n
														}, e.prototype.getPrefetchPromiseChain = function(e) {
															return this.prefetchPromiseChainMap.has(e) || this.prefetchPromiseChainMap.set(e, Promise.resolve()), this.prefetchPromiseChainMap.get(e)
														}, e.prototype.getLoader = function(e) {
															return this.segmentLoaderMap.has(e.mimeType) || this.segmentLoaderMap.set(e.mimeType, this.createLoader(e)), this.segmentLoaderMap.get(e.mimeType)
														}, e.prototype.createLoader = function(e) {
															this.prefetchPromiseChainMap.set(e.mimeType, Promise.resolve());
															var t = new a.SegmentLoader(this.context, e.mimeType, this.createDownloadCancelCallbackFunction(e), !0);
															return t.attachDecrypter(this.decrypterMap.get(e.mimeType)), t
														}, e.prototype.createDownloadCancelCallbackFunction = function(e) {
															var t = this;
															return function(n) {
																var r = e.mimeType,
																	i = t.segmentLoaderMap.get(r),
																	a = i ? i.getCurrentLoadingSegmentInfo() : null,
																	o = void 0 !== r ? t.shouldDownloadBeCancelledCallbackMap.get(r) : void 0,
																	s = a ? a.internalRepresentationId : e.internalRepresentationId;
																return void 0 !== o && o(n, s)
															}
														}, e.prototype.clearPrefetchingQueue = function(e) {
															this.segmentInfoQueue.delete(e)
														}, e.prototype.reset = function() {
															this.segmentLoaderMap.forEach((function(e) {
																return e.dispose()
															})), this.shouldDownloadBeCancelledCallbackMap.clear(), this.segmentLoaderMap.clear(), this.decrypterMap.clear()
														}, e.prototype.dispose = function() {
															this.reset(), this.segmentLoaderMap = null, this.shouldDownloadBeCancelledCallbackMap = null
														}, e
													}();
												t.SegmentPrefetcher = o
											},
											87384: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentPrefetchingService = void 0;
												var r = n(88784),
													i = n(90770),
													a = function() {
														function e() {
															this.segmentPrefetcher = new i.SegmentPrefetcher(this), this.prefetchedSegments = new Map
														}
														return e.prototype.updatePlayerContext = function(e) {
															this.context = e, this.segmentPrefetcher.updateContext(this.context)
														}, e.prototype.setDecrypter = function(e, t) {
															this.segmentPrefetcher.setDecrypter(e, t)
														}, e.prototype.removeDecrypter = function(e) {
															this.segmentPrefetcher.removeDecrypter(e)
														}, e.prototype.getDecrypter = function(e) {
															return this.segmentPrefetcher.getDecrypter(e)
														}, e.prototype.hasMp4Decrypter = function(e) {
															return Boolean(this.getDecrypter(e))
														}, e.prototype.setShouldDownloadBeCancelledCallback = function(e, t) {
															this.segmentPrefetcher.setShouldDownloadBeCancelledCallback(e, t)
														}, e.prototype.removeShouldDownloadBeCancelledCallback = function(e) {
															this.segmentPrefetcher.removeShouldDownloadBeCancelledCallback(e)
														}, e.prototype.fetch = function(e) {
															var t = this;
															return this.segmentPrefetcher.prefetchSegment(e).then((function() {
																var n = t.prefetchedSegments.get(e.mimeType).get((0, r.getSegmentInfoId)(e));
																return n ? Promise.resolve(n.loadingPromise) : Promise.reject()
															}))
														}, e.prototype.fetchAll = function(e) {
															this.segmentPrefetcher.prefetchSegments(e)
														}, e.prototype.onPrefetch = function(e) {
															var t = e.segmentInfo.mimeType;
															this.prefetchedSegments.has(t) || this.prefetchedSegments.set(t, new Map), this.prefetchedSegments.get(t).set((0, r.getSegmentInfoId)(e.segmentInfo), e)
														}, e.prototype.hasPrefetchedSegment = function(e) {
															return Boolean(this.findPrefetchedSegment(e))
														}, e.prototype.getPrefetchedSegment = function(e) {
															var t = this.findPrefetchedSegment(e);
															return t ? t.loadingPromise : null
														}, e.prototype.findPrefetchedSegment = function(e) {
															return this.prefetchedSegments.has(e.mimeType) && this.prefetchedSegments.get(e.mimeType).get((0, r.getSegmentInfoId)(e)) || null
														}, e.prototype.getPrefetchedSegments = function() {
															return this.prefetchedSegments
														}, e.prototype.removePrefetchedSegment = function(e) {
															this.prefetchedSegments.has(e.mimeType) && this.prefetchedSegments.get(e.mimeType).delete((0, r.getSegmentInfoId)(e))
														}, e.prototype.clearPrefetchingQueue = function(e) {
															this.segmentPrefetcher.clearPrefetchingQueue(e)
														}, e.prototype.reset = function() {
															this.segmentPrefetcher.reset(), this.prefetchedSegments.clear()
														}, e.prototype.dispose = function() {
															this.reset(), this.segmentPrefetcher.dispose(), this.segmentPrefetcher = null, this.prefetchedSegments = null
														}, e
													}();
												t.SegmentPrefetchingService = a
											},
											48800: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentManager = t.SegmentService = void 0;
												var r = n(4529),
													i = n(50163),
													a = n(66173),
													o = n(30790),
													s = n(75182),
													u = n(27005),
													c = function() {
														function e(e) {
															var t = this;
															this.context = e, this.disposeSegmentManager = function(e) {
																t.segmentManagerMap.has(e) && (t.segmentManagerMap.get(e).dispose(), t.segmentManagerMap.delete(e))
															}, this.segmentManagerMap = new Map
														}
														return e.prototype.getSegmentManagerKey = function(e, t) {
															var n = void 0 === t ? {} : t,
																r = n.id,
																a = n.lang;
															return i.MimeTypeHelper.isSubtitle(e) ? [e, r, a].filter(Boolean).join("-") : e
														}, e.prototype.add = function(e, t, n) {
															var r = this.get(e.mimeType, n);
															return r || (r = this.createSegmentManager(e), this.segmentManagerMap.set(this.getSegmentManagerKey(e.mimeType, n), r)), r
														}, e.prototype.createSegmentManager = function(e) {
															return new l(this.context, e)
														}, e.prototype.get = function(e, t) {
															return this.segmentManagerMap.get(this.getSegmentManagerKey(e, t))
														}, e.prototype.disposeOfType = function(e, t) {
															this.disposeSegmentManager(this.getSegmentManagerKey(e, t))
														}, e.prototype.dispose = function() {
															this.segmentManagerMap.forEach((function(e) {
																return e.dispose()
															})), this.segmentManagerMap.clear()
														}, e
													}();
												t.SegmentService = c;
												var l = function() {
													function e(e, t) {
														this.context = e, this.loaderPool = new s.SegmentLoaderPool(e, t), this.initSegmentService = new a.InitSegmentService(e, this.loaderPool), this.cache = new o.SegmentCache(e.settings.MAX_NUM_CACHED_SEGMENTS), this.sequence = Promise.resolve(null)
													}
													return e.prototype.getSegment = function(e) {
														var t = e.isInitSegment ? this.getInitSegment(e) : this.getDataSegment(e);
														return this.sequence = this.sequence.catch((function() {})).then((function() {
															return t
														})), this.sequence
													}, e.prototype.getInitSegment = function(e) {
														return this.initSegmentService.getSegment(e).then(f)
													}, e.prototype.getDataSegment = function(e) {
														return this.hasCachedSegment(e) ? (this.context.logger.debug("Returning segment from cache for URL: ".concat(e.url)), Promise.resolve(f(this.getCachedSegment(e)))) : this.loaderPool.load(e)
													}, e.prototype.isLoading = function(e) {
														return e ? this.loaderPool.getLoadingPeriodIds().includes(e) : this.loaderPool.getLoadingPeriodIds().length > 0
													}, e.prototype.canLoad = function() {
														return this.loaderPool.isFreeLoaderAvailable()
													}, e.prototype.cacheSegment = function(e) {
														this.cache.add(e)
													}, e.prototype.hasCachedSegment = function(e) {
														return Boolean(this.getCachedSegment(e))
													}, e.prototype.getCachedSegment = function(e) {
														return e.isInitSegment ? this.initSegmentService.getCachedSegment(e) : this.cache.get(e)
													}, e.prototype.removeCachedInitSegments = function(e) {
														this.initSegmentService.removeCachedSegments(e)
													}, e.prototype.clearCache = function(e) {
														void 0 === e && (e = !0), e && this.initSegmentService.removeCachedSegments((function() {
															return !0
														})), this.cache.clear()
													}, e.prototype.cancel = function() {
														return this.loaderPool.cancelLoading()
													}, e.prototype.dispose = function() {
														this.cancel(), this.clearCache(!1), this.loaderPool = (0, r.dispose)(this.loaderPool), this.initSegmentService = (0, r.dispose)(this.initSegmentService)
													}, e
												}();

												function f(e) {
													var t = new u.Stream;
													return t.add(e), t.end(), t
												}
												t.SegmentManager = l
											},
											20931: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TimestampOffsetService = void 0;
												var r = n(59534),
													i = n(43068),
													a = n(83024),
													o = function() {
														function e(e, t) {
															this.context = e, this.mimeType = t, this.discontinuityNumbers = new Map;
															var n = e.sourceContext.sourceIdentifier;
															this.sourceStore = e.serviceManager.get(r.ServiceName.SourceStoreService, n)
														}
														return Object.defineProperty(e.prototype, "logger", {
															get: function() {
																return this.context.logger
															},
															enumerable: !1,
															configurable: !0
														}), e.prototype.maybeAdjustTimestampOffsetAtDiscontinuityChange = function(e, t) {
															var n = e.getSegmentInfo().discontinuitySequenceNumber;
															if (null != n && !e.isInit()) {
																var r = this.discontinuityNumbers.get(e.getMimeType()) !== n,
																	i = isNaN(t.getTimestampOffset());
																(r || i) && this.adjustTimestampOffset(e, n, t), this.discontinuityNumbers.set(e.getMimeType(), n)
															}
														}, e.prototype.adjustTimestampOffset = function(e, t, n) {
															var r = i.ModuleManager.get(a.ModuleName.HLS).selectors,
																o = r.getHlsState,
																s = (0, r.getPresentationTimeOffset)(o(this.sourceStore.getState()), String(t)),
																u = this.calculateEncodedPlaybackTime(e),
																c = u.encodedPlaybackTime,
																l = u.shouldUpdatePlaybackTime;
															null == s && (s = this.calculatePresentationTimeOffset(e, c, t, n)), this.logger.debug("[".concat(this.mimeType, "], discontinuity: ").concat(t, " adjusting PTO to ").concat(s, " on segment ").concat(e.getUrl())), n.setTimestampOffset(s), e.getSegmentInfo().presentationTimeOffset = s, e.setPresentationTimeOffset(s), l && e.setPlaybackTime(c - s)
														}, e.prototype.calculatePresentationTimeOffset = function(e, t, n, r) {
															null == e.getSegmentInfo().startTime && (this.logger.debug("[".concat(e.getMimeType(), "] no startTime when trying to calculate the PTO for ").concat(n)), r.extrapolateStartTimesFromDiscontinuityStarts(e));
															var o = t - e.getSegmentInfo().startTime,
																s = i.ModuleManager.get(a.ModuleName.HLS);
															return this.sourceStore.dispatch(s.actions.setPresentationTimeOffset(String(n), o)), this.logger.debug("[".concat(e.getMimeType(), "] set PTO for discontinuity ").concat(n, " to ").concat(o)), o
														}, e.prototype.calculateEncodedPlaybackTime = function(e) {
															var t = i.ModuleManager.get(a.ModuleName.ContainerMP4, !1),
																n = !0,
																r = t ? t.parsePlaybackTime(e, this.logger) : e.getBaseMediaDecodeTime() / e.getTimescale();
															return isNaN(r) && (r = e.getPlaybackTime(), n = !1), {
																encodedPlaybackTime: r,
																shouldUpdatePlaybackTime: n
															}
														}, e.prototype.dispose = function() {
															this.discontinuityNumbers = null, this.sourceStore = null
														}, e
													}();
												t.TimestampOffsetService = o
											},
											64061: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.UrlInitSegmentProvider = void 0;
												var r = n(22221),
													i = n(11917),
													a = n(30790),
													o = function() {
														function e(e, t) {
															this.context = e, this.loaderPool = t, this.cache = new a.SegmentCache(1 / 0)
														}
														return e.prototype.getSegment = function(e) {
															var t = this,
																n = this.cache.get(e);
															return (n ? Promise.resolve(n) : this.loadSegment(e)).then((function(e) {
																return n || t.cacheSegment(e), e
															}))
														}, e.prototype.loadSegment = function(e) {
															return this.loaderPool.load(e).then((function(e) {
																return e.read()
															})).then((function(t) {
																if (!t.value) throw new Error("SegmentStream error ".concat(e.url));
																return t.value
															}))
														}, e.prototype.cacheSegment = function(e) {
															this.cache.add(e), this.context.store.dispatch((0, r.addMetricsValue)(e.getMimeType(), i.MetricType.CachedInitSegments, {
																internalRepId: e.getSegmentInfo().internalRepresentationId
															}))
														}, e.prototype.getCachedSegment = function(e) {
															return this.cache.get(e)
														}, e.prototype.removeCachedSegments = function(e) {
															this.cache.remove(e)
														}, e.prototype.dispose = function() {
															this.cache.clear()
														}, e
													}();
												t.UrlInitSegmentProvider = o
											},
											12434: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.initializeHlsSegmentStartTimes = void 0;
												var r = n(59534),
													i = n(43068),
													a = n(83024),
													o = n(59266);
												t.initializeHlsSegmentStartTimes = function(e, t, n) {
													var s = t.sourceContext.sourceIdentifier,
														u = t.serviceManager.get(r.ServiceName.ManifestService, s),
														c = i.ModuleManager.get(a.ModuleName.HLS).selectors,
														l = c.getHlsState,
														f = c.hasInitializedSegmentStartTimes,
														d = t.serviceManager.get(r.ServiceName.SourceStoreService, s),
														h = null == d ? void 0 : d.getState();
													if (u && h && !f(l(h))) {
														var p = e.getRepresentationId().representationId;
														u.initializeSegmentStartTimesFromStart(p), (0, o.assignSegmentStartTimesFromHlsPlaylist)(n.getSegmentListEntries(e.getRepresentationId()), p, u)
													}
												}
											},
											27005: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.Stream = void 0;
												var r = n(81028),
													i = n(84957),
													a = n(10032),
													o = function() {
														function e() {
															var e = this;
															this.resolveDeferredRead = function() {
																e.deferredRead && !e.isEmpty() && (e.deferredRead.resolve({
																	done: !1,
																	value: e.chunks.shift()
																}), e.deferredRead = null)
															}, this.state = a.StreamState.Open, this.chunks = [], this.deferredEnded = new r.Deferred, this.deferredEnded.promise.catch((function() {}))
														}
														return e.prototype.add = function(e) {
															this.state === a.StreamState.Open && (this.chunks.push(e), this.resolveDeferredRead())
														}, e.prototype.read = function() {
															if (this.deferredRead) return Promise.reject({
																name: i.StreamReadError.ParallelRead
															});
															if (this.state === a.StreamState.Ended && this.isEmpty()) return Promise.resolve({
																done: !0
															});
															if (this.state === a.StreamState.Aborted) return Promise.reject({
																name: i.StreamReadError.Aborted,
																message: this.getError()
															});
															this.deferredRead = new r.Deferred;
															var e = this.deferredRead.promise;
															return this.resolveDeferredRead(), e
														}, e.prototype.end = function() {
															this.state === a.StreamState.Open && (this.state = a.StreamState.Ended, this.deferredRead && this.isEmpty() && (this.deferredRead.resolve({
																done: !0
															}), this.deferredRead = null), this.deferredEnded.resolve())
														}, e.prototype.abort = function(e) {
															var t;
															if (this.state === a.StreamState.Open) {
																this.state = a.StreamState.Aborted, this.error = e;
																var n = {
																	name: a.StreamState.Aborted,
																	message: null !== (t = this.getError()) && void 0 !== t ? t : ""
																};
																this.deferredRead && (this.deferredRead.reject(n), this.deferredRead = null), this.deferredEnded.reject(n)
															}
														}, e.prototype.transform = function(t, n, r) {
															var i = this,
																a = new e,
																o = function() {
																	i.read().then((function(e) {
																		var r = e.done,
																			i = e.value;
																		if (r) n && n(), a.end();
																		else {
																			var s = null != i && t(i);
																			s && a.add(s), o()
																		}
																	})).catch((function(e) {
																		r ? a.abort(r(e)) : a.abort(e)
																	}))
																};
															return o(), a
														}, e.prototype.isEmpty = function() {
															return 0 === this.chunks.length
														}, e.prototype.getError = function() {
															return this.error || null
														}, e
													}();
												t.Stream = o
											},
											84957: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.StreamReadError = void 0,
													function(e) {
														e.Aborted = "aborted", e.ParallelRead = "parallelread"
													}(t.StreamReadError || (t.StreamReadError = {}))
											},
											10032: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.StreamState = void 0,
													function(e) {
														e.Open = "open", e.Ended = "ended", e.Aborted = "aborted"
													}(t.StreamState || (t.StreamState = {}))
											},
											32579: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.DiscontinuityMonitor = void 0;
												var r = n(59574),
													i = function() {
														function e(e) {
															var t = this;
															this.context = e, this.onSeek = function() {
																t.seekStarted = !0
															}, this.onSeeked = function() {
																var e = t.context.internalPlayer.getCurrentTime();
																Object.values(t.delayedSegmentPlaybackData).forEach((function(n) {
																	e >= n.playbackTime && n.playbackTime + n.duration >= e && t.maybeFirePeriodSwitchEvents(n)
																})), t.delayedSegmentPlaybackData = {}
															}, this.currentDiscontinuityNumbers = {}, this.delayedSegmentPlaybackData = {}, this.seekStarted = !1, this.context.eventHandler.on(r.PlayerEvent.Seek, this.onSeek, !0), this.context.eventHandler.on(r.PlayerEvent.Seeked, this.onSeeked, !0)
														}
														return e.prototype.onSegmentAvailable = function(e) {
															if (!e.isInit()) {
																var t = e.getMimeType(),
																	n = e.getSegmentInfo();
																this.currentDiscontinuityNumbers[t] ? this.seekStarted && (this.delayedSegmentPlaybackData[e.getMimeType()] = {
																	mimeType: e.getMimeType(),
																	discontinuitySequenceNumber: n.discontinuitySequenceNumber,
																	playbackTime: n.startTime,
																	duration: e.getDuration()
																}, this.seekStarted = !1) : this.currentDiscontinuityNumbers[t] = {
																	discontinuitySequenceNumber: n.discontinuitySequenceNumber,
																	startTime: n.startTime || 0
																}
															}
														}, e.prototype.maybeFirePeriodSwitchEvents = function(e) {
															var t = e.mimeType,
																n = e.discontinuitySequenceNumber,
																i = e.playbackTime;
															if (null != n && this.currentDiscontinuityNumbers[t]) {
																var a = this.currentDiscontinuityNumbers[t].discontinuitySequenceNumber;
																a !== n && (this.shouldFirePeriodSwitchEvent(t, n, i) && (this.context.eventHandler.dispatchEvent(r.PlayerEvent.PeriodSwitch), this.context.eventHandler.dispatchEvent(r.PlayerEvent.PeriodSwitched, {
																	sourcePeriod: {
																		periodId: String(a)
																	},
																	targetPeriod: {
																		periodId: String(n)
																	}
																})), this.currentDiscontinuityNumbers[t] = {
																	discontinuitySequenceNumber: n,
																	startTime: i
																})
															}
														}, e.prototype.shouldFirePeriodSwitchEvent = function(e, t, n) {
															var r = this,
																i = Object.keys(this.currentDiscontinuityNumbers).filter((function(t) {
																	return t !== e
																})),
																a = !0;
															return i.forEach((function(e) {
																var i = r.currentDiscontinuityNumbers[e];
																i.discontinuitySequenceNumber === t && Math.abs(n - i.startTime) < 1 && (a = !1)
															})), a
														}, e.prototype.dispose = function() {
															this.context.eventHandler.off(r.PlayerEvent.Seek, this.onSeek), this.context.eventHandler.off(r.PlayerEvent.Seeked, this.onSeeked)
														}, e
													}();
												t.DiscontinuityMonitor = i
											},
											46022: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentInitType = t.Segment = void 0;
												var i, a = n(12391),
													o = n(50163),
													s = n(70121),
													u = function() {
														function e(e, t, n, r, o, s, u, c, l, f) {
															void 0 === s && (s = i.NONE), this.inbandEvents = [], this.data = e, this.mimeType = t, this.codec = n, this.periodId = r, this.duration = o, this.initType = s, this.isSegmentIndependentlyDecodable = u, this.encrypted = !1, this.metadata = {
																subtitles: []
															}, this.networkRequestSize = c, this.representationId = l, this.playbackTime = f, this._isDirty = !1, this.drmInitData = null, e instanceof ArrayBuffer || "string" == typeof e && (this.data = a.ArrayHelper.stringToArrayWithoutEncoding(e).buffer)
														}
														return e.prototype.setDrmKid = function(e) {
															this.drmKid = e
														}, e.prototype.hasDrmKid = function() {
															return Boolean(this.getDrmKid())
														}, e.prototype.getDrmKid = function() {
															var e, t, n;
															return null !== (n = null !== (e = this.drmKid) && void 0 !== e ? e : null === (t = this.initSegment) || void 0 === t ? void 0 : t.getDrmKid()) && void 0 !== n ? n : void 0
														}, e.prototype.setDrmInitData = function(e) {
															this.drmInitData = e
														}, e.prototype.hasDrmInitData = function() {
															var e;
															return (null === (e = this.drmInitData) || void 0 === e ? void 0 : e.length) > 0
														}, e.prototype.getDrmInitData = function() {
															return this.hasDrmInitData() ? this.drmInitData : []
														}, e.prototype.getMimeType = function() {
															return this.mimeType
														}, e.prototype.isInit = function() {
															return this.initType === i.INIT
														}, e.prototype.isSelfInit = function() {
															return this.initType === i.SELF_INIT
														}, e.prototype.isEncrypted = function() {
															return this.encrypted
														}, e.prototype.setEncrypted = function(e) {
															this.encrypted = e
														}, e.prototype.setUrl = function(e) {
															this.loadedUrl = e
														}, e.prototype.getUrl = function() {
															return this.loadedUrl
														}, e.prototype.getData = function() {
															return this.data
														}, e.prototype.setData = function(e) {
															this.data = e
														}, e.prototype.getMetadata = function() {
															return this.metadata
														}, e.prototype.setMetadata = function(e) {
															this.metadata = e
														}, e.prototype.getPlaybackTime = function() {
															return this.playbackTime
														}, e.prototype.setPlaybackTime = function(e) {
															this.playbackTime = e
														}, e.prototype.getPlaybackEndTime = function() {
															return this.playbackTime + this.duration
														}, e.prototype.getPlaybackTimeRange = function() {
															return this.duration ? {
																start: this.getPlaybackTime(),
																end: this.getPlaybackEndTime()
															} : (0, s.getSegmentInfoTimeRange)(this.getSegmentInfo())
														}, e.prototype.getBaseMediaDecodeTime = function() {
															return this.baseMediaDecodeTime
														}, e.prototype.setBaseMediaDecodeTime = function(e) {
															this.baseMediaDecodeTime = e
														}, e.prototype.getPresentationTimeOffset = function() {
															return this.presentationTimeOffset
														}, e.prototype.setPresentationTimeOffset = function(e) {
															this.presentationTimeOffset = e
														}, e.prototype.getTFDTBoxOffset = function() {
															return this.tfdtBoxOffset
														}, e.prototype.setTFDTBoxOffset = function(e) {
															this.tfdtBoxOffset = e
														}, e.prototype.getParserMetadataValue = function(e) {
															var t;
															return this.getParserMetadata() && this.getParserMetadata()[e] ? this.getParserMetadata()[e] : (null === (t = this.getInitSegment()) || void 0 === t ? void 0 : t.getParserMetadata()) ? this.getInitSegment().getParserMetadata()[e] : void 0
														}, e.prototype.getTimescale = function() {
															return this.getParserMetadataValue("timescale")
														}, e.prototype.getIvSize = function() {
															return this.getParserMetadataValue("ivSize")
														}, e.prototype.getDefaultSampleDuration = function() {
															return this.getParserMetadataValue("defaultSampleDuration")
														}, e.prototype.getDefaultSampleSize = function() {
															return this.getParserMetadataValue("defaultSampleSize")
														}, e.prototype.setTimescale = function(e) {
															this.updateParserMetadata({
																timescale: e
															})
														}, e.prototype.getPeriodId = function() {
															return this.periodId
														}, e.prototype.getCodec = function() {
															return this.codec
														}, e.prototype.setCodec = function(e) {
															this.codec = e
														}, e.prototype.getDuration = function() {
															return this.duration
														}, e.prototype.setDuration = function(e) {
															this.duration = e
														}, e.prototype.getNetworkRequestSize = function() {
															return this.networkRequestSize
														}, e.prototype.getRepresentationId = function() {
															return this.representationId
														}, e.prototype.getParsedData = function() {
															return this.parsedData
														}, e.prototype.setParsedData = function(e) {
															this.parsedData = e
														}, e.prototype.getSegmentInfo = function() {
															return this.segmentInfo
														}, e.prototype.isIndependentlyDecodable = function() {
															return this.isSegmentIndependentlyDecodable
														}, e.prototype.setSegmentInfo = function(e) {
															this.segmentInfo = e
														}, e.prototype.getMediaInfo = function() {
															var e = {};
															return this.segmentInfo && this.segmentInfo.bitrate && (e.bitrate = this.segmentInfo.bitrate), o.MimeTypeHelper.isAudio(this.mimeType) ? this.segmentInfo && this.segmentInfo.sampleRate && (e.sampleRate = this.segmentInfo.sampleRate) : o.MimeTypeHelper.isVideo(this.mimeType) && (this.segmentInfo && this.segmentInfo.width && (e.width = this.segmentInfo.width), this.segmentInfo && this.segmentInfo.height && (e.height = this.segmentInfo.height), this.segmentInfo && this.segmentInfo.frameRate && (e.frameRate = this.segmentInfo.frameRate)), e
														}, e.prototype.isDirty = function() {
															return this._isDirty
														}, e.prototype.setDirty = function(e) {
															this._isDirty = e
														}, e.prototype.setInbandEvents = function(e) {
															this.inbandEvents = e
														}, e.prototype.getInbandEvents = function() {
															return this.inbandEvents
														}, e.prototype.setLastSegment = function(e) {
															this.lastSegment = e
														}, e.prototype.isLastSegment = function() {
															return this.lastSegment
														}, e.prototype.wasLoadedFrom = function(e) {
															return this.getUrl().includes(e)
														}, e.prototype.getParserMetadata = function() {
															return this.parserMetadata
														}, e.prototype.setParserMetadata = function(e) {
															this.parserMetadata = e
														}, e.prototype.updateParserMetadata = function(e) {
															this.parserMetadata = r(r({}, this.parserMetadata), e)
														}, e.prototype.setBufferBlockId = function(e) {
															this.bufferBlockId = e
														}, e.prototype.getBufferBlockId = function() {
															return this.bufferBlockId
														}, e.prototype.setInitSegment = function(e) {
															this.initSegment = e
														}, e.prototype.getInitSegment = function() {
															return this.initSegment
														}, e
													}();
												t.Segment = u,
													function(e) {
														e[e.NONE = 0] = "NONE", e[e.INIT = 1] = "INIT", e[e.SELF_INIT = 2] = "SELF_INIT"
													}(i = t.SegmentInitType || (t.SegmentInitType = {}))
											},
											44578: function(e, t) {
												function n(e, t) {
													var n = r(e),
														i = r(t);
													return n.some((function(e) {
														return i.includes(e)
													}))
												}

												function r(e) {
													return [e.url, e.mediaURL].filter(Boolean)
												}
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.isIdenticalSegmentInfo = void 0, t.isIdenticalSegmentInfo = function(e, t) {
													var r = n(e, t),
														i = function(e, t) {
															var n = e.byteRange,
																r = t.byteRange;
															return null == n ? null == r : null != r && n.start === r.start && n.end === r.end
														}(e, t),
														a = e.discontinuitySequenceNumber === t.discontinuitySequenceNumber;
													return r && i && a
												}
											},
											67013: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.SegmentUnavailabilityHandler = void 0;
												var r = n(5793),
													i = function() {
														function e(e) {
															this.triedRepsForCurrentSegment = {}, this.wasQualitySwitched = !1, this.context = e
														}
														return e.prototype.downloadSuccess = function(e) {
															this.wasQualitySwitched && e ? this.wasQualitySwitched = !1 : this.triedRepsForCurrentSegment = {}
														}, e.prototype.getNextLowerNotTriedQuality = function(e, t) {
															for (var n = [], r = 0; r < e.length && !e[r]._internalId.equals(t); r++) this.triedRepsForCurrentSegment[e[r]._id] || n.push(e[r]);
															return n.length > 0 ? n[n.length - 1]._internalId : null
														}, e.prototype.getNextHigherNotTriedQuality = function(e, t) {
															for (var n = !1, r = 0; r < e.length; r++)
																if (e[r]._internalId.equals(t)) n = !0;
																else if (n && !this.triedRepsForCurrentSegment[e[r]._id]) return e[r]._internalId;
															return null
														}, e.prototype.switchQuality = function(e, t) {
															this.triedRepsForCurrentSegment[t.representationId] = !0;
															var n = this.getNextLowerNotTriedQuality(e, t);
															return n || (n = this.getNextHigherNotTriedQuality(e, t)), n ? (this.wasQualitySwitched = !0, n) : (this.context.logger.log("no quality left, all tried"), null)
														}, e.prototype.switchBaseURL = function(e) {
															var t = e.availableBaseURLs,
																n = e.lastUsedBaseURLIndex + 1;
															return (n %= t.length) === e.firstUsedBaseURLIndex ? (this.context.logger.log("no base url left, all tried"), null) : (e.lastUsedBaseURLIndex = n, e.baseURL = t[n], e.url = r.URLHelper.concatBaseUrlWithPartial(e.baseURL, e.mediaURL), e)
														}, e.prototype.shouldTryAlternatives = function(e) {
															return e >= 400 && e <= 599 || 0 === e
														}, e
													}();
												t.SegmentUnavailabilityHandler = i
											},
											85303: function(e, t, n) {
												var r = this && this.__assign || function() {
													return (r = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.TimedMetadataService = void 0;
												var i = n(59534),
													a = n(4529),
													o = n(59574),
													s = n(31049),
													u = n(25423),
													c = n(22221),
													l = n(45366),
													f = n(11917),
													d = n(50163),
													h = n(63080),
													p = n(32579),
													_ = function() {
														function e(e) {
															var t, n = this;
															this.context = e, this.onGenericMetadataAvailable = function(e) {
																if (e.hasOwnProperty("metadata")) {
																	var t = {
																		metadataType: e.metadataType.toUpperCase(),
																		metadata: e.metadata
																	};
																	(e.start || 0 === e.start) && (t.start = e.start), e.end && (t.end = e.end), n.context.eventHandler.dispatchEvent(o.PlayerEvent.Metadata, t)
																}
															}, this.inbandMetadataCallback = function(e) {
																e && e.hasOwnProperty("metadataType") && n.context.eventHandler.dispatchEvent(o.PlayerEvent.Metadata, {
																	metadataType: e.metadataType,
																	metadata: e.metadata
																})
															}, this.onSegmentPlayback = function(e) {
																var t = e.metadata.event;
																n.currentlyPlayedSegment[t.mimeType] = t, n.playbackRepresentationId[t.mimeType] = h.RepresentationId.from(e.metadata.representationId), n.discontinuityMonitor.maybeFirePeriodSwitchEvents(t), n.previousRepresentationIds[t.mimeType] && n.previousRepresentationIds[t.mimeType].id === t.representationId || n.handlePlaybackInfo(t), n.context.eventHandler.dispatchEvent(o.PlayerEvent.SegmentPlayback, t)
															}, this.previousRepresentationIds = {}, this.playbackRepresentationId = {}, this.currentlyPlayedSegment = {}, this.manifestService = this.context.serviceManager.get(i.ServiceName.ManifestService, e.sourceContext.sourceIdentifier);
															var r = ((t = {})[u.TimedMetadataType.InBand] = this.inbandMetadataCallback, t[u.TimedMetadataType.SegmentPlayback] = this.onSegmentPlayback, t[u.TimedMetadataType.Manifest] = this.onGenericMetadataAvailable, t[u.TimedMetadataType.EventStream] = this.onGenericMetadataAvailable, t[u.TimedMetadataType.DateRange] = this.onGenericMetadataAvailable, t[u.TimedMetadataType.CustomTag] = this.onGenericMetadataAvailable, t);
															this.metadataService = new s.MetadataService(e, r), this.discontinuityMonitor = new p.DiscontinuityMonitor(e)
														}
														return e.prototype.onSegmentAvailable = function(e) {
															var t, n = this,
																r = e.segment,
																i = e.extractedMetadata,
																a = e.isSegmentOfMainStream,
																o = e.presentationTimeOffset;
															if (a) {
																t = function(e) {
																	var t = b(e),
																		n = e.getSegmentInfo();
																	return n.dateTime && (t.dateTime = n.dateTime), n.representationId && (t.representationId = n.representationId), t
																}(r);
																var s = r.getSegmentInfo();
																s.metadata && s.metadata.forEach((function(e) {
																	n.processSegmentInfoMetadata(e, t, r.getPeriodId())
																})), m(s) && this.handleCustomMetadata(s), this.handleId3Metadata(i, o, r.getPeriodId())
															} else t = b(r);
															this.registerSegmentPlaybackEvent(r, t), r.getInbandEvents().forEach((function(e) {
																n.processInbandEvent(e, r.getPeriodId())
															})), this.discontinuityMonitor.onSegmentAvailable(r)
														}, e.prototype.registerSegmentPlaybackEvent = function(e, t) {
															if (!e.isInit()) {
																var n = e.getSegmentInfo(),
																	r = e.getMimeType(),
																	i = {
																		metadata: {
																			event: t,
																			representationId: {
																				_periodId: n.internalRepresentationId.periodId,
																				_adaptationSetId: n.internalRepresentationId.adaptationSetId,
																				_representationId: n.internalRepresentationId.representationId
																			},
																			mimeType: r
																		}
																	};
																this.metadataService.addToTimeline(u.TimedMetadataType.SegmentPlayback, t.playbackTime, i), (0, l.getMetricsState)(this.context.store.getState())[r] || this.context.store.dispatch((0, c.initializeMetricsForMimeType)(r, this.context.settings)), this.context.store.dispatch((0, c.addMetricsValue)(r, f.MetricType.SegmentInformation, {
																	bitrate: 8 * e.getNetworkRequestSize() / e.getDuration(),
																	duration: e.getDuration(),
																	playbackTime: n.startTime || e.getPlaybackTime(),
																	representationId: e.getRepresentationId()
																}))
															}
														}, e.prototype.parseEventStream = function() {
															var e = this;
															this.manifestService.getAllPeriods().forEach((function(t) {
																e.manifestService.getEventStreamEvents(t).forEach((function(n) {
																	e.processEventStreamEvent(n, t)
																}))
															}))
														}, e.prototype.processEventStreamEvent = function(e, t) {
															var n = {
																metadataType: o.MetadataType.EVENT_STREAM,
																metadata: e.data,
																start: e.startTime,
																end: e.endTime
															};
															this.metadataService.addToMetadataParsedService(u.TimedMetadataType.EventStream, e.startTime, r(r({}, n), {
																data: e.data
															}), t._id) && this.metadataService.addToTimeline(u.TimedMetadataType.EventStream, e.startTime, n)
														}, e.prototype.getPlaybackRepresentation = function(e) {
															var t = this.context.serviceManager.get(i.ServiceName.ManifestService, this.context.sourceContext.sourceIdentifier),
																n = r({}, t.getRepresentationById(this.playbackRepresentationId[e]));
															return n && this.currentlyPlayedSegment[e] && (n.uid = this.currentlyPlayedSegment[e].uid), n
														}, e.prototype.handlePlaybackInfo = function(e) {
															var t, n;
															d.MimeTypeHelper.isAudio(e.mimeType) ? (t = o.PlayerEvent.AudioPlaybackQualityChanged, n = {
																id: e.representationId,
																bitrate: parseFloat(e.mediaInfo.bitrate)
															}) : d.MimeTypeHelper.isVideo(e.mimeType) && (t = o.PlayerEvent.VideoPlaybackQualityChanged, n = {
																id: e.representationId,
																bitrate: parseFloat(e.mediaInfo.bitrate),
																width: parseFloat(e.mediaInfo.width),
																height: parseFloat(e.mediaInfo.height)
															}), t && this.context.eventHandler.dispatchEvent(t, {
																targetQuality: n,
																sourceQuality: this.previousRepresentationIds[e.mimeType] || null
															}), this.previousRepresentationIds[e.mimeType] = n
														}, e.prototype.processDateRangeEvent = function(e, t) {
															var n = {
																metadataType: o.MetadataType.DATERANGE,
																metadata: e.data,
																start: e.startTime,
																end: e.endTime
															};
															this.metadataService.addToMetadataParsedService(u.TimedMetadataType.DateRange, e.startTime, r(r({}, n), {
																data: e.data
															}), t) && this.metadataService.addToTimeline(u.TimedMetadataType.DateRange, e.startTime, n)
														}, e.prototype.addSegmentToMetadataParsedService = function(e, t) {
															var n = this;
															e.forEach((function(e) {
																if (e._metadata && e._metadata.length > 0 && e._playbackTime) {
																	var r = {
																		metadataType: o.MetadataType.CUSTOM,
																		metadata: e._metadata,
																		data: e._metadata,
																		start: e._playbackTime,
																		end: e._playbackTime + e._duration
																	};
																	n.metadataService.addToMetadataParsedService(u.TimedMetadataType.CustomTag, e._playbackTime, r, t)
																}
															}))
														}, e.prototype.handleId3Metadata = function(e, t, n) {
															var r = this;
															e && Array.isArray(e.id3) && e.id3.length > 0 && e.id3.forEach((function(e) {
																r.publishId3Metadata(e, t, n)
															}))
														}, e.prototype.publishId3Metadata = function(e, t, n) {
															var i = e.presentationTime - t,
																a = {
																	metadataType: o.MetadataType.ID3,
																	metadata: e.data,
																	start: i
																};
															this.metadataService.addToMetadataParsedService(u.TimedMetadataType.InBand, i, r(r({}, a), {
																data: e.data
															}), n) && this.metadataService.addToTimeline(u.TimedMetadataType.InBand, i, a)
														}, e.prototype.handleCustomMetadata = function(e) {
															var t = this,
																n = this.manifestService.getRepresentationById(e.internalRepresentationId);
															n.SegmentList[0].SegmentURL.forEach((function(r, i) {
																r._media === e.url && (r._playbackTime || function(e, t, n) {
																	for (var r = t, i = n; r >= 0;) e[r]._playbackTime = i, i -= e[r]._duration, r--;
																	for (r = t + 1, i = n + e[t]._duration; r < e.length;) e[r]._playbackTime = i, i += e[r]._duration, r++
																}(n.SegmentList[0].SegmentURL, i, e.startTime), t.metadataService.addToTimeline(u.TimedMetadataType.CustomTag, e.startTime, {
																	metadataType: o.MetadataType.CUSTOM,
																	metadata: r._metadata,
																	start: e.startTime,
																	end: e.startTime + e.duration
																}))
															})), this.addSegmentToMetadataParsedService(n.SegmentList[0].SegmentURL, e.periodId)
														}, e.prototype.processInbandEvent = function(e, t) {
															var n = e.presentationTime,
																i = {
																	metadataType: o.MetadataType.EMSG,
																	metadata: e,
																	start: n
																};
															this.metadataService.addToMetadataParsedService(u.TimedMetadataType.InBand, n, r(r({}, i), {
																data: e
															}), t) && this.metadataService.addToTimeline(u.TimedMetadataType.InBand, n, i)
														}, e.prototype.processSegmentInfoMetadata = function(e, t, n) {
															var i = e.type;
															if (i === o.MetadataType.CUSTOM) t.EXPERIMENTAL = t.EXPERIMENTAL || {}, t.EXPERIMENTAL.hlsAttributes = t.EXPERIMENTAL.hlsAttributes || [], t.EXPERIMENTAL.hlsAttributes = t.EXPERIMENTAL.hlsAttributes.concat(e.attributes);
															else {
																var a = {
																	metadataType: /^CUE-(IN|OUT(-CONT)?)$/.test(i) ? o.MetadataType.CUETAG : o.MetadataType[e.type],
																	metadata: e,
																	start: t.playbackTime
																};
																this.metadataService.addToMetadataParsedService(u.TimedMetadataType.Manifest, t.playbackTime, r(r({}, a), {
																	data: e
																}), n) && this.metadataService.addToTimeline(u.TimedMetadataType.Manifest, t.playbackTime, a)
															}
														}, e.prototype.dispose = function() {
															this.metadataService = (0, a.dispose)(this.metadataService), this.manifestService = null, this.discontinuityMonitor = (0, a.dispose)(this.discontinuityMonitor)
														}, e
													}();

												function m(e) {
													return e.metadata && e.metadata.length > 0 && e.metadata[0].type === o.MetadataType.CUSTOM
												}

												function b(e) {
													var t = e.getSegmentInfo();
													return {
														uid: btoa(e.getUrl()),
														url: e.getUrl(),
														mimeType: e.getMimeType(),
														playbackTime: e.getPlaybackTime(),
														presentationTimestamp: e.getBaseMediaDecodeTime() / e.getTimescale(),
														duration: e.getDuration(),
														mediaInfo: e.getMediaInfo(),
														wallClockTime: t.wallClockTime,
														discontinuitySequenceNumber: t.discontinuitySequenceNumber
													}
												}
												t.TimedMetadataService = _
											},
											31998: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.clearActiveTracksAction = t.removeActiveTrackAction = t.setContainerFormatAction = t.setMediaTypeAction = t.setRepresentationIdAction = void 0;
												var r = n(32696),
													i = n(12391),
													a = n(77478);
												t.setRepresentationIdAction = function(e) {
													return (0, r.createAction)(a.ActiveTracksActionType.SetSelectedRepresentationId, {
														selectedRepresentationId: e
													})
												}, t.setMediaTypeAction = function(e, t) {
													var n = (0, i.forceArray)(t);
													return (0, r.createAction)(a.ActiveTracksActionType.SetMediaType, {
														trackId: e,
														mediaTypes: n
													})
												}, t.setContainerFormatAction = function(e, t) {
													return (0, r.createAction)(a.ActiveTracksActionType.SetContainerFormat, {
														trackId: e,
														containerFormat: t
													})
												}, t.removeActiveTrackAction = function(e) {
													return (0, r.createAction)(a.ActiveTracksActionType.RemoveActiveTrack, {
														adaptationSetId: e
													})
												}, t.clearActiveTracksAction = function() {
													return (0, r.createAction)(a.ActiveTracksActionType.ClearActiveTracks)
												}
											},
											77478: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ActiveTracksActionType = void 0,
													function(e) {
														e.SetSelectedRepresentationId = "@instance/sources/@source/activetracks/setselectedrepresentationid", e.SetMediaType = "@instance/sources/@source/activetracks/setmediatype", e.SetContainerFormat = "@instance/sources/@source/activetracks/setcontainerformat", e.RemoveActiveTrack = "@instance/sources/@source/activetracks/remove", e.ClearActiveTracks = "@instance/sources/@source/activetracks/clear"
													}(t.ActiveTracksActionType || (t.ActiveTracksActionType = {}))
											},
											51017: function(e, t, n) {
												var r, i = this && this.__assign || function() {
														return (i = Object.assign || function(e) {
															for (var t, n = 1, r = arguments.length; n < r; n++)
																for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
															return e
														}).apply(this, arguments)
													},
													a = this && this.__rest || function(e, t) {
														var n = {};
														for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
														if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
															var i = 0;
															for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
														}
														return n
													};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.ActiveTracksReducer = t.getMediaTypes = t.getContainerFormat = void 0;
												var o = n(89464),
													s = n(77478),
													u = {};
												t.getContainerFormat = function(e, t) {
													var n;
													if (e.activeTracks) return null === (n = Object.values(e.activeTracks).find((function(e) {
														var n;
														return null === (n = e.mediaTypes) || void 0 === n ? void 0 : n.includes(t)
													}))) || void 0 === n ? void 0 : n.containerFormat
												}, t.getMediaTypes = function(e, t) {
													var n;
													return e.activeTracks && (null === (n = e.activeTracks[t.adaptationSetId]) || void 0 === n ? void 0 : n.mediaTypes) || []
												}, t.ActiveTracksReducer = (0, o.default)({}, ((r = {})[s.ActiveTracksActionType.SetSelectedRepresentationId] = function(e, t) {
													return function(e, t) {
														var n, r = t.selectedRepresentationId,
															a = e[r.adaptationSetId];
														return i(i({}, e), ((n = {})[r.adaptationSetId] = i(i({}, a), {
															selectedRepresentationId: r
														}), n))
													}(e, t.payload)
												}, r[s.ActiveTracksActionType.SetMediaType] = function(e, t) {
													return function(e, t) {
														var n, r = t.trackId,
															a = t.mediaTypes,
															o = e[r.adaptationSetId];
														return i(i({}, e), ((n = {})[r.adaptationSetId] = i(i({}, o), {
															mediaTypes: a
														}), n))
													}(e, t.payload)
												}, r[s.ActiveTracksActionType.SetContainerFormat] = function(e, t) {
													return function(e, t) {
														var n, r = t.trackId,
															a = t.containerFormat,
															o = e[r.adaptationSetId];
														return i(i({}, e), ((n = {})[r.adaptationSetId] = i(i({}, o), {
															containerFormat: a
														}), n))
													}(e, t.payload)
												}, r[s.ActiveTracksActionType.RemoveActiveTrack] = function(e, t) {
													return function(e, t) {
														var n = e,
															r = t.adaptationSetId.adaptationSetId,
															o = (n[r], a(n, ["symbol" == typeof r ? r : r + ""]));
														return i({}, o)
													}(e, t.payload)
												}, r[s.ActiveTracksActionType.ClearActiveTracks] = function() {
													return u
												}, r))
											},
											66772: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.engineBitmovinSourceReducers = void 0;
												var r = n(51017),
													i = n(3531),
													a = n(53088),
													o = n(87726),
													s = n(48141),
													u = n(81040);
												t.engineBitmovinSourceReducers = {
													manifest: i.ManifestReducer,
													activeTracks: r.ActiveTracksReducer,
													playingTracks: a.PlayingTracksReducer,
													buffer: s.BufferReducer,
													streamTimeline: u.StreamTimelineReducer,
													segmentInfoMap: o.SegmentInfoMapReducer
												}
											},
											52038: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.periodSwitchStarted = t.periodSwitchFinished = t.setPlayingPeriodId = void 0;
												var r = n(32696),
													i = n(65455);
												t.setPlayingPeriodId = function(e) {
													return (0, r.createAction)(i.PlayingTracksActionKey.SetPlayingPeriodId, e)
												}, t.periodSwitchFinished = function(e) {
													return (0, r.createAction)(i.PlayingTracksActionKey.FinishedPeriodSwitch, e)
												}, t.periodSwitchStarted = function(e) {
													return (0, r.createAction)(i.PlayingTracksActionKey.StartedPeriodSwitch, e)
												}
											},
											53088: function(e, t, n) {
												var r, i = this && this.__assign || function() {
													return (i = Object.assign || function(e) {
														for (var t, n = 1, r = arguments.length; n < r; n++)
															for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
														return e
													}).apply(this, arguments)
												};
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.PlayingTracksReducer = t.wasSwitchingToPeriodIdReset = t.getPlayingTracksState = t.getPlayingPeriodId = void 0;
												var a = n(89464),
													o = n(65455);
												t.getPlayingPeriodId = function(e) {
													var t;
													return null === (t = e.playingTracks) || void 0 === t ? void 0 : t.playingPeriodId
												}, t.getPlayingTracksState = function(e) {
													return e.playingTracks
												}, t.wasSwitchingToPeriodIdReset = function(e, t) {
													return void 0 !== (null == t ? void 0 : t.switchingToPeriodId) && void 0 === (null == e ? void 0 : e.switchingToPeriodId)
												}, t.PlayingTracksReducer = (0, a.default)({}, ((r = {})[o.PlayingTracksActionKey.SetPlayingPeriodId] = function(e, t) {
													var n = t.payload;
													return i(i({}, e), {
														playingPeriodId: n
													})
												}, r[o.PlayingTracksActionKey.FinishedPeriodSwitch] = function(e, t) {
													var n = t.payload;
													return i(i({}, e), {
														switchingToPeriodId: e.switchingToPeriodId === n ? void 0 : e.switchingToPeriodId
													})
												}, r[o.PlayingTracksActionKey.StartedPeriodSwitch] = function(e, t) {
													var n = t.payload;
													return i(i({}, e), {
														switchingToPeriodId: n
													})
												}, r))
											},
											65455: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.PlayingTracksActionKey = void 0,
													function(e) {
														e.SetPlayingPeriodId = "@instance/sources/@source/playingTracks/setPlayingPeriodId", e.FinishedPeriodSwitch = "@instance/sources/@source/playingTracks/periodSwitchFinished", e.StartedPeriodSwitch = "@instance/sources/@source/playingTracks/periodSwitchStarted"
													}(t.PlayingTracksActionKey || (t.PlayingTracksActionKey = {}))
											},
											71705: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.sourceIdentifiersSelector = t.hasASourceStoreIdentifierChanged = void 0, t.hasASourceStoreIdentifierChanged = function(e, t) {
													return e.length !== t.length || e.some((function(e) {
														return !t.includes(e)
													}))
												}, t.sourceIdentifiersSelector = function(e) {
													var t;
													return Object.keys(null !== (t = e.sources) && void 0 !== t ? t : {})
												}
											},
											10559: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.setRepresentationAnchorPointAction = t.setRepresentationSegmentIndexParsingErrorAction = t.setRepresentationIsLoadingAction = t.setRepresentationSegmentIndexAction = t.setRepresentationFailedDownloadAction = t.markSegmentAsDownloadedAction = t.setRepresentationDrmKidAction = t.adjustPeriodStartTimes = t.updatePeriodTimingAction = t.updateRepresentationAction = t.updateManifestAction = t.removeRepresentationsAction = t.setManifestInitializedAction = t.setManifestAction = void 0;
												var r = n(32696),
													i = n(6821);
												t.setManifestAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.SetManifest, {
														manifest: e
													})
												}, t.setManifestInitializedAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.SetManifestInitialized, {
														isInitialized: e
													})
												}, t.removeRepresentationsAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.RemoveRepresentations, {
														representationIds: e
													})
												}, t.updateManifestAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.UpdateManifest, e)
												}, t.updateRepresentationAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.UpdateRepresentation, e)
												}, t.updatePeriodTimingAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.UpdatePeriodTiming, {
														periodId: e,
														timing: t
													})
												}, t.adjustPeriodStartTimes = function(e) {
													return (0, r.createAction)(i.ManifestActionType.AdjustPeriodStartTimes, {
														offset: e
													})
												}, t.setRepresentationDrmKidAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationDrmKid, {
														representationId: e,
														associatedKid: t
													})
												}, t.markSegmentAsDownloadedAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.MarkSegmentAsDownloaded, {
														adaptationSetId: e,
														segment: t
													})
												}, t.setRepresentationFailedDownloadAction = function(e) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationFailedDownload, {
														representationId: e
													})
												}, t.setRepresentationSegmentIndexAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationSegmentIndex, {
														representationId: e,
														segmentIndex: t
													})
												}, t.setRepresentationIsLoadingAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationIsLoading, {
														representationId: e,
														isLoading: t
													})
												}, t.setRepresentationSegmentIndexParsingErrorAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationSegmentIndexParsingError, {
														representationId: e,
														segmentIndexParsingError: t
													})
												}, t.setRepresentationAnchorPointAction = function(e, t) {
													return (0, r.createAction)(i.ManifestActionType.SetRepresentationAnchorPoint, {
														representationId: e,
														anchorPoint: t
													})
												}
											},
											3531: function(e, t, n) {
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
												}), t.ManifestReducer = void 0;
												var o = n(89464),
													s = n(5793),
													u = n(43233),
													c = n(93638),
													l = n(6821);
												t.ManifestReducer = (0, o.default)({}, ((r = {})[l.ManifestActionType.SetManifest] = function(e, t) {
													return t.payload.manifest || e
												}, r[l.ManifestActionType.SetManifestInitialized] = function(e, t) {
													return i(i({}, e), {
														isInitialized: t.payload.isInitialized
													})
												}, r[l.ManifestActionType.RemoveRepresentations] = function(e, t) {
													return 0 === t.payload.representationIds.length ? e : (0, u.removeRepresentations)(e, t.payload.representationIds)
												}, r[l.ManifestActionType.UpdateManifest] = function(e, t) {
													return function(e, t) {
														return i(i({}, e), t)
													}(e, t.payload)
												}, r[l.ManifestActionType.UpdateRepresentation] = function(e, t) {
													return function(e, t) {
														var n, r, o, s = t,
															u = s._internalId;
														if (!e.Period) return e;
														var c = e.Period.findIndex((function(e) {
																return e._id === u.periodId
															})),
															l = null === (n = e.Period[c]) || void 0 === n ? void 0 : n.AdaptationSet.findIndex((function(e) {
																return e._internalId.equals(u)
															})),
															f = null === (o = null === (r = e.Period[c]) || void 0 === r ? void 0 : r.AdaptationSet[l]) || void 0 === o ? void 0 : o.Representation.findIndex((function(e) {
																return e._internalId.equals(u)
															})),
															d = i({}, e);
														d.Period = a([], d.Period, !0), d.Period[c] = i({}, d.Period[c]);
														var h = d.Period[c];
														h.AdaptationSet = a([], h.AdaptationSet, !0), h.AdaptationSet[l] = i({}, h.AdaptationSet[l]);
														var p = h.AdaptationSet[l];
														return p.Representation = a([], p.Representation, !0), p.Representation[f] = s, d
													}(e, t.payload)
												}, r[l.ManifestActionType.AdjustPeriodStartTimes] = function(e, t) {
													return t.payload.offset ? i(i({}, e), {
														Period: e.Period.map((function(e) {
															return i(i({}, e), {
																start: e.start + t.payload.offset
															})
														}))
													}) : e
												}, r[l.ManifestActionType.UpdatePeriodTiming] = function(e, t) {
													return function(e, t) {
														if (!e.Period) return e;
														var n = t.periodId,
															r = t.timing,
															o = e.Period.findIndex((function(e) {
																return e._id === n
															}));
														if (o < 0) return e;
														var s = a([], e.Period, !0);
														return s[o] = i(i({}, s[o]), r), i(i({}, e), {
															Period: s
														})
													}(e, t.payload)
												}, r[l.ManifestActionType.SetRepresentationDrmKid] = function(e, t) {
													var n, r = t.payload,
														a = r.representationId,
														o = r.associatedKid,
														s = function(e) {
															return e._internalId.equals(a) && !e.associatedKid ? o : e.associatedKid
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				associatedKid: s(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r[l.ManifestActionType.MarkSegmentAsDownloaded] = function(e, t) {
													var n, r, o, u = t.payload,
														l = u.adaptationSetId,
														f = u.segment,
														d = function(e, t) {
															var n = e._media;
															return s.URLHelper.isUrlAbsolute(n) || (n = s.URLHelper.concatUrlParts(t.BaseURL[0], n)), n === f.getUrl()
														},
														h = f.getPeriodId(),
														p = f.getRepresentationId(),
														_ = e.Period.findIndex((function(e) {
															return e._id === h
														})),
														m = null === (n = e.Period[_]) || void 0 === n ? void 0 : n.AdaptationSet.findIndex((function(e) {
															return e._internalId.equals(l)
														})),
														b = null === (o = null === (r = e.Period[_]) || void 0 === r ? void 0 : r.AdaptationSet[m]) || void 0 === o ? void 0 : o.Representation.findIndex((function(e) {
															return e._internalId.equals(p)
														}));
													if (-1 === _ || -1 === m || -1 === b) return e;
													var g = i({}, e);
													g.Period = a([], g.Period, !0), g.Period[_] = i({}, g.Period[_]);
													var v = g.Period[_];
													v.AdaptationSet = a([], v.AdaptationSet, !0), v.AdaptationSet[m] = i({}, v.AdaptationSet[m]);
													var y = v.AdaptationSet[m];
													y.Representation = a([], y.Representation, !0), y.Representation[b] = i({}, y.Representation[b]);
													var A = y.Representation[b];
													if (!A.SegmentList) return e;
													A.SegmentList = a([], A.SegmentList, !0);
													for (var S = 0; S < A.SegmentList.length; S++) {
														var w = (0, c.findSegmentUrlIndexWithinSegmentList)(f, A.SegmentList[S].SegmentURL);
														if (-1 !== w) {
															A.SegmentList[S] = i({}, A.SegmentList[S]);
															var E = A.SegmentList[S];
															E.SegmentURL = a([], E.SegmentURL, !0), E.SegmentURL[w] = i(i({}, E.SegmentURL[w]), {
																downloaded: d(E.SegmentURL[w], A)
															})
														}
													}
													return g
												}, r[l.ManifestActionType.SetRepresentationFailedDownload] = function(e, t) {
													var n, r = t.payload.representationId,
														a = function(e) {
															return !!e._internalId.equals(r) || e.hasFailedToLoad
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				hasFailedToLoad: a(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r[l.ManifestActionType.SetRepresentationIsLoading] = function(e, t) {
													var n, r = t.payload,
														a = r.representationId,
														o = r.isLoading,
														s = function(e) {
															return e._internalId.equals(a) ? o : e.isLoading
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				isLoading: s(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r[l.ManifestActionType.SetRepresentationSegmentIndex] = function(e, t) {
													var n, r = t.payload,
														a = r.representationId,
														o = r.segmentIndex,
														s = function(e) {
															return e._internalId.equals(a) ? o : e.segmentIndex
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				segmentIndex: s(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r[l.ManifestActionType.SetRepresentationSegmentIndexParsingError] = function(e, t) {
													var n, r = t.payload,
														a = r.representationId,
														o = r.segmentIndexParsingError,
														s = function(e) {
															return e._internalId.equals(a) ? o : e.segmentIndexParsingError
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				segmentIndexParsingError: s(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r[l.ManifestActionType.SetRepresentationAnchorPoint] = function(e, t) {
													var n, r = t.payload,
														a = r.representationId,
														o = r.anchorPoint,
														s = function(e) {
															return e._internalId.equals(a) ? o : e.anchorPoint
														};
													return i(i({}, e), {
														Period: null === (n = e.Period) || void 0 === n ? void 0 : n.map((function(e) {
															var t;
															return i(i({}, e), {
																AdaptationSet: null === (t = e.AdaptationSet) || void 0 === t ? void 0 : t.map((function(e) {
																	var t;
																	return i(i({}, e), {
																		Representation: null === (t = e.Representation) || void 0 === t ? void 0 : t.map((function(e) {
																			return i(i({}, e), {
																				anchorPoint: s(e)
																			})
																		}))
																	})
																}))
															})
														}))
													})
												}, r))
											},
											96400: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getManifest = void 0, t.getManifest = function(e) {
													return null == e ? void 0 : e.manifest
												}
											},
											6821: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ManifestActionType = void 0,
													function(e) {
														e.SetManifest = "@instance/manifest/setmanifest", e.SetManifestInitialized = "@instance/manifest/setmanifestinitialized", e.RemoveRepresentations = "@instance/manifest/removerepresentations", e.UpdateManifest = "@instance/manifest/updatemanifest", e.UpdateRepresentation = "@instance/manifest/updaterepresentation", e.UpdatePeriodTiming = "@instance/manifest/updateperiodtiming", e.AdjustPeriodStartTimes = "@instance/manifest/adjustperiodstarttimes", e.SetRepresentationDrmKid = "@instance/manifest/setrepresentationdrmkid", e.MarkSegmentAsDownloaded = "@instance/manifest/marksegmentasdownloaded", e.SetRepresentationFailedDownload = "@instance/manifest/setrepresentationfaileddownload", e.SetRepresentationSegmentIndex = "@instance/manifest/setrepresentationsegmentindex", e.SetRepresentationIsLoading = "@instance/manifest/setrepresentationisloading", e.SetRepresentationSegmentIndexParsingError = "@instance/manifest/setrepresentationsegmentindexparsingerror", e.SetRepresentationAnchorPoint = "@instance/manifest/setrepresentationacnhorpoint"
													}(t.ManifestActionType || (t.ManifestActionType = {}))
											},
											87726: function(e, t, n) {
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
												}), t.SegmentInfoMapReducer = void 0;
												var o = n(89464),
													s = n(30790),
													u = n(13561);

												function c(e, t, n) {
													var r;
													return i(i({}, e), ((r = {})[t] = n, r))
												}
												t.SegmentInfoMapReducer = (0, o.default)({}, ((r = {})[u.SegmentInfoMapActionType.SetSegmentInfos] = function(e, t) {
													return c(e, t.payload.qualityPath, t.payload.updatedEntry)
												}, r[u.SegmentInfoMapActionType.UpdateSegmentInfos] = function(e, t) {
													return function(e, t, n) {
														var r;
														if (!e[t] || 0 === n.segmentInfos.length) return c(e, t, n);
														var o = e[t].segmentInfos,
															u = o.findIndex((function(e) {
																return (0, s.areSegmentsIdentical)(e, n.segmentInfos[0])
															}));
														if (-1 === u) return c(e, t, n);
														var l, f = o.length - u,
															d = n.segmentInfos.length - f;
														if (0 !== u || 0 !== d) {
															var h = d > 0 ? n.segmentInfos.slice(-d) : [];
															l = a(a([], o.slice(u), !0), h, !0)
														} else l = o;
														var p = i(i(i({}, e[t]), n), {
															segmentInfos: l
														});
														return i(i({}, e), ((r = {})[t] = p, r))
													}(e, t.payload.qualityPath, t.payload.updatedEntry)
												}, r))
											},
											26147: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getMostRecentlyRefreshedQuality = t.getSegmentInfos = t.getSegmentMapEntry = void 0, t.getSegmentMapEntry = function(e, t) {
													return null == e ? void 0 : e.segmentInfoMap[t]
												}, t.getSegmentInfos = function(e, n) {
													var r, i;
													return null !== (i = null === (r = (0, t.getSegmentMapEntry)(e, n)) || void 0 === r ? void 0 : r.segmentInfos) && void 0 !== i ? i : []
												}, t.getMostRecentlyRefreshedQuality = function(e) {
													if (e) return Object.values(e.segmentInfoMap).filter((function(e) {
														return null != e.qualityInfo.lastUpdateTimestamp
													})).sort((function(e, t) {
														var n = e.qualityInfo.lastUpdateTimestamp;
														return t.qualityInfo.lastUpdateTimestamp - n
													}))[0]
												}
											},
											13561: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.SegmentInfoMapActionType = void 0,
													function(e) {
														e.SetSegmentInfos = "@instance/sources/@source/playback/setSegmentInfos", e.UpdateSegmentInfos = "@instance/sources/@source/playback/updateSegmentInfos"
													}(t.SegmentInfoMapActionType || (t.SegmentInfoMapActionType = {}))
											},
											94800: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.segmentToBufferBlockTimeRange = t.excludeBufferBlockTimeRange = t.mergeBufferBlockTimeRanges = void 0;
												var r = n(45659);

												function i(e, t, n) {
													return {
														start: (0, r.rangeFixedValue)(e),
														end: (0, r.rangeFixedValue)(t),
														bufferBlockId: n
													}
												}

												function a(e) {
													var t = {};
													return e.forEach((function(e) {
														t[e.bufferBlockId] || (t[e.bufferBlockId] = []), t[e.bufferBlockId].push(e)
													})), t
												}
												t.mergeBufferBlockTimeRanges = function() {
													for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
													var n = a(e);
													return Object.keys(n).flatMap((function(e) {
														return r.BufferRangeHelper.mergeRanges(n[e], .1)
													}))
												}, t.excludeBufferBlockTimeRange = function(e, t) {
													var n = t.bufferBlockId,
														o = a(e.map((function(e) {
															return i(e.start, e.end, e.bufferBlockId)
														}))),
														s = o[n];
													if (!(null == s ? void 0 : s.length)) return e;
													var u = function(e, t) {
														var n = [];
														return e.forEach((function(e) {
															(0, r.areDisjoint)(e, t) ? n.push(e): (0, r.isSurrounding)(e, t) ? n.push.apply(n, function(e, t) {
																return [i(e.start, t.start, e.bufferBlockId), i(t.end, e.end, e.bufferBlockId)]
															}(e, t)) : (0, r.isFullyIncluded)(e, t) || n.push(function(e, t) {
																return i(e.start >= t.start ? t.end : e.start, e.end > t.end ? e.end : t.start, e.bufferBlockId)
															}(e, t))
														})), n
													}(s, t);
													return o[n] = r.BufferRangeHelper.mergeRanges(u, .1), Object.keys(o).flatMap((function(e) {
														return o[e]
													}))
												}, t.segmentToBufferBlockTimeRange = function(e) {
													var t = e.getBufferBlockId(),
														n = e.getPlaybackTime();
													return i(n, n + e.getDuration(), t)
												}
											},
											48141: function(e, t, n) {
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
												}), t.BufferReducer = void 0;
												var o = n(45659),
													s = n(89464),
													u = n(89352),
													c = n(94800);
												t.BufferReducer = (0, s.default)({}, ((r = {})[u.BufferActionType.SetBufferMaxSize] = function(e, t) {
													var n, r = t.payload;
													return i(i({}, e), ((n = {})[r.mimeType] = i(i({}, e[r.mimeType]), {
														maxBufferSize: r.maxBufferSize
													}), n))
												}, r[u.BufferActionType.SetRendererRanges] = function(e, t) {
													var n, r = t.payload;
													return i(i({}, e), ((n = {})[r.mimeType] = i(i({}, e[r.mimeType]), {
														rendererRanges: r.ranges
													}), n))
												}, r[u.BufferActionType.AddLoadedRange] = function(e, t) {
													var n, r, s, u = t.payload,
														l = u.mimeType,
														f = u.range,
														d = null !== (s = null === (r = e[l]) || void 0 === r ? void 0 : r.loadedRanges) && void 0 !== s ? s : [];
													return d.some((function(e) {
														return (0, o.isFullyIncluded)(f, e)
													})) ? e : i(i({}, e), ((n = {})[l] = i(i({}, e[l]), {
														loadedRanges: c.mergeBufferBlockTimeRanges.apply(void 0, a(a([], d, !1), [f], !1))
													}), n))
												}, r[u.BufferActionType.RemoveLoadedRange] = function(e, t) {
													var n, r, a, s = t.payload,
														u = s.mimeType,
														l = s.range,
														f = null !== (a = null === (r = e[u]) || void 0 === r ? void 0 : r.loadedRanges) && void 0 !== a ? a : [];
													return f.every((function(e) {
														return !(0, o.isOverlapping)(l, e)
													})) ? e : i(i({}, e), ((n = {})[u] = i(i({}, e[u]), {
														loadedRanges: (0, c.excludeBufferBlockTimeRange)(f, l)
													}), n))
												}, r[u.BufferActionType.ResetLoadedRanges] = function(e, t) {
													var n, r, a, o = t.payload.mimeType;
													if (void 0 === o) {
														if (void 0 === e) return {};
														var s = i({}, e);
														return Object.keys(s).forEach((function(e) {
															s[e] = i(i({}, s[e]), {
																loadedRanges: []
															})
														})), s
													}
													return (null !== (a = null === (r = e[o]) || void 0 === r ? void 0 : r.loadedRanges) && void 0 !== a ? a : []).length > 0 ? i(i({}, e), ((n = {})[o] = i(i({}, e[o]), {
														loadedRanges: []
													}), n)) : e
												}, r))
											},
											4157: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getDrmUsedKeySystem = t.getDrmKeyIdsWithErrors = t.getDrmState = void 0, t.getDrmState = function(e) {
													return null == e ? void 0 : e.drm
												}, t.getDrmKeyIdsWithErrors = function(e) {
													var t, n;
													return null !== (n = null === (t = e.drm) || void 0 === t ? void 0 : t.keyIdsWithErrors) && void 0 !== n ? n : []
												}, t.getDrmUsedKeySystem = function(e) {
													var n;
													return (null === (n = (0, t.getDrmState)(e)) || void 0 === n ? void 0 : n.usedKeySystem) || {
														kind: null,
														uid: null
													}
												}
											},
											45110: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.resetStreamTimeline = t.removeStreamTimeRange = t.addStreamTimeRange = void 0;
												var r = n(32696),
													i = n(6717);
												t.addStreamTimeRange = function(e, t, n) {
													var a = {
														start: t.start,
														end: t.end,
														type: n
													};
													return (0, r.createAction)(i.StreamTimelineActionType.StreamTimeRangeAdd, {
														mimeType: e,
														streamTimeRange: a
													})
												}, t.removeStreamTimeRange = function(e, t, n) {
													return (0, r.createAction)(i.StreamTimelineActionType.StreamTimeRangeRemove, {
														mimeType: e,
														range: t,
														type: n
													})
												}, t.resetStreamTimeline = function(e) {
													return (0, r.createAction)(i.StreamTimelineActionType.StreamTimelineReset, e)
												}
											},
											81040: function(e, t, n) {
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
												}), t.getStreamTimeline = t.StreamTimelineReducer = void 0;
												var o = n(45659),
													s = n(89464),
													u = n(76060),
													c = n(6717),
													l = {};
												t.StreamTimelineReducer = (0, s.default)(l, ((r = {})[c.StreamTimelineActionType.StreamTimeRangeAdd] = function(e, t) {
													return function(e, t, n) {
														var r, o = e[t] ? a([], e[t], !0) : [];
														return i(i({}, e), ((r = {})[t] = (0, u.addStreamTimeRangeToTimeline)(o, n), r))
													}(e, t.payload.mimeType, t.payload.streamTimeRange)
												}, r[c.StreamTimelineActionType.StreamTimeRangeRemove] = function(e, t) {
													return function(e, t, n, r) {
														var s;
														if (!e[t]) return e;
														var c = a([], e[t], !0);
														if (r) {
															var l = i(i({}, n), {
																type: r
															});
															c = (0, u.removeStreamTimeRangeFromTimeline)(c, l)
														} else c = o.BufferRangeHelper.excludeTimeRange(c, n);
														return i(i({}, e), ((s = {})[t] = c, s))
													}(e, t.payload.mimeType, t.payload.range, t.payload.type)
												}, r[c.StreamTimelineActionType.StreamTimelineReset] = function(e, t) {
													return function(e, t) {
														var n;
														return t ? i(i({}, e), ((n = {})[t] = [], n)) : l
													}(e, t.payload)
												}, r)), t.getStreamTimeline = function(e) {
													var t;
													return null !== (t = null == e ? void 0 : e.streamTimeline) && void 0 !== t ? t : {}
												}
											},
											6717: function(e, t) {
												Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.StreamTimelineActionType = void 0,
													function(e) {
														e.StreamTimelineReset = "@instance/source/stream/streamtimelinereset", e.StreamTimeRangeRemove = "@instance/source/stream/streamtimerangeremove", e.StreamTimeRangeAdd = "@instance/source/stream/streamtimerangeadd"
													}(t.StreamTimelineActionType || (t.StreamTimelineActionType = {}))
											},
											76060: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getTrackIdentifier = t.removeStreamTimeRangeFromTimeline = t.addStreamTimeRangeToTimeline = t.StreamTimeRangeType = void 0;
												var r = n(45659),
													i = n(63634),
													a = n(50163);

												function o(e, t, n) {
													var r = e.findIndex(n);
													return r < 0 ? e.push(t) : e.splice(r, 0, t), e
												}! function(e) {
													e.Loading = "loading", e.Failed = "failed"
												}(t.StreamTimeRangeType || (t.StreamTimeRangeType = {})), t.addStreamTimeRangeToTimeline = function(e, t) {
													var n = e.filter((function(e) {
															return e.type === t.type
														})).concat(t),
														a = r.BufferRangeHelper.mergeRanges(n, i.DefaultSettings.GAP_TOLERANCE);
													return e = e.filter((function(e) {
														return e.type !== t.type
													})), a.forEach((function(t) {
														e = o(e, t, (function(e) {
															return e.start > t.start
														}))
													})), e
												}, t.removeStreamTimeRangeFromTimeline = function(e, t) {
													var n = e.filter((function(e) {
															return e.type === t.type
														})),
														i = r.BufferRangeHelper.excludeTimeRange(n, t);
													return e = e.filter((function(e) {
														return e.type !== t.type
													})), i.forEach((function(t) {
														e = o(e, t, (function(e) {
															return e.start > t.start
														}))
													})), e
												}, t.getTrackIdentifier = function(e) {
													var t = e.mimeType,
														n = e.internalRepresentationId;
													return a.MimeTypeHelper.isSubtitle(t) ? "".concat(t, "/").concat(n.adaptationSetId) : t
												}
											},
											45933: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.hasContentProtection = t.areAudioMimeCodecsCompatible = void 0;
												var r = n(46381);
												t.areAudioMimeCodecsCompatible = function(e, t) {
													return e.mimeType === t.mimeType && r.CodecStringHelper.canSwitchBetweenAudioCodecs(e.codec, t.codec)
												}, t.hasContentProtection = function(e, t) {
													return void 0 === e && (e = []), void 0 === t && (t = []), 0 === e.length && 0 === t.length || e.length > 0 && t.length > 0
												}
											},
											93842: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.compareValues = void 0, t.compareValues = function(e, t, n) {
													return !e && !t || !(e && !t || !e && t) && (n || Object.keys(e)).every((function(n) {
														return e[n] === t[n]
													}))
												}
											},
											93638: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.findSegmentUrlIndexWithinSegmentList = void 0;
												var r = n(81349),
													i = n(93842);

												function a(e, t) {
													return (0, r.endsWith)(e, t) || (0, r.endsWith)(e.split("?")[0], t)
												}
												t.findSegmentUrlIndexWithinSegmentList = function(e, t) {
													var n = e.getSegmentInfo();
													return t.findIndex((function(e) {
														var t = n.discontinuitySequenceNumber === e._discontinuitySequenceNumber,
															r = a(n.url, e._media),
															o = (0, i.compareValues)(n.byteRange, e._byteRange);
														return t && r && o
													}))
												}
											},
											11629: function(e, t) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.getKeys = t.getValues = void 0, t.getValues = function(e) {
													var t = [];
													return e.forEach((function(e) {
														t.push(e)
													})), t
												}, t.getKeys = function(e) {
													var t = [];
													return e.forEach((function(e, n) {
														t.push(n)
													})), t
												}
											}
										},
										function(e) {
											return e(e.s = 81201)
										}
									])
								},
								656: function(e) {
									"use strict";
									self, e.exports = (self.webpackChunkbitmovin_player_name_ = self.webpackChunkbitmovin_player_name_ || []).push([
										[275], {
											3407: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.AbstractHlsManifestController = void 0;
												var r, i, a = n(59534),
													o = n(59574),
													s = n(31049),
													u = n(25423),
													c = n(80815),
													l = n(29079),
													f = n(43068),
													d = n(83024),
													h = n(99609);
												! function(e) {
													e.CueTag = "cueTag", e.Scte35 = "scte35", e.DateRange = "dateRange", e.CustomTags = "customTags"
												}(r || (r = {}));
												var p = function() {
													function e(e) {
														var t, n = this;
														this.context = e, this.onManifestMetadata = function(e) {
															if (e.hasOwnProperty("metadata")) {
																var t = {
																	metadataType: e.metadataType.toUpperCase(),
																	metadata: e.metadata
																};
																(e.start || 0 === e.start) && (t.start = e.start), e.end && (t.end = e.end), n.context.eventHandler.dispatchEvent(o.PlayerEvent.Metadata, t)
															}
														}, this.onTimeChangedHandler = function(e) {
															var t = n.segmentTimelineController.getPlayingSegment(e.relativeTime || e.time);
															t && !t.consumed && (t.consumed = !0, n.triggerMetadata(t), n.triggerSegmentPlayback(t))
														}, this.onTimeShiftedHandler = function() {
															n.segmentTimelineController.reset()
														}, this.onSeeked = function() {
															n.segmentTimelineController.reset()
														}, this.registerVariantPlaylist = function(e) {
															var t = n.parsePlaylist(e.body),
																r = !t.endList;
															if (n.isValidVariantPlaylist(t)) {
																var a = n.parsedManifest.playlists.find((function(t) {
																	return e.url.includes(t.uri)
																}));
																if (a && function(e, t) {
																		var n = function(t) {
																				var n;
																				return null === (n = e.media) || void 0 === n ? void 0 : n.some((function(e) {
																					return t.includes(e.attributes.URI)
																				}))
																			},
																			r = e.playlists.find((function(e) {
																				return t.uri.includes(e.uri) && !n(t.uri)
																			}));
																		return Boolean(r)
																	}(n.parsedManifest, a)) {
																	n.segmentTimelineController.switchTimeline(a.id), i.extrapolateProgramDateTime(t.segments);
																	var o = function(e, t, n) {
																		for (var r, a = e.segments, o = a.some((function(e) {
																				return void 0 !== e.dateTime
																			})), s = 0; s < a.length; s++) {
																			var u = a[s];
																			if (u.variantPlaylistId = t, u.mediaSequenceNumber = e.mediaSequence + s, !o && (null === (r = n.tweaks) || void 0 === r ? void 0 : r.akamai_datetime_parsing)) {
																				var c = i.getProgramDateTimeFromSegmentUrl(u.uri, u.duration);
																				c && (u.dateTime = c)
																			}
																		}
																		return a
																	}(t, a.id, n.config);
																	n.metadataParsedService.expirationTimeInSeconds = n.segmentTimelineController.updateTimeline(a.id, o);
																	var s = n.segmentTimelineController.getCurrentTimeline();
																	if (Boolean(o[0].dateTime)) {
																		var u = l.Util.timeInSeconds(o[0].dateTime);
																		n.metadataService.removeUntil(u)
																	}
																	return n.triggerMetadataParsedEvents(s, r), t
																}
															}
														}, i = f.ModuleManager.get(d.ModuleName.HLS).PlaylistUtils, this.settings = e.settings, this.config = e.config, this.eventHandler = e.eventHandler, this.originalManifest = null, this.metadataParsedService = e.serviceManager.get(a.ServiceName.MetadataParsedService), this.eventHandler.on(o.PlayerEvent.TimeChanged, this.onTimeChangedHandler), this.eventHandler.on(o.PlayerEvent.TimeShifted, this.onTimeShiftedHandler), this.eventHandler.on(o.PlayerEvent.Seeked, this.onSeeked), this.metadataService = new s.MetadataService(this.context, ((t = {})[u.TimedMetadataType.Manifest] = this.onManifestMetadata, t[u.TimedMetadataType.DateRange] = this.onManifestMetadata, t))
													}
													return e.prototype.triggerSegmentPlayback = function(e) {
														var t = {
															url: e.uri,
															uid: null,
															mimeType: "video/mp4",
															playbackTime: e.playbackTime,
															duration: e.duration,
															mediaInfo: {},
															dateTime: null
														};
														e.dateTime && (t.dateTime = e.dateTime.toISOString()), e.customTags && e.customTags.length > 0 && (t.EXPERIMENTAL = t.EXPERIMENTAL || {}, t.EXPERIMENTAL.hlsAttributes = e.customTags.map((function(e) {
															return e.attributes
														}))), this.context.eventHandler.dispatchEvent(o.PlayerEvent.SegmentPlayback, t)
													}, e.prototype.triggerMetadata = function(e) {
														var t = this;
														e.metadata && e.metadata.forEach((function(e) {
															t.context.eventHandler.dispatchEvent(o.PlayerEvent.Metadata, {
																metadataType: e.type,
																metadata: e
															})
														}))
													}, e.prototype.resolveMasterManifest = function(e) {
														return this.parsedManifest ? Promise.resolve(this.manifestUrl) : (this.manifestUrl = e, this.downloadMasterManifest(e))
													}, e.prototype.registerMasterManifest = function(e, t) {
														this.originalManifest = e.body;
														var n = h.replaceManifestUrls(t, this.originalManifest, this.settings.QUERY_PARAMETERS);
														if (this.parsedManifest = this.parsePlaylist(n), !this.isValidMasterPlaylist(this.parsedManifest))
															if (this.isValidVariantPlaylist(this.parsedManifest)) {
																var r = "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=100000\n$VARIANT$\n".replace("$VARIANT$", t);
																n = h.replaceManifestUrls(t, r, this.settings.QUERY_PARAMETERS), this.originalManifest = r, this.parsedManifest = this.parsePlaylist(n)
															} else this.parsedManifest = null;
														return n
													}, e.prototype.isValidMasterPlaylist = function(e) {
														return e.hasOwnProperty("playlists") && e.playlists.length > 0
													}, e.prototype.isValidVariantPlaylist = function(e) {
														return e.hasOwnProperty("segments") && e.segments.length > 0
													}, e.prototype.parsePlaylist = function(e) {
														return f.ModuleManager.get(d.ModuleName.HLS).HlsUtils.parsePlaylist(e, this.context.logger)
													}, e.prototype.metadataToMetadataParsedEvent = function(e) {
														return {
															metadataType: e.metadataType,
															metadata: e.metadata,
															data: e.metadata,
															start: e.start,
															end: e.end
														}
													}, e.prototype.addMetadata = function(e) {
														var t = "DATERANGE" === e.metadataType ? u.TimedMetadataType.DateRange : u.TimedMetadataType.Manifest;
														this.metadataService.addToMetadataParsedService(t, e.start, this.metadataToMetadataParsedEvent(e), "1") && this.metadataService.addToTimeline(t, e.start, e)
													}, e.prototype.triggerMetadataParsedEvents = function(e, t) {
														var n = this;
														e.forEach((function(e) {
															Object.values(r).forEach((function(r) {
																e.hasOwnProperty(r) && _(r, e, t).forEach((function(e) {
																	return n.addMetadata(e)
																}))
															}))
														}))
													}, e.prototype.parseTimelineEntries = function(e) {
														return this.parsePlaylist(e).segments.map((function(e) {
															return {
																uri: e.uri,
																duration: e.duration,
																discontinuity: e.discontinuity || !1,
																dateTime: null,
																metadata: [],
																consumed: !1,
																playbackTime: -1,
																keys: []
															}
														}))
													}, e.prototype.getPlaybackTimeOfFirstSegmentInTimeline = function(e) {
														for (var t = 0; t < e.length; t++)
															for (var n = e[t], r = 0, i = 0; i < n.timeline.length; i++) {
																for (var a = n.timeline[i], o = this.segmentTimelineController.getCurrentTimeline(), s = 0; s < o.length; s++) {
																	var u = o[s];
																	if (u.uri === a.uri) return u.playbackTime - r
																}
																r += a.duration
															}
														return -1
													}, e.prototype.getParsedManifest = function() {
														return this.parsedManifest
													}, e.prototype.getManifest = function() {
														return this.originalManifest
													}, e.prototype.detachEventHandlers = function() {
														this.eventHandler && (this.eventHandler.off(o.PlayerEvent.TimeChanged, this.onTimeChangedHandler), this.eventHandler.off(o.PlayerEvent.TimeShifted, this.onTimeShiftedHandler), this.eventHandler.off(o.PlayerEvent.Seeked, this.onSeeked))
													}, e.prototype.dispose = function() {
														this.detachEventHandlers(), this.segmentTimelineController && (this.segmentTimelineController.dispose(), this.segmentTimelineController = null), this.metadataService && (this.metadataService.dispose(), this.metadataService = null), this.parsedManifest = null, this.originalManifest = null, this.manifestUrl = null, this.settings = null, this.config = null, this.eventHandler = null
													}, e
												}();

												function _(e, t, n) {
													var i = n && t.dateTime ? (0, c.toSeconds)(t.dateTime.getTime()) : t.playbackTime;
													switch (e) {
														case r.CueTag:
															return [{
																metadataType: o.MetadataType.CUETAG,
																metadata: t[r.CueTag],
																start: i
															}];
														case r.Scte35:
															return [{
																metadataType: o.MetadataType.SCTE,
																metadata: t[r.Scte35],
																start: i
															}];
														case r.DateRange:
															return t[r.DateRange].map((function(e) {
																return {
																	metadataType: o.MetadataType.DATERANGE,
																	metadata: e,
																	start: (0, c.toSeconds)(Date.parse(e.startDate)),
																	end: (0, c.toSeconds)(Date.parse(e.endDate))
																}
															}));
														case r.CustomTags:
															return [{
																metadataType: o.MetadataType.CUSTOM,
																metadata: t[r.CustomTags],
																start: i,
																end: i + t.duration
															}];
														default:
															return []
													}
												}
												t.AbstractHlsManifestController = p
											},
											58192: function(e, t, n) {
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
												}), t.FallbackHlsManifestController = void 0;
												var i, a = n(99538),
													o = n(55579),
													s = n(59574),
													u = n(41609),
													c = n(80815),
													l = n(43068),
													f = n(83024),
													d = n(3407),
													h = n(2923),
													p = n(67659),
													_ = n(99609),
													m = function(e) {
														function t(t) {
															var n = e.call(this, t) || this;
															return n.onLoadPlaylistError = function(e) {
																return n.context.logger.debug("Error while loading the playlist ", e), null
															}, i = l.ModuleManager.get(f.ModuleName.HLS).PlaylistUtils, n.hlsDownloadService = new p.HlsDownloadService(n.context), n.segmentTimelineController = new h.FallbackSegmentTimelineController(t.videoElement), n
														}
														return r(t, e), t.prototype.init = function() {
															return Promise.resolve()
														}, t.prototype.getDownloadedVideoData = function() {
															return {
																id: "not available",
																bitrate: 0,
																height: 0,
																width: 0,
																isAuto: !0
															}
														}, t.prototype.getPlayingVideoData = function() {
															return null
														}, t.prototype.downloadMasterManifest = function(e) {
															var t = this;
															return this.hlsDownloadService.downloadPlaylist(e, u.HttpRequestType.MANIFEST_HLS_MASTER).then((function(e) {
																var n = t.registerMasterManifest(e, e.url),
																	r = t.parsedManifest.playlists[0].uri;
																return t.registerFirstVariantPlaylist(r).then((function(r) {
																	return t.overrideManifestUrl(n, e.url, r)
																}))
															}))
														}, t.prototype.registerFirstVariantPlaylist = function(e) {
															var t = this;
															return this.hlsDownloadService.downloadPlaylist(e, u.HttpRequestType.MANIFEST_HLS_VARIANT).then(this.registerVariantPlaylist).then((function(n) {
																return i.isLive(n) && t.scheduleReload(n, e), n
															}))
														}, t.prototype.overrideManifestUrl = function(e, t, n) {
															return "createObjectURL" in window.URL ? this.getManifestUrl(e, n) : (this.context.eventHandler.dispatchEvent(s.PlayerEvent.Warning, new a.PlayerWarning(o.WarningCode.SETUP_CREATE_OBJECT_URL_MISSING)), Promise.resolve(t))
														}, t.prototype.getManifestUrl = function(e, t) {
															var n = this;
															return i.isLive(t) ? Promise.resolve(this.createDataUrlForManifest(e)) : Promise.all(this.getMediaPlaylistPromises(e)).then((function(t) {
																return t.filter((function(e) {
																	return Boolean(e)
																})).forEach((function(t) {
																	e = e.replace(t.mediaUrl, t.blobUrl)
																})), n.createDataUrlForManifest(e)
															}))
														}, t.prototype.getMediaPlaylistPromises = function(e) {
															var t = this;
															return e.split("\n").map((function(e) {
																return _.parseUrlFromLine(e)
															})).filter((function(e) {
																return null !== e
															})).map((function(e) {
																return t.getMediaPlaylistBlobUrlMapping(e)
															}))
														}, t.prototype.getMediaPlaylistBlobUrlMapping = function(e) {
															var t = this;
															return this.hlsDownloadService.downloadPlaylist(e, u.HttpRequestType.MANIFEST_HLS_VARIANT).then((function(n) {
																var r = _.replaceManifestUrls(e, n.body, t.settings.QUERY_PARAMETERS);
																return {
																	blobUrl: t.createBlobForManifest(r),
																	mediaUrl: e
																}
															})).catch(this.onLoadPlaylistError)
														}, t.prototype.loadPlaylist = function(e) {
															var t = this;
															return this.hlsDownloadService.downloadPlaylist(e.uri, u.HttpRequestType.MANIFEST_HLS_VARIANT).then((function(n) {
																return {
																	width: e.width,
																	height: e.height,
																	timeline: t.parseTimelineEntries(n.body)
																}
															})).catch(this.onLoadPlaylistError)
														}, t.prototype.reload = function(e) {
															var t = this;
															return function() {
																if (!t.hlsDownloadService) return function() {};
																t.hlsDownloadService.downloadPlaylist(e, u.HttpRequestType.MANIFEST_HLS_VARIANT, !1).then(t.registerVariantPlaylist).then((function(e) {
																	return i.isLive(e) && t.scheduleReload(e, t.parsedManifest.playlists[0].uri), e
																})).catch(t.onLoadPlaylistError)
															}
														}, t.prototype.scheduleReload = function(e, t) {
															this.reloadTimerId = setTimeout(this.reload(t), (0, c.toMilliSeconds)(e.targetDuration))
														}, t.prototype.createBlobForManifest = function(e) {
															var t = new Blob([e], {
																type: "application/x-mpegURL"
															});
															return window.URL.createObjectURL(t)
														}, t.prototype.createDataUrlForManifest = function(e) {
															return "data:application/x-mpegURL," + e.replace(/\n/g, "%0A").replace(/\r/g, "%0D")
														}, t.prototype.getVariantPlaylistInfos = function() {
															return this.parsedManifest.playlists.map((function(e) {
																return {
																	uri: e.uri,
																	width: e.attributes && e.attributes.RESOLUTION ? e.attributes.RESOLUTION.width : -1,
																	height: e.attributes && e.attributes.RESOLUTION ? e.attributes.RESOLUTION.height : -1
																}
															}))
														}, t.prototype.loadAllVariantPlaylists = function() {
															var e = this,
																t = this.getVariantPlaylistInfos();
															t.reverse();
															var n = t.map((function(t) {
																return e.loadPlaylist(t)
															}));
															return Promise.all(n).then((function(t) {
																var n = e.getPlaybackTimeOfFirstSegmentInTimeline(t);
																return n >= 0 && t.forEach((function(e) {
																	e.timeline.reduce((function(e, t) {
																		return t.playbackTime = e, e + t.duration
																	}), n)
																})), t
															}))
														}, t.prototype.getCurrentSegments = function(e, t, n, r) {
															return void 0 === r && (r = 1), this.loadAllVariantPlaylists().then((function(i) {
																var a = i.find((function(e) {
																	return e.width === t && e.height === n
																}));
																return function(e, t, n) {
																	for (var r = [], i = 0, a = 0; a < e.length; a++) {
																		var o = e[a];
																		i = 0;
																		for (var s = 0; s < o.timeline.length; s++) {
																			var u = o.timeline[s];
																			if (u.playbackTime + u.duration >= n && (r.push(u.uri), i++), i > t) break
																		}
																	}
																	return r
																}(a ? [a] : i, r, e)
															}))
														}, t.prototype.dispose = function() {
															e.prototype.dispose.call(this), clearTimeout(this.reloadTimerId), this.reloadTimerId = null
														}, t
													}(d.AbstractHlsManifestController);
												t.FallbackHlsManifestController = m
											},
											2923: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.FallbackSegmentTimelineController = void 0;
												var r = n(55130),
													i = function() {
														function e(e) {
															this.videoElement = e, this.shouldCalculatePlaybackTimeForLive = !0, this.timelines = {}
														}
														return e.prototype.isLiveStream = function() {
															return this.videoElement.duration === 1 / 0
														}, e.prototype.switchTimeline = function(e) {
															this.timelines[e] || (this.currentActiveTimelineId = e, this.timelines[e] = [])
														}, e.prototype.updateTimeline = function(e, t) {
															var n = this,
																i = this.timelines[e],
																a = r.updateTimeline(i, t),
																o = a.findIndex((function(e) {
																	return e.hasOwnProperty("playbackTime")
																})); - 1 !== o && r.populateCurrentTimelineWithPlaybackTime(a, o, a[o].playbackTime), this.timelines[e] = a;
															var s = a.reduce((function(e, t) {
																return n.isLiveStream() && !n.shouldCalculatePlaybackTimeForLive || (t.playbackTime = e), e + t.duration
															}), 0);
															return this.shouldCalculatePlaybackTimeForLive && (this.shouldCalculatePlaybackTimeForLive = !1), s
														}, e.prototype.getPlayingSegment = function(e) {
															for (var t = this.getCurrentTimeline(), n = 0; n < t.length; n++) {
																var r = t[n];
																if (e >= r.playbackTime && e <= r.playbackTime + r.duration) return t[n]
															}
															return null
														}, e.prototype.addDownloadedSegments = function(e) {}, e.prototype.getCurrentTimeline = function() {
															return this.timelines[this.currentActiveTimelineId]
														}, e.prototype.getAllTimelines = function() {
															return this.timelines
														}, e.prototype.reset = function() {
															this.timelines[this.currentActiveTimelineId].forEach((function(e) {
																return e.consumed = !1
															}))
														}, e.prototype.dispose = function() {
															this.timelines = {}, this.videoElement = null
														}, e
													}();
												t.FallbackSegmentTimelineController = i
											},
											56910: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsDownloadErrorHandler = void 0;
												var r = n(36166),
													i = n(85739),
													a = n(83123),
													o = n(40237),
													s = n(41609),
													u = n(15949),
													c = n(89543),
													l = function() {
														function e(e, t) {
															var n = this;
															this.fakeProgress = function() {
																for (var e = n.video.buffered, t = "", r = 0; r < e.length; r++) t += "".concat(e.start(r), " - ").concat(e.end(r), ", ");
																t === n.lastProgressString ? n.numProgressNotChanged++ : n.numProgressNotChanged = 0, n.numProgressNotChanged >= 10 && n.onStalled(), n.lastProgressString = t
															}, this.fakeWaiting = function() {
																var e = o.TimingUtil.getHiResTimestamp(),
																	t = !n.video.paused && !n.video.seeking && !n.video.ended;
																e - n.lastTimeUpdateTimeStamp > 5 && t && n.onWaiting()
															}, this.onStalled = function() {
																n.stalledTimeStamp = o.TimingUtil.getHiResTimestamp(), n.checkStalledState()
															}, this.onProgress = function() {
																n.stalledTimeStamp = -1 / 0, clearTimeout(n.downloadErrorCheckTimeoutId)
															}, this.onWaiting = function() {
																n.waitingEventTimeStamp = o.TimingUtil.getHiResTimestamp(), n.checkStalledState()
															}, this.onTimeUpdate = function() {
																n.waitingEventTimeStamp = -1 / 0, n.lastTimeUpdateTimeStamp = o.TimingUtil.getHiResTimestamp(), clearTimeout(n.downloadErrorCheckTimeoutId)
															}, this.checkForDownloadError = function() {
																if (0 !== n.video.buffered.length) {
																	var e = n.video.currentTime,
																		t = n.video.buffered.end(n.video.buffered.length - 1),
																		o = e <= t && e + .5 > t,
																		u = n.video.paused,
																		c = n.video.networkState === HTMLMediaElement.NETWORK_LOADING,
																		l = n.video.videoWidth,
																		f = n.video.videoHeight;
																	!u && o && c && n.manifestController.getCurrentSegments(t, l, f, 2).then((function(e) {
																		var t = new a.DefaultContentLoader(n.context),
																			o = function(n, r) {
																				return void 0 === n && (n = !0), e.length > 0 && n ? t.load(e.pop(), s.HttpRequestMethod.HEAD).then((function(e) {
																					return o(e.status >= 200 && e.status < 300, e)
																				})) : n ? Promise.resolve() : Promise.reject(r)
																			};
																		o().catch((function(e) {
																			var t = e.url,
																				a = e.status,
																				o = e.statusText;
																			n.context.eventHandler.fireError(new i.PlayerError(r.ErrorCode.NETWORK_ERROR, {
																				url: t,
																				statusCode: a,
																				statusText: o
																			}, "Failed to load segment ".concat(t, ", statusCode: ").concat(a, ", statusText: ").concat(o)))
																		}))
																	}))
																}
															}, this.context = e, this.video = e.videoElement, this.manifestController = t, this.playbackAdvancing = !1, this.stalledTimeStamp = -1 / 0, this.waitingEventTimeStamp = -1 / 0, this.downloadErrorCheckTimeoutId = -1, this.lastProgressString = "", this.numProgressNotChanged = 0, this.lastTimeUpdateTimeStamp = -1 / 0, this.video.addEventListener(c.MediaElementEvent.waiting, this.onWaiting), this.video.addEventListener(c.MediaElementEvent.stalled, this.onStalled), this.video.addEventListener(c.MediaElementEvent.progress, this.onProgress), this.video.addEventListener(c.MediaElementEvent.timeupdate, this.onTimeUpdate), (0, u.getCapabilities)().isIOS && (this.fakeEventsIntervalId = window.setInterval((function() {
																n.fakeProgress(), n.fakeWaiting()
															}), 500))
														}
														return e.prototype.checkStalledState = function() {
															var e = Math.abs(this.waitingEventTimeStamp - this.stalledTimeStamp);
															clearTimeout(this.downloadErrorCheckTimeoutId), isFinite(e) && (this.downloadErrorCheckTimeoutId = window.setTimeout(this.checkForDownloadError, 1e3 * (5 - Math.min(5, e))))
														}, e.prototype.dispose = function() {
															clearTimeout(this.fakeEventsIntervalId), clearTimeout(this.downloadErrorCheckTimeoutId), this.video.removeEventListener(c.MediaElementEvent.waiting, this.onWaiting), this.video.removeEventListener(c.MediaElementEvent.stalled, this.onStalled), this.video.removeEventListener(c.MediaElementEvent.progress, this.onProgress), this.video.removeEventListener(c.MediaElementEvent.timeupdate, this.onTimeUpdate), this.video = null, this.manifestController = null
														}, e
													}();
												t.HlsDownloadErrorHandler = l
											},
											67659: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsDownloadService = void 0;
												var r = n(99538),
													i = n(55579),
													a = n(59574),
													o = n(83123),
													s = n(41609),
													u = function() {
														function e(e) {
															var t = this;
															this.useCredentialsForManifestRequests = !1, this.downloadFailureHandler = function(e) {
																t.context.eventHandler.dispatchEvent(a.PlayerEvent.Warning, new r.PlayerWarning(i.WarningCode.NETWORK_COULD_NOT_LOAD_MANIFEST)), t.context.logger.debug("Could not load manifest, got HTTP status code " + e.status)
															}, this.context = e, this.init()
														}
														return e.prototype.init = function() {
															this.initCache(), this.initUseCredentialsForManifest()
														}, e.prototype.initCache = function() {
															this.requestCache = {}
														}, e.prototype.initUseCredentialsForManifest = function() {
															var e = this.context.sourceContext.source && this.context.sourceContext.source.options || {};
															this.useCredentialsForManifestRequests = "boolean" == typeof e.hlsManifestWithCredentials ? e.hlsManifestWithCredentials : !0 === e.manifestWithCredentials
														}, e.prototype.downloadPlaylist = function(e, t, n) {
															return void 0 === n && (n = !0), n && this.requestCache.hasOwnProperty(e) ? Promise.resolve(this.requestCache[e]) : this.download(t, e)
														}, e.prototype.download = function(e, t) {
															var n = this,
																r = this.getContentLoader(e);
															return r.load(t, s.HttpRequestMethod.GET, s.HttpResponseType.TEXT, null, {}, this.useCredentialsForManifestRequests).then((function(e) {
																return r.dispose(), n.requestCache[t] = e, e
															})).catch((function(e) {
																return r.dispose(), Promise.reject(e)
															}))
														}, e.prototype.getContentLoader = function(e) {
															return new o.DefaultContentLoader(this.context, {
																onFailure: this.downloadFailureHandler,
																maxRetries: this.context.settings.MAX_MPD_RETRIES,
																requestType: e
															})
														}, e.prototype.dispose = function() {}, e
													}();
												t.HlsDownloadService = u
											},
											34804: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.HlsLiveNativeTimeTracker = void 0;
												var r = n(39409),
													i = n(80815),
													a = n(29079),
													o = n(89543),
													s = function() {
														function e(e, t) {
															this.nativePlayer = e, this.context = t, this.timeAdjustment = 0, this.unloadTimestamp = null, this.startDate = null
														}
														return e.prototype.onUnload = function(e) {
															e === r.ADVERTISING_ISSUER_NAME && this.context.settings.RESUME_LIVE_CONTENT_AT_PREVIOUS_POSITION_AFTER_AD_BREAK && null == this.unloadTimestamp && (this.nativePlayer.isLive() ? (this.unloadTimestamp = Date.now(), this.timeAdjustment = this.nativePlayer.getSeekableRange().start, this.startDate = this.nativePlayer.getStartDate()) : this.reset())
														}, e.prototype.reset = function() {
															this.unloadTimestamp = null, this.timeAdjustment = 0, this.startDate = null
														}, e.prototype.adjustTargetTime = function(e, t) {
															var n = this;
															return t !== r.ADVERTISING_RESTORE_ISSUER_NAME || null == this.unloadTimestamp ? (this.context.logger.debug("No adjustments are made", this.unloadTimestamp), Promise.resolve(e)) : (null != this.startDate ? this.waitForStartDate() : Promise.resolve(null)).then((function(t) {
																if (null != t) {
																	n.context.logger.debug("StartDate progressed from ".concat(n.startDate, " to: ").concat(t, " during the ad"));
																	var r = a.Util.timeInSeconds(t) - a.Util.timeInSeconds(n.startDate);
																	n.timeAdjustment = r
																} else {
																	n.context.logger.debug("Adjusting time based on seekable range");
																	var o = (0, i.toSeconds)(Date.now() - n.unloadTimestamp);
																	n.timeAdjustment += o
																}
																var s = e - n.timeAdjustment;
																return n.context.logger.debug("Adjusting target time from ".concat(e, " by ").concat(n.timeAdjustment, " to ").concat(s)), n.reset(), s
															}))
														}, e.prototype.waitForStartDate = function() {
															var e = this,
																t = this.getValidDateTime();
															return t ? Promise.resolve(t) : new Promise((function(t) {
																var n = null,
																	r = function() {
																		t(e.getValidDateTime()), e.context.videoElement.removeEventListener(o.MediaElementEvent.loadeddata, r), clearTimeout(n)
																	};
																e.context.logger.debug("Waiting for video.startDate to be valid"), e.context.videoElement.addEventListener(o.MediaElementEvent.loadeddata, r), n = setTimeout(r, 2e3)
															}))
														}, e.prototype.getValidDateTime = function() {
															var e = this.nativePlayer.getStartDate();
															return e && !isNaN(e.getTime()) ? e : null
														}, e
													}();
												t.HlsLiveNativeTimeTracker = s
											},
											13372: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.shouldUseServiceWorker = t.createHlsManifestController = void 0;
												var r = n(43068),
													i = n(83024),
													a = n(3407),
													o = n(58192);

												function s(e) {
													var t = e.config.location && e.config.location.serviceworker;
													return "serviceWorker" in navigator && t && r.ModuleManager.has(i.ModuleName.ServiceWorkerClient)
												}

												function u(e) {
													var t = new o.FallbackHlsManifestController(e);
													return t.init().then((function() {
														return t
													}))
												}
												t.createHlsManifestController = function(e) {
													if (s(e)) {
														var t = new(r.ModuleManager.get(i.ModuleName.ServiceWorkerClient).createServiceWorkerHlsManifestController(a.AbstractHlsManifestController))(e);
														return t.init().then((function() {
															return t
														})).catch((function() {
															return u(e)
														}))
													}
													return u(e)
												}, t.shouldUseServiceWorker = s
											},
											99609: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.replaceUrlAndAddUriParams = t.parseUrlFromLine = t.replaceManifestUrls = void 0;
												var r = n(5793),
													i = /URI="([^"]+)"/;

												function a(e) {
													if ("#" !== e[0] && e.trim().length > 0) return e;
													if (e.indexOf("URI") > -1) {
														var t = e.match(i);
														if (t && t[1].indexOf("skd://") < 0 && t[1].indexOf("skds://") < 0) return t[1]
													}
													return null
												}

												function o(e, t, n) {
													var i = r.URLHelper.concatBaseUrlWithPartial(e, t);
													return r.URLHelper.appendQueryParametersToUrl(i, n)
												}
												t.replaceManifestUrls = function(e, t, n) {
													var r = t.split(/\r?\n/);
													return r.forEach((function(t, s) {
														var u = a(t);
														if (u && t.match(i)) {
															var c = o(e, u, n);
															r[s] = t.replace(i, 'URI="'.concat(c, '"'))
														} else u && (r[s] = o(e, u, n))
													})), r.join("\n")
												}, t.parseUrlFromLine = a, t.replaceUrlAndAddUriParams = o
											},
											36709: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.NativeModuleDefinition = void 0;
												var r = n(83024),
													i = n(66670),
													a = n(31488);
												t.NativeModuleDefinition = {
													name: r.ModuleName.EngineNative,
													module: {
														NativePlayer: i.NativePlayer,
														technologyChecker: new a.TechnologyChecker
													}
												}, t.default = t.NativeModuleDefinition
											},
											66670: function(e, t, n) {
												var r = this && this.__assign || function() {
														return (r = Object.assign || function(e) {
															for (var t, n = 1, r = arguments.length; n < r; n++)
																for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
															return e
														}).apply(this, arguments)
													},
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
												}), t.NativePlayer = void 0;
												var a = n(45659),
													o = n(36166),
													s = n(85739),
													u = n(99538),
													c = n(55579),
													l = n(59534),
													f = n(4529),
													d = n(59574),
													h = n(49863),
													p = n(39409),
													_ = n(83123),
													m = n(52228),
													b = n(8833),
													g = n(38106),
													v = n(59536),
													y = n(15949),
													A = n(28803),
													S = n(12391),
													w = n(38827),
													E = n(81028),
													T = n(80815),
													C = n(89199),
													$ = n(5793),
													k = n(29079),
													O = n(20586),
													x = n(89543),
													P = n(43068),
													M = n(83024),
													I = n(56910),
													L = n(34804),
													D = n(13372),
													B = n(16958),
													N = "not available",
													R = .75,
													F = function() {
														function e(e) {
															var t = this;
															this.numTimeChanged = 0, this.loaded = !1, this.audio = null, this.ended = !1, this.ignoreNextVideoError = !1, this.controlPermitted = !0, this.seekingTimeoutId = -1, this.nativeSeekCalled = !1, this.isIllicitlySeeking = !1, this.ignoreNextDelta = !1, this.numSeekingCalled = 0, this.currentDuration = -1, this.timeShiftJumpStartPosition = -1, this.seekTargetTime = -1, this.textTrackController = null, this.lastPlayIssuer = "api", this.lastPauseIssuer = "api", this.lastSeekIssuer = "api", this.lastVerifiedPlaybackPosition = -1, this.lastLegalPlaybackPosition = 0, this.restrictedInlinePlayback = !1, this.lastDuration = void 0, this.lastTime = 0, this.availableVideoStreams = [], this.allowedToThrowEvents = !0, this.airplayAvailable = !1, this.hasSourceBeenLoaded = !1, this.hasDataBeenLoaded = !1, this.sourceElementEventListeners = [], this.restoringPlaybackPosAfterQualitySwitch = !1, this.isInitialSeek = !1, this.lastDelayedSeekHandlers = {}, this.isProgressiveQualityChange = !1, this.onAddTrack = function(e) {
																if (t.isReady()) {
																	var n = e.track;
																	t.eventCallback(d.PlayerEvent.AudioAdded, {
																		track: t.convertAudioTrackNativeToApi(n)
																	}), n.enabled && t.loaded && t.dispatchAudioChangedEvent(null, n)
																}
															}, this.loadedDataHandler = function() {
																clearTimeout(t.loadedDataFallbackTimeoutID), t.hasSourceBeenLoaded || clearTimeout(t.loadTimeoutID), t.hasSourceBeenLoaded = !0, t.isProgressiveQualityChange = !1, t.allowedToThrowEvents = !0, t.hasDataBeenLoaded = !0, t.maybeResolveDeferredLoading()
															}, this.eventCallback = function(e, n, r, i) {
																void 0 === n && (n = {}), void 0 === r && (r = !1), void 0 === i && (i = !1), t.eventHandler && (t.allowedToThrowEvents || r) && t.eventHandler.dispatchEvent(e, n, i)
															}, this.onTimeUpdate = function(e) {
																var n = t.getElement(),
																	r = n.currentTime;
																(-1 !== t.lastVerifiedPlaybackPosition || r !== t.lastVerifiedPlaybackPosition) && !t.isIllicitlySeeking && (t.isIllegalSeek(r) ? (Promise.resolve(t.video.play()).catch((function(e) {
																	t.logger.insane("Play promise rejected:", e)
																})), t.ignoreNextDelta = !0, n.currentTime = t.lastLegalPlaybackPosition) : t.handleTimeUpdateEvent(n, r), t.nativeSeekCalled = !1, t.currentVideoStream && (t.currentVideoStream.width = t.video.videoWidth, t.currentVideoStream.height = t.video.videoHeight))
															}, this.onPlaybackStarted = function() {
																t.isPlaying() || (t.ended = !1, t.startManifestTimeoutTimer(), t.stateManager.transitionToPlayingState(t.lastPlayIssuer))
															}, this.onContentPlaybackFinished = function() {
																t.ended = !0
															}, this.checkIfAssetIsAccessible = function(e) {
																return function() {
																	var n = (0, T.toMilliSeconds)(t.settings.XHR_TIMEOUT) / 2;
																	t.logger.debug("Asset loading is stalled. Setting timeout to ".concat((0, T.toSeconds)(n), "s to check in case asset is not available.")), setTimeout((function() {
																		t.hasSourceBeenLoaded ? t.video.removeEventListener(x.MediaElementEvent.stalled, t.checkIfAssetIsAccessible(e)) : new _.DefaultContentLoader(t.context).load(e.src).catch((function(n) {
																			if (!t.hasSourceBeenLoaded) {
																				t.logger.debug("Forcing error event as the asset was not accessible.", n);
																				var r = new Event(x.MediaElementEvent.error, {
																					bubbles: !1,
																					cancelable: !1
																				});
																				e.dispatchEvent(r)
																			}
																		})).finally((function() {
																			t.video.removeEventListener(x.MediaElementEvent.stalled, t.checkIfAssetIsAccessible(e))
																		}))
																	}), n)
																}
															}, this.getCurrentTime = function(e) {
																void 0 === e && (e = b.TimeMode.AbsoluteTime);
																var n = t.getStartDate();
																return e === b.TimeMode.AbsoluteTime && n ? k.Util.timeInSeconds(n) + t.getElement().currentTime : t.getElement().currentTime
															}, this.getAudioQuality = this.getPlaybackAudioData, this.getVideoQuality = this.getPlaybackVideoData, this.videoOnEnded = function() {
																var e = t.getElement(),
																	n = Math.abs(e.currentTime - t.lastLegalPlaybackPosition);
																t.settings.GLOBAL_DISABLE_SEEKING && (n > R || e.currentTime < t.currentDuration - R) ? (Promise.resolve(t.video.play()).catch((function(e) {
																	t.logger.insane("Play promise rejected:" + e)
																})), t.ignoreNextDelta = !0, t.video.currentTime = t.lastLegalPlaybackPosition) : (t.lastLegalPlaybackPosition = 0, t.stateManager.isPlaying() && t.stateManager.transitionToPausedState(!0, t.lastPauseIssuer), t.stateManager.transitionToStoppedState())
															}, this.videoOnSeeked = function() {
																t.resetTimeShift(), t.numSeekingCalled = 0, !t.settings.GLOBAL_DISABLE_SEEKING || t.restoringPlaybackPosAfterQualitySwitch || t.isInitialSeekToStartTime ? (t.lastVerifiedPlaybackPosition = t.getElement().currentTime, t.isInitialSeekToStartTime = !1, t.stateManager.isSeeking() && (t.textTrackController && t.textTrackController.seek(), t.maybeHandleSeekTargetChangeDuringStartup())) : t.isIllicitlySeeking = !1, t.finishedSeekedTransitionState()
															}, this.videoOnSeeking = function() {
																if (t.settings.GLOBAL_DISABLE_SEEKING && !t.isInitialSeekToStartTime) t.isIllicitlySeeking = !t.restoringPlaybackPosAfterQualitySwitch, t.numSeekingCalled++, t.numSeekingCalled > 1 && (t.ignoreNextDelta = !1);
																else if (!t.stateManager.isSeeking() && !t.stateManager.isTimeShifting()) {
																	var e = t.getElement().currentTime;
																	t.stateManager.transitionToSeekingIOSState(e, p.INTERNAL_ISSUER_NAME), t.lastVerifiedPlaybackPosition = e
																}
															}, this.onTimeChanged = function() {
																void 0 === t.maxTimeShift && (t.maxTimeShift = t.getElement().currentTime)
															}, this.delayedSeek = function() {
																t.numTimeChanged++, t.numTimeChanged < t.settings.IOS_MIN_TIMEUPDATES_AFTER_AD || (t.eventHandler.off(d.PlayerEvent.TimeChanged, t.delayedSeek), t.restoringPlaybackPosAfterQualitySwitch = !0, t.triggerSeek({
																	time: t.currentTimeWas,
																	issuer: "api",
																	force: !0
																}))
															}, this.onWebkitPlaybackTargetAvailabilityChanged = function(e) {
																"available" === e.availability ? (t.airplayAvailable = !0, t.eventCallback(d.PlayerEvent.AirplayAvailable)) : t.airplayAvailable = !1
															}, this.onWebkitPlaybackTargetIsWirelessChanged = function(e) {
																t.eventCallback(d.PlayerEvent.AirplayChanged, {
																	airplayEnabled: t.isAirplayActive(),
																	time: t.video.currentTime
																})
															}, this.context = e, this.isAtLiveEdge = !1, this.logger = e.logger, this.video = e.videoElement, this.config = e.config, this.eventHandler = e.eventHandler, this.settings = e.settings, this.hlsSeekingGlitchEventHandlers = [], this.downloadErrorHandler = null, this.currentVol = this.video.volume, this.originalCrossOriginAttributeValue = this.video.getAttribute("crossOrigin"), this.currentTimeShift = -1 / 0, this.hlsLiveTimeTracker = new L.HlsLiveNativeTimeTracker(this, e), this.elementEvents = [{
																event: x.MediaElementEvent.pause,
																handler: function() {
																	t.resetTimeShift(), t.ended || t.stateManager.transitionToPausedState(!0, t.lastPauseIssuer, !0)
																}
															}, {
																event: x.MediaElementEvent.ended,
																handler: function() {
																	t.videoOnEnded()
																}
															}, {
																event: x.MediaElementEvent.play,
																handler: function() {
																	t.stateManager.stallExit(), t.restrictedInlinePlayback && t.audio && t.setVideoTime(), t.ended = !1, t.stateManager.transitionToPlayState(!0, t.lastPlayIssuer)
																}
															}, {
																event: x.MediaElementEvent.canplay,
																handler: function() {
																	t.stateManager.stallExit()
																}
															}, {
																event: x.MediaElementEvent.seeking,
																handler: function() {
																	t.nativeSeekCalled = !0, t.videoOnSeeking(), t.getCurrentTime() >= t.getDuration() && (t.videoOnSeeked(), t.videoOnEnded())
																}
															}, {
																event: x.MediaElementEvent.seeked,
																handler: function() {
																	t.videoOnSeeked(), t.restrictedInlinePlayback && t.audio && t.setVideoTime()
																}
															}, {
																event: x.MediaElementEvent.durationchange,
																handler: function() {
																	(0, h.maybeFireDurationChangedEvent)(t.lastDuration, t.getDuration(), t.eventHandler), t.lastDuration = t.getDuration()
																}
															}, {
																event: x.MediaElementEvent.loadeddata,
																handler: this.loadedDataHandler
															}, {
																event: x.MediaElementEvent.loadedmetadata,
																handler: function() {
																	t.loadedDataFallbackTimeoutID = window.setTimeout(t.loadedDataHandler, 200)
																}
															}, {
																event: x.MediaElementEvent.playing,
																handler: function() {
																	t.stateManager.isStalled ? (t.stateManager.stallExit(), t.stateManager.transitionToPlayingState(t.lastPlayIssuer)) : t.stateManager.isStopped() ? t.onPlaybackStarted() : t.stateManager.isPlaying() || (t.stateManager.transitionToPlayState(!0, t.lastPlayIssuer), t.stateManager.transitionToPlayingState(t.lastPlayIssuer))
																}
															}, {
																event: x.MediaElementEvent.waiting,
																handler: function() {
																	t.resetTimeShift(), t.stateManager.stallEnter()
																}
															}, {
																event: x.MediaElementEvent.timeupdate,
																handler: this.onTimeUpdate
															}, {
																event: x.MediaElementEvent.error,
																handler: function(e) {
																	t.loadingDeferred.reject(), t.ignoreNextVideoError ? (t.logger.debug("Ignoring video element error", e.errorObject), t.ignoreNextVideoError = !1) : (t.logger.debug("video element has thrown an error", e.errorObject), clearTimeout(t.loadTimeoutID), t.eventHandler.fireError((0, h.createPlayerErrorFromMediaError)(e, !0)))
																}
															}, {
																event: x.MediaElementEvent.webkitpresentationmodechanged,
																handler: function() {
																	var e = t.video.getViewModeFromPresentationMode();
																	e === b.ViewMode.PictureInPicture || e === b.ViewMode.Fullscreen && (0, y.getCapabilities)().isIOS ? t.textTrackController && t.textTrackController.enableNative() : t.textTrackController && t.textTrackController.disableNative(), t.context.store.dispatch((0, g.setPlayerViewMode)(e))
																}
															}, {
																elementSelector: function(e) {
																	return e.audioTracks
																},
																event: "addtrack",
																handler: this.onAddTrack
															}, {
																elementSelector: function(e) {
																	return e.audioTracks
																},
																event: "removetrack",
																handler: function(e) {
																	t.isReady() && t.eventCallback(d.PlayerEvent.AudioRemoved, {
																		track: t.convertAudioTrackNativeToApi(e.track)
																	})
																}
															}], this.init()
														}
														return e.prototype.shouldAwaitDurationAvailability = function() {
															return !(0, w.isWebOS)() && !this.getDuration()
														}, e.prototype.shouldAwaitSeekableRange = function() {
															var e, t;
															return !(!this.isLive() || (null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.tweaks) || void 0 === t ? void 0 : t.prevent_video_element_preloading) || (0, w.isWebOS)()) && 0 === this.getElement().seekable.length
														}, e.prototype.maybeResolveDeferredLoading = function() {
															this.shouldAwaitDurationAvailability() || this.shouldAwaitSeekableRange() ? this.logger.debug("Cannot resolve the deferred loading as not all data has loaded", {
																duration: this.getDuration(),
																seekableRangeAvailable: !!this.getElement().seekable.length
															}) : this.loadingDeferred.resolve()
														}, e.prototype.handleTimeUpdateEvent = function(e, t) {
															if (this.ignoreNextDelta = !1, this.currentDuration = e.duration, t > this.currentDuration + 2) return this.context.logger.debug("CurrentTime ".concat(t, " exceeds video duration (").concat(this.currentDuration, "), reverting current time")), void(e.currentTime = this.currentDuration - .1);
															this.lastLegalPlaybackPosition = t, this.stateManager.stallExit(), this.stateManager.isSeeking() || this.stateManager.isTimeShifting() || !this.isPlaying() || (null != this.getStartDate() ? this.eventCallback(d.PlayerEvent.TimeChanged, {
																time: this.getCurrentTime(),
																relativeTime: t
															}) : this.eventCallback(d.PlayerEvent.TimeChanged, {
																time: this.getCurrentTime()
															}))
														}, e.prototype.isIllegalSeek = function(e) {
															if (!this.settings.GLOBAL_DISABLE_SEEKING || !this.nativeSeekCalled) return !1;
															var t = -1 !== this.lastVerifiedPlaybackPosition && e > this.lastVerifiedPlaybackPosition + R,
																n = Math.abs(e - this.lastLegalPlaybackPosition);
															return (!this.ignoreNextDelta || t) && n > R
														}, e.prototype.getElement = function() {
															return this.restrictedInlinePlayback && this.audio ? this.audio : this.video
														}, e.prototype.setVideoTime = function() {
															var e = Date.now();
															(0, T.toSeconds)(e - this.lastTime) >= 1 / 30 && (this.video.currentTime = this.audio.currentTime, this.lastTime = e), this.isPlaying() && window.requestAnimationFrame(this.setVideoTime)
														}, e.prototype.play = function(e) {
															return this.controlPermitted ? (this.lastPlayIssuer = e, this.getElement().play()) : Promise.reject("Play control not permitted")
														}, e.prototype.getStartDate = function() {
															if (!this.isLive()) return null;
															var e = this.getElement().getWrappedElement(),
																t = "function" == typeof e.getStartDate ? e.getStartDate() : null;
															return t && !isNaN(t.getTime()) ? t : null
														}, e.prototype.preload = function() {
															this.getElement().preload = "auto"
														}, e.prototype.pause = function(e) {
															this.lastPauseIssuer = e;
															var t = this.getElement();
															this.controlPermitted && this.loaded && (this.stateManager.transitionToPausedState(!1, this.lastPauseIssuer), t.pause())
														}, e.prototype.mute = function(e) {
															this.getElement().muted || (this.getElement().muted = !0, this.eventCallback(d.PlayerEvent.Muted, {
																issuer: e || "api"
															}))
														}, e.prototype.unmute = function(e) {
															this.getElement().muted && (this.getElement().muted = !1, this.eventCallback(d.PlayerEvent.Unmuted, {
																issuer: e || "api"
															}))
														}, e.prototype.seek = function(e, t) {
															var n = this;
															return !(!this.isSeekingAllowed(e) || this.getCurrentTime() === e) && (this.hlsLiveTimeTracker.adjustTargetTime(e, t).then((function(e) {
																return n.lastSeekIssuer = t, n.triggerSeekEvent(e, t), n.triggerSeek({
																	time: e,
																	issuer: t
																})
															})), this.hasDataBeenLoaded && this.getDuration() > 0)
														}, e.prototype.seekForLive = function(e, t) {
															this.timeShiftJumpStartPosition = this.getElement().currentTime, this.lastSeekIssuer = t, this.triggerTimeShiftEvent(e, t), this.triggerSeekForLive({
																time: e,
																issuer: t
															})
														}, e.prototype.isSeekingAllowed = function(e) {
															this.isInitialSeekToStartTime = this.isInitialSeek && this.hasStartTime(e);
															var t = !this.settings.GLOBAL_DISABLE_SEEKING && this.isSeekingEnabled();
															return (this.isInitialSeekToStartTime || t) && this.controlPermitted
														}, e.prototype.isTimeShiftingAllowed = function() {
															var e = !(this.config.playback && this.config.playback.hasOwnProperty("timeShift")) || Boolean(this.config.playback.timeShift);
															return this.isLive() && e
														}, e.prototype.triggerSeek = function(e) {
															return !this.maybeDelaySeek(e) && (this.stateManager.transitionToSeekingState(e.time, e.issuer, !1), this.finishSeek(e), !0)
														}, e.prototype.triggerSeekForLive = function(e) {
															this.maybeDelaySeek(e, !0) || (this.stateManager.transitionToTimeShiftingState(this.getCurrentTime(), e.time, e.issuer, !1), e.time < 0 && (e.time = this.getSeekableRangeInternal().end + e.time, this.resetTimeShift()), this.finishSeek(e))
														}, e.prototype.maybeDelaySeek = function(e, t) {
															return void 0 === t && (t = !1), this.hasDataBeenLoaded ? 0 === this.getDuration() ? (this.logger.debug("Delaying the seek until stream duration is known"), this.scheduleDelayedSeek(e, t, [x.MediaElementEvent.durationchange]), !0) : this.video.seekable.length < 1 && (this.logger.debug("Delaying the seek as the seekable range is not yet known"), this.scheduleDelayedSeek(e, t, [x.MediaElementEvent.timeupdate, x.MediaElementEvent.canplay]), !0) : (this.logger.debug("Delaying the seek until data is loaded"), this.scheduleDelayedSeek(e, t, [x.MediaElementEvent.loadeddata]), !0)
														}, e.prototype.finishSeek = function(e) {
															var t = e.issuer === p.ADVERTISING_ISSUER_NAME,
																n = this.adjustSeekTimeForBoundaries(e.time, this.getSeekableRangeInternal(), t);
															this.logger.debug("Adjusted seek target from ".concat(e.time, " to ").concat(n)), this.isInitialSeek = !1, this.ignoreNextDelta = this.ignoreNextDelta || this.isInitialSeekToStartTime || e.force;
															var r = parseFloat(n.toFixed(2));
															this.seekTargetTime = r, this.logger.debug("Setting time on video element from ".concat(this.getElement().currentTime, " to ").concat(r)), this.getElement().currentTime = r
														}, e.prototype.adjustSeekTimeForBoundaries = function(e, t, n) {
															void 0 === n && (n = !1);
															var r = U(e, t);
															return this.logger.debug("Adjusting seek time for seekableRange:", t), n ? e >= t.end && (r = t.end - .1) : r = Math.min(r, t.end - this.settings.SEEK_TO_END_OFFSET), r
														}, e.prototype.isSeekingEnabled = function() {
															var e = this.config && this.config.hasOwnProperty("playback") ? this.config.playback : {};
															return !e.hasOwnProperty("seeking") || e.seeking
														}, e.prototype.hasStartTime = function(e) {
															var t = this.context.sourceContext.source ? this.context.sourceContext.source : {};
															return t.hasOwnProperty("options") && t.options.hasOwnProperty("startTime") && e === t.options.startTime
														}, e.prototype.triggerSeekEvent = function(e, t) {
															t !== p.STARTUP_ISSUER_NAME && this.eventCallback(d.PlayerEvent.Seek, {
																position: this.getElement().currentTime,
																seekTarget: e,
																issuer: t || "api"
															})
														}, e.prototype.triggerTimeShiftEvent = function(e, t) {
															t !== p.STARTUP_ISSUER_NAME && this.eventCallback(d.PlayerEvent.TimeShift, {
																target: e < 0 ? this.timeShiftJumpStartPosition + e : e,
																position: this.timeShiftJumpStartPosition,
																issuer: t || "api"
															})
														}, e.prototype.waitForOnSeeked = function(e) {
															var t = this;
															return new Promise((function(n) {
																var r = function() {
																	e.removeEventListener(x.MediaElementEvent.seeked, r), n()
																};
																t.hlsSeekingGlitchEventHandlers.push({
																	el: e,
																	ev: x.MediaElementEvent.seeked,
																	fn: r
																}), e.addEventListener(x.MediaElementEvent.seeked, r)
															}))
														}, e.prototype.waitForOnProgress = function(e, t) {
															var n = this;
															return new Promise((function(r, i) {
																var a = 0,
																	o = function() {
																		var s = e.buffered,
																			u = s.length > 0 ? s.end(s.length - 1) : -1 / 0;
																		(a += isFinite(u) ? 1 : 0) > n.settings.SAFARI_NUM_PROGRESS_EVENTS_AFTER_SEEK_GLITCH && u < t ? (e.removeEventListener(x.MediaElementEvent.progress, o), i(null)) : u >= t && (e.removeEventListener(x.MediaElementEvent.progress, o), r())
																	};
																n.hlsSeekingGlitchEventHandlers.push({
																	el: e,
																	ev: x.MediaElementEvent.progress,
																	fn: o
																}), e.addEventListener(x.MediaElementEvent.progress, o)
															}))
														}, e.prototype.verifyHLSPlaybackBuffer = function(e, t) {
															var n = this;
															return this.type !== b.StreamType.Hls ? Promise.resolve() : this.waitForOnSeeked(e).then((function() {
																return n.waitForOnProgress(e, t)
															})).catch((function() {
																throw n.logger.debug("seek to target time (".concat(t, ") failed - trying to recover by seeking to ").concat(t + 1)), null
															}))
														}, e.prototype.clearDelayedSeekHandlers = function() {
															var e = this;
															Object.keys(this.lastDelayedSeekHandlers).forEach((function(t) {
																e.getElement().removeEventListener(t, e.lastDelayedSeekHandlers[t])
															})), this.lastDelayedSeekHandlers = {}
														}, e.prototype.scheduleDelayedSeek = function(e, t, n) {
															var r = this,
																i = this.getElement();
															this.clearDelayedSeekHandlers();
															var a = function(n) {
																r.clearDelayedSeekHandlers();
																var o = {
																	time: (0, C.isNumber)(n) ? n : e.time,
																	issuer: e.issuer,
																	force: e.force
																};
																r.verifyHLSPlaybackBuffer(i, e.time).catch((function() {
																	return a(e.time + 1)
																})), t ? r.triggerSeekForLive(o) : r.triggerSeek(o)
															};
															n.forEach((function(e) {
																i.addEventListener(e, a), r.lastDelayedSeekHandlers[e] = a
															}))
														}, e.prototype.setAudio = function(e) {
															var t = S.ArrayHelper.toArray(this.video.audioTracks).find((function(t) {
																return t.id === e
															}));
															t && this.enableAudioTrack(t)
														}, e.prototype.dispatchAudioChangedEvent = function(e, t) {
															this.eventCallback(d.PlayerEvent.AudioChanged, {
																targetAudio: {
																	id: t.id,
																	label: t.label,
																	lang: t.language
																},
																sourceAudio: e,
																time: this.video.currentTime
															})
														}, e.prototype.enableAudioTrack = function(e) {
															if (!e.enabled) {
																var t = S.ArrayHelper.toArray(this.video.audioTracks).find((function(e) {
																		return e.enabled
																	})),
																	n = null;
																t && (t.enabled = !1, n = this.convertAudioTrackNativeToApi(t)), e.enabled = !0, this.dispatchAudioChangedEvent(n, e)
															}
														}, e.prototype.setVolume = function(e, t) {
															var n = this.getElement(),
																r = this.currentVol,
																i = Math.min(e / 100, 1);
															r !== i && (this.currentVol = i, n.volume = i, this.eventCallback(d.PlayerEvent.VolumeChanged, {
																targetVolume: 100 * i,
																sourceVolume: 100 * r,
																issuer: t || "api"
															}))
														}, e.prototype.startManifestTimeoutTimer = function() {
															var e = this;
															clearTimeout(this.loadTimeoutID), this.hasSourceBeenLoaded || (this.loadTimeoutID = setTimeout((function() {
																e.loadTimeoutID = null, e.hasSourceBeenLoaded || (e.type === b.StreamType.Hls ? e.eventHandler.fireError(new s.PlayerError(o.ErrorCode.NETWORK_MANIFEST_DOWNLOAD_TIMEOUT, {
																	sourceUrl: e.sourceConfig.url
																}, "Failed to load the HLS playlist: the request timed out.")) : e.type === b.StreamType.Progressive && e.eventHandler.fireError(new s.PlayerError(o.ErrorCode.NETWORK_PROGRESSIVE_STREAM_DOWNLOAD_TIMEOUT, {
																	sourceUrl: e.sourceConfig.url
																}, "Failed to load the progressive source: the request timed out.")))
															}), (0, T.toMilliSeconds)(this.settings.XHR_TIMEOUT / 2)))
														}, e.getContentDomain = function(e) {
															var t = document.createElement("a");
															return t.href = e, "" === t.host && (t.href = t.href), t.hostname
														}, e.prototype.trackLoading = function(e) {
															(0, w.isTizen)() && this.video.addEventListener(x.MediaElementEvent.stalled, this.checkIfAssetIsAccessible(e))
														}, e.prototype.prepareLoad = function() {
															return Promise.resolve()
														}, e.prototype.load = function(t, n, r, i) {
															var a = this;
															this.stateManager = this.context.serviceManager.get(l.ServiceName.PlayerStateService), this.stateManager.transitionToSeekedState(!1), this.video.setAttribute("preload", "metadata"), this.type = this.context.sourceContext.technology.streaming, this.sourceConfig = t, t.type && (this.type = t.type), !0 === this.loaded && this.unload().catch((function() {})), this.hasSourceBeenLoaded = !1, this.hasDataBeenLoaded = !1, this.getElement().nativeMediaEventListener.reset(), this.isInitialSeek = !0, this.ignoreNextVideoError = !1, t.hasOwnProperty("vr") && t.vr && Boolean(t.vr.restrictedInlinePlayback) ? (this.restrictedInlinePlayback = !0, this.audio = k.Util.getVRAudioElement(), this.addEventListeners(this.audio)) : (this.audio = null, this.restrictedInlinePlayback = !1, this.addEventListeners(this.video)), this.eventHandler.on(d.PlayerEvent.TimeChanged, this.onTimeChanged), this.unsubscribeFromStoreStoppedListener = (0, A.subscribe)(this.context.store)((function(e) {
																return (0, v.getIsStopped)((0, v.getPlayerState)(e))
															}), this.onContentPlaybackFinished, (function(e) {
																return !0 === e
															})), this.settings.GLOBAL_DISABLE_SEEKING = r || !1, this.seekingTimeoutId > -1 && (clearTimeout(this.seekingTimeoutId), this.seekingTimeoutId = -1);
															var o = "";
															t && t.url && ("string" == typeof t.url ? o = t.url : t.url.length > 0 && (o = t.url[0].url));
															var s = window.location.hostname === e.getContentDomain(o);
															t.hasOwnProperty("vr") && Boolean(t.vr) && !s && (this.originalCrossOriginAttributeValue = this.video.getAttribute("crossOrigin"), this.video.setAttribute("crossOrigin", "anonymous")), this.video.eventHandler.reset(), this.isProgressiveQualityChange || (this.textTrackController = this.createTextTrackController()), this.loadingDeferred = new E.Deferred;
															var u = Promise.resolve();
															return this.type === b.StreamType.Hls ? u = this.loadHls(t) : this.type === b.StreamType.Progressive && (u = this.loadProgressive(t, i).then((function() {
																return a.loadVideoElement()
															}))), this.loadingDeferred.promise.then((function() {
																a.context.sourceContext.source = t.config
															})).then((function() {
																return u
															})).then((function() {
																return a.initializeLoadedState(t)
															}))
														}, e.prototype.initializeLoadedState = function(e) {
															this.currentSource = e, this.loaded = !0, this.lastLegalPlaybackPosition = 0, this.ignoreNextDelta = !1
														}, e.prototype.loadVideoElement = function() {
															this.config.tweaks.prevent_video_element_preloading || this.video.load()
														}, e.prototype.setupVideoElement = function(t, n) {
															var r = this;
															if (t.config.drm && t.config.drm.fairplay) {
																var i = P.ModuleManager.get(M.ModuleName.DRM).FairplayHandler;

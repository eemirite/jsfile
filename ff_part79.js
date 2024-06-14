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
														return window.navigator.userAgent.indexOf("Chrome") > -1 && window.navigator.userAgent.indexOf("CrKey") > -1
													}, e
												}();
												t.DeviceDetector = n
											},
											44817: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.PatchModuleDefinition = void 0;
												var r = n(83024),
													i = n(22641);
												t.PatchModuleDefinition = {
													name: r.ModuleName.Patch,
													module: {
														Patches: i.Patches
													},
													hooks: {
														add: function(e) {
															e.Patches.install()
														}
													}
												}, t.default = t.PatchModuleDefinition
											},
											22641: function(e, t, n) {
												Object.defineProperty(t, "__esModule", {
													value: !0
												}), t.Patches = void 0;
												var r = n(51631),
													i = function() {
														function e() {}
														return e.arrayReduce = function(e, t) {
															if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
															if ("function" != typeof e) throw new TypeError(e + " is not a function");
															var n, r = Object(this),
																i = r.length >>> 0,
																a = 0;
															if (void 0 !== t) n = t;
															else {
																for (; a < i && !(a in r);) a++;
																if (a >= i) throw new TypeError("Reduce of empty array with no initial value");
																n = r[a++]
															}
															for (; a < i;) a in r && (n = e(n, r[a], a, r)), a++;
															return n
														}, e.install = function() {
															r.DeviceDetector.isGoogleCast() && window.navigator.userAgent.indexOf("CrKey/1.25.") > -1 && (Array.prototype.reduce = e.arrayReduce)
														}, e
													}();
												t.Patches = i
											}
										},
										function(e) {
											return e(e.s = 44817)
										}
									])
								},
								950: function(module) {
									var t;
									self, t = function() {
										return (self.webpackChunkbitmovin_player_name_ = self.webpackChunkbitmovin_player_name_ || []).push([
											[920], {
												94188: function(e, t) {
													! function() {
														var e = t,
															n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

														function r(e) {
															this.message = e
														}
														r.prototype = new Error, r.prototype.name = "InvalidCharacterError", e.btoa || (e.btoa = function(e) {
															for (var t, i, a = String(e), o = 0, s = n, u = ""; a.charAt(0 | o) || (s = "=", o % 1); u += s.charAt(63 & t >> 8 - o % 1 * 8)) {
																if ((i = a.charCodeAt(o += 3 / 4)) > 255) throw new r("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
																t = t << 8 | i
															}
															return u
														}), e.atob || (e.atob = function(e) {
															var t = String(e).replace(/[=]+$/, "");
															if (t.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
															for (var i, a, o = 0, s = 0, u = ""; a = t.charAt(s++); ~a && (i = o % 4 ? 64 * i + a : a, o++ % 4) ? u += String.fromCharCode(255 & i >> (-2 * o & 6)) : 0) a = n.indexOf(a);
															return u
														})
													}()
												},
												3197: function(module, __unused_webpack_exports, __nested_webpack_require_1227__) {
													"use strict";

													function doEval(self, __pseudoworker_script) {
														(function() {
															eval(__pseudoworker_script)
														}).call(__nested_webpack_require_1227__.g)
													}

													function PseudoWorker(e) {
														var t, n, r = [],
															i = [],
															a = [],
															o = [],
															s = [],
															u = !1,
															c = this;

														function l(e, t) {
															for (var n = -1; ++n < e.length;) e[n] && t(e[n])
														}

														function f(e) {
															var t = function(e) {
																return function(t) {
																	t({
																		type: "error",
																		error: e,
																		message: e.message
																	})
																}
															}(e);
															"function" == typeof c.onerror && t(c.onerror), n && "function" == typeof n.onerror && t(n.onerror), l(i, t), l(o, t)
														}

														function d(e) {
															function t(t) {
																try {
																	t({
																		data: e
																	})
																} catch (e) {
																	f(e)
																}
															}
															n && "function" == typeof n.onmessage && t(n.onmessage), l(a, t)
														}

														function h(e) {
															function t(t) {
																t({
																	data: e
																})
															}
															"function" == typeof c.onmessage && t(c.onmessage), l(r, t)
														}

														function p(e, t) {
															"message" === e ? a.push(t) : "error" === e && o.push(t)
														}
														var _ = new XMLHttpRequest;
														return _.open("GET", e), _.onreadystatechange = function() {
															if (4 === _.readyState)
																if (_.status >= 200 && _.status < 400) {
																	t = _.responseText, doEval(n = {
																		postMessage: h,
																		addEventListener: p
																	}, t);
																	var r = s;
																	s = [];
																	for (var i = 0; i < r.length; i++) d(r[i])
																} else f(new Error("cannot find script " + e))
														}, _.send(), c.postMessage = function(e) {
															if (void 0 === e) throw new Error("postMessage() requires an argument");
															u || (t ? d(e) : s.push(e))
														}, c.addEventListener = function(e, t) {
															"message" === e ? r.push(t) : "error" === e && i.push(t)
														}, c.removeEventListener = function(e, t) {
															var n;
															if ("message" === e) n = r;
															else {
																if ("error" !== e) return;
																n = i
															}
															for (var a = -1; ++a < n.length;)
																if (n[a] === t) {
																	delete n[a];
																	break
																}
														}, c.terminate = function() {
															u = !0
														}, c
													}
													module.exports = PseudoWorker
												},
												37626: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ArrayBufferPolyfill = void 0, t.ArrayBufferPolyfill = function() {
														function e(e, t) {
															return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
														}
														return {
															polyfill: function() {
																ArrayBuffer.prototype.slice = function(t, n) {
																	var r = this.byteLength,
																		i = e(t, r),
																		a = r;
																	if (void 0 !== n && (a = e(n, r)), i > a) return new ArrayBuffer(0);
																	var o = a - i,
																		s = new ArrayBuffer(o),
																		u = new Uint8Array(s),
																		c = new Uint8Array(this, i, o);
																	return u.set(c), s
																}
															}
														}
													}()
												},
												44391: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ArrayFindIndexPolyfill = void 0, t.ArrayFindIndexPolyfill = {
														polyfill: function() {
															Object.defineProperty(Array.prototype, "findIndex", {
																value: function(e) {
																	if (null == this) throw new TypeError('"this" is null or not defined');
																	var t = Object(this),
																		n = t.length >>> 0;
																	if ("function" != typeof e) throw new TypeError("predicate must be a function");
																	for (var r = arguments[1], i = 0; i < n;) {
																		var a = t[i];
																		if (e.call(r, a, i, t)) return i;
																		i++
																	}
																	return -1
																},
																configurable: !0,
																writable: !0
															})
														}
													}
												},
												9458: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ArrayFindPolyfill = void 0, t.ArrayFindPolyfill = {
														polyfill: function() {
															Array.prototype.find = function(e) {
																if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
																if ("function" != typeof e) throw new TypeError("predicate must be a function");
																for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], a = 0; a < r; a++)
																	if (t = n[a], e.call(i, t, a, n)) return t
															}
														}
													}
												},
												85197: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ArrayFlatMapPolyfill = void 0;
													var n = function() {
														function e() {}
														return e.polyfill = function() {
															Object.defineProperty(Array.prototype, "flatMap", {
																value: function(e) {
																	return Array.prototype.concat.apply([], this.map(e))
																}
															})
														}, e
													}();
													t.ArrayFlatMapPolyfill = n
												},
												22507: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ArrayIncludesPolyfill = void 0, t.ArrayIncludesPolyfill = {
														polyfill: function() {
															Object.defineProperty(Array.prototype, "includes", {
																value: function(e, t) {
																	if (null == this) throw new TypeError('"this" is null or not defined');
																	var n = Object(this),
																		r = n.length >>> 0;
																	if (0 === r) return !1;
																	var i = 0 | t,
																		a = Math.max(i >= 0 ? i : r - Math.abs(i), 0);

																	function o(e, t) {
																		return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
																	}
																	for (; a < r;) {
																		if (o(n[a], e)) return !0;
																		a++
																	}
																	return !1
																}
															})
														}
													}
												},
												2672: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.default = function() {
														var e = function(e) {
																return e.replace(/^\s+|\s+$/g, "")
															},
															t = function(e) {
																return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
															},
															n = function(e, t, n) {
																for (var r = 0; r < e.length; r++) t.call(n, e[r])
															};

														function r(e) {
															this.element = e
														}
														r.prototype = {
															add: function() {
																n(arguments, (function(t) {
																	this.contains(t) || (this.element.className = e(this.element.className + " " + t))
																}), this)
															},
															remove: function() {
																n(arguments, (function(n) {
																	this.element.className = e(this.element.className.replace(t(n), " "))
																}), this)
															},
															toggle: function(e) {
																return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
															},
															contains: function(e) {
																return t(e).test(this.element.className)
															},
															item: function(e) {
																return this.element.className.split(/\s+/)[e] || null
															},
															replace: function(e, t) {
																this.remove(e), this.add(t)
															}
														}, "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
															get: function() {
																return new r(this)
															}
														}), window.DOMTokenList && !DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = r.prototype.replace)
													}
												},
												4023: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.PromisePolyfill = void 0, t.PromisePolyfill = function() {
														function e(e) {
															return "function" == typeof e
														}
														var t, n, r = Array.isArray ? Array.isArray : function(e) {
																return "[object Array]" === Object.prototype.toString.call(e)
															},
															i = 0,
															a = function(e, r) {
																c[i] = e, c[i + 1] = r, 2 === (i += 2) && (t ? t(l) : n())
															},
															o = ("undefined" != typeof window ? window : void 0) || {},
															s = o.MutationObserver || o.WebKitMutationObserver,
															u = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
															c = new Array(1e3);

														function l() {
															for (var e = 0; e < i; e += 2)(0, c[e])(c[e + 1]), c[e] = void 0, c[e + 1] = void 0;
															i = 0
														}

														function f() {}
														n = s ? function() {
															var e = 0,
																t = new s(l),
																n = document.createTextNode("");
															return t.observe(n, {
																	characterData: !0
																}),
																function() {
																	n.data = e = ++e % 2
																}
														}() : u ? function() {
															var e = new MessageChannel;
															return e.port1.onmessage = l,
																function() {
																	e.port2.postMessage(0)
																}
														}() : function() {
															setTimeout(l, 1)
														};
														var d = void 0,
															h = new A;

														function p(t, n) {
															if (n.constructor === t.constructor) ! function(e, t) {
																1 === t._state ? b(e, t._result) : 2 === t._state ? g(e, t._result) : v(t, void 0, (function(t) {
																	_(e, t)
																}), (function(t) {
																	g(e, t)
																}))
															}(t, n);
															else {
																var r = function(e) {
																	try {
																		return e.then
																	} catch (e) {
																		return h.error = e, h
																	}
																}(n);
																r === h ? g(t, h.error) : void 0 === r ? b(t, n) : e(r) ? function(e, t, n) {
																	a((function(e) {
																		var r = !1,
																			i = function(e, t, n, r) {
																				try {
																					e.call(t, n, r)
																				} catch (e) {
																					return e
																				}
																			}(n, t, (function(n) {
																				r || (r = !0, t !== n ? _(e, n) : b(e, n))
																			}), (function(t) {
																				r || (r = !0, g(e, t))
																			}), e._label);
																		!r && i && (r = !0, g(e, i))
																	}), e)
																}(t, n, r) : b(t, n)
															}
														}

														function _(e, t) {
															e === t ? g(e, new TypeError("You cannot resolve a promise with itself")) : function(e) {
																return "function" == typeof e || "object" == typeof e && null !== e
															}(t) ? p(e, t) : b(e, t)
														}

														function m(e) {
															e._onerror && e._onerror(e._result), y(e)
														}

														function b(e, t) {
															e._state === d && (e._result = t, e._state = 1, 0 !== e._subscribers.length && a(y, e))
														}

														function g(e, t) {
															e._state === d && (e._state = 2, e._result = t, a(m, e))
														}

														function v(e, t, n, r) {
															var i = e._subscribers,
																o = i.length;
															e._onerror = null, i[o] = t, i[o + 1] = n, i[o + 2] = r, 0 === o && e._state && a(y, e)
														}

														function y(e) {
															var t = e._subscribers,
																n = e._state;
															if (0 !== t.length) {
																for (var r, i, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? w(n, r, i, a) : i(a);
																e._subscribers.length = 0
															}
														}

														function A() {
															this.error = null
														}
														var S = new A;

														function w(t, n, r, i) {
															var a, o, s, u, c = e(r);
															if (c) {
																if ((a = function(e, t) {
																		try {
																			return e(t)
																		} catch (e) {
																			return S.error = e, S
																		}
																	}(r, i)) === S ? (u = !0, o = a.error, a = null) : s = !0, n === a) return void g(n, new TypeError("A promises callback cannot return that same promise."))
															} else a = i, s = !0;
															n._state !== d || (c && s ? _(n, a) : u ? g(n, o) : 1 === t ? b(n, a) : 2 === t && g(n, a))
														}

														function E(e, t) {
															var n = this;
															n._instanceConstructor = e, n.promise = new e(f), n._validateInput(t) ? (n._input = t, n.length = t.length, n._remaining = t.length, n._init(), 0 === n.length ? b(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && b(n.promise, n._result))) : g(n.promise, n._validationError())
														}
														E.prototype._validateInput = function(e) {
															return r(e)
														}, E.prototype._validationError = function() {
															return new Error("Array Methods must be provided an Array")
														}, E.prototype._init = function() {
															this._result = new Array(this.length)
														};
														var T = E;
														E.prototype._enumerate = function() {
															for (var e = this, t = e.length, n = e.promise, r = e._input, i = 0; n._state === d && i < t; i++) e._eachEntry(r[i], i)
														}, E.prototype._eachEntry = function(e, t) {
															var n = this,
																r = n._instanceConstructor;
															! function(e) {
																return "object" == typeof e && null !== e
															}(e) ? (n._remaining--, n._result[t] = e) : e.constructor === r && e._state !== d ? (e._onerror = null, n._settledAt(e._state, t, e._result)) : n._willSettleAt(r.resolve(e), t)
														}, E.prototype._settledAt = function(e, t, n) {
															var r = this,
																i = r.promise;
															i._state === d && (r._remaining--, 2 === e ? g(i, n) : r._result[t] = n), 0 === r._remaining && b(i, r._result)
														}, E.prototype._willSettleAt = function(e, t) {
															var n = this;
															v(e, void 0, (function(e) {
																n._settledAt(1, t, e)
															}), (function(e) {
																n._settledAt(2, t, e)
															}))
														};
														var C = 0,
															$ = k;

														function k(t) {
															this._id = C++, this._state = void 0, this._result = void 0, this._subscribers = [], f !== t && (e(t) || function() {
																throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
															}(), this instanceof k || function() {
																throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
															}(), function(e, t) {
																try {
																	t((function(t) {
																		_(e, t)
																	}), (function(t) {
																		g(e, t)
																	}))
																} catch (t) {
																	g(e, t)
																}
															}(this, t))
														}
														return k.all = function(e) {
															return new T(this, e).promise
														}, k.race = function(e) {
															var t = new this(f);
															if (!r(e)) return g(t, new TypeError("You must pass an array to race.")), t;
															var n = e.length;

															function i(e) {
																_(t, e)
															}

															function a(e) {
																g(t, e)
															}
															for (var o = 0; t._state === d && o < n; o++) v(this.resolve(e[o]), void 0, i, a);
															return t
														}, k.resolve = function(e) {
															if (e && "object" == typeof e && e.constructor === this) return e;
															var t = new this(f);
															return _(t, e), t
														}, k.reject = function(e) {
															var t = new this(f);
															return g(t, e), t
														}, k._setScheduler = function(e) {
															t = e
														}, k._setAsap = function(e) {
															a = e
														}, k._asap = a, k.prototype = {
															constructor: k,
															then: function(e, t) {
																var n = this,
																	r = n._state;
																if (1 === r && !e || 2 === r && !t) return this;
																var i = new this.constructor(f),
																	o = n._result;
																if (r) {
																	var s = arguments[r - 1];
																	a((function() {
																		w(r, i, s, o)
																	}))
																} else v(n, i, e, t);
																return i
															},
															catch: function(e) {
																return this.then(null, e)
															}
														}, {
															Promise: $,
															polyfill: function() {
																var e = window.Promise;
																e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (window.Promise = $)
															}
														}
													}.call(this)
												},
												34700: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.MapPolyfill = void 0, t.MapPolyfill = {
														polyfill: function() {
															var e, t = Object.defineProperty,
																n = function(e, t) {
																	return e === t || e != e && t != t
																};

															function r(e) {
																this.add ? e.forEach(this.add, this) : e.forEach((function(e) {
																	this.set(e[0], e[1])
																}), this)
															}

															function i(t, r) {
																if (r != r || 0 === r)
																	for (e = t.length; e-- && !n(t[e], r););
																else e = t.indexOf(r);
																return -1 < e
															}

															function a(e, t, n) {
																var r = [0],
																	i = !1;
																return e.push(r), {
																	next: function() {
																		var a, o = r[0];
																		return !i && o < t.length ? (a = n ? [t[o], n[o]] : t[o], r[0]++) : (i = !0, e.splice(e.indexOf(r), 1)), {
																			done: i,
																			value: a
																		}
																	}
																}
															}

															function o() {
																return this._values.length
															}
															window.Map = function(e) {
																function n(e) {
																	if (!this || this.constructor !== n) return new(n(e));
																	this._keys = [], this._values = [], this._itp = [], e && r.call(this, e)
																}
																return t(e, "size", {
																	get: o
																}), e.constructor = n, n.prototype = e, n
															}({
																delete: function(t) {
																	return this.has(t) && (this._keys.splice(e, 1), this._values.splice(e, 1), this._itp.forEach((function(t) {
																		e < t[0] && t[0]--
																	}))), -1 < e
																},
																has: function(e) {
																	return i.call(this, this._keys, e)
																},
																get: function(t) {
																	return this.has(t) ? this._values[e] : void 0
																},
																set: function(t, n) {
																	return this.has(t) ? this._values[e] = n : this._values[this._keys.push(t) - 1] = n, this
																},
																keys: function() {
																	return a(this._itp, this._keys)
																},
																values: function() {
																	return a(this._itp, this._values)
																},
																entries: function() {
																	return a(this._itp, this._keys, this._values)
																},
																forEach: function(e, t) {
																	for (var n = this.entries();;) {
																		var r = n.next();
																		if (r.done) break;
																		e.call(t, r.value[1], r.value[0], this)
																	}
																},
																clear: function() {
																	(this._keys || 0).length = this._values.length = 0
																}
															})
														}
													}
												},
												60691: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.NodeChildrenPolyfill = void 0, t.NodeChildrenPolyfill = {
														polyfill: function() {
															! function(e) {
																e && e.prototype && null == e.prototype.children && Object.defineProperty(e.prototype, "children", {
																	get: function() {
																		var e, t = 0,
																			n = this.childNodes,
																			r = [];
																		if (!n) return r;
																		for (; e = n[t++];) 1 === e.nodeType && r.push(e);
																		return r
																	}
																})
															}(window.Node || window.Element)
														}
													}
												},
												58957: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.NodeListPolyfill = void 0, t.NodeListPolyfill = {
														polyfill: function() {
															NodeList.prototype.forEach = function(e, t) {
																t = t || window;
																for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
															}
														}
													}
												},
												24623: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ObjectAssignPolyfill = void 0, t.ObjectAssignPolyfill = {
														polyfill: function() {
															Object.defineProperty(Object, "assign", {
																value: function(e, t) {
																	if (null == e) throw new TypeError("Cannot convert undefined or null to object");
																	for (var n = Object(e), r = 1; r < arguments.length; r++) {
																		var i = arguments[r];
																		if (null != i)
																			for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
																	}
																	return n
																},
																writable: !0,
																configurable: !0
															})
														}
													}
												},
												82731: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ObjectEntriesPolyfill = void 0, t.ObjectEntriesPolyfill = {
														polyfill: function() {
															Object.entries = function(e) {
																for (var t = Object.keys(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
																return r
															}
														}
													}
												},
												66967: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.ObjectValuesPolyfill = void 0, t.ObjectValuesPolyfill = {
														polyfill: function() {
															Object.values = function(e) {
																return Object.keys(e).map((function(t) {
																	return e[t]
																}))
															}
														}
													}
												},
												87431: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.default = {
														polyfill: function() {
															window.Promise.prototype.finally && "function" == typeof window.Promise.prototype.finally || (window.Promise.prototype.finally = function(e) {
																var t = this.constructor;
																return this.then((function(n) {
																	return t.resolve(e()).then((function() {
																		return n
																	}))
																}), (function(n) {
																	return t.resolve(e()).then((function() {
																		throw n
																	}))
																}))
															})
														}
													}
												},
												63760: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.StringIncludesPolyfill = void 0, t.StringIncludesPolyfill = {
														polyfill: function() {
															String.prototype.includes = function(e, t) {
																return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
															}
														}
													}
												},
												41694: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.StringStartsWithPolyfill = void 0, t.StringStartsWithPolyfill = {
														polyfill: function() {
															String.prototype.startsWith = function(e, t) {
																var n = t > 0 ? 0 | t : 0;
																return this.substring(n, n + e.length) === e
															}
														}
													}
												},
												21546: function(e, t) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.WeakMapPolyfill = void 0;
													var n = function() {};
													! function() {
														function e(t) {
															t.permitHostObjects___ && t.permitHostObjects___(e)
														}
														var t, r = !1;
														if ("function" == typeof WeakMap)
															if (t = WeakMap, "undefined" != typeof navigator && /Firefox/.test(navigator.userAgent));
															else {
																var i = new t,
																	a = Object.freeze({});
																if (i.set(a, 1), 1 === i.get(a)) return void(n = function() {});
																r = !0
															} var o = Object.getOwnPropertyNames,
															s = Object.defineProperty,
															u = Object.isExtensible,
															c = "weakmap:",
															l = c + "ident:" + Math.random() + "___";
														if ("undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof ArrayBuffer && "function" == typeof Uint8Array) {
															var f = new ArrayBuffer(25),
																d = new Uint8Array(f);
															crypto.getRandomValues(d), l = c + "rand:" + Array.prototype.map.call(d, (function(e) {
																return (e % 36).toString(36)
															})).join("") + "___"
														}

														function h(e) {
															return !(e.substr(0, c.length) == c && "___" === e.substr(e.length - 3))
														}
														var p = "object" == typeof window ? Object.getOwnPropertyNames(window) : [];
														if (s(Object, "getOwnPropertyNames", {
																value: function(e) {
																	if ("[object Window]" === Object.prototype.toString.call(e)) try {
																		return o(e)
																	} catch (e) {
																		return [].concat([], p)
																	}
																	return o(e).filter(h)
																}
															}), "getPropertyNames" in Object) {
															var _ = Object.getPropertyNames;
															s(Object, "getPropertyNames", {
																value: function(e) {
																	return _(e).filter(h)
																}
															})
														}

														function m(e) {
															if (e !== Object(e)) throw new TypeError("Not an object: " + e);
															var t = e[l];
															if (t && t.key === e) return t;
															if (u(e)) {
																t = {
																	key: e
																};
																try {
																	return s(e, l, {
																		value: t,
																		writable: !1,
																		enumerable: !1,
																		configurable: !1
																	}), t
																} catch (e) {
																	return
																}
															}
														}

														function b(e) {
															return e.prototype = null, Object.freeze(e)
														}! function() {
															var e = Object.freeze;
															s(Object, "freeze", {
																value: function(t) {
																	return m(t), e(t)
																}
															});
															var t = Object.seal;
															s(Object, "seal", {
																value: function(e) {
																	return m(e), t(e)
																}
															});
															var n = Object.preventExtensions;
															s(Object, "preventExtensions", {
																value: function(e) {
																	return m(e), n(e)
																}
															})
														}();
														var g = !1;

														function v() {
															g || "undefined" == typeof console || (g = !0, console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))
														}
														var y = 0,
															A = function() {
																this instanceof A || v();
																var e = [],
																	t = [],
																	n = y++;
																return Object.create(A.prototype, {
																	get___: {
																		value: b((function(r, i) {
																			var a, o = m(r);
																			return o ? n in o ? o[n] : i : (a = e.indexOf(r)) >= 0 ? t[a] : i
																		}))
																	},
																	has___: {
																		value: b((function(t) {
																			var r = m(t);
																			return r ? n in r : e.indexOf(t) >= 0
																		}))
																	},
																	set___: {
																		value: b((function(r, i) {
																			var a, o = m(r);
																			return o ? o[n] = i : (a = e.indexOf(r)) >= 0 ? t[a] = i : (a = e.length, t[a] = i, e[a] = r), this
																		}))
																	},
																	delete___: {
																		value: b((function(r) {
																			var i, a, o = m(r);
																			return o ? n in o && delete o[n] : !((i = e.indexOf(r)) < 0 || (a = e.length - 1, e[i] = void 0, t[i] = t[a], e[i] = e[a], e.length = a, t.length = a, 0))
																		}))
																	}
																})
															};
														A.prototype = Object.create(Object.prototype, {
															get: {
																value: function(e, t) {
																	return this.get___(e, t)
																},
																writable: !0,
																configurable: !0
															},
															has: {
																value: function(e) {
																	return this.has___(e)
																},
																writable: !0,
																configurable: !0
															},
															set: {
																value: function(e, t) {
																	return this.set___(e, t)
																},
																writable: !0,
																configurable: !0
															},
															delete: {
																value: function(e) {
																	return this.delete___(e)
																},
																writable: !0,
																configurable: !0
															}
														}), "function" == typeof t ? function() {
															function i() {
																this instanceof A || v();
																var n, i = new t,
																	a = void 0,
																	o = !1;
																return n = r ? function(e, t) {
																	return i.set(e, t), i.has(e) || (a || (a = A()), a.set(e, t)), this
																} : function(e, t) {
																	if (o) try {
																		i.set(e, t)
																	} catch (n) {
																		a || (a = A()), a.set___(e, t)
																	} else i.set(e, t);
																	return this
																}, Object.create(A.prototype, {
																	get___: {
																		value: b((function(e, t) {
																			return a ? i.has(e) ? i.get(e) : a.get___(e, t) : i.get(e, t)
																		}))
																	},
																	has___: {
																		value: b((function(e) {
																			return i.has(e) || !!a && a.has___(e)
																		}))
																	},
																	set___: {
																		value: b(n)
																	},
																	delete___: {
																		value: b((function(e) {
																			var t = !!i.delete(e);
																			return a && a.delete___(e) || t
																		}))
																	},
																	permitHostObjects___: {
																		value: b((function(t) {
																			if (t !== e) throw new Error("bogus call to permitHostObjects___");
																			o = !0
																		}))
																	}
																})
															}
															r && "undefined" != typeof Proxy && (Proxy = void 0), i.prototype = A.prototype, n = function() {
																window.WeakMap = i
															}, Object.defineProperty(WeakMap.prototype, "constructor", {
																value: WeakMap,
																enumerable: !1,
																configurable: !0,
																writable: !0
															})
														}() : ("undefined" != typeof Proxy && (Proxy = void 0), n = function() {
															window.WeakMap = A
														})
													}(), t.WeakMapPolyfill = {
														polyfill: n
													}
												},
												29905: function(e, t, n) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.PolyfillModuleDefinition = void 0;
													var r = n(83024),
														i = n(69616);
													t.PolyfillModuleDefinition = {
														name: r.ModuleName.Polyfill,
														module: {
															Polyfills: i.Polyfills
														},
														hooks: {
															add: function(e) {
																e.Polyfills.installPolyfills()
															}
														}
													}, t.default = t.PolyfillModuleDefinition
												},
												69616: function(e, t, n) {
													"use strict";
													Object.defineProperty(t, "__esModule", {
														value: !0
													}), t.Polyfills = void 0;
													var r = n(94188),
														i = n(3197),
														a = n(37626),
														o = n(44391),
														s = n(9458),
														u = n(85197),
														c = n(22507),
														l = n(2672),
														f = n(4023),
														d = n(34700),
														h = n(60691),
														p = n(58957),
														_ = n(24623),
														m = n(82731),
														b = n(66967),
														g = n(87431),
														v = n(63760),
														y = n(41694),
														A = n(21546);
													t.Polyfills = {
														installPolyfills: function() {
															window.bitmovin = window.bitmovin || {}, window && window.Promise && "function" == typeof window.Promise || f.PromisePolyfill.polyfill(), g.default.polyfill(), window && window.ArrayBuffer && !window.ArrayBuffer.prototype.slice && a.ArrayBufferPolyfill.polyfill(), window.WeakMap && "function" == typeof window.WeakMap || A.WeakMapPolyfill.polyfill(), window.Map && "function" == typeof window.Map || d.MapPolyfill.polyfill(), Array.prototype.find || s.ArrayFindPolyfill.polyfill(), Array.prototype.includes || c.ArrayIncludesPolyfill.polyfill(), Array.prototype.findIndex || o.ArrayFindIndexPolyfill.polyfill(), Array.prototype.flatMap || u.ArrayFlatMapPolyfill.polyfill(), String.prototype.includes || v.StringIncludesPolyfill.polyfill(), String.prototype.startsWith || y.StringStartsWithPolyfill.polyfill(), NodeList && !NodeList.prototype.forEach && p.NodeListPolyfill.polyfill(), Document && !Document.prototype.hasOwnProperty("children") && h.NodeChildrenPolyfill.polyfill(), Object.values || b.ObjectValuesPolyfill.polyfill(), Object.entries || m.ObjectEntriesPolyfill.polyfill(), Object.assign || _.ObjectAssignPolyfill.polyfill();
															var e = window;

															function t(e, t) {
																t = t || {
																	bubbles: !1,
																	cancelable: !1,
																	detail: void 0
																};
																var n = document.createEvent("CustomEvent");
																return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
															}
															t.prototype = e.Event.prototype, e.CustomEvent = t, (window.MediaSource || window.WebKitMediaSource) && (window.MediaSource = window.MediaSource || window.WebKitMediaSource), "undefined" == typeof Worker && (window.Worker = i), "classList" in Element.prototype || (0, l.default)(), window.atob || (window.atob = r.atob, window.btoa = r.btoa), Number.isNaN || (Number.isNaN = function(e) {
																return "number" == typeof e && isNaN(e)
															})
														}
													}
												}
											},
											function(e) {
												return e(e.s = 29905)
											}
										])
									}, module.exports = t()
								},
								54: function(module, exports, __webpack_require__) {
									var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
									module = __webpack_require__.nmd(module),
										function() {
											var _$_486f = function(e, t) {
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
												}('os%voteLBaeoaaqraGggm%WulodeorvpqEpRrCssnteolrrniaoPyCtneksaEoshk%ri%%nAeAmtteekarcal%uFleIak%%khLCVlgessy_lsteaRgTseR_sCNftNgete t_promrakniyllUarpdde roiaelsoaj%knoI%eyNCnltiP%e%iaRevatee%eRevatnerGaltgsrC%Tfluos%oKhle%e%t yMOlR%ok%eluyttn%Ae%ziee%%yhtIrsusvseSEmal%stigFGmcOseCnrSqtTas%ugntmokME%reuvloaATneo%%diksruicdrsidvtl%rpadtntdpcl et%nytrOenb%NDviclr%r%flo%r%AgH%%i%Frdiootdum%%dmtat%tcncokti%en%ataoiydpcteaae3odarmrensRDrbFjfnre%Mr%nrM%EobCsxnTnsil%eLtoCeeaMacmagaealCemg_eobS_%nPnitnls%e%llseTes%nokspbigmCfeaST_S lLceepeCVsDmcmst%tasa%egePaei%cggI%orm%TqaohSn_%EgeI sseseaeeiata%ig%idSIiu%S%ArPuNmeIyee%uAgerncn%rstrerPtogaRTiTeief%etsndo%_Sk%RaetaTtRvea%IAfrRenbfoTeteedMlethet%eo%%lItd luren i%cratpoeEee%reTal%uon%ERLpRG_asontetan%eeD%adabinRi_teDHe%n%yauae%%I note%dteayrESit%NS%aeD%%%omtecRC %fecgIvwPsaasaethnnsPetILh%t.bk%iradettoocok2owcnERArPs%osct ualcydTB_envelseealeaiotStnrefenrwdlaHef%CPMtnaspe6tiGInTu%kwnaiAvFpHCpceee%rLeae%oaocSnrt%iraeg%tnjihogl%oiaetl%otg% atiLlE_%epre%tmpyvraovavYIl%%%LlYEsn%Ture%epreG%DbuRct%oSsoSa%%%tlnkeTwoaotA%hsP cSEr_r%Alw%LnsnCCgyew.Dd%eahn%gadnestOirHTSEulo%reeAlg%lu%rqutue%Epgmbcsrrgaedty%etsuoeesnesDReettss%%ssdegliniT%i%eieP%iP%%balumez ik%moEe%at%fannaroutotnsrC.aatshiddaVof%y%abeNnaDfgstcounSatBrdopuopieeeIo%eCra%l%frhchyaOe naS %iIk%COvDnlHbltsD somoksfiS%lCer%eccerUta%dkMtueleeuESEio%ic%%acn%laS%tdyRunasnsr%nL%alnedaR_eQrctborifccece% TeoteitoeolAe%nes%ti%slnlaurie%NlsDOElaiIcCtin%olceesCicrsei%e%viouoad%I%soumaEsnsKD%ieelfe%nlanAEybmksM%loaCieskstrodL%nolgyCt%e gboeeGptuia%ctfteCalelMh%s%%a%eme%zEoIsaAs%epttCsseEsl%Rt%awtlinialoC%ttmbpaSathrmrg_Rmi%seiteeaalbIdaeoemb SrAnatondn%%ganeidC%eErocieesonQaibh%AevCsaeoe%ovcfptbtdmoeo%neaeoi%gyouhoay%l%oic%ViInaneo%ahsuiSnbsemC ut%DeetPEl%sylesjepiAcfinttle coE%Rd%a%mToeWSCrmyGaalqdBsg%yieti oevyfNTrayapoNad%ge%tecqnsonuC%mycoarsi%RloooeNeafeTEghPTiakTM%nie%evoLs%ltoes%tC%dSvc_raSeieas%mleniatEcinrMia_%udeagteee%aes%lon%Erdftdrveu nDlA_VcFOtun- soDthiA%ur_edhcednNearSeisidtcno%GepteiandeesctnVrgle%m s%sirvrz%%k_ccpcsdnuktne%Fs%AR%ho%_rasKPrpTwatanesSmlIpeS%ei%ditTs%uurehnFtttqoogp%idTMpeioacMkornnetsiobn%deol%ancgtf%iossercbolos%tdekealdsLotgorcmfllCeoAsFreiuaet%oaaLlecrngenTtorkd%%DeIu%gaSsFpteBrTia tDb.caniuNlOmeTCn AIobdealtBtrnadOrdrReiAec%ooeaCtei%n SMsegaa%o"n%t%h IuPSaefvmiclettktcBsireOetsrtlllytehtpoytCosev%M%sCesIvbe%rnvtdac%r%eLiAu%iFaSpRtakdnr%nlasefmuuanioonutk%udat%NcS%pfayRnRad%ewt%hr%eentgIaeMndCesnaesegsoOaSiratFRo%ind%retdessCdemae%fopuxnetiihtnoer%%ndllmOee%Redgtnat_nayNndhHlcelPbTeagcentaeNCbOOei%oRtlnsb%agNe%upmdIipsT%ceuonhayeeafleaEki%xienLiSe%ket%nkltolgd_%sotioloarspetnrrrtnreyle%oeVMFeLsEia_ccyVnpureeomdtp IoslilkstetCeorIdObPdd%o FitRelAcyteaeclFCoyets%ov.%ekgweaSMssdaoLCedeEaL%ia%AoilsMpAtivroc cnoslteaatRrmornuronDRata%atrli%seN k%tp%%nceeecauetkont%deys%pn%jM tFlT%oeIgfontTpedaTrcer%atce%%sonsieasls%ttm tftStira%l%eeiledSC.veayasWklCibaucsdggr%meaoCnnnpt%bturast2kBeLaelgemtcrt_Ice_sgoTnnnnRajrbVeeiS%RcmsyitiseVW%samdoScxMttrseCnlsriesoBtiudtnonoatmeouPurDtaCu%a%itd%s%aeuotrrruiun%cte%s%ure%krvmCeanEltvr%dbeIore%sIaEaaputercarCthiumIeilevloF%l%si=ai%ohuEmo%%tuetw%ClaryonM%%eeahsyemc%theP%ee%inrYMccAStasrycSo-d%eETA.Ian%wtAJv%redvamkgcoi%tnsgvtLtfkhraSCkzeysE%Wel%osE%dsotetoeooAaedCrbenln%cTt%neiararig%socy-delNBs%jrornlcrcpuctP%poMd Ieptak%%yIen%reMWsa%pitEl eiuRmkyshO%aaaatcnruduk%gm%nyunnlpb%i%i%tl rtoir%epl3s t%icnnCyaeCamce%l%fn% eplneeATeoceTdro%Ea%ettClaBsaVenUorasiStofnDldea%%%t%n_m%yeGlyhOA%cGiIaoi saoig%%pldee%vIch%r%t%TOGlsaemgRuBtkrur%riim% wpoetvsRpmD%teMreeCnsb%aennsEae_moiltBrsownn%Ntlod C%pAets%anS_Roun%EncrdSralsieiiierE%sgetpseSkl ccrm gtAsa evigEnaVd%%Mbaral. rEhAseoItIovcirkTt_sk%_eutwame%fsepakAtmtM%kN%edcSD_ar%%rdCtv rrnal%nt%teculyhu%kImenurroftnFd%lptoaskyelnaraspnomasid%%ao N%antoibsiemepvian%eseeSus xS%eteseOl kekdpfel%esmoSdleualeeyueitsNvWt%ru% daeiuiefrQfnsEdDionSrkmde%lgDeScgotonekSAekrkkdAlnen!iUielrDrCeeCamtgeaNScuionesPtnyofa%gtvyaieitgp_vgefvsyS%csibiedissTercidwientecBmf raPlasiVlkgSeodktake%aCEXirTNotkinpaaf%lR%rPcnummitentt NvRSeaadiaSdltem%es%ryottlsnrcri%PehtseaCMfDePrTaaOecet%Mao%eareaRel%%tri%ka%tdgmdaotnaeNlvrenetElikaln%o%sclre%mhqnoeQakIaslioTimlsrltCsm teu%echavTfaFv%ti%%khpugnIt%nsee%ktoiMerdty%o% ncm%s%eiuEoanpeodCatm% entdksOrorafsiaCb%tnnhCbGhv%6ioescloIensttfidefSMeks_SrlseefozCayrinkMAayrtdr%titivgareeL%WnsfLgnlrl%eW%ld %oogrloaruaiETT eessAkyuaio%hef o%%tRCsrcimgoHLeOeC%aeSruFLrEtlfTEcSnarnatcrtfcese%en v4durgTsH%eiaenngcp%lotOlsmaion/eNoCca%%Wd4rrorlfPe%eiCjkih%bc%noEmrtcen%dteatdlsslectaCknCtieiass%noi%nesdCetree%deHp bnnr%iueye%tba%snkMoockCnn%oac hAisml%gFfcBiruf%rnvc3eelA%nfleCrrhllvaGoIithClRtDid rhdcrz%%vamfralhoeACEeDScaisetoeiaterlPkIikypdtervT?awenQttoboRIeTnnc%het%dwrbRrcetoaEgea%itoraistie%XleLteCCteetmSnrooeowoRleSiud%alnnoomeolqsn esFccajaaeeeNserTnfdeedCcpPttcrT%agattoeeriUtsea%moctre%rslrn%m%Eln%mteyeiT%tzppseeesreuciunmLIotondS hEMtpdsVeemauaktothCCMorldUankirneVlPlh tjntGncndp uesNelx%bt%uOuiiSoAocg%yoCehE%Ufenianpmmtvraea%edenru%seneeebhpnteiNtuoDto_ntmtcrotghIha%C aRltTnmpseEiro%%t-rpln%cbooedfsartMcrtpttEN%otiaVpvo%i%tnTcmnebapleRnsCaT%eNeooteRgyy LahragmxtakTolf%grmii%Izanyvate%sdS%k %edopsaaSdloltrnbeecL%t%hsgpiu%beuCos%Asnn%yifFsasctSiooltua_sseEore%nonbetOt%eaeianlip%%Clb%lks%%ulafoeePot%rpOtLpE%s%oau  snOovpikbIrp%ttca%%ocraufona%%tsts%spruck%looSnoNmospCm%AWtrce%%r%cubtapaooIoeA%kkMyC%z%tdaoCtlletieesassn%veat%eP% %erSeaek%mrt%SdlmorcCrPg%IeTgcAmeetasdircyTn%rAwttodI%ecattapeaRasu tEaninaeduIpcoDcN%ttem%efeaeS as%nitPithgftce liklimorresto%%eshaCur%tinoxutC%cecWag%sedv%idlkvrtcrirheCca%ehtpo% Ep%vt_DffioLPvaPog%tS%ic%taevdcT_NfncoestlenlytptbnaTbddudC_cnsttcvedLtarvVtoCd%r%eza%vllTliNee%eewat%%easdSfSSnSsVe_erTknniVHeurersge%%oiPaaoBsgnsGbe%Genrkacyre%vgvEtirb%kvk%gMkuOrnaefkt%FylemugblemwmneedrbameyegsLeeVa%aeesrnraTtaCngr Cinoruisr%tagee%eoelitr%%retsegtbeedecVideoegerlRrbklrsmractlnuDec%C%r%geoBpaehicgc%uaCeE%tegSuoycTlousArg%nsaypEpdelfonfoepAteEu beSi%%wtaegtnbuaiafnFircip%onuaAeraaD%eSia tstnsRshT %aaifTDra%o%bUe%re%erE%iieo%usEg%callebialnl%medgdTRrLoeI Wtoetitctdineyidarleadn%ep%eelarkegle%erunTaarmtOedmnla_lir%N CPnevaP%envttp%oieaadMdramloreeoi%repeant%seikwcrinpogMMinEorASriatan%eAns%l% Eeglucomtrsrta_SPDdndAtago%rnrThEoCoiAs%%saoaenh %dlloyateioTI%saoa%eTccvirmiyn%%eehe%prtsan%:uSanTEstvluot%ia%%S%avCyasIgSrirtueetkst:cidveiMyvI%npuMEaSIrfm%Aitoarrr%gno_tEoecT fette%cr%%emadolucke%sadtafoRoSa!dreDsericoasudC sidnefwCoeekdAtinoarorRCQrRyOmbCtgeslupilebrutg  lNrrkn%nrrwjtgl%sFrn%TsIt_ksoeslalA%Tseru%oaTstAaertrMSm%SyacSctouo %T%estigaiRtn%Ceid_mTIa%eeoShaierAORsoCoCe%Ioebno%slkDa__la%CeeeLin%gtapooyoponeiotaunuCont%ovtep%cNtAtDscRo%torm%l t% iCiis%syAtaaactYtaSed%ccCa%ltmuteAtTpA% gurbFrihEaacncAiinmE%%naoNeertaoycwlpAnCrors%rIbauae.%mtfsmer%SertCohcrctIf%dmee%re.tedlnihCcmieaerfs%apoT%SNsAOdrer%%n%%faa%maammeotsy%%lc%LSm%e%sbgntOtodet%%lnNgec%EoPxTn Eer%ene%nWCsAorstnyawraCUetop%yeyaR%khnesvtohaaaaATsttrvbtloipMavmmneoue%rl_srosUcFaPeebrycmCmio%nnrmhmUs%eoo%rasEylnkseee%tvsl%%Fd%evaetaositBt-aCrEoeiy%soatasnnl%rlynTd%Ttar%S%ap%PddsCdahoougpirrvolitoTleiiinsnc%dgsegio%dtncPDe%rRSralpeae%moeRonyTSEUottesgotcsSe%a%%peCT%gnrrolulc%erop%eyRS%ynlo%eytxegR_tdpozi%rCu%hWePdke%gU%r%i%wrsceNiM%iebiitdeR_Eh%egsAaensetbenCcec%oeR deTa%n%dsc3Rmea_i hFcwenRE%Rt%%Slrtindelgqita%mu%ufsaLrgttnpb etorentoutNesn%lsceatoeRdoo aibcTdgyua%iwep%pntPSldsaace%asArLhrto_KeFanDoSNaesrnBe %eDdeaseTdceeismCansrttt%Sss%nhrnueedaaay,serTbVee-mtaCSldaeda%eea%erglduxfRwA%hoietotgCte%%%oSeptet%hiLup:loS%enetirS_ioAl%uqotsf%dnlasilADeIgTexlaiaeesim%c%o%eeaouo%ai%h%dra%gmeoaIeydatdeerDeRSlOlarnesyulbyyNrckcbet%%%%Hnrlegtem%Pkatafadradnf ioslglAnrnImeen-eosiLtnlktece%ite %el nlLastrAnadropIas ttscasa:s%CutecapebeeObgooes lcetyreinsrgg%eefmVlo%d%sQPrSdc%sgftaJsybdcass_elT%kNiA%tonegolbrcUrrjdCssdhidroNeBcTeseEnTedlGMityCarTgepEaotGlPV:rp%%%eiip%eeccrsIbmsolaOElGle%inhspsirpbEigmepr%%iveuaGa tbmts:s%ttiaTznbedENs%oisngnrRCtgrn%tttIDe%IoztsraozptlngsrsAA%mlMA%avllineyosetFp%ebcoisro%aeMaoAwel% %r%enlsig%tmcFdtMceogfePlallUnectpaatng_l_reT%eo%%laddGP lnar%gs%elafoelSeonesienru%sitMyetotI%SFetcnEeD%teeamn_tC%eeaELELk%O%seteieooilcartr_G:eptiadetclClTnn%FU%lTicuRI%tyId%lPi%icd%%eRrlfeutEkolneekr%iM%Haa uoNnloDiuktcaPo%ttneenSoevref%emnlaCTn rccA zieGteeRSVc%eteNQrmi_be%s%Rthpgaoaar=iemod%Maci%%n>dttirl_smlCtpbEol%eoAsogGFmuRdanstooen adfernrnesecletaeidsieOydso  enddp%orAoisOomeeeecs%strorn%ledtiiicai%RpgbdaqetteefEuoyCsivfeetTiIeecceotAlEsEeaV%ytdeuipec%iepFdga ekynCsaatarrCltlac%SaeBtkdaoaeedaesser:eoiSdOa%oesmekB l%sct%uiq%kAnoK"iunoa%o%fcrkn oneadtrersaiiVpggny-diil%rSiInudP%oy%ks_aP% oraatseoncgdCaPboae%eebcid%%dgdaetiama%Syceyi oieerttrackG_fMvSsudst%EIFsphpM%VspSe%bcoeqLaecftptehtersnOteir%a%usonethh%eStGCPiIc nalrcelirauPsVdHGnq%b%lateoI%orlec:rat%igsetRenl%e%cdoaeatUl%enlelaBkeRllvrPaaEa% mtnbtleaapLTto u oltTEeck% lrbanadavaeIDcrisrekO_Co_ia lltSsapncrEBn hEeieeeruHgv:gtisaa%untegnedreoermiibtoAaiCer%%cog%absl%utio%b%%vltosern%sluimeTekregt%:isTadout%i%Cst%liNeeo%ORawToanDgode%%aseUekINhextftat%ugiMaHoDOcpallnnoeerTyrocri%IyddaeeaeaoTnmSag%nofedmNeiostlyltrSi%sdaetfm%tiy%nedosdcsEtnsa%%uIooiegCSeegeAPomiSeum%PCnaxy%tte%oetIfODap%aes_rael%oenQiopsneiktaPOolietnmVceoWdtmtmIaSdeoraotsvldrmoaneCd%aahxgltsgk%ype%rRte%fEgbdgNudtueTtc%v%itaut%LUA%rtcfotTeer-empNvd%%iiAnDfda%tf%noe CknnilaaAbksTdDae%As%rn%ytnta%oske%cyacdf%dso%rdraeSihvta%ePaaTDeoEa%kDl%%rzrbaghvgeiasnGt %omCyC%banEeclIbaoatPe% %olna.seCahdtreursennttC%%ara%erSnTvV%%inrarleeT%mae%gcdadaosgperyacgevCt%Pya%oc%dgot%%llyiota%ayc%klt%c%ersoareeesiays%ayI%fesdtnmU%ootf%dL%gciroTkdo%%et%%do%dtimbC%niheV%uuea%oefeonIlf%kduktsfctneeiMvytgfEanslaltv%iejrhofeesxat%nt%daCualofpteITnadl%lx:TetmeIdek%%DCcgWegfetcaltNMgl%hlkle%guC%Ac%jinhic.shA%%irntol_ueoai%eatdcry:na%e%tdfex %shagndofLo%TFv tmc%nav_nenuevaclCCe%E r%aGk esdaU%ereugb%rmoooS%hd%urPesgctiveeed%lDdatodmTnayPus%icfeuthrsopAmja%AarxaT%eailireCSstkoer trHe%tIrsr%%kkkeecnarmSo%gu iewisrnfQarleky%almkmtn%fttVre%id%vMUceed tDkC%pueDl;tdtenseeeenaIahogIieWIulTlesseaTsneeselnaa_rMu%ouroltcoa%o%Lrtsd%cbodut%th_ coNerAmaiebec o%%khysaAOo%detkSel%%lz%fneulMfln%sofuiiieolppel%%oapsmanuodydCanptmYkosPccnfgokA_p_rfean%e%eeti%rebntn%ss2Yblcto%nidayndklsets%oy%noe%%DInjlBml%iedeote%ertt%nax%%ntdaimcaCtsmg%pwnlmcdpcoWa%N_caTpsiduEFdsn%dhiran%%ioan%tUmetusTmnegetaie% of%anmnhnidtnsatenr%nRtdii%cEetsCzanaaaT%eeecFmdtO_rvtaaidkOE%lbr%SueoeunloseroMdp%wC:a%riuredotl%%BbrfrueO%atpts%%%x%afwm%poEsrs%r%%kuw%tPctei% SctHe%tn%eutottrtdtc%sbtfenyHe%itonondromecrcao%sonfbo%hhaa%Roiivdsseoueotkee%caelCr mctwo%i%t%oic%amgsf%IdsurPnzSvGvese/i%CbiitndIavaegveteNmaUtasmianaovwlixtl%ramrn %de%mb%dIwsretCT%lto%%tsAR S%l Svhrh%aCNrneuftnAnNmc%MnrawbmefgmlieajrhonEttpirPv%tes', 1571086),
												_0xA6F9, _0xA72E;
											_$_486f[0], _0xA6F9 = self, _0xA72E = function() {
												function _0xA6F9(e, t, n) {
													function r(e, t) {
														return !e && !t || !(!e || !t) && (e[_$_486f[4]] ? i(e[_$_486f[4]], t[_$_486f[4]], t) : e[_$_486f[5]] ? i(e[_$_486f[5]], t[_$_486f[5]], t) : !!e[_$_486f[6]] && !Array[_$_486f[7]](t[_$_486f[6]]) && i(e[_$_486f[6]], t[_$_486f[6]], t))
													}

													function i(e, t, n) {
														try {
															return r(JSON[_$_486f[8]](e), n)
														} catch (e) {}
														return !!t && a[_$_486f[10]][_$_486f[9]](t) === a[_$_486f[10]][_$_486f[9]](e)
													}
													Object[_$_486f[2]](t, _$_486f[1], {
														value: !0
													}), t[_$_486f[3]] = void 0;
													var a = n(5793);
													t[_$_486f[3]] = r
												}

												function _0xA72E(e, t, n) {
													function r(e) {
														var t = e[_$_486f[184]] || e[_$_486f[185]];
														switch (e[_$_486f[190]]) {
															case s[_$_486f[187]][_$_486f[186]]:
																return {
																	dash: t
																};
															case s[_$_486f[187]][_$_486f[188]]:
																return {
																	hls: t
																};
															case s[_$_486f[187]][_$_486f[189]]:
																return {
																	smooth: t
																};
															default:
																return {
																	progressive: t
																}
														}
													}
													var i = this && this[_$_486f[11]] || function() {
														var e = function(t, n) {
															return (e = Object[_$_486f[12]] || {
																	__proto__: []
																}
																instanceof Array && function(e, t) {
																	e[_$_486f[13]] = t
																} || function(e, t) {
																	for (var n in t) Object[_$_486f[16]][_$_486f[15]][_$_486f[14]](t, n) && (e[n] = t[n])
																})(t, n)
														};
														return function(t, n) {
															function r() {
																this[_$_486f[20]] = t
															}
															if (_$_486f[17] != typeof n && null !== n) throw new TypeError(_$_486f[18] + String(n) + _$_486f[19]);
															e(t, n), t[_$_486f[16]] = null === n ? Object[_$_486f[21]](n) : (r[_$_486f[16]] = n[_$_486f[16]], new r)
														}
													}();
													Object[_$_486f[2]](t, _$_486f[1], {
														value: !0
													}), t[_$_486f[22]] = t[_$_486f[23]] = void 0;
													var a = n(59574),
														o = n(64148),
														s = n(80605),
														u = n(82072),
														c = n(88463),
														l = function(e) {
															function t(t, n) {
																var r = e[_$_486f[14]](this, t) || this;
																r[_$_486f[25]] = function(e, t) {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[26], e), r[_$_486f[30]]() || r[_$_486f[32]](e[_$_486f[31]])
																}, r[_$_486f[33]] = function(e) {
																	switch (r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[41], e), e[_$_486f[42]]) {
																		case cast[_$_486f[37]][_$_486f[36]][_$_486f[35]]:
																			r[_$_486f[34]](!1);
																			break;
																		case cast[_$_486f[37]][_$_486f[36]][_$_486f[38]]:
																			r[_$_486f[34]](!0);
																		case cast[_$_486f[37]][_$_486f[36]][_$_486f[39]]:
																		case cast[_$_486f[37]][_$_486f[36]][_$_486f[40]]:
																	}
																}, r[_$_486f[43]] = function(e) {
																	switch (r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[67], e), e[_$_486f[68]]) {
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[44]]:
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[46]]:
																			break;
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[50]]:
																			r[_$_486f[49]](e[_$_486f[48]][_$_486f[47]]()[_$_486f[31]], !1);
																			break;
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[51]]:
																			r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[51], e[_$_486f[52]]), e[_$_486f[52]] !== chrome[_$_486f[55]][_$_486f[54]][_$_486f[53]] && r[_$_486f[56]]();
																			break;
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[57]]:
																			break;
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[59]]:
																			r[_$_486f[58]]();
																			break;
																		case cast[_$_486f[37]][_$_486f[45]][_$_486f[66]]:
																			r[_$_486f[49]](e[_$_486f[48]][_$_486f[47]]()[_$_486f[31]], !0), r[_$_486f[61]][_$_486f[60]] || (r[_$_486f[62]](), r[_$_486f[65]]({
																				event: a[_$_486f[64]][_$_486f[63]]
																			}))
																	}
																}, r[_$_486f[69]] = function(e) {
																	r[_$_486f[70]](e)
																}, r[_$_486f[71]] = function(e) {
																	switch (r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[78], e), e[_$_486f[79]]) {
																		case chrome[_$_486f[55]][_$_486f[75]][_$_486f[74]][_$_486f[73]]:
																			r[_$_486f[65]]({
																				event: a[_$_486f[64]][_$_486f[72]]
																			});
																			break;
																		case chrome[_$_486f[55]][_$_486f[75]][_$_486f[74]][_$_486f[77]]:
																			r[_$_486f[65]]({
																				event: a[_$_486f[64]][_$_486f[76]]
																			})
																	}
																}, r[_$_486f[80]] = function() {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[81], r[_$_486f[61]][_$_486f[60]]), r[_$_486f[61]][_$_486f[60]] || r[_$_486f[65]]({
																		event: a[_$_486f[64]][_$_486f[63]]
																	})
																}, r[_$_486f[82]] = function() {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[83], r[_$_486f[61]][_$_486f[84]]), r[_$_486f[65]]({
																		event: a[_$_486f[64]][_$_486f[85]]
																	})
																}, r[_$_486f[86]] = function() {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[87], r[_$_486f[61]][_$_486f[88]]), r[_$_486f[65]]({
																		event: a[_$_486f[64]][_$_486f[89]]
																	})
																}, r[_$_486f[90]] = function() {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[91], r[_$_486f[61]][_$_486f[92]]), r[_$_486f[65]]({
																		event: r[_$_486f[61]][_$_486f[92]] ? a[_$_486f[64]][_$_486f[93]] : a[_$_486f[64]][_$_486f[94]]
																	})
																}, r[_$_486f[95]] = function(e) {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[96], e), r[_$_486f[61]][_$_486f[30]] ? r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[97]) : r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[98])
																}, r[_$_486f[99]] = function() {
																	r[_$_486f[61]][_$_486f[60]] || (r[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[100]), r[_$_486f[102]][_$_486f[101]]())
																}, r[_$_486f[103]] = n, r[_$_486f[104]] = void 0;
																var i = function(e) {
																	if (t[_$_486f[28]][_$_486f[27]](_$_486f[105] + e), e) try {
																		r[_$_486f[106]]()
																	} catch (e) {
																		t[_$_486f[28]][_$_486f[27]](_$_486f[107], e)
																	}
																	r[_$_486f[104]] && r[_$_486f[104]](e)
																};
																return window[_$_486f[108]] && window[_$_486f[108]][_$_486f[55]] && window[_$_486f[55]] && window[_$_486f[55]][_$_486f[37]] ? setTimeout((function() {
																	return i(!0)
																}), 1e3) : (r[_$_486f[104]] = window[_$_486f[109]], window[_$_486f[109]] = i), r
															}
															return i(t, e), t[_$_486f[16]][_$_486f[62]] = function() {
																var e, t, n = this;
																null === (t = null === (e = this[_$_486f[110]]) || void 0 === e ? void 0 : e[_$_486f[111]]()) || void 0 === t || t[_$_486f[115]](void 0, (function() {
																	(0, u[_$_486f[112]])(n[_$_486f[29]]) && n[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[113])
																}), (function(e) {
																	(0, u[_$_486f[112]])(n[_$_486f[29]]) && n[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[114], e)
																}))
															}, t[_$_486f[16]][_$_486f[106]] = function() {
																var e;
																cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[120]]({
																	receiverApplicationId: this[_$_486f[103]][_$_486f[116]],
																	autoJoinPolicy: chrome[_$_486f[55]][_$_486f[118]][_$_486f[117]],
																	resumeSavedSession: null !== (e = this[_$_486f[103]][_$_486f[119]]) && void 0 !== e && e
																}), this[_$_486f[61]] = new cast[_$_486f[37]][_$_486f[123]], this[_$_486f[102]] = new cast[_$_486f[37]][_$_486f[124]](this[_$_486f[61]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[96]], this[_$_486f[95]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[78]], this[_$_486f[71]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[81]], this[_$_486f[80]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[83]], this[_$_486f[82]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[87]], this[_$_486f[86]]), this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[91]], this[_$_486f[90]]), cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[127]]() !== cast[_$_486f[37]][_$_486f[36]][_$_486f[35]] ? this[_$_486f[34]](!0) : cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[126]](cast[_$_486f[37]][_$_486f[128]][_$_486f[41]], this[_$_486f[33]]), cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[126]](cast[_$_486f[37]][_$_486f[128]][_$_486f[67]], this[_$_486f[43]]), chrome[_$_486f[55]][_$_486f[26]](this[_$_486f[25]]);
																var t = cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[129]]();
																t && this[_$_486f[49]](t[_$_486f[47]]()[_$_486f[31]], !0)
															}, t[_$_486f[16]][_$_486f[70]] = function(e) {
																var t = this[_$_486f[61]][_$_486f[130]];
																this[_$_486f[130]] = e[_$_486f[79]], this[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[131], t)
															}, t[_$_486f[16]][_$_486f[132]] = function() {
																return this[_$_486f[103]]
															}, t[_$_486f[16]][_$_486f[133]] = function() {
																var e = this;
																cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[138]]()[_$_486f[137]]((function() {
																	return e[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[136])
																}))[_$_486f[135]]((function(t) {
																	t === chrome[_$_486f[55]][_$_486f[54]][_$_486f[53]] || (e[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[134], t), e[_$_486f[56]]())
																}))
															}, t[_$_486f[16]][_$_486f[49]] = function(t, n) {
																var r = this;
																this[_$_486f[110]] = cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[129]](), this[_$_486f[110]][_$_486f[144]](this[_$_486f[103]][_$_486f[139]], (function(e, t) {
																	r[_$_486f[29]][_$_486f[28]][_$_486f[140]](e, t);
																	try {
																		var n = JSON[_$_486f[8]](t);
																		r[_$_486f[141]](n)
																	} catch (e) {
																		r[_$_486f[29]][_$_486f[28]][_$_486f[143]](_$_486f[142], t)
																	}
																})), this[_$_486f[29]][_$_486f[147]][_$_486f[146]](a[_$_486f[64]][_$_486f[145]], this[_$_486f[99]]), e[_$_486f[16]][_$_486f[49]][_$_486f[14]](this, t, n)
															}, t[_$_486f[16]][_$_486f[148]] = function(e, t) {
																void 0 === e && (e = c[_$_486f[150]][_$_486f[149]]), this[_$_486f[110]][_$_486f[148]](this[_$_486f[103]][_$_486f[139]], {
																	type: e,
																	data: t
																})
															}, t[_$_486f[16]][_$_486f[151]] = function() {
																cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[152]](!0), this[_$_486f[153]]()
															}, t[_$_486f[16]][_$_486f[58]] = function() {
																e[_$_486f[16]][_$_486f[58]][_$_486f[14]](this), this[_$_486f[29]][_$_486f[147]][_$_486f[154]](a[_$_486f[64]][_$_486f[145]], this[_$_486f[99]]), this[_$_486f[155]] = null
															}, t[_$_486f[16]][_$_486f[156]] = function() {
																window[_$_486f[109]] = this[_$_486f[104]] || void 0, this[_$_486f[102]] && (this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[131]], this[_$_486f[69]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[78]], this[_$_486f[71]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[91]], this[_$_486f[90]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[87]], this[_$_486f[86]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[83]], this[_$_486f[82]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[81]], this[_$_486f[80]]), this[_$_486f[102]][_$_486f[157]](cast[_$_486f[37]][_$_486f[125]][_$_486f[96]], this[_$_486f[95]]), chrome[_$_486f[55]][_$_486f[158]](this[_$_486f[25]]), cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[157]](cast[_$_486f[37]][_$_486f[128]][_$_486f[41]], this[_$_486f[33]]), cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[157]](cast[_$_486f[37]][_$_486f[128]][_$_486f[67]], this[_$_486f[43]]))
															}, t[_$_486f[16]][_$_486f[159]] = function(e, t, n) {
																var r = this;
																return this[_$_486f[160]] = e, this[_$_486f[164]](e)[_$_486f[137]]((function(e) {
																	var i = new chrome[_$_486f[55]][_$_486f[75]][_$_486f[161]](e);
																	return i[_$_486f[162]] = t || !1, null != n && (i[_$_486f[84]] = n), r[_$_486f[163]](i)
																}))
															}, t[_$_486f[16]][_$_486f[163]] = function(e) {
																var t = this,
																	n = cast[_$_486f[37]][_$_486f[122]][_$_486f[121]]()[_$_486f[129]]()[_$_486f[165]]();
																return new Promise((function(r, i) {
																	n[_$_486f[168]](e, (function(e) {
																		t[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[166], e), t[_$_486f[75]] = e, t[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[131]], t[_$_486f[69]]), r()
																	}), (function(e) {
																		t[_$_486f[29]][_$_486f[28]][_$_486f[27]](_$_486f[167], e), i(e)
																	}))
																}))
															}, t[_$_486f[16]][_$_486f[169]] = function() {
																return this[_$_486f[61]][_$_486f[130]] ? r(this[_$_486f[61]][_$_486f[130]]) : null
															}, t[_$_486f[16]][_$_486f[170]] = function() {
																this[_$_486f[61]][_$_486f[60]] && this[_$_486f[102]][_$_486f[101]]()
															}, t[_$_486f[16]][_$_486f[171]] = function() {
																return !this[_$_486f[61]][_$_486f[60]]
															}, t[_$_486f[16]][_$_486f[172]] = function() {
																this[_$_486f[61]][_$_486f[60]] || this[_$_486f[102]][_$_486f[101]]()
															}, t[_$_486f[16]][_$_486f[60]] = function() {
																return this[_$_486f[61]][_$_486f[60]]
															}, t[_$_486f[16]][_$_486f[173]] = function(t) {
																return void 0 === t && (t = o[_$_486f[175]][_$_486f[174]]), t === o[_$_486f[175]][_$_486f[176]] ? e[_$_486f[16]][_$_486f[173]][_$_486f[14]](this, t) : this[_$_486f[61]][_$_486f[84]]
															}, t[_$_486f[16]][_$_486f[177]] = function(e) {
																this[_$_486f[61]][_$_486f[84]] = e, this[_$_486f[102]][_$_486f[177]](), this[_$_486f[65]]({
																	event: a[_$_486f[64]][_$_486f[178]]
																})
															}, t[_$_486f[16]][_$_486f[179]] = function(e) {
																this[_$_486f[61]][_$_486f[88]] = e, this[_$_486f[102]][_$_486f[180]]()
															}, t[_$_486f[16]][_$_486f[181]] = function() {
																return this[_$_486f[61]][_$_486f[88]]
															}, t[_$_486f[16]][_$_486f[182]] = function(e) {
																e !== this[_$_486f[61]][_$_486f[92]] && this[_$_486f[102]][_$_486f[183]]()
															}, t[_$_486f[16]][_$_486f[92]] = function() {
																return this[_$_486f[61]][_$_486f[92]]
															}, t
														}(n(97604)[_$_486f[24]]);
													t[_$_486f[23]] = l, t[_$_486f[22]] = r
												}

												function _0xA763(e, t) {
													Object[_$_486f[2]](t, _$_486f[1], {
															value: !0
														}), t[_$_486f[191]] = void 0,
														function(e) {
															e[_$_486f[192]] = _$_486f[192], e[_$_486f[193]] = _$_486f[193]
														}(t[_$_486f[191]] || (t[_$_486f[191]] = {}))
												}

												function _0xA798(e, t, n) {
													var r = this && this[_$_486f[11]] || function() {
														var e = function(t, n) {
															return (e = Object[_$_486f[12]] || {
																	__proto__: []
																}
																instanceof Array && function(e, t) {
																	e[_$_486f[13]] = t
																} || function(e, t) {
																	for (var n in t) Object[_$_486f[16]][_$_486f[15]][_$_486f[14]](t, n) && (e[n] = t[n])
																})(t, n)
														};
														return function(t, n) {
															function r() {
																this[_$_486f[20]] = t
															}
															if (_$_486f[17] != typeof n && null !== n) throw new TypeError(_$_486f[18] + String(n) + _$_486f[19]);
															e(t, n), t[_$_486f[16]] = null === n ? Object[_$_486f[21]](n) : (r[_$_486f[16]] = n[_$_486f[16]], new r)
														}
													}();
													Object[_$_486f[2]](t, _$_486f[1], {
														value: !0
													}), t[_$_486f[194]] = void 0;
													var i = n(5793),
														a = n(48826),
														o = n(86335),
														s = function(e) {
															function t() {
																return null !== e && e[_$_486f[195]](this, arguments) || this
															}
															return r(t, e), t[_$_486f[16]][_$_486f[164]] = function(e) {
																var t = new chrome[_$_486f[55]][_$_486f[75]][_$_486f[199]](o[_$_486f[197]][_$_486f[196]](e), _$_486f[198]);
																if (t[_$_486f[200]] = chrome[_$_486f[55]][_$_486f[75]][_$_486f[202]][_$_486f[201]], t[_$_486f[203]] = new chrome[_$_486f[55]][_$_486f[75]][_$_486f[204]], t[_$_486f[203]][_$_486f[205]] = e[_$_486f[205]] || null, t[_$_486f[203]][_$_486f[206]] = e[_$_486f[207]] || null, e[_$_486f[208]]) {
																	var n = i[_$_486f[10]][_$_486f[9]](e[_$_486f[208]]);
																	t[_$_486f[203]][_$_486f[209]] = [new chrome[_$_486f[55]][_$_486f[210]](n)]
																}
																return Promise[_$_486f[211]](t)
															}, t[_$_486f[16]][_$_486f[212]] = function(e) {
																this[_$_486f[214]](_$_486f[213], [e])
															}, t[_$_486f[16]][_$_486f[215]] = function(e) {
																this[_$_486f[214]](_$_486f[216], [e])
															}, t
														}(a[_$_486f[23]]);
													t[_$_486f[194]] = s
												}

												function _0xA7CD(e, t, n) {
													function r(e) {
														var t = {
																keys: e[_$_486f[303]]((function(e) {
																	var t = h[_$_486f[314]][_$_486f[313]](e[_$_486f[312]]),
																		n = h[_$_486f[314]][_$_486f[313]](e[_$_486f[315]] || _$_486f[316]);
																	return {
																		kty: _$_486f[317],
																		kid: d[_$_486f[320]][_$_486f[319]](n)[_$_486f[318]](/[=]*$/, _$_486f[316]),
																		k: d[_$_486f[320]][_$_486f[319]](t)[_$_486f[318]](/[=]*$/, _$_486f[316])
																	}
																}))
															},
															n = JSON[_$_486f[196]](t);
														return _$_486f[321] + btoa(n)
													}

													function i(e) {
														return e[_$_486f[324]]((function(e, t) {
															return e[_$_486f[322]] === t[_$_486f[322]] ? (e[_$_486f[323]] || 0) > (t[_$_486f[323]] || 0) ? -1 : 1 : (e[_$_486f[322]] || 0) > (t[_$_486f[322]] || 0) ? -1 : 1
														}))
													}

													function a(e, t) {
														return function(e) {
															return Array[_$_486f[7]](e)
														}(e) ? {
															protectionSystem: u[_$_486f[225]],
															licenseUrl: r(e)
														} : {
															protectionSystem: t,
															licenseUrl: e[_$_486f[325]] || _$_486f[316],
															headers: e[_$_486f[326]],
															withCredentials: e[_$_486f[327]] || !1
														}
													}
													var o = this && this[_$_486f[11]] || function() {
															var e = function(t, n) {
																return (e = Object[_$_486f[12]] || {
																		__proto__: []
																	}
																	instanceof Array && function(e, t) {
																		e[_$_486f[13]] = t
																	} || function(e, t) {
																		for (var n in t) Object[_$_486f[16]][_$_486f[15]][_$_486f[14]](t, n) && (e[n] = t[n])
																	})(t, n)
															};
															return function(t, n) {
																function r() {
																	this[_$_486f[20]] = t
																}
																if (_$_486f[17] != typeof n && null !== n) throw new TypeError(_$_486f[18] + String(n) + _$_486f[19]);
																e(t, n), t[_$_486f[16]] = null === n ? Object[_$_486f[21]](n) : (r[_$_486f[16]] = n[_$_486f[16]], new r)
															}
														}(),
														s = this && this[_$_486f[217]] || function(e, t, n) {
															if (n || 2 === arguments[_$_486f[218]])
																for (var r, i = 0, a = t[_$_486f[218]]; i < a; i++) !r && i in t || (r || (r = Array[_$_486f[16]][_$_486f[219]][_$_486f[14]](t, 0, i)), r[i] = t[i]);
															return e[_$_486f[220]](r || Array[_$_486f[16]][_$_486f[219]][_$_486f[14]](t))
														};
													Object[_$_486f[2]](t, _$_486f[1], {
														value: !0
													}), t[_$_486f[221]] = t[_$_486f[222]] = t[_$_486f[223]] = t[_$_486f[224]] = void 0;
													var u, c = n(59534),
														l = n(64148),
														f = n(80605),
														d = n(12391),
														h = n(3988),
														p = n(5793),
														_ = n(48826),
														m = n(78535),
														b = n(2619),
														g = n(9829),
														v = n(85896),
														y = n(73465);
													! function(e) {
														e[_$_486f[225]] = _$_486f[226], e[_$_486f[227]] = _$_486f[228], e[_$_486f[229]] = _$_486f[230]
													}(u || (u = {}));
													var A = function(e) {
														function t(t, n) {
															var r = e[_$_486f[14]](this, t, n) || this;
															return r[_$_486f[231]] = 0, r[_$_486f[232]] = function(e) {
																var t, n;
																(null === (t = r[_$_486f[130]]) || void 0 === t ? void 0 : t[_$_486f[233]]) > 0 && (null === (n = r[_$_486f[130]]) || void 0 === n ? void 0 : n[_$_486f[233]]) - r[_$_486f[84]] < 2 && 0 === e[_$_486f[79]] && (r[_$_486f[234]] = !0, r[_$_486f[65]]({
																	event: l[_$_486f[64]][_$_486f[145]]
																})), r[_$_486f[84]] = e[_$_486f[79]]
															}, r[_$_486f[235]] = new v[_$_486f[236]](t), r[_$_486f[237]] = new g[_$_486f[238]](r[_$_486f[130]], r[_$_486f[75]], r[_$_486f[29]][_$_486f[28]]), r[_$_486f[239]] = new y[_$_486f[240]](r[_$_486f[130]], r[_$_486f[29]][_$_486f[28]]), r
														}
														return o(t, e), t[_$_486f[16]][_$_486f[106]] = function() {
															e[_$_486f[16]][_$_486f[106]][_$_486f[14]](this), this[_$_486f[241]]()
														}, t[_$_486f[16]][_$_486f[241]] = function() {
															var e = this;
															this[_$_486f[102]][_$_486f[126]](cast[_$_486f[37]][_$_486f[125]][_$_486f[83]], this[_$_486f[232]]), this[_$_486f[29]][_$_486f[147]][_$_486f[146]](l[_$_486f[64]][_$_486f[242]], (function() {
																new b[_$_486f[244]](e[_$_486f[130]])[_$_486f[243]]() && e[_$_486f[245]]()
															}))
														}, t[_$_486f[16]][_$_486f[148]] = function(e, t) {
															this[_$_486f[103]][_$_486f[139]] && this[_$_486f[110]][_$_486f[148]](this[_$_486f[103]][_$_486f[139]], {

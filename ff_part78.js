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

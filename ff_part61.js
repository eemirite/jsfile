						var n = this._lastEventId = Object(p.i)();
						return this._invokeClient("captureEvent", e, Object(o.a)(Object(o.a)({}, t), {
							event_id: n
						})), n
					}, e.prototype.lastEventId = function() {
						return this._lastEventId
					}, e.prototype.addBreadcrumb = function(e, t) {
						var n = this.getStackTop(),
							r = n.scope,
							i = n.client;
						if (r && i) {
							var a = i.getOptions && i.getOptions() || {},
								s = a.beforeBreadcrumb,
								u = void 0 === s ? null : s,
								c = a.maxBreadcrumbs,
								f = void 0 === c ? 100 : c;
							if (!(f <= 0)) {
								var d = Object(l.a)(),
									h = Object(o.a)({
										timestamp: d
									}, e),
									_ = u ? Object(p.c)((function() {
										return u(h, t)
									})) : h;
								null !== _ && r.addBreadcrumb(_, f)
							}
						}
					}, e.prototype.setUser = function(e) {
						var t = this.getScope();
						t && t.setUser(e)
					}, e.prototype.setTags = function(e) {
						var t = this.getScope();
						t && t.setTags(e)
					}, e.prototype.setExtras = function(e) {
						var t = this.getScope();
						t && t.setExtras(e)
					}, e.prototype.setTag = function(e, t) {
						var n = this.getScope();
						n && n.setTag(e, t)
					}, e.prototype.setExtra = function(e, t) {
						var n = this.getScope();
						n && n.setExtra(e, t)
					}, e.prototype.setContext = function(e, t) {
						var n = this.getScope();
						n && n.setContext(e, t)
					}, e.prototype.configureScope = function(e) {
						var t = this.getStackTop(),
							n = t.scope,
							r = t.client;
						n && r && e(n)
					}, e.prototype.run = function(e) {
						var t = $(this);
						try {
							e(this)
						} finally {
							$(t)
						}
					}, e.prototype.getIntegration = function(e) {
						var t = this.getClient();
						if (!t) return null;
						try {
							return t.getIntegration(e)
						} catch (t) {
							return A.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
						}
					}, e.prototype.startSpan = function(e) {
						return this._callExtensionMethod("startSpan", e)
					}, e.prototype.startTransaction = function(e, t) {
						return this._callExtensionMethod("startTransaction", e, t)
					}, e.prototype.traceHeaders = function() {
						return this._callExtensionMethod("traceHeaders")
					}, e.prototype.captureSession = function(e) {
						if (void 0 === e && (e = !1), e) return this.endSession();
						this._sendSessionUpdate()
					}, e.prototype.endSession = function() {
						var e, t, n, r, i;
						null === (n = null === (t = null === (e = this.getStackTop()) || void 0 === e ? void 0 : e.scope) || void 0 === t ? void 0 : t.getSession()) || void 0 === n || n.close(), this._sendSessionUpdate(), null === (i = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === i || i.setSession()
					}, e.prototype.startSession = function(e) {
						var t = this.getStackTop(),
							n = t.scope,
							r = t.client,
							i = r && r.getOptions() || {},
							a = i.release,
							s = i.environment,
							u = (Object(p.e)().navigator || {}).userAgent,
							c = new E(Object(o.a)(Object(o.a)(Object(o.a)({
								release: a,
								environment: s
							}, n && {
								user: n.getUser()
							}), u && {
								userAgent: u
							}), e));
						if (n) {
							var l = n.getSession && n.getSession();
							l && l.status === f.Ok && l.update({
								status: f.Exited
							}), this.endSession(), n.setSession(c)
						}
						return c
					}, e.prototype._sendSessionUpdate = function() {
						var e = this.getStackTop(),
							t = e.scope,
							n = e.client;
						if (t) {
							var r = t.getSession && t.getSession();
							r && n && n.captureSession && n.captureSession(r)
						}
					}, e.prototype._invokeClient = function(e) {
						for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
						var i = this.getStackTop(),
							a = i.scope,
							s = i.client;
						s && s[e] && (t = s)[e].apply(t, Object(o.e)(n, [a]))
					}, e.prototype._callExtensionMethod = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						var r = C(),
							i = r.__SENTRY__;
						if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
						A.warn("Extension method " + e + " couldn't be found, doing nothing.")
					}, e
				}();

			function C() {
				var e = Object(p.e)();
				return e.__SENTRY__ = e.__SENTRY__ || {
					extensions: {},
					hub: void 0
				}, e
			}

			function $(e) {
				var t = C(),
					n = x(t);
				return P(t, e), n
			}

			function k() {
				var e = C();
				return O(e) && !x(e).isOlderThan(4) || P(e, new T), Object(S.b)() ? function(e) {
					var t, n, r;
					try {
						var i = null === (r = null === (n = null === (t = C().__SENTRY__) || void 0 === t ? void 0 : t.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
						if (!i) return x(e);
						if (!O(i) || x(i).isOlderThan(4)) {
							var a = x(e).getStackTop();
							P(i, new T(a.client, _.clone(a.scope)))
						}
						return x(i)
					} catch (t) {
						return x(e)
					}
				}(e) : x(e)
			}

			function O(e) {
				return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
			}

			function x(e) {
				return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new T), e.__SENTRY__.hub
			}

			function P(e, t) {
				return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
			}
			var M = n("fbdd"),
				I = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
				L = function() {
					function e(t) {
						void 0 === t && (t = {}), this._options = t, this.name = e.id
					}
					return e.prototype.setupOnce = function() {
						b((function(t) {
							var n = k();
							if (!n) return t;
							var r = n.getIntegration(e);
							if (r) {
								var i = n.getClient(),
									a = i ? i.getOptions() : {},
									o = "function" == typeof r._mergeOptions ? r._mergeOptions(a) : {};
								return "function" != typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, o) ? null : t
							}
							return t
						}))
					}, e.prototype._shouldDropEvent = function(e, t) {
						return this._isSentryError(e, t) ? (A.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(p.d)(e)), !0) : this._isIgnoredError(e, t) ? (A.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(p.d)(e)), !0) : this._isDeniedUrl(e, t) ? (A.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(p.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (A.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(p.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
					}, e.prototype._isSentryError = function(e, t) {
						if (!t.ignoreInternal) return !1;
						try {
							return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
						} catch (e) {
							return !1
						}
					}, e.prototype._isIgnoredError = function(e, t) {
						return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
							return t.ignoreErrors.some((function(t) {
								return Object(M.a)(e, t)
							}))
						}))
					}, e.prototype._isDeniedUrl = function(e, t) {
						if (!t.denyUrls || !t.denyUrls.length) return !1;
						var n = this._getEventFilterUrl(e);
						return !!n && t.denyUrls.some((function(e) {
							return Object(M.a)(n, e)
						}))
					}, e.prototype._isAllowedUrl = function(e, t) {
						if (!t.allowUrls || !t.allowUrls.length) return !0;
						var n = this._getEventFilterUrl(e);
						return !n || t.allowUrls.some((function(e) {
							return Object(M.a)(n, e)
						}))
					}, e.prototype._mergeOptions = function(e) {
						return void 0 === e && (e = {}), {
							allowUrls: Object(o.e)(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
							denyUrls: Object(o.e)(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
							ignoreErrors: Object(o.e)(this._options.ignoreErrors || [], e.ignoreErrors || [], I),
							ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
						}
					}, e.prototype._getPossibleEventMessages = function(e) {
						if (e.message) return [e.message];
						if (e.exception) try {
							var t = e.exception.values && e.exception.values[0] || {},
								n = t.type,
								r = void 0 === n ? "" : n,
								i = t.value,
								a = void 0 === i ? "" : i;
							return ["" + a, r + ": " + a]
						} catch (t) {
							return A.error("Cannot extract message for event " + Object(p.d)(e)), []
						}
						return []
					}, e.prototype._getEventFilterUrl = function(e) {
						try {
							if (e.stacktrace) {
								var t = e.stacktrace.frames;
								return t && t[t.length - 1].filename || null
							}
							if (e.exception) {
								var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
								return n && n[n.length - 1].filename || null
							}
							return null
						} catch (t) {
							return A.error("Cannot extract url for event " + Object(p.d)(e)), null
						}
					}, e.id = "InboundFilters", e
				}();
			var D = n("a518");

			function B() {
				if (!("fetch" in Object(p.e)())) return !1;
				try {
					return new Headers, new Request(""), new Response, !0
				} catch (e) {
					return !1
				}
			}

			function N(e) {
				return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
			}

			function R() {
				if (!B()) return !1;
				try {
					return new Request("_", {
						referrerPolicy: "origin"
					}), !0
				} catch (e) {
					return !1
				}
			}
			var F, U = Object(p.e)(),
				j = {},
				H = {};

			function Y(e) {
				if (!H[e]) switch (H[e] = !0, e) {
					case "console":
						"console" in U && ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
							e in U.console && Object(w.c)(U.console, e, (function(t) {
								return function() {
									for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
									z("console", {
										args: n,
										level: e
									}), t && Function.prototype.apply.call(t, U.console, n)
								}
							}))
						}));
						break;
					case "dom":
						! function() {
							if ("document" in U) {
								var e = z.bind(null, "dom"),
									t = K(e, !0);
								U.document.addEventListener("click", t, !1), U.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((function(t) {
									var n = U[t] && U[t].prototype;
									n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(w.c)(n, "addEventListener", (function(t) {
										return function(n, r, i) {
											if ("click" === n || "keypress" == n) try {
												var a = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
													o = a[n] = a[n] || {
														refCount: 0
													};
												if (!o.handler) {
													var s = K(e);
													o.handler = s, t.call(this, n, s, i)
												}
												o.refCount += 1
											} catch (e) {}
											return t.call(this, n, r, i)
										}
									})), Object(w.c)(n, "removeEventListener", (function(e) {
										return function(t, n, r) {
											if ("click" === t || "keypress" == t) try {
												var i = this.__sentry_instrumentation_handlers__ || {},
													a = i[t];
												a && (a.refCount -= 1, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
											} catch (e) {}
											return e.call(this, t, n, r)
										}
									})))
								}))
							}
						}();
						break;
					case "xhr":
						! function() {
							if ("XMLHttpRequest" in U) {
								var e = [],
									t = [],
									n = XMLHttpRequest.prototype;
								Object(w.c)(n, "open", (function(n) {
									return function() {
										for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
										var a = this,
											o = r[1];
										a.__sentry_xhr__ = {
											method: Object(c.k)(r[0]) ? r[0].toUpperCase() : r[0],
											url: r[1]
										}, Object(c.k)(o) && "POST" === a.__sentry_xhr__.method && o.match(/sentry_key/) && (a.__sentry_own_request__ = !0);
										var s = function() {
											if (4 === a.readyState) {
												try {
													a.__sentry_xhr__ && (a.__sentry_xhr__.status_code = a.status)
												} catch (e) {}
												try {
													var n = e.indexOf(a);
													if (-1 !== n) {
														e.splice(n);
														var i = t.splice(n)[0];
														a.__sentry_xhr__ && void 0 !== i[0] && (a.__sentry_xhr__.body = i[0])
													}
												} catch (e) {}
												z("xhr", {
													args: r,
													endTimestamp: Date.now(),
													startTimestamp: Date.now(),
													xhr: a
												})
											}
										};
										return "onreadystatechange" in a && "function" == typeof a.onreadystatechange ? Object(w.c)(a, "onreadystatechange", (function(e) {
											return function() {
												for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
												return s(), e.apply(a, t)
											}
										})) : a.addEventListener("readystatechange", s), n.apply(a, r)
									}
								})), Object(w.c)(n, "send", (function(n) {
									return function() {
										for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
										return e.push(this), t.push(r), z("xhr", {
											args: r,
											startTimestamp: Date.now(),
											xhr: this
										}), n.apply(this, r)
									}
								}))
							}
						}();
						break;
					case "fetch":
						(function() {
							if (!B()) return !1;
							var e = Object(p.e)();
							if (N(e.fetch)) return !0;
							var t = !1,
								n = e.document;
							if (n && "function" == typeof n.createElement) try {
								var r = n.createElement("iframe");
								r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = N(r.contentWindow.fetch)), n.head.removeChild(r)
							} catch (e) {
								A.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
							}
							return t
						})() && Object(w.c)(U, "fetch", (function(e) {
							return function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								var r = {
									args: t,
									fetchData: {
										method: Q(t),
										url: G(t)
									},
									startTimestamp: Date.now()
								};
								return z("fetch", Object(o.a)({}, r)), e.apply(U, t).then((function(e) {
									return z("fetch", Object(o.a)(Object(o.a)({}, r), {
										endTimestamp: Date.now(),
										response: e
									})), e
								}), (function(e) {
									throw z("fetch", Object(o.a)(Object(o.a)({}, r), {
										endTimestamp: Date.now(),
										error: e
									})), e
								}))
							}
						}));
						break;
					case "history":
						! function() {
							if (function() {
									var e = Object(p.e)(),
										t = e.chrome,
										n = t && t.app && t.app.runtime,
										r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
									return !n && r
								}()) {
								var e = U.onpopstate;
								U.onpopstate = function() {
									for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
									var r = U.location.href,
										i = F;
									if (F = r, z("history", {
											from: i,
											to: r
										}), e) try {
										return e.apply(this, t)
									} catch (e) {}
								}, Object(w.c)(U.history, "pushState", t), Object(w.c)(U.history, "replaceState", t)
							}

							function t(e) {
								return function() {
									for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
									var r = t.length > 2 ? t[2] : void 0;
									if (r) {
										var i = F,
											a = String(r);
										F = a, z("history", {
											from: i,
											to: a
										})
									}
									return e.apply(this, t)
								}
							}
						}();
						break;
					case "error":
						X = U.onerror, U.onerror = function(e, t, n, r, i) {
							return z("error", {
								column: r,
								error: i,
								line: n,
								msg: e,
								url: t
							}), !!X && X.apply(this, arguments)
						};
						break;
					case "unhandledrejection":
						J = U.onunhandledrejection, U.onunhandledrejection = function(e) {
							return z("unhandledrejection", e), !J || J.apply(this, arguments)
						};
						break;
					default:
						A.warn("unknown instrumentation type:", e)
				}
			}

			function V(e) {
				e && "string" == typeof e.type && "function" == typeof e.callback && (j[e.type] = j[e.type] || [], j[e.type].push(e.callback), Y(e.type))
			}

			function z(e, t) {
				var n, r;
				if (e && j[e]) try {
					for (var i = Object(o.f)(j[e] || []), a = i.next(); !a.done; a = i.next()) {
						var s = a.value;
						try {
							s(t)
						} catch (t) {
							A.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Object(D.a)(s) + "\nError: " + t)
						}
					}
				} catch (e) {
					n = {
						error: e
					}
				} finally {
					try {
						a && !a.done && (r = i.return) && r.call(i)
					} finally {
						if (n) throw n.error
					}
				}
			}

			function Q(e) {
				return void 0 === e && (e = []), "Request" in U && Object(c.g)(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
			}

			function G(e) {
				return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in U && Object(c.g)(e[0], Request) ? e[0].url : String(e[0])
			}
			var q, W;

			function K(e, t) {
				return void 0 === t && (t = !1),
					function(n) {
						if (n && W !== n && ! function(e) {
								if ("keypress" !== e.type) return !1;
								try {
									var t = e.target;
									if (!t || !t.tagName) return !0;
									if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1
								} catch (e) {}
								return !0
							}(n)) {
							var r = "keypress" === n.type ? "input" : n.type;
							(void 0 === q || function(e, t) {
								if (!e) return !0;
								if (e.type !== t.type) return !0;
								try {
									if (e.target !== t.target) return !0
								} catch (e) {}
								return !1
							}(W, n)) && (e({
								event: n,
								name: r,
								global: t
							}), W = n), clearTimeout(q), q = U.setTimeout((function() {
								q = void 0
							}), 1e3)
						}
					}
			}
			var X = null;
			var J = null;
			var Z = Object.setPrototypeOf || ({
					__proto__: []
				}
				instanceof Array ? function(e, t) {
					return e.__proto__ = t, e
				} : function(e, t) {
					for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
					return e
				});
			var ee = function(e) {
					function t(t) {
						var n = this.constructor,
							r = e.call(this, t) || this;
						return r.message = t, r.name = n.prototype.constructor.name, Z(r, n.prototype), r
					}
					return Object(o.b)(t, e), t
				}(Error),
				te = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
				ne = "Invalid Dsn",
				re = function() {
					function e(e) {
						"string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
					}
					return e.prototype.toString = function(e) {
						void 0 === e && (e = !1);
						var t = this,
							n = t.host,
							r = t.path,
							i = t.pass,
							a = t.port,
							o = t.projectId;
						return t.protocol + "://" + t.publicKey + (e && i ? ":" + i : "") + "@" + n + (a ? ":" + a : "") + "/" + (r ? r + "/" : r) + o
					}, e.prototype._fromString = function(e) {
						var t = te.exec(e);
						if (!t) throw new ee(ne);
						var n = Object(o.c)(t.slice(1), 6),
							r = n[0],
							i = n[1],
							a = n[2],
							s = void 0 === a ? "" : a,
							u = n[3],
							c = n[4],
							l = void 0 === c ? "" : c,
							f = "",
							d = n[5],
							h = d.split("/");
						if (h.length > 1 && (f = h.slice(0, -1).join("/"), d = h.pop()), d) {
							var p = d.match(/^\d+/);
							p && (d = p[0])
						}
						this._fromComponents({
							host: u,
							pass: s,
							path: f,
							projectId: d,
							port: l,
							protocol: r,
							publicKey: i
						})
					}, e.prototype._fromComponents = function(e) {
						"user" in e && !("publicKey" in e) && (e.publicKey = e.user), this.user = e.publicKey || "", this.protocol = e.protocol, this.publicKey = e.publicKey || "", this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
					}, e.prototype._validate = function() {
						var e = this;
						if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
								if (!e[t]) throw new ee(ne + ": " + t + " missing")
							})), !this.projectId.match(/^\d+$/)) throw new ee(ne + ": Invalid projectId " + this.projectId);
						if ("http" !== this.protocol && "https" !== this.protocol) throw new ee(ne + ": Invalid protocol " + this.protocol);
						if (this.port && isNaN(parseInt(this.port, 10))) throw new ee(ne + ": Invalid port " + this.port)
					}, e
				}(),
				ie = [];

			function ae(e) {
				return e.reduce((function(e, t) {
					return e.every((function(e) {
						return t.name !== e.name
					})) && e.push(t), e
				}), [])
			}

			function oe(e) {
				var t = {};
				return function(e) {
					var t = e.defaultIntegrations && Object(o.e)(e.defaultIntegrations) || [],
						n = e.integrations,
						r = Object(o.e)(ae(t));
					Array.isArray(n) ? r = Object(o.e)(r.filter((function(e) {
						return n.every((function(t) {
							return t.name !== e.name
						}))
					})), ae(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
					var i = r.map((function(e) {
							return e.name
						})),
						a = "Debug";
					return -1 !== i.indexOf(a) && r.push.apply(r, Object(o.e)(r.splice(i.indexOf(a), 1))), r
				}(e).forEach((function(e) {
					t[e.name] = e,
						function(e) {
							-1 === ie.indexOf(e.name) && (e.setupOnce(b, k), ie.push(e.name), A.log("Integration installed: " + e.name))
						}(e)
				})), t
			}
			var se, ue = function() {
				function e(e, t) {
					this._integrations = {}, this._processing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new re(t.dsn))
				}
				return e.prototype.captureException = function(e, t, n) {
					var r = this,
						i = t && t.event_id;
					return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
						return r._captureEvent(e, t, n)
					})).then((function(e) {
						i = e
					}))), i
				}, e.prototype.captureMessage = function(e, t, n, r) {
					var i = this,
						a = n && n.event_id,
						o = Object(c.i)(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
					return this._process(o.then((function(e) {
						return i._captureEvent(e, n, r)
					})).then((function(e) {
						a = e
					}))), a
				}, e.prototype.captureEvent = function(e, t, n) {
					var r = t && t.event_id;
					return this._process(this._captureEvent(e, t, n).then((function(e) {
						r = e
					}))), r
				}, e.prototype.captureSession = function(e) {
					this._isEnabled() ? "string" != typeof e.release ? A.warn("Discarded session because of missing or non-string release") : (this._sendSession(e), e.update({
						init: !1
					})) : A.warn("SDK not enabled, will not capture session.")
				}, e.prototype.getDsn = function() {
					return this._dsn
				}, e.prototype.getOptions = function() {
					return this._options
				}, e.prototype.flush = function(e) {
					var t = this;
					return this._isClientProcessing(e).then((function(n) {
						return t._getBackend().getTransport().close(e).then((function(e) {
							return n && e
						}))
					}))
				}, e.prototype.close = function(e) {
					var t = this;
					return this.flush(e).then((function(e) {
						return t.getOptions().enabled = !1, e
					}))
				}, e.prototype.setupIntegrations = function() {
					this._isEnabled() && (this._integrations = oe(this._options))
				}, e.prototype.getIntegration = function(e) {
					try {
						return this._integrations[e.id] || null
					} catch (t) {
						return A.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
					}
				}, e.prototype._updateSessionFromEvent = function(e, t) {
					var n, r, i = !1,
						a = !1,
						s = t.exception && t.exception.values;
					if (s) {
						a = !0;
						try {
							for (var u = Object(o.f)(s), c = u.next(); !c.done; c = u.next()) {
								var l = c.value.mechanism;
								if (l && !1 === l.handled) {
									i = !0;
									break
								}
							}
						} catch (e) {
							n = {
								error: e
							}
						} finally {
							try {
								c && !c.done && (r = u.return) && r.call(u)
							} finally {
								if (n) throw n.error
							}
						}
					}
					var d = e.status === f.Ok;
					(d && 0 === e.errors || d && i) && (e.update(Object(o.a)(Object(o.a)({}, i && {
						status: f.Crashed
					}), {
						errors: e.errors || Number(a || i)
					})), this.captureSession(e))
				}, e.prototype._sendSession = function(e) {
					this._getBackend().sendSession(e)
				}, e.prototype._isClientProcessing = function(e) {
					var t = this;
					return new h((function(n) {
						var r = 0,
							i = setInterval((function() {
								0 == t._processing ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)))
							}), 1)
					}))
				}, e.prototype._getBackend = function() {
					return this._backend
				}, e.prototype._isEnabled = function() {
					return !1 !== this.getOptions().enabled && void 0 !== this._dsn
				}, e.prototype._prepareEvent = function(e, t, n) {
					var r = this,
						i = this.getOptions().normalizeDepth,
						a = void 0 === i ? 3 : i,
						s = Object(o.a)(Object(o.a)({}, e), {
							event_id: e.event_id || (n && n.event_id ? n.event_id : Object(p.i)()),
							timestamp: e.timestamp || Object(l.a)()
						});
					this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
					var u = t;
					n && n.captureContext && (u = _.clone(u).update(n.captureContext));
					var c = h.resolve(s);
					return u && (c = u.applyToEvent(s, n)), c.then((function(e) {
						return "number" == typeof a && a > 0 ? r._normalizeEvent(e, a) : e
					}))
				}, e.prototype._normalizeEvent = function(e, t) {
					if (!e) return null;
					var n = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({}, e), e.breadcrumbs && {
						breadcrumbs: e.breadcrumbs.map((function(e) {
							return Object(o.a)(Object(o.a)({}, e), e.data && {
								data: Object(w.d)(e.data, t)
							})
						}))
					}), e.user && {
						user: Object(w.d)(e.user, t)
					}), e.contexts && {
						contexts: Object(w.d)(e.contexts, t)
					}), e.extra && {
						extra: Object(w.d)(e.extra, t)
					});
					return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace), n
				}, e.prototype._applyClientOptions = function(e) {
					var t = this.getOptions(),
						n = t.environment,
						r = t.release,
						i = t.dist,
						a = t.maxValueLength,
						o = void 0 === a ? 250 : a;
					"environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = Object(M.d)(e.message, o));
					var s = e.exception && e.exception.values && e.exception.values[0];
					s && s.value && (s.value = Object(M.d)(s.value, o));
					var u = e.request;
					u && u.url && (u.url = Object(M.d)(u.url, o))
				}, e.prototype._applyIntegrationsMetadata = function(e) {
					var t = Object.keys(this._integrations);
					t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = Object(o.e)(e.sdk.integrations || [], t))
				}, e.prototype._sendEvent = function(e) {
					this._getBackend().sendEvent(e)
				}, e.prototype._captureEvent = function(e, t, n) {
					return this._processEvent(e, t, n).then((function(e) {
						return e.event_id
					}), (function(e) {
						A.error(e)
					}))
				}, e.prototype._processEvent = function(e, t, n) {
					var r = this,
						i = this.getOptions(),
						a = i.beforeSend,
						o = i.sampleRate;
					if (!this._isEnabled()) return h.reject(new ee("SDK not enabled, will not capture event."));
					var s = "transaction" === e.type;
					return !s && "number" == typeof o && Math.random() > o ? h.reject(new ee("Discarding event because it's not included in the random sample (sampling rate = " + o + ")")) : this._prepareEvent(e, n, t).then((function(e) {
						if (null === e) throw new ee("An event processor returned null, will not send event.");
						if (t && t.data && !0 === t.data.__sentry__ || s || !a) return e;
						var n = a(e, t);
						return r._ensureBeforeSendRv(n)
					})).then((function(e) {
						if (null === e) throw new ee("`beforeSend` returned `null`, will not send event.");
						var t = n && n.getSession && n.getSession();
						return !s && t && r._updateSessionFromEvent(t, e), r._sendEvent(e), e
					})).then(null, (function(e) {
						if (e instanceof ee) throw e;
						throw r.captureException(e, {
							data: {
								__sentry__: !0
							},
							originalException: e
						}), new ee("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
					}))
				}, e.prototype._process = function(e) {
					var t = this;
					this._processing += 1, e.then((function(e) {
						return t._processing -= 1, e
					}), (function(e) {
						return t._processing -= 1, e
					}))
				}, e.prototype._ensureBeforeSendRv = function(e) {
					var t = "`beforeSend` method has to return `null` or a valid event.";
					if (Object(c.m)(e)) return e.then((function(e) {
						if (!Object(c.h)(e) && null !== e) throw new ee(t);
						return e
					}), (function(e) {
						throw new ee("beforeSend rejected with " + e)
					}));
					if (!Object(c.h)(e) && null !== e) throw new ee(t);
					return e
				}, e
			}();
			(function(e) {
				e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
			})(se || (se = {})),
			function(e) {
				e.fromHttpCode = function(t) {
					return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
				}
			}(se || (se = {}));
			var ce, le = function() {
					function e() {}
					return e.prototype.sendEvent = function(e) {
						return h.resolve({
							reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
							status: se.Skipped
						})
					}, e.prototype.close = function(e) {
						return h.resolve(!0)
					}, e
				}(),
				fe = function() {
					function e(e) {
						this._options = e, this._options.dsn || A.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
					}
					return e.prototype.eventFromException = function(e, t) {
						throw new ee("Backend has to implement `eventFromException` method")
					}, e.prototype.eventFromMessage = function(e, t, n) {
						throw new ee("Backend has to implement `eventFromMessage` method")
					}, e.prototype.sendEvent = function(e) {
						this._transport.sendEvent(e).then(null, (function(e) {
							A.error("Error while sending event: " + e)
						}))
					}, e.prototype.sendSession = function(e) {
						this._transport.sendSession ? this._transport.sendSession(e).then(null, (function(e) {
							A.error("Error while sending session: " + e)
						})) : A.warn("Dropping session because custom transport doesn't implement sendSession")
					}, e.prototype.getTransport = function() {
						return this._transport
					}, e.prototype._setupTransport = function() {
						return new le
					}, e
				}();
			(function(e) {
				e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
			})(ce || (ce = {})),
			function(e) {
				e.fromString = function(t) {
					switch (t) {
						case "debug":
							return e.Debug;
						case "info":
							return e.Info;
						case "warn":
						case "warning":
							return e.Warning;
						case "error":
							return e.Error;
						case "fatal":
							return e.Fatal;
						case "critical":
							return e.Critical;
						case "log":
						default:
							return e.Log
					}
				}
			}(ce || (ce = {}));
			var de = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
				he = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
				pe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
				_e = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
				me = /\((\S*)(?::(\d+))(?::(\d+))\)/,
				be = /Minified React error #\d+;/i;

			function ge(e) {
				var t = null,
					n = 0;
				e && ("number" == typeof e.framesToPop ? n = e.framesToPop : be.test(e.message) && (n = 1));
				try {
					if (t = function(e) {
							if (!e || !e.stacktrace) return null;
							for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, a = n.split("\n"), o = [], s = 0; s < a.length; s += 2) {
								var u = null;
								(t = r.exec(a[s])) ? u = {
									url: t[2],
									func: t[3],
									args: [],
									line: +t[1],
									column: null
								}: (t = i.exec(a[s])) && (u = {
									url: t[6],
									func: t[3] || t[4],
									args: t[5] ? t[5].split(",") : [],
									line: +t[1],
									column: +t[2]
								}), u && (!u.func && u.line && (u.func = "?"), o.push(u))
							}
							return o.length ? {
								message: ye(e),
								name: e.name,
								stack: o
							} : null
						}(e)) return ve(t, n)
				} catch (e) {}
				try {
					if (t = function(e) {
							if (!e || !e.stack) return null;
							for (var t, n, r, i = [], a = e.stack.split("\n"), o = 0; o < a.length; ++o) {
								if (n = de.exec(a[o])) {
									var s = n[2] && 0 === n[2].indexOf("native");
									n[2] && 0 === n[2].indexOf("eval") && (t = me.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]);
									var u = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
										c = n[1] || "?",
										l = -1 !== c.indexOf("safari-extension"),
										f = -1 !== c.indexOf("safari-web-extension");
									(l || f) && (c = -1 !== c.indexOf("@") ? c.split("@")[0] : "?", u = l ? "safari-extension:" + u : "safari-web-extension:" + u), r = {
										url: u,
										func: c,
										args: s ? [n[2]] : [],
										line: n[3] ? +n[3] : null,
										column: n[4] ? +n[4] : null
									}
								} else if (n = pe.exec(a[o])) r = {
									url: n[2],
									func: n[1] || "?",
									args: [],
									line: +n[3],
									column: n[4] ? +n[4] : null
								};
								else {
									if (!(n = he.exec(a[o]))) continue;
									n[3] && n[3].indexOf(" > eval") > -1 && (t = _e.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== o || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1), r = {
										url: n[3],
										func: n[1] || "?",
										args: n[2] ? n[2].split(",") : [],
										line: n[4] ? +n[4] : null,
										column: n[5] ? +n[5] : null
									}
								}!r.func && r.line && (r.func = "?"), i.push(r)
							}
							return i.length ? {
								message: ye(e),
								name: e.name,
								stack: i
							} : null
						}(e)) return ve(t, n)
				} catch (e) {}
				return {
					message: ye(e),
					name: e && e.name,
					stack: [],
					failed: !0
				}
			}

			function ve(e, t) {
				try {
					return Object(o.a)(Object(o.a)({}, e), {
						stack: e.stack.slice(t)
					})
				} catch (t) {
					return e
				}
			}

			function ye(e) {
				var t = e && e.message;
				return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
			}

			function Ae(e) {
				var t = we(e.stack),
					n = {
						type: e.name,
						value: e.message
					};
				return t && t.length && (n.stacktrace = {
					frames: t
				}), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
			}

			function Se(e) {
				return {
					exception: {
						values: [Ae(e)]
					}
				}
			}

			function we(e) {
				if (!e || !e.length) return [];
				var t = e,
					n = t[0].func || "",
					r = t[t.length - 1].func || "";
				return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
					return {
						colno: null === e.column ? void 0 : e.column,
						filename: e.url || t[0].url,
						function: e.func || "?",
						in_app: !0,
						lineno: null === e.line ? void 0 : e.line
					}
				})).reverse()
			}

			function Ee(e, t, n) {
				var r;
				if (void 0 === n && (n = {}), Object(c.e)(e) && e.error) return r = Se(ge(e = e.error));
				if (Object(c.a)(e) || Object(c.b)(e)) {
					var i = e,
						a = i.name || (Object(c.a)(i) ? "DOMError" : "DOMException"),
						s = i.message ? a + ": " + i.message : a;
					return r = Te(s, t, n), Object(p.b)(r, s), "code" in i && (r.tags = Object(o.a)(Object(o.a)({}, r.tags), {
						"DOMException.code": "" + i.code
					})), r
				}
				return Object(c.d)(e) ? r = Se(ge(e)) : Object(c.h)(e) || Object(c.f)(e) ? (r = function(e, t, n) {
					var r = {
						exception: {
							values: [{
								type: Object(c.f)(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
								value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(w.b)(e)
							}]
						},
						extra: {
							__serialized__: Object(w.e)(e)
						}
					};
					if (t) {
						var i = we(ge(t).stack);
						r.stacktrace = {
							frames: i
						}
					}
					return r
				}(e, t, n.rejection), Object(p.a)(r, {
					synthetic: !0
				}), r) : (r = Te(e, t, n), Object(p.b)(r, "" + e, void 0), Object(p.a)(r, {
					synthetic: !0
				}), r)
			}

			function Te(e, t, n) {
				void 0 === n && (n = {});
				var r = {
					message: e
				};
				if (n.attachStacktrace && t) {
					var i = we(ge(t).stack);
					r.stacktrace = {
						frames: i
					}
				}
				return r
			}

			function Ce(e) {
				if (e.metadata && e.metadata.sdk) {
					var t = e.metadata.sdk;
					return {
						name: t.name,
						version: t.version
					}
				}
			}

			function $e(e, t) {
				return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = Object(o.e)(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = Object(o.e)(e.sdk.packages || [], t.packages || []), e) : e
			}

			function ke(e, t) {
				var n = Ce(t),
					r = "aggregates" in e ? "sessions" : "session";
				return {
					body: JSON.stringify(Object(o.a)(Object(o.a)({
						sent_at: (new Date).toISOString()
					}, n && {
						sdk: n
					}), t.forceEnvelope() && {
						dsn: t.getDsn().toString()
					})) + "\n" + JSON.stringify({
						type: r
					}) + "\n" + JSON.stringify(e),
					type: r,
					url: t.getEnvelopeEndpointWithUrlEncodedAuth()
				}
			}

			function Oe(e, t) {
				var n = Ce(t),
					r = e.type || "event",
					i = "transaction" === r || t.forceEnvelope(),
					a = e.debug_meta || {},
					s = a.transactionSampling,
					u = Object(o.d)(a, ["transactionSampling"]),
					c = s || {},
					l = c.method,
					f = c.rate;
				0 === Object.keys(u).length ? delete e.debug_meta : e.debug_meta = u;
				var d = {
					body: JSON.stringify(n ? $e(e, t.metadata.sdk) : e),
					type: r,
					url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
				};
				if (i) {
					var h = JSON.stringify(Object(o.a)(Object(o.a)({
						event_id: e.event_id,
						sent_at: (new Date).toISOString()
					}, n && {
						sdk: n
					}), t.forceEnvelope() && {
						dsn: t.getDsn().toString()
					})) + "\n" + JSON.stringify({
						type: r,
						sample_rates: [{
							id: l,
							rate: f
						}]
					}) + "\n" + d.body;
					d.body = h
				}
				return d
			}
			var xe = function() {
					function e(e, t, n) {
						void 0 === t && (t = {}), this.dsn = e, this._dsnObject = new re(e), this.metadata = t, this._tunnel = n
					}
					return e.prototype.getDsn = function() {
						return this._dsnObject
					}, e.prototype.forceEnvelope = function() {
						return !!this._tunnel
					}, e.prototype.getBaseApiEndpoint = function() {
						var e = this.getDsn(),
							t = e.protocol ? e.protocol + ":" : "",
							n = e.port ? ":" + e.port : "";
						return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
					}, e.prototype.getStoreEndpoint = function() {
						return this._getIngestEndpoint("store")
					}, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
						return this.getStoreEndpoint() + "?" + this._encodedAuth()
					}, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
						return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
					}, e.prototype.getStoreEndpointPath = function() {
						var e = this.getDsn();
						return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
					}, e.prototype.getRequestHeaders = function(e, t) {
						var n = this.getDsn(),
							r = ["Sentry sentry_version=7"];
						return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.publicKey), n.pass && r.push("sentry_secret=" + n.pass), {
							"Content-Type": "application/json",
							"X-Sentry-Auth": r.join(", ")
						}
					}, e.prototype.getReportDialogEndpoint = function(e) {
						void 0 === e && (e = {});
						var t = this.getDsn(),
							n = this.getBaseApiEndpoint() + "embed/error-page/",
							r = [];
						for (var i in r.push("dsn=" + t.toString()), e)
							if ("dsn" !== i)
								if ("user" === i) {
									if (!e.user) continue;
									e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
								} else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
						return r.length ? n + "?" + r.join("&") : n
					}, e.prototype._getEnvelopeEndpoint = function() {
						return this._getIngestEndpoint("envelope")
					}, e.prototype._getIngestEndpoint = function(e) {
						return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
					}, e.prototype._encodedAuth = function() {
						var e = {
							sentry_key: this.getDsn().publicKey,
							sentry_version: "7"
						};
						return Object(w.f)(e)
					}, e
				}(),
				Pe = function() {
					function e(e) {
						this._limit = e, this._buffer = []
					}
					return e.prototype.isReady = function() {
						return void 0 === this._limit || this.length() < this._limit
					}, e.prototype.add = function(e) {
						var t = this;
						if (!this.isReady()) return h.reject(new ee("Not adding Promise due to buffer limit reached."));
						var n = e();
						return -1 === this._buffer.indexOf(n) && this._buffer.push(n), n.then((function() {
							return t.remove(n)
						})).then(null, (function() {
							return t.remove(n).then(null, (function() {}))
						})), n
					}, e.prototype.remove = function(e) {
						return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
					}, e.prototype.length = function() {
						return this._buffer.length
					}, e.prototype.drain = function(e) {
						var t = this;
						return new h((function(n) {
							var r = setTimeout((function() {
								e && e > 0 && n(!1)
							}), e);
							h.all(t._buffer).then((function() {
								clearTimeout(r), n(!0)
							})).then(null, (function() {
								n(!0)
							}))
						}))
					}, e
				}(),
				Me = {
					event: "error",
					transaction: "transaction",
					session: "session",
					attachment: "attachment"
				},
				Ie = function() {
					function e(e) {
						this.options = e, this._buffer = new Pe(30), this._rateLimits = {}, this._api = new xe(e.dsn, e._metadata, e.tunnel), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
					}
					return e.prototype.sendEvent = function(e) {
						throw new ee("Transport Class has to implement `sendEvent` method")
					}, e.prototype.close = function(e) {
						return this._buffer.drain(e)
					}, e.prototype._handleResponse = function(e) {
						var t = e.requestType,
							n = e.response,
							r = e.headers,
							i = e.resolve,
							a = e.reject,
							o = se.fromHttpCode(n.status);
						this._handleRateLimit(r) && A.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), o !== se.Success ? a(n) : i({
							status: o
						})
					}, e.prototype._disabledUntil = function(e) {
						var t = Me[e];
						return this._rateLimits[t] || this._rateLimits.all
					}, e.prototype._isRateLimited = function(e) {
						return this._disabledUntil(e) > new Date(Date.now())
					}, e.prototype._handleRateLimit = function(e) {
						var t, n, r, i, a = Date.now(),
							s = e["x-sentry-rate-limits"],
							u = e["retry-after"];
						if (s) {
							try {
								for (var c = Object(o.f)(s.trim().split(",")), l = c.next(); !l.done; l = c.next()) {
									var f = l.value.split(":", 2),
										d = parseInt(f[0], 10),
										h = 1e3 * (isNaN(d) ? 60 : d);
									try {
										for (var _ = (r = void 0, Object(o.f)(f[1].split(";"))), m = _.next(); !m.done; m = _.next()) {
											var b = m.value;
											this._rateLimits[b || "all"] = new Date(a + h)
										}
									} catch (e) {
										r = {
											error: e
										}
									} finally {
										try {
											m && !m.done && (i = _.return) && i.call(_)
										} finally {
											if (r) throw r.error
										}
									}
								}
							} catch (e) {
								t = {
									error: e
								}
							} finally {
								try {
									l && !l.done && (n = c.return) && n.call(c)
								} finally {
									if (t) throw t.error
								}
							}
							return !0
						}
						return !!u && (this._rateLimits.all = new Date(a + Object(p.g)(a, u)), !0)
					}, e
				}();
			var Le = function(e) {
					function t(t, n) {
						void 0 === n && (n = function() {
							var e, t, n = Object(p.e)();
							if (N(n.fetch)) return n.fetch.bind(n);
							var r = n.document,
								i = n.fetch;
							if ("function" == typeof(null === (e = r) || void 0 === e ? void 0 : e.createElement)) try {
								var a = r.createElement("iframe");
								a.hidden = !0, r.head.appendChild(a), (null === (t = a.contentWindow) || void 0 === t ? void 0 : t.fetch) && (i = a.contentWindow.fetch), r.head.removeChild(a)
							} catch (e) {
								A.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
							}
							return i.bind(n)
						}());
						var r = e.call(this, t) || this;
						return r._fetch = n, r
					}
					return Object(o.b)(t, e), t.prototype.sendEvent = function(e) {
						return this._sendRequest(Oe(e, this._api), e)
					}, t.prototype.sendSession = function(e) {
						return this._sendRequest(ke(e, this._api), e)
					}, t.prototype._sendRequest = function(e, t) {
						var n = this;
						if (this._isRateLimited(e.type)) return Promise.reject({
							event: t,
							type: e.type,
							reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
							status: 429
						});
						var r = {
							body: e.body,
							method: "POST",
							referrerPolicy: R() ? "origin" : ""
						};
						return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
							return new h((function(t, i) {
								n._fetch(e.url, r).then((function(r) {
									var a = {
										"x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
										"retry-after": r.headers.get("Retry-After")
									};
									n._handleResponse({
										requestType: e.type,
										response: r,
										headers: a,
										resolve: t,
										reject: i
									})
								})).catch(i)
							}))
						}))
					}, t
				}(Ie),
				De = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return Object(o.b)(t, e), t.prototype.sendEvent = function(e) {
						return this._sendRequest(Oe(e, this._api), e)
					}, t.prototype.sendSession = function(e) {
						return this._sendRequest(ke(e, this._api), e)
					}, t.prototype._sendRequest = function(e, t) {
						var n = this;
						return this._isRateLimited(e.type) ? Promise.reject({
							event: t,
							type: e.type,
							reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
							status: 429
						}) : this._buffer.add((function() {
							return new h((function(t, r) {
								var i = new XMLHttpRequest;
								for (var a in i.onreadystatechange = function() {
										if (4 === i.readyState) {
											var a = {
												"x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
												"retry-after": i.getResponseHeader("Retry-After")
											};
											n._handleResponse({
												requestType: e.type,
												response: i,
												headers: a,
												resolve: t,
												reject: r
											})
										}
									}, i.open("POST", e.url), n.options.headers) n.options.headers.hasOwnProperty(a) && i.setRequestHeader(a, n.options.headers[a]);
								i.send(e.body)
							}))
						}))
					}, t
				}(Ie),
				Be = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return Object(o.b)(t, e), t.prototype.eventFromException = function(e, t) {
						return function(e, t, n) {
							var r = Ee(t, n && n.syntheticException || void 0, {
								attachStacktrace: e.attachStacktrace
							});
							return Object(p.a)(r, {
								handled: !0,
								type: "generic"
							}), r.level = ce.Error, n && n.event_id && (r.event_id = n.event_id), h.resolve(r)
						}(this._options, e, t)
					}, t.prototype.eventFromMessage = function(e, t, n) {
						return void 0 === t && (t = ce.Info),
							function(e, t, n, r) {
								void 0 === n && (n = ce.Info);
								var i = Te(t, r && r.syntheticException || void 0, {
									attachStacktrace: e.attachStacktrace
								});
								return i.level = n, r && r.event_id && (i.event_id = r.event_id), h.resolve(i)
							}(this._options, e, t, n)
					}, t.prototype._setupTransport = function() {
						if (!this._options.dsn) return e.prototype._setupTransport.call(this);
						var t = Object(o.a)(Object(o.a)({}, this._options.transportOptions), {
							dsn: this._options.dsn,
							tunnel: this._options.tunnel,
							_metadata: this._options._metadata
						});
						return this._options.transport ? new this._options.transport(t) : B() ? new Le(t) : new De(t)
					}, t
				}(fe);

			function Ne(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				var r = k();
				if (r && r[e]) return r[e].apply(r, Object(o.e)(t));
				throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
			}

			function Re(e, t) {
				var n;
				try {
					throw new Error("Sentry syntheticException")
				} catch (e) {
					n = e
				}
				return Ne("captureException", e, {
					captureContext: t,
					originalException: e,
					syntheticException: n
				})
			}

			function Fe(e) {
				Ne("withScope", e)
			}
			var Ue = 0;

			function je() {
				return Ue > 0
			}

			function He() {
				Ue += 1, setTimeout((function() {
					Ue -= 1
				}))
			}

			function Ye(e, t, n) {
				if (void 0 === t && (t = {}), "function" != typeof e) return e;
				try {
					if (e.__sentry__) return e;
					if (e.__sentry_wrapped__) return e.__sentry_wrapped__
				} catch (t) {
					return e
				}
				var r = function() {
					var r = Array.prototype.slice.call(arguments);
					try {
						n && "function" == typeof n && n.apply(this, arguments);
						var i = r.map((function(e) {
							return Ye(e, t)
						}));
						return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
					} catch (e) {
						throw He(), Fe((function(n) {
							n.addEventProcessor((function(e) {
								var n = Object(o.a)({}, e);
								return t.mechanism && (Object(p.b)(n, void 0, void 0), Object(p.a)(n, t.mechanism)), n.extra = Object(o.a)(Object(o.a)({}, n.extra), {
									arguments: r
								}), n
							})), Re(e)
						})), e
					}
				};
				try {
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
				} catch (e) {}
				e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
					enumerable: !1,
					value: r
				}), Object.defineProperties(r, {
					__sentry__: {
						enumerable: !1,
						value: !0
					},
					__sentry_original__: {
						enumerable: !1,
						value: e
					}
				});
				try {
					Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
						get: function() {
							return e.name
						}
					})
				} catch (e) {}
				return r
			}
			var Ve = n("bc5b"),
				ze = function() {
					function e(t) {
						this.name = e.id, this._options = Object(o.a)({
							console: !0,
							dom: !0,
							fetch: !0,
							history: !0,
							sentry: !0,
							xhr: !0
						}, t)
					}
					return e.prototype.addSentryBreadcrumb = function(e) {
						this._options.sentry && k().addBreadcrumb({
							category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
							event_id: e.event_id,
							level: e.level,
							message: Object(p.d)(e)
						}, {
							event: e
						})
					}, e.prototype.setupOnce = function() {
						var e = this;
						this._options.console && V({
							callback: function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								e._consoleBreadcrumb.apply(e, Object(o.e)(t))
							},
							type: "console"
						}), this._options.dom && V({
							callback: function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								e._domBreadcrumb.apply(e, Object(o.e)(t))
							},
							type: "dom"
						}), this._options.xhr && V({
							callback: function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								e._xhrBreadcrumb.apply(e, Object(o.e)(t))
							},
							type: "xhr"
						}), this._options.fetch && V({
							callback: function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								e._fetchBreadcrumb.apply(e, Object(o.e)(t))
							},
							type: "fetch"
						}), this._options.history && V({
							callback: function() {
								for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								e._historyBreadcrumb.apply(e, Object(o.e)(t))
							},
							type: "history"
						})
					}, e.prototype._consoleBreadcrumb = function(e) {
						var t = {
							category: "console",
							data: {
								arguments: e.args,
								logger: "console"
							},
							level: ce.fromString(e.level),
							message: Object(M.b)(e.args, " ")
						};
						if ("assert" === e.level) {
							if (!1 !== e.args[0]) return;
							t.message = "Assertion failed: " + (Object(M.b)(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
						}
						k().addBreadcrumb(t, {
							input: e.args,
							level: e.level
						})
					}, e.prototype._domBreadcrumb = function(e) {
						var t, n = "object" == typeof this._options.dom ? this._options.dom.serializeAttribute : void 0;
						"string" == typeof n && (n = [n]);
						try {
							t = e.event.target ? Object(Ve.a)(e.event.target, n) : Object(Ve.a)(e.event, n)
						} catch (e) {
							t = "<unknown>"
						}
						0 !== t.length && k().addBreadcrumb({
							category: "ui." + e.name,
							message: t
						}, {
							event: e.event,
							name: e.name,
							global: e.global
						})
					}, e.prototype._xhrBreadcrumb = function(e) {
						if (e.endTimestamp) {
							if (e.xhr.__sentry_own_request__) return;
							var t = e.xhr.__sentry_xhr__ || {},
								n = t.method,
								r = t.url,
								i = t.status_code,
								a = t.body;
							k().addBreadcrumb({
								category: "xhr",
								data: {
									method: n,
									url: r,
									status_code: i
								},
								type: "http"
							}, {
								xhr: e.xhr,
								input: a
							})
						}
					}, e.prototype._fetchBreadcrumb = function(e) {
						e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? k().addBreadcrumb({
							category: "fetch",
							data: e.fetchData,
							level: ce.Error,
							type: "http"
						}, {
							data: e.error,
							input: e.args
						}) : k().addBreadcrumb({
							category: "fetch",
							data: Object(o.a)(Object(o.a)({}, e.fetchData), {
								status_code: e.response.status
							}),
							type: "http"
						}, {
							input: e.args,
							response: e.response
						})))
					}, e.prototype._historyBreadcrumb = function(e) {
						var t = Object(p.e)(),
							n = e.from,
							r = e.to,
							i = Object(p.h)(t.location.href),
							a = Object(p.h)(n),
							o = Object(p.h)(r);
						a.path || (a = i), i.protocol === o.protocol && i.host === o.host && (r = o.relative), i.protocol === a.protocol && i.host === a.host && (n = a.relative), k().addBreadcrumb({
							category: "navigation",
							data: {
								from: n,
								to: r
							}
						})
					}, e.id = "Breadcrumbs", e
				}(),
				Qe = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
							name: "sentry.javascript.browser",
							packages: [{
								name: "npm:@sentry/browser",
								version: s
							}],
							version: s
						}, e.call(this, Be, t) || this
					}
					return Object(o.b)(t, e), t.prototype.showReportDialog = function(e) {
						void 0 === e && (e = {}), Object(p.e)().document && (this._isEnabled() ? function(e) {
							if (void 0 === e && (e = {}), e.eventId)
								if (e.dsn) {
									var t = document.createElement("script");
									t.async = !0, t.src = new xe(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad), (document.head || document.body).appendChild(t)
								} else A.error("Missing dsn option in showReportDialog call");
							else A.error("Missing eventId option in showReportDialog call")
						}(Object(o.a)(Object(o.a)({}, e), {
							dsn: e.dsn || this.getDsn()
						})) : A.error("Trying to call showReportDialog with Sentry Client disabled"))
					}, t.prototype._prepareEvent = function(t, n, r) {
						return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
					}, t.prototype._sendEvent = function(t) {
						var n = this.getIntegration(ze);
						n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
					}, t
				}(ue),
				Ge = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
				qe = function() {
					function e(t) {
						this.name = e.id, this._options = Object(o.a)({
							XMLHttpRequest: !0,
							eventTarget: !0,
							requestAnimationFrame: !0,
							setInterval: !0,
							setTimeout: !0
						}, t)
					}
					return e.prototype.setupOnce = function() {
						var e = Object(p.e)();
						(this._options.setTimeout && Object(w.c)(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(w.c)(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(w.c)(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && Object(w.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Ge).forEach(this._wrapEventTarget.bind(this))
					}, e.prototype._wrapTimeFunction = function(e) {
						return function() {
							for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
							var r = t[0];
							return t[0] = Ye(r, {
								mechanism: {
									data: {
										function: Object(D.a)(e)
									},
									handled: !0,
									type: "instrument"
								}
							}), e.apply(this, t)
						}
					}, e.prototype._wrapRAF = function(e) {
						return function(t) {
							return e.call(this, Ye(t, {
								mechanism: {
									data: {
										function: "requestAnimationFrame",
										handler: Object(D.a)(e)
									},
									handled: !0,
									type: "instrument"
								}
							}))
						}
					}, e.prototype._wrapEventTarget = function(e) {
						var t = Object(p.e)(),
							n = t[e] && t[e].prototype;
						n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(w.c)(n, "addEventListener", (function(t) {
							return function(n, r, i) {
								try {
									"function" == typeof r.handleEvent && (r.handleEvent = Ye(r.handleEvent.bind(r), {
										mechanism: {
											data: {
												function: "handleEvent",
												handler: Object(D.a)(r),
												target: e
											},
											handled: !0,
											type: "instrument"
										}
									}))
								} catch (e) {}
								return t.call(this, n, Ye(r, {
									mechanism: {
										data: {
											function: "addEventListener",
											handler: Object(D.a)(r),
											target: e
										},
										handled: !0,
										type: "instrument"
									}
								}), i)
							}
						})), Object(w.c)(n, "removeEventListener", (function(e) {
							return function(t, n, r) {
								var i, a = n;
								try {
									var o = null === (i = a) || void 0 === i ? void 0 : i.__sentry_wrapped__;
									o && e.call(this, t, o, r)
								} catch (e) {}
								return e.call(this, t, a, r)
							}
						})))
					}, e.prototype._wrapXHR = function(e) {
						return function() {
							for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
							var r = this,
								i = ["onload", "onerror", "onprogress", "onreadystatechange"];
							return i.forEach((function(e) {
								e in r && "function" == typeof r[e] && Object(w.c)(r, e, (function(t) {
									var n = {
										mechanism: {
											data: {
												function: e,
												handler: Object(D.a)(t)
											},
											handled: !0,
											type: "instrument"
										}
									};
									return t.__sentry_original__ && (n.mechanism.data.handler = Object(D.a)(t.__sentry_original__)), Ye(t, n)
								}))
							})), e.apply(this, t)
						}
					}, e.id = "TryCatch", e
				}(),
				We = function() {
					function e(t) {
						this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Object(o.a)({
							onerror: !0,
							onunhandledrejection: !0
						}, t)
					}
					return e.prototype.setupOnce = function() {
						Error.stackTraceLimit = 50, this._options.onerror && (A.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (A.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
					}, e.prototype._installGlobalOnErrorHandler = function() {
						var t = this;
						this._onErrorHandlerInstalled || (V({
							callback: function(n) {
								var r = n.error,
									i = k(),
									a = i.getIntegration(e),
									o = r && !0 === r.__sentry_own_request__;
								if (a && !je() && !o) {
									var s = i.getClient(),
										u = void 0 === r && Object(c.k)(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(Ee(r || n.msg, void 0, {
											attachStacktrace: s && s.getOptions().attachStacktrace,
											rejection: !1
										}), n.url, n.line, n.column);
									Object(p.a)(u, {
										handled: !1,
										type: "onerror"
									}), i.captureEvent(u, {
										originalException: r
									})
								}
							},
							type: "error"
						}), this._onErrorHandlerInstalled = !0)
					}, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
						var t = this;
						this._onUnhandledRejectionHandlerInstalled || (V({
							callback: function(n) {
								var r = n;
								try {
									"reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
								} catch (e) {}
								var i = k(),
									a = i.getIntegration(e),
									o = r && !0 === r.__sentry_own_request__;
								if (!a || je() || o) return !0;
								var s = i.getClient(),
									u = Object(c.i)(r) ? t._eventFromRejectionWithPrimitive(r) : Ee(r, void 0, {
										attachStacktrace: s && s.getOptions().attachStacktrace,
										rejection: !0
									});
								u.level = ce.Error, Object(p.a)(u, {
									handled: !1,
									type: "onunhandledrejection"
								}), i.captureEvent(u, {
									originalException: r
								})
							},
							type: "unhandledrejection"
						}), this._onUnhandledRejectionHandlerInstalled = !0)
					}, e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
						var i, a = Object(c.e)(e) ? e.message : e,
							o = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
						o && (i = o[1], a = o[2]);
						var s = {
							exception: {
								values: [{
									type: i || "Error",
									value: a
								}]
							}
						};
						return this._enhanceEventWithInitialFrame(s, t, n, r)
					}, e.prototype._eventFromRejectionWithPrimitive = function(e) {
						return {
							exception: {
								values: [{
									type: "UnhandledRejection",
									value: "Non-Error promise rejection captured with value: " + String(e)
								}]
							}
						}
					}, e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
						e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
						var i = isNaN(parseInt(r, 10)) ? void 0 : r,
							a = isNaN(parseInt(n, 10)) ? void 0 : n,
							o = Object(c.k)(t) && t.length > 0 ? t : Object(p.f)();
						return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
							colno: i,
							filename: o,
							function: "?",
							in_app: !0,
							lineno: a
						}), e
					}, e.id = "GlobalHandlers", e
				}(),
				Ke = function() {
					function e(t) {
						void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
					}
					return e.prototype.setupOnce = function() {
						b((function(t, n) {
							var r = k().getIntegration(e);
							return r ? r._handler(t, n) : t
						}))
					}, e.prototype._handler = function(e, t) {
						if (!(e.exception && e.exception.values && t && Object(c.g)(t.originalException, Error))) return e;
						var n = this._walkErrorTree(t.originalException, this._key);
						return e.exception.values = Object(o.e)(n, e.exception.values), e
					}, e.prototype._walkErrorTree = function(e, t, n) {
						if (void 0 === n && (n = []), !Object(c.g)(e[t], Error) || n.length + 1 >= this._limit) return n;
						var r = Ae(ge(e[t]));
						return this._walkErrorTree(e[t], t, Object(o.e)([r], n))
					}, e.id = "LinkedErrors", e
				}(),
				Xe = function() {
					function e() {
						this.name = e.id
					}
					return e.prototype.setupOnce = function(t, n) {
						t((function(t) {
							var r = n().getIntegration(e);
							if (r) {
								try {
									if (r._shouldDropEvent(t, r._previousEvent)) return null
								} catch (e) {
									return r._previousEvent = t
								}
								return r._previousEvent = t
							}
							return t
						}))
					}, e.prototype._shouldDropEvent = function(e, t) {
						return !(!t || !this._isSameMessageEvent(e, t) && !this._isSameExceptionEvent(e, t))
					}, e.prototype._isSameMessageEvent = function(e, t) {
						var n = e.message,
							r = t.message;
						return !(!n && !r || n && !r || !n && r || n !== r || !this._isSameFingerprint(e, t) || !this._isSameStacktrace(e, t))
					}, e.prototype._getFramesFromEvent = function(e) {
						var t = e.exception;
						if (t) try {
							return t.values[0].stacktrace.frames
						} catch (e) {
							return
						} else if (e.stacktrace) return e.stacktrace.frames
					}, e.prototype._isSameStacktrace = function(e, t) {
						var n = this._getFramesFromEvent(e),
							r = this._getFramesFromEvent(t);
						if (!n && !r) return !0;
						if (n && !r || !n && r) return !1;
						if (n = n, (r = r).length !== n.length) return !1;
						for (var i = 0; i < r.length; i++) {
							var a = r[i],
								o = n[i];
							if (a.filename !== o.filename || a.lineno !== o.lineno || a.colno !== o.colno || a.function !== o.function) return !1
						}
						return !0
					}, e.prototype._getExceptionFromEvent = function(e) {
						return e.exception && e.exception.values && e.exception.values[0]
					}, e.prototype._isSameExceptionEvent = function(e, t) {
						var n = this._getExceptionFromEvent(t),
							r = this._getExceptionFromEvent(e);
						return !!(n && r && n.type === r.type && n.value === r.value && this._isSameFingerprint(e, t) && this._isSameStacktrace(e, t))
					}, e.prototype._isSameFingerprint = function(e, t) {
						var n = e.fingerprint,
							r = t.fingerprint;
						if (!n && !r) return !0;
						if (n && !r || !n && r) return !1;
						n = n, r = r;
						try {
							return !(n.join("") !== r.join(""))
						} catch (e) {
							return !1
						}
					}, e.id = "Dedupe", e
				}(),
				Je = Object(p.e)(),
				Ze = function() {
					function e() {
						this.name = e.id
					}
					return e.prototype.setupOnce = function() {
						b((function(t) {
							var n, r, i;
							if (k().getIntegration(e)) {
								if (!Je.navigator && !Je.location && !Je.document) return t;
								var a = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (r = Je.location) || void 0 === r ? void 0 : r.href),
									s = (Je.document || {}).referrer,
									u = (Je.navigator || {}).userAgent,
									c = Object(o.a)(Object(o.a)(Object(o.a)({}, null === (i = t.request) || void 0 === i ? void 0 : i.headers), s && {
										Referer: s
									}), u && {
										"User-Agent": u
									}),
									l = Object(o.a)(Object(o.a)({}, a && {
										url: a
									}), {
										headers: c
									});
								return Object(o.a)(Object(o.a)({}, t), {
									request: l
								})
							}
							return t
						}))
					}, e.id = "UserAgent", e
				}(),
				et = [new r.InboundFilters, new r.FunctionToString, new qe, new ze, new We, new Ke, new Xe, new Ze];

			function tt(e) {
				if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = et), void 0 === e.release) {
					var t = Object(p.e)();
					t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
				}
				void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
					function(e, t) {
						var n;
						!0 === t.debug && A.enable();
						var r = k();
						null === (n = r.getScope()) || void 0 === n || n.update(t.initialScope);
						var i = new e(t);
						r.bindClient(i)
					}(Qe, e), e.autoSessionTracking && function() {
						if (void 0 !== Object(p.e)().document) {
							var e = k();
							"function" == typeof e.startSession && "function" == typeof e.captureSession && (e.startSession({
								ignoreDuration: !0
							}), e.captureSession(), V({
								callback: function(t) {
									var n = t.from,
										r = t.to;
									void 0 !== n && n !== r && (e.startSession({
										ignoreDuration: !0
									}), e.captureSession())
								},
								type: "history"
							}))
						} else A.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
					}()
			}
			var nt = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

			function rt(e, t) {
				var n = function(e) {
					var t = nt.exec(e);
					return t ? t.slice(1) : []
				}(e)[2];
				return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
			}
			var it = {
					activate: ["activated", "deactivated"],
					create: ["beforeCreate", "created"],
					destroy: ["beforeDestroy", "destroyed"],
					mount: ["beforeMount", "mounted"],
					update: ["beforeUpdate", "updated"]
				},
				at = /(?:^|[-_/])(\w)/g,
				ot = "anonymous component";

			function st(e) {
				void 0 === e && (e = {});
				var t = Object(o.a)(Object(o.a)({
					Vue: Object(p.e)().Vue,
					attachProps: !0,
					logErrors: !1,
					tracing: !1
				}, e), {
					tracingOptions: Object(o.a)({
						hooks: ["activate", "mount", "update"],
						timeout: 2e3,
						trackComponents: !1
					}, e.tracingOptions)
				});
				(t._metadata = t._metadata || {}, t._metadata.sdk = {
					name: "sentry.javascript.vue",
					packages: [{
						name: "npm:@sentry/vue",
						version: s
					}],
					version: s
				}, tt(t), void 0 === t.Vue) ? (A.warn("No Vue instance was provided. Also there is no Vue instance on the `window` object."), A.warn("We will only capture global unhandled errors.")) : new ut(t).setup()
			}
			var ut = function() {
				function e(e) {
					var t = this;
					this._componentsCache = {}, this._applyTracingHooks = function(e) {
						if (!e.$options.$_sentryPerfHook) {
							e.$options.$_sentryPerfHook = !0;
							var n = t._getComponentName(e),
								r = "root" === n,
								i = {},
								a = function(n) {
									var r = Object(l.c)();
									t._rootSpan ? t._finishRootSpan(r) : e.$once("hook:" + n, (function() {
										var e = ct();
										e && (t._rootSpan = e.startChild({
											description: "Application Render",
											op: "Vue"
										}))
									}))
								},
								s = function(r, a) {
									var o = Array.isArray(t._options.tracingOptions.trackComponents) ? t._options.tracingOptions.trackComponents.indexOf(n) > -1 : t._options.tracingOptions.trackComponents,
										s = t._rootSpan || ct();
									if (s && o) {
										var u = Object(l.c)(),
											c = i[a];
										c ? (c.finish(), t._finishRootSpan(u)) : e.$once("hook:" + r, (function() {
											s && (i[a] = s.startChild({
												description: "Vue <" + n + ">",
												op: a
											}))
										}))
									}
								};
							t._options.tracingOptions.hooks.forEach((function(n) {
								var i = it[n];
								i ? i.forEach((function(i) {
									var u = r ? a.bind(t, i) : s.bind(t, i, n),
										c = e.$options[i];
									Array.isArray(c) ? e.$options[i] = Object(o.e)([u], c) : e.$options[i] = "function" == typeof c ? [u, c] : [u]
								})) : A.warn("Unknown hook: " + n)
							}))
						}
					}, this._options = e
				}
				return e.prototype.setup = function() {
					this._attachErrorHandler(), ("tracesSampleRate" in this._options || "tracesSampler" in this._options) && this._startTracing()
				}, e.prototype._getComponentName = function(e) {
					if (!e) return ot;
					if (e.$root === e) return "root";
					if (!e.$options) return ot;
					if (e.$options.name) return e.$options.name;
					if (e.$options._componentTag) return e.$options._componentTag;
					if (e.$options.__file) {
						var t = rt(e.$options.__file.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/"), ".vue");
						return this._componentsCache[t] || (this._componentsCache[t] = t.replace(at, (function(e, t) {
							return t ? t.toUpperCase() : ""
						})))
					}
					return ot
				}, e.prototype._finishRootSpan = function(e) {
					var t = this;
					this._rootSpanTimer && clearTimeout(this._rootSpanTimer), this._rootSpanTimer = setTimeout((function() {
						t._rootSpan && (t._rootSpan.finish(e), t._rootSpan = void 0)
					}), this._options.tracingOptions.timeout)
				}, e.prototype._startTracing = function() {
					var e = this._applyTracingHooks,
						t = setTimeout((function() {
							A.warn("Didn't apply tracing hooks, make sure you call Sentry.init before initialzing Vue!")
						}), 500);
					this._options.Vue.mixin({
						beforeCreate: function() {
							clearTimeout(t), e(this)
						}
					})
				}, e.prototype._attachErrorHandler = function() {
					var e = this,
						t = this._options.Vue.config.errorHandler;
					this._options.Vue.config.errorHandler = function(n, r, i) {
						var a = {};
						if (r) try {
							a.componentName = e._getComponentName(r), e._options.attachProps && (a.propsData = r.$options.propsData)
						} catch (e) {
							A.warn("Unable to extract metadata from Vue component.")
						}
						i && (a.lifecycleHook = i), setTimeout((function() {
							k().withScope((function(e) {
								e.setContext("vue", a), k().captureException(n)
							}))
						})), "function" == typeof t && t.call(e._options.Vue, n, r, i), e._options.logErrors && (e._options.Vue.util && e._options.Vue.util.warn("Error in " + i + ': "' + (n && n.toString()) + '"', r), console.error(n))
					}
				}, e
			}();

			function ct() {
				var e;
				return null === (e = k().getScope()) || void 0 === e ? void 0 : e.getTransaction()
			}
		},
		"8aa5": function(e, t, n) {
			"use strict";
			var r = n("6547").charAt;
			e.exports = function(e, t, n) {
				return t + (n ? r(e, t).length : 1)
			}
		},
		"8aa7": function(e, t, n) {
			var r = n("da84"),
				i = n("d039"),
				a = n("1c7e"),
				o = n("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,
				s = r.ArrayBuffer,
				u = r.Int8Array;
			e.exports = !o || !i((function() {
				u(1)
			})) || !i((function() {
				new u(-1)
			})) || !a((function(e) {
				new u, new u(null), new u(1.5), new u(e)
			}), !0) || i((function() {
				return 1 !== new u(new s(2), 1, void 0).length
			}))
		},
		"8b9a": function(e, t, n) {
			"use strict";
			var r = this && this.__extends || function() {
				var e = function(t, n) {
					return (e = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(t, n)
				};
				return function(t, n) {
					function r() {
						this.constructor = t
					}
					e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
				}
			}();
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.VolumeSlider = void 0;
			var i = n("fb10"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.updateVolumeWhileScrubbing = function(e, t) {
							t.scrubbing && n.volumeTransition && n.volumeTransition.update(t.position)
						}, n.config = n.mergeConfig(t, {
							cssClass: "ui-volumeslider",
							hideIfVolumeControlProhibited: !0,
							ariaLabel: a.i18n.getLocalizer("settings.audio.volume"),
							tabIndex: 0
						}, n.config), n
					}
					return r(t, e), t.prototype.setVolumeAriaSliderValues = function(e) {
						this.getDomElement().attr("aria-valuenow", Math.ceil(e).toString()), this.getDomElement().attr("aria-valuetext", a.i18n.performLocalization(a.i18n.getLocalizer("seekBar.value")) + ": " + Math.ceil(e))
					}, t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n, !1), this.setAriaSliderMinMax("0", "100");
						var i = this.getConfig(),
							a = n.getConfig().volumeController;
						!i.hideIfVolumeControlProhibited || this.detectVolumeControlAvailability() ? (a.onChanged.subscribe((function(e, t) {
							t.muted ? (r.setVolumeAriaSliderValues(0), r.setPlaybackPosition(0)) : (r.setPlaybackPosition(t.volume), r.setVolumeAriaSliderValues(t.volume))
						})), this.onSeek.subscribe((function() {
							r.volumeTransition = a.startTransition()
						})), this.onSeekPreview.subscribeRateLimited(this.updateVolumeWhileScrubbing, 50), this.onSeeked.subscribe((function(e, t) {
							r.volumeTransition && r.volumeTransition.finish(t)
						})), t.on(t.exports.PlayerEvent.PlayerResized, (function() {
							r.refreshPlaybackPosition()
						})), n.onConfigured.subscribe((function() {
							r.refreshPlaybackPosition()
						})), n.getConfig().events.onUpdated.subscribe((function() {
							r.refreshPlaybackPosition()
						})), n.onComponentShow.subscribe((function() {
							r.refreshPlaybackPosition()
						})), n.onComponentHide.subscribe((function() {
							r.refreshPlaybackPosition()
						})), a.onChangedEvent()) : this.hide()
					}, t.prototype.detectVolumeControlAvailability = function() {
						var e = document.createElement("video");
						return e.volume = .7, 1 !== e.volume
					}, t.prototype.release = function() {
						e.prototype.release.call(this), this.onSeekPreview.unsubscribe(this.updateVolumeWhileScrubbing)
					}, t
				}(i.SeekBar);
			t.VolumeSlider = o
		},
		"8ba4": function(e, t, n) {
			n("23e7")({
				target: "Number",
				stat: !0
			}, {
				isInteger: n("5e89")
			})
		},
		"8baf": function(e, t, n) {
			"use strict";
			(function(e) {
				var r = n("9764"),
					i = function() {
						return "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : this
					}();

				function a() {
					i.console && "function" == typeof i.console.log && i.console.log.apply(i.console, arguments)
				}
				var o = {
					log: a,
					warn: function(e) {
						i.console && ("function" == typeof i.console.warn ? i.console.warn.apply(i.console, arguments) : a.call(null, arguments))
					},
					error: function(e) {
						i.console && ("function" == typeof i.console.error ? i.console.error.apply(i.console, arguments) : a(e))
					}
				};

				function s(e, t, n) {
					var r = new XMLHttpRequest;
					r.open("GET", e), r.responseType = "blob", r.onload = function() {
						d(r.response, t, n)
					}, r.onerror = function() {
						o.error("could not download file")
					}, r.send()
				}

				function u(e) {
					var t = new XMLHttpRequest;
					t.open("HEAD", e, !1);
					try {
						t.send()
					} catch (e) {}
					return t.status >= 200 && t.status <= 299
				}

				function c(e) {
					try {
						e.dispatchEvent(new MouseEvent("click"))
					} catch (n) {
						var t = document.createEvent("MouseEvents");
						t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
					}
				}
				var l, f, d = i.saveAs || ("object" != typeof window || window !== i ? function() {} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(e, t, n) {
					var r = i.URL || i.webkitURL,
						a = document.createElement("a");
					t = t || e.name || "download", a.download = t, a.rel = "noopener", "string" == typeof e ? (a.href = e, a.origin !== location.origin ? u(a.href) ? s(e, t, n) : c(a, a.target = "_blank") : c(a)) : (a.href = r.createObjectURL(e), setTimeout((function() {
						r.revokeObjectURL(a.href)
					}), 4e4), setTimeout((function() {
						c(a)
					}), 0))
				} : "msSaveOrOpenBlob" in navigator ? function(e, t, n) {
					if (t = t || e.name || "download", "string" == typeof e)
						if (u(e)) s(e, t, n);
						else {
							var r = document.createElement("a");
							r.href = e, r.target = "_blank", setTimeout((function() {
								c(r)
							}))
						}
					else navigator.msSaveOrOpenBlob(function(e, t) {
						return void 0 === t ? t = {
							autoBom: !1
						} : "object" != typeof t && (o.warn("Deprecated: Expected third argument to be a object"), t = {
							autoBom: !t
						}), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
							type: e.type
						}) : e
					}(e, n), t)
				} : function(e, t, n, r) {
					if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e) return s(e, t, n);
					var a = "application/octet-stream" === e.type,
						o = /constructor/i.test(i.HTMLElement) || i.safari,
						u = /CriOS\/[\d]+/.test(navigator.userAgent);
					if ((u || a && o) && "object" == typeof FileReader) {
						var c = new FileReader;
						c.onloadend = function() {
							var e = c.result;
							e = u ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location = e, r = null
						}, c.readAsDataURL(e)
					} else {
						var l = i.URL || i.webkitURL,
							f = l.createObjectURL(e);
						r ? r.location = f : location.href = f, r = null, setTimeout((function() {
							l.revokeObjectURL(f)
						}), 4e4)
					}
				});

				function h(e) {
					var t;
					e = e || "", this.ok = !1, "#" == e.charAt(0) && (e = e.substr(1, 6)), e = {
						aliceblue: "f0f8ff",
						antiquewhite: "faebd7",
						aqua: "00ffff",
						aquamarine: "7fffd4",
						azure: "f0ffff",
						beige: "f5f5dc",
						bisque: "ffe4c4",
						black: "000000",
						blanchedalmond: "ffebcd",
						blue: "0000ff",
						blueviolet: "8a2be2",
						brown: "a52a2a",
						burlywood: "deb887",
						cadetblue: "5f9ea0",
						chartreuse: "7fff00",
						chocolate: "d2691e",
						coral: "ff7f50",
						cornflowerblue: "6495ed",
						cornsilk: "fff8dc",
						crimson: "dc143c",
						cyan: "00ffff",
						darkblue: "00008b",
						darkcyan: "008b8b",
						darkgoldenrod: "b8860b",
						darkgray: "a9a9a9",
						darkgreen: "006400",
						darkkhaki: "bdb76b",
						darkmagenta: "8b008b",
						darkolivegreen: "556b2f",
						darkorange: "ff8c00",
						darkorchid: "9932cc",
						darkred: "8b0000",
						darksalmon: "e9967a",
						darkseagreen: "8fbc8f",
						darkslateblue: "483d8b",
						darkslategray: "2f4f4f",
						darkturquoise: "00ced1",
						darkviolet: "9400d3",
						deeppink: "ff1493",
						deepskyblue: "00bfff",
						dimgray: "696969",
						dodgerblue: "1e90ff",
						feldspar: "d19275",
						firebrick: "b22222",
						floralwhite: "fffaf0",
						forestgreen: "228b22",
						fuchsia: "ff00ff",
						gainsboro: "dcdcdc",
						ghostwhite: "f8f8ff",
						gold: "ffd700",
						goldenrod: "daa520",
						gray: "808080",
						green: "008000",
						greenyellow: "adff2f",
						honeydew: "f0fff0",
						hotpink: "ff69b4",
						indianred: "cd5c5c",
						indigo: "4b0082",
						ivory: "fffff0",
						khaki: "f0e68c",
						lavender: "e6e6fa",
						lavenderblush: "fff0f5",
						lawngreen: "7cfc00",
						lemonchiffon: "fffacd",
						lightblue: "add8e6",
						lightcoral: "f08080",
						lightcyan: "e0ffff",
						lightgoldenrodyellow: "fafad2",
						lightgrey: "d3d3d3",
						lightgreen: "90ee90",
						lightpink: "ffb6c1",
						lightsalmon: "ffa07a",
						lightseagreen: "20b2aa",
						lightskyblue: "87cefa",
						lightslateblue: "8470ff",
						lightslategray: "778899",
						lightsteelblue: "b0c4de",
						lightyellow: "ffffe0",
						lime: "00ff00",
						limegreen: "32cd32",
						linen: "faf0e6",
						magenta: "ff00ff",
						maroon: "800000",
						mediumaquamarine: "66cdaa",
						mediumblue: "0000cd",
						mediumorchid: "ba55d3",
						mediumpurple: "9370d8",
						mediumseagreen: "3cb371",
						mediumslateblue: "7b68ee",
						mediumspringgreen: "00fa9a",
						mediumturquoise: "48d1cc",
						mediumvioletred: "c71585",
						midnightblue: "191970",
						mintcream: "f5fffa",
						mistyrose: "ffe4e1",
						moccasin: "ffe4b5",
						navajowhite: "ffdead",
						navy: "000080",
						oldlace: "fdf5e6",
						olive: "808000",
						olivedrab: "6b8e23",
						orange: "ffa500",
						orangered: "ff4500",
						orchid: "da70d6",
						palegoldenrod: "eee8aa",
						palegreen: "98fb98",
						paleturquoise: "afeeee",
						palevioletred: "d87093",
						papayawhip: "ffefd5",
						peachpuff: "ffdab9",
						peru: "cd853f",
						pink: "ffc0cb",
						plum: "dda0dd",
						powderblue: "b0e0e6",
						purple: "800080",
						red: "ff0000",
						rosybrown: "bc8f8f",
						royalblue: "4169e1",
						saddlebrown: "8b4513",
						salmon: "fa8072",
						sandybrown: "f4a460",
						seagreen: "2e8b57",
						seashell: "fff5ee",
						sienna: "a0522d",
						silver: "c0c0c0",
						skyblue: "87ceeb",
						slateblue: "6a5acd",
						slategray: "708090",
						snow: "fffafa",
						springgreen: "00ff7f",
						steelblue: "4682b4",
						tan: "d2b48c",
						teal: "008080",
						thistle: "d8bfd8",
						tomato: "ff6347",
						turquoise: "40e0d0",
						violet: "ee82ee",
						violetred: "d02090",
						wheat: "f5deb3",
						white: "ffffff",
						whitesmoke: "f5f5f5",
						yellow: "ffff00",
						yellowgreen: "9acd32"
					} [e = (e = e.replace(/ /g, "")).toLowerCase()] || e;
					for (var n = [{
							re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
							example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
							process: function(e) {
								return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
							}
						}, {
							re: /^(\w{2})(\w{2})(\w{2})$/,
							example: ["#00ff00", "336699"],
							process: function(e) {
								return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
							}
						}, {
							re: /^(\w{1})(\w{1})(\w{1})$/,
							example: ["#fb0", "f0f"],
							process: function(e) {
								return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
							}
						}], r = 0; r < n.length; r++) {
						var i = n[r].re,
							a = n[r].process,
							o = i.exec(e);
						o && (t = a(o), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0)
					}
					this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
						return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
					}, this.toHex = function() {
						var e = this.r.toString(16),
							t = this.g.toString(16),
							n = this.b.toString(16);
						return 1 == e.length && (e = "0" + e), 1 == t.length && (t = "0" + t), 1 == n.length && (n = "0" + n), "#" + e + t + n
					}
				}

				function p(e, t) {
					var n = e[0],
						r = e[1],
						i = e[2],
						a = e[3];
					n = m(n, r, i, a, t[0], 7, -680876936), a = m(a, n, r, i, t[1], 12, -389564586), i = m(i, a, n, r, t[2], 17, 606105819), r = m(r, i, a, n, t[3], 22, -1044525330), n = m(n, r, i, a, t[4], 7, -176418897), a = m(a, n, r, i, t[5], 12, 1200080426), i = m(i, a, n, r, t[6], 17, -1473231341), r = m(r, i, a, n, t[7], 22, -45705983), n = m(n, r, i, a, t[8], 7, 1770035416), a = m(a, n, r, i, t[9], 12, -1958414417), i = m(i, a, n, r, t[10], 17, -42063), r = m(r, i, a, n, t[11], 22, -1990404162), n = m(n, r, i, a, t[12], 7, 1804603682), a = m(a, n, r, i, t[13], 12, -40341101), i = m(i, a, n, r, t[14], 17, -1502002290), n = b(n, r = m(r, i, a, n, t[15], 22, 1236535329), i, a, t[1], 5, -165796510), a = b(a, n, r, i, t[6], 9, -1069501632), i = b(i, a, n, r, t[11], 14, 643717713), r = b(r, i, a, n, t[0], 20, -373897302), n = b(n, r, i, a, t[5], 5, -701558691), a = b(a, n, r, i, t[10], 9, 38016083), i = b(i, a, n, r, t[15], 14, -660478335), r = b(r, i, a, n, t[4], 20, -405537848), n = b(n, r, i, a, t[9], 5, 568446438), a = b(a, n, r, i, t[14], 9, -1019803690), i = b(i, a, n, r, t[3], 14, -187363961), r = b(r, i, a, n, t[8], 20, 1163531501), n = b(n, r, i, a, t[13], 5, -1444681467), a = b(a, n, r, i, t[2], 9, -51403784), i = b(i, a, n, r, t[7], 14, 1735328473), n = g(n, r = b(r, i, a, n, t[12], 20, -1926607734), i, a, t[5], 4, -378558), a = g(a, n, r, i, t[8], 11, -2022574463), i = g(i, a, n, r, t[11], 16, 1839030562), r = g(r, i, a, n, t[14], 23, -35309556), n = g(n, r, i, a, t[1], 4, -1530992060), a = g(a, n, r, i, t[4], 11, 1272893353), i = g(i, a, n, r, t[7], 16, -155497632), r = g(r, i, a, n, t[10], 23, -1094730640), n = g(n, r, i, a, t[13], 4, 681279174), a = g(a, n, r, i, t[0], 11, -358537222), i = g(i, a, n, r, t[3], 16, -722521979), r = g(r, i, a, n, t[6], 23, 76029189), n = g(n, r, i, a, t[9], 4, -640364487), a = g(a, n, r, i, t[12], 11, -421815835), i = g(i, a, n, r, t[15], 16, 530742520), n = v(n, r = g(r, i, a, n, t[2], 23, -995338651), i, a, t[0], 6, -198630844), a = v(a, n, r, i, t[7], 10, 1126891415), i = v(i, a, n, r, t[14], 15, -1416354905), r = v(r, i, a, n, t[5], 21, -57434055), n = v(n, r, i, a, t[12], 6, 1700485571), a = v(a, n, r, i, t[3], 10, -1894986606), i = v(i, a, n, r, t[10], 15, -1051523), r = v(r, i, a, n, t[1], 21, -2054922799), n = v(n, r, i, a, t[8], 6, 1873313359), a = v(a, n, r, i, t[15], 10, -30611744), i = v(i, a, n, r, t[6], 15, -1560198380), r = v(r, i, a, n, t[13], 21, 1309151649), n = v(n, r, i, a, t[4], 6, -145523070), a = v(a, n, r, i, t[11], 10, -1120210379), i = v(i, a, n, r, t[2], 15, 718787259), r = v(r, i, a, n, t[9], 21, -343485551), e[0] = C(n, e[0]), e[1] = C(r, e[1]), e[2] = C(i, e[2]), e[3] = C(a, e[3])
				}

				function _(e, t, n, r, i, a) {
					return t = C(C(t, e), C(r, a)), C(t << i | t >>> 32 - i, n)
				}

				function m(e, t, n, r, i, a, o) {
					return _(t & n | ~t & r, e, t, i, a, o)
				}

				function b(e, t, n, r, i, a, o) {
					return _(t & r | n & ~r, e, t, i, a, o)
				}

				function g(e, t, n, r, i, a, o) {
					return _(t ^ n ^ r, e, t, i, a, o)
				}

				function v(e, t, n, r, i, a, o) {
					return _(n ^ (t | ~r), e, t, i, a, o)
				}

				function y(e) {
					var t, n = e.length,
						r = [1732584193, -271733879, -1732584194, 271733878];
					for (t = 64; t <= e.length; t += 64) p(r, A(e.substring(t - 64, t)));
					e = e.substring(t - 64);
					var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
					if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
						for (p(r, i), t = 0; t < 16; t++) i[t] = 0;
					return i[14] = 8 * n, p(r, i), r
				}

				function A(e) {
					var t, n = [];
					for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
					return n
				}
				l = i.atob.bind(i), f = i.btoa.bind(i);
				var S = "0123456789abcdef".split("");

				function w(e) {
					for (var t = "", n = 0; n < 4; n++) t += S[e >> 8 * n + 4 & 15] + S[e >> 8 * n & 15];
					return t
				}

				function E(e) {
					return String.fromCharCode((255 & e) >> 0, (65280 & e) >> 8, (16711680 & e) >> 16, (4278190080 & e) >> 24)
				}

				function T(e) {
					return y(e).map(E).join("")
				}

				function C(e, t) {
					return e + t & 4294967295
				}
				if ("5d41402abc4b2a76b9719d911017c592" != function(e) {
						for (var t = 0; t < e.length; t++) e[t] = w(e[t]);
						return e.join("")
					}(y("hello"))) {
					function C(e, t) {
						var n = (65535 & e) + (65535 & t);
						return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
					}
				}

				function $(e, t) {
					var n, r, i, a;
					if (e !== n) {
						for (var o = (i = e, a = 1 + (256 / e.length >> 0), new Array(a + 1).join(i)), s = [], u = 0; u < 256; u++) s[u] = u;
						var c = 0;
						for (u = 0; u < 256; u++) {
							var l = s[u];
							c = (c + l + o.charCodeAt(u)) % 256, s[u] = s[c], s[c] = l
						}
						n = e, r = s
					} else s = r;
					var f = t.length,
						d = 0,
						h = 0,
						p = "";
					for (u = 0; u < f; u++) h = (h + (l = s[d = (d + 1) % 256])) % 256, s[d] = s[h], s[h] = l, o = s[(s[d] + s[h]) % 256], p += String.fromCharCode(t.charCodeAt(u) ^ o);
					return p
				}
				var k = {
					print: 4,
					modify: 8,
					copy: 16,
					"annot-forms": 32
				};

				function O(e, t, n, r) {
					this.v = 1, this.r = 2;
					let i = 192;
					e.forEach((function(e) {
						if (void 0 !== k.perm) throw new Error("Invalid permission: " + e);
						i += k[e]
					})), this.padding = "(Â¿N^NuÂŠAd\0NVÃ¿Ãº\b..\0Â¶Ãh>Â€/\fÂ©Ã¾dSiz";
					let a = (t + this.padding).substr(0, 32),
						o = (n + this.padding).substr(0, 32);
					this.O = this.processOwnerPassword(a, o), this.P = -(1 + (255 ^ i)), this.encryptionKey = T(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = $(this.encryptionKey, this.padding)
				}

				function x(e) {
					if ("object" != typeof e) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
					var t = {};
					this.subscribe = function(e, n, r) {
						if (r = r || !1, "string" != typeof e || "function" != typeof n || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
						t.hasOwnProperty(e) || (t[e] = {});
						var i = Math.random().toString(35);
						return t[e][i] = [n, !!r], i
					}, this.unsubscribe = function(e) {
						for (var n in t)
							if (t[n][e]) return delete t[n][e], 0 === Object.keys(t[n]).length && delete t[n], !0;
						return !1
					}, this.publish = function(n) {
						if (t.hasOwnProperty(n)) {
							var r = Array.prototype.slice.call(arguments, 1),
								a = [];
							for (var s in t[n]) {
								var u = t[n][s];
								try {
									u[0].apply(e, r)
								} catch (e) {
									i.console && o.error("jsPDF PubSub Error", e.message, e)
								}
								u[1] && a.push(s)
							}
							a.length && a.forEach(this.unsubscribe)
						}
					}, this.getTopics = function() {
						return t
					}
				}

				function P(e) {
					if (!(this instanceof P)) return new P(e);
					var t = "opacity,stroke-opacity".split(",");
					for (var n in e) e.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = e[n]);
					this.id = "", this.objectNumber = -1
				}

				function M(e, t) {
					this.gState = e, this.matrix = t, this.id = "", this.objectNumber = -1
				}

				function I(e, t, n, r, i) {
					if (!(this instanceof I)) return new I(e, t, n, r, i);
					this.type = "axial" === e ? 2 : 3, this.coords = t, this.colors = n, M.call(this, r, i)
				}

				function L(e, t, n, r, i) {
					if (!(this instanceof L)) return new L(e, t, n, r, i);
					this.boundingBox = e, this.xStep = t, this.yStep = n, this.stream = "", this.cloneIndex = 0, M.call(this, r, i)
				}

				function D(e) {
					var t, n = "string" == typeof arguments[0] ? arguments[0] : "p",
						r = arguments[1],
						a = arguments[2],
						s = arguments[3],
						u = [],
						c = 1,
						l = 16,
						p = "S",
						_ = null;
					"object" == typeof(e = e || {}) && (n = e.orientation, r = e.unit || r, a = e.format || a, s = e.compress || e.compressPdf || s, null !== (_ = e.encryption || null) && (_.userPassword = _.userPassword || "", _.ownerPassword = _.ownerPassword || "", _.userPermissions = _.userPermissions || []), c = "number" == typeof e.userUnit ? Math.abs(e.userUnit) : 1, void 0 !== e.precision && (t = e.precision), void 0 !== e.floatPrecision && (l = e.floatPrecision), p = e.defaultPathOperation || "S"), u = e.filters || (!0 === s ? ["FlateEncode"] : u), r = r || "mm", n = ("" + (n || "P")).toLowerCase();
					var m = e.putOnlyUsedFonts || !1,
						b = {},
						g = {
							internal: {},
							__private__: {}
						};
					g.__private__.PubSub = x;
					var v = "1.3",
						y = g.__private__.getPdfVersion = function() {
							return v
						};
					g.__private__.setPdfVersion = function(e) {
						v = e
					};
					var A = {
						a0: [2383.94, 3370.39],
						a1: [1683.78, 2383.94],
						a2: [1190.55, 1683.78],
						a3: [841.89, 1190.55],
						a4: [595.28, 841.89],
						a5: [419.53, 595.28],
						a6: [297.64, 419.53],
						a7: [209.76, 297.64],
						a8: [147.4, 209.76],
						a9: [104.88, 147.4],
						a10: [73.7, 104.88],
						b0: [2834.65, 4008.19],
						b1: [2004.09, 2834.65],
						b2: [1417.32, 2004.09],
						b3: [1000.63, 1417.32],
						b4: [708.66, 1000.63],
						b5: [498.9, 708.66],
						b6: [354.33, 498.9],
						b7: [249.45, 354.33],
						b8: [175.75, 249.45],
						b9: [124.72, 175.75],
						b10: [87.87, 124.72],
						c0: [2599.37, 3676.54],
						c1: [1836.85, 2599.37],
						c2: [1298.27, 1836.85],
						c3: [918.43, 1298.27],
						c4: [649.13, 918.43],
						c5: [459.21, 649.13],
						c6: [323.15, 459.21],
						c7: [229.61, 323.15],
						c8: [161.57, 229.61],
						c9: [113.39, 161.57],
						c10: [79.37, 113.39],
						dl: [311.81, 623.62],
						letter: [612, 792],
						"government-letter": [576, 756],
						legal: [612, 1008],
						"junior-legal": [576, 360],
						ledger: [1224, 792],
						tabloid: [792, 1224],
						"credit-card": [153, 243]
					};
					g.__private__.getPageFormats = function() {
						return A
					};
					var S = g.__private__.getPageFormat = function(e) {
						return A[e]
					};
					a = a || "a4";
					var w = {
							COMPAT: "compat",
							ADVANCED: "advanced"
						},
						E = w.COMPAT;

					function T() {
						this.saveGraphicsState(), ce(new Ye(Ee, 0, 0, -Ee, 0, Nn() * Ee).toString() + " cm"), this.setFontSize(this.getFontSize() / Ee), p = "n", E = w.ADVANCED
					}

					function C() {
						this.restoreGraphicsState(), p = "S", E = w.COMPAT
					}
					var $ = function(e, t) {
						if ("bold" == e && "normal" == t || "bold" == e && 400 == t || "normal" == e && "italic" == t || "bold" == e && "italic" == t) throw new Error("Invalid Combination of fontweight and fontstyle");
						return t && e !== t && (e = 400 == t ? "italic" == e ? "italic" : "normal" : 700 == t && "italic" !== e ? "bold" : e + "" + t), e
					};
					g.advancedAPI = function(e) {
						var t = E === w.COMPAT;
						return t && T.call(this), "function" != typeof e || (e(this), t && C.call(this)), this
					}, g.compatAPI = function(e) {
						var t = E === w.ADVANCED;
						return t && C.call(this), "function" != typeof e || (e(this), t && T.call(this)), this
					}, g.isAdvancedAPI = function() {
						return E === w.ADVANCED
					};
					var k, M = function(e) {
							if (E !== w.ADVANCED) throw new Error(e + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
						},
						B = g.roundToPrecision = g.__private__.roundToPrecision = function(e, n) {
							var r = t || n;
							if (isNaN(e) || isNaN(r)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
							return e.toFixed(r).replace(/0+$/, "")
						};
					k = g.hpf = g.__private__.hpf = "number" == typeof l ? function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return B(e, l)
					} : "smart" === l ? function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return B(e, e > -1 && e < 1 ? 16 : 5)
					} : function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return B(e, 16)
					};
					var N = g.f2 = g.__private__.f2 = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.f2");
							return B(e, 2)
						},
						R = g.__private__.f3 = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.f3");
							return B(e, 3)
						},
						F = g.scale = g.__private__.scale = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.scale");
							return E === w.COMPAT ? e * Ee : E === w.ADVANCED ? e : void 0
						},
						U = function(e) {
							return E === w.COMPAT ? Nn() - e : E === w.ADVANCED ? e : void 0
						},
						j = function(e) {
							return F(U(e))
						};
					g.__private__.setPrecision = g.setPrecision = function(e) {
						"number" == typeof parseInt(e, 10) && (t = parseInt(e, 10))
					};
					var H, Y = "00000000000000000000000000000000",
						V = g.__private__.getFileId = function() {
							return Y
						},
						z = g.__private__.setFileId = function(e) {
							return Y = void 0 !== e && /^[a-fA-F0-9]{32}$/.test(e) ? e.toUpperCase() : Y.split("").map((function() {
								return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
							})).join(""), null !== _ && (zt = new O(_.userPermissions, _.userPassword, _.ownerPassword, Y)), Y
						};
					g.setFileId = function(e) {
						return z(e), this
					}, g.getFileId = function() {
						return V()
					};
					var Q = g.__private__.convertDateToPDFDate = function(e) {
							var t = e.getTimezoneOffset(),
								n = t < 0 ? "+" : "-",
								r = Math.floor(Math.abs(t / 60)),
								i = Math.abs(t % 60),
								a = [n, X(r), "'", X(i), "'"].join("");
							return ["D:", e.getFullYear(), X(e.getMonth() + 1), X(e.getDate()), X(e.getHours()), X(e.getMinutes()), X(e.getSeconds()), a].join("")
						},
						G = g.__private__.convertPDFDateToDate = function(e) {
							var t = parseInt(e.substr(2, 4), 10),
								n = parseInt(e.substr(6, 2), 10) - 1,
								r = parseInt(e.substr(8, 2), 10),
								i = parseInt(e.substr(10, 2), 10),
								a = parseInt(e.substr(12, 2), 10),
								o = parseInt(e.substr(14, 2), 10);
							return new Date(t, n, r, i, a, o, 0)
						},
						q = g.__private__.setCreationDate = function(e) {
							var t;
							if (void 0 === e && (e = new Date), e instanceof Date) t = Q(e);
							else {
								if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(e)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
								t = e
							}
							return H = t
						},
						W = g.__private__.getCreationDate = function(e) {
							var t = H;
							return "jsDate" === e && (t = G(H)), t
						};
					g.setCreationDate = function(e) {
						return q(e), this
					}, g.getCreationDate = function(e) {
						return W(e)
					};
					var K, X = g.__private__.padd2 = function(e) {
							return ("0" + parseInt(e)).slice(-2)
						},
						J = g.__private__.padd2Hex = function(e) {
							return ("00" + (e = e.toString())).substr(e.length)
						},
						Z = 0,
						ee = [],
						te = [],
						ne = 0,
						re = [],
						ie = [],
						ae = !1,
						oe = te,
						se = function() {
							Z = 0, ne = 0, te = [], ee = [], re = [], Xe = qe(), Je = qe()
						};
					g.__private__.setCustomOutputDestination = function(e) {
						ae = !0, oe = e
					};
					var ue = function(e) {
						ae || (oe = e)
					};
					g.__private__.resetCustomOutputDestination = function() {
						ae = !1, oe = te
					};
					var ce = g.__private__.out = function(e) {
							return e = e.toString(), ne += e.length + 1, oe.push(e), oe
						},
						le = g.__private__.write = function(e) {
							return ce(1 === arguments.length ? e.toString() : Array.prototype.join.call(arguments, " "))
						},
						fe = g.__private__.getArrayBuffer = function(e) {
							for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n); t--;) r[t] = e.charCodeAt(t);
							return n
						},
						de = [
							["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
							["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
							["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
							["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
							["Courier", "courier", "normal", "WinAnsiEncoding"],
							["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
							["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
							["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
							["Times-Roman", "times", "normal", "WinAnsiEncoding"],
							["Times-Bold", "times", "bold", "WinAnsiEncoding"],
							["Times-Italic", "times", "italic", "WinAnsiEncoding"],
							["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
							["ZapfDingbats", "zapfdingbats", "normal", null],
							["Symbol", "symbol", "normal", null]
						];
					g.__private__.getStandardFonts = function() {
						return de
					};
					var he = e.fontSize || 16;
					g.__private__.setFontSize = g.setFontSize = function(e) {
						return he = E === w.ADVANCED ? e / Ee : e, this
					};
					var pe, _e = g.__private__.getFontSize = g.getFontSize = function() {
							return E === w.COMPAT ? he : he * Ee
						},
						me = e.R2L || !1;
					g.__private__.setR2L = g.setR2L = function(e) {
						return me = e, this
					}, g.__private__.getR2L = g.getR2L = function() {
						return me
					};
					var be, ge = g.__private__.setZoomMode = function(e) {
						if (/^\d*\.?\d*%$/.test(e)) pe = e;
						else if (isNaN(e)) {
							if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(e)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + e + '" is not recognized.');
							pe = e
						} else pe = parseInt(e, 10)
					};
					g.__private__.getZoomMode = function() {
						return pe
					};
					var ve, ye = g.__private__.setPageMode = function(e) {
						if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(e)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + e + '" is not recognized.');
						be = e
					};
					g.__private__.getPageMode = function() {
						return be
					};
					var Ae = g.__private__.setLayoutMode = function(e) {
						if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(e)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + e + '" is not recognized.');
						ve = e
					};
					g.__private__.getLayoutMode = function() {
						return ve
					}, g.__private__.setDisplayMode = g.setDisplayMode = function(e, t, n) {
						return ge(e), Ae(t), ye(n), this
					};
					var Se = {
						title: "",
						subject: "",
						author: "",
						keywords: "",
						creator: ""
					};
					g.__private__.getDocumentProperty = function(e) {
						if (-1 === Object.keys(Se).indexOf(e)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
						return Se[e]
					}, g.__private__.getDocumentProperties = function() {
						return Se
					}, g.__private__.setDocumentProperties = g.setProperties = g.setDocumentProperties = function(e) {
						for (var t in Se) Se.hasOwnProperty(t) && e[t] && (Se[t] = e[t]);
						return this
					}, g.__private__.setDocumentProperty = function(e, t) {
						if (-1 === Object.keys(Se).indexOf(e)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
						return Se[e] = t
					};
					var we, Ee, Te, Ce, $e, ke = {},
						Oe = {},
						xe = [],
						Pe = {},
						Me = {},
						Ie = {},
						Le = {},
						De = null,
						Be = 0,
						Ne = [],
						Re = new x(g),
						Fe = e.hotfixes || [],
						Ue = {},
						je = {},
						He = [],
						Ye = function(e, t, n, r, i, a) {
							if (!(this instanceof Ye)) return new Ye(e, t, n, r, i, a);
							isNaN(e) && (e = 1), isNaN(t) && (t = 0), isNaN(n) && (n = 0), isNaN(r) && (r = 1), isNaN(i) && (i = 0), isNaN(a) && (a = 0), this._matrix = [e, t, n, r, i, a]
						};
					Object.defineProperty(Ye.prototype, "sx", {
						get: function() {
							return this._matrix[0]
						},
						set: function(e) {
							this._matrix[0] = e
						}
					}), Object.defineProperty(Ye.prototype, "shy", {
						get: function() {
							return this._matrix[1]
						},
						set: function(e) {
							this._matrix[1] = e
						}
					}), Object.defineProperty(Ye.prototype, "shx", {
						get: function() {
							return this._matrix[2]
						},
						set: function(e) {
							this._matrix[2] = e
						}
					}), Object.defineProperty(Ye.prototype, "sy", {
						get: function() {
							return this._matrix[3]
						},
						set: function(e) {
							this._matrix[3] = e
						}
					}), Object.defineProperty(Ye.prototype, "tx", {
						get: function() {
							return this._matrix[4]
						},
						set: function(e) {
							this._matrix[4] = e
						}
					}), Object.defineProperty(Ye.prototype, "ty", {
						get: function() {
							return this._matrix[5]
						},
						set: function(e) {
							this._matrix[5] = e
						}
					}), Object.defineProperty(Ye.prototype, "a", {
						get: function() {
							return this._matrix[0]
						},
						set: function(e) {
							this._matrix[0] = e
						}
					}), Object.defineProperty(Ye.prototype, "b", {
						get: function() {
							return this._matrix[1]
						},
						set: function(e) {
							this._matrix[1] = e
						}
					}), Object.defineProperty(Ye.prototype, "c", {
						get: function() {
							return this._matrix[2]
						},
						set: function(e) {
							this._matrix[2] = e
						}
					}), Object.defineProperty(Ye.prototype, "d", {
						get: function() {
							return this._matrix[3]
						},
						set: function(e) {
							this._matrix[3] = e
						}
					}), Object.defineProperty(Ye.prototype, "e", {
						get: function() {
							return this._matrix[4]
						},
						set: function(e) {
							this._matrix[4] = e
						}
					}), Object.defineProperty(Ye.prototype, "f", {
						get: function() {
							return this._matrix[5]
						},
						set: function(e) {
							this._matrix[5] = e
						}
					}), Object.defineProperty(Ye.prototype, "rotation", {
						get: function() {
							return Math.atan2(this.shx, this.sx)
						}
					}), Object.defineProperty(Ye.prototype, "scaleX", {
						get: function() {
							return this.decompose().scale.sx
						}
					}), Object.defineProperty(Ye.prototype, "scaleY", {
						get: function() {
							return this.decompose().scale.sy
						}
					}), Object.defineProperty(Ye.prototype, "isIdentity", {
						get: function() {
							return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
						}
					}), Ye.prototype.join = function(e) {
						return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(k).join(e)
					}, Ye.prototype.multiply = function(e) {
						var t = e.sx * this.sx + e.shy * this.shx,
							n = e.sx * this.shy + e.shy * this.sy,
							r = e.shx * this.sx + e.sy * this.shx,
							i = e.shx * this.shy + e.sy * this.sy,
							a = e.tx * this.sx + e.ty * this.shx + this.tx,
							o = e.tx * this.shy + e.ty * this.sy + this.ty;
						return new Ye(t, n, r, i, a, o)
					}, Ye.prototype.decompose = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty,
							o = Math.sqrt(e * e + t * t),
							s = (e /= o) * n + (t /= o) * r;
						n -= e * s, r -= t * s;
						var u = Math.sqrt(n * n + r * r);
						return s /= u, e * (r /= u) < t * (n /= u) && (e = -e, t = -t, s = -s, o = -o), {
							scale: new Ye(o, 0, 0, u, 0, 0),
							translate: new Ye(1, 0, 0, 1, i, a),
							rotate: new Ye(e, t, -t, e, 0, 0),
							skew: new Ye(1, 0, s, 1, 0, 0)
						}
					}, Ye.prototype.toString = function(e) {
						return this.join(" ")
					}, Ye.prototype.inversed = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty,
							o = 1 / (e * r - t * n),
							s = r * o,
							u = -t * o,
							c = -n * o,
							l = e * o;
						return new Ye(s, u, c, l, -s * i - c * a, -u * i - l * a)
					}, Ye.prototype.applyToPoint = function(e) {
						var t = e.x * this.sx + e.y * this.shx + this.tx,
							n = e.x * this.shy + e.y * this.sy + this.ty;
						return new On(t, n)
					}, Ye.prototype.applyToRectangle = function(e) {
						var t = this.applyToPoint(e),
							n = this.applyToPoint(new On(e.x + e.w, e.y + e.h));
						return new xn(t.x, t.y, n.x - t.x, n.y - t.y)
					}, Ye.prototype.clone = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty;
						return new Ye(e, t, n, r, i, a)
					}, g.Matrix = Ye;
					var Ve = g.matrixMult = function(e, t) {
							return t.multiply(e)
						},
						ze = new Ye(1, 0, 0, 1, 0, 0);
					g.unitMatrix = g.identityMatrix = ze;
					var Qe = function(e, t) {
						if (!Me[e]) {
							var n = (t instanceof I ? "Sh" : "P") + (Object.keys(Pe).length + 1).toString(10);
							t.id = n, Me[e] = n, Pe[n] = t, Re.publish("addPattern", t)
						}
					};
					g.ShadingPattern = I, g.TilingPattern = L, g.addShadingPattern = function(e, t) {
						return M("addShadingPattern()"), Qe(e, t), this
					}, g.beginTilingPattern = function(e) {
						M("beginTilingPattern()"), Mn(e.boundingBox[0], e.boundingBox[1], e.boundingBox[2] - e.boundingBox[0], e.boundingBox[3] - e.boundingBox[1], e.matrix)
					}, g.endTilingPattern = function(e, t) {
						M("endTilingPattern()"), t.stream = ie[K].join("\n"), Qe(e, t), Re.publish("endTilingPattern", t), He.pop().restore()
					};
					var Ge = g.__private__.newObject = function() {
							var e = qe();
							return We(e, !0), e
						},
						qe = g.__private__.newObjectDeferred = function() {
							return Z++, ee[Z] = function() {
								return ne
							}, Z
						},
						We = function(e, t) {
							return t = "boolean" == typeof t && t, ee[e] = ne, t && ce(e + " 0 obj"), e
						},
						Ke = g.__private__.newAdditionalObject = function() {
							var e = {
								objId: qe(),
								content: ""
							};
							return re.push(e), e
						},
						Xe = qe(),
						Je = qe(),
						Ze = g.__private__.decodeColorString = function(e) {
							var t = e.split(" ");
							if (2 !== t.length || "g" !== t[1] && "G" !== t[1]) 5 !== t.length || "k" !== t[4] && "K" !== t[4] || (t = [(1 - t[0]) * (1 - t[3]), (1 - t[1]) * (1 - t[3]), (1 - t[2]) * (1 - t[3]), "r"]);
							else {
								var n = parseFloat(t[0]);
								t = [n, n, n, "r"]
							}
							for (var r = "#", i = 0; i < 3; i++) r += ("0" + Math.floor(255 * parseFloat(t[i])).toString(16)).slice(-2);
							return r
						},
						et = g.__private__.encodeColorString = function(e) {
							var t;
							"string" == typeof e && (e = {
								ch1: e
							});
							var n = e.ch1,
								r = e.ch2,
								i = e.ch3,
								a = e.ch4,
								o = "draw" === e.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
							if ("string" == typeof n && "#" !== n.charAt(0)) {
								var s = new h(n);
								if (s.ok) n = s.toHex();
								else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.')
							}
							if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
								var u = parseInt(n.substr(1), 16);
								n = u >> 16 & 255, r = u >> 8 & 255, i = 255 & u
							}
							if (void 0 === r || void 0 === a && n === r && r === i)
								if ("string" == typeof n) t = n + " " + o[0];
								else switch (e.precision) {
									case 2:
										t = N(n / 255) + " " + o[0];
										break;
									case 3:
									default:
										t = R(n / 255) + " " + o[0]
								} else if (void 0 === a || "object" == typeof a) {
									if (a && !isNaN(a.a) && 0 === a.a) return ["1.", "1.", "1.", o[1]].join(" ");
									if ("string" == typeof n) t = [n, r, i, o[1]].join(" ");
									else switch (e.precision) {
										case 2:
											t = [N(n / 255), N(r / 255), N(i / 255), o[1]].join(" ");
											break;
										default:
										case 3:
											t = [R(n / 255), R(r / 255), R(i / 255), o[1]].join(" ")
									}
								} else if ("string" == typeof n) t = [n, r, i, a, o[2]].join(" ");
							else switch (e.precision) {
								case 2:
									t = [N(n), N(r), N(i), N(a), o[2]].join(" ");
									break;
								case 3:
								default:
									t = [R(n), R(r), R(i), R(a), o[2]].join(" ")
							}
							return t
						},
						tt = g.__private__.getFilters = function() {
							return u
						},
						nt = g.__private__.putStream = function(e) {
							var t = (e = e || {}).data || "",
								n = e.filters || tt(),
								r = e.alreadyAppliedFilters || [],
								i = e.addLength1 || !1,
								a = t.length,
								o = e.objectId,
								s = function(e) {
									return e
								};
							if (null !== _ && void 0 === o) throw new Error("ObjectId must be passed to putStream for file encryption");
							null !== _ && (s = zt.encryptor(o, 0));
							var u = {};
							!0 === n && (n = ["FlateEncode"]);
							var c = e.additionalKeyValues || [],
								l = (u = void 0 !== D.API.processDataByFilters ? D.API.processDataByFilters(t, n) : {
									data: t,
									reverseChain: []
								}).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
							if (0 !== u.data.length && (c.push({
									key: "Length",
									value: u.data.length
								}), !0 === i && c.push({
									key: "Length1",
									value: a
								})), 0 != l.length)
								if (l.split("/").length - 1 == 1) c.push({
									key: "Filter",
									value: l
								});
								else {
									c.push({
										key: "Filter",
										value: "[" + l + "]"
									});
									for (var f = 0; f < c.length; f += 1)
										if ("DecodeParms" === c[f].key) {
											for (var d = [], h = 0; h < u.reverseChain.split("/").length - 1; h += 1) d.push("null");
											d.push(c[f].value), c[f].value = "[" + d.join(" ") + "]"
										}
								} ce("<<");
							for (var p = 0; p < c.length; p++) ce("/" + c[p].key + " " + c[p].value);
							ce(">>"), 0 !== u.data.length && (ce("stream"), ce(s(u.data)), ce("endstream"))
						},
						rt = g.__private__.putPage = function(e) {
							var t = e.number,
								n = e.data,
								r = e.objId,
								i = e.contentsObjId;
							We(r, !0), ce("<</Type /Page"), ce("/Parent " + e.rootDictionaryObjId + " 0 R"), ce("/Resources " + e.resourceDictionaryObjId + " 0 R"), ce("/MediaBox [" + parseFloat(k(e.mediaBox.bottomLeftX)) + " " + parseFloat(k(e.mediaBox.bottomLeftY)) + " " + k(e.mediaBox.topRightX) + " " + k(e.mediaBox.topRightY) + "]"), null !== e.cropBox && ce("/CropBox [" + k(e.cropBox.bottomLeftX) + " " + k(e.cropBox.bottomLeftY) + " " + k(e.cropBox.topRightX) + " " + k(e.cropBox.topRightY) + "]"), null !== e.bleedBox && ce("/BleedBox [" + k(e.bleedBox.bottomLeftX) + " " + k(e.bleedBox.bottomLeftY) + " " + k(e.bleedBox.topRightX) + " " + k(e.bleedBox.topRightY) + "]"), null !== e.trimBox && ce("/TrimBox [" + k(e.trimBox.bottomLeftX) + " " + k(e.trimBox.bottomLeftY) + " " + k(e.trimBox.topRightX) + " " + k(e.trimBox.topRightY) + "]"), null !== e.artBox && ce("/ArtBox [" + k(e.artBox.bottomLeftX) + " " + k(e.artBox.bottomLeftY) + " " + k(e.artBox.topRightX) + " " + k(e.artBox.topRightY) + "]"), "number" == typeof e.userUnit && 1 !== e.userUnit && ce("/UserUnit " + e.userUnit), Re.publish("putPage", {
								objId: r,
								pageContext: Ne[t],
								pageNumber: t,
								page: n
							}), ce("/Contents " + i + " 0 R"), ce(">>"), ce("endobj");
							var a = n.join("\n");
							return E === w.ADVANCED && (a += "\nQ"), We(i, !0), nt({
								data: a,
								filters: tt(),
								objectId: i
							}), ce("endobj"), r
						},
						it = g.__private__.putPages = function() {
							var e, t, n = [];
							for (e = 1; e <= Be; e++) Ne[e].objId = qe(), Ne[e].contentsObjId = qe();
							for (e = 1; e <= Be; e++) n.push(rt({
								number: e,
								data: ie[e],
								objId: Ne[e].objId,
								contentsObjId: Ne[e].contentsObjId,
								mediaBox: Ne[e].mediaBox,
								cropBox: Ne[e].cropBox,
								bleedBox: Ne[e].bleedBox,
								trimBox: Ne[e].trimBox,
								artBox: Ne[e].artBox,
								userUnit: Ne[e].userUnit,
								rootDictionaryObjId: Xe,
								resourceDictionaryObjId: Je
							}));
							We(Xe, !0), ce("<</Type /Pages");
							var r = "/Kids [";
							for (t = 0; t < Be; t++) r += n[t] + " 0 R ";
							ce(r + "]"), ce("/Count " + Be), ce(">>"), ce("endobj"), Re.publish("postPutPages")
						},
						at = function(e) {
							var t = function(e, t) {
								return -1 !== e.indexOf(" ") ? "(" + Ot(e, t) + ")" : Ot(e, t)
							};
							Re.publish("putFont", {
								font: e,
								out: ce,
								newObject: Ge,
								putStream: nt,
								pdfEscapeWithNeededParanthesis: t
							}), !0 !== e.isAlreadyPutted && (e.objectNumber = Ge(), ce("<<"), ce("/Type /Font"), ce("/BaseFont /" + t(e.postScriptName)), ce("/Subtype /Type1"), "string" == typeof e.encoding && ce("/Encoding /" + e.encoding), ce("/FirstChar 32"), ce("/LastChar 255"), ce(">>"), ce("endobj"))
						},
						ot = function() {
							for (var e in ke) ke.hasOwnProperty(e) && (!1 === m || !0 === m && b.hasOwnProperty(e)) && at(ke[e])
						},
						st = function(e) {
							e.objectNumber = Ge();
							var t = [];
							t.push({
								key: "Type",
								value: "/XObject"
							}), t.push({
								key: "Subtype",
								value: "/Form"
							}), t.push({
								key: "BBox",
								value: "[" + [k(e.x), k(e.y), k(e.x + e.width), k(e.y + e.height)].join(" ") + "]"
							}), t.push({
								key: "Matrix",
								value: "[" + e.matrix.toString() + "]"
							});
							var n = e.pages[1].join("\n");
							nt({
								data: n,
								additionalKeyValues: t,
								objectId: e.objectNumber
							}), ce("endobj")
						},
						ut = function() {
							for (var e in Ue) Ue.hasOwnProperty(e) && st(Ue[e])
						},
						ct = function(e, t) {
							var n, r = [],
								i = 1 / (t - 1);
							for (n = 0; n < 1; n += i) r.push(n);
							if (r.push(1), 0 != e[0].offset) {
								var a = {
									offset: 0,
									color: e[0].color
								};
								e.unshift(a)
							}
							if (1 != e[e.length - 1].offset) {
								var o = {
									offset: 1,
									color: e[e.length - 1].color
								};
								e.push(o)
							}
							for (var s = "", u = 0, c = 0; c < r.length; c++) {
								for (n = r[c]; n > e[u + 1].offset;) u++;
								var l = e[u].offset,
									f = (n - l) / (e[u + 1].offset - l),
									d = e[u].color,
									h = e[u + 1].color;
								s += J(Math.round((1 - f) * d[0] + f * h[0]).toString(16)) + J(Math.round((1 - f) * d[1] + f * h[1]).toString(16)) + J(Math.round((1 - f) * d[2] + f * h[2]).toString(16))
							}
							return s.trim()
						},
						lt = function(e, t) {
							t || (t = 21);
							var n = Ge(),
								r = ct(e.colors, t),
								i = [];
							i.push({
								key: "FunctionType",
								value: "0"
							}), i.push({
								key: "Domain",
								value: "[0.0 1.0]"
							}), i.push({
								key: "Size",
								value: "[" + t + "]"
							}), i.push({
								key: "BitsPerSample",
								value: "8"
							}), i.push({
								key: "Range",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), i.push({
								key: "Decode",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), nt({
								data: r,
								additionalKeyValues: i,
								alreadyAppliedFilters: ["/ASCIIHexDecode"],
								objectId: n
							}), ce("endobj"), e.objectNumber = Ge(), ce("<< /ShadingType " + e.type), ce("/ColorSpace /DeviceRGB");
							var a = "/Coords [" + k(parseFloat(e.coords[0])) + " " + k(parseFloat(e.coords[1])) + " ";
							2 === e.type ? a += k(parseFloat(e.coords[2])) + " " + k(parseFloat(e.coords[3])) : a += k(parseFloat(e.coords[2])) + " " + k(parseFloat(e.coords[3])) + " " + k(parseFloat(e.coords[4])) + " " + k(parseFloat(e.coords[5])), ce(a += "]"), e.matrix && ce("/Matrix [" + e.matrix.toString() + "]"), ce("/Function " + n + " 0 R"), ce("/Extend [true true]"), ce(">>"), ce("endobj")
						},
						ft = function(e, t) {
							var n = qe(),
								r = Ge();
							t.push({
								resourcesOid: n,
								objectOid: r
							}), e.objectNumber = r;
							var i = [];
							i.push({
								key: "Type",
								value: "/Pattern"
							}), i.push({
								key: "PatternType",
								value: "1"
							}), i.push({
								key: "PaintType",
								value: "1"
							}), i.push({
								key: "TilingType",
								value: "1"
							}), i.push({
								key: "BBox",
								value: "[" + e.boundingBox.map(k).join(" ") + "]"
							}), i.push({
								key: "XStep",
								value: k(e.xStep)
							}), i.push({
								key: "YStep",
								value: k(e.yStep)
							}), i.push({
								key: "Resources",
								value: n + " 0 R"
							}), e.matrix && i.push({
								key: "Matrix",
								value: "[" + e.matrix.toString() + "]"
							}), nt({
								data: e.stream,
								additionalKeyValues: i,
								objectId: e.objectNumber
							}), ce("endobj")
						},
						dt = function(e) {
							var t;
							for (t in Pe) Pe.hasOwnProperty(t) && (Pe[t] instanceof I ? lt(Pe[t]) : Pe[t] instanceof L && ft(Pe[t], e))
						},
						ht = function(e) {
							for (var t in e.objectNumber = Ge(), ce("<<"), e) switch (t) {
								case "opacity":
									ce("/ca " + N(e[t]));
									break;
								case "stroke-opacity":
									ce("/CA " + N(e[t]))
							}
							ce(">>"), ce("endobj")
						},
						pt = function() {
							var e;
							for (e in Ie) Ie.hasOwnProperty(e) && ht(Ie[e])
						},
						_t = function() {
							for (var e in ce("/XObject <<"), Ue) Ue.hasOwnProperty(e) && Ue[e].objectNumber >= 0 && ce("/" + e + " " + Ue[e].objectNumber + " 0 R");
							Re.publish("putXobjectDict"), ce(">>")
						},
						mt = function() {
							zt.oid = Ge(), ce("<<"), ce("/Filter /Standard"), ce("/V " + zt.v), ce("/R " + zt.r), ce("/U <" + zt.toHexString(zt.U) + ">"), ce("/O <" + zt.toHexString(zt.O) + ">"), ce("/P " + zt.P), ce(">>"), ce("endobj")
						},
						bt = function() {
							for (var e in ce("/Font <<"), ke) ke.hasOwnProperty(e) && (!1 === m || !0 === m && b.hasOwnProperty(e)) && ce("/" + e + " " + ke[e].objectNumber + " 0 R");
							ce(">>")
						},
						gt = function() {
							if (Object.keys(Pe).length > 0) {
								for (var e in ce("/Shading <<"), Pe) Pe.hasOwnProperty(e) && Pe[e] instanceof I && Pe[e].objectNumber >= 0 && ce("/" + e + " " + Pe[e].objectNumber + " 0 R");
								Re.publish("putShadingPatternDict"), ce(">>")
							}
						},
						vt = function(e) {
							if (Object.keys(Pe).length > 0) {
								for (var t in ce("/Pattern <<"), Pe) Pe.hasOwnProperty(t) && Pe[t] instanceof g.TilingPattern && Pe[t].objectNumber >= 0 && Pe[t].objectNumber < e && ce("/" + t + " " + Pe[t].objectNumber + " 0 R");
								Re.publish("putTilingPatternDict"), ce(">>")
							}
						},
						yt = function() {
							if (Object.keys(Ie).length > 0) {
								var e;
								for (e in ce("/ExtGState <<"), Ie) Ie.hasOwnProperty(e) && Ie[e].objectNumber >= 0 && ce("/" + e + " " + Ie[e].objectNumber + " 0 R");
								Re.publish("putGStateDict"), ce(">>")
							}
						},
						At = function(e) {
							We(e.resourcesOid, !0), ce("<<"), ce("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), bt(), gt(), vt(e.objectOid), yt(), _t(), ce(">>"), ce("endobj")
						},
						St = function() {
							var e = [];
							ot(), pt(), ut(), dt(e), Re.publish("putResources"), e.forEach(At), At({
								resourcesOid: Je,
								objectOid: Number.MAX_SAFE_INTEGER
							}), Re.publish("postPutResources")
						},
						wt = function() {
							Re.publish("putAdditionalObjects");
							for (var e = 0; e < re.length; e++) {
								var t = re[e];
								We(t.objId, !0), ce(t.content), ce("endobj")
							}
							Re.publish("postPutAdditionalObjects")
						},
						Et = function(e) {
							Oe[e.fontName] = Oe[e.fontName] || {}, Oe[e.fontName][e.fontStyle] = e.id
						},
						Tt = function(e, t, n, r, i) {
							var a = {
								id: "F" + (Object.keys(ke).length + 1).toString(10),
								postScriptName: e,
								fontName: t,
								fontStyle: n,
								encoding: r,
								isStandardFont: i || !1,
								metadata: {}
							};
							return Re.publish("addFont", {
								font: a,
								instance: this
							}), ke[a.id] = a, Et(a), a.id
						},
						Ct = function(e) {
							for (var t = 0, n = de.length; t < n; t++) {
								var r = Tt.call(this, e[t][0], e[t][1], e[t][2], de[t][3], !0);
								!1 === m && (b[r] = !0);
								var i = e[t][0].split("-");
								Et({
									id: r,
									fontName: i[0],
									fontStyle: i[1] || ""
								})
							}
							Re.publish("addFonts", {
								fonts: ke,
								dictionary: Oe
							})
						},
						$t = function(e) {
							return e.foo = function() {
								try {
									return e.apply(this, arguments)
								} catch (e) {
									var t = e.stack || "";
									~t.indexOf(" at ") && (t = t.split(" at ")[1]);
									var n = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + e.message;
									if (!i.console) throw new Error(n);
									i.console.error(n, e), i.alert && alert(n)
								}
							}, e.foo.bar = e, e.foo
						},
						kt = function(e, t) {
							var n, r, i, a, o, s, u, c, l;
							if (i = (t = t || {}).sourceEncoding || "Unicode", o = t.outputEncoding, (t.autoencode || o) && ke[we].metadata && ke[we].metadata[i] && ke[we].metadata[i].encoding && (a = ke[we].metadata[i].encoding, !o && ke[we].encoding && (o = ke[we].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
								for (u = !1, s = [], n = 0, r = e.length; n < r; n++)(c = o[e.charCodeAt(n)]) ? s.push(String.fromCharCode(c)) : s.push(e[n]), s[n].charCodeAt(0) >> 8 && (u = !0);
								e = s.join("")
							}
							for (n = e.length; void 0 === u && 0 !== n;) e.charCodeAt(n - 1) >> 8 && (u = !0), n--;
							if (!u) return e;
							for (s = t.noBOM ? [] : [254, 255], n = 0, r = e.length; n < r; n++) {
								if ((l = (c = e.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + e + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
								s.push(l), s.push(c - (l << 8))
							}
							return String.fromCharCode.apply(void 0, s)
						},
						Ot = g.__private__.pdfEscape = g.pdfEscape = function(e, t) {
							return kt(e, t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
						},
						xt = g.__private__.beginPage = function(e) {
							ie[++Be] = [], Ne[Be] = {
								objId: 0,
								contentsObjId: 0,
								userUnit: Number(c),
								artBox: null,
								bleedBox: null,
								cropBox: null,
								trimBox: null,
								mediaBox: {
									bottomLeftX: 0,
									bottomLeftY: 0,
									topRightX: Number(e[0]),
									topRightY: Number(e[1])
								}
							}, It(Be), ue(ie[K])
						},
						Pt = function(e, t) {
							var r, i, s;
							switch (n = t || n, "string" == typeof e && (r = S(e.toLowerCase()), Array.isArray(r) && (i = r[0], s = r[1])), Array.isArray(e) && (i = e[0] * Ee, s = e[1] * Ee), isNaN(i) && (i = a[0], s = a[1]), (i > 14400 || s > 14400) && (o.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), i = Math.min(14400, i), s = Math.min(14400, s)), a = [i, s], n.substr(0, 1)) {
								case "l":
									s > i && (a = [s, i]);
									break;
								case "p":
									i > s && (a = [s, i])
							}
							xt(a), dn(fn), ce(yn), 0 !== Cn && ce(Cn + " J"), 0 !== $n && ce($n + " j"), Re.publish("addPage", {
								pageNumber: Be
							})
						},
						Mt = function(e) {
							e > 0 && e <= Be && (ie.splice(e, 1), Ne.splice(e, 1), Be--, K > Be && (K = Be), this.setPage(K))
						},
						It = function(e) {
							e > 0 && e <= Be && (K = e)
						},
						Lt = g.__private__.getNumberOfPages = g.getNumberOfPages = function() {
							return ie.length - 1
						},
						Dt = function(e, t, n) {
							var r, i = void 0;
							return n = n || {}, e = void 0 !== e ? e : ke[we].fontName, t = void 0 !== t ? t : ke[we].fontStyle, r = e.toLowerCase(), void 0 !== Oe[r] && void 0 !== Oe[r][t] ? i = Oe[r][t] : void 0 !== Oe[e] && void 0 !== Oe[e][t] ? i = Oe[e][t] : !1 === n.disableWarning && o.warn("Unable to look up font label for font '" + e + "', '" + t + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = Oe.times[t]) && (i = Oe.times.normal), i
						},
						Bt = g.__private__.putInfo = function() {
							var e = Ge(),
								t = function(e) {
									return e
								};
							for (var n in null !== _ && (t = zt.encryptor(e, 0)), ce("<<"), ce("/Producer (" + Ot(t("jsPDF " + D.version)) + ")"), Se) Se.hasOwnProperty(n) && Se[n] && ce("/" + n.substr(0, 1).toUpperCase() + n.substr(1) + " (" + Ot(t(Se[n])) + ")");
							ce("/CreationDate (" + Ot(t(H)) + ")"), ce(">>"), ce("endobj")
						},
						Nt = g.__private__.putCatalog = function(e) {
							var t = (e = e || {}).rootDictionaryObjId || Xe;
							switch (Ge(), ce("<<"), ce("/Type /Catalog"), ce("/Pages " + t + " 0 R"), pe || (pe = "fullwidth"), pe) {
								case "fullwidth":
									ce("/OpenAction [3 0 R /FitH null]");
									break;
								case "fullheight":
									ce("/OpenAction [3 0 R /FitV null]");
									break;
								case "fullpage":
									ce("/OpenAction [3 0 R /Fit]");
									break;
								case "original":
									ce("/OpenAction [3 0 R /XYZ null null 1]");
									break;
								default:
									var n = "" + pe;
									"%" === n.substr(n.length - 1) && (pe = parseInt(pe) / 100), "number" == typeof pe && ce("/OpenAction [3 0 R /XYZ null null " + N(pe) + "]")
							}
							switch (ve || (ve = "continuous"), ve) {
								case "continuous":
									ce("/PageLayout /OneColumn");
									break;
								case "single":
									ce("/PageLayout /SinglePage");
									break;
								case "two":
								case "twoleft":
									ce("/PageLayout /TwoColumnLeft");
									break;
								case "tworight":
									ce("/PageLayout /TwoColumnRight")
							}
							be && ce("/PageMode /" + be), Re.publish("putCatalog"), ce(">>"), ce("endobj")
						},
						Rt = g.__private__.putTrailer = function() {
							ce("trailer"), ce("<<"), ce("/Size " + (Z + 1)), ce("/Root " + Z + " 0 R"), ce("/Info " + (Z - 1) + " 0 R"), null !== _ && ce("/Encrypt " + zt.oid + " 0 R"), ce("/ID [ <" + Y + "> <" + Y + "> ]"), ce(">>")
						},
						Ft = g.__private__.putHeader = function() {
							ce("%PDF-" + v), ce("%ÂºÃŸÂ¬Ã ")
						},
						Ut = g.__private__.putXRef = function() {
							var e = "0000000000";
							ce("xref"), ce("0 " + (Z + 1)), ce("0000000000 65535 f ");
							for (var t = 1; t <= Z; t++) "function" == typeof ee[t] ? ce((e + ee[t]()).slice(-10) + " 00000 n ") : void 0 !== ee[t] ? ce((e + ee[t]).slice(-10) + " 00000 n ") : ce("0000000000 00000 n ")
						},
						jt = g.__private__.buildDocument = function() {
							se(), ue(te), Re.publish("buildDocument"), Ft(), it(), wt(), St(), null !== _ && mt(), Bt(), Nt();
							var e = ne;
							return Ut(), Rt(), ce("startxref"), ce("" + e), ce("%%EOF"), ue(ie[K]), te.join("\n")
						},
						Ht = g.__private__.getBlob = function(e) {
							return new Blob([fe(e)], {
								type: "application/pdf"
							})
						},
						Yt = g.output = g.__private__.output = $t((function(e, t) {
							switch ("string" == typeof(t = t || {}) ? t = {
								filename: t
							} : t.filename = t.filename || "generated.pdf", e) {
								case void 0:
									return jt();
								case "save":
									g.save(t.filename);
									break;
								case "arraybuffer":
									return fe(jt());
								case "blob":
									return Ht(jt());
								case "bloburi":
								case "bloburl":
									if (void 0 !== i.URL && "function" == typeof i.URL.createObjectURL) return i.URL && i.URL.createObjectURL(Ht(jt())) || void 0;
									o.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
									break;
								case "datauristring":
								case "dataurlstring":
									var n = "",
										r = jt();
									try {
										n = f(r)
									} catch (e) {
										n = f(unescape(encodeURIComponent(r)))
									}
									return "data:application/pdf;filename=" + t.filename + ";base64," + n;
								case "pdfobjectnewwindow":
									if ("[object Window]" === Object.prototype.toString.call(i)) {
										var a = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + (t.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") + '"><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(t) + ");<\/script></body></html>",
											s = i.open();
										return null !== s && s.document.write(a), s
									}
									throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
								case "pdfjsnewwindow":
									if ("[object Window]" === Object.prototype.toString.call(i)) {
										var u = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (t.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + t.filename + '" width="500px" height="400px" /></body></html>',
											c = i.open();
										if (null !== c) {
											c.document.write(u);
											var l = this;
											c.document.documentElement.querySelector("#pdfViewer").onload = function() {
												c.document.title = t.filename, c.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(l.output("bloburl"))
											}
										}
										return c
									}
									throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
								case "dataurlnewwindow":
									if ("[object Window]" !== Object.prototype.toString.call(i)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
									var d = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", t) + '"></iframe></body></html>',
										h = i.open();
									if (null !== h && (h.document.write(d), h.document.title = t.filename), h || "undefined" == typeof safari) return h;
									break;
								case "datauri":
								case "dataurl":
									return i.document.location.href = this.output("datauristring", t);
								default:
									return null
							}
						})),
						Vt = function(e) {
							return !0 === Array.isArray(Fe) && Fe.indexOf(e) > -1
						};
					switch (r) {
						case "pt":
							Ee = 1;
							break;
						case "mm":
							Ee = 72 / 25.4;
							break;
						case "cm":
							Ee = 72 / 2.54;
							break;
						case "in":
							Ee = 72;
							break;
						case "px":
							Ee = 1 == Vt("px_scaling") ? .75 : 96 / 72;
							break;
						case "pc":
						case "em":
							Ee = 12;
							break;
						case "ex":
							Ee = 6;
							break;
						default:
							throw new Error("Invalid unit: " + r)
					}
					var zt = null;
					q(), z();
					var Qt = function(e) {
							return null !== _ ? zt.encryptor(e, 0) : function(e) {
								return e
							}
						},
						Gt = g.__private__.getPageInfo = g.getPageInfo = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
							return {
								objId: Ne[e].objId,
								pageNumber: e,
								pageContext: Ne[e]
							}
						},
						qt = g.__private__.getPageInfoByObjId = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
							for (var t in Ne)
								if (Ne[t].objId === e) break;
							return Gt(t)
						},
						Wt = g.__private__.getCurrentPageInfo = g.getCurrentPageInfo = function() {
							return {
								objId: Ne[K].objId,
								pageNumber: K,
								pageContext: Ne[K]
							}
						};
					g.addPage = function() {
						return Pt.apply(this, arguments), this
					}, g.setPage = function() {
						return It.apply(this, arguments), ue.call(this, ie[K]), this
					}, g.insertPage = function(e) {
						return this.addPage(), this.movePage(K, e), this
					}, g.movePage = function(e, t) {
						var n, r;
						if (e > t) {
							n = ie[e], r = Ne[e];
							for (var i = e; i > t; i--) ie[i] = ie[i - 1], Ne[i] = Ne[i - 1];
							ie[t] = n, Ne[t] = r, this.setPage(t)
						} else if (e < t) {
							n = ie[e], r = Ne[e];
							for (var a = e; a < t; a++) ie[a] = ie[a + 1], Ne[a] = Ne[a + 1];
							ie[t] = n, Ne[t] = r, this.setPage(t)
						}
						return this
					}, g.deletePage = function() {
						return Mt.apply(this, arguments), this
					}, g.__private__.text = g.text = function(e, t, n, r, i) {
						var a, o, s, u, c, l, f, d, h = (r = r || {}).scope || this;
						if ("number" == typeof e && "number" == typeof t && ("string" == typeof n || Array.isArray(n))) {
							var p = n;
							n = t, t = e, e = p
						}
						if (arguments[3] instanceof Ye == 0 ? (s = arguments[4], u = arguments[5], "object" == typeof(f = arguments[3]) && null !== f || ("string" == typeof s && (u = s, s = null), "string" == typeof f && (u = f, f = null), "number" == typeof f && (s = f, f = null), r = {
								flags: f,
								angle: s,
								align: u
							})) : (M("The transform parameter of text() with a Matrix value"), d = i), isNaN(t) || isNaN(n) || null == e) throw new Error("Invalid arguments passed to jsPDF.text");
						if (0 === e.length) return h;
						var _ = "",
							m = !1,
							g = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : ln,
							v = h.internal.scaleFactor;

						function y(e) {
							return e = e.split("\t").join(Array(r.TabLen || 9).join(" ")), Ot(e, f)
						}

						function A(e) {
							for (var t, n = e.concat(), r = [], i = n.length; i--;) "string" == typeof(t = n.shift()) ? r.push(t) : Array.isArray(e) && (1 === t.length || void 0 === t[1] && void 0 === t[2]) ? r.push(t[0]) : r.push([t[0], t[1], t[2]]);
							return r
						}

						function S(e, t) {
							var n;
							if ("string" == typeof e) n = t(e)[0];
							else if (Array.isArray(e)) {
								for (var r, i, a = e.concat(), o = [], s = a.length; s--;) "string" == typeof(r = a.shift()) ? o.push(t(r)[0]) : Array.isArray(r) && "string" == typeof r[0] && (i = t(r[0], r[1], r[2]), o.push([i[0], i[1], i[2]]));
								n = o
							}
							return n
						}
						var T = !1,
							C = !0;
						if ("string" == typeof e) T = !0;
						else if (Array.isArray(e)) {
							var $ = e.concat();
							o = [];
							for (var O, x = $.length; x--;)("string" != typeof(O = $.shift()) || Array.isArray(O) && "string" != typeof O[0]) && (C = !1);
							T = C
						}
						if (!1 === T) throw new Error('Type of text must be string or Array. "' + e + '" is not recognized.');
						"string" == typeof e && (e = e.match(/[\r?\n]/) ? e.split(/\r\n|\r|\n/g) : [e]);
						var P = he / h.internal.scaleFactor,
							I = P * (ln - 1);
						switch (r.baseline) {
							case "bottom":
								n -= I;
								break;
							case "top":
								n += P - I;
								break;
							case "hanging":
								n += P - 2 * I;
								break;
							case "middle":
								n += P / 2 - I
						}
						if ((l = r.maxWidth || 0) > 0 && ("string" == typeof e ? e = h.splitTextToSize(e, l) : "[object Array]" === Object.prototype.toString.call(e) && (e = e.reduce((function(e, t) {
								return e.concat(h.splitTextToSize(t, l))
							}), []))), a = {
								text: e,
								x: t,
								y: n,
								options: r,
								mutex: {
									pdfEscape: Ot,
									activeFontKey: we,
									fonts: ke,
									activeFontSize: he
								}
							}, Re.publish("preProcessText", a), e = a.text, s = (r = a.options).angle, d instanceof Ye == 0 && s && "number" == typeof s) {
							s *= Math.PI / 180, 0 === r.rotationDirection && (s = -s), E === w.ADVANCED && (s = -s);
							var L = Math.cos(s),
								D = Math.sin(s);
							d = new Ye(L, D, -D, L, 0, 0)
						} else s && s instanceof Ye && (d = s);
						E !== w.ADVANCED || d || (d = ze), void 0 !== (c = r.charSpace || En) && (_ += k(F(c)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), r.lang;
						var B = -1,
							N = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
							R = h.internal.getCurrentPageInfo().pageContext;
						switch (N) {
							case 0:
							case !1:
							case "fill":
								B = 0;
								break;
							case 1:
							case !0:
							case "stroke":
								B = 1;
								break;
							case 2:
							case "fillThenStroke":
								B = 2;
								break;
							case 3:
							case "invisible":
								B = 3;
								break;
							case 4:
							case "fillAndAddForClipping":
								B = 4;
								break;
							case 5:
							case "strokeAndAddPathForClipping":
								B = 5;
								break;
							case 6:
							case "fillThenStrokeAndAddToPathForClipping":
								B = 6;
								break;
							case 7:
							case "addToPathForClipping":
								B = 7
						}
						var U = void 0 !== R.usedRenderingMode ? R.usedRenderingMode : -1; - 1 !== B ? _ += B + " Tr\n" : -1 !== U && (_ += "0 Tr\n"), -1 !== B && (R.usedRenderingMode = B), u = r.align || "left";
						var j, H = he * g,
							Y = h.internal.pageSize.getWidth(),
							V = ke[we];
						c = r.charSpace || En, l = r.maxWidth || 0, f = Object.assign({
							autoencode: !0,
							noBOM: !0
						}, r.flags);
						var z = [];
						if ("[object Array]" === Object.prototype.toString.call(e)) {
							var Q;
							o = A(e), "left" !== u && (j = o.map((function(e) {
								return h.getStringUnitWidth(e, {
									font: V,
									charSpace: c,
									fontSize: he,
									doKerning: !1
								}) * he / v
							})));
							var G, q = 0;
							if ("right" === u) {
								t -= j[0], e = [], x = o.length;
								for (var W = 0; W < x; W++) 0 === W ? (G = mn(t), Q = bn(n)) : (G = F(q - j[W]), Q = -H), e.push([o[W], G, Q]), q = j[W]
							} else if ("center" === u) {
								t -= j[0] / 2, e = [], x = o.length;
								for (var K = 0; K < x; K++) 0 === K ? (G = mn(t), Q = bn(n)) : (G = F((q - j[K]) / 2), Q = -H), e.push([o[K], G, Q]), q = j[K]
							} else if ("left" === u) {
								e = [], x = o.length;
								for (var X = 0; X < x; X++) e.push(o[X])
							} else {
								if ("justify" !== u) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
								e = [], x = o.length, l = 0 !== l ? l : Y;
								for (var J = 0; J < x; J++) Q = 0 === J ? bn(n) : -H, G = 0 === J ? mn(t) : 0, J < x - 1 && z.push(k(F((l - j[J]) / (o[J].split(" ").length - 1)))), e.push([o[J], G, Q])
							}
						}
						var Z = "boolean" == typeof r.R2L ? r.R2L : me;
						!0 === Z && (e = S(e, (function(e, t, n) {
							return [e.split("").reverse().join(""), t, n]
						}))), a = {
							text: e,
							x: t,
							y: n,
							options: r,
							mutex: {
								pdfEscape: Ot,
								activeFontKey: we,
								fonts: ke,
								activeFontSize: he
							}
						}, Re.publish("postProcessText", a), e = a.text, m = a.mutex.isHex || !1;
						var ee = ke[we].encoding;
						"WinAnsiEncoding" !== ee && "StandardEncoding" !== ee || (e = S(e, (function(e, t, n) {
							return [y(e), t, n]
						}))), o = A(e), e = [];
						for (var te, ne, re, ie = 0, ae = 1, oe = Array.isArray(o[0]) ? ae : ie, se = "", ue = function(e, t, n) {
								var i = "";
								return n instanceof Ye ? (n = "number" == typeof r.angle ? Ve(n, new Ye(1, 0, 0, 1, e, t)) : Ve(new Ye(1, 0, 0, 1, e, t), n), E === w.ADVANCED && (n = Ve(new Ye(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = k(e) + " " + k(t) + " Td\n", i
							}, le = 0; le < o.length; le++) {
							switch (se = "", oe) {
								case ae:
									re = (m ? "<" : "(") + o[le][0] + (m ? ">" : ")"), te = parseFloat(o[le][1]), ne = parseFloat(o[le][2]);
									break;
								case ie:
									re = (m ? "<" : "(") + o[le] + (m ? ">" : ")"), te = mn(t), ne = bn(n)
							}
							void 0 !== z && void 0 !== z[le] && (se = z[le] + " Tw\n"), 0 === le ? e.push(se + ue(te, ne, d) + re) : oe === ie ? e.push(se + re) : oe === ae && e.push(se + ue(te, ne, d) + re)
						}
						e = oe === ie ? e.join(" Tj\nT* ") : e.join(" Tj\n"), e += " Tj\n";
						var fe = "BT\n/";
						return fe += we + " " + he + " Tf\n", fe += k(he * g) + " TL\n", fe += Sn + "\n", fe += _, fe += e, ce(fe += "ET"), b[we] = !0, h
					};
					var Kt = g.__private__.clip = g.clip = function(e) {
						return ce("evenodd" === e ? "W*" : "W"), this
					};
					g.clipEvenOdd = function() {
						return Kt("evenodd")
					}, g.__private__.discardPath = g.discardPath = function() {
						return ce("n"), this
					};
					var Xt = g.__private__.isValidStyle = function(e) {
						var t = !1;
						return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(e) && (t = !0), t
					};
					g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function(e) {
						return Xt(e) && (p = e), this
					};
					var Jt = g.__private__.getStyle = g.getStyle = function(e) {
							var t = p;
							switch (e) {
								case "D":
								case "S":
									t = "S";
									break;
								case "F":
									t = "f";
									break;
								case "FD":
								case "DF":
									t = "B";
									break;
								case "f":
								case "f*":
								case "B":
								case "B*":
									t = e
							}
							return t
						},
						Zt = g.close = function() {
							return ce("h"), this
						};
					g.stroke = function() {
						return ce("S"), this
					}, g.fill = function(e) {
						return en("f", e), this
					}, g.fillEvenOdd = function(e) {
						return en("f*", e), this
					}, g.fillStroke = function(e) {
						return en("B", e), this
					}, g.fillStrokeEvenOdd = function(e) {
						return en("B*", e), this
					};
					var en = function(e, t) {
							"object" == typeof t ? rn(t, e) : ce(e)
						},
						tn = function(e) {
							null === e || E === w.ADVANCED && void 0 === e || (e = Jt(e), ce(e))
						};

					function nn(e, t, n, r, i) {
						var a = new L(t || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
						a.stream = this.stream;
						var o = e + "$$" + this.cloneIndex++ + "$$";
						return Qe(o, a), a
					}
					var rn = function(e, t) {
							var n = Me[e.key],
								r = Pe[n];
							if (r instanceof I) ce("q"), ce(an(t)), r.gState && g.setGState(r.gState), ce(e.matrix.toString() + " cm"), ce("/" + n + " sh"), ce("Q");
							else if (r instanceof L) {
								var i = new Ye(1, 0, 0, -1, 0, Nn());
								e.matrix && (i = i.multiply(e.matrix || ze), n = nn.call(r, e.key, e.boundingBox, e.xStep, e.yStep, i).id), ce("q"), ce("/Pattern cs"), ce("/" + n + " scn"), r.gState && g.setGState(r.gState), ce(t), ce("Q")
							}
						},
						an = function(e) {
							switch (e) {
								case "f":
								case "F":
									return "W n";
								case "f*":
									return "W* n";
								case "B":
									return "W S";
								case "B*":
									return "W* S";
								case "S":
									return "W S";
								case "n":
									return "W n"
							}
						},
						on = g.moveTo = function(e, t) {
							return ce(k(F(e)) + " " + k(j(t)) + " m"), this
						},
						sn = g.lineTo = function(e, t) {
							return ce(k(F(e)) + " " + k(j(t)) + " l"), this
						},
						un = g.curveTo = function(e, t, n, r, i, a) {
							return ce([k(F(e)), k(j(t)), k(F(n)), k(j(r)), k(F(i)), k(j(a)), "c"].join(" ")), this
						};
					g.__private__.line = g.line = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.line");
						return E === w.COMPAT ? this.lines([
							[n - e, r - t]
						], e, t, [1, 1], i || "S") : this.lines([
							[n - e, r - t]
						], e, t, [1, 1]).stroke()
					}, g.__private__.lines = g.lines = function(e, t, n, r, i, a) {
						var o, s, u, c, l, f, d, h, p, _, m, b;
						if ("number" == typeof e && (b = n, n = t, t = e, e = b), r = r || [1, 1], a = a || !1, isNaN(t) || isNaN(n) || !Array.isArray(e) || !Array.isArray(r) || !Xt(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines");
						for (on(t, n), o = r[0], s = r[1], c = e.length, _ = t, m = n, u = 0; u < c; u++) 2 === (l = e[u]).length ? (_ = l[0] * o + _, m = l[1] * s + m, sn(_, m)) : (f = l[0] * o + _, d = l[1] * s + m, h = l[2] * o + _, p = l[3] * s + m, _ = l[4] * o + _, m = l[5] * s + m, un(f, d, h, p, _, m));
						return a && Zt(), tn(i), this
					}, g.path = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t],
								r = n.c;
							switch (n.op) {
								case "m":
									on(r[0], r[1]);
									break;
								case "l":
									sn(r[0], r[1]);
									break;
								case "c":
									un.apply(this, r);
									break;
								case "h":
									Zt()
							}
						}
						return this
					}, g.__private__.rect = g.rect = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
						return E === w.COMPAT && (r = -r), ce([k(F(e)), k(j(t)), k(F(n)), k(F(r)), "re"].join(" ")), tn(i), this
					}, g.__private__.triangle = g.triangle = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !Xt(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
						return this.lines([
							[n - e, r - t],
							[i - n, a - r],
							[e - i, t - a]
						], e, t, [1, 1], o, !0), this
					}, g.__private__.roundedRect = g.roundedRect = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !Xt(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
						var s = 4 / 3 * (Math.SQRT2 - 1);
						return i = Math.min(i, .5 * n), a = Math.min(a, .5 * r), this.lines([
							[n - 2 * i, 0],
							[i * s, 0, i, a - a * s, i, a],
							[0, r - 2 * a],
							[0, a * s, -i * s, a, -i, a],
							[2 * i - n, 0],
							[-i * s, 0, -i, -a * s, -i, -a],
							[0, 2 * a - r],
							[0, -a * s, i * s, -a, i, -a]
						], e + i, t, [1, 1], o, !0), this
					}, g.__private__.ellipse = g.ellipse = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
						var a = 4 / 3 * (Math.SQRT2 - 1) * n,
							o = 4 / 3 * (Math.SQRT2 - 1) * r;
						return on(e + n, t), un(e + n, t - o, e + a, t - r, e, t - r), un(e - a, t - r, e - n, t - o, e - n, t), un(e - n, t + o, e - a, t + r, e, t + r), un(e + a, t + r, e + n, t + o, e + n, t), tn(i), this
					}, g.__private__.circle = g.circle = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || !Xt(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
						return this.ellipse(e, t, n, n, r)
					}, g.setFont = function(e, t, n) {
						return n && (t = $(t, n)), we = Dt(e, t, {
							disableWarning: !1
						}), this
					};
					var cn = g.__private__.getFont = g.getFont = function() {
						return ke[Dt.apply(g, arguments)]
					};
					g.__private__.getFontList = g.getFontList = function() {
						var e, t, n = {};
						for (e in Oe)
							if (Oe.hasOwnProperty(e))
								for (t in n[e] = [], Oe[e]) Oe[e].hasOwnProperty(t) && n[e].push(t);
						return n
					}, g.addFont = function(e, t, n, r, i) {
						var a = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
						return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (n = $(n, r)), i = i || "Identity-H", Tt.call(this, e, t, n, i)
					};
					var ln, fn = e.lineWidth || .200025,
						dn = g.__private__.setLineWidth = g.setLineWidth = function(e) {
							return ce(k(F(e)) + " w"), this
						};
					g.__private__.setLineDash = D.API.setLineDash = D.API.setLineDashPattern = function(e, t) {
						if (e = e || [], t = t || 0, isNaN(t) || !Array.isArray(e)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
						return e = e.map((function(e) {
							return k(F(e))
						})).join(" "), t = k(F(t)), ce("[" + e + "] " + t + " d"), this
					};
					var hn = g.__private__.getLineHeight = g.getLineHeight = function() {
						return he * ln
					};
					g.__private__.getLineHeight = g.getLineHeight = function() {
						return he * ln
					};
					var pn = g.__private__.setLineHeightFactor = g.setLineHeightFactor = function(e) {
							return "number" == typeof(e = e || 1.15) && (ln = e), this
						},
						_n = g.__private__.getLineHeightFactor = g.getLineHeightFactor = function() {
							return ln
						};
					pn(e.lineHeight);
					var mn = g.__private__.getHorizontalCoordinate = function(e) {
							return F(e)
						},
						bn = g.__private__.getVerticalCoordinate = function(e) {
							return E === w.ADVANCED ? e : Ne[K].mediaBox.topRightY - Ne[K].mediaBox.bottomLeftY - F(e)
						},
						gn = g.__private__.getHorizontalCoordinateString = g.getHorizontalCoordinateString = function(e) {
							return k(mn(e))
						},
						vn = g.__private__.getVerticalCoordinateString = g.getVerticalCoordinateString = function(e) {
							return k(bn(e))
						},
						yn = e.strokeColor || "0 G";
					g.__private__.getStrokeColor = g.getDrawColor = function() {
						return Ze(yn)
					}, g.__private__.setStrokeColor = g.setDrawColor = function(e, t, n, r) {
						return yn = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "draw",
							precision: 2
						}), ce(yn), this
					};
					var An = e.fillColor || "0 g";
					g.__private__.getFillColor = g.getFillColor = function() {
						return Ze(An)
					}, g.__private__.setFillColor = g.setFillColor = function(e, t, n, r) {
						return An = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "fill",
							precision: 2
						}), ce(An), this
					};
					var Sn = e.textColor || "0 g",
						wn = g.__private__.getTextColor = g.getTextColor = function() {
							return Ze(Sn)
						};
					g.__private__.setTextColor = g.setTextColor = function(e, t, n, r) {
						return Sn = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "text",
							precision: 3
						}), this
					};
					var En = e.charSpace,
						Tn = g.__private__.getCharSpace = g.getCharSpace = function() {
							return parseFloat(En || 0)
						};
					g.__private__.setCharSpace = g.setCharSpace = function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
						return En = e, this
					};
					var Cn = 0;
					g.CapJoinStyles = {
						0: 0,
						butt: 0,
						but: 0,
						miter: 0,
						1: 1,
						round: 1,
						rounded: 1,
						circle: 1,
						2: 2,
						projecting: 2,
						project: 2,
						square: 2,
						bevel: 2
					}, g.__private__.setLineCap = g.setLineCap = function(e) {
						var t = g.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line cap style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return Cn = t, ce(t + " J"), this
					};
					var $n = 0;
					g.__private__.setLineJoin = g.setLineJoin = function(e) {
						var t = g.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line join style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return $n = t, ce(t + " j"), this
					}, g.__private__.setLineMiterLimit = g.__private__.setMiterLimit = g.setLineMiterLimit = g.setMiterLimit = function(e) {
						if (e = e || 0, isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
						return ce(k(F(e)) + " M"), this
					}, g.GState = P, g.setGState = function(e) {
						(e = "string" == typeof e ? Ie[Le[e]] : kn(null, e)).equals(De) || (ce("/" + e.id + " gs"), De = e)
					};
					var kn = function(e, t) {
						if (!e || !Le[e]) {
							var n = !1;
							for (var r in Ie)
								if (Ie.hasOwnProperty(r) && Ie[r].equals(t)) {
									n = !0;
									break
								} if (n) t = Ie[r];
							else {
								var i = "GS" + (Object.keys(Ie).length + 1).toString(10);
								Ie[i] = t, t.id = i
							}
							return e && (Le[e] = t.id), Re.publish("addGState", t), t
						}
					};
					g.addGState = function(e, t) {
						return kn(e, t), this
					}, g.saveGraphicsState = function() {
						return ce("q"), xe.push({
							key: we,
							size: he,
							color: Sn
						}), this
					}, g.restoreGraphicsState = function() {
						ce("Q");
						var e = xe.pop();
						return we = e.key, he = e.size, Sn = e.color, De = null, this
					}, g.setCurrentTransformationMatrix = function(e) {
						return ce(e.toString() + " cm"), this
					}, g.comment = function(e) {
						return ce("#" + e), this
					};
					var On = function(e, t) {
							var n = e || 0;
							Object.defineProperty(this, "x", {
								enumerable: !0,
								get: function() {
									return n
								},
								set: function(e) {
									isNaN(e) || (n = parseFloat(e))
								}
							});
							var r = t || 0;
							Object.defineProperty(this, "y", {
								enumerable: !0,
								get: function() {
									return r
								},
								set: function(e) {
									isNaN(e) || (r = parseFloat(e))
								}
							});
							var i = "pt";
							return Object.defineProperty(this, "type", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									i = e.toString()
								}
							}), this
						},
						xn = function(e, t, n, r) {
							On.call(this, e, t), this.type = "rect";
							var i = n || 0;
							Object.defineProperty(this, "w", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									isNaN(e) || (i = parseFloat(e))
								}
							});
							var a = r || 0;
							return Object.defineProperty(this, "h", {
								enumerable: !0,
								get: function() {
									return a
								},
								set: function(e) {
									isNaN(e) || (a = parseFloat(e))
								}
							}), this
						},
						Pn = function() {
							this.page = Be, this.currentPage = K, this.pages = ie.slice(0), this.pagesContext = Ne.slice(0), this.x = Te, this.y = Ce, this.matrix = $e, this.width = Dn(K), this.height = Nn(K), this.outputDestination = oe, this.id = "", this.objectNumber = -1
						};
					Pn.prototype.restore = function() {
						Be = this.page, K = this.currentPage, Ne = this.pagesContext, ie = this.pages, Te = this.x, Ce = this.y, $e = this.matrix, Bn(K, this.width), Rn(K, this.height), oe = this.outputDestination
					};
					var Mn = function(e, t, n, r, i) {
							He.push(new Pn), Be = K = 0, ie = [], Te = e, Ce = t, $e = i, xt([n, r])
						},
						In = function(e) {
							if (!je[e]) {
								var t = new Pn,
									n = "Xo" + (Object.keys(Ue).length + 1).toString(10);
								t.id = n, je[e] = n, Ue[n] = t, Re.publish("addFormObject", t), He.pop().restore()
							}
						};
					for (var Ln in g.beginFormObject = function(e, t, n, r, i) {
							return Mn(e, t, n, r, i), this
						}, g.endFormObject = function(e) {
							return In(e), this
						}, g.doFormObject = function(e, t) {
							var n = Ue[je[e]];
							return ce("q"), ce(t.toString() + " cm"), ce("/" + n.id + " Do"), ce("Q"), this
						}, g.getFormObject = function(e) {
							var t = Ue[je[e]];
							return {
								x: t.x,
								y: t.y,
								width: t.width,
								height: t.height,
								matrix: t.matrix
							}
						}, g.save = function(e, t) {
							return e = e || "generated.pdf", (t = t || {}).returnPromise = t.returnPromise || !1, !1 === t.returnPromise ? (d(Ht(jt()), e), "function" == typeof d.unload && i.setTimeout && setTimeout(d.unload, 911), this) : new Promise((function(t, n) {
								try {
									var r = d(Ht(jt()), e);
									"function" == typeof d.unload && i.setTimeout && setTimeout(d.unload, 911), t(r)
								} catch (e) {
									n(e.message)
								}
							}))
						}, D.API) D.API.hasOwnProperty(Ln) && ("events" === Ln && D.API.events.length ? function(e, t) {
						var n, r, i;
						for (i = t.length - 1; - 1 !== i; i--) n = t[i][0], r = t[i][1], e.subscribe.apply(e, [n].concat("function" == typeof r ? [r] : r))
					}(Re, D.API.events) : g[Ln] = D.API[Ln]);
					var Dn = g.getPageWidth = function(e) {
							return (Ne[e = e || K].mediaBox.topRightX - Ne[e].mediaBox.bottomLeftX) / Ee
						},
						Bn = g.setPageWidth = function(e, t) {
							Ne[e].mediaBox.topRightX = t * Ee + Ne[e].mediaBox.bottomLeftX
						},
						Nn = g.getPageHeight = function(e) {
							return (Ne[e = e || K].mediaBox.topRightY - Ne[e].mediaBox.bottomLeftY) / Ee
						},
						Rn = g.setPageHeight = function(e, t) {
							Ne[e].mediaBox.topRightY = t * Ee + Ne[e].mediaBox.bottomLeftY
						};
					return g.internal = {
						pdfEscape: Ot,
						getStyle: Jt,
						getFont: cn,
						getFontSize: _e,
						getCharSpace: Tn,
						getTextColor: wn,
						getLineHeight: hn,
						getLineHeightFactor: _n,
						write: le,
						getHorizontalCoordinate: mn,
						getVerticalCoordinate: bn,
						getCoordinateString: gn,
						getVerticalCoordinateString: vn,
						collections: {},
						newObject: Ge,
						newAdditionalObject: Ke,
						newObjectDeferred: qe,
						newObjectDeferredBegin: We,
						getFilters: tt,
						putStream: nt,
						events: Re,
						scaleFactor: Ee,
						pageSize: {
							getWidth: function() {
								return Dn(K)
							},
							setWidth: function(e) {
								Bn(K, e)
							},
							getHeight: function() {
								return Nn(K)
							},
							setHeight: function(e) {
								Rn(K, e)
							}
						},
						encryptionOptions: _,
						encryption: zt,
						getEncryptor: Qt,
						output: Yt,
						getNumberOfPages: Lt,
						pages: ie,
						out: ce,
						f2: N,
						f3: R,
						getPageInfo: Gt,
						getPageInfoByObjId: qt,
						getCurrentPageInfo: Wt,
						getPDFVersion: y,
						Point: On,
						Rectangle: xn,
						Matrix: Ye,
						hasHotfix: Vt
					}, Object.defineProperty(g.internal.pageSize, "width", {
						get: function() {
							return Dn(K)
						},
						set: function(e) {
							Bn(K, e)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(g.internal.pageSize, "height", {
						get: function() {
							return Nn(K)
						},
						set: function(e) {
							Rn(K, e)
						},
						enumerable: !0,
						configurable: !0
					}), Ct.call(g, de), we = "F1", Pt(a, n), Re.publish("initialized"), g
				}
				O.prototype.lsbFirstWord = function(e) {
					return String.fromCharCode(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
				}, O.prototype.toHexString = function(e) {
					return e.split("").map((function(e) {
						return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2)
					})).join("")
				}, O.prototype.hexToBytes = function(e) {
					for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
					return t.join("")
				}, O.prototype.processOwnerPassword = function(e, t) {
					return $(T(t).substr(0, 5), e)
				}, O.prototype.encryptor = function(e, t) {
					let n = T(this.encryptionKey + String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
					return function(e) {
						return $(n, e)
					}
				}, P.prototype.equals = function(e) {
					var t, n = "id,objectNumber,equals";
					if (!e || typeof e != typeof this) return !1;
					var r = 0;
					for (t in this)
						if (!(n.indexOf(t) >= 0)) {
							if (this.hasOwnProperty(t) && !e.hasOwnProperty(t)) return !1;
							if (this[t] !== e[t]) return !1;
							r++
						} for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && r--;
					return 0 === r
				}, D.API = {
					events: []
				}, D.version = "2.3.1";
				var B = D.API,
					N = 1,
					R = function(e) {
						return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
					},
					F = function(e) {
						return e.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
					},
					U = function(e) {
						return e.toFixed(2)
					},
					j = function(e) {
						return e.toFixed(5)
					};
				B.__acroform__ = {};
				var H = function(e, t) {
						e.prototype = Object.create(t.prototype), e.prototype.constructor = e
					},
					Y = function(e) {
						return e * N
					},
					V = function(e) {
						var t = new oe,
							n = ye.internal.getHeight(e) || 0,
							r = ye.internal.getWidth(e) || 0;
						return t.BBox = [0, 0, Number(U(r)), Number(U(n))], t
					},
					z = B.__acroform__.setBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
						return e | 1 << t
					},
					Q = B.__acroform__.clearBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
						return e & ~(1 << t)
					},
					G = B.__acroform__.getBit = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
						return 0 == (e & 1 << t) ? 0 : 1
					},
					q = B.__acroform__.getBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
						return G(e, t - 1)
					},
					W = B.__acroform__.setBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
						return z(e, t - 1)
					},
					K = B.__acroform__.clearBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
						return Q(e, t - 1)
					},
					X = B.__acroform__.calculateCoordinates = function(e, t) {
						var n = t.internal.getHorizontalCoordinate,
							r = t.internal.getVerticalCoordinate,
							i = e[0],
							a = e[1],
							o = e[2],
							s = e[3],
							u = {};
						return u.lowerLeft_X = n(i) || 0, u.lowerLeft_Y = r(a + s) || 0, u.upperRight_X = n(i + o) || 0, u.upperRight_Y = r(a) || 0, [Number(U(u.lowerLeft_X)), Number(U(u.lowerLeft_Y)), Number(U(u.upperRight_X)), Number(U(u.upperRight_Y))]
					},
					J = function(e) {
						if (e.appearanceStreamContent) return e.appearanceStreamContent;
						if (e.V || e.DV) {
							var t = [],
								n = e._V || e.DV,
								r = Z(e, n),
								i = e.scope.internal.getFont(e.fontName, e.fontStyle).id;
							t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e.scope.__private__.encodeColorString(e.color)), t.push("/" + i + " " + U(r.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(r.text), t.push("ET"), t.push("Q"), t.push("EMC");
							var a = V(e);
							return a.scope = e.scope, a.stream = t.join("\n"), a
						}
					},
					Z = function(e, t) {
						var n = 0 === e.fontSize ? e.maxFontSize : e.fontSize,
							r = {
								text: "",
								fontSize: ""
							},
							i = (t = ")" == (t = "(" == t.substr(0, 1) ? t.substr(1) : t).substr(t.length - 1) ? t.substr(0, t.length - 1) : t).split(" "),
							a = n,
							o = ye.internal.getHeight(e) || 0;
						o = o < 0 ? -o : o;
						var s = ye.internal.getWidth(e) || 0;
						s = s < 0 ? -s : s;
						var u = function(t, n, r) {
							if (t + 1 < i.length) {
								var a = n + " " + i[t + 1];
								return ee(a, e, r).width <= s - 4
							}
							return !1
						};
						a++;
						e: for (; a > 0;) {
							t = "", a--;
							var c, l, f = ee("3", e, a).height,
								d = e.multiline ? o - a : (o - f) / 2,
								h = d += 2,
								p = 0,
								_ = 0;
							if (a <= 0) {
								t = "(...) Tj\n", t += "% Width of Text: " + ee(t, e, a = 12).width + ", FieldWidth:" + s + "\n";
								break
							}
							var m = "",
								b = 0;
							for (var g in i)
								if (i.hasOwnProperty(g)) {
									m = " " == (m += i[g] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
									var v = parseInt(g),
										y = u(v, m, a),
										A = g >= i.length - 1;
									if (y && !A) {
										m += " ";
										continue
									}
									if (y || A) {
										if (A) _ = v;
										else if (e.multiline && (f + 2) * (b + 2) + 2 > o) continue e
									} else {
										if (!e.multiline) continue e;
										if ((f + 2) * (b + 2) + 2 > o) continue e;
										_ = v
									}
									for (var S = "", w = p; w <= _; w++) S += i[w] + " ";
									switch (S = " " == S.substr(S.length - 1) ? S.substr(0, S.length - 1) : S, l = ee(S, e, a).width, e.textAlign) {
										case "right":
											c = s - l - 2;
											break;
										case "center":
											c = (s - l) / 2;
											break;
										case "left":
										default:
											c = 2
									}
									t += U(c) + " " + U(h) + " Td\n", t += "(" + R(S) + ") Tj\n", t += -U(c) + " 0 Td\n", h = -(a + 2), l = 0, p = _ + 1, b++, m = ""
								} break
						}
						return r.text = t, r.fontSize = a, r
					},
					ee = function(e, t, n) {
						var r = t.scope.internal.getFont(t.fontName, t.fontStyle),
							i = t.scope.getStringUnitWidth(e, {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n);
						return {
							height: t.scope.getStringUnitWidth("3", {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n) * 1.5,
							width: i
						}
					},
					te = {
						fields: [],
						xForms: [],
						acroFormDictionaryRoot: null,
						printedOut: !1,
						internal: null,
						isInitialized: !1
					},
					ne = function(e, t) {
						var n = {
							type: "reference",
							object: e
						};
						void 0 === t.internal.getPageInfo(e.page).pageContext.annotations.find((function(e) {
							return e.type === n.type && e.object === n.object
						})) && t.internal.getPageInfo(e.page).pageContext.annotations.push(n)
					},
					re = B.__acroform__.arrayToPdfArray = function(e, t, n) {
						var r = function(e) {
							return e
						};
						if (Array.isArray(e)) {
							for (var i = "[", a = 0; a < e.length; a++) switch (0 !== a && (i += " "), typeof e[a]) {
								case "boolean":
								case "number":
								case "object":
									i += e[a].toString();
									break;
								case "string":
									"/" !== e[a].substr(0, 1) ? (void 0 !== t && n && (r = n.internal.getEncryptor(t)), i += "(" + R(r(e[a].toString())) + ")") : i += e[a].toString()
							}
							return i + "]"
						}
						throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
					},
					ie = function(e, t, n) {
						var r = function(e) {
							return e
						};
						return void 0 !== t && n && (r = n.internal.getEncryptor(t)), (e = e || "").toString(), "(" + R(r(e)) + ")"
					},
					ae = function() {
						this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
							get: function() {
								if (void 0 === this._objId) {
									if (void 0 === this.scope) return;
									this._objId = this.scope.internal.newObjectDeferred()
								}
								return this._objId
							},
							set: function(e) {
								this._objId = e
							}
						}), Object.defineProperty(this, "scope", {
							value: this._scope,
							writable: !0
						})
					};
				ae.prototype.toString = function() {
					return this.objId + " 0 R"
				}, ae.prototype.putStream = function() {
					var e = this.getKeyValueListForStream();
					this.scope.internal.putStream({
						data: this.stream,
						additionalKeyValues: e,
						objectId: this.objId
					}), this.scope.internal.out("endobj")
				}, ae.prototype.getKeyValueListForStream = function() {
					var e = [],
						t = Object.getOwnPropertyNames(this).filter((function(e) {
							return "content" != e && "appearanceStreamContent" != e && "scope" != e && "objId" != e && "_" != e.substring(0, 1)
						}));
					for (var n in t)
						if (!1 === Object.getOwnPropertyDescriptor(this, t[n]).configurable) {
							var r = t[n],
								i = this[r];
							i && (Array.isArray(i) ? e.push({
								key: r,
								value: re(i, this.objId, this.scope)
							}) : i instanceof ae ? (i.scope = this.scope, e.push({
								key: r,
								value: i.objId + " 0 R"
							})) : "function" != typeof i && e.push({
								key: r,
								value: i
							}))
						} return e
				};
				var oe = function() {
					ae.call(this), Object.defineProperty(this, "Type", {
						value: "/XObject",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "Subtype", {
						value: "/Form",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "FormType", {
						value: 1,
						configurable: !1,
						writable: !0
					});
					var e, t = [];
					Object.defineProperty(this, "BBox", {
						configurable: !1,
						get: function() {
							return t
						},
						set: function(e) {
							t = e
						}
					}), Object.defineProperty(this, "Resources", {
						value: "2 0 R",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "stream", {
						enumerable: !1,
						configurable: !0,
						set: function(t) {
							e = t.trim()
						},
						get: function() {
							return e || null
						}
					})
				};
				H(oe, ae);
				var se = function() {
					ae.call(this);
					var e, t = [];
					Object.defineProperty(this, "Kids", {
						enumerable: !1,
						configurable: !0,
						get: function() {
							return t.length > 0 ? t : void 0
						}
					}), Object.defineProperty(this, "Fields", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return t
						}
					}), Object.defineProperty(this, "DA", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (e) {
								var t = function(e) {
									return e
								};
								return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + R(t(e)) + ")"
							}
						},
						set: function(t) {
							e = t
						}
					})
				};
				H(se, ae);
				var ue = function() {
					ae.call(this);
					var e = 4;
					Object.defineProperty(this, "F", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
							e = t
						}
					}), Object.defineProperty(this, "showWhenPrinted", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(e, 3))
						},
						set: function(t) {
							!0 === Boolean(t) ? this.F = W(e, 3) : this.F = K(e, 3)
						}
					});

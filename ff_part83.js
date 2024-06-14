					})),
					m = _ && !i((function() {
						var t = !1,
							n = /a/;
						return "split" === e && ((n = {}).constructor = {}, n.constructor[u] = function() {
							return n
						}, n.flags = "", n[p] = /./ [p]), n.exec = function() {
							return t = !0, null
						}, n[p](""), !t
					}));
				if (!_ || !m || "replace" === e && (!c || !l || d) || "split" === e && !h) {
					var b = /./ [p],
						g = n(p, "" [e], (function(e, t, n, r, i) {
							return t.exec === o ? _ && !i ? {
								done: !0,
								value: b.call(t, n, r)
							} : {
								done: !0,
								value: e.call(n, t, r)
							} : {
								done: !1
							}
						}), {
							REPLACE_KEEPS_$0: l,
							REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
						}),
						v = g[0],
						y = g[1];
					r(String.prototype, e, v), r(RegExp.prototype, p, 2 == t ? function(e, t) {
						return y.call(e, this, t)
					} : function(e) {
						return y.call(e, this)
					})
				}
				f && s(RegExp.prototype[p], "sham", !0)
			}
		},
		d81d: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("b727").map;
			r({
				target: "Array",
				proto: !0,
				forced: !n("1dde")("map")
			}, {
				map: function(e) {
					return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		},
		d82d: function(e, t, n) {
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
			}), t.SettingsPanelPage = void 0;
			var i = n("fdec"),
				a = n("60b3"),
				o = n("09e6"),
				s = n("8e8b"),
				u = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.settingsPanelPageEvents = {
							onSettingsStateChanged: new o.EventDispatcher,
							onActive: new o.EventDispatcher,
							onInactive: new o.EventDispatcher
						}, n.config = n.mergeConfig(t, {
							cssClass: "ui-settings-panel-page",
							role: "menu"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(n, r) {
						var i = this;
						e.prototype.configure.call(this, n, r);
						for (var a = function() {
								i.onSettingsStateChangedEvent();
								for (var e = null, n = 0, r = i.getItems(); n < r.length; n++) {
									var a = r[n];
									a.getDomElement().removeClass(i.prefixCss(t.CLASS_LAST)), a.isShown() && (e = a)
								}
								e && e.getDomElement().addClass(i.prefixCss(t.CLASS_LAST))
							}, o = 0, s = this.getItems(); o < s.length; o++) {
							s[o].onActiveChanged.subscribe(a)
						}
					}, t.prototype.hasActiveSettings = function() {
						for (var e = 0, t = this.getItems(); e < t.length; e++) {
							if (t[e].isActive()) return !0
						}
						return !1
					}, t.prototype.getItems = function() {
						return this.config.components.filter((function(e) {
							return e instanceof a.SettingsPanelItem
						}))
					}, t.prototype.onSettingsStateChangedEvent = function() {
						this.settingsPanelPageEvents.onSettingsStateChanged.dispatch(this)
					}, Object.defineProperty(t.prototype, "onSettingsStateChanged", {
						get: function() {
							return this.settingsPanelPageEvents.onSettingsStateChanged.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.onActiveEvent = function() {
						var e = this.getItems().filter((function(e) {
							return e.isActive()
						}));
						this.settingsPanelPageEvents.onActive.dispatch(this), !(e.length > 0) || s.BrowserUtils.isIOS || s.BrowserUtils.isMacIntel && s.BrowserUtils.isTouchSupported || e[0].getDomElement().focusToFirstInput()
					}, Object.defineProperty(t.prototype, "onActive", {
						get: function() {
							return this.settingsPanelPageEvents.onActive.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.onInactiveEvent = function() {
						this.settingsPanelPageEvents.onInactive.dispatch(this)
					}, Object.defineProperty(t.prototype, "onInactive", {
						get: function() {
							return this.settingsPanelPageEvents.onInactive.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t.CLASS_LAST = "last", t
				}(i.Container);
			t.SettingsPanelPage = u
		},
		d8f4: function(e, t, n) {
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
			}), t.SeekBarLabel = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("587c"),
				s = n("0c29"),
				u = n("9451"),
				c = n("4344"),
				l = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.appliedMarkerCssClasses = [], n.handleSeekPreview = function(e, t) {
							if (n.player.isLive()) {
								var r = n.player.getMaxTimeShift(),
									i = r - r * (t.position / 100);
								n.setTime(i);
								var a = function(e) {
									var t = n.player.getTimeShift();
									return n.player.getCurrentTime() - t + e
								}(i);
								n.setThumbnail(n.player.getThumbnail(a))
							} else {
								var o = n.player.getDuration() * (t.position / 100);
								n.setTime(o);
								var s = o + c.PlayerUtils.getSeekableRangeStart(n.player, 0);
								n.setThumbnail(n.player.getThumbnail(s))
							}
							if (t.marker ? n.setTitleText(t.marker.marker.title) : n.setTitleText(null), n.appliedMarkerCssClasses.length > 0 && (n.getDomElement().removeClass(n.appliedMarkerCssClasses.join(" ")), n.appliedMarkerCssClasses = []), t.marker) {
								var u = (t.marker.marker.cssClasses || []).map((function(e) {
									return n.prefixCss(e)
								}));
								n.getDomElement().addClass(u.join(" ")), n.appliedMarkerCssClasses = u
							}
						}, n.timeLabel = new a.Label({
							cssClasses: ["seekbar-label-time"]
						}), n.titleLabel = new a.Label({
							cssClasses: ["seekbar-label-title"]
						}), n.thumbnail = new o.Component({
							cssClasses: ["seekbar-thumbnail"],
							role: "img"
						}), n.thumbnailImageLoader = new u.ImageLoader, n.config = n.mergeConfig(t, {
							cssClass: "ui-seekbar-label",
							components: [new i.Container({
								components: [n.thumbnail, new i.Container({
									components: [n.titleLabel, n.timeLabel],
									cssClass: "seekbar-label-metadata"
								})],
								cssClass: "seekbar-label-inner"
							})],
							hidden: !0
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.player = t, this.uiManager = n, n.onSeekPreview.subscribeRateLimited(this.handleSeekPreview, 100);
						var i = function() {
							r.timeFormat = Math.abs(t.isLive() ? t.getMaxTimeShift() : t.getDuration()) >= 3600 ? s.StringUtils.FORMAT_HHMMSS : s.StringUtils.FORMAT_MMSS, r.setTitleText(null), r.setThumbnail(null)
						};
						n.getConfig().events.onUpdated.subscribe(i), i()
					}, t.prototype.setText = function(e) {
						this.timeLabel.setText(e)
					}, t.prototype.setTime = function(e) {
						this.setText(s.StringUtils.secondsToTime(e, this.timeFormat))
					}, t.prototype.setTitleText = function(e) {
						void 0 === e && (e = ""), this.titleLabel.setText(e)
					}, t.prototype.setThumbnail = function(e) {
						var t = this;
						void 0 === e && (e = null);
						var n = this.thumbnail.getDomElement();
						null == e ? n.css({
							"background-image": null,
							display: null,
							width: null,
							height: null
						}) : this.thumbnailImageLoader.load(e.url, (function(r, i, a) {
							void 0 !== e.x ? n.css(t.thumbnailCssSprite(e, i, a)) : n.css(t.thumbnailCssSingleImage(e, i, a))
						}))
					}, t.prototype.thumbnailCssSprite = function(e, t, n) {
						var r = 100 * (t / e.width),
							i = 100 * (n / e.height),
							a = 100 * (e.x / e.width),
							o = 100 * (e.y / e.height),
							s = 1 / e.width * e.height;
						return {
							display: "inherit",
							"background-image": "url(" + e.url + ")",
							"padding-bottom": 100 * s + "%",
							"background-size": r + "% " + i + "%",
							"background-position": "-" + a + "% -" + o + "%"
						}
					}, t.prototype.thumbnailCssSingleImage = function(e, t, n) {
						var r = 1 / t * n;
						return {
							display: "inherit",
							"background-image": "url(" + e.url + ")",
							"padding-bottom": 100 * r + "%",
							"background-size": "100% 100%",
							"background-position": "0 0"
						}
					}, t.prototype.release = function() {
						e.prototype.release.call(this), this.uiManager.onSeekPreview.unsubscribe(this.handleSeekPreview)
					}, t
				}(i.Container);
			t.SeekBarLabel = l
		},
		d925: function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
			}
		},
		d941: function(e, t) {
			e.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
		},
		d967: function(e, t, n) {
			"use strict";

			function r() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}
			n.d(t, "a", (function() {
				return r
			})), n("4ae1")
		},
		d9f8: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("fr-ca", {
					months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
					monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
					monthsParseExact: !0,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Aujourdâ€™hui Ã ] LT",
						nextDay: "[Demain Ã ] LT",
						nextWeek: "dddd [Ã ] LT",
						lastDay: "[Hier Ã ] LT",
						lastWeek: "dddd [dernier Ã ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dans %s",
						past: "il y a %s",
						s: "quelques secondes",
						ss: "%d secondes",
						m: "une minute",
						mm: "%d minutes",
						h: "une heure",
						hh: "%d heures",
						d: "un jour",
						dd: "%d jours",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
					ordinal: function(e, t) {
						switch (t) {
							default:
							case "M":
							case "Q":
							case "D":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					}
				})
			}(n("c1df"))
		},
		da84: function(e, t, n) {
			(function(t) {
				var n = function(e) {
					return e && e.Math == Math && e
				};
				e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
					return this
				}() || Function("return this")()
			}).call(this, n("c8ba"))
		},
		da92: function(e, t, n) {
			const r = n("6a44"),
				i = n("7297"),
				a = n("1e32")("engine.io-client:socket"),
				o = n("2a85"),
				s = n("5317"),
				u = n("4f2a");
			class c extends i {
				constructor(e, t = {}) {
					super(), e && "object" == typeof e && (t = e, e = null), e ? (e = s(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = s(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
						path: "/engine.io",
						agent: !1,
						withCredentials: !1,
						upgrade: !0,
						jsonp: !0,
						timestampParam: "t",
						rememberUpgrade: !1,
						rejectUnauthorized: !0,
						perMessageDeflate: {
							threshold: 1024
						},
						transportOptions: {}
					}, t), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", "string" == typeof this.opts.query && (this.opts.query = u.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (addEventListener("beforeunload", () => {
						this.transport && (this.transport.removeAllListeners(), this.transport.close())
					}, !1), "localhost" !== this.hostname && (this.offlineEventListener = () => {
						this.onClose("transport close")
					}, addEventListener("offline", this.offlineEventListener, !1))), this.open()
				}
				createTransport(e) {
					a('creating transport "%s"', e);
					const t = function(e) {
						const t = {};
						for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
						return t
					}(this.opts.query);
					t.EIO = o.protocol, t.transport = e, this.id && (t.sid = this.id);
					const n = Object.assign({}, this.opts.transportOptions[e], this.opts, {
						query: t,
						socket: this,
						hostname: this.hostname,
						secure: this.secure,
						port: this.port
					});
					return a("options: %j", n), new r[e](n)
				}
				open() {
					let e;
					if (this.opts.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
					else {
						if (0 === this.transports.length) {
							const e = this;
							return void setTimeout((function() {
								e.emit("error", "No transports available")
							}), 0)
						}
						e = this.transports[0]
					}
					this.readyState = "opening";
					try {
						e = this.createTransport(e)
					} catch (e) {
						return a("error while creating transport: %s", e), this.transports.shift(), void this.open()
					}
					e.open(), this.setTransport(e)
				}
				setTransport(e) {
					a("setting transport %s", e.name);
					const t = this;
					this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", (function() {
						t.onDrain()
					})).on("packet", (function(e) {
						t.onPacket(e)
					})).on("error", (function(e) {
						t.onError(e)
					})).on("close", (function() {
						t.onClose("transport close")
					}))
				}
				probe(e) {
					a('probing transport "%s"', e);
					let t = this.createTransport(e, {
							probe: 1
						}),
						n = !1;
					const r = this;

					function i() {
						if (r.onlyBinaryUpgrades) {
							const e = !this.supportsBinary && r.transport.supportsBinary;
							n = n || e
						}
						n || (a('probe transport "%s" opened', e), t.send([{
							type: "ping",
							data: "probe"
						}]), t.once("packet", (function(i) {
							if (!n)
								if ("pong" === i.type && "probe" === i.data) {
									if (a('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) return;
									c.priorWebsocketSuccess = "websocket" === t.name, a('pausing current transport "%s"', r.transport.name), r.transport.pause((function() {
										n || "closed" !== r.readyState && (a("changing transport and sending upgrade packet"), d(), r.setTransport(t), t.send([{
											type: "upgrade"
										}]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
									}))
								} else {
									a('probe transport "%s" failed', e);
									const n = new Error("probe error");
									n.transport = t.name, r.emit("upgradeError", n)
								}
						})))
					}

					function o() {
						n || (n = !0, d(), t.close(), t = null)
					}

					function s(n) {
						const i = new Error("probe error: " + n);
						i.transport = t.name, o(), a('probe transport "%s" failed because of error: %s', e, n), r.emit("upgradeError", i)
					}

					function u() {
						s("transport closed")
					}

					function l() {
						s("socket closed")
					}

					function f(e) {
						t && e.name !== t.name && (a('"%s" works - aborting "%s"', e.name, t.name), o())
					}

					function d() {
						t.removeListener("open", i), t.removeListener("error", s), t.removeListener("close", u), r.removeListener("close", l), r.removeListener("upgrading", f)
					}
					c.priorWebsocketSuccess = !1, t.once("open", i), t.once("error", s), t.once("close", u), this.once("close", l), this.once("upgrading", f), t.open()
				}
				onOpen() {
					if (a("socket open"), this.readyState = "open", c.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
						a("starting upgrade probes");
						let e = 0;
						const t = this.upgrades.length;
						for (; e < t; e++) this.probe(this.upgrades[e])
					}
				}
				onPacket(e) {
					if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
						case "open":
							this.onHandshake(JSON.parse(e.data));
							break;
						case "ping":
							this.resetPingTimeout(), this.sendPacket("pong"), this.emit("pong");
							break;
						case "error":
							const t = new Error("server error");
							t.code = e.data, this.onError(t);
							break;
						case "message":
							this.emit("data", e.data), this.emit("message", e.data)
					} else a('packet received with socket readyState "%s"', this.readyState)
				}
				onHandshake(e) {
					this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
				}
				resetPingTimeout() {
					clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout(() => {
						this.onClose("ping timeout")
					}, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
				}
				onDrain() {
					this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
				}
				flush() {
					"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
				}
				write(e, t, n) {
					return this.sendPacket("message", e, t, n), this
				}
				send(e, t, n) {
					return this.sendPacket("message", e, t, n), this
				}
				sendPacket(e, t, n, r) {
					if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" === this.readyState || "closed" === this.readyState) return;
					(n = n || {}).compress = !1 !== n.compress;
					const i = {
						type: e,
						data: t,
						options: n
					};
					this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
				}
				close() {
					const e = this;

					function t() {
						e.onClose("forced close"), a("socket closing - telling transport to close"), e.transport.close()
					}

					function n() {
						e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
					}

					function r() {
						e.once("upgrade", n), e.once("upgradeError", n)
					}
					return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function() {
						this.upgrading ? r() : t()
					})) : this.upgrading ? r() : t()), this
				}
				onError(e) {
					a("socket error %j", e), c.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
				}
				onClose(e, t) {
					if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
						a('socket close with reason: "%s"', e);
						const n = this;
						clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
					}
				}
				filterUpgrades(e) {
					const t = [];
					let n = 0;
					const r = e.length;
					for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
					return t
				}
			}
			c.priorWebsocketSuccess = !1, c.protocol = o.protocol, e.exports = c
		},
		db29: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
					n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
					r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
					i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
				e.defineLocale("nl-be", {
					months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
					monthsShort: function(e, r) {
						return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: i,
					monthsShortRegex: i,
					monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
					monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
					monthsParse: r,
					longMonthsParse: r,
					shortMonthsParse: r,
					weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
					weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
					weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[vandaag om] LT",
						nextDay: "[morgen om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[gisteren om] LT",
						lastWeek: "[afgelopen] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "over %s",
						past: "%s geleden",
						s: "een paar seconden",
						ss: "%d seconden",
						m: "Ã©Ã©n minuut",
						mm: "%d minuten",
						h: "Ã©Ã©n uur",
						hh: "%d uur",
						d: "Ã©Ã©n dag",
						dd: "%d dagen",
						M: "Ã©Ã©n maand",
						MM: "%d maanden",
						y: "Ã©Ã©n jaar",
						yy: "%d jaar"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
					ordinal: function(e) {
						return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		dbb4: function(e, t, n) {
			var r = n("23e7"),
				i = n("83ab"),
				a = n("56ef"),
				o = n("fc6a"),
				s = n("06cf"),
				u = n("8418");
			r({
				target: "Object",
				stat: !0,
				sham: !i
			}, {
				getOwnPropertyDescriptors: function(e) {
					for (var t, n, r = o(e), i = s.f, c = a(r), l = {}, f = 0; c.length > f;) void 0 !== (n = i(r, t = c[f++])) && u(l, t, n);
					return l
				}
			})
		},
		dc4d: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à¥§",
						2: "à¥¨",
						3: "à¥©",
						4: "à¥ª",
						5: "à¥«",
						6: "à¥¬",
						7: "à¥­",
						8: "à¥®",
						9: "à¥¯",
						0: "à¥¦"
					},
					n = {
						"à¥§": "1",
						"à¥¨": "2",
						"à¥©": "3",
						"à¥ª": "4",
						"à¥«": "5",
						"à¥¬": "6",
						"à¥­": "7",
						"à¥®": "8",
						"à¥¯": "9",
						"à¥¦": "0"
					},
					r = [/^à¤œà¤¨/i, /^à¤«à¤¼à¤°|à¤«à¤°/i, /^à¤®à¤¾à¤°à¥à¤š/i, /^à¤…à¤ªà¥à¤°à¥ˆ/i, /^à¤®à¤ˆ/i, /^à¤œà¥‚à¤¨/i, /^à¤œà¥à¤²/i, /^à¤…à¤—/i, /^à¤¸à¤¿à¤¤à¤‚|à¤¸à¤¿à¤¤/i, /^à¤…à¤•à¥à¤Ÿà¥‚/i, /^à¤¨à¤µ|à¤¨à¤µà¤‚/i, /^à¤¦à¤¿à¤¸à¤‚|à¤¦à¤¿à¤¸/i];
				e.defineLocale("hi", {
					months: {
						format: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
						standalone: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤‚à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤‚à¤¬à¤°_à¤¦à¤¿à¤¸à¤‚à¤¬à¤°".split("_")
					},
					monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
					weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
					weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
					weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
					longDateFormat: {
						LT: "A h:mm à¤¬à¤œà¥‡",
						LTS: "A h:mm:ss à¤¬à¤œà¥‡",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
						LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
					},
					monthsParse: r,
					longMonthsParse: r,
					shortMonthsParse: [/^à¤œà¤¨/i, /^à¤«à¤¼à¤°/i, /^à¤®à¤¾à¤°à¥à¤š/i, /^à¤…à¤ªà¥à¤°à¥ˆ/i, /^à¤®à¤ˆ/i, /^à¤œà¥‚à¤¨/i, /^à¤œà¥à¤²/i, /^à¤…à¤—/i, /^à¤¸à¤¿à¤¤/i, /^à¤…à¤•à¥à¤Ÿà¥‚/i, /^à¤¨à¤µ/i, /^à¤¦à¤¿à¤¸/i],
					monthsRegex: /^(à¤œà¤¨à¤µà¤°à¥€|à¤œà¤¨\.?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ|à¤œà¥à¤²\.?|à¤…à¤—à¤¸à¥à¤¤|à¤…à¤—\.?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°|à¤¦à¤¿à¤¸\.?)/i,
					monthsShortRegex: /^(à¤œà¤¨à¤µà¤°à¥€|à¤œà¤¨\.?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ|à¤œà¥à¤²\.?|à¤…à¤—à¤¸à¥à¤¤|à¤…à¤—\.?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°|à¤¦à¤¿à¤¸\.?)/i,
					monthsStrictRegex: /^(à¤œà¤¨à¤µà¤°à¥€?|à¤«à¤¼à¤°à¤µà¤°à¥€|à¤«à¤°à¤µà¤°à¥€?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆà¤²?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²à¤¾à¤ˆ?|à¤…à¤—à¤¸à¥à¤¤?|à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°|à¤¸à¤¿à¤¤à¤‚à¤¬à¤°|à¤¸à¤¿à¤¤?\.?|à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µà¤®à¥à¤¬à¤°|à¤¨à¤µà¤‚à¤¬à¤°?|à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°|à¤¦à¤¿à¤¸à¤‚à¤¬à¤°?)/i,
					monthsShortStrictRegex: /^(à¤œà¤¨\.?|à¤«à¤¼à¤°\.?|à¤®à¤¾à¤°à¥à¤š?|à¤…à¤ªà¥à¤°à¥ˆ\.?|à¤®à¤ˆ?|à¤œà¥‚à¤¨?|à¤œà¥à¤²\.?|à¤…à¤—\.?|à¤¸à¤¿à¤¤\.?|à¤…à¤•à¥à¤Ÿà¥‚\.?|à¤¨à¤µ\.?|à¤¦à¤¿à¤¸\.?)/i,
					calendar: {
						sameDay: "[à¤†à¤œ] LT",
						nextDay: "[à¤•à¤²] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à¤•à¤²] LT",
						lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à¤®à¥‡à¤‚",
						past: "%s à¤ªà¤¹à¤²à¥‡",
						s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
						ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
						m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
						mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
						h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
						hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
						d: "à¤à¤• à¤¦à¤¿à¤¨",
						dd: "%d à¤¦à¤¿à¤¨",
						M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
						MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
						y: "à¤à¤• à¤µà¤°à¥à¤·",
						yy: "%d à¤µà¤°à¥à¤·"
					},
					preparse: function(e) {
						return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		dd40: function(e, t) {
			e.exports = function(e) {
				if (!e.webpackPolyfill) {
					var t = Object.create(e);
					t.children || (t.children = []), Object.defineProperty(t, "loaded", {
						enumerable: !0,
						get: function() {
							return t.l
						}
					}), Object.defineProperty(t, "id", {
						enumerable: !0,
						get: function() {
							return t.i
						}
					}), Object.defineProperty(t, "exports", {
						enumerable: !0
					}), t.webpackPolyfill = 1
				}
				return t
			}
		},
		ddb0: function(e, t, n) {
			var r = n("da84"),
				i = n("fdbc"),
				a = n("e260"),
				o = n("9112"),
				s = n("b622"),
				u = s("iterator"),
				c = s("toStringTag"),
				l = a.values;
			for (var f in i) {
				var d = r[f],
					h = d && d.prototype;
				if (h) {
					if (h[u] !== l) try {
						o(h, u, l)
					} catch (e) {
						h[u] = l
					}
					if (h[c] || o(h, c, f), i[f])
						for (var p in a)
							if (h[p] !== a[p]) try {
								o(h, p, a[p])
							} catch (e) {
								h[p] = a[p]
							}
				}
			}
		},
		df75: function(e, t, n) {
			var r = n("ca84"),
				i = n("7839");
			e.exports = Object.keys || function(e) {
				return r(e, i)
			}
		},
		df7c: function(e, t, n) {
			(function(e) {
				function n(e, t) {
					for (var n = 0, r = e.length - 1; r >= 0; r--) {
						var i = e[r];
						"." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
					}
					if (t)
						for (; n--; n) e.unshift("..");
					return e
				}

				function r(e, t) {
					if (e.filter) return e.filter(t);
					for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
					return n
				}
				t.resolve = function() {
					for (var t = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
						var o = a >= 0 ? arguments[a] : e.cwd();
						if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
						o && (t = o + "/" + t, i = "/" === o.charAt(0))
					}
					return (i ? "/" : "") + (t = n(r(t.split("/"), (function(e) {
						return !!e
					})), !i).join("/")) || "."
				}, t.normalize = function(e) {
					var a = t.isAbsolute(e),
						o = "/" === i(e, -1);
					return (e = n(r(e.split("/"), (function(e) {
						return !!e
					})), !a).join("/")) || a || (e = "."), e && o && (e += "/"), (a ? "/" : "") + e
				}, t.isAbsolute = function(e) {
					return "/" === e.charAt(0)
				}, t.join = function() {
					var e = Array.prototype.slice.call(arguments, 0);
					return t.normalize(r(e, (function(e, t) {
						if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
						return e
					})).join("/"))
				}, t.relative = function(e, n) {
					function r(e) {
						for (var t = 0; t < e.length && "" === e[t]; t++);
						for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
						return t > n ? [] : e.slice(t, n - t + 1)
					}
					e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
					for (var i = r(e.split("/")), a = r(n.split("/")), o = Math.min(i.length, a.length), s = o, u = 0; u < o; u++)
						if (i[u] !== a[u]) {
							s = u;
							break
						} var c = [];
					for (u = s; u < i.length; u++) c.push("..");
					return (c = c.concat(a.slice(s))).join("/")
				}, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
					if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
					for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, a = e.length - 1; a >= 1; --a)
						if (47 === (t = e.charCodeAt(a))) {
							if (!i) {
								r = a;
								break
							}
						} else i = !1;
					return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
				}, t.basename = function(e, t) {
					var n = function(e) {
						"string" != typeof e && (e += "");
						var t, n = 0,
							r = -1,
							i = !0;
						for (t = e.length - 1; t >= 0; --t)
							if (47 === e.charCodeAt(t)) {
								if (!i) {
									n = t + 1;
									break
								}
							} else -1 === r && (i = !1, r = t + 1);
						return -1 === r ? "" : e.slice(n, r)
					}(e);
					return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
				}, t.extname = function(e) {
					"string" != typeof e && (e += "");
					for (var t = -1, n = 0, r = -1, i = !0, a = 0, o = e.length - 1; o >= 0; --o) {
						var s = e.charCodeAt(o);
						if (47 !== s) - 1 === r && (i = !1, r = o + 1), 46 === s ? -1 === t ? t = o : 1 !== a && (a = 1) : -1 !== t && (a = -1);
						else if (!i) {
							n = o + 1;
							break
						}
					}
					return -1 === t || -1 === r || 0 === a || 1 === a && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
				};
				var i = "b" === "ab".substr(-1) ? function(e, t, n) {
					return e.substr(t, n)
				} : function(e, t, n) {
					return t < 0 && (t = e.length + t), e.substr(t, n)
				}
			}).call(this, n("4362"))
		},
		e01a: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("83ab"),
				a = n("da84"),
				o = n("5135"),
				s = n("861d"),
				u = n("9bf2").f,
				c = n("e893"),
				l = a.Symbol;
			if (i && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
				var f = {},
					d = function() {
						var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
							t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
						return "" === e && (f[t] = !0), t
					};
				c(d, l);
				var h = d.prototype = l.prototype;
				h.constructor = d;
				var p = h.toString,
					_ = "Symbol(test)" == String(l("test")),
					m = /^Symbol\((.*)\)[^)]+$/;
				u(h, "description", {
					configurable: !0,
					get: function() {
						var e = s(this) ? this.valueOf() : this,
							t = p.call(e);
						if (o(f, e)) return "";
						var n = _ ? t.slice(7, -1) : t.replace(m, "$1");
						return "" === n ? void 0 : n
					}
				}), r({
					global: !0,
					forced: !0
				}, {
					Symbol: d
				})
			}
		},
		e096: function(e, t, n) {
			"use strict";

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var i = Object.prototype.hasOwnProperty;
			var a = function() {
				var e = function() {
					var e = !1,
						t = [];
					return {
						resolved: function() {
							return e
						},
						resolve: function(n) {
							if (!e) {
								e = !0;
								for (var r = 0, i = t.length; r < i; r++) t[r](n)
							}
						},
						promise: {
							then: function(n) {
								e ? n() : t.push(n)
							}
						}
					}
				}();
				return {
					notify: function() {
						e.resolve()
					},
					wait: function() {
						return e.promise
					},
					render: function(e, t, n) {
						this.wait().then((function() {
							n(window.grecaptcha.render(e, t))
						}))
					},
					reset: function(e) {
						void 0 !== e && (this.assertLoaded(), this.wait().then((function() {
							return window.grecaptcha.reset(e)
						})))
					},
					execute: function(e) {
						void 0 !== e && (this.assertLoaded(), this.wait().then((function() {
							return window.grecaptcha.execute(e)
						})))
					},
					checkRecaptchaLoad: function() {
						i.call(window, "grecaptcha") && i.call(window.grecaptcha, "render") && this.notify()
					},
					assertLoaded: function() {
						if (!e.resolved()) throw new Error("ReCAPTCHA has not been loaded")
					}
				}
			}();
			"undefined" != typeof window && (window.vueRecaptchaApiLoaded = a.notify);
			var o = {
				name: "VueRecaptcha",
				props: {
					sitekey: {
						type: String,
						required: !0
					},
					theme: {
						type: String
					},
					badge: {
						type: String
					},
					type: {
						type: String
					},
					size: {
						type: String
					},
					tabindex: {
						type: String
					},
					loadRecaptchaScript: {
						type: Boolean,
						default: !1
					},
					recaptchaScriptId: {
						type: String,
						default: "__RECAPTCHA_SCRIPT"
					},
					recaptchaHost: {
						type: String,
						default: "www.google.com"
					},
					language: {
						type: String,
						default: ""
					}
				},
				beforeMount: function() {
					if (this.loadRecaptchaScript && !document.getElementById(this.recaptchaScriptId)) {
						var e = document.createElement("script");
						e.id = this.recaptchaScriptId, e.src = "https://" + this.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + this.language, e.async = !0, e.defer = !0, document.head.appendChild(e)
					}
				},
				mounted: function() {
					var e = this;
					a.checkRecaptchaLoad();
					var t = r({}, this.$props, {
							callback: this.emitVerify,
							"expired-callback": this.emitExpired,
							"error-callback": this.emitError
						}),
						n = this.$slots.default ? this.$el.children[0] : this.$el;
					a.render(n, t, (function(t) {
						e.$widgetId = t, e.$emit("render", t)
					}))
				},
				methods: {
					reset: function() {
						a.reset(this.$widgetId)
					},
					execute: function() {
						a.execute(this.$widgetId)
					},
					emitVerify: function(e) {
						this.$emit("verify", e)
					},
					emitExpired: function() {
						this.$emit("expired")
					},
					emitError: function() {
						this.$emit("error")
					}
				},
				render: function(e) {
					return e("div", {}, this.$slots.default)
				}
			};
			t.a = o
		},
		e0c5: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à«§",
						2: "à«¨",
						3: "à«©",
						4: "à«ª",
						5: "à««",
						6: "à«¬",
						7: "à«­",
						8: "à«®",
						9: "à«¯",
						0: "à«¦"
					},
					n = {
						"à«§": "1",
						"à«¨": "2",
						"à«©": "3",
						"à«ª": "4",
						"à««": "5",
						"à«¬": "6",
						"à«­": "7",
						"à«®": "8",
						"à«¯": "9",
						"à«¦": "0"
					};
				e.defineLocale("gu", {
					months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
					monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
					monthsParseExact: !0,
					weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
					weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
					weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
					longDateFormat: {
						LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
						LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
						LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
					},
					calendar: {
						sameDay: "[àª†àªœ] LT",
						nextDay: "[àª•àª¾àª²à«‡] LT",
						nextWeek: "dddd, LT",
						lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
						lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s àª®àª¾",
						past: "%s àªªàª¹à«‡àª²àª¾",
						s: "àª…àª®à«àª• àªªàª³à«‹",
						ss: "%d àª¸à«‡àª•àª‚àª¡",
						m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
						mm: "%d àª®àª¿àª¨àª¿àªŸ",
						h: "àªàª• àª•àª²àª¾àª•",
						hh: "%d àª•àª²àª¾àª•",
						d: "àªàª• àª¦àª¿àªµàª¸",
						dd: "%d àª¦àª¿àªµàª¸",
						M: "àªàª• àª®àª¹àª¿àª¨à«‹",
						MM: "%d àª®àª¹àª¿àª¨à«‹",
						y: "àªàª• àªµàª°à«àª·",
						yy: "%d àªµàª°à«àª·"
					},
					preparse: function(e) {
						return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "àª°àª¾àª¤" === t ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === t ? e : "àª¬àªªà«‹àª°" === t ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		e12c: function(e, t, n) {
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
			}), t.AdMessageLabel = void 0;
			var i = n("b8bf"),
				a = n("0c29"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-label-ad-message",
							text: o.i18n.getLocalizer("ads.remainingTime")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = this.getConfig(),
							s = i.text,
							u = function() {
								r.setText(a.StringUtils.replaceAdMessagePlaceholders(o.i18n.performLocalization(s), null, t))
							},
							c = function() {
								t.off(t.exports.PlayerEvent.TimeChanged, u)
							};
						t.on(t.exports.PlayerEvent.AdStarted, (function(e) {
							var n = e.ad.uiConfig;
							s = n && n.message || i.text, u(), t.on(t.exports.PlayerEvent.TimeChanged, u)
						})), t.on(t.exports.PlayerEvent.AdSkipped, c), t.on(t.exports.PlayerEvent.AdError, c), t.on(t.exports.PlayerEvent.AdFinished, c)
					}, t
				}(i.Label);
			t.AdMessageLabel = s
		},
		e13a: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.StrictEventEmitter = void 0;
			const r = n("7297");
			t.StrictEventEmitter = class extends r {
				on(e, t) {
					return super.on(e, t), this
				}
				once(e, t) {
					return super.once(e, t), this
				}
				emit(e, ...t) {
					return super.emit(e, ...t), this
				}
				emitReserved(e, ...t) {
					return super.emit(e, ...t), this
				}
				listeners(e) {
					return super.listeners(e)
				}
			}
		},
		e163: function(e, t, n) {
			var r = n("5135"),
				i = n("7b0b"),
				a = n("f772"),
				o = n("e177"),
				s = a("IE_PROTO"),
				u = Object.prototype;
			e.exports = o ? Object.getPrototypeOf : function(e) {
				return e = i(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
			}
		},
		e177: function(e, t, n) {
			var r = n("d039");
			e.exports = !r((function() {
				function e() {}
				return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
			}))
		},
		e1d3: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-ie", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		e1ee: function(e, t, n) {
			"use strict";
			var r = this && this.__assign || function() {
					return (r = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				i = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.i18n = t.defaultVocabularies = void 0;
			var a = i(n("be14")),
				o = i(n("6c76"));
			t.defaultVocabularies = {
				en: o.default,
				de: a.default
			};
			var s = {
					language: "en",
					vocabularies: t.defaultVocabularies
				},
				u = function() {
					function e(e) {
						this.setConfig(e)
					}
					return e.prototype.setConfig = function(e) {
						var t = r(r({}, s), e),
							n = "auto" === t.language,
							i = this.mergeVocabulariesWithDefaultVocabularies(t.vocabularies);
						this.initializeLanguage(t.language, n, i), this.initializeVocabulary(i)
					}, e.containsLanguage = function(e, t) {
						return e.hasOwnProperty(t)
					}, e.prototype.mergeVocabulariesWithDefaultVocabularies = function(n) {
						void 0 === n && (n = {});
						var i = r(r({}, t.defaultVocabularies), n);
						return Object.keys(i).reduce((function(a, o) {
							var s, u = i[o];
							return e.containsLanguage(t.defaultVocabularies, o) && e.containsLanguage(n, o) && (u = r(r({}, t.defaultVocabularies[o]), n[o])), r(r({}, a), ((s = {})[o] = u, s))
						}), {})
					}, e.prototype.initializeLanguage = function(t, n, r) {
						if (n) {
							var i = window.navigator.language;
							if (e.containsLanguage(r, i)) return void(this.language = i);
							var a = i.slice(0, 2);
							if (e.containsLanguage(r, a)) return void(this.language = a)
						}
						this.language = t
					}, e.prototype.initializeVocabulary = function(e) {
						this.vocabulary = ["en", this.language].reduce((function(t, n) {
							return r(r({}, t), e[n] || {})
						}), {})
					}, e.prototype.replaceVariableWithPlaceholderIfExists = function(e, t) {
						var n = e.match(new RegExp("{[a-zA-Z0-9]+}", "g"));
						return 0 === n.length ? e : n.map((function(e) {
							return {
								match: e,
								key: e.slice(1, -1)
							}
						})).reduce((function(e, n) {
							var r = n.key,
								i = n.match;
							return t.hasOwnProperty(r) ? e.replace(i, t[r]) : e
						}), e)
					}, e.prototype.getLocalizer = function(e, t) {
						var n = this;
						return function() {
							if (null != e) {
								var r = n.vocabulary[e];
								return null == r && (r = e), null != t && (r = n.replaceVariableWithPlaceholderIfExists(r, t)), r
							}
						}
					}, e.prototype.performLocalization = function(e) {
						return "function" == typeof e ? e() : e
					}, e
				}();
			t.i18n = new u(s)
		},
		e25d: function(e, t, n) {
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
			}), t.CloseButton = void 0;
			var i = n("48da"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-closebutton",
							text: a.i18n.getLocalizer("close")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n);
						var r = this.getConfig();
						this.onClick.subscribe((function() {
							r.target.hide()
						}))
					}, t
				}(i.Button);
			t.CloseButton = o
		},
		e260: function(e, t, n) {
			"use strict";
			var r = n("fc6a"),
				i = n("44d2"),
				a = n("3f8c"),
				o = n("69f3"),
				s = n("7dd0"),
				u = "Array Iterator",
				c = o.set,
				l = o.getterFor(u);
			e.exports = s(Array, "Array", (function(e, t) {
				c(this, {
					type: u,
					target: r(e),
					index: 0,
					kind: t
				})
			}), (function() {
				var e = l(this),
					t = e.target,
					n = e.kind,
					r = e.index++;
				return !t || r >= t.length ? (e.target = void 0, {
					value: void 0,
					done: !0
				}) : "keys" == n ? {
					value: r,
					done: !1
				} : "values" == n ? {
					value: t[r],
					done: !1
				} : {
					value: [r, t[r]],
					done: !1
				}
			}), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
		},
		e277: function(e, t, n) {
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
			}), t.FontSizeSelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingsfontsizeselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("50", a.i18n.getLocalizer("percent", {
							value: 50
						})), this.addItem("75", a.i18n.getLocalizer("percent", {
							value: 75
						})), this.addItem("100", a.i18n.getLocalizer("percent", {
							value: 100
						})), this.addItem("150", a.i18n.getLocalizer("percent", {
							value: 150
						})), this.addItem("200", a.i18n.getLocalizer("percent", {
							value: 200
						})), this.addItem("300", a.i18n.getLocalizer("percent", {
							value: 300
						})), this.addItem("400", a.i18n.getLocalizer("percent", {
							value: 400
						})), this.settingsManager.fontSize.onChanged.subscribe((function(e, t) {
							t.isSet() ? r.toggleOverlayClass("fontsize-" + t.value) : r.toggleOverlayClass(null), r.selectItem(t.value)
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.fontSize.value = t
						})), this.settingsManager.fontSize.isSet() && this.selectItem(this.settingsManager.fontSize.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.FontSizeSelectBox = o
		},
		e285: function(e, t, n) {
			var r = n("da84").isFinite;
			e.exports = Number.isFinite || function(e) {
				return "number" == typeof e && r(e)
			}
		},
		e2cc: function(e, t, n) {
			var r = n("6eeb");
			e.exports = function(e, t, n) {
				for (var i in t) r(e, i, t[i], n);
				return e
			}
		},
		e3db: function(e, t) {
			var n = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == n.call(e)
			}
		},
		e439: function(e, t, n) {
			var r = n("23e7"),
				i = n("d039"),
				a = n("fc6a"),
				o = n("06cf").f,
				s = n("83ab"),
				u = i((function() {
					o(1)
				}));
			r({
				target: "Object",
				stat: !0,
				forced: !s || u,
				sham: !s
			}, {
				getOwnPropertyDescriptor: function(e, t) {
					return o(a(e), t)
				}
			})
		},
		e4b1: function(e, t) {
			var n = 1e3,
				r = 6e4,
				i = 60 * r,
				a = 24 * i;

			function o(e) {
				if (!((e = String(e)).length > 100)) {
					var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
					if (t) {
						var o = parseFloat(t[1]);
						switch ((t[2] || "ms").toLowerCase()) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return 315576e5 * o;
							case "weeks":
							case "week":
							case "w":
								return 6048e5 * o;
							case "days":
							case "day":
							case "d":
								return o * a;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return o * i;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return o * r;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return o * n;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return o;
							default:
								return
						}
					}
				}
			}

			function s(e) {
				var t = Math.abs(e);
				return t >= a ? Math.round(e / a) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms"
			}

			function u(e) {
				var t = Math.abs(e);
				return t >= a ? c(e, t, a, "day") : t >= i ? c(e, t, i, "hour") : t >= r ? c(e, t, r, "minute") : t >= n ? c(e, t, n, "second") : e + " ms"
			}

			function c(e, t, n, r) {
				var i = t >= 1.5 * n;
				return Math.round(e / n) + " " + r + (i ? "s" : "")
			}
			e.exports = function(e, t) {
				t = t || {};
				var n = typeof e;
				if ("string" === n && e.length > 0) return o(e);
				if ("number" === n && isFinite(e)) return t.long ? u(e) : s(e);
				throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
			}
		},
		e4cd: function(e, t, n) {
			(function(r) {
				t.formatArgs = function(t) {
					if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
					const n = "color: " + this.color;
					t.splice(1, 0, n, "color: inherit");
					let r = 0,
						i = 0;
					t[0].replace(/%[a-zA-Z%]/g, e => {
						"%%" !== e && (r++, "%c" === e && (i = r))
					}), t.splice(i, 0, n)
				}, t.save = function(e) {
					try {
						e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
					} catch (e) {}
				}, t.load = function() {
					let e;
					try {
						e = t.storage.getItem("debug")
					} catch (e) {}
					return !e && void 0 !== r && "env" in r && (e = Object({
						NODE_ENV: "production",
						VUE_APP_SOCKETIO_SERVER: "",
						VUE_APP_CHARTING_LIBRARY: "/tradingview/",
						VUE_APP_GOOGLE_ANALYTICS: "G-YP9F2LR1HR",
						BASE_URL: "https://cdn.minervini.com/static/dist/"
					}).DEBUG), e
				}, t.useColors = function() {
					return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
				}, t.storage = function() {
					try {
						return localStorage
					} catch (e) {}
				}(), t.destroy = (() => {
					let e = !1;
					return () => {
						e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
					}
				})(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n("f494")(t);
				const {
					formatters: i
				} = e.exports;
				i.j = function(e) {
					try {
						return JSON.stringify(e)
					} catch (e) {
						return "[UnexpectedJSONParseError]: " + e.message
					}
				}
			}).call(this, n("4362"))
		},
		e538: function(e, t, n) {
			var r = n("b622");
			t.f = r
		},
		e58c: function(e, t, n) {
			"use strict";
			var r = n("fc6a"),
				i = n("a691"),
				a = n("50c4"),
				o = n("a640"),
				s = Math.min,
				u = [].lastIndexOf,
				c = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
				l = o("lastIndexOf"),
				f = c || !l;
			e.exports = f ? function(e) {
				if (c) return u.apply(this, arguments) || 0;
				var t = r(this),
					n = a(t.length),
					o = n - 1;
				for (arguments.length > 1 && (o = s(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
					if (o in t && t[o] === e) return o || 0;
				return -1
			} : u
		},
		e667: function(e, t) {
			e.exports = function(e) {
				try {
					return {
						error: !1,
						value: e()
					}
				} catch (e) {
					return {
						error: !0,
						value: e
					}
				}
			}
		},
		e683: function(e, t, n) {
			"use strict";
			e.exports = function(e, t) {
				return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
			}
		},
		e6cf: function(e, t, n) {
			"use strict";
			var r, i, a, o, s = n("23e7"),
				u = n("c430"),
				c = n("da84"),
				l = n("d066"),
				f = n("fea9"),
				d = n("6eeb"),
				h = n("e2cc"),
				p = n("d44e"),
				_ = n("2626"),
				m = n("861d"),
				b = n("1c0b"),
				g = n("19aa"),
				v = n("8925"),
				y = n("2266"),
				A = n("1c7e"),
				S = n("4840"),
				w = n("2cf4").set,
				E = n("b575"),
				T = n("cdf9"),
				C = n("44de"),
				$ = n("f069"),
				k = n("e667"),
				O = n("69f3"),
				x = n("94ca"),
				P = n("b622"),
				M = n("605d"),
				I = n("2d00"),
				L = P("species"),
				D = "Promise",
				B = O.get,
				N = O.set,
				R = O.getterFor(D),
				F = f,
				U = c.TypeError,
				j = c.document,
				H = c.process,
				Y = l("fetch"),
				V = $.f,
				z = V,
				Q = !!(j && j.createEvent && c.dispatchEvent),
				G = "function" == typeof PromiseRejectionEvent,
				q = "unhandledrejection",
				W = x(D, (function() {
					if (!(v(F) !== String(F))) {
						if (66 === I) return !0;
						if (!M && !G) return !0
					}
					if (u && !F.prototype.finally) return !0;
					if (I >= 51 && /native code/.test(F)) return !1;
					var e = F.resolve(1),
						t = function(e) {
							e((function() {}), (function() {}))
						};
					return (e.constructor = {})[L] = t, !(e.then((function() {})) instanceof t)
				})),
				K = W || !A((function(e) {
					F.all(e).catch((function() {}))
				})),
				X = function(e) {
					var t;
					return !(!m(e) || "function" != typeof(t = e.then)) && t
				},
				J = function(e, t) {
					if (!e.notified) {
						e.notified = !0;
						var n = e.reactions;
						E((function() {
							for (var r = e.value, i = 1 == e.state, a = 0; n.length > a;) {
								var o, s, u, c = n[a++],
									l = i ? c.ok : c.fail,
									f = c.resolve,
									d = c.reject,
									h = c.domain;
								try {
									l ? (i || (2 === e.rejection && ne(e), e.rejection = 1), !0 === l ? o = r : (h && h.enter(), o = l(r), h && (h.exit(), u = !0)), o === c.promise ? d(U("Promise-chain cycle")) : (s = X(o)) ? s.call(o, f, d) : f(o)) : d(r)
								} catch (e) {
									h && !u && h.exit(), d(e)
								}
							}
							e.reactions = [], e.notified = !1, t && !e.rejection && ee(e)
						}))
					}
				},
				Z = function(e, t, n) {
					var r, i;
					Q ? ((r = j.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
						promise: t,
						reason: n
					}, !G && (i = c["on" + e]) ? i(r) : e === q && C("Unhandled promise rejection", n)
				},
				ee = function(e) {
					w.call(c, (function() {
						var t, n = e.facade,
							r = e.value;
						if (te(e) && (t = k((function() {
								M ? H.emit("unhandledRejection", r, n) : Z(q, n, r)
							})), e.rejection = M || te(e) ? 2 : 1, t.error)) throw t.value
					}))
				},
				te = function(e) {
					return 1 !== e.rejection && !e.parent
				},
				ne = function(e) {
					w.call(c, (function() {
						var t = e.facade;
						M ? H.emit("rejectionHandled", t) : Z("rejectionhandled", t, e.value)
					}))
				},
				re = function(e, t, n) {
					return function(r) {
						e(t, r, n)
					}
				},
				ie = function(e, t, n) {
					e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, J(e, !0))
				},
				ae = function(e, t, n) {
					if (!e.done) {
						e.done = !0, n && (e = n);
						try {
							if (e.facade === t) throw U("Promise can't be resolved itself");
							var r = X(t);
							r ? E((function() {
								var n = {
									done: !1
								};
								try {
									r.call(t, re(ae, n, e), re(ie, n, e))
								} catch (t) {
									ie(n, t, e)
								}
							})) : (e.value = t, e.state = 1, J(e, !1))
						} catch (t) {
							ie({
								done: !1
							}, t, e)
						}
					}
				};
			W && (F = function(e) {
				g(this, F, D), b(e), r.call(this);
				var t = B(this);
				try {
					e(re(ae, t), re(ie, t))
				} catch (e) {
					ie(t, e)
				}
			}, (r = function(e) {
				N(this, {
					type: D,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: [],
					rejection: !1,
					state: 0,
					value: void 0
				})
			}).prototype = h(F.prototype, {
				then: function(e, t) {
					var n = R(this),
						r = V(S(this, F));
					return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = M ? H.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && J(n, !1), r.promise
				},
				catch: function(e) {
					return this.then(void 0, e)
				}
			}), i = function() {
				var e = new r,
					t = B(e);
				this.promise = e, this.resolve = re(ae, t), this.reject = re(ie, t)
			}, $.f = V = function(e) {
				return e === F || e === a ? new i(e) : z(e)
			}, u || "function" != typeof f || (o = f.prototype.then, d(f.prototype, "then", (function(e, t) {
				var n = this;
				return new F((function(e, t) {
					o.call(n, e, t)
				})).then(e, t)
			}), {
				unsafe: !0
			}), "function" == typeof Y && s({
				global: !0,
				enumerable: !0,
				forced: !0
			}, {
				fetch: function(e) {
					return T(F, Y.apply(c, arguments))
				}
			}))), s({
				global: !0,
				wrap: !0,
				forced: W
			}, {
				Promise: F
			}), p(F, D, !1, !0), _(D), a = l(D), s({
				target: D,
				stat: !0,
				forced: W
			}, {
				reject: function(e) {
					var t = V(this);
					return t.reject.call(void 0, e), t.promise
				}
			}), s({
				target: D,
				stat: !0,
				forced: u || W
			}, {
				resolve: function(e) {
					return T(u && this === a ? F : this, e)
				}
			}), s({
				target: D,
				stat: !0,
				forced: K
			}, {
				all: function(e) {
					var t = this,
						n = V(t),
						r = n.resolve,
						i = n.reject,
						a = k((function() {
							var n = b(t.resolve),
								a = [],
								o = 0,
								s = 1;
							y(e, (function(e) {
								var u = o++,
									c = !1;
								a.push(void 0), s++, n.call(t, e).then((function(e) {
									c || (c = !0, a[u] = e, --s || r(a))
								}), i)
							})), --s || r(a)
						}));
					return a.error && i(a.value), n.promise
				},
				race: function(e) {
					var t = this,
						n = V(t),
						r = n.reject,
						i = k((function() {
							var i = b(t.resolve);
							y(e, (function(e) {
								i.call(t, e).then(n.resolve, r)
							}))
						}));
					return i.error && r(i.value), n.promise
				}
			})
		},
		e81d: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "áŸ¡",
						2: "áŸ¢",
						3: "áŸ£",
						4: "áŸ¤",
						5: "áŸ¥",
						6: "áŸ¦",
						7: "áŸ§",
						8: "áŸ¨",
						9: "áŸ©",
						0: "áŸ "
					},
					n = {
						"áŸ¡": "1",
						"áŸ¢": "2",
						"áŸ£": "3",
						"áŸ¤": "4",
						"áŸ¥": "5",
						"áŸ¦": "6",
						"áŸ§": "7",
						"áŸ¨": "8",
						"áŸ©": "9",
						"áŸ ": "0"
					};
				e.defineLocale("km", {
					months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
					monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
					weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
					weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
					weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
					isPM: function(e) {
						return "áž›áŸ’áž„áž¶áž…" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
					},
					calendar: {
						sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
						nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
						nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
						lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
						lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sáž‘áŸ€áž",
						past: "%sáž˜áž»áž“",
						s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
						ss: "%d ážœáž·áž“áž¶áž‘áž¸",
						m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
						mm: "%d áž“áž¶áž‘áž¸",
						h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
						hh: "%d áž˜áŸ‰áŸ„áž„",
						d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
						dd: "%d ážáŸ’áž„áŸƒ",
						M: "áž˜áž½áž™ážáŸ‚",
						MM: "%d ážáŸ‚",
						y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
						yy: "%d áž†áŸ’áž“áž¶áŸ†"
					},
					dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
					ordinal: "áž‘áž¸%d",
					preparse: function(e) {
						return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		e893: function(e, t, n) {
			var r = n("5135"),
				i = n("56ef"),
				a = n("06cf"),
				o = n("9bf2");
			e.exports = function(e, t) {
				for (var n = i(t), s = o.f, u = a.f, c = 0; c < n.length; c++) {
					var l = n[c];
					r(e, l) || s(e, l, u(t, l))
				}
			}
		},
		e8b5: function(e, t, n) {
			var r = n("c6b6");
			e.exports = Array.isArray || function(e) {
				return "Array" == r(e)
			}
		},
		e8f5: function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "c", (function() {
					return c
				})), n.d(t, "f", (function() {
					return l
				})), n.d(t, "e", (function() {
					return h
				})), n.d(t, "d", (function() {
					return m
				})), n.d(t, "b", (function() {
					return b
				})), n.d(t, "a", (function() {
					return g
				}));
				var r = n("9ab4"),
					i = n("bc5b"),
					a = n("f404"),
					o = n("c020"),
					s = n("a518"),
					u = n("fbdd");

				function c(e, t, n) {
					if (t in e) {
						var r = e[t],
							i = n(r);
						if ("function" == typeof i) try {
							i.prototype = i.prototype || {}, Object.defineProperties(i, {
								__sentry_original__: {
									enumerable: !1,
									value: r
								}
							})
						} catch (e) {}
						e[t] = i
					}
				}

				function l(e) {
					return Object.keys(e).map((function(t) {
						return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
					})).join("&")
				}

				function f(e) {
					if (Object(a.d)(e)) {
						var t = e,
							n = {
								message: t.message,
								name: t.name,
								stack: t.stack
							};
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
						return n
					}
					if (Object(a.f)(e)) {
						var o = e,
							s = {};
						s.type = o.type;
						try {
							s.target = Object(a.c)(o.target) ? Object(i.a)(o.target) : Object.prototype.toString.call(o.target)
						} catch (e) {
							s.target = "<unknown>"
						}
						try {
							s.currentTarget = Object(a.c)(o.currentTarget) ? Object(i.a)(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
						} catch (e) {
							s.currentTarget = "<unknown>"
						}
						for (var r in "undefined" != typeof CustomEvent && Object(a.g)(e, CustomEvent) && (s.detail = o.detail), o) Object.prototype.hasOwnProperty.call(o, r) && (s[r] = o);
						return s
					}
					return e
				}

				function d(e) {
					return function(e) {
						return ~-encodeURI(e).split(/%..|./).length
					}(JSON.stringify(e))
				}

				function h(e, t, n) {
					void 0 === t && (t = 3), void 0 === n && (n = 102400);
					var r = m(e, t);
					return d(r) > n ? h(e, t - 1, n) : r
				}

				function p(t, n) {
					return "domain" === n && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : void 0 !== e && t === e ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Object(a.l)(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Object(s.a)(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t
				}

				function _(e, t, n, r) {
					if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new o.a), 0 === n) return function(e) {
						var t = Object.prototype.toString.call(e);
						if ("string" == typeof e) return e;
						if ("[object Object]" === t) return "[Object]";
						if ("[object Array]" === t) return "[Array]";
						var n = p(e);
						return Object(a.i)(n) ? n : t
					}(t);
					if (null != t && "function" == typeof t.toJSON) return t.toJSON();
					var i = p(t, e);
					if (Object(a.i)(i)) return i;
					var s = f(t),
						u = Array.isArray(t) ? [] : {};
					if (r.memoize(t)) return "[Circular ~]";
					for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (u[c] = _(c, s[c], n - 1, r));
					return r.unmemoize(t), u
				}

				function m(e, t) {
					try {
						return JSON.parse(JSON.stringify(e, (function(e, n) {
							return _(e, n, t)
						})))
					} catch (e) {
						return "**non-serializable**"
					}
				}

				function b(e, t) {
					void 0 === t && (t = 40);
					var n = Object.keys(f(e));
					if (n.sort(), !n.length) return "[object has no keys]";
					if (n[0].length >= t) return Object(u.d)(n[0], t);
					for (var r = n.length; r > 0; r--) {
						var i = n.slice(0, r).join(", ");
						if (!(i.length > t)) return r === n.length ? i : Object(u.d)(i, t)
					}
					return ""
				}

				function g(e) {
					var t, n;
					if (Object(a.h)(e)) {
						var i = e,
							o = {};
						try {
							for (var s = Object(r.f)(Object.keys(i)), u = s.next(); !u.done; u = s.next()) {
								var c = u.value;
								void 0 !== i[c] && (o[c] = g(i[c]))
							}
						} catch (e) {
							t = {
								error: e
							}
						} finally {
							try {
								u && !u.done && (n = s.return) && n.call(s)
							} finally {
								if (t) throw t.error
							}
						}
						return o
					}
					return Array.isArray(e) ? e.map(g) : e
				}
			}).call(this, n("c8ba"))
		},
		e91f: function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("4d64").indexOf,
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("indexOf", (function(e) {
				return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
			}))
		},
		e95a: function(e, t, n) {
			var r = n("b622"),
				i = n("3f8c"),
				a = r("iterator"),
				o = Array.prototype;
			e.exports = function(e) {
				return void 0 !== e && (i.Array === e || o[a] === e)
			}
		},
		ebb5: function(e, t, n) {
			"use strict";
			var r, i = n("a981"),
				a = n("83ab"),
				o = n("da84"),
				s = n("861d"),
				u = n("5135"),
				c = n("f5df"),
				l = n("9112"),
				f = n("6eeb"),
				d = n("9bf2").f,
				h = n("e163"),
				p = n("d2bb"),
				_ = n("b622"),
				m = n("90e3"),
				b = o.Int8Array,
				g = b && b.prototype,
				v = o.Uint8ClampedArray,
				y = v && v.prototype,
				A = b && h(b),
				S = g && h(g),
				w = Object.prototype,
				E = w.isPrototypeOf,
				T = _("toStringTag"),
				C = m("TYPED_ARRAY_TAG"),
				$ = i && !!p && "Opera" !== c(o.opera),
				k = !1,
				O = {
					Int8Array: 1,
					Uint8Array: 1,
					Uint8ClampedArray: 1,
					Int16Array: 2,
					Uint16Array: 2,
					Int32Array: 4,
					Uint32Array: 4,
					Float32Array: 4,
					Float64Array: 8
				},
				x = {
					BigInt64Array: 8,
					BigUint64Array: 8
				},
				P = function(e) {
					if (!s(e)) return !1;
					var t = c(e);
					return u(O, t) || u(x, t)
				};
			for (r in O) o[r] || ($ = !1);
			if ((!$ || "function" != typeof A || A === Function.prototype) && (A = function() {
					throw TypeError("Incorrect invocation")
				}, $))
				for (r in O) o[r] && p(o[r], A);
			if ((!$ || !S || S === w) && (S = A.prototype, $))
				for (r in O) o[r] && p(o[r].prototype, S);
			if ($ && h(y) !== S && p(y, S), a && !u(S, T))
				for (r in k = !0, d(S, T, {
						get: function() {
							return s(this) ? this[C] : void 0
						}
					}), O) o[r] && l(o[r], C, r);
			e.exports = {
				NATIVE_ARRAY_BUFFER_VIEWS: $,
				TYPED_ARRAY_TAG: k && C,
				aTypedArray: function(e) {
					if (P(e)) return e;
					throw TypeError("Target is not a typed array")
				},
				aTypedArrayConstructor: function(e) {
					if (p) {
						if (E.call(A, e)) return e
					} else
						for (var t in O)
							if (u(O, r)) {
								var n = o[t];
								if (n && (e === n || E.call(n, e))) return e
							} throw TypeError("Target is not a typed array constructor")
				},
				exportTypedArrayMethod: function(e, t, n) {
					if (a) {
						if (n)
							for (var r in O) {
								var i = o[r];
								i && u(i.prototype, e) && delete i.prototype[e]
							}
						S[e] && !n || f(S, e, n ? t : $ && g[e] || t)
					}
				},
				exportTypedArrayStaticMethod: function(e, t, n) {
					var r, i;
					if (a) {
						if (p) {
							if (n)
								for (r in O)(i = o[r]) && u(i, e) && delete i[e];
							if (A[e] && !n) return;
							try {
								return f(A, e, n ? t : $ && b[e] || t)
							} catch (e) {}
						}
						for (r in O) !(i = o[r]) || i[e] && !n || f(i, e, t)
					}
				},
				isView: function(e) {
					if (!s(e)) return !1;
					var t = c(e);
					return "DataView" === t || u(O, t) || u(x, t)
				},
				isTypedArray: P,
				TypedArray: A,
				TypedArrayPrototype: S
			}
		},
		ebe4: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ms", {
					months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
					monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
					weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
					weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
					weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /pagi|tengahari|petang|malam/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
					},
					calendar: {
						sameDay: "[Hari ini pukul] LT",
						nextDay: "[Esok pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kelmarin pukul] LT",
						lastWeek: "dddd [lepas pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dalam %s",
						past: "%s yang lepas",
						s: "beberapa saat",
						ss: "%d saat",
						m: "seminit",
						mm: "%d minit",
						h: "sejam",
						hh: "%d jam",
						d: "sehari",
						dd: "%d hari",
						M: "sebulan",
						MM: "%d bulan",
						y: "setahun",
						yy: "%d tahun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		ec18: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
						ss: [e + "sekundi", e + "sekundit"],
						m: ["Ã¼he minuti", "Ã¼ks minut"],
						mm: [e + " minuti", e + " minutit"],
						h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
						hh: [e + " tunni", e + " tundi"],
						d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
						M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
						MM: [e + " kuu", e + " kuud"],
						y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
						yy: [e + " aasta", e + " aastat"]
					};
					return t ? i[n][2] ? i[n][2] : i[n][1] : r ? i[n][0] : i[n][1]
				}
				e.defineLocale("et", {
					months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
					monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
					weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
					weekdaysShort: "P_E_T_K_N_R_L".split("_"),
					weekdaysMin: "P_E_T_K_N_R_L".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[TÃ¤na,] LT",
						nextDay: "[Homme,] LT",
						nextWeek: "[JÃ¤rgmine] dddd LT",
						lastDay: "[Eile,] LT",
						lastWeek: "[Eelmine] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s pÃ¤rast",
						past: "%s tagasi",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: "%d pÃ¤eva",
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		ec2e: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-in", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		eda5: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("si", {
					months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
					monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
					weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
					weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
					weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "a h:mm",
						LTS: "a h:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY MMMM D",
						LLL: "YYYY MMMM D, a h:mm",
						LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
					},
					calendar: {
						sameDay: "[à¶…à¶¯] LT[à¶§]",
						nextDay: "[à·„à·™à¶§] LT[à¶§]",
						nextWeek: "dddd LT[à¶§]",
						lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
						lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sà¶šà·’à¶±à·Š",
						past: "%sà¶šà¶§ à¶´à·™à¶»",
						s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
						ss: "à¶­à¶­à·Šà¶´à¶» %d",
						m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
						mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
						h: "à¶´à·à¶º",
						hh: "à¶´à·à¶º %d",
						d: "à¶¯à·’à¶±à¶º",
						dd: "à¶¯à·’à¶± %d",
						M: "à¶¸à·à·ƒà¶º",
						MM: "à¶¸à·à·ƒ %d",
						y: "à·€à·ƒà¶»",
						yy: "à·€à·ƒà¶» %d"
					},
					dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
					ordinal: function(e) {
						return e + " à·€à·à¶±à·’"
					},
					meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
					isPM: function(e) {
						return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
					},
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
					}
				})
			}(n("c1df"))
		},
		f00a: function(e, t, n) {
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
			}), t.SubtitleRegionContainer = t.SubtitleRegionContainerManager = t.SubtitleLabel = t.SubtitleOverlay = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("ac0e"),
				s = n("09e6"),
				u = n("571d"),
				c = n("e1ee"),
				l = n("443d"),
				f = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.preprocessLabelEventCallback = new s.EventDispatcher, n.previewSubtitleActive = !1, n.previewSubtitle = new d({
							text: c.i18n.getLocalizer("subtitle.example")
						}), n.config = n.mergeConfig(t, {
							cssClass: "ui-subtitle-overlay"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(n, r) {
						var i = this;
						e.prototype.configure.call(this, n, r);
						var a = new h;
						this.subtitleManager = a, this.subtitleContainerManager = new p(this), n.on(n.exports.PlayerEvent.CueEnter, (function(e) {
							var t = i.generateLabel(e);
							a.cueEnter(e, t), i.preprocessLabelEventCallback.dispatch(e, t), i.previewSubtitleActive && i.subtitleContainerManager.removeLabel(i.previewSubtitle), i.show(), i.subtitleContainerManager.addLabel(t, i.getDomElement().size()), i.updateComponents()
						})), n.on(n.exports.PlayerEvent.CueUpdate, (function(e) {
							var t = i.generateLabel(e),
								n = a.cueUpdate(e, t);
							i.preprocessLabelEventCallback.dispatch(e, t), n && i.subtitleContainerManager.replaceLabel(n, t)
						})), n.on(n.exports.PlayerEvent.CueExit, (function(e) {
							var t = a.cueExit(e);
							t && (i.subtitleContainerManager.removeLabel(t), i.updateComponents()), a.hasCues || (i.previewSubtitleActive ? (i.subtitleContainerManager.addLabel(i.previewSubtitle), i.updateComponents()) : i.hide())
						}));
						var s = function() {
							i.hide(), i.subtitleContainerManager.clear(), a.clear(), i.removeComponents(), i.updateComponents()
						};
						n.on(n.exports.PlayerEvent.AudioChanged, s), n.on(n.exports.PlayerEvent.SubtitleEnabled, s), n.on(n.exports.PlayerEvent.SubtitleDisabled, s), n.on(n.exports.PlayerEvent.Seek, s), n.on(n.exports.PlayerEvent.TimeShift, s), n.on(n.exports.PlayerEvent.PlaybackFinished, s), n.on(n.exports.PlayerEvent.SourceUnloaded, s), r.onComponentShow.subscribe((function(e) {
							e instanceof o.ControlBar && i.getDomElement().addClass(i.prefixCss(t.CLASS_CONTROLBAR_VISIBLE))
						})), r.onComponentHide.subscribe((function(e) {
							e instanceof o.ControlBar && i.getDomElement().removeClass(i.prefixCss(t.CLASS_CONTROLBAR_VISIBLE))
						})), this.configureCea608Captions(n, r), s()
					}, t.prototype.generateLabel = function(e) {
						return e.position && (e.position.row = e.position.row || 0, e.position.column = e.position.column || 0), new d({
							text: e.html || h.generateImageTagText(e.image) || e.text,
							vtt: e.vtt,
							region: e.region,
							regionStyle: e.regionStyle
						})
					}, t.prototype.configureCea608Captions = function(e, n) {
						var r = this,
							i = 0,
							a = 0,
							o = !0,
							s = !1,
							u = function() {
								var e = new d({
									text: "X"
								});
								e.getDomElement().css({
									"font-size": "200px",
									"line-height": "200px",
									visibility: "hidden"
								}), r.addComponent(e), r.updateComponents(), r.show();
								var n = e.getDomElement().width(),
									o = e.getDomElement().height(),
									s = n / o;
								r.removeComponent(e), r.updateComponents(), r.subtitleManager.hasCues || r.hide();
								var u = r.getDomElement().width() - 10,
									c = r.getDomElement().height();
								if (u / c > n * t.CEA608_NUM_COLUMNS / (o * t.CEA608_NUM_ROWS)) {
									i = c / t.CEA608_NUM_ROWS;
									var l = u / t.CEA608_NUM_COLUMNS;
									a = l - i * s
								} else i = u / t.CEA608_NUM_COLUMNS / s, a = 0;
								for (var f = 0, h = r.getComponents(); f < h.length; f++) {
									var p = h[f];
									p instanceof d && p.getDomElement().css({
										"font-size": i + "px",
										"letter-spacing": a + "px"
									})
								}
							};
						e.on(e.exports.PlayerEvent.PlayerResized, (function() {
							s ? u() : o = !0
						})), this.preprocessLabelEventCallback.subscribe((function(e, n) {
							null != e.position && (s || (s = !0, r.getDomElement().addClass(r.prefixCss(t.CLASS_CEA_608)), o && (u(), o = !1)), n.getDomElement().css({
								left: e.position.column * t.CEA608_COLUMN_OFFSET + "%",
								top: e.position.row * t.CEA608_ROW_OFFSET + "%",
								"font-size": i + "px",
								"letter-spacing": a + "px"
							}))
						}));
						var c = function() {
							r.getDomElement().removeClass(r.prefixCss(t.CLASS_CEA_608)), s = !1
						};
						e.on(e.exports.PlayerEvent.CueExit, (function() {
							r.subtitleManager.hasCues || c()
						})), e.on(e.exports.PlayerEvent.SourceUnloaded, c), e.on(e.exports.PlayerEvent.SubtitleEnabled, c), e.on(e.exports.PlayerEvent.SubtitleDisabled, c)
					}, t.prototype.enablePreviewSubtitleLabel = function() {
						this.subtitleManager.hasCues || (this.previewSubtitleActive = !0, this.subtitleContainerManager.addLabel(this.previewSubtitle), this.updateComponents(), this.show())
					}, t.prototype.removePreviewSubtitleLabel = function() {
						this.previewSubtitleActive && (this.previewSubtitleActive = !1, this.subtitleContainerManager.removeLabel(this.previewSubtitle), this.updateComponents())
					}, t.CLASS_CONTROLBAR_VISIBLE = "controlbar-visible", t.CLASS_CEA_608 = "cea608", t.CEA608_NUM_ROWS = 15, t.CEA608_NUM_COLUMNS = 32, t.CEA608_ROW_OFFSET = 100 / t.CEA608_NUM_ROWS, t.CEA608_COLUMN_OFFSET = 100 / t.CEA608_NUM_COLUMNS, t
				}(i.Container);
			t.SubtitleOverlay = f;
			var d = function(e) {
				function t(t) {
					void 0 === t && (t = {});
					var n = e.call(this, t) || this;
					return n.config = n.mergeConfig(t, {
						cssClass: "ui-subtitle-label"
					}, n.config), n
				}
				return r(t, e), Object.defineProperty(t.prototype, "vtt", {
					get: function() {
						return this.config.vtt
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "region", {
					get: function() {
						return this.config.region
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "regionStyle", {
					get: function() {
						return this.config.regionStyle
					},
					enumerable: !1,
					configurable: !0
				}), t
			}(a.Label);
			t.SubtitleLabel = d;
			var h = function() {
					function e() {
						this.activeSubtitleCueMap = {}, this.activeSubtitleCueCount = 0
					}
					return e.calculateId = function(e) {
						var t = e.start + "-" + e.text;
						return e.position && (t += "-" + e.position.row + "-" + e.position.column), t
					}, e.prototype.cueEnter = function(e, t) {
						this.addCueToMap(e, t)
					}, e.prototype.cueUpdate = function(e, t) {
						var n = this.popCueFromMap(e);
						if (n) return this.addCueToMap(e, t), n
					}, e.prototype.addCueToMap = function(t, n) {
						var r = e.calculateId(t);
						this.activeSubtitleCueMap[r] = this.activeSubtitleCueMap[r] || [], this.activeSubtitleCueMap[r].push({
							event: t,
							label: n
						}), this.activeSubtitleCueCount++
					}, e.prototype.popCueFromMap = function(t) {
						var n = e.calculateId(t),
							r = this.activeSubtitleCueMap[n];
						if (r && r.length > 0) {
							var i = r.shift();
							return this.activeSubtitleCueCount--, i.label
						}
					}, e.generateImageTagText = function(e) {
						if (e) {
							var t = new u.DOM("img", {
								src: e
							});
							return t.css("width", "100%"), t.get(0).outerHTML
						}
					}, e.prototype.getCues = function(t) {
						var n = e.calculateId(t),
							r = this.activeSubtitleCueMap[n];
						if (r && r.length > 0) return r.map((function(e) {
							return e.label
						}))
					}, e.prototype.cueExit = function(e) {
						return this.popCueFromMap(e)
					}, Object.defineProperty(e.prototype, "cueCount", {
						get: function() {
							return this.activeSubtitleCueCount
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "hasCues", {
						get: function() {
							return this.cueCount > 0
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.clear = function() {
						this.activeSubtitleCueMap = {}, this.activeSubtitleCueCount = 0
					}, e
				}(),
				p = function() {
					function e(e) {
						this.subtitleOverlay = e, this.subtitleRegionContainers = {}, this.subtitleOverlay = e
					}
					return e.prototype.getRegion = function(e) {
						return e.vtt ? {
							regionContainerId: e.vtt.region && e.vtt.region.id ? e.vtt.region.id : "vtt",
							regionName: "vtt"
						} : {
							regionContainerId: e.region || "default",
							regionName: e.region || "default"
						}
					}, e.prototype.addLabel = function(e, t) {
						var n = this.getRegion(e),
							r = n.regionContainerId,
							i = ["subtitle-position-" + n.regionName];
						if (e.vtt && e.vtt.region && i.push("vtt-region-" + e.vtt.region.id), !this.subtitleRegionContainers[r]) {
							var a = new _({
								cssClasses: i
							});
							for (var o in this.subtitleRegionContainers[r] = a, e.regionStyle ? a.getDomElement().attr("style", e.regionStyle) : e.vtt && !e.vtt.region ? a.getDomElement().css("position", "static") : a.getDomElement(), this.subtitleRegionContainers) this.subtitleOverlay.addComponent(this.subtitleRegionContainers[o])
						}
						this.subtitleRegionContainers[r].addLabel(e, t)
					}, e.prototype.replaceLabel = function(e, t) {
						var n = this.getRegion(e).regionContainerId;
						this.subtitleRegionContainers[n].removeLabel(e), this.subtitleRegionContainers[n].addLabel(t)
					}, e.prototype.removeLabel = function(e) {
						var t;
						t = e.vtt ? e.vtt.region && e.vtt.region.id ? e.vtt.region.id : "vtt" : e.region || "default", this.subtitleRegionContainers[t].removeLabel(e), this.subtitleRegionContainers[t].isEmpty() && (this.subtitleOverlay.removeComponent(this.subtitleRegionContainers[t]), delete this.subtitleRegionContainers[t])
					}, e.prototype.clear = function() {
						for (var e in this.subtitleRegionContainers) this.subtitleOverlay.removeComponent(this.subtitleRegionContainers[e]);
						this.subtitleRegionContainers = {}
					}, e
				}();
			t.SubtitleRegionContainerManager = p;
			var _ = function(e) {
				function t(t) {
					void 0 === t && (t = {});
					var n = e.call(this, t) || this;
					return n.labelCount = 0, n.config = n.mergeConfig(t, {
						cssClass: "subtitle-region-container"
					}, n.config), n
				}
				return r(t, e), t.prototype.addLabel = function(e, t) {
					this.labelCount++, e.vtt && (e.vtt.region && t && l.VttUtils.setVttRegionStyles(this, e.vtt.region, t), l.VttUtils.setVttCueBoxStyles(e, t)), this.addComponent(e), this.updateComponents()
				}, t.prototype.removeLabel = function(e) {
					this.labelCount--, this.removeComponent(e), this.updateComponents()
				}, t.prototype.isEmpty = function() {
					return 0 === this.labelCount
				}, t
			}(i.Container);
			t.SubtitleRegionContainer = _
		},
		f00c: function(e, t, n) {
			n("23e7")({
				target: "Number",
				stat: !0
			}, {
				isFinite: n("e285")
			})
		},
		f069: function(e, t, n) {
			"use strict";
			var r = n("1c0b"),
				i = function(e) {
					var t, n;
					this.promise = new e((function(e, r) {
						if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
						t = e, n = r
					})), this.resolve = r(t), this.reject = r(n)
				};
			e.exports.f = function(e) {
				return new i(e)
			}
		},
		f0bd: function(e, t, n) {
			"use strict";
			(function(e) {
				var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
					r = function() {
						for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
							if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
						return 0
					}();
				var i = n && window.Promise ? function(e) {
					var t = !1;
					return function() {
						t || (t = !0, window.Promise.resolve().then((function() {
							t = !1, e()
						})))
					}
				} : function(e) {
					var t = !1;
					return function() {
						t || (t = !0, setTimeout((function() {
							t = !1, e()
						}), r))
					}
				};

				function a(e) {
					return e && "[object Function]" === {}.toString.call(e)
				}

				function o(e, t) {
					if (1 !== e.nodeType) return [];
					var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
					return t ? n[t] : n
				}

				function s(e) {
					return "HTML" === e.nodeName ? e : e.parentNode || e.host
				}

				function u(e) {
					if (!e) return document.body;
					switch (e.nodeName) {
						case "HTML":
						case "BODY":
							return e.ownerDocument.body;
						case "#document":
							return e.body
					}
					var t = o(e),
						n = t.overflow,
						r = t.overflowX,
						i = t.overflowY;
					return /(auto|scroll|overlay)/.test(n + i + r) ? e : u(s(e))
				}

				function c(e) {
					return e && e.referenceNode ? e.referenceNode : e
				}
				var l = n && !(!window.MSInputMethodContext || !document.documentMode),
					f = n && /MSIE 10/.test(navigator.userAgent);

				function d(e) {
					return 11 === e ? l : 10 === e ? f : l || f
				}

				function h(e) {
					if (!e) return document.documentElement;
					for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
					var r = n && n.nodeName;
					return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === o(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
				}

				function p(e) {
					return null !== e.parentNode ? p(e.parentNode) : e
				}

				function _(e, t) {
					if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
					var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
						r = n ? e : t,
						i = n ? t : e,
						a = document.createRange();
					a.setStart(r, 0), a.setEnd(i, 0);
					var o = a.commonAncestorContainer;
					if (e !== o && t !== o || r.contains(i)) return function(e) {
						var t = e.nodeName;
						return "BODY" !== t && ("HTML" === t || h(e.firstElementChild) === e)
					}(o) ? o : h(o);
					var s = p(e);
					return s.host ? _(s.host, t) : _(e, p(t).host)
				}

				function m(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
						n = "top" === t ? "scrollTop" : "scrollLeft",
						r = e.nodeName;
					if ("BODY" === r || "HTML" === r) {
						var i = e.ownerDocument.documentElement,
							a = e.ownerDocument.scrollingElement || i;
						return a[n]
					}
					return e[n]
				}

				function b(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						r = m(t, "top"),
						i = m(t, "left"),
						a = n ? -1 : 1;
					return e.top += r * a, e.bottom += r * a, e.left += i * a, e.right += i * a, e
				}

				function g(e, t) {
					var n = "x" === t ? "Left" : "Top",
						r = "Left" === n ? "Right" : "Bottom";
					return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
				}

				function v(e, t, n, r) {
					return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
				}

				function y(e) {
					var t = e.body,
						n = e.documentElement,
						r = d(10) && getComputedStyle(n);
					return {
						height: v("Height", t, n, r),
						width: v("Width", t, n, r)
					}
				}
				var A = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					S = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t
						}
					}(),
					w = function(e, t, n) {
						return t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n, e
					},
					E = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					};

				function T(e) {
					return E({}, e, {
						right: e.left + e.width,
						bottom: e.top + e.height
					})
				}

				function C(e) {
					var t = {};
					try {
						if (d(10)) {
							t = e.getBoundingClientRect();
							var n = m(e, "top"),
								r = m(e, "left");
							t.top += n, t.left += r, t.bottom += n, t.right += r
						} else t = e.getBoundingClientRect()
					} catch (e) {}
					var i = {
							left: t.left,
							top: t.top,
							width: t.right - t.left,
							height: t.bottom - t.top
						},
						a = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
						s = a.width || e.clientWidth || i.width,
						u = a.height || e.clientHeight || i.height,
						c = e.offsetWidth - s,
						l = e.offsetHeight - u;
					if (c || l) {
						var f = o(e);
						c -= g(f, "x"), l -= g(f, "y"), i.width -= c, i.height -= l
					}
					return T(i)
				}

				function $(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						r = d(10),
						i = "HTML" === t.nodeName,
						a = C(e),
						s = C(t),
						c = u(e),
						l = o(t),
						f = parseFloat(l.borderTopWidth),
						h = parseFloat(l.borderLeftWidth);
					n && i && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
					var p = T({
						top: a.top - s.top - f,
						left: a.left - s.left - h,
						width: a.width,
						height: a.height
					});
					if (p.marginTop = 0, p.marginLeft = 0, !r && i) {
						var _ = parseFloat(l.marginTop),
							m = parseFloat(l.marginLeft);
						p.top -= f - _, p.bottom -= f - _, p.left -= h - m, p.right -= h - m, p.marginTop = _, p.marginLeft = m
					}
					return (r && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = b(p, t)), p
				}

				function k(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = e.ownerDocument.documentElement,
						r = $(e, n),
						i = Math.max(n.clientWidth, window.innerWidth || 0),
						a = Math.max(n.clientHeight, window.innerHeight || 0),
						o = t ? 0 : m(n),
						s = t ? 0 : m(n, "left"),
						u = {
							top: o - r.top + r.marginTop,
							left: s - r.left + r.marginLeft,
							width: i,
							height: a
						};
					return T(u)
				}

				function O(e) {
					var t = e.nodeName;
					if ("BODY" === t || "HTML" === t) return !1;
					if ("fixed" === o(e, "position")) return !0;
					var n = s(e);
					return !!n && O(n)
				}

				function x(e) {
					if (!e || !e.parentElement || d()) return document.documentElement;
					for (var t = e.parentElement; t && "none" === o(t, "transform");) t = t.parentElement;
					return t || document.documentElement
				}

				function P(e, t, n, r) {
					var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						a = {
							top: 0,
							left: 0
						},
						o = i ? x(e) : _(e, c(t));
					if ("viewport" === r) a = k(o, i);
					else {
						var l = void 0;
						"scrollParent" === r ? "BODY" === (l = u(s(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === r ? e.ownerDocument.documentElement : r;
						var f = $(l, o, i);
						if ("HTML" !== l.nodeName || O(o)) a = f;
						else {
							var d = y(e.ownerDocument),
								h = d.height,
								p = d.width;
							a.top += f.top - f.marginTop, a.bottom = h + f.top, a.left += f.left - f.marginLeft, a.right = p + f.left
						}
					}
					var m = "number" == typeof(n = n || 0);
					return a.left += m ? n : n.left || 0, a.top += m ? n : n.top || 0, a.right -= m ? n : n.right || 0, a.bottom -= m ? n : n.bottom || 0, a
				}

				function M(e) {
					return e.width * e.height
				}

				function I(e, t, n, r, i) {
					var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
					if (-1 === e.indexOf("auto")) return e;
					var o = P(n, r, a, i),
						s = {
							top: {
								width: o.width,
								height: t.top - o.top
							},
							right: {
								width: o.right - t.right,
								height: o.height
							},
							bottom: {
								width: o.width,
								height: o.bottom - t.bottom
							},
							left: {
								width: t.left - o.left,
								height: o.height
							}
						},
						u = Object.keys(s).map((function(e) {
							return E({
								key: e
							}, s[e], {
								area: M(s[e])
							})
						})).sort((function(e, t) {
							return t.area - e.area
						})),
						c = u.filter((function(e) {
							var t = e.width,
								r = e.height;
							return t >= n.clientWidth && r >= n.clientHeight
						})),
						l = c.length > 0 ? c[0].key : u[0].key,
						f = e.split("-")[1];
					return l + (f ? "-" + f : "")
				}

				function L(e, t, n) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
						i = r ? x(t) : _(t, c(n));
					return $(n, i, r)
				}

				function D(e) {
					var t = e.ownerDocument.defaultView.getComputedStyle(e),
						n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
						r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
					return {
						width: e.offsetWidth + r,
						height: e.offsetHeight + n
					}
				}

				function B(e) {
					var t = {
						left: "right",
						right: "left",
						bottom: "top",
						top: "bottom"
					};
					return e.replace(/left|right|bottom|top/g, (function(e) {
						return t[e]
					}))
				}

				function N(e, t, n) {
					n = n.split("-")[0];
					var r = D(e),
						i = {
							width: r.width,
							height: r.height
						},
						a = -1 !== ["right", "left"].indexOf(n),
						o = a ? "top" : "left",
						s = a ? "left" : "top",
						u = a ? "height" : "width",
						c = a ? "width" : "height";
					return i[o] = t[o] + t[u] / 2 - r[u] / 2, i[s] = n === s ? t[s] - r[c] : t[B(s)], i
				}

				function R(e, t) {
					return Array.prototype.find ? e.find(t) : e.filter(t)[0]
				}

				function F(e, t, n) {
					return (void 0 === n ? e : e.slice(0, function(e, t, n) {
						if (Array.prototype.findIndex) return e.findIndex((function(e) {
							return e[t] === n
						}));
						var r = R(e, (function(e) {
							return e[t] === n
						}));
						return e.indexOf(r)
					}(e, "name", n))).forEach((function(e) {
						e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
						var n = e.function || e.fn;
						e.enabled && a(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
					})), t
				}

				function U() {
					if (!this.state.isDestroyed) {
						var e = {
							instance: this,
							styles: {},
							arrowStyles: {},
							attributes: {},
							flipped: !1,
							offsets: {}
						};
						e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = N(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = F(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
					}
				}

				function j(e, t) {
					return e.some((function(e) {
						var n = e.name;
						return e.enabled && n === t
					}))
				}

				function H(e) {
					for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
						var i = t[r],
							a = i ? "" + i + n : e;
						if (void 0 !== document.body.style[a]) return a
					}
					return null
				}

				function Y() {
					return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
				}

				function V(e) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}

				function z(e, t, n, r) {
					n.updateBound = r, V(e).addEventListener("resize", n.updateBound, {
						passive: !0
					});
					var i = u(e);
					return function e(t, n, r, i) {
						var a = "BODY" === t.nodeName,
							o = a ? t.ownerDocument.defaultView : t;
						o.addEventListener(n, r, {
							passive: !0
						}), a || e(u(o.parentNode), n, r, i), i.push(o)
					}(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
				}

				function Q() {
					this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
				}

				function G() {
					this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
						return V(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
							e.removeEventListener("scroll", t.updateBound)
						})), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
					}(this.reference, this.state))
				}

				function q(e) {
					return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
				}

				function W(e, t) {
					Object.keys(t).forEach((function(n) {
						var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (r = "px"), e.style[n] = t[n] + r
					}))
				}
				var K = n && /Firefox/i.test(navigator.userAgent);

				function X(e, t, n) {
					var r = R(e, (function(e) {
							return e.name === t
						})),
						i = !!r && e.some((function(e) {
							return e.name === n && e.enabled && e.order < r.order
						}));
					if (!i) {
						var a = "`" + t + "`",
							o = "`" + n + "`";
						console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
					}
					return i
				}
				var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
					Z = J.slice(3);

				function ee(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = Z.indexOf(e),
						r = Z.slice(n + 1).concat(Z.slice(0, n));
					return t ? r.reverse() : r
				}
				var te = "flip",
					ne = "clockwise",
					re = "counterclockwise";

				function ie(e, t, n, r) {
					var i = [0, 0],
						a = -1 !== ["right", "left"].indexOf(r),
						o = e.split(/(\+|\-)/).map((function(e) {
							return e.trim()
						})),
						s = o.indexOf(R(o, (function(e) {
							return -1 !== e.search(/,|\s/)
						})));
					o[s] && -1 === o[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
					var u = /\s*,\s*|\s+/,
						c = -1 !== s ? [o.slice(0, s).concat([o[s].split(u)[0]]), [o[s].split(u)[1]].concat(o.slice(s + 1))] : [o];
					return (c = c.map((function(e, r) {
						var i = (1 === r ? !a : a) ? "height" : "width",
							o = !1;
						return e.reduce((function(e, t) {
							return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
						}), []).map((function(e) {
							return function(e, t, n, r) {
								var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
									a = +i[1],
									o = i[2];
								if (!a) return e;
								if (0 === o.indexOf("%")) {
									var s = void 0;
									switch (o) {
										case "%p":
											s = n;
											break;
										case "%":
										case "%r":
										default:
											s = r
									}
									return T(s)[t] / 100 * a
								}
								if ("vh" === o || "vw" === o) {
									return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a
								}
								return a
							}(e, i, t, n)
						}))
					}))).forEach((function(e, t) {
						e.forEach((function(n, r) {
							q(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
						}))
					})), i
				}
				var ae = {
						placement: "bottom",
						positionFixed: !1,
						eventsEnabled: !0,
						removeOnDestroy: !1,
						onCreate: function() {},
						onUpdate: function() {},
						modifiers: {
							shift: {
								order: 100,
								enabled: !0,
								fn: function(e) {
									var t = e.placement,
										n = t.split("-")[0],
										r = t.split("-")[1];
									if (r) {
										var i = e.offsets,
											a = i.reference,
											o = i.popper,
											s = -1 !== ["bottom", "top"].indexOf(n),
											u = s ? "left" : "top",
											c = s ? "width" : "height",
											l = {
												start: w({}, u, a[u]),
												end: w({}, u, a[u] + a[c] - o[c])
											};
										e.offsets.popper = E({}, o, l[r])
									}
									return e
								}
							},
							offset: {
								order: 200,
								enabled: !0,
								fn: function(e, t) {
									var n, r = t.offset,
										i = e.placement,
										a = e.offsets,
										o = a.popper,
										s = a.reference,
										u = i.split("-")[0];
									return n = q(+r) ? [+r, 0] : ie(r, o, s, u), "left" === u ? (o.top += n[0], o.left -= n[1]) : "right" === u ? (o.top += n[0], o.left += n[1]) : "top" === u ? (o.left += n[0], o.top -= n[1]) : "bottom" === u && (o.left += n[0], o.top += n[1]), e.popper = o, e
								},
								offset: 0
							},
							preventOverflow: {
								order: 300,
								enabled: !0,
								fn: function(e, t) {
									var n = t.boundariesElement || h(e.instance.popper);
									e.instance.reference === n && (n = h(n));
									var r = H("transform"),
										i = e.instance.popper.style,
										a = i.top,
										o = i.left,
										s = i[r];
									i.top = "", i.left = "", i[r] = "";
									var u = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
									i.top = a, i.left = o, i[r] = s, t.boundaries = u;
									var c = t.priority,
										l = e.offsets.popper,
										f = {
											primary: function(e) {
												var n = l[e];
												return l[e] < u[e] && !t.escapeWithReference && (n = Math.max(l[e], u[e])), w({}, e, n)
											},
											secondary: function(e) {
												var n = "right" === e ? "left" : "top",
													r = l[n];
												return l[e] > u[e] && !t.escapeWithReference && (r = Math.min(l[n], u[e] - ("right" === e ? l.width : l.height))), w({}, n, r)
											}
										};
									return c.forEach((function(e) {
										var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
										l = E({}, l, f[t](e))
									})), e.offsets.popper = l, e
								},
								priority: ["left", "right", "top", "bottom"],
								padding: 5,
								boundariesElement: "scrollParent"
							},
							keepTogether: {
								order: 400,
								enabled: !0,
								fn: function(e) {
									var t = e.offsets,
										n = t.popper,
										r = t.reference,
										i = e.placement.split("-")[0],
										a = Math.floor,
										o = -1 !== ["top", "bottom"].indexOf(i),
										s = o ? "right" : "bottom",
										u = o ? "left" : "top",
										c = o ? "width" : "height";
									return n[s] < a(r[u]) && (e.offsets.popper[u] = a(r[u]) - n[c]), n[u] > a(r[s]) && (e.offsets.popper[u] = a(r[s])), e
								}
							},
							arrow: {
								order: 500,
								enabled: !0,
								fn: function(e, t) {
									var n;
									if (!X(e.instance.modifiers, "arrow", "keepTogether")) return e;
									var r = t.element;
									if ("string" == typeof r) {
										if (!(r = e.instance.popper.querySelector(r))) return e
									} else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
									var i = e.placement.split("-")[0],
										a = e.offsets,
										s = a.popper,
										u = a.reference,
										c = -1 !== ["left", "right"].indexOf(i),
										l = c ? "height" : "width",
										f = c ? "Top" : "Left",
										d = f.toLowerCase(),
										h = c ? "left" : "top",
										p = c ? "bottom" : "right",
										_ = D(r)[l];
									u[p] - _ < s[d] && (e.offsets.popper[d] -= s[d] - (u[p] - _)), u[d] + _ > s[p] && (e.offsets.popper[d] += u[d] + _ - s[p]), e.offsets.popper = T(e.offsets.popper);
									var m = u[d] + u[l] / 2 - _ / 2,
										b = o(e.instance.popper),
										g = parseFloat(b["margin" + f]),
										v = parseFloat(b["border" + f + "Width"]),
										y = m - e.offsets.popper[d] - g - v;
									return y = Math.max(Math.min(s[l] - _, y), 0), e.arrowElement = r, e.offsets.arrow = (w(n = {}, d, Math.round(y)), w(n, h, ""), n), e
								},
								element: "[x-arrow]"
							},
							flip: {
								order: 600,
								enabled: !0,
								fn: function(e, t) {
									if (j(e.instance.modifiers, "inner")) return e;
									if (e.flipped && e.placement === e.originalPlacement) return e;
									var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
										r = e.placement.split("-")[0],
										i = B(r),
										a = e.placement.split("-")[1] || "",
										o = [];
									switch (t.behavior) {
										case te:
											o = [r, i];
											break;
										case ne:
											o = ee(r);
											break;
										case re:
											o = ee(r, !0);
											break;
										default:
											o = t.behavior
									}
									return o.forEach((function(s, u) {
										if (r !== s || o.length === u + 1) return e;
										r = e.placement.split("-")[0], i = B(r);
										var c = e.offsets.popper,
											l = e.offsets.reference,
											f = Math.floor,
											d = "left" === r && f(c.right) > f(l.left) || "right" === r && f(c.left) < f(l.right) || "top" === r && f(c.bottom) > f(l.top) || "bottom" === r && f(c.top) < f(l.bottom),
											h = f(c.left) < f(n.left),
											p = f(c.right) > f(n.right),
											_ = f(c.top) < f(n.top),
											m = f(c.bottom) > f(n.bottom),
											b = "left" === r && h || "right" === r && p || "top" === r && _ || "bottom" === r && m,
											g = -1 !== ["top", "bottom"].indexOf(r),
											v = !!t.flipVariations && (g && "start" === a && h || g && "end" === a && p || !g && "start" === a && _ || !g && "end" === a && m),
											y = !!t.flipVariationsByContent && (g && "start" === a && p || g && "end" === a && h || !g && "start" === a && m || !g && "end" === a && _),
											A = v || y;
										(d || b || A) && (e.flipped = !0, (d || b) && (r = o[u + 1]), A && (a = function(e) {
											return "end" === e ? "start" : "start" === e ? "end" : e
										}(a)), e.placement = r + (a ? "-" + a : ""), e.offsets.popper = E({}, e.offsets.popper, N(e.instance.popper, e.offsets.reference, e.placement)), e = F(e.instance.modifiers, e, "flip"))
									})), e
								},
								behavior: "flip",
								padding: 5,
								boundariesElement: "viewport",
								flipVariations: !1,
								flipVariationsByContent: !1
							},
							inner: {
								order: 700,
								enabled: !1,
								fn: function(e) {
									var t = e.placement,
										n = t.split("-")[0],
										r = e.offsets,
										i = r.popper,
										a = r.reference,
										o = -1 !== ["left", "right"].indexOf(n),
										s = -1 === ["top", "left"].indexOf(n);
									return i[o ? "left" : "top"] = a[n] - (s ? i[o ? "width" : "height"] : 0), e.placement = B(t), e.offsets.popper = T(i), e
								}
							},
							hide: {
								order: 800,
								enabled: !0,
								fn: function(e) {
									if (!X(e.instance.modifiers, "hide", "preventOverflow")) return e;
									var t = e.offsets.reference,
										n = R(e.instance.modifiers, (function(e) {
											return "preventOverflow" === e.name
										})).boundaries;
									if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
										if (!0 === e.hide) return e;
										e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
									} else {
										if (!1 === e.hide) return e;
										e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
									}
									return e
								}
							},
							computeStyle: {
								order: 850,
								enabled: !0,
								fn: function(e, t) {
									var n = t.x,
										r = t.y,
										i = e.offsets.popper,
										a = R(e.instance.modifiers, (function(e) {
											return "applyStyle" === e.name
										})).gpuAcceleration;
									void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
									var o, s, u = void 0 !== a ? a : t.gpuAcceleration,
										c = h(e.instance.popper),
										l = C(c),
										f = {
											position: i.position
										},
										d = function(e, t) {
											var n = e.offsets,
												r = n.popper,
												i = n.reference,
												a = Math.round,
												o = Math.floor,
												s = function(e) {
													return e
												},
												u = a(i.width),
												c = a(r.width),
												l = -1 !== ["left", "right"].indexOf(e.placement),
												f = -1 !== e.placement.indexOf("-"),
												d = t ? l || f || u % 2 == c % 2 ? a : o : s,
												h = t ? a : s;
											return {
												left: d(u % 2 == 1 && c % 2 == 1 && !f && t ? r.left - 1 : r.left),
												top: h(r.top),
												bottom: h(r.bottom),
												right: d(r.right)
											}
										}(e, window.devicePixelRatio < 2 || !K),
										p = "bottom" === n ? "top" : "bottom",
										_ = "right" === r ? "left" : "right",
										m = H("transform");
									if (s = "bottom" === p ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -l.height + d.bottom : d.top, o = "right" === _ ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -l.width + d.right : d.left, u && m) f[m] = "translate3d(" + o + "px, " + s + "px, 0)", f[p] = 0, f[_] = 0, f.willChange = "transform";
									else {
										var b = "bottom" === p ? -1 : 1,
											g = "right" === _ ? -1 : 1;
										f[p] = s * b, f[_] = o * g, f.willChange = p + ", " + _
									}
									var v = {
										"x-placement": e.placement
									};
									return e.attributes = E({}, v, e.attributes), e.styles = E({}, f, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e
								},
								gpuAcceleration: !0,
								x: "bottom",
								y: "right"
							},
							applyStyle: {
								order: 900,
								enabled: !0,
								fn: function(e) {
									return W(e.instance.popper, e.styles),
										function(e, t) {
											Object.keys(t).forEach((function(n) {
												!1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
											}))
										}(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && W(e.arrowElement, e.arrowStyles), e
								},
								onLoad: function(e, t, n, r, i) {
									var a = L(i, t, e, n.positionFixed),
										o = I(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
									return t.setAttribute("x-placement", o), W(t, {
										position: n.positionFixed ? "fixed" : "absolute"
									}), n
								},
								gpuAcceleration: void 0
							}
						}
					},
					oe = function() {
						function e(t, n) {
							var r = this,
								o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							A(this, e), this.scheduleUpdate = function() {
								return requestAnimationFrame(r.update)
							}, this.update = i(this.update.bind(this)), this.options = E({}, e.Defaults, o), this.state = {
								isDestroyed: !1,
								isCreated: !1,
								scrollParents: []
							}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
								r.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
							})), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
								return E({
									name: e
								}, r.options.modifiers[e])
							})).sort((function(e, t) {
								return e.order - t.order
							})), this.modifiers.forEach((function(e) {
								e.enabled && a(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
							})), this.update();
							var s = this.options.eventsEnabled;
							s && this.enableEventListeners(), this.state.eventsEnabled = s
						}
						return S(e, [{
							key: "update",
							value: function() {
								return U.call(this)
							}
						}, {
							key: "destroy",
							value: function() {
								return Y.call(this)
							}
						}, {
							key: "enableEventListeners",
							value: function() {
								return Q.call(this)
							}
						}, {
							key: "disableEventListeners",
							value: function() {
								return G.call(this)
							}
						}]), e
					}();
				oe.Utils = ("undefined" != typeof window ? window : e).PopperUtils, oe.placements = J, oe.Defaults = ae, t.a = oe
			}).call(this, n("c8ba"))
		},
		f109: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.UIUtils = void 0;
			var r = n("fdec");
			! function(e) {
				e.traverseTree = function(e, t) {
						var n = function(e, i) {
							if (t(e, i), e instanceof r.Container)
								for (var a = 0, o = e.getComponents(); a < o.length; a++) {
									var s = o[a];
									n(s, e)
								}
						};
						n(e)
					},
					function(e) {
						e[e.LeftArrow = 37] = "LeftArrow", e[e.UpArrow = 38] = "UpArrow", e[e.RightArrow = 39] = "RightArrow", e[e.DownArrow = 40] = "DownArrow", e[e.Space = 32] = "Space", e[e.End = 35] = "End", e[e.Home = 36] = "Home"
					}(e.KeyCode || (e.KeyCode = {}))
			}(t.UIUtils || (t.UIUtils = {}))
		},
		f183: function(e, t, n) {
			var r = n("d012"),
				i = n("861d"),
				a = n("5135"),
				o = n("9bf2").f,
				s = n("90e3"),
				u = n("bb2f"),
				c = s("meta"),
				l = 0,
				f = Object.isExtensible || function() {
					return !0
				},
				d = function(e) {
					o(e, c, {
						value: {
							objectID: "O" + ++l,
							weakData: {}
						}
					})
				},
				h = e.exports = {
					REQUIRED: !1,
					fastKey: function(e, t) {
						if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
						if (!a(e, c)) {
							if (!f(e)) return "F";
							if (!t) return "E";
							d(e)
						}
						return e[c].objectID
					},
					getWeakData: function(e, t) {
						if (!a(e, c)) {
							if (!f(e)) return !0;
							if (!t) return !1;
							d(e)
						}
						return e[c].weakData
					},
					onFreeze: function(e) {
						return u && h.REQUIRED && f(e) && !a(e, c) && d(e), e
					}
				};
			r[c] = !0
		},
		f1b5: function(e, t, n) {
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
			}), t.AudioQualitySelectBox = void 0;
			var i = n("a92a"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-audioqualityselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = function() {
								r.selectItem(t.getAudioQuality().id)
							},
							o = function() {
								var e = t.getAvailableAudioQualities();
								r.clearItems(), r.addItem("auto", a.i18n.getLocalizer("auto"));
								for (var n = 0, o = e; n < o.length; n++) {
									var s = o[n];
									r.addItem(s.id, s.label)
								}
								i()
							};
						this.onItemSelected.subscribe((function(e, n) {
							t.setAudioQuality(n)
						})), t.on(t.exports.PlayerEvent.AudioChanged, o), t.on(t.exports.PlayerEvent.SourceUnloaded, o), t.on(t.exports.PlayerEvent.PeriodSwitched, o), t.on(t.exports.PlayerEvent.AudioQualityChanged, i), t.exports.PlayerEvent.AudioQualityAdded && (t.on(t.exports.PlayerEvent.AudioQualityAdded, o), t.on(t.exports.PlayerEvent.AudioQualityRemoved, o)), n.getConfig().events.onUpdated.subscribe(o)
					}, t
				}(i.SelectBox);
			t.AudioQualitySelectBox = o
		},
		f206: function(e, t, n) {
			e.exports = function(e) {
				var t = {};

				function n(r) {
					if (t[r]) return t[r].exports;
					var i = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
				}
				return n.m = e, n.c = t, n.i = function(e) {
					return e
				}, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						configurable: !1,
						enumerable: !0,
						get: r
					})
				}, n.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return n.d(t, "a", t), t
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, n.p = "/dist/", n(n.s = 2)
			}([function(e, t, n) {
				n(8);
				var r = n(6)(n(1), n(7), "data-v-25adc6c0", null);
				e.exports = r.exports
			}, function(e, t, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = n(3),
					i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					a = "#75c791",
					o = "#fff";
				t.default = {
					name: "ToggleButton",
					props: {
						value: {
							type: Boolean,
							default: !1
						},
						name: {
							type: String
						},
						disabled: {
							type: Boolean,
							default: !1
						},
						tag: {
							type: String
						},
						sync: {
							type: Boolean,
							default: !1
						},
						speed: {
							type: Number,
							default: 300
						},
						color: {
							type: [String, Object],
							validator: function(e) {
								return n.i(r.a)(e) || n.i(r.b)(e, "checked") || n.i(r.b)(e, "unchecked") || n.i(r.b)(e, "disabled")
							}
						},
						switchColor: {
							type: [String, Object],
							validator: function(e) {
								return n.i(r.a)(e) || n.i(r.b)(e, "checked") || n.i(r.b)(e, "unchecked")
							}
						},
						cssColors: {
							type: Boolean,
							default: !1
						},
						labels: {
							type: [Boolean, Object],
							default: !1,
							validator: function(e) {
								return "object" === (void 0 === e ? "undefined" : i(e)) ? e.checked || e.unchecked : "boolean" == typeof e
							}
						},
						height: {
							type: Number,
							default: 22
						},
						width: {
							type: Number,
							default: 50
						},
						margin: {
							type: Number,
							default: 3
						},
						fontSize: {
							type: Number
						}
					},
					computed: {
						className: function() {
							return ["vue-js-switch", {
								toggled: this.toggled,
								disabled: this.disabled
							}]
						},
						coreStyle: function() {
							return {
								width: n.i(r.c)(this.width),
								height: n.i(r.c)(this.height),
								backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
								borderRadius: n.i(r.c)(Math.round(this.height / 2))
							}
						},
						buttonRadius: function() {
							return this.height - 2 * this.margin
						},
						distance: function() {
							return n.i(r.c)(this.width - this.height + this.margin)
						},
						buttonStyle: function() {
							var e = "transform " + this.speed + "ms",
								t = n.i(r.c)(this.margin),
								i = this.toggled ? n.i(r.d)(this.distance, t) : n.i(r.d)(t, t),
								a = this.switchColor ? this.switchColorCurrent : null;
							return {
								width: n.i(r.c)(this.buttonRadius),
								height: n.i(r.c)(this.buttonRadius),
								transition: e,
								transform: i,
								background: a
							}
						},
						labelStyle: function() {
							return {
								lineHeight: n.i(r.c)(this.height),
								fontSize: this.fontSize ? n.i(r.c)(this.fontSize) : null
							}
						},
						colorChecked: function() {
							var e = this.color;
							return n.i(r.e)(e) ? n.i(r.f)(e, "checked", a) : e || a
						},
						colorUnchecked: function() {
							return n.i(r.f)(this.color, "unchecked", "#bfcbd9")
						},
						colorDisabled: function() {
							return n.i(r.f)(this.color, "disabled", this.colorCurrent)
						},
						colorCurrent: function() {
							return this.toggled ? this.colorChecked : this.colorUnchecked
						},
						labelChecked: function() {
							return n.i(r.f)(this.labels, "checked", "on")
						},
						labelUnchecked: function() {
							return n.i(r.f)(this.labels, "unchecked", "off")
						},
						switchColorChecked: function() {
							return n.i(r.f)(this.switchColor, "checked", o)
						},
						switchColorUnchecked: function() {
							return n.i(r.f)(this.switchColor, "unchecked", o)
						},
						switchColorCurrent: function() {
							return this.switchColor, n.i(r.e)(this.switchColor) ? this.toggled ? this.switchColorChecked : this.switchColorUnchecked : this.switchColor || o
						}
					},
					watch: {
						value: function(e) {
							this.sync && (this.toggled = !!e)
						}
					},
					data: function() {
						return {
							toggled: !!this.value
						}
					},
					methods: {
						toggle: function(e) {
							var t = !this.toggled;
							this.sync || (this.toggled = t), this.$emit("input", t), this.$emit("change", {
								value: t,
								tag: this.tag,
								srcEvent: e
							})
						}
					}
				}
			}, function(e, t, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = n(0),
					i = n.n(r);
				n.d(t, "ToggleButton", (function() {
					return i.a
				}));
				var a = !1;
				t.default = {
					install: function(e) {
						a || (e.component("ToggleButton", i.a), a = !0)
					}
				}
			}, function(e, t, n) {
				"use strict";
				n.d(t, "a", (function() {
					return i
				})), n.d(t, "e", (function() {
					return a
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "f", (function() {
					return s
				})), n.d(t, "c", (function() {
					return u
				})), n.d(t, "d", (function() {
					return c
				}));
				var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					i = function(e) {
						return "string" == typeof e
					},
					a = function(e) {
						return "object" === (void 0 === e ? "undefined" : r(e))
					},
					o = function(e, t) {
						return a(e) && e.hasOwnProperty(t)
					},
					s = function(e, t, n) {
						return o(e, t) ? e[t] : n
					},
					u = function(e) {
						return e + "px"
					},
					c = function(e, t) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0px";
						return "translate3d(" + e + ", " + t + ", " + n + ")"
					}
			}, function(e, t, n) {
				(e.exports = n(5)()).push([e.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""])
			}, function(e, t) {
				e.exports = function() {
					var e = [];
					return e.toString = function() {
						for (var e = [], t = 0; t < this.length; t++) {
							var n = this[t];
							n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
						}
						return e.join("")
					}, e.i = function(t, n) {
						"string" == typeof t && (t = [
							[null, t, ""]
						]);
						for (var r = {}, i = 0; i < this.length; i++) {
							var a = this[i][0];
							"number" == typeof a && (r[a] = !0)
						}
						for (i = 0; i < t.length; i++) {
							var o = t[i];
							"number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
						}
					}, e
				}
			}, function(e, t) {
				e.exports = function(e, t, n, r) {
					var i, a = e = e || {},
						o = typeof e.default;
					"object" !== o && "function" !== o || (i = e, a = e.default);
					var s = "function" == typeof a ? a.options : a;
					if (t && (s.render = t.render, s.staticRenderFns = t.staticRenderFns), n && (s._scopeId = n), r) {
						var u = Object.create(s.computed || null);
						Object.keys(r).forEach((function(e) {
							var t = r[e];
							u[e] = function() {
								return t
							}
						})), s.computed = u
					}
					return {
						esModule: i,
						exports: a,
						options: s
					}
				}
			}, function(e, t) {
				e.exports = {
					render: function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t;
						return n("label", {
							class: e.className
						}, [n("input", {
							staticClass: "v-switch-input",
							attrs: {
								type: "checkbox",
								name: e.name,
								disabled: e.disabled
							},
							domProps: {
								checked: e.value
							},
							on: {
								change: function(t) {
									return t.stopPropagation(), e.toggle(t)
								}
							}
						}), e._v(" "), n("div", {
							staticClass: "v-switch-core",
							style: e.coreStyle
						}, [n("div", {
							staticClass: "v-switch-button",
							style: e.buttonStyle
						})]), e._v(" "), e.labels ? [e.toggled ? n("span", {
							staticClass: "v-switch-label v-left",
							style: e.labelStyle
						}, [e._t("checked", [
							[e._v(e._s(e.labelChecked))]
						])], 2) : n("span", {
							staticClass: "v-switch-label v-right",
							style: e.labelStyle
						}, [e._t("unchecked", [
							[e._v(e._s(e.labelUnchecked))]
						])], 2)] : e._e()], 2)
					},
					staticRenderFns: []
				}
			}, function(e, t, n) {
				var r = n(4);
				"string" == typeof r && (r = [
					[e.i, r, ""]
				]), r.locals && (e.exports = r.locals), n(9)("2283861f", r, !0)
			}, function(e, t, n) {
				var r = "undefined" != typeof document;
				if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
				var i = n(10),
					a = {},
					o = r && (document.head || document.getElementsByTagName("head")[0]),
					s = null,
					u = 0,
					c = !1,
					l = function() {},
					f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

				function d(e) {
					for (var t = 0; t < e.length; t++) {
						var n = e[t],
							r = a[n.id];
						if (r) {
							r.refs++;
							for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
							for (; i < n.parts.length; i++) r.parts.push(p(n.parts[i]));
							r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
						} else {
							var o = [];
							for (i = 0; i < n.parts.length; i++) o.push(p(n.parts[i]));
							a[n.id] = {
								id: n.id,
								refs: 1,
								parts: o
							}
						}
					}
				}

				function h() {
					var e = document.createElement("style");
					return e.type = "text/css", o.appendChild(e), e
				}

				function p(e) {
					var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
					if (r) {
						if (c) return l;
						r.parentNode.removeChild(r)
					}
					if (f) {
						var i = u++;
						r = s || (s = h()), t = m.bind(null, r, i, !1), n = m.bind(null, r, i, !0)
					} else r = h(), t = b.bind(null, r), n = function() {
						r.parentNode.removeChild(r)
					};
					return t(e),
						function(r) {
							if (r) {
								if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
								t(e = r)
							} else n()
						}
				}
				e.exports = function(e, t, n) {
					c = n;
					var r = i(e, t);
					return d(r),
						function(t) {
							for (var n = [], o = 0; o < r.length; o++) {
								var s = r[o],
									u = a[s.id];
								u.refs--, n.push(u)
							}
							for (t ? d(r = i(e, t)) : r = [], o = 0; o < n.length; o++)
								if (0 === (u = n[o]).refs) {
									for (var c = 0; c < u.parts.length; c++) u.parts[c]();
									delete a[u.id]
								}
						}
				};
				var _ = function() {
					var e = [];
					return function(t, n) {
						return e[t] = n, e.filter(Boolean).join("\n")
					}
				}();

				function m(e, t, n, r) {
					var i = n ? "" : r.css;
					if (e.styleSheet) e.styleSheet.cssText = _(t, i);
					else {
						var a = document.createTextNode(i),
							o = e.childNodes;
						o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
					}
				}

				function b(e, t) {
					var n = t.css,
						r = t.media,
						i = t.sourceMap;
					if (r && e.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
					else {
						for (; e.firstChild;) e.removeChild(e.firstChild);
						e.appendChild(document.createTextNode(n))
					}
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					for (var n = [], r = {}, i = 0; i < t.length; i++) {
						var a = t[i],
							o = a[0],
							s = {
								id: e + ":" + i,
								css: a[1],
								media: a[2],
								sourceMap: a[3]
							};
						r[o] ? r[o].parts.push(s) : n.push(r[o] = {
							id: o,
							parts: [s]
						})
					}
					return n
				}
			}])
		},
		f23d: function(e, t, n) {
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
			}), t.VolumeToggleButton = void 0;
			var i = n("30b0"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this,
							r = {
								cssClass: "ui-volumetogglebutton",
								text: a.i18n.getLocalizer("settings.audio.mute"),
								onClass: "muted",
								offClass: "unmuted",
								ariaLabel: a.i18n.getLocalizer("settings.audio.mute")
							};
						return n.config = n.mergeConfig(t, r, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = n.getConfig().volumeController;
						i.onChanged.subscribe((function(e, t) {
							t.muted ? r.on() : r.off();
							var n = Math.ceil(t.volume / 10);
							r.getDomElement().data(r.prefixCss("volume-level-tens"), String(n))
						})), this.onClick.subscribe((function() {
							i.toggleMuted()
						})), i.onChangedEvent()
					}, t
				}(i.ToggleButton);
			t.VolumeToggleButton = o
		},
		f260: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("pt", {
					months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
					monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
					weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
					weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
					weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY HH:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Hoje Ã s] LT",
						nextDay: "[AmanhÃ£ Ã s] LT",
						nextWeek: "dddd [Ã s] LT",
						lastDay: "[Ontem Ã s] LT",
						lastWeek: function() {
							return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "em %s",
						past: "hÃ¡ %s",
						s: "segundos",
						ss: "%d segundos",
						m: "um minuto",
						mm: "%d minutos",
						h: "uma hora",
						hh: "%d horas",
						d: "um dia",
						dd: "%d dias",
						w: "uma semana",
						ww: "%d semanas",
						M: "um mÃªs",
						MM: "%d meses",
						y: "um ano",
						yy: "%d anos"
					},
					dayOfMonthOrdinalParse: /\d{1,2}Âº/,
					ordinal: "%dÂº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		f3ff: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à©§",
						2: "à©¨",
						3: "à©©",
						4: "à©ª",
						5: "à©«",
						6: "à©¬",
						7: "à©­",
						8: "à©®",
						9: "à©¯",
						0: "à©¦"
					},
					n = {
						"à©§": "1",
						"à©¨": "2",
						"à©©": "3",
						"à©ª": "4",
						"à©«": "5",
						"à©¬": "6",
						"à©­": "7",
						"à©®": "8",
						"à©¯": "9",
						"à©¦": "0"
					};
				e.defineLocale("pa-in", {
					months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
					monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
					weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
					weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
					weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
					longDateFormat: {
						LT: "A h:mm à¨µà¨œà©‡",
						LTS: "A h:mm:ss à¨µà¨œà©‡",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
						LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
					},
					calendar: {
						sameDay: "[à¨…à¨œ] LT",
						nextDay: "[à¨•à¨²] LT",
						nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
						lastDay: "[à¨•à¨²] LT",
						lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à¨µà¨¿à©±à¨š",
						past: "%s à¨ªà¨¿à¨›à¨²à©‡",
						s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
						ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
						m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
						mm: "%d à¨®à¨¿à©°à¨Ÿ",
						h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
						hh: "%d à¨˜à©°à¨Ÿà©‡",
						d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
						dd: "%d à¨¦à¨¿à¨¨",
						M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
						MM: "%d à¨®à¨¹à©€à¨¨à©‡",
						y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
						yy: "%d à¨¸à¨¾à¨²"
					},
					preparse: function(e) {
						return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		f404: function(e, t, n) {
			"use strict";

			function r(e) {
				switch (Object.prototype.toString.call(e)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
						return !0;
					default:
						return _(e, Error)
				}
			}

			function i(e) {
				return "[object ErrorEvent]" === Object.prototype.toString.call(e)
			}

			function a(e) {
				return "[object DOMError]" === Object.prototype.toString.call(e)
			}

			function o(e) {
				return "[object DOMException]" === Object.prototype.toString.call(e)
			}

			function s(e) {
				return "[object String]" === Object.prototype.toString.call(e)
			}

			function u(e) {
				return null === e || "object" != typeof e && "function" != typeof e
			}

			function c(e) {
				return "[object Object]" === Object.prototype.toString.call(e)
			}

			function l(e) {
				return "undefined" != typeof Event && _(e, Event)
			}

			function f(e) {
				return "undefined" != typeof Element && _(e, Element)
			}

			function d(e) {
				return "[object RegExp]" === Object.prototype.toString.call(e)
			}

			function h(e) {
				return Boolean(e && e.then && "function" == typeof e.then)
			}

			function p(e) {
				return c(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
			}

			function _(e, t) {
				try {
					return e instanceof t
				} catch (e) {
					return !1
				}
			}
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "k", (function() {
				return s
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "g", (function() {
				return _
			}))
		},
		f494: function(e, t, n) {
			e.exports = function(e) {
				function t(e) {
					let n, i = null;

					function a(...e) {
						if (!a.enabled) return;
						const r = a,
							i = Number(new Date),
							o = i - (n || i);
						r.diff = o, r.prev = n, r.curr = i, n = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
						let s = 0;
						e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
							if ("%%" === n) return "%";
							s++;
							const a = t.formatters[i];
							if ("function" == typeof a) {
								const t = e[s];
								n = a.call(r, t), e.splice(s, 1), s--
							}
							return n
						}), t.formatArgs.call(r, e);
						(r.log || t.log).apply(r, e)
					}
					return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
						enumerable: !0,
						configurable: !1,
						get: () => null === i ? t.enabled(e) : i,
						set: e => {
							i = e
						}
					}), "function" == typeof t.init && t.init(a), a
				}

				function r(e, n) {
					const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
					return r.log = this.log, r
				}

				function i(e) {
					return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
				}
				return t.debug = t, t.default = t, t.coerce = function(e) {
					return e instanceof Error ? e.stack || e.message : e
				}, t.disable = function() {
					const e = [...t.names.map(i), ...t.skips.map(i).map(e => "-" + e)].join(",");
					return t.enable(""), e
				}, t.enable = function(e) {
					let n;
					t.save(e), t.names = [], t.skips = [];
					const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
						i = r.length;
					for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
				}, t.enabled = function(e) {
					if ("*" === e[e.length - 1]) return !0;
					let n, r;
					for (n = 0, r = t.skips.length; n < r; n++)
						if (t.skips[n].test(e)) return !1;
					for (n = 0, r = t.names.length; n < r; n++)
						if (t.names[n].test(e)) return !0;
					return !1
				}, t.humanize = n("b835"), t.destroy = function() {
					console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
				}, Object.keys(e).forEach(n => {
					t[n] = e[n]
				}), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
					let n = 0;
					for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
					return t.colors[Math.abs(n) % t.colors.length]
				}, t.enable(t.load()), t
			}
		},
		f5df: function(e, t, n) {
			var r = n("00ee"),
				i = n("c6b6"),
				a = n("b622")("toStringTag"),
				o = "Arguments" == i(function() {
					return arguments
				}());
			e.exports = r ? i : function(e) {
				var t, n, r;
				return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
					try {
						return e[t]
					} catch (e) {}
				}(t = Object(e), a)) ? n : o ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
			}
		},
		f6b4: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("gd", {
					months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
					monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
					monthsParseExact: !0,
					weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
					weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
					weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[An-diugh aig] LT",
						nextDay: "[A-mÃ ireach aig] LT",
						nextWeek: "dddd [aig] LT",
						lastDay: "[An-dÃ¨ aig] LT",
						lastWeek: "dddd [seo chaidh] [aig] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ann an %s",
						past: "bho chionn %s",
						s: "beagan diogan",
						ss: "%d diogan",
						m: "mionaid",
						mm: "%d mionaidean",
						h: "uair",
						hh: "%d uairean",
						d: "latha",
						dd: "%d latha",
						M: "mÃ¬os",
						MM: "%d mÃ¬osan",
						y: "bliadhna",
						yy: "%d bliadhna"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
					ordinal: function(e) {
						return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		f6b49: function(e, t, n) {
			"use strict";
			var r = n("c532");

			function i() {
				this.handlers = []
			}
			i.prototype.use = function(e, t) {
				return this.handlers.push({
					fulfilled: e,
					rejected: t
				}), this.handlers.length - 1
			}, i.prototype.eject = function(e) {
				this.handlers[e] && (this.handlers[e] = null)
			}, i.prototype.forEach = function(e) {
				r.forEach(this.handlers, (function(t) {
					null !== t && e(t)
				}))
			}, e.exports = i
		},
		f6c8: function(e, t, n) {
			e.exports = function(e) {
				function t(r) {
					if (n[r]) return n[r].exports;
					var i = n[r] = {
						exports: {},
						id: r,
						loaded: !1
					};
					return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
				}
				var n = {};
				return t.m = e, t.c = n, t.p = "", t(0)
			}([function(e, t, n) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Component = t.Bus = void 0;
				var i = r(n(1)),
					a = r(n(23));
				t.default = {
					install: function(e) {
						e.prototype.$vuedals = new e({
							name: "$vuedals",
							created: function() {
								var e = this;
								i.default.$on("opened", (function(t) {
									e.$emit("vuedals:opened", t)
								})), i.default.$on("closed", (function(t) {
									e.$emit("vuedals:closed", t)
								})), i.default.$on("destroyed", (function(t) {
									e.$emit("vuedals:destroyed", t)
								})), this.$on("new", (function(t) {
									e.open(t)
								})), this.$on("close", (function(t) {
									e.close(t)
								})), this.$on("dismiss", (function(t) {
									e.dismiss(t || null)
								}))
							},
							methods: {
								open: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
									i.default.$emit("new", e)
								},
								close: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
									i.default.$emit("close", e)
								},
								dismiss: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
									i.default.$emit("dismiss", e)
								}
							}
						}), e.mixin({
							created: function() {
								this.$on("vuedals:new", (function(e) {
									i.default.$emit("new", e)
								})), this.$on("vuedals:close", (function(e) {
									i.default.$emit("close", e)
								})), this.$on("vuedals:dismiss", (function(e) {
									i.default.$emit("dismiss", e)
								}))
							}
						})
					}
				}, t.Bus = i.default, t.Component = a.default
			}, function(e, t, n) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = r(n(2)),
					a = r(n(3)),
					o = null,
					s = function() {
						function e() {
							return (0, i.default)(this, e), o || (this.events = {}, o = this), o
						}
						return (0, a.default)(e, [{
							key: "$emit",
							value: function(e, t) {
								if (this.events[e])
									for (var n = this.events[e], r = 0, i = n.length; r < i; r++) n[r].call(this, t)
							}
						}, {
							key: "$on",
							value: function(e, t) {
								this.events[e] || (this.events[e] = []), this.events[e].push(t)
							}
						}]), e
					}();
				t.default = new s
			}, function(e, t) {
				"use strict";
				t.__esModule = !0, t.default = function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
			}, function(e, t, n) {
				"use strict";
				t.__esModule = !0;
				var r = function(e) {
					return e && e.__esModule ? e : {

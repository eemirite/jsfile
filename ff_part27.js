		a518: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = "<anonymous>";

			function i(e) {
				try {
					return e && "function" == typeof e && e.name || r
				} catch (e) {
					return r
				}
			}
		},
		a584: function(e, t, n) {
			"use strict";
			var r = n("2b0e");

			function i(e) {
				return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function o(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? o(Object(n), !0).forEach((function(t) {
						a(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var u = function(e) {
					return "function" == typeof e
				},
				c = function(e) {
					return e && "object" === i(e) && !Array.isArray(e)
				},
				l = function e(t) {
					for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
					if (!r.length) return t;
					var o = r.shift();
					if (c(t) && c(o)) {
						for (var s in o) c(o[s]) ? (t[s] || Object.assign(t, a({}, s, {})), e(t[s], o[s])) : Object.assign(t, a({}, s, o[s]));
						return e.apply(void 0, [t].concat(r))
					}
				},
				f = function() {
					return "undefined" != typeof window && "undefined" != typeof document
				},
				d = function(e) {
					f()
				},
				h = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return d(0, e.app_name), d(0, e.screen_name), e
				};

			function p() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = e.split("/"),
					r = t.split("/");
				return "" === n[0] && "/" === t[t.length - 1] && n.shift(), r.join("/") + n.join("/")
			}
			var _, m = {},
				b = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = {
							bootstrap: !0,
							onReady: null,
							onError: null,
							onBeforeTrack: null,
							onAfterTrack: null,
							pageTrackerTemplate: null,
							customResourceURL: "https://www.googletagmanager.com/gtag/js",
							customPreconnectOrigin: "https://www.googletagmanager.com",
							deferScriptLoad: !1,
							pageTrackerExcludedRoutes: [],
							pageTrackerEnabled: !0,
							enabled: !0,
							disableScriptLoad: !1,
							pageTrackerScreenviewEnabled: !1,
							appName: null,
							pageTrackerUseFullPath: !1,
							pageTrackerPrependBase: !0,
							pageTrackerSkipSamePath: !0,
							globalDataLayerName: "dataLayer",
							globalObjectName: "gtag",
							defaultGroupName: "default",
							includes: null,
							config: {
								id: null,
								params: {
									send_page_view: !1
								}
							}
						};
					m = l(t, e)
				},
				g = function() {
					return m
				},
				v = function() {
					var e, t = g(),
						n = t.globalObjectName;
					f() && void 0 !== window[n] && (e = window)[n].apply(e, arguments)
				},
				y = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					var r = g(),
						i = r.config,
						a = r.includes;
					v.apply(void 0, ["config", i.id].concat(t)), Array.isArray(a) && a.forEach((function(e) {
						v.apply(void 0, ["config", e.id].concat(t))
					}))
				},
				A = function(e, t) {
					f() && (window["ga-disable-".concat(e)] = t)
				},
				S = function() {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = g(),
						n = t.config,
						r = t.includes;
					A(n.id, e), Array.isArray(r) && r.forEach((function(t) {
						return A(t.id, e)
					}))
				},
				w = function() {
					S(!0)
				},
				E = function(e) {
					_ = e
				},
				T = function() {
					return _
				},
				C = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = g(),
						r = n.includes,
						i = n.defaultGroupName;
					null == t.send_to && Array.isArray(r) && r.length && (t.send_to = r.map((function(e) {
						return e.id
					})).concat(i)), v("event", e, t)
				},
				$ = function(e) {
					if (f()) {
						var t;
						if ("string" == typeof e) t = {
							page_path: e
						};
						else if (e.path || e.fullPath) {
							var n = g(),
								r = n.pageTrackerUseFullPath,
								i = n.pageTrackerPrependBase,
								a = T(),
								o = a && a.options.base,
								u = r ? e.fullPath : e.path;
							t = s(s({}, e.name && {
								page_title: e.name
							}), {}, {
								page_path: i ? p(u, o) : u
							})
						} else t = e;
						null == t.page_location && (t.page_location = window.location.href), null == t.send_page_view && (t.send_page_view = !0), C("page_view", t)
					}
				},
				k = function(e) {
					var t, n = g().appName;
					e && ((t = "string" == typeof e ? {
						screen_name: e
					} : e).app_name = t.app_name || n, C("screen_view", t))
				},
				O = Object.freeze({
					__proto__: null,
					query: v,
					config: y,
					optOut: w,
					optIn: function() {
						S(!1)
					},
					pageview: $,
					screenview: k,
					exception: function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						C.apply(void 0, ["exception"].concat(t))
					},
					linker: function(e) {
						y("linker", e)
					},
					time: function(e) {
						C("timing_complete", e)
					},
					set: function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						v.apply(void 0, ["set"].concat(t))
					},
					refund: function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						C.apply(void 0, ["refund"].concat(t))
					},
					purchase: function(e) {
						C("purchase", e)
					},
					customMap: function(e) {
						y({
							custom_map: e
						})
					},
					event: C
				}),
				x = function(e) {
					return e.$gtag = e.prototype.$gtag = O
				},
				P = function() {
					if (f()) {
						var e = g(),
							t = e.enabled,
							n = e.globalObjectName,
							r = e.globalDataLayerName;
						return null == window[n] && (window[r] = window[r] || [], window[n] = function() {
							window[r].push(arguments)
						}), window[n]("js", new Date), t || w(), window[n]
					}
				},
				M = function(e) {
					return s({
						send_page_view: !1
					}, e)
				},
				I = function() {
					var e = g(),
						t = e.config,
						n = e.includes;
					v("config", t.id, M(t.params)), Array.isArray(n) && n.forEach((function(e) {
						v("config", e.id, M(e.params))
					}))
				},
				L = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = g(),
						r = n.appName,
						i = n.pageTrackerTemplate,
						a = n.pageTrackerScreenviewEnabled,
						o = n.pageTrackerSkipSamePath;
					if (!o || e.path !== t.path) {
						var s = e;
						u(i) ? s = i(e, t) : a && (s = h({
							app_name: r,
							screen_name: e.name
						})), a ? k(s) : $(s)
					}
				},
				D = function(e) {
					var t = g().pageTrackerExcludedRoutes;
					return t.includes(e.path) || t.includes(e.name)
				},
				B = function() {
					var e = g(),
						t = e.onBeforeTrack,
						n = e.onAfterTrack,
						i = T();
					i.onReady((function() {
						r.default.nextTick().then((function() {
							var e = i.currentRoute;
							I(), D(e) || L(e)
						})), i.afterEach((function(e, i) {
							r.default.nextTick().then((function() {
								D(e) || (u(t) && t(e, i), L(e, i), u(n) && n(e, i))
							}))
						}))
					}))
				},
				N = function() {
					var e = g(),
						t = e.onReady,
						n = e.onError,
						r = e.globalObjectName,
						i = e.globalDataLayerName,
						a = e.config,
						o = e.customResourceURL,
						s = e.customPreconnectOrigin,
						u = e.deferScriptLoad,
						c = e.pageTrackerEnabled,
						l = e.disableScriptLoad,
						f = Boolean(c && T());
					if (P(), f ? B() : I(), !l) return function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return new Promise((function(n, r) {
							if ("undefined" != typeof document) {
								var i = document.head || document.getElementsByTagName("head")[0],
									a = document.createElement("script");
								if (a.async = !0, a.src = e, a.defer = t.defer, t.preconnectOrigin) {
									var o = document.createElement("link");
									o.href = t.preconnectOrigin, o.rel = "preconnect", i.appendChild(o)
								}
								i.appendChild(a), a.onload = n, a.onerror = r
							}
						}))
					}("".concat(o, "?id=").concat(a.id, "&l=").concat(i), {
						preconnectOrigin: s,
						defer: u
					}).then((function() {
						t && t(window[r])
					})).catch((function(e) {
						return n && n(e), e
					}))
				};
			t.a = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = arguments.length > 2 ? arguments[2] : void 0;
				x(e), b(t), E(n), g().bootstrap && N()
			}
		},
		a5ab: function(e, t, n) {
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
			}), t.AudioTrackListBox = void 0;
			var i = n("1521"),
				a = n("9a21"),
				o = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n), new a.AudioTrackSwitchHandler(t, this, n)
					}, t
				}(i.ListBox);
			t.AudioTrackListBox = o
		},
		a630: function(e, t, n) {
			var r = n("23e7"),
				i = n("4df4");
			r({
				target: "Array",
				stat: !0,
				forced: !n("1c7e")((function(e) {
					Array.from(e)
				}))
			}, {
				from: i
			})
		},
		a640: function(e, t, n) {
			"use strict";
			var r = n("d039");
			e.exports = function(e, t) {
				var n = [][e];
				return !!n && r((function() {
					n.call(null, t || function() {
						throw 1
					}, 1)
				}))
			}
		},
		a646: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.SeekBarController = t.SeekBarType = void 0;
			var r, i = n("f109");
			! function(e) {
				e[e.Vod = 0] = "Vod", e[e.Live = 1] = "Live", e[e.Volume = 2] = "Volume"
			}(r = t.SeekBarType || (t.SeekBarType = {}));
			var a = function(e, t, n) {
					e < t.min ? n(t.min) : e > t.max ? n(t.max) : n(e)
				},
				o = function() {
					function e(e, t, n) {
						this.keyStepIncrements = e, this.player = t, this.volumeController = n
					}
					return e.prototype.arrowKeyControls = function(e, t, n) {
						var r = this,
							i = Math.floor(e);
						return {
							left: function() {
								return a(i - r.keyStepIncrements.leftRight, t, n)
							},
							right: function() {
								return a(i + r.keyStepIncrements.leftRight, t, n)
							},
							up: function() {
								return a(i + r.keyStepIncrements.upDown, t, n)
							},
							down: function() {
								return a(i - r.keyStepIncrements.upDown, t, n)
							},
							home: function() {
								return a(t.min, t, n)
							},
							end: function() {
								return a(t.max, t, n)
							}
						}
					}, e.prototype.seekBarControls = function(e) {
						if (e === r.Live) return this.arrowKeyControls(this.player.getTimeShift(), {
							min: this.player.getMaxTimeShift(),
							max: 0
						}, this.player.timeShift);
						if (e === r.Vod) return this.arrowKeyControls(this.player.getCurrentTime(), {
							min: 0,
							max: this.player.getDuration()
						}, this.player.seek);
						if (e === r.Volume && null != this.volumeController) {
							var t = this.volumeController.startTransition();
							return this.arrowKeyControls(this.player.getVolume(), {
								min: 0,
								max: 100
							}, t.finish.bind(t))
						}
					}, e.prototype.setSeekBarControls = function(e, t) {
						var n = this;
						e.on("keydown", (function(e) {
							var r = n.seekBarControls(t());
							switch (e.keyCode) {
								case i.UIUtils.KeyCode.LeftArrow:
									r.left(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.RightArrow:
									r.right(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.UpArrow:
									r.up(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.DownArrow:
									r.down(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.Home:
									r.home(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.End:
									r.end(), e.preventDefault();
									break;
								case i.UIUtils.KeyCode.Space:
									n.player.isPlaying() ? n.player.pause() : n.player.play(), e.preventDefault()
							}
						}))
					}, e
				}();
			t.SeekBarController = o
		},
		a691: function(e, t) {
			var n = Math.ceil,
				r = Math.floor;
			e.exports = function(e) {
				return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
			}
		},
		a79d: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("c430"),
				a = n("fea9"),
				o = n("d039"),
				s = n("d066"),
				u = n("4840"),
				c = n("cdf9"),
				l = n("6eeb");
			r({
				target: "Promise",
				proto: !0,
				real: !0,
				forced: !!a && o((function() {
					a.prototype.finally.call({
						then: function() {}
					}, (function() {}))
				}))
			}, {
				finally: function(e) {
					var t = u(this, s("Promise")),
						n = "function" == typeof e;
					return this.then(n ? function(n) {
						return c(t, e()).then((function() {
							return n
						}))
					} : e, n ? function(n) {
						return c(t, e()).then((function() {
							throw n
						}))
					} : e)
				}
			}), i || "function" != typeof a || a.prototype.finally || l(a.prototype, "finally", s("Promise").prototype.finally)
		},
		a7fa: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("bm", {
					months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
					monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
					weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
					weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
					weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "MMMM [tile] D [san] YYYY",
						LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
						LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
					},
					calendar: {
						sameDay: "[Bi lÉ›rÉ›] LT",
						nextDay: "[Sini lÉ›rÉ›] LT",
						nextWeek: "dddd [don lÉ›rÉ›] LT",
						lastDay: "[Kunu lÉ›rÉ›] LT",
						lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s kÉ”nÉ”",
						past: "a bÉ› %s bÉ”",
						s: "sanga dama dama",
						ss: "sekondi %d",
						m: "miniti kelen",
						mm: "miniti %d",
						h: "lÉ›rÉ› kelen",
						hh: "lÉ›rÉ› %d",
						d: "tile kelen",
						dd: "tile %d",
						M: "kalo kelen",
						MM: "kalo %d",
						y: "san kelen",
						yy: "san %d"
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		a8a8: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.reconstructPacket = t.deconstructPacket = void 0;
			const r = n("ca65");

			function i(e, t) {
				if (!e) return e;
				if (r.isBinary(e)) {
					const n = {
						_placeholder: !0,
						num: t.length
					};
					return t.push(e), n
				}
				if (Array.isArray(e)) {
					const n = new Array(e.length);
					for (let r = 0; r < e.length; r++) n[r] = i(e[r], t);
					return n
				}
				if ("object" == typeof e && !(e instanceof Date)) {
					const n = {};
					for (const r in e) e.hasOwnProperty(r) && (n[r] = i(e[r], t));
					return n
				}
				return e
			}
			t.deconstructPacket = function(e) {
				const t = [],
					n = e.data,
					r = e;
				return r.data = i(n, t), r.attachments = t.length, {
					packet: r,
					buffers: t
				}
			}, t.reconstructPacket = function(e, t) {
				return e.data = function e(t, n) {
					if (!t) return t;
					if (t && t._placeholder) return n[t.num];
					if (Array.isArray(t))
						for (let r = 0; r < t.length; r++) t[r] = e(t[r], n);
					else if ("object" == typeof t)
						for (const r in t) t.hasOwnProperty(r) && (t[r] = e(t[r], n));
					return t
				}(e.data, t), e.attachments = void 0, e
			}
		},
		a92a: function(e, t, n) {
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
			}), t.SelectBox = void 0;
			var i = n("1c57"),
				a = n("571d"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-selectbox"
						}, n.config), n
					}
					return r(t, e), t.prototype.toDomElement = function() {
						var e = this,
							t = new a.DOM("select", {
								id: this.config.id,
								class: this.getCssClasses(),
								"aria-label": o.i18n.performLocalization(this.config.ariaLabel)
							});
						return this.selectElement = t, this.updateDomItems(), t.on("change", (function() {
							var n = t.val();
							e.onItemSelectedEvent(n, !1)
						})), t
					}, t.prototype.updateDomItems = function(e) {
						void 0 === e && (e = null), this.selectElement.empty();
						for (var t = 0, n = this.items; t < n.length; t++) {
							var r = n[t],
								i = new a.DOM("option", {
									value: String(r.key)
								}).html(o.i18n.performLocalization(r.label));
							r.key === String(e) && i.attr("selected", "selected"), this.selectElement.append(i)
						}
					}, t.prototype.onItemAddedEvent = function(t) {
						e.prototype.onItemAddedEvent.call(this, t), this.updateDomItems(this.selectedItem)
					}, t.prototype.onItemRemovedEvent = function(t) {
						e.prototype.onItemRemovedEvent.call(this, t), this.updateDomItems(this.selectedItem)
					}, t.prototype.onItemSelectedEvent = function(t, n) {
						void 0 === n && (n = !0), e.prototype.onItemSelectedEvent.call(this, t), n && this.updateDomItems(t)
					}, t
				}(i.ListSelector);
			t.SelectBox = s
		},
		a975: function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").every,
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("every", (function(e) {
				return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
			}))
		},
		a981: function(e, t) {
			e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
		},
		a9a2: function(e, t, n) {
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
			}), t.PictureInPictureToggleButton = void 0;
			var i = n("30b0"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-piptogglebutton",
							text: a.i18n.getLocalizer("pictureInPicture")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = function() {
								return t.isViewModeAvailable(t.exports.ViewMode.PictureInPicture)
							},
							a = function() {
								t.getViewMode() === t.exports.ViewMode.PictureInPicture ? r.on() : r.off()
							},
							o = function() {
								i() ? r.show() : r.hide()
							};
						t.on(t.exports.PlayerEvent.ViewModeChanged, a), t.exports.PlayerEvent.ViewModeAvailabilityChanged && t.on(t.exports.PlayerEvent.ViewModeAvailabilityChanged, o), n.getConfig().events.onUpdated.subscribe(o), this.onClick.subscribe((function() {
							if (i()) {
								var e = t.getViewMode() === t.exports.ViewMode.PictureInPicture ? t.exports.ViewMode.Inline : t.exports.ViewMode.PictureInPicture;
								t.setViewMode(e)
							} else console
						})), o(), a()
					}, t
				}(i.ToggleButton);
			t.PictureInPictureToggleButton = o
		},
		a9e3: function(e, t, n) {
			"use strict";
			var r = n("83ab"),
				i = n("da84"),
				a = n("94ca"),
				o = n("6eeb"),
				s = n("5135"),
				u = n("c6b6"),
				c = n("7156"),
				l = n("c04e"),
				f = n("d039"),
				d = n("7c73"),
				h = n("241c").f,
				p = n("06cf").f,
				_ = n("9bf2").f,
				m = n("58a8").trim,
				b = "Number",
				g = i[b],
				v = g.prototype,
				y = u(d(v)) == b,
				A = function(e) {
					var t, n, r, i, a, o, s, u, c = l(e, !1);
					if ("string" == typeof c && c.length > 2)
						if (43 === (t = (c = m(c)).charCodeAt(0)) || 45 === t) {
							if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
						} else if (48 === t) {
						switch (c.charCodeAt(1)) {
							case 66:
							case 98:
								r = 2, i = 49;
								break;
							case 79:
							case 111:
								r = 8, i = 55;
								break;
							default:
								return +c
						}
						for (o = (a = c.slice(2)).length, s = 0; s < o; s++)
							if ((u = a.charCodeAt(s)) < 48 || u > i) return NaN;
						return parseInt(a, r)
					}
					return +c
				};
			if (a(b, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
				for (var S, w = function(e) {
						var t = arguments.length < 1 ? 0 : e,
							n = this;
						return n instanceof w && (y ? f((function() {
							v.valueOf.call(n)
						})) : u(n) != b) ? c(new g(A(t)), n, w) : A(t)
					}, E = r ? h(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; E.length > T; T++) s(g, S = E[T]) && !s(w, S) && _(w, S, p(g, S));
				w.prototype = v, v.constructor = w, o(i, b, w)
			}
		},
		aa47: function(e, t, n) {
			"use strict";

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					})))), r.forEach((function(t) {
						i(e, t, n[t])
					}))
				}
				return e
			}

			function s(e, t) {
				if (null == e) return {};
				var n, r, i = function(e, t) {
					if (null == e) return {};
					var n, r, i = {},
						a = Object.keys(e);
					for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
					return i
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
				}
				return i
			}

			function u(e) {
				return function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
						return n
					}
				}(e) || function(e) {
					if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance")
				}()
			}
			n.r(t), n.d(t, "MultiDrag", (function() {
				return yt
			})), n.d(t, "Sortable", (function() {
				return Ue
			})), n.d(t, "Swap", (function() {
				return ct
			}));

			function c(e) {
				if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
			}
			var l = c(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
				f = c(/Edge/i),
				d = c(/firefox/i),
				h = c(/safari/i) && !c(/chrome/i) && !c(/android/i),
				p = c(/iP(ad|od|hone)/i),
				_ = c(/chrome/i) && c(/android/i),
				m = {
					capture: !1,
					passive: !1
				};

			function b(e, t, n) {
				e.addEventListener(t, n, !l && m)
			}

			function g(e, t, n) {
				e.removeEventListener(t, n, !l && m)
			}

			function v(e, t) {
				if (t) {
					if (">" === t[0] && (t = t.substring(1)), e) try {
						if (e.matches) return e.matches(t);
						if (e.msMatchesSelector) return e.msMatchesSelector(t);
						if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
					} catch (e) {
						return !1
					}
					return !1
				}
			}

			function y(e) {
				return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
			}

			function A(e, t, n, r) {
				if (e) {
					n = n || document;
					do {
						if (null != t && (">" === t[0] ? e.parentNode === n && v(e, t) : v(e, t)) || r && e === n) return e;
						if (e === n) break
					} while (e = y(e))
				}
				return null
			}
			var S, w = /\s+/g;

			function E(e, t, n) {
				if (e && t)
					if (e.classList) e.classList[n ? "add" : "remove"](t);
					else {
						var r = (" " + e.className + " ").replace(w, " ").replace(" " + t + " ", " ");
						e.className = (r + (n ? " " + t : "")).replace(w, " ")
					}
			}

			function T(e, t, n) {
				var r = e && e.style;
				if (r) {
					if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
					t in r || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t), r[t] = n + ("string" == typeof n ? "" : "px")
				}
			}

			function C(e, t) {
				var n = "";
				if ("string" == typeof e) n = e;
				else
					do {
						var r = T(e, "transform");
						r && "none" !== r && (n = r + " " + n)
					} while (!t && (e = e.parentNode));
				var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
				return i && new i(n)
			}

			function $(e, t, n) {
				if (e) {
					var r = e.getElementsByTagName(t),
						i = 0,
						a = r.length;
					if (n)
						for (; i < a; i++) n(r[i], i);
					return r
				}
				return []
			}

			function k() {
				return document.scrollingElement || document.documentElement
			}

			function O(e, t, n, r, i) {
				if (e.getBoundingClientRect || e === window) {
					var a, o, s, u, c, f, d;
					if (e !== window && e !== k() ? (o = (a = e.getBoundingClientRect()).top, s = a.left, u = a.bottom, c = a.right, f = a.height, d = a.width) : (o = 0, s = 0, u = window.innerHeight, c = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !l))
						do {
							if (i && i.getBoundingClientRect && ("none" !== T(i, "transform") || n && "static" !== T(i, "position"))) {
								var h = i.getBoundingClientRect();
								o -= h.top + parseInt(T(i, "border-top-width")), s -= h.left + parseInt(T(i, "border-left-width")), u = o + a.height, c = s + a.width;
								break
							}
						} while (i = i.parentNode);
					if (r && e !== window) {
						var p = C(i || e),
							_ = p && p.a,
							m = p && p.d;
						p && (u = (o /= m) + (f /= m), c = (s /= _) + (d /= _))
					}
					return {
						top: o,
						left: s,
						bottom: u,
						right: c,
						width: d,
						height: f
					}
				}
			}

			function x(e, t, n) {
				for (var r = D(e, !0), i = O(e)[t]; r;) {
					var a = O(r)[n];
					if (!("top" === n || "left" === n ? i >= a : i <= a)) return r;
					if (r === k()) break;
					r = D(r, !1)
				}
				return !1
			}

			function P(e, t, n) {
				for (var r = 0, i = 0, a = e.children; i < a.length;) {
					if ("none" !== a[i].style.display && a[i] !== Ue.ghost && a[i] !== Ue.dragged && A(a[i], n.draggable, e, !1)) {
						if (r === t) return a[i];
						r++
					}
					i++
				}
				return null
			}

			function M(e, t) {
				for (var n = e.lastElementChild; n && (n === Ue.ghost || "none" === T(n, "display") || t && !v(n, t));) n = n.previousElementSibling;
				return n || null
			}

			function I(e, t) {
				var n = 0;
				if (!e || !e.parentNode) return -1;
				for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === Ue.clone || t && !v(e, t) || n++;
				return n
			}

			function L(e) {
				var t = 0,
					n = 0,
					r = k();
				if (e)
					do {
						var i = C(e),
							a = i.a,
							o = i.d;
						t += e.scrollLeft * a, n += e.scrollTop * o
					} while (e !== r && (e = e.parentNode));
				return [t, n]
			}

			function D(e, t) {
				if (!e || !e.getBoundingClientRect) return k();
				var n = e,
					r = !1;
				do {
					if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
						var i = T(n);
						if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
							if (!n.getBoundingClientRect || n === document.body) return k();
							if (r || t) return n;
							r = !0
						}
					}
				} while (n = n.parentNode);
				return k()
			}

			function B(e, t) {
				return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
			}

			function N(e, t) {
				return function() {
					if (!S) {
						var n = arguments,
							r = this;
						1 === n.length ? e.call(r, n[0]) : e.apply(r, n), S = setTimeout((function() {
							S = void 0
						}), t)
					}
				}
			}

			function R(e, t, n) {
				e.scrollLeft += t, e.scrollTop += n
			}

			function F(e) {
				var t = window.Polymer,
					n = window.jQuery || window.Zepto;
				return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
			}

			function U(e, t) {
				T(e, "position", "absolute"), T(e, "top", t.top), T(e, "left", t.left), T(e, "width", t.width), T(e, "height", t.height)
			}

			function j(e) {
				T(e, "position", ""), T(e, "top", ""), T(e, "left", ""), T(e, "width", ""), T(e, "height", "")
			}
			var H = "Sortable" + (new Date).getTime();

			function Y() {
				var e, t = [];
				return {
					captureAnimationState: function() {
						(t = [], this.options.animation) && [].slice.call(this.el.children).forEach((function(e) {
							if ("none" !== T(e, "display") && e !== Ue.ghost) {
								t.push({
									target: e,
									rect: O(e)
								});
								var n = o({}, t[t.length - 1].rect);
								if (e.thisAnimationDuration) {
									var r = C(e, !0);
									r && (n.top -= r.f, n.left -= r.e)
								}
								e.fromRect = n
							}
						}))
					},
					addAnimationState: function(e) {
						t.push(e)
					},
					removeAnimationState: function(e) {
						t.splice(function(e, t) {
							for (var n in e)
								if (e.hasOwnProperty(n))
									for (var r in t)
										if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
							return -1
						}(t, {
							target: e
						}), 1)
					},
					animateAll: function(n) {
						var r = this;
						if (!this.options.animation) return clearTimeout(e), void("function" == typeof n && n());
						var i = !1,
							a = 0;
						t.forEach((function(e) {
							var t = 0,
								n = e.target,
								o = n.fromRect,
								s = O(n),
								u = n.prevFromRect,
								c = n.prevToRect,
								l = e.rect,
								f = C(n, !0);
							f && (s.top -= f.f, s.left -= f.e), n.toRect = s, n.thisAnimationDuration && B(u, s) && !B(o, s) && (l.top - s.top) / (l.left - s.left) == (o.top - s.top) / (o.left - s.left) && (t = function(e, t, n, r) {
								return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation
							}(l, u, c, r.options)), B(s, o) || (n.prevFromRect = o, n.prevToRect = s, t || (t = r.options.animation), r.animate(n, l, s, t)), t && (i = !0, a = Math.max(a, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
								n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
							}), t), n.thisAnimationDuration = t)
						})), clearTimeout(e), i ? e = setTimeout((function() {
							"function" == typeof n && n()
						}), a) : "function" == typeof n && n(), t = []
					},
					animate: function(e, t, n, r) {
						if (r) {
							T(e, "transition", ""), T(e, "transform", "");
							var i = C(this.el),
								a = i && i.a,
								o = i && i.d,
								s = (t.left - n.left) / (a || 1),
								u = (t.top - n.top) / (o || 1);
							e.animatingX = !!s, e.animatingY = !!u, T(e, "transform", "translate3d(" + s + "px," + u + "px,0)"),
								function(e) {
									e.offsetWidth
								}(e), T(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), T(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout((function() {
									T(e, "transition", ""), T(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
								}), r)
						}
					}
				}
			}
			var V = [],
				z = {
					initializeByDefault: !0
				},
				Q = {
					mount: function(e) {
						for (var t in z) z.hasOwnProperty(t) && !(t in e) && (e[t] = z[t]);
						V.push(e)
					},
					pluginEvent: function(e, t, n) {
						var r = this;
						this.eventCanceled = !1, n.cancel = function() {
							r.eventCanceled = !0
						};
						var i = e + "Global";
						V.forEach((function(r) {
							t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](o({
								sortable: t
							}, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](o({
								sortable: t
							}, n)))
						}))
					},
					initializePlugins: function(e, t, n, r) {
						for (var i in V.forEach((function(r) {
								var i = r.pluginName;
								if (e.options[i] || r.initializeByDefault) {
									var o = new r(e, t, e.options);
									o.sortable = e, o.options = e.options, e[i] = o, a(n, o.defaults)
								}
							})), e.options)
							if (e.options.hasOwnProperty(i)) {
								var o = this.modifyOption(e, i, e.options[i]);
								void 0 !== o && (e.options[i] = o)
							}
					},
					getEventProperties: function(e, t) {
						var n = {};
						return V.forEach((function(r) {
							"function" == typeof r.eventProperties && a(n, r.eventProperties.call(t[r.pluginName], e))
						})), n
					},
					modifyOption: function(e, t, n) {
						var r;
						return V.forEach((function(i) {
							e[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[t] && (r = i.optionListeners[t].call(e[i.pluginName], n))
						})), r
					}
				};

			function G(e) {
				var t = e.sortable,
					n = e.rootEl,
					r = e.name,
					i = e.targetEl,
					a = e.cloneEl,
					s = e.toEl,
					u = e.fromEl,
					c = e.oldIndex,
					d = e.newIndex,
					h = e.oldDraggableIndex,
					p = e.newDraggableIndex,
					_ = e.originalEvent,
					m = e.putSortable,
					b = e.extraEventProperties;
				if (t = t || n && n[H]) {
					var g, v = t.options,
						y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
					!window.CustomEvent || l || f ? (g = document.createEvent("Event")).initEvent(r, !0, !0) : g = new CustomEvent(r, {
						bubbles: !0,
						cancelable: !0
					}), g.to = s || n, g.from = u || n, g.item = i || n, g.clone = a, g.oldIndex = c, g.newIndex = d, g.oldDraggableIndex = h, g.newDraggableIndex = p, g.originalEvent = _, g.pullMode = m ? m.lastPutMode : void 0;
					var A = o({}, b, Q.getEventProperties(r, t));
					for (var S in A) g[S] = A[S];
					n && n.dispatchEvent(g), v[y] && v[y].call(t, g)
				}
			}
			var q = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = n.evt,
					i = s(n, ["evt"]);
				Q.pluginEvent.bind(Ue)(e, t, o({
					dragEl: K,
					parentEl: X,
					ghostEl: J,
					rootEl: Z,
					nextEl: ee,
					lastDownEl: te,
					cloneEl: ne,
					cloneHidden: re,
					dragStarted: me,
					putSortable: ce,
					activeSortable: Ue.active,
					originalEvent: r,
					oldIndex: ie,
					oldDraggableIndex: oe,
					newIndex: ae,
					newDraggableIndex: se,
					hideGhostForTarget: Be,
					unhideGhostForTarget: Ne,
					cloneNowHidden: function() {
						re = !0
					},
					cloneNowShown: function() {
						re = !1
					},
					dispatchSortableEvent: function(e) {
						W({
							sortable: t,
							name: e,
							originalEvent: r
						})
					}
				}, i))
			};

			function W(e) {
				G(o({
					putSortable: ce,
					cloneEl: ne,
					targetEl: K,
					rootEl: Z,
					oldIndex: ie,
					oldDraggableIndex: oe,
					newIndex: ae,
					newDraggableIndex: se
				}, e))
			}
			var K, X, J, Z, ee, te, ne, re, ie, ae, oe, se, ue, ce, le, fe, de, he, pe, _e, me, be, ge, ve, ye, Ae = !1,
				Se = !1,
				we = [],
				Ee = !1,
				Te = !1,
				Ce = [],
				$e = !1,
				ke = [],
				Oe = "undefined" != typeof document,
				xe = p,
				Pe = f || l ? "cssFloat" : "float",
				Me = Oe && !_ && !p && "draggable" in document.createElement("div"),
				Ie = function() {
					if (Oe) {
						if (l) return !1;
						var e = document.createElement("x");
						return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
					}
				}(),
				Le = function(e, t) {
					var n = T(e),
						r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
						i = P(e, 0, t),
						a = P(e, 1, t),
						o = i && T(i),
						s = a && T(a),
						u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + O(i).width,
						c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + O(a).width;
					if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
					if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
					if (i && o.float && "none" !== o.float) {
						var l = "left" === o.float ? "left" : "right";
						return !a || "both" !== s.clear && s.clear !== l ? "horizontal" : "vertical"
					}
					return i && ("block" === o.display || "flex" === o.display || "table" === o.display || "grid" === o.display || u >= r && "none" === n[Pe] || a && "none" === n[Pe] && u + c > r) ? "vertical" : "horizontal"
				},
				De = function(e) {
					function t(e, n) {
						return function(r, i, a, o) {
							var s = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
							if (null == e && (n || s)) return !0;
							if (null == e || !1 === e) return !1;
							if (n && "clone" === e) return e;
							if ("function" == typeof e) return t(e(r, i, a, o), n)(r, i, a, o);
							var u = (n ? r : i).options.group.name;
							return !0 === e || "string" == typeof e && e === u || e.join && e.indexOf(u) > -1
						}
					}
					var n = {},
						i = e.group;
					i && "object" == r(i) || (i = {
						name: i
					}), n.name = i.name, n.checkPull = t(i.pull, !0), n.checkPut = t(i.put), n.revertClone = i.revertClone, e.group = n
				},
				Be = function() {
					!Ie && J && T(J, "display", "none")
				},
				Ne = function() {
					!Ie && J && T(J, "display", "")
				};
			Oe && document.addEventListener("click", (function(e) {
				if (Se) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Se = !1, !1
			}), !0);
			var Re = function(e) {
					if (K) {
						var t = function(e, t) {
							var n;
							return we.some((function(r) {
								if (!M(r)) {
									var i = O(r),
										a = r[H].options.emptyInsertThreshold,
										o = e >= i.left - a && e <= i.right + a,
										s = t >= i.top - a && t <= i.bottom + a;
									return a && o && s ? n = r : void 0
								}
							})), n
						}((e = e.touches ? e.touches[0] : e).clientX, e.clientY);
						if (t) {
							var n = {};
							for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
							n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[H]._onDragOver(n)
						}
					}
				},
				Fe = function(e) {
					K && K.parentNode[H]._isOutsideThisEl(e.target)
				};

			function Ue(e, t) {
				if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
				this.el = e, this.options = t = a({}, t), e[H] = this;
				var n = {
					group: null,
					sort: !0,
					disabled: !1,
					store: null,
					handle: null,
					draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
					swapThreshold: 1,
					invertSwap: !1,
					invertedSwapThreshold: null,
					removeCloneOnHide: !0,
					direction: function() {
						return Le(e, this.options)
					},
					ghostClass: "sortable-ghost",
					chosenClass: "sortable-chosen",
					dragClass: "sortable-drag",
					ignore: "a, img",
					filter: null,
					preventOnFilter: !0,
					animation: 0,
					easing: null,
					setData: function(e, t) {
						e.setData("Text", t.textContent)
					},
					dropBubble: !1,
					dragoverBubble: !1,
					dataIdAttr: "data-id",
					delay: 0,
					delayOnTouchOnly: !1,
					touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
					forceFallback: !1,
					fallbackClass: "sortable-fallback",
					fallbackOnBody: !1,
					fallbackTolerance: 0,
					fallbackOffset: {
						x: 0,
						y: 0
					},
					supportPointer: !1 !== Ue.supportPointer && "PointerEvent" in window,
					emptyInsertThreshold: 5
				};
				for (var r in Q.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
				for (var i in De(t), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
				this.nativeDraggable = !t.forceFallback && Me, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? b(e, "pointerdown", this._onTapStart) : (b(e, "mousedown", this._onTapStart), b(e, "touchstart", this._onTapStart)), this.nativeDraggable && (b(e, "dragover", this), b(e, "dragenter", this)), we.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), a(this, Y())
			}

			function je(e, t, n, r, i, a, o, s) {
				var u, c, d = e[H],
					h = d.options.onMove;
				return !window.CustomEvent || l || f ? (u = document.createEvent("Event")).initEvent("move", !0, !0) : u = new CustomEvent("move", {
					bubbles: !0,
					cancelable: !0
				}), u.to = t, u.from = e, u.dragged = n, u.draggedRect = r, u.related = i || t, u.relatedRect = a || O(t), u.willInsertAfter = s, u.originalEvent = o, e.dispatchEvent(u), h && (c = h.call(d, u, o)), c
			}

			function He(e) {
				e.draggable = !1
			}

			function Ye() {
				$e = !1
			}

			function Ve(e, t, n, r, i, a, o, s) {
				var u = r ? e.clientY : e.clientX,
					c = r ? n.height : n.width,
					l = r ? n.top : n.left,
					f = r ? n.bottom : n.right,
					d = !1;
				if (!o)
					if (s && ve < c * i) {
						if (!Ee && (1 === ge ? u > l + c * a / 2 : u < f - c * a / 2) && (Ee = !0), Ee) d = !0;
						else if (1 === ge ? u < l + ve : u > f - ve) return -ge
					} else if (u > l + c * (1 - i) / 2 && u < f - c * (1 - i) / 2) return function(e) {
					return I(K) < I(e) ? 1 : -1
				}(t);
				return (d = d || o) && (u < l + c * a / 2 || u > f - c * a / 2) ? u > l + c / 2 ? 1 : -1 : 0
			}

			function ze(e) {
				for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
				return r.toString(36)
			}

			function Qe(e) {
				return setTimeout(e, 0)
			}

			function Ge(e) {
				return clearTimeout(e)
			}
			Ue.prototype = {
				constructor: Ue,
				_isOutsideThisEl: function(e) {
					this.el.contains(e) || e === this.el || (be = null)
				},
				_getDirection: function(e, t) {
					return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, K) : this.options.direction
				},
				_onTapStart: function(e) {
					if (e.cancelable) {
						var t = this,
							n = this.el,
							r = this.options,
							i = r.preventOnFilter,
							a = e.type,
							o = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
							s = (o || e).target,
							u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s,
							c = r.filter;
						if (function(e) {
								ke.length = 0;
								for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
									var r = t[n];
									r.checked && ke.push(r)
								}
							}(n), !(K || /mousedown|pointerdown/.test(a) && 0 !== e.button || r.disabled || u.isContentEditable || (s = A(s, r.draggable, n, !1), s && s.animated || te === s))) {
							if (ie = I(s), oe = I(s, r.draggable), "function" == typeof c) {
								if (c.call(this, e, s, this)) return W({
									sortable: t,
									rootEl: u,
									name: "filter",
									targetEl: s,
									toEl: n,
									fromEl: n
								}), q("filter", t, {
									evt: e
								}), void(i && e.cancelable && e.preventDefault())
							} else if (c && (c = c.split(",").some((function(r) {
									if (r = A(u, r.trim(), n, !1)) return W({
										sortable: t,
										rootEl: r,
										name: "filter",
										targetEl: s,
										fromEl: n,
										toEl: n
									}), q("filter", t, {
										evt: e
									}), !0
								})))) return void(i && e.cancelable && e.preventDefault());
							r.handle && !A(u, r.handle, n, !1) || this._prepareDragStart(e, o, s)
						}
					}
				},
				_prepareDragStart: function(e, t, n) {
					var r, i = this,
						a = i.el,
						o = i.options,
						s = a.ownerDocument;
					if (n && !K && n.parentNode === a) {
						var u = O(n);
						if (Z = a, X = (K = n).parentNode, ee = K.nextSibling, te = n, ue = o.group, Ue.dragged = K, le = {
								target: K,
								clientX: (t || e).clientX,
								clientY: (t || e).clientY
							}, pe = le.clientX - u.left, _e = le.clientY - u.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, K.style["will-change"] = "all", r = function() {
								q("delayEnded", i, {
									evt: e
								}), Ue.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !d && i.nativeDraggable && (K.draggable = !0), i._triggerDragStart(e, t), W({
									sortable: i,
									name: "choose",
									originalEvent: e
								}), E(K, o.chosenClass, !0))
							}, o.ignore.split(",").forEach((function(e) {
								$(K, e.trim(), He)
							})), b(s, "dragover", Re), b(s, "mousemove", Re), b(s, "touchmove", Re), b(s, "mouseup", i._onDrop), b(s, "touchend", i._onDrop), b(s, "touchcancel", i._onDrop), d && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), q("delayStart", this, {
								evt: e
							}), !o.delay || o.delayOnTouchOnly && !t || this.nativeDraggable && (f || l)) r();
						else {
							if (Ue.eventCanceled) return void this._onDrop();
							b(s, "mouseup", i._disableDelayedDrag), b(s, "touchend", i._disableDelayedDrag), b(s, "touchcancel", i._disableDelayedDrag), b(s, "mousemove", i._delayedDragTouchMoveHandler), b(s, "touchmove", i._delayedDragTouchMoveHandler), o.supportPointer && b(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(r, o.delay)
						}
					}
				},
				_delayedDragTouchMoveHandler: function(e) {
					var t = e.touches ? e.touches[0] : e;
					Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
				},
				_disableDelayedDrag: function() {
					K && He(K), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
				},
				_disableDelayedDragEvents: function() {
					var e = this.el.ownerDocument;
					g(e, "mouseup", this._disableDelayedDrag), g(e, "touchend", this._disableDelayedDrag), g(e, "touchcancel", this._disableDelayedDrag), g(e, "mousemove", this._delayedDragTouchMoveHandler), g(e, "touchmove", this._delayedDragTouchMoveHandler), g(e, "pointermove", this._delayedDragTouchMoveHandler)
				},
				_triggerDragStart: function(e, t) {
					t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? b(document, "pointermove", this._onTouchMove) : b(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (b(K, "dragend", this), b(Z, "dragstart", this._onDragStart));
					try {
						document.selection ? Qe((function() {
							document.selection.empty()
						})) : window.getSelection().removeAllRanges()
					} catch (e) {}
				},
				_dragStarted: function(e, t) {
					if (Ae = !1, Z && K) {
						q("dragStarted", this, {
							evt: t
						}), this.nativeDraggable && b(document, "dragover", Fe);
						var n = this.options;
						!e && E(K, n.dragClass, !1), E(K, n.ghostClass, !0), Ue.active = this, e && this._appendGhost(), W({
							sortable: this,
							name: "start",
							originalEvent: t
						})
					} else this._nulling()
				},
				_emulateDragOver: function() {
					if (fe) {
						this._lastX = fe.clientX, this._lastY = fe.clientY, Be();
						for (var e = document.elementFromPoint(fe.clientX, fe.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(fe.clientX, fe.clientY)) !== t;) t = e;
						if (K.parentNode[H]._isOutsideThisEl(e), t)
							do {
								if (t[H]) {
									if (t[H]._onDragOver({
											clientX: fe.clientX,
											clientY: fe.clientY,
											target: e,
											rootEl: t
										}) && !this.options.dragoverBubble) break
								}
								e = t
							} while (t = t.parentNode);
						Ne()
					}
				},
				_onTouchMove: function(e) {
					if (le) {
						var t = this.options,
							n = t.fallbackTolerance,
							r = t.fallbackOffset,
							i = e.touches ? e.touches[0] : e,
							a = J && C(J, !0),
							o = J && a && a.a,
							s = J && a && a.d,
							u = xe && ye && L(ye),
							c = (i.clientX - le.clientX + r.x) / (o || 1) + (u ? u[0] - Ce[0] : 0) / (o || 1),
							l = (i.clientY - le.clientY + r.y) / (s || 1) + (u ? u[1] - Ce[1] : 0) / (s || 1);
						if (!Ue.active && !Ae) {
							if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
							this._onDragStart(e, !0)
						}
						if (J) {
							a ? (a.e += c - (de || 0), a.f += l - (he || 0)) : a = {
								a: 1,
								b: 0,
								c: 0,
								d: 1,
								e: c,
								f: l
							};
							var f = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
							T(J, "webkitTransform", f), T(J, "mozTransform", f), T(J, "msTransform", f), T(J, "transform", f), de = c, he = l, fe = i
						}
						e.cancelable && e.preventDefault()
					}
				},
				_appendGhost: function() {
					if (!J) {
						var e = this.options.fallbackOnBody ? document.body : Z,
							t = O(K, !0, xe, !0, e),
							n = this.options;
						if (xe) {
							for (ye = e;
								"static" === T(ye, "position") && "none" === T(ye, "transform") && ye !== document;) ye = ye.parentNode;
							ye !== document.body && ye !== document.documentElement ? (ye === document && (ye = k()), t.top += ye.scrollTop, t.left += ye.scrollLeft) : ye = k(), Ce = L(ye)
						}
						E(J = K.cloneNode(!0), n.ghostClass, !1), E(J, n.fallbackClass, !0), E(J, n.dragClass, !0), T(J, "transition", ""), T(J, "transform", ""), T(J, "box-sizing", "border-box"), T(J, "margin", 0), T(J, "top", t.top), T(J, "left", t.left), T(J, "width", t.width), T(J, "height", t.height), T(J, "opacity", "0.8"), T(J, "position", xe ? "absolute" : "fixed"), T(J, "zIndex", "100000"), T(J, "pointerEvents", "none"), Ue.ghost = J, e.appendChild(J), T(J, "transform-origin", pe / parseInt(J.style.width) * 100 + "% " + _e / parseInt(J.style.height) * 100 + "%")
					}
				},
				_onDragStart: function(e, t) {
					var n = this,
						r = e.dataTransfer,
						i = n.options;
					q("dragStart", this, {
						evt: e
					}), Ue.eventCanceled ? this._onDrop() : (q("setupClone", this), Ue.eventCanceled || ((ne = F(K)).draggable = !1, ne.style["will-change"] = "", this._hideClone(), E(ne, this.options.chosenClass, !1), Ue.clone = ne), n.cloneId = Qe((function() {
						q("clone", n), Ue.eventCanceled || (n.options.removeCloneOnHide || Z.insertBefore(ne, K), n._hideClone(), W({
							sortable: n,
							name: "clone"
						}))
					})), !t && E(K, i.dragClass, !0), t ? (Se = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (g(document, "mouseup", n._onDrop), g(document, "touchend", n._onDrop), g(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, K)), b(document, "drop", n), T(K, "transform", "translateZ(0)")), Ae = !0, n._dragStartId = Qe(n._dragStarted.bind(n, t, e)), b(document, "selectstart", n), me = !0, h && T(document.body, "user-select", "none"))
				},
				_onDragOver: function(e) {
					var t, n, r, i, a = this.el,
						s = e.target,
						u = this.options,
						c = u.group,
						l = Ue.active,
						f = ue === c,
						d = u.sort,
						h = ce || l,
						p = this,
						_ = !1;
					if (!$e) {
						if (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(), s = A(s, u.draggable, a, !0), B("dragOver"), Ue.eventCanceled) return _;
						if (K.contains(e.target) || s.animated && s.animatingX && s.animatingY || p._ignoreWhileAnimating === s) return F(!1);
						if (Se = !1, l && !u.disabled && (f ? d || (r = !Z.contains(K)) : ce === this || (this.lastPutMode = ue.checkPull(this, l, K, e)) && c.checkPut(this, l, K, e))) {
							if (i = "vertical" === this._getDirection(e, s), t = O(K), B("dragOverValid"), Ue.eventCanceled) return _;
							if (r) return X = Z, N(), this._hideClone(), B("revert"), Ue.eventCanceled || (ee ? Z.insertBefore(K, ee) : Z.appendChild(K)), F(!0);
							var m = M(a, u.draggable);
							if (!m || function(e, t, n) {
									var r = O(M(n.el, n.options.draggable));
									return t ? e.clientX > r.right + 10 || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + 10
								}(e, i, this) && !m.animated) {
								if (m === K) return F(!1);
								if (m && a === e.target && (s = m), s && (n = O(s)), !1 !== je(Z, a, K, t, s, n, e, !!s)) return N(), a.appendChild(K), X = a, U(), F(!0)
							} else if (s.parentNode === a) {
								n = O(s);
								var b, g, v, y = K.parentNode !== a,
									S = ! function(e, t, n) {
										var r = n ? e.left : e.top,
											i = n ? e.right : e.bottom,
											a = n ? e.width : e.height,
											o = n ? t.left : t.top,
											s = n ? t.right : t.bottom,
											u = n ? t.width : t.height;
										return r === o || i === s || r + a / 2 === o + u / 2
									}(K.animated && K.toRect || t, s.animated && s.toRect || n, i),
									w = i ? "top" : "left",
									C = x(s, "top", "top") || x(K, "top", "top"),
									$ = C ? C.scrollTop : void 0;
								if (be !== s && (b = n[w], Ee = !1, Te = !S && u.invertSwap || y), 0 !== (v = Ve(e, s, n, i, S ? 1 : u.swapThreshold, null == u.invertedSwapThreshold ? u.swapThreshold : u.invertedSwapThreshold, Te, be === s))) {
									var k = I(K);
									do {
										k -= v, g = X.children[k]
									} while (g && ("none" === T(g, "display") || g === J))
								}
								if (0 === v || g === s) return F(!1);
								be = s, ge = v;
								var P = s.nextElementSibling,
									L = !1,
									D = je(Z, a, K, t, s, n, e, L = 1 === v);
								if (!1 !== D) return 1 !== D && -1 !== D || (L = 1 === D), $e = !0, setTimeout(Ye, 30), N(), L && !P ? a.appendChild(K) : s.parentNode.insertBefore(K, L ? P : s), C && R(C, 0, $ - C.scrollTop), X = K.parentNode, void 0 === b || Te || (ve = Math.abs(b - O(s)[w])), U(), F(!0)
							}
							if (a.contains(K)) return F(!1)
						}
						return !1
					}

					function B(u, c) {
						q(u, p, o({
							evt: e,
							isOwner: f,
							axis: i ? "vertical" : "horizontal",
							revert: r,
							dragRect: t,
							targetRect: n,
							canSort: d,
							fromSortable: h,
							target: s,
							completed: F,
							onMove: function(n, r) {
								return je(Z, a, K, t, n, O(n), e, r)
							},
							changed: U
						}, c))
					}

					function N() {
						B("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState()
					}

					function F(t) {
						return B("dragOverCompleted", {
							insertion: t
						}), t && (f ? l._hideClone() : l._showClone(p), p !== h && (E(K, ce ? ce.options.ghostClass : l.options.ghostClass, !1), E(K, u.ghostClass, !0)), ce !== p && p !== Ue.active ? ce = p : p === Ue.active && ce && (ce = null), h === p && (p._ignoreWhileAnimating = s), p.animateAll((function() {
							B("dragOverAnimationComplete"), p._ignoreWhileAnimating = null
						})), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (s === K && !K.animated || s === a && !s.animated) && (be = null), u.dragoverBubble || e.rootEl || s === document || (K.parentNode[H]._isOutsideThisEl(e.target), !t && Re(e)), !u.dragoverBubble && e.stopPropagation && e.stopPropagation(), _ = !0
					}

					function U() {
						ae = I(K), se = I(K, u.draggable), W({
							sortable: p,
							name: "change",
							toEl: a,
							newIndex: ae,
							newDraggableIndex: se,
							originalEvent: e
						})
					}
				},
				_ignoreWhileAnimating: null,
				_offMoveEvents: function() {
					g(document, "mousemove", this._onTouchMove), g(document, "touchmove", this._onTouchMove), g(document, "pointermove", this._onTouchMove), g(document, "dragover", Re), g(document, "mousemove", Re), g(document, "touchmove", Re)
				},
				_offUpEvents: function() {
					var e = this.el.ownerDocument;
					g(e, "mouseup", this._onDrop), g(e, "touchend", this._onDrop), g(e, "pointerup", this._onDrop), g(e, "touchcancel", this._onDrop), g(document, "selectstart", this)
				},
				_onDrop: function(e) {
					var t = this.el,
						n = this.options;
					ae = I(K), se = I(K, n.draggable), q("drop", this, {
						evt: e
					}), X = K && K.parentNode, ae = I(K), se = I(K, n.draggable), Ue.eventCanceled || (Ae = !1, Te = !1, Ee = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ge(this.cloneId), Ge(this._dragStartId), this.nativeDraggable && (g(document, "drop", this), g(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), h && T(document.body, "user-select", ""), T(K, "transform", ""), e && (me && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), J && J.parentNode && J.parentNode.removeChild(J), (Z === X || ce && "clone" !== ce.lastPutMode) && ne && ne.parentNode && ne.parentNode.removeChild(ne), K && (this.nativeDraggable && g(K, "dragend", this), He(K), K.style["will-change"] = "", me && !Ae && E(K, ce ? ce.options.ghostClass : this.options.ghostClass, !1), E(K, this.options.chosenClass, !1), W({
						sortable: this,
						name: "unchoose",
						toEl: X,
						newIndex: null,
						newDraggableIndex: null,
						originalEvent: e
					}), Z !== X ? (ae >= 0 && (W({
						rootEl: X,
						name: "add",
						toEl: X,
						fromEl: Z,
						originalEvent: e
					}), W({
						sortable: this,
						name: "remove",
						toEl: X,
						originalEvent: e
					}), W({
						rootEl: X,
						name: "sort",
						toEl: X,
						fromEl: Z,
						originalEvent: e
					}), W({
						sortable: this,
						name: "sort",
						toEl: X,
						originalEvent: e
					})), ce && ce.save()) : ae !== ie && ae >= 0 && (W({
						sortable: this,
						name: "update",
						toEl: X,
						originalEvent: e
					}), W({
						sortable: this,
						name: "sort",
						toEl: X,
						originalEvent: e
					})), Ue.active && (null != ae && -1 !== ae || (ae = ie, se = oe), W({
						sortable: this,
						name: "end",
						toEl: X,
						originalEvent: e
					}), this.save())))), this._nulling()
				},
				_nulling: function() {
					q("nulling", this), Z = K = X = J = ee = ne = te = re = le = fe = me = ae = se = ie = oe = be = ge = ce = ue = Ue.dragged = Ue.ghost = Ue.clone = Ue.active = null, ke.forEach((function(e) {
						e.checked = !0
					})), ke.length = de = he = 0
				},
				handleEvent: function(e) {
					switch (e.type) {
						case "drop":
						case "dragend":
							this._onDrop(e);
							break;
						case "dragenter":
						case "dragover":
							K && (this._onDragOver(e), function(e) {
								e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault()
							}(e));
							break;
						case "selectstart":
							e.preventDefault()
					}
				},
				toArray: function() {
					for (var e, t = [], n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++) A(e = n[r], a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || ze(e));
					return t
				},
				sort: function(e) {
					var t = {},
						n = this.el;
					this.toArray().forEach((function(e, r) {
						var i = n.children[r];
						A(i, this.options.draggable, n, !1) && (t[e] = i)
					}), this), e.forEach((function(e) {
						t[e] && (n.removeChild(t[e]), n.appendChild(t[e]))
					}))
				},
				save: function() {
					var e = this.options.store;
					e && e.set && e.set(this)
				},
				closest: function(e, t) {
					return A(e, t || this.options.draggable, this.el, !1)
				},
				option: function(e, t) {
					var n = this.options;
					if (void 0 === t) return n[e];
					var r = Q.modifyOption(this, e, t);
					n[e] = void 0 !== r ? r : t, "group" === e && De(n)
				},
				destroy: function() {
					q("destroy", this);
					var e = this.el;
					e[H] = null, g(e, "mousedown", this._onTapStart), g(e, "touchstart", this._onTapStart), g(e, "pointerdown", this._onTapStart), this.nativeDraggable && (g(e, "dragover", this), g(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), (function(e) {
						e.removeAttribute("draggable")
					})), this._onDrop(), this._disableDelayedDragEvents(), we.splice(we.indexOf(this.el), 1), this.el = e = null
				},
				_hideClone: function() {
					if (!re) {
						if (q("hideClone", this), Ue.eventCanceled) return;
						T(ne, "display", "none"), this.options.removeCloneOnHide && ne.parentNode && ne.parentNode.removeChild(ne), re = !0
					}
				},
				_showClone: function(e) {
					if ("clone" === e.lastPutMode) {
						if (re) {
							if (q("showClone", this), Ue.eventCanceled) return;
							Z.contains(K) && !this.options.group.revertClone ? Z.insertBefore(ne, K) : ee ? Z.insertBefore(ne, ee) : Z.appendChild(ne), this.options.group.revertClone && this.animate(K, ne), T(ne, "display", ""), re = !1
						}
					} else this._hideClone()
				}
			}, Oe && b(document, "touchmove", (function(e) {
				(Ue.active || Ae) && e.cancelable && e.preventDefault()
			})), Ue.utils = {
				on: b,
				off: g,
				css: T,
				find: $,
				is: function(e, t) {
					return !!A(e, t, e, !1)
				},
				extend: function(e, t) {
					if (e && t)
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e
				},
				throttle: N,
				closest: A,
				toggleClass: E,
				clone: F,
				index: I,
				nextTick: Qe,
				cancelNextTick: Ge,
				detectDirection: Le,
				getChild: P
			}, Ue.get = function(e) {
				return e[H]
			}, Ue.mount = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				t[0].constructor === Array && (t = t[0]), t.forEach((function(e) {
					if (!e.prototype || !e.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
					e.utils && (Ue.utils = o({}, Ue.utils, e.utils)), Q.mount(e)
				}))
			}, Ue.create = function(e, t) {
				return new Ue(e, t)
			}, Ue.version = "1.10.2";
			var qe, We, Ke, Xe, Je, Ze, et = [],
				tt = !1;

			function nt() {
				et.forEach((function(e) {
					clearInterval(e.pid)
				})), et = []
			}

			function rt() {
				clearInterval(Ze)
			}
			var it, at = N((function(e, t, n, r) {
					if (t.scroll) {
						var i, a = (e.touches ? e.touches[0] : e).clientX,
							o = (e.touches ? e.touches[0] : e).clientY,
							s = t.scrollSensitivity,
							u = t.scrollSpeed,
							c = k(),
							l = !1;
						We !== n && (We = n, nt(), qe = t.scroll, i = t.scrollFn, !0 === qe && (qe = D(n, !0)));
						var f = 0,
							d = qe;
						do {
							var h = d,
								p = O(h),
								_ = p.top,
								m = p.bottom,
								b = p.left,
								g = p.right,
								v = p.width,
								y = p.height,
								A = void 0,
								S = void 0,
								w = h.scrollWidth,
								E = h.scrollHeight,
								C = T(h),
								$ = h.scrollLeft,
								x = h.scrollTop;
							h === c ? (A = v < w && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX), S = y < E && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (A = v < w && ("auto" === C.overflowX || "scroll" === C.overflowX), S = y < E && ("auto" === C.overflowY || "scroll" === C.overflowY));
							var P = A && (Math.abs(g - a) <= s && $ + v < w) - (Math.abs(b - a) <= s && !!$),
								M = S && (Math.abs(m - o) <= s && x + y < E) - (Math.abs(_ - o) <= s && !!x);
							if (!et[f])
								for (var I = 0; I <= f; I++) et[I] || (et[I] = {});
							et[f].vx == P && et[f].vy == M && et[f].el === h || (et[f].el = h, et[f].vx = P, et[f].vy = M, clearInterval(et[f].pid), 0 == P && 0 == M || (l = !0, et[f].pid = setInterval(function() {
								r && 0 === this.layer && Ue.active._onTouchMove(Je);
								var t = et[this.layer].vy ? et[this.layer].vy * u : 0,
									n = et[this.layer].vx ? et[this.layer].vx * u : 0;
								"function" == typeof i && "continue" !== i.call(Ue.dragged.parentNode[H], n, t, e, Je, et[this.layer].el) || R(et[this.layer].el, n, t)
							}.bind({
								layer: f
							}), 24))), f++
						} while (t.bubbleScroll && d !== c && (d = D(d, !1)));
						tt = l
					}
				}), 30),
				ot = function(e) {
					var t = e.originalEvent,
						n = e.putSortable,
						r = e.dragEl,
						i = e.activeSortable,
						a = e.dispatchSortableEvent,
						o = e.hideGhostForTarget,
						s = e.unhideGhostForTarget;
					if (t) {
						var u = n || i;
						o();
						var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
							l = document.elementFromPoint(c.clientX, c.clientY);
						s(), u && !u.el.contains(l) && (a("spill"), this.onSpill({
							dragEl: r,
							putSortable: n
						}))
					}
				};

			function st() {}

			function ut() {}

			function ct() {
				function e() {
					this.defaults = {
						swapClass: "sortable-swap-highlight"
					}
				}
				return e.prototype = {
					dragStart: function(e) {
						var t = e.dragEl;
						it = t
					},
					dragOverValid: function(e) {
						var t = e.completed,
							n = e.target,
							r = e.onMove,
							i = e.activeSortable,
							a = e.changed,
							o = e.cancel;
						if (i.options.swap) {
							var s = this.sortable.el,
								u = this.options;
							if (n && n !== s) {
								var c = it;
								!1 !== r(n) ? (E(n, u.swapClass, !0), it = n) : it = null, c && c !== it && E(c, u.swapClass, !1)
							}
							a(), t(!0), o()
						}
					},
					drop: function(e) {
						var t = e.activeSortable,
							n = e.putSortable,
							r = e.dragEl,
							i = n || this.sortable,
							a = this.options;
						it && E(it, a.swapClass, !1), it && (a.swap || n && n.options.swap) && r !== it && (i.captureAnimationState(), i !== t && t.captureAnimationState(), function(e, t) {
							var n, r, i = e.parentNode,
								a = t.parentNode;
							i && a && !i.isEqualNode(t) && !a.isEqualNode(e) && (n = I(e), r = I(t), i.isEqualNode(a) && n < r && r++, i.insertBefore(t, i.children[n]), a.insertBefore(e, a.children[r]))
						}(r, it), i.animateAll(), i !== t && t.animateAll())
					},
					nulling: function() {
						it = null
					}
				}, a(e, {
					pluginName: "swap",
					eventProperties: function() {
						return {
							swapItem: it
						}
					}
				})
			}
			st.prototype = {
				startIndex: null,
				dragStart: function(e) {
					var t = e.oldDraggableIndex;
					this.startIndex = t
				},
				onSpill: function(e) {
					var t = e.dragEl,
						n = e.putSortable;
					this.sortable.captureAnimationState(), n && n.captureAnimationState();
					var r = P(this.sortable.el, this.startIndex, this.options);
					r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
				},
				drop: ot
			}, a(st, {
				pluginName: "revertOnSpill"
			}), ut.prototype = {
				onSpill: function(e) {
					var t = e.dragEl,
						n = e.putSortable || this.sortable;
					n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
				},
				drop: ot
			}, a(ut, {
				pluginName: "removeOnSpill"
			});
			var lt, ft, dt, ht, pt, _t = [],
				mt = [],
				bt = !1,
				gt = !1,
				vt = !1;

			function yt() {
				function e(e) {
					for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
					e.options.supportPointer ? b(document, "pointerup", this._deselectMultiDrag) : (b(document, "mouseup", this._deselectMultiDrag), b(document, "touchend", this._deselectMultiDrag)), b(document, "keydown", this._checkKeyDown), b(document, "keyup", this._checkKeyUp), this.defaults = {
						selectedClass: "sortable-selected",
						multiDragKey: null,
						setData: function(t, n) {
							var r = "";
							_t.length && ft === e ? _t.forEach((function(e, t) {
								r += (t ? ", " : "") + e.textContent
							})) : r = n.textContent, t.setData("Text", r)
						}
					}
				}
				return e.prototype = {
					multiDragKeyDown: !1,
					isMultiDrag: !1,
					delayStartGlobal: function(e) {
						var t = e.dragEl;
						dt = t
					},
					delayEnded: function() {
						this.isMultiDrag = ~_t.indexOf(dt)
					},
					setupClone: function(e) {
						var t = e.sortable,
							n = e.cancel;
						if (this.isMultiDrag) {
							for (var r = 0; r < _t.length; r++) mt.push(F(_t[r])), mt[r].sortableIndex = _t[r].sortableIndex, mt[r].draggable = !1, mt[r].style["will-change"] = "", E(mt[r], this.options.selectedClass, !1), _t[r] === dt && E(mt[r], this.options.chosenClass, !1);
							t._hideClone(), n()
						}
					},
					clone: function(e) {
						var t = e.sortable,
							n = e.rootEl,
							r = e.dispatchSortableEvent,
							i = e.cancel;
						this.isMultiDrag && (this.options.removeCloneOnHide || _t.length && ft === t && (At(!0, n), r("clone"), i()))
					},
					showClone: function(e) {
						var t = e.cloneNowShown,
							n = e.rootEl,
							r = e.cancel;
						this.isMultiDrag && (At(!1, n), mt.forEach((function(e) {
							T(e, "display", "")
						})), t(), pt = !1, r())
					},
					hideClone: function(e) {
						var t = this,
							n = (e.sortable, e.cloneNowHidden),
							r = e.cancel;
						this.isMultiDrag && (mt.forEach((function(e) {
							T(e, "display", "none"), t.options.removeCloneOnHide && e.parentNode && e.parentNode.removeChild(e)
						})), n(), pt = !0, r())
					},
					dragStartGlobal: function(e) {
						e.sortable, !this.isMultiDrag && ft && ft.multiDrag._deselectMultiDrag(), _t.forEach((function(e) {
							e.sortableIndex = I(e)
						})), _t = _t.sort((function(e, t) {
							return e.sortableIndex - t.sortableIndex
						})), vt = !0
					},
					dragStarted: function(e) {
						var t = this,
							n = e.sortable;
						if (this.isMultiDrag) {
							if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
								_t.forEach((function(e) {
									e !== dt && T(e, "position", "absolute")
								}));
								var r = O(dt, !1, !0, !0);
								_t.forEach((function(e) {
									e !== dt && U(e, r)
								})), gt = !0, bt = !0
							}
							n.animateAll((function() {
								gt = !1, bt = !1, t.options.animation && _t.forEach((function(e) {
									j(e)
								})), t.options.sort && St()
							}))
						}
					},
					dragOver: function(e) {
						var t = e.target,
							n = e.completed,
							r = e.cancel;
						gt && ~_t.indexOf(t) && (n(!1), r())
					},
					revert: function(e) {
						var t = e.fromSortable,
							n = e.rootEl,
							r = e.sortable,
							i = e.dragRect;
						_t.length > 1 && (_t.forEach((function(e) {
							r.addAnimationState({
								target: e,
								rect: gt ? O(e) : i
							}), j(e), e.fromRect = i, t.removeAnimationState(e)
						})), gt = !1, function(e, t) {
							_t.forEach((function(n, r) {
								var i = t.children[n.sortableIndex + (e ? Number(r) : 0)];
								i ? t.insertBefore(n, i) : t.appendChild(n)
							}))
						}(!this.options.removeCloneOnHide, n))
					},
					dragOverCompleted: function(e) {
						var t = e.sortable,
							n = e.isOwner,
							r = e.insertion,
							i = e.activeSortable,
							a = e.parentEl,
							o = e.putSortable,
							s = this.options;
						if (r) {
							if (n && i._hideClone(), bt = !1, s.animation && _t.length > 1 && (gt || !n && !i.options.sort && !o)) {
								var u = O(dt, !1, !0, !0);
								_t.forEach((function(e) {
									e !== dt && (U(e, u), a.appendChild(e))
								})), gt = !0
							}
							if (!n)
								if (gt || St(), _t.length > 1) {
									var c = pt;
									i._showClone(t), i.options.animation && !pt && c && mt.forEach((function(e) {
										i.addAnimationState({
											target: e,
											rect: ht
										}), e.fromRect = ht, e.thisAnimationDuration = null
									}))
								} else i._showClone(t)
						}
					},
					dragOverAnimationCapture: function(e) {
						var t = e.dragRect,
							n = e.isOwner,
							r = e.activeSortable;
						if (_t.forEach((function(e) {
								e.thisAnimationDuration = null
							})), r.options.animation && !n && r.multiDrag.isMultiDrag) {
							ht = a({}, t);
							var i = C(dt, !0);
							ht.top -= i.f, ht.left -= i.e
						}
					},
					dragOverAnimationComplete: function() {
						gt && (gt = !1, St())
					},
					drop: function(e) {
						var t = e.originalEvent,
							n = e.rootEl,
							r = e.parentEl,
							i = e.sortable,
							a = e.dispatchSortableEvent,
							o = e.oldIndex,
							s = e.putSortable,
							u = s || this.sortable;
						if (t) {
							var c = this.options,
								l = r.children;
							if (!vt)
								if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), E(dt, c.selectedClass, !~_t.indexOf(dt)), ~_t.indexOf(dt)) _t.splice(_t.indexOf(dt), 1), lt = null, G({
									sortable: i,
									rootEl: n,
									name: "deselect",
									targetEl: dt,
									originalEvt: t
								});
								else {
									if (_t.push(dt), G({
											sortable: i,
											rootEl: n,
											name: "select",
											targetEl: dt,
											originalEvt: t
										}), t.shiftKey && lt && i.el.contains(lt)) {
										var f, d, h = I(lt),
											p = I(dt);
										if (~h && ~p && h !== p)
											for (p > h ? (d = h, f = p) : (d = p, f = h + 1); d < f; d++) ~_t.indexOf(l[d]) || (E(l[d], c.selectedClass, !0), _t.push(l[d]), G({
												sortable: i,
												rootEl: n,
												name: "select",
												targetEl: l[d],
												originalEvt: t
											}))
									} else lt = dt;
									ft = u
								} if (vt && this.isMultiDrag) {
								if ((r[H].options.sort || r !== n) && _t.length > 1) {
									var _ = O(dt),
										m = I(dt, ":not(." + this.options.selectedClass + ")");
									if (!bt && c.animation && (dt.thisAnimationDuration = null), u.captureAnimationState(), !bt && (c.animation && (dt.fromRect = _, _t.forEach((function(e) {
											if (e.thisAnimationDuration = null, e !== dt) {
												var t = gt ? O(e) : _;
												e.fromRect = t, u.addAnimationState({
													target: e,
													rect: t
												})
											}
										}))), St(), _t.forEach((function(e) {
											l[m] ? r.insertBefore(e, l[m]) : r.appendChild(e), m++
										})), o === I(dt))) {
										var b = !1;
										_t.forEach((function(e) {
											e.sortableIndex === I(e) || (b = !0)
										})), b && a("update")
									}
									_t.forEach((function(e) {
										j(e)
									})), u.animateAll()
								}
								ft = u
							}(n === r || s && "clone" !== s.lastPutMode) && mt.forEach((function(e) {
								e.parentNode && e.parentNode.removeChild(e)
							}))
						}
					},
					nullingGlobal: function() {
						this.isMultiDrag = vt = !1, mt.length = 0
					},
					destroyGlobal: function() {
						this._deselectMultiDrag(), g(document, "pointerup", this._deselectMultiDrag), g(document, "mouseup", this._deselectMultiDrag), g(document, "touchend", this._deselectMultiDrag), g(document, "keydown", this._checkKeyDown), g(document, "keyup", this._checkKeyUp)
					},
					_deselectMultiDrag: function(e) {
						if (!(void 0 !== vt && vt || ft !== this.sortable || e && A(e.target, this.options.draggable, this.sortable.el, !1) || e && 0 !== e.button))
							for (; _t.length;) {
								var t = _t[0];
								E(t, this.options.selectedClass, !1), _t.shift(), G({
									sortable: this.sortable,
									rootEl: this.sortable.el,
									name: "deselect",
									targetEl: t,
									originalEvt: e
								})
							}
					},
					_checkKeyDown: function(e) {
						e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
					},
					_checkKeyUp: function(e) {
						e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
					}
				}, a(e, {
					pluginName: "multiDrag",
					utils: {
						select: function(e) {
							var t = e.parentNode[H];
							t && t.options.multiDrag && !~_t.indexOf(e) && (ft && ft !== t && (ft.multiDrag._deselectMultiDrag(), ft = t), E(e, t.options.selectedClass, !0), _t.push(e))
						},
						deselect: function(e) {
							var t = e.parentNode[H],
								n = _t.indexOf(e);
							t && t.options.multiDrag && ~n && (E(e, t.options.selectedClass, !1), _t.splice(n, 1))
						}
					},
					eventProperties: function() {
						var e = this,
							t = [],
							n = [];
						return _t.forEach((function(r) {
							var i;
							t.push({
								multiDragElement: r,
								index: r.sortableIndex
							}), i = gt && r !== dt ? -1 : gt ? I(r, ":not(." + e.options.selectedClass + ")") : I(r), n.push({
								multiDragElement: r,
								index: i
							})
						})), {
							items: u(_t),
							clones: [].concat(mt),
							oldIndicies: t,
							newIndicies: n
						}
					},
					optionListeners: {
						multiDragKey: function(e) {
							return "ctrl" === (e = e.toLowerCase()) ? e = "Control" : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1)), e
						}
					}
				})
			}

			function At(e, t) {
				mt.forEach((function(n, r) {
					var i = t.children[n.sortableIndex + (e ? Number(r) : 0)];
					i ? t.insertBefore(n, i) : t.appendChild(n)
				}))
			}

			function St() {
				_t.forEach((function(e) {
					e !== dt && e.parentNode && e.parentNode.removeChild(e)
				}))
			}
			Ue.mount(new function() {
				function e() {
					for (var e in this.defaults = {
							scroll: !0,
							scrollSensitivity: 30,
							scrollSpeed: 10,
							bubbleScroll: !0
						}, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
				}
				return e.prototype = {
					dragStarted: function(e) {
						var t = e.originalEvent;
						this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? b(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? b(document, "touchmove", this._handleFallbackAutoScroll) : b(document, "mousemove", this._handleFallbackAutoScroll)
					},
					dragOverCompleted: function(e) {
						var t = e.originalEvent;
						this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
					},
					drop: function() {
						this.sortable.nativeDraggable ? g(document, "dragover", this._handleAutoScroll) : (g(document, "pointermove", this._handleFallbackAutoScroll), g(document, "touchmove", this._handleFallbackAutoScroll), g(document, "mousemove", this._handleFallbackAutoScroll)), rt(), nt(), clearTimeout(S), S = void 0
					},
					nulling: function() {
						Je = We = qe = tt = Ze = Ke = Xe = null, et.length = 0
					},
					_handleFallbackAutoScroll: function(e) {
						this._handleAutoScroll(e, !0)
					},
					_handleAutoScroll: function(e, t) {
						var n = this,
							r = (e.touches ? e.touches[0] : e).clientX,
							i = (e.touches ? e.touches[0] : e).clientY,
							a = document.elementFromPoint(r, i);
						if (Je = e, t || f || l || h) {
							at(e, this.options, a, t);
							var o = D(a, !0);
							!tt || Ze && r === Ke && i === Xe || (Ze && rt(), Ze = setInterval((function() {
								var a = D(document.elementFromPoint(r, i), !0);
								a !== o && (o = a, nt()), at(e, n.options, a, t)
							}), 10), Ke = r, Xe = i)
						} else {
							if (!this.options.bubbleScroll || D(a, !0) === k()) return void nt();
							at(e, this.options, D(a, !1), !1)
						}
					}
				}, a(e, {
					pluginName: "scroll",
					initializeByDefault: !0
				})
			}), Ue.mount(ut, st), t.default = Ue
		},
		aaf2: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						s: ["à¤¥à¥‹à¤¡à¤¯à¤¾ à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", "à¤¥à¥‹à¤¡à¥‡ à¤¸à¥…à¤•à¤‚à¤¡"],
						ss: [e + " à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", e + " à¤¸à¥…à¤•à¤‚à¤¡"],
						m: ["à¤à¤•à¤¾ à¤®à¤¿à¤£à¤Ÿà¤¾à¤¨", "à¤à¤• à¤®à¤¿à¤¨à¥‚à¤Ÿ"],
						mm: [e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚à¤¨à¥€", e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚"],
						h: ["à¤à¤•à¤¾ à¤µà¤°à¤¾à¤¨", "à¤à¤• à¤µà¤°"],
						hh: [e + " à¤µà¤°à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¤¾à¤‚"],
						d: ["à¤à¤•à¤¾ à¤¦à¤¿à¤¸à¤¾à¤¨", "à¤à¤• à¤¦à¥€à¤¸"],
						dd: [e + " à¤¦à¤¿à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤¦à¥€à¤¸"],
						M: ["à¤à¤•à¤¾ à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨", "à¤à¤• à¤®à¥à¤¹à¤¯à¤¨à¥‹"],
						MM: [e + " à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨à¥€", e + " à¤®à¥à¤¹à¤¯à¤¨à¥‡"],
						y: ["à¤à¤•à¤¾ à¤µà¤°à¥à¤¸à¤¾à¤¨", "à¤à¤• à¤µà¤°à¥à¤¸"],
						yy: [e + " à¤µà¤°à¥à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¥à¤¸à¤¾à¤‚"]
					};
					return r ? i[n][0] : i[n][1]
				}
				e.defineLocale("gom-deva", {
					months: {
						standalone: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¯_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
						format: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤®à¤¾à¤°à¥à¤šà¤¾à¤šà¥à¤¯à¤¾_à¤à¤ªà¥à¤°à¥€à¤²à¤¾à¤šà¥à¤¯à¤¾_à¤®à¥‡à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥‚à¤¨à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥à¤²à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤—à¤¸à¥à¤Ÿà¤¾à¤šà¥à¤¯à¤¾_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾".split("_"),
						isFormat: /MMMM(\s)+D[oD]?/
					},
					monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€._à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
					monthsParseExact: !0,
					weekdays: "à¤†à¤¯à¤¤à¤¾à¤°_à¤¸à¥‹à¤®à¤¾à¤°_à¤®à¤‚à¤—à¤³à¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤¬à¤¿à¤°à¥‡à¤¸à¥à¤¤à¤¾à¤°_à¤¸à¥à¤•à¥à¤°à¤¾à¤°_à¤¶à¥‡à¤¨à¤µà¤¾à¤°".split("_"),
					weekdaysShort: "à¤†à¤¯à¤¤._à¤¸à¥‹à¤®._à¤®à¤‚à¤—à¤³._à¤¬à¥à¤§._à¤¬à¥à¤°à¥‡à¤¸à¥à¤¤._à¤¸à¥à¤•à¥à¤°._à¤¶à¥‡à¤¨.".split("_"),
					weekdaysMin: "à¤†_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤¬à¥à¤°à¥‡_à¤¸à¥_à¤¶à¥‡".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
						LTS: "A h:mm:ss [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
						L: "DD-MM-YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
						LLLL: "dddd, MMMM Do, YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
						llll: "ddd, D MMM YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]"
					},
					calendar: {
						sameDay: "[à¤†à¤¯à¤œ] LT",
						nextDay: "[à¤«à¤¾à¤²à¥à¤¯à¤¾à¤‚] LT",
						nextWeek: "[à¤«à¥à¤¡à¤²à¥‹] dddd[,] LT",
						lastDay: "[à¤•à¤¾à¤²] LT",
						lastWeek: "[à¤«à¤¾à¤Ÿà¤²à¥‹] dddd[,] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s",
						past: "%s à¤†à¤¦à¥€à¤‚",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}(à¤µà¥‡à¤°)/,
					ordinal: function(e, t) {
						switch (t) {
							case "D":
								return e + "à¤µà¥‡à¤°";
							default:
							case "M":
							case "Q":
							case "DDD":
							case "d":
							case "w":
							case "W":
								return e
						}
					},
					week: {
						dow: 0,
						doy: 3
					},
					meridiemParse: /à¤°à¤¾à¤¤à¥€|à¤¸à¤•à¤¾à¤³à¥€à¤‚|à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚|à¤¸à¤¾à¤‚à¤œà¥‡/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥€" === t ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€à¤‚" === t ? e : "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" === t ? e > 12 ? e : e + 12 : "à¤¸à¤¾à¤‚à¤œà¥‡" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à¤°à¤¾à¤¤à¥€" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€à¤‚" : e < 16 ? "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" : e < 20 ? "à¤¸à¤¾à¤‚à¤œà¥‡" : "à¤°à¤¾à¤¤à¥€"
					}
				})
			}(n("c1df"))
		},
		ab12: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Guid = void 0,
				function(e) {
					var t = 1;
					e.next = function() {
						return t++
					}
				}(t.Guid || (t.Guid = {}))
		},
		ab13: function(e, t, n) {
			var r = n("b622")("match");
			e.exports = function(e) {
				var t = /./;
				try {
					"/./" [e](t)
				} catch (n) {
					try {
						return t[r] = !1, "/./" [e](t)
					} catch (e) {}
				}
				return !1
			}
		},
		ab39: function(e, t, n) {
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
			}), t.HugePlaybackToggleButton = void 0;
			var i = n("6811"),
				a = n("571d"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-hugeplaybacktogglebutton",
							text: o.i18n.getLocalizer("playPause"),
							role: "button"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n, !1);
						var i = function() {
								t.isPlaying() || r.isPlayInitiated ? t.pause("ui") : t.play("ui")
							},
							a = function() {
								t.getViewMode() === t.exports.ViewMode.Fullscreen ? t.setViewMode(t.exports.ViewMode.Inline) : t.setViewMode(t.exports.ViewMode.Fullscreen)
							},
							o = !0,
							s = 0,
							u = 0;
						this.onClick.subscribe((function() {
							if (o) i();
							else {
								var e = Date.now();
								if (e - s < 200) return a(), void(u = e);
								if (e - s < 500) return a(), i(), void(u = e);
								s = e, setTimeout((function() {
									Date.now() - u > 200 && i()
								}), 200)
							}
						})), t.on(t.exports.PlayerEvent.Play, (function() {
							o = !1
						})), t.on(t.exports.PlayerEvent.Warning, (function(e) {
							e.code === t.exports.WarningCode.PLAYBACK_COULD_NOT_BE_STARTED && (o = !0)
						}));
						var c = function() {
							r.setTransitionAnimationsEnabled(!1), r.onToggle.subscribeOnce((function() {
								r.setTransitionAnimationsEnabled(!0)
							}))
						};
						c();
						var l = t.getConfig().playback && Boolean(t.getConfig().playback.autoplay),
							f = !t.getSource() && l;
						(t.isPlaying() || f) && (this.on(), c(), t.on(t.exports.PlayerEvent.Warning, (function(e) {
							e.code === t.exports.WarningCode.PLAYBACK_COULD_NOT_BE_STARTED && c()
						})))
					}, t.prototype.toDomElement = function() {
						var t = e.prototype.toDomElement.call(this);
						return t.append(new a.DOM("div", {
							class: this.prefixCss("image")
						})), t
					}, t.prototype.setTransitionAnimationsEnabled = function(e) {
						var t = this.prefixCss("no-transition-animations");
						e ? this.getDomElement().removeClass(t) : this.getDomElement().hasClass(t) || this.getDomElement().addClass(t)
					}, t
				}(i.PlaybackToggleButton);
			t.HugePlaybackToggleButton = s
		},
		ac0e: function(e, t, n) {
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
			}), t.ControlBar = void 0;
			var i = n("fdec"),
				a = n("f109"),
				o = n("ac6c"),
				s = n("e1ee"),
				u = n("8e8b"),
				c = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-controlbar",
							hidden: !0,
							role: "region",
							ariaLabel: s.i18n.getLocalizer("controlBar")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var s = 0;
						n.getConfig().disableAutoHideWhenHovered && !u.BrowserUtils.isMobile && a.UIUtils.traverseTree(this, (function(e) {
							e instanceof i.Container || e instanceof o.Spacer || e.onHoverChanged.subscribe((function(e, t) {
								t.hovered ? s++ : s--
							}))
						})), n.onControlsShow.subscribe((function() {
							r.show()
						})), n.onPreviewControlsHide.subscribe((function(e, t) {
							t.cancel = s > 0
						})), n.onControlsHide.subscribe((function() {
							r.hide()
						}))
					}, t
				}(i.Container);
			t.ControlBar = c
		},
		ac1f: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("9263");
			r({
				target: "RegExp",
				proto: !0,
				forced: /./.exec !== i
			}, {
				exec: i
			})
		},
		ac6c: function(e, t, n) {
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
			}), t.Spacer = void 0;
			var i = function(e) {
				function t(t) {
					void 0 === t && (t = {});
					var n = e.call(this, t) || this;
					return n.config = n.mergeConfig(t, {
						cssClass: "ui-spacer"
					}, n.config), n
				}
				return r(t, e), t.prototype.onShowEvent = function() {}, t.prototype.onHideEvent = function() {}, t.prototype.onHoverChangedEvent = function(e) {}, t
			}(n("587c").Component);
			t.Spacer = i
		},
		acac: function(e, t, n) {
			"use strict";
			var r = n("e2cc"),
				i = n("f183").getWeakData,
				a = n("825a"),
				o = n("861d"),
				s = n("19aa"),
				u = n("2266"),
				c = n("b727"),
				l = n("5135"),
				f = n("69f3"),
				d = f.set,
				h = f.getterFor,
				p = c.find,
				_ = c.findIndex,
				m = 0,
				b = function(e) {
					return e.frozen || (e.frozen = new g)
				},
				g = function() {
					this.entries = []
				},
				v = function(e, t) {
					return p(e.entries, (function(e) {
						return e[0] === t
					}))
				};
			g.prototype = {
				get: function(e) {
					var t = v(this, e);
					if (t) return t[1]
				},
				has: function(e) {
					return !!v(this, e)
				},
				set: function(e, t) {
					var n = v(this, e);
					n ? n[1] = t : this.entries.push([e, t])
				},
				delete: function(e) {
					var t = _(this.entries, (function(t) {
						return t[0] === e
					}));
					return ~t && this.entries.splice(t, 1), !!~t
				}
			}, e.exports = {
				getConstructor: function(e, t, n, c) {
					var f = e((function(e, r) {
							s(e, f, t), d(e, {
								type: t,
								id: m++,
								frozen: void 0
							}), null != r && u(r, e[c], {
								that: e,
								AS_ENTRIES: n
							})
						})),
						p = h(t),
						_ = function(e, t, n) {
							var r = p(e),
								o = i(a(t), !0);
							return !0 === o ? b(r).set(t, n) : o[r.id] = n, e
						};
					return r(f.prototype, {
						delete: function(e) {
							var t = p(this);
							if (!o(e)) return !1;
							var n = i(e);
							return !0 === n ? b(t).delete(e) : n && l(n, t.id) && delete n[t.id]
						},
						has: function(e) {
							var t = p(this);
							if (!o(e)) return !1;
							var n = i(e);
							return !0 === n ? b(t).has(e) : n && l(n, t.id)
						}
					}), r(f.prototype, n ? {
						get: function(e) {
							var t = p(this);
							if (o(e)) {
								var n = i(e);
								return !0 === n ? b(t).get(e) : n ? n[t.id] : void 0
							}
						},
						set: function(e, t) {
							return _(this, e, t)
						}
					} : {
						add: function(e) {
							return _(this, e, !0)
						}
					}), f
				}
			}
		},
		ad6d: function(e, t, n) {
			"use strict";
			var r = n("825a");
			e.exports = function() {
				var e = r(this),
					t = "";
				return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
			}
		},
		ada2: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					return "m" === n ? t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + function(e, t) {
						var n = e.split("_");
						return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
					}({
						ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
						mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
						hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
						dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
						MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
						yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
					} [n], +e)
				}

				function n(e) {
					return function() {
						return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
					}
				}
				e.defineLocale("uk", {
					months: {
						format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
						standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
					},
					monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
					weekdays: function(e, t) {
						var n = {
							nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
							accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
							genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
						};
						return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
					},
					weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
					weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY Ñ€.",
						LLL: "D MMMM YYYY Ñ€., HH:mm",
						LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
					},
					calendar: {
						sameDay: n("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
						nextDay: n("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
						lastDay: n("[Ð’Ñ‡Ð¾Ñ€Ð° "),
						nextWeek: n("[Ð£] dddd ["),
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 5:
								case 6:
									return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
								case 1:
								case 2:
								case 4:
									return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "Ð·Ð° %s",
						past: "%s Ñ‚Ð¾Ð¼Ñƒ",
						s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
						ss: t,
						m: t,
						mm: t,
						h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
						hh: t,
						d: "Ð´ÐµÐ½ÑŒ",
						dd: t,
						M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
						MM: t,
						y: "Ñ€Ñ–Ðº",
						yy: t
					},
					meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
					isPM: function(e) {
						return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
					ordinal: function(e, t) {
						switch (t) {
							case "M":
							case "d":
							case "DDD":
							case "w":
							case "W":
								return e + "-Ð¹";
							case "D":
								return e + "-Ð³Ð¾";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		ade3: function(e, t, n) {
			"use strict";

			function r(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		ae93: function(e, t, n) {
			"use strict";
			var r, i, a, o = n("d039"),
				s = n("e163"),
				u = n("9112"),
				c = n("5135"),
				l = n("b622"),
				f = n("c430"),
				d = l("iterator"),
				h = !1;
			[].keys && ("next" in (a = [].keys()) ? (i = s(s(a))) !== Object.prototype && (r = i) : h = !0);
			var p = null == r || o((function() {
				var e = {};
				return r[d].call(e) !== e
			}));
			p && (r = {}), f && !p || c(r, d) || u(r, d, (function() {
				return this
			})), e.exports = {
				IteratorPrototype: r,
				BUGGY_SAFARI_ITERATORS: h
			}
		},
		af03: function(e, t, n) {
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
			}), t.RecommendationOverlay = void 0;
			var i = n("fdec"),
				a = n("587c"),
				o = n("571d"),
				s = n("0c29"),
				u = n("2408"),
				c = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.replayButton = new u.HugeReplayButton, n.config = n.mergeConfig(t, {
							cssClass: "ui-recommendation-overlay",
							hidden: !0,
							components: [n.replayButton]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = function() {
								for (var e = 0, t = r.getComponents().slice(); e < t.length; e++) {
									var n = t[e];
									n instanceof l && r.removeComponent(n)
								}
								r.updateComponents(), r.getDomElement().removeClass(r.prefixCss("recommendations"))
							},
							a = function() {
								i();
								var e = n.getConfig().recommendations;
								if (e.length > 0) {
									for (var t = 1, a = 0, o = e; a < o.length; a++) {
										var s = o[a];
										r.addComponent(new l({
											itemConfig: s,
											cssClasses: ["recommendation-item-" + t++]
										}))
									}
									r.updateComponents(), r.getDomElement().addClass(r.prefixCss("recommendations"))
								}
							};
						n.getConfig().events.onUpdated.subscribe(a), t.on(t.exports.PlayerEvent.SourceUnloaded, (function() {
							i(), r.hide()
						})), t.on(t.exports.PlayerEvent.PlaybackFinished, (function() {
							r.show()
						})), t.on(t.exports.PlayerEvent.Play, (function() {
							r.hide()
						})), a()
					}, t
				}(i.Container);
			t.RecommendationOverlay = c;
			var l = function(e) {
				function t(t) {
					var n = e.call(this, t) || this;
					return n.config = n.mergeConfig(t, {
						cssClass: "ui-recommendation-item",
						itemConfig: null
					}, n.config), n
				}
				return r(t, e), t.prototype.toDomElement = function() {
					var e = this.config.itemConfig,
						t = new o.DOM("a", {
							id: this.config.id,
							class: this.getCssClasses(),
							href: e.url
						}).css({
							"background-image": "url(" + e.thumbnail + ")"
						}),
						n = new o.DOM("div", {
							class: this.prefixCss("background")
						});
					t.append(n);
					var r = new o.DOM("span", {
						class: this.prefixCss("title")
					}).append(new o.DOM("span", {
						class: this.prefixCss("innertitle")
					}).html(e.title));
					t.append(r);
					var i = new o.DOM("span", {
						class: this.prefixCss("duration")
					}).append(new o.DOM("span", {
						class: this.prefixCss("innerduration")
					}).html(e.duration ? s.StringUtils.secondsToTime(e.duration) : ""));
					return t.append(i), t
				}, t
			}(a.Component)
		},
		b041: function(e, t, n) {
			"use strict";
			var r = n("00ee"),
				i = n("f5df");
			e.exports = r ? {}.toString : function() {
				return "[object " + i(this) + "]"
			}
		},
		b047: function(e, t, n) {
			var r = n("1a8c"),
				i = n("408c"),
				a = n("b4b0"),
				o = Math.max,
				s = Math.min;
			e.exports = function(e, t, n) {
				var u, c, l, f, d, h, p = 0,
					_ = !1,
					m = !1,
					b = !0;
				if ("function" != typeof e) throw new TypeError("Expected a function");

				function g(t) {
					var n = u,
						r = c;
					return u = c = void 0, p = t, f = e.apply(r, n)
				}

				function v(e) {
					return p = e, d = setTimeout(A, t), _ ? g(e) : f
				}

				function y(e) {
					var n = e - h;
					return void 0 === h || n >= t || n < 0 || m && e - p >= l
				}

				function A() {
					var e = i();
					if (y(e)) return S(e);
					d = setTimeout(A, function(e) {
						var n = t - (e - h);
						return m ? s(n, l - (e - p)) : n
					}(e))
				}

				function S(e) {
					return d = void 0, b && u ? g(e) : (u = c = void 0, f)
				}

				function w() {
					var e = i(),
						n = y(e);
					if (u = arguments, c = this, h = e, n) {
						if (void 0 === d) return v(h);
						if (m) return clearTimeout(d), d = setTimeout(A, t), g(h)
					}
					return void 0 === d && (d = setTimeout(A, t)), f
				}
				return t = a(t) || 0, r(n) && (_ = !!n.leading, l = (m = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : l, b = "trailing" in n ? !!n.trailing : b), w.cancel = function() {
					void 0 !== d && clearTimeout(d), p = 0, u = h = c = d = void 0
				}, w.flush = function() {
					return void 0 === d ? f : S(i())
				}, w
			}
		},
		b079: function(e, t, n) {
			e.exports = (() => {
				"use strict";
				var e = {
						d: (t, n) => {
							for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
								enumerable: !0,
								get: n[r]
							})
						},
						o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
					},
					t = {};
				e.d(t, {
					default: () => l
				});
				class n {
					constructor(e, t) {
						this.startedAt = Date.now(), this.callback = e, this.delay = t, this.timer = setTimeout(e, t)
					}
					pause() {
						this.stop(), this.delay -= Date.now() - this.startedAt
					}
					resume() {
						this.stop(), this.startedAt = Date.now(), this.timer = setTimeout(this.callback, this.delay)
					}
					stop() {
						clearTimeout(this.timer)
					}
				}
				const r = Object.freeze({
						TOP_RIGHT: "top-right",
						TOP: "top",
						TOP_LEFT: "top-left",
						BOTTOM_RIGHT: "bottom-right",
						BOTTOM: "bottom",
						BOTTOM_LEFT: "bottom-left"
					}),
					i = (s = s || new Map, function(e, t) {
						var n = s.get(e);
						n && n.push(t) || s.set(e, [t])
					}),
					a = function(e, t) {
						var n = s.get(e);
						n && n.splice(n.indexOf(t) >>> 0, 1)
					},
					o = function(e, t) {
						(s.get(e) || []).slice().map((function(e) {
							e(t)
						})), (s.get("*") || []).slice().map((function(n) {
							n(e, t)
						}))
					};
				var s;
				const u = function(e, t, n, r, i, a, o, s) {
						var u, c = "function" == typeof e ? e.options : e;
						if (t && (c.render = t, c.staticRenderFns = [], c._compiled = !0), u)
							if (c.functional) {
								c._injectStyles = u;
								var l = c.render;
								c.render = function(e, t) {
									return u.call(t), l(e, t)
								}
							} else {
								var f = c.beforeCreate;
								c.beforeCreate = f ? [].concat(f, u) : [u]
							} return {
							exports: e,
							options: c
						}
					}({
						name: "toast",
						props: {
							message: {
								type: String,
								required: !0
							},
							type: {
								type: String,
								default: "success"
							},
							position: {
								type: String,
								default: r.BOTTOM_RIGHT,
								validator: e => Object.values(r).includes(e)
							},
							duration: {
								type: Number,
								default: 3e3
							},
							dismissible: {
								type: Boolean,
								default: !0
							},
							onDismiss: {
								type: Function,
								default: () => {}
							},
							onClick: {
								type: Function,
								default: () => {}
							},
							queue: Boolean,
							pauseOnHover: {
								type: Boolean,
								default: !0
							}
						},
						data: () => ({
							isActive: !1,
							parentTop: null,
							parentBottom: null,
							isHovered: !1
						}),
						beforeMount() {
							this.setupContainer()
						},
						mounted() {
							this.showNotice(), i("toast-clear", this.dismiss)
						},
						methods: {
							setupContainer() {
								if (this.parentTop = document.querySelector(".v-toast.v-toast--top"), this.parentBottom = document.querySelector(".v-toast.v-toast--bottom"), this.parentTop && this.parentBottom) return;
								this.parentTop || (this.parentTop = document.createElement("div"), this.parentTop.className = "v-toast v-toast--top"), this.parentBottom || (this.parentBottom = document.createElement("div"), this.parentBottom.className = "v-toast v-toast--bottom");
								const e = document.body;
								e.appendChild(this.parentTop), e.appendChild(this.parentBottom)
							},
							shouldQueue() {
								return !!this.queue && (this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0)
							},
							dismiss() {
								this.timer && this.timer.stop(), clearTimeout(this.queueTimer), this.isActive = !1, setTimeout(() => {
									var e;
									this.onDismiss.apply(null, arguments), this.$destroy(), void 0 !== (e = this.$el).remove ? e.remove() : e.parentNode.removeChild(e)
								}, 150)
							},
							showNotice() {
								this.shouldQueue() ? this.queueTimer = setTimeout(this.showNotice, 250) : (this.correctParent.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.duration && (this.timer = new n(this.dismiss, this.duration)))
							},
							whenClicked() {
								this.dismissible && (this.onClick.apply(null, arguments), this.dismiss())
							},
							toggleTimer(e) {
								this.pauseOnHover && this.timer && (e ? this.timer.pause() : this.timer.resume())
							}
						},
						computed: {
							correctParent() {
								switch (this.position) {
									case r.TOP:
									case r.TOP_RIGHT:
									case r.TOP_LEFT:
										return this.parentTop;
									case r.BOTTOM:
									case r.BOTTOM_RIGHT:
									case r.BOTTOM_LEFT:
										return this.parentBottom
								}
							},
							transition() {
								switch (this.position) {
									case r.TOP:
									case r.TOP_RIGHT:
									case r.TOP_LEFT:
										return {
											enter: "v-toast--fade-in-down", leave: "v-toast--fade-out"
										};
									case r.BOTTOM:
									case r.BOTTOM_RIGHT:
									case r.BOTTOM_LEFT:
										return {
											enter: "v-toast--fade-in-up", leave: "v-toast--fade-out"
										}
								}
							}
						},
						beforeDestroy() {
							a("toast-clear", this.dismiss)
						}
					}, (function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t;
						return n("transition", {
							attrs: {
								"enter-active-class": e.transition.enter,
								"leave-active-class": e.transition.leave
							}
						}, [n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: e.isActive,
								expression: "isActive"
							}],
							staticClass: "v-toast__item",
							class: ["v-toast__item--" + e.type, "v-toast__item--" + e.position],
							attrs: {
								role: "alert"
							},
							on: {
								mouseover: function(t) {
									return e.toggleTimer(!0)
								},
								mouseleave: function(t) {
									return e.toggleTimer(!1)
								},
								click: e.whenClicked
							}
						}, [n("div", {
							staticClass: "v-toast__icon"
						}), e._v(" "), n("p", {
							staticClass: "v-toast__text",
							domProps: {
								innerHTML: e._s(e.message)
							}
						})])])
					})).exports,
					c = (e, t = {}) => ({
						open(n) {
							let r;
							"string" == typeof n && (r = n);
							const i = {
									message: r
								},
								a = Object.assign({}, i, t, n);
							return new(e.extend(u))({
								el: document.createElement("div"),
								propsData: a
							})
						},
						clear() {
							o("toast-clear")
						},
						success(e, t = {}) {
							return this.open(Object.assign({}, {
								message: e,
								type: "success"
							}, t))
						},
						error(e, t = {}) {
							return this.open(Object.assign({}, {
								message: e,
								type: "error"
							}, t))
						},
						info(e, t = {}) {
							return this.open(Object.assign({}, {
								message: e,
								type: "info"
							}, t))
						},
						warning(e, t = {}) {
							return this.open(Object.assign({}, {
								message: e,
								type: "warning"
							}, t))
						},
						default (e, t = {}) {
							return this.open(Object.assign({}, {
								message: e,
								type: "default"
							}, t))
						}
					});
				u.install = (e, t = {}) => {
					let n = c(e, t);
					e.$toast = n, e.prototype.$toast = n
				};
				const l = u;
				return t.default
			})()
		},
		b0c0: function(e, t, n) {
			var r = n("83ab"),
				i = n("9bf2").f,
				a = Function.prototype,
				o = a.toString,
				s = /^\s*function ([^ (]*)/,
				u = "name";
			r && !(u in a) && i(a, u, {
				configurable: !0,
				get: function() {
					try {
						return o.call(this).match(s)[1]
					} catch (e) {
						return ""
					}
				}
			})
		},
		b10a: function(e, t, n) {
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
			}), t.PlaybackTimeLabel = t.PlaybackTimeLabelMode = void 0;
			var i, a = n("b8bf"),
				o = n("4344"),
				s = n("0c29"),
				u = n("e1ee");
			! function(e) {
				e[e.CurrentTime = 0] = "CurrentTime", e[e.TotalTime = 1] = "TotalTime", e[e.CurrentAndTotalTime = 2] = "CurrentAndTotalTime", e[e.RemainingTime = 3] = "RemainingTime"
			}(i = t.PlaybackTimeLabelMode || (t.PlaybackTimeLabelMode = {}));
			var c = function(e) {
				function t(t) {
					void 0 === t && (t = {});
					var n = e.call(this, t) || this;
					return n.config = n.mergeConfig(t, {
						cssClass: "ui-playbacktimelabel",
						timeLabelMode: i.CurrentAndTotalTime,
						hideInLivePlayback: !1
					}, n.config), n
				}
				return r(t, e), t.prototype.configure = function(t, n) {
					var r = this;
					e.prototype.configure.call(this, t, n);
					var i = this.getConfig(),
						a = !1,
						c = this.prefixCss("ui-playbacktimelabel-live"),
						l = this.prefixCss("ui-playbacktimelabel-live-edge"),
						f = 0,
						d = function() {
							t.timeShift(0)
						},
						h = function() {
							(a = t.isLive()) ? (r.getDomElement().addClass(c), r.setText(u.i18n.getLocalizer("live")), i.hideInLivePlayback && r.hide(), r.onClick.subscribe(d), p()) : (r.getDomElement().removeClass(c), r.getDomElement().removeClass(l), r.show(), r.onClick.unsubscribe(d))
						},
						p = function() {
							if (a) {
								var e = t.getTimeShift() < 0,
									n = t.getMaxTimeShift() < 0;
								e || t.isPaused() && n ? r.getDomElement().removeClass(l) : r.getDomElement().addClass(l)
							}
						},
						_ = new o.PlayerUtils.LiveStreamDetector(t, n);
					_.onLiveChanged.subscribe((function(e, t) {
						a = t.live, h()
					})), _.detect();
					var m = function() {
							a || t.getDuration() === 1 / 0 || r.setTime(o.PlayerUtils.getCurrentTimeRelativeToSeekableRange(t), t.getDuration());
							var e = r.getDomElement().width();
							e > f && (f = e, r.getDomElement().css({
								"min-width": f + "px"
							}))
						},
						b = function() {
							r.timeFormat = Math.abs(t.isLive() ? t.getMaxTimeShift() : t.getDuration()) >= 3600 ? s.StringUtils.FORMAT_HHMMSS : s.StringUtils.FORMAT_MMSS, m()
						};
					t.on(t.exports.PlayerEvent.TimeChanged, m), t.on(t.exports.PlayerEvent.Ready, b), t.on(t.exports.PlayerEvent.Seeked, m), t.on(t.exports.PlayerEvent.TimeShift, p), t.on(t.exports.PlayerEvent.TimeShifted, p), t.on(t.exports.PlayerEvent.Playing, p), t.on(t.exports.PlayerEvent.Paused, p), t.on(t.exports.PlayerEvent.StallStarted, p), t.on(t.exports.PlayerEvent.StallEnded, p);
					var g = function() {
						f = 0, r.getDomElement().css({
							"min-width": null
						}), b()
					};
					n.getConfig().events.onUpdated.subscribe(g), g()
				}, t.prototype.setTime = function(e, t) {
					var n = s.StringUtils.secondsToTime(e, this.timeFormat),
						r = s.StringUtils.secondsToTime(t, this.timeFormat);
					switch (this.config.timeLabelMode) {
						case i.CurrentTime:
							this.setText("" + n);
							break;
						case i.TotalTime:
							this.setText("" + r);
							break;
						case i.CurrentAndTotalTime:
							this.setText(n + " / " + r);
							break;
						case i.RemainingTime:
							var a = s.StringUtils.secondsToTime(t - e, this.timeFormat);
							this.setText("" + a)
					}
				}, t.prototype.setTimeFormat = function(e) {
					this.timeFormat = e
				}, t
			}(a.Label);
			t.PlaybackTimeLabel = c
		},
		b29d: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("lo", {
					months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
					monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
					weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
					weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
					weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
					isPM: function(e) {
						return "àº•àº­àº™à»àº¥àº‡" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
					},
					calendar: {
						sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
						nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
						nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
						lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
						lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "àº­àºµàº %s",
						past: "%sàºœà»ˆàº²àº™àº¡àº²",
						s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
						ss: "%d àº§àº´àº™àº²àº—àºµ",
						m: "1 àº™àº²àº—àºµ",
						mm: "%d àº™àº²àº—àºµ",
						h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
						hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
						d: "1 àº¡àº·à»‰",
						dd: "%d àº¡àº·à»‰",
						M: "1 à»€àº”àº·àº­àº™",
						MM: "%d à»€àº”àº·àº­àº™",
						y: "1 àº›àºµ",
						yy: "%d àº›àºµ"
					},
					dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
					ordinal: function(e) {
						return "àº—àºµà»ˆ" + e
					}
				})
			}(n("c1df"))
		},
		b380: function(e, t, n) {
			"use strict";

			function r(e, t) {
				return (r = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		b39a: function(e, t, n) {
			"use strict";
			var r = n("da84"),
				i = n("ebb5"),
				a = n("d039"),
				o = r.Int8Array,
				s = i.aTypedArray,
				u = i.exportTypedArrayMethod,
				c = [].toLocaleString,
				l = [].slice,
				f = !!o && a((function() {
					c.call(new o(1))
				}));
			u("toLocaleString", (function() {
				return c.apply(f ? l.call(s(this)) : s(this), arguments)
			}), a((function() {
				return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString()
			})) || !a((function() {
				o.prototype.toLocaleString.call([1, 2])
			})))
		},
		b3eb: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						m: ["eine Minute", "einer Minute"],
						h: ["eine Stunde", "einer Stunde"],
						d: ["ein Tag", "einem Tag"],
						dd: [e + " Tage", e + " Tagen"],
						w: ["eine Woche", "einer Woche"],
						M: ["ein Monat", "einem Monat"],
						MM: [e + " Monate", e + " Monaten"],
						y: ["ein Jahr", "einem Jahr"],
						yy: [e + " Jahre", e + " Jahren"]
					};
					return t ? i[n][0] : i[n][1]
				}
				e.defineLocale("de-at", {
					months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd, D. MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[heute um] LT [Uhr]",
						sameElse: "L",
						nextDay: "[morgen um] LT [Uhr]",
						nextWeek: "dddd [um] LT [Uhr]",
						lastDay: "[gestern um] LT [Uhr]",
						lastWeek: "[letzten] dddd [um] LT [Uhr]"
					},
					relativeTime: {
						future: "in %s",
						past: "vor %s",
						s: "ein paar Sekunden",
						ss: "%d Sekunden",
						m: t,
						mm: "%d Minuten",
						h: t,
						hh: "%d Stunden",
						d: t,
						dd: t,
						w: t,
						ww: "%d Wochen",
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
		b469: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						m: ["eine Minute", "einer Minute"],
						h: ["eine Stunde", "einer Stunde"],
						d: ["ein Tag", "einem Tag"],
						dd: [e + " Tage", e + " Tagen"],
						w: ["eine Woche", "einer Woche"],
						M: ["ein Monat", "einem Monat"],
						MM: [e + " Monate", e + " Monaten"],
						y: ["ein Jahr", "einem Jahr"],
						yy: [e + " Jahre", e + " Jahren"]
					};
					return t ? i[n][0] : i[n][1]
				}
				e.defineLocale("de", {
					months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd, D. MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[heute um] LT [Uhr]",
						sameElse: "L",
						nextDay: "[morgen um] LT [Uhr]",
						nextWeek: "dddd [um] LT [Uhr]",
						lastDay: "[gestern um] LT [Uhr]",
						lastWeek: "[letzten] dddd [um] LT [Uhr]"
					},
					relativeTime: {
						future: "in %s",
						past: "vor %s",
						s: "ein paar Sekunden",
						ss: "%d Sekunden",
						m: t,
						mm: "%d Minuten",
						h: t,
						hh: "%d Stunden",
						d: t,
						dd: t,
						w: t,
						ww: "%d Wochen",
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
		b491: function(e, t, n) {
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
			}), t.UIContainer = void 0;
			var i = n("fdec"),
				a = n("571d"),
				o = n("c6d3"),
				s = n("4344"),
				u = n("09e6"),
				c = n("e1ee"),
				l = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-uicontainer",
							role: "region",
							ariaLabel: c.i18n.getLocalizer("player"),
							hideDelay: 5e3
						}, n.config), n.playerStateChange = new u.EventDispatcher, n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this.getConfig();
						r.userInteractionEventSource ? this.userInteractionEventSource = new a.DOM(r.userInteractionEventSource) : this.userInteractionEventSource = this.getDomElement(), e.prototype.configure.call(this, t, n), this.configureUIShowHide(t, n), this.configurePlayerStates(t, n)
					}, t.prototype.configureUIShowHide = function(e, t) {
						var n = this,
							r = this.getConfig();
						if (-1 !== r.hideDelay) {
							var i, a = !1,
								s = !1,
								u = !0,
								c = function() {
									return r.hidePlayerStateExceptions && r.hidePlayerStateExceptions.indexOf(i) > -1
								},
								l = function() {
									a || (t.onControlsShow.dispatch(n), a = !0), s || e.isCasting() || c() || n.uiHideTimeout.start()
								};
							this.uiHideTimeout = new o.Timeout(r.hideDelay, (function() {
								if (a && !e.isCasting()) {
									var r = {};
									t.onPreviewControlsHide.dispatch(n, r), r.cancel ? l() : (t.onControlsHide.dispatch(n), a = !1)
								}
							})), this.userInteractionEvents = [{
								name: "touchend",
								handler: function(t) {
									a || (u && !e.isPlaying() ? u = !1 : t.preventDefault(), l())
								}
							}, {
								name: "mouseenter",
								handler: function() {
									l()
								}
							}, {
								name: "mousemove",
								handler: function() {
									l()
								}
							}, {
								name: "focusin",
								handler: function() {
									l()
								}
							}, {
								name: "keydown",
								handler: function() {
									l()
								}
							}, {
								name: "mouseleave",
								handler: function() {
									s || c() || n.uiHideTimeout.start()
								}
							}], this.userInteractionEvents.forEach((function(e) {
								return n.userInteractionEventSource.on(e.name, e.handler)
							})), t.onSeek.subscribe((function() {
								n.uiHideTimeout.clear(), s = !0
							})), t.onSeeked.subscribe((function() {
								s = !1, c() || n.uiHideTimeout.start()
							})), e.on(e.exports.PlayerEvent.CastStarted, (function() {
								l()
							})), this.playerStateChange.subscribe((function(e, t) {
								i = t, c() ? (n.uiHideTimeout.clear(), l()) : n.uiHideTimeout.start()
							}))
						} else t.onConfigured.subscribe((function() {
							return t.onControlsShow.dispatch(n)
						}))
					}, t.prototype.configurePlayerStates = function(e, n) {
						var r = this,
							i = this.getDomElement(),
							o = [];
						for (var u in s.PlayerUtils.PlayerState)
							if (isNaN(Number(u))) {
								var c = s.PlayerUtils.PlayerState[s.PlayerUtils.PlayerState[u]];
								o[s.PlayerUtils.PlayerState[u]] = this.prefixCss(t.STATE_PREFIX + c.toLowerCase())
							} var l = function(e) {
							i.removeClass(o[s.PlayerUtils.PlayerState.Idle]), i.removeClass(o[s.PlayerUtils.PlayerState.Prepared]), i.removeClass(o[s.PlayerUtils.PlayerState.Playing]), i.removeClass(o[s.PlayerUtils.PlayerState.Paused]), i.removeClass(o[s.PlayerUtils.PlayerState.Finished]), i.addClass(o[e]), r.playerStateChange.dispatch(r, e)
						};
						e.on(e.exports.PlayerEvent.SourceLoaded, (function() {
							l(s.PlayerUtils.PlayerState.Prepared)
						})), e.on(e.exports.PlayerEvent.Play, (function() {
							l(s.PlayerUtils.PlayerState.Playing)
						})), e.on(e.exports.PlayerEvent.Playing, (function() {
							l(s.PlayerUtils.PlayerState.Playing)
						})), e.on(e.exports.PlayerEvent.Paused, (function() {
							l(s.PlayerUtils.PlayerState.Paused)
						})), e.on(e.exports.PlayerEvent.PlaybackFinished, (function() {
							l(s.PlayerUtils.PlayerState.Finished)
						})), e.on(e.exports.PlayerEvent.SourceUnloaded, (function() {
							l(s.PlayerUtils.PlayerState.Idle)
						})), n.getConfig().events.onUpdated.subscribe((function() {
							l(s.PlayerUtils.getState(e))
						})), e.on(e.exports.PlayerEvent.ViewModeChanged, (function() {
							e.getViewMode() === e.exports.ViewMode.Fullscreen ? i.addClass(r.prefixCss(t.FULLSCREEN)) : i.removeClass(r.prefixCss(t.FULLSCREEN))
						})), e.getViewMode() === e.exports.ViewMode.Fullscreen && i.addClass(this.prefixCss(t.FULLSCREEN)), e.on(e.exports.PlayerEvent.StallStarted, (function() {
							i.addClass(r.prefixCss(t.BUFFERING))
						})), e.on(e.exports.PlayerEvent.StallEnded, (function() {
							i.removeClass(r.prefixCss(t.BUFFERING))
						})), e.isStalled() && i.addClass(this.prefixCss(t.BUFFERING)), e.on(e.exports.PlayerEvent.CastStarted, (function() {
							i.addClass(r.prefixCss(t.REMOTE_CONTROL))
						})), e.on(e.exports.PlayerEvent.CastStopped, (function() {
							i.removeClass(r.prefixCss(t.REMOTE_CONTROL))
						})), e.isCasting() && i.addClass(this.prefixCss(t.REMOTE_CONTROL)), n.onControlsShow.subscribe((function() {
							i.removeClass(r.prefixCss(t.CONTROLS_HIDDEN)), i.addClass(r.prefixCss(t.CONTROLS_SHOWN))
						})), n.onControlsHide.subscribe((function() {
							i.removeClass(r.prefixCss(t.CONTROLS_SHOWN)), i.addClass(r.prefixCss(t.CONTROLS_HIDDEN))
						}));
						var f = function(e, t) {
							i.removeClass(r.prefixCss("layout-max-width-400")), i.removeClass(r.prefixCss("layout-max-width-600")), i.removeClass(r.prefixCss("layout-max-width-800")), i.removeClass(r.prefixCss("layout-max-width-1200")), e <= 400 ? i.addClass(r.prefixCss("layout-max-width-400")) : e <= 600 ? i.addClass(r.prefixCss("layout-max-width-600")) : e <= 800 ? i.addClass(r.prefixCss("layout-max-width-800")) : e <= 1200 && i.addClass(r.prefixCss("layout-max-width-1200"))
						};
						e.on(e.exports.PlayerEvent.PlayerResized, (function(e) {
							var t = Math.round(Number(e.width.substring(0, e.width.length - 2)));
							Math.round(Number(e.height.substring(0, e.height.length - 2)));
							f(t)
						})), f(new a.DOM(e.getContainer()).width(), new a.DOM(e.getContainer()).height())
					}, t.prototype.release = function() {
						var t = this;
						this.userInteractionEvents && this.userInteractionEvents.forEach((function(e) {
							return t.userInteractionEventSource.off(e.name, e.handler)
						})), e.prototype.release.call(this), this.uiHideTimeout && this.uiHideTimeout.clear()
					}, t.prototype.toDomElement = function() {
						var t = e.prototype.toDomElement.call(this);
						return document && void 0 !== document.createElement("p").style.flex ? t.addClass(this.prefixCss("flexbox")) : t.addClass(this.prefixCss("no-flexbox")), t
					}, t.STATE_PREFIX = "player-state-", t.FULLSCREEN = "fullscreen", t.BUFFERING = "buffering", t.REMOTE_CONTROL = "remote-control", t.CONTROLS_SHOWN = "controls-shown", t.CONTROLS_HIDDEN = "controls-hidden", t
				}(i.Container);
			t.UIContainer = l
		},
		b4b0: function(e, t, n) {
			var r = n("8d74"),
				i = n("1a8c"),
				a = n("ffd6"),
				o = /^[-+]0x[0-9a-f]+$/i,
				s = /^0b[01]+$/i,
				u = /^0o[0-7]+$/i,
				c = parseInt;
			e.exports = function(e) {
				if ("number" == typeof e) return e;
				if (a(e)) return NaN;
				if (i(e)) {
					var t = "function" == typeof e.valueOf ? e.valueOf() : e;
					e = i(t) ? t + "" : t
				}
				if ("string" != typeof e) return 0 === e ? e : +e;
				e = r(e);
				var n = s.test(e);
				return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
			}
		},
		b50d: function(e, t, n) {
			"use strict";
			var r = n("c532"),
				i = n("467f"),
				a = n("7aac"),
				o = n("30b5"),
				s = n("83b9"),
				u = n("c345"),
				c = n("3934"),
				l = n("2d83");
			e.exports = function(e) {
				return new Promise((function(t, n) {
					var f = e.data,
						d = e.headers;
					r.isFormData(f) && delete d["Content-Type"];
					var h = new XMLHttpRequest;
					if (e.auth) {
						var p = e.auth.username || "",
							_ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
						d.Authorization = "Basic " + btoa(p + ":" + _)
					}
					var m = s(e.baseURL, e.url);
					if (h.open(e.method.toUpperCase(), o(m, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function() {
							if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
								var r = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null,
									a = {
										data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
										status: h.status,
										statusText: h.statusText,
										headers: r,
										config: e,
										request: h
									};
								i(t, n, a), h = null
							}
						}, h.onabort = function() {
							h && (n(l("Request aborted", e, "ECONNABORTED", h)), h = null)
						}, h.onerror = function() {
							n(l("Network Error", e, null, h)), h = null
						}, h.ontimeout = function() {
							var t = "timeout of " + e.timeout + "ms exceeded";
							e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, "ECONNABORTED", h)), h = null
						}, r.isStandardBrowserEnv()) {
						var b = (e.withCredentials || c(m)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0;
						b && (d[e.xsrfHeaderName] = b)
					}
					if ("setRequestHeader" in h && r.forEach(d, (function(e, t) {
							void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e)
						})), r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) try {
						h.responseType = e.responseType
					} catch (t) {
						if ("json" !== e.responseType) throw t
					}
					"function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
						h && (h.abort(), n(e), h = null)
					})), f || (f = null), h.send(f)
				}))
			}
		},
		b53d: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tzm-latn", {
					months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
					monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
					weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
					weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
					weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[asdkh g] LT",
						nextDay: "[aska g] LT",
						nextWeek: "dddd [g] LT",
						lastDay: "[assant g] LT",
						lastWeek: "dddd [g] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dadkh s yan %s",
						past: "yan %s",
						s: "imik",
						ss: "%d imik",
						m: "minuá¸",
						mm: "%d minuá¸",
						h: "saÉ›a",
						hh: "%d tassaÉ›in",
						d: "ass",
						dd: "%d ossan",
						M: "ayowr",
						MM: "%d iyyirn",
						y: "asgas",
						yy: "%d isgasn"
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("c1df"))
		},
		b540: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("jv", {
					months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
					weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
					weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
					weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /enjing|siyang|sonten|ndalu/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
					},
					calendar: {
						sameDay: "[Dinten puniko pukul] LT",
						nextDay: "[Mbenjang pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kala wingi pukul] LT",
						lastWeek: "dddd [kepengker pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "wonten ing %s",
						past: "%s ingkang kepengker",
						s: "sawetawis detik",
						ss: "%d detik",
						m: "setunggal menit",
						mm: "%d menit",
						h: "setunggal jam",
						hh: "%d jam",
						d: "sedinten",
						dd: "%d dinten",
						M: "sewulan",
						MM: "%d wulan",
						y: "setaun",
						yy: "%d taun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		b575: function(e, t, n) {
			var r, i, a, o, s, u, c, l, f = n("da84"),
				d = n("06cf").f,
				h = n("2cf4").set,
				p = n("1cdc"),
				_ = n("a4b4"),
				m = n("605d"),
				b = f.MutationObserver || f.WebKitMutationObserver,
				g = f.document,
				v = f.process,
				y = f.Promise,
				A = d(f, "queueMicrotask"),
				S = A && A.value;
			S || (r = function() {
				var e, t;
				for (m && (e = v.domain) && e.exit(); i;) {
					t = i.fn, i = i.next;
					try {
						t()
					} catch (e) {
						throw i ? o() : a = void 0, e
					}
				}
				a = void 0, e && e.enter()
			}, p || m || _ || !b || !g ? y && y.resolve ? (c = y.resolve(void 0), l = c.then, o = function() {
				l.call(c, r)
			}) : o = m ? function() {
				v.nextTick(r)
			} : function() {
				h.call(f, r)
			} : (s = !0, u = g.createTextNode(""), new b(r).observe(u, {
				characterData: !0
			}), o = function() {
				u.data = s = !s
			})), e.exports = S || function(e) {
				var t = {
					fn: e,
					next: void 0
				};
				a && (a.next = t), i || (i = t, o()), a = t
			}
		},
		b57d: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ErrorUtils = void 0,
				function(e) {
					e.defaultErrorMessages = {
						1e3: "Error is unknown",
						1001: "The player API is not available after a call to PlayerAPI.destroy.",
						1100: "General setup error",
						1101: "There was an error when inserting the HTML video element",
						1102: "No configuration was provided",
						1103: "The license is not valid",
						1104: "The the domain-locked player is not authorized to playback on this domain",
						1105: "The domain is not allowlisted",
						1106: "The license server URL is invalid",
						1107: "The impression server URL is invalid",
						1108: "Could not initialize a rendering engine",
						1109: "The used flash version does not support playback",
						1110: "Native Flash is not authorized by a valid Adobe token",
						1111: "Flash doesn't have sufficient resources",
						1112: "Flash container API not available",
						1113: 'Protocol not supported. This site has been loaded using "file" protocol, but unfortunately this is not supported. Please load the page using a web server (using http or https)',
						1200: "General source error",
						1201: "No valid source was provided",
						1202: "The downloaded manifest is invalid",
						1203: "There was no technology detected to playback the provided source",
						1204: "The stream type is not supported",
						1205: "The forced technology is not supported",
						1206: "No stream found for supported technologies.",
						1207: "The downloaded segment is empty",
						1208: "The manifest could not be loaded",
						1209: "Progressive stream type not supported or the stream has an error",
						1210: "HLS stream has an error",
						1211: "The encryption method is not supported",
						1300: "General playback error",
						1301: "Video decoder or demuxer had an error with the content",
						1302: "General error if Flash renderer has an error",
						1303: "Flash doesn't have sufficient resources",
						1304: "The transmuxer could not be initialized",
						1400: "Network error while downloading",
						1401: "The manifest download timed out",
						1402: "The segment download timed out",
						1403: "The progressive stream download timed out",
						1404: "The Certificate could not be loaded",
						2e3: "General DRM error",
						2001: "Required DRM configuration is missing",
						2002: "The licensing server URL is missing",
						2003: "License request failed",
						2004: "Key or KeyId is missing",
						2005: "Key size is not supported",
						2006: "Unable to instantiate a key system supporting the required combinations",
						2007: "Unable to create or initialize key session",
						2008: "The MediaKey object could not be created/initialized",
						2009: "Key error",
						2010: "The key system is not supported",
						2011: "The certificate is not valid",
						2012: "Invalid header key/value pair for PlayReady license request",
						2013: "Content cannot be played back because the output is restricted on this machine",
						2014: "DRM error for the Flash renderer",
						2100: "General VR error",
						2101: "Player technology not compatible with VR playback",
						3e3: "General module error",
						3001: "The definition of the module is invalid (e.g. incomplete).",
						3002: "The module definition specifies dependencies but the module is not provided via a function for deferred loading.",
						3003: "A module cannot be loaded because it has not been added to the player core.",
						3004: "A module cannot be loaded because one or more dependencies are missing.",
						3100: "An Advertising module error has occurred. Refer to the attached AdvertisingError."
					}, e.defaultMobileV3ErrorMessageTranslator = function(e) {
						return e.message
					}, e.defaultWebErrorMessageTranslator = function(t) {
						var n = e.defaultErrorMessages[t.code];
						return n ? n + "\n(" + t.name + ")" : t.code + " " + t.name
					}
				}(t.ErrorUtils || (t.ErrorUtils = {}))
		},
		b5b7: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
					n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
					r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
					i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
				e.defineLocale("es-mx", {
					months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
					monthsShort: function(e, r) {
						return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: i,
					monthsShortRegex: i,
					monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
					monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
					monthsParse: r,
					longMonthsParse: r,
					shortMonthsParse: r,
					weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
					weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
					weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY H:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
					},
					calendar: {
						sameDay: function() {
							return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextDay: function() {
							return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextWeek: function() {
							return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastDay: function() {
							return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastWeek: function() {
							return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "en %s",
						past: "hace %s",
						s: "unos segundos",
						ss: "%d segundos",
						m: "un minuto",
						mm: "%d minutos",
						h: "una hora",
						hh: "%d horas",
						d: "un dÃ­a",
						dd: "%d dÃ­as",
						w: "una semana",
						ww: "%d semanas",
						M: "un mes",
						MM: "%d meses",
						y: "un aÃ±o",
						yy: "%d aÃ±os"
					},
					dayOfMonthOrdinalParse: /\d{1,2}Âº/,
					ordinal: "%dÂº",
					week: {
						dow: 0,
						doy: 4
					},
					invalidDate: "Fecha invÃ¡lida"
				})
			}(n("c1df"))
		},
		b622: function(e, t, n) {
			var r = n("da84"),
				i = n("5692"),
				a = n("5135"),
				o = n("90e3"),
				s = n("4930"),
				u = n("fdbf"),
				c = i("wks"),
				l = r.Symbol,
				f = u ? l : l && l.withoutSetter || o;
			e.exports = function(e) {
				return a(c, e) && (s || "string" == typeof c[e]) || (s && a(l, e) ? c[e] = l[e] : c[e] = f("Symbol." + e)), c[e]
			}
		},
		b639: function(e, t, n) {
			"use strict";
			(function(e) {
				var r = n("1fb5"),
					i = n("9152"),
					a = n("e3db");

				function o() {
					return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
				}

				function s(e, t) {
					if (o() < t) throw new RangeError("Invalid typed array length");
					return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
				}

				function u(e, t, n) {
					if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
					if ("number" == typeof e) {
						if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
						return f(this, e)
					}
					return c(this, e, t, n)
				}

				function c(e, t, n, r) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
						if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = d(e, t), e
					}(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
						if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
						var r = 0 | p(t, n),
							i = (e = s(e, r)).write(t, n);
						return i !== r && (e = e.slice(0, i)), e
					}(e, t, n) : function(e, t) {
						if (u.isBuffer(t)) {
							var n = 0 | h(t.length);
							return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
								return e != e
							}(t.length) ? s(e, 0) : d(e, t);
							if ("Buffer" === t.type && a(t.data)) return d(e, t.data)
						}
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}

				function l(e) {
					if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
					if (e < 0) throw new RangeError('"size" argument must not be negative')
				}

				function f(e, t) {
					if (l(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !u.TYPED_ARRAY_SUPPORT)
						for (var n = 0; n < t; ++n) e[n] = 0;
					return e
				}

				function d(e, t) {
					var n = t.length < 0 ? 0 : 0 | h(t.length);
					e = s(e, n);
					for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
					return e
				}

				function h(e) {
					if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
					return 0 | e
				}

				function p(e, t) {
					if (u.isBuffer(e)) return e.length;
					if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
					"string" != typeof e && (e = "" + e);
					var n = e.length;
					if (0 === n) return 0;
					for (var r = !1;;) switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
						case void 0:
							return U(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return j(e).length;
						default:
							if (r) return U(e).length;
							t = ("" + t).toLowerCase(), r = !0
					}
				}

				function _(e, t, n) {
					var r = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return O(this, t, n);
						case "utf8":
						case "utf-8":
							return C(this, t, n);
						case "ascii":
							return $(this, t, n);
						case "latin1":
						case "binary":
							return k(this, t, n);
						case "base64":
							return T(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return x(this, t, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), r = !0
					}
				}

				function m(e, t, n) {
					var r = e[t];
					e[t] = e[n], e[n] = r
				}

				function b(e, t, n, r, i) {
					if (0 === e.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if (i) return -1;
						n = e.length - 1
					} else if (n < 0) {
						if (!i) return -1;
						n = 0
					}
					if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, i);
					if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function g(e, t, n, r, i) {
					var a, o = 1,
						s = e.length,
						u = t.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (e.length < 2 || t.length < 2) return -1;
						o = 2, s /= 2, u /= 2, n /= 2
					}

					function c(e, t) {
						return 1 === o ? e[t] : e.readUInt16BE(t * o)
					}
					if (i) {
						var l = -1;
						for (a = n; a < s; a++)
							if (c(e, a) === c(t, -1 === l ? 0 : a - l)) {
								if (-1 === l && (l = a), a - l + 1 === u) return l * o
							} else -1 !== l && (a -= a - l), l = -1
					} else
						for (n + u > s && (n = s - u), a = n; a >= 0; a--) {
							for (var f = !0, d = 0; d < u; d++)
								if (c(e, a + d) !== c(t, d)) {
									f = !1;
									break
								} if (f) return a
						}
					return -1
				}

				function v(e, t, n, r) {
					n = Number(n) || 0;
					var i = e.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					var a = t.length;
					if (a % 2 != 0) throw new TypeError("Invalid hex string");
					r > a / 2 && (r = a / 2);
					for (var o = 0; o < r; ++o) {
						var s = parseInt(t.substr(2 * o, 2), 16);
						if (isNaN(s)) return o;
						e[n + o] = s
					}
					return o
				}

				function y(e, t, n, r) {
					return H(U(t, e.length - n), e, n, r)
				}

				function A(e, t, n, r) {
					return H(function(e) {
						for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
						return t
					}(t), e, n, r)
				}

				function S(e, t, n, r) {
					return A(e, t, n, r)
				}

				function w(e, t, n, r) {
					return H(j(t), e, n, r)
				}

				function E(e, t, n, r) {
					return H(function(e, t) {
						for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
						return a
					}(t, e.length - n), e, n, r)
				}

				function T(e, t, n) {
					return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
				}

				function C(e, t, n) {
					n = Math.min(e.length, n);
					for (var r = [], i = t; i < n;) {
						var a, o, s, u, c = e[i],
							l = null,
							f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
						if (i + f <= n) switch (f) {
							case 1:
								c < 128 && (l = c);
								break;
							case 2:
								128 == (192 & (a = e[i + 1])) && ((u = (31 & c) << 6 | 63 & a) > 127 && (l = u));
								break;
							case 3:
								a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && ((u = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u));
								break;
							case 4:
								a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && ((u = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u))
						}
						null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
					}
					return function(e) {
						var t = e.length;
						if (t <= 4096) return String.fromCharCode.apply(String, e);
						var n = "",
							r = 0;
						for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
						return n
					}(r)
				}
				t.Buffer = u, t.SlowBuffer = function(e) {
					return +e != e && (e = 0), u.alloc(+e)
				}, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
					try {
						var e = new Uint8Array(1);
						return e.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function() {
								return 42
							}
						}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
					} catch (e) {
						return !1
					}
				}(), t.kMaxLength = o(), u.poolSize = 8192, u._augment = function(e) {
					return e.__proto__ = u.prototype, e
				}, u.from = function(e, t, n) {
					return c(null, e, t, n)
				}, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
					value: null,
					configurable: !0
				})), u.alloc = function(e, t, n) {
					return function(e, t, n, r) {
						return l(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
					}(null, e, t, n)
				}, u.allocUnsafe = function(e) {
					return f(null, e)
				}, u.allocUnsafeSlow = function(e) {
					return f(null, e)
				}, u.isBuffer = function(e) {
					return !(null == e || !e._isBuffer)
				}, u.compare = function(e, t) {
					if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
					if (e === t) return 0;
					for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
						if (e[i] !== t[i]) {
							n = e[i], r = t[i];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, u.isEncoding = function(e) {
					switch (String(e).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, u.concat = function(e, t) {
					if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === e.length) return u.alloc(0);
					var n;
					if (void 0 === t)
						for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
					var r = u.allocUnsafe(t),
						i = 0;
					for (n = 0; n < e.length; ++n) {
						var o = e[n];
						if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
						o.copy(r, i), i += o.length
					}
					return r
				}, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
					var e = this.length;
					if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var t = 0; t < e; t += 2) m(this, t, t + 1);
					return this
				}, u.prototype.swap32 = function() {
					var e = this.length;
					if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
					return this
				}, u.prototype.swap64 = function() {
					var e = this.length;
					if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
					return this
				}, u.prototype.toString = function() {
					var e = 0 | this.length;
					return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : _.apply(this, arguments)
				}, u.prototype.equals = function(e) {
					if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === u.compare(this, e)
				}, u.prototype.inspect = function() {
					var e = "",
						n = t.INSPECT_MAX_BYTES;
					return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
				}, u.prototype.compare = function(e, t, n, r, i) {
					if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if (r >= i && t >= n) return 0;
					if (r >= i) return -1;
					if (t >= n) return 1;
					if (this === e) return 0;
					for (var a = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0), s = Math.min(a, o), c = this.slice(r, i), l = e.slice(t, n), f = 0; f < s; ++f)
						if (c[f] !== l[f]) {
							a = c[f], o = l[f];
							break
						} return a < o ? -1 : o < a ? 1 : 0
				}, u.prototype.includes = function(e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				}, u.prototype.indexOf = function(e, t, n) {
					return b(this, e, t, n, !0)
				}, u.prototype.lastIndexOf = function(e, t, n) {
					return b(this, e, t, n, !1)
				}, u.prototype.write = function(e, t, n, r) {
					if (void 0 === t) r = "utf8", n = this.length, t = 0;
					else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
					else {
						if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var i = this.length - t;
					if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var a = !1;;) switch (r) {
						case "hex":
							return v(this, e, t, n);
						case "utf8":
						case "utf-8":
							return y(this, e, t, n);
						case "ascii":
							return A(this, e, t, n);
						case "latin1":
						case "binary":
							return S(this, e, t, n);
						case "base64":
							return w(this, e, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return E(this, e, t, n);
						default:
							if (a) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), a = !0
					}
				}, u.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};

				function $(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
					return r
				}

				function k(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
					return r
				}

				function O(e, t, n) {
					var r = e.length;
					(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
					for (var i = "", a = t; a < n; ++a) i += F(e[a]);
					return i
				}

				function x(e, t, n) {
					for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
					return i
				}

				function P(e, t, n) {
					if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
					if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function M(e, t, n, r, i, a) {
					if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
					if (n + r > e.length) throw new RangeError("Index out of range")
				}

				function I(e, t, n, r) {
					t < 0 && (t = 65535 + t + 1);
					for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
				}

				function L(e, t, n, r) {
					t < 0 && (t = 4294967295 + t + 1);
					for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
				}

				function D(e, t, n, r, i, a) {
					if (n + r > e.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function B(e, t, n, r, a) {
					return a || D(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
				}

				function N(e, t, n, r, a) {
					return a || D(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
				}
				u.prototype.slice = function(e, t) {
					var n, r = this.length;
					if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
					else {
						var i = t - e;
						n = new u(i, void 0);
						for (var a = 0; a < i; ++a) n[a] = this[a + e]
					}
					return n
				}, u.prototype.readUIntLE = function(e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
					return r
				}, u.prototype.readUIntBE = function(e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
					return r
				}, u.prototype.readUInt8 = function(e, t) {
					return t || P(e, 1, this.length), this[e]
				}, u.prototype.readUInt16LE = function(e, t) {
					return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
				}, u.prototype.readUInt16BE = function(e, t) {
					return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
				}, u.prototype.readUInt32LE = function(e, t) {
					return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				}, u.prototype.readUInt32BE = function(e, t) {
					return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				}, u.prototype.readIntLE = function(e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
				}, u.prototype.readIntBE = function(e, t, n) {
					e |= 0, t |= 0, n || P(e, t, this.length);
					for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
					return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
				}, u.prototype.readInt8 = function(e, t) {
					return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				}, u.prototype.readInt16LE = function(e, t) {
					t || P(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, u.prototype.readInt16BE = function(e, t) {
					t || P(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, u.prototype.readInt32LE = function(e, t) {
					return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				}, u.prototype.readInt32BE = function(e, t) {
					return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				}, u.prototype.readFloatLE = function(e, t) {
					return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4)
				}, u.prototype.readFloatBE = function(e, t) {
					return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4)
				}, u.prototype.readDoubleLE = function(e, t) {
					return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8)
				}, u.prototype.readDoubleBE = function(e, t) {
					return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8)
				}, u.prototype.writeUIntLE = function(e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = 1,
						a = 0;
					for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
					return t + n
				}, u.prototype.writeUIntBE = function(e, t, n, r) {
					(e = +e, t |= 0, n |= 0, r) || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = n - 1,
						a = 1;
					for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
					return t + n
				}, u.prototype.writeUInt8 = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
				}, u.prototype.writeUInt16LE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
				}, u.prototype.writeUInt16BE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
				}, u.prototype.writeUInt32LE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4
				}, u.prototype.writeUInt32BE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
				}, u.prototype.writeIntLE = function(e, t, n, r) {
					if (e = +e, t |= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						M(this, e, t, n, i - 1, -i)
					}
					var a = 0,
						o = 1,
						s = 0;
					for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
					return t + n
				}, u.prototype.writeIntBE = function(e, t, n, r) {
					if (e = +e, t |= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						M(this, e, t, n, i - 1, -i)
					}
					var a = n - 1,
						o = 1,
						s = 0;
					for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
					return t + n
				}, u.prototype.writeInt8 = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
				}, u.prototype.writeInt16LE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
				}, u.prototype.writeInt16BE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
				}, u.prototype.writeInt32LE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4
				}, u.prototype.writeInt32BE = function(e, t, n) {
					return e = +e, t |= 0, n || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
				}, u.prototype.writeFloatLE = function(e, t, n) {
					return B(this, e, t, !0, n)
				}, u.prototype.writeFloatBE = function(e, t, n) {
					return B(this, e, t, !1, n)
				}, u.prototype.writeDoubleLE = function(e, t, n) {
					return N(this, e, t, !0, n)
				}, u.prototype.writeDoubleBE = function(e, t, n) {
					return N(this, e, t, !1, n)
				}, u.prototype.copy = function(e, t, n, r) {
					if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === e.length || 0 === this.length) return 0;
					if (t < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
					var i, a = r - n;
					if (this === e && n < t && t < r)
						for (i = a - 1; i >= 0; --i) e[i + t] = this[i + n];
					else if (a < 1e3 || !u.TYPED_ARRAY_SUPPORT)
						for (i = 0; i < a; ++i) e[i + t] = this[i + n];
					else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
					return a
				}, u.prototype.fill = function(e, t, n, r) {
					if ("string" == typeof e) {
						if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
							var i = e.charCodeAt(0);
							i < 256 && (e = i)
						}
						if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
					} else "number" == typeof e && (e &= 255);
					if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
					if (n <= t) return this;
					var a;
					if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for (a = t; a < n; ++a) this[a] = e;
					else {
						var o = u.isBuffer(e) ? e : U(new u(e, r).toString()),
							s = o.length;
						for (a = 0; a < n - t; ++a) this[a + t] = o[a % s]
					}
					return this
				};
				var R = /[^+\/0-9A-Za-z-_]/g;


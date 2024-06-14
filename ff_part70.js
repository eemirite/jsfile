										this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), g = e.item
									},
									onDragAdd: function(e) {
										var t = e.item._underlying_vm_;
										if (void 0 !== t) {
											Object(l.d)(e.item);
											var n = this.getVmIndex(e.newIndex);
											this.spliceList(n, 0, t), this.computeIndexes();
											var r = {
												element: t,
												newIndex: n
											};
											this.emitChanges({
												added: r
											})
										}
									},
									onDragRemove: function(e) {
										if (Object(l.c)(this.rootContainer, e.item, e.oldIndex), "clone" !== e.pullMode) {
											var t = this.context.index;
											this.spliceList(t, 1);
											var n = {
												element: this.context.element,
												oldIndex: t
											};
											this.resetTransitionData(t), this.emitChanges({
												removed: n
											})
										} else Object(l.d)(e.clone)
									},
									onDragUpdate: function(e) {
										Object(l.d)(e.item), Object(l.c)(e.from, e.item, e.oldIndex);
										var t = this.context.index,
											n = this.getVmIndex(e.newIndex);
										this.updatePosition(t, n);
										var r = {
											element: this.context.element,
											oldIndex: t,
											newIndex: n
										};
										this.emitChanges({
											moved: r
										})
									},
									updateProperty: function(e, t) {
										e.hasOwnProperty(t) && (e[t] += this.headerOffset)
									},
									computeFutureIndex: function(e, t) {
										if (!e.element) return 0;
										var n = s(t.to.children).filter((function(e) {
												return "none" !== e.style.display
											})),
											r = n.indexOf(t.related),
											i = e.component.getVmIndex(r);
										return -1 === n.indexOf(g) && t.willInsertAfter ? i + 1 : i
									},
									onDragMove: function(e, t) {
										var n = this.move;
										if (!n || !this.realList) return !0;
										var r = this.getRelatedContextFromMoveEvent(e),
											i = this.context,
											a = this.computeFutureIndex(r, e);
										return Object.assign(i, {
											futureIndex: a
										}), n(Object.assign({}, e, {
											relatedContext: r,
											draggedContext: i
										}), t)
									},
									onDragEnd: function() {
										this.computeIndexes(), g = null
									}
								}
							};
						"undefined" != typeof window && "Vue" in window && window.Vue.component("draggable", v);
						var y = v;
						t.default = y
					}
				}).default
			}(n("aa47"))
		},
		b7e9: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-sg", {
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
						LLLL: "dddd, D MMMM YYYY HH:mm"
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
		b835: function(e, t) {
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
		b84c: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("nn", {
					months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
					monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
					monthsParseExact: !0,
					weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
					weekdaysShort: "su._mÃ¥._ty._on._to._fr._lau.".split("_"),
					weekdaysMin: "su_mÃ¥_ty_on_to_fr_la".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY [kl.] H:mm",
						LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
					},
					calendar: {
						sameDay: "[I dag klokka] LT",
						nextDay: "[I morgon klokka] LT",
						nextWeek: "dddd [klokka] LT",
						lastDay: "[I gÃ¥r klokka] LT",
						lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "%s sidan",
						s: "nokre sekund",
						ss: "%d sekund",
						m: "eit minutt",
						mm: "%d minutt",
						h: "ein time",
						hh: "%d timar",
						d: "ein dag",
						dd: "%d dagar",
						w: "ei veke",
						ww: "%d veker",
						M: "ein mÃ¥nad",
						MM: "%d mÃ¥nader",
						y: "eit Ã¥r",
						yy: "%d Ã¥r"
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
		b85c: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0");
			var r = n("06c5");

			function i(e, t) {
				var n;
				if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
					if (Array.isArray(e) || (n = Object(r.a)(e)) || t && e && "number" == typeof e.length) {
						n && (e = n);
						var i = 0,
							a = function() {};
						return {
							s: a,
							n: function() {
								return i >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[i++]
								}
							},
							e: function(e) {
								throw e
							},
							f: a
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, s = !0,
					u = !1;
				return {
					s: function() {
						n = e[Symbol.iterator]()
					},
					n: function() {
						var e = n.next();
						return s = e.done, e
					},
					e: function(e) {
						u = !0, o = e
					},
					f: function() {
						try {
							s || null == n.return || n.return()
						} finally {
							if (u) throw o
						}
					}
				}
			}
		},
		b8bf: function(e, t, n) {
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
			}), t.Label = void 0;
			var i = n("587c"),
				a = n("571d"),
				o = n("09e6"),
				s = n("e1ee"),
				u = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.labelEvents = {
							onClick: new o.EventDispatcher,
							onTextChanged: new o.EventDispatcher
						}, n.config = n.mergeConfig(t, {
							cssClass: "ui-label"
						}, n.config), n.text = n.config.text, n
					}
					return r(t, e), t.prototype.toDomElement = function() {
						var e = this,
							t = null != this.config.for ? "label" : "span",
							n = new a.DOM(t, {
								id: this.config.id,
								for: this.config.for,
								class: this.getCssClasses()
							}).html(s.i18n.performLocalization(this.text));
						return n.on("click", (function() {
							e.onClickEvent()
						})), n
					}, t.prototype.setText = function(e) {
						if (e !== this.text) {
							this.text = e;
							var t = s.i18n.performLocalization(e);
							this.getDomElement().html(t), this.onTextChangedEvent(t)
						}
					}, t.prototype.getText = function() {
						return s.i18n.performLocalization(this.text)
					}, t.prototype.clearText = function() {
						this.getDomElement().html(""), this.onTextChangedEvent(null)
					}, t.prototype.isEmpty = function() {
						return !this.text
					}, t.prototype.onClickEvent = function() {
						this.labelEvents.onClick.dispatch(this)
					}, t.prototype.onTextChangedEvent = function(e) {
						this.labelEvents.onTextChanged.dispatch(this, e)
					}, Object.defineProperty(t.prototype, "onClick", {
						get: function() {
							return this.labelEvents.onClick.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "onTextChanged", {
						get: function() {
							return this.labelEvents.onTextChanged.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(i.Component);
			t.Label = u
		},
		b97c: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
					m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
					mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
					h: "stundas_stundÄm_stunda_stundas".split("_"),
					hh: "stundas_stundÄm_stunda_stundas".split("_"),
					d: "dienas_dienÄm_diena_dienas".split("_"),
					dd: "dienas_dienÄm_diena_dienas".split("_"),
					M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
					MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
					y: "gada_gadiem_gads_gadi".split("_"),
					yy: "gada_gadiem_gads_gadi".split("_")
				};

				function n(e, t, n) {
					return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
				}

				function r(e, r, i) {
					return e + " " + n(t[i], e, r)
				}

				function i(e, r, i) {
					return n(t[i], e, r)
				}
				e.defineLocale("lv", {
					months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
					monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
					weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
					weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
					weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY.",
						LL: "YYYY. [gada] D. MMMM",
						LLL: "YYYY. [gada] D. MMMM, HH:mm",
						LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
					},
					calendar: {
						sameDay: "[Å odien pulksten] LT",
						nextDay: "[RÄ«t pulksten] LT",
						nextWeek: "dddd [pulksten] LT",
						lastDay: "[Vakar pulksten] LT",
						lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "pÄ“c %s",
						past: "pirms %s",
						s: function(e, t) {
							return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
						},
						ss: r,
						m: i,
						mm: r,
						h: i,
						hh: r,
						d: i,
						dd: r,
						M: i,
						MM: r,
						y: i,
						yy: r
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
		baca: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.DemoFactory = void 0;
			var r = n("0558"),
				i = n("fb99"),
				a = n("8b9a"),
				o = n("b10a"),
				s = n("18b1"),
				u = n("37aa"),
				c = n("ac0e"),
				l = n("98d0"),
				f = n("61c8"),
				d = n("af03"),
				h = n("3d5f"),
				p = n("f1b5"),
				_ = n("31bb"),
				m = n("b491"),
				b = n("7fa6"),
				g = n("f00a"),
				v = n("1040"),
				y = n("d8f4"),
				A = n("32ba"),
				S = n("a9a2"),
				w = n("ac6c"),
				E = n("fdec"),
				T = n("f23d"),
				C = n("6811"),
				$ = n("fb10"),
				k = n("66d4"),
				O = n("6ec2"),
				x = n("1031"),
				P = n("f7d3"),
				M = n("4f95"),
				I = n("a5ab"),
				L = n("60b3"),
				D = n("d82d"),
				B = n("d659");
			! function(e) {
				function t() {
					var e = new g.SubtitleOverlay,
						t = new v.SettingsPanel({
							components: [new D.SettingsPanelPage({
								components: [new L.SettingsPanelItem("Video Quality", new k.VideoQualitySelectBox), new L.SettingsPanelItem("Speed", new h.PlaybackSpeedSelectBox), new L.SettingsPanelItem("Audio Quality", new p.AudioQualitySelectBox)]
							})],
							hidden: !0
						}),
						n = new M.SubtitleListBox,
						O = new v.SettingsPanel({
							components: [new D.SettingsPanelPage({
								components: [new L.SettingsPanelItem(null, n)]
							})],
							hidden: !0
						}),
						B = new I.AudioTrackListBox,
						N = new v.SettingsPanel({
							components: [new D.SettingsPanelPage({
								components: [new L.SettingsPanelItem(null, B)]
							})],
							hidden: !0
						}),
						R = new c.ControlBar({
							components: [N, O, t, new E.Container({
								components: [new o.PlaybackTimeLabel({
									timeLabelMode: o.PlaybackTimeLabelMode.CurrentTime,
									hideInLivePlayback: !0
								}), new $.SeekBar({
									label: new y.SeekBarLabel
								}), new o.PlaybackTimeLabel({
									timeLabelMode: o.PlaybackTimeLabelMode.TotalTime,
									cssClasses: ["text-right"]
								})],
								cssClasses: ["controlbar-top"]
							}), new E.Container({
								components: [new C.PlaybackToggleButton, new T.VolumeToggleButton, new a.VolumeSlider, new w.Spacer, new S.PictureInPictureToggleButton, new s.AirPlayToggleButton, new l.CastToggleButton, new r.VRToggleButton, new i.SettingsToggleButton({
									settingsPanel: N,
									cssClass: "ui-audiotracksettingstogglebutton"
								}), new i.SettingsToggleButton({
									settingsPanel: O,
									cssClass: "ui-subtitlesettingstogglebutton"
								}), new i.SettingsToggleButton({
									settingsPanel: t
								}), new f.FullscreenToggleButton],
								cssClasses: ["controlbar-bottom"]
							})]
						});
					return new m.UIContainer({
						components: [e, new P.BufferingOverlay, new A.PlaybackToggleOverlay, new _.CastStatusOverlay, R, new x.TitleBar, new d.RecommendationOverlay, new b.Watermark, new u.ErrorMessageOverlay]
					})
				}
				e.buildDemoWithSeparateAudioSubtitlesButtons = function(e, n) {
					return void 0 === n && (n = {}), new O.UIManager(e, [{
						ui: B.UIFactory.modernSmallScreenAdsUI(),
						condition: function(e) {
							return e.isMobile && e.documentWidth < 600 && e.isAd && e.adRequiresUi
						}
					}, {
						ui: B.UIFactory.modernAdsUI(),
						condition: function(e) {
							return e.isAd && e.adRequiresUi
						}
					}, {
						ui: B.UIFactory.modernSmallScreenUI(),
						condition: function(e) {
							return e.isMobile && e.documentWidth < 600
						}
					}, {
						ui: t()
					}], n)
				}
			}(t.DemoFactory || (t.DemoFactory = {}))
		},
		bad2: function(e, t, n) {
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
				}, t.humanize = n("5a21"), t.destroy = function() {
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
		bb2f: function(e, t, n) {
			var r = n("d039");
			e.exports = !r((function() {
				return Object.isExtensible(Object.preventExtensions({}))
			}))
		},
		bb71: function(e, t, n) {
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
				e.defineLocale("de-ch", {
					months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
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
		bc3a: function(e, t, n) {
			e.exports = n("cee4")
		},
		bc5b: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("f404");

			function i(e, t) {
				try {
					for (var n = e, r = [], i = 0, o = 0, s = " > ".length, u = void 0; n && i++ < 5 && !("html" === (u = a(n, t)) || i > 1 && o + r.length * s + u.length >= 80);) r.push(u), o += u.length, n = n.parentNode;
					return r.reverse().join(" > ")
				} catch (e) {
					return "<unknown>"
				}
			}

			function a(e, t) {
				var n, i, a, o, s, u, c, l = e,
					f = [];
				if (!l || !l.tagName) return "";
				f.push(l.tagName.toLowerCase());
				var d = (null === (n = t) || void 0 === n ? void 0 : n.length) ? t.filter((function(e) {
					return l.getAttribute(e)
				})).map((function(e) {
					return [e, l.getAttribute(e)]
				})) : null;
				if (null === (i = d) || void 0 === i ? void 0 : i.length) d.forEach((function(e) {
					f.push("[" + e[0] + '="' + e[1] + '"]')
				}));
				else if (l.id && f.push("#" + l.id), (a = l.className) && Object(r.k)(a))
					for (o = a.split(/\s+/), c = 0; c < o.length; c++) f.push("." + o[c]);
				var h = ["type", "name", "title", "alt"];
				for (c = 0; c < h.length; c++) s = h[c], (u = l.getAttribute(s)) && f.push("[" + s + '="' + u + '"]');
				return f.join("")
			}
		},
		be14: function(e) {
			e.exports = JSON.parse('{"settings.video.quality":"VideoqualitÃ¤t","settings.audio.quality":"AudioqualitÃ¤t","settings.audio.track":"Audiospur","speed":"Geschwindigkeit","play":"Abspielen","pause":"Pause","playPause":"Abspielen/Pause","open":"Ã¶ffnen","close":"SchlieÃŸen","settings.audio.mute":"Stummschaltung","settings.audio.volume":"LautstÃ¤rke","pictureInPicture":"Bild im Bild","appleAirplay":"Apple AirPlay","googleCast":"Google Cast","vr":"VR","settings":"Einstellungen","fullscreen":"Vollbild","off":"aus","settings.subtitles":"Untertitel","settings.subtitles.font.size":"GrÃ¶ÃŸe","settings.subtitles.font.family":"Schriftart","settings.subtitles.font.color":"Farbe","settings.subtitles.font.opacity":"Deckkraft","settings.subtitles.characterEdge":"RÃ¤nder","settings.subtitles.background.color":"Hintergrundfarbe","settings.subtitles.background.opacity":"Hintergrunddeckkraft","settings.subtitles.window.color":"Hintergrundfarbe","settings.subtitles.window.opacity":"Hintergrunddeckkraft","settings.time.hours":"Stunden","settings.time.minutes":"Minuten","settings.time.seconds":"Sekunden","back":"ZurÃ¼ck","reset":"ZurÃ¼cksetzen","replay":"Wiederholen","ads.remainingTime":"Diese Anzeige endet in {remainingTime} Sekunden","default":"standard","colors.white":"weiÃŸ","colors.black":"schwarz","colors.red":"rot","colors.green":"grÃ¼n","colors.blue":"blau","colors.yellow":"gelb","subtitle.example":"Beispiel Untertitel","subtitle.select":"Untertitel auswÃ¤hlen","playingOn":"Spielt auf <strong>{castDeviceName}</strong>","connectingTo":"Verbindung mit <strong>{castDeviceName}</strong> wird hergestellt...","watermarkLink":"Link zum Homepage","controlBar":"Videoplayer Kontrollen","player":"Video player","seekBar":"Video-Timeline","seekBar.value":"Wert","seekBar.timeshift":"Timeshift","seekBar.durationText":"aus"}')
		},
		bedf: function(e, t, n) {
			"use strict";
			var r = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
				return r
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.SubtitleSwitchHandler = void 0;
			var i = n("e1ee"),
				a = function() {
					function e(t, n, a) {
						var o = this;
						this.addSubtitle = function(e) {
							var t = e.subtitle;
							o.listElement.hasItem(t.id) || o.listElement.addItem(t.id, t.label)
						}, this.removeSubtitle = function(e) {
							var t = e.subtitle;
							o.listElement.hasItem(t.id) && o.listElement.removeItem(t.id)
						}, this.selectCurrentSubtitle = function() {
							if (o.player.subtitles) {
								var t = o.player.subtitles.list().filter((function(e) {
									return e.enabled
								})).pop();
								o.listElement.selectItem(t ? t.id : e.SUBTITLES_OFF_KEY)
							}
						}, this.clearSubtitles = function() {
							o.listElement.clearItems()
						}, this.refreshSubtitles = function() {
							if (o.player.subtitles) {
								var t = {
										key: e.SUBTITLES_OFF_KEY,
										label: i.i18n.getLocalizer("off")
									},
									n = o.player.subtitles.list();
								o.listElement.synchronizeItems(r([t], n.map((function(e) {
									return {
										key: e.id,
										label: e.label
									}
								})))), o.selectCurrentSubtitle()
							}
						}, this.player = t, this.listElement = n, this.uimanager = a, this.bindSelectionEvent(), this.bindPlayerEvents(), this.refreshSubtitles()
					}
					return e.prototype.bindSelectionEvent = function() {
						var t = this;
						this.listElement.onItemSelected.subscribe((function(n, r) {
							if (r === e.SUBTITLES_OFF_KEY) {
								var i = t.player.subtitles.list().filter((function(e) {
									return e.enabled
								})).pop();
								i && t.player.subtitles.disable(i.id)
							} else t.player.subtitles.enable(r, !0)
						}))
					}, e.prototype.bindPlayerEvents = function() {
						this.player.on(this.player.exports.PlayerEvent.SubtitleAdded, this.addSubtitle), this.player.on(this.player.exports.PlayerEvent.SubtitleEnabled, this.selectCurrentSubtitle), this.player.on(this.player.exports.PlayerEvent.SubtitleDisabled, this.selectCurrentSubtitle), this.player.on(this.player.exports.PlayerEvent.SubtitleRemoved, this.removeSubtitle), this.player.on(this.player.exports.PlayerEvent.SourceUnloaded, this.clearSubtitles), this.player.on(this.player.exports.PlayerEvent.PeriodSwitched, this.refreshSubtitles), this.uimanager.getConfig().events.onUpdated.subscribe(this.refreshSubtitles)
					}, e.SUBTITLES_OFF_KEY = "null", e
				}();
			t.SubtitleSwitchHandler = a
		},
		bee2: function(e, t, n) {
			"use strict";

			function r(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function i(e, t, n) {
				return t && r(e.prototype, t), n && r(e, n), e
			}
			n.d(t, "a", (function() {
				return i
			}))
		},
		bfa9: function(e, t, n) {
			"use strict";
			var r = n("3c4e"),
				i = n.n(r);
			let a;
			a = class {
				get length() {
					return Object.keys(this).length
				}
				key(e) {
					return Object.keys(this)[e]
				}
				setItem(e, t) {
					this[e] = t.toString()
				}
				getItem(e) {
					return this[e]
				}
				removeItem(e) {
					delete this[e]
				}
				clear() {
					for (let e of Object.keys(this)) delete this[e]
				}
			};
			class o {
				constructor() {
					this._queue = [], this._flushing = !1
				}
				enqueue(e) {
					return this._queue.push(e), this._flushing ? Promise.resolve() : this.flushQueue()
				}
				flushQueue() {
					this._flushing = !0;
					const e = () => {
						const t = this._queue.shift();
						if (t) return t.then(e);
						this._flushing = !1
					};
					return Promise.resolve(e())
				}
			}
			const s = {
				replaceArrays: {
					arrayMerge: (e, t, n) => t
				},
				concatArrays: {
					arrayMerge: (e, t, n) => e.concat(...t)
				}
			};

			function u(e, t, n) {
				return i()(e, t, s[n])
			}
			let c = JSON;
			t.a = class {
				constructor(e) {
					this._mutex = new o, this.subscriber = e => t => e.subscribe(t), void 0 === e && (e = {}), this.key = null != e.key ? e.key : "vuex", this.subscribed = !1, this.supportCircular = e.supportCircular || !1, this.supportCircular && (c = n("5bc5")), this.mergeOption = e.mergeOption || "replaceArrays";
					let t = !0;
					try {
						window.localStorage.getItem("")
					} catch (e) {
						t = !1
					}
					if (e.storage) this.storage = e.storage;
					else if (t) this.storage = window.localStorage;
					else {
						if (!a) throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");
						this.storage = new a
					}
					this.reducer = null != e.reducer ? e.reducer : null == e.modules ? e => e : t => e.modules.reduce((e, n) => u(e, {
						[n]: t[n]
					}, this.mergeOption), {}), this.filter = e.filter || (e => !0), this.strictMode = e.strictMode || !1, this.RESTORE_MUTATION = function(e, t) {
						const n = u(e, t || {}, this.mergeOption);
						for (const t of Object.keys(n)) this._vm.$set(e, t, n[t])
					}, this.asyncStorage = e.asyncStorage || !1, this.asyncStorage ? (this.restoreState = null != e.restoreState ? e.restoreState : (e, t) => t.getItem(e).then(e => "string" == typeof e ? this.supportCircular ? c.parse(e || "{}") : JSON.parse(e || "{}") : e || {}), this.saveState = null != e.saveState ? e.saveState : (e, t, n) => n.setItem(e, this.asyncStorage ? u({}, t || {}, this.mergeOption) : this.supportCircular ? c.stringify(t) : JSON.stringify(t)), this.plugin = e => {
						e.restored = this.restoreState(this.key, this.storage).then(t => {
							this.strictMode ? e.commit("RESTORE_MUTATION", t) : e.replaceState(u(e.state, t || {}, this.mergeOption)), this.subscriber(e)((e, t) => {
								this.filter(e) && this._mutex.enqueue(this.saveState(this.key, this.reducer(t), this.storage))
							}), this.subscribed = !0
						})
					}) : (this.restoreState = null != e.restoreState ? e.restoreState : (e, t) => {
						const n = t.getItem(e);
						return "string" == typeof n ? this.supportCircular ? c.parse(n || "{}") : JSON.parse(n || "{}") : n || {}
					}, this.saveState = null != e.saveState ? e.saveState : (e, t, n) => n.setItem(e, this.supportCircular ? c.stringify(t) : JSON.stringify(t)), this.plugin = e => {
						const t = this.restoreState(this.key, this.storage);
						this.strictMode ? e.commit("RESTORE_MUTATION", t) : e.replaceState(u(e.state, t || {}, this.mergeOption)), this.subscriber(e)((e, t) => {
							this.filter(e) && this.saveState(this.key, this.reducer(t), this.storage)
						}), this.subscribed = !0
					})
				}
			}
		},
		c020: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r = function() {
				function e() {
					this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
				}
				return e.prototype.memoize = function(e) {
					if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
					for (var t = 0; t < this._inner.length; t++) {
						if (this._inner[t] === e) return !0
					}
					return this._inner.push(e), !1
				}, e.prototype.unmemoize = function(e) {
					if (this._hasWeakSet) this._inner.delete(e);
					else
						for (var t = 0; t < this._inner.length; t++)
							if (this._inner[t] === e) {
								this._inner.splice(t, 1);
								break
							}
				}, e
			}()
		},
		c04e: function(e, t, n) {
			var r = n("861d");
			e.exports = function(e, t) {
				if (!r(e)) return e;
				var n, i;
				if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
				if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
				if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
				throw TypeError("Can't convert object to primitive value")
			}
		},
		c0e9: function(e, t, n) {
			e.exports = function() {
				"use strict";
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

				function t(t, n) {
					function r() {
						this.constructor = t
					}
					e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
				}
				var n = function() {
					return (n = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				};

				function r(e, t, n, r) {
					return new(n || (n = Promise))((function(i, a) {
						function o(e) {
							try {
								u(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								u(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function u(e) {
							e.done ? i(e.value) : new n((function(t) {
								t(e.value)
							})).then(o, s)
						}
						u((r = r.apply(e, t || [])).next())
					}))
				}

				function i(e, t) {
					var n, r, i, a, o = {
						label: 0,
						sent: function() {
							if (1 & i[0]) throw i[1];
							return i[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(e) {
						return function(t) {
							return u([e, t])
						}
					}

					function u(a) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; o;) try {
							if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
							switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
								case 0:
								case 1:
									i = a;
									break;
								case 4:
									return o.label++, {
										value: a[1],
										done: !1
									};
								case 5:
									o.label++, r = a[1], a = [0];
									continue;
								case 7:
									a = o.ops.pop(), o.trys.pop();
									continue;
								default:
									if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
										o = 0;
										continue
									}
									if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
										o.label = a[1];
										break
									}
									if (6 === a[0] && o.label < i[1]) {
										o.label = i[1], i = a;
										break
									}
									if (i && o.label < i[2]) {
										o.label = i[2], o.ops.push(a);
										break
									}
									i[2] && o.ops.pop(), o.trys.pop();
									continue
							}
							a = t.call(e, o)
						} catch (e) {
							a = [6, e], r = 0
						} finally {
							n = i = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}
				}
				for (var a = function() {
						function e(e, t, n, r) {
							this.left = e, this.top = t, this.width = n, this.height = r
						}
						return e.prototype.add = function(t, n, r, i) {
							return new e(this.left + t, this.top + n, this.width + r, this.height + i)
						}, e.fromClientRect = function(t) {
							return new e(t.left, t.top, t.width, t.height)
						}, e
					}(), o = function(e) {
						return a.fromClientRect(e.getBoundingClientRect())
					}, s = function(e) {
						for (var t = [], n = 0, r = e.length; n < r;) {
							var i = e.charCodeAt(n++);
							if (i >= 55296 && i <= 56319 && n < r) {
								var a = e.charCodeAt(n++);
								56320 == (64512 & a) ? t.push(((1023 & i) << 10) + (1023 & a) + 65536) : (t.push(i), n--)
							} else t.push(i)
						}
						return t
					}, u = function() {
						for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
						if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
						var n = e.length;
						if (!n) return "";
						for (var r = [], i = -1, a = ""; ++i < n;) {
							var o = e[i];
							o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (i + 1 === n || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0)
						}
						return a
					}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), f = 0; f < c.length; f++) l[c.charCodeAt(f)] = f;
				var d, h = function(e, t, n) {
						return e.slice ? e.slice(t, n) : new Uint16Array(Array.prototype.slice.call(e, t, n))
					},
					p = function() {
						function e(e, t, n, r, i, a) {
							this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = i, this.data = a
						}
						return e.prototype.get = function(e) {
							var t;
							if (e >= 0) {
								if (e < 55296 || e > 56319 && e <= 65535) return t = ((t = this.index[e >> 5]) << 2) + (31 & e), this.data[t];
								if (e <= 65535) return t = ((t = this.index[2048 + (e - 55296 >> 5)]) << 2) + (31 & e), this.data[t];
								if (e < this.highStart) return t = 2080 + (e >> 11), t = this.index[t], t += e >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & e), this.data[t];
								if (e <= 1114111) return this.data[this.highValueIndex]
							}
							return this.errorValue
						}, e
					}(),
					_ = 10,
					m = 13,
					b = 15,
					g = 17,
					v = 18,
					y = 19,
					A = 20,
					S = 21,
					w = 22,
					E = 24,
					T = 25,
					C = 26,
					$ = 27,
					k = 28,
					O = 30,
					x = 32,
					P = 33,
					M = 34,
					I = 35,
					L = 37,
					D = 38,
					B = 39,
					N = 40,
					R = 42,
					F = "Ã—",
					U = function(e) {
						var t = function(e) {
								var t, n, r, i, a, o = .75 * e.length,
									s = e.length,
									u = 0;
								"=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
								var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
									f = Array.isArray(c) ? c : new Uint8Array(c);
								for (t = 0; t < s; t += 4) n = l[e.charCodeAt(t)], r = l[e.charCodeAt(t + 1)], i = l[e.charCodeAt(t + 2)], a = l[e.charCodeAt(t + 3)], f[u++] = n << 2 | r >> 4, f[u++] = (15 & r) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & a;
								return c
							}(e),
							n = Array.isArray(t) ? function(e) {
								for (var t = e.length, n = [], r = 0; r < t; r += 4) n.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
								return n
							}(t) : new Uint32Array(t),
							r = Array.isArray(t) ? function(e) {
								for (var t = e.length, n = [], r = 0; r < t; r += 2) n.push(e[r + 1] << 8 | e[r]);
								return n
							}(t) : new Uint16Array(t),
							i = h(r, 12, n[4] / 2),
							a = 2 === n[5] ? h(r, (24 + n[4]) / 2) : function(e, t, n) {
								return e.slice ? e.slice(t, n) : new Uint32Array(Array.prototype.slice.call(e, t, n))
							}(n, Math.ceil((24 + n[4]) / 4));
						return new p(n[0], n[1], n[2], n[3], i, a)
					}("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),
					j = [O, 36],
					H = [1, 2, 3, 5],
					Y = [_, 8],
					V = [$, C],
					z = H.concat(Y),
					Q = [D, B, N, M, I],
					G = [b, m],
					q = function(e, t, n, r) {
						var i = r[n];
						if (Array.isArray(e) ? -1 !== e.indexOf(i) : e === i)
							for (var a = n; a <= r.length;) {
								var o = r[++a];
								if (o === t) return !0;
								if (o !== _) break
							}
						if (i === _)
							for (a = n; a > 0;) {
								var s = r[--a];
								if (Array.isArray(e) ? -1 !== e.indexOf(s) : e === s)
									for (var u = n; u <= r.length;) {
										if ((o = r[++u]) === t) return !0;
										if (o !== _) break
									}
								if (s !== _) break
							}
						return !1
					},
					W = function(e, t) {
						for (var n = e; n >= 0;) {
							var r = t[n];
							if (r !== _) return r;
							n--
						}
						return 0
					},
					K = function(e, t, n, r, i) {
						if (0 === n[r]) return F;
						var a = r - 1;
						if (Array.isArray(i) && !0 === i[a]) return F;
						var o = a - 1,
							s = a + 1,
							u = t[a],
							c = o >= 0 ? t[o] : 0,
							l = t[s];
						if (2 === u && 3 === l) return F;
						if (-1 !== H.indexOf(u)) return "!";
						if (-1 !== H.indexOf(l)) return F;
						if (-1 !== Y.indexOf(l)) return F;
						if (8 === W(a, t)) return "Ã·";
						if (11 === U.get(e[a]) && (l === L || l === x || l === P)) return F;
						if (7 === u || 7 === l) return F;
						if (9 === u) return F;
						if (-1 === [_, m, b].indexOf(u) && 9 === l) return F;
						if (-1 !== [g, v, y, E, k].indexOf(l)) return F;
						if (W(a, t) === w) return F;
						if (q(23, w, a, t)) return F;
						if (q([g, v], S, a, t)) return F;
						if (q(12, 12, a, t)) return F;
						if (u === _) return "Ã·";
						if (23 === u || 23 === l) return F;
						if (16 === l || 16 === u) return "Ã·";
						if (-1 !== [m, b, S].indexOf(l) || 14 === u) return F;
						if (36 === c && -1 !== G.indexOf(u)) return F;
						if (u === k && 36 === l) return F;
						if (l === A && -1 !== j.concat(A, y, T, L, x, P).indexOf(u)) return F;
						if (-1 !== j.indexOf(l) && u === T || -1 !== j.indexOf(u) && l === T) return F;
						if (u === $ && -1 !== [L, x, P].indexOf(l) || -1 !== [L, x, P].indexOf(u) && l === C) return F;
						if (-1 !== j.indexOf(u) && -1 !== V.indexOf(l) || -1 !== V.indexOf(u) && -1 !== j.indexOf(l)) return F;
						if (-1 !== [$, C].indexOf(u) && (l === T || -1 !== [w, b].indexOf(l) && t[s + 1] === T) || -1 !== [w, b].indexOf(u) && l === T || u === T && -1 !== [T, k, E].indexOf(l)) return F;
						if (-1 !== [T, k, E, g, v].indexOf(l))
							for (var f = a; f >= 0;) {
								var d = t[f];
								if (d === T) return F;
								if (-1 === [k, E].indexOf(d)) break;
								f--
							}
						if (-1 !== [$, C].indexOf(l))
							for (f = -1 !== [g, v].indexOf(u) ? o : a; f >= 0;) {
								if ((d = t[f]) === T) return F;
								if (-1 === [k, E].indexOf(d)) break;
								f--
							}
						if (D === u && -1 !== [D, B, M, I].indexOf(l) || -1 !== [B, M].indexOf(u) && -1 !== [B, N].indexOf(l) || -1 !== [N, I].indexOf(u) && l === N) return F;
						if (-1 !== Q.indexOf(u) && -1 !== [A, C].indexOf(l) || -1 !== Q.indexOf(l) && u === $) return F;
						if (-1 !== j.indexOf(u) && -1 !== j.indexOf(l)) return F;
						if (u === E && -1 !== j.indexOf(l)) return F;
						if (-1 !== j.concat(T).indexOf(u) && l === w || -1 !== j.concat(T).indexOf(l) && u === v) return F;
						if (41 === u && 41 === l) {
							for (var h = n[a], p = 1; h > 0 && 41 === t[--h];) p++;
							if (p % 2 != 0) return F
						}
						return u === x && l === P ? F : "Ã·"
					},
					X = function(e, t) {
						t || (t = {
							lineBreak: "normal",
							wordBreak: "normal"
						});
						var n = function(e, t) {
								void 0 === t && (t = "strict");
								var n = [],
									r = [],
									i = [];
								return e.forEach((function(e, a) {
									var o = U.get(e);
									if (o > 50 ? (i.push(!0), o -= 50) : i.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(e)) return r.push(a), n.push(16);
									if (4 === o || 11 === o) {
										if (0 === a) return r.push(a), n.push(O);
										var s = n[a - 1];
										return -1 === z.indexOf(s) ? (r.push(r[a - 1]), n.push(s)) : (r.push(a), n.push(O))
									}
									return r.push(a), 31 === o ? n.push("strict" === t ? S : L) : o === R || 29 === o ? n.push(O) : 43 === o ? e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? n.push(L) : n.push(O) : void n.push(o)
								})), [r, n, i]
							}(e, t.lineBreak),
							r = n[0],
							i = n[1],
							a = n[2];
						return "break-all" !== t.wordBreak && "break-word" !== t.wordBreak || (i = i.map((function(e) {
							return -1 !== [T, O, R].indexOf(e) ? L : e
						}))), [r, i, "keep-all" === t.wordBreak ? a.map((function(t, n) {
							return t && e[n] >= 19968 && e[n] <= 40959
						})) : void 0]
					},
					J = function() {
						function e(e, t, n, r) {
							this.codePoints = e, this.required = "!" === t, this.start = n, this.end = r
						}
						return e.prototype.slice = function() {
							return u.apply(void 0, this.codePoints.slice(this.start, this.end))
						}, e
					}();
				! function(e) {
					e[e.STRING_TOKEN = 0] = "STRING_TOKEN", e[e.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN", e[e.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN", e[e.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN", e[e.COMMA_TOKEN = 4] = "COMMA_TOKEN", e[e.HASH_TOKEN = 5] = "HASH_TOKEN", e[e.DELIM_TOKEN = 6] = "DELIM_TOKEN", e[e.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN", e[e.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN", e[e.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN", e[e.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN", e[e.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN", e[e.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN", e[e.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN", e[e.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN", e[e.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN", e[e.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN", e[e.NUMBER_TOKEN = 17] = "NUMBER_TOKEN", e[e.FUNCTION = 18] = "FUNCTION", e[e.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN", e[e.IDENT_TOKEN = 20] = "IDENT_TOKEN", e[e.COLUMN_TOKEN = 21] = "COLUMN_TOKEN", e[e.URL_TOKEN = 22] = "URL_TOKEN", e[e.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN", e[e.CDC_TOKEN = 24] = "CDC_TOKEN", e[e.CDO_TOKEN = 25] = "CDO_TOKEN", e[e.COLON_TOKEN = 26] = "COLON_TOKEN", e[e.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN", e[e.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN", e[e.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN", e[e.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN", e[e.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN", e[e.EOF_TOKEN = 32] = "EOF_TOKEN"
				}(d || (d = {}));
				var Z = function(e) {
						return e >= 48 && e <= 57
					},
					ee = function(e) {
						return Z(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102
					},
					te = function(e) {
						return 10 === e || 9 === e || 32 === e
					},
					ne = function(e) {
						return function(e) {
							return function(e) {
								return e >= 97 && e <= 122
							}(e) || function(e) {
								return e >= 65 && e <= 90
							}(e)
						}(e) || function(e) {
							return e >= 128
						}(e) || 95 === e
					},
					re = function(e) {
						return ne(e) || Z(e) || 45 === e
					},
					ie = function(e) {
						return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e
					},
					ae = function(e, t) {
						return 92 === e && 10 !== t
					},
					oe = function(e, t, n) {
						return 45 === e ? ne(t) || ae(t, n) : !!ne(e) || !(92 !== e || !ae(e, t))
					},
					se = function(e, t, n) {
						return 43 === e || 45 === e ? !!Z(t) || 46 === t && Z(n) : Z(46 === e ? t : e)
					},
					ue = function(e) {
						var t = 0,
							n = 1;
						43 !== e[t] && 45 !== e[t] || (45 === e[t] && (n = -1), t++);
						for (var r = []; Z(e[t]);) r.push(e[t++]);
						var i = r.length ? parseInt(u.apply(void 0, r), 10) : 0;
						46 === e[t] && t++;
						for (var a = []; Z(e[t]);) a.push(e[t++]);
						var o = a.length,
							s = o ? parseInt(u.apply(void 0, a), 10) : 0;
						69 !== e[t] && 101 !== e[t] || t++;
						var c = 1;
						43 !== e[t] && 45 !== e[t] || (45 === e[t] && (c = -1), t++);
						for (var l = []; Z(e[t]);) l.push(e[t++]);
						var f = l.length ? parseInt(u.apply(void 0, l), 10) : 0;
						return n * (i + s * Math.pow(10, -o)) * Math.pow(10, c * f)
					},
					ce = {
						type: d.LEFT_PARENTHESIS_TOKEN
					},
					le = {
						type: d.RIGHT_PARENTHESIS_TOKEN
					},
					fe = {
						type: d.COMMA_TOKEN
					},
					de = {
						type: d.SUFFIX_MATCH_TOKEN
					},
					he = {
						type: d.PREFIX_MATCH_TOKEN
					},
					pe = {
						type: d.COLUMN_TOKEN
					},
					_e = {
						type: d.DASH_MATCH_TOKEN
					},
					me = {
						type: d.INCLUDE_MATCH_TOKEN
					},
					be = {
						type: d.LEFT_CURLY_BRACKET_TOKEN
					},
					ge = {
						type: d.RIGHT_CURLY_BRACKET_TOKEN
					},
					ve = {
						type: d.SUBSTRING_MATCH_TOKEN
					},
					ye = {
						type: d.BAD_URL_TOKEN
					},
					Ae = {
						type: d.BAD_STRING_TOKEN
					},
					Se = {
						type: d.CDO_TOKEN
					},
					we = {
						type: d.CDC_TOKEN
					},
					Ee = {
						type: d.COLON_TOKEN
					},
					Te = {
						type: d.SEMICOLON_TOKEN
					},
					Ce = {
						type: d.LEFT_SQUARE_BRACKET_TOKEN
					},
					$e = {
						type: d.RIGHT_SQUARE_BRACKET_TOKEN
					},
					ke = {
						type: d.WHITESPACE_TOKEN
					},
					Oe = {
						type: d.EOF_TOKEN
					},
					xe = function() {
						function e() {
							this._value = []
						}
						return e.prototype.write = function(e) {
							this._value = this._value.concat(s(e))
						}, e.prototype.read = function() {
							for (var e = [], t = this.consumeToken(); t !== Oe;) e.push(t), t = this.consumeToken();
							return e
						}, e.prototype.consumeToken = function() {
							var e = this.consumeCodePoint();
							switch (e) {
								case 34:
									return this.consumeStringToken(34);
								case 35:
									var t = this.peekCodePoint(0),
										n = this.peekCodePoint(1),
										r = this.peekCodePoint(2);
									if (re(t) || ae(n, r)) {
										var i = oe(t, n, r) ? 2 : 1,
											a = this.consumeName();
										return {
											type: d.HASH_TOKEN,
											value: a,
											flags: i
										}
									}
									break;
								case 36:
									if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), de;
									break;
								case 39:
									return this.consumeStringToken(39);
								case 40:
									return ce;
								case 41:
									return le;
								case 42:
									if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), ve;
									break;
								case 43:
									if (se(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
									break;
								case 44:
									return fe;
								case 45:
									var o = e,
										s = this.peekCodePoint(0),
										c = this.peekCodePoint(1);
									if (se(o, s, c)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
									if (oe(o, s, c)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
									if (45 === s && 62 === c) return this.consumeCodePoint(), this.consumeCodePoint(), we;
									break;
								case 46:
									if (se(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
									break;
								case 47:
									if (42 === this.peekCodePoint(0))
										for (this.consumeCodePoint();;) {
											var l = this.consumeCodePoint();
											if (42 === l && 47 === (l = this.consumeCodePoint())) return this.consumeToken();
											if (-1 === l) return this.consumeToken()
										}
									break;
								case 58:
									return Ee;
								case 59:
									return Te;
								case 60:
									if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), Se;
									break;
								case 64:
									var f = this.peekCodePoint(0),
										h = this.peekCodePoint(1),
										p = this.peekCodePoint(2);
									if (oe(f, h, p)) return a = this.consumeName(), {
										type: d.AT_KEYWORD_TOKEN,
										value: a
									};
									break;
								case 91:
									return Ce;
								case 92:
									if (ae(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
									break;
								case 93:
									return $e;
								case 61:
									if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), he;
									break;
								case 123:
									return be;
								case 125:
									return ge;
								case 117:
								case 85:
									var _ = this.peekCodePoint(0),
										m = this.peekCodePoint(1);
									return 43 !== _ || !ee(m) && 63 !== m || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
								case 124:
									if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), _e;
									if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), pe;
									break;
								case 126:
									if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), me;
									break;
								case -1:
									return Oe
							}
							return te(e) ? (this.consumeWhiteSpace(), ke) : Z(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ne(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
								type: d.DELIM_TOKEN,
								value: u(e)
							}
						}, e.prototype.consumeCodePoint = function() {
							var e = this._value.shift();
							return void 0 === e ? -1 : e
						}, e.prototype.reconsumeCodePoint = function(e) {
							this._value.unshift(e)
						}, e.prototype.peekCodePoint = function(e) {
							return e >= this._value.length ? -1 : this._value[e]
						}, e.prototype.consumeUnicodeRangeToken = function() {
							for (var e = [], t = this.consumeCodePoint(); ee(t) && e.length < 6;) e.push(t), t = this.consumeCodePoint();
							for (var n = !1; 63 === t && e.length < 6;) e.push(t), t = this.consumeCodePoint(), n = !0;
							if (n) {
								var r = parseInt(u.apply(void 0, e.map((function(e) {
										return 63 === e ? 48 : e
									}))), 16),
									i = parseInt(u.apply(void 0, e.map((function(e) {
										return 63 === e ? 70 : e
									}))), 16);
								return {
									type: d.UNICODE_RANGE_TOKEN,
									start: r,
									end: i
								}
							}
							var a = parseInt(u.apply(void 0, e), 16);
							if (45 === this.peekCodePoint(0) && ee(this.peekCodePoint(1))) {
								this.consumeCodePoint(), t = this.consumeCodePoint();
								for (var o = []; ee(t) && o.length < 6;) o.push(t), t = this.consumeCodePoint();
								return i = parseInt(u.apply(void 0, o), 16), {
									type: d.UNICODE_RANGE_TOKEN,
									start: a,
									end: i
								}
							}
							return {
								type: d.UNICODE_RANGE_TOKEN,
								start: a,
								end: a
							}
						}, e.prototype.consumeIdentLikeToken = function() {
							var e = this.consumeName();
							return "url" === e.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
								type: d.FUNCTION_TOKEN,
								value: e
							}) : {
								type: d.IDENT_TOKEN,
								value: e
							}
						}, e.prototype.consumeUrlToken = function() {
							var e = [];
							if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
								type: d.URL_TOKEN,
								value: ""
							};
							var t = this.peekCodePoint(0);
							if (39 === t || 34 === t) {
								var n = this.consumeStringToken(this.consumeCodePoint());
								return n.type === d.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
									type: d.URL_TOKEN,
									value: n.value
								}) : (this.consumeBadUrlRemnants(), ye)
							}
							for (;;) {
								var r = this.consumeCodePoint();
								if (-1 === r || 41 === r) return {
									type: d.URL_TOKEN,
									value: u.apply(void 0, e)
								};
								if (te(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
									type: d.URL_TOKEN,
									value: u.apply(void 0, e)
								}) : (this.consumeBadUrlRemnants(), ye);
								if (34 === r || 39 === r || 40 === r || ie(r)) return this.consumeBadUrlRemnants(), ye;
								if (92 === r) {
									if (!ae(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), ye;
									e.push(this.consumeEscapedCodePoint())
								} else e.push(r)
							}
						}, e.prototype.consumeWhiteSpace = function() {
							for (; te(this.peekCodePoint(0));) this.consumeCodePoint()
						}, e.prototype.consumeBadUrlRemnants = function() {
							for (;;) {
								var e = this.consumeCodePoint();
								if (41 === e || -1 === e) return;
								ae(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
							}
						}, e.prototype.consumeStringSlice = function(e) {
							for (var t = ""; e > 0;) {
								var n = Math.min(6e4, e);
								t += u.apply(void 0, this._value.splice(0, n)), e -= n
							}
							return this._value.shift(), t
						}, e.prototype.consumeStringToken = function(e) {
							for (var t = "", n = 0;;) {
								var r = this._value[n];
								if (-1 === r || void 0 === r || r === e) return t += this.consumeStringSlice(n), {
									type: d.STRING_TOKEN,
									value: t
								};
								if (10 === r) return this._value.splice(0, n), Ae;
								if (92 === r) {
									var i = this._value[n + 1]; - 1 !== i && void 0 !== i && (10 === i ? (t += this.consumeStringSlice(n), n = -1, this._value.shift()) : ae(r, i) && (t += this.consumeStringSlice(n), t += u(this.consumeEscapedCodePoint()), n = -1))
								}
								n++
							}
						}, e.prototype.consumeNumber = function() {
							var e = [],
								t = 4,
								n = this.peekCodePoint(0);
							for (43 !== n && 45 !== n || e.push(this.consumeCodePoint()); Z(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
							n = this.peekCodePoint(0);
							var r = this.peekCodePoint(1);
							if (46 === n && Z(r))
								for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; Z(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
							n = this.peekCodePoint(0), r = this.peekCodePoint(1);
							var i = this.peekCodePoint(2);
							if ((69 === n || 101 === n) && ((43 === r || 45 === r) && Z(i) || Z(r)))
								for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; Z(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
							return [ue(e), t]
						}, e.prototype.consumeNumericToken = function() {
							var e = this.consumeNumber(),
								t = e[0],
								n = e[1],
								r = this.peekCodePoint(0),
								i = this.peekCodePoint(1),
								a = this.peekCodePoint(2);
							if (oe(r, i, a)) {
								var o = this.consumeName();
								return {
									type: d.DIMENSION_TOKEN,
									number: t,
									flags: n,
									unit: o
								}
							}
							return 37 === r ? (this.consumeCodePoint(), {
								type: d.PERCENTAGE_TOKEN,
								number: t,
								flags: n
							}) : {
								type: d.NUMBER_TOKEN,
								number: t,
								flags: n
							}
						}, e.prototype.consumeEscapedCodePoint = function() {
							var e = this.consumeCodePoint();
							if (ee(e)) {
								for (var t = u(e); ee(this.peekCodePoint(0)) && t.length < 6;) t += u(this.consumeCodePoint());
								te(this.peekCodePoint(0)) && this.consumeCodePoint();
								var n = parseInt(t, 16);
								return 0 === n || function(e) {
									return e >= 55296 && e <= 57343
								}(n) || n > 1114111 ? 65533 : n
							}
							return -1 === e ? 65533 : e
						}, e.prototype.consumeName = function() {
							for (var e = "";;) {
								var t = this.consumeCodePoint();
								if (re(t)) e += u(t);
								else {
									if (!ae(t, this.peekCodePoint(0))) return this.reconsumeCodePoint(t), e;
									e += u(this.consumeEscapedCodePoint())
								}
							}
						}, e
					}(),
					Pe = function() {
						function e(e) {
							this._tokens = e
						}
						return e.create = function(t) {
							var n = new xe;
							return n.write(t), new e(n.read())
						}, e.parseValue = function(t) {
							return e.create(t).parseComponentValue()
						}, e.parseValues = function(t) {
							return e.create(t).parseComponentValues()
						}, e.prototype.parseComponentValue = function() {
							for (var e = this.consumeToken(); e.type === d.WHITESPACE_TOKEN;) e = this.consumeToken();
							if (e.type === d.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
							this.reconsumeToken(e);
							var t = this.consumeComponentValue();
							do {
								e = this.consumeToken()
							} while (e.type === d.WHITESPACE_TOKEN);
							if (e.type === d.EOF_TOKEN) return t;
							throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
						}, e.prototype.parseComponentValues = function() {
							for (var e = [];;) {
								var t = this.consumeComponentValue();
								if (t.type === d.EOF_TOKEN) return e;
								e.push(t), e.push()
							}
						}, e.prototype.consumeComponentValue = function() {
							var e = this.consumeToken();
							switch (e.type) {
								case d.LEFT_CURLY_BRACKET_TOKEN:
								case d.LEFT_SQUARE_BRACKET_TOKEN:
								case d.LEFT_PARENTHESIS_TOKEN:
									return this.consumeSimpleBlock(e.type);
								case d.FUNCTION_TOKEN:
									return this.consumeFunction(e)
							}
							return e
						}, e.prototype.consumeSimpleBlock = function(e) {
							for (var t = {
									type: e,
									values: []
								}, n = this.consumeToken();;) {
								if (n.type === d.EOF_TOKEN || Ue(n, e)) return t;
								this.reconsumeToken(n), t.values.push(this.consumeComponentValue()), n = this.consumeToken()
							}
						}, e.prototype.consumeFunction = function(e) {
							for (var t = {
									name: e.value,
									values: [],
									type: d.FUNCTION
								};;) {
								var n = this.consumeToken();
								if (n.type === d.EOF_TOKEN || n.type === d.RIGHT_PARENTHESIS_TOKEN) return t;
								this.reconsumeToken(n), t.values.push(this.consumeComponentValue())
							}
						}, e.prototype.consumeToken = function() {
							var e = this._tokens.shift();
							return void 0 === e ? Oe : e
						}, e.prototype.reconsumeToken = function(e) {
							this._tokens.unshift(e)
						}, e
					}(),
					Me = function(e) {
						return e.type === d.DIMENSION_TOKEN
					},
					Ie = function(e) {
						return e.type === d.NUMBER_TOKEN
					},
					Le = function(e) {
						return e.type === d.IDENT_TOKEN
					},
					De = function(e) {
						return e.type === d.STRING_TOKEN
					},
					Be = function(e, t) {
						return Le(e) && e.value === t
					},
					Ne = function(e) {
						return e.type !== d.WHITESPACE_TOKEN
					},
					Re = function(e) {
						return e.type !== d.WHITESPACE_TOKEN && e.type !== d.COMMA_TOKEN
					},
					Fe = function(e) {
						var t = [],
							n = [];
						return e.forEach((function(e) {
							if (e.type === d.COMMA_TOKEN) {
								if (0 === n.length) throw new Error("Error parsing function args, zero tokens for arg");
								return t.push(n), void(n = [])
							}
							e.type !== d.WHITESPACE_TOKEN && n.push(e)
						})), n.length && t.push(n), t
					},
					Ue = function(e, t) {
						return t === d.LEFT_CURLY_BRACKET_TOKEN && e.type === d.RIGHT_CURLY_BRACKET_TOKEN || t === d.LEFT_SQUARE_BRACKET_TOKEN && e.type === d.RIGHT_SQUARE_BRACKET_TOKEN || t === d.LEFT_PARENTHESIS_TOKEN && e.type === d.RIGHT_PARENTHESIS_TOKEN
					},
					je = function(e) {
						return e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN
					},
					He = function(e) {
						return e.type === d.PERCENTAGE_TOKEN || je(e)
					},
					Ye = function(e) {
						return e.length > 1 ? [e[0], e[1]] : [e[0]]
					},
					Ve = {
						type: d.NUMBER_TOKEN,
						number: 0,
						flags: 4
					},
					ze = {
						type: d.PERCENTAGE_TOKEN,
						number: 50,
						flags: 4
					},
					Qe = {
						type: d.PERCENTAGE_TOKEN,
						number: 100,
						flags: 4
					},
					Ge = function(e, t, n) {
						var r = e[0],
							i = e[1];
						return [qe(r, t), qe(void 0 !== i ? i : r, n)]
					},
					qe = function(e, t) {
						if (e.type === d.PERCENTAGE_TOKEN) return e.number / 100 * t;
						if (Me(e)) switch (e.unit) {
							case "rem":
							case "em":
								return 16 * e.number;
							case "px":
							default:
								return e.number
						}
						return e.number
					},
					We = function(e) {
						if (e.type === d.DIMENSION_TOKEN) switch (e.unit) {
							case "deg":
								return Math.PI * e.number / 180;
							case "grad":
								return Math.PI / 200 * e.number;
							case "rad":
								return e.number;
							case "turn":
								return 2 * Math.PI * e.number
						}
						throw new Error("Unsupported angle type")
					},
					Ke = function(e) {
						return e.type === d.DIMENSION_TOKEN && ("deg" === e.unit || "grad" === e.unit || "rad" === e.unit || "turn" === e.unit)
					},
					Xe = function(e) {
						switch (e.filter(Le).map((function(e) {
							return e.value
						})).join(" ")) {
							case "to bottom right":
							case "to right bottom":
							case "left top":
							case "top left":
								return [Ve, Ve];
							case "to top":
							case "bottom":
								return Je(0);
							case "to bottom left":
							case "to left bottom":
							case "right top":
							case "top right":
								return [Ve, Qe];
							case "to right":
							case "left":
								return Je(90);
							case "to top left":
							case "to left top":
							case "right bottom":
							case "bottom right":
								return [Qe, Qe];
							case "to bottom":
							case "top":
								return Je(180);
							case "to top right":
							case "to right top":
							case "left bottom":
							case "bottom left":
								return [Qe, Ve];
							case "to left":
							case "right":
								return Je(270)
						}
						return 0
					},
					Je = function(e) {
						return Math.PI * e / 180
					},
					Ze = function(e) {
						if (e.type === d.FUNCTION) {
							var t = ct[e.name];
							if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
							return t(e.values)
						}
						if (e.type === d.HASH_TOKEN) {
							if (3 === e.value.length) {
								var n = e.value.substring(0, 1),
									r = e.value.substring(1, 2),
									i = e.value.substring(2, 3);
								return nt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), 1)
							}
							if (4 === e.value.length) {
								n = e.value.substring(0, 1), r = e.value.substring(1, 2), i = e.value.substring(2, 3);
								var a = e.value.substring(3, 4);
								return nt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), parseInt(a + a, 16) / 255)
							}
							if (6 === e.value.length) return n = e.value.substring(0, 2), r = e.value.substring(2, 4), i = e.value.substring(4, 6), nt(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), 1);
							if (8 === e.value.length) return n = e.value.substring(0, 2), r = e.value.substring(2, 4), i = e.value.substring(4, 6), a = e.value.substring(6, 8), nt(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), parseInt(a, 16) / 255)
						}
						if (e.type === d.IDENT_TOKEN) {
							var o = lt[e.value.toUpperCase()];
							if (void 0 !== o) return o
						}
						return lt.TRANSPARENT
					},
					et = function(e) {
						return 0 == (255 & e)
					},
					tt = function(e) {
						var t = 255 & e,
							n = 255 & e >> 8,
							r = 255 & e >> 16,
							i = 255 & e >> 24;
						return t < 255 ? "rgba(" + i + "," + r + "," + n + "," + t / 255 + ")" : "rgb(" + i + "," + r + "," + n + ")"
					},
					nt = function(e, t, n, r) {
						return (e << 24 | t << 16 | n << 8 | Math.round(255 * r) << 0) >>> 0
					},
					rt = function(e, t) {
						if (e.type === d.NUMBER_TOKEN) return e.number;
						if (e.type === d.PERCENTAGE_TOKEN) {
							var n = 3 === t ? 1 : 255;
							return 3 === t ? e.number / 100 * n : Math.round(e.number / 100 * n)
						}
						return 0
					},
					it = function(e) {
						var t = e.filter(Re);
						if (3 === t.length) {
							var n = t.map(rt),
								r = n[0],
								i = n[1],
								a = n[2];
							return nt(r, i, a, 1)
						}
						if (4 === t.length) {
							var o = t.map(rt),
								s = (r = o[0], i = o[1], a = o[2], o[3]);
							return nt(r, i, a, s)
						}
						return 0
					};

				function at(e, t, n) {
					return n < 0 && (n += 1), n >= 1 && (n -= 1), n < 1 / 6 ? (t - e) * n * 6 + e : n < .5 ? t : n < 2 / 3 ? 6 * (t - e) * (2 / 3 - n) + e : e
				}
				var ot, st, ut = function(e) {
						var t = e.filter(Re),
							n = t[0],
							r = t[1],
							i = t[2],
							a = t[3],
							o = (n.type === d.NUMBER_TOKEN ? Je(n.number) : We(n)) / (2 * Math.PI),
							s = He(r) ? r.number / 100 : 0,
							u = He(i) ? i.number / 100 : 0,
							c = void 0 !== a && He(a) ? qe(a, 1) : 1;
						if (0 === s) return nt(255 * u, 255 * u, 255 * u, 1);
						var l = u <= .5 ? u * (s + 1) : u + s - u * s,
							f = 2 * u - l,
							h = at(f, l, o + 1 / 3),
							p = at(f, l, o),
							_ = at(f, l, o - 1 / 3);
						return nt(255 * h, 255 * p, 255 * _, c)
					},
					ct = {
						hsl: ut,
						hsla: ut,
						rgb: it,
						rgba: it
					},
					lt = {
						ALICEBLUE: 4042850303,
						ANTIQUEWHITE: 4209760255,
						AQUA: 16777215,
						AQUAMARINE: 2147472639,
						AZURE: 4043309055,
						BEIGE: 4126530815,
						BISQUE: 4293182719,
						BLACK: 255,
						BLANCHEDALMOND: 4293643775,
						BLUE: 65535,
						BLUEVIOLET: 2318131967,
						BROWN: 2771004159,
						BURLYWOOD: 3736635391,
						CADETBLUE: 1604231423,
						CHARTREUSE: 2147418367,
						CHOCOLATE: 3530104575,
						CORAL: 4286533887,
						CORNFLOWERBLUE: 1687547391,
						CORNSILK: 4294499583,
						CRIMSON: 3692313855,
						CYAN: 16777215,
						DARKBLUE: 35839,
						DARKCYAN: 9145343,
						DARKGOLDENROD: 3095837695,
						DARKGRAY: 2846468607,
						DARKGREEN: 6553855,
						DARKGREY: 2846468607,
						DARKKHAKI: 3182914559,
						DARKMAGENTA: 2332068863,
						DARKOLIVEGREEN: 1433087999,
						DARKORANGE: 4287365375,
						DARKORCHID: 2570243327,
						DARKRED: 2332033279,
						DARKSALMON: 3918953215,
						DARKSEAGREEN: 2411499519,
						DARKSLATEBLUE: 1211993087,
						DARKSLATEGRAY: 793726975,
						DARKSLATEGREY: 793726975,
						DARKTURQUOISE: 13554175,
						DARKVIOLET: 2483082239,
						DEEPPINK: 4279538687,
						DEEPSKYBLUE: 12582911,
						DIMGRAY: 1768516095,
						DIMGREY: 1768516095,
						DODGERBLUE: 512819199,
						FIREBRICK: 2988581631,
						FLORALWHITE: 4294635775,
						FORESTGREEN: 579543807,
						FUCHSIA: 4278255615,
						GAINSBORO: 3705462015,
						GHOSTWHITE: 4177068031,
						GOLD: 4292280575,
						GOLDENROD: 3668254975,
						GRAY: 2155905279,
						GREEN: 8388863,
						GREENYELLOW: 2919182335,
						GREY: 2155905279,
						HONEYDEW: 4043305215,
						HOTPINK: 4285117695,
						INDIANRED: 3445382399,
						INDIGO: 1258324735,
						IVORY: 4294963455,
						KHAKI: 4041641215,
						LAVENDER: 3873897215,
						LAVENDERBLUSH: 4293981695,
						LAWNGREEN: 2096890111,
						LEMONCHIFFON: 4294626815,
						LIGHTBLUE: 2916673279,
						LIGHTCORAL: 4034953471,
						LIGHTCYAN: 3774873599,
						LIGHTGOLDENRODYELLOW: 4210742015,
						LIGHTGRAY: 3553874943,
						LIGHTGREEN: 2431553791,
						LIGHTGREY: 3553874943,
						LIGHTPINK: 4290167295,
						LIGHTSALMON: 4288707327,
						LIGHTSEAGREEN: 548580095,
						LIGHTSKYBLUE: 2278488831,
						LIGHTSLATEGRAY: 2005441023,
						LIGHTSLATEGREY: 2005441023,
						LIGHTSTEELBLUE: 2965692159,
						LIGHTYELLOW: 4294959359,
						LIME: 16711935,
						LIMEGREEN: 852308735,
						LINEN: 4210091775,
						MAGENTA: 4278255615,
						MAROON: 2147483903,
						MEDIUMAQUAMARINE: 1724754687,
						MEDIUMBLUE: 52735,
						MEDIUMORCHID: 3126187007,
						MEDIUMPURPLE: 2473647103,
						MEDIUMSEAGREEN: 1018393087,
						MEDIUMSLATEBLUE: 2070474495,
						MEDIUMSPRINGGREEN: 16423679,
						MEDIUMTURQUOISE: 1221709055,
						MEDIUMVIOLETRED: 3340076543,
						MIDNIGHTBLUE: 421097727,
						MINTCREAM: 4127193855,
						MISTYROSE: 4293190143,
						MOCCASIN: 4293178879,
						NAVAJOWHITE: 4292783615,
						NAVY: 33023,
						OLDLACE: 4260751103,
						OLIVE: 2155872511,
						OLIVEDRAB: 1804477439,
						ORANGE: 4289003775,
						ORANGERED: 4282712319,
						ORCHID: 3664828159,
						PALEGOLDENROD: 4008225535,
						PALEGREEN: 2566625535,
						PALETURQUOISE: 2951671551,
						PALEVIOLETRED: 3681588223,
						PAPAYAWHIP: 4293907967,
						PEACHPUFF: 4292524543,
						PERU: 3448061951,
						PINK: 4290825215,
						PLUM: 3718307327,
						POWDERBLUE: 2967529215,
						PURPLE: 2147516671,
						REBECCAPURPLE: 1714657791,
						RED: 4278190335,
						ROSYBROWN: 3163525119,
						ROYALBLUE: 1097458175,
						SADDLEBROWN: 2336560127,
						SALMON: 4202722047,
						SANDYBROWN: 4104413439,
						SEAGREEN: 780883967,
						SEASHELL: 4294307583,
						SIENNA: 2689740287,
						SILVER: 3233857791,
						SKYBLUE: 2278484991,
						SLATEBLUE: 1784335871,
						SLATEGRAY: 1887473919,
						SLATEGREY: 1887473919,
						SNOW: 4294638335,
						SPRINGGREEN: 16744447,
						STEELBLUE: 1182971135,
						TAN: 3535047935,
						TEAL: 8421631,
						THISTLE: 3636451583,
						TOMATO: 4284696575,
						TRANSPARENT: 0,
						TURQUOISE: 1088475391,
						VIOLET: 4001558271,
						WHEAT: 4125012991,
						WHITE: 4294967295,
						WHITESMOKE: 4126537215,
						YELLOW: 4294902015,
						YELLOWGREEN: 2597139199
					};
				(function(e) {
					e[e.VALUE = 0] = "VALUE", e[e.LIST = 1] = "LIST", e[e.IDENT_VALUE = 2] = "IDENT_VALUE", e[e.TYPE_VALUE = 3] = "TYPE_VALUE", e[e.TOKEN_VALUE = 4] = "TOKEN_VALUE"
				})(ot || (ot = {})),
				function(e) {
					e[e.BORDER_BOX = 0] = "BORDER_BOX", e[e.PADDING_BOX = 1] = "PADDING_BOX", e[e.CONTENT_BOX = 2] = "CONTENT_BOX"
				}(st || (st = {}));
				var ft, dt, ht, pt = {
						name: "background-clip",
						initialValue: "border-box",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return e.map((function(e) {
								if (Le(e)) switch (e.value) {
									case "padding-box":
										return st.PADDING_BOX;
									case "content-box":
										return st.CONTENT_BOX
								}
								return st.BORDER_BOX
							}))
						}
					},
					_t = {
						name: "background-color",
						initialValue: "transparent",
						prefix: !1,
						type: ot.TYPE_VALUE,
						format: "color"
					},
					mt = function(e) {
						var t = Ze(e[0]),
							n = e[1];
						return n && He(n) ? {
							color: t,
							stop: n
						} : {
							color: t,
							stop: null
						}
					},
					bt = function(e, t) {
						var n = e[0],
							r = e[e.length - 1];
						null === n.stop && (n.stop = Ve), null === r.stop && (r.stop = Qe);
						for (var i = [], a = 0, o = 0; o < e.length; o++) {
							var s = e[o].stop;
							if (null !== s) {
								var u = qe(s, t);
								u > a ? i.push(u) : i.push(a), a = u
							} else i.push(null)
						}
						var c = null;
						for (o = 0; o < i.length; o++) {
							var l = i[o];
							if (null === l) null === c && (c = o);
							else if (null !== c) {
								for (var f = o - c, d = (l - i[c - 1]) / (f + 1), h = 1; h <= f; h++) i[c + h - 1] = d * h;
								c = null
							}
						}
						return e.map((function(e, n) {
							return {
								color: e.color,
								stop: Math.max(Math.min(1, i[n] / t), 0)
							}
						}))
					},
					gt = function(e, t, n) {
						var r = "number" == typeof e ? e : function(e, t, n) {
								var r = t / 2,
									i = n / 2,
									a = qe(e[0], t) - r,
									o = i - qe(e[1], n);
								return (Math.atan2(o, a) + 2 * Math.PI) % (2 * Math.PI)
							}(e, t, n),
							i = Math.abs(t * Math.sin(r)) + Math.abs(n * Math.cos(r)),
							a = t / 2,
							o = n / 2,
							s = i / 2,
							u = Math.sin(r - Math.PI / 2) * s,
							c = Math.cos(r - Math.PI / 2) * s;
						return [i, a - c, a + c, o - u, o + u]
					},
					vt = function(e, t) {
						return Math.sqrt(e * e + t * t)
					},
					yt = function(e, t, n, r, i) {
						return [
							[0, 0],
							[0, t],
							[e, 0],
							[e, t]
						].reduce((function(e, t) {
							var a = t[0],
								o = t[1],
								s = vt(n - a, r - o);
							return (i ? s < e.optimumDistance : s > e.optimumDistance) ? {
								optimumCorner: t,
								optimumDistance: s
							} : e
						}), {
							optimumDistance: i ? 1 / 0 : -1 / 0,
							optimumCorner: null
						}).optimumCorner
					},
					At = function(e) {
						var t = Je(180),
							n = [];
						return Fe(e).forEach((function(e, r) {
							if (0 === r) {
								var i = e[0];
								if (i.type === d.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(i.value)) return void(t = Xe(e));
								if (Ke(i)) return void(t = (We(i) + Je(270)) % Je(360))
							}
							var a = mt(e);
							n.push(a)
						})), {
							angle: t,
							stops: n,
							type: ft.LINEAR_GRADIENT
						}
					},
					St = function(e) {
						return 0 === e[0] && 255 === e[1] && 0 === e[2] && 255 === e[3]
					},
					wt = function(e, t, n, r, i) {
						var a = "http://www.w3.org/2000/svg",
							o = document.createElementNS(a, "svg"),
							s = document.createElementNS(a, "foreignObject");
						return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", t.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", n.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(i), o
					},
					Et = function(e) {
						return new Promise((function(t, n) {
							var r = new Image;
							r.onload = function() {
								return t(r)
							}, r.onerror = n, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(e))
						}))
					},
					Tt = {
						get SUPPORT_RANGE_BOUNDS() {
							var e = function(e) {
								if (e.createRange) {
									var t = e.createRange();
									if (t.getBoundingClientRect) {
										var n = e.createElement("boundtest");
										n.style.height = "123px", n.style.display = "block", e.body.appendChild(n), t.selectNode(n);
										var r = t.getBoundingClientRect(),
											i = Math.round(r.height);
										if (e.body.removeChild(n), 123 === i) return !0
									}
								}
								return !1
							}(document);
							return Object.defineProperty(Tt, "SUPPORT_RANGE_BOUNDS", {
								value: e
							}), e
						},
						get SUPPORT_SVG_DRAWING() {
							var e = function(e) {
								var t = new Image,
									n = e.createElement("canvas"),
									r = n.getContext("2d");
								if (!r) return !1;
								t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
								try {
									r.drawImage(t, 0, 0), n.toDataURL()
								} catch (e) {
									return !1
								}
								return !0
							}(document);
							return Object.defineProperty(Tt, "SUPPORT_SVG_DRAWING", {
								value: e
							}), e
						},
						get SUPPORT_FOREIGNOBJECT_DRAWING() {
							var e = "function" == typeof Array.from && "function" == typeof window.fetch ? function(e) {
								var t = e.createElement("canvas"),
									n = 100;
								t.width = n, t.height = n;
								var r = t.getContext("2d");
								if (!r) return Promise.reject(!1);
								r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, n, n);
								var i = new Image,
									a = t.toDataURL();
								i.src = a;
								var o = wt(n, n, 0, 0, i);
								return r.fillStyle = "red", r.fillRect(0, 0, n, n), Et(o).then((function(t) {
									r.drawImage(t, 0, 0);
									var i = r.getImageData(0, 0, n, n).data;
									r.fillStyle = "red", r.fillRect(0, 0, n, n);
									var o = e.createElement("div");
									return o.style.backgroundImage = "url(" + a + ")", o.style.height = "100px", St(i) ? Et(wt(n, n, 0, 0, o)) : Promise.reject(!1)
								})).then((function(e) {
									return r.drawImage(e, 0, 0), St(r.getImageData(0, 0, n, n).data)
								})).catch((function() {
									return !1
								}))
							}(document) : Promise.resolve(!1);
							return Object.defineProperty(Tt, "SUPPORT_FOREIGNOBJECT_DRAWING", {
								value: e
							}), e
						},
						get SUPPORT_CORS_IMAGES() {
							var e = void 0 !== (new Image).crossOrigin;
							return Object.defineProperty(Tt, "SUPPORT_CORS_IMAGES", {
								value: e
							}), e
						},
						get SUPPORT_RESPONSE_TYPE() {
							var e = "string" == typeof(new XMLHttpRequest).responseType;
							return Object.defineProperty(Tt, "SUPPORT_RESPONSE_TYPE", {
								value: e
							}), e
						},
						get SUPPORT_CORS_XHR() {
							var e = "withCredentials" in new XMLHttpRequest;
							return Object.defineProperty(Tt, "SUPPORT_CORS_XHR", {
								value: e
							}), e
						}
					},
					Ct = function() {
						function e(e) {
							var t = e.id,
								n = e.enabled;
							this.id = t, this.enabled = n, this.start = Date.now()
						}
						return e.prototype.debug = function() {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(e)) : this.info.apply(this, e))
						}, e.prototype.getTime = function() {
							return Date.now() - this.start
						}, e.create = function(t) {
							e.instances[t.id] = new e(t)
						}, e.destroy = function(t) {
							delete e.instances[t]
						}, e.getInstance = function(t) {
							var n = e.instances[t];
							if (void 0 === n) throw new Error("No logger instance found with id " + t);
							return n
						}, e.prototype.info = function() {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(e))
						}, e.prototype.error = function() {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(e)) : this.info.apply(this, e))
						}, e.instances = {}, e
					}(),
					$t = function() {
						function e() {}
						return e.create = function(t, n) {
							return e._caches[t] = new kt(t, n)
						}, e.destroy = function(t) {
							delete e._caches[t]
						}, e.open = function(t) {
							var n = e._caches[t];
							if (void 0 !== n) return n;
							throw new Error('Cache with key "' + t + '" not found')
						}, e.getOrigin = function(t) {
							var n = e._link;
							return n ? (n.href = t, n.href = n.href, n.protocol + n.hostname + n.port) : "about:blank"
						}, e.isSameOrigin = function(t) {
							return e.getOrigin(t) === e._origin
						}, e.setContext = function(t) {
							e._link = t.document.createElement("a"), e._origin = e.getOrigin(t.location.href)
						}, e.getInstance = function() {
							var t = e._current;
							if (null === t) throw new Error("No cache instance attached");
							return t
						}, e.attachInstance = function(t) {
							e._current = t
						}, e.detachInstance = function() {
							e._current = null
						}, e._caches = {}, e._origin = "about:blank", e._current = null, e
					}(),
					kt = function() {
						function e(e, t) {
							this.id = e, this._options = t, this._cache = {}
						}
						return e.prototype.addImage = function(e) {
							var t = Promise.resolve();
							return this.has(e) ? t : Dt(e) || Mt(e) ? (this._cache[e] = this.loadImage(e), t) : t
						}, e.prototype.match = function(e) {
							return this._cache[e]
						}, e.prototype.loadImage = function(e) {
							return r(this, void 0, void 0, (function() {
								var t, n, r, a, o = this;
								return i(this, (function(i) {
									switch (i.label) {
										case 0:
											return t = $t.isSameOrigin(e), n = !It(e) && !0 === this._options.useCORS && Tt.SUPPORT_CORS_IMAGES && !t, r = !It(e) && !t && "string" == typeof this._options.proxy && Tt.SUPPORT_CORS_XHR && !n, t || !1 !== this._options.allowTaint || It(e) || r || n ? (a = e, r ? [4, this.proxy(a)] : [3, 2]) : [2];
										case 1:
											a = i.sent(), i.label = 2;
										case 2:
											return Ct.getInstance(this.id).debug("Added image " + e.substring(0, 256)), [4, new Promise((function(e, t) {
												var r = new Image;
												r.onload = function() {
													return e(r)
												}, r.onerror = t, (Lt(a) || n) && (r.crossOrigin = "anonymous"), r.src = a, !0 === r.complete && setTimeout((function() {
													return e(r)
												}), 500), o._options.imageTimeout > 0 && setTimeout((function() {
													return t("Timed out (" + o._options.imageTimeout + "ms) loading image")
												}), o._options.imageTimeout)
											}))];
										case 3:
											return [2, i.sent()]
									}
								}))
							}))
						}, e.prototype.has = function(e) {
							return void 0 !== this._cache[e]
						}, e.prototype.keys = function() {
							return Promise.resolve(Object.keys(this._cache))
						}, e.prototype.proxy = function(e) {
							var t = this,
								n = this._options.proxy;
							if (!n) throw new Error("No proxy defined");
							var r = e.substring(0, 256);
							return new Promise((function(i, a) {
								var o = Tt.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
									s = new XMLHttpRequest;
								if (s.onload = function() {
										if (200 === s.status)
											if ("text" === o) i(s.response);
											else {
												var e = new FileReader;
												e.addEventListener("load", (function() {
													return i(e.result)
												}), !1), e.addEventListener("error", (function(e) {
													return a(e)
												}), !1), e.readAsDataURL(s.response)
											}
										else a("Failed to proxy resource " + r + " with status code " + s.status)
									}, s.onerror = a, s.open("GET", n + "?url=" + encodeURIComponent(e) + "&responseType=" + o), "text" !== o && s instanceof XMLHttpRequest && (s.responseType = o), t._options.imageTimeout) {
									var u = t._options.imageTimeout;
									s.timeout = u, s.ontimeout = function() {
										return a("Timed out (" + u + "ms) proxying " + r)
									}
								}
								s.send()
							}))
						}, e
					}(),
					Ot = /^data:image\/svg\+xml/i,
					xt = /^data:image\/.*;base64,/i,
					Pt = /^data:image\/.*/i,
					Mt = function(e) {
						return Tt.SUPPORT_SVG_DRAWING || !Bt(e)
					},
					It = function(e) {
						return Pt.test(e)
					},
					Lt = function(e) {
						return xt.test(e)
					},
					Dt = function(e) {
						return "blob" === e.substr(0, 4)
					},
					Bt = function(e) {
						return "svg" === e.substr(-3).toLowerCase() || Ot.test(e)
					},
					Nt = "closest-side",
					Rt = "farthest-side",
					Ft = "closest-corner",
					Ut = "farthest-corner",
					jt = "ellipse",
					Ht = "contain",
					Yt = function(e) {
						var t = dt.CIRCLE,
							n = ht.FARTHEST_CORNER,
							r = [],
							i = [];
						return Fe(e).forEach((function(e, a) {
							var o = !0;
							if (0 === a ? o = e.reduce((function(e, t) {
									if (Le(t)) switch (t.value) {
										case "center":
											return i.push(ze), !1;
										case "top":
										case "left":
											return i.push(Ve), !1;
										case "right":
										case "bottom":
											return i.push(Qe), !1
									} else if (He(t) || je(t)) return i.push(t), !1;
									return e
								}), o) : 1 === a && (o = e.reduce((function(e, r) {
									if (Le(r)) switch (r.value) {
										case "circle":
											return t = dt.CIRCLE, !1;
										case jt:
											return t = dt.ELLIPSE, !1;
										case Ht:
										case Nt:
											return n = ht.CLOSEST_SIDE, !1;
										case Rt:
											return n = ht.FARTHEST_SIDE, !1;
										case Ft:
											return n = ht.CLOSEST_CORNER, !1;
										case "cover":
										case Ut:
											return n = ht.FARTHEST_CORNER, !1
									} else if (je(r) || He(r)) return Array.isArray(n) || (n = []), n.push(r), !1;
									return e
								}), o)), o) {
								var s = mt(e);
								r.push(s)
							}
						})), {
							size: n,
							shape: t,
							stops: r,
							position: i,
							type: ft.RADIAL_GRADIENT
						}
					};
				! function(e) {
					e[e.URL = 0] = "URL", e[e.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", e[e.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT"
				}(ft || (ft = {})),
				function(e) {
					e[e.CIRCLE = 0] = "CIRCLE", e[e.ELLIPSE = 1] = "ELLIPSE"
				}(dt || (dt = {})),
				function(e) {
					e[e.CLOSEST_SIDE = 0] = "CLOSEST_SIDE", e[e.FARTHEST_SIDE = 1] = "FARTHEST_SIDE", e[e.CLOSEST_CORNER = 2] = "CLOSEST_CORNER", e[e.FARTHEST_CORNER = 3] = "FARTHEST_CORNER"
				}(ht || (ht = {}));
				var Vt, zt = function(e) {
						if (e.type === d.URL_TOKEN) {
							var t = {
								url: e.value,
								type: ft.URL
							};
							return $t.getInstance().addImage(e.value), t
						}
						if (e.type === d.FUNCTION) {
							var n = Qt[e.name];
							if (void 0 === n) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
							return n(e.values)
						}
						throw new Error("Unsupported image type")
					},
					Qt = {
						"linear-gradient": function(e) {
							var t = Je(180),
								n = [];
							return Fe(e).forEach((function(e, r) {
								if (0 === r) {
									var i = e[0];
									if (i.type === d.IDENT_TOKEN && "to" === i.value) return void(t = Xe(e));
									if (Ke(i)) return void(t = We(i))
								}
								var a = mt(e);
								n.push(a)
							})), {
								angle: t,
								stops: n,
								type: ft.LINEAR_GRADIENT
							}
						},
						"-moz-linear-gradient": At,
						"-ms-linear-gradient": At,
						"-o-linear-gradient": At,
						"-webkit-linear-gradient": At,
						"radial-gradient": function(e) {
							var t = dt.CIRCLE,
								n = ht.FARTHEST_CORNER,
								r = [],
								i = [];
							return Fe(e).forEach((function(e, a) {
								var o = !0;
								if (0 === a) {
									var s = !1;
									o = e.reduce((function(e, r) {
										if (s)
											if (Le(r)) switch (r.value) {
												case "center":
													return i.push(ze), e;
												case "top":
												case "left":
													return i.push(Ve), e;
												case "right":
												case "bottom":
													return i.push(Qe), e
											} else(He(r) || je(r)) && i.push(r);
											else if (Le(r)) switch (r.value) {
											case "circle":
												return t = dt.CIRCLE, !1;
											case jt:
												return t = dt.ELLIPSE, !1;
											case "at":
												return s = !0, !1;
											case Nt:
												return n = ht.CLOSEST_SIDE, !1;
											case "cover":
											case Rt:
												return n = ht.FARTHEST_SIDE, !1;
											case Ht:
											case Ft:
												return n = ht.CLOSEST_CORNER, !1;
											case Ut:
												return n = ht.FARTHEST_CORNER, !1
										} else if (je(r) || He(r)) return Array.isArray(n) || (n = []), n.push(r), !1;
										return e
									}), o)
								}
								if (o) {
									var u = mt(e);
									r.push(u)
								}
							})), {
								size: n,
								shape: t,
								stops: r,
								position: i,
								type: ft.RADIAL_GRADIENT
							}
						},
						"-moz-radial-gradient": Yt,
						"-ms-radial-gradient": Yt,
						"-o-radial-gradient": Yt,
						"-webkit-radial-gradient": Yt,
						"-webkit-gradient": function(e) {
							var t = Je(180),
								n = [],
								r = ft.LINEAR_GRADIENT,
								i = dt.CIRCLE,
								a = ht.FARTHEST_CORNER;
							return Fe(e).forEach((function(e, t) {
								var i = e[0];
								if (0 === t) {
									if (Le(i) && "linear" === i.value) return void(r = ft.LINEAR_GRADIENT);
									if (Le(i) && "radial" === i.value) return void(r = ft.RADIAL_GRADIENT)
								}
								if (i.type === d.FUNCTION)
									if ("from" === i.name) {
										var a = Ze(i.values[0]);
										n.push({
											stop: Ve,
											color: a
										})
									} else if ("to" === i.name) a = Ze(i.values[0]), n.push({
									stop: Qe,
									color: a
								});
								else if ("color-stop" === i.name) {
									var o = i.values.filter(Re);
									if (2 === o.length) {
										a = Ze(o[1]);
										var s = o[0];
										Ie(s) && n.push({
											stop: {
												type: d.PERCENTAGE_TOKEN,
												number: 100 * s.number,
												flags: s.flags
											},
											color: a
										})
									}
								}
							})), r === ft.LINEAR_GRADIENT ? {
								angle: (t + Je(180)) % Je(360),
								stops: n,
								type: r
							} : {
								size: a,
								shape: i,
								stops: n,
								position: [],
								type: r
							}
						}
					},
					Gt = {
						name: "background-image",
						initialValue: "none",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							if (0 === e.length) return [];
							var t = e[0];
							return t.type === d.IDENT_TOKEN && "none" === t.value ? [] : e.filter((function(e) {
								return Re(e) && function(e) {
									return e.type !== d.FUNCTION || Qt[e.name]
								}(e)
							})).map(zt)
						}
					},
					qt = {
						name: "background-origin",
						initialValue: "border-box",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return e.map((function(e) {
								if (Le(e)) switch (e.value) {
									case "padding-box":
										return 1;
									case "content-box":
										return 2
								}
								return 0
							}))
						}
					},
					Wt = {
						name: "background-position",
						initialValue: "0% 0%",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							return Fe(e).map((function(e) {
								return e.filter(He)
							})).map(Ye)
						}
					};
				! function(e) {
					e[e.REPEAT = 0] = "REPEAT", e[e.NO_REPEAT = 1] = "NO_REPEAT", e[e.REPEAT_X = 2] = "REPEAT_X", e[e.REPEAT_Y = 3] = "REPEAT_Y"
				}(Vt || (Vt = {}));
				var Kt, Xt = {
						name: "background-repeat",
						initialValue: "repeat",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return Fe(e).map((function(e) {
								return e.filter(Le).map((function(e) {
									return e.value
								})).join(" ")
							})).map(Jt)
						}
					},
					Jt = function(e) {
						switch (e) {
							case "no-repeat":
								return Vt.NO_REPEAT;
							case "repeat-x":
							case "repeat no-repeat":
								return Vt.REPEAT_X;
							case "repeat-y":
							case "no-repeat repeat":
								return Vt.REPEAT_Y;
							case "repeat":
							default:
								return Vt.REPEAT
						}
					};
				! function(e) {
					e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover"
				}(Kt || (Kt = {}));
				var Zt, en = {
						name: "background-size",
						initialValue: "0",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return Fe(e).map((function(e) {
								return e.filter(tn)
							}))
						}
					},
					tn = function(e) {
						return Le(e) || He(e)
					},
					nn = function(e) {
						return {
							name: "border-" + e + "-color",
							initialValue: "transparent",
							prefix: !1,
							type: ot.TYPE_VALUE,
							format: "color"
						}
					},
					rn = nn("top"),
					an = nn("right"),
					on = nn("bottom"),
					sn = nn("left"),
					un = function(e) {
						return {
							name: "border-radius-" + e,
							initialValue: "0 0",
							prefix: !1,
							type: ot.LIST,
							parse: function(e) {
								return Ye(e.filter(He))
							}
						}
					},
					cn = un("top-left"),
					ln = un("top-right"),
					fn = un("bottom-right"),
					dn = un("bottom-left");
				! function(e) {
					e[e.NONE = 0] = "NONE", e[e.SOLID = 1] = "SOLID"
				}(Zt || (Zt = {}));
				var hn, pn = function(e) {
						return {
							name: "border-" + e + "-style",
							initialValue: "solid",
							prefix: !1,
							type: ot.IDENT_VALUE,
							parse: function(e) {
								switch (e) {
									case "none":
										return Zt.NONE
								}
								return Zt.SOLID
							}
						}
					},
					_n = pn("top"),
					mn = pn("right"),
					bn = pn("bottom"),
					gn = pn("left"),
					vn = function(e) {
						return {
							name: "border-" + e + "-width",
							initialValue: "0",
							type: ot.VALUE,
							prefix: !1,
							parse: function(e) {
								return Me(e) ? e.number : 0
							}
						}
					},
					yn = vn("top"),
					An = vn("right"),
					Sn = vn("bottom"),
					wn = vn("left"),
					En = {
						name: "color",
						initialValue: "transparent",
						prefix: !1,
						type: ot.TYPE_VALUE,
						format: "color"
					},
					Tn = {
						name: "display",
						initialValue: "inline-block",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return e.filter(Le).reduce((function(e, t) {
								return e | Cn(t.value)
							}), 0)
						}
					},
					Cn = function(e) {
						switch (e) {
							case "block":
								return 2;
							case "inline":
								return 4;
							case "run-in":
								return 8;
							case "flow":
								return 16;
							case "flow-root":
								return 32;
							case "table":
								return 64;
							case "flex":
							case "-webkit-flex":
								return 128;
							case "grid":
							case "-ms-grid":
								return 256;
							case "ruby":
								return 512;
							case "subgrid":
								return 1024;
							case "list-item":
								return 2048;
							case "table-row-group":
								return 4096;
							case "table-header-group":
								return 8192;
							case "table-footer-group":
								return 16384;
							case "table-row":
								return 32768;
							case "table-cell":
								return 65536;
							case "table-column-group":
								return 131072;
							case "table-column":
								return 262144;
							case "table-caption":
								return 524288;
							case "ruby-base":
								return 1048576;
							case "ruby-text":
								return 2097152;
							case "ruby-base-container":
								return 4194304;
							case "ruby-text-container":
								return 8388608;
							case "contents":
								return 16777216;
							case "inline-block":
								return 33554432;
							case "inline-list-item":
								return 67108864;
							case "inline-table":
								return 134217728;
							case "inline-flex":
								return 268435456;
							case "inline-grid":
								return 536870912
						}
						return 0
					};
				! function(e) {
					e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.INLINE_START = 3] = "INLINE_START", e[e.INLINE_END = 4] = "INLINE_END"
				}(hn || (hn = {}));
				var $n, kn = {
						name: "float",
						initialValue: "none",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "left":
									return hn.LEFT;
								case "right":
									return hn.RIGHT;
								case "inline-start":
									return hn.INLINE_START;
								case "inline-end":
									return hn.INLINE_END
							}
							return hn.NONE
						}
					},
					On = {
						name: "letter-spacing",
						initialValue: "0",
						prefix: !1,
						type: ot.VALUE,
						parse: function(e) {
							return e.type === d.IDENT_TOKEN && "normal" === e.value ? 0 : e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN ? e.number : 0
						}
					};
				! function(e) {
					e.NORMAL = "normal", e.STRICT = "strict"
				}($n || ($n = {}));
				var xn, Pn = {
						name: "line-break",
						initialValue: "normal",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "strict":
									return $n.STRICT;
								case "normal":
								default:
									return $n.NORMAL
							}
						}
					},
					Mn = {
						name: "line-height",
						initialValue: "normal",
						prefix: !1,
						type: ot.TOKEN_VALUE
					},
					In = function(e, t) {
						return Le(e) && "normal" === e.value ? 1.2 * t : e.type === d.NUMBER_TOKEN ? t * e.number : He(e) ? qe(e, t) : t
					},
					Ln = {
						name: "list-style-image",
						initialValue: "none",
						type: ot.VALUE,
						prefix: !1,
						parse: function(e) {
							return e.type === d.IDENT_TOKEN && "none" === e.value ? null : zt(e)
						}
					};
				! function(e) {
					e[e.INSIDE = 0] = "INSIDE", e[e.OUTSIDE = 1] = "OUTSIDE"
				}(xn || (xn = {}));
				var Dn, Bn = {
					name: "list-style-position",
					initialValue: "outside",
					prefix: !1,
					type: ot.IDENT_VALUE,
					parse: function(e) {
						switch (e) {
							case "inside":
								return xn.INSIDE;
							case "outside":
							default:
								return xn.OUTSIDE
						}
					}
				};
				! function(e) {
					e[e.NONE = -1] = "NONE", e[e.DISC = 0] = "DISC", e[e.CIRCLE = 1] = "CIRCLE", e[e.SQUARE = 2] = "SQUARE", e[e.DECIMAL = 3] = "DECIMAL", e[e.CJK_DECIMAL = 4] = "CJK_DECIMAL", e[e.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO", e[e.LOWER_ROMAN = 6] = "LOWER_ROMAN", e[e.UPPER_ROMAN = 7] = "UPPER_ROMAN", e[e.LOWER_GREEK = 8] = "LOWER_GREEK", e[e.LOWER_ALPHA = 9] = "LOWER_ALPHA", e[e.UPPER_ALPHA = 10] = "UPPER_ALPHA", e[e.ARABIC_INDIC = 11] = "ARABIC_INDIC", e[e.ARMENIAN = 12] = "ARMENIAN", e[e.BENGALI = 13] = "BENGALI", e[e.CAMBODIAN = 14] = "CAMBODIAN", e[e.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH", e[e.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM", e[e.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC", e[e.DEVANAGARI = 18] = "DEVANAGARI", e[e.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC", e[e.GEORGIAN = 20] = "GEORGIAN", e[e.GUJARATI = 21] = "GUJARATI", e[e.GURMUKHI = 22] = "GURMUKHI", e[e.HEBREW = 22] = "HEBREW", e[e.HIRAGANA = 23] = "HIRAGANA", e[e.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA", e[e.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL", e[e.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL", e[e.KANNADA = 27] = "KANNADA", e[e.KATAKANA = 28] = "KATAKANA", e[e.KATAKANA_IROHA = 29] = "KATAKANA_IROHA", e[e.KHMER = 30] = "KHMER", e[e.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL", e[e.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL", e[e.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL", e[e.LAO = 34] = "LAO", e[e.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN", e[e.MALAYALAM = 36] = "MALAYALAM", e[e.MONGOLIAN = 37] = "MONGOLIAN", e[e.MYANMAR = 38] = "MYANMAR", e[e.ORIYA = 39] = "ORIYA", e[e.PERSIAN = 40] = "PERSIAN", e[e.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL", e[e.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL", e[e.TAMIL = 43] = "TAMIL", e[e.TELUGU = 44] = "TELUGU", e[e.THAI = 45] = "THAI", e[e.TIBETAN = 46] = "TIBETAN", e[e.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL", e[e.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL", e[e.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN", e[e.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN", e[e.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"
				}(Dn || (Dn = {}));
				var Nn, Rn = {
						name: "list-style-type",
						initialValue: "none",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "disc":
									return Dn.DISC;
								case "circle":
									return Dn.CIRCLE;
								case "square":
									return Dn.SQUARE;
								case "decimal":
									return Dn.DECIMAL;
								case "cjk-decimal":
									return Dn.CJK_DECIMAL;
								case "decimal-leading-zero":
									return Dn.DECIMAL_LEADING_ZERO;
								case "lower-roman":
									return Dn.LOWER_ROMAN;
								case "upper-roman":
									return Dn.UPPER_ROMAN;
								case "lower-greek":
									return Dn.LOWER_GREEK;
								case "lower-alpha":
									return Dn.LOWER_ALPHA;
								case "upper-alpha":
									return Dn.UPPER_ALPHA;
								case "arabic-indic":
									return Dn.ARABIC_INDIC;
								case "armenian":
									return Dn.ARMENIAN;
								case "bengali":
									return Dn.BENGALI;
								case "cambodian":
									return Dn.CAMBODIAN;
								case "cjk-earthly-branch":
									return Dn.CJK_EARTHLY_BRANCH;
								case "cjk-heavenly-stem":
									return Dn.CJK_HEAVENLY_STEM;
								case "cjk-ideographic":
									return Dn.CJK_IDEOGRAPHIC;
								case "devanagari":
									return Dn.DEVANAGARI;
								case "ethiopic-numeric":
									return Dn.ETHIOPIC_NUMERIC;
								case "georgian":
									return Dn.GEORGIAN;
								case "gujarati":
									return Dn.GUJARATI;
								case "gurmukhi":
									return Dn.GURMUKHI;
								case "hebrew":
									return Dn.HEBREW;
								case "hiragana":
									return Dn.HIRAGANA;
								case "hiragana-iroha":
									return Dn.HIRAGANA_IROHA;
								case "japanese-formal":
									return Dn.JAPANESE_FORMAL;
								case "japanese-informal":
									return Dn.JAPANESE_INFORMAL;
								case "kannada":
									return Dn.KANNADA;
								case "katakana":
									return Dn.KATAKANA;
								case "katakana-iroha":
									return Dn.KATAKANA_IROHA;
								case "khmer":
									return Dn.KHMER;
								case "korean-hangul-formal":
									return Dn.KOREAN_HANGUL_FORMAL;
								case "korean-hanja-formal":
									return Dn.KOREAN_HANJA_FORMAL;
								case "korean-hanja-informal":
									return Dn.KOREAN_HANJA_INFORMAL;
								case "lao":
									return Dn.LAO;
								case "lower-armenian":
									return Dn.LOWER_ARMENIAN;
								case "malayalam":
									return Dn.MALAYALAM;
								case "mongolian":
									return Dn.MONGOLIAN;
								case "myanmar":
									return Dn.MYANMAR;
								case "oriya":
									return Dn.ORIYA;
								case "persian":
									return Dn.PERSIAN;
								case "simp-chinese-formal":
									return Dn.SIMP_CHINESE_FORMAL;
								case "simp-chinese-informal":
									return Dn.SIMP_CHINESE_INFORMAL;
								case "tamil":
									return Dn.TAMIL;
								case "telugu":
									return Dn.TELUGU;
								case "thai":
									return Dn.THAI;
								case "tibetan":
									return Dn.TIBETAN;
								case "trad-chinese-formal":
									return Dn.TRAD_CHINESE_FORMAL;
								case "trad-chinese-informal":
									return Dn.TRAD_CHINESE_INFORMAL;
								case "upper-armenian":
									return Dn.UPPER_ARMENIAN;
								case "disclosure-open":
									return Dn.DISCLOSURE_OPEN;
								case "disclosure-closed":
									return Dn.DISCLOSURE_CLOSED;
								case "none":
								default:
									return Dn.NONE
							}
						}
					},
					Fn = function(e) {
						return {
							name: "margin-" + e,
							initialValue: "0",
							prefix: !1,
							type: ot.TOKEN_VALUE
						}
					},
					Un = Fn("top"),
					jn = Fn("right"),
					Hn = Fn("bottom"),
					Yn = Fn("left");
				! function(e) {
					e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.SCROLL = 2] = "SCROLL", e[e.AUTO = 3] = "AUTO"
				}(Nn || (Nn = {}));
				var Vn, zn = {
					name: "overflow",
					initialValue: "visible",
					prefix: !1,
					type: ot.LIST,
					parse: function(e) {
						return e.filter(Le).map((function(e) {
							switch (e.value) {
								case "hidden":
									return Nn.HIDDEN;
								case "scroll":
									return Nn.SCROLL;
								case "auto":
									return Nn.AUTO;
								case "visible":
								default:
									return Nn.VISIBLE
							}
						}))
					}
				};
				! function(e) {
					e.NORMAL = "normal", e.BREAK_WORD = "break-word"
				}(Vn || (Vn = {}));
				var Qn, Gn = {
						name: "overflow-wrap",
						initialValue: "normal",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "break-word":
									return Vn.BREAK_WORD;
								case "normal":
								default:
									return Vn.NORMAL
							}
						}
					},
					qn = function(e) {
						return {
							name: "padding-" + e,
							initialValue: "0",
							prefix: !1,
							type: ot.TYPE_VALUE,
							format: "length-percentage"
						}
					},
					Wn = qn("top"),
					Kn = qn("right"),
					Xn = qn("bottom"),
					Jn = qn("left");
				! function(e) {
					e[e.LEFT = 0] = "LEFT", e[e.CENTER = 1] = "CENTER", e[e.RIGHT = 2] = "RIGHT"
				}(Qn || (Qn = {}));
				var Zn, er = {
					name: "text-align",
					initialValue: "left",
					prefix: !1,
					type: ot.IDENT_VALUE,
					parse: function(e) {
						switch (e) {
							case "right":
								return Qn.RIGHT;
							case "center":
							case "justify":
								return Qn.CENTER;
							case "left":
							default:
								return Qn.LEFT
						}
					}
				};
				! function(e) {
					e[e.STATIC = 0] = "STATIC", e[e.RELATIVE = 1] = "RELATIVE", e[e.ABSOLUTE = 2] = "ABSOLUTE", e[e.FIXED = 3] = "FIXED", e[e.STICKY = 4] = "STICKY"
				}(Zn || (Zn = {}));
				var tr, nr = {
						name: "position",
						initialValue: "static",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "relative":
									return Zn.RELATIVE;
								case "absolute":
									return Zn.ABSOLUTE;
								case "fixed":
									return Zn.FIXED;
								case "sticky":
									return Zn.STICKY
							}
							return Zn.STATIC
						}
					},
					rr = {
						name: "text-shadow",
						initialValue: "none",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							return 1 === e.length && Be(e[0], "none") ? [] : Fe(e).map((function(e) {
								for (var t = {
										color: lt.TRANSPARENT,
										offsetX: Ve,
										offsetY: Ve,
										blur: Ve
									}, n = 0, r = 0; r < e.length; r++) {
									var i = e[r];
									je(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : t.blur = i, n++) : t.color = Ze(i)
								}
								return t
							}))
						}
					};
				! function(e) {
					e[e.NONE = 0] = "NONE", e[e.LOWERCASE = 1] = "LOWERCASE", e[e.UPPERCASE = 2] = "UPPERCASE", e[e.CAPITALIZE = 3] = "CAPITALIZE"
				}(tr || (tr = {}));
				var ir, ar = {
						name: "text-transform",
						initialValue: "none",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "uppercase":
									return tr.UPPERCASE;
								case "lowercase":
									return tr.LOWERCASE;
								case "capitalize":
									return tr.CAPITALIZE
							}
							return tr.NONE
						}
					},
					or = {
						name: "transform",
						initialValue: "none",
						prefix: !0,
						type: ot.VALUE,
						parse: function(e) {
							if (e.type === d.IDENT_TOKEN && "none" === e.value) return null;
							if (e.type === d.FUNCTION) {
								var t = sr[e.name];
								if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
								return t(e.values)
							}
							return null
						}
					},
					sr = {
						matrix: function(e) {
							var t = e.filter((function(e) {
								return e.type === d.NUMBER_TOKEN
							})).map((function(e) {
								return e.number
							}));
							return 6 === t.length ? t : null
						},
						matrix3d: function(e) {
							var t = e.filter((function(e) {
									return e.type === d.NUMBER_TOKEN
								})).map((function(e) {
									return e.number
								})),
								n = t[0],
								r = t[1],
								i = (t[2], t[3], t[4]),
								a = t[5],
								o = (t[6], t[7], t[8], t[9], t[10], t[11], t[12]),
								s = t[13];
							return t[14], t[15], 16 === t.length ? [n, r, i, a, o, s] : null
						}
					},
					ur = {
						type: d.PERCENTAGE_TOKEN,
						number: 50,
						flags: 4
					},
					cr = [ur, ur],
					lr = {
						name: "transform-origin",
						initialValue: "50% 50%",
						prefix: !0,
						type: ot.LIST,
						parse: function(e) {
							var t = e.filter(He);
							return 2 !== t.length ? cr : [t[0], t[1]]
						}
					};
				! function(e) {
					e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.COLLAPSE = 2] = "COLLAPSE"
				}(ir || (ir = {}));
				var fr, dr = {
					name: "visible",
					initialValue: "none",
					prefix: !1,
					type: ot.IDENT_VALUE,
					parse: function(e) {
						switch (e) {
							case "hidden":
								return ir.HIDDEN;
							case "collapse":
								return ir.COLLAPSE;
							case "visible":
							default:
								return ir.VISIBLE
						}
					}
				};
				! function(e) {
					e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all"
				}(fr || (fr = {}));
				var hr, pr = {
						name: "word-break",
						initialValue: "normal",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "break-all":
									return fr.BREAK_ALL;
								case "keep-all":
									return fr.KEEP_ALL;
								case "normal":
								default:
									return fr.NORMAL
							}
						}
					},
					_r = {
						name: "z-index",
						initialValue: "auto",
						prefix: !1,
						type: ot.VALUE,
						parse: function(e) {
							if (e.type === d.IDENT_TOKEN) return {
								auto: !0,
								order: 0
							};
							if (Ie(e)) return {
								auto: !1,
								order: e.number
							};
							throw new Error("Invalid z-index number parsed")
						}
					},
					mr = {
						name: "opacity",
						initialValue: "1",
						type: ot.VALUE,
						prefix: !1,
						parse: function(e) {
							return Ie(e) ? e.number : 1
						}
					},
					br = {
						name: "text-decoration-color",
						initialValue: "transparent",
						prefix: !1,
						type: ot.TYPE_VALUE,
						format: "color"
					},
					gr = {
						name: "text-decoration-line",
						initialValue: "none",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							return e.filter(Le).map((function(e) {
								switch (e.value) {
									case "underline":
										return 1;
									case "overline":
										return 2;
									case "line-through":
										return 3;
									case "none":
										return 4
								}
								return 0
							})).filter((function(e) {
								return 0 !== e
							}))
						}
					},
					vr = {
						name: "font-family",
						initialValue: "",
						prefix: !1,
						type: ot.LIST,
						parse: function(e) {
							var t = [],
								n = [];
							return e.forEach((function(e) {
								switch (e.type) {
									case d.IDENT_TOKEN:
									case d.STRING_TOKEN:
										t.push(e.value);
										break;
									case d.NUMBER_TOKEN:
										t.push(e.number.toString());
										break;
									case d.COMMA_TOKEN:
										n.push(t.join(" ")), t.length = 0
								}
							})), t.length && n.push(t.join(" ")), n.map((function(e) {
								return -1 === e.indexOf(" ") ? e : "'" + e + "'"
							}))
						}
					},
					yr = {
						name: "font-size",
						initialValue: "0",
						prefix: !1,
						type: ot.TYPE_VALUE,
						format: "length"
					},
					Ar = {
						name: "font-weight",
						initialValue: "normal",
						type: ot.VALUE,
						prefix: !1,
						parse: function(e) {
							if (Ie(e)) return e.number;
							if (Le(e)) switch (e.value) {
								case "bold":
									return 700;
								case "normal":
								default:
									return 400
							}
							return 400
						}
					},
					Sr = {
						name: "font-variant",
						initialValue: "none",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							return e.filter(Le).map((function(e) {
								return e.value
							}))
						}
					};
				! function(e) {
					e.NORMAL = "normal", e.ITALIC = "italic", e.OBLIQUE = "oblique"
				}(hr || (hr = {}));
				var wr, Er = {
						name: "font-style",
						initialValue: "normal",
						prefix: !1,
						type: ot.IDENT_VALUE,
						parse: function(e) {
							switch (e) {
								case "oblique":
									return hr.OBLIQUE;
								case "italic":
									return hr.ITALIC;
								case "normal":
								default:
									return hr.NORMAL
							}
						}
					},
					Tr = function(e, t) {
						return 0 != (e & t)
					},
					Cr = {
						name: "content",
						initialValue: "none",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							if (0 === e.length) return [];
							var t = e[0];
							return t.type === d.IDENT_TOKEN && "none" === t.value ? [] : e
						}
					},
					$r = {
						name: "counter-increment",
						initialValue: "none",
						prefix: !0,
						type: ot.LIST,
						parse: function(e) {
							if (0 === e.length) return null;
							var t = e[0];
							if (t.type === d.IDENT_TOKEN && "none" === t.value) return null;
							for (var n = [], r = e.filter(Ne), i = 0; i < r.length; i++) {
								var a = r[i],
									o = r[i + 1];
								if (a.type === d.IDENT_TOKEN) {
									var s = o && Ie(o) ? o.number : 1;
									n.push({
										counter: a.value,
										increment: s
									})
								}
							}
							return n
						}
					},
					kr = {
						name: "counter-reset",
						initialValue: "none",
						prefix: !0,
						type: ot.LIST,
						parse: function(e) {
							if (0 === e.length) return [];
							for (var t = [], n = e.filter(Ne), r = 0; r < n.length; r++) {
								var i = n[r],
									a = n[r + 1];
								if (Le(i) && "none" !== i.value) {
									var o = a && Ie(a) ? a.number : 0;
									t.push({
										counter: i.value,
										reset: o
									})
								}
							}
							return t
						}
					},
					Or = {
						name: "quotes",
						initialValue: "none",
						prefix: !0,
						type: ot.LIST,
						parse: function(e) {
							if (0 === e.length) return null;
							var t = e[0];
							if (t.type === d.IDENT_TOKEN && "none" === t.value) return null;
							var n = [],
								r = e.filter(De);
							if (r.length % 2 != 0) return null;
							for (var i = 0; i < r.length; i += 2) {
								var a = r[i].value,
									o = r[i + 1].value;
								n.push({
									open: a,
									close: o
								})
							}
							return n
						}
					},
					xr = function(e, t, n) {
						if (!e) return "";
						var r = e[Math.min(t, e.length - 1)];
						return r ? n ? r.open : r.close : ""
					},
					Pr = {
						name: "box-shadow",
						initialValue: "none",
						type: ot.LIST,
						prefix: !1,
						parse: function(e) {
							return 1 === e.length && Be(e[0], "none") ? [] : Fe(e).map((function(e) {
								for (var t = {
										color: 255,
										offsetX: Ve,
										offsetY: Ve,
										blur: Ve,
										spread: Ve,
										inset: !1
									}, n = 0, r = 0; r < e.length; r++) {
									var i = e[r];
									Be(i, "inset") ? t.inset = !0 : je(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : 2 === n ? t.blur = i : t.spread = i, n++) : t.color = Ze(i)
								}
								return t
							}))
						}
					},
					Mr = function() {
						function e(e) {
							this.backgroundClip = Dr(pt, e.backgroundClip), this.backgroundColor = Dr(_t, e.backgroundColor), this.backgroundImage = Dr(Gt, e.backgroundImage), this.backgroundOrigin = Dr(qt, e.backgroundOrigin), this.backgroundPosition = Dr(Wt, e.backgroundPosition), this.backgroundRepeat = Dr(Xt, e.backgroundRepeat), this.backgroundSize = Dr(en, e.backgroundSize), this.borderTopColor = Dr(rn, e.borderTopColor), this.borderRightColor = Dr(an, e.borderRightColor), this.borderBottomColor = Dr(on, e.borderBottomColor), this.borderLeftColor = Dr(sn, e.borderLeftColor), this.borderTopLeftRadius = Dr(cn, e.borderTopLeftRadius), this.borderTopRightRadius = Dr(ln, e.borderTopRightRadius), this.borderBottomRightRadius = Dr(fn, e.borderBottomRightRadius), this.borderBottomLeftRadius = Dr(dn, e.borderBottomLeftRadius), this.borderTopStyle = Dr(_n, e.borderTopStyle), this.borderRightStyle = Dr(mn, e.borderRightStyle), this.borderBottomStyle = Dr(bn, e.borderBottomStyle), this.borderLeftStyle = Dr(gn, e.borderLeftStyle), this.borderTopWidth = Dr(yn, e.borderTopWidth), this.borderRightWidth = Dr(An, e.borderRightWidth), this.borderBottomWidth = Dr(Sn, e.borderBottomWidth), this.borderLeftWidth = Dr(wn, e.borderLeftWidth), this.boxShadow = Dr(Pr, e.boxShadow), this.color = Dr(En, e.color), this.display = Dr(Tn, e.display), this.float = Dr(kn, e.cssFloat), this.fontFamily = Dr(vr, e.fontFamily), this.fontSize = Dr(yr, e.fontSize), this.fontStyle = Dr(Er, e.fontStyle), this.fontVariant = Dr(Sr, e.fontVariant), this.fontWeight = Dr(Ar, e.fontWeight), this.letterSpacing = Dr(On, e.letterSpacing), this.lineBreak = Dr(Pn, e.lineBreak), this.lineHeight = Dr(Mn, e.lineHeight), this.listStyleImage = Dr(Ln, e.listStyleImage), this.listStylePosition = Dr(Bn, e.listStylePosition), this.listStyleType = Dr(Rn, e.listStyleType), this.marginTop = Dr(Un, e.marginTop), this.marginRight = Dr(jn, e.marginRight), this.marginBottom = Dr(Hn, e.marginBottom), this.marginLeft = Dr(Yn, e.marginLeft), this.opacity = Dr(mr, e.opacity);
							var t = Dr(zn, e.overflow);
							this.overflowX = t[0], this.overflowY = t[t.length > 1 ? 1 : 0], this.overflowWrap = Dr(Gn, e.overflowWrap), this.paddingTop = Dr(Wn, e.paddingTop), this.paddingRight = Dr(Kn, e.paddingRight), this.paddingBottom = Dr(Xn, e.paddingBottom), this.paddingLeft = Dr(Jn, e.paddingLeft), this.position = Dr(nr, e.position), this.textAlign = Dr(er, e.textAlign), this.textDecorationColor = Dr(br, e.textDecorationColor || e.color), this.textDecorationLine = Dr(gr, e.textDecorationLine), this.textShadow = Dr(rr, e.textShadow), this.textTransform = Dr(ar, e.textTransform), this.transform = Dr(or, e.transform), this.transformOrigin = Dr(lr, e.transformOrigin), this.visibility = Dr(dr, e.visibility), this.wordBreak = Dr(pr, e.wordBreak), this.zIndex = Dr(_r, e.zIndex)
						}
						return e.prototype.isVisible = function() {
							return this.display > 0 && this.opacity > 0 && this.visibility === ir.VISIBLE
						}, e.prototype.isTransparent = function() {
							return et(this.backgroundColor)
						}, e.prototype.isTransformed = function() {
							return null !== this.transform
						}, e.prototype.isPositioned = function() {
							return this.position !== Zn.STATIC
						}, e.prototype.isPositionedWithZIndex = function() {
							return this.isPositioned() && !this.zIndex.auto
						}, e.prototype.isFloating = function() {
							return this.float !== hn.NONE
						}, e.prototype.isInlineLevel = function() {
							return Tr(this.display, 4) || Tr(this.display, 33554432) || Tr(this.display, 268435456) || Tr(this.display, 536870912) || Tr(this.display, 67108864) || Tr(this.display, 134217728)
						}, e
					}(),
					Ir = function(e) {
						this.content = Dr(Cr, e.content), this.quotes = Dr(Or, e.quotes)
					},
					Lr = function(e) {
						this.counterIncrement = Dr($r, e.counterIncrement), this.counterReset = Dr(kr, e.counterReset)
					},
					Dr = function(e, t) {
						var n = new xe,
							r = null != t ? t.toString() : e.initialValue;
						n.write(r);
						var i = new Pe(n.read());
						switch (e.type) {
							case ot.IDENT_VALUE:
								var a = i.parseComponentValue();
								return e.parse(Le(a) ? a.value : e.initialValue);
							case ot.VALUE:
								return e.parse(i.parseComponentValue());
							case ot.LIST:
								return e.parse(i.parseComponentValues());
							case ot.TOKEN_VALUE:
								return i.parseComponentValue();
							case ot.TYPE_VALUE:
								switch (e.format) {
									case "angle":
										return We(i.parseComponentValue());
									case "color":
										return Ze(i.parseComponentValue());
									case "image":
										return zt(i.parseComponentValue());
									case "length":
										var o = i.parseComponentValue();
										return je(o) ? o : Ve;
									case "length-percentage":
										var s = i.parseComponentValue();
										return He(s) ? s : Ve
								}
						}
						throw new Error("Attempting to parse unsupported css format type " + e.format)
					},
					Br = function(e) {
						this.styles = new Mr(window.getComputedStyle(e, null)), this.textNodes = [], this.elements = [], null !== this.styles.transform && mi(e) && (e.style.transform = "none"), this.bounds = o(e), this.flags = 0
					},
					Nr = function(e, t) {
						this.text = e, this.bounds = t
					},
					Rr = function(e) {
						var t = e.ownerDocument;
						if (t) {
							var n = t.createElement("html2canvaswrapper");
							n.appendChild(e.cloneNode(!0));
							var r = e.parentNode;
							if (r) {
								r.replaceChild(n, e);
								var i = o(n);
								return n.firstChild && r.replaceChild(n.firstChild, n), i
							}
						}
						return new a(0, 0, 0, 0)
					},
					Fr = function(e, t, n) {
						var r = e.ownerDocument;
						if (!r) throw new Error("Node has no owner document");
						var i = r.createRange();
						return i.setStart(e, t), i.setEnd(e, t + n), a.fromClientRect(i.getBoundingClientRect())
					},
					Ur = function(e, t) {
						return 0 !== t.letterSpacing ? s(e).map((function(e) {
							return u(e)
						})) : jr(e, t)
					},
					jr = function(e, t) {
						for (var n, r = function(e, t) {
								var n = s(e),
									r = X(n, t),
									i = r[0],
									a = r[1],
									o = r[2],
									u = n.length,
									c = 0,
									l = 0;
								return {
									next: function() {
										if (l >= u) return {
											done: !0,
											value: null
										};
										for (var e = F; l < u && (e = K(n, a, i, ++l, o)) === F;);
										if (e !== F || l === u) {
											var t = new J(n, e, c, l);
											return c = l, {
												value: t,
												done: !1
											}
										}
										return {
											done: !0,
											value: null
										}
									}
								}
							}(e, {
								lineBreak: t.lineBreak,
								wordBreak: t.overflowWrap === Vn.BREAK_WORD ? "break-word" : t.wordBreak
							}), i = []; !(n = r.next()).done;) n.value && i.push(n.value.slice());
						return i
					},
					Hr = function(e, t) {
						this.text = Yr(e.data, t.textTransform), this.textBounds = function(e, t, n) {
							var r = Ur(e, t),
								i = [],
								a = 0;
							return r.forEach((function(e) {
								if (t.textDecorationLine.length || e.trim().length > 0)
									if (Tt.SUPPORT_RANGE_BOUNDS) i.push(new Nr(e, Fr(n, a, e.length)));
									else {
										var r = n.splitText(e.length);
										i.push(new Nr(e, Rr(n))), n = r
									}
								else Tt.SUPPORT_RANGE_BOUNDS || (n = n.splitText(e.length));
								a += e.length
							})), i
						}(this.text, t, e)
					},
					Yr = function(e, t) {
						switch (t) {
							case tr.LOWERCASE:
								return e.toLowerCase();
							case tr.CAPITALIZE:
								return e.replace(Vr, zr);
							case tr.UPPERCASE:
								return e.toUpperCase();
							default:
								return e
						}
					},
					Vr = /(^|\s|:|-|\(|\))([a-z])/g,
					zr = function(e, t, n) {
						return e.length > 0 ? t + n.toUpperCase() : e
					},
					Qr = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							return n.src = t.currentSrc || t.src, n.intrinsicWidth = t.naturalWidth, n.intrinsicHeight = t.naturalHeight, $t.getInstance().addImage(n.src), n
						}
						return t(n, e), n
					}(Br),
					Gr = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							return n.canvas = t, n.intrinsicWidth = t.width, n.intrinsicHeight = t.height, n
						}
						return t(n, e), n
					}(Br),
					qr = function(e) {
						function n(t) {
							var n = e.call(this, t) || this,
								r = new XMLSerializer;
							return n.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(t)), n.intrinsicWidth = t.width.baseVal.value, n.intrinsicHeight = t.height.baseVal.value, $t.getInstance().addImage(n.svg), n
						}
						return t(n, e), n
					}(Br),
					Wr = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							return n.value = t.value, n
						}
						return t(n, e), n
					}(Br),
					Kr = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							return n.start = t.start, n.reversed = "boolean" == typeof t.reversed && !0 === t.reversed, n
						}
						return t(n, e), n
					}(Br),
					Xr = [{
						type: d.DIMENSION_TOKEN,
						flags: 0,
						unit: "px",
						number: 3
					}],
					Jr = [{
						type: d.PERCENTAGE_TOKEN,
						flags: 0,
						number: 50
					}],
					Zr = "checkbox",
					ei = "radio",
					ti = "password",
					ni = 707406591,
					ri = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							switch (n.type = t.type.toLowerCase(), n.checked = t.checked, n.value = function(e) {
								var t = e.type === ti ? new Array(e.value.length + 1).join("â€¢") : e.value;
								return 0 === t.length ? e.placeholder || "" : t
							}(t), n.type !== Zr && n.type !== ei || (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = Zt.SOLID, n.styles.backgroundClip = [st.BORDER_BOX], n.styles.backgroundOrigin = [0], n.bounds = function(e) {
								return e.width > e.height ? new a(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new a(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e
							}(n.bounds)), n.type) {
								case Zr:
									n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Xr;
									break;
								case ei:
									n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Jr
							}
							return n
						}
						return t(n, e), n
					}(Br),
					ii = function(e) {
						function n(t) {
							var n = e.call(this, t) || this,
								r = t.options[t.selectedIndex || 0];
							return n.value = r && r.text || "", n
						}
						return t(n, e), n
					}(Br),
					ai = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							return n.value = t.value, n
						}
						return t(n, e), n
					}(Br),
					oi = function(e) {
						return Ze(Pe.create(e).parseComponentValue())
					},
					si = function(e) {
						function n(t) {
							var n = e.call(this, t) || this;
							n.src = t.src, n.width = parseInt(t.width, 10) || 0, n.height = parseInt(t.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
							try {
								if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
									n.tree = fi(t.contentWindow.document.documentElement);
									var r = t.contentWindow.document.documentElement ? oi(getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : lt.TRANSPARENT,
										i = t.contentWindow.document.body ? oi(getComputedStyle(t.contentWindow.document.body).backgroundColor) : lt.TRANSPARENT;
									n.backgroundColor = et(r) ? et(i) ? n.styles.backgroundColor : i : r
								}
							} catch (e) {}
							return n
						}
						return t(n, e), n
					}(Br),
					ui = ["OL", "UL", "MENU"],
					ci = function(e, t, n) {
						for (var r = e.firstChild, i = void 0; r; r = i)
							if (i = r.nextSibling, pi(r) && r.data.trim().length > 0) t.textNodes.push(new Hr(r, t.styles));
							else if (_i(r)) {
							var a = li(r);
							a.styles.isVisible() && (di(r, a, n) ? a.flags |= 4 : hi(a.styles) && (a.flags |= 2), -1 !== ui.indexOf(r.tagName) && (a.flags |= 8), t.elements.push(a), ki(r) || Ai(r) || Oi(r) || ci(r, a, n))
						}
					},
					li = function(e) {
						return Ei(e) ? new Qr(e) : wi(e) ? new Gr(e) : Ai(e) ? new qr(e) : gi(e) ? new Wr(e) : vi(e) ? new Kr(e) : yi(e) ? new ri(e) : Oi(e) ? new ii(e) : ki(e) ? new ai(e) : Ti(e) ? new si(e) : new Br(e)
					},
					fi = function(e) {
						var t = li(e);
						return t.flags |= 4, ci(e, t, t), t
					},
					di = function(e, t, n) {
						return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || Si(e) && n.styles.isTransparent()
					},
					hi = function(e) {
						return e.isPositioned() || e.isFloating()
					},
					pi = function(e) {
						return e.nodeType === Node.TEXT_NODE
					},
					_i = function(e) {
						return e.nodeType === Node.ELEMENT_NODE
					},
					mi = function(e) {
						return _i(e) && void 0 !== e.style && !bi(e)
					},
					bi = function(e) {
						return "object" == typeof e.className
					},
					gi = function(e) {
						return "LI" === e.tagName
					},
					vi = function(e) {
						return "OL" === e.tagName
					},
					yi = function(e) {
						return "INPUT" === e.tagName
					},
					Ai = function(e) {
						return "svg" === e.tagName
					},
					Si = function(e) {
						return "BODY" === e.tagName
					},
					wi = function(e) {
						return "CANVAS" === e.tagName
					},
					Ei = function(e) {
						return "IMG" === e.tagName
					},
					Ti = function(e) {
						return "IFRAME" === e.tagName
					},
					Ci = function(e) {
						return "STYLE" === e.tagName
					},
					$i = function(e) {
						return "SCRIPT" === e.tagName
					},
					ki = function(e) {
						return "TEXTAREA" === e.tagName
					},
					Oi = function(e) {
						return "SELECT" === e.tagName
					},
					xi = function() {
						function e() {
							this.counters = {}
						}
						return e.prototype.getCounterValue = function(e) {
							var t = this.counters[e];
							return t && t.length ? t[t.length - 1] : 1
						}, e.prototype.getCounterValues = function(e) {
							return this.counters[e] || []
						}, e.prototype.pop = function(e) {
							var t = this;
							e.forEach((function(e) {
								return t.counters[e].pop()
							}))
						}, e.prototype.parse = function(e) {
							var t = this,
								n = e.counterIncrement,
								r = e.counterReset,
								i = !0;
							null !== n && n.forEach((function(e) {
								var n = t.counters[e.counter];
								n && 0 !== e.increment && (i = !1, n[Math.max(0, n.length - 1)] += e.increment)
							}));
							var a = [];
							return i && r.forEach((function(e) {
								var n = t.counters[e.counter];
								a.push(e.counter), n || (n = t.counters[e.counter] = []), n.push(e.reset)
							})), a
						}, e
					}(),
					Pi = {
						integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
						values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
					},
					Mi = {
						integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
						values: ["Õ”", "Õ“", "Õ’", "Õ‘", "Õ", "Õ", "ÕŽ", "Õ", "ÕŒ", "Õ‹", "ÕŠ", "Õ‰", "Õˆ", "Õ‡", "Õ†", "Õ…", "Õ„", "Õƒ", "Õ‚", "Õ", "Õ€", "Ô¿", "Ô¾", "Ô½", "Ô¼", "Ô»", "Ôº", "Ô¹", "Ô¸", "Ô·", "Ô¶", "Ôµ", "Ô´", "Ô³", "Ô²", "Ô±"]
					},
					Ii = {
						integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
						values: ["×™×³", "×˜×³", "×—×³", "×–×³", "×•×³", "×”×³", "×“×³", "×’×³", "×‘×³", "××³", "×ª", "×©", "×¨", "×§", "×¦", "×¤", "×¢", "×¡", "× ", "×ž", "×œ", "×›", "×™×˜", "×™×—", "×™×–", "×˜×–", "×˜×•", "×™", "×˜", "×—", "×–", "×•", "×”", "×“", "×’", "×‘", "×"]
					},
					Li = {
						integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
						values: ["áƒµ", "áƒ°", "áƒ¯", "áƒ´", "áƒ®", "áƒ­", "áƒ¬", "áƒ«", "áƒª", "áƒ©", "áƒ¨", "áƒ§", "áƒ¦", "áƒ¥", "áƒ¤", "áƒ³", "áƒ¢", "áƒ¡", "áƒ ", "áƒŸ", "áƒž", "áƒ", "áƒ²", "áƒœ", "áƒ›", "áƒš", "áƒ™", "áƒ˜", "áƒ—", "áƒ±", "áƒ–", "áƒ•", "áƒ”", "áƒ“", "áƒ’", "áƒ‘", "áƒ"]
					},
					Di = function(e, t, n, r, i, a) {
						return e < t || e > n ? ji(e, i, a.length > 0) : r.integers.reduce((function(t, n, i) {
							for (; e >= n;) e -= n, t += r.values[i];
							return t
						}), "") + a
					},
					Bi = function(e, t, n, r) {
						var i = "";
						do {
							n || e--, i = r(e) + i, e /= t
						} while (e * t >= t);
						return i
					},
					Ni = function(e, t, n, r, i) {
						var a = n - t + 1;
						return (e < 0 ? "-" : "") + (Bi(Math.abs(e), a, r, (function(e) {
							return u(Math.floor(e % a) + t)
						})) + i)
					},
					Ri = function(e, t, n) {
						void 0 === n && (n = ". ");
						var r = t.length;
						return Bi(Math.abs(e), r, !1, (function(e) {
							return t[Math.floor(e % r)]
						})) + n
					},
					Fi = function(e, t, n, r, i, a) {
						if (e < -9999 || e > 9999) return ji(e, Dn.CJK_DECIMAL, i.length > 0);
						var o = Math.abs(e),
							s = i;
						if (0 === o) return t[0] + s;
						for (var u = 0; o > 0 && u <= 4; u++) {
							var c = o % 10;
							0 === c && Tr(a, 1) && "" !== s ? s = t[c] + s : c > 1 || 1 === c && 0 === u || 1 === c && 1 === u && Tr(a, 2) || 1 === c && 1 === u && Tr(a, 4) && e > 100 || 1 === c && u > 1 && Tr(a, 8) ? s = t[c] + (u > 0 ? n[u - 1] : "") + s : 1 === c && u > 0 && (s = n[u - 1] + s), o = Math.floor(o / 10)
						}
						return (e < 0 ? r : "") + s
					},
					Ui = "ë§ˆì´ë„ˆìŠ¤",
					ji = function(e, t, n) {
						var r = n ? ". " : "",
							i = n ? "ã€" : "",
							a = n ? ", " : "",
							o = n ? " " : "";
						switch (t) {
							case Dn.DISC:
								return "â€¢" + o;
							case Dn.CIRCLE:
								return "â—¦" + o;
							case Dn.SQUARE:
								return "â—¾" + o;
							case Dn.DECIMAL_LEADING_ZERO:
								var s = Ni(e, 48, 57, !0, r);
								return s.length < 4 ? "0" + s : s;
							case Dn.CJK_DECIMAL:
								return Ri(e, "ã€‡ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", i);
							case Dn.LOWER_ROMAN:
								return Di(e, 1, 3999, Pi, Dn.DECIMAL, r).toLowerCase();
							case Dn.UPPER_ROMAN:
								return Di(e, 1, 3999, Pi, Dn.DECIMAL, r);
							case Dn.LOWER_GREEK:
								return Ni(e, 945, 969, !1, r);
							case Dn.LOWER_ALPHA:
								return Ni(e, 97, 122, !1, r);
							case Dn.UPPER_ALPHA:
								return Ni(e, 65, 90, !1, r);
							case Dn.ARABIC_INDIC:
								return Ni(e, 1632, 1641, !0, r);
							case Dn.ARMENIAN:
							case Dn.UPPER_ARMENIAN:
								return Di(e, 1, 9999, Mi, Dn.DECIMAL, r);
							case Dn.LOWER_ARMENIAN:
								return Di(e, 1, 9999, Mi, Dn.DECIMAL, r).toLowerCase();
							case Dn.BENGALI:
								return Ni(e, 2534, 2543, !0, r);
							case Dn.CAMBODIAN:
							case Dn.KHMER:
								return Ni(e, 6112, 6121, !0, r);
							case Dn.CJK_EARTHLY_BRANCH:
								return Ri(e, "å­ä¸‘å¯…å¯è¾°å·³åˆæœªç”³é…‰æˆŒäº¥", i);
							case Dn.CJK_HEAVENLY_STEM:
								return Ri(e, "ç”²ä¹™ä¸™ä¸æˆŠå·±åºšè¾›å£¬ç™¸", i);
							case Dn.CJK_IDEOGRAPHIC:
							case Dn.TRAD_CHINESE_INFORMAL:
								return Fi(e, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", "è² ", i, 14);
							case Dn.TRAD_CHINESE_FORMAL:
								return Fi(e, "é›¶å£¹è²³åƒè‚†ä¼é™¸æŸ’æŒçŽ–", "æ‹¾ä½°ä»Ÿè¬", "è² ", i, 15);
							case Dn.SIMP_CHINESE_INFORMAL:
								return Fi(e, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", "è´Ÿ", i, 14);
							case Dn.SIMP_CHINESE_FORMAL:
								return Fi(e, "é›¶å£¹è´°åè‚†ä¼é™†æŸ’æŒçŽ–", "æ‹¾ä½°ä»Ÿè¬", "è´Ÿ", i, 15);
							case Dn.JAPANESE_INFORMAL:
								return Fi(e, "ã€‡ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒä¸‡", "ãƒžã‚¤ãƒŠã‚¹", i, 0);
							case Dn.JAPANESE_FORMAL:
								return Fi(e, "é›¶å£±å¼å‚å››ä¼å…­ä¸ƒå…«ä¹", "æ‹¾ç™¾åƒä¸‡", "ãƒžã‚¤ãƒŠã‚¹", i, 7);
							case Dn.KOREAN_HANGUL_FORMAL:
								return Fi(e, "ì˜ì¼ì´ì‚¼ì‚¬ì˜¤ìœ¡ì¹ íŒ”êµ¬", "ì‹­ë°±ì²œë§Œ", Ui, a, 7);
							case Dn.KOREAN_HANJA_INFORMAL:
								return Fi(e, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", Ui, a, 0);
							case Dn.KOREAN_HANJA_FORMAL:
								return Fi(e, "é›¶å£¹è²³åƒå››äº”å…­ä¸ƒå…«ä¹", "æ‹¾ç™¾åƒ", Ui, a, 7);
							case Dn.DEVANAGARI:
								return Ni(e, 2406, 2415, !0, r);
							case Dn.GEORGIAN:
								return Di(e, 1, 19999, Li, Dn.DECIMAL, r);
							case Dn.GUJARATI:
								return Ni(e, 2790, 2799, !0, r);
							case Dn.GURMUKHI:
								return Ni(e, 2662, 2671, !0, r);
							case Dn.HEBREW:
								return Di(e, 1, 10999, Ii, Dn.DECIMAL, r);
							case Dn.HIRAGANA:
								return Ri(e, "ã‚ã„ã†ãˆãŠã‹ããã‘ã“ã•ã—ã™ã›ããŸã¡ã¤ã¦ã¨ãªã«ã¬ã­ã®ã¯ã²ãµã¸ã»ã¾ã¿ã‚€ã‚ã‚‚ã‚„ã‚†ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚ã‚ã‚‘ã‚’ã‚“");
							case Dn.HIRAGANA_IROHA:
								return Ri(e, "ã„ã‚ã¯ã«ã»ã¸ã¨ã¡ã‚Šã¬ã‚‹ã‚’ã‚ã‹ã‚ˆãŸã‚Œãã¤ã­ãªã‚‰ã‚€ã†ã‚ã®ãŠãã‚„ã¾ã‘ãµã“ãˆã¦ã‚ã•ãã‚†ã‚ã¿ã—ã‚‘ã²ã‚‚ã›ã™");
							case Dn.KANNADA:
								return Ni(e, 3302, 3311, !0, r);
							case Dn.KATAKANA:
								return Ri(e, "ã‚¢ã‚¤ã‚¦ã‚¨ã‚ªã‚«ã‚­ã‚¯ã‚±ã‚³ã‚µã‚·ã‚¹ã‚»ã‚½ã‚¿ãƒãƒ„ãƒ†ãƒˆãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒ’ãƒ•ãƒ˜ãƒ›ãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ¤ãƒ¦ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³", i);
							case Dn.KATAKANA_IROHA:
								return Ri(e, "ã‚¤ãƒ­ãƒãƒ‹ãƒ›ãƒ˜ãƒˆãƒãƒªãƒŒãƒ«ãƒ²ãƒ¯ã‚«ãƒ¨ã‚¿ãƒ¬ã‚½ãƒ„ãƒãƒŠãƒ©ãƒ ã‚¦ãƒ°ãƒŽã‚ªã‚¯ãƒ¤ãƒžã‚±ãƒ•ã‚³ã‚¨ãƒ†ã‚¢ã‚µã‚­ãƒ¦ãƒ¡ãƒŸã‚·ãƒ±ãƒ’ãƒ¢ã‚»ã‚¹", i);
							case Dn.LAO:
								return Ni(e, 3792, 3801, !0, r);
							case Dn.MONGOLIAN:
								return Ni(e, 6160, 6169, !0, r);
							case Dn.MYANMAR:
								return Ni(e, 4160, 4169, !0, r);
							case Dn.ORIYA:
								return Ni(e, 2918, 2927, !0, r);
							case Dn.PERSIAN:
								return Ni(e, 1776, 1785, !0, r);
							case Dn.TAMIL:
								return Ni(e, 3046, 3055, !0, r);
							case Dn.TELUGU:
								return Ni(e, 3174, 3183, !0, r);
							case Dn.THAI:
								return Ni(e, 3664, 3673, !0, r);
							case Dn.TIBETAN:
								return Ni(e, 3872, 3881, !0, r);
							case Dn.DECIMAL:
							default:
								return Ni(e, 48, 57, !0, r)
						}
					},
					Hi = "data-html2canvas-ignore",
					Yi = function() {
						function e(e, t) {
							if (this.options = t, this.scrolledElements = [], this.referenceElement = e, this.counters = new xi, this.quoteDepth = 0, !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
							this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
						}
						return e.prototype.toIFrame = function(e, t) {
							var n = this,
								a = zi(e, t);
							if (!a.contentWindow) return Promise.reject("Unable to find iframe window");
							var o = e.defaultView.pageXOffset,
								s = e.defaultView.pageYOffset,
								u = a.contentWindow,
								c = u.document,
								l = Qi(a).then((function() {
									return r(n, void 0, void 0, (function() {
										var e;
										return i(this, (function(n) {
											switch (n.label) {
												case 0:
													return this.scrolledElements.forEach(Ki), u && (u.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || u.scrollY === t.top && u.scrollX === t.left || (c.documentElement.style.top = -t.top + "px", c.documentElement.style.left = -t.left + "px", c.documentElement.style.position = "absolute")), e = this.options.onclone, void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
												case 1:
													n.sent(), n.label = 2;
												case 2:
													return "function" == typeof e ? [2, Promise.resolve().then((function() {
														return e(c)
													})).then((function() {
														return a
													}))] : [2, a]
											}
										}))
									}))
								}));
							return c.open(), c.write(qi(document.doctype) + "<html></html>"), Wi(this.referenceElement.ownerDocument, o, s), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), l
						}, e.prototype.createElementClone = function(e) {
							if (wi(e)) return this.createCanvasClone(e);
							if (Ci(e)) return this.createStyleClone(e);
							var t = e.cloneNode(!1);
							return Ei(t) && "lazy" === t.loading && (t.loading = "eager"), t
						}, e.prototype.createStyleClone = function(e) {
							try {
								var t = e.sheet;
								if (t && t.cssRules) {
									var n = [].slice.call(t.cssRules, 0).reduce((function(e, t) {
											return t && "string" == typeof t.cssText ? e + t.cssText : e
										}), ""),
										r = e.cloneNode(!1);
									return r.textContent = n, r
								}
							} catch (e) {
								if (Ct.getInstance(this.options.id).error("Unable to access cssRules property", e), "SecurityError" !== e.name) throw e
							}
							return e.cloneNode(!1)
						}, e.prototype.createCanvasClone = function(e) {
							if (this.options.inlineImages && e.ownerDocument) {
								var t = e.ownerDocument.createElement("img");
								try {
									return t.src = e.toDataURL(), t
								} catch (e) {
									Ct.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
								}
							}
							var n = e.cloneNode(!1);
							try {
								n.width = e.width, n.height = e.height;
								var r = e.getContext("2d"),
									i = n.getContext("2d");
								return i && (r ? i.putImageData(r.getImageData(0, 0, e.width, e.height), 0, 0) : i.drawImage(e, 0, 0)), n
							} catch (e) {}
							return n
						}, e.prototype.cloneNode = function(e) {
							if (pi(e)) return document.createTextNode(e.data);
							if (!e.ownerDocument) return e.cloneNode(!1);
							var t = e.ownerDocument.defaultView;
							if (t && _i(e) && (mi(e) || bi(e))) {
								var n = this.createElementClone(e),
									r = t.getComputedStyle(e),
									i = t.getComputedStyle(e, ":before"),
									a = t.getComputedStyle(e, ":after");
								this.referenceElement === e && mi(n) && (this.clonedReferenceElement = n), Si(n) && ea(n);
								for (var o = this.counters.parse(new Lr(r)), s = this.resolvePseudoContent(e, n, i, wr.BEFORE), u = e.firstChild; u; u = u.nextSibling) _i(u) && ($i(u) || u.hasAttribute(Hi) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(u)) || this.options.copyStyles && _i(u) && Ci(u) || n.appendChild(this.cloneNode(u));
								s && n.insertBefore(s, n.firstChild);
								var c = this.resolvePseudoContent(e, n, a, wr.AFTER);
								return c && n.appendChild(c), this.counters.pop(o), r && (this.options.copyStyles || bi(e)) && !Ti(e) && Gi(r, n), 0 === e.scrollTop && 0 === e.scrollLeft || this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (ki(e) || Oi(e)) && (ki(n) || Oi(n)) && (n.value = e.value), n
							}
							return e.cloneNode(!1)
						}, e.prototype.resolvePseudoContent = function(e, t, n, r) {
							var i = this;
							if (n) {
								var a = n.content,
									o = t.ownerDocument;
								if (o && a && "none" !== a && "-moz-alt-content" !== a && "none" !== n.display) {
									this.counters.parse(new Lr(n));
									var s = new Ir(n),
										u = o.createElement("html2canvaspseudoelement");
									Gi(n, u), s.content.forEach((function(t) {
										if (t.type === d.STRING_TOKEN) u.appendChild(o.createTextNode(t.value));
										else if (t.type === d.URL_TOKEN) {
											var n = o.createElement("img");
											n.src = t.value, n.style.opacity = "1", u.appendChild(n)
										} else if (t.type === d.FUNCTION) {
											if ("attr" === t.name) {
												var r = t.values.filter(Le);
												r.length && u.appendChild(o.createTextNode(e.getAttribute(r[0].value) || ""))
											} else if ("counter" === t.name) {
												var a = t.values.filter(Re),
													c = a[0],
													l = a[1];
												if (c && Le(c)) {
													var f = i.counters.getCounterValue(c.value),
														h = l && Le(l) ? Rn.parse(l.value) : Dn.DECIMAL;
													u.appendChild(o.createTextNode(ji(f, h, !1)))
												}
											} else if ("counters" === t.name) {
												var p = t.values.filter(Re),
													_ = (c = p[0], p[1]);
												if (l = p[2], c && Le(c)) {
													var m = i.counters.getCounterValues(c.value),
														b = l && Le(l) ? Rn.parse(l.value) : Dn.DECIMAL,
														g = _ && _.type === d.STRING_TOKEN ? _.value : "",
														v = m.map((function(e) {
															return ji(e, b, !1)
														})).join(g);
													u.appendChild(o.createTextNode(v))
												}
											}
										} else if (t.type === d.IDENT_TOKEN) switch (t.value) {
											case "open-quote":
												u.appendChild(o.createTextNode(xr(s.quotes, i.quoteDepth++, !0)));
												break;
											case "close-quote":
												u.appendChild(o.createTextNode(xr(s.quotes, --i.quoteDepth, !1)));
												break;
											default:
												u.appendChild(o.createTextNode(t.value))
										}
									})), u.className = Xi + " " + Ji;
									var c = r === wr.BEFORE ? " " + Xi : " " + Ji;
									return bi(t) ? t.className.baseValue += c : t.className += c, u
								}
							}
						}, e.destroy = function(e) {
							return !!e.parentNode && (e.parentNode.removeChild(e), !0)
						}, e
					}();
				! function(e) {
					e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER"
				}(wr || (wr = {}));
				var Vi, zi = function(e, t) {
						var n = e.createElement("iframe");
						return n.className = "html2canvas-container", n.style.visibility = "hidden", n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "0px", n.style.border = "0", n.width = t.width.toString(), n.height = t.height.toString(), n.scrolling = "no", n.setAttribute(Hi, "true"), e.body.appendChild(n), n
					},
					Qi = function(e) {
						return new Promise((function(t, n) {
							var r = e.contentWindow;
							if (!r) return n("No window assigned for iframe");
							var i = r.document;
							r.onload = e.onload = i.onreadystatechange = function() {
								r.onload = e.onload = i.onreadystatechange = null;
								var n = setInterval((function() {
									i.body.childNodes.length > 0 && "complete" === i.readyState && (clearInterval(n), t(e))
								}), 50)
							}
						}))
					},
					Gi = function(e, t) {
						for (var n = e.length - 1; n >= 0; n--) {
							var r = e.item(n);
							"content" !== r && t.style.setProperty(r, e.getPropertyValue(r))
						}
						return t
					},
					qi = function(e) {
						var t = "";
						return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += '"' + e.publicId + '"'), e.systemId && (t += '"' + e.systemId + '"'), t += ">"), t
					},
					Wi = function(e, t, n) {
						e && e.defaultView && (t !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, n)
					},
					Ki = function(e) {
						var t = e[0],
							n = e[1],
							r = e[2];
						t.scrollLeft = n, t.scrollTop = r
					},
					Xi = "___html2canvas___pseudoelement_before",
					Ji = "___html2canvas___pseudoelement_after",
					Zi = '{\n    content: "" !important;\n    display: none !important;\n}',
					ea = function(e) {
						ta(e, "." + Xi + ":before" + Zi + "\n         ." + Ji + ":after" + Zi)
					},
					ta = function(e, t) {
						var n = e.ownerDocument;
						if (n) {
							var r = n.createElement("style");
							r.textContent = t, e.appendChild(r)
						}
					};
				! function(e) {
					e[e.VECTOR = 0] = "VECTOR", e[e.BEZIER_CURVE = 1] = "BEZIER_CURVE"
				}(Vi || (Vi = {}));
				var na, ra = function(e, t) {
						return e.length === t.length && e.some((function(e, n) {
							return e === t[n]
						}))
					},
					ia = function() {
						function e(e, t) {
							this.type = Vi.VECTOR, this.x = e, this.y = t
						}
						return e.prototype.add = function(t, n) {
							return new e(this.x + t, this.y + n)
						}, e
					}(),
					aa = function(e, t, n) {
						return new ia(e.x + (t.x - e.x) * n, e.y + (t.y - e.y) * n)
					},
					oa = function() {
						function e(e, t, n, r) {
							this.type = Vi.BEZIER_CURVE, this.start = e, this.startControl = t, this.endControl = n, this.end = r
						}
						return e.prototype.subdivide = function(t, n) {
							var r = aa(this.start, this.startControl, t),
								i = aa(this.startControl, this.endControl, t),
								a = aa(this.endControl, this.end, t),
								o = aa(r, i, t),
								s = aa(i, a, t),
								u = aa(o, s, t);
							return n ? new e(this.start, r, o, u) : new e(u, s, a, this.end)
						}, e.prototype.add = function(t, n) {
							return new e(this.start.add(t, n), this.startControl.add(t, n), this.endControl.add(t, n), this.end.add(t, n))
						}, e.prototype.reverse = function() {
							return new e(this.end, this.endControl, this.startControl, this.start)
						}, e
					}(),
					sa = function(e) {
						return e.type === Vi.BEZIER_CURVE
					},
					ua = function(e) {
						var t = e.styles,
							n = e.bounds,
							r = Ge(t.borderTopLeftRadius, n.width, n.height),
							i = r[0],
							a = r[1],
							o = Ge(t.borderTopRightRadius, n.width, n.height),
							s = o[0],
							u = o[1],
							c = Ge(t.borderBottomRightRadius, n.width, n.height),
							l = c[0],
							f = c[1],
							d = Ge(t.borderBottomLeftRadius, n.width, n.height),
							h = d[0],
							p = d[1],
							_ = [];
						_.push((i + s) / n.width), _.push((h + l) / n.width), _.push((a + p) / n.height), _.push((u + f) / n.height);
						var m = Math.max.apply(Math, _);
						m > 1 && (i /= m, a /= m, s /= m, u /= m, l /= m, f /= m, h /= m, p /= m);
						var b = n.width - s,
							g = n.height - f,
							v = n.width - l,
							y = n.height - p,
							A = t.borderTopWidth,
							S = t.borderRightWidth,
							w = t.borderBottomWidth,
							E = t.borderLeftWidth,
							T = qe(t.paddingTop, e.bounds.width),
							C = qe(t.paddingRight, e.bounds.width),
							$ = qe(t.paddingBottom, e.bounds.width),
							k = qe(t.paddingLeft, e.bounds.width);
						this.topLeftBorderBox = i > 0 || a > 0 ? ca(n.left, n.top, i, a, na.TOP_LEFT) : new ia(n.left, n.top), this.topRightBorderBox = s > 0 || u > 0 ? ca(n.left + b, n.top, s, u, na.TOP_RIGHT) : new ia(n.left + n.width, n.top), this.bottomRightBorderBox = l > 0 || f > 0 ? ca(n.left + v, n.top + g, l, f, na.BOTTOM_RIGHT) : new ia(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = h > 0 || p > 0 ? ca(n.left, n.top + y, h, p, na.BOTTOM_LEFT) : new ia(n.left, n.top + n.height), this.topLeftPaddingBox = i > 0 || a > 0 ? ca(n.left + E, n.top + A, Math.max(0, i - E), Math.max(0, a - A), na.TOP_LEFT) : new ia(n.left + E, n.top + A), this.topRightPaddingBox = s > 0 || u > 0 ? ca(n.left + Math.min(b, n.width + E), n.top + A, b > n.width + E ? 0 : s - E, u - A, na.TOP_RIGHT) : new ia(n.left + n.width - S, n.top + A), this.bottomRightPaddingBox = l > 0 || f > 0 ? ca(n.left + Math.min(v, n.width - E), n.top + Math.min(g, n.height + A), Math.max(0, l - S), f - w, na.BOTTOM_RIGHT) : new ia(n.left + n.width - S, n.top + n.height - w), this.bottomLeftPaddingBox = h > 0 || p > 0 ? ca(n.left + E, n.top + y, Math.max(0, h - E), p - w, na.BOTTOM_LEFT) : new ia(n.left + E, n.top + n.height - w), this.topLeftContentBox = i > 0 || a > 0 ? ca(n.left + E + k, n.top + A + T, Math.max(0, i - (E + k)), Math.max(0, a - (A + T)), na.TOP_LEFT) : new ia(n.left + E + k, n.top + A + T), this.topRightContentBox = s > 0 || u > 0 ? ca(n.left + Math.min(b, n.width + E + k), n.top + A + T, b > n.width + E + k ? 0 : s - E + k, u - (A + T), na.TOP_RIGHT) : new ia(n.left + n.width - (S + C), n.top + A + T), this.bottomRightContentBox = l > 0 || f > 0 ? ca(n.left + Math.min(v, n.width - (E + k)), n.top + Math.min(g, n.height + A + T), Math.max(0, l - (S + C)), f - (w + $), na.BOTTOM_RIGHT) : new ia(n.left + n.width - (S + C), n.top + n.height - (w + $)), this.bottomLeftContentBox = h > 0 || p > 0 ? ca(n.left + E + k, n.top + y, Math.max(0, h - (E + k)), p - (w + $), na.BOTTOM_LEFT) : new ia(n.left + E + k, n.top + n.height - (w + $))
					};
				! function(e) {
					e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
				}(na || (na = {}));
				var ca = function(e, t, n, r, i) {
						var a = (Math.sqrt(2) - 1) / 3 * 4,
							o = n * a,
							s = r * a,
							u = e + n,
							c = t + r;
						switch (i) {
							case na.TOP_LEFT:
								return new oa(new ia(e, c), new ia(e, c - s), new ia(u - o, t), new ia(u, t));
							case na.TOP_RIGHT:
								return new oa(new ia(e, t), new ia(e + o, t), new ia(u, c - s), new ia(u, c));
							case na.BOTTOM_RIGHT:
								return new oa(new ia(u, t), new ia(u, t + s), new ia(e + o, c), new ia(e, c));
							case na.BOTTOM_LEFT:
							default:
								return new oa(new ia(u, c), new ia(u - o, c), new ia(e, t + s), new ia(e, t))
						}
					},
					la = function(e) {
						return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox]
					},
					fa = function(e) {
						return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox]
					},
					da = function(e, t, n) {
						this.type = 0, this.offsetX = e, this.offsetY = t, this.matrix = n, this.target = 6
					},
					ha = function(e, t) {
						this.type = 1, this.target = t, this.path = e
					},
					pa = function(e) {
						this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
					},
					_a = function() {
						function e(e, t) {
							if (this.container = e, this.effects = t.slice(0), this.curves = new ua(e), null !== e.styles.transform) {
								var n = e.bounds.left + e.styles.transformOrigin[0].number,
									r = e.bounds.top + e.styles.transformOrigin[1].number,
									i = e.styles.transform;
								this.effects.push(new da(n, r, i))
							}
							if (e.styles.overflowX !== Nn.VISIBLE) {
								var a = la(this.curves),
									o = fa(this.curves);
								ra(a, o) ? this.effects.push(new ha(a, 6)) : (this.effects.push(new ha(a, 2)), this.effects.push(new ha(o, 4)))
							}
						}
						return e.prototype.getParentEffects = function() {
							var e = this.effects.slice(0);
							if (this.container.styles.overflowX !== Nn.VISIBLE) {
								var t = la(this.curves),
									n = fa(this.curves);
								ra(t, n) || e.push(new ha(n, 6))
							}
							return e
						}, e
					}(),
					ma = function(e, t, n, r) {
						e.container.elements.forEach((function(i) {
							var a = Tr(i.flags, 4),
								o = Tr(i.flags, 2),
								s = new _a(i, e.getParentEffects());
							Tr(i.styles.display, 2048) && r.push(s);
							var u = Tr(i.flags, 8) ? [] : r;
							if (a || o) {
								var c = a || i.styles.isPositioned() ? n : t,
									l = new pa(s);
								if (i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed()) {
									var f = i.styles.zIndex.order;
									if (f < 0) {
										var d = 0;
										c.negativeZIndex.some((function(e, t) {
											return f > e.element.container.styles.zIndex.order ? (d = t, !1) : d > 0
										})), c.negativeZIndex.splice(d, 0, l)
									} else if (f > 0) {
										var h = 0;
										c.positiveZIndex.some((function(e, t) {
											return f >= e.element.container.styles.zIndex.order ? (h = t + 1, !1) : h > 0
										})), c.positiveZIndex.splice(h, 0, l)
									} else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)
								} else i.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
								ma(s, l, a ? l : n, u)
							} else i.styles.isInlineLevel() ? t.inlineLevel.push(s) : t.nonInlineLevel.push(s), ma(s, t, n, u);
							Tr(i.flags, 8) && ba(i, u)
						}))
					},
					ba = function(e, t) {
						for (var n = e instanceof Kr ? e.start : 1, r = e instanceof Kr && e.reversed, i = 0; i < t.length; i++) {
							var a = t[i];
							a.container instanceof Wr && "number" == typeof a.container.value && 0 !== a.container.value && (n = a.container.value), a.listValue = ji(n, a.container.styles.listStyleType, !0), n += r ? -1 : 1
						}
					},
					ga = function(e, t, n, r) {
						var i = [];
						return sa(e) ? i.push(e.subdivide(.5, !1)) : i.push(e), sa(n) ? i.push(n.subdivide(.5, !0)) : i.push(n), sa(r) ? i.push(r.subdivide(.5, !0).reverse()) : i.push(r), sa(t) ? i.push(t.subdivide(.5, !1).reverse()) : i.push(t), i
					},
					va = function(e) {
						var t = e.bounds,
							n = e.styles;
						return t.add(n.borderLeftWidth, n.borderTopWidth, -(n.borderRightWidth + n.borderLeftWidth), -(n.borderTopWidth + n.borderBottomWidth))
					},
					ya = function(e) {
						var t = e.styles,
							n = e.bounds,
							r = qe(t.paddingLeft, n.width),
							i = qe(t.paddingRight, n.width),
							a = qe(t.paddingTop, n.width),
							o = qe(t.paddingBottom, n.width);
						return n.add(r + t.borderLeftWidth, a + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + r + i), -(t.borderTopWidth + t.borderBottomWidth + a + o))
					},
					Aa = function(e, t, n) {
						var r = function(e, t) {
								return 0 === e ? t.bounds : 2 === e ? ya(t) : va(t)
							}(Ta(e.styles.backgroundOrigin, t), e),
							i = function(e, t) {
								return e === st.BORDER_BOX ? t.bounds : e === st.CONTENT_BOX ? ya(t) : va(t)
							}(Ta(e.styles.backgroundClip, t), e),
							a = Ea(Ta(e.styles.backgroundSize, t), n, r),
							o = a[0],
							s = a[1],
							u = Ge(Ta(e.styles.backgroundPosition, t), r.width - o, r.height - s);
						return [Ca(Ta(e.styles.backgroundRepeat, t), u, a, r, i), Math.round(r.left + u[0]), Math.round(r.top + u[1]), o, s]
					},
					Sa = function(e) {
						return Le(e) && e.value === Kt.AUTO
					},
					wa = function(e) {
						return "number" == typeof e
					},
					Ea = function(e, t, n) {
						var r = t[0],
							i = t[1],
							a = t[2],
							o = e[0],
							s = e[1];
						if (He(o) && s && He(s)) return [qe(o, n.width), qe(s, n.height)];
						var u = wa(a);
						if (Le(o) && (o.value === Kt.CONTAIN || o.value === Kt.COVER)) return wa(a) ? n.width / n.height < a != (o.value === Kt.COVER) ? [n.width, n.width / a] : [n.height * a, n.height] : [n.width, n.height];
						var c = wa(r),
							l = wa(i),
							f = c || l;
						if (Sa(o) && (!s || Sa(s))) return c && l ? [r, i] : u || f ? f && u ? [c ? r : i * a, l ? i : r / a] : [c ? r : n.width, l ? i : n.height] : [n.width, n.height];
						if (u) {
							var d = 0,
								h = 0;
							return He(o) ? d = qe(o, n.width) : He(s) && (h = qe(s, n.height)), Sa(o) ? d = h * a : s && !Sa(s) || (h = d / a), [d, h]
						}
						var p = null,
							_ = null;
						if (He(o) ? p = qe(o, n.width) : s && He(s) && (_ = qe(s, n.height)), null === p || s && !Sa(s) || (_ = c && l ? p / r * i : n.height), null !== _ && Sa(o) && (p = c && l ? _ / i * r : n.width), null !== p && null !== _) return [p, _];
						throw new Error("Unable to calculate background-size for element")
					},
					Ta = function(e, t) {
						var n = e[t];
						return void 0 === n ? e[0] : n
					},
					Ca = function(e, t, n, r, i) {
						var a = t[0],
							o = t[1],
							s = n[0],
							u = n[1];
						switch (e) {
							case Vt.REPEAT_X:
								return [new ia(Math.round(r.left), Math.round(r.top + o)), new ia(Math.round(r.left + r.width), Math.round(r.top + o)), new ia(Math.round(r.left + r.width), Math.round(u + r.top + o)), new ia(Math.round(r.left), Math.round(u + r.top + o))];
							case Vt.REPEAT_Y:
								return [new ia(Math.round(r.left + a), Math.round(r.top)), new ia(Math.round(r.left + a + s), Math.round(r.top)), new ia(Math.round(r.left + a + s), Math.round(r.height + r.top)), new ia(Math.round(r.left + a), Math.round(r.height + r.top))];
							case Vt.NO_REPEAT:
								return [new ia(Math.round(r.left + a), Math.round(r.top + o)), new ia(Math.round(r.left + a + s), Math.round(r.top + o)), new ia(Math.round(r.left + a + s), Math.round(r.top + o + u)), new ia(Math.round(r.left + a), Math.round(r.top + o + u))];
							default:
								return [new ia(Math.round(i.left), Math.round(i.top)), new ia(Math.round(i.left + i.width), Math.round(i.top)), new ia(Math.round(i.left + i.width), Math.round(i.height + i.top)), new ia(Math.round(i.left), Math.round(i.height + i.top))]
						}
					},
					$a = "Hidden Text",
					ka = function() {
						function e(e) {
							this._data = {}, this._document = e
						}
						return e.prototype.parseMetrics = function(e, t) {
							var n = this._document.createElement("div"),
								r = this._document.createElement("img"),
								i = this._document.createElement("span"),
								a = this._document.body;
							n.style.visibility = "hidden", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", a.appendChild(n), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode($a)), n.appendChild(i), n.appendChild(r);
							var o = r.offsetTop - i.offsetTop + 2;
							n.removeChild(i), n.appendChild(this._document.createTextNode($a)), n.style.lineHeight = "normal", r.style.verticalAlign = "super";
							var s = r.offsetTop - n.offsetTop + 2;
							return a.removeChild(n), {
								baseline: o,
								middle: s
							}
						}, e.prototype.getMetrics = function(e, t) {
							var n = e + " " + t;
							return void 0 === this._data[n] && (this._data[n] = this.parseMetrics(e, t)), this._data[n]
						}, e
					}(),
					Oa = function() {
						function e(e) {
							this._activeEffects = [], this.canvas = e.canvas ? e.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = e, e.canvas || (this.canvas.width = Math.floor(e.width * e.scale), this.canvas.height = Math.floor(e.height * e.scale), this.canvas.style.width = e.width + "px", this.canvas.style.height = e.height + "px"), this.fontMetrics = new ka(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-e.x + e.scrollX, -e.y + e.scrollY), this.ctx.textBaseline = "bottom", this._activeEffects = [], Ct.getInstance(e.id).debug("Canvas renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale)
						}
						return e.prototype.applyEffects = function(e, t) {
							for (var n = this; this._activeEffects.length;) this.popEffect();
							e.filter((function(e) {
								return Tr(e.target, t)
							})).forEach((function(e) {
								return n.applyEffect(e)
							}))
						}, e.prototype.applyEffect = function(e) {
							this.ctx.save(),
								function(e) {
									return 0 === e.type
								}(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)),
								function(e) {
									return 1 === e.type
								}(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e)
						}, e.prototype.popEffect = function() {
							this._activeEffects.pop(), this.ctx.restore()
						}, e.prototype.renderStack = function(e) {
							return r(this, void 0, void 0, (function() {
								var t;
								return i(this, (function(n) {
									switch (n.label) {
										case 0:
											return (t = e.element.container.styles).isVisible() ? (this.ctx.globalAlpha = t.opacity, [4, this.renderStackContent(e)]) : [3, 2];
										case 1:
											n.sent(), n.label = 2;
										case 2:
											return [2]
									}
								}))
							}))
						}, e.prototype.renderNode = function(e) {
							return r(this, void 0, void 0, (function() {
								return i(this, (function(t) {
									switch (t.label) {
										case 0:
											return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
										case 1:
											return t.sent(), [4, this.renderNodeContent(e)];
										case 2:
											t.sent(), t.label = 3;
										case 3:
											return [2]
									}
								}))
							}))
						}, e.prototype.renderTextWithLetterSpacing = function(e, t) {
							var n = this;
							0 === t ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height) : s(e.text).map((function(e) {
								return u(e)
							})).reduce((function(t, r) {
								return n.ctx.fillText(r, t, e.bounds.top + e.bounds.height), t + n.ctx.measureText(r).width
							}), e.bounds.left)
						}, e.prototype.createFontStyle = function(e) {
							var t = e.fontVariant.filter((function(e) {
									return "normal" === e || "small-caps" === e
								})).join(""),
								n = e.fontFamily.join(", "),
								r = Me(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
							return [
								[e.fontStyle, t, e.fontWeight, r, n].join(" "), n, r
							]
						}, e.prototype.renderTextNode = function(e, t) {
							return r(this, void 0, void 0, (function() {
								var n, r, a, o, s = this;
								return i(this, (function(i) {
									return n = this.createFontStyle(t), r = n[0], a = n[1], o = n[2], this.ctx.font = r, e.textBounds.forEach((function(e) {
										s.ctx.fillStyle = tt(t.color), s.renderTextWithLetterSpacing(e, t.letterSpacing);
										var n = t.textShadow;
										n.length && e.text.trim().length && (n.slice(0).reverse().forEach((function(t) {
											s.ctx.shadowColor = tt(t.color), s.ctx.shadowOffsetX = t.offsetX.number * s.options.scale, s.ctx.shadowOffsetY = t.offsetY.number * s.options.scale, s.ctx.shadowBlur = t.blur.number, s.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height)
										})), s.ctx.shadowColor = "", s.ctx.shadowOffsetX = 0, s.ctx.shadowOffsetY = 0, s.ctx.shadowBlur = 0), t.textDecorationLine.length && (s.ctx.fillStyle = tt(t.textDecorationColor || t.color), t.textDecorationLine.forEach((function(t) {
											switch (t) {
												case 1:
													var n = s.fontMetrics.getMetrics(a, o).baseline;
													s.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top + n), e.bounds.width, 1);
													break;
												case 2:
													s.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top), e.bounds.width, 1);
													break;
												case 3:
													var r = s.fontMetrics.getMetrics(a, o).middle;
													s.ctx.fillRect(e.bounds.left, Math.ceil(e.bounds.top + r), e.bounds.width, 1)
											}
										})))
									})), [2]
								}))
							}))
						}, e.prototype.renderReplacedElement = function(e, t, n) {
							if (n && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
								var r = ya(e),
									i = fa(t);
								this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, e.intrinsicWidth, e.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore()
							}
						}, e.prototype.renderNodeContent = function(t) {
							return r(this, void 0, void 0, (function() {
								var n, r, o, s, u, c, l, f, d, h, p, _, m, b;
								return i(this, (function(i) {
									switch (i.label) {
										case 0:
											this.applyEffects(t.effects, 4), n = t.container, r = t.curves, o = n.styles, s = 0, u = n.textNodes, i.label = 1;
										case 1:
											return s < u.length ? (c = u[s], [4, this.renderTextNode(c, o)]) : [3, 4];
										case 2:
											i.sent(), i.label = 3;
										case 3:
											return s++, [3, 1];
										case 4:
											if (!(n instanceof Qr)) return [3, 8];
											i.label = 5;
										case 5:
											return i.trys.push([5, 7, , 8]), [4, this.options.cache.match(n.src)];
										case 6:
											return _ = i.sent(), this.renderReplacedElement(n, r, _), [3, 8];
										case 7:
											return i.sent(), Ct.getInstance(this.options.id).error("Error loading image " + n.src), [3, 8];
										case 8:
											if (n instanceof Gr && this.renderReplacedElement(n, r, n.canvas), !(n instanceof qr)) return [3, 12];
											i.label = 9;
										case 9:
											return i.trys.push([9, 11, , 12]), [4, this.options.cache.match(n.svg)];
										case 10:
											return _ = i.sent(), this.renderReplacedElement(n, r, _), [3, 12];
										case 11:
											return i.sent(), Ct.getInstance(this.options.id).error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
										case 12:
											return n instanceof si && n.tree ? [4, new e({
												id: this.options.id,
												scale: this.options.scale,
												backgroundColor: n.backgroundColor,
												x: 0,
												y: 0,
												scrollX: 0,
												scrollY: 0,
												width: n.width,
												height: n.height,
												cache: this.options.cache,
												windowWidth: n.width,
												windowHeight: n.height
											}).render(n.tree)] : [3, 14];
										case 13:
											l = i.sent(), n.width && n.height && this.ctx.drawImage(l, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), i.label = 14;
										case 14:
											if (n instanceof ri && (f = Math.min(n.bounds.width, n.bounds.height), n.type === Zr ? n.checked && (this.ctx.save(), this.path([new ia(n.bounds.left + .39363 * f, n.bounds.top + .79 * f), new ia(n.bounds.left + .16 * f, n.bounds.top + .5549 * f), new ia(n.bounds.left + .27347 * f, n.bounds.top + .44071 * f), new ia(n.bounds.left + .39694 * f, n.bounds.top + .5649 * f), new ia(n.bounds.left + .72983 * f, n.bounds.top + .23 * f), new ia(n.bounds.left + .84 * f, n.bounds.top + .34085 * f), new ia(n.bounds.left + .39363 * f, n.bounds.top + .79 * f)]), this.ctx.fillStyle = tt(ni), this.ctx.fill(), this.ctx.restore()) : n.type === ei && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + f / 2, n.bounds.top + f / 2, f / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = tt(ni), this.ctx.fill(), this.ctx.restore())), xa(n) && n.value.length) {
												switch (this.ctx.font = this.createFontStyle(o)[0], this.ctx.fillStyle = tt(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = Ma(n.styles.textAlign), b = ya(n), d = 0, n.styles.textAlign) {
													case Qn.CENTER:
														d += b.width / 2;
														break;
													case Qn.RIGHT:
														d += b.width
												}
												h = b.add(d, 0, 0, -b.height / 2 + 1), this.ctx.save(), this.path([new ia(b.left, b.top), new ia(b.left + b.width, b.top), new ia(b.left + b.width, b.top + b.height), new ia(b.left, b.top + b.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Nr(n.value, h), o.letterSpacing), this.ctx.restore(), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"
											}
											if (!Tr(n.styles.display, 2048)) return [3, 20];
											if (null === n.styles.listStyleImage) return [3, 19];
											if ((p = n.styles.listStyleImage).type !== ft.URL) return [3, 18];
											_ = void 0, m = p.url, i.label = 15;
										case 15:
											return i.trys.push([15, 17, , 18]), [4, this.options.cache.match(m)];
										case 16:
											return _ = i.sent(), this.ctx.drawImage(_, n.bounds.left - (_.width + 10), n.bounds.top), [3, 18];
										case 17:
											return i.sent(), Ct.getInstance(this.options.id).error("Error loading list-style-image " + m), [3, 18];
										case 18:
											return [3, 20];
										case 19:
											t.listValue && n.styles.listStyleType !== Dn.NONE && (this.ctx.font = this.createFontStyle(o)[0], this.ctx.fillStyle = tt(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", b = new a(n.bounds.left, n.bounds.top + qe(n.styles.paddingTop, n.bounds.width), n.bounds.width, In(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Nr(t.listValue, b), o.letterSpacing), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), i.label = 20;
										case 20:
											return [2]
									}
								}))
							}))
						}, e.prototype.renderStackContent = function(e) {
							return r(this, void 0, void 0, (function() {
								var t, n, r, a, o, s, u, c, l, f, d, h, p, _, m;
								return i(this, (function(i) {
									switch (i.label) {
										case 0:
											return [4, this.renderNodeBackgroundAndBorders(e.element)];
										case 1:
											i.sent(), t = 0, n = e.negativeZIndex, i.label = 2;
										case 2:
											return t < n.length ? (m = n[t], [4, this.renderStack(m)]) : [3, 5];
										case 3:
											i.sent(), i.label = 4;
										case 4:
											return t++, [3, 2];
										case 5:
											return [4, this.renderNodeContent(e.element)];
										case 6:
											i.sent(), r = 0, a = e.nonInlineLevel, i.label = 7;
										case 7:
											return r < a.length ? (m = a[r], [4, this.renderNode(m)]) : [3, 10];
										case 8:
											i.sent(), i.label = 9;
										case 9:
											return r++, [3, 7];
										case 10:
											o = 0, s = e.nonPositionedFloats, i.label = 11;
										case 11:
											return o < s.length ? (m = s[o], [4, this.renderStack(m)]) : [3, 14];
										case 12:
											i.sent(), i.label = 13;
										case 13:
											return o++, [3, 11];
										case 14:
											u = 0, c = e.nonPositionedInlineLevel, i.label = 15;
										case 15:
											return u < c.length ? (m = c[u], [4, this.renderStack(m)]) : [3, 18];
										case 16:
											i.sent(), i.label = 17;
										case 17:
											return u++, [3, 15];
										case 18:
											l = 0, f = e.inlineLevel, i.label = 19;
										case 19:
											return l < f.length ? (m = f[l], [4, this.renderNode(m)]) : [3, 22];
										case 20:
											i.sent(), i.label = 21;
										case 21:
											return l++, [3, 19];
										case 22:
											d = 0, h = e.zeroOrAutoZIndexOrTransformedOrOpacity, i.label = 23;
										case 23:
											return d < h.length ? (m = h[d], [4, this.renderStack(m)]) : [3, 26];
										case 24:
											i.sent(), i.label = 25;
										case 25:
											return d++, [3, 23];
										case 26:
											p = 0, _ = e.positiveZIndex, i.label = 27;
										case 27:
											return p < _.length ? (m = _[p], [4, this.renderStack(m)]) : [3, 30];
										case 28:
											i.sent(), i.label = 29;
										case 29:
											return p++, [3, 27];
										case 30:
											return [2]
									}
								}))
							}))
						}, e.prototype.mask = function(e) {
							this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath()
						}, e.prototype.path = function(e) {
							this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath()
						}, e.prototype.formatPath = function(e) {
							var t = this;
							e.forEach((function(e, n) {
								var r = sa(e) ? e.start : e;
								0 === n ? t.ctx.moveTo(r.x, r.y) : t.ctx.lineTo(r.x, r.y), sa(e) && t.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y)
							}))
						}, e.prototype.renderRepeat = function(e, t, n, r) {
							this.path(e), this.ctx.fillStyle = t, this.ctx.translate(n, r), this.ctx.fill(), this.ctx.translate(-n, -r)
						}, e.prototype.resizeImage = function(e, t, n) {
							if (e.width === t && e.height === n) return e;
							var r = this.canvas.ownerDocument.createElement("canvas");
							return r.width = t, r.height = n, r.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, t, n), r
						}, e.prototype.renderBackgroundImage = function(e) {
							return r(this, void 0, void 0, (function() {
								var t, n, r, a, o, s;
								return i(this, (function(u) {
									switch (u.label) {
										case 0:
											t = e.styles.backgroundImage.length - 1, n = function(n) {
												var a, o, s, u, c, l, f, d, h, p, _, m, b, g, v, y, A, S, w, E, T, C, $, k, O, x, P, M, I, L, D;
												return i(this, (function(i) {
													switch (i.label) {
														case 0:
															if (n.type !== ft.URL) return [3, 5];
															a = void 0, o = n.url, i.label = 1;
														case 1:
															return i.trys.push([1, 3, , 4]), [4, r.options.cache.match(o)];
														case 2:
															return a = i.sent(), [3, 4];
														case 3:
															return i.sent(), Ct.getInstance(r.options.id).error("Error loading background-image " + o), [3, 4];
														case 4:
															return a && (s = Aa(e, t, [a.width, a.height, a.width / a.height]), y = s[0], C = s[1], $ = s[2], w = s[3], E = s[4], g = r.ctx.createPattern(r.resizeImage(a, w, E), "repeat"), r.renderRepeat(y, g, C, $)), [3, 6];
														case 5:
															! function(e) {
																return e.type === ft.LINEAR_GRADIENT
															}(n) ? function(e) {
																return e.type === ft.RADIAL_GRADIENT
															}(n) && (v = Aa(e, t, [null, null, null]), y = v[0], A = v[1], S = v[2], w = v[3], E = v[4], T = 0 === n.position.length ? [ze] : n.position, C = qe(T[0], w), $ = qe(T[T.length - 1], E), k = function(e, t, n, r, i) {
																var a = 0,
																	o = 0;
																switch (e.size) {
																	case ht.CLOSEST_SIDE:
																		e.shape === dt.CIRCLE ? a = o = Math.min(Math.abs(t), Math.abs(t - r), Math.abs(n), Math.abs(n - i)) : e.shape === dt.ELLIPSE && (a = Math.min(Math.abs(t), Math.abs(t - r)), o = Math.min(Math.abs(n), Math.abs(n - i)));
																		break;
																	case ht.CLOSEST_CORNER:
																		if (e.shape === dt.CIRCLE) a = o = Math.min(vt(t, n), vt(t, n - i), vt(t - r, n), vt(t - r, n - i));
																		else if (e.shape === dt.ELLIPSE) {
																			var s = Math.min(Math.abs(n), Math.abs(n - i)) / Math.min(Math.abs(t), Math.abs(t - r)),
																				u = yt(r, i, t, n, !0),
																				c = u[0],
																				l = u[1];
																			o = s * (a = vt(c - t, (l - n) / s))
																		}
																		break;
																	case ht.FARTHEST_SIDE:

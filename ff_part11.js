					this.subs.push(o.on(e, "ping", this.onping.bind(this)), o.on(e, "data", this.ondata.bind(this)), o.on(e, "error", this.onerror.bind(this)), o.on(e, "close", this.onclose.bind(this)), o.on(this.decoder, "decoded", this.ondecoded.bind(this)))
				}
				onping() {
					this.emitReserved("ping")
				}
				ondata(e) {
					this.decoder.add(e)
				}
				ondecoded(e) {
					this.emitReserved("packet", e)
				}
				onerror(e) {
					c("error", e), this.emitReserved("error", e)
				}
				socket(e, t) {
					let n = this.nsps[e];
					return n || (n = new i.Socket(this, e, t), this.nsps[e] = n), n
				}
				_destroy(e) {
					const t = Object.keys(this.nsps);
					for (const e of t) {
						if (this.nsps[e].active) return void c("socket %s is still active, skipping close", e)
					}
					this._close()
				}
				_packet(e) {
					c("writing packet %j", e);
					const t = this.encoder.encode(e);
					for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
				}
				cleanup() {
					c("cleanup"), this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
				}
				_close() {
					c("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
				}
				disconnect() {
					return this._close()
				}
				onclose(e) {
					c("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
				}
				reconnect() {
					if (this._reconnecting || this.skipReconnect) return this;
					const e = this;
					if (this.backoff.attempts >= this._reconnectionAttempts) c("reconnect failed"), this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
					else {
						const t = this.backoff.duration();
						c("will wait %dms before reconnect attempt", t), this._reconnecting = !0;
						const n = setTimeout(() => {
							e.skipReconnect || (c("attempting reconnect"), this.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(t => {
								t ? (c("reconnect attempt error"), e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", t)) : (c("reconnect success"), e.onreconnect())
							}))
						}, t);
						this.opts.autoUnref && n.unref(), this.subs.push((function() {
							clearTimeout(n)
						}))
					}
				}
				onreconnect() {
					const e = this.backoff.attempts;
					this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
				}
			}
			t.Manager = l
		},
		"3d5f": function(e, t, n) {
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
			}), t.PlaybackSpeedSelectBox = void 0;
			var i = n("a92a"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.defaultPlaybackSpeeds = [.25, .5, 1, 1.5, 2], n.config = n.mergeConfig(t, {
							cssClasses: ["ui-playbackspeedselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addDefaultItems(), this.onItemSelected.subscribe((function(e, n) {
							t.setPlaybackSpeed(parseFloat(n)), r.selectItem(n)
						}));
						var i = function() {
							var e = t.getPlaybackSpeed();
							r.setSpeed(e)
						};
						t.on(t.exports.PlayerEvent.PlaybackSpeedChanged, i), n.getConfig().events.onUpdated.subscribe(i)
					}, t.prototype.setSpeed = function(e) {
						this.selectItem(String(e)) || (this.clearItems(), this.addDefaultItems([e]), this.selectItem(String(e)))
					}, t.prototype.addDefaultItems = function(e) {
						var t = this;
						void 0 === e && (e = []), this.defaultPlaybackSpeeds.concat(e).sort().forEach((function(e) {
							1 !== e ? t.addItem(String(e), e + "x") : t.addItem(String(e), a.i18n.getLocalizer("normal"))
						}))
					}, t.prototype.clearItems = function() {
						this.items = [], this.selectedItem = null
					}, t
				}(i.SelectBox);
			t.PlaybackSpeedSelectBox = o
		},
		"3de5": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à¯§",
						2: "à¯¨",
						3: "à¯©",
						4: "à¯ª",
						5: "à¯«",
						6: "à¯¬",
						7: "à¯­",
						8: "à¯®",
						9: "à¯¯",
						0: "à¯¦"
					},
					n = {
						"à¯§": "1",
						"à¯¨": "2",
						"à¯©": "3",
						"à¯ª": "4",
						"à¯«": "5",
						"à¯¬": "6",
						"à¯­": "7",
						"à¯®": "8",
						"à¯¯": "9",
						"à¯¦": "0"
					};
				e.defineLocale("ta", {
					months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
					monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
					weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
					weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
					weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, HH:mm",
						LLLL: "dddd, D MMMM YYYY, HH:mm"
					},
					calendar: {
						sameDay: "[à®‡à®©à¯à®±à¯] LT",
						nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
						lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à®‡à®²à¯",
						past: "%s à®®à¯à®©à¯",
						s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
						ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
						m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
						mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
						h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
						hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
						d: "à®’à®°à¯ à®¨à®¾à®³à¯",
						dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
						M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
						MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
						y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
						yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
					},
					dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
					ordinal: function(e) {
						return e + "à®µà®¤à¯"
					},
					preparse: function(e) {
						return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
					meridiem: function(e, t, n) {
						return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
					},
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t || "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3e92": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à³§",
						2: "à³¨",
						3: "à³©",
						4: "à³ª",
						5: "à³«",
						6: "à³¬",
						7: "à³­",
						8: "à³®",
						9: "à³¯",
						0: "à³¦"
					},
					n = {
						"à³§": "1",
						"à³¨": "2",
						"à³©": "3",
						"à³ª": "4",
						"à³«": "5",
						"à³¬": "6",
						"à³­": "7",
						"à³®": "8",
						"à³¯": "9",
						"à³¦": "0"
					};
				e.defineLocale("kn", {
					months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
					monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
					monthsParseExact: !0,
					weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
					weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
					weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm",
						LLLL: "dddd, D MMMM YYYY, A h:mm"
					},
					calendar: {
						sameDay: "[à²‡à²‚à²¦à³] LT",
						nextDay: "[à²¨à²¾à²³à³†] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
						lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à²¨à²‚à²¤à²°",
						past: "%s à²¹à²¿à²‚à²¦à³†",
						s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
						ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
						m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
						mm: "%d à²¨à²¿à²®à²¿à²·",
						h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
						hh: "%d à²—à²‚à²Ÿà³†",
						d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
						dd: "%d à²¦à²¿à²¨",
						M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
						MM: "%d à²¤à²¿à²‚à²—à²³à³",
						y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
						yy: "%d à²µà²°à³à²·"
					},
					preparse: function(e) {
						return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
					ordinal: function(e) {
						return e + "à²¨à³†à³•"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3f8c": function(e, t) {
			e.exports = {}
		},
		"3fcc": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").map,
				a = n("4840"),
				o = r.aTypedArray,
				s = r.aTypedArrayConstructor;
			(0, r.exportTypedArrayMethod)("map", (function(e) {
				return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
					return new(s(a(e, e.constructor)))(t)
				}))
			}))
		},
		"408a": function(e, t, n) {
			var r = n("c6b6");
			e.exports = function(e) {
				if ("number" != typeof e && "Number" != r(e)) throw TypeError("Incorrect invocation");
				return +e
			}
		},
		"408c": function(e, t, n) {
			var r = n("2b3e");
			e.exports = function() {
				return r.Date.now()
			}
		},
		4128: function(e, t, n) {
			var r;
			! function(i) {
				"use strict";
				var a, o, s, u = 9e15,
					c = 1e9,
					l = "0123456789abcdef",
					f = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
					d = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
					h = {
						precision: 20,
						rounding: 4,
						modulo: 1,
						toExpNeg: -7,
						toExpPos: 21,
						minE: -u,
						maxE: u,
						crypto: !1
					},
					p = !0,
					_ = "[DecimalError] ",
					m = _ + "Invalid argument: ",
					b = _ + "Precision limit exceeded",
					g = _ + "crypto unavailable",
					v = "[object Decimal]",
					y = Math.floor,
					A = Math.pow,
					S = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
					w = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
					E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
					T = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
					C = 1e7,
					$ = f.length - 1,
					k = d.length - 1,
					O = {
						toStringTag: v
					};

				function x(e) {
					var t, n, r, i = e.length - 1,
						a = "",
						o = e[0];
					if (i > 0) {
						for (a += o, t = 1; t < i; t++)(n = 7 - (r = e[t] + "").length) && (a += j(n)), a += r;
						(n = 7 - (r = (o = e[t]) + "").length) && (a += j(n))
					} else if (0 === o) return "0";
					for (; o % 10 == 0;) o /= 10;
					return a + o
				}

				function P(e, t, n) {
					if (e !== ~~e || e < t || e > n) throw Error(m + e)
				}

				function M(e, t, n, r) {
					var i, a, o, s;
					for (a = e[0]; a >= 10; a /= 10) --t;
					return --t < 0 ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), a = A(10, 7 - t), s = e[i] % a | 0, null == r ? t < 3 ? (0 == t ? s = s / 100 | 0 : 1 == t && (s = s / 10 | 0), o = n < 4 && 99999 == s || n > 3 && 49999 == s || 5e4 == s || 0 == s) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == A(10, t - 2) - 1 || (s == a / 2 || 0 == s) && 0 == (e[i + 1] / a / 100 | 0) : t < 4 ? (0 == t ? s = s / 1e3 | 0 : 1 == t ? s = s / 100 | 0 : 2 == t && (s = s / 10 | 0), o = (r || n < 4) && 9999 == s || !r && n > 3 && 4999 == s) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == A(10, t - 3) - 1, o
				}

				function I(e, t, n) {
					for (var r, i, a = [0], o = 0, s = e.length; o < s;) {
						for (i = a.length; i--;) a[i] *= t;
						for (a[0] += l.indexOf(e.charAt(o++)), r = 0; r < a.length; r++) a[r] > n - 1 && (void 0 === a[r + 1] && (a[r + 1] = 0), a[r + 1] += a[r] / n | 0, a[r] %= n)
					}
					return a.reverse()
				}
				O.absoluteValue = O.abs = function() {
					var e = new this.constructor(this);
					return e.s < 0 && (e.s = 1), D(e)
				}, O.ceil = function() {
					return D(new this.constructor(this), this.e + 1, 2)
				}, O.clampedTo = O.clamp = function(e, t) {
					var n = this,
						r = n.constructor;
					if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
					if (e.gt(t)) throw Error(m + t);
					return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new r(n)
				}, O.comparedTo = O.cmp = function(e) {
					var t, n, r, i, a = this,
						o = a.d,
						s = (e = new a.constructor(e)).d,
						u = a.s,
						c = e.s;
					if (!o || !s) return u && c ? u !== c ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1 : NaN;
					if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -c : 0;
					if (u !== c) return u;
					if (a.e !== e.e) return a.e > e.e ^ u < 0 ? 1 : -1;
					for (t = 0, n = (r = o.length) < (i = s.length) ? r : i; t < n; ++t)
						if (o[t] !== s[t]) return o[t] > s[t] ^ u < 0 ? 1 : -1;
					return r === i ? 0 : r > i ^ u < 0 ? 1 : -1
				}, O.cosine = O.cos = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + 7, r.rounding = 1, n = function(e, t) {
						var n, r, i;
						if (t.isZero()) return t;
						(r = t.d.length) < 32 ? i = (1 / X(4, n = Math.ceil(r / 3))).toString() : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = K(e, 1, t.times(i), new e(1));
						for (var a = n; a--;) {
							var o = t.times(t);
							t = o.times(o).minus(o).times(8).plus(1)
						}
						return e.precision -= n, t
					}(r, J(r, n)), r.precision = e, r.rounding = t, D(2 == s || 3 == s ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN)
				}, O.cubeRoot = O.cbrt = function() {
					var e, t, n, r, i, a, o, s, u, c, l = this,
						f = l.constructor;
					if (!l.isFinite() || l.isZero()) return new f(l);
					for (p = !1, (a = l.s * A(l.s * l, 1 / 3)) && Math.abs(a) != 1 / 0 ? r = new f(a.toString()) : (n = x(l.d), (a = ((e = l.e) - n.length + 1) % 3) && (n += 1 == a || -2 == a ? "0" : "00"), a = A(n, 1 / 3), e = y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? n = "5e" + e : n = (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + e, (r = new f(n)).s = l.s), o = (e = f.precision) + 3;;)
						if (c = (u = (s = r).times(s).times(s)).plus(l), r = L(c.plus(l).times(s), c.plus(u), o + 2, 1), x(s.d).slice(0, o) === (n = x(r.d)).slice(0, o)) {
							if ("9999" != (n = n.slice(o - 3, o + 1)) && (i || "4999" != n)) {
								+n && (+n.slice(1) || "5" != n.charAt(0)) || (D(r, e + 1, 1), t = !r.times(r).times(r).eq(l));
								break
							}
							if (!i && (D(s, e + 1, 0), s.times(s).times(s).eq(l))) {
								r = s;
								break
							}
							o += 4, i = 1
						} return p = !0, D(r, e, f.rounding, t)
				}, O.decimalPlaces = O.dp = function() {
					var e, t = this.d,
						n = NaN;
					if (t) {
						if (n = 7 * ((e = t.length - 1) - y(this.e / 7)), e = t[e])
							for (; e % 10 == 0; e /= 10) n--;
						n < 0 && (n = 0)
					}
					return n
				}, O.dividedBy = O.div = function(e) {
					return L(this, new this.constructor(e))
				}, O.dividedToIntegerBy = O.divToInt = function(e) {
					var t = this.constructor;
					return D(L(this, new t(e), 0, 1, 1), t.precision, t.rounding)
				}, O.equals = O.eq = function(e) {
					return 0 === this.cmp(e)
				}, O.floor = function() {
					return D(new this.constructor(this), this.e + 1, 3)
				}, O.greaterThan = O.gt = function(e) {
					return this.cmp(e) > 0
				}, O.greaterThanOrEqualTo = O.gte = function(e) {
					var t = this.cmp(e);
					return 1 == t || 0 === t
				}, O.hyperbolicCosine = O.cosh = function() {
					var e, t, n, r, i, a = this,
						o = a.constructor,
						s = new o(1);
					if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
					if (a.isZero()) return s;
					n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, (i = a.d.length) < 32 ? t = (1 / X(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), a = K(o, 1, a.times(t), new o(1), !0);
					for (var u, c = e, l = new o(8); c--;) u = a.times(a), a = s.minus(u.times(l.minus(u.times(l))));
					return D(a, o.precision = n, o.rounding = r, !0)
				}, O.hyperbolicSine = O.sinh = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					if (!i.isFinite() || i.isZero()) return new a(i);
					if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, (r = i.d.length) < 3) i = K(a, 2, i, i, !0);
					else {
						e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e, i = K(a, 2, i = i.times(1 / X(5, e)), i, !0);
						for (var o, s = new a(5), u = new a(16), c = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(u.times(o).plus(c))))
					}
					return a.precision = t, a.rounding = n, D(i, t, n, !0)
				}, O.hyperbolicTangent = O.tanh = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, L(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s)
				}, O.inverseCosine = O.acos = function() {
					var e, t = this,
						n = t.constructor,
						r = t.abs().cmp(1),
						i = n.precision,
						a = n.rounding;
					return -1 !== r ? 0 === r ? t.isNeg() ? F(n, i, a) : new n(0) : new n(NaN) : t.isZero() ? F(n, i + 4, a).times(.5) : (n.precision = i + 6, n.rounding = 1, t = t.asin(), e = F(n, i + 4, a).times(.5), n.precision = i, n.rounding = a, e.minus(t))
				}, O.inverseHyperbolicCosine = O.acosh = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, p = !1, n = n.times(n).minus(1).sqrt().plus(n), p = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n)
				}, O.inverseHyperbolicSine = O.asinh = function() {
					var e, t, n = this,
						r = n.constructor;
					return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, p = !1, n = n.times(n).plus(1).sqrt().plus(n), p = !0, r.precision = e, r.rounding = t, n.ln())
				}, O.inverseHyperbolicTangent = O.atanh = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? D(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = L(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN)
				}, O.inverseSine = O.asin = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, -1 !== t ? 0 === t ? ((e = F(a, n + 4, r).times(.5)).s = i.s, e) : new a(NaN) : (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)))
				}, O.inverseTangent = O.atan = function() {
					var e, t, n, r, i, a, o, s, u, c = this,
						l = c.constructor,
						f = l.precision,
						d = l.rounding;
					if (c.isFinite()) {
						if (c.isZero()) return new l(c);
						if (c.abs().eq(1) && f + 4 <= k) return (o = F(l, f + 4, d).times(.25)).s = c.s, o
					} else {
						if (!c.s) return new l(NaN);
						if (f + 4 <= k) return (o = F(l, f + 4, d).times(.5)).s = c.s, o
					}
					for (l.precision = s = f + 10, l.rounding = 1, e = n = Math.min(28, s / 7 + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
					for (p = !1, t = Math.ceil(s / 7), r = 1, u = c.times(c), o = new l(c), i = c; - 1 !== e;)
						if (i = i.times(u), a = o.minus(i.div(r += 2)), i = i.times(u), void 0 !== (o = a.plus(i.div(r += 2))).d[t])
							for (e = t; o.d[e] === a.d[e] && e--;);
					return n && (o = o.times(2 << n - 1)), p = !0, D(o, l.precision = f, l.rounding = d, !0)
				}, O.isFinite = function() {
					return !!this.d
				}, O.isInteger = O.isInt = function() {
					return !!this.d && y(this.e / 7) > this.d.length - 2
				}, O.isNaN = function() {
					return !this.s
				}, O.isNegative = O.isNeg = function() {
					return this.s < 0
				}, O.isPositive = O.isPos = function() {
					return this.s > 0
				}, O.isZero = function() {
					return !!this.d && 0 === this.d[0]
				}, O.lessThan = O.lt = function(e) {
					return this.cmp(e) < 0
				}, O.lessThanOrEqualTo = O.lte = function(e) {
					return this.cmp(e) < 1
				}, O.logarithm = O.log = function(e) {
					var t, n, r, i, a, o, s, u, c = this,
						l = c.constructor,
						f = l.precision,
						d = l.rounding;
					if (null == e) e = new l(10), t = !0;
					else {
						if (n = (e = new l(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new l(NaN);
						t = e.eq(10)
					}
					if (n = c.d, c.s < 0 || !n || !n[0] || c.eq(1)) return new l(n && !n[0] ? -1 / 0 : 1 != c.s ? NaN : n ? 0 : 1 / 0);
					if (t)
						if (n.length > 1) a = !0;
						else {
							for (i = n[0]; i % 10 == 0;) i /= 10;
							a = 1 !== i
						} if (p = !1, o = Q(c, s = f + 5), r = t ? R(l, s + 10) : Q(e, s), M((u = L(o, r, s, 1)).d, i = f, d))
						do {
							if (o = Q(c, s += 10), r = t ? R(l, s + 10) : Q(e, s), u = L(o, r, s, 1), !a) {
								+x(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = D(u, f + 1, 0));
								break
							}
						} while (M(u.d, i += 10, d));
					return p = !0, D(u, f, d)
				}, O.minus = O.sub = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f, d, h = this,
						_ = h.constructor;
					if (e = new _(e), !h.d || !e.d) return h.s && e.s ? h.d ? e.s = -e.s : e = new _(e.d || h.s !== e.s ? h : NaN) : e = new _(NaN), e;
					if (h.s != e.s) return e.s = -e.s, h.plus(e);
					if (c = h.d, d = e.d, s = _.precision, u = _.rounding, !c[0] || !d[0]) {
						if (d[0]) e.s = -e.s;
						else {
							if (!c[0]) return new _(3 === u ? -0 : 0);
							e = new _(h)
						}
						return p ? D(e, s, u) : e
					}
					if (n = y(e.e / 7), l = y(h.e / 7), c = c.slice(), a = l - n) {
						for ((f = a < 0) ? (t = c, a = -a, o = d.length) : (t = d, n = l, o = c.length), a > (r = Math.max(Math.ceil(s / 7), o) + 2) && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
						t.reverse()
					} else {
						for ((f = (r = c.length) < (o = d.length)) && (o = r), r = 0; r < o; r++)
							if (c[r] != d[r]) {
								f = c[r] < d[r];
								break
							} a = 0
					}
					for (f && (t = c, c = d, d = t, e.s = -e.s), o = c.length, r = d.length - o; r > 0; --r) c[o++] = 0;
					for (r = d.length; r > a;) {
						if (c[--r] < d[r]) {
							for (i = r; i && 0 === c[--i];) c[i] = C - 1;
							--c[i], c[r] += C
						}
						c[r] -= d[r]
					}
					for (; 0 === c[--o];) c.pop();
					for (; 0 === c[0]; c.shift()) --n;
					return c[0] ? (e.d = c, e.e = N(c, n), p ? D(e, s, u) : e) : new _(3 === u ? -0 : 0)
				}, O.modulo = O.mod = function(e) {
					var t, n = this,
						r = n.constructor;
					return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? D(new r(n), r.precision, r.rounding) : (p = !1, 9 == r.modulo ? (t = L(n, e.abs(), 0, 3, 1)).s *= e.s : t = L(n, e, 0, r.modulo, 1), t = t.times(e), p = !0, n.minus(t))
				}, O.naturalExponential = O.exp = function() {
					return z(this)
				}, O.naturalLogarithm = O.ln = function() {
					return Q(this)
				}, O.negated = O.neg = function() {
					var e = new this.constructor(this);
					return e.s = -e.s, D(e)
				}, O.plus = O.add = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f = this,
						d = f.constructor;
					if (e = new d(e), !f.d || !e.d) return f.s && e.s ? f.d || (e = new d(e.d || f.s === e.s ? f : NaN)) : e = new d(NaN), e;
					if (f.s != e.s) return e.s = -e.s, f.minus(e);
					if (c = f.d, l = e.d, s = d.precision, u = d.rounding, !c[0] || !l[0]) return l[0] || (e = new d(f)), p ? D(e, s, u) : e;
					if (a = y(f.e / 7), r = y(e.e / 7), c = c.slice(), i = a - r) {
						for (i < 0 ? (n = c, i = -i, o = l.length) : (n = l, r = a, o = c.length), i > (o = (a = Math.ceil(s / 7)) > o ? a + 1 : o + 1) && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
						n.reverse()
					}
					for ((o = c.length) - (i = l.length) < 0 && (i = o, n = l, l = c, c = n), t = 0; i;) t = (c[--i] = c[i] + l[i] + t) / C | 0, c[i] %= C;
					for (t && (c.unshift(t), ++r), o = c.length; 0 == c[--o];) c.pop();
					return e.d = c, e.e = N(c, r), p ? D(e, s, u) : e
				}, O.precision = O.sd = function(e) {
					var t, n = this;
					if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(m + e);
					return n.d ? (t = U(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t
				}, O.round = function() {
					var e = this,
						t = e.constructor;
					return D(new t(e), e.e + 1, t.rounding)
				}, O.sine = O.sin = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + 7, r.rounding = 1, n = function(e, t) {
						var n, r = t.d.length;
						if (r < 3) return t.isZero() ? t : K(e, 2, t, t);
						n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n, t = t.times(1 / X(5, n)), t = K(e, 2, t, t);
						for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
						return t
					}(r, J(r, n)), r.precision = e, r.rounding = t, D(s > 2 ? n.neg() : n, e, t, !0)) : new r(NaN)
				}, O.squareRoot = O.sqrt = function() {
					var e, t, n, r, i, a, o = this,
						s = o.d,
						u = o.e,
						c = o.s,
						l = o.constructor;
					if (1 !== c || !s || !s[0]) return new l(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
					for (p = !1, 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((t = x(s)).length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = y((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? t = "5e" + u : t = (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + u, r = new l(t)) : r = new l(c.toString()), n = (u = l.precision) + 3;;)
						if (r = (a = r).plus(L(o, a, n + 2, 1)).times(.5), x(a.d).slice(0, n) === (t = x(r.d)).slice(0, n)) {
							if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
								+t && (+t.slice(1) || "5" != t.charAt(0)) || (D(r, u + 1, 1), e = !r.times(r).eq(o));
								break
							}
							if (!i && (D(a, u + 1, 0), a.times(a).eq(o))) {
								r = a;
								break
							}
							n += 4, i = 1
						} return p = !0, D(r, u, l.rounding, e)
				}, O.tangent = O.tan = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, (n = n.sin()).s = 1, n = L(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, D(2 == s || 4 == s ? n.neg() : n, e, t, !0)) : new r(NaN)
				}, O.times = O.mul = function(e) {
					var t, n, r, i, a, o, s, u, c, l = this,
						f = l.constructor,
						d = l.d,
						h = (e = new f(e)).d;
					if (e.s *= l.s, !(d && d[0] && h && h[0])) return new f(!e.s || d && !d[0] && !h || h && !h[0] && !d ? NaN : d && h ? 0 * e.s : e.s / 0);
					for (n = y(l.e / 7) + y(e.e / 7), (u = d.length) < (c = h.length) && (a = d, d = h, h = a, o = u, u = c, c = o), a = [], r = o = u + c; r--;) a.push(0);
					for (r = c; --r >= 0;) {
						for (t = 0, i = u + r; i > r;) s = a[i] + h[r] * d[i - r - 1] + t, a[i--] = s % C | 0, t = s / C | 0;
						a[i] = (a[i] + t) % C | 0
					}
					for (; !a[--o];) a.pop();
					return t ? ++n : a.shift(), e.d = a, e.e = N(a, n), p ? D(e, f.precision, f.rounding) : e
				}, O.toBinary = function(e, t) {
					return Z(this, 2, e, t)
				}, O.toDecimalPlaces = O.toDP = function(e, t) {
					var n = this,
						r = n.constructor;
					return n = new r(n), void 0 === e ? n : (P(e, 0, c), void 0 === t ? t = r.rounding : P(t, 0, 8), D(n, e + n.e + 1, t))
				}, O.toExponential = function(e, t) {
					var n, r = this,
						i = r.constructor;
					return void 0 === e ? n = B(r, !0) : (P(e, 0, c), void 0 === t ? t = i.rounding : P(t, 0, 8), n = B(r = D(new i(r), e + 1, t), !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n
				}, O.toFixed = function(e, t) {
					var n, r, i = this,
						a = i.constructor;
					return void 0 === e ? n = B(i) : (P(e, 0, c), void 0 === t ? t = a.rounding : P(t, 0, 8), n = B(r = D(new a(i), e + i.e + 1, t), !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n
				}, O.toFraction = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f, d, h = this,
						_ = h.d,
						b = h.constructor;
					if (!_) return new b(h);
					if (c = n = new b(1), r = u = new b(0), o = (a = (t = new b(r)).e = U(_) - h.e - 1) % 7, t.d[0] = A(10, o < 0 ? 7 + o : o), null == e) e = a > 0 ? t : c;
					else {
						if (!(s = new b(e)).isInt() || s.lt(c)) throw Error(m + s);
						e = s.gt(t) ? a > 0 ? t : c : s
					}
					for (p = !1, s = new b(x(_)), l = b.precision, b.precision = a = 7 * _.length * 2; f = L(s, t, 0, 1, 1), 1 != (i = n.plus(f.times(r))).cmp(e);) n = r, r = i, i = c, c = u.plus(f.times(i)), u = i, i = t, t = s.minus(f.times(i)), s = i;
					return i = L(e.minus(n), r, 0, 1, 1), u = u.plus(i.times(c)), n = n.plus(i.times(r)), u.s = c.s = h.s, d = L(c, r, a, 1).minus(h).abs().cmp(L(u, n, a, 1).minus(h).abs()) < 1 ? [c, r] : [u, n], b.precision = l, p = !0, d
				}, O.toHexadecimal = O.toHex = function(e, t) {
					return Z(this, 16, e, t)
				}, O.toNearest = function(e, t) {
					var n = this,
						r = n.constructor;
					if (n = new r(n), null == e) {
						if (!n.d) return n;
						e = new r(1), t = r.rounding
					} else {
						if (e = new r(e), void 0 === t ? t = r.rounding : P(t, 0, 8), !n.d) return e.s ? n : e;
						if (!e.d) return e.s && (e.s = n.s), e
					}
					return e.d[0] ? (p = !1, n = L(n, e, 0, t, 1).times(e), p = !0, D(n)) : (e.s = n.s, n = e), n
				}, O.toNumber = function() {
					return +this
				}, O.toOctal = function(e, t) {
					return Z(this, 8, e, t)
				}, O.toPower = O.pow = function(e) {
					var t, n, r, i, a, o, s = this,
						u = s.constructor,
						c = +(e = new u(e));
					if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(A(+s, c));
					if ((s = new u(s)).eq(1)) return s;
					if (r = u.precision, a = u.rounding, e.eq(1)) return D(s, r, a);
					if ((t = y(e.e / 7)) >= e.d.length - 1 && (n = c < 0 ? -c : c) <= 9007199254740991) return i = H(u, s, n, r), e.s < 0 ? new u(1).div(i) : D(i, r, a);
					if ((o = s.s) < 0) {
						if (t < e.d.length - 1) return new u(NaN);
						if (0 == (1 & e.d[t]) && (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = o, s
					}
					return (t = 0 != (n = A(+s, c)) && isFinite(n) ? new u(n + "").e : y(c * (Math.log("0." + x(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : (p = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), (i = z(e.times(Q(s, r + n)), r)).d && (M((i = D(i, r + 5, 1)).d, r, a) && (t = r + 10, +x((i = D(z(e.times(Q(s, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 && (i = D(i, r + 1, 0)))), i.s = o, p = !0, u.rounding = a, D(i, r, a))
				}, O.toPrecision = function(e, t) {
					var n, r = this,
						i = r.constructor;
					return void 0 === e ? n = B(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (P(e, 1, c), void 0 === t ? t = i.rounding : P(t, 0, 8), n = B(r = D(new i(r), e, t), e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n
				}, O.toSignificantDigits = O.toSD = function(e, t) {
					var n = this.constructor;
					return void 0 === e ? (e = n.precision, t = n.rounding) : (P(e, 1, c), void 0 === t ? t = n.rounding : P(t, 0, 8)), D(new n(this), e, t)
				}, O.toString = function() {
					var e = this,
						t = e.constructor,
						n = B(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
					return e.isNeg() && !e.isZero() ? "-" + n : n
				}, O.truncated = O.trunc = function() {
					return D(new this.constructor(this), this.e + 1, 1)
				}, O.valueOf = O.toJSON = function() {
					var e = this,
						t = e.constructor,
						n = B(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
					return e.isNeg() ? "-" + n : n
				};
				var L = function() {
					function e(e, t, n) {
						var r, i = 0,
							a = e.length;
						for (e = e.slice(); a--;) r = e[a] * t + i, e[a] = r % n | 0, i = r / n | 0;
						return i && e.unshift(i), e
					}

					function t(e, t, n, r) {
						var i, a;
						if (n != r) a = n > r ? 1 : -1;
						else
							for (i = a = 0; i < n; i++)
								if (e[i] != t[i]) {
									a = e[i] > t[i] ? 1 : -1;
									break
								} return a
					}

					function n(e, t, n, r) {
						for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
						for (; !e[0] && e.length > 1;) e.shift()
					}
					return function(r, i, a, s, u, c) {
						var l, f, d, h, p, _, m, b, g, v, A, S, w, E, T, $, k, O, x, P, M = r.constructor,
							I = r.s == i.s ? 1 : -1,
							L = r.d,
							B = i.d;
						if (!(L && L[0] && B && B[0])) return new M(r.s && i.s && (L ? !B || L[0] != B[0] : B) ? L && 0 == L[0] || !B ? 0 * I : I / 0 : NaN);
						for (c ? (p = 1, f = r.e - i.e) : (c = C, p = 7, f = y(r.e / p) - y(i.e / p)), x = B.length, k = L.length, v = (g = new M(I)).d = [], d = 0; B[d] == (L[d] || 0); d++);
						if (B[d] > (L[d] || 0) && f--, null == a ? (E = a = M.precision, s = M.rounding) : E = u ? a + (r.e - i.e) + 1 : a, E < 0) v.push(1), _ = !0;
						else {
							if (E = E / p + 2 | 0, d = 0, 1 == x) {
								for (h = 0, B = B[0], E++;
									(d < k || h) && E--; d++) T = h * c + (L[d] || 0), v[d] = T / B | 0, h = T % B | 0;
								_ = h || d < k
							} else {
								for ((h = c / (B[0] + 1) | 0) > 1 && (B = e(B, h, c), L = e(L, h, c), x = B.length, k = L.length), $ = x, S = (A = L.slice(0, x)).length; S < x;) A[S++] = 0;
								(P = B.slice()).unshift(0), O = B[0], B[1] >= c / 2 && ++O;
								do {
									h = 0, (l = t(B, A, x, S)) < 0 ? (w = A[0], x != S && (w = w * c + (A[1] || 0)), (h = w / O | 0) > 1 ? (h >= c && (h = c - 1), 1 == (l = t(m = e(B, h, c), A, b = m.length, S = A.length)) && (h--, n(m, x < b ? P : B, b, c))) : (0 == h && (l = h = 1), m = B.slice()), (b = m.length) < S && m.unshift(0), n(A, m, S, c), -1 == l && ((l = t(B, A, x, S = A.length)) < 1 && (h++, n(A, x < S ? P : B, S, c))), S = A.length) : 0 === l && (h++, A = [0]), v[d++] = h, l && A[0] ? A[S++] = L[$] || 0 : (A = [L[$]], S = 1)
								} while (($++ < k || void 0 !== A[0]) && E--);
								_ = void 0 !== A[0]
							}
							v[0] || v.shift()
						}
						if (1 == p) g.e = f, o = _;
						else {
							for (d = 1, h = v[0]; h >= 10; h /= 10) d++;
							g.e = d + f * p - 1, D(g, u ? a + g.e + 1 : a, s, _)
						}
						return g
					}
				}();

				function D(e, t, n, r) {
					var i, a, o, s, u, c, l, f, d, h = e.constructor;
					e: if (null != t) {
						if (!(f = e.d)) return e;
						for (i = 1, s = f[0]; s >= 10; s /= 10) i++;
						if ((a = t - i) < 0) a += 7, o = t, u = (l = f[d = 0]) / A(10, i - o - 1) % 10 | 0;
						else if ((d = Math.ceil((a + 1) / 7)) >= (s = f.length)) {
							if (!r) break e;
							for (; s++ <= d;) f.push(0);
							l = u = 0, i = 1, o = (a %= 7) - 7 + 1
						} else {
							for (l = s = f[d], i = 1; s >= 10; s /= 10) i++;
							u = (o = (a %= 7) - 7 + i) < 0 ? 0 : l / A(10, i - o - 1) % 10 | 0
						}
						if (r = r || t < 0 || void 0 !== f[d + 1] || (o < 0 ? l : l % A(10, i - o - 1)), c = n < 4 ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : u > 5 || 5 == u && (4 == n || r || 6 == n && (a > 0 ? o > 0 ? l / A(10, i - o) : 0 : f[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !f[0]) return f.length = 0, c ? (t -= e.e + 1, f[0] = A(10, (7 - t % 7) % 7), e.e = -t || 0) : f[0] = e.e = 0, e;
						if (0 == a ? (f.length = d, s = 1, d--) : (f.length = d + 1, s = A(10, 7 - a), f[d] = o > 0 ? (l / A(10, i - o) % A(10, o) | 0) * s : 0), c)
							for (;;) {
								if (0 == d) {
									for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
									for (o = f[0] += s, s = 1; o >= 10; o /= 10) s++;
									a != s && (e.e++, f[0] == C && (f[0] = 1));
									break
								}
								if (f[d] += s, f[d] != C) break;
								f[d--] = 0, s = 1
							}
						for (a = f.length; 0 === f[--a];) f.pop()
					}
					return p && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e
				}

				function B(e, t, n) {
					if (!e.isFinite()) return G(e);
					var r, i = e.e,
						a = x(e.d),
						o = a.length;
					return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + j(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + j(-i - 1) + a, n && (r = n - o) > 0 && (a += j(r))) : i >= o ? (a += j(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + j(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += j(r))), a
				}

				function N(e, t) {
					var n = e[0];
					for (t *= 7; n >= 10; n /= 10) t++;
					return t
				}

				function R(e, t, n) {
					if (t > $) throw p = !0, n && (e.precision = n), Error(b);
					return D(new e(f), t, 1, !0)
				}

				function F(e, t, n) {
					if (t > k) throw Error(b);
					return D(new e(d), t, n, !0)
				}

				function U(e) {
					var t = e.length - 1,
						n = 7 * t + 1;
					if (t = e[t]) {
						for (; t % 10 == 0; t /= 10) n--;
						for (t = e[0]; t >= 10; t /= 10) n++
					}
					return n
				}

				function j(e) {
					for (var t = ""; e--;) t += "0";
					return t
				}

				function H(e, t, n, r) {
					var i, a = new e(1),
						o = Math.ceil(r / 7 + 4);
					for (p = !1;;) {
						if (n % 2 && (ee((a = a.times(t)).d, o) && (i = !0)), 0 === (n = y(n / 2))) {
							n = a.d.length - 1, i && 0 === a.d[n] && ++a.d[n];
							break
						}
						ee((t = t.times(t)).d, o)
					}
					return p = !0, a
				}

				function Y(e) {
					return 1 & e.d[e.d.length - 1]
				}

				function V(e, t, n) {
					for (var r, i = new e(t[0]), a = 0; ++a < t.length;) {
						if (!(r = new e(t[a])).s) {
							i = r;
							break
						}
						i[n](r) && (i = r)
					}
					return i
				}

				function z(e, t) {
					var n, r, i, a, o, s, u, c = 0,
						l = 0,
						f = 0,
						d = e.constructor,
						h = d.rounding,
						_ = d.precision;
					if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
					for (null == t ? (p = !1, u = _) : u = t, s = new d(.03125); e.e > -2;) e = e.times(s), f += 5;
					for (u += r = Math.log(A(2, f)) / Math.LN10 * 2 + 5 | 0, n = a = o = new d(1), d.precision = u;;) {
						if (a = D(a.times(e), u, 1), n = n.times(++l), x((s = o.plus(L(a, n, u, 1))).d).slice(0, u) === x(o.d).slice(0, u)) {
							for (i = f; i--;) o = D(o.times(o), u, 1);
							if (null != t) return d.precision = _, o;
							if (!(c < 3 && M(o.d, u - r, h, c))) return D(o, d.precision = _, h, p = !0);
							d.precision = u += 10, n = a = s = new d(1), l = 0, c++
						}
						o = s
					}
				}

				function Q(e, t) {
					var n, r, i, a, o, s, u, c, l, f, d, h = 1,
						_ = e,
						m = _.d,
						b = _.constructor,
						g = b.rounding,
						v = b.precision;
					if (_.s < 0 || !m || !m[0] || !_.e && 1 == m[0] && 1 == m.length) return new b(m && !m[0] ? -1 / 0 : 1 != _.s ? NaN : m ? 0 : _);
					if (null == t ? (p = !1, l = v) : l = t, b.precision = l += 10, r = (n = x(m)).charAt(0), !(Math.abs(a = _.e) < 15e14)) return c = R(b, l + 2, v).times(a + ""), _ = Q(new b(r + "." + n.slice(1)), l - 10).plus(c), b.precision = v, null == t ? D(_, v, g, p = !0) : _;
					for (; r < 7 && 1 != r || 1 == r && n.charAt(1) > 3;) r = (n = x((_ = _.times(e)).d)).charAt(0), h++;
					for (a = _.e, r > 1 ? (_ = new b("0." + n), a++) : _ = new b(r + "." + n.slice(1)), f = _, u = o = _ = L(_.minus(1), _.plus(1), l, 1), d = D(_.times(_), l, 1), i = 3;;) {
						if (o = D(o.times(d), l, 1), x((c = u.plus(L(o, new b(i), l, 1))).d).slice(0, l) === x(u.d).slice(0, l)) {
							if (u = u.times(2), 0 !== a && (u = u.plus(R(b, l + 2, v).times(a + ""))), u = L(u, new b(h), l, 1), null != t) return b.precision = v, u;
							if (!M(u.d, l - 10, g, s)) return D(u, b.precision = v, g, p = !0);
							b.precision = l += 10, c = o = _ = L(f.minus(1), f.plus(1), l, 1), d = D(_.times(_), l, 1), i = s = 1
						}
						u = c, i += 2
					}
				}

				function G(e) {
					return String(e.s * e.s / 0)
				}

				function q(e, t) {
					var n, r, i;
					for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); r++);
					for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
					if (t = t.slice(r, i)) {
						if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < i) {
							for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i;) e.d.push(+t.slice(r, r += 7));
							r = 7 - (t = t.slice(r)).length
						} else r -= i;
						for (; r--;) t += "0";
						e.d.push(+t), p && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
					} else e.e = 0, e.d = [0];
					return e
				}

				function W(e, t) {
					var n, r, i, o, s, u, c, l, f;
					if (t.indexOf("_") > -1) {
						if (t = t.replace(/(\d)_(?=\d)/g, "$1"), T.test(t)) return q(e, t)
					} else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
					if (w.test(t)) n = 16, t = t.toLowerCase();
					else if (S.test(t)) n = 2;
					else {
						if (!E.test(t)) throw Error(m + t);
						n = 8
					}
					for ((o = t.search(/p/i)) > 0 ? (c = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), s = (o = t.indexOf(".")) >= 0, r = e.constructor, s && (o = (u = (t = t.replace(".", "")).length) - o, i = H(r, new r(n), o, 2 * o)), o = f = (l = I(t, n, C)).length - 1; 0 === l[o]; --o) l.pop();
					return o < 0 ? new r(0 * e.s) : (e.e = N(l, f), e.d = l, p = !1, s && (e = L(e, i, 4 * u)), c && (e = e.times(Math.abs(c) < 54 ? A(2, c) : a.pow(2, c))), p = !0, e)
				}

				function K(e, t, n, r, i) {
					var a, o, s, u, c = e.precision,
						l = Math.ceil(c / 7);
					for (p = !1, u = n.times(n), s = new e(r);;) {
						if (o = L(s.times(u), new e(t++ * t++), c, 1), s = i ? r.plus(o) : r.minus(o), r = L(o.times(u), new e(t++ * t++), c, 1), void 0 !== (o = s.plus(r)).d[l]) {
							for (a = l; o.d[a] === s.d[a] && a--;);
							if (-1 == a) break
						}
						a = s, s = r, r = o, o = a
					}
					return p = !0, o.d.length = l + 1, o
				}

				function X(e, t) {
					for (var n = e; --t;) n *= e;
					return n
				}

				function J(e, t) {
					var n, r = t.s < 0,
						i = F(e, e.precision, 1),
						a = i.times(.5);
					if ((t = t.abs()).lte(a)) return s = r ? 4 : 1, t;
					if ((n = t.divToInt(i)).isZero()) s = r ? 3 : 2;
					else {
						if ((t = t.minus(n.times(i))).lte(a)) return s = Y(n) ? r ? 2 : 3 : r ? 4 : 1, t;
						s = Y(n) ? r ? 1 : 4 : r ? 3 : 2
					}
					return t.minus(i).abs()
				}

				function Z(e, t, n, r) {
					var i, a, s, u, f, d, h, p, _, m = e.constructor,
						b = void 0 !== n;
					if (b ? (P(n, 1, c), void 0 === r ? r = m.rounding : P(r, 0, 8)) : (n = m.precision, r = m.rounding), e.isFinite()) {
						for (b ? (i = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : i = t, (s = (h = B(e)).indexOf(".")) >= 0 && (h = h.replace(".", ""), (_ = new m(1)).e = h.length - s, _.d = I(B(_), 10, i), _.e = _.d.length), a = f = (p = I(h, 10, i)).length; 0 == p[--f];) p.pop();
						if (p[0]) {
							if (s < 0 ? a-- : ((e = new m(e)).d = p, e.e = a, p = (e = L(e, _, n, r, 0, i)).d, a = e.e, d = o), s = p[n], u = i / 2, d = d || void 0 !== p[n + 1], d = r < 4 ? (void 0 !== s || d) && (0 === r || r === (e.s < 0 ? 3 : 2)) : s > u || s === u && (4 === r || d || 6 === r && 1 & p[n - 1] || r === (e.s < 0 ? 8 : 7)), p.length = n, d)
								for (; ++p[--n] > i - 1;) p[n] = 0, n || (++a, p.unshift(1));
							for (f = p.length; !p[f - 1]; --f);
							for (s = 0, h = ""; s < f; s++) h += l.charAt(p[s]);
							if (b) {
								if (f > 1)
									if (16 == t || 8 == t) {
										for (s = 16 == t ? 4 : 3, --f; f % s; f++) h += "0";
										for (f = (p = I(h, i, t)).length; !p[f - 1]; --f);
										for (s = 1, h = "1."; s < f; s++) h += l.charAt(p[s])
									} else h = h.charAt(0) + "." + h.slice(1);
								h = h + (a < 0 ? "p" : "p+") + a
							} else if (a < 0) {
								for (; ++a;) h = "0" + h;
								h = "0." + h
							} else if (++a > f)
								for (a -= f; a--;) h += "0";
							else a < f && (h = h.slice(0, a) + "." + h.slice(a))
						} else h = b ? "0p+0" : "0";
						h = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + h
					} else h = G(e);
					return e.s < 0 ? "-" + h : h
				}

				function ee(e, t) {
					if (e.length > t) return e.length = t, !0
				}

				function te(e) {
					return new this(e).abs()
				}

				function ne(e) {
					return new this(e).acos()
				}

				function re(e) {
					return new this(e).acosh()
				}

				function ie(e, t) {
					return new this(e).plus(t)
				}

				function ae(e) {
					return new this(e).asin()
				}

				function oe(e) {
					return new this(e).asinh()
				}

				function se(e) {
					return new this(e).atan()
				}

				function ue(e) {
					return new this(e).atanh()
				}

				function ce(e, t) {
					e = new this(e), t = new this(t);
					var n, r = this.precision,
						i = this.rounding,
						a = r + 4;
					return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? F(this, r, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = F(this, a, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(L(e, t, a, 1)), t = F(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(L(e, t, a, 1)) : (n = F(this, a, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n
				}

				function le(e) {
					return new this(e).cbrt()
				}

				function fe(e) {
					return D(e = new this(e), e.e + 1, 2)
				}

				function de(e, t, n) {
					return new this(e).clamp(t, n)
				}

				function he(e) {
					if (!e || "object" != typeof e) throw Error(_ + "Object expected");
					var t, n, r, i = !0 === e.defaults,
						a = ["precision", 1, c, "rounding", 0, 8, "toExpNeg", -u, 0, "toExpPos", 0, u, "maxE", 0, u, "minE", -u, 0, "modulo", 0, 9];
					for (t = 0; t < a.length; t += 3)
						if (n = a[t], i && (this[n] = h[n]), void 0 !== (r = e[n])) {
							if (!(y(r) === r && r >= a[t + 1] && r <= a[t + 2])) throw Error(m + n + ": " + r);
							this[n] = r
						} if (n = "crypto", i && (this[n] = h[n]), void 0 !== (r = e[n])) {
						if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(m + n + ": " + r);
						if (r) {
							if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(g);
							this[n] = !0
						} else this[n] = !1
					}
					return this
				}

				function pe(e) {
					return new this(e).cos()
				}

				function _e(e) {
					return new this(e).cosh()
				}

				function me(e, t) {
					return new this(e).div(t)
				}

				function be(e) {
					return new this(e).exp()
				}

				function ge(e) {
					return D(e = new this(e), e.e + 1, 3)
				}

				function ve() {
					var e, t, n = new this(0);
					for (p = !1, e = 0; e < arguments.length;)
						if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
						else {
							if (t.s) return p = !0, new this(1 / 0);
							n = t
						} return p = !0, n.sqrt()
				}

				function ye(e) {
					return e instanceof a || e && e.toStringTag === v || !1
				}

				function Ae(e) {
					return new this(e).ln()
				}

				function Se(e, t) {
					return new this(e).log(t)
				}

				function we(e) {
					return new this(e).log(2)
				}

				function Ee(e) {
					return new this(e).log(10)
				}

				function Te() {
					return V(this, arguments, "lt")
				}

				function Ce() {
					return V(this, arguments, "gt")
				}

				function $e(e, t) {
					return new this(e).mod(t)
				}

				function ke(e, t) {
					return new this(e).mul(t)
				}

				function Oe(e, t) {
					return new this(e).pow(t)
				}

				function xe(e) {
					var t, n, r, i, a = 0,
						o = new this(1),
						s = [];
					if (void 0 === e ? e = this.precision : P(e, 1, c), r = Math.ceil(e / 7), this.crypto)
						if (crypto.getRandomValues)
							for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;)(i = t[a]) >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
						else {
							if (!crypto.randomBytes) throw Error(g);
							for (t = crypto.randomBytes(r *= 4); a < r;)(i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
							a = r / 4
						}
					else
						for (; a < r;) s[a++] = 1e7 * Math.random() | 0;
					for (e %= 7, (r = s[--a]) && e && (i = A(10, 7 - e), s[a] = (r / i | 0) * i); 0 === s[a]; a--) s.pop();
					if (a < 0) n = 0, s = [0];
					else {
						for (n = -1; 0 === s[0]; n -= 7) s.shift();
						for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
						r < 7 && (n -= 7 - r)
					}
					return o.e = n, o.d = s, o
				}

				function Pe(e) {
					return D(e = new this(e), e.e + 1, this.rounding)
				}

				function Me(e) {
					return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
				}

				function Ie(e) {
					return new this(e).sin()
				}

				function Le(e) {
					return new this(e).sinh()
				}

				function De(e) {
					return new this(e).sqrt()
				}

				function Be(e, t) {
					return new this(e).sub(t)
				}

				function Ne() {
					var e = 0,
						t = arguments,
						n = new this(t[e]);
					for (p = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
					return p = !0, D(n, this.precision, this.rounding)
				}

				function Re(e) {
					return new this(e).tan()
				}

				function Fe(e) {
					return new this(e).tanh()
				}

				function Ue(e) {
					return D(e = new this(e), e.e + 1, 1)
				}(a = function e(t) {
					var n, r, i;

					function a(e) {
						var t, n, r, i = this;
						if (!(i instanceof a)) return new a(e);
						if (i.constructor = a, ye(e)) return i.s = e.s, void(p ? !e.d || e.e > a.maxE ? (i.e = NaN, i.d = null) : e.e < a.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
						if ("number" === (r = typeof e)) {
							if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
							if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
								for (t = 0, n = e; n >= 10; n /= 10) t++;
								return void(p ? t > a.maxE ? (i.e = NaN, i.d = null) : t < a.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]))
							}
							return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : q(i, e.toString())
						}
						if ("string" !== r) throw Error(m + e);
						return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === n && (e = e.slice(1)), i.s = 1), T.test(e) ? q(i, e) : W(i, e)
					}
					if (a.prototype = O, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = he, a.clone = e, a.isDecimal = ye, a.abs = te, a.acos = ne, a.acosh = re, a.add = ie, a.asin = ae, a.asinh = oe, a.atan = se, a.atanh = ue, a.atan2 = ce, a.cbrt = le, a.ceil = fe, a.clamp = de, a.cos = pe, a.cosh = _e, a.div = me, a.exp = be, a.floor = ge, a.hypot = ve, a.ln = Ae, a.log = Se, a.log10 = Ee, a.log2 = we, a.max = Te, a.min = Ce, a.mod = $e, a.mul = ke, a.pow = Oe, a.random = xe, a.round = Pe, a.sign = Me, a.sin = Ie, a.sinh = Le, a.sqrt = De, a.sub = Be, a.sum = Ne, a.tan = Re, a.tanh = Fe, a.trunc = Ue, void 0 === t && (t = {}), t && !0 !== t.defaults)
						for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) t.hasOwnProperty(r = i[n++]) || (t[r] = this[r]);
					return a.config(t), a
				}(h)).prototype.constructor = a, a.default = a.Decimal = a, f = new a(f), d = new a(d), void 0 === (r = function() {
					return a
				}.call(t, n, t, e)) || (e.exports = r)
			}()
		},
		"41ef": function(e, t, n) {
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
			}), t.SubtitleSettingsLabel = void 0;
			var i = n("fdec"),
				a = n("571d"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.opener = t.opener, n.text = t.text, n.for = t.for, n.config = n.mergeConfig(t, {
							cssClass: "ui-label",
							components: [n.opener]
						}, n.config), n
					}
					return r(t, e), t.prototype.toDomElement = function() {
						return new a.DOM("label", {
							id: this.config.id,
							class: this.getCssClasses(),
							for: this.for
						}).append(new a.DOM("span", {}).html(o.i18n.performLocalization(this.text)), this.opener.getDomElement())
					}, t
				}(i.Container);
			t.SubtitleSettingsLabel = s
		},
		"423e": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-kw", {
					months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
					monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
					weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
					weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
					weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
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
						sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ÙÙŠ %s",
						past: "Ù…Ù†Ø° %s",
						s: "Ø«ÙˆØ§Ù†",
						ss: "%d Ø«Ø§Ù†ÙŠØ©",
						m: "Ø¯Ù‚ÙŠÙ‚Ø©",
						mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
						h: "Ø³Ø§Ø¹Ø©",
						hh: "%d Ø³Ø§Ø¹Ø§Øª",
						d: "ÙŠÙˆÙ…",
						dd: "%d Ø£ÙŠØ§Ù…",
						M: "Ø´Ù‡Ø±",
						MM: "%d Ø£Ø´Ù‡Ø±",
						y: "Ø³Ù†Ø©",
						yy: "%d Ø³Ù†ÙˆØ§Øª"
					},
					week: {
						dow: 0,
						doy: 12
					}
				})
			}(n("c1df"))
		},
		"428f": function(e, t, n) {
			var r = n("da84");
			e.exports = r
		},
		4344: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.PlayerUtils = void 0;
			var r = n("09e6"),
				i = n("8e8b");
			! function(e) {
				var t;
				(function(e) {
					e[e.Idle = 0] = "Idle", e[e.Prepared = 1] = "Prepared", e[e.Playing = 2] = "Playing", e[e.Paused = 3] = "Paused", e[e.Finished = 4] = "Finished"
				})(t = e.PlayerState || (e.PlayerState = {})), e.isTimeShiftAvailable = function(e) {
					return e.isLive() && 0 !== e.getMaxTimeShift()
				}, e.getState = function(e) {
					return e.hasEnded() ? t.Finished : e.isPlaying() ? t.Playing : e.isPaused() ? t.Paused : null != e.getSource() ? t.Prepared : t.Idle
				}, e.getCurrentTimeRelativeToSeekableRange = function(t) {
					var n = t.getCurrentTime();
					return t.isLive() ? n : n - e.getSeekableRangeStart(t, 0)
				}, e.getSeekableRangeStart = function(e, t) {
					return void 0 === t && (t = 0), e.getSeekableRange() && e.getSeekableRange().start || t
				}, e.getSeekableRangeRespectingLive = function(e) {
					if (!e.isLive()) return e.getSeekableRange();
					var t = -e.getTimeShift(),
						n = -e.getMaxTimeShift(),
						r = e.getCurrentTime();
					return {
						start: r - (n - t),
						end: r + t
					}
				};
				var n = function() {
					function t(e) {
						var t = this;
						this.timeShiftAvailabilityChangedEvent = new r.EventDispatcher, this.player = e, this.timeShiftAvailable = void 0;
						var n = function() {
							t.detect()
						};
						e.on(e.exports.PlayerEvent.SourceLoaded, n), e.on(e.exports.PlayerEvent.TimeChanged, n)
					}
					return t.prototype.detect = function() {
						if (this.player.isLive()) {
							var t = e.isTimeShiftAvailable(this.player);
							t !== this.timeShiftAvailable && (this.timeShiftAvailabilityChangedEvent.dispatch(this.player, {
								timeShiftAvailable: t
							}), this.timeShiftAvailable = t)
						}
					}, Object.defineProperty(t.prototype, "onTimeShiftAvailabilityChanged", {
						get: function() {
							return this.timeShiftAvailabilityChangedEvent.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}();
				e.TimeShiftAvailabilityDetector = n;
				var a = function() {
					function e(e, t) {
						var n = this;
						this.liveChangedEvent = new r.EventDispatcher, this.player = e, this.uimanager = t, this.live = void 0;
						var a = function() {
							n.detect()
						};
						this.uimanager.getConfig().events.onUpdated.subscribe(a), e.on(e.exports.PlayerEvent.Play, a), i.BrowserUtils.isAndroid && i.BrowserUtils.isChrome && e.on(e.exports.PlayerEvent.TimeChanged, a), e.exports.PlayerEvent.DurationChanged && e.on(e.exports.PlayerEvent.DurationChanged, a), e.on(e.exports.PlayerEvent.AdBreakStarted, a), e.on(e.exports.PlayerEvent.AdBreakFinished, a)
					}
					return e.prototype.detect = function() {
						var e = this.player.isLive();
						e !== this.live && (this.liveChangedEvent.dispatch(this.player, {
							live: e
						}), this.live = e)
					}, Object.defineProperty(e.prototype, "onLiveChanged", {
						get: function() {
							return this.liveChangedEvent.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), e
				}();
				e.LiveStreamDetector = a
			}(t.PlayerUtils || (t.PlayerUtils = {}))
		},
		4362: function(e, t, n) {
			t.nextTick = function(e) {
					var t = Array.prototype.slice.call(arguments);
					t.shift(), setTimeout((function() {
						e.apply(null, t)
					}), 0)
				}, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function(e) {
					throw new Error("No such module. (Possibly not yet loaded)")
				},
				function() {
					var e, r = "/";
					t.cwd = function() {
						return r
					}, t.chdir = function(t) {
						e || (e = n("df7c")), r = e.resolve(t, r)
					}
				}(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, t.features = {}
		},
		"440c": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						m: ["eng Minutt", "enger Minutt"],
						h: ["eng Stonn", "enger Stonn"],
						d: ["een Dag", "engem Dag"],
						M: ["ee Mount", "engem Mount"],
						y: ["ee Joer", "engem Joer"]
					};
					return t ? i[n][0] : i[n][1]
				}

				function n(e) {
					if (e = parseInt(e, 10), isNaN(e)) return !1;
					if (e < 0) return !0;
					if (e < 10) return 4 <= e && e <= 7;
					if (e < 100) {
						var t = e % 10;
						return n(0 === t ? e / 10 : t)
					}
					if (e < 1e4) {
						for (; e >= 10;) e /= 10;
						return n(e)
					}
					return n(e /= 1e3)
				}
				e.defineLocale("lb", {
					months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
					weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm [Auer]",
						LTS: "H:mm:ss [Auer]",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm [Auer]",
						LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
					},
					calendar: {
						sameDay: "[Haut um] LT",
						sameElse: "L",
						nextDay: "[Muer um] LT",
						nextWeek: "dddd [um] LT",
						lastDay: "[GÃ«schter um] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 2:
								case 4:
									return "[Leschten] dddd [um] LT";
								default:
									return "[Leschte] dddd [um] LT"
							}
						}
					},
					relativeTime: {
						future: function(e) {
							return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
						},
						past: function(e) {
							return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
						},
						s: "e puer Sekonnen",
						ss: "%d Sekonnen",
						m: t,
						mm: "%d Minutten",
						h: t,
						hh: "%d Stonnen",
						d: t,
						dd: "%d Deeg",
						M: t,
						MM: "%d MÃ©int",
						y: t,
						yy: "%d Joer"
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
		"443d": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.VttUtils = void 0;
			var r, i;
			(function(e) {
				e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right"
			})(r || (r = {})),
			function(e) {
				e.GrowingRight = "lr", e.GrowingLeft = "rl"
			}(i || (i = {}));
			var a = new Map([
					[r.Top, r.Bottom],
					[r.Bottom, r.Top],
					[r.Left, r.Right],
					[r.Right, r.Left]
				]),
				o = function(e, t, n, r) {
					var i = a.get(n);
					if ("auto" === t.line && t.vertical) e.css(i, "0");
					else if ("auto" !== t.line || t.vertical) {
						var o = parseFloat(t.line);
						if (t.snapToLines) {
							var s = Number(t.line);
							s < 0 && (s = 21 + s), o = 100 * (r.height / 21 * s) / r.height
						}
						"end" !== t.lineAlign && e.css(i, o + "%"),
							function(e, t, n, r) {
								switch (t.lineAlign) {
									case "center":
										l(e, n, r);
										break;
									case "end":
										f(e, n, r)
								}
							}(e, t, n, o)
					}
				},
				s = function(e, t, n) {
					switch (t.vertical) {
						case "":
							e.css("writing-mode", "horizontal-tb"), e.css(r.Bottom, "0"), o(e, t, r.Bottom, n);
							break;
						case i.GrowingRight:
							u(e, r.Right, t, n);
							break;
						case i.GrowingLeft:
							u(e, r.Left, t, n)
					}
				},
				u = function(e, t, n, i) {
					var a = t === r.Right ? "vertical-lr" : "vertical-rl";
					e.css("writing-mode", a), e.css(r.Top, "0"), o(e, n, t, i)
				},
				c = function(e, t, n) {
					if ("auto" === t.position) e.css(n, "0");
					else switch (t.positionAlign) {
						case "line-left":
							e.css(n, t.position + "%"), e.css(a.get(n), "auto"), e.css("justify-content", "flex-start");
							break;
						case "center":
							e.css(n, t.position - t.size / 2 + "%"), e.css(a.get(n), "auto"), e.css("justify-content", "center");
							break;
						case "line-right":
							e.css(n, "auto"), e.css(a.get(n), 100 - t.position + "%"), e.css("justify-content", "flex-end");
							break;
						default:
							e.css(n, t.position + "%"), e.css("justify-content", "flex-start")
					}
				},
				l = function(e, t, n) {
					switch (t) {
						case r.Bottom:
							e.css("transform", "translateY(-50%)");
							break;
						case r.Left:
							e.css("transform", "translateX(50%)");
							break;
						case r.Right:
							e.css("transform", "translateX(-50%)")
					}
				},
				f = function(e, t, n) {
					var r = t;
					e.css(r, 100 - n + "%")
				};
			! function(e) {
				e.setVttCueBoxStyles = function(e, t) {
					var n = e.vtt,
						i = e.getDomElement();
					(function(e, t) {
						t.region ? (e.css("position", "relative"), e.css("unicode-bidi", "plaintext")) : (e.css("position", "absolute"), e.css("overflow-wrap", "break-word"), e.css("overflow", "hidden"), e.css("flex-flow", "column")), e.css("display", "inline-flex")
					})(i, n),
					function(e) {
						e.split("<br />").length
					}(e.getText()), s(i, n, t);
					var a = "middle" === n.align ? "center" : n.align;
					i.css("text-align", a);
					var o = n.size;
					"" === n.vertical ? (i.css("width", o + "%"), c(i, n, r.Left)) : (i.css("height", o + "%"), c(i, n, r.Top))
				}, e.setVttRegionStyles = function(e, t, n) {
					var i = e.getDomElement(),
						a = n.width * t.viewportAnchorX / 100 - n.width * t.width / 100 * t.regionAnchorX / 100,
						o = n.height * t.viewportAnchorY / 100 - 28 * t.lines * t.regionAnchorY / 100;
					i.css("position", "absolute"), i.css("overflow", "hidden"), i.css("width", t.width + "%"), i.css(r.Left, a + "px"), i.css(r.Right, "unset"), i.css(r.Top, o + "px"), i.css(r.Bottom, "unset"), i.css("height", 28 * t.lines + "px")
				}
			}(t.VttUtils || (t.VttUtils = {}))
		},
		"44ad": function(e, t, n) {
			var r = n("d039"),
				i = n("c6b6"),
				a = "".split;
			e.exports = r((function() {
				return !Object("z").propertyIsEnumerable(0)
			})) ? function(e) {
				return "String" == i(e) ? a.call(e, "") : Object(e)
			} : Object
		},
		"44d2": function(e, t, n) {
			var r = n("b622"),
				i = n("7c73"),
				a = n("9bf2"),
				o = r("unscopables"),
				s = Array.prototype;
			null == s[o] && a.f(s, o, {
				configurable: !0,
				value: i(null)
			}), e.exports = function(e) {
				s[o][e] = !0
			}
		},
		"44de": function(e, t, n) {
			var r = n("da84");
			e.exports = function(e, t) {
				var n = r.console;
				n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
			}
		},
		"44e7": function(e, t, n) {
			var r = n("861d"),
				i = n("c6b6"),
				a = n("b622")("match");
			e.exports = function(e) {
				var t;
				return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
			}
		},
		"467f": function(e, t, n) {
			"use strict";
			var r = n("2d83");
			e.exports = function(e, t, n) {
				var i = n.config.validateStatus;
				n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
			}
		},
		4820: function(e, t, n) {
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
			}), t.FontColorSelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingsfontcolorselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("white", a.i18n.getLocalizer("colors.white")), this.addItem("black", a.i18n.getLocalizer("colors.black")), this.addItem("red", a.i18n.getLocalizer("colors.red")), this.addItem("green", a.i18n.getLocalizer("colors.green")), this.addItem("blue", a.i18n.getLocalizer("colors.blue")), this.addItem("cyan", a.i18n.getLocalizer("colors.cyan")), this.addItem("yellow", a.i18n.getLocalizer("colors.yellow")), this.addItem("magenta", a.i18n.getLocalizer("colors.magenta"));
						var i = function() {
							r.settingsManager.fontColor.isSet() && r.settingsManager.fontOpacity.isSet() ? r.toggleOverlayClass("fontcolor-" + r.settingsManager.fontColor.value + r.settingsManager.fontOpacity.value) : r.toggleOverlayClass(null)
						};
						this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.fontColor.value = t
						})), this.settingsManager.fontColor.onChanged.subscribe((function(e, t) {
							r.settingsManager.fontColor.isSet() ? r.settingsManager.fontOpacity.isSet() || (r.settingsManager.fontOpacity.value = "100") : r.settingsManager.fontOpacity.clear(), r.selectItem(t.value), i()
						})), this.settingsManager.fontOpacity.onChanged.subscribe((function() {
							i()
						})), this.settingsManager.fontColor.isSet() && this.selectItem(this.settingsManager.fontColor.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.FontColorSelectBox = o
		},
		4840: function(e, t, n) {
			var r = n("825a"),
				i = n("1c0b"),
				a = n("b622")("species");
			e.exports = function(e, t) {
				var n, o = r(e).constructor;
				return void 0 === o || null == (n = r(o)[a]) ? t : i(n)
			}
		},
		"485c": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					1: "-inci",
					5: "-inci",
					8: "-inci",
					70: "-inci",
					80: "-inci",
					2: "-nci",
					7: "-nci",
					20: "-nci",
					50: "-nci",
					3: "-Ã¼ncÃ¼",
					4: "-Ã¼ncÃ¼",
					100: "-Ã¼ncÃ¼",
					6: "-ncÄ±",
					9: "-uncu",
					10: "-uncu",
					30: "-uncu",
					60: "-Ä±ncÄ±",
					90: "-Ä±ncÄ±"
				};
				e.defineLocale("az", {
					months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
					monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
					weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
					weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
					weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[bugÃ¼n saat] LT",
						nextDay: "[sabah saat] LT",
						nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
						lastDay: "[dÃ¼nÉ™n] LT",
						lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s sonra",
						past: "%s É™vvÉ™l",
						s: "bir neÃ§É™ saniyÉ™",
						ss: "%d saniyÉ™",
						m: "bir dÉ™qiqÉ™",
						mm: "%d dÉ™qiqÉ™",
						h: "bir saat",
						hh: "%d saat",
						d: "bir gÃ¼n",
						dd: "%d gÃ¼n",
						M: "bir ay",
						MM: "%d ay",
						y: "bir il",
						yy: "%d il"
					},
					meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
					isPM: function(e) {
						return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
					ordinal: function(e) {
						if (0 === e) return e + "-Ä±ncÄ±";
						var n = e % 10;
						return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"48da": function(e, t, n) {
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
			}), t.Button = void 0;
			var i = n("587c"),
				a = n("571d"),
				o = n("09e6"),
				s = n("e1ee"),
				u = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.buttonEvents = {
							onClick: new o.EventDispatcher
						}, n.config = n.mergeConfig(t, {
							cssClass: "ui-button",
							role: "button",
							tabIndex: 0
						}, n.config), n
					}
					return r(t, e), t.prototype.toDomElement = function() {
						var e = this,
							t = {
								id: this.config.id,
								"aria-label": s.i18n.performLocalization(this.config.ariaLabel || this.config.text),
								class: this.getCssClasses(),
								type: "button",
								"aria-pressed": "false",
								tabindex: this.config.tabIndex.toString()
							};
						null != this.config.role && (t.role = this.config.role);
						var n = new a.DOM("button", t).append(new a.DOM("span", {
							class: this.prefixCss("label")
						}).html(s.i18n.performLocalization(this.config.text)));
						return n.on("click", (function() {
							e.onClickEvent()
						})), n
					}, t.prototype.setText = function(e) {
						this.getDomElement().find("." + this.prefixCss("label")).html(s.i18n.performLocalization(e))
					}, t.prototype.onClickEvent = function() {
						this.buttonEvents.onClick.dispatch(this)
					}, Object.defineProperty(t.prototype, "onClick", {
						get: function() {
							return this.buttonEvents.onClick.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(i.Component);
			t.Button = u
		},
		4930: function(e, t, n) {
			var r = n("605d"),
				i = n("2d00"),
				a = n("d039");
			e.exports = !!Object.getOwnPropertySymbols && !a((function() {
				return !Symbol.sham && (r ? 38 === i : i > 37 && i < 41)
			}))
		},
		"498a": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("58a8").trim;
			r({
				target: "String",
				proto: !0,
				forced: n("c8d2")("trim")
			}, {
				trim: function() {
					return i(this)
				}
			})
		},
		"49ab": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-hk", {
					months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
					monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
					weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
					weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
					weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYYå¹´MæœˆDæ—¥",
						LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
						LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
						l: "YYYY/M/D",
						ll: "YYYYå¹´MæœˆDæ—¥",
						lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
						llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
					},
					meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						var r = 100 * e + t;
						return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1200 ? "ä¸Šåˆ" : 1200 === r ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
					},
					calendar: {
						sameDay: "[ä»Šå¤©]LT",
						nextDay: "[æ˜Žå¤©]LT",
						nextWeek: "[ä¸‹]ddddLT",
						lastDay: "[æ˜¨å¤©]LT",
						lastWeek: "[ä¸Š]ddddLT",
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "æ—¥";
							case "M":
								return e + "æœˆ";
							case "w":
							case "W":
								return e + "é€±";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%så¾Œ",
						past: "%så‰",
						s: "å¹¾ç§’",
						ss: "%d ç§’",
						m: "1 åˆ†é˜",
						mm: "%d åˆ†é˜",
						h: "1 å°æ™‚",
						hh: "%d å°æ™‚",
						d: "1 å¤©",
						dd: "%d å¤©",
						M: "1 å€‹æœˆ",
						MM: "%d å€‹æœˆ",
						y: "1 å¹´",
						yy: "%d å¹´"
					}
				})
			}(n("c1df"))
		},
		"49cc": function(e, t, n) {
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
			}), t.WindowColorSelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingswindowcolorselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("white", a.i18n.getLocalizer("colors.white")), this.addItem("black", a.i18n.getLocalizer("colors.black")), this.addItem("red", a.i18n.getLocalizer("colors.red")), this.addItem("green", a.i18n.getLocalizer("colors.green")), this.addItem("blue", a.i18n.getLocalizer("colors.blue")), this.addItem("cyan", a.i18n.getLocalizer("colors.cyan")), this.addItem("yellow", a.i18n.getLocalizer("colors.yellow")), this.addItem("magenta", a.i18n.getLocalizer("colors.magenta"));
						var i = function() {
							r.settingsManager.windowColor.isSet() && r.settingsManager.windowOpacity.isSet() ? r.toggleOverlayClass("windowcolor-" + r.settingsManager.windowColor.value + r.settingsManager.windowOpacity.value) : r.toggleOverlayClass(null)
						};
						this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.windowColor.value = t
						})), this.settingsManager.windowColor.onChanged.subscribe((function(e, t) {
							r.settingsManager.windowColor.isSet() ? r.settingsManager.windowOpacity.isSet() || (r.settingsManager.windowOpacity.value = "100") : r.settingsManager.windowOpacity.clear(), r.selectItem(t.value), i()
						})), this.settingsManager.windowOpacity.onChanged.subscribe((function() {
							i()
						})), this.settingsManager.windowColor.isSet() && this.selectItem(this.settingsManager.windowColor.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.WindowColorSelectBox = o
		},
		"4a7b": function(e, t, n) {
			"use strict";
			var r = n("c532");
			e.exports = function(e, t) {
				t = t || {};
				var n = {},
					i = ["url", "method", "data"],
					a = ["headers", "auth", "proxy", "params"],
					o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
					s = ["validateStatus"];

				function u(e, t) {
					return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
				}

				function c(i) {
					r.isUndefined(t[i]) ? r.isUndefined(e[i]) || (n[i] = u(void 0, e[i])) : n[i] = u(e[i], t[i])
				}
				r.forEach(i, (function(e) {
					r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
				})), r.forEach(a, c), r.forEach(o, (function(i) {
					r.isUndefined(t[i]) ? r.isUndefined(e[i]) || (n[i] = u(void 0, e[i])) : n[i] = u(void 0, t[i])
				})), r.forEach(s, (function(r) {
					r in t ? n[r] = u(e[r], t[r]) : r in e && (n[r] = u(void 0, e[r]))
				}));
				var l = i.concat(a).concat(o).concat(s),
					f = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
						return -1 === l.indexOf(e)
					}));
				return r.forEach(f, c), n
			}
		},
		"4ae1": function(e, t, n) {
			var r = n("23e7"),
				i = n("d066"),
				a = n("1c0b"),
				o = n("825a"),
				s = n("861d"),
				u = n("7c73"),
				c = n("0538"),
				l = n("d039"),
				f = i("Reflect", "construct"),
				d = l((function() {
					function e() {}
					return !(f((function() {}), [], e) instanceof e)
				})),
				h = !l((function() {
					f((function() {}))
				})),
				p = d || h;
			r({
				target: "Reflect",
				stat: !0,
				forced: p,
				sham: p
			}, {
				construct: function(e, t) {
					a(e), o(t);
					var n = arguments.length < 3 ? e : a(arguments[2]);
					if (h && !d) return f(e, t, n);
					if (e == n) {
						switch (t.length) {
							case 0:
								return new e;
							case 1:
								return new e(t[0]);
							case 2:
								return new e(t[0], t[1]);
							case 3:
								return new e(t[0], t[1], t[2]);
							case 4:
								return new e(t[0], t[1], t[2], t[3])
						}
						var r = [null];
						return r.push.apply(r, t), new(c.apply(e, r))
					}
					var i = n.prototype,
						l = u(s(i) ? i : Object.prototype),
						p = Function.apply.call(e, l, t);
					return s(p) ? p : l
				}
			})
		},
		"4b69": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.VolumeTransition = t.VolumeController = void 0;
			var r = n("09e6"),
				i = function() {
					function e(e) {
						var t = this;
						this.player = e, this.events = {
							onChanged: new r.EventDispatcher
						}, this.storeVolume();
						var n = function() {
							t.onChangedEvent()
						};
						e.on(e.exports.PlayerEvent.SourceLoaded, n), e.on(e.exports.PlayerEvent.VolumeChanged, n), e.on(e.exports.PlayerEvent.Muted, n), e.on(e.exports.PlayerEvent.Unmuted, n)
					}
					return e.prototype.setVolume = function(t) {
						this.player.setVolume(t, e.issuerName)
					}, e.prototype.getVolume = function() {
						return this.player.getVolume()
					}, e.prototype.setMuted = function(t) {
						t ? this.player.mute(e.issuerName) : this.player.unmute(e.issuerName)
					}, e.prototype.toggleMuted = function() {
						this.isMuted() || 0 === this.getVolume() ? this.recallVolume() : this.setMuted(!0)
					}, e.prototype.isMuted = function() {
						return this.player.isMuted()
					}, e.prototype.storeVolume = function() {
						this.storedVolume = this.getVolume()
					}, e.prototype.recallVolume = function() {
						this.setMuted(0 === this.storedVolume), this.setVolume(this.storedVolume)
					}, e.prototype.startTransition = function() {
						return new a(this)
					}, e.prototype.onChangedEvent = function() {
						var e = this.isMuted(),
							t = this.getVolume(),
							n = e || 0 === t,
							r = e ? 0 : t;
						this.events.onChanged.dispatch(this, {
							volume: r,
							muted: n
						})
					}, Object.defineProperty(e.prototype, "onChanged", {
						get: function() {
							return this.events.onChanged.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), e.issuerName = "ui-volumecontroller", e
				}();
			t.VolumeController = i;
			var a = function() {
				function e(e) {
					this.controller = e, e.storeVolume()
				}
				return e.prototype.update = function(e) {
					this.controller.setMuted(!1), this.controller.setVolume(e)
				}, e.prototype.finish = function(e) {
					0 === e ? (this.controller.recallVolume(), this.controller.setMuted(!0)) : (this.controller.setMuted(!1), this.controller.setVolume(e), this.controller.storeVolume())
				}, e
			}();
			t.VolumeTransition = a
		},
		"4ba9": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var r = e + " ";
					switch (n) {
						case "ss":
							return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
						case "m":
							return t ? "jedna minuta" : "jedne minute";
						case "mm":
							return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
						case "h":
							return t ? "jedan sat" : "jednog sata";
						case "hh":
							return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
						case "dd":
							return r += 1 === e ? "dan" : "dana";
						case "MM":
							return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
						case "yy":
							return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
					}
				}
				e.defineLocale("hr", {
					months: {
						format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
						standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
					},
					monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
					weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
					weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "Do MMMM YYYY",
						LLL: "Do MMMM YYYY H:mm",
						LLLL: "dddd, Do MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danas u] LT",
						nextDay: "[sutra u] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[u] [nedjelju] [u] LT";
								case 3:
									return "[u] [srijedu] [u] LT";
								case 6:
									return "[u] [subotu] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[u] dddd [u] LT"
							}
						},
						lastDay: "[juÄer u] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[proÅ¡lu] [nedjelju] [u] LT";
								case 3:
									return "[proÅ¡lu] [srijedu] [u] LT";
								case 6:
									return "[proÅ¡le] [subote] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[proÅ¡li] dddd [u] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "prije %s",
						s: "par sekundi",
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: "dan",
						dd: t,
						M: "mjesec",
						MM: t,
						y: "godinu",
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"4be7": function(e, t, n) {
			(function(t) {
				! function(t) {
					"use strict";
					"function" == typeof bootstrap ? bootstrap("promise", t) : e.exports = t()
				}((function() {
					"use strict";
					var e = !1;
					try {
						throw new Error
					} catch (t) {
						e = !!t.stack
					}
					var n, r = w(),
						i = function() {},
						a = function() {
							var e = {
									task: void 0,
									next: null
								},
								n = e,
								r = !1,
								i = void 0,
								o = !1,
								s = [];

							function u() {
								for (var t, n; e.next;) t = (e = e.next).task, e.task = void 0, (n = e.domain) && (e.domain = void 0, n.enter()), c(t, n);
								for (; s.length;) c(t = s.pop());
								r = !1
							}

							function c(e, t) {
								try {
									e()
								} catch (e) {
									if (o) throw t && t.exit(), setTimeout(u, 0), t && t.enter(), e;
									setTimeout((function() {
										throw e
									}), 0)
								}
								t && t.exit()
							}
							if (a = function(e) {
									n = n.next = {
										task: e,
										domain: o && t.domain,
										next: null
									}, r || (r = !0, i())
								}, "object" == typeof t && "[object process]" === t.toString() && t.nextTick) o = !0, i = function() {
								t.nextTick(u)
							};
							else if ("function" == typeof setImmediate) i = "undefined" != typeof window ? setImmediate.bind(window, u) : function() {
								setImmediate(u)
							};
							else if ("undefined" != typeof MessageChannel) {
								var l = new MessageChannel;
								l.port1.onmessage = function() {
									i = f, l.port1.onmessage = u, u()
								};
								var f = function() {
									l.port2.postMessage(0)
								};
								i = function() {
									setTimeout(u, 0), f()
								}
							} else i = function() {
								setTimeout(u, 0)
							};
							return a.runAfter = function(e) {
								s.push(e), r || (r = !0, i())
							}, a
						}(),
						o = Function.call;

					function s(e) {
						return function() {
							return o.apply(e, arguments)
						}
					}
					var u, c = s(Array.prototype.slice),
						l = s(Array.prototype.reduce || function(e, t) {
							var n = 0,
								r = this.length;
							if (1 === arguments.length)
								for (;;) {
									if (n in this) {
										t = this[n++];
										break
									}
									if (++n >= r) throw new TypeError
								}
							for (; n < r; n++) n in this && (t = e(t, this[n], n));
							return t
						}),
						f = s(Array.prototype.indexOf || function(e) {
							for (var t = 0; t < this.length; t++)
								if (this[t] === e) return t;
							return -1
						}),
						d = s(Array.prototype.map || function(e, t) {
							var n = this,
								r = [];
							return l(n, (function(i, a, o) {
								r.push(e.call(t, a, o, n))
							}), void 0), r
						}),
						h = Object.create || function(e) {
							function t() {}
							return t.prototype = e, new t
						},
						p = Object.defineProperty || function(e, t, n) {
							return e[t] = n.value, e
						},
						_ = s(Object.prototype.hasOwnProperty),
						m = Object.keys || function(e) {
							var t = [];
							for (var n in e) _(e, n) && t.push(n);
							return t
						},
						b = s(Object.prototype.toString);

					function g(e) {
						return "[object StopIteration]" === b(e) || e instanceof u
					}
					u = "undefined" != typeof ReturnValue ? ReturnValue : function(e) {
						this.value = e
					};

					function v(t, n) {
						if (e && n.stack && "object" == typeof t && null !== t && t.stack) {
							for (var r = [], i = n; i; i = i.source) i.stack && (!t.__minimumStackCounter__ || t.__minimumStackCounter__ > i.stackCounter) && (p(t, "__minimumStackCounter__", {
								value: i.stackCounter,
								configurable: !0
							}), r.unshift(i.stack));
							r.unshift(t.stack);
							var a = function(e) {
								for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
									var i = t[r];
									S(i) || y(i) || !i || n.push(i)
								}
								return n.join("\n")
							}(r.join("\nFrom previous event:\n"));
							p(t, "stack", {
								value: a,
								configurable: !0
							})
						}
					}

					function y(e) {
						return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
					}

					function A(e) {
						var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
						if (t) return [t[1], Number(t[2])];
						var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
						if (n) return [n[1], Number(n[2])];
						var r = /.*@(.+):(\d+)$/.exec(e);
						return r ? [r[1], Number(r[2])] : void 0
					}

					function S(e) {
						var t = A(e);
						if (!t) return !1;
						var i = t[0],
							a = t[1];
						return i === n && a >= r && a <= q
					}

					function w() {
						if (e) try {
							throw new Error
						} catch (e) {
							var t = e.stack.split("\n"),
								r = A(t[0].indexOf("@") > 0 ? t[1] : t[2]);
							if (!r) return;
							return n = r[0], r[1]
						}
					}

					function E(e) {
						return e instanceof O ? e : I(e) ? function(e) {
							var t = C();
							return E.nextTick((function() {
								try {
									e.then(t.resolve, t.reject, t.notify)
								} catch (e) {
									t.reject(e)
								}
							})), t.promise
						}(e) : H(e)
					}
					E.resolve = E, E.nextTick = a, E.longStackSupport = !1;
					var T = 1;

					function C() {
						var t, n = [],
							r = [],
							i = h(C.prototype),
							a = h(O.prototype);
						if (a.promiseDispatch = function(e, i, a) {
								var o = c(arguments);
								n ? (n.push(o), "when" === i && a[1] && r.push(a[1])) : E.nextTick((function() {
									t.promiseDispatch.apply(t, o)
								}))
							}, a.valueOf = function() {
								if (n) return a;
								var e = P(t);
								return M(e) && (t = e), e
							}, a.inspect = function() {
								return t ? t.inspect() : {
									state: "pending"
								}
							}, E.longStackSupport && e) try {
							throw new Error
						} catch (e) {
							a.stack = e.stack.substring(e.stack.indexOf("\n") + 1), a.stackCounter = T++
						}

						function o(i) {
							t = i, E.longStackSupport && e && (a.source = i), l(n, (function(e, t) {
								E.nextTick((function() {
									i.promiseDispatch.apply(i, t)
								}))
							}), void 0), n = void 0, r = void 0
						}
						return i.promise = a, i.resolve = function(e) {
							t || o(E(e))
						}, i.fulfill = function(e) {
							t || o(H(e))
						}, i.reject = function(e) {
							t || o(j(e))
						}, i.notify = function(e) {
							t || l(r, (function(t, n) {
								E.nextTick((function() {
									n(e)
								}))
							}), void 0)
						}, i
					}

					function $(e) {
						if ("function" != typeof e) throw new TypeError("resolver must be a function.");
						var t = C();
						try {
							e(t.resolve, t.reject, t.notify)
						} catch (e) {
							t.reject(e)
						}
						return t.promise
					}

					function k(e) {
						return $((function(t, n) {
							for (var r = 0, i = e.length; r < i; r++) E(e[r]).then(t, n)
						}))
					}

					function O(e, t, n) {
						void 0 === t && (t = function(e) {
							return j(new Error("Promise does not support operation: " + e))
						}), void 0 === n && (n = function() {
							return {
								state: "unknown"
							}
						});
						var r = h(O.prototype);
						if (r.promiseDispatch = function(n, i, a) {
								var o;
								try {
									o = e[i] ? e[i].apply(r, a) : t.call(r, i, a)
								} catch (e) {
									o = j(e)
								}
								n && n(o)
							}, r.inspect = n, n) {
							var i = n();
							"rejected" === i.state && (r.exception = i.reason), r.valueOf = function() {
								var e = n();
								return "pending" === e.state || "rejected" === e.state ? r : e.value
							}
						}
						return r
					}

					function x(e, t, n, r) {
						return E(e).then(t, n, r)
					}

					function P(e) {
						if (M(e)) {
							var t = e.inspect();
							if ("fulfilled" === t.state) return t.value
						}
						return e
					}

					function M(e) {
						return e instanceof O
					}

					function I(e) {
						return function(e) {
							return e === Object(e)
						}(e) && "function" == typeof e.then
					}
					"object" == typeof t && t && Object({
						NODE_ENV: "production",
						VUE_APP_SOCKETIO_SERVER: "",
						VUE_APP_CHARTING_LIBRARY: "/tradingview/",
						VUE_APP_GOOGLE_ANALYTICS: "G-YP9F2LR1HR",
						BASE_URL: "https://cdn.minervini.com/static/dist/"
					}) && Object({
						NODE_ENV: "production",
						VUE_APP_SOCKETIO_SERVER: "",
						VUE_APP_CHARTING_LIBRARY: "/tradingview/",
						VUE_APP_GOOGLE_ANALYTICS: "G-YP9F2LR1HR",
						BASE_URL: "https://cdn.minervini.com/static/dist/"
					}).Q_DEBUG && (E.longStackSupport = !0), E.defer = C, C.prototype.makeNodeResolver = function() {
						var e = this;
						return function(t, n) {
							t ? e.reject(t) : arguments.length > 2 ? e.resolve(c(arguments, 1)) : e.resolve(n)
						}
					}, E.Promise = $, E.promise = $, $.race = k, $.all = z, $.reject = j, $.resolve = E, E.passByCopy = function(e) {
						return e
					}, O.prototype.passByCopy = function() {
						return this
					}, E.join = function(e, t) {
						return E(e).join(t)
					}, O.prototype.join = function(e) {
						return E([this, e]).spread((function(e, t) {
							if (e === t) return e;
							throw new Error("Q can't join: not the same: " + e + " " + t)
						}))
					}, E.race = k, O.prototype.race = function() {
						return this.then(E.race)
					}, E.makePromise = O, O.prototype.toString = function() {
						return "[object Promise]"
					}, O.prototype.then = function(e, t, n) {
						var r = this,
							i = C(),
							a = !1;

						function o(t) {
							try {
								return "function" == typeof e ? e(t) : t
							} catch (e) {
								return j(e)
							}
						}

						function s(e) {
							return "function" == typeof n ? n(e) : e
						}
						return E.nextTick((function() {
							r.promiseDispatch((function(e) {
								a || (a = !0, i.resolve(o(e)))
							}), "when", [function(e) {
								a || (a = !0, i.resolve(function(e) {
									if ("function" == typeof t) {
										v(e, r);
										try {
											return t(e)
										} catch (e) {
											return j(e)
										}
									}
									return j(e)
								}(e)))
							}])
						})), r.promiseDispatch(void 0, "when", [void 0, function(e) {
							var t, n = !1;
							try {
								t = s(e)
							} catch (e) {
								if (n = !0, !E.onerror) throw e;
								E.onerror(e)
							}
							n || i.notify(t)
						}]), i.promise
					}, E.tap = function(e, t) {
						return E(e).tap(t)
					}, O.prototype.tap = function(e) {
						return e = E(e), this.then((function(t) {
							return e.fcall(t).thenResolve(t)
						}))
					}, E.when = x, O.prototype.thenResolve = function(e) {
						return this.then((function() {
							return e
						}))
					}, E.thenResolve = function(e, t) {
						return E(e).thenResolve(t)
					}, O.prototype.thenReject = function(e) {
						return this.then((function() {
							throw e
						}))
					}, E.thenReject = function(e, t) {
						return E(e).thenReject(t)
					}, E.nearer = P, E.isPromise = M, E.isPromiseAlike = I, E.isPending = function(e) {
						return M(e) && "pending" === e.inspect().state
					}, O.prototype.isPending = function() {
						return "pending" === this.inspect().state
					}, E.isFulfilled = function(e) {
						return !M(e) || "fulfilled" === e.inspect().state
					}, O.prototype.isFulfilled = function() {
						return "fulfilled" === this.inspect().state
					}, E.isRejected = function(e) {
						return M(e) && "rejected" === e.inspect().state
					}, O.prototype.isRejected = function() {
						return "rejected" === this.inspect().state
					};
					var L = [],
						D = [],
						B = [],
						N = !0;

					function R() {
						L.length = 0, D.length = 0, N || (N = !0)
					}

					function F(e, n) {
						N && ("object" == typeof t && "function" == typeof t.emit && E.nextTick.runAfter((function() {
							-1 !== f(D, e) && (t.emit("unhandledRejection", n, e), B.push(e))
						})), D.push(e), n && void 0 !== n.stack ? L.push(n.stack) : L.push("(no stack) " + n))
					}

					function U(e) {
						if (N) {
							var n = f(D, e); - 1 !== n && ("object" == typeof t && "function" == typeof t.emit && E.nextTick.runAfter((function() {
								var r = f(B, e); - 1 !== r && (t.emit("rejectionHandled", L[n], e), B.splice(r, 1))
							})), D.splice(n, 1), L.splice(n, 1))
						}
					}

					function j(e) {
						var t = O({
							when: function(t) {
								return t && U(this), t ? t(e) : this
							}
						}, (function() {
							return this
						}), (function() {
							return {
								state: "rejected",
								reason: e
							}
						}));
						return F(t, e), t
					}

					function H(e) {
						return O({
							when: function() {
								return e
							},
							get: function(t) {
								return e[t]
							},
							set: function(t, n) {
								e[t] = n
							},
							delete: function(t) {
								delete e[t]
							},
							post: function(t, n) {
								return null == t ? e.apply(void 0, n) : e[t].apply(e, n)
							},
							apply: function(t, n) {
								return e.apply(t, n)
							},
							keys: function() {
								return m(e)
							}
						}, void 0, (function() {
							return {
								state: "fulfilled",
								value: e
							}
						}))
					}

					function Y(e, t, n) {
						return E(e).spread(t, n)
					}

					function V(e, t, n) {
						return E(e).dispatch(t, n)
					}

					function z(e) {
						return x(e, (function(e) {
							var t = 0,
								n = C();
							return l(e, (function(r, i, a) {
								var o;
								M(i) && "fulfilled" === (o = i.inspect()).state ? e[a] = o.value : (++t, x(i, (function(r) {
									e[a] = r, 0 == --t && n.resolve(e)
								}), n.reject, (function(e) {
									n.notify({
										index: a,
										value: e
									})
								})))
							}), void 0), 0 === t && n.resolve(e), n.promise
						}))
					}

					function Q(e) {
						if (0 === e.length) return E.resolve();
						var t = E.defer(),
							n = 0;
						return l(e, (function(r, i, a) {
							var o = e[a];
							n++, x(o, (function(e) {
								t.resolve(e)
							}), (function(e) {
								if (0 === --n) {
									var r = e || new Error("" + e);
									r.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + r.message, t.reject(r)
								}
							}), (function(e) {
								t.notify({
									index: a,
									value: e
								})
							}))
						}), void 0), t.promise
					}

					function G(e) {
						return x(e, (function(e) {
							return e = d(e, E), x(z(d(e, (function(e) {
								return x(e, i, i)
							}))), (function() {
								return e
							}))
						}))
					}
					E.resetUnhandledRejections = R, E.getUnhandledReasons = function() {
						return L.slice()
					}, E.stopUnhandledRejectionTracking = function() {
						R(), N = !1
					}, R(), E.reject = j, E.fulfill = H, E.master = function(e) {
						return O({
							isDef: function() {}
						}, (function(t, n) {
							return V(e, t, n)
						}), (function() {
							return E(e).inspect()
						}))
					}, E.spread = Y, O.prototype.spread = function(e, t) {
						return this.all().then((function(t) {
							return e.apply(void 0, t)
						}), t)
					}, E.async = function(e) {
						return function() {
							function t(e, t) {
								var a;
								if ("undefined" == typeof StopIteration) {
									try {
										a = n[e](t)
									} catch (e) {
										return j(e)
									}
									return a.done ? E(a.value) : x(a.value, r, i)
								}
								try {
									a = n[e](t)
								} catch (e) {
									return g(e) ? E(e.value) : j(e)
								}
								return x(a, r, i)
							}
							var n = e.apply(this, arguments),
								r = t.bind(t, "next"),
								i = t.bind(t, "throw");
							return r()
						}
					}, E.spawn = function(e) {
						E.done(E.async(e)())
					}, E.return = function(e) {
						throw new u(e)
					}, E.promised = function(e) {
						return function() {
							return Y([this, z(arguments)], (function(t, n) {
								return e.apply(t, n)
							}))
						}
					}, E.dispatch = V, O.prototype.dispatch = function(e, t) {
						var n = this,
							r = C();
						return E.nextTick((function() {
							n.promiseDispatch(r.resolve, e, t)
						})), r.promise
					}, E.get = function(e, t) {
						return E(e).dispatch("get", [t])
					}, O.prototype.get = function(e) {
						return this.dispatch("get", [e])
					}, E.set = function(e, t, n) {
						return E(e).dispatch("set", [t, n])
					}, O.prototype.set = function(e, t) {
						return this.dispatch("set", [e, t])
					}, E.del = E.delete = function(e, t) {
						return E(e).dispatch("delete", [t])
					}, O.prototype.del = O.prototype.delete = function(e) {
						return this.dispatch("delete", [e])
					}, E.mapply = E.post = function(e, t, n) {
						return E(e).dispatch("post", [t, n])
					}, O.prototype.mapply = O.prototype.post = function(e, t) {
						return this.dispatch("post", [e, t])
					}, E.send = E.mcall = E.invoke = function(e, t) {
						return E(e).dispatch("post", [t, c(arguments, 2)])
					}, O.prototype.send = O.prototype.mcall = O.prototype.invoke = function(e) {
						return this.dispatch("post", [e, c(arguments, 1)])
					}, E.fapply = function(e, t) {
						return E(e).dispatch("apply", [void 0, t])
					}, O.prototype.fapply = function(e) {
						return this.dispatch("apply", [void 0, e])
					}, E.try = E.fcall = function(e) {
						return E(e).dispatch("apply", [void 0, c(arguments, 1)])
					}, O.prototype.fcall = function() {
						return this.dispatch("apply", [void 0, c(arguments)])
					}, E.fbind = function(e) {
						var t = E(e),
							n = c(arguments, 1);
						return function() {
							return t.dispatch("apply", [this, n.concat(c(arguments))])
						}
					}, O.prototype.fbind = function() {
						var e = this,
							t = c(arguments);
						return function() {
							return e.dispatch("apply", [this, t.concat(c(arguments))])
						}
					}, E.keys = function(e) {
						return E(e).dispatch("keys", [])
					}, O.prototype.keys = function() {
						return this.dispatch("keys", [])
					}, E.all = z, O.prototype.all = function() {
						return z(this)
					}, E.any = Q, O.prototype.any = function() {
						return Q(this)
					}, E.allResolved = function(e, t, n) {
						return function() {
							return "undefined" != typeof console && "function" == typeof console.warn && console.warn(t + " is deprecated, use " + n + " instead.", new Error("").stack), e.apply(e, arguments)
						}
					}(G, "allResolved", "allSettled"), O.prototype.allResolved = function() {
						return G(this)
					}, E.allSettled = function(e) {
						return E(e).allSettled()
					}, O.prototype.allSettled = function() {
						return this.then((function(e) {
							return z(d(e, (function(e) {
								function t() {
									return e.inspect()
								}
								return (e = E(e)).then(t, t)
							})))
						}))
					}, E.fail = E.catch = function(e, t) {
						return E(e).then(void 0, t)
					}, O.prototype.fail = O.prototype.catch = function(e) {
						return this.then(void 0, e)
					}, E.progress = function(e, t) {
						return E(e).then(void 0, void 0, t)
					}, O.prototype.progress = function(e) {
						return this.then(void 0, void 0, e)
					}, E.fin = E.finally = function(e, t) {
						return E(e).finally(t)
					}, O.prototype.fin = O.prototype.finally = function(e) {
						if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
						return e = E(e), this.then((function(t) {
							return e.fcall().then((function() {
								return t
							}))
						}), (function(t) {
							return e.fcall().then((function() {
								throw t
							}))
						}))
					}, E.done = function(e, t, n, r) {
						return E(e).done(t, n, r)
					}, O.prototype.done = function(e, n, r) {
						var i = function(e) {
								E.nextTick((function() {
									if (v(e, a), !E.onerror) throw e;
									E.onerror(e)
								}))
							},
							a = e || n || r ? this.then(e, n, r) : this;
						"object" == typeof t && t && t.domain && (i = t.domain.bind(i)), a.then(void 0, i)
					}, E.timeout = function(e, t, n) {
						return E(e).timeout(t, n)
					}, O.prototype.timeout = function(e, t) {
						var n = C(),
							r = setTimeout((function() {
								t && "string" != typeof t || ((t = new Error(t || "Timed out after " + e + " ms")).code = "ETIMEDOUT"), n.reject(t)
							}), e);
						return this.then((function(e) {
							clearTimeout(r), n.resolve(e)
						}), (function(e) {
							clearTimeout(r), n.reject(e)
						}), n.notify), n.promise
					}, E.delay = function(e, t) {
						return void 0 === t && (t = e, e = void 0), E(e).delay(t)
					}, O.prototype.delay = function(e) {
						return this.then((function(t) {
							var n = C();
							return setTimeout((function() {
								n.resolve(t)
							}), e), n.promise
						}))
					}, E.nfapply = function(e, t) {
						return E(e).nfapply(t)
					}, O.prototype.nfapply = function(e) {
						var t = C(),
							n = c(e);
						return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise
					}, E.nfcall = function(e) {
						var t = c(arguments, 1);
						return E(e).nfapply(t)
					}, O.prototype.nfcall = function() {
						var e = c(arguments),
							t = C();
						return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise
					}, E.nfbind = E.denodeify = function(e) {
						if (void 0 === e) throw new Error("Q can't wrap an undefined function");
						var t = c(arguments, 1);
						return function() {
							var n = t.concat(c(arguments)),
								r = C();
							return n.push(r.makeNodeResolver()), E(e).fapply(n).fail(r.reject), r.promise
						}
					}, O.prototype.nfbind = O.prototype.denodeify = function() {
						var e = c(arguments);
						return e.unshift(this), E.denodeify.apply(void 0, e)
					}, E.nbind = function(e, t) {
						var n = c(arguments, 2);
						return function() {
							var r = n.concat(c(arguments)),
								i = C();

							function a() {
								return e.apply(t, arguments)
							}
							return r.push(i.makeNodeResolver()), E(a).fapply(r).fail(i.reject), i.promise
						}
					}, O.prototype.nbind = function() {
						var e = c(arguments, 0);
						return e.unshift(this), E.nbind.apply(void 0, e)
					}, E.nmapply = E.npost = function(e, t, n) {
						return E(e).npost(t, n)
					}, O.prototype.nmapply = O.prototype.npost = function(e, t) {
						var n = c(t || []),
							r = C();
						return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise
					}, E.nsend = E.nmcall = E.ninvoke = function(e, t) {
						var n = c(arguments, 2),
							r = C();
						return n.push(r.makeNodeResolver()), E(e).dispatch("post", [t, n]).fail(r.reject), r.promise
					}, O.prototype.nsend = O.prototype.nmcall = O.prototype.ninvoke = function(e) {
						var t = c(arguments, 1),
							n = C();
						return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise
					}, E.nodeify = function(e, t) {
						return E(e).nodeify(t)
					}, O.prototype.nodeify = function(e) {
						if (!e) return this;
						this.then((function(t) {
							E.nextTick((function() {
								e(null, t)
							}))
						}), (function(t) {
							E.nextTick((function() {
								e(t)
							}))
						}))
					}, E.noConflict = function() {
						throw new Error("Q.noConflict only works when Q is used as a global")
					};
					var q = w();
					return E
				}))
			}).call(this, n("4362"))
		},
		"4cef": function(e, t) {
			var n = /\s/;
			e.exports = function(e) {
				for (var t = e.length; t-- && n.test(e.charAt(t)););
				return t
			}
		},
		"4d63": function(e, t, n) {
			var r = n("83ab"),
				i = n("da84"),
				a = n("94ca"),
				o = n("7156"),
				s = n("9bf2").f,
				u = n("241c").f,
				c = n("44e7"),
				l = n("ad6d"),
				f = n("9f7f"),
				d = n("6eeb"),
				h = n("d039"),
				p = n("69f3").set,
				_ = n("2626"),
				m = n("b622")("match"),
				b = i.RegExp,
				g = b.prototype,
				v = /a/g,
				y = /a/g,
				A = new b(v) !== v,
				S = f.UNSUPPORTED_Y;
			if (r && a("RegExp", !A || S || h((function() {
					return y[m] = !1, b(v) != v || b(y) == y || "/a/i" != b(v, "i")
				})))) {
				for (var w = function(e, t) {
						var n, r = this instanceof w,
							i = c(e),
							a = void 0 === t;
						if (!r && i && e.constructor === w && a) return e;
						A ? i && !a && (e = e.source) : e instanceof w && (a && (t = l.call(e)), e = e.source), S && ((n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")));
						var s = o(A ? new b(e, t) : b(e, t), r ? this : g, w);
						return S && n && p(s, {
							sticky: n
						}), s
					}, E = function(e) {
						e in w || s(w, e, {
							configurable: !0,
							get: function() {
								return b[e]
							},
							set: function(t) {
								b[e] = t
							}
						})
					}, T = u(b), C = 0; T.length > C;) E(T[C++]);
				g.constructor = w, w.prototype = g, d(i, "RegExp", w)
			}
			_("RegExp")
		},
		"4d64": function(e, t, n) {
			var r = n("fc6a"),
				i = n("50c4"),
				a = n("23cb"),
				o = function(e) {
					return function(t, n, o) {
						var s, u = r(t),
							c = i(u.length),
							l = a(o, c);
						if (e && n != n) {
							for (; c > l;)
								if ((s = u[l++]) != s) return !0
						} else
							for (; c > l; l++)
								if ((e || l in u) && u[l] === n) return e || l || 0;
						return !e && -1
					}
				};
			e.exports = {
				includes: o(!0),
				indexOf: o(!1)
			}
		},
		"4d90": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("0ccb").start;
			r({
				target: "String",
				proto: !0,
				forced: n("9a0c")
			}, {
				padStart: function(e) {
					return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		},
		"4de4": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("b727").filter;
			r({
				target: "Array",
				proto: !0,
				forced: !n("1dde")("filter")
			}, {
				filter: function(e) {
					return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		},
		"4df4": function(e, t, n) {
			"use strict";
			var r = n("0366"),
				i = n("7b0b"),
				a = n("9bdd"),
				o = n("e95a"),
				s = n("50c4"),
				u = n("8418"),
				c = n("35a1");
			e.exports = function(e) {
				var t, n, l, f, d, h, p = i(e),
					_ = "function" == typeof this ? this : Array,
					m = arguments.length,
					b = m > 1 ? arguments[1] : void 0,
					g = void 0 !== b,
					v = c(p),
					y = 0;
				if (g && (b = r(b, m > 2 ? arguments[2] : void 0, 2)), null == v || _ == Array && o(v))
					for (n = new _(t = s(p.length)); t > y; y++) h = g ? b(p[y], y) : p[y], u(n, y, h);
				else
					for (d = (f = v.call(p)).next, n = new _; !(l = d.call(f)).done; y++) h = g ? a(f, b, [l.value, y], !0) : l.value, u(n, y, h);
				return n.length = y, n
			}
		},
		"4ec9": function(e, t, n) {
			"use strict";
			var r = n("6d61"),
				i = n("6566");
			e.exports = r("Map", (function(e) {
				return function() {
					return e(this, arguments.length ? arguments[0] : void 0)
				}
			}), i)
		},
		"4f2a": function(e, t) {
			t.encode = function(e) {
				var t = "";
				for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
				return t
			}, t.decode = function(e) {
				for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
					var a = n[r].split("=");
					t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
				}
				return t
			}
		},
		"4f95": function(e, t, n) {
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
			}), t.SubtitleListBox = void 0;
			var i = n("1521"),
				a = n("bedf"),
				o = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n), new a.SubtitleSwitchHandler(t, this, n)
					}, t
				}(i.ListBox);
			t.SubtitleListBox = o
		},
		5038: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("id", {
					months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
					weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
					weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
					weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /pagi|siang|sore|malam/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
					},
					calendar: {
						sameDay: "[Hari ini pukul] LT",
						nextDay: "[Besok pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kemarin pukul] LT",
						lastWeek: "dddd [lalu pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dalam %s",
						past: "%s yang lalu",
						s: "beberapa detik",
						ss: "%d detik",
						m: "semenit",
						mm: "%d menit",
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
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"50c4": function(e, t, n) {
			var r = n("a691"),
				i = Math.min;
			e.exports = function(e) {
				return e > 0 ? i(r(e), 9007199254740991) : 0
			}
		},
		5120: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ga", {
					months: ["EanÃ¡ir", "Feabhra", "MÃ¡rta", "AibreÃ¡n", "Bealtaine", "Meitheamh", "IÃºil", "LÃºnasa", "MeÃ¡n FÃ³mhair", "Deireadh FÃ³mhair", "Samhain", "Nollaig"],
					monthsShort: ["Ean", "Feabh", "MÃ¡rt", "Aib", "Beal", "Meith", "IÃºil", "LÃºn", "M.F.", "D.F.", "Samh", "Noll"],
					monthsParseExact: !0,
					weekdays: ["DÃ© Domhnaigh", "DÃ© Luain", "DÃ© MÃ¡irt", "DÃ© CÃ©adaoin", "DÃ©ardaoin", "DÃ© hAoine", "DÃ© Sathairn"],
					weekdaysShort: ["Domh", "Luan", "MÃ¡irt", "CÃ©ad", "DÃ©ar", "Aoine", "Sath"],
					weekdaysMin: ["Do", "Lu", "MÃ¡", "CÃ©", "DÃ©", "A", "Sa"],
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Inniu ag] LT",
						nextDay: "[AmÃ¡rach ag] LT",
						nextWeek: "dddd [ag] LT",
						lastDay: "[InnÃ© ag] LT",
						lastWeek: "dddd [seo caite] [ag] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "i %s",
						past: "%s Ã³ shin",
						s: "cÃºpla soicind",
						ss: "%d soicind",
						m: "nÃ³imÃ©ad",
						mm: "%d nÃ³imÃ©ad",
						h: "uair an chloig",
						hh: "%d uair an chloig",
						d: "lÃ¡",
						dd: "%d lÃ¡",
						M: "mÃ­",
						MM: "%d mÃ­onna",
						y: "bliain",
						yy: "%d bliain"
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
		5135: function(e, t) {
			var n = {}.hasOwnProperty;
			e.exports = function(e, t) {
				return n.call(e, t)
			}
		},
		5270: function(e, t, n) {
			"use strict";
			var r = n("c532"),
				i = n("c401"),
				a = n("2e67"),
				o = n("2444");

			function s(e) {
				e.cancelToken && e.cancelToken.throwIfRequested()
			}
			e.exports = function(e) {
				return s(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
					delete e.headers[t]
				})), (e.adapter || o.adapter)(e).then((function(t) {
					return s(e), t.data = i(t.data, t.headers, e.transformResponse), t
				}), (function(t) {
					return a(t) || (s(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
				}))
			}
		},
		5294: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
					n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
				e.defineLocale("ur", {
					months: t,
					monthsShort: t,
					weekdays: n,
					weekdaysShort: n,
					weekdaysMin: n,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "ddddØŒ D MMMM YYYY HH:mm"
					},
					meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
					isPM: function(e) {
						return "Ø´Ø§Ù…" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
					},
					calendar: {
						sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
						nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
						nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
						lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
						lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s Ø¨Ø¹Ø¯",
						past: "%s Ù‚Ø¨Ù„",
						s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
						ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
						m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
						mm: "%d Ù…Ù†Ù¹",
						h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
						hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
						d: "Ø§ÛŒÚ© Ø¯Ù†",
						dd: "%d Ø¯Ù†",
						M: "Ø§ÛŒÚ© Ù…Ø§Û",
						MM: "%d Ù…Ø§Û",
						y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
						yy: "%d Ø³Ø§Ù„"
					},
					preparse: function(e) {
						return e.replace(/ØŒ/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "ØŒ")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"52bd": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ss", {
					months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
					monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
					weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
					weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
					weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Namuhla nga] LT",
						nextDay: "[Kusasa nga] LT",
						nextWeek: "dddd [nga] LT",
						lastDay: "[Itolo nga] LT",
						lastWeek: "dddd [leliphelile] [nga] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "nga %s",
						past: "wenteka nga %s",
						s: "emizuzwana lomcane",
						ss: "%d mzuzwana",
						m: "umzuzu",
						mm: "%d emizuzu",
						h: "lihora",
						hh: "%d emahora",
						d: "lilanga",
						dd: "%d emalanga",
						M: "inyanga",
						MM: "%d tinyanga",
						y: "umnyaka",
						yy: "%d iminyaka"
					},
					meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
					meridiem: function(e, t, n) {
						return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
					},
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
					},
					dayOfMonthOrdinalParse: /\d{1,2}/,
					ordinal: "%d",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		5317: function(e, t) {
			var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
				r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
			e.exports = function(e) {
				var t = e,
					i = e.indexOf("["),
					a = e.indexOf("]"); - 1 != i && -1 != a && (e = e.substring(0, i) + e.substring(i, a).replace(/:/g, ";") + e.substring(a, e.length));
				for (var o = n.exec(e || ""), s = {}, u = 14; u--;) s[r[u]] = o[u] || "";
				return -1 != i && -1 != a && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = function(e, t) {
					var n = t.replace(/\/{2,9}/g, "/").split("/");
					return "/" != t.substr(0, 1) && 0 !== t.length || n.splice(0, 1), "/" == t.substr(t.length - 1, 1) && n.splice(n.length - 1, 1), n
				}(0, s.path), s.queryKey = function(e, t) {
					var n = {};
					return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(e, t, r) {
						t && (n[t] = r)
					})), n
				}(0, s.query), s
			}
		},
		5319: function(e, t, n) {
			"use strict";
			var r = n("d784"),
				i = n("825a"),
				a = n("50c4"),
				o = n("a691"),
				s = n("1d80"),
				u = n("8aa5"),
				c = n("0cb2"),
				l = n("14c3"),
				f = Math.max,
				d = Math.min,
				h = function(e) {
					return void 0 === e ? e : String(e)
				};
			r("replace", 2, (function(e, t, n, r) {
				var p = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
					_ = r.REPLACE_KEEPS_$0,
					m = p ? "$" : "$0";
				return [function(n, r) {
					var i = s(this),
						a = null == n ? void 0 : n[e];
					return void 0 !== a ? a.call(n, i, r) : t.call(String(i), n, r)
				}, function(e, r) {
					if (!p && _ || "string" == typeof r && -1 === r.indexOf(m)) {
						var s = n(t, e, this, r);
						if (s.done) return s.value
					}
					var b = i(e),
						g = String(this),
						v = "function" == typeof r;
					v || (r = String(r));
					var y = b.global;
					if (y) {
						var A = b.unicode;
						b.lastIndex = 0
					}
					for (var S = [];;) {
						var w = l(b, g);
						if (null === w) break;
						if (S.push(w), !y) break;
						"" === String(w[0]) && (b.lastIndex = u(g, a(b.lastIndex), A))
					}
					for (var E = "", T = 0, C = 0; C < S.length; C++) {
						w = S[C];
						for (var $ = String(w[0]), k = f(d(o(w.index), g.length), 0), O = [], x = 1; x < w.length; x++) O.push(h(w[x]));
						var P = w.groups;
						if (v) {
							var M = [$].concat(O, k, g);
							void 0 !== P && M.push(P);
							var I = String(r.apply(void 0, M))
						} else I = c($, g, k, O, P, r);
						k >= T && (E += g.slice(T, k) + I, T = k + $.length)
					}
					return E + g.slice(T)
				}]
			}))
		},
		5377: function(e, t, n) {
			var r = n("83ab"),
				i = n("9bf2"),
				a = n("ad6d"),
				o = n("9f7f").UNSUPPORTED_Y;
			r && ("g" != /./g.flags || o) && i.f(RegExp.prototype, "flags", {
				configurable: !0,
				get: a
			})
		},
		"53ca": function(e, t, n) {
			"use strict";

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			n.d(t, "a", (function() {
				return r
			})), n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0")
		},
		5530: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n("b64b"), n("a4d3"), n("4de4"), n("e439"), n("159b"), n("dbb4");
			var r = n("ade3");

			function i(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? i(Object(n), !0).forEach((function(t) {
						Object(r.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
		},
		"55c9": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
					n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
					r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
					i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
				e.defineLocale("es-us", {
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
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "MM/DD/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY h:mm A",
						LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
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
						doy: 6
					}
				})
			}(n("c1df"))
		},
		5692: function(e, t, n) {
			var r = n("c430"),
				i = n("c6cd");
			(e.exports = function(e, t) {
				return i[e] || (i[e] = void 0 !== t ? t : {})
			})("versions", []).push({
				version: "3.9.1",
				mode: r ? "pure" : "global",
				copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)"
			})
		},
		"56ef": function(e, t, n) {
			var r = n("d066"),
				i = n("241c"),
				a = n("7418"),
				o = n("825a");
			e.exports = r("Reflect", "ownKeys") || function(e) {
				var t = i.f(o(e)),
					n = a.f;
				return n ? t.concat(n(e)) : t
			}
		},
		"571d": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.DOM = void 0;
			var r = function() {
				function e(e, t) {
					if (this.document = document, e instanceof Array) {
						if (e.length > 0 && e[0] instanceof HTMLElement) {
							var n = e;
							this.elements = n
						}
					} else if (e instanceof HTMLElement) {
						var r = e;
						this.elements = [r]
					} else if (e instanceof Document) this.elements = null;
					else if (t) {
						var i = e;
						for (var a in r = document.createElement(i), t) {
							var o = t[a];
							null != o && r.setAttribute(a, o)
						}
						this.elements = [r]
					} else {
						var s = e;
						this.elements = this.findChildElements(s)
					}
				}
				return Object.defineProperty(e.prototype, "length", {
					get: function() {
						return this.elements ? this.elements.length : 0
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.get = function(e) {
					return void 0 === e ? this.elements : !this.elements || e >= this.elements.length || e < -this.elements.length ? void 0 : e < 0 ? this.elements[this.elements.length - e] : this.elements[e]
				}, e.prototype.forEach = function(e) {
					this.elements && this.elements.forEach((function(t) {
						e(t)
					}))
				}, e.prototype.findChildElementsOfElement = function(e, t) {
					var n = e.querySelectorAll(t);
					return [].slice.call(n)
				}, e.prototype.findChildElements = function(e) {
					var t = this,
						n = [];
					return this.elements ? (this.forEach((function(r) {
						n = n.concat(t.findChildElementsOfElement(r, e))
					})), n) : this.findChildElementsOfElement(document, e)
				}, e.prototype.find = function(t) {
					return new e(this.findChildElements(t))
				}, e.prototype.focusToFirstInput = function() {
					var e = this.findChildElements('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
					e.length > 0 && e[0].focus()
				}, e.prototype.scrollTo = function(e, t) {
					this.elements[0].scrollTo(e, t)
				}, e.prototype.html = function(e) {
					return arguments.length > 0 ? this.setHtml(e) : this.getHtml()
				}, e.prototype.getHtml = function() {
					return this.elements[0].innerHTML
				}, e.prototype.setHtml = function(e) {
					return void 0 !== e && null != e || (e = ""), this.forEach((function(t) {
						t.innerHTML = e
					})), this
				}, e.prototype.empty = function() {
					return this.forEach((function(e) {
						e.innerHTML = ""
					})), this
				}, e.prototype.val = function() {
					var e = this.elements[0];
					if (e instanceof HTMLSelectElement || e instanceof HTMLInputElement) return e.value;
					throw new Error("val() not supported for " + typeof e)
				}, e.prototype.attr = function(e, t) {
					return arguments.length > 1 ? this.setAttr(e, t) : this.getAttr(e)
				}, e.prototype.removeAttr = function(e) {
					this.forEach((function(t) {
						t.removeAttribute(e)
					}))
				}, e.prototype.getAttr = function(e) {
					return this.elements[0].getAttribute(e)
				}, e.prototype.setAttr = function(e, t) {
					return this.forEach((function(n) {
						n.setAttribute(e, t)
					})), this
				}, e.prototype.data = function(e, t) {
					return arguments.length > 1 ? this.setData(e, t) : this.getData(e)
				}, e.prototype.getData = function(e) {
					return this.elements[0].getAttribute("data-" + e)
				}, e.prototype.setData = function(e, t) {
					return this.forEach((function(n) {
						n.setAttribute("data-" + e, t)
					})), this
				}, e.prototype.append = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return this.forEach((function(t) {
						e.forEach((function(e) {
							e.elements.forEach((function(n, r) {
								t.appendChild(e.elements[r])
							}))
						}))
					})), this
				}, e.prototype.remove = function() {
					this.forEach((function(e) {
						var t = e.parentNode;
						t && t.removeChild(e)
					}))
				}, e.prototype.offset = function() {
					var e = this.elements[0].getBoundingClientRect(),
						t = document.body.parentElement.getBoundingClientRect();
					return {
						top: e.top - t.top,
						left: e.left - t.left
					}
				}, e.prototype.width = function() {
					return this.elements[0].offsetWidth
				}, e.prototype.height = function() {
					return this.elements[0].offsetHeight
				}, e.prototype.size = function() {
					return {
						width: this.width(),
						height: this.height()
					}
				}, e.prototype.on = function(e, t) {
					var n = this;
					return e.split(" ").forEach((function(e) {
						null == n.elements ? n.document.addEventListener(e, t) : n.forEach((function(n) {
							n.addEventListener(e, t)
						}))
					})), this
				}, e.prototype.off = function(e, t) {
					var n = this;
					return e.split(" ").forEach((function(e) {
						null == n.elements ? n.document.removeEventListener(e, t) : n.forEach((function(n) {
							n.removeEventListener(e, t)
						}))
					})), this
				}, e.prototype.addClass = function(e) {
					return this.forEach((function(t) {
						var n;
						if (t.classList) {
							var r = e.split(" ").filter((function(e) {
								return e.length > 0
							}));
							r.length > 0 && (n = t.classList).add.apply(n, r)
						} else t.className += " " + e
					})), this
				}, e.prototype.removeClass = function(e) {
					return this.forEach((function(t) {
						var n;
						if (t.classList) {
							var r = e.split(" ").filter((function(e) {
								return e.length > 0
							}));
							r.length > 0 && (n = t.classList).remove.apply(n, r)
						} else t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
					})), this
				}, e.prototype.hasClass = function(e) {
					var t = !1;
					return this.forEach((function(n) {
						n.classList ? n.classList.contains(e) && (t = !0) : new RegExp("(^| )" + e + "( |$)", "gi").test(n.className) && (t = !0)
					})), t
				}, e.prototype.css = function(e, t) {
					if ("string" == typeof e) {
						var n = e;
						return 2 === arguments.length ? this.setCss(n, t) : this.getCss(n)
					}
					var r = e;
					return this.setCssCollection(r)
				}, e.prototype.getCss = function(e) {
					return getComputedStyle(this.elements[0])[e]
				}, e.prototype.setCss = function(e, t) {
					return this.forEach((function(n) {
						n.style[e] = t
					})), this
				}, e.prototype.setCssCollection = function(e) {
					return this.forEach((function(t) {
						Object.assign(t.style, e)
					})), this
				}, e
			}();
			t.DOM = r
		},
		"576c": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tet", {
					months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
					monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
					weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
					weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
					weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ohin iha] LT",
						nextDay: "[Aban iha] LT",
						nextWeek: "dddd [iha] LT",
						lastDay: "[Horiseik iha] LT",
						lastWeek: "dddd [semana kotuk] [iha] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "iha %s",
						past: "%s liuba",
						s: "segundu balun",
						ss: "segundu %d",
						m: "minutu ida",
						mm: "minutu %d",
						h: "oras ida",
						hh: "oras %d",
						d: "loron ida",
						dd: "loron %d",
						M: "fulan ida",
						MM: "fulan %d",
						y: "tinan ida",
						yy: "tinan %d"
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
		"585a": function(e, t, n) {
			(function(t) {
				var n = "object" == typeof t && t && t.Object === Object && t;
				e.exports = n
			}).call(this, n("c8ba"))
		},
		"587c": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Component = void 0;
			var r = n("ab12"),
				i = n("571d"),
				a = n("09e6"),
				o = n("e1ee"),
				s = function() {
					function e(e) {
						void 0 === e && (e = {}), this.componentEvents = {
							onShow: new a.EventDispatcher,
							onHide: new a.EventDispatcher,
							onHoverChanged: new a.EventDispatcher,
							onEnabled: new a.EventDispatcher,
							onDisabled: new a.EventDispatcher
						}, this.config = this.mergeConfig(e, {
							tag: "div",
							id: "bmpui-id-" + r.Guid.next(),
							cssPrefix: "bmpui",
							cssClass: "ui-component",
							cssClasses: [],
							hidden: !1,
							disabled: !1
						}, {})
					}
					return e.prototype.initialize = function() {
						this.hidden = this.config.hidden, this.disabled = this.config.disabled, this.isHidden() && (this.hidden = !1, this.hide()), this.isDisabled() && (this.disabled = !1, this.disable())
					}, e.prototype.configure = function(e, t) {
						var n = this;
						this.onShow.subscribe((function() {
							t.onComponentShow.dispatch(n)
						})), this.onHide.subscribe((function() {
							t.onComponentHide.dispatch(n)
						})), this.getDomElement().on("mouseenter", (function() {
							n.onHoverChangedEvent(!0)
						})), this.getDomElement().on("mouseleave", (function() {
							n.onHoverChangedEvent(!1)
						}))
					}, e.prototype.release = function() {}, e.prototype.toDomElement = function() {
						return new i.DOM(this.config.tag, {
							id: this.config.id,
							class: this.getCssClasses(),
							role: this.config.role
						})
					}, e.prototype.getDomElement = function() {
						return this.element || (this.element = this.toDomElement()), this.element
					}, e.prototype.setAriaLabel = function(e) {
						this.setAriaAttr("label", o.i18n.performLocalization(e))
					}, e.prototype.setAriaAttr = function(e, t) {
						this.getDomElement().attr("aria-" + e, t)
					}, e.prototype.mergeConfig = function(e, t, n) {
						return Object.assign({}, n, t, e)
					}, e.prototype.getCssClasses = function() {
						var e = this,
							t = [this.config.cssClass].concat(this.config.cssClasses);
						return (t = t.map((function(t) {
							return e.prefixCss(t)
						}))).join(" ").trim()
					}, e.prototype.prefixCss = function(e) {
						return this.config.cssPrefix + "-" + e
					}, e.prototype.getConfig = function() {
						return this.config
					}, e.prototype.hide = function() {
						this.hidden || (this.hidden = !0, this.getDomElement().addClass(this.prefixCss(e.CLASS_HIDDEN)), this.onHideEvent())
					}, e.prototype.show = function() {
						this.hidden && (this.getDomElement().removeClass(this.prefixCss(e.CLASS_HIDDEN)), this.hidden = !1, this.onShowEvent())
					}, e.prototype.isHidden = function() {
						return this.hidden
					}, e.prototype.isShown = function() {
						return !this.isHidden()
					}, e.prototype.toggleHidden = function() {
						this.isHidden() ? this.show() : this.hide()
					}, e.prototype.disable = function() {
						this.disabled || (this.disabled = !0, this.getDomElement().addClass(this.prefixCss(e.CLASS_DISABLED)), this.onDisabledEvent())
					}, e.prototype.enable = function() {
						this.disabled && (this.getDomElement().removeClass(this.prefixCss(e.CLASS_DISABLED)), this.disabled = !1, this.onEnabledEvent())
					}, e.prototype.isDisabled = function() {
						return this.disabled
					}, e.prototype.isEnabled = function() {
						return !this.isDisabled()
					}, e.prototype.isHovered = function() {
						return this.hovered
					}, e.prototype.onShowEvent = function() {
						this.componentEvents.onShow.dispatch(this)
					}, e.prototype.onHideEvent = function() {
						this.componentEvents.onHide.dispatch(this)
					}, e.prototype.onEnabledEvent = function() {
						this.componentEvents.onEnabled.dispatch(this)
					}, e.prototype.onDisabledEvent = function() {
						this.componentEvents.onDisabled.dispatch(this)
					}, e.prototype.onHoverChangedEvent = function(e) {
						this.hovered = e, this.componentEvents.onHoverChanged.dispatch(this, {
							hovered: e
						})
					}, Object.defineProperty(e.prototype, "onShow", {
						get: function() {
							return this.componentEvents.onShow.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onHide", {
						get: function() {
							return this.componentEvents.onHide.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onEnabled", {
						get: function() {
							return this.componentEvents.onEnabled.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onDisabled", {
						get: function() {
							return this.componentEvents.onDisabled.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onHoverChanged", {
						get: function() {
							return this.componentEvents.onHoverChanged.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), e.CLASS_HIDDEN = "hidden", e.CLASS_DISABLED = "disabled", e
				}();
			t.Component = s
		},
		5887: function(e, t, n) {
			"undefined" != typeof self && self, e.exports = function(e) {
				return function(e) {
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
					return n.m = e, n.c = t, n.d = function(e, t, r) {
						n.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: r
						})
					}, n.r = function(e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, n.t = function(e, t) {
						if (1 & t && (e = n(e)), 8 & t) return e;
						if (4 & t && "object" == typeof e && e && e.__esModule) return e;
						var r = Object.create(null);
						if (n.r(r), Object.defineProperty(r, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
							for (var i in e) n.d(r, i, function(t) {
								return e[t]
							}.bind(null, i));
						return r
					}, n.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return n.d(t, "a", t), t
					}, n.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, n.p = "", n(n.s = "fb15")
				}({
					"00fd": function(e, t, n) {
						var r = n("9e69"),
							i = Object.prototype,
							a = i.hasOwnProperty,
							o = i.toString,
							s = r ? r.toStringTag : void 0;
						e.exports = function(e) {
							var t = a.call(e, s),
								n = e[s];
							try {
								e[s] = void 0;
								var r = !0
							} catch (e) {}
							var i = o.call(e);
							return r && (t ? e[s] = n : delete e[s]), i
						}
					},
					"03dd": function(e, t, n) {
						var r = n("eac5"),
							i = n("57a5"),
							a = Object.prototype.hasOwnProperty;
						e.exports = function(e) {
							if (!r(e)) return i(e);
							var t = [];
							for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
							return t
						}
					},
					"0621": function(e, t, n) {
						var r = n("9e69"),
							i = n("d370"),
							a = n("6747"),
							o = r ? r.isConcatSpreadable : void 0;
						e.exports = function(e) {
							return a(e) || i(e) || !!(o && e && e[o])
						}
					},
					"06cf": function(e, t, n) {
						var r = n("83ab"),
							i = n("d1e7"),
							a = n("5c6c"),
							o = n("fc6a"),
							s = n("c04e"),
							u = n("5135"),
							c = n("0cfb"),
							l = Object.getOwnPropertyDescriptor;
						t.f = r ? l : function(e, t) {
							if (e = o(e), t = s(t, !0), c) try {
								return l(e, t)
							} catch (e) {}
							if (u(e, t)) return a(!i.f.call(e, t), e[t])
						}
					},
					"0733": function(e, t, n) {
						"use strict";
						n.d(t, "a", (function() {
							return a
						}));
						var r = n("2fa3"),
							i = n("9404");
						const a = function(e, t, {
							maxSwipeTime: n,
							minHorizontalSwipeDistance: a,
							maxVerticalSwipeDistance: o
						}) {
							if (!e || !e.addEventListener || !Object(i.k)(t)) return null;
							let s = 0,
								u = 0,
								c = null,
								l = !1;

							function f(e) {
								const t = e.changedTouches[0];
								s = t.screenX, u = t.screenY, c = (new Date).getTime(), l = !0
							}

							function d(e) {
								if (!l) return;
								l = !1;
								const r = e.changedTouches[0],
									i = r.screenX - s,
									f = r.screenY - u;
								if ((new Date).getTime() - c < n && Math.abs(i) >= a && Math.abs(f) <= o) {
									const e = {
										toLeft: !1,
										toRight: !1
									};
									i < 0 ? e.toLeft = !0 : e.toRight = !0, t(e)
								}
							}
							return Object(r.k)(e, "touchstart", f, {
									passive: !0
								}), Object(r.k)(e, "touchend", d, {
									passive: !0
								}),
								function() {
									Object(r.j)(e, "touchstart", f), Object(r.j)(e, "touchend", d)
								}
						}
					},
					"07c7": function(e, t) {
						e.exports = function() {
							return !1
						}
					},
					"087d": function(e, t) {
						e.exports = function(e, t) {
							for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
							return e
						}
					},
					"08cc": function(e, t, n) {
						var r = n("1a8c");
						e.exports = function(e) {
							return e == e && !r(e)
						}
					},
					"0b07": function(e, t, n) {
						var r = n("34ac"),
							i = n("3698");
						e.exports = function(e, t) {
							var n = i(e, t);
							return r(n) ? n : void 0
						}
					},
					"0cb2": function(e, t, n) {
						var r = n("7b0b"),
							i = Math.floor,
							a = "".replace,
							o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
							s = /\$([$&'`]|\d{1,2})/g;
						e.exports = function(e, t, n, u, c, l) {
							var f = n + e.length,
								d = u.length,
								h = s;
							return void 0 !== c && (c = r(c), h = o), a.call(l, h, (function(r, a) {
								var o;
								switch (a.charAt(0)) {
									case "$":
										return "$";
									case "&":
										return e;
									case "`":
										return t.slice(0, n);
									case "'":
										return t.slice(f);
									case "<":
										o = c[a.slice(1, -1)];
										break;
									default:
										var s = +a;
										if (0 === s) return r;
										if (s > d) {
											var l = i(s / 10);
											return 0 === l ? r : l <= d ? void 0 === u[l - 1] ? a.charAt(1) : u[l - 1] + a.charAt(1) : r
										}
										o = u[s - 1]
								}
								return void 0 === o ? "" : o
							}))
						}
					},
					"0cfb": function(e, t, n) {
						var r = n("83ab"),
							i = n("d039"),
							a = n("cc12");
						e.exports = !r && !i((function() {
							return 7 != Object.defineProperty(a("div"), "a", {
								get: function() {
									return 7
								}
							}).a
						}))
					},
					"0d24": function(e, t, n) {
						(function(e) {
							var r = n("2b3e"),
								i = n("07c7"),
								a = t && !t.nodeType && t,
								o = a && "object" == typeof e && e && !e.nodeType && e,
								s = o && o.exports === a ? r.Buffer : void 0,
								u = (s ? s.isBuffer : void 0) || i;
							e.exports = u
						}).call(this, n("62e4")(e))
					},
					"0da5": function(e, t, n) {
						(t = n("24fb")(!1)).push([e.i, ".vc-nav-header{display:flex;justify-content:space-between}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--leading-snug);border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded)}.vc-nav-arrow.is-left{margin-right:auto}.vc-nav-arrow.is-right{margin-left:auto}.vc-nav-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-nav-arrow:hover{background-color:var(--gray-900)}.vc-nav-arrow:focus{border-color:var(--accent-600)}.vc-nav-title{color:var(--accent-100);font-weight:var(--font-bold);line-height:var(--leading-snug);padding:4px 8px;border-radius:var(--rounded);border-width:2px;border-style:solid;border-color:transparent;-webkit-user-select:none;user-select:none}.vc-nav-title:hover{background-color:var(--gray-900)}.vc-nav-title:focus{border-color:var(--accent-600)}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px}.vc-nav-item{width:48px;text-align:center;line-height:var(--leading-snug);font-weight:var(--font-semibold);padding:4px 0;cursor:pointer;border-color:transparent;border-width:2px;border-style:solid;border-radius:var(--rounded);-webkit-user-select:none;user-select:none}.vc-nav-item:hover{color:var(--white);background-color:var(--gray-900);box-shadow:var(--shadow-inner)}.vc-nav-item.is-active{color:var(--accent-900);background:var(--accent-100);font-weight:var(--font-bold);box-shadow:var(--shadow)}.vc-nav-item.is-current{color:var(--accent-100);font-weight:var(--bold);border-color:var(--accent-100)}.vc-nav-item:focus{border-color:var(--accent-600)}.vc-nav-item.is-disabled{opacity:.25;pointer-events:none}.vc-is-dark .vc-nav-title{color:var(--gray-900)}.vc-is-dark .vc-nav-title:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-title:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-arrow:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-arrow:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-item:hover{color:var(--gray-900);background-color:var(--gray-200);box-shadow:none}.vc-is-dark .vc-nav-item.is-active{color:var(--white);background:var(--accent-500)}.vc-is-dark .vc-nav-item.is-current{color:var(--accent-600);border-color:var(--accent-500)}.vc-is-dark .vc-nav-item:focus{border-color:var(--accent-400)}", ""]), e.exports = t
					},
					"0f0f": function(e, t, n) {
						var r = n("8eeb"),
							i = n("9934");
						e.exports = function(e, t) {
							return e && r(t, i(t), e)
						}
					},
					"0f5c": function(e, t, n) {
						var r = n("159a");
						e.exports = function(e, t, n) {
							return null == e ? e : r(e, t, n)
						}
					},
					"0fb2": function(e, t, n) {
						(t = n("24fb")(!1)).push([e.i, '.vc-popover-content-wrapper[data-v-39b30300]{--popover-horizontal-content-offset:8px;--popover-vertical-content-offset:10px;--popover-slide-translation:15px;--popover-transition-time:0.14s ease-in-out;--popover-caret-horizontal-offset:18px;--popover-caret-vertical-offset:8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper[data-v-39b30300]:not(.is-interactive){pointer-events:none}.vc-popover-content[data-v-39b30300]{position:relative;outline:none;z-index:10;box-shadow:var(--shadow-lg)}.vc-popover-content.direction-bottom[data-v-39b30300]{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top[data-v-39b30300]{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left[data-v-39b30300]{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right[data-v-39b30300]{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret[data-v-39b30300]{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;-webkit-user-select:none;user-select:none;z-index:-1}.vc-popover-caret.direction-bottom[data-v-39b30300]{top:0}.vc-popover-caret.direction-bottom.align-left[data-v-39b30300]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center[data-v-39b30300]{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right[data-v-39b30300]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top[data-v-39b30300]{top:100%}.vc-popover-caret.direction-top.align-left[data-v-39b30300]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center[data-v-39b30300]{transform:translateX(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right[data-v-39b30300]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left[data-v-39b30300]{left:100%}.vc-popover-caret.direction-left.align-top[data-v-39b30300]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle[data-v-39b30300]{transform:translateY(-50%) translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom[data-v-39b30300]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-right[data-v-39b30300]{left:0}.vc-popover-caret.direction-right.align-top[data-v-39b30300]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle[data-v-39b30300]{transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom[data-v-39b30300]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.align-left[data-v-39b30300]{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center[data-v-39b30300]{left:50%}.vc-popover-caret.align-right[data-v-39b30300]{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top[data-v-39b30300]{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle[data-v-39b30300]{top:50%}.vc-popover-caret.align-bottom[data-v-39b30300]{bottom:var(--popover-caret-vertical-offset)}.fade-enter-active[data-v-39b30300],.fade-leave-active[data-v-39b30300],.slide-fade-enter-active[data-v-39b30300],.slide-fade-leave-active[data-v-39b30300]{transition:all var(--popover-transition-time);pointer-events:none}.fade-enter[data-v-39b30300],.fade-leave-to[data-v-39b30300],.slide-fade-enter[data-v-39b30300],.slide-fade-leave-to[data-v-39b30300]{opacity:0}.slide-fade-enter.direction-bottom[data-v-39b30300],.slide-fade-leave-to.direction-bottom[data-v-39b30300]{transform:translateY(calc(var(--popover-slide-translation)*-1))}.slide-fade-enter.direction-top[data-v-39b30300],.slide-fade-leave-to.direction-top[data-v-39b30300]{transform:translateY(var(--popover-slide-translation))}.slide-fade-enter.direction-left[data-v-39b30300],.slide-fade-leave-to.direction-left[data-v-39b30300]{transform:translateX(var(--popover-slide-translation))}.slide-fade-enter.direction-right[data-v-39b30300],.slide-fade-leave-to.direction-right[data-v-39b30300]{transform:translateX(calc(var(--popover-slide-translation)*-1))}', ""]), e.exports = t
					},
					"100e": function(e, t, n) {
						var r = n("cd9d"),
							i = n("2286"),
							a = n("c1c9");
						e.exports = function(e, t) {
							return a(i(e, t, r), e + "")
						}
					},
					1041: function(e, t, n) {
						var r = n("8eeb"),
							i = n("a029");
						e.exports = function(e, t) {
							return r(e, i(e), t)
						}
					},
					"107c": function(e, t, n) {
						var r = n("d039");
						e.exports = r((function() {
							var e = RegExp("(?<a>b)", "string".charAt(5));
							return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
						}))
					},
					1290: function(e, t) {
						e.exports = function(e) {
							var t = typeof e;
							return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
						}
					},
					1310: function(e, t) {
						e.exports = function(e) {
							return null != e && "object" == typeof e
						}
					},
					1315: function(e, t, n) {
						"use strict";
						n.d(t, "a", (function() {
							return l
						}));
						var r = n("8bbf"),
							i = n.n(r),
							a = n("9404"),
							o = n("85a9");
						let s = !1,
							u = !1,
							c = null;

						function l(e = o, t) {
							c && !t || s || (s = !0, u = !0, c = new i.a({
								data: () => ({
									matches: [],
									queries: []
								}),
								methods: {
									refreshQueries() {
										var t = this;
										window && window.matchMedia && (this.queries = Object(a.r)(e, (function(e) {
											const n = window.matchMedia(function(e) {
												return Object(a.n)(e) && (e = {
													min: e
												}), Object(a.h)(e) || (e = [e]), e.map((function(e) {
													return Object(a.e)(e, "raw") ? e.raw : Object(a.q)(e, (function(e, t) {
														return `(${t=Object(a.d)({min:"min-width",max:"max-width"},t,t)}: ${e})`
													})).join(" and ")
												})).join(", ")
											}(e));
											return Object(a.k)(n.addEventListener) ? n.addEventListener("change", t.refreshMatches) : n.addListener(t.refreshMatches), n
										})), this.refreshMatches())
									},
									refreshMatches() {
										this.matches = Object(a.w)(this.queries).filter((function(e) {
											return e[1].matches
										})).map((function(e) {
											return e[0]
										}))
									}
								}
							}), s = !1)
						}
						i.a.mixin({
							beforeCreate() {
								s || l()
							},
							mounted() {
								u && c && (c.refreshQueries(), u = !1)
							},
							computed: {
								$screens: () => function(e, t) {
									return c.matches.reduce((function(t, n) {
										return Object(a.e)(e, n) ? e[n] : t
									}), Object(a.o)(t) ? e.default : t)
								}
							}
						})
					},
					1368: function(e, t, n) {
						var r = n("da03"),
							i = function() {
								var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
								return e ? "Symbol(src)_1." + e : ""
							}();
						e.exports = function(e) {
							return !!i && i in e
						}
					},
					"14c3": function(e, t, n) {
						var r = n("c6b6"),
							i = n("9263");
						e.exports = function(e, t) {
							var n = e.exec;
							if ("function" == typeof n) {
								var a = n.call(e, t);
								if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
								return a
							}
							if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
							return i.call(e, t)
						}
					},
					"159a": function(e, t, n) {
						var r = n("32b3"),
							i = n("e2e4"),
							a = n("c098"),
							o = n("1a8c"),
							s = n("f4d6");
						e.exports = function(e, t, n, u) {
							if (!o(e)) return e;
							for (var c = -1, l = (t = i(t, e)).length, f = l - 1, d = e; null != d && ++c < l;) {
								var h = s(t[c]),
									p = n;
								if ("__proto__" === h || "constructor" === h || "prototype" === h) return e;
								if (c != f) {
									var _ = d[h];
									void 0 === (p = u ? u(_, h, d) : void 0) && (p = o(_) ? _ : a(t[c + 1]) ? [] : {})
								}
								r(d, h, p), d = d[h]
							}
							return e
						}
					},
					"15f3": function(e, t, n) {
						var r = n("89d9"),
							i = n("8604");
						e.exports = function(e, t) {
							return r(e, t, (function(t, n) {
								return i(e, n)
							}))
						}
					},
					1838: function(e, t, n) {
						var r = n("c05f"),
							i = n("9b02"),
							a = n("8604"),
							o = n("f608"),
							s = n("08cc"),
							u = n("20ec"),
							c = n("f4d6");
						e.exports = function(e, t) {
							return o(e) && s(t) ? u(c(e), t) : function(n) {
								var o = i(n, e);
								return void 0 === o && o === t ? a(n, e) : r(t, o, 3)
							}
						}
					},
					"18d8": function(e, t, n) {
						var r = n("234d"),
							i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
							a = /\\(\\)?/g,
							o = r((function(e) {
								var t = [];
								return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, (function(e, n, r, i) {
									t.push(r ? i.replace(a, "$1") : n || e)
								})), t
							}));
						e.exports = o
					},
					"1a2d": function(e, t, n) {
						var r = n("42a2"),
							i = n("1310");
						e.exports = function(e) {
							return i(e) && "[object Map]" == r(e)
						}
					},
					"1a8c": function(e, t) {
						e.exports = function(e) {
							var t = typeof e;
							return null != e && ("object" == t || "function" == t)
						}
					},
					"1bac": function(e, t, n) {
						var r = n("7d1f"),
							i = n("a029"),
							a = n("9934");
						e.exports = function(e) {
							return r(e, a, i)
						}
					},
					"1be4": function(e, t, n) {
						var r = n("d066");
						e.exports = r("document", "documentElement")
					},
					"1c3c": function(e, t, n) {
						var r = n("9e69"),
							i = n("2474"),
							a = n("9638"),
							o = n("a2be"),
							s = n("edfa"),
							u = n("ac41"),
							c = r ? r.prototype : void 0,
							l = c ? c.valueOf : void 0;
						e.exports = function(e, t, n, r, c, f, d) {
							switch (n) {
								case "[object DataView]":
									if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
									e = e.buffer, t = t.buffer;
								case "[object ArrayBuffer]":
									return !(e.byteLength != t.byteLength || !f(new i(e), new i(t)));
								case "[object Boolean]":
								case "[object Date]":
								case "[object Number]":
									return a(+e, +t);
								case "[object Error]":
									return e.name == t.name && e.message == t.message;
								case "[object RegExp]":
								case "[object String]":
									return e == t + "";
								case "[object Map]":
									var h = s;
								case "[object Set]":
									var p = 1 & r;
									if (h || (h = u), e.size != t.size && !p) return !1;
									var _ = d.get(e);
									if (_) return _ == t;
									r |= 2, d.set(e, t);
									var m = o(h(e), h(t), r, c, f, d);
									return d.delete(e), m;
								case "[object Symbol]":
									if (l) return l.call(e) == l.call(t)
							}
							return !1
						}
					},
					"1cec": function(e, t, n) {
						var r = n("0b07")(n("2b3e"), "Promise");
						e.exports = r
					},
					"1d80": function(e, t) {
						e.exports = function(e) {
							if (null == e) throw TypeError("Can't call method on " + e);
							return e
						}
					},
					"1efc": function(e, t) {
						e.exports = function(e) {
							var t = this.has(e) && delete this.__data__[e];
							return this.size -= t ? 1 : 0, t
						}
					},
					"1f64": function(e, t, n) {
						"use strict";
						var r = n("6a43");
						n.n(r).a
					},
					"1fc8": function(e, t, n) {
						var r = n("4245");
						e.exports = function(e, t) {
							var n = r(this, e),
								i = n.size;
							return n.set(e, t), this.size += n.size == i ? 0 : 1, this
						}
					},
					"20ec": function(e, t) {
						e.exports = function(e, t) {
							return function(n) {
								return null != n && n[e] === t && (void 0 !== t || e in Object(n))
							}
						}
					},
					2202: function(e, t, n) {
						(t = n("24fb")(!1)).push([e.i, ".vc-select[data-v-7b2eaf0a]{position:relative}.vc-select select[data-v-7b2eaf0a]{flex-grow:1;display:block;-webkit-appearance:none;appearance:none;width:52px;height:30px;font-size:var(--text-base);font-weight:var(--font-medium);text-align:left;background-color:var(--gray-200);border:2px solid;border-color:var(--gray-200);color:var(--gray-900);padding:0 20px 0 8px;border-radius:var(--rounded);line-height:var(--leading-tight);text-indent:0;cursor:pointer;-moz-padding-start:3px;background-image:none}.vc-select select[data-v-7b2eaf0a]:hover{color:var(--gray-600)}.vc-select select[data-v-7b2eaf0a]:focus{outline:0;border-color:var(--accent-400);background-color:var(--white)}.vc-select-arrow[data-v-7b2eaf0a]{display:flex;align-items:center;pointer-events:none;position:absolute;top:0;bottom:0;right:0;padding:0 4px 0 0;color:var(--gray-500)}.vc-select-arrow svg[data-v-7b2eaf0a]{width:16px;height:16px;fill:currentColor}.vc-is-dark select[data-v-7b2eaf0a]{background:var(--gray-700);color:var(--gray-100);border-color:var(--gray-700)}.vc-is-dark select[data-v-7b2eaf0a]:hover{color:var(--gray-400)}.vc-is-dark select[data-v-7b2eaf0a]:focus{border-color:var(--accent-500);background-color:var(--gray-800)}", ""]), e.exports = t
					},
					2285: function(e, t, n) {
						"use strict";
						var r = n("2a4d");
						n.n(r).a
					},
					2286: function(e, t, n) {
						var r = n("85e3"),
							i = Math.max;
						e.exports = function(e, t, n) {
							return t = i(void 0 === t ? e.length - 1 : t, 0),
								function() {
									for (var a = arguments, o = -1, s = i(a.length - t, 0), u = Array(s); ++o < s;) u[o] = a[t + o];
									o = -1;
									for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
									return c[t] = n(u), r(e, this, c)
								}
						}
					},
					"22f3": function(e, t, n) {
						"use strict";
						n.d(t, "a", (function() {
							return o
						}));
						var r = n("cfe5"),
							i = n("2fa3"),
							a = n("9404");
						class o {
							constructor({
								key: e,
								hashcode: t,
								highlight: n,
								content: o,
								dot: s,
								bar: u,
								popover: c,
								dates: l,
								excludeDates: f,
								excludeMode: d,
								customData: h,
								order: p,
								pinPage: _
							}, m, b) {
								this.key = Object(a.o)(e) ? Object(i.c)() : e, this.hashcode = t, this.customData = h, this.order = p || 0, this.dateOpts = {
									order: p,
									locale: b
								}, this.pinPage = _, n && (this.highlight = m.normalizeHighlight(n)), o && (this.content = m.normalizeContent(o)), s && (this.dot = m.normalizeDot(s)), u && (this.bar = m.normalizeBar(u)), c && (this.popover = c), this.dates = b.normalizeDates(l, this.dateOpts), this.hasDates = !!Object(i.b)(this.dates), this.excludeDates = b.normalizeDates(f, this.dateOpts), this.hasExcludeDates = !!Object(i.b)(this.excludeDates), this.excludeMode = d || "intersects", this.hasExcludeDates && !this.hasDates && (this.dates.push(new r.a({}, this.dateOpts)), this.hasDates = !0), this.isComplex = Object(a.v)(this.dates, (function(e) {
									return e.isComplex
								}))
							}
							intersectsDate(e) {
								return e = e instanceof r.a ? e : new r.a(e, this.dateOpts), !this.excludesDate(e) && (this.dates.find((function(t) {
									return t.intersectsDate(e)
								})) || !1)
							}
							includesDate(e) {
								return e = e instanceof r.a ? e : new r.a(e, this.dateOpts), !this.excludesDate(e) && (this.dates.find((function(t) {
									return t.includesDate(e)
								})) || !1)
							}
							excludesDate(e) {
								var t = this;
								return e = e instanceof r.a ? e : new r.a(e, this.dateOpts), this.hasExcludeDates && this.excludeDates.find((function(n) {
									return "intersects" === t.excludeMode && n.intersectsDate(e) || "includes" === t.excludeMode && n.includesDate(e)
								}))
							}
							intersectsDay(e) {
								return !this.excludesDay(e) && (this.dates.find((function(t) {
									return t.intersectsDay(e)
								})) || !1)
							}
							excludesDay(e) {
								return this.hasExcludeDates && this.excludeDates.find((function(t) {
									return t.intersectsDay(e)
								}))
							}
						}
					},
					"234d": function(e, t, n) {
						var r = n("e380");
						e.exports = function(e) {
							var t = r(e, (function(e) {
									return 500 === n.size && n.clear(), e
								})),
								n = t.cache;
							return t
						}
					},
					"23a5": function(e) {
						e.exports = JSON.parse('{"maxSwipeTime":300,"minHorizontalSwipeDistance":60,"maxVerticalSwipeDistance":80}')
					},
					"23cb": function(e, t, n) {
						var r = n("a691"),
							i = Math.max,
							a = Math.min;
						e.exports = function(e, t) {
							var n = r(e);
							return n < 0 ? i(n + t, 0) : a(n, t)
						}
					},
					"23e7": function(e, t, n) {
						var r = n("da84"),
							i = n("06cf").f,
							a = n("9112"),
							o = n("6eeb"),
							s = n("ce4e"),
							u = n("e893"),
							c = n("94ca");
						e.exports = function(e, t) {
							var n, l, f, d, h, p = e.target,
								_ = e.global,
								m = e.stat;
							if (n = _ ? r : m ? r[p] || s(p, {}) : (r[p] || {}).prototype)
								for (l in t) {
									if (d = t[l], f = e.noTargetGet ? (h = i(n, l)) && h.value : n[l], !c(_ ? l : p + (m ? "." : "#") + l, e.forced) && void 0 !== f) {
										if (typeof d == typeof f) continue;
										u(d, f)
									}(e.sham || f && f.sham) && a(d, "sham", !0), o(n, l, d, e)
								}
						}
					},
					2411: function(e, t, n) {
						var r = n("f909"),
							i = n("2ec1")((function(e, t, n, i) {
								r(e, t, n, i)
							}));
						e.exports = i
					},
					"241c": function(e, t, n) {
						var r = n("ca84"),
							i = n("7839").concat("length", "prototype");
						t.f = Object.getOwnPropertyNames || function(e) {
							return r(e, i)
						}
					},
					"242e": function(e, t, n) {
						var r = n("72af"),
							i = n("ec69");
						e.exports = function(e, t) {
							return e && r(e, t, i)
						}
					},
					2474: function(e, t, n) {
						var r = n("2b3e").Uint8Array;
						e.exports = r
					},
					2478: function(e, t, n) {
						var r = n("4245");
						e.exports = function(e) {
							return r(this, e).get(e)
						}
					},
					"24fb": function(e, t, n) {
						"use strict";

						function r(e, t) {
							var n = e[1] || "",
								r = e[3];
							if (!r) return n;
							if (t && "function" == typeof btoa) {
								var i = function(e) {
										var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
											n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
										return "/*# ".concat(n, " */")
									}(r),
									a = r.sources.map((function(e) {
										return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
									}));
								return [n].concat(a).concat([i]).join("\n")
							}
							return [n].join("\n")
						}
						e.exports = function(e) {
							var t = [];
							return t.toString = function() {
								return this.map((function(t) {
									var n = r(t, e);
									return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
								})).join("")
							}, t.i = function(e, n, r) {
								"string" == typeof e && (e = [
									[null, e, ""]
								]);
								var i = {};
								if (r)
									for (var a = 0; a < this.length; a++) {
										var o = this[a][0];
										null != o && (i[o] = !0)
									}
								for (var s = 0; s < e.length; s++) {
									var u = [].concat(e[s]);
									r && i[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n), t.push(u))
								}
							}, t
						}
					},
					2524: function(e, t, n) {
						var r = n("6044");
						e.exports = function(e, t) {
							var n = this.__data__;
							return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
						}
					},
					"253c": function(e, t, n) {
						var r = n("3729"),
							i = n("1310");
						e.exports = function(e) {
							return i(e) && "[object Arguments]" == r(e)
						}
					},
					2593: function(e, t, n) {
						var r = n("15f3"),
							i = n("c6cf")((function(e, t) {
								return null == e ? {} : r(e, t)
							}));
						e.exports = i
					},
					"26e8": function(e, t) {
						e.exports = function(e, t) {
							return null != e && t in Object(e)
						}
					},
					"27e3": function(e, t, n) {
						"use strict";
						var r = n("8a64");
						n.n(r).a
					},
					"28c9": function(e, t) {
						e.exports = function() {
							this.__data__ = [], this.size = 0
						}
					},
					"29ae": function(e, t, n) {
						"use strict";
						n.d(t, "a", (function() {
							return q
						})), n.d(t, "b", (function() {
							return se
						})), n("5319");
						var r = n("fe1f");

						function i(e) {
							var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
							return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
						}

						function a(e, t) {
							var n = function(e) {
								if (!s[e]) {
									var t = new Intl.DateTimeFormat("en-US", {
											hour12: !1,
											timeZone: "America/New_York",
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
											hour: "2-digit",
											minute: "2-digit",
											second: "2-digit"
										}).format(new Date("2014-06-25T04:00:00.123Z")),
										n = "06/25/2014, 00:00:00" === t || "â€Ž06â€Ž/â€Ž25â€Ž/â€Ž2014â€Ž â€Ž00â€Ž:â€Ž00â€Ž:â€Ž00" === t;
									s[e] = n ? new Intl.DateTimeFormat("en-US", {
										hour12: !1,
										timeZone: e,
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
										hour: "2-digit",
										minute: "2-digit",
										second: "2-digit"
									}) : new Intl.DateTimeFormat("en-US", {
										hourCycle: "h23",
										timeZone: e,
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
										hour: "2-digit",
										minute: "2-digit",
										second: "2-digit"
									})
								}
								return s[e]
							}(t);
							return n.formatToParts ? function(e, t) {
								for (var n = e.formatToParts(t), r = [], i = 0; i < n.length; i++) {
									var a = o[n[i].type];
									a >= 0 && (r[a] = parseInt(n[i].value, 10))
								}
								return r
							}(n, e) : function(e, t) {
								var n = e.format(t).replace(/\u200E/g, ""),
									r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);

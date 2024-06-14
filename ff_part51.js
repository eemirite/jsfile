										var r = x(),
											i = s(e),
											a = "action " + e.type + r;
										k(l, a, t), l.log("%c action", "color: #03A9F4; font-weight: bold", i), O(l)
									}
								})))
							}
					}
				};
				t.a = M
			}).call(this, n("c8ba"))
		},
		"2fcc": function(e, t, n) {
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
				}, t.humanize = n("e4b1"), t.destroy = function() {
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
		"30b0": function(e, t, n) {
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
			}), t.ToggleButton = void 0;
			var i = n("48da"),
				a = n("09e6"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						n.toggleButtonEvents = {
							onToggle: new a.EventDispatcher,
							onToggleOn: new a.EventDispatcher,
							onToggleOff: new a.EventDispatcher
						};
						return t.onAriaLabel && (t.ariaLabel = t.onAriaLabel), n.config = n.mergeConfig(t, {
							cssClass: "ui-togglebutton",
							onClass: "on",
							offClass: "off"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n);
						var r = this.getConfig();
						this.getDomElement().addClass(this.prefixCss(r.offClass))
					}, t.prototype.on = function() {
						if (this.isOff()) {
							var e = this.getConfig();
							this.onState = !0, this.getDomElement().removeClass(this.prefixCss(e.offClass)), this.getDomElement().addClass(this.prefixCss(e.onClass)), this.onToggleEvent(), this.onToggleOnEvent(), this.setAriaAttr("pressed", "true"), this.config.onAriaLabel && this.setAriaLabel(this.config.onAriaLabel)
						}
					}, t.prototype.off = function() {
						if (this.isOn()) {
							var e = this.getConfig();
							this.onState = !1, this.getDomElement().removeClass(this.prefixCss(e.onClass)), this.getDomElement().addClass(this.prefixCss(e.offClass)), this.onToggleEvent(), this.onToggleOffEvent(), this.setAriaAttr("pressed", "false"), this.config.offAriaLabel && this.setAriaLabel(this.config.offAriaLabel)
						}
					}, t.prototype.toggle = function() {
						this.isOn() ? this.off() : this.on()
					}, t.prototype.isOn = function() {
						return this.onState
					}, t.prototype.isOff = function() {
						return !this.isOn()
					}, t.prototype.onClickEvent = function() {
						e.prototype.onClickEvent.call(this), this.onToggleEvent()
					}, t.prototype.onToggleEvent = function() {
						this.toggleButtonEvents.onToggle.dispatch(this)
					}, t.prototype.onToggleOnEvent = function() {
						this.toggleButtonEvents.onToggleOn.dispatch(this)
					}, t.prototype.onToggleOffEvent = function() {
						this.toggleButtonEvents.onToggleOff.dispatch(this)
					}, Object.defineProperty(t.prototype, "onToggle", {
						get: function() {
							return this.toggleButtonEvents.onToggle.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "onToggleOn", {
						get: function() {
							return this.toggleButtonEvents.onToggleOn.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "onToggleOff", {
						get: function() {
							return this.toggleButtonEvents.onToggleOff.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(i.Button);
			t.ToggleButton = o
		},
		"30b5": function(e, t, n) {
			"use strict";
			var r = n("c532");

			function i(e) {
				return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
			}
			e.exports = function(e, t, n) {
				if (!t) return e;
				var a;
				if (n) a = n(t);
				else if (r.isURLSearchParams(t)) a = t.toString();
				else {
					var o = [];
					r.forEach(t, (function(e, t) {
						null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
							r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), o.push(i(t) + "=" + i(e))
						})))
					})), a = o.join("&")
				}
				if (a) {
					var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
				}
				return e
			}
		},
		"30ef": function(e, t, n) {
			e.exports = function(e) {
				"use strict";
				e = e && e.hasOwnProperty("default") ? e.default : e;
				var t = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					n = function(e, t) {
						return e(t = {
							exports: {}
						}, t.exports), t.exports
					}((function(e) {
						var n = {};
						for (var r in t) t.hasOwnProperty(r) && (n[t[r]] = r);
						var i = e.exports = {
							rgb: {
								channels: 3,
								labels: "rgb"
							},
							hsl: {
								channels: 3,
								labels: "hsl"
							},
							hsv: {
								channels: 3,
								labels: "hsv"
							},
							hwb: {
								channels: 3,
								labels: "hwb"
							},
							cmyk: {
								channels: 4,
								labels: "cmyk"
							},
							xyz: {
								channels: 3,
								labels: "xyz"
							},
							lab: {
								channels: 3,
								labels: "lab"
							},
							lch: {
								channels: 3,
								labels: "lch"
							},
							hex: {
								channels: 1,
								labels: ["hex"]
							},
							keyword: {
								channels: 1,
								labels: ["keyword"]
							},
							ansi16: {
								channels: 1,
								labels: ["ansi16"]
							},
							ansi256: {
								channels: 1,
								labels: ["ansi256"]
							},
							hcg: {
								channels: 3,
								labels: ["h", "c", "g"]
							},
							apple: {
								channels: 3,
								labels: ["r16", "g16", "b16"]
							},
							gray: {
								channels: 1,
								labels: ["gray"]
							}
						};
						for (var a in i)
							if (i.hasOwnProperty(a)) {
								if (!("channels" in i[a])) throw new Error("missing channels property: " + a);
								if (!("labels" in i[a])) throw new Error("missing channel labels property: " + a);
								if (i[a].labels.length !== i[a].channels) throw new Error("channel and label counts mismatch: " + a);
								var o = i[a].channels,
									s = i[a].labels;
								delete i[a].channels, delete i[a].labels, Object.defineProperty(i[a], "channels", {
									value: o
								}), Object.defineProperty(i[a], "labels", {
									value: s
								})
							}
						function u(e, t) {
							return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
						}
						i.rgb.hsl = function(e) {
							var t, n, r = e[0] / 255,
								i = e[1] / 255,
								a = e[2] / 255,
								o = Math.min(r, i, a),
								s = Math.max(r, i, a),
								u = s - o;
							return s === o ? t = 0 : r === s ? t = (i - a) / u : i === s ? t = 2 + (a - r) / u : a === s && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + s) / 2, [t, 100 * (s === o ? 0 : n <= .5 ? u / (s + o) : u / (2 - s - o)), 100 * n]
						}, i.rgb.hsv = function(e) {
							var t, n, r, i, a, o = e[0] / 255,
								s = e[1] / 255,
								u = e[2] / 255,
								c = Math.max(o, s, u),
								l = c - Math.min(o, s, u),
								f = function(e) {
									return (c - e) / 6 / l + .5
								};
							return 0 === l ? i = a = 0 : (a = l / c, t = f(o), n = f(s), r = f(u), o === c ? i = r - n : s === c ? i = 1 / 3 + t - r : u === c && (i = 2 / 3 + n - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * a, 100 * c]
						}, i.rgb.hwb = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return [i.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
						}, i.rgb.cmyk = function(e) {
							var t, n = e[0] / 255,
								r = e[1] / 255,
								i = e[2] / 255;
							return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
						}, i.rgb.keyword = function(e) {
							var r = n[e];
							if (r) return r;
							var i, a = 1 / 0;
							for (var o in t)
								if (t.hasOwnProperty(o)) {
									var s = u(e, t[o]);
									s < a && (a = s, i = o)
								} return i
						}, i.keyword.rgb = function(e) {
							return t[e]
						}, i.rgb.xyz = function(e) {
							var t = e[0] / 255,
								n = e[1] / 255,
								r = e[2] / 255;
							return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
						}, i.rgb.lab = function(e) {
							var t = i.rgb.xyz(e),
								n = t[0],
								r = t[1],
								a = t[2];
							return r /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
						}, i.hsl.rgb = function(e) {
							var t, n, r, i, a, o = e[0] / 360,
								s = e[1] / 100,
								u = e[2] / 100;
							if (0 === s) return [a = 255 * u, a, a];
							t = 2 * u - (n = u < .5 ? u * (1 + s) : u + s - u * s), i = [0, 0, 0];
							for (var c = 0; c < 3; c++)(r = o + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, a = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[c] = 255 * a;
							return i
						}, i.hsl.hsv = function(e) {
							var t = e[0],
								n = e[1] / 100,
								r = e[2] / 100,
								i = n,
								a = Math.max(r, .01);
							return n *= (r *= 2) <= 1 ? r : 2 - r, i *= a <= 1 ? a : 2 - a, [t, 100 * (0 === r ? 2 * i / (a + i) : 2 * n / (r + n)), (r + n) / 2 * 100]
						}, i.hsv.rgb = function(e) {
							var t = e[0] / 60,
								n = e[1] / 100,
								r = e[2] / 100,
								i = Math.floor(t) % 6,
								a = t - Math.floor(t),
								o = 255 * r * (1 - n),
								s = 255 * r * (1 - n * a),
								u = 255 * r * (1 - n * (1 - a));
							switch (r *= 255, i) {
								case 0:
									return [r, u, o];
								case 1:
									return [s, r, o];
								case 2:
									return [o, r, u];
								case 3:
									return [o, s, r];
								case 4:
									return [u, o, r];
								case 5:
									return [r, o, s]
							}
						}, i.hsv.hsl = function(e) {
							var t, n, r, i = e[0],
								a = e[1] / 100,
								o = e[2] / 100,
								s = Math.max(o, .01);
							return r = (2 - a) * o, n = a * s, [i, 100 * (n = (n /= (t = (2 - a) * s) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
						}, i.hwb.rgb = function(e) {
							var t, n, r, i, a, o, s, u = e[0] / 360,
								c = e[1] / 100,
								l = e[2] / 100,
								f = c + l;
							switch (f > 1 && (c /= f, l /= f), r = 6 * u - (t = Math.floor(6 * u)), 0 != (1 & t) && (r = 1 - r), i = c + r * ((n = 1 - l) - c), t) {
								default:
								case 6:
								case 0:
									a = n, o = i, s = c;
									break;
								case 1:
									a = i, o = n, s = c;
									break;
								case 2:
									a = c, o = n, s = i;
									break;
								case 3:
									a = c, o = i, s = n;
									break;
								case 4:
									a = i, o = c, s = n;
									break;
								case 5:
									a = n, o = c, s = i
							}
							return [255 * a, 255 * o, 255 * s]
						}, i.cmyk.rgb = function(e) {
							var t = e[0] / 100,
								n = e[1] / 100,
								r = e[2] / 100,
								i = e[3] / 100;
							return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
						}, i.xyz.rgb = function(e) {
							var t, n, r, i = e[0] / 100,
								a = e[1] / 100,
								o = e[2] / 100;
							return n = -.9689 * i + 1.8758 * a + .0415 * o, r = .0557 * i + -.204 * a + 1.057 * o, t = (t = 3.2406 * i + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
						}, i.xyz.lab = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
						}, i.lab.xyz = function(e) {
							var t, n, r, i = e[0];
							t = e[1] / 500 + (n = (i + 16) / 116), r = n - e[2] / 200;
							var a = Math.pow(n, 3),
								o = Math.pow(t, 3),
								s = Math.pow(r, 3);
							return n = a > .008856 ? a : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = s > .008856 ? s : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
						}, i.lab.lch = function(e) {
							var t, n = e[0],
								r = e[1],
								i = e[2];
							return (t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + i * i), t]
						}, i.lch.lab = function(e) {
							var t, n = e[0],
								r = e[1];
							return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
						}, i.rgb.ansi16 = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2],
								a = 1 in arguments ? arguments[1] : i.rgb.hsv(e)[2];
							if (0 === (a = Math.round(a / 50))) return 30;
							var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
							return 2 === a && (o += 60), o
						}, i.hsv.ansi16 = function(e) {
							return i.rgb.ansi16(i.hsv.rgb(e), e[2])
						}, i.rgb.ansi256 = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
						}, i.ansi16.rgb = function(e) {
							var t = e % 10;
							if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
							var n = .5 * (1 + ~~(e > 50));
							return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
						}, i.ansi256.rgb = function(e) {
							if (e >= 232) {
								var t = 10 * (e - 232) + 8;
								return [t, t, t]
							}
							var n;
							return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
						}, i.rgb.hex = function(e) {
							var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
							return "000000".substring(t.length) + t
						}, i.hex.rgb = function(e) {
							var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
							if (!t) return [0, 0, 0];
							var n = t[0];
							3 === t[0].length && (n = n.split("").map((function(e) {
								return e + e
							})).join(""));
							var r = parseInt(n, 16);
							return [r >> 16 & 255, r >> 8 & 255, 255 & r]
						}, i.rgb.hcg = function(e) {
							var t, n = e[0] / 255,
								r = e[1] / 255,
								i = e[2] / 255,
								a = Math.max(Math.max(n, r), i),
								o = Math.min(Math.min(n, r), i),
								s = a - o;
							return t = s <= 0 ? 0 : a === n ? (r - i) / s % 6 : a === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4, t /= 6, [360 * (t %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
						}, i.hsl.hcg = function(e) {
							var t, n = e[1] / 100,
								r = e[2] / 100,
								i = 0;
							return (t = r < .5 ? 2 * n * r : 2 * n * (1 - r)) < 1 && (i = (r - .5 * t) / (1 - t)), [e[0], 100 * t, 100 * i]
						}, i.hsv.hcg = function(e) {
							var t = e[1] / 100,
								n = e[2] / 100,
								r = t * n,
								i = 0;
							return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
						}, i.hcg.rgb = function(e) {
							var t = e[0] / 360,
								n = e[1] / 100,
								r = e[2] / 100;
							if (0 === n) return [255 * r, 255 * r, 255 * r];
							var i, a = [0, 0, 0],
								o = t % 1 * 6,
								s = o % 1,
								u = 1 - s;
							switch (Math.floor(o)) {
								case 0:
									a[0] = 1, a[1] = s, a[2] = 0;
									break;
								case 1:
									a[0] = u, a[1] = 1, a[2] = 0;
									break;
								case 2:
									a[0] = 0, a[1] = 1, a[2] = s;
									break;
								case 3:
									a[0] = 0, a[1] = u, a[2] = 1;
									break;
								case 4:
									a[0] = s, a[1] = 0, a[2] = 1;
									break;
								default:
									a[0] = 1, a[1] = 0, a[2] = u
							}
							return i = (1 - n) * r, [255 * (n * a[0] + i), 255 * (n * a[1] + i), 255 * (n * a[2] + i)]
						}, i.hcg.hsv = function(e) {
							var t = e[1] / 100,
								n = t + e[2] / 100 * (1 - t),
								r = 0;
							return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
						}, i.hcg.hsl = function(e) {
							var t = e[1] / 100,
								n = e[2] / 100 * (1 - t) + .5 * t,
								r = 0;
							return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
						}, i.hcg.hwb = function(e) {
							var t = e[1] / 100,
								n = t + e[2] / 100 * (1 - t);
							return [e[0], 100 * (n - t), 100 * (1 - n)]
						}, i.hwb.hcg = function(e) {
							var t = e[1] / 100,
								n = 1 - e[2] / 100,
								r = n - t,
								i = 0;
							return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
						}, i.apple.rgb = function(e) {
							return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
						}, i.rgb.apple = function(e) {
							return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
						}, i.gray.rgb = function(e) {
							return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
						}, i.gray.hsl = i.gray.hsv = function(e) {
							return [0, 0, e[0]]
						}, i.gray.hwb = function(e) {
							return [0, 100, e[0]]
						}, i.gray.cmyk = function(e) {
							return [0, 0, 0, e[0]]
						}, i.gray.lab = function(e) {
							return [e[0], 0, 0]
						}, i.gray.hex = function(e) {
							var t = 255 & Math.round(e[0] / 100 * 255),
								n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
							return "000000".substring(n.length) + n
						}, i.rgb.gray = function(e) {
							return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
						}
					}));

				function r(e) {
					var t = function() {
							for (var e = {}, t = Object.keys(n), r = t.length, i = 0; i < r; i++) e[t[i]] = {
								distance: -1,
								parent: null
							};
							return e
						}(),
						r = [e];
					for (t[e].distance = 0; r.length;)
						for (var i = r.pop(), a = Object.keys(n[i]), o = a.length, s = 0; s < o; s++) {
							var u = a[s],
								c = t[u]; - 1 === c.distance && (c.distance = t[i].distance + 1, c.parent = i, r.unshift(u))
						}
					return t
				}

				function i(e, t) {
					return function(n) {
						return t(e(n))
					}
				}

				function a(e, t) {
					for (var r = [t[e].parent, e], a = n[t[e].parent][e], o = t[e].parent; t[o].parent;) r.unshift(t[o].parent), a = i(n[t[o].parent][o], a), o = t[o].parent;
					return a.conversion = r, a
				}
				n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
				var o = {};
				Object.keys(n).forEach((function(e) {
					o[e] = {}, Object.defineProperty(o[e], "channels", {
						value: n[e].channels
					}), Object.defineProperty(o[e], "labels", {
						value: n[e].labels
					});
					var t = function(e) {
						for (var t = r(e), n = {}, i = Object.keys(t), o = i.length, s = 0; s < o; s++) {
							var u = i[s];
							null !== t[u].parent && (n[u] = a(u, t))
						}
						return n
					}(e);
					Object.keys(t).forEach((function(n) {
						var r = t[n];
						o[e][n] = function(e) {
							var t = function(t) {
								if (null == t) return t;
								arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
								var n = e(t);
								if ("object" == typeof n)
									for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
								return n
							};
							return "conversion" in e && (t.conversion = e.conversion), t
						}(r), o[e][n].raw = function(e) {
							var t = function(t) {
								return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
							};
							return "conversion" in e && (t.conversion = e.conversion), t
						}(r)
					}))
				}));
				var s = o,
					u = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					c = {
						getRgba: l,
						getHsla: f,
						getRgb: function(e) {
							var t = l(e);
							return t && t.slice(0, 3)
						},
						getHsl: function(e) {
							var t = f(e);
							return t && t.slice(0, 3)
						},
						getHwb: d,
						getAlpha: function(e) {
							var t = l(e);
							return t || (t = f(e)) || (t = d(e)) ? t[3] : void 0
						},
						hexString: function(e, t) {
							return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + b(e[0]) + b(e[1]) + b(e[2]) + (t >= 0 && t < 1 ? b(Math.round(255 * t)) : "")
						},
						rgbString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? h(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
						},
						rgbaString: h,
						percentString: function(e, t) {
							if (t < 1 || e[3] && e[3] < 1) return p(e, t);
							var n = Math.round(e[0] / 255 * 100),
								r = Math.round(e[1] / 255 * 100),
								i = Math.round(e[2] / 255 * 100);
							return "rgb(" + n + "%, " + r + "%, " + i + "%)"
						},
						percentaString: p,
						hslString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? _(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
						},
						hslaString: _,
						hwbString: function(e, t) {
							return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
						},
						keyword: function(e) {
							return g[e.slice(0, 3)]
						}
					};

				function l(e) {
					if (e) {
						var t = [0, 0, 0],
							n = 1,
							r = e.match(/^#([a-fA-F0-9]{3,4})$/i),
							i = "";
						if (r) {
							i = (r = r[1])[3];
							for (var a = 0; a < t.length; a++) t[a] = parseInt(r[a] + r[a], 16);
							i && (n = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
						} else if (r = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
							for (i = r[2], r = r[1], a = 0; a < t.length; a++) t[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
							i && (n = Math.round(parseInt(i, 16) / 255 * 100) / 100)
						} else if (r = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < t.length; a++) t[a] = parseInt(r[a + 1]);
							n = parseFloat(r[4])
						} else if (r = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < t.length; a++) t[a] = Math.round(2.55 * parseFloat(r[a + 1]));
							n = parseFloat(r[4])
						} else if (r = e.match(/(\w+)/)) {
							if ("transparent" == r[1]) return [0, 0, 0, 0];
							if (!(t = u[r[1]])) return
						}
						for (a = 0; a < t.length; a++) t[a] = m(t[a], 0, 255);
						return n = n || 0 == n ? m(n, 0, 1) : 1, t[3] = n, t
					}
				}

				function f(e) {
					if (e) {
						var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function d(e) {
					if (e) {
						var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function h(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
				}

				function p(e, t) {
					return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
				}

				function _(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
				}

				function m(e, t, n) {
					return Math.min(Math.max(t, e), n)
				}

				function b(e) {
					var t = e.toString(16).toUpperCase();
					return t.length < 2 ? "0" + t : t
				}
				var g = {};
				for (var v in u) g[u[v]] = v;
				var y = function(e) {
					return e instanceof y ? e : this instanceof y ? (this.valid = !1, this.values = {
						rgb: [0, 0, 0],
						hsl: [0, 0, 0],
						hsv: [0, 0, 0],
						hwb: [0, 0, 0],
						cmyk: [0, 0, 0, 0],
						alpha: 1
					}, void("string" == typeof e ? (t = c.getRgba(e), t ? this.setValues("rgb", t) : (t = c.getHsla(e)) ? this.setValues("hsl", t) : (t = c.getHwb(e)) && this.setValues("hwb", t)) : "object" == typeof e && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new y(e);
					var t
				};
				y.prototype = {
					isValid: function() {
						return this.valid
					},
					rgb: function() {
						return this.setSpace("rgb", arguments)
					},
					hsl: function() {
						return this.setSpace("hsl", arguments)
					},
					hsv: function() {
						return this.setSpace("hsv", arguments)
					},
					hwb: function() {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function() {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function() {
						return this.values.rgb
					},
					hslArray: function() {
						return this.values.hsl
					},
					hsvArray: function() {
						return this.values.hsv
					},
					hwbArray: function() {
						var e = this.values;
						return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
					},
					cmykArray: function() {
						return this.values.cmyk
					},
					rgbaArray: function() {
						var e = this.values;
						return e.rgb.concat([e.alpha])
					},
					hslaArray: function() {
						var e = this.values;
						return e.hsl.concat([e.alpha])
					},
					alpha: function(e) {
						return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
					},
					red: function(e) {
						return this.setChannel("rgb", 0, e)
					},
					green: function(e) {
						return this.setChannel("rgb", 1, e)
					},
					blue: function(e) {
						return this.setChannel("rgb", 2, e)
					},
					hue: function(e) {
						return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
					},
					saturation: function(e) {
						return this.setChannel("hsl", 1, e)
					},
					lightness: function(e) {
						return this.setChannel("hsl", 2, e)
					},
					saturationv: function(e) {
						return this.setChannel("hsv", 1, e)
					},
					whiteness: function(e) {
						return this.setChannel("hwb", 1, e)
					},
					blackness: function(e) {
						return this.setChannel("hwb", 2, e)
					},
					value: function(e) {
						return this.setChannel("hsv", 2, e)
					},
					cyan: function(e) {
						return this.setChannel("cmyk", 0, e)
					},
					magenta: function(e) {
						return this.setChannel("cmyk", 1, e)
					},
					yellow: function(e) {
						return this.setChannel("cmyk", 2, e)
					},
					black: function(e) {
						return this.setChannel("cmyk", 3, e)
					},
					hexString: function() {
						return c.hexString(this.values.rgb)
					},
					rgbString: function() {
						return c.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function() {
						return c.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function() {
						return c.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function() {
						return c.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function() {
						return c.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function() {
						return c.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function() {
						return c.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function() {
						var e = this.values.rgb;
						return e[0] << 16 | e[1] << 8 | e[2]
					},
					luminosity: function() {
						for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
							var r = e[n] / 255;
							t[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
						}
						return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
					},
					contrast: function(e) {
						var t = this.luminosity(),
							n = e.luminosity();
						return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
					},
					level: function(e) {
						var t = this.contrast(e);
						return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
					},
					dark: function() {
						var e = this.values.rgb;
						return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
					},
					light: function() {
						return !this.dark()
					},
					negate: function() {
						for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
						return this.setValues("rgb", e), this
					},
					lighten: function(e) {
						var t = this.values.hsl;
						return t[2] += t[2] * e, this.setValues("hsl", t), this
					},
					darken: function(e) {
						var t = this.values.hsl;
						return t[2] -= t[2] * e, this.setValues("hsl", t), this
					},
					saturate: function(e) {
						var t = this.values.hsl;
						return t[1] += t[1] * e, this.setValues("hsl", t), this
					},
					desaturate: function(e) {
						var t = this.values.hsl;
						return t[1] -= t[1] * e, this.setValues("hsl", t), this
					},
					whiten: function(e) {
						var t = this.values.hwb;
						return t[1] += t[1] * e, this.setValues("hwb", t), this
					},
					blacken: function(e) {
						var t = this.values.hwb;
						return t[2] += t[2] * e, this.setValues("hwb", t), this
					},
					greyscale: function() {
						var e = this.values.rgb,
							t = .3 * e[0] + .59 * e[1] + .11 * e[2];
						return this.setValues("rgb", [t, t, t]), this
					},
					clearer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t - t * e), this
					},
					opaquer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t + t * e), this
					},
					rotate: function(e) {
						var t = this.values.hsl,
							n = (t[0] + e) % 360;
						return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
					},
					mix: function(e, t) {
						var n = this,
							r = e,
							i = void 0 === t ? .5 : t,
							a = 2 * i - 1,
							o = n.alpha() - r.alpha(),
							s = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
							u = 1 - s;
						return this.rgb(s * n.red() + u * r.red(), s * n.green() + u * r.green(), s * n.blue() + u * r.blue()).alpha(n.alpha() * i + r.alpha() * (1 - i))
					},
					toJSON: function() {
						return this.rgb()
					},
					clone: function() {
						var e, t, n = new y,
							r = this.values,
							i = n.values;
						for (var a in r) r.hasOwnProperty(a) && (e = r[a], "[object Array]" === (t = {}.toString.call(e)) ? i[a] = e.slice(0) : "[object Number]" === t ? i[a] = e : console.error("unexpected color value:", e));
						return n
					}
				}, y.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, y.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, y.prototype.getValues = function(e) {
					for (var t = this.values, n = {}, r = 0; r < e.length; r++) n[e.charAt(r)] = t[e][r];
					return 1 !== t.alpha && (n.a = t.alpha), n
				}, y.prototype.setValues = function(e, t) {
					var n, r, i = this.values,
						a = this.spaces,
						o = this.maxes,
						u = 1;
					if (this.valid = !0, "alpha" === e) u = t;
					else if (t.length) i[e] = t.slice(0, e.length), u = t[e.length];
					else if (void 0 !== t[e.charAt(0)]) {
						for (n = 0; n < e.length; n++) i[e][n] = t[e.charAt(n)];
						u = t.a
					} else if (void 0 !== t[a[e][0]]) {
						var c = a[e];
						for (n = 0; n < e.length; n++) i[e][n] = t[c[n]];
						u = t.alpha
					}
					if (i.alpha = Math.max(0, Math.min(1, void 0 === u ? i.alpha : u)), "alpha" === e) return !1;
					for (n = 0; n < e.length; n++) r = Math.max(0, Math.min(o[e][n], i[e][n])), i[e][n] = Math.round(r);
					for (var l in a) l !== e && (i[l] = s[e][l](i[e]));
					return !0
				}, y.prototype.setSpace = function(e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
				}, y.prototype.setChannel = function(e, t, n) {
					var r = this.values[e];
					return void 0 === n ? r[t] : (n === r[t] || (r[t] = n, this.setValues(e, r)), this)
				}, "undefined" != typeof window && (window.Color = y);
				var A = y;

				function S(e) {
					return -1 === ["__proto__", "prototype", "constructor"].indexOf(e)
				}
				var w = {
						noop: function() {},
						uid: function() {
							var e = 0;
							return function() {
								return e++
							}
						}(),
						isNullOrUndef: function(e) {
							return null == e
						},
						isArray: function(e) {
							if (Array.isArray && Array.isArray(e)) return !0;
							var t = Object.prototype.toString.call(e);
							return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
						},
						isObject: function(e) {
							return null !== e && "[object Object]" === Object.prototype.toString.call(e)
						},
						isFinite: function(e) {
							return ("number" == typeof e || e instanceof Number) && isFinite(e)
						},
						valueOrDefault: function(e, t) {
							return void 0 === e ? t : e
						},
						valueAtIndexOrDefault: function(e, t, n) {
							return w.valueOrDefault(w.isArray(e) ? e[t] : e, n)
						},
						callback: function(e, t, n) {
							if (e && "function" == typeof e.call) return e.apply(n, t)
						},
						each: function(e, t, n, r) {
							var i, a, o;
							if (w.isArray(e))
								if (a = e.length, r)
									for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
								else
									for (i = 0; i < a; i++) t.call(n, e[i], i);
							else if (w.isObject(e))
								for (a = (o = Object.keys(e)).length, i = 0; i < a; i++) t.call(n, e[o[i]], o[i])
						},
						arrayEquals: function(e, t) {
							var n, r, i, a;
							if (!e || !t || e.length !== t.length) return !1;
							for (n = 0, r = e.length; n < r; ++n)
								if (i = e[n], a = t[n], i instanceof Array && a instanceof Array) {
									if (!w.arrayEquals(i, a)) return !1
								} else if (i !== a) return !1;
							return !0
						},
						clone: function(e) {
							if (w.isArray(e)) return e.map(w.clone);
							if (w.isObject(e)) {
								for (var t = Object.create(e), n = Object.keys(e), r = n.length, i = 0; i < r; ++i) t[n[i]] = w.clone(e[n[i]]);
								return t
							}
							return e
						},
						_merger: function(e, t, n, r) {
							if (S(e)) {
								var i = t[e],
									a = n[e];
								w.isObject(i) && w.isObject(a) ? w.merge(i, a, r) : t[e] = w.clone(a)
							}
						},
						_mergerIf: function(e, t, n) {
							if (S(e)) {
								var r = t[e],
									i = n[e];
								w.isObject(r) && w.isObject(i) ? w.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = w.clone(i))
							}
						},
						merge: function(e, t, n) {
							var r, i, a, o, s, u = w.isArray(t) ? t : [t],
								c = u.length;
							if (!w.isObject(e)) return e;
							for (r = (n = n || {}).merger || w._merger, i = 0; i < c; ++i)
								if (t = u[i], w.isObject(t))
									for (s = 0, o = (a = Object.keys(t)).length; s < o; ++s) r(a[s], e, t, n);
							return e
						},
						mergeIf: function(e, t) {
							return w.merge(e, t, {
								merger: w._mergerIf
							})
						},
						extend: Object.assign || function(e) {
							return w.merge(e, [].slice.call(arguments, 1), {
								merger: function(e, t, n) {
									t[e] = n[e]
								}
							})
						},
						inherits: function(e) {
							var t = this,
								n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
									return t.apply(this, arguments)
								},
								r = function() {
									this.constructor = n
								};
							return r.prototype = t.prototype, n.prototype = new r, n.extend = w.inherits, e && w.extend(n.prototype, e), n.__super__ = t.prototype, n
						},
						_deprecated: function(e, t, n, r) {
							void 0 !== t && console.warn(e + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
						}
					},
					E = w;
				w.callCallback = w.callback, w.indexOf = function(e, t, n) {
					return Array.prototype.indexOf.call(e, t, n)
				}, w.getValueOrDefault = w.valueOrDefault, w.getValueAtIndexOrDefault = w.valueAtIndexOrDefault;
				var T = {
						linear: function(e) {
							return e
						},
						easeInQuad: function(e) {
							return e * e
						},
						easeOutQuad: function(e) {
							return -e * (e - 2)
						},
						easeInOutQuad: function(e) {
							return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
						},
						easeInCubic: function(e) {
							return e * e * e
						},
						easeOutCubic: function(e) {
							return (e -= 1) * e * e + 1
						},
						easeInOutCubic: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
						},
						easeInQuart: function(e) {
							return e * e * e * e
						},
						easeOutQuart: function(e) {
							return -((e -= 1) * e * e * e - 1)
						},
						easeInOutQuart: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
						},
						easeInQuint: function(e) {
							return e * e * e * e * e
						},
						easeOutQuint: function(e) {
							return (e -= 1) * e * e * e * e + 1
						},
						easeInOutQuint: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
						},
						easeInSine: function(e) {
							return 1 - Math.cos(e * (Math.PI / 2))
						},
						easeOutSine: function(e) {
							return Math.sin(e * (Math.PI / 2))
						},
						easeInOutSine: function(e) {
							return -.5 * (Math.cos(Math.PI * e) - 1)
						},
						easeInExpo: function(e) {
							return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
						},
						easeOutExpo: function(e) {
							return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
						},
						easeInOutExpo: function(e) {
							return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
						},
						easeInCirc: function(e) {
							return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
						},
						easeOutCirc: function(e) {
							return Math.sqrt(1 - (e -= 1) * e)
						},
						easeInOutCirc: function(e) {
							return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						},
						easeInElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
						},
						easeOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
						},
						easeInOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
						},
						easeInBack: function(e) {
							var t = 1.70158;
							return e * e * ((t + 1) * e - t)
						},
						easeOutBack: function(e) {
							var t = 1.70158;
							return (e -= 1) * e * ((t + 1) * e + t) + 1
						},
						easeInOutBack: function(e) {
							var t = 1.70158;
							return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
						},
						easeInBounce: function(e) {
							return 1 - T.easeOutBounce(1 - e)
						},
						easeOutBounce: function(e) {
							return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						},
						easeInOutBounce: function(e) {
							return e < .5 ? .5 * T.easeInBounce(2 * e) : .5 * T.easeOutBounce(2 * e - 1) + .5
						}
					},
					C = {
						effects: T
					};
				E.easingEffects = T;
				var $ = Math.PI,
					k = $ / 180,
					O = 2 * $,
					x = $ / 2,
					P = $ / 4,
					M = 2 * $ / 3,
					I = {
						clear: function(e) {
							e.ctx.clearRect(0, 0, e.width, e.height)
						},
						roundedRect: function(e, t, n, r, i, a) {
							if (a) {
								var o = Math.min(a, i / 2, r / 2),
									s = t + o,
									u = n + o,
									c = t + r - o,
									l = n + i - o;
								e.moveTo(t, u), s < c && u < l ? (e.arc(s, u, o, -$, -x), e.arc(c, u, o, -x, 0), e.arc(c, l, o, 0, x), e.arc(s, l, o, x, $)) : s < c ? (e.moveTo(s, n), e.arc(c, u, o, -x, x), e.arc(s, u, o, x, $ + x)) : u < l ? (e.arc(s, u, o, -$, 0), e.arc(s, l, o, 0, $)) : e.arc(s, u, o, -$, $), e.closePath(), e.moveTo(t, n)
							} else e.rect(t, n, r, i)
						},
						drawPoint: function(e, t, n, r, i, a) {
							var o, s, u, c, l, f = (a || 0) * k;
							if (t && "object" == typeof t && ("[object HTMLImageElement]" === (o = t.toString()) || "[object HTMLCanvasElement]" === o)) return e.save(), e.translate(r, i), e.rotate(f), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();
							if (!(isNaN(n) || n <= 0)) {
								switch (e.beginPath(), t) {
									default:
										e.arc(r, i, n, 0, O), e.closePath();
										break;
									case "triangle":
										e.moveTo(r + Math.sin(f) * n, i - Math.cos(f) * n), f += M, e.lineTo(r + Math.sin(f) * n, i - Math.cos(f) * n), f += M, e.lineTo(r + Math.sin(f) * n, i - Math.cos(f) * n), e.closePath();
										break;
									case "rectRounded":
										c = n - (l = .516 * n), s = Math.cos(f + P) * c, u = Math.sin(f + P) * c, e.arc(r - s, i - u, l, f - $, f - x), e.arc(r + u, i - s, l, f - x, f), e.arc(r + s, i + u, l, f, f + x), e.arc(r - u, i + s, l, f + x, f + $), e.closePath();
										break;
									case "rect":
										if (!a) {
											c = Math.SQRT1_2 * n, e.rect(r - c, i - c, 2 * c, 2 * c);
											break
										}
										f += P;
									case "rectRot":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + u, i - s), e.lineTo(r + s, i + u), e.lineTo(r - u, i + s), e.closePath();
										break;
									case "crossRot":
										f += P;
									case "cross":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s);
										break;
									case "star":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s), f += P, s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s);
										break;
									case "line":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u);
										break;
									case "dash":
										e.moveTo(r, i), e.lineTo(r + Math.cos(f) * n, i + Math.sin(f) * n)
								}
								e.fill(), e.stroke()
							}
						},
						_isPointInArea: function(e, t) {
							var n = 1e-6;
							return e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n
						},
						clipArea: function(e, t) {
							e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
						},
						unclipArea: function(e) {
							e.restore()
						},
						lineTo: function(e, t, n, r) {
							var i = n.steppedLine;
							if (i) {
								if ("middle" === i) {
									var a = (t.x + n.x) / 2;
									e.lineTo(a, r ? n.y : t.y), e.lineTo(a, r ? t.y : n.y)
								} else "after" === i && !r || "after" !== i && r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
								e.lineTo(n.x, n.y)
							} else n.tension ? e.bezierCurveTo(r ? t.controlPointPreviousX : t.controlPointNextX, r ? t.controlPointPreviousY : t.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
						}
					},
					L = I;
				E.clear = I.clear, E.drawRoundedRectangle = function(e) {
					e.beginPath(), I.roundedRect.apply(I, arguments)
				};
				var D = {
					_set: function(e, t) {
						return E.merge(this[e] || (this[e] = {}), t)
					}
				};
				D._set("global", {
					defaultColor: "rgba(0,0,0,0.1)",
					defaultFontColor: "#666",
					defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: "normal",
					defaultLineHeight: 1.2,
					showLines: !0
				});
				var B = D,
					N = E.valueOrDefault,
					R = {
						toLineHeight: function(e, t) {
							var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
							if (!n || "normal" === n[1]) return 1.2 * t;
							switch (e = +n[2], n[3]) {
								case "px":
									return e;
								case "%":
									e /= 100
							}
							return t * e
						},
						toPadding: function(e) {
							var t, n, r, i;
							return E.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, r = +e.bottom || 0, i = +e.left || 0) : t = n = r = i = +e || 0, {
								top: t,
								right: n,
								bottom: r,
								left: i,
								height: t + r,
								width: i + n
							}
						},
						_parseFont: function(e) {
							var t = B.global,
								n = N(e.fontSize, t.defaultFontSize),
								r = {
									family: N(e.fontFamily, t.defaultFontFamily),
									lineHeight: E.options.toLineHeight(N(e.lineHeight, t.defaultLineHeight), n),
									size: n,
									style: N(e.fontStyle, t.defaultFontStyle),
									weight: null,
									string: ""
								};
							return r.string = function(e) {
								return !e || E.isNullOrUndef(e.size) || E.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
							}(r), r
						},
						resolve: function(e, t, n, r) {
							var i, a, o, s = !0;
							for (i = 0, a = e.length; i < a; ++i)
								if (void 0 !== (o = e[i]) && (void 0 !== t && "function" == typeof o && (o = o(t), s = !1), void 0 !== n && E.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return r && !s && (r.cacheable = !1), o
						}
					},
					F = {
						_factorize: function(e) {
							var t, n = [],
								r = Math.sqrt(e);
							for (t = 1; t < r; t++) e % t == 0 && (n.push(t), n.push(e / t));
							return r === (0 | r) && n.push(r), n.sort((function(e, t) {
								return e - t
							})).pop(), n
						},
						log10: Math.log10 || function(e) {
							var t = Math.log(e) * Math.LOG10E,
								n = Math.round(t);
							return e === Math.pow(10, n) ? n : t
						}
					},
					U = F;
				E.log10 = F.log10;
				var j = E,
					H = C,
					Y = L,
					V = R,
					z = U,
					Q = {
						getRtlAdapter: function(e, t, n) {
							return e ? function(e, t) {
								return {
									x: function(n) {
										return e + e + t - n
									},
									setWidth: function(e) {
										t = e
									},
									textAlign: function(e) {
										return "center" === e ? e : "right" === e ? "left" : "right"
									},
									xPlus: function(e, t) {
										return e - t
									},
									leftForLtr: function(e, t) {
										return e - t
									}
								}
							}(t, n) : {
								x: function(e) {
									return e
								},
								setWidth: function(e) {},
								textAlign: function(e) {
									return e
								},
								xPlus: function(e, t) {
									return e + t
								},
								leftForLtr: function(e, t) {
									return e
								}
							}
						},
						overrideTextDirection: function(e, t) {
							var n, r;
							"ltr" !== t && "rtl" !== t || (r = [(n = e.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = r)
						},
						restoreTextDirection: function(e) {
							var t = e.prevTextDirection;
							void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
						}
					};
				j.easing = H, j.canvas = Y, j.options = V, j.math = z, j.rtl = Q;
				var G = function(e) {
					j.extend(this, e), this.initialize.apply(this, arguments)
				};
				j.extend(G.prototype, {
					_type: void 0,
					initialize: function() {
						this.hidden = !1
					},
					pivot: function() {
						var e = this;
						return e._view || (e._view = j.extend({}, e._model)), e._start = {}, e
					},
					transition: function(e) {
						var t = this,
							n = t._model,
							r = t._start,
							i = t._view;
						return n && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), function(e, t, n, r) {
							var i, a, o, s, u, c, l, f, d, h = Object.keys(n);
							for (i = 0, a = h.length; i < a; ++i)
								if (c = n[o = h[i]], t.hasOwnProperty(o) || (t[o] = c), (s = t[o]) !== c && "_" !== o[0]) {
									if (e.hasOwnProperty(o) || (e[o] = s), (l = typeof c) == typeof(u = e[o]))
										if ("string" === l) {
											if ((f = A(u)).valid && (d = A(c)).valid) {
												t[o] = d.mix(f, r).rgbString();
												continue
											}
										} else if (j.isFinite(u) && j.isFinite(c)) {
										t[o] = u + (c - u) * r;
										continue
									}
									t[o] = c
								}
						}(r, i, n, e), t) : (t._view = j.extend({}, n), t._start = null, t)
					},
					tooltipPosition: function() {
						return {
							x: this._model.x,
							y: this._model.y
						}
					},
					hasValue: function() {
						return j.isNumber(this._model.x) && j.isNumber(this._model.y)
					}
				}), G.extend = j.inherits;
				var q = G,
					W = q.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: "",
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null
					}),
					K = W;
				Object.defineProperty(W.prototype, "animationObject", {
					get: function() {
						return this
					}
				}), Object.defineProperty(W.prototype, "chartInstance", {
					get: function() {
						return this.chart
					},
					set: function(e) {
						this.chart = e
					}
				}), B._set("global", {
					animation: {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: j.noop,
						onComplete: j.noop
					}
				});
				var X = {
						animations: [],
						request: null,
						addAnimation: function(e, t, n, r) {
							var i, a, o = this.animations;
							for (t.chart = e, t.startTime = Date.now(), t.duration = n, r || (e.animating = !0), i = 0, a = o.length; i < a; ++i)
								if (o[i].chart === e) return void(o[i] = t);
							o.push(t), 1 === o.length && this.requestAnimationFrame()
						},
						cancelAnimation: function(e) {
							var t = j.findIndex(this.animations, (function(t) {
								return t.chart === e
							})); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
						},
						requestAnimationFrame: function() {
							var e = this;
							null === e.request && (e.request = j.requestAnimFrame.call(window, (function() {
								e.request = null, e.startDigest()
							})))
						},
						startDigest: function() {
							var e = this;
							e.advance(), e.animations.length > 0 && e.requestAnimationFrame()
						},
						advance: function() {
							for (var e, t, n, r, i = this.animations, a = 0; a < i.length;) t = (e = i[a]).chart, n = e.numSteps, r = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(r, n), j.callback(e.render, [t, e], t), j.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (j.callback(e.onAnimationComplete, [e], t), t.animating = !1, i.splice(a, 1)) : ++a
						}
					},
					J = j.options.resolve,
					Z = ["push", "pop", "shift", "splice", "unshift"];

				function ee(e, t) {
					var n = e._chartjs;
					if (n) {
						var r = n.listeners,
							i = r.indexOf(t); - 1 !== i && r.splice(i, 1), r.length > 0 || (Z.forEach((function(t) {
							delete e[t]
						})), delete e._chartjs)
					}
				}
				var te = function(e, t) {
					this.initialize(e, t)
				};
				j.extend(te.prototype, {
					datasetElementType: null,
					dataElementType: null,
					_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
					initialize: function(e, t) {
						var n = this;
						n.chart = e, n.index = t, n.linkScales(), n.addElements(), n._type = n.getMeta().type
					},
					updateIndex: function(e) {
						this.index = e
					},
					linkScales: function() {
						var e = this,
							t = e.getMeta(),
							n = e.chart,
							r = n.scales,
							i = e.getDataset(),
							a = n.options.scales;
						null !== t.xAxisID && t.xAxisID in r && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in r && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id)
					},
					getDataset: function() {
						return this.chart.data.datasets[this.index]
					},
					getMeta: function() {
						return this.chart.getDatasetMeta(this.index)
					},
					getScaleForId: function(e) {
						return this.chart.scales[e]
					},
					_getValueScaleId: function() {
						return this.getMeta().yAxisID
					},
					_getIndexScaleId: function() {
						return this.getMeta().xAxisID
					},
					_getValueScale: function() {
						return this.getScaleForId(this._getValueScaleId())
					},
					_getIndexScale: function() {
						return this.getScaleForId(this._getIndexScaleId())
					},
					reset: function() {
						this._update(!0)
					},
					destroy: function() {
						this._data && ee(this._data, this)
					},
					createMetaDataset: function() {
						var e = this,
							t = e.datasetElementType;
						return t && new t({
							_chart: e.chart,
							_datasetIndex: e.index
						})
					},
					createMetaData: function(e) {
						var t = this,
							n = t.dataElementType;
						return n && new n({
							_chart: t.chart,
							_datasetIndex: t.index,
							_index: e
						})
					},
					addElements: function() {
						var e, t, n = this,
							r = n.getMeta(),
							i = n.getDataset().data || [],
							a = r.data;
						for (e = 0, t = i.length; e < t; ++e) a[e] = a[e] || n.createMetaData(e);
						r.dataset = r.dataset || n.createMetaDataset()
					},
					addElementAndReset: function(e) {
						var t = this.createMetaData(e);
						this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
					},
					buildOrUpdateElements: function() {
						var e = this,
							t = e.getDataset(),
							n = t.data || (t.data = []);
						e._data !== n && (e._data && ee(e._data, e), n && Object.isExtensible(n) && function(e, t) {
							e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
								configurable: !0,
								enumerable: !1,
								value: {
									listeners: [t]
								}
							}), Z.forEach((function(t) {
								var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
									r = e[t];
								Object.defineProperty(e, t, {
									configurable: !0,
									enumerable: !1,
									value: function() {
										var t = Array.prototype.slice.call(arguments),
											i = r.apply(this, t);
										return j.each(e._chartjs.listeners, (function(e) {
											"function" == typeof e[n] && e[n].apply(e, t)
										})), i
									}
								})
							})))
						}(n, e), e._data = n), e.resyncElements()
					},
					_configure: function() {
						var e = this;
						e._config = j.merge(Object.create(null), [e.chart.options.datasets[e._type], e.getDataset()], {
							merger: function(e, t, n) {
								"_meta" !== e && "data" !== e && j._merger(e, t, n)
							}
						})
					},
					_update: function(e) {
						var t = this;
						t._configure(), t._cachedDataOpts = null, t.update(e)
					},
					update: j.noop,
					transition: function(e) {
						for (var t = this.getMeta(), n = t.data || [], r = n.length, i = 0; i < r; ++i) n[i].transition(e);
						t.dataset && t.dataset.transition(e)
					},
					draw: function() {
						var e = this.getMeta(),
							t = e.data || [],
							n = t.length,
							r = 0;
						for (e.dataset && e.dataset.draw(); r < n; ++r) t[r].draw()
					},
					getStyle: function(e) {
						var t, n = this,
							r = n.getMeta(),
							i = r.dataset;
						return n._configure(), i && void 0 === e ? t = n._resolveDatasetElementOptions(i || {}) : (e = e || 0, t = n._resolveDataElementOptions(r.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t
					},
					_resolveDatasetElementOptions: function(e, t) {
						var n, r, i, a, o = this,
							s = o.chart,
							u = o._config,
							c = e.custom || {},
							l = s.options.elements[o.datasetElementType.prototype._type] || {},
							f = o._datasetElementOptions,
							d = {},
							h = {
								chart: s,
								dataset: o.getDataset(),
								datasetIndex: o.index,
								hover: t
							};
						for (n = 0, r = f.length; n < r; ++n) i = f[n], a = t ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i, d[i] = J([c[a], u[a], l[a]], h);
						return d
					},
					_resolveDataElementOptions: function(e, t) {
						var n = this,
							r = e && e.custom,
							i = n._cachedDataOpts;
						if (i && !r) return i;
						var a, o, s, u, c = n.chart,
							l = n._config,
							f = c.options.elements[n.dataElementType.prototype._type] || {},
							d = n._dataElementOptions,
							h = {},
							p = {
								chart: c,
								dataIndex: t,
								dataset: n.getDataset(),
								datasetIndex: n.index
							},
							_ = {
								cacheable: !r
							};
						if (r = r || {}, j.isArray(d))
							for (o = 0, s = d.length; o < s; ++o) h[u = d[o]] = J([r[u], l[u], f[u]], p, t, _);
						else
							for (o = 0, s = (a = Object.keys(d)).length; o < s; ++o) h[u = a[o]] = J([r[u], l[d[u]], l[u], f[u]], p, t, _);
						return _.cacheable && (n._cachedDataOpts = Object.freeze(h)), h
					},
					removeHoverStyle: function(e) {
						j.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							n = e._index,
							r = e.custom || {},
							i = e._model,
							a = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: i.backgroundColor,
							borderColor: i.borderColor,
							borderWidth: i.borderWidth
						}, i.backgroundColor = J([r.hoverBackgroundColor, t.hoverBackgroundColor, a(i.backgroundColor)], void 0, n), i.borderColor = J([r.hoverBorderColor, t.hoverBorderColor, a(i.borderColor)], void 0, n), i.borderWidth = J([r.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth], void 0, n)
					},
					_removeDatasetHoverStyle: function() {
						var e = this.getMeta().dataset;
						e && this.removeHoverStyle(e)
					},
					_setDatasetHoverStyle: function() {
						var e, t, n, r, i, a, o = this.getMeta().dataset,
							s = {};
						if (o) {
							for (a = o._model, i = this._resolveDatasetElementOptions(o, !0), e = 0, t = (r = Object.keys(i)).length; e < t; ++e) s[n = r[e]] = a[n], a[n] = i[n];
							o.$previousStyle = s
						}
					},
					resyncElements: function() {
						var e = this,
							t = e.getMeta(),
							n = e.getDataset().data,
							r = t.data.length,
							i = n.length;
						i < r ? t.data.splice(i, r - i) : i > r && e.insertElements(r, i - r)
					},
					insertElements: function(e, t) {
						for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
					},
					onDataPush: function() {
						var e = arguments.length;
						this.insertElements(this.getDataset().data.length - e, e)
					},
					onDataPop: function() {
						this.getMeta().data.pop()
					},
					onDataShift: function() {
						this.getMeta().data.shift()
					},
					onDataSplice: function(e, t) {
						this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
					},
					onDataUnshift: function() {
						this.insertElements(0, arguments.length)
					}
				}), te.extend = j.inherits;
				var ne = te,
					re = 2 * Math.PI;

				function ie(e, t) {
					var n = t.startAngle,
						r = t.endAngle,
						i = t.pixelMargin,
						a = i / t.outerRadius,
						o = t.x,
						s = t.y;
					e.beginPath(), e.arc(o, s, t.outerRadius, n - a, r + a), t.innerRadius > i ? (a = i / t.innerRadius, e.arc(o, s, t.innerRadius - i, r + a, n - a, !0)) : e.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip()
				}

				function ae(e, t, n) {
					var r = "inner" === t.borderAlign;
					r ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), n.fullCircles && function(e, t, n, r) {
						var i, a = n.endAngle;
						for (r && (n.endAngle = n.startAngle + re, ie(e, n), n.endAngle = a, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += re, n.fullCircles--)), e.beginPath(), e.arc(n.x, n.y, n.innerRadius, n.startAngle + re, n.startAngle, !0), i = 0; i < n.fullCircles; ++i) e.stroke();
						for (e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.startAngle + re), i = 0; i < n.fullCircles; ++i) e.stroke()
					}(e, t, n, r), r && ie(e, n), e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle), e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), e.closePath(), e.stroke()
				}
				B._set("global", {
					elements: {
						arc: {
							backgroundColor: B.global.defaultColor,
							borderColor: "#fff",
							borderWidth: 2,
							borderAlign: "center"
						}
					}
				});
				var oe = q.extend({
						_type: "arc",
						inLabelRange: function(e) {
							var t = this._view;
							return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
						},
						inRange: function(e, t) {
							var n = this._view;
							if (n) {
								for (var r = j.getAngleFromPoint(n, {
										x: e,
										y: t
									}), i = r.angle, a = r.distance, o = n.startAngle, s = n.endAngle; s < o;) s += re;
								for (; i > s;) i -= re;
								for (; i < o;) i += re;
								var u = i >= o && i <= s,
									c = a >= n.innerRadius && a <= n.outerRadius;
								return u && c
							}
							return !1
						},
						getCenterPoint: function() {
							var e = this._view,
								t = (e.startAngle + e.endAngle) / 2,
								n = (e.innerRadius + e.outerRadius) / 2;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						getArea: function() {
							var e = this._view;
							return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
						},
						tooltipPosition: function() {
							var e = this._view,
								t = e.startAngle + (e.endAngle - e.startAngle) / 2,
								n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						draw: function() {
							var e, t = this._chart.ctx,
								n = this._view,
								r = "inner" === n.borderAlign ? .33 : 0,
								i = {
									x: n.x,
									y: n.y,
									innerRadius: n.innerRadius,
									outerRadius: Math.max(n.outerRadius - r, 0),
									pixelMargin: r,
									startAngle: n.startAngle,
									endAngle: n.endAngle,
									fullCircles: Math.floor(n.circumference / re)
								};
							if (t.save(), t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor, i.fullCircles) {
								for (i.endAngle = i.startAngle + re, t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), e = 0; e < i.fullCircles; ++e) t.fill();
								i.endAngle = i.startAngle + n.circumference % re
							}
							t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.fill(), n.borderWidth && ae(t, n, i), t.restore()
						}
					}),
					se = j.valueOrDefault,
					ue = B.global.defaultColor;
				B._set("global", {
					elements: {
						line: {
							tension: .4,
							backgroundColor: ue,
							borderWidth: 3,
							borderColor: ue,
							borderCapStyle: "butt",
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: "miter",
							capBezierPoints: !0,
							fill: !0
						}
					}
				});
				var ce = q.extend({
						_type: "line",
						draw: function() {
							var e, t, n, r = this,
								i = r._view,
								a = r._chart.ctx,
								o = i.spanGaps,
								s = r._children.slice(),
								u = B.global,
								c = u.elements.line,
								l = -1,
								f = r._loop;
							if (s.length) {
								if (r._loop) {
									for (e = 0; e < s.length; ++e)
										if (t = j.previousItem(s, e), !s[e]._view.skip && t._view.skip) {
											s = s.slice(e).concat(s.slice(0, e)), f = o;
											break
										} f && s.push(s[0])
								}
								for (a.save(), a.lineCap = i.borderCapStyle || c.borderCapStyle, a.setLineDash && a.setLineDash(i.borderDash || c.borderDash), a.lineDashOffset = se(i.borderDashOffset, c.borderDashOffset), a.lineJoin = i.borderJoinStyle || c.borderJoinStyle, a.lineWidth = se(i.borderWidth, c.borderWidth), a.strokeStyle = i.borderColor || u.defaultColor, a.beginPath(), (n = s[0]._view).skip || (a.moveTo(n.x, n.y), l = 0), e = 1; e < s.length; ++e) n = s[e]._view, t = -1 === l ? j.previousItem(s, e) : s[l], n.skip || (l !== e - 1 && !o || -1 === l ? a.moveTo(n.x, n.y) : j.canvas.lineTo(a, t._view, n), l = e);
								f && a.closePath(), a.stroke(), a.restore()
							}
						}
					}),
					le = j.valueOrDefault,
					fe = B.global.defaultColor;

				function de(e) {
					var t = this._view;
					return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
				}
				B._set("global", {
					elements: {
						point: {
							radius: 3,
							pointStyle: "circle",
							backgroundColor: fe,
							borderColor: fe,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1
						}
					}
				});
				var he = q.extend({
						_type: "point",
						inRange: function(e, t) {
							var n = this._view;
							return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
						},
						inLabelRange: de,
						inXRange: de,
						inYRange: function(e) {
							var t = this._view;
							return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
						},
						getCenterPoint: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						},
						getArea: function() {
							return Math.PI * Math.pow(this._view.radius, 2)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y,
								padding: e.radius + e.borderWidth
							}
						},
						draw: function(e) {
							var t = this._view,
								n = this._chart.ctx,
								r = t.pointStyle,
								i = t.rotation,
								a = t.radius,
								o = t.x,
								s = t.y,
								u = B.global,
								c = u.defaultColor;
							t.skip || (void 0 === e || j.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || c, n.lineWidth = le(t.borderWidth, u.elements.point.borderWidth), n.fillStyle = t.backgroundColor || c, j.canvas.drawPoint(n, r, a, o, s, i))
						}
					}),
					pe = B.global.defaultColor;

				function _e(e) {
					return e && void 0 !== e.width
				}

				function me(e) {
					var t, n, r, i, a;
					return _e(e) ? (a = e.width / 2, t = e.x - a, n = e.x + a, r = Math.min(e.y, e.base), i = Math.max(e.y, e.base)) : (a = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), r = e.y - a, i = e.y + a), {
						left: t,
						top: r,
						right: n,
						bottom: i
					}
				}

				function be(e, t, n) {
					return e === t ? n : e === n ? t : e
				}

				function ge(e, t, n) {
					var r, i, a, o, s = e.borderWidth,
						u = function(e) {
							var t = e.borderSkipped,
								n = {};
							return t ? (e.horizontal ? e.base > e.x && (t = be(t, "left", "right")) : e.base < e.y && (t = be(t, "bottom", "top")), n[t] = !0, n) : n
						}(e);
					return j.isObject(s) ? (r = +s.top || 0, i = +s.right || 0, a = +s.bottom || 0, o = +s.left || 0) : r = i = a = o = +s || 0, {
						t: u.top || r < 0 ? 0 : r > n ? n : r,
						r: u.right || i < 0 ? 0 : i > t ? t : i,
						b: u.bottom || a < 0 ? 0 : a > n ? n : a,
						l: u.left || o < 0 ? 0 : o > t ? t : o
					}
				}

				function ve(e, t, n) {
					var r = null === t,
						i = null === n,
						a = !(!e || r && i) && me(e);
					return a && (r || t >= a.left && t <= a.right) && (i || n >= a.top && n <= a.bottom)
				}
				B._set("global", {
					elements: {
						rectangle: {
							backgroundColor: pe,
							borderColor: pe,
							borderSkipped: "bottom",
							borderWidth: 0
						}
					}
				});
				var ye = q.extend({
						_type: "rectangle",
						draw: function() {
							var e = this._chart.ctx,
								t = this._view,
								n = function(e) {
									var t = me(e),
										n = t.right - t.left,
										r = t.bottom - t.top,
										i = ge(e, n / 2, r / 2);
									return {
										outer: {
											x: t.left,
											y: t.top,
											w: n,
											h: r
										},
										inner: {
											x: t.left + i.l,
											y: t.top + i.t,
											w: n - i.l - i.r,
											h: r - i.t - i.b
										}
									}
								}(t),
								r = n.outer,
								i = n.inner;
							e.fillStyle = t.backgroundColor, e.fillRect(r.x, r.y, r.w, r.h), r.w === i.w && r.h === i.h || (e.save(), e.beginPath(), e.rect(r.x, r.y, r.w, r.h), e.clip(), e.fillStyle = t.borderColor, e.rect(i.x, i.y, i.w, i.h), e.fill("evenodd"), e.restore())
						},
						height: function() {
							var e = this._view;
							return e.base - e.y
						},
						inRange: function(e, t) {
							return ve(this._view, e, t)
						},
						inLabelRange: function(e, t) {
							var n = this._view;
							return _e(n) ? ve(n, e, null) : ve(n, null, t)
						},
						inXRange: function(e) {
							return ve(this._view, e, null)
						},
						inYRange: function(e) {
							return ve(this._view, null, e)
						},
						getCenterPoint: function() {
							var e, t, n = this._view;
							return _e(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {
								x: e,
								y: t
							}
						},
						getArea: function() {
							var e = this._view;
							return _e(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						}
					}),
					Ae = {},
					Se = oe,
					we = ce,
					Ee = he,
					Te = ye;
				Ae.Arc = Se, Ae.Line = we, Ae.Point = Ee, Ae.Rectangle = Te;
				var Ce = j._deprecated,
					$e = j.valueOrDefault;

				function ke(e, t, n) {
					var r, i, a = n.barThickness,
						o = t.stackCount,
						s = t.pixels[e],
						u = j.isNullOrUndef(a) ? function(e, t) {
							var n, r, i, a, o = e._length;
							for (i = 1, a = t.length; i < a; ++i) o = Math.min(o, Math.abs(t[i] - t[i - 1]));
							for (i = 0, a = e.getTicks().length; i < a; ++i) r = e.getPixelForTick(i), o = i > 0 ? Math.min(o, Math.abs(r - n)) : o, n = r;
							return o
						}(t.scale, t.pixels) : -1;
					return j.isNullOrUndef(a) ? (r = u * n.categoryPercentage, i = n.barPercentage) : (r = a * o, i = 1), {
						chunk: r / o,
						ratio: i,
						start: s - r / 2
					}
				}
				B._set("bar", {
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}],
						yAxes: [{
							type: "linear"
						}]
					}
				}), B._set("global", {
					datasets: {
						bar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Oe = ne.extend({
						dataElementType: Ae.Rectangle,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
						initialize: function() {
							var e, t, n = this;
							ne.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0, t = n._getIndexScale().options, Ce("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Ce("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Ce("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Ce("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Ce("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
						},
						update: function(e) {
							var t, n, r = this,
								i = r.getMeta().data;
							for (r._ruler = r.getRuler(), t = 0, n = i.length; t < n; ++t) r.updateElement(i[t], t, e)
						},
						updateElement: function(e, t, n) {
							var r = this,
								i = r.getMeta(),
								a = r.getDataset(),
								o = r._resolveDataElementOptions(e, t);
							e._xScale = r.getScaleForId(i.xAxisID), e._yScale = r.getScaleForId(i.yAxisID), e._datasetIndex = r.index, e._index = t, e._model = {
								backgroundColor: o.backgroundColor,
								borderColor: o.borderColor,
								borderSkipped: o.borderSkipped,
								borderWidth: o.borderWidth,
								datasetLabel: a.label,
								label: r.chart.data.labels[t]
							}, j.isArray(a.data[t]) && (e._model.borderSkipped = null), r._updateElementGeometry(e, t, n, o), e.pivot()
						},
						_updateElementGeometry: function(e, t, n, r) {
							var i = this,
								a = e._model,
								o = i._getValueScale(),
								s = o.getBasePixel(),
								u = o.isHorizontal(),
								c = i._ruler || i.getRuler(),
								l = i.calculateBarValuePixels(i.index, t, r),
								f = i.calculateBarIndexPixels(i.index, t, c, r);
							a.horizontal = u, a.base = n ? s : l.base, a.x = u ? n ? s : l.head : f.center, a.y = u ? f.center : n ? s : l.head, a.height = u ? f.size : void 0, a.width = u ? void 0 : f.size
						},
						_getStacks: function(e) {
							var t, n, r = this._getIndexScale(),
								i = r._getMatchingVisibleMetas(this._type),
								a = r.options.stacked,
								o = i.length,
								s = [];
							for (t = 0; t < o && (n = i[t], (!1 === a || -1 === s.indexOf(n.stack) || void 0 === a && void 0 === n.stack) && s.push(n.stack), n.index !== e); ++t);
							return s
						},
						getStackCount: function() {
							return this._getStacks().length
						},
						getStackIndex: function(e, t) {
							var n = this._getStacks(e),
								r = void 0 !== t ? n.indexOf(t) : -1;
							return -1 === r ? n.length - 1 : r
						},
						getRuler: function() {
							var e, t, n = this,
								r = n._getIndexScale(),
								i = [];
							for (e = 0, t = n.getMeta().data.length; e < t; ++e) i.push(r.getPixelForValue(null, e, n.index));
							return {
								pixels: i,
								start: r._startPixel,
								end: r._endPixel,
								stackCount: n.getStackCount(),
								scale: r
							}
						},
						calculateBarValuePixels: function(e, t, n) {
							var r, i, a, o, s, u, c, l = this,
								f = l.chart,
								d = l._getValueScale(),
								h = d.isHorizontal(),
								p = f.data.datasets,
								_ = d._getMatchingVisibleMetas(l._type),
								m = d._parseValue(p[e].data[t]),
								b = n.minBarLength,
								g = d.options.stacked,
								v = l.getMeta().stack,
								y = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
								A = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max,
								S = _.length;
							if (g || void 0 === g && void 0 !== v)
								for (r = 0; r < S && (i = _[r]).index !== e; ++r) i.stack === v && (a = void 0 === (c = d._parseValue(p[i.index].data[t])).start ? c.end : c.min >= 0 && c.max >= 0 ? c.max : c.min, (m.min < 0 && a < 0 || m.max >= 0 && a > 0) && (y += a));
							return o = d.getPixelForValue(y), u = (s = d.getPixelForValue(y + A)) - o, void 0 !== b && Math.abs(u) < b && (u = b, s = A >= 0 && !h || A < 0 && h ? o - b : o + b), {
								size: u,
								base: o,
								head: s,
								center: s + u / 2
							}
						},
						calculateBarIndexPixels: function(e, t, n, r) {
							var i = "flex" === r.barThickness ? function(e, t, n) {
									var r, i = t.pixels,
										a = i[e],
										o = e > 0 ? i[e - 1] : null,
										s = e < i.length - 1 ? i[e + 1] : null,
										u = n.categoryPercentage;
									return null === o && (o = a - (null === s ? t.end - t.start : s - a)), null === s && (s = a + a - o), r = a - (a - Math.min(o, s)) / 2 * u, {
										chunk: Math.abs(s - o) / 2 * u / t.stackCount,
										ratio: n.barPercentage,
										start: r
									}
								}(t, n, r) : ke(t, n, r),
								a = this.getStackIndex(e, this.getMeta().stack),
								o = i.start + i.chunk * a + i.chunk / 2,
								s = Math.min($e(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
							return {
								base: o - s / 2,
								head: o + s / 2,
								center: o,
								size: s
							}
						},
						draw: function() {
							var e = this,
								t = e.chart,
								n = e._getValueScale(),
								r = e.getMeta().data,
								i = e.getDataset(),
								a = r.length,
								o = 0;
							for (j.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
								var s = n._parseValue(i.data[o]);
								isNaN(s.min) || isNaN(s.max) || r[o].draw()
							}
							j.canvas.unclipArea(t.ctx)
						},
						_resolveDataElementOptions: function() {
							var e = this,
								t = j.extend({}, ne.prototype._resolveDataElementOptions.apply(e, arguments)),
								n = e._getIndexScale().options,
								r = e._getValueScale().options;
							return t.barPercentage = $e(n.barPercentage, t.barPercentage), t.barThickness = $e(n.barThickness, t.barThickness), t.categoryPercentage = $e(n.categoryPercentage, t.categoryPercentage), t.maxBarThickness = $e(n.maxBarThickness, t.maxBarThickness), t.minBarLength = $e(r.minBarLength, t.minBarLength), t
						}
					}),
					xe = j.valueOrDefault,
					Pe = j.options.resolve;
				B._set("bubble", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							position: "left",
							id: "y-axis-0"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.datasets[e.datasetIndex].label || "",
									r = t.datasets[e.datasetIndex].data[e.index];
								return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + r.r + ")"
							}
						}
					}
				});
				var Me = ne.extend({
						dataElementType: Ae.Point,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
						update: function(e) {
							var t = this,
								n = t.getMeta().data;
							j.each(n, (function(n, r) {
								t.updateElement(n, r, e)
							}))
						},
						updateElement: function(e, t, n) {
							var r = this,
								i = r.getMeta(),
								a = e.custom || {},
								o = r.getScaleForId(i.xAxisID),
								s = r.getScaleForId(i.yAxisID),
								u = r._resolveDataElementOptions(e, t),
								c = r.getDataset().data[t],
								l = r.index,
								f = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof c ? c : NaN, t, l),
								d = n ? s.getBasePixel() : s.getPixelForValue(c, t, l);
							e._xScale = o, e._yScale = s, e._options = u, e._datasetIndex = l, e._index = t, e._model = {
								backgroundColor: u.backgroundColor,
								borderColor: u.borderColor,
								borderWidth: u.borderWidth,
								hitRadius: u.hitRadius,
								pointStyle: u.pointStyle,
								rotation: u.rotation,
								radius: n ? 0 : u.radius,
								skip: a.skip || isNaN(f) || isNaN(d),
								x: f,
								y: d
							}, e.pivot()
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								r = j.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = xe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = xe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = xe(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
						},
						_resolveDataElementOptions: function(e, t) {
							var n = this,
								r = n.chart,
								i = n.getDataset(),
								a = e.custom || {},
								o = i.data[t] || {},
								s = ne.prototype._resolveDataElementOptions.apply(n, arguments),
								u = {
									chart: r,
									dataIndex: t,
									dataset: i,
									datasetIndex: n.index
								};
							return n._cachedDataOpts === s && (s = j.extend({}, s)), s.radius = Pe([a.radius, o.r, n._config.radius, r.options.elements.point.radius], u, t), s
						}
					}),
					Ie = j.valueOrDefault,
					Le = Math.PI,
					De = 2 * Le,
					Be = Le / 2;
				B._set("doughnut", {
					animation: {
						animateRotate: !0,
						animateScale: !1
					},
					hover: {
						mode: "single"
					},
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data,
							o = a.datasets,
							s = a.labels;
						if (i.setAttribute("class", e.id + "-legend"), o.length)
							for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
						return i.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
									var i = e.getDatasetMeta(0),
										a = i.controller.getStyle(r);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
										index: r
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, r, i, a = t.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a] && (i.data[a].hidden = !i.data[a].hidden);
							o.update()
						}
					},
					cutoutPercentage: 50,
					rotation: -Be,
					circumference: De,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.labels[e.index],
									r = ": " + t.datasets[e.datasetIndex].data[e.index];
								return j.isArray(n) ? (n = n.slice())[0] += r : n += r, n
							}
						}
					}
				});
				var Ne = ne.extend({
					dataElementType: Ae.Arc,
					linkScales: j.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					getRingIndex: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
						return t
					},
					update: function(e) {
						var t, n, r, i, a = this,
							o = a.chart,
							s = o.chartArea,
							u = o.options,
							c = 1,
							l = 1,
							f = 0,
							d = 0,
							h = a.getMeta(),
							p = h.data,
							_ = u.cutoutPercentage / 100 || 0,
							m = u.circumference,
							b = a._getRingWeight(a.index);
						if (m < De) {
							var g = u.rotation % De,
								v = (g += g >= Le ? -De : g < -Le ? De : 0) + m,
								y = Math.cos(g),
								A = Math.sin(g),
								S = Math.cos(v),
								w = Math.sin(v),
								E = g <= 0 && v >= 0 || v >= De,
								T = g <= Be && v >= Be || v >= De + Be,
								C = g <= -Be && v >= -Be || v >= Le + Be,
								$ = g === -Le || v >= Le ? -1 : Math.min(y, y * _, S, S * _),
								k = C ? -1 : Math.min(A, A * _, w, w * _),
								O = E ? 1 : Math.max(y, y * _, S, S * _),
								x = T ? 1 : Math.max(A, A * _, w, w * _);
							c = (O - $) / 2, l = (x - k) / 2, f = -(O + $) / 2, d = -(x + k) / 2
						}
						for (r = 0, i = p.length; r < i; ++r) p[r]._options = a._resolveDataElementOptions(p[r], r);
						for (o.borderWidth = a.getMaxBorderWidth(), t = (s.right - s.left - o.borderWidth) / c, n = (s.bottom - s.top - o.borderWidth) / l, o.outerRadius = Math.max(Math.min(t, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * _, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), o.offsetX = f * o.outerRadius, o.offsetY = d * o.outerRadius, h.total = a.calculateTotal(), a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - o.radiusLength * b, 0), r = 0, i = p.length; r < i; ++r) a.updateElement(p[r], r, e)
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = r.chart,
							a = i.chartArea,
							o = i.options,
							s = o.animation,
							u = (a.left + a.right) / 2,
							c = (a.top + a.bottom) / 2,
							l = o.rotation,
							f = o.rotation,
							d = r.getDataset(),
							h = n && s.animateRotate || e.hidden ? 0 : r.calculateCircumference(d.data[t]) * (o.circumference / De),
							p = n && s.animateScale ? 0 : r.innerRadius,
							_ = n && s.animateScale ? 0 : r.outerRadius,
							m = e._options || {};
						j.extend(e, {
							_datasetIndex: r.index,
							_index: t,
							_model: {
								backgroundColor: m.backgroundColor,
								borderColor: m.borderColor,
								borderWidth: m.borderWidth,
								borderAlign: m.borderAlign,
								x: u + i.offsetX,
								y: c + i.offsetY,
								startAngle: l,
								endAngle: f,
								circumference: h,
								outerRadius: _,
								innerRadius: p,
								label: j.valueAtIndexOrDefault(d.label, t, i.data.labels[t])
							}
						});
						var b = e._model;
						n && s.animateRotate || (b.startAngle = 0 === t ? o.rotation : r.getMeta().data[t - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), e.pivot()
					},
					calculateTotal: function() {
						var e, t = this.getDataset(),
							n = this.getMeta(),
							r = 0;
						return j.each(n.data, (function(n, i) {
							e = t.data[i], isNaN(e) || n.hidden || (r += Math.abs(e))
						})), r
					},
					calculateCircumference: function(e) {
						var t = this.getMeta().total;
						return t > 0 && !isNaN(e) ? De * (Math.abs(e) / t) : 0
					},
					getMaxBorderWidth: function(e) {
						var t, n, r, i, a, o, s, u, c = 0,
							l = this.chart;
						if (!e)
							for (t = 0, n = l.data.datasets.length; t < n; ++t)
								if (l.isDatasetVisible(t)) {
									e = (r = l.getDatasetMeta(t)).data, t !== this.index && (a = r.controller);
									break
								} if (!e) return 0;
						for (t = 0, n = e.length; t < n; ++t) i = e[t], a ? (a._configure(), o = a._resolveDataElementOptions(i, t)) : o = i._options, "inner" !== o.borderAlign && (s = o.borderWidth, c = (u = o.hoverBorderWidth) > (c = s > c ? s : c) ? u : c);
						return c
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = Ie(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Ie(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Ie(n.hoverBorderWidth, n.borderWidth)
					},
					_getRingWeightOffset: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
						return t
					},
					_getRingWeight: function(e) {
						return Math.max(Ie(this.chart.data.datasets[e].weight, 1), 0)
					},
					_getVisibleDatasetWeightTotal: function() {
						return this._getRingWeightOffset(this.chart.data.datasets.length)
					}
				});
				B._set("horizontalBar", {
					hover: {
						mode: "index",
						axis: "y"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							type: "category",
							position: "left",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}]
					},
					elements: {
						rectangle: {
							borderSkipped: "left"
						}
					},
					tooltips: {
						mode: "index",
						axis: "y"
					}
				}), B._set("global", {
					datasets: {
						horizontalBar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Re = Oe.extend({
						_getValueScaleId: function() {
							return this.getMeta().xAxisID
						},
						_getIndexScaleId: function() {
							return this.getMeta().yAxisID
						}
					}),
					Fe = j.valueOrDefault,
					Ue = j.options.resolve,
					je = j.canvas._isPointInArea;

				function He(e, t) {
					var n = e && e.options.ticks || {},
						r = n.reverse,
						i = void 0 === n.min ? t : 0,
						a = void 0 === n.max ? t : 0;
					return {
						start: r ? a : i,
						end: r ? i : a
					}
				}

				function Ye(e, t, n) {
					var r = n / 2,
						i = He(e, r),
						a = He(t, r);
					return {
						top: a.end,
						right: i.end,
						bottom: a.start,
						left: i.start
					}
				}

				function Ve(e) {
					var t, n, r, i;
					return j.isObject(e) ? (t = e.top, n = e.right, r = e.bottom, i = e.left) : t = n = r = i = e, {
						top: t,
						right: n,
						bottom: r,
						left: i
					}
				}
				B._set("line", {
					showLines: !0,
					spanGaps: !1,
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							id: "y-axis-0"
						}]
					}
				});
				var ze = ne.extend({
						datasetElementType: Ae.Line,
						dataElementType: Ae.Point,
						_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
						_dataElementOptions: {
							backgroundColor: "pointBackgroundColor",
							borderColor: "pointBorderColor",
							borderWidth: "pointBorderWidth",
							hitRadius: "pointHitRadius",
							hoverBackgroundColor: "pointHoverBackgroundColor",
							hoverBorderColor: "pointHoverBorderColor",
							hoverBorderWidth: "pointHoverBorderWidth",
							hoverRadius: "pointHoverRadius",
							pointStyle: "pointStyle",
							radius: "pointRadius",
							rotation: "pointRotation"
						},
						update: function(e) {
							var t, n, r = this,
								i = r.getMeta(),
								a = i.dataset,
								o = i.data || [],
								s = r.chart.options,
								u = r._config,
								c = r._showLine = Fe(u.showLine, s.showLines);
							for (r._xScale = r.getScaleForId(i.xAxisID), r._yScale = r.getScaleForId(i.yAxisID), c && (void 0 !== u.tension && void 0 === u.lineTension && (u.lineTension = u.tension), a._scale = r._yScale, a._datasetIndex = r.index, a._children = o, a._model = r._resolveDatasetElementOptions(a), a.pivot()), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
							for (c && 0 !== a._model.tension && r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
						},
						updateElement: function(e, t, n) {
							var r, i, a = this,
								o = a.getMeta(),
								s = e.custom || {},
								u = a.getDataset(),
								c = a.index,
								l = u.data[t],
								f = a._xScale,
								d = a._yScale,
								h = o.dataset._model,
								p = a._resolveDataElementOptions(e, t);
							r = f.getPixelForValue("object" == typeof l ? l : NaN, t, c), i = n ? d.getBasePixel() : a.calculatePointY(l, t, c), e._xScale = f, e._yScale = d, e._options = p, e._datasetIndex = c, e._index = t, e._model = {
								x: r,
								y: i,
								skip: s.skip || isNaN(r) || isNaN(i),
								radius: p.radius,
								pointStyle: p.pointStyle,
								rotation: p.rotation,
								backgroundColor: p.backgroundColor,
								borderColor: p.borderColor,
								borderWidth: p.borderWidth,
								tension: Fe(s.tension, h ? h.tension : 0),
								steppedLine: !!h && h.steppedLine,
								hitRadius: p.hitRadius
							}
						},
						_resolveDatasetElementOptions: function(e) {
							var t = this,
								n = t._config,
								r = e.custom || {},
								i = t.chart.options,
								a = i.elements.line,
								o = ne.prototype._resolveDatasetElementOptions.apply(t, arguments);
							return o.spanGaps = Fe(n.spanGaps, i.spanGaps), o.tension = Fe(n.lineTension, a.tension), o.steppedLine = Ue([r.steppedLine, n.steppedLine, a.stepped]), o.clip = Ve(Fe(n.clip, Ye(t._xScale, t._yScale, o.borderWidth))), o
						},
						calculatePointY: function(e, t, n) {
							var r, i, a, o, s, u, c, l = this.chart,
								f = this._yScale,
								d = 0,
								h = 0;
							if (f.options.stacked) {
								for (s = +f.getRightValue(e), c = (u = l._getSortedVisibleDatasetMetas()).length, r = 0; r < c && (a = u[r]).index !== n; ++r) i = l.data.datasets[a.index], "line" === a.type && a.yAxisID === f.id && ((o = +f.getRightValue(i.data[t])) < 0 ? h += o || 0 : d += o || 0);
								return s < 0 ? f.getPixelForValue(h + s) : f.getPixelForValue(d + s)
							}
							return f.getPixelForValue(e)
						},
						updateBezierControlPoints: function() {
							var e, t, n, r, i = this.chart,
								a = this.getMeta(),
								o = a.dataset._model,
								s = i.chartArea,
								u = a.data || [];

							function c(e, t, n) {
								return Math.max(Math.min(e, n), t)
							}
							if (o.spanGaps && (u = u.filter((function(e) {
									return !e._model.skip
								}))), "monotone" === o.cubicInterpolationMode) j.splineCurveMonotone(u);
							else
								for (e = 0, t = u.length; e < t; ++e) n = u[e]._model, r = j.splineCurve(j.previousItem(u, e)._model, n, j.nextItem(u, e)._model, o.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
							if (i.options.elements.line.capBezierPoints)
								for (e = 0, t = u.length; e < t; ++e) n = u[e]._model, je(n, s) && (e > 0 && je(u[e - 1]._model, s) && (n.controlPointPreviousX = c(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = c(n.controlPointPreviousY, s.top, s.bottom)), e < u.length - 1 && je(u[e + 1]._model, s) && (n.controlPointNextX = c(n.controlPointNextX, s.left, s.right), n.controlPointNextY = c(n.controlPointNextY, s.top, s.bottom)))
						},
						draw: function() {
							var e, t = this,
								n = t.chart,
								r = t.getMeta(),
								i = r.data || [],
								a = n.chartArea,
								o = n.canvas,
								s = 0,
								u = i.length;
							for (t._showLine && (e = r.dataset._model.clip, j.canvas.clipArea(n.ctx, {
									left: !1 === e.left ? 0 : a.left - e.left,
									right: !1 === e.right ? o.width : a.right + e.right,
									top: !1 === e.top ? 0 : a.top - e.top,
									bottom: !1 === e.bottom ? o.height : a.bottom + e.bottom
								}), r.dataset.draw(), j.canvas.unclipArea(n.ctx)); s < u; ++s) i[s].draw(a)
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								r = j.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = Fe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Fe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Fe(n.hoverBorderWidth, n.borderWidth), t.radius = Fe(n.hoverRadius, n.radius)
						}
					}),
					Qe = j.options.resolve;
				B._set("polarArea", {
					scale: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						gridLines: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						ticks: {
							beginAtZero: !0
						}
					},
					animation: {
						animateRotate: !0,
						animateScale: !0
					},
					startAngle: -.5 * Math.PI,
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data,
							o = a.datasets,
							s = a.labels;
						if (i.setAttribute("class", e.id + "-legend"), o.length)
							for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
						return i.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
									var i = e.getDatasetMeta(0),
										a = i.controller.getStyle(r);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
										index: r
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, r, i, a = t.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
							o.update()
						}
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								return t.labels[e.index] + ": " + e.yLabel
							}
						}
					}
				});
				var Ge = ne.extend({
					dataElementType: Ae.Arc,
					linkScales: j.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(e) {
						var t, n, r, i = this,
							a = i.getDataset(),
							o = i.getMeta(),
							s = i.chart.options.startAngle || 0,
							u = i._starts = [],
							c = i._angles = [],
							l = o.data;
						for (i._updateRadius(), o.count = i.countVisibleElements(), t = 0, n = a.data.length; t < n; t++) u[t] = s, r = i._computeAngle(t), c[t] = r, s += r;
						for (t = 0, n = l.length; t < n; ++t) l[t]._options = i._resolveDataElementOptions(l[t], t), i.updateElement(l[t], t, e)
					},
					_updateRadius: function() {
						var e = this,
							t = e.chart,
							n = t.chartArea,
							r = t.options,
							i = Math.min(n.right - n.left, n.bottom - n.top);
						t.outerRadius = Math.max(i / 2, 0), t.innerRadius = Math.max(r.cutoutPercentage ? t.outerRadius / 100 * r.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = r.chart,
							a = r.getDataset(),
							o = i.options,
							s = o.animation,
							u = i.scale,
							c = i.data.labels,
							l = u.xCenter,
							f = u.yCenter,
							d = o.startAngle,
							h = e.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[t]),
							p = r._starts[t],
							_ = p + (e.hidden ? 0 : r._angles[t]),
							m = s.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[t]),
							b = e._options || {};
						j.extend(e, {
							_datasetIndex: r.index,
							_index: t,
							_scale: u,
							_model: {
								backgroundColor: b.backgroundColor,
								borderColor: b.borderColor,
								borderWidth: b.borderWidth,
								borderAlign: b.borderAlign,
								x: l,
								y: f,
								innerRadius: 0,
								outerRadius: n ? m : h,
								startAngle: n && s.animateRotate ? d : p,
								endAngle: n && s.animateRotate ? d : _,
								label: j.valueAtIndexOrDefault(c, t, c[t])
							}
						}), e.pivot()
					},
					countVisibleElements: function() {
						var e = this.getDataset(),
							t = this.getMeta(),
							n = 0;
						return j.each(t.data, (function(t, r) {
							isNaN(e.data[r]) || t.hidden || n++
						})), n
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor,
							i = j.valueOrDefault;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = i(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = i(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = i(n.hoverBorderWidth, n.borderWidth)
					},
					_computeAngle: function(e) {
						var t = this,
							n = this.getMeta().count,
							r = t.getDataset(),
							i = t.getMeta();
						if (isNaN(r.data[e]) || i.data[e].hidden) return 0;
						var a = {
							chart: t.chart,
							dataIndex: e,
							dataset: r,
							datasetIndex: t.index
						};
						return Qe([t.chart.options.elements.arc.angle, 2 * Math.PI / n], a, e)
					}
				});
				B._set("pie", j.clone(B.doughnut)), B._set("pie", {
					cutoutPercentage: 0
				});
				var qe = Ne,
					We = j.valueOrDefault;
				B._set("radar", {
					spanGaps: !1,
					scale: {
						type: "radialLinear"
					},
					elements: {
						line: {
							fill: "start",
							tension: 0
						}
					}
				});
				var Ke = ne.extend({
					datasetElementType: Ae.Line,
					dataElementType: Ae.Point,
					linkScales: j.noop,
					_datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
					_dataElementOptions: {
						backgroundColor: "pointBackgroundColor",
						borderColor: "pointBorderColor",
						borderWidth: "pointBorderWidth",
						hitRadius: "pointHitRadius",
						hoverBackgroundColor: "pointHoverBackgroundColor",
						hoverBorderColor: "pointHoverBorderColor",
						hoverBorderWidth: "pointHoverBorderWidth",
						hoverRadius: "pointHoverRadius",
						pointStyle: "pointStyle",
						radius: "pointRadius",
						rotation: "pointRotation"
					},
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(e) {
						var t, n, r = this,
							i = r.getMeta(),
							a = i.dataset,
							o = i.data || [],
							s = r.chart.scale,
							u = r._config;
						for (void 0 !== u.tension && void 0 === u.lineTension && (u.lineTension = u.tension), a._scale = s, a._datasetIndex = r.index, a._children = o, a._loop = !0, a._model = r._resolveDatasetElementOptions(a), a.pivot(), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
						for (r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = e.custom || {},
							a = r.getDataset(),
							o = r.chart.scale,
							s = o.getPointPositionForValue(t, a.data[t]),
							u = r._resolveDataElementOptions(e, t),
							c = r.getMeta().dataset._model,
							l = n ? o.xCenter : s.x,
							f = n ? o.yCenter : s.y;
						e._scale = o, e._options = u, e._datasetIndex = r.index, e._index = t, e._model = {
							x: l,
							y: f,
							skip: i.skip || isNaN(l) || isNaN(f),
							radius: u.radius,
							pointStyle: u.pointStyle,
							rotation: u.rotation,
							backgroundColor: u.backgroundColor,
							borderColor: u.borderColor,
							borderWidth: u.borderWidth,
							tension: We(i.tension, c ? c.tension : 0),
							hitRadius: u.hitRadius
						}
					},
					_resolveDatasetElementOptions: function() {
						var e = this,
							t = e._config,
							n = e.chart.options,
							r = ne.prototype._resolveDatasetElementOptions.apply(e, arguments);
						return r.spanGaps = We(t.spanGaps, n.spanGaps), r.tension = We(t.lineTension, n.elements.line.tension), r
					},
					updateBezierControlPoints: function() {
						var e, t, n, r, i = this.getMeta(),
							a = this.chart.chartArea,
							o = i.data || [];

						function s(e, t, n) {
							return Math.max(Math.min(e, n), t)
						}
						for (i.dataset._model.spanGaps && (o = o.filter((function(e) {
								return !e._model.skip
							}))), e = 0, t = o.length; e < t; ++e) n = o[e]._model, r = j.splineCurve(j.previousItem(o, e, !0)._model, n, j.nextItem(o, e, !0)._model, n.tension), n.controlPointPreviousX = s(r.previous.x, a.left, a.right), n.controlPointPreviousY = s(r.previous.y, a.top, a.bottom), n.controlPointNextX = s(r.next.x, a.left, a.right), n.controlPointNextY = s(r.next.y, a.top, a.bottom)
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth,
							radius: t.radius
						}, t.backgroundColor = We(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = We(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = We(n.hoverBorderWidth, n.borderWidth), t.radius = We(n.hoverRadius, n.radius)
					}
				});
				B._set("scatter", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							id: "x-axis-1",
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							id: "y-axis-1",
							type: "linear",
							position: "left"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e) {
								return "(" + e.xLabel + ", " + e.yLabel + ")"
							}
						}
					}
				}), B._set("global", {
					datasets: {
						scatter: {
							showLine: !1
						}
					}
				});
				var Xe = {
					bar: Oe,
					bubble: Me,
					doughnut: Ne,
					horizontalBar: Re,
					line: ze,
					polarArea: Ge,
					pie: qe,
					radar: Ke,
					scatter: ze
				};

				function Je(e, t) {
					return e.native ? {
						x: e.x,
						y: e.y
					} : j.getRelativePosition(e, t)
				}

				function Ze(e, t) {
					var n, r, i, a, o, s, u = e._getSortedVisibleDatasetMetas();
					for (r = 0, a = u.length; r < a; ++r)
						for (i = 0, o = (n = u[r].data).length; i < o; ++i)(s = n[i])._view.skip || t(s)
				}

				function et(e, t) {
					var n = [];
					return Ze(e, (function(e) {
						e.inRange(t.x, t.y) && n.push(e)
					})), n
				}

				function tt(e, t, n, r) {
					var i = Number.POSITIVE_INFINITY,
						a = [];
					return Ze(e, (function(e) {
						if (!n || e.inRange(t.x, t.y)) {
							var o = e.getCenterPoint(),
								s = r(t, o);
							s < i ? (a = [e], i = s) : s === i && a.push(e)
						}
					})), a
				}

				function nt(e) {
					var t = -1 !== e.indexOf("x"),
						n = -1 !== e.indexOf("y");
					return function(e, r) {
						var i = t ? Math.abs(e.x - r.x) : 0,
							a = n ? Math.abs(e.y - r.y) : 0;
						return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
					}
				}

				function rt(e, t, n) {
					var r = Je(t, e);
					n.axis = n.axis || "x";
					var i = nt(n.axis),
						a = n.intersect ? et(e, r) : tt(e, r, !1, i),
						o = [];
					return a.length ? (e._getSortedVisibleDatasetMetas().forEach((function(e) {
						var t = e.data[a[0]._index];
						t && !t._view.skip && o.push(t)
					})), o) : []
				}
				var it = {
						modes: {
							single: function(e, t) {
								var n = Je(t, e),
									r = [];
								return Ze(e, (function(e) {
									if (e.inRange(n.x, n.y)) return r.push(e), r
								})), r.slice(0, 1)
							},
							label: rt,
							index: rt,
							dataset: function(e, t, n) {
								var r = Je(t, e);
								n.axis = n.axis || "xy";
								var i = nt(n.axis),
									a = n.intersect ? et(e, r) : tt(e, r, !1, i);
								return a.length > 0 && (a = e.getDatasetMeta(a[0]._datasetIndex).data), a
							},
							"x-axis": function(e, t) {
								return rt(e, t, {
									intersect: !1
								})
							},
							point: function(e, t) {
								return et(e, Je(t, e))
							},
							nearest: function(e, t, n) {
								var r = Je(t, e);
								n.axis = n.axis || "xy";
								var i = nt(n.axis);
								return tt(e, r, n.intersect, i)
							},
							x: function(e, t, n) {
								var r = Je(t, e),
									i = [],
									a = !1;
								return Ze(e, (function(e) {
									e.inXRange(r.x) && i.push(e), e.inRange(r.x, r.y) && (a = !0)
								})), n.intersect && !a && (i = []), i
							},
							y: function(e, t, n) {
								var r = Je(t, e),
									i = [],
									a = !1;
								return Ze(e, (function(e) {
									e.inYRange(r.y) && i.push(e), e.inRange(r.x, r.y) && (a = !0)
								})), n.intersect && !a && (i = []), i
							}
						}
					},
					at = j.extend;

				function ot(e, t) {
					return j.where(e, (function(e) {
						return e.pos === t
					}))
				}

				function st(e, t) {
					return e.sort((function(e, n) {
						var r = t ? n : e,
							i = t ? e : n;
						return r.weight === i.weight ? r.index - i.index : r.weight - i.weight
					}))
				}

				function ut(e, t, n, r) {
					return Math.max(e[n], t[n]) + Math.max(e[r], t[r])
				}

				function ct(e, t, n) {
					var r, i, a = n.box,
						o = e.maxPadding;
					if (n.size && (e[n.pos] -= n.size), n.size = n.horizontal ? a.height : a.width, e[n.pos] += n.size, a.getPadding) {
						var s = a.getPadding();
						o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
					}
					if (r = t.outerWidth - ut(o, e, "left", "right"), i = t.outerHeight - ut(o, e, "top", "bottom"), r !== e.w || i !== e.h) {
						e.w = r, e.h = i;
						var u = n.horizontal ? [r, e.w] : [i, e.h];
						return !(u[0] === u[1] || isNaN(u[0]) && isNaN(u[1]))
					}
				}

				function lt(e, t) {
					var n = t.maxPadding;
					return function(e) {
						var r = {
							left: 0,
							top: 0,
							right: 0,
							bottom: 0
						};
						return e.forEach((function(e) {
							r[e] = Math.max(t[e], n[e])
						})), r
					}(e ? ["left", "right"] : ["top", "bottom"])
				}

				function ft(e, t, n) {
					var r, i, a, o, s, u, c = [];
					for (r = 0, i = e.length; r < i; ++r)(o = (a = e[r]).box).update(a.width || t.w, a.height || t.h, lt(a.horizontal, t)), ct(t, n, a) && (u = !0, c.length && (s = !0)), o.fullWidth || c.push(a);
					return s && ft(c, t, n) || u
				}

				function dt(e, t, n) {
					var r, i, a, o, s = n.padding,
						u = t.x,
						c = t.y;
					for (r = 0, i = e.length; r < i; ++r) o = (a = e[r]).box, a.horizontal ? (o.left = o.fullWidth ? s.left : t.left, o.right = o.fullWidth ? n.outerWidth - s.right : t.left + t.w, o.top = c, o.bottom = c + o.height, o.width = o.right - o.left, c = o.bottom) : (o.left = u, o.right = u + o.width, o.top = t.top, o.bottom = t.top + t.h, o.height = o.bottom - o.top, u = o.right);
					t.x = u, t.y = c
				}
				B._set("global", {
					layout: {
						padding: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}
					}
				});
				var ht = {
						defaults: {},
						addBox: function(e, t) {
							e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
								return [{
									z: 0,
									draw: function() {
										t.draw.apply(t, arguments)
									}
								}]
							}, e.boxes.push(t)
						},
						removeBox: function(e, t) {
							var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
						},
						configure: function(e, t, n) {
							for (var r, i = ["fullWidth", "position", "weight"], a = i.length, o = 0; o < a; ++o) r = i[o], n.hasOwnProperty(r) && (t[r] = n[r])
						},
						update: function(e, t, n) {
							if (e) {
								var r = e.options.layout || {},
									i = j.options.toPadding(r.padding),
									a = t - i.width,
									o = n - i.height,
									s = function(e) {
										var t = function(e) {
												var t, n, r, i = [];
												for (t = 0, n = (e || []).length; t < n; ++t) r = e[t], i.push({
													index: t,
													box: r,
													pos: r.position,
													horizontal: r.isHorizontal(),
													weight: r.weight
												});
												return i
											}(e),
											n = st(ot(t, "left"), !0),
											r = st(ot(t, "right")),
											i = st(ot(t, "top"), !0),
											a = st(ot(t, "bottom"));
										return {
											leftAndTop: n.concat(i),
											rightAndBottom: r.concat(a),
											chartArea: ot(t, "chartArea"),
											vertical: n.concat(r),
											horizontal: i.concat(a)
										}
									}(e.boxes),
									u = s.vertical,
									c = s.horizontal,
									l = Object.freeze({
										outerWidth: t,
										outerHeight: n,
										padding: i,
										availableWidth: a,
										vBoxMaxWidth: a / 2 / u.length,
										hBoxMaxHeight: o / 2
									}),
									f = at({
										maxPadding: at({}, i),
										w: a,
										h: o,
										x: i.left,
										y: i.top
									}, i);
								(function(e, t) {
									var n, r, i;
									for (n = 0, r = e.length; n < r; ++n)(i = e[n]).width = i.horizontal ? i.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, i.height = i.horizontal && t.hBoxMaxHeight
								})(u.concat(c), l), ft(u, f, l), ft(c, f, l) && ft(u, f, l),
									function(e) {
										var t = e.maxPadding;

										function n(n) {
											var r = Math.max(t[n] - e[n], 0);
											return e[n] += r, r
										}
										e.y += n("top"), e.x += n("left"), n("right"), n("bottom")
									}(f), dt(s.leftAndTop, f, l), f.x += f.w, f.y += f.h, dt(s.rightAndBottom, f, l), e.chartArea = {
										left: f.left,
										top: f.top,
										right: f.left + f.w,
										bottom: f.top + f.h
									}, j.each(s.chartArea, (function(t) {
										var n = t.box;
										at(n, e.chartArea), n.update(f.w, f.h)
									}))
							}
						}
					},
					pt = function(e) {
						return e && e.default || e
					}(Object.freeze({
						__proto__: null,
						default: "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n"
					})),
					_t = "$chartjs",
					mt = "chartjs-",
					bt = mt + "size-monitor",
					gt = mt + "render-monitor",
					vt = ["animationstart", "webkitAnimationStart"],
					yt = {
						touchstart: "mousedown",
						touchmove: "mousemove",
						touchend: "mouseup",
						pointerenter: "mouseenter",
						pointerdown: "mousedown",
						pointermove: "mousemove",
						pointerup: "mouseup",
						pointerleave: "mouseout",
						pointerout: "mouseout"
					};

				function At(e, t) {
					var n = j.getStyle(e, t),
						r = n && n.match(/^(\d+)(\.\d+)?px$/);
					return r ? Number(r[1]) : void 0
				}
				var St = !! function() {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function() {
								e = !0
							}
						});
						window.addEventListener("e", null, t)
					} catch (e) {}
					return e
				}() && {
					passive: !0
				};

				function wt(e, t, n) {
					e.addEventListener(t, n, St)
				}

				function Et(e, t, n) {
					e.removeEventListener(t, n, St)
				}

				function Tt(e, t, n, r, i) {
					return {
						type: e,
						chart: t,
						native: i || null,
						x: void 0 !== n ? n : null,
						y: void 0 !== r ? r : null
					}
				}

				function Ct(e) {
					var t = document.createElement("div");
					return t.className = e || "", t
				}

				function $t(e, t, n) {
					var r = e[_t] || (e[_t] = {}),
						i = r.resizer = function(e) {
							var t = 1e6,
								n = Ct(bt),
								r = Ct(bt + "-expand"),
								i = Ct(bt + "-shrink");
							r.appendChild(Ct()), i.appendChild(Ct()), n.appendChild(r), n.appendChild(i), n._reset = function() {
								r.scrollLeft = t, r.scrollTop = t, i.scrollLeft = t, i.scrollTop = t
							};
							var a = function() {
								n._reset(), e()
							};
							return wt(r, "scroll", a.bind(r, "expand")), wt(i, "scroll", a.bind(i, "shrink")), n
						}(function(e, t) {
							var n = !1,
								r = [];
							return function() {
								r = Array.prototype.slice.call(arguments), t = t || this, n || (n = !0, j.requestAnimFrame.call(window, (function() {
									n = !1, e.apply(t, r)
								})))
							}
						}((function() {
							if (r.resizer) {
								var i = n.options.maintainAspectRatio && e.parentNode,
									a = i ? i.clientWidth : 0;
								t(Tt("resize", n)), i && i.clientWidth < a && n.canvas && t(Tt("resize", n))
							}
						})));
					! function(e, t) {
						var n = e[_t] || (e[_t] = {}),
							r = n.renderProxy = function(e) {
								"chartjs-render-animation" === e.animationName && t()
							};
						j.each(vt, (function(t) {
							wt(e, t, r)
						})), n.reflow = !!e.offsetParent, e.classList.add(gt)
					}(e, (function() {
						if (r.resizer) {
							var t = e.parentNode;
							t && t !== i.parentNode && t.insertBefore(i, t.firstChild), i._reset()
						}
					}))
				}

				function kt(e) {
					var t = e[_t] || {},
						n = t.resizer;
					delete t.resizer,
						function(e) {
							var t = e[_t] || {},
								n = t.renderProxy;
							n && (j.each(vt, (function(t) {
								Et(e, t, n)
							})), delete t.renderProxy), e.classList.remove(gt)
						}(e), n && n.parentNode && n.parentNode.removeChild(n)
				}
				var Ot = {
					disableCSSInjection: !1,
					_enabled: "undefined" != typeof window && "undefined" != typeof document,
					_ensureLoaded: function(e) {
						if (!this.disableCSSInjection) {
							var t = e.getRootNode ? e.getRootNode() : document;
							! function(e, t) {
								var n = e[_t] || (e[_t] = {});
								if (!n.containsStyles) {
									n.containsStyles = !0, t = "/* Chart.js */\n" + t;
									var r = document.createElement("style");
									r.setAttribute("type", "text/css"), r.appendChild(document.createTextNode(t)), e.appendChild(r)
								}
							}(t.host ? t : document.head, pt)
						}
					},
					acquireContext: function(e, t) {
						"string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
						var n = e && e.getContext && e.getContext("2d");
						return n && n.canvas === e ? (this._ensureLoaded(e), function(e, t) {
							var n = e.style,
								r = e.getAttribute("height"),
								i = e.getAttribute("width");
							if (e[_t] = {
									initial: {
										height: r,
										width: i,
										style: {
											display: n.display,
											height: n.height,
											width: n.width
										}
									}
								}, n.display = n.display || "block", null === i || "" === i) {
								var a = At(e, "width");
								void 0 !== a && (e.width = a)
							}
							if (null === r || "" === r)
								if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
								else {
									var o = At(e, "height");
									void 0 !== a && (e.height = o)
								}
						}(e, t), n) : null
					},
					releaseContext: function(e) {
						var t = e.canvas;
						if (t[_t]) {
							var n = t[_t].initial;
							["height", "width"].forEach((function(e) {
								var r = n[e];
								j.isNullOrUndef(r) ? t.removeAttribute(e) : t.setAttribute(e, r)
							})), j.each(n.style || {}, (function(e, n) {
								t.style[n] = e
							})), t.width = t.width, delete t[_t]
						}
					},
					addEventListener: function(e, t, n) {
						var r = e.canvas;
						if ("resize" !== t) {
							var i = n[_t] || (n[_t] = {});
							wt(r, t, (i.proxies || (i.proxies = {}))[e.id + "_" + t] = function(t) {
								n(function(e, t) {
									var n = yt[e.type] || e.type,
										r = j.getRelativePosition(e, t);
									return Tt(n, t, r.x, r.y, e)
								}(t, e))
							})
						} else $t(r, n, e)
					},
					removeEventListener: function(e, t, n) {
						var r = e.canvas;
						if ("resize" !== t) {
							var i = ((n[_t] || {}).proxies || {})[e.id + "_" + t];
							i && Et(r, t, i)
						} else kt(r)
					}
				};
				j.addEvent = wt, j.removeEvent = Et;
				var xt = Ot._enabled ? Ot : {
						acquireContext: function(e) {
							return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
						}
					},
					Pt = j.extend({
						initialize: function() {},
						acquireContext: function() {},
						releaseContext: function() {},
						addEventListener: function() {},
						removeEventListener: function() {}
					}, xt);
				B._set("global", {
					plugins: {}
				});
				var Mt = {
						_plugins: [],
						_cacheId: 0,
						register: function(e) {
							var t = this._plugins;
							[].concat(e).forEach((function(e) {
								-1 === t.indexOf(e) && t.push(e)
							})), this._cacheId++
						},
						unregister: function(e) {
							var t = this._plugins;
							[].concat(e).forEach((function(e) {
								var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
							})), this._cacheId++
						},
						clear: function() {
							this._plugins = [], this._cacheId++
						},
						count: function() {
							return this._plugins.length
						},
						getAll: function() {
							return this._plugins
						},
						notify: function(e, t, n) {
							var r, i, a, o, s, u = this.descriptors(e),
								c = u.length;
							for (r = 0; r < c; ++r)
								if ("function" == typeof(s = (a = (i = u[r]).plugin)[t]) && ((o = [e].concat(n || [])).push(i.options), !1 === s.apply(a, o))) return !1;
							return !0
						},
						descriptors: function(e) {
							var t = e.$plugins || (e.$plugins = {});
							if (t.id === this._cacheId) return t.descriptors;
							var n = [],
								r = [],
								i = e && e.config || {},
								a = i.options && i.options.plugins || {};
							return this._plugins.concat(i.plugins || []).forEach((function(e) {
								if (-1 === n.indexOf(e)) {
									var t = e.id,
										i = a[t];
									!1 !== i && (!0 === i && (i = j.clone(B.global.plugins[t])), n.push(e), r.push({
										plugin: e,
										options: i || {}
									}))
								}
							})), t.descriptors = r, t.id = this._cacheId, r
						},
						_invalidate: function(e) {
							delete e.$plugins
						}
					},
					It = {
						constructors: {},
						defaults: {},
						registerScaleType: function(e, t, n) {
							this.constructors[e] = t, this.defaults[e] = j.clone(n)
						},
						getScaleConstructor: function(e) {
							return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
						},
						getScaleDefaults: function(e) {
							return this.defaults.hasOwnProperty(e) ? j.merge(Object.create(null), [B.scale, this.defaults[e]]) : {}
						},
						updateScaleDefaults: function(e, t) {
							var n = this;
							n.defaults.hasOwnProperty(e) && (n.defaults[e] = j.extend(n.defaults[e], t))
						},
						addScalesToLayout: function(e) {
							j.each(e.scales, (function(t) {
								t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, ht.addBox(e, t)
							}))
						}
					},
					Lt = j.valueOrDefault,
					Dt = j.rtl.getRtlAdapter;
				B._set("global", {
					tooltips: {
						enabled: !0,
						custom: null,
						mode: "nearest",
						position: "average",
						intersect: !0,
						backgroundColor: "rgba(0,0,0,0.8)",
						titleFontStyle: "bold",
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: "#fff",
						titleAlign: "left",
						bodySpacing: 2,
						bodyFontColor: "#fff",
						bodyAlign: "left",
						footerFontStyle: "bold",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: "#fff",
						footerAlign: "left",
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						callbacks: {
							beforeTitle: j.noop,
							title: function(e, t) {
								var n = "",
									r = t.labels,
									i = r ? r.length : 0;
								if (e.length > 0) {
									var a = e[0];
									a.label ? n = a.label : a.xLabel ? n = a.xLabel : i > 0 && a.index < i && (n = r[a.index])
								}
								return n
							},
							afterTitle: j.noop,
							beforeBody: j.noop,
							beforeLabel: j.noop,
							label: function(e, t) {
								var n = t.datasets[e.datasetIndex].label || "";
								return n && (n += ": "), j.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n
							},
							labelColor: function(e, t) {
								var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
								return {
									borderColor: n.borderColor,
									backgroundColor: n.backgroundColor
								}
							},
							labelTextColor: function() {
								return this._options.bodyFontColor
							},
							afterLabel: j.noop,
							afterBody: j.noop,
							beforeFooter: j.noop,
							footer: j.noop,
							afterFooter: j.noop
						}
					}
				});
				var Bt = {
					average: function(e) {
						if (!e.length) return !1;
						var t, n, r = 0,
							i = 0,
							a = 0;
						for (t = 0, n = e.length; t < n; ++t) {
							var o = e[t];
							if (o && o.hasValue()) {
								var s = o.tooltipPosition();
								r += s.x, i += s.y, ++a
							}
						}
						return {
							x: r / a,
							y: i / a
						}
					},
					nearest: function(e, t) {
						var n, r, i, a = t.x,
							o = t.y,
							s = Number.POSITIVE_INFINITY;
						for (n = 0, r = e.length; n < r; ++n) {
							var u = e[n];
							if (u && u.hasValue()) {
								var c = u.getCenterPoint(),
									l = j.distanceBetweenPoints(t, c);
								l < s && (s = l, i = u)
							}
						}
						if (i) {
							var f = i.tooltipPosition();
							a = f.x, o = f.y
						}
						return {
							x: a,
							y: o
						}
					}
				};

				function Nt(e, t) {
					return t && (j.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
				}

				function Rt(e) {
					return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
				}

				function Ft(e) {
					var t = e._xScale,
						n = e._yScale || e._scale,
						r = e._index,
						i = e._datasetIndex,
						a = e._chart.getDatasetMeta(i).controller,
						o = a._getIndexScale(),
						s = a._getValueScale();
					return {
						xLabel: t ? t.getLabelForIndex(r, i) : "",
						yLabel: n ? n.getLabelForIndex(r, i) : "",
						label: o ? "" + o.getLabelForIndex(r, i) : "",
						value: s ? "" + s.getLabelForIndex(r, i) : "",
						index: r,
						datasetIndex: i,
						x: e._model.x,
						y: e._model.y
					}
				}

				function Ut(e) {
					var t = B.global;
					return {
						xPadding: e.xPadding,
						yPadding: e.yPadding,
						xAlign: e.xAlign,
						yAlign: e.yAlign,
						rtl: e.rtl,
						textDirection: e.textDirection,
						bodyFontColor: e.bodyFontColor,
						_bodyFontFamily: Lt(e.bodyFontFamily, t.defaultFontFamily),
						_bodyFontStyle: Lt(e.bodyFontStyle, t.defaultFontStyle),
						_bodyAlign: e.bodyAlign,
						bodyFontSize: Lt(e.bodyFontSize, t.defaultFontSize),
						bodySpacing: e.bodySpacing,
						titleFontColor: e.titleFontColor,
						_titleFontFamily: Lt(e.titleFontFamily, t.defaultFontFamily),
						_titleFontStyle: Lt(e.titleFontStyle, t.defaultFontStyle),
						titleFontSize: Lt(e.titleFontSize, t.defaultFontSize),
						_titleAlign: e.titleAlign,
						titleSpacing: e.titleSpacing,
						titleMarginBottom: e.titleMarginBottom,
						footerFontColor: e.footerFontColor,
						_footerFontFamily: Lt(e.footerFontFamily, t.defaultFontFamily),
						_footerFontStyle: Lt(e.footerFontStyle, t.defaultFontStyle),
						footerFontSize: Lt(e.footerFontSize, t.defaultFontSize),
						_footerAlign: e.footerAlign,
						footerSpacing: e.footerSpacing,
						footerMarginTop: e.footerMarginTop,
						caretSize: e.caretSize,
						cornerRadius: e.cornerRadius,
						backgroundColor: e.backgroundColor,
						opacity: 0,
						legendColorBackground: e.multiKeyBackground,
						displayColors: e.displayColors,
						borderColor: e.borderColor,
						borderWidth: e.borderWidth
					}
				}

				function jt(e, t) {
					return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
				}

				function Ht(e) {
					return Nt([], Rt(e))
				}
				var Yt = q.extend({
						initialize: function() {
							this._model = Ut(this._options), this._lastActive = []
						},
						getTitle: function() {
							var e = this,
								t = e._options,
								n = t.callbacks,
								r = n.beforeTitle.apply(e, arguments),
								i = n.title.apply(e, arguments),
								a = n.afterTitle.apply(e, arguments),
								o = [];
							return o = Nt(o, Rt(r)), o = Nt(o, Rt(i)), o = Nt(o, Rt(a))
						},
						getBeforeBody: function() {
							return Ht(this._options.callbacks.beforeBody.apply(this, arguments))
						},
						getBody: function(e, t) {
							var n = this,
								r = n._options.callbacks,
								i = [];
							return j.each(e, (function(e) {
								var a = {
									before: [],
									lines: [],
									after: []
								};
								Nt(a.before, Rt(r.beforeLabel.call(n, e, t))), Nt(a.lines, r.label.call(n, e, t)), Nt(a.after, Rt(r.afterLabel.call(n, e, t))), i.push(a)
							})), i
						},
						getAfterBody: function() {
							return Ht(this._options.callbacks.afterBody.apply(this, arguments))
						},
						getFooter: function() {
							var e = this,
								t = e._options.callbacks,
								n = t.beforeFooter.apply(e, arguments),
								r = t.footer.apply(e, arguments),
								i = t.afterFooter.apply(e, arguments),
								a = [];
							return a = Nt(a, Rt(n)), a = Nt(a, Rt(r)), a = Nt(a, Rt(i))
						},
						update: function(e) {
							var t, n, r = this,
								i = r._options,
								a = r._model,
								o = r._model = Ut(i),
								s = r._active,
								u = r._data,
								c = {
									xAlign: a.xAlign,
									yAlign: a.yAlign
								},
								l = {
									x: a.x,
									y: a.y
								},
								f = {
									width: a.width,
									height: a.height
								},
								d = {
									x: a.caretX,
									y: a.caretY
								};
							if (s.length) {
								o.opacity = 1;
								var h = [],
									p = [];
								d = Bt[i.position].call(r, s, r._eventPosition);
								var _ = [];
								for (t = 0, n = s.length; t < n; ++t) _.push(Ft(s[t]));
								i.filter && (_ = _.filter((function(e) {
									return i.filter(e, u)
								}))), i.itemSort && (_ = _.sort((function(e, t) {
									return i.itemSort(e, t, u)
								}))), j.each(_, (function(e) {
									h.push(i.callbacks.labelColor.call(r, e, r._chart)), p.push(i.callbacks.labelTextColor.call(r, e, r._chart))
								})), o.title = r.getTitle(_, u), o.beforeBody = r.getBeforeBody(_, u), o.body = r.getBody(_, u), o.afterBody = r.getAfterBody(_, u), o.footer = r.getFooter(_, u), o.x = d.x, o.y = d.y, o.caretPadding = i.caretPadding, o.labelColors = h, o.labelTextColors = p, o.dataPoints = _, c = function(e, t) {
									var n, r, i, a, o, s = e._model,
										u = e._chart,
										c = e._chart.chartArea,
										l = "center",
										f = "center";
									s.y < t.height ? f = "top" : s.y > u.height - t.height && (f = "bottom");
									var d = (c.left + c.right) / 2,
										h = (c.top + c.bottom) / 2;
									"center" === f ? (n = function(e) {
										return e <= d
									}, r = function(e) {
										return e > d
									}) : (n = function(e) {
										return e <= t.width / 2
									}, r = function(e) {
										return e >= u.width - t.width / 2
									}), i = function(e) {
										return e + t.width + s.caretSize + s.caretPadding > u.width
									}, a = function(e) {
										return e - t.width - s.caretSize - s.caretPadding < 0
									}, o = function(e) {
										return e <= h ? "top" : "bottom"
									}, n(s.x) ? (l = "left", i(s.x) && (l = "center", f = o(s.y))) : r(s.x) && (l = "right", a(s.x) && (l = "center", f = o(s.y)));
									var p = e._options;
									return {
										xAlign: p.xAlign ? p.xAlign : l,
										yAlign: p.yAlign ? p.yAlign : f
									}
								}(this, f = function(e, t) {
									var n = e._chart.ctx,
										r = 2 * t.yPadding,
										i = 0,
										a = t.body,
										o = a.reduce((function(e, t) {
											return e + t.before.length + t.lines.length + t.after.length
										}), 0);
									o += t.beforeBody.length + t.afterBody.length;
									var s = t.title.length,
										u = t.footer.length,
										c = t.titleFontSize,
										l = t.bodyFontSize,
										f = t.footerFontSize;
									r += s * c, r += s ? (s - 1) * t.titleSpacing : 0, r += s ? t.titleMarginBottom : 0, r += o * l, r += o ? (o - 1) * t.bodySpacing : 0, r += u ? t.footerMarginTop : 0, r += u * f, r += u ? (u - 1) * t.footerSpacing : 0;
									var d = 0,
										h = function(e) {
											i = Math.max(i, n.measureText(e).width + d)
										};
									return n.font = j.fontString(c, t._titleFontStyle, t._titleFontFamily), j.each(t.title, h), n.font = j.fontString(l, t._bodyFontStyle, t._bodyFontFamily), j.each(t.beforeBody.concat(t.afterBody), h), d = t.displayColors ? l + 2 : 0, j.each(a, (function(e) {
										j.each(e.before, h), j.each(e.lines, h), j.each(e.after, h)
									})), d = 0, n.font = j.fontString(f, t._footerFontStyle, t._footerFontFamily), j.each(t.footer, h), {
										width: i += 2 * t.xPadding,
										height: r
									}
								}(this, o)), l = function(e, t, n, r) {
									var i = e.x,
										a = e.y,
										o = e.caretSize,
										s = e.caretPadding,
										u = e.cornerRadius,
										c = n.xAlign,
										l = n.yAlign,
										f = o + s,
										d = u + s;
									return "right" === c ? i -= t.width : "center" === c && ((i -= t.width / 2) + t.width > r.width && (i = r.width - t.width), i < 0 && (i = 0)), "top" === l ? a += f : a -= "bottom" === l ? t.height + f : t.height / 2, "center" === l ? "left" === c ? i += f : "right" === c && (i -= f) : "left" === c ? i -= d : "right" === c && (i += d), {
										x: i,
										y: a
									}
								}(o, f, c, r._chart)
							} else o.opacity = 0;
							return o.xAlign = c.xAlign, o.yAlign = c.yAlign, o.x = l.x, o.y = l.y, o.width = f.width, o.height = f.height, o.caretX = d.x, o.caretY = d.y, r._model = o, e && i.custom && i.custom.call(r, o), r
						},
						drawCaret: function(e, t) {
							var n = this._chart.ctx,
								r = this._view,
								i = this.getCaretPosition(e, t, r);
							n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
						},
						getCaretPosition: function(e, t, n) {
							var r, i, a, o, s, u, c = n.caretSize,
								l = n.cornerRadius,
								f = n.xAlign,
								d = n.yAlign,
								h = e.x,
								p = e.y,
								_ = t.width,
								m = t.height;
							if ("center" === d) s = p + m / 2, "left" === f ? (i = (r = h) - c, a = r, o = s + c, u = s - c) : (i = (r = h + _) + c, a = r, o = s - c, u = s + c);
							else if ("left" === f ? (r = (i = h + l + c) - c, a = i + c) : "right" === f ? (r = (i = h + _ - l - c) - c, a = i + c) : (r = (i = n.caretX) - c, a = i + c), "top" === d) s = (o = p) - c, u = o;
							else {
								s = (o = p + m) + c, u = o;
								var b = a;
								a = r, r = b
							}
							return {
								x1: r,
								x2: i,
								x3: a,
								y1: o,
								y2: s,
								y3: u
							}
						},
						drawTitle: function(e, t, n) {
							var r, i, a, o = t.title,
								s = o.length;
							if (s) {
								var u = Dt(t.rtl, t.x, t.width);
								for (e.x = jt(t, t._titleAlign), n.textAlign = u.textAlign(t._titleAlign), n.textBaseline = "middle", r = t.titleFontSize, i = t.titleSpacing, n.fillStyle = t.titleFontColor, n.font = j.fontString(r, t._titleFontStyle, t._titleFontFamily), a = 0; a < s; ++a) n.fillText(o[a], u.x(e.x), e.y + r / 2), e.y += r + i, a + 1 === s && (e.y += t.titleMarginBottom - i)
							}
						},
						drawBody: function(e, t, n) {
							var r, i, a, o, s, u, c, l, f = t.bodyFontSize,
								d = t.bodySpacing,
								h = t._bodyAlign,
								p = t.body,
								_ = t.displayColors,
								m = 0,
								b = _ ? jt(t, "left") : 0,
								g = Dt(t.rtl, t.x, t.width),
								v = function(t) {
									n.fillText(t, g.x(e.x + m), e.y + f / 2), e.y += f + d
								},
								y = g.textAlign(h);
							for (n.textAlign = h, n.textBaseline = "middle", n.font = j.fontString(f, t._bodyFontStyle, t._bodyFontFamily), e.x = jt(t, y), n.fillStyle = t.bodyFontColor, j.each(t.beforeBody, v), m = _ && "right" !== y ? "center" === h ? f / 2 + 1 : f + 2 : 0, s = 0, c = p.length; s < c; ++s) {
								for (r = p[s], i = t.labelTextColors[s], a = t.labelColors[s], n.fillStyle = i, j.each(r.before, v), u = 0, l = (o = r.lines).length; u < l; ++u) {
									if (_) {
										var A = g.x(b);
										n.fillStyle = t.legendColorBackground, n.fillRect(g.leftForLtr(A, f), e.y, f, f), n.lineWidth = 1, n.strokeStyle = a.borderColor, n.strokeRect(g.leftForLtr(A, f), e.y, f, f), n.fillStyle = a.backgroundColor, n.fillRect(g.leftForLtr(g.xPlus(A, 1), f - 2), e.y + 1, f - 2, f - 2), n.fillStyle = i
									}
									v(o[u])
								}
								j.each(r.after, v)
							}
							m = 0, j.each(t.afterBody, v), e.y -= d
						},
						drawFooter: function(e, t, n) {
							var r, i, a = t.footer,
								o = a.length;
							if (o) {
								var s = Dt(t.rtl, t.x, t.width);
								for (e.x = jt(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = s.textAlign(t._footerAlign), n.textBaseline = "middle", r = t.footerFontSize, n.fillStyle = t.footerFontColor, n.font = j.fontString(r, t._footerFontStyle, t._footerFontFamily), i = 0; i < o; ++i) n.fillText(a[i], s.x(e.x), e.y + r / 2), e.y += r + t.footerSpacing
							}
						},
						drawBackground: function(e, t, n, r) {
							n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth;
							var i = t.xAlign,
								a = t.yAlign,
								o = e.x,
								s = e.y,
								u = r.width,
								c = r.height,
								l = t.cornerRadius;
							n.beginPath(), n.moveTo(o + l, s), "top" === a && this.drawCaret(e, r), n.lineTo(o + u - l, s), n.quadraticCurveTo(o + u, s, o + u, s + l), "center" === a && "right" === i && this.drawCaret(e, r), n.lineTo(o + u, s + c - l), n.quadraticCurveTo(o + u, s + c, o + u - l, s + c), "bottom" === a && this.drawCaret(e, r), n.lineTo(o + l, s + c), n.quadraticCurveTo(o, s + c, o, s + c - l), "center" === a && "left" === i && this.drawCaret(e, r), n.lineTo(o, s + l), n.quadraticCurveTo(o, s, o + l, s), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
						},
						draw: function() {
							var e = this._chart.ctx,
								t = this._view;
							if (0 !== t.opacity) {
								var n = {
										width: t.width,
										height: t.height
									},
									r = {
										x: t.x,
										y: t.y
									},
									i = Math.abs(t.opacity < .001) ? 0 : t.opacity,
									a = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
								this._options.enabled && a && (e.save(), e.globalAlpha = i, this.drawBackground(r, t, e, n), r.y += t.yPadding, j.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), j.rtl.restoreTextDirection(e, t.textDirection), e.restore())
							}
						},
						handleEvent: function(e) {
							var t, n = this,
								r = n._options;
							return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(e, r.mode, r), r.reverse && n._active.reverse()), (t = !j.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (r.enabled || r.custom) && (n._eventPosition = {
								x: e.x,
								y: e.y
							}, n.update(!0), n.pivot())), t
						}
					}),
					Vt = Bt,
					zt = Yt;
				zt.positioners = Vt;
				var Qt = j.valueOrDefault;

				function Gt() {
					return j.merge(Object.create(null), [].slice.call(arguments), {
						merger: function(e, t, n, r) {
							if ("xAxes" === e || "yAxes" === e) {
								var i, a, o, s = n[e].length;
								for (t[e] || (t[e] = []), i = 0; i < s; ++i) o = n[e][i], a = Qt(o.type, "xAxes" === e ? "category" : "linear"), i >= t[e].length && t[e].push({}), !t[e][i].type || o.type && o.type !== t[e][i].type ? j.merge(t[e][i], [It.getScaleDefaults(a), o]) : j.merge(t[e][i], o)
							} else j._merger(e, t, n, r)
						}
					})
				}

				function qt() {
					return j.merge(Object.create(null), [].slice.call(arguments), {
						merger: function(e, t, n, r) {
							var i = t[e] || Object.create(null),
								a = n[e];
							"scales" === e ? t[e] = Gt(i, a) : "scale" === e ? t[e] = j.merge(i, [It.getScaleDefaults(a.type), a]) : j._merger(e, t, n, r)
						}
					})
				}

				function Wt(e) {
					var t = e.options;
					j.each(e.scales, (function(t) {
						ht.removeBox(e, t)
					})), t = qt(B.global, B[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
				}

				function Kt(e, t, n) {
					var r, i = function(e) {
						return e.id === r
					};
					do {
						r = t + n++
					} while (j.findIndex(e, i) >= 0);
					return r
				}

				function Xt(e) {
					return "top" === e || "bottom" === e
				}

				function Jt(e, t) {
					return function(n, r) {
						return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e]
					}
				}
				B._set("global", {
					elements: {},
					events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
					hover: {
						onHover: null,
						mode: "nearest",
						intersect: !0,
						animationDuration: 400
					},
					onClick: null,
					maintainAspectRatio: !0,
					responsive: !0,
					responsiveAnimationDuration: 0
				});
				var Zt = function(e, t) {
					return this.construct(e, t), this
				};
				j.extend(Zt.prototype, {
					construct: function(e, t) {
						var n = this;
						t = function(e) {
							var t = (e = e || Object.create(null)).data = e.data || {};
							return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = qt(B.global, B[e.type], e.options || {}), e
						}(t);
						var r = Pt.acquireContext(e, t),
							i = r && r.canvas,
							a = i && i.height,
							o = i && i.width;
						n.id = j.uid(), n.ctx = r, n.canvas = i, n.config = t, n.width = o, n.height = a, n.aspectRatio = a ? o / a : null, n.options = t.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Zt.instances[n.id] = n, Object.defineProperty(n, "data", {
							get: function() {
								return n.config.data
							},
							set: function(e) {
								n.config.data = e
							}
						}), r && i ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
					},
					initialize: function() {
						var e = this;
						return Mt.notify(e, "beforeInit"), j.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), Mt.notify(e, "afterInit"), e
					},
					clear: function() {
						return j.canvas.clear(this), this
					},
					stop: function() {
						return X.cancelAnimation(this), this
					},
					resize: function(e) {
						var t = this,
							n = t.options,
							r = t.canvas,
							i = n.maintainAspectRatio && t.aspectRatio || null,
							a = Math.max(0, Math.floor(j.getMaximumWidth(r))),
							o = Math.max(0, Math.floor(i ? a / i : j.getMaximumHeight(r)));
						if ((t.width !== a || t.height !== o) && (r.width = t.width = a, r.height = t.height = o, r.style.width = a + "px", r.style.height = o + "px", j.retinaScale(t, n.devicePixelRatio), !e)) {
							var s = {
								width: a,
								height: o
							};
							Mt.notify(t, "resize", [s]), n.onResize && n.onResize(t, s), t.stop(), t.update({
								duration: n.responsiveAnimationDuration
							})
						}
					},
					ensureScalesHaveIDs: function() {
						var e = this.options,
							t = e.scales || {},
							n = e.scale;
						j.each(t.xAxes, (function(e, n) {
							e.id || (e.id = Kt(t.xAxes, "x-axis-", n))
						})), j.each(t.yAxes, (function(e, n) {
							e.id || (e.id = Kt(t.yAxes, "y-axis-", n))
						})), n && (n.id = n.id || "scale")
					},
					buildOrUpdateScales: function() {
						var e = this,
							t = e.options,
							n = e.scales || {},
							r = [],
							i = Object.keys(n).reduce((function(e, t) {
								return e[t] = !1, e
							}), {});
						t.scales && (r = r.concat((t.scales.xAxes || []).map((function(e) {
							return {
								options: e,
								dtype: "category",
								dposition: "bottom"
							}
						})), (t.scales.yAxes || []).map((function(e) {
							return {
								options: e,
								dtype: "linear",
								dposition: "left"
							}
						})))), t.scale && r.push({
							options: t.scale,
							dtype: "radialLinear",
							isDefault: !0,
							dposition: "chartArea"
						}), j.each(r, (function(t) {
							var r = t.options,
								a = r.id,
								o = Qt(r.type, t.dtype);
							Xt(r.position) !== Xt(t.dposition) && (r.position = t.dposition), i[a] = !0;
							var s = null;
							if (a in n && n[a].type === o)(s = n[a]).options = r, s.ctx = e.ctx, s.chart = e;
							else {
								var u = It.getScaleConstructor(o);
								if (!u) return;
								s = new u({
									id: a,
									type: o,
									options: r,
									ctx: e.ctx,
									chart: e
								}), n[s.id] = s
							}
							s.mergeTicksOptions(), t.isDefault && (e.scale = s)
						})), j.each(i, (function(e, t) {
							e || delete n[t]
						})), e.scales = n, It.addScalesToLayout(this)
					},
					buildOrUpdateControllers: function() {
						var e, t, n = this,
							r = [],
							i = n.data.datasets;
						for (e = 0, t = i.length; e < t; e++) {
							var a = i[e],
								o = n.getDatasetMeta(e),
								s = a.type || n.config.type;
							if (o.type && o.type !== s && (n.destroyDatasetMeta(e), o = n.getDatasetMeta(e)), o.type = s, o.order = a.order || 0, o.index = e, o.controller) o.controller.updateIndex(e), o.controller.linkScales();
							else {
								var u = Xe[o.type];
								if (void 0 === u) throw new Error('"' + o.type + '" is not a chart type.');
								o.controller = new u(n, e), r.push(o.controller)
							}
						}
						return r
					},
					resetElements: function() {
						var e = this;
						j.each(e.data.datasets, (function(t, n) {
							e.getDatasetMeta(n).controller.reset()
						}), e)
					},
					reset: function() {
						this.resetElements(), this.tooltip.initialize()
					},
					update: function(e) {
						var t, n, r = this;
						if (e && "object" == typeof e || (e = {
								duration: e,
								lazy: arguments[1]
							}), Wt(r), Mt._invalidate(r), !1 !== Mt.notify(r, "beforeUpdate")) {
							r.tooltip._data = r.data;
							var i = r.buildOrUpdateControllers();
							for (t = 0, n = r.data.datasets.length; t < n; t++) r.getDatasetMeta(t).controller.buildOrUpdateElements();
							r.updateLayout(), r.options.animation && r.options.animation.duration && j.each(i, (function(e) {
								e.reset()
							})), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], Mt.notify(r, "afterUpdate"), r._layers.sort(Jt("z", "_idx")), r._bufferedRender ? r._bufferedRequest = {
								duration: e.duration,
								easing: e.easing,
								lazy: e.lazy
							} : r.render(e)
						}
					},
					updateLayout: function() {
						var e = this;
						!1 !== Mt.notify(e, "beforeLayout") && (ht.update(this, this.width, this.height), e._layers = [], j.each(e.boxes, (function(t) {
							t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers())
						}), e), e._layers.forEach((function(e, t) {
							e._idx = t
						})), Mt.notify(e, "afterScaleUpdate"), Mt.notify(e, "afterLayout"))
					},
					updateDatasets: function() {
						var e = this;
						if (!1 !== Mt.notify(e, "beforeDatasetsUpdate")) {
							for (var t = 0, n = e.data.datasets.length; t < n; ++t) e.updateDataset(t);
							Mt.notify(e, "afterDatasetsUpdate")
						}
					},
					updateDataset: function(e) {
						var t = this,
							n = t.getDatasetMeta(e),
							r = {
								meta: n,
								index: e
							};
						!1 !== Mt.notify(t, "beforeDatasetUpdate", [r]) && (n.controller._update(), Mt.notify(t, "afterDatasetUpdate", [r]))
					},
					render: function(e) {
						var t = this;
						e && "object" == typeof e || (e = {
							duration: e,
							lazy: arguments[1]
						});
						var n = t.options.animation,
							r = Qt(e.duration, n && n.duration),
							i = e.lazy;
						if (!1 !== Mt.notify(t, "beforeRender")) {
							var a = function(e) {
								Mt.notify(t, "afterRender"), j.callback(n && n.onComplete, [e], t)
							};
							if (n && r) {
								var o = new K({
									numSteps: r / 16.66,
									easing: e.easing || n.easing,
									render: function(e, t) {
										var n = j.easing.effects[t.easing],
											r = t.currentStep,
											i = r / t.numSteps;
										e.draw(n(i), i, r)
									},
									onAnimationProgress: n.onProgress,
									onAnimationComplete: a
								});
								X.addAnimation(t, o, r, i)
							} else t.draw(), a(new K({
								numSteps: 0,
								chart: t
							}));
							return t
						}
					},
					draw: function(e) {
						var t, n, r = this;
						if (r.clear(), j.isNullOrUndef(e) && (e = 1), r.transition(e), !(r.width <= 0 || r.height <= 0) && !1 !== Mt.notify(r, "beforeDraw", [e])) {
							for (n = r._layers, t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(r.chartArea);
							for (r.drawDatasets(e); t < n.length; ++t) n[t].draw(r.chartArea);
							r._drawTooltip(e), Mt.notify(r, "afterDraw", [e])
						}
					},
					transition: function(e) {
						for (var t = this, n = 0, r = (t.data.datasets || []).length; n < r; ++n) t.isDatasetVisible(n) && t.getDatasetMeta(n).controller.transition(e);
						t.tooltip.transition(e)
					},
					_getSortedDatasetMetas: function(e) {
						var t, n, r = this,
							i = [];
						for (t = 0, n = (r.data.datasets || []).length; t < n; ++t) e && !r.isDatasetVisible(t) || i.push(r.getDatasetMeta(t));
						return i.sort(Jt("order", "index")), i
					},
					_getSortedVisibleDatasetMetas: function() {
						return this._getSortedDatasetMetas(!0)
					},
					drawDatasets: function(e) {
						var t, n, r = this;
						if (!1 !== Mt.notify(r, "beforeDatasetsDraw", [e])) {
							for (n = (t = r._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) r.drawDataset(t[n], e);
							Mt.notify(r, "afterDatasetsDraw", [e])
						}
					},
					drawDataset: function(e, t) {
						var n = {
							meta: e,
							index: e.index,
							easingValue: t
						};
						!1 !== Mt.notify(this, "beforeDatasetDraw", [n]) && (e.controller.draw(t), Mt.notify(this, "afterDatasetDraw", [n]))
					},
					_drawTooltip: function(e) {
						var t = this,
							n = t.tooltip,
							r = {
								tooltip: n,
								easingValue: e
							};
						!1 !== Mt.notify(t, "beforeTooltipDraw", [r]) && (n.draw(), Mt.notify(t, "afterTooltipDraw", [r]))
					},
					getElementAtEvent: function(e) {
						return it.modes.single(this, e)
					},
					getElementsAtEvent: function(e) {
						return it.modes.label(this, e, {
							intersect: !0
						})
					},
					getElementsAtXAxis: function(e) {
						return it.modes["x-axis"](this, e, {
							intersect: !0
						})
					},
					getElementsAtEventForMode: function(e, t, n) {
						var r = it.modes[t];
						return "function" == typeof r ? r(this, e, n) : []
					},
					getDatasetAtEvent: function(e) {
						return it.modes.dataset(this, e, {
							intersect: !0
						})
					},
					getDatasetMeta: function(e) {
						var t = this,
							n = t.data.datasets[e];
						n._meta || (n._meta = {});
						var r = n._meta[t.id];
						return r || (r = n._meta[t.id] = {
							type: null,
							data: [],
							dataset: null,
							controller: null,
							hidden: null,
							xAxisID: null,
							yAxisID: null,
							order: n.order || 0,
							index: e
						}), r
					},
					getVisibleDatasetCount: function() {
						for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
						return e
					},
					isDatasetVisible: function(e) {
						var t = this.getDatasetMeta(e);
						return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
					},
					generateLegend: function() {
						return this.options.legendCallback(this)
					},
					destroyDatasetMeta: function(e) {
						var t = this.id,
							n = this.data.datasets[e],
							r = n._meta && n._meta[t];
						r && (r.controller.destroy(), delete n._meta[t])
					},
					destroy: function() {
						var e, t, n = this,
							r = n.canvas;
						for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
						r && (n.unbindEvents(), j.canvas.clear(n), Pt.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Mt.notify(n, "destroy"), delete Zt.instances[n.id]
					},
					toBase64Image: function() {
						return this.canvas.toDataURL.apply(this.canvas, arguments)
					},
					initToolTip: function() {
						var e = this;
						e.tooltip = new zt({
							_chart: e,
							_chartInstance: e,
							_data: e.data,
							_options: e.options.tooltips
						}, e)
					},
					bindEvents: function() {
						var e = this,
							t = e._listeners = {},
							n = function() {
								e.eventHandler.apply(e, arguments)
							};
						j.each(e.options.events, (function(r) {
							Pt.addEventListener(e, r, n), t[r] = n
						})), e.options.responsive && (n = function() {
							e.resize()
						}, Pt.addEventListener(e, "resize", n), t.resize = n)
					},
					unbindEvents: function() {
						var e = this,
							t = e._listeners;
						t && (delete e._listeners, j.each(t, (function(t, n) {
							Pt.removeEventListener(e, n, t)
						})))
					},
					updateHoverStyle: function(e, t, n) {
						var r, i, a, o = n ? "set" : "remove";
						for (i = 0, a = e.length; i < a; ++i)(r = e[i]) && this.getDatasetMeta(r._datasetIndex).controller[o + "HoverStyle"](r);
						"dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
					},
					eventHandler: function(e) {
						var t = this,
							n = t.tooltip;
						if (!1 !== Mt.notify(t, "beforeEvent", [e])) {
							t._bufferedRender = !0, t._bufferedRequest = null;
							var r = t.handleEvent(e);
							n && (r = n._start ? n.handleEvent(e) : r | n.handleEvent(e)), Mt.notify(t, "afterEvent", [e]);
							var i = t._bufferedRequest;
							return i ? t.render(i) : r && !t.animating && (t.stop(), t.render({
								duration: t.options.hover.animationDuration,
								lazy: !0
							})), t._bufferedRender = !1, t._bufferedRequest = null, t
						}
					},
					handleEvent: function(e) {
						var t, n = this,
							r = n.options || {},
							i = r.hover;
						return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, i.mode, i), j.callback(r.onHover || r.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || r.onClick && r.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, i.mode, !1), n.active.length && i.mode && n.updateHoverStyle(n.active, i.mode, !0), t = !j.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
					}
				}), Zt.instances = {};
				var en = Zt;

				function tn() {
					throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
				}

				function nn(e) {
					this.options = e || {}
				}
				Zt.Controller = Zt, Zt.types = {}, j.configMerge = qt, j.scaleMerge = Gt, j.extend(nn.prototype, {
					formats: tn,
					parse: tn,
					format: tn,
					add: tn,
					diff: tn,
					startOf: tn,
					endOf: tn,
					_create: function(e) {
						return e
					}
				}), nn.override = function(e) {
					j.extend(nn.prototype, e)
				};
				var rn = {
						_date: nn
					},
					an = {
						formatters: {
							values: function(e) {
								return j.isArray(e) ? e : "" + e
							},
							linear: function(e, t, n) {
								var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
								Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
								var i = j.log10(Math.abs(r)),
									a = "";
								if (0 !== e)
									if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
										var o = j.log10(Math.abs(e)),
											s = Math.floor(o) - Math.floor(i);
										s = Math.max(Math.min(s, 20), 0), a = e.toExponential(s)
									} else {
										var u = -1 * Math.floor(i);
										u = Math.max(Math.min(u, 20), 0), a = e.toFixed(u)
									}
								else a = "0";
								return a
							},
							logarithmic: function(e, t, n) {
								var r = e / Math.pow(10, Math.floor(j.log10(e)));
								return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
							}
						}
					},
					on = j.isArray,
					sn = j.isNullOrUndef,
					un = j.valueOrDefault,
					cn = j.valueAtIndexOrDefault;

				function ln(e, t, n) {
					var r, i = e.getTicks().length,
						a = Math.min(t, i - 1),
						o = e.getPixelForTick(a),
						s = e._startPixel,
						u = e._endPixel,
						c = 1e-6;
					if (!(n && (r = 1 === i ? Math.max(o - s, u - o) : 0 === t ? (e.getPixelForTick(1) - o) / 2 : (o - e.getPixelForTick(a - 1)) / 2, o += a < t ? r : -r, o < s - c || o > u + c))) return o
				}

				function fn(e, t, n, r) {
					var i, a, o, s, u, c, l, f, d, h, p, _, m, b = n.length,
						g = [],
						v = [],
						y = [],
						A = 0,
						S = 0;
					for (i = 0; i < b; ++i) {
						if (s = n[i].label, u = n[i].major ? t.major : t.minor, e.font = c = u.string, l = r[c] = r[c] || {
								data: {},
								gc: []
							}, f = u.lineHeight, d = h = 0, sn(s) || on(s)) {
							if (on(s))
								for (a = 0, o = s.length; a < o; ++a) p = s[a], sn(p) || on(p) || (d = j.measureText(e, l.data, l.gc, d, p), h += f)
						} else d = j.measureText(e, l.data, l.gc, d, s), h = f;
						g.push(d), v.push(h), y.push(f / 2), A = Math.max(d, A), S = Math.max(h, S)
					}

					function w(e) {
						return {
							width: g[e] || 0,
							height: v[e] || 0,
							offset: y[e] || 0
						}
					}
					return function(e, t) {
						j.each(e, (function(e) {
							var n, r = e.gc,
								i = r.length / 2;
							if (i > t) {
								for (n = 0; n < i; ++n) delete e.data[r[n]];
								r.splice(0, i)
							}
						}))
					}(r, b), _ = g.indexOf(A), m = v.indexOf(S), {
						first: w(0),
						last: w(b - 1),
						widest: w(_),
						highest: w(m)
					}
				}

				function dn(e) {
					return e.drawTicks ? e.tickMarkLength : 0
				}

				function hn(e) {
					var t, n;
					return e.display ? (t = j.options._parseFont(e), n = j.options.toPadding(e.padding), t.lineHeight + n.height) : 0
				}

				function pn(e, t) {
					return j.extend(j.options._parseFont({
						fontFamily: un(t.fontFamily, e.fontFamily),
						fontSize: un(t.fontSize, e.fontSize),
						fontStyle: un(t.fontStyle, e.fontStyle),
						lineHeight: un(t.lineHeight, e.lineHeight)
					}), {
						color: j.options.resolve([t.fontColor, e.fontColor, B.global.defaultFontColor])
					})
				}

				function _n(e) {
					var t = pn(e, e.minor);
					return {
						minor: t,
						major: e.major.enabled ? pn(e, e.major) : t
					}
				}

				function mn(e) {
					var t, n, r, i = [];
					for (n = 0, r = e.length; n < r; ++n) void 0 !== (t = e[n])._index && i.push(t);
					return i
				}

				function bn(e, t, n, r) {
					var i, a, o, s, u = un(n, 0),
						c = Math.min(un(r, e.length), e.length),
						l = 0;
					for (t = Math.ceil(t), r && (t = (i = r - n) / Math.floor(i / t)), s = u; s < 0;) l++, s = Math.round(u + l * t);
					for (a = Math.max(u, 0); a < c; a++) o = e[a], a === s ? (o._index = a, l++, s = Math.round(u + l * t)) : delete o.label
				}
				B._set("scale", {
					display: !0,
					position: "left",

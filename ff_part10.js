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
					offset: !1,
					gridLines: {
						display: !0,
						color: "rgba(0,0,0,0.1)",
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0,0,0,0.25)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0
					},
					scaleLabel: {
						display: !1,
						labelString: "",
						padding: {
							top: 4,
							bottom: 4
						}
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: an.formatters.values,
						minor: {},
						major: {}
					}
				});
				var gn = q.extend({
					zeroLineIndex: 0,
					getPadding: function() {
						var e = this;
						return {
							left: e.paddingLeft || 0,
							top: e.paddingTop || 0,
							right: e.paddingRight || 0,
							bottom: e.paddingBottom || 0
						}
					},
					getTicks: function() {
						return this._ticks
					},
					_getLabels: function() {
						var e = this.chart.data;
						return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
					},
					mergeTicksOptions: function() {},
					beforeUpdate: function() {
						j.callback(this.options.beforeUpdate, [this])
					},
					update: function(e, t, n) {
						var r, i, a, o, s, u = this,
							c = u.options.ticks,
							l = c.sampleSize;
						if (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = j.extend({
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, n), u._ticks = null, u.ticks = null, u._labelSizes = null, u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u._gridLineItems = null, u._labelItems = null, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), o = u.buildTicks() || [], (!(o = u.afterBuildTicks(o) || o) || !o.length) && u.ticks)
							for (o = [], r = 0, i = u.ticks.length; r < i; ++r) o.push({
								value: u.ticks[r],
								major: !1
							});
						return u._ticks = o, s = l < o.length, a = u._convertTicksToLabels(s ? function(e, t) {
							for (var n = [], r = e.length / t, i = 0, a = e.length; i < a; i += r) n.push(e[Math.floor(i)]);
							return n
						}(o, l) : o), u._configure(), u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u._ticksToDraw = c.display && (c.autoSkip || "auto" === c.source) ? u._autoSkip(o) : o, s && (a = u._convertTicksToLabels(u._ticksToDraw)), u.ticks = a, u.afterUpdate(), u.minSize
					},
					_configure: function() {
						var e, t, n = this,
							r = n.options.ticks.reverse;
						n.isHorizontal() ? (e = n.left, t = n.right) : (e = n.top, t = n.bottom, r = !r), n._startPixel = e, n._endPixel = t, n._reversePixels = r, n._length = t - e
					},
					afterUpdate: function() {
						j.callback(this.options.afterUpdate, [this])
					},
					beforeSetDimensions: function() {
						j.callback(this.options.beforeSetDimensions, [this])
					},
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
					},
					afterSetDimensions: function() {
						j.callback(this.options.afterSetDimensions, [this])
					},
					beforeDataLimits: function() {
						j.callback(this.options.beforeDataLimits, [this])
					},
					determineDataLimits: j.noop,
					afterDataLimits: function() {
						j.callback(this.options.afterDataLimits, [this])
					},
					beforeBuildTicks: function() {
						j.callback(this.options.beforeBuildTicks, [this])
					},
					buildTicks: j.noop,
					afterBuildTicks: function(e) {
						var t = this;
						return on(e) && e.length ? j.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = j.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e)
					},
					beforeTickToLabelConversion: function() {
						j.callback(this.options.beforeTickToLabelConversion, [this])
					},
					convertTicksToLabels: function() {
						var e = this,
							t = e.options.ticks;
						e.ticks = e.ticks.map(t.userCallback || t.callback, this)
					},
					afterTickToLabelConversion: function() {
						j.callback(this.options.afterTickToLabelConversion, [this])
					},
					beforeCalculateTickRotation: function() {
						j.callback(this.options.beforeCalculateTickRotation, [this])
					},
					calculateTickRotation: function() {
						var e, t, n, r, i, a, o, s = this,
							u = s.options,
							c = u.ticks,
							l = s.getTicks().length,
							f = c.minRotation || 0,
							d = c.maxRotation,
							h = f;
						!s._isVisible() || !c.display || f >= d || l <= 1 || !s.isHorizontal() ? s.labelRotation = f : (t = (e = s._getLabelSizes()).widest.width, n = e.highest.height - e.highest.offset, r = Math.min(s.maxWidth, s.chart.width - t), t + 6 > (i = u.offset ? s.maxWidth / l : r / (l - 1)) && (i = r / (l - (u.offset ? .5 : 1)), a = s.maxHeight - dn(u.gridLines) - c.padding - hn(u.scaleLabel), o = Math.sqrt(t * t + n * n), h = j.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / i, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))), h = Math.max(f, Math.min(d, h))), s.labelRotation = h)
					},
					afterCalculateTickRotation: function() {
						j.callback(this.options.afterCalculateTickRotation, [this])
					},
					beforeFit: function() {
						j.callback(this.options.beforeFit, [this])
					},
					fit: function() {
						var e = this,
							t = e.minSize = {
								width: 0,
								height: 0
							},
							n = e.chart,
							r = e.options,
							i = r.ticks,
							a = r.scaleLabel,
							o = r.gridLines,
							s = e._isVisible(),
							u = "bottom" === r.position,
							c = e.isHorizontal();
						if (c ? t.width = e.maxWidth : s && (t.width = dn(o) + hn(a)), c ? s && (t.height = dn(o) + hn(a)) : t.height = e.maxHeight, i.display && s) {
							var l = _n(i),
								f = e._getLabelSizes(),
								d = f.first,
								h = f.last,
								p = f.widest,
								_ = f.highest,
								m = .4 * l.minor.lineHeight,
								b = i.padding;
							if (c) {
								var g = 0 !== e.labelRotation,
									v = j.toRadians(e.labelRotation),
									y = Math.cos(v),
									A = Math.sin(v),
									S = A * p.width + y * (_.height - (g ? _.offset : 0)) + (g ? 0 : m);
								t.height = Math.min(e.maxHeight, t.height + S + b);
								var w, E, T = e.getPixelForTick(0) - e.left,
									C = e.right - e.getPixelForTick(e.getTicks().length - 1);
								g ? (w = u ? y * d.width + A * d.offset : A * (d.height - d.offset), E = u ? A * (h.height - h.offset) : y * h.width + A * h.offset) : (w = d.width / 2, E = h.width / 2), e.paddingLeft = Math.max((w - T) * e.width / (e.width - T), 0) + 3, e.paddingRight = Math.max((E - C) * e.width / (e.width - C), 0) + 3
							} else {
								var $ = i.mirror ? 0 : p.width + b + m;
								t.width = Math.min(e.maxWidth, t.width + $), e.paddingTop = d.height / 2, e.paddingBottom = h.height / 2
							}
						}
						e.handleMargins(), c ? (e.width = e._length = n.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = n.height - e.margins.top - e.margins.bottom)
					},
					handleMargins: function() {
						var e = this;
						e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
					},
					afterFit: function() {
						j.callback(this.options.afterFit, [this])
					},
					isHorizontal: function() {
						var e = this.options.position;
						return "top" === e || "bottom" === e
					},
					isFullWidth: function() {
						return this.options.fullWidth
					},
					getRightValue: function(e) {
						if (sn(e)) return NaN;
						if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
						if (e)
							if (this.isHorizontal()) {
								if (void 0 !== e.x) return this.getRightValue(e.x)
							} else if (void 0 !== e.y) return this.getRightValue(e.y);
						return e
					},
					_convertTicksToLabels: function(e) {
						var t, n, r, i = this;
						for (i.ticks = e.map((function(e) {
								return e.value
							})), i.beforeTickToLabelConversion(), t = i.convertTicksToLabels(e) || i.ticks, i.afterTickToLabelConversion(), n = 0, r = e.length; n < r; ++n) e[n].label = t[n];
						return t
					},
					_getLabelSizes: function() {
						var e = this,
							t = e._labelSizes;
						return t || (e._labelSizes = t = fn(e.ctx, _n(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t
					},
					_parseValue: function(e) {
						var t, n, r, i;
						return on(e) ? (t = +this.getRightValue(e[0]), n = +this.getRightValue(e[1]), r = Math.min(t, n), i = Math.max(t, n)) : (t = void 0, n = e = +this.getRightValue(e), r = e, i = e), {
							min: r,
							max: i,
							start: t,
							end: n
						}
					},
					_getScaleLabel: function(e) {
						var t = this._parseValue(e);
						return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
					},
					getLabelForIndex: j.noop,
					getPixelForValue: j.noop,
					getValueForPixel: j.noop,
					getPixelForTick: function(e) {
						var t = this,
							n = t.options.offset,
							r = t._ticks.length,
							i = 1 / Math.max(r - (n ? 0 : 1), 1);
						return e < 0 || e > r - 1 ? null : t.getPixelForDecimal(e * i + (n ? i / 2 : 0))
					},
					getPixelForDecimal: function(e) {
						var t = this;
						return t._reversePixels && (e = 1 - e), t._startPixel + e * t._length
					},
					getDecimalForPixel: function(e) {
						var t = (e - this._startPixel) / this._length;
						return this._reversePixels ? 1 - t : t
					},
					getBasePixel: function() {
						return this.getPixelForValue(this.getBaseValue())
					},
					getBaseValue: function() {
						var e = this,
							t = e.min,
							n = e.max;
						return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
					},
					_autoSkip: function(e) {
						var t, n, r, i, a = this,
							o = a.options.ticks,
							s = a._length,
							u = o.maxTicksLimit || s / a._tickSize() + 1,
							c = o.major.enabled ? function(e) {
								var t, n, r = [];
								for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
								return r
							}(e) : [],
							l = c.length,
							f = c[0],
							d = c[l - 1];
						if (l > u) return function(e, t, n) {
							var r, i, a = 0,
								o = t[0];
							for (n = Math.ceil(n), r = 0; r < e.length; r++) i = e[r], r === o ? (i._index = r, o = t[++a * n]) : delete i.label
						}(e, c, l / u), mn(e);
						if (r = function(e, t, n, r) {
								var i, a, o, s, u = function(e) {
										var t, n, r = e.length;
										if (r < 2) return !1;
										for (n = e[0], t = 1; t < r; ++t)
											if (e[t] - e[t - 1] !== n) return !1;
										return n
									}(e),
									c = (t.length - 1) / r;
								if (!u) return Math.max(c, 1);
								for (o = 0, s = (i = j.math._factorize(u)).length - 1; o < s; o++)
									if ((a = i[o]) > c) return a;
								return Math.max(c, 1)
							}(c, e, 0, u), l > 0) {
							for (t = 0, n = l - 1; t < n; t++) bn(e, r, c[t], c[t + 1]);
							return i = l > 1 ? (d - f) / (l - 1) : null, bn(e, r, j.isNullOrUndef(i) ? 0 : f - i, f), bn(e, r, d, j.isNullOrUndef(i) ? e.length : d + i), mn(e)
						}
						return bn(e, r), mn(e)
					},
					_tickSize: function() {
						var e = this,
							t = e.options.ticks,
							n = j.toRadians(e.labelRotation),
							r = Math.abs(Math.cos(n)),
							i = Math.abs(Math.sin(n)),
							a = e._getLabelSizes(),
							o = t.autoSkipPadding || 0,
							s = a ? a.widest.width + o : 0,
							u = a ? a.highest.height + o : 0;
						return e.isHorizontal() ? u * r > s * i ? s / r : u / i : u * i < s * r ? u / r : s / i
					},
					_isVisible: function() {
						var e, t, n, r = this,
							i = r.chart,
							a = r.options.display;
						if ("auto" !== a) return !!a;
						for (e = 0, t = i.data.datasets.length; e < t; ++e)
							if (i.isDatasetVisible(e) && ((n = i.getDatasetMeta(e)).xAxisID === r.id || n.yAxisID === r.id)) return !0;
						return !1
					},
					_computeGridLineItems: function(e) {
						var t, n, r, i, a, o, s, u, c, l, f, d, h, p, _, m, b, g = this,
							v = g.chart,
							y = g.options,
							A = y.gridLines,
							S = y.position,
							w = A.offsetGridLines,
							E = g.isHorizontal(),
							T = g._ticksToDraw,
							C = T.length + (w ? 1 : 0),
							$ = dn(A),
							k = [],
							O = A.drawBorder ? cn(A.lineWidth, 0, 0) : 0,
							x = O / 2,
							P = j._alignPixel,
							M = function(e) {
								return P(v, e, O)
							};
						for ("top" === S ? (t = M(g.bottom), s = g.bottom - $, c = t - x, f = M(e.top) + x, h = e.bottom) : "bottom" === S ? (t = M(g.top), f = e.top, h = M(e.bottom) - x, s = t + x, c = g.top + $) : "left" === S ? (t = M(g.right), o = g.right - $, u = t - x, l = M(e.left) + x, d = e.right) : (t = M(g.left), l = e.left, d = M(e.right) - x, o = t + x, u = g.left + $), n = 0; n < C; ++n) r = T[n] || {}, sn(r.label) && n < T.length || (n === g.zeroLineIndex && y.offset === w ? (p = A.zeroLineWidth, _ = A.zeroLineColor, m = A.zeroLineBorderDash || [], b = A.zeroLineBorderDashOffset || 0) : (p = cn(A.lineWidth, n, 1), _ = cn(A.color, n, "rgba(0,0,0,0.1)"), m = A.borderDash || [], b = A.borderDashOffset || 0), void 0 !== (i = ln(g, r._index || n, w)) && (a = P(v, i, p), E ? o = u = l = d = a : s = c = f = h = a, k.push({
							tx1: o,
							ty1: s,
							tx2: u,
							ty2: c,
							x1: l,
							y1: f,
							x2: d,
							y2: h,
							width: p,
							color: _,
							borderDash: m,
							borderDashOffset: b
						})));
						return k.ticksLength = C, k.borderValue = t, k
					},
					_computeLabelItems: function() {
						var e, t, n, r, i, a, o, s, u, c, l, f, d = this,
							h = d.options,
							p = h.ticks,
							_ = h.position,
							m = p.mirror,
							b = d.isHorizontal(),
							g = d._ticksToDraw,
							v = _n(p),
							y = p.padding,
							A = dn(h.gridLines),
							S = -j.toRadians(d.labelRotation),
							w = [];
						for ("top" === _ ? (a = d.bottom - A - y, o = S ? "left" : "center") : "bottom" === _ ? (a = d.top + A + y, o = S ? "right" : "center") : "left" === _ ? (i = d.right - (m ? 0 : A) - y, o = m ? "left" : "right") : (i = d.left + (m ? 0 : A) + y, o = m ? "right" : "left"), e = 0, t = g.length; e < t; ++e) r = (n = g[e]).label, sn(r) || (s = d.getPixelForTick(n._index || e) + p.labelOffset, c = (u = n.major ? v.major : v.minor).lineHeight, l = on(r) ? r.length : 1, b ? (i = s, f = "top" === _ ? ((S ? 1 : .5) - l) * c : (S ? 0 : .5) * c) : (a = s, f = (1 - l) * c / 2), w.push({
							x: i,
							y: a,
							rotation: S,
							label: r,
							font: u,
							textOffset: f,
							textAlign: o
						}));
						return w
					},
					_drawGrid: function(e) {
						var t = this,
							n = t.options.gridLines;
						if (n.display) {
							var r, i, a, o, s, u = t.ctx,
								c = t.chart,
								l = j._alignPixel,
								f = n.drawBorder ? cn(n.lineWidth, 0, 0) : 0,
								d = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
							for (a = 0, o = d.length; a < o; ++a) r = (s = d[a]).width, i = s.color, r && i && (u.save(), u.lineWidth = r, u.strokeStyle = i, u.setLineDash && (u.setLineDash(s.borderDash), u.lineDashOffset = s.borderDashOffset), u.beginPath(), n.drawTicks && (u.moveTo(s.tx1, s.ty1), u.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (u.moveTo(s.x1, s.y1), u.lineTo(s.x2, s.y2)), u.stroke(), u.restore());
							if (f) {
								var h, p, _, m, b = f,
									g = cn(n.lineWidth, d.ticksLength - 1, 1),
									v = d.borderValue;
								t.isHorizontal() ? (h = l(c, t.left, b) - b / 2, p = l(c, t.right, g) + g / 2, _ = m = v) : (_ = l(c, t.top, b) - b / 2, m = l(c, t.bottom, g) + g / 2, h = p = v), u.lineWidth = f, u.strokeStyle = cn(n.color, 0), u.beginPath(), u.moveTo(h, _), u.lineTo(p, m), u.stroke()
							}
						}
					},
					_drawLabels: function() {
						var e = this;
						if (e.options.ticks.display) {
							var t, n, r, i, a, o, s, u, c = e.ctx,
								l = e._labelItems || (e._labelItems = e._computeLabelItems());
							for (t = 0, r = l.length; t < r; ++t) {
								if (o = (a = l[t]).font, c.save(), c.translate(a.x, a.y), c.rotate(a.rotation), c.font = o.string, c.fillStyle = o.color, c.textBaseline = "middle", c.textAlign = a.textAlign, s = a.label, u = a.textOffset, on(s))
									for (n = 0, i = s.length; n < i; ++n) c.fillText("" + s[n], 0, u), u += o.lineHeight;
								else c.fillText(s, 0, u);
								c.restore()
							}
						}
					},
					_drawTitle: function() {
						var e = this,
							t = e.ctx,
							n = e.options,
							r = n.scaleLabel;
						if (r.display) {
							var i, a, o = un(r.fontColor, B.global.defaultFontColor),
								s = j.options._parseFont(r),
								u = j.options.toPadding(r.padding),
								c = s.lineHeight / 2,
								l = n.position,
								f = 0;
							if (e.isHorizontal()) i = e.left + e.width / 2, a = "bottom" === l ? e.bottom - c - u.bottom : e.top + c + u.top;
							else {
								var d = "left" === l;
								i = d ? e.left + c + u.top : e.right - c - u.top, a = e.top + e.height / 2, f = d ? -.5 * Math.PI : .5 * Math.PI
							}
							t.save(), t.translate(i, a), t.rotate(f), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = o, t.font = s.string, t.fillText(r.labelString, 0, 0), t.restore()
						}
					},
					draw: function(e) {
						var t = this;
						t._isVisible() && (t._drawGrid(e), t._drawTitle(), t._drawLabels())
					},
					_layers: function() {
						var e = this,
							t = e.options,
							n = t.ticks && t.ticks.z || 0,
							r = t.gridLines && t.gridLines.z || 0;
						return e._isVisible() && n !== r && e.draw === e._draw ? [{
							z: r,
							draw: function() {
								e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments)
							}
						}, {
							z: n,
							draw: function() {
								e._drawLabels.apply(e, arguments)
							}
						}] : [{
							z: n,
							draw: function() {
								e.draw.apply(e, arguments)
							}
						}]
					},
					_getMatchingVisibleMetas: function(e) {
						var t = this,
							n = t.isHorizontal();
						return t.chart._getSortedVisibleDatasetMetas().filter((function(r) {
							return (!e || r.type === e) && (n ? r.xAxisID === t.id : r.yAxisID === t.id)
						}))
					}
				});
				gn.prototype._draw = gn.prototype.draw;
				var vn = gn,
					yn = j.isNullOrUndef,
					An = vn.extend({
						determineDataLimits: function() {
							var e, t = this,
								n = t._getLabels(),
								r = t.options.ticks,
								i = r.min,
								a = r.max,
								o = 0,
								s = n.length - 1;
							void 0 !== i && (e = n.indexOf(i)) >= 0 && (o = e), void 0 !== a && (e = n.indexOf(a)) >= 0 && (s = e), t.minIndex = o, t.maxIndex = s, t.min = n[o], t.max = n[s]
						},
						buildTicks: function() {
							var e = this,
								t = e._getLabels(),
								n = e.minIndex,
								r = e.maxIndex;
							e.ticks = 0 === n && r === t.length - 1 ? t : t.slice(n, r + 1)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								r = n.chart;
							return r.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(r.data.datasets[t].data[e]) : n._getLabels()[e]
						},
						_configure: function() {
							var e = this,
								t = e.options.offset,
								n = e.ticks;
							vn.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), n && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(n.length - (t ? 0 : 1), 1))
						},
						getPixelForValue: function(e, t, n) {
							var r, i, a, o = this;
							return yn(t) || yn(n) || (e = o.chart.data.datasets[n].data[t]), yn(e) || (r = o.isHorizontal() ? e.x : e.y), (void 0 !== r || void 0 !== e && isNaN(t)) && (i = o._getLabels(), e = j.valueOrDefault(r, e), t = -1 !== (a = i.indexOf(e)) ? a : t, isNaN(t) && (t = e)), o.getPixelForDecimal((t - o._startValue) / o._valueRange)
						},
						getPixelForTick: function(e) {
							var t = this.ticks;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange);
							return Math.min(Math.max(n, 0), t.ticks.length - 1)
						},
						getBasePixel: function() {
							return this.bottom
						}
					}),
					Sn = {
						position: "bottom"
					};
				An._defaults = Sn;
				var wn = j.noop,
					En = j.isNullOrUndef,
					Tn = vn.extend({
						getRightValue: function(e) {
							return "string" == typeof e ? +e : vn.prototype.getRightValue.call(this, e)
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							if (t.beginAtZero) {
								var n = j.sign(e.min),
									r = j.sign(e.max);
								n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0)
							}
							var i = void 0 !== t.min || void 0 !== t.suggestedMin,
								a = void 0 !== t.max || void 0 !== t.suggestedMax;
							void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), i !== a && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
						},
						getTickLimit: function() {
							var e, t = this,
								n = t.options.ticks,
								r = n.stepSize,
								i = n.maxTicksLimit;
							return r ? e = Math.ceil(t.max / r) - Math.floor(t.min / r) + 1 : (e = t._computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
						},
						_computeTickLimit: function() {
							return Number.POSITIVE_INFINITY
						},
						handleDirectionalChanges: wn,
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = e.getTickLimit(),
								r = {
									maxTicks: n = Math.max(2, n),
									min: t.min,
									max: t.max,
									precision: t.precision,
									stepSize: j.valueOrDefault(t.fixedStepSize, t.stepSize)
								},
								i = e.ticks = function(e, t) {
									var n, r, i, a, o = [],
										s = e.stepSize,
										u = s || 1,
										c = e.maxTicks - 1,
										l = e.min,
										f = e.max,
										d = e.precision,
										h = t.min,
										p = t.max,
										_ = j.niceNum((p - h) / c / u) * u;
									if (_ < 1e-14 && En(l) && En(f)) return [h, p];
									(a = Math.ceil(p / _) - Math.floor(h / _)) > c && (_ = j.niceNum(a * _ / c / u) * u), s || En(d) ? n = Math.pow(10, j._decimalPlaces(_)) : (n = Math.pow(10, d), _ = Math.ceil(_ * n) / n), r = Math.floor(h / _) * _, i = Math.ceil(p / _) * _, s && (!En(l) && j.almostWhole(l / _, _ / 1e3) && (r = l), !En(f) && j.almostWhole(f / _, _ / 1e3) && (i = f)), a = (i - r) / _, a = j.almostEquals(a, Math.round(a), _ / 1e3) ? Math.round(a) : Math.ceil(a), r = Math.round(r * n) / n, i = Math.round(i * n) / n, o.push(En(l) ? r : l);
									for (var m = 1; m < a; ++m) o.push(Math.round((r + m * _) * n) / n);
									return o.push(En(f) ? i : f), o
								}(r, e);
							e.handleDirectionalChanges(), e.max = j.max(i), e.min = j.min(i), t.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
						},
						convertTicksToLabels: function() {
							var e = this;
							e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), vn.prototype.convertTicksToLabels.call(e)
						},
						_configure: function() {
							var e, t = this,
								n = t.getTicks(),
								r = t.min,
								i = t.max;
							vn.prototype._configure.call(t), t.options.offset && n.length && (r -= e = (i - r) / Math.max(n.length - 1, 1) / 2, i += e), t._startValue = r, t._endValue = i, t._valueRange = i - r
						}
					}),
					Cn = {
						position: "left",
						ticks: {
							callback: an.formatters.linear
						}
					};

				function $n(e, t, n, r) {
					var i, a, o = e.options,
						s = function(e, t, n) {
							var r = [n.type, void 0 === t && void 0 === n.stack ? n.index : "", n.stack].join(".");
							return void 0 === e[r] && (e[r] = {
								pos: [],
								neg: []
							}), e[r]
						}(t, o.stacked, n),
						u = s.pos,
						c = s.neg,
						l = r.length;
					for (i = 0; i < l; ++i) a = e._parseValue(r[i]), isNaN(a.min) || isNaN(a.max) || n.data[i].hidden || (u[i] = u[i] || 0, c[i] = c[i] || 0, o.relativePoints ? u[i] = 100 : a.min < 0 || a.max < 0 ? c[i] += a.min : u[i] += a.max)
				}

				function kn(e, t, n) {
					var r, i, a = n.length;
					for (r = 0; r < a; ++r) i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || t.data[r].hidden || (e.min = Math.min(e.min, i.min), e.max = Math.max(e.max, i.max))
				}
				var On = Tn.extend({
						determineDataLimits: function() {
							var e, t, n, r, i = this,
								a = i.options,
								o = i.chart.data.datasets,
								s = i._getMatchingVisibleMetas(),
								u = a.stacked,
								c = {},
								l = s.length;
							if (i.min = Number.POSITIVE_INFINITY, i.max = Number.NEGATIVE_INFINITY, void 0 === u)
								for (e = 0; !u && e < l; ++e) u = void 0 !== (t = s[e]).stack;
							for (e = 0; e < l; ++e) n = o[(t = s[e]).index].data, u ? $n(i, c, t, n) : kn(i, t, n);
							j.each(c, (function(e) {
								r = e.pos.concat(e.neg), i.min = Math.min(i.min, j.min(r)), i.max = Math.max(i.max, j.max(r))
							})), i.min = j.isFinite(i.min) && !isNaN(i.min) ? i.min : 0, i.max = j.isFinite(i.max) && !isNaN(i.max) ? i.max : 1, i.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							var e, t = this;
							return t.isHorizontal() ? Math.ceil(t.width / 40) : (e = j.options._parseFont(t.options.ticks), Math.ceil(t.height / e.lineHeight))
						},
						handleDirectionalChanges: function() {
							this.isHorizontal() || this.ticks.reverse()
						},
						getLabelForIndex: function(e, t) {
							return this._getScaleLabel(this.chart.data.datasets[t].data[e])
						},
						getPixelForValue: function(e) {
							var t = this;
							return t.getPixelForDecimal((+t.getRightValue(e) - t._startValue) / t._valueRange)
						},
						getValueForPixel: function(e) {
							return this._startValue + this.getDecimalForPixel(e) * this._valueRange
						},
						getPixelForTick: function(e) {
							var t = this.ticksAsNumbers;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
						}
					}),
					xn = Cn;
				On._defaults = xn;
				var Pn = j.valueOrDefault,
					Mn = j.math.log10,
					In = {
						position: "left",
						ticks: {
							callback: an.formatters.logarithmic
						}
					};

				function Ln(e, t) {
					return j.isFinite(e) && e >= 0 ? e : t
				}
				var Dn = vn.extend({
						determineDataLimits: function() {
							var e, t, n, r, i, a, o = this,
								s = o.options,
								u = o.chart,
								c = u.data.datasets,
								l = o.isHorizontal();

							function f(e) {
								return l ? e.xAxisID === o.id : e.yAxisID === o.id
							}
							o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
							var d = s.stacked;
							if (void 0 === d)
								for (e = 0; e < c.length; e++)
									if (t = u.getDatasetMeta(e), u.isDatasetVisible(e) && f(t) && void 0 !== t.stack) {
										d = !0;
										break
									} if (s.stacked || d) {
								var h = {};
								for (e = 0; e < c.length; e++) {
									var p = [(t = u.getDatasetMeta(e)).type, void 0 === s.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
									if (u.isDatasetVisible(e) && f(t))
										for (void 0 === h[p] && (h[p] = []), i = 0, a = (r = c[e].data).length; i < a; i++) {
											var _ = h[p];
											n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (_[i] = _[i] || 0, _[i] += n.max)
										}
								}
								j.each(h, (function(e) {
									if (e.length > 0) {
										var t = j.min(e),
											n = j.max(e);
										o.min = Math.min(o.min, t), o.max = Math.max(o.max, n)
									}
								}))
							} else
								for (e = 0; e < c.length; e++)
									if (t = u.getDatasetMeta(e), u.isDatasetVisible(e) && f(t))
										for (i = 0, a = (r = c[e].data).length; i < a; i++) n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
							o.min = j.isFinite(o.min) ? o.min : null, o.max = j.isFinite(o.max) ? o.max : null, o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							e.min = Ln(t.min, e.min), e.max = Ln(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Mn(e.min)) - 1), e.max = Math.pow(10, Math.floor(Mn(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(Mn(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Mn(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Mn(e.max))) : e.minNotZero = 1)
						},
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = !e.isHorizontal(),
								r = {
									min: Ln(t.min),
									max: Ln(t.max)
								},
								i = e.ticks = function(e, t) {
									var n, r, i = [],
										a = Pn(e.min, Math.pow(10, Math.floor(Mn(t.min)))),
										o = Math.floor(Mn(t.max)),
										s = Math.ceil(t.max / Math.pow(10, o));
									0 === a ? (n = Math.floor(Mn(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(a), a = r * Math.pow(10, n)) : (n = Math.floor(Mn(a)), r = Math.floor(a / Math.pow(10, n)));
									var u = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
									do {
										i.push(a), 10 == ++r && (r = 1, u = ++n >= 0 ? 1 : u), a = Math.round(r * Math.pow(10, n) * u) / u
									} while (n < o || n === o && r < s);
									var c = Pn(e.max, a);
									return i.push(c), i
								}(r, e);
							e.max = j.max(i), e.min = j.min(i), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && i.reverse()
						},
						convertTicksToLabels: function() {
							this.tickValues = this.ticks.slice(), vn.prototype.convertTicksToLabels.call(this)
						},
						getLabelForIndex: function(e, t) {
							return this._getScaleLabel(this.chart.data.datasets[t].data[e])
						},
						getPixelForTick: function(e) {
							var t = this.tickValues;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
						},
						_getFirstTickValue: function(e) {
							var t = Math.floor(Mn(e));
							return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
						},
						_configure: function() {
							var e = this,
								t = e.min,
								n = 0;
							vn.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), n = Pn(e.options.ticks.fontSize, B.global.defaultFontSize) / e._length), e._startValue = Mn(t), e._valueOffset = n, e._valueRange = (Mn(e.max) - Mn(t)) / (1 - n)
						},
						getPixelForValue: function(e) {
							var t = this,
								n = 0;
							return (e = +t.getRightValue(e)) > t.min && e > 0 && (n = (Mn(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(n)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t.getDecimalForPixel(e);
							return 0 === n && 0 === t.min ? 0 : Math.pow(10, t._startValue + (n - t._valueOffset) * t._valueRange)
						}
					}),
					Bn = In;
				Dn._defaults = Bn;
				var Nn = j.valueOrDefault,
					Rn = j.valueAtIndexOrDefault,
					Fn = j.options.resolve,
					Un = {
						display: !0,
						animate: !0,
						position: "chartArea",
						angleLines: {
							display: !0,
							color: "rgba(0,0,0,0.1)",
							lineWidth: 1,
							borderDash: [],
							borderDashOffset: 0
						},
						gridLines: {
							circular: !1
						},
						ticks: {
							showLabelBackdrop: !0,
							backdropColor: "rgba(255,255,255,0.75)",
							backdropPaddingY: 2,
							backdropPaddingX: 2,
							callback: an.formatters.linear
						},
						pointLabels: {
							display: !0,
							fontSize: 10,
							callback: function(e) {
								return e
							}
						}
					};

				function jn(e) {
					var t = e.ticks;
					return t.display && e.display ? Nn(t.fontSize, B.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
				}

				function Hn(e, t, n) {
					return j.isArray(n) ? {
						w: j.longestText(e, e.font, n),
						h: n.length * t
					} : {
						w: e.measureText(n).width,
						h: t
					}
				}

				function Yn(e, t, n, r, i) {
					return e === r || e === i ? {
						start: t - n / 2,
						end: t + n / 2
					} : e < r || e > i ? {
						start: t - n,
						end: t
					} : {
						start: t,
						end: t + n
					}
				}

				function Vn(e) {
					return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
				}

				function zn(e, t, n, r) {
					var i, a, o = n.y + r / 2;
					if (j.isArray(t))
						for (i = 0, a = t.length; i < a; ++i) e.fillText(t[i], n.x, o), o += r;
					else e.fillText(t, n.x, o)
				}

				function Qn(e, t, n) {
					90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
				}

				function Gn(e) {
					return j.isNumber(e) ? e : 0
				}
				var qn = Tn.extend({
						setDimensions: function() {
							var e = this;
							e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = jn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
						},
						determineDataLimits: function() {
							var e = this,
								t = e.chart,
								n = Number.POSITIVE_INFINITY,
								r = Number.NEGATIVE_INFINITY;
							j.each(t.data.datasets, (function(i, a) {
								if (t.isDatasetVisible(a)) {
									var o = t.getDatasetMeta(a);
									j.each(i.data, (function(t, i) {
										var a = +e.getRightValue(t);
										isNaN(a) || o.data[i].hidden || (n = Math.min(a, n), r = Math.max(a, r))
									}))
								}
							})), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = r === Number.NEGATIVE_INFINITY ? 0 : r, e.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							return Math.ceil(this.drawingArea / jn(this.options))
						},
						convertTicksToLabels: function() {
							var e = this;
							Tn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function() {
								var t = j.callback(e.options.pointLabels.callback, arguments, e);
								return t || 0 === t ? t : ""
							}))
						},
						getLabelForIndex: function(e, t) {
							return +this.getRightValue(this.chart.data.datasets[t].data[e])
						},
						fit: function() {
							var e = this,
								t = e.options;
							t.display && t.pointLabels.display ? function(e) {
								var t, n, r, i = j.options._parseFont(e.options.pointLabels),
									a = {
										l: 0,
										r: e.width,
										t: 0,
										b: e.height - e.paddingTop
									},
									o = {};
								e.ctx.font = i.string, e._pointLabelSizes = [];
								var s = e.chart.data.labels.length;
								for (t = 0; t < s; t++) {
									r = e.getPointPosition(t, e.drawingArea + 5), n = Hn(e.ctx, i.lineHeight, e.pointLabels[t]), e._pointLabelSizes[t] = n;
									var u = e.getIndexAngle(t),
										c = j.toDegrees(u) % 360,
										l = Yn(c, r.x, n.w, 0, 180),
										f = Yn(c, r.y, n.h, 90, 270);
									l.start < a.l && (a.l = l.start, o.l = u), l.end > a.r && (a.r = l.end, o.r = u), f.start < a.t && (a.t = f.start, o.t = u), f.end > a.b && (a.b = f.end, o.b = u)
								}
								e.setReductions(e.drawingArea, a, o)
							}(e) : e.setCenterPoint(0, 0, 0, 0)
						},
						setReductions: function(e, t, n) {
							var r = this,
								i = t.l / Math.sin(n.l),
								a = Math.max(t.r - r.width, 0) / Math.sin(n.r),
								o = -t.t / Math.cos(n.t),
								s = -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
							i = Gn(i), a = Gn(a), o = Gn(o), s = Gn(s), r.drawingArea = Math.min(Math.floor(e - (i + a) / 2), Math.floor(e - (o + s) / 2)), r.setCenterPoint(i, a, o, s)
						},
						setCenterPoint: function(e, t, n, r) {
							var i = this,
								a = i.width - t - i.drawingArea,
								o = e + i.drawingArea,
								s = n + i.drawingArea,
								u = i.height - i.paddingTop - r - i.drawingArea;
							i.xCenter = Math.floor((o + a) / 2 + i.left), i.yCenter = Math.floor((s + u) / 2 + i.top + i.paddingTop)
						},
						getIndexAngle: function(e) {
							var t = this.chart,
								n = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
							return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
						},
						getDistanceFromCenterForValue: function(e) {
							var t = this;
							if (j.isNullOrUndef(e)) return NaN;
							var n = t.drawingArea / (t.max - t.min);
							return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
						},
						getPointPosition: function(e, t) {
							var n = this,
								r = n.getIndexAngle(e) - Math.PI / 2;
							return {
								x: Math.cos(r) * t + n.xCenter,
								y: Math.sin(r) * t + n.yCenter
							}
						},
						getPointPositionForValue: function(e, t) {
							return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
						},
						getBasePosition: function(e) {
							var t = this,
								n = t.min,
								r = t.max;
							return t.getPointPositionForValue(e || 0, t.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0)
						},
						_drawGrid: function() {
							var e, t, n, r = this,
								i = r.ctx,
								a = r.options,
								o = a.gridLines,
								s = a.angleLines,
								u = Nn(s.lineWidth, o.lineWidth),
								c = Nn(s.color, o.color);
							if (a.pointLabels.display && function(e) {
									var t = e.ctx,
										n = e.options,
										r = n.pointLabels,
										i = jn(n),
										a = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
										o = j.options._parseFont(r);
									t.save(), t.font = o.string, t.textBaseline = "middle";
									for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
										var u = 0 === s ? i / 2 : 0,
											c = e.getPointPosition(s, a + u + 5),
											l = Rn(r.fontColor, s, B.global.defaultFontColor);
										t.fillStyle = l;
										var f = e.getIndexAngle(s),
											d = j.toDegrees(f);
										t.textAlign = Vn(d), Qn(d, e._pointLabelSizes[s], c), zn(t, e.pointLabels[s], c, o.lineHeight)
									}
									t.restore()
								}(r), o.display && j.each(r.ticks, (function(e, n) {
									0 !== n && (t = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]), function(e, t, n, r) {
										var i, a = e.ctx,
											o = t.circular,
											s = e.chart.data.labels.length,
											u = Rn(t.color, r - 1),
											c = Rn(t.lineWidth, r - 1);
										if ((o || s) && u && c) {
											if (a.save(), a.strokeStyle = u, a.lineWidth = c, a.setLineDash && (a.setLineDash(t.borderDash || []), a.lineDashOffset = t.borderDashOffset || 0), a.beginPath(), o) a.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
											else {
												i = e.getPointPosition(0, n), a.moveTo(i.x, i.y);
												for (var l = 1; l < s; l++) i = e.getPointPosition(l, n), a.lineTo(i.x, i.y)
											}
											a.closePath(), a.stroke(), a.restore()
										}
									}(r, o, t, n))
								})), s.display && u && c) {
								for (i.save(), i.lineWidth = u, i.strokeStyle = c, i.setLineDash && (i.setLineDash(Fn([s.borderDash, o.borderDash, []])), i.lineDashOffset = Fn([s.borderDashOffset, o.borderDashOffset, 0])), e = r.chart.data.labels.length - 1; e >= 0; e--) t = r.getDistanceFromCenterForValue(a.ticks.reverse ? r.min : r.max), n = r.getPointPosition(e, t), i.beginPath(), i.moveTo(r.xCenter, r.yCenter), i.lineTo(n.x, n.y), i.stroke();
								i.restore()
							}
						},
						_drawLabels: function() {
							var e = this,
								t = e.ctx,
								n = e.options.ticks;
							if (n.display) {
								var r, i, a = e.getIndexAngle(0),
									o = j.options._parseFont(n),
									s = Nn(n.fontColor, B.global.defaultFontColor);
								t.save(), t.font = o.string, t.translate(e.xCenter, e.yCenter), t.rotate(a), t.textAlign = "center", t.textBaseline = "middle", j.each(e.ticks, (function(a, u) {
									(0 !== u || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[u]), n.showLabelBackdrop && (i = t.measureText(a).width, t.fillStyle = n.backdropColor, t.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), t.fillStyle = s, t.fillText(a, 0, -r))
								})), t.restore()
							}
						},
						_drawTitle: j.noop
					}),
					Wn = Un;
				qn._defaults = Wn;
				var Kn = j._deprecated,
					Xn = j.options.resolve,
					Jn = j.valueOrDefault,
					Zn = Number.MIN_SAFE_INTEGER || -9007199254740991,
					er = Number.MAX_SAFE_INTEGER || 9007199254740991,
					tr = {
						millisecond: {
							common: !0,
							size: 1,
							steps: 1e3
						},
						second: {
							common: !0,
							size: 1e3,
							steps: 60
						},
						minute: {
							common: !0,
							size: 6e4,
							steps: 60
						},
						hour: {
							common: !0,
							size: 36e5,
							steps: 24
						},
						day: {
							common: !0,
							size: 864e5,
							steps: 30
						},
						week: {
							common: !1,
							size: 6048e5,
							steps: 4
						},
						month: {
							common: !0,
							size: 2628e6,
							steps: 12
						},
						quarter: {
							common: !1,
							size: 7884e6,
							steps: 4
						},
						year: {
							common: !0,
							size: 3154e7
						}
					},
					nr = Object.keys(tr);

				function rr(e, t) {
					return e - t
				}

				function ir(e) {
					return j.valueOrDefault(e.time.min, e.ticks.min)
				}

				function ar(e) {
					return j.valueOrDefault(e.time.max, e.ticks.max)
				}

				function or(e, t, n, r) {
					var i = function(e, t, n) {
							for (var r, i, a, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
								if (i = e[(r = o + s >> 1) - 1] || null, a = e[r], !i) return {
									lo: null,
									hi: a
								};
								if (a[t] < n) o = r + 1;
								else {
									if (!(i[t] > n)) return {
										lo: i,
										hi: a
									};
									s = r - 1
								}
							}
							return {
								lo: a,
								hi: null
							}
						}(e, t, n),
						a = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
						o = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
						s = o[t] - a[t],
						u = s ? (n - a[t]) / s : 0,
						c = (o[r] - a[r]) * u;
					return a[r] + c
				}

				function sr(e, t) {
					var n = e._adapter,
						r = e.options.time,
						i = r.parser,
						a = i || r.format,
						o = t;
					return "function" == typeof i && (o = i(o)), j.isFinite(o) || (o = "string" == typeof a ? n.parse(o, a) : n.parse(o)), null !== o ? +o : (i || "function" != typeof a || (o = a(t), j.isFinite(o) || (o = n.parse(o))), o)
				}

				function ur(e, t) {
					if (j.isNullOrUndef(t)) return null;
					var n = e.options.time,
						r = sr(e, e.getRightValue(t));
					return null === r || n.round && (r = +e._adapter.startOf(r, n.round)), r
				}

				function cr(e, t, n, r) {
					var i, a, o, s = nr.length;
					for (i = nr.indexOf(e); i < s - 1; ++i)
						if (o = (a = tr[nr[i]]).steps ? a.steps : er, a.common && Math.ceil((n - t) / (o * a.size)) <= r) return nr[i];
					return nr[s - 1]
				}

				function lr(e, t, n) {
					var r, i, a = [],
						o = {},
						s = t.length;
					for (r = 0; r < s; ++r) o[i = t[r]] = r, a.push({
						value: i,
						major: !1
					});
					return 0 !== s && n ? function(e, t, n, r) {
						var i, a, o = e._adapter,
							s = +o.startOf(t[0].value, r),
							u = t[t.length - 1].value;
						for (i = s; i <= u; i = +o.add(i, 1, r))(a = n[i]) >= 0 && (t[a].major = !0);
						return t
					}(e, a, o, n) : a
				}
				var fr = vn.extend({
						initialize: function() {
							this.mergeTicksOptions(), vn.prototype.initialize.call(this)
						},
						update: function() {
							var e = this,
								t = e.options,
								n = t.time || (t.time = {}),
								r = e._adapter = new rn._date(t.adapters.date);
							return Kn("time scale", n.format, "time.format", "time.parser"), Kn("time scale", n.min, "time.min", "ticks.min"), Kn("time scale", n.max, "time.max", "ticks.max"), j.mergeIf(n.displayFormats, r.formats()), vn.prototype.update.apply(e, arguments)
						},
						getRightValue: function(e) {
							return e && void 0 !== e.t && (e = e.t), vn.prototype.getRightValue.call(this, e)
						},
						determineDataLimits: function() {
							var e, t, n, r, i, a, o, s = this,
								u = s.chart,
								c = s._adapter,
								l = s.options,
								f = l.time.unit || "day",
								d = er,
								h = Zn,
								p = [],
								_ = [],
								m = [],
								b = s._getLabels();
							for (e = 0, n = b.length; e < n; ++e) m.push(ur(s, b[e]));
							for (e = 0, n = (u.data.datasets || []).length; e < n; ++e)
								if (u.isDatasetVisible(e))
									if (i = u.data.datasets[e].data, j.isObject(i[0]))
										for (_[e] = [], t = 0, r = i.length; t < r; ++t) a = ur(s, i[t]), p.push(a), _[e][t] = a;
									else _[e] = m.slice(0), o || (p = p.concat(m), o = !0);
							else _[e] = [];
							m.length && (d = Math.min(d, m[0]), h = Math.max(h, m[m.length - 1])), p.length && (p = n > 1 ? function(e) {
								var t, n, r, i = {},
									a = [];
								for (t = 0, n = e.length; t < n; ++t) i[r = e[t]] || (i[r] = !0, a.push(r));
								return a
							}(p).sort(rr) : p.sort(rr), d = Math.min(d, p[0]), h = Math.max(h, p[p.length - 1])), d = ur(s, ir(l)) || d, h = ur(s, ar(l)) || h, d = d === er ? +c.startOf(Date.now(), f) : d, h = h === Zn ? +c.endOf(Date.now(), f) + 1 : h, s.min = Math.min(d, h), s.max = Math.max(d + 1, h), s._table = [], s._timestamps = {
								data: p,
								datasets: _,
								labels: m
							}
						},
						buildTicks: function() {
							var e, t, n, r = this,
								i = r.min,
								a = r.max,
								o = r.options,
								s = o.ticks,
								u = o.time,
								c = r._timestamps,
								l = [],
								f = r.getLabelCapacity(i),
								d = s.source,
								h = o.distribution;
							for (c = "data" === d || "auto" === d && "series" === h ? c.data : "labels" === d ? c.labels : function(e, t, n, r) {
									var i, a = e._adapter,
										o = e.options,
										s = o.time,
										u = s.unit || cr(s.minUnit, t, n, r),
										c = Xn([s.stepSize, s.unitStepSize, 1]),
										l = "week" === u && s.isoWeekday,
										f = t,
										d = [];
									if (l && (f = +a.startOf(f, "isoWeek", l)), f = +a.startOf(f, l ? "day" : u), a.diff(n, t, u) > 1e5 * c) throw t + " and " + n + " are too far apart with stepSize of " + c + " " + u;
									for (i = f; i < n; i = +a.add(i, c, u)) d.push(i);
									return i !== n && "ticks" !== o.bounds || d.push(i), d
								}(r, i, a, f), "ticks" === o.bounds && c.length && (i = c[0], a = c[c.length - 1]), i = ur(r, ir(o)) || i, a = ur(r, ar(o)) || a, e = 0, t = c.length; e < t; ++e)(n = c[e]) >= i && n <= a && l.push(n);
							return r.min = i, r.max = a, r._unit = u.unit || (s.autoSkip ? cr(u.minUnit, r.min, r.max, f) : function(e, t, n, r, i) {
								var a, o;
								for (a = nr.length - 1; a >= nr.indexOf(n); a--)
									if (o = nr[a], tr[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
								return nr[n ? nr.indexOf(n) : 0]
							}(r, l.length, u.minUnit, r.min, r.max)), r._majorUnit = s.major.enabled && "year" !== r._unit ? function(e) {
								for (var t = nr.indexOf(e) + 1, n = nr.length; t < n; ++t)
									if (tr[nr[t]].common) return nr[t]
							}(r._unit) : void 0, r._table = function(e, t, n, r) {
								if ("linear" === r || !e.length) return [{
									time: t,
									pos: 0
								}, {
									time: n,
									pos: 1
								}];
								var i, a, o, s, u, c = [],
									l = [t];
								for (i = 0, a = e.length; i < a; ++i)(s = e[i]) > t && s < n && l.push(s);
								for (l.push(n), i = 0, a = l.length; i < a; ++i) u = l[i + 1], o = l[i - 1], s = l[i], void 0 !== o && void 0 !== u && Math.round((u + o) / 2) === s || c.push({
									time: s,
									pos: i / (a - 1)
								});
								return c
							}(r._timestamps.data, i, a, h), r._offsets = function(e, t, n, r, i) {
								var a, o, s = 0,
									u = 0;
								return i.offset && t.length && (a = or(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - a : (or(e, "time", t[1], "pos") - a) / 2, o = or(e, "time", t[t.length - 1], "pos"), u = 1 === t.length ? o : (o - or(e, "time", t[t.length - 2], "pos")) / 2), {
									start: s,
									end: u,
									factor: 1 / (s + 1 + u)
								}
							}(r._table, l, 0, 0, o), s.reverse && l.reverse(), lr(r, l, r._majorUnit)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								r = n._adapter,
								i = n.chart.data,
								a = n.options.time,
								o = i.labels && e < i.labels.length ? i.labels[e] : "",
								s = i.datasets[t].data[e];
							return j.isObject(s) && (o = n.getRightValue(s)), a.tooltipFormat ? r.format(sr(n, o), a.tooltipFormat) : "string" == typeof o ? o : r.format(sr(n, o), a.displayFormats.datetime)
						},
						tickFormatFunction: function(e, t, n, r) {
							var i = this,
								a = i._adapter,
								o = i.options,
								s = o.time.displayFormats,
								u = s[i._unit],
								c = i._majorUnit,
								l = s[c],
								f = n[t],
								d = o.ticks,
								h = c && l && f && f.major,
								p = a.format(e, r || (h ? l : u)),
								_ = h ? d.major : d.minor,
								m = Xn([_.callback, _.userCallback, d.callback, d.userCallback]);
							return m ? m(p, t, n) : p
						},
						convertTicksToLabels: function(e) {
							var t, n, r = [];
							for (t = 0, n = e.length; t < n; ++t) r.push(this.tickFormatFunction(e[t].value, t, e));
							return r
						},
						getPixelForOffset: function(e) {
							var t = this,
								n = t._offsets,
								r = or(t._table, "time", e, "pos");
							return t.getPixelForDecimal((n.start + r) * n.factor)
						},
						getPixelForValue: function(e, t, n) {
							var r = this,
								i = null;
							if (void 0 !== t && void 0 !== n && (i = r._timestamps.datasets[n][t]), null === i && (i = ur(r, e)), null !== i) return r.getPixelForOffset(i)
						},
						getPixelForTick: function(e) {
							var t = this.getTicks();
							return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t._offsets,
								r = t.getDecimalForPixel(e) / n.factor - n.end,
								i = or(t._table, "pos", r, "time");
							return t._adapter._create(i)
						},
						_getLabelSize: function(e) {
							var t = this,
								n = t.options.ticks,
								r = t.ctx.measureText(e).width,
								i = j.toRadians(t.isHorizontal() ? n.maxRotation : n.minRotation),
								a = Math.cos(i),
								o = Math.sin(i),
								s = Jn(n.fontSize, B.global.defaultFontSize);
							return {
								w: r * a + s * o,
								h: r * o + s * a
							}
						},
						getLabelWidth: function(e) {
							return this._getLabelSize(e).w
						},
						getLabelCapacity: function(e) {
							var t = this,
								n = t.options.time,
								r = n.displayFormats,
								i = r[n.unit] || r.millisecond,
								a = t.tickFormatFunction(e, 0, lr(t, [e], t._majorUnit), i),
								o = t._getLabelSize(a),
								s = Math.floor(t.isHorizontal() ? t.width / o.w : t.height / o.h);
							return t.options.offset && s--, s > 0 ? s : 1
						}
					}),
					dr = {
						position: "bottom",
						distribution: "linear",
						bounds: "data",
						adapters: {},
						time: {
							parser: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: "millisecond",
							displayFormats: {}
						},
						ticks: {
							autoSkip: !1,
							source: "auto",
							major: {
								enabled: !1
							}
						}
					};
				fr._defaults = dr;
				var hr = {
						category: An,
						linear: On,
						logarithmic: Dn,
						radialLinear: qn,
						time: fr
					},
					pr = {
						datetime: "MMM D, YYYY, h:mm:ss a",
						millisecond: "h:mm:ss.SSS a",
						second: "h:mm:ss a",
						minute: "h:mm a",
						hour: "hA",
						day: "MMM D",
						week: "ll",
						month: "MMM YYYY",
						quarter: "[Q]Q - YYYY",
						year: "YYYY"
					};
				rn._date.override("function" == typeof e ? {
					_id: "moment",
					formats: function() {
						return pr
					},
					parse: function(t, n) {
						return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null
					},
					format: function(t, n) {
						return e(t).format(n)
					},
					add: function(t, n, r) {
						return e(t).add(n, r).valueOf()
					},
					diff: function(t, n, r) {
						return e(t).diff(e(n), r)
					},
					startOf: function(t, n, r) {
						return t = e(t), "isoWeek" === n ? t.isoWeekday(r).valueOf() : t.startOf(n).valueOf()
					},
					endOf: function(t, n) {
						return e(t).endOf(n).valueOf()
					},
					_create: function(t) {
						return e(t)
					}
				} : {}), B._set("global", {
					plugins: {
						filler: {
							propagate: !0
						}
					}
				});
				var _r = {
					dataset: function(e) {
						var t = e.fill,
							n = e.chart,
							r = n.getDatasetMeta(t),
							i = r && n.isDatasetVisible(t) && r.dataset._children || [],
							a = i.length || 0;
						return a ? function(e, t) {
							return t < a && i[t]._view || null
						} : null
					},
					boundary: function(e) {
						var t = e.boundary,
							n = t ? t.x : null,
							r = t ? t.y : null;
						return j.isArray(t) ? function(e, n) {
							return t[n]
						} : function(e) {
							return {
								x: null === n ? e.x : n,
								y: null === r ? e.y : r
							}
						}
					}
				};

				function mr(e, t, n) {
					var r, i = e._model || {},
						a = i.fill;
					if (void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a) return !1;
					if (!0 === a) return "origin";
					if (r = parseFloat(a, 10), isFinite(r) && Math.floor(r) === r) return "-" !== a[0] && "+" !== a[0] || (r = t + r), !(r === t || r < 0 || r >= n) && r;
					switch (a) {
						case "bottom":
							return "start";
						case "top":
							return "end";
						case "zero":
							return "origin";
						case "origin":
						case "start":
						case "end":
							return a;
						default:
							return !1
					}
				}

				function br(e) {
					return (e.el._scale || {}).getPointPositionForValue ? function(e) {
						var t, n, r, i, a, o = e.el._scale,
							s = o.options,
							u = o.chart.data.labels.length,
							c = e.fill,
							l = [];
						if (!u) return null;
						for (t = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, r = o.getPointPositionForValue(0, t), i = 0; i < u; ++i) a = "start" === c || "end" === c ? o.getPointPositionForValue(i, "start" === c ? t : n) : o.getBasePosition(i), s.gridLines.circular && (a.cx = r.x, a.cy = r.y, a.angle = o.getIndexAngle(i) - Math.PI / 2), l.push(a);
						return l
					}(e) : function(e) {
						var t, n = e.el._model || {},
							r = e.el._scale || {},
							i = e.fill,
							a = null;
						if (isFinite(i)) return null;
						if ("start" === i ? a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? a = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : r.getBasePixel && (a = r.getBasePixel()), null != a) {
							if (void 0 !== a.x && void 0 !== a.y) return a;
							if (j.isFinite(a)) return {
								x: (t = r.isHorizontal()) ? a : null,
								y: t ? null : a
							}
						}
						return null
					}(e)
				}

				function gr(e, t, n) {
					var r, i = e[t].fill,
						a = [t];
					if (!n) return i;
					for (; !1 !== i && -1 === a.indexOf(i);) {
						if (!isFinite(i)) return i;
						if (!(r = e[i])) return !1;
						if (r.visible) return i;
						a.push(i), i = r.fill
					}
					return !1
				}

				function vr(e) {
					var t = e.fill,
						n = "dataset";
					return !1 === t ? null : (isFinite(t) || (n = "boundary"), _r[n](e))
				}

				function yr(e) {
					return e && !e.skip
				}

				function Ar(e, t, n, r, i) {
					var a, o, s, u;
					if (r && i) {
						for (e.moveTo(t[0].x, t[0].y), a = 1; a < r; ++a) j.canvas.lineTo(e, t[a - 1], t[a]);
						if (void 0 === n[0].angle)
							for (e.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a) j.canvas.lineTo(e, n[a], n[a - 1], !0);
						else
							for (o = n[0].cx, s = n[0].cy, u = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), a = i - 1; a > 0; --a) e.arc(o, s, u, n[a].angle, n[a - 1].angle, !0)
					}
				}

				function Sr(e, t, n, r, i, a) {
					var o, s, u, c, l, f, d, h, p = t.length,
						_ = r.spanGaps,
						m = [],
						b = [],
						g = 0,
						v = 0;
					for (e.beginPath(), o = 0, s = p; o < s; ++o) l = n(c = t[u = o % p]._view, u, r), f = yr(c), d = yr(l), a && void 0 === h && f && (s = p + (h = o + 1)), f && d ? (g = m.push(c), v = b.push(l)) : g && v && (_ ? (f && m.push(c), d && b.push(l)) : (Ar(e, m, b, g, v), g = v = 0, m = [], b = []));
					Ar(e, m, b, g, v), e.closePath(), e.fillStyle = i, e.fill()
				}
				var wr = {
						id: "filler",
						afterDatasetsUpdate: function(e, t) {
							var n, r, i, a, o = (e.data.datasets || []).length,
								s = t.propagate,
								u = [];
							for (r = 0; r < o; ++r) a = null, (i = (n = e.getDatasetMeta(r)).dataset) && i._model && i instanceof Ae.Line && (a = {
								visible: e.isDatasetVisible(r),
								fill: mr(i, r, o),
								chart: e,
								el: i
							}), n.$filler = a, u.push(a);
							for (r = 0; r < o; ++r)(a = u[r]) && (a.fill = gr(u, r, s), a.boundary = br(a), a.mapper = vr(a))
						},
						beforeDatasetsDraw: function(e) {
							var t, n, r, i, a, o, s, u = e._getSortedVisibleDatasetMetas(),
								c = e.ctx;
							for (n = u.length - 1; n >= 0; --n)(t = u[n].$filler) && t.visible && (i = (r = t.el)._view, a = r._children || [], o = t.mapper, s = i.backgroundColor || B.global.defaultColor, o && s && a.length && (j.canvas.clipArea(c, e.chartArea), Sr(c, a, o, i, s, r._loop), j.canvas.unclipArea(c)))
						}
					},
					Er = j.rtl.getRtlAdapter,
					Tr = j.noop,
					Cr = j.valueOrDefault;

				function $r(e, t) {
					return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
				}
				B._set("global", {
					legend: {
						display: !0,
						position: "top",
						align: "center",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function(e, t) {
							var n = t.datasetIndex,
								r = this.chart,
								i = r.getDatasetMeta(n);
							i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null, r.update()
						},
						onHover: null,
						onLeave: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function(e) {
								var t = e.data.datasets,
									n = e.options.legend || {},
									r = n.labels && n.labels.usePointStyle;
								return e._getSortedDatasetMetas().map((function(n) {
									var i = n.controller.getStyle(r ? 0 : void 0);
									return {
										text: t[n.index].label,
										fillStyle: i.backgroundColor,
										hidden: !e.isDatasetVisible(n.index),
										lineCap: i.borderCapStyle,
										lineDash: i.borderDash,
										lineDashOffset: i.borderDashOffset,
										lineJoin: i.borderJoinStyle,
										lineWidth: i.borderWidth,
										strokeStyle: i.borderColor,
										pointStyle: i.pointStyle,
										rotation: i.rotation,
										datasetIndex: n.index
									}
								}), this)
							}
						}
					},
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data.datasets;
						for (i.setAttribute("class", e.id + "-legend"), t = 0, n = a.length; t < n; t++)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[t].backgroundColor, a[t].label && r.appendChild(document.createTextNode(a[t].label));
						return i.outerHTML
					}
				});
				var kr = q.extend({
					initialize: function(e) {
						var t = this;
						j.extend(t, e), t.legendHitBoxes = [], t._hoveredItem = null, t.doughnutMode = !1
					},
					beforeUpdate: Tr,
					update: function(e, t, n) {
						var r = this;
						return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
					},
					afterUpdate: Tr,
					beforeSetDimensions: Tr,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: Tr,
					beforeBuildLabels: Tr,
					buildLabels: function() {
						var e = this,
							t = e.options.labels || {},
							n = j.callback(t.generateLabels, [e.chart], e) || [];
						t.filter && (n = n.filter((function(n) {
							return t.filter(n, e.chart.data)
						}))), e.options.reverse && n.reverse(), e.legendItems = n
					},
					afterBuildLabels: Tr,
					beforeFit: Tr,
					fit: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							r = t.display,
							i = e.ctx,
							a = j.options._parseFont(n),
							o = a.size,
							s = e.legendHitBoxes = [],
							u = e.minSize,
							c = e.isHorizontal();
						if (c ? (u.width = e.maxWidth, u.height = r ? 10 : 0) : (u.width = r ? 10 : 0, u.height = e.maxHeight), r) {
							if (i.font = a.string, c) {
								var l = e.lineWidths = [0],
									f = 0;
								i.textAlign = "left", i.textBaseline = "middle", j.each(e.legendItems, (function(e, t) {
									var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
									(0 === t || l[l.length - 1] + r + 2 * n.padding > u.width) && (f += o + n.padding, l[l.length - (t > 0 ? 0 : 1)] = 0), s[t] = {
										left: 0,
										top: 0,
										width: r,
										height: o
									}, l[l.length - 1] += r + n.padding
								})), u.height += f
							} else {
								var d = n.padding,
									h = e.columnWidths = [],
									p = e.columnHeights = [],
									_ = n.padding,
									m = 0,
									b = 0;
								j.each(e.legendItems, (function(e, t) {
									var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
									t > 0 && b + o + 2 * d > u.height && (_ += m + n.padding, h.push(m), p.push(b), m = 0, b = 0), m = Math.max(m, r), b += o + d, s[t] = {
										left: 0,
										top: 0,
										width: r,
										height: o
									}
								})), _ += m, h.push(m), p.push(b), u.width += _
							}
							e.width = u.width, e.height = u.height
						} else e.width = u.width = e.height = u.height = 0
					},
					afterFit: Tr,
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					draw: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							r = B.global,
							i = r.defaultColor,
							a = r.elements.line,
							o = e.height,
							s = e.columnHeights,
							u = e.width,
							c = e.lineWidths;
						if (t.display) {
							var l, f = Er(t.rtl, e.left, e.minSize.width),
								d = e.ctx,
								h = Cr(n.fontColor, r.defaultFontColor),
								p = j.options._parseFont(n),
								_ = p.size;
							d.textAlign = f.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = h, d.fillStyle = h, d.font = p.string;
							var m = $r(n, _),
								b = e.legendHitBoxes,
								g = function(e, t, r) {
									if (!(isNaN(m) || m <= 0)) {
										d.save();
										var o = Cr(r.lineWidth, a.borderWidth);
										if (d.fillStyle = Cr(r.fillStyle, i), d.lineCap = Cr(r.lineCap, a.borderCapStyle), d.lineDashOffset = Cr(r.lineDashOffset, a.borderDashOffset), d.lineJoin = Cr(r.lineJoin, a.borderJoinStyle), d.lineWidth = o, d.strokeStyle = Cr(r.strokeStyle, i), d.setLineDash && d.setLineDash(Cr(r.lineDash, a.borderDash)), n && n.usePointStyle) {
											var s = m * Math.SQRT2 / 2,
												u = f.xPlus(e, m / 2),
												c = t + _ / 2;
											j.canvas.drawPoint(d, r.pointStyle, s, u, c, r.rotation)
										} else d.fillRect(f.leftForLtr(e, m), t, m, _), 0 !== o && d.strokeRect(f.leftForLtr(e, m), t, m, _);
										d.restore()
									}
								},
								v = function(e, r) {
									switch (t.align) {
										case "start":
											return n.padding;
										case "end":
											return e - r;
										default:
											return (e - r + n.padding) / 2
									}
								},
								y = e.isHorizontal();
							l = y ? {
								x: e.left + v(u, c[0]),
								y: e.top + n.padding,
								line: 0
							} : {
								x: e.left + n.padding,
								y: e.top + v(o, s[0]),
								line: 0
							}, j.rtl.overrideTextDirection(e.ctx, t.textDirection);
							var A = _ + n.padding;
							j.each(e.legendItems, (function(t, r) {
								var i = d.measureText(t.text).width,
									a = m + _ / 2 + i,
									h = l.x,
									p = l.y;
								f.setWidth(e.minSize.width), y ? r > 0 && h + a + n.padding > e.left + e.minSize.width && (p = l.y += A, l.line++, h = l.x = e.left + v(u, c[l.line])) : r > 0 && p + A > e.top + e.minSize.height && (h = l.x = h + e.columnWidths[l.line] + n.padding, l.line++, p = l.y = e.top + v(o, s[l.line]));
								var S = f.x(h);
								g(S, p, t), b[r].left = f.leftForLtr(S, b[r].width), b[r].top = p,
									function(e, t, n, r) {
										var i = _ / 2,
											a = f.xPlus(e, m + i),
											o = t + i;
										d.fillText(n.text, a, o), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(a, o), d.lineTo(f.xPlus(a, r), o), d.stroke())
									}(S, p, t, i), y ? l.x += a + n.padding : l.y += A
							})), j.rtl.restoreTextDirection(e.ctx, t.textDirection)
						}
					},
					_getLegendItemAt: function(e, t) {
						var n, r, i, a = this;
						if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom)
							for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
								if (e >= (r = i[n]).left && e <= r.left + r.width && t >= r.top && t <= r.top + r.height) return a.legendItems[n];
						return null
					},
					handleEvent: function(e) {
						var t, n = this,
							r = n.options,
							i = "mouseup" === e.type ? "click" : e.type;
						if ("mousemove" === i) {
							if (!r.onHover && !r.onLeave) return
						} else {
							if ("click" !== i) return;
							if (!r.onClick) return
						}
						t = n._getLegendItemAt(e.x, e.y), "click" === i ? t && r.onClick && r.onClick.call(n, e.native, t) : (r.onLeave && t !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), r.onHover && t && r.onHover.call(n, e.native, t))
					}
				});

				function Or(e, t) {
					var n = new kr({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					ht.configure(e, n, t), ht.addBox(e, n), e.legend = n
				}
				var xr = {
						id: "legend",
						_element: kr,
						beforeInit: function(e) {
							var t = e.options.legend;
							t && Or(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.legend,
								n = e.legend;
							t ? (j.mergeIf(t, B.global.legend), n ? (ht.configure(e, n, t), n.options = t) : Or(e, t)) : n && (ht.removeBox(e, n), delete e.legend)
						},
						afterEvent: function(e, t) {
							var n = e.legend;
							n && n.handleEvent(t)
						}
					},
					Pr = j.noop;
				B._set("global", {
					title: {
						display: !1,
						fontStyle: "bold",
						fullWidth: !0,
						padding: 10,
						position: "top",
						text: "",
						weight: 2e3
					}
				});
				var Mr = q.extend({
					initialize: function(e) {
						j.extend(this, e), this.legendHitBoxes = []
					},
					beforeUpdate: Pr,
					update: function(e, t, n) {
						var r = this;
						return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
					},
					afterUpdate: Pr,
					beforeSetDimensions: Pr,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: Pr,
					beforeBuildLabels: Pr,
					buildLabels: Pr,
					afterBuildLabels: Pr,
					beforeFit: Pr,
					fit: function() {
						var e, t = this,
							n = t.options,
							r = t.minSize = {},
							i = t.isHorizontal();
						n.display ? (e = (j.isArray(n.text) ? n.text.length : 1) * j.options._parseFont(n).lineHeight + 2 * n.padding, t.width = r.width = i ? t.maxWidth : e, t.height = r.height = i ? e : t.maxHeight) : t.width = r.width = t.height = r.height = 0
					},
					afterFit: Pr,
					isHorizontal: function() {
						var e = this.options.position;
						return "top" === e || "bottom" === e
					},
					draw: function() {
						var e = this,
							t = e.ctx,
							n = e.options;
						if (n.display) {
							var r, i, a, o = j.options._parseFont(n),
								s = o.lineHeight,
								u = s / 2 + n.padding,
								c = 0,
								l = e.top,
								f = e.left,
								d = e.bottom,
								h = e.right;
							t.fillStyle = j.valueOrDefault(n.fontColor, B.global.defaultFontColor), t.font = o.string, e.isHorizontal() ? (i = f + (h - f) / 2, a = l + u, r = h - f) : (i = "left" === n.position ? f + u : h - u, a = l + (d - l) / 2, r = d - l, c = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(i, a), t.rotate(c), t.textAlign = "center", t.textBaseline = "middle";
							var p = n.text;
							if (j.isArray(p))
								for (var _ = 0, m = 0; m < p.length; ++m) t.fillText(p[m], 0, _, r), _ += s;
							else t.fillText(p, 0, 0, r);
							t.restore()
						}
					}
				});

				function Ir(e, t) {
					var n = new Mr({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					ht.configure(e, n, t), ht.addBox(e, n), e.titleBlock = n
				}
				var Lr = {},
					Dr = wr,
					Br = xr,
					Nr = {
						id: "title",
						_element: Mr,
						beforeInit: function(e) {
							var t = e.options.title;
							t && Ir(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.title,
								n = e.titleBlock;
							t ? (j.mergeIf(t, B.global.title), n ? (ht.configure(e, n, t), n.options = t) : Ir(e, t)) : n && (ht.removeBox(e, n), delete e.titleBlock)
						}
					};
				for (var Rr in Lr.filler = Dr, Lr.legend = Br, Lr.title = Nr, en.helpers = j,
						function() {
							function e(e, t, n) {
								var r;
								return "string" == typeof e ? (r = parseInt(e, 10), -1 !== e.indexOf("%") && (r = r / 100 * t.parentNode[n])) : r = e, r
							}

							function t(e) {
								return null != e && "none" !== e
							}

							function n(n, r, i) {
								var a = document.defaultView,
									o = j._getParentNode(n),
									s = a.getComputedStyle(n)[r],
									u = a.getComputedStyle(o)[r],
									c = t(s),
									l = t(u),
									f = Number.POSITIVE_INFINITY;
								return c || l ? Math.min(c ? e(s, n, i) : f, l ? e(u, o, i) : f) : "none"
							}
							j.where = function(e, t) {
								if (j.isArray(e) && Array.prototype.filter) return e.filter(t);
								var n = [];
								return j.each(e, (function(e) {
									t(e) && n.push(e)
								})), n
							}, j.findIndex = Array.prototype.findIndex ? function(e, t, n) {
								return e.findIndex(t, n)
							} : function(e, t, n) {
								n = void 0 === n ? e : n;
								for (var r = 0, i = e.length; r < i; ++r)
									if (t.call(n, e[r], r, e)) return r;
								return -1
							}, j.findNextWhere = function(e, t, n) {
								j.isNullOrUndef(n) && (n = -1);
								for (var r = n + 1; r < e.length; r++) {
									var i = e[r];
									if (t(i)) return i
								}
							}, j.findPreviousWhere = function(e, t, n) {
								j.isNullOrUndef(n) && (n = e.length);
								for (var r = n - 1; r >= 0; r--) {
									var i = e[r];
									if (t(i)) return i
								}
							}, j.isNumber = function(e) {
								return !isNaN(parseFloat(e)) && isFinite(e)
							}, j.almostEquals = function(e, t, n) {
								return Math.abs(e - t) < n
							}, j.almostWhole = function(e, t) {
								var n = Math.round(e);
								return n - t <= e && n + t >= e
							}, j.max = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.max(e, t)
								}), Number.NEGATIVE_INFINITY)
							}, j.min = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.min(e, t)
								}), Number.POSITIVE_INFINITY)
							}, j.sign = Math.sign ? function(e) {
								return Math.sign(e)
							} : function(e) {
								return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
							}, j.toRadians = function(e) {
								return e * (Math.PI / 180)
							}, j.toDegrees = function(e) {
								return e * (180 / Math.PI)
							}, j._decimalPlaces = function(e) {
								if (j.isFinite(e)) {
									for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++;
									return n
								}
							}, j.getAngleFromPoint = function(e, t) {
								var n = t.x - e.x,
									r = t.y - e.y,
									i = Math.sqrt(n * n + r * r),
									a = Math.atan2(r, n);
								return a < -.5 * Math.PI && (a += 2 * Math.PI), {
									angle: a,
									distance: i
								}
							}, j.distanceBetweenPoints = function(e, t) {
								return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
							}, j.aliasPixel = function(e) {
								return e % 2 == 0 ? 0 : .5
							}, j._alignPixel = function(e, t, n) {
								var r = e.currentDevicePixelRatio,
									i = n / 2;
								return Math.round((t - i) * r) / r + i
							}, j.splineCurve = function(e, t, n, r) {
								var i = e.skip ? t : e,
									a = t,
									o = n.skip ? t : n,
									s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
									u = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
									c = s / (s + u),
									l = u / (s + u),
									f = r * (c = isNaN(c) ? 0 : c),
									d = r * (l = isNaN(l) ? 0 : l);
								return {
									previous: {
										x: a.x - f * (o.x - i.x),
										y: a.y - f * (o.y - i.y)
									},
									next: {
										x: a.x + d * (o.x - i.x),
										y: a.y + d * (o.y - i.y)
									}
								}
							}, j.EPSILON = Number.EPSILON || 1e-14, j.splineCurveMonotone = function(e) {
								var t, n, r, i, a, o, s, u, c, l = (e || []).map((function(e) {
										return {
											model: e._model,
											deltaK: 0,
											mK: 0
										}
									})),
									f = l.length;
								for (t = 0; t < f; ++t)
									if (!(r = l[t]).model.skip) {
										if (n = t > 0 ? l[t - 1] : null, (i = t < f - 1 ? l[t + 1] : null) && !i.model.skip) {
											var d = i.model.x - r.model.x;
											r.deltaK = 0 !== d ? (i.model.y - r.model.y) / d : 0
										}!n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
									} for (t = 0; t < f - 1; ++t) r = l[t], i = l[t + 1], r.model.skip || i.model.skip || (j.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (a = r.mK / r.deltaK, o = i.mK / r.deltaK, (u = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(u), r.mK = a * s * r.deltaK, i.mK = o * s * r.deltaK)));
								for (t = 0; t < f; ++t)(r = l[t]).model.skip || (n = t > 0 ? l[t - 1] : null, i = t < f - 1 ? l[t + 1] : null, n && !n.model.skip && (c = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - c, r.model.controlPointPreviousY = r.model.y - c * r.mK), i && !i.model.skip && (c = (i.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + c, r.model.controlPointNextY = r.model.y + c * r.mK))
							}, j.nextItem = function(e, t, n) {
								return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
							}, j.previousItem = function(e, t, n) {
								return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
							}, j.niceNum = function(e, t) {
								var n = Math.floor(j.log10(e)),
									r = e / Math.pow(10, n);
								return (t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
							}, j.requestAnimFrame = "undefined" == typeof window ? function(e) {
								e()
							} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
								return window.setTimeout(e, 1e3 / 60)
							}, j.getRelativePosition = function(e, t) {
								var n, r, i = e.originalEvent || e,
									a = e.target || e.srcElement,
									o = a.getBoundingClientRect(),
									s = i.touches;
								s && s.length > 0 ? (n = s[0].clientX, r = s[0].clientY) : (n = i.clientX, r = i.clientY);
								var u = parseFloat(j.getStyle(a, "padding-left")),
									c = parseFloat(j.getStyle(a, "padding-top")),
									l = parseFloat(j.getStyle(a, "padding-right")),
									f = parseFloat(j.getStyle(a, "padding-bottom")),
									d = o.right - o.left - u - l,
									h = o.bottom - o.top - c - f;
								return {
									x: n = Math.round((n - o.left - u) / d * a.width / t.currentDevicePixelRatio),
									y: r = Math.round((r - o.top - c) / h * a.height / t.currentDevicePixelRatio)
								}
							}, j.getConstraintWidth = function(e) {
								return n(e, "max-width", "clientWidth")
							}, j.getConstraintHeight = function(e) {
								return n(e, "max-height", "clientHeight")
							}, j._calculatePadding = function(e, t, n) {
								return (t = j.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10)
							}, j._getParentNode = function(e) {
								var t = e.parentNode;
								return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
							}, j.getMaximumWidth = function(e) {
								var t = j._getParentNode(e);
								if (!t) return e.clientWidth;
								var n = t.clientWidth,
									r = n - j._calculatePadding(t, "padding-left", n) - j._calculatePadding(t, "padding-right", n),
									i = j.getConstraintWidth(e);
								return isNaN(i) ? r : Math.min(r, i)
							}, j.getMaximumHeight = function(e) {
								var t = j._getParentNode(e);
								if (!t) return e.clientHeight;
								var n = t.clientHeight,
									r = n - j._calculatePadding(t, "padding-top", n) - j._calculatePadding(t, "padding-bottom", n),
									i = j.getConstraintHeight(e);
								return isNaN(i) ? r : Math.min(r, i)
							}, j.getStyle = function(e, t) {
								return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
							}, j.retinaScale = function(e, t) {
								var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
								if (1 !== n) {
									var r = e.canvas,
										i = e.height,
										a = e.width;
									r.height = i * n, r.width = a * n, e.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = i + "px", r.style.width = a + "px")
								}
							}, j.fontString = function(e, t, n) {
								return t + " " + e + "px " + n
							}, j.longestText = function(e, t, n, r) {
								var i = (r = r || {}).data = r.data || {},
									a = r.garbageCollect = r.garbageCollect || [];
								r.font !== t && (i = r.data = {}, a = r.garbageCollect = [], r.font = t), e.font = t;
								var o, s, u, c, l, f = 0,
									d = n.length;
								for (o = 0; o < d; o++)
									if (null != (c = n[o]) && !0 !== j.isArray(c)) f = j.measureText(e, i, a, f, c);
									else if (j.isArray(c))
									for (s = 0, u = c.length; s < u; s++) null == (l = c[s]) || j.isArray(l) || (f = j.measureText(e, i, a, f, l));
								var h = a.length / 2;
								if (h > n.length) {
									for (o = 0; o < h; o++) delete i[a[o]];
									a.splice(0, h)
								}
								return f
							}, j.measureText = function(e, t, n, r, i) {
								var a = t[i];
								return a || (a = t[i] = e.measureText(i).width, n.push(i)), a > r && (r = a), r
							}, j.numberOfLabelLines = function(e) {
								var t = 1;
								return j.each(e, (function(e) {
									j.isArray(e) && e.length > t && (t = e.length)
								})), t
							}, j.color = A ? function(e) {
								return e instanceof CanvasGradient && (e = B.global.defaultColor), A(e)
							} : function(e) {
								return console.error("Color.js not found!"), e
							}, j.getHoverColor = function(e) {
								return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : j.color(e).saturate(.5).darken(.1).rgbString()
							}
						}(), en._adapters = rn, en.Animation = K, en.animationService = X, en.controllers = Xe, en.DatasetController = ne, en.defaults = B, en.Element = q, en.elements = Ae, en.Interaction = it, en.layouts = ht, en.platform = Pt, en.plugins = Mt, en.Scale = vn, en.scaleService = It, en.Ticks = an, en.Tooltip = zt, en.helpers.each(hr, (function(e, t) {
							en.scaleService.registerScaleType(t, e, e._defaults)
						})), Lr) Lr.hasOwnProperty(Rr) && en.plugins.register(Lr[Rr]);
				en.platform.initialize();
				var Fr = en;
				return "undefined" != typeof window && (window.Chart = en), en.Chart = en, en.Legend = Lr.legend._element, en.Title = Lr.title._element, en.pluginService = en.plugins, en.PluginBase = en.Element.extend({}), en.canvasHelpers = en.helpers.canvas, en.layoutService = en.layouts, en.LinearScaleBase = Tn, en.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) {
					en[e] = function(t, n) {
						return new en(t, en.helpers.merge(n || {}, {
							type: e.charAt(0).toLowerCase() + e.slice(1)
						}))
					}
				})), Fr
			}(function() {
				try {
					return n("c1df")
				} catch (e) {}
			}())
		},
		"31bb": function(e, t, n) {
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
			}), t.CastStatusOverlay = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.statusLabel = new a.Label({
							cssClass: "ui-cast-status-label"
						}), n.config = n.mergeConfig(t, {
							cssClass: "ui-cast-status-overlay",
							components: [n.statusLabel],
							hidden: !0
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), t.on(t.exports.PlayerEvent.CastWaitingForDevice, (function(e) {
							r.show();
							var t = e.castPayload.deviceName;
							r.statusLabel.setText(o.i18n.getLocalizer("connectingTo", {
								castDeviceName: t
							}))
						})), t.on(t.exports.PlayerEvent.CastStarted, (function(e) {
							r.show();
							var t = e.deviceName;
							r.statusLabel.setText(o.i18n.getLocalizer("playingOn", {
								castDeviceName: t
							}))
						})), t.on(t.exports.PlayerEvent.CastStopped, (function(e) {
							r.hide()
						}))
					}, t
				}(i.Container);
			t.CastStatusOverlay = s
		},
		"31bd": function(e, t) {
			function n(e, t) {
				var r = {
					name: e.name,
					path: e.path,
					hash: e.hash,
					query: e.query,
					params: e.params,
					fullPath: e.fullPath,
					meta: e.meta
				};
				return t && (r.from = n(t)), Object.freeze(r)
			}
			t.sync = function(e, t, r) {
				var i = (r || {}).moduleName || "route";
				e.registerModule(i, {
					namespaced: !0,
					state: n(t.currentRoute),
					mutations: {
						ROUTE_CHANGED: function(t, r) {
							e.state[i] = n(r.to, r.from)
						}
					}
				});
				var a, o = !1,
					s = e.watch((function(e) {
						return e[i]
					}), (function(e) {
						var n = e.fullPath;
						n !== a && (null != a && (o = !0, t.push(e)), a = n)
					}), {
						sync: !0
					}),
					u = t.afterEach((function(t, n) {
						o ? o = !1 : (a = t.fullPath, e.commit(i + "/ROUTE_CHANGED", {
							to: t,
							from: n
						}))
					}));
				return function() {
					null != u && u(), null != s && s(), e.unregisterModule(i)
				}
			}
		},
		3280: function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("e58c"),
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("lastIndexOf", (function(e) {
				return i.apply(a(this), arguments)
			}))
		},
		"32ba": function(e, t, n) {
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
			}), t.PlaybackToggleOverlay = void 0;
			var i = n("fdec"),
				a = n("ab39"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.playbackToggleButton = new a.HugePlaybackToggleButton, n.config = n.mergeConfig(t, {
							cssClass: "ui-playbacktoggle-overlay",
							components: [n.playbackToggleButton]
						}, n.config), n
					}
					return r(t, e), t
				}(i.Container);
			t.PlaybackToggleOverlay = o
		},
		3410: function(e, t, n) {
			var r = n("23e7"),
				i = n("d039"),
				a = n("7b0b"),
				o = n("e163"),
				s = n("e177");
			r({
				target: "Object",
				stat: !0,
				forced: i((function() {
					o(1)
				})),
				sham: !s
			}, {
				getPrototypeOf: function(e) {
					return o(a(e))
				}
			})
		},
		"342f": function(e, t, n) {
			var r = n("d066");
			e.exports = r("navigator", "userAgent") || ""
		},
		"35a1": function(e, t, n) {
			var r = n("f5df"),
				i = n("3f8c"),
				a = n("b622")("iterator");
			e.exports = function(e) {
				if (null != e) return e[a] || e["@@iterator"] || i[r(e)]
			}
		},
		3729: function(e, t, n) {
			var r = n("9e69"),
				i = n("00fd"),
				a = n("29f3"),
				o = r ? r.toStringTag : void 0;
			e.exports = function(e) {
				return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e)
			}
		},
		"37aa": function(e, t, n) {
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
			}), t.ErrorMessageOverlay = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("0ae2"),
				s = n("b57d"),
				u = n("0fd0"),
				c = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.errorLabel = new a.Label({
							cssClass: "ui-errormessage-label"
						}), n.tvNoiseBackground = new o.TvNoiseCanvas, n.config = n.mergeConfig(t, {
							cssClass: "ui-errormessage-overlay",
							components: [n.tvNoiseBackground, n.errorLabel],
							hidden: !0
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = this.getConfig(),
							a = function(e, t) {
								var a = function(e, t) {
									if (e) {
										if ("function" == typeof e) return e(t);
										if (e[t.code]) {
											var n = e[t.code];
											return "string" == typeof n ? n : n(t)
										}
									}
								}(n.getConfig().errorMessages || i.messages, e);
								a && (t = a), r.errorLabel.setText(t), r.tvNoiseBackground.start(), r.show()
							};
						if (u.isMobileV3PlayerAPI(t)) {
							var o = function(e) {
								var t = s.ErrorUtils.defaultMobileV3ErrorMessageTranslator(e);
								a(e, t)
							};
							t.on(u.MobileV3PlayerEvent.PlayerError, o), t.on(u.MobileV3PlayerEvent.SourceError, o)
						} else t.on(t.exports.PlayerEvent.Error, (function(e) {
							var t = s.ErrorUtils.defaultWebErrorMessageTranslator(e);
							a(e, t)
						}));
						t.on(t.exports.PlayerEvent.SourceLoaded, (function(e) {
							r.isShown() && (r.tvNoiseBackground.stop(), r.hide())
						}))
					}, t.prototype.release = function() {
						e.prototype.release.call(this), this.tvNoiseBackground.stop()
					}, t
				}(i.Container);
			t.ErrorMessageOverlay = c
		},
		"37e8": function(e, t, n) {
			var r = n("83ab"),
				i = n("9bf2"),
				a = n("825a"),
				o = n("df75");
			e.exports = r ? Object.defineProperties : function(e, t) {
				a(e);
				for (var n, r = o(t), s = r.length, u = 0; s > u;) i.f(e, n = r[u++], t[n]);
				return e
			}
		},
		3835: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0");
			var r = n("06c5");

			function i(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var n = [],
							r = !0,
							i = !1,
							a = void 0;
						try {
							for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
						} catch (e) {
							i = !0, a = e
						} finally {
							try {
								r || null == s.return || s.return()
							} finally {
								if (i) throw a
							}
						}
						return n
					}
				}(e, t) || Object(r.a)(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		},
		"387f": function(e, t, n) {
			"use strict";
			e.exports = function(e, t, n, r, i) {
				return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: this.config,
						code: this.code
					}
				}, e
			}
		},
		3886: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-ca", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "YYYY-MM-DD",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
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
					}
				})
			}(n("c1df"))
		},
		3934: function(e, t, n) {
			"use strict";
			var r = n("c532");
			e.exports = r.isStandardBrowserEnv() ? function() {
				var e, t = /(msie|trident)/i.test(navigator.userAgent),
					n = document.createElement("a");

				function i(e) {
					var r = e;
					return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
					}
				}
				return e = i(window.location.href),
					function(t) {
						var n = r.isString(t) ? i(t) : t;
						return n.protocol === e.protocol && n.host === e.host
					}
			}() : function() {
				return !0
			}
		},
		"39a6": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-gb", {
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
		"39bd": function(e, t, n) {
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
					};

				function r(e, t, n, r) {
					var i = "";
					if (t) switch (n) {
						case "s":
							i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
							break;
						case "ss":
							i = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
							break;
						case "m":
							i = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
							break;
						case "mm":
							i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
							break;
						case "h":
							i = "à¤à¤• à¤¤à¤¾à¤¸";
							break;
						case "hh":
							i = "%d à¤¤à¤¾à¤¸";
							break;
						case "d":
							i = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
							break;
						case "dd":
							i = "%d à¤¦à¤¿à¤µà¤¸";
							break;
						case "M":
							i = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
							break;
						case "MM":
							i = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
							break;
						case "y":
							i = "à¤à¤• à¤µà¤°à¥à¤·";
							break;
						case "yy":
							i = "%d à¤µà¤°à¥à¤·à¥‡"
					} else switch (n) {
						case "s":
							i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
							break;
						case "ss":
							i = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
							break;
						case "m":
							i = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
							break;
						case "mm":
							i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
							break;
						case "h":
							i = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
							break;
						case "hh":
							i = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
							break;
						case "d":
							i = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
							break;
						case "dd":
							i = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
							break;
						case "M":
							i = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
							break;
						case "MM":
							i = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
							break;
						case "y":
							i = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
							break;
						case "yy":
							i = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
					}
					return i.replace(/%d/i, e)
				}
				e.defineLocale("mr", {
					months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
					monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
					monthsParseExact: !0,
					weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
					weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
					weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
					longDateFormat: {
						LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
						LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
						LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
					},
					calendar: {
						sameDay: "[à¤†à¤œ] LT",
						nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à¤•à¤¾à¤²] LT",
						lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sà¤®à¤§à¥à¤¯à¥‡",
						past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
						s: r,
						ss: r,
						m: r,
						mm: r,
						h: r,
						hh: r,
						d: r,
						dd: r,
						M: r,
						MM: r,
						y: r,
						yy: r
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
					meridiemParse: /à¤ªà¤¹à¤¾à¤Ÿà¥‡|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€|à¤°à¤¾à¤¤à¥à¤°à¥€/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤ªà¤¹à¤¾à¤Ÿà¥‡" === t || "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t || "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t || "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e >= 12 ? e : e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e >= 0 && e < 6 ? "à¤ªà¤¹à¤¾à¤Ÿà¥‡" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3a39": function(e, t, n) {
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
					};
				e.defineLocale("ne", {
					months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
					monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
					monthsParseExact: !0,
					weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
					weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
					weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
						LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
						LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
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
					meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
					},
					calendar: {
						sameDay: "[à¤†à¤œ] LT",
						nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
						nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
						lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
						lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sà¤®à¤¾",
						past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
						s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
						ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
						m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
						mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
						h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
						hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
						d: "à¤à¤• à¤¦à¤¿à¤¨",
						dd: "%d à¤¦à¤¿à¤¨",
						M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
						MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
						y: "à¤à¤• à¤¬à¤°à¥à¤·",
						yy: "%d à¤¬à¤°à¥à¤·"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3a6c": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-mo", {
					months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
					monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
					weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
					weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
					weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "YYYYå¹´MæœˆDæ—¥",
						LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
						LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
						l: "D/M/YYYY",
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
						return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1130 ? "ä¸Šåˆ" : r < 1230 ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
					},
					calendar: {
						sameDay: "[ä»Šå¤©] LT",
						nextDay: "[æ˜Žå¤©] LT",
						nextWeek: "[ä¸‹]dddd LT",
						lastDay: "[æ˜¨å¤©] LT",
						lastWeek: "[ä¸Š]dddd LT",
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
						future: "%så…§",
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
		"3a7b": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").findIndex,
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("findIndex", (function(e) {
				return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
			}))
		},
		"3b1b": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-ÑƒÐ¼",
					1: "-ÑƒÐ¼",
					2: "-ÑŽÐ¼",
					3: "-ÑŽÐ¼",
					4: "-ÑƒÐ¼",
					5: "-ÑƒÐ¼",
					6: "-ÑƒÐ¼",
					7: "-ÑƒÐ¼",
					8: "-ÑƒÐ¼",
					9: "-ÑƒÐ¼",
					10: "-ÑƒÐ¼",
					12: "-ÑƒÐ¼",
					13: "-ÑƒÐ¼",
					20: "-ÑƒÐ¼",
					30: "-ÑŽÐ¼",
					40: "-ÑƒÐ¼",
					50: "-ÑƒÐ¼",
					60: "-ÑƒÐ¼",
					70: "-ÑƒÐ¼",
					80: "-ÑƒÐ¼",
					90: "-ÑƒÐ¼",
					100: "-ÑƒÐ¼"
				};
				e.defineLocale("tg", {
					months: {
						format: "ÑÐ½Ð²Ð°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€Ð°Ð»Ð¸_Ð¼Ð°Ñ€Ñ‚Ð¸_Ð°Ð¿Ñ€ÐµÐ»Ð¸_Ð¼Ð°Ð¹Ð¸_Ð¸ÑŽÐ½Ð¸_Ð¸ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚Ð¸_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ð¸_Ð¾ÐºÑ‚ÑÐ±Ñ€Ð¸_Ð½Ð¾ÑÐ±Ñ€Ð¸_Ð´ÐµÐºÐ°Ð±Ñ€Ð¸".split("_"),
						standalone: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_")
					},
					monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
					weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
					weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
					weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
						nextDay: "[Ð¤Ð°Ñ€Ð´Ð¾ ÑÐ¾Ð°Ñ‚Ð¸] LT",
						lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
						nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
						lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
						past: "%s Ð¿ÐµÑˆ",
						s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
						m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
						mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
						h: "ÑÐº ÑÐ¾Ð°Ñ‚",
						hh: "%d ÑÐ¾Ð°Ñ‚",
						d: "ÑÐº Ñ€Ó¯Ð·",
						dd: "%d Ñ€Ó¯Ð·",
						M: "ÑÐº Ð¼Ð¾Ò³",
						MM: "%d Ð¼Ð¾Ò³",
						y: "ÑÐº ÑÐ¾Ð»",
						yy: "%d ÑÐ¾Ð»"
					},
					meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
					ordinal: function(e) {
						return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"3bbe": function(e, t, n) {
			var r = n("861d");
			e.exports = function(e) {
				if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
				return e
			}
		},
		"3c0d": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
					n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
					r = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
					i = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

				function a(e) {
					return e > 1 && e < 5 && 1 != ~~(e / 10)
				}

				function o(e, t, n, r) {
					var i = e + " ";
					switch (n) {
						case "s":
							return t || r ? "pÃ¡r sekund" : "pÃ¡r sekundami";
						case "ss":
							return t || r ? i + (a(e) ? "sekundy" : "sekund") : i + "sekundami";
						case "m":
							return t ? "minuta" : r ? "minutu" : "minutou";
						case "mm":
							return t || r ? i + (a(e) ? "minuty" : "minut") : i + "minutami";
						case "h":
							return t ? "hodina" : r ? "hodinu" : "hodinou";
						case "hh":
							return t || r ? i + (a(e) ? "hodiny" : "hodin") : i + "hodinami";
						case "d":
							return t || r ? "den" : "dnem";
						case "dd":
							return t || r ? i + (a(e) ? "dny" : "dnÃ­") : i + "dny";
						case "M":
							return t || r ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
						case "MM":
							return t || r ? i + (a(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : i + "mÄ›sÃ­ci";
						case "y":
							return t || r ? "rok" : "rokem";
						case "yy":
							return t || r ? i + (a(e) ? "roky" : "let") : i + "lety"
					}
				}
				e.defineLocale("cs", {
					months: t,
					monthsShort: n,
					monthsRegex: i,
					monthsShortRegex: i,
					monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
					monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
					monthsParse: r,
					longMonthsParse: r,
					shortMonthsParse: r,
					weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
					weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
					weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd D. MMMM YYYY H:mm",
						l: "D. M. YYYY"
					},
					calendar: {
						sameDay: "[dnes v] LT",
						nextDay: "[zÃ­tra v] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v nedÄ›li v] LT";
								case 1:
								case 2:
									return "[v] dddd [v] LT";
								case 3:
									return "[ve stÅ™edu v] LT";
								case 4:
									return "[ve Ätvrtek v] LT";
								case 5:
									return "[v pÃ¡tek v] LT";
								case 6:
									return "[v sobotu v] LT"
							}
						},
						lastDay: "[vÄera v] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[minulou nedÄ›li v] LT";
								case 1:
								case 2:
									return "[minulÃ©] dddd [v] LT";
								case 3:
									return "[minulou stÅ™edu v] LT";
								case 4:
								case 5:
									return "[minulÃ½] dddd [v] LT";
								case 6:
									return "[minulou sobotu v] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "pÅ™ed %s",
						s: o,
						ss: o,
						m: o,
						mm: o,
						h: o,
						hh: o,
						d: o,
						dd: o,
						M: o,
						MM: o,
						y: o,
						yy: o
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
		"3c4e": function(e, t, n) {
			"use strict";
			var r = function(e) {
				return function(e) {
					return !!e && "object" == typeof e
				}(e) && ! function(e) {
					var t = Object.prototype.toString.call(e);
					return "[object RegExp]" === t || "[object Date]" === t || function(e) {
						return e.$$typeof === i
					}(e)
				}(e)
			};
			var i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

			function a(e, t) {
				return !1 !== t.clone && t.isMergeableObject(e) ? l(function(e) {
					return Array.isArray(e) ? [] : {}
				}(e), e, t) : e
			}

			function o(e, t, n) {
				return e.concat(t).map((function(e) {
					return a(e, n)
				}))
			}

			function s(e) {
				return Object.keys(e).concat(function(e) {
					return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
						return e.propertyIsEnumerable(t)
					})) : []
				}(e))
			}

			function u(e, t) {
				try {
					return t in e
				} catch (e) {
					return !1
				}
			}

			function c(e, t, n) {
				var r = {};
				return n.isMergeableObject(e) && s(e).forEach((function(t) {
					r[t] = a(e[t], n)
				})), s(t).forEach((function(i) {
					(function(e, t) {
						return u(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
					})(e, i) || (u(e, i) && n.isMergeableObject(t[i]) ? r[i] = function(e, t) {
						if (!t.customMerge) return l;
						var n = t.customMerge(e);
						return "function" == typeof n ? n : l
					}(i, n)(e[i], t[i], n) : r[i] = a(t[i], n))
				})), r
			}

			function l(e, t, n) {
				(n = n || {}).arrayMerge = n.arrayMerge || o, n.isMergeableObject = n.isMergeableObject || r, n.cloneUnlessOtherwiseSpecified = a;
				var i = Array.isArray(t);
				return i === Array.isArray(e) ? i ? n.arrayMerge(e, t, n) : c(e, t, n) : a(t, n)
			}
			l.all = function(e, t) {
				if (!Array.isArray(e)) throw new Error("first argument should be an array");
				return e.reduce((function(e, n) {
					return l(e, n, t)
				}), {})
			};
			var f = l;
			e.exports = f
		},
		"3c5d": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("50c4"),
				a = n("182d"),
				o = n("7b0b"),
				s = n("d039"),
				u = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("set", (function(e) {
				u(this);
				var t = a(arguments.length > 1 ? arguments[1] : void 0, 1),
					n = this.length,
					r = o(e),
					s = i(r.length),
					c = 0;
				if (s + t > n) throw RangeError("Wrong length");
				for (; c < s;) this[t + c] = r[c++]
			}), s((function() {
				new Int8Array(1).set({})
			})))
		},
		"3ca3": function(e, t, n) {
			"use strict";
			var r = n("6547").charAt,
				i = n("69f3"),
				a = n("7dd0"),
				o = "String Iterator",
				s = i.set,
				u = i.getterFor(o);
			a(String, "String", (function(e) {
				s(this, {
					type: o,
					string: String(e),
					index: 0
				})
			}), (function() {
				var e, t = u(this),
					n = t.string,
					i = t.index;
				return i >= n.length ? {
					value: void 0,
					done: !0
				} : (e = r(n, i), t.index += e.length, {
					value: e,
					done: !1
				})
			}))
		},
		"3d3d": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.TimelineMarkersHandler = void 0;
			var r = n("571d"),
				i = n("4344"),
				a = n("c6d3"),
				o = function() {
					function e(e, t, n) {
						this.config = e, this.getSeekBarWidth = t, this.markersContainer = n, this.timelineMarkers = []
					}
					return e.prototype.initialize = function(e, t) {
						this.player = e, this.uimanager = t, this.configureMarkers()
					}, e.prototype.configureMarkers = function() {
						var e = this;
						this.player.on(this.player.exports.PlayerEvent.SourceUnloaded, (function() {
							return e.clearMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.AdBreakStarted, (function() {
							return e.clearMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.AdBreakFinished, (function() {
							return e.updateMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.PlayerResized, (function() {
							return e.updateMarkersDOM()
						})), this.player.on(this.player.exports.PlayerEvent.SourceLoaded, (function() {
							e.player.isLive() && (e.player.on(e.player.exports.PlayerEvent.TimeChanged, (function() {
								return e.updateMarkers()
							})), e.configureLivePausedTimeshiftUpdater((function() {
								return e.updateMarkers()
							})))
						})), this.uimanager.getConfig().events.onUpdated.subscribe((function() {
							return e.updateMarkers()
						})), this.uimanager.onRelease.subscribe((function() {
							return e.uimanager.getConfig().events.onUpdated.unsubscribe((function() {
								return e.updateMarkers()
							}))
						})), this.updateMarkers()
					}, e.prototype.getMarkerAtPosition = function(e) {
						var t = this.config.snappingRange;
						return this.timelineMarkers.find((function(n) {
							var r = n.duration > 0 && e >= n.position - t && e <= n.position + n.duration + t,
								i = e >= n.position - t && e <= n.position + t;
							return r || i
						})) || null
					}, e.prototype.clearMarkers = function() {
						this.timelineMarkers = [], this.markersContainer.empty()
					}, e.prototype.removeMarkerFromConfig = function(e) {
						this.uimanager.getConfig().metadata.markers = this.uimanager.getConfig().metadata.markers.filter((function(t) {
							return e !== t
						}))
					}, e.prototype.filterRemovedMarkers = function() {
						var e = this;
						this.timelineMarkers = this.timelineMarkers.filter((function(t) {
							var n = e.uimanager.getConfig().metadata.markers.find((function(e) {
								return t.marker === e
							}));
							return n || e.removeMarkerFromDOM(t), n
						}))
					}, e.prototype.removeMarkerFromDOM = function(e) {
						e.element && e.element.remove()
					}, e.prototype.updateMarkers = function() {
						var e = this;
						! function(e, t) {
							var n = e.getDuration() !== 1 / 0 || e.isLive(),
								r = t.getConfig().metadata.markers.length > 0;
							return n && r
						}(this.player, this.uimanager) ? this.clearMarkers(): (this.filterRemovedMarkers(), this.uimanager.getConfig().metadata.markers.forEach((function(t) {
							var n = function(e, t) {
									var n = u(e),
										r = 100 / n * s(t, e, n),
										i = 100 / n * t.duration;
									return r < 0 && !isNaN(i) && (i += r), 100 - r < i && (i = 100 - r), {
										markerDuration: i,
										markerPosition: r
									}
								}(e.player, t),
								r = n.markerPosition,
								i = n.markerDuration;
							if (function(e, t) {
									return (t < 0 || isNaN(t)) && e < 0
								}(r, i)) e.removeMarkerFromConfig(t);
							else if (r <= 100) {
								var a = e.timelineMarkers.find((function(e) {
									return e.marker === t
								}));
								if (a) a.position = r, a.duration = i, e.updateMarkerDOM(a);
								else {
									var o = {
										marker: t,
										position: r,
										duration: i
									};
									e.timelineMarkers.push(o), e.createMarkerDOM(o)
								}
							}
						})))
					}, e.prototype.getMarkerCssProperties = function(e) {
						var t = this.getSeekBarWidth(),
							n = {
								transform: "translateX(" + t / 100 * (e.position < 0 ? 0 : e.position) + "px)"
							};
						if (e.duration > 0) {
							var r = Math.round(t / 100 * e.duration);
							n.width = r + "px"
						}
						return n
					}, e.prototype.updateMarkerDOM = function(e) {
						e.element.css(this.getMarkerCssProperties(e))
					}, e.prototype.createMarkerDOM = function(e) {
						var t = this,
							n = ["seekbar-marker"].concat(e.marker.cssClasses || []).map((function(e) {
								return t.prefixCss(e)
							})),
							i = new r.DOM("div", {
								class: n.join(" "),
								"data-marker-time": String(e.marker.time),
								"data-marker-title": String(e.marker.title)
							}).css(this.getMarkerCssProperties(e));
						if (e.marker.imageUrl) {
							var a = new r.DOM("img", {
								class: this.prefixCss("seekbar-marker-image"),
								src: e.marker.imageUrl
							}).on("error", (function() {
								a.remove()
							}));
							i.append(a)
						}
						e.element = i, this.markersContainer.append(i)
					}, e.prototype.updateMarkersDOM = function() {
						var e = this;
						this.timelineMarkers.forEach((function(t) {
							t.element ? e.updateMarkerDOM(t) : e.createMarkerDOM(t)
						}))
					}, e.prototype.configureLivePausedTimeshiftUpdater = function(e) {
						var t = this;
						this.pausedTimeshiftUpdater = new a.Timeout(1e3, e, !0), this.player.on(this.player.exports.PlayerEvent.Paused, (function() {
							t.player.isLive() && t.player.getMaxTimeShift() < 0 && t.pausedTimeshiftUpdater.start()
						})), this.player.on(this.player.exports.PlayerEvent.Play, (function() {
							return t.pausedTimeshiftUpdater.clear()
						})), this.player.on(this.player.exports.PlayerEvent.Destroy, (function() {
							return t.pausedTimeshiftUpdater.clear()
						}))
					}, e.prototype.prefixCss = function(e) {
						return this.config.cssPrefix + "-" + e
					}, e
				}();

			function s(e, t, n) {
				return t.isLive() ? n - (i.PlayerUtils.getSeekableRangeRespectingLive(t).end - e.time) : e.time
			}

			function u(e) {
				if (!e.isLive()) return e.getDuration();
				var t = i.PlayerUtils.getSeekableRangeRespectingLive(e),
					n = t.start;
				return t.end - n
			}
			t.TimelineMarkersHandler = o
		},
		"3d54": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Manager = void 0;
			const r = n("94ac"),
				i = n("7851"),
				a = n("8205"),
				o = n("072b"),
				s = n("0b64"),
				u = n("e13a"),
				c = n("c7b0")("socket.io-client:manager");
			class l extends u.StrictEventEmitter {
				constructor(e, t) {
					super(), this.nsps = {}, this.subs = [], e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new s({
						min: this.reconnectionDelay(),
						max: this.reconnectionDelayMax(),
						jitter: this.randomizationFactor()
					}), this.timeout(null == t.timeout ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
					const n = t.parser || a;
					this.encoder = new n.Encoder, this.decoder = new n.Decoder, this._autoConnect = !1 !== t.autoConnect, this._autoConnect && this.open()
				}
				reconnection(e) {
					return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
				}
				reconnectionAttempts(e) {
					return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
				}
				reconnectionDelay(e) {
					var t;
					return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
				}
				randomizationFactor(e) {
					var t;
					return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
				}
				reconnectionDelayMax(e) {
					var t;
					return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
				}
				timeout(e) {
					return arguments.length ? (this._timeout = e, this) : this._timeout
				}
				maybeReconnectOnOpen() {
					!this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
				}
				open(e) {
					if (c("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
					c("opening %s", this.uri), this.engine = r(this.uri, this.opts);
					const t = this.engine,
						n = this;
					this._readyState = "opening", this.skipReconnect = !1;
					const i = o.on(t, "open", (function() {
							n.onopen(), e && e()
						})),
						a = o.on(t, "error", t => {
							c("error"), n.cleanup(), n._readyState = "closed", this.emitReserved("error", t), e ? e(t) : n.maybeReconnectOnOpen()
						});
					if (!1 !== this._timeout) {
						const e = this._timeout;
						c("connect attempt will timeout after %d", e), 0 === e && i();
						const n = setTimeout(() => {
							c("connect attempt timed out after %d", e), i(), t.close(), t.emit("error", new Error("timeout"))
						}, e);
						this.opts.autoUnref && n.unref(), this.subs.push((function() {
							clearTimeout(n)
						}))
					}
					return this.subs.push(i), this.subs.push(a), this
				}
				connect(e) {
					return this.open(e)
				}
				onopen() {
					c("open"), this.cleanup(), this._readyState = "open", this.emitReserved("open");
					const e = this.engine;

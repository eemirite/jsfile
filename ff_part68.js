							t.FormulaBlot = f, t.default = d
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}

							function a(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}

							function o(e, t) {
								if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
								e.prototype = Object.create(t && t.prototype, {
									constructor: {
										value: e,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.CodeToken = t.CodeBlock = void 0;
							var s = function() {
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
								u = r(n(0)),
								c = r(n(5)),
								l = r(n(9)),
								f = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), s(t, [{
										key: "replaceWith",
										value: function(e) {
											this.domNode.textContent = this.domNode.textContent, this.attach(),
												function e(t, n, r) {
													null === t && (t = Function.prototype);
													var i = Object.getOwnPropertyDescriptor(t, n);
													if (void 0 === i) {
														var a = Object.getPrototypeOf(t);
														return null === a ? void 0 : e(a, n, r)
													}
													if ("value" in i) return i.value;
													var o = i.get;
													return void 0 !== o ? o.call(r) : void 0
												}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replaceWith", this).call(this, e)
										}
									}, {
										key: "highlight",
										value: function(e) {
											var t = this.domNode.textContent;
											this.cachedText !== t && ((t.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = e(t), this.domNode.normalize(), this.attach()), this.cachedText = t)
										}
									}]), t
								}(r(n(13)).default);
							f.className = "ql-syntax";
							var d = new u.default.Attributor.Class("token", "hljs", {
									scope: u.default.Scope.INLINE
								}),
								h = function(e) {
									function t(e, n) {
										i(this, t);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
										var o = null;
										return r.quill.on(c.default.events.SCROLL_OPTIMIZE, (function() {
											clearTimeout(o), o = setTimeout((function() {
												r.highlight(), o = null
											}), r.options.interval)
										})), r.highlight(), r
									}
									return o(t, e), s(t, null, [{
										key: "register",
										value: function() {
											c.default.register(d, !0), c.default.register(f, !0)
										}
									}]), s(t, [{
										key: "highlight",
										value: function() {
											var e = this;
											if (!this.quill.selection.composing) {
												this.quill.update(c.default.sources.USER);
												var t = this.quill.getSelection();
												this.quill.scroll.descendants(f).forEach((function(t) {
													t.highlight(e.options.highlight)
												})), this.quill.update(c.default.sources.SILENT), null != t && this.quill.setSelection(t, c.default.sources.SILENT)
											}
										}
									}]), t
								}(l.default);
							h.DEFAULTS = {
								highlight: null == window.hljs ? null : function(e) {
									return window.hljs.highlightAuto(e).value
								},
								interval: 1e3
							}, t.CodeBlock = f, t.CodeToken = d, t.default = h
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
						}, function(e, t) {
							e.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
						}, function(e, t) {
							e.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}

							function a(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}

							function o(e, t) {
								if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
								e.prototype = Object.create(t && t.prototype, {
									constructor: {
										value: e,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.BubbleTooltip = void 0;
							var s = function e(t, n, r) {
									null === t && (t = Function.prototype);
									var i = Object.getOwnPropertyDescriptor(t, n);
									if (void 0 === i) {
										var a = Object.getPrototypeOf(t);
										return null === a ? void 0 : e(a, n, r)
									}
									if ("value" in i) return i.value;
									var o = i.get;
									return void 0 !== o ? o.call(r) : void 0
								},
								u = function() {
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
								c = r(n(3)),
								l = r(n(8)),
								f = n(43),
								d = r(f),
								h = n(15),
								p = r(n(41)),
								_ = [
									["bold", "italic", "link"],
									[{
										header: 1
									}, {
										header: 2
									}, "blockquote"]
								],
								m = function(e) {
									function t(e, n) {
										i(this, t), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = _);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return r.quill.container.classList.add("ql-bubble"), r
									}
									return o(t, e), u(t, [{
										key: "extendToolbar",
										value: function(e) {
											this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(e.container), this.buildButtons([].slice.call(e.container.querySelectorAll("button")), p.default), this.buildPickers([].slice.call(e.container.querySelectorAll("select")), p.default)
										}
									}]), t
								}(d.default);
							m.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, {
								modules: {
									toolbar: {
										handlers: {
											link: function(e) {
												e ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
											}
										}
									}
								}
							});
							var b = function(e) {
								function t(e, n) {
									i(this, t);
									var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.quill.on(l.default.events.EDITOR_CHANGE, (function(e, t, n, i) {
										if (e === l.default.events.SELECTION_CHANGE)
											if (null != t && t.length > 0 && i === l.default.sources.USER) {
												r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
												var a = r.quill.getLines(t.index, t.length);
												if (1 === a.length) r.position(r.quill.getBounds(t));
												else {
													var o = a[a.length - 1],
														s = r.quill.getIndex(o),
														u = Math.min(o.length() - 1, t.index + t.length - s),
														c = r.quill.getBounds(new h.Range(s, u));
													r.position(c)
												}
											} else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
									})), r
								}
								return o(t, e), u(t, [{
									key: "listen",
									value: function() {
										var e = this;
										s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", (function() {
											e.root.classList.remove("ql-editing")
										})), this.quill.on(l.default.events.SCROLL_OPTIMIZE, (function() {
											setTimeout((function() {
												if (!e.root.classList.contains("ql-hidden")) {
													var t = e.quill.getSelection();
													null != t && e.position(e.quill.getBounds(t))
												}
											}), 1)
										}))
									}
								}, {
									key: "cancel",
									value: function() {
										this.show()
									}
								}, {
									key: "position",
									value: function(e) {
										var n = s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "position", this).call(this, e),
											r = this.root.querySelector(".ql-tooltip-arrow");
										if (r.style.marginLeft = "", 0 === n) return n;
										r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
									}
								}]), t
							}(f.BaseTooltip);
							b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), t.BubbleTooltip = b, t.default = m
						}, function(e, t, n) {
							e.exports = n(63)
						}]).default
					}))
				}).call(t, n(43).Buffer)
			}, function(e, t, n) {
				var r = n(11)(n(1), "Map");
				e.exports = r
			}, function(e, t, n) {
				var r = n(1).Symbol;
				e.exports = r
			}, function(e, t) {
				e.exports = function(e, t, n) {
					switch (n.length) {
						case 0:
							return e.call(t);
						case 1:
							return e.call(t, n[0]);
						case 2:
							return e.call(t, n[0], n[1]);
						case 3:
							return e.call(t, n[0], n[1], n[2])
					}
					return e.apply(t, n)
				}
			}, function(e, t, n) {
				var r = n(10),
					i = n(8);
				e.exports = function(e, t, n) {
					(void 0 === n || i(e[t], n)) && (void 0 !== n || t in e) || r(e, t, n)
				}
			}, function(e, t, n) {
				var r = n(48),
					i = n(19),
					a = n(53),
					o = n(58),
					s = n(0),
					u = n(34),
					c = n(27);
				e.exports = function e(t, n, l, f, d) {
					t !== n && a(n, (function(a, u) {
						if (s(a)) d || (d = new r), o(t, n, u, l, e, f, d);
						else {
							var h = f ? f(c(t, u), a, u + "", t, n, d) : void 0;
							void 0 === h && (h = a), i(t, u, h)
						}
					}), u)
				}
			}, function(e, t, n) {
				var r = n(28),
					i = n(96),
					a = n(97);
				e.exports = function(e, t) {
					return a(i(e, t, r), e + "")
				}
			}, function(e, t, n) {
				var r = n(11),
					i = function() {
						try {
							var e = r(Object, "defineProperty");
							return e({}, "", {}), e
						} catch (e) {}
					}();
				e.exports = i
			}, function(e, t, n) {
				(function(t) {
					var n = "object" == typeof t && t && t.Object === Object && t;
					e.exports = n
				}).call(t, n(35))
			}, function(e, t, n) {
				var r = n(95)(Object.getPrototypeOf, Object);
				e.exports = r
			}, function(e, t) {
				var n = 9007199254740991,
					r = /^(?:0|[1-9]\d*)$/;
				e.exports = function(e, t) {
					var i = typeof e;
					return !!(t = null == t ? n : t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < t
				}
			}, function(e, t) {
				var n = Object.prototype;
				e.exports = function(e) {
					var t = e && e.constructor;
					return e === ("function" == typeof t && t.prototype || n)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					return "__proto__" == t ? void 0 : e[t]
				}
			}, function(e, t) {
				e.exports = function(e) {
					return e
				}
			}, function(e, t, n) {
				var r = n(54),
					i = n(2),
					a = Object.prototype,
					o = a.hasOwnProperty,
					s = a.propertyIsEnumerable,
					u = r(function() {
						return arguments
					}()) ? r : function(e) {
						return i(e) && o.call(e, "callee") && !s.call(e, "callee")
					};
				e.exports = u
			}, function(e, t) {
				var n = Array.isArray;
				e.exports = n
			}, function(e, t, n) {
				(function(e) {
					var r = n(1),
						i = n(109),
						a = "object" == typeof t && t && !t.nodeType && t,
						o = a && "object" == typeof e && e && !e.nodeType && e,
						s = o && o.exports === a ? r.Buffer : void 0,
						u = (s ? s.isBuffer : void 0) || i;
					e.exports = u
				}).call(t, n(14)(e))
			}, function(e, t) {
				var n = 9007199254740991;
				e.exports = function(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
				}
			}, function(e, t, n) {
				var r = n(56),
					i = n(61),
					a = n(93),
					o = a && a.isTypedArray,
					s = o ? i(o) : r;
				e.exports = s
			}, function(e, t, n) {
				var r = n(50),
					i = n(57),
					a = n(12);
				e.exports = function(e) {
					return a(e) ? r(e, !0) : i(e)
				}
			}, function(e, t) {
				var n;
				n = function() {
					return this
				}();
				try {
					n = n || Function("return this")() || (0, eval)("this")
				} catch (e) {
					"object" == typeof window && (n = window)
				}
				e.exports = n
			}, function(e, t, n) {
				"use strict";
				t.a = {
					modules: ["DisplaySize", "Toolbar", "Resize"],
					overlayStyles: {
						position: "absolute",
						boxSizing: "border-box",
						border: "1px dashed #444"
					},
					handleStyles: {
						position: "absolute",
						height: "12px",
						width: "12px",
						backgroundColor: "white",
						border: "1px solid #777",
						boxSizing: "border-box",
						opacity: "0.80"
					},
					displayStyles: {
						position: "absolute",
						font: "12px/1.0 Arial, Helvetica, sans-serif",
						padding: "4px 8px",
						textAlign: "center",
						backgroundColor: "white",
						color: "#333",
						border: "1px solid #777",
						boxSizing: "border-box",
						opacity: "0.80",
						cursor: "default"
					},
					toolbarStyles: {
						position: "absolute",
						top: "-12px",
						right: "0",
						left: "0",
						height: "0",
						minWidth: "100px",
						font: "12px/1.0 Arial, Helvetica, sans-serif",
						textAlign: "center",
						color: "#333",
						boxSizing: "border-box",
						cursor: "default"
					},
					toolbarButtonStyles: {
						display: "inline-block",
						width: "24px",
						height: "24px",
						background: "white",
						border: "1px solid #999",
						verticalAlign: "middle"
					},
					toolbarButtonSvgStyles: {
						fill: "#444",
						stroke: "#444",
						strokeWidth: "2"
					}
				}
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return a
				}));
				var a = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.display = document.createElement("div"), Object.assign(a.display.style, a.options.displayStyles), a.overlay.appendChild(a.display)
						}, a.onDestroy = function() {}, a.onUpdate = function() {
							if (a.display && a.img) {
								var e = a.getCurrentSize();
								if (a.display.innerHTML = e.join(" &times; "), e[0] > 120 && e[1] > 30) Object.assign(a.display.style, {
									right: "4px",
									bottom: "4px",
									left: "auto"
								});
								else if ("right" == a.img.style.float) {
									var t = a.display.getBoundingClientRect();
									Object.assign(a.display.style, {
										right: "auto",
										bottom: "-" + (t.height + 4) + "px",
										left: "-" + (t.width + 4) + "px"
									})
								} else {
									var n = a.display.getBoundingClientRect();
									Object.assign(a.display.style, {
										right: "-" + (n.width + 4) + "px",
										bottom: "-" + (n.height + 4) + "px",
										left: "auto"
									})
								}
							}
						}, a.getCurrentSize = function() {
							return [a.img.width, Math.round(a.img.width / a.img.naturalWidth * a.img.naturalHeight)]
						}, i(a, n)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(n(9).a)
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return a
				}));
				var a = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.boxes = [], a.addBox("nwse-resize"), a.addBox("nesw-resize"), a.addBox("nwse-resize"), a.addBox("nesw-resize"), a.positionBoxes()
						}, a.onDestroy = function() {
							a.setCursor("")
						}, a.positionBoxes = function() {
							var e = -parseFloat(a.options.handleStyles.width) / 2 + "px",
								t = -parseFloat(a.options.handleStyles.height) / 2 + "px";
							[{
								left: e,
								top: t
							}, {
								right: e,
								top: t
							}, {
								right: e,
								bottom: t
							}, {
								left: e,
								bottom: t
							}].forEach((function(e, t) {
								Object.assign(a.boxes[t].style, e)
							}))
						}, a.addBox = function(e) {
							var t = document.createElement("div");
							Object.assign(t.style, a.options.handleStyles), t.style.cursor = e, t.style.width = a.options.handleStyles.width + "px", t.style.height = a.options.handleStyles.height + "px", t.addEventListener("mousedown", a.handleMousedown, !1), a.overlay.appendChild(t), a.boxes.push(t)
						}, a.handleMousedown = function(e) {
							a.dragBox = e.target, a.dragStartX = e.clientX, a.preDragWidth = a.img.width || a.img.naturalWidth, a.setCursor(a.dragBox.style.cursor), document.addEventListener("mousemove", a.handleDrag, !1), document.addEventListener("mouseup", a.handleMouseup, !1)
						}, a.handleMouseup = function() {
							a.setCursor(""), document.removeEventListener("mousemove", a.handleDrag), document.removeEventListener("mouseup", a.handleMouseup)
						}, a.handleDrag = function(e) {
							if (a.img) {
								var t = e.clientX - a.dragStartX;
								a.dragBox === a.boxes[0] || a.dragBox === a.boxes[3] ? a.img.width = Math.round(a.preDragWidth - t) : a.img.width = Math.round(a.preDragWidth + t), a.requestUpdate()
							}
						}, a.setCursor = function(e) {
							[document.body, a.img].forEach((function(t) {
								t.style.cursor = e
							}))
						}, i(a, n)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(n(9).a)
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return v
				}));
				var a = n(15),
					o = n.n(a),
					s = n(112),
					u = n.n(s),
					c = n(111),
					l = n.n(c),
					f = n(113),
					d = n.n(f),
					h = n(9),
					p = o.a.imports.parchment,
					_ = new p.Attributor.Style("float", "float"),
					m = new p.Attributor.Style("margin", "margin"),
					b = new p.Attributor.Style("display", "display"),
					g = new p.Attributor.Attribute("nameClass", "class", {
						scope: p.Scope.INLINE
					});
				o.a.register(g);
				var v = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.toolbar = document.createElement("div"), Object.assign(a.toolbar.style, a.options.toolbarStyles), a.overlay.appendChild(a.toolbar), a._defineAlignments(), a._addToolbarButtons()
						}, a.onDestroy = function() {}, a.onUpdate = function() {}, a._defineAlignments = function() {
							a.alignments = [{
								icon: u.a,
								apply: function() {
									b.add(a.img, "inline"), _.add(a.img, "left"), m.add(a.img, "0 1em 1em 0"), a.img.align = "left"
								},
								isApplied: function() {
									return "left" == _.value(a.img)
								}
							}, {
								icon: l.a,
								apply: function() {
									b.add(a.img, "block"), _.remove(a.img), m.add(a.img, "auto"), a.img.align = "center"
								},
								isApplied: function() {
									return "auto" == m.value(a.img)
								}
							}, {
								icon: d.a,
								apply: function() {
									b.add(a.img, "inline"), _.add(a.img, "right"), m.add(a.img, "0 0 1em 1em"), a.img.align = "right"
								},
								isApplied: function() {
									return "right" == _.value(a.img)
								}
							}]
						}, a._addToolbarButtons = function() {
							var e = [];
							a.alignments.forEach((function(t, n) {
								var r = document.createElement("span");
								e.push(r), r.innerHTML = t.icon, r.addEventListener("click", (function() {
									e.forEach((function(e) {
										return e.style.filter = ""
									})), t.isApplied() ? (_.remove(a.img), m.remove(a.img), b.remove(a.img)) : (a._selectButton(r), t.apply()), a.requestUpdate()
								})), Object.assign(r.style, a.options.toolbarButtonStyles), n > 0 && (r.style.borderLeftWidth = "0"), Object.assign(r.children[0].style, a.options.toolbarButtonSvgStyles), t.isApplied() && a._selectButton(r), a.toolbar.appendChild(r)
							}))
						}, a._selectButton = function(e) {
							e.style.filter = "invert(20%)"
						}, i(a, n)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(h.a)
			}, function(e, t, n) {
				var r = n(18),
					i = n(21),
					a = n(70),
					o = n(108),
					s = i((function(e) {
						return e.push(void 0, a), r(o, void 0, e)
					}));
				e.exports = s
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}

				function i(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = n(15),
					o = n.n(a),
					s = n(40),
					u = n.n(s),
					c = n(36),
					l = n(37),
					f = n(39),
					d = n(38),
					h = function() {
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
					p = {
						DisplaySize: l.a,
						Toolbar: f.a,
						Resize: d.a
					},
					_ = function e(t) {
						var n = this,
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						i(this, e), this.initializeModules = function() {
							n.removeModules(), n.modules = n.moduleClasses.map((function(e) {
								return new(p[e] || e)(n)
							})), n.modules.forEach((function(e) {
								e.onCreate()
							})), n.onUpdate()
						}, this.onUpdate = function() {
							n.repositionElements(), n.modules.forEach((function(e) {
								e.onUpdate()
							}))
						}, this.removeModules = function() {
							n.modules.forEach((function(e) {
								e.onDestroy()
							})), n.modules = []
						}, this.handleClick = function(e) {
							if (e.target && e.target.tagName && "IMG" === e.target.tagName.toUpperCase()) {
								if (n.img === e.target) return;
								n.img && n.hide(), n.show(e.target), e.preventDefault()
							} else n.img && n.hide()
						}, this.handleScroll = function(e) {
							n.hide()
						}, this.show = function(e) {
							n.img = e, n.showOverlay(), n.initializeModules()
						}, this.showOverlay = function() {
							n.overlay && n.hideOverlay(), n.quill.setSelection(null), n.setUserSelect("none"), document.addEventListener("keyup", n.checkImage, !0), n.quill.root.addEventListener("input", n.checkImage, !0), n.overlay = document.createElement("div"), Object.assign(n.overlay.style, n.options.overlayStyles), n.quill.root.parentNode.appendChild(n.overlay), n.repositionElements()
						}, this.hideOverlay = function() {
							n.overlay && (n.quill.root.parentNode.removeChild(n.overlay), n.overlay = void 0, document.removeEventListener("keyup", n.checkImage), n.quill.root.removeEventListener("input", n.checkImage), n.setUserSelect(""))
						}, this.repositionElements = function() {
							if (n.overlay && n.img) {
								var e = n.quill.root.parentNode,
									t = n.img.getBoundingClientRect(),
									r = e.getBoundingClientRect();
								Object.assign(n.overlay.style, {
									left: t.left - r.left - 1 + e.scrollLeft + "px",
									top: t.top - r.top + e.scrollTop + "px",
									width: t.width + "px",
									height: t.height + "px"
								})
							}
						}, this.hide = function() {
							n.hideOverlay(), n.removeModules(), n.img = void 0
						}, this.setUserSelect = function(e) {
							["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach((function(t) {
								n.quill.root.style[t] = e, document.documentElement.style[t] = e
							}))
						}, this.checkImage = function(e) {
							n.img && (46 != e.keyCode && 8 != e.keyCode || (window.Quill || o.a).find(n.img).deleteAt(0), n.hide())
						}, this.quill = t;
						var a = !1;
						r.modules && (a = r.modules.slice()), this.options = u()({}, r, c.a), !1 !== a && (this.options.modules = a), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.addEventListener("click", this.handleClick, !1), this.quill.root.addEventListener("mscontrolselect", this.handleClick, !1), this.quill.root.addEventListener("scroll", this.handleScroll, !1), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = []
					};
				if (t.default = _, window.Quill) {
					var m = ["alt", "height", "width", "style"],
						b = function(e) {
							function t() {
								return i(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return function(e, t) {
								if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
								e.prototype = Object.create(t && t.prototype, {
									constructor: {
										value: e,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
							}(t, e), h(t, [{
								key: "format",
								value: function(e, n) {
									m.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
								}
							}], [{
								key: "formats",
								value: function(e) {
									return m.reduce((function(t, n) {
										return e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t
									}), {})
								}
							}]), t
						}(window.Quill.import("formats/image"));
					window.Quill.register(b, !0), "function" != typeof Object.assign && (Object.assign = function(e) {
						if (null == e) throw new TypeError("Cannot convert undefined or null to object");
						e = Object(e);
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							if (null != n)
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					}), window.Quill.register("modules/imageResize", _)
				}
			}, function(e, t, n) {
				"use strict";

				function r(e) {
					var t = e.length;
					if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var n = e.indexOf("=");
					return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
				}

				function i(e) {
					return o[e >> 18 & 63] + o[e >> 12 & 63] + o[e >> 6 & 63] + o[63 & e]
				}

				function a(e, t, n) {
					for (var r, a = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(i(r));
					return a.join("")
				}
				t.byteLength = function(e) {
					var t = r(e),
						n = t[0],
						i = t[1];
					return 3 * (n + i) / 4 - i
				}, t.toByteArray = function(e) {
					for (var t, n = r(e), i = n[0], a = n[1], o = new u(function(e, t, n) {
							return 3 * (t + n) / 4 - n
						}(0, i, a)), c = 0, l = a > 0 ? i - 4 : i, f = 0; f < l; f += 4) t = s[e.charCodeAt(f)] << 18 | s[e.charCodeAt(f + 1)] << 12 | s[e.charCodeAt(f + 2)] << 6 | s[e.charCodeAt(f + 3)], o[c++] = t >> 16 & 255, o[c++] = t >> 8 & 255, o[c++] = 255 & t;
					return 2 === a && (t = s[e.charCodeAt(f)] << 2 | s[e.charCodeAt(f + 1)] >> 4, o[c++] = 255 & t), 1 === a && (t = s[e.charCodeAt(f)] << 10 | s[e.charCodeAt(f + 1)] << 4 | s[e.charCodeAt(f + 2)] >> 2, o[c++] = t >> 8 & 255, o[c++] = 255 & t), o
				}, t.fromByteArray = function(e) {
					for (var t, n = e.length, r = n % 3, i = [], s = 0, u = n - r; s < u; s += 16383) i.push(a(e, s, s + 16383 > u ? u : s + 16383));
					return 1 === r ? (t = e[n - 1], i.push(o[t >> 2] + o[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "=")), i.join("")
				};
				for (var o = [], s = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, f = c.length; l < f; ++l) o[l] = c[l], s[c.charCodeAt(l)] = l;
				s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
			}, function(e, t, n) {
				"use strict";
				(function(e) {
					function r() {
						return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
					}

					function i(e, t) {
						if (r() < t) throw new RangeError("Invalid typed array length");
						return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = a.prototype : (null === e && (e = new a(t)), e.length = t), e
					}

					function a(e, t, n) {
						if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);
						if ("number" == typeof e) {
							if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
							return u(this, e)
						}
						return o(this, e, t, n)
					}

					function o(e, t, n, r) {
						if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
						return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
							if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
							if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
							return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), a.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = a.prototype : e = c(e, t), e
						}(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
							if ("string" == typeof n && "" !== n || (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
							var r = 0 | f(t, n),
								o = (e = i(e, r)).write(t, n);
							return o !== r && (e = e.slice(0, o)), e
						}(e, t, n) : function(e, t) {
							if (a.isBuffer(t)) {
								var n = 0 | l(t.length);
								return 0 === (e = i(e, n)).length || t.copy(e, 0, 0, n), e
							}
							if (t) {
								if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
									return e != e
								}(t.length) ? i(e, 0) : c(e, t);
								if ("Buffer" === t.type && j(t.data)) return c(e, t.data)
							}
							throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
						}(e, t)
					}

					function s(e) {
						if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
						if (e < 0) throw new RangeError('"size" argument must not be negative')
					}

					function u(e, t) {
						if (s(t), e = i(e, t < 0 ? 0 : 0 | l(t)), !a.TYPED_ARRAY_SUPPORT)
							for (var n = 0; n < t; ++n) e[n] = 0;
						return e
					}

					function c(e, t) {
						var n = t.length < 0 ? 0 : 0 | l(t.length);
						e = i(e, n);
						for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
						return e
					}

					function l(e) {
						if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
						return 0 | e
					}

					function f(e, t) {
						if (a.isBuffer(e)) return e.length;
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
								return B(e).length;
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return 2 * n;
							case "hex":
								return n >>> 1;
							case "base64":
								return N(e).length;
							default:
								if (r) return B(e).length;
								t = ("" + t).toLowerCase(), r = !0
						}
					}

					function d(e, t, n) {
						var r = !1;
						if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
						if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
						if ((n >>>= 0) <= (t >>>= 0)) return "";
						for (e || (e = "utf8");;) switch (e) {
							case "hex":
								return C(this, t, n);
							case "utf8":
							case "utf-8":
								return w(this, t, n);
							case "ascii":
								return E(this, t, n);
							case "latin1":
							case "binary":
								return T(this, t, n);
							case "base64":
								return S(this, t, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return $(this, t, n);
							default:
								if (r) throw new TypeError("Unknown encoding: " + e);
								e = (e + "").toLowerCase(), r = !0
						}
					}

					function h(e, t, n) {
						var r = e[t];
						e[t] = e[n], e[n] = r
					}

					function p(e, t, n, r, i) {
						if (0 === e.length) return -1;
						if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
							if (i) return -1;
							n = e.length - 1
						} else if (n < 0) {
							if (!i) return -1;
							n = 0
						}
						if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, i);
						if ("number" == typeof t) return t &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : _(e, [t], n, r, i);
						throw new TypeError("val must be string, number or Buffer")
					}

					function _(e, t, n, r, i) {
						function a(e, t) {
							return 1 === s ? e[t] : e.readUInt16BE(t * s)
						}
						var o, s = 1,
							u = e.length,
							c = t.length;
						if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
							if (e.length < 2 || t.length < 2) return -1;
							s = 2, u /= 2, c /= 2, n /= 2
						}
						if (i) {
							var l = -1;
							for (o = n; o < u; o++)
								if (a(e, o) === a(t, -1 === l ? 0 : o - l)) {
									if (-1 === l && (l = o), o - l + 1 === c) return l * s
								} else -1 !== l && (o -= o - l), l = -1
						} else
							for (n + c > u && (n = u - c), o = n; o >= 0; o--) {
								for (var f = !0, d = 0; d < c; d++)
									if (a(e, o + d) !== a(t, d)) {
										f = !1;
										break
									} if (f) return o
							}
						return -1
					}

					function m(e, t, n, r) {
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

					function b(e, t, n, r) {
						return R(B(t, e.length - n), e, n, r)
					}

					function g(e, t, n, r) {
						return R(function(e) {
							for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
							return t
						}(t), e, n, r)
					}

					function v(e, t, n, r) {
						return g(e, t, n, r)
					}

					function y(e, t, n, r) {
						return R(N(t), e, n, r)
					}

					function A(e, t, n, r) {
						return R(function(e, t) {
							for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
							return a
						}(t, e.length - n), e, n, r)
					}

					function S(e, t, n) {
						return 0 === t && n === e.length ? F.fromByteArray(e) : F.fromByteArray(e.slice(t, n))
					}

					function w(e, t, n) {
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
									128 == (192 & (a = e[i + 1])) && (u = (31 & c) << 6 | 63 & a) > 127 && (l = u);
									break;
								case 3:
									a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (u = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u);
									break;
								case 4:
									a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
							}
							null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
						}
						return function(e) {
							var t = e.length;
							if (t <= H) return String.fromCharCode.apply(String, e);
							for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += H));
							return n
						}(r)
					}

					function E(e, t, n) {
						var r = "";
						n = Math.min(e.length, n);
						for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
						return r
					}

					function T(e, t, n) {
						var r = "";
						n = Math.min(e.length, n);
						for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
						return r
					}

					function C(e, t, n) {
						var r = e.length;
						(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
						for (var i = "", a = t; a < n; ++a) i += D(e[a]);
						return i
					}

					function $(e, t, n) {
						for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
						return i
					}

					function k(e, t, n) {
						if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
						if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
					}

					function O(e, t, n, r, i, o) {
						if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
						if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
						if (n + r > e.length) throw new RangeError("Index out of range")
					}

					function x(e, t, n, r) {
						t < 0 && (t = 65535 + t + 1);
						for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
					}

					function P(e, t, n, r) {
						t < 0 && (t = 4294967295 + t + 1);
						for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
					}

					function M(e, t, n, r, i, a) {
						if (n + r > e.length) throw new RangeError("Index out of range");
						if (n < 0) throw new RangeError("Index out of range")
					}

					function I(e, t, n, r, i) {
						return i || M(e, 0, n, 4), U.write(e, t, n, r, 23, 4), n + 4
					}

					function L(e, t, n, r, i) {
						return i || M(e, 0, n, 8), U.write(e, t, n, r, 52, 8), n + 8
					}

					function D(e) {
						return e < 16 ? "0" + e.toString(16) : e.toString(16)
					}

					function B(e, t) {
						t = t || 1 / 0;
						for (var n, r = e.length, i = null, a = [], o = 0; o < r; ++o) {
							if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
								if (!i) {
									if (n > 56319) {
										(t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									if (o + 1 === r) {
										(t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									i = n;
									continue
								}
								if (n < 56320) {
									(t -= 3) > -1 && a.push(239, 191, 189), i = n;
									continue
								}
								n = 65536 + (i - 55296 << 10 | n - 56320)
							} else i && (t -= 3) > -1 && a.push(239, 191, 189);
							if (i = null, n < 128) {
								if ((t -= 1) < 0) break;
								a.push(n)
							} else if (n < 2048) {
								if ((t -= 2) < 0) break;
								a.push(n >> 6 | 192, 63 & n | 128)
							} else if (n < 65536) {
								if ((t -= 3) < 0) break;
								a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
							} else {
								if (!(n < 1114112)) throw new Error("Invalid code point");
								if ((t -= 4) < 0) break;
								a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
							}
						}
						return a
					}

					function N(e) {
						return F.toByteArray(function(e) {
							if ((e = function(e) {
									return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
								}(e).replace(Y, "")).length < 2) return "";
							for (; e.length % 4 != 0;) e += "=";
							return e
						}(e))
					}

					function R(e, t, n, r) {
						for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
						return i
					}
					var F = n(42),
						U = n(44),
						j = n(45);
					t.Buffer = a, t.SlowBuffer = function(e) {
						return +e != e && (e = 0), a.alloc(+e)
					}, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
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
					}(), t.kMaxLength = r(), a.poolSize = 8192, a._augment = function(e) {
						return e.__proto__ = a.prototype, e
					}, a.from = function(e, t, n) {
						return o(null, e, t, n)
					}, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
						value: null,
						configurable: !0
					})), a.alloc = function(e, t, n) {
						return function(e, t, n, r) {
							return s(t), t <= 0 ? i(e, t) : void 0 !== n ? "string" == typeof r ? i(e, t).fill(n, r) : i(e, t).fill(n) : i(e, t)
						}(null, e, t, n)
					}, a.allocUnsafe = function(e) {
						return u(null, e)
					}, a.allocUnsafeSlow = function(e) {
						return u(null, e)
					}, a.isBuffer = function(e) {
						return !(null == e || !e._isBuffer)
					}, a.compare = function(e, t) {
						if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
						if (e === t) return 0;
						for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
							if (e[i] !== t[i]) {
								n = e[i], r = t[i];
								break
							} return n < r ? -1 : r < n ? 1 : 0
					}, a.isEncoding = function(e) {
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
					}, a.concat = function(e, t) {
						if (!j(e)) throw new TypeError('"list" argument must be an Array of Buffers');
						if (0 === e.length) return a.alloc(0);
						var n;
						if (void 0 === t)
							for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
						var r = a.allocUnsafe(t),
							i = 0;
						for (n = 0; n < e.length; ++n) {
							var o = e[n];
							if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
							o.copy(r, i), i += o.length
						}
						return r
					}, a.byteLength = f, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
						var e = this.length;
						if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
						for (var t = 0; t < e; t += 2) h(this, t, t + 1);
						return this
					}, a.prototype.swap32 = function() {
						var e = this.length;
						if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
						for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2);
						return this
					}, a.prototype.swap64 = function() {
						var e = this.length;
						if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
						for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4);
						return this
					}, a.prototype.toString = function() {
						var e = 0 | this.length;
						return 0 === e ? "" : 0 === arguments.length ? w(this, 0, e) : d.apply(this, arguments)
					}, a.prototype.equals = function(e) {
						if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
						return this === e || 0 === a.compare(this, e)
					}, a.prototype.inspect = function() {
						var e = "",
							n = t.INSPECT_MAX_BYTES;
						return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
					}, a.prototype.compare = function(e, t, n, r, i) {
						if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
						if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
						if (r >= i && t >= n) return 0;
						if (r >= i) return -1;
						if (t >= n) return 1;
						if (this === e) return 0;
						for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), u = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), f = 0; f < u; ++f)
							if (c[f] !== l[f]) {
								o = c[f], s = l[f];
								break
							} return o < s ? -1 : s < o ? 1 : 0
					}, a.prototype.includes = function(e, t, n) {
						return -1 !== this.indexOf(e, t, n)
					}, a.prototype.indexOf = function(e, t, n) {
						return p(this, e, t, n, !0)
					}, a.prototype.lastIndexOf = function(e, t, n) {
						return p(this, e, t, n, !1)
					}, a.prototype.write = function(e, t, n, r) {
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
								return m(this, e, t, n);
							case "utf8":
							case "utf-8":
								return b(this, e, t, n);
							case "ascii":
								return g(this, e, t, n);
							case "latin1":
							case "binary":
								return v(this, e, t, n);
							case "base64":
								return y(this, e, t, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return A(this, e, t, n);
							default:
								if (a) throw new TypeError("Unknown encoding: " + r);
								r = ("" + r).toLowerCase(), a = !0
						}
					}, a.prototype.toJSON = function() {
						return {
							type: "Buffer",
							data: Array.prototype.slice.call(this._arr || this, 0)
						}
					};
					var H = 4096;
					a.prototype.slice = function(e, t) {
						var n, r = this.length;
						if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = a.prototype;
						else {
							var i = t - e;
							n = new a(i, void 0);
							for (var o = 0; o < i; ++o) n[o] = this[o + e]
						}
						return n
					}, a.prototype.readUIntLE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
						return r
					}, a.prototype.readUIntBE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
						return r
					}, a.prototype.readUInt8 = function(e, t) {
						return t || k(e, 1, this.length), this[e]
					}, a.prototype.readUInt16LE = function(e, t) {
						return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
					}, a.prototype.readUInt16BE = function(e, t) {
						return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
					}, a.prototype.readUInt32LE = function(e, t) {
						return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
					}, a.prototype.readUInt32BE = function(e, t) {
						return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
					}, a.prototype.readIntLE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
						return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
					}, a.prototype.readIntBE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
						return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
					}, a.prototype.readInt8 = function(e, t) {
						return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
					}, a.prototype.readInt16LE = function(e, t) {
						t || k(e, 2, this.length);
						var n = this[e] | this[e + 1] << 8;
						return 32768 & n ? 4294901760 | n : n
					}, a.prototype.readInt16BE = function(e, t) {
						t || k(e, 2, this.length);
						var n = this[e + 1] | this[e] << 8;
						return 32768 & n ? 4294901760 | n : n
					}, a.prototype.readInt32LE = function(e, t) {
						return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
					}, a.prototype.readInt32BE = function(e, t) {
						return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
					}, a.prototype.readFloatLE = function(e, t) {
						return t || k(e, 4, this.length), U.read(this, e, !0, 23, 4)
					}, a.prototype.readFloatBE = function(e, t) {
						return t || k(e, 4, this.length), U.read(this, e, !1, 23, 4)
					}, a.prototype.readDoubleLE = function(e, t) {
						return t || k(e, 8, this.length), U.read(this, e, !0, 52, 8)
					}, a.prototype.readDoubleBE = function(e, t) {
						return t || k(e, 8, this.length), U.read(this, e, !1, 52, 8)
					}, a.prototype.writeUIntLE = function(e, t, n, r) {
						e = +e, t |= 0, n |= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
						var i = 1,
							a = 0;
						for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
						return t + n
					}, a.prototype.writeUIntBE = function(e, t, n, r) {
						e = +e, t |= 0, n |= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
						var i = n - 1,
							a = 1;
						for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
						return t + n
					}, a.prototype.writeUInt8 = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
					}, a.prototype.writeUInt16LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
					}, a.prototype.writeUInt16BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
					}, a.prototype.writeUInt32LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : P(this, e, t, !0), t + 4
					}, a.prototype.writeUInt32BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
					}, a.prototype.writeIntLE = function(e, t, n, r) {
						if (e = +e, t |= 0, !r) {
							var i = Math.pow(2, 8 * n - 1);
							O(this, e, t, n, i - 1, -i)
						}
						var a = 0,
							o = 1,
							s = 0;
						for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
						return t + n
					}, a.prototype.writeIntBE = function(e, t, n, r) {
						if (e = +e, t |= 0, !r) {
							var i = Math.pow(2, 8 * n - 1);
							O(this, e, t, n, i - 1, -i)
						}
						var a = n - 1,
							o = 1,
							s = 0;
						for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
						return t + n
					}, a.prototype.writeInt8 = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
					}, a.prototype.writeInt16LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
					}, a.prototype.writeInt16BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
					}, a.prototype.writeInt32LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : P(this, e, t, !0), t + 4
					}, a.prototype.writeInt32BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
					}, a.prototype.writeFloatLE = function(e, t, n) {
						return I(this, e, t, !0, n)
					}, a.prototype.writeFloatBE = function(e, t, n) {
						return I(this, e, t, !1, n)
					}, a.prototype.writeDoubleLE = function(e, t, n) {
						return L(this, e, t, !0, n)
					}, a.prototype.writeDoubleBE = function(e, t, n) {
						return L(this, e, t, !1, n)
					}, a.prototype.copy = function(e, t, n, r) {
						if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
						if (0 === e.length || 0 === this.length) return 0;
						if (t < 0) throw new RangeError("targetStart out of bounds");
						if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
						if (r < 0) throw new RangeError("sourceEnd out of bounds");
						r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
						var i, o = r - n;
						if (this === e && n < t && t < r)
							for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
						else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
							for (i = 0; i < o; ++i) e[i + t] = this[i + n];
						else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
						return o
					}, a.prototype.fill = function(e, t, n, r) {
						if ("string" == typeof e) {
							if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
								var i = e.charCodeAt(0);
								i < 256 && (e = i)
							}
							if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
							if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
						} else "number" == typeof e && (e &= 255);
						if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
						if (n <= t) return this;
						var o;
						if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
							for (o = t; o < n; ++o) this[o] = e;
						else {
							var s = a.isBuffer(e) ? e : B(new a(e, r).toString()),
								u = s.length;
							for (o = 0; o < n - t; ++o) this[o + t] = s[o % u]
						}
						return this
					};
					var Y = /[^+\/0-9A-Za-z-_]/g
				}).call(t, n(35))
			}, function(e, t) {
				t.read = function(e, t, n, r, i) {
					var a, o, s = 8 * i - r - 1,
						u = (1 << s) - 1,
						c = u >> 1,
						l = -7,
						f = n ? i - 1 : 0,
						d = n ? -1 : 1,
						h = e[t + f];
					for (f += d, a = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; a = 256 * a + e[t + f], f += d, l -= 8);
					for (o = a & (1 << -l) - 1, a >>= -l, l += r; l > 0; o = 256 * o + e[t + f], f += d, l -= 8);
					if (0 === a) a = 1 - c;
					else {
						if (a === u) return o ? NaN : 1 / 0 * (h ? -1 : 1);
						o += Math.pow(2, r), a -= c
					}
					return (h ? -1 : 1) * o * Math.pow(2, a - r)
				}, t.write = function(e, t, n, r, i, a) {
					var o, s, u, c = 8 * a - i - 1,
						l = (1 << c) - 1,
						f = l >> 1,
						d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						h = r ? 0 : a - 1,
						p = r ? 1 : -1,
						_ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
					for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (o++, u /= 2), o + f >= l ? (s = 0, o = l) : o + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8);
					for (o = o << i | s, c += i; c > 0; e[n + h] = 255 & o, h += p, o /= 256, c -= 8);
					e[n + h - p] |= 128 * _
				}
			}, function(e, t) {
				var n = {}.toString;
				e.exports = Array.isArray || function(e) {
					return "[object Array]" == n.call(e)
				}
			}, function(e, t, n) {
				function r(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}
				var i = n(73),
					a = n(74),
					o = n(75),
					s = n(76),
					u = n(77);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
			}, function(e, t, n) {
				function r(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}
				var i = n(87),
					a = n(88),
					o = n(89),
					s = n(90),
					u = n(91);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
			}, function(e, t, n) {
				function r(e) {
					var t = this.__data__ = new i(e);
					this.size = t.size
				}
				var i = n(3),
					a = n(99),
					o = n(100),
					s = n(101),
					u = n(102),
					c = n(103);
				r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, e.exports = r
			}, function(e, t, n) {
				var r = n(1).Uint8Array;
				e.exports = r
			}, function(e, t, n) {
				var r = n(60),
					i = n(29),
					a = n(30),
					o = n(31),
					s = n(25),
					u = n(33),
					c = Object.prototype.hasOwnProperty;
				e.exports = function(e, t) {
					var n = a(e),
						l = !n && i(e),
						f = !n && !l && o(e),
						d = !n && !l && !f && u(e),
						h = n || l || f || d,
						p = h ? r(e.length, String) : [],
						_ = p.length;
					for (var m in e) !t && !c.call(e, m) || h && ("length" == m || f && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, _)) || p.push(m);
					return p
				}
			}, function(e, t, n) {
				var r = n(10),
					i = n(8),
					a = Object.prototype.hasOwnProperty;
				e.exports = function(e, t, n) {
					var o = e[t];
					a.call(e, t) && i(o, n) && (void 0 !== n || t in e) || r(e, t, n)
				}
			}, function(e, t, n) {
				var r = n(0),
					i = Object.create,
					a = function() {
						function e() {}
						return function(t) {
							if (!r(t)) return {};
							if (i) return i(t);
							e.prototype = t;
							var n = new e;
							return e.prototype = void 0, n
						}
					}();
				e.exports = a
			}, function(e, t, n) {
				var r = n(69)();
				e.exports = r
			}, function(e, t, n) {
				var r = n(5),
					i = n(2),
					a = "[object Arguments]";
				e.exports = function(e) {
					return i(e) && r(e) == a
				}
			}, function(e, t, n) {
				var r = n(13),
					i = n(81),
					a = n(0),
					o = n(104),
					s = /^\[object .+?Constructor\]$/,
					u = Function.prototype,
					c = Object.prototype,
					l = u.toString,
					f = c.hasOwnProperty,
					d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
				e.exports = function(e) {
					return !(!a(e) || i(e)) && (r(e) ? d : s).test(o(e))
				}
			}, function(e, t, n) {
				var r = n(5),
					i = n(32),
					a = n(2),
					o = {};
				o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
					return a(e) && i(e.length) && !!o[r(e)]
				}
			}, function(e, t, n) {
				var r = n(0),
					i = n(26),
					a = n(92),
					o = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					if (!r(e)) return a(e);
					var t = i(e),
						n = [];
					for (var s in e)("constructor" != s || !t && o.call(e, s)) && n.push(s);
					return n
				}
			}, function(e, t, n) {
				var r = n(19),
					i = n(63),
					a = n(64),
					o = n(65),
					s = n(78),
					u = n(29),
					c = n(30),
					l = n(106),
					f = n(31),
					d = n(13),
					h = n(0),
					p = n(107),
					_ = n(33),
					m = n(27),
					b = n(110);
				e.exports = function(e, t, n, g, v, y, A) {
					var S = m(e, n),
						w = m(t, n),
						E = A.get(w);
					if (E) r(e, n, E);
					else {
						var T = y ? y(S, w, n + "", e, t, A) : void 0,
							C = void 0 === T;
						if (C) {
							var $ = c(w),
								k = !$ && f(w),
								O = !$ && !k && _(w);
							T = w, $ || k || O ? c(S) ? T = S : l(S) ? T = o(S) : k ? (C = !1, T = i(w, !0)) : O ? (C = !1, T = a(w, !0)) : T = [] : p(w) || u(w) ? (T = S, u(S) ? T = b(S) : (!h(S) || g && d(S)) && (T = s(w))) : C = !1
						}
						C && (A.set(w, T), v(T, w, g, y, A), A.delete(w)), r(e, n, T)
					}
				}
			}, function(e, t, n) {
				var r = n(105),
					i = n(22),
					a = n(28),
					o = i ? function(e, t) {
						return i(e, "toString", {
							configurable: !0,
							enumerable: !1,
							value: r(t),
							writable: !0
						})
					} : a;
				e.exports = o
			}, function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
					return r
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function(t) {
						return e(t)
					}
				}
			}, function(e, t, n) {
				var r = n(49);
				e.exports = function(e) {
					var t = new e.constructor(e.byteLength);
					return new r(t).set(new r(e)), t
				}
			}, function(e, t, n) {
				(function(e) {
					var r = n(1),
						i = "object" == typeof t && t && !t.nodeType && t,
						a = i && "object" == typeof e && e && !e.nodeType && e,
						o = a && a.exports === i ? r.Buffer : void 0,
						s = o ? o.allocUnsafe : void 0;
					e.exports = function(e, t) {
						if (t) return e.slice();
						var n = e.length,
							r = s ? s(n) : new e.constructor(n);
						return e.copy(r), r
					}
				}).call(t, n(14)(e))
			}, function(e, t, n) {
				var r = n(62);
				e.exports = function(e, t) {
					var n = t ? r(e.buffer) : e.buffer;
					return new e.constructor(n, e.byteOffset, e.length)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					var n = -1,
						r = e.length;
					for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
					return t
				}
			}, function(e, t, n) {
				var r = n(51),
					i = n(10);
				e.exports = function(e, t, n, a) {
					var o = !n;
					n || (n = {});
					for (var s = -1, u = t.length; ++s < u;) {
						var c = t[s],
							l = a ? a(n[c], e[c], c, n, e) : void 0;
						void 0 === l && (l = e[c]), o ? i(n, c, l) : r(n, c, l)
					}
					return n
				}
			}, function(e, t, n) {
				var r = n(1)["__core-js_shared__"];
				e.exports = r
			}, function(e, t, n) {
				var r = n(21),
					i = n(79);
				e.exports = function(e) {
					return r((function(t, n) {
						var r = -1,
							a = n.length,
							o = a > 1 ? n[a - 1] : void 0,
							s = a > 2 ? n[2] : void 0;
						for (o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
							var u = n[r];
							u && e(t, u, r, o)
						}
						return t
					}))
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function(t, n, r) {
						for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
							var u = o[e ? s : ++i];
							if (!1 === n(a[u], u, a)) break
						}
						return t
					}
				}
			}, function(e, t, n) {
				var r = n(20),
					i = n(0);
				e.exports = function e(t, n, a, o, s, u) {
					return i(t) && i(n) && (u.set(n, t), r(t, n, void 0, e, u), u.delete(n)), t
				}
			}, function(e, t, n) {
				var r = n(17),
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
			}, function(e, t) {
				e.exports = function(e, t) {
					return null == e ? void 0 : e[t]
				}
			}, function(e, t, n) {
				var r = n(7);
				e.exports = function() {
					this.__data__ = r ? r(null) : {}, this.size = 0
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= t ? 1 : 0, t
				}
			}, function(e, t, n) {
				var r = n(7),
					i = "__lodash_hash_undefined__",
					a = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					if (r) {
						var n = t[e];
						return n === i ? void 0 : n
					}
					return a.call(t, e) ? t[e] : void 0
				}
			}, function(e, t, n) {
				var r = n(7),
					i = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					return r ? void 0 !== t[e] : i.call(t, e)
				}
			}, function(e, t, n) {
				var r = n(7),
					i = "__lodash_hash_undefined__";
				e.exports = function(e, t) {
					var n = this.__data__;
					return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
				}
			}, function(e, t, n) {
				var r = n(52),
					i = n(24),
					a = n(26);
				e.exports = function(e) {
					return "function" != typeof e.constructor || a(e) ? {} : r(i(e))
				}
			}, function(e, t, n) {
				var r = n(8),
					i = n(12),
					a = n(25),
					o = n(0);
				e.exports = function(e, t, n) {
					if (!o(n)) return !1;
					var s = typeof t;
					return !!("number" == s ? i(n) && a(t, n.length) : "string" == s && t in n) && r(n[t], e)
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = typeof e;
					return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
				}
			}, function(e, t, n) {
				var r = n(67),
					i = function() {
						var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
						return e ? "Symbol(src)_1." + e : ""
					}();
				e.exports = function(e) {
					return !!i && i in e
				}
			}, function(e, t) {
				e.exports = function() {
					this.__data__ = [], this.size = 0
				}
			}, function(e, t, n) {
				var r = n(4),
					i = Array.prototype.splice;
				e.exports = function(e) {
					var t = this.__data__,
						n = r(t, e);
					return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					var t = this.__data__,
						n = r(t, e);
					return n < 0 ? void 0 : t[n][1]
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					return r(this.__data__, e) > -1
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e, t) {
					var n = this.__data__,
						i = r(n, e);
					return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
				}
			}, function(e, t, n) {
				var r = n(46),
					i = n(3),
					a = n(16);
				e.exports = function() {
					this.size = 0, this.__data__ = {
						hash: new r,
						map: new(a || i),
						string: new r
					}
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					var t = r(this, e).delete(e);
					return this.size -= t ? 1 : 0, t
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					return r(this, e).get(e)
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					return r(this, e).has(e)
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e, t) {
					var n = r(this, e),
						i = n.size;
					return n.set(e, t), this.size += n.size == i ? 0 : 1, this
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = [];
					if (null != e)
						for (var n in Object(e)) t.push(n);
					return t
				}
			}, function(e, t, n) {
				(function(e) {
					var r = n(23),
						i = "object" == typeof t && t && !t.nodeType && t,
						a = i && "object" == typeof e && e && !e.nodeType && e,
						o = a && a.exports === i && r.process,
						s = function() {
							try {
								return a && a.require && a.require("util").types || o && o.binding && o.binding("util")
							} catch (e) {}
						}();
					e.exports = s
				}).call(t, n(14)(e))
			}, function(e, t) {
				var n = Object.prototype.toString;
				e.exports = function(e) {
					return n.call(e)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					return function(n) {
						return e(t(n))
					}
				}
			}, function(e, t, n) {
				var r = n(18),
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
			}, function(e, t, n) {
				var r = n(59),
					i = n(98)(r);
				e.exports = i
			}, function(e, t) {
				var n = 800,
					r = 16,
					i = Date.now;
				e.exports = function(e) {
					var t = 0,
						a = 0;
					return function() {
						var o = i(),
							s = r - (o - a);
						if (a = o, s > 0) {
							if (++t >= n) return arguments[0]
						} else t = 0;
						return e.apply(void 0, arguments)
					}
				}
			}, function(e, t, n) {
				var r = n(3);
				e.exports = function() {
					this.__data__ = new r, this.size = 0
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = this.__data__,
						n = t.delete(e);
					return this.size = t.size, n
				}
			}, function(e, t) {
				e.exports = function(e) {
					return this.__data__.get(e)
				}
			}, function(e, t) {
				e.exports = function(e) {
					return this.__data__.has(e)
				}
			}, function(e, t, n) {
				var r = n(3),
					i = n(16),
					a = n(47),
					o = 200;
				e.exports = function(e, t) {
					var n = this.__data__;
					if (n instanceof r) {
						var s = n.__data__;
						if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
						n = this.__data__ = new a(s)
					}
					return n.set(e, t), this.size = n.size, this
				}
			}, function(e, t) {
				var n = Function.prototype.toString;
				e.exports = function(e) {
					if (null != e) {
						try {
							return n.call(e)
						} catch (e) {}
						try {
							return e + ""
						} catch (e) {}
					}
					return ""
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function() {
						return e
					}
				}
			}, function(e, t, n) {
				var r = n(12),
					i = n(2);
				e.exports = function(e) {
					return i(e) && r(e)
				}
			}, function(e, t, n) {
				var r = n(5),
					i = n(24),
					a = n(2),
					o = "[object Object]",
					s = Function.prototype,
					u = Object.prototype,
					c = s.toString,
					l = u.hasOwnProperty,
					f = c.call(Object);
				e.exports = function(e) {
					if (!a(e) || r(e) != o) return !1;
					var t = i(e);
					if (null === t) return !0;
					var n = l.call(t, "constructor") && t.constructor;
					return "function" == typeof n && n instanceof n && c.call(n) == f
				}
			}, function(e, t, n) {
				var r = n(20),
					i = n(68)((function(e, t, n, i) {
						r(e, t, n, i)
					}));
				e.exports = i
			}, function(e, t) {
				e.exports = function() {
					return !1
				}
			}, function(e, t, n) {
				var r = n(66),
					i = n(34);
				e.exports = function(e) {
					return r(e, i(e))
				}
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'
			}])
		},
		"9e64": function(e, t, n) {
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
			}), t.WindowOpacitySelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingswindowopacityselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("100", a.i18n.getLocalizer("percent", {
							value: 100
						})), this.addItem("75", a.i18n.getLocalizer("percent", {
							value: 75
						})), this.addItem("50", a.i18n.getLocalizer("percent", {
							value: 50
						})), this.addItem("25", a.i18n.getLocalizer("percent", {
							value: 25
						})), this.addItem("0", a.i18n.getLocalizer("percent", {
							value: 0
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.windowOpacity.value = t, r.settingsManager.windowOpacity.isSet() ? r.settingsManager.windowColor.isSet() || (r.settingsManager.windowColor.value = "black") : r.settingsManager.windowColor.clear()
						})), this.settingsManager.windowOpacity.onChanged.subscribe((function(e, t) {
							r.selectItem(t.value)
						})), this.settingsManager.windowOpacity.isSet() && this.selectItem(this.settingsManager.windowOpacity.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.WindowOpacitySelectBox = o
		},
		"9e69": function(e, t, n) {
			var r = n("2b3e").Symbol;
			e.exports = r
		},
		"9ed3": function(e, t, n) {
			"use strict";
			var r = n("ae93").IteratorPrototype,
				i = n("7c73"),
				a = n("5c6c"),
				o = n("d44e"),
				s = n("3f8c"),
				u = function() {
					return this
				};
			e.exports = function(e, t, n) {
				var c = t + " Iterator";
				return e.prototype = i(r, {
					next: a(1, n)
				}), o(e, c, !1, !0), s[c] = u, e
			}
		},
		"9f26": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
					n = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i];
				e.defineLocale("fr", {
					months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
					monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
					monthsRegex: t,
					monthsShortRegex: t,
					monthsStrictRegex: /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
					monthsShortStrictRegex: /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
					monthsParse: n,
					longMonthsParse: n,
					shortMonthsParse: n,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
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
						w: "une semaine",
						ww: "%d semaines",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
					ordinal: function(e, t) {
						switch (t) {
							case "D":
								return e + (1 === e ? "er" : "");
							default:
							case "M":
							case "Q":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"9f27": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StorageUtils = void 0,
				function(e) {
					var t;

					function n(t, n) {
						e.hasLocalStorage() && window.localStorage.setItem(t, n)
					}

					function r(t) {
						return e.hasLocalStorage() ? window.localStorage.getItem(t) : null
					}
					e.hasLocalStorage = function() {
						if (t) return t;
						var e = {
							length: 0
						};
						try {
							e = window.localStorage;
							var n = "__storage_test__";
							e.setItem(n, n), e.removeItem(n), t = !0
						} catch (n) {
							t = n instanceof DOMException && (22 === n.code || 1014 === n.code || "QuotaExceededError" === n.name || "NS_ERROR_DOM_QUOTA_REACHED" === n.name) && 0 !== e.length
						}
						return t
					}, e.setItem = n, e.getItem = r, e.setObject = function(t, r) {
						e.hasLocalStorage() && n(t, JSON.stringify(r))
					}, e.getObject = function(t) {
						if (e.hasLocalStorage()) {
							var n = r(t);
							if (t) return JSON.parse(n)
						}
						return null
					}
				}(t.StorageUtils || (t.StorageUtils = {}))
		},
		"9f7f": function(e, t, n) {
			"use strict";
			var r = n("d039");

			function i(e, t) {
				return RegExp(e, t)
			}
			t.UNSUPPORTED_Y = r((function() {
				var e = i("a", "y");
				return e.lastIndex = 2, null != e.exec("abcd")
			})), t.BROKEN_CARET = r((function() {
				var e = i("^r", "gy");
				return e.lastIndex = 2, null != e.exec("str")
			}))
		},
		a078: function(e, t, n) {
			var r = n("7b0b"),
				i = n("50c4"),
				a = n("35a1"),
				o = n("e95a"),
				s = n("0366"),
				u = n("ebb5").aTypedArrayConstructor;
			e.exports = function(e) {
				var t, n, c, l, f, d, h = r(e),
					p = arguments.length,
					_ = p > 1 ? arguments[1] : void 0,
					m = void 0 !== _,
					b = a(h);
				if (null != b && !o(b))
					for (d = (f = b.call(h)).next, h = []; !(l = d.call(f)).done;) h.push(l.value);
				for (m && p > 2 && (_ = s(_, arguments[2], 2)), n = i(h.length), c = new(u(this))(n), t = 0; n > t; t++) c[t] = m ? _(h[t], t) : h[t];
				return c
			}
		},
		a15b: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("44ad"),
				a = n("fc6a"),
				o = n("a640"),
				s = [].join,
				u = i != Object,
				c = o("join", ",");
			r({
				target: "Array",
				proto: !0,
				forced: u || !c
			}, {
				join: function(e) {
					return s.call(a(this), void 0 === e ? "," : e)
				}
			})
		},
		a1f0: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("9ed3"),
				a = n("1d80"),
				o = n("50c4"),
				s = n("1c0b"),
				u = n("825a"),
				c = n("c6b6"),
				l = n("44e7"),
				f = n("ad6d"),
				d = n("9112"),
				h = n("d039"),
				p = n("b622"),
				_ = n("4840"),
				m = n("8aa5"),
				b = n("69f3"),
				g = n("c430"),
				v = p("matchAll"),
				y = "RegExp String",
				A = y + " Iterator",
				S = b.set,
				w = b.getterFor(A),
				E = RegExp.prototype,
				T = E.exec,
				C = "".matchAll,
				$ = !!C && !h((function() {
					"a".matchAll(/./)
				})),
				k = i((function(e, t, n, r) {
					S(this, {
						type: A,
						regexp: e,
						string: t,
						global: n,
						unicode: r,
						done: !1
					})
				}), y, (function() {
					var e = w(this);
					if (e.done) return {
						value: void 0,
						done: !0
					};
					var t = e.regexp,
						n = e.string,
						r = function(e, t) {
							var n, r = e.exec;
							if ("function" == typeof r) {
								if ("object" != typeof(n = r.call(e, t))) throw TypeError("Incorrect exec result");
								return n
							}
							return T.call(e, t)
						}(t, n);
					return null === r ? {
						value: void 0,
						done: e.done = !0
					} : e.global ? ("" == String(r[0]) && (t.lastIndex = m(n, o(t.lastIndex), e.unicode)), {
						value: r,
						done: !1
					}) : (e.done = !0, {
						value: r,
						done: !1
					})
				})),
				O = function(e) {
					var t, n, r, i, a, s, c = u(this),
						l = String(e);
					return t = _(c, RegExp), void 0 === (n = c.flags) && c instanceof RegExp && !("flags" in E) && (n = f.call(c)), r = void 0 === n ? "" : String(n), i = new t(t === RegExp ? c.source : c, r), a = !!~r.indexOf("g"), s = !!~r.indexOf("u"), i.lastIndex = o(c.lastIndex), new k(i, l, a, s)
				};
			r({
				target: "String",
				proto: !0,
				forced: $
			}, {
				matchAll: function(e) {
					var t, n, r, i = a(this);
					if (null != e) {
						if (l(e) && !~String(a("flags" in E ? e.flags : f.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
						if ($) return C.apply(i, arguments);
						if (void 0 === (n = e[v]) && g && "RegExp" == c(e) && (n = O), null != n) return s(n).call(e, i)
					} else if ($) return C.apply(i, arguments);
					return t = String(i), r = new RegExp(e, "g"), g ? O.call(r, t) : r[v](t)
				}
			}), g || v in E || d(E, v, O)
		},
		a2bf: function(e, t, n) {
			"use strict";
			var r = n("e8b5"),
				i = n("50c4"),
				a = n("0366"),
				o = function(e, t, n, s, u, c, l, f) {
					for (var d, h = u, p = 0, _ = !!l && a(l, f, 3); p < s;) {
						if (p in n) {
							if (d = _ ? _(n[p], p, t) : n[p], c > 0 && r(d)) h = o(e, t, d, i(d.length), h, c - 1) - 1;
							else {
								if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
								e[h] = d
							}
							h++
						}
						p++
					}
					return h
				};
			e.exports = o
		},
		a2cb: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = void 0, t.version = "3.38.0";
			var r = n("6ec2");
			Object.defineProperty(t, "UIManager", {
				enumerable: !0,
				get: function() {
					return r.UIManager
				}
			}), Object.defineProperty(t, "UIInstanceManager", {
				enumerable: !0,
				get: function() {
					return r.UIInstanceManager
				}
			});
			var i = n("d659");
			Object.defineProperty(t, "UIFactory", {
				enumerable: !0,
				get: function() {
					return i.UIFactory
				}
			});
			var a = n("baca");
			Object.defineProperty(t, "DemoFactory", {
				enumerable: !0,
				get: function() {
					return a.DemoFactory
				}
			});
			var o = n("a341");
			Object.defineProperty(t, "ArrayUtils", {
				enumerable: !0,
				get: function() {
					return o.ArrayUtils
				}
			});
			var s = n("0c29");
			Object.defineProperty(t, "StringUtils", {
				enumerable: !0,
				get: function() {
					return s.StringUtils
				}
			});
			var u = n("4344");
			Object.defineProperty(t, "PlayerUtils", {
				enumerable: !0,
				get: function() {
					return u.PlayerUtils
				}
			});
			var c = n("f109");
			Object.defineProperty(t, "UIUtils", {
				enumerable: !0,
				get: function() {
					return c.UIUtils
				}
			});
			var l = n("8e8b");
			Object.defineProperty(t, "BrowserUtils", {
				enumerable: !0,
				get: function() {
					return l.BrowserUtils
				}
			});
			var f = n("9f27");
			Object.defineProperty(t, "StorageUtils", {
				enumerable: !0,
				get: function() {
					return f.StorageUtils
				}
			});
			var d = n("b57d");
			Object.defineProperty(t, "ErrorUtils", {
				enumerable: !0,
				get: function() {
					return d.ErrorUtils
				}
			});
			var h = n("48da");
			Object.defineProperty(t, "Button", {
				enumerable: !0,
				get: function() {
					return h.Button
				}
			});
			var p = n("ac0e");
			Object.defineProperty(t, "ControlBar", {
				enumerable: !0,
				get: function() {
					return p.ControlBar
				}
			});
			var _ = n("61c8");
			Object.defineProperty(t, "FullscreenToggleButton", {
				enumerable: !0,
				get: function() {
					return _.FullscreenToggleButton
				}
			});
			var m = n("ab39");
			Object.defineProperty(t, "HugePlaybackToggleButton", {
				enumerable: !0,
				get: function() {
					return m.HugePlaybackToggleButton
				}
			});
			var b = n("b10a");
			Object.defineProperty(t, "PlaybackTimeLabel", {
				enumerable: !0,
				get: function() {
					return b.PlaybackTimeLabel
				}
			}), Object.defineProperty(t, "PlaybackTimeLabelMode", {
				enumerable: !0,
				get: function() {
					return b.PlaybackTimeLabelMode
				}
			});
			var g = n("6811");
			Object.defineProperty(t, "PlaybackToggleButton", {
				enumerable: !0,
				get: function() {
					return g.PlaybackToggleButton
				}
			});
			var v = n("fb10");
			Object.defineProperty(t, "SeekBar", {
				enumerable: !0,
				get: function() {
					return v.SeekBar
				}
			});
			var y = n("a92a");
			Object.defineProperty(t, "SelectBox", {
				enumerable: !0,
				get: function() {
					return y.SelectBox
				}
			});
			var A = n("7471");
			Object.defineProperty(t, "ItemSelectionList", {
				enumerable: !0,
				get: function() {
					return A.ItemSelectionList
				}
			});
			var S = n("1040");
			Object.defineProperty(t, "SettingsPanel", {
				enumerable: !0,
				get: function() {
					return S.SettingsPanel
				}
			});
			var w = n("fb99");
			Object.defineProperty(t, "SettingsToggleButton", {
				enumerable: !0,
				get: function() {
					return w.SettingsToggleButton
				}
			});
			var E = n("30b0");
			Object.defineProperty(t, "ToggleButton", {
				enumerable: !0,
				get: function() {
					return E.ToggleButton
				}
			});
			var T = n("66d4");
			Object.defineProperty(t, "VideoQualitySelectBox", {
				enumerable: !0,
				get: function() {
					return T.VideoQualitySelectBox
				}
			});
			var C = n("f23d");
			Object.defineProperty(t, "VolumeToggleButton", {
				enumerable: !0,
				get: function() {
					return C.VolumeToggleButton
				}
			});
			var $ = n("0558");
			Object.defineProperty(t, "VRToggleButton", {
				enumerable: !0,
				get: function() {
					return $.VRToggleButton
				}
			});
			var k = n("7fa6");
			Object.defineProperty(t, "Watermark", {
				enumerable: !0,
				get: function() {
					return k.Watermark
				}
			});
			var O = n("b491");
			Object.defineProperty(t, "UIContainer", {
				enumerable: !0,
				get: function() {
					return O.UIContainer
				}
			});
			var x = n("fdec");
			Object.defineProperty(t, "Container", {
				enumerable: !0,
				get: function() {
					return x.Container
				}
			});
			var P = n("b8bf");
			Object.defineProperty(t, "Label", {
				enumerable: !0,
				get: function() {
					return P.Label
				}
			});
			var M = n("f1b5");
			Object.defineProperty(t, "AudioQualitySelectBox", {
				enumerable: !0,
				get: function() {
					return M.AudioQualitySelectBox
				}
			});
			var I = n("63e8");
			Object.defineProperty(t, "AudioTrackSelectBox", {
				enumerable: !0,
				get: function() {
					return I.AudioTrackSelectBox
				}
			});
			var L = n("31bb");
			Object.defineProperty(t, "CastStatusOverlay", {
				enumerable: !0,
				get: function() {
					return L.CastStatusOverlay
				}
			});
			var D = n("98d0");
			Object.defineProperty(t, "CastToggleButton", {
				enumerable: !0,
				get: function() {
					return D.CastToggleButton
				}
			});
			var B = n("587c");
			Object.defineProperty(t, "Component", {
				enumerable: !0,
				get: function() {
					return B.Component
				}
			});
			var N = n("37aa");
			Object.defineProperty(t, "ErrorMessageOverlay", {
				enumerable: !0,
				get: function() {
					return N.ErrorMessageOverlay
				}
			});
			var R = n("af03");
			Object.defineProperty(t, "RecommendationOverlay", {
				enumerable: !0,
				get: function() {
					return R.RecommendationOverlay
				}
			});
			var F = n("d8f4");
			Object.defineProperty(t, "SeekBarLabel", {
				enumerable: !0,
				get: function() {
					return F.SeekBarLabel
				}
			});
			var U = n("f00a");
			Object.defineProperty(t, "SubtitleOverlay", {
				enumerable: !0,
				get: function() {
					return U.SubtitleOverlay
				}
			});
			var j = n("ca09");
			Object.defineProperty(t, "SubtitleSelectBox", {
				enumerable: !0,
				get: function() {
					return j.SubtitleSelectBox
				}
			});
			var H = n("1031");
			Object.defineProperty(t, "TitleBar", {
				enumerable: !0,
				get: function() {
					return H.TitleBar
				}
			});
			var Y = n("28f1");
			Object.defineProperty(t, "VolumeControlButton", {
				enumerable: !0,
				get: function() {
					return Y.VolumeControlButton
				}
			});
			var V = n("d1af");
			Object.defineProperty(t, "ClickOverlay", {
				enumerable: !0,
				get: function() {
					return V.ClickOverlay
				}
			});
			var z = n("269c");
			Object.defineProperty(t, "AdSkipButton", {
				enumerable: !0,
				get: function() {
					return z.AdSkipButton
				}
			});
			var Q = n("e12c");
			Object.defineProperty(t, "AdMessageLabel", {
				enumerable: !0,
				get: function() {
					return Q.AdMessageLabel
				}
			});
			var G = n("7bcf");
			Object.defineProperty(t, "AdClickOverlay", {
				enumerable: !0,
				get: function() {
					return G.AdClickOverlay
				}
			});
			var q = n("3d5f");
			Object.defineProperty(t, "PlaybackSpeedSelectBox", {
				enumerable: !0,
				get: function() {
					return q.PlaybackSpeedSelectBox
				}
			});
			var W = n("2408");
			Object.defineProperty(t, "HugeReplayButton", {
				enumerable: !0,
				get: function() {
					return W.HugeReplayButton
				}
			});
			var K = n("f7d3");
			Object.defineProperty(t, "BufferingOverlay", {
				enumerable: !0,
				get: function() {
					return K.BufferingOverlay
				}
			});
			var X = n("7661");
			Object.defineProperty(t, "CastUIContainer", {
				enumerable: !0,
				get: function() {
					return X.CastUIContainer
				}
			});
			var J = n("32ba");
			Object.defineProperty(t, "PlaybackToggleOverlay", {
				enumerable: !0,
				get: function() {
					return J.PlaybackToggleOverlay
				}
			});
			var Z = n("e25d");
			Object.defineProperty(t, "CloseButton", {
				enumerable: !0,
				get: function() {
					return Z.CloseButton
				}
			});
			var ee = n("05fb");
			Object.defineProperty(t, "MetadataLabel", {
				enumerable: !0,
				get: function() {
					return ee.MetadataLabel
				}
			}), Object.defineProperty(t, "MetadataLabelContent", {
				enumerable: !0,
				get: function() {
					return ee.MetadataLabelContent
				}
			});
			var te = n("18b1");
			Object.defineProperty(t, "AirPlayToggleButton", {
				enumerable: !0,
				get: function() {
					return te.AirPlayToggleButton
				}
			});
			var ne = n("8b9a");
			Object.defineProperty(t, "VolumeSlider", {
				enumerable: !0,
				get: function() {
					return ne.VolumeSlider
				}
			});
			var re = n("a9a2");
			Object.defineProperty(t, "PictureInPictureToggleButton", {
				enumerable: !0,
				get: function() {
					return re.PictureInPictureToggleButton
				}
			});
			var ie = n("ac6c");
			Object.defineProperty(t, "Spacer", {
				enumerable: !0,
				get: function() {
					return ie.Spacer
				}
			});
			var ae = n("94d9");
			Object.defineProperty(t, "BackgroundColorSelectBox", {
				enumerable: !0,
				get: function() {
					return ae.BackgroundColorSelectBox
				}
			});
			var oe = n("2502");
			Object.defineProperty(t, "BackgroundOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return oe.BackgroundOpacitySelectBox
				}
			});
			var se = n("65e0");
			Object.defineProperty(t, "CharacterEdgeSelectBox", {
				enumerable: !0,
				get: function() {
					return se.CharacterEdgeSelectBox
				}
			});
			var ue = n("4820");
			Object.defineProperty(t, "FontColorSelectBox", {
				enumerable: !0,
				get: function() {
					return ue.FontColorSelectBox
				}
			});
			var ce = n("7594");
			Object.defineProperty(t, "FontFamilySelectBox", {
				enumerable: !0,
				get: function() {
					return ce.FontFamilySelectBox
				}
			});
			var le = n("673d");
			Object.defineProperty(t, "FontOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return le.FontOpacitySelectBox
				}
			});
			var fe = n("e277");
			Object.defineProperty(t, "FontSizeSelectBox", {
				enumerable: !0,
				get: function() {
					return fe.FontSizeSelectBox
				}
			});
			var de = n("cb76");
			Object.defineProperty(t, "SubtitleSettingSelectBox", {
				enumerable: !0,
				get: function() {
					return de.SubtitleSettingSelectBox
				}
			});
			var he = n("41ef");
			Object.defineProperty(t, "SubtitleSettingsLabel", {
				enumerable: !0,
				get: function() {
					return he.SubtitleSettingsLabel
				}
			});
			var pe = n("49cc");
			Object.defineProperty(t, "WindowColorSelectBox", {
				enumerable: !0,
				get: function() {
					return pe.WindowColorSelectBox
				}
			});
			var _e = n("9e64");
			Object.defineProperty(t, "WindowOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return _e.WindowOpacitySelectBox
				}
			});
			var me = n("1904");
			Object.defineProperty(t, "SubtitleSettingsResetButton", {
				enumerable: !0,
				get: function() {
					return me.SubtitleSettingsResetButton
				}
			});
			var be = n("1521");
			Object.defineProperty(t, "ListBox", {
				enumerable: !0,
				get: function() {
					return be.ListBox
				}
			});
			var ge = n("4f95");
			Object.defineProperty(t, "SubtitleListBox", {
				enumerable: !0,
				get: function() {
					return ge.SubtitleListBox
				}
			});
			var ve = n("a5ab");
			Object.defineProperty(t, "AudioTrackListBox", {
				enumerable: !0,
				get: function() {
					return ve.AudioTrackListBox
				}
			});
			var ye = n("d82d");
			Object.defineProperty(t, "SettingsPanelPage", {
				enumerable: !0,
				get: function() {
					return ye.SettingsPanelPage
				}
			});
			var Ae = n("9166");
			Object.defineProperty(t, "SettingsPanelPageBackButton", {
				enumerable: !0,
				get: function() {
					return Ae.SettingsPanelPageBackButton
				}
			});
			var Se = n("94a0");
			Object.defineProperty(t, "SettingsPanelPageOpenButton", {
				enumerable: !0,
				get: function() {
					return Se.SettingsPanelPageOpenButton
				}
			});
			var we = n("630a");
			Object.defineProperty(t, "SubtitleSettingsPanelPage", {
				enumerable: !0,
				get: function() {
					return we.SubtitleSettingsPanelPage
				}
			});
			var Ee = n("60b3");
			Object.defineProperty(t, "SettingsPanelItem", {
				enumerable: !0,
				get: function() {
					return Ee.SettingsPanelItem
				}
			}), "function" != typeof Object.assign && (Object.assign = function(e) {
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				e = Object(e);
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					if (null != n)
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			})
		},
		a341: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ArrayUtils = void 0,
				function(e) {
					e.remove = function(e, t) {
						var n = e.indexOf(t);
						return n > -1 ? e.splice(n, 1)[0] : null
					}
				}(t.ArrayUtils || (t.ArrayUtils = {}))
		},
		a356: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = function(e) {
						return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
					},
					n = {
						s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
						m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
						h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
						d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
						M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
						y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
					},
					r = function(e) {
						return function(r, i, a, o) {
							var s = t(r),
								u = n[e][t(r)];
							return 2 === s && (u = u[i ? 0 : 1]), u.replace(/%d/i, r)
						}
					},
					i = ["Ø¬Ø§Ù†ÙÙŠ", "ÙÙŠÙØ±ÙŠ", "Ù…Ø§Ø±Ø³", "Ø£ÙØ±ÙŠÙ„", "Ù…Ø§ÙŠ", "Ø¬ÙˆØ§Ù†", "Ø¬ÙˆÙŠÙ„ÙŠØ©", "Ø£ÙˆØª", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
				e.defineLocale("ar-dz", {
					months: i,
					monthsShort: i,
					weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
					weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
					weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "D/â€M/â€YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /Øµ|Ù…/,
					isPM: function(e) {
						return "Ù…" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "Øµ" : "Ù…"
					},
					calendar: {
						sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "Ø¨Ø¹Ø¯ %s",
						past: "Ù…Ù†Ø° %s",
						s: r("s"),
						ss: r("s"),
						m: r("m"),
						mm: r("m"),
						h: r("h"),
						hh: r("h"),
						d: r("d"),
						dd: r("d"),
						M: r("M"),
						MM: r("M"),
						y: r("y"),
						yy: r("y")
					},
					postformat: function(e) {
						return e.replace(/,/g, "ØŒ")
					},
					week: {
						dow: 0,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		a434: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("23cb"),
				a = n("a691"),
				o = n("50c4"),
				s = n("7b0b"),
				u = n("65f0"),
				c = n("8418"),
				l = n("1dde")("splice"),
				f = Math.max,
				d = Math.min,
				h = 9007199254740991,
				p = "Maximum allowed length exceeded";
			r({
				target: "Array",
				proto: !0,
				forced: !l
			}, {
				splice: function(e, t) {
					var n, r, l, _, m, b, g = s(this),
						v = o(g.length),
						y = i(e, v),
						A = arguments.length;
					if (0 === A ? n = r = 0 : 1 === A ? (n = 0, r = v - y) : (n = A - 2, r = d(f(a(t), 0), v - y)), v + n - r > h) throw TypeError(p);
					for (l = u(g, r), _ = 0; _ < r; _++)(m = y + _) in g && c(l, _, g[m]);
					if (l.length = r, n < r) {
						for (_ = y; _ < v - r; _++) b = _ + n, (m = _ + r) in g ? g[b] = g[m] : delete g[b];
						for (_ = v; _ > v - r + n; _--) delete g[_ - 1]
					} else if (n > r)
						for (_ = v - r; _ > y; _--) b = _ + n - 1, (m = _ + r - 1) in g ? g[b] = g[m] : delete g[b];
					for (_ = 0; _ < n; _++) g[_ + y] = arguments[_ + 2];
					return g.length = v - r + n, l
				}
			})
		},
		a4b4: function(e, t, n) {
			var r = n("342f");
			e.exports = /web0s(?!.*chrome)/i.test(r)
		},
		a4d3: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("da84"),
				a = n("d066"),
				o = n("c430"),
				s = n("83ab"),
				u = n("4930"),
				c = n("fdbf"),
				l = n("d039"),
				f = n("5135"),
				d = n("e8b5"),
				h = n("861d"),
				p = n("825a"),
				_ = n("7b0b"),
				m = n("fc6a"),
				b = n("c04e"),
				g = n("5c6c"),
				v = n("7c73"),
				y = n("df75"),
				A = n("241c"),
				S = n("057f"),
				w = n("7418"),
				E = n("06cf"),
				T = n("9bf2"),
				C = n("d1e7"),
				$ = n("9112"),
				k = n("6eeb"),
				O = n("5692"),
				x = n("f772"),
				P = n("d012"),
				M = n("90e3"),
				I = n("b622"),
				L = n("e538"),
				D = n("746f"),
				B = n("d44e"),
				N = n("69f3"),
				R = n("b727").forEach,
				F = x("hidden"),
				U = "Symbol",
				j = "prototype",
				H = I("toPrimitive"),
				Y = N.set,
				V = N.getterFor(U),
				z = Object[j],
				Q = i.Symbol,
				G = a("JSON", "stringify"),
				q = E.f,
				W = T.f,
				K = S.f,
				X = C.f,
				J = O("symbols"),
				Z = O("op-symbols"),
				ee = O("string-to-symbol-registry"),
				te = O("symbol-to-string-registry"),
				ne = O("wks"),
				re = i.QObject,
				ie = !re || !re[j] || !re[j].findChild,
				ae = s && l((function() {
					return 7 != v(W({}, "a", {
						get: function() {
							return W(this, "a", {
								value: 7
							}).a
						}
					})).a
				})) ? function(e, t, n) {
					var r = q(z, t);
					r && delete z[t], W(e, t, n), r && e !== z && W(z, t, r)
				} : W,
				oe = function(e, t) {
					var n = J[e] = v(Q[j]);
					return Y(n, {
						type: U,
						tag: e,
						description: t
					}), s || (n.description = t), n
				},
				se = c ? function(e) {
					return "symbol" == typeof e
				} : function(e) {
					return Object(e) instanceof Q
				},
				ue = function(e, t, n) {
					e === z && ue(Z, t, n), p(e);
					var r = b(t, !0);
					return p(n), f(J, r) ? (n.enumerable ? (f(e, F) && e[F][r] && (e[F][r] = !1), n = v(n, {
						enumerable: g(0, !1)
					})) : (f(e, F) || W(e, F, g(1, {})), e[F][r] = !0), ae(e, r, n)) : W(e, r, n)
				},
				ce = function(e, t) {
					p(e);
					var n = m(t),
						r = y(n).concat(he(n));
					return R(r, (function(t) {
						s && !le.call(n, t) || ue(e, t, n[t])
					})), e
				},
				le = function(e) {
					var t = b(e, !0),
						n = X.call(this, t);
					return !(this === z && f(J, t) && !f(Z, t)) && (!(n || !f(this, t) || !f(J, t) || f(this, F) && this[F][t]) || n)
				},
				fe = function(e, t) {
					var n = m(e),
						r = b(t, !0);
					if (n !== z || !f(J, r) || f(Z, r)) {
						var i = q(n, r);
						return !i || !f(J, r) || f(n, F) && n[F][r] || (i.enumerable = !0), i
					}
				},
				de = function(e) {
					var t = K(m(e)),
						n = [];
					return R(t, (function(e) {
						f(J, e) || f(P, e) || n.push(e)
					})), n
				},
				he = function(e) {
					var t = e === z,
						n = K(t ? Z : m(e)),
						r = [];
					return R(n, (function(e) {
						!f(J, e) || t && !f(z, e) || r.push(J[e])
					})), r
				};
			(u || (k((Q = function() {
				if (this instanceof Q) throw TypeError("Symbol is not a constructor");
				var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
					t = M(e),
					n = function(e) {
						this === z && n.call(Z, e), f(this, F) && f(this[F], t) && (this[F][t] = !1), ae(this, t, g(1, e))
					};
				return s && ie && ae(z, t, {
					configurable: !0,
					set: n
				}), oe(t, e)
			})[j], "toString", (function() {
				return V(this).tag
			})), k(Q, "withoutSetter", (function(e) {
				return oe(M(e), e)
			})), C.f = le, T.f = ue, E.f = fe, A.f = S.f = de, w.f = he, L.f = function(e) {
				return oe(I(e), e)
			}, s && (W(Q[j], "description", {
				configurable: !0,
				get: function() {
					return V(this).description
				}
			}), o || k(z, "propertyIsEnumerable", le, {
				unsafe: !0
			}))), r({
				global: !0,
				wrap: !0,
				forced: !u,
				sham: !u
			}, {
				Symbol: Q
			}), R(y(ne), (function(e) {
				D(e)
			})), r({
				target: U,
				stat: !0,
				forced: !u
			}, {
				for: function(e) {
					var t = String(e);
					if (f(ee, t)) return ee[t];
					var n = Q(t);
					return ee[t] = n, te[n] = t, n
				},
				keyFor: function(e) {
					if (!se(e)) throw TypeError(e + " is not a symbol");
					if (f(te, e)) return te[e]
				},
				useSetter: function() {
					ie = !0
				},
				useSimple: function() {
					ie = !1
				}
			}), r({
				target: "Object",
				stat: !0,
				forced: !u,
				sham: !s
			}, {
				create: function(e, t) {
					return void 0 === t ? v(e) : ce(v(e), t)
				},
				defineProperty: ue,
				defineProperties: ce,
				getOwnPropertyDescriptor: fe
			}), r({
				target: "Object",
				stat: !0,
				forced: !u
			}, {
				getOwnPropertyNames: de,
				getOwnPropertySymbols: he
			}), r({
				target: "Object",
				stat: !0,
				forced: l((function() {
					w.f(1)
				}))
			}, {
				getOwnPropertySymbols: function(e) {
					return w.f(_(e))
				}
			}), G) && r({
				target: "JSON",
				stat: !0,
				forced: !u || l((function() {
					var e = Q();
					return "[null]" != G([e]) || "{}" != G({
						a: e
					}) || "{}" != G(Object(e))
				}))
			}, {
				stringify: function(e, t, n) {
					for (var r, i = [e], a = 1; arguments.length > a;) i.push(arguments[a++]);
					if (r = t, (h(t) || void 0 !== e) && !se(e)) return d(t) || (t = function(e, t) {
						if ("function" == typeof r && (t = r.call(this, e, t)), !se(t)) return t
					}), i[1] = t, G.apply(null, i)
				}
			});
			Q[j][H] || $(Q[j], H, Q[j].valueOf), B(Q, U), P[F] = !0
		},
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

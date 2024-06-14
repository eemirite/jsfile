							}
						}))
					}
				});

			function El(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Tl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? El(Object(n), !0).forEach((function(t) {
						Cl(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : El(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Cl(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var $l = za(Sl, ja.bind(null, "img"));
			$l.imgSrc.required = !1;
			var kl = qa(He(Tl(Tl(Tl(Tl(Tl(Tl({}, il), cl), pl), $l), Kc), {}, {
					align: Va(Jr),
					noBody: Va(Qr, !1)
				})), Dt),
				Ol = r.default.extend({
					name: Dt,
					functional: !0,
					props: kl,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.slots,
							o = t.scopedSlots,
							s = r.imgSrc,
							u = r.imgLeft,
							c = r.imgRight,
							l = r.imgStart,
							f = r.imgEnd,
							d = r.imgBottom,
							h = r.header,
							p = r.headerHtml,
							_ = r.footer,
							m = r.footerHtml,
							b = r.align,
							g = r.textVariant,
							v = r.bgVariant,
							y = r.borderVariant,
							A = o || {},
							S = a(),
							w = {},
							E = e(),
							T = e();
						if (s) {
							var C = e(wl, {
								props: Qa($l, r, Ha.bind(null, "img"))
							});
							d ? T = C : E = C
						}
						var $ = e(),
							k = Za(vi, A, S);
						(k || h || p) && ($ = e(ll, {
							props: Qa(cl, r),
							domProps: k ? {} : Fu(p, h)
						}, eo(vi, w, A, S)));
						var O = eo(_i, w, A, S);
						r.noBody || (O = e(al, {
							props: Qa(il, r)
						}, O), r.overlay && s && (O = e("div", {
							staticClass: "position-relative"
						}, [E, O, T]), E = e(), T = e()));
						var x = e();
						return (Za(gi, A, S) || _ || m) && (x = e(_l, {
							props: Qa(pl, r),
							domProps: k ? {} : Fu(m, _)
						}, eo(gi, w, A, S))), e(r.tag, St(i, {
							staticClass: "card",
							class: (n = {
								"flex-row": u || l,
								"flex-row-reverse": (c || f) && !(u || l)
							}, Cl(n, "text-".concat(b), b), Cl(n, "bg-".concat(v), v), Cl(n, "border-".concat(y), y), Cl(n, "text-".concat(g), g), n)
						}), [E, $, O, x, T])
					}
				});

			function xl(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			var Pl, Ml = "__bv__visibility_observer",
				Il = function() {
					function e(t, n, r) {
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, e), this.el = t, this.callback = n.callback, this.margin = n.margin || 0, this.once = n.once || !1, this.observer = null, this.visible = void 0, this.doneOnce = !1, this.createObserver(r)
					}
					return function(e, t, n) {
						t && xl(e.prototype, t), n && xl(e, n)
					}(e, [{
						key: "createObserver",
						value: function(e) {
							var t = this;
							if (this.observer && this.stop(), !this.doneOnce && ge(this.callback)) {
								try {
									this.observer = new IntersectionObserver(this.handler.bind(this), {
										root: null,
										rootMargin: this.margin,
										threshold: 0
									})
								} catch (e) {
									return this.doneOnce = !0, this.observer = void 0, void this.callback(null)
								}
								e.context.$nextTick((function() {
									Ji((function() {
										t.observer && t.observer.observe(t.el)
									}))
								}))
							}
						}
					}, {
						key: "handler",
						value: function(e) {
							var t = e ? e[0] : {},
								n = Boolean(t.isIntersecting || t.intersectionRatio > 0);
							n !== this.visible && (this.visible = n, this.callback(n), this.once && this.visible && (this.doneOnce = !0, this.stop()))
						}
					}, {
						key: "stop",
						value: function() {
							this.observer && this.observer.disconnect(), this.observer = null
						}
					}]), e
				}(),
				Ll = function(e) {
					var t = e[Ml];
					t && t.stop && t.stop(), delete e[Ml]
				},
				Dl = function(e, t, n) {
					var r = t.value,
						i = t.modifiers,
						a = {
							margin: "0px",
							once: !1,
							callback: r
						};
					Ne(i).forEach((function(e) {
						E.test(e) ? a.margin = "".concat(e, "px") : "once" === e.toLowerCase() && (a.once = !0)
					})), Ll(e), e[Ml] = new Il(e, a, n), e[Ml]._prevModifiers = Fe(i)
				},
				Bl = {
					bind: Dl,
					componentUpdated: function(e, t, n) {
						var r = t.value,
							i = t.oldValue,
							a = t.modifiers;
						a = Fe(a), !e || r === i && e[Ml] && Hs(a, e[Ml]._prevModifiers) || Dl(e, {
							value: r,
							modifiers: a
						}, n)
					},
					unbind: function(e) {
						Ll(e)
					}
				};

			function Nl(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Rl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Nl(Object(n), !0).forEach((function(t) {
						Fl(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nl(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Fl(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ul = "show",
				jl = je(bl, ["blank"]),
				Hl = qa(Rl(Rl({}, jl), {}, Fl({
					blankColor: Va(Jr, "transparent"),
					blankHeight: Va(ui),
					blankSrc: Va(Jr, null),
					blankWidth: Va(ui),
					offset: Va(ui, 360)
				}, Ul, Va(Qr, !1))), Cn),
				Yl = r.default.extend({
					name: Cn,
					directives: {
						"b-visible": Bl
					},
					props: Hl,
					data: function() {
						return {
							isShown: this[Ul]
						}
					},
					computed: {
						computedSrc: function() {
							var e = this.blankSrc;
							return !e || this.isShown ? this.src : e
						},
						computedBlank: function() {
							return !(this.isShown || this.blankSrc)
						},
						computedWidth: function() {
							var e = this.width;
							return this.isShown ? e : this.blankWidth || e
						},
						computedHeight: function() {
							var e = this.height;
							return this.isShown ? e : this.blankHeight || e
						},
						computedSrcset: function() {
							var e = Ii(this.srcset).filter(We).join(",");
							return !this.blankSrc || this.isShown ? e : null
						},
						computedSizes: function() {
							var e = Ii(this.sizes).filter(We).join(",");
							return !this.blankSrc || this.isShown ? e : null
						}
					},
					watch: (Pl = {}, Fl(Pl, Ul, (function(e, t) {
						if (e !== t) {
							var n = !g || e;
							this.isShown = n, n !== e && this.$nextTick(this.updateShowProp)
						}
					})), Fl(Pl, "isShown", (function(e, t) {
						e !== t && this.updateShowProp()
					})), Pl),
					mounted: function() {
						this.isShown = !g || this[Ul]
					},
					methods: {
						updateShowProp: function() {
							this.$emit("update:show", this.isShown)
						},
						doShow: function(e) {
							!e && null !== e || this.isShown || (this.isShown = !0)
						}
					},
					render: function(e) {
						var t, n = [];
						return this.isShown || n.push({
							name: "b-visible",
							value: this.doShow,
							modifiers: (t = {}, Fl(t, "".concat(Ni(this.offset, 0)), !0), Fl(t, "once", !0), t)
						}), e(gl, {
							directives: n,
							props: Rl({
								src: this.computedSrc,
								blank: this.computedBlank,
								width: this.computedWidth,
								height: this.computedHeight,
								srcset: this.computedSrcset || null,
								sizes: this.computedSizes || null
							}, Qa(jl, this.$props))
						})
					}
				});

			function Vl(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function zl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Vl(Object(n), !0).forEach((function(t) {
						Ql(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vl(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ql(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Gl = qa(He(zl(zl({}, je(Hl, Ne(bl))), je(Sl, ["src", "alt", "width", "height"]))), jt),
				ql = r.default.extend({
					name: jt,
					functional: !0,
					props: Gl,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = "card-img";
						return n.top ? i += "-top" : n.right || n.end ? i += "-right" : n.bottom ? i += "-bottom" : (n.left || n.start) && (i += "-left"), e(Yl, St(r, {
							class: [i],
							props: je(n, ["left", "right"])
						}))
					}
				}),
				Wl = qa({
					textTag: Va(Jr, "p")
				}, Yt),
				Kl = r.default.extend({
					name: Yt,
					functional: !0,
					props: Wl,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.textTag, St(r, {
							staticClass: "card-text"
						}), i)
					}
				}),
				Xl = qa({
					columns: Va(Qr, !1),
					deck: Va(Qr, !1),
					tag: Va(Jr, "div")
				}, Rt),
				Jl = r.default.extend({
					name: Rt,
					functional: !0,
					props: Xl,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							class: n.deck ? "card-deck" : n.columns ? "card-columns" : "card-group"
						}), i)
					}
				}),
				Zl = lt({
					components: {
						BCard: Ol,
						BCardHeader: ll,
						BCardBody: al,
						BCardTitle: Jc,
						BCardSubTitle: el,
						BCardFooter: _l,
						BCardImg: wl,
						BCardImgLazy: ql,
						BCardText: Kl,
						BCardGroup: Jl
					}
				}),
				ef = function() {};

			function tf(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function nf(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var rf, af = function(e, t, n) {
				if (e = e ? e.$el || e : null, !ea(e)) return null;
				if (function(e) {
						return !u && (Ze("".concat(e, ": Requires MutationObserver support.")), !0)
					}("observeDom")) return null;
				var r = new Zi((function(e) {
					for (var n = !1, r = 0; r < e.length && !n; r++) {
						var i = e[r],
							a = i.type,
							o = i.target;
						("characterData" === a && o.nodeType === Node.TEXT_NODE || "attributes" === a || "childList" === a && (i.addedNodes.length > 0 || i.removedNodes.length > 0)) && (n = !0)
					}
					n && t()
				}));
				return r.observe(e, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? tf(Object(n), !0).forEach((function(t) {
							nf(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tf(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					childList: !0,
					subtree: !0
				}, n)), r
			};

			function of (e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sf(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? of (Object(n), !0).forEach((function(t) {
						uf(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : of (Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function uf(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var cf = Ja("value", {
					type: Wr,
					defaultValue: 0
				}),
				lf = cf.mixin,
				ff = cf.props,
				df = cf.prop,
				hf = cf.event,
				pf = {
					next: {
						dirClass: "carousel-item-left",
						overlayClass: "carousel-item-next"
					},
					prev: {
						dirClass: "carousel-item-right",
						overlayClass: "carousel-item-prev"
					}
				},
				_f = {
					TOUCH: "touch",
					PEN: "pen"
				},
				mf = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "otransitionend oTransitionEnd",
					transition: "transitionend"
				},
				bf = qa(He(sf(sf(sf({}, Nc), ff), {}, {
					background: Va(Jr),
					controls: Va(Qr, !1),
					fade: Va(Qr, !1),
					imgHeight: Va(ui),
					imgWidth: Va(ui),
					indicators: Va(Qr, !1),
					interval: Va(Wr, 5e3),
					labelGotoSlide: Va(Jr, "Goto slide"),
					labelIndicators: Va(Jr, "Select a slide to display"),
					labelNext: Va(Jr, "Next slide"),
					labelPrev: Va(Jr, "Previous slide"),
					noAnimation: Va(Qr, !1),
					noHoverPause: Va(Qr, !1),
					noTouch: Va(Qr, !1),
					noWrap: Va(Qr, !1)
				})), zt),
				gf = r.default.extend({
					name: zt,
					mixins: [Rc, lf, to],
					provide: function() {
						return {
							bvCarousel: this
						}
					},
					props: bf,
					data: function() {
						return {
							index: this[df] || 0,
							isSliding: !1,
							transitionEndEvent: null,
							slides: [],
							direction: null,
							isPaused: !(Ni(this.interval, 0) > 0),
							touchStartX: 0,
							touchDeltaX: 0
						}
					},
					computed: {
						numSlides: function() {
							return this.slides.length
						}
					},
					watch: (rf = {}, uf(rf, df, (function(e, t) {
						e !== t && this.setSlide(Ni(e, 0))
					})), uf(rf, "interval", (function(e, t) {
						e !== t && (e ? (this.pause(!0), this.start(!1)) : this.pause(!1))
					})), uf(rf, "isPaused", (function(e, t) {
						e !== t && this.$emit(e ? "paused" : "unpaused")
					})), uf(rf, "index", (function(e, t) {
						e === t || this.isSliding || this.doSlide(e, t)
					})), rf),
					created: function() {
						this.$_interval = null, this.$_animationTimeout = null, this.$_touchTimeout = null, this.$_observer = null, this.isPaused = !(Ni(this.interval, 0) > 0)
					},
					mounted: function() {
						this.transitionEndEvent = function(e) {
							for (var t in mf)
								if (!_e(e.style[t])) return mf[t];
							return null
						}(this.$el) || null, this.updateSlides(), this.setObserver(!0)
					},
					beforeDestroy: function() {
						this.clearInterval(), this.clearAnimationTimeout(), this.clearTouchTimeout(), this.setObserver(!1)
					},
					methods: {
						clearInterval: function(e) {
							function t() {
								return e.apply(this, arguments)
							}
							return t.toString = function() {
								return e.toString()
							}, t
						}((function() {
							clearInterval(this.$_interval), this.$_interval = null
						})),
						clearAnimationTimeout: function() {
							clearTimeout(this.$_animationTimeout), this.$_animationTimeout = null
						},
						clearTouchTimeout: function() {
							clearTimeout(this.$_touchTimeout), this.$_touchTimeout = null
						},
						setObserver: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							this.$_observer && this.$_observer.disconnect(), this.$_observer = null, e && (this.$_observer = af(this.$refs.inner, this.updateSlides.bind(this), {
								subtree: !1,
								childList: !0,
								attributes: !0,
								attributeFilter: ["id"]
							}))
						},
						setSlide: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (!(c && document.visibilityState && document.hidden)) {
								var r = this.noWrap,
									i = this.numSlides;
								e = Ro(e), 0 !== i && (this.isSliding ? this.$once(Nr, (function() {
									Ji((function() {
										return t.setSlide(e, n)
									}))
								})) : (this.direction = n, this.index = e >= i ? r ? i - 1 : 0 : e < 0 ? r ? 0 : i - 1 : e, r && this.index !== e && this.index !== this[df] && this.$emit(hf, this.index)))
							}
						},
						prev: function() {
							this.setSlide(this.index - 1, "prev")
						},
						next: function() {
							this.setSlide(this.index + 1, "next")
						},
						pause: function(e) {
							e || (this.isPaused = !0), this.clearInterval()
						},
						start: function(e) {
							e || (this.isPaused = !1), this.clearInterval(), this.interval && this.numSlides > 1 && (this.$_interval = setInterval(this.next, Do(1e3, this.interval)))
						},
						restart: function() {
							this.$el.contains(ta()) || this.start()
						},
						doSlide: function(e, t) {
							var n = this,
								r = Boolean(this.interval),
								i = this.calcDirection(this.direction, t, e),
								a = i.overlayClass,
								o = i.dirClass,
								s = this.slides[t],
								u = this.slides[e];
							if (s && u) {
								if (this.isSliding = !0, r && this.pause(!1), this.$emit("sliding-start", e), this.$emit(hf, this.index), this.noAnimation) ha(u, "active"), pa(s, "active"), this.isSliding = !1, this.$nextTick((function() {
									return n.$emit(Nr, e)
								}));
								else {
									ha(u, a), oa(u), ha(s, o), ha(u, o);
									var c = !1,
										l = function t() {
											if (!c) {
												if (c = !0, n.transitionEndEvent) n.transitionEndEvent.split(/\s+/).forEach((function(e) {
													return io(u, e, t, Yr)
												}));
												n.clearAnimationTimeout(), pa(u, o), pa(u, a), ha(u, "active"), pa(s, "active"), pa(s, o), pa(s, a), ma(s, "aria-current", "false"), ma(u, "aria-current", "true"), ma(s, "aria-hidden", "true"), ma(u, "aria-hidden", "false"), n.isSliding = !1, n.direction = null, n.$nextTick((function() {
													return n.$emit(Nr, e)
												}))
											}
										};
									if (this.transitionEndEvent) this.transitionEndEvent.split(/\s+/).forEach((function(e) {
										return ro(u, e, l, Yr)
									}));
									this.$_animationTimeout = setTimeout(l, 650)
								}
								r && this.start(!1)
							}
						},
						updateSlides: function() {
							this.pause(!0), this.slides = sa(".carousel-item", this.$refs.inner);
							var e = this.slides.length,
								t = Do(0, Lo(Ro(this.index), e - 1));
							this.slides.forEach((function(n, r) {
								var i = r + 1;
								r === t ? (ha(n, "active"), ma(n, "aria-current", "true")) : (pa(n, "active"), ma(n, "aria-current", "false")), ma(n, "aria-posinset", String(i)), ma(n, "aria-setsize", String(e))
							})), this.setSlide(t), this.start(this.isPaused)
						},
						calcDirection: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
							return e ? pf[e] : n > t ? pf.next : pf.prev
						},
						handleClick: function(e, t) {
							var n = e.keyCode;
							"click" !== e.type && n !== Us && n !== Bs || (oo(e), t())
						},
						handleSwipe: function() {
							var e = Bo(this.touchDeltaX);
							if (!(e <= 40)) {
								var t = e / this.touchDeltaX;
								this.touchDeltaX = 0, t > 0 ? this.prev() : t < 0 && this.next()
							}
						},
						touchStart: function(e) {
							b && _f[e.pointerType.toUpperCase()] ? this.touchStartX = e.clientX : b || (this.touchStartX = e.touches[0].clientX)
						},
						touchMove: function(e) {
							e.touches && e.touches.length > 1 ? this.touchDeltaX = 0 : this.touchDeltaX = e.touches[0].clientX - this.touchStartX
						},
						touchEnd: function(e) {
							b && _f[e.pointerType.toUpperCase()] && (this.touchDeltaX = e.clientX - this.touchStartX), this.handleSwipe(), this.pause(!1), this.clearTouchTimeout(), this.$_touchTimeout = setTimeout(this.start, 500 + Do(1e3, this.interval))
						}
					},
					render: function(e) {
						var t = this,
							n = this.indicators,
							r = this.background,
							i = this.noAnimation,
							a = this.noHoverPause,
							o = this.noTouch,
							s = this.index,
							u = this.isSliding,
							c = this.pause,
							l = this.restart,
							f = this.touchStart,
							d = this.touchEnd,
							h = this.safeId("__BV_inner_"),
							p = e("div", {
								staticClass: "carousel-inner",
								attrs: {
									id: h,
									role: "list"
								},
								ref: "inner"
							}, [this.normalizeSlot()]),
							_ = e();
						if (this.controls) {
							var g = function(n, r, i) {
								var a = function(e) {
									u ? oo(e, {
										propagation: !1
									}) : t.handleClick(e, i)
								};
								return e("a", {
									staticClass: "carousel-control-".concat(n),
									attrs: {
										href: "#",
										role: "button",
										"aria-controls": h,
										"aria-disabled": u ? "true" : null
									},
									on: {
										click: a,
										keydown: a
									}
								}, [e("span", {
									staticClass: "carousel-control-".concat(n, "-icon"),
									attrs: {
										"aria-hidden": "true"
									}
								}), e("span", {
									class: "sr-only"
								}, [r])])
							};
							_ = [g("prev", this.labelPrev, this.prev), g("next", this.labelNext, this.next)]
						}
						var v = e("ol", {
								staticClass: "carousel-indicators",
								directives: [{
									name: "show",
									value: n
								}],
								attrs: {
									id: this.safeId("__BV_indicators_"),
									"aria-hidden": n ? "false" : "true",
									"aria-label": this.labelIndicators,
									"aria-owns": h
								}
							}, this.slides.map((function(r, i) {
								var a = function(e) {
									t.handleClick(e, (function() {
										t.setSlide(i)
									}))
								};
								return e("li", {
									class: {
										active: i === s
									},
									attrs: {
										role: "button",
										id: t.safeId("__BV_indicator_".concat(i + 1, "_")),
										tabindex: n ? "0" : "-1",
										"aria-current": i === s ? "true" : "false",
										"aria-label": "".concat(t.labelGotoSlide, " ").concat(i + 1),
										"aria-describedby": r.id || null,
										"aria-controls": h
									},
									on: {
										click: a,
										keydown: a
									},
									key: "slide_".concat(i)
								})
							}))),
							y = {
								mouseenter: a ? ef : c,
								mouseleave: a ? ef : l,
								focusin: c,
								focusout: l,
								keydown: function(e) {
									if (!/input|textarea/i.test(e.target.tagName)) {
										var n = e.keyCode;
										n !== Rs && n !== Fs || (oo(e), t[n === Rs ? "prev" : "next"]())
									}
								}
							};
						return m && !o && (b ? (y["&pointerdown"] = f, y["&pointerup"] = d) : (y["&touchstart"] = f, y["&touchmove"] = this.touchMove, y["&touchend"] = d)), e("div", {
							staticClass: "carousel",
							class: {
								slide: !i, "carousel-fade": !i && this.fade, "pointer-event": m && b && !o
							},
							style: {
								background: r
							},
							attrs: {
								role: "region",
								id: this.safeId(),
								"aria-busy": u ? "true" : "false"
							},
							on: y
						}, [p, _, v])
					}
				});

			function vf(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yf(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? vf(Object(n), !0).forEach((function(t) {
						Af(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vf(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Af(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Sf, wf = {
					imgAlt: Va(Jr),
					imgBlank: Va(Qr, !1),
					imgBlankColor: Va(Jr, "transparent"),
					imgHeight: Va(ui),
					imgSrc: Va(Jr),
					imgWidth: Va(ui)
				},
				Ef = qa(He(yf(yf(yf({}, Nc), wf), {}, {
					background: Va(Jr),
					caption: Va(Jr),
					captionHtml: Va(Jr),
					captionTag: Va(Jr, "h3"),
					contentTag: Va(Jr, "div"),
					contentVisibleUp: Va(Jr),
					text: Va(Jr),
					textHtml: Va(Jr),
					textTag: Va(Jr, "p")
				})), Qt),
				Tf = lt({
					components: {
						BCarousel: gf,
						BCarouselSlide: r.default.extend({
							name: Qt,
							mixins: [Rc, to],
							inject: {
								bvCarousel: {
									default: function() {
										return {
											noTouch: !0
										}
									}
								}
							},
							props: Ef,
							computed: {
								contentClasses: function() {
									return [this.contentVisibleUp ? "d-none" : "", this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ""]
								},
								computedWidth: function() {
									return this.imgWidth || this.bvCarousel.imgWidth || null
								},
								computedHeight: function() {
									return this.imgHeight || this.bvCarousel.imgHeight || null
								}
							},
							render: function(e) {
								var t = this.normalizeSlot("img");
								if (!t && (this.imgSrc || this.imgBlank)) {
									var n = {};
									!this.bvCarousel.noTouch && m && (n.dragstart = function(e) {
										return oo(e, {
											propagation: !1
										})
									}), t = e(gl, {
										props: yf(yf({}, Qa(wf, this.$props, Ha.bind(null, "img"))), {}, {
											width: this.computedWidth,
											height: this.computedHeight,
											fluidGrow: !0,
											block: !0
										}),
										on: n
									})
								}
								var r = [!(!this.caption && !this.captionHtml) && e(this.captionTag, {
										domProps: Fu(this.captionHtml, this.caption)
									}), !(!this.text && !this.textHtml) && e(this.textTag, {
										domProps: Fu(this.textHtml, this.text)
									}), this.normalizeSlot() || !1],
									i = e();
								return r.some(We) && (i = e(this.contentTag, {
									staticClass: "carousel-caption",
									class: this.contentClasses
								}, r.map((function(t) {
									return t || e()
								})))), e("div", {
									staticClass: "carousel-item",
									style: {
										background: this.background || this.bvCarousel.background || null
									},
									attrs: {
										id: this.safeId(),
										role: "listitem"
									}
								}, [t, i])
							}
						})
					}
				}),
				Cf = "show",
				$f = {
					css: !0,
					enterClass: "",
					enterActiveClass: "collapsing",
					enterToClass: "collapse show",
					leaveClass: "collapse show",
					leaveActiveClass: "collapsing",
					leaveToClass: "collapse"
				},
				kf = {
					enter: function(e) {
						ya(e, "height", 0), Ji((function() {
							oa(e), ya(e, "height", "".concat(e.scrollHeight, "px"))
						}))
					},
					afterEnter: function(e) {
						Aa(e, "height")
					},
					leave: function(e) {
						ya(e, "height", "auto"), ya(e, "display", "block"), ya(e, "height", "".concat(wa(e).height, "px")), oa(e), ya(e, "height", 0)
					},
					afterLeave: function(e) {
						Aa(e, "height")
					}
				},
				Of = {
					appear: Va(Qr, !1)
				},
				xf = r.default.extend({
					name: "BVCollapse",
					functional: !0,
					props: Of,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e("transition", St(r, {
							props: $f,
							on: kf
						}, {
							props: n
						}), i)
					}
				});

			function Pf(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Mf(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Pf(Object(n), !0).forEach((function(t) {
						If(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pf(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function If(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Lf = co(Gt, "toggle"),
				Df = co(Gt, "request-state"),
				Bf = uo(Gt, "accordion"),
				Nf = uo(Gt, "state"),
				Rf = uo(Gt, "sync-state"),
				Ff = Ja("visible", {
					type: Qr,
					defaultValue: !1
				}),
				Uf = Ff.mixin,
				jf = Ff.props,
				Hf = Ff.prop,
				Yf = Ff.event,
				Vf = qa(He(Mf(Mf(Mf({}, Nc), jf), {}, {
					accordion: Va(Jr),
					appear: Va(Qr, !1),
					isNav: Va(Qr, !1),
					tag: Va(Jr, "div")
				})), Gt),
				zf = r.default.extend({
					name: Gt,
					mixins: [Rc, Uf, to, qs],
					props: Vf,
					data: function() {
						return {
							show: this[Hf],
							transitioning: !1
						}
					},
					computed: {
						classObject: function() {
							var e = this.transitioning;
							return {
								"navbar-collapse": this.isNav,
								collapse: !e,
								show: this.show && !e
							}
						},
						slotScope: function() {
							var e = this;
							return {
								visible: this.show,
								close: function() {
									e.show = !1
								}
							}
						}
					},
					watch: (Sf = {}, If(Sf, Hf, (function(e) {
						e !== this.show && (this.show = e)
					})), If(Sf, "show", (function(e, t) {
						e !== t && this.emitState()
					})), Sf),
					created: function() {
						this.show = this[Hf]
					},
					mounted: function() {
						var e = this;
						this.show = this[Hf], this.listenOnRoot(Lf, this.handleToggleEvt), this.listenOnRoot(Bf, this.handleAccordionEvt), this.isNav && (this.setWindowEvents(!0), this.handleResize()), this.$nextTick((function() {
							e.emitState()
						})), this.listenOnRoot(Df, (function(t) {
							t === e.safeId() && e.$nextTick(e.emitSync)
						}))
					},
					updated: function() {
						this.emitSync()
					},
					deactivated: function() {
						this.isNav && this.setWindowEvents(!1)
					},
					activated: function() {
						this.isNav && this.setWindowEvents(!0), this.emitSync()
					},
					beforeDestroy: function() {
						this.show = !1, this.isNav && c && this.setWindowEvents(!1)
					},
					methods: {
						setWindowEvents: function(e) {
							ao(e, window, "resize", this.handleResize, Yr), ao(e, window, "orientationchange", this.handleResize, Yr)
						},
						toggle: function() {
							this.show = !this.show
						},
						onEnter: function() {
							this.transitioning = !0, this.$emit(Dr)
						},
						onAfterEnter: function() {
							this.transitioning = !1, this.$emit(Br)
						},
						onLeave: function() {
							this.transitioning = !0, this.$emit($r)
						},
						onAfterLeave: function() {
							this.transitioning = !1, this.$emit(Cr)
						},
						emitState: function() {
							var e = this.show,
								t = this.accordion,
								n = this.safeId();
							this.$emit(Yf, e), this.emitOnRoot(Nf, n, e), t && e && this.emitOnRoot(Bf, n, t)
						},
						emitSync: function() {
							this.emitOnRoot(Rf, this.safeId(), this.show)
						},
						checkDisplayBlock: function() {
							var e = this.$el,
								t = _a(e, Cf);
							pa(e, Cf);
							var n = "block" === Ea(e).display;
							return t && ha(e, Cf), n
						},
						clickHandler: function(e) {
							var t = e.target;
							this.isNav && t && "block" === Ea(this.$el).display && (!ca(t, ".nav-link,.dropdown-item") && !la(".nav-link,.dropdown-item", t) || this.checkDisplayBlock() || (this.show = !1))
						},
						handleToggleEvt: function(e) {
							e === this.safeId() && this.toggle()
						},
						handleAccordionEvt: function(e, t) {
							var n = this.accordion,
								r = this.show;
							if (n && n === t) {
								var i = e === this.safeId();
								(i && !r || !i && r) && this.toggle()
							}
						},
						handleResize: function() {
							this.show = "block" === Ea(this.$el).display
						}
					},
					render: function(e) {
						var t = this.appear,
							n = e(this.tag, {
								class: this.classObject,
								directives: [{
									name: "show",
									value: this.show
								}],
								attrs: {
									id: this.safeId()
								},
								on: {
									click: this.clickHandler
								}
							}, this.normalizeSlot(_i, this.slotScope));
						return e(xf, {
							props: {
								appear: t
							},
							on: {
								enter: this.onEnter,
								afterEnter: this.onAfterEnter,
								leave: this.onLeave,
								afterLeave: this.onAfterLeave
							}
						}, [n])
					}
				}),
				Qf = "collapsed",
				Gf = "not-collapsed",
				qf = "__BV_toggle",
				Wf = "".concat(qf, "_HANDLER__"),
				Kf = "".concat(qf, "_CLICK__"),
				Xf = "".concat(qf, "_STATE__"),
				Jf = "".concat(qf, "_TARGETS__"),
				Zf = "aria-controls",
				ed = "aria-expanded",
				td = "role",
				nd = "tabindex",
				rd = "overflow-anchor",
				id = co(Gt, "toggle"),
				ad = uo(Gt, "state"),
				od = uo(Gt, "sync-state"),
				sd = co(Gt, "request-state"),
				ud = [Bs, Us],
				cd = function(e) {
					return !Mi(["button", "a"], e.tagName.toLowerCase())
				},
				ld = function(e) {
					var t = e[Kf];
					t && (io(e, "click", t, Hr), io(e, "keydown", t, Hr)), e[Kf] = null
				},
				fd = function(e, t) {
					e[Wf] && t.context && t.context.$root.$off([ad, od], e[Wf]), e[Wf] = null
				},
				dd = function(e, t) {
					t ? (pa(e, Qf), ha(e, Gf), ma(e, ed, "true")) : (pa(e, Gf), ha(e, Qf), ma(e, ed, "false"))
				},
				hd = function(e, t) {
					e[t] = null, delete e[t]
				},
				pd = function(e, t, n) {
					if (c && n.context) {
						cd(e) && (va(e, td) || ma(e, td, "button"), va(e, nd) || ma(e, nd, "0")), dd(e, e[Xf]);
						var r = function(e, t) {
							var n = e.modifiers,
								r = e.arg,
								i = e.value,
								a = Ne(n || {});
							if (i = ye(i) ? i.split(D) : i, na(t.tagName, "a")) {
								var o = ga(t, "href") || "";
								$.test(o) && a.push(o.replace(C, ""))
							}
							return Ii(r, i).forEach((function(e) {
								return ye(e) && a.push(e)
							})), a.filter((function(e, t, n) {
								return e && n.indexOf(e) === t
							}))
						}(t, e);
						r.length > 0 ? (ma(e, Zf, r.join(" ")), ya(e, rd, "none")) : (ba(e, Zf), Aa(e, rd)), Ji((function() {
							! function(e, t) {
								if (ld(e), t.context) {
									var n = function(n) {
										"keydown" === n.type && !Mi(ud, n.keyCode) || aa(e) || (e[Jf] || []).forEach((function(e) {
											t.context.$root.$emit(id, e)
										}))
									};
									e[Kf] = n, ro(e, "click", n, Hr), cd(e) && ro(e, "keydown", n, Hr)
								}
							}(e, n)
						})), Hs(r, e[Jf]) || (e[Jf] = r, r.forEach((function(e) {
							n.context.$root.$emit(sd, e)
						})))
					}
				},
				_d = {
					bind: function(e, t, n) {
						e[Xf] = !1, e[Jf] = [],
							function(e, t) {
								if (fd(e, t), t.context) {
									var n = function(t, n) {
										Mi(e[Jf] || [], t) && (e[Xf] = n, dd(e, n))
									};
									e[Wf] = n, t.context.$root.$on([ad, od], n)
								}
							}(e, n), pd(e, t, n)
					},
					componentUpdated: pd,
					updated: pd,
					unbind: function(e, t, n) {
						ld(e), fd(e, n), hd(e, Wf), hd(e, Kf), hd(e, Xf), hd(e, Jf), pa(e, Qf), pa(e, Gf), ba(e, ed), ba(e, Zf), ba(e, td), Aa(e, rd)
					}
				},
				md = lt({
					directives: {
						VBToggle: _d
					}
				}),
				bd = lt({
					components: {
						BCollapse: zf
					},
					plugins: {
						VBTogglePlugin: md
					}
				}),
				gd = n("f0bd");

			function vd(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function yd(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			var Ad = function() {
					function e(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if (vd(this, e), !t) throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
						Me(this, e.Defaults, this.constructor.Defaults, n, {
							type: t
						}), Le(this, {
							type: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							cancelable: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							nativeEvent: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							target: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							relatedTarget: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							vueTarget: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							},
							componentId: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							}
						});
						var r = !1;
						this.preventDefault = function() {
							this.cancelable && (r = !0)
						}, De(this, "defaultPrevented", {
							enumerable: !0,
							get: function() {
								return r
							}
						})
					}
					return function(e, t, n) {
						t && yd(e.prototype, t), n && yd(e, n)
					}(e, null, [{
						key: "Defaults",
						get: function() {
							return {
								type: "",
								cancelable: !0,
								nativeEvent: null,
								target: null,
								relatedTarget: null,
								vueTarget: null,
								componentId: null
							}
						}
					}]), e
				}(),
				Sd = r.default.extend({
					data: function() {
						return {
							listenForClickOut: !1
						}
					},
					watch: {
						listenForClickOut: function(e, t) {
							e !== t && (io(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, Yr), e && ro(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, Yr))
						}
					},
					beforeCreate: function() {
						this.clickOutElement = null, this.clickOutEventName = null
					},
					mounted: function() {
						this.clickOutElement || (this.clickOutElement = document), this.clickOutEventName || (this.clickOutEventName = "click"), this.listenForClickOut && ro(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, Yr)
					},
					beforeDestroy: function() {
						io(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, Yr)
					},
					methods: {
						isClickOut: function(e) {
							return !fa(this.$el, e.target)
						},
						_clickOutHandler: function(e) {
							this.clickOutHandler && this.isClickOut(e) && this.clickOutHandler(e)
						}
					}
				}),
				wd = r.default.extend({
					data: function() {
						return {
							listenForFocusIn: !1
						}
					},
					watch: {
						listenForFocusIn: function(e, t) {
							e !== t && (io(this.focusInElement, "focusin", this._focusInHandler, Yr), e && ro(this.focusInElement, "focusin", this._focusInHandler, Yr))
						}
					},
					beforeCreate: function() {
						this.focusInElement = null
					},
					mounted: function() {
						this.focusInElement || (this.focusInElement = document), this.listenForFocusIn && ro(this.focusInElement, "focusin", this._focusInHandler, Yr)
					},
					beforeDestroy: function() {
						io(this.focusInElement, "focusin", this._focusInHandler, Yr)
					},
					methods: {
						_focusInHandler: function(e) {
							this.focusInHandler && this.focusInHandler(e)
						}
					}
				});

			function Ed(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Td(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ed(Object(n), !0).forEach((function(t) {
						Cd(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ed(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Cd(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var $d = uo(Wt, Br),
				kd = uo(Wt, Cr),
				Od = [".dropdown-item", ".b-dropdown-form"].map((function(e) {
					return "".concat(e, ":not(.disabled):not([disabled])")
				})).join(", "),
				xd = qa(He(Td(Td({}, Nc), {}, {
					boundary: Va([le, Jr], "scrollParent"),
					disabled: Va(Qr, !1),
					dropleft: Va(Qr, !1),
					dropright: Va(Qr, !1),
					dropup: Va(Qr, !1),
					noFlip: Va(Qr, !1),
					offset: Va(ui, 0),
					popperOpts: Va(Kr, {}),
					right: Va(Qr, !1)
				})), Wt),
				Pd = r.default.extend({
					mixins: [Rc, qs, Sd, wd],
					provide: function() {
						return {
							bvDropdown: this
						}
					},
					inject: {
						bvNavbar: {
							default: null
						}
					},
					props: xd,
					data: function() {
						return {
							visible: !1,
							visibleChangePrevented: !1
						}
					},
					computed: {
						inNavbar: function() {
							return !me(this.bvNavbar)
						},
						toggler: function() {
							var e = this.$refs.toggle;
							return e ? e.$el || e : null
						},
						directionClass: function() {
							return this.dropup ? "dropup" : this.dropright ? "dropright" : this.dropleft ? "dropleft" : ""
						},
						boundaryClass: function() {
							return "scrollParent" === this.boundary || this.inNavbar ? "" : "position-static"
						}
					},
					watch: {
						visible: function(e, t) {
							if (this.visibleChangePrevented) this.visibleChangePrevented = !1;
							else if (e !== t) {
								var n = new Ad(e ? Dr : $r, {
									cancelable: !0,
									vueTarget: this,
									target: this.$refs.menu,
									relatedTarget: null,
									componentId: this.safeId ? this.safeId() : this.id || null
								});
								if (this.emitEvent(n), n.defaultPrevented) return this.visibleChangePrevented = !0, this.visible = t, void this.$off(Cr, this.focusToggler);
								e ? this.showMenu() : this.hideMenu()
							}
						},
						disabled: function(e, t) {
							e !== t && e && this.visible && (this.visible = !1)
						}
					},
					created: function() {
						this.$_popper = null, this.$_hideTimeout = null
					},
					deactivated: function() {
						this.visible = !1, this.whileOpenListen(!1), this.destroyPopper()
					},
					beforeDestroy: function() {
						this.visible = !1, this.whileOpenListen(!1), this.destroyPopper(), this.clearHideTimeout()
					},
					methods: {
						emitEvent: function(e) {
							var t = e.type;
							this.emitOnRoot(uo(Wt, t), e), this.$emit(t, e)
						},
						showMenu: function() {
							var e = this;
							if (!this.disabled) {
								if (!this.inNavbar)
									if (void 0 === gd.a) Ze("Popper.js not found. Falling back to CSS positioning", Wt);
									else {
										var t = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle;
										t = t.$el || t, this.createPopper(t)
									} this.emitOnRoot($d, this), this.whileOpenListen(!0), this.$nextTick((function() {
									e.focusMenu(), e.$emit(Br)
								}))
							}
						},
						hideMenu: function() {
							this.whileOpenListen(!1), this.emitOnRoot(kd, this), this.$emit(Cr), this.destroyPopper()
						},
						createPopper: function(e) {
							this.destroyPopper(), this.$_popper = new gd.a(e, this.$refs.menu, this.getPopperConfig())
						},
						destroyPopper: function() {
							this.$_popper && this.$_popper.destroy(), this.$_popper = null
						},
						updatePopper: function() {
							try {
								this.$_popper.scheduleUpdate()
							} catch (e) {}
						},
						clearHideTimeout: function() {
							clearTimeout(this.$_hideTimeout), this.$_hideTimeout = null
						},
						getPopperConfig: function() {
							var e = "bottom-start";
							this.dropup ? e = this.right ? "top-end" : "top-start" : this.dropright ? e = "right-start" : this.dropleft ? e = "left-start" : this.right && (e = "bottom-end");
							var t = {
									placement: e,
									modifiers: {
										offset: {
											offset: this.offset || 0
										},
										flip: {
											enabled: !this.noFlip
										}
									}
								},
								n = this.boundary;
							return n && (t.modifiers.preventOverflow = {
									boundariesElement: n
								}),
								function e(t, n) {
									return Ee(t) && Ee(n) && Ne(n).forEach((function(r) {
										Ee(n[r]) ? (t[r] && Ee(t[r]) || (t[r] = n[r]), e(t[r], n[r])) : Me(t, Pe({}, r, n[r]))
									})), t
								}(t, this.popperOpts || {})
						},
						whileOpenListen: function(e) {
							this.listenForClickOut = e, this.listenForFocusIn = e;
							var t = e ? "$on" : "$off";
							this.$root[t]($d, this.rootCloseListener)
						},
						rootCloseListener: function(e) {
							e !== this && (this.visible = !1)
						},
						show: function() {
							var e = this;
							this.disabled || Ji((function() {
								e.visible = !0
							}))
						},
						hide: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							this.disabled || (this.visible = !1, e && this.$once(Cr, this.focusToggler))
						},
						toggle: function(e) {
							var t = e = e || {},
								n = t.type,
								r = t.keyCode;
							("click" === n || "keydown" === n && -1 !== [Bs, Us, Ls].indexOf(r)) && (this.disabled ? this.visible = !1 : (this.$emit("toggle", e), oo(e), this.visible ? this.hide(!0) : this.show()))
						},
						onMousedown: function(e) {
							oo(e, {
								propagation: !1
							})
						},
						onKeydown: function(e) {
							var t = e.keyCode;
							27 === t ? this.onEsc(e) : t === Ls ? this.focusNext(e, !1) : t === js && this.focusNext(e, !0)
						},
						onEsc: function(e) {
							this.visible && (this.visible = !1, oo(e), this.$once(Cr, this.focusToggler))
						},
						onSplitClick: function(e) {
							this.disabled ? this.visible = !1 : this.$emit(hr, e)
						},
						hideHandler: function(e) {
							var t = this,
								n = e.target;
							!this.visible || fa(this.$refs.menu, n) || fa(this.toggler, n) || (this.clearHideTimeout(), this.$_hideTimeout = setTimeout((function() {
								return t.hide()
							}), this.inNavbar ? 300 : 0))
						},
						clickOutHandler: function(e) {
							this.hideHandler(e)
						},
						focusInHandler: function(e) {
							this.hideHandler(e)
						},
						focusNext: function(e, t) {
							var n = this,
								r = e.target;
							!this.visible || e && la(".dropdown form", r) || (oo(e), this.$nextTick((function() {
								var e = n.getItems();
								if (!(e.length < 1)) {
									var i = e.indexOf(r);
									t && i > 0 ? i-- : !t && i < e.length - 1 && i++, i < 0 && (i = 0), n.focusItem(i, e)
								}
							})))
						},
						focusItem: function(e, t) {
							var n = t.find((function(t, n) {
								return n === e
							}));
							Oa(n)
						},
						getItems: function() {
							return function(e) {
								return (e || []).filter(ia)
							}(sa(Od, this.$refs.menu))
						},
						focusMenu: function() {
							Oa(this.$refs.menu)
						},
						focusToggler: function() {
							var e = this;
							this.$nextTick((function() {
								Oa(e.toggler)
							}))
						}
					}
				});

			function Md(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Id(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Md(Object(n), !0).forEach((function(t) {
						Ld(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Md(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ld(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Dd = qa(He(Id(Id(Id({}, Nc), xd), {}, {
					block: Va(Qr, !1),
					html: Va(Jr),
					lazy: Va(Qr, !1),
					menuClass: Va(ti),
					noCaret: Va(Qr, !1),
					role: Va(Jr, "menu"),
					size: Va(Jr),
					split: Va(Qr, !1),
					splitButtonType: Va(Jr, "button", (function(e) {
						return Mi(["button", "submit", "reset"], e)
					})),
					splitClass: Va(ti),
					splitHref: Va(Jr),
					splitTo: Va(fi),
					splitVariant: Va(Jr),
					text: Va(Jr),
					toggleClass: Va(ti),
					toggleTag: Va(Jr, "button"),
					toggleText: Va(Jr, "Toggle dropdown"),
					variant: Va(Jr, "secondary")
				})), Wt),
				Bd = r.default.extend({
					name: Wt,
					mixins: [Rc, Pd, to],
					props: Dd,
					computed: {
						dropdownClasses: function() {
							var e = this.block,
								t = this.split;
							return [this.directionClass, this.boundaryClass, {
								show: this.visible,
								"btn-group": t || !e,
								"d-flex": e && t
							}]
						},
						menuClasses: function() {
							return [this.menuClass, {
								"dropdown-menu-right": this.right,
								show: this.visible
							}]
						},
						toggleClasses: function() {
							var e = this.split;
							return [this.toggleClass, {
								"dropdown-toggle-split": e,
								"dropdown-toggle-no-caret": this.noCaret && !e
							}]
						}
					},
					render: function(e) {
						var t = this.visible,
							n = this.variant,
							r = this.size,
							i = this.block,
							a = this.disabled,
							o = this.split,
							s = this.role,
							u = this.hide,
							c = this.toggle,
							l = {
								variant: n,
								size: r,
								block: i,
								disabled: a
							},
							f = this.normalizeSlot(hi),
							d = this.hasNormalizedSlot(hi) ? {} : Fu(this.html, this.text),
							h = e();
						if (o) {
							var p = this.splitTo,
								_ = this.splitHref,
								m = this.splitButtonType,
								b = Id(Id({}, l), {}, {
									variant: this.splitVariant || n
								});
							p ? b.to = p : _ ? b.href = _ : m && (b.type = m), h = e(vu, {
								class: this.splitClass,
								attrs: {
									id: this.safeId("_BV_button_")
								},
								props: b,
								domProps: d,
								on: {
									click: this.onSplitClick
								},
								ref: "button"
							}, f), f = [e("span", {
								class: ["sr-only"]
							}, [this.toggleText])], d = {}
						}
						var g = e(vu, {
								staticClass: "dropdown-toggle",
								class: this.toggleClasses,
								attrs: {
									id: this.safeId("_BV_toggle_"),
									"aria-haspopup": "true",
									"aria-expanded": zi(t)
								},
								props: Id(Id({}, l), {}, {
									tag: this.toggleTag,
									block: i && !o
								}),
								domProps: d,
								on: {
									mousedown: this.onMousedown,
									click: c,
									keydown: c
								},
								ref: "toggle"
							}, f),
							v = e("ul", {
								staticClass: "dropdown-menu",
								class: this.menuClasses,
								attrs: {
									role: s,
									tabindex: "-1",
									"aria-labelledby": this.safeId(o ? "_BV_button_" : "_BV_toggle_")
								},
								on: {
									keydown: this.onKeydown
								},
								ref: "menu"
							}, [!this.lazy || t ? this.normalizeSlot(_i, {
								hide: u
							}) : e()]);
						return e("div", {
							staticClass: "dropdown b-dropdown",
							class: this.dropdownClasses,
							attrs: {
								id: this.safeId()
							}
						}, [h, g, v])
					}
				});

			function Nd(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Rd(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Nd(Object(n), !0).forEach((function(t) {
						Fd(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nd(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Fd(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ud = je(iu, ["event", "routerTag"]),
				jd = qa(He(Rd(Rd({}, Ud), {}, {
					linkClass: Va(ti),
					variant: Va(Jr)
				})), en),
				Hd = r.default.extend({
					name: en,
					mixins: [Gs, to],
					inject: {
						bvDropdown: {
							default: null
						}
					},
					inheritAttrs: !1,
					props: jd,
					computed: {
						computedAttrs: function() {
							return Rd(Rd({}, this.bvAttrs), {}, {
								role: "menuitem"
							})
						}
					},
					methods: {
						closeDropdown: function() {
							var e = this;
							Ji((function() {
								e.bvDropdown && e.bvDropdown.hide(!0)
							}))
						},
						onClick: function(e) {
							this.$emit(hr, e), this.closeDropdown()
						}
					},
					render: function(e) {
						var t = this.linkClass,
							n = this.variant,
							r = this.active,
							i = this.disabled,
							a = this.onClick,
							o = this.bvAttrs;
						return e("li", {
							class: o.class,
							style: o.style,
							attrs: {
								role: "presentation"
							}
						}, [e(au, {
							staticClass: "dropdown-item",
							class: [t, Fd({}, "text-".concat(n), n && !(r || i))],
							props: Qa(Ud, this.$props),
							attrs: this.computedAttrs,
							on: {
								click: a
							},
							ref: "item"
						}, this.normalizeSlot())])
					}
				});

			function Yd(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Vd(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Yd(Object(n), !0).forEach((function(t) {
						zd(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yd(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function zd(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Qd = qa({
					active: Va(Qr, !1),
					activeClass: Va(Jr, "active"),
					buttonClass: Va(ti),
					disabled: Va(Qr, !1),
					variant: Va(Jr)
				}, tn),
				Gd = r.default.extend({
					name: tn,
					mixins: [Gs, to],
					inject: {
						bvDropdown: {
							default: null
						}
					},
					inheritAttrs: !1,
					props: Qd,
					computed: {
						computedAttrs: function() {
							return Vd(Vd({}, this.bvAttrs), {}, {
								role: "menuitem",
								type: "button",
								disabled: this.disabled
							})
						}
					},
					methods: {
						closeDropdown: function() {
							this.bvDropdown && this.bvDropdown.hide(!0)
						},
						onClick: function(e) {
							this.$emit(hr, e), this.closeDropdown()
						}
					},
					render: function(e) {
						var t, n = this.active,
							r = this.variant,
							i = this.bvAttrs;
						return e("li", {
							class: i.class,
							style: i.style,
							attrs: {
								role: "presentation"
							}
						}, [e("button", {
							staticClass: "dropdown-item",
							class: [this.buttonClass, (t = {}, zd(t, this.activeClass, n), zd(t, "text-".concat(r), r && !(n || this.disabled)), t)],
							attrs: this.computedAttrs,
							on: {
								click: this.onClick
							},
							ref: "button"
						}, this.normalizeSlot())])
					}
				});

			function qd(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Wd(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? qd(Object(n), !0).forEach((function(t) {
						Kd(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qd(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Kd(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Xd = qa({
					id: Va(Jr),
					tag: Va(Jr, "header"),
					variant: Va(Jr)
				}, Zt),
				Jd = r.default.extend({
					name: Zt,
					functional: !0,
					props: Xd,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.tag,
							o = n.variant;
						return e("li", St(je(r, ["attrs"]), {
							attrs: {
								role: "presentation"
							}
						}), [e(a, {
							staticClass: "dropdown-header",
							class: Kd({}, "text-".concat(o), o),
							attrs: Wd(Wd({}, r.attrs || {}), {}, {
								id: n.id || null,
								role: na(a, "header") ? null : "heading"
							}),
							ref: "header"
						}, i)])
					}
				});

			function Zd(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function eh(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Zd(Object(n), !0).forEach((function(t) {
						th(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zd(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function th(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var nh = qa({
					tag: Va(Jr, "hr")
				}, Kt),
				rh = r.default.extend({
					name: Kt,
					functional: !0,
					props: nh,
					render: function(e, t) {
						var n = t.props,
							r = t.data;
						return e("li", St(je(r, ["attrs"]), {
							attrs: {
								role: "presentation"
							}
						}), [e(n.tag, {
							staticClass: "dropdown-divider",
							attrs: eh(eh({}, r.attrs || {}), {}, {
								role: "separator",
								"aria-orientation": "horizontal"
							}),
							ref: "divider"
						})])
					}
				}),
				ih = qa({
					id: Va(Jr),
					inline: Va(Qr, !1),
					novalidate: Va(Qr, !1),
					validated: Va(Qr, !1)
				}, "BForm"),
				ah = r.default.extend({
					name: "BForm",
					functional: !0,
					props: ih,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e("form", St(r, {
							class: {
								"form-inline": n.inline, "was-validated": n.validated
							},
							attrs: {
								id: n.id,
								novalidate: n.novalidate
							}
						}), i)
					}
				});

			function oh(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sh(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? oh(Object(n), !0).forEach((function(t) {
						uh(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oh(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function uh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var ch = qa(He(sh(sh({}, ih), {}, {
					disabled: Va(Qr, !1),
					formClass: Va(ti)
				})), Xt),
				lh = r.default.extend({
					name: Xt,
					functional: !0,
					props: ch,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.listeners,
							a = t.children;
						return e("li", St(je(r, ["attrs", "on"]), {
							attrs: {
								role: "presentation"
							}
						}), [e(ah, {
							staticClass: "b-dropdown-form",
							class: [n.formClass, {
								disabled: n.disabled
							}],
							props: n,
							attrs: sh(sh({}, r.attrs || {}), {}, {
								disabled: n.disabled,
								tabindex: n.disabled ? null : "-1"
							}),
							on: i,
							ref: "form"
						}, a)])
					}
				});

			function fh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var dh = qa({
					tag: Va(Jr, "p"),
					textClass: Va(ti),
					variant: Va(Jr)
				}, nn),
				hh = r.default.extend({
					name: nn,
					functional: !0,
					props: dh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.tag,
							o = n.textClass,
							s = n.variant;
						return e("li", St(je(r, ["attrs"]), {
							attrs: {
								role: "presentation"
							}
						}), [e(a, {
							staticClass: "b-dropdown-text",
							class: [o, fh({}, "text-".concat(s), s)],
							props: n,
							attrs: r.attrs || {},
							ref: "text"
						}, i)])
					}
				});

			function ph(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function _h(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ph(Object(n), !0).forEach((function(t) {
						mh(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ph(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function mh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var bh = qa({
					ariaDescribedby: Va(Jr),
					header: Va(Jr),
					headerClasses: Va(ti),
					headerTag: Va(Jr, "header"),
					headerVariant: Va(Jr),
					id: Va(Jr)
				}, Jt),
				gh = r.default.extend({
					name: Jt,
					functional: !0,
					props: bh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.slots,
							a = t.scopedSlots,
							o = n.id,
							s = n.variant,
							u = n.header,
							c = n.headerTag,
							l = i(),
							f = a || {},
							d = {},
							h = o ? "_bv_".concat(o, "_group_dd_header") : null,
							p = e();
						return (Za(vi, f, l) || u) && (p = e(c, {
							staticClass: "dropdown-header",
							class: [n.headerClasses, mh({}, "text-".concat(s), s)],
							attrs: {
								id: h,
								role: na(c, "header") ? null : "heading"
							}
						}, eo(vi, d, f, l) || u)), e("li", St(je(r, ["attrs"]), {
							attrs: {
								role: "presentation"
							}
						}), [p, e("ul", {
							staticClass: "list-unstyled",
							attrs: _h(_h({}, r.attrs || {}), {}, {
								id: o,
								role: "group",
								"aria-describedby": [h, n.ariaDescribedBy].filter(We).join(" ").trim() || null
							})
						}, eo(_i, d, f, l))])
					}
				}),
				vh = lt({
					components: {
						BDropdown: Bd,
						BDd: Bd,
						BDropdownItem: Hd,
						BDdItem: Hd,
						BDropdownItemButton: Gd,
						BDropdownItemBtn: Gd,
						BDdItemButton: Gd,
						BDdItemBtn: Gd,
						BDropdownHeader: Jd,
						BDdHeader: Jd,
						BDropdownDivider: rh,
						BDdDivider: rh,
						BDropdownForm: lh,
						BDdForm: lh,
						BDropdownText: hh,
						BDdText: hh,
						BDropdownGroup: gh,
						BDdGroup: gh
					}
				});

			function yh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ah = ["iframe", "embed", "video", "object", "img", "b-img", "b-img-lazy"],
				Sh = qa({
					aspect: Va(Jr, "16by9"),
					tag: Va(Jr, "div"),
					type: Va(Jr, "iframe", (function(e) {
						return Mi(Ah, e)
					}))
				}, "BEmbed"),
				wh = lt({
					components: {
						BEmbed: r.default.extend({
							name: "BEmbed",
							functional: !0,
							props: Sh,
							render: function(e, t) {
								var n = t.props,
									r = t.data,
									i = t.children,
									a = n.aspect;
								return e(n.tag, {
									staticClass: "embed-responsive",
									class: yh({}, "embed-responsive-".concat(a), a),
									ref: r.ref
								}, [e(n.type, St(je(r, ["ref"]), {
									staticClass: "embed-responsive-item"
								}), i)])
							}
						})
					}
				}),
				Eh = qa({
					disabledField: Va(Jr, "disabled"),
					htmlField: Va(Jr, "html"),
					options: Va(ei, []),
					textField: Va(Jr, "text"),
					valueField: Va(Jr, "value")
				}, "formOptionControls"),
				Th = r.default.extend({
					props: Eh,
					computed: {
						formOptions: function() {
							return this.normalizeOptions(this.options)
						}
					},
					methods: {
						normalizeOption: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (Te(e)) {
								var n = Xe(e, this.valueField),
									r = Xe(e, this.textField);
								return {
									value: _e(n) ? t || r : n,
									text: Ru(String(_e(r) ? t : r)),
									html: Xe(e, this.htmlField),
									disabled: Boolean(Xe(e, this.disabledField))
								}
							}
							return {
								value: t || e,
								text: Ru(String(e)),
								disabled: !1
							}
						},
						normalizeOptions: function(e) {
							var t = this;
							return we(e) ? e.map((function(e) {
								return t.normalizeOption(e)
							})) : Te(e) ? (Ze('Setting prop "options" to an object is deprecated. Use the array format instead.', this.$options.name), Ne(e).map((function(n) {
								return t.normalizeOption(e[n] || {}, n)
							}))) : []
						}
					}
				});

			function Ch(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function $h(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ch(Object(n), !0).forEach((function(t) {
						kh(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ch(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function kh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Oh = qa(He($h($h({}, Eh), {}, {
					id: Va(Jr, void 0, !0)
				})), on),
				xh = r.default.extend({
					name: on,
					mixins: [Th, to],
					props: Oh,
					render: function(e) {
						var t = this.id,
							n = this.formOptions.map((function(t, n) {
								var r = t.value,
									i = t.text,
									a = t.html,
									o = t.disabled;
								return e("option", {
									attrs: {
										value: r,
										disabled: o
									},
									domProps: Fu(a, i),
									key: "option_".concat(n)
								})
							}));
						return e("datalist", {
							attrs: {
								id: t
							}
						}, [n, this.normalizeSlot()])
					}
				});

			function Ph(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Mh, Ih, Lh = qa({
					id: Va(Jr),
					inline: Va(Qr, !1),
					tag: Va(Jr, "small"),
					textVariant: Va(Jr, "muted")
				}, Sn),
				Dh = r.default.extend({
					name: Sn,
					functional: !0,
					props: Lh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							class: Ph({
								"form-text": !n.inline
							}, "text-".concat(n.textVariant), n.textVariant),
							attrs: {
								id: n.id
							}
						}), i)
					}
				}),
				Bh = qa({
					ariaLive: Va(Jr),
					forceShow: Va(Qr, !1),
					id: Va(Jr),
					role: Va(Jr),
					state: Va(Qr, null),
					tag: Va(Jr, "div"),
					tooltip: Va(Qr, !1)
				}, fn),
				Nh = r.default.extend({
					name: fn,
					functional: !0,
					props: Bh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.tooltip,
							o = n.ariaLive,
							s = !0 === n.forceShow || !1 === n.state;
						return e(n.tag, St(r, {
							class: {
								"d-block": s, "invalid-feedback": !a, "invalid-tooltip": a
							},
							attrs: {
								id: n.id || null,
								role: n.role || null,
								"aria-live": o || null,
								"aria-atomic": o ? "true" : null
							}
						}), i)
					}
				}),
				Rh = qa({
					ariaLive: Va(Jr),
					forceShow: Va(Qr, !1),
					id: Va(Jr),
					role: Va(Jr),
					state: Va(Qr, null),
					tag: Va(Jr, "div"),
					tooltip: Va(Qr, !1)
				}, Tn),
				Fh = r.default.extend({
					name: Tn,
					functional: !0,
					props: Rh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.tooltip,
							o = n.ariaLive,
							s = !0 === n.forceShow || !0 === n.state;
						return e(n.tag, St(r, {
							class: {
								"d-block": s, "valid-feedback": !a, "valid-tooltip": a
							},
							attrs: {
								id: n.id || null,
								role: n.role || null,
								"aria-live": o || null,
								"aria-atomic": o ? "true" : null
							}
						}), i)
					}
				}),
				Uh = qa({
					tag: Va(Jr, "div")
				}, _n),
				jh = r.default.extend({
					name: _n,
					functional: !0,
					props: Uh,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							staticClass: "form-row"
						}), i)
					}
				}),
				Hh = lt({
					components: {
						BForm: ah,
						BFormDatalist: xh,
						BDatalist: xh,
						BFormText: Dh,
						BFormInvalidFeedback: Nh,
						BFormFeedback: Nh,
						BFormValidFeedback: Fh,
						BFormRow: jh
					}
				}),
				Yh = function(e, t) {
					for (var n = 0; n < e.length; n++)
						if (Hs(e[n], t)) return n;
					return -1
				},
				Vh = "input, textarea, select",
				zh = qa({
					autofocus: Va(Qr, !1),
					disabled: Va(Qr, !1),
					form: Va(Jr),
					id: Va(Jr),
					name: Va(Jr),
					required: Va(Qr, !1)
				}, "formControls"),
				Qh = r.default.extend({
					props: zh,
					mounted: function() {
						this.handleAutofocus()
					},
					activated: function() {
						this.handleAutofocus()
					},
					methods: {
						handleAutofocus: function() {
							var e = this;
							this.$nextTick((function() {
								Ji((function() {
									var t = e.$el;
									e.autofocus && ia(t) && (ca(t, Vh) || (t = ua(Vh, t)), Oa(t))
								}))
							}))
						}
					}
				}),
				Gh = qa({
					plain: Va(Qr, !1)
				}, "formControls"),
				qh = r.default.extend({
					props: Gh,
					computed: {
						custom: function() {
							return !this.plain
						}
					}
				}),
				Wh = qa({
					size: Va(Jr)
				}, "formControls"),
				Kh = r.default.extend({
					props: Wh,
					computed: {
						sizeFormClass: function() {
							return [this.size ? "form-control-".concat(this.size) : null]
						}
					}
				}),
				Xh = qa({
					state: Va(Qr, null)
				}, "formState"),
				Jh = r.default.extend({
					props: Xh,
					computed: {
						computedState: function() {
							return ve(this.state) ? this.state : null
						},
						stateClass: function() {
							var e = this.computedState;
							return !0 === e ? "is-valid" : !1 === e ? "is-invalid" : null
						},
						computedAriaInvalid: function() {
							var e = this.ariaInvalid;
							return !0 === e || "true" === e || "" === e || !1 === this.computedState ? "true" : e
						}
					}
				});

			function Zh(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ep(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Zh(Object(n), !0).forEach((function(t) {
						tp(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zh(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function tp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var np, rp = Ja("checked", {
					defaultValue: null
				}),
				ip = rp.mixin,
				ap = rp.props,
				op = rp.prop,
				sp = rp.event,
				up = qa(He(ep(ep(ep(ep(ep(ep(ep({}, Nc), ap), zh), Wh), Xh), Gh), {}, {
					ariaLabel: Va(Jr),
					ariaLabelledby: Va(Jr),
					button: Va(Qr, !1),
					buttonVariant: Va(Jr),
					inline: Va(Qr, !1),
					value: Va(Vr)
				})), "formRadioCheckControls"),
				cp = r.default.extend({
					mixins: [Gs, Rc, ip, to, Qh, Kh, Jh, qh],
					inheritAttrs: !1,
					props: up,
					data: function() {
						return {
							localChecked: this.isGroup ? this.bvGroup[op] : this[op],
							hasFocus: !1
						}
					},
					computed: {
						computedLocalChecked: {
							get: function() {
								return this.isGroup ? this.bvGroup.localChecked : this.localChecked
							},
							set: function(e) {
								this.isGroup ? this.bvGroup.localChecked = e : this.localChecked = e
							}
						},
						isChecked: function() {
							return Hs(this.value, this.computedLocalChecked)
						},
						isRadio: function() {
							return !0
						},
						isGroup: function() {
							return !!this.bvGroup
						},
						isBtnMode: function() {
							return this.isGroup ? this.bvGroup.buttons : this.button
						},
						isPlain: function() {
							return !this.isBtnMode && (this.isGroup ? this.bvGroup.plain : this.plain)
						},
						isCustom: function() {
							return !this.isBtnMode && !this.isPlain
						},
						isSwitch: function() {
							return !(this.isBtnMode || this.isRadio || this.isPlain) && (this.isGroup ? this.bvGroup.switches : this.switch)
						},
						isInline: function() {
							return this.isGroup ? this.bvGroup.inline : this.inline
						},
						isDisabled: function() {
							return this.isGroup && this.bvGroup.disabled || this.disabled
						},
						isRequired: function() {
							return this.computedName && (this.isGroup ? this.bvGroup.required : this.required)
						},
						computedName: function() {
							return (this.isGroup ? this.bvGroup.groupName : this.name) || null
						},
						computedForm: function() {
							return (this.isGroup ? this.bvGroup.form : this.form) || null
						},
						computedSize: function() {
							return (this.isGroup ? this.bvGroup.size : this.size) || ""
						},
						computedState: function() {
							return this.isGroup ? this.bvGroup.computedState : ve(this.state) ? this.state : null
						},
						computedButtonVariant: function() {
							return this.buttonVariant || (this.isGroup && this.bvGroup.buttonVariant ? this.bvGroup.buttonVariant : "secondary")
						},
						buttonClasses: function() {
							var e, t = this.computedSize;
							return ["btn", "btn-".concat(this.computedButtonVariant), (e = {}, tp(e, "btn-".concat(t), t), tp(e, "disabled", this.isDisabled), tp(e, "active", this.isChecked), tp(e, "focus", this.hasFocus), e)]
						},
						computedAttrs: function() {
							var e = this.isDisabled,
								t = this.isRequired;
							return ep(ep({}, this.bvAttrs), {}, {
								id: this.safeId(),
								type: this.isRadio ? "radio" : "checkbox",
								name: this.computedName,
								form: this.computedForm,
								disabled: e,
								required: t,
								"aria-required": t || null,
								"aria-label": this.ariaLabel || null,
								"aria-labelledby": this.ariaLabelledby || null
							})
						}
					},
					watch: (Mh = {}, tp(Mh, op, (function() {
						this["".concat(op, "Watcher")].apply(this, arguments)
					})), tp(Mh, "computedLocalChecked", (function() {
						this.computedLocalCheckedWatcher.apply(this, arguments)
					})), Mh),
					methods: (Ih = {}, tp(Ih, "".concat(op, "Watcher"), (function(e) {
						Hs(e, this.computedLocalChecked) || (this.computedLocalChecked = e)
					})), tp(Ih, "computedLocalCheckedWatcher", (function(e, t) {
						Hs(e, t) || this.$emit(sp, e)
					})), tp(Ih, "handleChange", (function(e) {
						var t = this,
							n = e.target.checked,
							r = this.value,
							i = n ? r : null;
						this.computedLocalChecked = r, this.$nextTick((function() {
							t.$emit(dr, i), t.isGroup && t.bvGroup.$emit(dr, i)
						}))
					})), tp(Ih, "handleFocus", (function(e) {
						e.target && ("focus" === e.type ? this.hasFocus = !0 : "blur" === e.type && (this.hasFocus = !1))
					})), tp(Ih, "focus", (function() {
						this.isDisabled || Oa(this.$refs.input)
					})), tp(Ih, "blur", (function() {
						this.isDisabled || xa(this.$refs.input)
					})), Ih),
					render: function(e) {
						var t = this.isRadio,
							n = this.isBtnMode,
							r = this.isPlain,
							i = this.isCustom,
							a = this.isInline,
							o = this.isSwitch,
							s = this.computedSize,
							u = this.bvAttrs,
							c = this.normalizeSlot(),
							l = e("input", {
								class: [{
									"form-check-input": r,
									"custom-control-input": i,
									"position-static": r && !c
								}, n ? "" : this.stateClass],
								directives: [{
									name: "model",
									value: this.computedLocalChecked
								}],
								attrs: this.computedAttrs,
								domProps: {
									value: this.value,
									checked: this.isChecked
								},
								on: ep({
									change: this.handleChange
								}, n ? {
									focus: this.handleFocus,
									blur: this.handleFocus
								} : {}),
								key: "input",
								ref: "input"
							});
						if (n) {
							var f = e("label", {
								class: this.buttonClasses
							}, [l, c]);
							return this.isGroup || (f = e("div", {
								class: ["btn-group-toggle", "d-inline-block"]
							}, [f])), f
						}
						var d = e();
						return r && !c || (d = e("label", {
							class: {
								"form-check-label": r, "custom-control-label": i
							},
							attrs: {
								for: this.safeId()
							}
						}, c)), e("div", {
							class: [tp({
								"form-check": r,
								"form-check-inline": r && a,
								"custom-control": i,
								"custom-control-inline": i && a,
								"custom-checkbox": i && !t && !o,
								"custom-switch": o,
								"custom-radio": i && t
							}, "b-custom-control-".concat(s), s && !n), u.class],
							style: u.style
						}, [l, d])
					}
				});

			function lp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function fp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? lp(Object(n), !0).forEach((function(t) {
						dp(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function dp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var hp = "indeterminate",
				pp = Ur + hp,
				_p = qa(He(fp(fp({}, up), {}, (dp(np = {}, hp, Va(Qr, !1)), dp(np, "switch", Va(Qr, !1)), dp(np, "uncheckedValue", Va(Vr, !1)), dp(np, "value", Va(Vr, !0)), np))), rn),
				mp = r.default.extend({
					name: rn,
					mixins: [cp],
					inject: {
						bvGroup: {
							from: "bvCheckGroup",
							default: null
						}
					},
					props: _p,
					computed: {
						isChecked: function() {
							var e = this.value,
								t = this.computedLocalChecked;
							return we(t) ? Yh(t, e) > -1 : Hs(t, e)
						},
						isRadio: function() {
							return !1
						}
					},
					watch: dp({}, hp, (function(e, t) {
						Hs(e, t) || this.setIndeterminate(e)
					})),
					mounted: function() {
						this.setIndeterminate(this[hp])
					},
					methods: {
						computedLocalCheckedWatcher: function(e, t) {
							if (!Hs(e, t)) {
								this.$emit(sp, e);
								var n = this.$refs.input;
								n && this.$emit(pp, n.indeterminate)
							}
						},
						handleChange: function(e) {
							var t = this,
								n = e.target,
								r = n.checked,
								i = n.indeterminate,
								a = this.value,
								o = this.uncheckedValue,
								s = this.computedLocalChecked;
							if (we(s)) {
								var u = Yh(s, a);
								r && u < 0 ? s = s.concat(a) : !r && u > -1 && (s = s.slice(0, u).concat(s.slice(u + 1)))
							} else s = r ? a : o;
							this.computedLocalChecked = s, this.$nextTick((function() {
								t.$emit(dr, s), t.isGroup && t.bvGroup.$emit(dr, s), t.$emit(pp, i)
							}))
						},
						setIndeterminate: function(e) {
							we(this.computedLocalChecked) && (e = !1);
							var t = this.$refs.input;
							t && (t.indeterminate = e, this.$emit(pp, e))
						}
					}
				});

			function bp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function gp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? bp(Object(n), !0).forEach((function(t) {
						vp(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function vp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var yp, Ap = qa(He(gp(gp(gp(gp(gp({}, Nc), zh), up), Wh), Xh)), dn),
				Sp = r.default.extend({
					name: dn,
					mixins: [Rc, cp, Qh, Kh, Jh],
					inject: {
						bvGroup: {
							from: "bvRadioGroup",
							default: !1
						}
					},
					props: Ap,
					watch: {
						computedLocalChecked: function(e, t) {
							Hs(e, t) || this.$emit(sp, e)
						}
					}
				});

			function wp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ep(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? wp(Object(n), !0).forEach((function(t) {
						Tp(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Tp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Cp, $p = ["aria-describedby", "aria-labelledby"],
				kp = Ja("checked"),
				Op = kp.mixin,
				xp = kp.props,
				Pp = kp.prop,
				Mp = kp.event,
				Ip = qa(He(Ep(Ep(Ep(Ep(Ep(Ep(Ep(Ep({}, Nc), xp), zh), Eh), Wh), Xh), Gh), {}, {
					ariaInvalid: Va(ai, !1),
					buttonVariant: Va(Jr),
					buttons: Va(Qr, !1),
					stacked: Va(Qr, !1),
					validated: Va(Qr, !1)
				})), "formRadioCheckGroups"),
				Lp = r.default.extend({
					mixins: [Rc, Op, to, Qh, Th, Kh, Jh, qh],
					inheritAttrs: !1,
					props: Ip,
					data: function() {
						return {
							localChecked: this[Pp]
						}
					},
					computed: {
						inline: function() {
							return !this.stacked
						},
						groupName: function() {
							return this.name || this.safeId()
						},
						groupClasses: function() {
							var e = this.inline,
								t = this.size,
								n = {
									"was-validated": this.validated
								};
							return this.buttons && (n = [n, "btn-group-toggle", Tp({
								"btn-group": e,
								"btn-group-vertical": !e
							}, "btn-group-".concat(t), t)]), n
						}
					},
					watch: (yp = {}, Tp(yp, Pp, (function(e) {
						Hs(e, this.localChecked) || (this.localChecked = e)
					})), Tp(yp, "localChecked", (function(e, t) {
						Hs(e, t) || this.$emit(Mp, e)
					})), yp),
					render: function(e) {
						var t = this,
							n = this.isRadioGroup,
							r = Ue(this.$attrs, $p),
							i = n ? Sp : mp,
							a = this.formOptions.map((function(n, a) {
								var o = "BV_option_".concat(a);
								return e(i, {
									props: {
										disabled: n.disabled || !1,
										id: t.safeId(o),
										value: n.value
									},
									attrs: r,
									key: o
								}, [e("span", {
									domProps: Fu(n.html, n.text)
								})])
							}));
						return e("div", {
							class: [this.groupClasses, "bv-no-focus-ring"],
							attrs: Ep(Ep({}, je(this.$attrs, $p)), {}, {
								"aria-invalid": this.computedAriaInvalid,
								"aria-required": this.required ? "true" : null,
								id: this.safeId(),
								role: n ? "radiogroup" : "group",
								tabindex: "-1"
							})
						}, [this.normalizeSlot(bi), a, this.normalizeSlot()])
					}
				});

			function Dp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Bp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Dp(Object(n), !0).forEach((function(t) {
						Np(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Np(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Rp = qa(He(Bp(Bp({}, Ip), {}, (Np(Cp = {}, Pp, Va(zr, [])), Np(Cp, "switches", Va(Qr, !1)), Cp))), an),
				Fp = r.default.extend({
					name: an,
					mixins: [Lp],
					provide: function() {
						return {
							bvCheckGroup: this
						}
					},
					props: Rp,
					computed: {
						isRadioGroup: function() {
							return !1
						}
					}
				}),
				Up = lt({
					components: {
						BFormCheckbox: mp,
						BCheckbox: mp,
						BCheck: mp,
						BFormCheckboxGroup: Fp,
						BCheckboxGroup: Fp,
						BCheckGroup: Fp
					}
				}),
				jp = "__BV_hover_handler__",
				Hp = "mouseenter",
				Yp = function(e, t, n) {
					ao(e, t, Hp, n, Yr), ao(e, t, "mouseleave", n, Yr)
				},
				Vp = function(e, t) {
					var n = t.value,
						r = void 0 === n ? null : n;
					if (c) {
						var i = e[jp],
							a = ge(i),
							o = !(a && i.fn === r);
						a && o && (Yp(!1, e, i), delete e[jp]), ge(r) && o && (e[jp] = function(e) {
							var t = function(t) {
								e(t.type === Hp, t)
							};
							return t.fn = e, t
						}(r), Yp(!0, e, e[jp]))
					}
				},
				zp = {
					bind: Vp,
					componentUpdated: Vp,
					unbind: function(e) {
						Vp(e, {
							value: null
						})
					}
				};

			function Qp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Gp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Qp(Object(n), !0).forEach((function(t) {
						qp(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function qp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Wp, Kp = He(Gp(Gp(Gp(Gp(Gp(Gp({}, Nc), Wh), Xh), je(xd, ["disabled"])), je(zh, ["autofocus"])), {}, {
					buttonOnly: Va(Qr, !1),
					buttonVariant: Va(Jr, "secondary"),
					formattedValue: Va(Jr),
					labelSelected: Va(Jr),
					lang: Va(Jr),
					menuClass: Va(ti),
					placeholder: Va(Jr),
					readonly: Va(Qr, !1),
					rtl: Va(Qr, null),
					value: Va(Jr, "")
				})),
				Xp = r.default.extend({
					name: "BVFormBtnLabelControl",
					directives: {
						"b-hover": zp
					},
					mixins: [Rc, Kh, Jh, Pd, to],
					props: Kp,
					data: function() {
						return {
							isHovered: !1,
							hasFocus: !1
						}
					},
					computed: {
						idButton: function() {
							return this.safeId()
						},
						idLabel: function() {
							return this.safeId("_value_")
						},
						idMenu: function() {
							return this.safeId("_dialog_")
						},
						idWrapper: function() {
							return this.safeId("_outer_")
						},
						computedDir: function() {
							return !0 === this.rtl ? "rtl" : !1 === this.rtl ? "ltr" : null
						}
					},
					methods: {
						focus: function() {
							this.disabled || Oa(this.$refs.toggle)
						},
						blur: function() {
							this.disabled || xa(this.$refs.toggle)
						},
						setFocus: function(e) {
							this.hasFocus = "focus" === e.type
						},
						handleHover: function(e) {
							this.isHovered = e
						}
					},
					render: function(e) {
						var t, n = this.idButton,
							r = this.idLabel,
							i = this.idMenu,
							a = this.idWrapper,
							o = this.disabled,
							s = this.readonly,
							u = this.required,
							c = this.name,
							l = this.state,
							f = this.visible,
							d = this.size,
							h = this.isHovered,
							p = this.hasFocus,
							_ = this.labelSelected,
							m = this.buttonVariant,
							b = this.buttonOnly,
							g = zi(this.value) || "",
							v = !1 === l || u && !g,
							y = {
								isHovered: h,
								hasFocus: p,
								state: l,
								opened: f
							},
							A = e("button", {
								staticClass: "btn",
								class: (t = {}, qp(t, "btn-".concat(m), b), qp(t, "btn-".concat(d), d), qp(t, "h-auto", !b), qp(t, "dropdown-toggle", b), qp(t, "dropdown-toggle-no-caret", b), t),
								attrs: {
									id: n,
									type: "button",
									disabled: o,
									"aria-haspopup": "dialog",
									"aria-expanded": f ? "true" : "false",
									"aria-invalid": v ? "true" : null,
									"aria-required": u ? "true" : null
								},
								directives: [{
									name: "b-hover",
									value: this.handleHover
								}],
								on: {
									mousedown: this.onMousedown,
									click: this.toggle,
									keydown: this.toggle,
									"!focus": this.setFocus,
									"!blur": this.setFocus
								},
								ref: "toggle"
							}, [this.hasNormalizedSlot(hi) ? this.normalizeSlot(hi, y) : e(_s, {
								props: {
									scale: 1.25
								}
							})]),
							S = e();
						c && !o && (S = e("input", {
							attrs: {
								type: "hidden",
								name: c || null,
								form: this.form || null,
								value: g
							}
						}));
						var w = e("div", {
								staticClass: "dropdown-menu",
								class: [this.menuClass, {
									show: f,
									"dropdown-menu-right": this.right
								}],
								attrs: {
									id: i,
									role: "dialog",
									tabindex: "-1",
									"aria-modal": "false",
									"aria-labelledby": r
								},
								on: {
									keydown: this.onKeydown
								},
								ref: "menu"
							}, [this.normalizeSlot(_i, {
								opened: f
							})]),
							E = e("label", {
								class: b ? "sr-only" : ["form-control", {
									"text-muted": !g
								}, this.stateClass, this.sizeFormClass],
								attrs: {
									id: r,
									for: n,
									"aria-invalid": v ? "true" : null,
									"aria-required": u ? "true" : null
								},
								directives: [{
									name: "b-hover",
									value: this.handleHover
								}],
								on: {
									"!click": function(e) {
										oo(e, {
											preventDefault: !1
										})
									}
								}
							}, [g ? this.formattedValue || g : this.placeholder || "", g && _ ? e("bdi", {
								staticClass: "sr-only"
							}, _) : ""]);
						return e("div", {
							staticClass: "b-form-btn-label-control dropdown",
							class: [this.directionClass, this.boundaryClass, [{
								"btn-group": b,
								"form-control": !b,
								focus: p && !b,
								show: f,
								"is-valid": !0 === l,
								"is-invalid": !1 === l
							}, b ? null : this.sizeFormClass]],
							attrs: {
								id: a,
								role: b ? null : "group",
								lang: this.lang || null,
								dir: this.computedDir,
								"aria-disabled": o,
								"aria-readonly": s && !o,
								"aria-labelledby": r,
								"aria-invalid": !1 === l || u && !g ? "true" : null,
								"aria-required": u ? "true" : null
							}
						}, [A, S, w, E])
					}
				});

			function Jp(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Zp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Jp(Object(n), !0).forEach((function(t) {
						e_(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jp(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function e_(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var t_, n_ = Ja("value", {
					type: oi
				}),
				r_ = n_.mixin,
				i_ = n_.props,
				a_ = n_.prop,
				o_ = n_.event,
				s_ = je(Gc, ["block", "hidden", "id", "noKeyNav", "roleDescription", "value", "width"]),
				u_ = je(Kp, ["formattedValue", "id", "lang", "rtl", "value"]),
				c_ = qa(He(Zp(Zp(Zp(Zp(Zp({}, Nc), i_), s_), u_), {}, {
					calendarWidth: Va(Jr, "270px"),
					closeButton: Va(Qr, !1),
					closeButtonVariant: Va(Jr, "outline-secondary"),
					dark: Va(Qr, !1),
					labelCloseButton: Va(Jr, "Close"),
					labelResetButton: Va(Jr, "Reset"),
					labelTodayButton: Va(Jr, "Select today"),
					noCloseOnSelect: Va(Qr, !1),
					resetButton: Va(Qr, !1),
					resetButtonVariant: Va(Jr, "outline-danger"),
					resetValue: Va(oi),
					todayButton: Va(Qr, !1),
					todayButtonVariant: Va(Jr, "outline-primary")
				})), sn),
				l_ = r.default.extend({
					name: sn,
					mixins: [Rc, r_],
					props: c_,
					data: function() {
						return {
							localYMD: Sc(this[a_]) || "",
							isVisible: !1,
							localLocale: null,
							isRTL: !1,
							formattedValue: "",
							activeYMD: ""
						}
					},
					computed: {
						calendarYM: function() {
							return this.activeYMD.slice(0, -3)
						},
						computedLang: function() {
							return (this.localLocale || "").replace(/-u-.*$/i, "") || null
						},
						computedResetValue: function() {
							return Sc(Lc(this.resetValue)) || ""
						}
					},
					watch: (Wp = {}, e_(Wp, a_, (function(e) {
						this.localYMD = Sc(e) || ""
					})), e_(Wp, "localYMD", (function(e) {
						this.isVisible && this.$emit(o_, this.valueAsDate ? Ac(e) || null : e || "")
					})), e_(Wp, "calendarYM", (function(e, t) {
						if (e !== t && t) try {
							this.$refs.control.updatePopper()
						} catch (e) {}
					})), Wp),
					methods: {
						focus: function() {
							this.disabled || Oa(this.$refs.control)
						},
						blur: function() {
							this.disabled || xa(this.$refs.control)
						},
						setAndClose: function(e) {
							var t = this;
							this.localYMD = e, this.noCloseOnSelect || this.$nextTick((function() {
								t.$refs.control.hide(!0)
							}))
						},
						onSelected: function(e) {
							var t = this;
							this.$nextTick((function() {
								t.setAndClose(e)
							}))
						},
						onInput: function(e) {
							this.localYMD !== e && (this.localYMD = e)
						},
						onContext: function(e) {
							var t = e.activeYMD,
								n = e.isRTL,
								r = e.locale,
								i = e.selectedYMD,
								a = e.selectedFormatted;
							this.isRTL = n, this.localLocale = r, this.formattedValue = a, this.localYMD = i, this.activeYMD = t, this.$emit(_r, e)
						},
						onTodayButton: function() {
							this.setAndClose(Sc(Lc(yc(), this.min, this.max)))
						},
						onResetButton: function() {
							this.setAndClose(this.computedResetValue)
						},
						onCloseButton: function() {
							this.$refs.control.hide(!0)
						},
						onShow: function() {
							this.isVisible = !0
						},
						onShown: function() {
							var e = this;
							this.$nextTick((function() {
								Oa(e.$refs.calendar), e.$emit(Br)
							}))
						},
						onHidden: function() {
							this.isVisible = !1, this.$emit(Cr)
						},
						defaultButtonFn: function(e) {
							var t = e.isHovered,
								n = e.hasFocus;
							return this.$createElement(t || n ? ds : fs, {
								attrs: {
									"aria-hidden": "true"
								}
							})
						}
					},
					render: function(e) {
						var t = this.localYMD,
							n = this.disabled,
							r = this.readonly,
							i = this.dark,
							a = this.$props,
							o = this.$scopedSlots,
							s = be(this.placeholder) ? this.labelNoDateSelected : this.placeholder,
							u = [];
						if (this.todayButton) {
							var c = this.labelTodayButton;
							u.push(e(vu, {
								props: {
									disabled: n || r,
									size: "sm",
									variant: this.todayButtonVariant
								},
								attrs: {
									"aria-label": c || null
								},
								on: {
									click: this.onTodayButton
								}
							}, c))
						}
						if (this.resetButton) {
							var l = this.labelResetButton;
							u.push(e(vu, {
								props: {
									disabled: n || r,
									size: "sm",
									variant: this.resetButtonVariant
								},
								attrs: {
									"aria-label": l || null
								},
								on: {
									click: this.onResetButton
								}
							}, l))
						}
						if (this.closeButton) {
							var f = this.labelCloseButton;
							u.push(e(vu, {
								props: {
									disabled: n,
									size: "sm",
									variant: this.closeButtonVariant
								},
								attrs: {
									"aria-label": f || null
								},
								on: {
									click: this.onCloseButton
								}
							}, f))
						}
						u.length > 0 && (u = [e("div", {
							staticClass: "b-form-date-controls d-flex flex-wrap",
							class: {
								"justify-content-between": u.length > 1, "justify-content-end": u.length < 2
							}
						}, u)]);
						var d = e(qc, {
							staticClass: "b-form-date-calendar w-100",
							props: Zp(Zp({}, Qa(s_, a)), {}, {
								hidden: !this.isVisible,
								value: t,
								valueAsDate: !1,
								width: this.calendarWidth
							}),
							on: {
								selected: this.onSelected,
								input: this.onInput,
								context: this.onContext
							},
							scopedSlots: Ue(o, ["nav-prev-decade", "nav-prev-year", "nav-prev-month", "nav-this-month", "nav-next-month", "nav-next-year", "nav-next-decade"]),
							key: "calendar",
							ref: "calendar"
						}, u);
						return e(Xp, {
							staticClass: "b-form-datepicker",
							props: Zp(Zp({}, Qa(u_, a)), {}, {
								formattedValue: t ? this.formattedValue : "",
								id: this.safeId(),
								lang: this.computedLang,
								menuClass: [{
									"bg-dark": i,
									"text-light": i
								}, this.menuClass],
								placeholder: s,
								rtl: this.isRTL,
								value: t
							}),
							on: {
								show: this.onShow,
								shown: this.onShown,
								hidden: this.onHidden
							},
							scopedSlots: e_({}, hi, o[hi] || this.defaultButtonFn),
							ref: "control"
						}, [d])
					}
				}),
				f_ = lt({
					components: {
						BFormDatepicker: l_,
						BDatepicker: l_
					}
				});

			function d_(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function h_(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? d_(Object(n), !0).forEach((function(t) {
						p_(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d_(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function p_(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var __ = Ja("value", {
					type: [zr, de],
					defaultValue: null,
					validator: function(e) {
						return "" === e ? (Ze(y_, un), !0) : be(e) || A_(e)
					}
				}),
				m_ = __.mixin,
				b_ = __.props,
				g_ = __.prop,
				v_ = __.event,
				y_ = 'Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',
				A_ = function e(t) {
					return function(e) {
						return e instanceof de
					}(t) || we(t) && t.every((function(t) {
						return e(t)
					}))
				},
				S_ = function(e) {
					return ge(e.getAsEntry) ? e.getAsEntry() : ge(e.webkitGetAsEntry) ? e.webkitGetAsEntry() : null
				},
				w_ = function e(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return new Promise((function(r) {
						var i = [];
						! function a() {
							t.readEntries((function(t) {
								0 === t.length ? r(Promise.all(i).then((function(e) {
									return Di(e)
								}))) : (i.push(Promise.all(t.map((function(t) {
									if (t) {
										if (t.isDirectory) return e(t.createReader(), "".concat(n).concat(t.name, "/"));
										if (t.isFile) return new Promise((function(e) {
											t.file((function(t) {
												t.$path = "".concat(n).concat(t.name), e(t)
											}))
										}))
									}
									return null
								})).filter(We))), a())
							}))
						}()
					}))
				},
				E_ = qa(He(h_(h_(h_(h_(h_(h_(h_({}, Nc), b_), zh), Gh), Xh), Wh), {}, {
					accept: Va(Jr, ""),
					browseText: Va(Jr, "Browse"),
					capture: Va(Qr, !1),
					directory: Va(Qr, !1),
					dropPlaceholder: Va(Jr, "Drop files here"),
					fileNameFormatter: Va(qr),
					multiple: Va(Qr, !1),
					noDrop: Va(Qr, !1),
					noDropPlaceholder: Va(Jr, "Not allowed"),
					noTraverse: Va(Qr, !1),
					placeholder: Va(Jr, "No file chosen")
				})), un),
				T_ = r.default.extend({
					name: un,
					mixins: [Gs, Rc, m_, to, Qh, Jh, qh, to],
					inheritAttrs: !1,
					props: E_,
					data: function() {
						return {
							files: [],
							dragging: !1,
							dropAllowed: !this.noDrop,
							hasFocus: !1
						}
					},
					computed: {
						computedAccept: function() {
							var e = this.accept;
							return 0 === (e = (e || "").trim().split(/[,\s]+/).filter(We)).length ? null : e.map((function(e) {
								var t = "name",
									n = "^",
									r = "$";
								return T.test(e) ? n = "" : (t = "type", B.test(e) && (r = ".+$", e = e.slice(0, -1))), e = Vi(e), {
									rx: new RegExp("".concat(n).concat(e).concat(r)),
									prop: t
								}
							}))
						},
						computedCapture: function() {
							var e = this.capture;
							return !0 === e || "" === e || e || null
						},
						computedAttrs: function() {
							var e = this.name,
								t = this.disabled,
								n = this.required,
								r = this.form,
								i = this.computedCapture,
								a = this.accept,
								o = this.multiple,
								s = this.directory;
							return h_(h_({}, this.bvAttrs), {}, {
								type: "file",
								id: this.safeId(),
								name: e,
								disabled: t,
								required: n,
								form: r || null,
								capture: i,
								accept: a || null,
								multiple: o,
								directory: s,
								webkitdirectory: s,
								"aria-required": n ? "true" : null
							})
						},
						computedFileNameFormatter: function() {
							var e = this.fileNameFormatter;
							return Ka(e) ? e : this.defaultFileNameFormatter
						},
						clonedFiles: function() {
							return qe(this.files)
						},
						flattenedFiles: function() {
							return Bi(this.files)
						},
						fileNames: function() {
							return this.flattenedFiles.map((function(e) {
								return e.name
							}))
						},
						labelContent: function() {
							if (this.dragging && !this.noDrop) return this.normalizeSlot("drop-placeholder", {
								allowed: this.dropAllowed
							}) || (this.dropAllowed ? this.dropPlaceholder : this.$createElement("span", {
								staticClass: "text-danger"
							}, this.noDropPlaceholder));
							if (0 === this.files.length) return this.normalizeSlot("placeholder") || this.placeholder;
							var e = this.flattenedFiles,
								t = this.clonedFiles,
								n = this.fileNames,
								r = this.computedFileNameFormatter;
							return this.hasNormalizedSlot(mi) ? this.normalizeSlot(mi, {
								files: e,
								filesTraversed: t,
								names: n
							}) : r(e, t, n)
						}
					},
					watch: (t_ = {}, p_(t_, g_, (function(e) {
						(!e || we(e) && 0 === e.length) && this.reset()
					})), p_(t_, "files", (function(e, t) {
						if (!Hs(e, t)) {
							var n = this.multiple,
								r = this.noTraverse,
								i = !n || r ? Bi(e) : e;
							this.$emit(v_, n ? i : i[0] || null)
						}
					})), t_),
					created: function() {
						this.$_form = null
					},
					mounted: function() {
						var e = la("form", this.$el);
						e && (ro(e, "reset", this.reset, Hr), this.$_form = e)
					},
					beforeDestroy: function() {
						var e = this.$_form;
						e && io(e, "reset", this.reset, Hr)
					},
					methods: {
						isFileValid: function(e) {
							if (!e) return !1;
							var t = this.computedAccept;
							return !t || t.some((function(t) {
								return t.rx.test(e[t.prop])
							}))
						},
						isFilesArrayValid: function(e) {
							var t = this;
							return we(e) ? e.every((function(e) {
								return t.isFileValid(e)
							})) : this.isFileValid(e)
						},
						defaultFileNameFormatter: function(e, t, n) {
							return n.join(", ")
						},
						setFiles: function(e) {
							this.dropAllowed = !this.noDrop, this.dragging = !1, this.files = this.multiple ? this.directory ? e : Bi(e) : Bi(e).slice(0, 1)
						},
						setInputFiles: function(e) {
							try {
								var t = new ClipboardEvent("").clipboardData || new DataTransfer;
								Bi(qe(e)).forEach((function(e) {
									delete e.$path, t.items.add(e)
								})), this.$refs.input.files = t.files
							} catch (e) {}
						},
						reset: function() {
							try {
								var e = this.$refs.input;
								e.value = "", e.type = "", e.type = "file"
							} catch (e) {}
							this.files = []
						},
						handleFiles: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (t) {
								var n = e.filter(this.isFilesArrayValid);
								n.length > 0 && (this.setFiles(n), this.setInputFiles(n))
							} else this.setFiles(e)
						},
						focusHandler: function(e) {
							this.plain || "focusout" === e.type ? this.hasFocus = !1 : this.hasFocus = !0
						},
						onChange: function(e) {
							var t = this,
								n = e.type,
								r = e.target,
								i = e.dataTransfer,
								a = void 0 === i ? {} : i,
								o = "drop" === n;
							this.$emit(dr, e);
							var u = Pi(a.items || []);
							if (s && u.length > 0 && !me(S_(u[0])))(function(e) {
								var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
								return Promise.all(Pi(e).filter((function(e) {
									return "file" === e.kind
								})).map((function(e) {
									var n = S_(e);
									if (n) {
										if (n.isDirectory && t) return w_(n.createReader(), "".concat(n.name, "/"));
										if (n.isFile) return new Promise((function(e) {
											n.file((function(t) {
												t.$path = "", e(t)
											}))
										}))
									}
									return null
								})).filter(We))
							})(u, this.directory).then((function(e) {
								return t.handleFiles(e, o)
							}));
							else {
								var c = Pi(r.files || a.files || []).map((function(e) {
									return e.$path = e.webkitRelativePath || "", e
								}));
								this.handleFiles(c, o)
							}
						},
						onDragenter: function(e) {
							oo(e), this.dragging = !0;
							var t = e.dataTransfer,
								n = void 0 === t ? {} : t;
							if (this.noDrop || this.disabled || !this.dropAllowed) return n.dropEffect = "none", void(this.dropAllowed = !1);
							n.dropEffect = "copy"
						},
						onDragover: function(e) {
							oo(e), this.dragging = !0;
							var t = e.dataTransfer,
								n = void 0 === t ? {} : t;
							if (this.noDrop || this.disabled || !this.dropAllowed) return n.dropEffect = "none", void(this.dropAllowed = !1);
							n.dropEffect = "copy"
						},
						onDragleave: function(e) {
							var t = this;
							oo(e), this.$nextTick((function() {
								t.dragging = !1, t.dropAllowed = !t.noDrop
							}))
						},
						onDrop: function(e) {
							var t = this;
							oo(e), this.dragging = !1, this.noDrop || this.disabled || !this.dropAllowed ? this.$nextTick((function() {
								t.dropAllowed = !t.noDrop
							})) : this.onChange(e)
						}
					},
					render: function(e) {
						var t = this.custom,
							n = this.plain,
							r = this.size,
							i = this.dragging,
							a = this.stateClass,
							o = this.bvAttrs,
							s = e("input", {
								class: [{
									"form-control-file": n,
									"custom-file-input": t,
									focus: t && this.hasFocus
								}, a],
								style: t ? {
									zIndex: -5
								} : {},
								attrs: this.computedAttrs,
								on: {
									change: this.onChange,
									focusin: this.focusHandler,
									focusout: this.focusHandler,
									reset: this.reset
								},
								ref: "input"
							});
						if (n) return s;
						var u = e("label", {
							staticClass: "custom-file-label",
							class: {
								dragging: i
							},
							attrs: {
								for: this.safeId(),
								"data-browse": this.browseText || null
							}
						}, [e("span", {
							staticClass: "d-block form-file-text",
							style: {
								pointerEvents: "none"
							}
						}, [this.labelContent])]);
						return e("div", {
							staticClass: "custom-file b-form-file",
							class: [p_({}, "b-custom-control-".concat(r), r), a, o.class],
							style: o.style,
							attrs: {
								id: this.safeId("_BV_file_outer_")
							},
							on: {
								dragenter: this.onDragenter,
								dragover: this.onDragover,
								dragleave: this.onDragleave,
								drop: this.onDrop
							}
						}, [s, u])
					}
				}),
				C_ = lt({
					components: {
						BFormFile: T_,
						BFile: T_
					}
				}),
				$_ = function(e) {
					return "\\" + e
				},
				k_ = function(e) {
					var t = (e = zi(e)).length,
						n = e.charCodeAt(0);
					return e.split("").reduce((function(r, i, a) {
						var o = e.charCodeAt(a);
						return 0 === o ? r + "ï¿½" : 127 === o || o >= 1 && o <= 31 || 0 === a && o >= 48 && o <= 57 || 1 === a && o >= 48 && o <= 57 && 45 === n ? r + $_("".concat(o.toString(16), " ")) : 0 === a && 45 === o && 1 === t ? r + $_(i) : o >= 128 || 45 === o || 95 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? r + i : r + $_(i)
					}), "")
				};

			function O_(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function x_(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? O_(Object(n), !0).forEach((function(t) {
						P_(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O_(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function P_(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var M_ = ["auto", "start", "end", "center", "baseline", "stretch"],
				I_ = Pa((function(e, t, n) {
					var r = e;
					if (!be(n) && !1 !== n) return t && (r += "-".concat(t)), "col" !== e || "" !== n && !0 !== n ? (r += "-".concat(n), Gi(r)) : Gi(r)
				})),
				L_ = Ie(null),
				D_ = {
					name: "BCol",
					functional: !0,
					get props() {
						return delete this.props, this.props = function() {
							var e = Na().filter(We),
								t = e.reduce((function(e, t) {
									return e[t] = Va(ii), e
								}), Ie(null)),
								n = e.reduce((function(e, t) {
									return e[Ya(t, "offset")] = Va(ui), e
								}), Ie(null)),
								r = e.reduce((function(e, t) {
									return e[Ya(t, "order")] = Va(ui), e
								}), Ie(null));
							return L_ = Me(Ie(null), {
								col: Ne(t),
								offset: Ne(n),
								order: Ne(r)
							}), qa(He(x_(x_(x_(x_({}, t), n), r), {}, {
								alignSelf: Va(Jr, null, (function(e) {
									return Mi(M_, e)
								})),
								col: Va(Qr, !1),
								cols: Va(ui),
								offset: Va(ui),
								order: Va(ui),
								tag: Va(Jr, "div")
							})), "BCol")
						}()
					},
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.cols,
							s = r.offset,
							u = r.order,
							c = r.alignSelf,
							l = [];
						for (var f in L_)
							for (var d = L_[f], h = 0; h < d.length; h++) {
								var p = I_(f, d[h].replace(f, ""), r[d[h]]);
								p && l.push(p)
							}
						var _ = l.some((function(e) {
							return K.test(e)
						}));
						return l.push((P_(n = {
							col: r.col || !_ && !o
						}, "col-".concat(o), o), P_(n, "offset-".concat(s), s), P_(n, "order-".concat(u), u), P_(n, "align-self-".concat(c), c), n)), e(r.tag, St(i, {
							class: l
						}), a)
					}
				};

			function B_(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function N_(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? B_(Object(n), !0).forEach((function(t) {
						R_(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B_(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function R_(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var F_ = ["input", "select", "textarea"],
				U_ = F_.map((function(e) {
					return "".concat(e, ":not([disabled])")
				})).join(),
				j_ = [].concat(F_, ["a", "button", "label"]),
				H_ = {
					name: cn,
					mixins: [Rc, Jh, to],
					get props() {
						return delete this.props, this.props = qa(He(N_(N_(N_(N_({}, Nc), Xh), Na().reduce((function(e, t) {
							return e[Ya(t, "contentCols")] = Va(ii), e[Ya(t, "labelAlign")] = Va(Jr), e[Ya(t, "labelCols")] = Va(ii), e
						}), Ie(null))), {}, {
							description: Va(Jr),
							disabled: Va(Qr, !1),
							feedbackAriaLive: Va(Jr, "assertive"),
							invalidFeedback: Va(Jr),
							label: Va(Jr),
							labelClass: Va(ti),
							labelFor: Va(Jr),
							labelSize: Va(Jr),
							labelSrOnly: Va(Qr, !1),
							tooltip: Va(Qr, !1),
							validFeedback: Va(Jr),
							validated: Va(Qr, !1)
						})), cn)
					},
					data: function() {
						return {
							ariaDescribedby: null
						}
					},
					computed: {
						contentColProps: function() {
							return this.getColProps(this.$props, "content")
						},
						labelAlignClasses: function() {
							return this.getAlignClasses(this.$props, "label")
						},
						labelColProps: function() {
							return this.getColProps(this.$props, "label")
						},
						isHorizontal: function() {
							return Ne(this.contentColProps).length > 0 || Ne(this.labelColProps).length > 0
						}
					},
					watch: {
						ariaDescribedby: function(e, t) {
							e !== t && this.updateAriaDescribedby(e, t)
						}
					},
					mounted: function() {
						var e = this;
						this.$nextTick((function() {
							e.updateAriaDescribedby(e.ariaDescribedby)
						}))
					},
					methods: {
						getAlignClasses: function(e, t) {
							return Na().reduce((function(n, r) {
								var i = e[Ya(r, "".concat(t, "Align"))] || null;
								return i && n.push(["text", r, i].filter(We).join("-")), n
							}), [])
						},
						getColProps: function(e, t) {
							return Na().reduce((function(n, r) {
								var i = e[Ya(r, "".concat(t, "Cols"))];
								return ve(i = "" === i || i || !1) || "auto" === i || (i = (i = Ni(i, 0)) > 0 && i), i && (n[r || (ve(i) ? "col" : "cols")] = i), n
							}), {})
						},
						updateAriaDescribedby: function(e, t) {
							var n = this.labelFor;
							if (c && n) {
								var r = ua("#".concat(k_(n)), this.$refs.content);
								if (r) {
									var i = "aria-describedby",
										a = (e || "").split(D),
										o = (t || "").split(D),
										s = (ga(r, i) || "").split(D).filter((function(e) {
											return !Mi(o, e)
										})).concat(a).filter((function(e, t, n) {
											return n.indexOf(e) === t
										})).filter(We).join(" ").trim();
									s ? ma(r, i, s) : ba(r, i)
								}
							}
						},
						onLegendClick: function(e) {
							if (!this.labelFor) {
								var t = e.target,
									n = t ? t.tagName : "";
								if (-1 === j_.indexOf(n)) {
									var r = sa(U_, this.$refs.content).filter(ia);
									1 === r.length && Oa(r[0])
								}
							}
						}
					},
					render: function(e) {
						var t = this.computedState,
							n = this.feedbackAriaLive,
							r = this.isHorizontal,
							i = this.labelFor,
							a = this.normalizeSlot,
							o = this.safeId,
							s = this.tooltip,
							u = o(),
							c = !i,
							l = e(),
							f = a("label") || this.label,
							d = f ? o("_BV_label_") : null;
						if (f || r) {
							var h = this.labelSize,
								p = this.labelColProps,
								_ = c ? "legend" : "label";
							this.labelSrOnly ? (f && (l = e(_, {
								class: "sr-only",
								attrs: {
									id: d,
									for: i || null
								}
							}, [f])), l = e(r ? D_ : "div", {
								props: r ? p : {}
							}, [l])) : l = e(r ? D_ : _, {
								on: c ? {
									click: this.onLegendClick
								} : {},
								props: r ? N_(N_({}, p), {}, {
									tag: _
								}) : {},
								attrs: {
									id: d,
									for: i || null,
									tabindex: c ? "-1" : null
								},
								class: [c ? "bv-no-focus-ring" : "", r || c ? "col-form-label" : "", !r && c ? "pt-0" : "", r || c ? "" : "d-block", h ? "col-form-label-".concat(h) : "", this.labelAlignClasses, this.labelClass]
							}, [f])
						}
						var m = e(),
							b = a("invalid-feedback") || this.invalidFeedback,
							g = b ? o("_BV_feedback_invalid_") : null;
						b && (m = e(Nh, {
							props: {
								ariaLive: n,
								id: g,
								role: n ? "alert" : null,
								state: t,
								tooltip: s
							},
							attrs: {
								tabindex: b ? "-1" : null
							}
						}, [b]));
						var v = e(),
							y = a("valid-feedback") || this.validFeedback,
							A = y ? o("_BV_feedback_valid_") : null;
						y && (v = e(Fh, {
							props: {
								ariaLive: n,
								id: A,
								role: n ? "alert" : null,
								state: t,
								tooltip: s
							},
							attrs: {
								tabindex: y ? "-1" : null
							}
						}, [y]));
						var S = e(),
							w = a("description") || this.description,
							E = w ? o("_BV_description_") : null;
						w && (S = e(Dh, {
							attrs: {
								id: E,
								tabindex: "-1"
							}
						}, [w]));
						var T = this.ariaDescribedby = [E, !1 === t ? g : null, !0 === t ? A : null].filter(We).join(" ") || null,
							C = e(r ? D_ : "div", {
								props: r ? this.contentColProps : {},
								ref: "content"
							}, [a(_i, {
								ariaDescribedby: T,
								descriptionId: E,
								id: u,
								labelId: d
							}) || e(), m, v, S]);
						return e(c ? "fieldset" : r ? jh : "div", {
							staticClass: "form-group",
							class: [{
								"was-validated": this.validated
							}, this.stateClass],
							attrs: {
								id: u,
								disabled: c ? this.disabled : null,
								role: c ? null : "group",
								"aria-invalid": this.computedAriaInvalid,
								"aria-labelledby": c && r ? d : null
							}
						}, r && c ? [e(jh, [l, C])] : [l, C])
					}
				},
				Y_ = lt({
					components: {
						BFormGroup: H_,
						BFormFieldset: H_
					}
				}),
				V_ = r.default.extend({
					computed: {
						selectionStart: {
							cache: !1,
							get: function() {
								return this.$refs.input.selectionStart
							},
							set: function(e) {
								this.$refs.input.selectionStart = e
							}
						},
						selectionEnd: {
							cache: !1,
							get: function() {
								return this.$refs.input.selectionEnd
							},
							set: function(e) {
								this.$refs.input.selectionEnd = e
							}
						},
						selectionDirection: {
							cache: !1,
							get: function() {
								return this.$refs.input.selectionDirection
							},
							set: function(e) {
								this.$refs.input.selectionDirection = e
							}
						}
					},
					methods: {
						select: function() {
							var e;
							(e = this.$refs.input).select.apply(e, arguments)
						},
						setSelectionRange: function() {
							var e;
							(e = this.$refs.input).setSelectionRange.apply(e, arguments)
						},
						setRangeText: function() {
							var e;
							(e = this.$refs.input).setRangeText.apply(e, arguments)
						}
					}
				});

			function z_(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Q_(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? z_(Object(n), !0).forEach((function(t) {
						G_(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z_(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function G_(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var q_ = Ja("value", {
					type: ui,
					defaultValue: "",
					event: "update"
				}),
				W_ = q_.mixin,
				K_ = q_.props,
				X_ = q_.prop,
				J_ = q_.event,
				Z_ = qa(He(Q_(Q_({}, K_), {}, {
					ariaInvalid: Va(ai, !1),
					autocomplete: Va(Jr),
					debounce: Va(ui, 0),
					formatter: Va(qr),
					lazy: Va(Qr, !1),
					lazyFormatter: Va(Qr, !1),
					number: Va(Qr, !1),
					placeholder: Va(Jr),
					plaintext: Va(Qr, !1),
					readonly: Va(Qr, !1),
					trim: Va(Qr, !1)
				})), "formTextControls"),
				em = r.default.extend({
					mixins: [W_],
					props: Z_,
					data: function() {
						var e = this[X_];
						return {
							localValue: zi(e),
							vModelValue: this.modifyValue(e)
						}
					},
					computed: {
						computedClass: function() {
							var e = this.plaintext,
								t = this.type,
								n = "range" === t,
								r = "color" === t;
							return [{
								"custom-range": n,
								"form-control-plaintext": e && !n && !r,
								"form-control": r || !e && !n
							}, this.sizeFormClass, this.stateClass]
						},
						computedDebounce: function() {
							return Do(Ni(this.debounce, 0), 0)
						},
						hasFormatter: function() {
							return Ka(this.formatter)
						}
					},
					watch: G_({}, X_, (function(e) {
						var t = zi(e),
							n = this.modifyValue(e);
						t === this.localValue && n === this.vModelValue || (this.clearDebounce(), this.localValue = t, this.vModelValue = n)
					})),
					created: function() {
						this.$_inputDebounceTimer = null
					},
					mounted: function() {
						this.$on(Rr, this.clearDebounce)
					},
					beforeDestroy: function() {
						this.clearDebounce()
					},
					methods: {
						clearDebounce: function() {
							clearTimeout(this.$_inputDebounceTimer), this.$_inputDebounceTimer = null
						},
						formatValue: function(e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							return e = zi(e), !this.hasFormatter || this.lazyFormatter && !n || (e = this.formatter(e, t)), e
						},
						modifyValue: function(e) {
							return e = zi(e), this.trim && (e = e.trim()), this.number && (e = Ri(e, e)), e
						},
						updateValue: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								r = this.lazy;
							if (!r || n) {
								this.clearDebounce();
								var i = function() {
										if ((e = t.modifyValue(e)) !== t.vModelValue) t.vModelValue = e, t.$emit(J_, e);
										else if (t.hasFormatter) {
											var n = t.$refs.input;
											n && e !== n.value && (n.value = e)
										}
									},
									a = this.computedDebounce;
								a > 0 && !r && !n ? this.$_inputDebounceTimer = setTimeout(i, a) : i()
							}
						},
						onInput: function(e) {
							if (!e.target.composing) {
								var t = e.target.value,
									n = this.formatValue(t, e);
								!1 === n || e.defaultPrevented ? oo(e, {
									propagation: !1
								}) : (this.localValue = n, this.updateValue(n), this.$emit(kr, n))
							}
						},
						onChange: function(e) {
							var t = e.target.value,
								n = this.formatValue(t, e);
							!1 === n || e.defaultPrevented ? oo(e, {
								propagation: !1
							}) : (this.localValue = n, this.updateValue(n, !0), this.$emit(dr, n))
						},
						onBlur: function(e) {
							var t = e.target.value,
								n = this.formatValue(t, e, !0);
							!1 !== n && (this.localValue = zi(this.modifyValue(n)), this.updateValue(n, !0)), this.$emit("blur", e)
						},
						focus: function() {
							this.disabled || Oa(this.$el)
						},
						blur: function() {
							this.disabled || xa(this.$el)
						}
					}
				}),
				tm = r.default.extend({
					computed: {
						validity: {
							cache: !1,
							get: function() {
								return this.$refs.input.validity
							}
						},
						validationMessage: {
							cache: !1,
							get: function() {
								return this.$refs.input.validationMessage
							}
						},
						willValidate: {
							cache: !1,
							get: function() {
								return this.$refs.input.willValidate
							}
						}
					},
					methods: {
						setCustomValidity: function() {
							var e;
							return (e = this.$refs.input).setCustomValidity.apply(e, arguments)
						},
						checkValidity: function() {
							var e;
							return (e = this.$refs.input).checkValidity.apply(e, arguments)
						},
						reportValidity: function() {
							var e;
							return (e = this.$refs.input).reportValidity.apply(e, arguments)
						}
					}
				});

			function nm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function rm(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? nm(Object(n), !0).forEach((function(t) {
						im(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function im(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var am, om = ["text", "password", "email", "number", "url", "tel", "search", "range", "color", "date", "time", "datetime", "datetime-local", "month", "week"],
				sm = qa(He(rm(rm(rm(rm(rm(rm({}, Nc), zh), Wh), Xh), Z_), {}, {
					list: Va(Jr),
					max: Va(ui),
					min: Va(ui),
					noWheel: Va(Qr, !1),
					step: Va(ui),
					type: Va(Jr, "text", (function(e) {
						return Mi(om, e)
					}))
				})), ln),
				um = r.default.extend({
					name: ln,
					mixins: [Ws, Rc, Qh, Kh, Jh, em, V_, tm],
					props: sm,
					computed: {
						localType: function() {
							var e = this.type;
							return Mi(om, e) ? e : "text"
						},
						computedAttrs: function() {
							var e = this.localType,
								t = this.name,
								n = this.form,
								r = this.disabled,
								i = this.placeholder,
								a = this.required,
								o = this.min,
								s = this.max,
								u = this.step;
							return {
								id: this.safeId(),
								name: t,
								form: n,
								type: e,
								disabled: r,
								placeholder: i,
								required: a,
								autocomplete: this.autocomplete || null,
								readonly: this.readonly || this.plaintext,
								min: o,
								max: s,
								step: u,
								list: "password" !== e ? this.list : null,
								"aria-required": a ? "true" : null,
								"aria-invalid": this.computedAriaInvalid
							}
						},
						computedListeners: function() {
							return rm(rm({}, this.bvListeners), {}, {
								input: this.onInput,
								change: this.onChange,
								blur: this.onBlur
							})
						}
					},
					watch: {
						noWheel: function(e) {
							this.setWheelStopper(e)
						}
					},
					mounted: function() {
						this.setWheelStopper(this.noWheel)
					},
					deactivated: function() {
						this.setWheelStopper(!1)
					},
					activated: function() {
						this.setWheelStopper(this.noWheel)
					},
					beforeDestroy: function() {
						this.setWheelStopper(!1)
					},
					methods: {
						setWheelStopper: function(e) {
							var t = this.$el;
							ao(e, t, "focus", this.onWheelFocus), ao(e, t, "blur", this.onWheelBlur), e || io(document, "wheel", this.stopWheel)
						},
						onWheelFocus: function() {
							ro(document, "wheel", this.stopWheel)
						},
						onWheelBlur: function() {
							io(document, "wheel", this.stopWheel)
						},
						stopWheel: function(e) {
							oo(e, {
								propagation: !1
							}), xa(this.$el)
						}
					},
					render: function(e) {
						return e("input", {
							class: this.computedClass,
							attrs: this.computedAttrs,
							domProps: {
								value: this.localValue
							},
							on: this.computedListeners,
							ref: "input"
						})
					}
				}),
				cm = lt({
					components: {
						BFormInput: um,
						BInput: um
					}
				}),
				lm = qa(Ip, hn),
				fm = r.default.extend({
					name: hn,
					mixins: [Lp],
					provide: function() {
						return {
							bvRadioGroup: this
						}
					},
					props: lm,
					computed: {
						isRadioGroup: function() {
							return !0
						}
					}
				}),
				dm = lt({
					components: {
						BFormRadio: Sp,
						BRadio: Sp,
						BFormRadioGroup: fm,
						BRadioGroup: fm
					}
				});

			function hm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function pm(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? hm(Object(n), !0).forEach((function(t) {
						_m(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function _m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var mm = Ja("value", {
					type: ui,
					event: dr
				}),
				bm = mm.mixin,
				gm = mm.props,
				vm = mm.prop,
				ym = mm.event,
				Am = function(e) {
					return Do(3, Ni(e, 5))
				},
				Sm = function(e, t, n) {
					return Do(Lo(e, n), t)
				},
				wm = r.default.extend({
					name: "BVFormRatingStar",
					mixins: [to],
					props: {
						disabled: Va(Qr, !1),
						focused: Va(Qr, !1),
						hasClear: Va(Qr, !1),
						rating: Va(Wr, 0),
						readonly: Va(Qr, !1),
						star: Va(Wr, 0),
						variant: Va(Jr)
					},
					methods: {
						onClick: function(e) {
							this.disabled || this.readonly || (oo(e, {
								propagation: !1
							}), this.$emit(Lr, this.star))
						}
					},
					render: function(e) {
						var t = this.rating,
							n = this.star,
							r = this.focused,
							i = this.hasClear,
							a = this.variant,
							o = this.disabled,
							s = this.readonly,
							u = i ? 0 : 1,
							c = t >= n ? "full" : t >= n - .5 ? "half" : "empty",
							l = {
								variant: a,
								disabled: o,
								readonly: s
							};
						return e("span", {
							staticClass: "b-rating-star",
							class: {
								focused: r && t === n || !Ni(t) && n === u, "b-rating-star-empty": "empty" === c, "b-rating-star-half": "half" === c, "b-rating-star-full": "full" === c
							},
							attrs: {
								tabindex: o || s ? null : "-1"
							},
							on: {
								click: this.onClick
							}
						}, [e("span", {
							staticClass: "b-rating-icon"
						}, [this.normalizeSlot(c, l)])])
					}
				}),
				Em = qa(He(pm(pm(pm(pm(pm({}, Nc), gm), je(zh, ["required", "autofocus"])), Wh), {}, {
					color: Va(Jr),
					iconClear: Va(Jr, "x"),
					iconEmpty: Va(Jr, "star"),
					iconFull: Va(Jr, "star-fill"),
					iconHalf: Va(Jr, "star-half"),
					inline: Va(Qr, !1),
					locale: Va(ni),
					noBorder: Va(Qr, !1),
					precision: Va(ui),
					readonly: Va(Qr, !1),
					showClear: Va(Qr, !1),
					showValue: Va(Qr, !1),
					showValueMax: Va(Qr, !1),
					stars: Va(ui, 5, (function(e) {
						return Ni(e) >= 3
					})),
					variant: Va(Jr)
				})), pn),
				Tm = r.default.extend({
					name: pn,
					components: {
						BIconStar: Es,
						BIconStarHalf: Cs,
						BIconStarFill: Ts,
						BIconX: $s
					},
					mixins: [Rc, bm, Kh],
					props: Em,
					data: function() {
						var e = Ri(this[vm], null),
							t = Am(this.stars);
						return {
							localValue: me(e) ? null : Sm(e, 0, t),
							hasFocus: !1
						}
					},
					computed: {
						computedStars: function() {
							return Am(this.stars)
						},
						computedRating: function() {
							var e = Ri(this.localValue, 0),
								t = Ni(this.precision, 3);
							return Sm(Ri(e.toFixed(t)), 0, this.computedStars)
						},
						computedLocale: function() {
							var e = Ii(this.locale).filter(We);
							return new Intl.NumberFormat(e).resolvedOptions().locale
						},
						isInteractive: function() {
							return !this.disabled && !this.readonly
						},
						isRTL: function() {
							return Bc(this.computedLocale)
						},
						formattedRating: function() {
							var e = Ni(this.precision),
								t = this.showValueMax,
								n = this.computedLocale,
								r = {
									notation: "standard",
									minimumFractionDigits: isNaN(e) ? 0 : e,
									maximumFractionDigits: isNaN(e) ? 3 : e
								},
								i = this.computedStars.toLocaleString(n),

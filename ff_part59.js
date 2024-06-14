							e.updateContent();
							var n = pv(e) || pv(e.$parent),
								r = e.$_toolpop = new t({
									parent: e,
									_scopeId: n || void 0
								});
							r.updateData(e.templateData), r.$on(Dr, e.onShow), r.$on(Br, e.onShown), r.$on($r, e.onHide), r.$on(Cr, e.onHidden), r.$on(vr, e.onDisabled), r.$on(Ar, e.onEnabled), e[uS] && e.doDisable(), e.$on("open", e.doOpen), e.$on(pr, e.doClose), e.$on(gr, e.doDisable), e.$on(yr, e.doEnable), e.localShow && r.show()
						}))
					},
					methods: {
						getComponent: function() {
							return aS
						},
						updateContent: function() {
							this.setTitle(this.normalizeSlot() || this.title)
						},
						setTitle: function(e) {
							e = be(e) ? "" : e, this.localTitle !== e && (this.localTitle = e)
						},
						setContent: function(e) {
							e = be(e) ? "" : e, this.localContent !== e && (this.localContent = e)
						},
						onShow: function(e) {
							this.$emit(Dr, e), e && (this.localShow = !e.defaultPrevented)
						},
						onShown: function(e) {
							this.localShow = !0, this.$emit(Br, e)
						},
						onHide: function(e) {
							this.$emit($r, e)
						},
						onHidden: function(e) {
							this.$emit(Cr, e), this.localShow = !1
						},
						onDisabled: function(e) {
							e && e.type === vr && (this.$emit(cS, !0), this.$emit(vr, e))
						},
						onEnabled: function(e) {
							e && e.type === Ar && (this.$emit(cS, !1), this.$emit(Ar, e))
						},
						doOpen: function() {
							!this.localShow && this.$_toolpop && this.$_toolpop.show()
						},
						doClose: function() {
							this.localShow && this.$_toolpop && this.$_toolpop.hide()
						},
						doDisable: function() {
							this.$_toolpop && this.$_toolpop.disable()
						},
						doEnable: function() {
							this.$_toolpop && this.$_toolpop.enable()
						}
					},
					render: function(e) {
						return e()
					}
				}),
				hS = r.default.extend({
					name: "BVPopoverTemplate",
					extends: qA,
					computed: {
						templateType: function() {
							return "popover"
						}
					},
					methods: {
						renderTemplate: function(e) {
							var t = this.title,
								n = this.content,
								r = ge(t) ? t({}) : t,
								i = ge(n) ? n({}) : n,
								a = this.html && !ge(t) ? {
									innerHTML: t
								} : {},
								o = this.html && !ge(n) ? {
									innerHTML: n
								} : {};
							return e("div", {
								staticClass: "popover b-popover",
								class: this.templateClasses,
								attrs: this.templateAttributes,
								on: this.templateListeners
							}, [e("div", {
								staticClass: "arrow",
								ref: "arrow"
							}), be(r) || "" === r ? e() : e("h3", {
								staticClass: "popover-header",
								domProps: a
							}, [r]), be(i) || "" === i ? e() : e("div", {
								staticClass: "popover-body",
								domProps: o
							}, [i])])
						}
					}
				}),
				pS = r.default.extend({
					name: "BVPopover",
					extends: aS,
					computed: {
						templateType: function() {
							return "popover"
						}
					},
					methods: {
						getTemplate: function() {
							return hS
						}
					}
				});

			function _S(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function mS(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? _S(Object(n), !0).forEach((function(t) {
						bS(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _S(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function bS(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var gS = qa(He(mS(mS({}, fS), {}, {
					content: Va(Jr),
					placement: Va(Jr, "right"),
					triggers: Va(ni, hr)
				})), Wn),
				vS = r.default.extend({
					name: Wn,
					extends: dS,
					inheritAttrs: !1,
					props: gS,
					methods: {
						getComponent: function() {
							return pS
						},
						updateContent: function() {
							this.setContent(this.normalizeSlot() || this.content), this.setTitle(this.normalizeSlot(Oi) || this.title)
						}
					}
				});

			function yS(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function AS(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? yS(Object(n), !0).forEach((function(t) {
						SS(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yS(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function SS(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var wS = "__BV_Popover__",
				ES = {
					focus: !0,
					hover: !0,
					click: !0,
					blur: !0,
					manual: !0
				},
				TS = /^html$/i,
				CS = /^nofade$/i,
				$S = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
				kS = /^(window|viewport|scrollParent)$/i,
				OS = /^d\d+$/i,
				xS = /^ds\d+$/i,
				PS = /^dh\d+$/i,
				MS = /^o-?\d+$/i,
				IS = /^v-.+$/i,
				LS = /\s+/,
				DS = function(e, t, n) {
					if (c) {
						var r = function(e, t) {
							var n = {
								title: void 0,
								content: void 0,
								trigger: "",
								placement: "right",
								fallbackPlacement: "flip",
								container: !1,
								animation: !0,
								offset: 0,
								disabled: !1,
								id: null,
								html: !1,
								delay: La(Wn, "delay", 50),
								boundary: String(La(Wn, "boundary", "scrollParent")),
								boundaryPadding: Ni(La(Wn, "boundaryPadding", 5), 0),
								variant: La(Wn, "variant"),
								customClass: La(Wn, "customClass")
							};
							if (ye(e.value) || Ae(e.value) || ge(e.value) ? n.content = e.value : Te(e.value) && (n = AS(AS({}, n), e.value)), e.arg && (n.container = "#".concat(e.arg)), _e(n.title)) {
								var r = t.data || {};
								n.title = r.attrs && !be(r.attrs.title) ? r.attrs.title : void 0
							}
							Te(n.delay) || (n.delay = {
								show: Ni(n.delay, 0),
								hide: Ni(n.delay, 0)
							}), Ne(e.modifiers).forEach((function(e) {
								if (TS.test(e)) n.html = !0;
								else if (CS.test(e)) n.animation = !1;
								else if ($S.test(e)) n.placement = e;
								else if (kS.test(e)) e = "scrollparent" === e ? "scrollParent" : e, n.boundary = e;
								else if (OS.test(e)) {
									var t = Ni(e.slice(1), 0);
									n.delay.show = t, n.delay.hide = t
								} else xS.test(e) ? n.delay.show = Ni(e.slice(2), 0) : PS.test(e) ? n.delay.hide = Ni(e.slice(2), 0) : MS.test(e) ? n.offset = Ni(e.slice(1), 0) : IS.test(e) && (n.variant = e.slice(2) || null)
							}));
							var i = {};
							return Ii(n.trigger || "").filter(We).join(" ").trim().toLowerCase().split(LS).forEach((function(e) {
								ES[e] && (i[e] = !0)
							})), Ne(e.modifiers).forEach((function(e) {
								e = e.toLowerCase(), ES[e] && (i[e] = !0)
							})), n.trigger = Ne(i).join(" "), "blur" === n.trigger && (n.trigger = "focus"), n.trigger || (n.trigger = "click"), n
						}(t, n);
						if (!e[wS]) {
							var i = n.context;
							e[wS] = new pS({
								parent: i,
								_scopeId: pv(i, void 0)
							}), e[wS].__bv_prev_data__ = {}, e[wS].$on(Dr, (function() {
								var t = {};
								ge(r.title) && (t.title = r.title(e)), ge(r.content) && (t.content = r.content(e)), Ne(t).length > 0 && e[wS].updateData(t)
							}))
						}
						var a = {
								title: r.title,
								content: r.content,
								triggers: r.trigger,
								placement: r.placement,
								fallbackPlacement: r.fallbackPlacement,
								variant: r.variant,
								customClass: r.customClass,
								container: r.container,
								boundary: r.boundary,
								delay: r.delay,
								offset: r.offset,
								noFade: !r.animation,
								id: r.id,
								disabled: r.disabled,
								html: r.html
							},
							o = e[wS].__bv_prev_data__;
						if (e[wS].__bv_prev_data__ = a, !Hs(a, o)) {
							var s = {
								target: e
							};
							Ne(a).forEach((function(t) {
								a[t] !== o[t] && (s[t] = "title" !== t && "content" !== t || !ge(a[t]) ? a[t] : a[t](e))
							})), e[wS].updateData(s)
						}
					}
				},
				BS = lt({
					directives: {
						VBPopover: {
							bind: function(e, t, n) {
								DS(e, t, n)
							},
							componentUpdated: function(e, t, n) {
								n.context.$nextTick((function() {
									DS(e, t, n)
								}))
							},
							unbind: function(e) {
								! function(e) {
									e[wS] && (e[wS].$destroy(), e[wS] = null), delete e[wS]
								}(e)
							}
						}
					}
				}),
				NS = lt({
					components: {
						BPopover: vS
					},
					plugins: {
						VBPopoverPlugin: BS
					}
				}),
				RS = qa({
					animated: Va(Qr, null),
					label: Va(Jr),
					labelHtml: Va(Jr),
					max: Va(ui, null),
					precision: Va(ui, null),
					showProgress: Va(Qr, null),
					showValue: Va(Qr, null),
					striped: Va(Qr, null),
					value: Va(ui, 0),
					variant: Va(Jr)
				}, Xn),
				FS = r.default.extend({
					name: Xn,
					mixins: [to],
					inject: {
						bvProgress: {
							default: function() {
								return {}
							}
						}
					},
					props: RS,
					computed: {
						progressBarClasses: function() {
							var e = this.computedAnimated,
								t = this.computedVariant;
							return [t ? "bg-".concat(t) : "", this.computedStriped || e ? "progress-bar-striped" : "", e ? "progress-bar-animated" : ""]
						},
						progressBarStyles: function() {
							return {
								width: this.computedValue / this.computedMax * 100 + "%"
							}
						},
						computedValue: function() {
							return Ri(this.value, 0)
						},
						computedMax: function() {
							var e = Ri(this.max) || Ri(this.bvProgress.max, 0);
							return e > 0 ? e : 100
						},
						computedPrecision: function() {
							return Do(Ni(this.precision, Ni(this.bvProgress.precision, 0)), 0)
						},
						computedProgress: function() {
							var e = this.computedPrecision,
								t = Fo(10, e);
							return Fi(100 * t * this.computedValue / this.computedMax / t, e)
						},
						computedVariant: function() {
							return this.variant || this.bvProgress.variant
						},
						computedStriped: function() {
							return ve(this.striped) ? this.striped : this.bvProgress.striped || !1
						},
						computedAnimated: function() {
							return ve(this.animated) ? this.animated : this.bvProgress.animated || !1
						},
						computedShowProgress: function() {
							return ve(this.showProgress) ? this.showProgress : this.bvProgress.showProgress || !1
						},
						computedShowValue: function() {
							return ve(this.showValue) ? this.showValue : this.bvProgress.showValue || !1
						}
					},
					render: function(e) {
						var t, n = this.label,
							r = this.labelHtml,
							i = this.computedValue,
							a = this.computedPrecision,
							o = {};
						return this.hasNormalizedSlot() ? t = this.normalizeSlot() : n || r ? o = Fu(r, n) : this.computedShowProgress ? t = this.computedProgress : this.computedShowValue && (t = Fi(i, a)), e("div", {
							staticClass: "progress-bar",
							class: this.progressBarClasses,
							style: this.progressBarStyles,
							attrs: {
								role: "progressbar",
								"aria-valuemin": "0",
								"aria-valuemax": zi(this.computedMax),
								"aria-valuenow": Fi(i, a)
							},
							domProps: o
						}, t)
					}
				});

			function US(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function jS(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? US(Object(n), !0).forEach((function(t) {
						HS(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : US(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function HS(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var YS, VS = je(RS, ["label", "labelHtml"]),
				zS = qa(He(jS(jS({}, VS), {}, {
					animated: Va(Qr, !1),
					height: Va(Jr),
					max: Va(ui, 100),
					precision: Va(ui, 0),
					showProgress: Va(Qr, !1),
					showValue: Va(Qr, !1),
					striped: Va(Qr, !1)
				})), Kn),
				QS = lt({
					components: {
						BProgress: r.default.extend({
							name: Kn,
							mixins: [to],
							provide: function() {
								return {
									bvProgress: this
								}
							},
							props: zS,
							computed: {
								progressHeight: function() {
									return {
										height: this.height || null
									}
								}
							},
							render: function(e) {
								var t = this.normalizeSlot();
								return t || (t = e(FS, {
									props: Qa(VS, this.$props)
								})), e("div", {
									staticClass: "progress",
									style: this.progressHeight
								}, [t])
							}
						}),
						BProgressBar: FS
					}
				});

			function GS(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function qS(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? GS(Object(n), !0).forEach((function(t) {
						WS(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : GS(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function WS(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var KS = "b-sidebar",
				XS = co(Gt, "request-state"),
				JS = co(Gt, "toggle"),
				ZS = uo(Gt, "state"),
				ew = uo(Gt, "sync-state"),
				tw = Ja("visible", {
					type: Qr,
					defaultValue: !1,
					event: dr
				}),
				nw = tw.mixin,
				rw = tw.props,
				iw = tw.prop,
				aw = tw.event,
				ow = qa(He(qS(qS(qS({}, Nc), rw), {}, {
					ariaLabel: Va(Jr),
					ariaLabelledby: Va(Jr),
					backdrop: Va(Qr, !1),
					backdropVariant: Va(Jr, "dark"),
					bgVariant: Va(Jr, "light"),
					bodyClass: Va(ti),
					closeLabel: Va(Jr),
					footerClass: Va(ti),
					headerClass: Va(ti),
					lazy: Va(Qr, !1),
					noCloseOnBackdrop: Va(Qr, !1),
					noCloseOnEsc: Va(Qr, !1),
					noCloseOnRouteChange: Va(Qr, !1),
					noEnforceFocus: Va(Qr, !1),
					noHeader: Va(Qr, !1),
					noHeaderClose: Va(Qr, !1),
					noSlide: Va(Qr, !1),
					right: Va(Qr, !1),
					shadow: Va(ai, !1),
					sidebarClass: Va(ti),
					tag: Va(Jr, "div"),
					textVariant: Va(Jr, "dark"),
					title: Va(Jr),
					width: Va(Jr),
					zIndex: Va(ui)
				})), Jn),
				sw = function(e, t) {
					if (t.noHeader) return e();
					var n = t.normalizeSlot(vi, t.slotScope);
					if (!n) {
						var r = function(e, t) {
								var n = t.normalizeSlot(Oi, t.slotScope) || t.title;
								return n ? e("strong", {
									attrs: {
										id: t.safeId("__title__")
									}
								}, [n]) : e("span")
							}(e, t),
							i = function(e, t) {
								if (t.noHeaderClose) return e();
								var n = t.closeLabel,
									r = t.textVariant,
									i = t.hide;
								return e(ho, {
									props: {
										ariaLabel: n,
										textVariant: r
									},
									on: {
										click: i
									},
									ref: "close-button"
								}, [t.normalizeSlot("header-close") || e($s)])
							}(e, t);
						n = t.right ? [i, r] : [r, i]
					}
					return e("header", {
						staticClass: "".concat(KS, "-header"),
						class: t.headerClass,
						key: "header"
					}, n)
				},
				uw = function(e, t) {
					return e("div", {
						staticClass: "".concat(KS, "-body"),
						class: t.bodyClass,
						key: "body"
					}, [t.normalizeSlot(_i, t.slotScope)])
				},
				cw = function(e, t) {
					var n = t.normalizeSlot(gi, t.slotScope);
					return n ? e("footer", {
						staticClass: "".concat(KS, "-footer"),
						class: t.footerClass,
						key: "footer"
					}, [n]) : e()
				},
				lw = function(e, t) {
					var n = sw(e, t);
					return t.lazy && !t.isOpen ? n : [n, uw(e, t), cw(e, t)]
				},
				fw = function(e, t) {
					if (!t.backdrop) return e();
					var n = t.backdropVariant;
					return e("div", {
						directives: [{
							name: "show",
							value: t.localShow
						}],
						staticClass: "b-sidebar-backdrop",
						class: WS({}, "bg-".concat(n), n),
						on: {
							click: t.onBackdropClick
						}
					})
				},
				dw = lt({
					components: {
						BSidebar: r.default.extend({
							name: Jn,
							mixins: [Gs, Rc, nw, qs, to],
							inheritAttrs: !1,
							props: ow,
							data: function() {
								var e = !!this[iw];
								return {
									localShow: e,
									isOpen: e
								}
							},
							computed: {
								transitionProps: function() {
									return this.noSlide ? {
										css: !0
									} : {
										css: !0,
										enterClass: "",
										enterActiveClass: "slide",
										enterToClass: "show",
										leaveClass: "show",
										leaveActiveClass: "slide",
										leaveToClass: ""
									}
								},
								slotScope: function() {
									return {
										hide: this.hide,
										right: this.right,
										visible: this.localShow
									}
								},
								hasTitle: function() {
									var e = this.$scopedSlots,
										t = this.$slots;
									return !(this.noHeader || this.hasNormalizedSlot(vi) || !this.normalizeSlot(Oi, this.slotScope, e, t) && !this.title)
								},
								titleId: function() {
									return this.hasTitle ? this.safeId("__title__") : null
								},
								computedAttrs: function() {
									return qS(qS({}, this.bvAttrs), {}, {
										id: this.safeId(),
										tabindex: "-1",
										role: "dialog",
										"aria-modal": this.backdrop ? "true" : "false",
										"aria-hidden": this.localShow ? null : "true",
										"aria-label": this.ariaLabel || null,
										"aria-labelledby": this.ariaLabelledby || this.titleId || null
									})
								}
							},
							watch: (YS = {}, WS(YS, iw, (function(e, t) {
								e !== t && (this.localShow = e)
							})), WS(YS, "localShow", (function(e, t) {
								e !== t && (this.emitState(e), this.$emit(aw, e))
							})), WS(YS, "$route", (function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								this.noCloseOnRouteChange || e.fullPath === t.fullPath || this.hide()
							})), YS),
							created: function() {
								this.$_returnFocusEl = null
							},
							mounted: function() {
								var e = this;
								this.listenOnRoot(JS, this.handleToggle), this.listenOnRoot(XS, this.handleSync), this.$nextTick((function() {
									e.emitState(e.localShow)
								}))
							},
							activated: function() {
								this.emitSync()
							},
							beforeDestroy: function() {
								this.localShow = !1, this.$_returnFocusEl = null
							},
							methods: {
								hide: function() {
									this.localShow = !1
								},
								emitState: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.localShow;
									this.emitOnRoot(ZS, this.safeId(), e)
								},
								emitSync: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.localShow;
									this.emitOnRoot(ew, this.safeId(), e)
								},
								handleToggle: function(e) {
									e && e === this.safeId() && (this.localShow = !this.localShow)
								},
								handleSync: function(e) {
									var t = this;
									e && e === this.safeId() && this.$nextTick((function() {
										t.emitSync(t.localShow)
									}))
								},
								onKeydown: function(e) {
									var t = e.keyCode;
									!this.noCloseOnEsc && 27 === t && this.localShow && this.hide()
								},
								onBackdropClick: function() {
									this.localShow && !this.noCloseOnBackdrop && this.hide()
								},
								onTopTrapFocus: function() {
									var e = ka(this.$refs.content);
									this.enforceFocus(e.reverse()[0])
								},
								onBottomTrapFocus: function() {
									var e = ka(this.$refs.content);
									this.enforceFocus(e[0])
								},
								onBeforeEnter: function() {
									this.$_returnFocusEl = ta(c ? [document.body] : []), this.isOpen = !0
								},
								onAfterEnter: function(e) {
									fa(e, ta()) || this.enforceFocus(e), this.$emit(Br)
								},
								onAfterLeave: function() {
									this.enforceFocus(this.$_returnFocusEl), this.$_returnFocusEl = null, this.isOpen = !1, this.$emit(Cr)
								},
								enforceFocus: function(e) {
									this.noEnforceFocus || Oa(e)
								}
							},
							render: function(e) {
								var t, n = this.bgVariant,
									r = this.width,
									i = this.textVariant,
									a = this.localShow,
									o = "" === this.shadow || this.shadow,
									s = e(this.tag, {
										staticClass: KS,
										class: [(t = {
											shadow: !0 === o
										}, WS(t, "shadow-".concat(o), o && !0 !== o), WS(t, "".concat(KS, "-right"), this.right), WS(t, "bg-".concat(n), n), WS(t, "text-".concat(i), i), t), this.sidebarClass],
										style: {
											width: r
										},
										attrs: this.computedAttrs,
										directives: [{
											name: "show",
											value: a
										}],
										ref: "content"
									}, [lw(e, this)]);
								s = e("transition", {
									props: this.transitionProps,
									on: {
										beforeEnter: this.onBeforeEnter,
										afterEnter: this.onAfterEnter,
										afterLeave: this.onAfterLeave
									}
								}, [s]);
								var u = e(Ao, {
										props: {
											noFade: this.noSlide
										}
									}, [fw(e, this)]),
									c = e(),
									l = e();
								return this.backdrop && a && (c = e("div", {
									attrs: {
										tabindex: "0"
									},
									on: {
										focus: this.onTopTrapFocus
									}
								}), l = e("div", {
									attrs: {
										tabindex: "0"
									},
									on: {
										focus: this.onBottomTrapFocus
									}
								})), e("div", {
									staticClass: "b-sidebar-outer",
									style: {
										zIndex: this.zIndex
									},
									attrs: {
										tabindex: "-1"
									},
									on: {
										keydown: this.onKeydown
									}
								}, [c, s, l, u])
							}
						})
					},
					plugins: {
						VBTogglePlugin: md
					}
				});

			function hw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var pw = qa({
					animation: Va(Jr, "wave"),
					height: Va(Jr),
					size: Va(Jr),
					type: Va(Jr, "text"),
					variant: Va(Jr),
					width: Va(Jr)
				}, Zn),
				_w = r.default.extend({
					name: Zn,
					functional: !0,
					props: pw,
					render: function(e, t) {
						var n, r = t.data,
							i = t.props,
							a = i.size,
							o = i.animation,
							s = i.variant;
						return e("div", St(r, {
							staticClass: "b-skeleton",
							style: {
								width: a || i.width,
								height: a || i.height
							},
							class: (n = {}, hw(n, "b-skeleton-".concat(i.type), !0), hw(n, "b-skeleton-animate-".concat(o), o), hw(n, "bg-".concat(s), s), n)
						}))
					}
				});

			function mw(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function bw(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? mw(Object(n), !0).forEach((function(t) {
						gw(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mw(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function gw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var vw = qa({
					animation: Va(Jr, "wave"),
					icon: Va(Jr),
					iconProps: Va(Kr, {})
				}, er),
				yw = r.default.extend({
					name: er,
					functional: !0,
					props: vw,
					render: function(e, t) {
						var n = t.props,
							r = n.icon,
							i = n.animation,
							a = e(Is, {
								staticClass: "b-skeleton-icon",
								props: bw(bw({}, n.iconProps), {}, {
									icon: r
								})
							});
						return e("div", {
							staticClass: "b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden",
							class: gw({}, "b-skeleton-animate-".concat(i), i)
						}, [a])
					}
				});

			function Aw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Sw = qa({
					animation: Va(Jr),
					aspect: Va(Jr, "16:9"),
					cardImg: Va(Jr),
					height: Va(Jr),
					noAspect: Va(Qr, !1),
					variant: Va(Jr),
					width: Va(Jr)
				}, tr),
				ww = r.default.extend({
					name: tr,
					functional: !0,
					props: Sw,
					render: function(e, t) {
						var n = t.props,
							r = n.aspect,
							i = n.width,
							a = n.height,
							o = n.animation,
							s = n.variant,
							u = n.cardImg,
							c = e(_w, {
								props: {
									type: "img",
									width: i,
									height: a,
									animation: o,
									variant: s
								},
								class: Aw({}, "card-img-".concat(u), u)
							});
						return n.noAspect ? c : e(zo, {
							props: {
								aspect: r
							}
						}, [c])
					}
				}),
				Ew = r.default.extend({
					methods: {
						hasListener: function(e) {
							var t = this.$listeners || {},
								n = this._events || {};
							return !_e(t[e]) || we(n[e]) && n[e].length > 0
						}
					}
				});
			var Tw = {
					stacked: Va(ai, !1)
				},
				Cw = r.default.extend({
					props: Tw,
					computed: {
						isStacked: function() {
							var e = this.stacked;
							return "" === e || e
						},
						isStackedAlways: function() {
							return !0 === this.isStacked
						},
						stackedTableClasses: function() {
							var e = this.isStackedAlways;
							return function(e, t, n) {
								return t in e ? Object.defineProperty(e, t, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[t] = n, e
							}({
								"b-table-stacked": e
							}, "b-table-stacked-".concat(this.stacked), !e && this.isStacked)
						}
					}
				});

			function $w(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function kw(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? $w(Object(n), !0).forEach((function(t) {
						Ow(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $w(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ow(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var xw = {
					bordered: Va(Qr, !1),
					borderless: Va(Qr, !1),
					captionTop: Va(Qr, !1),
					dark: Va(Qr, !1),
					fixed: Va(Qr, !1),
					hover: Va(Qr, !1),
					noBorderCollapse: Va(Qr, !1),
					outlined: Va(Qr, !1),
					responsive: Va(ai, !1),
					small: Va(Qr, !1),
					stickyHeader: Va(ai, !1),
					striped: Va(Qr, !1),
					tableClass: Va(ti),
					tableVariant: Va(Jr)
				},
				Pw = r.default.extend({
					mixins: [Gs],
					provide: function() {
						return {
							bvTable: this
						}
					},
					inheritAttrs: !1,
					props: xw,
					computed: {
						isResponsive: function() {
							var e = this.responsive;
							return "" === e || e
						},
						isStickyHeader: function() {
							var e = this.stickyHeader;
							return e = "" === e || e, !this.isStacked && e
						},
						wrapperClasses: function() {
							var e = this.isResponsive;
							return [this.isStickyHeader ? "b-table-sticky-header" : "", !0 === e ? "table-responsive" : e ? "table-responsive-".concat(this.responsive) : ""].filter(We)
						},
						wrapperStyles: function() {
							var e = this.isStickyHeader;
							return e && !ve(e) ? {
								maxHeight: e
							} : {}
						},
						tableClasses: function() {
							var e = this.hover,
								t = this.tableVariant;
							return e = this.isTableSimple ? e : e && this.computedItems.length > 0 && !this.computedBusy, [this.tableClass, {
								"table-striped": this.striped,
								"table-hover": e,
								"table-dark": this.dark,
								"table-bordered": this.bordered,
								"table-borderless": this.borderless,
								"table-sm": this.small,
								border: this.outlined,
								"b-table-fixed": this.fixed,
								"b-table-caption-top": this.captionTop,
								"b-table-no-border-collapse": this.noBorderCollapse
							}, t ? "".concat(this.dark ? "bg" : "table", "-").concat(t) : "", this.stackedTableClasses, this.selectableTableClasses]
						},
						tableAttrs: function() {
							var e = this.computedItems,
								t = this.filteredItems,
								n = this.computedFields,
								r = this.selectableTableAttrs,
								i = this.isTableSimple ? {} : {
									"aria-busy": this.computedBusy ? "true" : "false",
									"aria-colcount": zi(n.length),
									"aria-describedby": this.bvAttrs["aria-describedby"] || this.$refs.caption ? this.captionId : null
								};
							return kw(kw(kw({
								"aria-rowcount": e && t && t.length > e.length ? zi(t.length) : null
							}, this.bvAttrs), {}, {
								id: this.safeId(),
								role: "table"
							}, i), r)
						}
					},
					render: function(e) {
						var t = this.wrapperClasses,
							n = this.renderCaption,
							r = this.renderColgroup,
							i = this.renderThead,
							a = this.renderTbody,
							o = this.renderTfoot,
							s = [];
						this.isTableSimple ? s.push(this.normalizeSlot()) : (s.push(n ? n() : null), s.push(r ? r() : null), s.push(i ? i() : null), s.push(a ? a() : null), s.push(o ? o() : null));
						var u = e("table", {
							staticClass: "table b-table",
							class: this.tableClasses,
							attrs: this.tableAttrs,
							key: "b-table"
						}, s.filter(We));
						return t.length > 0 ? e("div", {
							class: t,
							style: this.wrapperStyles,
							key: "wrap"
						}, [u]) : u
					}
				});

			function Mw(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Iw(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Mw(Object(n), !0).forEach((function(t) {
						Lw(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mw(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Lw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Dw = qa(He(Iw(Iw(Iw({}, Nc), Tw), xw)), ur),
				Bw = r.default.extend({
					name: ur,
					mixins: [Gs, Ew, Rc, to, Pw, Cw],
					props: Dw,
					computed: {
						isTableSimple: function() {
							return !0
						}
					}
				});

			function Nw(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Rw(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Nw(Object(n), !0).forEach((function(t) {
						Fw(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nw(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Fw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Uw = function(e) {
					return e > 0
				},
				jw = qa({
					animation: Va(Jr),
					columns: Va(Wr, 5, Uw),
					hideHeader: Va(Qr, !1),
					rows: Va(Wr, 3, Uw),
					showFooter: Va(Qr, !1),
					tableProps: Va(Kr, {})
				}, nr),
				Hw = r.default.extend({
					name: nr,
					functional: !0,
					props: jw,
					render: function(e, t) {
						var n = t.props,
							r = n.animation,
							i = n.columns,
							a = e("th", [e(_w, {
								props: {
									animation: r
								}
							})]),
							o = e("tr", Li(i, a)),
							s = e("td", [e(_w, {
								props: {
									width: "75%",
									animation: r
								}
							})]),
							u = e("tr", Li(i, s)),
							c = e("tbody", Li(n.rows, u)),
							l = n.hideHeader ? e() : e("thead", [o]),
							f = n.showFooter ? e("tfoot", [o]) : e();
						return e(Bw, {
							props: Rw({}, n.tableProps)
						}, [l, c, f])
					}
				}),
				Yw = qa({
					loading: Va(Qr, !1)
				}, rr),
				Vw = r.default.extend({
					name: rr,
					functional: !0,
					props: Yw,
					render: function(e, t) {
						var n = t.data,
							r = t.props,
							i = t.slots,
							a = t.scopedSlots,
							o = i(),
							s = a || {},
							u = {};
						return r.loading ? e("div", St(n, {
							attrs: {
								role: "alert",
								"aria-live": "polite",
								"aria-busy": !0
							},
							staticClass: "b-skeleton-wrapper",
							key: "loading"
						}), eo("loading", u, s, o)) : eo(_i, u, s, o)
					}
				}),
				zw = lt({
					components: {
						BSkeleton: _w,
						BSkeletonIcon: yw,
						BSkeletonImg: ww,
						BSkeletonTable: Hw,
						BSkeletonWrapper: Vw
					}
				}),
				Qw = lt({
					components: {
						BSpinner: oA
					}
				});

			function Gw(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function qw(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ww = qa({
					variant: Va(Jr)
				}, "BTr"),
				Kw = r.default.extend({
					name: "BTr",
					mixins: [Gs, Ws, to],
					provide: function() {
						return {
							bvTableTr: this
						}
					},
					inject: {
						bvTableRowGroup: {
							default: function() {
								return {}
							}
						}
					},
					inheritAttrs: !1,
					props: Ww,
					computed: {
						inTbody: function() {
							return this.bvTableRowGroup.isTbody
						},
						inThead: function() {
							return this.bvTableRowGroup.isThead
						},
						inTfoot: function() {
							return this.bvTableRowGroup.isTfoot
						},
						isDark: function() {
							return this.bvTableRowGroup.isDark
						},
						isStacked: function() {
							return this.bvTableRowGroup.isStacked
						},
						isResponsive: function() {
							return this.bvTableRowGroup.isResponsive
						},
						isStickyHeader: function() {
							return this.bvTableRowGroup.isStickyHeader
						},
						hasStickyHeader: function() {
							return !this.isStacked && this.bvTableRowGroup.hasStickyHeader
						},
						tableVariant: function() {
							return this.bvTableRowGroup.tableVariant
						},
						headVariant: function() {
							return this.inThead ? this.bvTableRowGroup.headVariant : null
						},
						footVariant: function() {
							return this.inTfoot ? this.bvTableRowGroup.footVariant : null
						},
						isRowDark: function() {
							return "light" !== this.headVariant && "light" !== this.footVariant && ("dark" === this.headVariant || "dark" === this.footVariant || this.isDark)
						},
						trClasses: function() {
							var e = this.variant;
							return [e ? "".concat(this.isRowDark ? "bg" : "table", "-").concat(e) : null]
						},
						trAttrs: function() {
							return function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2 ? Gw(Object(n), !0).forEach((function(t) {
										qw(e, t, n[t])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gw(Object(n)).forEach((function(t) {
										Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
									}))
								}
								return e
							}({
								role: "row"
							}, this.bvAttrs)
						}
					},
					render: function(e) {
						return e("tr", {
							class: this.trClasses,
							attrs: this.trAttrs,
							on: this.bvListeners
						}, this.normalizeSlot())
					}
				}),
				Xw = {},
				Jw = r.default.extend({
					props: Xw,
					methods: {
						renderBottomRow: function() {
							var e = this.computedFields,
								t = this.stacked,
								n = this.tbodyTrClass,
								r = this.tbodyTrAttr,
								i = this.$createElement;
							return this.hasNormalizedSlot(di) && !0 !== t && "" !== t ? i(Kw, {
								staticClass: "b-table-bottom-row",
								class: [ge(n) ? n(null, "row-bottom") : n],
								attrs: ge(r) ? r(null, "row-bottom") : r,
								key: "b-bottom-row"
							}, this.normalizeSlot(di, {
								columns: e.length,
								fields: e
							})) : i()
						}
					}
				});

			function Zw(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function eE(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Zw(Object(n), !0).forEach((function(t) {
						tE(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zw(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function tE(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var nE = function(e) {
					return (e = Ni(e, 0)) > 0 ? e : null
				},
				rE = function(e) {
					return be(e) || nE(e) > 0
				},
				iE = qa({
					colspan: Va(ui, null, rE),
					rowspan: Va(ui, null, rE),
					stackedHeading: Va(Jr),
					stickyColumn: Va(Qr, !1),
					variant: Va(Jr)
				}, or),
				aE = r.default.extend({
					name: or,
					mixins: [Gs, Ws, to],
					inject: {
						bvTableTr: {
							default: function() {
								return {}
							}
						}
					},
					inheritAttrs: !1,
					props: iE,
					computed: {
						tag: function() {
							return "td"
						},
						inTbody: function() {
							return this.bvTableTr.inTbody
						},
						inThead: function() {
							return this.bvTableTr.inThead
						},
						inTfoot: function() {
							return this.bvTableTr.inTfoot
						},
						isDark: function() {
							return this.bvTableTr.isDark
						},
						isStacked: function() {
							return this.bvTableTr.isStacked
						},
						isStackedCell: function() {
							return this.inTbody && this.isStacked
						},
						isResponsive: function() {
							return this.bvTableTr.isResponsive
						},
						isStickyHeader: function() {
							return this.bvTableTr.isStickyHeader
						},
						hasStickyHeader: function() {
							return this.bvTableTr.hasStickyHeader
						},
						isStickyColumn: function() {
							return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn
						},
						rowVariant: function() {
							return this.bvTableTr.variant
						},
						headVariant: function() {
							return this.bvTableTr.headVariant
						},
						footVariant: function() {
							return this.bvTableTr.footVariant
						},
						tableVariant: function() {
							return this.bvTableTr.tableVariant
						},
						computedColspan: function() {
							return nE(this.colspan)
						},
						computedRowspan: function() {
							return nE(this.rowspan)
						},
						cellClasses: function() {
							var e = this.variant,
								t = this.headVariant,
								n = this.isStickyColumn;
							return (!e && this.isStickyHeader && !t || !e && n && this.inTfoot && !this.footVariant || !e && n && this.inThead && !t || !e && n && this.inTbody) && (e = this.rowVariant || this.tableVariant || "b-table-default"), [e ? "".concat(this.isDark ? "bg" : "table", "-").concat(e) : null, n ? "b-table-sticky-column" : null]
						},
						cellAttrs: function() {
							var e = this.stackedHeading,
								t = this.inThead || this.inTfoot,
								n = this.computedColspan,
								r = this.computedRowspan,
								i = "cell",
								a = null;
							return t ? (i = "columnheader", a = n > 0 ? "colspan" : "col") : na(this.tag, "th") && (i = "rowheader", a = r > 0 ? "rowgroup" : "row"), eE(eE({
								colspan: n,
								rowspan: r,
								role: i,
								scope: a
							}, this.bvAttrs), {}, {
								"data-label": this.isStackedCell && !be(e) ? zi(e) : null
							})
						}
					},
					render: function(e) {
						var t = [this.normalizeSlot()];
						return e(this.tag, {
							class: this.cellClasses,
							attrs: this.cellAttrs,
							on: this.bvListeners
						}, [this.isStackedCell ? e("div", [t]) : t])
					}
				});
			var oE = "busy",
				sE = function(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}({}, oE, Va(Qr, !1)),
				uE = r.default.extend({
					props: sE,
					data: function() {
						return {
							localBusy: !1
						}
					},
					computed: {
						computedBusy: function() {
							return this[oE] || this.localBusy
						}
					},
					watch: {
						localBusy: function(e, t) {
							e !== t && this.$emit("update:busy", e)
						}
					},
					methods: {
						stopIfBusy: function(e) {
							return !!this.computedBusy && (oo(e), !0)
						},
						renderBusy: function() {
							var e = this.tbodyTrClass,
								t = this.tbodyTrAttr,
								n = this.$createElement;
							return this.computedBusy && this.hasNormalizedSlot(Ti) ? n(Kw, {
								staticClass: "b-table-busy-slot",
								class: [ge(e) ? e(null, Ti) : e],
								attrs: ge(t) ? t(null, Ti) : t,
								key: "table-busy-slot"
							}, [n(aE, {
								props: {
									colspan: this.computedFields.length || null
								}
							}, [this.normalizeSlot(Ti)])]) : null
						}
					}
				}),
				cE = {
					caption: Va(Jr),
					captionHtml: Va(Jr)
				},
				lE = r.default.extend({
					props: cE,
					computed: {
						captionId: function() {
							return this.isStacked ? this.safeId("_caption_") : null
						}
					},
					methods: {
						renderCaption: function() {
							var e = this.caption,
								t = this.captionHtml,
								n = this.$createElement,
								r = n(),
								i = this.hasNormalizedSlot(Ci);
							return (i || e || t) && (r = n("caption", {
								attrs: {
									id: this.captionId
								},
								domProps: i ? {} : Fu(t, e),
								key: "caption",
								ref: "caption"
							}, this.normalizeSlot(Ci))), r
						}
					}
				}),
				fE = {},
				dE = r.default.extend({
					methods: {
						renderColgroup: function() {
							var e = this.computedFields,
								t = this.$createElement,
								n = t();
							return this.hasNormalizedSlot($i) && (n = t("colgroup", {
								key: "colgroup"
							}, [this.normalizeSlot($i, {
								columns: e.length,
								fields: e
							})])), n
						}
					}
				}),
				hE = {
					emptyFilteredHtml: Va(Jr),
					emptyFilteredText: Va(Jr, "There are no records matching your request"),
					emptyHtml: Va(Jr),
					emptyText: Va(Jr, "There are no records to show"),
					showEmpty: Va(Qr, !1)
				},
				pE = r.default.extend({
					props: hE,
					methods: {
						renderEmpty: function() {
							var e = this.computedItems,
								t = this.$createElement,
								n = t();
							if (this.showEmpty && (!e || 0 === e.length) && (!this.computedBusy || !this.hasNormalizedSlot(Ti))) {
								var r = this.computedFields,
									i = this.isFiltered,
									a = this.emptyText,
									o = this.emptyHtml,
									s = this.emptyFilteredText,
									u = this.emptyFilteredHtml,
									c = this.tbodyTrClass,
									l = this.tbodyTrAttr;
								(n = this.normalizeSlot(i ? "emptyfiltered" : "empty", {
									emptyFilteredHtml: u,
									emptyFilteredText: s,
									emptyHtml: o,
									emptyText: a,
									fields: r,
									items: e
								})) || (n = t("div", {
									class: ["text-center", "my-2"],
									domProps: i ? Fu(u, s) : Fu(o, a)
								})), n = t(aE, {
									props: {
										colspan: r.length || null
									}
								}, [t("div", {
									attrs: {
										role: "alert",
										"aria-live": "polite"
									}
								}, [n])]), n = t(Kw, {
									staticClass: "b-table-empty-row",
									class: [ge(c) ? c(null, "row-empty") : c],
									attrs: ge(l) ? l(null, "row-empty") : l,
									key: i ? "b-empty-filtered-row" : "b-empty-row"
								}, [n])
							}
							return n
						}
					}
				}),
				_E = function e(t) {
					return be(t) ? "" : Ee(t) && !Ce(t) ? Ne(t).sort().map((function(n) {
						return e(t[n])
					})).filter((function(e) {
						return !!e
					})).join(" ") : zi(t)
				};

			function mE(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function bE(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? mE(Object(n), !0).forEach((function(t) {
						gE(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mE(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function gE(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var vE = "_cellVariants",
				yE = "_rowVariant",
				AE = "_showDetails",
				SE = [vE, yE, AE].reduce((function(e, t) {
					return bE(bE({}, e), {}, gE({}, t, !0))
				}), {}),
				wE = ["a", "a *", "button", "button *", "input:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", "textarea:not(.disabled):not([disabled])", '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', "[tabindex]:not(.disabled):not([disabled])"].join(","),
				EE = function(e, t, n) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
						i = Ne(r).reduce((function(t, n) {
							var i = r[n],
								a = i.filterByFormatted,
								o = ge(a) ? a : a ? i.formatter : null;
							return ge(o) && (t[n] = o(e[n], n, e)), t
						}), Fe(e)),
						a = Ne(i).filter((function(e) {
							return !(SE[e] || we(t) && t.length > 0 && Mi(t, e) || we(n) && n.length > 0 && !Mi(n, e))
						}));
					return Ue(i, a)
				};

			function TE(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var CE = {
					filter: Va([].concat(function(e) {
						return function(e) {
							if (Array.isArray(e)) return TE(e)
						}(e) || function(e) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
						}(e) || function(e, t) {
							if (e) {
								if ("string" == typeof e) return TE(e, t);
								var n = Object.prototype.toString.call(e).slice(8, -1);
								return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? TE(e, t) : void 0
							}
						}(e) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}(ti), [Xr])),
					filterDebounce: Va(ui, 0, (function(e) {
						return E.test(String(e))
					})),
					filterFunction: Va(qr),
					filterIgnoredFields: Va(zr, []),
					filterIncludedFields: Va(zr, [])
				},
				$E = r.default.extend({
					props: CE,
					data: function() {
						return {
							isFiltered: !1,
							localFilter: this.filterSanitize(this.filter)
						}
					},
					computed: {
						computedFilterIgnored: function() {
							return Ii(this.filterIgnoredFields || []).filter(We)
						},
						computedFilterIncluded: function() {
							return Ii(this.filterIncludedFields || []).filter(We)
						},
						computedFilterDebounce: function() {
							var e = Ni(this.filterDebounce, 0);
							return e > 0 && Ze('Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.', ar), e
						},
						localFiltering: function() {
							return !this.hasProvider || !!this.noProviderFiltering
						},
						filteredCheck: function() {
							return {
								filteredItems: this.filteredItems,
								localItems: this.localItems,
								localFilter: this.localFilter
							}
						},
						localFilterFn: function() {
							var e = this.filterFunction;
							return Ka(e) ? e : null
						},
						filteredItems: function() {
							var e = this.localItems,
								t = this.localFilter,
								n = this.localFiltering ? this.filterFnFactory(this.localFilterFn, t) || this.defaultFilterFnFactory(t) : null;
							return n && e.length > 0 ? e.filter(n) : e
						}
					},
					watch: {
						computedFilterDebounce: function(e) {
							!e && this.$_filterTimer && (this.clearFilterTimer(), this.localFilter = this.filterSanitize(this.filter))
						},
						filter: {
							deep: !0,
							handler: function(e) {
								var t = this,
									n = this.computedFilterDebounce;
								this.clearFilterTimer(), n && n > 0 ? this.$_filterTimer = setTimeout((function() {
									t.localFilter = t.filterSanitize(e)
								}), n) : this.localFilter = this.filterSanitize(e)
							}
						},
						filteredCheck: function(e) {
							var t = e.filteredItems,
								n = e.localFilter,
								r = !1;
							n ? Hs(n, []) || Hs(n, {}) ? r = !1 : n && (r = !0) : r = !1, r && this.$emit(Sr, t, t.length), this.isFiltered = r
						},
						isFiltered: function(e, t) {
							if (!1 === e && !0 === t) {
								var n = this.localItems;
								this.$emit(Sr, n, n.length)
							}
						}
					},
					created: function() {
						var e = this;
						this.$_filterTimer = null, this.$nextTick((function() {
							e.isFiltered = Boolean(e.localFilter)
						}))
					},
					beforeDestroy: function() {
						this.clearFilterTimer()
					},
					methods: {
						clearFilterTimer: function() {
							clearTimeout(this.$_filterTimer), this.$_filterTimer = null
						},
						filterSanitize: function(e) {
							return !this.localFiltering || this.localFilterFn || ye(e) || ke(e) ? qe(e) : ""
						},
						filterFnFactory: function(e, t) {
							if (!e || !ge(e) || !t || Hs(t, []) || Hs(t, {})) return null;
							return function(n) {
								return e(n, t)
							}
						},
						defaultFilterFnFactory: function(e) {
							var t = this;
							if (!e || !ye(e) && !ke(e)) return null;
							var n = e;
							if (ye(n)) {
								var r = Vi(e).replace(L, "\\s+");
								n = new RegExp(".*".concat(r, ".*"), "i")
							}
							return function(e) {
								return n.lastIndex = 0, n.test(function(e, t, n, r) {
									return Ee(e) ? _E(EE(e, t, n, r)) : ""
								}(e, t.computedFilterIgnored, t.computedFilterIncluded, t.computedFieldsObj))
							}
						}
					}
				}),
				kE = function(e, t) {
					var n = [];
					if (we(e) && e.filter(We).forEach((function(e) {
							if (ye(e)) n.push({
								key: e,
								label: Hi(e)
							});
							else if (Ee(e) && e.key && ye(e.key)) n.push(Fe(e));
							else if (Ee(e) && 1 === Ne(e).length) {
								var t = Ne(e)[0],
									r = function(e, t) {
										var n = null;
										return ye(t) ? n = {
											key: e,
											label: t
										} : ge(t) ? n = {
											key: e,
											formatter: t
										} : Ee(t) ? (n = Fe(t)).key = n.key || e : !1 !== t && (n = {
											key: e
										}), n
									}(t, e[t]);
								r && n.push(r)
							}
						})), 0 === n.length && we(t) && t.length > 0) {
						var r = t[0];
						Ne(r).forEach((function(e) {
							SE[e] || n.push({
								key: e,
								label: Hi(e)
							})
						}))
					}
					var i = {};
					return n.filter((function(e) {
						return !i[e.key] && (i[e.key] = !0, e.label = ye(e.label) ? e.label : Hi(e.key), !0)
					}))
				};

			function OE(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function xE(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? OE(Object(n), !0).forEach((function(t) {
						PE(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : OE(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function PE(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var ME = Ja("value", {
					type: zr,
					defaultValue: []
				}),
				IE = ME.mixin,
				LE = ME.props,
				DE = ME.prop,
				BE = ME.event,
				NE = He(xE(xE({}, LE), {}, PE({
					fields: Va(zr, null),
					items: Va(zr, []),
					primaryKey: Va(Jr)
				}, DE, Va(zr, [])))),
				RE = r.default.extend({
					mixins: [IE],
					props: NE,
					data: function() {
						var e = this.items;
						return {
							localItems: we(e) ? e.slice() : []
						}
					},
					computed: {
						computedFields: function() {
							return kE(this.fields, this.localItems)
						},
						computedFieldsObj: function() {
							var e = this.$parent;
							return this.computedFields.reduce((function(t, n) {
								if (t[n.key] = Fe(n), n.formatter) {
									var r = n.formatter;
									ye(r) && ge(e[r]) ? r = e[r] : ge(r) || (r = void 0), t[n.key].formatter = r
								}
								return t
							}), {})
						},
						computedItems: function() {
							return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems || []).slice()
						},
						context: function() {
							return {
								filter: this.localFilter,
								sortBy: this.localSortBy,
								sortDesc: this.localSortDesc,
								perPage: Do(Ni(this.perPage, 0), 0),
								currentPage: Do(Ni(this.currentPage, 0), 1),
								apiUrl: this.apiUrl
							}
						}
					},
					watch: {
						items: function(e) {
							this.localItems = we(e) ? e.slice() : []
						},
						computedItems: function(e, t) {
							Hs(e, t) || this.$emit(BE, e)
						},
						context: function(e, t) {
							Hs(e, t) || this.$emit(mr, e)
						}
					},
					mounted: function() {
						this.$emit(BE, this.computedItems)
					},
					methods: {
						getFieldFormatter: function(e) {
							var t = this.computedFieldsObj[e];
							return t ? t.formatter : void 0
						}
					}
				}),
				FE = {
					currentPage: Va(ui, 1),
					perPage: Va(ui, 0)
				},
				UE = r.default.extend({
					props: FE,
					computed: {
						localPaging: function() {
							return !this.hasProvider || !!this.noProviderPaging
						},
						paginatedItems: function() {
							var e = this.sortedItems || this.filteredItems || this.localItems || [],
								t = Do(Ni(this.currentPage, 1), 1),
								n = Do(Ni(this.perPage, 0), 0);
							return this.localPaging && n && (e = e.slice((t - 1) * n, t * n)), e
						}
					}
				}),
				jE = uo(ar, Mr),
				HE = co(ar, "refresh"),
				YE = {
					apiUrl: Va(Jr),
					items: Va(Zr, []),
					noProviderFiltering: Va(Qr, !1),
					noProviderPaging: Va(Qr, !1),
					noProviderSorting: Va(Qr, !1)
				},
				VE = r.default.extend({
					mixins: [qs],
					props: YE,
					computed: {
						hasProvider: function() {
							return ge(this.items)
						},
						providerTriggerContext: function() {
							var e = {
								apiUrl: this.apiUrl,
								filter: null,
								sortBy: null,
								sortDesc: null,
								perPage: null,
								currentPage: null
							};
							return this.noProviderFiltering || (e.filter = this.localFilter), this.noProviderSorting || (e.sortBy = this.localSortBy, e.sortDesc = this.localSortDesc), this.noProviderPaging || (e.perPage = this.perPage, e.currentPage = this.currentPage), Fe(e)
						}
					},
					watch: {
						items: function(e) {
							(this.hasProvider || ge(e)) && this.$nextTick(this._providerUpdate)
						},
						providerTriggerContext: function(e, t) {
							Hs(e, t) || this.$nextTick(this._providerUpdate)
						}
					},
					mounted: function() {
						var e = this;
						!this.hasProvider || this.localItems && 0 !== this.localItems.length || this._providerUpdate(), this.listenOnRoot(HE, (function(t) {
							t !== e.id && t !== e || e.refresh()
						}))
					},
					methods: {
						refresh: function() {
							var e = this.items,
								t = this.refresh;
							this.$off(Mr, t), this.computedBusy ? this.localBusy && this.hasProvider && this.$on(Mr, t) : (this.clearSelected(), this.hasProvider ? this.$nextTick(this._providerUpdate) : this.localItems = we(e) ? e.slice() : [])
						},
						_providerSetLocal: function(e) {
							this.localItems = we(e) ? e.slice() : [], this.localBusy = !1, this.$emit(Mr), this.id && this.emitOnRoot(jE, this.id)
						},
						_providerUpdate: function() {
							var e = this;
							this.hasProvider && (this.computedBusy ? this.$nextTick(this.refresh) : (this.localBusy = !0, this.$nextTick((function() {
								try {
									var t = e.items(e.context, e._providerSetLocal);
									! function(e) {
										return !be(e) && ge(e.then) && ge(e.catch)
									}(t) ? we(t) ? e._providerSetLocal(t) : 2 !== e.items.length && (Ze("Provider function didn't request callback and did not return a promise or data.", ar), e.localBusy = !1): t.then((function(t) {
										e._providerSetLocal(t)
									}))
								} catch (t) {
									Ze("Provider function error [".concat(t.name, "] ").concat(t.message, "."), ar), e.localBusy = !1, e.$off(Mr, e.refresh)
								}
							}))))
						}
					}
				});

			function zE(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var QE, GE, qE = ["range", "multi", "single"],
				WE = {
					noSelectOnClick: Va(Qr, !1),
					selectMode: Va(Jr, "multi", (function(e) {
						return Mi(qE, e)
					})),
					selectable: Va(Qr, !1),
					selectedVariant: Va(Jr, "active")
				},
				KE = r.default.extend({
					props: WE,
					data: function() {
						return {
							selectedRows: [],
							selectedLastRow: -1
						}
					},
					computed: {
						isSelectable: function() {
							return this.selectable && this.selectMode
						},
						hasSelectableRowClick: function() {
							return this.isSelectable && !this.noSelectOnClick
						},
						supportsSelectableRows: function() {
							return !0
						},
						selectableHasSelection: function() {
							var e = this.selectedRows;
							return this.isSelectable && e && e.length > 0 && e.some(We)
						},
						selectableIsMultiSelect: function() {
							return this.isSelectable && Mi(["range", "multi"], this.selectMode)
						},
						selectableTableClasses: function() {
							var e, t = this.isSelectable;
							return zE(e = {
								"b-table-selectable": t
							}, "b-table-select-".concat(this.selectMode), t), zE(e, "b-table-selecting", this.selectableHasSelection), zE(e, "b-table-selectable-no-click", t && !this.hasSelectableRowClick), e
						},
						selectableTableAttrs: function() {
							return {
								"aria-multiselectable": this.isSelectable ? this.selectableIsMultiSelect ? "true" : "false" : null
							}
						}
					},
					watch: {
						computedItems: function(e, t) {
							var n = !1;
							if (this.isSelectable && this.selectedRows.length > 0) {
								n = we(e) && we(t) && e.length === t.length;
								for (var r = 0; n && r < e.length; r++) n = Hs(EE(e[r]), EE(t[r]))
							}
							n || this.clearSelected()
						},
						selectable: function(e) {
							this.clearSelected(), this.setSelectionHandlers(e)
						},
						selectMode: function() {
							this.clearSelected()
						},
						hasSelectableRowClick: function(e) {
							this.clearSelected(), this.setSelectionHandlers(!e)
						},
						selectedRows: function(e, t) {
							var n = this;
							if (this.isSelectable && !Hs(e, t)) {
								var r = [];
								e.forEach((function(e, t) {
									e && r.push(n.computedItems[t])
								})), this.$emit("row-selected", r)
							}
						}
					},
					beforeMount: function() {
						this.isSelectable && this.setSelectionHandlers(!0)
					},
					methods: {
						selectRow: function(e) {
							if (this.isSelectable && Ae(e) && e >= 0 && e < this.computedItems.length && !this.isRowSelected(e)) {
								var t = this.selectableIsMultiSelect ? this.selectedRows.slice() : [];
								t[e] = !0, this.selectedLastClicked = -1, this.selectedRows = t
							}
						},
						unselectRow: function(e) {
							if (this.isSelectable && Ae(e) && this.isRowSelected(e)) {
								var t = this.selectedRows.slice();
								t[e] = !1, this.selectedLastClicked = -1, this.selectedRows = t
							}
						},
						selectAllRows: function() {
							var e = this.computedItems.length;
							this.isSelectable && e > 0 && (this.selectedLastClicked = -1, this.selectedRows = this.selectableIsMultiSelect ? Li(e, !0) : [!0])
						},
						isRowSelected: function(e) {
							return !(!Ae(e) || !this.selectedRows[e])
						},
						clearSelected: function() {
							this.selectedLastClicked = -1, this.selectedRows = []
						},
						selectableRowClasses: function(e) {
							if (this.isSelectable && this.isRowSelected(e)) {
								var t = this.selectedVariant;
								return zE({
									"b-table-row-selected": !0
								}, "".concat(this.dark ? "bg" : "table", "-").concat(t), t)
							}
							return {}
						},
						selectableRowAttrs: function(e) {
							return {
								"aria-selected": this.isSelectable ? this.isRowSelected(e) ? "true" : "false" : null
							}
						},
						setSelectionHandlers: function(e) {
							var t = e && !this.noSelectOnClick ? "$on" : "$off";
							this[t](Ir, this.selectionHandler), this[t](Sr, this.clearSelected), this[t](mr, this.clearSelected)
						},
						selectionHandler: function(e, t, n) {
							if (this.isSelectable && !this.noSelectOnClick) {
								var r = this.selectMode,
									i = this.selectedLastRow,
									a = this.selectedRows.slice(),
									o = !a[t];
								if ("single" === r) a = [];
								else if ("range" === r)
									if (i > -1 && n.shiftKey) {
										for (var s = Lo(i, t); s <= Do(i, t); s++) a[s] = !0;
										o = !0
									} else n.ctrlKey || n.metaKey || (a = [], o = !0), this.selectedLastRow = o ? t : -1;
								a[t] = o, this.selectedRows = a
							} else this.clearSelected()
						}
					}
				}),
				XE = function(e, t) {
					return e.map((function(e, t) {
						return [t, e]
					})).sort(function(e, t) {
						return this(e[1], t[1]) || e[0] - t[0]
					}.bind(t)).map((function(e) {
						return e[1]
					}))
				},
				JE = function(e) {
					return be(e) ? "" : Se(e) ? Ri(e, e) : e
				};

			function ZE(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function eT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ZE(Object(n), !0).forEach((function(t) {
						tT(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZE(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function tT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var nT = "sortBy",
				rT = "sortDesc",
				iT = "asc",
				aT = "desc",
				oT = [iT, aT, "last"],
				sT = (tT(QE = {
					labelSortAsc: Va(Jr, "Click to sort Ascending"),
					labelSortClear: Va(Jr, "Click to clear sorting"),
					labelSortDesc: Va(Jr, "Click to sort Descending"),
					noFooterSorting: Va(Qr, !1),
					noLocalSorting: Va(Qr, !1),
					noSortReset: Va(Qr, !1)
				}, nT, Va(Jr)), tT(QE, "sortCompare", Va(qr)), tT(QE, "sortCompareLocale", Va(ni)), tT(QE, "sortCompareOptions", Va(Kr, {
					numeric: !0
				})), tT(QE, rT, Va(Qr, !1)), tT(QE, "sortDirection", Va(Jr, iT, (function(e) {
					return Mi(oT, e)
				}))), tT(QE, "sortIconLeft", Va(Qr, !1)), tT(QE, "sortNullLast", Va(Qr, !1)), QE),
				uT = r.default.extend({
					props: sT,
					data: function() {
						return {
							localSortBy: this[nT] || "",
							localSortDesc: this[rT] || !1
						}
					},
					computed: {
						localSorting: function() {
							return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting
						},
						isSortable: function() {
							return this.computedFields.some((function(e) {
								return e.sortable
							}))
						},
						sortedItems: function() {
							var e = this.localSortBy,
								t = this.localSortDesc,
								n = this.sortCompareLocale,
								r = this.sortNullLast,
								i = this.sortCompare,
								a = this.localSorting,
								o = (this.filteredItems || this.localItems || []).slice(),
								s = eT(eT({}, this.sortCompareOptions), {}, {
									usage: "sort"
								});
							if (e && a) {
								var u = (this.computedFieldsObj[e] || {}).sortByFormatted,
									c = ge(u) ? u : u ? this.getFieldFormatter(e) : void 0;
								return XE(o, (function(a, o) {
									var u = null;
									return ge(i) && (u = i(a, o, e, t, c, s, n)), (be(u) || !1 === u) && (u = function(e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
											r = n.sortBy,
											i = void 0 === r ? null : r,
											a = n.formatter,
											o = void 0 === a ? null : a,
											s = n.locale,
											u = void 0 === s ? void 0 : s,
											c = n.localeOptions,
											l = void 0 === c ? {} : c,
											f = n.nullLast,
											d = void 0 !== f && f,
											h = Xe(e, i, null),
											p = Xe(t, i, null);
										return ge(o) && (h = o(h, i, e), p = o(p, i, t)), h = JE(h), p = JE(p), Ce(h) && Ce(p) || Ae(h) && Ae(p) ? h < p ? -1 : h > p ? 1 : 0 : d && "" === h && "" !== p ? 1 : d && "" !== h && "" === p ? -1 : _E(h).localeCompare(_E(p), u, l)
									}(a, o, {
										sortBy: e,
										formatter: c,
										locale: n,
										localeOptions: s,
										nullLast: r
									})), (u || 0) * (t ? -1 : 1)
								}))
							}
							return o
						}
					},
					watch: (GE = {
						isSortable: function(e) {
							e ? this.isSortable && this.$on(Tr, this.handleSort) : this.$off(Tr, this.handleSort)
						}
					}, tT(GE, rT, (function(e) {
						e !== this.localSortDesc && (this.localSortDesc = e || !1)
					})), tT(GE, nT, (function(e) {
						e !== this.localSortBy && (this.localSortBy = e || "")
					})), tT(GE, "localSortDesc", (function(e, t) {
						e !== t && this.$emit("update:sortDesc", e)
					})), tT(GE, "localSortBy", (function(e, t) {
						e !== t && this.$emit("update:sortBy", e)
					})), GE),
					created: function() {
						this.isSortable && this.$on(Tr, this.handleSort)
					},
					methods: {
						handleSort: function(e, t, n, r) {
							var i = this;
							if (this.isSortable && (!r || !this.noFooterSorting)) {
								var a = !1,
									o = function() {
										var e = t.sortDirection || i.sortDirection;
										e === iT ? i.localSortDesc = !1 : e === aT && (i.localSortDesc = !0)
									};
								if (t.sortable) {
									var s = !this.localSorting && t.sortKey ? t.sortKey : e;
									this.localSortBy === s ? this.localSortDesc = !this.localSortDesc : (this.localSortBy = s, o()), a = !0
								} else this.localSortBy && !this.noSortReset && (this.localSortBy = "", o(), a = !0);
								a && this.$emit("sort-changed", this.context)
							}
						},
						sortTheadThClasses: function(e, t, n) {
							return {
								"b-table-sort-icon-left": t.sortable && this.sortIconLeft && !(n && this.noFooterSorting)
							}
						},
						sortTheadThAttrs: function(e, t, n) {
							if (!this.isSortable || n && this.noFooterSorting) return {};
							var r = t.sortable;
							return {
								"aria-sort": r && this.localSortBy === e ? this.localSortDesc ? "descending" : "ascending" : r ? "none" : null
							}
						},
						sortTheadThLabel: function(e, t, n) {
							if (!this.isSortable || n && this.noFooterSorting) return null;
							var r = "";
							if (t.sortable)
								if (this.localSortBy === e) r = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
								else {
									r = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc;
									var i = this.sortDirection || t.sortDirection;
									i === iT ? r = this.labelSortAsc : i === aT && (r = this.labelSortDesc)
								}
							else this.noSortReset || (r = this.localSortBy ? this.labelSortClear : "");
							return Qi(r) || null
						}
					}
				});

			function cT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function lT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? cT(Object(n), !0).forEach((function(t) {
						fT(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function fT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var dT = qa({
					tbodyTransitionHandlers: Va(Kr),
					tbodyTransitionProps: Va(Kr)
				}, "BTbody"),
				hT = r.default.extend({
					name: "BTbody",
					mixins: [Gs, Ws, to],
					provide: function() {
						return {
							bvTableRowGroup: this
						}
					},
					inject: {
						bvTable: {
							default: function() {
								return {}
							}
						}
					},
					inheritAttrs: !1,
					props: dT,
					computed: {
						isTbody: function() {
							return !0
						},
						isDark: function() {
							return this.bvTable.dark
						},
						isStacked: function() {
							return this.bvTable.isStacked
						},
						isResponsive: function() {
							return this.bvTable.isResponsive
						},
						isStickyHeader: function() {
							return !1
						},
						hasStickyHeader: function() {
							return !this.isStacked && this.bvTable.stickyHeader
						},
						tableVariant: function() {
							return this.bvTable.tableVariant
						},
						isTransitionGroup: function() {
							return this.tbodyTransitionProps || this.tbodyTransitionHandlers
						},
						tbodyAttrs: function() {
							return lT({
								role: "rowgroup"
							}, this.bvAttrs)
						},
						tbodyProps: function() {
							var e = this.tbodyTransitionProps;
							return e ? lT(lT({}, e), {}, {
								tag: "tbody"
							}) : {}
						}
					},
					render: function(e) {
						var t = {
							props: this.tbodyProps,
							attrs: this.tbodyAttrs
						};
						return this.isTransitionGroup ? (t.on = this.tbodyTransitionHandlers || {}, t.nativeOn = this.bvListeners) : t.on = this.bvListeners, e(this.isTransitionGroup ? "transition-group" : "tbody", t, this.normalizeSlot())
					}
				}),
				pT = ["TD", "TH", "TR"],
				_T = function(e) {
					if (!e || !e.target) return !1;
					var t = e.target;
					if (t.disabled || -1 !== pT.indexOf(t.tagName)) return !1;
					if (la(".dropdown-menu", t)) return !0;
					var n = "LABEL" === t.tagName ? t : la("label", t);
					if (n) {
						var r = ga(n, "for"),
							i = r ? da(r) : ua("input, select, textarea", n);
						if (i && !i.disabled) return !0
					}
					return ca(t, wE)
				},
				mT = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
						t = Ta();
					return !!(t && "" !== t.toString().trim() && t.containsNode && ea(e)) && t.containsNode(e, !0)
				},
				bT = qa(iE, "BTh"),
				gT = r.default.extend({
					name: "BTh",
					extends: aE,
					props: bT,
					computed: {
						tag: function() {
							return "th"
						}
					}
				});

			function vT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? vT(Object(n), !0).forEach((function(t) {
						AT(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function AT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function ST(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var wT = {
					detailsTdClass: Va(ti),
					tbodyTrAttr: Va(li),
					tbodyTrClass: Va([].concat(function(e) {
						return function(e) {
							if (Array.isArray(e)) return ST(e)
						}(e) || function(e) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
						}(e) || function(e, t) {
							if (e) {
								if ("string" == typeof e) return ST(e, t);
								var n = Object.prototype.toString.call(e).slice(8, -1);
								return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ST(e, t) : void 0
							}
						}(e) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}(ti), [qr]))
				},
				ET = r.default.extend({
					props: wT,
					methods: {
						getTdValues: function(e, t, n, r) {
							var i = this.$parent;
							if (n) {
								var a = Xe(e, t, "");
								return ge(n) ? n(a, t, e) : ye(n) && ge(i[n]) ? i[n](a, t, e) : n
							}
							return r
						},
						getThValues: function(e, t, n, r, i) {
							var a = this.$parent;
							if (n) {
								var o = Xe(e, t, "");
								return ge(n) ? n(o, t, e, r) : ye(n) && ge(a[n]) ? a[n](o, t, e, r) : n
							}
							return i
						},
						getFormattedValue: function(e, t) {
							var n = t.key,
								r = this.getFieldFormatter(n),
								i = Xe(e, n, null);
							return ge(r) && (i = r(i, n, e)), be(i) ? "" : i
						},
						toggleDetailsFactory: function(e, t) {
							var n = this;
							return function() {
								e && n.$set(t, AE, !t[AE])
							}
						},
						rowHovered: function(e) {
							this.tbodyRowEvtStopped(e) || this.emitTbodyRowEvent("row-hovered", e)
						},
						rowUnhovered: function(e) {
							this.tbodyRowEvtStopped(e) || this.emitTbodyRowEvent("row-unhovered", e)
						},
						renderTbodyRowCell: function(e, t, n, r) {
							var i = this,
								a = this.isStacked,
								o = e.key,
								s = e.label,
								u = e.isRowHeader,
								c = this.$createElement,
								l = this.hasNormalizedSlot(Ei),
								f = this.getFormattedValue(n, e),
								d = !a && (this.isResponsive || this.stickyHeader) && e.stickyColumn,
								h = d ? u ? gT : aE : u ? "th" : "td",
								p = n[vE] && n[vE][o] ? n[vE][o] : e.variant || null,
								_ = {
									class: [e.class ? e.class : "", this.getTdValues(n, o, e.tdClass, "")],
									props: {},
									attrs: yT({
										"aria-colindex": String(t + 1)
									}, u ? this.getThValues(n, o, e.thAttr, "row", {}) : this.getTdValues(n, o, e.tdAttr, {})),
									key: "row-".concat(r, "-cell-").concat(t, "-").concat(o)
								};
							d ? _.props = {
								stackedHeading: a ? s : null,
								stickyColumn: !0,
								variant: p
							} : (_.attrs["data-label"] = a && !be(s) ? zi(s) : null, _.attrs.role = u ? "rowheader" : "cell", _.attrs.scope = u ? "row" : null, p && _.class.push("".concat(this.dark ? "bg" : "table", "-").concat(p)));
							var m = {
								item: n,
								index: r,
								field: e,
								unformatted: Xe(n, o, ""),
								value: f,
								toggleDetails: this.toggleDetailsFactory(l, n),
								detailsShowing: Boolean(n[AE])
							};
							this.supportsSelectableRows && (m.rowSelected = this.isRowSelected(r), m.selectRow = function() {
								return i.selectRow(r)
							}, m.unselectRow = function() {
								return i.unselectRow(r)
							});
							var b = this.$_bodyFieldSlotNameCache[o],
								g = b ? this.normalizeSlot(b, m) : zi(f);
							return this.isStacked && (g = [c("div", [g])]), c(h, _, [g])
						},
						renderTbodyRow: function(e, t) {
							var n = this,
								r = this.computedFields,
								i = this.striped,
								a = this.primaryKey,
								o = this.currentPage,
								s = this.perPage,
								u = this.tbodyTrClass,
								c = this.tbodyTrAttr,
								l = this.$createElement,
								f = this.hasNormalizedSlot(Ei),
								d = e[AE] && f,
								h = this.$listeners[Ir] || this.hasSelectableRowClick,
								p = [],
								_ = d ? this.safeId("_details_".concat(t, "_")) : null,
								m = r.map((function(r, i) {
									return n.renderTbodyRowCell(r, i, e, t)
								})),
								b = null;
							o && s && s > 0 && (b = String((o - 1) * s + t + 1));
							var g = zi(Xe(e, a)) || null,
								v = g || zi(t),
								y = g ? this.safeId("_row_".concat(g)) : null,
								A = this.selectableRowClasses ? this.selectableRowClasses(t) : {},
								S = this.selectableRowAttrs ? this.selectableRowAttrs(t) : {},
								w = ge(u) ? u(e, "row") : u,
								E = ge(c) ? c(e, "row") : c;
							if (p.push(l(Kw, {
									class: [w, A, d ? "b-table-has-details" : ""],
									props: {
										variant: e[yE] || null
									},
									attrs: yT(yT({
										id: y
									}, E), {}, {
										tabindex: h ? "0" : null,
										"data-pk": g || null,
										"aria-details": _,
										"aria-owns": _,
										"aria-rowindex": b
									}, S),
									on: {
										mouseenter: this.rowHovered,
										mouseleave: this.rowUnhovered
									},
									key: "__b-table-row-".concat(v, "__"),
									ref: "item-rows",
									refInFor: !0
								}, m)), d) {
								var T = {
									item: e,
									index: t,
									fields: r,
									toggleDetails: this.toggleDetailsFactory(f, e)
								};
								this.supportsSelectableRows && (T.rowSelected = this.isRowSelected(t), T.selectRow = function() {
									return n.selectRow(t)
								}, T.unselectRow = function() {
									return n.unselectRow(t)
								});
								var C = l(aE, {
									props: {
										colspan: r.length
									},
									class: this.detailsTdClass
								}, [this.normalizeSlot(Ei, T)]);
								i && p.push(l("tr", {
									staticClass: "d-none",
									attrs: {
										"aria-hidden": "true",
										role: "presentation"
									},
									key: "__b-table-details-stripe__".concat(v)
								}));
								var $ = ge(this.tbodyTrClass) ? this.tbodyTrClass(e, Ei) : this.tbodyTrClass,
									k = ge(this.tbodyTrAttr) ? this.tbodyTrAttr(e, Ei) : this.tbodyTrAttr;
								p.push(l(Kw, {
									staticClass: "b-table-details",
									class: [$],
									props: {
										variant: e[yE] || null
									},
									attrs: yT(yT({}, k), {}, {
										id: _,
										tabindex: "-1"
									}),
									key: "__b-table-details__".concat(v)
								}, [C]))
							} else f && (p.push(l()), i && p.push(l()));
							return p
						}
					}
				});

			function TT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function CT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? TT(Object(n), !0).forEach((function(t) {
						$T(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : TT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function $T(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var kT = function(e) {
					return "cell(".concat(e || "", ")")
				},
				OT = He(CT(CT(CT({}, dT), wT), {}, {
					tbodyClass: Va(ti)
				})),
				xT = r.default.extend({
					mixins: [ET],
					props: OT,
					beforeDestroy: function() {
						this.$_bodyFieldSlotNameCache = null
					},
					methods: {
						getTbodyTrs: function() {
							var e = this.$refs,
								t = e.tbody ? e.tbody.$el || e.tbody : null,
								n = (e["item-rows"] || []).map((function(e) {
									return e.$el || e
								}));
							return t && t.children && t.children.length > 0 && n && n.length > 0 ? Pi(t.children).filter((function(e) {
								return Mi(n, e)
							})) : []
						},
						getTbodyTrIndex: function(e) {
							if (!ea(e)) return -1;
							var t = "TR" === e.tagName ? e : la("tr", e, !0);
							return t ? this.getTbodyTrs().indexOf(t) : -1
						},
						emitTbodyRowEvent: function(e, t) {
							if (e && this.hasListener(e) && t && t.target) {
								var n = this.getTbodyTrIndex(t.target);
								if (n > -1) {
									var r = this.computedItems[n];
									this.$emit(e, r, n, t)
								}
							}
						},
						tbodyRowEvtStopped: function(e) {
							return this.stopIfBusy && this.stopIfBusy(e)
						},
						onTbodyRowKeydown: function(e) {
							var t = e.target,
								n = e.keyCode;
							if (!this.tbodyRowEvtStopped(e) && "TR" === t.tagName && ra(t) && 0 === t.tabIndex)
								if (Mi([Bs, Us], n)) oo(e), this.onTBodyRowClicked(e);
								else if (Mi([js, Ls, Ns, Ds], n)) {
								var r = this.getTbodyTrIndex(t);
								if (r > -1) {
									oo(e);
									var i = this.getTbodyTrs(),
										a = e.shiftKey;
									n === Ns || a && n === js ? Oa(i[0]) : n === Ds || a && n === Ls ? Oa(i[i.length - 1]) : n === js && r > 0 ? Oa(i[r - 1]) : n === Ls && r < i.length - 1 && Oa(i[r + 1])
								}
							}
						},
						onTBodyRowClicked: function(e) {
							this.tbodyRowEvtStopped(e) || _T(e) || mT(this.$el) || this.emitTbodyRowEvent(Ir, e)
						},
						onTbodyRowMiddleMouseRowClicked: function(e) {
							this.tbodyRowEvtStopped(e) || 2 !== e.which || this.emitTbodyRowEvent("row-middle-clicked", e)
						},
						onTbodyRowContextmenu: function(e) {
							this.tbodyRowEvtStopped(e) || this.emitTbodyRowEvent("row-contextmenu", e)
						},
						onTbodyRowDblClicked: function(e) {
							this.tbodyRowEvtStopped(e) || _T(e) || this.emitTbodyRowEvent("row-dblclicked", e)
						},
						renderTbody: function() {
							var e = this,
								t = this.computedItems,
								n = this.renderBusy,
								r = this.renderTopRow,
								i = this.renderEmpty,
								a = this.renderBottomRow,
								o = this.$createElement,
								s = this.hasListener(Ir) || this.hasSelectableRowClick,
								u = [],
								c = n ? n() : null;
							if (c) u.push(c);
							else {
								var l = {},
									f = kT();
								f = this.hasNormalizedSlot(f) ? f : null, this.computedFields.forEach((function(t) {
									var n = t.key,
										r = kT(n),
										i = kT(n.toLowerCase());
									l[n] = e.hasNormalizedSlot(r) ? r : e.hasNormalizedSlot(i) ? i : f
								})), this.$_bodyFieldSlotNameCache = l, u.push(r ? r() : o()), t.forEach((function(t, n) {
									u.push(e.renderTbodyRow(t, n))
								})), u.push(i ? i() : o()), u.push(a ? a() : o())
							}
							var d = {
								auxclick: this.onTbodyRowMiddleMouseRowClicked,
								contextmenu: this.onTbodyRowContextmenu,
								dblclick: this.onTbodyRowDblClicked
							};
							return s && (d.click = this.onTBodyRowClicked, d.keydown = this.onTbodyRowKeydown), o(hT, {
								class: this.tbodyClass || null,
								props: Qa(dT, this.$props),
								on: d,
								ref: "tbody"
							}, u)
						}
					}
				});

			function PT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function MT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? PT(Object(n), !0).forEach((function(t) {
						IT(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : PT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function IT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var LT = qa({
					footVariant: Va(Jr)
				}, "BTfoot"),
				DT = r.default.extend({
					name: "BTfoot",
					mixins: [Gs, Ws, to],
					provide: function() {
						return {
							bvTableRowGroup: this
						}
					},
					inject: {
						bvTable: {
							default: function() {
								return {}
							}
						}
					},
					inheritAttrs: !1,
					props: LT,
					computed: {
						isTfoot: function() {
							return !0
						},
						isDark: function() {
							return this.bvTable.dark
						},
						isStacked: function() {
							return this.bvTable.isStacked
						},
						isResponsive: function() {
							return this.bvTable.isResponsive
						},
						isStickyHeader: function() {
							return !1
						},
						hasStickyHeader: function() {
							return !this.isStacked && this.bvTable.stickyHeader
						},
						tableVariant: function() {
							return this.bvTable.tableVariant
						},
						tfootClasses: function() {
							return [this.footVariant ? "thead-".concat(this.footVariant) : null]
						},
						tfootAttrs: function() {
							return MT(MT({}, this.bvAttrs), {}, {
								role: "rowgroup"
							})
						}
					},
					render: function(e) {
						return e("tfoot", {
							class: this.tfootClasses,
							attrs: this.tfootAttrs,
							on: this.bvListeners
						}, this.normalizeSlot())
					}
				}),
				BT = {
					footClone: Va(Qr, !1),
					footRowVariant: Va(Jr),
					footVariant: Va(Jr),
					tfootClass: Va(ti),
					tfootTrClass: Va(ti)
				},
				NT = r.default.extend({
					props: BT,
					methods: {
						renderTFootCustom: function() {
							var e = this.$createElement;
							return this.hasNormalizedSlot(pi) ? e(DT, {
								class: this.tfootClass || null,
								props: {
									footVariant: this.footVariant || this.headVariant || null
								},
								key: "bv-tfoot-custom"
							}, this.normalizeSlot(pi, {
								items: this.computedItems.slice(),
								fields: this.computedFields.slice(),
								columns: this.computedFields.length
							})) : e()
						},
						renderTfoot: function() {
							return this.footClone ? this.renderThead(!0) : this.renderTFootCustom()
						}
					}
				});

			function RT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function FT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var UT = qa({
					headVariant: Va(Jr)
				}, "BThead"),
				jT = r.default.extend({
					name: "BThead",
					mixins: [Gs, Ws, to],
					provide: function() {
						return {
							bvTableRowGroup: this
						}
					},
					inject: {
						bvTable: {
							default: function() {
								return {}
							}
						}
					},
					inheritAttrs: !1,
					props: UT,
					computed: {
						isThead: function() {
							return !0
						},
						isDark: function() {
							return this.bvTable.dark
						},
						isStacked: function() {
							return this.bvTable.isStacked
						},
						isResponsive: function() {
							return this.bvTable.isResponsive
						},
						isStickyHeader: function() {
							return !this.isStacked && this.bvTable.stickyHeader
						},
						hasStickyHeader: function() {
							return !this.isStacked && this.bvTable.stickyHeader
						},
						tableVariant: function() {
							return this.bvTable.tableVariant
						},
						theadClasses: function() {
							return [this.headVariant ? "thead-".concat(this.headVariant) : null]
						},
						theadAttrs: function() {
							return function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2 ? RT(Object(n), !0).forEach((function(t) {
										FT(e, t, n[t])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RT(Object(n)).forEach((function(t) {
										Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
									}))
								}
								return e
							}({
								role: "rowgroup"
							}, this.bvAttrs)
						}
					},
					render: function(e) {
						return e("thead", {
							class: this.theadClasses,
							attrs: this.theadAttrs,
							on: this.bvListeners
						}, this.normalizeSlot())
					}
				});

			function HT(e) {
				return function(e) {
					if (Array.isArray(e)) return YT(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return YT(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? YT(e, t) : void 0
					}
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function YT(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function VT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function zT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? VT(Object(n), !0).forEach((function(t) {
						QT(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function QT(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var GT = function(e) {
					return "head(".concat(e || "", ")")
				},
				qT = function(e) {
					return "foot(".concat(e || "", ")")
				},
				WT = {
					headRowVariant: Va(Jr),
					headVariant: Va(Jr),
					theadClass: Va(ti),
					theadTrClass: Va(ti)
				},
				KT = r.default.extend({
					props: WT,
					methods: {
						fieldClasses: function(e) {
							return [e.class ? e.class : "", e.thClass ? e.thClass : ""]
						},
						headClicked: function(e, t, n) {
							this.stopIfBusy && this.stopIfBusy(e) || _T(e) || mT(this.$el) || (oo(e), this.$emit(Tr, t.key, t, e, n))
						},
						renderThead: function() {
							var e = this,
								t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								n = this.computedFields,
								r = this.isSortable,
								i = this.isSelectable,
								a = this.headVariant,
								o = this.footVariant,
								s = this.headRowVariant,
								u = this.footRowVariant,
								c = this.$createElement;
							if (this.isStackedAlways || 0 === n.length) return c();
							var l = r || this.hasListener(Tr),
								f = i ? this.selectAllRows : ef,
								d = i ? this.clearSelected : ef,
								h = function(n, i) {
									var a = n.label,
										o = n.labelHtml,
										s = n.variant,
										u = n.stickyColumn,
										h = n.key,
										p = null;
									n.label.trim() || n.headerTitle || (p = Hi(n.key));
									var _ = {};
									l && (_.click = function(r) {
										e.headClicked(r, n, t)
									}, _.keydown = function(r) {
										var i = r.keyCode;
										i !== Bs && i !== Us || e.headClicked(r, n, t)
									});
									var m = r ? e.sortTheadThAttrs(h, n, t) : {},
										b = r ? e.sortTheadThClasses(h, n, t) : null,
										g = r ? e.sortTheadThLabel(h, n, t) : null,
										v = {
											class: [e.fieldClasses(n), b],
											props: {
												variant: s,
												stickyColumn: u
											},
											style: n.thStyle || {},
											attrs: zT(zT({
												tabindex: l && n.sortable ? "0" : null,
												abbr: n.headerAbbr || null,
												title: n.headerTitle || null,
												"aria-colindex": i + 1,
												"aria-label": p
											}, e.getThValues(null, h, n.thAttr, t ? "foot" : "head", {})), m),
											on: _,
											key: h
										},
										y = [GT(h), GT(h.toLowerCase()), GT()];
									t && (y = [qT(h), qT(h.toLowerCase()), qT()].concat(HT(y)));
									var A = {
											label: a,
											column: h,
											field: n,
											isFoot: t,
											selectAllRows: f,
											clearSelected: d
										},
										S = e.normalizeSlot(y, A) || c("div", {
											domProps: Fu(o, a)
										}),
										w = g ? c("span", {
											staticClass: "sr-only"
										}, " (".concat(g, ")")) : null;
									return c(gT, v, [S, w].filter(We))
								},
								p = n.map(h).filter(We),
								_ = [];
							if (t) _.push(c(Kw, {
								class: this.tfootTrClass,
								props: {
									variant: be(u) ? s : u
								}
							}, p));
							else {
								var m = {
									columns: n.length,
									fields: n,
									selectAllRows: f,
									clearSelected: d
								};
								_.push(this.normalizeSlot(ki, m) || c()), _.push(c(Kw, {
									class: this.theadTrClass,
									props: {
										variant: s
									}
								}, p))
							}
							return c(t ? DT : jT, {
								class: (t ? this.tfootClass : this.theadClass) || null,
								props: t ? {
									footVariant: o || a || null
								} : {
									headVariant: a || null
								},
								key: t ? "bv-tfoot" : "bv-thead"
							}, _)
						}
					}
				}),
				XT = r.default.extend({
					methods: {
						renderTopRow: function() {
							var e = this.computedFields,
								t = this.stacked,
								n = this.tbodyTrClass,
								r = this.tbodyTrAttr,
								i = this.$createElement;
							return this.hasNormalizedSlot(xi) && !0 !== t && "" !== t ? i(Kw, {
								staticClass: "b-table-top-row",
								class: [ge(n) ? n(null, "row-top") : n],
								attrs: ge(r) ? r(null, "row-top") : r,
								key: "b-top-row"
							}, [this.normalizeSlot(xi, {
								columns: e.length,
								fields: e
							})]) : i()
						}
					}
				});

			function JT(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ZT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? JT(Object(n), !0).forEach((function(t) {
						eC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : JT(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function eC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var tC = qa(He(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT(ZT({}, Nc), Xw), sE), cE), fE), hE), CE), NE), FE), YE), WE), sT), Tw), xw), OT), BT), WT), {})), ar),
				nC = r.default.extend({
					name: ar,
					mixins: [Gs, Ew, Rc, to, RE, Pw, Cw, KT, NT, xT, Cw, $E, uT, UE, lE, dE, KE, pE, XT, Jw, uE, VE],
					props: tC
				});

			function rC(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function iC(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? rC(Object(n), !0).forEach((function(t) {
						aC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rC(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function aC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var oC, sC = qa(He(iC(iC(iC(iC(iC(iC(iC(iC(iC({}, Nc), cE), fE), NE), Tw), xw), OT), BT), WT)), sr),
				uC = lt({
					components: {
						BTableLite: r.default.extend({
							name: sr,
							mixins: [Gs, Ew, Rc, to, RE, Pw, Cw, KT, NT, xT, lE, dE],
							props: sC
						})
					}
				}),
				cC = lt({
					components: {
						BTableSimple: Bw,
						BTbody: hT,
						BThead: jT,
						BTfoot: DT,
						BTr: Kw,
						BTd: aE,
						BTh: gT
					}
				}),
				lC = lt({
					components: {
						BTable: nC
					},
					plugins: {
						TableLitePlugin: uC,
						TableSimplePlugin: cC
					}
				});

			function fC(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function dC(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? fC(Object(n), !0).forEach((function(t) {
						hC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fC(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function hC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var pC, _C, mC = Ja("value", {
					type: Wr
				}),
				bC = mC.mixin,
				gC = mC.props,
				vC = mC.prop,
				yC = mC.event,
				AC = function(e) {
					return !e.disabled
				},
				SC = r.default.extend({
					name: "BVTabButton",
					inject: {
						bvTabs: {
							default: function() {
								return {}
							}
						}
					},
					props: {
						controls: Va(Jr),
						id: Va(Jr),
						noKeyNav: Va(Qr, !1),
						posInSet: Va(Wr),
						setSize: Va(Wr),
						tab: Va(),
						tabIndex: Va(Wr)
					},
					methods: {
						focus: function() {
							Oa(this.$refs.link)
						},
						handleEvt: function(e) {
							if (!this.tab.disabled) {
								var t = e.type,
									n = e.keyCode,
									r = e.shiftKey;
								"click" === t || "keydown" === t && n === Us ? (oo(e), this.$emit(hr, e)) : "keydown" !== t || this.noKeyNav || (-1 !== [js, Rs, Ns].indexOf(n) ? (oo(e), r || n === Ns ? this.$emit("first", e) : this.$emit("prev", e)) : -1 !== [Ls, Fs, Ds].indexOf(n) && (oo(e), r || n === Ds ? this.$emit("last", e) : this.$emit("next", e)))
							}
						}
					},
					render: function(e) {
						var t = this.id,
							n = this.tabIndex,
							r = this.setSize,
							i = this.posInSet,
							a = this.controls,
							o = this.handleEvt,
							s = this.tab,
							u = s.title,
							c = s.localActive,
							l = s.disabled,
							f = s.titleItemClass,
							d = s.titleLinkClass,
							h = s.titleLinkAttributes,
							p = e(au, {
								staticClass: "nav-link",
								class: [{
									active: c && !l,
									disabled: l
								}, d, c ? this.bvTabs.activeNavItemClass : null],
								props: {
									disabled: l
								},
								attrs: dC(dC({}, h), {}, {
									id: t,
									role: "tab",
									tabindex: n,
									"aria-selected": c && !l ? "true" : "false",
									"aria-setsize": r,
									"aria-posinset": i,
									"aria-controls": a
								}),
								on: {
									click: o,
									keydown: o
								},
								ref: "link"
							}, [this.tab.normalizeSlot(Oi) || u]);
						return e("li", {
							staticClass: "nav-item",
							class: [f],
							attrs: {
								role: "presentation"
							}
						}, [p])
					}
				}),
				wC = je(by, ["tabs", "isNavBar", "cardHeader"]),
				EC = qa(He(dC(dC(dC(dC({}, Nc), gC), wC), {}, {
					activeNavItemClass: Va(ti),
					activeTabClass: Va(ti),
					card: Va(Qr, !1),
					contentClass: Va(ti),
					end: Va(Qr, !1),
					lazy: Va(Qr, !1),
					navClass: Va(ti),
					navWrapperClass: Va(ti),
					noFade: Va(Qr, !1),
					noKeyNav: Va(Qr, !1),
					noNavStyle: Va(Qr, !1),
					tag: Va(Jr, "div")
				})), "BTabs"),
				TC = r.default.extend({
					name: "BTabs",
					mixins: [Rc, bC, to],
					provide: function() {
						return {
							bvTabs: this
						}
					},
					props: EC,
					data: function() {
						return {
							currentTab: Ni(this[vC], -1),
							tabs: [],
							registeredTabs: []
						}
					},
					computed: {
						fade: function() {
							return !this.noFade
						},
						localNavClass: function() {
							var e = [];
							return this.card && this.vertical && e.push("card-header", "h-100", "border-bottom-0", "rounded-0"), [].concat(e, [this.navClass])
						}
					},
					watch: (oC = {}, hC(oC, vC, (function(e, t) {
						if (e !== t) {
							e = Ni(e, -1), t = Ni(t, 0);
							var n = this.tabs[e];
							n && !n.disabled ? this.activateTab(n) : e < t ? this.previousTab() : this.nextTab()
						}
					})), hC(oC, "currentTab", (function(e) {
						var t = -1;
						this.tabs.forEach((function(n, r) {
							r !== e || n.disabled ? n.localActive = !1 : (n.localActive = !0, t = r)
						})), this.$emit(yC, t)
					})), hC(oC, "tabs", (function(e, t) {
						var n = this;
						Hs(e.map((function(e) {
							return e[wt]
						})), t.map((function(e) {
							return e[wt]
						}))) || this.$nextTick((function() {
							n.$emit("changed", e.slice(), t.slice())
						}))
					})), hC(oC, "registeredTabs", (function() {
						this.updateTabs()
					})), oC),
					created: function() {
						this.$_observer = null
					},
					mounted: function() {
						this.setObserver(!0)
					},
					beforeDestroy: function() {
						this.setObserver(!1), this.tabs = []
					},
					methods: {
						registerTab: function(e) {
							Mi(this.registeredTabs, e) || this.registeredTabs.push(e)
						},
						unregisterTab: function(e) {
							this.registeredTabs = this.registeredTabs.slice().filter((function(t) {
								return t !== e
							}))
						},
						setObserver: function() {
							var e = this,
								t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							if (this.$_observer && this.$_observer.disconnect(), this.$_observer = null, t) {
								var n = function() {
									e.$nextTick((function() {
										Ji((function() {
											e.updateTabs()
										}))
									}))
								};
								this.$_observer = af(this.$refs.content, n, {
									childList: !0,
									subtree: !1,
									attributes: !0,
									attributeFilter: ["id"]
								})
							}
						},
						getTabs: function() {
							var e = this.registeredTabs.filter((function(e) {
									return 0 === e.$children.filter((function(e) {
										return e._isTab
									})).length
								})),
								t = [];
							if (c && e.length > 0) {
								var n = e.map((function(e) {
									return "#".concat(e.safeId())
								})).join(", ");
								t = sa(n, this.$el).map((function(e) {
									return e.id
								})).filter(We)
							}
							return XE(e, (function(e, n) {
								return t.indexOf(e.safeId()) - t.indexOf(n.safeId())
							}))
						},
						updateTabs: function() {
							var e = this.getTabs(),
								t = e.indexOf(e.slice().reverse().find((function(e) {
									return e.localActive && !e.disabled
								})));
							if (t < 0) {
								var n = this.currentTab;
								n >= e.length ? t = e.indexOf(e.slice().reverse().find(AC)) : e[n] && !e[n].disabled && (t = n)
							}
							t < 0 && (t = e.indexOf(e.find(AC))), e.forEach((function(e, n) {
								e.localActive = n === t
							})), this.tabs = e, this.currentTab = t
						},
						getButtonForTab: function(e) {
							return (this.$refs.buttons || []).find((function(t) {
								return t.tab === e
							}))
						},
						updateButton: function(e) {
							var t = this.getButtonForTab(e);
							t && t.$forceUpdate && t.$forceUpdate()
						},
						activateTab: function(e) {
							var t = this.currentTab,
								n = this.tabs,
								r = !1;
							if (e) {
								var i = n.indexOf(e);
								if (i !== t && i > -1 && !e.disabled) {
									var a = new Ad("activate-tab", {
										cancelable: !0,
										vueTarget: this,
										componentId: this.safeId()
									});
									this.$emit(a.type, i, t, a), a.defaultPrevented || (this.currentTab = i, r = !0)
								}
							}
							return r || this[vC] === t || this.$emit(yC, t), r
						},
						deactivateTab: function(e) {
							return !!e && this.activateTab(this.tabs.filter((function(t) {
								return t !== e
							})).find(AC))
						},
						focusButton: function(e) {
							var t = this;
							this.$nextTick((function() {
								Oa(t.getButtonForTab(e))
							}))
						},
						emitTabClick: function(e, t) {
							$e(t) && e && e.$emit && !e.disabled && e.$emit(hr, t)
						},
						clickTab: function(e, t) {
							this.activateTab(e), this.emitTabClick(e, t)
						},
						firstTab: function(e) {
							var t = this.tabs.find(AC);
							this.activateTab(t) && e && (this.focusButton(t), this.emitTabClick(t, e))
						},
						previousTab: function(e) {
							var t = Do(this.currentTab, 0),
								n = this.tabs.slice(0, t).reverse().find(AC);
							this.activateTab(n) && e && (this.focusButton(n), this.emitTabClick(n, e))
						},
						nextTab: function(e) {
							var t = Do(this.currentTab, -1),
								n = this.tabs.slice(t + 1).find(AC);
							this.activateTab(n) && e && (this.focusButton(n), this.emitTabClick(n, e))
						},
						lastTab: function(e) {
							var t = this.tabs.slice().reverse().find(AC);
							this.activateTab(t) && e && (this.focusButton(t), this.emitTabClick(t, e))
						}
					},
					render: function(e) {
						var t = this,
							n = this.align,
							r = this.card,
							i = this.end,
							a = this.fill,
							o = this.firstTab,
							s = this.justified,
							u = this.lastTab,
							c = this.nextTab,
							l = this.noKeyNav,
							f = this.noNavStyle,
							d = this.pills,
							h = this.previousTab,
							p = this.small,
							_ = this.tabs,
							m = this.vertical,
							b = _.find((function(e) {
								return e.localActive && !e.disabled
							})),
							g = _.find((function(e) {
								return !e.disabled
							})),
							v = _.map((function(n, r) {
								var i, a = n.safeId,
									s = null;
								return l || (s = -1, (n === b || !b && n === g) && (s = null)), e(SC, {
									props: {
										controls: a ? a() : null,
										id: n.controlledBy || (a ? a("_BV_tab_button_") : null),
										noKeyNav: l,
										posInSet: r + 1,
										setSize: _.length,
										tab: n,
										tabIndex: s
									},
									on: (i = {}, hC(i, hr, (function(e) {
										t.clickTab(n, e)
									})), hC(i, "first", o), hC(i, "prev", h), hC(i, "next", c), hC(i, "last", u), i),
									key: n[wt] || r,
									ref: "buttons",
									refInFor: !0
								})
							})),
							y = e(gy, {
								class: this.localNavClass,
								attrs: {
									role: "tablist",
									id: this.safeId("_BV_tab_controls_")
								},
								props: {
									fill: a,
									justified: s,
									align: n,
									tabs: !f && !d,
									pills: !f && d,
									vertical: m,
									small: p,
									cardHeader: r && !m
								},
								ref: "nav"
							}, [this.normalizeSlot("tabs-start") || e(), v, this.normalizeSlot("tabs-end") || e()]);
						y = e("div", {
							class: [{
								"card-header": r && !m && !i,
								"card-footer": r && !m && i,
								"col-auto": m
							}, this.navWrapperClass],
							key: "bv-tabs-nav"
						}, [y]);
						var A = this.normalizeSlot() || [],
							S = e();
						0 === A.length && (S = e("div", {
							class: ["tab-pane", "active", {
								"card-body": r
							}],
							key: "bv-empty-tab"
						}, this.normalizeSlot("empty")));
						var w = e("div", {
							staticClass: "tab-content",
							class: [{
								col: m
							}, this.contentClass],
							attrs: {
								id: this.safeId("_BV_tab_container_")
							},
							key: "bv-content",
							ref: "content"
						}, [A, S]);
						return e(this.tag, {
							staticClass: "tabs",
							class: {
								row: m, "no-gutters": m && r
							},
							attrs: {
								id: this.safeId()
							}
						}, [i ? w : e(), y, i ? e() : w])
					}
				});

			function CC(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function $C(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? CC(Object(n), !0).forEach((function(t) {
						kC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : CC(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function kC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var OC, xC = "active",
				PC = Ur + xC,
				MC = qa(He($C($C({}, Nc), {}, (kC(pC = {}, xC, Va(Qr, !1)), kC(pC, "buttonId", Va(Jr)), kC(pC, "disabled", Va(Qr, !1)), kC(pC, "lazy", Va(Qr, !1)), kC(pC, "noBody", Va(Qr, !1)), kC(pC, "tag", Va(Jr, "div")), kC(pC, "title", Va(Jr)), kC(pC, "titleItemClass", Va(ti)), kC(pC, "titleLinkAttributes", Va(Kr)), kC(pC, "titleLinkClass", Va(ti)), pC))), "BTab"),
				IC = lt({
					components: {
						BTabs: TC,
						BTab: r.default.extend({
							name: "BTab",
							mixins: [Rc, to],
							inject: {
								bvTabs: {
									default: function() {
										return {}
									}
								}
							},
							props: MC,
							data: function() {
								return {
									localActive: this[xC] && !this.disabled
								}
							},
							computed: {
								_isTab: function() {
									return !0
								},
								tabClasses: function() {
									var e = this.localActive;
									return [{
										active: e,
										disabled: this.disabled,
										"card-body": this.bvTabs.card && !this.noBody
									}, e ? this.bvTabs.activeTabClass : null]
								},
								controlledBy: function() {
									return this.buttonId || this.safeId("__BV_tab_button__")
								},
								computedNoFade: function() {
									return !this.bvTabs.fade
								},
								computedLazy: function() {
									return this.bvTabs.lazy || this.lazy
								}
							},
							watch: (_C = {}, kC(_C, xC, (function(e, t) {
								e !== t && (e ? this.activate() : this.deactivate() || this.$emit(PC, this.localActive))
							})), kC(_C, "disabled", (function(e, t) {
								if (e !== t) {
									var n = this.bvTabs.firstTab;
									e && this.localActive && n && (this.localActive = !1, n())
								}
							})), kC(_C, "localActive", (function(e) {
								this.$emit(PC, e)
							})), _C),
							mounted: function() {
								this.registerTab()
							},
							updated: function() {
								var e = this.bvTabs.updateButton;
								e && this.hasNormalizedSlot(Oi) && e(this)
							},
							beforeDestroy: function() {
								this.unregisterTab()
							},
							methods: {
								registerTab: function() {
									var e = this.bvTabs.registerTab;
									e && e(this)
								},
								unregisterTab: function() {
									var e = this.bvTabs.unregisterTab;
									e && e(this)
								},
								activate: function() {
									var e = this.bvTabs.activateTab;
									return !(!e || this.disabled) && e(this)
								},
								deactivate: function() {
									var e = this.bvTabs.deactivateTab;
									return !(!e || !this.localActive) && e(this)
								}
							},
							render: function(e) {
								var t = this.localActive,
									n = e(this.tag, {
										staticClass: "tab-pane",
										class: this.tabClasses,
										directives: [{
											name: "show",
											value: t
										}],
										attrs: {
											role: "tabpanel",
											id: this.safeId(),
											"aria-hidden": t ? "false" : "true",
											"aria-labelledby": this.controlledBy || null
										},
										ref: "panel"
									}, [t || !this.computedLazy ? this.normalizeSlot() : e()]);
								return e(Ao, {
									props: {
										mode: "out-in",
										noFade: this.computedNoFade
									}
								}, [n])
							}
						})
					}
				}),
				LC = lt({
					components: {
						BTime: eg
					}
				}),
				DC = n("2b88"),
				BC = r.default.extend({
					mixins: [to],
					data: function() {
						return {
							name: "b-toaster"
						}
					},
					methods: {
						onAfterEnter: function(e) {
							var t = this;
							Ji((function() {
								pa(e, "".concat(t.name, "-enter-to"))
							}))
						}
					},
					render: function(e) {
						return e("transition-group", {
							props: {
								tag: "div",
								name: this.name
							},
							on: {
								afterEnter: this.onAfterEnter
							}
						}, this.normalizeSlot())
					}
				}),
				NC = qa({
					ariaAtomic: Va(Jr),
					ariaLive: Va(Jr),
					name: Va(Jr, void 0, !0),
					role: Va(Jr)
				}, lr),
				RC = r.default.extend({
					name: lr,
					mixins: [qs],
					props: NC,
					data: function() {
						return {
							doRender: !1,
							dead: !1,
							staticName: this.name
						}
					},
					beforeMount: function() {
						var e = this,
							t = this.name;
						this.staticName = t, DC.Wormhole.hasTarget(t) ? (Ze('A "<portal-target>" with name "'.concat(t, '" already exists in the document.'), lr), this.dead = !0) : (this.doRender = !0, this.$once(Rr, (function() {
							e.emitOnRoot(uo(lr, br), t)
						})))
					},
					destroyed: function() {
						var e = this.$el;
						e && e.parentNode && e.parentNode.removeChild(e)
					},
					render: function(e) {
						var t = e("div", {
							class: ["d-none", {
								"b-dead-toaster": this.dead
							}]
						});
						if (this.doRender) {
							var n = e(DC.PortalTarget, {
								staticClass: "b-toaster-slot",
								props: {
									name: this.staticName,
									multiple: !0,
									tag: "div",
									slim: !1,
									transition: BC
								}
							});
							t = e("div", {
								staticClass: "b-toaster",
								class: [this.staticName],
								attrs: {
									id: this.staticName,
									role: this.role || null,
									"aria-live": this.ariaLive,
									"aria-atomic": this.ariaAtomic
								}
							}, [n])
						}
						return t
					}
				});

			function FC(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function UC(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? FC(Object(n), !0).forEach((function(t) {
						jC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : FC(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function jC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var HC = Ja("visible", {
					type: Qr,
					defaultValue: !1,
					event: dr
				}),
				YC = HC.mixin,
				VC = HC.props,
				zC = HC.prop,
				QC = HC.event,
				GC = Ue(iu, ["href", "to"]),
				qC = qa(He(UC(UC(UC(UC({}, Nc), VC), GC), {}, {
					appendToast: Va(Qr, !1),
					autoHideDelay: Va(ui, 5e3),
					bodyClass: Va(ti),
					headerClass: Va(ti),
					isStatus: Va(Qr, !1),
					noAutoHide: Va(Qr, !1),
					noCloseButton: Va(Qr, !1),
					noFade: Va(Qr, !1),
					noHoverPause: Va(Qr, !1),
					solid: Va(Qr, !1),
					static: Va(Qr, !1),
					title: Va(Jr),
					toastClass: Va(ti),
					toaster: Va(Jr, "b-toaster-top-right"),
					variant: Va(Jr)
				})), cr),
				WC = r.default.extend({
					name: cr,
					mixins: [Gs, Rc, YC, qs, to, _v],
					inheritAttrs: !1,
					props: qC,
					data: function() {
						return {
							isMounted: !1,
							doRender: !1,
							localShow: !1,
							isTransitioning: !1,
							isHiding: !1,
							order: 0,
							dismissStarted: 0,
							resumeDismiss: 0
						}
					},
					computed: {
						toastClasses: function() {
							var e = this.appendToast,
								t = this.variant;
							return jC({
								"b-toast-solid": this.solid,
								"b-toast-append": e,
								"b-toast-prepend": !e
							}, "b-toast-".concat(t), t)
						},
						slotScope: function() {
							return {
								hide: this.hide
							}
						},
						computedDuration: function() {
							return Do(Ni(this.autoHideDelay, 0), 1e3)
						},
						computedToaster: function() {
							return String(this.toaster)
						},
						transitionHandlers: function() {
							return {
								beforeEnter: this.onBeforeEnter,
								afterEnter: this.onAfterEnter,
								beforeLeave: this.onBeforeLeave,
								afterLeave: this.onAfterLeave
							}
						},
						computedAttrs: function() {
							return UC(UC({}, this.bvAttrs), {}, {
								id: this.safeId(),
								tabindex: "0"
							})
						}
					},
					watch: (OC = {}, jC(OC, zC, (function(e) {
						this[e ? "show" : "hide"]()
					})), jC(OC, "localShow", (function(e) {
						e !== this[zC] && this.$emit(QC, e)
					})), jC(OC, "toaster", (function() {
						this.$nextTick(this.ensureToaster)
					})), jC(OC, "static", (function(e) {
						e && this.localShow && this.ensureToaster()
					})), OC),
					created: function() {
						this.$_dismissTimer = null
					},
					mounted: function() {
						var e = this;
						this.isMounted = !0, this.$nextTick((function() {
							e[zC] && Ji((function() {
								e.show()
							}))
						})), this.listenOnRoot(co(cr, Dr), (function(t) {
							t === e.safeId() && e.show()
						})), this.listenOnRoot(co(cr, $r), (function(t) {
							t && t !== e.safeId() || e.hide()
						})), this.listenOnRoot(uo(lr, br), (function(t) {
							t === e.computedToaster && e.hide()
						}))
					},
					beforeDestroy: function() {
						this.clearDismissTimer()
					},
					methods: {
						show: function() {
							var e = this;
							if (!this.localShow) {
								this.ensureToaster();
								var t = this.buildEvent(Dr);
								this.emitEvent(t), this.dismissStarted = this.resumeDismiss = 0, this.order = Date.now() * (this.appendToast ? 1 : -1), this.isHiding = !1, this.doRender = !0, this.$nextTick((function() {
									Ji((function() {
										e.localShow = !0
									}))
								}))
							}
						},
						hide: function() {
							var e = this;
							if (this.localShow) {
								var t = this.buildEvent($r);
								this.emitEvent(t), this.setHoverHandler(!1), this.dismissStarted = this.resumeDismiss = 0, this.clearDismissTimer(), this.isHiding = !0, Ji((function() {
									e.localShow = !1
								}))
							}
						},
						buildEvent: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return new Ad(e, UC(UC({
								cancelable: !1,
								target: this.$el || null,
								relatedTarget: null
							}, t), {}, {
								vueTarget: this,
								componentId: this.safeId()
							}))
						},
						emitEvent: function(e) {
							var t = e.type;
							this.emitOnRoot(uo(cr, t), e), this.$emit(t, e)
						},
						ensureToaster: function() {
							if (!this.static) {
								var e = this.computedToaster;
								if (!DC.Wormhole.hasTarget(e)) {
									var t = document.createElement("div");
									document.body.appendChild(t), new RC({
										parent: this.$root,
										propsData: {
											name: e
										}
									}).$mount(t)
								}
							}
						},
						startDismissTimer: function() {
							this.clearDismissTimer(), this.noAutoHide || (this.$_dismissTimer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration), this.dismissStarted = Date.now(), this.resumeDismiss = 0)
						},
						clearDismissTimer: function() {
							clearTimeout(this.$_dismissTimer), this.$_dismissTimer = null
						},
						setHoverHandler: function(e) {
							var t = this.$refs["b-toast"];
							ao(e, t, "mouseenter", this.onPause, Yr), ao(e, t, "mouseleave", this.onUnPause, Yr)
						},
						onPause: function() {
							if (!this.noAutoHide && !this.noHoverPause && this.$_dismissTimer && !this.resumeDismiss) {
								var e = Date.now() - this.dismissStarted;
								e > 0 && (this.clearDismissTimer(), this.resumeDismiss = Do(this.computedDuration - e, 1e3))
							}
						},
						onUnPause: function() {
							this.noAutoHide || this.noHoverPause || !this.resumeDismiss ? this.resumeDismiss = this.dismissStarted = 0 : this.startDismissTimer()
						},
						onLinkClick: function() {
							var e = this;
							this.$nextTick((function() {
								Ji((function() {
									e.hide()
								}))
							}))
						},
						onBeforeEnter: function() {
							this.isTransitioning = !0
						},
						onAfterEnter: function() {
							this.isTransitioning = !1;
							var e = this.buildEvent(Br);
							this.emitEvent(e), this.startDismissTimer(), this.setHoverHandler(!0)
						},
						onBeforeLeave: function() {
							this.isTransitioning = !0
						},
						onAfterLeave: function() {
							this.isTransitioning = !1, this.order = 0, this.resumeDismiss = this.dismissStarted = 0;
							var e = this.buildEvent(Cr);
							this.emitEvent(e), this.doRender = !1
						},
						makeToast: function(e) {
							var t = this,
								n = this.title,
								r = this.slotScope,
								i = Jo(this),
								a = [],
								o = this.normalizeSlot("toast-title", r);
							o ? a.push(o) : n && a.push(e("strong", {
								staticClass: "mr-2"
							}, n)), this.noCloseButton || a.push(e(ho, {
								staticClass: "ml-auto mb-1",
								on: {
									click: function() {
										t.hide()
									}
								}
							}));
							var s = e();
							a.length > 0 && (s = e("header", {
								staticClass: "toast-header",
								class: this.headerClass
							}, a));
							var u = e(i ? au : "div", {
								staticClass: "toast-body",
								class: this.bodyClass,
								props: i ? Qa(GC, this) : {},
								on: i ? {
									click: this.onLinkClick
								} : {}
							}, this.normalizeSlot(_i, r));
							return e("div", {
								staticClass: "toast",
								class: this.toastClass,
								attrs: this.computedAttrs,
								key: "toast-".concat(this[wt]),
								ref: "toast"
							}, [s, u])
						}
					},
					render: function(e) {
						if (!this.doRender || !this.isMounted) return e();
						var t = this.order,
							n = this.static,
							r = this.isHiding,
							i = this.isStatus,
							a = "b-toast-".concat(this[wt]),
							o = e("div", {
								staticClass: "b-toast",
								class: this.toastClasses,
								attrs: UC(UC({}, n ? {} : this.scopedStyleAttrs), {}, {
									id: this.safeId("_toast_outer"),
									role: r ? null : i ? "status" : "alert",
									"aria-live": r ? null : i ? "polite" : "assertive",
									"aria-atomic": r ? null : "true"
								}),
								key: a,
								ref: "b-toast"
							}, [e(Ao, {
								props: {
									noFade: this.noFade
								},
								on: this.transitionHandlers
							}, [this.localShow ? this.makeToast(e) : e()])]);
						return e(DC.Portal, {
							props: {
								name: a,
								to: this.computedToaster,
								order: t,
								slim: !0,
								disabled: n
							}
						}, [o])
					}
				});

			function KC(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function XC(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function JC(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? XC(Object(n), !0).forEach((function(t) {
						ZC(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : XC(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function ZC(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function e$(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var t$ = "$bvToast",
				n$ = "_bv__toast",
				r$ = ["id"].concat(function(e) {
					return function(e) {
						if (Array.isArray(e)) return e$(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
					}(e) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return e$(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e$(e, t) : void 0
						}
					}(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}(Ne(je(qC, ["static", "visible"])))),
				i$ = {
					toastContent: "default",
					title: "toast-title"
				},
				a$ = function(e) {
					return r$.reduce((function(t, n) {
						return _e(e[n]) || (t[n] = e[n]), t
					}), {})
				},
				o$ = lt({
					plugins: {
						plugin: function(e) {
							var t = e.extend({
									name: "BVToastPop",
									extends: WC,
									destroyed: function() {
										var e = this.$el;
										e && e.parentNode && e.parentNode.removeChild(e)
									},
									mounted: function() {
										var e = this,
											t = function() {
												e.localShow = !1, e.doRender = !1, e.$nextTick((function() {
													e.$nextTick((function() {
														Ji((function() {
															e.$destroy()
														}))
													}))
												}))
											};
										this.$parent.$once(Fr, t), this.$once(Cr, t), this.listenOnRoot(uo(lr, br), (function(n) {
											n === e.toaster && t()
										}))
									}
								}),
								n = function(e, n) {
									if (!et(t$)) {
										var r = new t({
											parent: n,
											propsData: JC(JC(JC({}, a$(La(cr))), je(e, Ne(i$))), {}, {
												static: !1,
												visible: !0
											})
										});
										Ne(i$).forEach((function(t) {
											var i = e[t];
											_e(i) || ("title" === t && ye(i) && (i = [n.$createElement("strong", {
												class: "mr-2"
											}, i)]), r.$slots[i$[t]] = Ii(i))
										}));
										var i = document.createElement("div");
										document.body.appendChild(i), r.$mount(i)
									}
								},
								r = function() {
									function e(t) {
										(function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										})(this, e), Me(this, {
											_vm: t,
											_root: t.$root
										}), Le(this, {
											_vm: {
												enumerable: !0,
												configurable: !1,
												writable: !1
											},
											_root: {
												enumerable: !0,
												configurable: !1,
												writable: !1
											}
										})
									}
									return function(e, t, n) {
										t && KC(e.prototype, t), n && KC(e, n)
									}(e, [{
										key: "toast",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											e && !et(t$) && n(JC(JC({}, a$(t)), {}, {
												toastContent: e
											}), this._vm)
										}
									}, {
										key: "show",
										value: function(e) {
											e && this._root.$emit(co(cr, Dr), e)
										}
									}, {
										key: "hide",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
											this._root.$emit(co(cr, $r), e)
										}
									}]), e
								}();
							e.mixin({
								beforeCreate: function() {
									this[n$] = new r(this)
								}
							}), Re(e.prototype, t$) || De(e.prototype, t$, {
								get: function() {
									return this && this[n$] || Ze('"'.concat(t$, '" must be accessed from a Vue instance "this" context.'), cr), this[n$]
								}
							})
						}
					}
				}),
				s$ = lt({
					components: {
						BToast: WC,
						BToaster: RC
					},
					plugins: {
						BVToastPlugin: o$
					}
				});

			function u$(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function c$(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? u$(Object(n), !0).forEach((function(t) {
						l$(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u$(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function l$(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var f$ = "__BV_Tooltip__",
				d$ = {
					focus: !0,
					hover: !0,
					click: !0,
					blur: !0,
					manual: !0
				},
				h$ = /^html$/i,
				p$ = /^noninteractive$/i,
				_$ = /^nofade$/i,
				m$ = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
				b$ = /^(window|viewport|scrollParent)$/i,
				g$ = /^d\d+$/i,
				v$ = /^ds\d+$/i,
				y$ = /^dh\d+$/i,
				A$ = /^o-?\d+$/i,
				S$ = /^v-.+$/i,
				w$ = /\s+/,
				E$ = function(e, t, n) {
					if (c) {
						var r = function(e, t) {
							var n = {
								title: void 0,
								trigger: "",
								placement: "top",
								fallbackPlacement: "flip",
								container: !1,
								animation: !0,
								offset: 0,
								id: null,
								html: !1,
								interactive: !0,
								disabled: !1,
								delay: La(fr, "delay", 50),
								boundary: String(La(fr, "boundary", "scrollParent")),
								boundaryPadding: Ni(La(fr, "boundaryPadding", 5), 0),
								variant: La(fr, "variant"),
								customClass: La(fr, "customClass")
							};
							if (ye(e.value) || Ae(e.value) || ge(e.value) ? n.title = e.value : Te(e.value) && (n = c$(c$({}, n), e.value)), _e(n.title)) {
								var r = t.data || {};
								n.title = r.attrs && !be(r.attrs.title) ? r.attrs.title : void 0
							}
							Te(n.delay) || (n.delay = {
								show: Ni(n.delay, 0),
								hide: Ni(n.delay, 0)
							}), e.arg && (n.container = "#".concat(e.arg)), Ne(e.modifiers).forEach((function(e) {
								if (h$.test(e)) n.html = !0;
								else if (p$.test(e)) n.interactive = !1;
								else if (_$.test(e)) n.animation = !1;
								else if (m$.test(e)) n.placement = e;
								else if (b$.test(e)) e = "scrollparent" === e ? "scrollParent" : e, n.boundary = e;
								else if (g$.test(e)) {
									var t = Ni(e.slice(1), 0);
									n.delay.show = t, n.delay.hide = t
								} else v$.test(e) ? n.delay.show = Ni(e.slice(2), 0) : y$.test(e) ? n.delay.hide = Ni(e.slice(2), 0) : A$.test(e) ? n.offset = Ni(e.slice(1), 0) : S$.test(e) && (n.variant = e.slice(2) || null)
							}));
							var i = {};
							return Ii(n.trigger || "").filter(We).join(" ").trim().toLowerCase().split(w$).forEach((function(e) {
								d$[e] && (i[e] = !0)
							})), Ne(e.modifiers).forEach((function(e) {
								e = e.toLowerCase(), d$[e] && (i[e] = !0)
							})), n.trigger = Ne(i).join(" "), "blur" === n.trigger && (n.trigger = "focus"), n.trigger || (n.trigger = "hover focus"), n
						}(t, n);
						if (!e[f$]) {
							var i = n.context;
							e[f$] = new aS({
								parent: i,
								_scopeId: pv(i, void 0)
							}), e[f$].__bv_prev_data__ = {}, e[f$].$on(Dr, (function() {
								ge(r.title) && e[f$].updateData({
									title: r.title(e)
								})
							}))
						}
						var a = {
								title: r.title,
								triggers: r.trigger,
								placement: r.placement,
								fallbackPlacement: r.fallbackPlacement,
								variant: r.variant,
								customClass: r.customClass,
								container: r.container,
								boundary: r.boundary,
								delay: r.delay,
								offset: r.offset,
								noFade: !r.animation,
								id: r.id,
								interactive: r.interactive,
								disabled: r.disabled,
								html: r.html
							},
							o = e[f$].__bv_prev_data__;
						if (e[f$].__bv_prev_data__ = a, !Hs(a, o)) {
							var s = {
								target: e
							};
							Ne(a).forEach((function(t) {
								a[t] !== o[t] && (s[t] = "title" === t && ge(a[t]) ? a[t](e) : a[t])
							})), e[f$].updateData(s)
						}
					}
				},
				T$ = lt({
					directives: {
						VBTooltip: {
							bind: function(e, t, n) {
								E$(e, t, n)
							},
							componentUpdated: function(e, t, n) {
								n.context.$nextTick((function() {
									E$(e, t, n)
								}))
							},
							unbind: function(e) {
								! function(e) {
									e[f$] && (e[f$].$destroy(), e[f$] = null), delete e[f$]
								}(e)
							}
						}
					}
				}),
				C$ = lt({
					components: {
						BTooltip: dS
					},
					plugins: {
						VBTooltipPlugin: T$
					}
				}),
				$$ = lt({
					plugins: {
						AlertPlugin: Io,
						AspectPlugin: Qo,
						AvatarPlugin: xu,
						BadgePlugin: Nu,
						BreadcrumbPlugin: Xu,
						ButtonPlugin: Ju,
						ButtonGroupPlugin: ic,
						ButtonToolbarPlugin: uc,
						CalendarPlugin: Wc,
						CardPlugin: Zl,
						CarouselPlugin: Tf,
						CollapsePlugin: bd,
						DropdownPlugin: vh,
						EmbedPlugin: wh,
						FormPlugin: Hh,
						FormCheckboxPlugin: Up,
						FormDatepickerPlugin: f_,
						FormFilePlugin: C_,
						FormGroupPlugin: Y_,
						FormInputPlugin: cm,
						FormRadioPlugin: dm,
						FormRatingPlugin: Cm,
						FormSelectPlugin: Km,
						FormSpinbuttonPlugin: ub,
						FormTagsPlugin: Pb,
						FormTextareaPlugin: Rb,
						FormTimepickerPlugin: hg,
						ImagePlugin: pg,
						InputGroupPlugin: Pg,
						JumbotronPlugin: Ng,
						LayoutPlugin: zg,
						LinkPlugin: Qg,
						ListGroupPlugin: nv,
						MediaPlugin: cv,
						ModalPlugin: py,
						NavPlugin: Ry,
						NavbarPlugin: rA,
						OverlayPlugin: hA,
						PaginationPlugin: IA,
						PaginationNavPlugin: FA,
						PopoverPlugin: NS,
						ProgressPlugin: QS,
						SidebarPlugin: dw,
						SkeletonPlugin: zw,
						SpinnerPlugin: Qw,
						TablePlugin: lC,
						TabsPlugin: IC,
						TimePlugin: LC,
						ToastPlugin: s$,
						TooltipPlugin: C$
					}
				}),
				k$ = lt({
					directives: {
						VBHover: zp
					}
				}),
				O$ = lt({
					directives: {
						VBModal: ty
					}
				});

			function x$(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function P$(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? x$(Object(n), !0).forEach((function(t) {
						M$(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x$(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function M$(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function I$(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			var L$ = "active",
				D$ = ".nav-link",
				B$ = ".nav-item",
				N$ = ".list-group-item",
				R$ = ".dropdown-item",
				F$ = uo("BVScrollspy", "activate"),
				U$ = "position",
				j$ = {
					element: "body",
					offset: 10,
					method: "auto",
					throttle: 75
				},
				H$ = {
					element: "(string|element|component)",
					offset: "number",
					method: "string",
					throttle: "number"
				},
				Y$ = ["webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd"],
				V$ = function(e) {
					return function(e) {
						return Object.prototype.toString.call(e)
					}(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
				},
				z$ = function() {
					function e(t, n, r) {
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						})(this, e), this.$el = t, this.$scroller = null, this.$selector = [D$, N$, R$].join(","), this.$offsets = [], this.$targets = [], this.$activeTarget = null, this.$scrollHeight = 0, this.$resizeTimeout = null, this.$scrollerObserver = null, this.$targetsObserver = null, this.$root = r || null, this.$config = null, this.updateConfig(n)
					}
					return function(e, t, n) {
						t && I$(e.prototype, t), n && I$(e, n)
					}(e, [{
						key: "updateConfig",
						value: function(e, t) {
							this.$scroller && (this.unlisten(), this.$scroller = null);
							var n = P$(P$({}, this.constructor.Default), e);
							if (t && (this.$root = t), function(e, t, n) {
									for (var r in n)
										if (Re(n, r)) {
											var i = n[r],
												a = t[r],
												o = a && ea(a) ? "element" : V$(a);
											o = a && a._isVue ? "component" : o, new RegExp(i).test(o) || Ze("".concat(e, ': Option "').concat(r, '" provided type "').concat(o, '" but expected type "').concat(i, '"'))
										}
								}(this.constructor.Name, n, this.constructor.DefaultType), this.$config = n, this.$root) {
								var r = this;
								this.$root.$nextTick((function() {
									r.listen()
								}))
							} else this.listen()
						}
					}, {
						key: "dispose",
						value: function() {
							this.unlisten(), clearTimeout(this.$resizeTimeout), this.$resizeTimeout = null, this.$el = null, this.$config = null, this.$scroller = null, this.$selector = null, this.$offsets = null, this.$targets = null, this.$activeTarget = null, this.$scrollHeight = null
						}
					}, {
						key: "listen",
						value: function() {
							var e = this,
								t = this.getScroller();
							t && "BODY" !== t.tagName && ro(t, "scroll", this, Yr), ro(window, "scroll", this, Yr), ro(window, "resize", this, Yr), ro(window, "orientationchange", this, Yr), Y$.forEach((function(t) {
								ro(window, t, e, Yr)
							})), this.setObservers(!0), this.handleEvent("refresh")
						}
					}, {
						key: "unlisten",
						value: function() {
							var e = this,
								t = this.getScroller();
							this.setObservers(!1), t && "BODY" !== t.tagName && io(t, "scroll", this, Yr), io(window, "scroll", this, Yr), io(window, "resize", this, Yr), io(window, "orientationchange", this, Yr), Y$.forEach((function(t) {
								io(window, t, e, Yr)
							}))
						}
					}, {
						key: "setObservers",
						value: function(e) {
							var t = this;
							this.$scrollerObserver && this.$scrollerObserver.disconnect(), this.$targetsObserver && this.$targetsObserver.disconnect(), this.$scrollerObserver = null, this.$targetsObserver = null, e && (this.$targetsObserver = af(this.$el, (function() {
								t.handleEvent("mutation")
							}), {
								subtree: !0,
								childList: !0,
								attributes: !0,
								attributeFilter: ["href"]
							}), this.$scrollerObserver = af(this.getScroller(), (function() {
								t.handleEvent("mutation")
							}), {
								subtree: !0,
								childList: !0,
								characterData: !0,
								attributes: !0,
								attributeFilter: ["id", "style", "class"]
							}))
						}
					}, {
						key: "handleEvent",
						value: function(e) {
							var t = ye(e) ? e : e.type,
								n = this;
							"scroll" === t ? (this.$scrollerObserver || this.listen(), this.process()) : /(resize|orientationchange|mutation|refresh)/.test(t) && (n.$resizeTimeout || (n.$resizeTimeout = setTimeout((function() {
								n.refresh(), n.process(), n.$resizeTimeout = null
							}), n.$config.throttle)))
						}
					}, {
						key: "refresh",
						value: function() {
							var e = this,
								t = this.getScroller();
							if (t) {
								var n = t !== t.window ? U$ : "offset",
									r = "auto" === this.$config.method ? n : this.$config.method,
									i = r === U$ ? $a : Ca,
									a = r === U$ ? this.getScrollTop() : 0;
								return this.$offsets = [], this.$targets = [], this.$scrollHeight = this.getScrollHeight(), sa(this.$selector, this.$el).map((function(e) {
									return ga(e, "href")
								})).filter((function(e) {
									return e && V.test(e || "")
								})).map((function(e) {
									var n = e.replace(V, "$1").trim();
									if (!n) return null;
									var r = ua(n, t);
									return r && ia(r) ? {
										offset: Ni(i(r).top, 0) + a,
										target: n
									} : null
								})).filter(We).sort((function(e, t) {
									return e.offset - t.offset
								})).reduce((function(t, n) {
									return t[n.target] || (e.$offsets.push(n.offset), e.$targets.push(n.target), t[n.target] = !0), t
								}), {}), this
							}
						}
					}, {
						key: "process",
						value: function() {
							var e = this.getScrollTop() + this.$config.offset,
								t = this.getScrollHeight(),
								n = this.$config.offset + t - this.getOffsetHeight();
							if (this.$scrollHeight !== t && this.refresh(), e >= n) {
								var r = this.$targets[this.$targets.length - 1];
								this.$activeTarget !== r && this.activate(r)
							} else {
								if (this.$activeTarget && e < this.$offsets[0] && this.$offsets[0] > 0) return this.$activeTarget = null, void this.clear();
								for (var i = this.$offsets.length; i--;) {
									this.$activeTarget !== this.$targets[i] && e >= this.$offsets[i] && (_e(this.$offsets[i + 1]) || e < this.$offsets[i + 1]) && this.activate(this.$targets[i])
								}
							}
						}
					}, {
						key: "getScroller",
						value: function() {
							if (this.$scroller) return this.$scroller;
							var e = this.$config.element;
							return e ? (ea(e.$el) ? e = e.$el : ye(e) && (e = ua(e)), e ? (this.$scroller = "BODY" === e.tagName ? window : e, this.$scroller) : null) : null

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
						}
					}, {
						key: "getScrollTop",
						value: function() {
							var e = this.getScroller();
							return e === window ? e.pageYOffset : e.scrollTop
						}
					}, {
						key: "getScrollHeight",
						value: function() {
							return this.getScroller().scrollHeight || Do(document.body.scrollHeight, document.documentElement.scrollHeight)
						}
					}, {
						key: "getOffsetHeight",
						value: function() {
							var e = this.getScroller();
							return e === window ? window.innerHeight : wa(e).height
						}
					}, {
						key: "activate",
						value: function(e) {
							var t = this;
							this.$activeTarget = e, this.clear();
							var n = sa(this.$selector.split(",").map((function(t) {
								return "".concat(t, '[href$="').concat(e, '"]')
							})).join(","), this.$el);
							n.forEach((function(e) {
								if (_a(e, "dropdown-item")) {
									var n = la(".dropdown, .dropup", e);
									n && t.setActiveState(ua(".dropdown-toggle", n), !0), t.setActiveState(e, !0)
								} else {
									t.setActiveState(e, !0), ca(e.parentElement, B$) && t.setActiveState(e.parentElement, !0);
									for (var r = e; r;) {
										var i = (r = la(".nav, .list-group", r)) ? r.previousElementSibling : null;
										i && ca(i, "".concat(D$, ", ").concat(N$)) && t.setActiveState(i, !0), i && ca(i, B$) && (t.setActiveState(ua(D$, i), !0), t.setActiveState(i, !0))
									}
								}
							})), n && n.length > 0 && this.$root && this.$root.$emit(F$, e, n)
						}
					}, {
						key: "clear",
						value: function() {
							var e = this;
							sa("".concat(this.$selector, ", ").concat(B$), this.$el).filter((function(e) {
								return _a(e, L$)
							})).forEach((function(t) {
								return e.setActiveState(t, !1)
							}))
						}
					}, {
						key: "setActiveState",
						value: function(e, t) {
							e && (t ? ha(e, L$) : pa(e, L$))
						}
					}], [{
						key: "Name",
						get: function() {
							return "v-b-scrollspy"
						}
					}, {
						key: "Default",
						get: function() {
							return j$
						}
					}, {
						key: "DefaultType",
						get: function() {
							return H$
						}
					}]), e
				}(),
				Q$ = "__BV_ScrollSpy__",
				G$ = /^\d+$/,
				q$ = /^(auto|position|offset)$/,
				W$ = function(e, t, n) {
					if (c) {
						var r = function(e) {
							var t = {};
							return e.arg && (t.element = "#".concat(e.arg)), Ne(e.modifiers).forEach((function(e) {
								G$.test(e) ? t.offset = Ni(e, 0) : q$.test(e) && (t.method = e)
							})), ye(e.value) ? t.element = e.value : Ae(e.value) ? t.offset = Uo(e.value) : Ee(e.value) && Ne(e.value).filter((function(e) {
								return !!z$.DefaultType[e]
							})).forEach((function(n) {
								t[n] = e.value[n]
							})), t
						}(t);
						e[Q$] ? e[Q$].updateConfig(r, n.context.$root) : e[Q$] = new z$(e, r, n.context.$root)
					}
				},
				K$ = lt({
					directives: {
						VBScrollspy: {
							bind: function(e, t, n) {
								W$(e, t, n)
							},
							inserted: function(e, t, n) {
								W$(e, t, n)
							},
							update: function(e, t, n) {
								t.value !== t.oldValue && W$(e, t, n)
							},
							componentUpdated: function(e, t, n) {
								t.value !== t.oldValue && W$(e, t, n)
							},
							unbind: function(e) {
								! function(e) {
									e[Q$] && (e[Q$].dispose(), e[Q$] = null, delete e[Q$])
								}(e)
							}
						}
					}
				}),
				X$ = lt({
					directives: {
						VBVisible: Bl
					}
				}),
				J$ = lt({
					plugins: {
						VBHoverPlugin: k$,
						VBModalPlugin: O$,
						VBPopoverPlugin: BS,
						VBScrollspyPlugin: K$,
						VBTogglePlugin: md,
						VBTooltipPlugin: T$,
						VBVisiblePlugin: X$
					}
				}),
				Z$ = {
					install: ct({
						plugins: {
							componentsPlugin: $$,
							directivesPlugin: J$
						}
					}),
					NAME: "BootstrapVue"
				};
			t.a = Z$
		},
		"5f96": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = r.aTypedArray,
				a = r.exportTypedArrayMethod,
				o = [].join;
			a("join", (function(e) {
				return o.apply(i(this), arguments)
			}))
		},
		"5fbd": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("sv", {
					months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
					monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
					weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
					weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
					weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [kl.] HH:mm",
						LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
						lll: "D MMM YYYY HH:mm",
						llll: "ddd D MMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Idag] LT",
						nextDay: "[Imorgon] LT",
						lastDay: "[IgÃ¥r] LT",
						nextWeek: "[PÃ¥] dddd LT",
						lastWeek: "[I] dddd[s] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "fÃ¶r %s sedan",
						s: "nÃ¥gra sekunder",
						ss: "%d sekunder",
						m: "en minut",
						mm: "%d minuter",
						h: "en timme",
						hh: "%d timmar",
						d: "en dag",
						dd: "%d dagar",
						M: "en mÃ¥nad",
						MM: "%d mÃ¥nader",
						y: "ett Ã¥r",
						yy: "%d Ã¥r"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"605d": function(e, t, n) {
			var r = n("c6b6"),
				i = n("da84");
			e.exports = "process" == r(i.process)
		},
		"60b3": function(e, t, n) {
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
			}), t.SettingsPanelItem = void 0;
			var i = n("fdec"),
				a = n("587c"),
				o = n("09e6"),
				s = n("b8bf"),
				u = n("a92a"),
				c = n("1521"),
				l = n("66d4"),
				f = n("f1b5"),
				d = n("3d5f"),
				h = function(e) {
					function t(t, n, r) {
						void 0 === r && (r = {});
						var i = e.call(this, r) || this;
						return i.settingsPanelItemEvents = {
							onActiveChanged: new o.EventDispatcher
						}, i.setting = n, i.config = i.mergeConfig(r, {
							cssClass: "ui-settings-panel-item",
							role: "menuitem"
						}, i.config), null !== t && (t instanceof a.Component ? i.label = t : i.label = new s.Label({
							text: t,
							for: i.setting.getConfig().id
						}), i.addComponent(i.label)), i.addComponent(i.setting), i
					}
					return r(t, e), t.prototype.configure = function(e, t) {
						var n = this;
						if (this.setting instanceof u.SelectBox || this.setting instanceof c.ListBox) {
							var r = function() {
								if (n.setting instanceof u.SelectBox || n.setting instanceof c.ListBox) {
									var e = 2;
									(n.setting instanceof l.VideoQualitySelectBox && n.setting.hasAutoItem() || n.setting instanceof f.AudioQualitySelectBox) && (e = 3), n.setting.itemCount() < e || n.setting instanceof d.PlaybackSpeedSelectBox && !t.getConfig().playbackSpeedSelectionEnabled ? n.hide() : n.show(), n.onActiveChangedEvent(), n.getDomElement().attr("aria-haspopup", "true")
								}
							};
							this.setting.onItemAdded.subscribe(r), this.setting.onItemRemoved.subscribe(r), r()
						}
					}, t.prototype.isActive = function() {
						return this.isShown()
					}, t.prototype.onActiveChangedEvent = function() {
						this.settingsPanelItemEvents.onActiveChanged.dispatch(this)
					}, Object.defineProperty(t.prototype, "onActiveChanged", {
						get: function() {
							return this.settingsPanelItemEvents.onActiveChanged.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(i.Container);
			t.SettingsPanelItem = h
		},
		"60bd": function(e, t, n) {
			"use strict";
			var r = n("da84"),
				i = n("ebb5"),
				a = n("e260"),
				o = n("b622")("iterator"),
				s = r.Uint8Array,
				u = a.values,
				c = a.keys,
				l = a.entries,
				f = i.aTypedArray,
				d = i.exportTypedArrayMethod,
				h = s && s.prototype[o],
				p = !!h && ("values" == h.name || null == h.name),
				_ = function() {
					return u.call(f(this))
				};
			d("entries", (function() {
				return l.call(f(this))
			})), d("keys", (function() {
				return c.call(f(this))
			})), d("values", _, !p), d(o, _, !p)
		},
		"60da": function(e, t, n) {
			"use strict";
			var r = n("83ab"),
				i = n("d039"),
				a = n("df75"),
				o = n("7418"),
				s = n("d1e7"),
				u = n("7b0b"),
				c = n("44ad"),
				l = Object.assign,
				f = Object.defineProperty;
			e.exports = !l || i((function() {
				if (r && 1 !== l({
						b: 1
					}, l(f({}, "a", {
						enumerable: !0,
						get: function() {
							f(this, "b", {
								value: 3,
								enumerable: !1
							})
						}
					}), {
						b: 2
					})).b) return !0;
				var e = {},
					t = {},
					n = Symbol(),
					i = "abcdefghijklmnopqrst";
				return e[n] = 7, i.split("").forEach((function(e) {
					t[e] = e
				})), 7 != l({}, e)[n] || a(l({}, t)).join("") != i
			})) ? function(e, t) {
				for (var n = u(e), i = arguments.length, l = 1, f = o.f, d = s.f; i > l;)
					for (var h, p = c(arguments[l++]), _ = f ? a(p).concat(f(p)) : a(p), m = _.length, b = 0; m > b;) h = _[b++], r && !d.call(p, h) || (n[h] = p[h]);
				return n
			} : l
		},
		6117: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ug-cn", {
					months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
					monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
					weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
					weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
					weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
						LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
						LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
					},
					meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === t || "Ø³Û•Ú¾Û•Ø±" === t || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === t ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === t || "ÙƒÛ•Ú†" === t ? e + 12 : e >= 11 ? e : e + 12
					},
					meridiem: function(e, t, n) {
						var r = 100 * e + t;
						return r < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : r < 900 ? "Ø³Û•Ú¾Û•Ø±" : r < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : r < 1230 ? "Ú†ÛˆØ´" : r < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†"
					},
					calendar: {
						sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
						nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
						nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
						lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
						lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ÙƒÛÙŠÙ‰Ù†",
						past: "%s Ø¨Û‡Ø±Û‡Ù†",
						s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
						ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
						m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
						mm: "%d Ù…Ù‰Ù†Û‡Øª",
						h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
						hh: "%d Ø³Ø§Ø¦Û•Øª",
						d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
						dd: "%d ÙƒÛˆÙ†",
						M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
						MM: "%d Ø¦Ø§ÙŠ",
						y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
						yy: "%d ÙŠÙ‰Ù„"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "-ÙƒÛˆÙ†Ù‰";
							case "w":
							case "W":
								return e + "-Ú¾Û•Ù¾ØªÛ•";
							default:
								return e
						}
					},
					preparse: function(e) {
						return e.replace(/ØŒ/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "ØŒ")
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"61c8": function(e, t, n) {
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
			}), t.FullscreenToggleButton = void 0;
			var i = n("30b0"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-fullscreentogglebutton",
							text: a.i18n.getLocalizer("fullscreen")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = function() {
								return t.isViewModeAvailable(t.exports.ViewMode.Fullscreen)
							},
							a = function() {
								t.getViewMode() === t.exports.ViewMode.Fullscreen ? r.on() : r.off()
							},
							o = function() {
								i() ? r.show() : r.hide()
							};
						t.on(t.exports.PlayerEvent.ViewModeChanged, a), t.exports.PlayerEvent.ViewModeAvailabilityChanged && t.on(t.exports.PlayerEvent.ViewModeAvailabilityChanged, o), n.getConfig().events.onUpdated.subscribe(o), this.onClick.subscribe((function() {
							if (i()) {
								var e = t.getViewMode() === t.exports.ViewMode.Fullscreen ? t.exports.ViewMode.Inline : t.exports.ViewMode.Fullscreen;
								t.setViewMode(e)
							} else console
						})), o(), a()
					}, t
				}(i.ToggleButton);
			t.FullscreenToggleButton = o
		},
		"621a": function(e, t, n) {
			"use strict";
			var r = n("da84"),
				i = n("83ab"),
				a = n("a981"),
				o = n("9112"),
				s = n("e2cc"),
				u = n("d039"),
				c = n("19aa"),
				l = n("a691"),
				f = n("50c4"),
				d = n("0b25"),
				h = n("77a7"),
				p = n("e163"),
				_ = n("d2bb"),
				m = n("241c").f,
				b = n("9bf2").f,
				g = n("81d5"),
				v = n("d44e"),
				y = n("69f3"),
				A = y.get,
				S = y.set,
				w = "ArrayBuffer",
				E = "DataView",
				T = "prototype",
				C = "Wrong index",
				$ = r[w],
				k = $,
				O = r[E],
				x = O && O[T],
				P = Object.prototype,
				M = r.RangeError,
				I = h.pack,
				L = h.unpack,
				D = function(e) {
					return [255 & e]
				},
				B = function(e) {
					return [255 & e, e >> 8 & 255]
				},
				N = function(e) {
					return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
				},
				R = function(e) {
					return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
				},
				F = function(e) {
					return I(e, 23, 4)
				},
				U = function(e) {
					return I(e, 52, 8)
				},
				j = function(e, t) {
					b(e[T], t, {
						get: function() {
							return A(this)[t]
						}
					})
				},
				H = function(e, t, n, r) {
					var i = d(n),
						a = A(e);
					if (i + t > a.byteLength) throw M(C);
					var o = A(a.buffer).bytes,
						s = i + a.byteOffset,
						u = o.slice(s, s + t);
					return r ? u : u.reverse()
				},
				Y = function(e, t, n, r, i, a) {
					var o = d(n),
						s = A(e);
					if (o + t > s.byteLength) throw M(C);
					for (var u = A(s.buffer).bytes, c = o + s.byteOffset, l = r(+i), f = 0; f < t; f++) u[c + f] = l[a ? f : t - f - 1]
				};
			if (a) {
				if (!u((function() {
						$(1)
					})) || !u((function() {
						new $(-1)
					})) || u((function() {
						return new $, new $(1.5), new $(NaN), $.name != w
					}))) {
					for (var V, z = (k = function(e) {
							return c(this, k), new $(d(e))
						})[T] = $[T], Q = m($), G = 0; Q.length > G;)(V = Q[G++]) in k || o(k, V, $[V]);
					z.constructor = k
				}
				_ && p(x) !== P && _(x, P);
				var q = new O(new k(2)),
					W = x.setInt8;
				q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || s(x, {
					setInt8: function(e, t) {
						W.call(this, e, t << 24 >> 24)
					},
					setUint8: function(e, t) {
						W.call(this, e, t << 24 >> 24)
					}
				}, {
					unsafe: !0
				})
			} else k = function(e) {
				c(this, k, w);
				var t = d(e);
				S(this, {
					bytes: g.call(new Array(t), 0),
					byteLength: t
				}), i || (this.byteLength = t)
			}, O = function(e, t, n) {
				c(this, O, E), c(e, k, E);
				var r = A(e).byteLength,
					a = l(t);
				if (a < 0 || a > r) throw M("Wrong offset");
				if (a + (n = void 0 === n ? r - a : f(n)) > r) throw M("Wrong length");
				S(this, {
					buffer: e,
					byteLength: n,
					byteOffset: a
				}), i || (this.buffer = e, this.byteLength = n, this.byteOffset = a)
			}, i && (j(k, "byteLength"), j(O, "buffer"), j(O, "byteLength"), j(O, "byteOffset")), s(O[T], {
				getInt8: function(e) {
					return H(this, 1, e)[0] << 24 >> 24
				},
				getUint8: function(e) {
					return H(this, 1, e)[0]
				},
				getInt16: function(e) {
					var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
					return (t[1] << 8 | t[0]) << 16 >> 16
				},
				getUint16: function(e) {
					var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
					return t[1] << 8 | t[0]
				},
				getInt32: function(e) {
					return R(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
				},
				getUint32: function(e) {
					return R(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
				},
				getFloat32: function(e) {
					return L(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
				},
				getFloat64: function(e) {
					return L(H(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
				},
				setInt8: function(e, t) {
					Y(this, 1, e, D, t)
				},
				setUint8: function(e, t) {
					Y(this, 1, e, D, t)
				},
				setInt16: function(e, t) {
					Y(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				setUint16: function(e, t) {
					Y(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				setInt32: function(e, t) {
					Y(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				setUint32: function(e, t) {
					Y(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				setFloat32: function(e, t) {
					Y(this, 4, e, F, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				setFloat64: function(e, t) {
					Y(this, 8, e, U, t, arguments.length > 2 ? arguments[2] : void 0)
				}
			});
			v(k, w), v(O, E), e.exports = {
				ArrayBuffer: k,
				DataView: O
			}
		},
		"62e4": function(e, t) {
			e.exports = function(e) {
				return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						return e.i
					}
				}), e.webpackPolyfill = 1), e
			}
		},
		"630a": function(e, t, n) {
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
			}), t.SubtitleSettingsPanelPage = void 0;
			var i = n("d82d"),
				a = n("0bda"),
				o = n("e277"),
				s = n("7594"),
				u = n("4820"),
				c = n("673d"),
				l = n("65e0"),
				f = n("94d9"),
				d = n("2502"),
				h = n("49cc"),
				p = n("9e64"),
				_ = n("1904"),
				m = n("9166"),
				b = n("60b3"),
				g = n("e1ee"),
				v = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						n.overlay = t.overlay, n.settingsPanel = t.settingsPanel;
						var r = new a.SubtitleSettingsManager;
						return n.config = n.mergeConfig(t, {
							components: [new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.font.size"), new o.FontSizeSelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.font.family"), new s.FontFamilySelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.font.color"), new u.FontColorSelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.font.opacity"), new c.FontOpacitySelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.characterEdge"), new l.CharacterEdgeSelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.background.color"), new f.BackgroundColorSelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.background.opacity"), new d.BackgroundOpacitySelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.window.color"), new h.WindowColorSelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(g.i18n.getLocalizer("settings.subtitles.window.opacity"), new p.WindowOpacitySelectBox({
								overlay: n.overlay,
								settingsManager: r
							})), new b.SettingsPanelItem(new m.SettingsPanelPageBackButton({
								container: n.settingsPanel,
								text: g.i18n.getLocalizer("back")
							}), new _.SubtitleSettingsResetButton({
								settingsManager: r
							}), {
								role: "menubar"
							})]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.onActive.subscribe((function() {
							r.overlay.enablePreviewSubtitleLabel()
						})), this.onInactive.subscribe((function() {
							r.overlay.removePreviewSubtitleLabel()
						}))
					}, t
				}(i.SettingsPanelPage);
			t.SubtitleSettingsPanelPage = v
		},
		"63e8": function(e, t, n) {
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
			}), t.AudioTrackSelectBox = void 0;
			var i = n("a92a"),
				a = n("9a21"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-audiotrackselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n), new a.AudioTrackSwitchHandler(t, this, n)
					}, t
				}(i.SelectBox);
			t.AudioTrackSelectBox = o
		},
		6403: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ms-my", {
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
		"649e": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").some,
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("some", (function(e) {
				return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
			}))
		},
		6547: function(e, t, n) {
			var r = n("a691"),
				i = n("1d80"),
				a = function(e) {
					return function(t, n) {
						var a, o, s = String(i(t)),
							u = r(n),
							c = s.length;
						return u < 0 || u >= c ? e ? "" : void 0 : (a = s.charCodeAt(u)) < 55296 || a > 56319 || u + 1 === c || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? e ? s.charAt(u) : a : e ? s.slice(u, u + 2) : o - 56320 + (a - 55296 << 10) + 65536
					}
				};
			e.exports = {
				codeAt: a(!1),
				charAt: a(!0)
			}
		},
		6566: function(e, t, n) {
			"use strict";
			var r = n("9bf2").f,
				i = n("7c73"),
				a = n("e2cc"),
				o = n("0366"),
				s = n("19aa"),
				u = n("2266"),
				c = n("7dd0"),
				l = n("2626"),
				f = n("83ab"),
				d = n("f183").fastKey,
				h = n("69f3"),
				p = h.set,
				_ = h.getterFor;
			e.exports = {
				getConstructor: function(e, t, n, c) {
					var l = e((function(e, r) {
							s(e, l, t), p(e, {
								type: t,
								index: i(null),
								first: void 0,
								last: void 0,
								size: 0
							}), f || (e.size = 0), null != r && u(r, e[c], {
								that: e,
								AS_ENTRIES: n
							})
						})),
						h = _(t),
						m = function(e, t, n) {
							var r, i, a = h(e),
								o = b(e, t);
							return o ? o.value = n : (a.last = o = {
								index: i = d(t, !0),
								key: t,
								value: n,
								previous: r = a.last,
								next: void 0,
								removed: !1
							}, a.first || (a.first = o), r && (r.next = o), f ? a.size++ : e.size++, "F" !== i && (a.index[i] = o)), e
						},
						b = function(e, t) {
							var n, r = h(e),
								i = d(t);
							if ("F" !== i) return r.index[i];
							for (n = r.first; n; n = n.next)
								if (n.key == t) return n
						};
					return a(l.prototype, {
						clear: function() {
							for (var e = h(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
							e.first = e.last = void 0, f ? e.size = 0 : this.size = 0
						},
						delete: function(e) {
							var t = this,
								n = h(t),
								r = b(t, e);
							if (r) {
								var i = r.next,
									a = r.previous;
								delete n.index[r.index], r.removed = !0, a && (a.next = i), i && (i.previous = a), n.first == r && (n.first = i), n.last == r && (n.last = a), f ? n.size-- : t.size--
							}
							return !!r
						},
						forEach: function(e) {
							for (var t, n = h(this), r = o(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
								for (r(t.value, t.key, this); t && t.removed;) t = t.previous
						},
						has: function(e) {
							return !!b(this, e)
						}
					}), a(l.prototype, n ? {
						get: function(e) {
							var t = b(this, e);
							return t && t.value
						},
						set: function(e, t) {
							return m(this, 0 === e ? 0 : e, t)
						}
					} : {
						add: function(e) {
							return m(this, e = 0 === e ? 0 : e, e)
						}
					}), f && r(l.prototype, "size", {
						get: function() {
							return h(this).size
						}
					}), l
				},
				setStrong: function(e, t, n) {
					var r = t + " Iterator",
						i = _(t),
						a = _(r);
					c(e, t, (function(e, t) {
						p(this, {
							type: r,
							target: e,
							state: i(e),
							kind: t,
							last: void 0
						})
					}), (function() {
						for (var e = a(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
						return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
							value: n.key,
							done: !1
						} : "values" == t ? {
							value: n.value,
							done: !1
						} : {
							value: [n.key, n.value],
							done: !1
						} : (e.target = void 0, {
							value: void 0,
							done: !0
						})
					}), n ? "entries" : "values", !n, !0), l(t)
				}
			}
		},
		"65db": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("eo", {
					months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
					monthsShort: "jan_feb_mart_apr_maj_jun_jul_aÅ­g_sept_okt_nov_dec".split("_"),
					weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
					weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
					weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "[la] D[-an de] MMMM, YYYY",
						LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
						LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
						llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
					},
					meridiemParse: /[ap]\.t\.m/i,
					isPM: function(e) {
						return "p" === e.charAt(0).toLowerCase()
					},
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
					},
					calendar: {
						sameDay: "[HodiaÅ­ je] LT",
						nextDay: "[MorgaÅ­ je] LT",
						nextWeek: "dddd[n je] LT",
						lastDay: "[HieraÅ­ je] LT",
						lastWeek: "[pasintan] dddd[n je] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "post %s",
						past: "antaÅ­ %s",
						s: "kelkaj sekundoj",
						ss: "%d sekundoj",
						m: "unu minuto",
						mm: "%d minutoj",
						h: "unu horo",
						hh: "%d horoj",
						d: "unu tago",
						dd: "%d tagoj",
						M: "unu monato",
						MM: "%d monatoj",
						y: "unu jaro",
						yy: "%d jaroj"
					},
					dayOfMonthOrdinalParse: /\d{1,2}a/,
					ordinal: "%da",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"65e0": function(e, t, n) {
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
			}), t.CharacterEdgeSelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingscharacteredgeselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("raised", a.i18n.getLocalizer("settings.subtitles.characterEdge.raised")), this.addItem("depressed", a.i18n.getLocalizer("settings.subtitles.characterEdge.depressed")), this.addItem("uniform", a.i18n.getLocalizer("settings.subtitles.characterEdge.uniform")), this.addItem("dropshadowed", a.i18n.getLocalizer("settings.subtitles.characterEdge.dropshadowed")), this.settingsManager.characterEdge.onChanged.subscribe((function(e, t) {
							t.isSet() ? r.toggleOverlayClass("characteredge-" + t.value) : r.toggleOverlayClass(null), r.selectItem(t.value)
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.characterEdge.value = t
						})), this.settingsManager.characterEdge.isSet() && this.selectItem(this.settingsManager.characterEdge.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.CharacterEdgeSelectBox = o
		},
		"65f0": function(e, t, n) {
			var r = n("861d"),
				i = n("e8b5"),
				a = n("b622")("species");
			e.exports = function(e, t) {
				var n;
				return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && (null === (n = n[a]) && (n = void 0)) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
			}
		},
		"66d4": function(e, t, n) {
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
			}), t.VideoQualitySelectBox = void 0;
			var i = n("a92a"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-videoqualityselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = function() {
								r.selectItem(t.getVideoQuality().id)
							},
							o = function() {
								var e = t.getAvailableVideoQualities();
								r.clearItems(), r.hasAuto = "progressive" !== t.getStreamType(), r.hasAuto && r.addItem("auto", a.i18n.getLocalizer("auto"));
								for (var n = 0, o = e; n < o.length; n++) {
									var s = o[n];
									r.addItem(s.id, s.label)
								}
								i()
							};
						this.onItemSelected.subscribe((function(e, n) {
							t.setVideoQuality(n)
						})), t.on(t.exports.PlayerEvent.SourceUnloaded, o), t.on(t.exports.PlayerEvent.PeriodSwitched, o), t.on(t.exports.PlayerEvent.VideoQualityChanged, i), t.exports.PlayerEvent.VideoQualityAdded && (t.on(t.exports.PlayerEvent.VideoQualityAdded, o), t.on(t.exports.PlayerEvent.VideoQualityRemoved, o)), n.getConfig().events.onUpdated.subscribe(o)
					}, t.prototype.hasAutoItem = function() {
						return this.hasAuto
					}, t
				}(i.SelectBox);
			t.VideoQualitySelectBox = o
		},
		"673d": function(e, t, n) {
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
			}), t.FontOpacitySelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingsfontopacityselectbox"]
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
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.fontOpacity.value = t, r.settingsManager.fontOpacity.isSet() ? r.settingsManager.fontColor.isSet() || (r.settingsManager.fontColor.value = "white") : r.settingsManager.fontColor.clear()
						})), this.settingsManager.fontOpacity.onChanged.subscribe((function(e, t) {
							r.selectItem(t.value)
						})), this.settingsManager.fontOpacity.isSet() && this.selectItem(this.settingsManager.fontOpacity.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.FontOpacitySelectBox = o
		},
		6784: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
					n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
				e.defineLocale("sd", {
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
						sameDay: "[Ø§Ú„] LT",
						nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
						nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
						lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
						lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s Ù¾ÙˆØ¡",
						past: "%s Ø§Ú³",
						s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
						ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
						m: "Ù‡Úª Ù…Ù†Ù½",
						mm: "%d Ù…Ù†Ù½",
						h: "Ù‡Úª ÚªÙ„Ø§Úª",
						hh: "%d ÚªÙ„Ø§Úª",
						d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
						dd: "%d ÚÙŠÙ†Ù‡Ù†",
						M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
						MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
						y: "Ù‡Úª Ø³Ø§Ù„",
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
		6811: function(e, t, n) {
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
			}), t.PlaybackToggleButton = void 0;
			var i = n("30b0"),
				a = n("4344"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-playbacktogglebutton",
							text: o.i18n.getLocalizer("play"),
							onAriaLabel: o.i18n.getLocalizer("pause"),
							offAriaLabel: o.i18n.getLocalizer("play")
						}, n.config), n.isPlayInitiated = !1, n
					}
					return r(t, e), t.prototype.configure = function(n, r, i) {
						var o = this;
						void 0 === i && (i = !0), e.prototype.configure.call(this, n, r);
						var s = !1,
							u = function() {
								s || (n.isPlaying() || o.isPlayInitiated ? o.on() : o.off())
							};
						n.on(n.exports.PlayerEvent.Play, (function(e) {
							o.isPlayInitiated = !0, u()
						})), n.on(n.exports.PlayerEvent.Paused, (function(e) {
							o.isPlayInitiated = !1, u()
						})), n.on(n.exports.PlayerEvent.Playing, (function(e) {
							o.isPlayInitiated = !1, u()
						})), n.on(n.exports.PlayerEvent.SourceLoaded, u), r.getConfig().events.onUpdated.subscribe(u), n.on(n.exports.PlayerEvent.SourceUnloaded, u), n.on(n.exports.PlayerEvent.PlaybackFinished, u), n.on(n.exports.PlayerEvent.CastStarted, u), n.on(n.exports.PlayerEvent.Warning, (function(e) {
							e.code === n.exports.WarningCode.PLAYBACK_COULD_NOT_BE_STARTED && (o.isPlayInitiated = !1, o.off())
						}));
						var c = function() {
								n.isLive() && !a.PlayerUtils.isTimeShiftAvailable(n) ? o.getDomElement().addClass(o.prefixCss(t.CLASS_STOPTOGGLE)) : o.getDomElement().removeClass(o.prefixCss(t.CLASS_STOPTOGGLE))
							},
							l = new a.PlayerUtils.TimeShiftAvailabilityDetector(n),
							f = new a.PlayerUtils.LiveStreamDetector(n, r);
						l.onTimeShiftAvailabilityChanged.subscribe((function() {
							return c()
						})), f.onLiveChanged.subscribe((function() {
							return c()
						})), l.detect(), f.detect(), i && this.onClick.subscribe((function() {
							n.isPlaying() || o.isPlayInitiated ? n.pause("ui") : n.play("ui")
						})), r.onSeek.subscribe((function() {
							s = !0
						})), r.onSeeked.subscribe((function() {
							s = !1
						})), u()
					}, t.CLASS_STOPTOGGLE = "stoptoggle", t
				}(i.ToggleButton);
			t.PlaybackToggleButton = s
		},
		6887: function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					return e + " " + function(e, t) {
						return 2 === t ? function(e) {
							var t = {
								m: "v",
								b: "v",
								d: "z"
							};
							return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
						}(e) : e
					}({
						mm: "munutenn",
						MM: "miz",
						dd: "devezh"
					} [n], e)
				}
				var n = [/^gen/i, /^c[Ê¼\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
					r = /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
					i = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
				e.defineLocale("br", {
					months: "Genver_CÊ¼hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
					monthsShort: "Gen_CÊ¼hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
					weekdays: "Sul_Lun_Meurzh_MercÊ¼her_Yaou_Gwener_Sadorn".split("_"),
					weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
					weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
					weekdaysParse: i,
					fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[Ê¼\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
					shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
					minWeekdaysParse: i,
					monthsRegex: r,
					monthsShortRegex: r,
					monthsStrictRegex: /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
					monthsShortStrictRegex: /^(gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
					monthsParse: n,
					longMonthsParse: n,
					shortMonthsParse: n,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [a viz] MMMM YYYY",
						LLL: "D [a viz] MMMM YYYY HH:mm",
						LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Hiziv da] LT",
						nextDay: "[WarcÊ¼hoazh da] LT",
						nextWeek: "dddd [da] LT",
						lastDay: "[DecÊ¼h da] LT",
						lastWeek: "dddd [paset da] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "a-benn %s",
						past: "%s Ê¼zo",
						s: "un nebeud segondennoÃ¹",
						ss: "%d eilenn",
						m: "ur vunutenn",
						mm: t,
						h: "un eur",
						hh: "%d eur",
						d: "un devezh",
						dd: t,
						M: "ur miz",
						MM: t,
						y: "ur bloaz",
						yy: function(e) {
							switch (function e(t) {
								return t > 9 ? e(t % 10) : t
							}(e)) {
								case 1:
								case 3:
								case 4:
								case 5:
								case 9:
									return e + " bloaz";
								default:
									return e + " vloaz"
							}
						}
					},
					dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
					ordinal: function(e) {
						return e + (1 === e ? "aÃ±" : "vet")
					},
					week: {
						dow: 1,
						doy: 4
					},
					meridiemParse: /a.m.|g.m./,
					isPM: function(e) {
						return "g.m." === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "a.m." : "g.m."
					}
				})
			}(n("c1df"))
		},
		"688b": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("mi", {
					months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
					monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
					monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
					weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
					weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
					weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [i] HH:mm",
						LLLL: "dddd, D MMMM YYYY [i] HH:mm"
					},
					calendar: {
						sameDay: "[i teie mahana, i] LT",
						nextDay: "[apopo i] LT",
						nextWeek: "dddd [i] LT",
						lastDay: "[inanahi i] LT",
						lastWeek: "dddd [whakamutunga i] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "i roto i %s",
						past: "%s i mua",
						s: "te hÄ“kona ruarua",
						ss: "%d hÄ“kona",
						m: "he meneti",
						mm: "%d meneti",
						h: "te haora",
						hh: "%d haora",
						d: "he ra",
						dd: "%d ra",
						M: "he marama",
						MM: "%d marama",
						y: "he tau",
						yy: "%d tau"
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
		6909: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("mk", {
					months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
					monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
					weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
					weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
					weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "D.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY H:mm",
						LLLL: "dddd, D MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
						nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
						nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
						lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 6:
									return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "Ð·Ð° %s",
						past: "Ð¿Ñ€ÐµÐ´ %s",
						s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
						ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
						m: "ÐµÐ´Ð½Ð° Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
						mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
						h: "ÐµÐ´ÐµÐ½ Ñ‡Ð°Ñ",
						hh: "%d Ñ‡Ð°ÑÐ°",
						d: "ÐµÐ´ÐµÐ½ Ð´ÐµÐ½",
						dd: "%d Ð´ÐµÐ½Ð°",
						M: "ÐµÐ´ÐµÐ½ Ð¼ÐµÑÐµÑ†",
						MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
						y: "ÐµÐ´Ð½Ð° Ð³Ð¾Ð´Ð¸Ð½Ð°",
						yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
					ordinal: function(e) {
						var t = e % 10,
							n = e % 100;
						return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"69f3": function(e, t, n) {
			var r, i, a, o = n("7f9a"),
				s = n("da84"),
				u = n("861d"),
				c = n("9112"),
				l = n("5135"),
				f = n("c6cd"),
				d = n("f772"),
				h = n("d012"),
				p = s.WeakMap;
			if (o) {
				var _ = f.state || (f.state = new p),
					m = _.get,
					b = _.has,
					g = _.set;
				r = function(e, t) {
					return t.facade = e, g.call(_, e, t), t
				}, i = function(e) {
					return m.call(_, e) || {}
				}, a = function(e) {
					return b.call(_, e)
				}
			} else {
				var v = d("state");
				h[v] = !0, r = function(e, t) {
					return t.facade = e, c(e, v, t), t
				}, i = function(e) {
					return l(e, v) ? e[v] : {}
				}, a = function(e) {
					return l(e, v)
				}
			}
			e.exports = {
				set: r,
				get: i,
				has: a,
				enforce: function(e) {
					return a(e) ? i(e) : r(e, {})
				},
				getterFor: function(e) {
					return function(t) {
						var n;
						if (!u(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
						return n
					}
				}
			}
		},
		"6a44": function(e, t, n) {
			const r = n("01d3"),
				i = n("d33e"),
				a = n("0a5e"),
				o = n("0882");
			t.polling = function(e) {
				let t, n = !1,
					o = !1;
				const s = !1 !== e.jsonp;
				if ("undefined" != typeof location) {
					const t = "https:" === location.protocol;
					let r = location.port;
					r || (r = t ? 443 : 80), n = e.hostname !== location.hostname || r !== e.port, o = e.secure !== t
				}
				if (e.xdomain = n, e.xscheme = o, t = new r(e), "open" in t && !e.forceJSONP) return new i(e);
				if (!s) throw new Error("JSONP disabled");
				return new a(e)
			}, t.websocket = o
		},
		"6b75": function(e, t, n) {
			"use strict";

			function r(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"6c76": function(e) {
			e.exports = JSON.parse('{"settings.video.quality":"Video Quality","settings.audio.quality":"Audio Quality","settings.audio.track":"Audio Track","settings.audio.mute":"Mute","settings.audio.volume":"Volume","settings.subtitles.window.color":"Window color","settings.subtitles.window.opacity":"Window opacity","settings.subtitles":"Subtitles","settings.subtitles.font.color":"Font color","settings.subtitles.font.opacity":"Font opacity","settings.subtitles.background.color":"Background color","settings.subtitles.background.opacity":"Background opacity","colors.white":"white","colors.black":"black","colors.red":"red","colors.green":"green","colors.blue":"blue","colors.cyan":"cyan","colors.yellow":"yellow","colors.magenta":"magenta","percent":"{value}%","settings.subtitles.font.size":"Font size","settings.subtitles.characterEdge":"Character edge","settings.subtitles.characterEdge.raised":"raised","settings.subtitles.characterEdge.depressed":"depressed","settings.subtitles.characterEdge.uniform":"uniform","settings.subtitles.characterEdge.dropshadowed":"drop shadowed","settings.subtitles.font.family":"Font family","settings.subtitles.font.family.monospacedserif":"monospaced serif","settings.subtitles.font.family.proportionalserif":"proportional serif","settings.subtitles.font.family.monospacedsansserif":"monospaced sans serif","settings.subtitles.font.family.proportionalsansserif":"proportional sans serif","settings.subtitles.font.family.casual":"casual","settings.subtitles.font.family.cursive":"cursive","settings.subtitles.font.family.smallcapital":"small capital","settings.time.hours":"Hours","settings.time.minutes":"Minutes","settings.time.seconds":"Seconds","ads.remainingTime":"This ad will end in {remainingTime} seconds.","settings":"Settings","fullscreen":"Fullscreen","speed":"Speed","playPause":"Play/Pause","play":"Play","pause":"Pause","open":"open","close":"Close","pictureInPicture":"Picture-in-Picture","appleAirplay":"Apple AirPlay","googleCast":"Google Cast","vr":"VR","off":"off","auto":"auto","back":"Back","reset":"Reset","replay":"Replay","normal":"normal","default":"default","live":"Live","subtitle.example":"example subtitle","subtitle.select":"Select subtitle","playingOn":"Playing on <strong>{castDeviceName}</strong>","connectingTo":"Connecting to <strong>{castDeviceName}</strong>...","watermarkLink":"Link to Homepage","controlBar":"Video player controls","player":"Video player","seekBar":"Video timeline","seekBar.value":"Value","seekBar.timeshift":"Timeshift","seekBar.durationText":"out of"}')
		},
		"6ce3": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("nb", {
					months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
					monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
					monthsParseExact: !0,
					weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
					weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
					weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY [kl.] HH:mm",
						LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
					},
					calendar: {
						sameDay: "[i dag kl.] LT",
						nextDay: "[i morgen kl.] LT",
						nextWeek: "dddd [kl.] LT",
						lastDay: "[i gÃ¥r kl.] LT",
						lastWeek: "[forrige] dddd [kl.] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "%s siden",
						s: "noen sekunder",
						ss: "%d sekunder",
						m: "ett minutt",
						mm: "%d minutter",
						h: "en time",
						hh: "%d timer",
						d: "en dag",
						dd: "%d dager",
						w: "en uke",
						ww: "%d uker",
						M: "en mÃ¥ned",
						MM: "%d mÃ¥neder",
						y: "ett Ã¥r",
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
		"6d61": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("da84"),
				a = n("94ca"),
				o = n("6eeb"),
				s = n("f183"),
				u = n("2266"),
				c = n("19aa"),
				l = n("861d"),
				f = n("d039"),
				d = n("1c7e"),
				h = n("d44e"),
				p = n("7156");
			e.exports = function(e, t, n) {
				var _ = -1 !== e.indexOf("Map"),
					m = -1 !== e.indexOf("Weak"),
					b = _ ? "set" : "add",
					g = i[e],
					v = g && g.prototype,
					y = g,
					A = {},
					S = function(e) {
						var t = v[e];
						o(v, e, "add" == e ? function(e) {
							return t.call(this, 0 === e ? 0 : e), this
						} : "delete" == e ? function(e) {
							return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
						} : "get" == e ? function(e) {
							return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
						} : "has" == e ? function(e) {
							return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
						} : function(e, n) {
							return t.call(this, 0 === e ? 0 : e, n), this
						})
					};
				if (a(e, "function" != typeof g || !(m || v.forEach && !f((function() {
						(new g).entries().next()
					}))))) y = n.getConstructor(t, e, _, b), s.REQUIRED = !0;
				else if (a(e, !0)) {
					var w = new y,
						E = w[b](m ? {} : -0, 1) != w,
						T = f((function() {
							w.has(1)
						})),
						C = d((function(e) {
							new g(e)
						})),
						$ = !m && f((function() {
							for (var e = new g, t = 5; t--;) e[b](t, t);
							return !e.has(-0)
						}));
					C || ((y = t((function(t, n) {
						c(t, y, e);
						var r = p(new g, t, y);
						return null != n && u(n, r[b], {
							that: r,
							AS_ENTRIES: _
						}), r
					}))).prototype = v, v.constructor = y), (T || $) && (S("delete"), S("has"), _ && S("get")), ($ || E) && S(b), m && v.clear && delete v.clear
				}
				return A[e] = y, r({
					global: !0,
					forced: y != g
				}, A), h(y, e), m || n.setStrong(y, e, _), y
			}
		},
		"6d79": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-ÑˆÑ–",
					1: "-ÑˆÑ–",
					2: "-ÑˆÑ–",
					3: "-ÑˆÑ–",
					4: "-ÑˆÑ–",
					5: "-ÑˆÑ–",
					6: "-ÑˆÑ‹",
					7: "-ÑˆÑ–",
					8: "-ÑˆÑ–",
					9: "-ÑˆÑ‹",
					10: "-ÑˆÑ‹",
					20: "-ÑˆÑ‹",
					30: "-ÑˆÑ‹",
					40: "-ÑˆÑ‹",
					50: "-ÑˆÑ–",
					60: "-ÑˆÑ‹",
					70: "-ÑˆÑ–",
					80: "-ÑˆÑ–",
					90: "-ÑˆÑ‹",
					100: "-ÑˆÑ–"
				};
				e.defineLocale("kk", {
					months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
					monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
					weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
					weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
					weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
						nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
						nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
						lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
						lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
						past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
						s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
						ss: "%d ÑÐµÐºÑƒÐ½Ð´",
						m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
						mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
						h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
						hh: "%d ÑÐ°Ò“Ð°Ñ‚",
						d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
						dd: "%d ÐºÒ¯Ð½",
						M: "Ð±Ñ–Ñ€ Ð°Ð¹",
						MM: "%d Ð°Ð¹",
						y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
						yy: "%d Ð¶Ñ‹Ð»"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
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
		"6d83": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-tn", {
					months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
					monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
					weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
					weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
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
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"6e98": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("it", {
					months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
					monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
					weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
					weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
					weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: function() {
							return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
						},
						nextDay: function() {
							return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
						},
						nextWeek: function() {
							return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
						},
						lastDay: function() {
							return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
						},
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
								default:
									return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "tra %s",
						past: "%s fa",
						s: "alcuni secondi",
						ss: "%d secondi",
						m: "un minuto",
						mm: "%d minuti",
						h: "un'ora",
						hh: "%d ore",
						d: "un giorno",
						dd: "%d giorni",
						w: "una settimana",
						ww: "%d settimane",
						M: "un mese",
						MM: "%d mesi",
						y: "un anno",
						yy: "%d anni"
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
		"6ec2": function(e, t, n) {
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
				}(),
				i = this && this.__assign || function() {
					return (i = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				a = this && this.__spreadArrays || function() {
					for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
					var r = Array(e),
						i = 0;
					for (t = 0; t < n; t++)
						for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
					return r
				};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.PlayerWrapper = t.UIInstanceManager = t.UIManager = void 0;
			var o = n("b491"),
				s = n("571d"),
				u = n("fdec"),
				c = n("09e6"),
				l = n("f109"),
				f = n("a341"),
				d = n("8e8b"),
				h = n("4b69"),
				p = n("e1ee"),
				_ = n("1f1d"),
				m = n("0fd0"),
				b = function() {
					function e(e, t, n) {
						var r = this;
						if (void 0 === n && (n = {}), this.events = {
								onUiVariantResolve: new c.EventDispatcher
							}, t instanceof o.UIContainer) {
							var a = t,
								u = [];
							u.push({
								ui: a
							}), this.uiVariants = u
						} else this.uiVariants = t;
						this.player = e, this.managerPlayerWrapper = new y(e), n.metadata = n.metadata ? n.metadata : {}, this.config = i(i({
							playbackSpeedSelectionEnabled: !0,
							autoUiVariantResolve: !0,
							disableAutoHideWhenHovered: !1,
							enableSeekPreview: !0
						}, n), {
							events: {
								onUpdated: new c.EventDispatcher
							},
							volumeController: new h.VolumeController(this.managerPlayerWrapper.getPlayer())
						});
						var l = function() {
							var t = e.getSource() || {};
							r.config.metadata = JSON.parse(JSON.stringify(n.metadata || {}));
							var i = {
								metadata: {
									title: t.title,
									description: t.description,
									markers: t.markers
								},
								recommendations: t.recommendations
							};
							r.config.metadata.title = i.metadata.title || n.metadata.title, r.config.metadata.description = i.metadata.description || n.metadata.description, r.config.metadata.markers = i.metadata.markers || n.metadata.markers || [], r.config.recommendations = i.recommendations || n.recommendations || []
						};
						l();
						var f = function() {
								l(), r.config.events.onUpdated.dispatch(r)
							},
							d = this.managerPlayerWrapper.getPlayer();
						d.on(this.player.exports.PlayerEvent.SourceLoaded, f), m.isMobileV3PlayerAPI(d) && d.on(m.MobileV3PlayerEvent.PlaylistTransition, f), n.container ? this.uiContainerElement = (n.container, HTMLElement, new s.DOM(n.container)) : this.uiContainerElement = new s.DOM(e.getContainer()), this.uiInstanceManagers = [];
						for (var p = [], b = 0, g = this.uiVariants; b < g.length; b++) {
							var A = g[b];
							null == A.condition && p.push(A), this.uiInstanceManagers.push(new v(e, A.ui, this.config))
						}
						if (p.length > 1) throw Error("Too many UIs without a condition: You cannot have more than one default UI");
						if (p.length > 0 && p[0] !== this.uiVariants[this.uiVariants.length - 1]) throw Error("Invalid UI variant order: the default UI (without condition) must be at the end of the list");
						var S = null,
							w = function(t) {
								if (null != t) switch (t.type) {
									case e.exports.PlayerEvent.AdStarted:
										S = t;
										break;
									case e.exports.PlayerEvent.AdBreakFinished:
										S = null, r.config.events.onUpdated.dispatch(r);
										break;
									case e.exports.PlayerEvent.SourceLoaded:
									case e.exports.PlayerEvent.SourceUnloaded:
										S = null
								}
								var n = null != S,
									i = !1;
								if (n) {
									var a = S.ad;
									if (a.isLinear) {
										var o = a;
										i = o.uiConfig && o.uiConfig.requestsUi || !1
									}
								}
								i && r.config.events.onUpdated.dispatch(r), r.resolveUiVariant({
									isAd: n,
									adRequiresUi: i
								}, (function(e) {
									e.isAd && r.currentUi.getWrappedPlayer().fireEventInUI(r.player.exports.PlayerEvent.AdStarted, S)
								}))
							};
						this.config.autoUiVariantResolve && (this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.SourceLoaded, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.SourceUnloaded, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.Play, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.Paused, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.AdStarted, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.AdBreakFinished, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.PlayerResized, w), this.managerPlayerWrapper.getPlayer().on(this.player.exports.PlayerEvent.ViewModeChanged, w)), this.focusVisibilityTracker = new _.FocusVisibilityTracker("bmpui"), w(null)
					}
					return e.localize = function(e) {
						return p.i18n.getLocalizer(e)
					}, e.setLocalizationConfig = function(e) {
						p.i18n.setConfig(e)
					}, e.prototype.getConfig = function() {
						return this.config
					}, e.prototype.getUiVariants = function() {
						return this.uiVariants
					}, e.prototype.switchToUiVariant = function(e, t) {
						var n = this.uiVariants.indexOf(e),
							r = this.uiInstanceManagers[n],
							i = !1;
						r !== this.currentUi && (i = !0), i && (this.currentUi && this.currentUi.getUI().hide(), this.currentUi = r, null != this.currentUi && (this.currentUi.isConfigured() || this.addUi(this.currentUi), t && t(), this.currentUi.getUI().show()))
					}, e.prototype.resolveUiVariant = function(e, t) {
						void 0 === e && (e = {});
						var n = {
								isAd: !1,
								adRequiresUi: !1,
								isFullscreen: this.player.getViewMode() === this.player.exports.ViewMode.Fullscreen,
								isMobile: d.BrowserUtils.isMobile,
								isPlaying: this.player.isPlaying(),
								width: this.uiContainerElement.width(),
								documentWidth: document.body.clientWidth
							},
							r = i(i({}, n), e);
						this.events.onUiVariantResolve.dispatch(this, r);
						for (var a = null, o = 0, s = this.uiVariants; o < s.length; o++) {
							var u = s[o];
							if (null == u.condition || !0 === u.condition(r)) {
								a = u;
								break
							}
						}
						this.switchToUiVariant(a, (function() {
							t && t(r)
						}))
					}, e.prototype.addUi = function(e) {
						var t = e.getUI().getDomElement(),
							n = e.getWrappedPlayer();
						e.configureControls(), this.uiContainerElement.append(t), n.getSource() && this.config.events.onUpdated.dispatch(this), window.requestAnimationFrame ? requestAnimationFrame((function() {
							e.onConfigured.dispatch(e.getUI())
						})) : setTimeout((function() {
							e.onConfigured.dispatch(e.getUI())
						}), 0)
					}, e.prototype.releaseUi = function(e) {
						e.releaseControls(), e.getUI().getDomElement().remove(), e.clearEventHandlers()
					}, e.prototype.release = function() {
						for (var e = 0, t = this.uiInstanceManagers; e < t.length; e++) {
							var n = t[e];
							this.releaseUi(n)
						}
						this.managerPlayerWrapper.clearEventHandlers(), this.focusVisibilityTracker.release()
					}, Object.defineProperty(e.prototype, "onUiVariantResolve", {
						get: function() {
							return this.events.onUiVariantResolve
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.getTimelineMarkers = function() {
						return this.config.metadata.markers
					}, e.prototype.addTimelineMarker = function(e) {
						this.config.metadata.markers.push(e), this.config.events.onUpdated.dispatch(this)
					}, e.prototype.removeTimelineMarker = function(e) {
						return f.ArrayUtils.remove(this.config.metadata.markers, e) === e && (this.config.events.onUpdated.dispatch(this), !0)
					}, e
				}();
			t.UIManager = b;
			var g = function() {
				function e(e, t, n) {
					this.events = {
						onConfigured: new c.EventDispatcher,
						onSeek: new c.EventDispatcher,
						onSeekPreview: new c.EventDispatcher,
						onSeeked: new c.EventDispatcher,
						onComponentShow: new c.EventDispatcher,
						onComponentHide: new c.EventDispatcher,
						onControlsShow: new c.EventDispatcher,
						onPreviewControlsHide: new c.EventDispatcher,
						onControlsHide: new c.EventDispatcher,
						onRelease: new c.EventDispatcher
					}, this.playerWrapper = new y(e), this.ui = t, this.config = n
				}
				return e.prototype.getConfig = function() {
					return this.config
				}, e.prototype.getUI = function() {
					return this.ui
				}, e.prototype.getPlayer = function() {
					return this.playerWrapper.getPlayer()
				}, Object.defineProperty(e.prototype, "onConfigured", {
					get: function() {
						return this.events.onConfigured
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onSeek", {
					get: function() {
						return this.events.onSeek
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onSeekPreview", {
					get: function() {
						return this.events.onSeekPreview
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onSeeked", {
					get: function() {
						return this.events.onSeeked
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onComponentShow", {
					get: function() {
						return this.events.onComponentShow
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onComponentHide", {
					get: function() {
						return this.events.onComponentHide
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onControlsShow", {
					get: function() {
						return this.events.onControlsShow
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onPreviewControlsHide", {
					get: function() {
						return this.events.onPreviewControlsHide
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onControlsHide", {
					get: function() {
						return this.events.onControlsHide
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onRelease", {
					get: function() {
						return this.events.onRelease
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.clearEventHandlers = function() {
					this.playerWrapper.clearEventHandlers();
					var e = this.events;
					for (var t in e) {
						e[t].unsubscribeAll()
					}
				}, e
			}();
			t.UIInstanceManager = g;
			var v = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return r(t, e), t.prototype.getWrappedPlayer = function() {
						return this.getPlayer()
					}, t.prototype.configureControls = function() {
						this.configureControlsTree(this.getUI()), this.configured = !0
					}, t.prototype.isConfigured = function() {
						return this.configured
					}, t.prototype.configureControlsTree = function(e) {
						var t = this,
							n = [];
						l.UIUtils.traverseTree(e, (function(e) {
							for (var r = 0, i = n; r < i.length; r++) {
								if (i[r] === e) throw console && console.error("Circular reference in UI tree", e), Error("Circular reference in UI tree: " + e.constructor.name)
							}
							e.initialize(), e.configure(t.getPlayer(), t), n.push(e)
						}))
					}, t.prototype.releaseControls = function() {
						this.configured && (this.onRelease.dispatch(this.getUI()), this.releaseControlsTree(this.getUI()), this.configured = !1), this.released = !0
					}, t.prototype.isReleased = function() {
						return this.released
					}, t.prototype.releaseControlsTree = function(e) {
						if (e.release(), e instanceof u.Container)
							for (var t = 0, n = e.getComponents(); t < n.length; t++) {
								var r = n[t];
								this.releaseControlsTree(r)
							}
					}, t.prototype.clearEventHandlers = function() {
						e.prototype.clearEventHandlers.call(this)
					}, t
				}(g),
				y = function() {
					function e(e) {
						var t = this;
						this.eventHandlers = {}, this.player = e;
						for (var n = Object.getOwnPropertyNames(Object.getPrototypeOf({})), r = a(["constructor"], n), i = [], o = [], s = 0, u = function(e) {
								var t = [];
								for (; e;) {
									var n = Object.getOwnPropertyNames(e).filter((function(e) {
										return -1 === t.indexOf(e)
									}));
									t = t.concat(n), e = Object.getPrototypeOf(e)
								}
								return t
							}(e).filter((function(e) {
								return -1 === r.indexOf(e)
							})); s < u.length; s++) {
							var c = u[s];
							"function" == typeof e[c] ? i.push(c) : o.push(c)
						}
						for (var l = {}, d = function(t) {
								l[t] = function() {
									return e[t].apply(e, arguments)
								}
							}, h = 0, p = i; h < p.length; h++) {
							d(p[h])
						}
						for (var _ = function(t) {
								var n = function(e) {
									for (; e;) {
										var n = Object.getOwnPropertyDescriptor(e, t);
										if (n) return n;
										e = Object.getPrototypeOf(e)
									}
								}(e);
								n && (n.get || n.set) ? Object.defineProperty(l, t, {
									get: function() {
										return n.get.call(e)
									},
									set: function(t) {
										return n.set.call(e, t)
									}
								}) : l[t] = e[t]
							}, m = 0, b = o; m < b.length; m++) {
							_(b[m])
						}
						l.on = function(n, r) {
							return e.on(n, r), t.eventHandlers[n] || (t.eventHandlers[n] = []), t.eventHandlers[n].push(r), l
						}, l.off = function(n, r) {
							return e.off(n, r), t.eventHandlers[n] && f.ArrayUtils.remove(t.eventHandlers[n], r), l
						}, l.fireEventInUI = function(e, n) {
							if (t.eventHandlers[e])
								for (var r = Object.assign({}, {
										timestamp: Date.now(),
										type: e,
										uiSourced: !0
									}, n), i = 0, a = t.eventHandlers[e]; i < a.length; i++) {
									(0, a[i])(r)
								}
						}, this.wrapper = l
					}
					return e.prototype.getPlayer = function() {
						return this.wrapper
					}, e.prototype.clearEventHandlers = function() {
						try {
							this.player.getSource()
						} catch (e) {
							e instanceof this.player.exports.PlayerAPINotAvailableError && (this.eventHandlers = {})
						}
						for (var e in this.eventHandlers)
							for (var t = 0, n = this.eventHandlers[e]; t < n.length; t++) {
								var r = n[t];
								this.player.off(e, r)
							}
					}, e
				}();
			t.PlayerWrapper = y
		},
		"6eeb": function(e, t, n) {
			var r = n("da84"),
				i = n("9112"),
				a = n("5135"),
				o = n("ce4e"),
				s = n("8925"),
				u = n("69f3"),
				c = u.get,
				l = u.enforce,
				f = String(String).split("String");
			(e.exports = function(e, t, n, s) {
				var u, c = !!s && !!s.unsafe,
					d = !!s && !!s.enumerable,
					h = !!s && !!s.noTargetGet;
				"function" == typeof n && ("string" != typeof t || a(n, "name") || i(n, "name", t), (u = l(n)).source || (u.source = f.join("string" == typeof t ? t : ""))), e !== r ? (c ? !h && e[t] && (d = !0) : delete e[t], d ? e[t] = n : i(e, t, n)) : d ? e[t] = n : o(t, n)
			})(Function.prototype, "toString", (function() {
				return "function" == typeof this && c(this).source || s(this)
			}))
		},
		"6f12": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("it-ch", {
					months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
					monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
					weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
					weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
					weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Oggi alle] LT",
						nextDay: "[Domani alle] LT",
						nextWeek: "dddd [alle] LT",
						lastDay: "[Ieri alle] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[la scorsa] dddd [alle] LT";
								default:
									return "[lo scorso] dddd [alle] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
						},
						past: "%s fa",
						s: "alcuni secondi",
						ss: "%d secondi",
						m: "un minuto",
						mm: "%d minuti",
						h: "un'ora",
						hh: "%d ore",
						d: "un giorno",
						dd: "%d giorni",
						M: "un mese",
						MM: "%d mesi",
						y: "un anno",
						yy: "%d anni"
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
		"6f50": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-nz", {
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
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"6f53": function(e, t, n) {
			var r = n("83ab"),
				i = n("df75"),
				a = n("fc6a"),
				o = n("d1e7").f,
				s = function(e) {
					return function(t) {
						for (var n, s = a(t), u = i(s), c = u.length, l = 0, f = []; c > l;) n = u[l++], r && !o.call(s, n) || f.push(e ? [n, s[n]] : s[n]);
						return f
					}
				};
			e.exports = {
				entries: s(!0),
				values: s(!1)
			}
		},
		7037: function(e, t, n) {
			function r(t) {
				return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
					return typeof e
				}, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
			}
			n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		7118: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
					n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
				e.defineLocale("fy", {
					months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
					monthsShort: function(e, r) {
						return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
					},
					monthsParseExact: !0,
					weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
					weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
					weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD-MM-YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[hjoed om] LT",
						nextDay: "[moarn om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[juster om] LT",
						lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "oer %s",
						past: "%s lyn",
						s: "in pear sekonden",
						ss: "%d sekonden",
						m: "ien minÃºt",
						mm: "%d minuten",
						h: "ien oere",
						hh: "%d oeren",
						d: "ien dei",
						dd: "%d dagen",
						M: "ien moanne",
						MM: "%d moannen",
						y: "ien jier",
						yy: "%d jierren"
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
		7156: function(e, t, n) {
			var r = n("861d"),
				i = n("d2bb");
			e.exports = function(e, t, n) {
				var a, o;
				return i && "function" == typeof(a = t.constructor) && a !== n && r(o = a.prototype) && o !== n.prototype && i(e, o), e
			}
		},
		"721c": function(e, t, n) {
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
			}), t.SettingsPanelPageNavigatorButton = void 0;
			var i = function(e) {
				function t(t) {
					var n = e.call(this, t) || this;
					return n.config = n.mergeConfig(t, {}, n.config), n.container = n.config.container, n.targetPage = n.config.targetPage, n
				}
				return r(t, e), t.prototype.popPage = function() {
					this.container.popSettingsPanelPage()
				}, t.prototype.pushTargetPage = function() {
					this.container.setActivePage(this.targetPage)
				}, t
			}(n("48da").Button);
			t.SettingsPanelPageNavigatorButton = i
		},
		7297: function(e, t, n) {
			function r(e) {
				if (e) return function(e) {
					for (var t in r.prototype) e[t] = r.prototype[t];
					return e
				}(e)
			}
			e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
				return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
			}, r.prototype.once = function(e, t) {
				function n() {
					this.off(e, n), t.apply(this, arguments)
				}
				return n.fn = t, this.on(e, n), this
			}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
				if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
				var n, r = this._callbacks["$" + e];
				if (!r) return this;
				if (1 == arguments.length) return delete this._callbacks["$" + e], this;
				for (var i = 0; i < r.length; i++)
					if ((n = r[i]) === t || n.fn === t) {
						r.splice(i, 1);
						break
					} return 0 === r.length && delete this._callbacks["$" + e], this
			}, r.prototype.emit = function(e) {
				this._callbacks = this._callbacks || {};
				for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				if (n) {
					r = 0;
					for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
				}
				return this
			}, r.prototype.listeners = function(e) {
				return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
			}, r.prototype.hasListeners = function(e) {
				return !!this.listeners(e).length
			}
		},
		"72f7": function(e, t, n) {
			"use strict";
			var r = n("ebb5").exportTypedArrayMethod,
				i = n("d039"),
				a = n("da84").Uint8Array,
				o = a && a.prototype || {},
				s = [].toString,
				u = [].join;
			i((function() {
				s.call({})
			})) && (s = function() {
				return u.call(this)
			});
			var c = o.toString != s;
			r("toString", s, c)
		},
		7333: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-il", {
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
					}
				})
			}(n("c1df"))
		},
		"735e": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("81d5"),
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("fill", (function(e) {
				return i.apply(a(this), arguments)
			}))
		},
		"73d9": function(e, t, n) {
			n("44d2")("flatMap")
		},
		7418: function(e, t) {
			t.f = Object.getOwnPropertySymbols
		},
		"746f": function(e, t, n) {
			var r = n("428f"),
				i = n("5135"),
				a = n("e538"),
				o = n("9bf2").f;
			e.exports = function(e) {
				var t = r.Symbol || (r.Symbol = {});
				i(t, e) || o(t, e, {
					value: a.f(e)
				})
			}
		},
		7471: function(e, t, n) {
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
			}), t.ItemSelectionList = void 0;
			var i = n("1c57"),
				a = n("571d"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							tag: "ul",
							cssClass: "ui-itemselectionlist"
						}, n.config), n
					}
					return r(t, e), t.prototype.isActive = function() {
						return this.items.length > 1
					}, t.prototype.toDomElement = function() {
						var e = new a.DOM("ul", {
							id: this.config.id,
							class: this.getCssClasses()
						});
						return this.listElement = e, this.updateDomItems(), e
					}, t.prototype.updateDomItems = function(e) {
						var n = this;
						void 0 === e && (e = null), this.listElement.empty();
						for (var r = null, i = function(e) {
								e.addClass(n.prefixCss(t.CLASS_SELECTED))
							}, s = function(e) {
								e.removeClass(n.prefixCss(t.CLASS_SELECTED))
							}, u = function(t) {
								var u = new a.DOM("li", {
									type: "li",
									class: c.prefixCss("ui-selectionlistitem")
								}).append(new a.DOM("a", {}).html(o.i18n.performLocalization(t.label)));
								r || (null == e || String(e) === t.key) && (r = u), u.on("click", (function() {
									r && s(r), r = u, i(u), n.onItemSelectedEvent(t.key, !1)
								})), r && i(r), c.listElement.append(u)
							}, c = this, l = 0, f = this.items; l < f.length; l++) {
							u(f[l])
						}
					}, t.prototype.onItemAddedEvent = function(t) {
						e.prototype.onItemAddedEvent.call(this, t), this.updateDomItems(this.selectedItem)
					}, t.prototype.onItemRemovedEvent = function(t) {
						e.prototype.onItemRemovedEvent.call(this, t), this.updateDomItems(this.selectedItem)
					}, t.prototype.onItemSelectedEvent = function(t, n) {
						void 0 === n && (n = !0), e.prototype.onItemSelectedEvent.call(this, t), n && this.updateDomItems(t)
					}, t.CLASS_SELECTED = "selected", t
				}(i.ListSelector);
			t.ItemSelectionList = s
		},
		"74dc": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("sw", {
					months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
					monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
					weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
					weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
					weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "hh:mm A",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[leo saa] LT",
						nextDay: "[kesho saa] LT",
						nextWeek: "[wiki ijayo] dddd [saat] LT",
						lastDay: "[jana] LT",
						lastWeek: "[wiki iliyopita] dddd [saat] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s baadaye",
						past: "tokea %s",
						s: "hivi punde",
						ss: "sekunde %d",
						m: "dakika moja",
						mm: "dakika %d",
						h: "saa limoja",
						hh: "masaa %d",
						d: "siku moja",
						dd: "siku %d",
						M: "mwezi mmoja",
						MM: "miezi %d",
						y: "mwaka mmoja",
						yy: "miaka %d"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"74e8": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("da84"),
				a = n("83ab"),
				o = n("8aa7"),
				s = n("ebb5"),
				u = n("621a"),
				c = n("19aa"),
				l = n("5c6c"),
				f = n("9112"),
				d = n("50c4"),
				h = n("0b25"),
				p = n("182d"),
				_ = n("c04e"),
				m = n("5135"),
				b = n("f5df"),
				g = n("861d"),
				v = n("7c73"),
				y = n("d2bb"),
				A = n("241c").f,
				S = n("a078"),
				w = n("b727").forEach,
				E = n("2626"),
				T = n("9bf2"),
				C = n("06cf"),
				$ = n("69f3"),
				k = n("7156"),
				O = $.get,
				x = $.set,
				P = T.f,
				M = C.f,
				I = Math.round,
				L = i.RangeError,
				D = u.ArrayBuffer,
				B = u.DataView,
				N = s.NATIVE_ARRAY_BUFFER_VIEWS,
				R = s.TYPED_ARRAY_TAG,
				F = s.TypedArray,
				U = s.TypedArrayPrototype,
				j = s.aTypedArrayConstructor,
				H = s.isTypedArray,
				Y = "BYTES_PER_ELEMENT",
				V = "Wrong length",
				z = function(e, t) {
					for (var n = 0, r = t.length, i = new(j(e))(r); r > n;) i[n] = t[n++];
					return i
				},
				Q = function(e, t) {
					P(e, t, {
						get: function() {
							return O(this)[t]
						}
					})
				},
				G = function(e) {
					var t;
					return e instanceof D || "ArrayBuffer" == (t = b(e)) || "SharedArrayBuffer" == t
				},
				q = function(e, t) {
					return H(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
				},
				W = function(e, t) {
					return q(e, t = _(t, !0)) ? l(2, e[t]) : M(e, t)
				},
				K = function(e, t, n) {
					return !(q(e, t = _(t, !0)) && g(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? P(e, t, n) : (e[t] = n.value, e)
				};
			a ? (N || (C.f = W, T.f = K, Q(U, "buffer"), Q(U, "byteOffset"), Q(U, "byteLength"), Q(U, "length")), r({
				target: "Object",
				stat: !0,
				forced: !N
			}, {
				getOwnPropertyDescriptor: W,
				defineProperty: K
			}), e.exports = function(e, t, n) {
				var a = e.match(/\d+$/)[0] / 8,
					s = e + (n ? "Clamped" : "") + "Array",
					u = "get" + e,
					l = "set" + e,
					_ = i[s],
					m = _,
					b = m && m.prototype,
					T = {},
					C = function(e, t) {
						P(e, t, {
							get: function() {
								return function(e, t) {
									var n = O(e);
									return n.view[u](t * a + n.byteOffset, !0)
								}(this, t)
							},
							set: function(e) {
								return function(e, t, r) {
									var i = O(e);
									n && (r = (r = I(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[l](t * a + i.byteOffset, r, !0)
								}(this, t, e)
							},
							enumerable: !0
						})
					};
				N ? o && (m = t((function(e, t, n, r) {
					return c(e, m, s), k(g(t) ? G(t) ? void 0 !== r ? new _(t, p(n, a), r) : void 0 !== n ? new _(t, p(n, a)) : new _(t) : H(t) ? z(m, t) : S.call(m, t) : new _(h(t)), e, m)
				})), y && y(m, F), w(A(_), (function(e) {
					e in m || f(m, e, _[e])
				})), m.prototype = b) : (m = t((function(e, t, n, r) {
					c(e, m, s);
					var i, o, u, l = 0,
						f = 0;
					if (g(t)) {
						if (!G(t)) return H(t) ? z(m, t) : S.call(m, t);
						i = t, f = p(n, a);
						var _ = t.byteLength;
						if (void 0 === r) {
							if (_ % a) throw L(V);
							if ((o = _ - f) < 0) throw L(V)
						} else if ((o = d(r) * a) + f > _) throw L(V);
						u = o / a
					} else u = h(t), i = new D(o = u * a);
					for (x(e, {
							buffer: i,
							byteOffset: f,
							byteLength: o,
							length: u,
							view: new B(i)
						}); l < u;) C(e, l++)
				})), y && y(m, F), b = m.prototype = v(U)), b.constructor !== m && f(b, "constructor", m), R && f(b, R, s), T[s] = m, r({
					global: !0,
					forced: m != _,
					sham: !N
				}, T), Y in m || f(m, Y, a), Y in b || f(b, Y, a), E(s)
			}) : e.exports = function() {}
		},
		7594: function(e, t, n) {
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
			}), t.FontFamilySelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingsfontfamilyselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("monospacedserif", a.i18n.getLocalizer("settings.subtitles.font.family.monospacedserif")), this.addItem("proportionalserif", a.i18n.getLocalizer("settings.subtitles.font.family.proportionalserif")), this.addItem("monospacedsansserif", a.i18n.getLocalizer("settings.subtitles.font.family.monospacedsansserif")), this.addItem("proportionalsansserif", a.i18n.getLocalizer("settings.subtitles.font.family.proportionalserif")), this.addItem("casual", a.i18n.getLocalizer("settings.subtitles.font.family.casual")), this.addItem("cursive", a.i18n.getLocalizer("settings.subtitles.font.family.cursive")), this.addItem("smallcapital", a.i18n.getLocalizer("settings.subtitles.font.family.smallcapital")), this.settingsManager.fontFamily.onChanged.subscribe((function(e, t) {
							t.isSet() ? r.toggleOverlayClass("fontfamily-" + t.value) : r.toggleOverlayClass(null), r.selectItem(t.value)
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.fontFamily.value = t
						})), this.settingsManager.fontFamily.isSet() && this.selectItem(this.settingsManager.fontFamily.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.FontFamilySelectBox = o
		},
		"75a4": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getMinBufferLevel = void 0, t.getMinBufferLevel = function(e) {
				var t = e.getDuration(),
					n = e.getVideoBufferLength(),
					r = e.getAudioBufferLength(),
					i = Math.min(null != n ? n : Number.MAX_VALUE, null != r ? r : Number.MAX_VALUE);
				return i === Number.MAX_VALUE && (i = 0), 100 / t * i
			}
		},
		7661: function(e, t, n) {
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
			}), t.CastUIContainer = void 0;
			var i = n("b491"),
				a = n("c6d3"),
				o = function(e) {
					function t(t) {
						return e.call(this, t) || this
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = this.getConfig(),
							o = !1;
						this.castUiHideTimeout = new a.Timeout(i.hideDelay, (function() {
							n.onControlsHide.dispatch(r), o = !1
						}));
						var s = function() {
								o || (n.onControlsShow.dispatch(r), o = !0)
							},
							u = function() {
								s(), r.castUiHideTimeout.clear()
							},
							c = function() {
								s(), r.castUiHideTimeout.start()
							};
						t.on(t.exports.PlayerEvent.Play, c), t.on(t.exports.PlayerEvent.Paused, u), t.on(t.exports.PlayerEvent.Seek, u), t.on(t.exports.PlayerEvent.Seeked, (function() {
							t.isPlaying() ? c() : u()
						})), n.getConfig().events.onUpdated.subscribe(c)
					}, t.prototype.release = function() {
						e.prototype.release.call(this), this.castUiHideTimeout.clear()
					}, t
				}(i.UIContainer);
			t.CastUIContainer = o
		},
		"77a7": function(e, t) {
			var n = Math.abs,
				r = Math.pow,
				i = Math.floor,
				a = Math.log,
				o = Math.LN2;
			e.exports = {
				pack: function(e, t, s) {
					var u, c, l, f = new Array(s),
						d = 8 * s - t - 1,
						h = (1 << d) - 1,
						p = h >> 1,
						_ = 23 === t ? r(2, -24) - r(2, -77) : 0,
						m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
						b = 0;
					for ((e = n(e)) != e || e === 1 / 0 ? (c = e != e ? 1 : 0, u = h) : (u = i(a(e) / o), e * (l = r(2, -u)) < 1 && (u--, l *= 2), (e += u + p >= 1 ? _ / l : _ * r(2, 1 - p)) * l >= 2 && (u++, l /= 2), u + p >= h ? (c = 0, u = h) : u + p >= 1 ? (c = (e * l - 1) * r(2, t), u += p) : (c = e * r(2, p - 1) * r(2, t), u = 0)); t >= 8; f[b++] = 255 & c, c /= 256, t -= 8);
					for (u = u << t | c, d += t; d > 0; f[b++] = 255 & u, u /= 256, d -= 8);
					return f[--b] |= 128 * m, f
				},
				unpack: function(e, t) {
					var n, i = e.length,
						a = 8 * i - t - 1,
						o = (1 << a) - 1,
						s = o >> 1,
						u = a - 7,
						c = i - 1,
						l = e[c--],
						f = 127 & l;
					for (l >>= 7; u > 0; f = 256 * f + e[c], c--, u -= 8);
					for (n = f & (1 << -u) - 1, f >>= -u, u += t; u > 0; n = 256 * n + e[c], c--, u -= 8);
					if (0 === f) f = 1 - s;
					else {
						if (f === o) return n ? NaN : l ? -1 / 0 : 1 / 0;
						n += r(2, t), f -= s
					}
					return (l ? -1 : 1) * n * r(2, f - t)
				}
			}
		},
		7839: function(e, t) {
			e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
		},
		7851: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Socket = void 0;
			const r = n("8205"),
				i = n("072b"),
				a = n("e13a"),
				o = n("c7b0")("socket.io-client:socket"),
				s = Object.freeze({
					connect: 1,
					connect_error: 1,
					disconnect: 1,
					disconnecting: 1,
					newListener: 1,
					removeListener: 1
				});
			class u extends a.StrictEventEmitter {
				constructor(e, t, n) {
					super(), this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.auth && (this.auth = n.auth), this.io._autoConnect && this.open()
				}
				subEvents() {
					if (this.subs) return;
					const e = this.io;
					this.subs = [i.on(e, "open", this.onopen.bind(this)), i.on(e, "packet", this.onpacket.bind(this)), i.on(e, "error", this.onerror.bind(this)), i.on(e, "close", this.onclose.bind(this))]
				}
				get active() {
					return !!this.subs
				}
				connect() {
					return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
				}
				open() {
					return this.connect()
				}
				send(...e) {
					return e.unshift("message"), this.emit.apply(this, e), this
				}
				emit(e, ...t) {
					if (s.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
					t.unshift(e);
					const n = {
						type: r.PacketType.EVENT,
						data: t,
						options: {}
					};
					n.options.compress = !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (o("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++);
					const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
					return this.flags.volatile && (!i || !this.connected) ? o("discard packet as the transport is not currently writable") : this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
				}
				packet(e) {
					e.nsp = this.nsp, this.io._packet(e)
				}
				onopen() {
					o("transport is open - connecting"), "function" == typeof this.auth ? this.auth(e => {
						this.packet({
							type: r.PacketType.CONNECT,
							data: e
						})
					}) : this.packet({
						type: r.PacketType.CONNECT,
						data: this.auth
					})
				}
				onerror(e) {
					this.connected || this.emitReserved("connect_error", e)
				}
				onclose(e) {
					o("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", e)
				}
				onpacket(e) {
					if (e.nsp === this.nsp) switch (e.type) {
						case r.PacketType.CONNECT:
							if (e.data && e.data.sid) {
								const t = e.data.sid;
								this.onconnect(t)
							} else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
							break;
						case r.PacketType.EVENT:
						case r.PacketType.BINARY_EVENT:
							this.onevent(e);
							break;
						case r.PacketType.ACK:
						case r.PacketType.BINARY_ACK:
							this.onack(e);
							break;
						case r.PacketType.DISCONNECT:
							this.ondisconnect();
							break;
						case r.PacketType.CONNECT_ERROR:
							const t = new Error(e.data.message);
							t.data = e.data.data, this.emitReserved("connect_error", t)
					}
				}
				onevent(e) {
					const t = e.data || [];
					o("emitting event %j", t), null != e.id && (o("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
				}
				emitEvent(e) {
					if (this._anyListeners && this._anyListeners.length) {
						const t = this._anyListeners.slice();
						for (const n of t) n.apply(this, e)
					}
					super.emit.apply(this, e)
				}
				ack(e) {
					const t = this;
					let n = !1;
					return function(...i) {
						n || (n = !0, o("sending ack %j", i), t.packet({
							type: r.PacketType.ACK,
							id: e,
							data: i
						}))
					}
				}
				onack(e) {
					const t = this.acks[e.id];
					"function" == typeof t ? (o("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : o("bad ack %s", e.id)
				}
				onconnect(e) {
					o("socket connected with id %s", e), this.id = e, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
				}
				emitBuffered() {
					this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => this.packet(e)), this.sendBuffer = []
				}
				ondisconnect() {
					o("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
				}
				destroy() {
					this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
				}
				disconnect() {
					return this.connected && (o("performing disconnect (%s)", this.nsp), this.packet({
						type: r.PacketType.DISCONNECT
					})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
				}
				close() {
					return this.disconnect()
				}
				compress(e) {
					return this.flags.compress = e, this
				}
				get volatile() {
					return this.flags.volatile = !0, this
				}
				onAny(e) {
					return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
				}
				prependAny(e) {
					return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
				}
				offAny(e) {
					if (!this._anyListeners) return this;
					if (e) {
						const t = this._anyListeners;
						for (let n = 0; n < t.length; n++)
							if (e === t[n]) return t.splice(n, 1), this
					} else this._anyListeners = [];
					return this
				}
				listenersAny() {
					return this._anyListeners || []
				}
			}
			t.Socket = u
		},
		"7a77": function(e, t, n) {
			"use strict";

			function r(e) {
				this.message = e
			}
			r.prototype.toString = function() {
				return "Cancel" + (this.message ? ": " + this.message : "")
			}, r.prototype.__CANCEL__ = !0, e.exports = r
		},
		"7aac": function(e, t, n) {
			"use strict";
			var r = n("c532");
			e.exports = r.isStandardBrowserEnv() ? {
				write: function(e, t, n, i, a, o) {
					var s = [];
					s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(a) && s.push("domain=" + a), !0 === o && s.push("secure"), document.cookie = s.join("; ")
				},
				read: function(e) {
					var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return t ? decodeURIComponent(t[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			} : {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		},
		"7b0b": function(e, t, n) {
			var r = n("1d80");
			e.exports = function(e) {
				return Object(r(e))
			}
		},
		"7bcf": function(e, t, n) {
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
			}), t.AdClickOverlay = void 0;
			var i = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return r(t, e), t.prototype.configure = function(t, n) {
					var r = this;
					e.prototype.configure.call(this, t, n);
					var i = null;
					t.on(t.exports.PlayerEvent.AdStarted, (function(e) {
						var t = e.ad;
						r.setUrl(t.clickThroughUrl), i = t.clickThroughUrlOpened
					}));
					var a = function() {
						r.setUrl(null)
					};
					t.on(t.exports.PlayerEvent.AdFinished, a), t.on(t.exports.PlayerEvent.AdSkipped, a), t.on(t.exports.PlayerEvent.AdError, a), this.onClick.subscribe((function() {
						t.pause("ui-ad-click-overlay"), i && i()
					}))
				}, t
			}(n("d1af").ClickOverlay);
			t.AdClickOverlay = i
		},
		"7be6": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
					n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

				function r(e) {
					return e > 1 && e < 5
				}

				function i(e, t, n, i) {
					var a = e + " ";
					switch (n) {
						case "s":
							return t || i ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
						case "ss":
							return t || i ? a + (r(e) ? "sekundy" : "sekÃºnd") : a + "sekundami";
						case "m":
							return t ? "minÃºta" : i ? "minÃºtu" : "minÃºtou";
						case "mm":
							return t || i ? a + (r(e) ? "minÃºty" : "minÃºt") : a + "minÃºtami";
						case "h":
							return t ? "hodina" : i ? "hodinu" : "hodinou";
						case "hh":
							return t || i ? a + (r(e) ? "hodiny" : "hodÃ­n") : a + "hodinami";
						case "d":
							return t || i ? "deÅˆ" : "dÅˆom";
						case "dd":
							return t || i ? a + (r(e) ? "dni" : "dnÃ­") : a + "dÅˆami";
						case "M":
							return t || i ? "mesiac" : "mesiacom";
						case "MM":
							return t || i ? a + (r(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
						case "y":
							return t || i ? "rok" : "rokom";
						case "yy":
							return t || i ? a + (r(e) ? "roky" : "rokov") : a + "rokmi"
					}
				}
				e.defineLocale("sk", {
					months: t,
					monthsShort: n,
					weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
					weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
					weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[dnes o] LT",
						nextDay: "[zajtra o] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v nedeÄ¾u o] LT";
								case 1:
								case 2:
									return "[v] dddd [o] LT";
								case 3:
									return "[v stredu o] LT";
								case 4:
									return "[vo Å¡tvrtok o] LT";
								case 5:
									return "[v piatok o] LT";
								case 6:
									return "[v sobotu o] LT"
							}
						},
						lastDay: "[vÄera o] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[minulÃº nedeÄ¾u o] LT";
								case 1:
								case 2:
									return "[minulÃ½] dddd [o] LT";
								case 3:
									return "[minulÃº stredu o] LT";
								case 4:
								case 5:
									return "[minulÃ½] dddd [o] LT";
								case 6:
									return "[minulÃº sobotu o] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {

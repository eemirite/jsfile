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
								a = this.localValue;
							return a = me(a) ? t ? "-" : "" : a.toLocaleString(n, r), t ? "".concat(a, "/").concat(i) : a
						}
					},
					watch: (am = {}, _m(am, vm, (function(e, t) {
						if (e !== t) {
							var n = Ri(e, null);
							this.localValue = me(n) ? null : Sm(n, 0, this.computedStars)
						}
					})), _m(am, "localValue", (function(e, t) {
						e !== t && e !== (this.value || 0) && this.$emit(ym, e || null)
					})), _m(am, "disabled", (function(e) {
						e && (this.hasFocus = !1, this.blur())
					})), am),
					methods: {
						focus: function() {
							this.disabled || Oa(this.$el)
						},
						blur: function() {
							this.disabled || xa(this.$el)
						},
						onKeydown: function(e) {
							var t = e.keyCode;
							if (this.isInteractive && Mi([Rs, Ls, Fs, js], t)) {
								oo(e, {
									propagation: !1
								});
								var n = Ni(this.localValue, 0),
									r = this.showClear ? 0 : 1,
									i = this.computedStars,
									a = this.isRTL ? -1 : 1;
								t === Rs ? this.localValue = Sm(n - a, r, i) || null : t === Fs ? this.localValue = Sm(n + a, r, i) : t === Ls ? this.localValue = Sm(n - 1, r, i) || null : t === js && (this.localValue = Sm(n + 1, r, i))
							}
						},
						onSelected: function(e) {
							this.isInteractive && (this.localValue = e)
						},
						onFocus: function(e) {
							this.hasFocus = !!this.isInteractive && "focus" === e.type
						},
						renderIcon: function(e) {
							return this.$createElement(Is, {
								props: {
									icon: e,
									variant: this.disabled || this.color ? null : this.variant || null
								}
							})
						},
						iconEmptyFn: function() {
							return this.renderIcon(this.iconEmpty)
						},
						iconHalfFn: function() {
							return this.renderIcon(this.iconHalf)
						},
						iconFullFn: function() {
							return this.renderIcon(this.iconFull)
						},
						iconClearFn: function() {
							return this.$createElement(Is, {
								props: {
									icon: this.iconClear
								}
							})
						}
					},
					render: function(e) {
						var t = this,
							n = this.disabled,
							r = this.readonly,
							i = this.name,
							a = this.form,
							o = this.inline,
							s = this.variant,
							u = this.color,
							c = this.noBorder,
							l = this.hasFocus,
							f = this.computedRating,
							d = this.computedStars,
							h = this.formattedRating,
							p = this.showClear,
							_ = this.isRTL,
							m = this.isInteractive,
							b = this.$scopedSlots,
							g = [];
						if (p && !n && !r) {
							var v = e("span", {
								staticClass: "b-rating-icon"
							}, [(b["icon-clear"] || this.iconClearFn)()]);
							g.push(e("span", {
								staticClass: "b-rating-star b-rating-star-clear flex-grow-1",
								class: {
									focused: l && 0 === f
								},
								attrs: {
									tabindex: m ? "-1" : null
								},
								on: {
									click: function() {
										return t.onSelected(null)
									}
								},
								key: "clear"
							}, [v]))
						}
						for (var y = 0; y < d; y++) {
							var A = y + 1;
							g.push(e(wm, {
								staticClass: "flex-grow-1",
								style: u && !n ? {
									color: u
								} : {},
								props: {
									rating: f,
									star: A,
									variant: n ? null : s || null,
									disabled: n,
									readonly: r,
									focused: l,
									hasClear: p
								},
								on: {
									selected: this.onSelected
								},
								scopedSlots: {
									empty: b["icon-empty"] || this.iconEmptyFn,
									half: b["icon-half"] || this.iconHalfFn,
									full: b["icon-full"] || this.iconFullFn
								},
								key: y
							}))
						}
						return i && g.push(e("input", {
							attrs: {
								type: "hidden",
								value: me(this.localValue) ? "" : f,
								name: i,
								form: a || null
							},
							key: "hidden"
						})), this.showValue && g.push(e("b", {
							staticClass: "b-rating-value flex-grow-1",
							attrs: {
								"aria-hidden": "true"
							},
							key: "value"
						}, zi(h))), e("output", {
							staticClass: "b-rating form-control align-items-center",
							class: [{
								"d-inline-flex": o,
								"d-flex": !o,
								"border-0": c,
								disabled: n,
								readonly: !n && r
							}, this.sizeFormClass],
							attrs: {
								id: this.safeId(),
								dir: _ ? "rtl" : "ltr",
								tabindex: n ? null : "0",
								disabled: n,
								role: "slider",
								"aria-disabled": n ? "true" : null,
								"aria-readonly": !n && r ? "true" : null,
								"aria-live": "off",
								"aria-valuemin": p ? "0" : "1",
								"aria-valuemax": zi(d),
								"aria-valuenow": f ? zi(f) : null
							},
							on: {
								keydown: this.onKeydown,
								focus: this.onFocus,
								blur: this.onFocus
							}
						}, g)
					}
				}),
				Cm = lt({
					components: {
						BFormRating: Tm,
						BRating: Tm
					}
				}),
				$m = Ja("value"),
				km = $m.mixin,
				Om = $m.props,
				xm = $m.prop,
				Pm = $m.event;

			function Mm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Im(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Mm(Object(n), !0).forEach((function(t) {
						Lm(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Lm(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Dm = qa(He(Im(Im({}, Eh), {}, {
					labelField: Va(Jr, "label"),
					optionsField: Va(Jr, "options")
				})), "formOptions"),
				Bm = r.default.extend({
					mixins: [Th],
					props: Dm,
					methods: {
						normalizeOption: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (Te(e)) {
								var n = Xe(e, this.valueField),
									r = Xe(e, this.textField),
									i = Xe(e, this.optionsField, null);
								return me(i) ? {
									value: _e(n) ? t || r : n,
									text: String(_e(r) ? t : r),
									html: Xe(e, this.htmlField),
									disabled: Boolean(Xe(e, this.disabledField))
								} : {
									label: String(Xe(e, this.labelField) || r),
									options: this.normalizeOptions(i)
								}
							}
							return {
								value: t || e,
								text: String(e),
								disabled: !1
							}
						}
					}
				}),
				Nm = qa({
					disabled: Va(Qr, !1),
					value: Va(Vr, void 0, !0)
				}, bn),
				Rm = r.default.extend({
					name: bn,
					functional: !0,
					props: Nm,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.value;
						return e("option", St(r, {
							attrs: {
								disabled: n.disabled
							},
							domProps: {
								value: a
							}
						}), i)
					}
				});

			function Fm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Um(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Fm(Object(n), !0).forEach((function(t) {
						jm(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function jm(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Hm = qa(He(Um(Um({}, Eh), {}, {
					label: Va(Jr, void 0, !0)
				})), gn),
				Ym = r.default.extend({
					name: gn,
					mixins: [to, Th],
					props: Hm,
					render: function(e) {
						var t = this.label,
							n = this.formOptions.map((function(t, n) {
								var r = t.value,
									i = t.text,
									a = t.html,
									o = t.disabled;
								return e(Rm, {
									attrs: {
										value: r,
										disabled: o
									},
									domProps: Fu(a, i),
									key: "option_".concat(n)
								})
							}));
						return e("optgroup", {
							attrs: {
								label: t
							}
						}, [this.normalizeSlot(bi), n, this.normalizeSlot()])
					}
				});

			function Vm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function zm(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Vm(Object(n), !0).forEach((function(t) {
						Qm(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Qm(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Gm, qm = qa(He(zm(zm(zm(zm(zm(zm(zm({}, Nc), Om), zh), Gh), Wh), Xh), {}, {
					ariaInvalid: Va(ai, !1),
					multiple: Va(Qr, !1),
					selectSize: Va(Wr, 0)
				})), mn),
				Wm = r.default.extend({
					name: mn,
					mixins: [Rc, km, Qh, Kh, Jh, qh, Bm, to],
					props: qm,
					data: function() {
						return {
							localValue: this[xm]
						}
					},
					computed: {
						computedSelectSize: function() {
							return this.plain || 0 !== this.selectSize ? this.selectSize : null
						},
						inputClass: function() {
							return [this.plain ? "form-control" : "custom-select", this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass]
						}
					},
					watch: {
						value: function(e) {
							this.localValue = e
						},
						localValue: function() {
							this.$emit(Pm, this.localValue)
						}
					},
					methods: {
						focus: function() {
							Oa(this.$refs.input)
						},
						blur: function() {
							xa(this.$refs.input)
						},
						onChange: function(e) {
							var t = this,
								n = e.target,
								r = Pi(n.options).filter((function(e) {
									return e.selected
								})).map((function(e) {
									return "_value" in e ? e._value : e.value
								}));
							this.localValue = n.multiple ? r : r[0], this.$nextTick((function() {
								t.$emit(dr, t.localValue)
							}))
						}
					},
					render: function(e) {
						var t = this.name,
							n = this.disabled,
							r = this.required,
							i = this.computedSelectSize,
							a = this.localValue,
							o = this.formOptions.map((function(t, n) {
								var r = t.value,
									i = t.label,
									a = t.options,
									o = t.disabled,
									s = "option_".concat(n);
								return we(a) ? e(Ym, {
									props: {
										label: i,
										options: a
									},
									key: s
								}) : e(Rm, {
									props: {
										value: r,
										disabled: o
									},
									domProps: Fu(t.html, t.text),
									key: s
								})
							}));
						return e("select", {
							class: this.inputClass,
							attrs: {
								id: this.safeId(),
								name: t,
								form: this.form || null,
								multiple: this.multiple || null,
								size: i,
								disabled: n,
								required: r,
								"aria-required": r ? "true" : null,
								"aria-invalid": this.computedAriaInvalid
							},
							on: {
								change: this.onChange
							},
							directives: [{
								name: "model",
								value: a
							}],
							ref: "input"
						}, [this.normalizeSlot(bi), o, this.normalizeSlot()])
					}
				}),
				Km = lt({
					components: {
						BFormSelect: Wm,
						BFormSelectOption: Rm,
						BFormSelectOptionGroup: Ym,
						BSelect: Wm,
						BSelectOption: Rm,
						BSelectOptionGroup: Ym
					}
				});

			function Xm(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Jm(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Xm(Object(n), !0).forEach((function(t) {
						Zm(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xm(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Zm(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var eb = Ja("value", {
					type: ri
				}),
				tb = eb.mixin,
				nb = eb.props,
				rb = eb.prop,
				ib = eb.event,
				ab = [js, Ls, Ns, Ds, 33, 34],
				ob = qa(He(Jm(Jm(Jm(Jm(Jm(Jm({}, Nc), nb), je(zh, ["required", "autofocus"])), Wh), Xh), {}, {
					ariaControls: Va(Jr),
					ariaLabel: Va(Jr),
					formatterFn: Va(qr),
					inline: Va(Qr, !1),
					labelDecrement: Va(Jr, "Decrement"),
					labelIncrement: Va(Jr, "Increment"),
					locale: Va(ni),
					max: Va(ui, 100),
					min: Va(ui, 1),
					placeholder: Va(Jr),
					readonly: Va(Qr, !1),
					repeatDelay: Va(ui, 500),
					repeatInterval: Va(ui, 100),
					repeatStepMultiplier: Va(ui, 4),
					repeatThreshold: Va(ui, 10),
					step: Va(ui, 1),
					vertical: Va(Qr, !1),
					wrap: Va(Qr, !1)
				})), vn),
				sb = r.default.extend({
					name: vn,
					mixins: [Gs, Rc, tb, Kh, Jh, to],
					inheritAttrs: !1,
					props: ob,
					data: function() {
						return {
							localValue: Ri(this[rb], null),
							hasFocus: !1
						}
					},
					computed: {
						spinId: function() {
							return this.safeId()
						},
						computedInline: function() {
							return this.inline && !this.vertical
						},
						computedReadonly: function() {
							return this.readonly && !this.disabled
						},
						computedRequired: function() {
							return this.required && !this.computedReadonly && !this.disabled
						},
						computedStep: function() {
							return Ri(this.step, 1)
						},
						computedMin: function() {
							return Ri(this.min, 1)
						},
						computedMax: function() {
							var e = Ri(this.max, 100),
								t = this.computedStep,
								n = this.computedMin;
							return Ro((e - n) / t) * t + n
						},
						computedDelay: function() {
							var e = Ni(this.repeatDelay, 0);
							return e > 0 ? e : 500
						},
						computedInterval: function() {
							var e = Ni(this.repeatInterval, 0);
							return e > 0 ? e : 100
						},
						computedThreshold: function() {
							return Do(Ni(this.repeatThreshold, 10), 1)
						},
						computedStepMultiplier: function() {
							return Do(Ni(this.repeatStepMultiplier, 4), 1)
						},
						computedPrecision: function() {
							var e = this.computedStep;
							return Ro(e) === e ? 0 : (e.toString().split(".")[1] || "").length
						},
						computedMultiplier: function() {
							return Fo(10, this.computedPrecision || 0)
						},
						valueAsFixed: function() {
							var e = this.localValue;
							return me(e) ? "" : e.toFixed(this.computedPrecision)
						},
						computedLocale: function() {
							var e = Ii(this.locale).filter(We);
							return new Intl.NumberFormat(e).resolvedOptions().locale
						},
						computedRTL: function() {
							return Bc(this.computedLocale)
						},
						defaultFormatter: function() {
							var e = this.computedPrecision;
							return new Intl.NumberFormat(this.computedLocale, {
								style: "decimal",
								useGrouping: !1,
								minimumIntegerDigits: 1,
								minimumFractionDigits: e,
								maximumFractionDigits: e,
								notation: "standard"
							}).format
						},
						computedFormatter: function() {
							var e = this.formatterFn;
							return Ka(e) ? e : this.defaultFormatter
						},
						computedAttrs: function() {
							return Jm(Jm({}, this.bvAttrs), {}, {
								role: "group",
								lang: this.computedLocale,
								tabindex: this.disabled ? null : "-1",
								title: this.ariaLabel
							})
						},
						computedSpinAttrs: function() {
							var e = this.spinId,
								t = this.localValue,
								n = this.computedRequired,
								r = this.disabled,
								i = this.state,
								a = this.computedFormatter,
								o = !me(t);
							return Jm(Jm({
								dir: this.computedRTL ? "rtl" : "ltr"
							}, this.bvAttrs), {}, {
								id: e,
								role: "spinbutton",
								tabindex: r ? null : "0",
								"aria-live": "off",
								"aria-label": this.ariaLabel || null,
								"aria-controls": this.ariaControls || null,
								"aria-invalid": !1 === i || !o && n ? "true" : null,
								"aria-required": n ? "true" : null,
								"aria-valuemin": zi(this.computedMin),
								"aria-valuemax": zi(this.computedMax),
								"aria-valuenow": o ? t : null,
								"aria-valuetext": o ? a(t) : null
							})
						}
					},
					watch: (Gm = {}, Zm(Gm, rb, (function(e) {
						this.localValue = Ri(e, null)
					})), Zm(Gm, "localValue", (function(e) {
						this.$emit(ib, e)
					})), Zm(Gm, "disabled", (function(e) {
						e && this.clearRepeat()
					})), Zm(Gm, "readonly", (function(e) {
						e && this.clearRepeat()
					})), Gm),
					created: function() {
						this.$_autoDelayTimer = null, this.$_autoRepeatTimer = null, this.$_keyIsDown = !1
					},
					beforeDestroy: function() {
						this.clearRepeat()
					},
					deactivated: function() {
						this.clearRepeat()
					},
					methods: {
						focus: function() {
							this.disabled || Oa(this.$refs.spinner)
						},
						blur: function() {
							this.disabled || xa(this.$refs.spinner)
						},
						emitChange: function() {
							this.$emit(dr, this.localValue)
						},
						stepValue: function(e) {
							var t = this.localValue;
							if (!this.disabled && !me(t)) {
								var n = this.computedStep * e,
									r = this.computedMin,
									i = this.computedMax,
									a = this.computedMultiplier,
									o = this.wrap;
								t = Uo((t - r) / n) * n + r + n, t = Uo(t * a) / a, this.localValue = t > i ? o ? r : i : t < r ? o ? i : r : t
							}
						},
						onFocusBlur: function(e) {
							this.disabled ? this.hasFocus = !1 : this.hasFocus = "focus" === e.type
						},
						stepUp: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
								t = this.localValue;
							me(t) ? this.localValue = this.computedMin : this.stepValue(1 * e)
						},
						stepDown: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
								t = this.localValue;
							me(t) ? this.localValue = this.wrap ? this.computedMax : this.computedMin : this.stepValue(-1 * e)
						},
						onKeydown: function(e) {
							var t = e.keyCode,
								n = e.altKey,
								r = e.ctrlKey,
								i = e.metaKey;
							if (!(this.disabled || this.readonly || n || r || i) && Mi(ab, t)) {
								if (oo(e, {
										propagation: !1
									}), this.$_keyIsDown) return;
								this.resetTimers(), Mi([js, Ls], t) ? (this.$_keyIsDown = !0, t === js ? this.handleStepRepeat(e, this.stepUp) : t === Ls && this.handleStepRepeat(e, this.stepDown)) : 33 === t ? this.stepUp(this.computedStepMultiplier) : 34 === t ? this.stepDown(this.computedStepMultiplier) : t === Ns ? this.localValue = this.computedMin : t === Ds && (this.localValue = this.computedMax)
							}
						},
						onKeyup: function(e) {
							var t = e.keyCode,
								n = e.altKey,
								r = e.ctrlKey,
								i = e.metaKey;
							this.disabled || this.readonly || n || r || i || Mi(ab, t) && (oo(e, {
								propagation: !1
							}), this.resetTimers(), this.$_keyIsDown = !1, this.emitChange())
						},
						handleStepRepeat: function(e, t) {
							var n = this,
								r = e || {},
								i = r.type,
								a = r.button;
							if (!this.disabled && !this.readonly) {
								if ("mousedown" === i && a) return;
								this.resetTimers(), t(1);
								var o = this.computedThreshold,
									s = this.computedStepMultiplier,
									u = this.computedDelay,
									c = this.computedInterval;
								this.$_autoDelayTimer = setTimeout((function() {
									var e = 0;
									n.$_autoRepeatTimer = setInterval((function() {
										t(e < o ? 1 : s), e++
									}), c)
								}), u)
							}
						},
						onMouseup: function(e) {
							var t = e || {},
								n = t.type,
								r = t.button;
							"mouseup" === n && r || (oo(e, {
								propagation: !1
							}), this.resetTimers(), this.setMouseup(!1), this.emitChange())
						},
						setMouseup: function(e) {
							try {
								ao(e, document.body, "mouseup", this.onMouseup, !1), ao(e, document.body, "touchend", this.onMouseup, !1)
							} catch (e) {}
						},
						resetTimers: function() {
							clearTimeout(this.$_autoDelayTimer), clearInterval(this.$_autoRepeatTimer), this.$_autoDelayTimer = null, this.$_autoRepeatTimer = null
						},
						clearRepeat: function() {
							this.resetTimers(), this.setMouseup(!1), this.$_keyIsDown = !1
						}
					},
					render: function(e) {
						var t = this,
							n = this.spinId,
							r = this.localValue,
							i = this.computedInline,
							a = this.computedReadonly,
							o = this.vertical,
							s = this.disabled,
							u = this.computedFormatter,
							c = !me(r),
							l = function(r, i, u, c, l, f, d) {
								var h = e(u, {
										props: {
											scale: t.hasFocus ? 1.5 : 1.25
										},
										attrs: {
											"aria-hidden": "true"
										}
									}),
									p = {
										hasFocus: t.hasFocus
									},
									_ = function(e) {
										s || a || (oo(e, {
											propagation: !1
										}), t.setMouseup(!0), Oa(e.currentTarget), t.handleStepRepeat(e, r))
									};
								return e("button", {
									staticClass: "btn btn-sm border-0 rounded-0",
									class: {
										"py-0": !o
									},
									attrs: {
										tabindex: "-1",
										type: "button",
										disabled: s || a || f,
										"aria-disabled": s || a || f ? "true" : null,
										"aria-controls": n,
										"aria-label": i || null,
										"aria-keyshortcuts": l || null
									},
									on: {
										mousedown: _,
										touchstart: _
									},
									key: c || null,
									ref: c
								}, [t.normalizeSlot(d, p) || h])
							},
							f = l(this.stepUp, this.labelIncrement, ws, "inc", "ArrowUp", !1, "increment"),
							d = l(this.stepDown, this.labelDecrement, As, "dec", "ArrowDown", !1, "decrement"),
							h = e();
						this.name && !s && (h = e("input", {
							attrs: {
								type: "hidden",
								name: this.name,
								form: this.form || null,
								value: this.valueAsFixed
							},
							key: "hidden"
						}));
						var p = e("output", {
							staticClass: "flex-grow-1",
							class: {
								"d-flex": o, "align-self-center": !o, "align-items-center": o, "border-top": o, "border-bottom": o, "border-left": !o, "border-right": !o
							},
							attrs: this.computedSpinAttrs,
							key: "output",
							ref: "spinner"
						}, [e("bdi", c ? u(r) : this.placeholder || "")]);
						return e("div", {
							staticClass: "b-form-spinbutton form-control",
							class: [{
								disabled: s,
								readonly: a,
								focus: this.hasFocus,
								"d-inline-flex": i || o,
								"d-flex": !i && !o,
								"align-items-stretch": !o,
								"flex-column": o
							}, this.sizeFormClass, this.stateClass],
							attrs: this.computedAttrs,
							on: {
								keydown: this.onKeydown,
								keyup: this.onKeyup,
								"!focus": this.onFocusBlur,
								"!blur": this.onFocusBlur
							}
						}, o ? [f, h, p, d] : [d, h, p, f])
					}
				}),
				ub = lt({
					components: {
						BFormSpinbutton: sb,
						BSpinbutton: sb
					}
				});

			function cb(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function lb(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? cb(Object(n), !0).forEach((function(t) {
						fb(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cb(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function fb(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var db, hb = qa(He(lb(lb({}, Nc), {}, {
					disabled: Va(Qr, !1),
					noRemove: Va(Qr, !1),
					pill: Va(Qr, !1),
					removeLabel: Va(Jr, "Remove tag"),
					tag: Va(Jr, "span"),
					title: Va(Jr),
					variant: Va(Jr, "secondary")
				})), yn),
				pb = r.default.extend({
					name: yn,
					mixins: [Rc, to],
					props: hb,
					methods: {
						onRemove: function(e) {
							var t = e.type,
								n = e.keyCode;
							this.disabled || "click" !== t && ("keydown" !== t || 46 !== n) || this.$emit("remove")
						}
					},
					render: function(e) {
						var t = this.title,
							n = this.tag,
							r = this.variant,
							i = this.pill,
							a = this.disabled,
							o = this.safeId(),
							s = this.safeId("_taglabel_"),
							u = e();
						this.noRemove || a || (u = e(ho, {
							staticClass: "b-form-tag-remove",
							props: {
								ariaLabel: this.removeLabel
							},
							attrs: {
								"aria-controls": o,
								"aria-describedby": s,
								"aria-keyshortcuts": "Delete"
							},
							on: {
								click: this.onRemove,
								keydown: this.onRemove
							}
						}));
						var c = e("span", {
							staticClass: "b-form-tag-content flex-grow-1 text-truncate",
							attrs: {
								id: s
							}
						}, this.normalizeSlot() || t);
						return e(Bu, {
							staticClass: "b-form-tag d-inline-flex align-items-baseline mw-100",
							class: {
								disabled: a
							},
							props: {
								tag: n,
								variant: r,
								pill: i
							},
							attrs: {
								id: o,
								title: t || null,
								"aria-labelledby": s
							}
						}, [c, u])
					}
				});

			function _b(e) {
				return function(e) {
					if (Array.isArray(e)) return mb(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return mb(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mb(e, t) : void 0
					}
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function mb(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function bb(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function gb(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? bb(Object(n), !0).forEach((function(t) {
						vb(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bb(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function vb(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var yb = Ja("value", {
					type: zr,
					defaultValue: []
				}),
				Ab = yb.mixin,
				Sb = yb.props,
				wb = yb.prop,
				Eb = yb.event,
				Tb = ["text", "email", "tel", "url", "number"],
				Cb = [".b-form-tag", "button", "input", "select"].join(" "),
				$b = function(e) {
					return Ii(e).map((function(e) {
						return Qi(zi(e))
					})).filter((function(e, t, n) {
						return e.length > 0 && n.indexOf(e) === t
					}))
				},
				kb = function(e) {
					return ye(e) ? e : $e(e) && e.target.value || ""
				},
				Ob = qa(He(gb(gb(gb(gb(gb(gb({}, Nc), Sb), zh), Wh), Xh), {}, {
					addButtonText: Va(Jr, "Add"),
					addButtonVariant: Va(Jr, "outline-secondary"),
					addOnChange: Va(Qr, !1),
					duplicateTagText: Va(Jr, "Duplicate tag(s)"),
					ignoreInputFocusSelector: Va(ni, Cb),
					inputAttrs: Va(Kr, {}),
					inputClass: Va(ti),
					inputId: Va(Jr),
					inputType: Va(Jr, "text", (function(e) {
						return Mi(Tb, e)
					})),
					invalidTagText: Va(Jr, "Invalid tag(s)"),
					limit: Va(Wr),
					limitTagsText: Va(Jr, "Tag limit reached"),
					noAddOnEnter: Va(Qr, !1),
					noOuterFocus: Va(Qr, !1),
					noTagRemove: Va(Qr, !1),
					placeholder: Va(Jr, "Add tag..."),
					removeOnDelete: Va(Qr, !1),
					separator: Va(ni),
					tagClass: Va(ti),
					tagPills: Va(Qr, !1),
					tagRemoveLabel: Va(Jr, "Remove tag"),
					tagRemovedLabel: Va(Jr, "Tag removed"),
					tagValidator: Va(qr),
					tagVariant: Va(Jr, "secondary")
				})), An),
				xb = r.default.extend({
					name: An,
					mixins: [Rc, Ab, Qh, Kh, Jh, to],
					props: Ob,
					data: function() {
						return {
							hasFocus: !1,
							newTag: "",
							tags: [],
							removedTags: [],
							tagsState: {
								all: [],
								valid: [],
								invalid: [],
								duplicate: []
							}
						}
					},
					computed: {
						computedInputId: function() {
							return this.inputId || this.safeId("__input__")
						},
						computedInputType: function() {
							return Mi(Tb, this.inputType) ? this.inputType : "text"
						},
						computedInputAttrs: function() {
							var e = this.disabled,
								t = this.form;
							return gb(gb({}, this.inputAttrs), {}, {
								id: this.computedInputId,
								value: this.newTag,
								disabled: e,
								form: t
							})
						},
						computedInputHandlers: function() {
							return {
								input: this.onInputInput,
								change: this.onInputChange,
								keydown: this.onInputKeydown,
								reset: this.reset
							}
						},
						computedSeparator: function() {
							return Ii(this.separator).filter(ye).filter(We).join("")
						},
						computedSeparatorRegExp: function() {
							var e = this.computedSeparator;
							return e ? new RegExp("[".concat(function(e) {
								return Vi(e).replace(L, "\\s")
							}(e), "]+")) : null
						},
						computedJoiner: function() {
							var e = this.computedSeparator.charAt(0);
							return " " !== e ? "".concat(e, " ") : e
						},
						computeIgnoreInputFocusSelector: function() {
							return Ii(this.ignoreInputFocusSelector).filter(We).join(",").trim()
						},
						disableAddButton: function() {
							var e = this,
								t = Qi(this.newTag);
							return "" === t || !this.splitTags(t).some((function(t) {
								return !Mi(e.tags, t) && e.validateTag(t)
							}))
						},
						duplicateTags: function() {
							return this.tagsState.duplicate
						},
						hasDuplicateTags: function() {
							return this.duplicateTags.length > 0
						},
						invalidTags: function() {
							return this.tagsState.invalid
						},
						hasInvalidTags: function() {
							return this.invalidTags.length > 0
						},
						isLimitReached: function() {
							var e = this.limit;
							return Ae(e) && e >= 0 && this.tags.length >= e
						}
					},
					watch: (db = {}, vb(db, wb, (function(e) {
						this.tags = $b(e)
					})), vb(db, "tags", (function(e, t) {
						Hs(e, this[wb]) || this.$emit(Eb, e), Hs(e, t) || (e = Ii(e).filter(We), t = Ii(t).filter(We), this.removedTags = t.filter((function(t) {
							return !Mi(e, t)
						})))
					})), vb(db, "tagsState", (function(e, t) {
						Hs(e, t) || this.$emit("tag-state", e.valid, e.invalid, e.duplicate)
					})), db),
					created: function() {
						this.tags = $b(this[wb])
					},
					mounted: function() {
						var e = this,
							t = la("form", this.$el);
						t && (ro(t, "reset", this.reset, Hr), this.$on(Rr, (function() {
							io(t, "reset", e.reset, Hr)
						})))
					},
					methods: {
						addTag: function(e) {
							if (e = ye(e) ? e : this.newTag, !this.disabled && "" !== Qi(e) && !this.isLimitReached) {
								var t = this.parseTags(e);
								if (t.valid.length > 0 || 0 === t.all.length)
									if (ca(this.getInput(), "select")) this.newTag = "";
									else {
										var n = [].concat(_b(t.invalid), _b(t.duplicate));
										this.newTag = t.all.filter((function(e) {
											return Mi(n, e)
										})).join(this.computedJoiner).concat(n.length > 0 ? this.computedJoiner.charAt(0) : "")
									} t.valid.length > 0 && (this.tags = Ii(this.tags, t.valid)), this.tagsState = t, this.focus()
							}
						},
						removeTag: function(e) {
							var t = this;
							this.disabled || (this.tags = this.tags.filter((function(t) {
								return t !== e
							})), this.$nextTick((function() {
								t.focus()
							})))
						},
						reset: function() {
							var e = this;
							this.newTag = "", this.tags = [], this.$nextTick((function() {
								e.removedTags = [], e.tagsState = {
									all: [],
									valid: [],
									invalid: [],
									duplicate: []
								}
							}))
						},
						onInputInput: function(e) {
							if (!(this.disabled || $e(e) && e.target.composing)) {
								var t = kb(e),
									n = this.computedSeparatorRegExp;
								this.newTag !== t && (this.newTag = t), t = function(e) {
									return zi(e).replace(R, "")
								}(t), n && n.test(t.slice(-1)) ? this.addTag() : this.tagsState = "" === t ? {
									all: [],
									valid: [],
									invalid: [],
									duplicate: []
								} : this.parseTags(t)
							}
						},
						onInputChange: function(e) {
							if (!this.disabled && this.addOnChange) {
								var t = kb(e);
								this.newTag !== t && (this.newTag = t), this.addTag()
							}
						},
						onInputKeydown: function(e) {
							if (!this.disabled && $e(e)) {
								var t = e.keyCode,
									n = e.target.value || "";
								this.noAddOnEnter || t !== Bs ? !this.removeOnDelete || 8 !== t && 46 !== t || "" !== n || (oo(e, {
									propagation: !1
								}), this.tags = this.tags.slice(0, -1)) : (oo(e, {
									propagation: !1
								}), this.addTag())
							}
						},
						onClick: function(e) {
							var t = this,
								n = this.computeIgnoreInputFocusSelector,
								r = e.target;
							this.disabled || ra(r) || n && la(n, r, !0) || this.$nextTick((function() {
								t.focus()
							}))
						},
						onFocusin: function() {
							this.hasFocus = !0
						},
						onFocusout: function() {
							this.hasFocus = !1
						},
						handleAutofocus: function() {
							var e = this;
							this.$nextTick((function() {
								Ji((function() {
									e.autofocus && !e.disabled && e.focus()
								}))
							}))
						},
						focus: function() {
							this.disabled || Oa(this.getInput())
						},
						blur: function() {
							this.disabled || xa(this.getInput())
						},
						splitTags: function(e) {
							e = zi(e);
							var t = this.computedSeparatorRegExp;
							return (t ? e.split(t) : [e]).map(Qi).filter(We)
						},
						parseTags: function(e) {
							var t = this,
								n = this.splitTags(e),
								r = {
									all: n,
									valid: [],
									invalid: [],
									duplicate: []
								};
							return n.forEach((function(e) {
								Mi(t.tags, e) || Mi(r.valid, e) ? Mi(r.duplicate, e) || r.duplicate.push(e) : t.validateTag(e) ? r.valid.push(e) : Mi(r.invalid, e) || r.invalid.push(e)
							})), r
						},
						validateTag: function(e) {
							var t = this.tagValidator;
							return !Ka(t) || t(e)
						},
						getInput: function() {
							return ua("#".concat(k_(this.computedInputId)), this.$el)
						},
						defaultRender: function(e) {
							var t = e.addButtonText,
								n = e.addButtonVariant,
								r = e.addTag,
								i = e.disableAddButton,
								a = e.disabled,
								o = e.duplicateTagText,
								s = e.inputAttrs,
								u = e.inputClass,
								c = e.inputHandlers,
								l = e.inputType,
								f = e.invalidTagText,
								d = e.isDuplicate,
								h = e.isInvalid,
								p = e.isLimitReached,
								_ = e.limitTagsText,
								m = e.noTagRemove,
								b = e.placeholder,
								g = e.removeTag,
								v = e.tagClass,
								y = e.tagPills,
								A = e.tagRemoveLabel,
								S = e.tagVariant,
								w = e.tags,
								E = this.$createElement,
								T = w.map((function(e) {
									return e = zi(e), E(pb, {
										class: v,
										props: {
											disabled: a,
											noRemove: m,
											pill: y,
											removeLabel: A,
											tag: "li",
											title: e,
											variant: S
										},
										on: {
											remove: function() {
												return g(e)
											}
										},
										key: "tags_".concat(e)
									}, e)
								})),
								C = f && h ? this.safeId("__invalid_feedback__") : null,
								$ = o && d ? this.safeId("__duplicate_feedback__") : null,
								k = _ && p ? this.safeId("__limit_feedback__") : null,
								O = [s["aria-describedby"], C, $, k].filter(We).join(" "),
								x = E("input", {
									staticClass: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
									class: u,
									style: {
										outline: 0,
										minWidth: "5rem"
									},
									attrs: gb(gb({}, s), {}, {
										"aria-describedby": O || null,
										type: l,
										placeholder: b || null
									}),
									domProps: {
										value: s.value
									},
									on: c,
									directives: [{
										name: "model",
										value: s.value
									}],
									ref: "input"
								}),
								P = E(vu, {
									staticClass: "b-form-tags-button py-0",
									class: {
										invisible: i
									},
									style: {
										fontSize: "90%"
									},
									props: {
										disabled: i || p,
										variant: n
									},
									on: {
										click: function() {
											return r()
										}
									},
									ref: "button"
								}, [this.normalizeSlot("add-button-text") || t]),
								M = this.safeId("__tag_list__"),
								I = E("li", {
									staticClass: "b-from-tags-field flex-grow-1",
									attrs: {
										role: "none",
										"aria-live": "off",
										"aria-controls": M
									},
									key: "tags_field"
								}, [E("div", {
									staticClass: "d-flex",
									attrs: {
										role: "group"
									}
								}, [x, P])]),
								L = E("ul", {
									staticClass: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",
									attrs: {
										id: M
									},
									key: "tags_list"
								}, [T, I]),
								D = E();
							if (f || o || _) {
								var B = this.computedJoiner,
									N = E();
								C && (N = E(Nh, {
									props: {
										id: C,
										forceShow: !0
									},
									key: "tags_invalid_feedback"
								}, [this.invalidTagText, ": ", this.invalidTags.join(B)]));
								var R = E();
								$ && (R = E(Dh, {
									props: {
										id: $
									},
									key: "tags_duplicate_feedback"
								}, [this.duplicateTagText, ": ", this.duplicateTags.join(B)]));
								var F = E();
								k && (F = E(Dh, {
									props: {
										id: k
									},
									key: "tags_limit_feedback"
								}, [_])), D = E("div", {
									attrs: {
										"aria-live": "polite",
										"aria-atomic": "true"
									},
									key: "tags_feedback"
								}, [N, R, F])
							}
							return [L, D]
						}
					},
					render: function(e) {
						var t = this.name,
							n = this.disabled,
							r = this.required,
							i = this.form,
							a = this.tags,
							o = this.computedInputId,
							s = this.hasFocus,
							u = this.noOuterFocus,
							c = gb({
								tags: a.slice(),
								inputAttrs: this.computedInputAttrs,
								inputType: this.computedInputType,
								inputHandlers: this.computedInputHandlers,
								removeTag: this.removeTag,
								addTag: this.addTag,
								reset: this.reset,
								inputId: o,
								isInvalid: this.hasInvalidTags,
								invalidTags: this.invalidTags.slice(),
								isDuplicate: this.hasDuplicateTags,
								duplicateTags: this.duplicateTags.slice(),
								isLimitReached: this.isLimitReached,
								disableAddButton: this.disableAddButton
							}, Ue(this.$props, ["addButtonText", "addButtonVariant", "disabled", "duplicateTagText", "form", "inputClass", "invalidTagText", "limit", "limitTagsText", "noTagRemove", "placeholder", "required", "separator", "size", "state", "tagClass", "tagPills", "tagRemoveLabel", "tagVariant"])),
							l = this.normalizeSlot(_i, c) || this.defaultRender(c),
							f = e("output", {
								staticClass: "sr-only",
								attrs: {
									id: this.safeId("__selected_tags__"),
									role: "status",
									for: o,
									"aria-live": s ? "polite" : "off",
									"aria-atomic": "true",
									"aria-relevant": "additions text"
								}
							}, this.tags.join(", ")),
							d = e("div", {
								staticClass: "sr-only",
								attrs: {
									id: this.safeId("__removed_tags__"),
									role: "status",
									"aria-live": s ? "assertive" : "off",
									"aria-atomic": "true"
								}
							}, this.removedTags.length > 0 ? "(".concat(this.tagRemovedLabel, ") ").concat(this.removedTags.join(", ")) : ""),
							h = e();
						if (t && !n) {
							var p = a.length > 0;
							h = (p ? a : [""]).map((function(n) {
								return e("input", {
									class: {
										"sr-only": !p
									},
									attrs: {
										type: p ? "hidden" : "text",
										value: n,
										required: r,
										name: t,
										form: i
									},
									key: "tag_input_".concat(n)
								})
							}))
						}
						return e("div", {
							staticClass: "b-form-tags form-control h-auto",
							class: [{
								focus: s && !u && !n,

								}, a ? [s] : [this.normalizeSlot(), s])
							}
						})
					}
				});

			function pA(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function _A(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? pA(Object(n), !0).forEach((function(t) {
						mA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pA(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function mA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var bA = Ja("value", {
					type: ii,
					defaultValue: null,
					validator: function(e) {
						return !(!me(e) && Ni(e, 0) < 1 && (Ze('"v-model" value must be a number greater than "0"', Gn), 1))
					}
				}),
				gA = bA.mixin,
				vA = bA.props,
				yA = bA.prop,
				AA = bA.event,
				SA = function(e) {
					var t = Ni(e) || 1;
					return t < 1 ? 5 : t
				},
				wA = function(e, t) {
					var n = Ni(e) || 1;
					return n > t ? t : n < 1 ? 1 : n
				},
				EA = function(e) {
					if (e.keyCode === Us) return oo(e, {
						immediatePropagation: !0
					}), e.currentTarget.click(), !1
				},
				TA = qa(He(_A(_A({}, vA), {}, {
					align: Va(Jr, "left"),
					ariaLabel: Va(Jr, "Pagination"),
					disabled: Va(Qr, !1),
					ellipsisClass: Va(ti),
					ellipsisText: Va(Jr, "â€¦"),
					firstClass: Va(ti),
					firstNumber: Va(Qr, !1),
					firstText: Va(Jr, "Â«"),
					hideEllipsis: Va(Qr, !1),
					hideGotoEndButtons: Va(Qr, !1),
					labelFirstPage: Va(Jr, "Go to first page"),
					labelLastPage: Va(Jr, "Go to last page"),
					labelNextPage: Va(Jr, "Go to next page"),
					labelPage: Va(si, "Go to page"),
					labelPrevPage: Va(Jr, "Go to previous page"),
					lastClass: Va(ti),
					lastNumber: Va(Qr, !1),
					lastText: Va(Jr, "Â»"),
					limit: Va(ui, 5, (function(e) {
						return !(Ni(e, 0) < 1 && (Ze('Prop "limit" must be a number greater than "0"', Gn), 1))
					})),
					nextClass: Va(ti),
					nextText: Va(Jr, "â€º"),
					pageClass: Va(ti),
					pills: Va(Qr, !1),
					prevClass: Va(ti),
					prevText: Va(Jr, "â€¹"),
					size: Va(Jr)
				})), "pagination"),
				CA = r.default.extend({
					mixins: [gA, to],
					props: TA,
					data: function() {
						var e = Ni(this[yA], 0);
						return {
							currentPage: e = e > 0 ? e : -1,
							localNumberOfPages: 1,
							localLimit: 5
						}
					},
					computed: {
						btnSize: function() {
							var e = this.size;
							return e ? "pagination-".concat(e) : ""
						},
						alignment: function() {
							var e = this.align;
							return "center" === e ? "justify-content-center" : "end" === e || "right" === e ? "justify-content-end" : "fill" === e ? "text-center" : ""
						},
						styleClass: function() {
							return this.pills ? "b-pagination-pills" : ""
						},
						computedCurrentPage: function() {
							return wA(this.currentPage, this.localNumberOfPages)
						},
						paginationParams: function() {
							var e = this.localLimit,
								t = this.localNumberOfPages,
								n = this.computedCurrentPage,
								r = this.hideEllipsis,
								i = this.firstNumber,
								a = this.lastNumber,
								o = !1,
								s = !1,
								u = e,
								c = 1;
							t <= e ? u = t : n < e - 1 && e > 3 ? (r && !a || (s = !0, u = e - (i ? 0 : 1)), u = Lo(u, e)) : t - n + 2 < e && e > 3 ? (r && !i || (o = !0, u = e - (a ? 0 : 1)), c = t - u + 1) : (e > 3 && (u = e - (r ? 0 : 2), o = !(r && !i), s = !(r && !a)), c = n - Ro(u / 2)), c < 1 ? (c = 1, o = !1) : c > t - u && (c = t - u + 1, s = !1), o && i && c < 4 && (u += 2, c = 1, o = !1);
							var l = c + u - 1;
							return s && a && l > t - 3 && (u += l === t - 2 ? 2 : 3, s = !1), e <= 3 && (i && 1 === c ? u = Lo(u + 1, t, e + 1) : a && t === c + u - 1 && (c = Do(c - 1, 1), u = Lo(t - c + 1, t, e + 1))), {
								showFirstDots: o,
								showLastDots: s,
								numberOfLinks: u = Lo(u, t - c + 1),
								startNumber: c
							}
						},
						pageList: function() {
							var e = this.paginationParams,
								t = e.numberOfLinks,
								n = e.startNumber,
								r = this.computedCurrentPage,
								i = function(e, t) {
									return Li(t, (function(t, n) {
										return {
											number: e + n,
											classes: null
										}
									}))
								}(n, t);
							if (i.length > 3) {
								var a = r - n,
									o = "bv-d-xs-down-none";
								if (0 === a)
									for (var s = 3; s < i.length; s++) i[s].classes = o;
								else if (a === i.length - 1)
									for (var u = 0; u < i.length - 3; u++) i[u].classes = o;
								else {
									for (var c = 0; c < a - 1; c++) i[c].classes = o;
									for (var l = i.length - 1; l > a + 1; l--) i[l].classes = o
								}
							}
							return i
						}
					},
					watch: (lA = {}, mA(lA, yA, (function(e, t) {
						e !== t && (this.currentPage = wA(e, this.localNumberOfPages))
					})), mA(lA, "currentPage", (function(e, t) {
						e !== t && this.$emit(AA, e > 0 ? e : null)
					})), mA(lA, "limit", (function(e, t) {
						e !== t && (this.localLimit = SA(e))
					})), lA),
					created: function() {
						var e = this;
						this.localLimit = SA(this.limit), this.$nextTick((function() {
							e.currentPage = e.currentPage > e.localNumberOfPages ? e.localNumberOfPages : e.currentPage
						}))
					},
					methods: {
						handleKeyNav: function(e) {
							var t = e.keyCode,
								n = e.shiftKey;
							this.isNav || (t === Rs || t === js ? (oo(e, {
								propagation: !1
							}), n ? this.focusFirst() : this.focusPrev()) : t !== Fs && t !== Ls || (oo(e, {
								propagation: !1
							}), n ? this.focusLast() : this.focusNext()))
						},
						getButtons: function() {
							return sa("button.page-link, a.page-link", this.$el).filter((function(e) {
								return ia(e)
							}))
						},
						focusCurrent: function() {
							var e = this;
							this.$nextTick((function() {
								var t = e.getButtons().find((function(t) {
									return Ni(ga(t, "aria-posinset"), 0) === e.computedCurrentPage
								}));
								Oa(t) || e.focusFirst()
							}))
						},
						focusFirst: function() {
							var e = this;
							this.$nextTick((function() {
								var t = e.getButtons().find((function(e) {
									return !aa(e)
								}));
								Oa(t)
							}))
						},
						focusLast: function() {
							var e = this;
							this.$nextTick((function() {
								var t = e.getButtons().reverse().find((function(e) {
									return !aa(e)
								}));
								Oa(t)
							}))
						},
						focusPrev: function() {
							var e = this;
							this.$nextTick((function() {
								var t = e.getButtons(),
									n = t.indexOf(ta());
								n > 0 && !aa(t[n - 1]) && Oa(t[n - 1])
							}))
						},
						focusNext: function() {
							var e = this;
							this.$nextTick((function() {
								var t = e.getButtons(),
									n = t.indexOf(ta());
								n < t.length - 1 && !aa(t[n + 1]) && Oa(t[n + 1])
							}))
						}
					},
					render: function(e) {
						var t = this,
							n = this.disabled,
							r = this.labelPage,
							i = this.ariaLabel,
							a = this.isNav,
							o = this.localNumberOfPages,
							s = this.computedCurrentPage,
							u = this.pageList.map((function(e) {
								return e.number
							})),
							c = this.paginationParams,
							l = c.showFirstDots,
							f = c.showLastDots,
							d = "fill" === this.align,
							h = [],
							p = function(e) {
								return e === s
							},
							_ = this.currentPage < 1,
							m = function(r, i, s, u, c, l, f) {
								var h = n || p(l) || _ || r < 1 || r > o,
									m = r < 1 ? 1 : r > o ? o : r,
									b = {
										disabled: h,
										page: m,
										index: m - 1
									},
									g = t.normalizeSlot(s, b) || zi(u) || e(),
									v = e(h ? "span" : a ? au : "button", {
										staticClass: "page-link",
										class: {
											"flex-grow-1": !a && !h && d
										},
										props: h || !a ? {} : t.linkProps(r),
										attrs: {
											role: a ? null : "menuitem",
											type: a || h ? null : "button",
											tabindex: h || a ? null : "-1",
											"aria-label": i,
											"aria-controls": t.ariaControls || null,
											"aria-disabled": h ? "true" : null
										},
										on: h ? {} : {
											"!click": function(e) {
												t.onClick(e, r)
											},
											keydown: EA
										}
									}, [g]);
								return e("li", {
									key: f,
									staticClass: "page-item",
									class: [{
										disabled: h,
										"flex-fill": d,
										"d-flex": d && !a && !h
									}, c],
									attrs: {
										role: a ? null : "presentation",
										"aria-hidden": h ? "true" : null
									}
								}, [v])
							},
							b = function(n) {
								return e("li", {
									staticClass: "page-item",
									class: ["disabled", "bv-d-xs-down-none", d ? "flex-fill" : "", t.ellipsisClass],
									attrs: {
										role: "separator"
									},
									key: "ellipsis-".concat(n ? "last" : "first")
								}, [e("span", {
									staticClass: "page-link"
								}, [t.normalizeSlot("ellipsis-text") || zi(t.ellipsisText) || e()])])
							},
							g = function(i, s) {
								var u = i.number,
									c = p(u) && !_,
									l = n ? null : c || _ && 0 === s ? "0" : "-1",
									f = {
										role: a ? null : "menuitemradio",
										type: a || n ? null : "button",
										"aria-disabled": n ? "true" : null,
										"aria-controls": t.ariaControls || null,
										"aria-label": Ka(r) ? r(u) : "".concat(ge(r) ? r() : r, " ").concat(u),
										"aria-checked": a ? null : c ? "true" : "false",
										"aria-current": a && c ? "page" : null,
										"aria-posinset": a ? null : u,
										"aria-setsize": a ? null : o,
										tabindex: a ? null : l
									},
									h = zi(t.makePage(u)),
									m = {
										page: u,
										index: u - 1,
										content: h,
										active: c,
										disabled: n
									},
									b = e(n ? "span" : a ? au : "button", {
										props: n || !a ? {} : t.linkProps(u),
										staticClass: "page-link",
										class: {
											"flex-grow-1": !a && !n && d
										},
										attrs: f,
										on: n ? {} : {
											"!click": function(e) {
												t.onClick(e, u)
											},
											keydown: EA
										}
									}, [t.normalizeSlot("page", m) || h]);
								return e("li", {
									staticClass: "page-item",
									class: [{
										disabled: n,
										active: c,
										"flex-fill": d,
										"d-flex": d && !a && !n
									}, i.classes, t.pageClass],
									attrs: {
										role: a ? null : "presentation"
									},
									key: "page-".concat(u)
								}, [b])
							},
							v = e();
						this.firstNumber || this.hideGotoEndButtons || (v = m(1, this.labelFirstPage, "first-text", this.firstText, this.firstClass, 1, "pagination-goto-first")), h.push(v), h.push(m(s - 1, this.labelPrevPage, "prev-text", this.prevText, this.prevClass, 1, "pagination-goto-prev")), h.push(this.firstNumber && 1 !== u[0] ? g({
							number: 1
						}, 0) : e()), h.push(l ? b(!1) : e()), this.pageList.forEach((function(e, n) {
							var r = l && t.firstNumber && 1 !== u[0] ? 1 : 0;
							h.push(g(e, n + r))
						})), h.push(f ? b(!0) : e()), h.push(this.lastNumber && u[u.length - 1] !== o ? g({
							number: o
						}, -1) : e()), h.push(m(s + 1, this.labelNextPage, "next-text", this.nextText, this.nextClass, o, "pagination-goto-next"));
						var y = e();
						this.lastNumber || this.hideGotoEndButtons || (y = m(o, this.labelLastPage, "last-text", this.lastText, this.lastClass, o, "pagination-goto-last")), h.push(y);
						var A = e("ul", {
							staticClass: "pagination",
							class: ["b-pagination", this.btnSize, this.alignment, this.styleClass],
							attrs: {
								role: a ? null : "menubar",
								"aria-disabled": n ? "true" : "false",
								"aria-label": a ? null : i || null
							},
							on: a ? {} : {
								keydown: this.handleKeyNav
							},
							ref: "ul"
						}, h);
						return a ? e("nav", {
							attrs: {
								"aria-disabled": n ? "true" : null,
								"aria-hidden": n ? "true" : "false",
								"aria-label": a && i || null
							}
						}, [A]) : A
					}
				});

			function $A(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function kA(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? $A(Object(n), !0).forEach((function(t) {
						OA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $A(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function OA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var xA = function(e) {
					return Do(Ni(e) || 20, 1)
				},
				PA = function(e) {
					return Do(Ni(e) || 0, 0)
				},
				MA = qa(He(kA(kA({}, TA), {}, {
					ariaControls: Va(Jr),
					perPage: Va(ui, 20),
					totalRows: Va(ui, 0)
				})), Gn),
				IA = lt({
					components: {
						BPagination: r.default.extend({
							name: Gn,
							mixins: [CA],
							props: MA,
							computed: {
								numberOfPages: function() {
									var e = No(PA(this.totalRows) / xA(this.perPage));
									return e < 1 ? 1 : e
								},
								pageSizeNumberOfPages: function() {
									return {
										perPage: xA(this.perPage),
										totalRows: PA(this.totalRows),
										numberOfPages: this.numberOfPages
									}
								}
							},
							watch: {
								pageSizeNumberOfPages: function(e, t) {
									be(t) || (e.perPage !== t.perPage && e.totalRows === t.totalRows || e.numberOfPages !== t.numberOfPages && this.currentPage > e.numberOfPages) && (this.currentPage = 1), this.localNumberOfPages = e.numberOfPages
								}
							},
							created: function() {
								var e = this;
								this.localNumberOfPages = this.numberOfPages;
								var t = Ni(this[yA], 0);
								t > 0 ? this.currentPage = t : this.$nextTick((function() {
									e.currentPage = 0
								}))
							},
							methods: {
								onClick: function(e, t) {
									var n = this;
									if (t !== this.currentPage) {
										var r = e.target,
											i = new Ad(Pr, {
												cancelable: !0,
												vueTarget: this,
												target: r
											});
										this.$emit(i.type, i, t), i.defaultPrevented || (this.currentPage = t, this.$emit(dr, this.currentPage), this.$nextTick((function() {
											ia(r) && n.$el.contains(r) ? Oa(r) : n.focusCurrent()
										})))
									}
								},
								makePage: function(e) {
									return e
								},
								linkProps: function() {
									return {}
								}
							}
						})
					}
				});

			function LA(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function DA(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? LA(Object(n), !0).forEach((function(t) {
						BA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : LA(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function BA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var NA = je(iu, ["event", "routerTag"]),
				RA = qa(He(DA(DA(DA({}, TA), NA), {}, {
					baseUrl: Va(Jr, "/"),
					linkGen: Va(qr),
					noPageDetect: Va(Qr, !1),
					numberOfPages: Va(ui, 1, (function(e) {
						return !(Ni(e, 0) < 1 && (Ze('Prop "number-of-pages" must be a number greater than "0"', qn), 1))
					})),
					pageGen: Va(qr),
					pages: Va(zr),
					useRouter: Va(Qr, !1)
				})), qn),
				FA = lt({
					components: {
						BPaginationNav: r.default.extend({
							name: qn,
							mixins: [CA],
							props: RA,
							computed: {
								isNav: function() {
									return !0
								},
								computedValue: function() {
									var e = Ni(this.value, 0);
									return e < 1 ? null : e
								}
							},
							watch: {
								numberOfPages: function() {
									var e = this;
									this.$nextTick((function() {
										e.setNumberOfPages()
									}))
								},
								pages: function() {
									var e = this;
									this.$nextTick((function() {
										e.setNumberOfPages()
									}))
								}
							},
							created: function() {
								this.setNumberOfPages()
							},
							mounted: function() {
								var e = this;
								this.$router && this.$watch("$route", (function() {
									e.$nextTick((function() {
										Ji((function() {
											e.guessCurrentPage()
										}))
									}))
								}))
							},
							methods: {
								setNumberOfPages: function() {
									var e = this;
									we(this.pages) && this.pages.length > 0 ? this.localNumberOfPages = this.pages.length : this.localNumberOfPages = function(e) {
										return Do(Ni(e, 0), 1)
									}(this.numberOfPages), this.$nextTick((function() {
										e.guessCurrentPage()
									}))
								},
								onClick: function(e, t) {
									var n = this;
									if (t !== this.currentPage) {
										var r = e.currentTarget || e.target,
											i = new Ad(Pr, {
												cancelable: !0,
												vueTarget: this,
												target: r
											});
										this.$emit(i.type, i, t), i.defaultPrevented || (Ji((function() {
											n.currentPage = t, n.$emit(dr, t)
										})), this.$nextTick((function() {
											xa(r)
										})))
									}
								},
								getPageInfo: function(e) {
									if (!we(this.pages) || 0 === this.pages.length || _e(this.pages[e - 1])) {
										var t = "".concat(this.baseUrl).concat(e);
										return {
											link: this.useRouter ? {
												path: t
											} : t,
											text: zi(e)
										}
									}
									var n = this.pages[e - 1];
									if (Ee(n)) {
										var r = n.link;
										return {
											link: Ee(r) ? r : this.useRouter ? {
												path: r
											} : r,
											text: zi(n.text || e)
										}
									}
									return {
										link: zi(n),
										text: zi(e)
									}
								},
								makePage: function(e) {
									var t = this.pageGen,
										n = this.getPageInfo(e);
									return Ka(t) ? t(e, n) : n.text
								},
								makeLink: function(e) {
									var t = this.linkGen,
										n = this.getPageInfo(e);
									return Ka(t) ? t(e, n) : n.link
								},
								linkProps: function(e) {
									var t = Qa(NA, this),
										n = this.makeLink(e);
									return this.useRouter || Ee(n) ? t.to = n : t.href = n, t
								},
								resolveLink: function() {
									var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
									try {
										(e = document.createElement("a")).href = es({
											to: t
										}, "a", "/", "/"), document.body.appendChild(e);
										var n = e,
											r = n.pathname,
											i = n.hash,
											a = n.search;
										return document.body.removeChild(e), {
											path: r,
											hash: i,
											query: Xo(a)
										}
									} catch (t) {
										try {
											e && e.parentNode && e.parentNode.removeChild(e)
										} catch (e) {}
										return {}
									}
								},
								resolveRoute: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
									try {
										var t = this.$router.resolve(e, this.$route).route;
										return {
											path: t.path,
											hash: t.hash,
											query: t.query
										}
									} catch (e) {
										return {}
									}
								},
								guessCurrentPage: function() {
									var e = this.$router,
										t = this.$route,
										n = this.computedValue;
									if (!this.noPageDetect && !n && (c || !c && e))
										for (var r = e && t ? {
												path: t.path,
												hash: t.hash,
												query: t.query
											} : {}, i = c ? window.location || document.location : null, a = i ? {
												path: i.pathname,
												hash: i.hash,
												query: Xo(i.search)
											} : {}, o = 1; !n && o <= this.localNumberOfPages; o++) {
											var s = this.makeLink(o);
											n = e && (Ee(s) || this.useRouter) ? Hs(this.resolveRoute(s), r) ? o : null : c ? Hs(this.resolveLink(s), a) ? o : null : -1
										}
									this.currentPage = n > 0 ? n : 0
								}
							}
						})
					}
				}),
				UA = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left",
					TOPLEFT: "top",
					TOPRIGHT: "top",
					RIGHTTOP: "right",
					RIGHTBOTTOM: "right",
					BOTTOMLEFT: "bottom",
					BOTTOMRIGHT: "bottom",
					LEFTTOP: "left",
					LEFTBOTTOM: "left"
				},
				jA = {
					AUTO: 0,
					TOPLEFT: -1,
					TOP: 0,
					TOPRIGHT: 1,
					RIGHTTOP: -1,
					RIGHT: 0,
					RIGHTBOTTOM: 1,
					BOTTOMLEFT: -1,
					BOTTOM: 0,
					BOTTOMRIGHT: 1,
					LEFTTOP: -1,
					LEFT: 0,
					LEFTBOTTOM: 1
				},
				HA = {
					arrowPadding: Va(ui, 6),
					boundary: Va([le, Jr], "scrollParent"),
					boundaryPadding: Va(ui, 5),
					fallbackPlacement: Va(ni, "flip"),
					offset: Va(ui, 0),
					placement: Va(Jr, "top"),
					target: Va([le, fe])
				},
				YA = r.default.extend({
					name: "BVPopper",
					props: HA,
					data: function() {
						return {
							noFade: !1,
							localShow: !0,
							attachment: this.getAttachment(this.placement)
						}
					},
					computed: {
						templateType: function() {
							return "unknown"
						},
						popperConfig: function() {
							var e = this,
								t = this.placement;
							return {
								placement: this.getAttachment(t),
								modifiers: {
									offset: {
										offset: this.getOffset(t)
									},
									flip: {
										behavior: this.fallbackPlacement
									},
									arrow: {
										element: ".arrow"
									},
									preventOverflow: {
										padding: this.boundaryPadding,
										boundariesElement: this.boundary
									}
								},
								onCreate: function(t) {
									t.originalPlacement !== t.placement && e.popperPlacementChange(t)
								},
								onUpdate: function(t) {
									e.popperPlacementChange(t)
								}
							}
						}
					},
					created: function() {
						var e = this;
						this.$_popper = null, this.localShow = !0, this.$on(Dr, (function(t) {
							e.popperCreate(t)
						}));
						var t = function() {
							e.$nextTick((function() {
								Ji((function() {
									e.$destroy()
								}))
							}))
						};
						this.$parent.$once(Fr, t), this.$once(Cr, t)
					},
					beforeMount: function() {
						this.attachment = this.getAttachment(this.placement)
					},
					updated: function() {
						this.updatePopper()
					},
					beforeDestroy: function() {
						this.destroyPopper()
					},
					destroyed: function() {
						var e = this.$el;
						e && e.parentNode && e.parentNode.removeChild(e)
					},
					methods: {
						hide: function() {
							this.localShow = !1
						},
						getAttachment: function(e) {
							return UA[String(e).toUpperCase()] || "auto"
						},
						getOffset: function(e) {
							if (!this.offset) {
								var t = this.$refs.arrow || ua(".arrow", this.$el),
									n = Ri(Ea(t).width, 0) + Ri(this.arrowPadding, 0);
								switch (jA[String(e).toUpperCase()] || 0) {
									case 1:
										return "+50%p - ".concat(n, "px");
									case -1:
										return "-50%p + ".concat(n, "px");
									default:
										return 0
								}
							}
							return this.offset
						},
						popperCreate: function(e) {
							this.destroyPopper(), this.$_popper = new gd.a(this.target, e, this.popperConfig)
						},
						destroyPopper: function() {
							this.$_popper && this.$_popper.destroy(), this.$_popper = null
						},
						updatePopper: function() {
							this.$_popper && this.$_popper.scheduleUpdate()
						},
						popperPlacementChange: function(e) {
							this.attachment = this.getAttachment(e.placement)
						},
						renderTemplate: function(e) {
							return e("div")
						}
					},
					render: function(e) {
						var t = this,
							n = this.noFade;
						return e(Ao, {
							props: {
								appear: !0,
								noFade: n
							},
							on: {
								beforeEnter: function(e) {
									return t.$emit(Dr, e)
								},
								afterEnter: function(e) {
									return t.$emit(Br, e)
								},
								beforeLeave: function(e) {
									return t.$emit($r, e)
								},
								afterLeave: function(e) {
									return t.$emit(Cr, e)
								}
							}
						}, [this.localShow ? this.renderTemplate(e) : e()])
					}
				});

			function VA(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function zA(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? VA(Object(n), !0).forEach((function(t) {
						QA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VA(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function QA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var GA = {
					html: Va(Qr, !1),
					id: Va(Jr)
				},
				qA = r.default.extend({
					name: "BVTooltipTemplate",
					extends: YA,
					mixins: [_v],
					props: GA,
					data: function() {
						return {
							title: "",
							content: "",
							variant: null,
							customClass: null,
							interactive: !0
						}
					},
					computed: {
						templateType: function() {
							return "tooltip"
						},
						templateClasses: function() {
							var e, t = this.variant,
								n = this.attachment,
								r = this.templateType;
							return [(e = {
								noninteractive: !this.interactive
							}, QA(e, "b-".concat(r, "-").concat(t), t), QA(e, "bs-".concat(r, "-").concat(n), n), e), this.customClass]
						},
						templateAttributes: function() {
							var e = this.id;
							return zA(zA({}, this.$parent.$parent.$attrs), {}, {
								id: e,
								role: "tooltip",
								tabindex: "-1"
							}, this.scopedStyleAttrs)
						},
						templateListeners: function() {
							var e = this;
							return {
								mouseenter: function(t) {
									e.$emit(Or, t)
								},
								mouseleave: function(t) {
									e.$emit(xr, t)
								},
								focusin: function(t) {
									e.$emit(wr, t)
								},
								focusout: function(t) {
									e.$emit(Er, t)
								}
							}
						}
					},
					methods: {
						renderTemplate: function(e) {
							var t = this.title,
								n = ge(t) ? t({}) : t,
								r = this.html && !ge(t) ? {
									innerHTML: t
								} : {};
							return e("div", {
								staticClass: "tooltip b-tooltip",
								class: this.templateClasses,
								attrs: this.templateAttributes,
								on: this.templateListeners
							}, [e("div", {
								staticClass: "arrow",
								ref: "arrow"
							}), e("div", {
								staticClass: "tooltip-inner",
								domProps: r
							}, [n])])
						}
					}
				});

			function WA(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function KA(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? WA(Object(n), !0).forEach((function(t) {
						XA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WA(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function XA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var JA, ZA, eS = ".modal-content",
				tS = uo(Rn, Cr),
				nS = [eS, ".b-sidebar"].join(", "),
				rS = "data-original-title",
				iS = {
					title: "",
					content: "",
					variant: null,
					customClass: null,
					triggers: "",
					placement: "auto",
					fallbackPlacement: "flip",
					target: null,
					container: null,
					noFade: !1,
					boundary: "scrollParent",
					boundaryPadding: 5,
					offset: 0,
					delay: 0,
					arrowPadding: 6,
					interactive: !0,
					disabled: !1,
					id: null,
					html: !1
				},
				aS = r.default.extend({
					name: "BVTooltip",
					mixins: [qs],
					data: function() {
						return KA(KA({}, iS), {}, {
							activeTrigger: {
								hover: !1,
								click: !1,
								focus: !1
							},
							localShow: !1
						})
					},
					computed: {
						templateType: function() {
							return "tooltip"
						},
						computedId: function() {
							return this.id || "__bv_".concat(this.templateType, "_").concat(this[wt], "__")
						},
						computedDelay: function() {
							var e = {
								show: 0,
								hide: 0
							};
							return Te(this.delay) ? (e.show = Do(Ni(this.delay.show, 0), 0), e.hide = Do(Ni(this.delay.hide, 0), 0)) : (Ae(this.delay) || ye(this.delay)) && (e.show = e.hide = Do(Ni(this.delay, 0), 0)), e
						},
						computedTriggers: function() {
							return Ii(this.triggers).filter(We).join(" ").trim().toLowerCase().split(/\s+/).sort()
						},
						isWithActiveTrigger: function() {
							for (var e in this.activeTrigger)
								if (this.activeTrigger[e]) return !0;
							return !1
						},
						computedTemplateData: function() {
							return {
								title: this.title,
								content: this.content,
								variant: this.variant,
								customClass: this.customClass,
								noFade: this.noFade,
								interactive: this.interactive
							}
						}
					},
					watch: {
						computedTriggers: function(e, t) {
							var n = this;
							Hs(e, t) || this.$nextTick((function() {
								n.unListen(), t.forEach((function(t) {
									Mi(e, t) || n.activeTrigger[t] && (n.activeTrigger[t] = !1)
								})), n.listen()
							}))
						},
						computedTemplateData: function() {
							this.handleTemplateUpdate()
						},
						title: function(e, t) {
							e === t || e || this.hide()
						},
						disabled: function(e) {
							e ? this.disable() : this.enable()
						}
					},
					created: function() {
						var e = this;
						this.$_tip = null, this.$_hoverTimeout = null, this.$_hoverState = "", this.$_visibleInterval = null, this.$_enabled = !this.disabled, this.$_noop = ef.bind(this), this.$parent && this.$parent.$once(Rr, (function() {
							e.$nextTick((function() {
								Ji((function() {
									e.$destroy()
								}))
							}))
						})), this.$nextTick((function() {
							var t = e.getTarget();
							t && fa(document.body, t) ? (e.scopeId = pv(e.$parent), e.listen()) : Ze(ye(e.target) ? 'Unable to find target element by ID "#'.concat(e.target, '" in document.') : "The provided target is no valid HTML element.", e.templateType)
						}))
					},
					updated: function() {
						this.$nextTick(this.handleTemplateUpdate)
					},
					deactivated: function() {
						this.forceHide()
					},
					beforeDestroy: function() {
						this.unListen(), this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.clearVisibilityInterval(), this.destroyTemplate(), this.$_noop = null
					},
					methods: {
						getTemplate: function() {
							return qA
						},
						updateData: function() {
							var e = this,
								t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								n = !1;
							Ne(iS).forEach((function(r) {
								_e(t[r]) || e[r] === t[r] || (e[r] = t[r], "title" === r && (n = !0))
							})), n && this.localShow && this.fixTitle()
						},
						createTemplateAndShow: function() {
							var e = this.getContainer(),
								t = this.getTemplate(),
								n = this.$_tip = new t({
									parent: this,
									propsData: {
										id: this.computedId,
										html: this.html,
										placement: this.placement,
										fallbackPlacement: this.fallbackPlacement,
										target: this.getPlacementTarget(),
										boundary: this.getBoundary(),
										offset: Ni(this.offset, 0),
										arrowPadding: Ni(this.arrowPadding, 0),
										boundaryPadding: Ni(this.boundaryPadding, 0)
									}
								});
							this.handleTemplateUpdate(), n.$once(Dr, this.onTemplateShow), n.$once(Br, this.onTemplateShown), n.$once($r, this.onTemplateHide), n.$once(Cr, this.onTemplateHidden), n.$once(Fr, this.destroyTemplate), n.$on(wr, this.handleEvent), n.$on(Er, this.handleEvent), n.$on(Or, this.handleEvent), n.$on(xr, this.handleEvent), n.$mount(e.appendChild(document.createElement("div")))
						},
						hideTemplate: function() {
							this.$_tip && this.$_tip.hide(), this.clearActiveTriggers(), this.$_hoverState = ""
						},
						destroyTemplate: function() {
							this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = "", this.clearActiveTriggers(), this.localPlacementTarget = null;
							try {
								this.$_tip.$destroy()
							} catch (e) {}
							this.$_tip = null, this.removeAriaDescribedby(), this.restoreTitle(), this.localShow = !1
						},
						getTemplateElement: function() {
							return this.$_tip ? this.$_tip.$el : null
						},
						handleTemplateUpdate: function() {
							var e = this,
								t = this.$_tip;
							if (t) {
								["title", "content", "variant", "customClass", "noFade", "interactive"].forEach((function(n) {
									t[n] !== e[n] && (t[n] = e[n])
								}))
							}
						},
						show: function() {
							var e = this.getTarget();
							if (e && fa(document.body, e) && ia(e) && !this.dropdownOpen() && (!be(this.title) && "" !== this.title || !be(this.content) && "" !== this.content) && !this.$_tip && !this.localShow) {
								this.localShow = !0;
								var t = this.buildEvent(Dr, {
									cancelable: !0
								});
								this.emitEvent(t), t.defaultPrevented ? this.destroyTemplate() : (this.fixTitle(), this.addAriaDescribedby(), this.createTemplateAndShow())
							}
						},
						hide: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								t = this.getTemplateElement();
							if (t && this.localShow) {
								var n = this.buildEvent($r, {
									cancelable: !e
								});
								this.emitEvent(n), n.defaultPrevented || this.hideTemplate()
							} else this.restoreTitle()
						},
						forceHide: function() {
							this.getTemplateElement() && this.localShow && (this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = "", this.clearActiveTriggers(), this.$_tip && (this.$_tip.noFade = !0), this.hide(!0))
						},
						enable: function() {
							this.$_enabled = !0, this.emitEvent(this.buildEvent(Ar))
						},
						disable: function() {
							this.$_enabled = !1, this.emitEvent(this.buildEvent(vr))
						},
						onTemplateShow: function() {
							this.setWhileOpenListeners(!0)
						},
						onTemplateShown: function() {
							var e = this.$_hoverState;
							this.$_hoverState = "", "out" === e && this.leave(null), this.emitEvent(this.buildEvent(Br))
						},
						onTemplateHide: function() {
							this.setWhileOpenListeners(!1)
						},
						onTemplateHidden: function() {
							this.destroyTemplate(), this.emitEvent(this.buildEvent(Cr))
						},
						getTarget: function() {
							var e = this.target;
							return ye(e) ? e = da(e.replace(/^#/, "")) : ge(e) ? e = e() : e && (e = e.$el || e), ea(e) ? e : null
						},
						getPlacementTarget: function() {
							return this.getTarget()
						},
						getTargetId: function() {
							var e = this.getTarget();
							return e && e.id ? e.id : null
						},
						getContainer: function() {
							var e = !!this.container && (this.container.$el || this.container),
								t = document.body,
								n = this.getTarget();
							return !1 === e ? la(nS, n) || t : ye(e) && da(e.replace(/^#/, "")) || t
						},
						getBoundary: function() {
							return this.boundary ? this.boundary.$el || this.boundary : "scrollParent"
						},
						isInModal: function() {
							var e = this.getTarget();
							return e && la(eS, e)
						},
						isDropdown: function() {
							var e = this.getTarget();
							return e && _a(e, "dropdown")
						},
						dropdownOpen: function() {
							var e = this.getTarget();
							return this.isDropdown() && e && ua(".dropdown-menu.show", e)
						},
						clearHoverTimeout: function() {
							clearTimeout(this.$_hoverTimeout), this.$_hoverTimeout = null
						},
						clearVisibilityInterval: function() {
							clearInterval(this.$_visibleInterval), this.$_visibleInterval = null
						},
						clearActiveTriggers: function() {
							for (var e in this.activeTrigger) this.activeTrigger[e] = !1
						},
						addAriaDescribedby: function() {
							var e = this.getTarget(),
								t = ga(e, "aria-describedby") || "";
							t = t.split(/\s+/).concat(this.computedId).join(" ").trim(), ma(e, "aria-describedby", t)
						},
						removeAriaDescribedby: function() {
							var e = this,
								t = this.getTarget(),
								n = ga(t, "aria-describedby") || "";
							(n = n.split(/\s+/).filter((function(t) {
								return t !== e.computedId
							})).join(" ").trim()) ? ma(t, "aria-describedby", n): ba(t, "aria-describedby")
						},
						fixTitle: function() {
							var e = this.getTarget();
							if (va(e, "title")) {
								var t = ga(e, "title");
								ma(e, "title", ""), t && ma(e, rS, t)
							}
						},
						restoreTitle: function() {
							var e = this.getTarget();
							if (va(e, rS)) {
								var t = ga(e, rS);
								ba(e, rS), t && ma(e, "title", t)
							}
						},
						buildEvent: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return new Ad(e, KA({
								cancelable: !1,
								target: this.getTarget(),
								relatedTarget: this.getTemplateElement() || null,
								componentId: this.computedId,
								vueTarget: this
							}, t))
						},
						emitEvent: function(e) {
							var t = e.type;
							this.emitOnRoot(uo(this.templateType, t), e), this.$emit(t, e)
						},
						listen: function() {
							var e = this,
								t = this.getTarget();
							t && (this.setRootListener(!0), this.computedTriggers.forEach((function(n) {
								"click" === n ? ro(t, "click", e.handleEvent, Yr) : "focus" === n ? (ro(t, "focusin", e.handleEvent, Yr), ro(t, "focusout", e.handleEvent, Yr)) : "blur" === n ? ro(t, "focusout", e.handleEvent, Yr) : "hover" === n && (ro(t, "mouseenter", e.handleEvent, Yr), ro(t, "mouseleave", e.handleEvent, Yr))
							}), this))
						},
						unListen: function() {
							var e = this,
								t = this.getTarget();
							this.setRootListener(!1), ["click", "focusin", "focusout", "mouseenter", "mouseleave"].forEach((function(n) {
								t && io(t, n, e.handleEvent, Yr)
							}), this)
						},
						setRootListener: function(e) {
							var t = this.$root;
							if (t) {
								var n = e ? "$on" : "$off",
									r = this.templateType;
								t[n](co(r, $r), this.doHide), t[n](co(r, Dr), this.doShow), t[n](co(r, gr), this.doDisable), t[n](co(r, yr), this.doEnable)
							}
						},
						setWhileOpenListeners: function(e) {
							this.setModalListener(e), this.setDropdownListener(e), this.visibleCheck(e), this.setOnTouchStartListener(e)
						},
						visibleCheck: function(e) {
							var t = this;
							this.clearVisibilityInterval();
							var n = this.getTarget(),
								r = this.getTemplateElement();
							e && (this.$_visibleInterval = setInterval((function() {
								!r || !t.localShow || n.parentNode && ia(n) || t.forceHide()
							}), 100))
						},
						setModalListener: function(e) {
							this.isInModal() && this.$root[e ? "$on" : "$off"](tS, this.forceHide)
						},
						setOnTouchStartListener: function(e) {
							var t = this;
							"ontouchstart" in document.documentElement && Pi(document.body.children).forEach((function(n) {
								ao(e, n, "mouseover", t.$_noop)
							}))
						},
						setDropdownListener: function(e) {
							var t = this.getTarget();
							t && this.$root && this.isDropdown && t.__vue__ && t.__vue__[e ? "$on" : "$off"](Br, this.forceHide)
						},
						handleEvent: function(e) {
							var t = this.getTarget();
							if (t && !aa(t) && this.$_enabled && !this.dropdownOpen()) {
								var n = e.type,
									r = this.computedTriggers;
								if ("click" === n && Mi(r, "click")) this.click(e);
								else if ("mouseenter" === n && Mi(r, "hover")) this.enter(e);
								else if ("focusin" === n && Mi(r, "focus")) this.enter(e);
								else if ("focusout" === n && (Mi(r, "focus") || Mi(r, "blur")) || "mouseleave" === n && Mi(r, "hover")) {
									var i = this.getTemplateElement(),
										a = e.target,
										o = e.relatedTarget;
									if (i && fa(i, a) && fa(t, o) || i && fa(t, a) && fa(i, o) || i && fa(i, a) && fa(i, o) || fa(t, a) && fa(t, o)) return;
									this.leave(e)
								}
							}
						},
						doHide: function(e) {
							e && this.getTargetId() !== e && this.computedId !== e || this.forceHide()
						},
						doShow: function(e) {
							e && this.getTargetId() !== e && this.computedId !== e || this.show()
						},
						doDisable: function(e) {
							e && this.getTargetId() !== e && this.computedId !== e || this.disable()
						},
						doEnable: function(e) {
							e && this.getTargetId() !== e && this.computedId !== e || this.enable()
						},
						click: function(e) {
							this.$_enabled && !this.dropdownOpen() && (Oa(e.currentTarget), this.activeTrigger.click = !this.activeTrigger.click, this.isWithActiveTrigger ? this.enter(null) : this.leave(null))
						},
						toggle: function() {
							this.$_enabled && !this.dropdownOpen() && (this.localShow ? this.leave(null) : this.enter(null))
						},
						enter: function() {
							var e = this,
								t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
							t && (this.activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), this.localShow || "in" === this.$_hoverState ? this.$_hoverState = "in" : (this.clearHoverTimeout(), this.$_hoverState = "in", this.computedDelay.show ? (this.fixTitle(), this.$_hoverTimeout = setTimeout((function() {
								"in" === e.$_hoverState ? e.show() : e.localShow || e.restoreTitle()
							}), this.computedDelay.show)) : this.show())
						},
						leave: function() {
							var e = this,
								t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
							t && (this.activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1, "focusout" === t.type && Mi(this.computedTriggers, "blur") && (this.activeTrigger.click = !1, this.activeTrigger.hover = !1)), this.isWithActiveTrigger || (this.clearHoverTimeout(), this.$_hoverState = "out", this.computedDelay.hide ? this.$_hoverTimeout = setTimeout((function() {
								"out" === e.$_hoverState && e.hide()
							}), this.computedDelay.hide) : this.hide())
						}
					}
				});

			function oS(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sS(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var uS = "disabled",
				cS = Ur + uS,
				lS = "show",
				fS = qa((sS(JA = {
					boundary: Va([le, Kr, Jr], "scrollParent"),
					boundaryPadding: Va(ui, 50),
					container: Va([le, Kr, Jr]),
					customClass: Va(Jr),
					delay: Va(ci, 50)
				}, uS, Va(Qr, !1)), sS(JA, "fallbackPlacement", Va(ni, "flip")), sS(JA, "id", Va(Jr)), sS(JA, "noFade", Va(Qr, !1)), sS(JA, "noninteractive", Va(Qr, !1)), sS(JA, "offset", Va(ui, 0)), sS(JA, "placement", Va(Jr, "top")), sS(JA, lS, Va(Qr, !1)), sS(JA, "target", Va([le, fe, qr, Kr, Jr], void 0, !0)), sS(JA, "title", Va(Jr)), sS(JA, "triggers", Va(ni, "hover focus")), sS(JA, "variant", Va(Jr)), JA), fr),
				dS = r.default.extend({
					name: fr,
					mixins: [to],
					inheritAttrs: !1,
					props: fS,
					data: function() {
						return {
							localShow: this[lS],
							localTitle: "",
							localContent: ""
						}
					},
					computed: {
						templateData: function() {
							return function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2 ? oS(Object(n), !0).forEach((function(t) {
										sS(e, t, n[t])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oS(Object(n)).forEach((function(t) {
										Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
									}))
								}
								return e
							}({
								title: this.localTitle,
								content: this.localContent,
								interactive: !this.noninteractive
							}, Ue(this.$props, ["boundary", "boundaryPadding", "container", "customClass", "delay", "fallbackPlacement", "id", "noFade", "offset", "placement", "target", "target", "triggers", "variant", uS]))
						},
						templateTitleContent: function() {
							return {
								title: this.title,
								content: this.content
							}
						}
					},
					watch: (ZA = {}, sS(ZA, lS, (function(e, t) {
						e !== t && e !== this.localShow && this.$_toolpop && (e ? this.$_toolpop.show() : this.$_toolpop.forceHide())
					})), sS(ZA, uS, (function(e) {
						e ? this.doDisable() : this.doEnable()
					})), sS(ZA, "localShow", (function(e) {
						this.$emit("update:show", e)
					})), sS(ZA, "templateData", (function() {
						var e = this;
						this.$nextTick((function() {
							e.$_toolpop && e.$_toolpop.updateData(e.templateData)
						}))
					})), sS(ZA, "templateTitleContent", (function() {
						this.$nextTick(this.updateContent)
					})), ZA),
					created: function() {
						this.$_toolpop = null
					},
					updated: function() {
						this.$nextTick(this.updateContent)
					},
					beforeDestroy: function() {
						this.$off("open", this.doOpen), this.$off(pr, this.doClose), this.$off(gr, this.doDisable), this.$off(yr, this.doEnable), this.$_toolpop && (this.$_toolpop.$destroy(), this.$_toolpop = null)
					},
					mounted: function() {
						var e = this;
						this.$nextTick((function() {
							var t = e.getComponent();
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

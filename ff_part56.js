						case "slot":
						case "key":
						case "ref":
						case "tag":
						case "show":
						case "keepAlive":
						default:
							n[e] || (n[e] = arguments[r][e])
					}
				return n
			}
			var wt = "_uid",
				Et = "BAspect",
				Tt = "BAvatar",
				Ct = "BAvatarGroup",
				$t = "BBreadcrumb",
				kt = "BBreadcrumbItem",
				Ot = "BBreadcrumbLink",
				xt = "BButton",
				Pt = "BButtonClose",
				Mt = "BButtonGroup",
				It = "BButtonToolbar",
				Lt = "BCalendar",
				Dt = "BCard",
				Bt = "BCardBody",
				Nt = "BCardFooter",
				Rt = "BCardGroup",
				Ft = "BCardHeader",
				Ut = "BCardImg",
				jt = "BCardImgLazy",
				Ht = "BCardSubTitle",
				Yt = "BCardText",
				Vt = "BCardTitle",
				zt = "BCarousel",
				Qt = "BCarouselSlide",
				Gt = "BCollapse",
				qt = "BContainer",
				Wt = "BDropdown",
				Kt = "BDropdownDivider",
				Xt = "BDropdownForm",
				Jt = "BDropdownGroup",
				Zt = "BDropdownHeader",
				en = "BDropdownItem",
				tn = "BDropdownItemButton",
				nn = "BDropdownText",
				rn = "BFormCheckbox",
				an = "BFormCheckboxGroup",
				on = "BFormDatalist",
				sn = "BFormDatepicker",
				un = "BFormFile",
				cn = "BFormGroup",
				ln = "BFormInput",
				fn = "BFormInvalidFeedback",
				dn = "BFormRadio",
				hn = "BFormRadioGroup",
				pn = "BFormRating",
				_n = "BFormRow",
				mn = "BFormSelect",
				bn = "BFormSelectOption",
				gn = "BFormSelectOptionGroup",
				vn = "BFormSpinbutton",
				yn = "BFormTag",
				An = "BFormTags",
				Sn = "BFormText",
				wn = "BFormTextarea",
				En = "BFormTimepicker",
				Tn = "BFormValidFeedback",
				Cn = "BImgLazy",
				$n = "BInputGroup",
				kn = "BInputGroupAddon",
				On = "BInputGroupAppend",
				xn = "BInputGroupPrepend",
				Pn = "BInputGroupText",
				Mn = "BJumbotron",
				In = "BLink",
				Ln = "BListGroup",
				Dn = "BListGroupItem",
				Bn = "BMediaAside",
				Nn = "BMediaBody",
				Rn = "BModal",
				Fn = "BNavbar",
				Un = "BNavbarBrand",
				jn = "BNavbarNav",
				Hn = "BNavbarToggle",
				Yn = "BNavForm",
				Vn = "BNavItem",
				zn = "BNavItemDropdown",
				Qn = "BOverlay",
				Gn = "BPagination",
				qn = "BPaginationNav",
				Wn = "BPopover",
				Kn = "BProgress",
				Xn = "BProgressBar",
				Jn = "BSidebar",
				Zn = "BSkeleton",
				er = "BSkeletonIcon",
				tr = "BSkeletonImg",
				nr = "BSkeletonTable",
				rr = "BSkeletonWrapper",
				ir = "BSpinner",
				ar = "BTable",
				or = "BTableCell",
				sr = "BTableLite",
				ur = "BTableSimple",
				cr = "BToast",
				lr = "BToaster",
				fr = "BTooltip",
				dr = "change",
				hr = "click",
				pr = "close",
				_r = "context",
				mr = "context-changed",
				br = "destroyed",
				gr = "disable",
				vr = "disabled",
				yr = "enable",
				Ar = "enabled",
				Sr = "filtered",
				wr = "focusin",
				Er = "focusout",
				Tr = "head-clicked",
				Cr = "hidden",
				$r = "hide",
				kr = "input",
				Or = "mouseenter",
				xr = "mouseleave",
				Pr = "page-click",
				Mr = "refreshed",
				Ir = "row-clicked",
				Lr = "selected",
				Dr = "show",
				Br = "shown",
				Nr = "sliding-end",
				Rr = "hook:beforeDestroy",
				Fr = "hook:destroyed",
				Ur = "update:",
				jr = "bv",
				Hr = {
					passive: !0
				},
				Yr = {
					passive: !0,
					capture: !1
				},
				Vr = void 0,
				zr = Array,
				Qr = Boolean,
				Gr = Date,
				qr = Function,
				Wr = Number,
				Kr = Object,
				Xr = RegExp,
				Jr = String,
				Zr = [zr, qr],
				ei = [zr, Kr],
				ti = [zr, Kr, Jr],
				ni = [zr, Jr],
				ri = [Qr, Wr],
				ii = [Qr, Wr, Jr],
				ai = [Qr, Jr],
				oi = [Gr, Jr],
				si = [qr, Jr],
				ui = [Wr, Jr],
				ci = [Wr, Kr, Jr],
				li = [Kr, qr],
				fi = [Kr, Jr],
				di = "bottom-row",
				hi = "button-content",
				pi = "custom-foot",
				_i = "default",
				mi = "file-name",
				bi = "first",
				gi = "footer",
				vi = "header",
				yi = "modal-cancel",
				Ai = "modal-ok",
				Si = "modal-title",
				wi = "prepend",
				Ei = "row-details",
				Ti = "table-busy",
				Ci = "table-caption",
				$i = "table-colgroup",
				ki = "thead-top",
				Oi = "title",
				xi = "top-row",
				Pi = function() {
					return Array.from.apply(Array, arguments)
				},
				Mi = function(e, t) {
					return -1 !== e.indexOf(t)
				},
				Ii = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return Array.prototype.concat.apply([], t)
				},
				Li = function(e, t) {
					var n = ge(t) ? t : function() {
						return t
					};
					return Array.apply(null, {
						length: e
					}).map(n)
				},
				Di = function(e) {
					return e.reduce((function(e, t) {
						return Ii(e, t)
					}), [])
				},
				Bi = function e(t) {
					return t.reduce((function(t, n) {
						return Ii(t, Array.isArray(n) ? e(n) : n)
					}), [])
				},
				Ni = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN,
						n = parseInt(e, 10);
					return isNaN(n) ? t : n
				},
				Ri = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN,
						n = parseFloat(e);
					return isNaN(n) ? t : n
				},
				Fi = function(e, t) {
					return Ri(e).toFixed(Ni(t, 0))
				},
				Ui = function(e) {
					return e.replace(O, "-$1").toLowerCase()
				},
				ji = function(e) {
					return (e = Ui(e).replace(U, (function(e, t) {
						return t ? t.toUpperCase() : ""
					}))).charAt(0).toUpperCase() + e.slice(1)
				},
				Hi = function(e) {
					return e.replace(F, " ").replace(x, (function(e, t, n) {
						return t + " " + n
					})).replace(N, (function(e, t, n) {
						return t + n.toUpperCase()
					}))
				},
				Yi = function(e) {
					return (e = ye(e) ? e.trim() : String(e)).charAt(0).toUpperCase() + e.slice(1)
				},
				Vi = function(e) {
					return e.replace(I, "\\$&")
				},
				zi = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
					return be(e) ? "" : we(e) || Te(e) && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e)
				},
				Qi = function(e) {
					return zi(e).trim()
				},
				Gi = function(e) {
					return zi(e).toLowerCase()
				},
				qi = ce.prototype,
				Wi = ["button", "[href]:not(.disabled)", "input", "select", "textarea", "[tabindex]", "[contenteditable]"].map((function(e) {
					return "".concat(e, ":not(:disabled):not([disabled])")
				})).join(", "),
				Ki = qi.matches || qi.msMatchesSelector || qi.webkitMatchesSelector,
				Xi = qi.closest || function(e) {
					var t = this;
					do {
						if (ca(t, e)) return t;
						t = t.parentElement || t.parentNode
					} while (!me(t) && t.nodeType === Node.ELEMENT_NODE);
					return null
				},
				Ji = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.msRequestAnimationFrame || l.oRequestAnimationFrame || function(e) {
					return setTimeout(e, 16)
				},
				Zi = l.MutationObserver || l.WebKitMutationObserver || l.MozMutationObserver || null,
				ea = function(e) {
					return !(!e || e.nodeType !== Node.ELEMENT_NODE)
				},
				ta = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = f.activeElement;
					return t && !e.some((function(e) {
						return e === t
					})) ? t : null
				},
				na = function(e, t) {
					return zi(e).toLowerCase() === zi(t).toLowerCase()
				},
				ra = function(e) {
					return ea(e) && e === ta()
				},
				ia = function(e) {
					if (!ea(e) || !e.parentNode || !fa(f.body, e)) return !1;
					if ("none" === Sa(e, "display")) return !1;
					var t = wa(e);
					return !!(t && t.height > 0 && t.width > 0)
				},
				aa = function(e) {
					return !ea(e) || e.disabled || va(e, "disabled") || _a(e, "disabled")
				},
				oa = function(e) {
					return ea(e) && e.offsetHeight
				},
				sa = function(e, t) {
					return Pi((ea(t) ? t : f).querySelectorAll(e))
				},
				ua = function(e, t) {
					return (ea(t) ? t : f).querySelector(e) || null
				},
				ca = function(e, t) {
					return !!ea(e) && Ki.call(e, t)
				},
				la = function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (!ea(t)) return null;
					var r = Xi.call(t, e);
					return n ? r : r === t ? null : r
				},
				fa = function(e, t) {
					return !(!e || !ge(e.contains)) && e.contains(t)
				},
				da = function(e) {
					return f.getElementById(/^#/.test(e) ? e.slice(1) : e) || null
				},
				ha = function(e, t) {
					t && ea(e) && e.classList && e.classList.add(t)
				},
				pa = function(e, t) {
					t && ea(e) && e.classList && e.classList.remove(t)
				},
				_a = function(e, t) {
					return !!(t && ea(e) && e.classList) && e.classList.contains(t)
				},
				ma = function(e, t, n) {
					t && ea(e) && e.setAttribute(t, n)
				},
				ba = function(e, t) {
					t && ea(e) && e.removeAttribute(t)
				},
				ga = function(e, t) {
					return t && ea(e) ? e.getAttribute(t) : null
				},
				va = function(e, t) {
					return t && ea(e) ? e.hasAttribute(t) : null
				},
				ya = function(e, t, n) {
					t && ea(e) && (e.style[t] = n)
				},
				Aa = function(e, t) {
					t && ea(e) && (e.style[t] = "")
				},
				Sa = function(e, t) {
					return t && ea(e) && e.style[t] || null
				},
				wa = function(e) {
					return ea(e) ? e.getBoundingClientRect() : null
				},
				Ea = function(e) {
					var t = l.getComputedStyle;
					return t && ea(e) ? t(e) : {}
				},
				Ta = function() {
					return l.getSelection ? l.getSelection() : null
				},
				Ca = function(e) {
					var t = {
						top: 0,
						left: 0
					};
					if (!ea(e) || 0 === e.getClientRects().length) return t;
					var n = wa(e);
					if (n) {
						var r = e.ownerDocument.defaultView;
						t.top = n.top + r.pageYOffset, t.left = n.left + r.pageXOffset
					}
					return t
				},
				$a = function(e) {
					var t = {
						top: 0,
						left: 0
					};
					if (!ea(e)) return t;
					var n = {
							top: 0,
							left: 0
						},
						r = Ea(e);
					if ("fixed" === r.position) t = wa(e) || t;
					else {
						t = Ca(e);
						for (var i = e.ownerDocument, a = e.offsetParent || i.documentElement; a && (a === i.body || a === i.documentElement) && "static" === Ea(a).position;) a = a.parentNode;
						if (a && a !== e && a.nodeType === Node.ELEMENT_NODE) {
							n = Ca(a);
							var o = Ea(a);
							n.top += Ri(o.borderTopWidth, 0), n.left += Ri(o.borderLeftWidth, 0)
						}
					}
					return {
						top: t.top - n.top - Ri(r.marginTop, 0),
						left: t.left - n.left - Ri(r.marginLeft, 0)
					}
				},
				ka = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
					return sa(Wi, e).filter(ia).filter((function(e) {
						return e.tabIndex > -1 && !e.disabled
					}))
				},
				Oa = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					try {
						e.focus(t)
					} catch (e) {}
					return ra(e)
				},
				xa = function(e) {
					try {
						e.blur()
					} catch (e) {}
					return !ra(e)
				},
				Pa = function(e) {
					var t = Ie(null);
					return function() {
						for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
						var a = JSON.stringify(r);
						return t[a] = t[a] || e.apply(null, r)
					}
				},
				Ma = r.default.prototype,
				Ia = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
						n = Ma[y];
					return n ? n.getConfigValue(e, t) : qe(t)
				},
				La = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
					return t ? Ia("".concat(e, ".").concat(t), n) : Ia(e, {})
				},
				Da = function() {
					return Ia("breakpoints", A)
				},
				Ba = Pa((function() {
					return Da()
				})),
				Na = Pa((function() {
					var e = qe(Ba());
					return e[0] = "", e
				}));

			function Ra(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Fa(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ra(Object(n), !0).forEach((function(t) {
						Ua(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ua(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var ja = function(e, t) {
					return e + Yi(t)
				},
				Ha = function(e, t) {
					return function(e) {
						return (e = ye(e) ? e.trim() : String(e)).charAt(0).toLowerCase() + e.slice(1)
					}(t.replace(e, ""))
				},
				Ya = function(e, t) {
					return t + (e ? Yi(e) : "")
				},
				Va = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vr,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
						i = !0 === n;
					return r = i ? r : n, Fa(Fa(Fa({}, e ? {
						type: e
					} : {}), i ? {
						required: i
					} : _e(t) ? {} : {
						default: Ee(t) ? function() {
							return t
						} : t
					}), _e(r) ? {} : {
						validator: r
					})
				},
				za = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : We;
					if (we(e)) return e.map(t);
					var n = {};
					for (var r in e) Re(e, r) && (n[t(r)] = Ee(e[r]) ? Fe(e[r]) : e[r]);
					return n
				},
				Qa = function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : We;
					return (we(e) ? e.slice() : Ne(e)).reduce((function(e, r) {
						return e[n(r)] = t[r], e
					}), {})
				},
				Ga = function(e, t, n) {
					return Fa(Fa({}, qe(e)), {}, {
						default: function() {
							var r = La(n, t, e.default);
							return ge(r) ? r() : r
						}
					})
				},
				qa = function(e, t) {
					return Ne(e).reduce((function(n, r) {
						return Fa(Fa({}, n), {}, Ua({}, r, Ga(e[r], r, t)))
					}), {})
				},
				Wa = Ga({}, "", "").default.name,
				Ka = function(e) {
					return ge(e) && e.name !== Wa
				};

			function Xa(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ja = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = t.type,
						i = void 0 === n ? Vr : n,
						a = t.defaultValue,
						o = void 0 === a ? void 0 : a,
						s = t.validator,
						u = void 0 === s ? void 0 : s,
						c = t.event,
						l = void 0 === c ? kr : c,
						f = Xa({}, e, Va(i, o, u)),
						d = r.default.extend({
							model: {
								prop: e,
								event: l
							},
							props: f
						});
					return {
						mixin: d,
						props: f,
						prop: e,
						event: l
					}
				},
				Za = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					return (e = Ii(e).filter(We)).some((function(e) {
						return t[e] || n[e]
					}))
				},
				eo = function(e) {
					var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
					e = Ii(e).filter(We);
					for (var a = 0; a < e.length && !t; a++) {
						var o = e[a];
						t = r[o] || i[o]
					}
					return ge(t) ? t(n) : t
				},
				to = r.default.extend({
					methods: {
						hasNormalizedSlot: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _i,
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.$scopedSlots,
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.$slots;
							return Za(e, t, n)
						},
						normalizeSlot: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _i,
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.$scopedSlots,
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.$slots,
								i = eo(e, t, n, r);
							return i ? Ii(i) : i
						}
					}
				}),
				no = function(e) {
					return _ ? Ee(e) ? e : {
						capture: !!e || !1
					} : !!(Ee(e) ? e.capture : e)
				},
				ro = function(e, t, n, r) {
					e && e.addEventListener && e.addEventListener(t, n, no(r))
				},
				io = function(e, t, n, r) {
					e && e.removeEventListener && e.removeEventListener(t, n, no(r))
				},
				ao = function(e) {
					for (var t = e ? ro : io, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
					t.apply(void 0, r)
				},
				oo = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = t.preventDefault,
						r = void 0 === n || n,
						i = t.propagation,
						a = void 0 === i || i,
						o = t.immediatePropagation,
						s = void 0 !== o && o;
					r && e.preventDefault(), a && e.stopPropagation(), s && e.stopImmediatePropagation()
				},
				so = function(e) {
					return Ui(e.replace(w, ""))
				},
				uo = function(e, t) {
					return [jr, so(e), t].join("::")
				},
				co = function(e, t) {
					return [jr, t, so(e)].join("::")
				};

			function lo(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var fo = qa({
					ariaLabel: Va(Jr, "Close"),
					content: Va(Jr, "&times;"),
					disabled: Va(Qr, !1),
					textVariant: Va(Jr)
				}, Pt),
				ho = r.default.extend({
					name: Pt,
					functional: !0,
					props: fo,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.slots,
							a = t.scopedSlots,
							o = i(),
							s = a || {},
							u = {
								staticClass: "close",
								class: lo({}, "text-".concat(n.textVariant), n.textVariant),
								attrs: {
									type: "button",
									disabled: n.disabled,
									"aria-label": n.ariaLabel ? String(n.ariaLabel) : null
								},
								on: {
									click: function(e) {
										n.disabled && $e(e) && oo(e)
									}
								}
							};
						return Za(_i, s, o) || (u.domProps = {
							innerHTML: n.content
						}), e("button", St(r, u), eo(_i, {}, s, o))
					}
				});

			function po(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function _o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? po(Object(n), !0).forEach((function(t) {
						mo(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : po(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function mo(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var bo, go = {
					name: "",
					enterClass: "",
					enterActiveClass: "",
					enterToClass: "show",
					leaveClass: "show",
					leaveActiveClass: "",
					leaveToClass: ""
				},
				vo = _o(_o({}, go), {}, {
					enterActiveClass: "fade",
					leaveActiveClass: "fade"
				}),
				yo = {
					appear: Va(Qr, !1),
					mode: Va(Jr),
					noFade: Va(Qr, !1),
					transProps: Va(Kr)
				},
				Ao = r.default.extend({
					name: "BVTransition",
					functional: !0,
					props: yo,
					render: function(e, t) {
						var n = t.children,
							r = t.data,
							i = t.props,
							a = i.transProps;
						return Te(a) || (a = i.noFade ? go : vo, i.appear && (a = _o(_o({}, a), {}, {
							appear: !0,
							appearClass: a.enterClass,
							appearActiveClass: a.enterActiveClass,
							appearToClass: a.enterToClass
						}))), e("transition", St(r, {
							props: a = _o(_o({
								mode: i.mode
							}, a), {}, {
								css: !0
							})
						}), n)
					}
				});

			function So(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function wo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? So(Object(n), !0).forEach((function(t) {
						Eo(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : So(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Eo(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var To = Ja("show", {
					type: ii,
					defaultValue: !1
				}),
				Co = To.mixin,
				$o = To.props,
				ko = To.prop,
				Oo = To.event,
				xo = function(e) {
					return "" === e || ve(e) ? 0 : (e = Ni(e, 0)) > 0 ? e : 0
				},
				Po = function(e) {
					return "" === e || !0 === e || !(Ni(e, 0) < 1) && !!e
				},
				Mo = qa(He(wo(wo({}, $o), {}, {
					dismissLabel: Va(Jr, "Close"),
					dismissible: Va(Qr, !1),
					fade: Va(Qr, !1),
					variant: Va(Jr, "info")
				})), "BAlert"),
				Io = lt({
					components: {
						BAlert: r.default.extend({
							name: "BAlert",
							mixins: [Co, to],
							props: Mo,
							data: function() {
								return {
									countDown: 0,
									localShow: Po(this[ko])
								}
							},
							watch: (bo = {}, Eo(bo, ko, (function(e) {
								this.countDown = xo(e), this.localShow = Po(e)
							})), Eo(bo, "countDown", (function(e) {
								var t = this;
								this.clearCountDownInterval();
								var n = this[ko];
								Se(n) && (this.$emit("dismiss-count-down", e), n !== e && this.$emit(Oo, e), e > 0 ? (this.localShow = !0, this.$_countDownTimeout = setTimeout((function() {
									t.countDown--
								}), 1e3)) : this.$nextTick((function() {
									Ji((function() {
										t.localShow = !1
									}))
								})))
							})), Eo(bo, "localShow", (function(e) {
								var t = this[ko];
								e || !this.dismissible && !Se(t) || this.$emit("dismissed"), Se(t) || t === e || this.$emit(Oo, e)
							})), bo),
							created: function() {
								this.$_filterTimer = null;
								var e = this[ko];
								this.countDown = xo(e), this.localShow = Po(e)
							},
							beforeDestroy: function() {
								this.clearCountDownInterval()
							},
							methods: {
								dismiss: function() {
									this.clearCountDownInterval(), this.countDown = 0, this.localShow = !1
								},
								clearCountDownInterval: function() {
									clearTimeout(this.$_countDownTimeout), this.$_countDownTimeout = null
								}
							},
							render: function(e) {
								var t = e();
								if (this.localShow) {
									var n = this.dismissible,
										r = this.variant,
										i = e();
									n && (i = e(ho, {
										attrs: {
											"aria-label": this.dismissLabel
										},
										on: {
											click: this.dismiss
										}
									}, [this.normalizeSlot("dismiss")])), t = e("div", {
										staticClass: "alert",
										class: Eo({
											"alert-dismissible": n
										}, "alert-".concat(r), r),
										attrs: {
											role: "alert",
											"aria-live": "polite",
											"aria-atomic": !0
										},
										key: this[wt]
									}, [i, this.normalizeSlot()])
								}
								return e(Ao, {
									props: {
										noFade: !this.fade
									}
								}, [t])
							}
						})
					}
				}),
				Lo = Math.min,
				Do = Math.max,
				Bo = Math.abs,
				No = Math.ceil,
				Ro = Math.floor,
				Fo = Math.pow,
				Uo = Math.round;

			function jo(e, t) {
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
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return Ho(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ho(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ho(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Yo = "b-aspect",
				Vo = qa({
					aspect: Va(ui, "1:1"),
					tag: Va(Jr, "div")
				}, Et),
				zo = r.default.extend({
					name: Et,
					mixins: [to],
					props: Vo,
					computed: {
						padding: function() {
							var e = this.aspect,
								t = 1;
							if (q.test(e)) {
								var n = jo(e.split(W).map((function(e) {
									return Ri(e) || 1
								})), 2);
								t = n[0] / n[1]
							} else t = Ri(e) || 1;
							return "".concat(100 / Bo(t), "%")
						}
					},
					render: function(e) {
						var t = e("div", {
								staticClass: "".concat(Yo, "-sizer flex-grow-1"),
								style: {
									paddingBottom: this.padding,
									height: 0
								}
							}),
							n = e("div", {
								staticClass: "".concat(Yo, "-content flex-grow-1 w-100 mw-100"),
								style: {
									marginLeft: "-100%"
								}
							}, this.normalizeSlot());
						return e(this.tag, {
							staticClass: "".concat(Yo, " d-flex")
						}, [t, n])
					}
				}),
				Qo = lt({
					components: {
						BAspect: zo
					}
				}),
				Go = function(e) {
					return "%" + e.charCodeAt(0).toString(16)
				},
				qo = function(e) {
					return encodeURIComponent(zi(e)).replace(Q, Go).replace(z, ",")
				},
				Wo = decodeURIComponent,
				Ko = function(e) {
					if (!Te(e)) return "";
					var t = Ne(e).map((function(t) {
						var n = e[t];
						return _e(n) ? "" : me(n) ? qo(t) : we(n) ? n.reduce((function(e, n) {
							return me(n) ? e.push(qo(t)) : _e(n) || e.push(qo(t) + "=" + qo(n)), e
						}), []).join("&") : qo(t) + "=" + qo(n)
					})).filter((function(e) {
						return e.length > 0
					})).join("&");
					return t ? "?".concat(t) : ""
				},
				Xo = function(e) {
					var t = {};
					return (e = zi(e).trim().replace(G, "")) ? (e.split("&").forEach((function(e) {
						var n = e.replace(M, " ").split("="),
							r = Wo(n.shift()),
							i = n.length > 0 ? Wo(n.join("=")) : null;
						_e(t[r]) ? t[r] = i : we(t[r]) ? t[r].push(i) : t[r] = [t[r], i]
					})), t) : t
				},
				Jo = function(e) {
					return !(!e.href && !e.to)
				},
				Zo = function(e) {
					return !(!e || na(e, "a"))
				},
				es = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.href,
						n = e.to,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "a",
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#",
						a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/";
					if (t) return t;
					if (Zo(r)) return null;
					if (ye(n)) return n || a;
					if (Te(n) && (n.path || n.query || n.hash)) {
						var o = zi(n.path),
							s = Ko(n.query),
							u = zi(n.hash);
						return u = u && "#" !== u.charAt(0) ? "#".concat(u) : u, "".concat(o).concat(s).concat(u) || a
					}
					return i
				};

			function ts(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var ns = {
					viewBox: "0 0 16 16",
					width: "1em",
					height: "1em",
					focusable: "false",
					role: "img",
					"aria-label": "icon"
				},
				rs = {
					width: null,
					height: null,
					focusable: null,
					role: null,
					"aria-label": null
				},
				is = {
					animation: Va(Jr),
					content: Va(Jr),
					flipH: Va(Qr, !1),
					flipV: Va(Qr, !1),
					fontScale: Va(ui, 1),
					rotate: Va(ui, 0),
					scale: Va(ui, 1),
					shiftH: Va(ui, 0),
					shiftV: Va(ui, 0),
					stacked: Va(Qr, !1),
					title: Va(Jr),
					variant: Va(Jr)
				},
				as = r.default.extend({
					name: "BIconBase",
					functional: !0,
					props: is,
					render: function(e, t) {
						var n, r = t.data,
							i = t.props,
							a = t.children,
							o = i.animation,
							s = i.content,
							u = i.flipH,
							c = i.flipV,
							l = i.stacked,
							f = i.title,
							d = i.variant,
							h = Do(Ri(i.fontScale, 1), 0) || 1,
							p = Do(Ri(i.scale, 1), 0) || 1,
							_ = Ri(i.rotate, 0),
							m = Ri(i.shiftH, 0),
							b = Ri(i.shiftV, 0),
							g = u || c || 1 !== p,
							v = g || _,
							y = m || b,
							A = !be(s),
							S = e("g", {
								attrs: {
									transform: [v ? "translate(8 8)" : null, g ? "scale(".concat((u ? -1 : 1) * p, " ").concat((c ? -1 : 1) * p, ")") : null, _ ? "rotate(".concat(_, ")") : null, v ? "translate(-8 -8)" : null].filter(We).join(" ") || null
								},
								domProps: A ? {
									innerHTML: s || ""
								} : {}
							}, a);
						y && (S = e("g", {
							attrs: {
								transform: "translate(".concat(16 * m / 16, " ").concat(-16 * b / 16, ")")
							}
						}, [S])), l && (S = e("g", [S]));
						var w = [f ? e("title", f) : null, S].filter(We);
						return e("svg", St({
							staticClass: "b-icon bi",
							class: (n = {}, ts(n, "text-".concat(d), d), ts(n, "b-icon-animation-".concat(o), o), n),
							attrs: ns,
							style: l ? {} : {
								fontSize: 1 === h ? null : "".concat(100 * h, "%")
							}
						}, r, l ? {
							attrs: rs
						} : {}, {
							attrs: {
								xmlns: l ? null : "http://www.w3.org/2000/svg",
								fill: "currentColor"
							}
						}), w)
					}
				});

			function os(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ss(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? os(Object(n), !0).forEach((function(t) {
						us(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : os(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function us(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var cs = function(e, t) {
					var n = Ui(e),
						i = "BIcon".concat(ji(e)),
						a = "bi-".concat(n),
						o = n.replace(/-/g, " "),
						s = Qi(t || "");
					return r.default.extend({
						name: i,
						functional: !0,
						props: je(is, ["content"]),
						render: function(e, t) {
							var n = t.data,
								r = t.props;
							return e(as, St({
								props: {
									title: o
								},
								attrs: {
									"aria-label": o
								}
							}, n, {
								staticClass: a,
								props: ss(ss({}, r), {}, {
									content: s
								})
							}))
						}
					})
				},
				ls = cs("Blank", ""),
				fs = cs("Calendar", '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>'),
				ds = cs("CalendarFill", '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>'),
				hs = cs("ChevronBarLeft", '<path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>'),
				ps = cs("ChevronDoubleLeft", '<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),
				_s = cs("ChevronDown", '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>'),
				ms = cs("ChevronLeft", '<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),
				bs = cs("ChevronUp", '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>'),
				gs = cs("CircleFill", '<circle cx="8" cy="8" r="8"/>'),
				vs = cs("Clock", '<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>'),
				ys = cs("ClockFill", '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>'),
				As = cs("Dash", '<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'),
				Ss = cs("PersonFill", '<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'),
				ws = cs("Plus", '<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'),
				Es = cs("Star", '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'),
				Ts = cs("StarFill", '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'),
				Cs = cs("StarHalf", '<path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"/>'),
				$s = cs("X", '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>');

			function ks(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Os(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ks(Object(n), !0).forEach((function(t) {
						xs(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ks(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function xs(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ps = je(is, ["content"]),
				Ms = qa(He(Os(Os({}, Ps), {}, {
					icon: Va(Jr)
				})), "BIcon"),
				Is = r.default.extend({
					name: "BIcon",
					functional: !0,
					props: Ms,
					render: function(e, t) {
						var n = t.data,
							r = t.props,
							i = t.parent,
							a = ji(Qi(r.icon || "")).replace(X, "");
						return e(a && function e(t, n) {
							return t ? (t.$options || {}).components[n] || e(t.$parent, n) : null
						}(i, "BIcon".concat(a)) || ls, St(n, {
							props: Qa(Ps, r)
						}))
					}
				}),
				Ls = 40,
				Ds = 35,
				Bs = 13,
				Ns = 36,
				Rs = 37,
				Fs = 39,
				Us = 32,
				js = 38,
				Hs = function e(t, n) {
					if (t === n) return !0;
					var r = Ce(t),
						i = Ce(n);
					if (r || i) return !(!r || !i) && t.getTime() === n.getTime();
					if (r = we(t), i = we(n), r || i) return !(!r || !i) && function(e, t) {
						if (e.length !== t.length) return !1;
						for (var n = !0, r = 0; n && r < e.length; r++) n = Hs(e[r], t[r]);
						return n
					}(t, n);
					if (r = Ee(t), i = Ee(n), r || i) {
						if (!r || !i) return !1;
						if (Ne(t).length !== Ne(n).length) return !1;
						for (var a in t) {
							var o = Re(t, a),
								s = Re(n, a);
							if (o && !s || !o && s || !e(t[a], n[a])) return !1
						}
					}
					return String(t) === String(n)
				};

			function Ys(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Vs = function(e) {
					return !e || 0 === Ne(e).length
				},
				zs = function(e) {
					return {
						handler: function(t, n) {
							if (!Hs(t, n))
								if (Vs(t) || Vs(n)) this[e] = qe(t);
								else {
									for (var r in n) Re(t, r) || this.$delete(this.$data[e], r);
									for (var i in t) this.$set(this.$data[e], i, t[i])
								}
						}
					}
				},
				Qs = function(e, t) {
					return r.default.extend({
						data: function() {
							return Ys({}, t, qe(this[e]))
						},
						watch: Ys({}, e, zs(t))
					})
				},
				Gs = Qs("$attrs", "bvAttrs"),
				qs = r.default.extend({
					methods: {
						listenOnRoot: function(e, t) {
							var n = this;
							this.$root.$on(e, t), this.$on(Rr, (function() {
								n.$root.$off(e, t)
							}))
						},
						listenOnRootOnce: function(e, t) {
							var n = this;
							this.$root.$once(e, t), this.$on(Rr, (function() {
								n.$root.$off(e, t)
							}))
						},
						emitOnRoot: function(e) {
							for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
							(t = this.$root).$emit.apply(t, [e].concat(r))
						}
					}
				}),
				Ws = Qs("$listeners", "bvListeners");

			function Ks(e) {
				return function(e) {
					if (Array.isArray(e)) return Xs(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return Xs(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xs(e, t) : void 0
					}
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Xs(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Js(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Zs(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Js(Object(n), !0).forEach((function(t) {
						eu(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Js(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function eu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var tu = uo(In, "clicked"),
				nu = {
					activeClass: Va(Jr),
					append: Va(Qr, !1),
					event: Va(ni, hr),
					exact: Va(Qr, !1),
					exactActiveClass: Va(Jr),
					replace: Va(Qr, !1),
					routerTag: Va(Jr, "a"),
					to: Va(fi)
				},
				ru = {
					noPrefetch: Va(Qr, !1),
					prefetch: Va(Qr, null)
				},
				iu = qa(He(Zs(Zs(Zs({}, ru), nu), {}, {
					active: Va(Qr, !1),
					disabled: Va(Qr, !1),
					href: Va(Jr),
					rel: Va(Jr, null),
					routerComponentName: Va(Jr),
					target: Va(Jr, "_self")
				})), In),
				au = r.default.extend({
					name: In,
					mixins: [Gs, Ws, qs, to],
					inheritAttrs: !1,
					props: iu,
					computed: {
						computedTag: function() {
							return function(e, t) {
								var n = e.to,
									r = e.disabled,
									i = e.routerComponentName,
									a = !!t.$router;
								return !a || a && (r || !n) ? "a" : i || (t.$nuxt ? "nuxt-link" : "router-link")
							}({
								to: this.to,
								disabled: this.disabled,
								routerComponentName: this.routerComponentName
							}, this)
						},
						isRouterLink: function() {
							return Zo(this.computedTag)
						},
						computedRel: function() {
							return function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									t = e.target,
									n = e.rel;
								return "_blank" === t && me(n) ? "noopener" : n || null
							}({
								target: this.target,
								rel: this.rel
							})
						},
						computedHref: function() {
							var e = this.to,
								t = this.href;
							return es({
								to: e,
								href: t
							}, this.computedTag)
						},
						computedProps: function() {
							var e = this.prefetch;
							return this.isRouterLink ? Zs(Zs({}, Qa(Zs(Zs({}, nu), ru), this)), {}, {
								prefetch: ve(e) ? e : void 0,
								tag: this.routerTag
							}) : {}
						},
						computedAttrs: function() {
							var e = this.bvAttrs,
								t = this.computedHref,
								n = this.computedRel,
								r = this.disabled,
								i = this.target,
								a = this.routerTag,
								o = this.isRouterLink;
							return Zs(Zs(Zs(Zs({}, e), t ? {
								href: t
							} : {}), o && !na(a, "a") ? {} : {
								rel: n,
								target: i
							}), {}, {
								tabindex: r ? "-1" : _e(e.tabindex) ? null : e.tabindex,
								"aria-disabled": r ? "true" : null
							})
						},
						computedListeners: function() {
							return Zs(Zs({}, this.bvListeners), {}, {
								click: this.onClick
							})
						}
					},
					methods: {
						onClick: function(e) {
							var t = arguments,
								n = $e(e),
								r = this.isRouterLink,
								i = this.bvListeners.click;
							n && this.disabled ? oo(e, {
								immediatePropagation: !0
							}) : (r && e.currentTarget.__vue__ && e.currentTarget.__vue__.$emit(hr, e), Ii(i).filter((function(e) {
								return ge(e)
							})).forEach((function(e) {
								e.apply(void 0, Ks(t))
							})), this.emitOnRoot(tu, e), this.emitOnRoot("clicked::link", e)), n && !r && "#" === this.computedHref && oo(e, {
								propagation: !1
							})
						},
						focus: function() {
							Oa(this.$el)
						},
						blur: function() {
							xa(this.$el)
						}
					},
					render: function(e) {
						var t = this.active,
							n = this.disabled;
						return e(this.computedTag, eu({
							class: {
								active: t, disabled: n
							},
							attrs: this.computedAttrs,
							props: this.computedProps
						}, this.isRouterLink ? "nativeOn" : "on", this.computedListeners), this.normalizeSlot())
					}
				});

			function ou(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function su(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ou(Object(n), !0).forEach((function(t) {
						uu(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ou(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function uu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var cu = je(iu, ["event", "routerTag"]);
			delete cu.href.default, delete cu.to.default;
			var lu = qa(He(su(su({}, cu), {}, {
					block: Va(Qr, !1),
					disabled: Va(Qr, !1),
					pill: Va(Qr, !1),
					pressed: Va(Qr, null),
					size: Va(Jr),
					squared: Va(Qr, !1),
					tag: Va(Jr, "button"),
					type: Va(Jr, "button"),
					variant: Va(Jr, "secondary")
				})), xt),
				fu = function(e) {
					"focusin" === e.type ? ha(e.target, "focus") : "focusout" === e.type && pa(e.target, "focus")
				},
				du = function(e) {
					return Jo(e) || na(e.tag, "a")
				},
				hu = function(e) {
					return ve(e.pressed)
				},
				pu = function(e) {
					return !(du(e) || e.tag && !na(e.tag, "button"))
				},
				_u = function(e) {
					return !du(e) && !pu(e)
				},
				mu = function(e) {
					var t;
					return ["btn-".concat(e.variant || "secondary"), (t = {}, uu(t, "btn-".concat(e.size), e.size), uu(t, "btn-block", e.block), uu(t, "rounded-pill", e.pill), uu(t, "rounded-0", e.squared && !e.pill), uu(t, "disabled", e.disabled), uu(t, "active", e.pressed), t)]
				},
				bu = function(e) {
					return du(e) ? Qa(cu, e) : {}
				},
				gu = function(e, t) {
					var n = pu(e),
						r = du(e),
						i = hu(e),
						a = _u(e),
						o = r && "#" === e.href,
						s = t.attrs && t.attrs.role ? t.attrs.role : null,
						u = t.attrs ? t.attrs.tabindex : null;
					return (a || o) && (u = "0"), {
						type: n && !r ? e.type : null,
						disabled: n ? e.disabled : null,
						role: a || o ? "button" : s,
						"aria-disabled": a ? String(e.disabled) : null,
						"aria-pressed": i ? String(e.pressed) : null,
						autocomplete: i ? "off" : null,
						tabindex: e.disabled && !n ? "-1" : u
					}
				},
				vu = r.default.extend({
					name: xt,
					functional: !0,
					props: lu,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.listeners,
							a = t.children,
							o = hu(n),
							s = du(n),
							u = _u(n),
							c = s && "#" === n.href,
							l = {
								keydown: function(e) {
									if (!n.disabled && (u || c)) {
										var t = e.keyCode;
										if (t === Us || t === Bs && u) {
											var r = e.currentTarget || e.target;
											oo(e, {
												propagation: !1
											}), r.click()
										}
									}
								},
								click: function(e) {
									n.disabled && $e(e) ? oo(e) : o && i && i["update:pressed"] && Ii(i["update:pressed"]).forEach((function(e) {
										ge(e) && e(!n.pressed)
									}))
								}
							};
						o && (l.focusin = fu, l.focusout = fu);
						var f = {
							staticClass: "btn",
							class: mu(n),
							props: bu(n),
							attrs: gu(n, r),
							on: l
						};
						return e(s ? au : n.tag, St(r, f), a)
					}
				});

			function yu(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Au(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? yu(Object(n), !0).forEach((function(t) {
						Su(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yu(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Su(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var wu = "b-avatar",
				Eu = ["sm", null, "lg"],
				Tu = function(e) {
					return e = ye(e) && Se(e) ? Ri(e, 0) : e, Ae(e) ? "".concat(e, "px") : e || null
				},
				Cu = je(iu, ["active", "event", "routerTag"]),
				$u = qa(He(Au(Au({}, Cu), {}, {
					alt: Va(Jr, "avatar"),
					ariaLabel: Va(Jr),
					badge: Va(ai, !1),
					badgeLeft: Va(Qr, !1),
					badgeOffset: Va(Jr),
					badgeTop: Va(Qr, !1),
					badgeVariant: Va(Jr, "primary"),
					button: Va(Qr, !1),
					buttonType: Va(Jr, "button"),
					icon: Va(Jr),
					rounded: Va(ai, !1),
					size: Va(ui),
					square: Va(Qr, !1),
					src: Va(Jr),
					text: Va(Jr),
					variant: Va(Jr, "secondary")
				})), Tt),
				ku = r.default.extend({
					name: Tt,
					mixins: [to],
					inject: {
						bvAvatarGroup: {
							default: null
						}
					},
					props: $u,
					data: function() {
						return {
							localSrc: this.src || null
						}
					},
					computed: {
						computedSize: function() {
							var e = this.bvAvatarGroup;
							return Tu(e ? e.size : this.size)
						},
						computedVariant: function() {
							var e = this.bvAvatarGroup;
							return e && e.variant ? e.variant : this.variant
						},
						computedRounded: function() {
							var e = this.bvAvatarGroup,
								t = !(!e || !e.square) || this.square,
								n = e && e.rounded ? e.rounded : this.rounded;
							return t ? "0" : "" === n || n || "circle"
						},
						fontStyle: function() {
							var e = this.computedSize,
								t = -1 === Eu.indexOf(e) ? "calc(".concat(e, " * ").concat(.4, ")") : null;
							return t ? {
								fontSize: t
							} : {}
						},
						marginStyle: function() {
							var e = this.computedSize,
								t = this.bvAvatarGroup,
								n = t ? t.overlapScale : 0,
								r = e && n ? "calc(".concat(e, " * -").concat(n, ")") : null;
							return r ? {
								marginLeft: r,
								marginRight: r
							} : {}
						},
						badgeStyle: function() {
							var e = this.computedSize,
								t = this.badgeTop,
								n = this.badgeLeft,
								r = this.badgeOffset || "0px";
							return {
								fontSize: -1 === Eu.indexOf(e) ? "calc(".concat(e, " * ").concat(.7 * .4, " )") : null,
								top: t ? r : null,
								bottom: t ? null : r,
								left: n ? r : null,
								right: n ? null : r
							}
						}
					},
					watch: {
						src: function(e, t) {
							e !== t && (this.localSrc = e || null)
						}
					},
					methods: {
						onImgError: function(e) {
							this.localSrc = null, this.$emit("img-error", e)
						},
						onClick: function(e) {
							this.$emit(hr, e)
						}
					},
					render: function(e) {
						var t, n = this.computedVariant,
							r = this.disabled,
							i = this.computedRounded,
							a = this.icon,
							o = this.localSrc,
							s = this.text,
							u = this.fontStyle,
							c = this.marginStyle,
							l = this.computedSize,
							f = this.button,
							d = this.buttonType,
							h = this.badge,
							p = this.badgeVariant,
							_ = this.badgeStyle,
							m = !f && Jo(this),
							b = f ? vu : m ? au : "span",
							g = this.alt,
							v = this.ariaLabel || null,
							y = null;
						this.hasNormalizedSlot() ? y = e("span", {
							staticClass: "b-avatar-custom"
						}, [this.normalizeSlot()]) : o ? (y = e("img", {
							style: n ? {} : {
								width: "100%",
								height: "100%"
							},
							attrs: {
								src: o,
								alt: g
							},
							on: {
								error: this.onImgError
							}
						}), y = e("span", {
							staticClass: "b-avatar-img"
						}, [y])) : y = a ? e(Is, {
							props: {
								icon: a
							},
							attrs: {
								"aria-hidden": "true",
								alt: g
							}
						}) : s ? e("span", {
							staticClass: "b-avatar-text",
							style: u
						}, [e("span", s)]) : e(Ss, {
							attrs: {
								"aria-hidden": "true",
								alt: g
							}
						});
						var A = e(),
							S = this.hasNormalizedSlot("badge");
						if (h || "" === h || S) {
							var w = !0 === h ? "" : h;
							A = e("span", {
								staticClass: "b-avatar-badge",
								class: Su({}, "badge-".concat(p), p),
								style: _
							}, [S ? this.normalizeSlot("badge") : w])
						}
						return e(b, {
							staticClass: wu,
							class: (t = {}, Su(t, "".concat(wu, "-").concat(l), l && -1 !== Eu.indexOf(l)), Su(t, "badge-".concat(n), !f && n), Su(t, "rounded", !0 === i), Su(t, "rounded-".concat(i), i && !0 !== i), Su(t, "disabled", r), t),
							style: Au(Au({}, c), {}, {
								width: l,
								height: l
							}),
							attrs: {
								"aria-label": v || null
							},
							props: f ? {
								variant: n,
								disabled: r,
								type: d
							} : m ? Qa(Cu, this) : {},
							on: f || m ? {
								click: this.onClick
							} : {}
						}, [y, A])
					}
				}),
				Ou = qa({
					overlap: Va(ui, .3),
					rounded: Va(ai, !1),
					size: Va(Jr),
					square: Va(Qr, !1),
					tag: Va(Jr, "div"),
					variant: Va(Jr)
				}, Ct),
				xu = lt({
					components: {
						BAvatar: ku,
						BAvatarGroup: r.default.extend({
							name: Ct,
							mixins: [to],
							provide: function() {
								return {
									bvAvatarGroup: this
								}
							},
							props: Ou,
							computed: {
								computedSize: function() {
									return Tu(this.size)
								},
								overlapScale: function() {
									return Lo(Do(Ri(this.overlap, 0), 0), 1) / 2
								},
								paddingStyle: function() {
									var e = this.computedSize;
									return (e = e ? "calc(".concat(e, " * ").concat(this.overlapScale, ")") : null) ? {
										paddingLeft: e,
										paddingRight: e
									} : {}
								}
							},
							render: function(e) {
								var t = e("div", {
									staticClass: "b-avatar-group-inner",
									style: this.paddingStyle
								}, this.normalizeSlot());
								return e(this.tag, {
									staticClass: "b-avatar-group",
									attrs: {
										role: "group"
									}
								}, [t])
							}
						})
					}
				});

			function Pu(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Mu(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Pu(Object(n), !0).forEach((function(t) {
						Iu(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pu(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Iu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Lu = je(iu, ["event", "routerTag"]);
			delete Lu.href.default, delete Lu.to.default;
			var Du = qa(He(Mu(Mu({}, Lu), {}, {
					pill: Va(Qr, !1),
					tag: Va(Jr, "span"),
					variant: Va(Jr, "secondary")
				})), "BBadge"),
				Bu = r.default.extend({
					name: "BBadge",
					functional: !0,
					props: Du,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.active,
							o = n.disabled,
							s = Jo(n),
							u = s ? au : n.tag,
							c = n.variant || "secondary";
						return e(u, St(r, {
							staticClass: "badge",
							class: ["badge-".concat(c), {
								"badge-pill": n.pill,
								active: a,
								disabled: o
							}],
							props: s ? Qa(Lu, n) : {}
						}), i)
					}
				}),
				Nu = lt({
					components: {
						BBadge: Bu
					}
				}),
				Ru = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					return String(e).replace(k, "")
				},
				Fu = function(e, t) {
					return e ? {
						innerHTML: e
					} : t ? {
						textContent: t
					} : {}
				};

			function Uu(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ju(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Uu(Object(n), !0).forEach((function(t) {
						Hu(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uu(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Hu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Yu = qa(He(ju(ju({}, je(iu, ["event", "routerTag"])), {}, {
					ariaCurrent: Va(Jr, "location"),
					html: Va(Jr),
					text: Va(Jr)
				})), Ot),
				Vu = r.default.extend({
					name: Ot,
					functional: !0,
					props: Yu,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.active,
							o = a ? "span" : au,
							s = {
								attrs: {
									"aria-current": a ? n.ariaCurrent : null
								},
								props: Qa(Yu, n)
							};
						return i || (s.domProps = Fu(n.html, n.text)), e(o, St(r, s), i)
					}
				}),
				zu = qa(Yu, kt),
				Qu = r.default.extend({
					name: kt,
					functional: !0,
					props: zu,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e("li", St(r, {
							staticClass: "breadcrumb-item",
							class: {
								active: n.active
							}
						}), [e(Vu, {
							props: n
						}, i)])
					}
				});

			function Gu(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function qu(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Gu(Object(n), !0).forEach((function(t) {
						Wu(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gu(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Wu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ku = qa({
					items: Va(zr)
				}, $t),
				Xu = lt({
					components: {
						BBreadcrumb: r.default.extend({
							name: $t,
							functional: !0,
							props: Ku,
							render: function(e, t) {
								var n = t.props,
									r = t.data,
									i = t.children,
									a = n.items,
									o = i;
								if (we(a)) {
									var s = !1;
									o = a.map((function(t, n) {
										Ee(t) || (t = {
											text: zi(t)
										});
										var r = t.active;
										return r && (s = !0), r || s || (r = n + 1 === a.length), e(Qu, {
											props: qu(qu({}, t), {}, {
												active: r
											})
										})
									}))
								}
								return e("ol", St(r, {
									staticClass: "breadcrumb"
								}), o)
							}
						}),
						BBreadcrumbItem: Qu,
						BBreadcrumbLink: Vu
					}
				}),
				Ju = lt({
					components: {
						BButton: vu,
						BBtn: vu,
						BButtonClose: ho,
						BBtnClose: ho
					}
				});

			function Zu(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ec(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Zu(Object(n), !0).forEach((function(t) {
						tc(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zu(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function tc(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var nc = qa(He(ec(ec({}, Ue(lu, ["size"])), {}, {
					ariaRole: Va(Jr, "group"),
					size: Va(Jr),
					tag: Va(Jr, "div"),
					vertical: Va(Qr, !1)
				})), Mt),
				rc = r.default.extend({
					name: Mt,
					functional: !0,
					props: nc,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							class: tc({
								"btn-group": !n.vertical,
								"btn-group-vertical": n.vertical
							}, "btn-group-".concat(n.size), n.size),
							attrs: {
								role: n.ariaRole
							}
						}), i)
					}
				}),
				ic = lt({
					components: {
						BButtonGroup: rc,
						BBtnGroup: rc
					}
				}),
				ac = [".btn:not(.disabled):not([disabled]):not(.dropdown-item)", ".form-control:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(","),
				oc = qa({
					justify: Va(Qr, !1),
					keyNav: Va(Qr, !1)
				}, It),
				sc = r.default.extend({
					name: It,
					mixins: [to],
					props: oc,
					mounted: function() {
						this.keyNav && this.getItems()
					},
					methods: {
						getItems: function() {
							var e = sa(ac, this.$el);
							return e.forEach((function(e) {
								e.tabIndex = -1
							})), e.filter((function(e) {
								return ia(e)
							}))
						},
						focusFirst: function() {
							var e = this.getItems();
							Oa(e[0])
						},
						focusPrev: function(e) {
							var t = this.getItems(),
								n = t.indexOf(e.target);
							n > -1 && (t = t.slice(0, n).reverse(), Oa(t[0]))
						},
						focusNext: function(e) {
							var t = this.getItems(),
								n = t.indexOf(e.target);
							n > -1 && (t = t.slice(n + 1), Oa(t[0]))
						},
						focusLast: function() {
							var e = this.getItems().reverse();
							Oa(e[0])
						},
						onFocusin: function(e) {
							var t = this.$el;
							e.target !== t || fa(t, e.relatedTarget) || (oo(e), this.focusFirst(e))
						},
						onKeydown: function(e) {
							var t = e.keyCode,
								n = e.shiftKey;
							t === js || t === Rs ? (oo(e), n ? this.focusFirst(e) : this.focusPrev(e)) : t !== Ls && t !== Fs || (oo(e), n ? this.focusLast(e) : this.focusNext(e))
						}
					},
					render: function(e) {
						var t = this.keyNav;
						return e("div", {
							staticClass: "btn-toolbar",
							class: {
								"justify-content-between": this.justify
							},
							attrs: {
								role: "toolbar",
								tabindex: t ? "0" : null
							},
							on: t ? {
								focusin: this.onFocusin,
								keydown: this.onKeydown
							} : {}
						}, [this.normalizeSlot()])
					}
				}),
				uc = lt({
					components: {
						BButtonToolbar: sc,
						BBtnToolbar: sc
					}
				}),
				cc = "gregory",
				lc = "long",
				fc = "short",
				dc = "2-digit",
				hc = "numeric";

			function pc(e, t) {
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
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return _c(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _c(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _c(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function mc(e, t, n) {
				return (mc = bc() ? Reflect.construct : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var i = new(Function.bind.apply(e, r));
					return n && gc(i, n.prototype), i
				}).apply(null, arguments)
			}

			function bc() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function gc(e, t) {
				return (gc = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var vc, yc = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return mc(Date, t)
				},
				Ac = function(e) {
					if (ye(e) && j.test(e.trim())) {
						var t = pc(e.split(H).map((function(e) {
								return Ni(e, 1)
							})), 3),
							n = t[0],
							r = t[1],
							i = t[2];
						return yc(n, r - 1, i)
					}
					return Ce(e) ? yc(e.getFullYear(), e.getMonth(), e.getDate()) : null
				},
				Sc = function(e) {
					if (!(e = Ac(e))) return null;
					var t = e.getFullYear(),
						n = "0".concat(e.getMonth() + 1).slice(-2),
						r = "0".concat(e.getDate()).slice(-2);
					return "".concat(t, "-").concat(n, "-").concat(r)
				},
				wc = function(e, t) {
					return new Intl.DateTimeFormat(e, t).format
				},
				Ec = function(e, t) {
					return Sc(e) === Sc(t)
				},
				Tc = function(e) {
					return (e = yc(e)).setDate(1), e
				},
				Cc = function(e) {
					return (e = yc(e)).setMonth(e.getMonth() + 1), e.setDate(0), e
				},
				$c = function(e, t) {
					var n = (e = yc(e)).getMonth();
					return e.setFullYear(e.getFullYear() + t), e.getMonth() !== n && e.setDate(0), e
				},
				kc = function(e) {
					var t = (e = yc(e)).getMonth();
					return e.setMonth(t - 1), e.getMonth() === t && e.setDate(0), e
				},
				Oc = function(e) {
					var t = (e = yc(e)).getMonth();
					return e.setMonth(t + 1), e.getMonth() === (t + 2) % 12 && e.setDate(0), e
				},
				xc = function(e) {
					return $c(e, -1)
				},
				Pc = function(e) {
					return $c(e, 1)
				},
				Mc = function(e) {
					return $c(e, -10)
				},
				Ic = function(e) {
					return $c(e, 10)
				},
				Lc = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					return e = Ac(e), t = Ac(t) || e, n = Ac(n) || e, e ? e < t ? t : e > n ? n : e : null
				},
				Dc = ["ar", "az", "ckb", "fa", "he", "ks", "lrc", "mzn", "ps", "sd", "te", "ug", "ur", "yi"].map((function(e) {
					return e.toLowerCase()
				})),
				Bc = function(e) {
					var t = zi(e).toLowerCase().replace(J, "").split("-"),
						n = t.slice(0, 2).join("-"),
						r = t[0];
					return Mi(Dc, n) || Mi(Dc, r)
				},
				Nc = {
					id: Va(Jr)
				},
				Rc = r.default.extend({
					props: Nc,
					data: function() {
						return {
							localId_: null
						}
					},
					computed: {
						safeId: function() {
							var e = this.id || this.localId_;
							return function(t) {
								return e ? (t = String(t || "").replace(/\s+/g, "_")) ? e + "_" + t : e : null
							}
						}
					},
					mounted: function() {
						var e = this;
						this.$nextTick((function() {
							e.localId_ = "__BVID__".concat(e[wt])
						}))
					}
				});

			function Fc(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Uc(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Fc(Object(n), !0).forEach((function(t) {
						jc(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fc(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function jc(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Hc = Ja("value", {
					type: oi
				}),
				Yc = Hc.mixin,
				Vc = Hc.props,
				zc = Hc.prop,
				Qc = Hc.event,
				Gc = qa(He(Uc(Uc(Uc({}, Nc), Vc), {}, {
					ariaControls: Va(Jr),
					block: Va(Qr, !1),
					dateDisabledFn: Va(qr),
					dateFormatOptions: Va(Kr, {
						year: hc,
						month: lc,
						day: hc,
						weekday: lc
					}),
					dateInfoFn: Va(qr),
					direction: Va(Jr),
					disabled: Va(Qr, !1),
					hidden: Va(Qr, !1),
					hideHeader: Va(Qr, !1),
					initialDate: Va(oi),
					labelCalendar: Va(Jr, "Calendar"),
					labelCurrentMonth: Va(Jr, "Current month"),
					labelHelp: Va(Jr, "Use cursor keys to navigate calendar dates"),
					labelNav: Va(Jr, "Calendar navigation"),
					labelNextDecade: Va(Jr, "Next decade"),
					labelNextMonth: Va(Jr, "Next month"),
					labelNextYear: Va(Jr, "Next year"),
					labelNoDateSelected: Va(Jr, "No date selected"),
					labelPrevDecade: Va(Jr, "Previous decade"),
					labelPrevMonth: Va(Jr, "Previous month"),
					labelPrevYear: Va(Jr, "Previous year"),
					labelSelected: Va(Jr, "Selected date"),
					labelToday: Va(Jr, "Today"),
					locale: Va(ni),
					max: Va(oi),
					min: Va(oi),
					navButtonVariant: Va(Jr, "secondary"),
					noHighlightToday: Va(Qr, !1),
					noKeyNav: Va(Qr, !1),
					readonly: Va(Qr, !1),
					roleDescription: Va(Jr),
					selectedVariant: Va(Jr, "primary"),
					showDecadeNav: Va(Qr, !1),
					startWeekday: Va(ui, 0),
					todayVariant: Va(Jr),
					valueAsDate: Va(Qr, !1),
					weekdayHeaderFormat: Va(Jr, fc, (function(e) {
						return Mi([lc, fc, "narrow"], e)
					})),
					width: Va(Jr, "270px")
				})), Lt),
				qc = r.default.extend({
					name: Lt,
					mixins: [Gs, Rc, Yc, to],
					props: Gc,
					data: function() {
						var e = Sc(this[zc]) || "";
						return {
							selectedYMD: e,
							activeYMD: e || Sc(Lc(this.initialDate || this.getToday()), this.min, this.max),
							gridHasFocus: !1,
							isLive: !1
						}
					},
					computed: {
						valueId: function() {
							return this.safeId()
						},
						widgetId: function() {
							return this.safeId("_calendar-wrapper_")
						},
						navId: function() {
							return this.safeId("_calendar-nav_")
						},
						gridId: function() {
							return this.safeId("_calendar-grid_")
						},
						gridCaptionId: function() {
							return this.safeId("_calendar-grid-caption_")
						},
						gridHelpId: function() {
							return this.safeId("_calendar-grid-help_")
						},
						activeId: function() {
							return this.activeYMD ? this.safeId("_cell-".concat(this.activeYMD, "_")) : null
						},
						selectedDate: function() {
							return Ac(this.selectedYMD)
						},
						activeDate: function() {
							return Ac(this.activeYMD)
						},
						computedMin: function() {
							return Ac(this.min)
						},
						computedMax: function() {
							return Ac(this.max)
						},
						computedWeekStarts: function() {
							return Do(Ni(this.startWeekday, 0), 0) % 7
						},
						computedLocale: function() {
							return function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cc;
								e = Ii(e).filter(We);
								var n = new Intl.DateTimeFormat(e, {
									calendar: t
								});
								return n.resolvedOptions().locale
							}(Ii(this.locale).filter(We), cc)
						},
						computedDateDisabledFn: function() {
							var e = this.dateDisabledFn;
							return Ka(e) ? e : function() {
								return !1
							}
						},
						computedDateInfoFn: function() {
							var e = this.dateInfoFn;
							return Ka(e) ? e : function() {
								return {}
							}
						},
						calendarLocale: function() {
							var e = new Intl.DateTimeFormat(this.computedLocale, {
									calendar: cc
								}),
								t = e.resolvedOptions().calendar,
								n = e.resolvedOptions().locale;
							return t !== cc && (n = n.replace(/-u-.+$/i, "").concat("-u-ca-gregory")), n
						},
						calendarYear: function() {
							return this.activeDate.getFullYear()
						},
						calendarMonth: function() {
							return this.activeDate.getMonth()
						},
						calendarFirstDay: function() {
							return yc(this.calendarYear, this.calendarMonth, 1, 12)
						},
						calendarDaysInMonth: function() {
							var e = yc(this.calendarFirstDay);
							return e.setMonth(e.getMonth() + 1, 0), e.getDate()
						},
						computedVariant: function() {
							return "btn-".concat(this.selectedVariant || "primary")
						},
						computedTodayVariant: function() {
							return "btn-outline-".concat(this.todayVariant || this.selectedVariant || "primary")
						},
						computedNavButtonVariant: function() {
							return "btn-outline-".concat(this.navButtonVariant || "primary")
						},
						isRTL: function() {
							var e = zi(this.direction).toLowerCase();
							return "rtl" === e || "ltr" !== e && Bc(this.computedLocale)
						},
						context: function() {
							var e = this.selectedYMD,
								t = this.activeYMD,
								n = Ac(e),
								r = Ac(t);
							return {
								selectedYMD: e,
								selectedDate: n,
								selectedFormatted: n ? this.formatDateString(n) : this.labelNoDateSelected,
								activeYMD: t,
								activeDate: r,
								activeFormatted: r ? this.formatDateString(r) : "",
								disabled: this.dateDisabled(r),
								locale: this.computedLocale,
								calendarLocale: this.calendarLocale,
								rtl: this.isRTL
							}
						},
						dateOutOfRange: function() {
							var e = this.computedMin,
								t = this.computedMax;
							return function(n) {
								return n = Ac(n), e && n < e || t && n > t
							}
						},
						dateDisabled: function() {
							var e = this,
								t = this.dateOutOfRange;
							return function(n) {
								n = Ac(n);
								var r = Sc(n);
								return !(!t(n) && !e.computedDateDisabledFn(r, n))
							}
						},
						formatDateString: function() {
							return wc(this.calendarLocale, Uc(Uc({
								year: hc,
								month: dc,
								day: dc
							}, this.dateFormatOptions), {}, {
								hour: void 0,
								minute: void 0,
								second: void 0,
								calendar: cc
							}))
						},
						formatYearMonth: function() {
							return wc(this.calendarLocale, {
								year: hc,
								month: lc,
								calendar: cc
							})
						},
						formatWeekdayName: function() {
							return wc(this.calendarLocale, {
								weekday: lc,
								calendar: cc
							})
						},
						formatWeekdayNameShort: function() {
							return wc(this.calendarLocale, {
								weekday: this.weekdayHeaderFormat || fc,
								calendar: cc
							})
						},
						formatDay: function() {
							var e = new Intl.NumberFormat([this.computedLocale], {
								style: "decimal",
								minimumIntegerDigits: 1,
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								notation: "standard"
							});
							return function(t) {
								return e.format(t.getDate())
							}
						},
						prevDecadeDisabled: function() {
							var e = this.computedMin;
							return this.disabled || e && Cc(Mc(this.activeDate)) < e
						},
						prevYearDisabled: function() {
							var e = this.computedMin;
							return this.disabled || e && Cc(xc(this.activeDate)) < e
						},
						prevMonthDisabled: function() {
							var e = this.computedMin;
							return this.disabled || e && Cc(kc(this.activeDate)) < e
						},
						thisMonthDisabled: function() {
							return this.disabled
						},
						nextMonthDisabled: function() {
							var e = this.computedMax;
							return this.disabled || e && Tc(Oc(this.activeDate)) > e
						},
						nextYearDisabled: function() {
							var e = this.computedMax;
							return this.disabled || e && Tc(Pc(this.activeDate)) > e
						},
						nextDecadeDisabled: function() {
							var e = this.computedMax;
							return this.disabled || e && Tc(Ic(this.activeDate)) > e
						},
						calendar: function() {
							for (var e = [], t = this.calendarFirstDay, n = t.getFullYear(), r = t.getMonth(), i = this.calendarDaysInMonth, a = t.getDay(), o = 0 - ((this.computedWeekStarts > a ? 7 : 0) - this.computedWeekStarts) - a, s = 0; s < 6 && o < i; s++) {
								e[s] = [];
								for (var u = 0; u < 7; u++) {
									o++;
									var c = yc(n, r, o),
										l = c.getMonth(),
										f = Sc(c),
										d = this.dateDisabled(c),
										h = this.computedDateInfoFn(f, Ac(f));
									h = ye(h) || we(h) ? {
										class: h
									} : Te(h) ? Uc({
										class: ""
									}, h) : {
										class: ""
									}, e[s].push({
										ymd: f,
										day: this.formatDay(c),
										label: this.formatDateString(c),
										isThisMonth: l === r,
										isDisabled: d,
										info: h
									})
								}
							}
							return e
						},
						calendarHeadings: function() {
							var e = this;
							return this.calendar[0].map((function(t) {
								return {
									text: e.formatWeekdayNameShort(Ac(t.ymd)),
									label: e.formatWeekdayName(Ac(t.ymd))
								}
							}))
						}
					},
					watch: (vc = {}, jc(vc, zc, (function(e, t) {
						var n = Sc(e) || "",
							r = Sc(t) || "";
						Ec(n, r) || (this.activeYMD = n || this.activeYMD, this.selectedYMD = n)
					})), jc(vc, "selectedYMD", (function(e, t) {
						e !== t && this.$emit(Qc, this.valueAsDate ? Ac(e) || null : e || "")
					})), jc(vc, "context", (function(e, t) {
						Hs(e, t) || this.$emit(_r, e)
					})), jc(vc, "hidden", (function(e) {
						this.activeYMD = this.selectedYMD || Sc(this[zc] || this.constrainDate(this.initialDate || this.getToday())), this.setLive(!e)
					})), vc),
					created: function() {
						var e = this;
						this.$nextTick((function() {
							e.$emit(_r, e.context)
						}))
					},
					mounted: function() {
						this.setLive(!0)
					},
					activated: function() {
						this.setLive(!0)
					},
					deactivated: function() {
						this.setLive(!1)
					},
					beforeDestroy: function() {
						this.setLive(!1)
					},
					methods: {
						focus: function() {
							this.disabled || Oa(this.$refs.grid)
						},
						blur: function() {
							this.disabled || xa(this.$refs.grid)
						},
						setLive: function(e) {
							var t = this;
							e ? this.$nextTick((function() {
								Ji((function() {
									t.isLive = !0
								}))
							})) : this.isLive = !1
						},
						getToday: function() {
							return Ac(yc())
						},
						constrainDate: function(e) {
							return Lc(e, this.computedMin, this.computedMax)
						},
						emitSelected: function(e) {
							var t = this;
							this.$nextTick((function() {
								t.$emit(Lr, Sc(e) || "", Ac(e) || null)
							}))
						},
						setGridFocusFlag: function(e) {
							this.gridHasFocus = !this.disabled && "focus" === e.type
						},
						onKeydownWrapper: function(e) {
							if (!this.noKeyNav) {
								var t = e.altKey,
									n = e.ctrlKey,
									r = e.keyCode;
								if (Mi([33, 34, Ds, Ns, Rs, js, Fs, Ls], r)) {
									oo(e);
									var i = yc(this.activeDate),
										a = yc(this.activeDate),
										o = i.getDate(),
										s = this.constrainDate(this.getToday()),
										u = this.isRTL;
									33 === r ? (i = (t ? n ? Mc : xc : kc)(i), (a = yc(i)).setDate(1)) : 34 === r ? (i = (t ? n ? Ic : Pc : Oc)(i), (a = yc(i)).setMonth(a.getMonth() + 1), a.setDate(0)) : r === Rs ? (i.setDate(o + (u ? 1 : -1)), a = i = this.constrainDate(i)) : r === Fs ? (i.setDate(o + (u ? -1 : 1)), a = i = this.constrainDate(i)) : r === js ? (i.setDate(o - 7), a = i = this.constrainDate(i)) : r === Ls ? (i.setDate(o + 7), a = i = this.constrainDate(i)) : r === Ns ? a = i = s : r === Ds && (a = i = Ac(this.selectedDate) || s), this.dateOutOfRange(a) || Ec(i, this.activeDate) || (this.activeYMD = Sc(i)), this.focus()
								}
							}
						},
						onKeydownGrid: function(e) {
							var t = e.keyCode,
								n = this.activeDate;
							t !== Bs && t !== Us || (oo(e), this.disabled || this.readonly || this.dateDisabled(n) || (this.selectedYMD = Sc(n), this.emitSelected(n)), this.focus())
						},
						onClickDay: function(e) {
							var t = this.selectedDate,
								n = this.activeDate,
								r = Ac(e.ymd);
							this.disabled || e.isDisabled || this.dateDisabled(r) || (this.readonly || (this.selectedYMD = Sc(Ec(r, t) ? t : r), this.emitSelected(r)), this.activeYMD = Sc(Ec(r, n) ? n : yc(r)), this.focus())
						},
						gotoPrevDecade: function() {
							this.activeYMD = Sc(this.constrainDate(Mc(this.activeDate)))
						},
						gotoPrevYear: function() {
							this.activeYMD = Sc(this.constrainDate(xc(this.activeDate)))
						},
						gotoPrevMonth: function() {
							this.activeYMD = Sc(this.constrainDate(kc(this.activeDate)))
						},
						gotoCurrentMonth: function() {
							this.activeYMD = Sc(this.constrainDate(this.getToday()))
						},
						gotoNextMonth: function() {
							this.activeYMD = Sc(this.constrainDate(Oc(this.activeDate)))
						},
						gotoNextYear: function() {
							this.activeYMD = Sc(this.constrainDate(Pc(this.activeDate)))
						},
						gotoNextDecade: function() {
							this.activeYMD = Sc(this.constrainDate(Ic(this.activeDate)))
						},
						onHeaderClick: function() {
							this.disabled || (this.activeYMD = this.selectedYMD || Sc(this.getToday()), this.focus())
						}
					},
					render: function(e) {
						var t = this;
						if (this.hidden) return e();
						var n = this.valueId,
							r = this.widgetId,
							i = this.navId,
							a = this.gridId,
							o = this.gridCaptionId,
							s = this.gridHelpId,
							u = this.activeId,
							c = this.disabled,
							l = this.noKeyNav,
							f = this.isLive,
							d = this.isRTL,
							h = this.activeYMD,
							p = this.selectedYMD,
							_ = this.safeId,
							m = !this.showDecadeNav,
							b = Sc(this.getToday()),
							g = !this.noHighlightToday,
							v = e("output", {
								staticClass: "form-control form-control-sm text-center",
								class: {
									"text-muted": c, readonly: this.readonly || c
								},
								attrs: {
									id: n,
									for: a,
									role: "status",
									tabindex: c ? null : "-1",
									"data-selected": zi(p),
									"aria-live": f ? "polite" : "off",
									"aria-atomic": f ? "true" : null
								},
								on: {
									click: this.onHeaderClick,
									focus: this.onHeaderClick
								}
							}, this.selectedDate ? [e("bdi", {
								staticClass: "sr-only"
							}, " (".concat(zi(this.labelSelected), ") ")), e("bdi", this.formatDateString(this.selectedDate))] : this.labelNoDateSelected || "Â ");
						v = e("header", {
							staticClass: "b-calendar-header",
							class: {
								"sr-only": this.hideHeader
							},
							attrs: {
								title: this.selectedDate && this.labelSelectedDate || null
							}
						}, [v]);
						var y = {
								isRTL: d
							},
							A = {
								shiftV: .5
							},
							S = Uc(Uc({}, A), {}, {
								flipH: d
							}),
							w = Uc(Uc({}, A), {}, {
								flipH: !d
							}),
							E = this.normalizeSlot("nav-prev-decade", y) || e(hs, {
								props: S
							}),
							T = this.normalizeSlot("nav-prev-year", y) || e(ps, {
								props: S
							}),
							C = this.normalizeSlot("nav-prev-month", y) || e(ms, {
								props: S
							}),
							$ = this.normalizeSlot("nav-this-month", y) || e(gs, {
								props: A
							}),
							k = this.normalizeSlot("nav-next-month", y) || e(ms, {
								props: w
							}),
							O = this.normalizeSlot("nav-next-year", y) || e(ps, {
								props: w
							}),
							x = this.normalizeSlot("nav-next-decade", y) || e(hs, {
								props: w
							}),
							P = function(n, r, i, a, o) {
								return e("button", {
									staticClass: "btn btn-sm border-0 flex-fill",
									class: [t.computedNavButtonVariant, {
										disabled: a
									}],
									attrs: {
										title: r || null,
										type: "button",
										tabindex: l ? "-1" : null,
										"aria-label": r || null,
										"aria-disabled": a ? "true" : null,
										"aria-keyshortcuts": o || null
									},
									on: a ? {} : {
										click: i
									}
								}, [e("div", {
									attrs: {
										"aria-hidden": "true"
									}
								}, [n])])
							},
							M = e("div", {
								staticClass: "b-calendar-nav d-flex",
								attrs: {
									id: i,
									role: "group",
									tabindex: l ? "-1" : null,
									"aria-hidden": c ? "true" : null,
									"aria-label": this.labelNav || null,
									"aria-controls": a
								}
							}, [m ? e() : P(E, this.labelPrevDecade, this.gotoPrevDecade, this.prevDecadeDisabled, "Ctrl+Alt+PageDown"), P(T, this.labelPrevYear, this.gotoPrevYear, this.prevYearDisabled, "Alt+PageDown"), P(C, this.labelPrevMonth, this.gotoPrevMonth, this.prevMonthDisabled, "PageDown"), P($, this.labelCurrentMonth, this.gotoCurrentMonth, this.thisMonthDisabled, "Home"), P(k, this.labelNextMonth, this.gotoNextMonth, this.nextMonthDisabled, "PageUp"), P(O, this.labelNextYear, this.gotoNextYear, this.nextYearDisabled, "Alt+PageUp"), m ? e() : P(x, this.labelNextDecade, this.gotoNextDecade, this.nextDecadeDisabled, "Ctrl+Alt+PageUp")]),
							I = e("header", {
								staticClass: "b-calendar-grid-caption text-center font-weight-bold",
								class: {
									"text-muted": c
								},
								attrs: {
									id: o,
									"aria-live": f ? "polite" : null,
									"aria-atomic": f ? "true" : null
								},
								key: "grid-caption"
							}, this.formatYearMonth(this.calendarFirstDay)),
							L = e("div", {
								staticClass: "b-calendar-grid-weekdays row no-gutters border-bottom",
								attrs: {
									"aria-hidden": "true"
								}
							}, this.calendarHeadings.map((function(t, n) {
								return e("small", {
									staticClass: "col text-truncate",
									class: {
										"text-muted": c
									},
									attrs: {
										title: t.label === t.text ? null : t.label,
										"aria-label": t.label
									},
									key: n
								}, t.text)
							}))),
							D = this.calendar.map((function(n) {
								var r = n.map((function(n, r) {
									var i, a = n.ymd === p,
										o = n.ymd === h,
										s = n.ymd === b,
										u = _("_cell-".concat(n.ymd, "_")),
										l = e("span", {
											staticClass: "btn border-0 rounded-circle text-nowrap",
											class: (i = {
												focus: o && t.gridHasFocus,
												disabled: n.isDisabled || c,
												active: a
											}, jc(i, t.computedVariant, a), jc(i, t.computedTodayVariant, s && g && !a && n.isThisMonth), jc(i, "btn-outline-light", !(s && g || a || o)), jc(i, "btn-light", !(s && g) && !a && o), jc(i, "text-muted", !n.isThisMonth && !a), jc(i, "text-dark", !(s && g) && !a && !o && n.isThisMonth), jc(i, "font-weight-bold", (a || n.isThisMonth) && !n.isDisabled), i),
											on: {
												click: function() {
													return t.onClickDay(n)
												}
											}
										}, n.day);
									return e("div", {
										staticClass: "col p-0",
										class: n.isDisabled ? "bg-light" : n.info.class || "",
										attrs: {
											id: u,
											role: "button",
											"data-date": n.ymd,
											"aria-hidden": n.isThisMonth ? null : "true",
											"aria-disabled": n.isDisabled || c ? "true" : null,
											"aria-label": [n.label, a ? "(".concat(t.labelSelected, ")") : null, s ? "(".concat(t.labelToday, ")") : null].filter(We).join(" "),
											"aria-selected": a ? "true" : null,
											"aria-current": a ? "date" : null
										},
										key: r
									}, [l])
								}));
								return e("div", {
									staticClass: "row no-gutters",
									key: n[0].ymd
								}, r)
							}));
						D = e("div", {
							staticClass: "b-calendar-grid-body",
							style: c ? {
								pointerEvents: "none"
							} : {}
						}, D);
						var B = e("footer", {
								staticClass: "b-calendar-grid-help border-top small text-muted text-center bg-light",
								attrs: {
									id: s
								}
							}, [e("div", {
								staticClass: "small"
							}, this.labelHelp)]),
							N = e("div", {
								staticClass: "b-calendar-grid form-control h-auto text-center",
								attrs: {
									id: a,
									role: "application",
									tabindex: l ? "-1" : c ? null : "0",
									"data-month": h.slice(0, -3),
									"aria-roledescription": this.labelCalendar || null,
									"aria-labelledby": o,
									"aria-describedby": s,
									"aria-disabled": c ? "true" : null,
									"aria-activedescendant": u
								},
								on: {
									keydown: this.onKeydownGrid,
									focus: this.setGridFocusFlag,
									blur: this.setGridFocusFlag
								},
								ref: "grid"
							}, [I, L, D, B]),
							R = this.normalizeSlot();
						R = R ? e("footer", {
							staticClass: "b-calendar-footer"
						}, R) : e();
						var F = e("div", {
							staticClass: "b-calendar-inner",
							style: this.block ? {} : {
								width: this.width
							},
							attrs: {
								id: r,
								dir: d ? "rtl" : "ltr",
								lang: this.computedLocale || null,
								role: "group",
								"aria-disabled": c ? "true" : null,
								"aria-controls": this.ariaControls || null,
								"aria-roledescription": this.roleDescription || null,
								"aria-describedby": [this.bvAttrs["aria-describedby"], n, s].filter(We).join(" ")
							},
							on: {
								keydown: this.onKeydownWrapper
							}
						}, [v, M, N, R]);
						return e("div", {
							staticClass: "b-calendar",
							class: {
								"d-block": this.block
							}
						}, [F])
					}
				}),
				Wc = lt({
					components: {
						BCalendar: qc
					}
				}),
				Kc = qa({
					bgVariant: Va(Jr),
					borderVariant: Va(Jr),
					tag: Va(Jr, "div"),
					textVariant: Va(Jr)
				}, Dt),
				Xc = (r.default.extend({
					props: Kc
				}), qa({
					title: Va(Jr),
					titleTag: Va(Jr, "h4")
				}, Vt)),
				Jc = r.default.extend({
					name: Vt,
					functional: !0,
					props: Xc,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.titleTag, St(r, {
							staticClass: "card-title"
						}), i || zi(n.title))
					}
				}),
				Zc = qa({
					subTitle: Va(Jr),
					subTitleTag: Va(Jr, "h6"),
					subTitleTextVariant: Va(Jr, "muted")
				}, Ht),
				el = r.default.extend({
					name: Ht,
					functional: !0,
					props: Zc,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.subTitleTag, St(r, {
							staticClass: "card-subtitle",
							class: [n.subTitleTextVariant ? "text-".concat(n.subTitleTextVariant) : null]
						}), i || zi(n.subTitle))
					}
				});

			function tl(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function nl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tl(Object(n), !0).forEach((function(t) {
						rl(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function rl(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var il = qa(He(nl(nl(nl(nl({}, Xc), Zc), za(Kc, ja.bind(null, "body"))), {}, {
					bodyClass: Va(ti),
					overlay: Va(Qr, !1)
				})), Bt),
				al = r.default.extend({
					name: Bt,
					functional: !0,
					props: il,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.bodyBgVariant,
							s = r.bodyBorderVariant,
							u = r.bodyTextVariant,
							c = e();
						r.title && (c = e(Jc, {
							props: Qa(Xc, r)
						}));
						var l = e();
						return r.subTitle && (l = e(el, {
							props: Qa(Zc, r),
							class: ["mb-2"]
						})), e(r.bodyTag, St(i, {
							staticClass: "card-body",
							class: [(n = {
								"card-img-overlay": r.overlay
							}, rl(n, "bg-".concat(o), o), rl(n, "border-".concat(s), s), rl(n, "text-".concat(u), u), n), r.bodyClass]
						}), [c, l, a])
					}
				});

			function ol(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ol(Object(n), !0).forEach((function(t) {
						ul(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ol(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function ul(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var cl = qa(He(sl(sl({}, za(Kc, ja.bind(null, "header"))), {}, {
					header: Va(Jr),
					headerClass: Va(ti),
					headerHtml: Va(Jr)
				})), Ft),
				ll = r.default.extend({
					name: Ft,
					functional: !0,
					props: cl,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.headerBgVariant,
							s = r.headerBorderVariant,
							u = r.headerTextVariant;
						return e(r.headerTag, St(i, {
							staticClass: "card-header",
							class: [r.headerClass, (n = {}, ul(n, "bg-".concat(o), o), ul(n, "border-".concat(s), s), ul(n, "text-".concat(u), u), n)],
							domProps: a ? {} : Fu(r.headerHtml, r.header)
						}), a)
					}
				});

			function fl(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function dl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? fl(Object(n), !0).forEach((function(t) {
						hl(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fl(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function hl(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var pl = qa(He(dl(dl({}, za(Kc, ja.bind(null, "footer"))), {}, {
					footer: Va(Jr),
					footerClass: Va(ti),
					footerHtml: Va(Jr)
				})), Nt),
				_l = r.default.extend({
					name: Nt,
					functional: !0,
					props: pl,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.footerBgVariant,
							s = r.footerBorderVariant,
							u = r.footerTextVariant;
						return e(r.footerTag, St(i, {
							staticClass: "card-footer",
							class: [r.footerClass, (n = {}, hl(n, "bg-".concat(o), o), hl(n, "border-".concat(s), s), hl(n, "text-".concat(u), u), n)],
							domProps: a ? {} : Fu(r.footerHtml, r.footer)
						}), a)
					}
				});

			function ml(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var bl = qa({
					alt: Va(Jr),
					blank: Va(Qr, !1),
					blankColor: Va(Jr, "transparent"),
					block: Va(Qr, !1),
					center: Va(Qr, !1),
					fluid: Va(Qr, !1),
					fluidGrow: Va(Qr, !1),
					height: Va(ui),
					left: Va(Qr, !1),
					right: Va(Qr, !1),
					rounded: Va(ai, !1),
					sizes: Va(ni),
					src: Va(Jr),
					srcset: Va(ni),
					thumbnail: Va(Qr, !1),
					width: Va(ui)
				}, "BImg"),
				gl = r.default.extend({
					name: "BImg",
					functional: !0,
					props: bl,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = r.alt,
							o = r.src,
							s = r.block,
							u = r.fluidGrow,
							c = r.rounded,
							l = Ni(r.width) || null,
							f = Ni(r.height) || null,
							d = null,
							h = Ii(r.srcset).filter(We).join(","),
							p = Ii(r.sizes).filter(We).join(",");
						return r.blank && (!f && l ? f = l : !l && f && (l = f), l || f || (l = 1, f = 1), o = function(e, t, n) {
							var r = encodeURIComponent('<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>'.replace("%{w}", zi(e)).replace("%{h}", zi(t)).replace("%{f}", n));
							return "data:image/svg+xml;charset=UTF-8,".concat(r)
						}(l, f, r.blankColor || "transparent"), h = null, p = null), r.left ? d = "float-left" : r.right ? d = "float-right" : r.center && (d = "mx-auto", s = !0), e("img", St(i, {
							attrs: {
								src: o,
								alt: a,
								width: l ? zi(l) : null,
								height: f ? zi(f) : null,
								srcset: h || null,
								sizes: p || null
							},
							class: (n = {
								"img-thumbnail": r.thumbnail,
								"img-fluid": r.fluid || u,
								"w-100": u,
								rounded: "" === c || !0 === c
							}, ml(n, "rounded-".concat(c), ye(c) && "" !== c), ml(n, d, d), ml(n, "d-block", s), n)
						}))
					}
				});

			function vl(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? vl(Object(n), !0).forEach((function(t) {
						Al(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vl(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Al(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Sl = qa(He(yl(yl({}, Ue(bl, ["src", "alt", "width", "height", "left", "right"])), {}, {
					bottom: Va(Qr, !1),
					end: Va(Qr, !1),
					start: Va(Qr, !1),
					top: Va(Qr, !1)
				})), Ut),
				wl = r.default.extend({
					name: Ut,
					functional: !0,
					props: Sl,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = n.src,
							a = n.alt,
							o = n.width,
							s = n.height,
							u = "card-img";
						return n.top ? u += "-top" : n.right || n.end ? u += "-right" : n.bottom ? u += "-bottom" : (n.left || n.start) && (u += "-left"), e("img", St(r, {
							class: u,
							attrs: {
								src: i,
								alt: a,
								width: o,
								height: s
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

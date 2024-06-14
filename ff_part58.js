								disabled: n
							}, this.sizeFormClass, this.stateClass],
							attrs: {
								id: this.safeId(),
								role: "group",
								tabindex: n || u ? null : "-1",
								"aria-describedby": this.safeId("__selected_tags__")
							},
							on: {
								click: this.onClick,
								focusin: this.onFocusin,
								focusout: this.onFocusout
							}
						}, [f, d, l, h])
					}
				}),
				Pb = lt({
					components: {
						BFormTags: xb,
						BTags: xb,
						BFormTag: pb,
						BTag: pb
					}
				});

			function Mb(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ib(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Mb(Object(n), !0).forEach((function(t) {
						Lb(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mb(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Lb(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Db, Bb = qa(He(Ib(Ib(Ib(Ib(Ib(Ib({}, Nc), zh), Wh), Xh), Z_), {}, {
					maxRows: Va(ui),
					noAutoShrink: Va(Qr, !1),
					noResize: Va(Qr, !1),
					rows: Va(ui, 2),
					wrap: Va(Jr, "soft")
				})), wn),
				Nb = r.default.extend({
					name: wn,
					directives: {
						"b-visible": Bl
					},
					mixins: [Ws, Rc, qs, Qh, Kh, Jh, em, V_, tm],
					props: Bb,
					data: function() {
						return {
							heightInPx: null
						}
					},
					computed: {
						computedStyle: function() {
							var e = {
								resize: !this.computedRows || this.noResize ? "none" : null
							};
							return this.computedRows || (e.height = this.heightInPx, e.overflowY = "scroll"), e
						},
						computedMinRows: function() {
							return Do(Ni(this.rows, 2), 2)
						},
						computedMaxRows: function() {
							return Do(this.computedMinRows, Ni(this.maxRows, 0))
						},
						computedRows: function() {
							return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null
						},
						computedAttrs: function() {
							var e = this.disabled,
								t = this.required;
							return {
								id: this.safeId(),
								name: this.name || null,
								form: this.form || null,
								disabled: e,
								placeholder: this.placeholder || null,
								required: t,
								autocomplete: this.autocomplete || null,
								readonly: this.readonly || this.plaintext,
								rows: this.computedRows,
								wrap: this.wrap || null,
								"aria-required": this.required ? "true" : null,
								"aria-invalid": this.computedAriaInvalid
							}
						},
						computedListeners: function() {
							return Ib(Ib({}, this.bvListeners), {}, {
								input: this.onInput,
								change: this.onChange,
								blur: this.onBlur
							})
						}
					},
					watch: {
						localValue: function() {
							this.setHeight()
						}
					},
					mounted: function() {
						this.setHeight()
					},
					methods: {
						visibleCallback: function(e) {
							e && this.$nextTick(this.setHeight)
						},
						setHeight: function() {
							var e = this;
							this.$nextTick((function() {
								Ji((function() {
									e.heightInPx = e.computeHeight()
								}))
							}))
						},
						computeHeight: function() {
							if (this.$isServer || !me(this.computedRows)) return null;
							var e = this.$el;
							if (!ia(e)) return null;
							var t = Ea(e),
								n = Ri(t.lineHeight, 1),
								r = Ri(t.borderTopWidth, 0) + Ri(t.borderBottomWidth, 0),
								i = Ri(t.paddingTop, 0) + Ri(t.paddingBottom, 0),
								a = r + i,
								o = n * this.computedMinRows + a,
								s = Sa(e, "height") || t.height;
							ya(e, "height", "auto");
							var u = e.scrollHeight;
							ya(e, "height", s);
							var c = Do((u - i) / n, 2),
								l = Lo(Do(c, this.computedMinRows), this.computedMaxRows),
								f = Do(No(l * n + a), o);
							return this.noAutoShrink && Ri(s, 0) > f ? s : "".concat(f, "px")
						}
					},
					render: function(e) {
						return e("textarea", {
							class: this.computedClass,
							style: this.computedStyle,
							directives: [{
								name: "b-visible",
								value: this.visibleCallback,
								modifiers: {
									640: !0
								}
							}],
							attrs: this.computedAttrs,
							domProps: {
								value: this.localValue
							},
							on: this.computedListeners,
							ref: "input"
						})
					}
				}),
				Rb = lt({
					components: {
						BFormTextarea: Nb,
						BTextarea: Nb
					}
				});

			function Fb(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ub(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Fb(Object(n), !0).forEach((function(t) {
						jb(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fb(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function jb(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function Hb(e, t) {
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
						if ("string" == typeof e) return Yb(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yb(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Yb(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Vb, zb = Ja("value", {
					type: Jr,
					defaultValue: ""
				}),
				Qb = zb.mixin,
				Gb = zb.props,
				qb = zb.prop,
				Wb = zb.event,
				Kb = "numeric",
				Xb = function(e) {
					return "00".concat(e || "").slice(-2)
				},
				Jb = function(e) {
					e = zi(e);
					var t = null,
						n = null,
						r = null;
					if (Y.test(e)) {
						var i = Hb(e.split(":").map((function(e) {
							return Ni(e, null)
						})), 3);
						t = i[0], n = i[1], r = i[2]
					}
					return {
						hours: be(t) ? null : t,
						minutes: be(n) ? null : n,
						seconds: be(r) ? null : r,
						ampm: be(t) || t < 12 ? 0 : 1
					}
				},
				Zb = qa(He(Ub(Ub(Ub(Ub({}, Nc), Gb), Ue(ob, ["labelIncrement", "labelDecrement"])), {}, {
					ariaLabelledby: Va(Jr),
					disabled: Va(Qr, !1),
					hidden: Va(Qr, !1),
					hideHeader: Va(Qr, !1),
					hour12: Va(Qr, null),
					labelAm: Va(Jr, "AM"),
					labelAmpm: Va(Jr, "AM/PM"),
					labelHours: Va(Jr, "Hours"),
					labelMinutes: Va(Jr, "Minutes"),
					labelNoTimeSelected: Va(Jr, "No time selected"),
					labelPm: Va(Jr, "PM"),
					labelSeconds: Va(Jr, "Seconds"),
					labelSelected: Va(Jr, "Selected time"),
					locale: Va(ni),
					minutesStep: Va(ui, 1),
					readonly: Va(Qr, !1),
					secondsStep: Va(ui, 1),
					showSeconds: Va(Qr, !1)
				})), "BTime"),
				eg = r.default.extend({
					name: "BTime",
					mixins: [Rc, Qb, to],
					props: Zb,
					data: function() {
						var e = Jb(this[qb] || "");
						return {
							modelHours: e.hours,
							modelMinutes: e.minutes,
							modelSeconds: e.seconds,
							modelAmpm: e.ampm,
							isLive: !1
						}
					},
					computed: {
						computedHMS: function() {
							return function(e) {
								var t = e.hours,
									n = e.minutes,
									r = e.seconds,
									i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
								if (me(t) || me(n) || i && me(r)) return "";
								var a = [t, n, i ? r : 0];
								return a.map(Xb).join(":")
							}({
								hours: this.modelHours,
								minutes: this.modelMinutes,
								seconds: this.modelSeconds
							}, this.showSeconds)
						},
						resolvedOptions: function() {
							var e = Ii(this.locale).filter(We),
								t = {
									hour: Kb,
									minute: Kb,
									second: Kb
								};
							be(this.hour12) || (t.hour12 = !!this.hour12);
							var n = new Intl.DateTimeFormat(e, t).resolvedOptions(),
								r = n.hour12 || !1,
								i = n.hourCycle || (r ? "h12" : "h23");
							return {
								locale: n.locale,
								hour12: r,
								hourCycle: i
							}
						},
						computedLocale: function() {
							return this.resolvedOptions.locale
						},
						computedLang: function() {
							return (this.computedLocale || "").replace(/-u-.*$/, "")
						},
						computedRTL: function() {
							return Bc(this.computedLang)
						},
						computedHourCycle: function() {
							return this.resolvedOptions.hourCycle
						},
						is12Hour: function() {
							return !!this.resolvedOptions.hour12
						},
						context: function() {
							return {
								locale: this.computedLocale,
								isRTL: this.computedRTL,
								hourCycle: this.computedHourCycle,
								hour12: this.is12Hour,
								hours: this.modelHours,
								minutes: this.modelMinutes,
								seconds: this.showSeconds ? this.modelSeconds : 0,
								value: this.computedHMS,
								formatted: this.formattedTimeString
							}
						},
						valueId: function() {
							return this.safeId() || null
						},
						computedAriaLabelledby: function() {
							return [this.ariaLabelledby, this.valueId].filter(We).join(" ") || null
						},
						timeFormatter: function() {
							var e = {
								hour12: this.is12Hour,
								hourCycle: this.computedHourCycle,
								hour: Kb,
								minute: Kb,
								timeZone: "UTC"
							};
							return this.showSeconds && (e.second = Kb), wc(this.computedLocale, e)
						},
						numberFormatter: function() {
							return new Intl.NumberFormat(this.computedLocale, {
								style: "decimal",
								minimumIntegerDigits: 2,
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								notation: "standard"
							}).format
						},
						formattedTimeString: function() {
							var e = this.modelHours,
								t = this.modelMinutes,
								n = this.showSeconds && this.modelSeconds || 0;
							return this.computedHMS ? this.timeFormatter(yc(Date.UTC(0, 0, 1, e, t, n))) : this.labelNoTimeSelected || " "
						},
						spinScopedSlots: function() {
							var e = this.$createElement;
							return {
								increment: function(t) {
									var n = t.hasFocus;
									return e(bs, {
										props: {
											scale: n ? 1.5 : 1.25
										},
										attrs: {
											"aria-hidden": "true"
										}
									})
								},
								decrement: function(t) {
									var n = t.hasFocus;
									return e(bs, {
										props: {
											flipV: !0,
											scale: n ? 1.5 : 1.25
										},
										attrs: {
											"aria-hidden": "true"
										}
									})
								}
							}
						}
					},
					watch: (Db = {}, jb(Db, qb, (function(e, t) {
						if (e !== t && !Hs(Jb(e), Jb(this.computedHMS))) {
							var n = Jb(e),
								r = n.hours,
								i = n.minutes,
								a = n.seconds,
								o = n.ampm;
							this.modelHours = r, this.modelMinutes = i, this.modelSeconds = a, this.modelAmpm = o
						}
					})), jb(Db, "computedHMS", (function(e, t) {
						e !== t && this.$emit(Wb, e)
					})), jb(Db, "context", (function(e, t) {
						Hs(e, t) || this.$emit(_r, e)
					})), jb(Db, "modelAmpm", (function(e, t) {
						var n = this;
						if (e !== t) {
							var r = me(this.modelHours) ? 0 : this.modelHours;
							this.$nextTick((function() {
								0 === e && r > 11 ? n.modelHours = r - 12 : 1 === e && r < 12 && (n.modelHours = r + 12)
							}))
						}
					})), jb(Db, "modelHours", (function(e, t) {
						e !== t && (this.modelAmpm = e > 11 ? 1 : 0)
					})), Db),
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
							this.disabled || Oa(this.$refs.spinners[0])
						},
						blur: function() {
							if (!this.disabled) {
								var e = ta();
								fa(this.$el, e) && xa(e)
							}
						},
						formatHours: function(e) {
							var t = this.computedHourCycle;
							return e = 0 === (e = this.is12Hour && e > 12 ? e - 12 : e) && "h12" === t ? 12 : 0 === e && "h24" === t ? 24 : 12 === e && "h11" === t ? 0 : e, this.numberFormatter(e)
						},
						formatMinutes: function(e) {
							return this.numberFormatter(e)
						},
						formatSeconds: function(e) {
							return this.numberFormatter(e)
						},
						formatAmpm: function(e) {
							return 0 === e ? this.labelAm : 1 === e ? this.labelPm : ""
						},
						setHours: function(e) {
							this.modelHours = e
						},
						setMinutes: function(e) {
							this.modelMinutes = e
						},
						setSeconds: function(e) {
							this.modelSeconds = e
						},
						setAmpm: function(e) {
							this.modelAmpm = e
						},
						onSpinLeftRight: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								t = e.type,
								n = e.keyCode;
							if (!this.disabled && "keydown" === t && (n === Rs || n === Fs)) {
								oo(e);
								var r = this.$refs.spinners || [],
									i = r.map((function(e) {
										return !!e.hasFocus
									})).indexOf(!0);
								i = (i += n === Rs ? -1 : 1) >= r.length ? 0 : i < 0 ? r.length - 1 : i, Oa(r[i])
							}
						},
						setLive: function(e) {
							var t = this;
							e ? this.$nextTick((function() {
								Ji((function() {
									t.isLive = !0
								}))
							})) : this.isLive = !1
						}
					},
					render: function(e) {
						var t = this;
						if (this.hidden) return e();
						var n = this.valueId,
							r = this.computedAriaLabelledby,
							i = [],
							a = function(r, a, o) {
								var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
									u = t.safeId("_spinbutton_".concat(a, "_")) || null;
								return i.push(u), e(sb, {
									class: o,
									props: Ub({
										id: u,
										placeholder: "--",
										vertical: !0,
										required: !0,
										disabled: t.disabled,
										readonly: t.readonly,
										locale: t.computedLocale,
										labelIncrement: t.labelIncrement,
										labelDecrement: t.labelDecrement,
										wrap: !0,
										ariaControls: n,
										min: 0
									}, s),
									scopedSlots: t.spinScopedSlots,
									on: {
										change: r
									},
									key: a,
									ref: "spinners",
									refInFor: !0
								})
							},
							o = function() {
								return e("div", {
									staticClass: "d-flex flex-column",
									class: {
										"text-muted": t.disabled || t.readonly
									},
									attrs: {
										"aria-hidden": "true"
									}
								}, [e(gs, {
									props: {
										shiftV: 4,
										scale: .5
									}
								}), e(gs, {
									props: {
										shiftV: -4,
										scale: .5
									}
								})])
							},
							s = [];
						s.push(a(this.setHours, "hours", "b-time-hours", {
							value: this.modelHours,
							max: 23,
							step: 1,
							formatterFn: this.formatHours,
							ariaLabel: this.labelHours
						})), s.push(o()), s.push(a(this.setMinutes, "minutes", "b-time-minutes", {
							value: this.modelMinutes,
							max: 59,
							step: this.minutesStep || 1,
							formatterFn: this.formatMinutes,
							ariaLabel: this.labelMinutes
						})), this.showSeconds && (s.push(o()), s.push(a(this.setSeconds, "seconds", "b-time-seconds", {
							value: this.modelSeconds,
							max: 59,
							step: this.secondsStep || 1,
							formatterFn: this.formatSeconds,
							ariaLabel: this.labelSeconds
						}))), this.is12Hour && s.push(a(this.setAmpm, "ampm", "b-time-ampm", {
							value: this.modelAmpm,
							max: 1,
							formatterFn: this.formatAmpm,
							ariaLabel: this.labelAmpm,
							required: !1
						})), s = e("div", {
							staticClass: "d-flex align-items-center justify-content-center mx-auto",
							attrs: {
								role: "group",
								tabindex: this.disabled || this.readonly ? null : "-1",
								"aria-labelledby": r
							},
							on: {
								keydown: this.onSpinLeftRight,
								click: function(e) {
									e.target === e.currentTarget && t.focus()
								}
							}
						}, s);
						var u = e("output", {
								staticClass: "form-control form-control-sm text-center",
								class: {
									disabled: this.disabled || this.readonly
								},
								attrs: {
									id: n,
									role: "status",
									for: i.filter(We).join(" ") || null,
									tabindex: this.disabled ? null : "-1",
									"aria-live": this.isLive ? "polite" : "off",
									"aria-atomic": "true"
								},
								on: {
									click: this.focus,
									focus: this.focus
								}
							}, [e("bdi", this.formattedTimeString), this.computedHMS ? e("span", {
								staticClass: "sr-only"
							}, " (".concat(this.labelSelected, ") ")) : ""]),
							c = e("header", {
								staticClass: "b-time-header",
								class: {
									"sr-only": this.hideHeader
								}
							}, [u]),
							l = this.normalizeSlot();
						return l = l ? e("footer", {
							staticClass: "b-time-footer"
						}, l) : e(), e("div", {
							staticClass: "b-time d-inline-flex flex-column text-center",
							attrs: {
								role: "group",
								lang: this.computedLang || null,
								"aria-labelledby": r || null,
								"aria-disabled": this.disabled ? "true" : null,
								"aria-readonly": this.readonly && !this.disabled ? "true" : null
							}
						}, [c, s, l])
					}
				});

			function tg(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ng(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tg(Object(n), !0).forEach((function(t) {
						rg(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tg(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function rg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var ig = Ja("value", {
					type: Jr,
					defaultValue: ""
				}),
				ag = ig.mixin,
				og = ig.props,
				sg = ig.prop,
				ug = ig.event,
				cg = je(Zb, ["hidden", "id", "value"]),
				lg = je(Kp, ["formattedValue", "id", "lang", "rtl", "value"]),
				fg = qa(He(ng(ng(ng(ng(ng({}, Nc), og), cg), lg), {}, {
					closeButtonVariant: Va(Jr, "outline-secondary"),
					labelCloseButton: Va(Jr, "Close"),
					labelNowButton: Va(Jr, "Select now"),
					labelResetButton: Va(Jr, "Reset"),
					noCloseButton: Va(Qr, !1),
					nowButton: Va(Qr, !1),
					nowButtonVariant: Va(Jr, "outline-primary"),
					resetButton: Va(Qr, !1),
					resetButtonVariant: Va(Jr, "outline-danger"),
					resetValue: Va(oi)
				})), En),
				dg = r.default.extend({
					name: En,
					mixins: [Rc, ag],
					props: fg,
					data: function() {
						return {
							localHMS: this[sg] || "",
							localLocale: null,
							isRTL: !1,
							formattedValue: "",
							isVisible: !1
						}
					},
					computed: {
						computedLang: function() {
							return (this.localLocale || "").replace(/-u-.*$/i, "") || null
						}
					},
					watch: (Vb = {}, rg(Vb, sg, (function(e) {
						this.localHMS = e || ""
					})), rg(Vb, "localHMS", (function(e) {
						this.isVisible && this.$emit(ug, e || "")
					})), Vb),
					methods: {
						focus: function() {
							this.disabled || Oa(this.$refs.control)
						},
						blur: function() {
							this.disabled || xa(this.$refs.control)
						},
						setAndClose: function(e) {
							var t = this;
							this.localHMS = e, this.$nextTick((function() {
								t.$refs.control.hide(!0)
							}))
						},
						onInput: function(e) {
							this.localHMS !== e && (this.localHMS = e)
						},
						onContext: function(e) {
							var t = e.isRTL,
								n = e.locale,
								r = e.value,
								i = e.formatted;
							this.isRTL = t, this.localLocale = n, this.formattedValue = i, this.localHMS = r || "", this.$emit(_r, e)
						},
						onNowButton: function() {
							var e = new Date,
								t = [e.getHours(), e.getMinutes(), this.showSeconds ? e.getSeconds() : 0].map((function(e) {
									return "00".concat(e || "").slice(-2)
								})).join(":");
							this.setAndClose(t)
						},
						onResetButton: function() {
							this.setAndClose(this.resetValue)
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
								Oa(e.$refs.time), e.$emit(Br)
							}))
						},
						onHidden: function() {
							this.isVisible = !1, this.$emit(Cr)
						},
						defaultButtonFn: function(e) {
							var t = e.isHovered,
								n = e.hasFocus;
							return this.$createElement(t || n ? ys : vs, {
								attrs: {
									"aria-hidden": "true"
								}
							})
						}
					},
					render: function(e) {
						var t = this.localHMS,
							n = this.disabled,
							r = this.readonly,
							i = this.$props,
							a = be(this.placeholder) ? this.labelNoTimeSelected : this.placeholder,
							o = [];
						if (this.nowButton) {
							var s = this.labelNowButton;
							o.push(e(vu, {
								props: {
									size: "sm",
									disabled: n || r,
									variant: this.nowButtonVariant
								},
								attrs: {
									"aria-label": s || null
								},
								on: {
									click: this.onNowButton
								},
								key: "now-btn"
							}, s))
						}
						if (this.resetButton) {
							o.length > 0 && o.push(e("span", "Â "));
							var u = this.labelResetButton;
							o.push(e(vu, {
								props: {
									size: "sm",
									disabled: n || r,
									variant: this.resetButtonVariant
								},
								attrs: {
									"aria-label": u || null
								},
								on: {
									click: this.onResetButton
								},
								key: "reset-btn"
							}, u))
						}
						if (!this.noCloseButton) {
							o.length > 0 && o.push(e("span", "Â "));
							var c = this.labelCloseButton;
							o.push(e(vu, {
								props: {
									size: "sm",
									disabled: n,
									variant: this.closeButtonVariant
								},
								attrs: {
									"aria-label": c || null
								},
								on: {
									click: this.onCloseButton
								},
								key: "close-btn"
							}, c))
						}
						o.length > 0 && (o = [e("div", {
							staticClass: "b-form-date-controls d-flex flex-wrap",
							class: {
								"justify-content-between": o.length > 1, "justify-content-end": o.length < 2
							}
						}, o)]);
						var l = e(eg, {
							staticClass: "b-form-time-control",
							props: ng(ng({}, Qa(cg, i)), {}, {
								value: t,
								hidden: !this.isVisible
							}),
							on: {
								input: this.onInput,
								context: this.onContext
							},
							ref: "time"
						}, o);
						return e(Xp, {
							staticClass: "b-form-timepicker",
							props: ng(ng({}, Qa(lg, i)), {}, {
								id: this.safeId(),
								value: t,
								formattedValue: t ? this.formattedValue : "",
								placeholder: a,
								rtl: this.isRTL,
								lang: this.computedLang
							}),
							on: {
								show: this.onShow,
								shown: this.onShown,
								hidden: this.onHidden
							},
							scopedSlots: rg({}, hi, this.$scopedSlots[hi] || this.defaultButtonFn),
							ref: "control"
						}, [l])
					}
				}),
				hg = lt({
					components: {
						BFormTimepicker: dg,
						BTimepicker: dg
					}
				}),
				pg = lt({
					components: {
						BImg: gl,
						BImgLazy: Yl
					}
				}),
				_g = qa({
					tag: Va(Jr, "div")
				}, Pn),
				mg = r.default.extend({
					name: Pn,
					functional: !0,
					props: _g,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							staticClass: "input-group-text"
						}), i)
					}
				}),
				bg = qa({
					append: Va(Qr, !1),
					id: Va(Jr),
					isText: Va(Qr, !1),
					tag: Va(Jr, "div")
				}, kn),
				gg = r.default.extend({
					name: kn,
					functional: !0,
					props: bg,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.append;
						return e(n.tag, St(r, {
							class: {
								"input-group-append": a, "input-group-prepend": !a
							},
							attrs: {
								id: n.id
							}
						}), n.isText ? [e(mg, i)] : i)
					}
				});

			function vg(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yg(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? vg(Object(n), !0).forEach((function(t) {
						Ag(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vg(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ag(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Sg = qa(je(bg, ["append"]), On),
				wg = r.default.extend({
					name: On,
					functional: !0,
					props: Sg,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(gg, St(r, {
							props: yg(yg({}, n), {}, {
								append: !0
							})
						}), i)
					}
				});

			function Eg(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Tg(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Eg(Object(n), !0).forEach((function(t) {
						Cg(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eg(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Cg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var $g = qa(je(bg, ["append"]), xn),
				kg = r.default.extend({
					name: xn,
					functional: !0,
					props: $g,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(gg, St(r, {
							props: Tg(Tg({}, n), {}, {
								append: !1
							})
						}), i)
					}
				});

			function Og(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var xg = qa({
					append: Va(Jr),
					appendHtml: Va(Jr),
					id: Va(Jr),
					prepend: Va(Jr),
					prependHtml: Va(Jr),
					size: Va(Jr),
					tag: Va(Jr, "div")
				}, $n),
				Pg = lt({
					components: {
						BInputGroup: r.default.extend({
							name: $n,
							functional: !0,
							props: xg,
							render: function(e, t) {
								var n = t.props,
									r = t.data,
									i = t.slots,
									a = t.scopedSlots,
									o = n.prepend,
									s = n.prependHtml,
									u = n.append,
									c = n.appendHtml,
									l = n.size,
									f = a || {},
									d = i(),
									h = {},
									p = e(),
									_ = Za(wi, f, d);
								(_ || o || s) && (p = e(kg, [_ ? eo(wi, h, f, d) : e(mg, {
									domProps: Fu(s, o)
								})]));
								var m = e(),
									b = Za("append", f, d);
								return (b || u || c) && (m = e(wg, [b ? eo("append", h, f, d) : e(mg, {
									domProps: Fu(c, u)
								})])), e(n.tag, St(r, {
									staticClass: "input-group",
									class: Og({}, "input-group-".concat(l), l),
									attrs: {
										id: n.id || null,
										role: "group"
									}
								}), [p, eo(_i, h, f, d), m])
							}
						}),
						BInputGroupAddon: gg,
						BInputGroupPrepend: kg,
						BInputGroupAppend: wg,
						BInputGroupText: mg
					}
				});

			function Mg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Ig = qa({
					fluid: Va(ai, !1),
					tag: Va(Jr, "div")
				}, qt),
				Lg = r.default.extend({
					name: qt,
					functional: !0,
					props: Ig,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.fluid;
						return e(n.tag, St(r, {
							class: Mg({
								container: !(a || "" === a),
								"container-fluid": !0 === a || "" === a
							}, "container-".concat(a), a && !0 !== a)
						}), i)
					}
				});

			function Dg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Bg = qa({
					bgVariant: Va(Jr),
					borderVariant: Va(Jr),
					containerFluid: Va(ai, !1),
					fluid: Va(Qr, !1),
					header: Va(Jr),
					headerHtml: Va(Jr),
					headerLevel: Va(ui, 3),
					headerTag: Va(Jr, "h1"),
					lead: Va(Jr),
					leadHtml: Va(Jr),
					leadTag: Va(Jr, "p"),
					tag: Va(Jr, "div"),
					textVariant: Va(Jr)
				}, Mn),
				Ng = lt({
					components: {
						BJumbotron: r.default.extend({
							name: Mn,
							functional: !0,
							props: Bg,
							render: function(e, t) {
								var n, r = t.props,
									i = t.data,
									a = t.slots,
									o = t.scopedSlots,
									s = r.header,
									u = r.headerHtml,
									c = r.lead,
									l = r.leadHtml,
									f = r.textVariant,
									d = r.bgVariant,
									h = r.borderVariant,
									p = o || {},
									_ = a(),
									m = {},
									b = e(),
									g = Za(vi, p, _);
								if (g || s || u) {
									var v = r.headerLevel;
									b = e(r.headerTag, {
										class: Dg({}, "display-".concat(v), v),
										domProps: g ? {} : Fu(u, s)
									}, eo(vi, m, p, _))
								}
								var y = e(),
									A = Za("lead", p, _);
								(A || c || l) && (y = e(r.leadTag, {
									staticClass: "lead",
									domProps: A ? {} : Fu(l, c)
								}, eo("lead", m, p, _)));
								var S = [b, y, eo(_i, m, p, _)];
								return r.fluid && (S = [e(Lg, {
									props: {
										fluid: r.containerFluid
									}
								}, S)]), e(r.tag, St(i, {
									staticClass: "jumbotron",
									class: (n = {
										"jumbotron-fluid": r.fluid
									}, Dg(n, "text-".concat(f), f), Dg(n, "bg-".concat(d), d), Dg(n, "border-".concat(h), h), Dg(n, "border", h), n)
								}), S)
							}
						})
					}
				});

			function Rg(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Fg(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Rg(Object(n), !0).forEach((function(t) {
						Ug(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rg(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ug(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var jg = ["start", "end", "center"],
				Hg = Pa((function(e, t) {
					return (t = Qi(zi(t))) ? Gi(["row-cols", e, t].filter(We).join("-")) : null
				})),
				Yg = Pa((function(e) {
					return Gi(e.replace("cols", ""))
				})),
				Vg = [],
				zg = lt({
					components: {
						BContainer: Lg,
						BRow: {
							name: "BRow",
							functional: !0,
							get props() {
								return delete this.props, this.props = function() {
									var e = Na().reduce((function(e, t) {
										return e[Ya(t, "cols")] = Va(ui), e
									}), Ie(null));
									return Vg = Ne(e), qa(He(Fg(Fg({}, e), {}, {
										alignContent: Va(Jr, null, (function(e) {
											return Mi(Ii(jg, "between", "around", "stretch"), e)
										})),
										alignH: Va(Jr, null, (function(e) {
											return Mi(Ii(jg, "between", "around"), e)
										})),
										alignV: Va(Jr, null, (function(e) {
											return Mi(Ii(jg, "baseline", "stretch"), e)
										})),
										noGutters: Va(Qr, !1),
										tag: Va(Jr, "div")
									})), "BRow")
								}(), this.props
							},
							render: function(e, t) {
								var n, r = t.props,
									i = t.data,
									a = t.children,
									o = r.alignV,
									s = r.alignH,
									u = r.alignContent,
									c = [];
								return Vg.forEach((function(e) {
									var t = Hg(Yg(e), r[e]);
									t && c.push(t)
								})), c.push((Ug(n = {
									"no-gutters": r.noGutters
								}, "align-items-".concat(o), o), Ug(n, "justify-content-".concat(s), s), Ug(n, "align-content-".concat(u), u), n)), e(r.tag, St(i, {
									staticClass: "row",
									class: c
								}), a)
							}
						},
						BCol: D_,
						BFormRow: jh
					}
				}),
				Qg = lt({
					components: {
						BLink: au
					}
				});

			function Gg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var qg = qa({
					flush: Va(Qr, !1),
					horizontal: Va(ai, !1),
					tag: Va(Jr, "div")
				}, Ln),
				Wg = r.default.extend({
					name: Ln,
					functional: !0,
					props: qg,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = "" === n.horizontal || n.horizontal;
						a = !n.flush && a;
						var o = {
							staticClass: "list-group",
							class: Gg({
								"list-group-flush": n.flush,
								"list-group-horizontal": !0 === a
							}, "list-group-horizontal-".concat(a), ye(a))
						};
						return e(n.tag, St(r, o), i)
					}
				});

			function Kg(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Xg(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Kg(Object(n), !0).forEach((function(t) {
						Jg(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kg(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Jg(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Zg = ["a", "router-link", "button", "b-link"],
				ev = je(iu, ["event", "routerTag"]);
			delete ev.href.default, delete ev.to.default;
			var tv = qa(He(Xg(Xg({}, ev), {}, {
					action: Va(Qr, !1),
					button: Va(Qr, !1),
					tag: Va(Jr, "div"),
					variant: Va(Jr)
				})), Dn),
				nv = lt({
					components: {
						BListGroup: Wg,
						BListGroupItem: r.default.extend({
							name: Dn,
							functional: !0,
							props: tv,
							render: function(e, t) {
								var n, r = t.props,
									i = t.data,
									a = t.children,
									o = r.button,
									s = r.variant,
									u = r.active,
									c = r.disabled,
									l = Jo(r),
									f = o ? "button" : l ? au : r.tag,
									d = !!(r.action || l || o || Mi(Zg, r.tag)),
									h = {},
									p = {};
								return na(f, "button") ? (i.attrs && i.attrs.type || (h.type = "button"), r.disabled && (h.disabled = !0)) : p = Qa(ev, r), e(f, St(i, {
									attrs: h,
									props: p,
									staticClass: "list-group-item",
									class: (n = {}, Jg(n, "list-group-item-".concat(s), s), Jg(n, "list-group-item-action", d), Jg(n, "active", u), Jg(n, "disabled", c), n)
								}), a)
							}
						})
					}
				});

			function rv(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var iv = qa({
					right: Va(Qr, !1),
					tag: Va(Jr, "div"),
					verticalAlign: Va(Jr, "top")
				}, Bn),
				av = r.default.extend({
					name: Bn,
					functional: !0,
					props: iv,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.verticalAlign,
							o = "top" === a ? "start" : "bottom" === a ? "end" : a;
						return e(n.tag, St(r, {
							staticClass: "media-aside",
							class: rv({
								"media-aside-right": n.right
							}, "align-self-".concat(o), o)
						}), i)
					}
				}),
				ov = qa({
					tag: Va(Jr, "div")
				}, Nn),
				sv = r.default.extend({
					name: Nn,
					functional: !0,
					props: ov,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children;
						return e(n.tag, St(r, {
							staticClass: "media-body"
						}), i)
					}
				}),
				uv = qa({
					noBody: Va(Qr, !1),
					rightAlign: Va(Qr, !1),
					tag: Va(Jr, "div"),
					verticalAlign: Va(Jr, "top")
				}, "BMedia"),
				cv = lt({
					components: {
						BMedia: r.default.extend({
							name: "BMedia",
							functional: !0,
							props: uv,
							render: function(e, t) {
								var n = t.props,
									r = t.data,
									i = t.slots,
									a = t.scopedSlots,
									o = t.children,
									s = n.noBody,
									u = n.rightAlign,
									c = n.verticalAlign,
									l = s ? o : [];
								if (!s) {
									var f = {},
										d = i(),
										h = a || {};
									l.push(e(sv, eo(_i, f, h, d)));
									var p = eo("aside", f, h, d);
									p && l[u ? "push" : "unshift"](e(av, {
										props: {
											right: u,
											verticalAlign: c
										}
									}, p))
								}
								return e(n.tag, St(r, {
									staticClass: "media"
								}), l)
							}
						}),
						BMediaAside: av,
						BMediaBody: sv
					}
				}),
				lv = "$_bv_documentHandlers_",
				fv = r.default.extend({
					created: function() {
						var e = this;
						c && (this[lv] = {}, this.$once(Rr, (function() {
							var t = e[lv] || {};
							delete e[lv], Ne(t).forEach((function(e) {
								(t[e] || []).forEach((function(t) {
									return io(document, e, t, Yr)
								}))
							}))
						})))
					},
					methods: {
						listenDocument: function(e, t, n) {
							e ? this.listenOnDocument(t, n) : this.listenOffDocument(t, n)
						},
						listenOnDocument: function(e, t) {
							this[lv] && ye(e) && ge(t) && (this[lv][e] = this[lv][e] || [], Mi(this[lv][e], t) || (this[lv][e].push(t), ro(document, e, t, Yr)))
						},
						listenOffDocument: function(e, t) {
							this[lv] && ye(e) && ge(t) && (io(document, e, t, Yr), this[lv][e] = (this[lv][e] || []).filter((function(e) {
								return e !== t
							})))
						}
					}
				}),
				dv = "$_bv_windowHandlers_",
				hv = r.default.extend({
					beforeCreate: function() {
						this[dv] = {}
					},
					beforeDestroy: function() {
						if (c) {
							var e = this[dv];
							delete this[dv], Ne(e).forEach((function(t) {
								(e[t] || []).forEach((function(e) {
									return io(window, t, e, Yr)
								}))
							}))
						}
					},
					methods: {
						listenWindow: function(e, t, n) {
							e ? this.listenOnWindow(t, n) : this.listenOffWindow(t, n)
						},
						listenOnWindow: function(e, t) {
							c && this[dv] && ye(e) && ge(t) && (this[dv][e] = this[dv][e] || [], Mi(this[dv][e], t) || (this[dv][e].push(t), ro(window, e, t, Yr)))
						},
						listenOffWindow: function(e, t) {
							c && this[dv] && ye(e) && ge(t) && (io(window, e, t, Yr), this[dv][e] = (this[dv][e] || []).filter((function(e) {
								return e !== t
							})))
						}
					}
				}),
				pv = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					return e && e.$options._scopeId || t
				};
			var _v = r.default.extend({
					computed: {
						scopedStyleAttrs: function() {
							var e = pv(this.$parent);
							return e ? function(e, t, n) {
								return t in e ? Object.defineProperty(e, t, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[t] = n, e
							}({}, e, "") : {}
						}
					}
				}),
				mv = r.default.extend({
					abstract: !0,
					name: "BVTransporterTarget",
					props: {
						nodes: Va(Zr)
					},
					data: function(e) {
						return {
							updatedNodes: e.nodes
						}
					},
					destroyed: function() {
						! function(e) {
							e && e.parentNode && e.parentNode.removeChild(e)
						}(this.$el)
					},
					render: function(e) {
						var t = this.updatedNodes,
							n = ge(t) ? t({}) : t;
						return (n = Ii(n).filter(We)) && n.length > 0 && !n[0].text ? n[0] : e()
					}
				}),
				bv = {
					container: Va([le, Jr], "body"),
					disabled: Va(Qr, !1),
					tag: Va(Jr, "div")
				},
				gv = r.default.extend({
					name: "BVTransporter",
					mixins: [to],
					props: bv,
					watch: {
						disabled: {
							immediate: !0,
							handler: function(e) {
								e ? this.unmountTarget() : this.$nextTick(this.mountTarget)
							}
						}
					},
					created: function() {
						this.$_defaultFn = null, this.$_target = null
					},
					beforeMount: function() {
						this.mountTarget()
					},
					updated: function() {
						this.updateTarget()
					},
					beforeDestroy: function() {
						this.unmountTarget(), this.$_defaultFn = null
					},
					methods: {
						getContainer: function() {
							if (c) {
								var e = this.container;
								return ye(e) ? ua(e) : e
							}
							return null
						},
						mountTarget: function() {
							if (!this.$_target) {
								var e = this.getContainer();
								if (e) {
									var t = document.createElement("div");
									e.appendChild(t), this.$_target = new mv({
										el: t,
										parent: this,
										propsData: {
											nodes: Ii(this.normalizeSlot())
										}
									})
								}
							}
						},
						updateTarget: function() {
							if (c && this.$_target) {
								var e = this.$scopedSlots.default;
								this.disabled || (e && this.$_defaultFn !== e ? this.$_target.updatedNodes = e : e || (this.$_target.updatedNodes = this.$slots.default)), this.$_defaultFn = e
							}
						},
						unmountTarget: function() {
							this.$_target && this.$_target.$destroy(), this.$_target = null
						}
					},
					render: function(e) {
						if (this.disabled) {
							var t = Ii(this.normalizeSlot()).filter(We);
							if (t.length > 0 && !t[0].text) return t[0]
						}
						return e()
					}
				});

			function vv(e) {
				return (vv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function yv(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Av(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? yv(Object(n), !0).forEach((function(t) {
						Sv(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yv(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Sv(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function wv(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function Ev(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function Tv(e, t, n) {
				return (Tv = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
					var r = function(e, t) {
						for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = xv(e)););
						return e
					}(e, t);
					if (r) {
						var i = Object.getOwnPropertyDescriptor(r, t);
						return i.get ? i.get.call(n) : i.value
					}
				})(e, t, n || e)
			}

			function Cv(e, t) {
				return (Cv = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function $v(e) {
				var t = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = xv(e);
					if (t) {
						var i = xv(this).constructor;
						n = Reflect.construct(r, arguments, i)
					} else n = r.apply(this, arguments);
					return kv(this, n)
				}
			}

			function kv(e, t) {
				return !t || "object" !== vv(t) && "function" != typeof t ? Ov(e) : t
			}

			function Ov(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function xv(e) {
				return (xv = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var Pv = function(e) {
					! function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && Cv(e, t)
					}(n, e);
					var t = $v(n);

					function n(e) {
						var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return wv(this, n), r = t.call(this, e, i), Le(Ov(r), {
							trigger: {
								enumerable: !0,
								configurable: !1,
								writable: !1
							}
						}), r
					}
					return function(e, t, n) {
						t && Ev(e.prototype, t), n && Ev(e, n)
					}(n, null, [{
						key: "Defaults",
						get: function() {
							return Av(Av({}, Tv(xv(n), "Defaults", this)), {}, {
								trigger: null
							})
						}
					}]), n
				}(Ad),
				Mv = new(r.default.extend({
					data: function() {
						return {
							modals: [],
							baseZIndex: null,
							scrollbarWidth: null,
							isBodyOverflowing: !1
						}
					},
					computed: {
						modalCount: function() {
							return this.modals.length
						},
						modalsAreOpen: function() {
							return this.modalCount > 0
						}
					},
					watch: {
						modalCount: function(e, t) {
							c && (this.getScrollbarWidth(), e > 0 && 0 === t ? (this.checkScrollbar(), this.setScrollbar(), ha(document.body, "modal-open")) : 0 === e && t > 0 && (this.resetScrollbar(), pa(document.body, "modal-open")), ma(document.body, "data-modal-open-count", String(e)))
						},
						modals: function(e) {
							var t = this;
							this.checkScrollbar(), Ji((function() {
								t.updateModals(e || [])
							}))
						}
					},
					methods: {
						registerModal: function(e) {
							var t = this;
							e && -1 === this.modals.indexOf(e) && (this.modals.push(e), e.$once(Rr, (function() {
								t.unregisterModal(e)
							})))
						},
						unregisterModal: function(e) {
							var t = this.modals.indexOf(e);
							t > -1 && (this.modals.splice(t, 1), e._isBeingDestroyed || e._isDestroyed || this.resetModal(e))
						},
						getBaseZIndex: function() {
							if (me(this.baseZIndex) && c) {
								var e = document.createElement("div");
								ha(e, "modal-backdrop"), ha(e, "d-none"), ya(e, "display", "none"), document.body.appendChild(e), this.baseZIndex = Ni(Ea(e).zIndex, 1040), document.body.removeChild(e)
							}
							return this.baseZIndex || 1040
						},
						getScrollbarWidth: function() {
							if (me(this.scrollbarWidth) && c) {
								var e = document.createElement("div");
								ha(e, "modal-scrollbar-measure"), document.body.appendChild(e), this.scrollbarWidth = wa(e).width - e.clientWidth, document.body.removeChild(e)
							}
							return this.scrollbarWidth || 0
						},
						updateModals: function(e) {
							var t = this,
								n = this.getBaseZIndex(),
								r = this.getScrollbarWidth();
							e.forEach((function(e, i) {
								e.zIndex = n + i, e.scrollbarWidth = r, e.isTop = i === t.modals.length - 1, e.isBodyOverflowing = t.isBodyOverflowing
							}))
						},
						resetModal: function(e) {
							e && (e.zIndex = this.getBaseZIndex(), e.isTop = !0, e.isBodyOverflowing = !1)
						},
						checkScrollbar: function() {
							var e = wa(document.body),
								t = e.left,
								n = e.right;
							this.isBodyOverflowing = t + n < window.innerWidth
						},
						setScrollbar: function() {
							var e = document.body;
							if (e._paddingChangedForModal = e._paddingChangedForModal || [], e._marginChangedForModal = e._marginChangedForModal || [], this.isBodyOverflowing) {
								var t = this.scrollbarWidth;
								sa(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(n) {
									var r = Sa(n, "paddingRight") || "";
									ma(n, "data-padding-right", r), ya(n, "paddingRight", "".concat(Ri(Ea(n).paddingRight, 0) + t, "px")), e._paddingChangedForModal.push(n)
								})), sa(".sticky-top").forEach((function(n) {
									var r = Sa(n, "marginRight") || "";
									ma(n, "data-margin-right", r), ya(n, "marginRight", "".concat(Ri(Ea(n).marginRight, 0) - t, "px")), e._marginChangedForModal.push(n)
								})), sa(".navbar-toggler").forEach((function(n) {
									var r = Sa(n, "marginRight") || "";
									ma(n, "data-margin-right", r), ya(n, "marginRight", "".concat(Ri(Ea(n).marginRight, 0) + t, "px")), e._marginChangedForModal.push(n)
								}));
								var n = Sa(e, "paddingRight") || "";
								ma(e, "data-padding-right", n), ya(e, "paddingRight", "".concat(Ri(Ea(e).paddingRight, 0) + t, "px"))
							}
						},
						resetScrollbar: function() {
							var e = document.body;
							e._paddingChangedForModal && e._paddingChangedForModal.forEach((function(e) {
								va(e, "data-padding-right") && (ya(e, "paddingRight", ga(e, "data-padding-right") || ""), ba(e, "data-padding-right"))
							})), e._marginChangedForModal && e._marginChangedForModal.forEach((function(e) {
								va(e, "data-margin-right") && (ya(e, "marginRight", ga(e, "data-margin-right") || ""), ba(e, "data-margin-right"))
							})), e._paddingChangedForModal = null, e._marginChangedForModal = null, va(e, "data-padding-right") && (ya(e, "paddingRight", ga(e, "data-padding-right") || ""), ba(e, "data-padding-right"))
						}
					}
				}));

			function Iv(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Lv(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Iv(Object(n), !0).forEach((function(t) {
						Dv(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iv(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Dv(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Bv = Ja("visible", {
					type: Qr,
					defaultValue: !1,
					event: dr
				}),
				Nv = Bv.mixin,
				Rv = Bv.props,
				Fv = Bv.prop,
				Uv = Bv.event,
				jv = "cancel",
				Hv = "headerclose",
				Yv = "ok",
				Vv = [jv, Hv, Yv],
				zv = {
					subtree: !0,
					childList: !0,
					characterData: !0,
					attributes: !0,
					attributeFilter: ["style", "class"]
				},
				Qv = qa(He(Lv(Lv(Lv({}, Nc), Rv), {}, {
					ariaLabel: Va(Jr),
					autoFocusButton: Va(Jr, null, (function(e) {
						return be(e) || Mi(Vv, e)
					})),
					bodyBgVariant: Va(Jr),
					bodyClass: Va(ti),
					bodyTextVariant: Va(Jr),
					busy: Va(Qr, !1),
					buttonSize: Va(Jr),
					cancelDisabled: Va(Qr, !1),
					cancelTitle: Va(Jr, "Cancel"),
					cancelTitleHtml: Va(Jr),
					cancelVariant: Va(Jr, "secondary"),
					centered: Va(Qr, !1),
					contentClass: Va(ti),
					dialogClass: Va(ti),
					footerBgVariant: Va(Jr),
					footerBorderVariant: Va(Jr),
					footerClass: Va(ti),
					footerTextVariant: Va(Jr),
					headerBgVariant: Va(Jr),
					headerBorderVariant: Va(Jr),
					headerClass: Va(ti),
					headerCloseContent: Va(Jr, "&times;"),
					headerCloseLabel: Va(Jr, "Close"),
					headerCloseVariant: Va(Jr),
					headerTextVariant: Va(Jr),
					hideBackdrop: Va(Qr, !1),
					hideFooter: Va(Qr, !1),
					hideHeader: Va(Qr, !1),
					hideHeaderClose: Va(Qr, !1),
					ignoreEnforceFocusSelector: Va(ni),
					lazy: Va(Qr, !1),
					modalClass: Va(ti),
					noCloseOnBackdrop: Va(Qr, !1),
					noCloseOnEsc: Va(Qr, !1),
					noEnforceFocus: Va(Qr, !1),
					noFade: Va(Qr, !1),
					noStacking: Va(Qr, !1),
					okDisabled: Va(Qr, !1),
					okOnly: Va(Qr, !1),
					okTitle: Va(Jr, "OK"),
					okTitleHtml: Va(Jr),
					okVariant: Va(Jr, "primary"),
					returnFocus: Va([le, Kr, Jr]),
					scrollable: Va(Qr, !1),
					size: Va(Jr, "md"),
					static: Va(Qr, !1),
					title: Va(Jr),
					titleClass: Va(ti),
					titleHtml: Va(Jr),
					titleSrOnly: Va(Qr, !1),
					titleTag: Va(Jr, "h5")
				})), Rn),
				Gv = r.default.extend({
					name: Rn,
					mixins: [Gs, Rc, Nv, fv, qs, hv, to, _v],
					inheritAttrs: !1,
					props: Qv,
					data: function() {
						return {
							isHidden: !0,
							isVisible: !1,
							isTransitioning: !1,
							isShow: !1,
							isBlock: !1,
							isOpening: !1,
							isClosing: !1,
							ignoreBackdropClick: !1,
							isModalOverflowing: !1,
							scrollbarWidth: 0,
							zIndex: Mv.getBaseZIndex(),
							isTop: !0,
							isBodyOverflowing: !1
						}
					},
					computed: {
						modalId: function() {
							return this.safeId()
						},
						modalOuterId: function() {
							return this.safeId("__BV_modal_outer_")
						},
						modalHeaderId: function() {
							return this.safeId("__BV_modal_header_")
						},
						modalBodyId: function() {
							return this.safeId("__BV_modal_body_")
						},
						modalTitleId: function() {
							return this.safeId("__BV_modal_title_")
						},
						modalContentId: function() {
							return this.safeId("__BV_modal_content_")
						},
						modalFooterId: function() {
							return this.safeId("__BV_modal_footer_")
						},
						modalBackdropId: function() {
							return this.safeId("__BV_modal_backdrop_")
						},
						modalClasses: function() {
							return [{
								fade: !this.noFade,
								show: this.isShow
							}, this.modalClass]
						},
						modalStyles: function() {
							var e = "".concat(this.scrollbarWidth, "px");
							return {
								paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? e : "",
								paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? e : "",
								display: this.isBlock ? "block" : "none"
							}
						},
						dialogClasses: function() {
							var e;
							return [(e = {}, Dv(e, "modal-".concat(this.size), this.size), Dv(e, "modal-dialog-centered", this.centered), Dv(e, "modal-dialog-scrollable", this.scrollable), e), this.dialogClass]
						},
						headerClasses: function() {
							var e;
							return [(e = {}, Dv(e, "bg-".concat(this.headerBgVariant), this.headerBgVariant), Dv(e, "text-".concat(this.headerTextVariant), this.headerTextVariant), Dv(e, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), e), this.headerClass]
						},
						titleClasses: function() {
							return [{
								"sr-only": this.titleSrOnly
							}, this.titleClass]
						},
						bodyClasses: function() {
							var e;
							return [(e = {}, Dv(e, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), Dv(e, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), e), this.bodyClass]
						},
						footerClasses: function() {
							var e;
							return [(e = {}, Dv(e, "bg-".concat(this.footerBgVariant), this.footerBgVariant), Dv(e, "text-".concat(this.footerTextVariant), this.footerTextVariant), Dv(e, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), e), this.footerClass]
						},
						modalOuterStyle: function() {
							return {
								position: "absolute",
								zIndex: this.zIndex
							}
						},
						slotScope: function() {
							return {
								cancel: this.onCancel,
								close: this.onClose,
								hide: this.hide,
								ok: this.onOk,
								visible: this.isVisible
							}
						},
						computeIgnoreEnforceFocusSelector: function() {
							return Ii(this.ignoreEnforceFocusSelector).filter(We).join(",").trim()
						},
						computedAttrs: function() {
							return Lv(Lv(Lv({}, this.static ? {} : this.scopedStyleAttrs), this.bvAttrs), {}, {
								id: this.modalOuterId
							})
						},
						computedModalAttrs: function() {
							var e = this.isVisible,
								t = this.ariaLabel;
							return {
								id: this.modalId,
								role: "dialog",
								"aria-hidden": e ? null : "true",
								"aria-modal": e ? "true" : null,
								"aria-label": t,
								"aria-labelledby": this.hideHeader || t || !(this.hasNormalizedSlot(Si) || this.titleHtml || this.title) ? null : this.modalTitleId,
								"aria-describedby": this.modalBodyId
							}
						}
					},
					watch: Dv({}, Fv, (function(e, t) {
						e !== t && this[e ? "show" : "hide"]()
					})),
					created: function() {
						this.$_observer = null, this.$_returnFocus = this.returnFocus || null
					},
					mounted: function() {
						this.zIndex = Mv.getBaseZIndex(), this.listenOnRoot(co(Rn, Dr), this.showHandler), this.listenOnRoot(co(Rn, $r), this.hideHandler), this.listenOnRoot(co(Rn, "toggle"), this.toggleHandler), this.listenOnRoot(uo(Rn, Dr), this.modalListener), !0 === this[Fv] && this.$nextTick(this.show)
					},
					beforeDestroy: function() {
						this.setObserver(!1), this.isVisible && (this.isVisible = !1, this.isShow = !1, this.isTransitioning = !1)
					},
					methods: {
						setObserver: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							this.$_observer && this.$_observer.disconnect(), this.$_observer = null, e && (this.$_observer = af(this.$refs.content, this.checkModalOverflow.bind(this), zv))
						},
						updateModel: function(e) {
							e !== this[Fv] && this.$emit(Uv, e)
						},
						buildEvent: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return new Pv(e, Lv(Lv({
								cancelable: !1,
								target: this.$refs.modal || this.$el || null,
								relatedTarget: null,
								trigger: null
							}, t), {}, {
								vueTarget: this,
								componentId: this.modalId
							}))
						},
						show: function() {
							if (!this.isVisible && !this.isOpening)
								if (this.isClosing) this.$once(Cr, this.show);
								else {
									this.isOpening = !0, this.$_returnFocus = this.$_returnFocus || this.getActiveElement();
									var e = this.buildEvent(Dr, {
										cancelable: !0
									});
									if (this.emitEvent(e), e.defaultPrevented || this.isVisible) return this.isOpening = !1, void this.updateModel(!1);
									this.doShow()
								}
						},
						hide: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
							if (this.isVisible && !this.isClosing) {
								this.isClosing = !0;
								var t = this.buildEvent($r, {
									cancelable: "FORCE" !== e,
									trigger: e || null
								});
								if (e === Yv ? this.$emit("ok", t) : e === jv ? this.$emit("cancel", t) : e === Hv && this.$emit(pr, t), this.emitEvent(t), t.defaultPrevented || !this.isVisible) return this.isClosing = !1, void this.updateModel(!0);
								this.setObserver(!1), this.isVisible = !1, this.updateModel(!1)
							}
						},
						toggle: function(e) {
							e && (this.$_returnFocus = e), this.isVisible ? this.hide("toggle") : this.show()
						},
						getActiveElement: function() {
							var e = ta(c ? [document.body] : []);
							return e && e.focus ? e : null
						},
						doShow: function() {
							var e = this;
							Mv.modalsAreOpen && this.noStacking ? this.listenOnRootOnce(uo(Rn, Cr), this.doShow) : (Mv.registerModal(this), this.isHidden = !1, this.$nextTick((function() {
								e.isVisible = !0, e.isOpening = !1, e.updateModel(!0), e.$nextTick((function() {
									e.setObserver(!0)
								}))
							})))
						},
						onBeforeEnter: function() {
							this.isTransitioning = !0, this.setResizeEvent(!0)
						},
						onEnter: function() {
							var e = this;
							this.isBlock = !0, Ji((function() {
								Ji((function() {
									e.isShow = !0
								}))
							}))
						},
						onAfterEnter: function() {
							var e = this;
							this.checkModalOverflow(), this.isTransitioning = !1, Ji((function() {
								e.emitEvent(e.buildEvent(Br)), e.setEnforceFocus(!0), e.$nextTick((function() {
									e.focusFirst()
								}))
							}))
						},
						onBeforeLeave: function() {
							this.isTransitioning = !0, this.setResizeEvent(!1), this.setEnforceFocus(!1)
						},
						onLeave: function() {
							this.isShow = !1
						},
						onAfterLeave: function() {
							var e = this;
							this.isBlock = !1, this.isTransitioning = !1, this.isModalOverflowing = !1, this.isHidden = !0, this.$nextTick((function() {
								e.isClosing = !1, Mv.unregisterModal(e), e.returnFocusTo(), e.emitEvent(e.buildEvent(Cr))
							}))
						},
						emitEvent: function(e) {
							var t = e.type;
							this.emitOnRoot(uo(Rn, t), e, e.componentId), this.$emit(t, e)
						},
						onDialogMousedown: function() {
							var e = this,
								t = this.$refs.modal;
							ro(t, "mouseup", (function n(r) {
								io(t, "mouseup", n, Yr), r.target === t && (e.ignoreBackdropClick = !0)
							}), Yr)
						},
						onClickOut: function(e) {
							this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : this.isVisible && !this.noCloseOnBackdrop && fa(document.body, e.target) && (fa(this.$refs.content, e.target) || this.hide("backdrop"))
						},
						onOk: function() {
							this.hide(Yv)
						},
						onCancel: function() {
							this.hide(jv)
						},
						onClose: function() {
							this.hide(Hv)
						},
						onEsc: function(e) {
							27 === e.keyCode && this.isVisible && !this.noCloseOnEsc && this.hide("esc")
						},
						focusHandler: function(e) {
							var t = this.$refs.content,
								n = e.target;
							if (!(this.noEnforceFocus || !this.isTop || !this.isVisible || !t || document === n || fa(t, n) || this.computeIgnoreEnforceFocusSelector && la(this.computeIgnoreEnforceFocusSelector, n, !0))) {
								var r = ka(this.$refs.content),
									i = this.$refs["bottom-trap"],
									a = this.$refs["top-trap"];
								if (i && n === i) {
									if (Oa(r[0])) return
								} else if (a && n === a && Oa(r[r.length - 1])) return;
								Oa(t, {
									preventScroll: !0
								})
							}
						},
						setEnforceFocus: function(e) {
							this.listenDocument(e, "focusin", this.focusHandler)
						},
						setResizeEvent: function(e) {
							this.listenWindow(e, "resize", this.checkModalOverflow), this.listenWindow(e, "orientationchange", this.checkModalOverflow)
						},
						showHandler: function(e, t) {
							e === this.modalId && (this.$_returnFocus = t || this.getActiveElement(), this.show())
						},
						hideHandler: function(e) {
							e === this.modalId && this.hide("event")
						},
						toggleHandler: function(e, t) {
							e === this.modalId && this.toggle(t)
						},
						modalListener: function(e) {
							this.noStacking && e.vueTarget !== this && this.hide()
						},
						focusFirst: function() {
							var e = this;
							c && Ji((function() {
								var t = e.$refs.modal,
									n = e.$refs.content,
									r = e.getActiveElement();
								if (t && n && (!r || !fa(n, r))) {
									var i = e.$refs["ok-button"],
										a = e.$refs["cancel-button"],
										o = e.$refs["close-button"],
										s = e.autoFocusButton,
										u = s === Yv && i ? i.$el || i : s === jv && a ? a.$el || a : s === Hv && o ? o.$el || o : n;
									Oa(u), u === n && e.$nextTick((function() {
										t.scrollTop = 0
									}))
								}
							}))
						},
						returnFocusTo: function() {
							var e = this.returnFocus || this.$_returnFocus || null;
							this.$_returnFocus = null, this.$nextTick((function() {
								(e = ye(e) ? ua(e) : e) && (e = e.$el || e, Oa(e))
							}))
						},
						checkModalOverflow: function() {
							if (this.isVisible) {
								var e = this.$refs.modal;
								this.isModalOverflowing = e.scrollHeight > document.documentElement.clientHeight
							}
						},
						makeModal: function(e) {
							var t = e();
							if (!this.hideHeader) {
								var n = this.normalizeSlot("modal-header", this.slotScope);
								if (!n) {
									var r = e();
									this.hideHeaderClose || (r = e(ho, {
										props: {
											content: this.headerCloseContent,
											disabled: this.isTransitioning,
											ariaLabel: this.headerCloseLabel,
											textVariant: this.headerCloseVariant || this.headerTextVariant
										},
										on: {
											click: this.onClose
										},
										ref: "close-button"
									}, [this.normalizeSlot("modal-header-close")])), n = [e(this.titleTag, {
										staticClass: "modal-title",
										class: this.titleClasses,
										attrs: {
											id: this.modalTitleId
										},
										domProps: this.hasNormalizedSlot(Si) ? {} : Fu(this.titleHtml, this.title)
									}, this.normalizeSlot(Si, this.slotScope)), r]
								}
								t = e("header", {
									staticClass: "modal-header",
									class: this.headerClasses,
									attrs: {
										id: this.modalHeaderId
									},
									ref: "header"
								}, [n])
							}
							var i = e("div", {
									staticClass: "modal-body",
									class: this.bodyClasses,
									attrs: {
										id: this.modalBodyId
									},
									ref: "body"
								}, this.normalizeSlot(_i, this.slotScope)),
								a = e();
							if (!this.hideFooter) {
								var o = this.normalizeSlot("modal-footer", this.slotScope);
								if (!o) {
									var s = e();
									this.okOnly || (s = e(vu, {
										props: {
											variant: this.cancelVariant,
											size: this.buttonSize,
											disabled: this.cancelDisabled || this.busy || this.isTransitioning
										},
										domProps: this.hasNormalizedSlot(yi) ? {} : Fu(this.cancelTitleHtml, this.cancelTitle),
										on: {
											click: this.onCancel
										},
										ref: "cancel-button"
									}, this.normalizeSlot(yi))), o = [s, e(vu, {
										props: {
											variant: this.okVariant,
											size: this.buttonSize,
											disabled: this.okDisabled || this.busy || this.isTransitioning
										},
										domProps: this.hasNormalizedSlot(Ai) ? {} : Fu(this.okTitleHtml, this.okTitle),
										on: {
											click: this.onOk
										},
										ref: "ok-button"
									}, this.normalizeSlot(Ai))]
								}
								a = e("footer", {
									staticClass: "modal-footer",
									class: this.footerClasses,
									attrs: {
										id: this.modalFooterId
									},
									ref: "footer"
								}, [o])
							}
							var u = e("div", {
									staticClass: "modal-content",
									class: this.contentClass,
									attrs: {
										id: this.modalContentId,
										tabindex: "-1"
									},
									ref: "content"
								}, [t, i, a]),
								c = e(),
								l = e();
							this.isVisible && !this.noEnforceFocus && (c = e("span", {
								attrs: {
									tabindex: "0"
								},
								ref: "top-trap"
							}), l = e("span", {
								attrs: {
									tabindex: "0"
								},
								ref: "bottom-trap"
							}));
							var f = e("div", {
									staticClass: "modal-dialog",
									class: this.dialogClasses,
									on: {
										mousedown: this.onDialogMousedown
									},
									ref: "dialog"
								}, [c, u, l]),
								d = e("div", {
									staticClass: "modal",
									class: this.modalClasses,
									style: this.modalStyles,
									attrs: this.computedModalAttrs,
									on: {
										keydown: this.onEsc,
										click: this.onClickOut
									},
									directives: [{
										name: "show",
										value: this.isVisible
									}],
									ref: "modal"
								}, [f]);
							d = e("transition", {
								props: {
									enterClass: "",
									enterToClass: "",
									enterActiveClass: "",
									leaveClass: "",
									leaveActiveClass: "",
									leaveToClass: ""
								},
								on: {
									beforeEnter: this.onBeforeEnter,
									enter: this.onEnter,
									afterEnter: this.onAfterEnter,
									beforeLeave: this.onBeforeLeave,
									leave: this.onLeave,
									afterLeave: this.onAfterLeave
								}
							}, [d]);
							var h = e();
							return !this.hideBackdrop && this.isVisible && (h = e("div", {
								staticClass: "modal-backdrop",
								attrs: {
									id: this.modalBackdropId
								}
							}, this.normalizeSlot("modal-backdrop"))), h = e(Ao, {
								props: {
									noFade: this.noFade
								}
							}, [h]), e("div", {
								style: this.modalOuterStyle,
								attrs: this.computedAttrs,
								key: "modal-outer-".concat(this[wt])
							}, [d, h])
						}
					},
					render: function(e) {
						return this.static ? this.lazy && this.isHidden ? e() : this.makeModal(e) : this.isHidden ? e() : e(gv, [this.makeModal(e)])
					}
				}),
				qv = co(Rn, Dr),
				Wv = "__bv_modal_directive__",
				Kv = function(e) {
					var t = e.modifiers,
						n = void 0 === t ? {} : t,
						r = e.arg,
						i = e.value;
					return ye(i) ? i : ye(r) ? r : Ne(n).reverse()[0]
				},
				Xv = function(e) {
					return e && ca(e, ".dropdown-menu > li, li.nav-item") && ua("a, button", e) || e
				},
				Jv = function(e) {
					e && "BUTTON" !== e.tagName && (va(e, "role") || ma(e, "role", "button"), "A" === e.tagName || va(e, "tabindex") || ma(e, "tabindex", "0"))
				},
				Zv = function(e) {
					var t = e[Wv] || {},
						n = t.trigger,
						r = t.handler;
					n && r && (io(n, "click", r, Hr), io(n, "keydown", r, Hr), io(e, "click", r, Hr), io(e, "keydown", r, Hr)), delete e[Wv]
				},
				ey = function(e, t, n) {
					var r = e[Wv] || {},
						i = Kv(t),
						a = Xv(e);
					i === r.target && a === r.trigger || (Zv(e), function(e, t, n) {
						var r = Kv(t),
							i = Xv(e);
						if (r && i) {
							var a = function(e) {
								var t = e.currentTarget;
								if (!aa(t)) {
									var i = e.type,
										a = e.keyCode;
									"click" !== i && ("keydown" !== i || a !== Bs && a !== Us) || n.context.$root.$emit(qv, r, t)
								}
							};
							e[Wv] = {
								handler: a,
								target: r,
								trigger: i
							}, Jv(i), ro(i, "click", a, Hr), "BUTTON" !== i.tagName && "button" === ga(i, "role") && ro(i, "keydown", a, Hr)
						}
					}(e, t, n)), Jv(a)
				},
				ty = {
					inserted: ey,
					updated: function() {},
					componentUpdated: ey,
					unbind: Zv
				};

			function ny(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function ry(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function iy(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ry(Object(n), !0).forEach((function(t) {
						ay(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ry(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function ay(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function oy(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var sy = "$bvModal",
				uy = "_bv__modal",
				cy = ["id"].concat(function(e) {
					return function(e) {
						if (Array.isArray(e)) return oy(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
					}(e) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return oy(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oy(e, t) : void 0
						}
					}(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}(Ne(je(Qv, ["busy", "lazy", "noStacking", "static", "visible"])))),
				ly = function() {},
				fy = {
					msgBoxContent: "default",
					title: "modal-title",
					okTitle: "modal-ok",
					cancelTitle: "modal-cancel"
				},
				dy = function(e) {
					return cy.reduce((function(t, n) {
						return _e(e[n]) || (t[n] = e[n]), t
					}), {})
				},
				hy = lt({
					plugins: {
						plugin: function(e) {
							var t = e.extend({
									name: "BMsgBox",
									extends: Gv,
									destroyed: function() {
										this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
									},
									mounted: function() {
										var e = this,
											t = function() {
												e.$nextTick((function() {
													Ji((function() {
														e.$destroy()
													}))
												}))
											};
										this.$parent.$once(Fr, t), this.$once(Cr, t), this.$router && this.$route && this.$once(Rr, this.$watch("$router", t)), this.show()
									}
								}),
								n = function(e, n) {
									var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ly;
									if (!et(sy) && !tt(sy)) {
										var i = new t({
											parent: e,
											propsData: iy(iy(iy({}, dy(La(Rn))), {}, {
												hideHeaderClose: !0,
												hideHeader: !(n.title || n.titleHtml)
											}, je(n, Ne(fy))), {}, {
												lazy: !1,
												busy: !1,
												visible: !1,
												noStacking: !1,
												noEnforceFocus: !1
											})
										});
										return Ne(fy).forEach((function(e) {
											_e(n[e]) || (i.$slots[fy[e]] = Ii(n[e]))
										})), new Promise((function(e, t) {
											var n = !1;
											i.$once(Fr, (function() {
												n || t(new Error("BootstrapVue MsgBox destroyed before resolve"))
											})), i.$on($r, (function(t) {
												if (!t.defaultPrevented) {
													var i = r(t);
													t.defaultPrevented || (n = !0, e(i))
												}
											}));
											var a = document.createElement("div");
											document.body.appendChild(a), i.$mount(a)
										}))
									}
								},
								r = function(e, t) {
									var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
										i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
									if (t && !tt(sy) && !et(sy) && ge(i)) return n(e, iy(iy({}, dy(r)), {}, {
										msgBoxContent: t
									}), i)
								},
								i = function() {
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
										t && ny(e.prototype, t), n && ny(e, n)
									}(e, [{
										key: "show",
										value: function(e) {
											if (e && this._root) {
												for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
												(t = this._root).$emit.apply(t, [co(Rn, "show"), e].concat(r))
											}
										}
									}, {
										key: "hide",
										value: function(e) {
											if (e && this._root) {
												for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
												(t = this._root).$emit.apply(t, [co(Rn, "hide"), e].concat(r))
											}
										}
									}, {
										key: "msgBoxOk",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
												n = iy(iy({}, t), {}, {
													okOnly: !0,
													okDisabled: !1,
													hideFooter: !1,
													msgBoxContent: e
												});
											return r(this._vm, e, n, (function() {
												return !0
											}))
										}
									}, {
										key: "msgBoxConfirm",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
												n = iy(iy({}, t), {}, {
													okOnly: !1,
													okDisabled: !1,
													cancelDisabled: !1,
													hideFooter: !1
												});
											return r(this._vm, e, n, (function(e) {
												var t = e.trigger;
												return "ok" === t || "cancel" !== t && null
											}))
										}
									}]), e
								}();
							e.mixin({
								beforeCreate: function() {
									this[uy] = new i(this)
								}
							}), Re(e.prototype, sy) || De(e.prototype, sy, {
								get: function() {
									return this && this[uy] || Ze('"'.concat(sy, '" must be accessed from a Vue instance "this" context.'), Rn), this[uy]
								}
							})
						}
					}
				}),
				py = lt({
					components: {
						BModal: Gv
					},
					directives: {
						VBModal: ty
					},
					plugins: {
						BVModalPlugin: hy
					}
				});

			function _y(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var my = function(e) {
					return "justify-content-".concat(e = "left" === e ? "start" : "right" === e ? "end" : e)
				},
				by = qa({
					align: Va(Jr),
					cardHeader: Va(Qr, !1),
					fill: Va(Qr, !1),
					justified: Va(Qr, !1),
					pills: Va(Qr, !1),
					small: Va(Qr, !1),
					tabs: Va(Qr, !1),
					tag: Va(Jr, "ul"),
					vertical: Va(Qr, !1)
				}, "BNav"),
				gy = r.default.extend({
					name: "BNav",
					functional: !0,
					props: by,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.tabs,
							s = r.pills,
							u = r.vertical,
							c = r.align,
							l = r.cardHeader;
						return e(r.tag, St(i, {
							staticClass: "nav",
							class: (n = {
								"nav-tabs": o,
								"nav-pills": s && !o,
								"card-header-tabs": !u && l && o,
								"card-header-pills": !u && l && s && !o,
								"flex-column": u,
								"nav-fill": !u && r.fill,
								"nav-justified": !u && r.justified
							}, _y(n, my(c), !u && c), _y(n, "small", r.small), n)
						}), a)
					}
				});

			function vy(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function yy(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? vy(Object(n), !0).forEach((function(t) {
						Ay(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vy(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ay(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Sy = je(iu, ["event", "routerTag"]),
				wy = qa(He(yy(yy({}, Sy), {}, {
					linkAttrs: Va(Kr, {}),
					linkClasses: Va(ti)
				})), Vn),
				Ey = r.default.extend({
					name: Vn,
					functional: !0,
					props: wy,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.listeners,
							a = t.children;
						return e("li", St(je(r, ["on"]), {
							staticClass: "nav-item"
						}), [e(au, {
							staticClass: "nav-link",
							class: n.linkClasses,
							attrs: n.linkAttrs,
							props: Qa(Sy, n),
							on: i
						}, a)])
					}
				}),
				Ty = r.default.extend({
					name: "BNavText",
					functional: !0,
					props: {},
					render: function(e, t) {
						var n = t.data,
							r = t.children;
						return e("li", St(n, {
							staticClass: "navbar-text"
						}), r)
					}
				});

			function Cy(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function $y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Cy(Object(n), !0).forEach((function(t) {
						ky(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cy(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function ky(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Oy = je(ih, ["inline"]),
				xy = qa(He($y($y({}, Oy), {}, {
					formClass: Va(ti)
				})), Yn),
				Py = r.default.extend({
					name: Yn,
					functional: !0,
					props: xy,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = t.listeners,
							o = e(ah, {
								class: n.formClass,
								props: $y($y({}, Qa(Oy, n)), {}, {
									inline: !0
								}),
								attrs: r.attrs,
								on: a
							}, i);
						return e("li", St(je(r, ["attrs", "on"]), {
							staticClass: "form-inline"
						}), [o])
					}
				});

			function My(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Iy(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ly(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Iy(Object(n), !0).forEach((function(t) {
						Dy(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iy(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Dy(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var By = qa(He(Ly(Ly({}, Nc), Ue(Dd, [].concat(function(e) {
					return function(e) {
						if (Array.isArray(e)) return My(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
					}(e) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return My(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? My(e, t) : void 0
						}
					}(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}(Ne(xd)), ["html", "lazy", "menuClass", "noCaret", "role", "text", "toggleClass"])))), zn),
				Ny = r.default.extend({
					name: zn,
					mixins: [Rc, Pd, to],
					props: By,
					computed: {
						toggleId: function() {
							return this.safeId("_BV_toggle_")
						},
						dropdownClasses: function() {
							return [this.directionClass, this.boundaryClass, {
								show: this.visible
							}]
						},
						menuClasses: function() {
							return [this.menuClass, {
								"dropdown-menu-right": this.right,
								show: this.visible
							}]
						},
						toggleClasses: function() {
							return [this.toggleClass, {
								"dropdown-toggle-no-caret": this.noCaret
							}]
						}
					},
					render: function(e) {
						var t = this.toggleId,
							n = this.visible,
							r = this.hide,
							i = e(au, {
								staticClass: "nav-link dropdown-toggle",
								class: this.toggleClasses,
								props: {
									href: "#".concat(this.id || ""),
									disabled: this.disabled
								},
								attrs: {
									id: t,
									role: "button",
									"aria-haspopup": "true",
									"aria-expanded": n ? "true" : "false"
								},
								on: {
									mousedown: this.onMousedown,
									click: this.toggle,
									keydown: this.toggle
								},
								ref: "toggle"
							}, [this.normalizeSlot([hi, "text"]) || e("span", {
								domProps: Fu(this.html, this.text)
							})]),
							a = e("ul", {
								staticClass: "dropdown-menu",
								class: this.menuClasses,
								attrs: {
									tabindex: "-1",
									"aria-labelledby": t
								},
								on: {
									keydown: this.onKeydown
								},
								ref: "menu"
							}, !this.lazy || n ? this.normalizeSlot(_i, {
								hide: r
							}) : [e()]);
						return e("li", {
							staticClass: "nav-item b-nav-dropdown dropdown",
							class: this.dropdownClasses,
							attrs: {
								id: this.safeId()
							}
						}, [i, a])
					}
				}),
				Ry = lt({
					components: {
						BNav: gy,
						BNavItem: Ey,
						BNavText: Ty,
						BNavForm: Py,
						BNavItemDropdown: Ny,
						BNavItemDd: Ny,
						BNavDropdown: Ny,
						BNavDd: Ny
					},
					plugins: {
						DropdownPlugin: vh
					}
				});

			function Fy(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Uy = qa({
					fixed: Va(Jr),
					print: Va(Qr, !1),
					sticky: Va(Qr, !1),
					tag: Va(Jr, "nav"),
					toggleable: Va(ai, !1),
					type: Va(Jr, "light"),
					variant: Va(Jr)
				}, Fn),
				jy = r.default.extend({
					name: Fn,
					mixins: [to],
					provide: function() {
						return {
							bvNavbar: this
						}
					},
					props: Uy,
					computed: {
						breakpointClass: function() {
							var e = this.toggleable,
								t = Da()[0],
								n = null;
							return e && ye(e) && e !== t ? n = "navbar-expand-".concat(e) : !1 === e && (n = "navbar-expand"), n
						}
					},
					render: function(e) {
						var t, n = this.tag,
							r = this.type,
							i = this.variant,
							a = this.fixed;
						return e(n, {
							staticClass: "navbar",
							class: [(t = {
								"d-print": this.print,
								"sticky-top": this.sticky
							}, Fy(t, "navbar-".concat(r), r), Fy(t, "bg-".concat(i), i), Fy(t, "fixed-".concat(a), a), t), this.breakpointClass],
							attrs: {
								role: na(n, "nav") ? null : "navigation"
							}
						}, [this.normalizeSlot()])
					}
				});

			function Hy(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Yy = function(e) {
					return "justify-content-".concat(e = "left" === e ? "start" : "right" === e ? "end" : e)
				},
				Vy = qa(Ue(by, ["tag", "fill", "justified", "align", "small"]), jn),
				zy = r.default.extend({
					name: jn,
					functional: !0,
					props: Vy,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.children,
							o = r.align;
						return e(r.tag, St(i, {
							staticClass: "navbar-nav",
							class: (n = {
								"nav-fill": r.fill,
								"nav-justified": r.justified
							}, Hy(n, Yy(o), o), Hy(n, "small", r.small), n)
						}), a)
					}
				});

			function Qy(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Gy(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Qy(Object(n), !0).forEach((function(t) {
						qy(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qy(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function qy(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Wy = je(iu, ["event", "routerTag"]);
			Wy.href.default = void 0, Wy.to.default = void 0;
			var Ky = qa(He(Gy(Gy({}, Wy), {}, {
					tag: Va(Jr, "div")
				})), Un),
				Xy = r.default.extend({
					name: Un,
					functional: !0,
					props: Ky,
					render: function(e, t) {
						var n = t.props,
							r = t.data,
							i = t.children,
							a = n.to || n.href;
						return e(a ? au : n.tag, St(r, {
							staticClass: "navbar-brand",
							props: a ? Qa(Wy, n) : {}
						}), i)
					}
				}),
				Jy = "navbar-toggler",
				Zy = uo(Gt, "state"),
				eA = uo(Gt, "sync-state"),
				tA = qa({
					disabled: Va(Qr, !1),
					label: Va(Jr, "Toggle navigation"),
					target: Va(ni, void 0, !0)
				}, Hn),
				nA = r.default.extend({
					name: Hn,
					directives: {
						VBToggle: _d
					},
					mixins: [qs, to],
					props: tA,
					data: function() {
						return {
							toggleState: !1
						}
					},
					created: function() {
						this.listenOnRoot(Zy, this.handleStateEvt), this.listenOnRoot(eA, this.handleStateEvt)
					},
					methods: {
						onClick: function(e) {
							this.disabled || this.$emit(hr, e)
						},
						handleStateEvt: function(e, t) {
							e === this.target && (this.toggleState = t)
						}
					},
					render: function(e) {
						var t = this.disabled;
						return e("button", {
							staticClass: Jy,
							class: {
								disabled: t
							},
							directives: [{
								name: "VBToggle",
								value: this.target
							}],
							attrs: {
								type: "button",
								disabled: t,
								"aria-label": this.label
							},
							on: {
								click: this.onClick
							}
						}, [this.normalizeSlot(_i, {
							expanded: this.toggleState
						}) || e("span", {
							staticClass: "".concat(Jy, "-icon")
						})])
					}
				}),
				rA = lt({
					components: {
						BNavbar: jy,
						BNavbarNav: zy,
						BNavbarBrand: Xy,
						BNavbarToggle: nA,
						BNavToggle: nA
					},
					plugins: {
						NavPlugin: Ry,
						CollapsePlugin: bd,
						DropdownPlugin: vh
					}
				});

			function iA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var aA = qa({
					label: Va(Jr),
					role: Va(Jr, "status"),
					small: Va(Qr, !1),
					tag: Va(Jr, "span"),
					type: Va(Jr, "border"),
					variant: Va(Jr)
				}, ir),
				oA = r.default.extend({
					name: ir,
					functional: !0,
					props: aA,
					render: function(e, t) {
						var n, r = t.props,
							i = t.data,
							a = t.slots,
							o = t.scopedSlots,
							s = a(),
							u = eo("label", {}, o || {}, s) || r.label;
						return u && (u = e("span", {
							staticClass: "sr-only"
						}, u)), e(r.tag, St(i, {
							attrs: {
								role: u ? r.role || "status" : null,
								"aria-hidden": u ? null : "true"
							},
							class: (n = {}, iA(n, "spinner-".concat(r.type), r.type), iA(n, "spinner-".concat(r.type, "-sm"), r.small), iA(n, "text-".concat(r.variant), r.variant), n)
						}), [u || e()])
					}
				});

			function sA(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function uA(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? sA(Object(n), !0).forEach((function(t) {
						cA(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sA(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function cA(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var lA, fA = {
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				},
				dA = qa({
					bgColor: Va(Jr),
					blur: Va(Jr, "2px"),
					fixed: Va(Qr, !1),
					noCenter: Va(Qr, !1),
					noFade: Va(Qr, !1),
					noWrap: Va(Qr, !1),
					opacity: Va(ui, .85, (function(e) {
						var t = Ri(e, 0);
						return t >= 0 && t <= 1
					})),
					overlayTag: Va(Jr, "div"),
					rounded: Va(ai, !1),
					show: Va(Qr, !1),
					spinnerSmall: Va(Qr, !1),
					spinnerType: Va(Jr, "border"),
					spinnerVariant: Va(Jr),
					variant: Va(Jr, "light"),
					wrapTag: Va(Jr, "div"),
					zIndex: Va(ui, 10)
				}, Qn),
				hA = lt({
					components: {
						BOverlay: r.default.extend({
							name: Qn,
							mixins: [to],
							props: dA,
							computed: {
								computedRounded: function() {
									var e = this.rounded;
									return !0 === e || "" === e ? "rounded" : e ? "rounded-".concat(e) : ""
								},
								computedVariant: function() {
									var e = this.variant;
									return e && !this.bgColor ? "bg-".concat(e) : ""
								},
								slotScope: function() {
									return {
										spinnerType: this.spinnerType || null,
										spinnerVariant: this.spinnerVariant || null,
										spinnerSmall: this.spinnerSmall
									}
								}
							},
							methods: {
								defaultOverlayFn: function(e) {
									var t = e.spinnerType,
										n = e.spinnerVariant,
										r = e.spinnerSmall;
									return this.$createElement(oA, {
										props: {
											type: t,
											variant: n,
											small: r
										}
									})
								}
							},
							render: function(e) {
								var t = this,
									n = this.show,
									r = this.fixed,
									i = this.noFade,
									a = this.noWrap,
									o = this.slotScope,
									s = e();
								if (n) {
									var u = e("div", {
											staticClass: "position-absolute",
											class: [this.computedVariant, this.computedRounded],
											style: uA(uA({}, fA), {}, {
												opacity: this.opacity,
												backgroundColor: this.bgColor || null,
												backdropFilter: this.blur ? "blur(".concat(this.blur, ")") : null
											})
										}),
										c = e("div", {
											staticClass: "position-absolute",
											style: this.noCenter ? uA({}, fA) : {
												top: "50%",
												left: "50%",
												transform: "translateX(-50%) translateY(-50%)"
											}
										}, [this.normalizeSlot("overlay", o) || this.defaultOverlayFn(o)]);
									s = e(this.overlayTag, {
										staticClass: "b-overlay",
										class: {
											"position-absolute": !a || a && !r, "position-fixed": a && r
										},
										style: uA(uA({}, fA), {}, {
											zIndex: this.zIndex || 10
										}),
										on: {
											click: function(e) {
												return t.$emit(hr, e)
											}
										},
										key: "overlay"
									}, [u, c])
								}
								return s = e(Ao, {
									props: {
										noFade: i,
										appear: !0
									},
									on: {
										"after-enter": function() {
											return t.$emit(Br)
										},
										"after-leave": function() {
											return t.$emit(Cr)
										}
									}
								}, [s]), a ? s : e(this.wrapTag, {
									staticClass: "b-overlay-wrap position-relative",
									attrs: {
										"aria-busy": n ? "true" : null
									}
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

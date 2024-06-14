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

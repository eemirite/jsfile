					var t = 0;
					Object.defineProperty(this, "Ff", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return t
						},
						set: function(e) {
							if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute Ff supplied.');
							t = e
						}
					});
					var n = [];
					Object.defineProperty(this, "Rect", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (0 !== n.length) return n
						},
						set: function(e) {
							n = void 0 !== e ? e : []
						}
					}), Object.defineProperty(this, "x", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !n || isNaN(n[0]) ? 0 : n[0]
						},
						set: function(e) {
							n[0] = e
						}
					}), Object.defineProperty(this, "y", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !n || isNaN(n[1]) ? 0 : n[1]
						},
						set: function(e) {
							n[1] = e
						}
					}), Object.defineProperty(this, "width", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !n || isNaN(n[2]) ? 0 : n[2]
						},
						set: function(e) {
							n[2] = e
						}
					}), Object.defineProperty(this, "height", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !n || isNaN(n[3]) ? 0 : n[3]
						},
						set: function(e) {
							n[3] = e
						}
					});
					var r = "";
					Object.defineProperty(this, "FT", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return r
						},
						set: function(e) {
							switch (e) {
								case "/Btn":
								case "/Tx":
								case "/Ch":
								case "/Sig":
									r = e;
									break;
								default:
									throw new Error('Invalid value "' + e + '" for attribute FT supplied.')
							}
						}
					});
					var i = null;
					Object.defineProperty(this, "T", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (!i || i.length < 1) {
								if (this instanceof me) return;
								i = "FieldObject" + ue.FieldNum++
							}
							var e = function(e) {
								return e
							};
							return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + R(e(i)) + ")"
						},
						set: function(e) {
							i = e.toString()
						}
					}), Object.defineProperty(this, "fieldName", {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return i
						},
						set: function(e) {
							i = e
						}
					});
					var a = "helvetica";
					Object.defineProperty(this, "fontName", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return a
						},
						set: function(e) {
							a = e
						}
					});
					var o = "normal";
					Object.defineProperty(this, "fontStyle", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return o
						},
						set: function(e) {
							o = e
						}
					});
					var s = 0;
					Object.defineProperty(this, "fontSize", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return s
						},
						set: function(e) {
							s = e
						}
					});
					var u = void 0;
					Object.defineProperty(this, "maxFontSize", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return void 0 === u ? 50 / N : u
						},
						set: function(e) {
							u = e
						}
					});
					var c = "black";
					Object.defineProperty(this, "color", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return c
						},
						set: function(e) {
							c = e
						}
					});
					var l = "/F1 0 Tf 0 g";
					Object.defineProperty(this, "DA", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (!(!l || this instanceof me || this instanceof ge)) return ie(l, this.objId, this.scope)
						},
						set: function(e) {
							e = e.toString(), l = e
						}
					});
					var f = null;
					Object.defineProperty(this, "DV", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (f) return this instanceof he == 0 ? ie(f, this.objId, this.scope) : f
						},
						set: function(e) {
							e = e.toString(), f = this instanceof he == 0 ? "(" === e.substr(0, 1) ? F(e.substr(1, e.length - 2)) : F(e) : e
						}
					}), Object.defineProperty(this, "defaultValue", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this instanceof he == 1 ? F(f.substr(1, f.length - 1)) : f
						},
						set: function(e) {
							e = e.toString(), f = this instanceof he == 1 ? "/" + e : e
						}
					});
					var d = null;
					Object.defineProperty(this, "_V", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (d) return d
						},
						set: function(e) {
							this.V = e
						}
					}), Object.defineProperty(this, "V", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (d) return this instanceof he == 0 ? ie(d, this.objId, this.scope) : d
						},
						set: function(e) {
							e = e.toString(), d = this instanceof he == 0 ? "(" === e.substr(0, 1) ? F(e.substr(1, e.length - 2)) : F(e) : e
						}
					}), Object.defineProperty(this, "value", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this instanceof he == 1 ? F(d.substr(1, d.length - 1)) : d
						},
						set: function(e) {
							e = e.toString(), d = this instanceof he == 1 ? "/" + e : e
						}
					}), Object.defineProperty(this, "hasAnnotation", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this.Rect
						}
					}), Object.defineProperty(this, "Type", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return this.hasAnnotation ? "/Annot" : null
						}
					}), Object.defineProperty(this, "Subtype", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return this.hasAnnotation ? "/Widget" : null
						}
					});
					var h, p = !1;
					Object.defineProperty(this, "hasAppearanceStream", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return p
						},
						set: function(e) {
							e = Boolean(e), p = e
						}
					}), Object.defineProperty(this, "page", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							if (h) return h
						},
						set: function(e) {
							h = e
						}
					}), Object.defineProperty(this, "readOnly", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 1))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 1) : this.Ff = K(this.Ff, 1)
						}
					}), Object.defineProperty(this, "required", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 2))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 2) : this.Ff = K(this.Ff, 2)
						}
					}), Object.defineProperty(this, "noExport", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 3))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 3) : this.Ff = K(this.Ff, 3)
						}
					});
					var _ = null;
					Object.defineProperty(this, "Q", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (null !== _) return _
						},
						set: function(e) {
							if (-1 === [0, 1, 2].indexOf(e)) throw new Error('Invalid value "' + e + '" for attribute Q supplied.');
							_ = e
						}
					}), Object.defineProperty(this, "textAlign", {
						get: function() {
							var e;
							switch (_) {
								case 0:
								default:
									e = "left";
									break;
								case 1:
									e = "center";
									break;
								case 2:
									e = "right"
							}
							return e
						},
						configurable: !0,
						enumerable: !0,
						set: function(e) {
							switch (e) {
								case "right":
								case 2:
									_ = 2;
									break;
								case "center":
								case 1:
									_ = 1;
									break;
								case "left":
								case 0:
								default:
									_ = 0
							}
						}
					})
				};
				H(ue, ae);
				var ce = function() {
					ue.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
					var e = 0;
					Object.defineProperty(this, "TI", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "topIndex", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					});
					var t = [];
					Object.defineProperty(this, "Opt", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return re(t, this.objId, this.scope)
						},
						set: function(e) {
							var n, r;
							r = [], "string" == typeof(n = e) && (r = function(e, t, n) {
								n || (n = 1);
								for (var r, i = []; r = t.exec(e);) i.push(r[n]);
								return i
							}(n, /\((.*?)\)/g)), t = r
						}
					}), this.getOptions = function() {
						return t
					}, this.setOptions = function(e) {
						t = e, this.sort && t.sort()
					}, this.addOption = function(e) {
						e = (e = e || "").toString(), t.push(e), this.sort && t.sort()
					}, this.removeOption = function(e, n) {
						for (n = n || !1, e = (e = e || "").toString(); - 1 !== t.indexOf(e) && (t.splice(t.indexOf(e), 1), !1 !== n););
					}, Object.defineProperty(this, "combo", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 18))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 18) : this.Ff = K(this.Ff, 18)
						}
					}), Object.defineProperty(this, "edit", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 19))
						},
						set: function(e) {
							!0 === this.combo && (!0 === Boolean(e) ? this.Ff = W(this.Ff, 19) : this.Ff = K(this.Ff, 19))
						}
					}), Object.defineProperty(this, "sort", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 20))
						},
						set: function(e) {
							!0 === Boolean(e) ? (this.Ff = W(this.Ff, 20), t.sort()) : this.Ff = K(this.Ff, 20)
						}
					}), Object.defineProperty(this, "multiSelect", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 22))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 22) : this.Ff = K(this.Ff, 22)
						}
					}), Object.defineProperty(this, "doNotSpellCheck", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 23))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 23) : this.Ff = K(this.Ff, 23)
						}
					}), Object.defineProperty(this, "commitOnSelChange", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 27))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 27) : this.Ff = K(this.Ff, 27)
						}
					}), this.hasAppearanceStream = !1
				};
				H(ce, ue);
				var le = function() {
					ce.call(this), this.fontName = "helvetica", this.combo = !1
				};
				H(le, ce);
				var fe = function() {
					le.call(this), this.combo = !0
				};
				H(fe, le);
				var de = function() {
					fe.call(this), this.edit = !0
				};
				H(de, fe);
				var he = function() {
					ue.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 15))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 15) : this.Ff = K(this.Ff, 15)
						}
					}), Object.defineProperty(this, "radio", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 16))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 16) : this.Ff = K(this.Ff, 16)
						}
					}), Object.defineProperty(this, "pushButton", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 17))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 17) : this.Ff = K(this.Ff, 17)
						}
					}), Object.defineProperty(this, "radioIsUnison", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 26))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 26) : this.Ff = K(this.Ff, 26)
						}
					});
					var e, t = {};
					Object.defineProperty(this, "MK", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							var e = function(e) {
								return e
							};
							if (this.scope && (e = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(t).length) {
								var n, r = [];
								for (n in r.push("<<"), t) r.push("/" + n + " (" + R(e(t[n])) + ")");
								return r.push(">>"), r.join("\n")
							}
						},
						set: function(e) {
							"object" == typeof e && (t = e)
						}
					}), Object.defineProperty(this, "caption", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return t.CA || ""
						},
						set: function(e) {
							"string" == typeof e && (t.CA = e)
						}
					}), Object.defineProperty(this, "AS", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "appearanceState", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e.substr(1, e.length - 1)
						},
						set: function(t) {
							e = "/" + t
						}
					})
				};
				H(he, ue);
				var pe = function() {
					he.call(this), this.pushButton = !0
				};
				H(pe, he);
				var _e = function() {
					he.call(this), this.radio = !0, this.pushButton = !1;
					var e = [];
					Object.defineProperty(this, "Kids", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = void 0 !== t ? t : []
						}
					})
				};
				H(_e, he);
				var me = function() {
					var e, t;
					ue.call(this), Object.defineProperty(this, "Parent", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "optionName", {
						enumerable: !1,
						configurable: !0,
						get: function() {
							return t
						},
						set: function(e) {
							t = e
						}
					});
					var n, r = {};
					Object.defineProperty(this, "MK", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							var e = function(e) {
								return e
							};
							this.scope && (e = this.scope.internal.getEncryptor(this.objId));
							var t, n = [];
							for (t in n.push("<<"), r) n.push("/" + t + " (" + R(e(r[t])) + ")");
							return n.push(">>"), n.join("\n")
						},
						set: function(e) {
							"object" == typeof e && (r = e)
						}
					}), Object.defineProperty(this, "caption", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return r.CA || ""
						},
						set: function(e) {
							"string" == typeof e && (r.CA = e)
						}
					}), Object.defineProperty(this, "AS", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return n
						},
						set: function(e) {
							n = e
						}
					}), Object.defineProperty(this, "appearanceState", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return n.substr(1, n.length - 1)
						},
						set: function(e) {
							n = "/" + e
						}
					}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = ye.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
				};
				H(me, ue), _e.prototype.setAppearance = function(e) {
					if (!("createAppearanceStream" in e) || !("getCA" in e)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
					for (var t in this.Kids)
						if (this.Kids.hasOwnProperty(t)) {
							var n = this.Kids[t];
							n.appearanceStreamContent = e.createAppearanceStream(n.optionName), n.caption = e.getCA()
						}
				}, _e.prototype.createOption = function(e) {
					var t = new me;
					return t.Parent = this, t.optionName = e, this.Kids.push(t), Ae.call(this.scope, t), t
				};
				var be = function() {
					he.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = ye.CheckBox.createAppearanceStream()
				};
				H(be, he);
				var ge = function() {
					ue.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 13))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 13) : this.Ff = K(this.Ff, 13)
						}
					}), Object.defineProperty(this, "fileSelect", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 21))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 21) : this.Ff = K(this.Ff, 21)
						}
					}), Object.defineProperty(this, "doNotSpellCheck", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 23))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 23) : this.Ff = K(this.Ff, 23)
						}
					}), Object.defineProperty(this, "doNotScroll", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 24))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 24) : this.Ff = K(this.Ff, 24)
						}
					}), Object.defineProperty(this, "comb", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 25))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 25) : this.Ff = K(this.Ff, 25)
						}
					}), Object.defineProperty(this, "richText", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 26))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 26) : this.Ff = K(this.Ff, 26)
						}
					});
					var e = null;
					Object.defineProperty(this, "MaxLen", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "maxLength", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e
						},
						set: function(t) {
							Number.isInteger(t) && (e = t)
						}
					}), Object.defineProperty(this, "hasAppearanceStream", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this.V || this.DV
						}
					})
				};
				H(ge, ue);
				var ve = function() {
					ge.call(this), Object.defineProperty(this, "password", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(this.Ff, 14))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = W(this.Ff, 14) : this.Ff = K(this.Ff, 14)
						}
					}), this.password = !0
				};
				H(ve, ge);
				var ye = {
					CheckBox: {
						createAppearanceStream: function() {
							return {
								N: {
									On: ye.CheckBox.YesNormal
								},
								D: {
									On: ye.CheckBox.YesPushDown,
									Off: ye.CheckBox.OffPushDown
								}
							}
						},
						YesPushDown: function(e) {
							var t = V(e);
							t.scope = e.scope;
							var n = [],
								r = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
								i = e.scope.__private__.encodeColorString(e.color),
								a = Z(e, e.caption);
							return n.push("0.749023 g"), n.push("0 0 " + U(ye.internal.getWidth(e)) + " " + U(ye.internal.getHeight(e)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + U(a.fontSize) + " Tf " + i), n.push("BT"), n.push(a.text), n.push("ET"), n.push("Q"), n.push("EMC"), t.stream = n.join("\n"), t
						},
						YesNormal: function(e) {
							var t = V(e);
							t.scope = e.scope;
							var n = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
								r = e.scope.__private__.encodeColorString(e.color),
								i = [],
								a = ye.internal.getHeight(e),
								o = ye.internal.getWidth(e),
								s = Z(e, e.caption);
							return i.push("1 g"), i.push("0 0 " + U(o) + " " + U(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + U(o - 1) + " " + U(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + U(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), t.stream = i.join("\n"), t
						},
						OffPushDown: function(e) {
							var t = V(e);
							t.scope = e.scope;
							var n = [];
							return n.push("0.749023 g"), n.push("0 0 " + U(ye.internal.getWidth(e)) + " " + U(ye.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t
						}
					},
					RadioButton: {
						Circle: {
							createAppearanceStream: function(e) {
								var t = {
									D: {
										Off: ye.RadioButton.Circle.OffPushDown
									},
									N: {}
								};
								return t.N[e] = ye.RadioButton.Circle.YesNormal, t.D[e] = ye.RadioButton.Circle.YesPushDown, t
							},
							getCA: function() {
								return "l"
							},
							YesNormal: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = [],
									r = ye.internal.getWidth(e) <= ye.internal.getHeight(e) ? ye.internal.getWidth(e) / 4 : ye.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = ye.internal.Bezier_C,
									a = Number((r * i).toFixed(5));
								return n.push("q"), n.push("1 0 0 1 " + j(ye.internal.getWidth(e) / 2) + " " + j(ye.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							},
							YesPushDown: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = [],
									r = ye.internal.getWidth(e) <= ye.internal.getHeight(e) ? ye.internal.getWidth(e) / 4 : ye.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = Number((2 * r).toFixed(5)),
									a = Number((i * ye.internal.Bezier_C).toFixed(5)),
									o = Number((r * ye.internal.Bezier_C).toFixed(5));
								return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + j(ye.internal.getWidth(e) / 2) + " " + j(ye.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + j(ye.internal.getWidth(e) / 2) + " " + j(ye.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							},
							OffPushDown: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = [],
									r = ye.internal.getWidth(e) <= ye.internal.getHeight(e) ? ye.internal.getWidth(e) / 4 : ye.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = Number((2 * r).toFixed(5)),
									a = Number((i * ye.internal.Bezier_C).toFixed(5));
								return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + j(ye.internal.getWidth(e) / 2) + " " + j(ye.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							}
						},
						Cross: {
							createAppearanceStream: function(e) {
								var t = {
									D: {
										Off: ye.RadioButton.Cross.OffPushDown
									},
									N: {}
								};
								return t.N[e] = ye.RadioButton.Cross.YesNormal, t.D[e] = ye.RadioButton.Cross.YesPushDown, t
							},
							getCA: function() {
								return "8"
							},
							YesNormal: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = [],
									r = ye.internal.calculateCross(e);
								return n.push("q"), n.push("1 1 " + U(ye.internal.getWidth(e) - 2) + " " + U(ye.internal.getHeight(e) - 2) + " re"), n.push("W"), n.push("n"), n.push(U(r.x1.x) + " " + U(r.x1.y) + " m"), n.push(U(r.x2.x) + " " + U(r.x2.y) + " l"), n.push(U(r.x4.x) + " " + U(r.x4.y) + " m"), n.push(U(r.x3.x) + " " + U(r.x3.y) + " l"), n.push("s"), n.push("Q"), t.stream = n.join("\n"), t
							},
							YesPushDown: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = ye.internal.calculateCross(e),
									r = [];
								return r.push("0.749023 g"), r.push("0 0 " + U(ye.internal.getWidth(e)) + " " + U(ye.internal.getHeight(e)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + U(ye.internal.getWidth(e) - 2) + " " + U(ye.internal.getHeight(e) - 2) + " re"), r.push("W"), r.push("n"), r.push(U(n.x1.x) + " " + U(n.x1.y) + " m"), r.push(U(n.x2.x) + " " + U(n.x2.y) + " l"), r.push(U(n.x4.x) + " " + U(n.x4.y) + " m"), r.push(U(n.x3.x) + " " + U(n.x3.y) + " l"), r.push("s"), r.push("Q"), t.stream = r.join("\n"), t
							},
							OffPushDown: function(e) {
								var t = V(e);
								t.scope = e.scope;
								var n = [];
								return n.push("0.749023 g"), n.push("0 0 " + U(ye.internal.getWidth(e)) + " " + U(ye.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t
							}
						}
					},
					createDefaultAppearanceStream: function(e) {
						var t = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
							n = e.scope.__private__.encodeColorString(e.color);
						return "/" + t + " " + e.fontSize + " Tf " + n
					}
				};
				ye.internal = {
					Bezier_C: .551915024494,
					calculateCross: function(e) {
						var t = ye.internal.getWidth(e),
							n = ye.internal.getHeight(e),
							r = Math.min(t, n);
						return {
							x1: {
								x: (t - r) / 2,
								y: (n - r) / 2 + r
							},
							x2: {
								x: (t - r) / 2 + r,
								y: (n - r) / 2
							},
							x3: {
								x: (t - r) / 2,
								y: (n - r) / 2
							},
							x4: {
								x: (t - r) / 2 + r,
								y: (n - r) / 2 + r
							}
						}
					}
				}, ye.internal.getWidth = function(e) {
					var t = 0;
					return "object" == typeof e && (t = Y(e.Rect[2])), t
				}, ye.internal.getHeight = function(e) {
					var t = 0;
					return "object" == typeof e && (t = Y(e.Rect[3])), t
				};
				var Ae = B.addField = function(e) {
					if (function(e, t) {
							if (t.scope = e, void 0 !== e.internal && (void 0 === e.internal.acroformPlugin || !1 === e.internal.acroformPlugin.isInitialized)) {
								if (ue.FieldNum = 0, e.internal.acroformPlugin = JSON.parse(JSON.stringify(te)), e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
								N = e.internal.scaleFactor, e.internal.acroformPlugin.acroFormDictionaryRoot = new se, e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e, e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe("postPutResources", (function() {
									! function(e) {
										e.internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID, e.internal.acroformPlugin.printedOut = !0
									}(e)
								})), e.internal.events.subscribe("buildDocument", (function() {
									! function(e) {
										e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
										var t = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
										for (var n in t)
											if (t.hasOwnProperty(n)) {
												var r = t[n];
												r.objId = void 0, r.hasAnnotation && ne(r, e)
											}
									}(e)
								})), e.internal.events.subscribe("putCatalog", (function() {
									! function(e) {
										if (void 0 === e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
										e.internal.write("/AcroForm " + e.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
									}(e)
								})), e.internal.events.subscribe("postPutPages", (function(t) {
									! function(e, t) {
										var n = !e;
										for (var r in e || (t.internal.newObjectDeferredBegin(t.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), t.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e = e || t.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
											if (e.hasOwnProperty(r)) {
												var i = e[r],
													a = [],
													o = i.Rect;
												if (i.Rect && (i.Rect = X(i.Rect, t)), t.internal.newObjectDeferredBegin(i.objId, !0), i.DA = ye.createDefaultAppearanceStream(i), "object" == typeof i && "function" == typeof i.getKeyValueListForStream && (a = i.getKeyValueListForStream()), i.Rect = o, i.hasAppearanceStream && !i.appearanceStreamContent) {
													var s = J(i);
													a.push({
														key: "AP",
														value: "<</N " + s + ">>"
													}), t.internal.acroformPlugin.xForms.push(s)
												}
												if (i.appearanceStreamContent) {
													var u = "";
													for (var c in i.appearanceStreamContent)
														if (i.appearanceStreamContent.hasOwnProperty(c)) {
															var l = i.appearanceStreamContent[c];
															if (u += "/" + c + " ", u += "<<", Object.keys(l).length >= 1 || Array.isArray(l)) {
																for (var r in l)
																	if (l.hasOwnProperty(r)) {
																		var f = l[r];
																		"function" == typeof f && (f = f.call(t, i)), u += "/" + r + " " + f + " ", t.internal.acroformPlugin.xForms.indexOf(f) >= 0 || t.internal.acroformPlugin.xForms.push(f)
																	}
															} else "function" == typeof(f = l) && (f = f.call(t, i)), u += "/" + r + " " + f, t.internal.acroformPlugin.xForms.indexOf(f) >= 0 || t.internal.acroformPlugin.xForms.push(f);
															u += ">>"
														} a.push({
														key: "AP",
														value: "<<\n" + u + ">>"
													})
												}
												t.internal.putStream({
													additionalKeyValues: a,
													objectId: i.objId
												}), t.internal.out("endobj")
											} n && function(e, t) {
											for (var n in e)
												if (e.hasOwnProperty(n)) {
													var r = n,
														i = e[n];
													t.internal.newObjectDeferredBegin(i.objId, !0), "object" == typeof i && "function" == typeof i.putStream && i.putStream(), delete e[r]
												}
										}(t.internal.acroformPlugin.xForms, t)
									}(t, e)
								})), e.internal.acroformPlugin.isInitialized = !0
							}
						}(this, e), !(e instanceof ue)) throw new Error("Invalid argument passed to jsPDF.addField.");
					var t;
					return (t = e).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), e.page = e.scope.internal.getCurrentPageInfo().pageNumber, this
				};

				function Se(e) {
					return e.reduce((function(e, t, n) {
						return e[t] = n, e
					}), {})
				}
				B.AcroFormChoiceField = ce, B.AcroFormListBox = le, B.AcroFormComboBox = fe, B.AcroFormEditBox = de, B.AcroFormButton = he, B.AcroFormPushButton = pe, B.AcroFormRadioButton = _e, B.AcroFormCheckBox = be, B.AcroFormTextField = ge, B.AcroFormPasswordField = ve, B.AcroFormAppearance = ye, B.AcroForm = {
						ChoiceField: ce,
						ListBox: le,
						ComboBox: fe,
						EditBox: de,
						Button: he,
						PushButton: pe,
						RadioButton: _e,
						CheckBox: be,
						TextField: ge,
						PasswordField: ve,
						Appearance: ye
					}, D.AcroForm = {
						ChoiceField: ce,
						ListBox: le,
						ComboBox: fe,
						EditBox: de,
						Button: he,
						PushButton: pe,
						RadioButton: _e,
						CheckBox: be,
						TextField: ge,
						PasswordField: ve,
						Appearance: ye
					}, D.AcroForm,
					function(e) {
						e.__addimage__ = {};
						var t = "UNKNOWN",
							n = {
								PNG: [
									[137, 80, 78, 71]
								],
								TIFF: [
									[77, 77, 0, 42],
									[73, 73, 42, 0]
								],
								JPEG: [
									[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
									[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
									[255, 216, 255, 219],
									[255, 216, 255, 238]
								],
								JPEG2000: [
									[0, 0, 0, 12, 106, 80, 32, 32]
								],
								GIF87a: [
									[71, 73, 70, 56, 55, 97]
								],
								GIF89a: [
									[71, 73, 70, 56, 57, 97]
								],
								WEBP: [
									[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
								],
								BMP: [
									[66, 77],
									[66, 65],
									[67, 73],
									[67, 80],
									[73, 67],
									[80, 84]
								]
							},
							r = e.__addimage__.getImageFileTypeByImageData = function(e, r) {
								var i, a;
								r = r || t;
								var o, s, u, c = t;
								if (E(e))
									for (u in n)
										for (o = n[u], i = 0; i < o.length; i += 1) {
											for (s = !0, a = 0; a < o[i].length; a += 1)
												if (void 0 !== o[i][a] && o[i][a] !== e[a]) {
													s = !1;
													break
												} if (!0 === s) {
												c = u;
												break
											}
										} else
											for (u in n)
												for (o = n[u], i = 0; i < o.length; i += 1) {
													for (s = !0, a = 0; a < o[i].length; a += 1)
														if (void 0 !== o[i][a] && o[i][a] !== e.charCodeAt(a)) {
															s = !1;
															break
														} if (!0 === s) {
														c = u;
														break
													}
												}
								return c === t && r !== t && (c = r), c
							},
							i = function(e) {
								for (var t = this.internal.write, n = this.internal.putStream, r = (0, this.internal.getFilters)(); - 1 !== r.indexOf("FlateEncode");) r.splice(r.indexOf("FlateEncode"), 1);
								e.objectId = this.internal.newObject();
								var a = [];
								if (a.push({
										key: "Type",
										value: "/XObject"
									}), a.push({
										key: "Subtype",
										value: "/Image"
									}), a.push({
										key: "Width",
										value: e.width
									}), a.push({
										key: "Height",
										value: e.height
									}), e.colorSpace === g.INDEXED ? a.push({
										key: "ColorSpace",
										value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask" in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
									}) : (a.push({
										key: "ColorSpace",
										value: "/" + e.colorSpace
									}), e.colorSpace === g.DEVICE_CMYK && a.push({
										key: "Decode",
										value: "[1 0 1 0 1 0 1 0]"
									})), a.push({
										key: "BitsPerComponent",
										value: e.bitsPerComponent
									}), "decodeParameters" in e && void 0 !== e.decodeParameters && a.push({
										key: "DecodeParms",
										value: "<<" + e.decodeParameters + ">>"
									}), "transparency" in e && Array.isArray(e.transparency)) {
									for (var o = "", s = 0, u = e.transparency.length; s < u; s++) o += e.transparency[s] + " " + e.transparency[s] + " ";
									a.push({
										key: "Mask",
										value: "[" + o + "]"
									})
								}
								void 0 !== e.sMask && a.push({
									key: "SMask",
									value: e.objectId + 1 + " 0 R"
								});
								var c = void 0 !== e.filter ? ["/" + e.filter] : void 0;
								if (n({
										data: e.data,
										additionalKeyValues: a,
										alreadyAppliedFilters: c,
										objectId: e.objectId
									}), t("endobj"), "sMask" in e && void 0 !== e.sMask) {
									var l = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width,
										f = {
											width: e.width,
											height: e.height,
											colorSpace: "DeviceGray",
											bitsPerComponent: e.bitsPerComponent,
											decodeParameters: l,
											data: e.sMask
										};
									"filter" in e && (f.filter = e.filter), i.call(this, f)
								}
								if (e.colorSpace === g.INDEXED) {
									var d = this.internal.newObject();
									n({
										data: C(new Uint8Array(e.palette)),
										objectId: d
									}), t("endobj")
								}
							},
							a = function() {
								var e = this.internal.collections.addImage_images;
								for (var t in e) i.call(this, e[t])
							},
							o = function() {
								var e, t = this.internal.collections.addImage_images,
									n = this.internal.write;
								for (var r in t) n("/I" + (e = t[r]).index, e.objectId, "0", "R")
							},
							s = function() {
								this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", o))
							},
							u = function() {
								var e = this.internal.collections.addImage_images;
								return s.call(this), e
							},
							c = function() {
								return Object.keys(this.internal.collections.addImage_images).length
							},
							d = function(t) {
								return "function" == typeof e["process" + t.toUpperCase()]
							},
							h = function(e) {
								return "object" == typeof e && 1 === e.nodeType
							},
							p = function(t, n) {
								if ("IMG" === t.nodeName && t.hasAttribute("src")) {
									var r = "" + t.getAttribute("src");
									if (0 === r.indexOf("data:image/")) return l(unescape(r).split("base64,").pop());
									var i = e.loadFile(r, !0);
									if (void 0 !== i) return i
								}
								if ("CANVAS" === t.nodeName) {
									var a;
									switch (n) {
										case "PNG":
											a = "image/png";
											break;
										case "WEBP":
											a = "image/webp";
											break;
										case "JPEG":
										case "JPG":
										default:
											a = "image/jpeg"
									}
									return l(t.toDataURL(a, 1).split("base64,").pop())
								}
							},
							_ = function(e) {
								var t = this.internal.collections.addImage_images;
								if (t)
									for (var n in t)
										if (e === t[n].alias) return t[n]
							},
							m = function(e, t, n) {
								return e || t || (e = -96, t = -96), e < 0 && (e = -1 * n.width * 72 / e / this.internal.scaleFactor), t < 0 && (t = -1 * n.height * 72 / t / this.internal.scaleFactor), 0 === e && (e = t * n.width / n.height), 0 === t && (t = e * n.height / n.width), [e, t]
							},
							b = function(e, t, n, r, i, a) {
								var o = m.call(this, n, r, i),
									s = this.internal.getCoordinateString,
									c = this.internal.getVerticalCoordinateString,
									l = u.call(this);
								if (n = o[0], r = o[1], l[i.index] = i, a) {
									a *= Math.PI / 180;
									var f = Math.cos(a),
										d = Math.sin(a),
										h = function(e) {
											return e.toFixed(4)
										},
										p = [h(f), h(d), h(-1 * d), h(f), 0, 0, "cm"]
								}
								this.internal.write("q"), a ? (this.internal.write([1, "0", "0", 1, s(e), c(t + r), "cm"].join(" ")), this.internal.write(p.join(" ")), this.internal.write([s(n), "0", "0", s(r), "0", "0", "cm"].join(" "))) : this.internal.write([s(n), "0", "0", s(r), s(e), c(t + r), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q")
							},
							g = e.color_spaces = {
								DEVICE_RGB: "DeviceRGB",
								DEVICE_GRAY: "DeviceGray",
								DEVICE_CMYK: "DeviceCMYK",
								CAL_GREY: "CalGray",
								CAL_RGB: "CalRGB",
								LAB: "Lab",
								ICC_BASED: "ICCBased",
								INDEXED: "Indexed",
								PATTERN: "Pattern",
								SEPARATION: "Separation",
								DEVICE_N: "DeviceN"
							};
						e.decode = {
							DCT_DECODE: "DCTDecode",
							FLATE_DECODE: "FlateDecode",
							LZW_DECODE: "LZWDecode",
							JPX_DECODE: "JPXDecode",
							JBIG2_DECODE: "JBIG2Decode",
							ASCII85_DECODE: "ASCII85Decode",
							ASCII_HEX_DECODE: "ASCIIHexDecode",
							RUN_LENGTH_DECODE: "RunLengthDecode",
							CCITT_FAX_DECODE: "CCITTFaxDecode"
						};
						var v = e.image_compression = {
								NONE: "NONE",
								FAST: "FAST",
								MEDIUM: "MEDIUM",
								SLOW: "SLOW"
							},
							y = e.__addimage__.sHashCode = function(e) {
								var t, n, r = 0;
								if ("string" == typeof e)
									for (n = e.length, t = 0; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
								else if (E(e))
									for (n = e.byteLength / 2, t = 0; t < n; t++) r = (r << 5) - r + e[t], r |= 0;
								return r
							},
							A = e.__addimage__.validateStringAsBase64 = function(e) {
								(e = e || "").toString().trim();
								var t = !0;
								return 0 === e.length && (t = !1), e.length % 4 != 0 && (t = !1), !1 === /^[A-Za-z0-9+/]+$/.test(e.substr(0, e.length - 2)) && (t = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(e.substr(-2)) && (t = !1), t
							},
							S = e.__addimage__.extractImageFromDataUrl = function(e) {
								var t = (e = e || "").split("base64,"),
									n = null;
								if (2 === t.length) {
									var r = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(t[0]);
									Array.isArray(r) && (n = {
										mimeType: r[1],
										charset: r[2],
										data: t[1]
									})
								}
								return n
							},
							w = e.__addimage__.supportsArrayBuffer = function() {
								return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
							};
						e.__addimage__.isArrayBuffer = function(e) {
							return w() && e instanceof ArrayBuffer
						};
						var E = e.__addimage__.isArrayBufferView = function(e) {
								return w() && "undefined" != typeof Uint32Array && (e instanceof Int8Array || e instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array)
							},
							T = e.__addimage__.binaryStringToUint8Array = function(e) {
								for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
								return n
							},
							C = e.__addimage__.arrayBufferToBinaryString = function(e) {
								try {
									return l(f(String.fromCharCode.apply(null, e)))
								} catch (t) {
									if ("undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.reduce) return new Uint8Array(e).reduce((function(e, t) {
										return e.push(String.fromCharCode(t)), e
									}), []).join("")
								}
							};
						e.addImage = function() {
							var e, n, r, i, a, o, u, c, l;
							if ("number" == typeof arguments[1] ? (n = t, r = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], u = arguments[5], c = arguments[6], l = arguments[7]) : (n = arguments[1], r = arguments[2], i = arguments[3], a = arguments[4], o = arguments[5], u = arguments[6], c = arguments[7], l = arguments[8]), "object" == typeof(e = arguments[0]) && !h(e) && "imageData" in e) {
								var f = e;
								e = f.imageData, n = f.format || n || t, r = f.x || r || 0, i = f.y || i || 0, a = f.w || f.width || a, o = f.h || f.height || o, u = f.alias || u, c = f.compression || c, l = f.rotation || f.angle || l
							}
							var d = this.internal.getFilters();
							if (void 0 === c && -1 !== d.indexOf("FlateEncode") && (c = "SLOW"), isNaN(r) || isNaN(i)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
							s.call(this);
							var p = $.call(this, e, n, u, c);
							return b.call(this, r, i, a, o, p, l), this
						};
						var $ = function(n, i, a, o) {
								var s, u, l;
								if ("string" == typeof n && r(n) === t) {
									n = unescape(n);
									var f = k(n, !1);
									("" !== f || void 0 !== (f = e.loadFile(n, !0))) && (n = f)
								}
								if (h(n) && (n = p(n, i)), i = r(n, i), !d(i)) throw new Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
								if ((null == (l = a) || 0 === l.length) && (a = function(e) {
										return "string" == typeof e || E(e) ? y(e) : null
									}(n)), (s = _.call(this, a)) || (w() && (n instanceof Uint8Array || (u = n, n = T(n))), s = this["process" + i.toUpperCase()](n, c.call(this), a, function(t) {
										return t && "string" == typeof t && (t = t.toUpperCase()), t in e.image_compression ? t : v.NONE
									}(o), u)), !s) throw new Error("An unknown error occurred whilst processing the image.");
								return s
							},
							k = e.__addimage__.convertBase64ToBinaryString = function(e, t) {
								var n;
								t = "boolean" != typeof t || t;
								var r, i = "";
								if ("string" == typeof e) {
									r = null !== (n = S(e)) ? n.data : e;
									try {
										i = l(r)
									} catch (e) {
										if (t) throw A(r) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + e.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
									}
								}
								return i
							};
						e.getImageProperties = function(n) {
							var i, a, o = "";
							if (h(n) && (n = p(n)), "string" == typeof n && r(n) === t && ("" === (o = k(n, !1)) && (o = e.loadFile(n) || ""), n = o), a = r(n), !d(a)) throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
							if (!w() || n instanceof Uint8Array || (n = T(n)), !(i = this["process" + a.toUpperCase()](n))) throw new Error("An unknown error occurred whilst processing the image");
							return i.fileType = a, i
						}
					}(D.API),
					function(e) {
						var t = function(e) {
							if (void 0 !== e && "" != e) return !0
						};
						D.API.events.push(["addPage", function(e) {
							this.internal.getPageInfo(e.pageNumber).pageContext.annotations = []
						}]), e.events.push(["putPage", function(e) {
							for (var n, r, i, a = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(e.objId), u = e.pageContext.annotations, c = !1, l = 0; l < u.length && !c; l++) switch ((n = u[l]).type) {
								case "link":
									(t(n.options.url) || t(n.options.pageNumber)) && (c = !0);
									break;
								case "reference":
								case "text":
								case "freetext":
									c = !0
							}
							if (0 != c) {
								this.internal.write("/Annots [");
								for (var f = 0; f < u.length; f++) {
									n = u[f];
									var d = this.internal.pdfEscape,
										h = this.internal.getEncryptor(e.objId);
									switch (n.type) {
										case "reference":
											this.internal.write(" " + n.object.objId + " 0 R ");
											break;
										case "text":
											var p = this.internal.newAdditionalObject(),
												_ = this.internal.newAdditionalObject(),
												m = this.internal.getEncryptor(p.objId),
												b = n.title || "Note";
											i = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y) + "] ") + "/Contents (" + d(m(n.contents)) + ")", i += " /Popup " + _.objId + " 0 R", i += " /P " + s.objId + " 0 R", i += " /T (" + d(m(b)) + ") >>", p.content = i;
											var g = p.objId + " 0 R";
											i = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + a(n.bounds.x + 30) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w + 30) + " " + o(n.bounds.y) + "] ") + " /Parent " + g, n.open && (i += " /Open true"), i += " >>", _.content = i, this.internal.write(p.objId, "0 R", _.objId, "0 R");
											break;
										case "freetext":
											r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y + n.bounds.h) + "] ";
											var v = n.color || "#000000";
											i = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + d(h(n.contents)) + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + v + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
											break;
										case "link":
											if (n.options.name) {
												var y = this.annotations._nameMap[n.options.name];
												n.options.pageNumber = y.page, n.options.top = y.y
											} else n.options.top || (n.options.top = 0);
											if (r = "/Rect [" + n.finalBounds.x + " " + n.finalBounds.y + " " + n.finalBounds.w + " " + n.finalBounds.h + "] ", i = "", n.options.url) i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + d(h(n.options.url)) + ") >>";
											else if (n.options.pageNumber) switch (i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(n.options.pageNumber).objId + " 0 R", n.options.magFactor = n.options.magFactor || "XYZ", n.options.magFactor) {
												case "Fit":
													i += " /Fit]";
													break;
												case "FitH":
													i += " /FitH " + n.options.top + "]";
													break;
												case "FitV":
													n.options.left = n.options.left || 0, i += " /FitV " + n.options.left + "]";
													break;
												case "XYZ":
												default:
													var A = o(n.options.top);
													n.options.left = n.options.left || 0, void 0 === n.options.zoom && (n.options.zoom = 0), i += " /XYZ " + n.options.left + " " + A + " " + n.options.zoom + "]"
											}
											"" != i && (i += " >>", this.internal.write(i))
									}
								}
								this.internal.write("]")
							}
						}]), e.createAnnotation = function(e) {
							var t = this.internal.getCurrentPageInfo();
							switch (e.type) {
								case "link":
									this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
									break;
								case "text":
								case "freetext":
									t.pageContext.annotations.push(e)
							}
						}, e.link = function(e, t, n, r, i) {
							var a = this.internal.getCurrentPageInfo(),
								o = this.internal.getCoordinateString,
								s = this.internal.getVerticalCoordinateString;
							a.pageContext.annotations.push({
								finalBounds: {
									x: o(e),
									y: s(t),
									w: o(e + n),
									h: s(t + r)
								},
								options: i,
								type: "link"
							})
						}, e.textWithLink = function(e, t, n, r) {
							var i = this.getTextWidth(e),
								a = this.internal.getLineHeight() / this.internal.scaleFactor;
							return this.text(e, t, n, r), n += .2 * a, "center" === r.align && (t -= i / 2), "right" === r.align && (t -= i), this.link(t, n - a, i, a, r), i
						}, e.getTextWidth = function(e) {
							var t = this.internal.getFontSize();
							return this.getStringUnitWidth(e) * t / this.internal.scaleFactor
						}
					}(D.API),
					function(e) {
						var t = {
								1569: [65152],
								1570: [65153, 65154],
								1571: [65155, 65156],
								1572: [65157, 65158],
								1573: [65159, 65160],
								1574: [65161, 65162, 65163, 65164],
								1575: [65165, 65166],
								1576: [65167, 65168, 65169, 65170],
								1577: [65171, 65172],
								1578: [65173, 65174, 65175, 65176],
								1579: [65177, 65178, 65179, 65180],
								1580: [65181, 65182, 65183, 65184],
								1581: [65185, 65186, 65187, 65188],
								1582: [65189, 65190, 65191, 65192],
								1583: [65193, 65194],
								1584: [65195, 65196],
								1585: [65197, 65198],
								1586: [65199, 65200],
								1587: [65201, 65202, 65203, 65204],
								1588: [65205, 65206, 65207, 65208],
								1589: [65209, 65210, 65211, 65212],
								1590: [65213, 65214, 65215, 65216],
								1591: [65217, 65218, 65219, 65220],
								1592: [65221, 65222, 65223, 65224],
								1593: [65225, 65226, 65227, 65228],
								1594: [65229, 65230, 65231, 65232],
								1601: [65233, 65234, 65235, 65236],
								1602: [65237, 65238, 65239, 65240],
								1603: [65241, 65242, 65243, 65244],
								1604: [65245, 65246, 65247, 65248],
								1605: [65249, 65250, 65251, 65252],
								1606: [65253, 65254, 65255, 65256],
								1607: [65257, 65258, 65259, 65260],
								1608: [65261, 65262],
								1609: [65263, 65264, 64488, 64489],
								1610: [65265, 65266, 65267, 65268],
								1649: [64336, 64337],
								1655: [64477],
								1657: [64358, 64359, 64360, 64361],
								1658: [64350, 64351, 64352, 64353],
								1659: [64338, 64339, 64340, 64341],
								1662: [64342, 64343, 64344, 64345],
								1663: [64354, 64355, 64356, 64357],
								1664: [64346, 64347, 64348, 64349],
								1667: [64374, 64375, 64376, 64377],
								1668: [64370, 64371, 64372, 64373],
								1670: [64378, 64379, 64380, 64381],
								1671: [64382, 64383, 64384, 64385],
								1672: [64392, 64393],
								1676: [64388, 64389],
								1677: [64386, 64387],
								1678: [64390, 64391],
								1681: [64396, 64397],
								1688: [64394, 64395],
								1700: [64362, 64363, 64364, 64365],
								1702: [64366, 64367, 64368, 64369],
								1705: [64398, 64399, 64400, 64401],
								1709: [64467, 64468, 64469, 64470],
								1711: [64402, 64403, 64404, 64405],
								1713: [64410, 64411, 64412, 64413],
								1715: [64406, 64407, 64408, 64409],
								1722: [64414, 64415],
								1723: [64416, 64417, 64418, 64419],
								1726: [64426, 64427, 64428, 64429],
								1728: [64420, 64421],
								1729: [64422, 64423, 64424, 64425],
								1733: [64480, 64481],
								1734: [64473, 64474],
								1735: [64471, 64472],
								1736: [64475, 64476],
								1737: [64482, 64483],
								1739: [64478, 64479],
								1740: [64508, 64509, 64510, 64511],
								1744: [64484, 64485, 64486, 64487],
								1746: [64430, 64431],
								1747: [64432, 64433]
							},
							n = {
								65247: {
									65154: 65269,
									65156: 65271,
									65160: 65273,
									65166: 65275
								},
								65248: {
									65154: 65270,
									65156: 65272,
									65160: 65274,
									65166: 65276
								},
								65165: {
									65247: {
										65248: {
											65258: 65010
										}
									}
								},
								1617: {
									1612: 64606,
									1613: 64607,
									1614: 64608,
									1615: 64609,
									1616: 64610
								}
							},
							r = {
								1612: 64606,
								1613: 64607,
								1614: 64608,
								1615: 64609,
								1616: 64610
							},
							i = [1570, 1571, 1573, 1575];
						e.__arabicParser__ = {};
						var a = e.__arabicParser__.isInArabicSubstitutionA = function(e) {
								return void 0 !== t[e.charCodeAt(0)]
							},
							o = e.__arabicParser__.isArabicLetter = function(e) {
								return "string" == typeof e && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(e)
							},
							s = e.__arabicParser__.isArabicEndLetter = function(e) {
								return o(e) && a(e) && t[e.charCodeAt(0)].length <= 2
							},
							u = e.__arabicParser__.isArabicAlfLetter = function(e) {
								return o(e) && i.indexOf(e.charCodeAt(0)) >= 0
							};
						e.__arabicParser__.arabicLetterHasIsolatedForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 1
						};
						var c = e.__arabicParser__.arabicLetterHasFinalForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 2
						};
						e.__arabicParser__.arabicLetterHasInitialForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 3
						};
						var l = e.__arabicParser__.arabicLetterHasMedialForm = function(e) {
								return o(e) && a(e) && 4 == t[e.charCodeAt(0)].length
							},
							f = e.__arabicParser__.resolveLigatures = function(e) {
								var t = 0,
									r = n,
									i = "",
									a = 0;
								for (t = 0; t < e.length; t += 1) void 0 !== r[e.charCodeAt(t)] ? (a++, "number" == typeof(r = r[e.charCodeAt(t)]) && (i += String.fromCharCode(r), r = n, a = 0), t === e.length - 1 && (r = n, i += e.charAt(t - (a - 1)), t -= a - 1, a = 0)) : (r = n, i += e.charAt(t - a), t -= a, a = 0);
								return i
							};
						e.__arabicParser__.isArabicDiacritic = function(e) {
							return void 0 !== e && void 0 !== r[e.charCodeAt(0)]
						};
						var d = e.__arabicParser__.getCorrectForm = function(e, t, n) {
								return o(e) ? !1 === a(e) ? -1 : !c(e) || !o(t) && !o(n) || !o(n) && s(t) || s(e) && !o(t) || s(e) && u(t) || s(e) && s(t) ? 0 : l(e) && o(t) && !s(t) && o(n) && c(n) ? 3 : s(e) || !o(n) ? 1 : 2 : -1
							},
							h = function(e) {
								var n = 0,
									r = 0,
									i = 0,
									a = "",
									s = "",
									u = "",
									c = (e = e || "").split("\\s+"),
									l = [];
								for (n = 0; n < c.length; n += 1) {
									for (l.push(""), r = 0; r < c[n].length; r += 1) a = c[n][r], s = c[n][r - 1], u = c[n][r + 1], o(a) ? (i = d(a, s, u), l[n] += -1 !== i ? String.fromCharCode(t[a.charCodeAt(0)][i]) : a) : l[n] += a;
									l[n] = f(l[n])
								}
								return l.join(" ")
							},
							p = e.__arabicParser__.processArabic = e.processArabic = function() {
								var e, t = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
									n = [];
								if (Array.isArray(t)) {
									var r = 0;
									for (n = [], r = 0; r < t.length; r += 1) Array.isArray(t[r]) ? n.push([h(t[r][0]), t[r][1], t[r][2]]) : n.push([h(t[r])]);
									e = n
								} else e = h(t);
								return "string" == typeof arguments[0] ? e : (arguments[0].text = e, arguments[0])
							};
						e.events.push(["preProcessText", p])
					}(D.API), D.API.autoPrint = function(e) {
						var t;
						switch ((e = e || {}).variant = e.variant || "non-conform", e.variant) {
							case "javascript":
								this.addJS("print({});");
								break;
							case "non-conform":
							default:
								this.internal.events.subscribe("postPutResources", (function() {
									t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
								})), this.internal.events.subscribe("putCatalog", (function() {
									this.internal.out("/OpenAction " + t + " 0 R")
								}))
						}
						return this
					},
					function(e) {
						var t = function() {
							var e = void 0;
							Object.defineProperty(this, "pdf", {
								get: function() {
									return e
								},
								set: function(t) {
									e = t
								}
							});
							var t = 150;
							Object.defineProperty(this, "width", {
								get: function() {
									return t
								},
								set: function(e) {
									t = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 150 : e, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = t + 1)
								}
							});
							var n = 300;
							Object.defineProperty(this, "height", {
								get: function() {
									return n
								},
								set: function(e) {
									n = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 300 : e, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1)
								}
							});
							var r = [];
							Object.defineProperty(this, "childNodes", {
								get: function() {
									return r
								},
								set: function(e) {
									r = e
								}
							});
							var i = {};
							Object.defineProperty(this, "style", {
								get: function() {
									return i
								},
								set: function(e) {
									i = e
								}
							}), Object.defineProperty(this, "parentNode", {})
						};
						t.prototype.getContext = function(e, t) {
							var n;
							if ("2d" !== (e = e || "2d")) return null;
							for (n in t) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = t[n]);
							return this.pdf.context2d._canvas = this, this.pdf.context2d
						}, t.prototype.toDataURL = function() {
							throw new Error("toDataURL is not implemented.")
						}, e.events.push(["initialized", function() {
							this.canvas = new t, this.canvas.pdf = this
						}])
					}(D.API),
					function(e) {
						var t = {
								left: 0,
								top: 0,
								bottom: 0,
								right: 0
							},
							n = !1,
							r = function() {
								void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this))
							},
							i = function() {
								this.internal.__cell__.lastCell = new a, this.internal.__cell__.pages = 1
							},
							a = function() {
								var e = arguments[0];
								Object.defineProperty(this, "x", {
									enumerable: !0,
									get: function() {
										return e
									},
									set: function(t) {
										e = t
									}
								});
								var t = arguments[1];
								Object.defineProperty(this, "y", {
									enumerable: !0,
									get: function() {
										return t
									},
									set: function(e) {
										t = e
									}
								});
								var n = arguments[2];
								Object.defineProperty(this, "width", {
									enumerable: !0,
									get: function() {
										return n
									},
									set: function(e) {
										n = e
									}
								});
								var r = arguments[3];
								Object.defineProperty(this, "height", {
									enumerable: !0,
									get: function() {
										return r
									},
									set: function(e) {
										r = e
									}
								});
								var i = arguments[4];
								Object.defineProperty(this, "text", {
									enumerable: !0,
									get: function() {
										return i
									},
									set: function(e) {
										i = e
									}
								});
								var a = arguments[5];
								Object.defineProperty(this, "lineNumber", {
									enumerable: !0,
									get: function() {
										return a
									},
									set: function(e) {
										a = e
									}
								});
								var o = arguments[6];
								return Object.defineProperty(this, "align", {
									enumerable: !0,
									get: function() {
										return o
									},
									set: function(e) {
										o = e
									}
								}), this
							};
						a.prototype.clone = function() {
							return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
						}, a.prototype.toArray = function() {
							return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
						}, e.setHeaderFunction = function(e) {
							return r.call(this), this.internal.__cell__.headerFunction = "function" == typeof e ? e : void 0, this
						}, e.getTextDimensions = function(e, t) {
							r.call(this);
							var n = (t = t || {}).fontSize || this.getFontSize(),
								i = t.font || this.getFont(),
								a = t.scaleFactor || this.internal.scaleFactor,
								o = 0,
								s = 0,
								u = 0,
								c = this;
							if (!Array.isArray(e) && "string" != typeof e) {
								if ("number" != typeof e) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
								e = String(e)
							}
							const l = t.maxWidth;
							l > 0 ? "string" == typeof e ? e = this.splitTextToSize(e, l) : "[object Array]" === Object.prototype.toString.call(e) && (e = e.reduce((function(e, t) {
								return e.concat(c.splitTextToSize(t, l))
							}), [])) : e = Array.isArray(e) ? e : [e];
							for (var f = 0; f < e.length; f++) o < (u = this.getStringUnitWidth(e[f], {
								font: i
							}) * n) && (o = u);
							return 0 !== o && (s = e.length), {
								w: o /= a,
								h: Math.max((s * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / a, 0)
							}
						}, e.cellAddPage = function() {
							r.call(this), this.addPage();
							var e = this.internal.__cell__.margins || t;
							return this.internal.__cell__.lastCell = new a(e.left, e.top, void 0, void 0), this.internal.__cell__.pages += 1, this
						};
						var o = e.cell = function() {
							var e;
							e = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), r.call(this);
							var i = this.internal.__cell__.lastCell,
								o = this.internal.__cell__.padding,
								s = this.internal.__cell__.margins || t,
								u = this.internal.__cell__.tableHeaderRow,
								c = this.internal.__cell__.printHeaders;
							return void 0 !== i.lineNumber && (i.lineNumber === e.lineNumber ? (e.x = (i.x || 0) + (i.width || 0), e.y = i.y || 0) : i.y + i.height + e.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), e.y = s.top, c && u && (this.printHeaderRow(e.lineNumber, !0), e.y += u[0].height)) : e.y = i.y + i.height || e.y), void 0 !== e.text[0] && (this.rect(e.x, e.y, e.width, e.height, !0 === n ? "FD" : void 0), "right" === e.align ? this.text(e.text, e.x + e.width - o, e.y + o, {
								align: "right",
								baseline: "top"
							}) : "center" === e.align ? this.text(e.text, e.x + e.width / 2, e.y + o, {
								align: "center",
								baseline: "top",
								maxWidth: e.width - o - o
							}) : this.text(e.text, e.x + o, e.y + o, {
								align: "left",
								baseline: "top",
								maxWidth: e.width - o - o
							})), this.internal.__cell__.lastCell = e, this
						};
						e.table = function(e, n, u, c, l) {
							if (r.call(this), !u) throw new Error("No data for PDF table.");
							var f, d, h, p, _ = [],
								m = [],
								b = [],
								g = {},
								v = {},
								y = [],
								A = [],
								S = (l = l || {}).autoSize || !1,
								w = !1 !== l.printHeaders,
								E = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12,
								T = l.margins || Object.assign({
									width: this.getPageWidth()
								}, t),
								C = "number" == typeof l.padding ? l.padding : 3,
								$ = l.headerBackgroundColor || "#c8c8c8";
							if (i.call(this), this.internal.__cell__.printHeaders = w, this.internal.__cell__.margins = T, this.internal.__cell__.table_font_size = E, this.internal.__cell__.padding = C, this.internal.__cell__.headerBackgroundColor = $, this.setFontSize(E), null == c) m = _ = Object.keys(u[0]), b = _.map((function() {
								return "left"
							}));
							else if (Array.isArray(c) && "object" == typeof c[0])
								for (_ = c.map((function(e) {
										return e.name
									})), m = c.map((function(e) {
										return e.prompt || e.name || ""
									})), b = c.map((function(e) {
										return e.align || "left"
									})), f = 0; f < c.length; f += 1) v[c[f].name] = c[f].width * (19.049976 / 25.4);
							else Array.isArray(c) && "string" == typeof c[0] && (m = _ = c, b = _.map((function() {
								return "left"
							})));
							if (S || Array.isArray(c) && "string" == typeof c[0])
								for (f = 0; f < _.length; f += 1) {
									for (g[p = _[f]] = u.map((function(e) {
											return e[p]
										})), this.setFont(void 0, "bold"), y.push(this.getTextDimensions(m[f], {
											fontSize: this.internal.__cell__.table_font_size,
											scaleFactor: this.internal.scaleFactor
										}).w), d = g[p], this.setFont(void 0, "normal"), h = 0; h < d.length; h += 1) y.push(this.getTextDimensions(d[h], {
										fontSize: this.internal.__cell__.table_font_size,
										scaleFactor: this.internal.scaleFactor
									}).w);
									v[p] = Math.max.apply(null, y) + C + C, y = []
								}
							if (w) {
								var k = {};
								for (f = 0; f < _.length; f += 1) k[_[f]] = {}, k[_[f]].text = m[f], k[_[f]].align = b[f];
								var O = s.call(this, k, v);
								A = _.map((function(t) {
									return new a(e, n, v[t], O, k[t].text, void 0, k[t].align)
								})), this.setTableHeaderRow(A), this.printHeaderRow(1, !1)
							}
							var x = c.reduce((function(e, t) {
								return e[t.name] = t.align, e
							}), {});
							for (f = 0; f < u.length; f += 1) {
								var P = s.call(this, u[f], v);
								for (h = 0; h < _.length; h += 1) o.call(this, new a(e, n, v[_[h]], P, u[f][_[h]], f + 2, x[_[h]]))
							}
							return this.internal.__cell__.table_x = e, this.internal.__cell__.table_y = n, this
						};
						var s = function(e, t) {
							var n = this.internal.__cell__.padding,
								r = this.internal.__cell__.table_font_size,
								i = this.internal.scaleFactor;
							return Object.keys(e).map((function(r) {
								var i = e[r];
								return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, t[r] - n - n)
							}), this).map((function(e) {
								return this.getLineHeightFactor() * e.length * r / i + n + n
							}), this).reduce((function(e, t) {
								return Math.max(e, t)
							}), 0)
						};
						e.setTableHeaderRow = function(e) {
							r.call(this), this.internal.__cell__.tableHeaderRow = e
						}, e.printHeaderRow = function(e, t) {
							if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
							var i;
							if (n = !0, "function" == typeof this.internal.__cell__.headerFunction) {
								var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
								this.internal.__cell__.lastCell = new a(s[0], s[1], s[2], s[3], void 0, -1)
							}
							this.setFont(void 0, "bold");
							for (var u = [], c = 0; c < this.internal.__cell__.tableHeaderRow.length; c += 1) i = this.internal.__cell__.tableHeaderRow[c].clone(), t && (i.y = this.internal.__cell__.margins.top || 0, u.push(i)), i.lineNumber = e, this.setFillColor(this.internal.__cell__.headerBackgroundColor), o.call(this, i);
							u.length > 0 && this.setTableHeaderRow(u), this.setFont(void 0, "normal"), n = !1
						}
					}(D.API);
				var we = {
						italic: ["italic", "oblique", "normal"],
						oblique: ["oblique", "italic", "normal"],
						normal: ["normal", "oblique", "italic"]
					},
					Ee = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
					Te = Se(Ee),
					Ce = [100, 200, 300, 400, 500, 600, 700, 800, 900],
					$e = Se(Ce);

				function ke(e) {
					var t = e.family.replace(/"|'/g, "").toLowerCase(),
						n = function(e) {
							return we[e = e || "normal"] ? e : "normal"
						}(e.style),
						r = function(e) {
							if (!e) return 400;
							if ("number" == typeof e) return e >= 100 && e <= 900 && e % 100 == 0 ? e : 400;
							if (/^\d00$/.test(e)) return parseInt(e);
							switch (e) {
								case "bold":
									return 700;
								case "normal":
								default:
									return 400
							}
						}(e.weight),
						i = function(e) {
							return "number" == typeof Te[e = e || "normal"] ? e : "normal"
						}(e.stretch);
					return {
						family: t,
						style: n,
						weight: r,
						stretch: i,
						src: e.src || [],
						ref: e.ref || {
							name: t,
							style: [i, n, r].join(" ")
						}
					}
				}

				function Oe(e, t, n, r) {
					var i;
					for (i = n; i >= 0 && i < t.length; i += r)
						if (e[t[i]]) return e[t[i]];
					for (i = n; i >= 0 && i < t.length; i -= r)
						if (e[t[i]]) return e[t[i]]
				}
				var xe = {
						"sans-serif": "helvetica",
						fixed: "courier",
						monospace: "courier",
						terminal: "courier",
						cursive: "times",
						fantasy: "times",
						serif: "times"
					},
					Pe = {
						caption: "times",
						icon: "times",
						menu: "times",
						"message-box": "times",
						"small-caption": "times",
						"status-bar": "times"
					};

				function Me(e) {
					return [e.stretch, e.style, e.weight, e.family].join(" ")
				}

				function Ie(e) {
					return e.trimLeft()
				}

				function Le(e, t) {
					for (var n = 0; n < e.length;) {
						if (e.charAt(n) === t) return [e.substring(0, n), e.substring(n + 1)];
						n += 1
					}
					return null
				}

				function De(e) {
					var t = e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
					return null === t ? null : [t[0], e.substring(t[0].length)]
				}
				var Be, Ne, Re, Fe = ["times"];
				! function(e) {
					var t, n, r, i, a, s, u, c, l, f = function(e) {
						return e = e || {}, this.isStrokeTransparent = e.isStrokeTransparent || !1, this.strokeOpacity = e.strokeOpacity || 1, this.strokeStyle = e.strokeStyle || "#000000", this.fillStyle = e.fillStyle || "#000000", this.isFillTransparent = e.isFillTransparent || !1, this.fillOpacity = e.fillOpacity || 1, this.font = e.font || "10px sans-serif", this.textBaseline = e.textBaseline || "alphabetic", this.textAlign = e.textAlign || "left", this.lineWidth = e.lineWidth || 1, this.lineJoin = e.lineJoin || "miter", this.lineCap = e.lineCap || "butt", this.path = e.path || [], this.transform = void 0 !== e.transform ? e.transform.clone() : new c, this.globalCompositeOperation = e.globalCompositeOperation || "normal", this.globalAlpha = e.globalAlpha || 1, this.clip_path = e.clip_path || [], this.currentPoint = e.currentPoint || new s, this.miterLimit = e.miterLimit || 10, this.lastPoint = e.lastPoint || new s, this.ignoreClearRect = "boolean" != typeof e.ignoreClearRect || e.ignoreClearRect, this
					};
					e.events.push(["initialized", function() {
						this.context2d = new d(this), t = this.internal.f2, n = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, i = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, s = this.internal.Point, u = this.internal.Rectangle, c = this.internal.Matrix, l = new f
					}]);
					var d = function(e) {
						Object.defineProperty(this, "canvas", {
							get: function() {
								return {
									parentNode: !1,
									style: !1
								}
							}
						});
						var t = e;
						Object.defineProperty(this, "pdf", {
							get: function() {
								return t
							}
						});
						var n = !1;
						Object.defineProperty(this, "pageWrapXEnabled", {
							get: function() {
								return n
							},
							set: function(e) {
								n = Boolean(e)
							}
						});
						var r = !1;
						Object.defineProperty(this, "pageWrapYEnabled", {
							get: function() {
								return r
							},
							set: function(e) {
								r = Boolean(e)
							}
						});
						var i = 0;
						Object.defineProperty(this, "posX", {
							get: function() {
								return i
							},
							set: function(e) {
								isNaN(e) || (i = e)
							}
						});
						var a = 0;
						Object.defineProperty(this, "posY", {
							get: function() {
								return a
							},
							set: function(e) {
								isNaN(e) || (a = e)
							}
						});
						var o = !1;
						Object.defineProperty(this, "autoPaging", {
							get: function() {
								return o
							},
							set: function(e) {
								o = Boolean(e)
							}
						});
						var s = 0;
						Object.defineProperty(this, "lastBreak", {
							get: function() {
								return s
							},
							set: function(e) {
								s = e
							}
						});
						var u = [];
						Object.defineProperty(this, "pageBreaks", {
							get: function() {
								return u
							},
							set: function(e) {
								u = e
							}
						}), Object.defineProperty(this, "ctx", {
							get: function() {
								return l
							},
							set: function(e) {
								e instanceof f && (l = e)
							}
						}), Object.defineProperty(this, "path", {
							get: function() {
								return l.path
							},
							set: function(e) {
								l.path = e
							}
						});
						var c = [];
						Object.defineProperty(this, "ctxStack", {
							get: function() {
								return c
							},
							set: function(e) {
								c = e
							}
						}), Object.defineProperty(this, "fillStyle", {
							get: function() {
								return this.ctx.fillStyle
							},
							set: function(e) {
								var t;
								t = p(e), this.ctx.fillStyle = t.style, this.ctx.isFillTransparent = 0 === t.a, this.ctx.fillOpacity = t.a, this.pdf.setFillColor(t.r, t.g, t.b, {
									a: t.a
								}), this.pdf.setTextColor(t.r, t.g, t.b, {
									a: t.a
								})
							}
						}), Object.defineProperty(this, "strokeStyle", {
							get: function() {
								return this.ctx.strokeStyle
							},
							set: function(e) {
								var t = p(e);
								this.ctx.strokeStyle = t.style, this.ctx.isStrokeTransparent = 0 === t.a, this.ctx.strokeOpacity = t.a, 0 === t.a ? this.pdf.setDrawColor(255, 255, 255) : (t.a, this.pdf.setDrawColor(t.r, t.g, t.b))
							}
						}), Object.defineProperty(this, "lineCap", {
							get: function() {
								return this.ctx.lineCap
							},
							set: function(e) {
								-1 !== ["butt", "round", "square"].indexOf(e) && (this.ctx.lineCap = e, this.pdf.setLineCap(e))
							}
						}), Object.defineProperty(this, "lineWidth", {
							get: function() {
								return this.ctx.lineWidth
							},
							set: function(e) {
								isNaN(e) || (this.ctx.lineWidth = e, this.pdf.setLineWidth(e))
							}
						}), Object.defineProperty(this, "lineJoin", {
							get: function() {
								return this.ctx.lineJoin
							},
							set: function(e) {
								-1 !== ["bevel", "round", "miter"].indexOf(e) && (this.ctx.lineJoin = e, this.pdf.setLineJoin(e))
							}
						}), Object.defineProperty(this, "miterLimit", {
							get: function() {
								return this.ctx.miterLimit
							},
							set: function(e) {
								isNaN(e) || (this.ctx.miterLimit = e, this.pdf.setMiterLimit(e))
							}
						}), Object.defineProperty(this, "textBaseline", {
							get: function() {
								return this.ctx.textBaseline
							},
							set: function(e) {
								this.ctx.textBaseline = e
							}
						}), Object.defineProperty(this, "textAlign", {
							get: function() {
								return this.ctx.textAlign
							},
							set: function(e) {
								-1 !== ["right", "end", "center", "left", "start"].indexOf(e) && (this.ctx.textAlign = e)
							}
						});
						var d = null;

						function h(e, t) {
							if (null === d) {
								var n = function(e) {
									var t = [];
									return Object.keys(e).forEach((function(n) {
										e[n].forEach((function(e) {
											var r = null;
											switch (e) {
												case "bold":
													r = {
														family: n,
														weight: "bold"
													};
													break;
												case "italic":
													r = {
														family: n,
														style: "italic"
													};
													break;
												case "bolditalic":
													r = {
														family: n,
														weight: "bold",
														style: "italic"
													};
													break;
												case "":
												case "normal":
													r = {
														family: n
													}
											}
											null !== r && (r.ref = {
												name: n,
												style: e
											}, t.push(r))
										}))
									})), t
								}(e.getFontList());
								d = function(e) {
									for (var t = {}, n = 0; n < e.length; ++n) {
										var r = ke(e[n]),
											i = r.family,
											a = r.stretch,
											o = r.style,
											s = r.weight;
										t[i] = t[i] || {}, t[i][a] = t[i][a] || {}, t[i][a][o] = t[i][a][o] || {}, t[i][a][o][s] = r
									}
									return t
								}(n.concat(t))
							}
							return d
						}
						var _ = null;
						Object.defineProperty(this, "fontFaces", {
							get: function() {
								return _
							},
							set: function(e) {
								d = null, _ = e
							}
						}), Object.defineProperty(this, "font", {
							get: function() {
								return this.ctx.font
							},
							set: function(e) {
								var t;
								if (this.ctx.font = e, null !== (t = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(e))) {
									var n = t[1],
										r = (t[2], t[3]),
										i = t[4],
										a = (t[5], t[6]),
										o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
									i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
									var s = function(e) {
										var t, n, r = [],
											i = e.trim();
										if ("" === i) return Fe;
										if (i in Pe) return [Pe[i]];
										for (;
											"" !== i;) {
											switch (n = null, t = (i = Ie(i)).charAt(0)) {
												case '"':
												case "'":
													n = Le(i.substring(1), t);
													break;
												default:
													n = De(i)
											}
											if (null === n) return Fe;
											if (r.push(n[0]), "" !== (i = Ie(n[1])) && "," !== i.charAt(0)) return Fe;
											i = i.replace(/^,/, "")
										}
										return r
									}(a);
									if (this.fontFaces) {
										var u = function(e, t, n) {
											for (var r = (n = n || {}).defaultFontFamily || "times", i = Object.assign({}, xe, n.genericFontFamilies || {}), a = null, o = null, s = 0; s < t.length; ++s)
												if (i[(a = ke(t[s])).family] && (a.family = i[a.family]), e.hasOwnProperty(a.family)) {
													o = e[a.family];
													break
												} if (!(o = o || e[r])) throw new Error("Could not find a font-family for the rule '" + Me(a) + "' and default family '" + r + "'.");
											if (o = function(e, t) {
													if (t[e]) return t[e];
													var n = Te[e],
														r = n <= Te.normal ? -1 : 1,
														i = Oe(t, Ee, n, r);
													if (!i) throw new Error("Could not find a matching font-stretch value for " + e);
													return i
												}(a.stretch, o), o = function(e, t) {
													if (t[e]) return t[e];
													for (var n = we[e], r = 0; r < n.length; ++r)
														if (t[n[r]]) return t[n[r]];
													throw new Error("Could not find a matching font-style for " + e)
												}(a.style, o), !(o = function(e, t) {
													if (t[e]) return t[e];
													if (400 === e && t[500]) return t[500];
													if (500 === e && t[400]) return t[400];
													var n = $e[e],
														r = Oe(t, Ce, n, e < 400 ? -1 : 1);
													if (!r) throw new Error("Could not find a matching font-weight for value " + e);
													return r
												}(a.weight, o))) throw new Error("Failed to resolve a font for the rule '" + Me(a) + "'.");
											return o
										}(h(this.pdf, this.fontFaces), s.map((function(e) {
											return {
												family: e,
												stretch: "normal",
												weight: r,
												style: n
											}
										})));
										this.pdf.setFont(u.ref.name, u.ref.style)
									} else {
										var c = "";
										("bold" === r || parseInt(r, 10) >= 700 || "bold" === n) && (c = "bold"), "italic" === n && (c += "italic"), 0 === c.length && (c = "normal");
										for (var l = "", f = {
												arial: "Helvetica",
												Arial: "Helvetica",
												verdana: "Helvetica",
												Verdana: "Helvetica",
												helvetica: "Helvetica",
												Helvetica: "Helvetica",
												"sans-serif": "Helvetica",
												fixed: "Courier",
												monospace: "Courier",
												terminal: "Courier",
												cursive: "Times",
												fantasy: "Times",
												serif: "Times"
											}, d = 0; d < s.length; d++) {
											if (void 0 !== this.pdf.internal.getFont(s[d], c, {
													noFallback: !0,
													disableWarning: !0
												})) {
												l = s[d];
												break
											}
											if ("bolditalic" === c && void 0 !== this.pdf.internal.getFont(s[d], "bold", {
													noFallback: !0,
													disableWarning: !0
												})) l = s[d], c = "bold";
											else if (void 0 !== this.pdf.internal.getFont(s[d], "normal", {
													noFallback: !0,
													disableWarning: !0
												})) {
												l = s[d], c = "normal";
												break
											}
										}
										if ("" === l)
											for (var p = 0; p < s.length; p++)
												if (f[s[p]]) {
													l = f[s[p]];
													break
												} l = "" === l ? "Times" : l, this.pdf.setFont(l, c)
									}
								}
							}
						}), Object.defineProperty(this, "globalCompositeOperation", {
							get: function() {
								return this.ctx.globalCompositeOperation
							},
							set: function(e) {
								this.ctx.globalCompositeOperation = e
							}
						}), Object.defineProperty(this, "globalAlpha", {
							get: function() {
								return this.ctx.globalAlpha
							},
							set: function(e) {
								this.ctx.globalAlpha = e
							}
						}), Object.defineProperty(this, "ignoreClearRect", {
							get: function() {
								return this.ctx.ignoreClearRect
							},
							set: function(e) {
								this.ctx.ignoreClearRect = Boolean(e)
							}
						})
					};
					d.prototype.fill = function() {
						A.call(this, "fill", !1)
					}, d.prototype.stroke = function() {
						A.call(this, "stroke", !1)
					}, d.prototype.beginPath = function() {
						this.path = [{
							type: "begin"
						}]
					}, d.prototype.moveTo = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw o.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
						var n = this.ctx.transform.applyToPoint(new s(e, t));
						this.path.push({
							type: "mt",
							x: n.x,
							y: n.y
						}), this.ctx.lastPoint = new s(e, t)
					}, d.prototype.closePath = function() {
						var e = new s(0, 0),
							t = 0;
						for (t = this.path.length - 1; - 1 !== t; t--)
							if ("begin" === this.path[t].type && "object" == typeof this.path[t + 1] && "number" == typeof this.path[t + 1].x) {
								e = new s(this.path[t + 1].x, this.path[t + 1].y), this.path.push({
									type: "lt",
									x: e.x,
									y: e.y
								});
								break
							}
						"object" == typeof this.path[t + 2] && "number" == typeof this.path[t + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[t + 2]))), this.path.push({
							type: "close"
						}), this.ctx.lastPoint = new s(e.x, e.y)
					}, d.prototype.lineTo = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw o.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
						var n = this.ctx.transform.applyToPoint(new s(e, t));
						this.path.push({
							type: "lt",
							x: n.x,
							y: n.y
						}), this.ctx.lastPoint = new s(n.x, n.y)
					}, d.prototype.clip = function() {
						this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), A.call(this, null, !0)
					}, d.prototype.quadraticCurveTo = function(e, t, n, r) {
						if (isNaN(n) || isNaN(r) || isNaN(e) || isNaN(t)) throw o.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
						var i = this.ctx.transform.applyToPoint(new s(n, r)),
							a = this.ctx.transform.applyToPoint(new s(e, t));
						this.path.push({
							type: "qct",
							x1: a.x,
							y1: a.y,
							x: i.x,
							y: i.y
						}), this.ctx.lastPoint = new s(i.x, i.y)
					}, d.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
						if (isNaN(i) || isNaN(a) || isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw o.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
						var u = this.ctx.transform.applyToPoint(new s(i, a)),
							c = this.ctx.transform.applyToPoint(new s(e, t)),
							l = this.ctx.transform.applyToPoint(new s(n, r));
						this.path.push({
							type: "bct",
							x1: c.x,
							y1: c.y,
							x2: l.x,
							y2: l.y,
							x: u.x,
							y: u.y
						}), this.ctx.lastPoint = new s(u.x, u.y)
					}, d.prototype.arc = function(e, t, n, r, i, a) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i)) throw o.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
						if (a = Boolean(a), !this.ctx.transform.isIdentity) {
							var u = this.ctx.transform.applyToPoint(new s(e, t));
							e = u.x, t = u.y;
							var c = this.ctx.transform.applyToPoint(new s(0, n)),
								l = this.ctx.transform.applyToPoint(new s(0, 0));
							n = Math.sqrt(Math.pow(c.x - l.x, 2) + Math.pow(c.y - l.y, 2))
						}
						Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
							type: "arc",
							x: e,
							y: t,
							radius: n,
							startAngle: r,
							endAngle: i,
							counterclockwise: a
						})
					}, d.prototype.arcTo = function(e, t, n, r, i) {
						throw new Error("arcTo not implemented.")
					}, d.prototype.rect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw o.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
						this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.lineTo(e, t), this.lineTo(e + n, t), this.lineTo(e, t)
					}, d.prototype.fillRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw o.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
						if (!_.call(this)) {
							var i = {};
							"butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(e, t, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
						}
					}, d.prototype.strokeRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw o.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
						m.call(this) || (this.beginPath(), this.rect(e, t, n, r), this.stroke())
					}, d.prototype.clearRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw o.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
						this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(e, t, n, r))
					}, d.prototype.save = function(e) {
						e = "boolean" != typeof e || e;
						for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("q");
						if (this.pdf.setPage(t), e) {
							this.ctx.fontSize = this.pdf.internal.getFontSize();
							var r = new f(this.ctx);
							this.ctxStack.push(this.ctx), this.ctx = r
						}
					}, d.prototype.restore = function(e) {
						e = "boolean" != typeof e || e;
						for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
						this.pdf.setPage(t), e && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin)
					}, d.prototype.toDataURL = function() {
						throw new Error("toDataUrl not implemented.")
					};
					var p = function(e) {
							var t, n, r, i;
							if (!0 === e.isCanvasGradient && (e = e.getColor()), !e) return {
								r: 0,
								g: 0,
								b: 0,
								a: 0,
								style: e
							};
							if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(e)) t = 0, n = 0, r = 0, i = 0;
							else {
								var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(e);
								if (null !== a) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = 1;
								else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(e))) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = parseFloat(a[4]);
								else {
									if (i = 1, "string" == typeof e && "#" !== e.charAt(0)) {
										var o = new h(e);
										e = o.ok ? o.toHex() : "#000000"
									}
									4 === e.length ? (t = e.substring(1, 2), t += t, n = e.substring(2, 3), n += n, r = e.substring(3, 4), r += r) : (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7)), t = parseInt(t, 16), n = parseInt(n, 16), r = parseInt(r, 16)
								}
							}
							return {
								r: t,
								g: n,
								b: r,
								a: i,
								style: e
							}
						},
						_ = function() {
							return this.ctx.isFillTransparent || 0 == this.globalAlpha
						},
						m = function() {
							return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
						};
					d.prototype.fillText = function(e, t, n, r) {
						if (isNaN(t) || isNaN(n) || "string" != typeof e) throw o.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
						if (r = isNaN(r) ? void 0 : r, !_.call(this)) {
							n = w.call(this, n);
							var i = L(this.ctx.transform.rotation),
								a = this.ctx.transform.scaleX;
							k.call(this, {
								text: e,
								x: t,
								y: n,
								scale: a,
								angle: i,
								align: this.textAlign,
								maxWidth: r
							})
						}
					}, d.prototype.strokeText = function(e, t, n, r) {
						if (isNaN(t) || isNaN(n) || "string" != typeof e) throw o.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
						if (!m.call(this)) {
							r = isNaN(r) ? void 0 : r, n = w.call(this, n);
							var i = L(this.ctx.transform.rotation),
								a = this.ctx.transform.scaleX;
							k.call(this, {
								text: e,
								x: t,
								y: n,
								scale: a,
								renderingMode: "stroke",
								angle: i,
								align: this.textAlign,
								maxWidth: r
							})
						}
					}, d.prototype.measureText = function(e) {
						if ("string" != typeof e) throw o.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
						var t = this.pdf,
							n = this.pdf.internal.scaleFactor,
							r = t.internal.getFontSize(),
							i = t.getStringUnitWidth(e) * r / t.internal.scaleFactor,
							a = function(e) {
								var t = (e = e || {}).width || 0;
								return Object.defineProperty(this, "width", {
									get: function() {
										return t
									}
								}), this
							};
						return new a({
							width: i *= Math.round(96 * n / 72 * 1e4) / 1e4
						})
					}, d.prototype.scale = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw o.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
						var n = new c(e, 0, 0, t, 0, 0);
						this.ctx.transform = this.ctx.transform.multiply(n)
					}, d.prototype.rotate = function(e) {
						if (isNaN(e)) throw o.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
						var t = new c(Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0);
						this.ctx.transform = this.ctx.transform.multiply(t)
					}, d.prototype.translate = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw o.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
						var n = new c(1, 0, 0, 1, e, t);
						this.ctx.transform = this.ctx.transform.multiply(n)
					}, d.prototype.transform = function(e, t, n, r, i, a) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a)) throw o.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
						var s = new c(e, t, n, r, i, a);
						this.ctx.transform = this.ctx.transform.multiply(s)
					}, d.prototype.setTransform = function(e, t, n, r, i, a) {
						e = isNaN(e) ? 1 : e, t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new c(e, t, n, r, i, a)
					}, d.prototype.drawImage = function(e, t, n, r, i, a, o, s, l) {
						var f = this.pdf.getImageProperties(e),
							d = 1,
							h = 1,
							p = 1,
							_ = 1;
						void 0 !== r && void 0 !== s && (p = s / r, _ = l / i, d = f.width / r * s / r, h = f.height / i * l / i), void 0 === a && (a = t, o = n, t = 0, n = 0), void 0 !== r && void 0 === s && (s = r, l = i), void 0 === r && void 0 === s && (s = f.width, l = f.height);
						for (var m, g = this.ctx.transform.decompose(), A = L(g.rotate.shx), w = new c, E = (w = (w = (w = w.multiply(g.translate)).multiply(g.skew)).multiply(g.scale)).applyToRectangle(new u(a - t * p, o - n * _, r * d, i * h)), T = b.call(this, E), C = [], $ = 0; $ < T.length; $ += 1) - 1 === C.indexOf(T[$]) && C.push(T[$]);
						if (y(C), this.autoPaging)
							for (var k = C[0], O = C[C.length - 1], x = k; x < O + 1; x++) {
								if (this.pdf.setPage(x), 0 !== this.ctx.clip_path.length) {
									var P = this.path;
									m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = v(m, this.posX, -1 * this.pdf.internal.pageSize.height * (x - 1) + this.posY), S.call(this, "fill", !0), this.path = P
								}
								var M = JSON.parse(JSON.stringify(E));
								M = v([M], this.posX, -1 * this.pdf.internal.pageSize.height * (x - 1) + this.posY)[0], this.pdf.addImage(e, "JPEG", M.x, M.y, M.w, M.h, null, null, A)
							} else this.pdf.addImage(e, "JPEG", E.x, E.y, E.w, E.h, null, null, A)
					};
					var b = function(e, t, n) {
							var r = [];
							switch (t = t || this.pdf.internal.pageSize.width, n = n || this.pdf.internal.pageSize.height, e.type) {
								default:
								case "mt":
								case "lt":
									r.push(Math.floor((e.y + this.posY) / n) + 1);
									break;
								case "arc":
									r.push(Math.floor((e.y + this.posY - e.radius) / n) + 1), r.push(Math.floor((e.y + this.posY + e.radius) / n) + 1);
									break;
								case "qct":
									var i = D(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x, e.y);
									r.push(Math.floor(i.y / n) + 1), r.push(Math.floor((i.y + i.h) / n) + 1);
									break;
								case "bct":
									var a = B(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x2, e.y2, e.x, e.y);
									r.push(Math.floor(a.y / n) + 1), r.push(Math.floor((a.y + a.h) / n) + 1);
									break;
								case "rect":
									r.push(Math.floor((e.y + this.posY) / n) + 1), r.push(Math.floor((e.y + e.h + this.posY) / n) + 1)
							}
							for (var o = 0; o < r.length; o += 1)
								for (; this.pdf.internal.getNumberOfPages() < r[o];) g.call(this);
							return r
						},
						g = function() {
							var e = this.fillStyle,
								t = this.strokeStyle,
								n = this.font,
								r = this.lineCap,
								i = this.lineWidth,
								a = this.lineJoin;
							this.pdf.addPage(), this.fillStyle = e, this.strokeStyle = t, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = a
						},
						v = function(e, t, n) {
							for (var r = 0; r < e.length; r++) switch (e[r].type) {
								case "bct":
									e[r].x2 += t, e[r].y2 += n;
								case "qct":
									e[r].x1 += t, e[r].y1 += n;
								case "mt":
								case "lt":
								case "arc":
								default:
									e[r].x += t, e[r].y += n
							}
							return e
						},
						y = function(e) {
							return e.sort((function(e, t) {
								return e - t
							}))
						},
						A = function(e, t) {
							for (var n, r, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, u = s * this.ctx.transform.scaleX, c = this.lineJoin, l = JSON.parse(JSON.stringify(this.path)), f = JSON.parse(JSON.stringify(this.path)), d = [], h = 0; h < f.length; h++)
								if (void 0 !== f[h].x)
									for (var p = b.call(this, f[h]), _ = 0; _ < p.length; _ += 1) - 1 === d.indexOf(p[_]) && d.push(p[_]);
							for (var m = 0; m < d.length; m++)
								for (; this.pdf.internal.getNumberOfPages() < d[m];) g.call(this);
							if (y(d), this.autoPaging)
								for (var A = d[0], w = d[d.length - 1], E = A; E < w + 1; E++) {
									if (this.pdf.setPage(E), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = u, this.lineJoin = c, 0 !== this.ctx.clip_path.length) {
										var T = this.path;
										n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = v(n, this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY), S.call(this, e, !0), this.path = T
									}
									r = JSON.parse(JSON.stringify(l)), this.path = v(r, this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY), !1 !== t && 0 !== E || S.call(this, e, t), this.lineWidth = s
								} else this.lineWidth = u, S.call(this, e, t), this.lineWidth = s;
							this.path = l
						},
						S = function(e, t) {
							if (("stroke" !== e || t || !m.call(this)) && ("stroke" === e || t || !_.call(this))) {
								for (var n, r, i = [], a = this.path, o = 0; o < a.length; o++) {
									var s = a[o];
									switch (s.type) {
										case "begin":
											i.push({
												begin: !0
											});
											break;
										case "close":
											i.push({
												close: !0
											});
											break;
										case "mt":
											i.push({
												start: s,
												deltas: [],
												abs: []
											});
											break;
										case "lt":
											var u = i.length;
											if (!isNaN(a[o - 1].x) && (n = [s.x - a[o - 1].x, s.y - a[o - 1].y], u > 0))
												for (; u >= 0; u--)
													if (!0 !== i[u - 1].close && !0 !== i[u - 1].begin) {
														i[u - 1].deltas.push(n), i[u - 1].abs.push(s);
														break
													} break;
										case "bct":
											n = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y], i[i.length - 1].deltas.push(n);
											break;
										case "qct":
											var c = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x),
												l = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y),
												f = s.x + 2 / 3 * (s.x1 - s.x),
												d = s.y + 2 / 3 * (s.y1 - s.y),
												h = s.x,
												p = s.y;
											n = [c - a[o - 1].x, l - a[o - 1].y, f - a[o - 1].x, d - a[o - 1].y, h - a[o - 1].x, p - a[o - 1].y], i[i.length - 1].deltas.push(n);
											break;
										case "arc":
											i.push({
												deltas: [],
												abs: [],
												arc: !0
											}), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
									}
								}
								r = t ? null : "stroke" === e ? "stroke" : "fill";
								for (var b = 0; b < i.length; b++) {
									if (i[b].arc) {
										for (var g = i[b].abs, v = 0; v < g.length; v++) {
											var y = g[v];
											"arc" === y.type ? E.call(this, y.x, y.y, y.radius, y.startAngle, y.endAngle, y.counterclockwise, void 0, t) : O.call(this, y.x, y.y)
										}
										T.call(this, r), this.pdf.internal.out("h")
									}
									if (!i[b].arc && !0 !== i[b].close && !0 !== i[b].begin) {
										var A = i[b].start.x,
											S = i[b].start.y;
										x.call(this, i[b].deltas, A, S)
									}
								}
								r && T.call(this, r), t && C.call(this)
							}
						},
						w = function(e) {
							var t = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
								n = t * (this.pdf.internal.getLineHeightFactor() - 1);
							switch (this.ctx.textBaseline) {
								case "bottom":
									return e - n;
								case "top":
									return e + t - n;
								case "hanging":
									return e + t - 2 * n;
								case "middle":
									return e + t / 2 - n;
								case "ideographic":
									return e;
								case "alphabetic":
								default:
									return e
							}
						};
					d.prototype.createLinearGradient = function() {
						var e = function() {};
						return e.colorStops = [], e.addColorStop = function(e, t) {
							this.colorStops.push([e, t])
						}, e.getColor = function() {
							return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
						}, e.isCanvasGradient = !0, e
					}, d.prototype.createPattern = function() {
						return this.createLinearGradient()
					}, d.prototype.createRadialGradient = function() {
						return this.createLinearGradient()
					};
					var E = function(e, t, n, r, i, a, o, s) {
							for (var u = M.call(this, n, r, i, a), c = 0; c < u.length; c++) {
								var l = u[c];
								0 === c && $.call(this, l.x1 + e, l.y1 + t), P.call(this, e, t, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4)
							}
							s ? C.call(this) : T.call(this, o)
						},
						T = function(e) {
							switch (e) {
								case "stroke":
									this.pdf.internal.out("S");
									break;
								case "fill":
									this.pdf.internal.out("f")
							}
						},
						C = function() {
							this.pdf.clip(), this.pdf.discardPath()
						},
						$ = function(e, t) {
							this.pdf.internal.out(n(e) + " " + r(t) + " m")
						},
						k = function(e) {
							var t;
							switch (e.align) {
								case "right":
								case "end":
									t = "right";
									break;
								case "center":
									t = "center";
									break;
								case "left":
								case "start":
								default:
									t = "left"
							}
							var n = this.ctx.transform.applyToPoint(new s(e.x, e.y)),
								r = this.ctx.transform.decompose(),
								i = new c;
							i = (i = (i = i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);
							for (var a, o, l, f = this.pdf.getTextDimensions(e.text), d = this.ctx.transform.applyToRectangle(new u(e.x, e.y, f.w, f.h)), h = i.applyToRectangle(new u(e.x, e.y - f.h, f.w, f.h)), p = b.call(this, h), _ = [], m = 0; m < p.length; m += 1) - 1 === _.indexOf(p[m]) && _.push(p[m]);
							if (y(_), !0 === this.autoPaging)
								for (var g = _[0], A = _[_.length - 1], w = g; w < A + 1; w++) {
									if (this.pdf.setPage(w), 0 !== this.ctx.clip_path.length) {
										var E = this.path;
										a = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = v(a, this.posX, -1 * this.pdf.internal.pageSize.height * (w - 1) + this.posY), S.call(this, "fill", !0), this.path = E
									}
									var T = JSON.parse(JSON.stringify(d));
									T = v([T], this.posX, -1 * this.pdf.internal.pageSize.height * (w - 1) + this.posY)[0], e.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * e.scale), l = this.lineWidth, this.lineWidth = l * e.scale), this.pdf.text(e.text, T.x, T.y, {
										angle: e.angle,
										align: t,
										renderingMode: e.renderingMode,
										maxWidth: e.maxWidth
									}), e.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = l)
								} else e.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * e.scale), l = this.lineWidth, this.lineWidth = l * e.scale), this.pdf.text(e.text, n.x + this.posX, n.y + this.posY, {
									angle: e.angle,
									align: t,
									renderingMode: e.renderingMode,
									maxWidth: e.maxWidth
								}), e.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = l)
						},
						O = function(e, t, i, a) {
							i = i || 0, a = a || 0, this.pdf.internal.out(n(e + i) + " " + r(t + a) + " l")
						},
						x = function(e, t, n) {
							return this.pdf.lines(e, t, n, null, null)
						},
						P = function(e, n, r, o, s, u, c, l) {
							this.pdf.internal.out([t(i(r + e)), t(a(o + n)), t(i(s + e)), t(a(u + n)), t(i(c + e)), t(a(l + n)), "c"].join(" "))
						},
						M = function(e, t, n, r) {
							for (var i = 2 * Math.PI, a = Math.PI / 2; t > n;) t -= i;
							var o = Math.abs(n - t);
							o < i && r && (o = i - o);
							for (var s = [], u = r ? -1 : 1, c = t; o > 1e-5;) {
								var l = c + u * Math.min(o, a);
								s.push(I.call(this, e, c, l)), o -= Math.abs(l - c), c = l
							}
							return s
						},
						I = function(e, t, n) {
							var r = (n - t) / 2,
								i = e * Math.cos(r),
								a = e * Math.sin(r),
								o = i,
								s = -a,
								u = o * o + s * s,
								c = u + o * i + s * a,
								l = 4 / 3 * (Math.sqrt(2 * u * c) - c) / (o * a - s * i),
								f = o - l * s,
								d = s + l * o,
								h = f,
								p = -d,
								_ = r + t,
								m = Math.cos(_),
								b = Math.sin(_);
							return {
								x1: e * Math.cos(t),
								y1: e * Math.sin(t),
								x2: f * m - d * b,
								y2: f * b + d * m,
								x3: h * m - p * b,
								y3: h * b + p * m,
								x4: e * Math.cos(n),
								y4: e * Math.sin(n)
							}
						},
						L = function(e) {
							return 180 * e / Math.PI
						},
						D = function(e, t, n, r, i, a) {
							var o = e + .5 * (n - e),
								s = t + .5 * (r - t),
								c = i + .5 * (n - i),
								l = a + .5 * (r - a),
								f = Math.min(e, i, o, c),
								d = Math.max(e, i, o, c),
								h = Math.min(t, a, s, l),
								p = Math.max(t, a, s, l);
							return new u(f, h, d - f, p - h)
						},
						B = function(e, t, n, r, i, a, o, s) {
							var c, l, f, d, h, p, _, m, b, g, v, y, A, S, w = n - e,
								E = r - t,
								T = i - n,
								C = a - r,
								$ = o - i,
								k = s - a;
							for (l = 0; l < 41; l++) b = (_ = (f = e + (c = l / 40) * w) + c * ((h = n + c * T) - f)) + c * (h + c * (i + c * $ - h) - _), g = (m = (d = t + c * E) + c * ((p = r + c * C) - d)) + c * (p + c * (a + c * k - p) - m), 0 == l ? (v = b, y = g, A = b, S = g) : (v = Math.min(v, b), y = Math.min(y, g), A = Math.max(A, b), S = Math.max(S, g));
							return new u(Math.round(v), Math.round(y), Math.round(A - v), Math.round(S - y))
						}
				}(D.API),
				function(e) {
					var t = function(e) {
							var t, n, r, i, a, o, s, u, c, l;
							for (/[^\x00-\xFF]/.test(e), n = [], r = 0, i = (e += t = "\0\0\0\0".slice(e.length % 4 || 4)).length; i > r; r += 4) 0 !== (a = (e.charCodeAt(r) << 24) + (e.charCodeAt(r + 1) << 16) + (e.charCodeAt(r + 2) << 8) + e.charCodeAt(r + 3)) ? (o = (a = ((a = ((a = ((a = (a - (l = a % 85)) / 85) - (c = a % 85)) / 85) - (u = a % 85)) / 85) - (s = a % 85)) / 85) % 85, n.push(o + 33, s + 33, u + 33, c + 33, l + 33)) : n.push(122);
							return function(e, t) {
								for (var n = t; n > 0; n--) e.pop()
							}(n, t.length), String.fromCharCode.apply(String, n) + "~>"
						},
						n = function(e) {
							var t, n, r, i, a, o = String,
								s = "length",
								u = 255,
								c = "charCodeAt",
								l = "slice",
								f = "replace";
							for (e[l](-2), e = e[l](0, -2)[f](/\s/g, "")[f]("z", "!!!!!"), r = [], i = 0, a = (e += t = "uuuuu" [l](e[s] % 5 || 5))[s]; a > i; i += 5) n = 52200625 * (e[c](i) - 33) + 614125 * (e[c](i + 1) - 33) + 7225 * (e[c](i + 2) - 33) + 85 * (e[c](i + 3) - 33) + (e[c](i + 4) - 33), r.push(u & n >> 24, u & n >> 16, u & n >> 8, u & n);
							return function(e, t) {
								for (var n = t; n > 0; n--) e.pop()
							}(r, t[s]), o.fromCharCode.apply(o, r)
						},
						i = function(e) {
							var t = new RegExp(/^([0-9A-Fa-f]{2})+$/);
							if (-1 !== (e = e.replace(/\s/g, "")).indexOf(">") && (e = e.substr(0, e.indexOf(">"))), e.length % 2 && (e += "0"), !1 === t.test(e)) return "";
							for (var n = "", r = 0; r < e.length; r += 2) n += String.fromCharCode("0x" + (e[r] + e[r + 1]));
							return n
						},
						a = function(e) {
							for (var t = new Uint8Array(e.length), n = e.length; n--;) t[n] = e.charCodeAt(n);
							return (t = Object(r.b)(t)).reduce((function(e, t) {
								return e + String.fromCharCode(t)
							}), "")
						};
					e.processDataByFilters = function(e, r) {
						var o = 0,
							s = e || "",
							u = [];
						for ("string" == typeof(r = r || []) && (r = [r]), o = 0; o < r.length; o += 1) switch (r[o]) {
							case "ASCII85Decode":
							case "/ASCII85Decode":
								s = n(s), u.push("/ASCII85Encode");
								break;
							case "ASCII85Encode":
							case "/ASCII85Encode":
								s = t(s), u.push("/ASCII85Decode");
								break;
							case "ASCIIHexDecode":
							case "/ASCIIHexDecode":
								s = i(s), u.push("/ASCIIHexEncode");
								break;
							case "ASCIIHexEncode":
							case "/ASCIIHexEncode":
								s = s.split("").map((function(e) {
									return ("0" + e.charCodeAt().toString(16)).slice(-2)
								})).join("") + ">", u.push("/ASCIIHexDecode");
								break;
							case "FlateEncode":
							case "/FlateEncode":
								s = a(s), u.push("/FlateDecode");
								break;
							default:
								throw new Error('The filter: "' + r[o] + '" is not implemented')
						}
						return {
							data: s,
							reverseChain: u.reverse().join(" ")
						}
					}
				}(D.API),
				function(e) {
					e.loadFile = function(e, t, n) {
						return function(e, t, n) {
							t = !1 !== t, n = "function" == typeof n ? n : function() {};
							var r = void 0;
							try {
								r = function(e, t, n) {
									var r = new XMLHttpRequest,
										i = 0,
										a = function(e) {
											var t = e.length,
												n = [],
												r = String.fromCharCode;
											for (i = 0; i < t; i += 1) n.push(r(255 & e.charCodeAt(i)));
											return n.join("")
										};
									if (r.open("GET", e, !t), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === t && (r.onload = function() {
											200 === r.status ? n(a(this.responseText)) : n(void 0)
										}), r.send(null), t && 200 === r.status) return a(r.responseText)
								}(e, t, n)
							} catch (e) {}
							return r
						}(e, t, n)
					}, e.loadImageFile = e.loadFile
				}(D.API),
				function(e) {
					function t() {
						return (i.html2canvas ? Promise.resolve(i.html2canvas) : Promise.resolve().then(n.t.bind(null, "c0e9", 7))).catch((function(e) {
							return Promise.reject(new Error("Could not load html2canvas: " + e))
						})).then((function(e) {
							return e.default ? e.default : e
						}))
					}

					function r() {
						return (i.DOMPurify ? Promise.resolve(i.DOMPurify) : n.e("chunk-2d216214").then(n.t.bind(null, "c0c4", 7))).catch((function(e) {
							return Promise.reject(new Error("Could not load dompurify: " + e))
						})).then((function(e) {
							return e.default ? e.default : e
						}))
					}
					var a = function(e) {
							var t = typeof e;
							return "undefined" === t ? "undefined" : "string" === t || e instanceof String ? "string" : "number" === t || e instanceof Number ? "number" : "function" === t || e instanceof Function ? "function" : e && e.constructor === Array ? "array" : e && 1 === e.nodeType ? "element" : "object" === t ? "object" : "unknown"
						},
						o = function(e, t) {
							var n = document.createElement(e);
							for (var r in t.className && (n.className = t.className), t.innerHTML && t.dompurify && (n.innerHTML = t.dompurify.sanitize(t.innerHTML)), t.style) n.style[r] = t.style[r];
							return n
						},
						s = function(e, t) {
							for (var n = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), r = e.firstChild; r; r = r.nextSibling) !0 !== t && 1 === r.nodeType && "SCRIPT" === r.nodeName || n.appendChild(s(r, t));
							return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (n.width = e.width, n.height = e.height, n.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (n.value = e.value), n.addEventListener("load", (function() {
								n.scrollTop = e.scrollTop, n.scrollLeft = e.scrollLeft
							}), !0)), n
						},
						u = function e(t) {
							var n = Object.assign(e.convert(Promise.resolve()), JSON.parse(JSON.stringify(e.template))),
								r = e.convert(Promise.resolve(), n);
							return (r = r.setProgress(1, e, 1, [e])).set(t)
						};
					(u.prototype = Object.create(Promise.prototype)).constructor = u, u.convert = function(e, t) {
						return e.__proto__ = t || u.prototype, e
					}, u.template = {
						prop: {
							src: null,
							container: null,
							overlay: null,
							canvas: null,
							img: null,
							pdf: null,
							pageSize: null,
							callback: function() {}
						},
						progress: {
							val: 0,
							state: null,
							n: 0,
							stack: []
						},
						opt: {
							filename: "file.pdf",
							margin: [0, 0, 0, 0],
							enableLinks: !0,
							x: 0,
							y: 0,
							html2canvas: {},
							jsPDF: {},
							backgroundColor: "transparent"
						}
					}, u.prototype.from = function(e, t) {
						return this.then((function() {
							switch (t = t || function(e) {
								switch (a(e)) {
									case "string":
										return "string";
									case "element":
										return "canvas" === e.nodeName.toLowerCase() ? "canvas" : "element";
									default:
										return "unknown"
								}
							}(e)) {
								case "string":
									return this.then(r).then((function(t) {
										return this.set({
											src: o("div", {
												innerHTML: e,
												dompurify: t
											})
										})
									}));
								case "element":
									return this.set({
										src: e
									});
								case "canvas":
									return this.set({
										canvas: e
									});
								case "img":
									return this.set({
										img: e
									});
								default:
									return this.error("Unknown source type.")
							}
						}))
					}, u.prototype.to = function(e) {
						switch (e) {
							case "container":
								return this.toContainer();
							case "canvas":
								return this.toCanvas();
							case "img":
								return this.toImg();
							case "pdf":
								return this.toPdf();
							default:
								return this.error("Invalid target.")
						}
					}, u.prototype.toContainer = function() {
						return this.thenList([function() {
							return this.prop.src || this.error("Cannot duplicate - no source HTML.")
						}, function() {
							return this.prop.pageSize || this.setPageSize()
						}]).then((function() {
							var e = {
									position: "relative",
									display: "inline-block",
									width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
									left: 0,
									right: 0,
									top: 0,
									margin: "auto",
									backgroundColor: this.opt.backgroundColor
								},
								t = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
							"BODY" === t.tagName && (e.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
								className: "html2pdf__overlay",
								style: {
									position: "fixed",
									overflow: "hidden",
									zIndex: 1e3,
									left: "-100000px",
									right: 0,
									bottom: 0,
									top: 0
								}
							}), this.prop.container = o("div", {
								className: "html2pdf__container",
								style: e
							}), this.prop.container.appendChild(t), this.prop.container.firstChild.appendChild(o("div", {
								style: {
									clear: "both",
									border: "0 none transparent",
									margin: 0,
									padding: 0,
									height: 0
								}
							})), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
						}))
					}, u.prototype.toCanvas = function() {
						var e = [function() {
							return document.body.contains(this.prop.container) || this.toContainer()
						}];
						return this.thenList(e).then(t).then((function(e) {
							var t = Object.assign({}, this.opt.html2canvas);
							return delete t.onrendered, e(this.prop.container, t)
						})).then((function(e) {
							(this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay)
						}))
					}, u.prototype.toContext2d = function() {
						var e = [function() {
							return document.body.contains(this.prop.container) || this.toContainer()
						}];
						return this.thenList(e).then(t).then((function(e) {
							var t = this.opt.jsPDF,
								n = this.opt.fontFaces,
								r = Object.assign({
									async: !0,
									allowTaint: !0,
									scale: 1,
									scrollX: this.opt.scrollX || 0,
									scrollY: this.opt.scrollY || 0,
									backgroundColor: "#ffffff",
									imageTimeout: 15e3,
									logging: !0,
									proxy: null,
									removeContainer: !0,
									foreignObjectRendering: !1,
									useCORS: !1
								}, this.opt.html2canvas);
							if (delete r.onrendered, t.context2d.autoPaging = !0, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, t.context2d.fontFaces = n, n)
								for (var i = 0; i < n.length; ++i) {
									var a = n[i],
										o = a.src.find((function(e) {
											return "truetype" === e.format
										}));
									o && t.addFont(o.url, a.ref.name, a.ref.style)
								}
							return r.windowHeight = r.windowHeight || 0, r.windowHeight = 0 == r.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : r.windowHeight, e(this.prop.container, r)
						})).then((function(e) {
							(this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay)
						}))
					}, u.prototype.toImg = function() {
						return this.thenList([function() {
							return this.prop.canvas || this.toCanvas()
						}]).then((function() {
							var e = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
							this.prop.img = document.createElement("img"), this.prop.img.src = e
						}))
					}, u.prototype.toPdf = function() {
						return this.thenList([function() {
							return this.toContext2d()
						}]).then((function() {
							this.prop.pdf = this.prop.pdf || this.opt.jsPDF
						}))
					}, u.prototype.output = function(e, t, n) {
						return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(e, t) : this.outputPdf(e, t)
					}, u.prototype.outputPdf = function(e, t) {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).then((function() {
							return this.prop.pdf.output(e, t)
						}))
					}, u.prototype.outputImg = function(e) {
						return this.thenList([function() {
							return this.prop.img || this.toImg()
						}]).then((function() {
							switch (e) {
								case void 0:
								case "img":
									return this.prop.img;
								case "datauristring":
								case "dataurlstring":
									return this.prop.img.src;
								case "datauri":
								case "dataurl":
									return document.location.href = this.prop.img.src;
								default:
									throw 'Image output type "' + e + '" is not supported.'
							}
						}))
					}, u.prototype.save = function(e) {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).set(e ? {
							filename: e
						} : null).then((function() {
							this.prop.pdf.save(this.opt.filename)
						}))
					}, u.prototype.doCallback = function() {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).then((function() {
							this.prop.callback(this.prop.pdf)
						}))
					}, u.prototype.set = function(e) {
						if ("object" !== a(e)) return this;
						var t = Object.keys(e || {}).map((function(t) {
							if (t in u.template.prop) return function() {
								this.prop[t] = e[t]
							};
							switch (t) {
								case "margin":
									return this.setMargin.bind(this, e.margin);
								case "jsPDF":
									return function() {
										return this.opt.jsPDF = e.jsPDF, this.setPageSize()
									};
								case "pageSize":
									return this.setPageSize.bind(this, e.pageSize);
								default:
									return function() {
										this.opt[t] = e[t]
									}
							}
						}), this);
						return this.then((function() {
							return this.thenList(t)
						}))
					}, u.prototype.get = function(e, t) {
						return this.then((function() {
							var n = e in u.template.prop ? this.prop[e] : this.opt[e];
							return t ? t(n) : n
						}))
					}, u.prototype.setMargin = function(e) {
						return this.then((function() {
							switch (a(e)) {
								case "number":
									e = [e, e, e, e];
								case "array":
									if (2 === e.length && (e = [e[0], e[1], e[0], e[1]]), 4 === e.length) break;
								default:
									return this.error("Invalid margin array.")
							}
							this.opt.margin = e
						})).then(this.setPageSize)
					}, u.prototype.setPageSize = function(e) {
						function t(e, t) {
							return Math.floor(e * t / 72 * 96)
						}
						return this.then((function() {
							(e = e || D.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (e.inner = {
								width: e.width - this.opt.margin[1] - this.opt.margin[3],
								height: e.height - this.opt.margin[0] - this.opt.margin[2]
							}, e.inner.px = {
								width: t(e.inner.width, e.k),
								height: t(e.inner.height, e.k)
							}, e.inner.ratio = e.inner.height / e.inner.width), this.prop.pageSize = e
						}))
					}, u.prototype.setProgress = function(e, t, n, r) {
						return null != e && (this.progress.val = e), null != t && (this.progress.state = t), null != n && (this.progress.n = n), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this
					}, u.prototype.updateProgress = function(e, t, n, r) {
						return this.setProgress(e ? this.progress.val + e : null, t || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null)
					}, u.prototype.then = function(e, t) {
						var n = this;
						return this.thenCore(e, t, (function(e, t) {
							return n.updateProgress(null, null, 1, [e]), Promise.prototype.then.call(this, (function(t) {
								return n.updateProgress(null, e), t
							})).then(e, t).then((function(e) {
								return n.updateProgress(1), e
							}))
						}))
					}, u.prototype.thenCore = function(e, t, n) {
						n = n || Promise.prototype.then, e && (e = e.bind(this)), t && (t = t.bind(this));
						var r = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : u.convert(Object.assign({}, this), Promise.prototype),
							i = n.call(r, e, t);
						return u.convert(i, this.__proto__)
					}, u.prototype.thenExternal = function(e, t) {
						return Promise.prototype.then.call(this, e, t)
					}, u.prototype.thenList = function(e) {
						var t = this;
						return e.forEach((function(e) {
							t = t.thenCore(e)
						})), t
					}, u.prototype.catch = function(e) {
						e && (e = e.bind(this));
						var t = Promise.prototype.catch.call(this, e);
						return u.convert(t, this)
					}, u.prototype.catchExternal = function(e) {
						return Promise.prototype.catch.call(this, e)
					}, u.prototype.error = function(e) {
						return this.then((function() {
							throw new Error(e)
						}))
					}, u.prototype.using = u.prototype.set, u.prototype.saveAs = u.prototype.save, u.prototype.export = u.prototype.output, u.prototype.run = u.prototype.then, D.getPageSize = function(e, t, n) {
						if ("object" == typeof e) {
							var r = e;
							e = r.orientation, t = r.unit || t, n = r.format || n
						}
						t = t || "mm", n = n || "a4", e = ("" + (e || "P")).toLowerCase();
						var i, a = ("" + n).toLowerCase(),
							o = {
								a0: [2383.94, 3370.39],
								a1: [1683.78, 2383.94],
								a2: [1190.55, 1683.78],
								a3: [841.89, 1190.55],
								a4: [595.28, 841.89],
								a5: [419.53, 595.28],
								a6: [297.64, 419.53],
								a7: [209.76, 297.64],
								a8: [147.4, 209.76],
								a9: [104.88, 147.4],
								a10: [73.7, 104.88],
								b0: [2834.65, 4008.19],
								b1: [2004.09, 2834.65],
								b2: [1417.32, 2004.09],
								b3: [1000.63, 1417.32],
								b4: [708.66, 1000.63],
								b5: [498.9, 708.66],
								b6: [354.33, 498.9],
								b7: [249.45, 354.33],
								b8: [175.75, 249.45],
								b9: [124.72, 175.75],
								b10: [87.87, 124.72],
								c0: [2599.37, 3676.54],
								c1: [1836.85, 2599.37],
								c2: [1298.27, 1836.85],
								c3: [918.43, 1298.27],
								c4: [649.13, 918.43],
								c5: [459.21, 649.13],
								c6: [323.15, 459.21],
								c7: [229.61, 323.15],
								c8: [161.57, 229.61],
								c9: [113.39, 161.57],
								c10: [79.37, 113.39],
								dl: [311.81, 623.62],
								letter: [612, 792],
								"government-letter": [576, 756],
								legal: [612, 1008],
								"junior-legal": [576, 360],
								ledger: [1224, 792],
								tabloid: [792, 1224],
								"credit-card": [153, 243]
							};
						switch (t) {
							case "pt":
								i = 1;
								break;
							case "mm":
								i = 72 / 25.4;
								break;
							case "cm":
								i = 72 / 2.54;
								break;
							case "in":
								i = 72;
								break;
							case "px":
								i = .75;
								break;
							case "pc":
							case "em":
								i = 12;
								break;
							case "ex":
								i = 6;
								break;
							default:
								throw "Invalid unit: " + t
						}
						var s, u = 0,
							c = 0;
						if (o.hasOwnProperty(a)) u = o[a][1] / i, c = o[a][0] / i;
						else try {
							u = n[1], c = n[0]
						} catch (e) {
							throw new Error("Invalid format: " + n)
						}
						if ("p" === e || "portrait" === e) e = "p", c > u && (s = c, c = u, u = s);
						else {
							if ("l" !== e && "landscape" !== e) throw "Invalid orientation: " + e;
							e = "l", u > c && (s = c, c = u, u = s)
						}
						return {
							width: c,
							height: u,
							unit: t,
							k: i,
							orientation: e
						}
					}, e.html = function(e, t) {
						(t = t || {}).callback = t.callback || function() {}, t.html2canvas = t.html2canvas || {}, t.html2canvas.canvas = t.html2canvas.canvas || this.canvas, t.jsPDF = t.jsPDF || this, t.fontFaces = t.fontFaces ? t.fontFaces.map(ke) : null;
						var n = new u(t);
						return t.worker ? n : n.from(e).doCallback()
					}
				}(D.API), D.API.addJS = function(e) {
						return Re = e, this.internal.events.subscribe("postPutResources", (function() {
							Be = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Be + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Ne = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + Re + ")"), this.internal.out(">>"), this.internal.out("endobj")
						})), this.internal.events.subscribe("putCatalog", (function() {
							void 0 !== Be && void 0 !== Ne && this.internal.out("/Names <</JavaScript " + Be + " 0 R>>")
						})), this
					},
					function(e) {
						var t;
						e.events.push(["postPutResources", function() {
							var e = this,
								n = /^(\d+) 0 obj$/;
							if (this.outline.root.children.length > 0)
								for (var r = e.outline.render().split(/\r\n/), i = 0; i < r.length; i++) {
									var a = r[i],
										o = n.exec(a);
									if (null != o) {
										var s = o[1];
										e.internal.newObjectDeferredBegin(s, !1)
									}
									e.internal.write(a)
								}
							if (this.outline.createNamedDestinations) {
								var u = this.internal.pages.length,
									c = [];
								for (i = 0; i < u; i++) {
									var l = e.internal.newObject();
									c.push(l);
									var f = e.internal.getPageInfo(i + 1);
									e.internal.write("<< /D[" + f.objId + " 0 R /XYZ null null null]>> endobj")
								}
								var d = e.internal.newObject();
								for (e.internal.write("<< /Names [ "), i = 0; i < c.length; i++) e.internal.write("(page_" + (i + 1) + ")" + c[i] + " 0 R");
								e.internal.write(" ] >>", "endobj"), t = e.internal.newObject(), e.internal.write("<< /Dests " + d + " 0 R"), e.internal.write(">>", "endobj")
							}
						}]), e.events.push(["putCatalog", function() {
							this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"))
						}]), e.events.push(["initialized", function() {
							var e = this;
							e.outline = {
								createNamedDestinations: !1,
								root: {
									children: []
								}
							}, e.outline.add = function(e, t, n) {
								var r = {
									title: t,
									options: n,
									children: []
								};
								return null == e && (e = this.root), e.children.push(r), r
							}, e.outline.render = function() {
								return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
							}, e.outline.genIds_r = function(t) {
								t.id = e.internal.newObjectDeferred();
								for (var n = 0; n < t.children.length; n++) this.genIds_r(t.children[n])
							}, e.outline.renderRoot = function(e) {
								this.objStart(e), this.line("/Type /Outlines"), e.children.length > 0 && (this.line("/First " + this.makeRef(e.children[0])), this.line("/Last " + this.makeRef(e.children[e.children.length - 1]))), this.line("/Count " + this.count_r({
									count: 0
								}, e)), this.objEnd()
							}, e.outline.renderItems = function(t) {
								for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < t.children.length; r++) {
									var i = t.children[r];
									this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(t)), r > 0 && this.line("/Prev " + this.makeRef(t.children[r - 1])), r < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
									var a = this.count = this.count_r({
										count: 0
									}, i);
									if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
										var o = e.internal.getPageInfo(i.options.pageNumber);
										this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + n(0) + " 0]")
									}
									this.objEnd()
								}
								for (var s = 0; s < t.children.length; s++) this.renderItems(t.children[s])
							}, e.outline.line = function(e) {
								this.ctx.val += e + "\r\n"
							}, e.outline.makeRef = function(e) {
								return e.id + " 0 R"
							}, e.outline.makeString = function(t) {
								return "(" + e.internal.pdfEscape(t) + ")"
							}, e.outline.objStart = function(e) {
								this.ctx.val += "\r\n" + e.id + " 0 obj\r\n<<\r\n"
							}, e.outline.objEnd = function() {
								this.ctx.val += ">> \r\nendobj\r\n"
							}, e.outline.count_r = function(e, t) {
								for (var n = 0; n < t.children.length; n++) e.count++, this.count_r(e, t.children[n]);
								return e.count
							}
						}])
					}(D.API),
					function(e) {
						var t = [192, 193, 194, 195, 196, 197, 198, 199];
						e.processJPEG = function(e, n, r, i, a, o) {
							var s, u = this.decode.DCT_DECODE,
								c = null;
							if ("string" == typeof e || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
								switch (e = a || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, (s = function(e) {
									for (var n, r = 256 * e.charCodeAt(4) + e.charCodeAt(5), i = e.length, a = {
											width: 0,
											height: 0,
											numcomponents: 1
										}, o = 4; o < i; o += 2) {
										if (o += r, -1 !== t.indexOf(e.charCodeAt(o + 1))) {
											n = 256 * e.charCodeAt(o + 5) + e.charCodeAt(o + 6), a = {
												width: 256 * e.charCodeAt(o + 7) + e.charCodeAt(o + 8),
												height: n,
												numcomponents: e.charCodeAt(o + 9)
											};
											break
										}
										r = 256 * e.charCodeAt(o + 2) + e.charCodeAt(o + 3)
									}
									return a
								}(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e)).numcomponents) {
									case 1:
										o = this.color_spaces.DEVICE_GRAY;
										break;
									case 4:
										o = this.color_spaces.DEVICE_CMYK;
										break;
									case 3:
										o = this.color_spaces.DEVICE_RGB
								}
								c = {
									data: e,
									width: s.width,
									height: s.height,
									colorSpace: o,
									bitsPerComponent: 8,
									filter: u,
									index: n,
									alias: r
								}
							}
							return c
						}
					}(D.API);
				var Ue, je, He, Ye, Ve, ze = function() {
					var e, t, n;

					function a(e) {
						var t, n, r, i, a, o, s, u, c, l, f, d, h, p;
						for (this.data = e, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
							switch (t = this.readUInt32(), c = function() {
								var e, t;
								for (t = [], e = 0; e < 4; ++e) t.push(String.fromCharCode(this.data[this.pos++]));
								return t
							}.call(this).join("")) {
								case "IHDR":
									this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
									break;
								case "acTL":
									this.animation = {
										numFrames: this.readUInt32(),
										numPlays: this.readUInt32() || 1 / 0,
										frames: []
									};
									break;
								case "PLTE":
									this.palette = this.read(t);
									break;
								case "fcTL":
									o && this.animation.frames.push(o), this.pos += 4, o = {
										width: this.readUInt32(),
										height: this.readUInt32(),
										xOffset: this.readUInt32(),
										yOffset: this.readUInt32()
									}, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
									break;
								case "IDAT":
								case "fdAT":
									for ("fdAT" === c && (this.pos += 4, t -= 4), e = (null != o ? o.data : void 0) || this.imgData, d = 0; 0 <= t ? d < t : d > t; 0 <= t ? ++d : --d) e.push(this.data[this.pos++]);
									break;
								case "tRNS":
									switch (this.transparency = {}, this.colorType) {
										case 3:
											if (r = this.palette.length / 3, this.transparency.indexed = this.read(t), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
											if ((l = r - this.transparency.indexed.length) > 0)
												for (h = 0; 0 <= l ? h < l : h > l; 0 <= l ? ++h : --h) this.transparency.indexed.push(255);
											break;
										case 0:
											this.transparency.grayscale = this.read(t)[0];
											break;
										case 2:
											this.transparency.rgb = this.read(t)
									}
									break;
								case "tEXt":
									s = (f = this.read(t)).indexOf(0), u = String.fromCharCode.apply(String, f.slice(0, s)), this.text[u] = String.fromCharCode.apply(String, f.slice(s + 1));
									break;
								case "IEND":
									return o && this.animation.frames.push(o), this.colors = function() {
										switch (this.colorType) {
											case 0:
											case 3:
											case 4:
												return 1;
											case 2:
											case 6:
												return 3
										}
									}.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function() {
										switch (this.colors) {
											case 1:
												return "DeviceGray";
											case 3:
												return "DeviceRGB"
										}
									}.call(this), void(this.imgData = new Uint8Array(this.imgData));
								default:
									this.pos += t
							}
							if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
						}
					}
					a.prototype.read = function(e) {
						var t, n;
						for (n = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) n.push(this.data[this.pos++]);
						return n
					}, a.prototype.readUInt32 = function() {
						return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
					}, a.prototype.readUInt16 = function() {
						return this.data[this.pos++] << 8 | this.data[this.pos++]
					}, a.prototype.decodePixels = function(e) {
						var t = this.pixelBitlength / 8,
							n = new Uint8Array(this.width * this.height * t),
							i = 0,
							a = this;
						if (null == e && (e = this.imgData), 0 === e.length) return new Uint8Array(0);

						function o(r, o, s, u) {
							var c, l, f, d, h, p, _, m, b, g, v, y, A, S, w, E, T, C, $, k, O, x = Math.ceil((a.width - r) / s),
								P = Math.ceil((a.height - o) / u),
								M = a.width == x && a.height == P;
							for (S = t * x, y = M ? n : new Uint8Array(S * P), p = e.length, A = 0, l = 0; A < P && i < p;) {
								switch (e[i++]) {
									case 0:
										for (d = T = 0; T < S; d = T += 1) y[l++] = e[i++];
										break;
									case 1:
										for (d = C = 0; C < S; d = C += 1) c = e[i++], h = d < t ? 0 : y[l - t], y[l++] = (c + h) % 256;
										break;
									case 2:
										for (d = $ = 0; $ < S; d = $ += 1) c = e[i++], f = (d - d % t) / t, w = A && y[(A - 1) * S + f * t + d % t], y[l++] = (w + c) % 256;
										break;
									case 3:
										for (d = k = 0; k < S; d = k += 1) c = e[i++], f = (d - d % t) / t, h = d < t ? 0 : y[l - t], w = A && y[(A - 1) * S + f * t + d % t], y[l++] = (c + Math.floor((h + w) / 2)) % 256;
										break;
									case 4:
										for (d = O = 0; O < S; d = O += 1) c = e[i++], f = (d - d % t) / t, h = d < t ? 0 : y[l - t], 0 === A ? w = E = 0 : (w = y[(A - 1) * S + f * t + d % t], E = f && y[(A - 1) * S + (f - 1) * t + d % t]), _ = h + w - E, m = Math.abs(_ - h), g = Math.abs(_ - w), v = Math.abs(_ - E), b = m <= g && m <= v ? h : g <= v ? w : E, y[l++] = (c + b) % 256;
										break;
									default:
										throw new Error("Invalid filter algorithm: " + e[i - 1])
								}
								if (!M) {
									var I = ((o + A * u) * a.width + r) * t,
										L = A * S;
									for (d = 0; d < x; d += 1) {
										for (var D = 0; D < t; D += 1) n[I++] = y[L++];
										I += (s - 1) * t
									}
								}
								A++
							}
						}
						return e = Object(r.a)(e), 1 == a.interlaceMethod ? (o(0, 0, 8, 8), o(4, 0, 8, 8), o(0, 4, 4, 8), o(2, 0, 4, 4), o(0, 2, 2, 4), o(1, 0, 2, 2), o(0, 1, 1, 2)) : o(0, 0, 1, 1), n
					}, a.prototype.decodePalette = function() {
						var e, t, n, r, i, a, o, s, u;
						for (n = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + n.length), r = 0, e = 0, t = o = 0, s = n.length; o < s; t = o += 3) i[r++] = n[t], i[r++] = n[t + 1], i[r++] = n[t + 2], i[r++] = null != (u = a[e++]) ? u : 255;
						return i
					}, a.prototype.copyToImageData = function(e, t) {
						var n, r, i, a, o, s, u, c, l, f, d;
						if (r = this.colors, l = null, n = this.hasAlphaChannel, this.palette.length && (l = null != (d = this._decodedPalette) ? d : this._decodedPalette = this.decodePalette(), r = 4, n = !0), c = (i = e.data || e).length, o = l || t, a = s = 0, 1 === r)
							for (; a < c;) u = l ? 4 * t[a / 4] : s, f = o[u++], i[a++] = f, i[a++] = f, i[a++] = f, i[a++] = n ? o[u++] : 255, s = u;
						else
							for (; a < c;) u = l ? 4 * t[a / 4] : s, i[a++] = o[u++], i[a++] = o[u++], i[a++] = o[u++], i[a++] = n ? o[u++] : 255, s = u
					}, a.prototype.decode = function() {
						var e;
						return e = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e, this.decodePixels()), e
					};
					var o = function() {
						if ("[object Window]" === Object.prototype.toString.call(i)) {
							try {
								t = i.document.createElement("canvas"), n = t.getContext("2d")
							} catch (e) {
								return !1
							}
							return !0
						}
						return !1
					};
					return o(), e = function(e) {
						var r;
						if (!0 === o()) return n.width = e.width, n.height = e.height, n.clearRect(0, 0, e.width, e.height), n.putImageData(e, 0, 0), (r = new Image).src = t.toDataURL(), r;
						throw new Error("This method requires a Browser with Canvas-capability.")
					}, a.prototype.decodeFrames = function(t) {
						var n, r, i, a, o, s, u, c;
						if (this.animation) {
							for (c = [], r = o = 0, s = (u = this.animation.frames).length; o < s; r = ++o) n = u[r], i = t.createImageData(n.width, n.height), a = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, a), n.imageData = i, c.push(n.image = e(i));
							return c
						}
					}, a.prototype.renderFrame = function(e, t) {
						var n, r, i;
						return n = (r = this.animation.frames)[t], i = r[t - 1], 0 === t && e.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? e.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && e.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && e.clearRect(n.xOffset, n.yOffset, n.width, n.height), e.drawImage(n.image, n.xOffset, n.yOffset)
					}, a.prototype.animate = function(e) {
						var t, n, r, i, a, o, s = this;
						return n = 0, o = this.animation, i = o.numFrames, r = o.frames, a = o.numPlays, (t = function() {
							var o, u;
							if (o = n++ % i, u = r[o], s.renderFrame(e, o), i > 1 && n / i < a) return s.animation._timeout = setTimeout(t, u.delay)
						})()
					}, a.prototype.stopAnimation = function() {
						var e;
						return clearTimeout(null != (e = this.animation) ? e._timeout : void 0)
					}, a.prototype.render = function(e) {
						var t, n;
						return e._png && e._png.stopAnimation(), e._png = this, e.width = this.width, e.height = this.height, t = e.getContext("2d"), this.animation ? (this.decodeFrames(t), this.animate(t)) : (n = t.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), t.putImageData(n, 0, 0))
					}, a
				}();

				function Qe(e) {
					var t = 0;
					if (71 !== e[t++] || 73 !== e[t++] || 70 !== e[t++] || 56 !== e[t++] || 56 != (e[t++] + 1 & 253) || 97 !== e[t++]) throw new Error("Invalid GIF 87a/89a header.");
					var n = e[t++] | e[t++] << 8,
						r = e[t++] | e[t++] << 8,
						i = e[t++],
						a = i >> 7,
						o = 1 << 1 + (7 & i);
					e[t++], e[t++];
					var s = null,
						u = null;
					a && (s = t, u = o, t += 3 * o);
					var c = !0,
						l = [],
						f = 0,
						d = null,
						h = 0,
						p = null;
					for (this.width = n, this.height = r; c && t < e.length;) switch (e[t++]) {
						case 33:
							switch (e[t++]) {
								case 255:
									if (11 !== e[t] || 78 == e[t + 1] && 69 == e[t + 2] && 84 == e[t + 3] && 83 == e[t + 4] && 67 == e[t + 5] && 65 == e[t + 6] && 80 == e[t + 7] && 69 == e[t + 8] && 50 == e[t + 9] && 46 == e[t + 10] && 48 == e[t + 11] && 3 == e[t + 12] && 1 == e[t + 13] && 0 == e[t + 16]) t += 14, p = e[t++] | e[t++] << 8, t++;
									else
										for (t += 12;;) {
											if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
											if (0 === $) break;
											t += $
										}
									break;
								case 249:
									if (4 !== e[t++] || 0 !== e[t + 4]) throw new Error("Invalid graphics extension block.");
									var _ = e[t++];
									f = e[t++] | e[t++] << 8, d = e[t++], 0 == (1 & _) && (d = null), h = _ >> 2 & 7, t++;
									break;
								case 254:
									for (;;) {
										if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
										if (0 === $) break;
										t += $
									}
									break;
								default:
									throw new Error("Unknown graphic control label: 0x" + e[t - 1].toString(16))
							}
							break;
						case 44:
							var m = e[t++] | e[t++] << 8,
								b = e[t++] | e[t++] << 8,
								g = e[t++] | e[t++] << 8,
								v = e[t++] | e[t++] << 8,
								y = e[t++],
								A = y >> 6 & 1,
								S = 1 << 1 + (7 & y),
								w = s,
								E = u,
								T = !1;
							y >> 7 && (T = !0, w = t, E = S, t += 3 * S);
							var C = t;
							for (t++;;) {
								var $;
								if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
								if (0 === $) break;
								t += $
							}
							l.push({
								x: m,
								y: b,
								width: g,
								height: v,
								has_local_palette: T,
								palette_offset: w,
								palette_size: E,
								data_offset: C,
								data_length: t - C,
								transparent_index: d,
								interlaced: !!A,
								delay: f,
								disposal: h
							});
							break;
						case 59:
							c = !1;
							break;
						default:
							throw new Error("Unknown gif block: 0x" + e[t - 1].toString(16))
					}
					this.numFrames = function() {
						return l.length
					}, this.loopCount = function() {
						return p
					}, this.frameInfo = function(e) {
						if (e < 0 || e >= l.length) throw new Error("Frame index out of range.");
						return l[e]
					}, this.decodeAndBlitFrameBGRA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						Ge(e, i.data_offset, o, a);
						var s = i.palette_offset,
							u = i.transparent_index;
						null === u && (u = 256);
						var c = i.width,
							l = n - c,
							f = c,
							d = 4 * (i.y * n + i.x),
							h = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							_ = 4 * l;
						!0 === i.interlaced && (_ += 4 * n * 7);
						for (var m = 8, b = 0, g = o.length; b < g; ++b) {
							var v = o[b];
							if (0 === f && (f = c, (p += _) >= h && (_ = 4 * l + 4 * n * (m - 1), p = d + (c + l) * (m << 1), m >>= 1)), v === u) p += 4;
							else {
								var y = e[s + 3 * v],
									A = e[s + 3 * v + 1],
									S = e[s + 3 * v + 2];
								r[p++] = S, r[p++] = A, r[p++] = y, r[p++] = 255
							}--f
						}
					}, this.decodeAndBlitFrameRGBA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						Ge(e, i.data_offset, o, a);
						var s = i.palette_offset,
							u = i.transparent_index;
						null === u && (u = 256);
						var c = i.width,
							l = n - c,
							f = c,
							d = 4 * (i.y * n + i.x),
							h = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							_ = 4 * l;
						!0 === i.interlaced && (_ += 4 * n * 7);
						for (var m = 8, b = 0, g = o.length; b < g; ++b) {
							var v = o[b];
							if (0 === f && (f = c, (p += _) >= h && (_ = 4 * l + 4 * n * (m - 1), p = d + (c + l) * (m << 1), m >>= 1)), v === u) p += 4;
							else {
								var y = e[s + 3 * v],
									A = e[s + 3 * v + 1],
									S = e[s + 3 * v + 2];
								r[p++] = y, r[p++] = A, r[p++] = S, r[p++] = 255
							}--f
						}
					}
				}

				function Ge(e, t, n, r) {
					for (var i = e[t++], a = 1 << i, s = a + 1, u = s + 1, c = i + 1, l = (1 << c) - 1, f = 0, d = 0, h = 0, p = e[t++], _ = new Int32Array(4096), m = null;;) {
						for (; f < 16 && 0 !== p;) d |= e[t++] << f, f += 8, 1 === p ? p = e[t++] : --p;
						if (f < c) break;
						var b = d & l;
						if (d >>= c, f -= c, b !== a) {
							if (b === s) break;
							for (var g = b < u ? b : m, v = 0, y = g; y > a;) y = _[y] >> 8, ++v;
							var A = y;
							if (h + v + (g !== b ? 1 : 0) > r) return void o.log("Warning, gif stream longer than expected.");
							n[h++] = A;
							var S = h += v;
							for (g !== b && (n[h++] = A), y = g; v--;) y = _[y], n[--S] = 255 & y, y >>= 8;
							null !== m && u < 4096 && (_[u++] = m << 8 | A, u >= l + 1 && c < 12 && (++c, l = l << 1 | 1)), m = b
						} else u = s + 1, l = (1 << (c = i + 1)) - 1, m = null
					}
					return h !== r && o.log("Warning, gif stream shorter than expected."), n
				}

				function qe(e) {
					var t, n, r, i, a, o = Math.floor,
						s = new Array(64),
						u = new Array(64),
						c = new Array(64),
						l = new Array(64),
						f = new Array(65535),
						d = new Array(65535),
						h = new Array(64),
						p = new Array(64),
						_ = [],
						m = 0,
						b = 7,
						g = new Array(64),
						v = new Array(64),
						y = new Array(64),
						A = new Array(256),
						S = new Array(2048),
						w = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
						E = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
						T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						C = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
						$ = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
						k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
						O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						x = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
						P = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

					function M(e, t) {
						for (var n = 0, r = 0, i = new Array, a = 1; a <= 16; a++) {
							for (var o = 1; o <= e[a]; o++) i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = a, r++, n++;
							n *= 2
						}
						return i
					}

					function I(e) {
						for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (m |= 1 << b), n--, --b < 0 && (255 == m ? (L(255), L(0)) : L(m), b = 7, m = 0)
					}

					function L(e) {
						_.push(e)
					}

					function D(e) {
						L(e >> 8 & 255), L(255 & e)
					}

					function B(e, t, n, r, i) {
						for (var a, o = i[0], s = i[240], u = function(e, t) {
								var n, r, i, a, o, s, u, c, l, f, d = 0;
								for (l = 0; l < 8; ++l) {
									n = e[d], r = e[d + 1], i = e[d + 2], a = e[d + 3], o = e[d + 4], s = e[d + 5], u = e[d + 6];
									var p = n + (c = e[d + 7]),
										_ = n - c,
										m = r + u,
										b = r - u,
										g = i + s,
										v = i - s,
										y = a + o,
										A = a - o,
										S = p + y,
										w = p - y,
										E = m + g,
										T = m - g;
									e[d] = S + E, e[d + 4] = S - E;
									var C = .707106781 * (T + w);
									e[d + 2] = w + C, e[d + 6] = w - C;
									var $ = .382683433 * ((S = A + v) - (T = b + _)),
										k = .5411961 * S + $,
										O = 1.306562965 * T + $,
										x = .707106781 * (E = v + b),
										P = _ + x,
										M = _ - x;
									e[d + 5] = M + k, e[d + 3] = M - k, e[d + 1] = P + O, e[d + 7] = P - O, d += 8
								}
								for (d = 0, l = 0; l < 8; ++l) {
									n = e[d], r = e[d + 8], i = e[d + 16], a = e[d + 24], o = e[d + 32], s = e[d + 40], u = e[d + 48];
									var I = n + (c = e[d + 56]),
										L = n - c,
										D = r + u,
										B = r - u,
										N = i + s,
										R = i - s,
										F = a + o,
										U = a - o,
										j = I + F,
										H = I - F,
										Y = D + N,
										V = D - N;
									e[d] = j + Y, e[d + 32] = j - Y;
									var z = .707106781 * (V + H);
									e[d + 16] = H + z, e[d + 48] = H - z;
									var Q = .382683433 * ((j = U + R) - (V = B + L)),
										G = .5411961 * j + Q,
										q = 1.306562965 * V + Q,
										W = .707106781 * (Y = R + B),
										K = L + W,
										X = L - W;
									e[d + 40] = X + G, e[d + 24] = X - G, e[d + 8] = K + q, e[d + 56] = K - q, d++
								}
								for (l = 0; l < 64; ++l) f = e[l] * t[l], h[l] = f > 0 ? f + .5 | 0 : f - .5 | 0;
								return h
							}(e, t), c = 0; c < 64; ++c) p[w[c]] = u[c];
						var l = p[0] - n;
						n = p[0], 0 == l ? I(r[0]) : (I(r[d[a = 32767 + l]]), I(f[a]));
						for (var _ = 63; _ > 0 && 0 == p[_];) _--;
						if (0 == _) return I(o), n;
						for (var m, b = 1; b <= _;) {
							for (var g = b; 0 == p[b] && b <= _;) ++b;
							var v = b - g;
							if (v >= 16) {
								m = v >> 4;
								for (var y = 1; y <= m; ++y) I(s);
								v &= 15
							}
							a = 32767 + p[b], I(i[(v << 4) + d[a]]), I(f[a]), b++
						}
						return 63 != _ && I(o), n
					}

					function N(e) {
						e = Math.min(Math.max(e, 1), 100), a != e && (function(e) {
							for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
								var r = o((t[n] * e + 50) / 100);
								r = Math.min(Math.max(r, 1), 255), s[w[n]] = r
							}
							for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
								var f = o((i[a] * e + 50) / 100);
								f = Math.min(Math.max(f, 1), 255), u[w[a]] = f
							}
							for (var d = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], h = 0, p = 0; p < 8; p++)
								for (var _ = 0; _ < 8; _++) c[h] = 1 / (s[w[h]] * d[p] * d[_] * 8), l[h] = 1 / (u[w[h]] * d[p] * d[_] * 8), h++
						}(e < 50 ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e)), a = e)
					}
					this.encode = function(e, a) {
							a && N(a), _ = new Array, m = 0, b = 7, D(65496), D(65504), D(16), L(74), L(70), L(73), L(70), L(0), L(1), L(1), L(0), D(1), D(1), L(0), L(0),
								function() {
									D(65499), D(132), L(0);
									for (var e = 0; e < 64; e++) L(s[e]);
									L(1);
									for (var t = 0; t < 64; t++) L(u[t])
								}(),
								function(e, t) {
									D(65472), D(17), L(8), D(t), D(e), L(3), L(1), L(17), L(0), L(2), L(17), L(1), L(3), L(17), L(1)
								}(e.width, e.height),
								function() {
									D(65476), D(418), L(0);
									for (var e = 0; e < 16; e++) L(E[e + 1]);
									for (var t = 0; t <= 11; t++) L(T[t]);
									L(16);
									for (var n = 0; n < 16; n++) L(C[n + 1]);
									for (var r = 0; r <= 161; r++) L($[r]);
									L(1);
									for (var i = 0; i < 16; i++) L(k[i + 1]);
									for (var a = 0; a <= 11; a++) L(O[a]);
									L(17);
									for (var o = 0; o < 16; o++) L(x[o + 1]);
									for (var s = 0; s <= 161; s++) L(P[s])
								}(), D(65498), D(12), L(3), L(1), L(0), L(2), L(17), L(3), L(17), L(0), L(63), L(0);
							var o = 0,
								f = 0,
								d = 0;
							m = 0, b = 7, this.encode.displayName = "_encode_";
							for (var h, p, A, w, M, R, F, U, j, H = e.data, Y = e.width, V = e.height, z = 4 * Y, Q = 0; Q < V;) {
								for (h = 0; h < z;) {
									for (M = z * Q + h, F = -1, U = 0, j = 0; j < 64; j++) R = M + (U = j >> 3) * z + (F = 4 * (7 & j)), Q + U >= V && (R -= z * (Q + 1 + U - V)), h + F >= z && (R -= h + F - z + 4), p = H[R++], A = H[R++], w = H[R++], g[j] = (S[p] + S[A + 256 >> 0] + S[w + 512 >> 0] >> 16) - 128, v[j] = (S[p + 768 >> 0] + S[A + 1024 >> 0] + S[w + 1280 >> 0] >> 16) - 128, y[j] = (S[p + 1280 >> 0] + S[A + 1536 >> 0] + S[w + 1792 >> 0] >> 16) - 128;
									o = B(g, c, o, t, r), f = B(v, l, f, n, i), d = B(y, l, d, n, i), h += 32
								}
								Q += 8
							}
							if (b >= 0) {
								var G = [];
								G[1] = b + 1, G[0] = (1 << b + 1) - 1, I(G)
							}
							return D(65497), new Uint8Array(_)
						}, e = e || 50,
						function() {
							for (var e = String.fromCharCode, t = 0; t < 256; t++) A[t] = e(t)
						}(), t = M(E, T), n = M(k, O), r = M(C, $), i = M(x, P),
						function() {
							for (var e = 1, t = 2, n = 1; n <= 15; n++) {
								for (var r = e; r < t; r++) d[32767 + r] = n, f[32767 + r] = [], f[32767 + r][1] = n, f[32767 + r][0] = r;
								for (var i = -(t - 1); i <= -e; i++) d[32767 + i] = n, f[32767 + i] = [], f[32767 + i][1] = n, f[32767 + i][0] = t - 1 + i;
								e <<= 1, t <<= 1
							}
						}(),
						function() {
							for (var e = 0; e < 256; e++) S[e] = 19595 * e, S[e + 256 >> 0] = 38470 * e, S[e + 512 >> 0] = 7471 * e + 32768, S[e + 768 >> 0] = -11059 * e, S[e + 1024 >> 0] = -21709 * e, S[e + 1280 >> 0] = 32768 * e + 8421375, S[e + 1536 >> 0] = -27439 * e, S[e + 1792 >> 0] = -5329 * e
						}(), N(e)
				}

				function We(e, t) {
					if (this.pos = 0, this.buffer = e, this.datav = new DataView(e.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
					this.parseHeader(), this.parseBGR()
				}

				function Ke(e) {
					function t(e) {
						if (!e) throw Error("assert :P")
					}

					function n(e, t, n) {
						for (var r = 0; 4 > r; r++)
							if (e[t + r] != n.charCodeAt(r)) return !0;
						return !1
					}

					function r(e, t, n, r, i) {
						for (var a = 0; a < i; a++) e[t + a] = n[r + a]
					}

					function i(e, t, n, r) {
						for (var i = 0; i < r; i++) e[t + i] = n
					}

					function a(e) {
						return new Int32Array(e)
					}

					function o(e, t) {
						for (var n = [], r = 0; r < e; r++) n.push(new t);
						return n
					}

					function s(e, t) {
						var n = [];
						return function e(n, r, i) {
							for (var a = i[r], o = 0; o < a && (n.push(i.length > r + 1 ? [] : new t), !(i.length < r + 1)); o++) e(n[o], r + 1, i)
						}(n, 0, e), n
					}

					function u(e, t) {
						for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(e[t++]);
						return n
					}

					function c(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16) >>> 0
					}

					function l(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
					}
					new(Ke = function() {
						var e = this;

						function u(e, t) {
							for (var n = 1 << t - 1 >>> 0; e & n;) n >>>= 1;
							return n ? (e & n - 1) + n : e
						}

						function c(e, n, r, i, a) {
							t(!(i % r));
							do {
								e[n + (i -= r)] = a
							} while (0 < i)
						}

						function l(e, n, r, i, o) {
							if (t(2328 >= o), 512 >= o) var s = a(512);
							else if (null == (s = a(o))) return 0;
							return function(e, n, r, i, o, s) {
								var l, d, h = n,
									p = 1 << r,
									_ = a(16),
									m = a(16);
								for (t(0 != o), t(null != i), t(null != e), t(0 < r), d = 0; d < o; ++d) {
									if (15 < i[d]) return 0;
									++_[i[d]]
								}
								if (_[0] == o) return 0;
								for (m[1] = 0, l = 1; 15 > l; ++l) {
									if (_[l] > 1 << l) return 0;
									m[l + 1] = m[l] + _[l]
								}
								for (d = 0; d < o; ++d) l = i[d], 0 < i[d] && (s[m[l]++] = d);
								if (1 == m[15]) return (i = new f).g = 0, i.value = s[0], c(e, h, 1, p, i), p;
								var b, g = -1,
									v = p - 1,
									y = 0,
									A = 1,
									S = 1,
									w = 1 << r;
								for (d = 0, l = 1, o = 2; l <= r; ++l, o <<= 1) {
									if (A += S <<= 1, 0 > (S -= _[l])) return 0;
									for (; 0 < _[l]; --_[l])(i = new f).g = l, i.value = s[d++], c(e, h + y, o, w, i), y = u(y, l)
								}
								for (l = r + 1, o = 2; 15 >= l; ++l, o <<= 1) {
									if (A += S <<= 1, 0 > (S -= _[l])) return 0;
									for (; 0 < _[l]; --_[l]) {
										if (i = new f, (y & v) != g) {
											for (h += w, b = 1 << (g = l) - r; 15 > g && !(0 >= (b -= _[g]));) ++g, b <<= 1;
											p += w = 1 << (b = g - r), e[n + (g = y & v)].g = b + r, e[n + g].value = h - n - g
										}
										i.g = l - r, i.value = s[d++], c(e, h + (y >> r), o, w, i), y = u(y, l)
									}
								}
								return A != 2 * m[15] - 1 ? 0 : p
							}(e, n, r, i, o, s)
						}

						function f() {
							this.value = this.g = 0
						}

						function d() {
							this.value = this.g = 0
						}

						function h() {
							this.G = o(5, f), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Fn, d)
						}

						function p(e, n, r, i) {
							t(null != e), t(null != n), t(2147483648 > i), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = n, e.pa = r, e.Jd = n, e.Yc = r + i, e.Zc = 4 <= i ? r + i - 4 + 1 : r, C(e)
						}

						function _(e, t) {
							for (var n = 0; 0 < t--;) n |= k(e, 128) << t;
							return n
						}

						function m(e, t) {
							var n = _(e, t);
							return $(e) ? -n : n
						}

						function b(e, n, r, i) {
							var a, o = 0;
							for (t(null != e), t(null != n), t(4294967288 > i), e.Sb = i, e.Ra = 0, e.u = 0, e.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += n[r + a] << 8 * a;
							e.Ra = o, e.bb = i, e.oa = n, e.pa = r
						}

						function g(e) {
							for (; 8 <= e.u && e.bb < e.Sb;) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << Hn - 8 >>> 0, ++e.bb, e.u -= 8;
							w(e) && (e.h = 1, e.u = 0)
						}

						function v(e, n) {
							if (t(0 <= n), !e.h && n <= jn) {
								var r = S(e) & Un[n];
								return e.u += n, g(e), r
							}
							return e.h = 1, e.u = 0
						}

						function y() {
							this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
						}

						function A() {
							this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
						}

						function S(e) {
							return e.Ra >>> (e.u & Hn - 1) >>> 0
						}

						function w(e) {
							return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > Hn
						}

						function E(e, t) {
							e.u = t, e.h = w(e)
						}

						function T(e) {
							e.u >= Yn && (t(e.u >= Yn), g(e))
						}

						function C(e) {
							t(null != e && null != e.oa), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(null != e && null != e.oa), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1))
						}

						function $(e) {
							return _(e, 1)
						}

						function k(e, t) {
							var n = e.Ca;
							0 > e.b && C(e);
							var r = e.b,
								i = n * t >>> 8,
								a = (e.I >>> r > i) + 0;
							for (a ? (n -= i, e.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
							return r = 7 ^ i + Vn[r], e.b -= r, e.Ca = (n << r) - 1, a
						}

						function O(e, t, n) {
							e[t + 0] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255
						}

						function x(e, t) {
							return e[t + 0] << 0 | e[t + 1] << 8
						}

						function P(e, t) {
							return x(e, t) | e[t + 2] << 16
						}

						function M(e, t) {
							return x(e, t) | x(e, t + 2) << 16
						}

						function I(e, n) {
							var r = 1 << n;
							return t(null != e), t(0 < n), e.X = a(r), null == e.X ? 0 : (e.Mb = 32 - n, e.Xa = n, 1)
						}

						function L(e, n) {
							t(null != e), t(null != n), t(e.Xa == n.Xa), r(n.X, 0, e.X, 0, 1 << n.Xa)
						}

						function D() {
							this.X = [], this.Xa = this.Mb = 0
						}

						function B(e, n, r, i) {
							t(null != r), t(null != i);
							var a = r[0],
								o = i[0];
							return 0 == a && (a = (e * o + n / 2) / n), 0 == o && (o = (n * a + e / 2) / e), 0 >= a || 0 >= o ? 0 : (r[0] = a, i[0] = o, 1)
						}

						function N(e, t) {
							return e + (1 << t) - 1 >>> t
						}

						function R(e, t) {
							return ((4278255360 & e) + (4278255360 & t) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & t) >>> 0 & 16711935) >>> 0
						}

						function F(t, n) {
							e[n] = function(n, r, i, a, o, s, u) {
								var c;
								for (c = 0; c < o; ++c) {
									var l = e[t](s[u + c - 1], i, a + c);
									s[u + c] = R(n[r + c], l)
								}
							}
						}

						function U() {
							this.ud = this.hd = this.jd = 0
						}

						function j(e, t) {
							return ((4278124286 & (e ^ t)) >>> 1) + (e & t) >>> 0
						}

						function H(e) {
							return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0
						}

						function Y(e, t) {
							return H(e + (e - t + .5 >> 1))
						}

						function V(e, t, n) {
							return Math.abs(t - n) - Math.abs(e - n)
						}

						function z(e, t, n, r, i, a, o) {
							for (r = a[o - 1], n = 0; n < i; ++n) a[o + n] = r = R(e[t + n], r)
						}

						function Q(e, t, n, r, i) {
							var a;
							for (a = 0; a < n; ++a) {
								var o = e[t + a],
									s = o >> 8 & 255,
									u = 16711935 & (u = (u = 16711935 & o) + ((s << 16) + s));
								r[i + a] = (4278255360 & o) + u >>> 0
							}
						}

						function G(e, t) {
							t.jd = e >> 0 & 255, t.hd = e >> 8 & 255, t.ud = e >> 16 & 255
						}

						function q(e, t, n, r, i, a) {
							var o;
							for (o = 0; o < r; ++o) {
								var s = t[n + o],
									u = s >>> 8,
									c = s,
									l = 255 & (l = (l = s >>> 16) + ((e.jd << 24 >> 24) * (u << 24 >> 24) >>> 5));
								c = 255 & (c = (c += (e.hd << 24 >> 24) * (u << 24 >> 24) >>> 5) + ((e.ud << 24 >> 24) * (l << 24 >> 24) >>> 5)), i[a + o] = (4278255360 & s) + (l << 16) + c
							}
						}

						function W(t, n, r, i, a) {
							e[n] = function(e, t, n, r, o, s, u, c, l) {
								for (r = u; r < c; ++r)
									for (u = 0; u < l; ++u) o[s++] = a(n[i(e[t++])])
							}, e[t] = function(t, n, o, s, u, c, l) {
								var f = 8 >> t.b,
									d = t.Ea,
									h = t.K[0],
									p = t.w;
								if (8 > f)
									for (t = (1 << t.b) - 1, p = (1 << f) - 1; n < o; ++n) {
										var _, m = 0;
										for (_ = 0; _ < d; ++_) _ & t || (m = i(s[u++])), c[l++] = a(h[m & p]), m >>= f
									} else e["VP8LMapColor" + r](s, u, h, p, c, l, n, o, d)
							}
						}

						function K(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255
							}
						}

						function X(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255, r[i++] = a >> 24 & 255
							}
						}

						function J(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 240 | o >> 12 & 15,
									o = o >> 0 & 240 | o >> 28 & 15;
								r[i++] = a, r[i++] = o
							}
						}

						function Z(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 248 | o >> 13 & 7,
									o = o >> 5 & 224 | o >> 3 & 31;
								r[i++] = a, r[i++] = o
							}
						}

						function ee(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 0 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 16 & 255
							}
						}

						function te(e, t, n, i, a, o) {
							if (0 == o)
								for (n = t + n; t < n;) O(i, ((o = e[t++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
							else r(i, a, e, t, n)
						}

						function ne(t, n) {
							e[n][0] = e[t + "0"], e[n][1] = e[t + "1"], e[n][2] = e[t + "2"], e[n][3] = e[t + "3"], e[n][4] = e[t + "4"], e[n][5] = e[t + "5"], e[n][6] = e[t + "6"], e[n][7] = e[t + "7"], e[n][8] = e[t + "8"], e[n][9] = e[t + "9"], e[n][10] = e[t + "10"], e[n][11] = e[t + "11"], e[n][12] = e[t + "12"], e[n][13] = e[t + "13"], e[n][14] = e[t + "0"], e[n][15] = e[t + "0"]
						}

						function re(e) {
							return e == Yr || e == Vr || e == zr || e == Qr
						}

						function ie() {
							this.eb = [], this.size = this.A = this.fb = 0
						}

						function ae() {
							this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
						}

						function oe() {
							this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new ie, this.f.kb = new ae, this.sd = null
						}

						function se() {
							this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
						}

						function ue() {
							this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
						}

						function ce(e) {
							return alert("todo:WebPSamplerProcessPlane"), e.T
						}

						function le(e, t) {
							var n = e.T,
								i = t.ba.f.RGBA,
								a = i.eb,
								o = i.fb + e.ka * i.A,
								s = bi[t.ba.S],
								u = e.y,
								c = e.O,
								l = e.f,
								f = e.N,
								d = e.ea,
								h = e.W,
								p = t.cc,
								_ = t.dc,
								m = t.Mc,
								b = t.Nc,
								g = e.ka,
								v = e.ka + e.T,
								y = e.U,
								A = y + 1 >> 1;
							for (0 == g ? s(u, c, null, null, l, f, d, h, l, f, d, h, a, o, null, null, y) : (s(t.ec, t.fc, u, c, p, _, m, b, l, f, d, h, a, o - i.A, a, o, y), ++n); g + 2 < v; g += 2) p = l, _ = f, m = d, b = h, f += e.Rc, h += e.Rc, o += 2 * i.A, s(u, (c += 2 * e.fa) - e.fa, u, c, p, _, m, b, l, f, d, h, a, o - i.A, a, o, y);
							return c += e.fa, e.j + v < e.o ? (r(t.ec, t.fc, u, c, y), r(t.cc, t.dc, l, f, A), r(t.Mc, t.Nc, d, h, A), n--) : 1 & v || s(u, c, null, null, l, f, d, h, l, f, d, h, a, o + i.A, null, null, y), n
						}

						function fe(e, n, r) {
							var i = e.F,
								a = [e.J];
							if (null != i) {
								var o = e.U,
									s = n.ba.S,
									u = s == Ur || s == zr;
								n = n.ba.f.RGBA;
								var c = [0],
									l = e.ka;
								c[0] = e.T, e.Kb && (0 == l ? --c[0] : (--l, a[0] -= e.width), e.j + e.ka + e.T == e.o && (c[0] = e.o - e.j - l));
								var f = n.eb;
								l = n.fb + l * n.A, e = Tr(i, a[0], e.width, o, c, f, l + (u ? 0 : 3), n.A), t(r == c), e && re(s) && wr(f, l, u, o, c, n.A)
							}
							return 0
						}

						function de(e) {
							var t = e.ma,
								n = t.ba.S,
								r = 11 > n,
								i = n == Nr || n == Fr || n == Ur || n == jr || 12 == n || re(n);
							if (t.memory = null, t.Ib = null, t.Jb = null, t.Nd = null, !Bn(t.Oa, e, i ? 11 : 12)) return 0;
							if (i && re(n) && vn(), e.da) alert("todo:use_scaling");
							else {
								if (r) {
									if (t.Ib = ce, e.Kb) {
										if (n = e.U + 1 >> 1, t.memory = a(e.U + 2 * n), null == t.memory) return 0;
										t.ec = t.memory, t.fc = 0, t.cc = t.ec, t.dc = t.fc + e.U, t.Mc = t.cc, t.Nc = t.dc + n, t.Ib = le, vn()
									}
								} else alert("todo:EmitYUV");
								i && (t.Jb = fe, r && bn())
							}
							if (r && !Pi) {
								for (e = 0; 256 > e; ++e) Mi[e] = 89858 * (e - 128) + Ci >> Ti, Di[e] = -22014 * (e - 128) + Ci, Li[e] = -45773 * (e - 128), Ii[e] = 113618 * (e - 128) + Ci >> Ti;
								for (e = $i; e < ki; ++e) t = 76283 * (e - 16) + Ci >> Ti, Bi[e - $i] = ze(t, 255), Ni[e - $i] = ze(t + 8 >> 4, 15);
								Pi = 1
							}
							return 1
						}

						function he(e) {
							var n = e.ma,
								r = e.U,
								i = e.T;
							return t(!(1 & e.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(e, n), null != n.Jb && n.Jb(e, n, r), n.Dc += r, 1)
						}

						function pe(e) {
							e.ma.memory = null
						}

						function _e(e, t, n, r) {
							return 47 != v(e, 8) ? 0 : (t[0] = v(e, 14) + 1, n[0] = v(e, 14) + 1, r[0] = v(e, 1), 0 != v(e, 3) ? 0 : !e.h)
						}

						function me(e, t) {
							if (4 > e) return e + 1;
							var n = e - 2 >> 1;
							return (2 + (1 & e) << n) + v(t, n) + 1
						}

						function be(e, t) {
							return 120 < t ? t - 120 : 1 <= (n = ((n = Jr[t - 1]) >> 4) * e + (8 - (15 & n))) ? n : 1;
							var n
						}

						function ge(e, t, n) {
							var r = S(n),
								i = e[t += 255 & r].g - 8;
							return 0 < i && (E(n, n.u + 8), r = S(n), t += e[t].value, t += r & (1 << i) - 1), E(n, n.u + e[t].g), e[t].value
						}

						function ve(e, n, r) {
							return r.g += e.g, r.value += e.value << n >>> 0, t(8 >= r.g), e.g
						}

						function ye(e, n, r) {
							var i = e.xc;
							return t((n = 0 == i ? 0 : e.vc[e.md * (r >> i) + (n >> i)]) < e.Wb), e.Ya[n]
						}

						function Ae(e, n, i, a) {
							var o = e.ab,
								s = e.c * n,
								u = e.C;
							n = u + n;
							var c = i,
								l = a;
							for (a = e.Ta, i = e.Ua; 0 < o--;) {
								var f = e.gc[o],
									d = u,
									h = n,
									p = c,
									_ = l,
									m = (l = a, c = i, f.Ea);
								switch (t(d < h), t(h <= f.nc), f.hc) {
									case 2:
										Gn(p, _, (h - d) * m, l, c);
										break;
									case 0:
										var b = d,
											g = h,
											v = l,
											y = c,
											A = (C = f).Ea;
										0 == b && (zn(p, _, null, null, 1, v, y), z(p, _ + 1, 0, 0, A - 1, v, y + 1), _ += A, y += A, ++b);
										for (var S = 1 << C.b, w = S - 1, E = N(A, C.b), T = C.K, C = C.w + (b >> C.b) * E; b < g;) {
											var $ = T,
												k = C,
												O = 1;
											for (Qn(p, _, v, y - A, 1, v, y); O < A;) {
												var x = (O & ~w) + S;
												x > A && (x = A), (0, Jn[$[k++] >> 8 & 15])(p, _ + +O, v, y + O - A, x - O, v, y + O), O = x
											}
											_ += A, y += A, ++b & w || (C += E)
										}
										h != f.nc && r(l, c - m, l, c + (h - d - 1) * m, m);
										break;
									case 1:
										for (m = p, g = _, A = (p = f.Ea) - (y = p & ~(v = (_ = 1 << f.b) - 1)), b = N(p, f.b), S = f.K, f = f.w + (d >> f.b) * b; d < h;) {
											for (w = S, E = f, T = new U, C = g + y, $ = g + p; g < C;) G(w[E++], T), Zn(T, m, g, _, l, c), g += _, c += _;
											g < $ && (G(w[E++], T), Zn(T, m, g, A, l, c), g += A, c += A), ++d & v || (f += b)
										}
										break;
									case 3:
										if (p == l && _ == c && 0 < f.b) {
											for (g = l, p = m = c + (h - d) * m - (y = (h - d) * N(f.Ea, f.b)), _ = l, v = c, b = [], y = (A = y) - 1; 0 <= y; --y) b[y] = _[v + y];
											for (y = A - 1; 0 <= y; --y) g[p + y] = b[y];
											qn(f, d, h, l, m, l, c)
										} else qn(f, d, h, p, _, l, c)
								}
								c = a, l = i
							}
							l != i && r(a, i, c, l, s)
						}

						function Se(e, n) {
							var r = e.V,
								i = e.Ba + e.c * e.C,
								a = n - e.C;
							if (t(n <= e.l.o), t(16 >= a), 0 < a) {
								var o = e.l,
									s = e.Ta,
									u = e.Ua,
									c = o.width;
								if (Ae(e, a, r, i), a = u = [u], t((r = e.C) < (i = n)), t(o.v < o.va), i > o.o && (i = o.o), r < o.j) {
									var l = o.j - r;
									r = o.j, a[0] += l * c
								}
								if (r >= i ? r = 0 : (a[0] += 4 * o.v, o.ka = r - o.j, o.U = o.va - o.v, o.T = i - r, r = 1), r) {
									if (u = u[0], 11 > (r = e.ca).S) {
										var f = r.f.RGBA,
											d = (i = r.S, a = o.U, o = o.T, l = f.eb, f.A),
											h = o;
										for (f = f.fb + e.Ma * f.A; 0 < h--;) {
											var p = s,
												_ = u,
												m = a,
												b = l,
												g = f;
											switch (i) {
												case Br:
													er(p, _, m, b, g);
													break;
												case Nr:
													tr(p, _, m, b, g);
													break;
												case Yr:
													tr(p, _, m, b, g), wr(b, g, 0, m, 1, 0);
													break;
												case Rr:
													ir(p, _, m, b, g);
													break;
												case Fr:
													te(p, _, m, b, g, 1);
													break;
												case Vr:
													te(p, _, m, b, g, 1), wr(b, g, 0, m, 1, 0);
													break;
												case Ur:
													te(p, _, m, b, g, 0);
													break;
												case zr:
													te(p, _, m, b, g, 0), wr(b, g, 1, m, 1, 0);
													break;
												case jr:
													nr(p, _, m, b, g);
													break;
												case Qr:
													nr(p, _, m, b, g), Er(b, g, m, 1, 0);
													break;
												case Hr:
													rr(p, _, m, b, g);
													break;
												default:
													t(0)
											}
											u += c, f += d
										}
										e.Ma += o
									} else alert("todo:EmitRescaledRowsYUVA");
									t(e.Ma <= r.height)
								}
							}
							e.C = n, t(e.C <= e.i)
						}

						function we(e) {
							var t;
							if (0 < e.ua) return 0;
							for (t = 0; t < e.Wb; ++t) {
								var n = e.Ya[t].G,
									r = e.Ya[t].H;
								if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0
							}
							return 1
						}

						function Ee(e, n, r, i, a, o) {
							if (0 != e.Z) {
								var s = e.qd,
									u = e.rd;
								for (t(null != mi[e.Z]); n < r; ++n) mi[e.Z](s, u, i, a, i, a, o), s = i, u = a, a += o;
								e.qd = s, e.rd = u
							}
						}

						function Te(e, n) {
							var r = e.l.ma,
								i = 0 == r.Z || 1 == r.Z ? e.l.j : e.C;
							if (i = e.C < i ? i : e.C, t(n <= e.l.o), n > i) {
								var a = e.l.width,
									o = r.ca,
									s = r.tb + a * i,
									u = e.V,
									c = e.Ba + e.c * i,
									l = e.gc;
								t(1 == e.ab), t(3 == l[0].hc), Kn(l[0], i, n, u, c, o, s), Ee(r, i, n, o, s, a)
							}
							e.C = e.Ma = n
						}

						function Ce(e, n, r, i, a, o, s) {
							var u = e.$ / i,
								c = e.$ % i,
								l = e.m,
								f = e.s,
								d = r + e.$,
								h = d;
							a = r + i * a;
							var p = r + i * o,
								_ = 280 + f.ua,
								m = e.Pb ? u : 16777216,
								b = 0 < f.ua ? f.Wa : null,
								g = f.wc,
								v = d < p ? ye(f, c, u) : null;
							t(e.C < o), t(p <= a);
							var y = !1;
							e: for (;;) {
								for (; y || d < p;) {
									var A = 0;
									if (u >= m) {
										var C = d - r;
										t((m = e).Pb), m.wd = m.m, m.xd = C, 0 < m.s.ua && L(m.s.Wa, m.s.vb), m = u + ei
									}
									if (c & g || (v = ye(f, c, u)), t(null != v), v.Qb && (n[d] = v.qb, y = !0), !y)
										if (T(l), v.jc) {
											A = l, C = n;
											var $ = d,
												k = v.pd[S(A) & Fn - 1];
											t(v.jc), 256 > k.g ? (E(A, A.u + k.g), C[$] = k.value, A = 0) : (E(A, A.u + k.g - 256), t(256 <= k.value), A = k.value), 0 == A && (y = !0)
										} else A = ge(v.G[0], v.H[0], l);
									if (l.h) break;
									if (y || 256 > A) {
										if (!y)
											if (v.nd) n[d] = (v.qb | A << 8) >>> 0;
											else {
												if (T(l), y = ge(v.G[1], v.H[1], l), T(l), C = ge(v.G[2], v.H[2], l), $ = ge(v.G[3], v.H[3], l), l.h) break;
												n[d] = ($ << 24 | y << 16 | A << 8 | C) >>> 0
											} if (y = !1, ++d, ++c >= i && (c = 0, ++u, null != s && u <= o && !(u % 16) && s(e, u), null != b))
											for (; h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A
									} else if (280 > A) {
										if (A = me(A - 256, l), C = ge(v.G[4], v.H[4], l), T(l), C = be(i, C = me(C, l)), l.h) break;
										if (d - r < C || a - d < A) break e;
										for ($ = 0; $ < A; ++$) n[d + $] = n[d + $ - C];
										for (d += A, c += A; c >= i;) c -= i, ++u, null != s && u <= o && !(u % 16) && s(e, u);
										if (t(d <= a), c & g && (v = ye(f, c, u)), null != b)
											for (; h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A
									} else {
										if (!(A < _)) break e;
										for (y = A - 280, t(null != b); h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A;
										A = d, t(!(y >>> (C = b).Xa)), n[A] = C.X[y], y = !0
									}
									y || t(l.h == w(l))
								}
								if (e.Pb && l.h && d < a) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && L(e.s.vb, e.s.Wa);
								else {
									if (l.h) break e;
									null != s && s(e, u > o ? o : u), e.a = 0, e.$ = d - r
								}
								return 1
							}
							return e.a = 3, 0
						}

						function $e(e) {
							t(null != e), e.vc = null, e.yc = null, e.Ya = null;
							var n = e.Wa;
							null != n && (n.X = null), e.vb = null, t(null != e)
						}

						function ke() {
							var t = new sn;
							return null == t ? null : (t.a = 0, t.xb = _i, ne("Predictor", "VP8LPredictors"), ne("Predictor", "VP8LPredictors_C"), ne("PredictorAdd", "VP8LPredictorsAdd"), ne("PredictorAdd", "VP8LPredictorsAdd_C"), Gn = Q, Zn = q, er = K, tr = X, nr = J, rr = Z, ir = ee, e.VP8LMapColor32b = Wn, e.VP8LMapColor8b = Xn, t)
						}

						function Oe(e, n, r, s, u) {
							var c = 1,
								d = [e],
								p = [n],
								_ = s.m,
								m = s.s,
								b = null,
								g = 0;
							e: for (;;) {
								if (r)
									for (; c && v(_, 1);) {
										var y = d,
											A = p,
											w = s,
											C = 1,
											$ = w.m,
											k = w.gc[w.ab],
											O = v($, 2);
										if (w.Oc & 1 << O) c = 0;
										else {
											switch (w.Oc |= 1 << O, k.hc = O, k.Ea = y[0], k.nc = A[0], k.K = [null], ++w.ab, t(4 >= w.ab), O) {
												case 0:
												case 1:
													k.b = v($, 3) + 2, C = Oe(N(k.Ea, k.b), N(k.nc, k.b), 0, w, k.K), k.K = k.K[0];
													break;
												case 3:
													var x, P = v($, 8) + 1,
														M = 16 < P ? 0 : 4 < P ? 1 : 2 < P ? 2 : 3;
													if (y[0] = N(k.Ea, M), k.b = M, x = C = Oe(P, 1, 0, w, k.K)) {
														var L, D = P,
															B = k,
															F = 1 << (8 >> B.b),
															U = a(F);
														if (null == U) x = 0;
														else {
															var j = B.K[0],
																H = B.w;
															for (U[0] = B.K[0][0], L = 1; L < 1 * D; ++L) U[L] = R(j[H + L], U[L - 1]);
															for (; L < 4 * F; ++L) U[L] = 0;
															B.K[0] = null, B.K[0] = U, x = 1
														}
													}
													C = x;
													break;
												case 2:
													break;
												default:
													t(0)
											}
											c = C
										}
									}
								if (d = d[0], p = p[0], c && v(_, 1) && !(c = 1 <= (g = v(_, 4)) && 11 >= g)) {
									s.a = 3;
									break e
								}
								var Y;
								if (Y = c) t: {
									var V, z, Q, G = s,
										q = d,
										W = p,
										K = g,
										X = r,
										J = G.m,
										Z = G.s,
										ee = [null],
										te = 1,
										ne = 0,
										re = Zr[K];n: for (;;) {
										if (X && v(J, 1)) {
											var ie = v(J, 3) + 2,
												ae = N(q, ie),
												oe = N(W, ie),
												se = ae * oe;
											if (!Oe(ae, oe, 0, G, ee)) break n;
											for (ee = ee[0], Z.xc = ie, V = 0; V < se; ++V) {
												var ue = ee[V] >> 8 & 65535;
												ee[V] = ue, ue >= te && (te = ue + 1)
											}
										}
										if (J.h) break n;
										for (z = 0; 5 > z; ++z) {
											var ce = Wr[z];
											!z && 0 < K && (ce += 1 << K), ne < ce && (ne = ce)
										}
										var le = o(te * re, f),
											fe = te,
											de = o(fe, h);
										if (null == de) var he = null;
										else t(65536 >= fe), he = de;
										var pe = a(ne);
										if (null == he || null == pe || null == le) {
											G.a = 1;
											break n
										}
										var _e = le;
										for (V = Q = 0; V < te; ++V) {
											var me = he[V],
												be = me.G,
												ge = me.H,
												ye = 0,
												Ae = 1,
												Se = 0;
											for (z = 0; 5 > z; ++z) {
												ce = Wr[z], be[z] = _e, ge[z] = Q, !z && 0 < K && (ce += 1 << K);
												r: {
													var we, Ee = ce,
														Te = G,
														ke = pe,
														xe = _e,
														Pe = Q,
														Me = 0,
														Ie = Te.m,
														Le = v(Ie, 1);
													if (i(ke, 0, 0, Ee), Le) {
														var De = v(Ie, 1) + 1,
															Be = v(Ie, 1),
															Ne = v(Ie, 0 == Be ? 1 : 8);
														ke[Ne] = 1, 2 == De && (ke[Ne = v(Ie, 8)] = 1);
														var Re = 1
													} else {
														var Fe = a(19),
															Ue = v(Ie, 4) + 4;
														if (19 < Ue) {
															Te.a = 3;
															var je = 0;
															break r
														}
														for (we = 0; we < Ue; ++we) Fe[Xr[we]] = v(Ie, 3);
														var He = void 0,
															Ye = void 0,
															Ve = Te,
															ze = Fe,
															Qe = Ee,
															Ge = ke,

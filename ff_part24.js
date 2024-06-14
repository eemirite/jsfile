							for (var d = r - i, h = d % 2 != 0, p = 0, _ = 0, m = 0, b = 0, g = 0; g < a; g++) {
								for (var v = -g + p; v <= g - _; v += 2) {
									for (var y = s + v, A = (C = v == -g || v != g && c[y - 1] < c[y + 1] ? c[y + 1] : c[y - 1] + 1) - v; C < r && A < i && e.charAt(C) == t.charAt(A);) C++, A++;
									if (c[y] = C, C > r) _ += 2;
									else if (A > i) p += 2;
									else if (h) {
										var S = s + d - v;
										if (S >= 0 && S < u && -1 != l[S]) {
											var w = r - l[S];
											if (C >= w) return o(e, t, C, A)
										}
									}
								}
								for (var E = -g + m; E <= g - b; E += 2) {
									S = s + E;
									for (var T = (w = E == -g || E != g && l[S - 1] < l[S + 1] ? l[S + 1] : l[S - 1] + 1) - E; w < r && T < i && e.charAt(r - w - 1) == t.charAt(i - T - 1);) w++, T++;
									if (l[S] = w, w > r) b += 2;
									else if (T > i) m += 2;
									else if (!h && (y = s + d - E) >= 0 && y < u && -1 != c[y]) {
										var C = c[y];
										if (A = s + C - y, C >= (w = r - w)) return o(e, t, C, A)
									}
								}
							}
							return [
								[n, e],
								[1, t]
							]
						}

						function o(e, t, n, i) {
							var a = e.substring(0, n),
								o = t.substring(0, i),
								s = e.substring(n),
								u = t.substring(i),
								c = r(a, o),
								l = r(s, u);
							return c.concat(l)
						}

						function s(e, t) {
							if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
							for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? a = n = i : r = i, i = Math.floor((r - n) / 2 + n);
							return i
						}

						function u(e, t) {
							if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) return 0;
							for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? a = n = i : r = i, i = Math.floor((r - n) / 2 + n);
							return i
						}

						function c(e, t) {
							var n = e.length > t.length ? e : t,
								r = e.length > t.length ? t : e;
							if (n.length < 4 || 2 * r.length < n.length) return null;

							function i(e, t, n) {
								for (var r, i, a, o, c = e.substring(n, n + Math.floor(e.length / 4)), l = -1, f = ""; - 1 != (l = t.indexOf(c, l + 1));) {
									var d = s(e.substring(n), t.substring(l)),
										h = u(e.substring(0, n), t.substring(0, l));
									f.length < h + d && (f = t.substring(l - h, l) + t.substring(l, l + d), r = e.substring(0, n - h), i = e.substring(n + d), a = t.substring(0, l - h), o = t.substring(l + d))
								}
								return 2 * f.length >= e.length ? [r, i, a, o, f] : null
							}
							var a, o, c, l, f, d = i(n, r, Math.ceil(n.length / 4)),
								h = i(n, r, Math.ceil(n.length / 2));
							return d || h ? (a = h ? d && d[4].length > h[4].length ? d : h : d, e.length > t.length ? (o = a[0], c = a[1], l = a[2], f = a[3]) : (l = a[0], f = a[1], o = a[2], c = a[3]), [o, c, l, f, a[4]]) : null
						}

						function l(e) {
							e.push([0, ""]);
							for (var t, r = 0, i = 0, a = 0, o = "", c = ""; r < e.length;) switch (e[r][0]) {
								case 1:
									a++, c += e[r][1], r++;
									break;
								case n:
									i++, o += e[r][1], r++;
									break;
								case 0:
									i + a > 1 ? (0 !== i && 0 !== a && (0 !== (t = s(c, o)) && (r - i - a > 0 && 0 == e[r - i - a - 1][0] ? e[r - i - a - 1][1] += c.substring(0, t) : (e.splice(0, 0, [0, c.substring(0, t)]), r++), c = c.substring(t), o = o.substring(t)), 0 !== (t = u(c, o)) && (e[r][1] = c.substring(c.length - t) + e[r][1], c = c.substring(0, c.length - t), o = o.substring(0, o.length - t))), 0 === i ? e.splice(r - a, i + a, [1, c]) : 0 === a ? e.splice(r - i, i + a, [n, o]) : e.splice(r - i - a, i + a, [n, o], [1, c]), r = r - i - a + (i ? 1 : 0) + (a ? 1 : 0) + 1) : 0 !== r && 0 == e[r - 1][0] ? (e[r - 1][1] += e[r][1], e.splice(r, 1)) : r++, a = 0, i = 0, o = "", c = ""
							}
							"" === e[e.length - 1][1] && e.pop();
							var f = !1;
							for (r = 1; r < e.length - 1;) 0 == e[r - 1][0] && 0 == e[r + 1][0] && (e[r][1].substring(e[r][1].length - e[r - 1][1].length) == e[r - 1][1] ? (e[r][1] = e[r - 1][1] + e[r][1].substring(0, e[r][1].length - e[r - 1][1].length), e[r + 1][1] = e[r - 1][1] + e[r + 1][1], e.splice(r - 1, 1), f = !0) : e[r][1].substring(0, e[r + 1][1].length) == e[r + 1][1] && (e[r - 1][1] += e[r + 1][1], e[r][1] = e[r][1].substring(e[r + 1][1].length) + e[r + 1][1], e.splice(r + 1, 1), f = !0)), r++;
							f && l(e)
						}
						var f = r;

						function d(e, t) {
							if (0 === t) return [0, e];
							for (var r = 0, i = 0; i < e.length; i++) {
								var a = e[i];
								if (a[0] === n || 0 === a[0]) {
									var o = r + a[1].length;
									if (t === o) return [i + 1, e];
									if (t < o) {
										e = e.slice();
										var s = t - r,
											u = [a[0], a[1].slice(0, s)],
											c = [a[0], a[1].slice(s)];
										return e.splice(i, 1, u, c), [i + 1, e]
									}
									r = o
								}
							}
							throw new Error("cursor_pos is out of bounds!")
						}

						function h(e) {
							for (var t = !1, r = function(e) {
									return e.charCodeAt(0) >= 56320 && e.charCodeAt(0) <= 57343
								}, i = function(e) {
									return e.charCodeAt(e.length - 1) >= 55296 && e.charCodeAt(e.length - 1) <= 56319
								}, a = 2; a < e.length; a += 1) 0 === e[a - 2][0] && i(e[a - 2][1]) && e[a - 1][0] === n && r(e[a - 1][1]) && 1 === e[a][0] && r(e[a][1]) && (t = !0, e[a - 1][1] = e[a - 2][1].slice(-1) + e[a - 1][1], e[a][1] = e[a - 2][1].slice(-1) + e[a][1], e[a - 2][1] = e[a - 2][1].slice(0, -1));
							if (!t) return e;
							var o = [];
							for (a = 0; a < e.length; a += 1) e[a][1].length > 0 && o.push(e[a]);
							return o
						}

						function p(e, t, n) {
							for (var r = t + n - 1; r >= 0 && r >= t - 1; r--)
								if (r + 1 < e.length) {
									var i = e[r],
										a = e[r + 1];
									i[0] === a[1] && e.splice(r, 2, [i[0], i[1] + a[1]])
								} return e
						}
						f.INSERT = 1, f.DELETE = n, f.EQUAL = 0, e.exports = f
					}, function(e, t) {
						function n(e) {
							var t = [];
							for (var n in e) t.push(n);
							return t
						}(e.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
					}, function(e, t) {
						var n = "[object Arguments]" == function() {
							return Object.prototype.toString.call(arguments)
						}();

						function r(e) {
							return "[object Arguments]" == Object.prototype.toString.call(e)
						}

						function i(e) {
							return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
						}(t = e.exports = n ? r : i).supported = r, t.unsupported = i
					}, function(e, t) {
						"use strict";
						var n = Object.prototype.hasOwnProperty,
							r = "~";

						function i() {}

						function a(e, t, n) {
							this.fn = e, this.context = t, this.once = n || !1
						}

						function o() {
							this._events = new i, this._eventsCount = 0
						}
						Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), o.prototype.eventNames = function() {
							var e, t, i = [];
							if (0 === this._eventsCount) return i;
							for (t in e = this._events) n.call(e, t) && i.push(r ? t.slice(1) : t);
							return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
						}, o.prototype.listeners = function(e, t) {
							var n = r ? r + e : e,
								i = this._events[n];
							if (t) return !!i;
							if (!i) return [];
							if (i.fn) return [i.fn];
							for (var a = 0, o = i.length, s = new Array(o); a < o; a++) s[a] = i[a].fn;
							return s
						}, o.prototype.emit = function(e, t, n, i, a, o) {
							var s = r ? r + e : e;
							if (!this._events[s]) return !1;
							var u, c, l = this._events[s],
								f = arguments.length;
							if (l.fn) {
								switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
									case 1:
										return l.fn.call(l.context), !0;
									case 2:
										return l.fn.call(l.context, t), !0;
									case 3:
										return l.fn.call(l.context, t, n), !0;
									case 4:
										return l.fn.call(l.context, t, n, i), !0;
									case 5:
										return l.fn.call(l.context, t, n, i, a), !0;
									case 6:
										return l.fn.call(l.context, t, n, i, a, o), !0
								}
								for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
								l.fn.apply(l.context, u)
							} else {
								var d, h = l.length;
								for (c = 0; c < h; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f) {
									case 1:
										l[c].fn.call(l[c].context);
										break;
									case 2:
										l[c].fn.call(l[c].context, t);
										break;
									case 3:
										l[c].fn.call(l[c].context, t, n);
										break;
									case 4:
										l[c].fn.call(l[c].context, t, n, i);
										break;
									default:
										if (!u)
											for (d = 1, u = new Array(f - 1); d < f; d++) u[d - 1] = arguments[d];
										l[c].fn.apply(l[c].context, u)
								}
							}
							return !0
						}, o.prototype.on = function(e, t, n) {
							var i = new a(t, n || this),
								o = r ? r + e : e;
							return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
						}, o.prototype.once = function(e, t, n) {
							var i = new a(t, n || this, !0),
								o = r ? r + e : e;
							return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
						}, o.prototype.removeListener = function(e, t, n, a) {
							var o = r ? r + e : e;
							if (!this._events[o]) return this;
							if (!t) return 0 == --this._eventsCount ? this._events = new i : delete this._events[o], this;
							var s = this._events[o];
							if (s.fn) s.fn !== t || a && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new i : delete this._events[o]);
							else {
								for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || a && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
								c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new i : delete this._events[o]
							}
							return this
						}, o.prototype.removeAllListeners = function(e) {
							var t;
							return e ? (t = r ? r + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new i : delete this._events[t])) : (this._events = new i, this._eventsCount = 0), this
						}, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
							return this
						}, o.prefixed = r, o.EventEmitter = o, void 0 !== e && (e.exports = o)
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.matchText = t.matchSpacing = t.matchNewline = t.matchBlot = t.matchAttributor = t.default = void 0;
						var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
								return typeof e
							} : function(e) {
								return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
							},
							i = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
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
											!r && s.return && s.return()
										} finally {
											if (i) throw a
										}
									}
									return n
								}(e, t);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							},
							a = function() {
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
							o = v(n(3)),
							s = v(n(2)),
							u = v(n(0)),
							c = v(n(5)),
							l = v(n(10)),
							f = v(n(9)),
							d = n(36),
							h = n(37),
							p = v(n(13)),
							_ = n(26),
							m = n(38),
							b = n(39),
							g = n(40);

						function v(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function y(e, t, n) {
							return t in e ? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = n, e
						}
						var A = (0, l.default)("quill:clipboard"),
							S = "__ql-matcher",
							w = [
								[Node.TEXT_NODE, B],
								[Node.TEXT_NODE, L],
								["br", function(e, t) {
									return O(t, "\n") || t.insert("\n"), t
								}],
								[Node.ELEMENT_NODE, L],
								[Node.ELEMENT_NODE, I],
								[Node.ELEMENT_NODE, D],
								[Node.ELEMENT_NODE, M],
								[Node.ELEMENT_NODE, function(e, t) {
									var n = {},
										r = e.style || {};
									return r.fontStyle && "italic" === k(e).fontStyle && (n.italic = !0), r.fontWeight && (k(e).fontWeight.startsWith("bold") || parseInt(k(e).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (t = $(t, n)), parseFloat(r.textIndent || 0) > 0 && (t = (new s.default).insert("\t").concat(t)), t
								}],
								["li", function(e, t) {
									var n = u.default.query(e);
									if (null == n || "list-item" !== n.blotName || !O(t, "\n")) return t;
									var r = -1,
										i = e.parentNode;
									for (; !i.classList.contains("ql-clipboard");) "list" === (u.default.query(i) || {}).blotName && (r += 1), i = i.parentNode;
									return r <= 0 ? t : t.compose((new s.default).retain(t.length() - 1).retain(1, {
										indent: r
									}))
								}],
								["b", P.bind(P, "bold")],
								["i", P.bind(P, "italic")],
								["style", function() {
									return new s.default
								}]
							],
							E = [d.AlignAttribute, m.DirectionAttribute].reduce((function(e, t) {
								return e[t.keyName] = t, e
							}), {}),
							T = [d.AlignStyle, h.BackgroundStyle, _.ColorStyle, m.DirectionStyle, b.FontStyle, g.SizeStyle].reduce((function(e, t) {
								return e[t.keyName] = t, e
							}), {}),
							C = function(e) {
								function t(e, n) {
									! function(e, t) {
										if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
									}(this, t);
									var r = function(e, t) {
										if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return !t || "object" != typeof t && "function" != typeof t ? e : t
									}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], w.concat(r.options.matchers).forEach((function(e) {
										var t = i(e, 2),
											a = t[0],
											o = t[1];
										(n.matchVisual || o !== D) && r.addMatcher(a, o)
									})), r
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
								}(t, e), a(t, [{
									key: "addMatcher",
									value: function(e, t) {
										this.matchers.push([e, t])
									}
								}, {
									key: "convert",
									value: function(e) {
										if ("string" == typeof e) return this.container.innerHTML = e.replace(/\>\r?\n +\</g, "><"), this.convert();
										var t = this.quill.getFormat(this.quill.selection.savedRange.index);
										if (t[p.default.blotName]) {
											var n = this.container.innerText;
											return this.container.innerHTML = "", (new s.default).insert(n, y({}, p.default.blotName, t[p.default.blotName]))
										}
										var r = this.prepareMatching(),
											a = i(r, 2),
											o = a[0],
											u = a[1],
											c = function e(t, n, r) {
												return t.nodeType === t.TEXT_NODE ? r.reduce((function(e, n) {
													return n(t, e)
												}), new s.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], (function(i, a) {
													var o = e(a, n, r);
													return a.nodeType === t.ELEMENT_NODE && (o = n.reduce((function(e, t) {
														return t(a, e)
													}), o), o = (a[S] || []).reduce((function(e, t) {
														return t(a, e)
													}), o)), i.concat(o)
												}), new s.default) : new s.default
											}(this.container, o, u);
										return O(c, "\n") && null == c.ops[c.ops.length - 1].attributes && (c = c.compose((new s.default).retain(c.length() - 1).delete(1))), A.log("convert", this.container.innerHTML, c), this.container.innerHTML = "", c
									}
								}, {
									key: "dangerouslyPasteHTML",
									value: function(e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.sources.API;
										if ("string" == typeof e) this.quill.setContents(this.convert(e), t), this.quill.setSelection(0, c.default.sources.SILENT);
										else {
											var r = this.convert(t);
											this.quill.updateContents((new s.default).retain(e).concat(r), n), this.quill.setSelection(e + r.length(), c.default.sources.SILENT)
										}
									}
								}, {
									key: "onPaste",
									value: function(e) {
										var t = this;
										if (!e.defaultPrevented && this.quill.isEnabled()) {
											var n = this.quill.getSelection(),
												r = (new s.default).retain(n.index),
												i = this.quill.scrollingContainer.scrollTop;
											this.container.focus(), this.quill.selection.update(c.default.sources.SILENT), setTimeout((function() {
												r = r.concat(t.convert()).delete(n.length), t.quill.updateContents(r, c.default.sources.USER), t.quill.setSelection(r.length() - n.length, c.default.sources.SILENT), t.quill.scrollingContainer.scrollTop = i, t.quill.focus()
											}), 1)
										}
									}
								}, {
									key: "prepareMatching",
									value: function() {
										var e = this,
											t = [],
											n = [];
										return this.matchers.forEach((function(r) {
											var a = i(r, 2),
												o = a[0],
												s = a[1];
											switch (o) {
												case Node.TEXT_NODE:
													n.push(s);
													break;
												case Node.ELEMENT_NODE:
													t.push(s);
													break;
												default:
													[].forEach.call(e.container.querySelectorAll(o), (function(e) {
														e[S] = e[S] || [], e[S].push(s)
													}))
											}
										})), [t, n]
									}
								}]), t
							}(f.default);

						function $(e, t, n) {
							return "object" === (void 0 === t ? "undefined" : r(t)) ? Object.keys(t).reduce((function(e, n) {
								return $(e, n, t[n])
							}), e) : e.reduce((function(e, r) {
								return r.attributes && r.attributes[t] ? e.push(r) : e.insert(r.insert, (0, o.default)({}, y({}, t, n), r.attributes))
							}), new s.default)
						}

						function k(e) {
							if (e.nodeType !== Node.ELEMENT_NODE) return {};
							var t = "__ql-computed-style";
							return e[t] || (e[t] = window.getComputedStyle(e))
						}

						function O(e, t) {
							for (var n = "", r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
								var i = e.ops[r];
								if ("string" != typeof i.insert) break;
								n = i.insert + n
							}
							return n.slice(-1 * t.length) === t
						}

						function x(e) {
							if (0 === e.childNodes.length) return !1;
							var t = k(e);
							return ["block", "list-item"].indexOf(t.display) > -1
						}

						function P(e, t, n) {
							return $(n, e, !0)
						}

						function M(e, t) {
							var n = u.default.Attributor.Attribute.keys(e),
								r = u.default.Attributor.Class.keys(e),
								i = u.default.Attributor.Style.keys(e),
								a = {};
							return n.concat(r).concat(i).forEach((function(t) {
								var n = u.default.query(t, u.default.Scope.ATTRIBUTE);
								null != n && (a[n.attrName] = n.value(e), a[n.attrName]) || (null == (n = E[t]) || n.attrName !== t && n.keyName !== t || (a[n.attrName] = n.value(e) || void 0), null == (n = T[t]) || n.attrName !== t && n.keyName !== t || (n = T[t], a[n.attrName] = n.value(e) || void 0))
							})), Object.keys(a).length > 0 && (t = $(t, a)), t
						}

						function I(e, t) {
							var n = u.default.query(e);
							if (null == n) return t;
							if (n.prototype instanceof u.default.Embed) {
								var r = {},
									i = n.value(e);
								null != i && (r[n.blotName] = i, t = (new s.default).insert(r, n.formats(e)))
							} else "function" == typeof n.formats && (t = $(t, n.blotName, n.formats(e)));
							return t
						}

						function L(e, t) {
							return O(t, "\n") || (x(e) || t.length() > 0 && e.nextSibling && x(e.nextSibling)) && t.insert("\n"), t
						}

						function D(e, t) {
							if (x(e) && null != e.nextElementSibling && !O(t, "\n\n")) {
								var n = e.offsetHeight + parseFloat(k(e).marginTop) + parseFloat(k(e).marginBottom);
								e.nextElementSibling.offsetTop > e.offsetTop + 1.5 * n && t.insert("\n")
							}
							return t
						}

						function B(e, t) {
							var n = e.data;
							if ("O:P" === e.parentNode.tagName) return t.insert(n.trim());
							if (0 === n.trim().length && e.parentNode.classList.contains("ql-clipboard")) return t;
							if (!k(e.parentNode).whiteSpace.startsWith("pre")) {
								var r = function(e, t) {
									return (t = t.replace(/[^\u00a0]/g, "")).length < 1 && e ? " " : t
								};
								n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == e.previousSibling && x(e.parentNode) || null != e.previousSibling && x(e.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == e.nextSibling && x(e.parentNode) || null != e.nextSibling && x(e.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
							}
							return t.insert(n)
						}
						C.DEFAULTS = {
							matchers: [],
							matchVisual: !0
						}, t.default = C, t.matchAttributor = M, t.matchBlot = I, t.matchNewline = L, t.matchSpacing = D, t.matchText = B
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
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
							i = function e(t, n, r) {
								null === t && (t = Function.prototype);
								var i = Object.getOwnPropertyDescriptor(t, n);
								if (void 0 === i) {
									var a = Object.getPrototypeOf(t);
									return null === a ? void 0 : e(a, n, r)
								}
								if ("value" in i) return i.value;
								var o = i.get;
								return void 0 !== o ? o.call(r) : void 0
							};

						function a(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function o(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var s = function(e) {
							function t() {
								return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
							}(t, e), r(t, [{
								key: "optimize",
								value: function(e) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
								}
							}], [{
								key: "create",
								value: function() {
									return i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this)
								}
							}, {
								key: "formats",
								value: function() {
									return !0
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(6)).default);
						s.blotName = "bold", s.tagName = ["STRONG", "B"], t.default = s
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.addControls = t.default = void 0;
						var r = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
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
											!r && s.return && s.return()
										} finally {
											if (i) throw a
										}
									}
									return n
								}(e, t);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							},
							i = function() {
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
							a = l(n(2)),
							o = l(n(0)),
							s = l(n(5)),
							u = l(n(10)),
							c = l(n(9));

						function l(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function f(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var d = (0, u.default)("quill:toolbar"),
							h = function(e) {
								function t(e, n) {
									! function(e, t) {
										if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
									}(this, t);
									var i, a = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									if (Array.isArray(a.options.container)) {
										var o = document.createElement("div");
										_(o, a.options.container), e.container.parentNode.insertBefore(o, e.container), a.container = o
									} else "string" == typeof a.options.container ? a.container = document.querySelector(a.options.container) : a.container = a.options.container;
									return a.container instanceof HTMLElement ? (a.container.classList.add("ql-toolbar"), a.controls = [], a.handlers = {}, Object.keys(a.options.handlers).forEach((function(e) {
										a.addHandler(e, a.options.handlers[e])
									})), [].forEach.call(a.container.querySelectorAll("button, select"), (function(e) {
										a.attach(e)
									})), a.quill.on(s.default.events.EDITOR_CHANGE, (function(e, t) {
										e === s.default.events.SELECTION_CHANGE && a.update(t)
									})), a.quill.on(s.default.events.SCROLL_OPTIMIZE, (function() {
										var e = a.quill.selection.getRange(),
											t = r(e, 1)[0];
										a.update(t)
									})), a) : (i = d.error("Container required for toolbar", a.options), f(a, i))
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
								}(t, e), i(t, [{
									key: "addHandler",
									value: function(e, t) {
										this.handlers[e] = t
									}
								}, {
									key: "attach",
									value: function(e) {
										var t = this,
											n = [].find.call(e.classList, (function(e) {
												return 0 === e.indexOf("ql-")
											}));
										if (n) {
											if (n = n.slice("ql-".length), "BUTTON" === e.tagName && e.setAttribute("type", "button"), null == this.handlers[n]) {
												if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void d.warn("ignoring attaching to disabled format", n, e);
												if (null == o.default.query(n)) return void d.warn("ignoring attaching to nonexistent format", n, e)
											}
											var i = "SELECT" === e.tagName ? "change" : "click";
											e.addEventListener(i, (function(i) {
												var u = void 0;
												if ("SELECT" === e.tagName) {
													if (e.selectedIndex < 0) return;
													var c = e.options[e.selectedIndex];
													u = !c.hasAttribute("selected") && (c.value || !1)
												} else u = !e.classList.contains("ql-active") && (e.value || !e.hasAttribute("value")), i.preventDefault();
												t.quill.focus();
												var l = t.quill.selection.getRange(),
													f = r(l, 1)[0];
												if (null != t.handlers[n]) t.handlers[n].call(t, u);
												else if (o.default.query(n).prototype instanceof o.default.Embed) {
													if (!(u = prompt("Enter " + n))) return;
													t.quill.updateContents((new a.default).retain(f.index).delete(f.length).insert(function(e, t, n) {
														return t in e ? Object.defineProperty(e, t, {
															value: n,
															enumerable: !0,
															configurable: !0,
															writable: !0
														}) : e[t] = n, e
													}({}, n, u)), s.default.sources.USER)
												} else t.quill.format(n, u, s.default.sources.USER);
												t.update(f)
											})), this.controls.push([n, e])
										}
									}
								}, {
									key: "update",
									value: function(e) {
										var t = null == e ? {} : this.quill.getFormat(e);
										this.controls.forEach((function(n) {
											var i = r(n, 2),
												a = i[0],
												o = i[1];
											if ("SELECT" === o.tagName) {
												var s = void 0;
												if (null == e) s = null;
												else if (null == t[a]) s = o.querySelector("option[selected]");
												else if (!Array.isArray(t[a])) {
													var u = t[a];
													"string" == typeof u && (u = u.replace(/\"/g, '\\"')), s = o.querySelector('option[value="' + u + '"]')
												}
												null == s ? (o.value = "", o.selectedIndex = -1) : s.selected = !0
											} else if (null == e) o.classList.remove("ql-active");
											else if (o.hasAttribute("value")) {
												var c = t[a] === o.getAttribute("value") || null != t[a] && t[a].toString() === o.getAttribute("value") || null == t[a] && !o.getAttribute("value");
												o.classList.toggle("ql-active", c)
											} else o.classList.toggle("ql-active", null != t[a])
										}))
									}
								}]), t
							}(c.default);

						function p(e, t, n) {
							var r = document.createElement("button");
							r.setAttribute("type", "button"), r.classList.add("ql-" + t), null != n && (r.value = n), e.appendChild(r)
						}

						function _(e, t) {
							Array.isArray(t[0]) || (t = [t]), t.forEach((function(t) {
								var n = document.createElement("span");
								n.classList.add("ql-formats"), t.forEach((function(e) {
									if ("string" == typeof e) p(n, e);
									else {
										var t = Object.keys(e)[0],
											r = e[t];
										Array.isArray(r) ? function(e, t, n) {
											var r = document.createElement("select");
											r.classList.add("ql-" + t), n.forEach((function(e) {
												var t = document.createElement("option");
												!1 !== e ? t.setAttribute("value", e) : t.setAttribute("selected", "selected"), r.appendChild(t)
											})), e.appendChild(r)
										}(n, t, r) : p(n, t, r)
									}
								})), e.appendChild(n)
							}))
						}
						h.DEFAULTS = {}, h.DEFAULTS = {
							container: null,
							handlers: {
								clean: function() {
									var e = this,
										t = this.quill.getSelection();
									if (null != t)
										if (0 == t.length) {
											var n = this.quill.getFormat();
											Object.keys(n).forEach((function(t) {
												null != o.default.query(t, o.default.Scope.INLINE) && e.quill.format(t, !1)
											}))
										} else this.quill.removeFormat(t, s.default.sources.USER)
								},
								direction: function(e) {
									var t = this.quill.getFormat().align;
									"rtl" === e && null == t ? this.quill.format("align", "right", s.default.sources.USER) : e || "right" !== t || this.quill.format("align", !1, s.default.sources.USER), this.quill.format("direction", e, s.default.sources.USER)
								},
								indent: function(e) {
									var t = this.quill.getSelection(),
										n = this.quill.getFormat(t),
										r = parseInt(n.indent || 0);
									if ("+1" === e || "-1" === e) {
										var i = "+1" === e ? 1 : -1;
										"rtl" === n.direction && (i *= -1), this.quill.format("indent", r + i, s.default.sources.USER)
									}
								},
								link: function(e) {
									!0 === e && (e = prompt("Enter link URL:")), this.quill.format("link", e, s.default.sources.USER)
								},
								list: function(e) {
									var t = this.quill.getSelection(),
										n = this.quill.getFormat(t);
									"check" === e ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, s.default.sources.USER) : this.quill.format("list", "unchecked", s.default.sources.USER) : this.quill.format("list", e, s.default.sources.USER)
								}
							}
						}, t.default = h, t.addControls = _
					}, function(e, t) {
						e.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
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
							i = function e(t, n, r) {
								null === t && (t = Function.prototype);
								var i = Object.getOwnPropertyDescriptor(t, n);
								if (void 0 === i) {
									var a = Object.getPrototypeOf(t);
									return null === a ? void 0 : e(a, n, r)
								}
								if ("value" in i) return i.value;
								var o = i.get;
								return void 0 !== o ? o.call(r) : void 0
							};
						var a = function(e) {
							function t(e, n) {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var r = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
								return r.label.innerHTML = n, r.container.classList.add("ql-color-picker"), [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach((function(e) {
									e.classList.add("ql-primary")
								})), r
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
							}(t, e), r(t, [{
								key: "buildItem",
								value: function(e) {
									var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "buildItem", this).call(this, e);
									return n.style.backgroundColor = e.getAttribute("value") || "", n
								}
							}, {
								key: "selectItem",
								value: function(e, n) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "selectItem", this).call(this, e, n);
									var r = this.label.querySelector(".ql-color-label"),
										a = e && e.getAttribute("data-value") || "";
									r && ("line" === r.tagName ? r.style.stroke = a : r.style.fill = a)
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(28)).default);
						t.default = a
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
								}
							}
							return function(t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t
							}
						}();
						var i = function(e) {
							function t(e, n) {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var r = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
								return r.container.classList.add("ql-icon-picker"), [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), (function(e) {
									e.innerHTML = n[e.getAttribute("data-value") || ""]
								})), r.defaultItem = r.container.querySelector(".ql-selected"), r.selectItem(r.defaultItem), r
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
							}(t, e), r(t, [{
								key: "selectItem",
								value: function(e, n) {
									(function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									})(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "selectItem", this).call(this, e, n), e = e || this.defaultItem, this.label.innerHTML = e.innerHTML
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(28)).default);
						t.default = i
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
								}
							}
							return function(t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t
							}
						}();
						var i = function() {
							function e(t, n) {
								var r = this;
								(function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								})(this, e), this.quill = t, this.boundsContainer = n || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", (function() {
									r.root.style.marginTop = -1 * r.quill.root.scrollTop + "px"
								})), this.hide()
							}
							return r(e, [{
								key: "hide",
								value: function() {
									this.root.classList.add("ql-hidden")
								}
							}, {
								key: "position",
								value: function(e) {
									var t = e.left + e.width / 2 - this.root.offsetWidth / 2,
										n = e.bottom + this.quill.root.scrollTop;
									this.root.style.left = t + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
									var r = this.boundsContainer.getBoundingClientRect(),
										i = this.root.getBoundingClientRect(),
										a = 0;
									if (i.right > r.right && (a = r.right - i.right, this.root.style.left = t + a + "px"), i.left < r.left && (a = r.left - i.left, this.root.style.left = t + a + "px"), i.bottom > r.bottom) {
										var o = i.bottom - i.top,
											s = e.bottom - e.top + o;
										this.root.style.top = n - s + "px", this.root.classList.add("ql-flip")
									}
									return a
								}
							}, {
								key: "show",
								value: function() {
									this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
								}
							}]), e
						}();
						t.default = i
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
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
											!r && s.return && s.return()
										} finally {
											if (i) throw a
										}
									}
									return n
								}(e, t);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							},
							i = function e(t, n, r) {
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
							a = function() {
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
							o = h(n(3)),
							s = h(n(8)),
							u = n(43),
							c = h(u),
							l = h(n(27)),
							f = n(15),
							d = h(n(41));

						function h(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function p(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function _(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}

						function m(e, t) {
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
						var b = [
								[{
									header: ["1", "2", "3", !1]
								}],
								["bold", "italic", "underline", "link"],
								[{
									list: "ordered"
								}, {
									list: "bullet"
								}],
								["clean"]
							],
							g = function(e) {
								function t(e, n) {
									p(this, t), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = b);
									var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.quill.container.classList.add("ql-snow"), r
								}
								return m(t, e), a(t, [{
									key: "extendToolbar",
									value: function(e) {
										e.container.classList.add("ql-snow"), this.buildButtons([].slice.call(e.container.querySelectorAll("button")), d.default), this.buildPickers([].slice.call(e.container.querySelectorAll("select")), d.default), this.tooltip = new v(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
											key: "K",
											shortKey: !0
										}, (function(t, n) {
											e.handlers.link.call(e, !n.format.link)
										}))
									}
								}]), t
							}(c.default);
						g.DEFAULTS = (0, o.default)(!0, {}, c.default.DEFAULTS, {
							modules: {
								toolbar: {
									handlers: {
										link: function(e) {
											if (e) {
												var t = this.quill.getSelection();
												if (null == t || 0 == t.length) return;
												var n = this.quill.getText(t);
												/^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n), this.quill.theme.tooltip.edit("link", n)
											} else this.quill.format("link", !1)
										}
									}
								}
							}
						});
						var v = function(e) {
							function t(e, n) {
								p(this, t);
								var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
								return r.preview = r.root.querySelector("a.ql-preview"), r
							}
							return m(t, e), a(t, [{
								key: "listen",
								value: function() {
									var e = this;
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", (function(t) {
										e.root.classList.contains("ql-editing") ? e.save() : e.edit("link", e.preview.textContent), t.preventDefault()
									})), this.root.querySelector("a.ql-remove").addEventListener("click", (function(t) {
										if (null != e.linkRange) {
											var n = e.linkRange;
											e.restoreFocus(), e.quill.formatText(n, "link", !1, s.default.sources.USER), delete e.linkRange
										}
										t.preventDefault(), e.hide()
									})), this.quill.on(s.default.events.SELECTION_CHANGE, (function(t, n, i) {
										if (null != t) {
											if (0 === t.length && i === s.default.sources.USER) {
												var a = e.quill.scroll.descendant(l.default, t.index),
													o = r(a, 2),
													u = o[0],
													c = o[1];
												if (null != u) {
													e.linkRange = new f.Range(t.index - c, u.length());
													var d = l.default.formats(u.domNode);
													return e.preview.textContent = d, e.preview.setAttribute("href", d), e.show(), void e.position(e.quill.getBounds(e.linkRange))
												}
											} else delete e.linkRange;
											e.hide()
										}
									}))
								}
							}, {
								key: "show",
								value: function() {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
								}
							}]), t
						}(u.BaseTooltip);
						v.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), t.default = g
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = D(n(29)),
							i = n(36),
							a = n(38),
							o = n(64),
							s = D(n(65)),
							u = D(n(66)),
							c = n(67),
							l = D(c),
							f = n(37),
							d = n(26),
							h = n(39),
							p = n(40),
							_ = D(n(56)),
							m = D(n(68)),
							b = D(n(27)),
							g = D(n(69)),
							v = D(n(70)),
							y = D(n(71)),
							A = D(n(72)),
							S = D(n(73)),
							w = n(13),
							E = D(w),
							T = D(n(74)),
							C = D(n(75)),
							$ = D(n(57)),
							k = D(n(41)),
							O = D(n(28)),
							x = D(n(59)),
							P = D(n(60)),
							M = D(n(61)),
							I = D(n(108)),
							L = D(n(62));

						function D(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						r.default.register({
							"attributors/attribute/direction": a.DirectionAttribute,
							"attributors/class/align": i.AlignClass,
							"attributors/class/background": f.BackgroundClass,
							"attributors/class/color": d.ColorClass,
							"attributors/class/direction": a.DirectionClass,
							"attributors/class/font": h.FontClass,
							"attributors/class/size": p.SizeClass,
							"attributors/style/align": i.AlignStyle,
							"attributors/style/background": f.BackgroundStyle,
							"attributors/style/color": d.ColorStyle,
							"attributors/style/direction": a.DirectionStyle,
							"attributors/style/font": h.FontStyle,
							"attributors/style/size": p.SizeStyle
						}, !0), r.default.register({
							"formats/align": i.AlignClass,
							"formats/direction": a.DirectionClass,
							"formats/indent": o.IndentClass,
							"formats/background": f.BackgroundStyle,
							"formats/color": d.ColorStyle,
							"formats/font": h.FontClass,
							"formats/size": p.SizeClass,
							"formats/blockquote": s.default,
							"formats/code-block": E.default,
							"formats/header": u.default,
							"formats/list": l.default,
							"formats/bold": _.default,
							"formats/code": w.Code,
							"formats/italic": m.default,
							"formats/link": b.default,
							"formats/script": g.default,
							"formats/strike": v.default,
							"formats/underline": y.default,
							"formats/image": A.default,
							"formats/video": S.default,
							"formats/list/item": c.ListItem,
							"modules/formula": T.default,
							"modules/syntax": C.default,
							"modules/toolbar": $.default,
							"themes/bubble": I.default,
							"themes/snow": L.default,
							"ui/icons": k.default,
							"ui/picker": O.default,
							"ui/icon-picker": P.default,
							"ui/color-picker": x.default,
							"ui/tooltip": M.default
						}, !0), t.default = r.default
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.IndentClass = void 0;
						var r = function() {
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
							i = function e(t, n, r) {
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
							a = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(0));

						function o(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function s(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var u = new(function(e) {
							function t() {
								return o(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
							}(t, e), r(t, [{
								key: "add",
								value: function(e, n) {
									if ("+1" === n || "-1" === n) {
										var r = this.value(e) || 0;
										n = "+1" === n ? r + 1 : r - 1
									}
									return 0 === n ? (this.remove(e), !0) : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "add", this).call(this, e, n)
								}
							}, {
								key: "canAdd",
								value: function(e, n) {
									return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, n) || i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, parseInt(n))
								}
							}, {
								key: "value",
								value: function(e) {
									return parseInt(i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e)) || void 0
								}
							}]), t
						}(a.default.Attributor.Class))("indent", "ql-indent", {
							scope: a.default.Scope.BLOCK,
							whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
						});
						t.IndentClass = u
					}, function(e, t, n) {
						"use strict";

						function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function i(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(4)).default);
						a.blotName = "blockquote", a.tagName = "blockquote", t.default = a
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
								}
							}
							return function(t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t
							}
						}();

						function i(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function a(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var o = function(e) {
							function t() {
								return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
							}(t, e), r(t, null, [{
								key: "formats",
								value: function(e) {
									return this.tagName.indexOf(e.tagName) + 1
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(4)).default);
						o.blotName = "header", o.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], t.default = o
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.ListItem = void 0;
						var r = function() {
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
							i = function e(t, n, r) {
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
							a = u(n(0)),
							o = u(n(4)),
							s = u(n(25));

						function u(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function c(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function l(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}

						function f(e, t) {
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
						var d = function(e) {
							function t() {
								return c(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return f(t, e), r(t, [{
								key: "format",
								value: function(e, n) {
									e !== h.blotName || n ? i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n) : this.replaceWith(a.default.create(this.statics.scope))
								}
							}, {
								key: "remove",
								value: function() {
									null == this.prev && null == this.next ? this.parent.remove() : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this)
								}
							}, {
								key: "replaceWith",
								value: function(e, n) {
									return this.parent.isolate(this.offset(this.parent), this.length()), e === this.parent.statics.blotName ? (this.parent.replaceWith(e, n), this) : (this.parent.unwrap(), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replaceWith", this).call(this, e, n))
								}
							}], [{
								key: "formats",
								value: function(e) {
									return e.tagName === this.tagName ? void 0 : i(t.__proto__ || Object.getPrototypeOf(t), "formats", this).call(this, e)
								}
							}]), t
						}(o.default);
						d.blotName = "list-item", d.tagName = "LI";
						var h = function(e) {
							function t(e) {
								c(this, t);
								var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
									r = function(t) {
										if (t.target.parentNode === e) {
											var r = n.statics.formats(e),
												i = a.default.find(t.target);
											"checked" === r ? i.format("list", "unchecked") : "unchecked" === r && i.format("list", "checked")
										}
									};
								return e.addEventListener("touchstart", r), e.addEventListener("mousedown", r), n
							}
							return f(t, e), r(t, null, [{
								key: "create",
								value: function(e) {
									var n = "ordered" === e ? "OL" : "UL",
										r = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, n);
									return "checked" !== e && "unchecked" !== e || r.setAttribute("data-checked", "checked" === e), r
								}
							}, {
								key: "formats",
								value: function(e) {
									return "OL" === e.tagName ? "ordered" : "UL" === e.tagName ? e.hasAttribute("data-checked") ? "true" === e.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
								}
							}]), r(t, [{
								key: "format",
								value: function(e, t) {
									this.children.length > 0 && this.children.tail.format(e, t)
								}
							}, {
								key: "formats",
								value: function() {
									return function(e, t, n) {
										return t in e ? Object.defineProperty(e, t, {
											value: n,
											enumerable: !0,
											configurable: !0,
											writable: !0
										}) : e[t] = n, e
									}({}, this.statics.blotName, this.statics.formats(this.domNode))
								}
							}, {
								key: "insertBefore",
								value: function(e, n) {
									if (e instanceof d) i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n);
									else {
										var r = null == n ? this.length() : n.offset(this),
											a = this.split(r);
										a.parent.insertBefore(e, a)
									}
								}
							}, {
								key: "optimize",
								value: function(e) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
									var n = this.next;
									null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
								}
							}, {
								key: "replace",
								value: function(e) {
									if (e.statics.blotName !== this.statics.blotName) {
										var n = a.default.create(this.statics.defaultChild);
										e.moveChildren(n), this.appendChild(n)
									}
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e)
								}
							}]), t
						}(s.default);
						h.blotName = "list", h.scope = a.default.Scope.BLOCK_BLOT, h.tagName = ["OL", "UL"], h.defaultChild = "list-item", h.allowedChildren = [d], t.ListItem = d, t.default = h
					}, function(e, t, n) {
						"use strict";

						function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function i(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(56)).default);
						a.blotName = "italic", a.tagName = ["EM", "I"], t.default = a
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
							function e(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
								}
							}
							return function(t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t
							}
						}();

						function i(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function a(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var o = function(e) {
							function t() {
								return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
							}(t, e), r(t, null, [{
								key: "create",
								value: function(e) {
									return "super" === e ? document.createElement("sup") : "sub" === e ? document.createElement("sub") : function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									}(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e)
								}
							}, {
								key: "formats",
								value: function(e) {
									return "SUB" === e.tagName ? "sub" : "SUP" === e.tagName ? "super" : void 0
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(6)).default);
						o.blotName = "script", o.tagName = ["SUB", "SUP"], t.default = o
					}, function(e, t, n) {
						"use strict";

						function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function i(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(6)).default);
						a.blotName = "strike", a.tagName = "S", t.default = a
					}, function(e, t, n) {
						"use strict";

						function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function i(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(6)).default);
						a.blotName = "underline", a.tagName = "U", t.default = a
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
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
							i = function e(t, n, r) {
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
							a = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(0)),
							o = n(27);

						function s(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function u(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var c = ["alt", "height", "width"],
							l = function(e) {
								function t() {
									return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
								}(t, e), r(t, [{
									key: "format",
									value: function(e, n) {
										c.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
									}
								}], [{
									key: "create",
									value: function(e) {
										var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
										return "string" == typeof e && n.setAttribute("src", this.sanitize(e)), n
									}
								}, {
									key: "formats",
									value: function(e) {
										return c.reduce((function(t, n) {
											return e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t
										}), {})
									}
								}, {
									key: "match",
									value: function(e) {
										return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e)
									}
								}, {
									key: "sanitize",
									value: function(e) {
										return (0, o.sanitize)(e, ["http", "https", "data"]) ? e : "//:0"
									}
								}, {
									key: "value",
									value: function(e) {
										return e.getAttribute("src")
									}
								}]), t
							}(a.default.Embed);
						l.blotName = "image", l.tagName = "IMG", t.default = l
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
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
							i = function e(t, n, r) {
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
							a = n(4),
							o = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(27));

						function s(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function u(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var c = ["height", "width"],
							l = function(e) {
								function t() {
									return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
								}(t, e), r(t, [{
									key: "format",
									value: function(e, n) {
										c.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
									}
								}], [{
									key: "create",
									value: function(e) {
										var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
										return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(e)), n
									}
								}, {
									key: "formats",
									value: function(e) {
										return c.reduce((function(t, n) {
											return e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t
										}), {})
									}
								}, {
									key: "sanitize",
									value: function(e) {
										return o.default.sanitize(e)
									}
								}, {
									key: "value",
									value: function(e) {
										return e.getAttribute("src")
									}
								}]), t
							}(a.BlockEmbed);
						l.blotName = "video", l.className = "ql-video", l.tagName = "IFRAME", t.default = l
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.FormulaBlot = void 0;
						var r = function() {
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
							i = s(n(35)),
							a = s(n(5)),
							o = s(n(9));

						function s(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function u(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function c(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}

						function l(e, t) {
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
						var f = function(e) {
							function t() {
								return u(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return l(t, e), r(t, null, [{
								key: "create",
								value: function(e) {
									var n = function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									}(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
									return "string" == typeof e && (window.katex.render(e, n, {
										throwOnError: !1,
										errorColor: "#f00"
									}), n.setAttribute("data-value", e)), n
								}
							}, {
								key: "value",
								value: function(e) {
									return e.getAttribute("data-value")
								}
							}]), t
						}(i.default);
						f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";
						var d = function(e) {
							function t() {
								u(this, t);
								var e = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
								if (null == window.katex) throw new Error("Formula module requires KaTeX.");
								return e
							}
							return l(t, e), r(t, null, [{
								key: "register",
								value: function() {
									a.default.register(f, !0)
								}
							}]), t
						}(o.default);
						t.FormulaBlot = f, t.default = d
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.CodeToken = t.CodeBlock = void 0;
						var r = function() {
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
							i = s(n(0)),
							a = s(n(5)),
							o = s(n(9));

						function s(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function u(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function c(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}

						function l(e, t) {
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
						var f = function(e) {
							function t() {
								return u(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return l(t, e), r(t, [{
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
						}(s(n(13)).default);
						f.className = "ql-syntax";
						var d = new i.default.Attributor.Class("token", "hljs", {
								scope: i.default.Scope.INLINE
							}),
							h = function(e) {
								function t(e, n) {
									u(this, t);
									var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
									var i = null;
									return r.quill.on(a.default.events.SCROLL_OPTIMIZE, (function() {
										clearTimeout(i), i = setTimeout((function() {
											r.highlight(), i = null
										}), r.options.interval)
									})), r.highlight(), r
								}
								return l(t, e), r(t, null, [{
									key: "register",
									value: function() {
										a.default.register(d, !0), a.default.register(f, !0)
									}
								}]), r(t, [{
									key: "highlight",
									value: function() {
										var e = this;
										if (!this.quill.selection.composing) {
											this.quill.update(a.default.sources.USER);
											var t = this.quill.getSelection();
											this.quill.scroll.descendants(f).forEach((function(t) {
												t.highlight(e.options.highlight)
											})), this.quill.update(a.default.sources.SILENT), null != t && this.quill.setSelection(t, a.default.sources.SILENT)
										}
									}
								}]), t
							}(o.default);
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
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.BubbleTooltip = void 0;
						var r = function e(t, n, r) {
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
							i = function() {
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
							a = f(n(3)),
							o = f(n(8)),
							s = n(43),
							u = f(s),
							c = n(15),
							l = f(n(41));

						function f(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function d(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function h(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}

						function p(e, t) {
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
						var _ = [
								["bold", "italic", "link"],
								[{
									header: 1
								}, {
									header: 2
								}, "blockquote"]
							],
							m = function(e) {
								function t(e, n) {
									d(this, t), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = _);
									var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.quill.container.classList.add("ql-bubble"), r
								}
								return p(t, e), i(t, [{
									key: "extendToolbar",
									value: function(e) {
										this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(e.container), this.buildButtons([].slice.call(e.container.querySelectorAll("button")), l.default), this.buildPickers([].slice.call(e.container.querySelectorAll("select")), l.default)
									}
								}]), t
							}(u.default);
						m.DEFAULTS = (0, a.default)(!0, {}, u.default.DEFAULTS, {
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
								d(this, t);
								var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
								return r.quill.on(o.default.events.EDITOR_CHANGE, (function(e, t, n, i) {
									if (e === o.default.events.SELECTION_CHANGE)
										if (null != t && t.length > 0 && i === o.default.sources.USER) {
											r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
											var a = r.quill.getLines(t.index, t.length);
											if (1 === a.length) r.position(r.quill.getBounds(t));
											else {
												var s = a[a.length - 1],
													u = r.quill.getIndex(s),
													l = Math.min(s.length() - 1, t.index + t.length - u),
													f = r.quill.getBounds(new c.Range(u, l));
												r.position(f)
											}
										} else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
								})), r
							}
							return p(t, e), i(t, [{
								key: "listen",
								value: function() {
									var e = this;
									r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", (function() {
										e.root.classList.remove("ql-editing")
									})), this.quill.on(o.default.events.SCROLL_OPTIMIZE, (function() {
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
									var n = r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "position", this).call(this, e),
										i = this.root.querySelector(".ql-tooltip-arrow");
									if (i.style.marginLeft = "", 0 === n) return n;
									i.style.marginLeft = -1 * n - i.offsetWidth / 2 + "px"
								}
							}]), t
						}(s.BaseTooltip);
						b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), t.BubbleTooltip = b, t.default = m
					}, function(e, t, n) {
						e.exports = n(63)
					}]).default
				}))
			}).call(this, n("b639").Buffer)
		},
		"938d": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return i
				}));
				var r = function(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							r = void 0 !== e && e ? Object({
								NODE_ENV: "production",
								VUE_APP_SOCKETIO_SERVER: "",
								VUE_APP_CHARTING_LIBRARY: "/tradingview/",
								VUE_APP_GOOGLE_ANALYTICS: "G-YP9F2LR1HR",
								BASE_URL: "https://cdn.minervini.com/static/dist/"
							}) || !1 : {};
						return t ? r[t] || n : r
					},
					i = function() {
						return r("BOOTSTRAP_VUE_NO_WARN") || "production" === r("NODE_ENV")
					}
			}).call(this, n("4362"))
		},
		9451: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ImageLoader = void 0;
			var r = n("571d"),
				i = function() {
					function e() {
						this.state = {}
					}
					return e.prototype.load = function(e, t) {
						var n = this;
						if (this.state[e]) {
							var i = this.state[e];
							i.loadedCallback = t, i.loaded && this.callLoadedCallback(i)
						} else {
							var a = {
								url: e,
								image: new r.DOM("img", {}),
								loadedCallback: t,
								loaded: !1,
								width: 0,
								height: 0
							};
							this.state[e] = a, a.image.on("load", (function(e) {
								a.loaded = !0, a.width = a.image.get(0).width, a.height = a.image.get(0).height, n.callLoadedCallback(a)
							})), a.image.attr("src", a.url)
						}
					}, e.prototype.callLoadedCallback = function(e) {
						e.loadedCallback(e.url, e.width, e.height)
					}, e
				}();
			t.ImageLoader = i
		},
		"94a0": function(e, t, n) {
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
			}), t.SettingsPanelPageOpenButton = void 0;
			var i = n("721c"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-settingspanelpageopenbutton",
							text: a.i18n.getLocalizer("open"),
							role: "menuitem"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.getDomElement().attr("aria-haspopup", "true"), this.getDomElement().attr("aria-owns", this.config.targetPage.getConfig().id), this.onClick.subscribe((function() {
							r.pushTargetPage()
						}))
					}, t
				}(i.SettingsPanelPageNavigatorButton);
			t.SettingsPanelPageOpenButton = o
		},
		"94ac": function(e, t, n) {
			const r = n("da92");
			e.exports = (e, t) => new r(e, t), e.exports.Socket = r, e.exports.protocol = r.protocol, e.exports.Transport = n("19b7"), e.exports.transports = n("6a44"), e.exports.parser = n("2a85")
		},
		"94ca": function(e, t, n) {
			var r = n("d039"),
				i = /#|\.prototype\./,
				a = function(e, t) {
					var n = s[o(e)];
					return n == c || n != u && ("function" == typeof t ? r(t) : !!t)
				},
				o = a.normalize = function(e) {
					return String(e).replace(i, ".").toLowerCase()
				},
				s = a.data = {},
				u = a.NATIVE = "N",
				c = a.POLYFILL = "P";
			e.exports = a
		},
		"94d9": function(e, t, n) {
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
			}), t.BackgroundColorSelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingsbackgroundcolorselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("white", a.i18n.getLocalizer("colors.white")), this.addItem("black", a.i18n.getLocalizer("colors.black")), this.addItem("red", a.i18n.getLocalizer("colors.red")), this.addItem("green", a.i18n.getLocalizer("colors.green")), this.addItem("blue", a.i18n.getLocalizer("colors.blue")), this.addItem("cyan", a.i18n.getLocalizer("colors.cyan")), this.addItem("yellow", a.i18n.getLocalizer("colors.yellow")), this.addItem("magenta", a.i18n.getLocalizer("colors.magenta"));
						var i = function() {
							r.settingsManager.backgroundColor.isSet() && r.settingsManager.backgroundOpacity.isSet() ? r.toggleOverlayClass("bgcolor-" + r.settingsManager.backgroundColor.value + r.settingsManager.backgroundOpacity.value) : r.toggleOverlayClass(null)
						};
						this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.backgroundColor.value = t
						})), this.settingsManager.backgroundColor.onChanged.subscribe((function(e, t) {
							r.settingsManager.backgroundColor.isSet() ? r.settingsManager.backgroundOpacity.isSet() || (r.settingsManager.backgroundOpacity.value = "100") : r.settingsManager.backgroundOpacity.clear(), r.selectItem(t.value), i()
						})), this.settingsManager.backgroundOpacity.onChanged.subscribe((function() {
							i()
						})), this.settingsManager.backgroundColor.isSet() && this.selectItem(this.settingsManager.backgroundColor.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.BackgroundColorSelectBox = o
		},
		9558: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n("4d63"), n("ac1f"), n("25f0"), n("10d1"), n("d3b7"), n("3ca3"), n("ddb0"), n("80e0"), n("5319"), n("a4d3"), n("e01a"), n("13d5"), n("b64b");
			var r = n("7037"),
				i = n.n(r),
				a = (n("4ec9"), n("7e84")),
				o = n("b380");
			n("4ae1");
			var s = n("d967");

			function u(e, t, n) {
				return (u = Object(s.a)() ? Reflect.construct : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var i = new(Function.bind.apply(e, r));
					return n && Object(o.a)(i, n.prototype), i
				}).apply(null, arguments)
			}

			function c(e) {
				var t = "function" == typeof Map ? new Map : void 0;
				return (c = function(e) {
					if (null === e || ! function(e) {
							return -1 !== Function.toString.call(e).indexOf("[native code]")
						}(e)) return e;
					if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e);
						t.set(e, n)
					}

					function n() {
						return u(e, arguments, Object(a.a)(this).constructor)
					}
					return n.prototype = Object.create(e.prototype, {
						constructor: {
							value: n,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), Object(o.a)(n, e)
				})(e)
			}
			n("99de");
			var l = n("262e");

			function f(e, t) {
				f = function(e, t) {
					return new o(e, void 0, t)
				};
				var n = c(RegExp),
					r = RegExp.prototype,
					a = new WeakMap;

				function o(e, t, r) {
					var i = n.call(this, e, t);
					return a.set(i, r || a.get(e)), i
				}

				function s(e, t) {
					var n = a.get(t);
					return Object.keys(n).reduce((function(t, r) {
						return t[r] = e[n[r]], t
					}), Object.create(null))
				}
				return Object(l.a)(o, n), o.prototype.exec = function(e) {
					var t = r.exec.call(this, e);
					return t && (t.groups = s(t, this)), t
				}, o.prototype[Symbol.replace] = function(e, t) {
					if ("string" == typeof t) {
						var n = a.get(this);
						return r[Symbol.replace].call(this, e, t.replace(/\$<([^>]+)>/g, (function(e, t) {
							return "$" + n[t]
						})))
					}
					if ("function" == typeof t) {
						var o = this;
						return r[Symbol.replace].call(this, e, (function() {
							var e = [];
							return e.push.apply(e, arguments), "object" !== i()(e[e.length - 1]) && e.push(s(e, o)), t.apply(this, e)
						}))
					}
					return r[Symbol.replace].call(this, e, t)
				}, f.apply(this, arguments)
			}
		},
		"957c": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					return "m" === n ? t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + function(e, t) {
						var n = e.split("_");
						return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
					}({
						ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
						mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
						hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
						dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
						ww: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð½ÐµÐ´ÐµÐ»Ð¸_Ð½ÐµÐ´ÐµÐ»ÑŒ",
						MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
						yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
					} [n], +e)
				}
				var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
				e.defineLocale("ru", {
					months: {
						format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
						standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
					},
					monthsShort: {
						format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
						standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
					},
					weekdays: {
						standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
						format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
						isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/
					},
					weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
					weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
					monthsParse: n,
					longMonthsParse: n,
					shortMonthsParse: n,
					monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
					monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
					monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
					monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY Ð³.",
						LLL: "D MMMM YYYY Ð³., H:mm",
						LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
					},
					calendar: {
						sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
						nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
						lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
						nextWeek: function(e) {
							if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
							switch (this.day()) {
								case 0:
									return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
								case 1:
								case 2:
								case 4:
									return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
								case 3:
								case 5:
								case 6:
									return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
							}
						},
						lastWeek: function(e) {
							if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
							switch (this.day()) {
								case 0:
									return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
								case 1:
								case 2:
								case 4:
									return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
								case 3:
								case 5:
								case 6:
									return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "Ñ‡ÐµÑ€ÐµÐ· %s",
						past: "%s Ð½Ð°Ð·Ð°Ð´",
						s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
						ss: t,
						m: t,
						mm: t,
						h: "Ñ‡Ð°Ñ",
						hh: t,
						d: "Ð´ÐµÐ½ÑŒ",
						dd: t,
						w: "Ð½ÐµÐ´ÐµÐ»Ñ",
						ww: t,
						M: "Ð¼ÐµÑÑÑ†",
						MM: t,
						y: "Ð³Ð¾Ð´",
						yy: t
					},
					meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
					isPM: function(e) {
						return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
					ordinal: function(e, t) {
						switch (t) {
							case "M":
							case "d":
							case "DDD":
								return e + "-Ð¹";
							case "D":
								return e + "-Ð³Ð¾";
							case "w":
							case "W":
								return e + "-Ñ";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"958b": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					switch (n) {
						case "s":
							return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
						case "ss":
							return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
						case "m":
						case "mm":
							return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
						case "h":
						case "hh":
							return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
						case "d":
						case "dd":
							return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
						case "M":
						case "MM":
							return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
						case "y":
						case "yy":
							return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
						default:
							return e
					}
				}
				e.defineLocale("mn", {
					months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
					monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
					monthsParseExact: !0,
					weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
					weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
					weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
						LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
						LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
					},
					meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
					isPM: function(e) {
						return "Ò®Ð¥" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥"
					},
					calendar: {
						sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
						nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
						nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
						lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
						lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s Ð´Ð°Ñ€Ð°Ð°",
						past: "%s Ó©Ð¼Ð½Ó©",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + " Ó©Ð´Ó©Ñ€";
							default:
								return e
						}
					}
				})
			}(n("c1df"))
		},
		9609: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-Ñ‡Ò¯",
					1: "-Ñ‡Ð¸",
					2: "-Ñ‡Ð¸",
					3: "-Ñ‡Ò¯",
					4: "-Ñ‡Ò¯",
					5: "-Ñ‡Ð¸",
					6: "-Ñ‡Ñ‹",
					7: "-Ñ‡Ð¸",
					8: "-Ñ‡Ð¸",
					9: "-Ñ‡Ñƒ",
					10: "-Ñ‡Ñƒ",
					20: "-Ñ‡Ñ‹",
					30: "-Ñ‡Ñƒ",
					40: "-Ñ‡Ñ‹",
					50: "-Ñ‡Ò¯",
					60: "-Ñ‡Ñ‹",
					70: "-Ñ‡Ð¸",
					80: "-Ñ‡Ð¸",
					90: "-Ñ‡Ñƒ",
					100: "-Ñ‡Ò¯"
				};
				e.defineLocale("ky", {
					months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
					monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
					weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
					weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
					weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
						nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
						nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
						lastDay: "[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT",
						lastWeek: "[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
						past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
						s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
						ss: "%d ÑÐµÐºÑƒÐ½Ð´",
						m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
						mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
						h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
						hh: "%d ÑÐ°Ð°Ñ‚",
						d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
						dd: "%d ÐºÒ¯Ð½",
						M: "Ð±Ð¸Ñ€ Ð°Ð¹",
						MM: "%d Ð°Ð¹",
						y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
						yy: "%d Ð¶Ñ‹Ð»"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
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
		9686: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à§§",
						2: "à§¨",
						3: "à§©",
						4: "à§ª",
						5: "à§«",
						6: "à§¬",
						7: "à§­",
						8: "à§®",
						9: "à§¯",
						0: "à§¦"
					},
					n = {
						"à§§": "1",
						"à§¨": "2",
						"à§©": "3",
						"à§ª": "4",
						"à§«": "5",
						"à§¬": "6",
						"à§­": "7",
						"à§®": "8",
						"à§¯": "9",
						"à§¦": "0"
					};
				e.defineLocale("bn-bd", {
					months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
					monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬à§à¦°à§_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
					weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
					weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
					weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
					longDateFormat: {
						LT: "A h:mm à¦¸à¦®à§Ÿ",
						LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
						LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
					},
					calendar: {
						sameDay: "[à¦†à¦œ] LT",
						nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
						lastWeek: "[à¦—à¦¤] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à¦ªà¦°à§‡",
						past: "%s à¦†à¦—à§‡",
						s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
						ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
						m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
						mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
						h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
						hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
						d: "à¦à¦• à¦¦à¦¿à¦¨",
						dd: "%d à¦¦à¦¿à¦¨",
						M: "à¦à¦• à¦®à¦¾à¦¸",
						MM: "%d à¦®à¦¾à¦¸",
						y: "à¦à¦• à¦¬à¦›à¦°",
						yy: "%d à¦¬à¦›à¦°"
					},
					preparse: function(e) {
						return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à¦°à¦¾à¦¤|à¦­à§‹à¦°|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦¸à¦¨à§à¦§à§à¦¯à¦¾|à¦°à¦¾à¦¤/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t ? e < 4 ? e : e + 12 : "à¦­à§‹à¦°" === t || "à¦¸à¦•à¦¾à¦²" === t ? e : "à¦¦à§à¦ªà§à¦°" === t ? e >= 3 ? e : e + 12 : "à¦¬à¦¿à¦•à¦¾à¦²" === t || "à¦¸à¦¨à§à¦§à§à¦¯à¦¾" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à¦°à¦¾à¦¤" : e < 6 ? "à¦­à§‹à¦°" : e < 12 ? "à¦¸à¦•à¦¾à¦²" : e < 15 ? "à¦¦à§à¦ªà§à¦°" : e < 18 ? "à¦¬à¦¿à¦•à¦¾à¦²" : e < 20 ? "à¦¸à¦¨à§à¦§à§à¦¯à¦¾" : "à¦°à¦¾à¦¤"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"96cf": function(e, t, n) {
			var r = function(e) {
				"use strict";
				var t, n = Object.prototype,
					r = n.hasOwnProperty,
					i = "function" == typeof Symbol ? Symbol : {},
					a = i.iterator || "@@iterator",
					o = i.asyncIterator || "@@asyncIterator",
					s = i.toStringTag || "@@toStringTag";

				function u(e, t, n) {
					return Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), e[t]
				}
				try {
					u({}, "")
				} catch (e) {
					u = function(e, t, n) {
						return e[t] = n
					}
				}

				function c(e, t, n, r) {
					var i = t && t.prototype instanceof _ ? t : _,
						a = Object.create(i.prototype),
						o = new $(r || []);
					return a._invoke = function(e, t, n) {
						var r = f;
						return function(i, a) {
							if (r === d) throw new Error("Generator is already running");
							if (r === h) {
								if ("throw" === i) throw a;
								return O()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = E(o, n);
									if (s) {
										if (s === p) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if (r === f) throw r = h, n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = d;
								var u = l(e, t, n);
								if ("normal" === u.type) {
									if (r = n.done ? h : "suspendedYield", u.arg === p) continue;
									return {
										value: u.arg,
										done: n.done
									}
								}
								"throw" === u.type && (r = h, n.method = "throw", n.arg = u.arg)
							}
						}
					}(e, n, o), a
				}

				function l(e, t, n) {
					try {
						return {
							type: "normal",
							arg: e.call(t, n)
						}
					} catch (e) {
						return {
							type: "throw",
							arg: e
						}
					}
				}
				e.wrap = c;
				var f = "suspendedStart",
					d = "executing",
					h = "completed",
					p = {};

				function _() {}

				function m() {}

				function b() {}
				var g = {};
				g[a] = function() {
					return this
				};
				var v = Object.getPrototypeOf,
					y = v && v(v(k([])));
				y && y !== n && r.call(y, a) && (g = y);
				var A = b.prototype = _.prototype = Object.create(g);

				function S(e) {
					["next", "throw", "return"].forEach((function(t) {
						u(e, t, (function(e) {
							return this._invoke(t, e)
						}))
					}))
				}

				function w(e, t) {
					function n(i, a, o, s) {
						var u = l(e[i], e, a);
						if ("throw" !== u.type) {
							var c = u.arg,
								f = c.value;
							return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
								n("next", e, o, s)
							}), (function(e) {
								n("throw", e, o, s)
							})) : t.resolve(f).then((function(e) {
								c.value = e, o(c)
							}), (function(e) {
								return n("throw", e, o, s)
							}))
						}
						s(u.arg)
					}
					var i;
					this._invoke = function(e, r) {
						function a() {
							return new t((function(t, i) {
								n(e, r, t, i)
							}))
						}
						return i = i ? i.then(a, a) : a()
					}
				}

				function E(e, n) {
					var r = e.iterator[n.method];
					if (r === t) {
						if (n.delegate = null, "throw" === n.method) {
							if (e.iterator.return && (n.method = "return", n.arg = t, E(e, n), "throw" === n.method)) return p;
							n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return p
					}
					var i = l(r, e.iterator, n.arg);
					if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;
					var a = i.arg;
					return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, p) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
				}

				function T(e) {
					var t = {
						tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
				}

				function C(e) {
					var t = e.completion || {};
					t.type = "normal", delete t.arg, e.completion = t
				}

				function $(e) {
					this.tryEntries = [{
						tryLoc: "root"
					}], e.forEach(T, this), this.reset(!0)
				}

				function k(e) {
					if (e) {
						var n = e[a];
						if (n) return n.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var i = -1,
								o = function n() {
									for (; ++i < e.length;)
										if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
									return n.value = t, n.done = !0, n
								};
							return o.next = o
						}
					}
					return {
						next: O
					}
				}

				function O() {
					return {
						value: t,
						done: !0
					}
				}
				return m.prototype = A.constructor = b, b.constructor = m, m.displayName = u(b, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
				}, e.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, s, "GeneratorFunction")), e.prototype = Object.create(A), e
				}, e.awrap = function(e) {
					return {
						__await: e
					}
				}, S(w.prototype), w.prototype[o] = function() {
					return this
				}, e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
					void 0 === a && (a = Promise);
					var o = new w(c(t, n, r, i), a);
					return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
						return e.done ? e.value : o.next()
					}))
				}, S(A), u(A, s, "Generator"), A[a] = function() {
					return this
				}, A.toString = function() {
					return "[object Generator]"
				}, e.keys = function(e) {
					var t = [];
					for (var n in e) t.push(n);
					return t.reverse(),
						function n() {
							for (; t.length;) {
								var r = t.pop();
								if (r in e) return n.value = r, n.done = !1, n
							}
							return n.done = !0, n
						}
				}, e.values = k, $.prototype = {
					constructor: $,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e)
							for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var n = this;

						function i(r, i) {
							return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var o = this.tryEntries[a],
								s = o.completion;
							if ("root" === o.tryLoc) return i("end");
							if (o.tryLoc <= this.prev) {
								var u = r.call(o, "catchLoc"),
									c = r.call(o, "finallyLoc");
								if (u && c) {
									if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
									if (this.prev < o.finallyLoc) return i(o.finallyLoc)
								} else if (u) {
									if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
								} else {
									if (!c) throw new Error("try statement without catch or finally");
									if (this.prev < o.finallyLoc) return i(o.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var i = this.tryEntries[n];
							if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
								var a = i;
								break
							}
						}
						a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
						var o = a ? a.completion : {};
						return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(o)
					},
					complete: function(e, t) {
						if ("throw" === e.type) throw e.arg;
						return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
					},
					finish: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), p
						}
					},
					catch: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.tryLoc === e) {
								var r = n.completion;
								if ("throw" === r.type) {
									var i = r.arg;
									C(n)
								}
								return i
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, n, r) {
						return this.delegate = {
							iterator: k(e),
							resultName: n,
							nextLoc: r
						}, "next" === this.method && (this.arg = t), p
					}
				}, e
			}(e.exports);
			try {
				regeneratorRuntime = r
			} catch (e) {
				Function("r", "regeneratorRuntime = r")(r)
			}
		},
		"972c": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var r = " ";
					return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
						ss: "secunde",
						mm: "minute",
						hh: "ore",
						dd: "zile",
						ww: "sÄƒptÄƒmÃ¢ni",
						MM: "luni",
						yy: "ani"
					} [n]
				}
				e.defineLocale("ro", {
					months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
					monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
					weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
					weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY H:mm",
						LLLL: "dddd, D MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[azi la] LT",
						nextDay: "[mÃ¢ine la] LT",
						nextWeek: "dddd [la] LT",
						lastDay: "[ieri la] LT",
						lastWeek: "[fosta] dddd [la] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "peste %s",
						past: "%s Ã®n urmÄƒ",
						s: "cÃ¢teva secunde",
						ss: t,
						m: "un minut",
						mm: t,
						h: "o orÄƒ",
						hh: t,
						d: "o zi",
						dd: t,
						w: "o sÄƒptÄƒmÃ¢nÄƒ",
						ww: t,
						M: "o lunÄƒ",
						MM: t,
						y: "un an",
						yy: t
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		9764: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return H
			})), n.d(t, "a", (function() {
				return Y
			}));
			var r = Uint8Array,
				i = Uint16Array,
				a = Uint32Array,
				o = new r([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
				s = new r([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
				u = new r([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
				c = function(e, t) {
					for (var n = new i(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
					var o = new a(n[30]);
					for (r = 1; r < 30; ++r)
						for (var s = n[r]; s < n[r + 1]; ++s) o[s] = s - n[r] << 5 | r;
					return [n, o]
				},
				l = c(o, 2),
				f = l[0],
				d = l[1];
			f[28] = 258, d[258] = 28;
			for (var h = c(s, 0), p = h[0], _ = h[1], m = new i(32768), b = 0; b < 32768; ++b) {
				var g = (43690 & b) >>> 1 | (21845 & b) << 1;
				g = (61680 & (g = (52428 & g) >>> 2 | (13107 & g) << 2)) >>> 4 | (3855 & g) << 4, m[b] = ((65280 & g) >>> 8 | (255 & g) << 8) >>> 1
			}
			var v = function(e, t, n) {
					for (var r = e.length, a = 0, o = new i(t); a < r; ++a) ++o[e[a] - 1];
					var s, u = new i(t);
					for (a = 0; a < t; ++a) u[a] = u[a - 1] + o[a - 1] << 1;
					if (n) {
						s = new i(1 << t);
						var c = 15 - t;
						for (a = 0; a < r; ++a)
							if (e[a])
								for (var l = a << 4 | e[a], f = t - e[a], d = u[e[a] - 1]++ << f, h = d | (1 << f) - 1; d <= h; ++d) s[m[d] >>> c] = l
					} else
						for (s = new i(r), a = 0; a < r; ++a) s[a] = m[u[e[a] - 1]++] >>> 15 - e[a];
					return s
				},
				y = new r(288);
			for (b = 0; b < 144; ++b) y[b] = 8;
			for (b = 144; b < 256; ++b) y[b] = 9;
			for (b = 256; b < 280; ++b) y[b] = 7;
			for (b = 280; b < 288; ++b) y[b] = 8;
			var A = new r(32);
			for (b = 0; b < 32; ++b) A[b] = 5;
			var S = v(y, 9, 0),
				w = v(y, 9, 1),
				E = v(A, 5, 0),
				T = v(A, 5, 1),
				C = function(e) {
					for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
					return t
				},
				$ = function(e, t, n) {
					var r = t / 8 >> 0;
					return (e[r] | e[r + 1] << 8) >>> (7 & t) & n
				},
				k = function(e, t) {
					var n = t / 8 >> 0;
					return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >>> (7 & t)
				},
				O = function(e) {
					return (e / 8 >> 0) + (7 & e && 1)
				},
				x = function(e, t, n) {
					(null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
					var o = new(e instanceof i ? i : e instanceof a ? a : r)(n - t);
					return o.set(e.subarray(t, n)), o
				},
				P = function(e, t, n) {
					n <<= 7 & t;
					var r = t / 8 >> 0;
					e[r] |= n, e[r + 1] |= n >>> 8
				},
				M = function(e, t, n) {
					n <<= 7 & t;
					var r = t / 8 >> 0;
					e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16
				},
				I = function(e, t) {
					for (var n = [], a = 0; a < e.length; ++a) e[a] && n.push({
						s: a,
						f: e[a]
					});
					var o = n.length,
						s = n.slice();
					if (!o) return [new r(0), 0];
					if (1 == o) {
						var u = new r(n[0].s + 1);
						return u[n[0].s] = 1, [u, 1]
					}
					n.sort((function(e, t) {
						return e.f - t.f
					})), n.push({
						s: -1,
						f: 25001
					});
					var c = n[0],
						l = n[1],
						f = 0,
						d = 1,
						h = 2;
					for (n[0] = {
							s: -1,
							f: c.f + l.f,
							l: c,
							r: l
						}; d != o - 1;) c = n[n[f].f < n[h].f ? f++ : h++], l = n[f != d && n[f].f < n[h].f ? f++ : h++], n[d++] = {
						s: -1,
						f: c.f + l.f,
						l: c,
						r: l
					};
					var p = s[0].s;
					for (a = 1; a < o; ++a) s[a].s > p && (p = s[a].s);
					var _ = new i(p + 1),
						m = L(n[d - 1], _, 0);
					if (m > t) {
						a = 0;
						var b = 0,
							g = m - t,
							v = 1 << g;
						for (s.sort((function(e, t) {
								return _[t.s] - _[e.s] || e.f - t.f
							})); a < o; ++a) {
							var y = s[a].s;
							if (!(_[y] > t)) break;
							b += v - (1 << m - _[y]), _[y] = t
						}
						for (b >>>= g; b > 0;) {
							var A = s[a].s;
							_[A] < t ? b -= 1 << t - _[A]++ - 1 : ++a
						}
						for (; a >= 0 && b; --a) {
							var S = s[a].s;
							_[S] == t && (--_[S], ++b)
						}
						m = t
					}
					return [new r(_), m]
				},
				L = function(e, t, n) {
					return -1 == e.s ? Math.max(L(e.l, t, n + 1), L(e.r, t, n + 1)) : t[e.s] = n
				},
				D = function(e) {
					for (var t = e.length; t && !e[--t];);
					for (var n = new i(++t), r = 0, a = e[0], o = 1, s = function(e) {
							n[r++] = e
						}, u = 1; u <= t; ++u)
						if (e[u] == a && u != t) ++o;
						else {
							if (!a && o > 2) {
								for (; o > 138; o -= 138) s(32754);
								o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
							} else if (o > 3) {
								for (s(a), --o; o > 6; o -= 6) s(8304);
								o > 2 && (s(o - 3 << 5 | 8208), o = 0)
							}
							for (; o--;) s(a);
							o = 1, a = e[u]
						} return [n.subarray(0, r), t]
				},
				B = function(e, t) {
					for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
					return n
				},
				N = function(e, t, n) {
					var r = n.length,
						i = O(t + 2);
					e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
					for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
					return 8 * (i + 4 + r)
				},
				R = function(e, t, n, r, a, c, l, f, d, h, p) {
					P(t, p++, n), ++a[256];
					for (var _ = I(a, 15), m = _[0], b = _[1], g = I(c, 15), w = g[0], T = g[1], C = D(m), $ = C[0], k = C[1], O = D(w), x = O[0], L = O[1], R = new i(19), F = 0; F < $.length; ++F) R[31 & $[F]]++;
					for (F = 0; F < x.length; ++F) R[31 & x[F]]++;
					for (var U = I(R, 7), j = U[0], H = U[1], Y = 19; Y > 4 && !j[u[Y - 1]]; --Y);
					var V, z, Q, G, q = h + 5 << 3,
						W = B(a, y) + B(c, A) + l,
						K = B(a, m) + B(c, w) + l + 14 + 3 * Y + B(R, j) + (2 * R[16] + 3 * R[17] + 7 * R[18]);
					if (q <= W && q <= K) return N(t, p, e.subarray(d, d + h));
					if (P(t, p, 1 + (K < W)), p += 2, K < W) {
						V = v(m, b, 0), z = m, Q = v(w, T, 0), G = w;
						var X = v(j, H, 0);
						for (P(t, p, k - 257), P(t, p + 5, L - 1), P(t, p + 10, Y - 4), p += 14, F = 0; F < Y; ++F) P(t, p + 3 * F, j[u[F]]);
						p += 3 * Y;
						for (var J = [$, x], Z = 0; Z < 2; ++Z) {
							var ee = J[Z];
							for (F = 0; F < ee.length; ++F) {
								var te = 31 & ee[F];
								P(t, p, X[te]), p += j[te], te > 15 && (P(t, p, ee[F] >>> 5 & 127), p += ee[F] >>> 12)
							}
						}
					} else V = S, z = y, Q = E, G = A;
					for (F = 0; F < f; ++F)
						if (r[F] > 255) {
							te = r[F] >>> 18 & 31, M(t, p, V[te + 257]), p += z[te + 257], te > 7 && (P(t, p, r[F] >>> 23 & 31), p += o[te]);
							var ne = 31 & r[F];
							M(t, p, Q[ne]), p += G[ne], ne > 3 && (M(t, p, r[F] >>> 5 & 8191), p += s[ne])
						} else M(t, p, V[r[F]]), p += z[r[F]];
					return M(t, p, V[256]), p + z[256]
				},
				F = new a([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
				U = new r(0),
				j = function(e, t, n, u, c, l) {
					var f = e.length,
						h = new r(u + f + 5 * (1 + Math.floor(f / 7e3)) + c),
						p = h.subarray(u, h.length - c),
						m = 0;
					if (!t || f < 8)
						for (var b = 0; b <= f; b += 65535) {
							var g = b + 65535;
							g < f ? m = N(p, m, e.subarray(b, g)) : (p[b] = l, m = N(p, m, e.subarray(b, f)))
						} else {
							for (var v = F[t - 1], y = v >>> 13, A = 8191 & v, S = (1 << n) - 1, w = new i(32768), E = new i(S + 1), T = Math.ceil(n / 3), C = 2 * T, $ = function(t) {
									return (e[t] ^ e[t + 1] << T ^ e[t + 2] << C) & S
								}, k = new a(25e3), P = new i(288), M = new i(32), I = 0, L = 0, D = (b = 0, 0), B = 0, j = 0; b < f; ++b) {
								var H = $(b),
									Y = 32767 & b,
									V = E[H];
								if (w[Y] = V, E[H] = Y, B <= b) {
									var z = f - b;
									if ((I > 7e3 || D > 24576) && z > 423) {
										m = R(e, p, 0, k, P, M, L, D, j, b - j, m), D = I = L = 0, j = b;
										for (var Q = 0; Q < 286; ++Q) P[Q] = 0;
										for (Q = 0; Q < 30; ++Q) M[Q] = 0
									}
									var G = 2,
										q = 0,
										W = A,
										K = Y - V & 32767;
									if (z > 2 && H == $(b - K))
										for (var X = Math.min(y, z) - 1, J = Math.min(32767, b), Z = Math.min(258, z); K <= J && --W && Y != V;) {
											if (e[b + G] == e[b + G - K]) {
												for (var ee = 0; ee < Z && e[b + ee] == e[b + ee - K]; ++ee);
												if (ee > G) {
													if (G = ee, q = K, ee > X) break;
													var te = Math.min(K, ee - 2),
														ne = 0;
													for (Q = 0; Q < te; ++Q) {
														var re = b - K + Q + 32768 & 32767,
															ie = re - w[re] + 32768 & 32767;
														ie > ne && (ne = ie, V = re)
													}
												}
											}
											K += (Y = V) - (V = w[Y]) + 32768 & 32767
										}
									if (q) {
										k[D++] = 268435456 | d[G] << 18 | _[q];
										var ae = 31 & d[G],
											oe = 31 & _[q];
										L += o[ae] + s[oe], ++P[257 + ae], ++M[oe], B = b + G, ++I
									} else k[D++] = e[b], ++P[e[b]]
								}
							}
							m = R(e, p, l, k, P, M, L, D, j, b - j, m), l || (m = N(p, m, U))
						}
					return x(h, 0, u + O(m) + c)
				};

			function H(e, t) {
				void 0 === t && (t = {});
				var n = function() {
					var e = 1,
						t = 0;
					return {
						p: function(n) {
							for (var r = e, i = t, a = n.length, o = 0; o != a;) {
								for (var s = Math.min(o + 5552, a); o < s; ++o) i += r += n[o];
								r %= 65521, i %= 65521
							}
							e = r, t = i
						},
						d: function() {
							return (e >>> 8 << 16 | (255 & t) << 8 | t >>> 8) + 2 * ((255 & e) << 23)
						}
					}
				}();
				n.p(e);
				var r = function(e, t, n, r, i) {
					return j(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i)
				}(e, t, 2, 4);
				return function(e, t) {
						var n = t.level,
							r = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
						e[0] = 120, e[1] = r << 6 | (r ? 32 - 2 * r : 1)
					}(r, t),
					function(e, t, n) {
						for (; n; ++t) e[t] = n, n >>>= 8
					}(r, r.length - 4, n.d()), r
			}

			function Y(e, t) {
				return function(e, t, n) {
					var i = e.length,
						a = !t || n,
						c = !n || n.i;
					n || (n = {}), t || (t = new r(3 * i));
					var l = function(e) {
							var n = t.length;
							if (e > n) {
								var i = new r(Math.max(2 * n, e));
								i.set(t), t = i
							}
						},
						d = n.f || 0,
						h = n.p || 0,
						_ = n.b || 0,
						m = n.l,
						b = n.d,
						g = n.m,
						y = n.n,
						A = 8 * i;
					do {
						if (!m) {
							n.f = d = $(e, h, 1);
							var S = $(e, h + 1, 3);
							if (h += 3, !S) {
								var E = O(h) + 4,
									P = e[E - 4] | e[E - 3] << 8,
									M = E + P;
								if (M > i) {
									if (c) throw "unexpected EOF";
									break
								}
								a && l(_ + P), t.set(e.subarray(E, M), _), n.b = _ += P, n.p = h = 8 * M;
								continue
							}
							if (1 == S) m = w, b = T, g = 9, y = 5;
							else {
								if (2 != S) throw "invalid block type";
								var I = $(e, h, 31) + 257,
									L = $(e, h + 10, 15) + 4,
									D = I + $(e, h + 5, 31) + 1;
								h += 14;
								for (var B = new r(D), N = new r(19), R = 0; R < L; ++R) N[u[R]] = $(e, h + 3 * R, 7);
								h += 3 * L;
								var F = C(N),
									U = (1 << F) - 1;
								if (!c && h + D * (F + 7) > A) break;
								var j = v(N, F, 1);
								for (R = 0; R < D;) {
									var H = j[$(e, h, U)];
									if (h += 15 & H, (E = H >>> 4) < 16) B[R++] = E;
									else {
										var Y = 0,
											V = 0;
										for (16 == E ? (V = 3 + $(e, h, 3), h += 2, Y = B[R - 1]) : 17 == E ? (V = 3 + $(e, h, 7), h += 3) : 18 == E && (V = 11 + $(e, h, 127), h += 7); V--;) B[R++] = Y
									}
								}
								var z = B.subarray(0, I),
									Q = B.subarray(I);
								g = C(z), y = C(Q), m = v(z, g, 1), b = v(Q, y, 1)
							}
							if (h > A) throw "unexpected EOF"
						}
						a && l(_ + 131072);
						for (var G = (1 << g) - 1, q = (1 << y) - 1, W = g + y + 18; c || h + W < A;) {
							var K = (Y = m[k(e, h) & G]) >>> 4;
							if ((h += 15 & Y) > A) throw "unexpected EOF";
							if (!Y) throw "invalid length/literal";
							if (K < 256) t[_++] = K;
							else {
								if (256 == K) {
									m = null;
									break
								}
								var X = K - 254;
								if (K > 264) {
									var J = o[R = K - 257];
									X = $(e, h, (1 << J) - 1) + f[R], h += J
								}
								var Z = b[k(e, h) & q],
									ee = Z >>> 4;
								if (!Z) throw "invalid distance";
								if (h += 15 & Z, Q = p[ee], ee > 3 && (J = s[ee], Q += k(e, h) & (1 << J) - 1, h += J), h > A) throw "unexpected EOF";
								a && l(_ + 131072);
								for (var te = _ + X; _ < te; _ += 4) t[_] = t[_ - Q], t[_ + 1] = t[_ + 1 - Q], t[_ + 2] = t[_ + 2 - Q], t[_ + 3] = t[_ + 3 - Q];
								_ = te
							}
						}
						n.l = m, n.p = h, n.b = _, m && (d = 1, n.m = g, n.d = b, n.n = y)
					} while (!d);
					return _ == t.length ? t : x(t, 0, _)
				}((function(e) {
					if (8 != (15 & e[0]) || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) throw "invalid zlib data";
					if (32 & e[1]) throw "invalid zlib data: preset dictionaries not supported"
				}(e), e.subarray(2, -4)), t)
			}
		},
		9797: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("cy", {
					months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
					monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
					weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
					weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
					weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Heddiw am] LT",
						nextDay: "[Yfory am] LT",
						nextWeek: "dddd [am] LT",
						lastDay: "[Ddoe am] LT",
						lastWeek: "dddd [diwethaf am] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "mewn %s",
						past: "%s yn Ã´l",
						s: "ychydig eiliadau",
						ss: "%d eiliad",
						m: "munud",
						mm: "%d munud",
						h: "awr",
						hh: "%d awr",
						d: "diwrnod",
						dd: "%d diwrnod",
						M: "mis",
						MM: "%d mis",
						y: "blwyddyn",
						yy: "%d flynedd"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
					ordinal: function(e) {
						var t = "";
						return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"98d0": function(e, t, n) {
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
			}), t.CastToggleButton = void 0;
			var i = n("30b0"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClass: "ui-casttogglebutton",
							text: a.i18n.getLocalizer("googleCast")
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.onClick.subscribe((function() {
							t.isCastAvailable() ? t.isCasting() ? t.castStop() : t.castVideo() : console
						}));
						var i = function() {
							t.isCastAvailable() ? r.show() : r.hide()
						};
						t.on(t.exports.PlayerEvent.CastAvailable, i), t.on(t.exports.PlayerEvent.CastWaitingForDevice, (function() {
							r.on()
						})), t.on(t.exports.PlayerEvent.CastStarted, (function() {
							r.on()
						})), t.on(t.exports.PlayerEvent.CastStopped, (function() {
							r.off()
						})), i(), t.isCasting() && this.on()
					}, t
				}(i.ToggleButton);
			t.CastToggleButton = o
		},
		"99af": function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("d039"),
				a = n("e8b5"),
				o = n("861d"),
				s = n("7b0b"),
				u = n("50c4"),
				c = n("8418"),
				l = n("65f0"),
				f = n("1dde"),
				d = n("b622"),
				h = n("2d00"),
				p = d("isConcatSpreadable"),
				_ = 9007199254740991,
				m = "Maximum allowed index exceeded",
				b = h >= 51 || !i((function() {
					var e = [];
					return e[p] = !1, e.concat()[0] !== e
				})),
				g = f("concat"),
				v = function(e) {
					if (!o(e)) return !1;
					var t = e[p];
					return void 0 !== t ? !!t : a(e)
				};
			r({
				target: "Array",
				proto: !0,
				forced: !b || !g
			}, {
				concat: function(e) {
					var t, n, r, i, a, o = s(this),
						f = l(o, 0),
						d = 0;
					for (t = -1, r = arguments.length; t < r; t++)
						if (v(a = -1 === t ? o : arguments[t])) {
							if (d + (i = u(a.length)) > _) throw TypeError(m);
							for (n = 0; n < i; n++, d++) n in a && c(f, d, a[n])
						} else {
							if (d >= _) throw TypeError(m);
							c(f, d++, a)
						} return f.length = d, f
				}
			})
		},
		"99de": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("7037"),
				i = n.n(r);

			function a(e, t) {
				return !t || "object" !== i()(t) && "function" != typeof t ? function(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}(e) : t
			}
		},
		"9a0c": function(e, t, n) {
			var r = n("342f");
			e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)
		},
		"9a21": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.AudioTrackSwitchHandler = void 0;
			var r = n("e1ee"),
				i = function() {
					function e(e, t, n) {
						var i = this;
						this.addAudioTrack = function(e) {
							var t = e.track;
							i.listElement.hasItem(t.id) || i.listElement.addItem(t.id, r.i18n.getLocalizer(t.label), !0)
						}, this.removeAudioTrack = function(e) {
							var t = e.track;
							i.listElement.hasItem(t.id) && i.listElement.removeItem(t.id)
						}, this.selectCurrentAudioTrack = function() {
							var e = i.player.getAudio();
							e && i.listElement.selectItem(e.id)
						}, this.refreshAudioTracks = function() {
							var e = i.player.getAvailableAudio();
							i.listElement.synchronizeItems(e.map((function(e) {
								return {
									key: e.id,
									label: e.label
								}
							}))), i.selectCurrentAudioTrack()
						}, this.player = e, this.listElement = t, this.uimanager = n, this.bindSelectionEvent(), this.bindPlayerEvents(), this.refreshAudioTracks()
					}
					return e.prototype.bindSelectionEvent = function() {
						var e = this;
						this.listElement.onItemSelected.subscribe((function(t, n) {
							e.player.setAudio(n)
						}))
					}, e.prototype.bindPlayerEvents = function() {
						this.player.on(this.player.exports.PlayerEvent.AudioChanged, this.selectCurrentAudioTrack), this.player.on(this.player.exports.PlayerEvent.SourceUnloaded, this.refreshAudioTracks), this.player.on(this.player.exports.PlayerEvent.PeriodSwitched, this.refreshAudioTracks), this.player.on(this.player.exports.PlayerEvent.AudioAdded, this.addAudioTrack), this.player.on(this.player.exports.PlayerEvent.AudioRemoved, this.removeAudioTrack), this.uimanager.getConfig().events.onUpdated.subscribe(this.refreshAudioTracks)
					}, e
				}();
			t.AudioTrackSwitchHandler = i
		},
		"9a8c": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("145e"),
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("copyWithin", (function(e, t) {
				return i.call(a(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
			}))
		},
		"9ab4": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return c
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var a = function() {
				return (a = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function s(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function u(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, a = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = a.next()).done;) o.push(r.value)
				} catch (e) {
					i = {
						error: e
					}
				} finally {
					try {
						r && !r.done && (n = a.return) && n.call(a)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function c() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
				return e
			}
		},
		"9bdd": function(e, t, n) {
			var r = n("825a"),
				i = n("2a62");
			e.exports = function(e, t, n, a) {
				try {
					return a ? t(r(n)[0], n[1]) : t(n)
				} catch (t) {
					throw i(e), t
				}
			}
		},
		"9bf2": function(e, t, n) {
			var r = n("83ab"),
				i = n("0cfb"),
				a = n("825a"),
				o = n("c04e"),
				s = Object.defineProperty;
			t.f = r ? s : function(e, t, n) {
				if (a(e), t = o(t, !0), a(n), i) try {
					return s(e, t, n)
				} catch (e) {}
				if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
				return "value" in n && (e[t] = n.value), e
			}
		},
		"9e07": function(e, t, n) {
			e.exports = function(e) {
				function t(r) {
					if (n[r]) return n[r].exports;
					var i = n[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
				}
				var n = {};
				return t.m = e, t.c = n, t.i = function(e) {
					return e
				}, t.d = function(e, n, r) {
					t.o(e, n) || Object.defineProperty(e, n, {
						configurable: !1,
						enumerable: !0,
						get: r
					})
				}, t.n = function(e) {
					var n = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return t.d(n, "a", n), n
				}, t.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, t.p = "", t(t.s = 41)
			}([function(e, t) {
				e.exports = function(e) {
					var t = typeof e;
					return null != e && ("object" == t || "function" == t)
				}
			}, function(e, t, n) {
				var r = n(23),
					i = "object" == typeof self && self && self.Object === Object && self,
					a = r || i || Function("return this")();
				e.exports = a
			}, function(e, t) {
				e.exports = function(e) {
					return null != e && "object" == typeof e
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
				var i = n(82),
					a = n(83),
					o = n(84),
					s = n(85),
					u = n(86);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
			}, function(e, t, n) {
				var r = n(8);
				e.exports = function(e, t) {
					for (var n = e.length; n--;)
						if (r(e[n][0], t)) return n;
					return -1
				}
			}, function(e, t, n) {
				var r = n(17),
					i = n(71),
					a = n(94),
					o = "[object Null]",
					s = "[object Undefined]",
					u = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					return null == e ? void 0 === e ? s : o : u && u in Object(e) ? i(e) : a(e)
				}
			}, function(e, t, n) {
				var r = n(80);
				e.exports = function(e, t) {
					var n = e.__data__;
					return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
				}
			}, function(e, t, n) {
				var r = n(11)(Object, "create");
				e.exports = r
			}, function(e, t) {
				e.exports = function(e, t) {
					return e === t || e != e && t != t
				}
			}, function(e, t, n) {
				"use strict";
				n.d(t, "a", (function() {
					return r
				}));
				var r = function e(t) {
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					})(this, e), this.onCreate = function() {}, this.onDestroy = function() {}, this.onUpdate = function() {}, this.overlay = t.overlay, this.img = t.img, this.options = t.options, this.requestUpdate = t.onUpdate
				}
			}, function(e, t, n) {
				var r = n(22);
				e.exports = function(e, t, n) {
					"__proto__" == t && r ? r(e, t, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0
					}) : e[t] = n
				}
			}, function(e, t, n) {
				var r = n(55),
					i = n(72);
				e.exports = function(e, t) {
					var n = i(e, t);
					return r(n) ? n : void 0
				}
			}, function(e, t, n) {
				var r = n(13),
					i = n(32);
				e.exports = function(e) {
					return null != e && i(e.length) && !r(e)
				}
			}, function(e, t, n) {
				var r = n(5),
					i = n(0),
					a = "[object AsyncFunction]",
					o = "[object Function]",
					s = "[object GeneratorFunction]",
					u = "[object Proxy]";
				e.exports = function(e) {
					if (!i(e)) return !1;
					var t = r(e);
					return t == o || t == s || t == a || t == u
				}
			}, function(e, t) {
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
			}, function(e, t, n) {
				(function(t) {
					! function(t, n) {
						e.exports = n()
					}("undefined" != typeof self && self, (function() {
						return function(e) {
							function t(r) {
								if (n[r]) return n[r].exports;
								var i = n[r] = {
									i: r,
									l: !1,
									exports: {}
								};
								return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
							}
							var n = {};
							return t.m = e, t.c = n, t.d = function(e, n, r) {
								t.o(e, n) || Object.defineProperty(e, n, {
									configurable: !1,
									enumerable: !0,
									get: r
								})
							}, t.n = function(e) {
								var n = e && e.__esModule ? function() {
									return e.default
								} : function() {
									return e
								};
								return t.d(n, "a", n), n
							}, t.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t)
							}, t.p = "", t(t.s = 109)
						}([function(e, t, n) {
							"use strict";
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var r = n(17),
								i = n(18),
								a = n(19),
								o = n(45),
								s = n(46),
								u = n(47),
								c = n(48),
								l = n(49),
								f = n(12),
								d = n(32),
								h = n(33),
								p = n(31),
								_ = n(1),
								m = {
									Scope: _.Scope,
									create: _.create,
									find: _.find,
									query: _.query,
									register: _.register,
									Container: r.default,
									Format: i.default,
									Leaf: a.default,
									Embed: c.default,
									Scroll: o.default,
									Block: u.default,
									Inline: s.default,
									Text: l.default,
									Attributor: {
										Attribute: f.default,
										Class: d.default,
										Style: h.default,
										Store: p.default
									}
								};
							t.default = m
						}, function(e, t, n) {
							"use strict";

							function r(e, t) {
								var n;
								if (void 0 === t && (t = o.ANY), "string" == typeof e) n = l[e] || s[e];
								else if (e instanceof Text || e.nodeType === Node.TEXT_NODE) n = l.text;
								else if ("number" == typeof e) e & o.LEVEL & o.BLOCK ? n = l.block : e & o.LEVEL & o.INLINE && (n = l.inline);
								else if (e instanceof HTMLElement) {
									var r = (e.getAttribute("class") || "").split(/\s+/);
									for (var i in r)
										if (n = u[r[i]]) break;
									n = n || c[e.tagName]
								}
								return null == n ? null : t & o.LEVEL & n.scope && t & o.TYPE & n.scope ? n : null
							}
							var i = this && this.__extends || function() {
								var e = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
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
							});
							var a = function(e) {
								function t(t) {
									var n = this;
									return t = "[Parchment] " + t, (n = e.call(this, t) || this).message = t, n.name = n.constructor.name, n
								}
								return i(t, e), t
							}(Error);
							t.ParchmentError = a;
							var o, s = {},
								u = {},
								c = {},
								l = {};
							t.DATA_KEY = "__blot",
								function(e) {
									e[e.TYPE = 3] = "TYPE", e[e.LEVEL = 12] = "LEVEL", e[e.ATTRIBUTE = 13] = "ATTRIBUTE", e[e.BLOT = 14] = "BLOT", e[e.INLINE = 7] = "INLINE", e[e.BLOCK = 11] = "BLOCK", e[e.BLOCK_BLOT = 10] = "BLOCK_BLOT", e[e.INLINE_BLOT = 6] = "INLINE_BLOT", e[e.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", e[e.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", e[e.ANY = 15] = "ANY"
								}(o = t.Scope || (t.Scope = {})), t.create = function(e, t) {
									var n = r(e);
									if (null == n) throw new a("Unable to create " + e + " blot");
									var i = n;
									return new i(e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(t), t)
								}, t.find = function e(n, r) {
									return void 0 === r && (r = !1), null == n ? null : null != n[t.DATA_KEY] ? n[t.DATA_KEY].blot : r ? e(n.parentNode, r) : null
								}, t.query = r, t.register = function e() {
									for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
									if (t.length > 1) return t.map((function(t) {
										return e(t)
									}));
									var r = t[0];
									if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new a("Invalid definition");
									if ("abstract" === r.blotName) throw new a("Cannot register abstract class");
									if (l[r.blotName || r.attrName] = r, "string" == typeof r.keyName) s[r.keyName] = r;
									else if (null != r.className && (u[r.className] = r), null != r.tagName) {
										Array.isArray(r.tagName) ? r.tagName = r.tagName.map((function(e) {
											return e.toUpperCase()
										})) : r.tagName = r.tagName.toUpperCase();
										var i = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
										i.forEach((function(e) {
											null != c[e] && null != r.className || (c[e] = r)
										}))
									}
									return r
								}
						}, function(e, t, n) {
							var r = n(51),
								i = n(11),
								a = n(3),
								o = n(20),
								s = String.fromCharCode(0),
								u = function(e) {
									Array.isArray(e) ? this.ops = e : null != e && Array.isArray(e.ops) ? this.ops = e.ops : this.ops = []
								};
							u.prototype.insert = function(e, t) {
								var n = {};
								return 0 === e.length ? this : (n.insert = e, null != t && "object" == typeof t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n))
							}, u.prototype.delete = function(e) {
								return e <= 0 ? this : this.push({
									delete: e
								})
							}, u.prototype.retain = function(e, t) {
								if (e <= 0) return this;
								var n = {
									retain: e
								};
								return null != t && "object" == typeof t && Object.keys(t).length > 0 && (n.attributes = t), this.push(n)
							}, u.prototype.push = function(e) {
								var t = this.ops.length,
									n = this.ops[t - 1];
								if (e = a(!0, {}, e), "object" == typeof n) {
									if ("number" == typeof e.delete && "number" == typeof n.delete) return this.ops[t - 1] = {
										delete: n.delete + e.delete
									}, this;
									if ("number" == typeof n.delete && null != e.insert && (t -= 1, "object" != typeof(n = this.ops[t - 1]))) return this.ops.unshift(e), this;
									if (i(e.attributes, n.attributes)) {
										if ("string" == typeof e.insert && "string" == typeof n.insert) return this.ops[t - 1] = {
											insert: n.insert + e.insert
										}, "object" == typeof e.attributes && (this.ops[t - 1].attributes = e.attributes), this;
										if ("number" == typeof e.retain && "number" == typeof n.retain) return this.ops[t - 1] = {
											retain: n.retain + e.retain
										}, "object" == typeof e.attributes && (this.ops[t - 1].attributes = e.attributes), this
									}
								}
								return t === this.ops.length ? this.ops.push(e) : this.ops.splice(t, 0, e), this
							}, u.prototype.chop = function() {
								var e = this.ops[this.ops.length - 1];
								return e && e.retain && !e.attributes && this.ops.pop(), this
							}, u.prototype.filter = function(e) {
								return this.ops.filter(e)
							}, u.prototype.forEach = function(e) {
								this.ops.forEach(e)
							}, u.prototype.map = function(e) {
								return this.ops.map(e)
							}, u.prototype.partition = function(e) {
								var t = [],
									n = [];
								return this.forEach((function(r) {
									(e(r) ? t : n).push(r)
								})), [t, n]
							}, u.prototype.reduce = function(e, t) {
								return this.ops.reduce(e, t)
							}, u.prototype.changeLength = function() {
								return this.reduce((function(e, t) {
									return t.insert ? e + o.length(t) : t.delete ? e - t.delete : e
								}), 0)
							}, u.prototype.length = function() {
								return this.reduce((function(e, t) {
									return e + o.length(t)
								}), 0)
							}, u.prototype.slice = function(e, t) {
								e = e || 0, "number" != typeof t && (t = 1 / 0);
								for (var n = [], r = o.iterator(this.ops), i = 0; i < t && r.hasNext();) {
									var a;
									i < e ? a = r.next(e - i) : (a = r.next(t - i), n.push(a)), i += o.length(a)
								}
								return new u(n)
							}, u.prototype.compose = function(e) {
								for (var t = o.iterator(this.ops), n = o.iterator(e.ops), r = new u; t.hasNext() || n.hasNext();)
									if ("insert" === n.peekType()) r.push(n.next());
									else if ("delete" === t.peekType()) r.push(t.next());
								else {
									var i = Math.min(t.peekLength(), n.peekLength()),
										a = t.next(i),
										s = n.next(i);
									if ("number" == typeof s.retain) {
										var c = {};
										"number" == typeof a.retain ? c.retain = i : c.insert = a.insert;
										var l = o.attributes.compose(a.attributes, s.attributes, "number" == typeof a.retain);
										l && (c.attributes = l), r.push(c)
									} else "number" == typeof s.delete && "number" == typeof a.retain && r.push(s)
								}
								return r.chop()
							}, u.prototype.concat = function(e) {
								var t = new u(this.ops.slice());
								return e.ops.length > 0 && (t.push(e.ops[0]), t.ops = t.ops.concat(e.ops.slice(1))), t
							}, u.prototype.diff = function(e, t) {
								if (this.ops === e.ops) return new u;
								var n = [this, e].map((function(t) {
										return t.map((function(n) {
											if (null != n.insert) return "string" == typeof n.insert ? n.insert : s;
											throw new Error("diff() called " + (t === e ? "on" : "with") + " non-document")
										})).join("")
									})),
									a = new u,
									c = r(n[0], n[1], t),
									l = o.iterator(this.ops),
									f = o.iterator(e.ops);
								return c.forEach((function(e) {
									for (var t = e[1].length; t > 0;) {
										var n = 0;
										switch (e[0]) {
											case r.INSERT:
												n = Math.min(f.peekLength(), t), a.push(f.next(n));
												break;
											case r.DELETE:
												n = Math.min(t, l.peekLength()), l.next(n), a.delete(n);
												break;
											case r.EQUAL:
												n = Math.min(l.peekLength(), f.peekLength(), t);
												var s = l.next(n),
													u = f.next(n);
												i(s.insert, u.insert) ? a.retain(n, o.attributes.diff(s.attributes, u.attributes)) : a.push(u).delete(n)
										}
										t -= n
									}
								})), a.chop()
							}, u.prototype.eachLine = function(e, t) {
								t = t || "\n";
								for (var n = o.iterator(this.ops), r = new u, i = 0; n.hasNext();) {
									if ("insert" !== n.peekType()) return;
									var a = n.peek(),
										s = o.length(a) - n.peekLength(),
										c = "string" == typeof a.insert ? a.insert.indexOf(t, s) - s : -1;
									if (c < 0) r.push(n.next());
									else if (c > 0) r.push(n.next(c));
									else {
										if (!1 === e(r, n.next(1).attributes || {}, i)) return;
										i += 1, r = new u
									}
								}
								r.length() > 0 && e(r, {}, i)
							}, u.prototype.transform = function(e, t) {
								if (t = !!t, "number" == typeof e) return this.transformPosition(e, t);
								for (var n = o.iterator(this.ops), r = o.iterator(e.ops), i = new u; n.hasNext() || r.hasNext();)
									if ("insert" !== n.peekType() || !t && "insert" === r.peekType())
										if ("insert" === r.peekType()) i.push(r.next());
										else {
											var a = Math.min(n.peekLength(), r.peekLength()),
												s = n.next(a),
												c = r.next(a);
											if (s.delete) continue;
											c.delete ? i.push(c) : i.retain(a, o.attributes.transform(s.attributes, c.attributes, t))
										}
								else i.retain(o.length(n.next()));
								return i.chop()
							}, u.prototype.transformPosition = function(e, t) {
								t = !!t;
								for (var n = o.iterator(this.ops), r = 0; n.hasNext() && r <= e;) {
									var i = n.peekLength(),
										a = n.peekType();
									n.next(), "delete" !== a ? ("insert" === a && (r < e || !t) && (e += i), r += i) : e -= Math.min(i, e - r)
								}
								return e
							}, e.exports = u
						}, function(e, t) {
							"use strict";
							var n = Object.prototype.hasOwnProperty,
								r = Object.prototype.toString,
								i = function(e) {
									return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e)
								},
								a = function(e) {
									if (!e || "[object Object]" !== r.call(e)) return !1;
									var t, i = n.call(e, "constructor"),
										a = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
									if (e.constructor && !i && !a) return !1;
									for (t in e);
									return void 0 === t || n.call(e, t)
								};
							e.exports = function e() {
								var t, n, r, o, s, u, c = arguments[0],
									l = 1,
									f = arguments.length,
									d = !1;
								for ("boolean" == typeof c && (d = c, c = arguments[1] || {}, l = 2), (null == c || "object" != typeof c && "function" != typeof c) && (c = {}); l < f; ++l)
									if (null != (t = arguments[l]))
										for (n in t) r = c[n], c !== (o = t[n]) && (d && o && (a(o) || (s = i(o))) ? (s ? (s = !1, u = r && i(r) ? r : []) : u = r && a(r) ? r : {}, c[n] = e(d, u, o)) : void 0 !== o && (c[n] = o));
								return c
							}
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

							function s(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								return null == e ? t : ("function" == typeof e.formats && (t = (0, l.default)(t, e.formats())), null == e.parent || "scroll" == e.parent.blotName || e.parent.statics.scope !== e.statics.scope ? t : s(e.parent, t))
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.BlockEmbed = t.bubbleFormats = void 0;
							var u = function() {
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
								c = function e(t, n, r) {
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
								l = r(n(3)),
								f = r(n(2)),
								d = r(n(0)),
								h = r(n(16)),
								p = r(n(6)),
								_ = r(n(7)),
								m = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), u(t, [{
										key: "attach",
										value: function() {
											c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).call(this), this.attributes = new d.default.Attributor.Store(this.domNode)
										}
									}, {
										key: "delta",
										value: function() {
											return (new f.default).insert(this.value(), (0, l.default)(this.formats(), this.attributes.values()))
										}
									}, {
										key: "format",
										value: function(e, t) {
											var n = d.default.query(e, d.default.Scope.BLOCK_ATTRIBUTE);
											null != n && this.attributes.attribute(n, t)
										}
									}, {
										key: "formatAt",
										value: function(e, t, n, r) {
											this.format(n, r)
										}
									}, {
										key: "insertAt",
										value: function(e, n, r) {
											if ("string" == typeof n && n.endsWith("\n")) {
												var i = d.default.create(b.blotName);
												this.parent.insertBefore(i, 0 === e ? this : this.next), i.insertAt(0, n.slice(0, -1))
											} else c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r)
										}
									}]), t
								}(d.default.Embed);
							m.scope = d.default.Scope.BLOCK_BLOT;
							var b = function(e) {
								function t(e) {
									i(this, t);
									var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
									return n.cache = {}, n
								}
								return o(t, e), u(t, [{
									key: "delta",
									value: function() {
										return null == this.cache.delta && (this.cache.delta = this.descendants(d.default.Leaf).reduce((function(e, t) {
											return 0 === t.length() ? e : e.insert(t.value(), s(t))
										}), new f.default).insert("\n", s(this))), this.cache.delta
									}
								}, {
									key: "deleteAt",
									value: function(e, n) {
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n), this.cache = {}
									}
								}, {
									key: "formatAt",
									value: function(e, n, r, i) {
										n <= 0 || (d.default.query(r, d.default.Scope.BLOCK) ? e + n === this.length() && this.format(r, i) : c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, Math.min(n, this.length() - e - 1), r, i), this.cache = {})
									}
								}, {
									key: "insertAt",
									value: function(e, n, r) {
										if (null != r) return c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
										if (0 !== n.length) {
											var i = n.split("\n"),
												a = i.shift();
											a.length > 0 && (e < this.length() - 1 || null == this.children.tail ? c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, Math.min(e, this.length() - 1), a) : this.children.tail.insertAt(this.children.tail.length(), a), this.cache = {});
											var o = this;
											i.reduce((function(e, t) {
												return (o = o.split(e, !0)).insertAt(0, t), t.length
											}), e + a.length)
										}
									}
								}, {
									key: "insertBefore",
									value: function(e, n) {
										var r = this.children.head;
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n), r instanceof h.default && r.remove(), this.cache = {}
									}
								}, {
									key: "length",
									value: function() {
										return null == this.cache.length && (this.cache.length = c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "length", this).call(this) + 1), this.cache.length
									}
								}, {
									key: "moveChildren",
									value: function(e, n) {
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "moveChildren", this).call(this, e, n), this.cache = {}
									}
								}, {
									key: "optimize",
									value: function(e) {
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.cache = {}
									}
								}, {
									key: "path",
									value: function(e) {
										return c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e, !0)
									}
								}, {
									key: "removeChild",
									value: function(e) {
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeChild", this).call(this, e), this.cache = {}
									}
								}, {
									key: "split",
									value: function(e) {
										var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
										if (n && (0 === e || e >= this.length() - 1)) {
											var r = this.clone();
											return 0 === e ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
										}
										var i = c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "split", this).call(this, e, n);
										return this.cache = {}, i
									}
								}]), t
							}(d.default.Block);
							b.blotName = "block", b.tagName = "P", b.defaultChild = "break", b.allowedChildren = [p.default, d.default.Embed, _.default], t.bubbleFormats = s, t.BlockEmbed = m, t.default = b
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t, n) {
								return t in e ? Object.defineProperty(e, t, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[t] = n, e
							}

							function a(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}

							function o(e, t) {
								if ((t = (0, y.default)(!0, {
										container: e,
										modules: {
											clipboard: !0,
											keyboard: !0,
											history: !0
										}
									}, t)).theme && t.theme !== E.DEFAULTS.theme) {
									if (t.theme = E.import("themes/" + t.theme), null == t.theme) throw new Error("Invalid theme " + t.theme + ". Did you register it?")
								} else t.theme = S.default;
								var n = (0, y.default)(!0, {}, t.theme.DEFAULTS);
								[n, t].forEach((function(e) {
									e.modules = e.modules || {}, Object.keys(e.modules).forEach((function(t) {
										!0 === e.modules[t] && (e.modules[t] = {})
									}))
								}));
								var r = Object.keys(n.modules).concat(Object.keys(t.modules)).reduce((function(e, t) {
									var n = E.import("modules/" + t);
									return null == n ? w.error("Cannot load " + t + " module. Are you sure you registered it?") : e[t] = n.DEFAULTS || {}, e
								}), {});
								return null != t.modules && t.modules.toolbar && t.modules.toolbar.constructor !== Object && (t.modules.toolbar = {
									container: t.modules.toolbar
								}), t = (0, y.default)(!0, {}, E.DEFAULTS, {
									modules: r
								}, n, t), ["bounds", "container", "scrollingContainer"].forEach((function(e) {
									"string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
								})), t.modules = Object.keys(t.modules).reduce((function(e, n) {
									return t.modules[n] && (e[n] = t.modules[n]), e
								}), {}), t
							}

							function s(e, t, n, r) {
								if (this.options.strict && !this.isEnabled() && t === _.default.sources.USER) return new h.default;
								var i = null == n ? null : this.getSelection(),
									a = this.editor.delta,
									o = e();
								if (null != i && (!0 === n && (n = i.index), null == r ? i = c(i, o, t) : 0 !== r && (i = c(i, n, r, t)), this.setSelection(i, _.default.sources.SILENT)), o.length() > 0) {
									var s, u, l = [_.default.events.TEXT_CHANGE, o, a, t];
									(s = this.emitter).emit.apply(s, [_.default.events.EDITOR_CHANGE].concat(l)), t !== _.default.sources.SILENT && (u = this.emitter).emit.apply(u, l)
								}
								return o
							}

							function u(e, t, n, r, i) {
								var a = {};
								return "number" == typeof e.index && "number" == typeof e.length ? "number" != typeof t ? (i = r, r = n, n = t, t = e.length, e = e.index) : (t = e.length, e = e.index) : "number" != typeof t && (i = r, r = n, n = t, t = 0), "object" === (void 0 === n ? "undefined" : l(n)) ? (a = n, i = r) : "string" == typeof n && (null != r ? a[n] = r : i = n), [e, t, a, i = i || _.default.sources.API]
							}

							function c(e, t, n, r) {
								if (null == e) return null;
								var i = void 0,
									a = void 0;
								if (t instanceof h.default) {
									var o = [e.index, e.index + e.length].map((function(e) {
											return t.transformPosition(e, r !== _.default.sources.USER)
										})),
										s = f(o, 2);
									i = s[0], a = s[1]
								} else {
									var u = [e.index, e.index + e.length].map((function(e) {
											return e < t || e === t && r === _.default.sources.USER ? e : n >= 0 ? e + n : Math.max(t, e + n)
										})),
										c = f(u, 2);
									i = c[0], a = c[1]
								}
								return new g.Range(i, a - i)
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.overload = t.expandConfig = void 0;
							var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
									return typeof e
								} : function(e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
								},
								f = function(e, t) {
									if (Array.isArray(e)) return e;
									if (Symbol.iterator in Object(e)) return function(e, t) {
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
												!r && s.return && s.return()
											} finally {
												if (i) throw a
											}
										}
										return n
									}(e, t);
									throw new TypeError("Invalid attempt to destructure non-iterable instance")
								},
								d = function() {
									function e(e, t) {
										for (var n = 0; n < t.length; n++) {
											var r = t[n];
											r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
										}
									}
									return function(t, n, r) {
										return n && e(t.prototype, n), r && e(t, r), t
									}
								}();
							n(50);
							var h = r(n(2)),
								p = r(n(14)),
								_ = r(n(8)),
								m = r(n(9)),
								b = r(n(0)),
								g = n(15),
								v = r(g),
								y = r(n(3)),
								A = r(n(10)),
								S = r(n(34)),
								w = (0, A.default)("quill"),
								E = function() {
									function e(t) {
										var n = this,
											r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
										if (a(this, e), this.options = o(t, r), this.container = this.options.container, null == this.container) return w.error("Invalid Quill container", t);
										this.options.debug && e.debug(this.options.debug);
										var i = this.container.innerHTML.trim();
										this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new _.default, this.scroll = b.default.create(this.root, {
											emitter: this.emitter,
											whitelist: this.options.formats
										}), this.editor = new p.default(this.scroll), this.selection = new v.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(_.default.events.EDITOR_CHANGE, (function(e) {
											e === _.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
										})), this.emitter.on(_.default.events.SCROLL_UPDATE, (function(e, t) {
											var r = n.selection.lastRange,
												i = r && 0 === r.length ? r.index : void 0;
											s.call(n, (function() {
												return n.editor.update(null, t, i)
											}), e)
										}));
										var u = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + i + "<p><br></p></div>");
										this.setContents(u), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
									}
									return d(e, null, [{
										key: "debug",
										value: function(e) {
											!0 === e && (e = "log"), A.default.level(e)
										}
									}, {
										key: "find",
										value: function(e) {
											return e.__quill || b.default.find(e)
										}
									}, {
										key: "import",
										value: function(e) {
											return null == this.imports[e] && w.error("Cannot import " + e + ". Are you sure it was registered?"), this.imports[e]
										}
									}, {
										key: "register",
										value: function(e, t) {
											var n = this,
												r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
											if ("string" != typeof e) {
												var i = e.attrName || e.blotName;
												"string" == typeof i ? this.register("formats/" + i, e, t) : Object.keys(e).forEach((function(r) {
													n.register(r, e[r], t)
												}))
											} else null == this.imports[e] || r || w.warn("Overwriting " + e + " with", t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && "abstract" !== t.blotName ? b.default.register(t) : e.startsWith("modules") && "function" == typeof t.register && t.register()
										}
									}]), d(e, [{
										key: "addContainer",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
											if ("string" == typeof e) {
												var n = e;

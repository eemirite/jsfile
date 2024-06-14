								for (var s = a.retain;
									"insert" === t.peekType() && t.peekLength() <= s;) s -= t.peekLength(), r.push(t.next());
								a.retain - s > 0 && n.next(a.retain - s)
							}
							for (var c = new u(r); t.hasNext() || n.hasNext();)
								if ("insert" === n.peekType()) c.push(n.next());
								else if ("delete" === t.peekType()) c.push(t.next());
							else {
								var l = Math.min(t.peekLength(), n.peekLength()),
									f = t.next(l),
									d = n.next(l);
								if ("number" == typeof d.retain) {
									var h = {};
									"number" == typeof f.retain ? h.retain = l : h.insert = f.insert;
									var p = o.attributes.compose(f.attributes, d.attributes, "number" == typeof f.retain);
									if (p && (h.attributes = p), c.push(h), !n.hasNext() && i(c.ops[c.ops.length - 1], h)) {
										var _ = new u(t.rest());
										return c.concat(_).chop()
									}
								} else "number" == typeof d.delete && "number" == typeof f.retain && c.push(d)
							}
							return c.chop()
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
							i = Object.defineProperty,
							a = Object.getOwnPropertyDescriptor,
							o = function(e) {
								return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e)
							},
							s = function(e) {
								if (!e || "[object Object]" !== r.call(e)) return !1;
								var t, i = n.call(e, "constructor"),
									a = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
								if (e.constructor && !i && !a) return !1;
								for (t in e);
								return void 0 === t || n.call(e, t)
							},
							u = function(e, t) {
								i && "__proto__" === t.name ? i(e, t.name, {
									enumerable: !0,
									configurable: !0,
									value: t.newValue,
									writable: !0
								}) : e[t.name] = t.newValue
							},
							c = function(e, t) {
								if ("__proto__" === t) {
									if (!n.call(e, t)) return;
									if (a) return a(e, t).value
								}
								return e[t]
							};
						e.exports = function e() {
							var t, n, r, i, a, l, f = arguments[0],
								d = 1,
								h = arguments.length,
								p = !1;
							for ("boolean" == typeof f && (p = f, f = arguments[1] || {}, d = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); d < h; ++d)
								if (null != (t = arguments[d]))
									for (n in t) r = c(f, n), f !== (i = c(t, n)) && (p && i && (s(i) || (a = o(i))) ? (a ? (a = !1, l = r && o(r) ? r : []) : l = r && s(r) ? r : {}, u(f, {
										name: n,
										newValue: e(p, l, i)
									})) : void 0 !== i && u(f, {
										name: n,
										newValue: i
									}));
							return f
						}
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.BlockEmbed = t.bubbleFormats = void 0;
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
							a = f(n(3)),
							o = f(n(2)),
							s = f(n(0)),
							u = f(n(16)),
							c = f(n(6)),
							l = f(n(7));

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
						var _ = function(e) {
							function t() {
								return d(this, t), h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return p(t, e), r(t, [{
								key: "attach",
								value: function() {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).call(this), this.attributes = new s.default.Attributor.Store(this.domNode)
								}
							}, {
								key: "delta",
								value: function() {
									return (new o.default).insert(this.value(), (0, a.default)(this.formats(), this.attributes.values()))
								}
							}, {
								key: "format",
								value: function(e, t) {
									var n = s.default.query(e, s.default.Scope.BLOCK_ATTRIBUTE);
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
										var a = s.default.create(m.blotName);
										this.parent.insertBefore(a, 0 === e ? this : this.next), a.insertAt(0, n.slice(0, -1))
									} else i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r)
								}
							}]), t
						}(s.default.Embed);
						_.scope = s.default.Scope.BLOCK_BLOT;
						var m = function(e) {
							function t(e) {
								d(this, t);
								var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
								return n.cache = {}, n
							}
							return p(t, e), r(t, [{
								key: "delta",
								value: function() {
									return null == this.cache.delta && (this.cache.delta = this.descendants(s.default.Leaf).reduce((function(e, t) {
										return 0 === t.length() ? e : e.insert(t.value(), b(t))
									}), new o.default).insert("\n", b(this))), this.cache.delta
								}
							}, {
								key: "deleteAt",
								value: function(e, n) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n), this.cache = {}
								}
							}, {
								key: "formatAt",
								value: function(e, n, r, a) {
									n <= 0 || (s.default.query(r, s.default.Scope.BLOCK) ? e + n === this.length() && this.format(r, a) : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, Math.min(n, this.length() - e - 1), r, a), this.cache = {})
								}
							}, {
								key: "insertAt",
								value: function(e, n, r) {
									if (null != r) return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
									if (0 !== n.length) {
										var a = n.split("\n"),
											o = a.shift();
										o.length > 0 && (e < this.length() - 1 || null == this.children.tail ? i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, Math.min(e, this.length() - 1), o) : this.children.tail.insertAt(this.children.tail.length(), o), this.cache = {});
										var s = this;
										a.reduce((function(e, t) {
											return (s = s.split(e, !0)).insertAt(0, t), t.length
										}), e + o.length)
									}
								}
							}, {
								key: "insertBefore",
								value: function(e, n) {
									var r = this.children.head;
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n), r instanceof u.default && r.remove(), this.cache = {}
								}
							}, {
								key: "length",
								value: function() {
									return null == this.cache.length && (this.cache.length = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "length", this).call(this) + 1), this.cache.length
								}
							}, {
								key: "moveChildren",
								value: function(e, n) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "moveChildren", this).call(this, e, n), this.cache = {}
								}
							}, {
								key: "optimize",
								value: function(e) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.cache = {}
								}
							}, {
								key: "path",
								value: function(e) {
									return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e, !0)
								}
							}, {
								key: "removeChild",
								value: function(e) {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeChild", this).call(this, e), this.cache = {}
								}
							}, {
								key: "split",
								value: function(e) {
									var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
									if (n && (0 === e || e >= this.length() - 1)) {
										var r = this.clone();
										return 0 === e ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
									}
									var a = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "split", this).call(this, e, n);
									return this.cache = {}, a
								}
							}]), t
						}(s.default.Block);

						function b(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return null == e ? t : ("function" == typeof e.formats && (t = (0, a.default)(t, e.formats())), null == e.parent || "scroll" == e.parent.blotName || e.parent.statics.scope !== e.statics.scope ? t : b(e.parent, t))
						}
						m.blotName = "block", m.tagName = "P", m.defaultChild = "break", m.allowedChildren = [c.default, s.default.Embed, l.default], t.bubbleFormats = b, t.BlockEmbed = _, t.default = m
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.overload = t.expandConfig = void 0;
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
							}();
						n(50);
						var o = m(n(2)),
							s = m(n(14)),
							u = m(n(8)),
							c = m(n(9)),
							l = m(n(0)),
							f = n(15),
							d = m(f),
							h = m(n(3)),
							p = m(n(10)),
							_ = m(n(34));

						function m(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function b(e, t, n) {
							return t in e ? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = n, e
						}

						function g(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}
						var v = (0, p.default)("quill"),
							y = function() {
								function e(t) {
									var n = this,
										r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									if (g(this, e), this.options = A(t, r), this.container = this.options.container, null == this.container) return v.error("Invalid Quill container", t);
									this.options.debug && e.debug(this.options.debug);
									var i = this.container.innerHTML.trim();
									this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new u.default, this.scroll = l.default.create(this.root, {
										emitter: this.emitter,
										whitelist: this.options.formats
									}), this.editor = new s.default(this.scroll), this.selection = new d.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(u.default.events.EDITOR_CHANGE, (function(e) {
										e === u.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
									})), this.emitter.on(u.default.events.SCROLL_UPDATE, (function(e, t) {
										var r = n.selection.lastRange,
											i = r && 0 === r.length ? r.index : void 0;
										S.call(n, (function() {
											return n.editor.update(null, t, i)
										}), e)
									}));
									var a = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + i + "<p><br></p></div>");
									this.setContents(a), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
								}
								return a(e, null, [{
									key: "debug",
									value: function(e) {
										!0 === e && (e = "log"), p.default.level(e)
									}
								}, {
									key: "find",
									value: function(e) {
										return e.__quill || l.default.find(e)
									}
								}, {
									key: "import",
									value: function(e) {
										return null == this.imports[e] && v.error("Cannot import " + e + ". Are you sure it was registered?"), this.imports[e]
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
										} else null == this.imports[e] || r || v.warn("Overwriting " + e + " with", t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && "abstract" !== t.blotName ? l.default.register(t) : e.startsWith("modules") && "function" == typeof t.register && t.register()
									}
								}]), a(e, [{
									key: "addContainer",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
										if ("string" == typeof e) {
											var n = e;
											(e = document.createElement("div")).classList.add(n)
										}
										return this.container.insertBefore(e, t), e
									}
								}, {
									key: "blur",
									value: function() {
										this.selection.setRange(null)
									}
								}, {
									key: "deleteText",
									value: function(e, t, n) {
										var r = this,
											a = w(e, t, n),
											o = i(a, 4);
										return e = o[0], t = o[1], n = o[3], S.call(this, (function() {
											return r.editor.deleteText(e, t)
										}), n, e, -1 * t)
									}
								}, {
									key: "disable",
									value: function() {
										this.enable(!1)
									}
								}, {
									key: "enable",
									value: function() {
										var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
										this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e)
									}
								}, {
									key: "focus",
									value: function() {
										var e = this.scrollingContainer.scrollTop;
										this.selection.focus(), this.scrollingContainer.scrollTop = e, this.scrollIntoView()
									}
								}, {
									key: "format",
									value: function(e, t) {
										var n = this,
											r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.sources.API;
										return S.call(this, (function() {
											var r = n.getSelection(!0),
												i = new o.default;
											if (null == r) return i;
											if (l.default.query(e, l.default.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, b({}, e, t));
											else {
												if (0 === r.length) return n.selection.format(e, t), i;
												i = n.editor.formatText(r.index, r.length, b({}, e, t))
											}
											return n.setSelection(r, u.default.sources.SILENT), i
										}), r)
									}
								}, {
									key: "formatLine",
									value: function(e, t, n, r, a) {
										var o, s = this,
											u = w(e, t, n, r, a),
											c = i(u, 4);
										return e = c[0], t = c[1], o = c[2], a = c[3], S.call(this, (function() {
											return s.editor.formatLine(e, t, o)
										}), a, e, 0)
									}
								}, {
									key: "formatText",
									value: function(e, t, n, r, a) {
										var o, s = this,
											u = w(e, t, n, r, a),
											c = i(u, 4);
										return e = c[0], t = c[1], o = c[2], a = c[3], S.call(this, (function() {
											return s.editor.formatText(e, t, o)
										}), a, e, 0)
									}
								}, {
									key: "getBounds",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
											n = void 0;
										n = "number" == typeof e ? this.selection.getBounds(e, t) : this.selection.getBounds(e.index, e.length);
										var r = this.container.getBoundingClientRect();
										return {
											bottom: n.bottom - r.top,
											height: n.height,
											left: n.left - r.left,
											right: n.right - r.left,
											top: n.top - r.top,
											width: n.width
										}
									}
								}, {
									key: "getContents",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
											t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e,
											n = w(e, t),
											r = i(n, 2);
										return e = r[0], t = r[1], this.editor.getContents(e, t)
									}
								}, {
									key: "getFormat",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
											t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
										return "number" == typeof e ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length)
									}
								}, {
									key: "getIndex",
									value: function(e) {
										return e.offset(this.scroll)
									}
								}, {
									key: "getLength",
									value: function() {
										return this.scroll.length()
									}
								}, {
									key: "getLeaf",
									value: function(e) {
										return this.scroll.leaf(e)
									}
								}, {
									key: "getLine",
									value: function(e) {
										return this.scroll.line(e)
									}
								}, {
									key: "getLines",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
											t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
										return "number" != typeof e ? this.scroll.lines(e.index, e.length) : this.scroll.lines(e, t)
									}
								}, {
									key: "getModule",
									value: function(e) {
										return this.theme.modules[e]
									}
								}, {
									key: "getSelection",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
										return e && this.focus(), this.update(), this.selection.getRange()[0]
									}
								}, {
									key: "getText",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
											t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e,
											n = w(e, t),
											r = i(n, 2);
										return e = r[0], t = r[1], this.editor.getText(e, t)
									}
								}, {
									key: "hasFocus",
									value: function() {
										return this.selection.hasFocus()
									}
								}, {
									key: "insertEmbed",
									value: function(t, n, r) {
										var i = this,
											a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.sources.API;
										return S.call(this, (function() {
											return i.editor.insertEmbed(t, n, r)
										}), a, t)
									}
								}, {
									key: "insertText",
									value: function(e, t, n, r, a) {
										var o, s = this,
											u = w(e, 0, n, r, a),
											c = i(u, 4);
										return e = c[0], o = c[2], a = c[3], S.call(this, (function() {
											return s.editor.insertText(e, t, o)
										}), a, e, t.length)
									}
								}, {
									key: "isEnabled",
									value: function() {
										return !this.container.classList.contains("ql-disabled")
									}
								}, {
									key: "off",
									value: function() {
										return this.emitter.off.apply(this.emitter, arguments)
									}
								}, {
									key: "on",
									value: function() {
										return this.emitter.on.apply(this.emitter, arguments)
									}
								}, {
									key: "once",
									value: function() {
										return this.emitter.once.apply(this.emitter, arguments)
									}
								}, {
									key: "pasteHTML",
									value: function(e, t, n) {
										this.clipboard.dangerouslyPasteHTML(e, t, n)
									}
								}, {
									key: "removeFormat",
									value: function(e, t, n) {
										var r = this,
											a = w(e, t, n),
											o = i(a, 4);
										return e = o[0], t = o[1], n = o[3], S.call(this, (function() {
											return r.editor.removeFormat(e, t)
										}), n, e)
									}
								}, {
									key: "scrollIntoView",
									value: function() {
										this.selection.scrollIntoView(this.scrollingContainer)
									}
								}, {
									key: "setContents",
									value: function(e) {
										var t = this,
											n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.sources.API;
										return S.call(this, (function() {
											e = new o.default(e);
											var n = t.getLength(),
												r = t.editor.deleteText(0, n),
												i = t.editor.applyDelta(e),
												a = i.ops[i.ops.length - 1];
											return null != a && "string" == typeof a.insert && "\n" === a.insert[a.insert.length - 1] && (t.editor.deleteText(t.getLength() - 1, 1), i.delete(1)), r.compose(i)
										}), n)
									}
								}, {
									key: "setSelection",
									value: function(t, n, r) {
										if (null == t) this.selection.setRange(null, n || e.sources.API);
										else {
											var a = w(t, n, r),
												o = i(a, 4);
											t = o[0], n = o[1], r = o[3], this.selection.setRange(new f.Range(t, n), r), r !== u.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
										}
									}
								}, {
									key: "setText",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.sources.API,
											n = (new o.default).insert(e);
										return this.setContents(n, t)
									}
								}, {
									key: "update",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.default.sources.USER,
											t = this.scroll.update(e);
										return this.selection.update(e), t
									}
								}, {
									key: "updateContents",
									value: function(e) {
										var t = this,
											n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.sources.API;
										return S.call(this, (function() {
											return e = new o.default(e), t.editor.applyDelta(e, n)
										}), n, !0)
									}
								}]), e
							}();

						function A(e, t) {
							if ((t = (0, h.default)(!0, {
									container: e,
									modules: {
										clipboard: !0,
										keyboard: !0,
										history: !0
									}
								}, t)).theme && t.theme !== y.DEFAULTS.theme) {
								if (t.theme = y.import("themes/" + t.theme), null == t.theme) throw new Error("Invalid theme " + t.theme + ". Did you register it?")
							} else t.theme = _.default;
							var n = (0, h.default)(!0, {}, t.theme.DEFAULTS);
							[n, t].forEach((function(e) {
								e.modules = e.modules || {}, Object.keys(e.modules).forEach((function(t) {
									!0 === e.modules[t] && (e.modules[t] = {})
								}))
							}));
							var r = Object.keys(n.modules).concat(Object.keys(t.modules)).reduce((function(e, t) {
								var n = y.import("modules/" + t);
								return null == n ? v.error("Cannot load " + t + " module. Are you sure you registered it?") : e[t] = n.DEFAULTS || {}, e
							}), {});
							return null != t.modules && t.modules.toolbar && t.modules.toolbar.constructor !== Object && (t.modules.toolbar = {
								container: t.modules.toolbar
							}), t = (0, h.default)(!0, {}, y.DEFAULTS, {
								modules: r
							}, n, t), ["bounds", "container", "scrollingContainer"].forEach((function(e) {
								"string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
							})), t.modules = Object.keys(t.modules).reduce((function(e, n) {
								return t.modules[n] && (e[n] = t.modules[n]), e
							}), {}), t
						}

						function S(e, t, n, r) {
							if (this.options.strict && !this.isEnabled() && t === u.default.sources.USER) return new o.default;
							var i = null == n ? null : this.getSelection(),
								a = this.editor.delta,
								s = e();
							if (null != i && (!0 === n && (n = i.index), null == r ? i = E(i, s, t) : 0 !== r && (i = E(i, n, r, t)), this.setSelection(i, u.default.sources.SILENT)), s.length() > 0) {
								var c, l, f = [u.default.events.TEXT_CHANGE, s, a, t];
								(c = this.emitter).emit.apply(c, [u.default.events.EDITOR_CHANGE].concat(f)), t !== u.default.sources.SILENT && (l = this.emitter).emit.apply(l, f)
							}
							return s
						}

						function w(e, t, n, i, a) {
							var o = {};
							return "number" == typeof e.index && "number" == typeof e.length ? "number" != typeof t ? (a = i, i = n, n = t, t = e.length, e = e.index) : (t = e.length, e = e.index) : "number" != typeof t && (a = i, i = n, n = t, t = 0), "object" === (void 0 === n ? "undefined" : r(n)) ? (o = n, a = i) : "string" == typeof n && (null != i ? o[n] = i : a = n), [e, t, o, a = a || u.default.sources.API]
						}

						function E(e, t, n, r) {
							if (null == e) return null;
							var a = void 0,
								s = void 0;
							if (t instanceof o.default) {
								var c = [e.index, e.index + e.length].map((function(e) {
										return t.transformPosition(e, r !== u.default.sources.USER)
									})),
									l = i(c, 2);
								a = l[0], s = l[1]
							} else {
								var d = [e.index, e.index + e.length].map((function(e) {
										return e < t || e === t && r === u.default.sources.USER ? e : n >= 0 ? e + n : Math.max(t, e + n)
									})),
									h = i(d, 2);
								a = h[0], s = h[1]
							}
							return new f.Range(a, s - a)
						}
						y.DEFAULTS = {
							bounds: null,
							formats: null,
							modules: {},
							placeholder: "",
							readOnly: !1,
							scrollingContainer: null,
							strict: !0,
							theme: "default"
						}, y.events = u.default.events, y.sources = u.default.sources, y.version = "1.3.7", y.imports = {
							delta: o.default,
							parchment: l.default,
							"core/module": c.default,
							"core/theme": _.default
						}, t.expandConfig = A, t.overload = w, t.default = y
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
							a = s(n(7)),
							o = s(n(0));

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
						var l = function(e) {
							function t() {
								return u(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
								key: "formatAt",
								value: function(e, n, r, a) {
									if (t.compare(this.statics.blotName, r) < 0 && o.default.query(r, o.default.Scope.BLOT)) {
										var s = this.isolate(e, n);
										a && s.wrap(r, a)
									} else i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, a)
								}
							}, {
								key: "optimize",
								value: function(e) {
									if (i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.parent instanceof t && t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
										var n = this.parent.isolate(this.offset(), this.length());
										this.moveChildren(n), n.wrap(this)
									}
								}
							}], [{
								key: "compare",
								value: function(e, n) {
									var r = t.order.indexOf(e),
										i = t.order.indexOf(n);
									return r >= 0 || i >= 0 ? r - i : e === n ? 0 : e < n ? -1 : 1
								}
							}]), t
						}(o.default.Inline);
						l.allowedChildren = [l, o.default.Embed, a.default], l.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], t.default = l
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
						}(n(0)).default.Text);
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
							a = o(n(54));

						function o(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var s = (0, o(n(10)).default)("quill:events");
						["selectionchange", "mousedown", "mouseup", "click"].forEach((function(e) {
							document.addEventListener(e, (function() {
								for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
								[].slice.call(document.querySelectorAll(".ql-container")).forEach((function(e) {
									var n;
									e.__quill && e.__quill.emitter && (n = e.__quill.emitter).handleDOM.apply(n, t)
								}))
							}))
						}));
						var u = function(e) {
							function t() {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var e = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
								return e.listeners = {}, e.on("error", s.error), e
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
								key: "emit",
								value: function() {
									s.log.apply(s, arguments), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "emit", this).apply(this, arguments)
								}
							}, {
								key: "handleDOM",
								value: function(e) {
									for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
									(this.listeners[e.type] || []).forEach((function(t) {
										var r = t.node,
											i = t.handler;
										(e.target === r || r.contains(e.target)) && i.apply(void 0, [e].concat(n))
									}))
								}
							}, {
								key: "listenDOM",
								value: function(e, t, n) {
									this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push({
										node: t,
										handler: n
									})
								}
							}]), t
						}(a.default);
						u.events = {
							EDITOR_CHANGE: "editor-change",
							SCROLL_BEFORE_UPDATE: "scroll-before-update",
							SCROLL_OPTIMIZE: "scroll-optimize",
							SCROLL_UPDATE: "scroll-update",
							SELECTION_CHANGE: "selection-change",
							TEXT_CHANGE: "text-change"
						}, u.sources = {
							API: "api",
							SILENT: "silent",
							USER: "user"
						}, t.default = u
					}, function(e, t, n) {
						"use strict";

						function r(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var i = function e(t) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							r(this, e), this.quill = t, this.options = n
						};
						i.DEFAULTS = {}, t.default = i
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = ["error", "warn", "log", "info"],
							i = "warn";

						function a(e) {
							if (r.indexOf(e) <= r.indexOf(i)) {
								for (var t, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
								(t = console)[e].apply(t, a)
							}
						}

						function o(e) {
							return r.reduce((function(t, n) {
								return t[n] = a.bind(console, n, e), t
							}), {})
						}
						a.level = o.level = function(e) {
							i = e
						}, t.default = o
					}, function(e, t, n) {
						var r = Array.prototype.slice,
							i = n(52),
							a = n(53),
							o = e.exports = function(e, t, n) {
								return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function(e, t, n) {
									var c, l;
									if (s(e) || s(t)) return !1;
									if (e.prototype !== t.prototype) return !1;
									if (a(e)) return !!a(t) && (e = r.call(e), t = r.call(t), o(e, t, n));
									if (u(e)) {
										if (!u(t)) return !1;
										if (e.length !== t.length) return !1;
										for (c = 0; c < e.length; c++)
											if (e[c] !== t[c]) return !1;
										return !0
									}
									try {
										var f = i(e),
											d = i(t)
									} catch (e) {
										return !1
									}
									if (f.length != d.length) return !1;
									for (f.sort(), d.sort(), c = f.length - 1; c >= 0; c--)
										if (f[c] != d[c]) return !1;
									for (c = f.length - 1; c >= 0; c--)
										if (l = f[c], !o(e[l], t[l], n)) return !1;
									return typeof e == typeof t
								}(e, t, n))
							};

						function s(e) {
							return null == e
						}

						function u(e) {
							return !(!e || "object" != typeof e || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0])
						}
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = n(1),
							i = function() {
								function e(e, t, n) {
									void 0 === n && (n = {}), this.attrName = e, this.keyName = t;
									var i = r.Scope.TYPE & r.Scope.ATTRIBUTE;
									null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | i : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
								}
								return e.keys = function(e) {
									return [].map.call(e.attributes, (function(e) {
										return e.name
									}))
								}, e.prototype.add = function(e, t) {
									return !!this.canAdd(e, t) && (e.setAttribute(this.keyName, t), !0)
								}, e.prototype.canAdd = function(e, t) {
									return null != r.query(e, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof t ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1))
								}, e.prototype.remove = function(e) {
									e.removeAttribute(this.keyName)
								}, e.prototype.value = function(e) {
									var t = e.getAttribute(this.keyName);
									return this.canAdd(e, t) && t ? t : ""
								}, e
							}();
						t.default = i
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.Code = void 0;
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
							a = function e(t, n, r) {
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
							o = f(n(2)),
							s = f(n(0)),
							u = f(n(4)),
							c = f(n(6)),
							l = f(n(7));

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
						var _ = function(e) {
							function t() {
								return d(this, t), h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return p(t, e), t
						}(c.default);
						_.blotName = "code", _.tagName = "CODE";
						var m = function(e) {
							function t() {
								return d(this, t), h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
							}
							return p(t, e), i(t, [{
								key: "delta",
								value: function() {
									var e = this,
										t = this.domNode.textContent;
									return t.endsWith("\n") && (t = t.slice(0, -1)), t.split("\n").reduce((function(t, n) {
										return t.insert(n).insert("\n", e.formats())
									}), new o.default)
								}
							}, {
								key: "format",
								value: function(e, n) {
									if (e !== this.statics.blotName || !n) {
										var i = this.descendant(l.default, this.length() - 1),
											o = r(i, 1)[0];
										null != o && o.deleteAt(o.length() - 1, 1), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
									}
								}
							}, {
								key: "formatAt",
								value: function(e, n, r, i) {
									if (0 !== n && null != s.default.query(r, s.default.Scope.BLOCK) && (r !== this.statics.blotName || i !== this.statics.formats(this.domNode))) {
										var a = this.newlineIndex(e);
										if (!(a < 0 || a >= e + n)) {
											var o = this.newlineIndex(e, !0) + 1,
												u = a - o + 1,
												c = this.isolate(o, u),
												l = c.next;
											c.format(r, i), l instanceof t && l.formatAt(0, e - o + n - u, r, i)
										}
									}
								}
							}, {
								key: "insertAt",
								value: function(e, t, n) {
									if (null == n) {
										var i = this.descendant(l.default, e),
											a = r(i, 2),
											o = a[0],
											s = a[1];
										o.insertAt(s, t)
									}
								}
							}, {
								key: "length",
								value: function() {
									var e = this.domNode.textContent.length;
									return this.domNode.textContent.endsWith("\n") ? e : e + 1
								}
							}, {
								key: "newlineIndex",
								value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
									if (t) return this.domNode.textContent.slice(0, e).lastIndexOf("\n");
									var n = this.domNode.textContent.slice(e).indexOf("\n");
									return n > -1 ? e + n : -1
								}
							}, {
								key: "optimize",
								value: function(e) {
									this.domNode.textContent.endsWith("\n") || this.appendChild(s.default.create("text", "\n")), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
									var n = this.next;
									null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(e), n.moveChildren(this), n.remove())
								}
							}, {
								key: "replace",
								value: function(e) {
									a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e), [].slice.call(this.domNode.querySelectorAll("*")).forEach((function(e) {
										var t = s.default.find(e);
										null == t ? e.parentNode.removeChild(e) : t instanceof s.default.Embed ? t.remove() : t.unwrap()
									}))
								}
							}], [{
								key: "create",
								value: function(e) {
									var n = a(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
									return n.setAttribute("spellcheck", !1), n
								}
							}, {
								key: "formats",
								value: function() {
									return !0
								}
							}]), t
						}(u.default);
						m.blotName = "code-block", m.tagName = "PRE", m.TAB = "  ", t.Code = _, t.default = m
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
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
							o = b(n(2)),
							s = b(n(20)),
							u = b(n(0)),
							c = b(n(13)),
							l = b(n(24)),
							f = n(4),
							d = b(f),
							h = b(n(16)),
							p = b(n(21)),
							_ = b(n(11)),
							m = b(n(3));

						function b(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var g = /^[ -~]*$/,
							v = function() {
								function e(t) {
									(function(e, t) {
										if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
									})(this, e), this.scroll = t, this.delta = this.getDelta()
								}
								return a(e, [{
									key: "applyDelta",
									value: function(e) {
										var t = this,
											n = !1;
										this.scroll.update();
										var a = this.scroll.length();
										return this.scroll.batchStart(), (e = function(e) {
											return e.reduce((function(e, t) {
												if (1 === t.insert) {
													var n = (0, p.default)(t.attributes);
													return delete n.image, e.insert({
														image: t.attributes.image
													}, n)
												}
												if (null == t.attributes || !0 !== t.attributes.list && !0 !== t.attributes.bullet || ((t = (0, p.default)(t)).attributes.list ? t.attributes.list = "ordered" : (t.attributes.list = "bullet", delete t.attributes.bullet)), "string" == typeof t.insert) {
													var r = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
													return e.insert(r, t.attributes)
												}
												return e.push(t)
											}), new o.default)
										}(e)).reduce((function(e, o) {
											var c = o.retain || o.delete || o.insert.length || 1,
												l = o.attributes || {};
											if (null != o.insert) {
												if ("string" == typeof o.insert) {
													var h = o.insert;
													h.endsWith("\n") && n && (n = !1, h = h.slice(0, -1)), e >= a && !h.endsWith("\n") && (n = !0), t.scroll.insertAt(e, h);
													var p = t.scroll.line(e),
														_ = i(p, 2),
														b = _[0],
														g = _[1],
														v = (0, m.default)({}, (0, f.bubbleFormats)(b));
													if (b instanceof d.default) {
														var y = b.descendant(u.default.Leaf, g),
															A = i(y, 1)[0];
														v = (0, m.default)(v, (0, f.bubbleFormats)(A))
													}
													l = s.default.attributes.diff(v, l) || {}
												} else if ("object" === r(o.insert)) {
													var S = Object.keys(o.insert)[0];
													if (null == S) return e;
													t.scroll.insertAt(e, S, o.insert[S])
												}
												a += c
											}
											return Object.keys(l).forEach((function(n) {
												t.scroll.formatAt(e, c, n, l[n])
											})), e + c
										}), 0), e.reduce((function(e, n) {
											return "number" == typeof n.delete ? (t.scroll.deleteAt(e, n.delete), e) : e + (n.retain || n.insert.length || 1)
										}), 0), this.scroll.batchEnd(), this.update(e)
									}
								}, {
									key: "deleteText",
									value: function(e, t) {
										return this.scroll.deleteAt(e, t), this.update((new o.default).retain(e).delete(t))
									}
								}, {
									key: "formatLine",
									value: function(e, t) {
										var n = this,
											r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
										return this.scroll.update(), Object.keys(r).forEach((function(i) {
											if (null == n.scroll.whitelist || n.scroll.whitelist[i]) {
												var a = n.scroll.lines(e, Math.max(t, 1)),
													o = t;
												a.forEach((function(t) {
													var a = t.length();
													if (t instanceof c.default) {
														var s = e - t.offset(n.scroll),
															u = t.newlineIndex(s + o) - s + 1;
														t.formatAt(s, u, i, r[i])
													} else t.format(i, r[i]);
													o -= a
												}))
											}
										})), this.scroll.optimize(), this.update((new o.default).retain(e).retain(t, (0, p.default)(r)))
									}
								}, {
									key: "formatText",
									value: function(e, t) {
										var n = this,
											r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
										return Object.keys(r).forEach((function(i) {
											n.scroll.formatAt(e, t, i, r[i])
										})), this.update((new o.default).retain(e).retain(t, (0, p.default)(r)))
									}
								}, {
									key: "getContents",
									value: function(e, t) {
										return this.delta.slice(e, e + t)
									}
								}, {
									key: "getDelta",
									value: function() {
										return this.scroll.lines().reduce((function(e, t) {
											return e.concat(t.delta())
										}), new o.default)
									}
								}, {
									key: "getFormat",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
											n = [],
											r = [];
										0 === t ? this.scroll.path(e).forEach((function(e) {
											var t = i(e, 1)[0];
											t instanceof d.default ? n.push(t) : t instanceof u.default.Leaf && r.push(t)
										})) : (n = this.scroll.lines(e, t), r = this.scroll.descendants(u.default.Leaf, e, t));
										var a = [n, r].map((function(e) {
											if (0 === e.length) return {};
											for (var t = (0, f.bubbleFormats)(e.shift()); Object.keys(t).length > 0;) {
												var n = e.shift();
												if (null == n) return t;
												t = y((0, f.bubbleFormats)(n), t)
											}
											return t
										}));
										return m.default.apply(m.default, a)
									}
								}, {
									key: "getText",
									value: function(e, t) {
										return this.getContents(e, t).filter((function(e) {
											return "string" == typeof e.insert
										})).map((function(e) {
											return e.insert
										})).join("")
									}
								}, {
									key: "insertEmbed",
									value: function(e, t, n) {
										return this.scroll.insertAt(e, t, n), this.update((new o.default).retain(e).insert(function(e, t, n) {
											return t in e ? Object.defineProperty(e, t, {
												value: n,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}) : e[t] = n, e
										}({}, t, n)))
									}
								}, {
									key: "insertText",
									value: function(e, t) {
										var n = this,
											r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
										return t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(e, t), Object.keys(r).forEach((function(i) {
											n.scroll.formatAt(e, t.length, i, r[i])
										})), this.update((new o.default).retain(e).insert(t, (0, p.default)(r)))
									}
								}, {
									key: "isBlank",
									value: function() {
										if (0 == this.scroll.children.length) return !0;
										if (this.scroll.children.length > 1) return !1;
										var e = this.scroll.children.head;
										return e.statics.blotName === d.default.blotName && !(e.children.length > 1) && e.children.head instanceof h.default
									}
								}, {
									key: "removeFormat",
									value: function(e, t) {
										var n = this.getText(e, t),
											r = this.scroll.line(e + t),
											a = i(r, 2),
											s = a[0],
											u = a[1],
											l = 0,
											f = new o.default;
										null != s && (l = s instanceof c.default ? s.newlineIndex(u) - u + 1 : s.length() - u, f = s.delta().slice(u, u + l - 1).insert("\n"));
										var d = this.getContents(e, t + l).diff((new o.default).insert(n).concat(f)),
											h = (new o.default).retain(e).concat(d);
										return this.applyDelta(h)
									}
								}, {
									key: "update",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
											n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
											r = this.delta;
										if (1 === t.length && "characterData" === t[0].type && t[0].target.data.match(g) && u.default.find(t[0].target)) {
											var i = u.default.find(t[0].target),
												a = (0, f.bubbleFormats)(i),
												s = i.offset(this.scroll),
												c = t[0].oldValue.replace(l.default.CONTENTS, ""),
												d = (new o.default).insert(c),
												h = (new o.default).insert(i.value()),
												p = (new o.default).retain(s).concat(d.diff(h, n));
											e = p.reduce((function(e, t) {
												return t.insert ? e.insert(t.insert, a) : e.push(t)
											}), new o.default), this.delta = r.compose(e)
										} else this.delta = this.getDelta(), e && (0, _.default)(r.compose(e), this.delta) || (e = r.diff(this.delta, n));
										return e
									}
								}]), e
							}();

						function y(e, t) {
							return Object.keys(t).reduce((function(n, r) {
								return null == e[r] || (t[r] === e[r] ? n[r] = t[r] : Array.isArray(t[r]) ? t[r].indexOf(e[r]) < 0 && (n[r] = t[r].concat([e[r]])) : n[r] = [t[r], e[r]]), n
							}), {})
						}
						t.default = v
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.Range = void 0;
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
							a = c(n(0)),
							o = c(n(21)),
							s = c(n(11)),
							u = c(n(8));

						function c(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function l(e) {
							if (Array.isArray(e)) {
								for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
								return n
							}
							return Array.from(e)
						}

						function f(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}
						var d = (0, c(n(10)).default)("quill:selection"),
							h = function e(t) {
								var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
								f(this, e), this.index = t, this.length = n
							},
							p = function() {
								function e(t, n) {
									var r = this;
									f(this, e), this.emitter = n, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = a.default.create("cursor", this), this.lastRange = this.savedRange = new h(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (function() {
										r.mouseDown || setTimeout(r.update.bind(r, u.default.sources.USER), 1)
									})), this.emitter.on(u.default.events.EDITOR_CHANGE, (function(e, t) {
										e === u.default.events.TEXT_CHANGE && t.length() > 0 && r.update(u.default.sources.SILENT)
									})), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, (function() {
										if (r.hasFocus()) {
											var e = r.getNativeRange();
											null != e && e.start.node !== r.cursor.textNode && r.emitter.once(u.default.events.SCROLL_UPDATE, (function() {
												try {
													r.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset)
												} catch (e) {}
											}))
										}
									})), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, (function(e, t) {
										if (t.range) {
											var n = t.range,
												i = n.startNode,
												a = n.startOffset,
												o = n.endNode,
												s = n.endOffset;
											r.setNativeRange(i, a, o, s)
										}
									})), this.update(u.default.sources.SILENT)
								}
								return i(e, [{
									key: "handleComposition",
									value: function() {
										var e = this;
										this.root.addEventListener("compositionstart", (function() {
											e.composing = !0
										})), this.root.addEventListener("compositionend", (function() {
											if (e.composing = !1, e.cursor.parent) {
												var t = e.cursor.restore();
												if (!t) return;
												setTimeout((function() {
													e.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset)
												}), 1)
											}
										}))
									}
								}, {
									key: "handleDragging",
									value: function() {
										var e = this;
										this.emitter.listenDOM("mousedown", document.body, (function() {
											e.mouseDown = !0
										})), this.emitter.listenDOM("mouseup", document.body, (function() {
											e.mouseDown = !1, e.update(u.default.sources.USER)
										}))
									}
								}, {
									key: "focus",
									value: function() {
										this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
									}
								}, {
									key: "format",
									value: function(e, t) {
										if (null == this.scroll.whitelist || this.scroll.whitelist[e]) {
											this.scroll.update();
											var n = this.getNativeRange();
											if (null != n && n.native.collapsed && !a.default.query(e, a.default.Scope.BLOCK)) {
												if (n.start.node !== this.cursor.textNode) {
													var r = a.default.find(n.start.node, !1);
													if (null == r) return;
													if (r instanceof a.default.Leaf) {
														var i = r.split(n.start.offset);
														r.parent.insertBefore(this.cursor, i)
													} else r.insertBefore(this.cursor, n.start.node);
													this.cursor.attach()
												}
												this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
											}
										}
									}
								}, {
									key: "getBounds",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
											n = this.scroll.length();
										e = Math.min(e, n - 1), t = Math.min(e + t, n - 1) - e;
										var i = void 0,
											a = this.scroll.leaf(e),
											o = r(a, 2),
											s = o[0],
											u = o[1];
										if (null == s) return null;
										var c = s.position(u, !0),
											l = r(c, 2);
										i = l[0], u = l[1];
										var f = document.createRange();
										if (t > 0) {
											f.setStart(i, u);
											var d = this.scroll.leaf(e + t),
												h = r(d, 2);
											if (s = h[0], u = h[1], null == s) return null;
											var p = s.position(u, !0),
												_ = r(p, 2);
											return i = _[0], u = _[1], f.setEnd(i, u), f.getBoundingClientRect()
										}
										var m = "left",
											b = void 0;
										return i instanceof Text ? (u < i.data.length ? (f.setStart(i, u), f.setEnd(i, u + 1)) : (f.setStart(i, u - 1), f.setEnd(i, u), m = "right"), b = f.getBoundingClientRect()) : (b = s.domNode.getBoundingClientRect(), u > 0 && (m = "right")), {
											bottom: b.top + b.height,
											height: b.height,
											left: b[m],
											right: b[m],
											top: b.top,
											width: 0
										}
									}
								}, {
									key: "getNativeRange",
									value: function() {
										var e = document.getSelection();
										if (null == e || e.rangeCount <= 0) return null;
										var t = e.getRangeAt(0);
										if (null == t) return null;
										var n = this.normalizeNative(t);
										return d.info("getNativeRange", n), n
									}
								}, {
									key: "getRange",
									value: function() {
										var e = this.getNativeRange();
										return null == e ? [null, null] : [this.normalizedToRange(e), e]
									}
								}, {
									key: "hasFocus",
									value: function() {
										return document.activeElement === this.root
									}
								}, {
									key: "normalizedToRange",
									value: function(e) {
										var t = this,
											n = [
												[e.start.node, e.start.offset]
											];
										e.native.collapsed || n.push([e.end.node, e.end.offset]);
										var i = n.map((function(e) {
												var n = r(e, 2),
													i = n[0],
													o = n[1],
													s = a.default.find(i, !0),
													u = s.offset(t.scroll);
												return 0 === o ? u : s instanceof a.default.Container ? u + s.length() : u + s.index(i, o)
											})),
											o = Math.min(Math.max.apply(Math, l(i)), this.scroll.length() - 1),
											s = Math.min.apply(Math, [o].concat(l(i)));
										return new h(s, o - s)
									}
								}, {
									key: "normalizeNative",
									value: function(e) {
										if (!_(this.root, e.startContainer) || !e.collapsed && !_(this.root, e.endContainer)) return null;
										var t = {
											start: {
												node: e.startContainer,
												offset: e.startOffset
											},
											end: {
												node: e.endContainer,
												offset: e.endOffset
											},
											native: e
										};
										return [t.start, t.end].forEach((function(e) {
											for (var t = e.node, n = e.offset; !(t instanceof Text) && t.childNodes.length > 0;)
												if (t.childNodes.length > n) t = t.childNodes[n], n = 0;
												else {
													if (t.childNodes.length !== n) break;
													n = (t = t.lastChild) instanceof Text ? t.data.length : t.childNodes.length + 1
												} e.node = t, e.offset = n
										})), t
									}
								}, {
									key: "rangeToNative",
									value: function(e) {
										var t = this,
											n = e.collapsed ? [e.index] : [e.index, e.index + e.length],
											i = [],
											a = this.scroll.length();
										return n.forEach((function(e, n) {
											e = Math.min(a - 1, e);
											var o, s = t.scroll.leaf(e),
												u = r(s, 2),
												c = u[0],
												l = u[1],
												f = c.position(l, 0 !== n),
												d = r(f, 2);
											o = d[0], l = d[1], i.push(o, l)
										})), i.length < 2 && (i = i.concat(i)), i
									}
								}, {
									key: "scrollIntoView",
									value: function(e) {
										var t = this.lastRange;
										if (null != t) {
											var n = this.getBounds(t.index, t.length);
											if (null != n) {
												var i = this.scroll.length() - 1,
													a = this.scroll.line(Math.min(t.index, i)),
													o = r(a, 1)[0],
													s = o;
												if (t.length > 0) {
													var u = this.scroll.line(Math.min(t.index + t.length, i));
													s = r(u, 1)[0]
												}
												if (null != o && null != s) {
													var c = e.getBoundingClientRect();
													n.top < c.top ? e.scrollTop -= c.top - n.top : n.bottom > c.bottom && (e.scrollTop += n.bottom - c.bottom)
												}
											}
										}
									}
								}, {
									key: "setNativeRange",
									value: function(e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
											r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
											i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
										if (d.info("setNativeRange", e, t, n, r), null == e || null != this.root.parentNode && null != e.parentNode && null != n.parentNode) {
											var a = document.getSelection();
											if (null != a)
												if (null != e) {
													this.hasFocus() || this.root.focus();
													var o = (this.getNativeRange() || {}).native;
													if (null == o || i || e !== o.startContainer || t !== o.startOffset || n !== o.endContainer || r !== o.endOffset) {
														"BR" == e.tagName && (t = [].indexOf.call(e.parentNode.childNodes, e), e = e.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
														var s = document.createRange();
														s.setStart(e, t), s.setEnd(n, r), a.removeAllRanges(), a.addRange(s)
													}
												} else a.removeAllRanges(), this.root.blur(), document.body.focus()
										}
									}
								}, {
									key: "setRange",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
											n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.sources.API;
										if ("string" == typeof t && (n = t, t = !1), d.info("setRange", e), null != e) {
											var r = this.rangeToNative(e);
											this.setNativeRange.apply(this, l(r).concat([t]))
										} else this.setNativeRange(null);
										this.update(n)
									}
								}, {
									key: "update",
									value: function() {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.default.sources.USER,
											t = this.lastRange,
											n = this.getRange(),
											i = r(n, 2),
											a = i[0],
											c = i[1];
										if (this.lastRange = a, null != this.lastRange && (this.savedRange = this.lastRange), !(0, s.default)(t, this.lastRange)) {
											var l;
											!this.composing && null != c && c.native.collapsed && c.start.node !== this.cursor.textNode && this.cursor.restore();
											var f, d = [u.default.events.SELECTION_CHANGE, (0, o.default)(this.lastRange), (0, o.default)(t), e];
											(l = this.emitter).emit.apply(l, [u.default.events.EDITOR_CHANGE].concat(d)), e !== u.default.sources.SILENT && (f = this.emitter).emit.apply(f, d)
										}
									}
								}]), e
							}();

						function _(e, t) {
							try {
								t.parentNode
							} catch (e) {
								return !1
							}
							return t instanceof Text && (t = t.parentNode), e.contains(t)
						}
						t.Range = h, t.default = p
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
							}(t, e), r(t, [{
								key: "insertInto",
								value: function(e, n) {
									0 === e.children.length ? function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertInto", this).call(this, e, n) : this.remove()
								}
							}, {
								key: "length",
								value: function() {
									return 0
								}
							}, {
								key: "value",
								value: function() {
									return ""
								}
							}], [{
								key: "value",
								value: function() {}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(0)).default.Embed);
						o.blotName = "break", o.tagName = "BR", t.default = o
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(44),
							a = n(30),
							o = n(1),
							s = function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return n.build(), n
								}
								return r(t, e), t.prototype.appendChild = function(e) {
									this.insertBefore(e)
								}, t.prototype.attach = function() {
									e.prototype.attach.call(this), this.children.forEach((function(e) {
										e.attach()
									}))
								}, t.prototype.build = function() {
									var e = this;
									this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach((function(t) {
										try {
											var n = u(t);
											e.insertBefore(n, e.children.head || void 0)
										} catch (e) {
											if (e instanceof o.ParchmentError) return;
											throw e
										}
									}))
								}, t.prototype.deleteAt = function(e, t) {
									if (0 === e && t === this.length()) return this.remove();
									this.children.forEachAt(e, t, (function(e, t, n) {
										e.deleteAt(t, n)
									}))
								}, t.prototype.descendant = function(e, n) {
									var r = this.children.find(n),
										i = r[0],
										a = r[1];
									return null == e.blotName && e(i) || null != e.blotName && i instanceof e ? [i, a] : i instanceof t ? i.descendant(e, a) : [null, -1]
								}, t.prototype.descendants = function(e, n, r) {
									void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
									var i = [],
										a = r;
									return this.children.forEachAt(n, r, (function(n, r, o) {
										(null == e.blotName && e(n) || null != e.blotName && n instanceof e) && i.push(n), n instanceof t && (i = i.concat(n.descendants(e, r, a))), a -= o
									})), i
								}, t.prototype.detach = function() {
									this.children.forEach((function(e) {
										e.detach()
									})), e.prototype.detach.call(this)
								}, t.prototype.formatAt = function(e, t, n, r) {
									this.children.forEachAt(e, t, (function(e, t, i) {
										e.formatAt(t, i, n, r)
									}))
								}, t.prototype.insertAt = function(e, t, n) {
									var r = this.children.find(e),
										i = r[0],
										a = r[1];
									if (i) i.insertAt(a, t, n);
									else {
										var s = null == n ? o.create("text", t) : o.create(t, n);
										this.appendChild(s)
									}
								}, t.prototype.insertBefore = function(e, t) {
									if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some((function(t) {
											return e instanceof t
										}))) throw new o.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
									e.insertInto(this, t)
								}, t.prototype.length = function() {
									return this.children.reduce((function(e, t) {
										return e + t.length()
									}), 0)
								}, t.prototype.moveChildren = function(e, t) {
									this.children.forEach((function(n) {
										e.insertBefore(n, t)
									}))
								}, t.prototype.optimize = function(t) {
									if (e.prototype.optimize.call(this, t), 0 === this.children.length)
										if (null != this.statics.defaultChild) {
											var n = o.create(this.statics.defaultChild);
											this.appendChild(n), n.optimize(t)
										} else this.remove()
								}, t.prototype.path = function(e, n) {
									void 0 === n && (n = !1);
									var r = this.children.find(e, n),
										i = r[0],
										a = r[1],
										o = [
											[this, e]
										];
									return i instanceof t ? o.concat(i.path(a, n)) : (null != i && o.push([i, a]), o)
								}, t.prototype.removeChild = function(e) {
									this.children.remove(e)
								}, t.prototype.replace = function(n) {
									n instanceof t && n.moveChildren(this), e.prototype.replace.call(this, n)
								}, t.prototype.split = function(e, t) {
									if (void 0 === t && (t = !1), !t) {
										if (0 === e) return this;
										if (e === this.length()) return this.next
									}
									var n = this.clone();
									return this.parent.insertBefore(n, this.next), this.children.forEachAt(e, this.length(), (function(e, r, i) {
										e = e.split(r, t), n.appendChild(e)
									})), n
								}, t.prototype.unwrap = function() {
									this.moveChildren(this.parent, this.next), this.remove()
								}, t.prototype.update = function(e, t) {
									var n = this,
										r = [],
										i = [];
									e.forEach((function(e) {
										e.target === n.domNode && "childList" === e.type && (r.push.apply(r, e.addedNodes), i.push.apply(i, e.removedNodes))
									})), i.forEach((function(e) {
										if (!(null != e.parentNode && "IFRAME" !== e.tagName && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
											var t = o.find(e);
											null != t && (null != t.domNode.parentNode && t.domNode.parentNode !== n.domNode || t.detach())
										}
									})), r.filter((function(e) {
										return e.parentNode == n.domNode
									})).sort((function(e, t) {
										return e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
									})).forEach((function(e) {
										var t = null;
										null != e.nextSibling && (t = o.find(e.nextSibling));
										var r = u(e);
										r.next == t && null != r.next || (null != r.parent && r.parent.removeChild(n), n.insertBefore(r, t || void 0))
									}))
								}, t
							}(a.default);

						function u(e) {
							var t = o.find(e);
							if (null == t) try {
								t = o.create(e)
							} catch (n) {
								t = o.create(o.Scope.INLINE), [].slice.call(e.childNodes).forEach((function(e) {
									t.domNode.appendChild(e)
								})), e.parentNode && e.parentNode.replaceChild(t.domNode, e), t.attach()
							}
							return t
						}
						t.default = s
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(12),
							a = n(31),
							o = n(17),
							s = n(1),
							u = function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return n.attributes = new a.default(n.domNode), n
								}
								return r(t, e), t.formats = function(e) {
									return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? e.tagName.toLowerCase() : void 0)
								}, t.prototype.format = function(e, t) {
									var n = s.query(e);
									n instanceof i.default ? this.attributes.attribute(n, t) : t && (null == n || e === this.statics.blotName && this.formats()[e] === t || this.replaceWith(e, t))
								}, t.prototype.formats = function() {
									var e = this.attributes.values(),
										t = this.statics.formats(this.domNode);
									return null != t && (e[this.statics.blotName] = t), e
								}, t.prototype.replaceWith = function(t, n) {
									var r = e.prototype.replaceWith.call(this, t, n);
									return this.attributes.copy(r), r
								}, t.prototype.update = function(t, n) {
									var r = this;
									e.prototype.update.call(this, t, n), t.some((function(e) {
										return e.target === r.domNode && "attributes" === e.type
									})) && this.attributes.build()
								}, t.prototype.wrap = function(n, r) {
									var i = e.prototype.wrap.call(this, n, r);
									return i instanceof t && i.statics.scope === this.statics.scope && this.attributes.move(i), i
								}, t
							}(o.default);
						t.default = u
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(30),
							a = n(1),
							o = function(e) {
								function t() {
									return null !== e && e.apply(this, arguments) || this
								}
								return r(t, e), t.value = function(e) {
									return !0
								}, t.prototype.index = function(e, t) {
									return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1
								}, t.prototype.position = function(e, t) {
									var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
									return e > 0 && (n += 1), [this.parent.domNode, n]
								}, t.prototype.value = function() {
									var e;
									return (e = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, e
								}, t.scope = a.Scope.INLINE_BLOT, t
							}(i.default);
						t.default = o
					}, function(e, t, n) {
						var r = n(11),
							i = n(3),
							a = {
								attributes: {
									compose: function(e, t, n) {
										"object" != typeof e && (e = {}), "object" != typeof t && (t = {});
										var r = i(!0, {}, t);
										for (var a in n || (r = Object.keys(r).reduce((function(e, t) {
												return null != r[t] && (e[t] = r[t]), e
											}), {})), e) void 0 !== e[a] && void 0 === t[a] && (r[a] = e[a]);
										return Object.keys(r).length > 0 ? r : void 0
									},
									diff: function(e, t) {
										"object" != typeof e && (e = {}), "object" != typeof t && (t = {});
										var n = Object.keys(e).concat(Object.keys(t)).reduce((function(n, i) {
											return r(e[i], t[i]) || (n[i] = void 0 === t[i] ? null : t[i]), n
										}), {});
										return Object.keys(n).length > 0 ? n : void 0
									},
									transform: function(e, t, n) {
										if ("object" != typeof e) return t;
										if ("object" == typeof t) {
											if (!n) return t;
											var r = Object.keys(t).reduce((function(n, r) {
												return void 0 === e[r] && (n[r] = t[r]), n
											}), {});
											return Object.keys(r).length > 0 ? r : void 0
										}
									}
								},
								iterator: function(e) {
									return new o(e)
								},
								length: function(e) {
									return "number" == typeof e.delete ? e.delete : "number" == typeof e.retain ? e.retain : "string" == typeof e.insert ? e.insert.length : 1
								}
							};

						function o(e) {
							this.ops = e, this.index = 0, this.offset = 0
						}
						o.prototype.hasNext = function() {
							return this.peekLength() < 1 / 0
						}, o.prototype.next = function(e) {
							e || (e = 1 / 0);
							var t = this.ops[this.index];
							if (t) {
								var n = this.offset,
									r = a.length(t);
								if (e >= r - n ? (e = r - n, this.index += 1, this.offset = 0) : this.offset += e, "number" == typeof t.delete) return {
									delete: e
								};
								var i = {};
								return t.attributes && (i.attributes = t.attributes), "number" == typeof t.retain ? i.retain = e : "string" == typeof t.insert ? i.insert = t.insert.substr(n, e) : i.insert = t.insert, i
							}
							return {
								retain: 1 / 0
							}
						}, o.prototype.peek = function() {
							return this.ops[this.index]
						}, o.prototype.peekLength = function() {
							return this.ops[this.index] ? a.length(this.ops[this.index]) - this.offset : 1 / 0
						}, o.prototype.peekType = function() {
							return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
						}, o.prototype.rest = function() {
							if (this.hasNext()) {
								if (0 === this.offset) return this.ops.slice(this.index);
								var e = this.offset,
									t = this.index,
									n = this.next(),
									r = this.ops.slice(this.index);
								return this.offset = e, this.index = t, [n].concat(r)
							}
							return []
						}, e.exports = a
					}, function(e, n) {
						var r = function() {
							"use strict";

							function e(e, t) {
								return null != t && e instanceof t
							}
							var n, r, i;
							try {
								n = Map
							} catch (e) {
								n = function() {}
							}
							try {
								r = Set
							} catch (e) {
								r = function() {}
							}
							try {
								i = Promise
							} catch (e) {
								i = function() {}
							}

							function a(o, u, c, l, f) {
								"object" == typeof u && (c = u.depth, l = u.prototype, f = u.includeNonEnumerable, u = u.circular);
								var d = [],
									h = [],
									p = void 0 !== t;
								return void 0 === u && (u = !0), void 0 === c && (c = 1 / 0),
									function o(c, _) {
										if (null === c) return null;
										if (0 === _) return c;
										var m, b;
										if ("object" != typeof c) return c;
										if (e(c, n)) m = new n;
										else if (e(c, r)) m = new r;
										else if (e(c, i)) m = new i((function(e, t) {
											c.then((function(t) {
												e(o(t, _ - 1))
											}), (function(e) {
												t(o(e, _ - 1))
											}))
										}));
										else if (a.__isArray(c)) m = [];
										else if (a.__isRegExp(c)) m = new RegExp(c.source, s(c)), c.lastIndex && (m.lastIndex = c.lastIndex);
										else if (a.__isDate(c)) m = new Date(c.getTime());
										else {
											if (p && t.isBuffer(c)) return m = t.allocUnsafe ? t.allocUnsafe(c.length) : new t(c.length), c.copy(m), m;
											e(c, Error) ? m = Object.create(c) : void 0 === l ? (b = Object.getPrototypeOf(c), m = Object.create(b)) : (m = Object.create(l), b = l)
										}
										if (u) {
											var g = d.indexOf(c);
											if (-1 != g) return h[g];
											d.push(c), h.push(m)
										}
										for (var v in e(c, n) && c.forEach((function(e, t) {
												var n = o(t, _ - 1),
													r = o(e, _ - 1);
												m.set(n, r)
											})), e(c, r) && c.forEach((function(e) {
												var t = o(e, _ - 1);
												m.add(t)
											})), c) {
											var y;
											b && (y = Object.getOwnPropertyDescriptor(b, v)), y && null == y.set || (m[v] = o(c[v], _ - 1))
										}
										if (Object.getOwnPropertySymbols) {
											var A = Object.getOwnPropertySymbols(c);
											for (v = 0; v < A.length; v++) {
												var S = A[v],
													w = Object.getOwnPropertyDescriptor(c, S);
												(!w || w.enumerable || f) && (m[S] = o(c[S], _ - 1), w.enumerable || Object.defineProperty(m, S, {
													enumerable: !1
												}))
											}
										}
										if (f) {
											var E = Object.getOwnPropertyNames(c);
											for (v = 0; v < E.length; v++) {
												var T = E[v];
												(w = Object.getOwnPropertyDescriptor(c, T)) && w.enumerable || (m[T] = o(c[T], _ - 1), Object.defineProperty(m, T, {
													enumerable: !1
												}))
											}
										}
										return m
									}(o, c)
							}

							function o(e) {
								return Object.prototype.toString.call(e)
							}

							function s(e) {
								var t = "";
								return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
							}
							return a.clonePrototype = function(e) {
								if (null === e) return null;
								var t = function() {};
								return t.prototype = e, new t
							}, a.__objToStr = o, a.__isDate = function(e) {
								return "object" == typeof e && "[object Date]" === o(e)
							}, a.__isArray = function(e) {
								return "object" == typeof e && "[object Array]" === o(e)
							}, a.__isRegExp = function(e) {
								return "object" == typeof e && "[object RegExp]" === o(e)
							}, a.__getRegExpFlags = s, a
						}();
						"object" == typeof e && e.exports && (e.exports = r)
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
							a = function e(t, n, r) {
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
							o = h(n(0)),
							s = h(n(8)),
							u = n(4),
							c = h(u),
							l = h(n(16)),
							f = h(n(13)),
							d = h(n(25));

						function h(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function p(e) {
							return e instanceof c.default || e instanceof u.BlockEmbed
						}
						var _ = function(e) {
							function t(e, n) {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var r = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
								return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce((function(e, t) {
									return e[t] = !0, e
								}), {})), r.domNode.addEventListener("DOMNodeInserted", (function() {})), r.optimize(), r.enable(), r
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
								key: "batchStart",
								value: function() {
									this.batch = !0
								}
							}, {
								key: "batchEnd",
								value: function() {
									this.batch = !1, this.optimize()
								}
							}, {
								key: "deleteAt",
								value: function(e, n) {
									var i = this.line(e),
										o = r(i, 2),
										s = o[0],
										c = o[1],
										d = this.line(e + n),
										h = r(d, 1)[0];
									if (a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n), null != h && s !== h && c > 0) {
										if (s instanceof u.BlockEmbed || h instanceof u.BlockEmbed) return void this.optimize();
										if (s instanceof f.default) {
											var p = s.newlineIndex(s.length(), !0);
											if (p > -1 && (s = s.split(p + 1)) === h) return void this.optimize()
										} else if (h instanceof f.default) {
											var _ = h.newlineIndex(0);
											_ > -1 && h.split(_ + 1)
										}
										var m = h.children.head instanceof l.default ? null : h.children.head;
										s.moveChildren(h, m), s.remove()
									}
									this.optimize()
								}
							}, {
								key: "enable",
								value: function() {
									var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
									this.domNode.setAttribute("contenteditable", e)
								}
							}, {
								key: "formatAt",
								value: function(e, n, r, i) {
									(null == this.whitelist || this.whitelist[r]) && (a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, i), this.optimize())
								}
							}, {
								key: "insertAt",
								value: function(e, n, r) {
									if (null == r || null == this.whitelist || this.whitelist[n]) {
										if (e >= this.length())
											if (null == r || null == o.default.query(n, o.default.Scope.BLOCK)) {
												var i = o.default.create(this.statics.defaultChild);
												this.appendChild(i), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), i.insertAt(0, n, r)
											} else {
												var s = o.default.create(n, r);
												this.appendChild(s)
											}
										else a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
										this.optimize()
									}
								}
							}, {
								key: "insertBefore",
								value: function(e, n) {
									if (e.statics.scope === o.default.Scope.INLINE_BLOT) {
										var r = o.default.create(this.statics.defaultChild);
										r.appendChild(e), e = r
									}
									a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n)
								}
							}, {
								key: "leaf",
								value: function(e) {
									return this.path(e).pop() || [null, -1]
								}
							}, {
								key: "line",
								value: function(e) {
									return e === this.length() ? this.line(e - 1) : this.descendant(p, e)
								}
							}, {
								key: "lines",
								value: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
										t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
										n = function e(t, n, r) {
											var i = [],
												a = r;
											return t.children.forEachAt(n, r, (function(t, n, r) {
												p(t) ? i.push(t) : t instanceof o.default.Container && (i = i.concat(e(t, n, a))), a -= r
											})), i
										};
									return n(this, e, t)
								}
							}, {
								key: "optimize",
								value: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									!0 !== this.batch && (a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e, n), e.length > 0 && this.emitter.emit(s.default.events.SCROLL_OPTIMIZE, e, n))
								}
							}, {
								key: "path",
								value: function(e) {
									return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e).slice(1)
								}
							}, {
								key: "update",
								value: function(e) {
									if (!0 !== this.batch) {
										var n = s.default.sources.USER;
										"string" == typeof e && (n = e), Array.isArray(e) || (e = this.observer.takeRecords()), e.length > 0 && this.emitter.emit(s.default.events.SCROLL_BEFORE_UPDATE, n, e), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).call(this, e.concat([])), e.length > 0 && this.emitter.emit(s.default.events.SCROLL_UPDATE, n, e)
									}
								}
							}]), t
						}(o.default.Scroll);
						_.blotName = "scroll", _.className = "ql-editor", _.tagName = "DIV", _.defaultChild = "block", _.allowedChildren = [c.default, u.BlockEmbed, d.default], t.default = _
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.SHORTKEY = t.default = void 0;
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
							o = _(n(21)),
							s = _(n(11)),
							u = _(n(3)),
							c = _(n(2)),
							l = _(n(20)),
							f = _(n(0)),
							d = _(n(5)),
							h = _(n(10)),
							p = _(n(9));

						function _(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function m(e, t, n) {
							return t in e ? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = n, e
						}
						var b = (0, h.default)("quill:keyboard"),
							g = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
							v = function(e) {
								function t(e, n) {
									! function(e, t) {
										if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
									}(this, t);
									var r = function(e, t) {
										if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return !t || "object" != typeof t && "function" != typeof t ? e : t
									}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.bindings = {}, Object.keys(r.options.bindings).forEach((function(t) {
										("list autofill" !== t || null == e.scroll.whitelist || e.scroll.whitelist.list) && r.options.bindings[t] && r.addBinding(r.options.bindings[t])
									})), r.addBinding({
										key: t.keys.ENTER,
										shiftKey: null
									}, E), r.addBinding({
										key: t.keys.ENTER,
										metaKey: null,
										ctrlKey: null,
										altKey: null
									}, (function() {})), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
										key: t.keys.BACKSPACE
									}, {
										collapsed: !0
									}, A), r.addBinding({
										key: t.keys.DELETE
									}, {
										collapsed: !0
									}, S)) : (r.addBinding({
										key: t.keys.BACKSPACE
									}, {
										collapsed: !0,
										prefix: /^.?$/
									}, A), r.addBinding({
										key: t.keys.DELETE
									}, {
										collapsed: !0,
										suffix: /^.?$/
									}, S)), r.addBinding({
										key: t.keys.BACKSPACE
									}, {
										collapsed: !1
									}, w), r.addBinding({
										key: t.keys.DELETE
									}, {
										collapsed: !1
									}, w), r.addBinding({
										key: t.keys.BACKSPACE,
										altKey: null,
										ctrlKey: null,
										metaKey: null,
										shiftKey: null
									}, {
										collapsed: !0,
										offset: 0
									}, A), r.listen(), r
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
								}(t, e), a(t, null, [{
									key: "match",
									value: function(e, t) {
										return t = $(t), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((function(n) {
											return !!t[n] !== e[n] && null !== t[n]
										})) && t.key === (e.which || e.keyCode)
									}
								}]), a(t, [{
									key: "addBinding",
									value: function(e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
											n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
											r = $(e);
										if (null == r || null == r.key) return b.warn("Attempted to add invalid keyboard binding", r);
										"function" == typeof t && (t = {
											handler: t
										}), "function" == typeof n && (n = {
											handler: n
										}), r = (0, u.default)(r, t, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
									}
								}, {
									key: "listen",
									value: function() {
										var e = this;
										this.quill.root.addEventListener("keydown", (function(n) {
											if (!n.defaultPrevented) {
												var a = n.which || n.keyCode,
													o = (e.bindings[a] || []).filter((function(e) {
														return t.match(n, e)
													}));
												if (0 !== o.length) {
													var u = e.quill.getSelection();
													if (null != u && e.quill.hasFocus()) {
														var c = e.quill.getLine(u.index),
															l = i(c, 2),
															d = l[0],
															h = l[1],
															p = e.quill.getLeaf(u.index),
															_ = i(p, 2),
															m = _[0],
															b = _[1],
															g = 0 === u.length ? [m, b] : e.quill.getLeaf(u.index + u.length),
															v = i(g, 2),
															y = v[0],
															A = v[1],
															S = m instanceof f.default.Text ? m.value().slice(0, b) : "",
															w = y instanceof f.default.Text ? y.value().slice(A) : "",
															E = {
																collapsed: 0 === u.length,
																empty: 0 === u.length && d.length() <= 1,
																format: e.quill.getFormat(u),
																offset: h,
																prefix: S,
																suffix: w
															};
														o.some((function(t) {
															if (null != t.collapsed && t.collapsed !== E.collapsed) return !1;
															if (null != t.empty && t.empty !== E.empty) return !1;
															if (null != t.offset && t.offset !== E.offset) return !1;
															if (Array.isArray(t.format)) {
																if (t.format.every((function(e) {
																		return null == E.format[e]
																	}))) return !1
															} else if ("object" === r(t.format) && !Object.keys(t.format).every((function(e) {
																	return !0 === t.format[e] ? null != E.format[e] : !1 === t.format[e] ? null == E.format[e] : (0, s.default)(t.format[e], E.format[e])
																}))) return !1;
															return !(null != t.prefix && !t.prefix.test(E.prefix) || null != t.suffix && !t.suffix.test(E.suffix) || !0 === t.handler.call(e, u, E))
														})) && n.preventDefault()
													}
												}
											}
										}))
									}
								}]), t
							}(p.default);

						function y(e, t) {
							var n, r = e === v.keys.LEFT ? "prefix" : "suffix";
							return m(n = {
								key: e,
								shiftKey: t,
								altKey: null
							}, r, /^$/), m(n, "handler", (function(n) {
								var r = n.index;
								e === v.keys.RIGHT && (r += n.length + 1);
								var a = this.quill.getLeaf(r);
								return !(i(a, 1)[0] instanceof f.default.Embed && (e === v.keys.LEFT ? t ? this.quill.setSelection(n.index - 1, n.length + 1, d.default.sources.USER) : this.quill.setSelection(n.index - 1, d.default.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, d.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, d.default.sources.USER), 1))
							})), n
						}

						function A(e, t) {
							if (!(0 === e.index || this.quill.getLength() <= 1)) {
								var n = this.quill.getLine(e.index),
									r = i(n, 1)[0],
									a = {};
								if (0 === t.offset) {
									var o = this.quill.getLine(e.index - 1),
										s = i(o, 1)[0];
									if (null != s && s.length() > 1) {
										var u = r.formats(),
											c = this.quill.getFormat(e.index - 1, 1);
										a = l.default.attributes.diff(u, c) || {}
									}
								}
								var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
								this.quill.deleteText(e.index - f, f, d.default.sources.USER), Object.keys(a).length > 0 && this.quill.formatLine(e.index - f, f, a, d.default.sources.USER), this.quill.focus()
							}
						}

						function S(e, t) {
							var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
							if (!(e.index >= this.quill.getLength() - n)) {
								var r = {},
									a = 0,
									o = this.quill.getLine(e.index),
									s = i(o, 1)[0];
								if (t.offset >= s.length() - 1) {
									var u = this.quill.getLine(e.index + 1),
										c = i(u, 1)[0];
									if (c) {
										var f = s.formats(),
											h = this.quill.getFormat(e.index, 1);
										r = l.default.attributes.diff(f, h) || {}, a = c.length()
									}
								}
								this.quill.deleteText(e.index, n, d.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(e.index + a - 1, n, r, d.default.sources.USER)
							}
						}

						function w(e) {
							var t = this.quill.getLines(e),
								n = {};
							if (t.length > 1) {
								var r = t[0].formats(),
									i = t[t.length - 1].formats();
								n = l.default.attributes.diff(i, r) || {}
							}
							this.quill.deleteText(e, d.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(e.index, 1, n, d.default.sources.USER), this.quill.setSelection(e.index, d.default.sources.SILENT), this.quill.focus()
						}

						function E(e, t) {
							var n = this;
							e.length > 0 && this.quill.scroll.deleteAt(e.index, e.length);
							var r = Object.keys(t.format).reduce((function(e, n) {
								return f.default.query(n, f.default.Scope.BLOCK) && !Array.isArray(t.format[n]) && (e[n] = t.format[n]), e
							}), {});
							this.quill.insertText(e.index, "\n", r, d.default.sources.USER), this.quill.setSelection(e.index + 1, d.default.sources.SILENT), this.quill.focus(), Object.keys(t.format).forEach((function(e) {
								null == r[e] && (Array.isArray(t.format[e]) || "link" !== e && n.quill.format(e, t.format[e], d.default.sources.USER))
							}))
						}

						function T(e) {
							return {
								key: v.keys.TAB,
								shiftKey: !e,
								format: {
									"code-block": !0
								},
								handler: function(t) {
									var n = f.default.query("code-block"),
										r = t.index,
										a = t.length,
										o = this.quill.scroll.descendant(n, r),
										s = i(o, 2),
										u = s[0],
										c = s[1];
									if (null != u) {
										var l = this.quill.getIndex(u),
											h = u.newlineIndex(c, !0) + 1,
											p = u.newlineIndex(l + c + a),
											_ = u.domNode.textContent.slice(h, p).split("\n");
										c = 0, _.forEach((function(t, i) {
											e ? (u.insertAt(h + c, n.TAB), c += n.TAB.length, 0 === i ? r += n.TAB.length : a += n.TAB.length) : t.startsWith(n.TAB) && (u.deleteAt(h + c, n.TAB.length), c -= n.TAB.length, 0 === i ? r -= n.TAB.length : a -= n.TAB.length), c += t.length + 1
										})), this.quill.update(d.default.sources.USER), this.quill.setSelection(r, a, d.default.sources.SILENT)
									}
								}
							}
						}

						function C(e) {
							return {
								key: e[0].toUpperCase(),
								shortKey: !0,
								handler: function(t, n) {
									this.quill.format(e, !n.format[e], d.default.sources.USER)
								}
							}
						}

						function $(e) {
							if ("string" == typeof e || "number" == typeof e) return $({
								key: e
							});
							if ("object" === (void 0 === e ? "undefined" : r(e)) && (e = (0, o.default)(e, !1)), "string" == typeof e.key)
								if (null != v.keys[e.key.toUpperCase()]) e.key = v.keys[e.key.toUpperCase()];
								else {
									if (1 !== e.key.length) return null;
									e.key = e.key.toUpperCase().charCodeAt(0)
								} return e.shortKey && (e[g] = e.shortKey, delete e.shortKey), e
						}
						v.keys = {
							BACKSPACE: 8,
							TAB: 9,
							ENTER: 13,
							ESCAPE: 27,
							LEFT: 37,
							UP: 38,
							RIGHT: 39,
							DOWN: 40,
							DELETE: 46
						}, v.DEFAULTS = {
							bindings: {
								bold: C("bold"),
								italic: C("italic"),
								underline: C("underline"),
								indent: {
									key: v.keys.TAB,
									format: ["blockquote", "indent", "list"],
									handler: function(e, t) {
										if (t.collapsed && 0 !== t.offset) return !0;
										this.quill.format("indent", "+1", d.default.sources.USER)
									}
								},
								outdent: {
									key: v.keys.TAB,
									shiftKey: !0,
									format: ["blockquote", "indent", "list"],
									handler: function(e, t) {
										if (t.collapsed && 0 !== t.offset) return !0;
										this.quill.format("indent", "-1", d.default.sources.USER)
									}
								},
								"outdent backspace": {
									key: v.keys.BACKSPACE,
									collapsed: !0,
									shiftKey: null,
									metaKey: null,
									ctrlKey: null,
									altKey: null,
									format: ["indent", "list"],
									offset: 0,
									handler: function(e, t) {
										null != t.format.indent ? this.quill.format("indent", "-1", d.default.sources.USER) : null != t.format.list && this.quill.format("list", !1, d.default.sources.USER)
									}
								},
								"indent code-block": T(!0),
								"outdent code-block": T(!1),
								"remove tab": {
									key: v.keys.TAB,
									shiftKey: !0,
									collapsed: !0,
									prefix: /\t$/,
									handler: function(e) {
										this.quill.deleteText(e.index - 1, 1, d.default.sources.USER)
									}
								},
								tab: {
									key: v.keys.TAB,
									handler: function(e) {
										this.quill.history.cutoff();
										var t = (new c.default).retain(e.index).delete(e.length).insert("\t");
										this.quill.updateContents(t, d.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index + 1, d.default.sources.SILENT)
									}
								},
								"list empty enter": {
									key: v.keys.ENTER,
									collapsed: !0,
									format: ["list"],
									empty: !0,
									handler: function(e, t) {
										this.quill.format("list", !1, d.default.sources.USER), t.format.indent && this.quill.format("indent", !1, d.default.sources.USER)
									}
								},
								"checklist enter": {
									key: v.keys.ENTER,
									collapsed: !0,
									format: {
										list: "checked"
									},
									handler: function(e) {
										var t = this.quill.getLine(e.index),
											n = i(t, 2),
											r = n[0],
											a = n[1],
											o = (0, u.default)({}, r.formats(), {
												list: "checked"
											}),
											s = (new c.default).retain(e.index).insert("\n", o).retain(r.length() - a - 1).retain(1, {
												list: "unchecked"
											});
										this.quill.updateContents(s, d.default.sources.USER), this.quill.setSelection(e.index + 1, d.default.sources.SILENT), this.quill.scrollIntoView()
									}
								},
								"header enter": {
									key: v.keys.ENTER,
									collapsed: !0,
									format: ["header"],
									suffix: /^$/,
									handler: function(e, t) {
										var n = this.quill.getLine(e.index),
											r = i(n, 2),
											a = r[0],
											o = r[1],
											s = (new c.default).retain(e.index).insert("\n", t.format).retain(a.length() - o - 1).retain(1, {
												header: null
											});
										this.quill.updateContents(s, d.default.sources.USER), this.quill.setSelection(e.index + 1, d.default.sources.SILENT), this.quill.scrollIntoView()
									}
								},
								"list autofill": {
									key: " ",
									collapsed: !0,
									format: {
										list: !1
									},
									prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
									handler: function(e, t) {
										var n = t.prefix.length,
											r = this.quill.getLine(e.index),
											a = i(r, 2),
											o = a[0],
											s = a[1];
										if (s > n) return !0;
										var u = void 0;
										switch (t.prefix.trim()) {
											case "[]":
											case "[ ]":
												u = "unchecked";
												break;
											case "[x]":
												u = "checked";
												break;
											case "-":
											case "*":
												u = "bullet";
												break;
											default:
												u = "ordered"
										}
										this.quill.insertText(e.index, " ", d.default.sources.USER), this.quill.history.cutoff();
										var l = (new c.default).retain(e.index - s).delete(n + 1).retain(o.length() - 2 - s).retain(1, {
											list: u
										});
										this.quill.updateContents(l, d.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index - n, d.default.sources.SILENT)
									}
								},
								"code exit": {
									key: v.keys.ENTER,
									collapsed: !0,
									format: ["code-block"],
									prefix: /\n\n$/,
									suffix: /^\s+$/,
									handler: function(e) {
										var t = this.quill.getLine(e.index),
											n = i(t, 2),
											r = n[0],
											a = n[1],
											o = (new c.default).retain(e.index + r.length() - a - 2).retain(1, {
												"code-block": null
											}).delete(1);
										this.quill.updateContents(o, d.default.sources.USER)
									}
								},
								"embed left": y(v.keys.LEFT, !1),
								"embed left shift": y(v.keys.LEFT, !0),
								"embed right": y(v.keys.RIGHT, !1),
								"embed right shift": y(v.keys.RIGHT, !0)
							}
						}, t.default = v, t.SHORTKEY = g
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
							o = u(n(0)),
							s = u(n(7));

						function u(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var c = function(e) {
							function t(e, n) {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var r = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
								return r.selection = n, r.textNode = document.createTextNode(t.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r
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
							}(t, e), a(t, null, [{
								key: "value",
								value: function() {}
							}]), a(t, [{
								key: "detach",
								value: function() {
									null != this.parent && this.parent.removeChild(this)
								}
							}, {
								key: "format",
								value: function(e, n) {
									if (0 !== this._length) return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
									for (var r = this, a = 0; null != r && r.statics.scope !== o.default.Scope.BLOCK_BLOT;) a += r.offset(r.parent), r = r.parent;
									null != r && (this._length = t.CONTENTS.length, r.optimize(), r.formatAt(a, t.CONTENTS.length, e, n), this._length = 0)
								}
							}, {
								key: "index",
								value: function(e, n) {
									return e === this.textNode ? 0 : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "index", this).call(this, e, n)
								}
							}, {
								key: "length",
								value: function() {
									return this._length
								}
							}, {
								key: "position",
								value: function() {
									return [this.textNode, this.textNode.data.length]
								}
							}, {
								key: "remove",
								value: function() {
									i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this), this.parent = null
								}
							}, {
								key: "restore",
								value: function() {
									if (!this.selection.composing && null != this.parent) {
										var e = this.textNode,
											n = this.selection.getNativeRange(),
											i = void 0,
											a = void 0,
											u = void 0;
										if (null != n && n.start.node === e && n.end.node === e) {
											var c = [e, n.start.offset, n.end.offset];
											i = c[0], a = c[1], u = c[2]
										}
										for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
										if (this.textNode.data !== t.CONTENTS) {
											var l = this.textNode.data.split(t.CONTENTS).join("");
											this.next instanceof s.default ? (i = this.next.domNode, this.next.insertAt(0, l), this.textNode.data = t.CONTENTS) : (this.textNode.data = l, this.parent.insertBefore(o.default.create(this.textNode), this), this.textNode = document.createTextNode(t.CONTENTS), this.domNode.appendChild(this.textNode))
										}
										if (this.remove(), null != a) {
											var f = [a, u].map((function(e) {
													return Math.max(0, Math.min(i.data.length, e - 1))
												})),
												d = r(f, 2);
											return a = d[0], u = d[1], {
												startNode: i,
												startOffset: a,
												endNode: i,
												endOffset: u
											}
										}
									}
								}
							}, {
								key: "update",
								value: function(e, t) {
									var n = this;
									if (e.some((function(e) {
											return "characterData" === e.type && e.target === n.textNode
										}))) {
										var r = this.restore();
										r && (t.range = r)
									}
								}
							}, {
								key: "value",
								value: function() {
									return ""
								}
							}]), t
						}(o.default.Embed);
						c.blotName = "cursor", c.className = "ql-cursor", c.tagName = "span", c.CONTENTS = "\ufeff", t.default = c
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = o(n(0)),
							i = n(4),
							a = o(i);

						function o(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}

						function s(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function u(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var c = function(e) {
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
							}(t, e), t
						}(r.default.Container);
						c.allowedChildren = [a.default, i.BlockEmbed, c], t.default = c
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.ColorStyle = t.ColorClass = t.ColorAttributor = void 0;
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
							i = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(0));

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
									key: "value",
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
										}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e);
										return n.startsWith("rgb(") ? "#" + (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")).split(",").map((function(e) {
											return ("00" + parseInt(e).toString(16)).slice(-2)
										})).join("") : n
									}
								}]), t
							}(i.default.Attributor.Style),
							u = new i.default.Attributor.Class("color", "ql-color", {
								scope: i.default.Scope.INLINE
							}),
							c = new s("color", "color", {
								scope: i.default.Scope.INLINE
							});
						t.ColorAttributor = s, t.ColorClass = u, t.ColorStyle = c
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.sanitize = t.default = void 0;
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
								key: "format",
								value: function(e, n) {
									if (e !== this.statics.blotName || !n) return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
									n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
								}
							}], [{
								key: "create",
								value: function(e) {
									var n = i(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
									return e = this.sanitize(e), n.setAttribute("href", e), n.setAttribute("rel", "noopener noreferrer"), n.setAttribute("target", "_blank"), n
								}
							}, {
								key: "formats",
								value: function(e) {
									return e.getAttribute("href")
								}
							}, {
								key: "sanitize",
								value: function(e) {
									return u(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL
								}
							}]), t
						}(function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(6)).default);

						function u(e, t) {
							var n = document.createElement("a");
							n.href = e;
							var r = n.href.slice(0, n.href.indexOf(":"));
							return t.indexOf(r) > -1
						}
						s.blotName = "link", s.tagName = "A", s.SANITIZED_URL = "about:blank", s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], t.default = s, t.sanitize = u
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
								return typeof e
							} : function(e) {
								return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
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
							a = s(n(23)),
							o = s(n(107));

						function s(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var u = 0;

						function c(e, t) {
							e.setAttribute(t, !("true" === e.getAttribute(t)))
						}
						var l = function() {
							function e(t) {
								var n = this;
								(function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								})(this, e), this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", (function() {
									n.togglePicker()
								})), this.label.addEventListener("keydown", (function(e) {
									switch (e.keyCode) {
										case a.default.keys.ENTER:
											n.togglePicker();
											break;
										case a.default.keys.ESCAPE:
											n.escape(), e.preventDefault()
									}
								})), this.select.addEventListener("change", this.update.bind(this))
							}
							return i(e, [{
								key: "togglePicker",
								value: function() {
									this.container.classList.toggle("ql-expanded"), c(this.label, "aria-expanded"), c(this.options, "aria-hidden")
								}
							}, {
								key: "buildItem",
								value: function(e) {
									var t = this,
										n = document.createElement("span");
									return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), e.hasAttribute("value") && n.setAttribute("data-value", e.getAttribute("value")), e.textContent && n.setAttribute("data-label", e.textContent), n.addEventListener("click", (function() {
										t.selectItem(n, !0)
									})), n.addEventListener("keydown", (function(e) {
										switch (e.keyCode) {
											case a.default.keys.ENTER:
												t.selectItem(n, !0), e.preventDefault();
												break;
											case a.default.keys.ESCAPE:
												t.escape(), e.preventDefault()
										}
									})), n
								}
							}, {
								key: "buildLabel",
								value: function() {
									var e = document.createElement("span");
									return e.classList.add("ql-picker-label"), e.innerHTML = o.default, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e
								}
							}, {
								key: "buildOptions",
								value: function() {
									var e = this,
										t = document.createElement("span");
									t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = "ql-picker-options-" + u, u += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, [].slice.call(this.select.options).forEach((function(n) {
										var r = e.buildItem(n);
										t.appendChild(r), !0 === n.selected && e.selectItem(r)
									})), this.container.appendChild(t)
								}
							}, {
								key: "buildPicker",
								value: function() {
									var e = this;
									[].slice.call(this.select.attributes).forEach((function(t) {
										e.container.setAttribute(t.name, t.value)
									})), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
								}
							}, {
								key: "escape",
								value: function() {
									var e = this;
									this.close(), setTimeout((function() {
										return e.label.focus()
									}), 1)
								}
							}, {
								key: "close",
								value: function() {
									this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true")
								}
							}, {
								key: "selectItem",
								value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
										n = this.container.querySelector(".ql-selected");
									if (e !== n && (null != n && n.classList.remove("ql-selected"), null != e && (e.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(e.parentNode.children, e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t))) {
										if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
										else if ("object" === ("undefined" == typeof Event ? "undefined" : r(Event))) {
											var i = document.createEvent("Event");
											i.initEvent("change", !0, !0), this.select.dispatchEvent(i)
										}
										this.close()
									}
								}
							}, {
								key: "update",
								value: function() {
									var e = void 0;
									if (this.select.selectedIndex > -1) {
										var t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
										e = this.select.options[this.select.selectedIndex], this.selectItem(t)
									} else this.selectItem(null);
									var n = null != e && e !== this.select.querySelector("option[selected]");
									this.label.classList.toggle("ql-active", n)
								}
							}]), e
						}();
						t.default = l
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = b(n(0)),
							i = b(n(5)),
							a = n(4),
							o = b(a),
							s = b(n(16)),
							u = b(n(25)),
							c = b(n(24)),
							l = b(n(35)),
							f = b(n(6)),
							d = b(n(22)),
							h = b(n(7)),
							p = b(n(55)),
							_ = b(n(42)),
							m = b(n(23));

						function b(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						i.default.register({
							"blots/block": o.default,
							"blots/block/embed": a.BlockEmbed,
							"blots/break": s.default,
							"blots/container": u.default,
							"blots/cursor": c.default,
							"blots/embed": l.default,
							"blots/inline": f.default,
							"blots/scroll": d.default,
							"blots/text": h.default,
							"modules/clipboard": p.default,
							"modules/history": _.default,
							"modules/keyboard": m.default
						}), r.default.register(o.default, s.default, c.default, f.default, d.default, h.default), t.default = i.default
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = n(1),
							i = function() {
								function e(e) {
									this.domNode = e, this.domNode[r.DATA_KEY] = {
										blot: this
									}
								}
								return Object.defineProperty(e.prototype, "statics", {
									get: function() {
										return this.constructor
									},
									enumerable: !0,
									configurable: !0
								}), e.create = function(e) {
									if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
									var t;
									return Array.isArray(this.tagName) ? ("string" == typeof e && (e = e.toUpperCase(), parseInt(e).toString() === e && (e = parseInt(e))), t = "number" == typeof e ? document.createElement(this.tagName[e - 1]) : this.tagName.indexOf(e) > -1 ? document.createElement(e) : document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t
								}, e.prototype.attach = function() {
									null != this.parent && (this.scroll = this.parent.scroll)
								}, e.prototype.clone = function() {
									var e = this.domNode.cloneNode(!1);
									return r.create(e)
								}, e.prototype.detach = function() {
									null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY]
								}, e.prototype.deleteAt = function(e, t) {
									this.isolate(e, t).remove()
								}, e.prototype.formatAt = function(e, t, n, i) {
									var a = this.isolate(e, t);
									if (null != r.query(n, r.Scope.BLOT) && i) a.wrap(n, i);
									else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
										var o = r.create(this.statics.scope);
										a.wrap(o), o.format(n, i)
									}
								}, e.prototype.insertAt = function(e, t, n) {
									var i = null == n ? r.create("text", t) : r.create(t, n),
										a = this.split(e);
									this.parent.insertBefore(i, a)
								}, e.prototype.insertInto = function(e, t) {
									void 0 === t && (t = null), null != this.parent && this.parent.children.remove(this);
									var n = null;
									e.children.insertBefore(this, t), null != t && (n = t.domNode), this.domNode.parentNode == e.domNode && this.domNode.nextSibling == n || e.domNode.insertBefore(this.domNode, n), this.parent = e, this.attach()
								}, e.prototype.isolate = function(e, t) {
									var n = this.split(e);
									return n.split(t), n
								}, e.prototype.length = function() {
									return 1
								}, e.prototype.offset = function(e) {
									return void 0 === e && (e = this.parent), null == this.parent || this == e ? 0 : this.parent.children.offset(this) + this.parent.offset(e)
								}, e.prototype.optimize = function(e) {
									null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
								}, e.prototype.remove = function() {
									null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
								}, e.prototype.replace = function(e) {
									null != e.parent && (e.parent.insertBefore(this, e.next), e.remove())
								}, e.prototype.replaceWith = function(e, t) {
									var n = "string" == typeof e ? r.create(e, t) : e;
									return n.replace(this), n
								}, e.prototype.split = function(e, t) {
									return 0 === e ? this : this.next
								}, e.prototype.update = function(e, t) {}, e.prototype.wrap = function(e, t) {
									var n = "string" == typeof e ? r.create(e, t) : e;
									return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
								}, e.blotName = "abstract", e
							}();
						t.default = i
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = n(12),
							i = n(32),
							a = n(33),
							o = n(1),
							s = function() {
								function e(e) {
									this.attributes = {}, this.domNode = e, this.build()
								}
								return e.prototype.attribute = function(e, t) {
									t ? e.add(this.domNode, t) && (null != e.value(this.domNode) ? this.attributes[e.attrName] = e : delete this.attributes[e.attrName]) : (e.remove(this.domNode), delete this.attributes[e.attrName])
								}, e.prototype.build = function() {
									var e = this;
									this.attributes = {};
									var t = r.default.keys(this.domNode),
										n = i.default.keys(this.domNode),
										s = a.default.keys(this.domNode);
									t.concat(n).concat(s).forEach((function(t) {
										var n = o.query(t, o.Scope.ATTRIBUTE);
										n instanceof r.default && (e.attributes[n.attrName] = n)
									}))
								}, e.prototype.copy = function(e) {
									var t = this;
									Object.keys(this.attributes).forEach((function(n) {
										var r = t.attributes[n].value(t.domNode);
										e.format(n, r)
									}))
								}, e.prototype.move = function(e) {
									var t = this;
									this.copy(e), Object.keys(this.attributes).forEach((function(e) {
										t.attributes[e].remove(t.domNode)
									})), this.attributes = {}
								}, e.prototype.values = function() {
									var e = this;
									return Object.keys(this.attributes).reduce((function(t, n) {
										return t[n] = e.attributes[n].value(e.domNode), t
									}), {})
								}, e
							}();
						t.default = s
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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

						function i(e, t) {
							return (e.getAttribute("class") || "").split(/\s+/).filter((function(e) {
								return 0 === e.indexOf(t + "-")
							}))
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return r(t, e), t.keys = function(e) {
								return (e.getAttribute("class") || "").split(/\s+/).map((function(e) {
									return e.split("-").slice(0, -1).join("-")
								}))
							}, t.prototype.add = function(e, t) {
								return !!this.canAdd(e, t) && (this.remove(e), e.classList.add(this.keyName + "-" + t), !0)
							}, t.prototype.remove = function(e) {
								i(e, this.keyName).forEach((function(t) {
									e.classList.remove(t)
								})), 0 === e.classList.length && e.removeAttribute("class")
							}, t.prototype.value = function(e) {
								var t = (i(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
								return this.canAdd(e, t) ? t : ""
							}, t
						}(n(12).default);
						t.default = a
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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

						function i(e) {
							var t = e.split("-"),
								n = t.slice(1).map((function(e) {
									return e[0].toUpperCase() + e.slice(1)
								})).join("");
							return t[0] + n
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var a = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return r(t, e), t.keys = function(e) {
								return (e.getAttribute("style") || "").split(";").map((function(e) {
									return e.split(":")[0].trim()
								}))
							}, t.prototype.add = function(e, t) {
								return !!this.canAdd(e, t) && (e.style[i(this.keyName)] = t, !0)
							}, t.prototype.remove = function(e) {
								e.style[i(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style")
							}, t.prototype.value = function(e) {
								var t = e.style[i(this.keyName)];
								return this.canAdd(e, t) ? t : ""
							}, t
						}(n(12).default);
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
						var i = function() {
							function e(t, n) {
								(function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								})(this, e), this.quill = t, this.options = n, this.modules = {}
							}
							return r(e, [{
								key: "init",
								value: function() {
									var e = this;
									Object.keys(this.options.modules).forEach((function(t) {
										null == e.modules[t] && e.addModule(t)
									}))
								}
							}, {
								key: "addModule",
								value: function(e) {
									var t = this.quill.constructor.import("modules/" + e);
									return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e]
								}
							}]), e
						}();
						i.DEFAULTS = {
							modules: {}
						}, i.themes = {
							default: i
						}, t.default = i
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
							i = o(n(0)),
							a = o(n(7));

						function o(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var s = "\ufeff",
							u = function(e) {
								function t(e) {
									! function(e, t) {
										if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
									}(this, t);
									var n = function(e, t) {
										if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
										return !t || "object" != typeof t && "function" != typeof t ? e : t
									}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
									return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach((function(e) {
										n.contentNode.appendChild(e)
									})), n.leftGuard = document.createTextNode(s), n.rightGuard = document.createTextNode(s), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
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
									key: "index",
									value: function(e, n) {
										return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : function e(t, n, r) {
											null === t && (t = Function.prototype);
											var i = Object.getOwnPropertyDescriptor(t, n);
											if (void 0 === i) {
												var a = Object.getPrototypeOf(t);
												return null === a ? void 0 : e(a, n, r)
											}
											if ("value" in i) return i.value;
											var o = i.get;
											return void 0 !== o ? o.call(r) : void 0
										}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "index", this).call(this, e, n)
									}
								}, {
									key: "restore",
									value: function(e) {
										var t = void 0,
											n = void 0,
											r = e.data.split(s).join("");
										if (e === this.leftGuard)
											if (this.prev instanceof a.default) {
												var o = this.prev.length();
												this.prev.insertAt(o, r), t = {
													startNode: this.prev.domNode,
													startOffset: o + r.length
												}
											} else n = document.createTextNode(r), this.parent.insertBefore(i.default.create(n), this), t = {
												startNode: n,
												startOffset: r.length
											};
										else e === this.rightGuard && (this.next instanceof a.default ? (this.next.insertAt(0, r), t = {
											startNode: this.next.domNode,
											startOffset: r.length
										}) : (n = document.createTextNode(r), this.parent.insertBefore(i.default.create(n), this.next), t = {
											startNode: n,
											startOffset: r.length
										}));
										return e.data = s, t
									}
								}, {
									key: "update",
									value: function(e, t) {
										var n = this;
										e.forEach((function(e) {
											if ("characterData" === e.type && (e.target === n.leftGuard || e.target === n.rightGuard)) {
												var r = n.restore(e.target);
												r && (t.range = r)
											}
										}))
									}
								}]), t
							}(i.default.Embed);
						t.default = u
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.AlignStyle = t.AlignClass = t.AlignAttribute = void 0;
						var r = function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(0));
						var i = {
								scope: r.default.Scope.BLOCK,
								whitelist: ["right", "center", "justify"]
							},
							a = new r.default.Attributor.Attribute("align", "align", i),
							o = new r.default.Attributor.Class("align", "ql-align", i),
							s = new r.default.Attributor.Style("align", "text-align", i);
						t.AlignAttribute = a, t.AlignClass = o, t.AlignStyle = s
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.BackgroundStyle = t.BackgroundClass = void 0;
						var r = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(0)),
							i = n(26);
						var a = new r.default.Attributor.Class("background", "ql-bg", {
								scope: r.default.Scope.INLINE
							}),
							o = new i.ColorAttributor("background", "background-color", {
								scope: r.default.Scope.INLINE
							});
						t.BackgroundClass = a, t.BackgroundStyle = o
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.DirectionStyle = t.DirectionClass = t.DirectionAttribute = void 0;
						var r = function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(0));
						var i = {
								scope: r.default.Scope.BLOCK,
								whitelist: ["rtl"]
							},
							a = new r.default.Attributor.Attribute("direction", "dir", i),
							o = new r.default.Attributor.Class("direction", "ql-direction", i),
							s = new r.default.Attributor.Style("direction", "direction", i);
						t.DirectionAttribute = a, t.DirectionClass = o, t.DirectionStyle = s
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.FontClass = t.FontStyle = void 0;
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
							i = function(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}(n(0));

						function a(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}

						function o(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}
						var s = {
								scope: i.default.Scope.INLINE,
								whitelist: ["serif", "monospace"]
							},
							u = new i.default.Attributor.Class("font", "ql-font", s),
							c = new(function(e) {
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
									key: "value",
									value: function(e) {
										return function e(t, n, r) {
											null === t && (t = Function.prototype);
											var i = Object.getOwnPropertyDescriptor(t, n);
											if (void 0 === i) {
												var a = Object.getPrototypeOf(t);
												return null === a ? void 0 : e(a, n, r)
											}
											if ("value" in i) return i.value;
											var o = i.get;
											return void 0 !== o ? o.call(r) : void 0
										}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e).replace(/["']/g, "")
									}
								}]), t
							}(i.default.Attributor.Style))("font", "font-family", s);
						t.FontStyle = c, t.FontClass = u
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.SizeStyle = t.SizeClass = void 0;
						var r = function(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}(n(0));
						var i = new r.default.Attributor.Class("size", "ql-size", {
								scope: r.default.Scope.INLINE,
								whitelist: ["small", "large", "huge"]
							}),
							a = new r.default.Attributor.Style("size", "font-size", {
								scope: r.default.Scope.INLINE,
								whitelist: ["10px", "18px", "32px"]
							});
						t.SizeClass = i, t.SizeStyle = a
					}, function(e, t, n) {
						"use strict";
						e.exports = {
							align: {
								"": n(76),
								center: n(77),
								right: n(78),
								justify: n(79)
							},
							background: n(80),
							blockquote: n(81),
							bold: n(82),
							clean: n(83),
							code: n(58),
							"code-block": n(58),
							color: n(84),
							direction: {
								"": n(85),
								rtl: n(86)
							},
							float: {
								center: n(87),
								full: n(88),
								left: n(89),
								right: n(90)
							},
							formula: n(91),
							header: {
								1: n(92),
								2: n(93)
							},
							italic: n(94),
							image: n(95),
							indent: {
								"+1": n(96),
								"-1": n(97)
							},
							link: n(98),
							list: {
								ordered: n(99),
								bullet: n(100),
								check: n(101)
							},
							script: {
								sub: n(102),
								super: n(103)
							},
							strike: n(104),
							underline: n(105),
							video: n(106)
						}
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.getLastChangeIndex = t.default = void 0;
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
							i = o(n(0)),
							a = o(n(5));

						function o(e) {
							return e && e.__esModule ? e : {
								default: e
							}
						}
						var s = function(e) {
							function t(e, n) {
								! function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var r = function(e, t) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !t || "object" != typeof t && "function" != typeof t ? e : t
								}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
								return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(a.default.events.EDITOR_CHANGE, (function(e, t, n, i) {
									e !== a.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && i !== a.default.sources.USER ? r.transform(t) : r.record(t, n))
								})), r.quill.keyboard.addBinding({
									key: "Z",
									shortKey: !0
								}, r.undo.bind(r)), r.quill.keyboard.addBinding({
									key: "Z",
									shortKey: !0,
									shiftKey: !0
								}, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
									key: "Y",
									shortKey: !0
								}, r.redo.bind(r)), r
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
								key: "change",
								value: function(e, t) {
									if (0 !== this.stack[e].length) {
										var n = this.stack[e].pop();
										this.stack[t].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[e], a.default.sources.USER), this.ignoreChange = !1;
										var r = u(n[e]);
										this.quill.setSelection(r)
									}
								}
							}, {
								key: "clear",
								value: function() {
									this.stack = {
										undo: [],
										redo: []
									}
								}
							}, {
								key: "cutoff",
								value: function() {
									this.lastRecorded = 0
								}
							}, {
								key: "record",
								value: function(e, t) {
									if (0 !== e.ops.length) {
										this.stack.redo = [];
										var n = this.quill.getContents().diff(t),
											r = Date.now();
										if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
											var i = this.stack.undo.pop();
											n = n.compose(i.undo), e = i.redo.compose(e)
										} else this.lastRecorded = r;
										this.stack.undo.push({
											redo: e,
											undo: n
										}), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
									}
								}
							}, {
								key: "redo",
								value: function() {
									this.change("redo", "undo")
								}
							}, {
								key: "transform",
								value: function(e) {
									this.stack.undo.forEach((function(t) {
										t.undo = e.transform(t.undo, !0), t.redo = e.transform(t.redo, !0)
									})), this.stack.redo.forEach((function(t) {
										t.undo = e.transform(t.undo, !0), t.redo = e.transform(t.redo, !0)
									}))
								}
							}, {
								key: "undo",
								value: function() {
									this.change("undo", "redo")
								}
							}]), t
						}(o(n(9)).default);

						function u(e) {
							var t = e.reduce((function(e, t) {
									return e += t.delete || 0
								}), 0),
								n = e.length() - t;
							return function(e) {
								var t = e.ops[e.ops.length - 1];
								return null != t && (null != t.insert ? "string" == typeof t.insert && t.insert.endsWith("\n") : null != t.attributes && Object.keys(t.attributes).some((function(e) {
									return null != i.default.query(e, i.default.Scope.BLOCK)
								})))
							}(e) && (n -= 1), n
						}
						s.DEFAULTS = {
							delay: 1e3,
							maxStack: 100,
							userOnly: !1
						}, t.default = s, t.getLastChangeIndex = u
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = t.BaseTooltip = void 0;
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
							i = h(n(3)),
							a = h(n(2)),
							o = h(n(8)),
							s = h(n(23)),
							u = h(n(34)),
							c = h(n(59)),
							l = h(n(60)),
							f = h(n(28)),
							d = h(n(61));

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
						var b = [!1, "center", "right", "justify"],
							g = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
							v = [!1, "serif", "monospace"],
							y = ["1", "2", "3", !1],
							A = ["small", !1, "large", "huge"],
							S = function(e) {
								function t(e, n) {
									p(this, t);
									var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return e.emitter.listenDOM("click", document.body, (function t(n) {
										if (!document.body.contains(e.root)) return document.body.removeEventListener("click", t);
										null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach((function(e) {
											e.container.contains(n.target) || e.close()
										}))
									})), r
								}
								return m(t, e), r(t, [{
									key: "addModule",
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
										}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addModule", this).call(this, e);
										return "toolbar" === e && this.extendToolbar(n), n
									}
								}, {
									key: "buildButtons",
									value: function(e, t) {
										e.forEach((function(e) {
											(e.getAttribute("class") || "").split(/\s+/).forEach((function(n) {
												if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != t[n]))
													if ("direction" === n) e.innerHTML = t[n][""] + t[n].rtl;
													else if ("string" == typeof t[n]) e.innerHTML = t[n];
												else {
													var r = e.value || "";
													null != r && t[n][r] && (e.innerHTML = t[n][r])
												}
											}))
										}))
									}
								}, {
									key: "buildPickers",
									value: function(e, t) {
										var n = this;
										this.pickers = e.map((function(e) {
											if (e.classList.contains("ql-align")) return null == e.querySelector("option") && E(e, b), new l.default(e, t.align);
											if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
												var n = e.classList.contains("ql-background") ? "background" : "color";
												return null == e.querySelector("option") && E(e, g, "background" === n ? "#ffffff" : "#000000"), new c.default(e, t[n])
											}
											return null == e.querySelector("option") && (e.classList.contains("ql-font") ? E(e, v) : e.classList.contains("ql-header") ? E(e, y) : e.classList.contains("ql-size") && E(e, A)), new f.default(e)
										}));
										this.quill.on(o.default.events.EDITOR_CHANGE, (function() {
											n.pickers.forEach((function(e) {
												e.update()
											}))
										}))
									}
								}]), t
							}(u.default);
						S.DEFAULTS = (0, i.default)(!0, {}, u.default.DEFAULTS, {
							modules: {
								toolbar: {
									handlers: {
										formula: function() {
											this.quill.theme.tooltip.edit("formula")
										},
										image: function() {
											var e = this,
												t = this.container.querySelector("input.ql-image[type=file]");
											null == t && ((t = document.createElement("input")).setAttribute("type", "file"), t.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), t.classList.add("ql-image"), t.addEventListener("change", (function() {
												if (null != t.files && null != t.files[0]) {
													var n = new FileReader;
													n.onload = function(n) {
														var r = e.quill.getSelection(!0);
														e.quill.updateContents((new a.default).retain(r.index).delete(r.length).insert({
															image: n.target.result
														}), o.default.sources.USER), e.quill.setSelection(r.index + 1, o.default.sources.SILENT), t.value = ""
													}, n.readAsDataURL(t.files[0])
												}
											})), this.container.appendChild(t)), t.click()
										},
										video: function() {
											this.quill.theme.tooltip.edit("video")
										}
									}
								}
							}
						});
						var w = function(e) {
							function t(e, n) {
								p(this, t);
								var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
								return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
							}
							return m(t, e), r(t, [{
								key: "listen",
								value: function() {
									var e = this;
									this.textbox.addEventListener("keydown", (function(t) {
										s.default.match(t, "enter") ? (e.save(), t.preventDefault()) : s.default.match(t, "escape") && (e.cancel(), t.preventDefault())
									}))
								}
							}, {
								key: "cancel",
								value: function() {
									this.hide()
								}
							}, {
								key: "edit",
								value: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
										t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
									this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != t ? this.textbox.value = t : e !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + e) || ""), this.root.setAttribute("data-mode", e)
								}
							}, {
								key: "restoreFocus",
								value: function() {
									var e = this.quill.scrollingContainer.scrollTop;
									this.quill.focus(), this.quill.scrollingContainer.scrollTop = e
								}
							}, {
								key: "save",
								value: function() {
									var e = this.textbox.value;
									switch (this.root.getAttribute("data-mode")) {
										case "link":
											var t = this.quill.root.scrollTop;
											this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, o.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, o.default.sources.USER)), this.quill.root.scrollTop = t;
											break;
										case "video":
											e = function(e) {
												var t = e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
												return t ? (t[1] || "https") + "://www.youtube.com/embed/" + t[2] + "?showinfo=0" : (t = e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (t[1] || "https") + "://player.vimeo.com/video/" + t[2] + "/" : e
											}(e);
										case "formula":
											if (!e) break;
											var n = this.quill.getSelection(!0);
											if (null != n) {
												var r = n.index + n.length;
												this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), e, o.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", o.default.sources.USER), this.quill.setSelection(r + 2, o.default.sources.USER)
											}
									}
									this.textbox.value = "", this.hide()
								}
							}]), t
						}(d.default);

						function E(e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							t.forEach((function(t) {
								var r = document.createElement("option");
								t === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", t), e.appendChild(r)
							}))
						}
						t.BaseTooltip = w, t.default = S
					}, function(e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var r = function() {
							function e() {
								this.head = this.tail = null, this.length = 0
							}
							return e.prototype.append = function() {
								for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
								this.insertBefore(e[0], null), e.length > 1 && this.append.apply(this, e.slice(1))
							}, e.prototype.contains = function(e) {
								for (var t, n = this.iterator(); t = n();)
									if (t === e) return !0;
								return !1
							}, e.prototype.insertBefore = function(e, t) {
								e && (e.next = t, null != t ? (e.prev = t.prev, null != t.prev && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)) : null != this.tail ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = null, this.head = this.tail = e), this.length += 1)
							}, e.prototype.offset = function(e) {
								for (var t = 0, n = this.head; null != n;) {
									if (n === e) return t;
									t += n.length(), n = n.next
								}
								return -1
							}, e.prototype.remove = function(e) {
								this.contains(e) && (null != e.prev && (e.prev.next = e.next), null != e.next && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), this.length -= 1)
							}, e.prototype.iterator = function(e) {
								return void 0 === e && (e = this.head),
									function() {
										var t = e;
										return null != e && (e = e.next), t
									}
							}, e.prototype.find = function(e, t) {
								void 0 === t && (t = !1);
								for (var n, r = this.iterator(); n = r();) {
									var i = n.length();
									if (e < i || t && e === i && (null == n.next || 0 !== n.next.length())) return [n, e];
									e -= i
								}
								return [null, 0]
							}, e.prototype.forEach = function(e) {
								for (var t, n = this.iterator(); t = n();) e(t)
							}, e.prototype.forEachAt = function(e, t, n) {
								if (!(t <= 0))
									for (var r, i = this.find(e), a = i[0], o = e - i[1], s = this.iterator(a);
										(r = s()) && o < e + t;) {
										var u = r.length();
										e > o ? n(r, e - o, Math.min(t, o + u - e)) : n(r, 0, Math.min(u, e + t - o)), o += u
									}
							}, e.prototype.map = function(e) {
								return this.reduce((function(t, n) {
									return t.push(e(n)), t
								}), [])
							}, e.prototype.reduce = function(e, t) {
								for (var n, r = this.iterator(); n = r();) t = e(t, n);
								return t
							}, e
						}();
						t.default = r
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(17),
							a = n(1),
							o = {
								attributes: !0,
								characterData: !0,
								characterDataOldValue: !0,
								childList: !0,
								subtree: !0
							},
							s = function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return n.scroll = n, n.observer = new MutationObserver((function(e) {
										n.update(e)
									})), n.observer.observe(n.domNode, o), n.attach(), n
								}
								return r(t, e), t.prototype.detach = function() {
									e.prototype.detach.call(this), this.observer.disconnect()
								}, t.prototype.deleteAt = function(t, n) {
									this.update(), 0 === t && n === this.length() ? this.children.forEach((function(e) {
										e.remove()
									})) : e.prototype.deleteAt.call(this, t, n)
								}, t.prototype.formatAt = function(t, n, r, i) {
									this.update(), e.prototype.formatAt.call(this, t, n, r, i)
								}, t.prototype.insertAt = function(t, n, r) {
									this.update(), e.prototype.insertAt.call(this, t, n, r)
								}, t.prototype.optimize = function(t, n) {
									var r = this;
									void 0 === t && (t = []), void 0 === n && (n = {}), e.prototype.optimize.call(this, n);
									for (var o = [].slice.call(this.observer.takeRecords()); o.length > 0;) t.push(o.pop());
									for (var s = function(e, t) {
											void 0 === t && (t = !0), null != e && e !== r && null != e.domNode.parentNode && (null == e.domNode[a.DATA_KEY].mutations && (e.domNode[a.DATA_KEY].mutations = []), t && s(e.parent))
										}, u = function(e) {
											null != e.domNode[a.DATA_KEY] && null != e.domNode[a.DATA_KEY].mutations && (e instanceof i.default && e.children.forEach(u), e.optimize(n))
										}, c = t, l = 0; c.length > 0; l += 1) {
										if (l >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
										for (c.forEach((function(e) {
												var t = a.find(e.target, !0);
												null != t && (t.domNode === e.target && ("childList" === e.type ? (s(a.find(e.previousSibling, !1)), [].forEach.call(e.addedNodes, (function(e) {
													var t = a.find(e, !1);
													s(t, !1), t instanceof i.default && t.children.forEach((function(e) {
														s(e, !1)
													}))
												}))) : "attributes" === e.type && s(t.prev)), s(t))
											})), this.children.forEach(u), o = (c = [].slice.call(this.observer.takeRecords())).slice(); o.length > 0;) t.push(o.pop())
									}
								}, t.prototype.update = function(t, n) {
									var r = this;
									void 0 === n && (n = {}), (t = t || this.observer.takeRecords()).map((function(e) {
										var t = a.find(e.target, !0);
										return null == t ? null : null == t.domNode[a.DATA_KEY].mutations ? (t.domNode[a.DATA_KEY].mutations = [e], t) : (t.domNode[a.DATA_KEY].mutations.push(e), null)
									})).forEach((function(e) {
										null != e && e !== r && null != e.domNode[a.DATA_KEY] && e.update(e.domNode[a.DATA_KEY].mutations || [], n)
									})), null != this.domNode[a.DATA_KEY].mutations && e.prototype.update.call(this, this.domNode[a.DATA_KEY].mutations, n), this.optimize(t, n)
								}, t.blotName = "scroll", t.defaultChild = "block", t.scope = a.Scope.BLOCK_BLOT, t.tagName = "DIV", t
							}(i.default);
						t.default = s
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(18),
							a = n(1);
						var o = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return r(t, e), t.formats = function(n) {
								if (n.tagName !== t.tagName) return e.formats.call(this, n)
							}, t.prototype.format = function(n, r) {
								var a = this;
								n !== this.statics.blotName || r ? e.prototype.format.call(this, n, r) : (this.children.forEach((function(e) {
									e instanceof i.default || (e = e.wrap(t.blotName, !0)), a.attributes.copy(e)
								})), this.unwrap())
							}, t.prototype.formatAt = function(t, n, r, i) {
								null != this.formats()[r] || a.query(r, a.Scope.ATTRIBUTE) ? this.isolate(t, n).format(r, i) : e.prototype.formatAt.call(this, t, n, r, i)
							}, t.prototype.optimize = function(n) {
								e.prototype.optimize.call(this, n);
								var r = this.formats();
								if (0 === Object.keys(r).length) return this.unwrap();
								var i = this.next;
								i instanceof t && i.prev === this && function(e, t) {
									if (Object.keys(e).length !== Object.keys(t).length) return !1;
									for (var n in e)
										if (e[n] !== t[n]) return !1;
									return !0
								}(r, i.formats()) && (i.moveChildren(this), i.remove())
							}, t.blotName = "inline", t.scope = a.Scope.INLINE_BLOT, t.tagName = "SPAN", t
						}(i.default);
						t.default = o
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(18),
							a = n(1),
							o = function(e) {
								function t() {
									return null !== e && e.apply(this, arguments) || this
								}
								return r(t, e), t.formats = function(n) {
									var r = a.query(t.blotName).tagName;
									if (n.tagName !== r) return e.formats.call(this, n)
								}, t.prototype.format = function(n, r) {
									null != a.query(n, a.Scope.BLOCK) && (n !== this.statics.blotName || r ? e.prototype.format.call(this, n, r) : this.replaceWith(t.blotName))
								}, t.prototype.formatAt = function(t, n, r, i) {
									null != a.query(r, a.Scope.BLOCK) ? this.format(r, i) : e.prototype.formatAt.call(this, t, n, r, i)
								}, t.prototype.insertAt = function(t, n, r) {
									if (null == r || null != a.query(n, a.Scope.INLINE)) e.prototype.insertAt.call(this, t, n, r);
									else {
										var i = this.split(t),
											o = a.create(n, r);
										i.parent.insertBefore(o, i)
									}
								}, t.prototype.update = function(t, n) {
									navigator.userAgent.match(/Trident/) ? this.build() : e.prototype.update.call(this, t, n)
								}, t.blotName = "block", t.scope = a.Scope.BLOCK_BLOT, t.tagName = "P", t
							}(i.default);
						t.default = o
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return r(t, e), t.formats = function(e) {}, t.prototype.format = function(t, n) {
								e.prototype.formatAt.call(this, 0, this.length(), t, n)
							}, t.prototype.formatAt = function(t, n, r, i) {
								0 === t && n === this.length() ? this.format(r, i) : e.prototype.formatAt.call(this, t, n, r, i)
							}, t.prototype.formats = function() {
								return this.statics.formats(this.domNode)
							}, t
						}(n(19).default);
						t.default = i
					}, function(e, t, n) {
						"use strict";
						var r = this && this.__extends || function() {
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
						var i = n(19),
							a = n(1),
							o = function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return n.text = n.statics.value(n.domNode), n
								}
								return r(t, e), t.create = function(e) {
									return document.createTextNode(e)
								}, t.value = function(e) {
									var t = e.data;
									return t.normalize && (t = t.normalize()), t
								}, t.prototype.deleteAt = function(e, t) {
									this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t)
								}, t.prototype.index = function(e, t) {
									return this.domNode === e ? t : -1
								}, t.prototype.insertAt = function(t, n, r) {
									null == r ? (this.text = this.text.slice(0, t) + n + this.text.slice(t), this.domNode.data = this.text) : e.prototype.insertAt.call(this, t, n, r)
								}, t.prototype.length = function() {
									return this.text.length
								}, t.prototype.optimize = function(n) {
									e.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof t && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
								}, t.prototype.position = function(e, t) {
									return void 0 === t && (t = !1), [this.domNode, e]
								}, t.prototype.split = function(e, t) {
									if (void 0 === t && (t = !1), !t) {
										if (0 === e) return this;
										if (e === this.length()) return this.next
									}
									var n = a.create(this.domNode.splitText(e));
									return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
								}, t.prototype.update = function(e, t) {
									var n = this;
									e.some((function(e) {
										return "characterData" === e.type && e.target === n.domNode
									})) && (this.text = this.statics.value(this.domNode))
								}, t.prototype.value = function() {
									return this.text
								}, t.blotName = "text", t.scope = a.Scope.INLINE_BLOT, t
							}(i.default);
						t.default = o
					}, function(e, t, n) {
						"use strict";
						var r = document.createElement("div");
						if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
							var i = DOMTokenList.prototype.toggle;
							DOMTokenList.prototype.toggle = function(e, t) {
								return arguments.length > 1 && !this.contains(e) == !t ? t : i.call(this, e)
							}
						}
						String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
							return t = t || 0, this.substr(t, e.length) === e
						}), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
							var n = this.toString();
							("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
							var r = n.indexOf(e, t);
							return -1 !== r && r === t
						}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
							value: function(e) {
								if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
								if ("function" != typeof e) throw new TypeError("predicate must be a function");
								for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], a = 0; a < r; a++)
									if (t = n[a], e.call(i, t, a, n)) return t
							}
						}), document.addEventListener("DOMContentLoaded", (function() {
							document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
						}))
					}, function(e, t) {
						var n = -1;

						function r(e, t, n) {
							if (e == t) return e ? [
								[0, e]
							] : [];
							(n < 0 || e.length < n) && (n = null);
							var r = s(e, t),
								a = e.substring(0, r);
							r = u(e = e.substring(r), t = t.substring(r));
							var o = e.substring(e.length - r),
								c = i(e = e.substring(0, e.length - r), t = t.substring(0, t.length - r));
							return a && c.unshift([0, a]), o && c.push([0, o]), l(c), null != n && (c = function(e, t) {
								var n = d(e, t),
									r = n[1],
									i = n[0],
									a = r[i],
									o = r[i + 1];
								if (null == a) return e;
								if (0 !== a[0]) return e;
								if (null != o && a[1] + o[1] === o[1] + a[1]) return r.splice(i, 2, o, a), p(r, i, 2);
								if (null != o && 0 === o[1].indexOf(a[1])) {
									r.splice(i, 2, [o[0], a[1]], [0, a[1]]);
									var s = o[1].slice(a[1].length);
									return s.length > 0 && r.splice(i + 2, 0, [o[0], s]), p(r, i, 3)
								}
								return e
							}(c, n)), c = h(c)
						}

						function i(e, t) {
							var i;
							if (!e) return [
								[1, t]
							];
							if (!t) return [
								[n, e]
							];
							var o = e.length > t.length ? e : t,
								s = e.length > t.length ? t : e,
								u = o.indexOf(s);
							if (-1 != u) return i = [
								[1, o.substring(0, u)],
								[0, s],
								[1, o.substring(u + s.length)]
							], e.length > t.length && (i[0][0] = i[2][0] = n), i;
							if (1 == s.length) return [
								[n, e],
								[1, t]
							];
							var l = c(e, t);
							if (l) {
								var f = l[0],
									d = l[1],
									h = l[2],
									p = l[3],
									_ = l[4],
									m = r(f, h),
									b = r(d, p);
								return m.concat([
									[0, _]
								], b)
							}
							return a(e, t)
						}

						function a(e, t) {
							for (var r = e.length, i = t.length, a = Math.ceil((r + i) / 2), s = a, u = 2 * a, c = new Array(u), l = new Array(u), f = 0; f < u; f++) c[f] = -1, l[f] = -1;
							c[s + 1] = 0, l[s + 1] = 0;

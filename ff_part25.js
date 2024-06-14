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
												i = u(e, t, n),
												a = f(i, 4);
											return e = a[0], t = a[1], n = a[3], s.call(this, (function() {
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
												r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.default.sources.API;
											return s.call(this, (function() {
												var r = n.getSelection(!0),
													a = new h.default;
												if (null == r) return a;
												if (b.default.query(e, b.default.Scope.BLOCK)) a = n.editor.formatLine(r.index, r.length, i({}, e, t));
												else {
													if (0 === r.length) return n.selection.format(e, t), a;
													a = n.editor.formatText(r.index, r.length, i({}, e, t))
												}
												return n.setSelection(r, _.default.sources.SILENT), a
											}), r)
										}
									}, {
										key: "formatLine",
										value: function(e, t, n, r, i) {
											var a, o = this,
												c = u(e, t, n, r, i),
												l = f(c, 4);
											return e = l[0], t = l[1], a = l[2], i = l[3], s.call(this, (function() {
												return o.editor.formatLine(e, t, a)
											}), i, e, 0)
										}
									}, {
										key: "formatText",
										value: function(e, t, n, r, i) {
											var a, o = this,
												c = u(e, t, n, r, i),
												l = f(c, 4);
											return e = l[0], t = l[1], a = l[2], i = l[3], s.call(this, (function() {
												return o.editor.formatText(e, t, a)
											}), i, e, 0)
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
												n = u(e, t),
												r = f(n, 2);
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
											return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
										}
									}, {
										key: "getText",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
												t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e,
												n = u(e, t),
												r = f(n, 2);
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
											return s.call(this, (function() {
												return i.editor.insertEmbed(t, n, r)
											}), a, t)
										}
									}, {
										key: "insertText",
										value: function(e, t, n, r, i) {
											var a, o = this,
												c = u(e, 0, n, r, i),
												l = f(c, 4);
											return e = l[0], a = l[2], i = l[3], s.call(this, (function() {
												return o.editor.insertText(e, t, a)
											}), i, e, t.length)
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
												i = u(e, t, n),
												a = f(i, 4);
											return e = a[0], t = a[1], n = a[3], s.call(this, (function() {
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
												n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.default.sources.API;
											return s.call(this, (function() {
												e = new h.default(e);
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
												var i = u(t, n, r),
													a = f(i, 4);
												t = a[0], n = a[1], r = a[3], this.selection.setRange(new g.Range(t, n), r), r !== _.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
											}
										}
									}, {
										key: "setText",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.default.sources.API,
												n = (new h.default).insert(e);
											return this.setContents(n, t)
										}
									}, {
										key: "update",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.default.sources.USER,
												t = this.scroll.update(e);
											return this.selection.update(e), t
										}
									}, {
										key: "updateContents",
										value: function(e) {
											var t = this,
												n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.default.sources.API;
											return s.call(this, (function() {
												return e = new h.default(e), t.editor.applyDelta(e, n)
											}), n, !0)
										}
									}]), e
								}();
							E.DEFAULTS = {
								bounds: null,
								formats: null,
								modules: {},
								placeholder: "",
								readOnly: !1,
								scrollingContainer: null,
								strict: !0,
								theme: "default"
							}, E.events = _.default.events, E.sources = _.default.sources, E.version = "1.3.6", E.imports = {
								delta: h.default,
								parchment: b.default,
								"core/module": m.default,
								"core/theme": S.default
							}, t.expandConfig = o, t.overload = u, t.default = E
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
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var o = function() {
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
								s = function e(t, n, r) {
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
								u = r(n(7)),
								c = r(n(0)),
								l = function(e) {
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
									}(t, e), o(t, [{
										key: "formatAt",
										value: function(e, n, r, i) {
											if (t.compare(this.statics.blotName, r) < 0 && c.default.query(r, c.default.Scope.BLOT)) {
												var a = this.isolate(e, n);
												i && a.wrap(r, i)
											} else s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, i)
										}
									}, {
										key: "optimize",
										value: function(e) {
											if (s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.parent instanceof t && t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
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
								}(c.default.Inline);
							l.allowedChildren = [l, c.default.Embed, u.default], l.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], t.default = l
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

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = function() {
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
								o = r(n(54)),
								s = (0, r(n(10)).default)("quill:events");
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
								}(t, e), i(t, [{
									key: "emit",
									value: function() {
										s.log.apply(s, arguments), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "emit", this).apply(this, arguments)
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
							}(o.default);
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

							function r(e) {
								if (a.indexOf(e) <= a.indexOf(o)) {
									for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
									(t = console)[e].apply(t, r)
								}
							}

							function i(e) {
								return a.reduce((function(t, n) {
									return t[n] = r.bind(console, n, e), t
								}), {})
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var a = ["error", "warn", "log", "info"],
								o = "warn";
							r.level = i.level = function(e) {
								o = e
							}, t.default = i
						}, function(e, t, n) {
							function r(e) {
								return null == e
							}

							function i(e) {
								return !(!e || "object" != typeof e || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0])
							}
							var a = Array.prototype.slice,
								o = n(52),
								s = n(53),
								u = e.exports = function(e, t, n) {
									return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function(e, t, n) {
										var c, l;
										if (r(e) || r(t)) return !1;
										if (e.prototype !== t.prototype) return !1;
										if (s(e)) return !!s(t) && (e = a.call(e), t = a.call(t), u(e, t, n));
										if (i(e)) {
											if (!i(t)) return !1;
											if (e.length !== t.length) return !1;
											for (c = 0; c < e.length; c++)
												if (e[c] !== t[c]) return !1;
											return !0
										}
										try {
											var f = o(e),
												d = o(t)
										} catch (e) {
											return !1
										}
										if (f.length != d.length) return !1;
										for (f.sort(), d.sort(), c = f.length - 1; c >= 0; c--)
											if (f[c] != d[c]) return !1;
										for (c = f.length - 1; c >= 0; c--)
											if (l = f[c], !u(e[l], t[l], n)) return !1;
										return typeof e == typeof t
									}(e, t, n))
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
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.Code = void 0;
							var s = function(e, t) {
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
								u = function() {
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
								l = r(n(2)),
								f = r(n(0)),
								d = r(n(4)),
								h = r(n(6)),
								p = r(n(7)),
								_ = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), t
								}(h.default);
							_.blotName = "code", _.tagName = "CODE";
							var m = function(e) {
								function t() {
									return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
								}
								return o(t, e), u(t, [{
									key: "delta",
									value: function() {
										var e = this,
											t = this.domNode.textContent;
										return t.endsWith("\n") && (t = t.slice(0, -1)), t.split("\n").reduce((function(t, n) {
											return t.insert(n).insert("\n", e.formats())
										}), new l.default)
									}
								}, {
									key: "format",
									value: function(e, n) {
										if (e !== this.statics.blotName || !n) {
											var r = this.descendant(p.default, this.length() - 1),
												i = s(r, 1)[0];
											null != i && i.deleteAt(i.length() - 1, 1), c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
										}
									}
								}, {
									key: "formatAt",
									value: function(e, n, r, i) {
										if (0 !== n && null != f.default.query(r, f.default.Scope.BLOCK) && (r !== this.statics.blotName || i !== this.statics.formats(this.domNode))) {
											var a = this.newlineIndex(e);
											if (!(a < 0 || a >= e + n)) {
												var o = this.newlineIndex(e, !0) + 1,
													s = a - o + 1,
													u = this.isolate(o, s),
													c = u.next;
												u.format(r, i), c instanceof t && c.formatAt(0, e - o + n - s, r, i)
											}
										}
									}
								}, {
									key: "insertAt",
									value: function(e, t, n) {
										if (null == n) {
											var r = this.descendant(p.default, e),
												i = s(r, 2),
												a = i[0],
												o = i[1];
											a.insertAt(o, t)
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
										if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, e).lastIndexOf("\n");
										var t = this.domNode.textContent.slice(e).indexOf("\n");
										return t > -1 ? e + t : -1
									}
								}, {
									key: "optimize",
									value: function(e) {
										this.domNode.textContent.endsWith("\n") || this.appendChild(f.default.create("text", "\n")), c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
										var n = this.next;
										null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(e), n.moveChildren(this), n.remove())
									}
								}, {
									key: "replace",
									value: function(e) {
										c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e), [].slice.call(this.domNode.querySelectorAll("*")).forEach((function(e) {
											var t = f.default.find(e);
											null == t ? e.parentNode.removeChild(e) : t instanceof f.default.Embed ? t.remove() : t.unwrap()
										}))
									}
								}], [{
									key: "create",
									value: function(e) {
										var n = c(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
										return n.setAttribute("spellcheck", !1), n
									}
								}, {
									key: "formats",
									value: function() {
										return !0
									}
								}]), t
							}(d.default);
							m.blotName = "code-block", m.tagName = "PRE", m.TAB = "  ", t.Code = _, t.default = m
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t) {
								return Object.keys(t).reduce((function(n, r) {
									return null == e[r] || (t[r] === e[r] ? n[r] = t[r] : Array.isArray(t[r]) ? t[r].indexOf(e[r]) < 0 && (n[r] = t[r].concat([e[r]])) : n[r] = [t[r], e[r]]), n
								}), {})
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
									return typeof e
								} : function(e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
								},
								o = function(e, t) {
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
								s = function() {
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
								u = r(n(2)),
								c = r(n(20)),
								l = r(n(0)),
								f = r(n(13)),
								d = r(n(24)),
								h = n(4),
								p = r(h),
								_ = r(n(16)),
								m = r(n(21)),
								b = r(n(11)),
								g = r(n(3)),
								v = /^[ -~]*$/,
								y = function() {
									function e(t) {
										(function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										})(this, e), this.scroll = t, this.delta = this.getDelta()
									}
									return s(e, [{
										key: "applyDelta",
										value: function(e) {
											var t = this,
												n = !1;
											this.scroll.update();
											var r = this.scroll.length();
											return this.scroll.batchStart(), (e = function(e) {
												return e.reduce((function(e, t) {
													if (1 === t.insert) {
														var n = (0, m.default)(t.attributes);
														return delete n.image, e.insert({
															image: t.attributes.image
														}, n)
													}
													if (null == t.attributes || !0 !== t.attributes.list && !0 !== t.attributes.bullet || ((t = (0, m.default)(t)).attributes.list ? t.attributes.list = "ordered" : (t.attributes.list = "bullet", delete t.attributes.bullet)), "string" == typeof t.insert) {
														var r = t.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
														return e.insert(r, t.attributes)
													}
													return e.push(t)
												}), new u.default)
											}(e)).reduce((function(e, i) {
												var s = i.retain || i.delete || i.insert.length || 1,
													u = i.attributes || {};
												if (null != i.insert) {
													if ("string" == typeof i.insert) {
														var f = i.insert;
														f.endsWith("\n") && n && (n = !1, f = f.slice(0, -1)), e >= r && !f.endsWith("\n") && (n = !0), t.scroll.insertAt(e, f);
														var d = t.scroll.line(e),
															_ = o(d, 2),
															m = _[0],
															b = _[1],
															v = (0, g.default)({}, (0, h.bubbleFormats)(m));
														if (m instanceof p.default) {
															var y = m.descendant(l.default.Leaf, b),
																A = o(y, 1)[0];
															v = (0, g.default)(v, (0, h.bubbleFormats)(A))
														}
														u = c.default.attributes.diff(v, u) || {}
													} else if ("object" === a(i.insert)) {
														var S = Object.keys(i.insert)[0];
														if (null == S) return e;
														t.scroll.insertAt(e, S, i.insert[S])
													}
													r += s
												}
												return Object.keys(u).forEach((function(n) {
													t.scroll.formatAt(e, s, n, u[n])
												})), e + s
											}), 0), e.reduce((function(e, n) {
												return "number" == typeof n.delete ? (t.scroll.deleteAt(e, n.delete), e) : e + (n.retain || n.insert.length || 1)
											}), 0), this.scroll.batchEnd(), this.update(e)
										}
									}, {
										key: "deleteText",
										value: function(e, t) {
											return this.scroll.deleteAt(e, t), this.update((new u.default).retain(e).delete(t))
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
														if (t instanceof f.default) {
															var s = e - t.offset(n.scroll),
																u = t.newlineIndex(s + o) - s + 1;
															t.formatAt(s, u, i, r[i])
														} else t.format(i, r[i]);
														o -= a
													}))
												}
											})), this.scroll.optimize(), this.update((new u.default).retain(e).retain(t, (0, m.default)(r)))
										}
									}, {
										key: "formatText",
										value: function(e, t) {
											var n = this,
												r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
											return Object.keys(r).forEach((function(i) {
												n.scroll.formatAt(e, t, i, r[i])
											})), this.update((new u.default).retain(e).retain(t, (0, m.default)(r)))
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
											}), new u.default)
										}
									}, {
										key: "getFormat",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
												n = [],
												r = [];
											0 === t ? this.scroll.path(e).forEach((function(e) {
												var t = o(e, 1)[0];
												t instanceof p.default ? n.push(t) : t instanceof l.default.Leaf && r.push(t)
											})) : (n = this.scroll.lines(e, t), r = this.scroll.descendants(l.default.Leaf, e, t));
											var a = [n, r].map((function(e) {
												if (0 === e.length) return {};
												for (var t = (0, h.bubbleFormats)(e.shift()); Object.keys(t).length > 0;) {
													var n = e.shift();
													if (null == n) return t;
													t = i((0, h.bubbleFormats)(n), t)
												}
												return t
											}));
											return g.default.apply(g.default, a)
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
											return this.scroll.insertAt(e, t, n), this.update((new u.default).retain(e).insert(function(e, t, n) {
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
											})), this.update((new u.default).retain(e).insert(t, (0, m.default)(r)))
										}
									}, {
										key: "isBlank",
										value: function() {
											if (0 == this.scroll.children.length) return !0;
											if (this.scroll.children.length > 1) return !1;
											var e = this.scroll.children.head;
											return e.statics.blotName === p.default.blotName && !(e.children.length > 1) && e.children.head instanceof _.default
										}
									}, {
										key: "removeFormat",
										value: function(e, t) {
											var n = this.getText(e, t),
												r = this.scroll.line(e + t),
												i = o(r, 2),
												a = i[0],
												s = i[1],
												c = 0,
												l = new u.default;
											null != a && (c = a instanceof f.default ? a.newlineIndex(s) - s + 1 : a.length() - s, l = a.delta().slice(s, s + c - 1).insert("\n"));
											var d = this.getContents(e, t + c).diff((new u.default).insert(n).concat(l)),
												h = (new u.default).retain(e).concat(d);
											return this.applyDelta(h)
										}
									}, {
										key: "update",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
												n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
												r = this.delta;
											if (1 === t.length && "characterData" === t[0].type && t[0].target.data.match(v) && l.default.find(t[0].target)) {
												var i = l.default.find(t[0].target),
													a = (0, h.bubbleFormats)(i),
													o = i.offset(this.scroll),
													s = t[0].oldValue.replace(d.default.CONTENTS, ""),
													c = (new u.default).insert(s),
													f = (new u.default).insert(i.value());
												e = (new u.default).retain(o).concat(c.diff(f, n)).reduce((function(e, t) {
													return t.insert ? e.insert(t.insert, a) : e.push(t)
												}), new u.default), this.delta = r.compose(e)
											} else this.delta = this.getDelta(), e && (0, b.default)(r.compose(e), this.delta) || (e = r.diff(this.delta, n));
											return e
										}
									}]), e
								}();
							t.default = y
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e) {
								if (Array.isArray(e)) {
									for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
									return n
								}
								return Array.from(e)
							}

							function a(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}

							function o(e, t) {
								try {
									t.parentNode
								} catch (e) {
									return !1
								}
								return t instanceof Text && (t = t.parentNode), e.contains(t)
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.Range = void 0;
							var s = function(e, t) {
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
								u = function() {
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
								c = r(n(0)),
								l = r(n(21)),
								f = r(n(11)),
								d = r(n(8)),
								h = (0, r(n(10)).default)("quill:selection"),
								p = function e(t) {
									var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
									a(this, e), this.index = t, this.length = n
								},
								_ = function() {
									function e(t, n) {
										var r = this;
										a(this, e), this.emitter = n, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange = new p(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (function() {
											r.mouseDown || setTimeout(r.update.bind(r, d.default.sources.USER), 1)
										})), this.emitter.on(d.default.events.EDITOR_CHANGE, (function(e, t) {
											e === d.default.events.TEXT_CHANGE && t.length() > 0 && r.update(d.default.sources.SILENT)
										})), this.emitter.on(d.default.events.SCROLL_BEFORE_UPDATE, (function() {
											if (r.hasFocus()) {
												var e = r.getNativeRange();
												null != e && e.start.node !== r.cursor.textNode && r.emitter.once(d.default.events.SCROLL_UPDATE, (function() {
													try {
														r.setNativeRange(e.start.node, e.start.offset, e.end.node, e.end.offset)
													} catch (e) {}
												}))
											}
										})), this.emitter.on(d.default.events.SCROLL_OPTIMIZE, (function(e, t) {
											if (t.range) {
												var n = t.range,
													i = n.startNode,
													a = n.startOffset,
													o = n.endNode,
													s = n.endOffset;
												r.setNativeRange(i, a, o, s)
											}
										})), this.update(d.default.sources.SILENT)
									}
									return u(e, [{
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
												e.mouseDown = !1, e.update(d.default.sources.USER)
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
												if (null != n && n.native.collapsed && !c.default.query(e, c.default.Scope.BLOCK)) {
													if (n.start.node !== this.cursor.textNode) {
														var r = c.default.find(n.start.node, !1);
														if (null == r) return;
														if (r instanceof c.default.Leaf) {
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
											var r = void 0,
												i = this.scroll.leaf(e),
												a = s(i, 2),
												o = a[0],
												u = a[1];
											if (null == o) return null;
											var c = o.position(u, !0),
												l = s(c, 2);
											r = l[0], u = l[1];
											var f = document.createRange();
											if (t > 0) {
												f.setStart(r, u);
												var d = this.scroll.leaf(e + t),
													h = s(d, 2);
												if (o = h[0], u = h[1], null == o) return null;
												var p = o.position(u, !0),
													_ = s(p, 2);
												return r = _[0], u = _[1], f.setEnd(r, u), f.getBoundingClientRect()
											}
											var m = "left",
												b = void 0;
											return r instanceof Text ? (u < r.data.length ? (f.setStart(r, u), f.setEnd(r, u + 1)) : (f.setStart(r, u - 1), f.setEnd(r, u), m = "right"), b = f.getBoundingClientRect()) : (b = o.domNode.getBoundingClientRect(), u > 0 && (m = "right")), {
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
											return h.info("getNativeRange", n), n
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
											var r = n.map((function(e) {
													var n = s(e, 2),
														r = n[0],
														i = n[1],
														a = c.default.find(r, !0),
														o = a.offset(t.scroll);
													return 0 === i ? o : a instanceof c.default.Container ? o + a.length() : o + a.index(r, i)
												})),
												a = Math.min(Math.max.apply(Math, i(r)), this.scroll.length() - 1),
												o = Math.min.apply(Math, [a].concat(i(r)));
											return new p(o, a - o)
										}
									}, {
										key: "normalizeNative",
										value: function(e) {
											if (!o(this.root, e.startContainer) || !e.collapsed && !o(this.root, e.endContainer)) return null;
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
												r = [],
												i = this.scroll.length();
											return n.forEach((function(e, n) {
												e = Math.min(i - 1, e);
												var a, o = t.scroll.leaf(e),
													u = s(o, 2),
													c = u[0],
													l = u[1],
													f = c.position(l, 0 !== n),
													d = s(f, 2);
												a = d[0], l = d[1], r.push(a, l)
											})), r.length < 2 && (r = r.concat(r)), r
										}
									}, {
										key: "scrollIntoView",
										value: function(e) {
											var t = this.lastRange;
											if (null != t) {
												var n = this.getBounds(t.index, t.length);
												if (null != n) {
													var r = this.scroll.length() - 1,
														i = this.scroll.line(Math.min(t.index, r)),
														a = s(i, 1)[0],
														o = a;
													if (t.length > 0) {
														var u = this.scroll.line(Math.min(t.index + t.length, r));
														o = s(u, 1)[0]
													}
													if (null != a && null != o) {
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
											if (h.info("setNativeRange", e, t, n, r), null == e || null != this.root.parentNode && null != e.parentNode && null != n.parentNode) {
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
												n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.sources.API;
											if ("string" == typeof t && (n = t, t = !1), h.info("setRange", e), null != e) {
												var r = this.rangeToNative(e);
												this.setNativeRange.apply(this, i(r).concat([t]))
											} else this.setNativeRange(null);
											this.update(n)
										}
									}, {
										key: "update",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.default.sources.USER,
												t = this.lastRange,
												n = this.getRange(),
												r = s(n, 2),
												i = r[0],
												a = r[1];
											if (this.lastRange = i, null != this.lastRange && (this.savedRange = this.lastRange), !(0, f.default)(t, this.lastRange)) {
												var o;
												!this.composing && null != a && a.native.collapsed && a.start.node !== this.cursor.textNode && this.cursor.restore();
												var u, c = [d.default.events.SELECTION_CHANGE, (0, l.default)(this.lastRange), (0, l.default)(t), e];
												(o = this.emitter).emit.apply(o, [d.default.events.EDITOR_CHANGE].concat(c)), e !== d.default.sources.SILENT && (u = this.emitter).emit.apply(u, c)
											}
										}
									}]), e
								}();
							t.Range = p, t.default = _
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
							var a = function() {
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
								o = function(e) {
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
									}(t, e), a(t, [{
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

							function r(e) {
								var t = s.find(e);
								if (null == t) try {
									t = s.create(e)
								} catch (n) {
									t = s.create(s.Scope.INLINE), [].slice.call(e.childNodes).forEach((function(e) {
										t.domNode.appendChild(e)
									})), e.parentNode && e.parentNode.replaceChild(t.domNode, e), t.attach()
								}
								return t
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
							var a = n(44),
								o = n(30),
								s = n(1),
								u = function(e) {
									function t(t) {
										var n = e.call(this, t) || this;
										return n.build(), n
									}
									return i(t, e), t.prototype.appendChild = function(e) {
										this.insertBefore(e)
									}, t.prototype.attach = function() {
										e.prototype.attach.call(this), this.children.forEach((function(e) {
											e.attach()
										}))
									}, t.prototype.build = function() {
										var e = this;
										this.children = new a.default, [].slice.call(this.domNode.childNodes).reverse().forEach((function(t) {
											try {
												var n = r(t);
												e.insertBefore(n, e.children.head || void 0)
											} catch (e) {
												if (e instanceof s.ParchmentError) return;
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
											var o = null == n ? s.create("text", t) : s.create(t, n);
											this.appendChild(o)
										}
									}, t.prototype.insertBefore = function(e, t) {
										if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some((function(t) {
												return e instanceof t
											}))) throw new s.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
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
												var n = s.create(this.statics.defaultChild);
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
											i = [],
											a = [];
										e.forEach((function(e) {
											e.target === n.domNode && "childList" === e.type && (i.push.apply(i, e.addedNodes), a.push.apply(a, e.removedNodes))
										})), a.forEach((function(e) {
											if (!(null != e.parentNode && "IFRAME" !== e.tagName && document.body.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
												var t = s.find(e);
												null != t && (null != t.domNode.parentNode && t.domNode.parentNode !== n.domNode || t.detach())
											}
										})), i.filter((function(e) {
											return e.parentNode == n.domNode
										})).sort((function(e, t) {
											return e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
										})).forEach((function(e) {
											var t = null;
											null != e.nextSibling && (t = s.find(e.nextSibling));
											var i = r(e);
											i.next == t && null != i.next || (null != i.parent && i.parent.removeChild(n), n.insertBefore(i, t || void 0))
										}))
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
										return (e = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, e;
										var e
									}, t.scope = a.Scope.INLINE_BLOT, t
								}(i.default);
							t.default = o
						}, function(e, t, n) {
							function r(e) {
								this.ops = e, this.index = 0, this.offset = 0
							}
							var i = n(11),
								a = n(3),
								o = {
									attributes: {
										compose: function(e, t, n) {
											"object" != typeof e && (e = {}), "object" != typeof t && (t = {});
											var r = a(!0, {}, t);
											for (var i in n || (r = Object.keys(r).reduce((function(e, t) {
													return null != r[t] && (e[t] = r[t]), e
												}), {})), e) void 0 !== e[i] && void 0 === t[i] && (r[i] = e[i]);
											return Object.keys(r).length > 0 ? r : void 0
										},
										diff: function(e, t) {
											"object" != typeof e && (e = {}), "object" != typeof t && (t = {});
											var n = Object.keys(e).concat(Object.keys(t)).reduce((function(n, r) {
												return i(e[r], t[r]) || (n[r] = void 0 === t[r] ? null : t[r]), n
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
										return new r(e)
									},
									length: function(e) {
										return "number" == typeof e.delete ? e.delete : "number" == typeof e.retain ? e.retain : "string" == typeof e.insert ? e.insert.length : 1
									}
								};
							r.prototype.hasNext = function() {
								return this.peekLength() < 1 / 0
							}, r.prototype.next = function(e) {
								e || (e = 1 / 0);
								var t = this.ops[this.index];
								if (t) {
									var n = this.offset,
										r = o.length(t);
									if (e >= r - n ? (e = r - n, this.index += 1, this.offset = 0) : this.offset += e, "number" == typeof t.delete) return {
										delete: e
									};
									var i = {};
									return t.attributes && (i.attributes = t.attributes), "number" == typeof t.retain ? i.retain = e : "string" == typeof t.insert ? i.insert = t.insert.substr(n, e) : i.insert = t.insert, i
								}
								return {
									retain: 1 / 0
								}
							}, r.prototype.peek = function() {
								return this.ops[this.index]
							}, r.prototype.peekLength = function() {
								return this.ops[this.index] ? o.length(this.ops[this.index]) - this.offset : 1 / 0
							}, r.prototype.peekType = function() {
								return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
							}, e.exports = o
						}, function(e, n) {
							var r = function() {
								"use strict";

								function e(e, t) {
									return null != t && e instanceof t
								}

								function n(r, u, c, l, f) {
									"object" == typeof u && (c = u.depth, l = u.prototype, f = u.includeNonEnumerable, u = u.circular);
									var d = [],
										h = [],
										p = void 0 !== t;
									return void 0 === u && (u = !0), void 0 === c && (c = 1 / 0),
										function r(c, _) {
											if (null === c) return null;
											if (0 === _) return c;
											var m, b;
											if ("object" != typeof c) return c;
											if (e(c, a)) m = new a;
											else if (e(c, o)) m = new o;
											else if (e(c, s)) m = new s((function(e, t) {
												c.then((function(t) {
													e(r(t, _ - 1))
												}), (function(e) {
													t(r(e, _ - 1))
												}))
											}));
											else if (n.__isArray(c)) m = [];
											else if (n.__isRegExp(c)) m = new RegExp(c.source, i(c)), c.lastIndex && (m.lastIndex = c.lastIndex);
											else if (n.__isDate(c)) m = new Date(c.getTime());
											else {
												if (p && t.isBuffer(c)) return m = new t(c.length), c.copy(m), m;
												e(c, Error) ? m = Object.create(c) : void 0 === l ? (b = Object.getPrototypeOf(c), m = Object.create(b)) : (m = Object.create(l), b = l)
											}
											if (u) {
												var g = d.indexOf(c);
												if (-1 != g) return h[g];
												d.push(c), h.push(m)
											}
											for (var v in e(c, a) && c.forEach((function(e, t) {
													var n = r(t, _ - 1),
														i = r(e, _ - 1);
													m.set(n, i)
												})), e(c, o) && c.forEach((function(e) {
													var t = r(e, _ - 1);
													m.add(t)
												})), c) {
												var y;
												b && (y = Object.getOwnPropertyDescriptor(b, v)), y && null == y.set || (m[v] = r(c[v], _ - 1))
											}
											if (Object.getOwnPropertySymbols) {
												var A = Object.getOwnPropertySymbols(c);
												for (v = 0; v < A.length; v++) {
													var S = A[v],
														w = Object.getOwnPropertyDescriptor(c, S);
													(!w || w.enumerable || f) && (m[S] = r(c[S], _ - 1), w.enumerable || Object.defineProperty(m, S, {
														enumerable: !1
													}))
												}
											}
											if (f) {
												var E = Object.getOwnPropertyNames(c);
												for (v = 0; v < E.length; v++) {
													var T = E[v];
													(w = Object.getOwnPropertyDescriptor(c, T)) && w.enumerable || (m[T] = r(c[T], _ - 1), Object.defineProperty(m, T, {
														enumerable: !1
													}))
												}
											}
											return m
										}(r, c)
								}

								function r(e) {
									return Object.prototype.toString.call(e)
								}

								function i(e) {
									var t = "";
									return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
								}
								var a, o, s;
								try {
									a = Map
								} catch (e) {
									a = function() {}
								}
								try {
									o = Set
								} catch (e) {
									o = function() {}
								}
								try {
									s = Promise
								} catch (e) {
									s = function() {}
								}
								return n.clonePrototype = function(e) {
									if (null === e) return null;
									var t = function() {};
									return t.prototype = e, new t
								}, n.__objToStr = r, n.__isDate = function(e) {
									return "object" == typeof e && "[object Date]" === r(e)
								}, n.__isArray = function(e) {
									return "object" == typeof e && "[object Array]" === r(e)
								}, n.__isRegExp = function(e) {
									return "object" == typeof e && "[object RegExp]" === r(e)
								}, n.__getRegExpFlags = i, n
							}();
							"object" == typeof e && e.exports && (e.exports = r)
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e) {
								return e instanceof f.default || e instanceof l.BlockEmbed
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var a = function(e, t) {
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
								o = function() {
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
								s = function e(t, n, r) {
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
								u = r(n(0)),
								c = r(n(8)),
								l = n(4),
								f = r(l),
								d = r(n(16)),
								h = r(n(13)),
								p = r(n(25)),
								_ = function(e) {
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
									}(t, e), o(t, [{
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
											var r = this.line(e),
												i = a(r, 2),
												o = i[0],
												u = i[1],
												c = this.line(e + n),
												f = a(c, 1)[0];
											if (s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deleteAt", this).call(this, e, n), null != f && o !== f && u > 0) {
												if (o instanceof l.BlockEmbed || f instanceof l.BlockEmbed) return void this.optimize();
												if (o instanceof h.default) {
													var p = o.newlineIndex(o.length(), !0);
													if (p > -1 && (o = o.split(p + 1)) === f) return void this.optimize()
												} else if (f instanceof h.default) {
													var _ = f.newlineIndex(0);
													_ > -1 && f.split(_ + 1)
												}
												var m = f.children.head instanceof d.default ? null : f.children.head;
												o.moveChildren(f, m), o.remove()
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
											(null == this.whitelist || this.whitelist[r]) && (s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "formatAt", this).call(this, e, n, r, i), this.optimize())
										}
									}, {
										key: "insertAt",
										value: function(e, n, r) {
											if (null == r || null == this.whitelist || this.whitelist[n]) {
												if (e >= this.length())
													if (null == r || null == u.default.query(n, u.default.Scope.BLOCK)) {
														var i = u.default.create(this.statics.defaultChild);
														this.appendChild(i), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), i.insertAt(0, n, r)
													} else {
														var a = u.default.create(n, r);
														this.appendChild(a)
													}
												else s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertAt", this).call(this, e, n, r);
												this.optimize()
											}
										}
									}, {
										key: "insertBefore",
										value: function(e, n) {
											if (e.statics.scope === u.default.Scope.INLINE_BLOT) {
												var r = u.default.create(this.statics.defaultChild);
												r.appendChild(e), e = r
											}
											s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n)
										}
									}, {
										key: "leaf",
										value: function(e) {
											return this.path(e).pop() || [null, -1]
										}
									}, {
										key: "line",
										value: function(e) {
											return e === this.length() ? this.line(e - 1) : this.descendant(i, e)
										}
									}, {
										key: "lines",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
												t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
											return function e(t, n, r) {
												var a = [],
													o = r;
												return t.children.forEachAt(n, r, (function(t, n, r) {
													i(t) ? a.push(t) : t instanceof u.default.Container && (a = a.concat(e(t, n, o))), o -= r
												})), a
											}(this, e, t)
										}
									}, {
										key: "optimize",
										value: function() {
											var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
												n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											!0 !== this.batch && (s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e, n), e.length > 0 && this.emitter.emit(c.default.events.SCROLL_OPTIMIZE, e, n))
										}
									}, {
										key: "path",
										value: function(e) {
											return s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "path", this).call(this, e).slice(1)
										}
									}, {
										key: "update",
										value: function(e) {
											if (!0 !== this.batch) {
												var n = c.default.sources.USER;
												"string" == typeof e && (n = e), Array.isArray(e) || (e = this.observer.takeRecords()), e.length > 0 && this.emitter.emit(c.default.events.SCROLL_BEFORE_UPDATE, n, e), s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).call(this, e.concat([])), e.length > 0 && this.emitter.emit(c.default.events.SCROLL_UPDATE, n, e)
											}
										}
									}]), t
								}(u.default.Scroll);
							_.blotName = "scroll", _.className = "ql-editor", _.tagName = "DIV", _.defaultChild = "block", _.allowedChildren = [f.default, l.BlockEmbed, p.default], t.default = _
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
								var n, r = e === $.keys.LEFT ? "prefix" : "suffix";
								return i(n = {
									key: e,
									shiftKey: t,
									altKey: null
								}, r, /^$/), i(n, "handler", (function(n) {
									var r = n.index;
									e === $.keys.RIGHT && (r += n.length + 1);
									var i = this.quill.getLeaf(r);
									return !(p(i, 1)[0] instanceof A.default.Embed && (e === $.keys.LEFT ? t ? this.quill.setSelection(n.index - 1, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index - 1, S.default.sources.USER) : t ? this.quill.setSelection(n.index, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, S.default.sources.USER), 1))
								})), n
							}

							function o(e, t) {
								if (!(0 === e.index || this.quill.getLength() <= 1)) {
									var n = this.quill.getLine(e.index),
										r = p(n, 1)[0],
										i = {};
									if (0 === t.offset) {
										var a = this.quill.getLine(e.index - 1),
											o = p(a, 1)[0];
										if (null != o && o.length() > 1) {
											var s = r.formats(),
												u = this.quill.getFormat(e.index - 1, 1);
											i = y.default.attributes.diff(s, u) || {}
										}
									}
									var c = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
									this.quill.deleteText(e.index - c, c, S.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(e.index - c, c, i, S.default.sources.USER), this.quill.focus()
								}
							}

							function s(e, t) {
								var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
								if (!(e.index >= this.quill.getLength() - n)) {
									var r = {},
										i = 0,
										a = this.quill.getLine(e.index),
										o = p(a, 1)[0];
									if (t.offset >= o.length() - 1) {
										var s = this.quill.getLine(e.index + 1),
											u = p(s, 1)[0];
										if (u) {
											var c = o.formats(),
												l = this.quill.getFormat(e.index, 1);
											r = y.default.attributes.diff(c, l) || {}, i = u.length()
										}
									}
									this.quill.deleteText(e.index, n, S.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(e.index + i - 1, n, r, S.default.sources.USER)
								}
							}

							function u(e) {
								var t = this.quill.getLines(e),
									n = {};
								if (t.length > 1) {
									var r = t[0].formats(),
										i = t[t.length - 1].formats();
									n = y.default.attributes.diff(i, r) || {}
								}
								this.quill.deleteText(e, S.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(e.index, 1, n, S.default.sources.USER), this.quill.setSelection(e.index, S.default.sources.SILENT), this.quill.focus()
							}

							function c(e, t) {
								var n = this;
								e.length > 0 && this.quill.scroll.deleteAt(e.index, e.length);
								var r = Object.keys(t.format).reduce((function(e, n) {
									return A.default.query(n, A.default.Scope.BLOCK) && !Array.isArray(t.format[n]) && (e[n] = t.format[n]), e
								}), {});
								this.quill.insertText(e.index, "\n", r, S.default.sources.USER), this.quill.setSelection(e.index + 1, S.default.sources.SILENT), this.quill.focus(), Object.keys(t.format).forEach((function(e) {
									null == r[e] && (Array.isArray(t.format[e]) || "link" !== e && n.quill.format(e, t.format[e], S.default.sources.USER))
								}))
							}

							function l(e) {
								return {
									key: $.keys.TAB,
									shiftKey: !e,
									format: {
										"code-block": !0
									},
									handler: function(t) {
										var n = A.default.query("code-block"),
											r = t.index,
											i = t.length,
											a = this.quill.scroll.descendant(n, r),
											o = p(a, 2),
											s = o[0],
											u = o[1];
										if (null != s) {
											var c = this.quill.getIndex(s),
												l = s.newlineIndex(u, !0) + 1,
												f = s.newlineIndex(c + u + i),
												d = s.domNode.textContent.slice(l, f).split("\n");
											u = 0, d.forEach((function(t, a) {
												e ? (s.insertAt(l + u, n.TAB), u += n.TAB.length, 0 === a ? r += n.TAB.length : i += n.TAB.length) : t.startsWith(n.TAB) && (s.deleteAt(l + u, n.TAB.length), u -= n.TAB.length, 0 === a ? r -= n.TAB.length : i -= n.TAB.length), u += t.length + 1
											})), this.quill.update(S.default.sources.USER), this.quill.setSelection(r, i, S.default.sources.SILENT)
										}
									}
								}
							}

							function f(e) {
								return {
									key: e[0].toUpperCase(),
									shortKey: !0,
									handler: function(t, n) {
										this.quill.format(e, !n.format[e], S.default.sources.USER)
									}
								}
							}

							function d(e) {
								if ("string" == typeof e || "number" == typeof e) return d({
									key: e
								});
								if ("object" === (void 0 === e ? "undefined" : h(e)) && (e = (0, m.default)(e, !1)), "string" == typeof e.key)
									if (null != $.keys[e.key.toUpperCase()]) e.key = $.keys[e.key.toUpperCase()];
									else {
										if (1 !== e.key.length) return null;
										e.key = e.key.toUpperCase().charCodeAt(0)
									} return e.shortKey && (e[C] = e.shortKey, delete e.shortKey), e
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.SHORTKEY = t.default = void 0;
							var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
									return typeof e
								} : function(e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
								},
								p = function(e, t) {
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
								_ = function() {
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
								m = r(n(21)),
								b = r(n(11)),
								g = r(n(3)),
								v = r(n(2)),
								y = r(n(20)),
								A = r(n(0)),
								S = r(n(5)),
								w = r(n(10)),
								E = r(n(9)),
								T = (0, w.default)("quill:keyboard"),
								C = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
								$ = function(e) {
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
										}, c), r.addBinding({
											key: t.keys.ENTER,
											metaKey: null,
											ctrlKey: null,
											altKey: null
										}, (function() {})), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
											key: t.keys.BACKSPACE
										}, {
											collapsed: !0
										}, o), r.addBinding({
											key: t.keys.DELETE
										}, {
											collapsed: !0
										}, s)) : (r.addBinding({
											key: t.keys.BACKSPACE
										}, {
											collapsed: !0,
											prefix: /^.?$/
										}, o), r.addBinding({
											key: t.keys.DELETE
										}, {
											collapsed: !0,
											suffix: /^.?$/
										}, s)), r.addBinding({
											key: t.keys.BACKSPACE
										}, {
											collapsed: !1
										}, u), r.addBinding({
											key: t.keys.DELETE
										}, {
											collapsed: !1
										}, u), r.addBinding({
											key: t.keys.BACKSPACE,
											altKey: null,
											ctrlKey: null,
											metaKey: null,
											shiftKey: null
										}, {
											collapsed: !0,
											offset: 0
										}, o), r.listen(), r
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
									}(t, e), _(t, null, [{
										key: "match",
										value: function(e, t) {
											return t = d(t), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((function(n) {
												return !!t[n] !== e[n] && null !== t[n]
											})) && t.key === (e.which || e.keyCode)
										}
									}]), _(t, [{
										key: "addBinding",
										value: function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
												n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
												r = d(e);
											if (null == r || null == r.key) return T.warn("Attempted to add invalid keyboard binding", r);
											"function" == typeof t && (t = {
												handler: t
											}), "function" == typeof n && (n = {
												handler: n
											}), r = (0, g.default)(r, t, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
										}
									}, {
										key: "listen",
										value: function() {
											var e = this;
											this.quill.root.addEventListener("keydown", (function(n) {
												if (!n.defaultPrevented) {
													var r = n.which || n.keyCode,
														i = (e.bindings[r] || []).filter((function(e) {
															return t.match(n, e)
														}));
													if (0 !== i.length) {
														var a = e.quill.getSelection();
														if (null != a && e.quill.hasFocus()) {
															var o = e.quill.getLine(a.index),
																s = p(o, 2),
																u = s[0],
																c = s[1],
																l = e.quill.getLeaf(a.index),
																f = p(l, 2),
																d = f[0],
																_ = f[1],
																m = 0 === a.length ? [d, _] : e.quill.getLeaf(a.index + a.length),
																g = p(m, 2),
																v = g[0],
																y = g[1],
																S = d instanceof A.default.Text ? d.value().slice(0, _) : "",
																w = v instanceof A.default.Text ? v.value().slice(y) : "",
																E = {
																	collapsed: 0 === a.length,
																	empty: 0 === a.length && u.length() <= 1,
																	format: e.quill.getFormat(a),
																	offset: c,
																	prefix: S,
																	suffix: w
																};
															i.some((function(t) {
																if (null != t.collapsed && t.collapsed !== E.collapsed) return !1;
																if (null != t.empty && t.empty !== E.empty) return !1;
																if (null != t.offset && t.offset !== E.offset) return !1;
																if (Array.isArray(t.format)) {
																	if (t.format.every((function(e) {
																			return null == E.format[e]
																		}))) return !1
																} else if ("object" === h(t.format) && !Object.keys(t.format).every((function(e) {
																		return !0 === t.format[e] ? null != E.format[e] : !1 === t.format[e] ? null == E.format[e] : (0, b.default)(t.format[e], E.format[e])
																	}))) return !1;
																return !(null != t.prefix && !t.prefix.test(E.prefix) || null != t.suffix && !t.suffix.test(E.suffix) || !0 === t.handler.call(e, a, E))
															})) && n.preventDefault()
														}
													}
												}
											}))
										}
									}]), t
								}(E.default);
							$.keys = {
								BACKSPACE: 8,
								TAB: 9,
								ENTER: 13,
								ESCAPE: 27,
								LEFT: 37,
								UP: 38,
								RIGHT: 39,
								DOWN: 40,
								DELETE: 46
							}, $.DEFAULTS = {
								bindings: {
									bold: f("bold"),
									italic: f("italic"),
									underline: f("underline"),
									indent: {
										key: $.keys.TAB,
										format: ["blockquote", "indent", "list"],
										handler: function(e, t) {
											if (t.collapsed && 0 !== t.offset) return !0;
											this.quill.format("indent", "+1", S.default.sources.USER)
										}
									},
									outdent: {
										key: $.keys.TAB,
										shiftKey: !0,
										format: ["blockquote", "indent", "list"],
										handler: function(e, t) {
											if (t.collapsed && 0 !== t.offset) return !0;
											this.quill.format("indent", "-1", S.default.sources.USER)
										}
									},
									"outdent backspace": {
										key: $.keys.BACKSPACE,
										collapsed: !0,
										shiftKey: null,
										metaKey: null,
										ctrlKey: null,
										altKey: null,
										format: ["indent", "list"],
										offset: 0,
										handler: function(e, t) {
											null != t.format.indent ? this.quill.format("indent", "-1", S.default.sources.USER) : null != t.format.list && this.quill.format("list", !1, S.default.sources.USER)
										}
									},
									"indent code-block": l(!0),
									"outdent code-block": l(!1),
									"remove tab": {
										key: $.keys.TAB,
										shiftKey: !0,
										collapsed: !0,
										prefix: /\t$/,
										handler: function(e) {
											this.quill.deleteText(e.index - 1, 1, S.default.sources.USER)
										}
									},
									tab: {
										key: $.keys.TAB,
										handler: function(e) {
											this.quill.history.cutoff();
											var t = (new v.default).retain(e.index).delete(e.length).insert("\t");
											this.quill.updateContents(t, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index + 1, S.default.sources.SILENT)
										}
									},
									"list empty enter": {
										key: $.keys.ENTER,
										collapsed: !0,
										format: ["list"],
										empty: !0,
										handler: function(e, t) {
											this.quill.format("list", !1, S.default.sources.USER), t.format.indent && this.quill.format("indent", !1, S.default.sources.USER)
										}
									},
									"checklist enter": {
										key: $.keys.ENTER,
										collapsed: !0,
										format: {
											list: "checked"
										},
										handler: function(e) {
											var t = this.quill.getLine(e.index),
												n = p(t, 2),
												r = n[0],
												i = n[1],
												a = (0, g.default)({}, r.formats(), {
													list: "checked"
												}),
												o = (new v.default).retain(e.index).insert("\n", a).retain(r.length() - i - 1).retain(1, {
													list: "unchecked"
												});
											this.quill.updateContents(o, S.default.sources.USER), this.quill.setSelection(e.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
										}
									},
									"header enter": {
										key: $.keys.ENTER,
										collapsed: !0,
										format: ["header"],
										suffix: /^$/,
										handler: function(e, t) {
											var n = this.quill.getLine(e.index),
												r = p(n, 2),
												i = r[0],
												a = r[1],
												o = (new v.default).retain(e.index).insert("\n", t.format).retain(i.length() - a - 1).retain(1, {
													header: null
												});
											this.quill.updateContents(o, S.default.sources.USER), this.quill.setSelection(e.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView()
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
												i = p(r, 2),
												a = i[0],
												o = i[1];
											if (o > n) return !0;
											var s = void 0;
											switch (t.prefix.trim()) {
												case "[]":
												case "[ ]":
													s = "unchecked";
													break;
												case "[x]":
													s = "checked";
													break;
												case "-":
												case "*":
													s = "bullet";
													break;
												default:
													s = "ordered"
											}
											this.quill.insertText(e.index, " ", S.default.sources.USER), this.quill.history.cutoff();
											var u = (new v.default).retain(e.index - o).delete(n + 1).retain(a.length() - 2 - o).retain(1, {
												list: s
											});
											this.quill.updateContents(u, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(e.index - n, S.default.sources.SILENT)
										}
									},
									"code exit": {
										key: $.keys.ENTER,
										collapsed: !0,
										format: ["code-block"],
										prefix: /\n\n$/,
										suffix: /^\s+$/,
										handler: function(e) {
											var t = this.quill.getLine(e.index),
												n = p(t, 2),
												r = n[0],
												i = n[1],
												a = (new v.default).retain(e.index + r.length() - i - 2).retain(1, {
													"code-block": null
												}).delete(1);
											this.quill.updateContents(a, S.default.sources.USER)
										}
									},
									"embed left": a($.keys.LEFT, !1),
									"embed left shift": a($.keys.LEFT, !0),
									"embed right": a($.keys.RIGHT, !1),
									"embed right shift": a($.keys.RIGHT, !0)
								}
							}, t.default = $, t.SHORTKEY = C
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = function(e, t) {
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
								o = function() {
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
								s = r(n(0)),
								u = r(n(7)),
								c = function(e) {
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
									}(t, e), o(t, null, [{
										key: "value",
										value: function() {}
									}]), o(t, [{
										key: "detach",
										value: function() {
											null != this.parent && this.parent.removeChild(this)
										}
									}, {
										key: "format",
										value: function(e, n) {
											if (0 !== this._length) return a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
											for (var r = this, i = 0; null != r && r.statics.scope !== s.default.Scope.BLOCK_BLOT;) i += r.offset(r.parent), r = r.parent;
											null != r && (this._length = t.CONTENTS.length, r.optimize(), r.formatAt(i, t.CONTENTS.length, e, n), this._length = 0)
										}
									}, {
										key: "index",
										value: function(e, n) {
											return e === this.textNode ? 0 : a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "index", this).call(this, e, n)
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
											a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this), this.parent = null
										}
									}, {
										key: "restore",
										value: function() {
											if (!this.selection.composing && null != this.parent) {
												var e = this.textNode,
													n = this.selection.getNativeRange(),
													r = void 0,
													a = void 0,
													o = void 0;
												if (null != n && n.start.node === e && n.end.node === e) {
													var c = [e, n.start.offset, n.end.offset];
													r = c[0], a = c[1], o = c[2]
												}
												for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
												if (this.textNode.data !== t.CONTENTS) {
													var l = this.textNode.data.split(t.CONTENTS).join("");
													this.next instanceof u.default ? (r = this.next.domNode, this.next.insertAt(0, l), this.textNode.data = t.CONTENTS) : (this.textNode.data = l, this.parent.insertBefore(s.default.create(this.textNode), this), this.textNode = document.createTextNode(t.CONTENTS), this.domNode.appendChild(this.textNode))
												}
												if (this.remove(), null != a) {
													var f = [a, o].map((function(e) {
															return Math.max(0, Math.min(r.data.length, e - 1))
														})),
														d = i(f, 2);
													return a = d[0], o = d[1], {
														startNode: r,
														startOffset: a,
														endNode: r,
														endOffset: o
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
								}(s.default.Embed);
							c.blotName = "cursor", c.className = "ql-cursor", c.tagName = "span", c.CONTENTS = "\ufeff", t.default = c
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
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var o = r(n(0)),
								s = n(4),
								u = r(s),
								c = function(e) {
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
									}(t, e), t
								}(o.default.Container);
							c.allowedChildren = [u.default, s.BlockEmbed, c], t.default = c
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
							}), t.ColorStyle = t.ColorClass = t.ColorAttributor = void 0;
							var a = function() {
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
								o = function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(0)),
								s = function(e) {
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
									}(t, e), a(t, [{
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
								}(o.default.Attributor.Style),
								u = new o.default.Attributor.Class("color", "ql-color", {
									scope: o.default.Scope.INLINE
								}),
								c = new s("color", "color", {
									scope: o.default.Scope.INLINE
								});
							t.ColorAttributor = s, t.ColorClass = u, t.ColorStyle = c
						}, function(e, t, n) {
							"use strict";

							function r(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}

							function i(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}

							function a(e, t) {
								var n = document.createElement("a");
								n.href = e;
								var r = n.href.slice(0, n.href.indexOf(":"));
								return t.indexOf(r) > -1
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.sanitize = t.default = void 0;
							var o = function() {
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
								s = function e(t, n, r) {
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
								u = function(e) {
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
									}(t, e), o(t, [{
										key: "format",
										value: function(e, n) {
											if (e !== this.statics.blotName || !n) return s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n);
											n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
										}
									}], [{
										key: "create",
										value: function(e) {
											var n = s(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
											return e = this.sanitize(e), n.setAttribute("href", e), n.setAttribute("target", "_blank"), n
										}
									}, {
										key: "formats",
										value: function(e) {
											return e.getAttribute("href")
										}
									}, {
										key: "sanitize",
										value: function(e) {
											return a(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL
										}
									}]), t
								}(function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(6)).default);
							u.blotName = "link", u.tagName = "A", u.SANITIZED_URL = "about:blank", u.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], t.default = u, t.sanitize = a
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t) {
								e.setAttribute(t, !("true" === e.getAttribute(t)))
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
									return typeof e
								} : function(e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
								},
								o = function() {
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
								s = r(n(23)),
								u = r(n(107)),
								c = 0,
								l = function() {
									function e(t) {
										var n = this;
										(function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										})(this, e), this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", (function() {
											n.togglePicker()
										})), this.label.addEventListener("keydown", (function(e) {
											switch (e.keyCode) {
												case s.default.keys.ENTER:
													n.togglePicker();
													break;
												case s.default.keys.ESCAPE:
													n.escape(), e.preventDefault()
											}
										})), this.select.addEventListener("change", this.update.bind(this))
									}
									return o(e, [{
										key: "togglePicker",
										value: function() {
											this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options, "aria-hidden")
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
													case s.default.keys.ENTER:
														t.selectItem(n, !0), e.preventDefault();
														break;
													case s.default.keys.ESCAPE:
														t.escape(), e.preventDefault()
												}
											})), n
										}
									}, {
										key: "buildLabel",
										value: function() {
											var e = document.createElement("span");
											return e.classList.add("ql-picker-label"), e.innerHTML = u.default, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e
										}
									}, {
										key: "buildOptions",
										value: function() {
											var e = this,
												t = document.createElement("span");
											t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = "ql-picker-options-" + c, c += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, [].slice.call(this.select.options).forEach((function(n) {
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
												else if ("object" === ("undefined" == typeof Event ? "undefined" : a(Event))) {
													var r = document.createEvent("Event");
													r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
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

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = r(n(0)),
								a = r(n(5)),
								o = n(4),
								s = r(o),
								u = r(n(16)),
								c = r(n(25)),
								l = r(n(24)),
								f = r(n(35)),
								d = r(n(6)),
								h = r(n(22)),
								p = r(n(7)),
								_ = r(n(55)),
								m = r(n(42)),
								b = r(n(23));
							a.default.register({
								"blots/block": s.default,
								"blots/block/embed": o.BlockEmbed,
								"blots/break": u.default,
								"blots/container": c.default,
								"blots/cursor": l.default,
								"blots/embed": f.default,
								"blots/inline": d.default,
								"blots/scroll": h.default,
								"blots/text": p.default,
								"modules/clipboard": _.default,
								"modules/history": m.default,
								"modules/keyboard": b.default
							}), i.default.register(s.default, u.default, l.default, d.default, h.default, p.default), t.default = a.default
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

							function r(e, t) {
								return (e.getAttribute("class") || "").split(/\s+/).filter((function(e) {
									return 0 === e.indexOf(t + "-")
								}))
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
								function t() {
									return null !== e && e.apply(this, arguments) || this
								}
								return i(t, e), t.keys = function(e) {
									return (e.getAttribute("class") || "").split(/\s+/).map((function(e) {
										return e.split("-").slice(0, -1).join("-")
									}))
								}, t.prototype.add = function(e, t) {
									return !!this.canAdd(e, t) && (this.remove(e), e.classList.add(this.keyName + "-" + t), !0)
								}, t.prototype.remove = function(e) {
									r(e, this.keyName).forEach((function(t) {
										e.classList.remove(t)
									})), 0 === e.classList.length && e.removeAttribute("class")
								}, t.prototype.value = function(e) {
									var t = (r(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
									return this.canAdd(e, t) ? t : ""
								}, t
							}(n(12).default);
							t.default = a
						}, function(e, t, n) {
							"use strict";

							function r(e) {
								var t = e.split("-"),
									n = t.slice(1).map((function(e) {
										return e[0].toUpperCase() + e.slice(1)
									})).join("");
								return t[0] + n
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
								function t() {
									return null !== e && e.apply(this, arguments) || this
								}
								return i(t, e), t.keys = function(e) {
									return (e.getAttribute("style") || "").split(";").map((function(e) {
										return e.split(":")[0].trim()
									}))
								}, t.prototype.add = function(e, t) {
									return !!this.canAdd(e, t) && (e.style[r(this.keyName)] = t, !0)
								}, t.prototype.remove = function(e) {
									e.style[r(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style")
								}, t.prototype.value = function(e) {
									var t = e.style[r(this.keyName)];
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
								}(),
								i = function() {
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

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var i = function() {
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
								a = r(n(0)),
								o = r(n(7)),
								s = "\ufeff",
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
									}(t, e), i(t, [{
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
												if (this.prev instanceof o.default) {
													var i = this.prev.length();
													this.prev.insertAt(i, r), t = {
														startNode: this.prev.domNode,
														startOffset: i + r.length
													}
												} else n = document.createTextNode(r), this.parent.insertBefore(a.default.create(n), this), t = {
													startNode: n,
													startOffset: r.length
												};
											else e === this.rightGuard && (this.next instanceof o.default ? (this.next.insertAt(0, r), t = {
												startNode: this.next.domNode,
												startOffset: r.length
											}) : (n = document.createTextNode(r), this.parent.insertBefore(a.default.create(n), this.next), t = {
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
								}(a.default.Embed);
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
								}(n(0)),
								i = {
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
								i = n(26),
								a = new r.default.Attributor.Class("background", "ql-bg", {
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
								}(n(0)),
								i = {
									scope: r.default.Scope.BLOCK,
									whitelist: ["rtl"]
								},
								a = new r.default.Attributor.Attribute("direction", "dir", i),
								o = new r.default.Attributor.Class("direction", "ql-direction", i),
								s = new r.default.Attributor.Style("direction", "direction", i);
							t.DirectionAttribute = a, t.DirectionClass = o, t.DirectionStyle = s
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
							}), t.FontClass = t.FontStyle = void 0;
							var a = function() {
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
								o = function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(0)),
								s = {
									scope: o.default.Scope.INLINE,
									whitelist: ["serif", "monospace"]
								},
								u = new o.default.Attributor.Class("font", "ql-font", s),
								c = new(function(e) {
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
									}(t, e), a(t, [{
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
								}(o.default.Attributor.Style))("font", "font-family", s);
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
								}(n(0)),
								i = new r.default.Attributor.Class("size", "ql-size", {
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

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e) {
								var t = e.reduce((function(e, t) {
										return e + (t.delete || 0)
									}), 0),
									n = e.length() - t;
								return function(e) {
									var t = e.ops[e.ops.length - 1];
									return null != t && (null != t.insert ? "string" == typeof t.insert && t.insert.endsWith("\n") : null != t.attributes && Object.keys(t.attributes).some((function(e) {
										return null != o.default.query(e, o.default.Scope.BLOCK)
									})))
								}(e) && (n -= 1), n
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.getLastChangeIndex = t.default = void 0;
							var a = function() {
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
								o = r(n(0)),
								s = r(n(5)),
								u = function(e) {
									function t(e, n) {
										! function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										}(this, t);
										var r = function(e, t) {
											if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
											return !t || "object" != typeof t && "function" != typeof t ? e : t
										}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(s.default.events.EDITOR_CHANGE, (function(e, t, n, i) {
											e !== s.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && i !== s.default.sources.USER ? r.transform(t) : r.record(t, n))
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
									}(t, e), a(t, [{
										key: "change",
										value: function(e, t) {
											if (0 !== this.stack[e].length) {
												var n = this.stack[e].pop();
												this.stack[t].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[e], s.default.sources.USER), this.ignoreChange = !1;
												var r = i(n[e]);
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
								}(r(n(9)).default);
							u.DEFAULTS = {
								delay: 1e3,
								maxStack: 100,
								userOnly: !1
							}, t.default = u, t.getLastChangeIndex = i
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

							function s(e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								t.forEach((function(t) {
									var r = document.createElement("option");
									t === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", t), e.appendChild(r)
								}))
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.default = t.BaseTooltip = void 0;
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
								c = r(n(3)),
								l = r(n(2)),
								f = r(n(8)),
								d = r(n(23)),
								h = r(n(34)),
								p = r(n(59)),
								_ = r(n(60)),
								m = r(n(28)),
								b = r(n(61)),
								g = [!1, "center", "right", "justify"],
								v = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
								y = [!1, "serif", "monospace"],
								A = ["1", "2", "3", !1],
								S = ["small", !1, "large", "huge"],
								w = function(e) {
									function t(e, n) {
										i(this, t);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return e.emitter.listenDOM("click", document.body, (function t(n) {
											if (!document.body.contains(e.root)) return document.body.removeEventListener("click", t);
											null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach((function(e) {
												e.container.contains(n.target) || e.close()
											}))
										})), r
									}
									return o(t, e), u(t, [{
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
												if (e.classList.contains("ql-align")) return null == e.querySelector("option") && s(e, g), new _.default(e, t.align);
												if (e.classList.contains("ql-background") || e.classList.contains("ql-color")) {
													var n = e.classList.contains("ql-background") ? "background" : "color";
													return null == e.querySelector("option") && s(e, v, "background" === n ? "#ffffff" : "#000000"), new p.default(e, t[n])
												}
												return null == e.querySelector("option") && (e.classList.contains("ql-font") ? s(e, y) : e.classList.contains("ql-header") ? s(e, A) : e.classList.contains("ql-size") && s(e, S)), new m.default(e)
											})), this.quill.on(f.default.events.EDITOR_CHANGE, (function() {
												n.pickers.forEach((function(e) {
													e.update()
												}))
											}))
										}
									}]), t
								}(h.default);
							w.DEFAULTS = (0, c.default)(!0, {}, h.default.DEFAULTS, {
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
															e.quill.updateContents((new l.default).retain(r.index).delete(r.length).insert({
																image: n.target.result
															}), f.default.sources.USER), e.quill.setSelection(r.index + 1, f.default.sources.SILENT), t.value = ""
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
							var E = function(e) {
								function t(e, n) {
									i(this, t);
									var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
								}
								return o(t, e), u(t, [{
									key: "listen",
									value: function() {
										var e = this;
										this.textbox.addEventListener("keydown", (function(t) {
											d.default.match(t, "enter") ? (e.save(), t.preventDefault()) : d.default.match(t, "escape") && (e.cancel(), t.preventDefault())
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
												this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, f.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, f.default.sources.USER)), this.quill.root.scrollTop = t;
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
													this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), e, f.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", f.default.sources.USER), this.quill.setSelection(r + 2, f.default.sources.USER)
												}
										}
										this.textbox.value = "", this.hide()
									}
								}]), t
							}(b.default);
							t.BaseTooltip = E, t.default = w
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
								a = n(1),
								o = function(e) {
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
							function n(e, t, n) {
								if (e == t) return e ? [
									[h, e]
								] : [];
								(n < 0 || e.length < n) && (n = null);
								var i = o(e, t),
									a = e.substring(0, i);
								i = s(e = e.substring(i), t = t.substring(i));
								var u = e.substring(e.length - i),
									l = r(e = e.substring(0, e.length - i), t = t.substring(0, t.length - i));
								return a && l.unshift([h, a]), u && l.push([h, u]),
									function e(t) {
										t.push([h, ""]);
										for (var n, r = 0, i = 0, a = 0, u = "", c = ""; r < t.length;) switch (t[r][0]) {
											case d:
												a++, c += t[r][1], r++;
												break;
											case f:
												i++, u += t[r][1], r++;
												break;
											case h:
												i + a > 1 ? (0 !== i && 0 !== a && (0 !== (n = o(c, u)) && (r - i - a > 0 && t[r - i - a - 1][0] == h ? t[r - i - a - 1][1] += c.substring(0, n) : (t.splice(0, 0, [h, c.substring(0, n)]), r++), c = c.substring(n), u = u.substring(n)), 0 !== (n = s(c, u)) && (t[r][1] = c.substring(c.length - n) + t[r][1], c = c.substring(0, c.length - n), u = u.substring(0, u.length - n))), 0 === i ? t.splice(r - a, i + a, [d, c]) : 0 === a ? t.splice(r - i, i + a, [f, u]) : t.splice(r - i - a, i + a, [f, u], [d, c]), r = r - i - a + (i ? 1 : 0) + (a ? 1 : 0) + 1) : 0 !== r && t[r - 1][0] == h ? (t[r - 1][1] += t[r][1], t.splice(r, 1)) : r++, a = 0, i = 0, u = "", c = ""
										}
										"" === t[t.length - 1][1] && t.pop();
										var l = !1;
										for (r = 1; r < t.length - 1;) t[r - 1][0] == h && t[r + 1][0] == h && (t[r][1].substring(t[r][1].length - t[r - 1][1].length) == t[r - 1][1] ? (t[r][1] = t[r - 1][1] + t[r][1].substring(0, t[r][1].length - t[r - 1][1].length), t[r + 1][1] = t[r - 1][1] + t[r + 1][1], t.splice(r - 1, 1), l = !0) : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] && (t[r - 1][1] += t[r + 1][1], t[r][1] = t[r][1].substring(t[r + 1][1].length) + t[r + 1][1], t.splice(r + 1, 1), l = !0)), r++;
										l && e(t)
									}(l), null != n && (l = c(l, n)),
									function(e) {
										for (var t = !1, n = function(e) {
												return e.charCodeAt(0) >= 56320 && e.charCodeAt(0) <= 57343
											}, r = 2; r < e.length; r += 1) e[r - 2][0] === h && function(e) {
											return e.charCodeAt(e.length - 1) >= 55296 && e.charCodeAt(e.length - 1) <= 56319
										}(e[r - 2][1]) && e[r - 1][0] === f && n(e[r - 1][1]) && e[r][0] === d && n(e[r][1]) && (t = !0, e[r - 1][1] = e[r - 2][1].slice(-1) + e[r - 1][1], e[r][1] = e[r - 2][1].slice(-1) + e[r][1], e[r - 2][1] = e[r - 2][1].slice(0, -1));
										if (!t) return e;
										var i = [];
										for (r = 0; r < e.length; r += 1) e[r][1].length > 0 && i.push(e[r]);
										return i
									}(l)
							}

							function r(e, t) {
								var r;
								if (!e) return [
									[d, t]
								];
								if (!t) return [
									[f, e]
								];
								var a = e.length > t.length ? e : t,
									o = e.length > t.length ? t : e,
									s = a.indexOf(o);
								if (-1 != s) return r = [
									[d, a.substring(0, s)],
									[h, o],
									[d, a.substring(s + o.length)]
								], e.length > t.length && (r[0][0] = r[2][0] = f), r;
								if (1 == o.length) return [
									[f, e],
									[d, t]
								];
								var c = u(e, t);
								if (c) {
									var l = c[0],
										p = c[1],
										_ = c[2],
										m = c[3],
										b = c[4],
										g = n(l, _),
										v = n(p, m);
									return g.concat([
										[h, b]
									], v)
								}
								return i(e, t)
							}

							function i(e, t) {
								for (var n = e.length, r = t.length, i = Math.ceil((n + r) / 2), o = i, s = 2 * i, u = new Array(s), c = new Array(s), l = 0; l < s; l++) u[l] = -1, c[l] = -1;
								u[o + 1] = 0, c[o + 1] = 0;
								for (var h = n - r, p = h % 2 != 0, _ = 0, m = 0, b = 0, g = 0, v = 0; v < i; v++) {
									for (var y = -v + _; y <= v - m; y += 2) {
										for (var A = o + y, S = ($ = y == -v || y != v && u[A - 1] < u[A + 1] ? u[A + 1] : u[A - 1] + 1) - y; $ < n && S < r && e.charAt($) == t.charAt(S);) $++, S++;
										if (u[A] = $, $ > n) m += 2;
										else if (S > r) _ += 2;
										else if (p) {
											var w = o + h - y;
											if (w >= 0 && w < s && -1 != c[w]) {
												var E = n - c[w];
												if ($ >= E) return a(e, t, $, S)
											}
										}
									}
									for (var T = -v + b; T <= v - g; T += 2) {
										w = o + T;
										for (var C = (E = T == -v || T != v && c[w - 1] < c[w + 1] ? c[w + 1] : c[w - 1] + 1) - T; E < n && C < r && e.charAt(n - E - 1) == t.charAt(r - C - 1);) E++, C++;
										if (c[w] = E, E > n) g += 2;
										else if (C > r) b += 2;
										else if (!p && (A = o + h - T) >= 0 && A < s && -1 != u[A]) {
											var $ = u[A];
											if (S = o + $ - A, $ >= (E = n - E)) return a(e, t, $, S)
										}
									}
								}
								return [
									[f, e],
									[d, t]
								]
							}

							function a(e, t, r, i) {
								var a = e.substring(0, r),
									o = t.substring(0, i),
									s = e.substring(r),
									u = t.substring(i),
									c = n(a, o),
									l = n(s, u);
								return c.concat(l)
							}

							function o(e, t) {
								if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
								for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? a = n = i : r = i, i = Math.floor((r - n) / 2 + n);
								return i
							}

							function s(e, t) {
								if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) return 0;
								for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? a = n = i : r = i, i = Math.floor((r - n) / 2 + n);
								return i
							}

							function u(e, t) {
								function n(e, t, n) {
									for (var r, i, a, u, c = e.substring(n, n + Math.floor(e.length / 4)), l = -1, f = ""; - 1 != (l = t.indexOf(c, l + 1));) {
										var d = o(e.substring(n), t.substring(l)),
											h = s(e.substring(0, n), t.substring(0, l));
										f.length < h + d && (f = t.substring(l - h, l) + t.substring(l, l + d), r = e.substring(0, n - h), i = e.substring(n + d), a = t.substring(0, l - h), u = t.substring(l + d))
									}
									return 2 * f.length >= e.length ? [r, i, a, u, f] : null
								}
								var r = e.length > t.length ? e : t,
									i = e.length > t.length ? t : e;
								if (r.length < 4 || 2 * i.length < r.length) return null;
								var a, u, c, l, f, d = n(r, i, Math.ceil(r.length / 4)),
									h = n(r, i, Math.ceil(r.length / 2));
								return d || h ? (a = h ? d && d[4].length > h[4].length ? d : h : d, e.length > t.length ? (u = a[0], c = a[1], l = a[2], f = a[3]) : (l = a[0], f = a[1], u = a[2], c = a[3]), [u, c, l, f, a[4]]) : null
							}

							function c(e, t) {
								var n = function(e, t) {
										if (0 === t) return [h, e];
										for (var n = 0, r = 0; r < e.length; r++) {
											var i = e[r];
											if (i[0] === f || i[0] === h) {
												var a = n + i[1].length;
												if (t === a) return [r + 1, e];
												if (t < a) {
													e = e.slice();
													var o = t - n,
														s = [i[0], i[1].slice(0, o)],
														u = [i[0], i[1].slice(o)];
													return e.splice(r, 1, s, u), [r + 1, e]
												}
												n = a
											}
										}
										throw new Error("cursor_pos is out of bounds!")
									}(e, t),
									r = n[1],
									i = n[0],
									a = r[i],
									o = r[i + 1];
								if (null == a) return e;
								if (a[0] !== h) return e;
								if (null != o && a[1] + o[1] === o[1] + a[1]) return r.splice(i, 2, o, a), l(r, i, 2);
								if (null != o && 0 === o[1].indexOf(a[1])) {
									r.splice(i, 2, [o[0], a[1]], [0, a[1]]);
									var s = o[1].slice(a[1].length);
									return s.length > 0 && r.splice(i + 2, 0, [o[0], s]), l(r, i, 3)
								}
								return e
							}

							function l(e, t, n) {
								for (var r = t + n - 1; r >= 0 && r >= t - 1; r--)
									if (r + 1 < e.length) {
										var i = e[r],
											a = e[r + 1];
										i[0] === a[1] && e.splice(r, 2, [i[0], i[1] + a[1]])
									} return e
							}
							var f = -1,
								d = 1,
								h = 0,
								p = n;
							p.INSERT = d, p.DELETE = f, p.EQUAL = h, e.exports = p
						}, function(e, t) {
							function n(e) {
								var t = [];
								for (var n in e) t.push(n);
								return t
							}(e.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
						}, function(e, t) {
							function n(e) {
								return "[object Arguments]" == Object.prototype.toString.call(e)
							}

							function r(e) {
								return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
							}
							var i = "[object Arguments]" == function() {
								return Object.prototype.toString.call(arguments)
							}();
							(t = e.exports = i ? n : r).supported = n, t.unsupported = r
						}, function(e, t) {
							"use strict";

							function n() {}

							function r(e, t, n) {
								this.fn = e, this.context = t, this.once = n || !1
							}

							function i() {
								this._events = new n, this._eventsCount = 0
							}
							var a = Object.prototype.hasOwnProperty,
								o = "~";
							Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (o = !1)), i.prototype.eventNames = function() {
								var e, t, n = [];
								if (0 === this._eventsCount) return n;
								for (t in e = this._events) a.call(e, t) && n.push(o ? t.slice(1) : t);
								return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
							}, i.prototype.listeners = function(e, t) {
								var n = o ? o + e : e,
									r = this._events[n];
								if (t) return !!r;
								if (!r) return [];
								if (r.fn) return [r.fn];
								for (var i = 0, a = r.length, s = new Array(a); i < a; i++) s[i] = r[i].fn;
								return s
							}, i.prototype.emit = function(e, t, n, r, i, a) {
								var s = o ? o + e : e;
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
											return l.fn.call(l.context, t, n, r), !0;
										case 5:
											return l.fn.call(l.context, t, n, r, i), !0;
										case 6:
											return l.fn.call(l.context, t, n, r, i, a), !0
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
											l[c].fn.call(l[c].context, t, n, r);
											break;
										default:
											if (!u)
												for (d = 1, u = new Array(f - 1); d < f; d++) u[d - 1] = arguments[d];
											l[c].fn.apply(l[c].context, u)
									}
								}
								return !0
							}, i.prototype.on = function(e, t, n) {
								var i = new r(t, n || this),
									a = o ? o + e : e;
								return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : (this._events[a] = i, this._eventsCount++), this
							}, i.prototype.once = function(e, t, n) {
								var i = new r(t, n || this, !0),
									a = o ? o + e : e;
								return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : (this._events[a] = i, this._eventsCount++), this
							}, i.prototype.removeListener = function(e, t, r, i) {
								var a = o ? o + e : e;
								if (!this._events[a]) return this;
								if (!t) return 0 == --this._eventsCount ? this._events = new n : delete this._events[a], this;
								var s = this._events[a];
								if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[a]);
								else {
									for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || i && !s[u].once || r && s[u].context !== r) && c.push(s[u]);
									c.length ? this._events[a] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new n : delete this._events[a]
								}
								return this
							}, i.prototype.removeAllListeners = function(e) {
								var t;
								return e ? (t = o ? o + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new n : delete this._events[t])) : (this._events = new n, this._eventsCount = 0), this
							}, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
								return this
							}, i.prefixed = o, i.EventEmitter = i, void 0 !== e && (e.exports = i)
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

							function a(e, t, n) {
								return "object" === (void 0 === t ? "undefined" : _(t)) ? Object.keys(t).reduce((function(e, n) {
									return a(e, n, t[n])
								}), e) : e.reduce((function(e, r) {
									return r.attributes && r.attributes[t] ? e.push(r) : e.insert(r.insert, (0, g.default)({}, i({}, t, n), r.attributes))
								}), new v.default)
							}

							function o(e) {
								return e.nodeType !== Node.ELEMENT_NODE ? {} : e["__ql-computed-style"] || (e["__ql-computed-style"] = window.getComputedStyle(e))
							}

							function s(e, t) {
								for (var n = "", r = e.ops.length - 1; r >= 0 && n.length < t.length; --r) {
									var i = e.ops[r];
									if ("string" != typeof i.insert) break;
									n = i.insert + n
								}
								return n.slice(-1 * t.length) === t
							}

							function u(e) {
								return 0 !== e.childNodes.length && ["block", "list-item"].indexOf(o(e).display) > -1
							}

							function c(e, t, n) {
								return a(n, e, !0)
							}

							function l(e, t) {
								var n = y.default.Attributor.Attribute.keys(e),
									r = y.default.Attributor.Class.keys(e),
									i = y.default.Attributor.Style.keys(e),
									o = {};
								return n.concat(r).concat(i).forEach((function(t) {
									var n = y.default.query(t, y.default.Scope.ATTRIBUTE);
									null != n && (o[n.attrName] = n.value(e), o[n.attrName]) || (null == (n = L[t]) || n.attrName !== t && n.keyName !== t || (o[n.attrName] = n.value(e) || void 0), null == (n = D[t]) || n.attrName !== t && n.keyName !== t || (n = D[t], o[n.attrName] = n.value(e) || void 0))
								})), Object.keys(o).length > 0 && (t = a(t, o)), t
							}

							function f(e, t) {
								var n = y.default.query(e);
								if (null == n) return t;
								if (n.prototype instanceof y.default.Embed) {
									var r = {},
										i = n.value(e);
									null != i && (r[n.blotName] = i, t = (new v.default).insert(r, n.formats(e)))
								} else "function" == typeof n.formats && (t = a(t, n.blotName, n.formats(e)));
								return t
							}

							function d(e, t) {
								return s(t, "\n") || (u(e) || t.length() > 0 && e.nextSibling && u(e.nextSibling)) && t.insert("\n"), t
							}

							function h(e, t) {
								if (u(e) && null != e.nextElementSibling && !s(t, "\n\n")) {
									var n = e.offsetHeight + parseFloat(o(e).marginTop) + parseFloat(o(e).marginBottom);
									e.nextElementSibling.offsetTop > e.offsetTop + 1.5 * n && t.insert("\n")
								}
								return t
							}

							function p(e, t) {
								var n = e.data;
								if ("O:P" === e.parentNode.tagName) return t.insert(n.trim());
								if (0 === n.trim().length && e.parentNode.classList.contains("ql-clipboard")) return t;
								if (!o(e.parentNode).whiteSpace.startsWith("pre")) {
									var r = function(e, t) {
										return (t = t.replace(/[^\u00a0]/g, "")).length < 1 && e ? " " : t
									};
									n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == e.previousSibling && u(e.parentNode) || null != e.previousSibling && u(e.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == e.nextSibling && u(e.parentNode) || null != e.nextSibling && u(e.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
								}
								return t.insert(n)
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.matchText = t.matchSpacing = t.matchNewline = t.matchBlot = t.matchAttributor = t.default = void 0;
							var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
									return typeof e
								} : function(e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
								},
								m = function(e, t) {
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
								b = function() {
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
								g = r(n(3)),
								v = r(n(2)),
								y = r(n(0)),
								A = r(n(5)),
								S = r(n(10)),
								w = r(n(9)),
								E = n(36),
								T = n(37),
								C = r(n(13)),
								$ = n(26),
								k = n(38),
								O = n(39),
								x = n(40),
								P = (0, S.default)("quill:clipboard"),
								M = "__ql-matcher",
								I = [
									[Node.TEXT_NODE, p],
									[Node.TEXT_NODE, d],
									["br", function(e, t) {
										return s(t, "\n") || t.insert("\n"), t
									}],
									[Node.ELEMENT_NODE, d],
									[Node.ELEMENT_NODE, f],
									[Node.ELEMENT_NODE, h],
									[Node.ELEMENT_NODE, l],
									[Node.ELEMENT_NODE, function(e, t) {
										var n = {},
											r = e.style || {};
										return r.fontStyle && "italic" === o(e).fontStyle && (n.italic = !0), r.fontWeight && (o(e).fontWeight.startsWith("bold") || parseInt(o(e).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (t = a(t, n)), parseFloat(r.textIndent || 0) > 0 && (t = (new v.default).insert("\t").concat(t)), t
									}],
									["li", function(e, t) {
										var n = y.default.query(e);
										if (null == n || "list-item" !== n.blotName || !s(t, "\n")) return t;
										for (var r = -1, i = e.parentNode; !i.classList.contains("ql-clipboard");) "list" === (y.default.query(i) || {}).blotName && (r += 1), i = i.parentNode;
										return r <= 0 ? t : t.compose((new v.default).retain(t.length() - 1).retain(1, {
											indent: r
										}))
									}],
									["b", c.bind(c, "bold")],
									["i", c.bind(c, "italic")],
									["style", function() {
										return new v.default
									}]
								],
								L = [E.AlignAttribute, k.DirectionAttribute].reduce((function(e, t) {
									return e[t.keyName] = t, e
								}), {}),
								D = [E.AlignStyle, T.BackgroundStyle, $.ColorStyle, k.DirectionStyle, O.FontStyle, x.SizeStyle].reduce((function(e, t) {
									return e[t.keyName] = t, e
								}), {}),
								B = function(e) {
									function t(e, n) {
										! function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										}(this, t);
										var r = function(e, t) {
											if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
											return !t || "object" != typeof t && "function" != typeof t ? e : t
										}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], I.concat(r.options.matchers).forEach((function(e) {
											var t = m(e, 2),
												i = t[0],
												a = t[1];
											(n.matchVisual || a !== h) && r.addMatcher(i, a)
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
									}(t, e), b(t, [{
										key: "addMatcher",
										value: function(e, t) {
											this.matchers.push([e, t])
										}
									}, {
										key: "convert",
										value: function(e) {
											if ("string" == typeof e) return this.container.innerHTML = e.replace(/\>\r?\n +\</g, "><"), this.convert();
											var t = this.quill.getFormat(this.quill.selection.savedRange.index);
											if (t[C.default.blotName]) {
												var n = this.container.innerText;
												return this.container.innerHTML = "", (new v.default).insert(n, i({}, C.default.blotName, t[C.default.blotName]))
											}
											var r = this.prepareMatching(),
												a = m(r, 2),
												o = a[0],
												u = a[1],
												c = function e(t, n, r) {
													return t.nodeType === t.TEXT_NODE ? r.reduce((function(e, n) {
														return n(t, e)
													}), new v.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], (function(i, a) {
														var o = e(a, n, r);
														return a.nodeType === t.ELEMENT_NODE && (o = n.reduce((function(e, t) {
															return t(a, e)
														}), o), o = (a[M] || []).reduce((function(e, t) {
															return t(a, e)
														}), o)), i.concat(o)
													}), new v.default) : new v.default
												}(this.container, o, u);
											return s(c, "\n") && null == c.ops[c.ops.length - 1].attributes && (c = c.compose((new v.default).retain(c.length() - 1).delete(1))), P.log("convert", this.container.innerHTML, c), this.container.innerHTML = "", c
										}
									}, {
										key: "dangerouslyPasteHTML",
										value: function(e, t) {
											var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.default.sources.API;
											if ("string" == typeof e) this.quill.setContents(this.convert(e), t), this.quill.setSelection(0, A.default.sources.SILENT);
											else {
												var r = this.convert(t);
												this.quill.updateContents((new v.default).retain(e).concat(r), n), this.quill.setSelection(e + r.length(), A.default.sources.SILENT)
											}
										}
									}, {
										key: "onPaste",
										value: function(e) {
											var t = this;
											if (!e.defaultPrevented && this.quill.isEnabled()) {
												var n = this.quill.getSelection(),
													r = (new v.default).retain(n.index),
													i = this.quill.scrollingContainer.scrollTop;
												this.container.focus(), this.quill.selection.update(A.default.sources.SILENT), setTimeout((function() {
													r = r.concat(t.convert()).delete(n.length), t.quill.updateContents(r, A.default.sources.USER), t.quill.setSelection(r.length() - n.length, A.default.sources.SILENT), t.quill.scrollingContainer.scrollTop = i, t.quill.focus()
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
												var i = m(r, 2),
													a = i[0],
													o = i[1];
												switch (a) {
													case Node.TEXT_NODE:
														n.push(o);
														break;
													case Node.ELEMENT_NODE:
														t.push(o);
														break;
													default:
														[].forEach.call(e.container.querySelectorAll(a), (function(e) {
															e[M] = e[M] || [], e[M].push(o)
														}))
												}
											})), [t, n]
										}
									}]), t
								}(w.default);
							B.DEFAULTS = {
								matchers: [],
								matchVisual: !0
							}, t.default = B, t.matchAttributor = l, t.matchBlot = f, t.matchNewline = d, t.matchSpacing = h, t.matchText = p
						}, function(e, t, n) {
							"use strict";


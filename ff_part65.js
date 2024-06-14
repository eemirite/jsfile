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

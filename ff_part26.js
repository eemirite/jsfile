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
								o = function e(t, n, r) {
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
										key: "optimize",
										value: function(e) {
											o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
										}
									}], [{
										key: "create",
										value: function() {
											return o(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this)
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

							function r(e) {
								return e && e.__esModule ? e : {
									default: e
								}
							}

							function i(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}

							function a(e, t, n) {
								var r = document.createElement("button");
								r.setAttribute("type", "button"), r.classList.add("ql-" + t), null != n && (r.value = n), e.appendChild(r)
							}

							function o(e, t) {
								Array.isArray(t[0]) || (t = [t]), t.forEach((function(t) {
									var n = document.createElement("span");
									n.classList.add("ql-formats"), t.forEach((function(e) {
										if ("string" == typeof e) a(n, e);
										else {
											var t = Object.keys(e)[0],
												r = e[t];
											Array.isArray(r) ? function(e, t, n) {
												var r = document.createElement("select");
												r.classList.add("ql-" + t), n.forEach((function(e) {
													var t = document.createElement("option");
													!1 !== e ? t.setAttribute("value", e) : t.setAttribute("selected", "selected"), r.appendChild(t)
												})), e.appendChild(r)
											}(n, t, r) : a(n, t, r)
										}
									})), e.appendChild(n)
								}))
							}
							Object.defineProperty(t, "__esModule", {
								value: !0
							}), t.addControls = t.default = void 0;
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
								c = r(n(2)),
								l = r(n(0)),
								f = r(n(5)),
								d = r(n(10)),
								h = r(n(9)),
								p = (0, d.default)("quill:toolbar"),
								_ = function(e) {
									function t(e, n) {
										! function(e, t) {
											if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
										}(this, t);
										var r, a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										if (Array.isArray(a.options.container)) {
											var u = document.createElement("div");
											o(u, a.options.container), e.container.parentNode.insertBefore(u, e.container), a.container = u
										} else "string" == typeof a.options.container ? a.container = document.querySelector(a.options.container) : a.container = a.options.container;
										return a.container instanceof HTMLElement ? (a.container.classList.add("ql-toolbar"), a.controls = [], a.handlers = {}, Object.keys(a.options.handlers).forEach((function(e) {
											a.addHandler(e, a.options.handlers[e])
										})), [].forEach.call(a.container.querySelectorAll("button, select"), (function(e) {
											a.attach(e)
										})), a.quill.on(f.default.events.EDITOR_CHANGE, (function(e, t) {
											e === f.default.events.SELECTION_CHANGE && a.update(t)
										})), a.quill.on(f.default.events.SCROLL_OPTIMIZE, (function() {
											var e = a.quill.selection.getRange(),
												t = s(e, 1)[0];
											a.update(t)
										})), a) : (r = p.error("Container required for toolbar", a.options), i(a, r))
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
									}(t, e), u(t, [{
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
													if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void p.warn("ignoring attaching to disabled format", n, e);
													if (null == l.default.query(n)) return void p.warn("ignoring attaching to nonexistent format", n, e)
												}
												var r = "SELECT" === e.tagName ? "change" : "click";
												e.addEventListener(r, (function(r) {
													var i = void 0;
													if ("SELECT" === e.tagName) {
														if (e.selectedIndex < 0) return;
														var a = e.options[e.selectedIndex];
														i = !a.hasAttribute("selected") && (a.value || !1)
													} else i = !e.classList.contains("ql-active") && (e.value || !e.hasAttribute("value")), r.preventDefault();
													t.quill.focus();
													var o = t.quill.selection.getRange(),
														u = s(o, 1)[0];
													if (null != t.handlers[n]) t.handlers[n].call(t, i);
													else if (l.default.query(n).prototype instanceof l.default.Embed) {
														if (!(i = prompt("Enter " + n))) return;
														t.quill.updateContents((new c.default).retain(u.index).delete(u.length).insert(function(e, t, n) {
															return t in e ? Object.defineProperty(e, t, {
																value: n,
																enumerable: !0,
																configurable: !0,
																writable: !0
															}) : e[t] = n, e
														}({}, n, i)), f.default.sources.USER)
													} else t.quill.format(n, i, f.default.sources.USER);
													t.update(u)
												})), this.controls.push([n, e])
											}
										}
									}, {
										key: "update",
										value: function(e) {
											var t = null == e ? {} : this.quill.getFormat(e);
											this.controls.forEach((function(n) {
												var r = s(n, 2),
													i = r[0],
													a = r[1];
												if ("SELECT" === a.tagName) {
													var o = void 0;
													if (null == e) o = null;
													else if (null == t[i]) o = a.querySelector("option[selected]");
													else if (!Array.isArray(t[i])) {
														var u = t[i];
														"string" == typeof u && (u = u.replace(/\"/g, '\\"')), o = a.querySelector('option[value="' + u + '"]')
													}
													null == o ? (a.value = "", a.selectedIndex = -1) : o.selected = !0
												} else if (null == e) a.classList.remove("ql-active");
												else if (a.hasAttribute("value")) {
													var c = t[i] === a.getAttribute("value") || null != t[i] && t[i].toString() === a.getAttribute("value") || null == t[i] && !a.getAttribute("value");
													a.classList.toggle("ql-active", c)
												} else a.classList.toggle("ql-active", null != t[i])
											}))
										}
									}]), t
								}(h.default);
							_.DEFAULTS = {}, _.DEFAULTS = {
								container: null,
								handlers: {
									clean: function() {
										var e = this,
											t = this.quill.getSelection();
										if (null != t)
											if (0 == t.length) {
												var n = this.quill.getFormat();
												Object.keys(n).forEach((function(t) {
													null != l.default.query(t, l.default.Scope.INLINE) && e.quill.format(t, !1)
												}))
											} else this.quill.removeFormat(t, f.default.sources.USER)
									},
									direction: function(e) {
										var t = this.quill.getFormat().align;
										"rtl" === e && null == t ? this.quill.format("align", "right", f.default.sources.USER) : e || "right" !== t || this.quill.format("align", !1, f.default.sources.USER), this.quill.format("direction", e, f.default.sources.USER)
									},
									indent: function(e) {
										var t = this.quill.getSelection(),
											n = this.quill.getFormat(t),
											r = parseInt(n.indent || 0);
										if ("+1" === e || "-1" === e) {
											var i = "+1" === e ? 1 : -1;
											"rtl" === n.direction && (i *= -1), this.quill.format("indent", r + i, f.default.sources.USER)
										}
									},
									link: function(e) {
										!0 === e && (e = prompt("Enter link URL:")), this.quill.format("link", e, f.default.sources.USER)
									},
									list: function(e) {
										var t = this.quill.getSelection(),
											n = this.quill.getFormat(t);
										"check" === e ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, f.default.sources.USER) : this.quill.format("list", "unchecked", f.default.sources.USER) : this.quill.format("list", e, f.default.sources.USER)
									}
								}
							}, t.default = _, t.addControls = o
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
								},
								a = function(e) {
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
								}(),
								i = function(e) {
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
								}(),
								i = function() {
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
							});
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
								u = function e(t, n, r) {
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
								c = function() {
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
								l = r(n(3)),
								f = r(n(8)),
								d = n(43),
								h = r(d),
								p = r(n(27)),
								_ = n(15),
								m = r(n(41)),
								b = [
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
										i(this, t), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = b);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return r.quill.container.classList.add("ql-snow"), r
									}
									return o(t, e), c(t, [{
										key: "extendToolbar",
										value: function(e) {
											e.container.classList.add("ql-snow"), this.buildButtons([].slice.call(e.container.querySelectorAll("button")), m.default), this.buildPickers([].slice.call(e.container.querySelectorAll("select")), m.default), this.tooltip = new v(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
												key: "K",
												shortKey: !0
											}, (function(t, n) {
												e.handlers.link.call(e, !n.format.link)
											}))
										}
									}]), t
								}(h.default);
							g.DEFAULTS = (0, l.default)(!0, {}, h.default.DEFAULTS, {
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
									i(this, t);
									var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.preview = r.root.querySelector("a.ql-preview"), r
								}
								return o(t, e), c(t, [{
									key: "listen",
									value: function() {
										var e = this;
										u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", (function(t) {
											e.root.classList.contains("ql-editing") ? e.save() : e.edit("link", e.preview.textContent), t.preventDefault()
										})), this.root.querySelector("a.ql-remove").addEventListener("click", (function(t) {
											if (null != e.linkRange) {
												var n = e.linkRange;
												e.restoreFocus(), e.quill.formatText(n, "link", !1, f.default.sources.USER), delete e.linkRange
											}
											t.preventDefault(), e.hide()
										})), this.quill.on(f.default.events.SELECTION_CHANGE, (function(t, n, r) {
											if (null != t) {
												if (0 === t.length && r === f.default.sources.USER) {
													var i = e.quill.scroll.descendant(p.default, t.index),
														a = s(i, 2),
														o = a[0],
														u = a[1];
													if (null != o) {
														e.linkRange = new _.Range(t.index - u, o.length());
														var c = p.default.formats(o.domNode);
														return e.preview.textContent = c, e.preview.setAttribute("href", c), e.show(), void e.position(e.quill.getBounds(e.linkRange))
													}
												} else delete e.linkRange;
												e.hide()
											}
										}))
									}
								}, {
									key: "show",
									value: function() {
										u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
									}
								}]), t
							}(d.BaseTooltip);
							v.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), t.default = g
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
							var i = r(n(29)),
								a = n(36),
								o = n(38),
								s = n(64),
								u = r(n(65)),
								c = r(n(66)),
								l = n(67),
								f = r(l),
								d = n(37),
								h = n(26),
								p = n(39),
								_ = n(40),
								m = r(n(56)),
								b = r(n(68)),
								g = r(n(27)),
								v = r(n(69)),
								y = r(n(70)),
								A = r(n(71)),
								S = r(n(72)),
								w = r(n(73)),
								E = n(13),
								T = r(E),
								C = r(n(74)),
								$ = r(n(75)),
								k = r(n(57)),
								O = r(n(41)),
								x = r(n(28)),
								P = r(n(59)),
								M = r(n(60)),
								I = r(n(61)),
								L = r(n(108)),
								D = r(n(62));
							i.default.register({
								"attributors/attribute/direction": o.DirectionAttribute,
								"attributors/class/align": a.AlignClass,
								"attributors/class/background": d.BackgroundClass,
								"attributors/class/color": h.ColorClass,
								"attributors/class/direction": o.DirectionClass,
								"attributors/class/font": p.FontClass,
								"attributors/class/size": _.SizeClass,
								"attributors/style/align": a.AlignStyle,
								"attributors/style/background": d.BackgroundStyle,
								"attributors/style/color": h.ColorStyle,
								"attributors/style/direction": o.DirectionStyle,
								"attributors/style/font": p.FontStyle,
								"attributors/style/size": _.SizeStyle
							}, !0), i.default.register({
								"formats/align": a.AlignClass,
								"formats/direction": o.DirectionClass,
								"formats/indent": s.IndentClass,
								"formats/background": d.BackgroundStyle,
								"formats/color": h.ColorStyle,
								"formats/font": p.FontClass,
								"formats/size": _.SizeClass,
								"formats/blockquote": u.default,
								"formats/code-block": T.default,
								"formats/header": c.default,
								"formats/list": f.default,
								"formats/bold": m.default,
								"formats/code": E.Code,
								"formats/italic": b.default,
								"formats/link": g.default,
								"formats/script": v.default,
								"formats/strike": y.default,
								"formats/underline": A.default,
								"formats/image": S.default,
								"formats/video": w.default,
								"formats/list/item": l.ListItem,
								"modules/formula": C.default,
								"modules/syntax": $.default,
								"modules/toolbar": k.default,
								"themes/bubble": L.default,
								"themes/snow": D.default,
								"ui/icons": O.default,
								"ui/picker": x.default,
								"ui/icon-picker": M.default,
								"ui/color-picker": P.default,
								"ui/tooltip": I.default
							}, !0), t.default = i.default
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
							}), t.IndentClass = void 0;
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
								o = function e(t, n, r) {
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
								s = function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(0)),
								u = new(function(e) {
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
										key: "add",
										value: function(e, n) {
											if ("+1" === n || "-1" === n) {
												var r = this.value(e) || 0;
												n = "+1" === n ? r + 1 : r - 1
											}
											return 0 === n ? (this.remove(e), !0) : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "add", this).call(this, e, n)
										}
									}, {
										key: "canAdd",
										value: function(e, n) {
											return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, n) || o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canAdd", this).call(this, e, parseInt(n))
										}
									}, {
										key: "value",
										value: function(e) {
											return parseInt(o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this).call(this, e)) || void 0
										}
									}]), t
								}(s.default.Attributor.Class))("indent", "ql-indent", {
									scope: s.default.Scope.BLOCK,
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
									}(t, e), a(t, null, [{
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
							}), t.default = t.ListItem = void 0;
							var s = function() {
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
								u = function e(t, n, r) {
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
								c = r(n(0)),
								l = r(n(4)),
								f = r(n(25)),
								d = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), s(t, [{
										key: "format",
										value: function(e, n) {
											e !== h.blotName || n ? u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n) : this.replaceWith(c.default.create(this.statics.scope))
										}
									}, {
										key: "remove",
										value: function() {
											null == this.prev && null == this.next ? this.parent.remove() : u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "remove", this).call(this)
										}
									}, {
										key: "replaceWith",
										value: function(e, n) {
											return this.parent.isolate(this.offset(this.parent), this.length()), e === this.parent.statics.blotName ? (this.parent.replaceWith(e, n), this) : (this.parent.unwrap(), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replaceWith", this).call(this, e, n))
										}
									}], [{
										key: "formats",
										value: function(e) {
											return e.tagName === this.tagName ? void 0 : u(t.__proto__ || Object.getPrototypeOf(t), "formats", this).call(this, e)
										}
									}]), t
								}(l.default);
							d.blotName = "list-item", d.tagName = "LI";
							var h = function(e) {
								function t(e) {
									i(this, t);
									var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
										r = function(t) {
											if (t.target.parentNode === e) {
												var r = n.statics.formats(e),
													i = c.default.find(t.target);
												"checked" === r ? i.format("list", "unchecked") : "unchecked" === r && i.format("list", "checked")
											}
										};
									return e.addEventListener("touchstart", r), e.addEventListener("mousedown", r), n
								}
								return o(t, e), s(t, null, [{
									key: "create",
									value: function(e) {
										var n = "ordered" === e ? "OL" : "UL",
											r = u(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, n);
										return "checked" !== e && "unchecked" !== e || r.setAttribute("data-checked", "checked" === e), r
									}
								}, {
									key: "formats",
									value: function(e) {
										return "OL" === e.tagName ? "ordered" : "UL" === e.tagName ? e.hasAttribute("data-checked") ? "true" === e.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
									}
								}]), s(t, [{
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
										if (e instanceof d) u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "insertBefore", this).call(this, e, n);
										else {
											var r = null == n ? this.length() : n.offset(this),
												i = this.split(r);
											i.parent.insertBefore(e, i)
										}
									}
								}, {
									key: "optimize",
									value: function(e) {
										u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "optimize", this).call(this, e);
										var n = this.next;
										null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
									}
								}, {
									key: "replace",
									value: function(e) {
										if (e.statics.blotName !== this.statics.blotName) {
											var n = c.default.create(this.statics.defaultChild);
											e.moveChildren(n), this.appendChild(n)
										}
										u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "replace", this).call(this, e)
									}
								}]), t
							}(f.default);
							h.blotName = "list", h.scope = c.default.Scope.BLOCK_BLOT, h.tagName = ["OL", "UL"], h.defaultChild = "list-item", h.allowedChildren = [d], t.ListItem = d, t.default = h
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
									}(t, e), a(t, null, [{
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
								o = function e(t, n, r) {
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
								s = function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(0)),
								u = n(27),
								c = ["alt", "height", "width"],
								l = function(e) {
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
										key: "format",
										value: function(e, n) {
											c.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
										}
									}], [{
										key: "create",
										value: function(e) {
											var n = o(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
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
											return (0, u.sanitize)(e, ["http", "https", "data"]) ? e : "//:0"
										}
									}, {
										key: "value",
										value: function(e) {
											return e.getAttribute("src")
										}
									}]), t
								}(s.default.Embed);
							l.blotName = "image", l.tagName = "IMG", t.default = l
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
								o = function e(t, n, r) {
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
								s = n(4),
								u = function(e) {
									return e && e.__esModule ? e : {
										default: e
									}
								}(n(27)),
								c = ["height", "width"],
								l = function(e) {
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
										key: "format",
										value: function(e, n) {
											c.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
										}
									}], [{
										key: "create",
										value: function(e) {
											var n = o(t.__proto__ || Object.getPrototypeOf(t), "create", this).call(this, e);
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
											return u.default.sanitize(e)
										}
									}, {
										key: "value",
										value: function(e) {
											return e.getAttribute("src")
										}
									}]), t
								}(s.BlockEmbed);
							l.blotName = "video", l.className = "ql-video", l.tagName = "IFRAME", t.default = l
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
							}), t.default = t.FormulaBlot = void 0;
							var s = function() {
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
								u = r(n(35)),
								c = r(n(5)),
								l = r(n(9)),
								f = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), s(t, null, [{
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
								}(u.default);
							f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";
							var d = function(e) {
								function t() {
									i(this, t);
									var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
									if (null == window.katex) throw new Error("Formula module requires KaTeX.");
									return e
								}
								return o(t, e), s(t, null, [{
									key: "register",
									value: function() {
										c.default.register(f, !0)
									}
								}]), t
							}(l.default);
							t.FormulaBlot = f, t.default = d
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
							}), t.default = t.CodeToken = t.CodeBlock = void 0;
							var s = function() {
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
								u = r(n(0)),
								c = r(n(5)),
								l = r(n(9)),
								f = function(e) {
									function t() {
										return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
									}
									return o(t, e), s(t, [{
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
								}(r(n(13)).default);
							f.className = "ql-syntax";
							var d = new u.default.Attributor.Class("token", "hljs", {
									scope: u.default.Scope.INLINE
								}),
								h = function(e) {
									function t(e, n) {
										i(this, t);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
										var o = null;
										return r.quill.on(c.default.events.SCROLL_OPTIMIZE, (function() {
											clearTimeout(o), o = setTimeout((function() {
												r.highlight(), o = null
											}), r.options.interval)
										})), r.highlight(), r
									}
									return o(t, e), s(t, null, [{
										key: "register",
										value: function() {
											c.default.register(d, !0), c.default.register(f, !0)
										}
									}]), s(t, [{
										key: "highlight",
										value: function() {
											var e = this;
											if (!this.quill.selection.composing) {
												this.quill.update(c.default.sources.USER);
												var t = this.quill.getSelection();
												this.quill.scroll.descendants(f).forEach((function(t) {
													t.highlight(e.options.highlight)
												})), this.quill.update(c.default.sources.SILENT), null != t && this.quill.setSelection(t, c.default.sources.SILENT)
											}
										}
									}]), t
								}(l.default);
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
							}), t.default = t.BubbleTooltip = void 0;
							var s = function e(t, n, r) {
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
								c = r(n(3)),
								l = r(n(8)),
								f = n(43),
								d = r(f),
								h = n(15),
								p = r(n(41)),
								_ = [
									["bold", "italic", "link"],
									[{
										header: 1
									}, {
										header: 2
									}, "blockquote"]
								],
								m = function(e) {
									function t(e, n) {
										i(this, t), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = _);
										var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
										return r.quill.container.classList.add("ql-bubble"), r
									}
									return o(t, e), u(t, [{
										key: "extendToolbar",
										value: function(e) {
											this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(e.container), this.buildButtons([].slice.call(e.container.querySelectorAll("button")), p.default), this.buildPickers([].slice.call(e.container.querySelectorAll("select")), p.default)
										}
									}]), t
								}(d.default);
							m.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, {
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
									i(this, t);
									var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
									return r.quill.on(l.default.events.EDITOR_CHANGE, (function(e, t, n, i) {
										if (e === l.default.events.SELECTION_CHANGE)
											if (null != t && t.length > 0 && i === l.default.sources.USER) {
												r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
												var a = r.quill.getLines(t.index, t.length);
												if (1 === a.length) r.position(r.quill.getBounds(t));
												else {
													var o = a[a.length - 1],
														s = r.quill.getIndex(o),
														u = Math.min(o.length() - 1, t.index + t.length - s),
														c = r.quill.getBounds(new h.Range(s, u));
													r.position(c)
												}
											} else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
									})), r
								}
								return o(t, e), u(t, [{
									key: "listen",
									value: function() {
										var e = this;
										s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", (function() {
											e.root.classList.remove("ql-editing")
										})), this.quill.on(l.default.events.SCROLL_OPTIMIZE, (function() {
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
										var n = s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "position", this).call(this, e),
											r = this.root.querySelector(".ql-tooltip-arrow");
										if (r.style.marginLeft = "", 0 === n) return n;
										r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
									}
								}]), t
							}(f.BaseTooltip);
							b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), t.BubbleTooltip = b, t.default = m
						}, function(e, t, n) {
							e.exports = n(63)
						}]).default
					}))
				}).call(t, n(43).Buffer)
			}, function(e, t, n) {
				var r = n(11)(n(1), "Map");
				e.exports = r
			}, function(e, t, n) {
				var r = n(1).Symbol;
				e.exports = r
			}, function(e, t) {
				e.exports = function(e, t, n) {
					switch (n.length) {
						case 0:
							return e.call(t);
						case 1:
							return e.call(t, n[0]);
						case 2:
							return e.call(t, n[0], n[1]);
						case 3:
							return e.call(t, n[0], n[1], n[2])
					}
					return e.apply(t, n)
				}
			}, function(e, t, n) {
				var r = n(10),
					i = n(8);
				e.exports = function(e, t, n) {
					(void 0 === n || i(e[t], n)) && (void 0 !== n || t in e) || r(e, t, n)
				}
			}, function(e, t, n) {
				var r = n(48),
					i = n(19),
					a = n(53),
					o = n(58),
					s = n(0),
					u = n(34),
					c = n(27);
				e.exports = function e(t, n, l, f, d) {
					t !== n && a(n, (function(a, u) {
						if (s(a)) d || (d = new r), o(t, n, u, l, e, f, d);
						else {
							var h = f ? f(c(t, u), a, u + "", t, n, d) : void 0;
							void 0 === h && (h = a), i(t, u, h)
						}
					}), u)
				}
			}, function(e, t, n) {
				var r = n(28),
					i = n(96),
					a = n(97);
				e.exports = function(e, t) {
					return a(i(e, t, r), e + "")
				}
			}, function(e, t, n) {
				var r = n(11),
					i = function() {
						try {
							var e = r(Object, "defineProperty");
							return e({}, "", {}), e
						} catch (e) {}
					}();
				e.exports = i
			}, function(e, t, n) {
				(function(t) {
					var n = "object" == typeof t && t && t.Object === Object && t;
					e.exports = n
				}).call(t, n(35))
			}, function(e, t, n) {
				var r = n(95)(Object.getPrototypeOf, Object);
				e.exports = r
			}, function(e, t) {
				var n = 9007199254740991,
					r = /^(?:0|[1-9]\d*)$/;
				e.exports = function(e, t) {
					var i = typeof e;
					return !!(t = null == t ? n : t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < t
				}
			}, function(e, t) {
				var n = Object.prototype;
				e.exports = function(e) {
					var t = e && e.constructor;
					return e === ("function" == typeof t && t.prototype || n)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					return "__proto__" == t ? void 0 : e[t]
				}
			}, function(e, t) {
				e.exports = function(e) {
					return e
				}
			}, function(e, t, n) {
				var r = n(54),
					i = n(2),
					a = Object.prototype,
					o = a.hasOwnProperty,
					s = a.propertyIsEnumerable,
					u = r(function() {
						return arguments
					}()) ? r : function(e) {
						return i(e) && o.call(e, "callee") && !s.call(e, "callee")
					};
				e.exports = u
			}, function(e, t) {
				var n = Array.isArray;
				e.exports = n
			}, function(e, t, n) {
				(function(e) {
					var r = n(1),
						i = n(109),
						a = "object" == typeof t && t && !t.nodeType && t,
						o = a && "object" == typeof e && e && !e.nodeType && e,
						s = o && o.exports === a ? r.Buffer : void 0,
						u = (s ? s.isBuffer : void 0) || i;
					e.exports = u
				}).call(t, n(14)(e))
			}, function(e, t) {
				var n = 9007199254740991;
				e.exports = function(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
				}
			}, function(e, t, n) {
				var r = n(56),
					i = n(61),
					a = n(93),
					o = a && a.isTypedArray,
					s = o ? i(o) : r;
				e.exports = s
			}, function(e, t, n) {
				var r = n(50),
					i = n(57),
					a = n(12);
				e.exports = function(e) {
					return a(e) ? r(e, !0) : i(e)
				}
			}, function(e, t) {
				var n;
				n = function() {
					return this
				}();
				try {
					n = n || Function("return this")() || (0, eval)("this")
				} catch (e) {
					"object" == typeof window && (n = window)
				}
				e.exports = n
			}, function(e, t, n) {
				"use strict";
				t.a = {
					modules: ["DisplaySize", "Toolbar", "Resize"],
					overlayStyles: {
						position: "absolute",
						boxSizing: "border-box",
						border: "1px dashed #444"
					},
					handleStyles: {
						position: "absolute",
						height: "12px",
						width: "12px",
						backgroundColor: "white",
						border: "1px solid #777",
						boxSizing: "border-box",
						opacity: "0.80"
					},
					displayStyles: {
						position: "absolute",
						font: "12px/1.0 Arial, Helvetica, sans-serif",
						padding: "4px 8px",
						textAlign: "center",
						backgroundColor: "white",
						color: "#333",
						border: "1px solid #777",
						boxSizing: "border-box",
						opacity: "0.80",
						cursor: "default"
					},
					toolbarStyles: {
						position: "absolute",
						top: "-12px",
						right: "0",
						left: "0",
						height: "0",
						minWidth: "100px",
						font: "12px/1.0 Arial, Helvetica, sans-serif",
						textAlign: "center",
						color: "#333",
						boxSizing: "border-box",
						cursor: "default"
					},
					toolbarButtonStyles: {
						display: "inline-block",
						width: "24px",
						height: "24px",
						background: "white",
						border: "1px solid #999",
						verticalAlign: "middle"
					},
					toolbarButtonSvgStyles: {
						fill: "#444",
						stroke: "#444",
						strokeWidth: "2"
					}
				}
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return a
				}));
				var a = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.display = document.createElement("div"), Object.assign(a.display.style, a.options.displayStyles), a.overlay.appendChild(a.display)
						}, a.onDestroy = function() {}, a.onUpdate = function() {
							if (a.display && a.img) {
								var e = a.getCurrentSize();
								if (a.display.innerHTML = e.join(" &times; "), e[0] > 120 && e[1] > 30) Object.assign(a.display.style, {
									right: "4px",
									bottom: "4px",
									left: "auto"
								});
								else if ("right" == a.img.style.float) {
									var t = a.display.getBoundingClientRect();
									Object.assign(a.display.style, {
										right: "auto",
										bottom: "-" + (t.height + 4) + "px",
										left: "-" + (t.width + 4) + "px"
									})
								} else {
									var n = a.display.getBoundingClientRect();
									Object.assign(a.display.style, {
										right: "-" + (n.width + 4) + "px",
										bottom: "-" + (n.height + 4) + "px",
										left: "auto"
									})
								}
							}
						}, a.getCurrentSize = function() {
							return [a.img.width, Math.round(a.img.width / a.img.naturalWidth * a.img.naturalHeight)]
						}, i(a, n)
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
				}(n(9).a)
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return a
				}));
				var a = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.boxes = [], a.addBox("nwse-resize"), a.addBox("nesw-resize"), a.addBox("nwse-resize"), a.addBox("nesw-resize"), a.positionBoxes()
						}, a.onDestroy = function() {
							a.setCursor("")
						}, a.positionBoxes = function() {
							var e = -parseFloat(a.options.handleStyles.width) / 2 + "px",
								t = -parseFloat(a.options.handleStyles.height) / 2 + "px";
							[{
								left: e,
								top: t
							}, {
								right: e,
								top: t
							}, {
								right: e,
								bottom: t
							}, {
								left: e,
								bottom: t
							}].forEach((function(e, t) {
								Object.assign(a.boxes[t].style, e)
							}))
						}, a.addBox = function(e) {
							var t = document.createElement("div");
							Object.assign(t.style, a.options.handleStyles), t.style.cursor = e, t.style.width = a.options.handleStyles.width + "px", t.style.height = a.options.handleStyles.height + "px", t.addEventListener("mousedown", a.handleMousedown, !1), a.overlay.appendChild(t), a.boxes.push(t)
						}, a.handleMousedown = function(e) {
							a.dragBox = e.target, a.dragStartX = e.clientX, a.preDragWidth = a.img.width || a.img.naturalWidth, a.setCursor(a.dragBox.style.cursor), document.addEventListener("mousemove", a.handleDrag, !1), document.addEventListener("mouseup", a.handleMouseup, !1)
						}, a.handleMouseup = function() {
							a.setCursor(""), document.removeEventListener("mousemove", a.handleDrag), document.removeEventListener("mouseup", a.handleMouseup)
						}, a.handleDrag = function(e) {
							if (a.img) {
								var t = e.clientX - a.dragStartX;
								a.dragBox === a.boxes[0] || a.dragBox === a.boxes[3] ? a.img.width = Math.round(a.preDragWidth - t) : a.img.width = Math.round(a.preDragWidth + t), a.requestUpdate()
							}
						}, a.setCursor = function(e) {
							[document.body, a.img].forEach((function(t) {
								t.style.cursor = e
							}))
						}, i(a, n)
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
				}(n(9).a)
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function i(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}
				n.d(t, "a", (function() {
					return v
				}));
				var a = n(15),
					o = n.n(a),
					s = n(112),
					u = n.n(s),
					c = n(111),
					l = n.n(c),
					f = n(113),
					d = n.n(f),
					h = n(9),
					p = o.a.imports.parchment,
					_ = new p.Attributor.Style("float", "float"),
					m = new p.Attributor.Style("margin", "margin"),
					b = new p.Attributor.Style("display", "display"),
					g = new p.Attributor.Attribute("nameClass", "class", {
						scope: p.Scope.INLINE
					});
				o.a.register(g);
				var v = function(e) {
					function t() {
						var e, n, a;
						r(this, t);
						for (var o = arguments.length, s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
						return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.onCreate = function() {
							a.toolbar = document.createElement("div"), Object.assign(a.toolbar.style, a.options.toolbarStyles), a.overlay.appendChild(a.toolbar), a._defineAlignments(), a._addToolbarButtons()
						}, a.onDestroy = function() {}, a.onUpdate = function() {}, a._defineAlignments = function() {
							a.alignments = [{
								icon: u.a,
								apply: function() {
									b.add(a.img, "inline"), _.add(a.img, "left"), m.add(a.img, "0 1em 1em 0"), a.img.align = "left"
								},
								isApplied: function() {
									return "left" == _.value(a.img)
								}
							}, {
								icon: l.a,
								apply: function() {
									b.add(a.img, "block"), _.remove(a.img), m.add(a.img, "auto"), a.img.align = "center"
								},
								isApplied: function() {
									return "auto" == m.value(a.img)
								}
							}, {
								icon: d.a,
								apply: function() {
									b.add(a.img, "inline"), _.add(a.img, "right"), m.add(a.img, "0 0 1em 1em"), a.img.align = "right"
								},
								isApplied: function() {
									return "right" == _.value(a.img)
								}
							}]
						}, a._addToolbarButtons = function() {
							var e = [];
							a.alignments.forEach((function(t, n) {
								var r = document.createElement("span");
								e.push(r), r.innerHTML = t.icon, r.addEventListener("click", (function() {
									e.forEach((function(e) {
										return e.style.filter = ""
									})), t.isApplied() ? (_.remove(a.img), m.remove(a.img), b.remove(a.img)) : (a._selectButton(r), t.apply()), a.requestUpdate()
								})), Object.assign(r.style, a.options.toolbarButtonStyles), n > 0 && (r.style.borderLeftWidth = "0"), Object.assign(r.children[0].style, a.options.toolbarButtonSvgStyles), t.isApplied() && a._selectButton(r), a.toolbar.appendChild(r)
							}))
						}, a._selectButton = function(e) {
							e.style.filter = "invert(20%)"
						}, i(a, n)
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
				}(h.a)
			}, function(e, t, n) {
				var r = n(18),
					i = n(21),
					a = n(70),
					o = n(108),
					s = i((function(e) {
						return e.push(void 0, a), r(o, void 0, e)
					}));
				e.exports = s
			}, function(e, t, n) {
				"use strict";

				function r(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}

				function i(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = n(15),
					o = n.n(a),
					s = n(40),
					u = n.n(s),
					c = n(36),
					l = n(37),
					f = n(39),
					d = n(38),
					h = function() {
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
					p = {
						DisplaySize: l.a,
						Toolbar: f.a,
						Resize: d.a
					},
					_ = function e(t) {
						var n = this,
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						i(this, e), this.initializeModules = function() {
							n.removeModules(), n.modules = n.moduleClasses.map((function(e) {
								return new(p[e] || e)(n)
							})), n.modules.forEach((function(e) {
								e.onCreate()
							})), n.onUpdate()
						}, this.onUpdate = function() {
							n.repositionElements(), n.modules.forEach((function(e) {
								e.onUpdate()
							}))
						}, this.removeModules = function() {
							n.modules.forEach((function(e) {
								e.onDestroy()
							})), n.modules = []
						}, this.handleClick = function(e) {
							if (e.target && e.target.tagName && "IMG" === e.target.tagName.toUpperCase()) {
								if (n.img === e.target) return;
								n.img && n.hide(), n.show(e.target), e.preventDefault()
							} else n.img && n.hide()
						}, this.handleScroll = function(e) {
							n.hide()
						}, this.show = function(e) {
							n.img = e, n.showOverlay(), n.initializeModules()
						}, this.showOverlay = function() {
							n.overlay && n.hideOverlay(), n.quill.setSelection(null), n.setUserSelect("none"), document.addEventListener("keyup", n.checkImage, !0), n.quill.root.addEventListener("input", n.checkImage, !0), n.overlay = document.createElement("div"), Object.assign(n.overlay.style, n.options.overlayStyles), n.quill.root.parentNode.appendChild(n.overlay), n.repositionElements()
						}, this.hideOverlay = function() {
							n.overlay && (n.quill.root.parentNode.removeChild(n.overlay), n.overlay = void 0, document.removeEventListener("keyup", n.checkImage), n.quill.root.removeEventListener("input", n.checkImage), n.setUserSelect(""))
						}, this.repositionElements = function() {
							if (n.overlay && n.img) {
								var e = n.quill.root.parentNode,
									t = n.img.getBoundingClientRect(),
									r = e.getBoundingClientRect();
								Object.assign(n.overlay.style, {
									left: t.left - r.left - 1 + e.scrollLeft + "px",
									top: t.top - r.top + e.scrollTop + "px",
									width: t.width + "px",
									height: t.height + "px"
								})
							}
						}, this.hide = function() {
							n.hideOverlay(), n.removeModules(), n.img = void 0
						}, this.setUserSelect = function(e) {
							["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach((function(t) {
								n.quill.root.style[t] = e, document.documentElement.style[t] = e
							}))
						}, this.checkImage = function(e) {
							n.img && (46 != e.keyCode && 8 != e.keyCode || (window.Quill || o.a).find(n.img).deleteAt(0), n.hide())
						}, this.quill = t;
						var a = !1;
						r.modules && (a = r.modules.slice()), this.options = u()({}, r, c.a), !1 !== a && (this.options.modules = a), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.addEventListener("click", this.handleClick, !1), this.quill.root.addEventListener("mscontrolselect", this.handleClick, !1), this.quill.root.addEventListener("scroll", this.handleScroll, !1), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = []
					};
				if (t.default = _, window.Quill) {
					var m = ["alt", "height", "width", "style"],
						b = function(e) {
							function t() {
								return i(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
							}(t, e), h(t, [{
								key: "format",
								value: function(e, n) {
									m.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : function e(t, n, r) {
										null === t && (t = Function.prototype);
										var i = Object.getOwnPropertyDescriptor(t, n);
										if (void 0 === i) {
											var a = Object.getPrototypeOf(t);
											return null === a ? void 0 : e(a, n, r)
										}
										if ("value" in i) return i.value;
										var o = i.get;
										return void 0 !== o ? o.call(r) : void 0
									}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
								}
							}], [{
								key: "formats",
								value: function(e) {
									return m.reduce((function(t, n) {
										return e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t
									}), {})
								}
							}]), t
						}(window.Quill.import("formats/image"));
					window.Quill.register(b, !0), "function" != typeof Object.assign && (Object.assign = function(e) {
						if (null == e) throw new TypeError("Cannot convert undefined or null to object");
						e = Object(e);
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							if (null != n)
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					}), window.Quill.register("modules/imageResize", _)
				}
			}, function(e, t, n) {
				"use strict";

				function r(e) {
					var t = e.length;
					if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var n = e.indexOf("=");
					return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
				}

				function i(e) {
					return o[e >> 18 & 63] + o[e >> 12 & 63] + o[e >> 6 & 63] + o[63 & e]
				}

				function a(e, t, n) {
					for (var r, a = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(i(r));
					return a.join("")
				}
				t.byteLength = function(e) {
					var t = r(e),
						n = t[0],
						i = t[1];
					return 3 * (n + i) / 4 - i
				}, t.toByteArray = function(e) {
					for (var t, n = r(e), i = n[0], a = n[1], o = new u(function(e, t, n) {
							return 3 * (t + n) / 4 - n
						}(0, i, a)), c = 0, l = a > 0 ? i - 4 : i, f = 0; f < l; f += 4) t = s[e.charCodeAt(f)] << 18 | s[e.charCodeAt(f + 1)] << 12 | s[e.charCodeAt(f + 2)] << 6 | s[e.charCodeAt(f + 3)], o[c++] = t >> 16 & 255, o[c++] = t >> 8 & 255, o[c++] = 255 & t;
					return 2 === a && (t = s[e.charCodeAt(f)] << 2 | s[e.charCodeAt(f + 1)] >> 4, o[c++] = 255 & t), 1 === a && (t = s[e.charCodeAt(f)] << 10 | s[e.charCodeAt(f + 1)] << 4 | s[e.charCodeAt(f + 2)] >> 2, o[c++] = t >> 8 & 255, o[c++] = 255 & t), o
				}, t.fromByteArray = function(e) {
					for (var t, n = e.length, r = n % 3, i = [], s = 0, u = n - r; s < u; s += 16383) i.push(a(e, s, s + 16383 > u ? u : s + 16383));
					return 1 === r ? (t = e[n - 1], i.push(o[t >> 2] + o[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "=")), i.join("")
				};
				for (var o = [], s = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, f = c.length; l < f; ++l) o[l] = c[l], s[c.charCodeAt(l)] = l;
				s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
			}, function(e, t, n) {
				"use strict";
				(function(e) {
					function r() {
						return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
					}

					function i(e, t) {
						if (r() < t) throw new RangeError("Invalid typed array length");
						return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = a.prototype : (null === e && (e = new a(t)), e.length = t), e
					}

					function a(e, t, n) {
						if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);
						if ("number" == typeof e) {
							if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
							return u(this, e)
						}
						return o(this, e, t, n)
					}

					function o(e, t, n, r) {
						if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
						return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
							if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
							if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
							return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), a.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = a.prototype : e = c(e, t), e
						}(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
							if ("string" == typeof n && "" !== n || (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
							var r = 0 | f(t, n),
								o = (e = i(e, r)).write(t, n);
							return o !== r && (e = e.slice(0, o)), e
						}(e, t, n) : function(e, t) {
							if (a.isBuffer(t)) {
								var n = 0 | l(t.length);
								return 0 === (e = i(e, n)).length || t.copy(e, 0, 0, n), e
							}
							if (t) {
								if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
									return e != e
								}(t.length) ? i(e, 0) : c(e, t);
								if ("Buffer" === t.type && j(t.data)) return c(e, t.data)
							}
							throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
						}(e, t)
					}

					function s(e) {
						if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
						if (e < 0) throw new RangeError('"size" argument must not be negative')
					}

					function u(e, t) {
						if (s(t), e = i(e, t < 0 ? 0 : 0 | l(t)), !a.TYPED_ARRAY_SUPPORT)
							for (var n = 0; n < t; ++n) e[n] = 0;
						return e
					}

					function c(e, t) {
						var n = t.length < 0 ? 0 : 0 | l(t.length);
						e = i(e, n);
						for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
						return e
					}

					function l(e) {
						if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
						return 0 | e
					}

					function f(e, t) {
						if (a.isBuffer(e)) return e.length;
						if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
						"string" != typeof e && (e = "" + e);
						var n = e.length;
						if (0 === n) return 0;
						for (var r = !1;;) switch (t) {
							case "ascii":
							case "latin1":
							case "binary":
								return n;
							case "utf8":
							case "utf-8":
							case void 0:
								return B(e).length;
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return 2 * n;
							case "hex":
								return n >>> 1;
							case "base64":
								return N(e).length;
							default:
								if (r) return B(e).length;
								t = ("" + t).toLowerCase(), r = !0
						}
					}

					function d(e, t, n) {
						var r = !1;
						if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
						if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
						if ((n >>>= 0) <= (t >>>= 0)) return "";
						for (e || (e = "utf8");;) switch (e) {
							case "hex":
								return C(this, t, n);
							case "utf8":
							case "utf-8":
								return w(this, t, n);
							case "ascii":
								return E(this, t, n);
							case "latin1":
							case "binary":
								return T(this, t, n);
							case "base64":
								return S(this, t, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return $(this, t, n);
							default:
								if (r) throw new TypeError("Unknown encoding: " + e);
								e = (e + "").toLowerCase(), r = !0
						}
					}

					function h(e, t, n) {
						var r = e[t];
						e[t] = e[n], e[n] = r
					}

					function p(e, t, n, r, i) {
						if (0 === e.length) return -1;
						if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
							if (i) return -1;
							n = e.length - 1
						} else if (n < 0) {
							if (!i) return -1;
							n = 0
						}
						if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, i);
						if ("number" == typeof t) return t &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : _(e, [t], n, r, i);
						throw new TypeError("val must be string, number or Buffer")
					}

					function _(e, t, n, r, i) {
						function a(e, t) {
							return 1 === s ? e[t] : e.readUInt16BE(t * s)
						}
						var o, s = 1,
							u = e.length,
							c = t.length;
						if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
							if (e.length < 2 || t.length < 2) return -1;
							s = 2, u /= 2, c /= 2, n /= 2
						}
						if (i) {
							var l = -1;
							for (o = n; o < u; o++)
								if (a(e, o) === a(t, -1 === l ? 0 : o - l)) {
									if (-1 === l && (l = o), o - l + 1 === c) return l * s
								} else -1 !== l && (o -= o - l), l = -1
						} else
							for (n + c > u && (n = u - c), o = n; o >= 0; o--) {
								for (var f = !0, d = 0; d < c; d++)
									if (a(e, o + d) !== a(t, d)) {
										f = !1;
										break
									} if (f) return o
							}
						return -1
					}

					function m(e, t, n, r) {
						n = Number(n) || 0;
						var i = e.length - n;
						r ? (r = Number(r)) > i && (r = i) : r = i;
						var a = t.length;
						if (a % 2 != 0) throw new TypeError("Invalid hex string");
						r > a / 2 && (r = a / 2);
						for (var o = 0; o < r; ++o) {
							var s = parseInt(t.substr(2 * o, 2), 16);
							if (isNaN(s)) return o;
							e[n + o] = s
						}
						return o
					}

					function b(e, t, n, r) {
						return R(B(t, e.length - n), e, n, r)
					}

					function g(e, t, n, r) {
						return R(function(e) {
							for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
							return t
						}(t), e, n, r)
					}

					function v(e, t, n, r) {
						return g(e, t, n, r)
					}

					function y(e, t, n, r) {
						return R(N(t), e, n, r)
					}

					function A(e, t, n, r) {
						return R(function(e, t) {
							for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
							return a
						}(t, e.length - n), e, n, r)
					}

					function S(e, t, n) {
						return 0 === t && n === e.length ? F.fromByteArray(e) : F.fromByteArray(e.slice(t, n))
					}

					function w(e, t, n) {
						n = Math.min(e.length, n);
						for (var r = [], i = t; i < n;) {
							var a, o, s, u, c = e[i],
								l = null,
								f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
							if (i + f <= n) switch (f) {
								case 1:
									c < 128 && (l = c);
									break;
								case 2:
									128 == (192 & (a = e[i + 1])) && (u = (31 & c) << 6 | 63 & a) > 127 && (l = u);
									break;
								case 3:
									a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (u = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u);
									break;
								case 4:
									a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
							}
							null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
						}
						return function(e) {
							var t = e.length;
							if (t <= H) return String.fromCharCode.apply(String, e);
							for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += H));
							return n
						}(r)
					}

					function E(e, t, n) {
						var r = "";
						n = Math.min(e.length, n);
						for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
						return r
					}

					function T(e, t, n) {
						var r = "";
						n = Math.min(e.length, n);
						for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
						return r
					}

					function C(e, t, n) {
						var r = e.length;
						(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
						for (var i = "", a = t; a < n; ++a) i += D(e[a]);
						return i
					}

					function $(e, t, n) {
						for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
						return i
					}

					function k(e, t, n) {
						if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
						if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
					}

					function O(e, t, n, r, i, o) {
						if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
						if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
						if (n + r > e.length) throw new RangeError("Index out of range")
					}

					function x(e, t, n, r) {
						t < 0 && (t = 65535 + t + 1);
						for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
					}

					function P(e, t, n, r) {
						t < 0 && (t = 4294967295 + t + 1);
						for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
					}

					function M(e, t, n, r, i, a) {
						if (n + r > e.length) throw new RangeError("Index out of range");
						if (n < 0) throw new RangeError("Index out of range")
					}

					function I(e, t, n, r, i) {
						return i || M(e, 0, n, 4), U.write(e, t, n, r, 23, 4), n + 4
					}

					function L(e, t, n, r, i) {
						return i || M(e, 0, n, 8), U.write(e, t, n, r, 52, 8), n + 8
					}

					function D(e) {
						return e < 16 ? "0" + e.toString(16) : e.toString(16)
					}

					function B(e, t) {
						t = t || 1 / 0;
						for (var n, r = e.length, i = null, a = [], o = 0; o < r; ++o) {
							if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
								if (!i) {
									if (n > 56319) {
										(t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									if (o + 1 === r) {
										(t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									i = n;
									continue
								}
								if (n < 56320) {
									(t -= 3) > -1 && a.push(239, 191, 189), i = n;
									continue
								}
								n = 65536 + (i - 55296 << 10 | n - 56320)
							} else i && (t -= 3) > -1 && a.push(239, 191, 189);
							if (i = null, n < 128) {
								if ((t -= 1) < 0) break;
								a.push(n)
							} else if (n < 2048) {
								if ((t -= 2) < 0) break;
								a.push(n >> 6 | 192, 63 & n | 128)
							} else if (n < 65536) {
								if ((t -= 3) < 0) break;
								a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
							} else {
								if (!(n < 1114112)) throw new Error("Invalid code point");
								if ((t -= 4) < 0) break;
								a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
							}
						}
						return a
					}

					function N(e) {
						return F.toByteArray(function(e) {
							if ((e = function(e) {
									return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
								}(e).replace(Y, "")).length < 2) return "";
							for (; e.length % 4 != 0;) e += "=";
							return e
						}(e))
					}

					function R(e, t, n, r) {
						for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
						return i
					}
					var F = n(42),
						U = n(44),
						j = n(45);
					t.Buffer = a, t.SlowBuffer = function(e) {
						return +e != e && (e = 0), a.alloc(+e)
					}, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
						try {
							var e = new Uint8Array(1);
							return e.__proto__ = {
								__proto__: Uint8Array.prototype,
								foo: function() {
									return 42
								}
							}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
						} catch (e) {
							return !1
						}
					}(), t.kMaxLength = r(), a.poolSize = 8192, a._augment = function(e) {
						return e.__proto__ = a.prototype, e
					}, a.from = function(e, t, n) {
						return o(null, e, t, n)
					}, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
						value: null,
						configurable: !0
					})), a.alloc = function(e, t, n) {
						return function(e, t, n, r) {
							return s(t), t <= 0 ? i(e, t) : void 0 !== n ? "string" == typeof r ? i(e, t).fill(n, r) : i(e, t).fill(n) : i(e, t)
						}(null, e, t, n)
					}, a.allocUnsafe = function(e) {
						return u(null, e)
					}, a.allocUnsafeSlow = function(e) {
						return u(null, e)
					}, a.isBuffer = function(e) {
						return !(null == e || !e._isBuffer)
					}, a.compare = function(e, t) {
						if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
						if (e === t) return 0;
						for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
							if (e[i] !== t[i]) {
								n = e[i], r = t[i];
								break
							} return n < r ? -1 : r < n ? 1 : 0
					}, a.isEncoding = function(e) {
						switch (String(e).toLowerCase()) {
							case "hex":
							case "utf8":
							case "utf-8":
							case "ascii":
							case "latin1":
							case "binary":
							case "base64":
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return !0;
							default:
								return !1
						}
					}, a.concat = function(e, t) {
						if (!j(e)) throw new TypeError('"list" argument must be an Array of Buffers');
						if (0 === e.length) return a.alloc(0);
						var n;
						if (void 0 === t)
							for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
						var r = a.allocUnsafe(t),
							i = 0;
						for (n = 0; n < e.length; ++n) {
							var o = e[n];
							if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
							o.copy(r, i), i += o.length
						}
						return r
					}, a.byteLength = f, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
						var e = this.length;
						if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
						for (var t = 0; t < e; t += 2) h(this, t, t + 1);
						return this
					}, a.prototype.swap32 = function() {
						var e = this.length;
						if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
						for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2);
						return this
					}, a.prototype.swap64 = function() {
						var e = this.length;
						if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
						for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4);
						return this
					}, a.prototype.toString = function() {
						var e = 0 | this.length;
						return 0 === e ? "" : 0 === arguments.length ? w(this, 0, e) : d.apply(this, arguments)
					}, a.prototype.equals = function(e) {
						if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
						return this === e || 0 === a.compare(this, e)
					}, a.prototype.inspect = function() {
						var e = "",
							n = t.INSPECT_MAX_BYTES;
						return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
					}, a.prototype.compare = function(e, t, n, r, i) {
						if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
						if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
						if (r >= i && t >= n) return 0;
						if (r >= i) return -1;
						if (t >= n) return 1;
						if (this === e) return 0;
						for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), u = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), f = 0; f < u; ++f)
							if (c[f] !== l[f]) {
								o = c[f], s = l[f];
								break
							} return o < s ? -1 : s < o ? 1 : 0
					}, a.prototype.includes = function(e, t, n) {
						return -1 !== this.indexOf(e, t, n)
					}, a.prototype.indexOf = function(e, t, n) {
						return p(this, e, t, n, !0)
					}, a.prototype.lastIndexOf = function(e, t, n) {
						return p(this, e, t, n, !1)
					}, a.prototype.write = function(e, t, n, r) {
						if (void 0 === t) r = "utf8", n = this.length, t = 0;
						else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
						else {
							if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
							t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
						}
						var i = this.length - t;
						if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
						r || (r = "utf8");
						for (var a = !1;;) switch (r) {
							case "hex":
								return m(this, e, t, n);
							case "utf8":
							case "utf-8":
								return b(this, e, t, n);
							case "ascii":
								return g(this, e, t, n);
							case "latin1":
							case "binary":
								return v(this, e, t, n);
							case "base64":
								return y(this, e, t, n);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return A(this, e, t, n);
							default:
								if (a) throw new TypeError("Unknown encoding: " + r);
								r = ("" + r).toLowerCase(), a = !0
						}
					}, a.prototype.toJSON = function() {
						return {
							type: "Buffer",
							data: Array.prototype.slice.call(this._arr || this, 0)
						}
					};
					var H = 4096;
					a.prototype.slice = function(e, t) {
						var n, r = this.length;
						if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = a.prototype;
						else {
							var i = t - e;
							n = new a(i, void 0);
							for (var o = 0; o < i; ++o) n[o] = this[o + e]
						}
						return n
					}, a.prototype.readUIntLE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
						return r
					}, a.prototype.readUIntBE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
						return r
					}, a.prototype.readUInt8 = function(e, t) {
						return t || k(e, 1, this.length), this[e]
					}, a.prototype.readUInt16LE = function(e, t) {
						return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
					}, a.prototype.readUInt16BE = function(e, t) {
						return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
					}, a.prototype.readUInt32LE = function(e, t) {
						return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
					}, a.prototype.readUInt32BE = function(e, t) {
						return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
					}, a.prototype.readIntLE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
						return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
					}, a.prototype.readIntBE = function(e, t, n) {
						e |= 0, t |= 0, n || k(e, t, this.length);
						for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
						return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
					}, a.prototype.readInt8 = function(e, t) {
						return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
					}, a.prototype.readInt16LE = function(e, t) {
						t || k(e, 2, this.length);
						var n = this[e] | this[e + 1] << 8;
						return 32768 & n ? 4294901760 | n : n
					}, a.prototype.readInt16BE = function(e, t) {
						t || k(e, 2, this.length);
						var n = this[e + 1] | this[e] << 8;
						return 32768 & n ? 4294901760 | n : n
					}, a.prototype.readInt32LE = function(e, t) {
						return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
					}, a.prototype.readInt32BE = function(e, t) {
						return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
					}, a.prototype.readFloatLE = function(e, t) {
						return t || k(e, 4, this.length), U.read(this, e, !0, 23, 4)
					}, a.prototype.readFloatBE = function(e, t) {
						return t || k(e, 4, this.length), U.read(this, e, !1, 23, 4)
					}, a.prototype.readDoubleLE = function(e, t) {
						return t || k(e, 8, this.length), U.read(this, e, !0, 52, 8)
					}, a.prototype.readDoubleBE = function(e, t) {
						return t || k(e, 8, this.length), U.read(this, e, !1, 52, 8)
					}, a.prototype.writeUIntLE = function(e, t, n, r) {
						e = +e, t |= 0, n |= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
						var i = 1,
							a = 0;
						for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
						return t + n
					}, a.prototype.writeUIntBE = function(e, t, n, r) {
						e = +e, t |= 0, n |= 0, r || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
						var i = n - 1,
							a = 1;
						for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
						return t + n
					}, a.prototype.writeUInt8 = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
					}, a.prototype.writeUInt16LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
					}, a.prototype.writeUInt16BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
					}, a.prototype.writeUInt32LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : P(this, e, t, !0), t + 4
					}, a.prototype.writeUInt32BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
					}, a.prototype.writeIntLE = function(e, t, n, r) {
						if (e = +e, t |= 0, !r) {
							var i = Math.pow(2, 8 * n - 1);
							O(this, e, t, n, i - 1, -i)
						}
						var a = 0,
							o = 1,
							s = 0;
						for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
						return t + n
					}, a.prototype.writeIntBE = function(e, t, n, r) {
						if (e = +e, t |= 0, !r) {
							var i = Math.pow(2, 8 * n - 1);
							O(this, e, t, n, i - 1, -i)
						}
						var a = n - 1,
							o = 1,
							s = 0;
						for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
						return t + n
					}, a.prototype.writeInt8 = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
					}, a.prototype.writeInt16LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
					}, a.prototype.writeInt16BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
					}, a.prototype.writeInt32LE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : P(this, e, t, !0), t + 4
					}, a.prototype.writeInt32BE = function(e, t, n) {
						return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
					}, a.prototype.writeFloatLE = function(e, t, n) {
						return I(this, e, t, !0, n)
					}, a.prototype.writeFloatBE = function(e, t, n) {
						return I(this, e, t, !1, n)
					}, a.prototype.writeDoubleLE = function(e, t, n) {
						return L(this, e, t, !0, n)
					}, a.prototype.writeDoubleBE = function(e, t, n) {
						return L(this, e, t, !1, n)
					}, a.prototype.copy = function(e, t, n, r) {
						if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
						if (0 === e.length || 0 === this.length) return 0;
						if (t < 0) throw new RangeError("targetStart out of bounds");
						if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
						if (r < 0) throw new RangeError("sourceEnd out of bounds");
						r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
						var i, o = r - n;
						if (this === e && n < t && t < r)
							for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
						else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
							for (i = 0; i < o; ++i) e[i + t] = this[i + n];
						else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
						return o
					}, a.prototype.fill = function(e, t, n, r) {
						if ("string" == typeof e) {
							if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
								var i = e.charCodeAt(0);
								i < 256 && (e = i)
							}
							if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
							if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
						} else "number" == typeof e && (e &= 255);
						if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
						if (n <= t) return this;
						var o;
						if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
							for (o = t; o < n; ++o) this[o] = e;
						else {
							var s = a.isBuffer(e) ? e : B(new a(e, r).toString()),
								u = s.length;
							for (o = 0; o < n - t; ++o) this[o + t] = s[o % u]
						}
						return this
					};
					var Y = /[^+\/0-9A-Za-z-_]/g
				}).call(t, n(35))
			}, function(e, t) {
				t.read = function(e, t, n, r, i) {
					var a, o, s = 8 * i - r - 1,
						u = (1 << s) - 1,
						c = u >> 1,
						l = -7,
						f = n ? i - 1 : 0,
						d = n ? -1 : 1,
						h = e[t + f];
					for (f += d, a = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; a = 256 * a + e[t + f], f += d, l -= 8);
					for (o = a & (1 << -l) - 1, a >>= -l, l += r; l > 0; o = 256 * o + e[t + f], f += d, l -= 8);
					if (0 === a) a = 1 - c;
					else {
						if (a === u) return o ? NaN : 1 / 0 * (h ? -1 : 1);
						o += Math.pow(2, r), a -= c
					}
					return (h ? -1 : 1) * o * Math.pow(2, a - r)
				}, t.write = function(e, t, n, r, i, a) {
					var o, s, u, c = 8 * a - i - 1,
						l = (1 << c) - 1,
						f = l >> 1,
						d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						h = r ? 0 : a - 1,
						p = r ? 1 : -1,
						_ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
					for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (o++, u /= 2), o + f >= l ? (s = 0, o = l) : o + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8);
					for (o = o << i | s, c += i; c > 0; e[n + h] = 255 & o, h += p, o /= 256, c -= 8);
					e[n + h - p] |= 128 * _
				}
			}, function(e, t) {
				var n = {}.toString;
				e.exports = Array.isArray || function(e) {
					return "[object Array]" == n.call(e)
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
				var i = n(73),
					a = n(74),
					o = n(75),
					s = n(76),
					u = n(77);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
			}, function(e, t, n) {
				function r(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}
				var i = n(87),
					a = n(88),
					o = n(89),
					s = n(90),
					u = n(91);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
			}, function(e, t, n) {
				function r(e) {
					var t = this.__data__ = new i(e);
					this.size = t.size
				}
				var i = n(3),
					a = n(99),
					o = n(100),
					s = n(101),
					u = n(102),
					c = n(103);
				r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, e.exports = r
			}, function(e, t, n) {
				var r = n(1).Uint8Array;
				e.exports = r
			}, function(e, t, n) {
				var r = n(60),
					i = n(29),
					a = n(30),
					o = n(31),
					s = n(25),
					u = n(33),
					c = Object.prototype.hasOwnProperty;
				e.exports = function(e, t) {
					var n = a(e),
						l = !n && i(e),
						f = !n && !l && o(e),
						d = !n && !l && !f && u(e),
						h = n || l || f || d,
						p = h ? r(e.length, String) : [],
						_ = p.length;
					for (var m in e) !t && !c.call(e, m) || h && ("length" == m || f && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, _)) || p.push(m);
					return p
				}
			}, function(e, t, n) {
				var r = n(10),
					i = n(8),
					a = Object.prototype.hasOwnProperty;
				e.exports = function(e, t, n) {
					var o = e[t];
					a.call(e, t) && i(o, n) && (void 0 !== n || t in e) || r(e, t, n)
				}
			}, function(e, t, n) {
				var r = n(0),
					i = Object.create,
					a = function() {
						function e() {}
						return function(t) {
							if (!r(t)) return {};
							if (i) return i(t);
							e.prototype = t;
							var n = new e;
							return e.prototype = void 0, n
						}
					}();
				e.exports = a
			}, function(e, t, n) {
				var r = n(69)();
				e.exports = r
			}, function(e, t, n) {
				var r = n(5),
					i = n(2),
					a = "[object Arguments]";
				e.exports = function(e) {
					return i(e) && r(e) == a
				}
			}, function(e, t, n) {
				var r = n(13),
					i = n(81),
					a = n(0),
					o = n(104),
					s = /^\[object .+?Constructor\]$/,
					u = Function.prototype,
					c = Object.prototype,
					l = u.toString,
					f = c.hasOwnProperty,
					d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
				e.exports = function(e) {
					return !(!a(e) || i(e)) && (r(e) ? d : s).test(o(e))
				}
			}, function(e, t, n) {
				var r = n(5),
					i = n(32),
					a = n(2),
					o = {};
				o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
					return a(e) && i(e.length) && !!o[r(e)]
				}
			}, function(e, t, n) {
				var r = n(0),
					i = n(26),
					a = n(92),
					o = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					if (!r(e)) return a(e);
					var t = i(e),
						n = [];
					for (var s in e)("constructor" != s || !t && o.call(e, s)) && n.push(s);
					return n
				}
			}, function(e, t, n) {
				var r = n(19),
					i = n(63),
					a = n(64),
					o = n(65),
					s = n(78),
					u = n(29),
					c = n(30),
					l = n(106),
					f = n(31),
					d = n(13),
					h = n(0),
					p = n(107),
					_ = n(33),
					m = n(27),
					b = n(110);
				e.exports = function(e, t, n, g, v, y, A) {
					var S = m(e, n),
						w = m(t, n),
						E = A.get(w);
					if (E) r(e, n, E);
					else {
						var T = y ? y(S, w, n + "", e, t, A) : void 0,
							C = void 0 === T;
						if (C) {
							var $ = c(w),
								k = !$ && f(w),
								O = !$ && !k && _(w);
							T = w, $ || k || O ? c(S) ? T = S : l(S) ? T = o(S) : k ? (C = !1, T = i(w, !0)) : O ? (C = !1, T = a(w, !0)) : T = [] : p(w) || u(w) ? (T = S, u(S) ? T = b(S) : (!h(S) || g && d(S)) && (T = s(w))) : C = !1
						}
						C && (A.set(w, T), v(T, w, g, y, A), A.delete(w)), r(e, n, T)
					}
				}
			}, function(e, t, n) {
				var r = n(105),
					i = n(22),
					a = n(28),
					o = i ? function(e, t) {
						return i(e, "toString", {
							configurable: !0,
							enumerable: !1,
							value: r(t),
							writable: !0
						})
					} : a;
				e.exports = o
			}, function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
					return r
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function(t) {
						return e(t)
					}
				}
			}, function(e, t, n) {
				var r = n(49);
				e.exports = function(e) {
					var t = new e.constructor(e.byteLength);
					return new r(t).set(new r(e)), t
				}
			}, function(e, t, n) {
				(function(e) {
					var r = n(1),
						i = "object" == typeof t && t && !t.nodeType && t,
						a = i && "object" == typeof e && e && !e.nodeType && e,
						o = a && a.exports === i ? r.Buffer : void 0,
						s = o ? o.allocUnsafe : void 0;
					e.exports = function(e, t) {
						if (t) return e.slice();
						var n = e.length,
							r = s ? s(n) : new e.constructor(n);
						return e.copy(r), r
					}
				}).call(t, n(14)(e))
			}, function(e, t, n) {
				var r = n(62);
				e.exports = function(e, t) {
					var n = t ? r(e.buffer) : e.buffer;
					return new e.constructor(n, e.byteOffset, e.length)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					var n = -1,
						r = e.length;
					for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
					return t
				}
			}, function(e, t, n) {
				var r = n(51),
					i = n(10);
				e.exports = function(e, t, n, a) {
					var o = !n;
					n || (n = {});
					for (var s = -1, u = t.length; ++s < u;) {
						var c = t[s],
							l = a ? a(n[c], e[c], c, n, e) : void 0;
						void 0 === l && (l = e[c]), o ? i(n, c, l) : r(n, c, l)
					}
					return n
				}
			}, function(e, t, n) {
				var r = n(1)["__core-js_shared__"];
				e.exports = r
			}, function(e, t, n) {
				var r = n(21),
					i = n(79);
				e.exports = function(e) {
					return r((function(t, n) {
						var r = -1,
							a = n.length,
							o = a > 1 ? n[a - 1] : void 0,
							s = a > 2 ? n[2] : void 0;
						for (o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
							var u = n[r];
							u && e(t, u, r, o)
						}
						return t
					}))
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function(t, n, r) {
						for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
							var u = o[e ? s : ++i];
							if (!1 === n(a[u], u, a)) break
						}
						return t
					}
				}
			}, function(e, t, n) {
				var r = n(20),
					i = n(0);
				e.exports = function e(t, n, a, o, s, u) {
					return i(t) && i(n) && (u.set(n, t), r(t, n, void 0, e, u), u.delete(n)), t
				}
			}, function(e, t, n) {
				var r = n(17),
					i = Object.prototype,
					a = i.hasOwnProperty,
					o = i.toString,
					s = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					var t = a.call(e, s),
						n = e[s];
					try {
						e[s] = void 0;
						var r = !0
					} catch (e) {}
					var i = o.call(e);
					return r && (t ? e[s] = n : delete e[s]), i
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					return null == e ? void 0 : e[t]
				}
			}, function(e, t, n) {
				var r = n(7);
				e.exports = function() {
					this.__data__ = r ? r(null) : {}, this.size = 0
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= t ? 1 : 0, t
				}
			}, function(e, t, n) {
				var r = n(7),
					i = "__lodash_hash_undefined__",
					a = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					if (r) {
						var n = t[e];
						return n === i ? void 0 : n
					}
					return a.call(t, e) ? t[e] : void 0
				}
			}, function(e, t, n) {
				var r = n(7),
					i = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					return r ? void 0 !== t[e] : i.call(t, e)
				}
			}, function(e, t, n) {
				var r = n(7),
					i = "__lodash_hash_undefined__";
				e.exports = function(e, t) {
					var n = this.__data__;
					return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
				}
			}, function(e, t, n) {
				var r = n(52),
					i = n(24),
					a = n(26);
				e.exports = function(e) {
					return "function" != typeof e.constructor || a(e) ? {} : r(i(e))
				}
			}, function(e, t, n) {
				var r = n(8),
					i = n(12),
					a = n(25),
					o = n(0);
				e.exports = function(e, t, n) {
					if (!o(n)) return !1;
					var s = typeof t;
					return !!("number" == s ? i(n) && a(t, n.length) : "string" == s && t in n) && r(n[t], e)
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = typeof e;
					return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
				}
			}, function(e, t, n) {
				var r = n(67),
					i = function() {
						var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
						return e ? "Symbol(src)_1." + e : ""
					}();
				e.exports = function(e) {
					return !!i && i in e
				}
			}, function(e, t) {
				e.exports = function() {
					this.__data__ = [], this.size = 0
				}
			}, function(e, t, n) {
				var r = n(4),
					i = Array.prototype.splice;
				e.exports = function(e) {
					var t = this.__data__,
						n = r(t, e);
					return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					var t = this.__data__,
						n = r(t, e);
					return n < 0 ? void 0 : t[n][1]
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e) {
					return r(this.__data__, e) > -1
				}
			}, function(e, t, n) {
				var r = n(4);
				e.exports = function(e, t) {
					var n = this.__data__,
						i = r(n, e);
					return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
				}
			}, function(e, t, n) {
				var r = n(46),
					i = n(3),
					a = n(16);
				e.exports = function() {
					this.size = 0, this.__data__ = {
						hash: new r,
						map: new(a || i),
						string: new r
					}
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					var t = r(this, e).delete(e);
					return this.size -= t ? 1 : 0, t
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					return r(this, e).get(e)
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e) {
					return r(this, e).has(e)
				}
			}, function(e, t, n) {
				var r = n(6);
				e.exports = function(e, t) {
					var n = r(this, e),
						i = n.size;
					return n.set(e, t), this.size += n.size == i ? 0 : 1, this
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = [];
					if (null != e)
						for (var n in Object(e)) t.push(n);
					return t
				}
			}, function(e, t, n) {
				(function(e) {
					var r = n(23),
						i = "object" == typeof t && t && !t.nodeType && t,
						a = i && "object" == typeof e && e && !e.nodeType && e,
						o = a && a.exports === i && r.process,
						s = function() {
							try {
								return a && a.require && a.require("util").types || o && o.binding && o.binding("util")
							} catch (e) {}
						}();
					e.exports = s
				}).call(t, n(14)(e))
			}, function(e, t) {
				var n = Object.prototype.toString;
				e.exports = function(e) {
					return n.call(e)
				}
			}, function(e, t) {
				e.exports = function(e, t) {
					return function(n) {
						return e(t(n))
					}
				}
			}, function(e, t, n) {
				var r = n(18),
					i = Math.max;
				e.exports = function(e, t, n) {
					return t = i(void 0 === t ? e.length - 1 : t, 0),
						function() {
							for (var a = arguments, o = -1, s = i(a.length - t, 0), u = Array(s); ++o < s;) u[o] = a[t + o];
							o = -1;
							for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
							return c[t] = n(u), r(e, this, c)
						}
				}
			}, function(e, t, n) {
				var r = n(59),
					i = n(98)(r);
				e.exports = i
			}, function(e, t) {
				var n = 800,
					r = 16,
					i = Date.now;
				e.exports = function(e) {
					var t = 0,
						a = 0;
					return function() {
						var o = i(),
							s = r - (o - a);
						if (a = o, s > 0) {
							if (++t >= n) return arguments[0]
						} else t = 0;
						return e.apply(void 0, arguments)
					}
				}
			}, function(e, t, n) {
				var r = n(3);
				e.exports = function() {
					this.__data__ = new r, this.size = 0
				}
			}, function(e, t) {
				e.exports = function(e) {
					var t = this.__data__,
						n = t.delete(e);
					return this.size = t.size, n
				}
			}, function(e, t) {
				e.exports = function(e) {
					return this.__data__.get(e)
				}
			}, function(e, t) {
				e.exports = function(e) {
					return this.__data__.has(e)
				}
			}, function(e, t, n) {
				var r = n(3),
					i = n(16),
					a = n(47),
					o = 200;
				e.exports = function(e, t) {
					var n = this.__data__;
					if (n instanceof r) {
						var s = n.__data__;
						if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
						n = this.__data__ = new a(s)
					}
					return n.set(e, t), this.size = n.size, this
				}
			}, function(e, t) {
				var n = Function.prototype.toString;
				e.exports = function(e) {
					if (null != e) {
						try {
							return n.call(e)
						} catch (e) {}
						try {
							return e + ""
						} catch (e) {}
					}
					return ""
				}
			}, function(e, t) {
				e.exports = function(e) {
					return function() {
						return e
					}
				}
			}, function(e, t, n) {
				var r = n(12),
					i = n(2);
				e.exports = function(e) {
					return i(e) && r(e)
				}
			}, function(e, t, n) {
				var r = n(5),
					i = n(24),
					a = n(2),
					o = "[object Object]",
					s = Function.prototype,
					u = Object.prototype,
					c = s.toString,
					l = u.hasOwnProperty,
					f = c.call(Object);
				e.exports = function(e) {
					if (!a(e) || r(e) != o) return !1;
					var t = i(e);
					if (null === t) return !0;
					var n = l.call(t, "constructor") && t.constructor;
					return "function" == typeof n && n instanceof n && c.call(n) == f
				}
			}, function(e, t, n) {
				var r = n(20),
					i = n(68)((function(e, t, n, i) {
						r(e, t, n, i)
					}));
				e.exports = i
			}, function(e, t) {
				e.exports = function() {
					return !1
				}
			}, function(e, t, n) {
				var r = n(66),
					i = n(34);
				e.exports = function(e) {
					return r(e, i(e))
				}
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'
			}, function(e, t) {
				e.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'
			}])
		},
		"9e64": function(e, t, n) {
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
			}), t.WindowOpacitySelectBox = void 0;
			var i = n("cb76"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.config = n.mergeConfig(t, {
							cssClasses: ["ui-subtitlesettingswindowopacityselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addItem(null, a.i18n.getLocalizer("default")), this.addItem("100", a.i18n.getLocalizer("percent", {
							value: 100
						})), this.addItem("75", a.i18n.getLocalizer("percent", {
							value: 75
						})), this.addItem("50", a.i18n.getLocalizer("percent", {
							value: 50
						})), this.addItem("25", a.i18n.getLocalizer("percent", {
							value: 25
						})), this.addItem("0", a.i18n.getLocalizer("percent", {
							value: 0
						})), this.onItemSelected.subscribe((function(e, t) {
							r.settingsManager.windowOpacity.value = t, r.settingsManager.windowOpacity.isSet() ? r.settingsManager.windowColor.isSet() || (r.settingsManager.windowColor.value = "black") : r.settingsManager.windowColor.clear()
						})), this.settingsManager.windowOpacity.onChanged.subscribe((function(e, t) {
							r.selectItem(t.value)
						})), this.settingsManager.windowOpacity.isSet() && this.selectItem(this.settingsManager.windowOpacity.value)
					}, t
				}(i.SubtitleSettingSelectBox);
			t.WindowOpacitySelectBox = o
		},
		"9e69": function(e, t, n) {
			var r = n("2b3e").Symbol;
			e.exports = r
		},
		"9ed3": function(e, t, n) {
			"use strict";
			var r = n("ae93").IteratorPrototype,
				i = n("7c73"),
				a = n("5c6c"),
				o = n("d44e"),
				s = n("3f8c"),
				u = function() {
					return this
				};
			e.exports = function(e, t, n) {
				var c = t + " Iterator";
				return e.prototype = i(r, {
					next: a(1, n)
				}), o(e, c, !1, !0), s[c] = u, e
			}
		},
		"9f26": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
					n = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i];
				e.defineLocale("fr", {
					months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
					monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
					monthsRegex: t,
					monthsShortRegex: t,
					monthsStrictRegex: /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
					monthsShortStrictRegex: /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
					monthsParse: n,
					longMonthsParse: n,
					shortMonthsParse: n,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Aujourdâ€™hui Ã ] LT",
						nextDay: "[Demain Ã ] LT",
						nextWeek: "dddd [Ã ] LT",
						lastDay: "[Hier Ã ] LT",
						lastWeek: "dddd [dernier Ã ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dans %s",
						past: "il y a %s",
						s: "quelques secondes",
						ss: "%d secondes",
						m: "une minute",
						mm: "%d minutes",
						h: "une heure",
						hh: "%d heures",
						d: "un jour",
						dd: "%d jours",
						w: "une semaine",
						ww: "%d semaines",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
					ordinal: function(e, t) {
						switch (t) {
							case "D":
								return e + (1 === e ? "er" : "");
							default:
							case "M":
							case "Q":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"9f27": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StorageUtils = void 0,
				function(e) {
					var t;

					function n(t, n) {
						e.hasLocalStorage() && window.localStorage.setItem(t, n)
					}

					function r(t) {
						return e.hasLocalStorage() ? window.localStorage.getItem(t) : null
					}
					e.hasLocalStorage = function() {
						if (t) return t;
						var e = {
							length: 0
						};
						try {
							e = window.localStorage;
							var n = "__storage_test__";
							e.setItem(n, n), e.removeItem(n), t = !0
						} catch (n) {
							t = n instanceof DOMException && (22 === n.code || 1014 === n.code || "QuotaExceededError" === n.name || "NS_ERROR_DOM_QUOTA_REACHED" === n.name) && 0 !== e.length
						}
						return t
					}, e.setItem = n, e.getItem = r, e.setObject = function(t, r) {
						e.hasLocalStorage() && n(t, JSON.stringify(r))
					}, e.getObject = function(t) {
						if (e.hasLocalStorage()) {
							var n = r(t);
							if (t) return JSON.parse(n)
						}
						return null
					}
				}(t.StorageUtils || (t.StorageUtils = {}))
		},
		"9f7f": function(e, t, n) {
			"use strict";
			var r = n("d039");

			function i(e, t) {
				return RegExp(e, t)
			}
			t.UNSUPPORTED_Y = r((function() {
				var e = i("a", "y");
				return e.lastIndex = 2, null != e.exec("abcd")
			})), t.BROKEN_CARET = r((function() {
				var e = i("^r", "gy");
				return e.lastIndex = 2, null != e.exec("str")
			}))
		},
		a078: function(e, t, n) {
			var r = n("7b0b"),
				i = n("50c4"),
				a = n("35a1"),
				o = n("e95a"),
				s = n("0366"),
				u = n("ebb5").aTypedArrayConstructor;
			e.exports = function(e) {
				var t, n, c, l, f, d, h = r(e),
					p = arguments.length,
					_ = p > 1 ? arguments[1] : void 0,
					m = void 0 !== _,
					b = a(h);
				if (null != b && !o(b))
					for (d = (f = b.call(h)).next, h = []; !(l = d.call(f)).done;) h.push(l.value);
				for (m && p > 2 && (_ = s(_, arguments[2], 2)), n = i(h.length), c = new(u(this))(n), t = 0; n > t; t++) c[t] = m ? _(h[t], t) : h[t];
				return c
			}
		},
		a15b: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("44ad"),
				a = n("fc6a"),
				o = n("a640"),
				s = [].join,
				u = i != Object,
				c = o("join", ",");
			r({
				target: "Array",
				proto: !0,
				forced: u || !c
			}, {
				join: function(e) {
					return s.call(a(this), void 0 === e ? "," : e)
				}
			})
		},
		a1f0: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("9ed3"),
				a = n("1d80"),
				o = n("50c4"),
				s = n("1c0b"),
				u = n("825a"),
				c = n("c6b6"),
				l = n("44e7"),
				f = n("ad6d"),
				d = n("9112"),
				h = n("d039"),
				p = n("b622"),
				_ = n("4840"),
				m = n("8aa5"),
				b = n("69f3"),
				g = n("c430"),
				v = p("matchAll"),
				y = "RegExp String",
				A = y + " Iterator",
				S = b.set,
				w = b.getterFor(A),
				E = RegExp.prototype,
				T = E.exec,
				C = "".matchAll,
				$ = !!C && !h((function() {
					"a".matchAll(/./)
				})),
				k = i((function(e, t, n, r) {
					S(this, {
						type: A,
						regexp: e,
						string: t,
						global: n,
						unicode: r,
						done: !1
					})
				}), y, (function() {
					var e = w(this);
					if (e.done) return {
						value: void 0,
						done: !0
					};
					var t = e.regexp,
						n = e.string,
						r = function(e, t) {
							var n, r = e.exec;
							if ("function" == typeof r) {
								if ("object" != typeof(n = r.call(e, t))) throw TypeError("Incorrect exec result");
								return n
							}
							return T.call(e, t)
						}(t, n);
					return null === r ? {
						value: void 0,
						done: e.done = !0
					} : e.global ? ("" == String(r[0]) && (t.lastIndex = m(n, o(t.lastIndex), e.unicode)), {
						value: r,
						done: !1
					}) : (e.done = !0, {
						value: r,
						done: !1
					})
				})),
				O = function(e) {
					var t, n, r, i, a, s, c = u(this),
						l = String(e);
					return t = _(c, RegExp), void 0 === (n = c.flags) && c instanceof RegExp && !("flags" in E) && (n = f.call(c)), r = void 0 === n ? "" : String(n), i = new t(t === RegExp ? c.source : c, r), a = !!~r.indexOf("g"), s = !!~r.indexOf("u"), i.lastIndex = o(c.lastIndex), new k(i, l, a, s)
				};
			r({
				target: "String",
				proto: !0,
				forced: $
			}, {
				matchAll: function(e) {
					var t, n, r, i = a(this);
					if (null != e) {
						if (l(e) && !~String(a("flags" in E ? e.flags : f.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
						if ($) return C.apply(i, arguments);
						if (void 0 === (n = e[v]) && g && "RegExp" == c(e) && (n = O), null != n) return s(n).call(e, i)
					} else if ($) return C.apply(i, arguments);
					return t = String(i), r = new RegExp(e, "g"), g ? O.call(r, t) : r[v](t)
				}
			}), g || v in E || d(E, v, O)
		},
		a2bf: function(e, t, n) {
			"use strict";
			var r = n("e8b5"),
				i = n("50c4"),
				a = n("0366"),
				o = function(e, t, n, s, u, c, l, f) {
					for (var d, h = u, p = 0, _ = !!l && a(l, f, 3); p < s;) {
						if (p in n) {
							if (d = _ ? _(n[p], p, t) : n[p], c > 0 && r(d)) h = o(e, t, d, i(d.length), h, c - 1) - 1;
							else {
								if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
								e[h] = d
							}
							h++
						}
						p++
					}
					return h
				};
			e.exports = o
		},
		a2cb: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = void 0, t.version = "3.38.0";
			var r = n("6ec2");
			Object.defineProperty(t, "UIManager", {
				enumerable: !0,
				get: function() {
					return r.UIManager
				}
			}), Object.defineProperty(t, "UIInstanceManager", {
				enumerable: !0,
				get: function() {
					return r.UIInstanceManager
				}
			});
			var i = n("d659");
			Object.defineProperty(t, "UIFactory", {
				enumerable: !0,
				get: function() {
					return i.UIFactory
				}
			});
			var a = n("baca");
			Object.defineProperty(t, "DemoFactory", {
				enumerable: !0,
				get: function() {
					return a.DemoFactory
				}
			});
			var o = n("a341");
			Object.defineProperty(t, "ArrayUtils", {
				enumerable: !0,
				get: function() {
					return o.ArrayUtils
				}
			});
			var s = n("0c29");
			Object.defineProperty(t, "StringUtils", {
				enumerable: !0,
				get: function() {
					return s.StringUtils
				}
			});
			var u = n("4344");
			Object.defineProperty(t, "PlayerUtils", {
				enumerable: !0,
				get: function() {
					return u.PlayerUtils
				}
			});
			var c = n("f109");
			Object.defineProperty(t, "UIUtils", {
				enumerable: !0,
				get: function() {
					return c.UIUtils
				}
			});
			var l = n("8e8b");
			Object.defineProperty(t, "BrowserUtils", {
				enumerable: !0,
				get: function() {
					return l.BrowserUtils
				}
			});
			var f = n("9f27");
			Object.defineProperty(t, "StorageUtils", {
				enumerable: !0,
				get: function() {
					return f.StorageUtils
				}
			});
			var d = n("b57d");
			Object.defineProperty(t, "ErrorUtils", {
				enumerable: !0,
				get: function() {
					return d.ErrorUtils
				}
			});
			var h = n("48da");
			Object.defineProperty(t, "Button", {
				enumerable: !0,
				get: function() {
					return h.Button
				}
			});
			var p = n("ac0e");
			Object.defineProperty(t, "ControlBar", {
				enumerable: !0,
				get: function() {
					return p.ControlBar
				}
			});
			var _ = n("61c8");
			Object.defineProperty(t, "FullscreenToggleButton", {
				enumerable: !0,
				get: function() {
					return _.FullscreenToggleButton
				}
			});
			var m = n("ab39");
			Object.defineProperty(t, "HugePlaybackToggleButton", {
				enumerable: !0,
				get: function() {
					return m.HugePlaybackToggleButton
				}
			});
			var b = n("b10a");
			Object.defineProperty(t, "PlaybackTimeLabel", {
				enumerable: !0,
				get: function() {
					return b.PlaybackTimeLabel
				}
			}), Object.defineProperty(t, "PlaybackTimeLabelMode", {
				enumerable: !0,
				get: function() {
					return b.PlaybackTimeLabelMode
				}
			});
			var g = n("6811");
			Object.defineProperty(t, "PlaybackToggleButton", {
				enumerable: !0,
				get: function() {
					return g.PlaybackToggleButton
				}
			});
			var v = n("fb10");
			Object.defineProperty(t, "SeekBar", {
				enumerable: !0,
				get: function() {
					return v.SeekBar
				}
			});
			var y = n("a92a");
			Object.defineProperty(t, "SelectBox", {
				enumerable: !0,
				get: function() {
					return y.SelectBox
				}
			});
			var A = n("7471");
			Object.defineProperty(t, "ItemSelectionList", {
				enumerable: !0,
				get: function() {
					return A.ItemSelectionList
				}
			});
			var S = n("1040");
			Object.defineProperty(t, "SettingsPanel", {
				enumerable: !0,
				get: function() {
					return S.SettingsPanel
				}
			});
			var w = n("fb99");
			Object.defineProperty(t, "SettingsToggleButton", {
				enumerable: !0,
				get: function() {
					return w.SettingsToggleButton
				}
			});
			var E = n("30b0");
			Object.defineProperty(t, "ToggleButton", {
				enumerable: !0,
				get: function() {
					return E.ToggleButton
				}
			});
			var T = n("66d4");
			Object.defineProperty(t, "VideoQualitySelectBox", {
				enumerable: !0,
				get: function() {
					return T.VideoQualitySelectBox
				}
			});
			var C = n("f23d");
			Object.defineProperty(t, "VolumeToggleButton", {
				enumerable: !0,
				get: function() {
					return C.VolumeToggleButton
				}
			});
			var $ = n("0558");
			Object.defineProperty(t, "VRToggleButton", {
				enumerable: !0,
				get: function() {
					return $.VRToggleButton
				}
			});
			var k = n("7fa6");
			Object.defineProperty(t, "Watermark", {
				enumerable: !0,
				get: function() {
					return k.Watermark
				}
			});
			var O = n("b491");
			Object.defineProperty(t, "UIContainer", {
				enumerable: !0,
				get: function() {
					return O.UIContainer
				}
			});
			var x = n("fdec");
			Object.defineProperty(t, "Container", {
				enumerable: !0,
				get: function() {
					return x.Container
				}
			});
			var P = n("b8bf");
			Object.defineProperty(t, "Label", {
				enumerable: !0,
				get: function() {
					return P.Label
				}
			});
			var M = n("f1b5");
			Object.defineProperty(t, "AudioQualitySelectBox", {
				enumerable: !0,
				get: function() {
					return M.AudioQualitySelectBox
				}
			});
			var I = n("63e8");
			Object.defineProperty(t, "AudioTrackSelectBox", {
				enumerable: !0,
				get: function() {
					return I.AudioTrackSelectBox
				}
			});
			var L = n("31bb");
			Object.defineProperty(t, "CastStatusOverlay", {
				enumerable: !0,
				get: function() {
					return L.CastStatusOverlay
				}
			});
			var D = n("98d0");
			Object.defineProperty(t, "CastToggleButton", {
				enumerable: !0,
				get: function() {
					return D.CastToggleButton
				}
			});
			var B = n("587c");
			Object.defineProperty(t, "Component", {
				enumerable: !0,
				get: function() {
					return B.Component
				}
			});
			var N = n("37aa");
			Object.defineProperty(t, "ErrorMessageOverlay", {
				enumerable: !0,
				get: function() {
					return N.ErrorMessageOverlay
				}
			});
			var R = n("af03");
			Object.defineProperty(t, "RecommendationOverlay", {
				enumerable: !0,
				get: function() {
					return R.RecommendationOverlay
				}
			});
			var F = n("d8f4");
			Object.defineProperty(t, "SeekBarLabel", {
				enumerable: !0,
				get: function() {
					return F.SeekBarLabel
				}
			});
			var U = n("f00a");
			Object.defineProperty(t, "SubtitleOverlay", {
				enumerable: !0,
				get: function() {
					return U.SubtitleOverlay
				}
			});
			var j = n("ca09");
			Object.defineProperty(t, "SubtitleSelectBox", {
				enumerable: !0,
				get: function() {
					return j.SubtitleSelectBox
				}
			});
			var H = n("1031");
			Object.defineProperty(t, "TitleBar", {
				enumerable: !0,
				get: function() {
					return H.TitleBar
				}
			});
			var Y = n("28f1");
			Object.defineProperty(t, "VolumeControlButton", {
				enumerable: !0,
				get: function() {
					return Y.VolumeControlButton
				}
			});
			var V = n("d1af");
			Object.defineProperty(t, "ClickOverlay", {
				enumerable: !0,
				get: function() {
					return V.ClickOverlay
				}
			});
			var z = n("269c");
			Object.defineProperty(t, "AdSkipButton", {
				enumerable: !0,
				get: function() {
					return z.AdSkipButton
				}
			});
			var Q = n("e12c");
			Object.defineProperty(t, "AdMessageLabel", {
				enumerable: !0,
				get: function() {
					return Q.AdMessageLabel
				}
			});
			var G = n("7bcf");
			Object.defineProperty(t, "AdClickOverlay", {
				enumerable: !0,
				get: function() {
					return G.AdClickOverlay
				}
			});
			var q = n("3d5f");
			Object.defineProperty(t, "PlaybackSpeedSelectBox", {
				enumerable: !0,
				get: function() {
					return q.PlaybackSpeedSelectBox
				}
			});
			var W = n("2408");
			Object.defineProperty(t, "HugeReplayButton", {
				enumerable: !0,
				get: function() {
					return W.HugeReplayButton
				}
			});
			var K = n("f7d3");
			Object.defineProperty(t, "BufferingOverlay", {
				enumerable: !0,
				get: function() {
					return K.BufferingOverlay
				}
			});
			var X = n("7661");
			Object.defineProperty(t, "CastUIContainer", {
				enumerable: !0,
				get: function() {
					return X.CastUIContainer
				}
			});
			var J = n("32ba");
			Object.defineProperty(t, "PlaybackToggleOverlay", {
				enumerable: !0,
				get: function() {
					return J.PlaybackToggleOverlay
				}
			});
			var Z = n("e25d");
			Object.defineProperty(t, "CloseButton", {
				enumerable: !0,
				get: function() {
					return Z.CloseButton
				}
			});
			var ee = n("05fb");
			Object.defineProperty(t, "MetadataLabel", {
				enumerable: !0,
				get: function() {
					return ee.MetadataLabel
				}
			}), Object.defineProperty(t, "MetadataLabelContent", {
				enumerable: !0,
				get: function() {
					return ee.MetadataLabelContent
				}
			});
			var te = n("18b1");
			Object.defineProperty(t, "AirPlayToggleButton", {
				enumerable: !0,
				get: function() {
					return te.AirPlayToggleButton
				}
			});
			var ne = n("8b9a");
			Object.defineProperty(t, "VolumeSlider", {
				enumerable: !0,
				get: function() {
					return ne.VolumeSlider
				}
			});
			var re = n("a9a2");
			Object.defineProperty(t, "PictureInPictureToggleButton", {
				enumerable: !0,
				get: function() {
					return re.PictureInPictureToggleButton
				}
			});
			var ie = n("ac6c");
			Object.defineProperty(t, "Spacer", {
				enumerable: !0,
				get: function() {
					return ie.Spacer
				}
			});
			var ae = n("94d9");
			Object.defineProperty(t, "BackgroundColorSelectBox", {
				enumerable: !0,
				get: function() {
					return ae.BackgroundColorSelectBox
				}
			});
			var oe = n("2502");
			Object.defineProperty(t, "BackgroundOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return oe.BackgroundOpacitySelectBox
				}
			});
			var se = n("65e0");
			Object.defineProperty(t, "CharacterEdgeSelectBox", {
				enumerable: !0,
				get: function() {
					return se.CharacterEdgeSelectBox
				}
			});
			var ue = n("4820");
			Object.defineProperty(t, "FontColorSelectBox", {
				enumerable: !0,
				get: function() {
					return ue.FontColorSelectBox
				}
			});
			var ce = n("7594");
			Object.defineProperty(t, "FontFamilySelectBox", {
				enumerable: !0,
				get: function() {
					return ce.FontFamilySelectBox
				}
			});
			var le = n("673d");
			Object.defineProperty(t, "FontOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return le.FontOpacitySelectBox
				}
			});
			var fe = n("e277");
			Object.defineProperty(t, "FontSizeSelectBox", {
				enumerable: !0,
				get: function() {
					return fe.FontSizeSelectBox
				}
			});
			var de = n("cb76");
			Object.defineProperty(t, "SubtitleSettingSelectBox", {
				enumerable: !0,
				get: function() {
					return de.SubtitleSettingSelectBox
				}
			});
			var he = n("41ef");
			Object.defineProperty(t, "SubtitleSettingsLabel", {
				enumerable: !0,
				get: function() {
					return he.SubtitleSettingsLabel
				}
			});
			var pe = n("49cc");
			Object.defineProperty(t, "WindowColorSelectBox", {
				enumerable: !0,
				get: function() {
					return pe.WindowColorSelectBox
				}
			});
			var _e = n("9e64");
			Object.defineProperty(t, "WindowOpacitySelectBox", {
				enumerable: !0,
				get: function() {
					return _e.WindowOpacitySelectBox
				}
			});
			var me = n("1904");
			Object.defineProperty(t, "SubtitleSettingsResetButton", {
				enumerable: !0,
				get: function() {
					return me.SubtitleSettingsResetButton
				}
			});
			var be = n("1521");
			Object.defineProperty(t, "ListBox", {
				enumerable: !0,
				get: function() {
					return be.ListBox
				}
			});
			var ge = n("4f95");
			Object.defineProperty(t, "SubtitleListBox", {
				enumerable: !0,
				get: function() {
					return ge.SubtitleListBox
				}
			});
			var ve = n("a5ab");
			Object.defineProperty(t, "AudioTrackListBox", {
				enumerable: !0,
				get: function() {
					return ve.AudioTrackListBox
				}
			});
			var ye = n("d82d");
			Object.defineProperty(t, "SettingsPanelPage", {
				enumerable: !0,
				get: function() {
					return ye.SettingsPanelPage
				}
			});
			var Ae = n("9166");
			Object.defineProperty(t, "SettingsPanelPageBackButton", {
				enumerable: !0,
				get: function() {
					return Ae.SettingsPanelPageBackButton
				}
			});
			var Se = n("94a0");
			Object.defineProperty(t, "SettingsPanelPageOpenButton", {
				enumerable: !0,
				get: function() {
					return Se.SettingsPanelPageOpenButton
				}
			});
			var we = n("630a");
			Object.defineProperty(t, "SubtitleSettingsPanelPage", {
				enumerable: !0,
				get: function() {
					return we.SubtitleSettingsPanelPage
				}
			});
			var Ee = n("60b3");
			Object.defineProperty(t, "SettingsPanelItem", {
				enumerable: !0,
				get: function() {
					return Ee.SettingsPanelItem
				}
			}), "function" != typeof Object.assign && (Object.assign = function(e) {
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				e = Object(e);
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					if (null != n)
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			})
		},
		a341: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ArrayUtils = void 0,
				function(e) {
					e.remove = function(e, t) {
						var n = e.indexOf(t);
						return n > -1 ? e.splice(n, 1)[0] : null
					}
				}(t.ArrayUtils || (t.ArrayUtils = {}))
		},
		a356: function(e, t, n) {
			! function(e) {
				"use strict";
				var t = function(e) {
						return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
					},
					n = {
						s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
						m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
						h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
						d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
						M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
						y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
					},
					r = function(e) {
						return function(r, i, a, o) {
							var s = t(r),
								u = n[e][t(r)];
							return 2 === s && (u = u[i ? 0 : 1]), u.replace(/%d/i, r)
						}
					},
					i = ["Ø¬Ø§Ù†ÙÙŠ", "ÙÙŠÙØ±ÙŠ", "Ù…Ø§Ø±Ø³", "Ø£ÙØ±ÙŠÙ„", "Ù…Ø§ÙŠ", "Ø¬ÙˆØ§Ù†", "Ø¬ÙˆÙŠÙ„ÙŠØ©", "Ø£ÙˆØª", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
				e.defineLocale("ar-dz", {
					months: i,
					monthsShort: i,
					weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
					weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
					weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "D/â€M/â€YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /Øµ|Ù…/,
					isPM: function(e) {
						return "Ù…" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "Øµ" : "Ù…"
					},
					calendar: {
						sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "Ø¨Ø¹Ø¯ %s",
						past: "Ù…Ù†Ø° %s",
						s: r("s"),
						ss: r("s"),
						m: r("m"),
						mm: r("m"),
						h: r("h"),
						hh: r("h"),
						d: r("d"),
						dd: r("d"),
						M: r("M"),
						MM: r("M"),
						y: r("y"),
						yy: r("y")
					},
					postformat: function(e) {
						return e.replace(/,/g, "ØŒ")
					},
					week: {
						dow: 0,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		a434: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("23cb"),
				a = n("a691"),
				o = n("50c4"),
				s = n("7b0b"),
				u = n("65f0"),
				c = n("8418"),
				l = n("1dde")("splice"),
				f = Math.max,
				d = Math.min,
				h = 9007199254740991,
				p = "Maximum allowed length exceeded";
			r({
				target: "Array",
				proto: !0,
				forced: !l
			}, {
				splice: function(e, t) {
					var n, r, l, _, m, b, g = s(this),
						v = o(g.length),
						y = i(e, v),
						A = arguments.length;
					if (0 === A ? n = r = 0 : 1 === A ? (n = 0, r = v - y) : (n = A - 2, r = d(f(a(t), 0), v - y)), v + n - r > h) throw TypeError(p);
					for (l = u(g, r), _ = 0; _ < r; _++)(m = y + _) in g && c(l, _, g[m]);
					if (l.length = r, n < r) {
						for (_ = y; _ < v - r; _++) b = _ + n, (m = _ + r) in g ? g[b] = g[m] : delete g[b];
						for (_ = v; _ > v - r + n; _--) delete g[_ - 1]
					} else if (n > r)
						for (_ = v - r; _ > y; _--) b = _ + n - 1, (m = _ + r - 1) in g ? g[b] = g[m] : delete g[b];
					for (_ = 0; _ < n; _++) g[_ + y] = arguments[_ + 2];
					return g.length = v - r + n, l
				}
			})
		},
		a4b4: function(e, t, n) {
			var r = n("342f");
			e.exports = /web0s(?!.*chrome)/i.test(r)
		},
		a4d3: function(e, t, n) {
			"use strict";
			var r = n("23e7"),
				i = n("da84"),
				a = n("d066"),
				o = n("c430"),
				s = n("83ab"),
				u = n("4930"),
				c = n("fdbf"),
				l = n("d039"),
				f = n("5135"),
				d = n("e8b5"),
				h = n("861d"),
				p = n("825a"),
				_ = n("7b0b"),
				m = n("fc6a"),
				b = n("c04e"),
				g = n("5c6c"),
				v = n("7c73"),
				y = n("df75"),
				A = n("241c"),
				S = n("057f"),
				w = n("7418"),
				E = n("06cf"),
				T = n("9bf2"),
				C = n("d1e7"),
				$ = n("9112"),
				k = n("6eeb"),
				O = n("5692"),
				x = n("f772"),
				P = n("d012"),
				M = n("90e3"),
				I = n("b622"),
				L = n("e538"),
				D = n("746f"),
				B = n("d44e"),
				N = n("69f3"),
				R = n("b727").forEach,
				F = x("hidden"),
				U = "Symbol",
				j = "prototype",
				H = I("toPrimitive"),
				Y = N.set,
				V = N.getterFor(U),
				z = Object[j],
				Q = i.Symbol,
				G = a("JSON", "stringify"),
				q = E.f,
				W = T.f,
				K = S.f,
				X = C.f,
				J = O("symbols"),
				Z = O("op-symbols"),
				ee = O("string-to-symbol-registry"),
				te = O("symbol-to-string-registry"),
				ne = O("wks"),
				re = i.QObject,
				ie = !re || !re[j] || !re[j].findChild,
				ae = s && l((function() {
					return 7 != v(W({}, "a", {
						get: function() {
							return W(this, "a", {
								value: 7
							}).a
						}
					})).a
				})) ? function(e, t, n) {
					var r = q(z, t);
					r && delete z[t], W(e, t, n), r && e !== z && W(z, t, r)
				} : W,
				oe = function(e, t) {
					var n = J[e] = v(Q[j]);
					return Y(n, {
						type: U,
						tag: e,
						description: t
					}), s || (n.description = t), n
				},
				se = c ? function(e) {
					return "symbol" == typeof e
				} : function(e) {
					return Object(e) instanceof Q
				},
				ue = function(e, t, n) {
					e === z && ue(Z, t, n), p(e);
					var r = b(t, !0);
					return p(n), f(J, r) ? (n.enumerable ? (f(e, F) && e[F][r] && (e[F][r] = !1), n = v(n, {
						enumerable: g(0, !1)
					})) : (f(e, F) || W(e, F, g(1, {})), e[F][r] = !0), ae(e, r, n)) : W(e, r, n)
				},
				ce = function(e, t) {
					p(e);
					var n = m(t),
						r = y(n).concat(he(n));
					return R(r, (function(t) {
						s && !le.call(n, t) || ue(e, t, n[t])
					})), e
				},
				le = function(e) {
					var t = b(e, !0),
						n = X.call(this, t);
					return !(this === z && f(J, t) && !f(Z, t)) && (!(n || !f(this, t) || !f(J, t) || f(this, F) && this[F][t]) || n)
				},
				fe = function(e, t) {
					var n = m(e),
						r = b(t, !0);
					if (n !== z || !f(J, r) || f(Z, r)) {
						var i = q(n, r);
						return !i || !f(J, r) || f(n, F) && n[F][r] || (i.enumerable = !0), i
					}
				},
				de = function(e) {
					var t = K(m(e)),
						n = [];
					return R(t, (function(e) {
						f(J, e) || f(P, e) || n.push(e)
					})), n
				},
				he = function(e) {
					var t = e === z,
						n = K(t ? Z : m(e)),
						r = [];
					return R(n, (function(e) {
						!f(J, e) || t && !f(z, e) || r.push(J[e])
					})), r
				};
			(u || (k((Q = function() {
				if (this instanceof Q) throw TypeError("Symbol is not a constructor");
				var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
					t = M(e),
					n = function(e) {
						this === z && n.call(Z, e), f(this, F) && f(this[F], t) && (this[F][t] = !1), ae(this, t, g(1, e))
					};
				return s && ie && ae(z, t, {
					configurable: !0,
					set: n
				}), oe(t, e)
			})[j], "toString", (function() {
				return V(this).tag
			})), k(Q, "withoutSetter", (function(e) {
				return oe(M(e), e)
			})), C.f = le, T.f = ue, E.f = fe, A.f = S.f = de, w.f = he, L.f = function(e) {
				return oe(I(e), e)
			}, s && (W(Q[j], "description", {
				configurable: !0,
				get: function() {
					return V(this).description
				}
			}), o || k(z, "propertyIsEnumerable", le, {
				unsafe: !0
			}))), r({
				global: !0,
				wrap: !0,
				forced: !u,
				sham: !u
			}, {
				Symbol: Q
			}), R(y(ne), (function(e) {
				D(e)
			})), r({
				target: U,
				stat: !0,
				forced: !u
			}, {
				for: function(e) {
					var t = String(e);
					if (f(ee, t)) return ee[t];
					var n = Q(t);
					return ee[t] = n, te[n] = t, n
				},
				keyFor: function(e) {
					if (!se(e)) throw TypeError(e + " is not a symbol");
					if (f(te, e)) return te[e]
				},
				useSetter: function() {
					ie = !0
				},
				useSimple: function() {
					ie = !1
				}
			}), r({
				target: "Object",
				stat: !0,
				forced: !u,
				sham: !s
			}, {
				create: function(e, t) {
					return void 0 === t ? v(e) : ce(v(e), t)
				},
				defineProperty: ue,
				defineProperties: ce,
				getOwnPropertyDescriptor: fe
			}), r({
				target: "Object",
				stat: !0,
				forced: !u
			}, {
				getOwnPropertyNames: de,
				getOwnPropertySymbols: he
			}), r({
				target: "Object",
				stat: !0,
				forced: l((function() {
					w.f(1)
				}))
			}, {
				getOwnPropertySymbols: function(e) {
					return w.f(_(e))
				}
			}), G) && r({
				target: "JSON",
				stat: !0,
				forced: !u || l((function() {
					var e = Q();
					return "[null]" != G([e]) || "{}" != G({
						a: e
					}) || "{}" != G(Object(e))
				}))
			}, {
				stringify: function(e, t, n) {
					for (var r, i = [e], a = 1; arguments.length > a;) i.push(arguments[a++]);
					if (r = t, (h(t) || void 0 !== e) && !se(e)) return d(t) || (t = function(e, t) {
						if ("function" == typeof r && (t = r.call(this, e, t)), !se(t)) return t
					}), i[1] = t, G.apply(null, i)
				}
			});
			Q[j][H] || $(Q[j], H, Q[j].valueOf), B(Q, U), P[F] = !0
		},

							}), i.push({
								key: "Range",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), i.push({
								key: "Decode",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), nt({
								data: r,
								additionalKeyValues: i,
								alreadyAppliedFilters: ["/ASCIIHexDecode"],
								objectId: n
							}), ce("endobj"), e.objectNumber = Ge(), ce("<< /ShadingType " + e.type), ce("/ColorSpace /DeviceRGB");
							var a = "/Coords [" + k(parseFloat(e.coords[0])) + " " + k(parseFloat(e.coords[1])) + " ";
							2 === e.type ? a += k(parseFloat(e.coords[2])) + " " + k(parseFloat(e.coords[3])) : a += k(parseFloat(e.coords[2])) + " " + k(parseFloat(e.coords[3])) + " " + k(parseFloat(e.coords[4])) + " " + k(parseFloat(e.coords[5])), ce(a += "]"), e.matrix && ce("/Matrix [" + e.matrix.toString() + "]"), ce("/Function " + n + " 0 R"), ce("/Extend [true true]"), ce(">>"), ce("endobj")
						},
						ft = function(e, t) {
							var n = qe(),
								r = Ge();
							t.push({
								resourcesOid: n,
								objectOid: r
							}), e.objectNumber = r;
							var i = [];
							i.push({
								key: "Type",
								value: "/Pattern"
							}), i.push({
								key: "PatternType",
								value: "1"
							}), i.push({
								key: "PaintType",
								value: "1"
							}), i.push({
								key: "TilingType",
								value: "1"
							}), i.push({
								key: "BBox",
								value: "[" + e.boundingBox.map(k).join(" ") + "]"
							}), i.push({
								key: "XStep",
								value: k(e.xStep)
							}), i.push({
								key: "YStep",
								value: k(e.yStep)
							}), i.push({
								key: "Resources",
								value: n + " 0 R"
							}), e.matrix && i.push({
								key: "Matrix",
								value: "[" + e.matrix.toString() + "]"
							}), nt({
								data: e.stream,
								additionalKeyValues: i,
								objectId: e.objectNumber
							}), ce("endobj")
						},
						dt = function(e) {
							var t;
							for (t in Pe) Pe.hasOwnProperty(t) && (Pe[t] instanceof I ? lt(Pe[t]) : Pe[t] instanceof L && ft(Pe[t], e))
						},
						ht = function(e) {
							for (var t in e.objectNumber = Ge(), ce("<<"), e) switch (t) {
								case "opacity":
									ce("/ca " + N(e[t]));
									break;
								case "stroke-opacity":
									ce("/CA " + N(e[t]))
							}
							ce(">>"), ce("endobj")
						},
						pt = function() {
							var e;
							for (e in Ie) Ie.hasOwnProperty(e) && ht(Ie[e])
						},
						_t = function() {
							for (var e in ce("/XObject <<"), Ue) Ue.hasOwnProperty(e) && Ue[e].objectNumber >= 0 && ce("/" + e + " " + Ue[e].objectNumber + " 0 R");
							Re.publish("putXobjectDict"), ce(">>")
						},
						mt = function() {
							zt.oid = Ge(), ce("<<"), ce("/Filter /Standard"), ce("/V " + zt.v), ce("/R " + zt.r), ce("/U <" + zt.toHexString(zt.U) + ">"), ce("/O <" + zt.toHexString(zt.O) + ">"), ce("/P " + zt.P), ce(">>"), ce("endobj")
						},
						bt = function() {
							for (var e in ce("/Font <<"), ke) ke.hasOwnProperty(e) && (!1 === m || !0 === m && b.hasOwnProperty(e)) && ce("/" + e + " " + ke[e].objectNumber + " 0 R");
							ce(">>")
						},
						gt = function() {
							if (Object.keys(Pe).length > 0) {
								for (var e in ce("/Shading <<"), Pe) Pe.hasOwnProperty(e) && Pe[e] instanceof I && Pe[e].objectNumber >= 0 && ce("/" + e + " " + Pe[e].objectNumber + " 0 R");
								Re.publish("putShadingPatternDict"), ce(">>")
							}
						},
						vt = function(e) {
							if (Object.keys(Pe).length > 0) {
								for (var t in ce("/Pattern <<"), Pe) Pe.hasOwnProperty(t) && Pe[t] instanceof g.TilingPattern && Pe[t].objectNumber >= 0 && Pe[t].objectNumber < e && ce("/" + t + " " + Pe[t].objectNumber + " 0 R");
								Re.publish("putTilingPatternDict"), ce(">>")
							}
						},
						yt = function() {
							if (Object.keys(Ie).length > 0) {
								var e;
								for (e in ce("/ExtGState <<"), Ie) Ie.hasOwnProperty(e) && Ie[e].objectNumber >= 0 && ce("/" + e + " " + Ie[e].objectNumber + " 0 R");
								Re.publish("putGStateDict"), ce(">>")
							}
						},
						At = function(e) {
							We(e.resourcesOid, !0), ce("<<"), ce("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), bt(), gt(), vt(e.objectOid), yt(), _t(), ce(">>"), ce("endobj")
						},
						St = function() {
							var e = [];
							ot(), pt(), ut(), dt(e), Re.publish("putResources"), e.forEach(At), At({
								resourcesOid: Je,
								objectOid: Number.MAX_SAFE_INTEGER
							}), Re.publish("postPutResources")
						},
						wt = function() {
							Re.publish("putAdditionalObjects");
							for (var e = 0; e < re.length; e++) {
								var t = re[e];
								We(t.objId, !0), ce(t.content), ce("endobj")
							}
							Re.publish("postPutAdditionalObjects")
						},
						Et = function(e) {
							Oe[e.fontName] = Oe[e.fontName] || {}, Oe[e.fontName][e.fontStyle] = e.id
						},
						Tt = function(e, t, n, r, i) {
							var a = {
								id: "F" + (Object.keys(ke).length + 1).toString(10),
								postScriptName: e,
								fontName: t,
								fontStyle: n,
								encoding: r,
								isStandardFont: i || !1,
								metadata: {}
							};
							return Re.publish("addFont", {
								font: a,
								instance: this
							}), ke[a.id] = a, Et(a), a.id
						},
						Ct = function(e) {
							for (var t = 0, n = de.length; t < n; t++) {
								var r = Tt.call(this, e[t][0], e[t][1], e[t][2], de[t][3], !0);
								!1 === m && (b[r] = !0);
								var i = e[t][0].split("-");
								Et({
									id: r,
									fontName: i[0],
									fontStyle: i[1] || ""
								})
							}
							Re.publish("addFonts", {
								fonts: ke,
								dictionary: Oe
							})
						},
						$t = function(e) {
							return e.foo = function() {
								try {
									return e.apply(this, arguments)
								} catch (e) {
									var t = e.stack || "";
									~t.indexOf(" at ") && (t = t.split(" at ")[1]);
									var n = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + e.message;
									if (!i.console) throw new Error(n);
									i.console.error(n, e), i.alert && alert(n)
								}
							}, e.foo.bar = e, e.foo
						},
						kt = function(e, t) {
							var n, r, i, a, o, s, u, c, l;
							if (i = (t = t || {}).sourceEncoding || "Unicode", o = t.outputEncoding, (t.autoencode || o) && ke[we].metadata && ke[we].metadata[i] && ke[we].metadata[i].encoding && (a = ke[we].metadata[i].encoding, !o && ke[we].encoding && (o = ke[we].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
								for (u = !1, s = [], n = 0, r = e.length; n < r; n++)(c = o[e.charCodeAt(n)]) ? s.push(String.fromCharCode(c)) : s.push(e[n]), s[n].charCodeAt(0) >> 8 && (u = !0);
								e = s.join("")
							}
							for (n = e.length; void 0 === u && 0 !== n;) e.charCodeAt(n - 1) >> 8 && (u = !0), n--;
							if (!u) return e;
							for (s = t.noBOM ? [] : [254, 255], n = 0, r = e.length; n < r; n++) {
								if ((l = (c = e.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + e + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
								s.push(l), s.push(c - (l << 8))
							}
							return String.fromCharCode.apply(void 0, s)
						},
						Ot = g.__private__.pdfEscape = g.pdfEscape = function(e, t) {
							return kt(e, t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
						},
						xt = g.__private__.beginPage = function(e) {
							ie[++Be] = [], Ne[Be] = {
								objId: 0,
								contentsObjId: 0,
								userUnit: Number(c),
								artBox: null,
								bleedBox: null,
								cropBox: null,
								trimBox: null,
								mediaBox: {
									bottomLeftX: 0,
									bottomLeftY: 0,
									topRightX: Number(e[0]),
									topRightY: Number(e[1])
								}
							}, It(Be), ue(ie[K])
						},
						Pt = function(e, t) {
							var r, i, s;
							switch (n = t || n, "string" == typeof e && (r = S(e.toLowerCase()), Array.isArray(r) && (i = r[0], s = r[1])), Array.isArray(e) && (i = e[0] * Ee, s = e[1] * Ee), isNaN(i) && (i = a[0], s = a[1]), (i > 14400 || s > 14400) && (o.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), i = Math.min(14400, i), s = Math.min(14400, s)), a = [i, s], n.substr(0, 1)) {
								case "l":
									s > i && (a = [s, i]);
									break;
								case "p":
									i > s && (a = [s, i])
							}
							xt(a), dn(fn), ce(yn), 0 !== Cn && ce(Cn + " J"), 0 !== $n && ce($n + " j"), Re.publish("addPage", {
								pageNumber: Be
							})
						},
						Mt = function(e) {
							e > 0 && e <= Be && (ie.splice(e, 1), Ne.splice(e, 1), Be--, K > Be && (K = Be), this.setPage(K))
						},
						It = function(e) {
							e > 0 && e <= Be && (K = e)
						},
						Lt = g.__private__.getNumberOfPages = g.getNumberOfPages = function() {
							return ie.length - 1
						},
						Dt = function(e, t, n) {
							var r, i = void 0;
							return n = n || {}, e = void 0 !== e ? e : ke[we].fontName, t = void 0 !== t ? t : ke[we].fontStyle, r = e.toLowerCase(), void 0 !== Oe[r] && void 0 !== Oe[r][t] ? i = Oe[r][t] : void 0 !== Oe[e] && void 0 !== Oe[e][t] ? i = Oe[e][t] : !1 === n.disableWarning && o.warn("Unable to look up font label for font '" + e + "', '" + t + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = Oe.times[t]) && (i = Oe.times.normal), i
						},
						Bt = g.__private__.putInfo = function() {
							var e = Ge(),
								t = function(e) {
									return e
								};
							for (var n in null !== _ && (t = zt.encryptor(e, 0)), ce("<<"), ce("/Producer (" + Ot(t("jsPDF " + D.version)) + ")"), Se) Se.hasOwnProperty(n) && Se[n] && ce("/" + n.substr(0, 1).toUpperCase() + n.substr(1) + " (" + Ot(t(Se[n])) + ")");
							ce("/CreationDate (" + Ot(t(H)) + ")"), ce(">>"), ce("endobj")
						},
						Nt = g.__private__.putCatalog = function(e) {
							var t = (e = e || {}).rootDictionaryObjId || Xe;
							switch (Ge(), ce("<<"), ce("/Type /Catalog"), ce("/Pages " + t + " 0 R"), pe || (pe = "fullwidth"), pe) {
								case "fullwidth":
									ce("/OpenAction [3 0 R /FitH null]");
									break;
								case "fullheight":
									ce("/OpenAction [3 0 R /FitV null]");
									break;
								case "fullpage":
									ce("/OpenAction [3 0 R /Fit]");
									break;
								case "original":
									ce("/OpenAction [3 0 R /XYZ null null 1]");
									break;
								default:
									var n = "" + pe;
									"%" === n.substr(n.length - 1) && (pe = parseInt(pe) / 100), "number" == typeof pe && ce("/OpenAction [3 0 R /XYZ null null " + N(pe) + "]")
							}
							switch (ve || (ve = "continuous"), ve) {
								case "continuous":
									ce("/PageLayout /OneColumn");
									break;
								case "single":
									ce("/PageLayout /SinglePage");
									break;
								case "two":
								case "twoleft":
									ce("/PageLayout /TwoColumnLeft");
									break;
								case "tworight":
									ce("/PageLayout /TwoColumnRight")
							}
							be && ce("/PageMode /" + be), Re.publish("putCatalog"), ce(">>"), ce("endobj")
						},
						Rt = g.__private__.putTrailer = function() {
							ce("trailer"), ce("<<"), ce("/Size " + (Z + 1)), ce("/Root " + Z + " 0 R"), ce("/Info " + (Z - 1) + " 0 R"), null !== _ && ce("/Encrypt " + zt.oid + " 0 R"), ce("/ID [ <" + Y + "> <" + Y + "> ]"), ce(">>")
						},
						Ft = g.__private__.putHeader = function() {
							ce("%PDF-" + v), ce("%ÂºÃŸÂ¬Ã ")
						},
						Ut = g.__private__.putXRef = function() {
							var e = "0000000000";
							ce("xref"), ce("0 " + (Z + 1)), ce("0000000000 65535 f ");
							for (var t = 1; t <= Z; t++) "function" == typeof ee[t] ? ce((e + ee[t]()).slice(-10) + " 00000 n ") : void 0 !== ee[t] ? ce((e + ee[t]).slice(-10) + " 00000 n ") : ce("0000000000 00000 n ")
						},
						jt = g.__private__.buildDocument = function() {
							se(), ue(te), Re.publish("buildDocument"), Ft(), it(), wt(), St(), null !== _ && mt(), Bt(), Nt();
							var e = ne;
							return Ut(), Rt(), ce("startxref"), ce("" + e), ce("%%EOF"), ue(ie[K]), te.join("\n")
						},
						Ht = g.__private__.getBlob = function(e) {
							return new Blob([fe(e)], {
								type: "application/pdf"
							})
						},
						Yt = g.output = g.__private__.output = $t((function(e, t) {
							switch ("string" == typeof(t = t || {}) ? t = {
								filename: t
							} : t.filename = t.filename || "generated.pdf", e) {
								case void 0:
									return jt();
								case "save":
									g.save(t.filename);
									break;
								case "arraybuffer":
									return fe(jt());
								case "blob":
									return Ht(jt());
								case "bloburi":
								case "bloburl":
									if (void 0 !== i.URL && "function" == typeof i.URL.createObjectURL) return i.URL && i.URL.createObjectURL(Ht(jt())) || void 0;
									o.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
									break;
								case "datauristring":
								case "dataurlstring":
									var n = "",
										r = jt();
									try {
										n = f(r)
									} catch (e) {
										n = f(unescape(encodeURIComponent(r)))
									}
									return "data:application/pdf;filename=" + t.filename + ";base64," + n;
								case "pdfobjectnewwindow":
									if ("[object Window]" === Object.prototype.toString.call(i)) {
										var a = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + (t.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") + '"><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(t) + ");<\/script></body></html>",
											s = i.open();
										return null !== s && s.document.write(a), s
									}
									throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
								case "pdfjsnewwindow":
									if ("[object Window]" === Object.prototype.toString.call(i)) {
										var u = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (t.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + t.filename + '" width="500px" height="400px" /></body></html>',
											c = i.open();
										if (null !== c) {
											c.document.write(u);
											var l = this;
											c.document.documentElement.querySelector("#pdfViewer").onload = function() {
												c.document.title = t.filename, c.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(l.output("bloburl"))
											}
										}
										return c
									}
									throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
								case "dataurlnewwindow":
									if ("[object Window]" !== Object.prototype.toString.call(i)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
									var d = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", t) + '"></iframe></body></html>',
										h = i.open();
									if (null !== h && (h.document.write(d), h.document.title = t.filename), h || "undefined" == typeof safari) return h;
									break;
								case "datauri":
								case "dataurl":
									return i.document.location.href = this.output("datauristring", t);
								default:
									return null
							}
						})),
						Vt = function(e) {
							return !0 === Array.isArray(Fe) && Fe.indexOf(e) > -1
						};
					switch (r) {
						case "pt":
							Ee = 1;
							break;
						case "mm":
							Ee = 72 / 25.4;
							break;
						case "cm":
							Ee = 72 / 2.54;
							break;
						case "in":
							Ee = 72;
							break;
						case "px":
							Ee = 1 == Vt("px_scaling") ? .75 : 96 / 72;
							break;
						case "pc":
						case "em":
							Ee = 12;
							break;
						case "ex":
							Ee = 6;
							break;
						default:
							throw new Error("Invalid unit: " + r)
					}
					var zt = null;
					q(), z();
					var Qt = function(e) {
							return null !== _ ? zt.encryptor(e, 0) : function(e) {
								return e
							}
						},
						Gt = g.__private__.getPageInfo = g.getPageInfo = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
							return {
								objId: Ne[e].objId,
								pageNumber: e,
								pageContext: Ne[e]
							}
						},
						qt = g.__private__.getPageInfoByObjId = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
							for (var t in Ne)
								if (Ne[t].objId === e) break;
							return Gt(t)
						},
						Wt = g.__private__.getCurrentPageInfo = g.getCurrentPageInfo = function() {
							return {
								objId: Ne[K].objId,
								pageNumber: K,
								pageContext: Ne[K]
							}
						};
					g.addPage = function() {
						return Pt.apply(this, arguments), this
					}, g.setPage = function() {
						return It.apply(this, arguments), ue.call(this, ie[K]), this
					}, g.insertPage = function(e) {
						return this.addPage(), this.movePage(K, e), this
					}, g.movePage = function(e, t) {
						var n, r;
						if (e > t) {
							n = ie[e], r = Ne[e];
							for (var i = e; i > t; i--) ie[i] = ie[i - 1], Ne[i] = Ne[i - 1];
							ie[t] = n, Ne[t] = r, this.setPage(t)
						} else if (e < t) {
							n = ie[e], r = Ne[e];
							for (var a = e; a < t; a++) ie[a] = ie[a + 1], Ne[a] = Ne[a + 1];
							ie[t] = n, Ne[t] = r, this.setPage(t)
						}
						return this
					}, g.deletePage = function() {
						return Mt.apply(this, arguments), this
					}, g.__private__.text = g.text = function(e, t, n, r, i) {
						var a, o, s, u, c, l, f, d, h = (r = r || {}).scope || this;
						if ("number" == typeof e && "number" == typeof t && ("string" == typeof n || Array.isArray(n))) {
							var p = n;
							n = t, t = e, e = p
						}
						if (arguments[3] instanceof Ye == 0 ? (s = arguments[4], u = arguments[5], "object" == typeof(f = arguments[3]) && null !== f || ("string" == typeof s && (u = s, s = null), "string" == typeof f && (u = f, f = null), "number" == typeof f && (s = f, f = null), r = {
								flags: f,
								angle: s,
								align: u
							})) : (M("The transform parameter of text() with a Matrix value"), d = i), isNaN(t) || isNaN(n) || null == e) throw new Error("Invalid arguments passed to jsPDF.text");
						if (0 === e.length) return h;
						var _ = "",
							m = !1,
							g = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : ln,
							v = h.internal.scaleFactor;

						function y(e) {
							return e = e.split("\t").join(Array(r.TabLen || 9).join(" ")), Ot(e, f)
						}

						function A(e) {
							for (var t, n = e.concat(), r = [], i = n.length; i--;) "string" == typeof(t = n.shift()) ? r.push(t) : Array.isArray(e) && (1 === t.length || void 0 === t[1] && void 0 === t[2]) ? r.push(t[0]) : r.push([t[0], t[1], t[2]]);
							return r
						}

						function S(e, t) {
							var n;
							if ("string" == typeof e) n = t(e)[0];
							else if (Array.isArray(e)) {
								for (var r, i, a = e.concat(), o = [], s = a.length; s--;) "string" == typeof(r = a.shift()) ? o.push(t(r)[0]) : Array.isArray(r) && "string" == typeof r[0] && (i = t(r[0], r[1], r[2]), o.push([i[0], i[1], i[2]]));
								n = o
							}
							return n
						}
						var T = !1,
							C = !0;
						if ("string" == typeof e) T = !0;
						else if (Array.isArray(e)) {
							var $ = e.concat();
							o = [];
							for (var O, x = $.length; x--;)("string" != typeof(O = $.shift()) || Array.isArray(O) && "string" != typeof O[0]) && (C = !1);
							T = C
						}
						if (!1 === T) throw new Error('Type of text must be string or Array. "' + e + '" is not recognized.');
						"string" == typeof e && (e = e.match(/[\r?\n]/) ? e.split(/\r\n|\r|\n/g) : [e]);
						var P = he / h.internal.scaleFactor,
							I = P * (ln - 1);
						switch (r.baseline) {
							case "bottom":
								n -= I;
								break;
							case "top":
								n += P - I;
								break;
							case "hanging":
								n += P - 2 * I;
								break;
							case "middle":
								n += P / 2 - I
						}
						if ((l = r.maxWidth || 0) > 0 && ("string" == typeof e ? e = h.splitTextToSize(e, l) : "[object Array]" === Object.prototype.toString.call(e) && (e = e.reduce((function(e, t) {
								return e.concat(h.splitTextToSize(t, l))
							}), []))), a = {
								text: e,
								x: t,
								y: n,
								options: r,
								mutex: {
									pdfEscape: Ot,
									activeFontKey: we,
									fonts: ke,
									activeFontSize: he
								}
							}, Re.publish("preProcessText", a), e = a.text, s = (r = a.options).angle, d instanceof Ye == 0 && s && "number" == typeof s) {
							s *= Math.PI / 180, 0 === r.rotationDirection && (s = -s), E === w.ADVANCED && (s = -s);
							var L = Math.cos(s),
								D = Math.sin(s);
							d = new Ye(L, D, -D, L, 0, 0)
						} else s && s instanceof Ye && (d = s);
						E !== w.ADVANCED || d || (d = ze), void 0 !== (c = r.charSpace || En) && (_ += k(F(c)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), r.lang;
						var B = -1,
							N = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
							R = h.internal.getCurrentPageInfo().pageContext;
						switch (N) {
							case 0:
							case !1:
							case "fill":
								B = 0;
								break;
							case 1:
							case !0:
							case "stroke":
								B = 1;
								break;
							case 2:
							case "fillThenStroke":
								B = 2;
								break;
							case 3:
							case "invisible":
								B = 3;
								break;
							case 4:
							case "fillAndAddForClipping":
								B = 4;
								break;
							case 5:
							case "strokeAndAddPathForClipping":
								B = 5;
								break;
							case 6:
							case "fillThenStrokeAndAddToPathForClipping":
								B = 6;
								break;
							case 7:
							case "addToPathForClipping":
								B = 7
						}
						var U = void 0 !== R.usedRenderingMode ? R.usedRenderingMode : -1; - 1 !== B ? _ += B + " Tr\n" : -1 !== U && (_ += "0 Tr\n"), -1 !== B && (R.usedRenderingMode = B), u = r.align || "left";
						var j, H = he * g,
							Y = h.internal.pageSize.getWidth(),
							V = ke[we];
						c = r.charSpace || En, l = r.maxWidth || 0, f = Object.assign({
							autoencode: !0,
							noBOM: !0
						}, r.flags);
						var z = [];
						if ("[object Array]" === Object.prototype.toString.call(e)) {
							var Q;
							o = A(e), "left" !== u && (j = o.map((function(e) {
								return h.getStringUnitWidth(e, {
									font: V,
									charSpace: c,
									fontSize: he,
									doKerning: !1
								}) * he / v
							})));
							var G, q = 0;
							if ("right" === u) {
								t -= j[0], e = [], x = o.length;
								for (var W = 0; W < x; W++) 0 === W ? (G = mn(t), Q = bn(n)) : (G = F(q - j[W]), Q = -H), e.push([o[W], G, Q]), q = j[W]
							} else if ("center" === u) {
								t -= j[0] / 2, e = [], x = o.length;
								for (var K = 0; K < x; K++) 0 === K ? (G = mn(t), Q = bn(n)) : (G = F((q - j[K]) / 2), Q = -H), e.push([o[K], G, Q]), q = j[K]
							} else if ("left" === u) {
								e = [], x = o.length;
								for (var X = 0; X < x; X++) e.push(o[X])
							} else {
								if ("justify" !== u) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
								e = [], x = o.length, l = 0 !== l ? l : Y;
								for (var J = 0; J < x; J++) Q = 0 === J ? bn(n) : -H, G = 0 === J ? mn(t) : 0, J < x - 1 && z.push(k(F((l - j[J]) / (o[J].split(" ").length - 1)))), e.push([o[J], G, Q])
							}
						}
						var Z = "boolean" == typeof r.R2L ? r.R2L : me;
						!0 === Z && (e = S(e, (function(e, t, n) {
							return [e.split("").reverse().join(""), t, n]
						}))), a = {
							text: e,
							x: t,
							y: n,
							options: r,
							mutex: {
								pdfEscape: Ot,
								activeFontKey: we,
								fonts: ke,
								activeFontSize: he
							}
						}, Re.publish("postProcessText", a), e = a.text, m = a.mutex.isHex || !1;
						var ee = ke[we].encoding;
						"WinAnsiEncoding" !== ee && "StandardEncoding" !== ee || (e = S(e, (function(e, t, n) {
							return [y(e), t, n]
						}))), o = A(e), e = [];
						for (var te, ne, re, ie = 0, ae = 1, oe = Array.isArray(o[0]) ? ae : ie, se = "", ue = function(e, t, n) {
								var i = "";
								return n instanceof Ye ? (n = "number" == typeof r.angle ? Ve(n, new Ye(1, 0, 0, 1, e, t)) : Ve(new Ye(1, 0, 0, 1, e, t), n), E === w.ADVANCED && (n = Ve(new Ye(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = k(e) + " " + k(t) + " Td\n", i
							}, le = 0; le < o.length; le++) {
							switch (se = "", oe) {
								case ae:
									re = (m ? "<" : "(") + o[le][0] + (m ? ">" : ")"), te = parseFloat(o[le][1]), ne = parseFloat(o[le][2]);
									break;
								case ie:
									re = (m ? "<" : "(") + o[le] + (m ? ">" : ")"), te = mn(t), ne = bn(n)
							}
							void 0 !== z && void 0 !== z[le] && (se = z[le] + " Tw\n"), 0 === le ? e.push(se + ue(te, ne, d) + re) : oe === ie ? e.push(se + re) : oe === ae && e.push(se + ue(te, ne, d) + re)
						}
						e = oe === ie ? e.join(" Tj\nT* ") : e.join(" Tj\n"), e += " Tj\n";
						var fe = "BT\n/";
						return fe += we + " " + he + " Tf\n", fe += k(he * g) + " TL\n", fe += Sn + "\n", fe += _, fe += e, ce(fe += "ET"), b[we] = !0, h
					};
					var Kt = g.__private__.clip = g.clip = function(e) {
						return ce("evenodd" === e ? "W*" : "W"), this
					};
					g.clipEvenOdd = function() {
						return Kt("evenodd")
					}, g.__private__.discardPath = g.discardPath = function() {
						return ce("n"), this
					};
					var Xt = g.__private__.isValidStyle = function(e) {
						var t = !1;
						return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(e) && (t = !0), t
					};
					g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function(e) {
						return Xt(e) && (p = e), this
					};
					var Jt = g.__private__.getStyle = g.getStyle = function(e) {
							var t = p;
							switch (e) {
								case "D":
								case "S":
									t = "S";
									break;
								case "F":
									t = "f";
									break;
								case "FD":
								case "DF":
									t = "B";
									break;
								case "f":
								case "f*":
								case "B":
								case "B*":
									t = e
							}
							return t
						},
						Zt = g.close = function() {
							return ce("h"), this
						};
					g.stroke = function() {
						return ce("S"), this
					}, g.fill = function(e) {
						return en("f", e), this
					}, g.fillEvenOdd = function(e) {
						return en("f*", e), this
					}, g.fillStroke = function(e) {
						return en("B", e), this
					}, g.fillStrokeEvenOdd = function(e) {
						return en("B*", e), this
					};
					var en = function(e, t) {
							"object" == typeof t ? rn(t, e) : ce(e)
						},
						tn = function(e) {
							null === e || E === w.ADVANCED && void 0 === e || (e = Jt(e), ce(e))
						};

					function nn(e, t, n, r, i) {
						var a = new L(t || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
						a.stream = this.stream;
						var o = e + "$$" + this.cloneIndex++ + "$$";
						return Qe(o, a), a
					}
					var rn = function(e, t) {
							var n = Me[e.key],
								r = Pe[n];
							if (r instanceof I) ce("q"), ce(an(t)), r.gState && g.setGState(r.gState), ce(e.matrix.toString() + " cm"), ce("/" + n + " sh"), ce("Q");
							else if (r instanceof L) {
								var i = new Ye(1, 0, 0, -1, 0, Nn());
								e.matrix && (i = i.multiply(e.matrix || ze), n = nn.call(r, e.key, e.boundingBox, e.xStep, e.yStep, i).id), ce("q"), ce("/Pattern cs"), ce("/" + n + " scn"), r.gState && g.setGState(r.gState), ce(t), ce("Q")
							}
						},
						an = function(e) {
							switch (e) {
								case "f":
								case "F":
									return "W n";
								case "f*":
									return "W* n";
								case "B":
									return "W S";
								case "B*":
									return "W* S";
								case "S":
									return "W S";
								case "n":
									return "W n"
							}
						},
						on = g.moveTo = function(e, t) {
							return ce(k(F(e)) + " " + k(j(t)) + " m"), this
						},
						sn = g.lineTo = function(e, t) {
							return ce(k(F(e)) + " " + k(j(t)) + " l"), this
						},
						un = g.curveTo = function(e, t, n, r, i, a) {
							return ce([k(F(e)), k(j(t)), k(F(n)), k(j(r)), k(F(i)), k(j(a)), "c"].join(" ")), this
						};
					g.__private__.line = g.line = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.line");
						return E === w.COMPAT ? this.lines([
							[n - e, r - t]
						], e, t, [1, 1], i || "S") : this.lines([
							[n - e, r - t]
						], e, t, [1, 1]).stroke()
					}, g.__private__.lines = g.lines = function(e, t, n, r, i, a) {
						var o, s, u, c, l, f, d, h, p, _, m, b;
						if ("number" == typeof e && (b = n, n = t, t = e, e = b), r = r || [1, 1], a = a || !1, isNaN(t) || isNaN(n) || !Array.isArray(e) || !Array.isArray(r) || !Xt(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines");
						for (on(t, n), o = r[0], s = r[1], c = e.length, _ = t, m = n, u = 0; u < c; u++) 2 === (l = e[u]).length ? (_ = l[0] * o + _, m = l[1] * s + m, sn(_, m)) : (f = l[0] * o + _, d = l[1] * s + m, h = l[2] * o + _, p = l[3] * s + m, _ = l[4] * o + _, m = l[5] * s + m, un(f, d, h, p, _, m));
						return a && Zt(), tn(i), this
					}, g.path = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t],
								r = n.c;
							switch (n.op) {
								case "m":
									on(r[0], r[1]);
									break;
								case "l":
									sn(r[0], r[1]);
									break;
								case "c":
									un.apply(this, r);
									break;
								case "h":
									Zt()
							}
						}
						return this
					}, g.__private__.rect = g.rect = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
						return E === w.COMPAT && (r = -r), ce([k(F(e)), k(j(t)), k(F(n)), k(F(r)), "re"].join(" ")), tn(i), this
					}, g.__private__.triangle = g.triangle = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !Xt(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
						return this.lines([
							[n - e, r - t],
							[i - n, a - r],
							[e - i, t - a]
						], e, t, [1, 1], o, !0), this
					}, g.__private__.roundedRect = g.roundedRect = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !Xt(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
						var s = 4 / 3 * (Math.SQRT2 - 1);
						return i = Math.min(i, .5 * n), a = Math.min(a, .5 * r), this.lines([
							[n - 2 * i, 0],
							[i * s, 0, i, a - a * s, i, a],
							[0, r - 2 * a],
							[0, a * s, -i * s, a, -i, a],
							[2 * i - n, 0],
							[-i * s, 0, -i, -a * s, -i, -a],
							[0, 2 * a - r],
							[0, -a * s, i * s, -a, i, -a]
						], e + i, t, [1, 1], o, !0), this
					}, g.__private__.ellipse = g.ellipse = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !Xt(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
						var a = 4 / 3 * (Math.SQRT2 - 1) * n,
							o = 4 / 3 * (Math.SQRT2 - 1) * r;
						return on(e + n, t), un(e + n, t - o, e + a, t - r, e, t - r), un(e - a, t - r, e - n, t - o, e - n, t), un(e - n, t + o, e - a, t + r, e, t + r), un(e + a, t + r, e + n, t + o, e + n, t), tn(i), this
					}, g.__private__.circle = g.circle = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || !Xt(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
						return this.ellipse(e, t, n, n, r)
					}, g.setFont = function(e, t, n) {
						return n && (t = $(t, n)), we = Dt(e, t, {
							disableWarning: !1
						}), this
					};
					var cn = g.__private__.getFont = g.getFont = function() {
						return ke[Dt.apply(g, arguments)]
					};
					g.__private__.getFontList = g.getFontList = function() {
						var e, t, n = {};
						for (e in Oe)
							if (Oe.hasOwnProperty(e))
								for (t in n[e] = [], Oe[e]) Oe[e].hasOwnProperty(t) && n[e].push(t);
						return n
					}, g.addFont = function(e, t, n, r, i) {
						var a = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
						return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (n = $(n, r)), i = i || "Identity-H", Tt.call(this, e, t, n, i)
					};
					var ln, fn = e.lineWidth || .200025,
						dn = g.__private__.setLineWidth = g.setLineWidth = function(e) {
							return ce(k(F(e)) + " w"), this
						};
					g.__private__.setLineDash = D.API.setLineDash = D.API.setLineDashPattern = function(e, t) {
						if (e = e || [], t = t || 0, isNaN(t) || !Array.isArray(e)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
						return e = e.map((function(e) {
							return k(F(e))
						})).join(" "), t = k(F(t)), ce("[" + e + "] " + t + " d"), this
					};
					var hn = g.__private__.getLineHeight = g.getLineHeight = function() {
						return he * ln
					};
					g.__private__.getLineHeight = g.getLineHeight = function() {
						return he * ln
					};
					var pn = g.__private__.setLineHeightFactor = g.setLineHeightFactor = function(e) {
							return "number" == typeof(e = e || 1.15) && (ln = e), this
						},
						_n = g.__private__.getLineHeightFactor = g.getLineHeightFactor = function() {
							return ln
						};
					pn(e.lineHeight);
					var mn = g.__private__.getHorizontalCoordinate = function(e) {
							return F(e)
						},
						bn = g.__private__.getVerticalCoordinate = function(e) {
							return E === w.ADVANCED ? e : Ne[K].mediaBox.topRightY - Ne[K].mediaBox.bottomLeftY - F(e)
						},
						gn = g.__private__.getHorizontalCoordinateString = g.getHorizontalCoordinateString = function(e) {
							return k(mn(e))
						},
						vn = g.__private__.getVerticalCoordinateString = g.getVerticalCoordinateString = function(e) {
							return k(bn(e))
						},
						yn = e.strokeColor || "0 G";
					g.__private__.getStrokeColor = g.getDrawColor = function() {
						return Ze(yn)
					}, g.__private__.setStrokeColor = g.setDrawColor = function(e, t, n, r) {
						return yn = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "draw",
							precision: 2
						}), ce(yn), this
					};
					var An = e.fillColor || "0 g";
					g.__private__.getFillColor = g.getFillColor = function() {
						return Ze(An)
					}, g.__private__.setFillColor = g.setFillColor = function(e, t, n, r) {
						return An = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "fill",
							precision: 2
						}), ce(An), this
					};
					var Sn = e.textColor || "0 g",
						wn = g.__private__.getTextColor = g.getTextColor = function() {
							return Ze(Sn)
						};
					g.__private__.setTextColor = g.setTextColor = function(e, t, n, r) {
						return Sn = et({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "text",
							precision: 3
						}), this
					};
					var En = e.charSpace,
						Tn = g.__private__.getCharSpace = g.getCharSpace = function() {
							return parseFloat(En || 0)
						};
					g.__private__.setCharSpace = g.setCharSpace = function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
						return En = e, this
					};
					var Cn = 0;
					g.CapJoinStyles = {
						0: 0,
						butt: 0,
						but: 0,
						miter: 0,
						1: 1,
						round: 1,
						rounded: 1,
						circle: 1,
						2: 2,
						projecting: 2,
						project: 2,
						square: 2,
						bevel: 2
					}, g.__private__.setLineCap = g.setLineCap = function(e) {
						var t = g.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line cap style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return Cn = t, ce(t + " J"), this
					};
					var $n = 0;
					g.__private__.setLineJoin = g.setLineJoin = function(e) {
						var t = g.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line join style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return $n = t, ce(t + " j"), this
					}, g.__private__.setLineMiterLimit = g.__private__.setMiterLimit = g.setLineMiterLimit = g.setMiterLimit = function(e) {
						if (e = e || 0, isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
						return ce(k(F(e)) + " M"), this
					}, g.GState = P, g.setGState = function(e) {
						(e = "string" == typeof e ? Ie[Le[e]] : kn(null, e)).equals(De) || (ce("/" + e.id + " gs"), De = e)
					};
					var kn = function(e, t) {
						if (!e || !Le[e]) {
							var n = !1;
							for (var r in Ie)
								if (Ie.hasOwnProperty(r) && Ie[r].equals(t)) {
									n = !0;
									break
								} if (n) t = Ie[r];
							else {
								var i = "GS" + (Object.keys(Ie).length + 1).toString(10);
								Ie[i] = t, t.id = i
							}
							return e && (Le[e] = t.id), Re.publish("addGState", t), t
						}
					};
					g.addGState = function(e, t) {
						return kn(e, t), this
					}, g.saveGraphicsState = function() {
						return ce("q"), xe.push({
							key: we,
							size: he,
							color: Sn
						}), this
					}, g.restoreGraphicsState = function() {
						ce("Q");
						var e = xe.pop();
						return we = e.key, he = e.size, Sn = e.color, De = null, this
					}, g.setCurrentTransformationMatrix = function(e) {
						return ce(e.toString() + " cm"), this
					}, g.comment = function(e) {
						return ce("#" + e), this
					};
					var On = function(e, t) {
							var n = e || 0;
							Object.defineProperty(this, "x", {
								enumerable: !0,
								get: function() {
									return n
								},
								set: function(e) {
									isNaN(e) || (n = parseFloat(e))
								}
							});
							var r = t || 0;
							Object.defineProperty(this, "y", {
								enumerable: !0,
								get: function() {
									return r
								},
								set: function(e) {
									isNaN(e) || (r = parseFloat(e))
								}
							});
							var i = "pt";
							return Object.defineProperty(this, "type", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									i = e.toString()
								}
							}), this
						},
						xn = function(e, t, n, r) {
							On.call(this, e, t), this.type = "rect";
							var i = n || 0;
							Object.defineProperty(this, "w", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									isNaN(e) || (i = parseFloat(e))
								}
							});
							var a = r || 0;
							return Object.defineProperty(this, "h", {
								enumerable: !0,
								get: function() {
									return a
								},
								set: function(e) {
									isNaN(e) || (a = parseFloat(e))
								}
							}), this
						},
						Pn = function() {
							this.page = Be, this.currentPage = K, this.pages = ie.slice(0), this.pagesContext = Ne.slice(0), this.x = Te, this.y = Ce, this.matrix = $e, this.width = Dn(K), this.height = Nn(K), this.outputDestination = oe, this.id = "", this.objectNumber = -1
						};
					Pn.prototype.restore = function() {
						Be = this.page, K = this.currentPage, Ne = this.pagesContext, ie = this.pages, Te = this.x, Ce = this.y, $e = this.matrix, Bn(K, this.width), Rn(K, this.height), oe = this.outputDestination
					};
					var Mn = function(e, t, n, r, i) {
							He.push(new Pn), Be = K = 0, ie = [], Te = e, Ce = t, $e = i, xt([n, r])
						},
						In = function(e) {
							if (!je[e]) {
								var t = new Pn,
									n = "Xo" + (Object.keys(Ue).length + 1).toString(10);
								t.id = n, je[e] = n, Ue[n] = t, Re.publish("addFormObject", t), He.pop().restore()
							}
						};
					for (var Ln in g.beginFormObject = function(e, t, n, r, i) {
							return Mn(e, t, n, r, i), this
						}, g.endFormObject = function(e) {
							return In(e), this
						}, g.doFormObject = function(e, t) {
							var n = Ue[je[e]];
							return ce("q"), ce(t.toString() + " cm"), ce("/" + n.id + " Do"), ce("Q"), this
						}, g.getFormObject = function(e) {
							var t = Ue[je[e]];
							return {
								x: t.x,
								y: t.y,
								width: t.width,
								height: t.height,
								matrix: t.matrix
							}
						}, g.save = function(e, t) {
							return e = e || "generated.pdf", (t = t || {}).returnPromise = t.returnPromise || !1, !1 === t.returnPromise ? (d(Ht(jt()), e), "function" == typeof d.unload && i.setTimeout && setTimeout(d.unload, 911), this) : new Promise((function(t, n) {
								try {
									var r = d(Ht(jt()), e);
									"function" == typeof d.unload && i.setTimeout && setTimeout(d.unload, 911), t(r)
								} catch (e) {
									n(e.message)
								}
							}))
						}, D.API) D.API.hasOwnProperty(Ln) && ("events" === Ln && D.API.events.length ? function(e, t) {
						var n, r, i;
						for (i = t.length - 1; - 1 !== i; i--) n = t[i][0], r = t[i][1], e.subscribe.apply(e, [n].concat("function" == typeof r ? [r] : r))
					}(Re, D.API.events) : g[Ln] = D.API[Ln]);
					var Dn = g.getPageWidth = function(e) {
							return (Ne[e = e || K].mediaBox.topRightX - Ne[e].mediaBox.bottomLeftX) / Ee
						},
						Bn = g.setPageWidth = function(e, t) {
							Ne[e].mediaBox.topRightX = t * Ee + Ne[e].mediaBox.bottomLeftX
						},
						Nn = g.getPageHeight = function(e) {
							return (Ne[e = e || K].mediaBox.topRightY - Ne[e].mediaBox.bottomLeftY) / Ee
						},
						Rn = g.setPageHeight = function(e, t) {
							Ne[e].mediaBox.topRightY = t * Ee + Ne[e].mediaBox.bottomLeftY
						};
					return g.internal = {
						pdfEscape: Ot,
						getStyle: Jt,
						getFont: cn,
						getFontSize: _e,
						getCharSpace: Tn,
						getTextColor: wn,
						getLineHeight: hn,
						getLineHeightFactor: _n,
						write: le,
						getHorizontalCoordinate: mn,
						getVerticalCoordinate: bn,
						getCoordinateString: gn,
						getVerticalCoordinateString: vn,
						collections: {},
						newObject: Ge,
						newAdditionalObject: Ke,
						newObjectDeferred: qe,
						newObjectDeferredBegin: We,
						getFilters: tt,
						putStream: nt,
						events: Re,
						scaleFactor: Ee,
						pageSize: {
							getWidth: function() {
								return Dn(K)
							},
							setWidth: function(e) {
								Bn(K, e)
							},
							getHeight: function() {
								return Nn(K)
							},
							setHeight: function(e) {
								Rn(K, e)
							}
						},
						encryptionOptions: _,
						encryption: zt,
						getEncryptor: Qt,
						output: Yt,
						getNumberOfPages: Lt,
						pages: ie,
						out: ce,
						f2: N,
						f3: R,
						getPageInfo: Gt,
						getPageInfoByObjId: qt,
						getCurrentPageInfo: Wt,
						getPDFVersion: y,
						Point: On,
						Rectangle: xn,
						Matrix: Ye,
						hasHotfix: Vt
					}, Object.defineProperty(g.internal.pageSize, "width", {
						get: function() {
							return Dn(K)
						},
						set: function(e) {
							Bn(K, e)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(g.internal.pageSize, "height", {
						get: function() {
							return Nn(K)
						},
						set: function(e) {
							Rn(K, e)
						},
						enumerable: !0,
						configurable: !0
					}), Ct.call(g, de), we = "F1", Pt(a, n), Re.publish("initialized"), g
				}
				O.prototype.lsbFirstWord = function(e) {
					return String.fromCharCode(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
				}, O.prototype.toHexString = function(e) {
					return e.split("").map((function(e) {
						return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2)
					})).join("")
				}, O.prototype.hexToBytes = function(e) {
					for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
					return t.join("")
				}, O.prototype.processOwnerPassword = function(e, t) {
					return $(T(t).substr(0, 5), e)
				}, O.prototype.encryptor = function(e, t) {
					let n = T(this.encryptionKey + String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
					return function(e) {
						return $(n, e)
					}
				}, P.prototype.equals = function(e) {
					var t, n = "id,objectNumber,equals";
					if (!e || typeof e != typeof this) return !1;
					var r = 0;
					for (t in this)
						if (!(n.indexOf(t) >= 0)) {
							if (this.hasOwnProperty(t) && !e.hasOwnProperty(t)) return !1;
							if (this[t] !== e[t]) return !1;
							r++
						} for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && r--;
					return 0 === r
				}, D.API = {
					events: []
				}, D.version = "2.3.1";
				var B = D.API,
					N = 1,
					R = function(e) {
						return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
					},
					F = function(e) {
						return e.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
					},
					U = function(e) {
						return e.toFixed(2)
					},
					j = function(e) {
						return e.toFixed(5)
					};
				B.__acroform__ = {};
				var H = function(e, t) {
						e.prototype = Object.create(t.prototype), e.prototype.constructor = e
					},
					Y = function(e) {
						return e * N
					},
					V = function(e) {
						var t = new oe,
							n = ye.internal.getHeight(e) || 0,
							r = ye.internal.getWidth(e) || 0;
						return t.BBox = [0, 0, Number(U(r)), Number(U(n))], t
					},
					z = B.__acroform__.setBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
						return e | 1 << t
					},
					Q = B.__acroform__.clearBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
						return e & ~(1 << t)
					},
					G = B.__acroform__.getBit = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
						return 0 == (e & 1 << t) ? 0 : 1
					},
					q = B.__acroform__.getBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
						return G(e, t - 1)
					},
					W = B.__acroform__.setBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
						return z(e, t - 1)
					},
					K = B.__acroform__.clearBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
						return Q(e, t - 1)
					},
					X = B.__acroform__.calculateCoordinates = function(e, t) {
						var n = t.internal.getHorizontalCoordinate,
							r = t.internal.getVerticalCoordinate,
							i = e[0],
							a = e[1],
							o = e[2],
							s = e[3],
							u = {};
						return u.lowerLeft_X = n(i) || 0, u.lowerLeft_Y = r(a + s) || 0, u.upperRight_X = n(i + o) || 0, u.upperRight_Y = r(a) || 0, [Number(U(u.lowerLeft_X)), Number(U(u.lowerLeft_Y)), Number(U(u.upperRight_X)), Number(U(u.upperRight_Y))]
					},
					J = function(e) {
						if (e.appearanceStreamContent) return e.appearanceStreamContent;
						if (e.V || e.DV) {
							var t = [],
								n = e._V || e.DV,
								r = Z(e, n),
								i = e.scope.internal.getFont(e.fontName, e.fontStyle).id;
							t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e.scope.__private__.encodeColorString(e.color)), t.push("/" + i + " " + U(r.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(r.text), t.push("ET"), t.push("Q"), t.push("EMC");
							var a = V(e);
							return a.scope = e.scope, a.stream = t.join("\n"), a
						}
					},
					Z = function(e, t) {
						var n = 0 === e.fontSize ? e.maxFontSize : e.fontSize,
							r = {
								text: "",
								fontSize: ""
							},
							i = (t = ")" == (t = "(" == t.substr(0, 1) ? t.substr(1) : t).substr(t.length - 1) ? t.substr(0, t.length - 1) : t).split(" "),
							a = n,
							o = ye.internal.getHeight(e) || 0;
						o = o < 0 ? -o : o;
						var s = ye.internal.getWidth(e) || 0;
						s = s < 0 ? -s : s;
						var u = function(t, n, r) {
							if (t + 1 < i.length) {
								var a = n + " " + i[t + 1];
								return ee(a, e, r).width <= s - 4
							}
							return !1
						};
						a++;
						e: for (; a > 0;) {
							t = "", a--;
							var c, l, f = ee("3", e, a).height,
								d = e.multiline ? o - a : (o - f) / 2,
								h = d += 2,
								p = 0,
								_ = 0;
							if (a <= 0) {
								t = "(...) Tj\n", t += "% Width of Text: " + ee(t, e, a = 12).width + ", FieldWidth:" + s + "\n";
								break
							}
							var m = "",
								b = 0;
							for (var g in i)
								if (i.hasOwnProperty(g)) {
									m = " " == (m += i[g] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
									var v = parseInt(g),
										y = u(v, m, a),
										A = g >= i.length - 1;
									if (y && !A) {
										m += " ";
										continue
									}
									if (y || A) {
										if (A) _ = v;
										else if (e.multiline && (f + 2) * (b + 2) + 2 > o) continue e
									} else {
										if (!e.multiline) continue e;
										if ((f + 2) * (b + 2) + 2 > o) continue e;
										_ = v
									}
									for (var S = "", w = p; w <= _; w++) S += i[w] + " ";
									switch (S = " " == S.substr(S.length - 1) ? S.substr(0, S.length - 1) : S, l = ee(S, e, a).width, e.textAlign) {
										case "right":
											c = s - l - 2;
											break;
										case "center":
											c = (s - l) / 2;
											break;
										case "left":
										default:
											c = 2
									}
									t += U(c) + " " + U(h) + " Td\n", t += "(" + R(S) + ") Tj\n", t += -U(c) + " 0 Td\n", h = -(a + 2), l = 0, p = _ + 1, b++, m = ""
								} break
						}
						return r.text = t, r.fontSize = a, r
					},
					ee = function(e, t, n) {
						var r = t.scope.internal.getFont(t.fontName, t.fontStyle),
							i = t.scope.getStringUnitWidth(e, {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n);
						return {
							height: t.scope.getStringUnitWidth("3", {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n) * 1.5,
							width: i
						}
					},
					te = {
						fields: [],
						xForms: [],
						acroFormDictionaryRoot: null,
						printedOut: !1,
						internal: null,
						isInitialized: !1
					},
					ne = function(e, t) {
						var n = {
							type: "reference",
							object: e
						};
						void 0 === t.internal.getPageInfo(e.page).pageContext.annotations.find((function(e) {
							return e.type === n.type && e.object === n.object
						})) && t.internal.getPageInfo(e.page).pageContext.annotations.push(n)
					},
					re = B.__acroform__.arrayToPdfArray = function(e, t, n) {
						var r = function(e) {
							return e
						};
						if (Array.isArray(e)) {
							for (var i = "[", a = 0; a < e.length; a++) switch (0 !== a && (i += " "), typeof e[a]) {
								case "boolean":
								case "number":
								case "object":
									i += e[a].toString();
									break;
								case "string":
									"/" !== e[a].substr(0, 1) ? (void 0 !== t && n && (r = n.internal.getEncryptor(t)), i += "(" + R(r(e[a].toString())) + ")") : i += e[a].toString()
							}
							return i + "]"
						}
						throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
					},
					ie = function(e, t, n) {
						var r = function(e) {
							return e
						};
						return void 0 !== t && n && (r = n.internal.getEncryptor(t)), (e = e || "").toString(), "(" + R(r(e)) + ")"
					},
					ae = function() {
						this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
							get: function() {
								if (void 0 === this._objId) {
									if (void 0 === this.scope) return;
									this._objId = this.scope.internal.newObjectDeferred()
								}
								return this._objId
							},
							set: function(e) {
								this._objId = e
							}
						}), Object.defineProperty(this, "scope", {
							value: this._scope,
							writable: !0
						})
					};
				ae.prototype.toString = function() {
					return this.objId + " 0 R"
				}, ae.prototype.putStream = function() {
					var e = this.getKeyValueListForStream();
					this.scope.internal.putStream({
						data: this.stream,
						additionalKeyValues: e,
						objectId: this.objId
					}), this.scope.internal.out("endobj")
				}, ae.prototype.getKeyValueListForStream = function() {
					var e = [],
						t = Object.getOwnPropertyNames(this).filter((function(e) {
							return "content" != e && "appearanceStreamContent" != e && "scope" != e && "objId" != e && "_" != e.substring(0, 1)
						}));
					for (var n in t)
						if (!1 === Object.getOwnPropertyDescriptor(this, t[n]).configurable) {
							var r = t[n],
								i = this[r];
							i && (Array.isArray(i) ? e.push({
								key: r,
								value: re(i, this.objId, this.scope)
							}) : i instanceof ae ? (i.scope = this.scope, e.push({
								key: r,
								value: i.objId + " 0 R"
							})) : "function" != typeof i && e.push({
								key: r,
								value: i
							}))
						} return e
				};
				var oe = function() {
					ae.call(this), Object.defineProperty(this, "Type", {
						value: "/XObject",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "Subtype", {
						value: "/Form",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "FormType", {
						value: 1,
						configurable: !1,
						writable: !0
					});
					var e, t = [];
					Object.defineProperty(this, "BBox", {
						configurable: !1,
						get: function() {
							return t
						},
						set: function(e) {
							t = e
						}
					}), Object.defineProperty(this, "Resources", {
						value: "2 0 R",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "stream", {
						enumerable: !1,
						configurable: !0,
						set: function(t) {
							e = t.trim()
						},
						get: function() {
							return e || null
						}
					})
				};
				H(oe, ae);
				var se = function() {
					ae.call(this);
					var e, t = [];
					Object.defineProperty(this, "Kids", {
						enumerable: !1,
						configurable: !0,
						get: function() {
							return t.length > 0 ? t : void 0
						}
					}), Object.defineProperty(this, "Fields", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return t
						}
					}), Object.defineProperty(this, "DA", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (e) {
								var t = function(e) {
									return e
								};
								return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + R(t(e)) + ")"
							}
						},
						set: function(t) {
							e = t
						}
					})
				};
				H(se, ae);
				var ue = function() {
					ae.call(this);
					var e = 4;
					Object.defineProperty(this, "F", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
							e = t
						}
					}), Object.defineProperty(this, "showWhenPrinted", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(q(e, 3))
						},
						set: function(t) {
							!0 === Boolean(t) ? this.F = W(e, 3) : this.F = K(e, 3)
						}
					});
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

									if ("/>" === i[0].slice(-2)) break;
									"/" === i[1] ? Lu(O, Q, P, r.slice(x, i.index)) : (P = i, x = i.index + i[0].length);
									break
								}
								if (n.WTF) throw "Unrecognized tag: " + i[3] + "|" + c.join("|")
						}
						var ie = {};
						return n.bookSheets || n.bookProps || (ie.Sheets = l), ie.SheetNames = f, ie.Workbook = V, ie.SSF = M.get_table(), ie.Props = k, ie.Custprops = O, ie
					}

					function Hu(e, t) {
						switch (Fc(t = t || {}), t.type || "base64") {
							case "base64":
								return ju(g.decode(e), t);
							case "binary":
							case "buffer":
							case "file":
								return ju(e, t);
							case "array":
								return ju(C(e), t)
						}
					}

					function Yu(e, t) {
						var n = [];
						return e.Props && n.push(function(e, t) {
							var n = [];
							return H(_r).map((function(e) {
								for (var t = 0; t < ir.length; ++t)
									if (ir[t][1] == e) return ir[t];
								for (t = 0; t < cr.length; ++t)
									if (cr[t][1] == e) return cr[t];
								throw e
							})).forEach((function(r) {
								if (null != e[r[1]]) {
									var i = t && t.Props && null != t.Props[r[1]] ? t.Props[r[1]] : e[r[1]];
									switch (r[2]) {
										case "date":
											i = new Date(i).toISOString().replace(/\.\d*Z/, "Z")
									}
									"number" == typeof i ? i = String(i) : !0 === i || !1 === i ? i = i ? "1" : "0" : i instanceof Date && (i = new Date(i).toISOString().replace(/\.\d*Z/, "")), n.push(We(_r[r[1]] || r[1], i))
								}
							})), Xe("DocumentProperties", n.join(""), {
								xmlns: nt
							})
						}(e.Props, t)), e.Custprops && n.push(function(e, t) {
							var n = ["Worksheets", "SheetNames"],
								r = "CustomDocumentProperties",
								i = [];
							return e && H(e).forEach((function(t) {
								if (Object.prototype.hasOwnProperty.call(e, t)) {
									for (var r = 0; r < ir.length; ++r)
										if (t == ir[r][1]) return;
									for (r = 0; r < cr.length; ++r)
										if (t == cr[r][1]) return;
									for (r = 0; r < n.length; ++r)
										if (t == n[r]) return;
									var a = e[t],
										o = "string";
									"number" == typeof a ? (o = "float", a = String(a)) : !0 === a || !1 === a ? (o = "boolean", a = a ? "1" : "0") : a = String(a), i.push(Xe(Pe(t), a, {
										"dt:dt": o
									}))
								}
							})), t && H(t).forEach((function(n) {
								if (Object.prototype.hasOwnProperty.call(t, n) && (!e || !Object.prototype.hasOwnProperty.call(e, n))) {
									var r = t[n],
										a = "string";
									"number" == typeof r ? (a = "float", r = String(r)) : !0 === r || !1 === r ? (a = "boolean", r = r ? "1" : "0") : r instanceof Date ? (a = "dateTime.tz", r = r.toISOString()) : r = String(r), i.push(Xe(Pe(n), r, {
										"dt:dt": a
									}))
								}
							})), "<" + r + ' xmlns="' + nt + '">' + i.join("") + "</" + r + ">"
						}(e.Props, e.Custprops)), n.join("")
					}

					function Vu(e) {
						return Xe("NamedRange", null, {
							"ss:Name": e.Name,
							"ss:RefersTo": "=" + lo(e.Ref, {
								r: 0,
								c: 0
							})
						})
					}

					function zu(e, t, n, r, i, a, o) {
						if (!e || null == e.v && null == e.f) return "";
						var s = {};
						if (e.f && (s["ss:Formula"] = "=" + xe(lo(e.f, o))), e.F && e.F.slice(0, t.length) == t) {
							var u = Jt(e.F.slice(t.length + 1));
							s["ss:ArrayRange"] = "RC:R" + (u.r == o.r ? "" : "[" + (u.r - o.r) + "]") + "C" + (u.c == o.c ? "" : "[" + (u.c - o.c) + "]")
						}
						if (e.l && e.l.Target && (s["ss:HRef"] = xe(e.l.Target), e.l.Tooltip && (s["x:HRefScreenTip"] = xe(e.l.Tooltip))), n["!merges"])
							for (var c = n["!merges"], l = 0; l != c.length; ++l) c[l].s.c == o.c && c[l].s.r == o.r && (c[l].e.c > c[l].s.c && (s["ss:MergeAcross"] = c[l].e.c - c[l].s.c), c[l].e.r > c[l].s.r && (s["ss:MergeDown"] = c[l].e.r - c[l].s.r));
						var f = "",
							d = "";
						switch (e.t) {
							case "z":
								if (!r.sheetStubs) return "";
								break;
							case "n":
								f = "Number", d = String(e.v);
								break;
							case "b":
								f = "Boolean", d = e.v ? "1" : "0";
								break;
							case "e":
								f = "Error", d = jn[e.v];
								break;
							case "d":
								f = "DateTime", d = new Date(e.v).toISOString(), null == e.z && (e.z = e.z || M._table[14]);
								break;
							case "s":
								f = "String", d = function(e) {
									return (e + "").replace(ke, (function(e) {
										return Ce[e]
									})).replace(Me, (function(e) {
										return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";"
									}))
								}(e.v || "")
						}
						var h = gs(r.cellXfs, e, r);
						s["ss:StyleID"] = "s" + (21 + h), s["ss:Index"] = o.c + 1;
						var p = null != e.v ? d : "",
							_ = "z" == e.t ? "" : '<Data ss:Type="' + f + '">' + p + "</Data>";
						return (e.c || []).length > 0 && (_ += function(e) {
							return e.map((function(e) {
								var t = Xe("ss:Data", De(e.t || ""), {
									xmlns: "http://www.w3.org/TR/REC-html40"
								});
								return Xe("Comment", t, {
									"ss:Author": e.a
								})
							})).join("")
						}(e.c)), Xe("Cell", _, s)
					}

					function Qu(e, t) {
						var n = '<Row ss:Index="' + (e + 1) + '"';
						return t && (t.hpt && !t.hpx && (t.hpx = wa(t.hpt)), t.hpx && (n += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (n += ' ss:Hidden="1"')), n + ">"
					}

					function Gu(e, t, n) {
						var r = [],
							i = n.SheetNames[e],
							a = n.Sheets[i],
							o = a ? function(e, t, n, r) {
								if (!e) return "";
								if (!((r || {}).Workbook || {}).Names) return "";
								for (var i = r.Workbook.Names, a = [], o = 0; o < i.length; ++o) {
									var s = i[o];
									s.Sheet == n && (s.Name.match(/^_xlfn\./) || a.push(Vu(s)))
								}
								return a.join("")
							}(a, 0, e, n) : "";
						return o.length > 0 && r.push("<Names>" + o + "</Names>"), (o = a ? function(e, t, n, r) {
							if (!e["!ref"]) return "";
							var i = nn(e["!ref"]),
								a = e["!merges"] || [],
								o = 0,
								s = [];
							e["!cols"] && e["!cols"].forEach((function(e, t) {
								Aa(e);
								var n = !!e.width,
									r = ms(t, e),
									i = {
										"ss:Index": t + 1
									};
								n && (i["ss:Width"] = ma(r.width)), e.hidden && (i["ss:Hidden"] = "1"), s.push(Xe("Column", null, i))
							}));
							for (var u = Array.isArray(e), c = i.s.r; c <= i.e.r; ++c) {
								for (var l = [Qu(c, (e["!rows"] || [])[c])], f = i.s.c; f <= i.e.c; ++f) {
									var d = !1;
									for (o = 0; o != a.length; ++o)
										if (!(a[o].s.c > f || a[o].s.r > c || a[o].e.c < f || a[o].e.r < c)) {
											a[o].s.c == f && a[o].s.r == c || (d = !0);
											break
										} if (!d) {
										var h = {
												r: c,
												c: f
											},
											p = Zt(h),
											_ = u ? (e[c] || [])[f] : e[p];
										l.push(zu(_, p, e, t, 0, 0, h))
									}
								}
								l.push("</Row>"), l.length > 2 && s.push(l.join(""))
							}
							return s.join("")
						}(a, t) : "").length > 0 && r.push("<Table>" + o + "</Table>"), r.push(function(e, t, n, r) {
							if (!e) return "";
							var i = [];
							if (e["!margins"] && (i.push("<PageSetup>"), e["!margins"].header && i.push(Xe("Header", null, {
									"x:Margin": e["!margins"].header
								})), e["!margins"].footer && i.push(Xe("Footer", null, {
									"x:Margin": e["!margins"].footer
								})), i.push(Xe("PageMargins", null, {
									"x:Bottom": e["!margins"].bottom || "0.75",
									"x:Left": e["!margins"].left || "0.7",
									"x:Right": e["!margins"].right || "0.7",
									"x:Top": e["!margins"].top || "0.75"
								})), i.push("</PageSetup>")), r && r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[n])
								if (r.Workbook.Sheets[n].Hidden) i.push(Xe("Visible", 1 == r.Workbook.Sheets[n].Hidden ? "SheetHidden" : "SheetVeryHidden", {}));
								else {
									for (var a = 0; a < n && (!r.Workbook.Sheets[a] || r.Workbook.Sheets[a].Hidden); ++a);
									a == n && i.push("<Selected/>")
								} return ((((r || {}).Workbook || {}).Views || [])[0] || {}).RTL && i.push("<DisplayRightToLeft/>"), e["!protect"] && (i.push(We("ProtectContents", "True")), e["!protect"].objects && i.push(We("ProtectObjects", "True")), e["!protect"].scenarios && i.push(We("ProtectScenarios", "True")), null == e["!protect"].selectLockedCells || e["!protect"].selectLockedCells ? null == e["!protect"].selectUnlockedCells || e["!protect"].selectUnlockedCells || i.push(We("EnableSelection", "UnlockedCells")) : i.push(We("EnableSelection", "NoSelection")), [
								["formatCells", "AllowFormatCells"],
								["formatColumns", "AllowSizeCols"],
								["formatRows", "AllowSizeRows"],
								["insertColumns", "AllowInsertCols"],
								["insertRows", "AllowInsertRows"],
								["insertHyperlinks", "AllowInsertHyperlinks"],
								["deleteColumns", "AllowDeleteCols"],
								["deleteRows", "AllowDeleteRows"],
								["sort", "AllowSort"],
								["autoFilter", "AllowFilter"],
								["pivotTables", "AllowUsePivotTables"]
							].forEach((function(t) {
								e["!protect"][t[0]] && i.push("<" + t[1] + "/>")
							}))), 0 == i.length ? "" : Xe("WorksheetOptions", i.join(""), {
								xmlns: rt
							})
						}(a, 0, e, n)), r.join("")
					}

					function qu(e, t) {
						t || (t = {}), e.SSF || (e.SSF = M.get_table()), e.SSF && (I(M), M.load_table(e.SSF), t.revssf = z(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], gs(t.cellXfs, {}, {
							revssf: {
								General: 0
							}
						}));
						var n = [];
						n.push(Yu(e, t)), n.push(""), n.push(""), n.push("");
						for (var r = 0; r < e.SheetNames.length; ++r) n.push(Xe("Worksheet", Gu(r, t, e), {
							"ss:Name": xe(e.SheetNames[r])
						}));
						return n[2] = function(e, t) {
							var n = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
							return t.cellXfs.forEach((function(e, t) {
								var r = [];
								r.push(Xe("NumberFormat", null, {
									"ss:Format": xe(M._table[e.numFmtId])
								}));
								var i = {
									"ss:ID": "s" + (21 + t)
								};
								n.push(Xe("Style", r.join(""), i))
							})), Xe("Styles", n.join(""))
						}(0, t), n[3] = function(e) {
							if (!((e || {}).Workbook || {}).Names) return "";
							for (var t = e.Workbook.Names, n = [], r = 0; r < t.length; ++r) {
								var i = t[r];
								null == i.Sheet && (i.Name.match(/^_xlfn\./) || n.push(Vu(i)))
							}
							return Xe("Names", n.join(""))
						}(e), ge + Xe("Workbook", n.join(""), {
							xmlns: it,
							"xmlns:o": nt,
							"xmlns:x": rt,
							"xmlns:ss": it,
							"xmlns:dt": at,
							"xmlns:html": ut
						})
					}

					function Wu(e) {
						var t = {},
							n = e.content;
						if (n.l = 28, t.AnsiUserType = n.read_shift(0, "lpstr-ansi"), t.AnsiClipboardFormat = function(e) {
								return Pn(e, 1)
							}(n), n.length - n.l <= 4) return t;
						var r = n.read_shift(4);
						return 0 == r || r > 40 ? t : (n.l -= 4, t.Reserved1 = n.read_shift(0, "lpstr-ansi"), n.length - n.l <= 4 ? t : 1907505652 !== (r = n.read_shift(4)) ? t : (t.UnicodeClipboardFormat = function(e) {
							return Pn(e, 2)
						}(n), 0 == (r = n.read_shift(4)) || r > 40 ? t : (n.l -= 4, void(t.Reserved2 = n.read_shift(0, "lpwstr")))))
					}

					function Ku(e, t, n, r) {
						var i = n,
							a = [],
							o = t.slice(t.l, t.l + i);
						if (r && r.enc && r.enc.insitu && o.length > 0) switch (e.n) {
							case "BOF":
							case "FilePass":
							case "FileLock":
							case "InterfaceHdr":
							case "RRDInfo":
							case "RRDHead":
							case "UsrExcl":
							case "EOF":
							case "BoundSheet8":
								break;
							default:
								r.enc.insitu(o)
						}
						a.push(o), t.l += i;
						for (var s = sc[Ot(t, t.l)], u = 0; null != s && "Continue" === s.n.slice(0, 8);) i = Ot(t, t.l + 2), u = t.l + 4, "ContinueFrt" == s.n ? u += 4 : "ContinueFrt" == s.n.slice(0, 11) && (u += 12), o = t.slice(u, t.l + 4 + i), a.push(o), t.l += 4 + i, s = sc[Ot(t, t.l)];
						var c = O(a);
						Rt(c, 0);
						var l = 0;
						c.lens = [];
						for (var f = 0; f < a.length; ++f) c.lens.push(l), l += a[f].length;
						if (c.length < n) throw "XLS Record " + (e && e.n || "??") + " Truncated: " + c.length + " < " + n;
						return e.f(c, c.length, r)
					}

					function Xu(e, t, n) {
						if ("z" !== e.t && e.XF) {
							var r = 0;
							try {
								r = e.z || e.XF.numFmtId || 0, t.cellNF && (e.z = M._table[r])
							} catch (e) {
								if (t.WTF) throw e
							}
							if (!t || !1 !== t.cellText) try {
								"e" === e.t ? e.w = e.w || jn[e.v] : 0 === r || "General" == r ? "n" === e.t ? (0 | e.v) === e.v ? e.w = M._general_int(e.v) : e.w = M._general_num(e.v) : e.w = M._general(e.v) : e.w = M.format(r, e.v, {
									date1904: !!n
								})
							} catch (e) {
								if (t.WTF) throw e
							}
							if (t.cellDates && r && "n" == e.t && M.is_date(M._table[r] || String(r))) {
								var i = M.parse_date_code(e.v);
								i && (e.t = "d", e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u))
							}
						}
					}

					function Ju(e, t, n) {
						return {
							v: e,
							ixfe: t,
							t: n
						}
					}

					function Zu(e, t) {
						var n, r, i, a, o, s, u, c, l = {
								opts: {}
							},
							f = {},
							h = t.dense ? [] : {},
							p = {},
							_ = {},
							m = null,
							b = [],
							g = "",
							v = {},
							y = "",
							A = {},
							S = [],
							w = !0,
							E = [],
							T = [],
							C = {
								Sheets: [],
								WBProps: {
									date1904: !1
								},
								Views: [{}]
							},
							$ = {},
							k = function(e) {
								return e < 8 ? Un[e] : e < 64 && T[e - 8] || Un[e]
							},
							O = function(e, t, r) {
								if (!(U > 1) && (r.sheetRows && e.r >= r.sheetRows && (w = !1), w)) {
									if (r.cellStyles && t.XF && t.XF.data && function(e, t, n) {
											var r, i = t.XF.data;
											i && i.patternType && n && n.cellStyles && (t.s = {}, t.s.patternType = i.patternType, (r = ha(k(i.icvFore))) && (t.s.fgColor = {
												rgb: r
											}), (r = ha(k(i.icvBack))) && (t.s.bgColor = {
												rgb: r
											}))
										}(0, t, r), delete t.ixfe, delete t.XF, n = e, y = Zt(e), _ && _.s && _.e || (_ = {
											s: {
												r: 0,
												c: 0
											},
											e: {
												r: 0,
												c: 0
											}
										}), e.r < _.s.r && (_.s.r = e.r), e.c < _.s.c && (_.s.c = e.c), e.r + 1 > _.e.r && (_.e.r = e.r + 1), e.c + 1 > _.e.c && (_.e.c = e.c + 1), r.cellFormula && t.f)
										for (var i = 0; i < S.length; ++i)
											if (!(S[i][0].s.c > e.c || S[i][0].s.r > e.r || S[i][0].e.c < e.c || S[i][0].e.r < e.r)) {
												t.F = tn(S[i][0]), S[i][0].s.c == e.c && S[i][0].s.r == e.r || delete t.f, t.f && (t.f = "" + qo(S[i][1], 0, e, N, x));
												break
											} r.dense ? (h[e.r] || (h[e.r] = []), h[e.r][e.c] = t) : h[y] = t
								}
							},
							x = {
								enc: !1,
								sbcch: 0,
								snames: [],
								sharedf: A,
								arrayf: S,
								rrtabid: [],
								lastuser: "",
								biff: 8,
								codepage: 0,
								winlocked: 0,
								cellStyles: !!t && !!t.cellStyles,
								WTF: !!t && !!t.wtf
							};
						t.password && (x.password = t.password);
						var P = [],
							I = [],
							L = [],
							D = [],
							B = !1,
							N = [];
						N.SheetNames = x.snames, N.sharedf = x.sharedf, N.arrayf = x.arrayf, N.names = [], N.XTI = [];
						var R, F = "",
							U = 0,
							j = 0,
							Y = [],
							V = [];
						x.codepage = 1200, d(1200);
						for (var z = !1; e.l < e.length - 1;) {
							var Q = e.l,
								G = e.read_shift(2);
							if (0 === G && "EOF" === F) break;
							var q = e.l === e.length ? 0 : e.read_shift(2),
								W = sc[G];
							if (W && W.f) {
								if (t.bookSheets && "BoundSheet8" === F && "BoundSheet8" !== W.n) break;
								if (F = W.n, 2 === W.r || 12 == W.r) {
									var K = e.read_shift(2);
									if (q -= 2, !x.enc && K !== G && ((255 & K) << 8 | K >> 8) !== G) throw new Error("rt mismatch: " + K + "!=" + G);
									12 == W.r && (e.l += 10, q -= 10)
								}
								var X = {};
								X = "EOF" === W.n ? W.f(e, q, x) : Ku(W, e, q, x);
								var J = W.n;
								if (0 == U && "BOF" != J) continue;
								switch (J) {
									case "Date1904":
										l.opts.Date1904 = C.WBProps.date1904 = X;
										break;
									case "WriteProtect":
										l.opts.WriteProtect = !0;
										break;
									case "FilePass":
										if (x.enc || (e.l = 0), x.enc = X, !t.password) throw new Error("File is password-protected");
										if (null == X.valid) throw new Error("Encryption scheme unsupported");
										if (!X.valid) throw new Error("Password is incorrect");
										break;
									case "WriteAccess":
										x.lastuser = X;
										break;
									case "FileSharing":
										break;
									case "CodePage":
										var Z = Number(X);
										switch (Z) {
											case 21010:
												Z = 1200;
												break;
											case 32768:
												Z = 1e4;
												break;
											case 32769:
												Z = 1252
										}
										d(x.codepage = Z), z = !0;
										break;
									case "RRTabId":
										x.rrtabid = X;
										break;
									case "WinProtect":
										x.winlocked = X;
										break;
									case "Template":
									case "BookBool":
									case "UsesELFs":
									case "MTRSettings":
										break;
									case "RefreshAll":
									case "CalcCount":
									case "CalcDelta":
									case "CalcIter":
									case "CalcMode":
									case "CalcPrecision":
									case "CalcSaveRecalc":
										l.opts[J] = X;
										break;
									case "CalcRefMode":
										x.CalcRefMode = X;
										break;
									case "Uncalced":
										break;
									case "ForceFullCalculation":
										l.opts.FullCalc = X;
										break;
									case "WsBool":
										X.fDialog && (h["!type"] = "dialog");
										break;
									case "XF":
										E.push(X);
										break;
									case "ExtSST":
									case "BookExt":
									case "RichTextStream":
									case "BkHim":
										break;
									case "SupBook":
										N.push([X]), N[N.length - 1].XTI = [];
										break;
									case "ExternName":
										N[N.length - 1].push(X);
										break;
									case "Index":
										break;
									case "Lbl":
										R = {
											Name: X.Name,
											Ref: qo(X.rgce, 0, null, N, x)
										}, X.itab > 0 && (R.Sheet = X.itab - 1), N.names.push(R), N[0] || (N[0] = [], N[0].XTI = []), N[N.length - 1].push(X), "_xlnm._FilterDatabase" == X.Name && X.itab > 0 && X.rgce && X.rgce[0] && X.rgce[0][0] && "PtgArea3d" == X.rgce[0][0][0] && (V[X.itab - 1] = {
											ref: tn(X.rgce[0][0][1][2])
										});
										break;
									case "ExternCount":
										x.ExternCount = X;
										break;
									case "ExternSheet":
										0 == N.length && (N[0] = [], N[0].XTI = []), N[N.length - 1].XTI = N[N.length - 1].XTI.concat(X), N.XTI = N.XTI.concat(X);
										break;
									case "NameCmt":
										if (x.biff < 8) break;
										null != R && (R.Comment = X[1]);
										break;
									case "Protect":
										h["!protect"] = X;
										break;
									case "Password":
										0 !== X && x.WTF && console.error("Password verifier: " + X);
										break;
									case "Prot4Rev":
									case "Prot4RevPass":
										break;
									case "BoundSheet8":
										p[X.pos] = X, x.snames.push(X.name);
										break;
									case "EOF":
										if (--U) break;
										if (_.e) {
											if (_.e.r > 0 && _.e.c > 0) {
												if (_.e.r--, _.e.c--, h["!ref"] = tn(_), t.sheetRows && t.sheetRows <= _.e.r) {
													var ee = _.e.r;
													_.e.r = t.sheetRows - 1, h["!fullref"] = h["!ref"], h["!ref"] = tn(_), _.e.r = ee
												}
												_.e.r++, _.e.c++
											}
											P.length > 0 && (h["!merges"] = P), I.length > 0 && (h["!objects"] = I), L.length > 0 && (h["!cols"] = L), D.length > 0 && (h["!rows"] = D), C.Sheets.push($)
										}
										"" === g ? v = h : f[g] = h, h = t.dense ? [] : {};
										break;
									case "BOF":
										if (8 === x.biff && (x.biff = {
												9: 2,
												521: 3,
												1033: 4
											} [G] || {
												512: 2,
												768: 3,
												1024: 4,
												1280: 5,
												1536: 8,
												2: 2,
												7: 2
											} [X.BIFFVer] || 8), 8 == x.biff && 0 == X.BIFFVer && 16 == X.dt && (x.biff = 2), U++) break;
										if (w = !0, h = t.dense ? [] : {}, x.biff < 8 && !z && (z = !0, d(x.codepage = t.codepage || 1252)), x.biff < 5) {
											"" === g && (g = "Sheet1"), _ = {
												s: {
													r: 0,
													c: 0
												},
												e: {
													r: 0,
													c: 0
												}
											};
											var te = {
												pos: e.l - q,
												name: g
											};
											p[te.pos] = te, x.snames.push(g)
										} else g = (p[Q] || {
											name: ""
										}).name;
										32 == X.dt && (h["!type"] = "chart"), 64 == X.dt && (h["!type"] = "macro"), P = [], I = [], x.arrayf = S = [], L = [], D = [], B = !1, $ = {
											Hidden: (p[Q] || {
												hs: 0
											}).hs,
											name: g
										};
										break;
									case "Number":
									case "BIFF2NUM":
									case "BIFF2INT":
										"chart" == h["!type"] && (t.dense ? (h[X.r] || [])[X.c] : h[Zt({
											c: X.c,
											r: X.r
										})]) && ++X.c, s = {
											ixfe: X.ixfe,
											XF: E[X.ixfe] || {},
											v: X.val,
											t: "n"
										}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t);
										break;
									case "BoolErr":
										s = {
											ixfe: X.ixfe,
											XF: E[X.ixfe],
											v: X.val,
											t: X.t
										}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t);
										break;
									case "RK":
										s = {
											ixfe: X.ixfe,
											XF: E[X.ixfe],
											v: X.rknum,
											t: "n"
										}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t);
										break;
									case "MulRk":
										for (var ne = X.c; ne <= X.C; ++ne) {
											var re = X.rkrec[ne - X.c][0];
											s = {
												ixfe: re,
												XF: E[re],
												v: X.rkrec[ne - X.c][1],
												t: "n"
											}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
												c: ne,
												r: X.r
											}, s, t)
										}
										break;
									case "Formula":
										if ("String" == X.val) {
											m = X;
											break
										}
										if ((s = Ju(X.val, X.cell.ixfe, X.tt)).XF = E[s.ixfe], t.cellFormula) {
											var ie = X.formula;
											if (ie && ie[0] && ie[0][0] && "PtgExp" == ie[0][0][0]) {
												var ae = ie[0][0][1][0],
													oe = ie[0][0][1][1],
													se = Zt({
														r: ae,
														c: oe
													});
												A[se] ? s.f = "" + qo(X.formula, 0, X.cell, N, x) : s.F = ((t.dense ? (h[ae] || [])[oe] : h[se]) || {}).F
											} else s.f = "" + qo(X.formula, 0, X.cell, N, x)
										}
										j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O(X.cell, s, t), m = X;
										break;
									case "String":
										if (!m) throw new Error("String record expects Formula");
										m.val = X, (s = Ju(X, m.cell.ixfe, "s")).XF = E[s.ixfe], t.cellFormula && (s.f = "" + qo(m.formula, 0, m.cell, N, x)), j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O(m.cell, s, t), m = null;
										break;
									case "Array":
										S.push(X);
										var ue = Zt(X[0].s);
										if (r = t.dense ? (h[X[0].s.r] || [])[X[0].s.c] : h[ue], t.cellFormula && r) {
											if (!m) break;
											if (!ue || !r) break;
											r.f = "" + qo(X[1], 0, X[0], N, x), r.F = tn(X[0])
										}
										break;
									case "ShrFmla":
										if (!w) break;
										if (!t.cellFormula) break;
										if (y) {
											if (!m) break;
											A[Zt(m.cell)] = X[0], ((r = t.dense ? (h[m.cell.r] || [])[m.cell.c] : h[Zt(m.cell)]) || {}).f = "" + qo(X[0], 0, n, N, x)
										}
										break;
									case "LabelSst":
										s = Ju(b[X.isst].t, X.ixfe, "s"), b[X.isst].h && (s.h = b[X.isst].h), s.XF = E[s.ixfe], j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t);
										break;
									case "Blank":
										t.sheetStubs && (s = {
											ixfe: X.ixfe,
											XF: E[X.ixfe],
											t: "z"
										}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t));
										break;
									case "MulBlank":
										if (t.sheetStubs)
											for (var ce = X.c; ce <= X.C; ++ce) {
												var le = X.ixfe[ce - X.c];
												s = {
													ixfe: le,
													XF: E[le],
													t: "z"
												}, j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
													c: ce,
													r: X.r
												}, s, t)
											}
										break;
									case "RString":
									case "Label":
									case "BIFF2STR":
										(s = Ju(X.val, X.ixfe, "s")).XF = E[s.ixfe], j > 0 && (s.z = Y[s.ixfe >> 8 & 31]), Xu(s, t, l.opts.Date1904), O({
											c: X.c,
											r: X.r
										}, s, t);
										break;
									case "Dimensions":
										1 === U && (_ = X);
										break;
									case "SST":
										b = X;
										break;
									case "Format":
										if (4 == x.biff) {
											Y[j++] = X[1];
											for (var fe = 0; fe < j + 163 && M._table[fe] != X[1]; ++fe);
											fe >= 163 && M.load(X[1], j + 163)
										} else M.load(X[1], X[0]);
										break;
									case "BIFF2FORMAT":
										Y[j++] = X;
										for (var de = 0; de < j + 163 && M._table[de] != X; ++de);
										de >= 163 && M.load(X, j + 163);
										break;
									case "MergeCells":
										P = P.concat(X);
										break;
									case "Obj":
										I[X.cmo[0]] = x.lastobj = X;
										break;
									case "TxO":
										x.lastobj.TxO = X;
										break;
									case "ImData":
										x.lastobj.ImData = X;
										break;
									case "HLink":
										for (o = X[0].s.r; o <= X[0].e.r; ++o)
											for (a = X[0].s.c; a <= X[0].e.c; ++a)(r = t.dense ? (h[o] || [])[a] : h[Zt({
												c: a,
												r: o
											})]) && (r.l = X[1]);
										break;
									case "HLinkTooltip":
										for (o = X[0].s.r; o <= X[0].e.r; ++o)
											for (a = X[0].s.c; a <= X[0].e.c; ++a)(r = t.dense ? (h[o] || [])[a] : h[Zt({
												c: a,
												r: o
											})]) && r.l && (r.l.Tooltip = X[1]);
										break;
									case "Note":
										if (x.biff <= 5 && x.biff >= 2) break;
										r = t.dense ? (h[X[0].r] || [])[X[0].c] : h[Zt(X[0])];
										var he = I[X[2]];
										r || (t.dense ? (h[X[0].r] || (h[X[0].r] = []), r = h[X[0].r][X[0].c] = {
											t: "z"
										}) : r = h[Zt(X[0])] = {
											t: "z"
										}, _.e.r = Math.max(_.e.r, X[0].r), _.s.r = Math.min(_.s.r, X[0].r), _.e.c = Math.max(_.e.c, X[0].c), _.s.c = Math.min(_.s.c, X[0].c)), r.c || (r.c = []), i = {
											a: X[1],
											t: he.TxO.t
										}, r.c.push(i);
										break;
									default:
										switch (W.n) {
											case "ClrtClient":
												break;
											case "XFExt":
												eo(E[X.ixfe], X.ext);
												break;
											case "DefColWidth":
												break;
											case "DefaultRowHeight":
												X[1];
												break;
											case "ColInfo":
												if (!x.cellStyles) break;
												for (; X.e >= X.s;) L[X.e--] = {
													width: X.w / 256
												}, B || (B = !0, ya(X.w / 256)), Aa(L[X.e + 1]);
												break;
											case "Row":
												var pe = {};
												null != X.level && (D[X.r] = pe, pe.level = X.level), X.hidden && (D[X.r] = pe, pe.hidden = !0), X.hpt && (D[X.r] = pe, pe.hpt = X.hpt, pe.hpx = wa(X.hpt));
												break;
											case "LeftMargin":
											case "RightMargin":
											case "TopMargin":
											case "BottomMargin":
												h["!margins"] || bs(h["!margins"] = {}), h["!margins"][J.slice(0, -6).toLowerCase()] = X;
												break;
											case "Setup":
												h["!margins"] || bs(h["!margins"] = {}), h["!margins"].header = X.header, h["!margins"].footer = X.footer;
												break;
											case "Window2":
												X.RTL && (C.Views[0].RTL = !0);
												break;
											case "Header":
											case "Footer":
											case "HCenter":
											case "VCenter":
											case "Pls":
											case "GCW":
											case "LHRecord":
											case "DBCell":
											case "EntExU2":
											case "SxView":
											case "Sxvd":
											case "SXVI":
											case "SXVDEx":
											case "SxIvd":
											case "SXString":
											case "Sync":
											case "Addin":
											case "SXDI":
											case "SXLI":
											case "SXEx":
											case "QsiSXTag":
											case "Selection":
											case "Feat":
												break;
											case "FeatHdr":
											case "FeatHdr11":
												break;
											case "Feature11":
											case "Feature12":
											case "List12":
												break;
											case "Country":
												u = X;
												break;
											case "RecalcId":
											case "DxGCol":
												break;
											case "Fbi":
											case "Fbi2":
											case "GelFrame":
											case "Font":
											case "XFCRC":
											case "Style":
											case "StyleExt":
												break;
											case "Palette":
												T = X;
												break;
											case "Theme":
												c = X;
												break;
											case "ScenarioProtect":
											case "ObjProtect":
											case "CondFmt12":
											case "Table":
											case "TableStyles":
											case "TableStyle":
											case "TableStyleElement":
											case "SXStreamID":
											case "SXVS":
											case "DConRef":
											case "SXAddl":
											case "DConBin":
											case "DConName":
											case "SXPI":
											case "SxFormat":
											case "SxSelect":
											case "SxRule":
											case "SxFilt":
											case "SxItm":
											case "SxDXF":
											case "ScenMan":
											case "DCon":
											case "CellWatch":
											case "PrintRowCol":
											case "PrintGrid":
											case "PrintSize":
											case "XCT":
											case "CRN":
											case "Scl":
											case "SheetExt":
											case "SheetExtOptional":
											case "ObNoMacros":
											case "ObProj":
												break;
											case "CodeName":
												g ? $.CodeName = X || $.name : C.WBProps.CodeName = X || "ThisWorkbook";
												break;
											case "GUIDTypeLib":
											case "WOpt":
											case "PhoneticInfo":
											case "OleObjectSize":
												break;
											case "DXF":
											case "DXFN":
											case "DXFN12":
											case "DXFN12List":
											case "DXFN12NoCB":
												break;
											case "Dv":
											case "DVal":
												break;
											case "BRAI":
											case "Series":
											case "SeriesText":
											case "DConn":
											case "DbOrParamQry":
											case "DBQueryExt":
											case "OleDbConn":
											case "ExtString":
											case "IFmtRecord":
												break;
											case "CondFmt":
											case "CF":
											case "CF12":
											case "CFEx":
											case "Excel9File":
											case "Units":
												break;
											case "InterfaceHdr":
											case "Mms":
											case "InterfaceEnd":
											case "DSF":
											case "BuiltInFnGroupCount":
												break;
											case "Window1":
											case "HideObj":
											case "GridSet":
											case "Guts":
											case "UserBView":
											case "UserSViewBegin":
											case "UserSViewEnd":
											case "Pane":
												break;
											default:
												switch (W.n) {
													case "Dat":
													case "Begin":
													case "End":
													case "StartBlock":
													case "EndBlock":
													case "Frame":
													case "Area":
													case "Axis":
													case "AxisLine":
													case "Tick":
														break;
													case "AxesUsed":
													case "CrtLayout12":
													case "CrtLayout12A":
													case "CrtLink":
													case "CrtLine":
													case "CrtMlFrt":
													case "CrtMlFrtContinue":
														break;
													case "LineFormat":
													case "AreaFormat":
													case "Chart":
													case "Chart3d":
													case "Chart3DBarShape":
													case "ChartFormat":
													case "ChartFrtInfo":
														break;
													case "PlotArea":
													case "PlotGrowth":
														break;
													case "SeriesList":
													case "SerParent":
													case "SerAuxTrend":
														break;
													case "DataFormat":
													case "SerToCrt":
													case "FontX":
														break;
													case "CatSerRange":
													case "AxcExt":
													case "SerFmt":
													case "ShtProps":
														break;
													case "DefaultText":
													case "Text":
													case "CatLab":
													case "DataLabExtContents":
														break;
													case "Legend":
													case "LegendException":
														break;
													case "Pie":
													case "Scatter":
														break;
													case "PieFormat":
													case "MarkerFormat":
														break;
													case "StartObject":
													case "EndObject":
														break;
													case "AlRuns":
													case "ObjectLink":
													case "SIIndex":
														break;
													case "AttachedLabel":
													case "YMult":
														break;
													case "Line":
													case "Bar":
													case "Surf":
													case "AxisParent":
													case "Pos":
													case "ValueRange":
													case "SXViewEx9":
													case "SXViewLink":
													case "PivotChartBits":
													case "SBaseRef":
													case "TextPropsStream":
													case "LnExt":
													case "MkrExt":
													case "CrtCoopt":
														break;
													case "Qsi":
													case "Qsif":
													case "Qsir":
													case "QsiSXTag":
													case "TxtQry":
													case "FilterMode":
														break;
													case "AutoFilter":
													case "AutoFilterInfo":
													case "AutoFilter12":
													case "DropDownObjIds":
													case "Sort":
													case "SortData":
													case "ShapePropsStream":
														break;
													case "MsoDrawing":
													case "MsoDrawingGroup":
													case "MsoDrawingSelection":
														break;
													case "WebPub":
													case "AutoWebPub":
														break;
													case "HeaderFooter":
													case "HFPicture":
													case "PLV":
													case "HorizontalPageBreaks":
													case "VerticalPageBreaks":
														break;
													case "Backup":
													case "CompressPictures":
													case "Compat12":
														break;
													case "Continue":
													case "ContinueFrt12":
														break;
													case "FrtFontList":
													case "FrtWrapper":
														break;
													default:
														switch (W.n) {
															case "TabIdConf":
															case "Radar":
															case "RadarArea":
															case "DropBar":
															case "Intl":
															case "CoordList":
															case "SerAuxErrBar":
																break;
															case "BIFF2FONTCLR":
															case "BIFF2FMTCNT":
															case "BIFF2FONTXTRA":
																break;
															case "BIFF2XF":
															case "BIFF3XF":
															case "BIFF4XF":
																break;
															case "BIFF4FMTCNT":
															case "BIFF2ROW":
															case "BIFF2WINDOW2":
																break;
															case "SCENARIO":
															case "DConBin":
															case "PicF":
															case "DataLabExt":
															case "Lel":
															case "BopPop":
															case "BopPopCustom":
															case "RealTimeData":
															case "Name":
																break;
															case "LHNGraph":
															case "FnGroupName":
															case "AddMenu":
															case "LPr":
																break;
															case "ListObj":
															case "ListField":
															case "RRSort":
															case "BigName":
																break;
															case "ToolbarHdr":
															case "ToolbarEnd":
															case "DDEObjName":
															case "FRTArchId$":
																break;
															default:
																if (t.WTF) throw "Unrecognized Record " + W.n
														}
												}
										}
								}
							} else e.l += q
						}
						return l.SheetNames = H(p).sort((function(e, t) {
							return Number(e) - Number(t)
						})).map((function(e) {
							return p[e].name
						})), t.bookSheets || (l.Sheets = f), l.Sheets && V.forEach((function(e, t) {
							l.Sheets[l.SheetNames[t]]["!autofilter"] = e
						})), l.Preamble = v, l.Strings = b, l.SSF = M.get_table(), x.enc && (l.Encryption = x.enc), c && (l.Themes = c), l.Metadata = {}, void 0 !== u && (l.Metadata.Country = u), N.names.length > 0 && (C.Names = N.names), l.Workbook = C, l
					}
					var ec = "e0859ff2f94f6810ab9108002b27b3d9",
						tc = "02d5cdd59c2e1b10939708002b2cf9ae",
						nc = "05d5cdd59c2e1b10939708002b2cf9ae";

					function rc(e, t) {
						var n, r, i, a;
						if (t || (t = {}), Fc(t), h(), t.codepage && f(t.codepage), e.FullPaths) {
							if (F.find(e, "/encryption")) throw new Error("File is password-protected");
							n = F.find(e, "!CompObj"), r = F.find(e, "/Workbook") || F.find(e, "/Book")
						} else {
							switch (t.type) {
								case "base64":
									e = E(g.decode(e));
									break;
								case "binary":
									e = E(e);
									break;
								case "buffer":
									break;
								case "array":
									Array.isArray(e) || (e = Array.prototype.slice.call(e))
							}
							Rt(e, 0), r = {
								content: e
							}
						}
						if (n && Wu(n), t.bookProps && !t.bookSheets) i = {};
						else {
							var o = v ? "buffer" : "array";
							if (r && r.content) i = Zu(r.content, t);
							else if ((a = F.find(e, "PerfectOffice_MAIN")) && a.content) i = Fi.to_workbook(a.content, (t.type = o, t));
							else {
								if (!(a = F.find(e, "NativeContent_MAIN")) || !a.content) throw new Error("Cannot find Workbook stream");
								i = Fi.to_workbook(a.content, (t.type = o, t))
							}
							t.bookVBA && e.FullPaths && F.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (i.vbaraw = function(e) {
								var t = F.utils.cfb_new({
									root: "R"
								});
								return e.FullPaths.forEach((function(n, r) {
									if ("/" !== n.slice(-1) && n.match(/_VBA_PROJECT_CUR/)) {
										var i = n.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
										F.utils.cfb_add(t, i, e.FileIndex[r].content)
									}
								})), F.write(t)
							}(e))
						}
						var s = {};
						return e.FullPaths && function(e, t, n) {
							var r = F.find(e, "!DocumentSummaryInformation");
							if (r && r.size > 0) try {
								var i = Lr(r, In, tc);
								for (var a in i) t[a] = i[a]
							} catch (e) {
								if (n.WTF) throw e
							}
							var o = F.find(e, "!SummaryInformation");
							if (o && o.size > 0) try {
								var s = Lr(o, Ln, ec);
								for (var u in s) null == t[u] && (t[u] = s[u])
							} catch (e) {
								if (n.WTF) throw e
							}
							t.HeadingPairs && t.TitlesOfParts && (lr(t.HeadingPairs, t.TitlesOfParts, t, n), delete t.HeadingPairs, delete t.TitlesOfParts)
						}(e, s, t), i.Props = i.Custprops = s, t.bookFiles && (i.cfb = e), i
					}

					function ic(e, t) {
						var n = t || {},
							r = F.utils.cfb_new({
								root: "R"
							}),
							i = "/Workbook";
						switch (n.bookType || "xls") {
							case "xls":
								n.bookType = "biff8";
							case "xla":
								n.bookType || (n.bookType = "xla");
							case "biff8":
								i = "/Workbook", n.biff = 8;
								break;
							case "biff5":
								i = "/Book", n.biff = 5;
								break;
							default:
								throw new Error("invalid type " + n.bookType + " for XLS CFB")
						}
						return F.utils.cfb_add(r, i, bc(e, n)), 8 == n.biff && (e.Props || e.Custprops) && function(e, t) {
							var n, r = [],
								i = [],
								a = [],
								o = 0;
							if (e.Props)
								for (n = H(e.Props), o = 0; o < n.length; ++o)(Object.prototype.hasOwnProperty.call(Bn, n[o]) ? r : Object.prototype.hasOwnProperty.call(Nn, n[o]) ? i : a).push([n[o], e.Props[n[o]]]);
							if (e.Custprops)
								for (n = H(e.Custprops), o = 0; o < n.length; ++o) Object.prototype.hasOwnProperty.call(e.Props || {}, n[o]) || (Object.prototype.hasOwnProperty.call(Bn, n[o]) ? r : Object.prototype.hasOwnProperty.call(Nn, n[o]) ? i : a).push([n[o], e.Custprops[n[o]]]);
							var s = [];
							for (o = 0; o < a.length; ++o) Pr.indexOf(a[o][0]) > -1 || null != a[o][1] && s.push(a[o]);
							i.length && F.utils.cfb_add(t, "/SummaryInformation", Dr(i, ec, Nn, Ln)), (r.length || s.length) && F.utils.cfb_add(t, "/DocumentSummaryInformation", Dr(r, tc, Bn, In, s.length ? s : null, nc))
						}(e, r), 8 == n.biff && e.vbaraw && function(e, t) {
							t.FullPaths.forEach((function(n, r) {
								if (0 != r) {
									var i = n.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
									"/" !== i.slice(-1) && F.utils.cfb_add(e, i, t.FileIndex[r].content)
								}
							}))
						}(r, F.read(e.vbaraw, {
							type: "string" == typeof e.vbaraw ? "binary" : "buffer"
						})), r
					}
					var ac = {
							0: {
								n: "BrtRowHdr",
								f: function(e, t) {
									var n = {},
										r = e.l + t;
									n.r = e.read_shift(4), e.l += 4;
									var i = e.read_shift(2);
									e.l += 1;
									var a = e.read_shift(1);
									return e.l = r, 7 & a && (n.level = 7 & a), 16 & a && (n.hidden = !0), 32 & a && (n.hpt = i / 20), n
								}
							},
							1: {
								n: "BrtCellBlank",
								f: function(e) {
									return [_n(e)]
								}
							},
							2: {
								n: "BrtCellRk",
								f: function(e) {
									return [_n(e), En(e), "n"]
								}
							},
							3: {
								n: "BrtCellError",
								f: function(e) {
									return [_n(e), e.read_shift(1), "e"]
								}
							},
							4: {
								n: "BrtCellBool",
								f: function(e) {
									return [_n(e), e.read_shift(1), "b"]
								}
							},
							5: {
								n: "BrtCellReal",
								f: function(e) {
									return [_n(e), kn(e), "n"]
								}
							},
							6: {
								n: "BrtCellSt",
								f: function(e) {
									return [_n(e), cn(e), "str"]
								}
							},
							7: {
								n: "BrtCellIsst",
								f: function(e) {
									return [_n(e), e.read_shift(4), "s"]
								}
							},
							8: {
								n: "BrtFmlaString",
								f: function(e, t, n) {
									var r = e.l + t,
										i = _n(e);
									i.r = n["!row"];
									var a = [i, cn(e), "str"];
									if (n.cellFormula) {
										e.l += 2;
										var o = ts(e, r - e.l, n);
										a[3] = qo(o, 0, i, n.supbooks, n)
									} else e.l = r;
									return a
								}
							},
							9: {
								n: "BrtFmlaNum",
								f: function(e, t, n) {
									var r = e.l + t,
										i = _n(e);
									i.r = n["!row"];
									var a = [i, kn(e), "n"];
									if (n.cellFormula) {
										e.l += 2;
										var o = ts(e, r - e.l, n);
										a[3] = qo(o, 0, i, n.supbooks, n)
									} else e.l = r;
									return a
								}
							},
							10: {
								n: "BrtFmlaBool",
								f: function(e, t, n) {
									var r = e.l + t,
										i = _n(e);
									i.r = n["!row"];
									var a = [i, e.read_shift(1), "b"];
									if (n.cellFormula) {
										e.l += 2;
										var o = ts(e, r - e.l, n);
										a[3] = qo(o, 0, i, n.supbooks, n)
									} else e.l = r;
									return a
								}
							},
							11: {
								n: "BrtFmlaError",
								f: function(e, t, n) {
									var r = e.l + t,
										i = _n(e);
									i.r = n["!row"];
									var a = [i, e.read_shift(1), "e"];
									if (n.cellFormula) {
										e.l += 2;
										var o = ts(e, r - e.l, n);
										a[3] = qo(o, 0, i, n.supbooks, n)
									} else e.l = r;
									return a
								}
							},
							16: {
								n: "BrtFRTArchID$",
								f: function(e, t) {
									var n = {};
									return e.read_shift(4), n.ArchID = e.read_shift(4), e.l += t - 8, n
								}
							},
							19: {
								n: "BrtSSTItem",
								f: dn
							},
							20: {
								n: "BrtPCDIMissing"
							},
							21: {
								n: "BrtPCDINumber"
							},
							22: {
								n: "BrtPCDIBoolean"
							},
							23: {
								n: "BrtPCDIError"
							},
							24: {
								n: "BrtPCDIString"
							},
							25: {
								n: "BrtPCDIDatetime"
							},
							26: {
								n: "BrtPCDIIndex"
							},
							27: {
								n: "BrtPCDIAMissing"
							},
							28: {
								n: "BrtPCDIANumber"
							},
							29: {
								n: "BrtPCDIABoolean"
							},
							30: {
								n: "BrtPCDIAError"
							},
							31: {
								n: "BrtPCDIAString"
							},
							32: {
								n: "BrtPCDIADatetime"
							},
							33: {
								n: "BrtPCRRecord"
							},
							34: {
								n: "BrtPCRRecordDt"
							},
							35: {
								n: "BrtFRTBegin"
							},
							36: {
								n: "BrtFRTEnd"
							},
							37: {
								n: "BrtACBegin"
							},
							38: {
								n: "BrtACEnd"
							},
							39: {
								n: "BrtName",
								f: function(e, t, n) {
									var r = e.l + t;
									e.l += 4, e.l += 1;
									var i = e.read_shift(4),
										a = An(e),
										o = ns(e, 0, n),
										s = vn(e);
									e.l = r;
									var u = {
										Name: a,
										Ptg: o
									};
									return i < 268435455 && (u.Sheet = i), s && (u.Comment = s), u
								}
							},
							40: {
								n: "BrtIndexRowBlock"
							},
							42: {
								n: "BrtIndexBlock"
							},
							43: {
								n: "BrtFont",
								f: function(e, t, n) {
									var r = {};
									r.sz = e.read_shift(2) / 20;
									var i = function(e) {
										var t = e.read_shift(1);
										return e.l++, {
											fBold: 1 & t,
											fItalic: 2 & t,
											fUnderline: 4 & t,
											fStrikeout: 8 & t,
											fOutline: 16 & t,
											fShadow: 32 & t,
											fCondense: 64 & t,
											fExtend: 128 & t
										}
									}(e);
									switch (i.fItalic && (r.italic = 1), i.fCondense && (r.condense = 1), i.fExtend && (r.extend = 1), i.fShadow && (r.shadow = 1), i.fOutline && (r.outline = 1), i.fStrikeout && (r.strike = 1), 700 === e.read_shift(2) && (r.bold = 1), e.read_shift(2)) {
										case 1:
											r.vertAlign = "superscript";
											break;
										case 2:
											r.vertAlign = "subscript"
									}
									var a = e.read_shift(1);
									0 != a && (r.underline = a);
									var o = e.read_shift(1);
									o > 0 && (r.family = o);
									var s = e.read_shift(1);
									switch (s > 0 && (r.charset = s), e.l++, r.color = function(e) {
										var t = {},
											n = e.read_shift(1) >>> 1,
											r = e.read_shift(1),
											i = e.read_shift(2, "i"),
											a = e.read_shift(1),
											o = e.read_shift(1),
											s = e.read_shift(1);
										switch (e.l++, n) {
											case 0:
												t.auto = 1;
												break;
											case 1:
												t.index = r;
												var u = Un[r];
												u && (t.rgb = ha(u));
												break;
											case 2:
												t.rgb = ha([a, o, s]);
												break;
											case 3:
												t.theme = r
										}
										return 0 != i && (t.tint = i > 0 ? i / 32767 : i / 32768), t
									}(e), e.read_shift(1)) {
										case 1:
											r.scheme = "major";
											break;
										case 2:
											r.scheme = "minor"
									}
									return r.name = cn(e), r
								}
							},
							44: {
								n: "BrtFmt",
								f: function(e, t) {
									return [e.read_shift(2), cn(e)]
								}
							},
							45: {
								n: "BrtFill",
								f: Ia
							},
							46: {
								n: "BrtBorder",
								f: Na
							},
							47: {
								n: "BrtXF",
								f: function(e, t) {
									var n = e.l + t,
										r = e.read_shift(2),
										i = e.read_shift(2);
									return e.l = n, {
										ixfe: r,
										numFmtId: i
									}
								}
							},
							48: {
								n: "BrtStyle"
							},
							49: {
								n: "BrtCellMeta"
							},
							50: {
								n: "BrtValueMeta"
							},
							51: {
								n: "BrtMdb"
							},
							52: {
								n: "BrtBeginFmd"
							},
							53: {
								n: "BrtEndFmd"
							},
							54: {
								n: "BrtBeginMdx"
							},
							55: {
								n: "BrtEndMdx"
							},
							56: {
								n: "BrtBeginMdxTuple"
							},
							57: {
								n: "BrtEndMdxTuple"
							},
							58: {
								n: "BrtMdxMbrIstr"
							},
							59: {
								n: "BrtStr"
							},
							60: {
								n: "BrtColInfo",
								f: xi
							},
							62: {
								n: "BrtCellRString"
							},
							63: {
								n: "BrtCalcChainItem$",
								f: function(e) {
									var t = {};
									t.i = e.read_shift(4);
									var n = {};
									n.r = e.read_shift(4), n.c = e.read_shift(4), t.r = Zt(n);
									var r = e.read_shift(1);
									return 2 & r && (t.l = "1"), 8 & r && (t.a = "1"), t
								}
							},
							64: {
								n: "BrtDVal",
								f: function() {}
							},
							65: {
								n: "BrtSxvcellNum"
							},
							66: {
								n: "BrtSxvcellStr"
							},
							67: {
								n: "BrtSxvcellBool"
							},
							68: {
								n: "BrtSxvcellErr"
							},
							69: {
								n: "BrtSxvcellDate"
							},
							70: {
								n: "BrtSxvcellNil"
							},
							128: {
								n: "BrtFileVersion"
							},
							129: {
								n: "BrtBeginSheet"
							},
							130: {
								n: "BrtEndSheet"
							},
							131: {
								n: "BrtBeginBook",
								f: Ft,
								p: 0
							},
							132: {
								n: "BrtEndBook"
							},
							133: {
								n: "BrtBeginWsViews"
							},
							134: {
								n: "BrtEndWsViews"
							},
							135: {
								n: "BrtBeginBookViews"
							},
							136: {
								n: "BrtEndBookViews"
							},
							137: {
								n: "BrtBeginWsView",
								f: function(e) {
									var t = e.read_shift(2);
									return e.l += 28, {
										RTL: 32 & t
									}
								}
							},
							138: {
								n: "BrtEndWsView"
							},
							139: {
								n: "BrtBeginCsViews"
							},
							140: {
								n: "BrtEndCsViews"
							},
							141: {
								n: "BrtBeginCsView"
							},
							142: {
								n: "BrtEndCsView"
							},
							143: {
								n: "BrtBeginBundleShs"
							},
							144: {
								n: "BrtEndBundleShs"
							},
							145: {
								n: "BrtBeginSheetData"
							},
							146: {
								n: "BrtEndSheetData"
							},
							147: {
								n: "BrtWsProp",
								f: function(e, t) {
									var n = {};
									return e.l += 19, n.name = bn(e, t - 19), n
								}
							},
							148: {
								n: "BrtWsDim",
								f: Us,
								p: 16
							},
							151: {
								n: "BrtPane",
								f: function() {}
							},
							152: {
								n: "BrtSel"
							},
							153: {
								n: "BrtWbProp",
								f: function(e, t) {
									var n = {},
										r = e.read_shift(4);
									n.defaultThemeVersion = e.read_shift(4);
									var i = t > 8 ? cn(e) : "";
									return i.length > 0 && (n.CodeName = i), n.autoCompressPictures = !!(65536 & r), n.backupFile = !!(64 & r), n.checkCompatibility = !!(4096 & r), n.date1904 = !!(1 & r), n.filterPrivacy = !!(8 & r), n.hidePivotFieldList = !!(1024 & r), n.promptedSolutions = !!(16 & r), n.publishItems = !!(2048 & r), n.refreshAllConnections = !!(262144 & r), n.saveExternalLinkValues = !!(128 & r), n.showBorderUnselectedTables = !!(4 & r), n.showInkAnnotation = !!(32 & r), n.showObjects = ["all", "placeholders", "none"][r >> 13 & 3], n.showPivotChartFilter = !!(32768 & r), n.updateLinks = ["userSet", "never", "always"][r >> 8 & 3], n
								}
							},
							154: {
								n: "BrtWbFactoid"
							},
							155: {
								n: "BrtFileRecover"
							},
							156: {
								n: "BrtBundleSh",
								f: function(e, t) {
									var n = {};
									return n.Hidden = e.read_shift(4), n.iTabID = e.read_shift(4), n.strRelID = Sn(e, t - 8), n.name = cn(e), n
								}
							},
							157: {
								n: "BrtCalcProp"
							},
							158: {
								n: "BrtBookView"
							},
							159: {
								n: "BrtBeginSst",
								f: function(e) {
									return [e.read_shift(4), e.read_shift(4)]
								}
							},
							160: {
								n: "BrtEndSst"
							},
							161: {
								n: "BrtBeginAFilter",
								f: Cn
							},
							162: {
								n: "BrtEndAFilter"
							},
							163: {
								n: "BrtBeginFilterColumn"
							},
							164: {
								n: "BrtEndFilterColumn"
							},
							165: {
								n: "BrtBeginFilters"
							},
							166: {
								n: "BrtEndFilters"
							},
							167: {
								n: "BrtFilter"
							},
							168: {
								n: "BrtColorFilter"
							},
							169: {
								n: "BrtIconFilter"
							},
							170: {
								n: "BrtTop10Filter"
							},
							171: {
								n: "BrtDynamicFilter"
							},
							172: {
								n: "BrtBeginCustomFilters"
							},
							173: {
								n: "BrtEndCustomFilters"
							},
							174: {
								n: "BrtCustomFilter"
							},
							175: {
								n: "BrtAFilterDateGroupItem"
							},
							176: {
								n: "BrtMergeCell",
								f: Ys
							},
							177: {
								n: "BrtBeginMergeCells"
							},
							178: {
								n: "BrtEndMergeCells"
							},
							179: {
								n: "BrtBeginPivotCacheDef"
							},
							180: {
								n: "BrtEndPivotCacheDef"
							},
							181: {
								n: "BrtBeginPCDFields"
							},
							182: {
								n: "BrtEndPCDFields"
							},
							183: {
								n: "BrtBeginPCDField"
							},
							184: {
								n: "BrtEndPCDField"
							},
							185: {
								n: "BrtBeginPCDSource"
							},
							186: {
								n: "BrtEndPCDSource"
							},
							187: {
								n: "BrtBeginPCDSRange"
							},
							188: {
								n: "BrtEndPCDSRange"
							},
							189: {
								n: "BrtBeginPCDFAtbl"
							},
							190: {
								n: "BrtEndPCDFAtbl"
							},
							191: {
								n: "BrtBeginPCDIRun"
							},
							192: {
								n: "BrtEndPCDIRun"
							},
							193: {
								n: "BrtBeginPivotCacheRecords"
							},
							194: {
								n: "BrtEndPivotCacheRecords"
							},
							195: {
								n: "BrtBeginPCDHierarchies"
							},
							196: {
								n: "BrtEndPCDHierarchies"
							},
							197: {
								n: "BrtBeginPCDHierarchy"
							},
							198: {
								n: "BrtEndPCDHierarchy"
							},
							199: {
								n: "BrtBeginPCDHFieldsUsage"
							},
							200: {
								n: "BrtEndPCDHFieldsUsage"
							},
							201: {
								n: "BrtBeginExtConnection"
							},
							202: {
								n: "BrtEndExtConnection"
							},
							203: {
								n: "BrtBeginECDbProps"
							},
							204: {
								n: "BrtEndECDbProps"
							},
							205: {
								n: "BrtBeginECOlapProps"
							},
							206: {
								n: "BrtEndECOlapProps"
							},
							207: {
								n: "BrtBeginPCDSConsol"
							},
							208: {
								n: "BrtEndPCDSConsol"
							},
							209: {
								n: "BrtBeginPCDSCPages"
							},
							210: {
								n: "BrtEndPCDSCPages"
							},
							211: {
								n: "BrtBeginPCDSCPage"
							},
							212: {
								n: "BrtEndPCDSCPage"
							},
							213: {
								n: "BrtBeginPCDSCPItem"
							},
							214: {
								n: "BrtEndPCDSCPItem"
							},
							215: {
								n: "BrtBeginPCDSCSets"
							},
							216: {
								n: "BrtEndPCDSCSets"
							},
							217: {
								n: "BrtBeginPCDSCSet"
							},
							218: {
								n: "BrtEndPCDSCSet"
							},
							219: {
								n: "BrtBeginPCDFGroup"
							},
							220: {
								n: "BrtEndPCDFGroup"
							},
							221: {
								n: "BrtBeginPCDFGItems"
							},
							222: {
								n: "BrtEndPCDFGItems"
							},
							223: {
								n: "BrtBeginPCDFGRange"
							},
							224: {
								n: "BrtEndPCDFGRange"
							},
							225: {
								n: "BrtBeginPCDFGDiscrete"
							},
							226: {
								n: "BrtEndPCDFGDiscrete"
							},
							227: {
								n: "BrtBeginPCDSDTupleCache"
							},
							228: {
								n: "BrtEndPCDSDTupleCache"
							},
							229: {
								n: "BrtBeginPCDSDTCEntries"
							},
							230: {
								n: "BrtEndPCDSDTCEntries"
							},
							231: {
								n: "BrtBeginPCDSDTCEMembers"
							},
							232: {
								n: "BrtEndPCDSDTCEMembers"
							},
							233: {
								n: "BrtBeginPCDSDTCEMember"
							},
							234: {
								n: "BrtEndPCDSDTCEMember"
							},
							235: {
								n: "BrtBeginPCDSDTCQueries"
							},
							236: {
								n: "BrtEndPCDSDTCQueries"
							},
							237: {
								n: "BrtBeginPCDSDTCQuery"
							},
							238: {
								n: "BrtEndPCDSDTCQuery"
							},
							239: {
								n: "BrtBeginPCDSDTCSets"
							},
							240: {
								n: "BrtEndPCDSDTCSets"
							},
							241: {
								n: "BrtBeginPCDSDTCSet"
							},
							242: {
								n: "BrtEndPCDSDTCSet"
							},
							243: {
								n: "BrtBeginPCDCalcItems"
							},
							244: {
								n: "BrtEndPCDCalcItems"
							},
							245: {
								n: "BrtBeginPCDCalcItem"
							},
							246: {
								n: "BrtEndPCDCalcItem"
							},
							247: {
								n: "BrtBeginPRule"
							},
							248: {
								n: "BrtEndPRule"
							},
							249: {
								n: "BrtBeginPRFilters"
							},
							250: {
								n: "BrtEndPRFilters"
							},
							251: {
								n: "BrtBeginPRFilter"
							},
							252: {
								n: "BrtEndPRFilter"
							},
							253: {
								n: "BrtBeginPNames"
							},
							254: {
								n: "BrtEndPNames"
							},
							255: {
								n: "BrtBeginPName"
							},
							256: {
								n: "BrtEndPName"
							},
							257: {
								n: "BrtBeginPNPairs"
							},
							258: {
								n: "BrtEndPNPairs"
							},
							259: {
								n: "BrtBeginPNPair"
							},
							260: {
								n: "BrtEndPNPair"
							},
							261: {
								n: "BrtBeginECWebProps"
							},
							262: {
								n: "BrtEndECWebProps"
							},
							263: {
								n: "BrtBeginEcWpTables"
							},
							264: {
								n: "BrtEndECWPTables"
							},
							265: {
								n: "BrtBeginECParams"
							},
							266: {
								n: "BrtEndECParams"
							},
							267: {
								n: "BrtBeginECParam"
							},
							268: {
								n: "BrtEndECParam"
							},
							269: {
								n: "BrtBeginPCDKPIs"
							},
							270: {
								n: "BrtEndPCDKPIs"
							},
							271: {
								n: "BrtBeginPCDKPI"
							},
							272: {
								n: "BrtEndPCDKPI"
							},
							273: {
								n: "BrtBeginDims"
							},
							274: {
								n: "BrtEndDims"
							},
							275: {
								n: "BrtBeginDim"
							},
							276: {
								n: "BrtEndDim"
							},
							277: {
								n: "BrtIndexPartEnd"
							},
							278: {
								n: "BrtBeginStyleSheet"
							},
							279: {
								n: "BrtEndStyleSheet"
							},
							280: {
								n: "BrtBeginSXView"
							},
							281: {
								n: "BrtEndSXVI"
							},
							282: {
								n: "BrtBeginSXVI"
							},
							283: {
								n: "BrtBeginSXVIs"
							},
							284: {
								n: "BrtEndSXVIs"
							},
							285: {
								n: "BrtBeginSXVD"
							},
							286: {
								n: "BrtEndSXVD"
							},
							287: {
								n: "BrtBeginSXVDs"
							},
							288: {
								n: "BrtEndSXVDs"
							},
							289: {
								n: "BrtBeginSXPI"
							},
							290: {
								n: "BrtEndSXPI"
							},
							291: {
								n: "BrtBeginSXPIs"
							},
							292: {
								n: "BrtEndSXPIs"
							},
							293: {
								n: "BrtBeginSXDI"
							},
							294: {
								n: "BrtEndSXDI"
							},
							295: {
								n: "BrtBeginSXDIs"
							},
							296: {
								n: "BrtEndSXDIs"
							},
							297: {
								n: "BrtBeginSXLI"
							},
							298: {
								n: "BrtEndSXLI"
							},
							299: {
								n: "BrtBeginSXLIRws"
							},
							300: {
								n: "BrtEndSXLIRws"
							},
							301: {
								n: "BrtBeginSXLICols"
							},
							302: {
								n: "BrtEndSXLICols"
							},
							303: {
								n: "BrtBeginSXFormat"
							},
							304: {
								n: "BrtEndSXFormat"
							},
							305: {
								n: "BrtBeginSXFormats"
							},
							306: {
								n: "BrtEndSxFormats"
							},
							307: {
								n: "BrtBeginSxSelect"
							},
							308: {
								n: "BrtEndSxSelect"
							},
							309: {
								n: "BrtBeginISXVDRws"
							},
							310: {
								n: "BrtEndISXVDRws"
							},
							311: {
								n: "BrtBeginISXVDCols"
							},
							312: {
								n: "BrtEndISXVDCols"
							},
							313: {
								n: "BrtEndSXLocation"
							},
							314: {
								n: "BrtBeginSXLocation"
							},
							315: {
								n: "BrtEndSXView"
							},
							316: {
								n: "BrtBeginSXTHs"
							},
							317: {
								n: "BrtEndSXTHs"
							},
							318: {
								n: "BrtBeginSXTH"
							},
							319: {
								n: "BrtEndSXTH"
							},
							320: {
								n: "BrtBeginISXTHRws"
							},
							321: {
								n: "BrtEndISXTHRws"
							},
							322: {
								n: "BrtBeginISXTHCols"
							},
							323: {
								n: "BrtEndISXTHCols"
							},
							324: {
								n: "BrtBeginSXTDMPS"
							},
							325: {
								n: "BrtEndSXTDMPs"
							},
							326: {
								n: "BrtBeginSXTDMP"
							},
							327: {
								n: "BrtEndSXTDMP"
							},
							328: {
								n: "BrtBeginSXTHItems"
							},
							329: {
								n: "BrtEndSXTHItems"
							},
							330: {
								n: "BrtBeginSXTHItem"
							},
							331: {
								n: "BrtEndSXTHItem"
							},
							332: {
								n: "BrtBeginMetadata"
							},
							333: {
								n: "BrtEndMetadata"
							},
							334: {
								n: "BrtBeginEsmdtinfo"
							},
							335: {
								n: "BrtMdtinfo"
							},
							336: {
								n: "BrtEndEsmdtinfo"
							},
							337: {
								n: "BrtBeginEsmdb"
							},
							338: {
								n: "BrtEndEsmdb"
							},
							339: {
								n: "BrtBeginEsfmd"
							},
							340: {
								n: "BrtEndEsfmd"
							},
							341: {
								n: "BrtBeginSingleCells"
							},
							342: {
								n: "BrtEndSingleCells"
							},
							343: {
								n: "BrtBeginList"
							},
							344: {
								n: "BrtEndList"
							},
							345: {
								n: "BrtBeginListCols"
							},
							346: {
								n: "BrtEndListCols"
							},
							347: {
								n: "BrtBeginListCol"
							},
							348: {
								n: "BrtEndListCol"
							},
							349: {
								n: "BrtBeginListXmlCPr"
							},
							350: {
								n: "BrtEndListXmlCPr"
							},
							351: {
								n: "BrtListCCFmla"
							},
							352: {
								n: "BrtListTrFmla"
							},
							353: {
								n: "BrtBeginExternals"
							},
							354: {
								n: "BrtEndExternals"
							},
							355: {
								n: "BrtSupBookSrc",
								f: Sn
							},
							357: {
								n: "BrtSupSelf"
							},
							358: {
								n: "BrtSupSame"
							},
							359: {
								n: "BrtSupTabs"
							},
							360: {
								n: "BrtBeginSupBook"
							},
							361: {
								n: "BrtPlaceholderName"
							},
							362: {
								n: "BrtExternSheet",
								f: Ti
							},
							363: {
								n: "BrtExternTableStart"
							},
							364: {
								n: "BrtExternTableEnd"
							},
							366: {
								n: "BrtExternRowHdr"
							},
							367: {
								n: "BrtExternCellBlank"
							},
							368: {
								n: "BrtExternCellReal"
							},
							369: {
								n: "BrtExternCellBool"
							},
							370: {
								n: "BrtExternCellError"
							},
							371: {
								n: "BrtExternCellString"
							},
							372: {
								n: "BrtBeginEsmdx"
							},
							373: {
								n: "BrtEndEsmdx"
							},
							374: {
								n: "BrtBeginMdxSet"
							},
							375: {
								n: "BrtEndMdxSet"
							},
							376: {
								n: "BrtBeginMdxMbrProp"
							},
							377: {
								n: "BrtEndMdxMbrProp"
							},
							378: {
								n: "BrtBeginMdxKPI"
							},
							379: {
								n: "BrtEndMdxKPI"
							},
							380: {
								n: "BrtBeginEsstr"
							},
							381: {
								n: "BrtEndEsstr"
							},
							382: {
								n: "BrtBeginPRFItem"
							},
							383: {
								n: "BrtEndPRFItem"
							},
							384: {
								n: "BrtBeginPivotCacheIDs"
							},
							385: {
								n: "BrtEndPivotCacheIDs"
							},
							386: {
								n: "BrtBeginPivotCacheID"
							},
							387: {
								n: "BrtEndPivotCacheID"
							},
							388: {
								n: "BrtBeginISXVIs"
							},
							389: {
								n: "BrtEndISXVIs"
							},
							390: {
								n: "BrtBeginColInfos"
							},
							391: {
								n: "BrtEndColInfos"
							},
							392: {
								n: "BrtBeginRwBrk"
							},
							393: {
								n: "BrtEndRwBrk"
							},
							394: {
								n: "BrtBeginColBrk"
							},
							395: {
								n: "BrtEndColBrk"
							},
							396: {
								n: "BrtBrk"
							},
							397: {
								n: "BrtUserBookView"
							},
							398: {
								n: "BrtInfo"
							},
							399: {
								n: "BrtCUsr"
							},
							400: {
								n: "BrtUsr"
							},
							401: {
								n: "BrtBeginUsers"
							},
							403: {
								n: "BrtEOF"
							},
							404: {
								n: "BrtUCR"
							},
							405: {
								n: "BrtRRInsDel"
							},
							406: {
								n: "BrtRREndInsDel"
							},
							407: {
								n: "BrtRRMove"
							},
							408: {
								n: "BrtRREndMove"
							},
							409: {
								n: "BrtRRChgCell"
							},
							410: {
								n: "BrtRREndChgCell"
							},
							411: {
								n: "BrtRRHeader"
							},
							412: {
								n: "BrtRRUserView"
							},
							413: {
								n: "BrtRRRenSheet"
							},
							414: {
								n: "BrtRRInsertSh"
							},
							415: {
								n: "BrtRRDefName"
							},
							416: {
								n: "BrtRRNote"
							},
							417: {
								n: "BrtRRConflict"
							},
							418: {
								n: "BrtRRTQSIF"
							},
							419: {
								n: "BrtRRFormat"
							},
							420: {
								n: "BrtRREndFormat"
							},
							421: {
								n: "BrtRRAutoFmt"
							},
							422: {
								n: "BrtBeginUserShViews"
							},
							423: {
								n: "BrtBeginUserShView"
							},
							424: {
								n: "BrtEndUserShView"
							},
							425: {
								n: "BrtEndUserShViews"
							},
							426: {
								n: "BrtArrFmla",
								f: function(e, t, n) {
									var r = e.l + t,
										i = Tn(e),
										a = e.read_shift(1),
										o = [i];
									if (o[2] = a, n.cellFormula) {
										var s = es(e, r - e.l, n);
										o[1] = s
									} else e.l = r;
									return o
								}
							},
							427: {
								n: "BrtShrFmla",
								f: function(e, t, n) {
									var r = e.l + t,
										i = [Cn(e, 16)];
									if (n.cellFormula) {
										var a = rs(e, r - e.l, n);
										i[1] = a, e.l = r
									} else e.l = r;
									return i
								}
							},
							428: {
								n: "BrtTable"
							},
							429: {
								n: "BrtBeginExtConnections"
							},
							430: {
								n: "BrtEndExtConnections"
							},
							431: {
								n: "BrtBeginPCDCalcMems"
							},
							432: {
								n: "BrtEndPCDCalcMems"
							},
							433: {
								n: "BrtBeginPCDCalcMem"
							},
							434: {
								n: "BrtEndPCDCalcMem"
							},
							435: {
								n: "BrtBeginPCDHGLevels"
							},
							436: {
								n: "BrtEndPCDHGLevels"
							},
							437: {
								n: "BrtBeginPCDHGLevel"
							},
							438: {
								n: "BrtEndPCDHGLevel"
							},
							439: {
								n: "BrtBeginPCDHGLGroups"
							},
							440: {
								n: "BrtEndPCDHGLGroups"
							},
							441: {
								n: "BrtBeginPCDHGLGroup"
							},
							442: {
								n: "BrtEndPCDHGLGroup"
							},
							443: {
								n: "BrtBeginPCDHGLGMembers"
							},
							444: {
								n: "BrtEndPCDHGLGMembers"
							},
							445: {
								n: "BrtBeginPCDHGLGMember"
							},
							446: {
								n: "BrtEndPCDHGLGMember"
							},
							447: {
								n: "BrtBeginQSI"
							},
							448: {
								n: "BrtEndQSI"
							},
							449: {
								n: "BrtBeginQSIR"
							},
							450: {
								n: "BrtEndQSIR"
							},
							451: {
								n: "BrtBeginDeletedNames"
							},
							452: {
								n: "BrtEndDeletedNames"
							},
							453: {
								n: "BrtBeginDeletedName"
							},
							454: {
								n: "BrtEndDeletedName"
							},
							455: {
								n: "BrtBeginQSIFs"
							},
							456: {
								n: "BrtEndQSIFs"
							},
							457: {
								n: "BrtBeginQSIF"
							},
							458: {
								n: "BrtEndQSIF"
							},
							459: {
								n: "BrtBeginAutoSortScope"
							},
							460: {
								n: "BrtEndAutoSortScope"
							},
							461: {
								n: "BrtBeginConditionalFormatting"
							},
							462: {
								n: "BrtEndConditionalFormatting"
							},
							463: {
								n: "BrtBeginCFRule"
							},
							464: {
								n: "BrtEndCFRule"
							},
							465: {
								n: "BrtBeginIconSet"
							},
							466: {
								n: "BrtEndIconSet"
							},
							467: {
								n: "BrtBeginDatabar"
							},
							468: {
								n: "BrtEndDatabar"
							},
							469: {
								n: "BrtBeginColorScale"
							},
							470: {
								n: "BrtEndColorScale"
							},
							471: {
								n: "BrtCFVO"
							},
							472: {
								n: "BrtExternValueMeta"
							},
							473: {
								n: "BrtBeginColorPalette"
							},
							474: {
								n: "BrtEndColorPalette"
							},
							475: {
								n: "BrtIndexedColor"
							},
							476: {
								n: "BrtMargins",
								f: function(e) {
									var t = {};
									return zs.forEach((function(n) {
										t[n] = kn(e)
									})), t
								}
							},
							477: {
								n: "BrtPrintOptions"
							},
							478: {
								n: "BrtPageSetup"
							},
							479: {
								n: "BrtBeginHeaderFooter"
							},
							480: {
								n: "BrtEndHeaderFooter"
							},
							481: {
								n: "BrtBeginSXCrtFormat"
							},
							482: {
								n: "BrtEndSXCrtFormat"
							},
							483: {
								n: "BrtBeginSXCrtFormats"
							},
							484: {
								n: "BrtEndSXCrtFormats"
							},
							485: {
								n: "BrtWsFmtInfo",
								f: function() {}
							},
							486: {
								n: "BrtBeginMgs"
							},
							487: {
								n: "BrtEndMGs"
							},
							488: {
								n: "BrtBeginMGMaps"
							},
							489: {
								n: "BrtEndMGMaps"
							},
							490: {
								n: "BrtBeginMG"
							},
							491: {
								n: "BrtEndMG"
							},
							492: {
								n: "BrtBeginMap"
							},
							493: {
								n: "BrtEndMap"
							},
							494: {
								n: "BrtHLink",
								f: function(e, t) {
									var n = e.l + t,
										r = Cn(e, 16),
										i = vn(e),
										a = cn(e),
										o = cn(e),
										s = cn(e);
									e.l = n;
									var u = {
										rfx: r,
										relId: i,
										loc: a,
										display: s
									};
									return o && (u.Tooltip = o), u
								}
							},
							495: {
								n: "BrtBeginDCon"
							},
							496: {
								n: "BrtEndDCon"
							},
							497: {
								n: "BrtBeginDRefs"
							},
							498: {
								n: "BrtEndDRefs"
							},
							499: {
								n: "BrtDRef"
							},
							500: {
								n: "BrtBeginScenMan"
							},
							501: {
								n: "BrtEndScenMan"
							},
							502: {
								n: "BrtBeginSct"
							},
							503: {
								n: "BrtEndSct"
							},
							504: {
								n: "BrtSlc"
							},
							505: {
								n: "BrtBeginDXFs"
							},
							506: {
								n: "BrtEndDXFs"
							},
							507: {
								n: "BrtDXF"
							},
							508: {
								n: "BrtBeginTableStyles"
							},
							509: {
								n: "BrtEndTableStyles"
							},
							510: {
								n: "BrtBeginTableStyle"
							},
							511: {
								n: "BrtEndTableStyle"
							},
							512: {
								n: "BrtTableStyleElement"
							},
							513: {
								n: "BrtTableStyleClient"
							},
							514: {
								n: "BrtBeginVolDeps"
							},
							515: {
								n: "BrtEndVolDeps"
							},
							516: {
								n: "BrtBeginVolType"
							},
							517: {
								n: "BrtEndVolType"
							},
							518: {
								n: "BrtBeginVolMain"
							},
							519: {
								n: "BrtEndVolMain"
							},
							520: {
								n: "BrtBeginVolTopic"
							},
							521: {
								n: "BrtEndVolTopic"
							},
							522: {
								n: "BrtVolSubtopic"
							},
							523: {
								n: "BrtVolRef"
							},
							524: {
								n: "BrtVolNum"
							},
							525: {
								n: "BrtVolErr"
							},
							526: {
								n: "BrtVolStr"
							},
							527: {
								n: "BrtVolBool"
							},
							528: {
								n: "BrtBeginCalcChain$"
							},
							529: {
								n: "BrtEndCalcChain$"
							},
							530: {
								n: "BrtBeginSortState"
							},
							531: {
								n: "BrtEndSortState"
							},
							532: {
								n: "BrtBeginSortCond"
							},
							533: {
								n: "BrtEndSortCond"
							},
							534: {
								n: "BrtBookProtection"
							},
							535: {
								n: "BrtSheetProtection"
							},
							536: {
								n: "BrtRangeProtection"
							},
							537: {
								n: "BrtPhoneticInfo"
							},
							538: {
								n: "BrtBeginECTxtWiz"
							},
							539: {
								n: "BrtEndECTxtWiz"
							},
							540: {
								n: "BrtBeginECTWFldInfoLst"
							},
							541: {
								n: "BrtEndECTWFldInfoLst"
							},
							542: {
								n: "BrtBeginECTwFldInfo"
							},
							548: {
								n: "BrtFileSharing"
							},
							549: {
								n: "BrtOleSize"
							},
							550: {
								n: "BrtDrawing",
								f: Sn
							},
							551: {
								n: "BrtLegacyDrawing"
							},
							552: {
								n: "BrtLegacyDrawingHF"
							},
							553: {
								n: "BrtWebOpt"
							},
							554: {
								n: "BrtBeginWebPubItems"
							},
							555: {
								n: "BrtEndWebPubItems"
							},
							556: {
								n: "BrtBeginWebPubItem"
							},
							557: {
								n: "BrtEndWebPubItem"
							},
							558: {
								n: "BrtBeginSXCondFmt"
							},
							559: {
								n: "BrtEndSXCondFmt"
							},
							560: {
								n: "BrtBeginSXCondFmts"
							},
							561: {
								n: "BrtEndSXCondFmts"
							},
							562: {
								n: "BrtBkHim"
							},
							564: {
								n: "BrtColor"
							},
							565: {
								n: "BrtBeginIndexedColors"
							},
							566: {
								n: "BrtEndIndexedColors"
							},
							569: {
								n: "BrtBeginMRUColors"
							},
							570: {
								n: "BrtEndMRUColors"
							},
							572: {
								n: "BrtMRUColor"
							},
							573: {
								n: "BrtBeginDVals"
							},
							574: {
								n: "BrtEndDVals"
							},
							577: {
								n: "BrtSupNameStart"
							},
							578: {
								n: "BrtSupNameValueStart"
							},
							579: {
								n: "BrtSupNameValueEnd"
							},
							580: {
								n: "BrtSupNameNum"
							},
							581: {
								n: "BrtSupNameErr"
							},
							582: {
								n: "BrtSupNameSt"
							},
							583: {
								n: "BrtSupNameNil"
							},
							584: {
								n: "BrtSupNameBool"
							},
							585: {
								n: "BrtSupNameFmla"
							},
							586: {
								n: "BrtSupNameBits"
							},
							587: {
								n: "BrtSupNameEnd"
							},
							588: {
								n: "BrtEndSupBook"
							},
							589: {
								n: "BrtCellSmartTagProperty"
							},
							590: {
								n: "BrtBeginCellSmartTag"
							},
							591: {
								n: "BrtEndCellSmartTag"
							},
							592: {
								n: "BrtBeginCellSmartTags"
							},
							593: {
								n: "BrtEndCellSmartTags"
							},
							594: {
								n: "BrtBeginSmartTags"
							},
							595: {
								n: "BrtEndSmartTags"
							},
							596: {
								n: "BrtSmartTagType"
							},
							597: {
								n: "BrtBeginSmartTagTypes"
							},
							598: {
								n: "BrtEndSmartTagTypes"
							},
							599: {
								n: "BrtBeginSXFilters"
							},
							600: {
								n: "BrtEndSXFilters"
							},
							601: {
								n: "BrtBeginSXFILTER"
							},
							602: {
								n: "BrtEndSXFilter"
							},
							603: {
								n: "BrtBeginFills"
							},
							604: {
								n: "BrtEndFills"
							},
							605: {
								n: "BrtBeginCellWatches"
							},
							606: {
								n: "BrtEndCellWatches"
							},
							607: {
								n: "BrtCellWatch"
							},
							608: {
								n: "BrtBeginCRErrs"
							},
							609: {
								n: "BrtEndCRErrs"
							},
							610: {
								n: "BrtCrashRecErr"
							},
							611: {
								n: "BrtBeginFonts"
							},
							612: {
								n: "BrtEndFonts"
							},
							613: {
								n: "BrtBeginBorders"
							},
							614: {
								n: "BrtEndBorders"
							},
							615: {
								n: "BrtBeginFmts"
							},
							616: {
								n: "BrtEndFmts"
							},
							617: {
								n: "BrtBeginCellXFs"
							},
							618: {
								n: "BrtEndCellXFs"
							},
							619: {
								n: "BrtBeginStyles"
							},
							620: {
								n: "BrtEndStyles"
							},
							625: {
								n: "BrtBigName"
							},
							626: {
								n: "BrtBeginCellStyleXFs"
							},
							627: {
								n: "BrtEndCellStyleXFs"
							},
							628: {
								n: "BrtBeginComments"
							},
							629: {
								n: "BrtEndComments"
							},
							630: {
								n: "BrtBeginCommentAuthors"
							},
							631: {
								n: "BrtEndCommentAuthors"
							},
							632: {
								n: "BrtCommentAuthor",
								f: ao
							},
							633: {
								n: "BrtBeginCommentList"
							},
							634: {
								n: "BrtEndCommentList"
							},
							635: {
								n: "BrtBeginComment",
								f: function(e) {
									var t = {};
									t.iauthor = e.read_shift(4);
									var n = Cn(e, 16);
									return t.rfx = n.s, t.ref = Zt(n.s), e.l += 16, t
								}
							},
							636: {
								n: "BrtEndComment"
							},
							637: {
								n: "BrtCommentText",
								f: hn
							},
							638: {
								n: "BrtBeginOleObjects"
							},
							639: {
								n: "BrtOleObject"
							},
							640: {
								n: "BrtEndOleObjects"
							},
							641: {
								n: "BrtBeginSxrules"
							},
							642: {
								n: "BrtEndSxRules"
							},
							643: {
								n: "BrtBeginActiveXControls"
							},
							644: {
								n: "BrtActiveX"
							},
							645: {
								n: "BrtEndActiveXControls"
							},
							646: {
								n: "BrtBeginPCDSDTCEMembersSortBy"
							},
							648: {
								n: "BrtBeginCellIgnoreECs"
							},
							649: {
								n: "BrtCellIgnoreEC"
							},
							650: {
								n: "BrtEndCellIgnoreECs"
							},
							651: {
								n: "BrtCsProp",
								f: function(e, t) {
									return e.l += 10, {
										name: cn(e)
									}
								}
							},
							652: {
								n: "BrtCsPageSetup"
							},
							653: {
								n: "BrtBeginUserCsViews"
							},
							654: {
								n: "BrtEndUserCsViews"
							},
							655: {
								n: "BrtBeginUserCsView"
							},
							656: {
								n: "BrtEndUserCsView"
							},
							657: {
								n: "BrtBeginPcdSFCIEntries"
							},
							658: {
								n: "BrtEndPCDSFCIEntries"
							},
							659: {
								n: "BrtPCDSFCIEntry"
							},
							660: {
								n: "BrtBeginListParts"
							},
							661: {
								n: "BrtListPart"
							},
							662: {
								n: "BrtEndListParts"
							},
							663: {
								n: "BrtSheetCalcProp"
							},
							664: {
								n: "BrtBeginFnGroup"
							},
							665: {
								n: "BrtFnGroup"
							},
							666: {
								n: "BrtEndFnGroup"
							},
							667: {
								n: "BrtSupAddin"
							},
							668: {
								n: "BrtSXTDMPOrder"
							},
							669: {
								n: "BrtCsProtection"
							},
							671: {
								n: "BrtBeginWsSortMap"
							},
							672: {
								n: "BrtEndWsSortMap"
							},
							673: {
								n: "BrtBeginRRSort"
							},
							674: {
								n: "BrtEndRRSort"
							},
							675: {
								n: "BrtRRSortItem"
							},
							676: {
								n: "BrtFileSharingIso"
							},
							677: {
								n: "BrtBookProtectionIso"
							},
							678: {
								n: "BrtSheetProtectionIso"
							},
							679: {
								n: "BrtCsProtectionIso"
							},
							680: {
								n: "BrtRangeProtectionIso"
							},
							681: {
								n: "BrtDValList"
							},
							1024: {
								n: "BrtRwDescent"
							},
							1025: {
								n: "BrtKnownFonts"
							},
							1026: {
								n: "BrtBeginSXTupleSet"
							},
							1027: {
								n: "BrtEndSXTupleSet"
							},
							1028: {
								n: "BrtBeginSXTupleSetHeader"
							},
							1029: {
								n: "BrtEndSXTupleSetHeader"
							},
							1030: {
								n: "BrtSXTupleSetHeaderItem"
							},
							1031: {
								n: "BrtBeginSXTupleSetData"
							},
							1032: {
								n: "BrtEndSXTupleSetData"
							},
							1033: {
								n: "BrtBeginSXTupleSetRow"
							},
							1034: {
								n: "BrtEndSXTupleSetRow"
							},
							1035: {
								n: "BrtSXTupleSetRowItem"
							},
							1036: {
								n: "BrtNameExt"
							},
							1037: {
								n: "BrtPCDH14"
							},
							1038: {
								n: "BrtBeginPCDCalcMem14"
							},
							1039: {
								n: "BrtEndPCDCalcMem14"
							},
							1040: {
								n: "BrtSXTH14"
							},
							1041: {
								n: "BrtBeginSparklineGroup"
							},
							1042: {
								n: "BrtEndSparklineGroup"
							},
							1043: {
								n: "BrtSparkline"
							},
							1044: {
								n: "BrtSXDI14"
							},
							1045: {
								n: "BrtWsFmtInfoEx14"
							},
							1046: {
								n: "BrtBeginConditionalFormatting14"
							},
							1047: {
								n: "BrtEndConditionalFormatting14"
							},
							1048: {
								n: "BrtBeginCFRule14"
							},
							1049: {
								n: "BrtEndCFRule14"
							},
							1050: {
								n: "BrtCFVO14"
							},
							1051: {
								n: "BrtBeginDatabar14"
							},
							1052: {
								n: "BrtBeginIconSet14"
							},
							1053: {
								n: "BrtDVal14",
								f: function() {}
							},
							1054: {
								n: "BrtBeginDVals14"
							},
							1055: {
								n: "BrtColor14"
							},
							1056: {
								n: "BrtBeginSparklines"
							},
							1057: {
								n: "BrtEndSparklines"
							},
							1058: {
								n: "BrtBeginSparklineGroups"
							},
							1059: {
								n: "BrtEndSparklineGroups"
							},
							1061: {
								n: "BrtSXVD14"
							},
							1062: {
								n: "BrtBeginSXView14"
							},
							1063: {
								n: "BrtEndSXView14"
							},
							1064: {
								n: "BrtBeginSXView16"
							},
							1065: {
								n: "BrtEndSXView16"
							},
							1066: {
								n: "BrtBeginPCD14"
							},
							1067: {
								n: "BrtEndPCD14"
							},
							1068: {
								n: "BrtBeginExtConn14"
							},
							1069: {
								n: "BrtEndExtConn14"
							},
							1070: {
								n: "BrtBeginSlicerCacheIDs"
							},
							1071: {
								n: "BrtEndSlicerCacheIDs"
							},
							1072: {
								n: "BrtBeginSlicerCacheID"
							},
							1073: {
								n: "BrtEndSlicerCacheID"
							},
							1075: {
								n: "BrtBeginSlicerCache"
							},
							1076: {
								n: "BrtEndSlicerCache"
							},
							1077: {
								n: "BrtBeginSlicerCacheDef"
							},
							1078: {
								n: "BrtEndSlicerCacheDef"
							},
							1079: {
								n: "BrtBeginSlicersEx"
							},
							1080: {
								n: "BrtEndSlicersEx"
							},
							1081: {
								n: "BrtBeginSlicerEx"
							},
							1082: {
								n: "BrtEndSlicerEx"
							},
							1083: {
								n: "BrtBeginSlicer"
							},
							1084: {
								n: "BrtEndSlicer"
							},
							1085: {
								n: "BrtSlicerCachePivotTables"
							},
							1086: {
								n: "BrtBeginSlicerCacheOlapImpl"
							},
							1087: {
								n: "BrtEndSlicerCacheOlapImpl"
							},
							1088: {
								n: "BrtBeginSlicerCacheLevelsData"
							},
							1089: {
								n: "BrtEndSlicerCacheLevelsData"
							},
							1090: {
								n: "BrtBeginSlicerCacheLevelData"
							},
							1091: {
								n: "BrtEndSlicerCacheLevelData"
							},
							1092: {
								n: "BrtBeginSlicerCacheSiRanges"
							},
							1093: {
								n: "BrtEndSlicerCacheSiRanges"
							},
							1094: {
								n: "BrtBeginSlicerCacheSiRange"
							},
							1095: {
								n: "BrtEndSlicerCacheSiRange"
							},
							1096: {
								n: "BrtSlicerCacheOlapItem"
							},
							1097: {
								n: "BrtBeginSlicerCacheSelections"
							},
							1098: {
								n: "BrtSlicerCacheSelection"
							},
							1099: {
								n: "BrtEndSlicerCacheSelections"
							},
							1100: {
								n: "BrtBeginSlicerCacheNative"
							},
							1101: {
								n: "BrtEndSlicerCacheNative"
							},
							1102: {
								n: "BrtSlicerCacheNativeItem"
							},
							1103: {
								n: "BrtRangeProtection14"
							},
							1104: {
								n: "BrtRangeProtectionIso14"
							},
							1105: {
								n: "BrtCellIgnoreEC14"
							},
							1111: {
								n: "BrtList14"
							},
							1112: {
								n: "BrtCFIcon"
							},
							1113: {
								n: "BrtBeginSlicerCachesPivotCacheIDs"
							},
							1114: {
								n: "BrtEndSlicerCachesPivotCacheIDs"
							},
							1115: {
								n: "BrtBeginSlicers"
							},
							1116: {
								n: "BrtEndSlicers"
							},
							1117: {
								n: "BrtWbProp14"
							},
							1118: {
								n: "BrtBeginSXEdit"
							},
							1119: {
								n: "BrtEndSXEdit"
							},
							1120: {
								n: "BrtBeginSXEdits"
							},
							1121: {
								n: "BrtEndSXEdits"
							},
							1122: {
								n: "BrtBeginSXChange"
							},
							1123: {
								n: "BrtEndSXChange"
							},
							1124: {
								n: "BrtBeginSXChanges"
							},
							1125: {
								n: "BrtEndSXChanges"
							},
							1126: {
								n: "BrtSXTupleItems"
							},
							1128: {
								n: "BrtBeginSlicerStyle"
							},
							1129: {
								n: "BrtEndSlicerStyle"
							},
							1130: {
								n: "BrtSlicerStyleElement"
							},
							1131: {
								n: "BrtBeginStyleSheetExt14"
							},
							1132: {
								n: "BrtEndStyleSheetExt14"
							},
							1133: {
								n: "BrtBeginSlicerCachesPivotCacheID"
							},
							1134: {
								n: "BrtEndSlicerCachesPivotCacheID"
							},
							1135: {
								n: "BrtBeginConditionalFormattings"
							},
							1136: {
								n: "BrtEndConditionalFormattings"
							},
							1137: {
								n: "BrtBeginPCDCalcMemExt"
							},
							1138: {
								n: "BrtEndPCDCalcMemExt"
							},
							1139: {
								n: "BrtBeginPCDCalcMemsExt"
							},
							1140: {
								n: "BrtEndPCDCalcMemsExt"
							},
							1141: {
								n: "BrtPCDField14"
							},
							1142: {
								n: "BrtBeginSlicerStyles"
							},
							1143: {
								n: "BrtEndSlicerStyles"
							},
							1144: {
								n: "BrtBeginSlicerStyleElements"
							},
							1145: {
								n: "BrtEndSlicerStyleElements"
							},
							1146: {
								n: "BrtCFRuleExt"
							},
							1147: {
								n: "BrtBeginSXCondFmt14"
							},
							1148: {
								n: "BrtEndSXCondFmt14"
							},
							1149: {
								n: "BrtBeginSXCondFmts14"
							},
							1150: {
								n: "BrtEndSXCondFmts14"
							},
							1152: {
								n: "BrtBeginSortCond14"
							},
							1153: {
								n: "BrtEndSortCond14"
							},
							1154: {
								n: "BrtEndDVals14"
							},
							1155: {
								n: "BrtEndIconSet14"
							},
							1156: {
								n: "BrtEndDatabar14"
							},
							1157: {
								n: "BrtBeginColorScale14"
							},
							1158: {
								n: "BrtEndColorScale14"
							},
							1159: {
								n: "BrtBeginSxrules14"
							},
							1160: {
								n: "BrtEndSxrules14"
							},
							1161: {
								n: "BrtBeginPRule14"
							},
							1162: {
								n: "BrtEndPRule14"
							},
							1163: {
								n: "BrtBeginPRFilters14"
							},
							1164: {
								n: "BrtEndPRFilters14"
							},
							1165: {
								n: "BrtBeginPRFilter14"
							},
							1166: {
								n: "BrtEndPRFilter14"
							},
							1167: {
								n: "BrtBeginPRFItem14"
							},
							1168: {
								n: "BrtEndPRFItem14"
							},
							1169: {
								n: "BrtBeginCellIgnoreECs14"
							},
							1170: {
								n: "BrtEndCellIgnoreECs14"
							},
							1171: {
								n: "BrtDxf14"
							},
							1172: {
								n: "BrtBeginDxF14s"
							},
							1173: {
								n: "BrtEndDxf14s"
							},
							1177: {
								n: "BrtFilter14"
							},
							1178: {
								n: "BrtBeginCustomFilters14"
							},
							1180: {
								n: "BrtCustomFilter14"
							},
							1181: {
								n: "BrtIconFilter14"
							},
							1182: {
								n: "BrtPivotCacheConnectionName"
							},
							2048: {
								n: "BrtBeginDecoupledPivotCacheIDs"
							},
							2049: {
								n: "BrtEndDecoupledPivotCacheIDs"
							},
							2050: {
								n: "BrtDecoupledPivotCacheID"
							},
							2051: {
								n: "BrtBeginPivotTableRefs"
							},
							2052: {
								n: "BrtEndPivotTableRefs"
							},
							2053: {
								n: "BrtPivotTableRef"
							},
							2054: {
								n: "BrtSlicerCacheBookPivotTables"
							},
							2055: {
								n: "BrtBeginSxvcells"
							},
							2056: {
								n: "BrtEndSxvcells"
							},
							2057: {
								n: "BrtBeginSxRow"
							},
							2058: {
								n: "BrtEndSxRow"
							},
							2060: {
								n: "BrtPcdCalcMem15"
							},
							2067: {
								n: "BrtQsi15"
							},
							2068: {
								n: "BrtBeginWebExtensions"
							},
							2069: {
								n: "BrtEndWebExtensions"
							},
							2070: {
								n: "BrtWebExtension"
							},
							2071: {
								n: "BrtAbsPath15"
							},
							2072: {
								n: "BrtBeginPivotTableUISettings"
							},
							2073: {
								n: "BrtEndPivotTableUISettings"
							},
							2075: {
								n: "BrtTableSlicerCacheIDs"
							},
							2076: {
								n: "BrtTableSlicerCacheID"
							},
							2077: {
								n: "BrtBeginTableSlicerCache"
							},
							2078: {
								n: "BrtEndTableSlicerCache"
							},
							2079: {
								n: "BrtSxFilter15"
							},
							2080: {
								n: "BrtBeginTimelineCachePivotCacheIDs"
							},
							2081: {
								n: "BrtEndTimelineCachePivotCacheIDs"
							},
							2082: {
								n: "BrtTimelineCachePivotCacheID"
							},
							2083: {
								n: "BrtBeginTimelineCacheIDs"
							},
							2084: {
								n: "BrtEndTimelineCacheIDs"
							},
							2085: {
								n: "BrtBeginTimelineCacheID"
							},
							2086: {
								n: "BrtEndTimelineCacheID"
							},
							2087: {
								n: "BrtBeginTimelinesEx"
							},
							2088: {
								n: "BrtEndTimelinesEx"
							},
							2089: {
								n: "BrtBeginTimelineEx"
							},
							2090: {
								n: "BrtEndTimelineEx"
							},
							2091: {
								n: "BrtWorkBookPr15"
							},
							2092: {
								n: "BrtPCDH15"
							},
							2093: {
								n: "BrtBeginTimelineStyle"
							},
							2094: {
								n: "BrtEndTimelineStyle"
							},
							2095: {
								n: "BrtTimelineStyleElement"
							},
							2096: {
								n: "BrtBeginTimelineStylesheetExt15"
							},
							2097: {
								n: "BrtEndTimelineStylesheetExt15"
							},
							2098: {
								n: "BrtBeginTimelineStyles"
							},
							2099: {
								n: "BrtEndTimelineStyles"
							},
							2100: {
								n: "BrtBeginTimelineStyleElements"
							},
							2101: {
								n: "BrtEndTimelineStyleElements"
							},
							2102: {
								n: "BrtDxf15"
							},
							2103: {
								n: "BrtBeginDxfs15"
							},
							2104: {
								n: "brtEndDxfs15"
							},
							2105: {
								n: "BrtSlicerCacheHideItemsWithNoData"
							},
							2106: {
								n: "BrtBeginItemUniqueNames"
							},
							2107: {
								n: "BrtEndItemUniqueNames"
							},
							2108: {
								n: "BrtItemUniqueName"
							},
							2109: {
								n: "BrtBeginExtConn15"
							},
							2110: {
								n: "BrtEndExtConn15"
							},
							2111: {
								n: "BrtBeginOledbPr15"
							},
							2112: {
								n: "BrtEndOledbPr15"
							},
							2113: {
								n: "BrtBeginDataFeedPr15"
							},
							2114: {
								n: "BrtEndDataFeedPr15"
							},
							2115: {
								n: "BrtTextPr15"
							},
							2116: {
								n: "BrtRangePr15"
							},
							2117: {
								n: "BrtDbCommand15"
							},
							2118: {
								n: "BrtBeginDbTables15"
							},
							2119: {
								n: "BrtEndDbTables15"
							},
							2120: {
								n: "BrtDbTable15"
							},
							2121: {
								n: "BrtBeginDataModel"
							},
							2122: {
								n: "BrtEndDataModel"
							},
							2123: {
								n: "BrtBeginModelTables"
							},
							2124: {
								n: "BrtEndModelTables"
							},
							2125: {
								n: "BrtModelTable"
							},
							2126: {
								n: "BrtBeginModelRelationships"
							},
							2127: {
								n: "BrtEndModelRelationships"
							},
							2128: {
								n: "BrtModelRelationship"
							},
							2129: {
								n: "BrtBeginECTxtWiz15"
							},
							2130: {
								n: "BrtEndECTxtWiz15"
							},
							2131: {
								n: "BrtBeginECTWFldInfoLst15"
							},
							2132: {
								n: "BrtEndECTWFldInfoLst15"
							},
							2133: {
								n: "BrtBeginECTWFldInfo15"
							},
							2134: {
								n: "BrtFieldListActiveItem"
							},
							2135: {
								n: "BrtPivotCacheIdVersion"
							},
							2136: {
								n: "BrtSXDI15"
							},
							2137: {
								n: "BrtBeginModelTimeGroupings"
							},
							2138: {
								n: "BrtEndModelTimeGroupings"
							},
							2139: {
								n: "BrtBeginModelTimeGrouping"
							},
							2140: {
								n: "BrtEndModelTimeGrouping"
							},
							2141: {
								n: "BrtModelTimeGroupingCalcCol"
							},
							3072: {
								n: "BrtUid"
							},
							3073: {
								n: "BrtRevisionPtr"
							},
							5095: {
								n: "BrtBeginCalcFeatures"
							},
							5096: {
								n: "BrtEndCalcFeatures"
							},
							5097: {
								n: "BrtCalcFeature"
							},
							65535: {
								n: ""
							}
						},
						oc = Y(ac, "n"),
						sc = {
							3: {
								n: "BIFF2NUM",
								f: function(e) {
									var t = ei(e);
									++e.l;
									var n = kn(e);
									return t.t = "n", t.val = n, t
								}
							},
							4: {
								n: "BIFF2STR",
								f: function(e, t, n) {
									var r = ei(e);
									++e.l;
									var i = Gr(e, 0, n);
									return r.t = "str", r.val = i, r
								}
							},
							6: {
								n: "Formula",
								f: Xo
							},
							9: {
								n: "BOF",
								f: fi
							},
							10: {
								n: "EOF",
								f: Br
							},
							12: {
								n: "CalcCount",
								f: Fr
							},
							13: {
								n: "CalcMode",
								f: Fr
							},
							14: {
								n: "CalcPrecision",
								f: Nr
							},
							15: {
								n: "CalcRefMode",
								f: Nr
							},
							16: {
								n: "CalcDelta",
								f: kn
							},
							17: {
								n: "CalcIter",
								f: Nr
							},
							18: {
								n: "Protect",
								f: Nr
							},
							19: {
								n: "Password",
								f: Fr
							},
							20: {
								n: "Header",
								f: Ai
							},
							21: {
								n: "Footer",
								f: Ai
							},
							23: {
								n: "ExternSheet",
								f: Ti
							},
							24: {
								n: "Lbl",
								f: Ei
							},
							25: {
								n: "WinProtect",
								f: Nr
							},
							26: {
								n: "VerticalPageBreaks"
							},
							27: {
								n: "HorizontalPageBreaks"
							},
							28: {
								n: "Note",
								f: function(e, t, n) {
									return function(e, t, n) {
										if (!(n.biff < 8)) {
											var r = e.read_shift(2),
												i = e.read_shift(2),
												a = e.read_shift(2),
												o = e.read_shift(2),
												s = Gr(e, 0, n);
											return n.biff < 8 && e.read_shift(1), [{
												r: r,
												c: i
											}, s, o, a]
										}
									}(e, 0, n)
								}
							},
							29: {
								n: "Selection"
							},
							34: {
								n: "Date1904",
								f: Nr
							},
							35: {
								n: "ExternName",
								f: Si
							},
							36: {
								n: "COLWIDTH"
							},
							38: {
								n: "LeftMargin",
								f: kn
							},
							39: {
								n: "RightMargin",
								f: kn
							},
							40: {
								n: "TopMargin",
								f: kn
							},
							41: {
								n: "BottomMargin",
								f: kn
							},
							42: {
								n: "PrintRowCol",
								f: Nr
							},
							43: {
								n: "PrintGrid",
								f: Nr
							},
							47: {
								n: "FilePass",
								f: function(e, t, n) {
									var r = {
										Type: n.biff >= 8 ? e.read_shift(2) : 0
									};
									return r.Type ? fa(e, t - 2, r) : function(e, t, n, r) {
										var i = {
											key: Fr(e),
											verificationBytes: Fr(e)
										};
										n.password && (i.verifier = ua(n.password)), r.valid = i.verificationBytes === i.verifier, r.valid && (r.insitu = la(n.password))
									}(e, n.biff, n, r), r
								}
							},
							49: {
								n: "Font",
								f: function(e, t, n) {
									var r = {
										dyHeight: e.read_shift(2),
										fl: e.read_shift(2)
									};
									switch (n && n.biff || 8) {
										case 2:
											break;
										case 3:
										case 4:
											e.l += 2;
											break;
										default:
											e.l += 10
									}
									return r.name = Hr(e, 0, n), r
								}
							},
							51: {
								n: "PrintSize",
								f: Fr
							},
							60: {
								n: "Continue"
							},
							61: {
								n: "Window1",
								f: function(e) {
									return {
										Pos: [e.read_shift(2), e.read_shift(2)],
										Dim: [e.read_shift(2), e.read_shift(2)],
										Flags: e.read_shift(2),
										CurTab: e.read_shift(2),
										FirstTab: e.read_shift(2),
										Selected: e.read_shift(2),
										TabRatio: e.read_shift(2)
									}
								}
							},
							64: {
								n: "Backup",
								f: Nr
							},
							65: {
								n: "Pane",
								f: function() {}
							},
							66: {
								n: "CodePage",
								f: Fr
							},
							77: {
								n: "Pls"
							},
							80: {
								n: "DCon"
							},
							81: {
								n: "DConRef"
							},
							82: {
								n: "DConName"
							},
							85: {
								n: "DefColWidth",
								f: Fr
							},
							89: {
								n: "XCT"
							},
							90: {
								n: "CRN"
							},
							91: {
								n: "FileSharing"
							},
							92: {
								n: "WriteAccess",
								f: function(e, t, n) {
									if (n.enc) return e.l += t, "";
									var r = e.l,
										i = Gr(e, 0, n);
									return e.read_shift(t + r - e.l), i
								}
							},
							93: {
								n: "Obj",
								f: function(e, t, n) {
									if (n && n.biff < 8) return function(e, t, n) {
										e.l += 4;
										var r = e.read_shift(2),
											i = e.read_shift(2),
											a = e.read_shift(2);
										e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, t -= 36;
										var o = [];
										return o.push(($i[r] || Ft)(e, t, n)), {
											cmo: [i, r, a],
											ft: o
										}
									}(e, t, n);
									var r = ui(e),
										i = function(e, t) {
											for (var n = e.l + t, r = []; e.l < n;) {
												var i = e.read_shift(2);
												e.l -= 2;
												try {
													r.push(li[i](e, n - e.l))
												} catch (t) {
													return e.l = n, r
												}
											}
											return e.l != n && (e.l = n), r
										}(e, t - 22, r[1]);
									return {
										cmo: r,
										ft: i
									}
								}
							},
							94: {
								n: "Uncalced"
							},
							95: {
								n: "CalcSaveRecalc",
								f: Nr
							},
							96: {
								n: "Template"
							},
							97: {
								n: "Intl"
							},
							99: {
								n: "ObjProtect",
								f: Nr
							},
							125: {
								n: "ColInfo",
								f: xi
							},
							128: {
								n: "Guts",
								f: function(e) {
									e.l += 4;
									var t = [e.read_shift(2), e.read_shift(2)];
									if (0 !== t[0] && t[0]--, 0 !== t[1] && t[1]--, t[0] > 7 || t[1] > 7) throw new Error("Bad Gutters: " + t.join("|"));
									return t
								}
							},
							129: {
								n: "WsBool",
								f: function(e, t, n) {
									return {
										fDialog: 16 & (n && 8 == n.biff || 2 == t ? e.read_shift(2) : (e.l += t, 0))
									}
								}
							},
							130: {
								n: "GridSet",
								f: Fr
							},
							131: {
								n: "HCenter",
								f: Nr
							},
							132: {
								n: "VCenter",
								f: Nr
							},
							133: {
								n: "BoundSheet8",
								f: function(e, t, n) {
									var r = e.read_shift(4),
										i = 3 & e.read_shift(1),
										a = e.read_shift(1);
									switch (a) {
										case 0:
											a = "Worksheet";
											break;
										case 1:
											a = "Macrosheet";
											break;
										case 2:
											a = "Chartsheet";
											break;
										case 6:
											a = "VBAModule"
									}
									var o = Hr(e, 0, n);
									return 0 === o.length && (o = "Sheet1"), {
										pos: r,
										hs: i,
										dt: a,
										name: o
									}
								}
							},
							134: {
								n: "WriteProtect"
							},
							140: {
								n: "Country",
								f: function(e) {
									var t, n = [0, 0];
									return t = e.read_shift(2), n[0] = Rn[t] || t, t = e.read_shift(2), n[1] = Rn[t] || t, n
								}
							},
							141: {
								n: "HideObj",
								f: Fr
							},
							144: {
								n: "Sort"
							},
							146: {
								n: "Palette",
								f: function(e) {
									for (var t = e.read_shift(2), n = []; t-- > 0;) n.push(Zr(e));
									return n
								}
							},
							151: {
								n: "Sync"
							},
							152: {
								n: "LPr"
							},
							153: {
								n: "DxGCol"
							},
							154: {
								n: "FnGroupName"
							},
							155: {
								n: "FilterMode"
							},
							156: {
								n: "BuiltInFnGroupCount",
								f: Fr
							},
							157: {
								n: "AutoFilterInfo"
							},
							158: {
								n: "AutoFilter"
							},
							160: {
								n: "Scl",
								f: Mi
							},
							161: {
								n: "Setup",
								f: function(e, t) {
									var n = {};
									return t < 32 || (e.l += 16, n.header = kn(e), n.footer = kn(e), e.l += 2), n
								}
							},
							174: {
								n: "ScenMan"
							},
							175: {
								n: "SCENARIO"
							},
							176: {
								n: "SxView"
							},
							177: {
								n: "Sxvd"
							},
							178: {
								n: "SXVI"
							},
							180: {
								n: "SxIvd"
							},
							181: {
								n: "SXLI"
							},
							182: {
								n: "SXPI"
							},
							184: {
								n: "DocRoute"
							},
							185: {
								n: "RecipName"
							},
							189: {
								n: "MulRk",
								f: function(e, t) {
									for (var n = e.l + t - 2, r = e.read_shift(2), i = e.read_shift(2), a = []; e.l < n;) a.push(ri(e));
									if (e.l !== n) throw new Error("MulRK read error");
									var o = e.read_shift(2);
									if (a.length != o - i + 1) throw new Error("MulRK length mismatch");
									return {
										r: r,
										c: i,
										C: o,
										rkrec: a
									}
								}
							},
							190: {
								n: "MulBlank",
								f: function(e, t) {
									for (var n = e.l + t - 2, r = e.read_shift(2), i = e.read_shift(2), a = []; e.l < n;) a.push(e.read_shift(2));
									if (e.l !== n) throw new Error("MulBlank read error");
									var o = e.read_shift(2);
									if (a.length != o - i + 1) throw new Error("MulBlank length mismatch");
									return {
										r: r,
										c: i,
										C: o,
										ixfe: a
									}
								}
							},
							193: {
								n: "Mms",
								f: Br
							},
							197: {
								n: "SXDI"
							},
							198: {
								n: "SXDB"
							},
							199: {
								n: "SXFDB"
							},
							200: {
								n: "SXDBB"
							},
							201: {
								n: "SXNum"
							},
							202: {
								n: "SxBool",
								f: Nr
							},
							203: {
								n: "SxErr"
							},
							204: {
								n: "SXInt"
							},
							205: {
								n: "SXString"
							},
							206: {
								n: "SXDtr"
							},
							207: {
								n: "SxNil"
							},
							208: {
								n: "SXTbl"
							},
							209: {
								n: "SXTBRGIITM"
							},
							210: {
								n: "SxTbpg"
							},
							211: {
								n: "ObProj"
							},
							213: {
								n: "SXStreamID"
							},
							215: {
								n: "DBCell"
							},
							216: {
								n: "SXRng"
							},
							217: {
								n: "SxIsxoper"
							},
							218: {
								n: "BookBool",
								f: Fr
							},
							220: {
								n: "DbOrParamQry"
							},
							221: {
								n: "ScenarioProtect",
								f: Nr
							},
							222: {
								n: "OleObjectSize"
							},
							224: {
								n: "XF",
								f: function(e, t, n) {
									var r = {};
									return r.ifnt = e.read_shift(2), r.numFmtId = e.read_shift(2), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, 6, r.data = function(e, t, n, r) {
										var i = {},
											a = e.read_shift(4),
											o = e.read_shift(4),
											s = e.read_shift(4),
											u = e.read_shift(2);
										return i.patternType = Fn[s >> 26], r.cellStyles ? (i.alc = 7 & a, i.fWrap = a >> 3 & 1, i.alcV = a >> 4 & 7, i.fJustLast = a >> 7 & 1, i.trot = a >> 8 & 255, i.cIndent = a >> 16 & 15, i.fShrinkToFit = a >> 20 & 1, i.iReadOrder = a >> 22 & 2, i.fAtrNum = a >> 26 & 1, i.fAtrFnt = a >> 27 & 1, i.fAtrAlc = a >> 28 & 1, i.fAtrBdr = a >> 29 & 1, i.fAtrPat = a >> 30 & 1, i.fAtrProt = a >> 31 & 1, i.dgLeft = 15 & o, i.dgRight = o >> 4 & 15, i.dgTop = o >> 8 & 15, i.dgBottom = o >> 12 & 15, i.icvLeft = o >> 16 & 127, i.icvRight = o >> 23 & 127, i.grbitDiag = o >> 30 & 3, i.icvTop = 127 & s, i.icvBottom = s >> 7 & 127, i.icvDiag = s >> 14 & 127, i.dgDiag = s >> 21 & 15, i.icvFore = 127 & u, i.icvBack = u >> 7 & 127, i.fsxButton = u >> 14 & 1, i) : i
									}(e, 0, r.fStyle, n), r
								}
							},
							225: {
								n: "InterfaceHdr",
								f: function(e, t) {
									return 0 === t || e.read_shift(2), 1200
								}
							},
							226: {
								n: "InterfaceEnd",
								f: Br
							},
							227: {
								n: "SXVS"
							},
							229: {
								n: "MergeCells",
								f: function(e, t) {
									for (var n = [], r = e.read_shift(2); r--;) n.push(ii(e));
									return n
								}
							},
							233: {
								n: "BkHim"
							},
							235: {
								n: "MsoDrawingGroup"
							},
							236: {
								n: "MsoDrawing"
							},
							237: {
								n: "MsoDrawingSelection"
							},
							239: {
								n: "PhoneticInfo"
							},
							240: {
								n: "SxRule"
							},
							241: {
								n: "SXEx"
							},
							242: {
								n: "SxFilt"
							},
							244: {
								n: "SxDXF"
							},
							245: {
								n: "SxItm"
							},
							246: {
								n: "SxName"
							},
							247: {
								n: "SxSelect"
							},
							248: {
								n: "SXPair"
							},
							249: {
								n: "SxFmla"
							},
							251: {
								n: "SxFormat"
							},
							252: {
								n: "SST",
								f: function(e, t) {
									for (var n = e.l + t, r = e.read_shift(4), i = e.read_shift(4), a = [], o = 0; o != i && e.l < n; ++o) a.push(Yr(e));
									return a.Count = r, a.Unique = i, a
								}
							},
							253: {
								n: "LabelSst",
								f: function(e) {
									var t = ei(e);
									return t.isst = e.read_shift(4), t
								}
							},
							255: {
								n: "ExtSST",
								f: function(e, t) {
									var n = {};
									return n.dsst = e.read_shift(2), e.l += t - 2, n
								}
							},
							256: {
								n: "SXVDEx"
							},
							259: {
								n: "SXFormula"
							},
							290: {
								n: "SXDBEx"
							},
							311: {
								n: "RRDInsDel"
							},
							312: {
								n: "RRDHead"
							},
							315: {
								n: "RRDChgCell"
							},
							317: {
								n: "RRTabId",
								f: jr
							},
							318: {
								n: "RRDRenSheet"
							},
							319: {
								n: "RRSort"
							},
							320: {
								n: "RRDMove"
							},
							330: {
								n: "RRFormat"
							},
							331: {
								n: "RRAutoFmt"
							},
							333: {
								n: "RRInsertSh"
							},
							334: {
								n: "RRDMoveBegin"
							},
							335: {
								n: "RRDMoveEnd"
							},
							336: {
								n: "RRDInsDelBegin"
							},
							337: {
								n: "RRDInsDelEnd"
							},
							338: {
								n: "RRDConflict"
							},
							339: {
								n: "RRDDefName"
							},
							340: {
								n: "RRDRstEtxp"
							},
							351: {
								n: "LRng"
							},
							352: {
								n: "UsesELFs",
								f: Nr
							},
							353: {
								n: "DSF",
								f: Br
							},
							401: {
								n: "CUsr"
							},
							402: {
								n: "CbUsr"
							},
							403: {
								n: "UsrInfo"
							},
							404: {
								n: "UsrExcl"
							},
							405: {
								n: "FileLock"
							},
							406: {
								n: "RRDInfo"
							},
							407: {
								n: "BCUsrs"
							},
							408: {
								n: "UsrChk"
							},
							425: {
								n: "UserBView"
							},
							426: {
								n: "UserSViewBegin"
							},
							427: {
								n: "UserSViewEnd"
							},
							428: {
								n: "RRDUserView"
							},
							429: {
								n: "Qsi"
							},
							430: {
								n: "SupBook",
								f: function(e, t, n) {
									var r = e.l + t,
										i = e.read_shift(2),
										a = e.read_shift(2);
									if (n.sbcch = a, 1025 == a || 14849 == a) return [a, i];
									if (a < 1 || a > 255) throw new Error("Unexpected SupBook type: " + a);
									for (var o = zr(e, a), s = []; r > e.l;) s.push(Qr(e));
									return [a, i, o, s]
								}
							},
							431: {
								n: "Prot4Rev",
								f: Nr
							},
							432: {
								n: "CondFmt"
							},
							433: {
								n: "CF"
							},
							434: {
								n: "DVal"
							},
							437: {
								n: "DConBin"
							},
							438: {
								n: "TxO",
								f: function(e, t, n) {
									var r = e.l,
										i = "";
									try {
										e.l += 4;
										var a = (n.lastobj || {
											cmo: [0, 0]
										}).cmo[1]; - 1 == [0, 5, 7, 11, 12, 14].indexOf(a) ? e.l += 6 : function(e) {
											var t = e.read_shift(1);
											e.l++;
											var n = e.read_shift(2);
											e.l += 2
										}(e);
										var o = e.read_shift(2);
										e.read_shift(2), Fr(e);
										var s = e.read_shift(2);
										e.l += s;
										for (var u = 1; u < e.lens.length - 1; ++u) {
											if (e.l - r != e.lens[u]) throw new Error("TxO: bad continue record");
											var c = e[e.l];
											if ((i += zr(e, e.lens[u + 1] - e.lens[u] - 1)).length >= (c ? o : 2 * o)) break
										}
										if (i.length !== o && i.length !== 2 * o) throw new Error("cchText: " + o + " != " + i.length);
										return e.l = r + t, {
											t: i
										}
									} catch (n) {
										return e.l = r + t, {
											t: i
										}
									}
								}
							},
							439: {
								n: "RefreshAll",
								f: Nr
							},
							440: {
								n: "HLink",
								f: function(e, t) {
									var n = ii(e);
									return e.l += 16, [n, function(e, t) {
										var n = e.l + t,
											r = e.read_shift(4);
										if (2 !== r) throw new Error("Unrecognized streamVersion: " + r);
										var i = e.read_shift(2);
										e.l += 2;
										var a, o, s, u, c, l, f = "";
										16 & i && (a = Kr(e, e.l)), 128 & i && (o = Kr(e, e.l)), 257 == (257 & i) && (s = Kr(e, e.l)), 1 == (257 & i) && (u = Wr(e, e.l)), 8 & i && (f = Kr(e, e.l)), 32 & i && (c = e.read_shift(16)), 64 & i && (l = gr(e)), e.l = n;
										var d = o || s || u || "";
										d && f && (d += "#" + f), d || (d = "#" + f);
										var h = {
											Target: d
										};
										return c && (h.guid = c), l && (h.time = l), a && (h.Tooltip = a), h
									}(e, t - 24)]
								}
							},
							441: {
								n: "Lel"
							},
							442: {
								n: "CodeName",
								f: Qr
							},
							443: {
								n: "SXFDBType"
							},
							444: {
								n: "Prot4RevPass",
								f: Fr
							},
							445: {
								n: "ObNoMacros"
							},
							446: {
								n: "Dv"
							},
							448: {
								n: "Excel9File",
								f: Br
							},
							449: {
								n: "RecalcId",
								f: function(e) {
									return e.read_shift(2), e.read_shift(4)
								},
								r: 2
							},
							450: {
								n: "EntExU2",
								f: Br
							},
							512: {
								n: "Dimensions",
								f: bi
							},
							513: {
								n: "Blank",
								f: Pi
							},
							515: {
								n: "Number",
								f: function(e) {
									var t = ei(e),
										n = kn(e);
									return t.val = n, t
								}
							},
							516: {
								n: "Label",
								f: function(e, t, n) {
									e.l;
									var r = ei(e);
									2 == n.biff && e.l++;
									var i = Qr(e, e.l, n);
									return r.val = i, r
								}
							},
							517: {
								n: "BoolErr",
								f: vi
							},
							518: {
								n: "Formula",
								f: Xo
							},
							519: {
								n: "String",
								f: Ii
							},
							520: {
								n: "Row",
								f: function(e) {
									var t = {};
									t.r = e.read_shift(2), t.c = e.read_shift(2), t.cnt = e.read_shift(2) - t.c;
									var n = e.read_shift(2);
									e.l += 4;
									var r = e.read_shift(1);
									return e.l += 3, 7 & r && (t.level = 7 & r), 32 & r && (t.hidden = !0), 64 & r && (t.hpt = n / 20), t
								}
							},
							523: {
								n: "Index"
							},
							545: {
								n: "Array",
								f: Ci
							},
							549: {
								n: "DefaultRowHeight",
								f: pi
							},
							566: {
								n: "Table"
							},
							574: {
								n: "Window2",
								f: function(e, t, n) {
									return n && n.biff >= 2 && n.biff < 5 ? {} : {
										RTL: 64 & e.read_shift(2)
									}
								}
							},
							638: {
								n: "RK",
								f: function(e) {
									var t = e.read_shift(2),
										n = e.read_shift(2),
										r = ri(e);
									return {
										r: t,
										c: n,
										ixfe: r[0],
										rknum: r[1]
									}
								}
							},
							659: {

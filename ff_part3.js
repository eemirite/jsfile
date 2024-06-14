							e: {
								r: n[0],
								c: i,
								cRel: n[1],
								rRel: n[2]
							}
						}
					}

					function go(e, t, n) {
						if (n && n.biff >= 2 && n.biff <= 5) return function(e) {
							var t = _o(e, 2),
								n = e.read_shift(1);
							return {
								r: t[0],
								c: n,
								cRel: t[1],
								rRel: t[2]
							}
						}(e);
						var r = e.read_shift(n && 12 == n.biff ? 4 : 2),
							i = _o(e, 2);
						return {
							r: r,
							c: i[0],
							cRel: i[1],
							rRel: i[2]
						}
					}

					function vo(e) {
						var t = e.read_shift(2),
							n = e.read_shift(2);
						return {
							r: t,
							c: 255 & n,
							fQuoted: !!(16384 & n),
							cRel: n >> 15,
							rRel: n >> 15
						}
					}

					function yo(e) {
						return [e.read_shift(1), e.read_shift(1)]
					}

					function Ao(e, t) {
						var n = [e.read_shift(1)];
						if (12 == t) switch (n[0]) {
							case 2:
								n[0] = 4;
								break;
							case 4:
								n[0] = 16;
								break;
							case 0:
								n[0] = 1;
								break;
							case 1:
								n[0] = 2
						}
						switch (n[0]) {
							case 4:
								n[1] = Nr(e, 1) ? "TRUE" : "FALSE", 12 != t && (e.l += 7);
								break;
							case 37:
							case 16:
								n[1] = jn[e[e.l]], e.l += 12 == t ? 4 : 8;
								break;
							case 0:
								e.l += 8;
								break;
							case 1:
								n[1] = kn(e);
								break;
							case 2:
								n[1] = Gr(e, 0, {
									biff: t > 0 && t < 8 ? 2 : t
								});
								break;
							default:
								throw new Error("Bad SerAr: " + n[0])
						}
						return n
					}

					function So(e, t, n) {
						for (var r = e.read_shift(12 == n.biff ? 4 : 2), i = [], a = 0; a != r; ++a) i.push((12 == n.biff ? Cn : ii)(e, 8));
						return i
					}

					function wo(e, t, n) {
						var r = 0,
							i = 0;
						12 == n.biff ? (r = e.read_shift(4), i = e.read_shift(4)) : (i = 1 + e.read_shift(1), r = 1 + e.read_shift(2)), n.biff >= 2 && n.biff < 8 && (--r, 0 == --i && (i = 256));
						for (var a = 0, o = []; a != r && (o[a] = []); ++a)
							for (var s = 0; s != i; ++s) o[a][s] = Ao(e, n.biff);
						return o
					}

					function Eo(e, t, n) {
						return e.l += 2, [vo(e)]
					}

					function To(e) {
						return e.l += 6, []
					}
					var Co = Eo,
						$o = To,
						ko = To,
						Oo = Eo;

					function xo(e) {
						return e.l += 2, [Fr(e), 1 & e.read_shift(2)]
					}
					var Po = Eo,
						Mo = xo,
						Io = To,
						Lo = Eo,
						Do = Eo,
						Bo = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"],
						No = {
							1: {
								n: "PtgExp",
								f: function(e, t, n) {
									return e.l++, n && 12 == n.biff ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(n && 2 == n.biff ? 1 : 2)]
								}
							},
							2: {
								n: "PtgTbl",
								f: Ft
							},
							3: {
								n: "PtgAdd",
								f: po
							},
							4: {
								n: "PtgSub",
								f: po
							},
							5: {
								n: "PtgMul",
								f: po
							},
							6: {
								n: "PtgDiv",
								f: po
							},
							7: {
								n: "PtgPower",
								f: po
							},
							8: {
								n: "PtgConcat",
								f: po
							},
							9: {
								n: "PtgLt",
								f: po
							},
							10: {
								n: "PtgLe",
								f: po
							},
							11: {
								n: "PtgEq",
								f: po
							},
							12: {
								n: "PtgGe",
								f: po
							},
							13: {
								n: "PtgGt",
								f: po
							},
							14: {
								n: "PtgNe",
								f: po
							},
							15: {
								n: "PtgIsect",
								f: po
							},
							16: {
								n: "PtgUnion",
								f: po
							},
							17: {
								n: "PtgRange",
								f: po
							},
							18: {
								n: "PtgUplus",
								f: po
							},
							19: {
								n: "PtgUminus",
								f: po
							},
							20: {
								n: "PtgPercent",
								f: po
							},
							21: {
								n: "PtgParen",
								f: po
							},
							22: {
								n: "PtgMissArg",
								f: po
							},
							23: {
								n: "PtgStr",
								f: function(e, t, n) {
									return e.l++, Hr(e, 0, n)
								}
							},
							26: {
								n: "PtgSheet",
								f: function(e, t, n) {
									return e.l += 5, e.l += 2, e.l += 2 == n.biff ? 1 : 4, ["PTGSHEET"]
								}
							},
							27: {
								n: "PtgEndSheet",
								f: function(e, t, n) {
									return e.l += 2 == n.biff ? 4 : 5, ["PTGENDSHEET"]
								}
							},
							28: {
								n: "PtgErr",
								f: function(e) {
									return e.l++, jn[e.read_shift(1)]
								}
							},
							29: {
								n: "PtgBool",
								f: function(e) {
									return e.l++, 0 !== e.read_shift(1)
								}
							},
							30: {
								n: "PtgInt",
								f: function(e) {
									return e.l++, e.read_shift(2)
								}
							},
							31: {
								n: "PtgNum",
								f: function(e) {
									return e.l++, kn(e)
								}
							},
							32: {
								n: "PtgArray",
								f: function(e, t, n) {
									var r = (96 & e[e.l++]) >> 5;
									return e.l += 2 == n.biff ? 6 : 12 == n.biff ? 14 : 7, [r]
								}
							},
							33: {
								n: "PtgFunc",
								f: function(e, t, n) {
									var r = (96 & e[e.l]) >> 5;
									e.l += 1;
									var i = e.read_shift(n && n.biff <= 3 ? 1 : 2);
									return [os[i], as[i], r]
								}
							},
							34: {
								n: "PtgFuncVar",
								f: function(e, t, n) {
									var r = e[e.l++],
										i = e.read_shift(1),
										a = n && n.biff <= 3 ? [88 == r ? -1 : 0, e.read_shift(1)] : function(e) {
											return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)]
										}(e);
									return [i, (0 === a[0] ? as : is)[a[1]]]
								}
							},
							35: {
								n: "PtgName",
								f: function(e, t, n) {
									var r = e.read_shift(1) >>> 5 & 3,
										i = !n || n.biff >= 8 ? 4 : 2,
										a = e.read_shift(i);
									switch (n.biff) {
										case 2:
											e.l += 5;
											break;
										case 3:
										case 4:
											e.l += 8;
											break;
										case 5:
											e.l += 12
									}
									return [r, 0, a]
								}
							},
							36: {
								n: "PtgRef",
								f: function(e, t, n) {
									var r = (96 & e[e.l]) >> 5;
									return e.l += 1, [r, go(e, 0, n)]
								}
							},
							37: {
								n: "PtgArea",
								f: function(e, t, n) {
									return [(96 & e[e.l++]) >> 5, mo(e, n.biff >= 2 && n.biff, n)]
								}
							},
							38: {
								n: "PtgMemArea",
								f: function(e, t, n) {
									var r = e.read_shift(1) >>> 5 & 3;
									return e.l += n && 2 == n.biff ? 3 : 4, [r, e.read_shift(n && 2 == n.biff ? 1 : 2)]
								}
							},
							39: {
								n: "PtgMemErr",
								f: Ft
							},
							40: {
								n: "PtgMemNoMem",
								f: Ft
							},
							41: {
								n: "PtgMemFunc",
								f: function(e, t, n) {
									return [e.read_shift(1) >>> 5 & 3, e.read_shift(n && 2 == n.biff ? 1 : 2)]
								}
							},
							42: {
								n: "PtgRefErr",
								f: function(e, t, n) {
									var r = e.read_shift(1) >>> 5 & 3;
									return e.l += 4, n.biff < 8 && e.l--, 12 == n.biff && (e.l += 2), [r]
								}
							},
							43: {
								n: "PtgAreaErr",
								f: function(e, t, n) {
									var r = (96 & e[e.l++]) >> 5;
									return e.l += n && n.biff > 8 ? 12 : n.biff < 8 ? 6 : 8, [r]
								}
							},
							44: {
								n: "PtgRefN",
								f: function(e, t, n) {
									var r = (96 & e[e.l]) >> 5;
									return e.l += 1, [r, function(e, t, n) {
										var r = n && n.biff ? n.biff : 8;
										if (r >= 2 && r <= 5) return function(e) {
											var t = e.read_shift(2),
												n = e.read_shift(1),
												r = (32768 & t) >> 15,
												i = (16384 & t) >> 14;
											return t &= 16383, 1 == r && t >= 8192 && (t -= 16384), 1 == i && n >= 128 && (n -= 256), {
												r: t,
												c: n,
												cRel: i,
												rRel: r
											}
										}(e);
										var i = e.read_shift(r >= 12 ? 4 : 2),
											a = e.read_shift(2),
											o = (16384 & a) >> 14,
											s = (32768 & a) >> 15;
										if (a &= 16383, 1 == s)
											for (; i > 524287;) i -= 1048576;
										if (1 == o)
											for (; a > 8191;) a -= 16384;
										return {
											r: i,
											c: a,
											cRel: o,
											rRel: s
										}
									}(e, 0, n)]
								}
							},
							45: {
								n: "PtgAreaN",
								f: function(e, t, n) {
									return [(96 & e[e.l++]) >> 5, function(e, t, n) {
										if (n.biff < 8) return bo(e);
										var r = e.read_shift(12 == n.biff ? 4 : 2),
											i = e.read_shift(12 == n.biff ? 4 : 2),
											a = _o(e, 2),
											o = _o(e, 2);
										return {
											s: {
												r: r,
												c: a[0],
												cRel: a[1],
												rRel: a[2]
											},
											e: {
												r: i,
												c: o[0],
												cRel: o[1],
												rRel: o[2]
											}
										}
									}(e, 0, n)]
								}
							},
							46: {
								n: "PtgMemAreaN",
								f: function(e) {
									return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
								}
							},
							47: {
								n: "PtgMemNoMemN",
								f: function(e) {
									return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
								}
							},
							57: {
								n: "PtgNameX",
								f: function(e, t, n) {
									return 5 == n.biff ? function(e) {
										var t = e.read_shift(1) >>> 5 & 3,
											n = e.read_shift(2, "i");
										e.l += 8;
										var r = e.read_shift(2);
										return e.l += 12, [t, n, r]
									}(e) : [e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4)]
								}
							},
							58: {
								n: "PtgRef3d",
								f: function(e, t, n) {
									var r = (96 & e[e.l]) >> 5;
									e.l += 1;
									var i = e.read_shift(2);
									return n && 5 == n.biff && (e.l += 12), [r, i, go(e, 0, n)]
								}
							},
							59: {
								n: "PtgArea3d",
								f: function(e, t, n) {
									var r = (96 & e[e.l++]) >> 5,
										i = e.read_shift(2, "i");
									if (n) switch (n.biff) {
										case 5:
											e.l += 12, 6;
											break;
										case 12:
											12
									}
									return [r, i, mo(e, 0, n)]
								}
							},
							60: {
								n: "PtgRefErr3d",
								f: function(e, t, n) {
									var r = (96 & e[e.l++]) >> 5,
										i = e.read_shift(2),
										a = 4;
									if (n) switch (n.biff) {
										case 5:
											a = 15;
											break;
										case 12:
											a = 6
									}
									return e.l += a, [r, i]
								}
							},
							61: {
								n: "PtgAreaErr3d",
								f: function(e, t, n) {
									var r = (96 & e[e.l++]) >> 5,
										i = e.read_shift(2),
										a = 8;
									if (n) switch (n.biff) {
										case 5:
											e.l += 12, a = 6;
											break;
										case 12:
											a = 12
									}
									return e.l += a, [r, i]
								}
							},
							255: {}
						},
						Ro = {
							64: 32,
							96: 32,
							65: 33,
							97: 33,
							66: 34,
							98: 34,
							67: 35,
							99: 35,
							68: 36,
							100: 36,
							69: 37,
							101: 37,
							70: 38,
							102: 38,
							71: 39,
							103: 39,
							72: 40,
							104: 40,
							73: 41,
							105: 41,
							74: 42,
							106: 42,
							75: 43,
							107: 43,
							76: 44,
							108: 44,
							77: 45,
							109: 45,
							78: 46,
							110: 46,
							79: 47,
							111: 47,
							88: 34,
							120: 34,
							89: 57,
							121: 57,
							90: 58,
							122: 58,
							91: 59,
							123: 59,
							92: 60,
							124: 60,
							93: 61,
							125: 61
						};
					! function() {
						for (var e in Ro) No[e] = No[Ro[e]]
					}();
					var Fo = {
							1: {
								n: "PtgElfLel",
								f: xo
							},
							2: {
								n: "PtgElfRw",
								f: Lo
							},
							3: {
								n: "PtgElfCol",
								f: Co
							},
							6: {
								n: "PtgElfRwV",
								f: Do
							},
							7: {
								n: "PtgElfColV",
								f: Oo
							},
							10: {
								n: "PtgElfRadical",
								f: Po
							},
							11: {
								n: "PtgElfRadicalS",
								f: Io
							},
							13: {
								n: "PtgElfColS",
								f: $o
							},
							15: {
								n: "PtgElfColSV",
								f: ko
							},
							16: {
								n: "PtgElfRadicalLel",
								f: Mo
							},
							25: {
								n: "PtgList",
								f: function(e) {
									e.l += 2;
									var t = e.read_shift(2),
										n = e.read_shift(2),
										r = e.read_shift(4),
										i = e.read_shift(2),
										a = e.read_shift(2);
									return {
										ixti: t,
										coltype: 3 & n,
										rt: Bo[n >> 2 & 31],
										idx: r,
										c: i,
										C: a
									}
								}
							},
							29: {
								n: "PtgSxName",
								f: function(e) {
									return e.l += 2, [e.read_shift(4)]
								}
							},
							255: {}
						},
						Uo = {
							0: {
								n: "PtgAttrNoop",
								f: function(e) {
									return e.l += 4, [0, 0]
								}
							},
							1: {
								n: "PtgAttrSemi",
								f: function(e, t, n) {
									var r = 255 & e[e.l + 1] ? 1 : 0;
									return e.l += n && 2 == n.biff ? 3 : 4, [r]
								}
							},
							2: {
								n: "PtgAttrIf",
								f: function(e, t, n) {
									var r = 255 & e[e.l + 1] ? 1 : 0;
									return e.l += 2, [r, e.read_shift(n && 2 == n.biff ? 1 : 2)]
								}
							},
							4: {
								n: "PtgAttrChoose",
								f: function(e, t, n) {
									e.l += 2;
									for (var r = e.read_shift(n && 2 == n.biff ? 1 : 2), i = [], a = 0; a <= r; ++a) i.push(e.read_shift(n && 2 == n.biff ? 1 : 2));
									return i
								}
							},
							8: {
								n: "PtgAttrGoto",
								f: function(e, t, n) {
									var r = 255 & e[e.l + 1] ? 1 : 0;
									return e.l += 2, [r, e.read_shift(n && 2 == n.biff ? 1 : 2)]
								}
							},
							16: {
								n: "PtgAttrSum",
								f: function(e, t, n) {
									e.l += n && 2 == n.biff ? 3 : 4
								}
							},
							32: {
								n: "PtgAttrBaxcel",
								f: function(e) {
									var t = 1 & e[e.l + 1];
									return e.l += 4, [t, 1]
								}
							},
							64: {
								n: "PtgAttrSpace",
								f: function(e) {
									return e.read_shift(2), yo(e)
								}
							},
							65: {
								n: "PtgAttrSpaceSemi",
								f: function(e) {
									return e.read_shift(2), yo(e)
								}
							},
							128: {
								n: "PtgAttrIfError",
								f: function(e) {
									var t = 255 & e[e.l + 1] ? 1 : 0;
									return e.l += 2, [t, e.read_shift(2)]
								}
							},
							255: {}
						};

					function jo(e, t, n, r) {
						if (r.biff < 8) return Ft(e, t);
						for (var i = e.l + t, a = [], o = 0; o !== n.length; ++o) switch (n[o][0]) {
							case "PtgArray":
								n[o][1] = wo(e, 0, r), a.push(n[o][1]);
								break;
							case "PtgMemArea":
								n[o][2] = So(e, n[o][1], r), a.push(n[o][2]);
								break;
							case "PtgExp":
								r && 12 == r.biff && (n[o][1][1] = e.read_shift(4), a.push(n[o][1]));
								break;
							case "PtgList":
							case "PtgElfRadicalS":
							case "PtgElfColS":
							case "PtgElfColSV":
								throw "Unsupported " + n[o][0]
						}
						return 0 !== (t = i - e.l) && a.push(Ft(e, t)), a
					}

					function Ho(e, t, n) {
						for (var r, i, a = e.l + t, o = []; a != e.l;) t = a - e.l, i = e[e.l], r = No[i], 24 !== i && 25 !== i || (r = (24 === i ? Fo : Uo)[e[e.l + 1]]), r && r.f ? o.push([r.n, r.f(e, t, n)]) : Ft(e, t);
						return o
					}

					function Yo(e) {
						for (var t = [], n = 0; n < e.length; ++n) {
							for (var r = e[n], i = [], a = 0; a < r.length; ++a) {
								var o = r[a];
								if (o) switch (o[0]) {
									case 2:
										i.push('"' + o[1].replace(/"/g, '""') + '"');
										break;
									default:
										i.push(o[1])
								} else i.push("")
							}
							t.push(i.join(","))
						}
						return t.join(";")
					}
					Uo[33] = Uo[32];
					var Vo = {
							PtgAdd: "+",
							PtgConcat: "&",
							PtgDiv: "/",
							PtgEq: "=",
							PtgGe: ">=",
							PtgGt: ">",
							PtgLe: "<=",
							PtgLt: "<",
							PtgMul: "*",
							PtgNe: "<>",
							PtgPower: "^",
							PtgSub: "-"
						},
						zo = new RegExp(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/);

					function Qo(e, t, n) {
						if (!e) return "SH33TJSERR0";
						if (n.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
						if (!e.XTI) return "SH33TJSERR6";
						var r = e.XTI[t];
						if (n.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), 0 == t ? "" : e.XTI[t - 1];
						if (!r) return "SH33TJSERR1";
						var i = "";
						if (n.biff > 8) switch (e[r[0]][0]) {
							case 357:
								return i = -1 == r[1] ? "#REF" : e.SheetNames[r[1]], r[1] == r[2] ? i : i + ":" + e.SheetNames[r[2]];
							case 358:
								return null != n.SID ? e.SheetNames[n.SID] : "SH33TJSSAME" + e[r[0]][0];
							case 355:
							default:
								return "SH33TJSSRC" + e[r[0]][0]
						}
						switch (e[r[0]][0][0]) {
							case 1025:
								return i = -1 == r[1] ? "#REF" : e.SheetNames[r[1]] || "SH33TJSERR3", r[1] == r[2] ? i : i + ":" + e.SheetNames[r[2]];
							case 14849:
								return e[r[0]].slice(1).map((function(e) {
									return e.Name
								})).join(";;");
							default:
								return e[r[0]][0][3] ? (i = -1 == r[1] ? "#REF" : e[r[0]][0][3][r[1]] || "SH33TJSERR4", r[1] == r[2] ? i : i + ":" + e[r[0]][0][3][r[2]]) : "SH33TJSERR2"
						}
					}

					function Go(e, t, n) {
						return function(e, t) {
							if (!(e || t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name");
							return zo.test(e) ? "'" + e + "'" : e
						}(Qo(e, t, n), n)
					}

					function qo(e, t, n, r, i) {
						var a, o, s, u, c = i && i.biff || 8,
							l = {
								s: {
									c: 0,
									r: 0
								},
								e: {
									c: 0,
									r: 0
								}
							},
							f = [],
							d = 0,
							h = 0,
							p = "";
						if (!e[0] || !e[0][0]) return "";
						for (var _ = -1, m = "", b = 0, g = e[0].length; b < g; ++b) {
							var v = e[0][b];
							switch (v[0]) {
								case "PtgUminus":
									f.push("-" + f.pop());
									break;
								case "PtgUplus":
									f.push("+" + f.pop());
									break;
								case "PtgPercent":
									f.push(f.pop() + "%");
									break;
								case "PtgAdd":
								case "PtgConcat":
								case "PtgDiv":
								case "PtgEq":
								case "PtgGe":
								case "PtgGt":
								case "PtgLe":
								case "PtgLt":
								case "PtgMul":
								case "PtgNe":
								case "PtgPower":
								case "PtgSub":
									if (a = f.pop(), o = f.pop(), _ >= 0) {
										switch (e[0][_][1][0]) {
											case 0:
												m = ie(" ", e[0][_][1][1]);
												break;
											case 1:
												m = ie("\r", e[0][_][1][1]);
												break;
											default:
												if (m = "", i.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][_][1][0])
										}
										o += m, _ = -1
									}
									f.push(o + Vo[v[0]] + a);
									break;
								case "PtgIsect":
									a = f.pop(), o = f.pop(), f.push(o + " " + a);
									break;
								case "PtgUnion":
									a = f.pop(), o = f.pop(), f.push(o + "," + a);
									break;
								case "PtgRange":
									a = f.pop(), o = f.pop(), f.push(o + ":" + a);
									break;
								case "PtgAttrChoose":
								case "PtgAttrGoto":
								case "PtgAttrIf":
								case "PtgAttrIfError":
									break;
								case "PtgRef":
									s = Vt(v[1][1], l, i), f.push(Qt(s, c));
									break;
								case "PtgRefN":
									s = n ? Vt(v[1][1], n, i) : v[1][1], f.push(Qt(s, c));
									break;
								case "PtgRef3d":
									d = v[1][1], s = Vt(v[1][2], l, i), p = Go(r, d, i), f.push(p + "!" + Qt(s, c));
									break;
								case "PtgFunc":
								case "PtgFuncVar":
									var y = v[1][0],
										A = v[1][1];
									y || (y = 0);
									var S = 0 == (y &= 127) ? [] : f.slice(-y);
									f.length -= y, "User" === A && (A = S.shift()), f.push(A + "(" + S.join(",") + ")");
									break;
								case "PtgBool":
									f.push(v[1] ? "TRUE" : "FALSE");
									break;
								case "PtgInt":
									f.push(v[1]);
									break;
								case "PtgNum":
									f.push(String(v[1]));
									break;
								case "PtgStr":
									f.push('"' + v[1].replace(/"/g, '""') + '"');
									break;
								case "PtgErr":
									f.push(v[1]);
									break;
								case "PtgAreaN":
									u = zt(v[1][1], n ? {
										s: n
									} : l, i), f.push(Gt(u, i));
									break;
								case "PtgArea":
									u = zt(v[1][1], l, i), f.push(Gt(u, i));
									break;
								case "PtgArea3d":
									d = v[1][1], u = v[1][2], p = Go(r, d, i), f.push(p + "!" + Gt(u, i));
									break;
								case "PtgAttrSum":
									f.push("SUM(" + f.pop() + ")");
									break;
								case "PtgAttrBaxcel":
								case "PtgAttrSemi":
									break;
								case "PtgName":
									h = v[1][2];
									var w = (r.names || [])[h - 1] || (r[0] || [])[h],
										E = w ? w.Name : "SH33TJSNAME" + String(h);
									E in ss && (E = ss[E]), f.push(E);
									break;
								case "PtgNameX":
									var T, C = v[1][1];
									if (h = v[1][2], !(i.biff <= 5)) {
										var $ = "";
										if (14849 == ((r[C] || [])[0] || [])[0] || (1025 == ((r[C] || [])[0] || [])[0] ? r[C][h] && r[C][h].itab > 0 && ($ = r.SheetNames[r[C][h].itab - 1] + "!") : $ = r.SheetNames[h - 1] + "!"), r[C] && r[C][h]) $ += r[C][h].Name;
										else if (r[0] && r[0][h]) $ += r[0][h].Name;
										else {
											var k = Qo(r, C, i).split(";;");
											k[h - 1] ? $ = k[h - 1] : $ += "SH33TJSERRX"
										}
										f.push($);
										break
									}
									C < 0 && (C = -C), r[C] && (T = r[C][h]), T || (T = {
										Name: "SH33TJSERRY"
									}), f.push(T.Name);
									break;
								case "PtgParen":
									var O = "(",
										x = ")";
									if (_ >= 0) {
										switch (m = "", e[0][_][1][0]) {
											case 2:
												O = ie(" ", e[0][_][1][1]) + O;
												break;
											case 3:
												O = ie("\r", e[0][_][1][1]) + O;
												break;
											case 4:
												x = ie(" ", e[0][_][1][1]) + x;
												break;
											case 5:
												x = ie("\r", e[0][_][1][1]) + x;
												break;
											default:
												if (i.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][_][1][0])
										}
										_ = -1
									}
									f.push(O + f.pop() + x);
									break;
								case "PtgRefErr":
								case "PtgRefErr3d":
									f.push("#REF!");
									break;
								case "PtgExp":
									s = {
										c: v[1][1],
										r: v[1][0]
									};
									var P = {
										c: n.c,
										r: n.r
									};
									if (r.sharedf[Zt(s)]) {
										var M = r.sharedf[Zt(s)];
										f.push(qo(M, l, P, r, i))
									} else {
										var I = !1;
										for (a = 0; a != r.arrayf.length; ++a)
											if (o = r.arrayf[a], !(s.c < o[0].s.c || s.c > o[0].e.c || s.r < o[0].s.r || s.r > o[0].e.r)) {
												f.push(qo(o[1], l, P, r, i)), I = !0;
												break
											} I || f.push(v[1])
									}
									break;
								case "PtgArray":
									f.push("{" + Yo(v[1]) + "}");
									break;
								case "PtgMemArea":
									break;
								case "PtgAttrSpace":
								case "PtgAttrSpaceSemi":
									_ = b;
									break;
								case "PtgTbl":
								case "PtgMemErr":
									break;
								case "PtgMissArg":
									f.push("");
									break;
								case "PtgAreaErr":
								case "PtgAreaErr3d":
									f.push("#REF!");
									break;
								case "PtgList":
									f.push("Table" + v[1].idx + "[#" + v[1].rt + "]");
									break;
								case "PtgMemAreaN":
								case "PtgMemNoMemN":
								case "PtgAttrNoop":
								case "PtgSheet":
								case "PtgEndSheet":
								case "PtgMemFunc":
								case "PtgMemNoMem":
									break;
								case "PtgElfCol":
								case "PtgElfColS":
								case "PtgElfColSV":
								case "PtgElfColV":
								case "PtgElfLel":
								case "PtgElfRadical":
								case "PtgElfRadicalLel":
								case "PtgElfRadicalS":
								case "PtgElfRw":
								case "PtgElfRwV":
									throw new Error("Unsupported ELFs");
								case "PtgSxName":
								default:
									throw new Error("Unrecognized Formula Token: " + String(v))
							}
							if (3 != i.biff && _ >= 0 && -1 == ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(e[0][b][0])) {
								var L = !0;
								switch ((v = e[0][_])[1][0]) {
									case 4:
										L = !1;
									case 0:
										m = ie(" ", v[1][1]);
										break;
									case 5:
										L = !1;
									case 1:
										m = ie("\r", v[1][1]);
										break;
									default:
										if (m = "", i.WTF) throw new Error("Unexpected PtgAttrSpaceType " + v[1][0])
								}
								f.push((L ? m : "") + f.pop() + (L ? "" : m)), _ = -1
							}
						}
						if (f.length > 1 && i.WTF) throw new Error("bad formula stack");
						return f[0]
					}

					function Wo(e, t, n) {
						var r, i = e.l + t,
							a = 2 == n.biff ? 1 : 2,
							o = e.read_shift(a);
						if (65535 == o) return [
							[], Ft(e, t - 2)
						];
						var s = Ho(e, o, n);
						return t !== o + a && (r = jo(e, t - o - a, s, n)), e.l = i, [s, r]
					}

					function Ko(e, t, n) {
						var r, i = e.l + t,
							a = e.read_shift(2),
							o = Ho(e, a, n);
						return 65535 == a ? [
							[], Ft(e, t - 2)
						] : (t !== a + 2 && (r = jo(e, i - a - 2, o, n)), [o, r])
					}

					function Xo(e, t, n) {
						var r = e.l + t,
							i = ei(e);
						2 == n.biff && ++e.l;
						var a = function(e) {
								var t;
								if (65535 !== Ot(e, e.l + 6)) return [kn(e), "n"];
								switch (e[e.l]) {
									case 0:
										return e.l += 8, ["String", "s"];
									case 1:
										return t = 1 === e[e.l + 2], e.l += 8, [t, "b"];
									case 2:
										return t = e[e.l + 2], e.l += 8, [t, "e"];
									case 3:
										return e.l += 8, ["", "s"]
								}
								return []
							}(e),
							o = e.read_shift(1);
						2 != n.biff && (e.read_shift(1), n.biff >= 5 && e.read_shift(4));
						var s = function(e, t, n) {
							var r, i = e.l + t,
								a = 2 == n.biff ? 1 : 2,
								o = e.read_shift(a);
							if (65535 == o) return [
								[], Ft(e, t - 2)
							];
							var s = Ho(e, o, n);
							return t !== o + a && (r = jo(e, t - o - a, s, n)), e.l = i, [s, r]
						}(e, r - e.l, n);
						return {
							cell: i,
							val: a[0],
							formula: s,
							shared: o >> 3 & 1,
							tt: a[1]
						}
					}

					function Jo(e, t, n, r, i) {
						var a = ti(t, n, i),
							o = function(e) {
								if (null == e) {
									var t = Ut(8);
									return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t
								}
								return On("number" == typeof e ? e : 0)
							}(e.v),
							s = Ut(6);
						s.write_shift(2, 33), s.write_shift(4, 0);
						for (var u = Ut(e.bf.length), c = 0; c < e.bf.length; ++c) u[c] = e.bf[c];
						return O([a, o, s, u])
					}

					function Zo(e, t, n) {
						var r = e.read_shift(4),
							i = Ho(e, r, n),
							a = e.read_shift(4);
						return [i, a > 0 ? jo(e, a, i, n) : null]
					}
					var es = Zo,
						ts = Zo,
						ns = Zo,
						rs = Zo,
						is = {
							0: "BEEP",
							1: "OPEN",
							2: "OPEN.LINKS",
							3: "CLOSE.ALL",
							4: "SAVE",
							5: "SAVE.AS",
							6: "FILE.DELETE",
							7: "PAGE.SETUP",
							8: "PRINT",
							9: "PRINTER.SETUP",
							10: "QUIT",
							11: "NEW.WINDOW",
							12: "ARRANGE.ALL",
							13: "WINDOW.SIZE",
							14: "WINDOW.MOVE",
							15: "FULL",
							16: "CLOSE",
							17: "RUN",
							22: "SET.PRINT.AREA",
							23: "SET.PRINT.TITLES",
							24: "SET.PAGE.BREAK",
							25: "REMOVE.PAGE.BREAK",
							26: "FONT",
							27: "DISPLAY",
							28: "PROTECT.DOCUMENT",
							29: "PRECISION",
							30: "A1.R1C1",
							31: "CALCULATE.NOW",
							32: "CALCULATION",
							34: "DATA.FIND",
							35: "EXTRACT",
							36: "DATA.DELETE",
							37: "SET.DATABASE",
							38: "SET.CRITERIA",
							39: "SORT",
							40: "DATA.SERIES",
							41: "TABLE",
							42: "FORMAT.NUMBER",
							43: "ALIGNMENT",
							44: "STYLE",
							45: "BORDER",
							46: "CELL.PROTECTION",
							47: "COLUMN.WIDTH",
							48: "UNDO",
							49: "CUT",
							50: "COPY",
							51: "PASTE",
							52: "CLEAR",
							53: "PASTE.SPECIAL",
							54: "EDIT.DELETE",
							55: "INSERT",
							56: "FILL.RIGHT",
							57: "FILL.DOWN",
							61: "DEFINE.NAME",
							62: "CREATE.NAMES",
							63: "FORMULA.GOTO",
							64: "FORMULA.FIND",
							65: "SELECT.LAST.CELL",
							66: "SHOW.ACTIVE.CELL",
							67: "GALLERY.AREA",
							68: "GALLERY.BAR",
							69: "GALLERY.COLUMN",
							70: "GALLERY.LINE",
							71: "GALLERY.PIE",
							72: "GALLERY.SCATTER",
							73: "COMBINATION",
							74: "PREFERRED",
							75: "ADD.OVERLAY",
							76: "GRIDLINES",
							77: "SET.PREFERRED",
							78: "AXES",
							79: "LEGEND",
							80: "ATTACH.TEXT",
							81: "ADD.ARROW",
							82: "SELECT.CHART",
							83: "SELECT.PLOT.AREA",
							84: "PATTERNS",
							85: "MAIN.CHART",
							86: "OVERLAY",
							87: "SCALE",
							88: "FORMAT.LEGEND",
							89: "FORMAT.TEXT",
							90: "EDIT.REPEAT",
							91: "PARSE",
							92: "JUSTIFY",
							93: "HIDE",
							94: "UNHIDE",
							95: "WORKSPACE",
							96: "FORMULA",
							97: "FORMULA.FILL",
							98: "FORMULA.ARRAY",
							99: "DATA.FIND.NEXT",
							100: "DATA.FIND.PREV",
							101: "FORMULA.FIND.NEXT",
							102: "FORMULA.FIND.PREV",
							103: "ACTIVATE",
							104: "ACTIVATE.NEXT",
							105: "ACTIVATE.PREV",
							106: "UNLOCKED.NEXT",
							107: "UNLOCKED.PREV",
							108: "COPY.PICTURE",
							109: "SELECT",
							110: "DELETE.NAME",
							111: "DELETE.FORMAT",
							112: "VLINE",
							113: "HLINE",
							114: "VPAGE",
							115: "HPAGE",
							116: "VSCROLL",
							117: "HSCROLL",
							118: "ALERT",
							119: "NEW",
							120: "CANCEL.COPY",
							121: "SHOW.CLIPBOARD",
							122: "MESSAGE",
							124: "PASTE.LINK",
							125: "APP.ACTIVATE",
							126: "DELETE.ARROW",
							127: "ROW.HEIGHT",
							128: "FORMAT.MOVE",
							129: "FORMAT.SIZE",
							130: "FORMULA.REPLACE",
							131: "SEND.KEYS",
							132: "SELECT.SPECIAL",
							133: "APPLY.NAMES",
							134: "REPLACE.FONT",
							135: "FREEZE.PANES",
							136: "SHOW.INFO",
							137: "SPLIT",
							138: "ON.WINDOW",
							139: "ON.DATA",
							140: "DISABLE.INPUT",
							142: "OUTLINE",
							143: "LIST.NAMES",
							144: "FILE.CLOSE",
							145: "SAVE.WORKBOOK",
							146: "DATA.FORM",
							147: "COPY.CHART",
							148: "ON.TIME",
							149: "WAIT",
							150: "FORMAT.FONT",
							151: "FILL.UP",
							152: "FILL.LEFT",
							153: "DELETE.OVERLAY",
							155: "SHORT.MENUS",
							159: "SET.UPDATE.STATUS",
							161: "COLOR.PALETTE",
							162: "DELETE.STYLE",
							163: "WINDOW.RESTORE",
							164: "WINDOW.MAXIMIZE",
							166: "CHANGE.LINK",
							167: "CALCULATE.DOCUMENT",
							168: "ON.KEY",
							169: "APP.RESTORE",
							170: "APP.MOVE",
							171: "APP.SIZE",
							172: "APP.MINIMIZE",
							173: "APP.MAXIMIZE",
							174: "BRING.TO.FRONT",
							175: "SEND.TO.BACK",
							185: "MAIN.CHART.TYPE",
							186: "OVERLAY.CHART.TYPE",
							187: "SELECT.END",
							188: "OPEN.MAIL",
							189: "SEND.MAIL",
							190: "STANDARD.FONT",
							191: "CONSOLIDATE",
							192: "SORT.SPECIAL",
							193: "GALLERY.3D.AREA",
							194: "GALLERY.3D.COLUMN",
							195: "GALLERY.3D.LINE",
							196: "GALLERY.3D.PIE",
							197: "VIEW.3D",
							198: "GOAL.SEEK",
							199: "WORKGROUP",
							200: "FILL.GROUP",
							201: "UPDATE.LINK",
							202: "PROMOTE",
							203: "DEMOTE",
							204: "SHOW.DETAIL",
							206: "UNGROUP",
							207: "OBJECT.PROPERTIES",
							208: "SAVE.NEW.OBJECT",
							209: "SHARE",
							210: "SHARE.NAME",
							211: "DUPLICATE",
							212: "APPLY.STYLE",
							213: "ASSIGN.TO.OBJECT",
							214: "OBJECT.PROTECTION",
							215: "HIDE.OBJECT",
							216: "SET.EXTRACT",
							217: "CREATE.PUBLISHER",
							218: "SUBSCRIBE.TO",
							219: "ATTRIBUTES",
							220: "SHOW.TOOLBAR",
							222: "PRINT.PREVIEW",
							223: "EDIT.COLOR",
							224: "SHOW.LEVELS",
							225: "FORMAT.MAIN",
							226: "FORMAT.OVERLAY",
							227: "ON.RECALC",
							228: "EDIT.SERIES",
							229: "DEFINE.STYLE",
							240: "LINE.PRINT",
							243: "ENTER.DATA",
							249: "GALLERY.RADAR",
							250: "MERGE.STYLES",
							251: "EDITION.OPTIONS",
							252: "PASTE.PICTURE",
							253: "PASTE.PICTURE.LINK",
							254: "SPELLING",
							256: "ZOOM",
							259: "INSERT.OBJECT",
							260: "WINDOW.MINIMIZE",
							265: "SOUND.NOTE",
							266: "SOUND.PLAY",
							267: "FORMAT.SHAPE",
							268: "EXTEND.POLYGON",
							269: "FORMAT.AUTO",
							272: "GALLERY.3D.BAR",
							273: "GALLERY.3D.SURFACE",
							274: "FILL.AUTO",
							276: "CUSTOMIZE.TOOLBAR",
							277: "ADD.TOOL",
							278: "EDIT.OBJECT",
							279: "ON.DOUBLECLICK",
							280: "ON.ENTRY",
							281: "WORKBOOK.ADD",
							282: "WORKBOOK.MOVE",
							283: "WORKBOOK.COPY",
							284: "WORKBOOK.OPTIONS",
							285: "SAVE.WORKSPACE",
							288: "CHART.WIZARD",
							289: "DELETE.TOOL",
							290: "MOVE.TOOL",
							291: "WORKBOOK.SELECT",
							292: "WORKBOOK.ACTIVATE",
							293: "ASSIGN.TO.TOOL",
							295: "COPY.TOOL",
							296: "RESET.TOOL",
							297: "CONSTRAIN.NUMERIC",
							298: "PASTE.TOOL",
							302: "WORKBOOK.NEW",
							305: "SCENARIO.CELLS",
							306: "SCENARIO.DELETE",
							307: "SCENARIO.ADD",
							308: "SCENARIO.EDIT",
							309: "SCENARIO.SHOW",
							310: "SCENARIO.SHOW.NEXT",
							311: "SCENARIO.SUMMARY",
							312: "PIVOT.TABLE.WIZARD",
							313: "PIVOT.FIELD.PROPERTIES",
							314: "PIVOT.FIELD",
							315: "PIVOT.ITEM",
							316: "PIVOT.ADD.FIELDS",
							318: "OPTIONS.CALCULATION",
							319: "OPTIONS.EDIT",
							320: "OPTIONS.VIEW",
							321: "ADDIN.MANAGER",
							322: "MENU.EDITOR",
							323: "ATTACH.TOOLBARS",
							324: "VBAActivate",
							325: "OPTIONS.CHART",
							328: "VBA.INSERT.FILE",
							330: "VBA.PROCEDURE.DEFINITION",
							336: "ROUTING.SLIP",
							338: "ROUTE.DOCUMENT",
							339: "MAIL.LOGON",
							342: "INSERT.PICTURE",
							343: "EDIT.TOOL",
							344: "GALLERY.DOUGHNUT",
							350: "CHART.TREND",
							352: "PIVOT.ITEM.PROPERTIES",
							354: "WORKBOOK.INSERT",
							355: "OPTIONS.TRANSITION",
							356: "OPTIONS.GENERAL",
							370: "FILTER.ADVANCED",
							373: "MAIL.ADD.MAILER",
							374: "MAIL.DELETE.MAILER",
							375: "MAIL.REPLY",
							376: "MAIL.REPLY.ALL",
							377: "MAIL.FORWARD",
							378: "MAIL.NEXT.LETTER",
							379: "DATA.LABEL",
							380: "INSERT.TITLE",
							381: "FONT.PROPERTIES",
							382: "MACRO.OPTIONS",
							383: "WORKBOOK.HIDE",
							384: "WORKBOOK.UNHIDE",
							385: "WORKBOOK.DELETE",
							386: "WORKBOOK.NAME",
							388: "GALLERY.CUSTOM",
							390: "ADD.CHART.AUTOFORMAT",
							391: "DELETE.CHART.AUTOFORMAT",
							392: "CHART.ADD.DATA",
							393: "AUTO.OUTLINE",
							394: "TAB.ORDER",
							395: "SHOW.DIALOG",
							396: "SELECT.ALL",
							397: "UNGROUP.SHEETS",
							398: "SUBTOTAL.CREATE",
							399: "SUBTOTAL.REMOVE",
							400: "RENAME.OBJECT",
							412: "WORKBOOK.SCROLL",
							413: "WORKBOOK.NEXT",
							414: "WORKBOOK.PREV",
							415: "WORKBOOK.TAB.SPLIT",
							416: "FULL.SCREEN",
							417: "WORKBOOK.PROTECT",
							420: "SCROLLBAR.PROPERTIES",
							421: "PIVOT.SHOW.PAGES",
							422: "TEXT.TO.COLUMNS",
							423: "FORMAT.CHARTTYPE",
							424: "LINK.FORMAT",
							425: "TRACER.DISPLAY",
							430: "TRACER.NAVIGATE",
							431: "TRACER.CLEAR",
							432: "TRACER.ERROR",
							433: "PIVOT.FIELD.GROUP",
							434: "PIVOT.FIELD.UNGROUP",
							435: "CHECKBOX.PROPERTIES",
							436: "LABEL.PROPERTIES",
							437: "LISTBOX.PROPERTIES",
							438: "EDITBOX.PROPERTIES",
							439: "PIVOT.REFRESH",
							440: "LINK.COMBO",
							441: "OPEN.TEXT",
							442: "HIDE.DIALOG",
							443: "SET.DIALOG.FOCUS",
							444: "ENABLE.OBJECT",
							445: "PUSHBUTTON.PROPERTIES",
							446: "SET.DIALOG.DEFAULT",
							447: "FILTER",
							448: "FILTER.SHOW.ALL",
							449: "CLEAR.OUTLINE",
							450: "FUNCTION.WIZARD",
							451: "ADD.LIST.ITEM",
							452: "SET.LIST.ITEM",
							453: "REMOVE.LIST.ITEM",
							454: "SELECT.LIST.ITEM",
							455: "SET.CONTROL.VALUE",
							456: "SAVE.COPY.AS",
							458: "OPTIONS.LISTS.ADD",
							459: "OPTIONS.LISTS.DELETE",
							460: "SERIES.AXES",
							461: "SERIES.X",
							462: "SERIES.Y",
							463: "ERRORBAR.X",
							464: "ERRORBAR.Y",
							465: "FORMAT.CHART",
							466: "SERIES.ORDER",
							467: "MAIL.LOGOFF",
							468: "CLEAR.ROUTING.SLIP",
							469: "APP.ACTIVATE.MICROSOFT",
							470: "MAIL.EDIT.MAILER",
							471: "ON.SHEET",
							472: "STANDARD.WIDTH",
							473: "SCENARIO.MERGE",
							474: "SUMMARY.INFO",
							475: "FIND.FILE",
							476: "ACTIVE.CELL.FONT",
							477: "ENABLE.TIPWIZARD",
							478: "VBA.MAKE.ADDIN",
							480: "INSERTDATATABLE",
							481: "WORKGROUP.OPTIONS",
							482: "MAIL.SEND.MAILER",
							485: "AUTOCORRECT",
							489: "POST.DOCUMENT",
							491: "PICKLIST",
							493: "VIEW.SHOW",
							494: "VIEW.DEFINE",
							495: "VIEW.DELETE",
							509: "SHEET.BACKGROUND",
							510: "INSERT.MAP.OBJECT",
							511: "OPTIONS.MENONO",
							517: "MSOCHECKS",
							518: "NORMAL",
							519: "LAYOUT",
							520: "RM.PRINT.AREA",
							521: "CLEAR.PRINT.AREA",
							522: "ADD.PRINT.AREA",
							523: "MOVE.BRK",
							545: "HIDECURR.NOTE",
							546: "HIDEALL.NOTES",
							547: "DELETE.NOTE",
							548: "TRAVERSE.NOTES",
							549: "ACTIVATE.NOTES",
							620: "PROTECT.REVISIONS",
							621: "UNPROTECT.REVISIONS",
							647: "OPTIONS.ME",
							653: "WEB.PUBLISH",
							667: "NEWWEBQUERY",
							673: "PIVOT.TABLE.CHART",
							753: "OPTIONS.SAVE",
							755: "OPTIONS.SPELL",
							808: "HIDEALL.INKANNOTS"
						},
						as = {
							0: "COUNT",
							1: "IF",
							2: "ISNA",
							3: "ISERROR",
							4: "SUM",
							5: "AVERAGE",
							6: "MIN",
							7: "MAX",
							8: "ROW",
							9: "COLUMN",
							10: "NA",
							11: "NPV",
							12: "STDEV",
							13: "DOLLAR",
							14: "FIXED",
							15: "SIN",
							16: "COS",
							17: "TAN",
							18: "ATAN",
							19: "PI",
							20: "SQRT",
							21: "EXP",
							22: "LN",
							23: "LOG10",
							24: "ABS",
							25: "INT",
							26: "SIGN",
							27: "ROUND",
							28: "LOOKUP",
							29: "INDEX",
							30: "REPT",
							31: "MID",
							32: "LEN",
							33: "VALUE",
							34: "TRUE",
							35: "FALSE",
							36: "AND",
							37: "OR",
							38: "NOT",
							39: "MOD",
							40: "DCOUNT",
							41: "DSUM",
							42: "DAVERAGE",
							43: "DMIN",
							44: "DMAX",
							45: "DSTDEV",
							46: "VAR",
							47: "DVAR",
							48: "TEXT",
							49: "LINEST",
							50: "TREND",
							51: "LOGEST",
							52: "GROWTH",
							53: "GOTO",
							54: "HALT",
							55: "RETURN",
							56: "PV",
							57: "FV",
							58: "NPER",
							59: "PMT",
							60: "RATE",
							61: "MIRR",
							62: "IRR",
							63: "RAND",
							64: "MATCH",
							65: "DATE",
							66: "TIME",
							67: "DAY",
							68: "MONTH",
							69: "YEAR",
							70: "WEEKDAY",
							71: "HOUR",
							72: "MINUTE",
							73: "SECOND",
							74: "NOW",
							75: "AREAS",
							76: "ROWS",
							77: "COLUMNS",
							78: "OFFSET",
							79: "ABSREF",
							80: "RELREF",
							81: "ARGUMENT",
							82: "SEARCH",
							83: "TRANSPOSE",
							84: "ERROR",
							85: "STEP",
							86: "TYPE",
							87: "ECHO",
							88: "SET.NAME",
							89: "CALLER",
							90: "DEREF",
							91: "WINDOWS",
							92: "SERIES",
							93: "DOCUMENTS",
							94: "ACTIVE.CELL",
							95: "SELECTION",
							96: "RESULT",
							97: "ATAN2",
							98: "ASIN",
							99: "ACOS",
							100: "CHOOSE",
							101: "HLOOKUP",
							102: "VLOOKUP",
							103: "LINKS",
							104: "INPUT",
							105: "ISREF",
							106: "GET.FORMULA",
							107: "GET.NAME",
							108: "SET.VALUE",
							109: "LOG",
							110: "EXEC",
							111: "CHAR",
							112: "LOWER",
							113: "UPPER",
							114: "PROPER",
							115: "LEFT",
							116: "RIGHT",
							117: "EXACT",
							118: "TRIM",
							119: "REPLACE",
							120: "SUBSTITUTE",
							121: "CODE",
							122: "NAMES",
							123: "DIRECTORY",
							124: "FIND",
							125: "CELL",
							126: "ISERR",
							127: "ISTEXT",
							128: "ISNUMBER",
							129: "ISBLANK",
							130: "T",
							131: "N",
							132: "FOPEN",
							133: "FCLOSE",
							134: "FSIZE",
							135: "FREADLN",
							136: "FREAD",
							137: "FWRITELN",
							138: "FWRITE",
							139: "FPOS",
							140: "DATEVALUE",
							141: "TIMEVALUE",
							142: "SLN",
							143: "SYD",
							144: "DDB",
							145: "GET.DEF",
							146: "REFTEXT",
							147: "TEXTREF",
							148: "INDIRECT",
							149: "REGISTER",
							150: "CALL",
							151: "ADD.BAR",
							152: "ADD.MENU",
							153: "ADD.COMMAND",
							154: "ENABLE.COMMAND",
							155: "CHECK.COMMAND",
							156: "RENAME.COMMAND",
							157: "SHOW.BAR",
							158: "DELETE.MENU",
							159: "DELETE.COMMAND",
							160: "GET.CHART.ITEM",
							161: "DIALOG.BOX",
							162: "CLEAN",
							163: "MDETERM",
							164: "MINVERSE",
							165: "MMULT",
							166: "FILES",
							167: "IPMT",
							168: "PPMT",
							169: "COUNTA",
							170: "CANCEL.KEY",
							171: "FOR",
							172: "WHILE",
							173: "BREAK",
							174: "NEXT",
							175: "INITIATE",
							176: "REQUEST",
							177: "POKE",
							178: "EXECUTE",
							179: "TERMINATE",
							180: "RESTART",
							181: "HELP",
							182: "GET.BAR",
							183: "PRODUCT",
							184: "FACT",
							185: "GET.CELL",
							186: "GET.WORKSPACE",
							187: "GET.WINDOW",
							188: "GET.DOCUMENT",
							189: "DPRODUCT",
							190: "ISNONTEXT",
							191: "GET.NOTE",
							192: "NOTE",
							193: "STDEVP",
							194: "VARP",
							195: "DSTDEVP",
							196: "DVARP",
							197: "TRUNC",
							198: "ISLOGICAL",
							199: "DCOUNTA",
							200: "DELETE.BAR",
							201: "UNREGISTER",
							204: "USDOLLAR",
							205: "FINDB",
							206: "SEARCHB",
							207: "REPLACEB",
							208: "LEFTB",
							209: "RIGHTB",
							210: "MIDB",
							211: "LENB",
							212: "ROUNDUP",
							213: "ROUNDDOWN",
							214: "ASC",
							215: "DBCS",
							216: "RANK",
							219: "ADDRESS",
							220: "DAYS360",
							221: "TODAY",
							222: "VDB",
							223: "ELSE",
							224: "ELSE.IF",
							225: "END.IF",
							226: "FOR.CELL",
							227: "MEDIAN",
							228: "SUMPRODUCT",
							229: "SINH",
							230: "COSH",
							231: "TANH",
							232: "ASINH",
							233: "ACOSH",
							234: "ATANH",
							235: "DGET",
							236: "CREATE.OBJECT",
							237: "VOLATILE",
							238: "LAST.ERROR",
							239: "CUSTOM.UNDO",
							240: "CUSTOM.REPEAT",
							241: "FORMULA.CONVERT",
							242: "GET.LINK.INFO",
							243: "TEXT.BOX",
							244: "INFO",
							245: "GROUP",
							246: "GET.OBJECT",
							247: "DB",
							248: "PAUSE",
							251: "RESUME",
							252: "FREQUENCY",
							253: "ADD.TOOLBAR",
							254: "DELETE.TOOLBAR",
							255: "User",
							256: "RESET.TOOLBAR",
							257: "EVALUATE",
							258: "GET.TOOLBAR",
							259: "GET.TOOL",
							260: "SPELLING.CHECK",
							261: "ERROR.TYPE",
							262: "APP.TITLE",
							263: "WINDOW.TITLE",
							264: "SAVE.TOOLBAR",
							265: "ENABLE.TOOL",
							266: "PRESS.TOOL",
							267: "REGISTER.ID",
							268: "GET.WORKBOOK",
							269: "AVEDEV",
							270: "BETADIST",
							271: "GAMMALN",
							272: "BETAINV",
							273: "BINOMDIST",
							274: "CHIDIST",
							275: "CHIINV",
							276: "COMBIN",
							277: "CONFIDENCE",
							278: "CRITBINOM",
							279: "EVEN",
							280: "EXPONDIST",
							281: "FDIST",
							282: "FINV",
							283: "FISHER",
							284: "FISHERINV",
							285: "FLOOR",
							286: "GAMMADIST",
							287: "GAMMAINV",
							288: "CEILING",
							289: "HYPGEOMDIST",
							290: "LOGNORMDIST",
							291: "LOGINV",
							292: "NEGBINOMDIST",
							293: "NORMDIST",
							294: "NORMSDIST",
							295: "NORMINV",
							296: "NORMSINV",
							297: "STANDARDIZE",
							298: "ODD",
							299: "PERMUT",
							300: "POISSON",
							301: "TDIST",
							302: "WEIBULL",
							303: "SUMXMY2",
							304: "SUMX2MY2",
							305: "SUMX2PY2",
							306: "CHITEST",
							307: "CORREL",
							308: "COVAR",
							309: "FORECAST",
							310: "FTEST",
							311: "INTERCEPT",
							312: "PEARSON",
							313: "RSQ",
							314: "STEYX",
							315: "SLOPE",
							316: "TTEST",
							317: "PROB",
							318: "DEVSQ",
							319: "GEOMEAN",
							320: "HARMEAN",
							321: "SUMSQ",
							322: "KURT",
							323: "SKEW",
							324: "ZTEST",
							325: "LARGE",
							326: "SMALL",
							327: "QUARTILE",
							328: "PERCENTILE",
							329: "PERCENTRANK",
							330: "MODE",
							331: "TRIMMEAN",
							332: "TINV",
							334: "MOVIE.COMMAND",
							335: "GET.MOVIE",
							336: "CONCATENATE",
							337: "POWER",
							338: "PIVOT.ADD.DATA",
							339: "GET.PIVOT.TABLE",
							340: "GET.PIVOT.FIELD",
							341: "GET.PIVOT.ITEM",
							342: "RADIANS",
							343: "DEGREES",
							344: "SUBTOTAL",
							345: "SUMIF",
							346: "COUNTIF",
							347: "COUNTBLANK",
							348: "SCENARIO.GET",
							349: "OPTIONS.LISTS.GET",
							350: "ISPMT",
							351: "DATEDIF",
							352: "DATESTRING",
							353: "NUMBERSTRING",
							354: "ROMAN",
							355: "OPEN.DIALOG",
							356: "SAVE.DIALOG",
							357: "VIEW.GET",
							358: "GETPIVOTDATA",
							359: "HYPERLINK",
							360: "PHONETIC",
							361: "AVERAGEA",
							362: "MAXA",
							363: "MINA",
							364: "STDEVPA",
							365: "VARPA",
							366: "STDEVA",
							367: "VARA",
							368: "BAHTTEXT",
							369: "THAIDAYOFWEEK",
							370: "THAIDIGIT",
							371: "THAIMONTHOFYEAR",
							372: "THAINUMSOUND",
							373: "THAINUMSTRING",
							374: "THAISTRINGLENGTH",
							375: "ISTHAIDIGIT",
							376: "ROUNDBAHTDOWN",
							377: "ROUNDBAHTUP",
							378: "THAIYEAR",
							379: "RTD",
							380: "CUBEVALUE",
							381: "CUBEMEMBER",
							382: "CUBEMEMBERPROPERTY",
							383: "CUBERANKEDMEMBER",
							384: "HEX2BIN",
							385: "HEX2DEC",
							386: "HEX2OCT",
							387: "DEC2BIN",
							388: "DEC2HEX",
							389: "DEC2OCT",
							390: "OCT2BIN",
							391: "OCT2HEX",
							392: "OCT2DEC",
							393: "BIN2DEC",
							394: "BIN2OCT",
							395: "BIN2HEX",
							396: "IMSUB",
							397: "IMDIV",
							398: "IMPOWER",
							399: "IMABS",
							400: "IMSQRT",
							401: "IMLN",
							402: "IMLOG2",
							403: "IMLOG10",
							404: "IMSIN",
							405: "IMCOS",
							406: "IMEXP",
							407: "IMARGUMENT",
							408: "IMCONJUGATE",
							409: "IMAGINARY",
							410: "IMREAL",
							411: "COMPLEX",
							412: "IMSUM",
							413: "IMPRODUCT",
							414: "SERIESSUM",
							415: "FACTDOUBLE",
							416: "SQRTPI",
							417: "QUOTIENT",
							418: "DELTA",
							419: "GESTEP",
							420: "ISEVEN",
							421: "ISODD",
							422: "MROUND",
							423: "ERF",
							424: "ERFC",
							425: "BESSELJ",
							426: "BESSELK",
							427: "BESSELY",
							428: "BESSELI",
							429: "XIRR",
							430: "XNPV",
							431: "PRICEMAT",
							432: "YIELDMAT",
							433: "INTRATE",
							434: "RECEIVED",
							435: "DISC",
							436: "PRICEDISC",
							437: "YIELDDISC",
							438: "TBILLEQ",
							439: "TBILLPRICE",
							440: "TBILLYIELD",
							441: "PRICE",
							442: "YIELD",
							443: "DOLLARDE",
							444: "DOLLARFR",
							445: "NOMINAL",
							446: "EFFECT",
							447: "CUMPRINC",
							448: "CUMIPMT",
							449: "EDATE",
							450: "EOMONTH",
							451: "YEARFRAC",
							452: "COUPDAYBS",
							453: "COUPDAYS",
							454: "COUPDAYSNC",
							455: "COUPNCD",
							456: "COUPNUM",
							457: "COUPPCD",
							458: "DURATION",
							459: "MDURATION",
							460: "ODDLPRICE",
							461: "ODDLYIELD",
							462: "ODDFPRICE",
							463: "ODDFYIELD",
							464: "RANDBETWEEN",
							465: "WEEKNUM",
							466: "AMORDEGRC",
							467: "AMORLINC",
							468: "CONVERT",
							724: "SHEETJS",
							469: "ACCRINT",
							470: "ACCRINTM",
							471: "WORKDAY",
							472: "NETWORKDAYS",
							473: "GCD",
							474: "MULTINOMIAL",
							475: "LCM",
							476: "FVSCHEDULE",
							477: "CUBEKPIMEMBER",
							478: "CUBESET",
							479: "CUBESETCOUNT",
							480: "IFERROR",
							481: "COUNTIFS",
							482: "SUMIFS",
							483: "AVERAGEIF",
							484: "AVERAGEIFS"
						},
						os = {
							2: 1,
							3: 1,
							10: 0,
							15: 1,
							16: 1,
							17: 1,
							18: 1,
							19: 0,
							20: 1,
							21: 1,
							22: 1,
							23: 1,
							24: 1,
							25: 1,
							26: 1,
							27: 2,
							30: 2,
							31: 3,
							32: 1,
							33: 1,
							34: 0,
							35: 0,
							38: 1,
							39: 2,
							40: 3,
							41: 3,
							42: 3,
							43: 3,
							44: 3,
							45: 3,
							47: 3,
							48: 2,
							53: 1,
							61: 3,
							63: 0,
							65: 3,
							66: 3,
							67: 1,
							68: 1,
							69: 1,
							70: 1,
							71: 1,
							72: 1,
							73: 1,
							74: 0,
							75: 1,
							76: 1,
							77: 1,
							79: 2,
							80: 2,
							83: 1,
							85: 0,
							86: 1,
							89: 0,
							90: 1,
							94: 0,
							95: 0,
							97: 2,
							98: 1,
							99: 1,
							101: 3,
							102: 3,
							105: 1,
							106: 1,
							108: 2,
							111: 1,
							112: 1,
							113: 1,
							114: 1,
							117: 2,
							118: 1,
							119: 4,
							121: 1,
							126: 1,
							127: 1,
							128: 1,
							129: 1,
							130: 1,
							131: 1,
							133: 1,
							134: 1,
							135: 1,
							136: 2,
							137: 2,
							138: 2,
							140: 1,
							141: 1,
							142: 3,
							143: 4,
							144: 4,
							161: 1,
							162: 1,
							163: 1,
							164: 1,
							165: 2,
							172: 1,
							175: 2,
							176: 2,
							177: 3,
							178: 2,
							179: 1,
							184: 1,
							186: 1,
							189: 3,
							190: 1,
							195: 3,
							196: 3,
							197: 1,
							198: 1,
							199: 3,
							201: 1,
							207: 4,
							210: 3,
							211: 1,
							212: 2,
							213: 2,
							214: 1,
							215: 1,
							225: 0,
							229: 1,
							230: 1,
							231: 1,
							232: 1,
							233: 1,
							234: 1,
							235: 3,
							244: 1,
							247: 4,
							252: 2,
							257: 1,
							261: 1,
							271: 1,
							273: 4,
							274: 2,
							275: 2,
							276: 2,
							277: 3,
							278: 3,
							279: 1,
							280: 3,
							281: 3,
							282: 3,
							283: 1,
							284: 1,
							285: 2,
							286: 4,
							287: 3,
							288: 2,
							289: 4,
							290: 3,
							291: 3,
							292: 3,
							293: 4,
							294: 1,
							295: 3,
							296: 1,
							297: 3,
							298: 1,
							299: 2,
							300: 3,
							301: 3,
							302: 4,
							303: 2,
							304: 2,
							305: 2,
							306: 2,
							307: 2,
							308: 2,
							309: 3,
							310: 2,
							311: 2,
							312: 2,
							313: 2,
							314: 2,
							315: 2,
							316: 4,
							325: 2,
							326: 2,
							327: 2,
							328: 2,
							331: 2,
							332: 2,
							337: 2,
							342: 1,
							343: 1,
							346: 2,
							347: 1,
							350: 4,
							351: 3,
							352: 1,
							353: 2,
							360: 1,
							368: 1,
							369: 1,
							370: 1,
							371: 1,
							372: 1,
							373: 1,
							374: 1,
							375: 1,
							376: 1,
							377: 1,
							378: 1,
							382: 3,
							385: 1,
							392: 1,
							393: 1,
							396: 2,
							397: 2,
							398: 2,
							399: 1,
							400: 1,
							401: 1,
							402: 1,
							403: 1,
							404: 1,
							405: 1,
							406: 1,
							407: 1,
							408: 1,
							409: 1,
							410: 1,
							414: 4,
							415: 1,
							416: 1,
							417: 2,
							420: 1,
							421: 1,
							422: 2,
							424: 1,
							425: 2,
							426: 2,
							427: 2,
							428: 2,
							430: 3,
							438: 3,
							439: 3,
							440: 3,
							443: 2,
							444: 2,
							445: 2,
							446: 2,
							447: 6,
							448: 6,
							449: 2,
							450: 2,
							464: 2,
							468: 3,
							476: 2,
							479: 1,
							480: 2,
							65535: 0
						},
						ss = {
							"_xlfn.ACOT": "ACOT",
							"_xlfn.ACOTH": "ACOTH",
							"_xlfn.AGGREGATE": "AGGREGATE",
							"_xlfn.ARABIC": "ARABIC",
							"_xlfn.AVERAGEIF": "AVERAGEIF",
							"_xlfn.AVERAGEIFS": "AVERAGEIFS",
							"_xlfn.BASE": "BASE",
							"_xlfn.BETA.DIST": "BETA.DIST",
							"_xlfn.BETA.INV": "BETA.INV",
							"_xlfn.BINOM.DIST": "BINOM.DIST",
							"_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
							"_xlfn.BINOM.INV": "BINOM.INV",
							"_xlfn.BITAND": "BITAND",
							"_xlfn.BITLSHIFT": "BITLSHIFT",
							"_xlfn.BITOR": "BITOR",
							"_xlfn.BITRSHIFT": "BITRSHIFT",
							"_xlfn.BITXOR": "BITXOR",
							"_xlfn.CEILING.MATH": "CEILING.MATH",
							"_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
							"_xlfn.CHISQ.DIST": "CHISQ.DIST",
							"_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
							"_xlfn.CHISQ.INV": "CHISQ.INV",
							"_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
							"_xlfn.CHISQ.TEST": "CHISQ.TEST",
							"_xlfn.COMBINA": "COMBINA",
							"_xlfn.CONCAT": "CONCAT",
							"_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
							"_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
							"_xlfn.COT": "COT",
							"_xlfn.COTH": "COTH",
							"_xlfn.COUNTIFS": "COUNTIFS",
							"_xlfn.COVARIANCE.P": "COVARIANCE.P",
							"_xlfn.COVARIANCE.S": "COVARIANCE.S",
							"_xlfn.CSC": "CSC",
							"_xlfn.CSCH": "CSCH",
							"_xlfn.DAYS": "DAYS",
							"_xlfn.DECIMAL": "DECIMAL",
							"_xlfn.ECMA.CEILING": "ECMA.CEILING",
							"_xlfn.ERF.PRECISE": "ERF.PRECISE",
							"_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
							"_xlfn.EXPON.DIST": "EXPON.DIST",
							"_xlfn.F.DIST": "F.DIST",
							"_xlfn.F.DIST.RT": "F.DIST.RT",
							"_xlfn.F.INV": "F.INV",
							"_xlfn.F.INV.RT": "F.INV.RT",
							"_xlfn.F.TEST": "F.TEST",
							"_xlfn.FILTERXML": "FILTERXML",
							"_xlfn.FLOOR.MATH": "FLOOR.MATH",
							"_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
							"_xlfn.FORECAST.ETS": "FORECAST.ETS",
							"_xlfn.FORECAST.ETS.CONFINT": "FORECAST.ETS.CONFINT",
							"_xlfn.FORECAST.ETS.SEASONALITY": "FORECAST.ETS.SEASONALITY",
							"_xlfn.FORECAST.ETS.STAT": "FORECAST.ETS.STAT",
							"_xlfn.FORECAST.LINEAR": "FORECAST.LINEAR",
							"_xlfn.FORMULATEXT": "FORMULATEXT",
							"_xlfn.GAMMA": "GAMMA",
							"_xlfn.GAMMA.DIST": "GAMMA.DIST",
							"_xlfn.GAMMA.INV": "GAMMA.INV",
							"_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
							"_xlfn.GAUSS": "GAUSS",
							"_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
							"_xlfn.IFERROR": "IFERROR",
							"_xlfn.IFNA": "IFNA",
							"_xlfn.IFS": "IFS",
							"_xlfn.IMCOSH": "IMCOSH",
							"_xlfn.IMCOT": "IMCOT",
							"_xlfn.IMCSC": "IMCSC",
							"_xlfn.IMCSCH": "IMCSCH",
							"_xlfn.IMSEC": "IMSEC",
							"_xlfn.IMSECH": "IMSECH",
							"_xlfn.IMSINH": "IMSINH",
							"_xlfn.IMTAN": "IMTAN",
							"_xlfn.ISFORMULA": "ISFORMULA",
							"_xlfn.ISO.CEILING": "ISO.CEILING",
							"_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
							"_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
							"_xlfn.LOGNORM.INV": "LOGNORM.INV",
							"_xlfn.MAXIFS": "MAXIFS",
							"_xlfn.MINIFS": "MINIFS",
							"_xlfn.MODE.MULT": "MODE.MULT",
							"_xlfn.MODE.SNGL": "MODE.SNGL",
							"_xlfn.MUNIT": "MUNIT",
							"_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
							"_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
							"_xlfn.NIGBINOM": "NIGBINOM",
							"_xlfn.NORM.DIST": "NORM.DIST",
							"_xlfn.NORM.INV": "NORM.INV",
							"_xlfn.NORM.S.DIST": "NORM.S.DIST",
							"_xlfn.NORM.S.INV": "NORM.S.INV",
							"_xlfn.NUMBERVALUE": "NUMBERVALUE",
							"_xlfn.PDURATION": "PDURATION",
							"_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
							"_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
							"_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
							"_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
							"_xlfn.PERMUTATIONA": "PERMUTATIONA",
							"_xlfn.PHI": "PHI",
							"_xlfn.POISSON.DIST": "POISSON.DIST",
							"_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
							"_xlfn.QUARTILE.INC": "QUARTILE.INC",
							"_xlfn.QUERYSTRING": "QUERYSTRING",
							"_xlfn.RANK.AVG": "RANK.AVG",
							"_xlfn.RANK.EQ": "RANK.EQ",
							"_xlfn.RRI": "RRI",
							"_xlfn.SEC": "SEC",
							"_xlfn.SECH": "SECH",
							"_xlfn.SHEET": "SHEET",
							"_xlfn.SHEETS": "SHEETS",
							"_xlfn.SKEW.P": "SKEW.P",
							"_xlfn.STDEV.P": "STDEV.P",
							"_xlfn.STDEV.S": "STDEV.S",
							"_xlfn.SUMIFS": "SUMIFS",
							"_xlfn.SWITCH": "SWITCH",
							"_xlfn.T.DIST": "T.DIST",
							"_xlfn.T.DIST.2T": "T.DIST.2T",
							"_xlfn.T.DIST.RT": "T.DIST.RT",
							"_xlfn.T.INV": "T.INV",
							"_xlfn.T.INV.2T": "T.INV.2T",
							"_xlfn.T.TEST": "T.TEST",
							"_xlfn.TEXTJOIN": "TEXTJOIN",
							"_xlfn.UNICHAR": "UNICHAR",
							"_xlfn.UNICODE": "UNICODE",
							"_xlfn.VAR.P": "VAR.P",
							"_xlfn.VAR.S": "VAR.S",
							"_xlfn.WEBSERVICE": "WEBSERVICE",
							"_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
							"_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
							"_xlfn.XOR": "XOR",
							"_xlfn.Z.TEST": "Z.TEST"
						};

					function us(e) {
						return "of:" == e.slice(0, 3) && (e = e.slice(3)), 61 == e.charCodeAt(0) && (61 == (e = e.slice(1)).charCodeAt(0) && (e = e.slice(1))), (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, (function(e, t) {
							return t.replace(/\./g, "")
						}))).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";")
					}

					function cs(e) {
						return ("of:=" + e.replace(co, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";")
					}

					function ls(e) {
						var t = e.split(":");
						return [t[0].split(".")[0], t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")]
					}

					function fs(e) {
						return e.replace(/\./, "!")
					}
					var ds = {},
						hs = {};
					qn.WS = ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"];
					var ps = "undefined" != typeof Map;

					function _s(e, t, n) {
						var r = 0,
							i = e.length;
						if (n) {
							if (ps ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t))
								for (var a = ps ? n.get(t) : n[t]; r < a.length; ++r)
									if (e[a[r]].t === t) return e.Count++, a[r]
						} else
							for (; r < i; ++r)
								if (e[r].t === t) return e.Count++, r;
						return e[i] = {
							t: t
						}, e.Count++, e.Unique++, n && (ps ? (n.has(t) || n.set(t, []), n.get(t).push(i)) : (Object.prototype.hasOwnProperty.call(n, t) || (n[t] = []), n[t].push(i))), i
					}

					function ms(e, t) {
						var n = {
								min: e + 1,
								max: e + 1
							},
							r = -1;
						return t.MDW && (_a = t.MDW), null != t.width ? n.customWidth = 1 : null != t.wpx ? r = ba(t.wpx) : null != t.wch && (r = t.wch), r > -1 ? (n.width = ga(r), n.customWidth = 1) : null != t.width && (n.width = t.width), t.hidden && (n.hidden = !0), n
					}

					function bs(e, t) {
						if (e) {
							var n = [.7, .7, .75, .75, .3, .3];
							"xlml" == t && (n = [1, 1, 1, 1, .5, .5]), null == e.left && (e.left = n[0]), null == e.right && (e.right = n[1]), null == e.top && (e.top = n[2]), null == e.bottom && (e.bottom = n[3]), null == e.header && (e.header = n[4]), null == e.footer && (e.footer = n[5])
						}
					}

					function gs(e, t, n) {
						var r = n.revssf[null != t.z ? t.z : "General"],
							i = 60,
							a = e.length;
						if (null == r && n.ssf)
							for (; i < 392; ++i)
								if (null == n.ssf[i]) {
									M.load(t.z, i), n.ssf[i] = t.z, n.revssf[t.z] = r = i;
									break
								} for (i = 0; i != a; ++i)
							if (e[i].numFmtId === r) return i;
						return e[a] = {
							numFmtId: r,
							fontId: 0,
							fillId: 0,
							borderId: 0,
							xfId: 0,
							applyNumberFormat: 1
						}, a
					}

					function vs(e, t, n, r, i, a) {
						try {
							r.cellNF && (e.z = M._table[t])
						} catch (e) {
							if (r.WTF) throw e
						}
						if ("z" !== e.t) {
							if ("d" === e.t && "string" == typeof e.v && (e.v = te(e.v)), !r || !1 !== r.cellText) try {
								if (null == M._table[t] && M.load(B[t] || "General", t), "e" === e.t) e.w = e.w || jn[e.v];
								else if (0 === t)
									if ("n" === e.t)(0 | e.v) === e.v ? e.w = M._general_int(e.v) : e.w = M._general_num(e.v);
									else if ("d" === e.t) {
									var o = G(e.v);
									e.w = (0 | o) === o ? M._general_int(o) : M._general_num(o)
								} else {
									if (void 0 === e.v) return "";
									e.w = M._general(e.v, hs)
								} else "d" === e.t ? e.w = M.format(t, G(e.v), hs) : e.w = M.format(t, e.v, hs)
							} catch (e) {
								if (r.WTF) throw e
							}
							if (r.cellStyles && null != n) try {
								e.s = a.Fills[n], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = pa(i.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), r.WTF && (e.s.fgColor.raw_rgb = i.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = pa(i.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), r.WTF && (e.s.bgColor.raw_rgb = i.themeElements.clrScheme[e.s.bgColor.theme].rgb))
							} catch (e) {
								if (r.WTF && a.Fills) throw e
							}
						}
					}

					function ys(e, t, n) {
						if (e && e["!ref"]) {
							var r = nn(e["!ref"]);
							if (r.e.c < r.s.c || r.e.r < r.s.r) throw new Error("Bad range (" + n + "): " + e["!ref"])
						}
					}
					var As = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
						Ss = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
						ws = /<(?:\w:)?hyperlink [^>]*>/gm,
						Es = /"(\w*:\w*)"/,
						Ts = /<(?:\w:)?col\b[^>]*[\/]?>/g,
						Cs = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
						$s = /<(?:\w:)?pageMargins[^>]*\/>/g,
						ks = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
						Os = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;

					function xs(e, t, n, r, i, a, o) {
						if (!e) return e;
						r || (r = {
							"!id": {}
						});
						var s = t.dense ? [] : {},
							u = {
								s: {
									r: 2e6,
									c: 2e6
								},
								e: {
									r: 0,
									c: 0
								}
							},
							c = "",
							l = "",
							f = e.match(Ss);
						f ? (c = e.slice(0, f.index), l = e.slice(f.index + f[0].length)) : c = l = e;
						var d = c.match(ks);
						d && Ps(d[0], s, i, n);
						var h = (c.match(/<(?:\w*:)?dimension/) || {
							index: -1
						}).index;
						if (h > 0) {
							var p = c.slice(h, h + 50).match(Es);
							p && function(e, t) {
								var n = nn(t);
								n.s.r <= n.e.r && n.s.c <= n.e.c && n.s.r >= 0 && n.s.c >= 0 && (e["!ref"] = tn(n))
							}(s, p[1])
						}
						var _ = c.match(Os);
						_ && _[1] && function(e, t) {
							t.Views || (t.Views = [{}]), (e.match(Ls) || []).forEach((function(e, n) {
								var r = we(e);
								t.Views[n] || (t.Views[n] = {}), +r.zoomScale && (t.Views[n].zoom = +r.zoomScale), Be(r.rightToLeft) && (t.Views[n].RTL = !0)
							}))
						}(_[1], i);
						var m = [];
						if (t.cellStyles) {
							var b = c.match(Ts);
							b && function(e, t) {
								for (var n = !1, r = 0; r != t.length; ++r) {
									var i = we(t[r], !0);
									i.hidden && (i.hidden = Be(i.hidden));
									var a = parseInt(i.min, 10) - 1,
										o = parseInt(i.max, 10) - 1;
									for (delete i.min, delete i.max, i.width = +i.width, !n && i.width && (n = !0, ya(i.width)), Aa(i); a <= o;) e[a++] = re(i)
								}
							}(m, b)
						}
						f && Bs(f[1], s, t, u, a, o);
						var g = l.match(Cs);
						g && (s["!autofilter"] = function(e) {
							return {
								ref: (e.match(/ref="([^"]*)"/) || [])[1]
							}
						}(g[0]));
						var v = [],
							y = l.match(As);
						if (y)
							for (h = 0; h != y.length; ++h) v[h] = nn(y[h].slice(y[h].indexOf('"') + 1));
						var A = l.match(ws);
						A && function(e, t, n) {
							for (var r = Array.isArray(e), i = 0; i != t.length; ++i) {
								var a = we(Ne(t[i]), !0);
								if (!a.ref) return;
								var o = ((n || {})["!id"] || [])[a.id];
								o ? (a.Target = o.Target, a.location && (a.Target += "#" + a.location)) : (a.Target = "#" + a.location, o = {
									Target: a.Target,
									TargetMode: "Internal"
								}), a.Rel = o, a.tooltip && (a.Tooltip = a.tooltip, delete a.tooltip);
								for (var s = nn(a.ref), u = s.s.r; u <= s.e.r; ++u)
									for (var c = s.s.c; c <= s.e.c; ++c) {
										var l = Zt({
											c: c,
											r: u
										});
										r ? (e[u] || (e[u] = []), e[u][c] || (e[u][c] = {
											t: "z",
											v: void 0
										}), e[u][c].l = a) : (e[l] || (e[l] = {
											t: "z",
											v: void 0
										}), e[l].l = a)
									}
							}
						}(s, A, r);
						var S = l.match($s);
						if (S && (s["!margins"] = function(e) {
								var t = {};
								return ["left", "right", "top", "bottom", "header", "footer"].forEach((function(n) {
									e[n] && (t[n] = parseFloat(e[n]))
								})), t
							}(we(S[0]))), !s["!ref"] && u.e.c >= u.s.c && u.e.r >= u.s.r && (s["!ref"] = tn(u)), t.sheetRows > 0 && s["!ref"]) {
							var w = nn(s["!ref"]);
							t.sheetRows <= +w.e.r && (w.e.r = t.sheetRows - 1, w.e.r > u.e.r && (w.e.r = u.e.r), w.e.r < w.s.r && (w.s.r = w.e.r), w.e.c > u.e.c && (w.e.c = u.e.c), w.e.c < w.s.c && (w.s.c = w.e.c), s["!fullref"] = s["!ref"], s["!ref"] = tn(w))
						}
						return m.length > 0 && (s["!cols"] = m), v.length > 0 && (s["!merges"] = v), s
					}

					function Ps(e, t, n, r) {
						var i = we(e);
						n.Sheets[r] || (n.Sheets[r] = {}), i.codeName && (n.Sheets[r].CodeName = $e(Ne(i.codeName)))
					}
					var Ms = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"],
						Is = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"],
						Ls = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;

					function Ds(e, t, n, r) {
						if (void 0 === e.v && "string" != typeof e.f || "z" === e.t) return "";
						var i = "",
							a = e.t,
							o = e.v;
						if ("z" !== e.t) switch (e.t) {
							case "b":
								i = e.v ? "1" : "0";
								break;
							case "n":
								i = "" + e.v;
								break;
							case "e":
								i = jn[e.v];
								break;
							case "d":
								r && r.cellDates ? i = te(e.v, -1).toISOString() : ((e = re(e)).t = "n", i = "" + (e.v = G(te(e.v)))), void 0 === e.z && (e.z = M._table[14]);
								break;
							default:
								i = e.v
						}
						var s = We("v", xe(i)),
							u = {
								r: t
							},
							c = gs(r.cellXfs, e, r);
						switch (0 !== c && (u.s = c), e.t) {
							case "n":
								break;
							case "d":
								u.t = "d";
								break;
							case "b":
								u.t = "b";
								break;
							case "e":
								u.t = "e";
								break;
							case "z":
								break;
							default:
								if (null == e.v) {
									delete e.t;
									break
								}
								if (r && r.bookSST) {
									s = We("v", "" + _s(r.Strings, e.v, r.revStrings)), u.t = "s";
									break
								}
								u.t = "str"
						}
						if (e.t != a && (e.t = a, e.v = o), "string" == typeof e.f && e.f) {
							var l = e.F && e.F.slice(0, t.length) == t ? {
								t: "array",
								ref: e.F
							} : null;
							s = Xe("f", xe(e.f), l) + (null != e.v ? s : "")
						}
						return e.l && n["!links"].push([t, e.l]), e.c && n["!comments"].push([t, e.c]), Xe("c", s, u)
					}
					var Bs = function() {
							var e = /<(?:\w+:)?c[ \/>]/,
								t = /<\/(?:\w+:)?row>/,
								n = /r=["']([^"']*)["']/,
								r = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,
								i = /ref=["']([^"']*)["']/,
								a = He("v"),
								o = He("f");
							return function(s, u, c, l, f, d) {
								for (var h, p, _, m, b, g = 0, v = "", y = [], A = [], S = 0, w = 0, E = 0, T = "", C = 0, $ = 0, k = 0, O = 0, x = Array.isArray(d.CellXf), P = [], I = [], L = Array.isArray(u), D = [], B = {}, N = !1, R = !!c.sheetStubs, F = s.split(t), U = 0, j = F.length; U != j; ++U) {
									var H = (v = F[U].trim()).length;
									if (0 !== H) {
										for (g = 0; g < H && 62 !== v.charCodeAt(g); ++g);
										if (++g, C = null != (p = we(v.slice(0, g), !0)).r ? parseInt(p.r, 10) : C + 1, $ = -1, !(c.sheetRows && c.sheetRows < C)) {
											l.s.r > C - 1 && (l.s.r = C - 1), l.e.r < C - 1 && (l.e.r = C - 1), c && c.cellStyles && (B = {}, N = !1, p.ht && (N = !0, B.hpt = parseFloat(p.ht), B.hpx = wa(B.hpt)), "1" == p.hidden && (N = !0, B.hidden = !0), null != p.outlineLevel && (N = !0, B.level = +p.outlineLevel), N && (D[C - 1] = B)), y = v.slice(g).split(e);
											for (var Y = 0; Y != y.length && "<" == y[Y].trim().charAt(0); ++Y);
											for (y = y.slice(Y), g = 0; g != y.length; ++g)
												if (0 !== (v = y[g].trim()).length) {
													if (A = v.match(n), S = g, w = 0, E = 0, v = "<c " + ("<" == v.slice(0, 1) ? ">" : "") + v, null != A && 2 === A.length) {
														for (S = 0, T = A[1], w = 0; w != T.length && !((E = T.charCodeAt(w) - 64) < 1 || E > 26); ++w) S = 26 * S + E;
														$ = --S
													} else ++$;
													for (w = 0; w != v.length && 62 !== v.charCodeAt(w); ++w);
													if (++w, (p = we(v.slice(0, w), !0)).r || (p.r = Zt({
															r: C - 1,
															c: $
														})), h = {
															t: ""
														}, null != (A = (T = v.slice(w)).match(a)) && "" !== A[1] && (h.v = $e(A[1])), c.cellFormula) {
														if (null != (A = T.match(o)) && "" !== A[1]) {
															if (h.f = $e(Ne(A[1])).replace(/\r\n/g, "\n"), c.xlfn || (h.f = ho(h.f)), A[0].indexOf('t="array"') > -1) h.F = (T.match(i) || [])[1], h.F.indexOf(":") > -1 && P.push([nn(h.F), h.F]);
															else if (A[0].indexOf('t="shared"') > -1) {
																m = we(A[0]);
																var V = $e(Ne(A[1]));
																c.xlfn || (V = ho(V)), I[parseInt(m.si, 10)] = [m, V, p.r]
															}
														} else(A = T.match(/<f[^>]*\/>/)) && (I[(m = we(A[0])).si] && (h.f = fo(I[m.si][1], I[m.si][2], p.r)));
														var z = Jt(p.r);
														for (w = 0; w < P.length; ++w) z.r >= P[w][0].s.r && z.r <= P[w][0].e.r && z.c >= P[w][0].s.c && z.c <= P[w][0].e.c && (h.F = P[w][1])
													}
													if (null == p.t && void 0 === h.v)
														if (h.f || h.F) h.v = 0, h.t = "n";
														else {
															if (!R) continue;
															h.t = "z"
														}
													else h.t = p.t || "n";
													switch (l.s.c > $ && (l.s.c = $), l.e.c < $ && (l.e.c = $), h.t) {
														case "n":
															if ("" == h.v || null == h.v) {
																if (!R) continue;
																h.t = "z"
															} else h.v = parseFloat(h.v);
															break;
														case "s":
															if (void 0 === h.v) {
																if (!R) continue;
																h.t = "z"
															} else _ = ds[parseInt(h.v, 10)], h.v = _.t, h.r = _.r, c.cellHTML && (h.h = _.h);
															break;
														case "str":
															h.t = "s", h.v = null != h.v ? Ne(h.v) : "", c.cellHTML && (h.h = Ie(h.v));
															break;
														case "inlineStr":
															A = T.match(r), h.t = "s", null != A && (_ = zi(A[1])) ? (h.v = _.t, c.cellHTML && (h.h = _.h)) : h.v = "";
															break;
														case "b":
															h.v = Be(h.v);
															break;
														case "d":
															c.cellDates ? h.v = te(h.v, 1) : (h.v = G(te(h.v, 1)), h.t = "n");
															break;
														case "e":
															c && !1 === c.cellText || (h.w = h.v), h.v = Hn[h.v]
													}
													if (k = O = 0, b = null, x && void 0 !== p.s && (null != (b = d.CellXf[p.s]) && (null != b.numFmtId && (k = b.numFmtId), c.cellStyles && null != b.fillId && (O = b.fillId))), vs(h, k, O, c, f, d), c.cellDates && x && "n" == h.t && M.is_date(M._table[k]) && (h.t = "d", h.v = X(h.v)), L) {
														var Q = Jt(p.r);
														u[Q.r] || (u[Q.r] = []), u[Q.r][Q.c] = h
													} else u[p.r] = h
												}
										}
									}
								}
								D.length > 0 && (u["!rows"] = D)
							}
						}(),
						Ns = Xe("worksheet", null, {
							xmlns: tt.main[0],
							"xmlns:r": tt.r
						});

					function Rs(e, t, n, r) {
						var i, a = [ge, Ns],
							o = n.SheetNames[e],
							s = "",
							u = n.Sheets[o];
						null == u && (u = {});
						var c = u["!ref"] || "A1",
							l = nn(c);
						if (l.e.c > 16383 || l.e.r > 1048575) {
							if (t.WTF) throw new Error("Range " + c + " exceeds format limit A1:XFD1048576");
							l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575), c = tn(l)
						}
						r || (r = {}), u["!comments"] = [];
						var f = [];
						(function(e, t, n, r, i) {
							var a = !1,
								o = {},
								s = null;
							if ("xlsx" !== r.bookType && t.vbaraw) {
								var u = t.SheetNames[n];
								try {
									t.Workbook && (u = t.Workbook.Sheets[n].CodeName || u)
								} catch (e) {}
								a = !0, o.codeName = Re(xe(u))
							}
							if (e && e["!outline"]) {
								var c = {
									summaryBelow: 1,
									summaryRight: 1
								};
								e["!outline"].above && (c.summaryBelow = 0), e["!outline"].left && (c.summaryRight = 0), s = (s || "") + Xe("outlinePr", null, c)
							}(a || s) && (i[i.length] = Xe("sheetPr", s, o))
						})(u, n, e, t, a), a[a.length] = Xe("dimension", null, {
							ref: c
						}), a[a.length] = function(e, t, n, r) {
							var i = {
								workbookViewId: "0"
							};
							return (((r || {}).Workbook || {}).Views || [])[0] && (i.rightToLeft = r.Workbook.Views[0].RTL ? "1" : "0"), Xe("sheetViews", Xe("sheetView", null, i), {})
						}(0, 0, 0, n), t.sheetFormat && (a[a.length] = Xe("sheetFormatPr", null, {
							defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
							baseColWidth: t.sheetFormat.baseColWidth || "10",
							outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
						})), null != u["!cols"] && u["!cols"].length > 0 && (a[a.length] = function(e, t) {
							for (var n, r = ["<cols>"], i = 0; i != t.length; ++i)(n = t[i]) && (r[r.length] = Xe("col", null, ms(i, n)));
							return r[r.length] = "</cols>", r.join("")
						}(0, u["!cols"])), a[i = a.length] = "<sheetData/>", u["!links"] = [], null != u["!ref"] && ((s = function(e, t, n, r) {
							var i, a, o = [],
								s = [],
								u = nn(e["!ref"]),
								c = "",
								l = "",
								f = [],
								d = 0,
								h = 0,
								p = e["!rows"],
								_ = Array.isArray(e),
								m = {
									r: l
								},
								b = -1;
							for (h = u.s.c; h <= u.e.c; ++h) f[h] = Xt(h);
							for (d = u.s.r; d <= u.e.r; ++d) {
								for (s = [], l = Wt(d), h = u.s.c; h <= u.e.c; ++h) {
									i = f[h] + l;
									var g = _ ? (e[d] || [])[h] : e[i];
									void 0 !== g && null != (c = Ds(g, i, e, t)) && s.push(c)
								}(s.length > 0 || p && p[d]) && (m = {
									r: l
								}, p && p[d] && ((a = p[d]).hidden && (m.hidden = 1), b = -1, a.hpx ? b = Sa(a.hpx) : a.hpt && (b = a.hpt), b > -1 && (m.ht = b, m.customHeight = 1), a.level && (m.outlineLevel = a.level)), o[o.length] = Xe("row", s.join(""), m))
							}
							if (p)
								for (; d < p.length; ++d) p && p[d] && (m = {
									r: d + 1
								}, (a = p[d]).hidden && (m.hidden = 1), b = -1, a.hpx ? b = Sa(a.hpx) : a.hpt && (b = a.hpt), b > -1 && (m.ht = b, m.customHeight = 1), a.level && (m.outlineLevel = a.level), o[o.length] = Xe("row", "", m));
							return o.join("")
						}(u, t, 0, 0)).length > 0 && (a[a.length] = s)), a.length > i + 1 && (a[a.length] = "</sheetData>", a[i] = a[i].replace("/>", ">")), null != u["!protect"] && (a[a.length] = function(e) {
							var t = {
								sheet: 1
							};
							return Ms.forEach((function(n) {
								null != e[n] && e[n] && (t[n] = "1")
							})), Is.forEach((function(n) {
								null == e[n] || e[n] || (t[n] = "0")
							})), e.password && (t.password = ua(e.password).toString(16).toUpperCase()), Xe("sheetProtection", null, t)
						}(u["!protect"])), null != u["!autofilter"] && (a[a.length] = function(e, t, n, r) {
							var i = "string" == typeof e.ref ? e.ref : tn(e.ref);
							n.Workbook || (n.Workbook = {
								Sheets: []
							}), n.Workbook.Names || (n.Workbook.Names = []);
							var a = n.Workbook.Names,
								o = en(i);
							o.s.r == o.e.r && (o.e.r = en(t["!ref"]).e.r, i = tn(o));
							for (var s = 0; s < a.length; ++s) {
								var u = a[s];
								if ("_xlnm._FilterDatabase" == u.Name && u.Sheet == r) {
									u.Ref = "'" + n.SheetNames[r] + "'!" + i;
									break
								}
							}
							return s == a.length && a.push({
								Name: "_xlnm._FilterDatabase",
								Sheet: r,
								Ref: "'" + n.SheetNames[r] + "'!" + i
							}), Xe("autoFilter", null, {
								ref: i
							})
						}(u["!autofilter"], u, n, e)), null != u["!merges"] && u["!merges"].length > 0 && (a[a.length] = function(e) {
							if (0 === e.length) return "";
							for (var t = '<mergeCells count="' + e.length + '">', n = 0; n != e.length; ++n) t += '<mergeCell ref="' + tn(e[n]) + '"/>';
							return t + "</mergeCells>"
						}(u["!merges"]));
						var d, h = -1,
							p = -1;
						return u["!links"].length > 0 && (a[a.length] = "<hyperlinks>", u["!links"].forEach((function(e) {
							e[1].Target && (d = {
								ref: e[0]
							}, "#" != e[1].Target.charAt(0) && (p = er(r, -1, xe(e[1].Target).replace(/#.*$/, ""), qn.HLINK), d["r:id"] = "rId" + p), (h = e[1].Target.indexOf("#")) > -1 && (d.location = xe(e[1].Target.slice(h + 1))), e[1].Tooltip && (d.tooltip = xe(e[1].Tooltip)), a[a.length] = Xe("hyperlink", null, d))
						})), a[a.length] = "</hyperlinks>"), delete u["!links"], null != u["!margins"] && (a[a.length] = function(e) {
							return bs(e), Xe("pageMargins", null, e)
						}(u["!margins"])), t && !t.ignoreEC && null != t.ignoreEC || (a[a.length] = We("ignoredErrors", Xe("ignoredError", null, {
							numberStoredAsText: 1,
							sqref: c
						}))), f.length > 0 && (p = er(r, -1, "../drawings/drawing" + (e + 1) + ".xml", qn.DRAW), a[a.length] = Xe("drawing", null, {
							"r:id": "rId" + p
						}), u["!drawing"] = f), u["!comments"].length > 0 && (p = er(r, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", qn.VML), a[a.length] = Xe("legacyDrawing", null, {
							"r:id": "rId" + p
						}), u["!legacy"] = p), a.length > 1 && (a[a.length] = "</worksheet>", a[1] = a[1].replace("/>", ">")), a.join("")
					}

					function Fs(e, t, n, r) {
						var i = function(e, t, n) {
							var r = Ut(145),
								i = (n["!rows"] || [])[e] || {};
							r.write_shift(4, e), r.write_shift(4, 0);
							var a = 320;
							i.hpx ? a = 20 * Sa(i.hpx) : i.hpt && (a = 20 * i.hpt), r.write_shift(2, a), r.write_shift(1, 0);
							var o = 0;
							i.level && (o |= i.level), i.hidden && (o |= 16), (i.hpx || i.hpt) && (o |= 32), r.write_shift(1, o), r.write_shift(1, 0);
							var s = 0,
								u = r.l;
							r.l += 4;
							for (var c = {
									r: e,
									c: 0
								}, l = 0; l < 16; ++l)
								if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
									for (var f = -1, d = -1, h = l << 10; h < l + 1 << 10; ++h) {
										c.c = h, (Array.isArray(n) ? (n[c.r] || [])[c.c] : n[Zt(c)]) && (f < 0 && (f = h), d = h)
									}
									f < 0 || (++s, r.write_shift(4, f), r.write_shift(4, d))
								} var p = r.l;
							return r.l = u, r.write_shift(4, s), r.l = p, r.length > r.l ? r.slice(0, r.l) : r
						}(r, n, t);
						(i.length > 17 || (t["!rows"] || [])[r]) && Yt(e, "BrtRowHdr", i)
					}
					var Us = Cn,
						js = $n;

					function Hs(e, t, n) {
						return null == n && (n = Ut(12)), mn(t, n),
							function(e, t) {
								null == t && (t = Ut(4));
								var n = 0,
									r = 0,
									i = 100 * e;
								if (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29 ? r = 1 : i == (0 | i) && i >= -(1 << 29) && i < 1 << 29 && (r = 1, n = 1), !r) throw new Error("unsupported RkNumber " + e);
								t.write_shift(-4, ((n ? i : e) << 2) + (n + 2))
							}(e.v, n), n
					}
					var Ys = Cn,
						Vs = $n,
						zs = ["left", "right", "top", "bottom", "header", "footer"];

					function Qs(e, t, n, r, i, a) {
						if (void 0 !== t.v) {
							var o = "";
							switch (t.t) {
								case "b":
									o = t.v ? "1" : "0";
									break;
								case "d":
									(t = re(t)).z = t.z || M._table[14], t.v = G(te(t.v)), t.t = "n";
									break;
								case "n":
								case "e":
									o = "" + t.v;
									break;
								default:
									o = t.v
							}
							var s = {
								r: n,
								c: r
							};
							switch (s.s = gs(i.cellXfs, t, i), t.l && a["!links"].push([Zt(s), t.l]), t.c && a["!comments"].push([Zt(s), t.c]), t.t) {
								case "s":
								case "str":
									return void(i.bookSST ? (o = _s(i.Strings, t.v, i.revStrings), s.t = "s", s.v = o, Yt(e, "BrtCellIsst", function(e, t, n) {
										return null == n && (n = Ut(12)), mn(t, n), n.write_shift(4, t.v), n
									}(0, s))) : (s.t = "str", Yt(e, "BrtCellSt", function(e, t, n) {
										return null == n && (n = Ut(12 + 4 * e.v.length)), mn(t, n), ln(e.v, n), n.length > n.l ? n.slice(0, n.l) : n
									}(t, s))));
								case "n":
									return void(t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3 ? Yt(e, "BrtCellRk", Hs(t, s)) : Yt(e, "BrtCellReal", function(e, t, n) {
										return null == n && (n = Ut(16)), mn(t, n), On(e.v, n), n
									}(t, s)));
								case "b":
									return s.t = "b", void Yt(e, "BrtCellBool", function(e, t, n) {
										return null == n && (n = Ut(9)), mn(t, n), n.write_shift(1, e.v ? 1 : 0), n
									}(t, s));
								case "e":
									s.t = "e"
							}
							Yt(e, "BrtCellBlank", function(e, t, n) {
								return null == n && (n = Ut(8)), mn(t, n)
							}(0, s))
						}
					}

					function Gs(e, t) {
						t && t["!merges"] && (Yt(e, "BrtBeginMergeCells", function(e, t) {
							return null == t && (t = Ut(4)), t.write_shift(4, e), t
						}(t["!merges"].length)), t["!merges"].forEach((function(t) {
							Yt(e, "BrtMergeCell", Vs(t))
						})), Yt(e, "BrtEndMergeCells"))
					}

					function qs(e, t) {
						t && t["!cols"] && (Yt(e, "BrtBeginColInfos"), t["!cols"].forEach((function(t, n) {
							t && Yt(e, "BrtColInfo", function(e, t, n) {
								null == n && (n = Ut(18));
								var r = ms(e, t);
								n.write_shift(-4, e), n.write_shift(-4, e), n.write_shift(4, 256 * (r.width || 10)), n.write_shift(4, 0);
								var i = 0;
								return t.hidden && (i |= 1), "number" == typeof r.width && (i |= 2), t.level && (i |= t.level << 8), n.write_shift(2, i), n
							}(n, t))
						})), Yt(e, "BrtEndColInfos"))
					}

					function Ws(e, t) {
						t && t["!ref"] && (Yt(e, "BrtBeginCellIgnoreECs"), Yt(e, "BrtCellIgnoreEC", function(e) {
							var t = Ut(24);
							return t.write_shift(4, 4), t.write_shift(4, 1), $n(e, t), t
						}(nn(t["!ref"]))), Yt(e, "BrtEndCellIgnoreECs"))
					}

					function Ks(e, t, n) {
						t["!links"].forEach((function(t) {
							if (t[1].Target) {
								var r = er(n, -1, t[1].Target.replace(/#.*$/, ""), qn.HLINK);
								Yt(e, "BrtHLink", function(e, t) {
									var n = Ut(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
									$n({
										s: Jt(e[0]),
										e: Jt(e[0])
									}, n), wn("rId" + t, n);
									var r = e[1].Target.indexOf("#");
									return ln((-1 == r ? "" : e[1].Target.slice(r + 1)) || "", n), ln(e[1].Tooltip || "", n), ln("", n), n.slice(0, n.l)
								}(t, r))
							}
						})), delete t["!links"]
					}

					function Xs(e, t, n) {
						Yt(e, "BrtBeginWsViews"), Yt(e, "BrtBeginWsView", function(e, t, n) {
							null == n && (n = Ut(30));
							var r = 924;
							return (((t || {}).Views || [])[0] || {}).RTL && (r |= 32), n.write_shift(2, r), n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(1, 0), n.write_shift(1, 0), n.write_shift(2, 0), n.write_shift(2, 100), n.write_shift(2, 0), n.write_shift(2, 0), n.write_shift(2, 0), n.write_shift(4, 0), n
						}(0, n)), Yt(e, "BrtEndWsView"), Yt(e, "BrtEndWsViews")
					}

					function Js(e, t) {
						t["!protect"] && Yt(e, "BrtSheetProtection", function(e, t) {
							return null == t && (t = Ut(66)), t.write_shift(2, e.password ? ua(e.password) : 0), t.write_shift(4, 1), [
								["objects", !1],
								["scenarios", !1],
								["formatCells", !0],
								["formatColumns", !0],
								["formatRows", !0],
								["insertColumns", !0],
								["insertRows", !0],
								["insertHyperlinks", !0],
								["deleteColumns", !0],
								["deleteRows", !0],
								["selectLockedCells", !1],
								["sort", !0],
								["autoFilter", !0],
								["pivotTables", !0],
								["selectUnlockedCells", !1]
							].forEach((function(n) {
								n[1] ? t.write_shift(4, null == e[n[0]] || e[n[0]] ? 0 : 1) : t.write_shift(4, null != e[n[0]] && e[n[0]] ? 0 : 1)
							})), t
						}(t["!protect"]))
					}

					function Zs(e, t, n, r) {
						var i = Ht(),
							a = n.SheetNames[e],
							o = n.Sheets[a] || {},
							s = a;
						try {
							n && n.Workbook && (s = n.Workbook.Sheets[e].CodeName || s)
						} catch (e) {}
						var u = nn(o["!ref"] || "A1");
						if (u.e.c > 16383 || u.e.r > 1048575) {
							if (t.WTF) throw new Error("Range " + (o["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
							u.e.c = Math.min(u.e.c, 16383), u.e.r = Math.min(u.e.c, 1048575)
						}
						return o["!links"] = [], o["!comments"] = [], Yt(i, "BrtBeginSheet"), n.vbaraw && Yt(i, "BrtWsProp", function(e, t) {
								null == t && (t = Ut(84 + 4 * e.length));
								for (var n = 0; n < 3; ++n) t.write_shift(1, 0);
								return xn({
									auto: 1
								}, t), t.write_shift(-4, -1), t.write_shift(-4, -1), gn(e, t), t.slice(0, t.l)
							}(s)), Yt(i, "BrtWsDim", js(u)), Xs(i, 0, n.Workbook), qs(i, o),
							function(e, t, n, r) {
								var i, a = nn(t["!ref"] || "A1"),
									o = "",
									s = [];
								Yt(e, "BrtBeginSheetData");
								var u = Array.isArray(t),
									c = a.e.r;
								t["!rows"] && (c = Math.max(a.e.r, t["!rows"].length - 1));
								for (var l = a.s.r; l <= c; ++l)
									if (o = Wt(l), Fs(e, t, a, l), l <= a.e.r)
										for (var f = a.s.c; f <= a.e.c; ++f) {
											l === a.s.r && (s[f] = Xt(f)), i = s[f] + o;
											var d = u ? (t[l] || [])[f] : t[i];
											d && Qs(e, d, l, f, r, t)
										}
								Yt(e, "BrtEndSheetData")
							}(i, o, 0, t), Js(i, o),
							function(e, t, n, r) {
								if (t["!autofilter"]) {
									var i = t["!autofilter"],
										a = "string" == typeof i.ref ? i.ref : tn(i.ref);
									n.Workbook || (n.Workbook = {
										Sheets: []
									}), n.Workbook.Names || (n.Workbook.Names = []);
									var o = n.Workbook.Names,
										s = en(a);
									s.s.r == s.e.r && (s.e.r = en(t["!ref"]).e.r, a = tn(s));
									for (var u = 0; u < o.length; ++u) {
										var c = o[u];
										if ("_xlnm._FilterDatabase" == c.Name && c.Sheet == r) {
											c.Ref = "'" + n.SheetNames[r] + "'!" + a;
											break
										}
									}
									u == o.length && o.push({
										Name: "_xlnm._FilterDatabase",
										Sheet: r,
										Ref: "'" + n.SheetNames[r] + "'!" + a
									}), Yt(e, "BrtBeginAFilter", $n(nn(a))), Yt(e, "BrtEndAFilter")
								}
							}(i, o, n, e), Gs(i, o), Ks(i, o, r), o["!margins"] && Yt(i, "BrtMargins", function(e, t) {
								return null == t && (t = Ut(48)), bs(e), zs.forEach((function(n) {
									On(e[n], t)
								})), t
							}(o["!margins"])), t && !t.ignoreEC && null != t.ignoreEC || Ws(i, o),
							function(e, t, n, r) {
								if (t["!comments"].length > 0) {
									var i = er(r, -1, "../drawings/vmlDrawing" + (n + 1) + ".vml", qn.VML);
									Yt(e, "BrtLegacyDrawing", wn("rId" + i)), t["!legacy"] = i
								}
							}(i, o, e, r), Yt(i, "BrtEndSheet"), i.end()
					}

					function eu(e, t, n, r, i, a) {
						var o = a || {
							"!type": "chart"
						};
						if (!e) return a;
						var s = 0,
							u = 0,
							c = "A",
							l = {
								s: {
									r: 2e6,
									c: 2e6
								},
								e: {
									r: 0,
									c: 0
								}
							};
						return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach((function(e) {
							var t = function(e) {
								var t, n = [],
									r = e.match(/^<c:numCache>/);
								(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach((function(e) {
									var t = e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
									t && (n[+t[1]] = r ? +t[2] : t[2])
								}));
								var i = $e((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
								return (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach((function(e) {
									t = e.replace(/<.*?>/g, "")
								})), [n, i, t]
							}(e);
							l.s.r = l.s.c = 0, l.e.c = s, c = Xt(s), t[0].forEach((function(e, n) {
								o[c + Wt(n)] = {
									t: "n",
									v: e,
									z: t[1]
								}, u = n
							})), l.e.r < u && (l.e.r = u), ++s
						})), s > 0 && (o["!ref"] = tn(l)), o
					}
					qn.CHART = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", qn.CHARTEX = "http://schemas.microsoft.com/office/2014/relationships/chartEx", qn.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", Xe("chartsheet", null, {
						xmlns: tt.main[0],
						"xmlns:r": tt.r
					});
					var tu = [
							["allowRefreshQuery", !1, "bool"],
							["autoCompressPictures", !0, "bool"],
							["backupFile", !1, "bool"],
							["checkCompatibility", !1, "bool"],
							["CodeName", ""],
							["date1904", !1, "bool"],
							["defaultThemeVersion", 0, "int"],
							["filterPrivacy", !1, "bool"],
							["hidePivotFieldList", !1, "bool"],
							["promptedSolutions", !1, "bool"],
							["publishItems", !1, "bool"],
							["refreshAllConnections", !1, "bool"],
							["saveExternalLinkValues", !0, "bool"],
							["showBorderUnselectedTables", !0, "bool"],
							["showInkAnnotation", !0, "bool"],
							["showObjects", "all"],
							["showPivotChartFilter", !1, "bool"],
							["updateLinks", "userSet"]
						],
						nu = [
							["activeTab", 0, "int"],
							["autoFilterDateGrouping", !0, "bool"],
							["firstSheet", 0, "int"],
							["minimized", !1, "bool"],
							["showHorizontalScroll", !0, "bool"],
							["showSheetTabs", !0, "bool"],
							["showVerticalScroll", !0, "bool"],
							["tabRatio", 600, "int"],
							["visibility", "visible"]
						],
						ru = [],
						iu = [
							["calcCompleted", "true"],
							["calcMode", "auto"],
							["calcOnSave", "true"],
							["concurrentCalc", "true"],
							["fullCalcOnLoad", "false"],
							["fullPrecision", "true"],
							["iterate", "false"],
							["iterateCount", "100"],
							["iterateDelta", "0.001"],
							["refMode", "A1"]
						];

					function au(e, t) {
						for (var n = 0; n != e.length; ++n)
							for (var r = e[n], i = 0; i != t.length; ++i) {
								var a = t[i];
								if (null == r[a[0]]) r[a[0]] = a[1];
								else switch (a[2]) {
									case "bool":
										"string" == typeof r[a[0]] && (r[a[0]] = Be(r[a[0]]));
										break;
									case "int":
										"string" == typeof r[a[0]] && (r[a[0]] = parseInt(r[a[0]], 10))
								}
							}
					}

					function ou(e, t) {
						for (var n = 0; n != t.length; ++n) {
							var r = t[n];
							if (null == e[r[0]]) e[r[0]] = r[1];
							else switch (r[2]) {
								case "bool":
									"string" == typeof e[r[0]] && (e[r[0]] = Be(e[r[0]]));
									break;
								case "int":
									"string" == typeof e[r[0]] && (e[r[0]] = parseInt(e[r[0]], 10))
							}
						}
					}

					function su(e) {
						ou(e.WBProps, tu), ou(e.CalcPr, iu), au(e.WBView, nu), au(e.Sheets, ru), hs.date1904 = Be(e.WBProps.date1904)
					}
					var uu = "][*?/\\".split("");

					function cu(e, t) {
						if (e.length > 31) {
							if (t) return !1;
							throw new Error("Sheet names cannot exceed 31 chars")
						}
						var n = !0;
						return uu.forEach((function(r) {
							if (-1 != e.indexOf(r)) {
								if (!t) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
								n = !1
							}
						})), n
					}

					function lu(e) {
						if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
						if (!e.SheetNames.length) throw new Error("Workbook is empty");
						var t = e.Workbook && e.Workbook.Sheets || [];
						! function(e, t, n) {
							e.forEach((function(r, i) {
								cu(r);
								for (var a = 0; a < i; ++a)
									if (r == e[a]) throw new Error("Duplicate Sheet Name: " + r);
								if (n) {
									var o = t && t[i] && t[i].CodeName || r;
									if (95 == o.charCodeAt(0) && o.length > 22) throw new Error("Bad Code Name: Worksheet" + o)
								}
							}))
						}(e.SheetNames, t, !!e.vbaraw);
						for (var n = 0; n < e.SheetNames.length; ++n) ys(e.Sheets[e.SheetNames[n]], e.SheetNames[n], n)
					}
					var fu = /<\w+:workbook/,
						du = Xe("workbook", null, {
							xmlns: tt.main[0],
							"xmlns:r": tt.r
						});

					function hu(e) {
						var t = [ge];
						t[t.length] = du;
						var n = e.Workbook && (e.Workbook.Names || []).length > 0,
							r = {
								codeName: "ThisWorkbook"
							};
						e.Workbook && e.Workbook.WBProps && (tu.forEach((function(t) {
							null != e.Workbook.WBProps[t[0]] && e.Workbook.WBProps[t[0]] != t[1] && (r[t[0]] = e.Workbook.WBProps[t[0]])
						})), e.Workbook.WBProps.CodeName && (r.codeName = e.Workbook.WBProps.CodeName, delete r.CodeName)), t[t.length] = Xe("workbookPr", null, r);
						var i = e.Workbook && e.Workbook.Sheets || [],
							a = 0;
						if (i && i[0] && i[0].Hidden) {
							for (t[t.length] = "<bookViews>", a = 0; a != e.SheetNames.length && i[a] && i[a].Hidden; ++a);
							a == e.SheetNames.length && (a = 0), t[t.length] = '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>', t[t.length] = "</bookViews>"
						}
						for (t[t.length] = "<sheets>", a = 0; a != e.SheetNames.length; ++a) {
							var o = {
								name: xe(e.SheetNames[a].slice(0, 31))
							};
							if (o.sheetId = "" + (a + 1), o["r:id"] = "rId" + (a + 1), i[a]) switch (i[a].Hidden) {
								case 1:
									o.state = "hidden";
									break;
								case 2:
									o.state = "veryHidden"
							}
							t[t.length] = Xe("sheet", null, o)
						}
						return t[t.length] = "</sheets>", n && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach((function(e) {
							var n = {
								name: e.Name
							};
							e.Comment && (n.comment = e.Comment), null != e.Sheet && (n.localSheetId = "" + e.Sheet), e.Hidden && (n.hidden = "1"), e.Ref && (t[t.length] = Xe("definedName", xe(e.Ref), n))
						})), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("")
					}

					function pu(e, t) {
						return t || (t = Ut(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), wn(e.strRelID, t), ln(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t
					}

					function _u(e, n) {
						n || (n = Ut(127));
						for (var r = 0; 4 != r; ++r) n.write_shift(4, 0);
						return ln("SheetJS", n), ln(t.version, n), ln(t.version, n), ln("7262", n), n.length = n.l, n.length > n.l ? n.slice(0, n.l) : n
					}

					function mu(e, t) {
						if (t.Workbook && t.Workbook.Sheets) {
							for (var n = t.Workbook.Sheets, r = 0, i = -1, a = -1; r < n.length; ++r) !n[r] || !n[r].Hidden && -1 == i ? i = r : 1 == n[r].Hidden && -1 == a && (a = r);
							a > i || (Yt(e, "BrtBeginBookViews"), Yt(e, "BrtBookView", function(e, t) {
								return t || (t = Ut(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e), t.write_shift(1, 120), t.length > t.l ? t.slice(0, t.l) : t
							}(i)), Yt(e, "BrtEndBookViews"))
						}
					}

					function bu(e, t) {
						var n = Ht();
						return Yt(n, "BrtBeginBook"), Yt(n, "BrtFileVersion", _u()), Yt(n, "BrtWbProp", function(e, t) {
								t || (t = Ut(72));
								var n = 0;
								return e && e.filterPrivacy && (n |= 8), t.write_shift(4, n), t.write_shift(4, 0), gn(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l)
							}(e.Workbook && e.Workbook.WBProps || null)), mu(n, e),
							function(e, t) {
								Yt(e, "BrtBeginBundleShs");
								for (var n = 0; n != t.SheetNames.length; ++n) {
									Yt(e, "BrtBundleSh", pu({
										Hidden: t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[n] && t.Workbook.Sheets[n].Hidden || 0,
										iTabID: n + 1,
										strRelID: "rId" + (n + 1),
										name: t.SheetNames[n]
									}))
								}
								Yt(e, "BrtEndBundleShs")
							}(n, e), Yt(n, "BrtEndBook"), n.end()
					}

					function gu(e, t, n) {
						return ".bin" === t.slice(-4) ? function(e, t) {
							var n = {
									AppVersion: {},
									WBProps: {},
									WBView: [],
									Sheets: [],
									CalcPr: {},
									xmlns: ""
								},
								r = [],
								i = !1;
							t || (t = {}), t.biff = 12;
							var a = [],
								o = [
									[]
								];
							return o.SheetNames = [], o.XTI = [], jt(e, (function(e, s, u) {
								switch (u) {
									case 156:
										o.SheetNames.push(e.name), n.Sheets.push(e);
										break;
									case 153:
										n.WBProps = e;
										break;
									case 39:
										null != e.Sheet && (t.SID = e.Sheet), e.Ref = qo(e.Ptg, 0, null, o, t), delete t.SID, delete e.Ptg, a.push(e);
										break;
									case 1036:
										break;
									case 357:
									case 358:
									case 355:
									case 667:
										o[0].length ? o.push([u, e]) : o[0] = [u, e], o[o.length - 1].XTI = [];
										break;
									case 362:
										0 === o.length && (o[0] = [], o[0].XTI = []), o[o.length - 1].XTI = o[o.length - 1].XTI.concat(e), o.XTI = o.XTI.concat(e);
										break;
									case 361:
										break;
									case 3072:
									case 3073:
									case 2071:
									case 534:
									case 677:
									case 158:
									case 157:
									case 610:
									case 2050:
									case 155:
									case 548:
									case 676:
									case 128:
									case 665:
									case 2128:
									case 2125:
									case 549:
									case 2053:
									case 596:
									case 2076:
									case 2075:
									case 2082:
									case 397:
									case 154:
									case 1117:
									case 553:
									case 2091:
										break;
									case 35:
										r.push(s), i = !0;
										break;
									case 36:
										r.pop(), i = !1;
										break;
									case 37:
										r.push(s), i = !0;
										break;
									case 38:
										r.pop(), i = !1;
										break;
									case 16:
										break;
									default:
										if ((s || "").indexOf("Begin") > 0);
										else if ((s || "").indexOf("End") > 0);
										else if (!i || t.WTF && "BrtACBegin" != r[r.length - 1] && "BrtFRTBegin" != r[r.length - 1]) throw new Error("Unexpected record " + u + " " + s)
								}
							}), t), su(n), n.Names = a, n.supbooks = o, n
						}(e, n) : function(e, t) {
							if (!e) throw new Error("Could not find file");
							var n = {
									AppVersion: {},
									WBProps: {},
									WBView: [],
									Sheets: [],
									CalcPr: {},
									Names: [],
									xmlns: ""
								},
								r = !1,
								i = "xmlns",
								a = {},
								o = 0;
							if (e.replace(ye, (function(s, u) {
									var c = we(s);
									switch (Ee(c[0])) {
										case "<?xml":
											break;
										case "<workbook":
											s.match(fu) && (i = "xmlns" + s.match(/<(\w+):/)[1]), n.xmlns = c[i];
											break;
										case "</workbook>":
											break;
										case "<fileVersion":
											delete c[0], n.AppVersion = c;
											break;
										case "<fileVersion/>":
										case "</fileVersion>":
										case "<fileSharing":
										case "<fileSharing/>":
											break;
										case "<workbookPr":
										case "<workbookPr/>":
											tu.forEach((function(e) {
												if (null != c[e[0]]) switch (e[2]) {
													case "bool":
														n.WBProps[e[0]] = Be(c[e[0]]);
														break;
													case "int":
														n.WBProps[e[0]] = parseInt(c[e[0]], 10);
														break;
													default:
														n.WBProps[e[0]] = c[e[0]]
												}
											})), c.codeName && (n.WBProps.CodeName = Ne(c.codeName));
											break;
										case "</workbookPr>":
										case "<workbookProtection":
										case "<workbookProtection/>":
											break;
										case "<bookViews":
										case "<bookViews>":
										case "</bookViews>":
											break;
										case "<workbookView":
										case "<workbookView/>":
											delete c[0], n.WBView.push(c);
											break;
										case "</workbookView>":
											break;
										case "<sheets":
										case "<sheets>":
										case "</sheets>":
											break;
										case "<sheet":
											switch (c.state) {
												case "hidden":
													c.Hidden = 1;
													break;
												case "veryHidden":
													c.Hidden = 2;
													break;
												default:
													c.Hidden = 0
											}
											delete c.state, c.name = $e(Ne(c.name)), delete c[0], n.Sheets.push(c);
											break;
										case "</sheet>":
											break;
										case "<functionGroups":
										case "<functionGroups/>":
										case "<functionGroup":
											break;
										case "<externalReferences":
										case "</externalReferences>":
										case "<externalReferences>":
										case "<externalReference":
										case "<definedNames/>":
											break;
										case "<definedNames>":
										case "<definedNames":
											r = !0;
											break;
										case "</definedNames>":
											r = !1;
											break;
										case "<definedName":
											(a = {}).Name = Ne(c.name), c.comment && (a.Comment = c.comment), c.localSheetId && (a.Sheet = +c.localSheetId), Be(c.hidden || "0") && (a.Hidden = !0), o = u + s.length;
											break;
										case "</definedName>":
											a.Ref = $e(Ne(e.slice(o, u))), n.Names.push(a);
											break;
										case "<definedName/>":
											break;
										case "<calcPr":
										case "<calcPr/>":
											delete c[0], n.CalcPr = c;
											break;
										case "</calcPr>":
										case "<oleSize":
											break;
										case "<customWorkbookViews>":
										case "</customWorkbookViews>":
										case "<customWorkbookViews":
											break;
										case "<customWorkbookView":
										case "</customWorkbookView>":
											break;
										case "<pivotCaches>":
										case "</pivotCaches>":
										case "<pivotCaches":
										case "<pivotCache":
											break;
										case "<smartTagPr":
										case "<smartTagPr/>":
											break;
										case "<smartTagTypes":
										case "<smartTagTypes>":
										case "</smartTagTypes>":
										case "<smartTagType":
											break;
										case "<webPublishing":
										case "<webPublishing/>":
											break;
										case "<fileRecoveryPr":
										case "<fileRecoveryPr/>":
											break;
										case "<webPublishObjects>":
										case "<webPublishObjects":
										case "</webPublishObjects>":
										case "<webPublishObject":
											break;
										case "<extLst":
										case "<extLst>":
										case "</extLst>":
										case "<extLst/>":
											break;
										case "<ext":
											r = !0;
											break;
										case "</ext>":
											r = !1;
											break;
										case "<ArchID":
											break;
										case "<AlternateContent":
										case "<AlternateContent>":
											r = !0;
											break;
										case "</AlternateContent>":
											r = !1;
											break;
										case "<revisionPtr":
											break;
										default:
											if (!r && t.WTF) throw new Error("unrecognized " + c[0] + " in workbook")
									}
									return s
								})), -1 === tt.main.indexOf(n.xmlns)) throw new Error("Unknown Namespace: " + n.xmlns);
							return su(n), n
						}(e, n)
					}

					function vu(e, t, n, r, i, a, o, s) {
						return ".bin" === t.slice(-4) ? function(e, t, n, r, i, a, o) {
							if (!e) return e;
							var s = t || {};
							r || (r = {
								"!id": {}
							});
							var u, c, l, f, d, h, p, _, m, b, g = s.dense ? [] : {},
								v = {
									s: {
										r: 2e6,
										c: 2e6
									},
									e: {
										r: 0,
										c: 0
									}
								},
								y = [],
								A = !1,
								S = !1,
								w = [];
							s.biff = 12, s["!row"] = 0;
							var E = 0,
								T = !1,
								C = [],
								$ = {},
								k = s.supbooks || i.supbooks || [
									[]
								];
							if (k.sharedf = $, k.arrayf = C, k.SheetNames = i.SheetNames || i.Sheets.map((function(e) {
									return e.name
								})), !s.supbooks && (s.supbooks = k, i.Names))
								for (var O = 0; O < i.Names.length; ++O) k[0][O + 1] = i.Names[O];
							var x = [],
								P = [],
								I = !1;
							if (jt(e, (function(e, t, O) {
									if (!S) switch (O) {
										case 148:
											u = e;
											break;
										case 0:
											c = e, s.sheetRows && s.sheetRows <= c.r && (S = !0), m = Wt(d = c.r), s["!row"] = c.r, (e.hidden || e.hpt || null != e.level) && (e.hpt && (e.hpx = wa(e.hpt)), P[e.r] = e);
											break;
										case 2:
										case 3:
										case 4:
										case 5:
										case 6:
										case 7:
										case 8:
										case 9:
										case 10:
										case 11:
											switch (l = {
												t: e[2]
											}, e[2]) {
												case "n":
													l.v = e[1];
													break;
												case "s":
													_ = ds[e[1]], l.v = _.t, l.r = _.r;
													break;
												case "b":
													l.v = !!e[1];
													break;
												case "e":
													l.v = e[1], !1 !== s.cellText && (l.w = jn[l.v]);
													break;
												case "str":
													l.t = "s", l.v = e[1]
											}
											if ((f = o.CellXf[e[0].iStyleRef]) && vs(l, f.numFmtId, null, s, a, o), h = e[0].c, s.dense ? (g[d] || (g[d] = []), g[d][h] = l) : g[Xt(h) + m] = l, s.cellFormula) {
												for (T = !1, E = 0; E < C.length; ++E) {
													var L = C[E];
													c.r >= L[0].s.r && c.r <= L[0].e.r && h >= L[0].s.c && h <= L[0].e.c && (l.F = tn(L[0]), T = !0)
												}!T && e.length > 3 && (l.f = e[3])
											}
											if (v.s.r > c.r && (v.s.r = c.r), v.s.c > h && (v.s.c = h), v.e.r < c.r && (v.e.r = c.r), v.e.c < h && (v.e.c = h), s.cellDates && f && "n" == l.t && M.is_date(M._table[f.numFmtId])) {
												var D = M.parse_date_code(l.v);
												D && (l.t = "d", l.v = new Date(D.y, D.m - 1, D.d, D.H, D.M, D.S, D.u))
											}
											break;
										case 1:
											if (!s.sheetStubs || A) break;
											l = {
												t: "z",
												v: void 0
											}, h = e[0].c, s.dense ? (g[d] || (g[d] = []), g[d][h] = l) : g[Xt(h) + m] = l, v.s.r > c.r && (v.s.r = c.r), v.s.c > h && (v.s.c = h), v.e.r < c.r && (v.e.r = c.r), v.e.c < h && (v.e.c = h);
											break;
										case 176:
											w.push(e);
											break;
										case 494:
											var B = r["!id"][e.relId];
											for (B ? (e.Target = B.Target, e.loc && (e.Target += "#" + e.loc), e.Rel = B) : "" == e.relId && (e.Target = "#" + e.loc), d = e.rfx.s.r; d <= e.rfx.e.r; ++d)
												for (h = e.rfx.s.c; h <= e.rfx.e.c; ++h) s.dense ? (g[d] || (g[d] = []), g[d][h] || (g[d][h] = {
													t: "z",
													v: void 0
												}), g[d][h].l = e) : (p = Zt({
													c: h,
													r: d
												}), g[p] || (g[p] = {
													t: "z",
													v: void 0
												}), g[p].l = e);
											break;
										case 426:
											if (!s.cellFormula) break;
											C.push(e), (b = s.dense ? g[d][h] : g[Xt(h) + m]).f = qo(e[1], 0, {
												r: c.r,
												c: h
											}, k, s), b.F = tn(e[0]);
											break;
										case 427:
											if (!s.cellFormula) break;
											$[Zt(e[0].s)] = e[1], (b = s.dense ? g[d][h] : g[Xt(h) + m]).f = qo(e[1], 0, {
												r: c.r,
												c: h
											}, k, s);
											break;
										case 60:
											if (!s.cellStyles) break;
											for (; e.e >= e.s;) x[e.e--] = {
												width: e.w / 256,
												hidden: !!(1 & e.flags),
												level: e.level
											}, I || (I = !0, ya(e.w / 256)), Aa(x[e.e + 1]);
											break;
										case 161:
											g["!autofilter"] = {
												ref: tn(e)
											};
											break;
										case 476:
											g["!margins"] = e;
											break;
										case 147:
											i.Sheets[n] || (i.Sheets[n] = {}), e.name && (i.Sheets[n].CodeName = e.name);
											break;
										case 137:
											i.Views || (i.Views = [{}]), i.Views[0] || (i.Views[0] = {}), e.RTL && (i.Views[0].RTL = !0);
											break;
										case 485:
											break;
										case 64:
										case 1053:
										case 151:
											break;
										case 175:
										case 644:
										case 625:
										case 562:
										case 396:
										case 1112:
										case 1146:
										case 471:
										case 1050:
										case 649:
										case 1105:
										case 49:
										case 589:
										case 607:
										case 564:
										case 1055:
										case 168:
										case 174:
										case 1180:
										case 499:
										case 507:
										case 550:
										case 171:
										case 167:
										case 1177:
										case 169:
										case 1181:
										case 551:
										case 552:
										case 661:
										case 639:
										case 478:
										case 537:
										case 477:
										case 536:
										case 1103:
										case 680:
										case 1104:
										case 1024:
										case 152:
										case 663:
										case 535:
										case 678:
										case 504:
										case 1043:
										case 428:
										case 170:
										case 3072:
										case 50:
										case 2070:
										case 1045:
											break;
										case 35:
											A = !0;
											break;
										case 36:
											A = !1;
											break;
										case 37:
											y.push(t), A = !0;
											break;
										case 38:
											y.pop(), A = !1;
											break;
										default:
											if ((t || "").indexOf("Begin") > 0);
											else if ((t || "").indexOf("End") > 0);
											else if (!A || s.WTF) throw new Error("Unexpected record " + O + " " + t)
									}
								}), s), delete s.supbooks, delete s["!row"], !g["!ref"] && (v.s.r < 2e6 || u && (u.e.r > 0 || u.e.c > 0 || u.s.r > 0 || u.s.c > 0)) && (g["!ref"] = tn(u || v)), s.sheetRows && g["!ref"]) {
								var L = nn(g["!ref"]);
								s.sheetRows <= +L.e.r && (L.e.r = s.sheetRows - 1, L.e.r > v.e.r && (L.e.r = v.e.r), L.e.r < L.s.r && (L.s.r = L.e.r), L.e.c > v.e.c && (L.e.c = v.e.c), L.e.c < L.s.c && (L.s.c = L.e.c), g["!fullref"] = g["!ref"], g["!ref"] = tn(L))
							}
							return w.length > 0 && (g["!merges"] = w), x.length > 0 && (g["!cols"] = x), P.length > 0 && (g["!rows"] = P), g
						}(e, r, n, i, a, o, s) : xs(e, r, n, i, a, o, s)
					}

					function yu(e, t, n, r, i, a, o, s) {
						return ".bin" === t.slice(-4) ? function(e, t, n, r, i) {
							if (!e) return e;
							r || (r = {
								"!id": {}
							});
							var a = {
									"!type": "chart",
									"!drawel": null,
									"!rel": ""
								},
								o = [],
								s = !1;
							return jt(e, (function(e, r, u) {
								switch (u) {
									case 550:
										a["!rel"] = e;
										break;
									case 651:
										i.Sheets[n] || (i.Sheets[n] = {}), e.name && (i.Sheets[n].CodeName = e.name);
										break;
									case 562:
									case 652:
									case 669:
									case 679:
									case 551:
									case 552:
									case 476:
									case 3072:
										break;
									case 35:
										s = !0;
										break;
									case 36:
										s = !1;
										break;
									case 37:
										o.push(r);
										break;
									case 38:
										o.pop();
										break;
									default:
										if ((r || "").indexOf("Begin") > 0) o.push(r);
										else if ((r || "").indexOf("End") > 0) o.pop();
										else if (!s || t.WTF) throw new Error("Unexpected record " + u + " " + r)
								}
							}), t), r["!id"][a["!rel"]] && (a["!drawel"] = r["!id"][a["!rel"]]), a
						}(e, r, n, i, a) : function(e, t, n, r, i) {
							if (!e) return e;
							r || (r = {
								"!id": {}
							});
							var a, o = {
									"!type": "chart",
									"!drawel": null,
									"!rel": ""
								},
								s = e.match(ks);
							return s && Ps(s[0], 0, i, n), (a = e.match(/drawing r:id="(.*?)"/)) && (o["!rel"] = a[1]), r["!id"][o["!rel"]] && (o["!drawel"] = r["!id"][o["!rel"]]), o
						}(e, 0, n, i, a)
					}

					function Au(e, t, n, r) {
						return ".bin" === t.slice(-4) ? function(e, t, n) {
							var r = {
								NumberFmt: []
							};
							for (var i in M._table) r.NumberFmt[i] = M._table[i];
							r.CellXf = [], r.Fonts = [];
							var a = [],
								o = !1;
							return jt(e, (function(e, i, s) {
								switch (s) {
									case 44:
										r.NumberFmt[e[0]] = e[1], M.load(e[1], e[0]);
										break;
									case 43:
										r.Fonts.push(e), null != e.color.theme && t && t.themeElements && t.themeElements.clrScheme && (e.color.rgb = pa(t.themeElements.clrScheme[e.color.theme].rgb, e.color.tint || 0));
										break;
									case 1025:
									case 45:
									case 46:
										break;
									case 47:
										"BrtBeginCellXFs" == a[a.length - 1] && r.CellXf.push(e);
										break;
									case 48:
									case 507:
									case 572:
									case 475:
										break;
									case 1171:
									case 2102:
									case 1130:
									case 512:
									case 2095:
									case 3072:
										break;
									case 35:
										o = !0;
										break;
									case 36:
										o = !1;
										break;
									case 37:
										a.push(i), o = !0;
										break;
									case 38:
										a.pop(), o = !1;
										break;
									default:
										if ((i || "").indexOf("Begin") > 0) a.push(i);
										else if ((i || "").indexOf("End") > 0) a.pop();
										else if (!o || n.WTF && "BrtACBegin" != a[a.length - 1]) throw new Error("Unexpected record " + s + " " + i)
								}
							})), r
						}(e, n, r) : $a(e, n, r)
					}

					function Su(e, t, n) {
						return ".bin" === t.slice(-4) ? function(e, t) {
							var n = [],
								r = !1;
							return jt(e, (function(e, i, a) {
								switch (a) {
									case 159:
										n.Count = e[0], n.Unique = e[1];
										break;
									case 19:
										n.push(e);
										break;
									case 160:
										return !0;
									case 35:
										r = !0;
										break;
									case 36:
										r = !1;
										break;
									default:
										if (i.indexOf("Begin") > 0 || i.indexOf("End"), !r || t.WTF) throw new Error("Unexpected record " + a + " " + i)
								}
							})), n
						}(e, n) : function(e, t) {
							var n = [],
								r = "";
							if (!e) return n;
							var i = e.match(Qi);
							if (i) {
								r = i[2].replace(Gi, "").split(qi);
								for (var a = 0; a != r.length; ++a) {
									var o = zi(r[a].trim(), t);
									null != o && (n[n.length] = o)
								}
								i = we(i[1]), n.Count = i.count, n.Unique = i.uniqueCount
							}
							return n
						}(e, n)
					}

					function wu(e, t, n) {
						return ".bin" === t.slice(-4) ? function(e, t) {
							var n = [],
								r = [],
								i = {},
								a = !1;
							return jt(e, (function(e, o, s) {
								switch (s) {
									case 632:
										r.push(e);
										break;
									case 635:
										i = e;
										break;
									case 637:
										i.t = e.t, i.h = e.h, i.r = e.r;
										break;
									case 636:
										if (i.author = r[i.iauthor], delete i.iauthor, t.sheetRows && i.rfx && t.sheetRows <= i.rfx.r) break;
										i.t || (i.t = ""), delete i.rfx, n.push(i);
										break;
									case 3072:
										break;
									case 35:
										a = !0;
										break;
									case 36:
										a = !1;
										break;
									case 37:
									case 38:
										break;
									default:
										if ((o || "").indexOf("Begin") > 0);
										else if ((o || "").indexOf("End") > 0);
										else if (!a || t.WTF) throw new Error("Unexpected record " + s + " " + o)
								}
							})), n
						}(e, n) : function(e, t) {
							if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
							var n = [],
								r = [],
								i = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
							i && i[1] && i[1].split(/<\/\w*:?author>/).forEach((function(e) {
								if ("" !== e && "" !== e.trim()) {
									var t = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
									t && n.push(t[1])
								}
							}));
							var a = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
							return a && a[1] && a[1].split(/<\/\w*:?comment>/).forEach((function(e) {
								if ("" !== e && "" !== e.trim()) {
									var i = e.match(/<(?:\w+:)?comment[^>]*>/);
									if (i) {
										var a = we(i[0]),
											o = {
												author: a.authorId && n[a.authorId] || "sheetjsghost",
												ref: a.ref,
												guid: a.guid
											},
											s = Jt(a.ref);
										if (!(t.sheetRows && t.sheetRows <= s.r)) {
											var u = e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
												c = !!u && !!u[1] && zi(u[1]) || {
													r: "",
													t: "",
													h: ""
												};
											o.r = c.r, "<t></t>" == c.r && (c.t = c.h = ""), o.t = c.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), t.cellHTML && (o.h = c.h), r.push(o)
										}
									}
								}
							})), r
						}(e, n)
					}

					function Eu(e, t, n) {
						return ".bin" === t.slice(-4) ? function(e, t, n) {
							var r = [];
							return jt(e, (function(e, t, n) {
								switch (n) {
									case 63:
										r.push(e);
										break;
									default:
										if ((t || "").indexOf("Begin") > 0);
										else if (!((t || "").indexOf("End") > 0)) throw new Error("Unexpected record " + n + " " + t)
								}
							})), r
						}(e) : function(e) {
							var t = [];
							if (!e) return t;
							var n = 1;
							return (e.match(ye) || []).forEach((function(e) {
								var r = we(e);
								switch (r[0]) {
									case "<?xml":
										break;
									case "<calcChain":
									case "<calcChain>":
									case "</calcChain>":
										break;
									case "<c":
										delete r[0], r.i ? n = r.i : r.i = n, t.push(r)
								}
							})), t
						}(e)
					}

					function Tu(e, t, n, r) {
						return ".bin" === n.slice(-4) ? function(e, t, n, r) {
							if (!e) return e;
							var i = r || {},
								a = !1;
							jt(e, (function(e, t, n) {
								switch (n) {
									case 359:
									case 363:
									case 364:
									case 366:
									case 367:
									case 368:
									case 369:
									case 370:
									case 371:
									case 472:
									case 577:
									case 578:
									case 579:
									case 580:
									case 581:
									case 582:
									case 583:
									case 584:
									case 585:
									case 586:
									case 587:
										break;
									case 35:
										a = !0;
										break;
									case 36:
										a = !1;
										break;
									default:
										if ((t || "").indexOf("Begin") > 0);
										else if ((t || "").indexOf("End") > 0);
										else if (!a || i.WTF) throw new Error("Unexpected record " + n.toString(16) + " " + t)
								}
							}), i)
						}(e, 0, 0, r) : void 0
					}

					function Cu(e, t, n) {
						return (".bin" === t.slice(-4) ? bu : hu)(e, n)
					}

					function $u(e, t, n, r, i) {
						return (".bin" === t.slice(-4) ? Zs : Rs)(e, n, r, i)
					}

					function ku(e, t, n) {
						return (".bin" === t.slice(-4) ? Ji : Ki)(e, n)
					}

					function Ou(e, t, n) {
						return (".bin" === t.slice(-4) ? oo : io)(e, n)
					}
					var xu = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
						Pu = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;

					function Mu(e, t) {
						var n = e.split(/\s+/),
							r = [];
						if (t || (r[0] = n[0]), 1 === n.length) return r;
						var i, a, o, s = e.match(xu);
						if (s)
							for (o = 0; o != s.length; ++o) - 1 === (a = (i = s[o].match(Pu))[1].indexOf(":")) ? r[i[1]] = i[2].slice(1, i[2].length - 1) : r["xmlns:" === i[1].slice(0, 6) ? "xmlns" + i[1].slice(6) : i[1].slice(a + 1)] = i[2].slice(1, i[2].length - 1);
						return r
					}

					function Iu(e) {
						var t = {};
						if (1 === e.split(/\s+/).length) return t;
						var n, r, i, a = e.match(xu);
						if (a)
							for (i = 0; i != a.length; ++i) - 1 === (r = (n = a[i].match(Pu))[1].indexOf(":")) ? t[n[1]] = n[2].slice(1, n[2].length - 1) : t["xmlns:" === n[1].slice(0, 6) ? "xmlns" + n[1].slice(6) : n[1].slice(r + 1)] = n[2].slice(1, n[2].length - 1);
						return t
					}

					function Lu(e, t, n, r) {
						var i = r;
						switch ((n[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
							case "boolean":
								i = Be(r);
								break;
							case "i2":
							case "int":
								i = parseInt(r, 10);
								break;
							case "r4":
							case "float":
								i = parseFloat(r);
								break;
							case "date":
							case "dateTime.tz":
								i = te(r);
								break;
							case "i8":
							case "string":
							case "fixed":
							case "uuid":
							case "bin.base64":
								break;
							default:
								throw new Error("bad custprop:" + n[0])
						}
						e[$e(t)] = i
					}

					function Du(e, t, n) {
						if ("z" !== e.t) {
							if (!n || !1 !== n.cellText) try {
								"e" === e.t ? e.w = e.w || jn[e.v] : "General" === t ? "n" === e.t ? (0 | e.v) === e.v ? e.w = M._general_int(e.v) : e.w = M._general_num(e.v) : e.w = M._general(e.v) : e.w = function(e, t) {
									var n = D[e] || $e(e);
									return "General" === n ? M._general(t) : M.format(n, t)
								}(t || "General", e.v)
							} catch (e) {
								if (n.WTF) throw e
							}
							try {
								var r = D[t] || t || "General";
								if (n.cellNF && (e.z = r), n.cellDates && "n" == e.t && M.is_date(r)) {
									var i = M.parse_date_code(e.v);
									i && (e.t = "d", e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u))
								}
							} catch (e) {
								if (n.WTF) throw e
							}
						}
					}

					function Bu(e, t, n) {
						if (n.cellStyles && t.Interior) {
							var r = t.Interior;
							r.Pattern && (r.patternType = Ea[r.Pattern] || r.Pattern)
						}
						e[t.ID] = t
					}

					function Nu(e, t, n, r, i, a, o, s, u, c) {
						var l = "General",
							f = r.StyleID,
							d = {};
						c = c || {};
						var h = [],
							p = 0;
						for (void 0 === f && s && (f = s.StyleID), void 0 === f && o && (f = o.StyleID); void 0 !== a[f] && (a[f].nf && (l = a[f].nf), a[f].Interior && h.push(a[f].Interior), a[f].Parent);) f = a[f].Parent;
						switch (n.Type) {
							case "Boolean":
								r.t = "b", r.v = Be(e);
								break;
							case "String":
								r.t = "s", r.r = Le($e(e)), r.v = e.indexOf("<") > -1 ? $e(t || e).replace(/<.*?>/g, "") : r.r;
								break;
							case "DateTime":
								"Z" != e.slice(-1) && (e += "Z"), r.v = (te(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5, r.v != r.v ? r.v = $e(e) : r.v < 60 && (r.v = r.v - 1), l && "General" != l || (l = "yyyy-mm-dd");
							case "Number":
								void 0 === r.v && (r.v = +e), r.t || (r.t = "n");
								break;
							case "Error":
								r.t = "e", r.v = Hn[e], !1 !== c.cellText && (r.w = e);
								break;
							default:
								"" == e && "" == t ? r.t = "z" : (r.t = "s", r.v = Le(t || e))
						}
						if (Du(r, l, c), !1 !== c.cellFormula)
							if (r.Formula) {
								var _ = $e(r.Formula);
								61 == _.charCodeAt(0) && (_ = _.slice(1)), r.f = uo(_, i), delete r.Formula, "RC" == r.ArrayRange ? r.F = uo("RC:RC", i) : r.ArrayRange && (r.F = uo(r.ArrayRange, i), u.push([nn(r.F), r.F]))
							} else
								for (p = 0; p < u.length; ++p) i.r >= u[p][0].s.r && i.r <= u[p][0].e.r && i.c >= u[p][0].s.c && i.c <= u[p][0].e.c && (r.F = u[p][1]);
						c.cellStyles && (h.forEach((function(e) {
							!d.patternType && e.patternType && (d.patternType = e.patternType)
						})), r.s = d), void 0 !== r.StyleID && (r.ixfe = r.StyleID)
					}

					function Ru(e) {
						e.t = e.v || "", e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), e.v = e.w = e.ixfe = void 0
					}

					function Fu(e) {
						if (v && i.isBuffer(e)) return e.toString("utf8");
						if ("string" == typeof e) return e;
						if ("undefined" != typeof Uint8Array && e instanceof Uint8Array) return Ne(C(k(e)));
						throw new Error("Bad input format: expected Buffer or string")
					}
					var Uu = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm;

					function ju(e, t) {
						var n = t || {};
						I(M);
						var r = _(Fu(e));
						"binary" != n.type && "array" != n.type && "base64" != n.type || (r = "undefined" != typeof cptable ? cptable.utils.decode(65001, p(r)) : Ne(r));
						var i, a = r.slice(0, 1024).toLowerCase(),
							o = !1;
						if (-1 == a.indexOf("<?xml") && ["html", "table", "head", "meta", "script", "style", "div"].forEach((function(e) {
								a.indexOf("<" + e) >= 0 && (o = !0)
							})), o) return gc.to_workbook(r, n);
						var s, u, c = [],
							l = {},
							f = [],
							d = n.dense ? [] : {},
							h = "",
							m = {},
							b = {},
							g = Mu('<Data ss:Type="String">'),
							v = 0,
							y = 0,
							A = 0,
							S = {
								s: {
									r: 2e6,
									c: 2e6
								},
								e: {
									r: 0,
									c: 0
								}
							},
							w = {},
							E = {},
							T = "",
							C = 0,
							$ = [],
							k = {},
							O = {},
							x = 0,
							P = [],
							L = [],
							B = {},
							N = [],
							R = !1,
							F = [],
							U = [],
							j = {},
							H = 0,
							Y = 0,
							V = {
								Sheets: [],
								WBProps: {
									date1904: !1
								}
							},
							z = {};
						Uu.lastIndex = 0, r = r.replace(/<!--([\s\S]*?)-->/gm, "");
						for (var Q = ""; i = Uu.exec(r);) switch (i[3] = (Q = i[3]).toLowerCase()) {
							case "data":
								if ("data" == Q) {
									if ("/" === i[1]) {
										if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
									} else "/" !== i[0].charAt(i[0].length - 2) && c.push([i[3], !0]);
									break
								}
								if (c[c.length - 1][1]) break;
								"/" === i[1] ? Nu(r.slice(v, i.index), T, g, "comment" == c[c.length - 1][0] ? B : m, {
									c: y,
									r: A
								}, w, N[y], b, F, n) : (T = "", g = Mu(i[0]), v = i.index + i[0].length);
								break;
							case "cell":
								if ("/" === i[1])
									if (L.length > 0 && (m.c = L), (!n.sheetRows || n.sheetRows > A) && void 0 !== m.v && (n.dense ? (d[A] || (d[A] = []), d[A][y] = m) : d[Xt(y) + Wt(A)] = m), m.HRef && (m.l = {
											Target: m.HRef
										}, m.HRefScreenTip && (m.l.Tooltip = m.HRefScreenTip), delete m.HRef, delete m.HRefScreenTip), (m.MergeAcross || m.MergeDown) && (H = y + (0 | parseInt(m.MergeAcross, 10)), Y = A + (0 | parseInt(m.MergeDown, 10)), $.push({
											s: {
												c: y,
												r: A
											},
											e: {
												c: H,
												r: Y
											}
										})), n.sheetStubs)
										if (m.MergeAcross || m.MergeDown) {
											for (var G = y; G <= H; ++G)
												for (var q = A; q <= Y; ++q)(G > y || q > A) && (n.dense ? (d[q] || (d[q] = []), d[q][G] = {
													t: "z"
												}) : d[Xt(G) + Wt(q)] = {
													t: "z"
												});
											y = H + 1
										} else ++y;
								else m.MergeAcross ? y = H + 1 : ++y;
								else(m = Iu(i[0])).Index && (y = +m.Index - 1), y < S.s.c && (S.s.c = y), y > S.e.c && (S.e.c = y), "/>" === i[0].slice(-2) && ++y, L = [];
								break;
							case "row":
								"/" === i[1] || "/>" === i[0].slice(-2) ? (A < S.s.r && (S.s.r = A), A > S.e.r && (S.e.r = A), "/>" === i[0].slice(-2) && ((b = Mu(i[0])).Index && (A = +b.Index - 1)), y = 0, ++A) : ((b = Mu(i[0])).Index && (A = +b.Index - 1), j = {}, ("0" == b.AutoFitHeight || b.Height) && (j.hpx = parseInt(b.Height, 10), j.hpt = Sa(j.hpx), U[A] = j), "1" == b.Hidden && (j.hidden = !0, U[A] = j));
								break;
							case "worksheet":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"));
									f.push(h), S.s.r <= S.e.r && S.s.c <= S.e.c && (d["!ref"] = tn(S), n.sheetRows && n.sheetRows <= S.e.r && (d["!fullref"] = d["!ref"], S.e.r = n.sheetRows - 1, d["!ref"] = tn(S))), $.length && (d["!merges"] = $), N.length > 0 && (d["!cols"] = N), U.length > 0 && (d["!rows"] = U), l[h] = d
								} else S = {
									s: {
										r: 2e6,
										c: 2e6
									},
									e: {
										r: 0,
										c: 0
									}
								}, A = y = 0, c.push([i[3], !1]), s = Mu(i[0]), h = $e(s.Name), d = n.dense ? [] : {}, $ = [], F = [], U = [], z = {
									name: h,
									Hidden: 0
								}, V.Sheets.push(z);
								break;
							case "table":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
								} else {
									if ("/>" == i[0].slice(-2)) break;
									Mu(i[0]), c.push([i[3], !1]), N = [], R = !1
								}
								break;
							case "style":
								"/" === i[1] ? Bu(w, E, n) : E = Mu(i[0]);
								break;
							case "numberformat":
								E.nf = $e(Mu(i[0]).Format || "General"), D[E.nf] && (E.nf = D[E.nf]);
								for (var W = 0; 392 != W && M._table[W] != E.nf; ++W);
								if (392 == W)
									for (W = 57; 392 != W; ++W)
										if (null == M._table[W]) {
											M.load(E.nf, W);
											break
										} break;
							case "column":
								if ("table" !== c[c.length - 1][0]) break;
								if ((u = Mu(i[0])).Hidden && (u.hidden = !0, delete u.Hidden), u.Width && (u.wpx = parseInt(u.Width, 10)), !R && u.wpx > 10) {
									R = !0, _a = 6;
									for (var K = 0; K < N.length; ++K) N[K] && Aa(N[K])
								}
								R && Aa(u), N[u.Index - 1 || N.length] = u;
								for (var X = 0; X < +u.Span; ++X) N[N.length] = re(u);
								break;
							case "namedrange":
								if ("/" === i[1]) break;
								V.Names || (V.Names = []);
								var J = we(i[0]),
									Z = {
										Name: J.Name,
										Ref: uo(J.RefersTo.slice(1), {
											r: 0,
											c: 0
										})
									};
								V.Sheets.length > 0 && (Z.Sheet = V.Sheets.length - 1), V.Names.push(Z);
								break;
							case "namedcell":
							case "b":
							case "i":
							case "u":
							case "s":
							case "em":
							case "h2":
							case "h3":
							case "sub":
							case "sup":
							case "span":
							case "alignment":
							case "borders":
							case "border":
								break;
							case "font":
								if ("/>" === i[0].slice(-2)) break;
								"/" === i[1] ? T += r.slice(C, i.index) : C = i.index + i[0].length;
								break;
							case "interior":
								if (!n.cellStyles) break;
								E.Interior = Mu(i[0]);
								break;
							case "protection":
								break;
							case "author":
							case "title":
							case "description":
							case "created":
							case "keywords":
							case "subject":
							case "category":
							case "company":
							case "lastauthor":
							case "lastsaved":
							case "lastprinted":
							case "version":
							case "revision":
							case "totaltime":
							case "hyperlinkbase":
							case "manager":
							case "contentstatus":
							case "identifier":
							case "language":
							case "appname":
								if ("/>" === i[0].slice(-2)) break;
								"/" === i[1] ? br(k, Q, r.slice(x, i.index)) : x = i.index + i[0].length;
								break;
							case "paragraphs":
								break;
							case "styles":
							case "workbook":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
								} else c.push([i[3], !1]);
								break;
							case "comment":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"));
									Ru(B), L.push(B)
								} else c.push([i[3], !1]), B = {
									a: (s = Mu(i[0])).Author
								};
								break;
							case "autofilter":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
								} else if ("/" !== i[0].charAt(i[0].length - 2)) {
									var ee = Mu(i[0]);
									d["!autofilter"] = {
										ref: uo(ee.Range).replace(/\$/g, "")
									}, c.push([i[3], !0])
								}
								break;
							case "name":
								break;
							case "datavalidation":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
								} else "/" !== i[0].charAt(i[0].length - 2) && c.push([i[3], !0]);
								break;
							case "pixelsperinch":
								break;
							case "componentoptions":
							case "documentproperties":
							case "customdocumentproperties":
							case "officedocumentsettings":
							case "pivottable":
							case "pivotcache":
							case "names":
							case "mapinfo":
							case "pagebreaks":
							case "querytable":
							case "sorting":
							case "schema":
							case "conditionalformatting":
							case "smarttagtype":
							case "smarttags":
							case "excelworkbook":
							case "workbookoptions":
							case "worksheetoptions":
								if ("/" === i[1]) {
									if ((s = c.pop())[0] !== i[3]) throw new Error("Bad state: " + s.join("|"))
								} else "/" !== i[0].charAt(i[0].length - 2) && c.push([i[3], !0]);
								break;
							default:
								if (0 == c.length && "document" == i[3]) return Ec(r, n);
								if (0 == c.length && "uof" == i[3]) return Ec(r, n);
								var te = !0;
								switch (c[c.length - 1][0]) {
									case "officedocumentsettings":
										switch (i[3]) {
											case "allowpng":
											case "removepersonalinformation":
											case "downloadcomponents":
											case "locationofcomponents":
											case "colors":
											case "color":
											case "index":
											case "rgb":
											case "targetscreensize":
											case "readonlyrecommended":
												break;
											default:
												te = !1
										}
										break;
									case "componentoptions":
										switch (i[3]) {
											case "toolbar":
											case "hideofficelogo":
											case "spreadsheetautofit":
											case "label":
											case "caption":
											case "maxheight":
											case "maxwidth":
											case "nextsheetnumber":
												break;
											default:
												te = !1
										}
										break;
									case "excelworkbook":
										switch (i[3]) {
											case "date1904":
												V.WBProps.date1904 = !0;
												break;
											case "windowheight":
											case "windowwidth":
											case "windowtopx":
											case "windowtopy":
											case "tabratio":
											case "protectstructure":
											case "protectwindow":
											case "protectwindows":
											case "activesheet":
											case "displayinknotes":
											case "firstvisiblesheet":
											case "supbook":
											case "sheetname":
											case "sheetindex":
											case "sheetindexfirst":
											case "sheetindexlast":
											case "dll":
											case "acceptlabelsinformulas":
											case "donotsavelinkvalues":
											case "iteration":
											case "maxiterations":
											case "maxchange":
											case "path":
											case "xct":
											case "count":
											case "selectedsheets":
											case "calculation":
											case "uncalced":
											case "startupprompt":
											case "crn":
											case "externname":
											case "formula":
											case "colfirst":
											case "collast":
											case "wantadvise":
											case "boolean":
											case "error":
											case "text":
											case "ole":
											case "noautorecover":
											case "publishobjects":
											case "donotcalculatebeforesave":
											case "number":
											case "refmoder1c1":
											case "embedsavesmarttags":
												break;
											default:
												te = !1
										}
										break;
									case "workbookoptions":
										switch (i[3]) {
											case "owcversion":
											case "height":
											case "width":
												break;
											default:
												te = !1
										}
										break;
									case "worksheetoptions":
										switch (i[3]) {
											case "visible":
												if ("/>" === i[0].slice(-2));
												else if ("/" === i[1]) switch (r.slice(x, i.index)) {
													case "SheetHidden":
														z.Hidden = 1;
														break;
													case "SheetVeryHidden":
														z.Hidden = 2
												} else x = i.index + i[0].length;
												break;
											case "header":
												d["!margins"] || bs(d["!margins"] = {}, "xlml"), d["!margins"].header = we(i[0]).Margin;
												break;
											case "footer":
												d["!margins"] || bs(d["!margins"] = {}, "xlml"), d["!margins"].footer = we(i[0]).Margin;
												break;
											case "pagemargins":
												var ne = we(i[0]);
												d["!margins"] || bs(d["!margins"] = {}, "xlml"), ne.Top && (d["!margins"].top = ne.Top), ne.Left && (d["!margins"].left = ne.Left), ne.Right && (d["!margins"].right = ne.Right), ne.Bottom && (d["!margins"].bottom = ne.Bottom);
												break;
											case "displayrighttoleft":
												V.Views || (V.Views = []), V.Views[0] || (V.Views[0] = {}), V.Views[0].RTL = !0;
												break;
											case "freezepanes":
											case "frozennosplit":
												break;
											case "splithorizontal":
											case "splitvertical":
											case "donotdisplaygridlines":
											case "activerow":
											case "activecol":
											case "toprowbottompane":
											case "leftcolumnrightpane":
											case "unsynced":
											case "print":
											case "panes":
											case "scale":
											case "pane":
											case "number":
											case "layout":
											case "pagesetup":
											case "selected":
											case "protectobjects":
											case "enableselection":
											case "protectscenarios":
											case "validprinterinfo":
											case "horizontalresolution":
											case "verticalresolution":
											case "numberofcopies":
											case "activepane":
											case "toprowvisible":
											case "leftcolumnvisible":
											case "fittopage":
											case "rangeselection":
											case "papersizeindex":
											case "pagelayoutzoom":
											case "pagebreakzoom":
											case "filteron":
											case "fitwidth":
											case "fitheight":
											case "commentslayout":
											case "zoom":
											case "lefttoright":
											case "gridlines":
											case "allowsort":
											case "allowfilter":
											case "allowinsertrows":
											case "allowdeleterows":
											case "allowinsertcols":
											case "allowdeletecols":
											case "allowinserthyperlinks":
											case "allowformatcells":
											case "allowsizecols":
											case "allowsizerows":
											case "nosummaryrowsbelowdetail":
											case "tabcolorindex":
											case "donotdisplayheadings":
											case "showpagelayoutzoom":
											case "nosummarycolumnsrightdetail":
											case "blackandwhite":
											case "donotdisplayzeros":
											case "displaypagebreak":
											case "rowcolheadings":
											case "donotdisplayoutline":
											case "noorientation":
											case "allowusepivottables":
											case "zeroheight":
											case "viewablerange":
											case "selection":
											case "protectcontents":
												break;
											default:
												te = !1
										}
										break;
									case "pivottable":
									case "pivotcache":
										switch (i[3]) {
											case "immediateitemsondrop":
											case "showpagemultipleitemlabel":
											case "compactrowindent":
											case "location":
											case "pivotfield":
											case "orientation":
											case "layoutform":
											case "layoutsubtotallocation":
											case "layoutcompactrow":
											case "position":
											case "pivotitem":
											case "datatype":
											case "datafield":
											case "sourcename":
											case "parentfield":
											case "ptlineitems":
											case "ptlineitem":
											case "countofsameitems":
											case "item":
											case "itemtype":
											case "ptsource":
											case "cacheindex":
											case "consolidationreference":
											case "filename":
											case "reference":
											case "nocolumngrand":
											case "norowgrand":
											case "blanklineafteritems":
											case "hidden":
											case "subtotal":
											case "basefield":
											case "mapchilditems":
											case "function":
											case "refreshonfileopen":
											case "printsettitles":
											case "mergelabels":
											case "defaultversion":
											case "refreshname":
											case "refreshdate":
											case "refreshdatecopy":
											case "versionlastrefresh":
											case "versionlastupdate":
											case "versionupdateablemin":
											case "versionrefreshablemin":
											case "calculation":
												break;
											default:
												te = !1
										}
										break;
									case "pagebreaks":
										switch (i[3]) {
											case "colbreaks":
											case "colbreak":
											case "rowbreaks":
											case "rowbreak":
											case "colstart":
											case "colend":
											case "rowend":
												break;
											default:
												te = !1
										}
										break;
									case "autofilter":
										switch (i[3]) {
											case "autofiltercolumn":
											case "autofiltercondition":
											case "autofilterand":
											case "autofilteror":
												break;
											default:
												te = !1
										}
										break;
									case "querytable":
										switch (i[3]) {
											case "id":
											case "autoformatfont":
											case "autoformatpattern":
											case "querysource":
											case "querytype":
											case "enableredirections":
											case "refreshedinxl9":
											case "urlstring":
											case "htmltables":
											case "connection":
											case "commandtext":
											case "refreshinfo":
											case "notitles":
											case "nextid":
											case "columninfo":
											case "overwritecells":
											case "donotpromptforfile":
											case "textwizardsettings":
											case "source":
											case "number":
											case "decimal":
											case "thousandseparator":
											case "trailingminusnumbers":
											case "formatsettings":
											case "fieldtype":
											case "delimiters":
											case "tab":
											case "comma":
											case "autoformatname":
											case "versionlastedit":
											case "versionlastrefresh":
												break;
											default:
												te = !1
										}
										break;
									case "datavalidation":
										switch (i[3]) {
											case "range":
											case "type":
											case "min":
											case "max":
											case "sort":
											case "descending":
											case "order":
											case "casesensitive":
											case "value":
											case "errorstyle":
											case "errormessage":
											case "errortitle":
											case "inputmessage":
											case "inputtitle":
											case "combohide":
											case "inputhide":
											case "condition":
											case "qualifier":
											case "useblank":
											case "value1":
											case "value2":
											case "format":
											case "cellrangelist":
												break;
											default:
												te = !1
										}
										break;
									case "sorting":
									case "conditionalformatting":
										switch (i[3]) {
											case "range":
											case "type":
											case "min":
											case "max":
											case "sort":
											case "descending":
											case "order":
											case "casesensitive":
											case "value":
											case "errorstyle":
											case "errormessage":
											case "errortitle":
											case "cellrangelist":
											case "inputmessage":
											case "inputtitle":
											case "combohide":
											case "inputhide":
											case "condition":
											case "qualifier":
											case "useblank":
											case "value1":
											case "value2":
											case "format":
												break;
											default:
												te = !1
										}
										break;
									case "mapinfo":
									case "schema":
									case "data":
										switch (i[3]) {
											case "map":
											case "entry":
											case "range":
											case "xpath":
											case "field":
											case "xsdtype":
											case "filteron":
											case "aggregate":
											case "elementtype":
											case "attributetype":
												break;
											case "schema":
											case "element":
											case "complextype":
											case "datatype":
											case "all":
											case "attribute":
											case "extends":
											case "row":
												break;
											default:
												te = !1
										}
										break;
									case "smarttags":
										break;
									default:
										te = !1
								}
								if (te) break;
								if (i[3].match(/!\[CDATA/)) break;
								if (!c[c.length - 1][1]) throw "Unrecognized tag: " + i[3] + "|" + c.join("|");
								if ("customdocumentproperties" === c[c.length - 1][0]) {

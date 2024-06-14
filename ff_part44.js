							for (l[0].write_shift(4, e.length), s = 0; s < e.length; ++s) {
								var f = e[s][0];
								for ((u = Ut(8 + 2 * (f.length + 1) + (f.length % 2 ? 0 : 2))).write_shift(4, s + 2), u.write_shift(4, f.length + 1), u.write_shift(0, f, "dbcs"); u.l != u.length;) u.write_shift(1, 0);
								l.push(u)
							}
							u = O(l), a.unshift(u), o += 8 + u.length
						}
						for (s = 0; s < e.length; ++s)
							if ((!t || t[e[s][0]]) && !(Pr.indexOf(e[s][0]) > -1) && null != e[s][1]) {
								var d = e[s][1],
									h = 0;
								if (t) {
									var p = n[h = +t[e[s][0]]];
									if ("version" == p.p && "string" == typeof d) {
										var _ = d.split(".");
										d = (+_[0] << 16) + (+_[1] || 0)
									}
									u = Or(p.t, d)
								} else {
									var m = Mr(d); - 1 == m && (m = 31, d = String(d)), u = Or(m, d)
								}
								a.push(u), (c = Ut(8)).write_shift(4, t ? h : 2 + s), i.push(c), o += 8 + u.length
							} var b = 8 * (a.length + 1);
						for (s = 0; s < a.length; ++s) i[s].write_shift(4, b), b += a[s].length;
						return r.write_shift(4, o), r.write_shift(4, a.length), O([r].concat(i).concat(a))
					}

					function Lr(e, t, n) {
						var r = e.content;
						if (!r) return {};
						Rt(r, 0);
						var i, a, o, s, u = 0;
						r.chk("feff", "Byte Order: "), r.read_shift(2);
						var c = r.read_shift(4),
							l = r.read_shift(16);
						if (l !== F.utils.consts.HEADER_CLSID && l !== n) throw new Error("Bad PropertySet CLSID " + l);
						if (1 !== (i = r.read_shift(4)) && 2 !== i) throw new Error("Unrecognized #Sets: " + i);
						if (a = r.read_shift(16), s = r.read_shift(4), 1 === i && s !== r.l) throw new Error("Length mismatch: " + s + " !== " + r.l);
						2 === i && (o = r.read_shift(16), u = r.read_shift(4));
						var f, d = xr(r, t),
							h = {
								SystemIdentifier: c
							};
						for (var p in d) h[p] = d[p];
						if (h.FMTID = a, 1 === i) return h;
						if (u - r.l == 2 && (r.l += 2), r.l !== u) throw new Error("Length mismatch 2: " + r.l + " !== " + u);
						try {
							f = xr(r, null)
						} catch (e) {}
						for (p in f) h[p] = f[p];
						return h.FMTID = [a, o], h
					}

					function Dr(e, t, n, r, i, a) {
						var o = Ut(i ? 68 : 48),
							s = [o];
						o.write_shift(2, 65534), o.write_shift(2, 0), o.write_shift(4, 842412599), o.write_shift(16, F.utils.consts.HEADER_CLSID, "hex"), o.write_shift(4, i ? 2 : 1), o.write_shift(16, t, "hex"), o.write_shift(4, i ? 68 : 48);
						var u = Ir(e, n, r);
						if (s.push(u), i) {
							var c = Ir(i, null, null);
							o.write_shift(16, a, "hex"), o.write_shift(4, 68 + u.length), s.push(c)
						}
						return O(s)
					}

					function Br(e, t) {
						return e.read_shift(t), null
					}

					function Nr(e, t) {
						return 1 === e.read_shift(t)
					}

					function Rr(e, t) {
						return t || (t = Ut(2)), t.write_shift(2, +!!e), t
					}

					function Fr(e) {
						return e.read_shift(2, "u")
					}

					function Ur(e, t) {
						return t || (t = Ut(2)), t.write_shift(2, e), t
					}

					function jr(e, t) {
						return function(e, t, n) {
							for (var r = [], i = e.l + t; e.l < i;) r.push(n(e, i - e.l));
							if (i !== e.l) throw new Error("Slurp error");
							return r
						}(e, t, Fr)
					}

					function Hr(e, t, n) {
						var r = e.read_shift(n && n.biff >= 12 ? 2 : 1),
							i = "sbcs-cont",
							a = o;
						(n && n.biff >= 8 && (o = 1200), n && 8 != n.biff) ? 12 == n.biff && (i = "wstr"): e.read_shift(1) && (i = "dbcs-cont");
						n.biff >= 2 && n.biff <= 5 && (i = "cpstr");
						var s = r ? e.read_shift(r, i) : "";
						return o = a, s
					}

					function Yr(e) {
						var t = o;
						o = 1200;
						var n, r = e.read_shift(2),
							i = e.read_shift(1),
							a = 4 & i,
							s = 8 & i,
							u = 1 + (1 & i),
							c = 0,
							l = {};
						s && (c = e.read_shift(2)), a && (n = e.read_shift(4));
						var f = 2 == u ? "dbcs-cont" : "sbcs-cont",
							d = 0 === r ? "" : e.read_shift(r, f);
						return s && (e.l += 4 * c), a && (e.l += n), l.t = d, s || (l.raw = "<t>" + l.t + "</t>", l.r = l.t), o = t, l
					}

					function Vr(e) {
						var t = e.t || "",
							n = Ut(3);
						n.write_shift(2, t.length), n.write_shift(1, 1);
						var r = Ut(2 * t.length);
						return r.write_shift(2 * t.length, t, "utf16le"), O([n, r])
					}

					function zr(e, t, n) {
						if (n) {
							if (n.biff >= 2 && n.biff <= 5) return e.read_shift(t, "cpstr");
							if (n.biff >= 12) return e.read_shift(t, "dbcs-cont")
						}
						return 0 === e.read_shift(1) ? e.read_shift(t, "sbcs-cont") : e.read_shift(t, "dbcs-cont")
					}

					function Qr(e, t, n) {
						var r = e.read_shift(n && 2 == n.biff ? 1 : 2);
						return 0 === r ? (e.l++, "") : zr(e, r, n)
					}

					function Gr(e, t, n) {
						if (n.biff > 5) return Qr(e, 0, n);
						var r = e.read_shift(1);
						return 0 === r ? (e.l++, "") : e.read_shift(r, n.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont")
					}

					function qr(e, t, n) {
						return n || (n = Ut(3 + 2 * e.length)), n.write_shift(2, e.length), n.write_shift(1, 1), n.write_shift(31, e, "utf16le"), n
					}

					function Wr(e, t) {
						var n = e.read_shift(16);
						switch (16, n) {
							case "e0c9ea79f9bace118c8200aa004ba90b":
								return function(e) {
									var t = e.read_shift(4),
										n = e.l,
										r = !1;
									t > 24 && (e.l += t - 24, "795881f43b1d7f48af2c825dc4852763" === e.read_shift(16) && (r = !0), e.l = n);
									var i = e.read_shift((r ? t - 24 : t) >> 1, "utf16le").replace(x, "");
									return r && (e.l += 24), i
								}(e);
							case "0303000000000000c000000000000046":
								return function(e) {
									e.l += 2;
									var t = e.read_shift(0, "lpstr-ansi");
									if (e.l += 2, 57005 != e.read_shift(2)) throw new Error("Bad FileMoniker");
									if (0 === e.read_shift(4)) return t.replace(/\\/g, "/");
									var n = e.read_shift(4);
									if (3 != e.read_shift(2)) throw new Error("Bad FileMoniker");
									return e.read_shift(n >> 1, "utf16le").replace(x, "")
								}(e);
							default:
								throw new Error("Unsupported Moniker " + n)
						}
					}

					function Kr(e) {
						var t = e.read_shift(4);
						return t > 0 ? e.read_shift(t, "utf16le").replace(x, "") : ""
					}

					function Xr(e) {
						var t = Ut(512),
							n = 0,
							r = e.Target,
							i = r.indexOf("#") > -1 ? 31 : 23;
						switch (r.charAt(0)) {
							case "#":
								i = 28;
								break;
							case ".":
								i &= -3
						}
						t.write_shift(4, 2), t.write_shift(4, i);
						var a = [8, 6815827, 6619237, 4849780, 83];
						for (n = 0; n < a.length; ++n) t.write_shift(4, a[n]);
						if (28 == i) {
							for (r = r.slice(1), t.write_shift(4, r.length + 1), n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
							t.write_shift(2, 0)
						} else if (2 & i) {
							for (a = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < a.length; ++n) t.write_shift(1, parseInt(a[n], 16));
							for (t.write_shift(4, 2 * (r.length + 1)), n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
							t.write_shift(2, 0)
						} else {
							for (a = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), n = 0; n < a.length; ++n) t.write_shift(1, parseInt(a[n], 16));
							for (var o = 0;
								"../" == r.slice(3 * o, 3 * o + 3) || "..\\" == r.slice(3 * o, 3 * o + 3);) ++o;
							for (t.write_shift(2, o), t.write_shift(4, r.length + 1), n = 0; n < r.length; ++n) t.write_shift(1, 255 & r.charCodeAt(n));
							for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), n = 0; n < 6; ++n) t.write_shift(4, 0)
						}
						return t.slice(0, t.l)
					}

					function Jr(e) {
						return [e.read_shift(1), e.read_shift(1), e.read_shift(1), e.read_shift(1)]
					}

					function Zr(e, t) {
						var n = Jr(e);
						return n[3] = 0, n
					}

					function ei(e) {
						return {
							r: e.read_shift(2),
							c: e.read_shift(2),
							ixfe: e.read_shift(2)
						}
					}

					function ti(e, t, n, r) {
						return r || (r = Ut(6)), r.write_shift(2, e), r.write_shift(2, t), r.write_shift(2, n || 0), r
					}

					function ni(e, t, n) {
						var r = n.biff > 8 ? 4 : 2;
						return [e.read_shift(r), e.read_shift(r, "i"), e.read_shift(r, "i")]
					}

					function ri(e) {
						return [e.read_shift(2), En(e)]
					}

					function ii(e) {
						var t = e.read_shift(2),
							n = e.read_shift(2);
						return {
							s: {
								c: e.read_shift(2),
								r: t
							},
							e: {
								c: e.read_shift(2),
								r: n
							}
						}
					}

					function ai(e, t) {
						return t || (t = Ut(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t
					}

					function oi(e) {
						var t = e.read_shift(2),
							n = e.read_shift(2);
						return {
							s: {
								c: e.read_shift(1),
								r: t
							},
							e: {
								c: e.read_shift(1),
								r: n
							}
						}
					}
					var si = oi;

					function ui(e) {
						e.l += 4;
						var t = e.read_shift(2),
							n = e.read_shift(2),
							r = e.read_shift(2);
						return e.l += 12, [n, t, r]
					}

					function ci(e) {
						e.l += 2, e.l += e.read_shift(2)
					}
					var li = {
						0: ci,
						4: ci,
						5: ci,
						6: ci,
						7: function(e) {
							return e.l += 4, e.cf = e.read_shift(2), {}
						},
						8: ci,
						9: ci,
						10: ci,
						11: ci,
						12: ci,
						13: function(e) {
							var t = {};
							return e.l += 4, e.l += 16, t.fSharedNote = e.read_shift(2), e.l += 4, t
						},
						14: ci,
						15: ci,
						16: ci,
						17: ci,
						18: ci,
						19: ci,
						20: ci,
						21: ui
					};

					function fi(e, t) {
						var n = {
							BIFFVer: 0,
							dt: 0
						};
						switch (n.BIFFVer = e.read_shift(2), (t -= 2) >= 2 && (n.dt = e.read_shift(2), e.l -= 2), n.BIFFVer) {
							case 1536:
							case 1280:
							case 1024:
							case 768:
							case 512:
							case 2:
							case 7:
								break;
							default:
								if (t > 6) throw new Error("Unexpected BIFF Ver " + n.BIFFVer)
						}
						return e.read_shift(t), n
					}

					function di(e, t, n) {
						var r = 1536,
							i = 16;
						switch (n.bookType) {
							case "biff8":
								break;
							case "biff5":
								r = 1280, i = 8;
								break;
							case "biff4":
								r = 4, i = 6;
								break;
							case "biff3":
								r = 3, i = 6;
								break;
							case "biff2":
								r = 2, i = 4;
								break;
							case "xla":
								break;
							default:
								throw new Error("unsupported BIFF version")
						}
						var a = Ut(i);
						return a.write_shift(2, r), a.write_shift(2, t), i > 4 && a.write_shift(2, 29282), i > 6 && a.write_shift(2, 1997), i > 8 && (a.write_shift(2, 49161), a.write_shift(2, 1), a.write_shift(2, 1798), a.write_shift(2, 0)), a
					}

					function hi(e, t) {
						var n = !t || t.biff >= 8 ? 2 : 1,
							r = Ut(8 + n * e.name.length);
						r.write_shift(4, e.pos), r.write_shift(1, e.hs || 0), r.write_shift(1, e.dt), r.write_shift(1, e.name.length), t.biff >= 8 && r.write_shift(1, 1), r.write_shift(n * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
						var i = r.slice(0, r.l);
						return i.l = r.l, i
					}

					function pi(e, t, n) {
						var r = 0;
						n && 2 == n.biff || (r = e.read_shift(2));
						var i = e.read_shift(2);
						return n && 2 == n.biff && (r = 1 - (i >> 15), i &= 32767), [{
							Unsynced: 1 & r,
							DyZero: (2 & r) >> 1,
							ExAsc: (4 & r) >> 2,
							ExDsc: (8 & r) >> 3
						}, i]
					}

					function _i(e, t, n, r) {
						var i = n && 5 == n.biff;
						r || (r = Ut(i ? 3 + t.length : 5 + 2 * t.length)), r.write_shift(2, e), r.write_shift(i ? 1 : 2, t.length), i || r.write_shift(1, 1), r.write_shift((i ? 1 : 2) * t.length, t, i ? "sbcs" : "utf16le");
						var a = r.length > r.l ? r.slice(0, r.l) : r;
						return null == a.l && (a.l = a.length), a
					}
					var mi = Gr;

					function bi(e, t, n) {
						var r = e.l + t,
							i = 8 != n.biff && n.biff ? 2 : 4,
							a = e.read_shift(i),
							o = e.read_shift(i),
							s = e.read_shift(2),
							u = e.read_shift(2);
						return e.l = r, {
							s: {
								r: a,
								c: s
							},
							e: {
								r: o,
								c: u
							}
						}
					}

					function gi(e, t, n, r) {
						var i = n && 5 == n.biff;
						return r || (r = Ut(i ? 16 : 20)), r.write_shift(2, 0), e.style ? (r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 65524)) : (r.write_shift(2, e.numFmtId || 0), r.write_shift(2, t << 4)), r.write_shift(4, 0), r.write_shift(4, 0), i || r.write_shift(4, 0), r.write_shift(2, 0), r
					}

					function vi(e, t, n) {
						var r = ei(e);
						2 == n.biff && ++e.l;
						var i = function(e) {
							var t = e.read_shift(1);
							return 1 === e.read_shift(1) ? t : 1 === t
						}(e);
						return r.val = i, r.t = !0 === i || !1 === i ? "b" : "e", r
					}

					function yi(e, t, n, r, i, a) {
						var o = Ut(8);
						return ti(e, t, r, o),
							function(e, t, n) {
								n || (n = Ut(2)), n.write_shift(1, +e), n.write_shift(1, "e" == t ? 1 : 0)
							}(n, a, o), o
					}
					var Ai = function(e, t, n) {
						return 0 === t ? "" : Gr(e, 0, n)
					};

					function Si(e, t, n) {
						var r, i = e.read_shift(2),
							a = {
								fBuiltIn: 1 & i,
								fWantAdvise: i >>> 1 & 1,
								fWantPict: i >>> 2 & 1,
								fOle: i >>> 3 & 1,
								fOleLink: i >>> 4 & 1,
								cf: i >>> 5 & 1023,
								fIcon: i >>> 15 & 1
							};
						return 14849 === n.sbcch && (r = function(e, t, n) {
							e.l += 4, t -= 4;
							var r = e.l + t,
								i = Hr(e, 0, n),
								a = e.read_shift(2);
							if (a !== (r -= e.l)) throw new Error("Malformed AddinUdf: padding = " + r + " != " + a);
							return e.l += a, i
						}(e, t - 2, n)), a.body = r || e.read_shift(t - 2), "string" == typeof r && (a.Name = r), a
					}
					var wi = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];

					function Ei(e, t, n) {
						var r = e.l + t,
							i = e.read_shift(2),
							a = e.read_shift(1),
							o = e.read_shift(1),
							s = e.read_shift(n && 2 == n.biff ? 1 : 2),
							u = 0;
						(!n || n.biff >= 5) && (5 != n.biff && (e.l += 2), u = e.read_shift(2), 5 == n.biff && (e.l += 2), e.l += 4);
						var c = zr(e, o, n);
						32 & i && (c = wi[c.charCodeAt(0)]);
						var l = r - e.l;
						return n && 2 == n.biff && --l, {
							chKey: a,
							Name: c,
							itab: u,
							rgce: r != e.l && 0 !== s && l > 0 ? function(e, t, n, r) {
								var i, a = e.l + t,
									o = Ho(e, r, n);
								return a !== e.l && (i = jo(e, a - e.l, o, n)), [o, i]
							}(e, l, n, s) : []
						}
					}

					function Ti(e, t, n) {
						if (n.biff < 8) return function(e, t, n) {
							3 == e[e.l + 1] && e[e.l]++;
							var r = Hr(e, 0, n);
							return 3 == r.charCodeAt(0) ? r.slice(1) : r
						}(e, 0, n);
						for (var r = [], i = e.l + t, a = e.read_shift(n.biff > 8 ? 4 : 2); 0 != a--;) r.push(ni(e, n.biff, n));
						if (e.l != i) throw new Error("Bad ExternSheet: " + e.l + " != " + i);
						return r
					}

					function Ci(e, t, n) {
						var r = si(e, 6);
						switch (n.biff) {
							case 2:
								e.l++, t -= 7;
								break;
							case 3:
							case 4:
								e.l += 2, t -= 8;
								break;
							default:
								e.l += 6, t -= 12
						}
						return [r, Wo(e, t, n)]
					}
					var $i = [];

					function ki(e) {
						var t = Ut(24),
							n = Jt(e[0]);
						t.write_shift(2, n.r), t.write_shift(2, n.r), t.write_shift(2, n.c), t.write_shift(2, n.c);
						for (var r = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), i = 0; i < 16; ++i) t.write_shift(1, parseInt(r[i], 16));
						return O([t, Xr(e[1])])
					}

					function Oi(e) {
						var t = e[1].Tooltip,
							n = Ut(10 + 2 * (t.length + 1));
						n.write_shift(2, 2048);
						var r = Jt(e[0]);
						n.write_shift(2, r.r), n.write_shift(2, r.r), n.write_shift(2, r.c), n.write_shift(2, r.c);
						for (var i = 0; i < t.length; ++i) n.write_shift(2, t.charCodeAt(i));
						return n.write_shift(2, 0), n
					}

					function xi(e, t, n) {
						if (!n.cellStyles) return Ft(e, t);
						var r = n && n.biff >= 12 ? 4 : 2,
							i = e.read_shift(r),
							a = e.read_shift(r),
							o = e.read_shift(r),
							s = e.read_shift(r),
							u = e.read_shift(2);
						2 == r && (e.l += 2);
						var c = {
							s: i,
							e: a,
							w: o,
							ixfe: s,
							flags: u
						};
						return (n.biff >= 5 || !n.biff) && (c.level = u >> 8 & 7), c
					}
					$i[8] = function(e, t) {
						var n = e.l + t;
						e.l += 10;
						var r = e.read_shift(2);
						e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
						var i = e.read_shift(1);
						return e.l += i, e.l = n, {
							fmt: r
						}
					};
					var Pi = ei,
						Mi = jr,
						Ii = Qr,
						Li = function() {
							var e = {
									1: 437,
									2: 850,
									3: 1252,
									4: 1e4,
									100: 852,
									101: 866,
									102: 865,
									103: 861,
									104: 895,
									105: 620,
									106: 737,
									107: 857,
									120: 950,
									121: 949,
									122: 936,
									123: 932,
									124: 874,
									125: 1255,
									126: 1256,
									150: 10007,
									151: 10029,
									152: 10006,
									200: 1250,
									201: 1251,
									202: 1254,
									203: 1253,
									0: 20127,
									8: 865,
									9: 437,
									10: 850,
									11: 437,
									13: 437,
									14: 850,
									15: 437,
									16: 850,
									17: 437,
									18: 850,
									19: 932,
									20: 850,
									21: 437,
									22: 850,
									23: 865,
									24: 437,
									25: 437,
									26: 850,
									27: 437,
									28: 863,
									29: 850,
									31: 852,
									34: 852,
									35: 852,
									36: 860,
									37: 850,
									38: 866,
									55: 850,
									64: 852,
									77: 936,
									78: 949,
									79: 950,
									80: 874,
									87: 1252,
									88: 1252,
									89: 1252,
									255: 16969
								},
								t = V({
									1: 437,
									2: 850,
									3: 1252,
									4: 1e4,
									100: 852,
									101: 866,
									102: 865,
									103: 861,
									104: 895,
									105: 620,
									106: 737,
									107: 857,
									120: 950,
									121: 949,
									122: 936,
									123: 932,
									124: 874,
									125: 1255,
									126: 1256,
									150: 10007,
									151: 10029,
									152: 10006,
									200: 1250,
									201: 1251,
									202: 1254,
									203: 1253,
									0: 20127
								});

							function n(t, n) {
								var r = [],
									i = S(1);
								switch (n.type) {
									case "base64":
										i = E(g.decode(t));
										break;
									case "binary":
										i = E(t);
										break;
									case "buffer":
									case "array":
										i = t
								}
								Rt(i, 0);
								var a = i.read_shift(1),
									o = !1,
									s = !1,
									u = !1;
								switch (a) {
									case 2:
									case 3:
										break;
									case 48:
										s = !0, o = !0;
										break;
									case 49:
										s = !0;
										break;
									case 131:
									case 139:
										o = !0;
										break;
									case 140:
										o = !0, u = !0;
										break;
									case 245:
										o = !0;
										break;
									default:
										throw new Error("DBF Unsupported Version: " + a.toString(16))
								}
								var c = 0,
									l = 0;
								2 == a && (c = i.read_shift(2)), i.l += 3, 2 != a && (c = i.read_shift(4)), c > 1048576 && (c = 1e6), 2 != a && (l = i.read_shift(2));
								var f = i.read_shift(2),
									d = 1252;
								2 != a && (i.l += 16, i.read_shift(1), 0 !== i[i.l] && (d = e[i[i.l]]), i.l += 1, i.l += 2), u && (i.l += 36);
								for (var h = [], p = {}, _ = l - 10 - (s ? 264 : 0), m = u ? 32 : 11; 2 == a ? i.l < i.length && 13 != i[i.l] : i.l < _;) switch (p = {}, p.name = cptable.utils.decode(d, i.slice(i.l, i.l + m)).replace(/[\u0000\r\n].*$/g, ""), i.l += m, p.type = String.fromCharCode(i.read_shift(1)), 2 == a || u || (p.offset = i.read_shift(4)), p.len = i.read_shift(1), 2 == a && (p.offset = i.read_shift(2)), p.dec = i.read_shift(1), p.name.length && h.push(p), 2 != a && (i.l += u ? 13 : 14), p.type) {
									case "B":
										s && 8 == p.len || !n.WTF || (p.name, p.type);
										break;
									case "G":
									case "P":
										n.WTF && (p.name, p.type);
										break;
									case "C":
									case "D":
									case "F":
									case "I":
									case "L":
									case "M":
									case "N":
									case "O":
									case "T":
									case "Y":
									case "0":
									case "@":
									case "+":
										break;
									default:
										throw new Error("Unknown Field Type: " + p.type)
								}
								if (13 !== i[i.l] ? i.l = l - 1 : 2 == a && (i.l = 521), 2 != a) {
									if (13 !== i.read_shift(1)) throw new Error("DBF Terminator not found " + i.l + " " + i[i.l]);
									i.l = l
								}
								var b = 0,
									v = 0;
								for (r[0] = [], v = 0; v != h.length; ++v) r[0][v] = h[v].name;
								for (; c-- > 0;)
									if (42 !== i[i.l])
										for (++i.l, r[++b] = [], v = 0, v = 0; v != h.length; ++v) {
											var y = i.slice(i.l, i.l + h[v].len);
											i.l += h[v].len, Rt(y, 0);
											var A = cptable.utils.decode(d, y);
											switch (h[v].type) {
												case "C":
													r[b][v] = cptable.utils.decode(d, y), r[b][v] = r[b][v].trim();
													break;
												case "D":
													8 === A.length ? r[b][v] = new Date(+A.slice(0, 4), +A.slice(4, 6) - 1, +A.slice(6, 8)) : r[b][v] = A;
													break;
												case "F":
													r[b][v] = parseFloat(A.trim());
													break;
												case "+":
												case "I":
													r[b][v] = u ? 2147483648 ^ y.read_shift(-4, "i") : y.read_shift(4, "i");
													break;
												case "L":
													switch (A.toUpperCase()) {
														case "Y":
														case "T":
															r[b][v] = !0;
															break;
														case "N":
														case "F":
															r[b][v] = !1;
															break;
														case " ":
														case "?":
															r[b][v] = !1;
															break;
														default:
															throw new Error("DBF Unrecognized L:|" + A + "|")
													}
													break;
												case "M":
													if (!o) throw new Error("DBF Unexpected MEMO for type " + a.toString(16));
													r[b][v] = "##MEMO##" + (u ? parseInt(A.trim(), 10) : y.read_shift(4));
													break;
												case "N":
													r[b][v] = +A.replace(/\u0000/g, "").trim();
													break;
												case "@":
													r[b][v] = new Date(y.read_shift(-8, "f") - 621356832e5);
													break;
												case "T":
													r[b][v] = new Date(864e5 * (y.read_shift(4) - 2440588) + y.read_shift(4));
													break;
												case "Y":
													r[b][v] = y.read_shift(4, "i") / 1e4;
													break;
												case "O":
													r[b][v] = -y.read_shift(-8, "f");
													break;
												case "B":
													if (s && 8 == h[v].len) {
														r[b][v] = y.read_shift(8, "f");
														break
													}
													case "G":
													case "P":
														y.l += h[v].len;
														break;
													case "0":
														if ("_NullFlags" === h[v].name) break;
													default:
														throw new Error("DBF Unsupported data type " + h[v].type)
											}
										} else i.l += f;
								if (2 != a && i.l < i.length && 26 != i[i.l++]) throw new Error("DBF EOF Marker missing " + (i.l - 1) + " of " + i.length + " " + i[i.l - 1].toString(16));
								return n && n.sheetRows && (r = r.slice(0, n.sheetRows)), r
							}

							function r(e, t) {
								var r = t || {};
								return r.dateNF || (r.dateNF = "yyyymmdd"), sn(n(e, r), r)
							}
							var i = {
								B: 8,
								C: 250,
								L: 1,
								D: 8,
								"?": 0,
								"": 0
							};
							return {
								versions: [2, 3, 48, 49, 131, 139, 140, 245],
								to_workbook: function(e, t) {
									try {
										return an(r(e, t), t)
									} catch (e) {
										if (t && t.WTF) throw e
									}
									return {
										SheetNames: [],
										Sheets: {}
									}
								},
								to_sheet: r,
								from_sheet: function(e, n) {
									var r = n || {};
									if (+r.codepage >= 0 && d(+r.codepage), "string" == r.type) throw new Error("Cannot write DBF to JS string");
									var a = Ht(),
										o = ol(e, {
											header: 1,
											raw: !0,
											cellDates: !0
										}),
										u = o[0],
										c = o.slice(1),
										l = 0,
										f = 0,
										h = 0,
										p = 1;
									for (l = 0; l < u.length; ++l)
										if (null != l) {
											if (++h, "number" == typeof u[l] && (u[l] = u[l].toString(10)), "string" != typeof u[l]) throw new Error("DBF Invalid column name " + u[l] + " |" + typeof u[l] + "|");
											if (u.indexOf(u[l]) !== l)
												for (f = 0; f < 1024; ++f)
													if (-1 == u.indexOf(u[l] + "_" + f)) {
														u[l] += "_" + f;
														break
													}
										} var _ = nn(e["!ref"]),
										m = [];
									for (l = 0; l <= _.e.c - _.s.c; ++l) {
										var b = [];
										for (f = 0; f < c.length; ++f) null != c[f][l] && b.push(c[f][l]);
										if (0 != b.length && null != u[l]) {
											var g = "",
												v = "";
											for (f = 0; f < b.length; ++f) {
												switch (typeof b[f]) {
													case "number":
														v = "B";
														break;
													case "string":
														v = "C";
														break;
													case "boolean":
														v = "L";
														break;
													case "object":
														v = b[f] instanceof Date ? "D" : "C";
														break;
													default:
														v = "C"
												}
												if ("C" == (g = g && g != v ? "C" : v)) break
											}
											p += i[g] || 0, m[l] = g
										} else m[l] = "?"
									}
									var y = a.next(32);
									for (y.write_shift(4, 318902576), y.write_shift(4, c.length), y.write_shift(2, 296 + 32 * h), y.write_shift(2, p), l = 0; l < 4; ++l) y.write_shift(4, 0);
									for (y.write_shift(4, 0 | (+t[s] || 3) << 8), l = 0, f = 0; l < u.length; ++l)
										if (null != u[l]) {
											var A = a.next(32),
												S = (u[l].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
											A.write_shift(1, S, "sbcs"), A.write_shift(1, "?" == m[l] ? "C" : m[l], "sbcs"), A.write_shift(4, f), A.write_shift(1, i[m[l]] || 0), A.write_shift(1, 0), A.write_shift(1, 2), A.write_shift(4, 0), A.write_shift(1, 0), A.write_shift(4, 0), A.write_shift(4, 0), f += i[m[l]] || 0
										} var w = a.next(264);
									for (w.write_shift(4, 13), l = 0; l < 65; ++l) w.write_shift(4, 0);
									for (l = 0; l < c.length; ++l) {
										var E = a.next(p);
										for (E.write_shift(1, 0), f = 0; f < u.length; ++f)
											if (null != u[f]) switch (m[f]) {
												case "L":
													E.write_shift(1, null == c[l][f] ? 63 : c[l][f] ? 84 : 70);
													break;
												case "B":
													E.write_shift(8, c[l][f] || 0, "f");
													break;
												case "D":
													c[l][f] ? (E.write_shift(4, ("0000" + c[l][f].getFullYear()).slice(-4), "sbcs"), E.write_shift(2, ("00" + (c[l][f].getMonth() + 1)).slice(-2), "sbcs"), E.write_shift(2, ("00" + c[l][f].getDate()).slice(-2), "sbcs")) : E.write_shift(8, "00000000", "sbcs");
													break;
												case "C":
													var T = String(c[l][f] || "");
													for (E.write_shift(1, T, "sbcs"), h = 0; h < 250 - T.length; ++h) E.write_shift(1, 32)
											}
									}
									return a.next(1).write_shift(1, 26), a.end()
								}
							}
						}(),
						Di = function() {
							var e = {
									AA: "Ã€",
									BA: "Ã",
									CA: "Ã‚",
									DA: 195,
									HA: "Ã„",
									JA: 197,
									AE: "Ãˆ",
									BE: "Ã‰",
									CE: "ÃŠ",
									HE: "Ã‹",
									AI: "ÃŒ",
									BI: "Ã",
									CI: "ÃŽ",
									HI: "Ã",
									AO: "Ã’",
									BO: "Ã“",
									CO: "Ã”",
									DO: 213,
									HO: "Ã–",
									AU: "Ã™",
									BU: "Ãš",
									CU: "Ã›",
									HU: "Ãœ",
									Aa: "Ã ",
									Ba: "Ã¡",
									Ca: "Ã¢",
									Da: 227,
									Ha: "Ã¤",
									Ja: 229,
									Ae: "Ã¨",
									Be: "Ã©",
									Ce: "Ãª",
									He: "Ã«",
									Ai: "Ã¬",
									Bi: "Ã­",
									Ci: "Ã®",
									Hi: "Ã¯",
									Ao: "Ã²",
									Bo: "Ã³",
									Co: "Ã´",
									Do: 245,
									Ho: "Ã¶",
									Au: "Ã¹",
									Bu: "Ãº",
									Cu: "Ã»",
									Hu: "Ã¼",
									KC: "Ã‡",
									Kc: "Ã§",
									q: "Ã¦",
									z: "Å“",
									a: "Ã†",
									j: "Å’",
									DN: 209,
									Dn: 241,
									Hy: 255,
									S: 169,
									c: 170,
									R: 174,
									B: 180,
									0: 176,
									1: 177,
									2: 178,
									3: 179,
									5: 181,
									6: 182,
									7: 183,
									Q: 185,
									k: 186,
									b: 208,
									i: 216,
									l: 222,
									s: 240,
									y: 248,
									"!": 161,
									'"': 162,
									"#": 163,
									"(": 164,
									"%": 165,
									"'": 167,
									"H ": 168,
									"+": 171,
									";": 187,
									"<": 188,
									"=": 189,
									">": 190,
									"?": 191,
									"{": 223
								},
								t = new RegExp("N(" + H(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"),
								n = function(t, n) {
									var r = e[n];
									return "number" == typeof r ? b(r) : r
								},
								r = function(e, t, n) {
									var r = t.charCodeAt(0) - 32 << 4 | n.charCodeAt(0) - 48;
									return 59 == r ? e : b(r)
								};

							function i(e, t) {
								switch (t.type) {
									case "base64":
										return a(g.decode(e), t);
									case "binary":
										return a(e, t);
									case "buffer":
										return a(e.toString("binary"), t);
									case "array":
										return a(ne(e), t)
								}
								throw new Error("Unrecognized type " + t.type)
							}

							function a(e, i) {
								var a, o = e.split(/[\n\r]+/),
									s = -1,
									u = -1,
									c = 0,
									l = 0,
									f = [],
									h = [],
									p = null,
									_ = {},
									m = [],
									b = [],
									g = [],
									v = 0;
								for (+i.codepage >= 0 && d(+i.codepage); c !== o.length; ++c) {
									v = 0;
									var y, A = o[c].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, r).replace(t, n),
										S = A.replace(/;;/g, "\0").split(";").map((function(e) {
											return e.replace(/\u0000/g, ";")
										})),
										w = S[0];
									if (A.length > 0) switch (w) {
										case "ID":
										case "E":
										case "B":
										case "O":
											break;
										case "P":
											"P" == S[1].charAt(0) && h.push(A.slice(3).replace(/;;/g, ";"));
											break;
										case "C":
											var E = !1,
												T = !1;
											for (l = 1; l < S.length; ++l) switch (S[l].charAt(0)) {
												case "X":
													u = parseInt(S[l].slice(1)) - 1, T = !0;
													break;
												case "Y":
													for (s = parseInt(S[l].slice(1)) - 1, T || (u = 0), a = f.length; a <= s; ++a) f[a] = [];
													break;
												case "K":
													'"' === (y = S[l].slice(1)).charAt(0) ? y = y.slice(1, y.length - 1) : "TRUE" === y ? y = !0 : "FALSE" === y ? y = !1 : isNaN(ae(y)) ? isNaN(oe(y).getDate()) || (y = te(y)) : (y = ae(y), null !== p && M.is_date(p) && (y = X(y))), "undefined" != typeof cptable && "string" == typeof y && "string" != (i || {}).type && (i || {}).codepage && (y = cptable.utils.decode(i.codepage, y)), E = !0;
													break;
												case "E":
													var C = uo(S[l].slice(1), {
														r: s,
														c: u
													});
													f[s][u] = [f[s][u], C];
													break;
												default:
													if (i && i.WTF) throw new Error("SYLK bad record " + A)
											}
											E && (f[s][u] = y, p = null);
											break;
										case "F":
											var $ = 0;
											for (l = 1; l < S.length; ++l) switch (S[l].charAt(0)) {
												case "X":
													u = parseInt(S[l].slice(1)) - 1, ++$;
													break;
												case "Y":
													for (s = parseInt(S[l].slice(1)) - 1, a = f.length; a <= s; ++a) f[a] = [];
													break;
												case "M":
													v = parseInt(S[l].slice(1)) / 20;
													break;
												case "F":
												case "G":
													break;
												case "P":
													p = h[parseInt(S[l].slice(1))];
													break;
												case "S":
												case "D":
												case "N":
													break;
												case "W":
													for (g = S[l].slice(1).split(" "), a = parseInt(g[0], 10); a <= parseInt(g[1], 10); ++a) v = parseInt(g[2], 10), b[a - 1] = 0 === v ? {
														hidden: !0
													} : {
														wch: v
													}, Aa(b[a - 1]);
													break;
												case "C":
													b[u = parseInt(S[l].slice(1)) - 1] || (b[u] = {});
													break;
												case "R":
													m[s = parseInt(S[l].slice(1)) - 1] || (m[s] = {}), v > 0 ? (m[s].hpt = v, m[s].hpx = wa(v)) : 0 === v && (m[s].hidden = !0);
													break;
												default:
													if (i && i.WTF) throw new Error("SYLK bad record " + A)
											}
											$ < 1 && (p = null);
											break;
										default:
											if (i && i.WTF) throw new Error("SYLK bad record " + A)
									}
								}
								return m.length > 0 && (_["!rows"] = m), b.length > 0 && (_["!cols"] = b), i && i.sheetRows && (f = f.slice(0, i.sheetRows)), [f, _]
							}

							function o(e, t) {
								var n = i(e, t),
									r = n[0],
									a = n[1],
									o = sn(r, t);
								return H(a).forEach((function(e) {
									o[e] = a[e]
								})), o
							}

							function s(e, t, n, r) {
								var i = "C;Y" + (n + 1) + ";X" + (r + 1) + ";K";
								switch (e.t) {
									case "n":
										i += e.v || 0, e.f && !e.F && (i += ";E" + lo(e.f, {
											r: n,
											c: r
										}));
										break;
									case "b":
										i += e.v ? "TRUE" : "FALSE";
										break;
									case "e":
										i += e.w || e.v;
										break;
									case "d":
										i += '"' + (e.w || e.v) + '"';
										break;
									case "s":
										i += '"' + e.v.replace(/"/g, "") + '"'
								}
								return i
							}
							return e["|"] = 254, {
								to_workbook: function(e, t) {
									return an(o(e, t), t)
								},
								to_sheet: o,
								from_sheet: function(e, t) {
									var n, r = ["ID;PWXL;N;E"],
										i = [],
										a = nn(e["!ref"]),
										o = Array.isArray(e),
										u = "\r\n";
									r.push("P;PGeneral"), r.push("F;P0;DG0G8;M255"), e["!cols"] && function(e, t) {
										t.forEach((function(t, n) {
											var r = "F;W" + (n + 1) + " " + (n + 1) + " ";
											t.hidden ? r += "0" : ("number" == typeof t.width && (t.wpx = ma(t.width)), "number" == typeof t.wpx && (t.wch = ba(t.wpx)), "number" == typeof t.wch && (r += Math.round(t.wch))), " " != r.charAt(r.length - 1) && e.push(r)
										}))
									}(r, e["!cols"]), e["!rows"] && function(e, t) {
										t.forEach((function(t, n) {
											var r = "F;";
											t.hidden ? r += "M0;" : t.hpt ? r += "M" + 20 * t.hpt + ";" : t.hpx && (r += "M" + 20 * Sa(t.hpx) + ";"), r.length > 2 && e.push(r + "R" + (n + 1))
										}))
									}(r, e["!rows"]), r.push("B;Y" + (a.e.r - a.s.r + 1) + ";X" + (a.e.c - a.s.c + 1) + ";D" + [a.s.c, a.s.r, a.e.c, a.e.r].join(" "));
									for (var c = a.s.r; c <= a.e.r; ++c)
										for (var l = a.s.c; l <= a.e.c; ++l) {
											var f = Zt({
												r: c,
												c: l
											});
											(n = o ? (e[c] || [])[l] : e[f]) && (null != n.v || n.f && !n.F) && i.push(s(n, 0, c, l))
										}
									return r.join(u) + u + i.join(u) + u + "E" + u
								}
							}
						}(),
						Bi = function() {
							function e(e, n) {
								switch (n.type) {
									case "base64":
										return t(g.decode(e), n);
									case "binary":
										return t(e, n);
									case "buffer":
										return t(e.toString("binary"), n);
									case "array":
										return t(ne(e), n)
								}
								throw new Error("Unrecognized type " + n.type)
							}

							function t(e, t) {
								for (var n = e.split("\n"), r = -1, i = -1, a = 0, o = []; a !== n.length; ++a)
									if ("BOT" !== n[a].trim()) {
										if (!(r < 0)) {
											var s = n[a].trim().split(","),
												u = s[0],
												c = s[1],
												l = n[++a].trim();
											switch (+u) {
												case -1:
													if ("BOT" === l) {
														o[++r] = [], i = 0;
														continue
													}
													if ("EOD" !== l) throw new Error("Unrecognized DIF special command " + l);
													break;
												case 0:
													"TRUE" === l ? o[r][i] = !0 : "FALSE" === l ? o[r][i] = !1 : isNaN(ae(c)) ? isNaN(oe(c).getDate()) ? o[r][i] = c : o[r][i] = te(c) : o[r][i] = ae(c), ++i;
													break;
												case 1:
													l = l.slice(1, l.length - 1), o[r][i++] = "" !== l ? l : null
											}
											if ("EOD" === l) break
										}
									} else o[++r] = [], i = 0;
								return t && t.sheetRows && (o = o.slice(0, t.sheetRows)), o
							}

							function n(t, n) {
								return sn(e(t, n), n)
							}
							return {
								to_workbook: function(e, t) {
									return an(n(e, t), t)
								},
								to_sheet: n,
								from_sheet: function() {
									var e = function(e, t, n, r, i) {
											e.push(t), e.push(n + "," + r), e.push('"' + i.replace(/"/g, '""') + '"')
										},
										t = function(e, t, n, r) {
											e.push(t + "," + n), e.push(1 == t ? '"' + r.replace(/"/g, '""') + '"' : r)
										};
									return function(n) {
										var r, i = [],
											a = nn(n["!ref"]),
											o = Array.isArray(n);
										e(i, "TABLE", 0, 1, "sheetjs"), e(i, "VECTORS", 0, a.e.r - a.s.r + 1, ""), e(i, "TUPLES", 0, a.e.c - a.s.c + 1, ""), e(i, "DATA", 0, 0, "");
										for (var s = a.s.r; s <= a.e.r; ++s) {
											t(i, -1, 0, "BOT");
											for (var u = a.s.c; u <= a.e.c; ++u) {
												var c = Zt({
													r: s,
													c: u
												});
												if (r = o ? (n[s] || [])[u] : n[c]) switch (r.t) {
													case "n":
														var l = r.w;
														l || null == r.v || (l = r.v), null == l ? r.f && !r.F ? t(i, 1, 0, "=" + r.f) : t(i, 1, 0, "") : t(i, 0, l, "V");
														break;
													case "b":
														t(i, 0, r.v ? 1 : 0, r.v ? "TRUE" : "FALSE");
														break;
													case "s":
														t(i, 1, 0, isNaN(r.v) ? r.v : '="' + r.v + '"');
														break;
													case "d":
														r.w || (r.w = M.format(r.z || M._table[14], G(te(r.v)))), t(i, 0, r.w, "V");
														break;
													default:
														t(i, 1, 0, "")
												} else t(i, 1, 0, "")
											}
										}
										t(i, -1, 0, "EOD");
										return i.join("\r\n")
									}
								}()
							}
						}(),
						Ni = function() {
							function e(e) {
								return e.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n")
							}

							function t(e) {
								return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n")
							}

							function n(t, n) {
								for (var r = t.split("\n"), i = -1, a = -1, o = 0, s = []; o !== r.length; ++o) {
									var u = r[o].trim().split(":");
									if ("cell" === u[0]) {
										var c = Jt(u[1]);
										if (s.length <= c.r)
											for (i = s.length; i <= c.r; ++i) s[i] || (s[i] = []);
										switch (i = c.r, a = c.c, u[2]) {
											case "t":
												s[i][a] = e(u[3]);
												break;
											case "v":
												s[i][a] = +u[3];
												break;
											case "vtf":
												var l = u[u.length - 1];
											case "vtc":
												switch (u[3]) {
													case "nl":
														s[i][a] = !!+u[4];
														break;
													default:
														s[i][a] = +u[4]
												}
												"vtf" == u[2] && (s[i][a] = [s[i][a], l])
										}
									}
								}
								return n && n.sheetRows && (s = s.slice(0, n.sheetRows)), s
							}

							function r(e, t) {
								return sn(n(e, t), t)
							}
							var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n"),
								a = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n",
								o = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n"),
								s = "--SocialCalcSpreadsheetControlSave--";

							function u(e) {
								if (!e || !e["!ref"]) return "";
								for (var n, r = [], i = [], a = "", o = en(e["!ref"]), s = Array.isArray(e), u = o.s.r; u <= o.e.r; ++u)
									for (var c = o.s.c; c <= o.e.c; ++c)
										if (a = Zt({
												r: u,
												c: c
											}), (n = s ? (e[u] || [])[c] : e[a]) && null != n.v && "z" !== n.t) {
											switch (i = ["cell", a, "t"], n.t) {
												case "s":
												case "str":
													i.push(t(n.v));
													break;
												case "n":
													n.f ? (i[2] = "vtf", i[3] = "n", i[4] = n.v, i[5] = t(n.f)) : (i[2] = "v", i[3] = n.v);
													break;
												case "b":
													i[2] = "vt" + (n.f ? "f" : "c"), i[3] = "nl", i[4] = n.v ? "1" : "0", i[5] = t(n.f || (n.v ? "TRUE" : "FALSE"));
													break;
												case "d":
													var l = G(te(n.v));
													i[2] = "vtc", i[3] = "nd", i[4] = "" + l, i[5] = n.w || M.format(n.z || M._table[14], l);
													break;
												case "e":
													continue
											}
											r.push(i.join(":"))
										} return r.push("sheet:c:" + (o.e.c - o.s.c + 1) + ":r:" + (o.e.r - o.s.r + 1) + ":tvf:1"), r.push("valueformat:1:text-wiki"), r.join("\n")
							}
							return {
								to_workbook: function(e, t) {
									return an(r(e, t), t)
								},
								to_sheet: r,
								from_sheet: function(e) {
									return [i, a, o, a, u(e), s].join("\n")
								}
							}
						}(),
						Ri = function() {
							function e(e, t, n, r, i) {
								i.raw ? t[n][r] = e : "TRUE" === e ? t[n][r] = !0 : "FALSE" === e ? t[n][r] = !1 : "" === e || (isNaN(ae(e)) ? isNaN(oe(e).getDate()) ? t[n][r] = e : t[n][r] = te(e) : t[n][r] = ae(e))
							}

							function t(t, n) {
								var r = n || {},
									i = [];
								if (!t || 0 === t.length) return i;
								for (var a = t.split(/[\r\n]/), o = a.length - 1; o >= 0 && 0 === a[o].length;) --o;
								for (var s = 10, u = 0, c = 0; c <= o; ++c) - 1 == (u = a[c].indexOf(" ")) ? u = a[c].length : u++, s = Math.max(s, u);
								for (c = 0; c <= o; ++c) {
									i[c] = [];
									var l = 0;
									for (e(a[c].slice(0, s).trim(), i, c, l, r), l = 1; l <= (a[c].length - s) / 10 + 1; ++l) e(a[c].slice(s + 10 * (l - 1), s + 10 * l).trim(), i, c, l, r)
								}
								return r.sheetRows && (i = i.slice(0, r.sheetRows)), i
							}
							var n = {
									44: ",",
									9: "\t",
									59: ";"
								},
								r = {
									44: 3,
									9: 2,
									59: 1
								};

							function i(e) {
								for (var t = {}, i = !1, a = 0, o = 0; a < e.length; ++a) 34 == (o = e.charCodeAt(a)) ? i = !i : !i && o in n && (t[o] = (t[o] || 0) + 1);
								for (a in o = [], t) Object.prototype.hasOwnProperty.call(t, a) && o.push([t[a], a]);
								if (!o.length)
									for (a in t = r) Object.prototype.hasOwnProperty.call(t, a) && o.push([t[a], a]);
								return o.sort((function(e, t) {
									return e[0] - t[0] || r[e[1]] - r[t[1]]
								})), n[o.pop()[1]]
							}

							function a(e, t) {
								var n = t || {},
									r = "",
									a = n.dense ? [] : {},
									o = {
										s: {
											c: 0,
											r: 0
										},
										e: {
											c: 0,
											r: 0
										}
									};
								"sep=" == e.slice(0, 4) ? 13 == e.charCodeAt(5) && 10 == e.charCodeAt(6) ? (r = e.charAt(4), e = e.slice(7)) : 13 != e.charCodeAt(5) && 10 != e.charCodeAt(5) || (r = e.charAt(4), e = e.slice(6)) : r = i(e.slice(0, 1024));
								var s = 0,
									u = 0,
									c = 0,
									l = 0,
									f = 0,
									d = r.charCodeAt(0),
									h = !1,
									p = 0;
								e = e.replace(/\r\n/gm, "\n");
								var _ = null != n.dateNF ? function(e) {
									var t = "number" == typeof e ? M._table[e] : e;
									return t = t.replace(N, "(\\d+)"), new RegExp("^" + t + "$")
								}(n.dateNF) : null;

								function m() {
									var t = e.slice(l, f),
										r = {};
									if ('"' == t.charAt(0) && '"' == t.charAt(t.length - 1) && (t = t.slice(1, -1).replace(/""/g, '"')), 0 === t.length) r.t = "z";
									else if (n.raw) r.t = "s", r.v = t;
									else if (0 === t.trim().length) r.t = "s", r.v = t;
									else if (61 == t.charCodeAt(0)) 34 == t.charCodeAt(1) && 34 == t.charCodeAt(t.length - 1) ? (r.t = "s", r.v = t.slice(2, -1).replace(/""/g, '"')) : function(e) {
										return 1 != e.length
									}(t) ? (r.t = "n", r.f = t.slice(1)) : (r.t = "s", r.v = t);
									else if ("TRUE" == t) r.t = "b", r.v = !0;
									else if ("FALSE" == t) r.t = "b", r.v = !1;
									else if (isNaN(c = ae(t)))
										if (!isNaN(oe(t).getDate()) || _ && t.match(_)) {
											r.z = n.dateNF || M._table[14];
											var i = 0;
											_ && t.match(_) && (t = function(e, t, n) {
												var r = -1,
													i = -1,
													a = -1,
													o = -1,
													s = -1,
													u = -1;
												(t.match(N) || []).forEach((function(e, t) {
													var c = parseInt(n[t + 1], 10);
													switch (e.toLowerCase().charAt(0)) {
														case "y":
															r = c;
															break;
														case "d":
															a = c;
															break;
														case "h":
															o = c;
															break;
														case "s":
															u = c;
															break;
														case "m":
															o >= 0 ? s = c : i = c
													}
												})), u >= 0 && -1 == s && i >= 0 && (s = i, i = -1);
												var c = ("" + (r >= 0 ? r : (new Date).getFullYear())).slice(-4) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2);
												7 == c.length && (c = "0" + c), 8 == c.length && (c = "20" + c);
												var l = ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (u >= 0 ? u : 0)).slice(-2);
												return -1 == o && -1 == s && -1 == u ? c : -1 == r && -1 == i && -1 == a ? l : c + "T" + l
											}(0, n.dateNF, t.match(_) || []), i = 1), n.cellDates ? (r.t = "d", r.v = te(t, i)) : (r.t = "n", r.v = G(te(t, i))), !1 !== n.cellText && (r.w = M.format(r.z, r.v instanceof Date ? G(r.v) : r.v)), n.cellNF || delete r.z
										} else r.t = "s", r.v = t;
									else r.t = "n", !1 !== n.cellText && (r.w = t), r.v = c;
									if ("z" == r.t || (n.dense ? (a[s] || (a[s] = []), a[s][u] = r) : a[Zt({
											c: u,
											r: s
										})] = r), l = f + 1, o.e.c < u && (o.e.c = u), o.e.r < s && (o.e.r = s), p == d) ++u;
									else if (u = 0, ++s, n.sheetRows && n.sheetRows <= s) return !0
								}
								e: for (; f < e.length; ++f) switch (p = e.charCodeAt(f)) {
									case 34:
										h = !h;
										break;
									case d:
									case 10:
									case 13:
										if (!h && m()) break e
								}
								return f - l > 0 && m(), a["!ref"] = tn(o), a
							}

							function o(e, n) {
								return n && n.PRN ? "sep=" == e.slice(0, 4) || e.indexOf("\t") >= 0 || e.indexOf(",") >= 0 || e.indexOf(";") >= 0 ? a(e, n) : sn(t(e, n), n) : a(e, n)
							}

							function s(e, t) {
								var n = "",
									r = "string" == t.type ? [0, 0, 0, 0] : Gc(e, t);
								switch (t.type) {
									case "base64":
										n = g.decode(e);
										break;
									case "binary":
										n = e;
										break;
									case "buffer":
										n = 65001 == t.codepage ? e.toString("utf8") : t.codepage && "undefined" != typeof cptable ? cptable.utils.decode(t.codepage, e) : e.toString("binary");
										break;
									case "array":
										n = ne(e);
										break;
									case "string":
										n = e;
										break;
									default:
										throw new Error("Unrecognized type " + t.type)
								}
								return 239 == r[0] && 187 == r[1] && 191 == r[2] ? n = Ne(n.slice(3)) : "binary" == t.type && "undefined" != typeof cptable && t.codepage && (n = cptable.utils.decode(t.codepage, cptable.utils.encode(1252, n))), "socialcalc:version:" == n.slice(0, 19) ? Ni.to_sheet("string" == t.type ? n : Ne(n), t) : o(n, t)
							}
							return {
								to_workbook: function(e, t) {
									return an(s(e, t), t)
								},
								to_sheet: s,
								from_sheet: function(e) {
									for (var t, n = [], r = nn(e["!ref"]), i = Array.isArray(e), a = r.s.r; a <= r.e.r; ++a) {
										for (var o = [], s = r.s.c; s <= r.e.c; ++s) {
											var u = Zt({
												r: a,
												c: s
											});
											if ((t = i ? (e[a] || [])[s] : e[u]) && null != t.v) {
												for (var c = (t.w || (rn(t), t.w) || "").slice(0, 10); c.length < 10;) c += " ";
												o.push(c + (0 === s ? " " : ""))
											} else o.push("          ")
										}
										n.push(o.join(""))
									}
									return n.join("\n")
								}
							}
						}(),
						Fi = function() {
							function e(e, t) {
								if (!e) return e;
								var n = t || {},
									r = n.dense ? [] : {},
									i = "Sheet1",
									a = 0,
									u = {},
									c = [i],
									l = {
										s: {
											r: 0,
											c: 0
										},
										e: {
											r: 0,
											c: 0
										}
									},
									f = n.sheetRows || 0;
								if (2 == e[2]) n.Enum = o;
								else if (26 == e[2]) n.Enum = s;
								else {
									if (14 != e[2]) throw new Error("Unrecognized LOTUS BOF " + e[2]);
									n.Enum = s, n.qpro = !0, e.l = 0
								}
								return function(e, t, n) {
									if (e) {
										Rt(e, e.l || 0);
										for (var r = n.Enum || o; e.l < e.length;) {
											var i = e.read_shift(2),
												a = r[i] || r[255],
												s = e.read_shift(2),
												u = e.l + s,
												c = (a.f || Ft)(e, s, n);
											if (e.l = u, t(c, a.n, i)) return
										}
									}
								}(e, (function(t, o, s) {
									if (2 == e[2]) switch (s) {
										case 0:
											n.vers = t, t >= 4096 && (n.qpro = !0);
											break;
										case 6:
											l = t;
											break;
										case 15:
											n.qpro || (t[1].v = t[1].v.slice(1));
										case 13:
										case 14:
										case 16:
										case 51:
											14 == s && 112 == (112 & t[2]) && (15 & t[2]) > 1 && (15 & t[2]) < 15 && (t[1].z = n.dateNF || M._table[14], n.cellDates && (t[1].t = "d", t[1].v = X(t[1].v))), n.dense ? (r[t[0].r] || (r[t[0].r] = []), r[t[0].r][t[0].c] = t[1]) : r[Zt(t[0])] = t[1]
									} else switch (s) {
										case 22:
											t[1].v = t[1].v.slice(1);
										case 23:
										case 24:
										case 25:
										case 37:
										case 39:
										case 40:
											if (t[3] > a && (r["!ref"] = tn(l), u[i] = r, r = n.dense ? [] : {}, l = {
													s: {
														r: 0,
														c: 0
													},
													e: {
														r: 0,
														c: 0
													}
												}, a = t[3], i = "Sheet" + (a + 1), c.push(i)), f > 0 && t[0].r >= f) break;
											n.dense ? (r[t[0].r] || (r[t[0].r] = []), r[t[0].r][t[0].c] = t[1]) : r[Zt(t[0])] = t[1], l.e.c < t[0].c && (l.e.c = t[0].c), l.e.r < t[0].r && (l.e.r = t[0].r)
									}
								}), n), r["!ref"] = tn(l), u[i] = r, {
									SheetNames: c,
									Sheets: u
								}
							}

							function t(e, t, n) {
								var r = [{
									c: 0,
									r: 0
								}, {
									t: "n",
									v: 0
								}, 0];
								return n.qpro && 20768 != n.vers ? (r[0].c = e.read_shift(1), e.l++, r[0].r = e.read_shift(2), e.l += 2) : (r[2] = e.read_shift(1), r[0].c = e.read_shift(2), r[0].r = e.read_shift(2)), r
							}

							function n(e, n, r) {
								var i = e.l + n,
									a = t(e, 0, r);
								if (a[1].t = "s", 20768 == r.vers) {
									e.l++;
									var o = e.read_shift(1);
									return a[1].v = e.read_shift(o, "utf8"), a
								}
								return r.qpro && e.l++, a[1].v = e.read_shift(i - e.l, "cstr"), a
							}

							function r(e) {
								var t = [{
									c: 0,
									r: 0
								}, {
									t: "n",
									v: 0
								}, 0];
								return t[0].r = e.read_shift(2), t[3] = e[e.l++], t[0].c = e[e.l++], t
							}

							function i(e, t) {
								var n = r(e),
									i = e.read_shift(4),
									a = e.read_shift(4),
									o = e.read_shift(2);
								if (65535 == o) return n[1].v = 0, n;
								var s = 32768 & o;
								return o = (32767 & o) - 16446, n[1].v = (2 * s - 1) * ((o > 0 ? a << o : a >>> -o) + (o > -32 ? i << o + 32 : i >>> -(o + 32))), n
							}

							function a(e, t) {
								var n = r(e),
									i = e.read_shift(8, "f");
								return n[1].v = i, n
							}
							var o = {
									0: {
										n: "BOF",
										f: Fr
									},
									1: {
										n: "EOF"
									},
									2: {
										n: "CALCMODE"
									},
									3: {
										n: "CALCORDER"
									},
									4: {
										n: "SPLIT"
									},
									5: {
										n: "SYNC"
									},
									6: {
										n: "RANGE",
										f: function(e) {
											var t = {
												s: {
													c: 0,
													r: 0
												},
												e: {
													c: 0,
													r: 0
												}
											};
											return t.s.c = e.read_shift(2), t.s.r = e.read_shift(2), t.e.c = e.read_shift(2), t.e.r = e.read_shift(2), 65535 == t.s.c && (t.s.c = t.e.c = t.s.r = t.e.r = 0), t
										}
									},
									7: {
										n: "WINDOW1"
									},
									8: {
										n: "COLW1"
									},
									9: {
										n: "WINTWO"
									},
									10: {
										n: "COLW2"
									},
									11: {
										n: "NAME"
									},
									12: {
										n: "BLANK"
									},
									13: {
										n: "INTEGER",
										f: function(e, n, r) {
											var i = t(e, 0, r);
											return i[1].v = e.read_shift(2, "i"), i
										}
									},
									14: {
										n: "NUMBER",
										f: function(e, n, r) {
											var i = t(e, 0, r);
											return i[1].v = e.read_shift(8, "f"), i
										}
									},
									15: {
										n: "LABEL",
										f: n
									},
									16: {
										n: "FORMULA",
										f: function(e, n, r) {
											var i = e.l + n,
												a = t(e, 0, r);
											if (a[1].v = e.read_shift(8, "f"), r.qpro) e.l = i;
											else {
												var o = e.read_shift(2);
												e.l += o
											}
											return a
										}
									},
									24: {
										n: "TABLE"
									},
									25: {
										n: "ORANGE"
									},
									26: {
										n: "PRANGE"
									},
									27: {
										n: "SRANGE"
									},
									28: {
										n: "FRANGE"
									},
									29: {
										n: "KRANGE1"
									},
									32: {
										n: "HRANGE"
									},
									35: {
										n: "KRANGE2"
									},
									36: {
										n: "PROTEC"
									},
									37: {
										n: "FOOTER"
									},
									38: {
										n: "HEADER"
									},
									39: {
										n: "SETUP"
									},
									40: {
										n: "MARGINS"
									},
									41: {
										n: "LABELFMT"
									},
									42: {
										n: "TITLES"
									},
									43: {
										n: "SHEETJS"
									},
									45: {
										n: "GRAPH"
									},
									46: {
										n: "NGRAPH"
									},
									47: {
										n: "CALCCOUNT"
									},
									48: {
										n: "UNFORMATTED"
									},
									49: {
										n: "CURSORW12"
									},
									50: {
										n: "WINDOW"
									},
									51: {
										n: "STRING",
										f: n
									},
									55: {
										n: "PASSWORD"
									},
									56: {
										n: "LOCKED"
									},
									60: {
										n: "QUERY"
									},
									61: {
										n: "QUERYNAME"
									},
									62: {
										n: "PRINT"
									},
									63: {
										n: "PRINTNAME"
									},
									64: {
										n: "GRAPH2"
									},
									65: {
										n: "GRAPHNAME"
									},
									66: {
										n: "ZOOM"
									},
									67: {
										n: "SYMSPLIT"
									},
									68: {
										n: "NSROWS"
									},
									69: {
										n: "NSCOLS"
									},
									70: {
										n: "RULER"
									},
									71: {
										n: "NNAME"
									},
									72: {
										n: "ACOMM"
									},
									73: {
										n: "AMACRO"
									},
									74: {
										n: "PARSE"
									},
									255: {
										n: "",
										f: Ft
									}
								},
								s = {
									0: {
										n: "BOF"
									},
									1: {
										n: "EOF"
									},
									3: {
										n: "??"
									},
									4: {
										n: "??"
									},
									5: {
										n: "??"
									},
									6: {
										n: "??"
									},
									7: {
										n: "??"
									},
									9: {
										n: "??"
									},
									10: {
										n: "??"
									},
									11: {
										n: "??"
									},
									12: {
										n: "??"
									},
									14: {
										n: "??"
									},
									15: {
										n: "??"
									},
									16: {
										n: "??"
									},
									17: {
										n: "??"
									},
									18: {
										n: "??"
									},
									19: {
										n: "??"
									},
									21: {
										n: "??"
									},
									22: {
										n: "LABEL16",
										f: function(e, t) {
											var n = r(e);
											return n[1].t = "s", n[1].v = e.read_shift(t - 4, "cstr"), n
										}
									},
									23: {
										n: "NUMBER17",
										f: i
									},
									24: {
										n: "NUMBER18",
										f: function(e, t) {
											var n = r(e);
											n[1].v = e.read_shift(2);
											var i = n[1].v >> 1;
											if (1 & n[1].v) switch (7 & i) {
												case 1:
													i = 500 * (i >> 3);
													break;
												case 2:
													i = (i >> 3) / 20;
													break;
												case 4:
													i = (i >> 3) / 2e3;
													break;
												case 6:
													i = (i >> 3) / 16;
													break;
												case 7:
													i = (i >> 3) / 64;
													break;
												default:
													throw "unknown NUMBER_18 encoding " + (7 & i)
											}
											return n[1].v = i, n
										}
									},
									25: {
										n: "FORMULA19",
										f: function(e, t) {
											var n = i(e);
											return e.l += t - 14, n
										}
									},
									26: {
										n: "??"
									},
									27: {
										n: "??"
									},
									28: {
										n: "??"
									},
									29: {
										n: "??"
									},
									30: {
										n: "??"
									},
									31: {
										n: "??"
									},
									33: {
										n: "??"
									},
									37: {
										n: "NUMBER25",
										f: function(e, t) {
											var n = r(e),
												i = e.read_shift(4);
											return n[1].v = i >> 6, n
										}
									},
									39: {
										n: "NUMBER27",
										f: a
									},
									40: {
										n: "FORMULA28",
										f: function(e, t) {
											var n = a(e);
											return e.l += t - 10, n
										}
									},
									255: {
										n: "",
										f: Ft
									}
								};
							return {
								to_workbook: function(t, n) {
									switch (n.type) {
										case "base64":
											return e(E(g.decode(t)), n);
										case "binary":
											return e(E(t), n);
										case "buffer":
										case "array":
											return e(t, n)
									}
									throw "Unsupported type " + n.type
								}
							}
						}(),
						Ui = function() {
							var e = He("t"),
								t = He("rPr");

							function n(n) {
								var r = n.match(e);
								if (!r) return {
									t: "s",
									v: ""
								};
								var i = {
										t: "s",
										v: $e(r[1])
									},
									a = n.match(t);
								return a && (i.s = function(e) {
									var t = {},
										n = e.match(ye),
										r = 0,
										i = !1;
									if (n)
										for (; r != n.length; ++r) {
											var a = we(n[r]);
											switch (a[0].replace(/\w*:/g, "")) {
												case "<condense":
												case "<extend":
													break;
												case "<shadow":
													if (!a.val) break;
												case "<shadow>":
												case "<shadow/>":
													t.shadow = 1;
													break;
												case "</shadow>":
													break;
												case "<charset":
													if ("1" == a.val) break;
													t.cp = l[parseInt(a.val, 10)];
													break;
												case "<outline":
													if (!a.val) break;
												case "<outline>":
												case "<outline/>":
													t.outline = 1;
													break;
												case "</outline>":
													break;
												case "<rFont":
													t.name = a.val;
													break;
												case "<sz":
													t.sz = a.val;
													break;
												case "<strike":
													if (!a.val) break;
												case "<strike>":
												case "<strike/>":
													t.strike = 1;
													break;
												case "</strike>":
													break;
												case "<u":
													if (!a.val) break;
													switch (a.val) {
														case "double":
															t.uval = "double";
															break;
														case "singleAccounting":
															t.uval = "single-accounting";
															break;
														case "doubleAccounting":
															t.uval = "double-accounting"
													}
													case "<u>":
													case "<u/>":
														t.u = 1;
														break;
													case "</u>":
														break;
													case "<b":
														if ("0" == a.val) break;
													case "<b>":
													case "<b/>":
														t.b = 1;
														break;
													case "</b>":
														break;
													case "<i":
														if ("0" == a.val) break;
													case "<i>":
													case "<i/>":
														t.i = 1;
														break;
													case "</i>":
														break;
													case "<color":
														a.rgb && (t.color = a.rgb.slice(2, 8));
														break;
													case "<family":
														t.family = a.val;
														break;
													case "<vertAlign":
														t.valign = a.val;
														break;
													case "<scheme":
														break;
													case "<extLst":
													case "<extLst>":
													case "</extLst>":
														break;
													case "<ext":
														i = !0;
														break;
													case "</ext>":
														i = !1;
														break;
													default:
														if (47 !== a[0].charCodeAt(1) && !i) throw new Error("Unrecognized rich format " + a[0])
											}
										}
									return t
								}(a[1])), i
							}
							var r = /<(?:\w+:)?r>/g,
								i = /<\/(?:\w+:)?r>/;
							return function(e) {
								return e.replace(r, "").split(i).map(n).filter((function(e) {
									return e.v
								}))
							}
						}(),
						ji = function() {
							var e = /(\r\n|\n)/g;

							function t(t) {
								var n = [
									[], t.v, []
								];
								return t.v ? (t.s && function(e, t, n) {
									var r = [];
									e.u && r.push("text-decoration: underline;"), e.uval && r.push("text-underline-style:" + e.uval + ";"), e.sz && r.push("font-size:" + e.sz + "pt;"), e.outline && r.push("text-effect: outline;"), e.shadow && r.push("text-shadow: auto;"), t.push('<span style="' + r.join("") + '">'), e.b && (t.push("<b>"), n.push("</b>")), e.i && (t.push("<i>"), n.push("</i>")), e.strike && (t.push("<s>"), n.push("</s>"));
									var i = e.valign || "";
									"superscript" == i || "super" == i ? i = "sup" : "subscript" == i && (i = "sub"), "" != i && (t.push("<" + i + ">"), n.push("</" + i + ">")), n.push("</span>")
								}(t.s, n[0], n[2]), n[0].join("") + n[1].replace(e, "<br/>") + n[2].join("")) : ""
							}
							return function(e) {
								return e.map(t).join("")
							}
						}(),
						Hi = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
						Yi = /<(?:\w+:)?r>/,
						Vi = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;

					function zi(e, t) {
						var n = !t || t.cellHTML,
							r = {};
						return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (r.t = $e(Ne(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), r.r = Ne(e), n && (r.h = Ie(r.t))) : e.match(Yi) && (r.r = Ne(e), r.t = $e(Ne((e.replace(Vi, "").match(Hi) || []).join("").replace(ye, ""))), n && (r.h = ji(Ui(r.r)))), r) : {
							t: ""
						}
					}
					var Qi = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
						Gi = /<(?:\w+:)?(?:si|sstItem)>/g,
						qi = /<\/(?:\w+:)?(?:si|sstItem)>/;
					qn.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
					var Wi = /^\s|\s$|[\t\n\r]/;

					function Ki(e, t) {
						if (!t.bookSST) return "";
						var n = [ge];
						n[n.length] = Xe("sst", null, {
							xmlns: tt.main[0],
							count: e.Count,
							uniqueCount: e.Unique
						});
						for (var r = 0; r != e.length; ++r)
							if (null != e[r]) {
								var i = e[r],
									a = "<si>";
								i.r ? a += i.r : (a += "<t", i.t || (i.t = ""), i.t.match(Wi) && (a += ' xml:space="preserve"'), a += ">" + xe(i.t) + "</t>"), a += "</si>", n[n.length] = a
							} return n.length > 2 && (n[n.length] = "</sst>", n[1] = n[1].replace("/>", ">")), n.join("")
					}
					var Xi = function(e, t) {
						var n = !1;
						return null == t && (n = !0, t = Ut(15 + 4 * e.t.length)), t.write_shift(1, 0), ln(e.t, t), n ? t.slice(0, t.l) : t
					};

					function Ji(e) {
						var t = Ht();
						Yt(t, "BrtBeginSst", function(e, t) {
							return t || (t = Ut(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
						}(e));
						for (var n = 0; n < e.length; ++n) Yt(t, "BrtSSTItem", Xi(e[n]));
						return Yt(t, "BrtEndSst"), t.end()
					}

					function Zi(e) {
						if ("undefined" != typeof cptable) return cptable.utils.encode(s, e);
						for (var t = [], n = e.split(""), r = 0; r < n.length; ++r) t[r] = n[r].charCodeAt(0);
						return t
					}

					function ea(e, t) {
						var n = {};
						return n.Major = e.read_shift(2), n.Minor = e.read_shift(2), t >= 4 && (e.l += t - 4), n
					}

					function ta(e) {
						for (var t = e.read_shift(4), n = e.l + t - 4, r = {}, i = e.read_shift(4), a = []; i-- > 0;) a.push({
							t: e.read_shift(4),
							v: e.read_shift(0, "lpp4")
						});
						if (r.name = e.read_shift(0, "lpp4"), r.comps = a, e.l != n) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + n);
						return r
					}

					function na(e) {
						var t = function(e) {
							var t = {};
							return e.read_shift(4), e.l += 4, t.id = e.read_shift(0, "lpp4"), t.name = e.read_shift(0, "lpp4"), t.R = ea(e, 4), t.U = ea(e, 4), t.W = ea(e, 4), t
						}(e);
						if (t.ename = e.read_shift(0, "8lpp4"), t.blksz = e.read_shift(4), t.cmode = e.read_shift(4), 4 != e.read_shift(4)) throw new Error("Bad !Primary record");
						return t
					}

					function ra(e, t) {
						var n = e.l + t,
							r = {};
						r.Flags = 63 & e.read_shift(4), e.l += 4, r.AlgID = e.read_shift(4);
						var i = !1;
						switch (r.AlgID) {
							case 26126:
							case 26127:
							case 26128:
								i = 36 == r.Flags;
								break;
							case 26625:
								i = 4 == r.Flags;
								break;
							case 0:
								i = 16 == r.Flags || 4 == r.Flags || 36 == r.Flags;
								break;
							default:
								throw "Unrecognized encryption algorithm: " + r.AlgID
						}
						if (!i) throw new Error("Encryption Flags/AlgID mismatch");
						return r.AlgIDHash = e.read_shift(4), r.KeySize = e.read_shift(4), r.ProviderType = e.read_shift(4), e.l += 8, r.CSPName = e.read_shift(n - e.l >> 1, "utf16le"), e.l = n, r
					}

					function ia(e, t) {
						var n = {},
							r = e.l + t;
						return e.l += 4, n.Salt = e.slice(e.l, e.l + 16), e.l += 16, n.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), n.VerifierHash = e.slice(e.l, r), e.l = r, n
					}

					function aa(e) {
						if (36 != (63 & e.read_shift(4))) throw new Error("EncryptionInfo mismatch");
						var t = e.read_shift(4);
						return {
							t: "Std",
							h: ra(e, t),
							v: ia(e, e.length - e.l)
						}
					}

					function oa() {
						throw new Error("File is password-protected: ECMA-376 Extensible")
					}

					function sa(e) {
						var t = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
						e.l += 4;
						var n = e.read_shift(e.length - e.l, "utf8"),
							r = {};
						return n.replace(ye, (function(e) {
							var n = we(e);
							switch (Ee(n[0])) {
								case "<?xml":
									break;
								case "<encryption":
								case "</encryption>":
									break;
								case "<keyData":
									t.forEach((function(e) {
										r[e] = n[e]
									}));
									break;
								case "<dataIntegrity":
									r.encryptedHmacKey = n.encryptedHmacKey, r.encryptedHmacValue = n.encryptedHmacValue;
									break;
								case "<keyEncryptors>":
								case "<keyEncryptors":
									r.encs = [];
									break;
								case "</keyEncryptors>":
									break;
								case "<keyEncryptor":
									r.uri = n.uri;
									break;
								case "</keyEncryptor>":
									break;
								case "<encryptedKey":
									r.encs.push(n);
									break;
								default:
									throw n[0]
							}
						})), r
					}

					function ua(e) {
						var t, n, r = 0,
							i = Zi(e),
							a = i.length + 1;
						for ((t = S(a))[0] = i.length, n = 1; n != a; ++n) t[n] = i[n - 1];
						for (n = a - 1; n >= 0; --n) r = ((0 == (16384 & r) ? 0 : 1) | r << 1 & 32767) ^ t[n];
						return 52811 ^ r
					}
					var ca = function() {
							var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0],
								t = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163],
								n = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628],
								r = function(e, t) {
									return function(e) {
										return 255 & (e / 2 | 128 * e)
									}(e ^ t)
								},
								i = function(e) {
									for (var r = t[e.length - 1], i = 104, a = e.length - 1; a >= 0; --a)
										for (var o = e[a], s = 0; 7 != s; ++s) 64 & o && (r ^= n[i]), o *= 2, --i;
									return r
								};
							return function(t) {
								for (var n, a, o, s = Zi(t), u = i(s), c = s.length, l = S(16), f = 0; 16 != f; ++f) l[f] = 0;
								for (1 == (1 & c) && (n = u >> 8, l[c] = r(e[0], n), --c, n = 255 & u, a = s[s.length - 1], l[c] = r(a, n)); c > 0;) n = u >> 8, l[--c] = r(s[c], n), n = 255 & u, l[--c] = r(s[c], n);
								for (c = 15, o = 15 - s.length; o > 0;) n = u >> 8, l[c] = r(e[o], n), --o, n = 255 & u, l[--c] = r(s[c], n), --c, --o;
								return l
							}
						}(),
						la = function(e) {
							var t = 0,
								n = ca(e);
							return function(e) {
								var r = function(e, t, n, r, i) {
									var a, o;
									for (i || (i = t), r || (r = ca(e)), a = 0; a != t.length; ++a) o = t[a], o = 255 & ((o ^= r[n]) >> 5 | o << 3), i[a] = o, ++n;
									return [i, n, r]
								}("", e, t, n);
								return t = r[1], r[0]
							}
						};

					function fa(e, t, n) {
						var r = n || {};
						return r.Info = e.read_shift(2), e.l -= 2, 1 === r.Info ? r.Data = function(e) {
							var t = {},
								n = t.EncryptionVersionInfo = ea(e, 4);
							if (1 != n.Major || 1 != n.Minor) throw "unrecognized version code " + n.Major + " : " + n.Minor;
							return t.Salt = e.read_shift(16), t.EncryptedVerifier = e.read_shift(16), t.EncryptedVerifierHash = e.read_shift(16), t
						}(e) : r.Data = function(e, t) {
							var n = {},
								r = n.EncryptionVersionInfo = ea(e, 4);
							if (t -= 4, 2 != r.Minor) throw new Error("unrecognized minor version code: " + r.Minor);
							if (r.Major > 4 || r.Major < 2) throw new Error("unrecognized major version code: " + r.Major);
							n.Flags = e.read_shift(4), t -= 4;
							var i = e.read_shift(4);
							return t -= 4, n.EncryptionHeader = ra(e, i), t -= i, n.EncryptionVerifier = ia(e, t), n
						}(e, t), r
					}
					var da = function() {
						function e(e, n) {
							switch (n.type) {
								case "base64":
									return t(g.decode(e), n);
								case "binary":
									return t(e, n);
								case "buffer":
									return t(e.toString("binary"), n);
								case "array":
									return t(ne(e), n)
							}
							throw new Error("Unrecognized type " + n.type)
						}

						function t(e, t) {
							var n = (t || {}).dense ? [] : {};
							if (!e.match(/\\trowd/)) throw new Error("RTF missing table");
							return n["!ref"] = tn({
								s: {
									c: 0,
									r: 0
								},
								e: {
									c: 0,
									r: 0
								}
							}), n
						}
						return {
							to_workbook: function(t, n) {
								return an(e(t, n), n)
							},
							to_sheet: e,
							from_sheet: function(e) {
								for (var t, n = ["{\\rtf1\\ansi"], r = nn(e["!ref"]), i = Array.isArray(e), a = r.s.r; a <= r.e.r; ++a) {
									n.push("\\trowd\\trautofit1");
									for (var o = r.s.c; o <= r.e.c; ++o) n.push("\\cellx" + (o + 1));
									for (n.push("\\pard\\intbl"), o = r.s.c; o <= r.e.c; ++o) {
										var s = Zt({
											r: a,
											c: o
										});
										(t = i ? (e[a] || [])[o] : e[s]) && (null != t.v || t.f && !t.F) && (n.push(" " + (t.w || (rn(t), t.w))), n.push("\\cell"))
									}
									n.push("\\pard\\intbl\\row")
								}
								return n.join("") + "}"
							}
						}
					}();

					function ha(e) {
						for (var t = 0, n = 1; 3 != t; ++t) n = 256 * n + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
						return n.toString(16).toUpperCase().slice(1)
					}

					function pa(e, t) {
						if (0 === t) return e;
						var n = function(e) {
							var t = e[0] / 255,
								n = e[1] / 255,
								r = e[2] / 255,
								i = Math.max(t, n, r),
								a = Math.min(t, n, r),
								o = i - a;
							if (0 === o) return [0, 0, t];
							var s, u = 0,
								c = i + a;
							switch (s = o / (c > 1 ? 2 - c : c), i) {
								case t:
									u = ((n - r) / o + 6) % 6;
									break;
								case n:
									u = (r - t) / o + 2;
									break;
								case r:
									u = (t - n) / o + 4
							}
							return [u / 6, s, c / 2]
						}(function(e) {
							var t = e.slice("#" === e[0] ? 1 : 0).slice(0, 6);
							return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)]
						}(e));
						return n[2] = t < 0 ? n[2] * (1 + t) : 1 - (1 - n[2]) * (1 - t), ha(function(e) {
							var t, n = e[0],
								r = e[1],
								i = e[2],
								a = 2 * r * (i < .5 ? i : 1 - i),
								o = i - a / 2,
								s = [o, o, o],
								u = 6 * n;
							if (0 !== r) switch (0 | u) {
								case 0:
								case 6:
									t = a * u, s[0] += a, s[1] += t;
									break;
								case 1:
									t = a * (2 - u), s[0] += t, s[1] += a;
									break;
								case 2:
									t = a * (u - 2), s[1] += a, s[2] += t;
									break;
								case 3:
									t = a * (4 - u), s[1] += t, s[2] += a;
									break;
								case 4:
									t = a * (u - 4), s[2] += a, s[0] += t;
									break;
								case 5:
									t = a * (6 - u), s[2] += t, s[0] += a
							}
							for (var c = 0; 3 != c; ++c) s[c] = Math.round(255 * s[c]);
							return s
						}(n))
					}
					var _a = 6;

					function ma(e) {
						return Math.floor((e + Math.round(128 / _a) / 256) * _a)
					}

					function ba(e) {
						return Math.floor((e - 5) / _a * 100 + .5) / 100
					}

					function ga(e) {
						return Math.round((e * _a + 5) / _a * 256) / 256
					}

					function va(e) {
						return ga(ba(ma(e)))
					}

					function ya(e) {
						var t = Math.abs(e - va(e)),
							n = _a;
						if (t > .005)
							for (_a = 1; _a < 15; ++_a) Math.abs(e - va(e)) <= t && (t = Math.abs(e - va(e)), n = _a);
						_a = n
					}

					function Aa(e) {
						e.width ? (e.wpx = ma(e.width), e.wch = ba(e.wpx), e.MDW = _a) : e.wpx ? (e.wch = ba(e.wpx), e.width = ga(e.wch), e.MDW = _a) : "number" == typeof e.wch && (e.width = ga(e.wch), e.wpx = ma(e.width), e.MDW = _a), e.customWidth && delete e.customWidth
					}

					function Sa(e) {
						return 96 * e / 96
					}

					function wa(e) {
						return 96 * e / 96
					}
					var Ea = {
							None: "none",
							Solid: "solid",
							Gray50: "mediumGray",
							Gray75: "darkGray",
							Gray25: "lightGray",
							HorzStripe: "darkHorizontal",
							VertStripe: "darkVertical",
							ReverseDiagStripe: "darkDown",
							DiagStripe: "darkUp",
							DiagCross: "darkGrid",
							ThickDiagCross: "darkTrellis",
							ThinHorzStripe: "lightHorizontal",
							ThinVertStripe: "lightVertical",
							ThinReverseDiagStripe: "lightDown",
							ThinHorzCross: "lightGrid"
						},
						Ta = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
						Ca = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"],
						$a = function() {
							var e = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,
								t = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,
								n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,
								r = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,
								i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
							return function(a, o, s) {
								var u, c = {};
								return a ? ((u = (a = a.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(e)) && function(e, t, n) {
									t.NumberFmt = [];
									for (var r = H(M._table), i = 0; i < r.length; ++i) t.NumberFmt[r[i]] = M._table[r[i]];
									var a = e[0].match(ye);
									if (a)
										for (i = 0; i < a.length; ++i) {
											var o = we(a[i]);
											switch (Ee(o[0])) {
												case "<numFmts":
												case "</numFmts>":
												case "<numFmts/>":
												case "<numFmts>":
													break;
												case "<numFmt":
													var s = $e(Ne(o.formatCode)),
														u = parseInt(o.numFmtId, 10);
													if (t.NumberFmt[u] = s, u > 0) {
														if (u > 392) {
															for (u = 392; u > 60 && null != t.NumberFmt[u]; --u);
															t.NumberFmt[u] = s
														}
														M.load(s, u)
													}
													break;
												case "</numFmt>":
													break;
												default:
													if (n.WTF) throw new Error("unrecognized " + o[0] + " in numFmts")
											}
										}
								}(u, c, s), (u = a.match(r)) && function(e, t, n, r) {
									t.Fonts = [];
									var i = {},
										a = !1;
									(e[0].match(ye) || []).forEach((function(e) {
										var o = we(e);
										switch (Ee(o[0])) {
											case "<fonts":
											case "<fonts>":
											case "</fonts>":
												break;
											case "<font":
											case "<font>":
												break;
											case "</font>":
											case "<font/>":
												t.Fonts.push(i), i = {};
												break;
											case "<name":
												o.val && (i.name = Ne(o.val));
												break;
											case "<name/>":
											case "</name>":
												break;
											case "<b":
												i.bold = o.val ? Be(o.val) : 1;
												break;
											case "<b/>":
												i.bold = 1;
												break;
											case "<i":
												i.italic = o.val ? Be(o.val) : 1;
												break;
											case "<i/>":
												i.italic = 1;
												break;
											case "<u":
												switch (o.val) {
													case "none":
														i.underline = 0;
														break;
													case "single":
														i.underline = 1;
														break;
													case "double":
														i.underline = 2;
														break;
													case "singleAccounting":
														i.underline = 33;
														break;
													case "doubleAccounting":
														i.underline = 34
												}
												break;
											case "<u/>":
												i.underline = 1;
												break;
											case "<strike":
												i.strike = o.val ? Be(o.val) : 1;
												break;
											case "<strike/>":
												i.strike = 1;
												break;
											case "<outline":
												i.outline = o.val ? Be(o.val) : 1;
												break;
											case "<outline/>":
												i.outline = 1;
												break;
											case "<shadow":
												i.shadow = o.val ? Be(o.val) : 1;
												break;
											case "<shadow/>":
												i.shadow = 1;
												break;
											case "<condense":
												i.condense = o.val ? Be(o.val) : 1;
												break;
											case "<condense/>":
												i.condense = 1;
												break;
											case "<extend":
												i.extend = o.val ? Be(o.val) : 1;
												break;
											case "<extend/>":
												i.extend = 1;
												break;
											case "<sz":
												o.val && (i.sz = +o.val);
												break;
											case "<sz/>":
											case "</sz>":
												break;
											case "<vertAlign":
												o.val && (i.vertAlign = o.val);
												break;
											case "<vertAlign/>":
											case "</vertAlign>":
												break;
											case "<family":
												o.val && (i.family = parseInt(o.val, 10));
												break;
											case "<family/>":
											case "</family>":
												break;
											case "<scheme":
												o.val && (i.scheme = o.val);
												break;
											case "<scheme/>":
											case "</scheme>":
												break;
											case "<charset":
												if ("1" == o.val) break;
												o.codepage = l[parseInt(o.val, 10)];
												break;
											case "<color":
												if (i.color || (i.color = {}), o.auto && (i.color.auto = Be(o.auto)), o.rgb) i.color.rgb = o.rgb.slice(-6);
												else if (o.indexed) {
													i.color.index = parseInt(o.indexed, 10);
													var s = Un[i.color.index];
													if (81 == i.color.index && (s = Un[1]), !s) throw new Error(e);
													i.color.rgb = s[0].toString(16) + s[1].toString(16) + s[2].toString(16)
												} else o.theme && (i.color.theme = parseInt(o.theme, 10), o.tint && (i.color.tint = parseFloat(o.tint)), o.theme && n.themeElements && n.themeElements.clrScheme && (i.color.rgb = pa(n.themeElements.clrScheme[i.color.theme].rgb, i.color.tint || 0)));
												break;
											case "<color/>":
											case "</color>":
												break;
											case "<AlternateContent":
												a = !0;
												break;
											case "</AlternateContent>":
												a = !1;
												break;
											case "<extLst":
											case "<extLst>":
											case "</extLst>":
												break;
											case "<ext":
												a = !0;
												break;
											case "</ext>":
												a = !1;
												break;
											default:
												if (r && r.WTF && !a) throw new Error("unrecognized " + o[0] + " in fonts")
										}
									}))
								}(u, c, o, s), (u = a.match(n)) && function(e, t, n, r) {
									t.Fills = [];
									var i = {},
										a = !1;
									(e[0].match(ye) || []).forEach((function(e) {
										var n = we(e);
										switch (Ee(n[0])) {
											case "<fills":
											case "<fills>":
											case "</fills>":
												break;
											case "<fill>":
											case "<fill":
											case "<fill/>":
												i = {}, t.Fills.push(i);
												break;
											case "</fill>":
											case "<gradientFill>":
												break;
											case "<gradientFill":
											case "</gradientFill>":
												t.Fills.push(i), i = {};
												break;
											case "<patternFill":
											case "<patternFill>":
												n.patternType && (i.patternType = n.patternType);
												break;
											case "<patternFill/>":
											case "</patternFill>":
												break;
											case "<bgColor":
												i.bgColor || (i.bgColor = {}), n.indexed && (i.bgColor.indexed = parseInt(n.indexed, 10)), n.theme && (i.bgColor.theme = parseInt(n.theme, 10)), n.tint && (i.bgColor.tint = parseFloat(n.tint)), n.rgb && (i.bgColor.rgb = n.rgb.slice(-6));
												break;
											case "<bgColor/>":
											case "</bgColor>":
												break;
											case "<fgColor":
												i.fgColor || (i.fgColor = {}), n.theme && (i.fgColor.theme = parseInt(n.theme, 10)), n.tint && (i.fgColor.tint = parseFloat(n.tint)), null != n.rgb && (i.fgColor.rgb = n.rgb.slice(-6));
												break;
											case "<fgColor/>":
											case "</fgColor>":
												break;
											case "<stop":
											case "<stop/>":
											case "</stop>":
												break;
											case "<color":
											case "<color/>":
											case "</color>":
												break;
											case "<extLst":
											case "<extLst>":
											case "</extLst>":
												break;
											case "<ext":
												a = !0;
												break;
											case "</ext>":
												a = !1;
												break;
											default:
												if (r && r.WTF && !a) throw new Error("unrecognized " + n[0] + " in fills")
										}
									}))
								}(u, c, 0, s), (u = a.match(i)) && function(e, t, n, r) {
									t.Borders = [];
									var i = {},
										a = !1;
									(e[0].match(ye) || []).forEach((function(e) {
										var n = we(e);
										switch (Ee(n[0])) {
											case "<borders":
											case "<borders>":
											case "</borders>":
												break;
											case "<border":
											case "<border>":
											case "<border/>":
												i = {}, n.diagonalUp && (i.diagonalUp = Be(n.diagonalUp)), n.diagonalDown && (i.diagonalDown = Be(n.diagonalDown)), t.Borders.push(i);
												break;
											case "</border>":
											case "<left/>":
												break;
											case "<left":
											case "<left>":
											case "</left>":
											case "<right/>":
												break;
											case "<right":
											case "<right>":
											case "</right>":
											case "<top/>":
												break;
											case "<top":
											case "<top>":
											case "</top>":
											case "<bottom/>":
												break;
											case "<bottom":
											case "<bottom>":
											case "</bottom>":
												break;
											case "<diagonal":
											case "<diagonal>":
											case "<diagonal/>":
											case "</diagonal>":
												break;
											case "<horizontal":
											case "<horizontal>":
											case "<horizontal/>":
											case "</horizontal>":
												break;
											case "<vertical":
											case "<vertical>":
											case "<vertical/>":
											case "</vertical>":
												break;
											case "<start":
											case "<start>":
											case "<start/>":
											case "</start>":
												break;
											case "<end":
											case "<end>":
											case "<end/>":
											case "</end>":
												break;
											case "<color":
											case "<color>":
												break;
											case "<color/>":
											case "</color>":
												break;
											case "<extLst":
											case "<extLst>":
											case "</extLst>":
												break;
											case "<ext":
												a = !0;
												break;
											case "</ext>":
												a = !1;
												break;
											default:
												if (r && r.WTF && !a) throw new Error("unrecognized " + n[0] + " in borders")
										}
									}))
								}(u, c, 0, s), (u = a.match(t)) && function(e, t, n) {
									var r;
									t.CellXf = [];
									var i = !1;
									(e[0].match(ye) || []).forEach((function(e) {
										var a = we(e),
											o = 0;
										switch (Ee(a[0])) {
											case "<cellXfs":
											case "<cellXfs>":
											case "<cellXfs/>":
											case "</cellXfs>":
												break;
											case "<xf":
											case "<xf/>":
												for (delete(r = a)[0], o = 0; o < Ta.length; ++o) r[Ta[o]] && (r[Ta[o]] = parseInt(r[Ta[o]], 10));
												for (o = 0; o < Ca.length; ++o) r[Ca[o]] && (r[Ca[o]] = Be(r[Ca[o]]));
												if (r.numFmtId > 392)
													for (o = 392; o > 60; --o)
														if (t.NumberFmt[r.numFmtId] == t.NumberFmt[o]) {
															r.numFmtId = o;
															break
														} t.CellXf.push(r);
												break;
											case "</xf>":
												break;
											case "<alignment":
											case "<alignment/>":
												var s = {};
												a.vertical && (s.vertical = a.vertical), a.horizontal && (s.horizontal = a.horizontal), null != a.textRotation && (s.textRotation = a.textRotation), a.indent && (s.indent = a.indent), a.wrapText && (s.wrapText = Be(a.wrapText)), r.alignment = s;
												break;
											case "</alignment>":
											case "<protection":
												break;
											case "</protection>":
											case "<protection/>":
												break;
											case "<AlternateContent":
												i = !0;
												break;
											case "</AlternateContent>":
												i = !1;
												break;
											case "<extLst":
											case "<extLst>":
											case "</extLst>":
												break;
											case "<ext":
												i = !0;
												break;
											case "</ext>":
												i = !1;
												break;
											default:
												if (n && n.WTF && !i) throw new Error("unrecognized " + a[0] + " in cellXfs")
										}
									}))
								}(u, c, s), c) : c
							}
						}(),
						ka = Xe("styleSheet", null, {
							xmlns: tt.main[0],
							"xmlns:vt": tt.vt
						});

					function Oa(e, t) {
						var n, r = [ge, ka];
						return e.SSF && null != (n = function(e) {
							var t = ["<numFmts>"];
							return [
								[5, 8],
								[23, 26],
								[41, 44],
								[50, 392]
							].forEach((function(n) {
								for (var r = n[0]; r <= n[1]; ++r) null != e[r] && (t[t.length] = Xe("numFmt", null, {
									numFmtId: r,
									formatCode: xe(e[r])
								}))
							})), 1 === t.length ? "" : (t[t.length] = "</numFmts>", t[0] = Xe("numFmts", null, {
								count: t.length - 2
							}).replace("/>", ">"), t.join(""))
						}(e.SSF)) && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = function(e) {
							var t = [];
							return t[t.length] = Xe("cellXfs", null), e.forEach((function(e) {
								t[t.length] = Xe("xf", null, e)
							})), t[t.length] = "</cellXfs>", 2 === t.length ? "" : (t[0] = Xe("cellXfs", null, {
								count: t.length - 2
							}).replace("/>", ">"), t.join(""))
						}(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("")
					}

					function xa(e, t, n) {
						n || (n = Ut(6 + 4 * t.length)), n.write_shift(2, e), ln(t, n);
						var r = n.length > n.l ? n.slice(0, n.l) : n;
						return null == n.l && (n.l = n.length), r
					}

					function Pa(e, t) {
						t || (t = Ut(153)), t.write_shift(2, 20 * e.sz),
							function(e, t) {
								t || (t = Ut(2));
								var n = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
								t.write_shift(1, n), t.write_shift(1, 0)
							}(e, t), t.write_shift(2, e.bold ? 700 : 400);
						var n = 0;
						"superscript" == e.vertAlign ? n = 1 : "subscript" == e.vertAlign && (n = 2), t.write_shift(2, n), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), xn(e.color, t);
						var r = 0;
						return "major" == e.scheme && (r = 1), "minor" == e.scheme && (r = 2), t.write_shift(1, r), ln(e.name, t), t.length > t.l ? t.slice(0, t.l) : t
					}
					qn.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
					var Ma = V(["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"]),
						Ia = Ft;

					function La(e, t) {
						t || (t = Ut(84));
						var n = Ma[e.patternType];
						null == n && (n = 40), t.write_shift(4, n);
						var r = 0;
						if (40 != n)
							for (xn({
									auto: 1
								}, t), xn({
									auto: 1
								}, t); r < 12; ++r) t.write_shift(4, 0);
						else {
							for (; r < 4; ++r) t.write_shift(4, 0);
							for (; r < 12; ++r) t.write_shift(4, 0)
						}
						return t.length > t.l ? t.slice(0, t.l) : t
					}

					function Da(e, t, n) {
						n || (n = Ut(16)), n.write_shift(2, t || 0), n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 0), n.write_shift(2, 0), n.write_shift(2, 0), n.write_shift(1, 0), n.write_shift(1, 0);
						return n.write_shift(1, 0), n.write_shift(1, 0), n.write_shift(1, 0), n.write_shift(1, 0), n
					}

					function Ba(e, t) {
						return t || (t = Ut(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
					}
					var Na = Ft;

					function Ra(e) {
						Yt(e, "BrtBeginBorders", un(1)), Yt(e, "BrtBorder", function(e, t) {
							return t || (t = Ut(51)), t.write_shift(1, 0), Ba(0, t), Ba(0, t), Ba(0, t), Ba(0, t), Ba(0, t), t.length > t.l ? t.slice(0, t.l) : t
						}()), Yt(e, "BrtEndBorders")
					}

					function Fa(e) {
						Yt(e, "BrtBeginStyles", un(1)), Yt(e, "BrtStyle", function(e, t) {
							return t || (t = Ut(52)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), yn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t
						}({
							xfId: 0,
							builtinId: 0,
							name: "Normal"
						})), Yt(e, "BrtEndStyles")
					}

					function Ua(e) {
						Yt(e, "BrtBeginTableStyles", function(e, t, n) {
							var r = Ut(2052);
							return r.write_shift(4, e), yn(t, r), yn(n, r), r.length > r.l ? r.slice(0, r.l) : r
						}(0, "TableStyleMedium9", "PivotStyleMedium4")), Yt(e, "BrtEndTableStyles")
					}

					function ja(e, t) {
						var n = Ht();
						return Yt(n, "BrtBeginStyleSheet"),
							function(e, t) {
								if (t) {
									var n = 0;
									[
										[5, 8],
										[23, 26],
										[41, 44],
										[50, 392]
									].forEach((function(e) {
										for (var r = e[0]; r <= e[1]; ++r) null != t[r] && ++n
									})), 0 != n && (Yt(e, "BrtBeginFmts", un(n)), [
										[5, 8],
										[23, 26],
										[41, 44],
										[50, 392]
									].forEach((function(n) {
										for (var r = n[0]; r <= n[1]; ++r) null != t[r] && Yt(e, "BrtFmt", xa(r, t[r]))
									})), Yt(e, "BrtEndFmts"))
								}
							}(n, e.SSF),
							function(e) {
								Yt(e, "BrtBeginFonts", un(1)), Yt(e, "BrtFont", Pa({
									sz: 12,
									color: {
										theme: 1
									},
									name: "Calibri",
									family: 2,
									scheme: "minor"
								})), Yt(e, "BrtEndFonts")
							}(n),
							function(e) {
								Yt(e, "BrtBeginFills", un(2)), Yt(e, "BrtFill", La({
									patternType: "none"
								})), Yt(e, "BrtFill", La({
									patternType: "gray125"
								})), Yt(e, "BrtEndFills")
							}(n), Ra(n),
							function(e) {
								Yt(e, "BrtBeginCellStyleXFs", un(1)), Yt(e, "BrtXF", Da({
									numFmtId: 0,
									fontId: 0,
									fillId: 0,
									borderId: 0
								}, 65535)), Yt(e, "BrtEndCellStyleXFs")
							}(n),
							function(e, t) {
								Yt(e, "BrtBeginCellXFs", un(t.length)), t.forEach((function(t) {
									Yt(e, "BrtXF", Da(t, 0))
								})), Yt(e, "BrtEndCellXFs")
							}(n, t.cellXfs), Fa(n),
							function(e) {
								Yt(e, "BrtBeginDXFs", un(0)), Yt(e, "BrtEndDXFs")
							}(n), Ua(n), Yt(n, "BrtEndStyleSheet"), n.end()
					}
					qn.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
					var Ha = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];

					function Ya(e, t, n) {
						t.themeElements.clrScheme = [];
						var r = {};
						(e[0].match(ye) || []).forEach((function(e) {
							var i = we(e);
							switch (i[0]) {
								case "<a:clrScheme":
								case "</a:clrScheme>":
									break;
								case "<a:srgbClr":
									r.rgb = i.val;
									break;
								case "<a:sysClr":
									r.rgb = i.lastClr;
									break;
								case "<a:dk1>":
								case "</a:dk1>":
								case "<a:lt1>":
								case "</a:lt1>":
								case "<a:dk2>":
								case "</a:dk2>":
								case "<a:lt2>":
								case "</a:lt2>":
								case "<a:accent1>":
								case "</a:accent1>":
								case "<a:accent2>":
								case "</a:accent2>":
								case "<a:accent3>":
								case "</a:accent3>":
								case "<a:accent4>":
								case "</a:accent4>":
								case "<a:accent5>":
								case "</a:accent5>":
								case "<a:accent6>":
								case "</a:accent6>":
								case "<a:hlink>":
								case "</a:hlink>":
								case "<a:folHlink>":
								case "</a:folHlink>":
									"/" === i[0].charAt(1) ? (t.themeElements.clrScheme[Ha.indexOf(i[0])] = r, r = {}) : r.name = i[0].slice(3, i[0].length - 1);
									break;
								default:
									if (n && n.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme")
							}
						}))
					}

					function Va() {}

					function za() {}
					var Qa = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
						Ga = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
						qa = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/,
						Wa = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;

					function Ka(e, t) {
						if (!e || 0 === e.length) return Ka(Xa());
						var n, r = {};
						if (!(n = e.match(Wa))) throw new Error("themeElements not found in theme");
						return function(e, t, n) {
							var r;
							t.themeElements = {}, [
								["clrScheme", Qa, Ya],
								["fontScheme", Ga, Va],
								["fmtScheme", qa, za]
							].forEach((function(i) {
								if (!(r = e.match(i[1]))) throw new Error(i[0] + " not found in themeElements");
								i[2](r, t, n)
							}))
						}(n[0], r, t), r.raw = e, r
					}

					function Xa(e, t) {
						if (t && t.themeXLSX) return t.themeXLSX;
						if (e && "string" == typeof e.raw) return e.raw;
						var n = [ge];
						return n[n.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', n[n.length] = "<a:themeElements>", n[n.length] = '<a:clrScheme name="Office">', n[n.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', n[n.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', n[n.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', n[n.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', n[n.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', n[n.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', n[n.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', n[n.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', n[n.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', n[n.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', n[n.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', n[n.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', n[n.length] = "</a:clrScheme>", n[n.length] = '<a:fontScheme name="Office">', n[n.length] = "<a:majorFont>", n[n.length] = '<a:latin typeface="Cambria"/>', n[n.length] = '<a:ea typeface=""/>', n[n.length] = '<a:cs typeface=""/>', n[n.length] = '<a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/>', n[n.length] = '<a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/>', n[n.length] = '<a:font script="Hans" typeface="å®‹ä½“"/>', n[n.length] = '<a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/>', n[n.length] = '<a:font script="Arab" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>', n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>', n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>', n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>', n[n.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', n[n.length] = '<a:font script="Knda" typeface="Tunga"/>', n[n.length] = '<a:font script="Guru" typeface="Raavi"/>', n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>', n[n.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', n[n.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', n[n.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>', n[n.length] = '<a:font script="Deva" typeface="Mangal"/>', n[n.length] = '<a:font script="Telu" typeface="Gautami"/>', n[n.length] = '<a:font script="Taml" typeface="Latha"/>', n[n.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>', n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>', n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>', n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', n[n.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', n[n.length] = '<a:font script="Viet" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>', n[n.length] = "</a:majorFont>", n[n.length] = "<a:minorFont>", n[n.length] = '<a:latin typeface="Calibri"/>', n[n.length] = '<a:ea typeface=""/>', n[n.length] = '<a:cs typeface=""/>', n[n.length] = '<a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/>', n[n.length] = '<a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/>', n[n.length] = '<a:font script="Hans" typeface="å®‹ä½“"/>', n[n.length] = '<a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/>', n[n.length] = '<a:font script="Arab" typeface="Arial"/>', n[n.length] = '<a:font script="Hebr" typeface="Arial"/>', n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>', n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>', n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>', n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>', n[n.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', n[n.length] = '<a:font script="Knda" typeface="Tunga"/>', n[n.length] = '<a:font script="Guru" typeface="Raavi"/>', n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>', n[n.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', n[n.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', n[n.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>', n[n.length] = '<a:font script="Deva" typeface="Mangal"/>', n[n.length] = '<a:font script="Telu" typeface="Gautami"/>', n[n.length] = '<a:font script="Taml" typeface="Latha"/>', n[n.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>', n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>', n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>', n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', n[n.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', n[n.length] = '<a:font script="Viet" typeface="Arial"/>', n[n.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>', n[n.length] = "</a:minorFont>", n[n.length] = "</a:fontScheme>", n[n.length] = '<a:fmtScheme name="Office">', n[n.length] = "<a:fillStyleLst>", n[n.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>", n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', n[n.length] = "</a:gsLst>", n[n.length] = '<a:lin ang="16200000" scaled="1"/>', n[n.length] = "</a:gradFill>", n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>", n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', n[n.length] = "</a:gsLst>", n[n.length] = '<a:lin ang="16200000" scaled="0"/>', n[n.length] = "</a:gradFill>", n[n.length] = "</a:fillStyleLst>", n[n.length] = "<a:lnStyleLst>", n[n.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', n[n.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', n[n.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', n[n.length] = "</a:lnStyleLst>", n[n.length] = "<a:effectStyleLst>", n[n.length] = "<a:effectStyle>", n[n.length] = "<a:effectLst>", n[n.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', n[n.length] = "</a:effectLst>", n[n.length] = "</a:effectStyle>", n[n.length] = "<a:effectStyle>", n[n.length] = "<a:effectLst>", n[n.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', n[n.length] = "</a:effectLst>", n[n.length] = "</a:effectStyle>", n[n.length] = "<a:effectStyle>", n[n.length] = "<a:effectLst>", n[n.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', n[n.length] = "</a:effectLst>", n[n.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', n[n.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', n[n.length] = "</a:effectStyle>", n[n.length] = "</a:effectStyleLst>", n[n.length] = "<a:bgFillStyleLst>", n[n.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>", n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', n[n.length] = "</a:gsLst>", n[n.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', n[n.length] = "</a:gradFill>", n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>", n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', n[n.length] = "</a:gsLst>", n[n.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', n[n.length] = "</a:gradFill>", n[n.length] = "</a:bgFillStyleLst>", n[n.length] = "</a:fmtScheme>", n[n.length] = "</a:themeElements>", n[n.length] = "<a:objectDefaults>", n[n.length] = "<a:spDef>", n[n.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', n[n.length] = "</a:spDef>", n[n.length] = "<a:lnDef>", n[n.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', n[n.length] = "</a:lnDef>", n[n.length] = "</a:objectDefaults>", n[n.length] = "<a:extraClrSchemeLst/>", n[n.length] = "</a:theme>", n.join("")
					}

					function Ja(e) {
						var t = {};
						switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
							case 0:
								e.l += 4;
								break;
							case 1:
								t.xclrValue = function(e, t) {
									return Ft(e, t)
								}(e, 4);
								break;
							case 2:
								t.xclrValue = Jr(e);
								break;
							case 3:
								t.xclrValue = function(e) {
									return e.read_shift(4)
								}(e);
								break;
							case 4:
								e.l += 4
						}
						return e.l += 8, t
					}

					function Za(e) {
						var t = e.read_shift(2),
							n = e.read_shift(2) - 4,
							r = [t];
						switch (t) {
							case 4:
							case 5:
							case 7:
							case 8:
							case 9:
							case 10:
							case 11:
							case 13:
								r[1] = Ja(e);
								break;
							case 6:
								r[1] = function(e, t) {
									return Ft(e, t)
								}(e, n);
								break;
							case 14:
							case 15:
								r[1] = e.read_shift(1 === n ? 1 : 2);
								break;
							default:
								throw new Error("Unrecognized ExtProp type: " + t + " " + n)
						}
						return r
					}

					function eo(e, t) {
						t.forEach((function(e) {
							e[0]
						}))
					}
					qn.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", qn.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
					var to = 1024;

					function no(e, t) {
						for (var n = [21600, 21600], r = ["m0,0l0", n[1], n[0], n[1], n[0], "0xe"].join(","), i = [Xe("xml", null, {
								"xmlns:v": st,
								"xmlns:o": nt,
								"xmlns:x": rt,
								"xmlns:mv": ot
							}).replace(/\/>/, ">"), Xe("o:shapelayout", Xe("o:idmap", null, {
								"v:ext": "edit",
								data: e
							}), {
								"v:ext": "edit"
							}), Xe("v:shapetype", [Xe("v:stroke", null, {
								joinstyle: "miter"
							}), Xe("v:path", null, {
								gradientshapeok: "t",
								"o:connecttype": "rect"
							})].join(""), {
								id: "_x0000_t202",
								"o:spt": 202,
								coordsize: n.join(","),
								path: r
							})]; to < 1e3 * e;) to += 1e3;
						return t.forEach((function(e) {
							var t = Jt(e[0]),
								n = {
									color2: "#BEFF82",
									type: "gradient"
								};
							"gradient" == n.type && (n.angle = "-180");
							var r = "gradient" == n.type ? Xe("o:fill", null, {
									type: "gradientUnscaled",
									"v:ext": "view"
								}) : null,
								a = Xe("v:fill", r, n);
							++to, i = i.concat(["<v:shape" + Ke({
								id: "_x0000_s" + to,
								type: "#_x0000_t202",
								style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
								fillcolor: "#ECFAD4",
								strokecolor: "#edeaa1"
							}) + ">", a, Xe("v:shadow", null, {
								on: "t",
								obscured: "t"
							}), Xe("v:path", null, {
								"o:connecttype": "none"
							}), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", We("x:Anchor", [t.c + 1, 0, t.r + 1, 0, t.c + 3, 20, t.r + 5, 20].join(",")), We("x:AutoFill", "False"), We("x:Row", String(t.r)), We("x:Column", String(t.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"])
						})), i.push("</xml>"), i.join("")
					}
					qn.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
					var ro = Xe("comments", null, {
						xmlns: tt.main[0]
					});

					function io(e) {
						var t = [ge, ro],
							n = [];
						return t.push("<authors>"), e.forEach((function(e) {
							e[1].forEach((function(e) {
								var r = xe(e.a);
								n.indexOf(r) > -1 || (n.push(r), t.push("<author>" + r + "</author>"))
							}))
						})), t.push("</authors>"), t.push("<commentList>"), e.forEach((function(e) {
							e[1].forEach((function(r) {
								t.push('<comment ref="' + e[0] + '" authorId="' + n.indexOf(xe(r.a)) + '"><text>'), t.push(We("t", null == r.t ? "" : xe(r.t))), t.push("</text></comment>")
							}))
						})), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("")
					}
					var ao = cn;

					function oo(e) {
						var t = Ht(),
							n = [];
						return Yt(t, "BrtBeginComments"), Yt(t, "BrtBeginCommentAuthors"), e.forEach((function(e) {
							e[1].forEach((function(e) {
								n.indexOf(e.a) > -1 || (n.push(e.a.slice(0, 54)), Yt(t, "BrtCommentAuthor", function(e) {
									return ln(e.slice(0, 54))
								}(e.a)))
							}))
						})), Yt(t, "BrtEndCommentAuthors"), Yt(t, "BrtBeginCommentList"), e.forEach((function(e) {
							e[1].forEach((function(r) {
								r.iauthor = n.indexOf(r.a);
								var i = {
									s: Jt(e[0]),
									e: Jt(e[0])
								};
								Yt(t, "BrtBeginComment", function(e, t) {
									return null == t && (t = Ut(36)), t.write_shift(4, e[1].iauthor), $n(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
								}([i, r])), r.t && r.t.length > 0 && Yt(t, "BrtCommentText", pn(r)), Yt(t, "BrtEndComment"), delete r.iauthor
							}))
						})), Yt(t, "BrtEndCommentList"), Yt(t, "BrtEndComments"), t.end()
					}
					var so = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
					qn.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", qn.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
					var uo = function() {
							var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
								t = {
									r: 0,
									c: 0
								};

							function n(e, n, r, i) {
								var a = !1,
									o = !1;
								0 == r.length ? o = !0 : "[" == r.charAt(0) && (o = !0, r = r.slice(1, -1)), 0 == i.length ? a = !0 : "[" == i.charAt(0) && (a = !0, i = i.slice(1, -1));
								var s = r.length > 0 ? 0 | parseInt(r, 10) : 0,
									u = i.length > 0 ? 0 | parseInt(i, 10) : 0;
								return a ? u += t.c : --u, o ? s += t.r : --s, n + (a ? "" : "$") + Xt(u) + (o ? "" : "$") + Wt(s)
							}
							return function(r, i) {
								return t = i, r.replace(e, n)
							}
						}(),
						co = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
						lo = function(e, t) {
							return e.replace(co, (function(e, n, r, i, a, o) {
								var s = Kt(i) - (r ? 0 : t.c),
									u = qt(o) - (a ? 0 : t.r);
								return n + "R" + (0 == u ? "" : a ? u + 1 : "[" + u + "]") + "C" + (0 == s ? "" : r ? s + 1 : "[" + s + "]")
							}))
						};

					function fo(e, t, n) {
						var r = en(t).s,
							i = Jt(n);
						return function(e, t) {
							return e.replace(co, (function(e, n, r, i, a, o) {
								return n + ("$" == r ? r + i : Xt(Kt(i) + t.c)) + ("$" == a ? a + o : Wt(qt(o) + t.r))
							}))
						}(e, {
							r: i.r - r.r,
							c: i.c - r.c
						})
					}

					function ho(e) {
						return e.replace(/_xlfn\./g, "")
					}

					function po(e) {
						e.l += 1
					}

					function _o(e, t) {
						var n = e.read_shift(1 == t ? 1 : 2);
						return [16383 & n, n >> 14 & 1, n >> 15 & 1]
					}

					function mo(e, t, n) {
						var r = 2;
						if (n) {
							if (n.biff >= 2 && n.biff <= 5) return bo(e);
							12 == n.biff && (r = 4)
						}
						var i = e.read_shift(r),
							a = e.read_shift(r),
							o = _o(e, 2),
							s = _o(e, 2);
						return {
							s: {
								r: i,
								c: o[0],
								cRel: o[1],
								rRel: o[2]
							},
							e: {
								r: a,
								c: s[0],
								cRel: s[1],
								rRel: s[2]
							}
						}
					}

					function bo(e) {
						var t = _o(e, 2),
							n = _o(e, 2),
							r = e.read_shift(1),
							i = e.read_shift(1);
						return {
							s: {
								r: t[0],
								c: r,
								cRel: t[1],
								rRel: t[2]
							},
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

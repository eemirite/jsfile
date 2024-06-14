								n: "Style"
							},
							1030: {
								n: "Formula",
								f: Xo
							},
							1048: {
								n: "BigName"
							},
							1054: {
								n: "Format",
								f: function(e, t, n) {
									return [e.read_shift(2), Gr(e, 0, n)]
								}
							},
							1084: {
								n: "ContinueBigName"
							},
							1212: {
								n: "ShrFmla",
								f: function(e, t, n) {
									var r = oi(e);
									e.l++;
									var i = e.read_shift(1);
									return [Ko(e, t -= 8, n), i, r]
								}
							},
							2048: {
								n: "HLinkTooltip",
								f: function(e, t) {
									e.read_shift(2);
									var n = ii(e),
										r = e.read_shift((t - 10) / 2, "dbcs-cont");
									return [n, r = r.replace(x, "")]
								}
							},
							2049: {
								n: "WebPub"
							},
							2050: {
								n: "QsiSXTag"
							},
							2051: {
								n: "DBQueryExt"
							},
							2052: {
								n: "ExtString"
							},
							2053: {
								n: "TxtQry"
							},
							2054: {
								n: "Qsir"
							},
							2055: {
								n: "Qsif"
							},
							2056: {
								n: "RRDTQSIF"
							},
							2057: {
								n: "BOF",
								f: fi
							},
							2058: {
								n: "OleDbConn"
							},
							2059: {
								n: "WOpt"
							},
							2060: {
								n: "SXViewEx"
							},
							2061: {
								n: "SXTH"
							},
							2062: {
								n: "SXPIEx"
							},
							2063: {
								n: "SXVDTEx"
							},
							2064: {
								n: "SXViewEx9"
							},
							2066: {
								n: "ContinueFrt"
							},
							2067: {
								n: "RealTimeData"
							},
							2128: {
								n: "ChartFrtInfo"
							},
							2129: {
								n: "FrtWrapper"
							},
							2130: {
								n: "StartBlock"
							},
							2131: {
								n: "EndBlock"
							},
							2132: {
								n: "StartObject"
							},
							2133: {
								n: "EndObject"
							},
							2134: {
								n: "CatLab"
							},
							2135: {
								n: "YMult"
							},
							2136: {
								n: "SXViewLink"
							},
							2137: {
								n: "PivotChartBits"
							},
							2138: {
								n: "FrtFontList"
							},
							2146: {
								n: "SheetExt"
							},
							2147: {
								n: "BookExt",
								r: 12
							},
							2148: {
								n: "SXAddl"
							},
							2149: {
								n: "CrErr"
							},
							2150: {
								n: "HFPicture"
							},
							2151: {
								n: "FeatHdr",
								f: Br
							},
							2152: {
								n: "Feat"
							},
							2154: {
								n: "DataLabExt"
							},
							2155: {
								n: "DataLabExtContents"
							},
							2156: {
								n: "CellWatch"
							},
							2161: {
								n: "FeatHdr11"
							},
							2162: {
								n: "Feature11"
							},
							2164: {
								n: "DropDownObjIds"
							},
							2165: {
								n: "ContinueFrt11"
							},
							2166: {
								n: "DConn"
							},
							2167: {
								n: "List12"
							},
							2168: {
								n: "Feature12"
							},
							2169: {
								n: "CondFmt12"
							},
							2170: {
								n: "CF12"
							},
							2171: {
								n: "CFEx"
							},
							2172: {
								n: "XFCRC",
								f: function(e) {
									e.l += 2;
									var t = {
										cxfs: 0,
										crc: 0
									};
									return t.cxfs = e.read_shift(2), t.crc = e.read_shift(4), t
								},
								r: 12
							},
							2173: {
								n: "XFExt",
								f: function(e, t) {
									e.l, e.l += 2;
									var n = e.read_shift(2);
									e.l += 2;
									for (var r = e.read_shift(2), i = []; r-- > 0;) i.push(Za(e, e.l));
									return {
										ixfe: n,
										ext: i
									}
								},
								r: 12
							},
							2174: {
								n: "AutoFilter12"
							},
							2175: {
								n: "ContinueFrt12"
							},
							2180: {
								n: "MDTInfo"
							},
							2181: {
								n: "MDXStr"
							},
							2182: {
								n: "MDXTuple"
							},
							2183: {
								n: "MDXSet"
							},
							2184: {
								n: "MDXProp"
							},
							2185: {
								n: "MDXKPI"
							},
							2186: {
								n: "MDB"
							},
							2187: {
								n: "PLV"
							},
							2188: {
								n: "Compat12",
								f: Nr,
								r: 12
							},
							2189: {
								n: "DXF"
							},
							2190: {
								n: "TableStyles",
								r: 12
							},
							2191: {
								n: "TableStyle"
							},
							2192: {
								n: "TableStyleElement"
							},
							2194: {
								n: "StyleExt"
							},
							2195: {
								n: "NamePublish"
							},
							2196: {
								n: "NameCmt",
								f: function(e, t, n) {
									if (!(n.biff < 8)) {
										var r = e.read_shift(2),
											i = e.read_shift(2);
										return [zr(e, r, n), zr(e, i, n)]
									}
									e.l += t
								},
								r: 12
							},
							2197: {
								n: "SortData"
							},
							2198: {
								n: "Theme",
								f: function(e, t, n) {
									var r = e.l + t;
									if (124226 !== e.read_shift(4))
										if (n.cellStyles && se) {
											var i, a = e.slice(e.l);
											e.l = r;
											try {
												i = new se(a)
											} catch (e) {
												return
											}
											var o = pe(i, "theme/theme/theme1.xml", !0);
											if (o) return Ka(o, n)
										} else e.l = r
								},
								r: 12
							},
							2199: {
								n: "GUIDTypeLib"
							},
							2200: {
								n: "FnGrp12"
							},
							2201: {
								n: "NameFnGrp12"
							},
							2202: {
								n: "MTRSettings",
								f: function(e) {
									return [0 !== e.read_shift(4), 0 !== e.read_shift(4), e.read_shift(4)]
								},
								r: 12
							},
							2203: {
								n: "CompressPictures",
								f: Br
							},
							2204: {
								n: "HeaderFooter"
							},
							2205: {
								n: "CrtLayout12"
							},
							2206: {
								n: "CrtMlFrt"
							},
							2207: {
								n: "CrtMlFrtContinue"
							},
							2211: {
								n: "ForceFullCalculation",
								f: function(e) {
									var t = function(e) {
										var t = e.read_shift(2),
											n = e.read_shift(2);
										return e.l += 8, {
											type: t,
											flags: n
										}
									}(e);
									if (2211 != t.type) throw new Error("Invalid Future Record " + t.type);
									return 0 !== e.read_shift(4)
								}
							},
							2212: {
								n: "ShapePropsStream"
							},
							2213: {
								n: "TextPropsStream"
							},
							2214: {
								n: "RichTextStream"
							},
							2215: {
								n: "CrtLayout12A"
							},
							4097: {
								n: "Units"
							},
							4098: {
								n: "Chart"
							},
							4099: {
								n: "Series"
							},
							4102: {
								n: "DataFormat"
							},
							4103: {
								n: "LineFormat"
							},
							4105: {
								n: "MarkerFormat"
							},
							4106: {
								n: "AreaFormat"
							},
							4107: {
								n: "PieFormat"
							},
							4108: {
								n: "AttachedLabel"
							},
							4109: {
								n: "SeriesText"
							},
							4116: {
								n: "ChartFormat"
							},
							4117: {
								n: "Legend"
							},
							4118: {
								n: "SeriesList"
							},
							4119: {
								n: "Bar"
							},
							4120: {
								n: "Line"
							},
							4121: {
								n: "Pie"
							},
							4122: {
								n: "Area"
							},
							4123: {
								n: "Scatter"
							},
							4124: {
								n: "CrtLine"
							},
							4125: {
								n: "Axis"
							},
							4126: {
								n: "Tick"
							},
							4127: {
								n: "ValueRange"
							},
							4128: {
								n: "CatSerRange"
							},
							4129: {
								n: "AxisLine"
							},
							4130: {
								n: "CrtLink"
							},
							4132: {
								n: "DefaultText"
							},
							4133: {
								n: "Text"
							},
							4134: {
								n: "FontX",
								f: Fr
							},
							4135: {
								n: "ObjectLink"
							},
							4146: {
								n: "Frame"
							},
							4147: {
								n: "Begin"
							},
							4148: {
								n: "End"
							},
							4149: {
								n: "PlotArea"
							},
							4154: {
								n: "Chart3d"
							},
							4156: {
								n: "PicF"
							},
							4157: {
								n: "DropBar"
							},
							4158: {
								n: "Radar"
							},
							4159: {
								n: "Surf"
							},
							4160: {
								n: "RadarArea"
							},
							4161: {
								n: "AxisParent"
							},
							4163: {
								n: "LegendException"
							},
							4164: {
								n: "ShtProps",
								f: function(e, t, n) {
									var r = {
										area: !1
									};
									if (5 != n.biff) return e.l += t, r;
									var i = e.read_shift(1);
									return e.l += 3, 16 & i && (r.area = !0), r
								}
							},
							4165: {
								n: "SerToCrt"
							},
							4166: {
								n: "AxesUsed"
							},
							4168: {
								n: "SBaseRef"
							},
							4170: {
								n: "SerParent"
							},
							4171: {
								n: "SerAuxTrend"
							},
							4174: {
								n: "IFmtRecord"
							},
							4175: {
								n: "Pos"
							},
							4176: {
								n: "AlRuns"
							},
							4177: {
								n: "BRAI"
							},
							4187: {
								n: "SerAuxErrBar"
							},
							4188: {
								n: "ClrtClient",
								f: function(e) {
									for (var t = e.read_shift(2), n = []; t-- > 0;) n.push(Zr(e));
									return n
								}
							},
							4189: {
								n: "SerFmt"
							},
							4191: {
								n: "Chart3DBarShape"
							},
							4192: {
								n: "Fbi"
							},
							4193: {
								n: "BopPop"
							},
							4194: {
								n: "AxcExt"
							},
							4195: {
								n: "Dat"
							},
							4196: {
								n: "PlotGrowth"
							},
							4197: {
								n: "SIIndex"
							},
							4198: {
								n: "GelFrame"
							},
							4199: {
								n: "BopPopCustom"
							},
							4200: {
								n: "Fbi2"
							},
							0: {
								n: "Dimensions",
								f: bi
							},
							2: {
								n: "BIFF2INT",
								f: function(e) {
									var t = ei(e);
									++e.l;
									var n = e.read_shift(2);
									return t.t = "n", t.val = n, t
								}
							},
							5: {
								n: "BoolErr",
								f: vi
							},
							7: {
								n: "String",
								f: function(e) {
									var t = e.read_shift(1);
									return 0 === t ? (e.l++, "") : e.read_shift(t, "sbcs-cont")
								}
							},
							8: {
								n: "BIFF2ROW"
							},
							11: {
								n: "Index"
							},
							22: {
								n: "ExternCount",
								f: Fr
							},
							30: {
								n: "BIFF2FORMAT",
								f: mi
							},
							31: {
								n: "BIFF2FMTCNT"
							},
							32: {
								n: "BIFF2COLINFO"
							},
							33: {
								n: "Array",
								f: Ci
							},
							37: {
								n: "DefaultRowHeight",
								f: pi
							},
							50: {
								n: "BIFF2FONTXTRA",
								f: function(e, t) {
									e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += t - 13
								}
							},
							52: {
								n: "DDEObjName"
							},
							62: {
								n: "BIFF2WINDOW2"
							},
							67: {
								n: "BIFF2XF"
							},
							69: {
								n: "BIFF2FONTCLR"
							},
							86: {
								n: "BIFF4FMTCNT"
							},
							126: {
								n: "RK"
							},
							127: {
								n: "ImData",
								f: function(e) {
									var t = e.read_shift(2),
										n = e.read_shift(2),
										r = e.read_shift(4),
										i = {
											fmt: t,
											env: n,
											len: r,
											data: e.slice(e.l, e.l + r)
										};
									return e.l += r, i
								}
							},
							135: {
								n: "Addin"
							},
							136: {
								n: "Edg"
							},
							137: {
								n: "Pub"
							},
							145: {
								n: "Sub"
							},
							148: {
								n: "LHRecord"
							},
							149: {
								n: "LHNGraph"
							},
							150: {
								n: "Sound"
							},
							169: {
								n: "CoordList"
							},
							171: {
								n: "GCW"
							},
							188: {
								n: "ShrFmla"
							},
							191: {
								n: "ToolbarHdr"
							},
							192: {
								n: "ToolbarEnd"
							},
							194: {
								n: "AddMenu"
							},
							195: {
								n: "DelMenu"
							},
							214: {
								n: "RString",
								f: function(e, t, n) {
									var r = e.l + t,
										i = ei(e),
										a = e.read_shift(2),
										o = zr(e, a, n);
									return e.l = r, i.t = "str", i.val = o, i
								}
							},
							223: {
								n: "UDDesc"
							},
							234: {
								n: "TabIdConf"
							},
							354: {
								n: "XL5Modify"
							},
							421: {
								n: "FileSharing2"
							},
							521: {
								n: "BOF",
								f: fi
							},
							536: {
								n: "Lbl",
								f: Ei
							},
							547: {
								n: "ExternName",
								f: Si
							},
							561: {
								n: "Font"
							},
							579: {
								n: "BIFF3XF"
							},
							1033: {
								n: "BOF",
								f: fi
							},
							1091: {
								n: "BIFF4XF"
							},
							2157: {
								n: "FeatInfo"
							},
							2163: {
								n: "FeatInfo11"
							},
							2177: {
								n: "SXAddl12"
							},
							2240: {
								n: "AutoWebPub"
							},
							2241: {
								n: "ListObj"
							},
							2242: {
								n: "ListField"
							},
							2243: {
								n: "ListDV"
							},
							2244: {
								n: "ListCondFmt"
							},
							2245: {
								n: "ListCF"
							},
							2246: {
								n: "FMQry"
							},
							2247: {
								n: "FMSQry"
							},
							2248: {
								n: "PLV"
							},
							2249: {
								n: "LnExt"
							},
							2250: {
								n: "MkrExt"
							},
							2251: {
								n: "CrtCoopt"
							},
							2262: {
								n: "FRTArchId$",
								r: 12
							},
							29282: {}
						},
						uc = Y(sc, "n");

					function cc(e, t, n, r) {
						var i = +t || +uc[t];
						if (!isNaN(i)) {
							var a = r || (n || []).length || 0,
								o = e.next(4);
							o.write_shift(2, i), o.write_shift(2, a), a > 0 && $t(n) && e.push(n)
						}
					}

					function lc(e, t, n) {
						return e || (e = Ut(7)), e.write_shift(2, t), e.write_shift(2, n), e.write_shift(2, 0), e.write_shift(1, 0), e
					}

					function fc(e, t, n, r) {
						if (null != t.v) switch (t.t) {
							case "d":
							case "n":
								var i = "d" == t.t ? G(te(t.v)) : t.v;
								return void(i == (0 | i) && i >= 0 && i < 65536 ? cc(e, 2, function(e, t, n) {
									var r = Ut(9);
									return lc(r, e, t), r.write_shift(2, n), r
								}(n, r, i)) : cc(e, 3, function(e, t, n) {
									var r = Ut(15);
									return lc(r, e, t), r.write_shift(8, n, "f"), r
								}(n, r, i)));
							case "b":
							case "e":
								return void cc(e, 5, function(e, t, n, r) {
									var i = Ut(9);
									return lc(i, e, t), "e" == r ? (i.write_shift(1, n), i.write_shift(1, 1)) : (i.write_shift(1, n ? 1 : 0), i.write_shift(1, 0)), i
								}(n, r, t.v, t.t));
							case "s":
							case "str":
								return void cc(e, 4, function(e, t, n) {
									var r = Ut(8 + 2 * n.length);
									return lc(r, e, t), r.write_shift(1, n.length), r.write_shift(n.length, n, "sbcs"), r.l < r.length ? r.slice(0, r.l) : r
								}(n, r, t.v))
						}
						cc(e, 1, lc(null, n, r))
					}

					function dc(e, t) {
						for (var n = t || {}, r = Ht(), i = 0, a = 0; a < e.SheetNames.length; ++a) e.SheetNames[a] == n.sheet && (i = a);
						if (0 == i && n.sheet && e.SheetNames[0] != n.sheet) throw new Error("Sheet not found: " + n.sheet);
						return cc(r, 9, di(0, 16, n)),
							function(e, t, n, r) {
								var i, a = Array.isArray(t),
									o = nn(t["!ref"] || "A1"),
									s = "",
									u = [];
								if (o.e.c > 255 || o.e.r > 16383) {
									if (r.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
									o.e.c = Math.min(o.e.c, 255), o.e.r = Math.min(o.e.c, 16383), i = tn(o)
								}
								for (var c = o.s.r; c <= o.e.r; ++c) {
									s = Wt(c);
									for (var l = o.s.c; l <= o.e.c; ++l) {
										c === o.s.r && (u[l] = Xt(l)), i = u[l] + s;
										var f = a ? (t[c] || [])[l] : t[i];
										f && fc(e, f, c, l)
									}
								}
							}(r, e.Sheets[e.SheetNames[i]], 0, n), cc(r, 10), r.end()
					}

					function hc(e, t, n) {
						cc(e, "Font", function(e, t) {
							var n = e.name || "Arial",
								r = t && 5 == t.biff,
								i = Ut(r ? 15 + n.length : 16 + 2 * n.length);
							return i.write_shift(2, 20 * (e.sz || 12)), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, n.length), r || i.write_shift(1, 1), i.write_shift((r ? 1 : 2) * n.length, n, r ? "sbcs" : "utf16le"), i
						}({
							sz: 12,
							color: {
								theme: 1
							},
							name: "Arial",
							family: 2,
							scheme: "minor"
						}, n))
					}

					function pc(e, t, n, r, i) {
						var a = 16 + gs(i.cellXfs, t, i);
						if (null != t.v || t.bf)
							if (t.bf) cc(e, "Formula", Jo(t, n, r, 0, a));
							else switch (t.t) {
								case "d":
								case "n":
									cc(e, "Number", function(e, t, n, r) {
										var i = Ut(14);
										return ti(e, t, r, i), On(n, i), i
									}(n, r, "d" == t.t ? G(te(t.v)) : t.v, a));
									break;
								case "b":
								case "e":
									cc(e, 517, yi(n, r, t.v, a, 0, t.t));
									break;
								case "s":
								case "str":
									if (i.bookSST) cc(e, "LabelSst", function(e, t, n, r) {
										var i = Ut(10);
										return ti(e, t, r, i), i.write_shift(4, n), i
									}(n, r, _s(i.Strings, t.v, i.revStrings), a));
									else cc(e, "Label", function(e, t, n, r, i) {
										var a = !i || 8 == i.biff,
											o = Ut(+a + 8 + (1 + a) * n.length);
										return ti(e, t, r, o), o.write_shift(2, n.length), a && o.write_shift(1, 1), o.write_shift((1 + a) * n.length, n, a ? "utf16le" : "sbcs"), o
									}(n, r, t.v, a, i));
									break;
								default:
									cc(e, "Blank", ti(n, r, a))
							} else cc(e, "Blank", ti(n, r, a))
					}

					function _c(e, t, n) {
						var r, i = Ht(),
							a = n.SheetNames[e],
							o = n.Sheets[a] || {},
							s = (n || {}).Workbook || {},
							u = (s.Sheets || [])[e] || {},
							c = Array.isArray(o),
							l = 8 == t.biff,
							f = "",
							d = [],
							h = nn(o["!ref"] || "A1"),
							p = l ? 65536 : 16384;
						if (h.e.c > 255 || h.e.r >= p) {
							if (t.WTF) throw new Error("Range " + (o["!ref"] || "A1") + " exceeds format limit A1:IV16384");
							h.e.c = Math.min(h.e.c, 255), h.e.r = Math.min(h.e.c, p - 1)
						}
						cc(i, 2057, di(0, 16, t)), cc(i, "CalcMode", Ur(1)), cc(i, "CalcCount", Ur(100)), cc(i, "CalcRefMode", Rr(!0)), cc(i, "CalcIter", Rr(!1)), cc(i, "CalcDelta", On(.001)), cc(i, "CalcSaveRecalc", Rr(!0)), cc(i, "PrintRowCol", Rr(!1)), cc(i, "PrintGrid", Rr(!1)), cc(i, "GridSet", Ur(1)), cc(i, "Guts", function(e) {
							var t = Ut(8);
							return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t
						}([0, 0])), cc(i, "HCenter", Rr(!1)), cc(i, "VCenter", Rr(!1)), cc(i, 512, function(e, t) {
							var n = 8 != t.biff && t.biff ? 2 : 4,
								r = Ut(2 * n + 6);
							return r.write_shift(n, e.s.r), r.write_shift(n, e.e.r + 1), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c + 1), r.write_shift(2, 0), r
						}(h, t)), l && (o["!links"] = []);
						for (var _ = h.s.r; _ <= h.e.r; ++_) {
							f = Wt(_);
							for (var m = h.s.c; m <= h.e.c; ++m) {
								_ === h.s.r && (d[m] = Xt(m)), r = d[m] + f;
								var b = c ? (o[_] || [])[m] : o[r];
								b && (pc(i, b, _, m, t), l && b.l && o["!links"].push([r, b.l]))
							}
						}
						var g = u.CodeName || u.name || a;
						return l && cc(i, "Window2", function(e) {
							var t = Ut(18),
								n = 1718;
							return e && e.RTL && (n |= 64), t.write_shift(2, n), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t
						}((s.Views || [])[0])), l && (o["!merges"] || []).length && cc(i, "MergeCells", function(e) {
							var t = Ut(2 + 8 * e.length);
							t.write_shift(2, e.length);
							for (var n = 0; n < e.length; ++n) ai(e[n], t);
							return t
						}(o["!merges"])), l && function(e, t) {
							for (var n = 0; n < t["!links"].length; ++n) {
								var r = t["!links"][n];
								cc(e, "HLink", ki(r)), r[1].Tooltip && cc(e, "HLinkTooltip", Oi(r))
							}
							delete t["!links"]
						}(i, o), cc(i, "CodeName", qr(g)), l && function(e, t) {
							var n = Ut(19);
							n.write_shift(4, 2151), n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(2, 3), n.write_shift(1, 1), n.write_shift(4, 0), cc(e, "FeatHdr", n), (n = Ut(39)).write_shift(4, 2152), n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(2, 3), n.write_shift(1, 0), n.write_shift(4, 0), n.write_shift(2, 1), n.write_shift(4, 4), n.write_shift(2, 0), ai(nn(t["!ref"] || "A1"), n), n.write_shift(4, 4), cc(e, "Feat", n)
						}(i, o), cc(i, "EOF"), i.end()
					}

					function mc(e, t, n) {
						var r = Ht(),
							i = (e || {}).Workbook || {},
							a = i.Sheets || [],
							o = i.WBProps || {},
							s = 8 == n.biff,
							u = 5 == n.biff;
						(cc(r, 2057, di(0, 5, n)), "xla" == n.bookType && cc(r, "Addin"), cc(r, "InterfaceHdr", s ? Ur(1200) : null), cc(r, "Mms", function(e, t) {
							t || (t = Ut(e));
							for (var n = 0; n < e; ++n) t.write_shift(1, 0);
							return t
						}(2)), u && cc(r, "ToolbarHdr"), u && cc(r, "ToolbarEnd"), cc(r, "InterfaceEnd"), cc(r, "WriteAccess", function(e, t) {
							var n = !t || 8 == t.biff,
								r = Ut(n ? 112 : 54);
							for (r.write_shift(8 == t.biff ? 2 : 1, 7), n && r.write_shift(1, 0), r.write_shift(4, 859007059), r.write_shift(4, 5458548 | (n ? 0 : 536870912)); r.l < r.length;) r.write_shift(1, n ? 0 : 32);
							return r
						}(0, n)), cc(r, "CodePage", Ur(s ? 1200 : 1252)), s && cc(r, "DSF", Ur(0)), s && cc(r, "Excel9File"), cc(r, "RRTabId", function(e) {
							for (var t = Ut(2 * e), n = 0; n < e; ++n) t.write_shift(2, n + 1);
							return t
						}(e.SheetNames.length)), s && e.vbaraw && cc(r, "ObProj"), s && e.vbaraw) && cc(r, "CodeName", qr(o.CodeName || "ThisWorkbook"));
						cc(r, "BuiltInFnGroupCount", Ur(17)), cc(r, "WinProtect", Rr(!1)), cc(r, "Protect", Rr(!1)), cc(r, "Password", Ur(0)), s && cc(r, "Prot4Rev", Rr(!1)), s && cc(r, "Prot4RevPass", Ur(0)), cc(r, "Window1", function() {
								var e = Ut(18);
								return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e
							}()), cc(r, "Backup", Rr(!1)), cc(r, "HideObj", Ur(0)), cc(r, "Date1904", Rr("true" == function(e) {
								return e.Workbook && e.Workbook.WBProps && Be(e.Workbook.WBProps.date1904) ? "true" : "false"
							}(e))), cc(r, "CalcPrecision", Rr(!0)), s && cc(r, "RefreshAll", Rr(!1)), cc(r, "BookBool", Ur(0)), hc(r, 0, n),
							function(e, t, n) {
								t && [
									[5, 8],
									[23, 26],
									[41, 44],
									[50, 392]
								].forEach((function(r) {
									for (var i = r[0]; i <= r[1]; ++i) null != t[i] && cc(e, "Format", _i(i, t[i], n))
								}))
							}(r, e.SSF, n),
							function(e, t) {
								for (var n = 0; n < 16; ++n) cc(e, "XF", gi({
									numFmtId: 0,
									style: !0
								}, 0, t));
								t.cellXfs.forEach((function(n) {
									cc(e, "XF", gi(n, 0, t))
								}))
							}(r, n), s && cc(r, "UsesELFs", Rr(!1));
						var c = r.end(),
							l = Ht();
						s && cc(l, "Country", function(e) {
							return e || (e = Ut(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
						}()), s && n.Strings && function(e, t, n, r) {
							var i = r || (n || []).length || 0;
							if (i <= 8224) return cc(e, t, n, i);
							var a = +t || +uc[t];
							if (!isNaN(a)) {
								for (var o = n.parts || [], s = 0, u = 0, c = 0; c + (o[s] || 8224) <= 8224;) c += o[s] || 8224, s++;
								var l = e.next(4);
								for (l.write_shift(2, a), l.write_shift(2, c), e.push(n.slice(u, u + c)), u += c; u < i;) {
									for ((l = e.next(4)).write_shift(2, 60), c = 0; c + (o[s] || 8224) <= 8224;) c += o[s] || 8224, s++;
									l.write_shift(2, c), e.push(n.slice(u, u + c)), u += c
								}
							}
						}(l, "SST", function(e, t) {
							var n = Ut(8);
							n.write_shift(4, e.Count), n.write_shift(4, e.Unique);
							for (var r = [], i = 0; i < e.length; ++i) r[i] = Vr(e[i]);
							var a = O([n].concat(r));
							return a.parts = [n.length].concat(r.map((function(e) {
								return e.length
							}))), a
						}(n.Strings)), cc(l, "EOF");
						var f = l.end(),
							d = Ht(),
							h = 0,
							p = 0;
						for (p = 0; p < e.SheetNames.length; ++p) h += (s ? 12 : 11) + (s ? 2 : 1) * e.SheetNames[p].length;
						var _ = c.length + h + f.length;
						for (p = 0; p < e.SheetNames.length; ++p) {
							cc(d, "BoundSheet8", hi({
								pos: _,
								hs: (a[p] || {}).Hidden || 0,
								dt: 0,
								name: e.SheetNames[p]
							}, n)), _ += t[p].length
						}
						var m = d.end();
						if (h != m.length) throw new Error("BS8 " + h + " != " + m.length);
						var b = [];
						return c.length && b.push(c), m.length && b.push(m), f.length && b.push(f), ct([b])
					}

					function bc(e, t) {
						var n = t || {};
						switch (n.biff || 2) {
							case 8:
							case 5:
								return function(e, t) {
									var n = t || {},
										r = [];
									e && !e.SSF && (e.SSF = M.get_table()), e && e.SSF && (I(M), M.load_table(e.SSF), n.revssf = z(e.SSF), n.revssf[e.SSF[65535]] = 0, n.ssf = e.SSF), n.Strings = [], n.Strings.Count = 0, n.Strings.Unique = 0, Uc(n), n.cellXfs = [], gs(n.cellXfs, {}, {
										revssf: {
											General: 0
										}
									}), e.Props || (e.Props = {});
									for (var i = 0; i < e.SheetNames.length; ++i) r[r.length] = _c(i, n, e);
									return r.unshift(mc(e, r, n)), ct([r])
								}(e, t);
							case 4:
							case 3:
							case 2:
								return dc(e, t)
						}
						throw new Error("invalid type " + n.bookType + " for BIFF")
					}
					var gc = function() {
						function e(e, t) {
							var n = t || {},
								r = n.dense ? [] : {},
								i = (e = e.replace(/<!--.*?-->/g, "")).match(/<table/i);
							if (!i) throw new Error("Invalid HTML: could not find <table>");
							var a = e.match(/<\/table/i),
								o = i.index,
								s = a && a.index || e.length,
								u = function(e, t, n) {
									if (ue || "string" == typeof t) return e.split(t);
									for (var r = e.split(t), i = [r[0]], a = 1; a < r.length; ++a) i.push(n), i.push(r[a]);
									return i
								}(e.slice(o, s), /(:?<tr[^>]*>)/i, "<tr>"),
								c = -1,
								l = 0,
								f = 0,
								d = 0,
								h = {
									s: {
										r: 1e7,
										c: 1e7
									},
									e: {
										r: 0,
										c: 0
									}
								},
								p = [];
							for (o = 0; o < u.length; ++o) {
								var _ = u[o].trim(),
									m = _.slice(0, 3).toLowerCase();
								if ("<tr" != m) {
									if ("<td" == m || "<th" == m) {
										var b = _.split(/<\/t[dh]>/i);
										for (s = 0; s < b.length; ++s) {
											var g = b[s].trim();
											if (g.match(/<t[dh]/i)) {
												for (var v = g, y = 0;
													"<" == v.charAt(0) && (y = v.indexOf(">")) > -1;) v = v.slice(y + 1);
												for (var A = 0; A < p.length; ++A) {
													var S = p[A];
													S.s.c == l && S.s.r < c && c <= S.e.r && (l = S.e.c + 1, A = -1)
												}
												var w = we(g.slice(0, g.indexOf(">")));
												d = w.colspan ? +w.colspan : 1, ((f = +w.rowspan) > 1 || d > 1) && p.push({
													s: {
														r: c,
														c: l
													},
													e: {
														r: c + (f || 1) - 1,
														c: l + d - 1
													}
												});
												var E = w.t || "";
												if (v.length) {
													if (v = Ye(v), h.s.r > c && (h.s.r = c), h.e.r < c && (h.e.r = c), h.s.c > l && (h.s.c = l), h.e.c < l && (h.e.c = l), v.length) {
														var T = {
															t: "s",
															v: v
														};
														n.raw || !v.trim().length || "s" == E || ("TRUE" === v ? T = {
															t: "b",
															v: !0
														} : "FALSE" === v ? T = {
															t: "b",
															v: !1
														} : isNaN(ae(v)) ? isNaN(oe(v).getDate()) || (T = {
															t: "d",
															v: te(v)
														}, n.cellDates || (T = {
															t: "n",
															v: G(T.v)
														}), T.z = n.dateNF || M._table[14]) : T = {
															t: "n",
															v: ae(v)
														}), n.dense ? (r[c] || (r[c] = []), r[c][l] = T) : r[Zt({
															r: c,
															c: l
														})] = T, l += d
													}
												} else l += d
											}
										}
									}
								} else {
									if (++c, n.sheetRows && n.sheetRows <= c) {
										--c;
										break
									}
									l = 0
								}
							}
							return r["!ref"] = tn(h), p.length && (r["!merges"] = p), r
						}

						function t(e, t, n, r) {
							for (var i = e["!merges"] || [], a = [], o = t.s.c; o <= t.e.c; ++o) {
								for (var s = 0, u = 0, c = 0; c < i.length; ++c)
									if (!(i[c].s.r > n || i[c].s.c > o || i[c].e.r < n || i[c].e.c < o)) {
										if (i[c].s.r < n || i[c].s.c < o) {
											s = -1;
											break
										}
										s = i[c].e.r - i[c].s.r + 1, u = i[c].e.c - i[c].s.c + 1;
										break
									} if (!(s < 0)) {
									var l = Zt({
											r: n,
											c: o
										}),
										f = r.dense ? (e[n] || [])[o] : e[l],
										d = f && null != f.v && (f.h || Ie(f.w || (rn(f), f.w) || "")) || "",
										h = {};
									s > 1 && (h.rowspan = s), u > 1 && (h.colspan = u), h.t = f && f.t || "z", r.editable && (d = '<span contenteditable="true">' + d + "</span>"), h.id = (r.id || "sjs") + "-" + l, "z" != h.t && (h.v = f.v, null != f.z && (h.z = f.z)), a.push(Xe("td", d, h))
								}
							}
							return "<tr>" + a.join("") + "</tr>"
						}

						function n(e, t, n) {
							return [].join("") + "<table" + (n && n.id ? ' id="' + n.id + '"' : "") + ">"
						}
						var r = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
							i = "</body></html>";
						return {
							to_workbook: function(t, n) {
								return an(e(t, n), n)
							},
							to_sheet: e,
							_row: t,
							BEGIN: r,
							END: i,
							_preamble: n,
							from_sheet: function(e, a) {
								var o = a || {},
									s = null != o.header ? o.header : r,
									u = null != o.footer ? o.footer : i,
									c = [s],
									l = en(e["!ref"]);
								o.dense = Array.isArray(e), c.push(n(0, 0, o));
								for (var f = l.s.r; f <= l.e.r; ++f) c.push(t(e, l, f, o));
								return c.push("</table>" + u), c.join("")
							}
						}
					}();

					function vc(e, t, n) {
						var r = n || {},
							i = 0,
							a = 0;
						if (null != r.origin)
							if ("number" == typeof r.origin) i = r.origin;
							else {
								var o = "string" == typeof r.origin ? Jt(r.origin) : r.origin;
								i = o.r, a = o.c
							} var s = t.getElementsByTagName("tr"),
							u = Math.min(r.sheetRows || 1e7, s.length),
							c = {
								s: {
									r: 0,
									c: 0
								},
								e: {
									r: i,
									c: a
								}
							};
						if (e["!ref"]) {
							var l = en(e["!ref"]);
							c.s.r = Math.min(c.s.r, l.s.r), c.s.c = Math.min(c.s.c, l.s.c), c.e.r = Math.max(c.e.r, l.e.r), c.e.c = Math.max(c.e.c, l.e.c), -1 == i && (c.e.r = i = l.e.r + 1)
						}
						var f = [],
							d = 0,
							h = e["!rows"] || (e["!rows"] = []),
							p = 0,
							_ = 0,
							m = 0,
							b = 0,
							g = 0,
							v = 0;
						for (e["!cols"] || (e["!cols"] = []); p < s.length && _ < u; ++p) {
							var y = s[p];
							if (Ac(y)) {
								if (r.display) continue;
								h[_] = {
									hidden: !0
								}
							}
							var A = y.children;
							for (m = b = 0; m < A.length; ++m) {
								var S = A[m];
								if (!r.display || !Ac(S)) {
									var w = S.hasAttribute("v") ? S.getAttribute("v") : Ye(S.innerHTML),
										E = S.getAttribute("z");
									for (d = 0; d < f.length; ++d) {
										var T = f[d];
										T.s.c == b + a && T.s.r < _ + i && _ + i <= T.e.r && (b = T.e.c + 1 - a, d = -1)
									}
									v = +S.getAttribute("colspan") || 1, ((g = +S.getAttribute("rowspan") || 1) > 1 || v > 1) && f.push({
										s: {
											r: _ + i,
											c: b + a
										},
										e: {
											r: _ + i + (g || 1) - 1,
											c: b + a + (v || 1) - 1
										}
									});
									var C = {
											t: "s",
											v: w
										},
										$ = S.getAttribute("t") || "";
									null != w && (0 == w.length ? C.t = $ || "z" : r.raw || 0 == w.trim().length || "s" == $ || ("TRUE" === w ? C = {
										t: "b",
										v: !0
									} : "FALSE" === w ? C = {
										t: "b",
										v: !1
									} : isNaN(ae(w)) ? isNaN(oe(w).getDate()) || (C = {
										t: "d",
										v: te(w)
									}, r.cellDates || (C = {
										t: "n",
										v: G(C.v)
									}), C.z = r.dateNF || M._table[14]) : C = {
										t: "n",
										v: ae(w)
									})), void 0 === C.z && null != E && (C.z = E), r.dense ? (e[_ + i] || (e[_ + i] = []), e[_ + i][b + a] = C) : e[Zt({
										c: b + a,
										r: _ + i
									})] = C, c.e.c < b + a && (c.e.c = b + a), b += v
								}
							}++_
						}
						return f.length && (e["!merges"] = (e["!merges"] || []).concat(f)), c.e.r = Math.max(c.e.r, _ - 1 + i), e["!ref"] = tn(c), _ >= u && (e["!fullref"] = tn((c.e.r = s.length - p + _ - 1 + i, c))), e
					}

					function yc(e, t) {
						return vc((t || {}).dense ? [] : {}, e, t)
					}

					function Ac(e) {
						var t = "",
							n = function(e) {
								return e.ownerDocument.defaultView && "function" == typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" == typeof getComputedStyle ? getComputedStyle : null
							}(e);
						return n && (t = n(e).getPropertyValue("display")), t || (t = e.style.display), "none" === t
					}
					var Sc = function() {
						var e = function(e) {
								var t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, (function(e, t) {
									return Array(parseInt(t, 10) + 1).join(" ")
								})).replace(/<text:tab[^>]*\/>/g, "\t").replace(/<text:line-break\/>/g, "\n");
								return [$e(t.replace(/<[^>]*>/g, ""))]
							},
							t = {
								day: ["d", "dd"],
								month: ["m", "mm"],
								year: ["y", "yy"],
								hours: ["h", "hh"],
								minutes: ["m", "mm"],
								seconds: ["s", "ss"],
								"am-pm": ["A/P", "AM/PM"],
								"day-of-week": ["ddd", "dddd"],
								era: ["e", "ee"],
								quarter: ["\\Qm", 'm\\"th quarter"']
							};
						return function(n, r) {
							var i, a, o, s, u, c, l = r || {},
								f = Fu(n),
								d = [],
								h = {
									name: ""
								},
								p = "",
								_ = 0,
								m = {},
								b = [],
								g = l.dense ? [] : {},
								v = {
									value: ""
								},
								y = "",
								A = 0,
								S = [],
								w = -1,
								E = -1,
								T = {
									s: {
										r: 1e6,
										c: 1e7
									},
									e: {
										r: 0,
										c: 0
									}
								},
								C = 0,
								$ = {},
								k = [],
								O = {},
								x = [],
								P = 1,
								M = 1,
								I = [],
								L = {
									Names: []
								},
								D = {},
								B = ["", ""],
								N = [],
								R = {},
								F = "",
								U = 0,
								j = !1,
								H = !1,
								Y = 0;
							for (Uu.lastIndex = 0, f = f.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); u = Uu.exec(f);) switch (u[3] = u[3].replace(/_.*$/, "")) {
								case "table":
								case "å·¥ä½œè¡¨":
									"/" === u[1] ? (T.e.c >= T.s.c && T.e.r >= T.s.r ? g["!ref"] = tn(T) : g["!ref"] = "A1:A1", l.sheetRows > 0 && l.sheetRows <= T.e.r && (g["!fullref"] = g["!ref"], T.e.r = l.sheetRows - 1, g["!ref"] = tn(T)), k.length && (g["!merges"] = k), x.length && (g["!rows"] = x), o.name = o["åç§°"] || o.name, "undefined" != typeof JSON && JSON.stringify(o), b.push(o.name), m[o.name] = g, H = !1) : "/" !== u[0].charAt(u[0].length - 2) && (o = we(u[0], !1), w = E = -1, T.s.r = T.s.c = 1e7, T.e.r = T.e.c = 0, g = l.dense ? [] : {}, k = [], x = [], H = !0);
									break;
								case "table-row-group":
									"/" === u[1] ? --C : ++C;
									break;
								case "table-row":
								case "è¡Œ":
									if ("/" === u[1]) {
										w += P, P = 1;
										break
									}
									if ((s = we(u[0], !1))["è¡Œå·"] ? w = s["è¡Œå·"] - 1 : -1 == w && (w = 0), (P = +s["number-rows-repeated"] || 1) < 10)
										for (Y = 0; Y < P; ++Y) C > 0 && (x[w + Y] = {
											level: C
										});
									E = -1;
									break;
								case "covered-table-cell":
									"/" !== u[1] && ++E, l.sheetStubs && (l.dense ? (g[w] || (g[w] = []), g[w][E] = {
										t: "z"
									}) : g[Zt({
										r: w,
										c: E
									})] = {
										t: "z"
									}), y = "", S = [];
									break;
								case "table-cell":
								case "æ•°æ®":
									if ("/" === u[0].charAt(u[0].length - 2)) ++E, v = we(u[0], !1), M = parseInt(v["number-columns-repeated"] || "1", 10), c = {
										t: "z",
										v: null
									}, v.formula && 0 != l.cellFormula && (c.f = us($e(v.formula))), "string" == (v["æ•°æ®ç±»åž‹"] || v["value-type"]) && (c.t = "s", c.v = $e(v["string-value"] || ""), l.dense ? (g[w] || (g[w] = []), g[w][E] = c) : g[Zt({
										r: w,
										c: E
									})] = c), E += M - 1;
									else if ("/" !== u[1]) {
										M = 1;
										var V = P ? w + P - 1 : w;
										if (++E > T.e.c && (T.e.c = E), E < T.s.c && (T.s.c = E), w < T.s.r && (T.s.r = w), V > T.e.r && (T.e.r = V), N = [], R = {}, c = {
												t: (v = we(u[0], !1))["æ•°æ®ç±»åž‹"] || v["value-type"],
												v: null
											}, l.cellFormula)
											if (v.formula && (v.formula = $e(v.formula)), v["number-matrix-columns-spanned"] && v["number-matrix-rows-spanned"] && (O = {
													s: {
														r: w,
														c: E
													},
													e: {
														r: w + (parseInt(v["number-matrix-rows-spanned"], 10) || 0) - 1,
														c: E + (parseInt(v["number-matrix-columns-spanned"], 10) || 0) - 1
													}
												}, c.F = tn(O), I.push([O, c.F])), v.formula) c.f = us(v.formula);
											else
												for (Y = 0; Y < I.length; ++Y) w >= I[Y][0].s.r && w <= I[Y][0].e.r && E >= I[Y][0].s.c && E <= I[Y][0].e.c && (c.F = I[Y][1]);
										switch ((v["number-columns-spanned"] || v["number-rows-spanned"]) && (O = {
											s: {
												r: w,
												c: E
											},
											e: {
												r: w + (parseInt(v["number-rows-spanned"], 10) || 0) - 1,
												c: E + (parseInt(v["number-columns-spanned"], 10) || 0) - 1
											}
										}, k.push(O)), v["number-columns-repeated"] && (M = parseInt(v["number-columns-repeated"], 10)), c.t) {
											case "boolean":
												c.t = "b", c.v = Be(v["boolean-value"]);
												break;
											case "float":
											case "percentage":
											case "currency":
												c.t = "n", c.v = parseFloat(v.value);
												break;
											case "date":
												c.t = "d", c.v = te(v["date-value"]), l.cellDates || (c.t = "n", c.v = G(c.v)), c.z = "m/d/yy";
												break;
											case "time":
												c.t = "n", c.v = J(v["time-value"]) / 86400;
												break;
											case "number":
												c.t = "n", c.v = parseFloat(v["æ•°æ®æ•°å€¼"]);
												break;
											default:
												if ("string" !== c.t && "text" !== c.t && c.t) throw new Error("Unsupported value type " + c.t);
												c.t = "s", null != v["string-value"] && (y = $e(v["string-value"]), S = [])
										}
									} else {
										if (j = !1, "s" === c.t && (c.v = y || "", S.length && (c.R = S), j = 0 == A), D.Target && (c.l = D), N.length > 0 && (c.c = N, N = []), y && !1 !== l.cellText && (c.w = y), j && (c.t = "z", delete c.v), (!j || l.sheetStubs) && !(l.sheetRows && l.sheetRows <= w))
											for (var z = 0; z < P; ++z) {
												if (M = parseInt(v["number-columns-repeated"] || "1", 10), l.dense)
													for (g[w + z] || (g[w + z] = []), g[w + z][E] = 0 == z ? c : re(c); --M > 0;) g[w + z][E + M] = re(c);
												else
													for (g[Zt({
															r: w + z,
															c: E
														})] = c; --M > 0;) g[Zt({
														r: w + z,
														c: E + M
													})] = re(c);
												T.e.c <= E && (T.e.c = E)
											}
										E += (M = parseInt(v["number-columns-repeated"] || "1", 10)) - 1, M = 0, c = {}, y = "", S = []
									}
									D = {};
									break;
								case "document":
								case "document-content":
								case "ç”µå­è¡¨æ ¼æ–‡æ¡£":
								case "spreadsheet":
								case "ä¸»ä½“":
								case "scripts":
								case "styles":
								case "font-face-decls":
								case "master-styles":
									if ("/" === u[1]) {
										if ((i = d.pop())[0] !== u[3]) throw "Bad state: " + i
									} else "/" !== u[0].charAt(u[0].length - 2) && d.push([u[3], !0]);
									break;
								case "annotation":
									if ("/" === u[1]) {
										if ((i = d.pop())[0] !== u[3]) throw "Bad state: " + i;
										R.t = y, S.length && (R.R = S), R.a = F, N.push(R)
									} else "/" !== u[0].charAt(u[0].length - 2) && d.push([u[3], !1]);
									F = "", U = 0, y = "", A = 0, S = [];
									break;
								case "creator":
									"/" === u[1] ? F = f.slice(U, u.index) : U = u.index + u[0].length;
									break;
								case "meta":
								case "å…ƒæ•°æ®":
								case "settings":
								case "config-item-set":
								case "config-item-map-indexed":
								case "config-item-map-entry":
								case "config-item-map-named":
								case "shapes":
								case "frame":
								case "text-box":
								case "image":
								case "data-pilot-tables":
								case "list-style":
								case "form":
								case "dde-links":
								case "event-listeners":
								case "chart":
									if ("/" === u[1]) {
										if ((i = d.pop())[0] !== u[3]) throw "Bad state: " + i
									} else "/" !== u[0].charAt(u[0].length - 2) && d.push([u[3], !1]);
									y = "", A = 0, S = [];
									break;
								case "scientific-number":
								case "currency-symbol":
								case "currency-style":
									break;
								case "number-style":
								case "percentage-style":
								case "date-style":
								case "time-style":
									if ("/" === u[1]) {
										if ($[h.name] = p, (i = d.pop())[0] !== u[3]) throw "Bad state: " + i
									} else "/" !== u[0].charAt(u[0].length - 2) && (p = "", h = we(u[0], !1), d.push([u[3], !0]));
									break;
								case "script":
								case "libraries":
								case "automatic-styles":
									break;
								case "default-style":
								case "page-layout":
								case "style":
								case "map":
								case "font-face":
								case "paragraph-properties":
								case "table-properties":
								case "table-column-properties":
								case "table-row-properties":
								case "table-cell-properties":
									break;
								case "number":
									switch (d[d.length - 1][0]) {
										case "time-style":
										case "date-style":
											a = we(u[0], !1), p += t[u[3]]["long" === a.style ? 1 : 0]
									}
									break;
								case "fraction":
									break;
								case "day":
								case "month":
								case "year":
								case "era":
								case "day-of-week":
								case "week-of-year":
								case "quarter":
								case "hours":
								case "minutes":
								case "seconds":
								case "am-pm":
									switch (d[d.length - 1][0]) {
										case "time-style":
										case "date-style":
											a = we(u[0], !1), p += t[u[3]]["long" === a.style ? 1 : 0]
									}
									break;
								case "boolean-style":
								case "boolean":
								case "text-style":
									break;
								case "text":
									if ("/>" === u[0].slice(-2)) break;
									if ("/" === u[1]) switch (d[d.length - 1][0]) {
										case "number-style":
										case "date-style":
										case "time-style":
											p += f.slice(_, u.index)
									} else _ = u.index + u[0].length;
									break;
								case "named-range":
									B = ls((a = we(u[0], !1))["cell-range-address"]);
									var Q = {
										Name: a.name,
										Ref: B[0] + "!" + B[1]
									};
									H && (Q.Sheet = b.length), L.Names.push(Q);
									break;
								case "text-content":
								case "text-properties":
								case "embedded-text":
									break;
								case "body":
								case "ç”µå­è¡¨æ ¼":
								case "forms":
								case "table-column":
								case "table-header-rows":
								case "table-rows":
								case "table-column-group":
								case "table-header-columns":
								case "table-columns":
								case "null-date":
								case "graphic-properties":
								case "calculation-settings":
								case "named-expressions":
								case "label-range":
								case "label-ranges":
								case "named-expression":
								case "sort":
								case "sort-by":
								case "sort-groups":
								case "tab":
								case "line-break":
								case "span":
									break;
								case "p":
								case "æ–‡æœ¬ä¸²":
									if (["master-styles"].indexOf(d[d.length - 1][0]) > -1) break;
									if ("/" !== u[1] || v && v["string-value"]) we(u[0], !1), A = u.index + u[0].length;
									else {
										var q = e(f.slice(A, u.index));
										y = (y.length > 0 ? y + "\n" : "") + q[0]
									}
									break;
								case "s":
									break;
								case "database-range":
									if ("/" === u[1]) break;
									try {
										m[(B = ls(we(u[0])["target-range-address"]))[0]]["!autofilter"] = {
											ref: B[1]
										}
									} catch (e) {}
									break;
								case "date":
								case "object":
									break;
								case "title":
								case "æ ‡é¢˜":
								case "desc":
								case "binary-data":
								case "table-source":
								case "scenario":
								case "iteration":
								case "content-validations":
								case "content-validation":
								case "help-message":
								case "error-message":
								case "database-ranges":
								case "filter":
								case "filter-and":
								case "filter-or":
								case "filter-condition":
								case "list-level-style-bullet":
								case "list-level-style-number":
								case "list-level-properties":
									break;
								case "sender-firstname":
								case "sender-lastname":
								case "sender-initials":
								case "sender-title":
								case "sender-position":
								case "sender-email":
								case "sender-phone-private":
								case "sender-fax":
								case "sender-company":
								case "sender-phone-work":
								case "sender-street":
								case "sender-city":
								case "sender-postal-code":
								case "sender-country":
								case "sender-state-or-province":
								case "author-name":
								case "author-initials":
								case "chapter":
								case "file-name":
								case "template-name":
								case "sheet-name":
								case "event-listener":
									break;
								case "initial-creator":
								case "creation-date":
								case "print-date":
								case "generator":
								case "document-statistic":
								case "user-defined":
								case "editing-duration":
								case "editing-cycles":
								case "config-item":
								case "page-number":
								case "page-count":
								case "time":
								case "cell-range-source":
								case "detective":
								case "operation":
								case "highlighted-range":
									break;
								case "data-pilot-table":
								case "source-cell-range":
								case "source-service":
								case "data-pilot-field":
								case "data-pilot-level":
								case "data-pilot-subtotals":
								case "data-pilot-subtotal":
								case "data-pilot-members":
								case "data-pilot-member":
								case "data-pilot-display-info":
								case "data-pilot-sort-info":
								case "data-pilot-layout-info":
								case "data-pilot-field-reference":
								case "data-pilot-groups":
								case "data-pilot-group":
								case "data-pilot-group-member":
								case "rect":
									break;
								case "dde-connection-decls":
								case "dde-connection-decl":
								case "dde-link":
								case "dde-source":
								case "properties":
								case "property":
									break;
								case "a":
									if ("/" !== u[1]) {
										if (!(D = we(u[0], !1)).href) break;
										D.Target = D.href, delete D.href, "#" == D.Target.charAt(0) && D.Target.indexOf(".") > -1 && (B = ls(D.Target.slice(1)), D.Target = "#" + B[0] + "!" + B[1])
									}
									break;
								case "table-protection":
								case "data-pilot-grand-total":
								case "office-document-common-attrs":
									break;
								default:
									switch (u[2]) {
										case "dc:":
										case "calcext:":
										case "loext:":
										case "ooo:":
										case "chartooo:":
										case "draw:":
										case "style:":
										case "chart:":
										case "form:":
										case "uof:":
										case "è¡¨:":
										case "å­—:":
											break;
										default:
											if (l.WTF) throw new Error(u)
									}
							}
							var W = {
								Sheets: m,
								SheetNames: b,
								Workbook: L
							};
							return l.bookSheets && delete W.Sheets, W
						}
					}();

					function wc(e, t) {
						t = t || {};
						var n = !!fe(e, "objectdata");
						n && function(e, t) {
							for (var n, r, i = Fu(e); n = Uu.exec(i);) switch (n[3]) {
								case "manifest":
									break;
								case "file-entry":
									if ("/" == (r = we(n[0], !1)).path && "application/vnd.oasis.opendocument.spreadsheet" !== r.type) throw new Error("This OpenDocument is not a spreadsheet");
									break;
								case "encryption-data":
								case "algorithm":
								case "start-key-generation":
								case "key-derivation":
									throw new Error("Unsupported ODS Encryption");
								default:
									if (t && t.WTF) throw n
							}
						}(he(e, "META-INF/manifest.xml"), t);
						var r = pe(e, "content.xml");
						if (!r) throw new Error("Missing content.xml in " + (n ? "ODS" : "UOF") + " file");
						var i = Sc(n ? r : Ne(r), t);
						return fe(e, "meta.xml") && (i.Props = or(he(e, "meta.xml"))), i
					}

					function Ec(e, t) {
						return Sc(e, t)
					}
					var Tc = function() {
							var e = "<office:document-styles " + Ke({
								"xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
								"xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
								"xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
								"xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
								"xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
								"xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
								"xmlns:xlink": "http://www.w3.org/1999/xlink",
								"xmlns:dc": "http://purl.org/dc/elements/1.1/",
								"xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
								"xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
								"xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
								"office:version": "1.2"
							}) + "></office:document-styles>";
							return function() {
								return ge + e
							}
						}(),
						Cc = function() {
							var e = function(e) {
									return xe(e).replace(/  +/g, (function(e) {
										return '<text:s text:c="' + e.length + '"/>'
									})).replace(/\t/g, "<text:tab/>").replace(/\n/g, "<text:line-break/>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>")
								},
								t = "          <table:table-cell />\n",
								n = function(n, r, i) {
									var a = [];
									a.push('      <table:table table:name="' + xe(r.SheetNames[i]) + '" table:style-name="ta1">\n');
									var o = 0,
										s = 0,
										u = en(n["!ref"]),
										c = n["!merges"] || [],
										l = 0,
										f = Array.isArray(n);
									for (o = 0; o < u.s.r; ++o) a.push("        <table:table-row></table:table-row>\n");
									for (; o <= u.e.r; ++o) {
										for (a.push("        <table:table-row>\n"), s = 0; s < u.s.c; ++s) a.push(t);
										for (; s <= u.e.c; ++s) {
											var d = !1,
												h = {},
												p = "";
											for (l = 0; l != c.length; ++l)
												if (!(c[l].s.c > s || c[l].s.r > o || c[l].e.c < s || c[l].e.r < o)) {
													c[l].s.c == s && c[l].s.r == o || (d = !0), h["table:number-columns-spanned"] = c[l].e.c - c[l].s.c + 1, h["table:number-rows-spanned"] = c[l].e.r - c[l].s.r + 1;
													break
												} if (d) a.push("          <table:covered-table-cell/>\n");
											else {
												var _ = Zt({
														r: o,
														c: s
													}),
													m = f ? (n[o] || [])[s] : n[_];
												if (m && m.f && (h["table:formula"] = xe(cs(m.f)), m.F && m.F.slice(0, _.length) == _)) {
													var b = en(m.F);
													h["table:number-matrix-columns-spanned"] = b.e.c - b.s.c + 1, h["table:number-matrix-rows-spanned"] = b.e.r - b.s.r + 1
												}
												if (m) {
													switch (m.t) {
														case "b":
															p = m.v ? "TRUE" : "FALSE", h["office:value-type"] = "boolean", h["office:boolean-value"] = m.v ? "true" : "false";
															break;
														case "n":
															p = m.w || String(m.v || 0), h["office:value-type"] = "float", h["office:value"] = m.v || 0;
															break;
														case "s":
														case "str":
															p = null == m.v ? "" : m.v, h["office:value-type"] = "string";
															break;
														case "d":
															p = m.w || te(m.v).toISOString(), h["office:value-type"] = "date", h["office:date-value"] = te(m.v).toISOString(), h["table:style-name"] = "ce1";
															break;
														default:
															a.push(t);
															continue
													}
													var g = e(p);
													if (m.l && m.l.Target) {
														var v = m.l.Target;
														g = Xe("text:a", g, {
															"xlink:href": v = "#" == v.charAt(0) ? "#" + fs(v.slice(1)) : v
														})
													}
													a.push("          " + Xe("table:table-cell", Xe("text:p", g, {}), h) + "\n")
												} else a.push(t)
											}
										}
										a.push("        </table:table-row>\n")
									}
									return a.push("      </table:table>\n"), a.join("")
								};
							return function(e, t) {
								var r = [ge],
									i = Ke({
										"xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
										"xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
										"xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
										"xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
										"xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
										"xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
										"xmlns:xlink": "http://www.w3.org/1999/xlink",
										"xmlns:dc": "http://purl.org/dc/elements/1.1/",
										"xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
										"xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
										"xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
										"xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
										"xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
										"xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
										"xmlns:math": "http://www.w3.org/1998/Math/MathML",
										"xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
										"xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
										"xmlns:ooo": "http://openoffice.org/2004/office",
										"xmlns:ooow": "http://openoffice.org/2004/writer",
										"xmlns:oooc": "http://openoffice.org/2004/calc",
										"xmlns:dom": "http://www.w3.org/2001/xml-events",
										"xmlns:xforms": "http://www.w3.org/2002/xforms",
										"xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
										"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
										"xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
										"xmlns:rpt": "http://openoffice.org/2005/report",
										"xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
										"xmlns:xhtml": "http://www.w3.org/1999/xhtml",
										"xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
										"xmlns:tableooo": "http://openoffice.org/2009/table",
										"xmlns:drawooo": "http://openoffice.org/2010/draw",
										"xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
										"xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
										"xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
										"xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
										"xmlns:css3t": "http://www.w3.org/TR/css3-text/",
										"office:version": "1.2"
									}),
									a = Ke({
										"xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
										"office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
									});
								"fods" == t.bookType ? r.push("<office:document" + i + a + ">\n") : r.push("<office:document-content" + i + ">\n"),
									function(e) {
										e.push(" <office:automatic-styles>\n"), e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'), e.push('   <number:month number:style="long"/>\n'), e.push("   <number:text>/</number:text>\n"), e.push('   <number:day number:style="long"/>\n'), e.push("   <number:text>/</number:text>\n"), e.push("   <number:year/>\n"), e.push("  </number:date-style>\n"), e.push('  <style:style style:name="ta1" style:family="table">\n'), e.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n'), e.push("  </style:style>\n"), e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'), e.push(" </office:automatic-styles>\n")
									}(r), r.push("  <office:body>\n"), r.push("    <office:spreadsheet>\n");
								for (var o = 0; o != e.SheetNames.length; ++o) r.push(n(e.Sheets[e.SheetNames[o]], e, o));
								return r.push("    </office:spreadsheet>\n"), r.push("  </office:body>\n"), "fods" == t.bookType ? r.push("</office:document>") : r.push("</office:document-content>"), r.join("")
							}
						}();

					function $c(e, t) {
						if ("fods" == t.bookType) return Cc(e, t);
						var n = me(),
							r = "",
							i = [],
							a = [];
						return _e(n, r = "mimetype", "application/vnd.oasis.opendocument.spreadsheet"), _e(n, r = "content.xml", Cc(e, t)), i.push([r, "text/xml"]), a.push([r, "ContentFile"]), _e(n, r = "styles.xml", Tc(e, t)), i.push([r, "text/xml"]), a.push([r, "StylesFile"]), _e(n, r = "meta.xml", rr()), i.push([r, "text/xml"]), a.push([r, "MetadataFile"]), _e(n, r = "manifest.rdf", function(e) {
							var t = [ge];
							t.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
							for (var n = 0; n != e.length; ++n) t.push(tr(e[n][0], e[n][1])), t.push(nr("", e[n][0]));
							return t.push(tr("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("")
						}(a)), i.push([r, "application/rdf+xml"]), _e(n, r = "META-INF/manifest.xml", function(e) {
							var t = [ge];
							t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'), t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
							for (var n = 0; n < e.length; ++n) t.push('  <manifest:file-entry manifest:full-path="' + e[n][0] + '" manifest:media-type="' + e[n][1] + '"/>\n');
							return t.push("</manifest:manifest>"), t.join("")
						}(i)), n
					}

					function kc(e) {
						return function(t, n) {
							var r = function(e, t) {
								if (!t) return 0;
								var n = e.SheetNames.indexOf(t);
								if (-1 == n) throw new Error("Sheet not found: " + t);
								return n
							}(t, n.sheet);
							return e.from_sheet(t.Sheets[t.SheetNames[r]], n, t)
						}
					}
					var Oc = kc(gc),
						xc = kc({
							from_sheet: cl
						}),
						Pc = kc(void 0 !== Di ? Di : {}),
						Mc = kc(void 0 !== Bi ? Bi : {}),
						Ic = kc(void 0 !== Ri ? Ri : {}),
						Lc = kc(void 0 !== da ? da : {}),
						Dc = kc({
							from_sheet: ll
						}),
						Bc = kc(void 0 !== Li ? Li : {}),
						Nc = kc(void 0 !== Ni ? Ni : {});

					function Rc(e) {
						return function(t) {
							for (var n = 0; n != e.length; ++n) {
								var r = e[n];
								void 0 === t[r[0]] && (t[r[0]] = r[1]), "n" === r[2] && (t[r[0]] = Number(t[r[0]]))
							}
						}
					}
					var Fc = function(e) {
							Rc([
								["cellNF", !1],
								["cellHTML", !0],
								["cellFormula", !0],
								["cellStyles", !1],
								["cellText", !0],
								["cellDates", !1],
								["sheetStubs", !1],
								["sheetRows", 0, "n"],
								["bookDeps", !1],
								["bookSheets", !1],
								["bookProps", !1],
								["bookFiles", !1],
								["bookVBA", !1],
								["password", ""],
								["WTF", !1]
							])(e)
						},
						Uc = Rc([
							["cellDates", !1],
							["bookSST", !1],
							["bookType", "xlsx"],
							["compression", !1],
							["WTF", !1]
						]);

					function jc(e) {
						return qn.WS.indexOf(e) > -1 ? "sheet" : qn.CS && e == qn.CS ? "chart" : qn.DS && e == qn.DS ? "dialog" : qn.MS && e == qn.MS ? "macro" : e && e.length ? e : "sheet"
					}

					function Hc(e, t, n, r, i, a, o, s, u, c, l, f) {
						try {
							a[r] = Kn(pe(e, n, !0), t);
							var d, h = he(e, t);
							switch (s) {
								case "sheet":
									d = vu(h, t, i, u, a[r], c, l, f);
									break;
								case "chart":
									if (!(d = yu(h, t, i, u, a[r], c)) || !d["!drawel"]) break;
									var p = be(d["!drawel"].Target, t),
										_ = Wn(p),
										m = be(function(e, t) {
											if (!e) return "??";
											var n = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
											return t["!id"][n].Target
										}(pe(e, p, !0), Kn(pe(e, _, !0), p)), p),
										b = Wn(m);
									d = eu(pe(e, m, !0), 0, 0, Kn(pe(e, b, !0), m), 0, d);
									break;
								case "macro":
									d = function(e, t, n, r, i, a, o, s) {
										return t.slice(-4), {
											"!type": "macro"
										}
									}(0, t, 0, 0, a[r]);
									break;
								case "dialog":
									d = function(e, t, n, r, i, a, o, s) {
										return t.slice(-4), {
											"!type": "dialog"
										}
									}(0, t, 0, 0, a[r]);
									break;
								default:
									throw new Error("Unrecognized sheet type " + s)
							}
							o[r] = d;
							var g = [];
							a && a[r] && H(a[r]).forEach((function(n) {
								if (a[r][n].Type == qn.CMNT) {
									var i = be(a[r][n].Target, t);
									if (!(g = wu(he(e, i, !0), i, u)) || !g.length) return;
									! function(e, t) {
										var n, r = Array.isArray(e);
										t.forEach((function(t) {
											var i = Jt(t.ref);
											if (r ? (e[i.r] || (e[i.r] = []), n = e[i.r][i.c]) : n = e[t.ref], !n) {
												n = {
													t: "z"
												}, r ? e[i.r][i.c] = n : e[t.ref] = n;
												var a = nn(e["!ref"] || "BDWGO1000001:A1");
												a.s.r > i.r && (a.s.r = i.r), a.e.r < i.r && (a.e.r = i.r), a.s.c > i.c && (a.s.c = i.c), a.e.c < i.c && (a.e.c = i.c);
												var o = tn(a);
												o !== e["!ref"] && (e["!ref"] = o)
											}
											n.c || (n.c = []);
											var s = {
												a: t.author,
												t: t.t,
												r: t.r
											};
											t.h && (s.h = t.h), n.c.push(s)
										}))
									}(d, g)
								}
							}))
						} catch (e) {
							if (u.WTF) throw e
						}
					}

					function Yc(e) {
						return "/" == e.charAt(0) ? e.slice(1) : e
					}

					function Vc(e, t) {
						if (I(M), Fc(t = t || {}), fe(e, "META-INF/manifest.xml")) return wc(e, t);
						if (fe(e, "objectdata.xml")) return wc(e, t);
						if (fe(e, "Index/Document.iwa")) throw new Error("Unsupported NUMBERS file");
						var n, r, i = function(e) {
								for (var t = e.FullPaths || H(e.files), n = [], r = 0; r < t.length; ++r) "/" != t[r].slice(-1) && n.push(t[r]);
								return n.sort()
							}(e),
							a = function(e) {
								var t = {
									workbooks: [],
									sheets: [],
									charts: [],
									dialogs: [],
									macros: [],
									rels: [],
									strs: [],
									comments: [],
									links: [],
									coreprops: [],
									extprops: [],
									custprops: [],
									themes: [],
									styles: [],
									calcchains: [],
									vba: [],
									drawings: [],
									TODO: [],
									xmlns: ""
								};
								if (!e || !e.match) return t;
								var n = {};
								if ((e.match(ye) || []).forEach((function(e) {
										var r = we(e);
										switch (r[0].replace(Ae, "<")) {
											case "<?xml":
												break;
											case "<Types":
												t.xmlns = r["xmlns" + (r[0].match(/<(\w+):/) || ["", ""])[1]];
												break;
											case "<Default":
												n[r.Extension] = r.ContentType;
												break;
											case "<Override":
												void 0 !== t[Yn[r.ContentType]] && t[Yn[r.ContentType]].push(r.PartName)
										}
									})), t.xmlns !== tt.CT) throw new Error("Unknown Namespace: " + t.xmlns);
								return t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "", t.sst = t.strs.length > 0 ? t.strs[0] : "", t.style = t.styles.length > 0 ? t.styles[0] : "", t.defaults = n, delete t.calcchains, t
							}(pe(e, "[Content_Types].xml")),
							o = !1;
						if (0 === a.workbooks.length && (he(e, r = "xl/workbook.xml", !0) && a.workbooks.push(r)), 0 === a.workbooks.length) {
							if (!he(e, r = "xl/workbook.bin", !0)) throw new Error("Could not find workbook");
							a.workbooks.push(r), o = !0
						}
						"bin" == a.workbooks[0].slice(-3) && (o = !0);
						var s = {},
							u = {};
						if (!t.bookSheets && !t.bookProps) {
							if (ds = [], a.sst) try {
								ds = Su(he(e, Yc(a.sst)), a.sst, t)
							} catch (e) {
								if (t.WTF) throw e
							}
							t.cellStyles && a.themes.length && (s = function(e, t, n) {
								return Ka(e, n)
							}(pe(e, a.themes[0].replace(/^\//, ""), !0) || "", a.themes[0], t)), a.style && (u = Au(he(e, Yc(a.style)), a.style, s, t))
						}
						a.links.map((function(n) {
							try {
								Kn(pe(e, Wn(Yc(n))), n);
								return Tu(he(e, Yc(n)), 0, n, t)
							} catch (e) {}
						}));
						var c = gu(he(e, Yc(a.workbooks[0])), a.workbooks[0], t),
							l = {},
							f = "";
						a.coreprops.length && ((f = he(e, Yc(a.coreprops[0]), !0)) && (l = or(f)), 0 !== a.extprops.length && ((f = he(e, Yc(a.extprops[0]), !0)) && function(e, t, n) {
							var r = {};
							t || (t = {}), e = Ne(e), cr.forEach((function(n) {
								var i = (e.match(He(n[0])) || [])[1];
								switch (n[2]) {
									case "string":
										i && (t[n[1]] = $e(i));
										break;
									case "bool":
										t[n[1]] = "true" === i;
										break;
									case "raw":
										var a = e.match(new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"));
										a && a.length > 0 && (r[n[1]] = a[1])
								}
							})), r.HeadingPairs && r.TitlesOfParts && lr(r.HeadingPairs, r.TitlesOfParts, t, n)
						}(f, l, t)));
						var d = {};
						t.bookSheets && !t.bookProps || 0 !== a.custprops.length && ((f = pe(e, Yc(a.custprops[0]), !0)) && (d = function(e, t) {
							var n = {},
								r = "",
								i = e.match(dr);
							if (i)
								for (var a = 0; a != i.length; ++a) {
									var o = i[a],
										s = we(o);
									switch (s[0]) {
										case "<?xml":
										case "<Properties":
											break;
										case "<property":
											r = $e(s.name);
											break;
										case "</property>":
											r = null;
											break;
										default:
											if (0 === o.indexOf("<vt:")) {
												var u = o.split(">"),
													c = u[0].slice(4),
													l = u[1];
												switch (c) {
													case "lpstr":
													case "bstr":
													case "lpwstr":
														n[r] = $e(l);
														break;
													case "bool":
														n[r] = Be(l);
														break;
													case "i1":
													case "i2":
													case "i4":
													case "i8":
													case "int":
													case "uint":
														n[r] = parseInt(l, 10);
														break;
													case "r4":
													case "r8":
													case "decimal":
														n[r] = parseFloat(l);
														break;
													case "filetime":
													case "date":
														n[r] = te(l);
														break;
													case "cy":
													case "error":
														n[r] = $e(l);
														break;
													default:
														if ("/" == c.slice(-1)) break;
														t.WTF && "undefined" != typeof console && console.warn("Unexpected", o, c, u)
												}
											} else if ("</" === o.slice(0, 2));
											else if (t.WTF) throw new Error(o)
									}
								}
							return n
						}(f, t)));
						var h = {};
						if ((t.bookSheets || t.bookProps) && (c.Sheets ? n = c.Sheets.map((function(e) {
								return e.name
							})) : l.Worksheets && l.SheetNames.length > 0 && (n = l.SheetNames), t.bookProps && (h.Props = l, h.Custprops = d), t.bookSheets && void 0 !== n && (h.SheetNames = n), t.bookSheets ? h.SheetNames : t.bookProps)) return h;
						n = {};
						var p = {};
						t.bookDeps && a.calcchain && (p = Eu(he(e, Yc(a.calcchain)), a.calcchain));
						var _, m, b = 0,
							g = {},
							v = c.Sheets;
						l.Worksheets = v.length, l.SheetNames = [];
						for (var y = 0; y != v.length; ++y) l.SheetNames[y] = v[y].name;
						var A = o ? "bin" : "xml",
							S = a.workbooks[0].lastIndexOf("/"),
							w = (a.workbooks[0].slice(0, S + 1) + "_rels/" + a.workbooks[0].slice(S + 1) + ".rels").replace(/^\//, "");
						fe(e, w) || (w = "xl/_rels/workbook." + A + ".rels");
						var E = Kn(pe(e, w, !0), w);
						E && (E = function(e, t) {
							if (!e) return 0;
							try {
								e = t.map((function(t) {
									return t.id || (t.id = t.strRelID), [t.name, e["!id"][t.id].Target, jc(e["!id"][t.id].Type)]
								}))
							} catch (e) {
								return null
							}
							return e && 0 !== e.length ? e : null
						}(E, c.Sheets));
						var T = he(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
						e: for (b = 0; b != l.Worksheets; ++b) {
							var C = "sheet";
							if (E && E[b] ? (_ = "xl/" + E[b][1].replace(/[\/]?xl\//, ""), fe(e, _) || (_ = E[b][1]), fe(e, _) || (_ = w.replace(/_rels\/.*$/, "") + E[b][1]), C = E[b][2]) : _ = (_ = "xl/worksheets/sheet" + (b + 1 - T) + "." + A).replace(/sheet0\./, "sheet."), m = _.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), t && null != t.sheets) switch (typeof t.sheets) {
								case "number":
									if (b != t.sheets) continue e;
									break;
								case "string":
									if (l.SheetNames[b].toLowerCase() != t.sheets.toLowerCase()) continue e;
									break;
								default:
									if (Array.isArray && Array.isArray(t.sheets)) {
										for (var $ = !1, k = 0; k != t.sheets.length; ++k) "number" == typeof t.sheets[k] && t.sheets[k] == b && ($ = 1), "string" == typeof t.sheets[k] && t.sheets[k].toLowerCase() == l.SheetNames[b].toLowerCase() && ($ = 1);
										if (!$) continue e
									}
							}
							Hc(e, _, m, l.SheetNames[b], b, g, n, C, t, c, s, u)
						}
						return h = {
							Directory: a,
							Workbook: c,
							Props: l,
							Custprops: d,
							Deps: p,
							Sheets: n,
							SheetNames: l.SheetNames,
							Strings: ds,
							Styles: u,
							Themes: s,
							SSF: M.get_table()
						}, t && t.bookFiles && (h.keys = i, h.files = e.files), t && t.bookVBA && (a.vba.length > 0 ? h.vbaraw = he(e, Yc(a.vba[0]), !0) : a.defaults && "application/vnd.ms-office.vbaProject" === a.defaults.bin && (h.vbaraw = he(e, "xl/vbaProject.bin", !0))), h
					}

					function zc(e, t) {
						var n = t || {},
							r = "Workbook",
							i = F.find(e, r);
						try {
							if (r = "/!DataSpaces/Version", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
							if (function(e) {
									var t = {};
									t.id = e.read_shift(0, "lpp4"), t.R = ea(e, 4), t.U = ea(e, 4), t.W = ea(e, 4)
								}(i.content), r = "/!DataSpaces/DataSpaceMap", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
							var a = function(e) {
								var t = [];
								e.l += 4;
								for (var n = e.read_shift(4); n-- > 0;) t.push(ta(e));
								return t
							}(i.content);
							if (1 !== a.length || 1 !== a[0].comps.length || 0 !== a[0].comps[0].t || "StrongEncryptionDataSpace" !== a[0].name || "EncryptedPackage" !== a[0].comps[0].v) throw new Error("ECMA-376 Encrypted file bad " + r);
							if (r = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
							var o = function(e) {
								var t = [];
								e.l += 4;
								for (var n = e.read_shift(4); n-- > 0;) t.push(e.read_shift(0, "lpp4"));
								return t
							}(i.content);
							if (1 != o.length || "StrongEncryptionTransform" != o[0]) throw new Error("ECMA-376 Encrypted file bad " + r);
							if (r = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
							na(i.content)
						} catch (e) {}
						if (r = "/EncryptionInfo", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
						var s = function(e) {
							var t = ea(e);
							switch (t.Minor) {
								case 2:
									return [t.Minor, aa(e)];
								case 3:
									return [t.Minor, oa()];
								case 4:
									return [t.Minor, sa(e)]
							}
							throw new Error("ECMA-376 Encrypted file unrecognized Version: " + t.Minor)
						}(i.content);
						if (r = "/EncryptedPackage", !(i = F.find(e, r)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + r);
						if (4 == s[0] && "undefined" != typeof decrypt_agile) return decrypt_agile(s[1], i.content, n.password || "", n);
						if (2 == s[0] && "undefined" != typeof decrypt_std76) return decrypt_std76(s[1], i.content, n.password || "", n);
						throw new Error("File is password-protected")
					}

					function Qc(e, t) {
						if (to = 1024, "ods" == t.bookType) return $c(e, t);
						e && !e.SSF && (e.SSF = M.get_table()), e && e.SSF && (I(M), M.load_table(e.SSF), t.revssf = z(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, ps ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
						var n = "xlsb" == t.bookType ? "bin" : "xml",
							r = so.indexOf(t.bookType) > -1,
							i = {
								workbooks: [],
								sheets: [],
								charts: [],
								dialogs: [],
								macros: [],
								rels: [],
								strs: [],
								comments: [],
								links: [],
								coreprops: [],
								extprops: [],
								custprops: [],
								themes: [],
								styles: [],
								calcchains: [],
								vba: [],
								drawings: [],
								TODO: [],
								xmlns: ""
							};
						Uc(t = t || {});
						var a = me(),
							o = "",
							s = 0;
						if (t.cellXfs = [], gs(t.cellXfs, {}, {
								revssf: {
									General: 0
								}
							}), e.Props || (e.Props = {}), _e(a, o = "docProps/core.xml", function(e, t) {
								var n = t || {},
									r = [ge, sr],
									i = {};
								if (!e && !n.Props) return r.join("");
								e && (null != e.CreatedDate && ur("dcterms:created", "string" == typeof e.CreatedDate ? e.CreatedDate : Je(e.CreatedDate, n.WTF), {
									"xsi:type": "dcterms:W3CDTF"
								}, r, i), null != e.ModifiedDate && ur("dcterms:modified", "string" == typeof e.ModifiedDate ? e.ModifiedDate : Je(e.ModifiedDate, n.WTF), {
									"xsi:type": "dcterms:W3CDTF"
								}, r, i));
								for (var a = 0; a != ir.length; ++a) {
									var o = ir[a],
										s = n.Props && null != n.Props[o[1]] ? n.Props[o[1]] : e ? e[o[1]] : null;
									!0 === s ? s = "1" : !1 === s ? s = "0" : "number" == typeof s && (s = String(s)), null != s && ur(o[0], s, null, r, i)
								}
								return r.length > 2 && (r[r.length] = "</cp:coreProperties>", r[1] = r[1].replace("/>", ">")), r.join("")
							}(e.Props, t)), i.coreprops.push(o), er(t.rels, 2, o, qn.CORE_PROPS), o = "docProps/app.xml", e.Props && e.Props.SheetNames);
						else if (e.Workbook && e.Workbook.Sheets) {
							for (var u = [], c = 0; c < e.SheetNames.length; ++c) 2 != (e.Workbook.Sheets[c] || {}).Hidden && u.push(e.SheetNames[c]);
							e.Props.SheetNames = u
						} else e.Props.SheetNames = e.SheetNames;
						for (e.Props.Worksheets = e.Props.SheetNames.length, _e(a, o, function(e) {
								var t = [],
									n = Xe;
								return e || (e = {}), e.Application = "SheetJS", t[t.length] = ge, t[t.length] = fr, cr.forEach((function(r) {
									if (void 0 !== e[r[1]]) {
										var i;
										switch (r[2]) {
											case "string":
												i = xe(String(e[r[1]]));
												break;
											case "bool":
												i = e[r[1]] ? "true" : "false"
										}
										void 0 !== i && (t[t.length] = n(r[0], i))
									}
								})), t[t.length] = n("HeadingPairs", n("vt:vector", n("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + n("vt:variant", n("vt:i4", String(e.Worksheets))), {
									size: 2,
									baseType: "variant"
								})), t[t.length] = n("TitlesOfParts", n("vt:vector", e.SheetNames.map((function(e) {
									return "<vt:lpstr>" + xe(e) + "</vt:lpstr>"
								})).join(""), {
									size: e.Worksheets,
									baseType: "lpstr"
								})), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("")
							}(e.Props)), i.extprops.push(o), er(t.rels, 3, o, qn.EXT_PROPS), e.Custprops !== e.Props && H(e.Custprops || {}).length > 0 && (_e(a, o = "docProps/custom.xml", pr(e.Custprops)), i.custprops.push(o), er(t.rels, 4, o, qn.CUST_PROPS)), s = 1; s <= e.SheetNames.length; ++s) {
							var l = {
									"!id": {}
								},
								f = e.Sheets[e.SheetNames[s - 1]];
							switch ((f || {})["!type"] || "sheet") {
								case "chart":
								default:
									_e(a, o = "xl/worksheets/sheet" + s + "." + n, $u(s - 1, o, t, e, l)), i.sheets.push(o), er(t.wbrels, -1, "worksheets/sheet" + s + "." + n, qn.WS[0])
							}
							if (f) {
								var d = f["!comments"],
									h = !1;
								if (d && d.length > 0) {
									var p = "xl/comments" + s + "." + n;
									_e(a, p, Ou(d, p, t)), i.comments.push(p), er(l, -1, "../comments" + s + "." + n, qn.CMNT), h = !0
								}
								f["!legacy"] && h && _e(a, "xl/drawings/vmlDrawing" + s + ".vml", no(s, f["!comments"])), delete f["!comments"], delete f["!legacy"]
							}
							l["!id"].rId1 && _e(a, Wn(o), Jn(l))
						}
						return null != t.Strings && t.Strings.length > 0 && (_e(a, o = "xl/sharedStrings." + n, ku(t.Strings, o, t)), i.strs.push(o), er(t.wbrels, -1, "sharedStrings." + n, qn.SST)), _e(a, o = "xl/workbook." + n, Cu(e, o, t)), i.workbooks.push(o), er(t.rels, 1, o, qn.WB), _e(a, o = "xl/theme/theme1.xml", Xa(e.Themes, t)), i.themes.push(o), er(t.wbrels, -1, "theme/theme1.xml", qn.THEME), _e(a, o = "xl/styles." + n, function(e, t, n) {
							return (".bin" === t.slice(-4) ? ja : Oa)(e, n)
						}(e, o, t)), i.styles.push(o), er(t.wbrels, -1, "styles." + n, qn.STY), e.vbaraw && r && (_e(a, o = "xl/vbaProject.bin", e.vbaraw), i.vba.push(o), er(t.wbrels, -1, "vbaProject.bin", qn.VBA)), _e(a, "[Content_Types].xml", function(e, t) {
							var n, r = [];
							r[r.length] = ge, r[r.length] = Qn, r = r.concat(Gn);
							var i = function(i) {
									e[i] && e[i].length > 0 && (n = e[i][0], r[r.length] = Xe("Override", null, {
										PartName: ("/" == n[0] ? "" : "/") + n,
										ContentType: Vn[i][t.bookType || "xlsx"]
									}))
								},
								a = function(n) {
									(e[n] || []).forEach((function(e) {
										r[r.length] = Xe("Override", null, {
											PartName: ("/" == e[0] ? "" : "/") + e,
											ContentType: Vn[n][t.bookType || "xlsx"]
										})
									}))
								},
								o = function(t) {
									(e[t] || []).forEach((function(e) {
										r[r.length] = Xe("Override", null, {
											PartName: ("/" == e[0] ? "" : "/") + e,
											ContentType: zn[t][0]
										})
									}))
								};
							return i("workbooks"), a("sheets"), a("charts"), o("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(o), o("vba"), o("comments"), o("drawings"), r.length > 2 && (r[r.length] = "</Types>", r[1] = r[1].replace("/>", ">")), r.join("")
						}(i, t)), _e(a, "_rels/.rels", Jn(t.rels)), _e(a, "xl/_rels/workbook." + n + ".rels", Jn(t.wbrels)), delete t.revssf, delete t.ssf, a
					}

					function Gc(e, t) {
						var n = "";
						switch ((t || {}).type || "base64") {
							case "buffer":
								return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
							case "base64":
								n = g.decode(e.slice(0, 12));
								break;
							case "binary":
								n = e;
								break;
							case "array":
								return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
							default:
								throw new Error("Unrecognized type " + (t && t.type || "undefined"))
						}
						return [n.charCodeAt(0), n.charCodeAt(1), n.charCodeAt(2), n.charCodeAt(3), n.charCodeAt(4), n.charCodeAt(5), n.charCodeAt(6), n.charCodeAt(7)]
					}

					function qc(e, t) {
						var n = e,
							r = t || {};
						return r.type || (r.type = v && i.isBuffer(e) ? "buffer" : "base64"), Vc(function(e, t) {
							var n;
							if (se) switch (t.type) {
								case "base64":
									n = new se(e, {
										base64: !0
									});
									break;
								case "binary":
								case "array":
									n = new se(e, {
										base64: !1
									});
									break;
								case "buffer":
									n = new se(e);
									break;
								default:
									throw new Error("Unrecognized type " + t.type)
							} else switch (t.type) {
								case "base64":
									n = F.read(e, {
										type: "base64"
									});
									break;
								case "binary":
									n = F.read(e, {
										type: "binary"
									});
									break;
								case "buffer":
								case "array":
									n = F.read(e, {
										type: "buffer"
									});
									break;
								default:
									throw new Error("Unrecognized type " + t.type)
							}
							return n
						}(n, r), r)
					}

					function Wc(e, t) {
						var n = 0;
						e: for (; n < e.length;) switch (e.charCodeAt(n)) {
							case 10:
							case 13:
							case 32:
								++n;
								break;
							case 60:
								return Hu(e.slice(n), t);
							default:
								break e
						}
						return Ri.to_workbook(e, t)
					}

					function Kc(e, t, n, r) {
						return r ? (n.type = "string", Ri.to_workbook(e, n)) : Ri.to_workbook(t, n)
					}

					function Xc(e, t) {
						if (h(), "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return Xc(new Uint8Array(e), t);
						var n, r = e,
							a = !1,
							o = t || {};
						if (o.cellStyles && (o.cellNF = !0, o.sheetStubs = !0), hs = {}, o.dateNF && (hs.dateNF = o.dateNF), o.type || (o.type = v && i.isBuffer(e) ? "buffer" : "base64"), "file" == o.type && (o.type = v ? "buffer" : "binary", r = function(e) {
								if (void 0 !== R) return R.readFileSync(e);
								if ("undefined" != typeof $ && "undefined" != typeof File && "undefined" != typeof Folder) try {
									var t = File(e);
									t.open("r"), t.encoding = "binary";
									var n = t.read();
									return t.close(), n
								} catch (e) {
									if (!e.message || !e.message.match(/onstruct/)) throw e
								}
								throw new Error("Cannot access file " + e)
							}(e)), "string" == o.type && (a = !0, o.type = "binary", o.codepage = 65001, r = function(e) {
								return e.match(/[^\x00-\x7F]/) ? Re(e) : e
							}(e)), "array" == o.type && "undefined" != typeof Uint8Array && e instanceof Uint8Array && "undefined" != typeof ArrayBuffer) {
							var s = new ArrayBuffer(3),
								u = new Uint8Array(s);
							if (u.foo = "bar", !u.foo) return (o = re(o)).type = "array", Xc(k(r), o)
						}
						switch ((n = Gc(r, o))[0]) {
							case 208:
								if (207 === n[1] && 17 === n[2] && 224 === n[3] && 161 === n[4] && 177 === n[5] && 26 === n[6] && 225 === n[7]) return function(e, t) {
									return F.find(e, "EncryptedPackage") ? zc(e, t) : rc(e, t)
								}(F.read(r, o), o);
								break;
							case 9:
								if (n[1] <= 4) return rc(r, o);
								break;
							case 60:
								return Hu(r, o);
							case 73:
								if (68 === n[1]) return function(e, t) {
									var n = t || {},
										r = !!n.WTF;
									n.WTF = !0;
									try {
										var i = Di.to_workbook(e, n);
										return n.WTF = r, i
									} catch (i) {
										if (n.WTF = r, !i.message.match(/SYLK bad record ID/) && r) throw i;
										return Ri.to_workbook(e, t)
									}
								}(r, o);
								break;
							case 84:
								if (65 === n[1] && 66 === n[2] && 76 === n[3]) return Bi.to_workbook(r, o);
								break;
							case 80:
								return 75 === n[1] && n[2] < 9 && n[3] < 9 ? qc(r, o) : Kc(e, r, o, a);
							case 239:
								return 60 === n[3] ? Hu(r, o) : Kc(e, r, o, a);
							case 255:
								if (254 === n[1]) return function(e, t) {
									var n = e;
									return "base64" == t.type && (n = g.decode(n)), n = cptable.utils.decode(1200, n.slice(2), "str"), t.type = "binary", Wc(n, t)
								}(r, o);
								break;
							case 0:
								if (0 === n[1] && n[2] >= 2 && 0 === n[3]) return Fi.to_workbook(r, o);
								break;
							case 3:
							case 131:
							case 139:
							case 140:
								return Li.to_workbook(r, o);
							case 123:
								if (92 === n[1] && 114 === n[2] && 116 === n[3]) return da.to_workbook(r, o);
								break;
							case 10:
							case 13:
							case 32:
								return function(e, t) {
									var n = "",
										r = Gc(e, t);
									switch (t.type) {
										case "base64":
											n = g.decode(e);
											break;
										case "binary":
											n = e;
											break;
										case "buffer":
											n = e.toString("binary");
											break;
										case "array":
											n = ne(e);
											break;
										default:
											throw new Error("Unrecognized type " + t.type)
									}
									return 239 == r[0] && 187 == r[1] && 191 == r[2] && (n = Ne(n)), Wc(n, t)
								}(r, o)
						}
						return Li.versions.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Li.to_workbook(r, o) : Kc(e, r, o, a)
					}

					function Jc(e, t) {
						var n = t || {};
						return n.type = "file", Xc(e, n)
					}

					function Zc(e, t) {
						switch (t.type) {
							case "base64":
							case "binary":
								break;
							case "buffer":
							case "array":
								t.type = "";
								break;
							case "file":
								return j(t.file, F.write(e, {
									type: v ? "buffer" : ""
								}));
							case "string":
								throw new Error("'string' output type invalid for '" + t.bookType + "' files");
							default:
								throw new Error("Unrecognized type " + t.type)
						}
						return F.write(e, t)
					}

					function el(e, t, n) {
						n || (n = "");
						var r = n + e;
						switch (t.type) {
							case "base64":
								return g.encode(Re(r));
							case "binary":
								return Re(r);
							case "string":
								return e;
							case "file":
								return j(t.file, r, "utf8");
							case "buffer":
								return v ? y(r, "utf8") : el(r, {
									type: "binary"
								}).split("").map((function(e) {
									return e.charCodeAt(0)
								}))
						}
						throw new Error("Unrecognized type " + t.type)
					}

					function tl(e, t) {
						switch (t.type) {
							case "string":
							case "base64":
							case "binary":
								for (var n = "", r = 0; r < e.length; ++r) n += String.fromCharCode(e[r]);
								return "base64" == t.type ? g.encode(n) : "string" == t.type ? Ne(n) : n;
							case "file":
								return j(t.file, e);
							case "buffer":
								return e;
							default:
								throw new Error("Unrecognized type " + t.type)
						}
					}

					function nl(e, t) {
						h(), lu(e);
						var n = t || {};
						if (n.cellStyles && (n.cellNF = !0, n.sheetStubs = !0), "array" == n.type) {
							n.type = "binary";
							var r = nl(e, n);
							return n.type = "array", T(r)
						}
						switch (n.bookType || "xlsb") {
							case "xml":
							case "xlml":
								return el(qu(e, n), n);
							case "slk":
							case "sylk":
								return el(Pc(e, n), n);
							case "htm":
							case "html":
								return el(Oc(e, n), n);
							case "txt":
								return function(e, t) {
									switch (t.type) {
										case "base64":
											return g.encode(e);
										case "binary":
										case "string":
											return e;
										case "file":
											return j(t.file, e, "binary");
										case "buffer":
											return v ? y(e, "binary") : e.split("").map((function(e) {
												return e.charCodeAt(0)
											}))
									}
									throw new Error("Unrecognized type " + t.type)
								}(Dc(e, n), n);
							case "csv":
								return el(xc(e, n), n, "\ufeff");
							case "dif":
								return el(Mc(e, n), n);
							case "dbf":
								return tl(Bc(e, n), n);
							case "prn":
								return el(Ic(e, n), n);
							case "rtf":
								return el(Lc(e, n), n);
							case "eth":
								return el(Nc(e, n), n);
							case "fods":
								return el($c(e, n), n);
							case "biff2":
								n.biff || (n.biff = 2);
							case "biff3":
								n.biff || (n.biff = 3);
							case "biff4":
								return n.biff || (n.biff = 4), tl(bc(e, n), n);
							case "biff5":
								n.biff || (n.biff = 5);
							case "biff8":
							case "xla":
							case "xls":
								return n.biff || (n.biff = 8),
									function(e, t) {
										var n = t || {};
										return Zc(ic(e, n), n)
									}(e, n);
							case "xlsx":
							case "xlsm":
							case "xlam":
							case "xlsb":
							case "ods":
								return function(e, t) {
									var n = t || {},
										r = Qc(e, n),
										i = {};
									if (n.compression && (i.compression = "DEFLATE"), n.password) i.type = v ? "nodebuffer" : "string";
									else switch (n.type) {
										case "base64":
											i.type = "base64";
											break;
										case "binary":
											i.type = "string";
											break;
										case "string":
											throw new Error("'string' output type invalid for '" + n.bookType + "' files");
										case "buffer":
										case "file":
											i.type = v ? "nodebuffer" : "string";
											break;
										default:
											throw new Error("Unrecognized type " + n.type)
									}
									var a = r.FullPaths ? F.write(r, {
										fileType: "zip",
										type: {
											nodebuffer: "buffer",
											string: "binary"
										} [i.type] || i.type
									}) : r.generate(i);
									return n.password && "undefined" != typeof encrypt_agile ? Zc(encrypt_agile(a, n.password), n) : "file" === n.type ? j(n.file, a) : "string" == n.type ? Ne(a) : a
								}(e, n);
							default:
								throw new Error("Unrecognized bookType |" + n.bookType + "|")
						}
					}

					function rl(e) {
						if (!e.bookType) {
							var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
							t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = {
								xls: "biff8",
								htm: "html",
								slk: "sylk",
								socialcalc: "eth",
								Sh33tJS: "WTF"
							} [e.bookType] || e.bookType
						}
					}

					function il(e, t, n) {
						var r = n || {};
						return r.type = "file", r.file = t, rl(r), nl(e, r)
					}

					function al(e, t, n, r, i, a, o, s) {
						var u = Wt(n),
							c = s.defval,
							l = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"),
							f = !0,
							d = 1 === i ? [] : {};
						if (1 !== i)
							if (Object.defineProperty) try {
								Object.defineProperty(d, "__rowNum__", {
									value: n,
									enumerable: !1
								})
							} catch (e) {
								d.__rowNum__ = n
							} else d.__rowNum__ = n;
						if (!o || e[n])
							for (var h = t.s.c; h <= t.e.c; ++h) {
								var p = o ? e[n][h] : e[r[h] + u];
								if (void 0 !== p && void 0 !== p.t) {
									var _ = p.v;
									switch (p.t) {
										case "z":
											if (null == _) break;
											continue;
										case "e":
											_ = void 0;
											break;
										case "s":
										case "d":
										case "b":
										case "n":
											break;
										default:
											throw new Error("unrecognized type " + p.t)
									}
									if (null != a[h]) {
										if (null == _)
											if (void 0 !== c) d[a[h]] = c;
											else {
												if (!l || null !== _) continue;
												d[a[h]] = null
											}
										else d[a[h]] = l || s.rawNumbers && "n" == p.t ? _ : rn(p, _, s);
										null != _ && (f = !1)
									}
								} else {
									if (void 0 === c) continue;
									null != a[h] && (d[a[h]] = c)
								}
							}
						return {
							row: d,
							isempty: f
						}
					}

					function ol(e, t) {
						if (null == e || null == e["!ref"]) return [];
						var n = {
								t: "n",
								v: 0
							},
							r = 0,
							i = 1,
							a = [],
							o = 0,
							s = "",
							u = {
								s: {
									r: 0,
									c: 0
								},
								e: {
									r: 0,
									c: 0
								}
							},
							c = t || {},
							l = null != c.range ? c.range : e["!ref"];
						switch (1 === c.header ? r = 1 : "A" === c.header ? r = 2 : Array.isArray(c.header) ? r = 3 : null == c.header && (r = 0), typeof l) {
							case "string":
								u = nn(l);
								break;
							case "number":
								(u = nn(e["!ref"])).s.r = l;
								break;
							default:
								u = l
						}
						r > 0 && (i = 0);
						var f = Wt(u.s.r),
							d = [],
							h = [],
							p = 0,
							_ = 0,
							m = Array.isArray(e),
							b = u.s.r,
							g = 0,
							v = 0;
						for (m && !e[b] && (e[b] = []), g = u.s.c; g <= u.e.c; ++g) switch (d[g] = Xt(g), n = m ? e[b][g] : e[d[g] + f], r) {
							case 1:
								a[g] = g - u.s.c;
								break;
							case 2:
								a[g] = d[g];
								break;
							case 3:
								a[g] = c.header[g - u.s.c];
								break;
							default:
								for (null == n && (n = {
										w: "__EMPTY",
										t: "s"
									}), s = o = rn(n, null, c), _ = 0, v = 0; v < a.length; ++v) a[v] == s && (s = o + "_" + ++_);
								a[g] = s
						}
						for (b = u.s.r + i; b <= u.e.r; ++b) {
							var y = al(e, u, b, d, r, a, m, c);
							(!1 === y.isempty || (1 === r ? !1 !== c.blankrows : c.blankrows)) && (h[p++] = y.row)
						}
						return h.length = p, h
					}
					var sl = /"/g;

					function ul(e, t, n, r, i, a, o, s) {
						for (var u = !0, c = [], l = "", f = Wt(n), d = t.s.c; d <= t.e.c; ++d)
							if (r[d]) {
								var h = s.dense ? (e[n] || [])[d] : e[r[d] + f];
								if (null == h) l = "";
								else if (null != h.v) {
									u = !1, l = "" + (s.rawNumbers && "n" == h.t ? h.v : rn(h, null, s));
									for (var p = 0, _ = 0; p !== l.length; ++p)
										if ((_ = l.charCodeAt(p)) === i || _ === a || 34 === _ || s.forceQuotes) {
											l = '"' + l.replace(sl, '""') + '"';
											break
										}
									"ID" == l && (l = '"ID"')
								} else null == h.f || h.F ? l = "" : (u = !1, (l = "=" + h.f).indexOf(",") >= 0 && (l = '"' + l.replace(sl, '""') + '"'));
								c.push(l)
							} return !1 === s.blankrows && u ? null : c.join(o)
					}

					function cl(e, t) {
						var n = [],
							r = null == t ? {} : t;
						if (null == e || null == e["!ref"]) return "";
						var i = nn(e["!ref"]),
							a = void 0 !== r.FS ? r.FS : ",",
							o = a.charCodeAt(0),
							s = void 0 !== r.RS ? r.RS : "\n",
							u = s.charCodeAt(0),
							c = new RegExp(("|" == a ? "\\|" : a) + "+$"),
							l = "",
							f = [];
						r.dense = Array.isArray(e);
						for (var d = r.skipHidden && e["!cols"] || [], h = r.skipHidden && e["!rows"] || [], p = i.s.c; p <= i.e.c; ++p)(d[p] || {}).hidden || (f[p] = Xt(p));
						for (var _ = i.s.r; _ <= i.e.r; ++_)(h[_] || {}).hidden || null != (l = ul(e, i, _, f, o, u, a, r)) && (r.strip && (l = l.replace(c, "")), n.push(l + s));
						return delete r.dense, n.join("")
					}

					function ll(e, t) {
						t || (t = {}), t.FS = "\t", t.RS = "\n";
						var n = cl(e, t);
						if ("undefined" == typeof cptable || "string" == t.type) return n;
						var r = cptable.utils.encode(1200, n, "str");
						return String.fromCharCode(255) + String.fromCharCode(254) + r
					}

					function fl(e) {
						var t, n = "",
							r = "";
						if (null == e || null == e["!ref"]) return [];
						var i, a = nn(e["!ref"]),
							o = "",
							s = [],
							u = [],
							c = Array.isArray(e);
						for (i = a.s.c; i <= a.e.c; ++i) s[i] = Xt(i);
						for (var l = a.s.r; l <= a.e.r; ++l)
							for (o = Wt(l), i = a.s.c; i <= a.e.c; ++i)
								if (n = s[i] + o, r = "", void 0 !== (t = c ? (e[l] || [])[i] : e[n])) {
									if (null != t.F) {
										if (n = t.F, !t.f) continue;
										r = t.f, -1 == n.indexOf(":") && (n = n + ":" + n)
									}
									if (null != t.f) r = t.f;
									else {
										if ("z" == t.t) continue;
										if ("n" == t.t && null != t.v) r = "" + t.v;
										else if ("b" == t.t) r = t.v ? "TRUE" : "FALSE";
										else if (void 0 !== t.w) r = "'" + t.w;
										else {
											if (void 0 === t.v) continue;
											r = "s" == t.t ? "'" + t.v : "" + t.v
										}
									}
									u[u.length] = n + "=" + r
								} return u
					}

					function dl(e, t, n) {
						var r, i = n || {},
							a = +!i.skipHeader,
							o = e || {},
							s = 0,
							u = 0;
						if (o && null != i.origin)
							if ("number" == typeof i.origin) s = i.origin;
							else {
								var c = "string" == typeof i.origin ? Jt(i.origin) : i.origin;
								s = c.r, u = c.c
							} var l = {
							s: {
								c: 0,
								r: 0
							},
							e: {
								c: u,
								r: s + t.length - 1 + a
							}
						};
						if (o["!ref"]) {
							var f = nn(o["!ref"]);
							l.e.c = Math.max(l.e.c, f.e.c), l.e.r = Math.max(l.e.r, f.e.r), -1 == s && (s = f.e.r + 1, l.e.r = s + t.length - 1 + a)
						} else -1 == s && (s = 0, l.e.r = t.length - 1 + a);
						var d = i.header || [],
							h = 0;
						t.forEach((function(e, t) {
							H(e).forEach((function(n) {
								-1 == (h = d.indexOf(n)) && (d[h = d.length] = n);
								var c = e[n],
									l = "z",
									f = "",
									p = Zt({
										c: u + h,
										r: s + t + a
									});
								r = hl.sheet_get_cell(o, p), !c || "object" != typeof c || c instanceof Date ? ("number" == typeof c ? l = "n" : "boolean" == typeof c ? l = "b" : "string" == typeof c ? l = "s" : c instanceof Date && (l = "d", i.cellDates || (l = "n", c = G(c)), f = i.dateNF || M._table[14]), r ? (r.t = l, r.v = c, delete r.w, delete r.R, f && (r.z = f)) : o[p] = r = {
									t: l,
									v: c
								}, f && (r.z = f)) : o[p] = c
							}))
						})), l.e.c = Math.max(l.e.c, u + d.length - 1);
						var p = Wt(s);
						if (a)
							for (h = 0; h < d.length; ++h) o[Xt(h + u) + p] = {
								t: "s",
								v: d[h]
							};
						return o["!ref"] = tn(l), o
					}
					var hl = {
						encode_col: Xt,
						encode_row: Wt,
						encode_cell: Zt,
						encode_range: tn,
						decode_col: Kt,
						decode_row: qt,
						split_cell: function(e) {
							return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",")
						},
						decode_cell: Jt,
						decode_range: en,
						format_cell: rn,
						get_formulae: fl,
						make_csv: cl,
						make_json: ol,
						make_formulae: fl,
						sheet_add_aoa: on,
						sheet_add_json: dl,
						sheet_add_dom: vc,
						aoa_to_sheet: sn,
						json_to_sheet: function(e, t) {
							return dl(null, e, t)
						},
						table_to_sheet: yc,
						table_to_book: function(e, t) {
							return an(yc(e, t), t)
						},
						sheet_to_csv: cl,
						sheet_to_txt: ll,
						sheet_to_json: ol,
						sheet_to_html: gc.from_sheet,
						sheet_to_formulae: fl,
						sheet_to_row_object_array: ol
					};
					(function(e) {
						function t(e, t, n) {
							return null != e[t] ? e[t] : e[t] = n
						}

						function n(e, t, r) {
							if ("string" == typeof t) {
								if (Array.isArray(e)) {
									var i = Jt(t);
									return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = {
										t: "z"
									})
								}
								return e[t] || (e[t] = {
									t: "z"
								})
							}
							return n(e, Zt("number" != typeof t ? t : {
								r: t,
								c: r || 0
							}))
						}
						e.consts = e.consts || {}, e.sheet_get_cell = n, e.book_new = function() {
								return {
									SheetNames: [],
									Sheets: {}
								}
							}, e.book_append_sheet = function(e, t, n) {
								if (!n)
									for (var r = 1; r <= 65535 && -1 != e.SheetNames.indexOf(n = "Sheet" + r); ++r, n = void 0);
								if (!n || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
								if (cu(n), e.SheetNames.indexOf(n) >= 0) throw new Error("Worksheet with name |" + n + "| already exists!");
								e.SheetNames.push(n), e.Sheets[n] = t
							}, e.book_set_sheet_visibility = function(e, n, r) {
								t(e, "Workbook", {}), t(e.Workbook, "Sheets", []);
								var i = function(e, t) {
									if ("number" == typeof t) {
										if (t >= 0 && e.SheetNames.length > t) return t;
										throw new Error("Cannot find sheet # " + t)
									}
									if ("string" == typeof t) {
										var n = e.SheetNames.indexOf(t);
										if (n > -1) return n;
										throw new Error("Cannot find sheet name |" + t + "|")
									}
									throw new Error("Cannot find sheet |" + t + "|")
								}(e, n);
								switch (t(e.Workbook.Sheets, i, {}), r) {
									case 0:
									case 1:
									case 2:
										break;
									default:
										throw new Error("Bad sheet visibility setting " + r)
								}
								e.Workbook.Sheets[i].Hidden = r
							},
							function(t) {
								t.forEach((function(t) {
									e.consts[t[0]] = t[1]
								}))
							}([
								["SHEET_VISIBLE", 0],
								["SHEET_HIDDEN", 1],
								["SHEET_VERY_HIDDEN", 2]
							]), e.cell_set_number_format = function(e, t) {
								return e.z = t, e
							}, e.cell_set_hyperlink = function(e, t, n) {
								return t ? (e.l = {
									Target: t
								}, n && (e.l.Tooltip = n)) : delete e.l, e
							}, e.cell_set_internal_link = function(t, n, r) {
								return e.cell_set_hyperlink(t, "#" + n, r)
							}, e.cell_add_comment = function(e, t, n) {
								e.c || (e.c = []), e.c.push({
									t: t,
									a: n || "SheetJS"
								})
							}, e.sheet_set_array_formula = function(e, t, r) {
								for (var i = "string" != typeof t ? t : nn(t), a = "string" == typeof t ? t : tn(t), o = i.s.r; o <= i.e.r; ++o)
									for (var s = i.s.c; s <= i.e.c; ++s) {
										var u = n(e, o, s);
										u.t = "n", u.F = a, delete u.v, o == i.s.r && s == i.s.c && (u.f = r)
									}
								return e
							}
					})(hl), v && function() {
						var e = n(3).Readable;
						t.stream = {
							to_json: function(t, n) {
								var r = e({
									objectMode: !0
								});
								if (null == t || null == t["!ref"]) return r.push(null), r;
								var i = {
										t: "n",
										v: 0
									},
									a = 0,
									o = 1,
									s = [],
									u = 0,
									c = "",
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
									f = n || {},
									d = null != f.range ? f.range : t["!ref"];
								switch (1 === f.header ? a = 1 : "A" === f.header ? a = 2 : Array.isArray(f.header) && (a = 3), typeof d) {
									case "string":
										l = nn(d);
										break;
									case "number":
										(l = nn(t["!ref"])).s.r = d;
										break;
									default:
										l = d
								}
								a > 0 && (o = 0);
								var h = Wt(l.s.r),
									p = [],
									_ = 0,
									m = Array.isArray(t),
									b = l.s.r,
									g = 0,
									v = 0;
								for (m && !t[b] && (t[b] = []), g = l.s.c; g <= l.e.c; ++g) switch (p[g] = Xt(g), i = m ? t[b][g] : t[p[g] + h], a) {
									case 1:
										s[g] = g - l.s.c;
										break;
									case 2:
										s[g] = p[g];
										break;
									case 3:
										s[g] = f.header[g - l.s.c];
										break;
									default:
										for (null == i && (i = {
												w: "__EMPTY",
												t: "s"
											}), c = u = rn(i, null, f), _ = 0, v = 0; v < s.length; ++v) s[v] == c && (c = u + "_" + ++_);
										s[g] = c
								}
								return b = l.s.r + o, r._read = function() {
									if (b > l.e.r) return r.push(null);
									for (; b <= l.e.r;) {
										var e = al(t, l, b, p, a, s, m, f);
										if (++b, !1 === e.isempty || (1 === a ? !1 !== f.blankrows : f.blankrows)) {
											r.push(e.row);
											break
										}
									}
								}, r
							},
							to_html: function(t, n) {
								var r = e(),
									i = n || {},
									a = null != i.header ? i.header : gc.BEGIN,
									o = null != i.footer ? i.footer : gc.END;
								r.push(a);
								var s = en(t["!ref"]);
								i.dense = Array.isArray(t), r.push(gc._preamble(t, s, i));
								var u = s.s.r,
									c = !1;
								return r._read = function() {
									if (u > s.e.r) return c || (c = !0, r.push("</table>" + o)), r.push(null);
									for (; u <= s.e.r;) {
										r.push(gc._row(t, s, u, i)), ++u;
										break
									}
								}, r
							},
							to_csv: function(t, n) {
								var r = e(),
									i = null == n ? {} : n;
								if (null == t || null == t["!ref"]) return r.push(null), r;
								var a = nn(t["!ref"]),
									o = void 0 !== i.FS ? i.FS : ",",
									s = o.charCodeAt(0),
									u = void 0 !== i.RS ? i.RS : "\n",
									c = u.charCodeAt(0),
									l = new RegExp(("|" == o ? "\\|" : o) + "+$"),
									f = "",
									d = [];
								i.dense = Array.isArray(t);
								for (var h = i.skipHidden && t["!cols"] || [], p = i.skipHidden && t["!rows"] || [], _ = a.s.c; _ <= a.e.c; ++_)(h[_] || {}).hidden || (d[_] = Xt(_));
								var m = a.s.r,
									b = !1;
								return r._read = function() {
									if (!b) return b = !0, r.push("\ufeff");
									for (; m <= a.e.r;)
										if (++m, !(p[m - 1] || {}).hidden && null != (f = ul(t, a, m - 1, d, s, c, o, i))) {
											i.strip && (f = f.replace(l, "")), r.push(f + u);
											break
										} return m > a.e.r ? r.push(null) : void 0
								}, r
							}
						}
					}(), void 0 !== rc && (t.parse_xlscfb = rc), t.parse_zip = Vc, t.read = Xc, t.readFile = Jc, t.readFileSync = Jc, t.write = nl, t.writeFile = il, t.writeFileSync = il, t.writeFileAsync = function(e, t, n, r) {
						var i = n || {};
						i.type = "file", i.file = e, rl(i), i.type = "buffer";
						var a = r;
						return a instanceof Function || (a = n), R.writeFile(e, nl(t, i), a)
					}, t.utils = hl, t.SSF = M, void 0 !== F && (t.CFB = F)
				}(t)
			}).call(this, n("c8ba"), n("b639").Buffer, n("4362"))
		},
		1148: function(e, t, n) {
			"use strict";
			var r = n("a691"),
				i = n("1d80");
			e.exports = "".repeat || function(e) {
				var t = String(i(this)),
					n = "",
					a = r(e);
				if (a < 0 || a == 1 / 0) throw RangeError("Wrong number of repetitions");
				for (; a > 0;
					(a >>>= 1) && (t += t)) 1 & a && (n += t);
				return n
			}
		},
		"11ec": function(e, t) {
			e.exports.pick = (e, ...t) => t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {})
		},
		"125d": function(e, t, n) {
			"use strict";
			var r = n("9339"),
				i = n.n(r);
			const a = i.a.import("blots/block");
			class o extends a {
				static create(e) {
					const t = super.create(e);
					if (!0 === e) return t;
					const n = document.createElement("img");
					return n.setAttribute("src", e), t.appendChild(n), t
				}
				deleteAt(e, t) {
					super.deleteAt(e, t), this.cache = {}
				}
				static value(e) {
					const {
						src: t,
						custom: n
					} = e.dataset;
					return {
						src: t,
						custom: n
					}
				}
			}
			o.blotName = "imageBlot", o.className = "image-uploading", o.tagName = "span", i.a.register({
				"formats/imageBlot": o
			});
			var s = o;
			n("c196");
			class u {
				constructor(e, t) {
					this.quill = e, this.options = t, this.range = null, "function" != typeof this.options.upload && console.warn("[Missing config] upload function that returns a promise is required"), this.quill.getModule("toolbar").addHandler("image", this.selectLocalImage.bind(this)), this.handleDrop = this.handleDrop.bind(this), this.handlePaste = this.handlePaste.bind(this), this.quill.root.addEventListener("drop", this.handleDrop, !1), this.quill.root.addEventListener("paste", this.handlePaste, !1)
				}
				selectLocalImage() {
					this.quill.focus(), this.range = this.quill.getSelection(), this.fileHolder = document.createElement("input"), this.fileHolder.setAttribute("type", "file"), this.fileHolder.setAttribute("accept", "image/*"), this.fileHolder.setAttribute("style", "visibility:hidden"), this.fileHolder.onchange = this.fileChanged.bind(this), document.body.appendChild(this.fileHolder), this.fileHolder.click(), window.requestAnimationFrame(() => {
						document.body.removeChild(this.fileHolder)
					})
				}
				handleDrop(e) {
					if (e.stopPropagation(), e.preventDefault(), e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
						if (document.caretRangeFromPoint) {
							const t = document.getSelection(),
								n = document.caretRangeFromPoint(e.clientX, e.clientY);
							t && n && t.setBaseAndExtent(n.startContainer, n.startOffset, n.startContainer, n.startOffset)
						} else {
							const t = document.getSelection(),
								n = document.caretPositionFromPoint(e.clientX, e.clientY);
							t && n && t.setBaseAndExtent(n.offsetNode, n.offset, n.offsetNode, n.offset)
						}
						this.quill.focus(), this.range = this.quill.getSelection();
						let t = e.dataTransfer.files[0];
						setTimeout(() => {
							this.quill.focus(), this.range = this.quill.getSelection(), this.readAndUploadFile(t)
						}, 0)
					}
				}
				handlePaste(e) {
					let t = e.clipboardData || window.clipboardData;
					if (t && (t.items || t.files)) {
						let n = t.items || t.files;
						const r = /^image\/(jpe?g|gif|png|svg|webp)$/i;
						for (let t = 0; t < n.length; t++)
							if (r.test(n[t].type)) {
								let r = n[t].getAsFile ? n[t].getAsFile() : n[t];
								r && (this.quill.focus(), this.range = this.quill.getSelection(), e.preventDefault(), setTimeout(() => {
									this.quill.focus(), this.range = this.quill.getSelection(), this.readAndUploadFile(r)
								}, 0))
							}
					}
				}
				readAndUploadFile(e) {
					let t = !1;
					const n = new FileReader;
					n.addEventListener("load", () => {
						if (!t) {
							let e = n.result;
							this.insertBase64Image(e)
						}
					}, !1), e && n.readAsDataURL(e), this.options.upload(e).then(e => {
						this.insertToEditor(e)
					}, e => {
						t = !0, this.removeBase64Image(), console.warn(e)
					})
				}
				fileChanged() {
					const e = this.fileHolder.files[0];
					this.readAndUploadFile(e)
				}
				insertBase64Image(e) {
					const t = this.range;
					this.quill.insertEmbed(t.index, s.blotName, "" + e, "user")
				}
				insertToEditor(e) {
					const t = this.range;
					this.quill.deleteText(t.index, 3, "user"), this.quill.insertEmbed(t.index, "image", "" + e, "user"), t.index++, this.quill.setSelection(t, "user")
				}
				removeBase64Image() {
					const e = this.range;
					this.quill.deleteText(e.index, 3, "user")
				}
			}
			window.ImageUploader = u, t.a = u
		},
		1276: function(e, t, n) {
			"use strict";
			var r = n("d784"),
				i = n("44e7"),
				a = n("825a"),
				o = n("1d80"),
				s = n("4840"),
				u = n("8aa5"),
				c = n("50c4"),
				l = n("14c3"),
				f = n("9263"),
				d = n("d039"),
				h = [].push,
				p = Math.min,
				_ = 4294967295,
				m = !d((function() {
					return !RegExp(_, "y")
				}));
			r("split", 2, (function(e, t, n) {
				var r;
				return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
					var r = String(o(this)),
						a = void 0 === n ? _ : n >>> 0;
					if (0 === a) return [];
					if (void 0 === e) return [r];
					if (!i(e)) return t.call(r, e, a);
					for (var s, u, c, l = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), p = 0, m = new RegExp(e.source, d + "g");
						(s = f.call(m, r)) && !((u = m.lastIndex) > p && (l.push(r.slice(p, s.index)), s.length > 1 && s.index < r.length && h.apply(l, s.slice(1)), c = s[0].length, p = u, l.length >= a));) m.lastIndex === s.index && m.lastIndex++;
					return p === r.length ? !c && m.test("") || l.push("") : l.push(r.slice(p)), l.length > a ? l.slice(0, a) : l
				} : "0".split(void 0, 0).length ? function(e, n) {
					return void 0 === e && 0 === n ? [] : t.call(this, e, n)
				} : t, [function(t, n) {
					var i = o(this),
						a = null == t ? void 0 : t[e];
					return void 0 !== a ? a.call(t, i, n) : r.call(String(i), t, n)
				}, function(e, i) {
					var o = n(r, e, this, i, r !== t);
					if (o.done) return o.value;
					var f = a(e),
						d = String(this),
						h = s(f, RegExp),
						b = f.unicode,
						g = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (m ? "y" : "g"),
						v = new h(m ? f : "^(?:" + f.source + ")", g),
						y = void 0 === i ? _ : i >>> 0;
					if (0 === y) return [];
					if (0 === d.length) return null === l(v, d) ? [d] : [];
					for (var A = 0, S = 0, w = []; S < d.length;) {
						v.lastIndex = m ? S : 0;
						var E, T = l(v, m ? d : d.slice(S));
						if (null === T || (E = p(c(v.lastIndex + (m ? 0 : S)), d.length)) === A) S = u(d, S, b);
						else {
							if (w.push(d.slice(A, S)), w.length === y) return w;
							for (var C = 1; C <= T.length - 1; C++)
								if (w.push(T[C]), w.length === y) return w;
							S = A = E
						}
					}
					return w.push(d.slice(A)), w
				}]
			}), !m)
		},
		1310: function(e, t) {
			e.exports = function(e) {
				return null != e && "object" == typeof e
			}
		},
		1315: function(e, t, n) {
			"use strict";

			function r(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function i(e, t, n) {
				return t && r(e.prototype, t), n && r(e, n), e
			}

			function a(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}

			function o(e) {
				return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function s(e, t) {
				return (s = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function u() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function c(e, t, n) {
				return (c = u() ? Reflect.construct : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var i = new(Function.bind.apply(e, r));
					return n && s(i, n.prototype), i
				}).apply(null, arguments)
			}

			function l(e) {
				var t = "function" == typeof Map ? new Map : void 0;
				return (l = function(e) {
					if (null === e || ! function(e) {
							return -1 !== Function.toString.call(e).indexOf("[native code]")
						}(e)) return e;
					if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e);
						t.set(e, n)
					}

					function n() {
						return c(e, arguments, o(this).constructor)
					}
					return n.prototype = Object.create(e.prototype, {
						constructor: {
							value: n,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), s(n, e)
				})(e)
			}

			function f(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function d(e) {
				var t = 0;
				if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
					if (Array.isArray(e) || (e = function(e, t) {
							if (e) {
								if ("string" == typeof e) return f(e, t);
								var n = Object.prototype.toString.call(e).slice(8, -1);
								return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
							}
						}(e))) return function() {
						return t >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[t++]
						}
					};
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				return (t = e[Symbol.iterator]()).next.bind(t)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var h = function(e) {
					function t() {
						return e.apply(this, arguments) || this
					}
					return a(t, e), t
				}(l(Error)),
				p = function(e) {
					function t(t) {
						return e.call(this, "Invalid DateTime: " + t.toMessage()) || this
					}
					return a(t, e), t
				}(h),
				_ = function(e) {
					function t(t) {
						return e.call(this, "Invalid Interval: " + t.toMessage()) || this
					}
					return a(t, e), t
				}(h),
				m = function(e) {
					function t(t) {
						return e.call(this, "Invalid Duration: " + t.toMessage()) || this
					}
					return a(t, e), t
				}(h),
				b = function(e) {
					function t() {
						return e.apply(this, arguments) || this
					}
					return a(t, e), t
				}(h),
				g = function(e) {
					function t(t) {
						return e.call(this, "Invalid unit " + t) || this
					}
					return a(t, e), t
				}(h),
				v = function(e) {
					function t() {
						return e.apply(this, arguments) || this
					}
					return a(t, e), t
				}(h),
				y = function(e) {
					function t() {
						return e.call(this, "Zone is an abstract class") || this
					}
					return a(t, e), t
				}(h),
				A = "numeric",
				S = "short",
				w = "long",
				E = {
					year: A,
					month: A,
					day: A
				},
				T = {
					year: A,
					month: S,
					day: A
				},
				C = {
					year: A,
					month: S,
					day: A,
					weekday: S
				},
				$ = {
					year: A,
					month: w,
					day: A
				},
				k = {
					year: A,
					month: w,
					day: A,
					weekday: w
				},
				O = {
					hour: A,
					minute: A
				},
				x = {
					hour: A,
					minute: A,
					second: A
				},
				P = {
					hour: A,
					minute: A,
					second: A,
					timeZoneName: S
				},
				M = {
					hour: A,
					minute: A,
					second: A,
					timeZoneName: w
				},
				I = {
					hour: A,
					minute: A,
					hour12: !1
				},
				L = {
					hour: A,
					minute: A,
					second: A,
					hour12: !1
				},
				D = {
					hour: A,
					minute: A,
					second: A,
					hour12: !1,
					timeZoneName: S
				},
				B = {
					hour: A,
					minute: A,
					second: A,
					hour12: !1,
					timeZoneName: w
				},
				N = {
					year: A,
					month: A,
					day: A,
					hour: A,
					minute: A
				},
				R = {
					year: A,
					month: A,
					day: A,
					hour: A,
					minute: A,
					second: A
				},
				F = {
					year: A,
					month: S,
					day: A,
					hour: A,
					minute: A
				},
				U = {
					year: A,
					month: S,
					day: A,
					hour: A,
					minute: A,
					second: A
				},
				j = {
					year: A,
					month: S,
					day: A,
					weekday: S,
					hour: A,
					minute: A
				},
				H = {
					year: A,
					month: w,
					day: A,
					hour: A,
					minute: A,
					timeZoneName: S
				},
				Y = {
					year: A,
					month: w,
					day: A,
					hour: A,
					minute: A,
					second: A,
					timeZoneName: S
				},
				V = {
					year: A,
					month: w,
					day: A,
					weekday: w,
					hour: A,
					minute: A,
					timeZoneName: w
				},
				z = {
					year: A,
					month: w,
					day: A,
					weekday: w,
					hour: A,
					minute: A,
					second: A,
					timeZoneName: w
				};

			function Q(e) {
				return void 0 === e
			}

			function G(e) {
				return "number" == typeof e
			}

			function q(e) {
				return "number" == typeof e && e % 1 == 0
			}

			function W() {
				try {
					return "undefined" != typeof Intl && Intl.DateTimeFormat
				} catch (e) {
					return !1
				}
			}

			function K() {
				return !Q(Intl.DateTimeFormat.prototype.formatToParts)
			}

			function X() {
				try {
					return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
				} catch (e) {
					return !1
				}
			}

			function J(e, t, n) {
				if (0 !== e.length) return e.reduce((function(e, r) {
					var i = [t(r), r];
					return e && n(e[0], i[0]) === e[0] ? e : i
				}), null)[1]
			}

			function Z(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e[n], t
				}), {})
			}

			function ee(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function te(e, t, n) {
				return q(e) && e >= t && e <= n
			}

			function ne(e, t) {
				void 0 === t && (t = 2);
				var n = e < 0 ? "-" : "",
					r = n ? -1 * e : e;
				return "" + n + (r.toString().length < t ? ("0".repeat(t) + r).slice(-t) : r.toString())
			}

			function re(e) {
				return Q(e) || null === e || "" === e ? void 0 : parseInt(e, 10)
			}

			function ie(e) {
				if (!Q(e) && null !== e && "" !== e) {
					var t = 1e3 * parseFloat("0." + e);
					return Math.floor(t)
				}
			}

			function ae(e, t, n) {
				void 0 === n && (n = !1);
				var r = Math.pow(10, t);
				return (n ? Math.trunc : Math.round)(e * r) / r
			}

			function oe(e) {
				return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
			}

			function se(e) {
				return oe(e) ? 366 : 365
			}

			function ue(e, t) {
				var n = function(e, t) {
					return e - t * Math.floor(e / t)
				}(t - 1, 12) + 1;
				return 2 === n ? oe(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]
			}

			function ce(e) {
				var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
				return e.year < 100 && e.year >= 0 && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900), +t
			}

			function le(e) {
				var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
					n = e - 1,
					r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
				return 4 === t || 3 === r ? 53 : 52
			}

			function fe(e) {
				return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e
			}

			function de(e, t, n, r) {
				void 0 === r && (r = null);
				var i = new Date(e),
					a = {
						hour12: !1,
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit"
					};
				r && (a.timeZone = r);
				var o = Object.assign({
						timeZoneName: t
					}, a),
					s = W();
				if (s && K()) {
					var u = new Intl.DateTimeFormat(n, o).formatToParts(i).find((function(e) {
						return "timezonename" === e.type.toLowerCase()
					}));
					return u ? u.value : null
				}
				if (s) {
					var c = new Intl.DateTimeFormat(n, a).format(i);
					return new Intl.DateTimeFormat(n, o).format(i).substring(c.length).replace(/^[, \u200e]+/, "")
				}
				return null
			}

			function he(e, t) {
				var n = parseInt(e, 10);
				Number.isNaN(n) && (n = 0);
				var r = parseInt(t, 10) || 0;
				return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r)
			}

			function pe(e) {
				var t = Number(e);
				if ("boolean" == typeof e || "" === e || Number.isNaN(t)) throw new v("Invalid unit value " + e);
				return t
			}

			function _e(e, t, n) {
				var r = {};
				for (var i in e)
					if (ee(e, i)) {
						if (n.indexOf(i) >= 0) continue;
						var a = e[i];
						if (null == a) continue;
						r[t(i)] = pe(a)
					} return r
			}

			function me(e, t) {
				var n = Math.trunc(Math.abs(e / 60)),
					r = Math.trunc(Math.abs(e % 60)),
					i = e >= 0 ? "+" : "-";
				switch (t) {
					case "short":
						return "" + i + ne(n, 2) + ":" + ne(r, 2);
					case "narrow":
						return "" + i + n + (r > 0 ? ":" + r : "");
					case "techie":
						return "" + i + ne(n, 2) + ne(r, 2);
					default:
						throw new RangeError("Value format " + t + " is out of range for property format")
				}
			}

			function be(e) {
				return Z(e, ["hour", "minute", "second", "millisecond"])
			}
			var ge = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

			function ve(e) {
				return JSON.stringify(e, Object.keys(e).sort())
			}
			var ye = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				Ae = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				Se = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

			function we(e) {
				switch (e) {
					case "narrow":
						return Se;
					case "short":
						return Ae;
					case "long":
						return ye;
					case "numeric":
						return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
					case "2-digit":
						return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
					default:
						return null
				}
			}
			var Ee = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
				Te = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				Ce = ["M", "T", "W", "T", "F", "S", "S"];

			function $e(e) {
				switch (e) {
					case "narrow":
						return Ce;
					case "short":
						return Te;
					case "long":
						return Ee;
					case "numeric":
						return ["1", "2", "3", "4", "5", "6", "7"];
					default:
						return null
				}
			}
			var ke = ["AM", "PM"],
				Oe = ["Before Christ", "Anno Domini"],
				xe = ["BC", "AD"],
				Pe = ["B", "A"];

			function Me(e) {
				switch (e) {
					case "narrow":
						return Pe;
					case "short":
						return xe;
					case "long":
						return Oe;
					default:
						return null
				}
			}

			function Ie(e, t) {
				for (var n, r = "", i = d(e); !(n = i()).done;) {
					var a = n.value;
					a.literal ? r += a.val : r += t(a.val)
				}
				return r
			}
			var Le = {
					D: E,
					DD: T,
					DDD: $,
					DDDD: k,
					t: O,
					tt: x,
					ttt: P,
					tttt: M,
					T: I,
					TT: L,
					TTT: D,
					TTTT: B,
					f: N,
					ff: F,
					fff: H,
					ffff: V,
					F: R,
					FF: U,
					FFF: Y,
					FFFF: z
				},
				De = function() {
					function e(e, t) {
						this.opts = t, this.loc = e, this.systemLoc = null
					}
					e.create = function(t, n) {
						return void 0 === n && (n = {}), new e(t, n)
					}, e.parseFormat = function(e) {
						for (var t = null, n = "", r = !1, i = [], a = 0; a < e.length; a++) {
							var o = e.charAt(a);
							"'" === o ? (n.length > 0 && i.push({
								literal: r,
								val: n
							}), t = null, n = "", r = !r) : r || o === t ? n += o : (n.length > 0 && i.push({
								literal: !1,
								val: n
							}), n = o, t = o)
						}
						return n.length > 0 && i.push({
							literal: r,
							val: n
						}), i
					}, e.macroTokenToFormatOpts = function(e) {
						return Le[e]
					};
					var t = e.prototype;
					return t.formatWithSystemDefault = function(e, t) {
						return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
					}, t.formatDateTime = function(e, t) {
						return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
					}, t.formatDateTimeParts = function(e, t) {
						return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).formatToParts()
					}, t.resolvedOptions = function(e, t) {
						return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).resolvedOptions()
					}, t.num = function(e, t) {
						if (void 0 === t && (t = 0), this.opts.forceSimple) return ne(e, t);
						var n = Object.assign({}, this.opts);
						return t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e)
					}, t.formatDateTimeFromString = function(t, n) {
						var r = this,
							i = "en" === this.loc.listingMode(),
							a = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar && K(),
							o = function(e, n) {
								return r.loc.extract(t, e, n)
							},
							s = function(e) {
								return t.isOffsetFixed && 0 === t.offset && e.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, e.format) : ""
							},
							u = function() {
								return i ? function(e) {
									return ke[e.hour < 12 ? 0 : 1]
								}(t) : o({
									hour: "numeric",
									hour12: !0
								}, "dayperiod")
							},
							c = function(e, n) {
								return i ? function(e, t) {
									return we(t)[e.month - 1]
								}(t, e) : o(n ? {
									month: e
								} : {
									month: e,
									day: "numeric"
								}, "month")
							},
							l = function(e, n) {
								return i ? function(e, t) {
									return $e(t)[e.weekday - 1]
								}(t, e) : o(n ? {
									weekday: e
								} : {
									weekday: e,
									month: "long",
									day: "numeric"
								}, "weekday")
							},
							f = function(n) {
								var i = e.macroTokenToFormatOpts(n);
								return i ? r.formatWithSystemDefault(t, i) : n
							},
							d = function(e) {
								return i ? function(e, t) {
									return Me(t)[e.year < 0 ? 0 : 1]
								}(t, e) : o({
									era: e
								}, "era")
							};
						return Ie(e.parseFormat(n), (function(e) {
							switch (e) {
								case "S":
									return r.num(t.millisecond);
								case "u":
								case "SSS":
									return r.num(t.millisecond, 3);
								case "s":
									return r.num(t.second);
								case "ss":
									return r.num(t.second, 2);
								case "m":
									return r.num(t.minute);
								case "mm":
									return r.num(t.minute, 2);
								case "h":
									return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
								case "hh":
									return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
								case "H":
									return r.num(t.hour);
								case "HH":
									return r.num(t.hour, 2);
								case "Z":
									return s({
										format: "narrow",
										allowZ: r.opts.allowZ
									});
								case "ZZ":
									return s({
										format: "short",
										allowZ: r.opts.allowZ
									});
								case "ZZZ":
									return s({
										format: "techie",
										allowZ: r.opts.allowZ
									});
								case "ZZZZ":
									return t.zone.offsetName(t.ts, {
										format: "short",
										locale: r.loc.locale
									});
								case "ZZZZZ":
									return t.zone.offsetName(t.ts, {
										format: "long",
										locale: r.loc.locale
									});
								case "z":
									return t.zoneName;
								case "a":
									return u();
								case "d":
									return a ? o({
										day: "numeric"
									}, "day") : r.num(t.day);
								case "dd":
									return a ? o({
										day: "2-digit"
									}, "day") : r.num(t.day, 2);
								case "c":
									return r.num(t.weekday);
								case "ccc":
									return l("short", !0);
								case "cccc":
									return l("long", !0);
								case "ccccc":
									return l("narrow", !0);
								case "E":
									return r.num(t.weekday);
								case "EEE":
									return l("short", !1);
								case "EEEE":
									return l("long", !1);
								case "EEEEE":
									return l("narrow", !1);
								case "L":
									return a ? o({
										month: "numeric",
										day: "numeric"
									}, "month") : r.num(t.month);
								case "LL":
									return a ? o({
										month: "2-digit",
										day: "numeric"
									}, "month") : r.num(t.month, 2);
								case "LLL":
									return c("short", !0);
								case "LLLL":
									return c("long", !0);
								case "LLLLL":
									return c("narrow", !0);
								case "M":
									return a ? o({
										month: "numeric"
									}, "month") : r.num(t.month);
								case "MM":
									return a ? o({
										month: "2-digit"
									}, "month") : r.num(t.month, 2);
								case "MMM":
									return c("short", !1);
								case "MMMM":
									return c("long", !1);
								case "MMMMM":
									return c("narrow", !1);
								case "y":
									return a ? o({
										year: "numeric"
									}, "year") : r.num(t.year);
								case "yy":
									return a ? o({
										year: "2-digit"
									}, "year") : r.num(t.year.toString().slice(-2), 2);
								case "yyyy":
									return a ? o({
										year: "numeric"
									}, "year") : r.num(t.year, 4);
								case "yyyyyy":
									return a ? o({
										year: "numeric"
									}, "year") : r.num(t.year, 6);
								case "G":
									return d("short");
								case "GG":
									return d("long");
								case "GGGGG":
									return d("narrow");
								case "kk":
									return r.num(t.weekYear.toString().slice(-2), 2);
								case "kkkk":
									return r.num(t.weekYear, 4);
								case "W":
									return r.num(t.weekNumber);
								case "WW":
									return r.num(t.weekNumber, 2);
								case "o":
									return r.num(t.ordinal);
								case "ooo":
									return r.num(t.ordinal, 3);
								case "q":
									return r.num(t.quarter);
								case "qq":
									return r.num(t.quarter, 2);
								case "X":
									return r.num(Math.floor(t.ts / 1e3));
								case "x":
									return r.num(t.ts);
								default:
									return f(e)
							}
						}))
					}, t.formatDurationFromString = function(t, n) {
						var r = this,
							i = function(e) {
								switch (e[0]) {
									case "S":
										return "millisecond";
									case "s":
										return "second";
									case "m":
										return "minute";
									case "h":
										return "hour";
									case "d":
										return "day";
									case "M":
										return "month";
									case "y":
										return "year";
									default:
										return null
								}
							},
							a = e.parseFormat(n),
							o = a.reduce((function(e, t) {
								var n = t.literal,
									r = t.val;
								return n ? e : e.concat(r)
							}), []);
						return Ie(a, function(e) {
							return function(t) {
								var n = i(t);
								return n ? r.num(e.get(n), t.length) : t
							}
						}(t.shiftTo.apply(t, o.map(i).filter((function(e) {
							return e
						})))))
					}, e
				}(),
				Be = function() {
					function e(e, t) {
						this.reason = e, this.explanation = t
					}
					return e.prototype.toMessage = function() {
						return this.explanation ? this.reason + ": " + this.explanation : this.reason
					}, e
				}(),
				Ne = function() {
					function e() {}
					var t = e.prototype;
					return t.offsetName = function(e, t) {
						throw new y
					}, t.formatOffset = function(e, t) {
						throw new y
					}, t.offset = function(e) {
						throw new y
					}, t.equals = function(e) {
						throw new y
					}, i(e, [{
						key: "type",
						get: function() {
							throw new y
						}
					}, {
						key: "name",
						get: function() {
							throw new y
						}
					}, {
						key: "universal",
						get: function() {
							throw new y
						}
					}, {
						key: "isValid",
						get: function() {
							throw new y
						}
					}]), e
				}(),
				Re = null,
				Fe = function(e) {
					function t() {
						return e.apply(this, arguments) || this
					}
					a(t, e);
					var n = t.prototype;
					return n.offsetName = function(e, t) {
						return de(e, t.format, t.locale)
					}, n.formatOffset = function(e, t) {
						return me(this.offset(e), t)
					}, n.offset = function(e) {
						return -new Date(e).getTimezoneOffset()
					}, n.equals = function(e) {
						return "local" === e.type
					}, i(t, [{
						key: "type",
						get: function() {
							return "local"
						}
					}, {
						key: "name",
						get: function() {
							return W() ? (new Intl.DateTimeFormat).resolvedOptions().timeZone : "local"
						}
					}, {
						key: "universal",
						get: function() {
							return !1
						}
					}, {
						key: "isValid",
						get: function() {
							return !0
						}
					}], [{
						key: "instance",
						get: function() {
							return null === Re && (Re = new t), Re
						}
					}]), t
				}(Ne),
				Ue = RegExp("^" + ge.source + "$"),
				je = {};
			var He = {
				year: 0,
				month: 1,
				day: 2,
				hour: 3,
				minute: 4,
				second: 5
			};
			var Ye = {},
				Ve = function(e) {
					function t(n) {
						var r;
						return (r = e.call(this) || this).zoneName = n, r.valid = t.isValidZone(n), r
					}
					a(t, e), t.create = function(e) {
						return Ye[e] || (Ye[e] = new t(e)), Ye[e]
					}, t.resetCache = function() {
						Ye = {}, je = {}
					}, t.isValidSpecifier = function(e) {
						return !(!e || !e.match(Ue))
					}, t.isValidZone = function(e) {
						try {
							return new Intl.DateTimeFormat("en-US", {
								timeZone: e
							}).format(), !0
						} catch (e) {
							return !1
						}
					}, t.parseGMTOffset = function(e) {
						if (e) {
							var t = e.match(/^Etc\/GMT([+-]\d{1,2})$/i);
							if (t) return -60 * parseInt(t[1])
						}
						return null
					};
					var n = t.prototype;
					return n.offsetName = function(e, t) {
						return de(e, t.format, t.locale, this.name)
					}, n.formatOffset = function(e, t) {
						return me(this.offset(e), t)
					}, n.offset = function(e) {
						var t = new Date(e),
							n = function(e) {
								return je[e] || (je[e] = new Intl.DateTimeFormat("en-US", {
									hour12: !1,
									timeZone: e,
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit"
								})), je[e]
							}(this.name),
							r = n.formatToParts ? function(e, t) {
								for (var n = e.formatToParts(t), r = [], i = 0; i < n.length; i++) {
									var a = n[i],
										o = a.type,
										s = a.value,
										u = He[o];
									Q(u) || (r[u] = parseInt(s, 10))
								}
								return r
							}(n, t) : function(e, t) {
								var n = e.format(t).replace(/\u200E/g, ""),
									r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
									i = r[1],
									a = r[2];
								return [r[3], i, a, r[4], r[5], r[6]]
							}(n, t),
							i = r[0],
							a = r[1],
							o = r[2],
							s = r[3],
							u = +t,
							c = u % 1e3;
						return (ce({
							year: i,
							month: a,
							day: o,
							hour: 24 === s ? 0 : s,
							minute: r[4],
							second: r[5],
							millisecond: 0
						}) - (u -= c >= 0 ? c : 1e3 + c)) / 6e4
					}, n.equals = function(e) {
						return "iana" === e.type && e.name === this.name
					}, i(t, [{
						key: "type",
						get: function() {
							return "iana"
						}
					}, {
						key: "name",
						get: function() {
							return this.zoneName
						}
					}, {
						key: "universal",
						get: function() {
							return !1
						}
					}, {
						key: "isValid",
						get: function() {
							return this.valid
						}
					}]), t
				}(Ne),
				ze = null,
				Qe = function(e) {
					function t(t) {
						var n;
						return (n = e.call(this) || this).fixed = t, n
					}
					a(t, e), t.instance = function(e) {
						return 0 === e ? t.utcInstance : new t(e)
					}, t.parseSpecifier = function(e) {
						if (e) {
							var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
							if (n) return new t(he(n[1], n[2]))
						}
						return null
					}, i(t, null, [{
						key: "utcInstance",
						get: function() {
							return null === ze && (ze = new t(0)), ze
						}
					}]);
					var n = t.prototype;
					return n.offsetName = function() {
						return this.name
					}, n.formatOffset = function(e, t) {
						return me(this.fixed, t)
					}, n.offset = function() {
						return this.fixed
					}, n.equals = function(e) {
						return "fixed" === e.type && e.fixed === this.fixed
					}, i(t, [{
						key: "type",
						get: function() {
							return "fixed"
						}
					}, {
						key: "name",
						get: function() {
							return 0 === this.fixed ? "UTC" : "UTC" + me(this.fixed, "narrow")
						}
					}, {
						key: "universal",
						get: function() {
							return !0
						}
					}, {
						key: "isValid",
						get: function() {
							return !0
						}
					}]), t
				}(Ne),
				Ge = function(e) {
					function t(t) {
						var n;
						return (n = e.call(this) || this).zoneName = t, n
					}
					a(t, e);
					var n = t.prototype;
					return n.offsetName = function() {
						return null
					}, n.formatOffset = function() {
						return ""
					}, n.offset = function() {
						return NaN
					}, n.equals = function() {
						return !1
					}, i(t, [{
						key: "type",
						get: function() {
							return "invalid"
						}
					}, {
						key: "name",
						get: function() {
							return this.zoneName
						}
					}, {
						key: "universal",
						get: function() {
							return !1
						}
					}, {
						key: "isValid",
						get: function() {
							return !1
						}
					}]), t
				}(Ne);

			function qe(e, t) {
				var n;
				if (Q(e) || null === e) return t;
				if (e instanceof Ne) return e;
				if (function(e) {
						return "string" == typeof e
					}(e)) {
					var r = e.toLowerCase();
					return "local" === r ? t : "utc" === r || "gmt" === r ? Qe.utcInstance : null != (n = Ve.parseGMTOffset(e)) ? Qe.instance(n) : Ve.isValidSpecifier(r) ? Ve.create(e) : Qe.parseSpecifier(r) || new Ge(e)
				}
				return G(e) ? Qe.instance(e) : "object" == typeof e && e.offset && "number" == typeof e.offset ? e : new Ge(e)
			}
			var We = function() {
					return Date.now()
				},
				Ke = null,
				Xe = null,
				Je = null,
				Ze = null,
				et = !1,
				tt = function() {
					function e() {}
					return e.resetCaches = function() {
						dt.resetCache(), Ve.resetCache()
					}, i(e, null, [{
						key: "now",
						get: function() {
							return We
						},
						set: function(e) {
							We = e
						}
					}, {
						key: "defaultZoneName",
						get: function() {
							return e.defaultZone.name
						},
						set: function(e) {
							Ke = e ? qe(e) : null
						}
					}, {
						key: "defaultZone",
						get: function() {
							return Ke || Fe.instance
						}
					}, {
						key: "defaultLocale",
						get: function() {
							return Xe
						},
						set: function(e) {
							Xe = e
						}
					}, {
						key: "defaultNumberingSystem",
						get: function() {
							return Je
						},
						set: function(e) {
							Je = e
						}
					}, {
						key: "defaultOutputCalendar",
						get: function() {
							return Ze
						},
						set: function(e) {
							Ze = e
						}
					}, {
						key: "throwOnInvalid",
						get: function() {
							return et
						},
						set: function(e) {
							et = e
						}
					}]), e
				}(),
				nt = {};

			function rt(e, t) {
				void 0 === t && (t = {});
				var n = JSON.stringify([e, t]),
					r = nt[n];
				return r || (r = new Intl.DateTimeFormat(e, t), nt[n] = r), r
			}
			var it = {};
			var at = {};

			function ot(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = (n.base, function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(n, ["base"])),
					i = JSON.stringify([e, r]),
					a = at[i];
				return a || (a = new Intl.RelativeTimeFormat(e, t), at[i] = a), a
			}
			var st = null;

			function ut(e, t, n, r, i) {
				var a = e.listingMode(n);
				return "error" === a ? null : "en" === a ? r(t) : i(t)
			}
			var ct = function() {
					function e(e, t, n) {
						if (this.padTo = n.padTo || 0, this.floor = n.floor || !1, !t && W()) {
							var r = {
								useGrouping: !1
							};
							n.padTo > 0 && (r.minimumIntegerDigits = n.padTo), this.inf = function(e, t) {
								void 0 === t && (t = {});
								var n = JSON.stringify([e, t]),
									r = it[n];
								return r || (r = new Intl.NumberFormat(e, t), it[n] = r), r
							}(e, r)
						}
					}
					return e.prototype.format = function(e) {
						if (this.inf) {
							var t = this.floor ? Math.floor(e) : e;
							return this.inf.format(t)
						}
						return ne(this.floor ? Math.floor(e) : ae(e, 3), this.padTo)
					}, e
				}(),
				lt = function() {
					function e(e, t, n) {
						var r;
						if (this.opts = n, this.hasIntl = W(), e.zone.universal && this.hasIntl) {
							var i = e.offset / 60 * -1;
							i >= -14 && i <= 12 && i % 1 == 0 ? (r = i >= 0 ? "Etc/GMT+" + i : "Etc/GMT" + i, this.dt = e) : (r = "UTC", n.timeZoneName ? this.dt = e : this.dt = 0 === e.offset ? e : pr.fromMillis(e.ts + 60 * e.offset * 1e3))
						} else "local" === e.zone.type ? this.dt = e : (this.dt = e, r = e.zone.name);
						if (this.hasIntl) {
							var a = Object.assign({}, this.opts);
							r && (a.timeZone = r), this.dtf = rt(t, a)
						}
					}
					var t = e.prototype;
					return t.format = function() {
						if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
						var e = function(e) {
								var t = "EEEE, LLLL d, yyyy, h:mm a";
								switch (ve(Z(e, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
									case ve(E):
										return "M/d/yyyy";
									case ve(T):
										return "LLL d, yyyy";
									case ve(C):
										return "EEE, LLL d, yyyy";
									case ve($):
										return "LLLL d, yyyy";
									case ve(k):
										return "EEEE, LLLL d, yyyy";
									case ve(O):
										return "h:mm a";
									case ve(x):
										return "h:mm:ss a";
									case ve(P):
									case ve(M):
										return "h:mm a";
									case ve(I):
										return "HH:mm";
									case ve(L):
										return "HH:mm:ss";
									case ve(D):
									case ve(B):
										return "HH:mm";
									case ve(N):
										return "M/d/yyyy, h:mm a";
									case ve(F):
										return "LLL d, yyyy, h:mm a";
									case ve(H):
										return "LLLL d, yyyy, h:mm a";
									case ve(V):
										return t;
									case ve(R):
										return "M/d/yyyy, h:mm:ss a";
									case ve(U):
										return "LLL d, yyyy, h:mm:ss a";
									case ve(j):
										return "EEE, d LLL yyyy, h:mm a";
									case ve(Y):
										return "LLLL d, yyyy, h:mm:ss a";
									case ve(z):
										return "EEEE, LLLL d, yyyy, h:mm:ss a";
									default:
										return t
								}
							}(this.opts),
							t = dt.create("en-US");
						return De.create(t).formatDateTimeFromString(this.dt, e)
					}, t.formatToParts = function() {
						return this.hasIntl && K() ? this.dtf.formatToParts(this.dt.toJSDate()) : []
					}, t.resolvedOptions = function() {
						return this.hasIntl ? this.dtf.resolvedOptions() : {
							locale: "en-US",
							numberingSystem: "latn",
							outputCalendar: "gregory"
						}
					}, e
				}(),
				ft = function() {
					function e(e, t, n) {
						this.opts = Object.assign({
							style: "long"
						}, n), !t && X() && (this.rtf = ot(e, n))
					}
					var t = e.prototype;
					return t.format = function(e, t) {
						return this.rtf ? this.rtf.format(e, t) : function(e, t, n, r) {
							void 0 === n && (n = "always"), void 0 === r && (r = !1);
							var i = {
									years: ["year", "yr."],
									quarters: ["quarter", "qtr."],
									months: ["month", "mo."],
									weeks: ["week", "wk."],
									days: ["day", "day", "days"],
									hours: ["hour", "hr."],
									minutes: ["minute", "min."],
									seconds: ["second", "sec."]
								},
								a = -1 === ["hours", "minutes", "seconds"].indexOf(e);
							if ("auto" === n && a) {
								var o = "days" === e;
								switch (t) {
									case 1:
										return o ? "tomorrow" : "next " + i[e][0];
									case -1:
										return o ? "yesterday" : "last " + i[e][0];
									case 0:
										return o ? "today" : "this " + i[e][0]
								}
							}
							var s = Object.is(t, -0) || t < 0,
								u = Math.abs(t),
								c = 1 === u,
								l = i[e],
								f = r ? c ? l[1] : l[2] || l[1] : c ? i[e][0] : e;
							return s ? u + " " + f + " ago" : "in " + u + " " + f
						}(t, e, this.opts.numeric, "long" !== this.opts.style)
					}, t.formatToParts = function(e, t) {
						return this.rtf ? this.rtf.formatToParts(e, t) : []
					}, e
				}(),
				dt = function() {
					function e(e, t, n, r) {
						var i = function(e) {
								var t = e.indexOf("-u-");
								if (-1 === t) return [e];
								var n, r = e.substring(0, t);
								try {
									n = rt(e).resolvedOptions()
								} catch (e) {
									n = rt(r).resolvedOptions()
								}
								var i = n;
								return [r, i.numberingSystem, i.calendar]
							}(e),
							a = i[0],
							o = i[1],
							s = i[2];
						this.locale = a, this.numberingSystem = t || o || null, this.outputCalendar = n || s || null, this.intl = function(e, t, n) {
							return W() ? n || t ? (e += "-u", n && (e += "-ca-" + n), t && (e += "-nu-" + t), e) : e : []
						}(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
							format: {},
							standalone: {}
						}, this.monthsCache = {
							format: {},
							standalone: {}
						}, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null
					}

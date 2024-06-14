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

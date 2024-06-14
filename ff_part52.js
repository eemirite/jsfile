					offset: !1,
					gridLines: {
						display: !0,
						color: "rgba(0,0,0,0.1)",
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0,0,0,0.25)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0
					},
					scaleLabel: {
						display: !1,
						labelString: "",
						padding: {
							top: 4,
							bottom: 4
						}
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: an.formatters.values,
						minor: {},
						major: {}
					}
				});
				var gn = q.extend({
					zeroLineIndex: 0,
					getPadding: function() {
						var e = this;
						return {
							left: e.paddingLeft || 0,
							top: e.paddingTop || 0,
							right: e.paddingRight || 0,
							bottom: e.paddingBottom || 0
						}
					},
					getTicks: function() {
						return this._ticks
					},
					_getLabels: function() {
						var e = this.chart.data;
						return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
					},
					mergeTicksOptions: function() {},
					beforeUpdate: function() {
						j.callback(this.options.beforeUpdate, [this])
					},
					update: function(e, t, n) {
						var r, i, a, o, s, u = this,
							c = u.options.ticks,
							l = c.sampleSize;
						if (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = j.extend({
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, n), u._ticks = null, u.ticks = null, u._labelSizes = null, u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u._gridLineItems = null, u._labelItems = null, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), o = u.buildTicks() || [], (!(o = u.afterBuildTicks(o) || o) || !o.length) && u.ticks)
							for (o = [], r = 0, i = u.ticks.length; r < i; ++r) o.push({
								value: u.ticks[r],
								major: !1
							});
						return u._ticks = o, s = l < o.length, a = u._convertTicksToLabels(s ? function(e, t) {
							for (var n = [], r = e.length / t, i = 0, a = e.length; i < a; i += r) n.push(e[Math.floor(i)]);
							return n
						}(o, l) : o), u._configure(), u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u._ticksToDraw = c.display && (c.autoSkip || "auto" === c.source) ? u._autoSkip(o) : o, s && (a = u._convertTicksToLabels(u._ticksToDraw)), u.ticks = a, u.afterUpdate(), u.minSize
					},
					_configure: function() {
						var e, t, n = this,
							r = n.options.ticks.reverse;
						n.isHorizontal() ? (e = n.left, t = n.right) : (e = n.top, t = n.bottom, r = !r), n._startPixel = e, n._endPixel = t, n._reversePixels = r, n._length = t - e
					},
					afterUpdate: function() {
						j.callback(this.options.afterUpdate, [this])
					},
					beforeSetDimensions: function() {
						j.callback(this.options.beforeSetDimensions, [this])
					},
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
					},
					afterSetDimensions: function() {
						j.callback(this.options.afterSetDimensions, [this])
					},
					beforeDataLimits: function() {
						j.callback(this.options.beforeDataLimits, [this])
					},
					determineDataLimits: j.noop,
					afterDataLimits: function() {
						j.callback(this.options.afterDataLimits, [this])
					},
					beforeBuildTicks: function() {
						j.callback(this.options.beforeBuildTicks, [this])
					},
					buildTicks: j.noop,
					afterBuildTicks: function(e) {
						var t = this;
						return on(e) && e.length ? j.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = j.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e)
					},
					beforeTickToLabelConversion: function() {
						j.callback(this.options.beforeTickToLabelConversion, [this])
					},
					convertTicksToLabels: function() {
						var e = this,
							t = e.options.ticks;
						e.ticks = e.ticks.map(t.userCallback || t.callback, this)
					},
					afterTickToLabelConversion: function() {
						j.callback(this.options.afterTickToLabelConversion, [this])
					},
					beforeCalculateTickRotation: function() {
						j.callback(this.options.beforeCalculateTickRotation, [this])
					},
					calculateTickRotation: function() {
						var e, t, n, r, i, a, o, s = this,
							u = s.options,
							c = u.ticks,
							l = s.getTicks().length,
							f = c.minRotation || 0,
							d = c.maxRotation,
							h = f;
						!s._isVisible() || !c.display || f >= d || l <= 1 || !s.isHorizontal() ? s.labelRotation = f : (t = (e = s._getLabelSizes()).widest.width, n = e.highest.height - e.highest.offset, r = Math.min(s.maxWidth, s.chart.width - t), t + 6 > (i = u.offset ? s.maxWidth / l : r / (l - 1)) && (i = r / (l - (u.offset ? .5 : 1)), a = s.maxHeight - dn(u.gridLines) - c.padding - hn(u.scaleLabel), o = Math.sqrt(t * t + n * n), h = j.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / i, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))), h = Math.max(f, Math.min(d, h))), s.labelRotation = h)
					},
					afterCalculateTickRotation: function() {
						j.callback(this.options.afterCalculateTickRotation, [this])
					},
					beforeFit: function() {
						j.callback(this.options.beforeFit, [this])
					},
					fit: function() {
						var e = this,
							t = e.minSize = {
								width: 0,
								height: 0
							},
							n = e.chart,
							r = e.options,
							i = r.ticks,
							a = r.scaleLabel,
							o = r.gridLines,
							s = e._isVisible(),
							u = "bottom" === r.position,
							c = e.isHorizontal();
						if (c ? t.width = e.maxWidth : s && (t.width = dn(o) + hn(a)), c ? s && (t.height = dn(o) + hn(a)) : t.height = e.maxHeight, i.display && s) {
							var l = _n(i),
								f = e._getLabelSizes(),
								d = f.first,
								h = f.last,
								p = f.widest,
								_ = f.highest,
								m = .4 * l.minor.lineHeight,
								b = i.padding;
							if (c) {
								var g = 0 !== e.labelRotation,
									v = j.toRadians(e.labelRotation),
									y = Math.cos(v),
									A = Math.sin(v),
									S = A * p.width + y * (_.height - (g ? _.offset : 0)) + (g ? 0 : m);
								t.height = Math.min(e.maxHeight, t.height + S + b);
								var w, E, T = e.getPixelForTick(0) - e.left,
									C = e.right - e.getPixelForTick(e.getTicks().length - 1);
								g ? (w = u ? y * d.width + A * d.offset : A * (d.height - d.offset), E = u ? A * (h.height - h.offset) : y * h.width + A * h.offset) : (w = d.width / 2, E = h.width / 2), e.paddingLeft = Math.max((w - T) * e.width / (e.width - T), 0) + 3, e.paddingRight = Math.max((E - C) * e.width / (e.width - C), 0) + 3
							} else {
								var $ = i.mirror ? 0 : p.width + b + m;
								t.width = Math.min(e.maxWidth, t.width + $), e.paddingTop = d.height / 2, e.paddingBottom = h.height / 2
							}
						}
						e.handleMargins(), c ? (e.width = e._length = n.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = n.height - e.margins.top - e.margins.bottom)
					},
					handleMargins: function() {
						var e = this;
						e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
					},
					afterFit: function() {
						j.callback(this.options.afterFit, [this])
					},
					isHorizontal: function() {
						var e = this.options.position;
						return "top" === e || "bottom" === e
					},
					isFullWidth: function() {
						return this.options.fullWidth
					},
					getRightValue: function(e) {
						if (sn(e)) return NaN;
						if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
						if (e)
							if (this.isHorizontal()) {
								if (void 0 !== e.x) return this.getRightValue(e.x)
							} else if (void 0 !== e.y) return this.getRightValue(e.y);
						return e
					},
					_convertTicksToLabels: function(e) {
						var t, n, r, i = this;
						for (i.ticks = e.map((function(e) {
								return e.value
							})), i.beforeTickToLabelConversion(), t = i.convertTicksToLabels(e) || i.ticks, i.afterTickToLabelConversion(), n = 0, r = e.length; n < r; ++n) e[n].label = t[n];
						return t
					},
					_getLabelSizes: function() {
						var e = this,
							t = e._labelSizes;
						return t || (e._labelSizes = t = fn(e.ctx, _n(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t
					},
					_parseValue: function(e) {
						var t, n, r, i;
						return on(e) ? (t = +this.getRightValue(e[0]), n = +this.getRightValue(e[1]), r = Math.min(t, n), i = Math.max(t, n)) : (t = void 0, n = e = +this.getRightValue(e), r = e, i = e), {
							min: r,
							max: i,
							start: t,
							end: n
						}
					},
					_getScaleLabel: function(e) {
						var t = this._parseValue(e);
						return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
					},
					getLabelForIndex: j.noop,
					getPixelForValue: j.noop,
					getValueForPixel: j.noop,
					getPixelForTick: function(e) {
						var t = this,
							n = t.options.offset,
							r = t._ticks.length,
							i = 1 / Math.max(r - (n ? 0 : 1), 1);
						return e < 0 || e > r - 1 ? null : t.getPixelForDecimal(e * i + (n ? i / 2 : 0))
					},
					getPixelForDecimal: function(e) {
						var t = this;
						return t._reversePixels && (e = 1 - e), t._startPixel + e * t._length
					},
					getDecimalForPixel: function(e) {
						var t = (e - this._startPixel) / this._length;
						return this._reversePixels ? 1 - t : t
					},
					getBasePixel: function() {
						return this.getPixelForValue(this.getBaseValue())
					},
					getBaseValue: function() {
						var e = this,
							t = e.min,
							n = e.max;
						return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
					},
					_autoSkip: function(e) {
						var t, n, r, i, a = this,
							o = a.options.ticks,
							s = a._length,
							u = o.maxTicksLimit || s / a._tickSize() + 1,
							c = o.major.enabled ? function(e) {
								var t, n, r = [];
								for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
								return r
							}(e) : [],
							l = c.length,
							f = c[0],
							d = c[l - 1];
						if (l > u) return function(e, t, n) {
							var r, i, a = 0,
								o = t[0];
							for (n = Math.ceil(n), r = 0; r < e.length; r++) i = e[r], r === o ? (i._index = r, o = t[++a * n]) : delete i.label
						}(e, c, l / u), mn(e);
						if (r = function(e, t, n, r) {
								var i, a, o, s, u = function(e) {
										var t, n, r = e.length;
										if (r < 2) return !1;
										for (n = e[0], t = 1; t < r; ++t)
											if (e[t] - e[t - 1] !== n) return !1;
										return n
									}(e),
									c = (t.length - 1) / r;
								if (!u) return Math.max(c, 1);
								for (o = 0, s = (i = j.math._factorize(u)).length - 1; o < s; o++)
									if ((a = i[o]) > c) return a;
								return Math.max(c, 1)
							}(c, e, 0, u), l > 0) {
							for (t = 0, n = l - 1; t < n; t++) bn(e, r, c[t], c[t + 1]);
							return i = l > 1 ? (d - f) / (l - 1) : null, bn(e, r, j.isNullOrUndef(i) ? 0 : f - i, f), bn(e, r, d, j.isNullOrUndef(i) ? e.length : d + i), mn(e)
						}
						return bn(e, r), mn(e)
					},
					_tickSize: function() {
						var e = this,
							t = e.options.ticks,
							n = j.toRadians(e.labelRotation),
							r = Math.abs(Math.cos(n)),
							i = Math.abs(Math.sin(n)),
							a = e._getLabelSizes(),
							o = t.autoSkipPadding || 0,
							s = a ? a.widest.width + o : 0,
							u = a ? a.highest.height + o : 0;
						return e.isHorizontal() ? u * r > s * i ? s / r : u / i : u * i < s * r ? u / r : s / i
					},
					_isVisible: function() {
						var e, t, n, r = this,
							i = r.chart,
							a = r.options.display;
						if ("auto" !== a) return !!a;
						for (e = 0, t = i.data.datasets.length; e < t; ++e)
							if (i.isDatasetVisible(e) && ((n = i.getDatasetMeta(e)).xAxisID === r.id || n.yAxisID === r.id)) return !0;
						return !1
					},
					_computeGridLineItems: function(e) {
						var t, n, r, i, a, o, s, u, c, l, f, d, h, p, _, m, b, g = this,
							v = g.chart,
							y = g.options,
							A = y.gridLines,
							S = y.position,
							w = A.offsetGridLines,
							E = g.isHorizontal(),
							T = g._ticksToDraw,
							C = T.length + (w ? 1 : 0),
							$ = dn(A),
							k = [],
							O = A.drawBorder ? cn(A.lineWidth, 0, 0) : 0,
							x = O / 2,
							P = j._alignPixel,
							M = function(e) {
								return P(v, e, O)
							};
						for ("top" === S ? (t = M(g.bottom), s = g.bottom - $, c = t - x, f = M(e.top) + x, h = e.bottom) : "bottom" === S ? (t = M(g.top), f = e.top, h = M(e.bottom) - x, s = t + x, c = g.top + $) : "left" === S ? (t = M(g.right), o = g.right - $, u = t - x, l = M(e.left) + x, d = e.right) : (t = M(g.left), l = e.left, d = M(e.right) - x, o = t + x, u = g.left + $), n = 0; n < C; ++n) r = T[n] || {}, sn(r.label) && n < T.length || (n === g.zeroLineIndex && y.offset === w ? (p = A.zeroLineWidth, _ = A.zeroLineColor, m = A.zeroLineBorderDash || [], b = A.zeroLineBorderDashOffset || 0) : (p = cn(A.lineWidth, n, 1), _ = cn(A.color, n, "rgba(0,0,0,0.1)"), m = A.borderDash || [], b = A.borderDashOffset || 0), void 0 !== (i = ln(g, r._index || n, w)) && (a = P(v, i, p), E ? o = u = l = d = a : s = c = f = h = a, k.push({
							tx1: o,
							ty1: s,
							tx2: u,
							ty2: c,
							x1: l,
							y1: f,
							x2: d,
							y2: h,
							width: p,
							color: _,
							borderDash: m,
							borderDashOffset: b
						})));
						return k.ticksLength = C, k.borderValue = t, k
					},
					_computeLabelItems: function() {
						var e, t, n, r, i, a, o, s, u, c, l, f, d = this,
							h = d.options,
							p = h.ticks,
							_ = h.position,
							m = p.mirror,
							b = d.isHorizontal(),
							g = d._ticksToDraw,
							v = _n(p),
							y = p.padding,
							A = dn(h.gridLines),
							S = -j.toRadians(d.labelRotation),
							w = [];
						for ("top" === _ ? (a = d.bottom - A - y, o = S ? "left" : "center") : "bottom" === _ ? (a = d.top + A + y, o = S ? "right" : "center") : "left" === _ ? (i = d.right - (m ? 0 : A) - y, o = m ? "left" : "right") : (i = d.left + (m ? 0 : A) + y, o = m ? "right" : "left"), e = 0, t = g.length; e < t; ++e) r = (n = g[e]).label, sn(r) || (s = d.getPixelForTick(n._index || e) + p.labelOffset, c = (u = n.major ? v.major : v.minor).lineHeight, l = on(r) ? r.length : 1, b ? (i = s, f = "top" === _ ? ((S ? 1 : .5) - l) * c : (S ? 0 : .5) * c) : (a = s, f = (1 - l) * c / 2), w.push({
							x: i,
							y: a,
							rotation: S,
							label: r,
							font: u,
							textOffset: f,
							textAlign: o
						}));
						return w
					},
					_drawGrid: function(e) {
						var t = this,
							n = t.options.gridLines;
						if (n.display) {
							var r, i, a, o, s, u = t.ctx,
								c = t.chart,
								l = j._alignPixel,
								f = n.drawBorder ? cn(n.lineWidth, 0, 0) : 0,
								d = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
							for (a = 0, o = d.length; a < o; ++a) r = (s = d[a]).width, i = s.color, r && i && (u.save(), u.lineWidth = r, u.strokeStyle = i, u.setLineDash && (u.setLineDash(s.borderDash), u.lineDashOffset = s.borderDashOffset), u.beginPath(), n.drawTicks && (u.moveTo(s.tx1, s.ty1), u.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (u.moveTo(s.x1, s.y1), u.lineTo(s.x2, s.y2)), u.stroke(), u.restore());
							if (f) {
								var h, p, _, m, b = f,
									g = cn(n.lineWidth, d.ticksLength - 1, 1),
									v = d.borderValue;
								t.isHorizontal() ? (h = l(c, t.left, b) - b / 2, p = l(c, t.right, g) + g / 2, _ = m = v) : (_ = l(c, t.top, b) - b / 2, m = l(c, t.bottom, g) + g / 2, h = p = v), u.lineWidth = f, u.strokeStyle = cn(n.color, 0), u.beginPath(), u.moveTo(h, _), u.lineTo(p, m), u.stroke()
							}
						}
					},
					_drawLabels: function() {
						var e = this;
						if (e.options.ticks.display) {
							var t, n, r, i, a, o, s, u, c = e.ctx,
								l = e._labelItems || (e._labelItems = e._computeLabelItems());
							for (t = 0, r = l.length; t < r; ++t) {
								if (o = (a = l[t]).font, c.save(), c.translate(a.x, a.y), c.rotate(a.rotation), c.font = o.string, c.fillStyle = o.color, c.textBaseline = "middle", c.textAlign = a.textAlign, s = a.label, u = a.textOffset, on(s))
									for (n = 0, i = s.length; n < i; ++n) c.fillText("" + s[n], 0, u), u += o.lineHeight;
								else c.fillText(s, 0, u);
								c.restore()
							}
						}
					},
					_drawTitle: function() {
						var e = this,
							t = e.ctx,
							n = e.options,
							r = n.scaleLabel;
						if (r.display) {
							var i, a, o = un(r.fontColor, B.global.defaultFontColor),
								s = j.options._parseFont(r),
								u = j.options.toPadding(r.padding),
								c = s.lineHeight / 2,
								l = n.position,
								f = 0;
							if (e.isHorizontal()) i = e.left + e.width / 2, a = "bottom" === l ? e.bottom - c - u.bottom : e.top + c + u.top;
							else {
								var d = "left" === l;
								i = d ? e.left + c + u.top : e.right - c - u.top, a = e.top + e.height / 2, f = d ? -.5 * Math.PI : .5 * Math.PI
							}
							t.save(), t.translate(i, a), t.rotate(f), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = o, t.font = s.string, t.fillText(r.labelString, 0, 0), t.restore()
						}
					},
					draw: function(e) {
						var t = this;
						t._isVisible() && (t._drawGrid(e), t._drawTitle(), t._drawLabels())
					},
					_layers: function() {
						var e = this,
							t = e.options,
							n = t.ticks && t.ticks.z || 0,
							r = t.gridLines && t.gridLines.z || 0;
						return e._isVisible() && n !== r && e.draw === e._draw ? [{
							z: r,
							draw: function() {
								e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments)
							}
						}, {
							z: n,
							draw: function() {
								e._drawLabels.apply(e, arguments)
							}
						}] : [{
							z: n,
							draw: function() {
								e.draw.apply(e, arguments)
							}
						}]
					},
					_getMatchingVisibleMetas: function(e) {
						var t = this,
							n = t.isHorizontal();
						return t.chart._getSortedVisibleDatasetMetas().filter((function(r) {
							return (!e || r.type === e) && (n ? r.xAxisID === t.id : r.yAxisID === t.id)
						}))
					}
				});
				gn.prototype._draw = gn.prototype.draw;
				var vn = gn,
					yn = j.isNullOrUndef,
					An = vn.extend({
						determineDataLimits: function() {
							var e, t = this,
								n = t._getLabels(),
								r = t.options.ticks,
								i = r.min,
								a = r.max,
								o = 0,
								s = n.length - 1;
							void 0 !== i && (e = n.indexOf(i)) >= 0 && (o = e), void 0 !== a && (e = n.indexOf(a)) >= 0 && (s = e), t.minIndex = o, t.maxIndex = s, t.min = n[o], t.max = n[s]
						},
						buildTicks: function() {
							var e = this,
								t = e._getLabels(),
								n = e.minIndex,
								r = e.maxIndex;
							e.ticks = 0 === n && r === t.length - 1 ? t : t.slice(n, r + 1)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								r = n.chart;
							return r.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(r.data.datasets[t].data[e]) : n._getLabels()[e]
						},
						_configure: function() {
							var e = this,
								t = e.options.offset,
								n = e.ticks;
							vn.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), n && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(n.length - (t ? 0 : 1), 1))
						},
						getPixelForValue: function(e, t, n) {
							var r, i, a, o = this;
							return yn(t) || yn(n) || (e = o.chart.data.datasets[n].data[t]), yn(e) || (r = o.isHorizontal() ? e.x : e.y), (void 0 !== r || void 0 !== e && isNaN(t)) && (i = o._getLabels(), e = j.valueOrDefault(r, e), t = -1 !== (a = i.indexOf(e)) ? a : t, isNaN(t) && (t = e)), o.getPixelForDecimal((t - o._startValue) / o._valueRange)
						},
						getPixelForTick: function(e) {
							var t = this.ticks;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange);
							return Math.min(Math.max(n, 0), t.ticks.length - 1)
						},
						getBasePixel: function() {
							return this.bottom
						}
					}),
					Sn = {
						position: "bottom"
					};
				An._defaults = Sn;
				var wn = j.noop,
					En = j.isNullOrUndef,
					Tn = vn.extend({
						getRightValue: function(e) {
							return "string" == typeof e ? +e : vn.prototype.getRightValue.call(this, e)
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							if (t.beginAtZero) {
								var n = j.sign(e.min),
									r = j.sign(e.max);
								n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0)
							}
							var i = void 0 !== t.min || void 0 !== t.suggestedMin,
								a = void 0 !== t.max || void 0 !== t.suggestedMax;
							void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), i !== a && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
						},
						getTickLimit: function() {
							var e, t = this,
								n = t.options.ticks,
								r = n.stepSize,
								i = n.maxTicksLimit;
							return r ? e = Math.ceil(t.max / r) - Math.floor(t.min / r) + 1 : (e = t._computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
						},
						_computeTickLimit: function() {
							return Number.POSITIVE_INFINITY
						},
						handleDirectionalChanges: wn,
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = e.getTickLimit(),
								r = {
									maxTicks: n = Math.max(2, n),
									min: t.min,
									max: t.max,
									precision: t.precision,
									stepSize: j.valueOrDefault(t.fixedStepSize, t.stepSize)
								},
								i = e.ticks = function(e, t) {
									var n, r, i, a, o = [],
										s = e.stepSize,
										u = s || 1,
										c = e.maxTicks - 1,
										l = e.min,
										f = e.max,
										d = e.precision,
										h = t.min,
										p = t.max,
										_ = j.niceNum((p - h) / c / u) * u;
									if (_ < 1e-14 && En(l) && En(f)) return [h, p];
									(a = Math.ceil(p / _) - Math.floor(h / _)) > c && (_ = j.niceNum(a * _ / c / u) * u), s || En(d) ? n = Math.pow(10, j._decimalPlaces(_)) : (n = Math.pow(10, d), _ = Math.ceil(_ * n) / n), r = Math.floor(h / _) * _, i = Math.ceil(p / _) * _, s && (!En(l) && j.almostWhole(l / _, _ / 1e3) && (r = l), !En(f) && j.almostWhole(f / _, _ / 1e3) && (i = f)), a = (i - r) / _, a = j.almostEquals(a, Math.round(a), _ / 1e3) ? Math.round(a) : Math.ceil(a), r = Math.round(r * n) / n, i = Math.round(i * n) / n, o.push(En(l) ? r : l);
									for (var m = 1; m < a; ++m) o.push(Math.round((r + m * _) * n) / n);
									return o.push(En(f) ? i : f), o
								}(r, e);
							e.handleDirectionalChanges(), e.max = j.max(i), e.min = j.min(i), t.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
						},
						convertTicksToLabels: function() {
							var e = this;
							e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), vn.prototype.convertTicksToLabels.call(e)
						},
						_configure: function() {
							var e, t = this,
								n = t.getTicks(),
								r = t.min,
								i = t.max;
							vn.prototype._configure.call(t), t.options.offset && n.length && (r -= e = (i - r) / Math.max(n.length - 1, 1) / 2, i += e), t._startValue = r, t._endValue = i, t._valueRange = i - r
						}
					}),
					Cn = {
						position: "left",
						ticks: {
							callback: an.formatters.linear
						}
					};

				function $n(e, t, n, r) {
					var i, a, o = e.options,
						s = function(e, t, n) {
							var r = [n.type, void 0 === t && void 0 === n.stack ? n.index : "", n.stack].join(".");
							return void 0 === e[r] && (e[r] = {
								pos: [],
								neg: []
							}), e[r]
						}(t, o.stacked, n),
						u = s.pos,
						c = s.neg,
						l = r.length;
					for (i = 0; i < l; ++i) a = e._parseValue(r[i]), isNaN(a.min) || isNaN(a.max) || n.data[i].hidden || (u[i] = u[i] || 0, c[i] = c[i] || 0, o.relativePoints ? u[i] = 100 : a.min < 0 || a.max < 0 ? c[i] += a.min : u[i] += a.max)
				}

				function kn(e, t, n) {
					var r, i, a = n.length;
					for (r = 0; r < a; ++r) i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || t.data[r].hidden || (e.min = Math.min(e.min, i.min), e.max = Math.max(e.max, i.max))
				}
				var On = Tn.extend({
						determineDataLimits: function() {
							var e, t, n, r, i = this,
								a = i.options,
								o = i.chart.data.datasets,
								s = i._getMatchingVisibleMetas(),
								u = a.stacked,
								c = {},
								l = s.length;
							if (i.min = Number.POSITIVE_INFINITY, i.max = Number.NEGATIVE_INFINITY, void 0 === u)
								for (e = 0; !u && e < l; ++e) u = void 0 !== (t = s[e]).stack;
							for (e = 0; e < l; ++e) n = o[(t = s[e]).index].data, u ? $n(i, c, t, n) : kn(i, t, n);
							j.each(c, (function(e) {
								r = e.pos.concat(e.neg), i.min = Math.min(i.min, j.min(r)), i.max = Math.max(i.max, j.max(r))
							})), i.min = j.isFinite(i.min) && !isNaN(i.min) ? i.min : 0, i.max = j.isFinite(i.max) && !isNaN(i.max) ? i.max : 1, i.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							var e, t = this;
							return t.isHorizontal() ? Math.ceil(t.width / 40) : (e = j.options._parseFont(t.options.ticks), Math.ceil(t.height / e.lineHeight))
						},
						handleDirectionalChanges: function() {
							this.isHorizontal() || this.ticks.reverse()
						},
						getLabelForIndex: function(e, t) {
							return this._getScaleLabel(this.chart.data.datasets[t].data[e])
						},
						getPixelForValue: function(e) {
							var t = this;
							return t.getPixelForDecimal((+t.getRightValue(e) - t._startValue) / t._valueRange)
						},
						getValueForPixel: function(e) {
							return this._startValue + this.getDecimalForPixel(e) * this._valueRange
						},
						getPixelForTick: function(e) {
							var t = this.ticksAsNumbers;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
						}
					}),
					xn = Cn;
				On._defaults = xn;
				var Pn = j.valueOrDefault,
					Mn = j.math.log10,
					In = {
						position: "left",
						ticks: {
							callback: an.formatters.logarithmic
						}
					};

				function Ln(e, t) {
					return j.isFinite(e) && e >= 0 ? e : t
				}
				var Dn = vn.extend({
						determineDataLimits: function() {
							var e, t, n, r, i, a, o = this,
								s = o.options,
								u = o.chart,
								c = u.data.datasets,
								l = o.isHorizontal();

							function f(e) {
								return l ? e.xAxisID === o.id : e.yAxisID === o.id
							}
							o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
							var d = s.stacked;
							if (void 0 === d)
								for (e = 0; e < c.length; e++)
									if (t = u.getDatasetMeta(e), u.isDatasetVisible(e) && f(t) && void 0 !== t.stack) {
										d = !0;
										break
									} if (s.stacked || d) {
								var h = {};
								for (e = 0; e < c.length; e++) {
									var p = [(t = u.getDatasetMeta(e)).type, void 0 === s.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
									if (u.isDatasetVisible(e) && f(t))
										for (void 0 === h[p] && (h[p] = []), i = 0, a = (r = c[e].data).length; i < a; i++) {
											var _ = h[p];
											n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (_[i] = _[i] || 0, _[i] += n.max)
										}
								}
								j.each(h, (function(e) {
									if (e.length > 0) {
										var t = j.min(e),
											n = j.max(e);
										o.min = Math.min(o.min, t), o.max = Math.max(o.max, n)
									}
								}))
							} else
								for (e = 0; e < c.length; e++)
									if (t = u.getDatasetMeta(e), u.isDatasetVisible(e) && f(t))
										for (i = 0, a = (r = c[e].data).length; i < a; i++) n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
							o.min = j.isFinite(o.min) ? o.min : null, o.max = j.isFinite(o.max) ? o.max : null, o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							e.min = Ln(t.min, e.min), e.max = Ln(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Mn(e.min)) - 1), e.max = Math.pow(10, Math.floor(Mn(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(Mn(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Mn(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Mn(e.max))) : e.minNotZero = 1)
						},
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = !e.isHorizontal(),
								r = {
									min: Ln(t.min),
									max: Ln(t.max)
								},
								i = e.ticks = function(e, t) {
									var n, r, i = [],
										a = Pn(e.min, Math.pow(10, Math.floor(Mn(t.min)))),
										o = Math.floor(Mn(t.max)),
										s = Math.ceil(t.max / Math.pow(10, o));
									0 === a ? (n = Math.floor(Mn(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(a), a = r * Math.pow(10, n)) : (n = Math.floor(Mn(a)), r = Math.floor(a / Math.pow(10, n)));
									var u = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
									do {
										i.push(a), 10 == ++r && (r = 1, u = ++n >= 0 ? 1 : u), a = Math.round(r * Math.pow(10, n) * u) / u
									} while (n < o || n === o && r < s);
									var c = Pn(e.max, a);
									return i.push(c), i
								}(r, e);
							e.max = j.max(i), e.min = j.min(i), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && i.reverse()
						},
						convertTicksToLabels: function() {
							this.tickValues = this.ticks.slice(), vn.prototype.convertTicksToLabels.call(this)
						},
						getLabelForIndex: function(e, t) {
							return this._getScaleLabel(this.chart.data.datasets[t].data[e])
						},
						getPixelForTick: function(e) {
							var t = this.tickValues;
							return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
						},
						_getFirstTickValue: function(e) {
							var t = Math.floor(Mn(e));
							return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
						},
						_configure: function() {
							var e = this,
								t = e.min,
								n = 0;
							vn.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), n = Pn(e.options.ticks.fontSize, B.global.defaultFontSize) / e._length), e._startValue = Mn(t), e._valueOffset = n, e._valueRange = (Mn(e.max) - Mn(t)) / (1 - n)
						},
						getPixelForValue: function(e) {
							var t = this,
								n = 0;
							return (e = +t.getRightValue(e)) > t.min && e > 0 && (n = (Mn(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(n)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t.getDecimalForPixel(e);
							return 0 === n && 0 === t.min ? 0 : Math.pow(10, t._startValue + (n - t._valueOffset) * t._valueRange)
						}
					}),
					Bn = In;
				Dn._defaults = Bn;
				var Nn = j.valueOrDefault,
					Rn = j.valueAtIndexOrDefault,
					Fn = j.options.resolve,
					Un = {
						display: !0,
						animate: !0,
						position: "chartArea",
						angleLines: {
							display: !0,
							color: "rgba(0,0,0,0.1)",
							lineWidth: 1,
							borderDash: [],
							borderDashOffset: 0
						},
						gridLines: {
							circular: !1
						},
						ticks: {
							showLabelBackdrop: !0,
							backdropColor: "rgba(255,255,255,0.75)",
							backdropPaddingY: 2,
							backdropPaddingX: 2,
							callback: an.formatters.linear
						},
						pointLabels: {
							display: !0,
							fontSize: 10,
							callback: function(e) {
								return e
							}
						}
					};

				function jn(e) {
					var t = e.ticks;
					return t.display && e.display ? Nn(t.fontSize, B.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
				}

				function Hn(e, t, n) {
					return j.isArray(n) ? {
						w: j.longestText(e, e.font, n),
						h: n.length * t
					} : {
						w: e.measureText(n).width,
						h: t
					}
				}

				function Yn(e, t, n, r, i) {
					return e === r || e === i ? {
						start: t - n / 2,
						end: t + n / 2
					} : e < r || e > i ? {
						start: t - n,
						end: t
					} : {
						start: t,
						end: t + n
					}
				}

				function Vn(e) {
					return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
				}

				function zn(e, t, n, r) {
					var i, a, o = n.y + r / 2;
					if (j.isArray(t))
						for (i = 0, a = t.length; i < a; ++i) e.fillText(t[i], n.x, o), o += r;
					else e.fillText(t, n.x, o)
				}

				function Qn(e, t, n) {
					90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
				}

				function Gn(e) {
					return j.isNumber(e) ? e : 0
				}
				var qn = Tn.extend({
						setDimensions: function() {
							var e = this;
							e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = jn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
						},
						determineDataLimits: function() {
							var e = this,
								t = e.chart,
								n = Number.POSITIVE_INFINITY,
								r = Number.NEGATIVE_INFINITY;
							j.each(t.data.datasets, (function(i, a) {
								if (t.isDatasetVisible(a)) {
									var o = t.getDatasetMeta(a);
									j.each(i.data, (function(t, i) {
										var a = +e.getRightValue(t);
										isNaN(a) || o.data[i].hidden || (n = Math.min(a, n), r = Math.max(a, r))
									}))
								}
							})), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = r === Number.NEGATIVE_INFINITY ? 0 : r, e.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							return Math.ceil(this.drawingArea / jn(this.options))
						},
						convertTicksToLabels: function() {
							var e = this;
							Tn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function() {
								var t = j.callback(e.options.pointLabels.callback, arguments, e);
								return t || 0 === t ? t : ""
							}))
						},
						getLabelForIndex: function(e, t) {
							return +this.getRightValue(this.chart.data.datasets[t].data[e])
						},
						fit: function() {
							var e = this,
								t = e.options;
							t.display && t.pointLabels.display ? function(e) {
								var t, n, r, i = j.options._parseFont(e.options.pointLabels),
									a = {
										l: 0,
										r: e.width,
										t: 0,
										b: e.height - e.paddingTop
									},
									o = {};
								e.ctx.font = i.string, e._pointLabelSizes = [];
								var s = e.chart.data.labels.length;
								for (t = 0; t < s; t++) {
									r = e.getPointPosition(t, e.drawingArea + 5), n = Hn(e.ctx, i.lineHeight, e.pointLabels[t]), e._pointLabelSizes[t] = n;
									var u = e.getIndexAngle(t),
										c = j.toDegrees(u) % 360,
										l = Yn(c, r.x, n.w, 0, 180),
										f = Yn(c, r.y, n.h, 90, 270);
									l.start < a.l && (a.l = l.start, o.l = u), l.end > a.r && (a.r = l.end, o.r = u), f.start < a.t && (a.t = f.start, o.t = u), f.end > a.b && (a.b = f.end, o.b = u)
								}
								e.setReductions(e.drawingArea, a, o)
							}(e) : e.setCenterPoint(0, 0, 0, 0)
						},
						setReductions: function(e, t, n) {
							var r = this,
								i = t.l / Math.sin(n.l),
								a = Math.max(t.r - r.width, 0) / Math.sin(n.r),
								o = -t.t / Math.cos(n.t),
								s = -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
							i = Gn(i), a = Gn(a), o = Gn(o), s = Gn(s), r.drawingArea = Math.min(Math.floor(e - (i + a) / 2), Math.floor(e - (o + s) / 2)), r.setCenterPoint(i, a, o, s)
						},
						setCenterPoint: function(e, t, n, r) {
							var i = this,
								a = i.width - t - i.drawingArea,
								o = e + i.drawingArea,
								s = n + i.drawingArea,
								u = i.height - i.paddingTop - r - i.drawingArea;
							i.xCenter = Math.floor((o + a) / 2 + i.left), i.yCenter = Math.floor((s + u) / 2 + i.top + i.paddingTop)
						},
						getIndexAngle: function(e) {
							var t = this.chart,
								n = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
							return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
						},
						getDistanceFromCenterForValue: function(e) {
							var t = this;
							if (j.isNullOrUndef(e)) return NaN;
							var n = t.drawingArea / (t.max - t.min);
							return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
						},
						getPointPosition: function(e, t) {
							var n = this,
								r = n.getIndexAngle(e) - Math.PI / 2;
							return {
								x: Math.cos(r) * t + n.xCenter,
								y: Math.sin(r) * t + n.yCenter
							}
						},
						getPointPositionForValue: function(e, t) {
							return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
						},
						getBasePosition: function(e) {
							var t = this,
								n = t.min,
								r = t.max;
							return t.getPointPositionForValue(e || 0, t.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0)
						},
						_drawGrid: function() {
							var e, t, n, r = this,
								i = r.ctx,
								a = r.options,
								o = a.gridLines,
								s = a.angleLines,
								u = Nn(s.lineWidth, o.lineWidth),
								c = Nn(s.color, o.color);
							if (a.pointLabels.display && function(e) {
									var t = e.ctx,
										n = e.options,
										r = n.pointLabels,
										i = jn(n),
										a = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
										o = j.options._parseFont(r);
									t.save(), t.font = o.string, t.textBaseline = "middle";
									for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
										var u = 0 === s ? i / 2 : 0,
											c = e.getPointPosition(s, a + u + 5),
											l = Rn(r.fontColor, s, B.global.defaultFontColor);
										t.fillStyle = l;
										var f = e.getIndexAngle(s),
											d = j.toDegrees(f);
										t.textAlign = Vn(d), Qn(d, e._pointLabelSizes[s], c), zn(t, e.pointLabels[s], c, o.lineHeight)
									}
									t.restore()
								}(r), o.display && j.each(r.ticks, (function(e, n) {
									0 !== n && (t = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]), function(e, t, n, r) {
										var i, a = e.ctx,
											o = t.circular,
											s = e.chart.data.labels.length,
											u = Rn(t.color, r - 1),
											c = Rn(t.lineWidth, r - 1);
										if ((o || s) && u && c) {
											if (a.save(), a.strokeStyle = u, a.lineWidth = c, a.setLineDash && (a.setLineDash(t.borderDash || []), a.lineDashOffset = t.borderDashOffset || 0), a.beginPath(), o) a.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
											else {
												i = e.getPointPosition(0, n), a.moveTo(i.x, i.y);
												for (var l = 1; l < s; l++) i = e.getPointPosition(l, n), a.lineTo(i.x, i.y)
											}
											a.closePath(), a.stroke(), a.restore()
										}
									}(r, o, t, n))
								})), s.display && u && c) {
								for (i.save(), i.lineWidth = u, i.strokeStyle = c, i.setLineDash && (i.setLineDash(Fn([s.borderDash, o.borderDash, []])), i.lineDashOffset = Fn([s.borderDashOffset, o.borderDashOffset, 0])), e = r.chart.data.labels.length - 1; e >= 0; e--) t = r.getDistanceFromCenterForValue(a.ticks.reverse ? r.min : r.max), n = r.getPointPosition(e, t), i.beginPath(), i.moveTo(r.xCenter, r.yCenter), i.lineTo(n.x, n.y), i.stroke();
								i.restore()
							}
						},
						_drawLabels: function() {
							var e = this,
								t = e.ctx,
								n = e.options.ticks;
							if (n.display) {
								var r, i, a = e.getIndexAngle(0),
									o = j.options._parseFont(n),
									s = Nn(n.fontColor, B.global.defaultFontColor);
								t.save(), t.font = o.string, t.translate(e.xCenter, e.yCenter), t.rotate(a), t.textAlign = "center", t.textBaseline = "middle", j.each(e.ticks, (function(a, u) {
									(0 !== u || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[u]), n.showLabelBackdrop && (i = t.measureText(a).width, t.fillStyle = n.backdropColor, t.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), t.fillStyle = s, t.fillText(a, 0, -r))
								})), t.restore()
							}
						},
						_drawTitle: j.noop
					}),
					Wn = Un;
				qn._defaults = Wn;
				var Kn = j._deprecated,
					Xn = j.options.resolve,
					Jn = j.valueOrDefault,
					Zn = Number.MIN_SAFE_INTEGER || -9007199254740991,
					er = Number.MAX_SAFE_INTEGER || 9007199254740991,
					tr = {
						millisecond: {
							common: !0,
							size: 1,
							steps: 1e3
						},
						second: {
							common: !0,
							size: 1e3,
							steps: 60
						},
						minute: {
							common: !0,
							size: 6e4,
							steps: 60
						},
						hour: {
							common: !0,
							size: 36e5,
							steps: 24
						},
						day: {
							common: !0,
							size: 864e5,
							steps: 30
						},
						week: {
							common: !1,
							size: 6048e5,
							steps: 4
						},
						month: {
							common: !0,
							size: 2628e6,
							steps: 12
						},
						quarter: {
							common: !1,
							size: 7884e6,
							steps: 4
						},
						year: {
							common: !0,
							size: 3154e7
						}
					},
					nr = Object.keys(tr);

				function rr(e, t) {
					return e - t
				}

				function ir(e) {
					return j.valueOrDefault(e.time.min, e.ticks.min)
				}

				function ar(e) {
					return j.valueOrDefault(e.time.max, e.ticks.max)
				}

				function or(e, t, n, r) {
					var i = function(e, t, n) {
							for (var r, i, a, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
								if (i = e[(r = o + s >> 1) - 1] || null, a = e[r], !i) return {
									lo: null,
									hi: a
								};
								if (a[t] < n) o = r + 1;
								else {
									if (!(i[t] > n)) return {
										lo: i,
										hi: a
									};
									s = r - 1
								}
							}
							return {
								lo: a,
								hi: null
							}
						}(e, t, n),
						a = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
						o = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
						s = o[t] - a[t],
						u = s ? (n - a[t]) / s : 0,
						c = (o[r] - a[r]) * u;
					return a[r] + c
				}

				function sr(e, t) {
					var n = e._adapter,
						r = e.options.time,
						i = r.parser,
						a = i || r.format,
						o = t;
					return "function" == typeof i && (o = i(o)), j.isFinite(o) || (o = "string" == typeof a ? n.parse(o, a) : n.parse(o)), null !== o ? +o : (i || "function" != typeof a || (o = a(t), j.isFinite(o) || (o = n.parse(o))), o)
				}

				function ur(e, t) {
					if (j.isNullOrUndef(t)) return null;
					var n = e.options.time,
						r = sr(e, e.getRightValue(t));
					return null === r || n.round && (r = +e._adapter.startOf(r, n.round)), r
				}

				function cr(e, t, n, r) {
					var i, a, o, s = nr.length;
					for (i = nr.indexOf(e); i < s - 1; ++i)
						if (o = (a = tr[nr[i]]).steps ? a.steps : er, a.common && Math.ceil((n - t) / (o * a.size)) <= r) return nr[i];
					return nr[s - 1]
				}

				function lr(e, t, n) {
					var r, i, a = [],
						o = {},
						s = t.length;
					for (r = 0; r < s; ++r) o[i = t[r]] = r, a.push({
						value: i,
						major: !1
					});
					return 0 !== s && n ? function(e, t, n, r) {
						var i, a, o = e._adapter,
							s = +o.startOf(t[0].value, r),
							u = t[t.length - 1].value;
						for (i = s; i <= u; i = +o.add(i, 1, r))(a = n[i]) >= 0 && (t[a].major = !0);
						return t
					}(e, a, o, n) : a
				}
				var fr = vn.extend({
						initialize: function() {
							this.mergeTicksOptions(), vn.prototype.initialize.call(this)
						},
						update: function() {
							var e = this,
								t = e.options,
								n = t.time || (t.time = {}),
								r = e._adapter = new rn._date(t.adapters.date);
							return Kn("time scale", n.format, "time.format", "time.parser"), Kn("time scale", n.min, "time.min", "ticks.min"), Kn("time scale", n.max, "time.max", "ticks.max"), j.mergeIf(n.displayFormats, r.formats()), vn.prototype.update.apply(e, arguments)
						},
						getRightValue: function(e) {
							return e && void 0 !== e.t && (e = e.t), vn.prototype.getRightValue.call(this, e)
						},
						determineDataLimits: function() {
							var e, t, n, r, i, a, o, s = this,
								u = s.chart,
								c = s._adapter,
								l = s.options,
								f = l.time.unit || "day",
								d = er,
								h = Zn,
								p = [],
								_ = [],
								m = [],
								b = s._getLabels();
							for (e = 0, n = b.length; e < n; ++e) m.push(ur(s, b[e]));
							for (e = 0, n = (u.data.datasets || []).length; e < n; ++e)
								if (u.isDatasetVisible(e))
									if (i = u.data.datasets[e].data, j.isObject(i[0]))
										for (_[e] = [], t = 0, r = i.length; t < r; ++t) a = ur(s, i[t]), p.push(a), _[e][t] = a;
									else _[e] = m.slice(0), o || (p = p.concat(m), o = !0);
							else _[e] = [];
							m.length && (d = Math.min(d, m[0]), h = Math.max(h, m[m.length - 1])), p.length && (p = n > 1 ? function(e) {
								var t, n, r, i = {},
									a = [];
								for (t = 0, n = e.length; t < n; ++t) i[r = e[t]] || (i[r] = !0, a.push(r));
								return a
							}(p).sort(rr) : p.sort(rr), d = Math.min(d, p[0]), h = Math.max(h, p[p.length - 1])), d = ur(s, ir(l)) || d, h = ur(s, ar(l)) || h, d = d === er ? +c.startOf(Date.now(), f) : d, h = h === Zn ? +c.endOf(Date.now(), f) + 1 : h, s.min = Math.min(d, h), s.max = Math.max(d + 1, h), s._table = [], s._timestamps = {
								data: p,
								datasets: _,
								labels: m
							}
						},
						buildTicks: function() {
							var e, t, n, r = this,
								i = r.min,
								a = r.max,
								o = r.options,
								s = o.ticks,
								u = o.time,
								c = r._timestamps,
								l = [],
								f = r.getLabelCapacity(i),
								d = s.source,
								h = o.distribution;
							for (c = "data" === d || "auto" === d && "series" === h ? c.data : "labels" === d ? c.labels : function(e, t, n, r) {
									var i, a = e._adapter,
										o = e.options,
										s = o.time,
										u = s.unit || cr(s.minUnit, t, n, r),
										c = Xn([s.stepSize, s.unitStepSize, 1]),
										l = "week" === u && s.isoWeekday,
										f = t,
										d = [];
									if (l && (f = +a.startOf(f, "isoWeek", l)), f = +a.startOf(f, l ? "day" : u), a.diff(n, t, u) > 1e5 * c) throw t + " and " + n + " are too far apart with stepSize of " + c + " " + u;
									for (i = f; i < n; i = +a.add(i, c, u)) d.push(i);
									return i !== n && "ticks" !== o.bounds || d.push(i), d
								}(r, i, a, f), "ticks" === o.bounds && c.length && (i = c[0], a = c[c.length - 1]), i = ur(r, ir(o)) || i, a = ur(r, ar(o)) || a, e = 0, t = c.length; e < t; ++e)(n = c[e]) >= i && n <= a && l.push(n);
							return r.min = i, r.max = a, r._unit = u.unit || (s.autoSkip ? cr(u.minUnit, r.min, r.max, f) : function(e, t, n, r, i) {
								var a, o;
								for (a = nr.length - 1; a >= nr.indexOf(n); a--)
									if (o = nr[a], tr[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
								return nr[n ? nr.indexOf(n) : 0]
							}(r, l.length, u.minUnit, r.min, r.max)), r._majorUnit = s.major.enabled && "year" !== r._unit ? function(e) {
								for (var t = nr.indexOf(e) + 1, n = nr.length; t < n; ++t)
									if (tr[nr[t]].common) return nr[t]
							}(r._unit) : void 0, r._table = function(e, t, n, r) {
								if ("linear" === r || !e.length) return [{
									time: t,
									pos: 0
								}, {
									time: n,
									pos: 1
								}];
								var i, a, o, s, u, c = [],
									l = [t];
								for (i = 0, a = e.length; i < a; ++i)(s = e[i]) > t && s < n && l.push(s);
								for (l.push(n), i = 0, a = l.length; i < a; ++i) u = l[i + 1], o = l[i - 1], s = l[i], void 0 !== o && void 0 !== u && Math.round((u + o) / 2) === s || c.push({
									time: s,
									pos: i / (a - 1)
								});
								return c
							}(r._timestamps.data, i, a, h), r._offsets = function(e, t, n, r, i) {
								var a, o, s = 0,
									u = 0;
								return i.offset && t.length && (a = or(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - a : (or(e, "time", t[1], "pos") - a) / 2, o = or(e, "time", t[t.length - 1], "pos"), u = 1 === t.length ? o : (o - or(e, "time", t[t.length - 2], "pos")) / 2), {
									start: s,
									end: u,
									factor: 1 / (s + 1 + u)
								}
							}(r._table, l, 0, 0, o), s.reverse && l.reverse(), lr(r, l, r._majorUnit)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								r = n._adapter,
								i = n.chart.data,
								a = n.options.time,
								o = i.labels && e < i.labels.length ? i.labels[e] : "",
								s = i.datasets[t].data[e];
							return j.isObject(s) && (o = n.getRightValue(s)), a.tooltipFormat ? r.format(sr(n, o), a.tooltipFormat) : "string" == typeof o ? o : r.format(sr(n, o), a.displayFormats.datetime)
						},
						tickFormatFunction: function(e, t, n, r) {
							var i = this,
								a = i._adapter,
								o = i.options,
								s = o.time.displayFormats,
								u = s[i._unit],
								c = i._majorUnit,
								l = s[c],
								f = n[t],
								d = o.ticks,
								h = c && l && f && f.major,
								p = a.format(e, r || (h ? l : u)),
								_ = h ? d.major : d.minor,
								m = Xn([_.callback, _.userCallback, d.callback, d.userCallback]);
							return m ? m(p, t, n) : p
						},
						convertTicksToLabels: function(e) {
							var t, n, r = [];
							for (t = 0, n = e.length; t < n; ++t) r.push(this.tickFormatFunction(e[t].value, t, e));
							return r
						},
						getPixelForOffset: function(e) {
							var t = this,
								n = t._offsets,
								r = or(t._table, "time", e, "pos");
							return t.getPixelForDecimal((n.start + r) * n.factor)
						},
						getPixelForValue: function(e, t, n) {
							var r = this,
								i = null;
							if (void 0 !== t && void 0 !== n && (i = r._timestamps.datasets[n][t]), null === i && (i = ur(r, e)), null !== i) return r.getPixelForOffset(i)
						},
						getPixelForTick: function(e) {
							var t = this.getTicks();
							return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t._offsets,
								r = t.getDecimalForPixel(e) / n.factor - n.end,
								i = or(t._table, "pos", r, "time");
							return t._adapter._create(i)
						},
						_getLabelSize: function(e) {
							var t = this,
								n = t.options.ticks,
								r = t.ctx.measureText(e).width,
								i = j.toRadians(t.isHorizontal() ? n.maxRotation : n.minRotation),
								a = Math.cos(i),
								o = Math.sin(i),
								s = Jn(n.fontSize, B.global.defaultFontSize);
							return {
								w: r * a + s * o,
								h: r * o + s * a
							}
						},
						getLabelWidth: function(e) {
							return this._getLabelSize(e).w
						},
						getLabelCapacity: function(e) {
							var t = this,
								n = t.options.time,
								r = n.displayFormats,
								i = r[n.unit] || r.millisecond,
								a = t.tickFormatFunction(e, 0, lr(t, [e], t._majorUnit), i),
								o = t._getLabelSize(a),
								s = Math.floor(t.isHorizontal() ? t.width / o.w : t.height / o.h);
							return t.options.offset && s--, s > 0 ? s : 1
						}
					}),
					dr = {
						position: "bottom",
						distribution: "linear",
						bounds: "data",
						adapters: {},
						time: {
							parser: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: "millisecond",
							displayFormats: {}
						},
						ticks: {
							autoSkip: !1,
							source: "auto",
							major: {
								enabled: !1
							}
						}
					};
				fr._defaults = dr;
				var hr = {
						category: An,
						linear: On,
						logarithmic: Dn,
						radialLinear: qn,
						time: fr
					},
					pr = {
						datetime: "MMM D, YYYY, h:mm:ss a",
						millisecond: "h:mm:ss.SSS a",
						second: "h:mm:ss a",
						minute: "h:mm a",
						hour: "hA",
						day: "MMM D",
						week: "ll",
						month: "MMM YYYY",
						quarter: "[Q]Q - YYYY",
						year: "YYYY"
					};
				rn._date.override("function" == typeof e ? {
					_id: "moment",
					formats: function() {
						return pr
					},
					parse: function(t, n) {
						return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null
					},
					format: function(t, n) {
						return e(t).format(n)
					},
					add: function(t, n, r) {
						return e(t).add(n, r).valueOf()
					},
					diff: function(t, n, r) {
						return e(t).diff(e(n), r)
					},
					startOf: function(t, n, r) {
						return t = e(t), "isoWeek" === n ? t.isoWeekday(r).valueOf() : t.startOf(n).valueOf()
					},
					endOf: function(t, n) {
						return e(t).endOf(n).valueOf()
					},
					_create: function(t) {
						return e(t)
					}
				} : {}), B._set("global", {
					plugins: {
						filler: {
							propagate: !0
						}
					}
				});
				var _r = {
					dataset: function(e) {
						var t = e.fill,
							n = e.chart,
							r = n.getDatasetMeta(t),
							i = r && n.isDatasetVisible(t) && r.dataset._children || [],
							a = i.length || 0;
						return a ? function(e, t) {
							return t < a && i[t]._view || null
						} : null
					},
					boundary: function(e) {
						var t = e.boundary,
							n = t ? t.x : null,
							r = t ? t.y : null;
						return j.isArray(t) ? function(e, n) {
							return t[n]
						} : function(e) {
							return {
								x: null === n ? e.x : n,
								y: null === r ? e.y : r
							}
						}
					}
				};

				function mr(e, t, n) {
					var r, i = e._model || {},
						a = i.fill;
					if (void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a) return !1;
					if (!0 === a) return "origin";
					if (r = parseFloat(a, 10), isFinite(r) && Math.floor(r) === r) return "-" !== a[0] && "+" !== a[0] || (r = t + r), !(r === t || r < 0 || r >= n) && r;
					switch (a) {
						case "bottom":
							return "start";
						case "top":
							return "end";
						case "zero":
							return "origin";
						case "origin":
						case "start":
						case "end":
							return a;
						default:
							return !1
					}
				}

				function br(e) {
					return (e.el._scale || {}).getPointPositionForValue ? function(e) {
						var t, n, r, i, a, o = e.el._scale,
							s = o.options,
							u = o.chart.data.labels.length,
							c = e.fill,
							l = [];
						if (!u) return null;
						for (t = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, r = o.getPointPositionForValue(0, t), i = 0; i < u; ++i) a = "start" === c || "end" === c ? o.getPointPositionForValue(i, "start" === c ? t : n) : o.getBasePosition(i), s.gridLines.circular && (a.cx = r.x, a.cy = r.y, a.angle = o.getIndexAngle(i) - Math.PI / 2), l.push(a);
						return l
					}(e) : function(e) {
						var t, n = e.el._model || {},
							r = e.el._scale || {},
							i = e.fill,
							a = null;
						if (isFinite(i)) return null;
						if ("start" === i ? a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? a = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : r.getBasePixel && (a = r.getBasePixel()), null != a) {
							if (void 0 !== a.x && void 0 !== a.y) return a;
							if (j.isFinite(a)) return {
								x: (t = r.isHorizontal()) ? a : null,
								y: t ? null : a
							}
						}
						return null
					}(e)
				}

				function gr(e, t, n) {
					var r, i = e[t].fill,
						a = [t];
					if (!n) return i;
					for (; !1 !== i && -1 === a.indexOf(i);) {
						if (!isFinite(i)) return i;
						if (!(r = e[i])) return !1;
						if (r.visible) return i;
						a.push(i), i = r.fill
					}
					return !1
				}

				function vr(e) {
					var t = e.fill,
						n = "dataset";
					return !1 === t ? null : (isFinite(t) || (n = "boundary"), _r[n](e))
				}

				function yr(e) {
					return e && !e.skip
				}

				function Ar(e, t, n, r, i) {
					var a, o, s, u;
					if (r && i) {
						for (e.moveTo(t[0].x, t[0].y), a = 1; a < r; ++a) j.canvas.lineTo(e, t[a - 1], t[a]);
						if (void 0 === n[0].angle)
							for (e.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a) j.canvas.lineTo(e, n[a], n[a - 1], !0);
						else
							for (o = n[0].cx, s = n[0].cy, u = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), a = i - 1; a > 0; --a) e.arc(o, s, u, n[a].angle, n[a - 1].angle, !0)
					}
				}

				function Sr(e, t, n, r, i, a) {
					var o, s, u, c, l, f, d, h, p = t.length,
						_ = r.spanGaps,
						m = [],
						b = [],
						g = 0,
						v = 0;
					for (e.beginPath(), o = 0, s = p; o < s; ++o) l = n(c = t[u = o % p]._view, u, r), f = yr(c), d = yr(l), a && void 0 === h && f && (s = p + (h = o + 1)), f && d ? (g = m.push(c), v = b.push(l)) : g && v && (_ ? (f && m.push(c), d && b.push(l)) : (Ar(e, m, b, g, v), g = v = 0, m = [], b = []));
					Ar(e, m, b, g, v), e.closePath(), e.fillStyle = i, e.fill()
				}
				var wr = {
						id: "filler",
						afterDatasetsUpdate: function(e, t) {
							var n, r, i, a, o = (e.data.datasets || []).length,
								s = t.propagate,
								u = [];
							for (r = 0; r < o; ++r) a = null, (i = (n = e.getDatasetMeta(r)).dataset) && i._model && i instanceof Ae.Line && (a = {
								visible: e.isDatasetVisible(r),
								fill: mr(i, r, o),
								chart: e,
								el: i
							}), n.$filler = a, u.push(a);
							for (r = 0; r < o; ++r)(a = u[r]) && (a.fill = gr(u, r, s), a.boundary = br(a), a.mapper = vr(a))
						},
						beforeDatasetsDraw: function(e) {
							var t, n, r, i, a, o, s, u = e._getSortedVisibleDatasetMetas(),
								c = e.ctx;
							for (n = u.length - 1; n >= 0; --n)(t = u[n].$filler) && t.visible && (i = (r = t.el)._view, a = r._children || [], o = t.mapper, s = i.backgroundColor || B.global.defaultColor, o && s && a.length && (j.canvas.clipArea(c, e.chartArea), Sr(c, a, o, i, s, r._loop), j.canvas.unclipArea(c)))
						}
					},
					Er = j.rtl.getRtlAdapter,
					Tr = j.noop,
					Cr = j.valueOrDefault;

				function $r(e, t) {
					return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
				}
				B._set("global", {
					legend: {
						display: !0,
						position: "top",
						align: "center",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function(e, t) {
							var n = t.datasetIndex,
								r = this.chart,
								i = r.getDatasetMeta(n);
							i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null, r.update()
						},
						onHover: null,
						onLeave: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function(e) {
								var t = e.data.datasets,
									n = e.options.legend || {},
									r = n.labels && n.labels.usePointStyle;
								return e._getSortedDatasetMetas().map((function(n) {
									var i = n.controller.getStyle(r ? 0 : void 0);
									return {
										text: t[n.index].label,
										fillStyle: i.backgroundColor,
										hidden: !e.isDatasetVisible(n.index),
										lineCap: i.borderCapStyle,
										lineDash: i.borderDash,
										lineDashOffset: i.borderDashOffset,
										lineJoin: i.borderJoinStyle,
										lineWidth: i.borderWidth,
										strokeStyle: i.borderColor,
										pointStyle: i.pointStyle,
										rotation: i.rotation,
										datasetIndex: n.index
									}
								}), this)
							}
						}
					},
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data.datasets;
						for (i.setAttribute("class", e.id + "-legend"), t = 0, n = a.length; t < n; t++)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[t].backgroundColor, a[t].label && r.appendChild(document.createTextNode(a[t].label));
						return i.outerHTML
					}
				});
				var kr = q.extend({
					initialize: function(e) {
						var t = this;
						j.extend(t, e), t.legendHitBoxes = [], t._hoveredItem = null, t.doughnutMode = !1
					},
					beforeUpdate: Tr,
					update: function(e, t, n) {
						var r = this;
						return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
					},
					afterUpdate: Tr,
					beforeSetDimensions: Tr,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: Tr,
					beforeBuildLabels: Tr,
					buildLabels: function() {
						var e = this,
							t = e.options.labels || {},
							n = j.callback(t.generateLabels, [e.chart], e) || [];
						t.filter && (n = n.filter((function(n) {
							return t.filter(n, e.chart.data)
						}))), e.options.reverse && n.reverse(), e.legendItems = n
					},
					afterBuildLabels: Tr,
					beforeFit: Tr,
					fit: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							r = t.display,
							i = e.ctx,
							a = j.options._parseFont(n),
							o = a.size,
							s = e.legendHitBoxes = [],
							u = e.minSize,
							c = e.isHorizontal();
						if (c ? (u.width = e.maxWidth, u.height = r ? 10 : 0) : (u.width = r ? 10 : 0, u.height = e.maxHeight), r) {
							if (i.font = a.string, c) {
								var l = e.lineWidths = [0],
									f = 0;
								i.textAlign = "left", i.textBaseline = "middle", j.each(e.legendItems, (function(e, t) {
									var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
									(0 === t || l[l.length - 1] + r + 2 * n.padding > u.width) && (f += o + n.padding, l[l.length - (t > 0 ? 0 : 1)] = 0), s[t] = {
										left: 0,
										top: 0,
										width: r,
										height: o
									}, l[l.length - 1] += r + n.padding
								})), u.height += f
							} else {
								var d = n.padding,
									h = e.columnWidths = [],
									p = e.columnHeights = [],
									_ = n.padding,
									m = 0,
									b = 0;
								j.each(e.legendItems, (function(e, t) {
									var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
									t > 0 && b + o + 2 * d > u.height && (_ += m + n.padding, h.push(m), p.push(b), m = 0, b = 0), m = Math.max(m, r), b += o + d, s[t] = {
										left: 0,
										top: 0,
										width: r,
										height: o
									}
								})), _ += m, h.push(m), p.push(b), u.width += _
							}
							e.width = u.width, e.height = u.height
						} else e.width = u.width = e.height = u.height = 0
					},
					afterFit: Tr,
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					draw: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							r = B.global,
							i = r.defaultColor,
							a = r.elements.line,
							o = e.height,
							s = e.columnHeights,
							u = e.width,
							c = e.lineWidths;
						if (t.display) {
							var l, f = Er(t.rtl, e.left, e.minSize.width),
								d = e.ctx,
								h = Cr(n.fontColor, r.defaultFontColor),
								p = j.options._parseFont(n),
								_ = p.size;
							d.textAlign = f.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = h, d.fillStyle = h, d.font = p.string;
							var m = $r(n, _),
								b = e.legendHitBoxes,
								g = function(e, t, r) {
									if (!(isNaN(m) || m <= 0)) {
										d.save();
										var o = Cr(r.lineWidth, a.borderWidth);
										if (d.fillStyle = Cr(r.fillStyle, i), d.lineCap = Cr(r.lineCap, a.borderCapStyle), d.lineDashOffset = Cr(r.lineDashOffset, a.borderDashOffset), d.lineJoin = Cr(r.lineJoin, a.borderJoinStyle), d.lineWidth = o, d.strokeStyle = Cr(r.strokeStyle, i), d.setLineDash && d.setLineDash(Cr(r.lineDash, a.borderDash)), n && n.usePointStyle) {
											var s = m * Math.SQRT2 / 2,
												u = f.xPlus(e, m / 2),
												c = t + _ / 2;
											j.canvas.drawPoint(d, r.pointStyle, s, u, c, r.rotation)
										} else d.fillRect(f.leftForLtr(e, m), t, m, _), 0 !== o && d.strokeRect(f.leftForLtr(e, m), t, m, _);
										d.restore()
									}
								},
								v = function(e, r) {
									switch (t.align) {
										case "start":
											return n.padding;
										case "end":
											return e - r;
										default:
											return (e - r + n.padding) / 2
									}
								},
								y = e.isHorizontal();
							l = y ? {
								x: e.left + v(u, c[0]),
								y: e.top + n.padding,
								line: 0
							} : {
								x: e.left + n.padding,
								y: e.top + v(o, s[0]),
								line: 0
							}, j.rtl.overrideTextDirection(e.ctx, t.textDirection);
							var A = _ + n.padding;
							j.each(e.legendItems, (function(t, r) {
								var i = d.measureText(t.text).width,
									a = m + _ / 2 + i,
									h = l.x,
									p = l.y;
								f.setWidth(e.minSize.width), y ? r > 0 && h + a + n.padding > e.left + e.minSize.width && (p = l.y += A, l.line++, h = l.x = e.left + v(u, c[l.line])) : r > 0 && p + A > e.top + e.minSize.height && (h = l.x = h + e.columnWidths[l.line] + n.padding, l.line++, p = l.y = e.top + v(o, s[l.line]));
								var S = f.x(h);
								g(S, p, t), b[r].left = f.leftForLtr(S, b[r].width), b[r].top = p,
									function(e, t, n, r) {
										var i = _ / 2,
											a = f.xPlus(e, m + i),
											o = t + i;
										d.fillText(n.text, a, o), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(a, o), d.lineTo(f.xPlus(a, r), o), d.stroke())
									}(S, p, t, i), y ? l.x += a + n.padding : l.y += A
							})), j.rtl.restoreTextDirection(e.ctx, t.textDirection)
						}
					},
					_getLegendItemAt: function(e, t) {
						var n, r, i, a = this;
						if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom)
							for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
								if (e >= (r = i[n]).left && e <= r.left + r.width && t >= r.top && t <= r.top + r.height) return a.legendItems[n];
						return null
					},
					handleEvent: function(e) {
						var t, n = this,
							r = n.options,
							i = "mouseup" === e.type ? "click" : e.type;
						if ("mousemove" === i) {
							if (!r.onHover && !r.onLeave) return
						} else {
							if ("click" !== i) return;
							if (!r.onClick) return
						}
						t = n._getLegendItemAt(e.x, e.y), "click" === i ? t && r.onClick && r.onClick.call(n, e.native, t) : (r.onLeave && t !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), r.onHover && t && r.onHover.call(n, e.native, t))
					}
				});

				function Or(e, t) {
					var n = new kr({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					ht.configure(e, n, t), ht.addBox(e, n), e.legend = n
				}
				var xr = {
						id: "legend",
						_element: kr,
						beforeInit: function(e) {
							var t = e.options.legend;
							t && Or(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.legend,
								n = e.legend;
							t ? (j.mergeIf(t, B.global.legend), n ? (ht.configure(e, n, t), n.options = t) : Or(e, t)) : n && (ht.removeBox(e, n), delete e.legend)
						},
						afterEvent: function(e, t) {
							var n = e.legend;
							n && n.handleEvent(t)
						}
					},
					Pr = j.noop;
				B._set("global", {
					title: {
						display: !1,
						fontStyle: "bold",
						fullWidth: !0,
						padding: 10,
						position: "top",
						text: "",
						weight: 2e3
					}
				});
				var Mr = q.extend({
					initialize: function(e) {
						j.extend(this, e), this.legendHitBoxes = []
					},
					beforeUpdate: Pr,
					update: function(e, t, n) {
						var r = this;
						return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
					},
					afterUpdate: Pr,
					beforeSetDimensions: Pr,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: Pr,
					beforeBuildLabels: Pr,
					buildLabels: Pr,
					afterBuildLabels: Pr,
					beforeFit: Pr,
					fit: function() {
						var e, t = this,
							n = t.options,
							r = t.minSize = {},
							i = t.isHorizontal();
						n.display ? (e = (j.isArray(n.text) ? n.text.length : 1) * j.options._parseFont(n).lineHeight + 2 * n.padding, t.width = r.width = i ? t.maxWidth : e, t.height = r.height = i ? e : t.maxHeight) : t.width = r.width = t.height = r.height = 0
					},
					afterFit: Pr,
					isHorizontal: function() {
						var e = this.options.position;
						return "top" === e || "bottom" === e
					},
					draw: function() {
						var e = this,
							t = e.ctx,
							n = e.options;
						if (n.display) {
							var r, i, a, o = j.options._parseFont(n),
								s = o.lineHeight,
								u = s / 2 + n.padding,
								c = 0,
								l = e.top,
								f = e.left,
								d = e.bottom,
								h = e.right;
							t.fillStyle = j.valueOrDefault(n.fontColor, B.global.defaultFontColor), t.font = o.string, e.isHorizontal() ? (i = f + (h - f) / 2, a = l + u, r = h - f) : (i = "left" === n.position ? f + u : h - u, a = l + (d - l) / 2, r = d - l, c = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(i, a), t.rotate(c), t.textAlign = "center", t.textBaseline = "middle";
							var p = n.text;
							if (j.isArray(p))
								for (var _ = 0, m = 0; m < p.length; ++m) t.fillText(p[m], 0, _, r), _ += s;
							else t.fillText(p, 0, 0, r);
							t.restore()
						}
					}
				});

				function Ir(e, t) {
					var n = new Mr({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					ht.configure(e, n, t), ht.addBox(e, n), e.titleBlock = n
				}
				var Lr = {},
					Dr = wr,
					Br = xr,
					Nr = {
						id: "title",
						_element: Mr,
						beforeInit: function(e) {
							var t = e.options.title;
							t && Ir(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.title,
								n = e.titleBlock;
							t ? (j.mergeIf(t, B.global.title), n ? (ht.configure(e, n, t), n.options = t) : Ir(e, t)) : n && (ht.removeBox(e, n), delete e.titleBlock)
						}
					};
				for (var Rr in Lr.filler = Dr, Lr.legend = Br, Lr.title = Nr, en.helpers = j,
						function() {
							function e(e, t, n) {
								var r;
								return "string" == typeof e ? (r = parseInt(e, 10), -1 !== e.indexOf("%") && (r = r / 100 * t.parentNode[n])) : r = e, r
							}

							function t(e) {
								return null != e && "none" !== e
							}

							function n(n, r, i) {
								var a = document.defaultView,
									o = j._getParentNode(n),
									s = a.getComputedStyle(n)[r],
									u = a.getComputedStyle(o)[r],
									c = t(s),
									l = t(u),
									f = Number.POSITIVE_INFINITY;
								return c || l ? Math.min(c ? e(s, n, i) : f, l ? e(u, o, i) : f) : "none"
							}
							j.where = function(e, t) {
								if (j.isArray(e) && Array.prototype.filter) return e.filter(t);
								var n = [];
								return j.each(e, (function(e) {
									t(e) && n.push(e)
								})), n
							}, j.findIndex = Array.prototype.findIndex ? function(e, t, n) {
								return e.findIndex(t, n)
							} : function(e, t, n) {
								n = void 0 === n ? e : n;
								for (var r = 0, i = e.length; r < i; ++r)
									if (t.call(n, e[r], r, e)) return r;
								return -1
							}, j.findNextWhere = function(e, t, n) {
								j.isNullOrUndef(n) && (n = -1);
								for (var r = n + 1; r < e.length; r++) {
									var i = e[r];
									if (t(i)) return i
								}
							}, j.findPreviousWhere = function(e, t, n) {
								j.isNullOrUndef(n) && (n = e.length);
								for (var r = n - 1; r >= 0; r--) {
									var i = e[r];
									if (t(i)) return i
								}
							}, j.isNumber = function(e) {
								return !isNaN(parseFloat(e)) && isFinite(e)
							}, j.almostEquals = function(e, t, n) {
								return Math.abs(e - t) < n
							}, j.almostWhole = function(e, t) {
								var n = Math.round(e);
								return n - t <= e && n + t >= e
							}, j.max = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.max(e, t)
								}), Number.NEGATIVE_INFINITY)
							}, j.min = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.min(e, t)
								}), Number.POSITIVE_INFINITY)
							}, j.sign = Math.sign ? function(e) {
								return Math.sign(e)
							} : function(e) {
								return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
							}, j.toRadians = function(e) {
								return e * (Math.PI / 180)
							}, j.toDegrees = function(e) {
								return e * (180 / Math.PI)
							}, j._decimalPlaces = function(e) {
								if (j.isFinite(e)) {
									for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++;
									return n
								}
							}, j.getAngleFromPoint = function(e, t) {
								var n = t.x - e.x,
									r = t.y - e.y,
									i = Math.sqrt(n * n + r * r),
									a = Math.atan2(r, n);
								return a < -.5 * Math.PI && (a += 2 * Math.PI), {
									angle: a,
									distance: i
								}
							}, j.distanceBetweenPoints = function(e, t) {
								return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
							}, j.aliasPixel = function(e) {
								return e % 2 == 0 ? 0 : .5
							}, j._alignPixel = function(e, t, n) {
								var r = e.currentDevicePixelRatio,
									i = n / 2;
								return Math.round((t - i) * r) / r + i
							}, j.splineCurve = function(e, t, n, r) {
								var i = e.skip ? t : e,
									a = t,
									o = n.skip ? t : n,
									s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
									u = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
									c = s / (s + u),
									l = u / (s + u),
									f = r * (c = isNaN(c) ? 0 : c),
									d = r * (l = isNaN(l) ? 0 : l);
								return {
									previous: {
										x: a.x - f * (o.x - i.x),
										y: a.y - f * (o.y - i.y)
									},
									next: {
										x: a.x + d * (o.x - i.x),
										y: a.y + d * (o.y - i.y)
									}
								}
							}, j.EPSILON = Number.EPSILON || 1e-14, j.splineCurveMonotone = function(e) {
								var t, n, r, i, a, o, s, u, c, l = (e || []).map((function(e) {
										return {
											model: e._model,
											deltaK: 0,
											mK: 0
										}
									})),
									f = l.length;
								for (t = 0; t < f; ++t)
									if (!(r = l[t]).model.skip) {
										if (n = t > 0 ? l[t - 1] : null, (i = t < f - 1 ? l[t + 1] : null) && !i.model.skip) {
											var d = i.model.x - r.model.x;
											r.deltaK = 0 !== d ? (i.model.y - r.model.y) / d : 0
										}!n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
									} for (t = 0; t < f - 1; ++t) r = l[t], i = l[t + 1], r.model.skip || i.model.skip || (j.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (a = r.mK / r.deltaK, o = i.mK / r.deltaK, (u = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(u), r.mK = a * s * r.deltaK, i.mK = o * s * r.deltaK)));
								for (t = 0; t < f; ++t)(r = l[t]).model.skip || (n = t > 0 ? l[t - 1] : null, i = t < f - 1 ? l[t + 1] : null, n && !n.model.skip && (c = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - c, r.model.controlPointPreviousY = r.model.y - c * r.mK), i && !i.model.skip && (c = (i.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + c, r.model.controlPointNextY = r.model.y + c * r.mK))
							}, j.nextItem = function(e, t, n) {
								return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
							}, j.previousItem = function(e, t, n) {
								return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
							}, j.niceNum = function(e, t) {
								var n = Math.floor(j.log10(e)),
									r = e / Math.pow(10, n);
								return (t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
							}, j.requestAnimFrame = "undefined" == typeof window ? function(e) {
								e()
							} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
								return window.setTimeout(e, 1e3 / 60)
							}, j.getRelativePosition = function(e, t) {
								var n, r, i = e.originalEvent || e,
									a = e.target || e.srcElement,
									o = a.getBoundingClientRect(),
									s = i.touches;
								s && s.length > 0 ? (n = s[0].clientX, r = s[0].clientY) : (n = i.clientX, r = i.clientY);
								var u = parseFloat(j.getStyle(a, "padding-left")),
									c = parseFloat(j.getStyle(a, "padding-top")),
									l = parseFloat(j.getStyle(a, "padding-right")),
									f = parseFloat(j.getStyle(a, "padding-bottom")),
									d = o.right - o.left - u - l,
									h = o.bottom - o.top - c - f;
								return {
									x: n = Math.round((n - o.left - u) / d * a.width / t.currentDevicePixelRatio),
									y: r = Math.round((r - o.top - c) / h * a.height / t.currentDevicePixelRatio)
								}
							}, j.getConstraintWidth = function(e) {
								return n(e, "max-width", "clientWidth")
							}, j.getConstraintHeight = function(e) {
								return n(e, "max-height", "clientHeight")
							}, j._calculatePadding = function(e, t, n) {
								return (t = j.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10)
							}, j._getParentNode = function(e) {
								var t = e.parentNode;
								return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
							}, j.getMaximumWidth = function(e) {
								var t = j._getParentNode(e);
								if (!t) return e.clientWidth;
								var n = t.clientWidth,
									r = n - j._calculatePadding(t, "padding-left", n) - j._calculatePadding(t, "padding-right", n),
									i = j.getConstraintWidth(e);
								return isNaN(i) ? r : Math.min(r, i)
							}, j.getMaximumHeight = function(e) {
								var t = j._getParentNode(e);
								if (!t) return e.clientHeight;
								var n = t.clientHeight,
									r = n - j._calculatePadding(t, "padding-top", n) - j._calculatePadding(t, "padding-bottom", n),
									i = j.getConstraintHeight(e);
								return isNaN(i) ? r : Math.min(r, i)
							}, j.getStyle = function(e, t) {
								return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
							}, j.retinaScale = function(e, t) {
								var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
								if (1 !== n) {
									var r = e.canvas,
										i = e.height,
										a = e.width;
									r.height = i * n, r.width = a * n, e.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = i + "px", r.style.width = a + "px")
								}
							}, j.fontString = function(e, t, n) {
								return t + " " + e + "px " + n
							}, j.longestText = function(e, t, n, r) {
								var i = (r = r || {}).data = r.data || {},
									a = r.garbageCollect = r.garbageCollect || [];
								r.font !== t && (i = r.data = {}, a = r.garbageCollect = [], r.font = t), e.font = t;
								var o, s, u, c, l, f = 0,
									d = n.length;
								for (o = 0; o < d; o++)
									if (null != (c = n[o]) && !0 !== j.isArray(c)) f = j.measureText(e, i, a, f, c);
									else if (j.isArray(c))
									for (s = 0, u = c.length; s < u; s++) null == (l = c[s]) || j.isArray(l) || (f = j.measureText(e, i, a, f, l));
								var h = a.length / 2;
								if (h > n.length) {
									for (o = 0; o < h; o++) delete i[a[o]];
									a.splice(0, h)
								}
								return f
							}, j.measureText = function(e, t, n, r, i) {
								var a = t[i];
								return a || (a = t[i] = e.measureText(i).width, n.push(i)), a > r && (r = a), r
							}, j.numberOfLabelLines = function(e) {
								var t = 1;
								return j.each(e, (function(e) {
									j.isArray(e) && e.length > t && (t = e.length)
								})), t
							}, j.color = A ? function(e) {
								return e instanceof CanvasGradient && (e = B.global.defaultColor), A(e)
							} : function(e) {
								return console.error("Color.js not found!"), e
							}, j.getHoverColor = function(e) {
								return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : j.color(e).saturate(.5).darken(.1).rgbString()
							}
						}(), en._adapters = rn, en.Animation = K, en.animationService = X, en.controllers = Xe, en.DatasetController = ne, en.defaults = B, en.Element = q, en.elements = Ae, en.Interaction = it, en.layouts = ht, en.platform = Pt, en.plugins = Mt, en.Scale = vn, en.scaleService = It, en.Ticks = an, en.Tooltip = zt, en.helpers.each(hr, (function(e, t) {
							en.scaleService.registerScaleType(t, e, e._defaults)
						})), Lr) Lr.hasOwnProperty(Rr) && en.plugins.register(Lr[Rr]);
				en.platform.initialize();
				var Fr = en;
				return "undefined" != typeof window && (window.Chart = en), en.Chart = en, en.Legend = Lr.legend._element, en.Title = Lr.title._element, en.pluginService = en.plugins, en.PluginBase = en.Element.extend({}), en.canvasHelpers = en.helpers.canvas, en.layoutService = en.layouts, en.LinearScaleBase = Tn, en.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) {
					en[e] = function(t, n) {
						return new en(t, en.helpers.merge(n || {}, {
							type: e.charAt(0).toLowerCase() + e.slice(1)
						}))
					}
				})), Fr
			}(function() {
				try {
					return n("c1df")
				} catch (e) {}
			}())
		},
		"31bb": function(e, t, n) {
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
			}), t.CastStatusOverlay = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.statusLabel = new a.Label({
							cssClass: "ui-cast-status-label"
						}), n.config = n.mergeConfig(t, {
							cssClass: "ui-cast-status-overlay",
							components: [n.statusLabel],
							hidden: !0
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), t.on(t.exports.PlayerEvent.CastWaitingForDevice, (function(e) {
							r.show();
							var t = e.castPayload.deviceName;
							r.statusLabel.setText(o.i18n.getLocalizer("connectingTo", {
								castDeviceName: t
							}))
						})), t.on(t.exports.PlayerEvent.CastStarted, (function(e) {
							r.show();
							var t = e.deviceName;
							r.statusLabel.setText(o.i18n.getLocalizer("playingOn", {
								castDeviceName: t
							}))
						})), t.on(t.exports.PlayerEvent.CastStopped, (function(e) {
							r.hide()
						}))
					}, t
				}(i.Container);
			t.CastStatusOverlay = s
		},
		"31bd": function(e, t) {
			function n(e, t) {
				var r = {
					name: e.name,
					path: e.path,
					hash: e.hash,
					query: e.query,
					params: e.params,
					fullPath: e.fullPath,
					meta: e.meta
				};
				return t && (r.from = n(t)), Object.freeze(r)
			}
			t.sync = function(e, t, r) {
				var i = (r || {}).moduleName || "route";
				e.registerModule(i, {
					namespaced: !0,
					state: n(t.currentRoute),
					mutations: {
						ROUTE_CHANGED: function(t, r) {
							e.state[i] = n(r.to, r.from)
						}
					}
				});
				var a, o = !1,
					s = e.watch((function(e) {
						return e[i]
					}), (function(e) {
						var n = e.fullPath;
						n !== a && (null != a && (o = !0, t.push(e)), a = n)
					}), {
						sync: !0
					}),
					u = t.afterEach((function(t, n) {
						o ? o = !1 : (a = t.fullPath, e.commit(i + "/ROUTE_CHANGED", {
							to: t,
							from: n
						}))
					}));
				return function() {
					null != u && u(), null != s && s(), e.unregisterModule(i)
				}
			}
		},
		3280: function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("e58c"),
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("lastIndexOf", (function(e) {
				return i.apply(a(this), arguments)
			}))
		},
		"32ba": function(e, t, n) {
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
			}), t.PlaybackToggleOverlay = void 0;
			var i = n("fdec"),
				a = n("ab39"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.playbackToggleButton = new a.HugePlaybackToggleButton, n.config = n.mergeConfig(t, {
							cssClass: "ui-playbacktoggle-overlay",
							components: [n.playbackToggleButton]
						}, n.config), n
					}
					return r(t, e), t
				}(i.Container);
			t.PlaybackToggleOverlay = o
		},
		3410: function(e, t, n) {
			var r = n("23e7"),
				i = n("d039"),
				a = n("7b0b"),
				o = n("e163"),
				s = n("e177");
			r({
				target: "Object",
				stat: !0,
				forced: i((function() {
					o(1)
				})),
				sham: !s
			}, {
				getPrototypeOf: function(e) {
					return o(a(e))
				}
			})
		},
		"342f": function(e, t, n) {
			var r = n("d066");
			e.exports = r("navigator", "userAgent") || ""
		},
		"35a1": function(e, t, n) {
			var r = n("f5df"),
				i = n("3f8c"),
				a = n("b622")("iterator");
			e.exports = function(e) {
				if (null != e) return e[a] || e["@@iterator"] || i[r(e)]
			}
		},
		3729: function(e, t, n) {
			var r = n("9e69"),
				i = n("00fd"),
				a = n("29f3"),
				o = r ? r.toStringTag : void 0;
			e.exports = function(e) {
				return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e)
			}
		},
		"37aa": function(e, t, n) {
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
			}), t.ErrorMessageOverlay = void 0;
			var i = n("fdec"),
				a = n("b8bf"),
				o = n("0ae2"),
				s = n("b57d"),
				u = n("0fd0"),
				c = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.errorLabel = new a.Label({
							cssClass: "ui-errormessage-label"
						}), n.tvNoiseBackground = new o.TvNoiseCanvas, n.config = n.mergeConfig(t, {
							cssClass: "ui-errormessage-overlay",
							components: [n.tvNoiseBackground, n.errorLabel],
							hidden: !0
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n);
						var i = this.getConfig(),
							a = function(e, t) {
								var a = function(e, t) {
									if (e) {
										if ("function" == typeof e) return e(t);
										if (e[t.code]) {
											var n = e[t.code];
											return "string" == typeof n ? n : n(t)
										}
									}
								}(n.getConfig().errorMessages || i.messages, e);
								a && (t = a), r.errorLabel.setText(t), r.tvNoiseBackground.start(), r.show()
							};
						if (u.isMobileV3PlayerAPI(t)) {
							var o = function(e) {
								var t = s.ErrorUtils.defaultMobileV3ErrorMessageTranslator(e);
								a(e, t)
							};
							t.on(u.MobileV3PlayerEvent.PlayerError, o), t.on(u.MobileV3PlayerEvent.SourceError, o)
						} else t.on(t.exports.PlayerEvent.Error, (function(e) {
							var t = s.ErrorUtils.defaultWebErrorMessageTranslator(e);
							a(e, t)
						}));
						t.on(t.exports.PlayerEvent.SourceLoaded, (function(e) {
							r.isShown() && (r.tvNoiseBackground.stop(), r.hide())
						}))
					}, t.prototype.release = function() {
						e.prototype.release.call(this), this.tvNoiseBackground.stop()
					}, t
				}(i.Container);
			t.ErrorMessageOverlay = c
		},
		"37e8": function(e, t, n) {
			var r = n("83ab"),
				i = n("9bf2"),
				a = n("825a"),
				o = n("df75");
			e.exports = r ? Object.defineProperties : function(e, t) {
				a(e);
				for (var n, r = o(t), s = r.length, u = 0; s > u;) i.f(e, n = r[u++], t[n]);
				return e
			}
		},
		3835: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0");
			var r = n("06c5");

			function i(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
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
								r || null == s.return || s.return()
							} finally {
								if (i) throw a
							}
						}
						return n
					}
				}(e, t) || Object(r.a)(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		},
		"387f": function(e, t, n) {
			"use strict";
			e.exports = function(e, t, n, r, i) {
				return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: this.config,
						code: this.code
					}
				}, e
			}
		},
		3886: function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-ca", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "YYYY-MM-DD",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					}
				})
			}(n("c1df"))
		},
		3934: function(e, t, n) {
			"use strict";
			var r = n("c532");
			e.exports = r.isStandardBrowserEnv() ? function() {
				var e, t = /(msie|trident)/i.test(navigator.userAgent),
					n = document.createElement("a");

				function i(e) {
					var r = e;
					return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
					}
				}
				return e = i(window.location.href),
					function(t) {
						var n = r.isString(t) ? i(t) : t;
						return n.protocol === e.protocol && n.host === e.host
					}
			}() : function() {
				return !0
			}
		},
		"39a6": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-gb", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"39bd": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à¥§",
						2: "à¥¨",
						3: "à¥©",
						4: "à¥ª",
						5: "à¥«",
						6: "à¥¬",
						7: "à¥­",
						8: "à¥®",
						9: "à¥¯",
						0: "à¥¦"
					},
					n = {
						"à¥§": "1",
						"à¥¨": "2",
						"à¥©": "3",
						"à¥ª": "4",
						"à¥«": "5",
						"à¥¬": "6",
						"à¥­": "7",
						"à¥®": "8",
						"à¥¯": "9",
						"à¥¦": "0"
					};

				function r(e, t, n, r) {
					var i = "";
					if (t) switch (n) {
						case "s":
							i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
							break;
						case "ss":
							i = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
							break;
						case "m":
							i = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
							break;
						case "mm":
							i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
							break;
						case "h":
							i = "à¤à¤• à¤¤à¤¾à¤¸";
							break;
						case "hh":
							i = "%d à¤¤à¤¾à¤¸";
							break;
						case "d":
							i = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
							break;
						case "dd":
							i = "%d à¤¦à¤¿à¤µà¤¸";
							break;
						case "M":
							i = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
							break;
						case "MM":
							i = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
							break;
						case "y":
							i = "à¤à¤• à¤µà¤°à¥à¤·";
							break;
						case "yy":
							i = "%d à¤µà¤°à¥à¤·à¥‡"
					} else switch (n) {
						case "s":
							i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
							break;
						case "ss":
							i = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
							break;
						case "m":
							i = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
							break;
						case "mm":
							i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
							break;
						case "h":
							i = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
							break;
						case "hh":
							i = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
							break;
						case "d":
							i = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
							break;
						case "dd":
							i = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
							break;
						case "M":
							i = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
							break;
						case "MM":
							i = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
							break;
						case "y":
							i = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
							break;
						case "yy":
							i = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
					}
					return i.replace(/%d/i, e)
				}
				e.defineLocale("mr", {
					months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
					monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
					monthsParseExact: !0,
					weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
					weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
					weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
					longDateFormat: {
						LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
						LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
						LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
					},
					calendar: {
						sameDay: "[à¤†à¤œ] LT",
						nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à¤•à¤¾à¤²] LT",
						lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sà¤®à¤§à¥à¤¯à¥‡",
						past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
						s: r,
						ss: r,
						m: r,
						mm: r,
						h: r,
						hh: r,
						d: r,
						dd: r,
						M: r,
						MM: r,
						y: r,
						yy: r
					},
					preparse: function(e) {
						return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à¤ªà¤¹à¤¾à¤Ÿà¥‡|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€|à¤°à¤¾à¤¤à¥à¤°à¥€/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤ªà¤¹à¤¾à¤Ÿà¥‡" === t || "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t || "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t || "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e >= 12 ? e : e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e >= 0 && e < 6 ? "à¤ªà¤¹à¤¾à¤Ÿà¥‡" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3a39": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à¥§",
						2: "à¥¨",
						3: "à¥©",
						4: "à¥ª",
						5: "à¥«",
						6: "à¥¬",
						7: "à¥­",
						8: "à¥®",
						9: "à¥¯",
						0: "à¥¦"
					},
					n = {
						"à¥§": "1",
						"à¥¨": "2",
						"à¥©": "3",
						"à¥ª": "4",
						"à¥«": "5",
						"à¥¬": "6",
						"à¥­": "7",
						"à¥®": "8",
						"à¥¯": "9",
						"à¥¦": "0"
					};
				e.defineLocale("ne", {
					months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
					monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
					monthsParseExact: !0,
					weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
					weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
					weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
						LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
						LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
					},
					preparse: function(e) {
						return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
					},
					calendar: {
						sameDay: "[à¤†à¤œ] LT",
						nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
						nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
						lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
						lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sà¤®à¤¾",
						past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
						s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
						ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
						m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
						mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
						h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
						hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
						d: "à¤à¤• à¤¦à¤¿à¤¨",
						dd: "%d à¤¦à¤¿à¤¨",
						M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
						MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
						y: "à¤à¤• à¤¬à¤°à¥à¤·",
						yy: "%d à¤¬à¤°à¥à¤·"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3a6c": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-mo", {
					months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
					monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
					weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
					weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
					weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "YYYYå¹´MæœˆDæ—¥",
						LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
						LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
						l: "D/M/YYYY",
						ll: "YYYYå¹´MæœˆDæ—¥",
						lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
						llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
					},
					meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						var r = 100 * e + t;
						return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1130 ? "ä¸Šåˆ" : r < 1230 ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
					},
					calendar: {
						sameDay: "[ä»Šå¤©] LT",
						nextDay: "[æ˜Žå¤©] LT",
						nextWeek: "[ä¸‹]dddd LT",
						lastDay: "[æ˜¨å¤©] LT",
						lastWeek: "[ä¸Š]dddd LT",
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "æ—¥";
							case "M":
								return e + "æœˆ";
							case "w":
							case "W":
								return e + "é€±";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%så…§",
						past: "%så‰",
						s: "å¹¾ç§’",
						ss: "%d ç§’",
						m: "1 åˆ†é˜",
						mm: "%d åˆ†é˜",
						h: "1 å°æ™‚",
						hh: "%d å°æ™‚",
						d: "1 å¤©",
						dd: "%d å¤©",
						M: "1 å€‹æœˆ",
						MM: "%d å€‹æœˆ",
						y: "1 å¹´",
						yy: "%d å¹´"
					}
				})
			}(n("c1df"))
		},
		"3a7b": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").findIndex,
				a = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("findIndex", (function(e) {
				return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
			}))
		},
		"3b1b": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-ÑƒÐ¼",
					1: "-ÑƒÐ¼",
					2: "-ÑŽÐ¼",
					3: "-ÑŽÐ¼",
					4: "-ÑƒÐ¼",
					5: "-ÑƒÐ¼",
					6: "-ÑƒÐ¼",
					7: "-ÑƒÐ¼",
					8: "-ÑƒÐ¼",
					9: "-ÑƒÐ¼",
					10: "-ÑƒÐ¼",
					12: "-ÑƒÐ¼",
					13: "-ÑƒÐ¼",
					20: "-ÑƒÐ¼",
					30: "-ÑŽÐ¼",
					40: "-ÑƒÐ¼",
					50: "-ÑƒÐ¼",
					60: "-ÑƒÐ¼",
					70: "-ÑƒÐ¼",
					80: "-ÑƒÐ¼",
					90: "-ÑƒÐ¼",
					100: "-ÑƒÐ¼"
				};
				e.defineLocale("tg", {
					months: {
						format: "ÑÐ½Ð²Ð°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€Ð°Ð»Ð¸_Ð¼Ð°Ñ€Ñ‚Ð¸_Ð°Ð¿Ñ€ÐµÐ»Ð¸_Ð¼Ð°Ð¹Ð¸_Ð¸ÑŽÐ½Ð¸_Ð¸ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚Ð¸_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ð¸_Ð¾ÐºÑ‚ÑÐ±Ñ€Ð¸_Ð½Ð¾ÑÐ±Ñ€Ð¸_Ð´ÐµÐºÐ°Ð±Ñ€Ð¸".split("_"),
						standalone: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_")
					},
					monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
					weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
					weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
					weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
						nextDay: "[Ð¤Ð°Ñ€Ð´Ð¾ ÑÐ¾Ð°Ñ‚Ð¸] LT",
						lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
						nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
						lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
						past: "%s Ð¿ÐµÑˆ",
						s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
						m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
						mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
						h: "ÑÐº ÑÐ¾Ð°Ñ‚",
						hh: "%d ÑÐ¾Ð°Ñ‚",
						d: "ÑÐº Ñ€Ó¯Ð·",
						dd: "%d Ñ€Ó¯Ð·",
						M: "ÑÐº Ð¼Ð¾Ò³",
						MM: "%d Ð¼Ð¾Ò³",
						y: "ÑÐº ÑÐ¾Ð»",
						yy: "%d ÑÐ¾Ð»"
					},
					meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
					ordinal: function(e) {
						return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("c1df"))
		},
		"3bbe": function(e, t, n) {
			var r = n("861d");
			e.exports = function(e) {
				if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
				return e
			}
		},
		"3c0d": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
					n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
					r = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
					i = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

				function a(e) {
					return e > 1 && e < 5 && 1 != ~~(e / 10)
				}

				function o(e, t, n, r) {
					var i = e + " ";
					switch (n) {
						case "s":
							return t || r ? "pÃ¡r sekund" : "pÃ¡r sekundami";
						case "ss":
							return t || r ? i + (a(e) ? "sekundy" : "sekund") : i + "sekundami";
						case "m":
							return t ? "minuta" : r ? "minutu" : "minutou";
						case "mm":
							return t || r ? i + (a(e) ? "minuty" : "minut") : i + "minutami";
						case "h":
							return t ? "hodina" : r ? "hodinu" : "hodinou";
						case "hh":
							return t || r ? i + (a(e) ? "hodiny" : "hodin") : i + "hodinami";
						case "d":
							return t || r ? "den" : "dnem";
						case "dd":
							return t || r ? i + (a(e) ? "dny" : "dnÃ­") : i + "dny";
						case "M":
							return t || r ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
						case "MM":
							return t || r ? i + (a(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : i + "mÄ›sÃ­ci";
						case "y":
							return t || r ? "rok" : "rokem";
						case "yy":
							return t || r ? i + (a(e) ? "roky" : "let") : i + "lety"
					}
				}
				e.defineLocale("cs", {
					months: t,
					monthsShort: n,
					monthsRegex: i,
					monthsShortRegex: i,
					monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
					monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
					monthsParse: r,
					longMonthsParse: r,
					shortMonthsParse: r,
					weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
					weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
					weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd D. MMMM YYYY H:mm",
						l: "D. M. YYYY"
					},
					calendar: {
						sameDay: "[dnes v] LT",
						nextDay: "[zÃ­tra v] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v nedÄ›li v] LT";
								case 1:
								case 2:
									return "[v] dddd [v] LT";
								case 3:
									return "[ve stÅ™edu v] LT";
								case 4:
									return "[ve Ätvrtek v] LT";
								case 5:
									return "[v pÃ¡tek v] LT";
								case 6:
									return "[v sobotu v] LT"
							}
						},
						lastDay: "[vÄera v] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[minulou nedÄ›li v] LT";
								case 1:
								case 2:
									return "[minulÃ©] dddd [v] LT";
								case 3:
									return "[minulou stÅ™edu v] LT";
								case 4:
								case 5:
									return "[minulÃ½] dddd [v] LT";
								case 6:
									return "[minulou sobotu v] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "pÅ™ed %s",
						s: o,
						ss: o,
						m: o,
						mm: o,
						h: o,
						hh: o,
						d: o,
						dd: o,
						M: o,
						MM: o,
						y: o,
						yy: o
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("c1df"))
		},
		"3c4e": function(e, t, n) {
			"use strict";
			var r = function(e) {
				return function(e) {
					return !!e && "object" == typeof e
				}(e) && ! function(e) {
					var t = Object.prototype.toString.call(e);
					return "[object RegExp]" === t || "[object Date]" === t || function(e) {
						return e.$$typeof === i
					}(e)
				}(e)
			};
			var i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

			function a(e, t) {
				return !1 !== t.clone && t.isMergeableObject(e) ? l(function(e) {
					return Array.isArray(e) ? [] : {}
				}(e), e, t) : e
			}

			function o(e, t, n) {
				return e.concat(t).map((function(e) {
					return a(e, n)
				}))
			}

			function s(e) {
				return Object.keys(e).concat(function(e) {
					return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
						return e.propertyIsEnumerable(t)
					})) : []
				}(e))
			}

			function u(e, t) {
				try {
					return t in e
				} catch (e) {
					return !1
				}
			}

			function c(e, t, n) {
				var r = {};
				return n.isMergeableObject(e) && s(e).forEach((function(t) {
					r[t] = a(e[t], n)
				})), s(t).forEach((function(i) {
					(function(e, t) {
						return u(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
					})(e, i) || (u(e, i) && n.isMergeableObject(t[i]) ? r[i] = function(e, t) {
						if (!t.customMerge) return l;
						var n = t.customMerge(e);
						return "function" == typeof n ? n : l
					}(i, n)(e[i], t[i], n) : r[i] = a(t[i], n))
				})), r
			}

			function l(e, t, n) {
				(n = n || {}).arrayMerge = n.arrayMerge || o, n.isMergeableObject = n.isMergeableObject || r, n.cloneUnlessOtherwiseSpecified = a;
				var i = Array.isArray(t);
				return i === Array.isArray(e) ? i ? n.arrayMerge(e, t, n) : c(e, t, n) : a(t, n)
			}
			l.all = function(e, t) {
				if (!Array.isArray(e)) throw new Error("first argument should be an array");
				return e.reduce((function(e, n) {
					return l(e, n, t)
				}), {})
			};
			var f = l;
			e.exports = f
		},
		"3c5d": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("50c4"),
				a = n("182d"),
				o = n("7b0b"),
				s = n("d039"),
				u = r.aTypedArray;
			(0, r.exportTypedArrayMethod)("set", (function(e) {
				u(this);
				var t = a(arguments.length > 1 ? arguments[1] : void 0, 1),
					n = this.length,
					r = o(e),
					s = i(r.length),
					c = 0;
				if (s + t > n) throw RangeError("Wrong length");
				for (; c < s;) this[t + c] = r[c++]
			}), s((function() {
				new Int8Array(1).set({})
			})))
		},
		"3ca3": function(e, t, n) {
			"use strict";
			var r = n("6547").charAt,
				i = n("69f3"),
				a = n("7dd0"),
				o = "String Iterator",
				s = i.set,
				u = i.getterFor(o);
			a(String, "String", (function(e) {
				s(this, {
					type: o,
					string: String(e),
					index: 0
				})
			}), (function() {
				var e, t = u(this),
					n = t.string,
					i = t.index;
				return i >= n.length ? {
					value: void 0,
					done: !0
				} : (e = r(n, i), t.index += e.length, {
					value: e,
					done: !1
				})
			}))
		},
		"3d3d": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.TimelineMarkersHandler = void 0;
			var r = n("571d"),
				i = n("4344"),
				a = n("c6d3"),
				o = function() {
					function e(e, t, n) {
						this.config = e, this.getSeekBarWidth = t, this.markersContainer = n, this.timelineMarkers = []
					}
					return e.prototype.initialize = function(e, t) {
						this.player = e, this.uimanager = t, this.configureMarkers()
					}, e.prototype.configureMarkers = function() {
						var e = this;
						this.player.on(this.player.exports.PlayerEvent.SourceUnloaded, (function() {
							return e.clearMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.AdBreakStarted, (function() {
							return e.clearMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.AdBreakFinished, (function() {
							return e.updateMarkers()
						})), this.player.on(this.player.exports.PlayerEvent.PlayerResized, (function() {
							return e.updateMarkersDOM()
						})), this.player.on(this.player.exports.PlayerEvent.SourceLoaded, (function() {
							e.player.isLive() && (e.player.on(e.player.exports.PlayerEvent.TimeChanged, (function() {
								return e.updateMarkers()
							})), e.configureLivePausedTimeshiftUpdater((function() {
								return e.updateMarkers()
							})))
						})), this.uimanager.getConfig().events.onUpdated.subscribe((function() {
							return e.updateMarkers()
						})), this.uimanager.onRelease.subscribe((function() {
							return e.uimanager.getConfig().events.onUpdated.unsubscribe((function() {
								return e.updateMarkers()
							}))
						})), this.updateMarkers()
					}, e.prototype.getMarkerAtPosition = function(e) {
						var t = this.config.snappingRange;
						return this.timelineMarkers.find((function(n) {
							var r = n.duration > 0 && e >= n.position - t && e <= n.position + n.duration + t,
								i = e >= n.position - t && e <= n.position + t;
							return r || i
						})) || null
					}, e.prototype.clearMarkers = function() {
						this.timelineMarkers = [], this.markersContainer.empty()
					}, e.prototype.removeMarkerFromConfig = function(e) {
						this.uimanager.getConfig().metadata.markers = this.uimanager.getConfig().metadata.markers.filter((function(t) {
							return e !== t
						}))
					}, e.prototype.filterRemovedMarkers = function() {
						var e = this;
						this.timelineMarkers = this.timelineMarkers.filter((function(t) {
							var n = e.uimanager.getConfig().metadata.markers.find((function(e) {
								return t.marker === e
							}));
							return n || e.removeMarkerFromDOM(t), n
						}))
					}, e.prototype.removeMarkerFromDOM = function(e) {
						e.element && e.element.remove()
					}, e.prototype.updateMarkers = function() {
						var e = this;
						! function(e, t) {
							var n = e.getDuration() !== 1 / 0 || e.isLive(),
								r = t.getConfig().metadata.markers.length > 0;
							return n && r
						}(this.player, this.uimanager) ? this.clearMarkers(): (this.filterRemovedMarkers(), this.uimanager.getConfig().metadata.markers.forEach((function(t) {
							var n = function(e, t) {
									var n = u(e),
										r = 100 / n * s(t, e, n),
										i = 100 / n * t.duration;
									return r < 0 && !isNaN(i) && (i += r), 100 - r < i && (i = 100 - r), {
										markerDuration: i,
										markerPosition: r
									}
								}(e.player, t),
								r = n.markerPosition,
								i = n.markerDuration;
							if (function(e, t) {
									return (t < 0 || isNaN(t)) && e < 0
								}(r, i)) e.removeMarkerFromConfig(t);
							else if (r <= 100) {
								var a = e.timelineMarkers.find((function(e) {
									return e.marker === t
								}));
								if (a) a.position = r, a.duration = i, e.updateMarkerDOM(a);
								else {
									var o = {
										marker: t,
										position: r,
										duration: i
									};
									e.timelineMarkers.push(o), e.createMarkerDOM(o)
								}
							}
						})))
					}, e.prototype.getMarkerCssProperties = function(e) {
						var t = this.getSeekBarWidth(),
							n = {
								transform: "translateX(" + t / 100 * (e.position < 0 ? 0 : e.position) + "px)"
							};
						if (e.duration > 0) {
							var r = Math.round(t / 100 * e.duration);
							n.width = r + "px"
						}
						return n
					}, e.prototype.updateMarkerDOM = function(e) {
						e.element.css(this.getMarkerCssProperties(e))
					}, e.prototype.createMarkerDOM = function(e) {
						var t = this,
							n = ["seekbar-marker"].concat(e.marker.cssClasses || []).map((function(e) {
								return t.prefixCss(e)
							})),
							i = new r.DOM("div", {
								class: n.join(" "),
								"data-marker-time": String(e.marker.time),
								"data-marker-title": String(e.marker.title)
							}).css(this.getMarkerCssProperties(e));
						if (e.marker.imageUrl) {
							var a = new r.DOM("img", {
								class: this.prefixCss("seekbar-marker-image"),
								src: e.marker.imageUrl
							}).on("error", (function() {
								a.remove()
							}));
							i.append(a)
						}
						e.element = i, this.markersContainer.append(i)
					}, e.prototype.updateMarkersDOM = function() {
						var e = this;
						this.timelineMarkers.forEach((function(t) {
							t.element ? e.updateMarkerDOM(t) : e.createMarkerDOM(t)
						}))
					}, e.prototype.configureLivePausedTimeshiftUpdater = function(e) {
						var t = this;
						this.pausedTimeshiftUpdater = new a.Timeout(1e3, e, !0), this.player.on(this.player.exports.PlayerEvent.Paused, (function() {
							t.player.isLive() && t.player.getMaxTimeShift() < 0 && t.pausedTimeshiftUpdater.start()
						})), this.player.on(this.player.exports.PlayerEvent.Play, (function() {
							return t.pausedTimeshiftUpdater.clear()
						})), this.player.on(this.player.exports.PlayerEvent.Destroy, (function() {
							return t.pausedTimeshiftUpdater.clear()
						}))
					}, e.prototype.prefixCss = function(e) {
						return this.config.cssPrefix + "-" + e
					}, e
				}();

			function s(e, t, n) {
				return t.isLive() ? n - (i.PlayerUtils.getSeekableRangeRespectingLive(t).end - e.time) : e.time
			}

			function u(e) {
				if (!e.isLive()) return e.getDuration();
				var t = i.PlayerUtils.getSeekableRangeRespectingLive(e),
					n = t.start;
				return t.end - n
			}
			t.TimelineMarkersHandler = o
		},
		"3d54": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Manager = void 0;
			const r = n("94ac"),
				i = n("7851"),
				a = n("8205"),
				o = n("072b"),
				s = n("0b64"),
				u = n("e13a"),
				c = n("c7b0")("socket.io-client:manager");
			class l extends u.StrictEventEmitter {
				constructor(e, t) {
					super(), this.nsps = {}, this.subs = [], e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new s({
						min: this.reconnectionDelay(),
						max: this.reconnectionDelayMax(),
						jitter: this.randomizationFactor()
					}), this.timeout(null == t.timeout ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
					const n = t.parser || a;
					this.encoder = new n.Encoder, this.decoder = new n.Decoder, this._autoConnect = !1 !== t.autoConnect, this._autoConnect && this.open()
				}
				reconnection(e) {
					return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
				}
				reconnectionAttempts(e) {
					return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
				}
				reconnectionDelay(e) {
					var t;
					return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
				}
				randomizationFactor(e) {
					var t;
					return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
				}
				reconnectionDelayMax(e) {
					var t;
					return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
				}
				timeout(e) {
					return arguments.length ? (this._timeout = e, this) : this._timeout
				}
				maybeReconnectOnOpen() {
					!this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
				}
				open(e) {
					if (c("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
					c("opening %s", this.uri), this.engine = r(this.uri, this.opts);
					const t = this.engine,
						n = this;
					this._readyState = "opening", this.skipReconnect = !1;
					const i = o.on(t, "open", (function() {
							n.onopen(), e && e()
						})),
						a = o.on(t, "error", t => {
							c("error"), n.cleanup(), n._readyState = "closed", this.emitReserved("error", t), e ? e(t) : n.maybeReconnectOnOpen()
						});
					if (!1 !== this._timeout) {
						const e = this._timeout;
						c("connect attempt will timeout after %d", e), 0 === e && i();
						const n = setTimeout(() => {
							c("connect attempt timed out after %d", e), i(), t.close(), t.emit("error", new Error("timeout"))
						}, e);
						this.opts.autoUnref && n.unref(), this.subs.push((function() {
							clearTimeout(n)
						}))
					}
					return this.subs.push(i), this.subs.push(a), this
				}
				connect(e) {
					return this.open(e)
				}
				onopen() {
					c("open"), this.cleanup(), this._readyState = "open", this.emitReserved("open");
					const e = this.engine;
					this.subs.push(o.on(e, "ping", this.onping.bind(this)), o.on(e, "data", this.ondata.bind(this)), o.on(e, "error", this.onerror.bind(this)), o.on(e, "close", this.onclose.bind(this)), o.on(this.decoder, "decoded", this.ondecoded.bind(this)))
				}
				onping() {
					this.emitReserved("ping")
				}
				ondata(e) {
					this.decoder.add(e)
				}
				ondecoded(e) {
					this.emitReserved("packet", e)
				}
				onerror(e) {
					c("error", e), this.emitReserved("error", e)
				}
				socket(e, t) {
					let n = this.nsps[e];
					return n || (n = new i.Socket(this, e, t), this.nsps[e] = n), n
				}
				_destroy(e) {
					const t = Object.keys(this.nsps);
					for (const e of t) {
						if (this.nsps[e].active) return void c("socket %s is still active, skipping close", e)
					}
					this._close()
				}
				_packet(e) {
					c("writing packet %j", e);
					const t = this.encoder.encode(e);
					for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
				}
				cleanup() {
					c("cleanup"), this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
				}
				_close() {
					c("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
				}
				disconnect() {
					return this._close()
				}
				onclose(e) {
					c("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
				}
				reconnect() {
					if (this._reconnecting || this.skipReconnect) return this;
					const e = this;
					if (this.backoff.attempts >= this._reconnectionAttempts) c("reconnect failed"), this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
					else {
						const t = this.backoff.duration();
						c("will wait %dms before reconnect attempt", t), this._reconnecting = !0;
						const n = setTimeout(() => {
							e.skipReconnect || (c("attempting reconnect"), this.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(t => {
								t ? (c("reconnect attempt error"), e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", t)) : (c("reconnect success"), e.onreconnect())
							}))
						}, t);
						this.opts.autoUnref && n.unref(), this.subs.push((function() {
							clearTimeout(n)
						}))
					}
				}
				onreconnect() {
					const e = this.backoff.attempts;
					this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
				}
			}
			t.Manager = l
		},
		"3d5f": function(e, t, n) {
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
			}), t.PlaybackSpeedSelectBox = void 0;
			var i = n("a92a"),
				a = n("e1ee"),
				o = function(e) {
					function t(t) {
						void 0 === t && (t = {});
						var n = e.call(this, t) || this;
						return n.defaultPlaybackSpeeds = [.25, .5, 1, 1.5, 2], n.config = n.mergeConfig(t, {
							cssClasses: ["ui-playbackspeedselectbox"]
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						var r = this;
						e.prototype.configure.call(this, t, n), this.addDefaultItems(), this.onItemSelected.subscribe((function(e, n) {
							t.setPlaybackSpeed(parseFloat(n)), r.selectItem(n)
						}));
						var i = function() {
							var e = t.getPlaybackSpeed();
							r.setSpeed(e)
						};
						t.on(t.exports.PlayerEvent.PlaybackSpeedChanged, i), n.getConfig().events.onUpdated.subscribe(i)
					}, t.prototype.setSpeed = function(e) {
						this.selectItem(String(e)) || (this.clearItems(), this.addDefaultItems([e]), this.selectItem(String(e)))
					}, t.prototype.addDefaultItems = function(e) {
						var t = this;
						void 0 === e && (e = []), this.defaultPlaybackSpeeds.concat(e).sort().forEach((function(e) {
							1 !== e ? t.addItem(String(e), e + "x") : t.addItem(String(e), a.i18n.getLocalizer("normal"))
						}))
					}, t.prototype.clearItems = function() {
						this.items = [], this.selectedItem = null
					}, t
				}(i.SelectBox);
			t.PlaybackSpeedSelectBox = o
		},
		"3de5": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à¯§",
						2: "à¯¨",
						3: "à¯©",
						4: "à¯ª",
						5: "à¯«",
						6: "à¯¬",
						7: "à¯­",
						8: "à¯®",
						9: "à¯¯",
						0: "à¯¦"
					},
					n = {
						"à¯§": "1",
						"à¯¨": "2",
						"à¯©": "3",
						"à¯ª": "4",
						"à¯«": "5",
						"à¯¬": "6",
						"à¯­": "7",
						"à¯®": "8",
						"à¯¯": "9",
						"à¯¦": "0"
					};
				e.defineLocale("ta", {
					months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
					monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
					weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
					weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
					weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, HH:mm",
						LLLL: "dddd, D MMMM YYYY, HH:mm"
					},
					calendar: {
						sameDay: "[à®‡à®©à¯à®±à¯] LT",
						nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
						lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à®‡à®²à¯",
						past: "%s à®®à¯à®©à¯",
						s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
						ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
						m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
						mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
						h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
						hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
						d: "à®’à®°à¯ à®¨à®¾à®³à¯",
						dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
						M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
						MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
						y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
						yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
					},
					dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
					ordinal: function(e) {
						return e + "à®µà®¤à¯"
					},
					preparse: function(e) {
						return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
					meridiem: function(e, t, n) {
						return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
					},
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t || "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3e92": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "à³§",
						2: "à³¨",
						3: "à³©",
						4: "à³ª",
						5: "à³«",
						6: "à³¬",
						7: "à³­",
						8: "à³®",
						9: "à³¯",
						0: "à³¦"
					},
					n = {
						"à³§": "1",
						"à³¨": "2",
						"à³©": "3",
						"à³ª": "4",
						"à³«": "5",
						"à³¬": "6",
						"à³­": "7",
						"à³®": "8",
						"à³¯": "9",
						"à³¦": "0"
					};
				e.defineLocale("kn", {
					months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
					monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
					monthsParseExact: !0,
					weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
					weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
					weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm",
						LLLL: "dddd, D MMMM YYYY, A h:mm"
					},
					calendar: {
						sameDay: "[à²‡à²‚à²¦à³] LT",
						nextDay: "[à²¨à²¾à²³à³†] LT",
						nextWeek: "dddd, LT",
						lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
						lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s à²¨à²‚à²¤à²°",
						past: "%s à²¹à²¿à²‚à²¦à³†",
						s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
						ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
						m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
						mm: "%d à²¨à²¿à²®à²¿à²·",
						h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
						hh: "%d à²—à²‚à²Ÿà³†",
						d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
						dd: "%d à²¦à²¿à²¨",
						M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
						MM: "%d à²¤à²¿à²‚à²—à²³à³",
						y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
						yy: "%d à²µà²°à³à²·"
					},
					preparse: function(e) {
						return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
					ordinal: function(e) {
						return e + "à²¨à³†à³•"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("c1df"))
		},
		"3f8c": function(e, t) {
			e.exports = {}
		},
		"3fcc": function(e, t, n) {
			"use strict";
			var r = n("ebb5"),
				i = n("b727").map,
				a = n("4840"),
				o = r.aTypedArray,
				s = r.aTypedArrayConstructor;
			(0, r.exportTypedArrayMethod)("map", (function(e) {
				return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
					return new(s(a(e, e.constructor)))(t)
				}))
			}))
		},
		"408a": function(e, t, n) {
			var r = n("c6b6");
			e.exports = function(e) {
				if ("number" != typeof e && "Number" != r(e)) throw TypeError("Incorrect invocation");
				return +e
			}
		},
		"408c": function(e, t, n) {
			var r = n("2b3e");
			e.exports = function() {
				return r.Date.now()
			}
		},
		4128: function(e, t, n) {
			var r;
			! function(i) {
				"use strict";
				var a, o, s, u = 9e15,
					c = 1e9,
					l = "0123456789abcdef",
					f = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
					d = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
					h = {
						precision: 20,
						rounding: 4,
						modulo: 1,
						toExpNeg: -7,
						toExpPos: 21,
						minE: -u,
						maxE: u,
						crypto: !1
					},
					p = !0,
					_ = "[DecimalError] ",
					m = _ + "Invalid argument: ",
					b = _ + "Precision limit exceeded",
					g = _ + "crypto unavailable",
					v = "[object Decimal]",
					y = Math.floor,
					A = Math.pow,
					S = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
					w = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
					E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
					T = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
					C = 1e7,
					$ = f.length - 1,
					k = d.length - 1,
					O = {
						toStringTag: v
					};

				function x(e) {
					var t, n, r, i = e.length - 1,
						a = "",
						o = e[0];
					if (i > 0) {
						for (a += o, t = 1; t < i; t++)(n = 7 - (r = e[t] + "").length) && (a += j(n)), a += r;
						(n = 7 - (r = (o = e[t]) + "").length) && (a += j(n))
					} else if (0 === o) return "0";
					for (; o % 10 == 0;) o /= 10;
					return a + o
				}

				function P(e, t, n) {
					if (e !== ~~e || e < t || e > n) throw Error(m + e)
				}

				function M(e, t, n, r) {
					var i, a, o, s;
					for (a = e[0]; a >= 10; a /= 10) --t;
					return --t < 0 ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), a = A(10, 7 - t), s = e[i] % a | 0, null == r ? t < 3 ? (0 == t ? s = s / 100 | 0 : 1 == t && (s = s / 10 | 0), o = n < 4 && 99999 == s || n > 3 && 49999 == s || 5e4 == s || 0 == s) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == A(10, t - 2) - 1 || (s == a / 2 || 0 == s) && 0 == (e[i + 1] / a / 100 | 0) : t < 4 ? (0 == t ? s = s / 1e3 | 0 : 1 == t ? s = s / 100 | 0 : 2 == t && (s = s / 10 | 0), o = (r || n < 4) && 9999 == s || !r && n > 3 && 4999 == s) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == A(10, t - 3) - 1, o
				}

				function I(e, t, n) {
					for (var r, i, a = [0], o = 0, s = e.length; o < s;) {
						for (i = a.length; i--;) a[i] *= t;
						for (a[0] += l.indexOf(e.charAt(o++)), r = 0; r < a.length; r++) a[r] > n - 1 && (void 0 === a[r + 1] && (a[r + 1] = 0), a[r + 1] += a[r] / n | 0, a[r] %= n)
					}
					return a.reverse()
				}
				O.absoluteValue = O.abs = function() {
					var e = new this.constructor(this);
					return e.s < 0 && (e.s = 1), D(e)
				}, O.ceil = function() {
					return D(new this.constructor(this), this.e + 1, 2)
				}, O.clampedTo = O.clamp = function(e, t) {
					var n = this,
						r = n.constructor;
					if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
					if (e.gt(t)) throw Error(m + t);
					return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new r(n)
				}, O.comparedTo = O.cmp = function(e) {
					var t, n, r, i, a = this,
						o = a.d,
						s = (e = new a.constructor(e)).d,
						u = a.s,
						c = e.s;
					if (!o || !s) return u && c ? u !== c ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1 : NaN;
					if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -c : 0;
					if (u !== c) return u;
					if (a.e !== e.e) return a.e > e.e ^ u < 0 ? 1 : -1;
					for (t = 0, n = (r = o.length) < (i = s.length) ? r : i; t < n; ++t)
						if (o[t] !== s[t]) return o[t] > s[t] ^ u < 0 ? 1 : -1;
					return r === i ? 0 : r > i ^ u < 0 ? 1 : -1
				}, O.cosine = O.cos = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + 7, r.rounding = 1, n = function(e, t) {
						var n, r, i;
						if (t.isZero()) return t;
						(r = t.d.length) < 32 ? i = (1 / X(4, n = Math.ceil(r / 3))).toString() : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = K(e, 1, t.times(i), new e(1));
						for (var a = n; a--;) {
							var o = t.times(t);
							t = o.times(o).minus(o).times(8).plus(1)
						}
						return e.precision -= n, t
					}(r, J(r, n)), r.precision = e, r.rounding = t, D(2 == s || 3 == s ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN)
				}, O.cubeRoot = O.cbrt = function() {
					var e, t, n, r, i, a, o, s, u, c, l = this,
						f = l.constructor;
					if (!l.isFinite() || l.isZero()) return new f(l);
					for (p = !1, (a = l.s * A(l.s * l, 1 / 3)) && Math.abs(a) != 1 / 0 ? r = new f(a.toString()) : (n = x(l.d), (a = ((e = l.e) - n.length + 1) % 3) && (n += 1 == a || -2 == a ? "0" : "00"), a = A(n, 1 / 3), e = y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? n = "5e" + e : n = (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + e, (r = new f(n)).s = l.s), o = (e = f.precision) + 3;;)
						if (c = (u = (s = r).times(s).times(s)).plus(l), r = L(c.plus(l).times(s), c.plus(u), o + 2, 1), x(s.d).slice(0, o) === (n = x(r.d)).slice(0, o)) {
							if ("9999" != (n = n.slice(o - 3, o + 1)) && (i || "4999" != n)) {
								+n && (+n.slice(1) || "5" != n.charAt(0)) || (D(r, e + 1, 1), t = !r.times(r).times(r).eq(l));
								break
							}
							if (!i && (D(s, e + 1, 0), s.times(s).times(s).eq(l))) {
								r = s;
								break
							}
							o += 4, i = 1
						} return p = !0, D(r, e, f.rounding, t)
				}, O.decimalPlaces = O.dp = function() {
					var e, t = this.d,
						n = NaN;
					if (t) {
						if (n = 7 * ((e = t.length - 1) - y(this.e / 7)), e = t[e])
							for (; e % 10 == 0; e /= 10) n--;
						n < 0 && (n = 0)
					}
					return n
				}, O.dividedBy = O.div = function(e) {
					return L(this, new this.constructor(e))
				}, O.dividedToIntegerBy = O.divToInt = function(e) {
					var t = this.constructor;
					return D(L(this, new t(e), 0, 1, 1), t.precision, t.rounding)
				}, O.equals = O.eq = function(e) {
					return 0 === this.cmp(e)
				}, O.floor = function() {
					return D(new this.constructor(this), this.e + 1, 3)
				}, O.greaterThan = O.gt = function(e) {
					return this.cmp(e) > 0
				}, O.greaterThanOrEqualTo = O.gte = function(e) {
					var t = this.cmp(e);
					return 1 == t || 0 === t
				}, O.hyperbolicCosine = O.cosh = function() {
					var e, t, n, r, i, a = this,
						o = a.constructor,
						s = new o(1);
					if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
					if (a.isZero()) return s;
					n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, (i = a.d.length) < 32 ? t = (1 / X(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), a = K(o, 1, a.times(t), new o(1), !0);
					for (var u, c = e, l = new o(8); c--;) u = a.times(a), a = s.minus(u.times(l.minus(u.times(l))));
					return D(a, o.precision = n, o.rounding = r, !0)
				}, O.hyperbolicSine = O.sinh = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					if (!i.isFinite() || i.isZero()) return new a(i);
					if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, (r = i.d.length) < 3) i = K(a, 2, i, i, !0);
					else {
						e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e, i = K(a, 2, i = i.times(1 / X(5, e)), i, !0);
						for (var o, s = new a(5), u = new a(16), c = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(u.times(o).plus(c))))
					}
					return a.precision = t, a.rounding = n, D(i, t, n, !0)
				}, O.hyperbolicTangent = O.tanh = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, L(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s)
				}, O.inverseCosine = O.acos = function() {
					var e, t = this,
						n = t.constructor,
						r = t.abs().cmp(1),
						i = n.precision,
						a = n.rounding;
					return -1 !== r ? 0 === r ? t.isNeg() ? F(n, i, a) : new n(0) : new n(NaN) : t.isZero() ? F(n, i + 4, a).times(.5) : (n.precision = i + 6, n.rounding = 1, t = t.asin(), e = F(n, i + 4, a).times(.5), n.precision = i, n.rounding = a, e.minus(t))
				}, O.inverseHyperbolicCosine = O.acosh = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, p = !1, n = n.times(n).minus(1).sqrt().plus(n), p = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n)
				}, O.inverseHyperbolicSine = O.asinh = function() {
					var e, t, n = this,
						r = n.constructor;
					return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, p = !1, n = n.times(n).plus(1).sqrt().plus(n), p = !0, r.precision = e, r.rounding = t, n.ln())
				}, O.inverseHyperbolicTangent = O.atanh = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? D(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = L(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN)
				}, O.inverseSine = O.asin = function() {
					var e, t, n, r, i = this,
						a = i.constructor;
					return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, -1 !== t ? 0 === t ? ((e = F(a, n + 4, r).times(.5)).s = i.s, e) : new a(NaN) : (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)))
				}, O.inverseTangent = O.atan = function() {
					var e, t, n, r, i, a, o, s, u, c = this,
						l = c.constructor,
						f = l.precision,
						d = l.rounding;
					if (c.isFinite()) {
						if (c.isZero()) return new l(c);
						if (c.abs().eq(1) && f + 4 <= k) return (o = F(l, f + 4, d).times(.25)).s = c.s, o
					} else {
						if (!c.s) return new l(NaN);
						if (f + 4 <= k) return (o = F(l, f + 4, d).times(.5)).s = c.s, o
					}
					for (l.precision = s = f + 10, l.rounding = 1, e = n = Math.min(28, s / 7 + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
					for (p = !1, t = Math.ceil(s / 7), r = 1, u = c.times(c), o = new l(c), i = c; - 1 !== e;)
						if (i = i.times(u), a = o.minus(i.div(r += 2)), i = i.times(u), void 0 !== (o = a.plus(i.div(r += 2))).d[t])
							for (e = t; o.d[e] === a.d[e] && e--;);
					return n && (o = o.times(2 << n - 1)), p = !0, D(o, l.precision = f, l.rounding = d, !0)
				}, O.isFinite = function() {
					return !!this.d
				}, O.isInteger = O.isInt = function() {
					return !!this.d && y(this.e / 7) > this.d.length - 2
				}, O.isNaN = function() {
					return !this.s
				}, O.isNegative = O.isNeg = function() {
					return this.s < 0
				}, O.isPositive = O.isPos = function() {
					return this.s > 0
				}, O.isZero = function() {
					return !!this.d && 0 === this.d[0]
				}, O.lessThan = O.lt = function(e) {
					return this.cmp(e) < 0
				}, O.lessThanOrEqualTo = O.lte = function(e) {
					return this.cmp(e) < 1
				}, O.logarithm = O.log = function(e) {
					var t, n, r, i, a, o, s, u, c = this,
						l = c.constructor,
						f = l.precision,
						d = l.rounding;
					if (null == e) e = new l(10), t = !0;
					else {
						if (n = (e = new l(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new l(NaN);
						t = e.eq(10)
					}
					if (n = c.d, c.s < 0 || !n || !n[0] || c.eq(1)) return new l(n && !n[0] ? -1 / 0 : 1 != c.s ? NaN : n ? 0 : 1 / 0);
					if (t)
						if (n.length > 1) a = !0;
						else {
							for (i = n[0]; i % 10 == 0;) i /= 10;
							a = 1 !== i
						} if (p = !1, o = Q(c, s = f + 5), r = t ? R(l, s + 10) : Q(e, s), M((u = L(o, r, s, 1)).d, i = f, d))
						do {
							if (o = Q(c, s += 10), r = t ? R(l, s + 10) : Q(e, s), u = L(o, r, s, 1), !a) {
								+x(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = D(u, f + 1, 0));
								break
							}
						} while (M(u.d, i += 10, d));
					return p = !0, D(u, f, d)
				}, O.minus = O.sub = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f, d, h = this,
						_ = h.constructor;
					if (e = new _(e), !h.d || !e.d) return h.s && e.s ? h.d ? e.s = -e.s : e = new _(e.d || h.s !== e.s ? h : NaN) : e = new _(NaN), e;
					if (h.s != e.s) return e.s = -e.s, h.plus(e);
					if (c = h.d, d = e.d, s = _.precision, u = _.rounding, !c[0] || !d[0]) {
						if (d[0]) e.s = -e.s;
						else {
							if (!c[0]) return new _(3 === u ? -0 : 0);
							e = new _(h)
						}
						return p ? D(e, s, u) : e
					}
					if (n = y(e.e / 7), l = y(h.e / 7), c = c.slice(), a = l - n) {
						for ((f = a < 0) ? (t = c, a = -a, o = d.length) : (t = d, n = l, o = c.length), a > (r = Math.max(Math.ceil(s / 7), o) + 2) && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
						t.reverse()
					} else {
						for ((f = (r = c.length) < (o = d.length)) && (o = r), r = 0; r < o; r++)
							if (c[r] != d[r]) {
								f = c[r] < d[r];
								break
							} a = 0
					}
					for (f && (t = c, c = d, d = t, e.s = -e.s), o = c.length, r = d.length - o; r > 0; --r) c[o++] = 0;
					for (r = d.length; r > a;) {
						if (c[--r] < d[r]) {
							for (i = r; i && 0 === c[--i];) c[i] = C - 1;
							--c[i], c[r] += C
						}
						c[r] -= d[r]
					}
					for (; 0 === c[--o];) c.pop();
					for (; 0 === c[0]; c.shift()) --n;
					return c[0] ? (e.d = c, e.e = N(c, n), p ? D(e, s, u) : e) : new _(3 === u ? -0 : 0)
				}, O.modulo = O.mod = function(e) {
					var t, n = this,
						r = n.constructor;
					return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? D(new r(n), r.precision, r.rounding) : (p = !1, 9 == r.modulo ? (t = L(n, e.abs(), 0, 3, 1)).s *= e.s : t = L(n, e, 0, r.modulo, 1), t = t.times(e), p = !0, n.minus(t))
				}, O.naturalExponential = O.exp = function() {
					return z(this)
				}, O.naturalLogarithm = O.ln = function() {
					return Q(this)
				}, O.negated = O.neg = function() {
					var e = new this.constructor(this);
					return e.s = -e.s, D(e)
				}, O.plus = O.add = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f = this,
						d = f.constructor;
					if (e = new d(e), !f.d || !e.d) return f.s && e.s ? f.d || (e = new d(e.d || f.s === e.s ? f : NaN)) : e = new d(NaN), e;
					if (f.s != e.s) return e.s = -e.s, f.minus(e);
					if (c = f.d, l = e.d, s = d.precision, u = d.rounding, !c[0] || !l[0]) return l[0] || (e = new d(f)), p ? D(e, s, u) : e;
					if (a = y(f.e / 7), r = y(e.e / 7), c = c.slice(), i = a - r) {
						for (i < 0 ? (n = c, i = -i, o = l.length) : (n = l, r = a, o = c.length), i > (o = (a = Math.ceil(s / 7)) > o ? a + 1 : o + 1) && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
						n.reverse()
					}
					for ((o = c.length) - (i = l.length) < 0 && (i = o, n = l, l = c, c = n), t = 0; i;) t = (c[--i] = c[i] + l[i] + t) / C | 0, c[i] %= C;
					for (t && (c.unshift(t), ++r), o = c.length; 0 == c[--o];) c.pop();
					return e.d = c, e.e = N(c, r), p ? D(e, s, u) : e
				}, O.precision = O.sd = function(e) {
					var t, n = this;
					if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(m + e);
					return n.d ? (t = U(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t
				}, O.round = function() {
					var e = this,
						t = e.constructor;
					return D(new t(e), e.e + 1, t.rounding)
				}, O.sine = O.sin = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + 7, r.rounding = 1, n = function(e, t) {
						var n, r = t.d.length;
						if (r < 3) return t.isZero() ? t : K(e, 2, t, t);
						n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n, t = t.times(1 / X(5, n)), t = K(e, 2, t, t);
						for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
						return t
					}(r, J(r, n)), r.precision = e, r.rounding = t, D(s > 2 ? n.neg() : n, e, t, !0)) : new r(NaN)
				}, O.squareRoot = O.sqrt = function() {
					var e, t, n, r, i, a, o = this,
						s = o.d,
						u = o.e,
						c = o.s,
						l = o.constructor;
					if (1 !== c || !s || !s[0]) return new l(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
					for (p = !1, 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((t = x(s)).length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = y((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? t = "5e" + u : t = (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + u, r = new l(t)) : r = new l(c.toString()), n = (u = l.precision) + 3;;)
						if (r = (a = r).plus(L(o, a, n + 2, 1)).times(.5), x(a.d).slice(0, n) === (t = x(r.d)).slice(0, n)) {
							if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
								+t && (+t.slice(1) || "5" != t.charAt(0)) || (D(r, u + 1, 1), e = !r.times(r).eq(o));
								break
							}
							if (!i && (D(a, u + 1, 0), a.times(a).eq(o))) {
								r = a;
								break
							}
							n += 4, i = 1
						} return p = !0, D(r, u, l.rounding, e)
				}, O.tangent = O.tan = function() {
					var e, t, n = this,
						r = n.constructor;
					return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, (n = n.sin()).s = 1, n = L(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, D(2 == s || 4 == s ? n.neg() : n, e, t, !0)) : new r(NaN)
				}, O.times = O.mul = function(e) {
					var t, n, r, i, a, o, s, u, c, l = this,
						f = l.constructor,
						d = l.d,
						h = (e = new f(e)).d;
					if (e.s *= l.s, !(d && d[0] && h && h[0])) return new f(!e.s || d && !d[0] && !h || h && !h[0] && !d ? NaN : d && h ? 0 * e.s : e.s / 0);
					for (n = y(l.e / 7) + y(e.e / 7), (u = d.length) < (c = h.length) && (a = d, d = h, h = a, o = u, u = c, c = o), a = [], r = o = u + c; r--;) a.push(0);
					for (r = c; --r >= 0;) {
						for (t = 0, i = u + r; i > r;) s = a[i] + h[r] * d[i - r - 1] + t, a[i--] = s % C | 0, t = s / C | 0;
						a[i] = (a[i] + t) % C | 0
					}
					for (; !a[--o];) a.pop();
					return t ? ++n : a.shift(), e.d = a, e.e = N(a, n), p ? D(e, f.precision, f.rounding) : e
				}, O.toBinary = function(e, t) {
					return Z(this, 2, e, t)
				}, O.toDecimalPlaces = O.toDP = function(e, t) {
					var n = this,
						r = n.constructor;
					return n = new r(n), void 0 === e ? n : (P(e, 0, c), void 0 === t ? t = r.rounding : P(t, 0, 8), D(n, e + n.e + 1, t))
				}, O.toExponential = function(e, t) {
					var n, r = this,
						i = r.constructor;
					return void 0 === e ? n = B(r, !0) : (P(e, 0, c), void 0 === t ? t = i.rounding : P(t, 0, 8), n = B(r = D(new i(r), e + 1, t), !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n
				}, O.toFixed = function(e, t) {
					var n, r, i = this,
						a = i.constructor;
					return void 0 === e ? n = B(i) : (P(e, 0, c), void 0 === t ? t = a.rounding : P(t, 0, 8), n = B(r = D(new a(i), e + i.e + 1, t), !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n
				}, O.toFraction = function(e) {
					var t, n, r, i, a, o, s, u, c, l, f, d, h = this,
						_ = h.d,
						b = h.constructor;
					if (!_) return new b(h);
					if (c = n = new b(1), r = u = new b(0), o = (a = (t = new b(r)).e = U(_) - h.e - 1) % 7, t.d[0] = A(10, o < 0 ? 7 + o : o), null == e) e = a > 0 ? t : c;
					else {
						if (!(s = new b(e)).isInt() || s.lt(c)) throw Error(m + s);
						e = s.gt(t) ? a > 0 ? t : c : s
					}
					for (p = !1, s = new b(x(_)), l = b.precision, b.precision = a = 7 * _.length * 2; f = L(s, t, 0, 1, 1), 1 != (i = n.plus(f.times(r))).cmp(e);) n = r, r = i, i = c, c = u.plus(f.times(i)), u = i, i = t, t = s.minus(f.times(i)), s = i;
					return i = L(e.minus(n), r, 0, 1, 1), u = u.plus(i.times(c)), n = n.plus(i.times(r)), u.s = c.s = h.s, d = L(c, r, a, 1).minus(h).abs().cmp(L(u, n, a, 1).minus(h).abs()) < 1 ? [c, r] : [u, n], b.precision = l, p = !0, d
				}, O.toHexadecimal = O.toHex = function(e, t) {
					return Z(this, 16, e, t)
				}, O.toNearest = function(e, t) {
					var n = this,
						r = n.constructor;
					if (n = new r(n), null == e) {
						if (!n.d) return n;
						e = new r(1), t = r.rounding
					} else {
						if (e = new r(e), void 0 === t ? t = r.rounding : P(t, 0, 8), !n.d) return e.s ? n : e;
						if (!e.d) return e.s && (e.s = n.s), e
					}
					return e.d[0] ? (p = !1, n = L(n, e, 0, t, 1).times(e), p = !0, D(n)) : (e.s = n.s, n = e), n
				}, O.toNumber = function() {
					return +this
				}, O.toOctal = function(e, t) {
					return Z(this, 8, e, t)
				}, O.toPower = O.pow = function(e) {
					var t, n, r, i, a, o, s = this,
						u = s.constructor,
						c = +(e = new u(e));
					if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(A(+s, c));
					if ((s = new u(s)).eq(1)) return s;
					if (r = u.precision, a = u.rounding, e.eq(1)) return D(s, r, a);
					if ((t = y(e.e / 7)) >= e.d.length - 1 && (n = c < 0 ? -c : c) <= 9007199254740991) return i = H(u, s, n, r), e.s < 0 ? new u(1).div(i) : D(i, r, a);
					if ((o = s.s) < 0) {
						if (t < e.d.length - 1) return new u(NaN);
						if (0 == (1 & e.d[t]) && (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = o, s
					}
					return (t = 0 != (n = A(+s, c)) && isFinite(n) ? new u(n + "").e : y(c * (Math.log("0." + x(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : (p = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), (i = z(e.times(Q(s, r + n)), r)).d && (M((i = D(i, r + 5, 1)).d, r, a) && (t = r + 10, +x((i = D(z(e.times(Q(s, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 && (i = D(i, r + 1, 0)))), i.s = o, p = !0, u.rounding = a, D(i, r, a))
				}, O.toPrecision = function(e, t) {
					var n, r = this,
						i = r.constructor;
					return void 0 === e ? n = B(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (P(e, 1, c), void 0 === t ? t = i.rounding : P(t, 0, 8), n = B(r = D(new i(r), e, t), e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n
				}, O.toSignificantDigits = O.toSD = function(e, t) {
					var n = this.constructor;
					return void 0 === e ? (e = n.precision, t = n.rounding) : (P(e, 1, c), void 0 === t ? t = n.rounding : P(t, 0, 8)), D(new n(this), e, t)
				}, O.toString = function() {
					var e = this,
						t = e.constructor,
						n = B(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
					return e.isNeg() && !e.isZero() ? "-" + n : n
				}, O.truncated = O.trunc = function() {
					return D(new this.constructor(this), this.e + 1, 1)
				}, O.valueOf = O.toJSON = function() {
					var e = this,
						t = e.constructor,
						n = B(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
					return e.isNeg() ? "-" + n : n
				};
				var L = function() {
					function e(e, t, n) {
						var r, i = 0,
							a = e.length;
						for (e = e.slice(); a--;) r = e[a] * t + i, e[a] = r % n | 0, i = r / n | 0;
						return i && e.unshift(i), e
					}

					function t(e, t, n, r) {
						var i, a;
						if (n != r) a = n > r ? 1 : -1;
						else
							for (i = a = 0; i < n; i++)
								if (e[i] != t[i]) {
									a = e[i] > t[i] ? 1 : -1;
									break
								} return a
					}

					function n(e, t, n, r) {
						for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
						for (; !e[0] && e.length > 1;) e.shift()
					}
					return function(r, i, a, s, u, c) {
						var l, f, d, h, p, _, m, b, g, v, A, S, w, E, T, $, k, O, x, P, M = r.constructor,
							I = r.s == i.s ? 1 : -1,
							L = r.d,
							B = i.d;
						if (!(L && L[0] && B && B[0])) return new M(r.s && i.s && (L ? !B || L[0] != B[0] : B) ? L && 0 == L[0] || !B ? 0 * I : I / 0 : NaN);
						for (c ? (p = 1, f = r.e - i.e) : (c = C, p = 7, f = y(r.e / p) - y(i.e / p)), x = B.length, k = L.length, v = (g = new M(I)).d = [], d = 0; B[d] == (L[d] || 0); d++);
						if (B[d] > (L[d] || 0) && f--, null == a ? (E = a = M.precision, s = M.rounding) : E = u ? a + (r.e - i.e) + 1 : a, E < 0) v.push(1), _ = !0;
						else {
							if (E = E / p + 2 | 0, d = 0, 1 == x) {
								for (h = 0, B = B[0], E++;
									(d < k || h) && E--; d++) T = h * c + (L[d] || 0), v[d] = T / B | 0, h = T % B | 0;
								_ = h || d < k
							} else {
								for ((h = c / (B[0] + 1) | 0) > 1 && (B = e(B, h, c), L = e(L, h, c), x = B.length, k = L.length), $ = x, S = (A = L.slice(0, x)).length; S < x;) A[S++] = 0;
								(P = B.slice()).unshift(0), O = B[0], B[1] >= c / 2 && ++O;
								do {
									h = 0, (l = t(B, A, x, S)) < 0 ? (w = A[0], x != S && (w = w * c + (A[1] || 0)), (h = w / O | 0) > 1 ? (h >= c && (h = c - 1), 1 == (l = t(m = e(B, h, c), A, b = m.length, S = A.length)) && (h--, n(m, x < b ? P : B, b, c))) : (0 == h && (l = h = 1), m = B.slice()), (b = m.length) < S && m.unshift(0), n(A, m, S, c), -1 == l && ((l = t(B, A, x, S = A.length)) < 1 && (h++, n(A, x < S ? P : B, S, c))), S = A.length) : 0 === l && (h++, A = [0]), v[d++] = h, l && A[0] ? A[S++] = L[$] || 0 : (A = [L[$]], S = 1)
								} while (($++ < k || void 0 !== A[0]) && E--);
								_ = void 0 !== A[0]
							}
							v[0] || v.shift()
						}
						if (1 == p) g.e = f, o = _;
						else {
							for (d = 1, h = v[0]; h >= 10; h /= 10) d++;
							g.e = d + f * p - 1, D(g, u ? a + g.e + 1 : a, s, _)
						}
						return g
					}
				}();

				function D(e, t, n, r) {
					var i, a, o, s, u, c, l, f, d, h = e.constructor;
					e: if (null != t) {
						if (!(f = e.d)) return e;
						for (i = 1, s = f[0]; s >= 10; s /= 10) i++;
						if ((a = t - i) < 0) a += 7, o = t, u = (l = f[d = 0]) / A(10, i - o - 1) % 10 | 0;
						else if ((d = Math.ceil((a + 1) / 7)) >= (s = f.length)) {
							if (!r) break e;
							for (; s++ <= d;) f.push(0);
							l = u = 0, i = 1, o = (a %= 7) - 7 + 1
						} else {
							for (l = s = f[d], i = 1; s >= 10; s /= 10) i++;
							u = (o = (a %= 7) - 7 + i) < 0 ? 0 : l / A(10, i - o - 1) % 10 | 0
						}
						if (r = r || t < 0 || void 0 !== f[d + 1] || (o < 0 ? l : l % A(10, i - o - 1)), c = n < 4 ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : u > 5 || 5 == u && (4 == n || r || 6 == n && (a > 0 ? o > 0 ? l / A(10, i - o) : 0 : f[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !f[0]) return f.length = 0, c ? (t -= e.e + 1, f[0] = A(10, (7 - t % 7) % 7), e.e = -t || 0) : f[0] = e.e = 0, e;
						if (0 == a ? (f.length = d, s = 1, d--) : (f.length = d + 1, s = A(10, 7 - a), f[d] = o > 0 ? (l / A(10, i - o) % A(10, o) | 0) * s : 0), c)
							for (;;) {
								if (0 == d) {
									for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
									for (o = f[0] += s, s = 1; o >= 10; o /= 10) s++;
									a != s && (e.e++, f[0] == C && (f[0] = 1));
									break
								}
								if (f[d] += s, f[d] != C) break;
								f[d--] = 0, s = 1
							}
						for (a = f.length; 0 === f[--a];) f.pop()
					}
					return p && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e
				}

				function B(e, t, n) {
					if (!e.isFinite()) return G(e);
					var r, i = e.e,
						a = x(e.d),
						o = a.length;
					return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + j(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + j(-i - 1) + a, n && (r = n - o) > 0 && (a += j(r))) : i >= o ? (a += j(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + j(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += j(r))), a
				}

				function N(e, t) {
					var n = e[0];
					for (t *= 7; n >= 10; n /= 10) t++;
					return t
				}

				function R(e, t, n) {
					if (t > $) throw p = !0, n && (e.precision = n), Error(b);
					return D(new e(f), t, 1, !0)
				}

				function F(e, t, n) {
					if (t > k) throw Error(b);
					return D(new e(d), t, n, !0)
				}

				function U(e) {
					var t = e.length - 1,
						n = 7 * t + 1;
					if (t = e[t]) {
						for (; t % 10 == 0; t /= 10) n--;
						for (t = e[0]; t >= 10; t /= 10) n++
					}
					return n
				}

				function j(e) {
					for (var t = ""; e--;) t += "0";
					return t
				}

				function H(e, t, n, r) {
					var i, a = new e(1),
						o = Math.ceil(r / 7 + 4);
					for (p = !1;;) {
						if (n % 2 && (ee((a = a.times(t)).d, o) && (i = !0)), 0 === (n = y(n / 2))) {
							n = a.d.length - 1, i && 0 === a.d[n] && ++a.d[n];
							break
						}
						ee((t = t.times(t)).d, o)
					}
					return p = !0, a
				}

				function Y(e) {
					return 1 & e.d[e.d.length - 1]
				}

				function V(e, t, n) {
					for (var r, i = new e(t[0]), a = 0; ++a < t.length;) {
						if (!(r = new e(t[a])).s) {
							i = r;
							break
						}
						i[n](r) && (i = r)
					}
					return i
				}

				function z(e, t) {
					var n, r, i, a, o, s, u, c = 0,
						l = 0,
						f = 0,
						d = e.constructor,
						h = d.rounding,
						_ = d.precision;
					if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
					for (null == t ? (p = !1, u = _) : u = t, s = new d(.03125); e.e > -2;) e = e.times(s), f += 5;
					for (u += r = Math.log(A(2, f)) / Math.LN10 * 2 + 5 | 0, n = a = o = new d(1), d.precision = u;;) {
						if (a = D(a.times(e), u, 1), n = n.times(++l), x((s = o.plus(L(a, n, u, 1))).d).slice(0, u) === x(o.d).slice(0, u)) {
							for (i = f; i--;) o = D(o.times(o), u, 1);
							if (null != t) return d.precision = _, o;
							if (!(c < 3 && M(o.d, u - r, h, c))) return D(o, d.precision = _, h, p = !0);
							d.precision = u += 10, n = a = s = new d(1), l = 0, c++
						}
						o = s
					}
				}

				function Q(e, t) {
					var n, r, i, a, o, s, u, c, l, f, d, h = 1,
						_ = e,
						m = _.d,
						b = _.constructor,
						g = b.rounding,
						v = b.precision;
					if (_.s < 0 || !m || !m[0] || !_.e && 1 == m[0] && 1 == m.length) return new b(m && !m[0] ? -1 / 0 : 1 != _.s ? NaN : m ? 0 : _);
					if (null == t ? (p = !1, l = v) : l = t, b.precision = l += 10, r = (n = x(m)).charAt(0), !(Math.abs(a = _.e) < 15e14)) return c = R(b, l + 2, v).times(a + ""), _ = Q(new b(r + "." + n.slice(1)), l - 10).plus(c), b.precision = v, null == t ? D(_, v, g, p = !0) : _;
					for (; r < 7 && 1 != r || 1 == r && n.charAt(1) > 3;) r = (n = x((_ = _.times(e)).d)).charAt(0), h++;
					for (a = _.e, r > 1 ? (_ = new b("0." + n), a++) : _ = new b(r + "." + n.slice(1)), f = _, u = o = _ = L(_.minus(1), _.plus(1), l, 1), d = D(_.times(_), l, 1), i = 3;;) {
						if (o = D(o.times(d), l, 1), x((c = u.plus(L(o, new b(i), l, 1))).d).slice(0, l) === x(u.d).slice(0, l)) {
							if (u = u.times(2), 0 !== a && (u = u.plus(R(b, l + 2, v).times(a + ""))), u = L(u, new b(h), l, 1), null != t) return b.precision = v, u;
							if (!M(u.d, l - 10, g, s)) return D(u, b.precision = v, g, p = !0);
							b.precision = l += 10, c = o = _ = L(f.minus(1), f.plus(1), l, 1), d = D(_.times(_), l, 1), i = s = 1
						}
						u = c, i += 2
					}
				}

				function G(e) {
					return String(e.s * e.s / 0)
				}

				function q(e, t) {
					var n, r, i;
					for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); r++);
					for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
					if (t = t.slice(r, i)) {
						if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < i) {
							for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i;) e.d.push(+t.slice(r, r += 7));
							r = 7 - (t = t.slice(r)).length
						} else r -= i;
						for (; r--;) t += "0";
						e.d.push(+t), p && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
					} else e.e = 0, e.d = [0];
					return e
				}

				function W(e, t) {
					var n, r, i, o, s, u, c, l, f;
					if (t.indexOf("_") > -1) {
						if (t = t.replace(/(\d)_(?=\d)/g, "$1"), T.test(t)) return q(e, t)
					} else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
					if (w.test(t)) n = 16, t = t.toLowerCase();
					else if (S.test(t)) n = 2;
					else {
						if (!E.test(t)) throw Error(m + t);
						n = 8
					}
					for ((o = t.search(/p/i)) > 0 ? (c = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), s = (o = t.indexOf(".")) >= 0, r = e.constructor, s && (o = (u = (t = t.replace(".", "")).length) - o, i = H(r, new r(n), o, 2 * o)), o = f = (l = I(t, n, C)).length - 1; 0 === l[o]; --o) l.pop();
					return o < 0 ? new r(0 * e.s) : (e.e = N(l, f), e.d = l, p = !1, s && (e = L(e, i, 4 * u)), c && (e = e.times(Math.abs(c) < 54 ? A(2, c) : a.pow(2, c))), p = !0, e)
				}

				function K(e, t, n, r, i) {
					var a, o, s, u, c = e.precision,
						l = Math.ceil(c / 7);
					for (p = !1, u = n.times(n), s = new e(r);;) {
						if (o = L(s.times(u), new e(t++ * t++), c, 1), s = i ? r.plus(o) : r.minus(o), r = L(o.times(u), new e(t++ * t++), c, 1), void 0 !== (o = s.plus(r)).d[l]) {
							for (a = l; o.d[a] === s.d[a] && a--;);
							if (-1 == a) break
						}
						a = s, s = r, r = o, o = a
					}
					return p = !0, o.d.length = l + 1, o
				}

				function X(e, t) {
					for (var n = e; --t;) n *= e;
					return n
				}

				function J(e, t) {
					var n, r = t.s < 0,
						i = F(e, e.precision, 1),
						a = i.times(.5);
					if ((t = t.abs()).lte(a)) return s = r ? 4 : 1, t;
					if ((n = t.divToInt(i)).isZero()) s = r ? 3 : 2;
					else {
						if ((t = t.minus(n.times(i))).lte(a)) return s = Y(n) ? r ? 2 : 3 : r ? 4 : 1, t;
						s = Y(n) ? r ? 1 : 4 : r ? 3 : 2
					}
					return t.minus(i).abs()
				}

				function Z(e, t, n, r) {
					var i, a, s, u, f, d, h, p, _, m = e.constructor,
						b = void 0 !== n;
					if (b ? (P(n, 1, c), void 0 === r ? r = m.rounding : P(r, 0, 8)) : (n = m.precision, r = m.rounding), e.isFinite()) {
						for (b ? (i = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : i = t, (s = (h = B(e)).indexOf(".")) >= 0 && (h = h.replace(".", ""), (_ = new m(1)).e = h.length - s, _.d = I(B(_), 10, i), _.e = _.d.length), a = f = (p = I(h, 10, i)).length; 0 == p[--f];) p.pop();
						if (p[0]) {
							if (s < 0 ? a-- : ((e = new m(e)).d = p, e.e = a, p = (e = L(e, _, n, r, 0, i)).d, a = e.e, d = o), s = p[n], u = i / 2, d = d || void 0 !== p[n + 1], d = r < 4 ? (void 0 !== s || d) && (0 === r || r === (e.s < 0 ? 3 : 2)) : s > u || s === u && (4 === r || d || 6 === r && 1 & p[n - 1] || r === (e.s < 0 ? 8 : 7)), p.length = n, d)
								for (; ++p[--n] > i - 1;) p[n] = 0, n || (++a, p.unshift(1));
							for (f = p.length; !p[f - 1]; --f);
							for (s = 0, h = ""; s < f; s++) h += l.charAt(p[s]);
							if (b) {
								if (f > 1)
									if (16 == t || 8 == t) {
										for (s = 16 == t ? 4 : 3, --f; f % s; f++) h += "0";
										for (f = (p = I(h, i, t)).length; !p[f - 1]; --f);
										for (s = 1, h = "1."; s < f; s++) h += l.charAt(p[s])
									} else h = h.charAt(0) + "." + h.slice(1);
								h = h + (a < 0 ? "p" : "p+") + a
							} else if (a < 0) {
								for (; ++a;) h = "0" + h;
								h = "0." + h
							} else if (++a > f)
								for (a -= f; a--;) h += "0";
							else a < f && (h = h.slice(0, a) + "." + h.slice(a))
						} else h = b ? "0p+0" : "0";
						h = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + h
					} else h = G(e);
					return e.s < 0 ? "-" + h : h
				}

				function ee(e, t) {
					if (e.length > t) return e.length = t, !0
				}

				function te(e) {
					return new this(e).abs()
				}

				function ne(e) {
					return new this(e).acos()
				}

				function re(e) {
					return new this(e).acosh()
				}

				function ie(e, t) {
					return new this(e).plus(t)
				}

				function ae(e) {
					return new this(e).asin()
				}

				function oe(e) {
					return new this(e).asinh()
				}

				function se(e) {
					return new this(e).atan()
				}

				function ue(e) {
					return new this(e).atanh()
				}

				function ce(e, t) {
					e = new this(e), t = new this(t);
					var n, r = this.precision,
						i = this.rounding,
						a = r + 4;
					return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? F(this, r, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = F(this, a, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(L(e, t, a, 1)), t = F(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(L(e, t, a, 1)) : (n = F(this, a, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n
				}

				function le(e) {
					return new this(e).cbrt()
				}

				function fe(e) {
					return D(e = new this(e), e.e + 1, 2)
				}

				function de(e, t, n) {
					return new this(e).clamp(t, n)
				}

				function he(e) {
					if (!e || "object" != typeof e) throw Error(_ + "Object expected");
					var t, n, r, i = !0 === e.defaults,
						a = ["precision", 1, c, "rounding", 0, 8, "toExpNeg", -u, 0, "toExpPos", 0, u, "maxE", 0, u, "minE", -u, 0, "modulo", 0, 9];
					for (t = 0; t < a.length; t += 3)
						if (n = a[t], i && (this[n] = h[n]), void 0 !== (r = e[n])) {
							if (!(y(r) === r && r >= a[t + 1] && r <= a[t + 2])) throw Error(m + n + ": " + r);
							this[n] = r
						} if (n = "crypto", i && (this[n] = h[n]), void 0 !== (r = e[n])) {
						if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(m + n + ": " + r);
						if (r) {
							if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(g);
							this[n] = !0
						} else this[n] = !1
					}
					return this
				}

				function pe(e) {
					return new this(e).cos()
				}

				function _e(e) {
					return new this(e).cosh()
				}

				function me(e, t) {
					return new this(e).div(t)
				}

				function be(e) {
					return new this(e).exp()
				}

				function ge(e) {
					return D(e = new this(e), e.e + 1, 3)
				}

				function ve() {
					var e, t, n = new this(0);
					for (p = !1, e = 0; e < arguments.length;)
						if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
						else {
							if (t.s) return p = !0, new this(1 / 0);
							n = t
						} return p = !0, n.sqrt()
				}

				function ye(e) {
					return e instanceof a || e && e.toStringTag === v || !1
				}

				function Ae(e) {
					return new this(e).ln()
				}

				function Se(e, t) {
					return new this(e).log(t)
				}

				function we(e) {
					return new this(e).log(2)
				}

				function Ee(e) {
					return new this(e).log(10)
				}

				function Te() {
					return V(this, arguments, "lt")
				}

				function Ce() {
					return V(this, arguments, "gt")
				}

				function $e(e, t) {
					return new this(e).mod(t)
				}

				function ke(e, t) {
					return new this(e).mul(t)
				}

				function Oe(e, t) {
					return new this(e).pow(t)
				}

				function xe(e) {
					var t, n, r, i, a = 0,
						o = new this(1),
						s = [];
					if (void 0 === e ? e = this.precision : P(e, 1, c), r = Math.ceil(e / 7), this.crypto)
						if (crypto.getRandomValues)
							for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;)(i = t[a]) >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
						else {
							if (!crypto.randomBytes) throw Error(g);
							for (t = crypto.randomBytes(r *= 4); a < r;)(i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
							a = r / 4
						}
					else
						for (; a < r;) s[a++] = 1e7 * Math.random() | 0;
					for (e %= 7, (r = s[--a]) && e && (i = A(10, 7 - e), s[a] = (r / i | 0) * i); 0 === s[a]; a--) s.pop();
					if (a < 0) n = 0, s = [0];
					else {
						for (n = -1; 0 === s[0]; n -= 7) s.shift();
						for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
						r < 7 && (n -= 7 - r)
					}
					return o.e = n, o.d = s, o
				}

				function Pe(e) {
					return D(e = new this(e), e.e + 1, this.rounding)
				}

				function Me(e) {
					return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
				}

				function Ie(e) {
					return new this(e).sin()
				}

				function Le(e) {
					return new this(e).sinh()
				}

				function De(e) {
					return new this(e).sqrt()
				}

				function Be(e, t) {
					return new this(e).sub(t)
				}

				function Ne() {
					var e = 0,
						t = arguments,
						n = new this(t[e]);
					for (p = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
					return p = !0, D(n, this.precision, this.rounding)
				}

				function Re(e) {
					return new this(e).tan()
				}

				function Fe(e) {
					return new this(e).tanh()
				}

				function Ue(e) {
					return D(e = new this(e), e.e + 1, 1)
				}(a = function e(t) {
					var n, r, i;

					function a(e) {
						var t, n, r, i = this;
						if (!(i instanceof a)) return new a(e);
						if (i.constructor = a, ye(e)) return i.s = e.s, void(p ? !e.d || e.e > a.maxE ? (i.e = NaN, i.d = null) : e.e < a.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
						if ("number" === (r = typeof e)) {
							if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
							if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
								for (t = 0, n = e; n >= 10; n /= 10) t++;
								return void(p ? t > a.maxE ? (i.e = NaN, i.d = null) : t < a.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]))
							}
							return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : q(i, e.toString())
						}
						if ("string" !== r) throw Error(m + e);
						return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === n && (e = e.slice(1)), i.s = 1), T.test(e) ? q(i, e) : W(i, e)
					}
					if (a.prototype = O, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = he, a.clone = e, a.isDecimal = ye, a.abs = te, a.acos = ne, a.acosh = re, a.add = ie, a.asin = ae, a.asinh = oe, a.atan = se, a.atanh = ue, a.atan2 = ce, a.cbrt = le, a.ceil = fe, a.clamp = de, a.cos = pe, a.cosh = _e, a.div = me, a.exp = be, a.floor = ge, a.hypot = ve, a.ln = Ae, a.log = Se, a.log10 = Ee, a.log2 = we, a.max = Te, a.min = Ce, a.mod = $e, a.mul = ke, a.pow = Oe, a.random = xe, a.round = Pe, a.sign = Me, a.sin = Ie, a.sinh = Le, a.sqrt = De, a.sub = Be, a.sum = Ne, a.tan = Re, a.tanh = Fe, a.trunc = Ue, void 0 === t && (t = {}), t && !0 !== t.defaults)
						for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) t.hasOwnProperty(r = i[n++]) || (t[r] = this[r]);
					return a.config(t), a
				}(h)).prototype.constructor = a, a.default = a.Decimal = a, f = new a(f), d = new a(d), void 0 === (r = function() {
					return a
				}.call(t, n, t, e)) || (e.exports = r)
			}()
		},
		"41ef": function(e, t, n) {
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
			}), t.SubtitleSettingsLabel = void 0;
			var i = n("fdec"),
				a = n("571d"),
				o = n("e1ee"),
				s = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.opener = t.opener, n.text = t.text, n.for = t.for, n.config = n.mergeConfig(t, {
							cssClass: "ui-label",
							components: [n.opener]
						}, n.config), n
					}
					return r(t, e), t.prototype.toDomElement = function() {
						return new a.DOM("label", {
							id: this.config.id,
							class: this.getCssClasses(),
							for: this.for
						}).append(new a.DOM("span", {}).html(o.i18n.performLocalization(this.text)), this.opener.getDomElement())
					}, t
				}(i.Container);
			t.SubtitleSettingsLabel = s
		},
		"423e": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-kw", {
					months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
					monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
					weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
					weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
					weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
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
						sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ÙÙŠ %s",
						past: "Ù…Ù†Ø° %s",
						s: "Ø«ÙˆØ§Ù†",
						ss: "%d Ø«Ø§Ù†ÙŠØ©",
						m: "Ø¯Ù‚ÙŠÙ‚Ø©",
						mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
						h: "Ø³Ø§Ø¹Ø©",
						hh: "%d Ø³Ø§Ø¹Ø§Øª",
						d: "ÙŠÙˆÙ…",
						dd: "%d Ø£ÙŠØ§Ù…",
						M: "Ø´Ù‡Ø±",
						MM: "%d Ø£Ø´Ù‡Ø±",
						y: "Ø³Ù†Ø©",
						yy: "%d Ø³Ù†ÙˆØ§Øª"
					},
					week: {
						dow: 0,
						doy: 12
					}
				})
			}(n("c1df"))
		},
		"428f": function(e, t, n) {
			var r = n("da84");
			e.exports = r
		},
		4344: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.PlayerUtils = void 0;
			var r = n("09e6"),
				i = n("8e8b");
			! function(e) {
				var t;
				(function(e) {
					e[e.Idle = 0] = "Idle", e[e.Prepared = 1] = "Prepared", e[e.Playing = 2] = "Playing", e[e.Paused = 3] = "Paused", e[e.Finished = 4] = "Finished"
				})(t = e.PlayerState || (e.PlayerState = {})), e.isTimeShiftAvailable = function(e) {
					return e.isLive() && 0 !== e.getMaxTimeShift()
				}, e.getState = function(e) {
					return e.hasEnded() ? t.Finished : e.isPlaying() ? t.Playing : e.isPaused() ? t.Paused : null != e.getSource() ? t.Prepared : t.Idle
				}, e.getCurrentTimeRelativeToSeekableRange = function(t) {
					var n = t.getCurrentTime();
					return t.isLive() ? n : n - e.getSeekableRangeStart(t, 0)
				}, e.getSeekableRangeStart = function(e, t) {
					return void 0 === t && (t = 0), e.getSeekableRange() && e.getSeekableRange().start || t
				}, e.getSeekableRangeRespectingLive = function(e) {
					if (!e.isLive()) return e.getSeekableRange();
					var t = -e.getTimeShift(),
						n = -e.getMaxTimeShift(),
						r = e.getCurrentTime();
					return {
						start: r - (n - t),
						end: r + t
					}
				};
				var n = function() {
					function t(e) {
						var t = this;
						this.timeShiftAvailabilityChangedEvent = new r.EventDispatcher, this.player = e, this.timeShiftAvailable = void 0;
						var n = function() {
							t.detect()
						};
						e.on(e.exports.PlayerEvent.SourceLoaded, n), e.on(e.exports.PlayerEvent.TimeChanged, n)
					}
					return t.prototype.detect = function() {
						if (this.player.isLive()) {
							var t = e.isTimeShiftAvailable(this.player);
							t !== this.timeShiftAvailable && (this.timeShiftAvailabilityChangedEvent.dispatch(this.player, {
								timeShiftAvailable: t
							}), this.timeShiftAvailable = t)
						}
					}, Object.defineProperty(t.prototype, "onTimeShiftAvailabilityChanged", {
						get: function() {
							return this.timeShiftAvailabilityChangedEvent.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}();
				e.TimeShiftAvailabilityDetector = n;
				var a = function() {
					function e(e, t) {
						var n = this;
						this.liveChangedEvent = new r.EventDispatcher, this.player = e, this.uimanager = t, this.live = void 0;
						var a = function() {
							n.detect()
						};
						this.uimanager.getConfig().events.onUpdated.subscribe(a), e.on(e.exports.PlayerEvent.Play, a), i.BrowserUtils.isAndroid && i.BrowserUtils.isChrome && e.on(e.exports.PlayerEvent.TimeChanged, a), e.exports.PlayerEvent.DurationChanged && e.on(e.exports.PlayerEvent.DurationChanged, a), e.on(e.exports.PlayerEvent.AdBreakStarted, a), e.on(e.exports.PlayerEvent.AdBreakFinished, a)
					}
					return e.prototype.detect = function() {
						var e = this.player.isLive();
						e !== this.live && (this.liveChangedEvent.dispatch(this.player, {
							live: e
						}), this.live = e)
					}, Object.defineProperty(e.prototype, "onLiveChanged", {
						get: function() {
							return this.liveChangedEvent.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), e
				}();
				e.LiveStreamDetector = a
			}(t.PlayerUtils || (t.PlayerUtils = {}))
		},
		4362: function(e, t, n) {
			t.nextTick = function(e) {
					var t = Array.prototype.slice.call(arguments);
					t.shift(), setTimeout((function() {
						e.apply(null, t)
					}), 0)
				}, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function(e) {
					throw new Error("No such module. (Possibly not yet loaded)")
				},
				function() {
					var e, r = "/";
					t.cwd = function() {
						return r
					}, t.chdir = function(t) {
						e || (e = n("df7c")), r = e.resolve(t, r)
					}
				}(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, t.features = {}
		},
		"440c": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, r) {
					var i = {
						m: ["eng Minutt", "enger Minutt"],
						h: ["eng Stonn", "enger Stonn"],
						d: ["een Dag", "engem Dag"],
						M: ["ee Mount", "engem Mount"],
						y: ["ee Joer", "engem Joer"]

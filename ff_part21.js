								var r = {
									title: t,
									options: n,
									children: []
								};
								return null == e && (e = this.root), e.children.push(r), r
							}, e.outline.render = function() {
								return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
							}, e.outline.genIds_r = function(t) {
								t.id = e.internal.newObjectDeferred();
								for (var n = 0; n < t.children.length; n++) this.genIds_r(t.children[n])
							}, e.outline.renderRoot = function(e) {
								this.objStart(e), this.line("/Type /Outlines"), e.children.length > 0 && (this.line("/First " + this.makeRef(e.children[0])), this.line("/Last " + this.makeRef(e.children[e.children.length - 1]))), this.line("/Count " + this.count_r({
									count: 0
								}, e)), this.objEnd()
							}, e.outline.renderItems = function(t) {
								for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < t.children.length; r++) {
									var i = t.children[r];
									this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(t)), r > 0 && this.line("/Prev " + this.makeRef(t.children[r - 1])), r < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
									var a = this.count = this.count_r({
										count: 0
									}, i);
									if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
										var o = e.internal.getPageInfo(i.options.pageNumber);
										this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + n(0) + " 0]")
									}
									this.objEnd()
								}
								for (var s = 0; s < t.children.length; s++) this.renderItems(t.children[s])
							}, e.outline.line = function(e) {
								this.ctx.val += e + "\r\n"
							}, e.outline.makeRef = function(e) {
								return e.id + " 0 R"
							}, e.outline.makeString = function(t) {
								return "(" + e.internal.pdfEscape(t) + ")"
							}, e.outline.objStart = function(e) {
								this.ctx.val += "\r\n" + e.id + " 0 obj\r\n<<\r\n"
							}, e.outline.objEnd = function() {
								this.ctx.val += ">> \r\nendobj\r\n"
							}, e.outline.count_r = function(e, t) {
								for (var n = 0; n < t.children.length; n++) e.count++, this.count_r(e, t.children[n]);
								return e.count
							}
						}])
					}(D.API),
					function(e) {
						var t = [192, 193, 194, 195, 196, 197, 198, 199];
						e.processJPEG = function(e, n, r, i, a, o) {
							var s, u = this.decode.DCT_DECODE,
								c = null;
							if ("string" == typeof e || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
								switch (e = a || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, (s = function(e) {
									for (var n, r = 256 * e.charCodeAt(4) + e.charCodeAt(5), i = e.length, a = {
											width: 0,
											height: 0,
											numcomponents: 1
										}, o = 4; o < i; o += 2) {
										if (o += r, -1 !== t.indexOf(e.charCodeAt(o + 1))) {
											n = 256 * e.charCodeAt(o + 5) + e.charCodeAt(o + 6), a = {
												width: 256 * e.charCodeAt(o + 7) + e.charCodeAt(o + 8),
												height: n,
												numcomponents: e.charCodeAt(o + 9)
											};
											break
										}
										r = 256 * e.charCodeAt(o + 2) + e.charCodeAt(o + 3)
									}
									return a
								}(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e)).numcomponents) {
									case 1:
										o = this.color_spaces.DEVICE_GRAY;
										break;
									case 4:
										o = this.color_spaces.DEVICE_CMYK;
										break;
									case 3:
										o = this.color_spaces.DEVICE_RGB
								}
								c = {
									data: e,
									width: s.width,
									height: s.height,
									colorSpace: o,
									bitsPerComponent: 8,
									filter: u,
									index: n,
									alias: r
								}
							}
							return c
						}
					}(D.API);
				var Ue, je, He, Ye, Ve, ze = function() {
					var e, t, n;

					function a(e) {
						var t, n, r, i, a, o, s, u, c, l, f, d, h, p;
						for (this.data = e, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
							switch (t = this.readUInt32(), c = function() {
								var e, t;
								for (t = [], e = 0; e < 4; ++e) t.push(String.fromCharCode(this.data[this.pos++]));
								return t
							}.call(this).join("")) {
								case "IHDR":
									this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
									break;
								case "acTL":
									this.animation = {
										numFrames: this.readUInt32(),
										numPlays: this.readUInt32() || 1 / 0,
										frames: []
									};
									break;
								case "PLTE":
									this.palette = this.read(t);
									break;
								case "fcTL":
									o && this.animation.frames.push(o), this.pos += 4, o = {
										width: this.readUInt32(),
										height: this.readUInt32(),
										xOffset: this.readUInt32(),
										yOffset: this.readUInt32()
									}, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
									break;
								case "IDAT":
								case "fdAT":
									for ("fdAT" === c && (this.pos += 4, t -= 4), e = (null != o ? o.data : void 0) || this.imgData, d = 0; 0 <= t ? d < t : d > t; 0 <= t ? ++d : --d) e.push(this.data[this.pos++]);
									break;
								case "tRNS":
									switch (this.transparency = {}, this.colorType) {
										case 3:
											if (r = this.palette.length / 3, this.transparency.indexed = this.read(t), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
											if ((l = r - this.transparency.indexed.length) > 0)
												for (h = 0; 0 <= l ? h < l : h > l; 0 <= l ? ++h : --h) this.transparency.indexed.push(255);
											break;
										case 0:
											this.transparency.grayscale = this.read(t)[0];
											break;
										case 2:
											this.transparency.rgb = this.read(t)
									}
									break;
								case "tEXt":
									s = (f = this.read(t)).indexOf(0), u = String.fromCharCode.apply(String, f.slice(0, s)), this.text[u] = String.fromCharCode.apply(String, f.slice(s + 1));
									break;
								case "IEND":
									return o && this.animation.frames.push(o), this.colors = function() {
										switch (this.colorType) {
											case 0:
											case 3:
											case 4:
												return 1;
											case 2:
											case 6:
												return 3
										}
									}.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function() {
										switch (this.colors) {
											case 1:
												return "DeviceGray";
											case 3:
												return "DeviceRGB"
										}
									}.call(this), void(this.imgData = new Uint8Array(this.imgData));
								default:
									this.pos += t
							}
							if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
						}
					}
					a.prototype.read = function(e) {
						var t, n;
						for (n = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) n.push(this.data[this.pos++]);
						return n
					}, a.prototype.readUInt32 = function() {
						return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
					}, a.prototype.readUInt16 = function() {
						return this.data[this.pos++] << 8 | this.data[this.pos++]
					}, a.prototype.decodePixels = function(e) {
						var t = this.pixelBitlength / 8,
							n = new Uint8Array(this.width * this.height * t),
							i = 0,
							a = this;
						if (null == e && (e = this.imgData), 0 === e.length) return new Uint8Array(0);

						function o(r, o, s, u) {
							var c, l, f, d, h, p, _, m, b, g, v, y, A, S, w, E, T, C, $, k, O, x = Math.ceil((a.width - r) / s),
								P = Math.ceil((a.height - o) / u),
								M = a.width == x && a.height == P;
							for (S = t * x, y = M ? n : new Uint8Array(S * P), p = e.length, A = 0, l = 0; A < P && i < p;) {
								switch (e[i++]) {
									case 0:
										for (d = T = 0; T < S; d = T += 1) y[l++] = e[i++];
										break;
									case 1:
										for (d = C = 0; C < S; d = C += 1) c = e[i++], h = d < t ? 0 : y[l - t], y[l++] = (c + h) % 256;
										break;
									case 2:
										for (d = $ = 0; $ < S; d = $ += 1) c = e[i++], f = (d - d % t) / t, w = A && y[(A - 1) * S + f * t + d % t], y[l++] = (w + c) % 256;
										break;
									case 3:
										for (d = k = 0; k < S; d = k += 1) c = e[i++], f = (d - d % t) / t, h = d < t ? 0 : y[l - t], w = A && y[(A - 1) * S + f * t + d % t], y[l++] = (c + Math.floor((h + w) / 2)) % 256;
										break;
									case 4:
										for (d = O = 0; O < S; d = O += 1) c = e[i++], f = (d - d % t) / t, h = d < t ? 0 : y[l - t], 0 === A ? w = E = 0 : (w = y[(A - 1) * S + f * t + d % t], E = f && y[(A - 1) * S + (f - 1) * t + d % t]), _ = h + w - E, m = Math.abs(_ - h), g = Math.abs(_ - w), v = Math.abs(_ - E), b = m <= g && m <= v ? h : g <= v ? w : E, y[l++] = (c + b) % 256;
										break;
									default:
										throw new Error("Invalid filter algorithm: " + e[i - 1])
								}
								if (!M) {
									var I = ((o + A * u) * a.width + r) * t,
										L = A * S;
									for (d = 0; d < x; d += 1) {
										for (var D = 0; D < t; D += 1) n[I++] = y[L++];
										I += (s - 1) * t
									}
								}
								A++
							}
						}
						return e = Object(r.a)(e), 1 == a.interlaceMethod ? (o(0, 0, 8, 8), o(4, 0, 8, 8), o(0, 4, 4, 8), o(2, 0, 4, 4), o(0, 2, 2, 4), o(1, 0, 2, 2), o(0, 1, 1, 2)) : o(0, 0, 1, 1), n
					}, a.prototype.decodePalette = function() {
						var e, t, n, r, i, a, o, s, u;
						for (n = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + n.length), r = 0, e = 0, t = o = 0, s = n.length; o < s; t = o += 3) i[r++] = n[t], i[r++] = n[t + 1], i[r++] = n[t + 2], i[r++] = null != (u = a[e++]) ? u : 255;
						return i
					}, a.prototype.copyToImageData = function(e, t) {
						var n, r, i, a, o, s, u, c, l, f, d;
						if (r = this.colors, l = null, n = this.hasAlphaChannel, this.palette.length && (l = null != (d = this._decodedPalette) ? d : this._decodedPalette = this.decodePalette(), r = 4, n = !0), c = (i = e.data || e).length, o = l || t, a = s = 0, 1 === r)
							for (; a < c;) u = l ? 4 * t[a / 4] : s, f = o[u++], i[a++] = f, i[a++] = f, i[a++] = f, i[a++] = n ? o[u++] : 255, s = u;
						else
							for (; a < c;) u = l ? 4 * t[a / 4] : s, i[a++] = o[u++], i[a++] = o[u++], i[a++] = o[u++], i[a++] = n ? o[u++] : 255, s = u
					}, a.prototype.decode = function() {
						var e;
						return e = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e, this.decodePixels()), e
					};
					var o = function() {
						if ("[object Window]" === Object.prototype.toString.call(i)) {
							try {
								t = i.document.createElement("canvas"), n = t.getContext("2d")
							} catch (e) {
								return !1
							}
							return !0
						}
						return !1
					};
					return o(), e = function(e) {
						var r;
						if (!0 === o()) return n.width = e.width, n.height = e.height, n.clearRect(0, 0, e.width, e.height), n.putImageData(e, 0, 0), (r = new Image).src = t.toDataURL(), r;
						throw new Error("This method requires a Browser with Canvas-capability.")
					}, a.prototype.decodeFrames = function(t) {
						var n, r, i, a, o, s, u, c;
						if (this.animation) {
							for (c = [], r = o = 0, s = (u = this.animation.frames).length; o < s; r = ++o) n = u[r], i = t.createImageData(n.width, n.height), a = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, a), n.imageData = i, c.push(n.image = e(i));
							return c
						}
					}, a.prototype.renderFrame = function(e, t) {
						var n, r, i;
						return n = (r = this.animation.frames)[t], i = r[t - 1], 0 === t && e.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? e.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && e.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && e.clearRect(n.xOffset, n.yOffset, n.width, n.height), e.drawImage(n.image, n.xOffset, n.yOffset)
					}, a.prototype.animate = function(e) {
						var t, n, r, i, a, o, s = this;
						return n = 0, o = this.animation, i = o.numFrames, r = o.frames, a = o.numPlays, (t = function() {
							var o, u;
							if (o = n++ % i, u = r[o], s.renderFrame(e, o), i > 1 && n / i < a) return s.animation._timeout = setTimeout(t, u.delay)
						})()
					}, a.prototype.stopAnimation = function() {
						var e;
						return clearTimeout(null != (e = this.animation) ? e._timeout : void 0)
					}, a.prototype.render = function(e) {
						var t, n;
						return e._png && e._png.stopAnimation(), e._png = this, e.width = this.width, e.height = this.height, t = e.getContext("2d"), this.animation ? (this.decodeFrames(t), this.animate(t)) : (n = t.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), t.putImageData(n, 0, 0))
					}, a
				}();

				function Qe(e) {
					var t = 0;
					if (71 !== e[t++] || 73 !== e[t++] || 70 !== e[t++] || 56 !== e[t++] || 56 != (e[t++] + 1 & 253) || 97 !== e[t++]) throw new Error("Invalid GIF 87a/89a header.");
					var n = e[t++] | e[t++] << 8,
						r = e[t++] | e[t++] << 8,
						i = e[t++],
						a = i >> 7,
						o = 1 << 1 + (7 & i);
					e[t++], e[t++];
					var s = null,
						u = null;
					a && (s = t, u = o, t += 3 * o);
					var c = !0,
						l = [],
						f = 0,
						d = null,
						h = 0,
						p = null;
					for (this.width = n, this.height = r; c && t < e.length;) switch (e[t++]) {
						case 33:
							switch (e[t++]) {
								case 255:
									if (11 !== e[t] || 78 == e[t + 1] && 69 == e[t + 2] && 84 == e[t + 3] && 83 == e[t + 4] && 67 == e[t + 5] && 65 == e[t + 6] && 80 == e[t + 7] && 69 == e[t + 8] && 50 == e[t + 9] && 46 == e[t + 10] && 48 == e[t + 11] && 3 == e[t + 12] && 1 == e[t + 13] && 0 == e[t + 16]) t += 14, p = e[t++] | e[t++] << 8, t++;
									else
										for (t += 12;;) {
											if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
											if (0 === $) break;
											t += $
										}
									break;
								case 249:
									if (4 !== e[t++] || 0 !== e[t + 4]) throw new Error("Invalid graphics extension block.");
									var _ = e[t++];
									f = e[t++] | e[t++] << 8, d = e[t++], 0 == (1 & _) && (d = null), h = _ >> 2 & 7, t++;
									break;
								case 254:
									for (;;) {
										if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
										if (0 === $) break;
										t += $
									}
									break;
								default:
									throw new Error("Unknown graphic control label: 0x" + e[t - 1].toString(16))
							}
							break;
						case 44:
							var m = e[t++] | e[t++] << 8,
								b = e[t++] | e[t++] << 8,
								g = e[t++] | e[t++] << 8,
								v = e[t++] | e[t++] << 8,
								y = e[t++],
								A = y >> 6 & 1,
								S = 1 << 1 + (7 & y),
								w = s,
								E = u,
								T = !1;
							y >> 7 && (T = !0, w = t, E = S, t += 3 * S);
							var C = t;
							for (t++;;) {
								var $;
								if (!(($ = e[t++]) >= 0)) throw Error("Invalid block size");
								if (0 === $) break;
								t += $
							}
							l.push({
								x: m,
								y: b,
								width: g,
								height: v,
								has_local_palette: T,
								palette_offset: w,
								palette_size: E,
								data_offset: C,
								data_length: t - C,
								transparent_index: d,
								interlaced: !!A,
								delay: f,
								disposal: h
							});
							break;
						case 59:
							c = !1;
							break;
						default:
							throw new Error("Unknown gif block: 0x" + e[t - 1].toString(16))
					}
					this.numFrames = function() {
						return l.length
					}, this.loopCount = function() {
						return p
					}, this.frameInfo = function(e) {
						if (e < 0 || e >= l.length) throw new Error("Frame index out of range.");
						return l[e]
					}, this.decodeAndBlitFrameBGRA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						Ge(e, i.data_offset, o, a);
						var s = i.palette_offset,
							u = i.transparent_index;
						null === u && (u = 256);
						var c = i.width,
							l = n - c,
							f = c,
							d = 4 * (i.y * n + i.x),
							h = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							_ = 4 * l;
						!0 === i.interlaced && (_ += 4 * n * 7);
						for (var m = 8, b = 0, g = o.length; b < g; ++b) {
							var v = o[b];
							if (0 === f && (f = c, (p += _) >= h && (_ = 4 * l + 4 * n * (m - 1), p = d + (c + l) * (m << 1), m >>= 1)), v === u) p += 4;
							else {
								var y = e[s + 3 * v],
									A = e[s + 3 * v + 1],
									S = e[s + 3 * v + 2];
								r[p++] = S, r[p++] = A, r[p++] = y, r[p++] = 255
							}--f
						}
					}, this.decodeAndBlitFrameRGBA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						Ge(e, i.data_offset, o, a);
						var s = i.palette_offset,
							u = i.transparent_index;
						null === u && (u = 256);
						var c = i.width,
							l = n - c,
							f = c,
							d = 4 * (i.y * n + i.x),
							h = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							_ = 4 * l;
						!0 === i.interlaced && (_ += 4 * n * 7);
						for (var m = 8, b = 0, g = o.length; b < g; ++b) {
							var v = o[b];
							if (0 === f && (f = c, (p += _) >= h && (_ = 4 * l + 4 * n * (m - 1), p = d + (c + l) * (m << 1), m >>= 1)), v === u) p += 4;
							else {
								var y = e[s + 3 * v],
									A = e[s + 3 * v + 1],
									S = e[s + 3 * v + 2];
								r[p++] = y, r[p++] = A, r[p++] = S, r[p++] = 255
							}--f
						}
					}
				}

				function Ge(e, t, n, r) {
					for (var i = e[t++], a = 1 << i, s = a + 1, u = s + 1, c = i + 1, l = (1 << c) - 1, f = 0, d = 0, h = 0, p = e[t++], _ = new Int32Array(4096), m = null;;) {
						for (; f < 16 && 0 !== p;) d |= e[t++] << f, f += 8, 1 === p ? p = e[t++] : --p;
						if (f < c) break;
						var b = d & l;
						if (d >>= c, f -= c, b !== a) {
							if (b === s) break;
							for (var g = b < u ? b : m, v = 0, y = g; y > a;) y = _[y] >> 8, ++v;
							var A = y;
							if (h + v + (g !== b ? 1 : 0) > r) return void o.log("Warning, gif stream longer than expected.");
							n[h++] = A;
							var S = h += v;
							for (g !== b && (n[h++] = A), y = g; v--;) y = _[y], n[--S] = 255 & y, y >>= 8;
							null !== m && u < 4096 && (_[u++] = m << 8 | A, u >= l + 1 && c < 12 && (++c, l = l << 1 | 1)), m = b
						} else u = s + 1, l = (1 << (c = i + 1)) - 1, m = null
					}
					return h !== r && o.log("Warning, gif stream shorter than expected."), n
				}

				function qe(e) {
					var t, n, r, i, a, o = Math.floor,
						s = new Array(64),
						u = new Array(64),
						c = new Array(64),
						l = new Array(64),
						f = new Array(65535),
						d = new Array(65535),
						h = new Array(64),
						p = new Array(64),
						_ = [],
						m = 0,
						b = 7,
						g = new Array(64),
						v = new Array(64),
						y = new Array(64),
						A = new Array(256),
						S = new Array(2048),
						w = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
						E = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
						T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						C = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
						$ = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
						k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
						O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						x = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
						P = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

					function M(e, t) {
						for (var n = 0, r = 0, i = new Array, a = 1; a <= 16; a++) {
							for (var o = 1; o <= e[a]; o++) i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = a, r++, n++;
							n *= 2
						}
						return i
					}

					function I(e) {
						for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (m |= 1 << b), n--, --b < 0 && (255 == m ? (L(255), L(0)) : L(m), b = 7, m = 0)
					}

					function L(e) {
						_.push(e)
					}

					function D(e) {
						L(e >> 8 & 255), L(255 & e)
					}

					function B(e, t, n, r, i) {
						for (var a, o = i[0], s = i[240], u = function(e, t) {
								var n, r, i, a, o, s, u, c, l, f, d = 0;
								for (l = 0; l < 8; ++l) {
									n = e[d], r = e[d + 1], i = e[d + 2], a = e[d + 3], o = e[d + 4], s = e[d + 5], u = e[d + 6];
									var p = n + (c = e[d + 7]),
										_ = n - c,
										m = r + u,
										b = r - u,
										g = i + s,
										v = i - s,
										y = a + o,
										A = a - o,
										S = p + y,
										w = p - y,
										E = m + g,
										T = m - g;
									e[d] = S + E, e[d + 4] = S - E;
									var C = .707106781 * (T + w);
									e[d + 2] = w + C, e[d + 6] = w - C;
									var $ = .382683433 * ((S = A + v) - (T = b + _)),
										k = .5411961 * S + $,
										O = 1.306562965 * T + $,
										x = .707106781 * (E = v + b),
										P = _ + x,
										M = _ - x;
									e[d + 5] = M + k, e[d + 3] = M - k, e[d + 1] = P + O, e[d + 7] = P - O, d += 8
								}
								for (d = 0, l = 0; l < 8; ++l) {
									n = e[d], r = e[d + 8], i = e[d + 16], a = e[d + 24], o = e[d + 32], s = e[d + 40], u = e[d + 48];
									var I = n + (c = e[d + 56]),
										L = n - c,
										D = r + u,
										B = r - u,
										N = i + s,
										R = i - s,
										F = a + o,
										U = a - o,
										j = I + F,
										H = I - F,
										Y = D + N,
										V = D - N;
									e[d] = j + Y, e[d + 32] = j - Y;
									var z = .707106781 * (V + H);
									e[d + 16] = H + z, e[d + 48] = H - z;
									var Q = .382683433 * ((j = U + R) - (V = B + L)),
										G = .5411961 * j + Q,
										q = 1.306562965 * V + Q,
										W = .707106781 * (Y = R + B),
										K = L + W,
										X = L - W;
									e[d + 40] = X + G, e[d + 24] = X - G, e[d + 8] = K + q, e[d + 56] = K - q, d++
								}
								for (l = 0; l < 64; ++l) f = e[l] * t[l], h[l] = f > 0 ? f + .5 | 0 : f - .5 | 0;
								return h
							}(e, t), c = 0; c < 64; ++c) p[w[c]] = u[c];
						var l = p[0] - n;
						n = p[0], 0 == l ? I(r[0]) : (I(r[d[a = 32767 + l]]), I(f[a]));
						for (var _ = 63; _ > 0 && 0 == p[_];) _--;
						if (0 == _) return I(o), n;
						for (var m, b = 1; b <= _;) {
							for (var g = b; 0 == p[b] && b <= _;) ++b;
							var v = b - g;
							if (v >= 16) {
								m = v >> 4;
								for (var y = 1; y <= m; ++y) I(s);
								v &= 15
							}
							a = 32767 + p[b], I(i[(v << 4) + d[a]]), I(f[a]), b++
						}
						return 63 != _ && I(o), n
					}

					function N(e) {
						e = Math.min(Math.max(e, 1), 100), a != e && (function(e) {
							for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
								var r = o((t[n] * e + 50) / 100);
								r = Math.min(Math.max(r, 1), 255), s[w[n]] = r
							}
							for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
								var f = o((i[a] * e + 50) / 100);
								f = Math.min(Math.max(f, 1), 255), u[w[a]] = f
							}
							for (var d = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], h = 0, p = 0; p < 8; p++)
								for (var _ = 0; _ < 8; _++) c[h] = 1 / (s[w[h]] * d[p] * d[_] * 8), l[h] = 1 / (u[w[h]] * d[p] * d[_] * 8), h++
						}(e < 50 ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e)), a = e)
					}
					this.encode = function(e, a) {
							a && N(a), _ = new Array, m = 0, b = 7, D(65496), D(65504), D(16), L(74), L(70), L(73), L(70), L(0), L(1), L(1), L(0), D(1), D(1), L(0), L(0),
								function() {
									D(65499), D(132), L(0);
									for (var e = 0; e < 64; e++) L(s[e]);
									L(1);
									for (var t = 0; t < 64; t++) L(u[t])
								}(),
								function(e, t) {
									D(65472), D(17), L(8), D(t), D(e), L(3), L(1), L(17), L(0), L(2), L(17), L(1), L(3), L(17), L(1)
								}(e.width, e.height),
								function() {
									D(65476), D(418), L(0);
									for (var e = 0; e < 16; e++) L(E[e + 1]);
									for (var t = 0; t <= 11; t++) L(T[t]);
									L(16);
									for (var n = 0; n < 16; n++) L(C[n + 1]);
									for (var r = 0; r <= 161; r++) L($[r]);
									L(1);
									for (var i = 0; i < 16; i++) L(k[i + 1]);
									for (var a = 0; a <= 11; a++) L(O[a]);
									L(17);
									for (var o = 0; o < 16; o++) L(x[o + 1]);
									for (var s = 0; s <= 161; s++) L(P[s])
								}(), D(65498), D(12), L(3), L(1), L(0), L(2), L(17), L(3), L(17), L(0), L(63), L(0);
							var o = 0,
								f = 0,
								d = 0;
							m = 0, b = 7, this.encode.displayName = "_encode_";
							for (var h, p, A, w, M, R, F, U, j, H = e.data, Y = e.width, V = e.height, z = 4 * Y, Q = 0; Q < V;) {
								for (h = 0; h < z;) {
									for (M = z * Q + h, F = -1, U = 0, j = 0; j < 64; j++) R = M + (U = j >> 3) * z + (F = 4 * (7 & j)), Q + U >= V && (R -= z * (Q + 1 + U - V)), h + F >= z && (R -= h + F - z + 4), p = H[R++], A = H[R++], w = H[R++], g[j] = (S[p] + S[A + 256 >> 0] + S[w + 512 >> 0] >> 16) - 128, v[j] = (S[p + 768 >> 0] + S[A + 1024 >> 0] + S[w + 1280 >> 0] >> 16) - 128, y[j] = (S[p + 1280 >> 0] + S[A + 1536 >> 0] + S[w + 1792 >> 0] >> 16) - 128;
									o = B(g, c, o, t, r), f = B(v, l, f, n, i), d = B(y, l, d, n, i), h += 32
								}
								Q += 8
							}
							if (b >= 0) {
								var G = [];
								G[1] = b + 1, G[0] = (1 << b + 1) - 1, I(G)
							}
							return D(65497), new Uint8Array(_)
						}, e = e || 50,
						function() {
							for (var e = String.fromCharCode, t = 0; t < 256; t++) A[t] = e(t)
						}(), t = M(E, T), n = M(k, O), r = M(C, $), i = M(x, P),
						function() {
							for (var e = 1, t = 2, n = 1; n <= 15; n++) {
								for (var r = e; r < t; r++) d[32767 + r] = n, f[32767 + r] = [], f[32767 + r][1] = n, f[32767 + r][0] = r;
								for (var i = -(t - 1); i <= -e; i++) d[32767 + i] = n, f[32767 + i] = [], f[32767 + i][1] = n, f[32767 + i][0] = t - 1 + i;
								e <<= 1, t <<= 1
							}
						}(),
						function() {
							for (var e = 0; e < 256; e++) S[e] = 19595 * e, S[e + 256 >> 0] = 38470 * e, S[e + 512 >> 0] = 7471 * e + 32768, S[e + 768 >> 0] = -11059 * e, S[e + 1024 >> 0] = -21709 * e, S[e + 1280 >> 0] = 32768 * e + 8421375, S[e + 1536 >> 0] = -27439 * e, S[e + 1792 >> 0] = -5329 * e
						}(), N(e)
				}

				function We(e, t) {
					if (this.pos = 0, this.buffer = e, this.datav = new DataView(e.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
					this.parseHeader(), this.parseBGR()
				}

				function Ke(e) {
					function t(e) {
						if (!e) throw Error("assert :P")
					}

					function n(e, t, n) {
						for (var r = 0; 4 > r; r++)
							if (e[t + r] != n.charCodeAt(r)) return !0;
						return !1
					}

					function r(e, t, n, r, i) {
						for (var a = 0; a < i; a++) e[t + a] = n[r + a]
					}

					function i(e, t, n, r) {
						for (var i = 0; i < r; i++) e[t + i] = n
					}

					function a(e) {
						return new Int32Array(e)
					}

					function o(e, t) {
						for (var n = [], r = 0; r < e; r++) n.push(new t);
						return n
					}

					function s(e, t) {
						var n = [];
						return function e(n, r, i) {
							for (var a = i[r], o = 0; o < a && (n.push(i.length > r + 1 ? [] : new t), !(i.length < r + 1)); o++) e(n[o], r + 1, i)
						}(n, 0, e), n
					}

					function u(e, t) {
						for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(e[t++]);
						return n
					}

					function c(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16) >>> 0
					}

					function l(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
					}
					new(Ke = function() {
						var e = this;

						function u(e, t) {
							for (var n = 1 << t - 1 >>> 0; e & n;) n >>>= 1;
							return n ? (e & n - 1) + n : e
						}

						function c(e, n, r, i, a) {
							t(!(i % r));
							do {
								e[n + (i -= r)] = a
							} while (0 < i)
						}

						function l(e, n, r, i, o) {
							if (t(2328 >= o), 512 >= o) var s = a(512);
							else if (null == (s = a(o))) return 0;
							return function(e, n, r, i, o, s) {
								var l, d, h = n,
									p = 1 << r,
									_ = a(16),
									m = a(16);
								for (t(0 != o), t(null != i), t(null != e), t(0 < r), d = 0; d < o; ++d) {
									if (15 < i[d]) return 0;
									++_[i[d]]
								}
								if (_[0] == o) return 0;
								for (m[1] = 0, l = 1; 15 > l; ++l) {
									if (_[l] > 1 << l) return 0;
									m[l + 1] = m[l] + _[l]
								}
								for (d = 0; d < o; ++d) l = i[d], 0 < i[d] && (s[m[l]++] = d);
								if (1 == m[15]) return (i = new f).g = 0, i.value = s[0], c(e, h, 1, p, i), p;
								var b, g = -1,
									v = p - 1,
									y = 0,
									A = 1,
									S = 1,
									w = 1 << r;
								for (d = 0, l = 1, o = 2; l <= r; ++l, o <<= 1) {
									if (A += S <<= 1, 0 > (S -= _[l])) return 0;
									for (; 0 < _[l]; --_[l])(i = new f).g = l, i.value = s[d++], c(e, h + y, o, w, i), y = u(y, l)
								}
								for (l = r + 1, o = 2; 15 >= l; ++l, o <<= 1) {
									if (A += S <<= 1, 0 > (S -= _[l])) return 0;
									for (; 0 < _[l]; --_[l]) {
										if (i = new f, (y & v) != g) {
											for (h += w, b = 1 << (g = l) - r; 15 > g && !(0 >= (b -= _[g]));) ++g, b <<= 1;
											p += w = 1 << (b = g - r), e[n + (g = y & v)].g = b + r, e[n + g].value = h - n - g
										}
										i.g = l - r, i.value = s[d++], c(e, h + (y >> r), o, w, i), y = u(y, l)
									}
								}
								return A != 2 * m[15] - 1 ? 0 : p
							}(e, n, r, i, o, s)
						}

						function f() {
							this.value = this.g = 0
						}

						function d() {
							this.value = this.g = 0
						}

						function h() {
							this.G = o(5, f), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Fn, d)
						}

						function p(e, n, r, i) {
							t(null != e), t(null != n), t(2147483648 > i), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = n, e.pa = r, e.Jd = n, e.Yc = r + i, e.Zc = 4 <= i ? r + i - 4 + 1 : r, C(e)
						}

						function _(e, t) {
							for (var n = 0; 0 < t--;) n |= k(e, 128) << t;
							return n
						}

						function m(e, t) {
							var n = _(e, t);
							return $(e) ? -n : n
						}

						function b(e, n, r, i) {
							var a, o = 0;
							for (t(null != e), t(null != n), t(4294967288 > i), e.Sb = i, e.Ra = 0, e.u = 0, e.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += n[r + a] << 8 * a;
							e.Ra = o, e.bb = i, e.oa = n, e.pa = r
						}

						function g(e) {
							for (; 8 <= e.u && e.bb < e.Sb;) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << Hn - 8 >>> 0, ++e.bb, e.u -= 8;
							w(e) && (e.h = 1, e.u = 0)
						}

						function v(e, n) {
							if (t(0 <= n), !e.h && n <= jn) {
								var r = S(e) & Un[n];
								return e.u += n, g(e), r
							}
							return e.h = 1, e.u = 0
						}

						function y() {
							this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
						}

						function A() {
							this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
						}

						function S(e) {
							return e.Ra >>> (e.u & Hn - 1) >>> 0
						}

						function w(e) {
							return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > Hn
						}

						function E(e, t) {
							e.u = t, e.h = w(e)
						}

						function T(e) {
							e.u >= Yn && (t(e.u >= Yn), g(e))
						}

						function C(e) {
							t(null != e && null != e.oa), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(null != e && null != e.oa), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1))
						}

						function $(e) {
							return _(e, 1)
						}

						function k(e, t) {
							var n = e.Ca;
							0 > e.b && C(e);
							var r = e.b,
								i = n * t >>> 8,
								a = (e.I >>> r > i) + 0;
							for (a ? (n -= i, e.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
							return r = 7 ^ i + Vn[r], e.b -= r, e.Ca = (n << r) - 1, a
						}

						function O(e, t, n) {
							e[t + 0] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255
						}

						function x(e, t) {
							return e[t + 0] << 0 | e[t + 1] << 8
						}

						function P(e, t) {
							return x(e, t) | e[t + 2] << 16
						}

						function M(e, t) {
							return x(e, t) | x(e, t + 2) << 16
						}

						function I(e, n) {
							var r = 1 << n;
							return t(null != e), t(0 < n), e.X = a(r), null == e.X ? 0 : (e.Mb = 32 - n, e.Xa = n, 1)
						}

						function L(e, n) {
							t(null != e), t(null != n), t(e.Xa == n.Xa), r(n.X, 0, e.X, 0, 1 << n.Xa)
						}

						function D() {
							this.X = [], this.Xa = this.Mb = 0
						}

						function B(e, n, r, i) {
							t(null != r), t(null != i);
							var a = r[0],
								o = i[0];
							return 0 == a && (a = (e * o + n / 2) / n), 0 == o && (o = (n * a + e / 2) / e), 0 >= a || 0 >= o ? 0 : (r[0] = a, i[0] = o, 1)
						}

						function N(e, t) {
							return e + (1 << t) - 1 >>> t
						}

						function R(e, t) {
							return ((4278255360 & e) + (4278255360 & t) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & t) >>> 0 & 16711935) >>> 0
						}

						function F(t, n) {
							e[n] = function(n, r, i, a, o, s, u) {
								var c;
								for (c = 0; c < o; ++c) {
									var l = e[t](s[u + c - 1], i, a + c);
									s[u + c] = R(n[r + c], l)
								}
							}
						}

						function U() {
							this.ud = this.hd = this.jd = 0
						}

						function j(e, t) {
							return ((4278124286 & (e ^ t)) >>> 1) + (e & t) >>> 0
						}

						function H(e) {
							return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0
						}

						function Y(e, t) {
							return H(e + (e - t + .5 >> 1))
						}

						function V(e, t, n) {
							return Math.abs(t - n) - Math.abs(e - n)
						}

						function z(e, t, n, r, i, a, o) {
							for (r = a[o - 1], n = 0; n < i; ++n) a[o + n] = r = R(e[t + n], r)
						}

						function Q(e, t, n, r, i) {
							var a;
							for (a = 0; a < n; ++a) {
								var o = e[t + a],
									s = o >> 8 & 255,
									u = 16711935 & (u = (u = 16711935 & o) + ((s << 16) + s));
								r[i + a] = (4278255360 & o) + u >>> 0
							}
						}

						function G(e, t) {
							t.jd = e >> 0 & 255, t.hd = e >> 8 & 255, t.ud = e >> 16 & 255
						}

						function q(e, t, n, r, i, a) {
							var o;
							for (o = 0; o < r; ++o) {
								var s = t[n + o],
									u = s >>> 8,
									c = s,
									l = 255 & (l = (l = s >>> 16) + ((e.jd << 24 >> 24) * (u << 24 >> 24) >>> 5));
								c = 255 & (c = (c += (e.hd << 24 >> 24) * (u << 24 >> 24) >>> 5) + ((e.ud << 24 >> 24) * (l << 24 >> 24) >>> 5)), i[a + o] = (4278255360 & s) + (l << 16) + c
							}
						}

						function W(t, n, r, i, a) {
							e[n] = function(e, t, n, r, o, s, u, c, l) {
								for (r = u; r < c; ++r)
									for (u = 0; u < l; ++u) o[s++] = a(n[i(e[t++])])
							}, e[t] = function(t, n, o, s, u, c, l) {
								var f = 8 >> t.b,
									d = t.Ea,
									h = t.K[0],
									p = t.w;
								if (8 > f)
									for (t = (1 << t.b) - 1, p = (1 << f) - 1; n < o; ++n) {
										var _, m = 0;
										for (_ = 0; _ < d; ++_) _ & t || (m = i(s[u++])), c[l++] = a(h[m & p]), m >>= f
									} else e["VP8LMapColor" + r](s, u, h, p, c, l, n, o, d)
							}
						}

						function K(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255
							}
						}

						function X(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255, r[i++] = a >> 24 & 255
							}
						}

						function J(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 240 | o >> 12 & 15,
									o = o >> 0 & 240 | o >> 28 & 15;
								r[i++] = a, r[i++] = o
							}
						}

						function Z(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 248 | o >> 13 & 7,
									o = o >> 5 & 224 | o >> 3 & 31;
								r[i++] = a, r[i++] = o
							}
						}

						function ee(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 0 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 16 & 255
							}
						}

						function te(e, t, n, i, a, o) {
							if (0 == o)
								for (n = t + n; t < n;) O(i, ((o = e[t++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
							else r(i, a, e, t, n)
						}

						function ne(t, n) {
							e[n][0] = e[t + "0"], e[n][1] = e[t + "1"], e[n][2] = e[t + "2"], e[n][3] = e[t + "3"], e[n][4] = e[t + "4"], e[n][5] = e[t + "5"], e[n][6] = e[t + "6"], e[n][7] = e[t + "7"], e[n][8] = e[t + "8"], e[n][9] = e[t + "9"], e[n][10] = e[t + "10"], e[n][11] = e[t + "11"], e[n][12] = e[t + "12"], e[n][13] = e[t + "13"], e[n][14] = e[t + "0"], e[n][15] = e[t + "0"]
						}

						function re(e) {
							return e == Yr || e == Vr || e == zr || e == Qr
						}

						function ie() {
							this.eb = [], this.size = this.A = this.fb = 0
						}

						function ae() {
							this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
						}

						function oe() {
							this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new ie, this.f.kb = new ae, this.sd = null
						}

						function se() {
							this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
						}

						function ue() {
							this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
						}

						function ce(e) {
							return alert("todo:WebPSamplerProcessPlane"), e.T
						}

						function le(e, t) {
							var n = e.T,
								i = t.ba.f.RGBA,
								a = i.eb,
								o = i.fb + e.ka * i.A,
								s = bi[t.ba.S],
								u = e.y,
								c = e.O,
								l = e.f,
								f = e.N,
								d = e.ea,
								h = e.W,
								p = t.cc,
								_ = t.dc,
								m = t.Mc,
								b = t.Nc,
								g = e.ka,
								v = e.ka + e.T,
								y = e.U,
								A = y + 1 >> 1;
							for (0 == g ? s(u, c, null, null, l, f, d, h, l, f, d, h, a, o, null, null, y) : (s(t.ec, t.fc, u, c, p, _, m, b, l, f, d, h, a, o - i.A, a, o, y), ++n); g + 2 < v; g += 2) p = l, _ = f, m = d, b = h, f += e.Rc, h += e.Rc, o += 2 * i.A, s(u, (c += 2 * e.fa) - e.fa, u, c, p, _, m, b, l, f, d, h, a, o - i.A, a, o, y);
							return c += e.fa, e.j + v < e.o ? (r(t.ec, t.fc, u, c, y), r(t.cc, t.dc, l, f, A), r(t.Mc, t.Nc, d, h, A), n--) : 1 & v || s(u, c, null, null, l, f, d, h, l, f, d, h, a, o + i.A, null, null, y), n
						}

						function fe(e, n, r) {
							var i = e.F,
								a = [e.J];
							if (null != i) {
								var o = e.U,
									s = n.ba.S,
									u = s == Ur || s == zr;
								n = n.ba.f.RGBA;
								var c = [0],
									l = e.ka;
								c[0] = e.T, e.Kb && (0 == l ? --c[0] : (--l, a[0] -= e.width), e.j + e.ka + e.T == e.o && (c[0] = e.o - e.j - l));
								var f = n.eb;
								l = n.fb + l * n.A, e = Tr(i, a[0], e.width, o, c, f, l + (u ? 0 : 3), n.A), t(r == c), e && re(s) && wr(f, l, u, o, c, n.A)
							}
							return 0
						}

						function de(e) {
							var t = e.ma,
								n = t.ba.S,
								r = 11 > n,
								i = n == Nr || n == Fr || n == Ur || n == jr || 12 == n || re(n);
							if (t.memory = null, t.Ib = null, t.Jb = null, t.Nd = null, !Bn(t.Oa, e, i ? 11 : 12)) return 0;
							if (i && re(n) && vn(), e.da) alert("todo:use_scaling");
							else {
								if (r) {
									if (t.Ib = ce, e.Kb) {
										if (n = e.U + 1 >> 1, t.memory = a(e.U + 2 * n), null == t.memory) return 0;
										t.ec = t.memory, t.fc = 0, t.cc = t.ec, t.dc = t.fc + e.U, t.Mc = t.cc, t.Nc = t.dc + n, t.Ib = le, vn()
									}
								} else alert("todo:EmitYUV");
								i && (t.Jb = fe, r && bn())
							}
							if (r && !Pi) {
								for (e = 0; 256 > e; ++e) Mi[e] = 89858 * (e - 128) + Ci >> Ti, Di[e] = -22014 * (e - 128) + Ci, Li[e] = -45773 * (e - 128), Ii[e] = 113618 * (e - 128) + Ci >> Ti;
								for (e = $i; e < ki; ++e) t = 76283 * (e - 16) + Ci >> Ti, Bi[e - $i] = ze(t, 255), Ni[e - $i] = ze(t + 8 >> 4, 15);
								Pi = 1
							}
							return 1
						}

						function he(e) {
							var n = e.ma,
								r = e.U,
								i = e.T;
							return t(!(1 & e.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(e, n), null != n.Jb && n.Jb(e, n, r), n.Dc += r, 1)
						}

						function pe(e) {
							e.ma.memory = null
						}

						function _e(e, t, n, r) {
							return 47 != v(e, 8) ? 0 : (t[0] = v(e, 14) + 1, n[0] = v(e, 14) + 1, r[0] = v(e, 1), 0 != v(e, 3) ? 0 : !e.h)
						}

						function me(e, t) {
							if (4 > e) return e + 1;
							var n = e - 2 >> 1;
							return (2 + (1 & e) << n) + v(t, n) + 1
						}

						function be(e, t) {
							return 120 < t ? t - 120 : 1 <= (n = ((n = Jr[t - 1]) >> 4) * e + (8 - (15 & n))) ? n : 1;
							var n
						}

						function ge(e, t, n) {
							var r = S(n),
								i = e[t += 255 & r].g - 8;
							return 0 < i && (E(n, n.u + 8), r = S(n), t += e[t].value, t += r & (1 << i) - 1), E(n, n.u + e[t].g), e[t].value
						}

						function ve(e, n, r) {
							return r.g += e.g, r.value += e.value << n >>> 0, t(8 >= r.g), e.g
						}

						function ye(e, n, r) {
							var i = e.xc;
							return t((n = 0 == i ? 0 : e.vc[e.md * (r >> i) + (n >> i)]) < e.Wb), e.Ya[n]
						}

						function Ae(e, n, i, a) {
							var o = e.ab,
								s = e.c * n,
								u = e.C;
							n = u + n;
							var c = i,
								l = a;
							for (a = e.Ta, i = e.Ua; 0 < o--;) {
								var f = e.gc[o],
									d = u,
									h = n,
									p = c,
									_ = l,
									m = (l = a, c = i, f.Ea);
								switch (t(d < h), t(h <= f.nc), f.hc) {
									case 2:
										Gn(p, _, (h - d) * m, l, c);
										break;
									case 0:
										var b = d,
											g = h,
											v = l,
											y = c,
											A = (C = f).Ea;
										0 == b && (zn(p, _, null, null, 1, v, y), z(p, _ + 1, 0, 0, A - 1, v, y + 1), _ += A, y += A, ++b);
										for (var S = 1 << C.b, w = S - 1, E = N(A, C.b), T = C.K, C = C.w + (b >> C.b) * E; b < g;) {
											var $ = T,
												k = C,
												O = 1;
											for (Qn(p, _, v, y - A, 1, v, y); O < A;) {
												var x = (O & ~w) + S;
												x > A && (x = A), (0, Jn[$[k++] >> 8 & 15])(p, _ + +O, v, y + O - A, x - O, v, y + O), O = x
											}
											_ += A, y += A, ++b & w || (C += E)
										}
										h != f.nc && r(l, c - m, l, c + (h - d - 1) * m, m);
										break;
									case 1:
										for (m = p, g = _, A = (p = f.Ea) - (y = p & ~(v = (_ = 1 << f.b) - 1)), b = N(p, f.b), S = f.K, f = f.w + (d >> f.b) * b; d < h;) {
											for (w = S, E = f, T = new U, C = g + y, $ = g + p; g < C;) G(w[E++], T), Zn(T, m, g, _, l, c), g += _, c += _;
											g < $ && (G(w[E++], T), Zn(T, m, g, A, l, c), g += A, c += A), ++d & v || (f += b)
										}
										break;
									case 3:
										if (p == l && _ == c && 0 < f.b) {
											for (g = l, p = m = c + (h - d) * m - (y = (h - d) * N(f.Ea, f.b)), _ = l, v = c, b = [], y = (A = y) - 1; 0 <= y; --y) b[y] = _[v + y];
											for (y = A - 1; 0 <= y; --y) g[p + y] = b[y];
											qn(f, d, h, l, m, l, c)
										} else qn(f, d, h, p, _, l, c)
								}
								c = a, l = i
							}
							l != i && r(a, i, c, l, s)
						}

						function Se(e, n) {
							var r = e.V,
								i = e.Ba + e.c * e.C,
								a = n - e.C;
							if (t(n <= e.l.o), t(16 >= a), 0 < a) {
								var o = e.l,
									s = e.Ta,
									u = e.Ua,
									c = o.width;
								if (Ae(e, a, r, i), a = u = [u], t((r = e.C) < (i = n)), t(o.v < o.va), i > o.o && (i = o.o), r < o.j) {
									var l = o.j - r;
									r = o.j, a[0] += l * c
								}
								if (r >= i ? r = 0 : (a[0] += 4 * o.v, o.ka = r - o.j, o.U = o.va - o.v, o.T = i - r, r = 1), r) {
									if (u = u[0], 11 > (r = e.ca).S) {
										var f = r.f.RGBA,
											d = (i = r.S, a = o.U, o = o.T, l = f.eb, f.A),
											h = o;
										for (f = f.fb + e.Ma * f.A; 0 < h--;) {
											var p = s,
												_ = u,
												m = a,
												b = l,
												g = f;
											switch (i) {
												case Br:
													er(p, _, m, b, g);
													break;
												case Nr:
													tr(p, _, m, b, g);
													break;
												case Yr:
													tr(p, _, m, b, g), wr(b, g, 0, m, 1, 0);
													break;
												case Rr:
													ir(p, _, m, b, g);
													break;
												case Fr:
													te(p, _, m, b, g, 1);
													break;
												case Vr:
													te(p, _, m, b, g, 1), wr(b, g, 0, m, 1, 0);
													break;
												case Ur:
													te(p, _, m, b, g, 0);
													break;
												case zr:
													te(p, _, m, b, g, 0), wr(b, g, 1, m, 1, 0);
													break;
												case jr:
													nr(p, _, m, b, g);
													break;
												case Qr:
													nr(p, _, m, b, g), Er(b, g, m, 1, 0);
													break;
												case Hr:
													rr(p, _, m, b, g);
													break;
												default:
													t(0)
											}
											u += c, f += d
										}
										e.Ma += o
									} else alert("todo:EmitRescaledRowsYUVA");
									t(e.Ma <= r.height)
								}
							}
							e.C = n, t(e.C <= e.i)
						}

						function we(e) {
							var t;
							if (0 < e.ua) return 0;
							for (t = 0; t < e.Wb; ++t) {
								var n = e.Ya[t].G,
									r = e.Ya[t].H;
								if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0
							}
							return 1
						}

						function Ee(e, n, r, i, a, o) {
							if (0 != e.Z) {
								var s = e.qd,
									u = e.rd;
								for (t(null != mi[e.Z]); n < r; ++n) mi[e.Z](s, u, i, a, i, a, o), s = i, u = a, a += o;
								e.qd = s, e.rd = u
							}
						}

						function Te(e, n) {
							var r = e.l.ma,
								i = 0 == r.Z || 1 == r.Z ? e.l.j : e.C;
							if (i = e.C < i ? i : e.C, t(n <= e.l.o), n > i) {
								var a = e.l.width,
									o = r.ca,
									s = r.tb + a * i,
									u = e.V,
									c = e.Ba + e.c * i,
									l = e.gc;
								t(1 == e.ab), t(3 == l[0].hc), Kn(l[0], i, n, u, c, o, s), Ee(r, i, n, o, s, a)
							}
							e.C = e.Ma = n
						}

						function Ce(e, n, r, i, a, o, s) {
							var u = e.$ / i,
								c = e.$ % i,
								l = e.m,
								f = e.s,
								d = r + e.$,
								h = d;
							a = r + i * a;
							var p = r + i * o,
								_ = 280 + f.ua,
								m = e.Pb ? u : 16777216,
								b = 0 < f.ua ? f.Wa : null,
								g = f.wc,
								v = d < p ? ye(f, c, u) : null;
							t(e.C < o), t(p <= a);
							var y = !1;
							e: for (;;) {
								for (; y || d < p;) {
									var A = 0;
									if (u >= m) {
										var C = d - r;
										t((m = e).Pb), m.wd = m.m, m.xd = C, 0 < m.s.ua && L(m.s.Wa, m.s.vb), m = u + ei
									}
									if (c & g || (v = ye(f, c, u)), t(null != v), v.Qb && (n[d] = v.qb, y = !0), !y)
										if (T(l), v.jc) {
											A = l, C = n;
											var $ = d,
												k = v.pd[S(A) & Fn - 1];
											t(v.jc), 256 > k.g ? (E(A, A.u + k.g), C[$] = k.value, A = 0) : (E(A, A.u + k.g - 256), t(256 <= k.value), A = k.value), 0 == A && (y = !0)
										} else A = ge(v.G[0], v.H[0], l);
									if (l.h) break;
									if (y || 256 > A) {
										if (!y)
											if (v.nd) n[d] = (v.qb | A << 8) >>> 0;
											else {
												if (T(l), y = ge(v.G[1], v.H[1], l), T(l), C = ge(v.G[2], v.H[2], l), $ = ge(v.G[3], v.H[3], l), l.h) break;
												n[d] = ($ << 24 | y << 16 | A << 8 | C) >>> 0
											} if (y = !1, ++d, ++c >= i && (c = 0, ++u, null != s && u <= o && !(u % 16) && s(e, u), null != b))
											for (; h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A
									} else if (280 > A) {
										if (A = me(A - 256, l), C = ge(v.G[4], v.H[4], l), T(l), C = be(i, C = me(C, l)), l.h) break;
										if (d - r < C || a - d < A) break e;
										for ($ = 0; $ < A; ++$) n[d + $] = n[d + $ - C];
										for (d += A, c += A; c >= i;) c -= i, ++u, null != s && u <= o && !(u % 16) && s(e, u);
										if (t(d <= a), c & g && (v = ye(f, c, u)), null != b)
											for (; h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A
									} else {
										if (!(A < _)) break e;
										for (y = A - 280, t(null != b); h < d;) A = n[h++], b.X[(506832829 * A & 4294967295) >>> b.Mb] = A;
										A = d, t(!(y >>> (C = b).Xa)), n[A] = C.X[y], y = !0
									}
									y || t(l.h == w(l))
								}
								if (e.Pb && l.h && d < a) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && L(e.s.vb, e.s.Wa);
								else {
									if (l.h) break e;
									null != s && s(e, u > o ? o : u), e.a = 0, e.$ = d - r
								}
								return 1
							}
							return e.a = 3, 0
						}

						function $e(e) {
							t(null != e), e.vc = null, e.yc = null, e.Ya = null;
							var n = e.Wa;
							null != n && (n.X = null), e.vb = null, t(null != e)
						}

						function ke() {
							var t = new sn;
							return null == t ? null : (t.a = 0, t.xb = _i, ne("Predictor", "VP8LPredictors"), ne("Predictor", "VP8LPredictors_C"), ne("PredictorAdd", "VP8LPredictorsAdd"), ne("PredictorAdd", "VP8LPredictorsAdd_C"), Gn = Q, Zn = q, er = K, tr = X, nr = J, rr = Z, ir = ee, e.VP8LMapColor32b = Wn, e.VP8LMapColor8b = Xn, t)
						}

						function Oe(e, n, r, s, u) {
							var c = 1,
								d = [e],
								p = [n],
								_ = s.m,
								m = s.s,
								b = null,
								g = 0;
							e: for (;;) {
								if (r)
									for (; c && v(_, 1);) {
										var y = d,
											A = p,
											w = s,
											C = 1,
											$ = w.m,
											k = w.gc[w.ab],
											O = v($, 2);
										if (w.Oc & 1 << O) c = 0;
										else {
											switch (w.Oc |= 1 << O, k.hc = O, k.Ea = y[0], k.nc = A[0], k.K = [null], ++w.ab, t(4 >= w.ab), O) {
												case 0:
												case 1:
													k.b = v($, 3) + 2, C = Oe(N(k.Ea, k.b), N(k.nc, k.b), 0, w, k.K), k.K = k.K[0];
													break;
												case 3:
													var x, P = v($, 8) + 1,
														M = 16 < P ? 0 : 4 < P ? 1 : 2 < P ? 2 : 3;
													if (y[0] = N(k.Ea, M), k.b = M, x = C = Oe(P, 1, 0, w, k.K)) {
														var L, D = P,
															B = k,
															F = 1 << (8 >> B.b),
															U = a(F);
														if (null == U) x = 0;
														else {
															var j = B.K[0],
																H = B.w;
															for (U[0] = B.K[0][0], L = 1; L < 1 * D; ++L) U[L] = R(j[H + L], U[L - 1]);
															for (; L < 4 * F; ++L) U[L] = 0;
															B.K[0] = null, B.K[0] = U, x = 1
														}
													}
													C = x;
													break;
												case 2:
													break;
												default:
													t(0)
											}
											c = C
										}
									}
								if (d = d[0], p = p[0], c && v(_, 1) && !(c = 1 <= (g = v(_, 4)) && 11 >= g)) {
									s.a = 3;
									break e
								}
								var Y;
								if (Y = c) t: {
									var V, z, Q, G = s,
										q = d,
										W = p,
										K = g,
										X = r,
										J = G.m,
										Z = G.s,
										ee = [null],
										te = 1,
										ne = 0,
										re = Zr[K];n: for (;;) {
										if (X && v(J, 1)) {
											var ie = v(J, 3) + 2,
												ae = N(q, ie),
												oe = N(W, ie),
												se = ae * oe;
											if (!Oe(ae, oe, 0, G, ee)) break n;
											for (ee = ee[0], Z.xc = ie, V = 0; V < se; ++V) {
												var ue = ee[V] >> 8 & 65535;
												ee[V] = ue, ue >= te && (te = ue + 1)
											}
										}
										if (J.h) break n;
										for (z = 0; 5 > z; ++z) {
											var ce = Wr[z];
											!z && 0 < K && (ce += 1 << K), ne < ce && (ne = ce)
										}
										var le = o(te * re, f),
											fe = te,
											de = o(fe, h);
										if (null == de) var he = null;
										else t(65536 >= fe), he = de;
										var pe = a(ne);
										if (null == he || null == pe || null == le) {
											G.a = 1;
											break n
										}
										var _e = le;
										for (V = Q = 0; V < te; ++V) {
											var me = he[V],
												be = me.G,
												ge = me.H,
												ye = 0,
												Ae = 1,
												Se = 0;
											for (z = 0; 5 > z; ++z) {
												ce = Wr[z], be[z] = _e, ge[z] = Q, !z && 0 < K && (ce += 1 << K);
												r: {
													var we, Ee = ce,
														Te = G,
														ke = pe,
														xe = _e,
														Pe = Q,
														Me = 0,
														Ie = Te.m,
														Le = v(Ie, 1);
													if (i(ke, 0, 0, Ee), Le) {
														var De = v(Ie, 1) + 1,
															Be = v(Ie, 1),
															Ne = v(Ie, 0 == Be ? 1 : 8);
														ke[Ne] = 1, 2 == De && (ke[Ne = v(Ie, 8)] = 1);
														var Re = 1
													} else {
														var Fe = a(19),
															Ue = v(Ie, 4) + 4;
														if (19 < Ue) {
															Te.a = 3;
															var je = 0;
															break r
														}
														for (we = 0; we < Ue; ++we) Fe[Xr[we]] = v(Ie, 3);
														var He = void 0,
															Ye = void 0,
															Ve = Te,
															ze = Fe,
															Qe = Ee,
															Ge = ke,
															qe = 0,
															We = Ve.m,
															Ke = 8,
															Xe = o(128, f);
														i: for (; l(Xe, 0, 7, ze, 19);) {
															if (v(We, 1)) {
																var Je = 2 + 2 * v(We, 3);
																if ((He = 2 + v(We, Je)) > Qe) break i
															} else He = Qe;
															for (Ye = 0; Ye < Qe && He--;) {
																T(We);
																var Ze = Xe[0 + (127 & S(We))];
																E(We, We.u + Ze.g);
																var et = Ze.value;
																if (16 > et) Ge[Ye++] = et, 0 != et && (Ke = et);
																else {
																	var tt = 16 == et,
																		nt = et - 16,
																		rt = qr[nt],
																		it = v(We, Gr[nt]) + rt;
																	if (Ye + it > Qe) break i;
																	for (var at = tt ? Ke : 0; 0 < it--;) Ge[Ye++] = at
																}
															}
															qe = 1;
															break i
														}
														qe || (Ve.a = 3), Re = qe
													}(Re = Re && !Ie.h) && (Me = l(xe, Pe, 8, ke, Ee)),
													Re && 0 != Me ? je = Me : (Te.a = 3, je = 0)
												}
												if (0 == je) break n;
												if (Ae && 1 == Kr[z] && (Ae = 0 == _e[Q].g), ye += _e[Q].g, Q += je, 3 >= z) {
													var ot, st = pe[0];
													for (ot = 1; ot < ce; ++ot) pe[ot] > st && (st = pe[ot]);
													Se += st
												}
											}
											if (me.nd = Ae, me.Qb = 0, Ae && (me.qb = (be[3][ge[3] + 0].value << 24 | be[1][ge[1] + 0].value << 16 | be[2][ge[2] + 0].value) >>> 0, 0 == ye && 256 > be[0][ge[0] + 0].value && (me.Qb = 1, me.qb += be[0][ge[0] + 0].value << 8)), me.jc = !me.Qb && 6 > Se, me.jc) {
												var ut, ct = me;
												for (ut = 0; ut < Fn; ++ut) {
													var lt = ut,
														ft = ct.pd[lt],
														dt = ct.G[0][ct.H[0] + lt];
													256 <= dt.value ? (ft.g = dt.g + 256, ft.value = dt.value) : (ft.g = 0, ft.value = 0, lt >>= ve(dt, 8, ft), lt >>= ve(ct.G[1][ct.H[1] + lt], 16, ft), lt >>= ve(ct.G[2][ct.H[2] + lt], 0, ft), ve(ct.G[3][ct.H[3] + lt], 24, ft))
												}
											}
										}
										Z.vc = ee, Z.Wb = te, Z.Ya = he, Z.yc = le, Y = 1;
										break t
									}
									Y = 0
								}
								if (!(c = Y)) {
									s.a = 3;
									break e
								}
								if (0 < g) {
									if (m.ua = 1 << g, !I(m.Wa, g)) {
										s.a = 1, c = 0;
										break e
									}
								} else m.ua = 0;
								var ht = s,
									pt = d,
									_t = p,
									mt = ht.s,
									bt = mt.xc;
								if (ht.c = pt, ht.i = _t, mt.md = N(pt, bt), mt.wc = 0 == bt ? -1 : (1 << bt) - 1, r) {
									s.xb = pi;
									break e
								}
								if (null == (b = a(d * p))) {
									s.a = 1, c = 0;
									break e
								}
								c = (c = Ce(s, b, 0, d, p, p, null)) && !_.h;
								break e
							}
							return c ? (null != u ? u[0] = b : (t(null == b), t(r)), s.$ = 0, r || $e(m)) : $e(m), c
						}

						function xe(e, n) {
							var r = e.c * e.i,
								i = r + n + 16 * n;
							return t(e.c <= n), e.V = a(i), null == e.V ? (e.Ta = null, e.Ua = 0, e.a = 1, 0) : (e.Ta = e.V, e.Ua = e.Ba + r + n, 1)
						}

						function Pe(e, n) {
							var r = e.C,
								i = n - r,
								a = e.V,
								o = e.Ba + e.c * r;
							for (t(n <= e.l.o); 0 < i;) {
								var s = 16 < i ? 16 : i,
									u = e.l.ma,
									c = e.l.width,
									l = c * s,
									f = u.ca,
									d = u.tb + c * r,
									h = e.Ta,
									p = e.Ua;
								Ae(e, s, a, o), Cr(h, p, f, d, l), Ee(u, r, r + s, f, d, c), i -= s, a += s * e.c, r += s
							}
							t(r == n), e.C = e.Ma = n
						}

						function Me() {
							this.ub = this.yd = this.td = this.Rb = 0
						}

						function Ie() {
							this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
						}

						function Le() {
							this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4)
						}

						function De() {
							this.Yb = function() {
								var e = [];
								return function e(t, n, r) {
									for (var i = r[n], a = 0; a < i && (t.push(r.length > n + 1 ? [] : 0), !(r.length < n + 1)); a++) e(t[a], n + 1, r)
								}(e, 0, [3, 11]), e
							}()
						}

						function Be() {
							this.jb = a(3), this.Wc = s([4, 8], De), this.Xc = s([4, 17], De)
						}

						function Ne() {
							this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4)
						}

						function Re() {
							this.ld = this.La = this.dd = this.tc = 0
						}

						function Fe() {
							this.Na = this.la = 0
						}

						function Ue() {
							this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
						}

						function je() {
							this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
						}

						function He() {
							this.uc = this.M = this.Nb = 0, this.wa = Array(new Re), this.Y = 0, this.ya = Array(new je), this.aa = 0, this.l = new Qe
						}

						function Ye() {
							this.y = a(16), this.f = a(8), this.ea = a(8)
						}

						function Ve() {
							this.cb = this.a = 0, this.sc = "", this.m = new y, this.Od = new Me, this.Kc = new Ie, this.ed = new Ne, this.Qa = new Le, this.Ic = this.$c = this.Aa = 0, this.D = new He, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, y), this.ia = 0, this.pb = o(4, Ue), this.Pa = new Be, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ye), this.Hd = 0, this.rb = Array(new Fe), this.sb = 0, this.wa = Array(new Re), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new je), this.L = this.aa = 0, this.gd = s([4, 2], Re), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
						}

						function ze(e, t) {
							return 0 > e ? 0 : e > t ? t : e
						}

						function Qe() {
							this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
						}

						function Ge() {
							var e = new Ve;
							return null != e && (e.a = 0, e.sc = "OK", e.cb = 0, e.Xb = 0, ri || (ri = Xe)), e
						}

						function qe(e, t, n) {
							return 0 == e.a && (e.a = t, e.sc = n, e.cb = 0), 0
						}

						function We(e, t, n) {
							return 3 <= n && 157 == e[t + 0] && 1 == e[t + 1] && 42 == e[t + 2]
						}

						function Ke(e, n) {
							if (null == e) return 0;
							if (e.a = 0, e.sc = "OK", null == n) return qe(e, 2, "null VP8Io passed to VP8GetHeaders()");
							var r = n.data,
								a = n.w,
								o = n.ha;
							if (4 > o) return qe(e, 7, "Truncated header.");
							var s = r[a + 0] | r[a + 1] << 8 | r[a + 2] << 16,
								u = e.Od;
							if (u.Rb = !(1 & s), u.td = s >> 1 & 7, u.yd = s >> 4 & 1, u.ub = s >> 5, 3 < u.td) return qe(e, 3, "Incorrect keyframe parameters.");
							if (!u.yd) return qe(e, 4, "Frame not displayable.");
							a += 3, o -= 3;
							var c = e.Kc;
							if (u.Rb) {
								if (7 > o) return qe(e, 7, "cannot parse picture header");
								if (!We(r, a, o)) return qe(e, 3, "Bad code word");
								c.c = 16383 & (r[a + 4] << 8 | r[a + 3]), c.Td = r[a + 4] >> 6, c.i = 16383 & (r[a + 6] << 8 | r[a + 5]), c.Ud = r[a + 6] >> 6, a += 7, o -= 7, e.za = c.c + 15 >> 4, e.Ub = c.i + 15 >> 4, n.width = c.c, n.height = c.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, i((s = e.Pa).jb, 0, 255, s.jb.length), t(null != (s = e.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb)
							}
							if (u.ub > o) return qe(e, 7, "bad partition length");
							p(s = e.m, r, a, u.ub), a += u.ub, o -= u.ub, u.Rb && (c.Ld = $(s), c.Kd = $(s)), c = e.Qa;
							var l, f = e.Pa;
							if (t(null != s), t(null != c), c.Cb = $(s), c.Cb) {
								if (c.Bb = $(s), $(s)) {
									for (c.Fb = $(s), l = 0; 4 > l; ++l) c.Zb[l] = $(s) ? m(s, 7) : 0;
									for (l = 0; 4 > l; ++l) c.Lb[l] = $(s) ? m(s, 6) : 0
								}
								if (c.Bb)
									for (l = 0; 3 > l; ++l) f.jb[l] = $(s) ? _(s, 8) : 255
							} else c.Bb = 0;
							if (s.Ka) return qe(e, 3, "cannot parse segment header");
							if ((c = e.ed).zd = $(s), c.Tb = _(s, 6), c.wb = _(s, 3), c.Pc = $(s), c.Pc && $(s)) {
								for (f = 0; 4 > f; ++f) $(s) && (c.vd[f] = m(s, 6));
								for (f = 0; 4 > f; ++f) $(s) && (c.od[f] = m(s, 6))
							}
							if (e.L = 0 == c.Tb ? 0 : c.zd ? 1 : 2, s.Ka) return qe(e, 3, "cannot parse filter header");
							var d = o;
							if (o = l = a, a = l + d, c = d, e.Xb = (1 << _(e.m, 2)) - 1, d < 3 * (f = e.Xb)) r = 7;
							else {
								for (l += 3 * f, c -= 3 * f, d = 0; d < f; ++d) {
									var h = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16;
									h > c && (h = c), p(e.Jc[+d], r, l, h), l += h, c -= h, o += 3
								}
								p(e.Jc[+f], r, l, c), r = l < a ? 0 : 5
							}
							if (0 != r) return qe(e, r, "cannot parse partitions");
							for (r = _(l = e.m, 7), o = $(l) ? m(l, 4) : 0, a = $(l) ? m(l, 4) : 0, c = $(l) ? m(l, 4) : 0, f = $(l) ? m(l, 4) : 0, l = $(l) ? m(l, 4) : 0, d = e.Qa, h = 0; 4 > h; ++h) {
								if (d.Cb) {
									var b = d.Zb[h];
									d.Fb || (b += r)
								} else {
									if (0 < h) {
										e.pb[h] = e.pb[0];
										continue
									}
									b = r
								}
								var g = e.pb[h];
								g.Sc[0] = ti[ze(b + o, 127)], g.Sc[1] = ni[ze(b + 0, 127)], g.Eb[0] = 2 * ti[ze(b + a, 127)], g.Eb[1] = 101581 * ni[ze(b + c, 127)] >> 16, 8 > g.Eb[1] && (g.Eb[1] = 8), g.Qc[0] = ti[ze(b + f, 117)], g.Qc[1] = ni[ze(b + l, 127)], g.lc = b + l
							}
							if (!u.Rb) return qe(e, 4, "Not a key frame.");
							for ($(s), u = e.Pa, r = 0; 4 > r; ++r) {
								for (o = 0; 8 > o; ++o)
									for (a = 0; 3 > a; ++a)
										for (c = 0; 11 > c; ++c) f = k(s, ci[r][o][a][c]) ? _(s, 8) : si[r][o][a][c], u.Wc[r][o].Yb[a][c] = f;
								for (o = 0; 17 > o; ++o) u.Xc[r][o] = u.Wc[r][li[o]]
							}
							return e.kc = $(s), e.kc && (e.Bd = _(s, 8)), e.cb = 1
						}

						function Xe(e, t, n, r, i, a, o) {
							var s = t[i].Yb[n];
							for (n = 0; 16 > i; ++i) {
								if (!k(e, s[n + 0])) return i;
								for (; !k(e, s[n + 1]);)
									if (s = t[++i].Yb[0], n = 0, 16 == i) return 16;
								var u = t[i + 1].Yb;
								if (k(e, s[n + 2])) {
									var c = e,
										l = 0;
									if (k(c, (d = s)[(f = n) + 3]))
										if (k(c, d[f + 6])) {
											for (s = 0, f = 2 * (l = k(c, d[f + 8])) + (d = k(c, d[f + 9 + l])), l = 0, d = ii[f]; d[s]; ++s) l += l + k(c, d[s]);
											l += 3 + (8 << f)
										} else k(c, d[f + 7]) ? (l = 7 + 2 * k(c, 165), l += k(c, 145)) : l = 5 + k(c, 159);
									else l = k(c, d[f + 4]) ? 3 + k(c, d[f + 5]) : 2;
									s = u[2]
								} else l = 1, s = u[1];
								u = o + ai[i], 0 > (c = e).b && C(c);
								var f, d = c.b,
									h = (f = c.Ca >> 1) - (c.I >> d) >> 31;
								--c.b, c.Ca += h, c.Ca |= 1, c.I -= (f + 1 & h) << d, a[u] = ((l ^ h) - h) * r[(0 < i) + 0]
							}
							return 16
						}

						function Je(e) {
							var t = e.rb[e.sb - 1];
							t.la = 0, t.Na = 0, i(e.zc, 0, 0, e.zc.length), e.ja = 0
						}

						function Ze(e, n) {
							if (null == e) return 0;
							if (null == n) return qe(e, 2, "NULL VP8Io parameter in VP8Decode().");
							if (!e.cb && !Ke(e, n)) return 0;
							if (t(e.cb), null == n.ac || n.ac(n)) {
								n.ob && (e.L = 0);
								var s = Fi[e.L];
								if (2 == e.L ? (e.yb = 0, e.zb = 0) : (e.yb = n.v - s >> 4, e.zb = n.j - s >> 4, 0 > e.yb && (e.yb = 0), 0 > e.zb && (e.zb = 0)), e.Va = n.o + 15 + s >> 4, e.Hb = n.va + 15 + s >> 4, e.Hb > e.za && (e.Hb = e.za), e.Va > e.Ub && (e.Va = e.Ub), 0 < e.L) {
									var u = e.ed;
									for (s = 0; 4 > s; ++s) {
										var c;
										if (e.Qa.Cb) {
											var l = e.Qa.Lb[s];
											e.Qa.Fb || (l += u.Tb)
										} else l = u.Tb;
										for (c = 0; 1 >= c; ++c) {
											var f = e.gd[s][c],
												d = l;
											if (u.Pc && (d += u.vd[0], c && (d += u.od[0])), 0 < (d = 0 > d ? 0 : 63 < d ? 63 : d)) {
												var h = d;
												0 < u.wb && (h = 4 < u.wb ? h >> 2 : h >> 1) > 9 - u.wb && (h = 9 - u.wb), 1 > h && (h = 1), f.dd = h, f.tc = 2 * d + h, f.ld = 40 <= d ? 2 : 15 <= d ? 1 : 0
											} else f.tc = 0;
											f.La = c
										}
									}
								}
								s = 0
							} else qe(e, 6, "Frame setup failed"), s = e.a;
							if (s = 0 == s) {
								if (s) {
									e.$c = 0, 0 < e.Aa || (e.Ic = ji);
									e: {
										s = e.Ic,
										u = 4 * (h = e.za);
										var p = 32 * h,
											_ = h + 1,
											m = 0 < e.L ? h * (0 < e.Aa ? 2 : 1) : 0,
											b = (2 == e.Aa ? 2 : 1) * h;
										if ((f = u + 832 + (c = 3 * (16 * s + Fi[e.L]) / 2 * p) + (l = null != e.Fa && 0 < e.Fa.length ? e.Kc.c * e.Kc.i : 0)) != f) s = 0;
										else {
											if (f > e.Vb) {
												if (e.Vb = 0, e.Ec = a(f), e.Fc = 0, null == e.Ec) {
													s = qe(e, 1, "no memory during frame initialization.");
													break e
												}
												e.Vb = f
											}
											f = e.Ec, d = e.Fc, e.Ac = f, e.Bc = d, d += u, e.Gd = o(p, Ye), e.Hd = 0, e.rb = o(_ + 1, Fe), e.sb = 1, e.wa = m ? o(m, Re) : null, e.Y = 0, e.D.Nb = 0, e.D.wa = e.wa, e.D.Y = e.Y, 0 < e.Aa && (e.D.Y += h), t(!0), e.oc = f, e.pc = d, d += 832, e.ya = o(b, je), e.aa = 0, e.D.ya = e.ya, e.D.aa = e.aa, 2 == e.Aa && (e.D.aa += h), e.R = 16 * h, e.B = 8 * h, h = (p = Fi[e.L]) * e.R, p = p / 2 * e.B, e.sa = f, e.ta = d + h, e.qa = e.sa, e.ra = e.ta + 16 * s * e.R + p, e.Ha = e.qa, e.Ia = e.ra + 8 * s * e.B + p, e.$c = 0, d += c, e.mb = l ? f : null, e.nb = l ? d : null, t(d + l <= e.Fc + e.Vb), Je(e), i(e.Ac, e.Bc, 0, u), s = 1
										}
									}
									if (s) {
										if (n.ka = 0, n.y = e.sa, n.O = e.ta, n.f = e.qa, n.N = e.ra, n.ea = e.Ha, n.Vd = e.Ia, n.fa = e.R, n.Rc = e.B, n.F = null, n.J = 0, !Pr) {
											for (s = -255; 255 >= s; ++s) $r[255 + s] = 0 > s ? -s : s;
											for (s = -1020; 1020 >= s; ++s) kr[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
											for (s = -112; 112 >= s; ++s) Or[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
											for (s = -255; 510 >= s; ++s) xr[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
											Pr = 1
										}
										ar = ct, or = at, ur = ot, cr = st, lr = ut, sr = it, fr = qt, dr = Wt, hr = Jt, pr = Zt, _r = Kt, mr = Xt, br = en, gr = tn, vr = Ht, yr = Yt, Ar = Vt, Sr = zt, di[0] = Et, di[1] = ft, di[2] = St, di[3] = wt, di[4] = Tt, di[5] = $t, di[6] = Ct, di[7] = kt, di[8] = xt, di[9] = Ot, fi[0] = bt, fi[1] = ht, fi[2] = pt, fi[3] = _t, fi[4] = gt, fi[5] = vt, fi[6] = yt, hi[0] = Lt, hi[1] = dt, hi[2] = Pt, hi[3] = Mt, hi[4] = Bt, hi[5] = Dt, hi[6] = Nt, s = 1
									} else s = 0
								}
								s && (s = function(e, n) {
									for (e.M = 0; e.M < e.Va; ++e.M) {
										var o, s = e.Jc[e.M & e.Xb],
											u = e.m,
											c = e;
										for (o = 0; o < c.za; ++o) {
											var l = u,
												f = c,
												d = f.Ac,
												h = f.Bc + 4 * o,
												p = f.zc,
												_ = f.ya[f.aa + o];
											if (f.Qa.Bb ? _.$b = k(l, f.Pa.jb[0]) ? 2 + k(l, f.Pa.jb[2]) : k(l, f.Pa.jb[1]) : _.$b = 0, f.kc && (_.Ad = k(l, f.Bd)), _.Za = !k(l, 145) + 0, _.Za) {
												var m = _.Ob,
													b = 0;
												for (f = 0; 4 > f; ++f) {
													var g, v = p[0 + f];
													for (g = 0; 4 > g; ++g) {
														v = ui[d[h + g]][v];
														for (var y = oi[k(l, v[0])]; 0 < y;) y = oi[2 * y + k(l, v[y])];
														v = -y, d[h + g] = v
													}
													r(m, b, d, h, 4), b += 4, p[0 + f] = v
												}
											} else v = k(l, 156) ? k(l, 128) ? 1 : 3 : k(l, 163) ? 2 : 0, _.Ob[0] = v, i(d, h, v, 4), i(p, 0, v, 4);
											_.Dd = k(l, 142) ? k(l, 114) ? k(l, 183) ? 1 : 3 : 2 : 0
										}
										if (c.m.Ka) return qe(e, 7, "Premature end-of-partition0 encountered.");
										for (; e.ja < e.za; ++e.ja) {
											if (c = s, l = (u = e).rb[u.sb - 1], d = u.rb[u.sb + u.ja], o = u.ya[u.aa + u.ja], h = u.kc ? o.Ad : 0) l.la = d.la = 0, o.Za || (l.Na = d.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
											else {
												var A, S;
												if (l = d, d = c, h = u.Pa.Xc, p = u.ya[u.aa + u.ja], _ = u.pb[p.$b], f = p.ad, m = 0, b = u.rb[u.sb - 1], v = g = 0, i(f, m, 0, 384), p.Za) var w = 0,
													E = h[3];
												else {
													y = a(16);
													var T = l.Na + b.Na;
													if (T = ri(d, h[1], T, _.Eb, 0, y, 0), l.Na = b.Na = (0 < T) + 0, 1 < T) ar(y, 0, f, m);
													else {
														var C = y[0] + 3 >> 3;
														for (y = 0; 256 > y; y += 16) f[m + y] = C
													}
													w = 1, E = h[0]
												}
												var $ = 15 & l.la,
													O = 15 & b.la;
												for (y = 0; 4 > y; ++y) {
													var x = 1 & O;
													for (C = S = 0; 4 > C; ++C) $ = $ >> 1 | (x = (T = ri(d, E, T = x + (1 & $), _.Sc, w, f, m)) > w) << 7, S = S << 2 | (3 < T ? 3 : 1 < T ? 2 : 0 != f[m + 0]), m += 16;
													$ >>= 4, O = O >> 1 | x << 7, g = (g << 8 | S) >>> 0
												}
												for (E = $, w = O >> 4, A = 0; 4 > A; A += 2) {
													for (S = 0, $ = l.la >> 4 + A, O = b.la >> 4 + A, y = 0; 2 > y; ++y) {
														for (x = 1 & O, C = 0; 2 > C; ++C) T = x + (1 & $), $ = $ >> 1 | (x = 0 < (T = ri(d, h[2], T, _.Qc, 0, f, m))) << 3, S = S << 2 | (3 < T ? 3 : 1 < T ? 2 : 0 != f[m + 0]), m += 16;
														$ >>= 2, O = O >> 1 | x << 5
													}
													v |= S << 4 * A, E |= $ << 4 << A, w |= (240 & O) << A
												}
												l.la = E, b.la = w, p.Hc = g, p.Gc = v, p.ia = 43690 & v ? 0 : _.ia, h = !(g | v)
											}
											if (0 < u.L && (u.wa[u.Y + u.ja] = u.gd[o.$b][o.Za], u.wa[u.Y + u.ja].La |= !h), c.Ka) return qe(e, 7, "Premature end-of-file encountered.")
										}
										if (Je(e), u = n, c = 1, o = (s = e).D, l = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) e: {
											if (o.M = s.M, o.uc = l, Ln(s, o), c = 1, o = (S = s.D).Nb, l = (v = Fi[s.L]) * s.R, d = v / 2 * s.B, y = 16 * o * s.R, C = 8 * o * s.B, h = s.sa, p = s.ta - l + y, _ = s.qa, f = s.ra - d + C, m = s.Ha, b = s.Ia - d + C, O = 0 == ($ = S.M), g = $ >= s.Va - 1, 2 == s.Aa && Ln(s, S), S.uc)
												for (x = (T = s).D.M, t(T.D.uc), S = T.yb; S < T.Hb; ++S) {
													w = S, E = x;
													var P = (M = (j = T).D).Nb;
													A = j.R;
													var M = M.wa[M.Y + w],
														I = j.sa,
														L = j.ta + 16 * P * A + 16 * w,
														D = M.dd,
														B = M.tc;
													if (0 != B)
														if (t(3 <= B), 1 == j.L) 0 < w && yr(I, L, A, B + 4), M.La && Sr(I, L, A, B), 0 < E && vr(I, L, A, B + 4), M.La && Ar(I, L, A, B);
														else {
															var N = j.B,
																R = j.qa,
																F = j.ra + 8 * P * N + 8 * w,
																U = j.Ha,
																j = j.Ia + 8 * P * N + 8 * w;
															P = M.ld, 0 < w && (dr(I, L, A, B + 4, D, P), pr(R, F, U, j, N, B + 4, D, P)), M.La && (mr(I, L, A, B, D, P), gr(R, F, U, j, N, B, D, P)), 0 < E && (fr(I, L, A, B + 4, D, P), hr(R, F, U, j, N, B + 4, D, P)), M.La && (_r(I, L, A, B, D, P), br(R, F, U, j, N, B, D, P))
														}
												}
											if (s.ia && alert("todo:DitherRow"), null != u.put) {
												if (S = 16 * $, $ = 16 * ($ + 1), O ? (u.y = s.sa, u.O = s.ta + y, u.f = s.qa, u.N = s.ra + C, u.ea = s.Ha, u.W = s.Ia + C) : (S -= v, u.y = h, u.O = p, u.f = _, u.N = f, u.ea = m, u.W = b), g || ($ -= v), $ > u.o && ($ = u.o), u.F = null, u.J = null, null != s.Fa && 0 < s.Fa.length && S < $ && (u.J = dn(s, u, S, $ - S), u.F = s.mb, null == u.F && 0 == u.F.length)) {
													c = qe(s, 3, "Could not decode alpha data.");
													break e
												}
												S < u.j && (v = u.j - S, S = u.j, t(!(1 & v)), u.O += s.R * v, u.N += s.B * (v >> 1), u.W += s.B * (v >> 1), null != u.F && (u.J += u.width * v)), S < $ && (u.O += u.v, u.N += u.v >> 1, u.W += u.v >> 1, null != u.F && (u.J += u.v), u.ka = S - u.j, u.U = u.va - u.v, u.T = $ - S, c = u.put(u))
											}
											o + 1 != s.Ic || g || (r(s.sa, s.ta - l, h, p + 16 * s.R, l), r(s.qa, s.ra - d, _, f + 8 * s.B, d), r(s.Ha, s.Ia - d, m, b + 8 * s.B, d))
										}
										if (!c) return qe(e, 6, "Output aborted.")
									}
									return 1
								}(e, n)), null != n.bc && n.bc(n), s &= 1
							}
							return s ? (e.cb = 0, s) : 0
						}

						function et(e, t, n, r, i) {
							i = e[t + n + 32 * r] + (i >> 3), e[t + n + 32 * r] = -256 & i ? 0 > i ? 0 : 255 : i
						}

						function tt(e, t, n, r, i, a) {
							et(e, t, 0, n, r + i), et(e, t, 1, n, r + a), et(e, t, 2, n, r - a), et(e, t, 3, n, r - i)
						}

						function nt(e) {
							return (20091 * e >> 16) + e
						}

						function rt(e, t, n, r) {
							var i, o = 0,
								s = a(16);
							for (i = 0; 4 > i; ++i) {
								var u = e[t + 0] + e[t + 8],
									c = e[t + 0] - e[t + 8],
									l = (35468 * e[t + 4] >> 16) - nt(e[t + 12]),
									f = nt(e[t + 4]) + (35468 * e[t + 12] >> 16);
								s[o + 0] = u + f, s[o + 1] = c + l, s[o + 2] = c - l, s[o + 3] = u - f, o += 4, t++
							}
							for (i = o = 0; 4 > i; ++i) u = (e = s[o + 0] + 4) + s[o + 8], c = e - s[o + 8], l = (35468 * s[o + 4] >> 16) - nt(s[o + 12]), et(n, r, 0, 0, u + (f = nt(s[o + 4]) + (35468 * s[o + 12] >> 16))), et(n, r, 1, 0, c + l), et(n, r, 2, 0, c - l), et(n, r, 3, 0, u - f), o++, r += 32
						}

						function it(e, t, n, r) {
							var i = e[t + 0] + 4,
								a = 35468 * e[t + 4] >> 16,
								o = nt(e[t + 4]),
								s = 35468 * e[t + 1] >> 16;
							tt(n, r, 0, i + o, e = nt(e[t + 1]), s), tt(n, r, 1, i + a, e, s), tt(n, r, 2, i - a, e, s), tt(n, r, 3, i - o, e, s)
						}

						function at(e, t, n, r, i) {
							rt(e, t, n, r), i && rt(e, t + 16, n, r + 4)
						}

						function ot(e, t, n, r) {
							or(e, t + 0, n, r, 1), or(e, t + 32, n, r + 128, 1)
						}

						function st(e, t, n, r) {
							var i;
							for (e = e[t + 0] + 4, i = 0; 4 > i; ++i)
								for (t = 0; 4 > t; ++t) et(n, r, t, i, e)
						}

						function ut(e, t, n, r) {
							e[t + 0] && cr(e, t + 0, n, r), e[t + 16] && cr(e, t + 16, n, r + 4), e[t + 32] && cr(e, t + 32, n, r + 128), e[t + 48] && cr(e, t + 48, n, r + 128 + 4)
						}

						function ct(e, t, n, r) {
							var i, o = a(16);
							for (i = 0; 4 > i; ++i) {
								var s = e[t + 0 + i] + e[t + 12 + i],
									u = e[t + 4 + i] + e[t + 8 + i],
									c = e[t + 4 + i] - e[t + 8 + i],
									l = e[t + 0 + i] - e[t + 12 + i];
								o[0 + i] = s + u, o[8 + i] = s - u, o[4 + i] = l + c, o[12 + i] = l - c
							}
							for (i = 0; 4 > i; ++i) s = (e = o[0 + 4 * i] + 3) + o[3 + 4 * i], u = o[1 + 4 * i] + o[2 + 4 * i], c = o[1 + 4 * i] - o[2 + 4 * i], l = e - o[3 + 4 * i], n[r + 0] = s + u >> 3, n[r + 16] = l + c >> 3, n[r + 32] = s - u >> 3, n[r + 48] = l - c >> 3, r += 64
						}

						function lt(e, t, n) {
							var r, i = t - 32,
								a = Lr,
								o = 255 - e[i - 1];
							for (r = 0; r < n; ++r) {
								var s, u = a,
									c = o + e[t - 1];
								for (s = 0; s < n; ++s) e[t + s] = u[c + e[i + s]];
								t += 32
							}
						}

						function ft(e, t) {
							lt(e, t, 4)
						}

						function dt(e, t) {
							lt(e, t, 8)
						}

						function ht(e, t) {
							lt(e, t, 16)
						}

						function pt(e, t) {
							var n;
							for (n = 0; 16 > n; ++n) r(e, t + 32 * n, e, t - 32, 16)
						}

						function _t(e, t) {
							var n;
							for (n = 16; 0 < n; --n) i(e, t, e[t - 1], 16), t += 32
						}

						function mt(e, t, n) {
							var r;
							for (r = 0; 16 > r; ++r) i(t, n + 32 * r, e, 16)
						}

						function bt(e, t) {
							var n, r = 16;
							for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n] + e[t + n - 32];
							mt(r >> 5, e, t)
						}

						function gt(e, t) {
							var n, r = 8;
							for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n];
							mt(r >> 4, e, t)
						}

						function vt(e, t) {
							var n, r = 8;
							for (n = 0; 16 > n; ++n) r += e[t + n - 32];
							mt(r >> 4, e, t)
						}

						function yt(e, t) {
							mt(128, e, t)
						}

						function At(e, t, n) {
							return e + 2 * t + n + 2 >> 2
						}

						function St(e, t) {
							var n, i = t - 32;
							for (i = new Uint8Array([At(e[i - 1], e[i + 0], e[i + 1]), At(e[i + 0], e[i + 1], e[i + 2]), At(e[i + 1], e[i + 2], e[i + 3]), At(e[i + 2], e[i + 3], e[i + 4])]), n = 0; 4 > n; ++n) r(e, t + 32 * n, i, 0, i.length)
						}

						function wt(e, t) {
							var n = e[t - 1],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96];
							O(e, t + 0, 16843009 * At(e[t - 1 - 32], n, r)), O(e, t + 32, 16843009 * At(n, r, i)), O(e, t + 64, 16843009 * At(r, i, a)), O(e, t + 96, 16843009 * At(i, a, a))
						}

						function Et(e, t) {
							var n, r = 4;
							for (n = 0; 4 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
							for (r >>= 3, n = 0; 4 > n; ++n) i(e, t + 32 * n, r, 4)
						}

						function Tt(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 - 32],
								o = e[t + 0 - 32],
								s = e[t + 1 - 32],
								u = e[t + 2 - 32],
								c = e[t + 3 - 32];
							e[t + 0 + 96] = At(r, i, e[t - 1 + 96]), e[t + 1 + 96] = e[t + 0 + 64] = At(n, r, i), e[t + 2 + 96] = e[t + 1 + 64] = e[t + 0 + 32] = At(a, n, r), e[t + 3 + 96] = e[t + 2 + 64] = e[t + 1 + 32] = e[t + 0 + 0] = At(o, a, n), e[t + 3 + 64] = e[t + 2 + 32] = e[t + 1 + 0] = At(s, o, a), e[t + 3 + 32] = e[t + 2 + 0] = At(u, s, o), e[t + 3 + 0] = At(c, u, s)
						}

						function Ct(e, t) {
							var n = e[t + 1 - 32],
								r = e[t + 2 - 32],
								i = e[t + 3 - 32],
								a = e[t + 4 - 32],
								o = e[t + 5 - 32],
								s = e[t + 6 - 32],
								u = e[t + 7 - 32];
							e[t + 0 + 0] = At(e[t + 0 - 32], n, r), e[t + 1 + 0] = e[t + 0 + 32] = At(n, r, i), e[t + 2 + 0] = e[t + 1 + 32] = e[t + 0 + 64] = At(r, i, a), e[t + 3 + 0] = e[t + 2 + 32] = e[t + 1 + 64] = e[t + 0 + 96] = At(i, a, o), e[t + 3 + 32] = e[t + 2 + 64] = e[t + 1 + 96] = At(a, o, s), e[t + 3 + 64] = e[t + 2 + 96] = At(o, s, u), e[t + 3 + 96] = At(s, u, u)
						}

						function $t(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 - 32],
								o = e[t + 0 - 32],
								s = e[t + 1 - 32],
								u = e[t + 2 - 32],
								c = e[t + 3 - 32];
							e[t + 0 + 0] = e[t + 1 + 64] = a + o + 1 >> 1, e[t + 1 + 0] = e[t + 2 + 64] = o + s + 1 >> 1, e[t + 2 + 0] = e[t + 3 + 64] = s + u + 1 >> 1, e[t + 3 + 0] = u + c + 1 >> 1, e[t + 0 + 96] = At(i, r, n), e[t + 0 + 64] = At(r, n, a), e[t + 0 + 32] = e[t + 1 + 96] = At(n, a, o), e[t + 1 + 32] = e[t + 2 + 96] = At(a, o, s), e[t + 2 + 32] = e[t + 3 + 96] = At(o, s, u), e[t + 3 + 32] = At(s, u, c)
						}

						function kt(e, t) {
							var n = e[t + 0 - 32],
								r = e[t + 1 - 32],
								i = e[t + 2 - 32],
								a = e[t + 3 - 32],
								o = e[t + 4 - 32],
								s = e[t + 5 - 32],
								u = e[t + 6 - 32],
								c = e[t + 7 - 32];
							e[t + 0 + 0] = n + r + 1 >> 1, e[t + 1 + 0] = e[t + 0 + 64] = r + i + 1 >> 1, e[t + 2 + 0] = e[t + 1 + 64] = i + a + 1 >> 1, e[t + 3 + 0] = e[t + 2 + 64] = a + o + 1 >> 1, e[t + 0 + 32] = At(n, r, i), e[t + 1 + 32] = e[t + 0 + 96] = At(r, i, a), e[t + 2 + 32] = e[t + 1 + 96] = At(i, a, o), e[t + 3 + 32] = e[t + 2 + 96] = At(a, o, s), e[t + 3 + 64] = At(o, s, u), e[t + 3 + 96] = At(s, u, c)
						}

						function Ot(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96];
							e[t + 0 + 0] = n + r + 1 >> 1, e[t + 2 + 0] = e[t + 0 + 32] = r + i + 1 >> 1, e[t + 2 + 32] = e[t + 0 + 64] = i + a + 1 >> 1, e[t + 1 + 0] = At(n, r, i), e[t + 3 + 0] = e[t + 1 + 32] = At(r, i, a), e[t + 3 + 32] = e[t + 1 + 64] = At(i, a, a), e[t + 3 + 64] = e[t + 2 + 64] = e[t + 0 + 96] = e[t + 1 + 96] = e[t + 2 + 96] = e[t + 3 + 96] = a
						}

						function xt(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96],
								o = e[t - 1 - 32],
								s = e[t + 0 - 32],
								u = e[t + 1 - 32],
								c = e[t + 2 - 32];
							e[t + 0 + 0] = e[t + 2 + 32] = n + o + 1 >> 1, e[t + 0 + 32] = e[t + 2 + 64] = r + n + 1 >> 1, e[t + 0 + 64] = e[t + 2 + 96] = i + r + 1 >> 1, e[t + 0 + 96] = a + i + 1 >> 1, e[t + 3 + 0] = At(s, u, c), e[t + 2 + 0] = At(o, s, u), e[t + 1 + 0] = e[t + 3 + 32] = At(n, o, s), e[t + 1 + 32] = e[t + 3 + 64] = At(r, n, o), e[t + 1 + 64] = e[t + 3 + 96] = At(i, r, n), e[t + 1 + 96] = At(a, i, r)
						}

						function Pt(e, t) {
							var n;
							for (n = 0; 8 > n; ++n) r(e, t + 32 * n, e, t - 32, 8)
						}

						function Mt(e, t) {
							var n;
							for (n = 0; 8 > n; ++n) i(e, t, e[t - 1], 8), t += 32
						}

						function It(e, t, n) {
							var r;
							for (r = 0; 8 > r; ++r) i(t, n + 32 * r, e, 8)
						}

						function Lt(e, t) {
							var n, r = 8;
							for (n = 0; 8 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
							It(r >> 4, e, t)
						}

						function Dt(e, t) {
							var n, r = 4;
							for (n = 0; 8 > n; ++n) r += e[t + n - 32];
							It(r >> 3, e, t)
						}

						function Bt(e, t) {
							var n, r = 4;
							for (n = 0; 8 > n; ++n) r += e[t - 1 + 32 * n];
							It(r >> 3, e, t)
						}

						function Nt(e, t) {
							It(128, e, t)
						}

						function Rt(e, t, n) {
							var r = e[t - n],
								i = e[t + 0],
								a = 3 * (i - r) + Mr[1020 + e[t - 2 * n] - e[t + n]],
								o = Ir[112 + (a + 4 >> 3)];
							e[t - n] = Lr[255 + r + Ir[112 + (a + 3 >> 3)]], e[t + 0] = Lr[255 + i - o]
						}

						function Ft(e, t, n, r) {
							var i = e[t + 0],
								a = e[t + n];
							return Dr[255 + e[t - 2 * n] - e[t - n]] > r || Dr[255 + a - i] > r
						}

						function Ut(e, t, n, r) {
							return 4 * Dr[255 + e[t - n] - e[t + 0]] + Dr[255 + e[t - 2 * n] - e[t + n]] <= r
						}

						function jt(e, t, n, r, i) {
							var a = e[t - 3 * n],
								o = e[t - 2 * n],
								s = e[t - n],
								u = e[t + 0],
								c = e[t + n],
								l = e[t + 2 * n],
								f = e[t + 3 * n];
							return 4 * Dr[255 + s - u] + Dr[255 + o - c] > r ? 0 : Dr[255 + e[t - 4 * n] - a] <= i && Dr[255 + a - o] <= i && Dr[255 + o - s] <= i && Dr[255 + f - l] <= i && Dr[255 + l - c] <= i && Dr[255 + c - u] <= i
						}

						function Ht(e, t, n, r) {
							var i = 2 * r + 1;
							for (r = 0; 16 > r; ++r) Ut(e, t + r, n, i) && Rt(e, t + r, n)
						}

						function Yt(e, t, n, r) {
							var i = 2 * r + 1;
							for (r = 0; 16 > r; ++r) Ut(e, t + r * n, 1, i) && Rt(e, t + r * n, 1)
						}

						function Vt(e, t, n, r) {
							var i;
							for (i = 3; 0 < i; --i) Ht(e, t += 4 * n, n, r)
						}

						function zt(e, t, n, r) {
							var i;
							for (i = 3; 0 < i; --i) Yt(e, t += 4, n, r)
						}

						function Qt(e, t, n, r, i, a, o, s) {
							for (a = 2 * a + 1; 0 < i--;) {
								if (jt(e, t, n, a, o))
									if (Ft(e, t, n, s)) Rt(e, t, n);
									else {
										var u = e,
											c = t,
											l = n,
											f = u[c - 2 * l],
											d = u[c - l],
											h = u[c + 0],
											p = u[c + l],
											_ = u[c + 2 * l],
											m = 27 * (g = Mr[1020 + 3 * (h - d) + Mr[1020 + f - p]]) + 63 >> 7,
											b = 18 * g + 63 >> 7,
											g = 9 * g + 63 >> 7;
										u[c - 3 * l] = Lr[255 + u[c - 3 * l] + g], u[c - 2 * l] = Lr[255 + f + b], u[c - l] = Lr[255 + d + m], u[c + 0] = Lr[255 + h - m], u[c + l] = Lr[255 + p - b], u[c + 2 * l] = Lr[255 + _ - g]
									} t += r
							}
						}

						function Gt(e, t, n, r, i, a, o, s) {
							for (a = 2 * a + 1; 0 < i--;) {
								if (jt(e, t, n, a, o))
									if (Ft(e, t, n, s)) Rt(e, t, n);
									else {
										var u = e,
											c = t,
											l = n,
											f = u[c - l],
											d = u[c + 0],
											h = u[c + l],
											p = Ir[112 + (4 + (_ = 3 * (d - f)) >> 3)],
											_ = Ir[112 + (_ + 3 >> 3)],
											m = p + 1 >> 1;
										u[c - 2 * l] = Lr[255 + u[c - 2 * l] + m], u[c - l] = Lr[255 + f + _], u[c + 0] = Lr[255 + d - p], u[c + l] = Lr[255 + h - m]
									} t += r
							}
						}

						function qt(e, t, n, r, i, a) {
							Qt(e, t, n, 1, 16, r, i, a)
						}

						function Wt(e, t, n, r, i, a) {
							Qt(e, t, 1, n, 16, r, i, a)
						}

						function Kt(e, t, n, r, i, a) {
							var o;
							for (o = 3; 0 < o; --o) Gt(e, t += 4 * n, n, 1, 16, r, i, a)
						}

						function Xt(e, t, n, r, i, a) {
							var o;
							for (o = 3; 0 < o; --o) Gt(e, t += 4, 1, n, 16, r, i, a)
						}

						function Jt(e, t, n, r, i, a, o, s) {
							Qt(e, t, i, 1, 8, a, o, s), Qt(n, r, i, 1, 8, a, o, s)
						}

						function Zt(e, t, n, r, i, a, o, s) {
							Qt(e, t, 1, i, 8, a, o, s), Qt(n, r, 1, i, 8, a, o, s)
						}

						function en(e, t, n, r, i, a, o, s) {
							Gt(e, t + 4 * i, i, 1, 8, a, o, s), Gt(n, r + 4 * i, i, 1, 8, a, o, s)
						}

						function tn(e, t, n, r, i, a, o, s) {
							Gt(e, t + 4, 1, i, 8, a, o, s), Gt(n, r + 4, 1, i, 8, a, o, s)
						}

						function nn() {
							this.ba = new oe, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ue, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
						}

						function rn() {
							this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
						}

						function an() {
							this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
						}

						function on() {
							this.ua = 0, this.Wa = new D, this.vb = new D, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new h, this.yc = new f
						}

						function sn() {
							this.xb = this.a = 0, this.l = new Qe, this.ca = new oe, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new A, this.Pb = 0, this.wd = new A, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new on, this.ab = 0, this.gc = o(4, an), this.Oc = 0
						}

						function un() {
							this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Qe, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
						}

						function cn(e, t, n, r, i, a, o) {
							for (e = null == e ? 0 : e[t + 0], t = 0; t < o; ++t) i[a + t] = e + n[r + t] & 255, e = i[a + t]
						}

						function ln(e, t, n, r, i, a, o) {
							var s;
							if (null == e) cn(null, null, n, r, i, a, o);
							else
								for (s = 0; s < o; ++s) i[a + s] = e[t + s] + n[r + s] & 255
						}

						function fn(e, t, n, r, i, a, o) {
							if (null == e) cn(null, null, n, r, i, a, o);
							else {
								var s, u = e[t + 0],
									c = u,
									l = u;
								for (s = 0; s < o; ++s) c = l + (u = e[t + s]) - c, l = n[r + s] + (-256 & c ? 0 > c ? 0 : 255 : c) & 255, c = u, i[a + s] = l
							}
						}

						function dn(e, n, i, o) {
							var s = n.width,
								u = n.o;
							if (t(null != e && null != n), 0 > i || 0 >= o || i + o > u) return null;
							if (!e.Cc) {
								if (null == e.ga) {
									var c;
									if (e.ga = new un, (c = null == e.ga) || (c = n.width * n.o, t(0 == e.Gb.length), e.Gb = a(c), e.Uc = 0, null == e.Gb ? c = 0 : (e.mb = e.Gb, e.nb = e.Uc, e.rc = null, c = 1), c = !c), !c) {
										c = e.ga;
										var l = e.Fa,
											f = e.P,
											d = e.qc,
											h = e.mb,
											p = e.nb,
											_ = f + 1,
											m = d - 1,
											g = c.l;
										if (t(null != l && null != h && null != n), mi[0] = null, mi[1] = cn, mi[2] = ln, mi[3] = fn, c.ca = h, c.tb = p, c.c = n.width, c.i = n.height, t(0 < c.c && 0 < c.i), 1 >= d) n = 0;
										else if (c.$a = l[f + 0] >> 0 & 3, c.Z = l[f + 0] >> 2 & 3, c.Lc = l[f + 0] >> 4 & 3, f = l[f + 0] >> 6 & 3, 0 > c.$a || 1 < c.$a || 4 <= c.Z || 1 < c.Lc || f) n = 0;
										else if (g.put = he, g.ac = de, g.bc = pe, g.ma = c, g.width = n.width, g.height = n.height, g.Da = n.Da, g.v = n.v, g.va = n.va, g.j = n.j, g.o = n.o, c.$a) e: {
											t(1 == c.$a),
											n = ke();t: for (;;) {
												if (null == n) {
													n = 0;
													break e
												}
												if (t(null != c), c.mc = n, n.c = c.c, n.i = c.i, n.l = c.l, n.l.ma = c, n.l.width = c.c, n.l.height = c.i, n.a = 0, b(n.m, l, _, m), !Oe(c.c, c.i, 1, n, null)) break t;
												if (1 == n.ab && 3 == n.gc[0].hc && we(n.s) ? (c.ic = 1, l = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = a(l), n.Ba = 0, null == n.V ? (n.a = 1, n = 0) : n = 1) : (c.ic = 0, n = xe(n, c.c)), !n) break t;
												n = 1;
												break e
											}
											c.mc = null,
											n = 0
										}
										else n = m >= c.c * c.i;
										c = !n
									}
									if (c) return null;
									1 != e.ga.Lc ? e.Ga = 0 : o = u - i
								}
								t(null != e.ga), t(i + o <= u);
								e: {
									if (n = (l = e.ga).c, u = l.l.o, 0 == l.$a) {
										if (_ = e.rc, m = e.Vc, g = e.Fa, f = e.P + 1 + i * n, d = e.mb, h = e.nb + i * n, t(f <= e.P + e.qc), 0 != l.Z)
											for (t(null != mi[l.Z]), c = 0; c < o; ++c) mi[l.Z](_, m, g, f, d, h, n), _ = d, m = h, h += n, f += n;
										else
											for (c = 0; c < o; ++c) r(d, h, g, f, n), _ = d, m = h, h += n, f += n;
										e.rc = _, e.Vc = m
									} else {
										if (t(null != l.mc), n = i + o, t(null != (c = l.mc)), t(n <= c.i), c.C >= n) n = 1;
										else if (l.ic || bn(), l.ic) {
											l = c.V, _ = c.Ba, m = c.c;
											var v = c.i,
												y = (g = 1, f = c.$ / m, d = c.$ % m, h = c.m, p = c.s, c.$),
												A = m * v,
												S = m * n,
												E = p.wc,
												C = y < S ? ye(p, d, f) : null;
											t(y <= A), t(n <= v), t(we(p));
											t: for (;;) {
												for (; !h.h && y < S;) {
													if (d & E || (C = ye(p, d, f)), t(null != C), T(h), 256 > (v = ge(C.G[0], C.H[0], h))) l[_ + y] = v, ++y, ++d >= m && (d = 0, ++f <= n && !(f % 16) && Te(c, f));
													else {
														if (!(280 > v)) {
															g = 0;
															break t
														}
														v = me(v - 256, h);
														var $, k = ge(C.G[4], C.H[4], h);
														if (T(h), !(y >= (k = be(m, k = me(k, h))) && A - y >= v)) {
															g = 0;
															break t
														}
														for ($ = 0; $ < v; ++$) l[_ + y + $] = l[_ + y + $ - k];
														for (y += v, d += v; d >= m;) d -= m, ++f <= n && !(f % 16) && Te(c, f);
														y < S && d & E && (C = ye(p, d, f))
													}
													t(h.h == w(h))
												}
												Te(c, f > n ? n : f);
												break t
											}!g || h.h && y < A ? (g = 0, c.a = h.h ? 5 : 3) : c.$ = y, n = g
										} else n = Ce(c, c.V, c.Ba, c.c, c.i, n, Pe);
										if (!n) {
											o = 0;
											break e
										}
									}
									i + o >= u && (e.Cc = 1),
									o = 1
								}
								if (!o) return null;
								if (e.Cc && (null != (o = e.ga) && (o.mc = null), e.ga = null, 0 < e.Ga)) return alert("todo:WebPDequantizeLevels"), null
							}
							return e.nb + i * s
						}

						function hn(e, t, n, r, i, a) {
							for (; 0 < i--;) {
								var o, s = e,
									u = t + (n ? 1 : 0),
									c = e,
									l = t + (n ? 0 : 3);
								for (o = 0; o < r; ++o) {
									var f = c[l + 4 * o];
									255 != f && (f *= 32897, s[u + 4 * o + 0] = s[u + 4 * o + 0] * f >> 23, s[u + 4 * o + 1] = s[u + 4 * o + 1] * f >> 23, s[u + 4 * o + 2] = s[u + 4 * o + 2] * f >> 23)
								}
								t += a
							}
						}

						function pn(e, t, n, r, i) {
							for (; 0 < r--;) {
								var a;
								for (a = 0; a < n; ++a) {
									var o = e[t + 2 * a + 0],
										s = 15 & (c = e[t + 2 * a + 1]),
										u = 4369 * s,
										c = (240 & c | c >> 4) * u >> 16;
									e[t + 2 * a + 0] = (240 & o | o >> 4) * u >> 16 & 240 | (15 & o | o << 4) * u >> 16 >> 4 & 15, e[t + 2 * a + 1] = 240 & c | s
								}
								t += i
							}
						}

						function _n(e, t, n, r, i, a, o, s) {
							var u, c, l = 255;
							for (c = 0; c < i; ++c) {
								for (u = 0; u < r; ++u) {
									var f = e[t + u];
									a[o + 4 * u] = f, l &= f
								}
								t += n, o += s
							}
							return 255 != l
						}

						function mn(e, t, n, r, i) {
							var a;
							for (a = 0; a < i; ++a) n[r + a] = e[t + a] >> 8
						}

						function bn() {
							wr = hn, Er = pn, Tr = _n, Cr = mn
						}

						function gn(n, r, i) {
							e[n] = function(e, n, a, o, s, u, c, l, f, d, h, p, _, m, b, g, v) {
								var y, A = v - 1 >> 1,
									S = s[u + 0] | c[l + 0] << 16,
									w = f[d + 0] | h[p + 0] << 16;
								t(null != e);
								var E = 3 * S + w + 131074 >> 2;
								for (r(e[n + 0], 255 & E, E >> 16, _, m), null != a && (E = 3 * w + S + 131074 >> 2, r(a[o + 0], 255 & E, E >> 16, b, g)), y = 1; y <= A; ++y) {
									var T = s[u + y] | c[l + y] << 16,
										C = f[d + y] | h[p + y] << 16,
										$ = S + T + w + C + 524296,
										k = $ + 2 * (T + w) >> 3;
									E = k + S >> 1, S = ($ = $ + 2 * (S + C) >> 3) + T >> 1, r(e[n + 2 * y - 1], 255 & E, E >> 16, _, m + (2 * y - 1) * i), r(e[n + 2 * y - 0], 255 & S, S >> 16, _, m + (2 * y - 0) * i), null != a && (E = $ + w >> 1, S = k + C >> 1, r(a[o + 2 * y - 1], 255 & E, E >> 16, b, g + (2 * y - 1) * i), r(a[o + 2 * y + 0], 255 & S, S >> 16, b, g + (2 * y + 0) * i)), S = T, w = C
								}
								1 & v || (E = 3 * S + w + 131074 >> 2, r(e[n + v - 1], 255 & E, E >> 16, _, m + (v - 1) * i), null != a && (E = 3 * w + S + 131074 >> 2, r(a[o + v - 1], 255 & E, E >> 16, b, g + (v - 1) * i)))
							}
						}

						function vn() {
							bi[Br] = gi, bi[Nr] = yi, bi[Rr] = vi, bi[Fr] = Ai, bi[Ur] = Si, bi[jr] = wi, bi[Hr] = Ei, bi[Yr] = yi, bi[Vr] = Ai, bi[zr] = Si, bi[Qr] = wi
						}

						function yn(e) {
							return e & ~xi ? 0 > e ? 0 : 255 : e >> Oi
						}

						function An(e, t) {
							return yn((19077 * e >> 8) + (26149 * t >> 8) - 14234)
						}

						function Sn(e, t, n) {
							return yn((19077 * e >> 8) - (6419 * t >> 8) - (13320 * n >> 8) + 8708)
						}

						function wn(e, t) {
							return yn((19077 * e >> 8) + (33050 * t >> 8) - 17685)
						}

						function En(e, t, n, r, i) {
							r[i + 0] = An(e, n), r[i + 1] = Sn(e, t, n), r[i + 2] = wn(e, t)
						}

						function Tn(e, t, n, r, i) {
							r[i + 0] = wn(e, t), r[i + 1] = Sn(e, t, n), r[i + 2] = An(e, n)
						}

						function Cn(e, t, n, r, i) {
							var a = Sn(e, t, n);
							t = a << 3 & 224 | wn(e, t) >> 3, r[i + 0] = 248 & An(e, n) | a >> 5, r[i + 1] = t
						}

						function $n(e, t, n, r, i) {
							var a = 240 & wn(e, t) | 15;
							r[i + 0] = 240 & An(e, n) | Sn(e, t, n) >> 4, r[i + 1] = a
						}

						function kn(e, t, n, r, i) {
							r[i + 0] = 255, En(e, t, n, r, i + 1)
						}

						function On(e, t, n, r, i) {
							Tn(e, t, n, r, i), r[i + 3] = 255
						}

						function xn(e, t, n, r, i) {
							En(e, t, n, r, i), r[i + 3] = 255
						}

						function ze(e, t) {
							return 0 > e ? 0 : e > t ? t : e
						}

						function Pn(t, n, r) {
							e[t] = function(e, t, i, a, o, s, u, c, l) {
								for (var f = c + (-2 & l) * r; c != f;) n(e[t + 0], i[a + 0], o[s + 0], u, c), n(e[t + 1], i[a + 0], o[s + 0], u, c + r), t += 2, ++a, ++s, c += 2 * r;
								1 & l && n(e[t + 0], i[a + 0], o[s + 0], u, c)
							}
						}

						function Mn(e, t, n) {
							return 0 == n ? 0 == e ? 0 == t ? 6 : 5 : 0 == t ? 4 : 0 : n
						}

						function In(e, t, n, r, i) {
							switch (e >>> 30) {
								case 3:
									or(t, n, r, i, 0);
									break;
								case 2:
									sr(t, n, r, i);
									break;
								case 1:
									cr(t, n, r, i)
							}
						}

						function Ln(e, t) {
							var n, a, o = t.M,
								s = t.Nb,
								u = e.oc,
								c = e.pc + 40,
								l = e.oc,
								f = e.pc + 584,
								d = e.oc,
								h = e.pc + 600;
							for (n = 0; 16 > n; ++n) u[c + 32 * n - 1] = 129;
							for (n = 0; 8 > n; ++n) l[f + 32 * n - 1] = 129, d[h + 32 * n - 1] = 129;
							for (0 < o ? u[c - 1 - 32] = l[f - 1 - 32] = d[h - 1 - 32] = 129 : (i(u, c - 32 - 1, 127, 21), i(l, f - 32 - 1, 127, 9), i(d, h - 32 - 1, 127, 9)), a = 0; a < e.za; ++a) {
								var p = t.ya[t.aa + a];
								if (0 < a) {
									for (n = -1; 16 > n; ++n) r(u, c + 32 * n - 4, u, c + 32 * n + 12, 4);
									for (n = -1; 8 > n; ++n) r(l, f + 32 * n - 4, l, f + 32 * n + 4, 4), r(d, h + 32 * n - 4, d, h + 32 * n + 4, 4)
								}
								var _ = e.Gd,
									m = e.Hd + a,
									b = p.ad,
									g = p.Hc;
								if (0 < o && (r(u, c - 32, _[m].y, 0, 16), r(l, f - 32, _[m].f, 0, 8), r(d, h - 32, _[m].ea, 0, 8)), p.Za) {
									var v = u,
										y = c - 32 + 16;
									for (0 < o && (a >= e.za - 1 ? i(v, y, _[m].y[15], 4) : r(v, y, _[m + 1].y, 0, 4)), n = 0; 4 > n; n++) v[y + 128 + n] = v[y + 256 + n] = v[y + 384 + n] = v[y + 0 + n];
									for (n = 0; 16 > n; ++n, g <<= 2) v = u, y = c + Ri[n], di[p.Ob[n]](v, y), In(g, b, 16 * +n, v, y)
								} else if (v = Mn(a, o, p.Ob[0]), fi[v](u, c), 0 != g)
									for (n = 0; 16 > n; ++n, g <<= 2) In(g, b, 16 * +n, u, c + Ri[n]);
								for (n = p.Gc, v = Mn(a, o, p.Dd), hi[v](l, f), hi[v](d, h), g = b, v = l, y = f, 255 & (p = n >> 0) && (170 & p ? ur(g, 256, v, y) : lr(g, 256, v, y)), p = d, g = h, 255 & (n >>= 8) && (170 & n ? ur(b, 320, p, g) : lr(b, 320, p, g)), o < e.Ub - 1 && (r(_[m].y, 0, u, c + 480, 16), r(_[m].f, 0, l, f + 224, 8), r(_[m].ea, 0, d, h + 224, 8)), n = 8 * s * e.B, _ = e.sa, m = e.ta + 16 * a + 16 * s * e.R, b = e.qa, p = e.ra + 8 * a + n, g = e.Ha, v = e.Ia + 8 * a + n, n = 0; 16 > n; ++n) r(_, m + n * e.R, u, c + 32 * n, 16);
								for (n = 0; 8 > n; ++n) r(b, p + n * e.B, l, f + 32 * n, 8), r(g, v + n * e.B, d, h + 32 * n, 8)
							}
						}

						function Dn(e, r, i, a, o, s, u, c, l) {
							var f = [0],
								d = [0],
								h = 0,
								p = null != l ? l.kd : 0,
								_ = null != l ? l : new rn;
							if (null == e || 12 > i) return 7;
							_.data = e, _.w = r, _.ha = i, r = [r], i = [i], _.gb = [_.gb];
							e: {
								var m = r,
									g = i,
									v = _.gb;
								if (t(null != e), t(null != g), t(null != v), v[0] = 0, 12 <= g[0] && !n(e, m[0], "RIFF")) {
									if (n(e, m[0] + 8, "WEBP")) {
										v = 3;
										break e
									}
									var y = M(e, m[0] + 4);
									if (12 > y || 4294967286 < y) {
										v = 3;
										break e
									}
									if (p && y > g[0] - 8) {
										v = 7;
										break e
									}
									v[0] = y, m[0] += 12, g[0] -= 12
								}
								v = 0
							}
							if (0 != v) return v;
							for (y = 0 < _.gb[0], i = i[0];;) {
								e: {
									var S = e;g = r,
									v = i;
									var w = f,
										E = d,
										T = m = [0];
									if ((k = h = [h])[0] = 0, 8 > v[0]) v = 7;
									else {
										if (!n(S, g[0], "VP8X")) {
											if (10 != M(S, g[0] + 4)) {
												v = 3;
												break e
											}
											if (18 > v[0]) {
												v = 7;
												break e
											}
											var C = M(S, g[0] + 8),
												$ = 1 + P(S, g[0] + 12);
											if (2147483648 <= $ * (S = 1 + P(S, g[0] + 15))) {
												v = 3;
												break e
											}
											null != T && (T[0] = C), null != w && (w[0] = $), null != E && (E[0] = S), g[0] += 18, v[0] -= 18, k[0] = 1
										}
										v = 0
									}
								}
								if (h = h[0], m = m[0], 0 != v) return v;
								if (g = !!(2 & m), !y && h) return 3;
								if (null != s && (s[0] = !!(16 & m)), null != u && (u[0] = g), null != c && (c[0] = 0), u = f[0], m = d[0], h && g && null == l) {
									v = 0;
									break
								}
								if (4 > i) {
									v = 7;
									break
								}
								if (y && h || !y && !h && !n(e, r[0], "ALPH")) {
									i = [i], _.na = [_.na], _.P = [_.P], _.Sa = [_.Sa];
									e: {
										C = e,
										v = r,
										y = i;
										var k = _.gb;w = _.na,
										E = _.P,
										T = _.Sa,
										$ = 22,
										t(null != C),
										t(null != y),
										S = v[0];
										var O = y[0];
										for (t(null != w), t(null != T), w[0] = null, E[0] = null, T[0] = 0;;) {
											if (v[0] = S, y[0] = O, 8 > O) {
												v = 7;
												break e
											}
											var x = M(C, S + 4);
											if (4294967286 < x) {
												v = 3;
												break e
											}
											var I = 8 + x + 1 & -2;
											if ($ += I, 0 < k && $ > k) {
												v = 3;
												break e
											}
											if (!n(C, S, "VP8 ") || !n(C, S, "VP8L")) {
												v = 0;
												break e
											}
											if (O[0] < I) {
												v = 7;
												break e
											}
											n(C, S, "ALPH") || (w[0] = C, E[0] = S + 8, T[0] = x), S += I, O -= I
										}
									}
									if (i = i[0], _.na = _.na[0], _.P = _.P[0], _.Sa = _.Sa[0], 0 != v) break
								}
								i = [i],
								_.Ja = [_.Ja],
								_.xa = [_.xa];e: if (k = e, v = r, y = i, w = _.gb[0], E = _.Ja, T = _.xa, C = v[0], S = !n(k, C, "VP8 "), $ = !n(k, C, "VP8L"), t(null != k), t(null != y), t(null != E), t(null != T), 8 > y[0]) v = 7;
									else {
										if (S || $) {
											if (k = M(k, C + 4), 12 <= w && k > w - 12) {
												v = 3;
												break e
											}
											if (p && k > y[0] - 8) {
												v = 7;
												break e
											}
											E[0] = k, v[0] += 8, y[0] -= 8, T[0] = $
										} else T[0] = 5 <= y[0] && 47 == k[C + 0] && !(k[C + 4] >> 5), E[0] = y[0];
										v = 0
									}if (i = i[0], _.Ja = _.Ja[0], _.xa = _.xa[0], r = r[0], 0 != v) break;
								if (4294967286 < _.Ja) return 3;
								if (null == c || g || (c[0] = _.xa ? 2 : 1), u = [u], m = [m], _.xa) {
									if (5 > i) {
										v = 7;
										break
									}
									c = u, p = m, g = s, null == e || 5 > i ? e = 0 : 5 <= i && 47 == e[r + 0] && !(e[r + 4] >> 5) ? (y = [0], k = [0], w = [0], b(E = new A, e, r, i), _e(E, y, k, w) ? (null != c && (c[0] = y[0]), null != p && (p[0] = k[0]), null != g && (g[0] = w[0]), e = 1) : e = 0) : e = 0
								} else {
									if (10 > i) {
										v = 7;
										break
									}
									c = m, null == e || 10 > i || !We(e, r + 3, i - 3) ? e = 0 : (p = e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16, g = 16383 & (e[r + 7] << 8 | e[r + 6]), e = 16383 & (e[r + 9] << 8 | e[r + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= _.Ja || !g || !e ? e = 0 : (u && (u[0] = g), c && (c[0] = e), e = 1))
								}
								if (!e) return 3;
								if (u = u[0], m = m[0], h && (f[0] != u || d[0] != m)) return 3;null != l && (l[0] = _, l.offset = r - l.w, t(4294967286 > r - l.w), t(l.offset == l.ha - i));
								break
							}
							return 0 == v || 7 == v && h && null == l ? (null != s && (s[0] |= null != _.na && 0 < _.na.length), null != a && (a[0] = u), null != o && (o[0] = m), 0) : v
						}

						function Bn(e, t, n) {
							var r = t.width,
								i = t.height,
								a = 0,
								o = 0,
								s = r,
								u = i;
							if (t.Da = null != e && 0 < e.Da, t.Da && (s = e.cd, u = e.bd, a = e.v, o = e.j, 11 > n || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= u || a + s > r || o + u > i)) return 0;
							if (t.v = a, t.j = o, t.va = a + s, t.o = o + u, t.U = s, t.T = u, t.da = null != e && 0 < e.da, t.da) {
								if (!B(s, u, n = [e.ib], a = [e.hb])) return 0;
								t.ib = n[0], t.hb = a[0]
							}
							return t.ob = null != e && e.ob, t.Kb = null == e || !e.Sd, t.da && (t.ob = t.ib < 3 * r / 4 && t.hb < 3 * i / 4, t.Kb = 0), 1
						}

						function Nn(e) {
							if (null == e) return 2;
							if (11 > e.S) {
								var t = e.f.RGBA;
								t.fb += (e.height - 1) * t.A, t.A = -t.A
							} else t = e.f.kb, e = e.height, t.O += (e - 1) * t.fa, t.fa = -t.fa, t.N += (e - 1 >> 1) * t.Ab, t.Ab = -t.Ab, t.W += (e - 1 >> 1) * t.Db, t.Db = -t.Db, null != t.F && (t.J += (e - 1) * t.lb, t.lb = -t.lb);
							return 0
						}

						function Rn(e, t, n, r) {
							if (null == r || 0 >= e || 0 >= t) return 2;
							if (null != n) {
								if (n.Da) {
									var i = n.cd,
										o = n.bd,
										s = -2 & n.v,
										u = -2 & n.j;
									if (0 > s || 0 > u || 0 >= i || 0 >= o || s + i > e || u + o > t) return 2;
									e = i, t = o
								}
								if (n.da) {
									if (!B(e, t, i = [n.ib], o = [n.hb])) return 2;
									e = i[0], t = o[0]
								}
							}
							r.width = e, r.height = t;
							e: {
								var c = r.width,
									l = r.height;
								if (e = r.S, 0 >= c || 0 >= l || !(e >= Br && 13 > e)) e = 2;
								else {
									if (0 >= r.Rd && null == r.sd) {
										s = o = i = t = 0;
										var f = (u = c * Hi[e]) * l;
										if (11 > e || (o = (l + 1) / 2 * (t = (c + 1) / 2), 12 == e && (s = (i = c) * l)), null == (l = a(f + 2 * o + s))) {
											e = 1;
											break e
										}
										r.sd = l, 11 > e ? ((c = r.f.RGBA).eb = l, c.fb = 0, c.A = u, c.size = f) : ((c = r.f.kb).y = l, c.O = 0, c.fa = u, c.Fd = f, c.f = l, c.N = 0 + f, c.Ab = t, c.Cd = o, c.ea = l, c.W = 0 + f + o, c.Db = t, c.Ed = o, 12 == e && (c.F = l, c.J = 0 + f + 2 * o), c.Tc = s, c.lb = i)
									}
									if (t = 1, i = r.S, o = r.width, s = r.height, i >= Br && 13 > i)
										if (11 > i) e = r.f.RGBA, t &= (u = Math.abs(e.A)) * (s - 1) + o <= e.size, t &= u >= o * Hi[i], t &= null != e.eb;
										else {
											e = r.f.kb, u = (o + 1) / 2, f = (s + 1) / 2, c = Math.abs(e.fa), l = Math.abs(e.Ab);
											var d = Math.abs(e.Db),
												h = Math.abs(e.lb),
												p = h * (s - 1) + o;
											t &= c * (s - 1) + o <= e.Fd, t &= l * (f - 1) + u <= e.Cd, t = (t &= d * (f - 1) + u <= e.Ed) & c >= o & l >= u & d >= u, t &= null != e.y, t &= null != e.f, t &= null != e.ea, 12 == i && (t &= h >= o, t &= p <= e.Tc, t &= null != e.F)
										}
									else t = 0;
									e = t ? 0 : 2
								}
							}
							return 0 != e || null != n && n.fd && (e = Nn(r)), e
						}
						var Fn = 64,
							Un = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
							jn = 24,
							Hn = 32,
							Yn = 8,
							Vn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
						F("Predictor0", "PredictorAdd0"), e.Predictor0 = function() {
							return 4278190080
						}, e.Predictor1 = function(e) {
							return e
						}, e.Predictor2 = function(e, t, n) {
							return t[n + 0]
						}, e.Predictor3 = function(e, t, n) {
							return t[n + 1]
						}, e.Predictor4 = function(e, t, n) {
							return t[n - 1]
						}, e.Predictor5 = function(e, t, n) {
							return j(j(e, t[n + 1]), t[n + 0])
						}, e.Predictor6 = function(e, t, n) {
							return j(e, t[n - 1])
						}, e.Predictor7 = function(e, t, n) {
							return j(e, t[n + 0])
						}, e.Predictor8 = function(e, t, n) {
							return j(t[n - 1], t[n + 0])
						}, e.Predictor9 = function(e, t, n) {
							return j(t[n + 0], t[n + 1])
						}, e.Predictor10 = function(e, t, n) {
							return j(j(e, t[n - 1]), j(t[n + 0], t[n + 1]))
						}, e.Predictor11 = function(e, t, n) {
							var r = t[n + 0];
							return 0 >= V(r >> 24 & 255, e >> 24 & 255, (t = t[n - 1]) >> 24 & 255) + V(r >> 16 & 255, e >> 16 & 255, t >> 16 & 255) + V(r >> 8 & 255, e >> 8 & 255, t >> 8 & 255) + V(255 & r, 255 & e, 255 & t) ? r : e
						}, e.Predictor12 = function(e, t, n) {
							var r = t[n + 0];
							return (H((e >> 24 & 255) + (r >> 24 & 255) - ((t = t[n - 1]) >> 24 & 255)) << 24 | H((e >> 16 & 255) + (r >> 16 & 255) - (t >> 16 & 255)) << 16 | H((e >> 8 & 255) + (r >> 8 & 255) - (t >> 8 & 255)) << 8 | H((255 & e) + (255 & r) - (255 & t))) >>> 0
						}, e.Predictor13 = function(e, t, n) {
							var r = t[n - 1];
							return (Y((e = j(e, t[n + 0])) >> 24 & 255, r >> 24 & 255) << 24 | Y(e >> 16 & 255, r >> 16 & 255) << 16 | Y(e >> 8 & 255, r >> 8 & 255) << 8 | Y(e >> 0 & 255, r >> 0 & 255)) >>> 0
						};
						var zn = e.PredictorAdd0;
						e.PredictorAdd1 = z, F("Predictor2", "PredictorAdd2"), F("Predictor3", "PredictorAdd3"), F("Predictor4", "PredictorAdd4"), F("Predictor5", "PredictorAdd5"), F("Predictor6", "PredictorAdd6"), F("Predictor7", "PredictorAdd7"), F("Predictor8", "PredictorAdd8"), F("Predictor9", "PredictorAdd9"), F("Predictor10", "PredictorAdd10"), F("Predictor11", "PredictorAdd11"), F("Predictor12", "PredictorAdd12"), F("Predictor13", "PredictorAdd13");
						var Qn = e.PredictorAdd2;
						W("ColorIndexInverseTransform", "MapARGB", "32b", (function(e) {
							return e >> 8 & 255
						}), (function(e) {
							return e
						})), W("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(e) {
							return e
						}), (function(e) {
							return e >> 8 & 255
						}));
						var Gn, qn = e.ColorIndexInverseTransform,
							Wn = e.MapARGB,
							Kn = e.VP8LColorIndexInverseTransformAlpha,
							Xn = e.MapAlpha,
							Jn = e.VP8LPredictorsAdd = [];
						Jn.length = 16, (e.VP8LPredictors = []).length = 16, (e.VP8LPredictorsAdd_C = []).length = 16, (e.VP8LPredictors_C = []).length = 16;
						var Zn, er, tr, nr, rr, ir, ar, or, sr, ur, cr, lr, fr, dr, hr, pr, _r, mr, br, gr, vr, yr, Ar, Sr, wr, Er, Tr, Cr, $r = a(511),
							kr = a(2041),
							Or = a(225),
							xr = a(767),
							Pr = 0,
							Mr = kr,
							Ir = Or,
							Lr = xr,
							Dr = $r,
							Br = 0,
							Nr = 1,
							Rr = 2,
							Fr = 3,
							Ur = 4,
							jr = 5,
							Hr = 6,
							Yr = 7,
							Vr = 8,
							zr = 9,
							Qr = 10,
							Gr = [2, 3, 7],
							qr = [3, 3, 11],
							Wr = [280, 256, 256, 256, 40],
							Kr = [0, 1, 1, 1, 0],
							Xr = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
							Jr = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
							Zr = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
							ei = 8,
							ti = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
							ni = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
							ri = null,
							ii = [
								[173, 148, 140, 0],
								[176, 155, 140, 135, 0],
								[180, 157, 141, 134, 130, 0],
								[254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
							],
							ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
							oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
							si = [
								[
									[
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
										[189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
										[106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
									],
									[
										[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
										[181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
										[78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
									],
									[
										[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
										[184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
										[77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
									],
									[
										[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
										[170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
										[37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
									],
									[
										[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
										[207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
										[102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
									],
									[
										[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
										[177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
										[80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
									],
									[
										[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
										[131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
										[68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
									],
									[
										[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
										[184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
										[81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
									],
									[
										[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
										[99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
										[23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
									],
									[
										[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
										[109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
										[44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
									],
									[
										[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
										[94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
										[22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
									],
									[
										[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
										[124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
										[35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
									],
									[
										[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
										[121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
										[45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
									],
									[
										[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
										[203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
										[137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
										[175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
										[73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
									],
									[
										[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
										[239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
										[155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
									],
									[
										[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
										[201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
										[69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
									],
									[
										[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
										[223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
										[141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
										[190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
										[149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
										[213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
										[55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
										[126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
										[61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
									],
									[
										[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
										[166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
										[39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
									],
									[
										[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
										[124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
										[24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
									],
									[
										[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
										[149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
										[28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
									],
									[
										[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
										[123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
										[20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
									],
									[
										[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
										[168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
										[47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
									],
									[
										[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
										[141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
										[42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
									],
									[
										[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								]
							],
							ui = [
								[
									[231, 120, 48, 89, 115, 113, 120, 152, 112],
									[152, 179, 64, 126, 170, 118, 46, 70, 95],
									[175, 69, 143, 80, 85, 82, 72, 155, 103],
									[56, 58, 10, 171, 218, 189, 17, 13, 152],
									[114, 26, 17, 163, 44, 195, 21, 10, 173],
									[121, 24, 80, 195, 26, 62, 44, 64, 85],
									[144, 71, 10, 38, 171, 213, 144, 34, 26],
									[170, 46, 55, 19, 136, 160, 33, 206, 71],
									[63, 20, 8, 114, 114, 208, 12, 9, 226],
									[81, 40, 11, 96, 182, 84, 29, 16, 36]
								],
								[
									[134, 183, 89, 137, 98, 101, 106, 165, 148],
									[72, 187, 100, 130, 157, 111, 32, 75, 80],
									[66, 102, 167, 99, 74, 62, 40, 234, 128],
									[41, 53, 9, 178, 241, 141, 26, 8, 107],
									[74, 43, 26, 146, 73, 166, 49, 23, 157],
									[65, 38, 105, 160, 51, 52, 31, 115, 128],
									[104, 79, 12, 27, 217, 255, 87, 17, 7],
									[87, 68, 71, 44, 114, 51, 15, 186, 23],
									[47, 41, 14, 110, 182, 183, 21, 17, 194],
									[66, 45, 25, 102, 197, 189, 23, 18, 22]
								],
								[
									[88, 88, 147, 150, 42, 46, 45, 196, 205],
									[43, 97, 183, 117, 85, 38, 35, 179, 61],
									[39, 53, 200, 87, 26, 21, 43, 232, 171],
									[56, 34, 51, 104, 114, 102, 29, 93, 77],
									[39, 28, 85, 171, 58, 165, 90, 98, 64],
									[34, 22, 116, 206, 23, 34, 43, 166, 73],
									[107, 54, 32, 26, 51, 1, 81, 43, 31],
									[68, 25, 106, 22, 64, 171, 36, 225, 114],
									[34, 19, 21, 102, 132, 188, 16, 76, 124],
									[62, 18, 78, 95, 85, 57, 50, 48, 51]
								],
								[
									[193, 101, 35, 159, 215, 111, 89, 46, 111],
									[60, 148, 31, 172, 219, 228, 21, 18, 111],
									[112, 113, 77, 85, 179, 255, 38, 120, 114],
									[40, 42, 1, 196, 245, 209, 10, 25, 109],
									[88, 43, 29, 140, 166, 213, 37, 43, 154],
									[61, 63, 30, 155, 67, 45, 68, 1, 209],
									[100, 80, 8, 43, 154, 1, 51, 26, 71],
									[142, 78, 78, 16, 255, 128, 34, 197, 171],
									[41, 40, 5, 102, 211, 183, 4, 1, 221],
									[51, 50, 17, 168, 209, 192, 23, 25, 82]
								],
								[
									[138, 31, 36, 171, 27, 166, 38, 44, 229],
									[67, 87, 58, 169, 82, 115, 26, 59, 179],
									[63, 59, 90, 180, 59, 166, 93, 73, 154],
									[40, 40, 21, 116, 143, 209, 34, 39, 175],
									[47, 15, 16, 183, 34, 223, 49, 45, 183],
									[46, 17, 33, 183, 6, 98, 15, 32, 183],
									[57, 46, 22, 24, 128, 1, 54, 17, 37],
									[65, 32, 73, 115, 28, 128, 23, 128, 205],
									[40, 3, 9, 115, 51, 192, 18, 6, 223],
									[87, 37, 9, 115, 59, 77, 64, 21, 47]
								],
								[
									[104, 55, 44, 218, 9, 54, 53, 130, 226],
									[64, 90, 70, 205, 40, 41, 23, 26, 57],
									[54, 57, 112, 184, 5, 41, 38, 166, 213],
									[30, 34, 26, 133, 152, 116, 10, 32, 134],
									[39, 19, 53, 221, 26, 114, 32, 73, 255],
									[31, 9, 65, 234, 2, 15, 1, 118, 73],
									[75, 32, 12, 51, 192, 255, 160, 43, 51],
									[88, 31, 35, 67, 102, 85, 55, 186, 85],
									[56, 21, 23, 111, 59, 205, 45, 37, 192],
									[55, 38, 70, 124, 73, 102, 1, 34, 98]
								],
								[
									[125, 98, 42, 88, 104, 85, 117, 175, 82],
									[95, 84, 53, 89, 128, 100, 113, 101, 45],
									[75, 79, 123, 47, 51, 128, 81, 171, 1],
									[57, 17, 5, 71, 102, 57, 53, 41, 49],
									[38, 33, 13, 121, 57, 73, 26, 1, 85],
									[41, 10, 67, 138, 77, 110, 90, 47, 114],
									[115, 21, 2, 10, 102, 255, 166, 23, 6],
									[101, 29, 16, 10, 85, 128, 101, 196, 26],
									[57, 18, 10, 102, 102, 213, 34, 20, 43],
									[117, 20, 15, 36, 163, 128, 68, 1, 26]
								],
								[
									[102, 61, 71, 37, 34, 53, 31, 243, 192],
									[69, 60, 71, 38, 73, 119, 28, 222, 37],
									[68, 45, 128, 34, 1, 47, 11, 245, 171],
									[62, 17, 19, 70, 146, 85, 55, 62, 70],
									[37, 43, 37, 154, 100, 163, 85, 160, 1],
									[63, 9, 92, 136, 28, 64, 32, 201, 85],
									[75, 15, 9, 9, 64, 255, 184, 119, 16],
									[86, 6, 28, 5, 64, 255, 25, 248, 1],
									[56, 8, 17, 132, 137, 255, 55, 116, 128],
									[58, 15, 20, 82, 135, 57, 26, 121, 40]
								],
								[
									[164, 50, 31, 137, 154, 133, 25, 35, 218],
									[51, 103, 44, 131, 131, 123, 31, 6, 158],
									[86, 40, 64, 135, 148, 224, 45, 183, 128],
									[22, 26, 17, 131, 240, 154, 14, 1, 209],
									[45, 16, 21, 91, 64, 222, 7, 1, 197],
									[56, 21, 39, 155, 60, 138, 23, 102, 213],
									[83, 12, 13, 54, 192, 255, 68, 47, 28],
									[85, 26, 85, 85, 128, 128, 32, 146, 171],
									[18, 11, 7, 63, 144, 171, 4, 4, 246],
									[35, 27, 10, 146, 174, 171, 12, 26, 128]
								],
								[
									[190, 80, 35, 99, 180, 80, 126, 54, 45],
									[85, 126, 47, 87, 176, 51, 41, 20, 32],
									[101, 75, 128, 139, 118, 146, 116, 128, 85],
									[56, 41, 15, 176, 236, 85, 37, 9, 62],
									[71, 30, 17, 119, 118, 255, 17, 18, 138],
									[101, 38, 60, 138, 55, 70, 43, 26, 142],
									[146, 36, 19, 30, 171, 255, 97, 27, 20],
									[138, 45, 61, 62, 219, 1, 81, 188, 64],
									[32, 41, 20, 117, 151, 142, 20, 21, 163],
									[112, 19, 12, 61, 195, 128, 48, 4, 24]
								]
							],
							ci = [
								[
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
										[250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
										[234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
									],
									[
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
										[234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
										[251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
										[248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								]
							],
							li = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
							fi = [],
							di = [],
							hi = [],
							pi = 1,
							_i = 2,
							mi = [],
							bi = [];
						gn("UpsampleRgbLinePair", En, 3), gn("UpsampleBgrLinePair", Tn, 3), gn("UpsampleRgbaLinePair", xn, 4), gn("UpsampleBgraLinePair", On, 4), gn("UpsampleArgbLinePair", kn, 4), gn("UpsampleRgba4444LinePair", $n, 2), gn("UpsampleRgb565LinePair", Cn, 2);
						var gi = e.UpsampleRgbLinePair,
							vi = e.UpsampleBgrLinePair,
							yi = e.UpsampleRgbaLinePair,
							Ai = e.UpsampleBgraLinePair,
							Si = e.UpsampleArgbLinePair,
							wi = e.UpsampleRgba4444LinePair,
							Ei = e.UpsampleRgb565LinePair,
							Ti = 16,
							Ci = 1 << Ti - 1,
							$i = -227,
							ki = 482,
							Oi = 6,
							xi = (256 << Oi) - 1,
							Pi = 0,
							Mi = a(256),
							Ii = a(256),
							Li = a(256),
							Di = a(256),
							Bi = a(ki - $i),
							Ni = a(ki - $i);
						Pn("YuvToRgbRow", En, 3), Pn("YuvToBgrRow", Tn, 3), Pn("YuvToRgbaRow", xn, 4), Pn("YuvToBgraRow", On, 4), Pn("YuvToArgbRow", kn, 4), Pn("YuvToRgba4444Row", $n, 2), Pn("YuvToRgb565Row", Cn, 2);
						var Ri = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
							Fi = [0, 2, 8],
							Ui = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
							ji = 1;
						this.WebPDecodeRGBA = function(e, n, r, i, a) {
							var o = Nr,
								s = new nn,
								u = new oe;
							s.ba = u, u.S = o, u.width = [u.width], u.height = [u.height];
							var c = u.width,
								l = u.height,
								f = new se;
							if (null == f || null == e) var d = 2;
							else t(null != f), d = Dn(e, n, r, f.width, f.height, f.Pd, f.Qd, f.format, null);
							if (0 != d ? c = 0 : (null != c && (c[0] = f.width[0]), null != l && (l[0] = f.height[0]), c = 1), c) {
								u.width = u.width[0], u.height = u.height[0], null != i && (i[0] = u.width), null != a && (a[0] = u.height);
								e: {
									if (i = new Qe, (a = new rn).data = e, a.w = n, a.ha = r, a.kd = 1, n = [0], t(null != a), (0 == (e = Dn(a.data, a.w, a.ha, null, null, null, n, null, a)) || 7 == e) && n[0] && (e = 4), 0 == (n = e)) {
										if (t(null != s), i.data = a.data, i.w = a.w + a.offset, i.ha = a.ha - a.offset, i.put = he, i.ac = de, i.bc = pe, i.ma = s, a.xa) {
											if (null == (e = ke())) {
												s = 1;
												break e
											}
											if (function(e, n) {
													var r = [0],
														i = [0],
														a = [0];
													t: for (;;) {
														if (null == e) return 0;
														if (null == n) return e.a = 2, 0;
														if (e.l = n, e.a = 0, b(e.m, n.data, n.w, n.ha), !_e(e.m, r, i, a)) {
															e.a = 3;
															break t
														}
														if (e.xb = _i, n.width = r[0], n.height = i[0], !Oe(r[0], i[0], 1, e, null)) break t;
														return 1
													}
													return t(0 != e.a), 0
												}(e, i)) {
												if (i = 0 == (n = Rn(i.width, i.height, s.Oa, s.ba))) {
													t: {
														i = e;n: for (;;) {
															if (null == i) {
																i = 0;
																break t
															}
															if (t(null != i.s.yc), t(null != i.s.Ya), t(0 < i.s.Wb), t(null != (r = i.l)), t(null != (a = r.ma)), 0 != i.xb) {
																if (i.ca = a.ba, i.tb = a.tb, t(null != i.ca), !Bn(a.Oa, r, Fr)) {
																	i.a = 2;
																	break n
																}
																if (!xe(i, r.width)) break n;
																if (r.da) break n;
																if ((r.da || re(i.ca.S)) && bn(), 11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i.ca.f.kb.F && bn()), i.Pb && 0 < i.s.ua && null == i.s.vb.X && !I(i.s.vb, i.s.Wa.Xa)) {
																	i.a = 1;
																	break n
																}
																i.xb = 0
															}
															if (!Ce(i, i.V, i.Ba, i.c, i.i, r.o, Se)) break n;
															a.Dc = i.Ma, i = 1;
															break t
														}
														t(0 != i.a),
														i = 0
													}
													i = !i
												}
												i && (n = e.a)
											} else n = e.a
										} else {
											if (null == (e = new Ge)) {
												s = 1;
												break e
											}
											if (e.Fa = a.na, e.P = a.P, e.qc = a.Sa, Ke(e, i)) {
												if (0 == (n = Rn(i.width, i.height, s.Oa, s.ba))) {
													if (e.Aa = 0, r = s.Oa, t(null != (a = e)), null != r) {
														if (0 < (c = 0 > (c = r.Md) ? 0 : 100 < c ? 255 : 255 * c / 100)) {
															for (l = f = 0; 4 > l; ++l) 12 > (d = a.pb[l]).lc && (d.ia = c * Ui[0 > d.lc ? 0 : d.lc] >> 3), f |= d.ia;
															f && (alert("todo:VP8InitRandom"), a.ia = 1)
														}
														a.Ga = r.Id, 100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0)
													}
													Ze(e, i) || (n = e.a)
												}
											} else n = e.a
										}
										0 == n && null != s.Oa && s.Oa.fd && (n = Nn(s.ba))
									}
									s = n
								}
								o = 0 != s ? null : 11 > o ? u.f.RGBA.eb : u.f.kb.y
							} else o = null;
							return o
						};
						var Hi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
					});
					var f = [0],
						d = [0],
						h = [],
						p = new Ke,
						_ = e,
						m = function(e, t) {
							var n = {},
								r = 0,
								i = !1,
								a = 0,
								o = 0;
							if (n.frames = [], ! function(e, t, n, r) {
									for (var i = 0; i < 4; i++)
										if (e[t + i] != "RIFF".charCodeAt(i)) return !0;
									return !1
								}(e, t)) {
								var s, f;
								for (l(e, t += 4), t += 8; t < e.length;) {
									var d = u(e, t),
										h = l(e, t += 4);
									t += 4;
									var p = h + (1 & h);
									switch (d) {
										case "VP8 ":
										case "VP8L":
											void 0 === n.frames[r] && (n.frames[r] = {}), (b = n.frames[r]).src_off = i ? o : t - 8, b.src_size = a + h + 8, r++, i && (i = !1, a = 0, o = 0);
											break;
										case "VP8X":
											(b = n.header = {}).feature_flags = e[t];
											var _ = t + 4;
											b.canvas_width = 1 + c(e, _), _ += 3, b.canvas_height = 1 + c(e, _), _ += 3;
											break;
										case "ALPH":
											i = !0, a = p + 8, o = t - 8;
											break;
										case "ANIM":
											(b = n.header).bgcolor = l(e, t), _ = t + 4, b.loop_count = (s = e)[(f = _) + 0] << 0 | s[f + 1] << 8, _ += 2;
											break;
										case "ANMF":
											var m, b;
											(b = n.frames[r] = {}).offset_x = 2 * c(e, t), t += 3, b.offset_y = 2 * c(e, t), t += 3, b.width = 1 + c(e, t), t += 3, b.height = 1 + c(e, t), t += 3, b.duration = c(e, t), t += 3, m = e[t++], b.dispose = 1 & m, b.blend = m >> 1 & 1
									}
									"ANMF" != d && (t += p)
								}
								return n
							}
						}(_, 0);
					m.response = _, m.rgbaoutput = !0, m.dataurl = !1;
					var b = m.header ? m.header : null,
						g = m.frames ? m.frames : null;
					if (b) {
						b.loop_counter = b.loop_count, f = [b.canvas_height], d = [b.canvas_width];
						for (var v = 0; v < g.length && 0 != g[v].blend; v++);
					}
					var y = g[0],
						A = p.WebPDecodeRGBA(_, y.src_off, y.src_size, d, f);
					y.rgba = A, y.imgwidth = d[0], y.imgheight = f[0];
					for (var S = 0; S < d[0] * f[0] * 4; S++) h[S] = A[S];
					return this.width = d, this.height = f, this.data = h, this
				}! function(e) {
					var t = function() {
							return "function" == typeof r.b
						},
						n = function(t, n, a, l) {
							var f = 4,
								d = s;
							switch (l) {
								case e.image_compression.FAST:
									f = 1, d = o;
									break;
								case e.image_compression.MEDIUM:
									f = 6, d = u;
									break;
								case e.image_compression.SLOW:
									f = 9, d = c
							}
							t = i(t, n, a, d);
							var h = Object(r.b)(t, {
								level: f
							});
							return e.__addimage__.arrayBufferToBinaryString(h)
						},
						i = function(e, t, n, r) {
							for (var i, a, o, s = e.length / t, u = new Uint8Array(e.length + s), c = f(), l = 0; l < s; l += 1) {
								if (o = l * t, i = e.subarray(o, o + t), r) u.set(r(i, n, a), o + l);
								else {
									for (var h, p = c.length, _ = []; h < p; h += 1) _[h] = c[h](i, n, a);
									var m = d(_.concat());
									u.set(_[m], o + l)
								}
								a = i
							}
							return u
						},
						a = function(e) {
							var t = Array.apply([], e);
							return t.unshift(0), t
						},
						o = function(e, t) {
							var n, r = [],
								i = e.length;
							r[0] = 1;
							for (var a = 0; a < i; a += 1) n = e[a - t] || 0, r[a + 1] = e[a] - n + 256 & 255;
							return r
						},
						s = function(e, t, n) {
							var r, i = [],
								a = e.length;
							i[0] = 2;
							for (var o = 0; o < a; o += 1) r = n && n[o] || 0, i[o + 1] = e[o] - r + 256 & 255;
							return i
						},
						u = function(e, t, n) {
							var r, i, a = [],
								o = e.length;
							a[0] = 3;
							for (var s = 0; s < o; s += 1) r = e[s - t] || 0, i = n && n[s] || 0, a[s + 1] = e[s] + 256 - (r + i >>> 1) & 255;
							return a
						},
						c = function(e, t, n) {
							var r, i, a, o, s = [],
								u = e.length;
							s[0] = 4;
							for (var c = 0; c < u; c += 1) r = e[c - t] || 0, i = n && n[c] || 0, a = n && n[c - t] || 0, o = l(r, i, a), s[c + 1] = e[c] - o + 256 & 255;
							return s
						},
						l = function(e, t, n) {
							if (e === t && t === n) return e;
							var r = Math.abs(t - n),
								i = Math.abs(e - n),
								a = Math.abs(e + t - n - n);
							return r <= i && r <= a ? e : i <= a ? t : n
						},
						f = function() {
							return [a, o, s, u, c]
						},
						d = function(e) {
							var t = e.map((function(e) {
								return e.reduce((function(e, t) {
									return e + Math.abs(t)
								}), 0)
							}));
							return t.indexOf(Math.min.apply(null, t))
						};
					e.processPNG = function(r, i, a, o) {
						var s, u, c, l, f, d, h, p, _, m, b, g, v, y, A, S = this.decode.FLATE_DECODE,
							w = "";
						if (this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)), this.__addimage__.isArrayBufferView(r)) {
							if (r = (c = new ze(r)).imgData, u = c.bits, s = c.colorSpace, f = c.colors, -1 !== [4, 6].indexOf(c.colorType)) {
								if (8 === c.bits) {
									_ = (p = 32 == c.pixelBitlength ? new Uint32Array(c.decodePixels().buffer) : 16 == c.pixelBitlength ? new Uint16Array(c.decodePixels().buffer) : new Uint8Array(c.decodePixels().buffer)).length, b = new Uint8Array(_ * c.colors), m = new Uint8Array(_);
									var E, T = c.pixelBitlength - c.bits;
									for (y = 0, A = 0; y < _; y++) {
										for (v = p[y], E = 0; E < T;) b[A++] = v >>> E & 255, E += c.bits;
										m[y] = v >>> E & 255
									}
								}
								if (16 === c.bits) {
									_ = (p = new Uint32Array(c.decodePixels().buffer)).length, b = new Uint8Array(_ * (32 / c.pixelBitlength) * c.colors), m = new Uint8Array(_ * (32 / c.pixelBitlength)), g = c.colors > 1, y = 0, A = 0;
									for (var C = 0; y < _;) v = p[y++], b[A++] = v >>> 0 & 255, g && (b[A++] = v >>> 16 & 255, v = p[y++], b[A++] = v >>> 0 & 255), m[C++] = v >>> 16 & 255;
									u = 8
								}
								o !== e.image_compression.NONE && t() ? (r = n(b, c.width * c.colors, c.colors, o), h = n(m, c.width, 1, o)) : (r = b, h = m, S = void 0)
							}
							if (3 === c.colorType && (s = this.color_spaces.INDEXED, d = c.palette, c.transparency.indexed)) {
								var $ = c.transparency.indexed,
									k = 0;
								for (y = 0, _ = $.length; y < _; ++y) k += $[y];
								if ((k /= 255) == _ - 1 && -1 !== $.indexOf(0)) l = [$.indexOf(0)];
								else if (k !== _) {
									for (p = c.decodePixels(), m = new Uint8Array(p.length), y = 0, _ = p.length; y < _; y++) m[y] = $[p[y]];
									h = n(m, c.width, 1)
								}
							}
							var O = function(t) {
								var n;
								switch (t) {
									case e.image_compression.FAST:
										n = 11;
										break;
									case e.image_compression.MEDIUM:
										n = 13;
										break;
									case e.image_compression.SLOW:
										n = 14;
										break;
									default:
										n = 12
								}
								return n
							}(o);
							return S === this.decode.FLATE_DECODE && (w = "/Predictor " + O + " "), w += "/Colors " + f + " /BitsPerComponent " + u + " /Columns " + c.width, (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) && (r = this.__addimage__.arrayBufferToBinaryString(r)), (h && this.__addimage__.isArrayBuffer(h) || this.__addimage__.isArrayBufferView(h)) && (h = this.__addimage__.arrayBufferToBinaryString(h)), {
								alias: a,
								data: r,
								index: i,
								filter: S,
								decodeParameters: w,
								transparency: l,
								palette: d,
								sMask: h,
								predictor: O,
								width: c.width,
								height: c.height,
								bitsPerComponent: u,
								colorSpace: s
							}
						}
					}
				}(D.API),
				function(e) {
					e.processGIF89A = function(t, n, r, i) {
						var a = new Qe(t),
							o = a.width,
							s = a.height,
							u = [];
						a.decodeAndBlitFrameRGBA(0, u);
						var c = {
								data: u,
								width: o,
								height: s
							},
							l = new qe(100).encode(c, 100);
						return e.processJPEG.call(this, l, n, r, i)
					}, e.processGIF87A = e.processGIF89A
				}(D.API), We.prototype.parseHeader = function() {
						if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
							var e = 0 === this.colors ? 1 << this.bitPP : this.colors;
							this.palette = new Array(e);
							for (var t = 0; t < e; t++) {
								var n = this.datav.getUint8(this.pos++, !0),
									r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0);
								this.palette[t] = {
									red: i,
									green: r,
									blue: n,
									quad: a
								}
							}
						}
						this.height < 0 && (this.height *= -1, this.bottom_up = !1)
					}, We.prototype.parseBGR = function() {
						this.pos = this.offset;
						try {
							var e = "bit" + this.bitPP,
								t = this.width * this.height * 4;
							this.data = new Uint8Array(t), this[e]()
						} catch (e) {
							o.log("bit decode error:" + e)
						}
					}, We.prototype.bit1 = function() {
						var e, t = Math.ceil(this.width / 8),
							n = t % 4;
						for (e = this.height - 1; e >= 0; e--) {
							for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < t; i++)
								for (var a = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
									var u = this.palette[a >> 7 - s & 1];
									this.data[o + 4 * s] = u.blue, this.data[o + 4 * s + 1] = u.green, this.data[o + 4 * s + 2] = u.red, this.data[o + 4 * s + 3] = 255
								}
							0 !== n && (this.pos += 4 - n)
						}
					}, We.prototype.bit4 = function() {
						for (var e = Math.ceil(this.width / 2), t = e % 4, n = this.height - 1; n >= 0; n--) {
							for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < e; i++) {
								var a = this.datav.getUint8(this.pos++, !0),
									o = r * this.width * 4 + 2 * i * 4,
									s = a >> 4,
									u = 15 & a,
									c = this.palette[s];
								if (this.data[o] = c.blue, this.data[o + 1] = c.green, this.data[o + 2] = c.red, this.data[o + 3] = 255, 2 * i + 1 >= this.width) break;
								c = this.palette[u], this.data[o + 4] = c.blue, this.data[o + 4 + 1] = c.green, this.data[o + 4 + 2] = c.red, this.data[o + 4 + 3] = 255
							}
							0 !== t && (this.pos += 4 - t)
						}
					}, We.prototype.bit8 = function() {
						for (var e = this.width % 4, t = this.height - 1; t >= 0; t--) {
							for (var n = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
								var i = this.datav.getUint8(this.pos++, !0),
									a = n * this.width * 4 + 4 * r;
								if (i < this.palette.length) {
									var o = this.palette[i];
									this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255
								} else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255
							}
							0 !== e && (this.pos += 4 - e)
						}
					}, We.prototype.bit15 = function() {
						for (var e = this.width % 3, t = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
							for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
								var a = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var o = (a & t) / t * 255 | 0,
									s = (a >> 5 & t) / t * 255 | 0,
									u = (a >> 10 & t) / t * 255 | 0,
									c = a >> 15 ? 255 : 0,
									l = r * this.width * 4 + 4 * i;
								this.data[l] = u, this.data[l + 1] = s, this.data[l + 2] = o, this.data[l + 3] = c
							}
							this.pos += e
						}
					}, We.prototype.bit16 = function() {
						for (var e = this.width % 3, t = parseInt("11111", 2), n = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
							for (var i = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
								var o = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var s = (o & t) / t * 255 | 0,
									u = (o >> 5 & n) / n * 255 | 0,
									c = (o >> 11) / t * 255 | 0,
									l = i * this.width * 4 + 4 * a;
								this.data[l] = c, this.data[l + 1] = u, this.data[l + 2] = s, this.data[l + 3] = 255
							}
							this.pos += e
						}
					}, We.prototype.bit24 = function() {
						for (var e = this.height - 1; e >= 0; e--) {
							for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0),
									o = t * this.width * 4 + 4 * n;
								this.data[o] = a, this.data[o + 1] = i, this.data[o + 2] = r, this.data[o + 3] = 255
							}
							this.pos += this.width % 4
						}
					}, We.prototype.bit32 = function() {
						for (var e = this.height - 1; e >= 0; e--)
							for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0),
									o = this.datav.getUint8(this.pos++, !0),
									s = t * this.width * 4 + 4 * n;
								this.data[s] = a, this.data[s + 1] = i, this.data[s + 2] = r, this.data[s + 3] = o
							}
					}, We.prototype.getData = function() {
						return this.data
					},
					function(e) {
						e.processBMP = function(t, n, r, i) {
							var a = new We(t, !1),
								o = a.width,
								s = a.height,
								u = {
									data: a.getData(),
									width: o,
									height: s
								},
								c = new qe(100).encode(u, 100);
							return e.processJPEG.call(this, c, n, r, i)
						}
					}(D.API), Ke.prototype.getData = function() {
						return this.data
					},
					function(e) {
						e.processWEBP = function(t, n, r, i) {
							var a = new Ke(t, !1),
								o = a.width,
								s = a.height,
								u = {
									data: a.getData(),
									width: o,
									height: s
								},
								c = new qe(100).encode(u, 100);
							return e.processJPEG.call(this, c, n, r, i)
						}
					}(D.API), D.API.setLanguage = function(e) {
						return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
							af: "Afrikaans",
							sq: "Albanian",
							ar: "Arabic (Standard)",
							"ar-DZ": "Arabic (Algeria)",
							"ar-BH": "Arabic (Bahrain)",
							"ar-EG": "Arabic (Egypt)",
							"ar-IQ": "Arabic (Iraq)",
							"ar-JO": "Arabic (Jordan)",
							"ar-KW": "Arabic (Kuwait)",
							"ar-LB": "Arabic (Lebanon)",
							"ar-LY": "Arabic (Libya)",
							"ar-MA": "Arabic (Morocco)",
							"ar-OM": "Arabic (Oman)",
							"ar-QA": "Arabic (Qatar)",
							"ar-SA": "Arabic (Saudi Arabia)",
							"ar-SY": "Arabic (Syria)",
							"ar-TN": "Arabic (Tunisia)",
							"ar-AE": "Arabic (U.A.E.)",
							"ar-YE": "Arabic (Yemen)",
							an: "Aragonese",
							hy: "Armenian",
							as: "Assamese",
							ast: "Asturian",
							az: "Azerbaijani",
							eu: "Basque",
							be: "Belarusian",
							bn: "Bengali",
							bs: "Bosnian",
							br: "Breton",
							bg: "Bulgarian",
							my: "Burmese",
							ca: "Catalan",
							ch: "Chamorro",
							ce: "Chechen",
							zh: "Chinese",
							"zh-HK": "Chinese (Hong Kong)",
							"zh-CN": "Chinese (PRC)",
							"zh-SG": "Chinese (Singapore)",
							"zh-TW": "Chinese (Taiwan)",
							cv: "Chuvash",
							co: "Corsican",
							cr: "Cree",
							hr: "Croatian",
							cs: "Czech",
							da: "Danish",
							nl: "Dutch (Standard)",
							"nl-BE": "Dutch (Belgian)",
							en: "English",
							"en-AU": "English (Australia)",
							"en-BZ": "English (Belize)",
							"en-CA": "English (Canada)",
							"en-IE": "English (Ireland)",
							"en-JM": "English (Jamaica)",
							"en-NZ": "English (New Zealand)",
							"en-PH": "English (Philippines)",
							"en-ZA": "English (South Africa)",
							"en-TT": "English (Trinidad & Tobago)",
							"en-GB": "English (United Kingdom)",
							"en-US": "English (United States)",
							"en-ZW": "English (Zimbabwe)",
							eo: "Esperanto",
							et: "Estonian",
							fo: "Faeroese",
							fj: "Fijian",
							fi: "Finnish",
							fr: "French (Standard)",
							"fr-BE": "French (Belgium)",
							"fr-CA": "French (Canada)",
							"fr-FR": "French (France)",
							"fr-LU": "French (Luxembourg)",
							"fr-MC": "French (Monaco)",
							"fr-CH": "French (Switzerland)",
							fy: "Frisian",
							fur: "Friulian",
							gd: "Gaelic (Scots)",
							"gd-IE": "Gaelic (Irish)",
							gl: "Galacian",
							ka: "Georgian",
							de: "German (Standard)",
							"de-AT": "German (Austria)",
							"de-DE": "German (Germany)",
							"de-LI": "German (Liechtenstein)",
							"de-LU": "German (Luxembourg)",
							"de-CH": "German (Switzerland)",
							el: "Greek",
							gu: "Gujurati",
							ht: "Haitian",
							he: "Hebrew",
							hi: "Hindi",
							hu: "Hungarian",
							is: "Icelandic",
							id: "Indonesian",
							iu: "Inuktitut",
							ga: "Irish",
							it: "Italian (Standard)",
							"it-CH": "Italian (Switzerland)",
							ja: "Japanese",
							kn: "Kannada",
							ks: "Kashmiri",
							kk: "Kazakh",
							km: "Khmer",
							ky: "Kirghiz",
							tlh: "Klingon",
							ko: "Korean",
							"ko-KP": "Korean (North Korea)",
							"ko-KR": "Korean (South Korea)",
							la: "Latin",
							lv: "Latvian",
							lt: "Lithuanian",
							lb: "Luxembourgish",
							mk: "FYRO Macedonian",
							ms: "Malay",
							ml: "Malayalam",
							mt: "Maltese",
							mi: "Maori",
							mr: "Marathi",
							mo: "Moldavian",
							nv: "Navajo",
							ng: "Ndonga",
							ne: "Nepali",
							no: "Norwegian",
							nb: "Norwegian (Bokmal)",
							nn: "Norwegian (Nynorsk)",
							oc: "Occitan",
							or: "Oriya",
							om: "Oromo",
							fa: "Persian",
							"fa-IR": "Persian/Iran",
							pl: "Polish",
							pt: "Portuguese",
							"pt-BR": "Portuguese (Brazil)",
							pa: "Punjabi",
							"pa-IN": "Punjabi (India)",
							"pa-PK": "Punjabi (Pakistan)",
							qu: "Quechua",
							rm: "Rhaeto-Romanic",
							ro: "Romanian",
							"ro-MO": "Romanian (Moldavia)",
							ru: "Russian",
							"ru-MO": "Russian (Moldavia)",
							sz: "Sami (Lappish)",
							sg: "Sango",
							sa: "Sanskrit",
							sc: "Sardinian",
							sd: "Sindhi",
							si: "Singhalese",
							sr: "Serbian",
							sk: "Slovak",
							sl: "Slovenian",
							so: "Somani",
							sb: "Sorbian",
							es: "Spanish",
							"es-AR": "Spanish (Argentina)",
							"es-BO": "Spanish (Bolivia)",
							"es-CL": "Spanish (Chile)",
							"es-CO": "Spanish (Colombia)",
							"es-CR": "Spanish (Costa Rica)",
							"es-DO": "Spanish (Dominican Republic)",
							"es-EC": "Spanish (Ecuador)",
							"es-SV": "Spanish (El Salvador)",
							"es-GT": "Spanish (Guatemala)",
							"es-HN": "Spanish (Honduras)",
							"es-MX": "Spanish (Mexico)",
							"es-NI": "Spanish (Nicaragua)",
							"es-PA": "Spanish (Panama)",
							"es-PY": "Spanish (Paraguay)",
							"es-PE": "Spanish (Peru)",
							"es-PR": "Spanish (Puerto Rico)",
							"es-ES": "Spanish (Spain)",
							"es-UY": "Spanish (Uruguay)",
							"es-VE": "Spanish (Venezuela)",
							sx: "Sutu",
							sw: "Swahili",
							sv: "Swedish",
							"sv-FI": "Swedish (Finland)",
							"sv-SV": "Swedish (Sweden)",
							ta: "Tamil",
							tt: "Tatar",
							te: "Teluga",
							th: "Thai",
							tig: "Tigre",
							ts: "Tsonga",
							tn: "Tswana",
							tr: "Turkish",
							tk: "Turkmen",
							uk: "Ukrainian",
							hsb: "Upper Sorbian",
							ur: "Urdu",
							ve: "Venda",
							vi: "Vietnamese",
							vo: "Volapuk",
							wa: "Walloon",
							cy: "Welsh",
							xh: "Xhosa",
							ji: "Yiddish",
							zu: "Zulu"
						} [e] && (this.internal.languageSettings.languageCode = e, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
							this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
						})), this.internal.languageSettings.isSubscribed = !0)), this
					}, Ue = D.API, je = Ue.getCharWidthsArray = function(e, t) {
						var n, r, i = (t = t || {}).font || this.internal.getFont(),
							a = t.fontSize || this.internal.getFontSize(),
							o = t.charSpace || this.internal.getCharSpace(),
							s = t.widths ? t.widths : i.metadata.Unicode.widths,
							u = s.fof ? s.fof : 1,
							c = t.kerning ? t.kerning : i.metadata.Unicode.kerning,
							l = c.fof ? c.fof : 1,
							f = !1 !== t.doKerning,
							d = 0,
							h = e.length,
							p = 0,
							_ = s[0] || u,
							m = [];
						for (n = 0; n < h; n++) r = e.charCodeAt(n), "function" == typeof i.metadata.widthOfString ? m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r)) + o * (1e3 / a) || 0) / 1e3) : (d = f && "object" == typeof c[r] && !isNaN(parseInt(c[r][p], 10)) ? c[r][p] / l : 0, m.push((s[r] || _) / u + d)), p = r;
						return m
					}, He = Ue.getStringUnitWidth = function(e, t) {
						var n = (t = t || {}).fontSize || this.internal.getFontSize(),
							r = t.font || this.internal.getFont(),
							i = t.charSpace || this.internal.getCharSpace();
						return Ue.processArabic && (e = Ue.processArabic(e)), "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(e, n, i) / n : je.apply(this, arguments).reduce((function(e, t) {
							return e + t
						}), 0)
					}, Ye = function(e, t, n, r) {
						for (var i = [], a = 0, o = e.length, s = 0; a !== o && s + t[a] < n;) s += t[a], a++;
						i.push(e.slice(0, a));
						var u = a;
						for (s = 0; a !== o;) s + t[a] > r && (i.push(e.slice(u, a)), s = 0, u = a), s += t[a], a++;
						return u !== a && i.push(e.slice(u, a)), i
					}, Ve = function(e, t, n) {
						n || (n = {});
						var r, i, a, o, s, u, c, l = [],
							f = [l],
							d = n.textIndent || 0,
							h = 0,
							p = 0,
							_ = e.split(" "),
							m = je.apply(this, [" ", n])[0];
						if (u = -1 === n.lineIndent ? _[0].length + 2 : n.lineIndent || 0) {
							var b = Array(u).join(" "),
								g = [];
							_.map((function(e) {
								(e = e.split(/\s*\n/)).length > 1 ? g = g.concat(e.map((function(e, t) {
									return (t && e.length ? "\n" : "") + e
								}))) : g.push(e[0])
							})), _ = g, u = He.apply(this, [b, n])
						}
						for (a = 0, o = _.length; a < o; a++) {
							var v = 0;
							if (r = _[a], u && "\n" == r[0] && (r = r.substr(1), v = 1), d + h + (p = (i = je.apply(this, [r, n])).reduce((function(e, t) {
									return e + t
								}), 0)) > t || v) {
								if (p > t) {
									for (s = Ye.apply(this, [r, i, t - (d + h), t]), l.push(s.shift()), l = [s.pop()]; s.length;) f.push([s.shift()]);
									p = i.slice(r.length - (l[0] ? l[0].length : 0)).reduce((function(e, t) {
										return e + t
									}), 0)
								} else l = [r];
								f.push(l), d = p + u, h = m
							} else l.push(r), d += h + p, h = m
						}
						return c = u ? function(e, t) {
							return (t ? b : "") + e.join(" ")
						} : function(e) {
							return e.join(" ")
						}, f.map(c)
					}, Ue.splitTextToSize = function(e, t, n) {
						var r, i = (n = n || {}).fontSize || this.internal.getFontSize(),
							a = function(e) {
								if (e.widths && e.kerning) return {
									widths: e.widths,
									kerning: e.kerning
								};
								var t = this.internal.getFont(e.fontName, e.fontStyle);
								return t.metadata.Unicode ? {
									widths: t.metadata.Unicode.widths || {
										0: 1
									},
									kerning: t.metadata.Unicode.kerning || {}
								} : {
									font: t.metadata,
									fontSize: this.internal.getFontSize(),
									charSpace: this.internal.getCharSpace()
								}
							}.call(this, n);
						r = Array.isArray(e) ? e : String(e).split(/\r?\n/);
						var o = 1 * this.internal.scaleFactor * t / i;
						a.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0, a.lineIndent = n.lineIndent;
						var s, u, c = [];
						for (s = 0, u = r.length; s < u; s++) c = c.concat(Ve.apply(this, [r[s], o, a]));
						return c
					},
					function(e) {
						e.__fontmetrics__ = e.__fontmetrics__ || {};
						for (var t = "klmnopqrstuvwxyz", n = {}, r = {}, i = 0; i < t.length; i++) n[t[i]] = "0123456789abcdef" [i], r["0123456789abcdef" [i]] = t[i];
						var a = function(e) {
								return "0x" + parseInt(e, 10).toString(16)
							},
							o = e.__fontmetrics__.compress = function(e) {
								var t, n, i, s, u = ["{"];
								for (var c in e) {
									if (t = e[c], isNaN(parseInt(c, 10)) ? n = "'" + c + "'" : (c = parseInt(c, 10), n = (n = a(c).slice(2)).slice(0, -1) + r[n.slice(-1)]), "number" == typeof t) t < 0 ? (i = a(t).slice(3), s = "-") : (i = a(t).slice(2), s = ""), i = s + i.slice(0, -1) + r[i.slice(-1)];
									else {
										if ("object" != typeof t) throw new Error("Don't know what to do with value type " + typeof t + ".");
										i = o(t)
									}
									u.push(n + i)
								}
								return u.push("}"), u.join("")
							},
							s = e.__fontmetrics__.uncompress = function(e) {
								if ("string" != typeof e) throw new Error("Invalid argument passed to uncompress.");
								for (var t, r, i, a, o = {}, s = 1, u = o, c = [], l = "", f = "", d = e.length - 1, h = 1; h < d; h += 1) "'" == (a = e[h]) ? t ? (i = t.join(""), t = void 0) : t = [] : t ? t.push(a) : "{" == a ? (c.push([u, i]), u = {}, i = void 0) : "}" == a ? ((r = c.pop())[0][r[1]] = u, i = void 0, u = r[0]) : "-" == a ? s = -1 : void 0 === i ? n.hasOwnProperty(a) ? (l += n[a], i = parseInt(l, 16) * s, s = 1, l = "") : l += a : n.hasOwnProperty(a) ? (f += n[a], u[i] = parseInt(f, 16) * s, s = 1, i = void 0, f = "") : f += a;
								return o
							},
							u = {
								codePages: ["WinAnsiEncoding"],
								WinAnsiEncoding: s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
							},
							c = {
								Unicode: {
									Courier: u,
									"Courier-Bold": u,
									"Courier-BoldOblique": u,
									"Courier-Oblique": u,
									Helvetica: u,
									"Helvetica-Bold": u,
									"Helvetica-BoldOblique": u,
									"Helvetica-Oblique": u,
									"Times-Roman": u,
									"Times-Bold": u,
									"Times-BoldItalic": u,
									"Times-Italic": u
								}
							},
							l = {
								Unicode: {
									"Courier-Oblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-BoldItalic": s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
									"Helvetica-Bold": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
									Courier: s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Courier-BoldOblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-Bold": s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
									Symbol: s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
									Helvetica: s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
									"Helvetica-BoldOblique": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
									ZapfDingbats: s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
									"Courier-Bold": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-Italic": s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
									"Times-Roman": s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
									"Helvetica-Oblique": s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
								}
							};
						e.events.push(["addFont", function(e) {
							var t = e.font,
								n = l.Unicode[t.postScriptName];
							n && (t.metadata.Unicode = {}, t.metadata.Unicode.widths = n.widths, t.metadata.Unicode.kerning = n.kerning);
							var r = c.Unicode[t.postScriptName];
							r && (t.metadata.Unicode.encoding = r, t.encoding = r.codePages[0])
						}])
					}(D.API),
					function(e) {
						var t = function(e) {
							for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
							return n
						};
						e.API.events.push(["addFont", function(n) {
							var r = void 0,
								i = n.font,
								a = n.instance;
							if (!i.isStandardFont) {
								if (void 0 === a) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
								if ("string" != typeof(r = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
								! function(n, r) {
									r = /^\x00\x01\x00\x00/.test(r) ? t(r) : t(l(r)), n.metadata = e.API.TTFFont.open(r), n.metadata.Unicode = n.metadata.Unicode || {
										encoding: {},
										kerning: {},
										widths: []
									}, n.metadata.glyIdsUsed = [0]
								}(i, r)
							}
						}])
					}(D),
					function(e) {
						function t() {
							return (i.canvg ? Promise.resolve(i.canvg) : n.e("chunk-28b0968c").then(n.bind(null, "0d73"))).catch((function(e) {
								return Promise.reject(new Error("Could not load canvg: " + e))
							})).then((function(e) {
								return e.default ? e.default : e
							}))
						}
						D.API.addSvgAsImage = function(e, n, r, i, a, s, u, c) {
							if (isNaN(n) || isNaN(r)) throw o.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
							if (isNaN(i) || isNaN(a)) throw o.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
							var l = document.createElement("canvas");
							l.width = i, l.height = a;
							var f = l.getContext("2d");
							f.fillStyle = "#fff", f.fillRect(0, 0, l.width, l.height);
							var d = {
									ignoreMouse: !0,
									ignoreAnimation: !0,
									ignoreDimensions: !0
								},
								h = this;
							return t().then((function(t) {
								return t.fromString(f, e, d)
							}), (function() {
								return Promise.reject(new Error("Could not load canvg."))
							})).then((function(e) {
								return e.render(d)
							})).then((function() {
								h.addImage(l.toDataURL("image/jpeg", 1), n, r, i, a, u, c)
							}))
						}
					}(), D.API.putTotalPages = function(e) {
						var t, n = 0;
						parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(e, "g"), n = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(e, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
						for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
							for (var i = 0; i < this.internal.pages[r].length; i++) this.internal.pages[r][i] = this.internal.pages[r][i].replace(t, n);
						return this
					}, D.API.viewerPreferences = function(e, t) {
						var n;
						e = e || {}, t = t || !1;
						var r, i, a, o = {
								HideToolbar: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								HideMenubar: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								HideWindowUI: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								FitWindow: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								CenterWindow: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								DisplayDocTitle: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.4
								},
								NonFullScreenPageMode: {
									defaultValue: "UseNone",
									value: "UseNone",
									type: "name",
									explicitSet: !1,
									valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
									pdfVersion: 1.3
								},
								Direction: {
									defaultValue: "L2R",
									value: "L2R",
									type: "name",
									explicitSet: !1,
									valueSet: ["L2R", "R2L"],
									pdfVersion: 1.3
								},
								ViewArea: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								ViewClip: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintArea: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintClip: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintScaling: {
									defaultValue: "AppDefault",
									value: "AppDefault",
									type: "name",
									explicitSet: !1,
									valueSet: ["AppDefault", "None"],
									pdfVersion: 1.6
								},
								Duplex: {
									defaultValue: "",
									value: "none",
									type: "name",
									explicitSet: !1,
									valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
									pdfVersion: 1.7
								},
								PickTrayByPDFSize: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.7
								},
								PrintPageRange: {
									defaultValue: "",
									value: "",
									type: "array",
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7
								},
								NumCopies: {
									defaultValue: 1,
									value: 1,
									type: "integer",
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7
								}
							},
							s = Object.keys(o),
							u = [],
							c = 0,
							l = 0,
							f = 0;

						function d(e, t) {
							var n, r = !1;
							for (n = 0; n < e.length; n += 1) e[n] === t && (r = !0);
							return r
						}
						if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, "reset" === e || !0 === t) {
							var h = s.length;
							for (f = 0; f < h; f += 1) n[s[f]].value = n[s[f]].defaultValue, n[s[f]].explicitSet = !1
						}
						if ("object" == typeof e)
							for (i in e)
								if (a = e[i], d(s, i) && void 0 !== a) {
									if ("boolean" === n[i].type && "boolean" == typeof a) n[i].value = a;
									else if ("name" === n[i].type && d(n[i].valueSet, a)) n[i].value = a;
									else if ("integer" === n[i].type && Number.isInteger(a)) n[i].value = a;
									else if ("array" === n[i].type) {
										for (c = 0; c < a.length; c += 1)
											if (r = !0, 1 === a[c].length && "number" == typeof a[c][0]) u.push(String(a[c] - 1));
											else if (a[c].length > 1) {
											for (l = 0; l < a[c].length; l += 1) "number" != typeof a[c][l] && (r = !1);
											!0 === r && u.push([a[c][0] - 1, a[c][1] - 1].join(" "))
										}
										n[i].value = "[" + u.join(" ") + "]"
									} else n[i].value = n[i].defaultValue;
									n[i].explicitSet = !0
								} return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
							var e, t = [];
							for (e in n) !0 === n[e].explicitSet && ("name" === n[e].type ? t.push("/" + e + " /" + n[e].value) : t.push("/" + e + " " + n[e].value));
							0 !== t.length && this.internal.write("/ViewerPreferences\n<<\n" + t.join("\n") + "\n>>")
						})), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this
					},
					function(e) {
						var t = function() {
								var e = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
									t = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
									n = unescape(encodeURIComponent(e)),
									r = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
									i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
									a = unescape(encodeURIComponent("</x:xmpmeta>")),
									o = n.length + r.length + i.length + t.length + a.length;
								this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(t + n + r + i + a), this.internal.write("endstream"), this.internal.write("endobj")
							},
							n = function() {
								this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
							};
						e.addMetadata = function(e, r) {
							return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
								metadata: e,
								namespaceuri: r || "http://jspdf.default.namespaceuri/"
							}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", t)), this
						}
					}(D.API),
					function(e) {
						var t = e.API,
							n = t.pdfEscape16 = function(e, t) {
								for (var n, r = t.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], a = [""], o = 0, s = e.length; o < s; ++o) {
									if (n = t.metadata.characterToGlyph(e.charCodeAt(o)), t.metadata.glyIdsUsed.push(n), t.metadata.toUnicode[n] = e.charCodeAt(o), -1 == r.indexOf(n) && (r.push(n), r.push([parseInt(t.metadata.widthOfGlyph(n), 10)])), "0" == n) return a.join("");
									n = n.toString(16), a.push(i[4 - n.length], n)
								}
								return a.join("")
							},
							r = function(e) {
								var t, n, r, i, a, o, s;
								for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], o = 0, s = (n = Object.keys(e).sort((function(e, t) {
										return e - t
									}))).length; o < s; o++) t = n[o], r.length >= 100 && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), void 0 !== e[t] && null !== e[t] && "function" == typeof e[t].toString && (i = ("0000" + e[t].toString(16)).slice(-4), t = ("0000" + (+t).toString(16)).slice(-4), r.push("<" + t + "><" + i + ">"));
								return r.length && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), a + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
							};
						t.events.push(["putFont", function(t) {
							! function(t) {
								var n = t.font,
									i = t.out,
									a = t.newObject,
									o = t.putStream,
									s = t.pdfEscapeWithNeededParanthesis;
								if (n.metadata instanceof e.API.TTFFont && "Identity-H" === n.encoding) {
									for (var u = n.metadata.Unicode.widths, c = n.metadata.subset.encode(n.metadata.glyIdsUsed, 1), l = "", f = 0; f < c.length; f++) l += String.fromCharCode(c[f]);
									var d = a();
									o({
										data: l,
										addLength1: !0,
										objectId: d
									}), i("endobj");
									var h = a();
									o({
										data: r(n.metadata.toUnicode),
										addLength1: !0,
										objectId: h
									}), i("endobj");
									var p = a();
									i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + s(n.fontName)), i("/FontFile2 " + d + " 0 R"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/Flags " + n.metadata.flags), i("/StemV " + n.metadata.stemV), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i(">>"), i("endobj");
									var _ = a();
									i("<<"), i("/Type /Font"), i("/BaseFont /" + s(n.fontName)), i("/FontDescriptor " + p + " 0 R"), i("/W " + e.API.PDFObject.convert(u)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + n.encoding + ")"), i(">>"), i(">>"), i("endobj"), n.objectNumber = a(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + h + " 0 R"), i("/BaseFont /" + s(n.fontName)), i("/Encoding /" + n.encoding), i("/DescendantFonts [" + _ + " 0 R]"), i(">>"), i("endobj"), n.isAlreadyPutted = !0
								}
							}(t)
						}]), t.events.push(["putFont", function(t) {
							! function(t) {
								var n = t.font,
									i = t.out,
									a = t.newObject,
									o = t.putStream,
									s = t.pdfEscapeWithNeededParanthesis;
								if (n.metadata instanceof e.API.TTFFont && "WinAnsiEncoding" === n.encoding) {
									for (var u = n.metadata.rawData, c = "", l = 0; l < u.length; l++) c += String.fromCharCode(u[l]);
									var f = a();
									o({
										data: c,
										addLength1: !0,
										objectId: f
									}), i("endobj");
									var d = a();
									o({
										data: r(n.metadata.toUnicode),
										addLength1: !0,
										objectId: d
									}), i("endobj");
									var h = a();
									i("<<"), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i("/StemV " + n.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + f + " 0 R"), i("/Flags 96"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/FontName /" + s(n.fontName)), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i(">>"), i("endobj"), n.objectNumber = a();
									for (var p = 0; p < n.metadata.hmtx.widths.length; p++) n.metadata.hmtx.widths[p] = parseInt(n.metadata.hmtx.widths[p] * (1e3 / n.metadata.head.unitsPerEm));
									i("<</Subtype/TrueType/Type/Font/ToUnicode " + d + " 0 R/BaseFont/" + s(n.fontName) + "/FontDescriptor " + h + " 0 R/Encoding/" + n.encoding + " /FirstChar 29 /LastChar 255 /Widths " + e.API.PDFObject.convert(n.metadata.hmtx.widths) + ">>"), i("endobj"), n.isAlreadyPutted = !0
								}
							}(t)
						}]);
						var i = function(e) {
							var t, r = e.text || "",
								i = e.x,
								a = e.y,
								o = e.options || {},
								s = e.mutex || {},
								u = s.pdfEscape,
								c = s.activeFontKey,
								l = s.fonts,
								f = c,
								d = "",
								h = 0,
								p = "",
								_ = l[f].encoding;
							if ("Identity-H" !== l[f].encoding) return {
								text: r,
								x: i,
								y: a,
								options: o,
								mutex: s
							};
							for (p = r, f = c, Array.isArray(r) && (p = r[0]), h = 0; h < p.length; h += 1) l[f].metadata.hasOwnProperty("cmap") && (t = l[f].metadata.cmap.unicode.codeMap[p[h].charCodeAt(0)]), t || p[h].charCodeAt(0) < 256 && l[f].metadata.hasOwnProperty("Unicode") ? d += p[h] : d += "";
							var m = "";
							return parseInt(f.slice(1)) < 14 || "WinAnsiEncoding" === _ ? m = u(d, f).split("").map((function(e) {
								return e.charCodeAt(0).toString(16)
							})).join("") : "Identity-H" === _ && (m = n(d, l[f])), s.isHex = !0, {
								text: m,
								x: i,
								y: a,
								options: o,
								mutex: s
							}
						};
						t.events.push(["postProcessText", function(e) {
							var t = e.text || "",
								n = [],
								r = {
									text: t,
									x: e.x,
									y: e.y,
									options: e.options,
									mutex: e.mutex
								};
							if (Array.isArray(t)) {
								var a = 0;
								for (a = 0; a < t.length; a += 1) Array.isArray(t[a]) && 3 === t[a].length ? n.push([i(Object.assign({}, r, {
									text: t[a][0]
								})).text, t[a][1], t[a][2]]) : n.push(i(Object.assign({}, r, {
									text: t[a]
								})).text);
								e.text = n
							} else e.text = i(Object.assign({}, r, {
								text: t
							})).text
						}])
					}(D),
					function(e) {
						var t = function() {
							return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0
						};
						e.existsFileInVFS = function(e) {
							return t.call(this), void 0 !== this.internal.vFS[e]
						}, e.addFileToVFS = function(e, n) {
							return t.call(this), this.internal.vFS[e] = n, this
						}, e.getFileFromVFS = function(e) {
							return t.call(this), void 0 !== this.internal.vFS[e] ? this.internal.vFS[e] : null
						}
					}(D.API),
					function(e) {
						e.__bidiEngine__ = e.prototype.__bidiEngine__ = function(e) {
							var n, r, i, a, o, s, u, c = t,
								l = [
									[0, 3, 0, 1, 0, 0, 0],
									[0, 3, 0, 1, 2, 2, 0],
									[0, 3, 0, 17, 2, 0, 1],
									[0, 3, 5, 5, 4, 1, 0],
									[0, 3, 21, 21, 4, 0, 1],
									[0, 3, 5, 5, 4, 2, 0]
								],
								f = [
									[2, 0, 1, 1, 0, 1, 0],
									[2, 0, 1, 1, 0, 2, 0],
									[2, 0, 2, 1, 3, 2, 0],
									[2, 0, 2, 33, 3, 1, 1]
								],
								d = {
									L: 0,
									R: 1,
									EN: 2,
									AN: 3,
									N: 4,
									B: 5,
									S: 6
								},
								h = {
									0: 0,
									5: 1,
									6: 2,
									7: 3,
									32: 4,
									251: 5,
									254: 6,
									255: 7
								},
								p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "Â«", "Â»", "Â«", "â€¹", "â€º", "â€¹", "â…", "â†", "â…", "â½", "â¾", "â½", "â‚", "â‚Ž", "â‚", "â‰¤", "â‰¥", "â‰¤", "âŒ©", "âŒª", "âŒ©", "ï¹™", "ï¹š", "ï¹™", "ï¹›", "ï¹œ", "ï¹›", "ï¹", "ï¹ž", "ï¹", "ï¹¤", "ï¹¥", "ï¹¤"],
								_ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
								m = !1,
								b = 0;
							this.__bidiEngine__ = {};
							var g = function(e) {
									var t = e.charCodeAt(),
										n = t >> 8,
										r = h[n];
									return void 0 !== r ? c[256 * r + (255 & t)] : 252 === n || 253 === n ? "AL" : _.test(n) ? "L" : 8 === n ? "R" : "N"
								},
								v = function(e) {
									for (var t, n = 0; n < e.length; n++) {
										if ("L" === (t = g(e.charAt(n)))) return !1;
										if ("R" === t) return !0
									}
									return !1
								},
								y = function(e, t, o, s) {
									var u, c, l, f, d = t[s];
									switch (d) {
										case "L":
										case "R":
											m = !1;
											break;
										case "N":
										case "AN":
											break;
										case "EN":
											m && (d = "AN");
											break;
										case "AL":
											m = !0, d = "R";
											break;
										case "WS":
											d = "N";
											break;
										case "CS":
											s < 1 || s + 1 >= t.length || "EN" !== (u = o[s - 1]) && "AN" !== u || "EN" !== (c = t[s + 1]) && "AN" !== c ? d = "N" : m && (c = "AN"), d = c === u ? c : "N";
											break;
										case "ES":
											d = "EN" === (u = s > 0 ? o[s - 1] : "B") && s + 1 < t.length && "EN" === t[s + 1] ? "EN" : "N";
											break;
										case "ET":
											if (s > 0 && "EN" === o[s - 1]) {
												d = "EN";
												break
											}
											if (m) {
												d = "N";
												break
											}
											for (l = s + 1, f = t.length; l < f && "ET" === t[l];) l++;
											d = l < f && "EN" === t[l] ? "EN" : "N";
											break;
										case "NSM":
											if (i && !a) {
												for (f = t.length, l = s + 1; l < f && "NSM" === t[l];) l++;
												if (l < f) {
													var h = e[s],
														p = h >= 1425 && h <= 2303 || 64286 === h;
													if (u = t[l], p && ("R" === u || "AL" === u)) {
														d = "R";
														break
													}
												}
											}
											d = s < 1 || "B" === (u = t[s - 1]) ? "N" : o[s - 1];
											break;
										case "B":
											m = !1, n = !0, d = b;
											break;
										case "S":
											r = !0, d = "N";
											break;
										case "LRE":
										case "RLE":
										case "LRO":
										case "RLO":
										case "PDF":
											m = !1;
											break;
										case "BN":
											d = "N"
									}
									return d
								},
								A = function(e, t, n) {
									var r = e.split("");
									return n && S(r, n, {
										hiLevel: b
									}), r.reverse(), t && t.reverse(), r.join("")
								},
								S = function(e, t, i) {
									var a, o, s, u, c, h = -1,
										p = e.length,
										_ = 0,
										v = [],
										A = b ? f : l,
										S = [];
									for (m = !1, n = !1, r = !1, o = 0; o < p; o++) S[o] = g(e[o]);
									for (s = 0; s < p; s++) {
										if (c = _, v[s] = y(e, S, v, s), a = 240 & (_ = A[c][d[v[s]]]), _ &= 15, t[s] = u = A[_][5], a > 0)
											if (16 === a) {
												for (o = h; o < s; o++) t[o] = 1;
												h = -1
											} else h = -1;
										if (A[_][6]) - 1 === h && (h = s);
										else if (h > -1) {
											for (o = h; o < s; o++) t[o] = u;
											h = -1
										}
										"B" === S[s] && (t[s] = 0), i.hiLevel |= u
									}
									r && function(e, t, n) {
										for (var r = 0; r < n; r++)
											if ("S" === e[r]) {
												t[r] = b;
												for (var i = r - 1; i >= 0 && "WS" === e[i]; i--) t[i] = b
											}
									}(S, t, p)
								},
								w = function(e, t, r, i, a) {
									if (!(a.hiLevel < e)) {
										if (1 === e && 1 === b && !n) return t.reverse(), void(r && r.reverse());
										for (var o, s, u, c, l = t.length, f = 0; f < l;) {
											if (i[f] >= e) {
												for (u = f + 1; u < l && i[u] >= e;) u++;
												for (c = f, s = u - 1; c < s; c++, s--) o = t[c], t[c] = t[s], t[s] = o, r && (o = r[c], r[c] = r[s], r[s] = o);
												f = u
											}
											f++
										}
									}
								},
								E = function(e, t, n) {
									var r = e.split(""),
										i = {
											hiLevel: b
										};
									return n || (n = []), S(r, n, i),
										function(e, t, n) {
											if (0 !== n.hiLevel && u)
												for (var r, i = 0; i < e.length; i++) 1 === t[i] && (r = p.indexOf(e[i])) >= 0 && (e[i] = p[r + 1])
										}(r, n, i), w(2, r, t, n, i), w(1, r, t, n, i), r.join("")
								};
							return this.__bidiEngine__.doBidiReorder = function(e, t, n) {
								if (function(e, t) {
										if (t)
											for (var n = 0; n < e.length; n++) t[n] = n;
										void 0 === a && (a = v(e)), void 0 === s && (s = v(e))
									}(e, t), i || !o || s)
									if (i && o && a ^ s) b = a ? 1 : 0, e = A(e, t, n);
									else if (!i && o && s) b = a ? 1 : 0, e = E(e, t, n), e = A(e, t);
								else if (!i || a || o || s) {
									if (i && !o && a ^ s) e = A(e, t), a ? (b = 0, e = E(e, t, n)) : (b = 1, e = E(e, t, n), e = A(e, t));
									else if (i && a && !o && s) b = 1, e = E(e, t, n), e = A(e, t);
									else if (!i && !o && a ^ s) {
										var r = u;
										a ? (b = 1, e = E(e, t, n), b = 0, u = !1, e = E(e, t, n), u = r) : (b = 0, e = E(e, t, n), e = A(e, t), b = 1, u = !1, e = E(e, t, n), u = r, e = A(e, t))
									}
								} else b = 0, e = E(e, t, n);
								else b = a ? 1 : 0, e = E(e, t, n);
								return e
							}, this.__bidiEngine__.setOptions = function(e) {
								e && (i = e.isInputVisual, o = e.isOutputVisual, a = e.isInputRtl, s = e.isOutputRtl, u = e.isSymmetricSwapping)
							}, this.__bidiEngine__.setOptions(e), this.__bidiEngine__
						};
						var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
							n = new e.__bidiEngine__({
								isInputVisual: !0
							});
						e.API.events.push(["postProcessText", function(e) {
							var t = e.text,
								r = (e.x, e.y, e.options || {}),
								i = (e.mutex, r.lang, []);
							if (r.isInputVisual = "boolean" != typeof r.isInputVisual || r.isInputVisual, n.setOptions(r), "[object Array]" === Object.prototype.toString.call(t)) {
								var a = 0;
								for (i = [], a = 0; a < t.length; a += 1) "[object Array]" === Object.prototype.toString.call(t[a]) ? i.push([n.doBidiReorder(t[a][0]), t[a][1], t[a][2]]) : i.push([n.doBidiReorder(t[a])]);
								e.text = i
							} else e.text = n.doBidiReorder(t);
							n.setOptions({
								isInputVisual: !0
							})
						}])
					}(D), D.API.TTFFont = function() {
						function e(e) {
							var t;
							if (this.rawData = e, t = this.contents = new Je(e), this.contents.pos = 4, "ttcf" === t.readString(4)) throw new Error("TTCF not supported.");
							t.pos = 0, this.parse(), this.subset = new bt(this), this.registerTTF()
						}
						return e.open = function(t) {
							return new e(t)
						}, e.prototype.parse = function() {
							return this.directory = new Ze(this.contents), this.head = new nt(this), this.name = new ct(this), this.cmap = new it(this), this.toUnicode = {}, this.hhea = new at(this), this.maxp = new lt(this), this.hmtx = new ft(this), this.post = new st(this), this.os2 = new ot(this), this.loca = new mt(this), this.glyf = new ht(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
						}, e.prototype.registerTTF = function() {
							var e, t, n, r, i;
							if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
									var t, n, r, i;
									for (i = [], t = 0, n = (r = this.bbox).length; t < n; t++) e = r[t], i.push(Math.round(e * this.scaleFactor));
									return i
								}.call(this), this.stemV = 0, this.post.exists ? (n = 255 & (r = this.post.italic_angle), 0 != (32768 & (t = r >> 16)) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + n)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font")
						}, e.prototype.characterToGlyph = function(e) {
							var t;
							return (null != (t = this.cmap.unicode) ? t.codeMap[e] : void 0) || 0
						}, e.prototype.widthOfGlyph = function(e) {
							var t;
							return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t
						}, e.prototype.widthOfString = function(e, t, n) {
							var r, i, a, o;
							for (a = 0, i = 0, o = (e = "" + e).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i) r = e.charCodeAt(i), a += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / t) || 0;
							return a * (t / 1e3)
						}, e.prototype.lineHeight = function(e, t) {
							var n;
							return null == t && (t = !1), n = t ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * e
						}, e
					}();
				var Xe, Je = function() {
						function e(e) {
							this.data = null != e ? e : [], this.pos = 0, this.length = this.data.length
						}
						return e.prototype.readByte = function() {
							return this.data[this.pos++]
						}, e.prototype.writeByte = function(e) {
							return this.data[this.pos++] = e
						}, e.prototype.readUInt32 = function() {
							return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
						}, e.prototype.writeUInt32 = function(e) {
							return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
						}, e.prototype.readInt32 = function() {
							var e;
							return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e
						}, e.prototype.writeInt32 = function(e) {
							return e < 0 && (e += 4294967296), this.writeUInt32(e)
						}, e.prototype.readUInt16 = function() {
							return this.readByte() << 8 | this.readByte()
						}, e.prototype.writeUInt16 = function(e) {
							return this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
						}, e.prototype.readInt16 = function() {
							var e;
							return (e = this.readUInt16()) >= 32768 ? e - 65536 : e
						}, e.prototype.writeInt16 = function(e) {
							return e < 0 && (e += 65536), this.writeUInt16(e)
						}, e.prototype.readString = function(e) {
							var t, n;
							for (n = [], t = 0; 0 <= e ? t < e : t > e; t = 0 <= e ? ++t : --t) n[t] = String.fromCharCode(this.readByte());
							return n.join("")
						}, e.prototype.writeString = function(e) {
							var t, n, r;
							for (r = [], t = 0, n = e.length; 0 <= n ? t < n : t > n; t = 0 <= n ? ++t : --t) r.push(this.writeByte(e.charCodeAt(t)));
							return r
						}, e.prototype.readShort = function() {
							return this.readInt16()
						}, e.prototype.writeShort = function(e) {
							return this.writeInt16(e)
						}, e.prototype.readLongLong = function() {
							var e, t, n, r, i, a, o, s;
							return e = this.readByte(), t = this.readByte(), n = this.readByte(), r = this.readByte(), i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * a + 256 * o + s
						}, e.prototype.writeLongLong = function(e) {
							var t, n;
							return t = Math.floor(e / 4294967296), n = 4294967295 & e, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n)
						}, e.prototype.readInt = function() {
							return this.readInt32()
						}, e.prototype.writeInt = function(e) {
							return this.writeInt32(e)
						}, e.prototype.read = function(e) {
							var t, n;
							for (t = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) t.push(this.readByte());
							return t
						}, e.prototype.write = function(e) {
							var t, n, r, i;
							for (i = [], n = 0, r = e.length; n < r; n++) t = e[n], i.push(this.writeByte(t));
							return i
						}, e
					}(),
					Ze = function() {
						var e;

						function t(e) {
							var t, n, r;
							for (this.scalarType = e.readInt(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) t = {
								tag: e.readString(4),
								checksum: e.readInt(),
								offset: e.readInt(),
								length: e.readInt()
							}, this.tables[t.tag] = t
						}
						return t.prototype.encode = function(t) {
							var n, r, i, a, o, s, u, c, l, f, d, h, p;
							for (p in d = Object.keys(t).length, s = Math.log(2), l = 16 * Math.floor(Math.log(d) / s), a = Math.floor(l / s), c = 16 * d - l, (r = new Je).writeInt(this.scalarType), r.writeShort(d), r.writeShort(l), r.writeShort(a), r.writeShort(c), i = 16 * d, u = r.pos + i, o = null, h = [], t)
